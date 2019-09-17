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
a[c]=function(){a[c]=function(){H.nm(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jV(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jF:function jF(){},
m3:function(a,b,c,d){P.hi(b,"start")
return new H.hM(a,b,c,[d])},
kg:function(){return new P.bz("No element")},
lD:function(){return new P.bz("Too many elements")},
lC:function(){return new P.bz("Too few elements")},
dj:function(a,b,c,d){if(c-b<=32)H.m1(a,b,c,d)
else H.m0(a,b,c,d)},
m1:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a4()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
m0:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a_(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a_(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.c(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.c(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.c(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.c(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.c(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=q
q=r
r=p}C.a.l(a2,d,u)
C.a.l(a2,b,s)
C.a.l(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.l(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.l(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.E(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ad()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a4()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.ad()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a4()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a4()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ad()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.l(a2,a3,a2[a1])
C.a.l(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.l(a2,a4,a2[a1])
C.a.l(a2,a1,r)
H.dj(a2,a3,o-2,a5)
H.dj(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.E(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.E(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ad()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)}n=j
break}}}H.dj(a2,o,n,a5)}else H.dj(a2,o,n,a5)},
P:function P(a){this.a=a},
f9:function f9(){},
d2:function d2(){},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c0:function c0(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fD:function fD(a,b,c){this.a=a
this.b=b
this.$ti=c},
fE:function fE(a,b){this.a=null
this.b=a
this.c=b},
fF:function fF(a,b,c){this.a=a
this.b=b
this.$ti=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
iA:function iA(a,b){this.a=a
this.b=b},
cR:function cR(){},
ih:function ih(){},
dy:function dy(){},
eB:function(a){var u,t=H.nn(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
n2:function(a){return v.types[a]},
n9:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.L(a).$ix},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a4(a)
if(typeof u!=="string")throw H.d(H.bj(a))
return u},
c9:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ca:function(a){return H.lN(a)+H.kL(H.bL(a),0,null)},
lN:function(a){var u,t,s,r,q,p,o,n=J.L(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ibB){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eB(t.length>1&&C.d.b9(t,0)===36?C.d.aU(t,1):t)},
kw:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lW:function(a){var u,t,s,r=H.b([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.bj(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.bc(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.bj(s))}return H.kw(r)},
kx:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.bj(s))
if(s<0)throw H.d(H.bj(s))
if(s>65535)return H.lW(a)}return H.kw(a)},
lV:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.bc(u,10))>>>0,56320|u&1023)}throw H.d(P.ae(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lU:function(a){var u=H.bx(a).getFullYear()+0
return u},
lS:function(a){var u=H.bx(a).getMonth()+1
return u},
lO:function(a){var u=H.bx(a).getDate()+0
return u},
lP:function(a){var u=H.bx(a).getHours()+0
return u},
lR:function(a){var u=H.bx(a).getMinutes()+0
return u},
lT:function(a){var u=H.bx(a).getSeconds()+0
return u},
lQ:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
u:function(a){throw H.d(H.bj(a))},
c:function(a,b){if(a==null)J.ak(a)
throw H.d(H.bI(a,b))},
bI:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,s,null)
u=J.ak(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.G(b,a,s,null,u)
return P.hh(b,s)},
mW:function(a,b,c){var u="Invalid value"
if(a>c)return new P.by(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.by(a,c,!0,b,"end",u)
return new P.ag(!0,b,"end",null)},
bj:function(a){return new P.ag(!0,a,null,null)},
mT:function(a){if(typeof a!=="number")throw H.d(H.bj(a))
return a},
d:function(a){var u
if(a==null)a=new P.da()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l_})
u.name=""}else u.toString=H.l_
return u},
l_:function(){return J.a4(this.dartException)},
t:function(a){throw H.d(a)},
o:function(a){throw H.d(P.aZ(a))},
at:function(a){var u,t,s,r,q,p
a=H.kY(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i6(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kE:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kr:function(a,b){return new H.h8(a,b==null?null:b.method)},
jG:function(a,b){var u=b==null,t=u?null:b.method
return new H.ft(a,t,u?null:b.receiver)},
ax:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jr(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.bc(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jG(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kr(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.l2()
q=$.l3()
p=$.l4()
o=$.l5()
n=$.l8()
m=$.l9()
l=$.l7()
$.l6()
k=$.lb()
j=$.la()
i=r.aj(u)
if(i!=null)return f.$1(H.jG(u,i))
else{i=q.aj(u)
if(i!=null){i.method="call"
return f.$1(H.jG(u,i))}else{i=p.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=n.aj(u)
if(i==null){i=m.aj(u)
if(i==null){i=l.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=k.aj(u)
if(i==null){i=j.aj(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kr(u,i))}}return f.$1(new H.ig(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dl()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ag(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dl()
return a},
jX:function(a){var u
if(a==null)return new H.ed(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ed(a)},
n_:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
n8:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.p("Unsupported number of arguments for wrapped closure"))},
bH:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n8)
a.$identity=u
return u},
lu:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hG().constructor.prototype):Object.create(new H.bO(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.al
if(typeof t!=="number")return t.D()
$.al=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.k8(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lq(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.k8(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lq:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n2,a)
if(typeof a=="function")if(b)return a
else{u=c?H.k7:H.ju
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
lr:function(a,b,c,d){var u=H.ju
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k8:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lt(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lr(t,!r,u,b)
if(t===0){r=$.al
if(typeof r!=="number")return r.D()
$.al=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bP
return new Function(r+H.e(q==null?$.bP=H.eO("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.al
if(typeof r!=="number")return r.D()
$.al=r+1
o+=r
r="return function("+o+"){return this."
q=$.bP
return new Function(r+H.e(q==null?$.bP=H.eO("self"):q)+"."+H.e(u)+"("+o+");}")()},
ls:function(a,b,c,d){var u=H.ju,t=H.k7
switch(b?-1:a){case 0:throw H.d(H.lZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lt:function(a,b){var u,t,s,r,q,p,o,n=$.bP
if(n==null)n=$.bP=H.eO("self")
u=$.k6
if(u==null)u=$.k6=H.eO("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ls(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.al
if(typeof u!=="number")return u.D()
$.al=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.al
if(typeof u!=="number")return u.D()
$.al=u+1
return new Function(n+u+"}")()},
jV:function(a,b,c,d,e,f,g){return H.lu(a,b,c,d,!!e,!!f,g)},
ju:function(a){return a.a},
k7:function(a){return a.c},
eO:function(a){var u,t,s,r=new H.bO("self","target","receiver","name"),q=J.jD(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ne:function(a,b){throw H.d(H.lp(a,H.eB(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else u=!0
if(u)return a
H.ne(a,b)},
mY:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lp:function(a,b){return new H.eS("CastError: "+P.jA(a)+": type '"+H.e(H.mP(a))+"' is not a subtype of type '"+b+"'")},
mP:function(a){var u,t=J.L(a)
if(!!t.$ibQ){u=H.mY(t)
if(u!=null)return H.nf(u)
return"Closure"}return H.ca(a)},
nm:function(a){throw H.d(new P.f2(a))},
lZ:function(a){return new H.hp(a)},
kT:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bL:function(a){if(a==null)return
return a.$ti},
nT:function(a,b,c){return H.bM(a["$a"+H.e(c)],H.bL(b))},
jW:function(a,b,c,d){var u=H.bM(a["$a"+H.e(c)],H.bL(b))
return u==null?null:u[d]},
jg:function(a,b,c){var u=H.bM(a["$a"+H.e(b)],H.bL(a))
return u==null?null:u[c]},
aw:function(a,b){var u=H.bL(a)
return u==null?null:u[b]},
nf:function(a){return H.bi(a,null)},
bi:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eB(a[0].name)+H.kL(a,1,b)
if(typeof a=="function")return H.eB(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.mm(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mm:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.n])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.d.D(p,a0[m])
l=u[q]
if(l!=null&&l!==P.U)p+=" extends "+H.bi(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bi(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bi(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bi(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mZ(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bi(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kL:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bb("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bi(p,c)}return"<"+u.h(0)+">"},
bM:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mU:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bL(a)
t=J.L(a)
if(t[b]==null)return!1
return H.kP(H.bM(t[d],u),null,c,null)},
kP:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aj(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aj(a[t],b,c[t],d))return!1
return!0},
nR:function(a,b,c){return a.apply(b,H.bM(J.L(b)["$a"+H.e(c)],H.bL(b)))},
aj:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="U"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="U"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aj(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="aG")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aj("type" in a?a.type:l,b,s,d)
else if(H.aj(a,b,s,d))return!0
else{if(!('$i'+"lA" in t.prototype))return!1
r=t.prototype["$a"+"lA"]
q=H.bM(r,u?a.slice(1):l)
return H.aj(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mn(a,b,c,d)
if('func' in a)return c.name==="cT"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kP(H.bM(m,u),b,p,d)},
mn:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aj(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aj(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aj(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aj(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nc(h,b,g,d)},
nc:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aj(c[s],d,a[s],b))return!1}return!0},
nS:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
na:function(a){var u,t,s,r,q=$.kU.$1(a),p=$.jd[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jk[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kO.$2(a,q)
if(q!=null){p=$.jd[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jk[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jo(u)
$.jd[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jk[q]=u
return u}if(s==="-"){r=H.jo(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kW(a,u)
if(s==="*")throw H.d(P.jO(q))
if(v.leafTags[q]===true){r=H.jo(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kW(a,u)},
kW:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jZ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jo:function(a){return J.jZ(a,!1,null,!!a.$ix)},
nb:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jo(u)
else return J.jZ(u,c,null,null)},
n6:function(){if(!0===$.jY)return
$.jY=!0
H.n7()},
n7:function(){var u,t,s,r,q,p,o,n
$.jd=Object.create(null)
$.jk=Object.create(null)
H.n5()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kX.$1(q)
if(p!=null){o=H.nb(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
n5:function(){var u,t,s,r,q,p,o=C.B()
o=H.bG(C.C,H.bG(C.D,H.bG(C.q,H.bG(C.q,H.bG(C.E,H.bG(C.F,H.bG(C.G(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kU=new H.jh(r)
$.kO=new H.ji(q)
$.kX=new H.jj(p)},
bG:function(a,b){return a(b)||b},
lF:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(new P.fl("Illegal RegExp pattern ("+String(p)+")",a))},
nh:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mX:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kY:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kZ:function(a,b,c){var u=H.ni(a,b,c)
return u},
ni:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kY(b),'g'),H.mX(c))},
nj:function(a,b,c,d){var u=a.indexOf(b,d)
if(u<0)return a
return H.nk(a,u,u+b.length,c)},
nk:function(a,b,c,d){var u=a.substring(0,b),t=a.substring(c)
return u+d+t},
i6:function i6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h8:function h8(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a){this.a=a},
jr:function jr(a){this.a=a},
ed:function ed(a){this.a=a
this.b=null},
bQ:function bQ(){},
hQ:function hQ(){},
hG:function hG(){},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a){this.a=a},
hp:function hp(a){this.a=a},
M:function M(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fw:function fw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d0:function d0(a,b){this.a=a
this.$ti=b},
fx:function fx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
fs:function fs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hL:function hL(a,b){this.a=a
this.c=b},
jS:function jS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bE:function(a){return a},
au:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bI(b,a))},
ml:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.mW(a,b,c))
return b},
c5:function c5(){},
d7:function d7(){},
bw:function bw(){},
c4:function c4(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
c6:function c6(){},
h5:function h5(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
mZ:function(a){return J.kh(a?Object.keys(a):[],null)},
nn:function(a){return v.mangledGlobalNames[a]},
nd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jf:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jY==null){H.n6()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.jO("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.k0()]
if(r!=null)return r
r=H.na(a)
if(r!=null)return r
if(typeof a=="function")return C.N
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.k0(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
lE:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.k5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ae(a,0,4294967295,"length",null))
return J.kh(new Array(a),b)},
kh:function(a,b){return J.jD(H.b(a,[b]))},
jD:function(a){a.fixed$length=Array
return a},
L:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cW.prototype
return J.cV.prototype}if(typeof a=="string")return J.b6.prototype
if(a==null)return J.cX.prototype
if(typeof a=="boolean")return J.fr.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.U)return a
return J.jf(a)},
eA:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.U)return a
return J.jf(a)},
je:function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.U)return a
return J.jf(a)},
n0:function(a){if(typeof a=="number")return J.bZ.prototype
if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.bB.prototype
return a},
n1:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.bB.prototype
return a},
bK:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.U)return a
return J.jf(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).n(a,b)},
eC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.eA(a).i(a,b)},
lh:function(a,b,c){return J.bK(a).fO(a,b,c)},
li:function(a,b,c,d){return J.bK(a).h7(a,b,c,d)},
jt:function(a,b){return J.n0(a).hi(a,b)},
cC:function(a,b){return J.je(a).B(a,b)},
lj:function(a,b){return J.je(a).J(a,b)},
lk:function(a){return J.bK(a).ghf(a)},
k2:function(a){return J.bK(a).gbS(a)},
ll:function(a){return J.bK(a).gbW(a)},
bl:function(a){return J.L(a).gI(a)},
bm:function(a){return J.je(a).gR(a)},
ak:function(a){return J.eA(a).gj(a)},
k3:function(a){return J.je(a).hV(a)},
lm:function(a,b){return J.bK(a).hX(a,b)},
ln:function(a){return J.n1(a).i4(a)},
a4:function(a){return J.L(a).h(a)},
a:function a(){},
fr:function fr(){},
cX:function cX(){},
cY:function cY(){},
hc:function hc(){},
bB:function bB(){},
b7:function b7(){},
b5:function b5(a){this.$ti=a},
jE:function jE(a){this.$ti=a},
Z:function Z(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bZ:function bZ(){},
cW:function cW(){},
cV:function cV(){},
b6:function b6(){}},P={
ma:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mQ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bH(new P.iC(s),1)).observe(u,{childList:true})
return new P.iB(s,u,t)}else if(self.setImmediate!=null)return P.mR()
return P.mS()},
mb:function(a){self.scheduleImmediate(H.bH(new P.iD(a),0))},
mc:function(a){self.setImmediate(H.bH(new P.iE(a),0))},
md:function(a){P.jM(C.i,a)},
jM:function(a,b){var u=C.c.a_(a.a,1000)
return P.mi(u<0?0:u,b)},
kD:function(a,b){var u=C.c.a_(a.a,1000)
return P.mj(u<0?0:u,b)},
mi:function(a,b){var u=new P.ej()
u.eh(a,b)
return u},
mj:function(a,b){var u=new P.ej()
u.ei(a,b)
return u},
mJ:function(){var u,t
for(;u=$.bF,u!=null;){$.cy=null
t=u.b
$.bF=t
if(t==null)$.cx=null
u.a.$0()}},
mO:function(){$.jT=!0
try{P.mJ()}finally{$.cy=null
$.jT=!1
if($.bF!=null)$.k1().$1(P.kQ())}},
mM:function(a){var u=new P.dF(a)
if($.bF==null){$.bF=$.cx=u
if(!$.jT)$.k1().$1(P.kQ())}else $.cx=$.cx.b=u},
mN:function(a){var u,t,s=$.bF
if(s==null){P.mM(a)
$.cy=$.cx
return}u=new P.dF(a)
t=$.cy
if(t==null){u.b=s
$.bF=$.cy=u}else{u.b=t.b
$.cy=t.b=u
if(u.b==null)$.cx=u}},
kC:function(a,b){var u=$.ai
if(u===C.e)return P.jM(a,b)
return P.jM(a,u.hg(b))},
m7:function(a,b){var u=$.ai
if(u===C.e)return P.kD(a,b)
return P.kD(a,u.d6(b,P.dt))},
kM:function(a,b,c,d,e){var u={}
u.a=d
P.mN(new P.jb(u,e))},
mK:function(a,b,c,d){var u,t=$.ai
if(t===c)return d.$0()
$.ai=c
u=t
try{t=d.$0()
return t}finally{$.ai=u}},
mL:function(a,b,c,d,e){var u,t=$.ai
if(t===c)return d.$1(e)
$.ai=c
u=t
try{t=d.$1(e)
return t}finally{$.ai=u}},
iC:function iC(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
ej:function ej(){this.c=0},
j3:function j3(a,b){this.a=a
this.b=b},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dF:function dF(a){this.a=a
this.b=null},
dn:function dn(){},
hJ:function hJ(){},
dt:function dt(){},
j6:function j6(){},
jb:function jb(a,b){this.a=a
this.b=b},
iR:function iR(){},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function(a,b){return new H.M([a,b])},
lH:function(a){return H.n_(a,new H.M([null,null]))},
d1:function(a){return new P.iO([a])},
jR:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mh:function(a,b){var u=new P.dV(a,b)
u.c=a.e
return u},
lB:function(a,b,c){var u,t
if(P.jU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.n])
$.a3.push(a)
try{P.mo(a,u)}finally{if(0>=$.a3.length)return H.c($.a3,-1)
$.a3.pop()}t=P.ky(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jC:function(a,b,c){var u,t
if(P.jU(a))return b+"..."+c
u=new P.bb(b)
$.a3.push(a)
try{t=u
t.a=P.ky(t.a,a,", ")}finally{if(0>=$.a3.length)return H.c($.a3,-1)
$.a3.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jU:function(a){var u,t
for(u=$.a3.length,t=0;t<u;++t)if(a===$.a3[t])return!0
return!1},
mo:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.e(n.gG(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gG(n);++l
if(!n.t()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gG(n);++l
for(;n.t();r=q,q=p){p=n.gG(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
kj:function(a,b){var u,t,s=P.d1(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)s.k(0,a[t])
return s},
kl:function(a){var u,t={}
if(P.jU(a))return"{...}"
u=new P.bb("")
try{$.a3.push(a)
u.a+="{"
t.a=!0
J.lj(a,new P.fC(t,u))
u.a+="}"}finally{if(0>=$.a3.length)return H.c($.a3,-1)
$.a3.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iO:function iO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iP:function iP(a){this.a=a
this.c=this.b=null},
dV:function dV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fy:function fy(){},
q:function q(){},
fB:function fB(){},
fC:function fC(a,b){this.a=a
this.b=b},
aC:function aC(){},
iV:function iV(){},
dW:function dW(){},
eU:function eU(){},
eY:function eY(){},
fb:function fb(){},
ik:function ik(){},
il:function il(){},
j4:function j4(a){this.b=0
this.c=a},
lz:function(a){if(a instanceof H.bQ)return a.h(0)
return"Instance of '"+H.e(H.ca(a))+"'"},
lI:function(a,b,c){var u,t,s=J.lE(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kk:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bm(a);u.t();)t.push(u.gG(u))
if(b)return t
return J.jD(t)},
jL:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.jI(0,null,u)
return H.kx(t<u?C.a.dT(a,0,t):a)}return P.m2(a,0,null)},
m2:function(a,b,c){var u,t,s=J.bm(a)
for(u=0;u<b;++u)if(!s.t())throw H.d(P.ae(b,0,u,null,null))
t=[]
for(;s.t();)t.push(s.gG(s))
return H.kx(t)},
lX:function(a){return new H.fs(a,H.lF(a,!1,!0,!1,!1,!1))},
ky:function(a,b,c){var u=J.bm(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gG(u))
while(u.t())}else{a+=H.e(u.gG(u))
for(;u.t();)a=a+c+H.e(u.gG(u))}return a},
mk:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.r){u=$.lg().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.hj(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lV(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lw:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cM:function(a){if(a>=10)return""+a
return"0"+a},
kb:function(a){return new P.b_(1000*a)},
jA:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lz(a)},
lo:function(a){return new P.ag(!1,null,null,a)},
k5:function(a,b,c){return new P.ag(!0,a,b,c)},
hh:function(a,b){return new P.by(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.by(b,c,!0,a,d,"Invalid value")},
jI:function(a,b,c){if(0>a||a>c)throw H.d(P.ae(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.ae(b,a,c,"end",null))
return b}return c},
hi:function(a,b){if(typeof a!=="number")return a.ad()
if(a<0)throw H.d(P.ae(a,0,null,b,null))},
G:function(a,b,c,d,e){var u=e==null?J.ak(b):e
return new P.fp(u,!0,a,c,"Index out of range")},
w:function(a){return new P.ii(a)},
jO:function(a){return new P.ie(a)},
jK:function(a){return new P.bz(a)},
aZ:function(a){return new P.eX(a)},
p:function(a){return new P.dN(a)},
k_:function(a){H.nd(a)},
av:function av(){},
ab:function ab(a,b){this.a=a
this.b=b},
K:function K(){},
b_:function b_(a){this.a=a},
f7:function f7(){},
f8:function f8(){},
bt:function bt(){},
da:function da(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by:function by(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fp:function fp(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ii:function ii(a){this.a=a},
ie:function ie(a){this.a=a},
bz:function bz(a){this.a=a},
eX:function eX(a){this.a=a},
hb:function hb(){},
dl:function dl(){},
f2:function f2(a){this.a=a},
dN:function dN(a){this.a=a},
fl:function fl(a,b){this.a=a
this.b=b},
cT:function cT(){},
y:function y(){},
i:function i(){},
fq:function fq(){},
m:function m(){},
S:function S(){},
aG:function aG(){},
a9:function a9(){},
U:function U(){},
jH:function jH(){},
n:function n(){},
bb:function bb(a){this.a=a},
kS:function(a){var u,t=J.L(a)
if(!!t.$ib2){u=t.gbW(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eo(a.data,a.height,a.width)},
kR:function(a){if(a instanceof P.eo)return{data:a.a,height:a.b,width:a.c}
return a},
aS:function(a){var u,t,s,r,q
if(a==null)return
u=P.ki(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
mV:function(a){var u={}
a.J(0,new P.jc(u))
return u},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a){this.a=a},
fh:function fh(a,b){this.a=a
this.b=b},
fi:function fi(){},
fj:function fj(){},
iN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mg:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iQ:function iQ(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
fv:function fv(){},
ba:function ba(){},
h9:function h9(){},
hg:function hg(){},
cd:function cd(){},
hK:function hK(){},
k:function k(){},
bd:function bd(){},
i5:function i5(){},
dT:function dT(){},
dU:function dU(){},
e3:function e3(){},
e4:function e4(){},
ef:function ef(){},
eg:function eg(){},
em:function em(){},
en:function en(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(a){this.a=a},
eL:function eL(){},
bn:function bn(){},
ha:function ha(){},
dG:function dG(){},
dg:function dg(){},
hF:function hF(){},
eb:function eb(){},
ec:function ec(){}},W={
k4:function(){var u=document.createElement("a")
return u},
eR:function(){var u=document.createElement("canvas")
return u},
ly:function(a,b,c){var u=document.body,t=(u&&C.o).ah(u,a,b,c)
t.toString
u=new H.cl(new W.a1(t),new W.fa(),[W.D])
return u.gaH(u)},
jy:function(a){return"wheel"},
bT:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bK(a)
t=u.gdK(a)
if(typeof t==="string")r=u.gdK(a)}catch(s){H.ax(s)}return r},
iM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kJ:function(a,b,c,d){var u=W.iM(W.iM(W.iM(W.iM(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
T:function(a,b,c,d){var u=W.kN(new W.iK(c),W.j)
if(u!=null&&!0)J.li(a,b,u,!1)
return new W.iJ(a,b,u,!1)},
kI:function(a){var u=W.k4(),t=window.location
u=new W.cn(new W.iU(u,t))
u.e4(a)
return u},
me:function(a,b,c,d){return!0},
mf:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kK:function(){var u=P.n,t=P.kj(C.l,u),s=H.b(["TEMPLATE"],[u])
t=new W.j0(t,P.d1(u),P.d1(u),P.d1(u),null)
t.ef(null,new H.fF(C.l,new W.j1(),[H.aw(C.l,0),u]),s,null)
return t},
kN:function(a,b){var u=$.ai
if(u===C.e)return a
return u.d6(a,b)},
l:function l(){},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
cE:function cE(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
cH:function cH(){},
aY:function aY(){},
eZ:function eZ(){},
F:function F(){},
bS:function bS(){},
f_:function f_(){},
aa:function aa(){},
an:function an(){},
f0:function f0(){},
f1:function f1(){},
f3:function f3(){},
f4:function f4(){},
cO:function cO(){},
cP:function cP(){},
f5:function f5(){},
f6:function f6(){},
iG:function iG(a,b){this.a=a
this.b=b},
O:function O(){},
fa:function fa(){},
j:function j(){},
f:function f(){},
aA:function aA(){},
ff:function ff(){},
fg:function fg(){},
fk:function fk(){},
aB:function aB(){},
fn:function fn(){},
bX:function bX(){},
b2:function b2(){},
bY:function bY(){},
bv:function bv(){},
fz:function fz(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(a){this.a=a},
fX:function fX(){},
fY:function fY(a){this.a=a},
aD:function aD(){},
fZ:function fZ(){},
aq:function aq(){},
a1:function a1(a){this.a=a},
D:function D(){},
d8:function d8(){},
aH:function aH(){},
hd:function hd(){},
hn:function hn(){},
ho:function ho(a){this.a=a},
hq:function hq(){},
aK:function aK(){},
hC:function hC(){},
aL:function aL(){},
hD:function hD(){},
aM:function aM(){},
hH:function hH(){},
hI:function hI(a){this.a=a},
ar:function ar(){},
dp:function dp(){},
hN:function hN(){},
hO:function hO(){},
ce:function ce(){},
aN:function aN(){},
as:function as(){},
hR:function hR(){},
hS:function hS(){},
i0:function i0(){},
aO:function aO(){},
bA:function bA(){},
i3:function i3(){},
i4:function i4(){},
be:function be(){},
ij:function ij(){},
iz:function iz(){},
bh:function bh(){},
cm:function cm(){},
iH:function iH(){},
dI:function dI(){},
iL:function iL(){},
e0:function e0(){},
iY:function iY(){},
iZ:function iZ(){},
iF:function iF(){},
iI:function iI(a){this.a=a},
iJ:function iJ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iK:function iK(a){this.a=a},
cn:function cn(a){this.a=a},
J:function J(){},
d9:function d9(a){this.a=a},
h7:function h7(a){this.a=a},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(){},
iW:function iW(){},
iX:function iX(){},
j0:function j0(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
j1:function j1(){},
j_:function j_(){},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aE:function aE(){},
iU:function iU(a,b){this.a=a
this.b=b},
ep:function ep(a){this.a=a},
j5:function j5(a){this.a=a},
dH:function dH(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dO:function dO(){},
dP:function dP(){},
dR:function dR(){},
dS:function dS(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e1:function e1(){},
e2:function e2(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
cs:function cs(){},
ct:function ct(){},
e9:function e9(){},
ea:function ea(){},
ee:function ee(){},
eh:function eh(){},
ei:function ei(){},
cu:function cu(){},
cv:function cv(){},
ek:function ek(){},
el:function el(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){}},T={
X:function(a){var u=new T.hr()
u.e1(a)
return u},
eE:function eE(){},
cU:function cU(){},
d4:function d4(){},
aF:function aF(){this.a=null},
hr:function hr(){this.a=null},
kz:function(a){var u=new T.hU()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
kA:function(a,b,c,d,e,f,g){var u,t,s
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
s=new T.hZ(t,e,d)
s.eA()
return s},
cI:function cI(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cJ:function cJ(a,b){this.c=a
this.d=b
this.b=null},
cf:function cf(){},
hT:function hT(){},
hU:function hU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hV:function hV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hX:function hX(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hY:function hY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c}},R={dm:function dm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},du:function du(a,b,c){this.a=a
this.b=b
this.c=c},dv:function dv(a){this.b=a
this.c=null},i1:function i1(){this.c=this.b=this.a=null},dw:function dw(a){this.b=a
this.a=this.c=null}},O={
eV:function(a){var u=new O.am([a])
u.b6(a)
return u},
am:function am(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c2:function c2(){this.b=this.a=null},
d5:function d5(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fN:function fN(a,b){this.a=a
this.b=b},
fO:function fO(){},
fP:function fP(a,b){this.a=a
this.b=b},
fQ:function fQ(){},
fR:function fR(a,b){this.a=a
this.b=b},
fS:function fS(){},
fH:function fH(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c1:function c1(){},
fI:function fI(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ao:function ao(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fK:function fK(){var _=this
_.e=_.d=_.c=_.b=null},
fL:function fL(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fM:function fM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
di:function di(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(){this.c=this.b=this.a=null},
dq:function dq(){},
dr:function dr(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bc:function bc(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
bU:function(a){var u,t=new E.az()
t.a=""
t.b=!0
u=O.eV(E.az)
t.y=u
u.aG(t.ghD(),t.ghG())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.scu(0,a)
t.saF(null)
t.scf(null)
return t},
lY:function(a,b){var u=new E.hj(a)
u.e0(a,b)
return u},
m6:function(a,b,c,d,e){var u,t,s=J.L(a)
if(!!s.$ibq)return E.kB(a,!0,!0,!0,!1)
u=W.eR()
t=u.style
t.width="100%"
t.height="100%"
s.gbS(a).k(0,u)
return E.kB(u,!0,!0,!0,!1)},
kB:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.ds(),p=C.f.cp(a,"webgl2",P.lH(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.p("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lY(p,a)
u=new T.hX(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dz(a)
t=new X.fu()
t.c=new X.a6(!1,!1,!1)
t.d=P.d1(P.y)
u.b=t
t=new X.h_(u)
t.f=0
t.r=V.aI()
t.x=V.aI()
t.ch=t.Q=1
u.c=t
t=new X.fA(u)
t.r=0
t.x=V.aI()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i2(u)
t.f=V.aI()
t.r=V.aI()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dn,P.U]])
u.z=t
s=document
t.push(W.T(s,"contextmenu",u.gf1(),!1))
u.z.push(W.T(a,"focus",u.gfb(),!1))
u.z.push(W.T(a,"blur",u.geW(),!1))
u.z.push(W.T(s,"keyup",u.gff(),!1))
u.z.push(W.T(s,"keydown",u.gfd(),!1))
u.z.push(W.T(a,"mousedown",u.gfj(),!1))
u.z.push(W.T(a,"mouseup",u.gfn(),!1))
u.z.push(W.T(a,r,u.gfl(),!1))
t=u.z
W.jy(a)
W.jy(a)
t.push(W.T(a,W.jy(a),u.gfp(),!1))
u.z.push(W.T(s,r,u.gf3(),!1))
u.z.push(W.T(s,"mouseup",u.gf5(),!1))
u.z.push(W.T(s,"pointerlockchange",u.gfs(),!1))
u.z.push(W.T(a,"touchstart",u.gfK(),!1))
u.z.push(W.T(a,"touchend",u.gfG(),!1))
u.z.push(W.T(a,"touchmove",u.gfI(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.ab(Date.now(),!1)
q.cy=0
q.cY()
return q},
eN:function eN(){},
az:function az(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
ds:function ds(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i_:function i_(a){this.a=a}},Z={
jQ:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bE(c)),35044)
a.bindBuffer(b,null)
return new Z.dE(b,u)},
af:function(a){return new Z.aR(a)},
dE:function dE(a,b){this.a=a
this.b=b},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bD:function bD(a){this.a=a},
aX:function aX(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a){this.a=a}},D={
z:function(){var u=new D.b0()
u.d=0
return u},
eT:function eT(){},
b0:function b0(){var _=this
_.d=_.c=_.b=_.a=null},
fd:function fd(a){this.a=a},
fe:function fe(a){this.a=a},
R:function R(){this.b=null},
b3:function b3(){this.b=null},
b4:function b4(){this.b=null},
r:function r(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ka:function(a,b){var u,t,s=new D.bs()
s.c=new V.I(1,1,1)
s.a=V.m9()
s.d=V.jP()
s.e=V.m8()
u=s.b
s.b=b
b.gm().k(0,s.ge5())
t=new D.r("mover",u,s.b)
t.b=!0
s.ax(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.r("color",u,a)
t.b=!0
s.ax(t)}return s},
bs:function bs(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a5:function a5(){},
d_:function d_(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
he:function he(){},
hE:function hE(){}},X={cG:function cG(a,b){this.a=a
this.b=b},cZ:function cZ(a,b){this.a=a
this.b=b},fu:function fu(){var _=this
_.d=_.c=_.b=_.a=null},d3:function d3(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fA:function fA(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},ad:function ad(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h_:function h_(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c3:function c3(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hf:function hf(){},cg:function cg(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i2:function i2(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dz:function dz(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jB:function(a,b){var u=new X.fm(),t=new V.N(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.df()
u.r=t
return u},
ks:function(a){var u,t,s=new X.db()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().k(0,s.gej())
t=new D.r("mover",u,s.b)
t.b=!0
s.Y(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.v().a)){s.c=1.0471975511965976
t=new D.r("fov",t,1.0471975511965976)
t.b=!0
s.Y(t)}t=s.d
if(!(Math.abs(t-0.1)<$.v().a)){s.d=0.1
t=new D.r("near",t,0.1)
t.b=!0
s.Y(t)}t=s.e
if(!(Math.abs(t-2000)<$.v().a)){s.e=2000
t=new D.r("far",t,2000)
t.b=!0
s.Y(t)}return s},
eM:function eM(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jv:function jv(){},
fm:function fm(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(){this.b=this.a=null},
db:function db(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(){}},V={
lv:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.b.aQ(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.I(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.I(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.I(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.I(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.I(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.I(p,o,n)}},
js:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.bs(a-b,u)
return(a<0?a+u:a)+b},
B:function(a,b,c){if(a==null)return C.d.ak("null",c)
return C.d.ak(C.b.dM(Math.abs(a-0)<$.v().a?0:a,b),c+b+1)},
bJ:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.n])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.B(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.d.ak(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
cz:function(a){return C.b.i2(Math.pow(2,C.j.aQ(Math.log(H.mT(a))/Math.log(2))))},
b9:function(){var u=$.fT
return u==null?$.fT=V.ap(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ap:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lM:function(a,b,c){return V.ap(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lL:function(a,b,c){return V.ap(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
kn:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ap(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
ko:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ap(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kp:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ap(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
kq:function(a,b,c,d){d=V.jP()
return V.km(V.kv(),d,new V.A(a,b,c))},
km:function(a,b,c){var u=c.u(0,Math.sqrt(c.w(c))),t=b.b0(u),s=t.u(0,Math.sqrt(t.w(t))),r=u.b0(s),q=new V.A(a.a,a.b,a.c),p=s.N(0).w(q),o=r.N(0).w(q),n=u.N(0).w(q)
return V.ap(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aI:function(){var u=$.ku
return u==null?$.ku=new V.a_(0,0):u},
kv:function(){var u=$.c8
return u==null?$.c8=new V.a0(0,0,0):u},
df:function(){var u=$.cb
return u==null?$.cb=V.de(0,0,1,1):u},
de:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dd(a,b,c,d)},
dD:function(){var u=$.kH
return u==null?$.kH=new V.A(0,0,0):u},
m8:function(){var u=$.im
return u==null?$.im=new V.A(-1,0,0):u},
jP:function(){var u=$.io
return u==null?$.io=new V.A(0,1,0):u},
m9:function(){var u=$.ip
return u==null?$.ip=new V.A(0,0,1):u},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fc:function fc(a){this.a=a},
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
ac:function ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a_:function a_(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
ng:function(a){P.m7(C.L,new V.jp(a))},
m_:function(a){var u=new V.hw()
u.e2(a,!0)
return u},
eP:function eP(a){this.a=a
this.c=this.b=null},
eQ:function eQ(a){this.a=a},
jp:function jp(a){this.a=a},
hw:function hw(){this.b=this.a=null},
hy:function hy(a){this.a=a},
hx:function hx(a){this.a=a}},U={
jw:function(){var u=new U.eW()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jx:function(a){var u=new U.bR()
u.a=a
return u},
kf:function(){var u=new U.bW()
u.b6(U.a7)
u.aG(u.ge7(),u.gfw())
u.e=null
u.f=V.b9()
u.r=0
return u},
eW:function eW(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bR:function bR(){this.b=this.a=null},
bW:function bW(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a7:function a7(){},
cc:function cc(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
k9:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.cL()
k.a=!0
u=E.bU(l)
t=F.jJ()
s=t.a
r=new V.A(-1,-1,1)
r=r.u(0,Math.sqrt(r.w(r)))
q=s.be(new V.aJ(1,2,4,6),new V.N(1,0,0,1),new V.a0(-1,-1,0),new V.a_(0,1),r,l)
s=t.a
r=new V.A(1,-1,1)
r=r.u(0,Math.sqrt(r.w(r)))
p=s.be(new V.aJ(0,3,4,6),new V.N(0,0,1,1),new V.a0(1,-1,0),new V.a_(1,1),r,l)
s=t.a
r=new V.A(1,1,1)
r=r.u(0,Math.sqrt(r.w(r)))
o=s.be(new V.aJ(0,2,5,6),new V.N(0,1,0,1),new V.a0(1,1,0),new V.a_(1,0),r,l)
s=t.a
r=V.aI()
n=new V.A(-1,1,1)
n=n.u(0,Math.sqrt(n.w(n)))
m=s.be(new V.aJ(0,2,4,7),new V.N(1,1,0,1),new V.a0(-1,1,0),r,n,l)
t.d.h8(H.b([q,p,o,m],[F.bC]))
t.aC()
u.scu(0,t)
k.e=u
k.saO(l)
k.saE(0,l)
k.saF(l)
return k},
ke:function(){var u,t,s=new M.cQ()
s.a=!0
u=O.eV(E.az)
s.e=u
u.aG(s.geY(),s.gf_())
s.y=s.x=s.r=s.f=null
t=X.jB(!0,null)
s.saO(null)
s.saE(0,t)
return s},
cK:function cK(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cL:function cL(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cQ:function cQ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ah:function ah(){},
kV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5="testCanvas",b6=null,b7="modifiers",b8=V.m_("Test 043"),b9=W.eR()
b9.className="pageLargeCanvas"
b9.id=b5
b8.a.appendChild(b9)
u=[P.n]
b8.d4(H.b(["Test of the color picker, used to read the color of a pixel from a texture. It uses a back buffer with solid colored entities to pick which one to move. Also testing out the ability to screen shot a back buffer."],u))
b8.h6(H.b(["buttons"],u))
b8.d4(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b5)
if(t==null)H.t(P.p("Failed to find an element with the identifier, testCanvas."))
s=E.m6(t,!0,!0,!0,!1)
r=U.kf()
b8=s.r
q=new U.dB()
p=U.jw()
p.scn(0,!0)
p.scc(6.283185307179586)
p.sce(0)
p.sab(0,0)
p.scd(100)
p.sS(0)
p.sbV(0.5)
q.b=p
o=q.gaL()
p.gm().k(0,o)
p=U.jw()
p.scn(0,!0)
p.scc(6.283185307179586)
p.sce(0)
p.sab(0,0)
p.scd(100)
p.sS(0)
p.sbV(0.5)
q.c=p
p.gm().k(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.a6(!1,!1,!1)
m=q.d
q.d=n
p=new D.r(b7,m,n)
p.b=!0
q.E(p)
p=q.f
if(p!==!1){q.f=!1
p=new D.r("invertX",p,!1)
p.b=!0
q.E(p)}p=q.r
if(p!==!1){q.r=!1
p=new D.r("invertY",p,!1)
p.b=!0
q.E(p)}q.aB(b8)
r.k(0,q)
b8=s.r
q=new U.dA()
p=U.jw()
p.scn(0,!0)
p.scc(6.283185307179586)
p.sce(0)
p.sab(0,0)
p.scd(100)
p.sS(0)
p.sbV(0.2)
q.b=p
p.gm().k(0,q.gaL())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
n=new X.a6(!0,!1,!1)
m=q.c
q.c=n
p=new D.r(b7,m,n)
p.b=!0
q.E(p)
q.aB(b8)
r.k(0,q)
b8=s.r
q=new U.dC()
q.c=0.01
q.e=q.d=0
n=new X.a6(!1,!1,!1)
q.b=n
p=new D.r(b7,b6,n)
p.b=!0
q.E(p)
q.aB(b8)
r.k(0,q)
r.k(0,U.jx(V.lM(0,0,5)))
l=X.ks(r)
k=s.f.du("../resources/diceColor")
j=new O.d5()
b8=O.eV(V.ac)
j.e=b8
b8.aG(j.geS(),j.geU())
b8=new O.ao(j,"emission")
b8.c=new A.W(!1,!1,!1)
b8.f=new V.I(0,0,0)
j.f=b8
b8=new O.ao(j,"ambient")
b8.c=new A.W(!1,!1,!1)
b8.f=new V.I(0,0,0)
j.r=b8
b8=new O.ao(j,"diffuse")
b8.c=new A.W(!1,!1,!1)
b8.f=new V.I(0,0,0)
j.x=b8
b8=new O.ao(j,"invDiffuse")
b8.c=new A.W(!1,!1,!1)
b8.f=new V.I(0,0,0)
j.y=b8
b8=new O.fM(j,"specular")
b8.c=new A.W(!1,!1,!1)
b8.f=new V.I(0,0,0)
b8.ch=100
j.z=b8
b8=new O.fI(j,"bump")
b8.c=new A.W(!1,!1,!1)
j.Q=b8
j.ch=null
b8=new O.ao(j,"reflect")
b8.c=new A.W(!1,!1,!1)
b8.f=new V.I(0,0,0)
j.cx=b8
b8=new O.fL(j,"refract")
b8.c=new A.W(!1,!1,!1)
b8.f=new V.I(0,0,0)
b8.ch=1
j.cy=b8
b8=new O.fH(j,"alpha")
b8.c=new A.W(!1,!1,!1)
b8.f=1
j.db=b8
b8=new D.d_()
b8.b6(D.a5)
b8.e=H.b([],[D.bs])
b8.f=H.b([],[D.he])
b8.r=H.b([],[D.hE])
b8.y=b8.x=null
b8.cs(b8.geQ(),b8.gfu(),b8.gfA())
j.dx=b8
q=new O.fK()
q.b=new V.N(0,0,0,0)
q.c=1
q.d=10
q.e=!1
j.dy=q
q=b8.x
b8=q==null?b8.x=D.z():q
b8.k(0,j.gfQ())
b8=j.dx
q=b8.y
b8=q==null?b8.y=D.z():q
b8.k(0,j.ga5())
j.fr=null
b8=j.dx
q=U.jx(V.kq(-1,-1,-1,b6))
b8.k(0,D.ka(new V.I(1,0.9,0.9),q))
b8=j.dx
q=U.jx(V.kq(1,1,2,b6))
b8.k(0,D.ka(new V.I(0.2,0.2,0.35),q))
b8=j.r
b8.saZ(0,new V.I(0.2,0.2,0.2))
j.r.sb4(k)
b8=j.x
b8.saZ(0,new V.I(0.8,0.8,0.8))
j.x.sb4(k)
b8=j.z
b8.saZ(0,new V.I(0.7,0.7,0.7))
b8=j.z
b8.bM(new A.W(!0,!1,b8.c.c))
b8.d0(10)
j.Q.sb4(s.f.du("../resources/diceBumpMap"))
i=H.b([],[U.cc])
h=H.b([],[V.N])
g=F.jJ()
F.cw(g,b6,b6,1,1,1,0,0,1)
F.cw(g,b6,b6,1,1,0,1,0,3)
F.cw(g,b6,b6,1,1,0,0,1,2)
F.cw(g,b6,b6,1,1,-1,0,0,0)
F.cw(g,b6,b6,1,1,0,-1,0,0)
F.cw(g,b6,b6,1,1,0,0,-1,3)
g.aC()
f=E.bU(g)
e=E.bU(b6)
d=E.bU(b6)
for(c=-1.6;c<=1.7;c+=0.8)for(b=-1.6;b<=1.7;b+=0.8)for(a=-1.6;a<=1.7;a+=0.8){a0=new V.ac(1,0,0,c,0,1,0,b,0,0,1,a,0,0,0,1).p(0,new V.ac(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
r=new U.cc()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.sdN(0)
r.sdG(0,0)
r.sdJ(0)
b8=r.d
if(!(Math.abs(b8-0)<$.v().a)){r.d=0
b8=new D.r("deltaYaw",b8,0)
b8.b=!0
q=r.y
if(q!=null)q.v(b8)}r.sbX(0)
r.sbY(0)
i.push(r)
a1=U.kf()
b8=[H.jg(a1,"am",0)]
if(a1.as(H.b([r],b8))){q=a1.a
a2=q.length
q.push(r)
q=H.b([r],b8)
p=a1.c
if(p!=null)p.$2(a2,q)}q=new U.bR()
q.sU(0,a0)
if(a1.as(H.b([q],b8))){p=a1.a
a2=p.length
p.push(q)
b8=H.b([q],b8)
q=a1.c
if(q!=null)q.$2(a2,b8)}a3=E.bU(b6)
a3.saF(j)
a3.scf(a1)
b8=a3.y
q=[H.aw(b8,0)]
if(b8.as(H.b([f],q))){p=b8.a
a2=p.length
p.push(f)
q=H.b([f],q)
b8=b8.c
if(b8!=null)b8.$2(a2,q)}b8=e.y
q=[H.aw(b8,0)]
if(b8.as(H.b([a3],q))){p=b8.a
a2=p.length
p.push(a3)
q=H.b([a3],q)
b8=b8.c
if(b8!=null)b8.$2(a2,q)}b8=V.lv(h.length/125,1,1)
k=new V.N(Math.floor(b8.a*255)/255,Math.floor(b8.b*255)/255,Math.floor(b8.c*255)/255,Math.floor(255)/255)
h.push(k)
a4=E.bU(b6)
b8=new O.hA()
b8.b=k
a4.saF(b8)
a4.scf(a1)
b8=a4.y
q=[H.aw(b8,0)]
if(b8.as(H.b([f],q))){p=b8.a
a2=p.length
p.push(f)
q=H.b([f],q)
b8=b8.c
if(b8!=null)b8.$2(a2,q)}b8=d.y
q=[H.aw(b8,0)]
if(b8.as(H.b([a4],q))){p=b8.a
a2=p.length
p.push(a4)
q=H.b([a4],q)
b8=b8.c
if(b8!=null)b8.$2(a2,q)}}a5=new X.eM()
a5.d=a5.c=a5.b=a5.a=512
a5.e=!0
a5.f=!1
a5.x=a5.r=1
a5.ch=T.kz(b6)
a5.cx=new V.N(0,0,0,1)
a5.cy=!0
a5.db=2000
a5.dx=!0
a5.dy=V.df()
a5.sam(0,512)
a5.sai(0,512)
k=new V.N(0,0,0,1)
if(!a5.cx.n(0,k)){m=a5.cx
a5.cx=k
b8=new D.r("color",m,k)
b8.b=!0
a5.Y(b8)}b8=a5.db
if(!(Math.abs(b8-2000)<$.v().a)){a5.db=2000
b8=new D.r("depth",b8,2000)
b8.b=!0
a5.Y(b8)}if(!a5.f){a5.f=!0
b8=new D.r("autoResize",!1,!0)
b8.b=!0
a5.Y(b8)}b8=a5.r
if(!(Math.abs(b8-0.5)<$.v().a)){a5.r=0.5
b8=new D.r("autoResizeScalarX",b8,0.5)
b8.b=!0
a5.Y(b8)}b8=a5.x
if(!(Math.abs(b8-0.5)<$.v().a)){a5.x=0.5
b8=new D.r("autoResizeScalarY",b8,0.5)
b8.b=!0
a5.Y(b8)}a6=V.df()
if(!J.E(a5.dy,a6)){m=a5.dy
a5.dy=a6
b8=new D.r("region",m,a6)
b8.b=!0
a5.Y(b8)}a7=M.ke()
a7.e.k(0,d)
a7.saE(0,a5)
a7.saO(l)
a8=X.jB(!1,b6)
a9=M.ke()
a9.e.k(0,e)
a9.saE(0,a8)
a9.saO(l)
b8=s.f.dv("../resources/maskonaive",".jpg")
b0=M.k9()
q=new O.di()
q.b=1.0471975511965976
q.d=new V.I(1,1,1)
m=q.c
q.c=b8
b8.gm().k(0,q.ga5())
b8=new D.r("boxTexture",m,q.c)
b8.b=!0
q.A(b8)
b0.saF(q)
b0.saE(0,a8)
b0.saO(l)
b1=new O.dr()
b1.a=new V.N(0,0,0,0)
b8=O.eV(O.bc)
b1.c=b8
b8.aG(b1.gf7(),b1.gf9())
b1.d=0
b1.e=null
b1.r=b1.f=C.h
b2=new V.N(0,0,0,0)
if(!b1.a.n(0,b2)){m=b1.a
b1.a=b2
b8=new D.r("backColor",m,b2)
b8.b=!0
b1.A(b8)}b8=b1.f
if(b8!==C.h){b1.f=C.h
b8=new D.r("blend",b8,C.h)
b8.b=!0
b1.A(b8)}b8=b1.c
q=new O.bc()
q.sal(b6)
a0=V.b9()
if(!J.E(q.b,a0)){m=q.b
q.b=a0
p=new D.r("colorMatrix",m,a0)
p.b=!0
q.A(p)}b3=V.df()
if(!J.E(q.c,b3)){m=q.c
q.c=b3
p=new D.r("source",m,b3)
p.b=!0
q.A(p)}q.sda(0,b6)
if(q.e!==!1){q.e=!1
p=new D.r("flip",!0,!1)
p.b=!0
q.A(p)}q.f=null
q.sda(0,V.de(0,0.75,0.25,0.25))
q.sal(a5.ch)
b8.k(0,q)
b4=M.k9()
b4.saF(b1)
b4.saE(0,a8)
b8=s.y
if(b8==null)b8=s.y=D.z()
b8.k(0,new M.jl(i))
b8=s.f
q=s.r
p=a5.ch
o=new T.cI()
o.a=b8
o.z=4
o.ch=o.Q=!1
n=new X.a6(!1,!1,!1)
o.c=n
b8=new D.r(b7,b6,n)
b8.b=!0
o.b8(b8)
b8=o.d
if(b8!==p){if(b8!=null)b8.gm().M(0,o.gcH())
m=o.d
o.d=p
p.gm().k(0,o.gcH())
b8=new D.r("texture",m,o.d)
b8.b=!0
o.b8(b8)}o.aB(q)
b8=o.x
if(b8==null)b8=o.x=D.z()
b8.k(0,new M.jm(h,i))
b8=M.ah
q=H.b([a7,b0,a9,b4],[b8])
p=new M.cK()
p.b6(b8)
p.e=!0
p.f=!1
p.r=null
p.aG(p.gfC(),p.gfE())
p.a7(0,q)
b8=s.d
if(b8!==p){if(b8!=null)b8.gm().M(0,s.gcE())
s.d=p
p.gm().k(0,s.gcE())
s.cF()}b8=new V.eP("buttons")
u=u.getElementById("buttons")
b8.b=u
if(u==null)H.t("Failed to find buttons for ButtonGroup")
b8.c=H.b([],[W.bp])
b8.h5(0,"Back target snapshot",new M.jn(s,a5))
V.ng(s)},
jl:function jl(a){this.a=a},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b}},A={
lJ:function(a,b){var u=a.b1,t=new A.fG(b,u)
t.b7(b,u)
t.e_(a,b)
return t},
lK:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gap(a1)+a2.gap(a2)+a3.gap(a3)+a4.gap(a4)+a5.gap(a5)+a6.gap(a6)+a7.gap(a7)+a8.gap(a8)+a9.gap(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.o)(b0),++t)e+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.o)(b1),++t)e+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.o)(b2),++t)e+="_"+H.e(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.a2()
if(k){u=$.aV()
f=new Z.aR(f.a|u.a)}if(j){u=$.aU()
f=new Z.aR(f.a|u.a)}if(i){u=$.aW()
f=new Z.aR(f.a|u.a)}if(h){u=$.aT()
f=new Z.aR(f.a|u.a)}return new A.fJ(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
j9:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
ja:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.j9(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jq(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
ms:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j9(b,t,"emission")
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
mp:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ja(b,t,"ambient")
b.a+="\n"},
mq:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ja(b,t,"diffuse")
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
mt:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ja(b,t,"invDiffuse")
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
mz:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ja(b,t,"specular")
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
mv:function(a,b){var u,t,s
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
mx:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j9(b,t,"reflect")
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
my:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j9(b,t,"refract")
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
mr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.jq(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aw()
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
r=[P.n]
o=H.b([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
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
mw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.jq(t)
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
if(typeof u!=="number")return u.aw()
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
c.a=r+"\n"}r=[P.n]
l=H.b([],r)
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
l=H.b([],r)
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
k=H.b([],r)
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
mA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.jq(t)
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
if(typeof u!=="number")return u.aw()
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
c.a=u+"\n"}u=[P.n]
j=H.b([],u)
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
j=H.b([],u)
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
i=H.b([],u)
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
mu:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.n])
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
mB:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bb("")
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
A.ms(a,i)
A.mp(a,i)
A.mq(a,i)
A.mt(a,i)
A.mz(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.mx(a,i)
A.my(a,i)}A.mv(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.mr(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.mw(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.mA(a,q[n],i)
A.mu(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.n])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aU(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aU(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aU(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
mC:function(a,b){var u,t,s
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
mE:function(a,b){var u
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
mD:function(a,b){var u
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
mG:function(a,b){var u,t
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
mH:function(a,b){var u,t
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
mF:function(a,b){var u
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
mI:function(a,b){var u
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
jq:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.d.aU(a,1)},
m5:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.K
t=(s||b===C.u?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.J)t+="      clrAccum += color;\n"
else if(b===C.h)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
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
m4:function(a,b,c){var u="TextureLayout_"+a+"_"+C.c.h(b.a),t=new A.hW(c,u)
t.b7(c,u)
t.e3(a,b,c)
return t},
jN:function(a,b,c,d,e){var u=new A.i8(a,c,e)
u.f=d
P.lI(d,0,P.y)
return u},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(a){this.a=a},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a,b){var _=this
_.de=_.ic=_.dd=_.bi=_.b1=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.im=_.il=_.ik=_.c5=_.c4=_.c3=_.c2=_.c1=_.c0=_.ds=_.ij=_.dr=_.dq=_.ii=_.dn=_.dm=_.dl=_.ih=_.dk=_.dj=_.di=_.ig=_.dh=_.dg=_.ie=_.df=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cN:function cN(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b1=b3
_.bi=b4},
ch:function ch(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cj:function cj(a,b,c,d,e,f,g,h,i,j){var _=this
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
ck:function ck(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dh:function dh(){},
br:function br(a,b){this.a=a
this.b=b},
hz:function hz(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hB:function hB(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hW:function hW(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dx:function dx(){},
ic:function ic(a){this.a=a},
bf:function bf(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
ia:function ia(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){this.a=a
this.c=b
this.d=c},
i8:function i8(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
aP:function aP(a,b,c){this.a=a
this.c=b
this.d=c},
H:function H(a,b,c){this.a=a
this.c=b
this.d=c},
bg:function bg(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){this.a=a
this.c=b
this.d=c},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
aQ:function aQ(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c}},F={
j8:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cw:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.A(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.A(u+a3,t+a1,s+a2)
q=new V.A(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.A(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.j8(i)
l=F.j8(j.b)
k=F.nl(d,a0,new F.j7(j,F.j8(j.c),F.j8(j.d),l,m,c),b)
if(k!=null)a.hC(k)},
nl:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.jJ()
t=H.b([],[F.bC])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iq(g,g,new V.N(p,0,0,1),g,g,new V.a_(r,1),g,g,0)
q.k(0,o)
c.$3(o,r,0)
t.push(o.bU(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iq(g,g,new V.N(j,i,h,1),g,g,new V.a_(r,m),g,g,0)
k.k(0,o)
c.$3(o,r,n)
t.push(o.bU(d))}}u.d.h9(a+1,b+1,t)
return u},
bV:function(a,b,c){var u=new F.b1(),t=a.a
if(t==null)H.t(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.p("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a0()
return u},
lG:function(a,b){var u=new F.c_(),t=a.a
if(t==null)H.t(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.p("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.a0()
return u},
jJ:function(){var u=new F.hs(),t=new F.ir(u)
t.b=!1
t.c=H.b([],[F.bC])
u.a=t
t=new F.hv(u)
t.b=H.b([],[F.c7])
u.b=t
t=new F.hu(u)
t.b=H.b([],[F.c_])
u.c=t
t=new F.ht(u)
t.b=H.b([],[F.b1])
u.d=t
u.e=null
return u},
iq:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bC(),r=new F.iw()
r.b=H.b([],[F.c7])
s.b=r
r=new F.iv()
u=[F.c_]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.is()
u=[F.b1]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.lc()
s.e=0
r=$.a2()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aV().a)!==0?e:t
s.x=(u&$.aU().a)!==0?b:t
s.y=(u&$.bk().a)!==0?f:t
s.z=(u&$.aW().a)!==0?g:t
s.Q=(u&$.ld().a)!==0?c:t
s.ch=(u&$.bN().a)!==0?i:0
s.cx=(u&$.aT().a)!==0?a:t
return s},
j7:function j7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b1:function b1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
c_:function c_(){this.b=this.a=null},
c7:function c7(){this.a=null},
hs:function hs(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(a){this.a=a
this.b=null},
hu:function hu(a){this.a=a
this.b=null},
hv:function hv(a){this.a=a
this.b=null},
bC:function bC(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iy:function iy(a){this.a=a},
ix:function ix(a){this.a=a},
ir:function ir(a){this.a=a
this.c=this.b=null},
is:function is(){this.d=this.c=this.b=null},
it:function it(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(){this.c=this.b=null},
iw:function iw(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jF.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gI:function(a){return H.c9(a)},
h:function(a){return"Instance of '"+H.e(H.ca(a))+"'"}}
J.fr.prototype={
h:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iav:1}
J.cX.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gI:function(a){return 0}}
J.cY.prototype={
gI:function(a){return 0},
h:function(a){return String(a)}}
J.hc.prototype={}
J.bB.prototype={}
J.b7.prototype={
h:function(a){var u=a[$.l1()]
if(u==null)return this.dX(a)
return"JavaScript function for "+H.e(J.a4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b5.prototype={
M:function(a,b){var u
if(!!a.fixed$length)H.t(P.w("remove"))
for(u=0;u<a.length;++u)if(J.E(a[u],b)){a.splice(u,1)
return!0}return!1},
a7:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.w("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t)a.push(b[t])},
J:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.aZ(a))}},
q:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
hA:function(a){return this.q(a,"")},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
dT:function(a,b,c){var u=a.length
if(b>u)throw H.d(P.ae(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.ae(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aw(a,0)])
return H.b(a.slice(b,c),[H.aw(a,0)])},
gc8:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.kg())},
d5:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.aZ(a))}return!1},
bt:function(a,b){if(!!a.immutable$list)H.t(P.w("sort"))
H.dj(a,0,a.length-1,b)},
P:function(a,b){var u
for(u=0;u<a.length;++u)if(J.E(a[u],b))return!0
return!1},
h:function(a){return P.jC(a,"[","]")},
gR:function(a){return new J.Z(a,a.length)},
gI:function(a){return H.c9(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.t(P.w("set length"))
if(b<0)throw H.d(P.ae(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bI(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.t(P.w("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bI(a,b))
a[b]=c},
$ii:1,
$im:1}
J.jE.prototype={}
J.Z.prototype={
gG:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bZ.prototype={
hi:function(a,b){var u
if(typeof b!=="number")throw H.d(H.bj(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbk(b)
if(this.gbk(a)===u)return 0
if(this.gbk(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbk:function(a){return a===0?1/a<0:a<0},
i2:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.w(""+a+".toInt()"))},
aQ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.w(""+a+".floor()"))},
V:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.w(""+a+".round()"))},
dM:function(a,b){var u
if(b>20)throw H.d(P.ae(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbk(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bs:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d1(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.d1(a,b)},
d1:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.w("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
bc:function(a,b){var u
if(a>0)u=this.fY(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fY:function(a,b){return b>31?0:a>>>b},
$iK:1,
$ia9:1}
J.cW.prototype={$iy:1}
J.cV.prototype={}
J.b6.prototype={
bT:function(a,b){if(b<0)throw H.d(H.bI(a,b))
if(b>=a.length)H.t(H.bI(a,b))
return a.charCodeAt(b)},
b9:function(a,b){if(b>=a.length)throw H.d(H.bI(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.d(P.k5(b,null,null))
return a+b},
dS:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
cz:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.hh(b,null))
if(b>c)throw H.d(P.hh(b,null))
if(c>a.length)throw H.d(P.hh(c,null))
return a.substring(b,c)},
aU:function(a,b){return this.cz(a,b,null)},
i4:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ak:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
h:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$in:1}
H.P.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return C.d.bT(this.a,b)},
$aq:function(){return[P.y]},
$ai:function(){return[P.y]},
$am:function(){return[P.y]}}
H.f9.prototype={}
H.d2.prototype={
gR:function(a){return new H.c0(this,this.gj(this))},
br:function(a,b){return this.dW(0,b)}}
H.hM.prototype={
gex:function(){var u=J.ak(this.a)
return u},
gfZ:function(){var u=J.ak(this.a),t=this.b
if(t>u)return u
return t},
gj:function(a){var u=J.ak(this.a),t=this.b
if(t>=u)return 0
return u-t},
B:function(a,b){var u,t=this,s=t.gfZ()+b
if(b>=0){u=t.gex()
if(typeof u!=="number")return H.u(u)
u=s>=u}else u=!0
if(u)throw H.d(P.G(b,t,"index",null,null))
return J.cC(t.a,s)},
cl:function(a,b){var u,t,s,r=this,q=r.b,p=r.a,o=J.eA(p),n=o.gj(p),m=n-q
if(m<0)m=0
u=new Array(m)
u.fixed$length=Array
t=H.b(u,r.$ti)
for(s=0;s<m;++s){u=o.B(p,q+s)
if(s>=t.length)return H.c(t,s)
t[s]=u
if(o.gj(p)<n)throw H.d(P.aZ(r))}return t}}
H.c0.prototype={
gG:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.eA(s),q=r.gj(s)
if(t.b!==q)throw H.d(P.aZ(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.B(s,u);++t.c
return!0}}
H.fD.prototype={
gR:function(a){return new H.fE(J.bm(this.a),this.b)},
gj:function(a){return J.ak(this.a)},
B:function(a,b){return this.b.$1(J.cC(this.a,b))},
$ai:function(a,b){return[b]}}
H.fE.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gG(t))
return!0}u.a=null
return!1},
gG:function(a){return this.a}}
H.fF.prototype={
gj:function(a){return J.ak(this.a)},
B:function(a,b){return this.b.$1(J.cC(this.a,b))},
$ad2:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cl.prototype={
gR:function(a){return new H.iA(J.bm(this.a),this.b)}}
H.iA.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gG(u)))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.cR.prototype={}
H.ih.prototype={
l:function(a,b,c){throw H.d(P.w("Cannot modify an unmodifiable list"))},
W:function(a,b,c,d,e){throw H.d(P.w("Cannot modify an unmodifiable list"))},
aq:function(a,b,c,d){return this.W(a,b,c,d,0)}}
H.dy.prototype={}
H.i6.prototype={
aj:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.h8.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ft.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.ig.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jr.prototype={
$1:function(a){if(!!J.L(a).$ibt)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.ed.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bQ.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gi7:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hQ.prototype={}
H.hG.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eB(u)+"'"}}
H.bO.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bO))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.c9(this.a)
else u=typeof t!=="object"?J.bl(t):H.c9(t)
return(u^H.c9(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ca(u))+"'")}}
H.eS.prototype={
h:function(a){return this.a}}
H.hp.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.M.prototype={
gj:function(a){return this.a},
ga8:function(a){return new H.d0(this,[H.aw(this,0)])},
d9:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cP(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cP(t,b)}else return s.hy(b)},
hy:function(a){var u=this.d
if(u==null)return!1
return this.c6(this.bH(u,J.bl(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.ba(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.ba(r,b)
s=t==null?null:t.b
return s}else return q.hz(b)},
hz:function(a){var u,t,s=this.d
if(s==null)return
u=this.bH(s,J.bl(a)&0x3ffffff)
t=this.c6(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cI(u==null?o.b=o.bJ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cI(t==null?o.c=o.bJ():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bJ()
r=J.bl(b)&0x3ffffff
q=o.bH(s,r)
if(q==null)o.bN(s,r,[o.bK(b,c)])
else{p=o.c6(q,b)
if(p>=0)q[p].b=c
else q.push(o.bK(b,c))}}},
J:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.aZ(u))
t=t.c}},
cI:function(a,b,c){var u=this.ba(a,b)
if(u==null)this.bN(a,b,this.bK(b,c))
else u.b=c},
eH:function(){this.r=this.r+1&67108863},
bK:function(a,b){var u,t=this,s=new H.fw(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eH()
return s},
c6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1},
h:function(a){return P.kl(this)},
ba:function(a,b){return a[b]},
bH:function(a,b){return a[b]},
bN:function(a,b,c){a[b]=c},
ew:function(a,b){delete a[b]},
cP:function(a,b){return this.ba(a,b)!=null},
bJ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bN(t,u,t)
this.ew(t,u)
return t}}
H.fw.prototype={}
H.d0.prototype={
gj:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.fx(u,u.r)
t.c=u.e
return t}}
H.fx.prototype={
gG:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aZ(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jh.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.ji.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jj.prototype={
$1:function(a){return this.a(a)}}
H.fs.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.hL.prototype={}
H.jS.prototype={
t:function(){var u,t,s=this,r=s.c,q=s.b,p=q.length,o=s.a,n=o.length
if(r+p>n){s.d=null
return!1}u=o.indexOf(q,r)
if(u<0){s.c=n+1
s.d=null
return!1}t=u+p
s.d=new H.hL(u,q)
s.c=t===s.c?t+1:t
return!0},
gG:function(a){return this.d}}
H.c5.prototype={
eB:function(a,b,c,d){var u=P.ae(b,0,c,d,null)
throw H.d(u)},
cK:function(a,b,c,d){if(b>>>0!==b||b>c)this.eB(a,b,c,d)}}
H.d7.prototype={
gj:function(a){return a.length},
d_:function(a,b,c,d,e){var u,t,s=a.length
this.cK(a,b,s,"start")
this.cK(a,c,s,"end")
if(b>c)throw H.d(P.ae(b,0,c,null,null))
u=c-b
t=d.length
if(t-e<u)throw H.d(P.jK("Not enough elements"))
if(e!==0||t!==u)d=d.subarray(e,e+u)
a.set(d,b)},
$ix:1,
$ax:function(){}}
H.bw.prototype={
i:function(a,b){H.au(b,a,a.length)
return a[b]},
l:function(a,b,c){H.au(b,a,a.length)
a[b]=c},
W:function(a,b,c,d,e){if(!!J.L(d).$ibw){this.d_(a,b,c,d,e)
return}this.cB(a,b,c,d,e)},
aq:function(a,b,c,d){return this.W(a,b,c,d,0)},
$aq:function(){return[P.K]},
$ii:1,
$ai:function(){return[P.K]},
$im:1,
$am:function(){return[P.K]}}
H.c4.prototype={
l:function(a,b,c){H.au(b,a,a.length)
a[b]=c},
W:function(a,b,c,d,e){if(!!J.L(d).$ic4){this.d_(a,b,c,d,e)
return}this.cB(a,b,c,d,e)},
aq:function(a,b,c,d){return this.W(a,b,c,d,0)},
$aq:function(){return[P.y]},
$ii:1,
$ai:function(){return[P.y]},
$im:1,
$am:function(){return[P.y]}}
H.h0.prototype={
i:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.h1.prototype={
i:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.h2.prototype={
i:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.h3.prototype={
i:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.h4.prototype={
i:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.c6.prototype={
gj:function(a){return a.length},
i:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.h5.prototype={
gj:function(a){return a.length},
i:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
H.cr.prototype={}
P.iC.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.iB.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iD.prototype={
$0:function(){this.a.$0()}}
P.iE.prototype={
$0:function(){this.a.$0()}}
P.ej.prototype={
eh:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bH(new P.j3(this,b),0),a)
else throw H.d(P.w("`setTimeout()` not found."))},
ei:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bH(new P.j2(this,a,Date.now(),b),0),a)
else throw H.d(P.w("Periodic timer."))},
$idt:1}
P.j3.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.j2.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dZ(u,q)}s.c=r
t.d.$1(s)}}
P.dF.prototype={}
P.dn.prototype={}
P.hJ.prototype={}
P.dt.prototype={}
P.j6.prototype={}
P.jb.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.da():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.iR.prototype={
hZ:function(a){var u,t,s,r=null
try{if(C.e===$.ai){a.$0()
return}P.mK(r,r,this,a)}catch(s){u=H.ax(s)
t=H.jX(s)
P.kM(r,r,this,u,t)}},
i_:function(a,b){var u,t,s,r=null
try{if(C.e===$.ai){a.$1(b)
return}P.mL(r,r,this,a,b)}catch(s){u=H.ax(s)
t=H.jX(s)
P.kM(r,r,this,u,t)}},
i0:function(a,b){return this.i_(a,b,null)},
hg:function(a){return new P.iS(this,a)},
d6:function(a,b){return new P.iT(this,a,b)}}
P.iS.prototype={
$0:function(){return this.a.hZ(this.b)}}
P.iT.prototype={
$1:function(a){return this.a.i0(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iO.prototype={
gR:function(a){var u=new P.dV(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
P:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.er(b)
return t}},
er:function(a){var u=this.d
if(u==null)return!1
return this.bF(this.cS(u,a),a)>=0},
k:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cL(u==null?s.b=P.jR():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cL(t==null?s.c=P.jR():t,b)}else return s.el(0,b)},
el:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jR()
u=s.cN(b)
t=r[u]
if(t==null)r[u]=[s.bC(b)]
else{if(s.bF(t,b)>=0)return!1
t.push(s.bC(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fN(this.c,b)
else return this.fM(0,b)},
fM:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cS(r,b)
t=s.bF(u,b)
if(t<0)return!1
s.d2(u.splice(t,1)[0])
return!0},
cL:function(a,b){if(a[b]!=null)return!1
a[b]=this.bC(b)
return!0},
fN:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d2(u)
delete a[b]
return!0},
cM:function(){this.r=1073741823&this.r+1},
bC:function(a){var u,t=this,s=new P.iP(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cM()
return s},
d2:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cM()},
cN:function(a){return J.bl(a)&1073741823},
cS:function(a,b){return a[this.cN(b)]},
bF:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1}}
P.iP.prototype={}
P.dV.prototype={
gG:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aZ(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fy.prototype={$ii:1,$im:1}
P.q.prototype={
gR:function(a){return new H.c0(a,this.gj(a))},
B:function(a,b){return this.i(a,b)},
cl:function(a,b){var u,t,s=this,r=H.b([],[H.jW(s,a,"q",0)])
C.a.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.i(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
i3:function(a){return this.cl(a,!0)},
W:function(a,b,c,d,e){var u,t,s,r,q,p=this
P.jI(b,c,p.gj(a))
u=c-b
if(u===0)return
P.hi(e,"skipCount")
if(H.mU(d,"$im",[H.jW(p,a,"q",0)],"$am")){t=e
s=d}else{s=H.m3(d,e,null,H.jW(J.L(d),d,"q",0)).cl(0,!1)
t=0}r=J.eA(s)
if(t+u>r.gj(s))throw H.d(H.lC())
if(t<b)for(q=u-1;q>=0;--q)p.l(a,b+q,r.i(s,t+q))
else for(q=0;q<u;++q)p.l(a,b+q,r.i(s,t+q))},
aq:function(a,b,c,d){return this.W(a,b,c,d,0)},
dP:function(a,b,c){this.aq(a,b,b+c.length,c)},
h:function(a){return P.jC(a,"[","]")}}
P.fB.prototype={}
P.fC.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.aC.prototype={
J:function(a,b){var u,t
for(u=J.bm(this.ga8(a));u.t();){t=u.gG(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.ak(this.ga8(a))},
h:function(a){return P.kl(a)},
$iS:1}
P.iV.prototype={
a7:function(a,b){var u
for(u=J.bm(b);u.t();)this.k(0,u.gG(u))},
h:function(a){return P.jC(this,"{","}")},
B:function(a,b){var u,t,s
P.hi(b,"index")
for(u=P.mh(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.d(P.G(b,this,"index",null,t))},
$ii:1}
P.dW.prototype={}
P.eU.prototype={}
P.eY.prototype={}
P.fb.prototype={}
P.ik.prototype={}
P.il.prototype={
hj:function(a){var u,t,s=P.jI(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.j4(u)
if(t.ez(a,0,s)!==s)t.d3(C.d.bT(a,s-1),0)
return new Uint8Array(u.subarray(0,H.ml(0,t.b,u.length)))}}
P.j4.prototype={
d3:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
ez:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.bT(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.b9(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d3(r,C.d.b9(a,p)))s=p}else if(r<=2047){q=n.b
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
P.av.prototype={}
P.ab.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.c.bc(u,30))&1073741823},
h:function(a){var u=this,t=P.lw(H.lU(u)),s=P.cM(H.lS(u)),r=P.cM(H.lO(u)),q=P.cM(H.lP(u)),p=P.cM(H.lR(u)),o=P.cM(H.lT(u)),n=P.lx(H.lQ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.b_.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b_&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
h:function(a){var u,t,s,r=new P.f8(),q=this.a
if(q<0)return"-"+new P.b_(0-q).h(0)
u=r.$1(C.c.a_(q,6e7)%60)
t=r.$1(C.c.a_(q,1e6)%60)
s=new P.f7().$1(q%1e6)
return""+C.c.a_(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.f7.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f8.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bt.prototype={}
P.da.prototype={
h:function(a){return"Throw of null."}}
P.ag.prototype={
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.e(p)
t=q.gbE()+o+u
if(!q.a)return t
s=q.gbD()
r=P.jA(q.b)
return t+s+": "+r}}
P.by.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fp.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t=this.b
if(typeof t!=="number")return t.ad()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.ii.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ie.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bz.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eX.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jA(u)+"."}}
P.hb.prototype={
h:function(a){return"Out of Memory"},
$ibt:1}
P.dl.prototype={
h:function(a){return"Stack Overflow"},
$ibt:1}
P.f2.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dN.prototype={
h:function(a){return"Exception: "+this.a}}
P.fl.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.cz(s,0,75)+"...":s
return t+"\n"+r}}
P.cT.prototype={}
P.y.prototype={}
P.i.prototype={
br:function(a,b){return new H.cl(this,b,[H.jg(this,"i",0)])},
gj:function(a){var u,t=this.gR(this)
for(u=0;t.t();)++u
return u},
gaH:function(a){var u,t=this.gR(this)
if(!t.t())throw H.d(H.kg())
u=t.gG(t)
if(t.t())throw H.d(H.lD())
return u},
B:function(a,b){var u,t,s
P.hi(b,"index")
for(u=this.gR(this),t=0;u.t();){s=u.gG(u)
if(b===t)return s;++t}throw H.d(P.G(b,this,"index",null,t))},
h:function(a){return P.lB(this,"(",")")}}
P.fq.prototype={}
P.m.prototype={$ii:1}
P.S.prototype={}
P.aG.prototype={
gI:function(a){return P.U.prototype.gI.call(this,this)},
h:function(a){return"null"}}
P.a9.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
n:function(a,b){return this===b},
gI:function(a){return H.c9(this)},
h:function(a){return"Instance of '"+H.e(H.ca(this))+"'"},
toString:function(){return this.h(this)}}
P.jH.prototype={}
P.n.prototype={}
P.bb.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.eD.prototype={
gj:function(a){return a.length}}
W.eF.prototype={
h:function(a){return String(a)}}
W.eG.prototype={
h:function(a){return String(a)}}
W.cE.prototype={}
W.bo.prototype={$ibo:1}
W.bp.prototype={$ibp:1}
W.bq.prototype={
cp:function(a,b,c){if(c!=null)return a.getContext(b,P.mV(c))
return a.getContext(b)},
co:function(a,b){return this.cp(a,b,null)},
$ibq:1}
W.cH.prototype={
hm:function(a,b,c){var u=P.kS(a.createImageData(b,c))
return u},
hU:function(a,b,c,d){a.putImageData(P.kR(b),c,d)
return}}
W.aY.prototype={
gj:function(a){return a.length}}
W.eZ.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bS.prototype={
gj:function(a){return a.length}}
W.f_.prototype={}
W.aa.prototype={}
W.an.prototype={}
W.f0.prototype={
gj:function(a){return a.length}}
W.f1.prototype={
gj:function(a){return a.length}}
W.f3.prototype={
gj:function(a){return a.length}}
W.f4.prototype={
h:function(a){return String(a)}}
W.cO.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[[P.a8,P.a9]]},
$aq:function(){return[[P.a8,P.a9]]},
$ii:1,
$ai:function(){return[[P.a8,P.a9]]},
$im:1,
$am:function(){return[[P.a8,P.a9]]}}
W.cP.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gam(a))+" x "+H.e(this.gai(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.L(b)
if(!u.$ia8)return!1
return a.left===u.gbl(b)&&a.top===u.gbo(b)&&this.gam(a)===u.gam(b)&&this.gai(a)===u.gai(b)},
gI:function(a){return W.kJ(C.b.gI(a.left),C.b.gI(a.top),C.b.gI(this.gam(a)),C.b.gI(this.gai(a)))},
gd7:function(a){return a.bottom},
gai:function(a){return a.height},
gbl:function(a){return a.left},
gck:function(a){return a.right},
gbo:function(a){return a.top},
gam:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.a9]}}
W.f5.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[P.n]},
$aq:function(){return[P.n]},
$ii:1,
$ai:function(){return[P.n]},
$im:1,
$am:function(){return[P.n]}}
W.f6.prototype={
gj:function(a){return a.length}}
W.iG.prototype={
gj:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
k:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.i3(this)
return new J.Z(u,u.length)},
W:function(a,b,c,d,e){throw H.d(P.jO(null))},
aq:function(a,b,c,d){return this.W(a,b,c,d,0)},
$aq:function(){return[W.O]},
$ai:function(){return[W.O]},
$am:function(){return[W.O]}}
W.O.prototype={
ghf:function(a){return new W.iI(a)},
gbS:function(a){return new W.iG(a,a.children)},
gd8:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ad()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ad()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.a9])},
h:function(a){return a.localName},
ah:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.kd
if(u==null){u=H.b([],[W.aE])
t=new W.d9(u)
u.push(W.kI(null))
u.push(W.kK())
$.kd=t
d=t}else d=u
u=$.kc
if(u==null){u=new W.ep(d)
$.kc=u
c=u}else{u.a=d
c=u}}if($.ay==null){u=document
t=u.implementation.createHTMLDocument("")
$.ay=t
$.jz=t.createRange()
s=$.ay.createElement("base")
s.href=u.baseURI
$.ay.head.appendChild(s)}u=$.ay
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ay
if(!!this.$ibo)r=u.body
else{r=u.createElement(a.tagName)
$.ay.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.P(C.P,a.tagName)){$.jz.selectNodeContents(r)
q=$.jz.createContextualFragment(b)}else{r.innerHTML=b
q=$.ay.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ay.body
if(r==null?u!=null:r!==u)J.k3(r)
c.cq(q)
document.adoptNode(q)
return q},
hl:function(a,b,c){return this.ah(a,b,c,null)},
dQ:function(a,b){a.textContent=null
a.appendChild(this.ah(a,b,null,null))},
$iO:1,
gdK:function(a){return a.tagName}}
W.fa.prototype={
$1:function(a){return!!J.L(a).$iO}}
W.j.prototype={$ij:1}
W.f.prototype={
h7:function(a,b,c,d){if(c!=null)this.em(a,b,c,!1)},
em:function(a,b,c,d){return a.addEventListener(b,H.bH(c,1),!1)}}
W.aA.prototype={$iaA:1}
W.ff.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aA]},
$aq:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$im:1,
$am:function(){return[W.aA]}}
W.fg.prototype={
gj:function(a){return a.length}}
W.fk.prototype={
gj:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.fn.prototype={
gj:function(a){return a.length}}
W.bX.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.D]},
$aq:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$im:1,
$am:function(){return[W.D]}}
W.b2.prototype={$ib2:1,
gbW:function(a){return a.data}}
W.bY.prototype={$ibY:1}
W.bv.prototype={$ibv:1}
W.fz.prototype={
h:function(a){return String(a)}}
W.fU.prototype={
gj:function(a){return a.length}}
W.fV.prototype={
i:function(a,b){return P.aS(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aS(u.value[1]))}},
ga8:function(a){var u=H.b([],[P.n])
this.J(a,new W.fW(u))
return u},
gj:function(a){return a.size},
$iS:1,
$aS:function(){return[P.n,null]}}
W.fW.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fX.prototype={
i:function(a,b){return P.aS(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aS(u.value[1]))}},
ga8:function(a){var u=H.b([],[P.n])
this.J(a,new W.fY(u))
return u},
gj:function(a){return a.size},
$iS:1,
$aS:function(){return[P.n,null]}}
W.fY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aD.prototype={$iaD:1}
W.fZ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aD]},
$aq:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$im:1,
$am:function(){return[W.aD]}}
W.aq.prototype={$iaq:1}
W.a1.prototype={
gaH:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.jK("No elements"))
if(t>1)throw H.d(P.jK("More than one element"))
return u.firstChild},
a7:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gR:function(a){var u=this.a.childNodes
return new W.cS(u,u.length)},
W:function(a,b,c,d,e){throw H.d(P.w("Cannot setRange on Node list"))},
aq:function(a,b,c,d){return this.W(a,b,c,d,0)},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$aq:function(){return[W.D]},
$ai:function(){return[W.D]},
$am:function(){return[W.D]}}
W.D.prototype={
hV:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hX:function(a,b){var u,t
try{u=a.parentNode
J.lh(u,b,a)}catch(t){H.ax(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.dV(a):u},
fO:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.d8.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.D]},
$aq:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$im:1,
$am:function(){return[W.D]}}
W.aH.prototype={$iaH:1,
gj:function(a){return a.length}}
W.hd.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aH]},
$aq:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$im:1,
$am:function(){return[W.aH]}}
W.hn.prototype={
i:function(a,b){return P.aS(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aS(u.value[1]))}},
ga8:function(a){var u=H.b([],[P.n])
this.J(a,new W.ho(u))
return u},
gj:function(a){return a.size},
$iS:1,
$aS:function(){return[P.n,null]}}
W.ho.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hq.prototype={
gj:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.hC.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aK]},
$aq:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$im:1,
$am:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.hD.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aL]},
$aq:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$im:1,
$am:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gj:function(a){return a.length}}
W.hH.prototype={
i:function(a,b){return a.getItem(b)},
J:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga8:function(a){var u=H.b([],[P.n])
this.J(a,new W.hI(u))
return u},
gj:function(a){return a.length},
$iS:1,
$aS:function(){return[P.n,P.n]}}
W.hI.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ar.prototype={$iar:1}
W.dp.prototype={
ah:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=W.ly("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a1(t).a7(0,new W.a1(u))
return t}}
W.hN.prototype={
ah:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.ah(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaH(u)
s.toString
u=new W.a1(s)
r=u.gaH(u)
t.toString
r.toString
new W.a1(t).a7(0,new W.a1(r))
return t}}
W.hO.prototype={
ah:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.ah(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaH(u)
t.toString
s.toString
new W.a1(t).a7(0,new W.a1(s))
return t}}
W.ce.prototype={$ice:1}
W.aN.prototype={$iaN:1}
W.as.prototype={$ias:1}
W.hR.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.as]},
$aq:function(){return[W.as]},
$ii:1,
$ai:function(){return[W.as]},
$im:1,
$am:function(){return[W.as]}}
W.hS.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aN]},
$aq:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$im:1,
$am:function(){return[W.aN]}}
W.i0.prototype={
gj:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.bA.prototype={$ibA:1}
W.i3.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aO]},
$aq:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$im:1,
$am:function(){return[W.aO]}}
W.i4.prototype={
gj:function(a){return a.length}}
W.be.prototype={}
W.ij.prototype={
h:function(a){return String(a)}}
W.iz.prototype={
gj:function(a){return a.length}}
W.bh.prototype={
ghp:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.w("deltaY is not supported"))},
gho:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.w("deltaX is not supported"))},
$ibh:1}
W.cm.prototype={
fP:function(a,b){return a.requestAnimationFrame(H.bH(b,1))},
ey:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iH.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.F]},
$aq:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$im:1,
$am:function(){return[W.F]}}
W.dI.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.L(b)
if(!u.$ia8)return!1
return a.left===u.gbl(b)&&a.top===u.gbo(b)&&a.width===u.gam(b)&&a.height===u.gai(b)},
gI:function(a){return W.kJ(C.b.gI(a.left),C.b.gI(a.top),C.b.gI(a.width),C.b.gI(a.height))},
gai:function(a){return a.height},
gam:function(a){return a.width}}
W.iL.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aB]},
$aq:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$im:1,
$am:function(){return[W.aB]}}
W.e0.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.D]},
$aq:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$im:1,
$am:function(){return[W.D]}}
W.iY.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aM]},
$aq:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$im:1,
$am:function(){return[W.aM]}}
W.iZ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.ar]},
$aq:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$im:1,
$am:function(){return[W.ar]}}
W.iF.prototype={
J:function(a,b){var u,t,s,r,q
for(u=this.ga8(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga8:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.n])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aS:function(){return[P.n,P.n]}}
W.iI.prototype={
i:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.ga8(this).length}}
W.iJ.prototype={}
W.iK.prototype={
$1:function(a){return this.a.$1(a)}}
W.cn.prototype={
e4:function(a){var u
if($.dQ.a===0){for(u=0;u<262;++u)$.dQ.l(0,C.O[u],W.n3())
for(u=0;u<12;++u)$.dQ.l(0,C.m[u],W.n4())}},
aN:function(a){return $.lf().P(0,W.bT(a))},
at:function(a,b,c){var u=$.dQ.i(0,H.e(W.bT(a))+"::"+b)
if(u==null)u=$.dQ.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaE:1}
W.J.prototype={
gR:function(a){return new W.cS(a,this.gj(a))},
W:function(a,b,c,d,e){throw H.d(P.w("Cannot setRange on immutable List."))},
aq:function(a,b,c,d){return this.W(a,b,c,d,0)}}
W.d9.prototype={
aN:function(a){return C.a.d5(this.a,new W.h7(a))},
at:function(a,b,c){return C.a.d5(this.a,new W.h6(a,b,c))},
$iaE:1}
W.h7.prototype={
$1:function(a){return a.aN(this.a)}}
W.h6.prototype={
$1:function(a){return a.at(this.a,this.b,this.c)}}
W.e8.prototype={
ef:function(a,b,c,d){var u,t,s
this.a.a7(0,c)
u=b.br(0,new W.iW())
t=b.br(0,new W.iX())
this.b.a7(0,u)
s=this.c
s.a7(0,C.Q)
s.a7(0,t)},
aN:function(a){return this.a.P(0,W.bT(a))},
at:function(a,b,c){var u=this,t=W.bT(a),s=u.c
if(s.P(0,H.e(t)+"::"+b))return u.d.ha(c)
else if(s.P(0,"*::"+b))return u.d.ha(c)
else{s=u.b
if(s.P(0,H.e(t)+"::"+b))return!0
else if(s.P(0,"*::"+b))return!0
else if(s.P(0,H.e(t)+"::*"))return!0
else if(s.P(0,"*::*"))return!0}return!1},
$iaE:1}
W.iW.prototype={
$1:function(a){return!C.a.P(C.m,a)}}
W.iX.prototype={
$1:function(a){return C.a.P(C.m,a)}}
W.j0.prototype={
at:function(a,b,c){if(this.dY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.P(0,b)
return!1}}
W.j1.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.j_.prototype={
aN:function(a){var u=J.L(a)
if(!!u.$icd)return!1
u=!!u.$ik
if(u&&W.bT(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.d.dS(b,"on"))return!1
return this.aN(a)},
$iaE:1}
W.cS.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.eC(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gG:function(a){return this.d}}
W.aE.prototype={}
W.iU.prototype={}
W.ep.prototype={
cq:function(a){new W.j5(this).$2(a,null)},
aY:function(a,b){if(b==null)J.k3(a)
else b.removeChild(a)},
fU:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lk(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ax(r)}t="element unprintable"
try{t=J.a4(a)}catch(r){H.ax(r)}try{s=W.bT(a)
this.fT(a,b,p,t,s,o,n)}catch(r){if(H.ax(r) instanceof P.ag)throw r
else{this.aY(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aY(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aN(a)){p.aY(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.at(a,"is",g)){p.aY(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.b(u.slice(0),[H.aw(u,0)])
for(s=f.ga8(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
if(!p.a.at(a,J.ln(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.L(a).$ice)p.cq(a.content)}}
W.j5.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fU(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aY(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ax(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dH.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.cs.prototype={}
W.ct.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ee.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.cu.prototype={}
W.cv.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
P.eo.prototype={$ib2:1,
gbW:function(a){return this.a}}
P.jc.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.fh.prototype={
gbb:function(){var u=this.b,t=H.jg(u,"q",0)
return new H.fD(new H.cl(u,new P.fi(),[t]),new P.fj(),[t,W.O])},
l:function(a,b,c){var u=this.gbb()
J.lm(u.b.$1(J.cC(u.a,b)),c)},
k:function(a,b){this.b.a.appendChild(b)},
W:function(a,b,c,d,e){throw H.d(P.w("Cannot setRange on filtered list"))},
aq:function(a,b,c,d){return this.W(a,b,c,d,0)},
gj:function(a){return J.ak(this.gbb().a)},
i:function(a,b){var u=this.gbb()
return u.b.$1(J.cC(u.a,b))},
gR:function(a){var u=P.kk(this.gbb(),!1,W.O)
return new J.Z(u,u.length)},
$aq:function(){return[W.O]},
$ai:function(){return[W.O]},
$am:function(){return[W.O]}}
P.fi.prototype={
$1:function(a){return!!J.L(a).$iO}}
P.fj.prototype={
$1:function(a){return H.h(a,"$iO")}}
P.iQ.prototype={
gck:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
return u+t},
gd7:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.L(b)
if(!!u.$ia8){t=q.a
if(t==u.gbl(b)){s=q.b
if(s==u.gbo(b)){r=q.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gck(b)){t=q.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gd7(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.bl(t),r=u.b,q=J.bl(r),p=u.c
if(typeof t!=="number")return t.D()
if(typeof p!=="number")return H.u(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.D()
if(typeof t!=="number")return H.u(t)
t=C.c.gI(r+t)
return P.mg(P.iN(P.iN(P.iN(P.iN(0,s),q),p),t))}}
P.a8.prototype={
gbl:function(a){return this.a},
gbo:function(a){return this.b},
gam:function(a){return this.c},
gai:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.fv.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){return this.i(a,b)},
$aq:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$im:1,
$am:function(){return[P.b8]}}
P.ba.prototype={$iba:1}
P.h9.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){return this.i(a,b)},
$aq:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$im:1,
$am:function(){return[P.ba]}}
P.hg.prototype={
gj:function(a){return a.length}}
P.cd.prototype={$icd:1}
P.hK.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){return this.i(a,b)},
$aq:function(){return[P.n]},
$ii:1,
$ai:function(){return[P.n]},
$im:1,
$am:function(){return[P.n]}}
P.k.prototype={
gbS:function(a){return new P.fh(a,new W.a1(a))},
ah:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aE])
p.push(W.kI(null))
p.push(W.kK())
p.push(new W.j_())
c=new W.ep(new W.d9(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.o).hl(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a1(s)
q=p.gaH(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.bd.prototype={$ibd:1}
P.i5.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){return this.i(a,b)},
$aq:function(){return[P.bd]},
$ii:1,
$ai:function(){return[P.bd]},
$im:1,
$am:function(){return[P.bd]}}
P.dT.prototype={}
P.dU.prototype={}
P.e3.prototype={}
P.e4.prototype={}
P.ef.prototype={}
P.eg.prototype={}
P.em.prototype={}
P.en.prototype={}
P.eI.prototype={
gj:function(a){return a.length}}
P.eJ.prototype={
i:function(a,b){return P.aS(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aS(u.value[1]))}},
ga8:function(a){var u=H.b([],[P.n])
this.J(a,new P.eK(u))
return u},
gj:function(a){return a.size},
$iS:1,
$aS:function(){return[P.n,null]}}
P.eK.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eL.prototype={
gj:function(a){return a.length}}
P.bn.prototype={}
P.ha.prototype={
gj:function(a){return a.length}}
P.dG.prototype={}
P.dg.prototype={
dL:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.L(g)
if(!!u.$ib2&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.kR(g))
return}if(!!u.$ibY&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.lo("Incorrect number or type of arguments"))},
i1:function(a,b,c,d,e,f,g){return this.dL(a,b,c,d,e,f,g,null,null,null)}}
P.hF.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return P.aS(a.item(b))},
l:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
B:function(a,b){return this.i(a,b)},
$aq:function(){return[[P.S,,,]]},
$ii:1,
$ai:function(){return[[P.S,,,]]},
$im:1,
$am:function(){return[[P.S,,,]]}}
P.eb.prototype={}
P.ec.prototype={}
T.eE.prototype={
aR:function(a,b){return!0},
h:function(a){return"all"}}
T.cU.prototype={
aR:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].aR(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.d4.prototype={}
T.aF.prototype={
aR:function(a,b){return!this.dU(0,b)},
h:function(a){return"!["+this.cA(0)+"]"}}
T.hr.prototype={
e1:function(a){var u,t
if(a.a.length<=0)throw H.d(P.p("May not create a Set with zero characters."))
u=new H.M([P.y,P.av])
for(t=new H.c0(a,a.gj(a));t.t();)u.l(0,t.d,!0)
this.a=u},
aR:function(a,b){return this.a.d9(0,b)},
h:function(a){var u=this.a
return P.jL(new H.d0(u,[H.aw(u,0)]))}}
R.dm.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dw(this.a.L(0,b))
r.a=H.b([],[T.d4])
r.c=!1
this.c.push(r)
return r},
hw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.aR(0,a))return r}return},
h:function(a){return this.b}}
R.du.prototype={
h:function(a){var u=H.kZ(this.b,"\n","\\n"),t=H.kZ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dv.prototype={
h:function(a){return this.b}}
R.i1.prototype={
L:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dm(this,b)
u.c=H.b([],[R.dw])
this.a.l(0,b,u)}return u},
b5:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dv(a)
u=P.n
t.c=new H.M([u,u])
this.b.l(0,a,t)}return t},
i5:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.du]),l=this.c,k=[P.y],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.d.b9(a,s)
q=l.hw(r)
if(q==null){if(t==null){j.push(r)
p=P.jL(j)
throw H.d(P.p("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.jL(j)
o=l.d
n=o.c.i(0,p)
t=new R.du(n==null?o.b:n,p,s)}++s}}}}
R.dw.prototype={
h:function(a){return this.b.b+": "+this.cA(0)}}
O.am.prototype={
b6:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cs:function(a,b,c){this.b=b
this.c=a},
aG:function(a,b){return this.cs(a,null,b)},
as:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cT:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.Z(u,u.length)},
B:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
k:function(a,b){var u,t,s=this,r=[H.jg(s,"am",0)]
if(s.as(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cT(t,H.b([b],r))}},
a7:function(a,b){var u,t
if(this.as(b)){u=this.a
t=u.length
C.a.a7(u,b)
this.cT(t,b)}},
$ii:1}
O.c2.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
aI:function(){var u=this.b
if(u!=null)u.v(null)},
gU:function(a){var u=this.a
if(u.length>0)return C.a.gc8(u)
else return V.b9()},
bm:function(a){var u=this.a
if(a==null)u.push(V.b9())
else u.push(a)
this.aI()},
aD:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}}}
E.eN.prototype={}
E.az.prototype={
cJ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.Z(u,u.length);u.t();){t=u.d
if(t.f==null)t.cJ()}},
scu:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().M(0,s.gdC())
u=s.c
if(u!=null)u.gm().k(0,s.gdC())
t=new D.r("shape",r,s.c)
t.b=!0
s.ao(t)}},
saF:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gm().M(0,s.gdE())
u=s.f
s.f=a
if(a!=null)a.gm().k(0,s.gdE())
s.cJ()
t=new D.r("technique",u,s.f)
t.b=!0
s.ao(t)}},
scf:function(a){var u,t,s=this
if(!J.E(s.r,a)){u=s.r
if(u!=null)u.gm().M(0,s.gdA())
if(a!=null)a.gm().k(0,s.gdA())
s.r=a
t=new D.r("mover",u,a)
t.b=!0
s.ao(t)}},
a3:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.av(0,b,s):null
if(!J.E(q,s.x)){u=s.x
s.x=q
t=new D.r("matrix",u,q)
t.b=!0
s.ao(t)}r=s.f
if(r!=null)r.a3(0,b)
for(r=s.y.a,r=new J.Z(r,r.length);r.t();)r.d.a3(0,b)},
a1:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gU(s))
else s.a.push(r.p(0,s.gU(s)))
s.aI()
a.cj(t.f)
s=a.dy
u=(s&&C.a).gc8(s)
if(u!=null&&t.d!=null)u.bn(a,t)
for(s=t.y.a,s=new J.Z(s,s.length);s.t();)s.d.a1(a)
a.ci()
a.dx.aD()},
ao:function(a){var u=this.z
if(u!=null)u.v(a)},
a0:function(){return this.ao(null)},
dD:function(a){this.e=null
this.ao(a)},
hJ:function(){return this.dD(null)},
dF:function(a){this.ao(a)},
hK:function(){return this.dF(null)},
dB:function(a){this.ao(a)},
hI:function(){return this.dB(null)},
dz:function(a){this.ao(a)},
hF:function(){return this.dz(null)},
hE:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdw(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b0()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a0()},
hH:function(a,b){var u,t
for(u=b.gR(b),t=this.gdw();u.t();)u.gG(u).gm().M(0,t)
this.a0()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hj.prototype={
e0:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ab(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c2()
t=[V.ac]
u.a=H.b([],t)
u.gm().k(0,new E.hk(s))
s.cy=u
u=new O.c2()
u.a=H.b([],t)
u.gm().k(0,new E.hl(s))
s.db=u
u=new O.c2()
u.a=H.b([],t)
u.gm().k(0,new E.hm(s))
s.dx=u
u=H.b([],[O.dq])
s.dy=u
u.push(null)
s.fr=new H.M([P.n,A.dh])},
ghT:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gU(s)
u=t.db
u=t.z=s.p(0,u.gU(u))
s=u}return s},
gdH:function(){var u,t=this,s=t.ch
if(s==null){s=t.ghT()
u=t.dx
u=t.ch=s.p(0,u.gU(u))
s=u}return s},
cj:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gc8(u):a)},
ci:function(){var u=this.dy
if(u.length>1)u.pop()},
bf:function(a){var u=a.b
if(u.length===0)throw H.d(P.p("May not cache a shader with no name."))
if(this.fr.d9(0,u))throw H.d(P.p('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)}}
E.hk.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hl.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hm.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.ds.prototype={
cG:function(a){this.dI()},
cF:function(){return this.cG(null)},
ghx:function(){var u,t=this,s=Date.now(),r=C.c.a_(P.kb(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ab(s,!1)
return u/r},
cY:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.u(r)
u=C.b.aQ(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.b.aQ(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kC(C.i,s.ghY())}},
dI:function(){if(!this.ch){this.ch=!0
var u=window
C.z.ey(u)
C.z.fP(u,W.kN(new E.i_(this),P.a9))}},
hW:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cY()
s=p.y
if(s!=null)s.v(null)
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.kb(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.aI()
r=s.db
C.a.sj(r.a,0)
r.aI()
r=s.dx
C.a.sj(r.a,0)
r.aI()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a1(p.e)}}catch(q){u=H.ax(q)
t=H.jX(q)
P.k_("Error: "+H.e(u))
P.k_("Stack: "+H.e(t))
throw H.d(u)}}}
E.i_.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.hW()}}}
Z.dE.prototype={}
Z.cF.prototype={
O:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ax(s)
t=P.p('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.bD.prototype={}
Z.aX.prototype={
an:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
O:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].O(a)},
a9:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a1:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.n],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a4(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")}}
Z.bu.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ca(this.c))+"'")+"]"}}
Z.aR.prototype={
gcv:function(a){var u=this.a,t=(u&$.a2().a)!==0?3:0
if((u&$.aV().a)!==0)t+=3
if((u&$.aU().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=2
if((u&$.aW().a)!==0)t+=3
if((u&$.cA().a)!==0)t+=3
if((u&$.cB().a)!==0)t+=4
if((u&$.bN().a)!==0)++t
return(u&$.aT().a)!==0?t+4:t},
hb:function(a){var u,t=$.a2(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aT()
if((s&t.a)!==0)if(u===a)return t
return $.le()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aR))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.n]),t=this.a
if((t&$.a2().a)!==0)u.push("Pos")
if((t&$.aV().a)!==0)u.push("Norm")
if((t&$.aU().a)!==0)u.push("Binm")
if((t&$.bk().a)!==0)u.push("Txt2D")
if((t&$.aW().a)!==0)u.push("TxtCube")
if((t&$.cA().a)!==0)u.push("Clr3")
if((t&$.cB().a)!==0)u.push("Clr4")
if((t&$.bN().a)!==0)u.push("Weight")
if((t&$.aT().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.eT.prototype={}
D.b0.prototype={
k:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.R]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.P(s,b)
if(s===!0){s=t.a
u=(s&&C.a).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.P(s,b)
if(s===!0){s=t.b
u=(s&&C.a).M(s,b)||u}return u},
v:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.R()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.kk(u,!0,{func:1,ret:-1,args:[D.R]}),new D.fd(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.R]}])
C.a.J(u,new D.fe(q))}return!0},
c_:function(){return this.v(null)},
au:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}}}
D.fd.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fe.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.R.prototype={}
D.b3.prototype={}
D.b4.prototype={}
D.r.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cG.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cG))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cZ.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cZ))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fu.prototype={
hP:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
hL:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.d3.prototype={}
X.fA.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a_(o.a+n*m,o.b+u*t)
t=q.a.gaP()
r=new X.ad(a,V.aI(),q.x,t,s)
r.b=!0
q.z=new P.ab(p,!1)
q.x=s
return r},
cg:function(a,b){this.r=a.a
return!1},
b3:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dO()
if(typeof u!=="number")return u.aw()
this.r=(u&~t)>>>0
return!1},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.aW(a,b))
return!0},
hQ:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.c3(new V.C(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
fi:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d3(c,r.a.gaP(),b)
s.b=!0
t.v(s)
r.y=new P.ab(u,!1)
r.x=V.aI()}}
X.a6.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a6))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ad.prototype={}
X.h_.prototype={
bG:function(a,b,c){var u=this,t=new P.ab(Date.now(),!1),s=u.a.gaP(),r=new X.ad(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cg:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bG(a,b,!0))
return!0},
b3:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dO()
if(typeof t!=="number")return t.aw()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.bG(a,b,!0))
return!0},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bG(a,b,!1))
return!0},
hR:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.c3(new V.C(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gbZ:function(){var u=this.b
return u==null?this.b=D.z():u},
gbq:function(){var u=this.c
return u==null?this.c=D.z():u},
gaS:function(){var u=this.d
return u==null?this.d=D.z():u}}
X.c3.prototype={}
X.hf.prototype={}
X.cg.prototype={}
X.i2.prototype={
aW:function(a,b){var u=this,t=new P.ab(Date.now(),!1),s=a.length>0?a[0]:V.aI(),r=u.a.gaP(),q=new X.cg(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hO:function(a){var u=this.b
if(u==null)return!1
u.v(this.aW(a,!0))
return!0},
hM:function(a){var u=this.c
if(u==null)return!1
u.v(this.aW(a,!0))
return!0},
hN:function(a){var u=this.d
if(u==null)return!1
u.v(this.aW(a,!1))
return!0},
gcw:function(a){var u=this.b
return u==null?this.b=D.z():u},
gdc:function(a){var u=this.c
return u==null?this.c=D.z():u},
gaS:function(){var u=this.d
return u==null?this.d=D.z():u}}
X.dz.prototype={
gaP:function(){var u=this.a,t=C.f.gd8(u).c
t.toString
u=C.f.gd8(u).d
u.toString
return V.de(0,0,t,u)},
cQ:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cZ(u,new X.a6(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a6(t,a.altKey,a.shiftKey)},
bO:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a6(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.a_(s-q,r-u)},
aX:function(a){return new V.C(a.movementX,a.movementY)},
bL:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a_])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.b.V(r.pageX)
C.b.V(r.pageY)
p=o.left
C.b.V(r.pageX)
n.push(new V.a_(q-p,C.b.V(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cG(u,new X.a6(t,a.altKey,a.shiftKey))},
bI:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fc:function(a){this.f=!0},
eX:function(a){this.f=!1},
f2:function(a){if(this.f&&this.bI(a))a.preventDefault()},
fg:function(a){var u
if(!this.f)return
u=this.cQ(a)
this.b.hP(u)},
fe:function(a){var u
if(!this.f)return
u=this.cQ(a)
this.b.hL(u)},
fk:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.ay(a)
t=r.aX(a)
if(r.d.cg(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ay(a)
s=r.aA(a)
if(r.c.cg(u,s))a.preventDefault()},
fo:function(a){var u,t,s,r=this
r.aM(a)
u=r.ay(a)
if(r.x){t=r.aX(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b3(u,s))a.preventDefault()},
f6:function(a){var u,t,s,r=this
if(!r.bI(a)){r.aM(a)
u=r.ay(a)
if(r.x){t=r.aX(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b3(u,s))a.preventDefault()}},
fm:function(a){var u,t,s,r=this
r.aM(a)
u=r.ay(a)
if(r.x){t=r.aX(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b2(u,s))a.preventDefault()},
f4:function(a){var u,t,s,r=this
if(!r.bI(a)){r.aM(a)
u=r.ay(a)
if(r.x){t=r.aX(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b2(u,s))a.preventDefault()}},
fq:function(a){var u,t,s=this
s.aM(a)
u=new V.C((a&&C.y).gho(a),C.y.ghp(a)).u(0,180)
if(s.x){if(s.d.hQ(u))a.preventDefault()
return}if(s.r)return
t=s.aA(a)
if(s.c.hR(u,t))a.preventDefault()},
ft:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aA(s.y)
s.d.fi(u,t,r)}},
fL:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bO(a)
u=t.bL(a)
if(t.e.hO(u))a.preventDefault()},
fH:function(a){var u
this.bO(a)
u=this.bL(a)
if(this.e.hM(u))a.preventDefault()},
fJ:function(a){var u
this.bO(a)
u=this.bL(a)
if(this.e.hN(u))a.preventDefault()}}
D.bs.prototype={
ax:function(a){var u=this.r
if(u!=null)u.v(a)},
e6:function(){return this.ax(null)},
$ia5:1}
D.a5.prototype={}
D.d_.prototype={
ax:function(a){var u=this.x
if(u!=null)u.v(a)},
cV:function(a){var u=this.y
if(u!=null)u.v(a)},
fh:function(){return this.cV(null)},
fv:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.es(s))return!1}return!0},
eR:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcU(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.bs)this.e.push(q)
p=q.r
if(p==null){p=new D.b0()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.b3()
u.b=!0
this.ax(u)},
fB:function(a,b){var u,t,s
for(u=b.gR(b),t=this.gcU();u.t();){s=u.gG(u)
C.a.M(this.e,s)
s.gm().M(0,t)}u=new D.b4()
u.b=!0
this.ax(u)},
es:function(a){var u=C.a.P(this.e,a)
return u},
$ai:function(){return[D.a5]},
$aam:function(){return[D.a5]}}
D.he.prototype={$ia5:1}
D.hE.prototype={$ia5:1}
V.I.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.N.prototype={
i6:function(){var u=this
return new V.N(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.fc.prototype={}
V.d6.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d6))return!1
u=b.a
t=$.v().a
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
h:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bJ(H.b([q.a,q.d,q.r],p),3,0),n=V.bJ(H.b([q.b,q.e,q.x],p),3,0),m=V.bJ(H.b([q.c,q.f,q.y],p),3,0)
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
V.ac.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
c7:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.v().a)return V.b9()
u=1/b1
t=-n
s=-a0
return V.ap((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ap(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bp:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.A(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cm:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a0(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.v().a
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
h:function(a){return this.K()},
C:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bJ(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bJ(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bJ(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bJ(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.C("")}}
V.a_.prototype={
H:function(a,b){return new V.a_(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.a0.prototype={
H:function(a,b){return new V.a0(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.aJ.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aJ))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.dd.prototype={
gac:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dd))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.C.prototype={
c9:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.C(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.v().a){u=$.kF
return u==null?$.kF=new V.C(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.C(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=this.a
s=$.v()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.A.prototype={
c9:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ca:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.A(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b0:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.A(-this.a,-this.b,-this.c)},
u:function(a,b){if(Math.abs(b-0)<$.v().a)return V.dD()
return new V.A(this.a/b,this.b/b,this.c/b)},
dt:function(){var u=$.v().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
U.eW.prototype={
bB:function(a){var u=V.js(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
scn:function(a,b){},
scc:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.v().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bB(u)}s=new D.r("maximumLocation",s,t.b)
s.b=!0
t.E(s)}},
sce:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.v().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bB(u)}s=new D.r("minimumLocation",s,t.c)
s.b=!0
t.E(s)}},
sab:function(a,b){var u,t=this
b=t.bB(b)
u=t.d
if(!(Math.abs(u-b)<$.v().a)){t.d=b
u=new D.r("location",u,b)
u.b=!0
t.E(u)}},
scd:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.v().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.r("maximumVelocity",r,a)
r.b=!0
s.E(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.v().a)){u.f=a
t=new D.r("velocity",t,a)
t.b=!0
u.E(t)}},
sbV:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.v().a)){this.x=a
u=new D.r("dampening",u,a)
u.b=!0
this.E(u)}},
a3:function(a,b){var u,t,s,r=this,q=r.f,p=$.v().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sab(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.v().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.bR.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
sU:function(a,b){var u,t,s,r=this
if(!J.E(r.a,b)){u=r.a
r.a=b
t=new D.r("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.v(t)}},
av:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bR))return!1
return J.E(this.a,b.a)},
h:function(a){return"Constant: "+this.a.C("          ")}}
U.bW.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
E:function(a){var u=this.e
if(u!=null)u.v(a)},
a6:function(){return this.E(null)},
e8:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaL(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b3()
u.b=!0
this.E(u)},
fz:function(a,b){var u,t
for(u=b.gR(b),t=this.gaL();u.t();)u.gG(u).gm().M(0,t)
u=new D.b4()
u.b=!0
this.E(u)},
av:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ad()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.Z(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.av(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.b9():u
r=s.e
if(r!=null)r.au(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bW))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.E(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.a7]},
$aam:function(){return[U.a7]},
$ia7:1}
U.a7.prototype={}
U.cc.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
sdN:function(a){var u
a=V.js(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.v().a)){this.a=a
u=new D.r("yaw",u,a)
u.b=!0
this.E(u)}},
sdG:function(a,b){var u
b=V.js(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.v().a)){this.b=b
u=new D.r("pitch",u,b)
u.b=!0
this.E(u)}},
sdJ:function(a){var u
a=V.js(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.v().a)){this.c=a
u=new D.r("roll",u,a)
u.b=!0
this.E(u)}},
sbX:function(a){var u=this.e
if(!(Math.abs(u-a)<$.v().a)){this.e=a
u=new D.r("deltaPitch",u,a)
u.b=!0
this.E(u)}},
sbY:function(a){var u=this.f
if(!(Math.abs(u-a)<$.v().a)){this.f=a
u=new D.r("deltaRoll",u,a)
u.b=!0
this.E(u)}},
av:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdN(u.a+u.d*b.y)
u.sdG(0,u.b+u.e*b.y)
u.sdJ(u.c+u.f*b.y)
u.x=V.kp(u.c).p(0,V.ko(u.b)).p(0,V.kn(u.a))
t=u.y
if(t!=null)t.au(0)}return u.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cc))return!1
u=r.a
t=b.a
s=$.v().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+"], ["+V.B(u.d,3,0)+", "+V.B(u.e,3,0)+", "+V.B(u.f,3,0)+"]"}}
U.dA.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.z():u},
E:function(a){var u=this.cy
if(u!=null)u.v(a)},
a6:function(){return this.E(null)},
aB:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gbZ().k(0,u.gbv())
u.a.c.gaS().k(0,u.gbx())
u.a.c.gbq().k(0,u.gbz())
return!0},
bw:function(a){var u=this
if(!J.E(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
by:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iad")
if(!n.y)return
if(n.x){u=a.d.H(0,a.y)
u=new V.C(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.H(0,a.y)
u=new V.C(t.a,t.b).p(0,2).u(0,u.gac())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.C(s.a,s.b).p(0,2).u(0,u.gac())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sab(0,-q*p+o)
n.b.sS(0)
t=t.H(0,a.z)
n.Q=new V.C(t.a,t.b).p(0,2).u(0,u.gac())}n.a6()},
bA:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sS(t*10*s)
r.a6()}},
av:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.ad()
if(s<r){t.ch=r
u=b.y
t.b.a3(0,u)
t.cx=V.kp(t.b.d)}return t.cx},
$ia7:1}
U.dB.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.z():u},
E:function(a){var u=this.fx
if(u!=null)u.v(a)},
a6:function(){return this.E(null)},
aB:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gbZ().k(0,s.gbv())
s.a.c.gaS().k(0,s.gbx())
s.a.c.gbq().k(0,s.gbz())
u=s.a.d
t=u.f
u=t==null?u.f=D.z():t
u.k(0,s.geD())
u=s.a.d
t=u.d
u=t==null?u.d=D.z():t
u.k(0,s.geF())
u=s.a.e
u.gcw(u).k(0,s.ged())
s.a.e.gaS().k(0,s.geb())
u=s.a.e
u.gdc(u).k(0,s.ge9())
return!0},
ar:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.C(u,t)},
bw:function(a){var u=this
H.h(a,"$iad")
if(!J.E(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
by:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iad")
if(!n.cx)return
if(n.ch){u=a.d.H(0,a.y)
u=new V.C(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.H(0,a.y)
u=n.ar(new V.C(t.a,t.b).p(0,2).u(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ar(new V.C(s.a,s.b).p(0,2).u(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sab(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.H(0,a.z)
n.dx=n.ar(new V.C(t.a,t.b).p(0,2).u(0,u.gac()))}n.a6()},
bA:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sS(-t*10*u)
r.a6()}},
eE:function(a){var u=this
if(H.h(a,"$id3").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eG:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iad")
if(!J.E(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ar(new V.C(s.a,s.b).p(0,2).u(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sab(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.H(0,a.z)
n.dx=n.ar(new V.C(t.a,t.b).p(0,2).u(0,u.gac()))
n.a6()},
ee:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ec:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$icg")
if(!n.cx)return
if(n.ch){u=a.d.H(0,a.y)
u=new V.C(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.H(0,a.y)
u=n.ar(new V.C(t.a,t.b).p(0,2).u(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ar(new V.C(s.a,s.b).p(0,2).u(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sab(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.H(0,a.z)
n.dx=n.ar(new V.C(t.a,t.b).p(0,2).u(0,u.gac()))}n.a6()},
ea:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sS(-t*10*u)
r.a6()}},
av:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.ad()
if(s<r){t.dy=r
u=b.y
t.c.a3(0,u)
t.b.a3(0,u)
t.fr=V.kn(t.b.d).p(0,V.ko(t.c.d))}return t.fr},
$ia7:1}
U.dC.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
E:function(a){var u=this.r
if(u!=null)u.v(a)},
aB:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.z():t
t=r.geO()
u.k(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.z():s).k(0,t)
return!0},
eP:function(a){var u,t,s,r,q=this
if(!J.E(q.b,q.a.b.c))return
H.h(a,"$ic3")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.r("zoom",u,r)
u.b=!0
q.E(u)}},
av:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lL(u,u,u)}return t.f},
$ia7:1}
M.cK.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
T:function(a){var u=this.r
if(u!=null)u.v(a)},
aV:function(){return this.T(null)},
fD:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gX(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b3()
u.b=!0
this.T(u)},
fF:function(a,b){var u,t
for(u=b.gR(b),t=this.gX();u.t();)u.gG(u).gm().M(0,t)
u=new D.b4()
u.b=!0
this.T(u)},
a1:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.Z(u,u.length);u.t();){t=u.d
if(t!=null)t.a1(a)}s.f=!1},
$ai:function(){return[M.ah]},
$aam:function(){return[M.ah]},
$iah:1}
M.cL.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
T:function(a){var u=this.r
if(u!=null)u.v(a)},
aV:function(){return this.T(null)},
saO:function(a){var u,t,s=this
if(a==null)a=new X.fo()
u=s.b
if(u!==a){if(u!=null)u.gm().M(0,s.gX())
t=s.b
s.b=a
a.gm().k(0,s.gX())
u=new D.r("camera",t,s.b)
u.b=!0
s.T(u)}},
saE:function(a,b){var u,t,s=this
if(b==null)b=X.jB(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gm().M(0,s.gX())
t=s.c
s.c=b
b.gm().k(0,s.gX())
u=new D.r("target",t,s.c)
u.b=!0
s.T(u)}},
saF:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().M(0,t.gX())
u=t.d
t.d=a
if(a!=null)a.gm().k(0,t.gX())
s=new D.r("technique",u,t.d)
s.b=!0
t.T(s)}},
a1:function(a){var u,t=this
a.cj(t.d)
t.c.O(a)
t.b.O(a)
u=t.d
if(u!=null)u.a3(0,a)
t.e.a3(0,a)
t.e.a1(a)
t.b.a9(a)
t.c.toString
a.ci()},
$iah:1}
M.cQ.prototype={
T:function(a){var u=this.y
if(u!=null)u.v(a)},
aV:function(){return this.T(null)},
eZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gX(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b0()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b3()
u.b=!0
this.T(u)},
f0:function(a,b){var u,t
for(u=b.gR(b),t=this.gX();u.t();)u.gG(u).gm().M(0,t)
u=new D.b4()
u.b=!0
this.T(u)},
saO:function(a){var u,t,s=this
if(a==null)a=X.ks(null)
u=s.b
if(u!==a){if(u!=null)u.gm().M(0,s.gX())
t=s.b
s.b=a
a.gm().k(0,s.gX())
u=new D.r("camera",t,s.b)
u.b=!0
s.T(u)}},
saE:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().M(0,t.gX())
u=t.c
t.c=b
b.gm().k(0,t.gX())
s=new D.r("target",u,t.c)
s.b=!0
t.T(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
a1:function(a){var u,t=this
a.cj(t.d)
t.c.O(a)
t.b.O(a)
for(u=t.e.a,u=new J.Z(u,u.length);u.t();)u.d.a3(0,a)
for(u=t.e.a,u=new J.Z(u,u.length);u.t();)u.d.a1(a)
t.b.toString
a.cy.aD()
a.db.aD()
t.c.a9(a)
a.ci()},
$iah:1}
M.ah.prototype={}
A.cD.prototype={}
A.eH.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hu:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.W.prototype={
gap:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
h:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.W))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.fG.prototype={
e_:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bb("")
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
A.mC(c0,u)
A.mE(c0,u)
A.mD(c0,u)
A.mG(c0,u)
A.mH(c0,u)
A.mF(c0,u)
A.mI(c0,u)
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
b5.bj(0,s.charCodeAt(0)==0?s:s,A.mB(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.h(b5.y.F(0,"invViewMat"),"$iY")
if(t)b5.dy=H.h(b5.y.F(0,"objMat"),"$iY")
if(r)b5.fr=H.h(b5.y.F(0,"viewObjMat"),"$iY")
b5.fy=H.h(b5.y.F(0,"projViewObjMat"),"$iY")
if(c0.ry)b5.k1=H.h(b5.y.F(0,"txt2DMat"),"$ici")
if(c0.x1)b5.k2=H.h(b5.y.F(0,"txtCubeMat"),"$iY")
if(c0.x2)b5.k3=H.h(b5.y.F(0,"colorMat"),"$iY")
b5.r1=H.b([],[A.Y])
t=c0.y2
if(t>0){b5.k4=b5.y.F(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.t(P.p(b7+q+b8))
s.push(H.h(m,"$iY"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.F(0,"emissionClr"),"$iH")
if(t.c)b5.ry=H.h(b5.y.F(0,"emissionTxt"),"$iV")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.F(0,"ambientClr"),"$iH")
if(t.c)b5.y1=H.h(b5.y.F(0,"ambientTxt"),"$iV")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.F(0,"diffuseClr"),"$iH")
if(t.c)b5.bi=H.h(b5.y.F(0,"diffuseTxt"),"$iV")
t=c0.d
if(t.a)b5.dd=H.h(b5.y.F(0,"invDiffuseClr"),"$iH")
if(t.c)b5.de=H.h(b5.y.F(0,"invDiffuseTxt"),"$iV")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dh=H.h(b5.y.F(0,"shininess"),"$iQ")
if(s)b5.df=H.h(b5.y.F(0,"specularClr"),"$iH")
if(t.c)b5.dg=H.h(b5.y.F(0,"specularTxt"),"$iV")}if(c0.f.c)b5.di=H.h(b5.y.F(0,"bumpTxt"),"$iV")
if(c0.cy){b5.dj=H.h(b5.y.F(0,"envSampler"),"$iV")
t=c0.r
if(t.a)b5.dk=H.h(b5.y.F(0,"reflectClr"),"$iH")
if(t.c)b5.dl=H.h(b5.y.F(0,"reflectTxt"),"$iV")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dm=H.h(b5.y.F(0,"refraction"),"$iQ")
if(s)b5.dn=H.h(b5.y.F(0,"refractClr"),"$iH")
if(t.c)b5.dq=H.h(b5.y.F(0,"refractTxt"),"$iV")}}t=c0.y
if(t.a)b5.dr=H.h(b5.y.F(0,"alpha"),"$iQ")
if(t.c)b5.ds=H.h(b5.y.F(0,"alphaTxt"),"$iV")
t=P.y
s=[t,A.bf]
b5.c0=new H.M(s)
b5.c1=new H.M([t,[P.m,A.ch]])
b5.c2=new H.M(s)
b5.c3=new H.M([t,[P.m,A.cj]])
b5.c4=new H.M(s)
b5.c5=new H.M([t,[P.m,A.ck]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aw()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.t(P.p(b7+g+b8))
H.h(m,"$iH")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.t(P.p(b7+g+b8))
H.h(f,"$iH")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.t(P.p(b7+g+b8))
H.h(e,"$iH")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.t(P.p(b7+g+b8))
H.h(m,"$iH")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.t(P.p(b7+g+b8))
H.h(f,"$iH")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.t(P.p(b7+o+b8))
H.h(e,"$iaQ")
a=e}else a=b6
h.push(new A.ch(b,c,d,m,f,a))}b5.c1.l(0,j,h)
q=b5.c0
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.p(b7+o+b8))
q.l(0,j,m)}for(t=c0.Q,s=t.length,r=[A.cj],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.t(P.p(b7+o+b8))
H.h(m,"$iH")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.t(P.p(b7+o+b8))
H.h(f,"$iH")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.t(P.p(b7+o+b8))
H.h(e,"$iH")
if(typeof j!=="number")return j.aw()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.t(P.p(b7+o+b8))
H.h(a0,"$ici")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.p(b7+o+b8))
H.h(a0,"$iV")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.p(b7+o+b8))
H.h(a0,"$iV")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.t(P.p(b7+o+b8))
H.h(a2,"$ibg")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.t(P.p(b7+o+b8))
H.h(a0,"$iQ")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.t(P.p(b7+o+b8))
H.h(a2,"$iQ")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.t(P.p(b7+o+b8))
H.h(a5,"$iQ")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.cj(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c3.l(0,j,h)
q=b5.c2
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.p(b7+o+b8))
q.l(0,j,m)}for(t=c0.ch,s=t.length,r=[A.ck],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.t(P.p(b7+o+b8))
H.h(m,"$iH")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.t(P.p(b7+o+b8))
H.h(f,"$iH")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.t(P.p(b7+o+b8))
H.h(e,"$iH")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.t(P.p(b7+o+b8))
H.h(a0,"$iH")
if(typeof j!=="number")return j.aw()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.t(P.p(b7+o+b8))
H.h(a2,"$iH")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.t(P.p(b7+o+b8))
H.h(a5,"$iH")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.t(P.p(b7+o+b8))
H.h(a9,"$iQ")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.t(P.p(b7+o+b8))
H.h(b0,"$iQ")
b1=b0
b2=a9
c=a5
b=a2}else{b1=b6
b2=b1
c=b2
b=c}p=(j&2)!==0
if(p){o=b5.y
g=i+"s["+n+"].shadowAdj"
a2=o.i(0,g)
if(a2==null)H.t(P.p(b7+g+b8))
H.h(a2,"$ibg")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.t(P.p(b7+g+b8))
H.h(a2,"$iQ")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.t(P.p(b7+g+b8))
H.h(a5,"$iQ")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.t(P.p(b7+g+b8))
H.h(a2,"$iQ")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.t(P.p(b7+g+b8))
H.h(a5,"$iQ")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.t(P.p(b7+g+b8))
H.h(a9,"$iQ")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.t(P.p(b7+g+b8))
H.h(a2,"$iaQ")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.t(P.p(b7+o+b8))
H.h(a2,"$iaQ")
a3=a2}else a3=b6
h.push(new A.ck(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c5.l(0,j,h)
q=b5.c4
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.p(b7+o+b8))
q.l(0,j,m)}}},
ag:function(a,b){if(b!=null&&b.d>=6)a.ct(b)}}
A.cN.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.dc.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dk.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fJ.prototype={
h:function(a){return this.b1}}
A.ch.prototype={}
A.cj.prototype={}
A.ck.prototype={}
A.dh.prototype={
b7:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bj:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cR(b,35633)
r.f=r.cR(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.p("Failed to link shader: "+H.e(s)))}r.fV()
r.fX()},
O:function(a){a.a.useProgram(this.r)
this.x.hu()},
cR:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.p("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fV:function(){var u,t,s,r=this,q=H.b([],[A.cD]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cD(p,t.name,s))}r.x=new A.eH(q)},
fX:function(){var u,t,s,r=this,q=H.b([],[A.dx]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hn(t.type,t.size,t.name,s))}r.y=new A.ic(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.bf(u,b,c)
else return A.jN(u,this.r,b,a,c)},
eu:function(a,b,c){var u=this.a
if(a===1)return new A.aQ(u,b,c)
else return A.jN(u,this.r,b,a,c)},
ev:function(a,b,c){var u=this.a
if(a===1)return new A.V(u,b,c)
else return A.jN(u,this.r,b,a,c)},
bd:function(a,b){return new P.dN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hn:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.Q(u.a,c,d)
case 35664:return new A.aP(u.a,c,d)
case 35665:return new A.H(u.a,c,d)
case 35666:return new A.bg(u.a,c,d)
case 35667:return new A.i9(u.a,c,d)
case 35668:return new A.ia(u.a,c,d)
case 35669:return new A.ib(u.a,c,d)
case 35674:return new A.id(u.a,c,d)
case 35675:return new A.ci(u.a,c,d)
case 35676:return new A.Y(u.a,c,d)
case 35678:return u.eu(b,c,d)
case 35680:return u.ev(b,c,d)
case 35670:throw H.d(u.bd("BOOL",c))
case 35671:throw H.d(u.bd("BOOL_VEC2",c))
case 35672:throw H.d(u.bd("BOOL_VEC3",c))
case 35673:throw H.d(u.bd("BOOL_VEC4",c))
default:throw H.d(P.p("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.br.prototype={
h:function(a){return this.b}}
A.hz.prototype={}
A.hB.prototype={}
A.hW.prototype={
e3:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.bj(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.m5(a,b))
p.z=p.x.i(0,"posAttr")
p.Q=H.h(p.y.F(0,"txtCount"),"$ibf")
p.ch=H.h(p.y.F(0,"backClr"),"$ibg")
p.cx=H.b([],[A.aQ])
p.cy=H.b([],[A.Y])
u=[A.aP]
p.db=H.b([],u)
p.dx=H.b([],u)
p.dy=H.b([],u)
p.fr=H.b([],u)
p.fx=H.b([],[A.bf])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.i(0,r)
if(q==null)H.t(P.p(o+r+n))
u.push(H.h(q,"$iaQ"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.i(0,r)
if(q==null)H.t(P.p(o+r+n))
u.push(H.h(q,"$iY"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.i(0,r)
if(q==null)H.t(P.p(o+r+n))
u.push(H.h(q,"$iaP"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.i(0,r)
if(q==null)H.t(P.p(o+r+n))
u.push(H.h(q,"$iaP"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.i(0,r)
if(q==null)H.t(P.p(o+r+n))
u.push(H.h(q,"$iaP"))
u=p.fr
s=p.y
r="destSize"+t
q=s.i(0,r)
if(q==null)H.t(P.p(o+r+n))
u.push(H.h(q,"$iaP"))
u=p.fx
s=p.y
r="flip"+t
q=s.i(0,r)
if(q==null)H.t(P.p(o+r+n))
u.push(H.h(q,"$ibf"))}}}
A.dx.prototype={}
A.ic.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
F:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.bf.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.i9.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ia.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.ib.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.i8.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.Q.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.aP.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.H.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bg.prototype={
cr:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.id.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.ci.prototype={
ae:function(a){var u=new Float32Array(H.bE(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.Y.prototype={
ae:function(a){var u=new Float32Array(H.bE(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.aQ.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.V.prototype={
ct:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.j7.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ca(s.b,b).ca(s.d.ca(s.c,b),c)
s=new V.a0(r.a,r.b,r.c)
if(!J.E(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a0()}a.sb4(r.u(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
u=new V.aJ(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.E(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a0()}}}
F.b1.prototype={
eo:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dD()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dt())return
return s.u(0,Math.sqrt(s.w(s)))},
eq:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.A(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.w(r)))
r=t.H(0,q)
r=new V.A(r.a,r.b,r.c)
r=s.b0(r.u(0,Math.sqrt(r.w(r))))
return r.u(0,Math.sqrt(r.w(r)))},
bR:function(){var u,t=this
if(t.d!=null)return!0
u=t.eo()
if(u==null){u=t.eq()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
en:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dD()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dt())return
return s.u(0,Math.sqrt(s.w(s)))},
ep:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.v().a){l=d.H(0,g)
l=new V.A(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.H(0,g)
l=new V.a0(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).H(0,j)
l=new V.A(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.w(l)))
l=o.b0(q)
l=l.u(0,Math.sqrt(l.w(l))).b0(o)
q=l.u(0,Math.sqrt(l.w(l)))}return q},
bP:function(){var u,t=this
if(t.e!=null)return!0
u=t.en()
if(u==null){u=t.ep()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
C:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.d.ak(J.a4(s.e),0)+", "+C.d.ak(J.a4(t.b.e),0)+", "+C.d.ak(J.a4(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
K:function(){return this.C("")}}
F.c_.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
C:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.d.ak(J.a4(u.e),0)+", "+C.d.ak(J.a4(this.b.e),0)},
K:function(){return this.C("")}}
F.c7.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.d.ak(J.a4(u.e),0)},
K:function(){return this.C("")}}
F.hs.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
hC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.Z()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.k(0,r.hk())}h.a.Z()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.Z()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.k(0,n)
o=new F.c7()
if(n.a==null)H.t(P.p("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.Z()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.Z()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.k(0,l)
p.a.k(0,k)
F.lG(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.Z()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.Z()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.Z()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.k(0,l)
o.a.k(0,k)
o.a.k(0,i)
F.bV(l,k,i)}g=h.e
if(g!=null)g.au(0)},
aC:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aC()||!1
if(!t.a.aC())u=!1
s=t.e
if(s!=null)s.au(0)
return u},
bg:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.a2()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aV().a)!==0)++s
if((t&$.aU().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.aW().a)!==0)++s
if((t&$.cA().a)!==0)++s
if((t&$.cB().a)!==0)++s
if((t&$.bN().a)!==0)++s
if((t&$.aT().a)!==0)++s
r=a4.gcv(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cF])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hb(m)
k=l.gcv(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.cF(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].hB(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bE(p)),35044)
u.bindBuffer(a1,null)
c=new Z.aX(new Z.dE(a1,d),o,a4)
c.b=H.b([],[Z.bu])
if(a0.b.b.length!==0){b=H.b([],[P.y])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.Z()
b.push(t.e)}a=Z.jQ(u,34963,b)
c.b.push(new Z.bu(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.y])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.Z()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.Z()
b.push(t.e)}a=Z.jQ(u,34963,b)
c.b.push(new Z.bu(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.y])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.Z()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.Z()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.Z()
b.push(t.e)}a=Z.jQ(u,34963,b)
c.b.push(new Z.bu(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.b([],[P.n])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.C(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.C(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.C(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.C(t))}return C.a.q(s,"\n")},
a0:function(){var u=this.e
if(u!=null)u.v(null)}}
F.ht.prototype={
h8:function(a){var u,t,s,r,q=H.b([],[F.b1]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.k(0,p)
u.a.k(0,s)
u.a.k(0,r)
q.push(F.bV(p,s,r))}return q},
h9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b1])
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
if(p){n.k(0,m)
u.a.k(0,l)
u.a.k(0,j)
h.push(F.bV(m,l,j))
u.a.k(0,m)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bV(m,j,i))}else{n.k(0,l)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bV(l,j,i))
u.a.k(0,l)
u.a.k(0,i)
u.a.k(0,m)
h.push(F.bV(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
aC:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bR())s=!1
return s},
bQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bP())s=!1
return s},
h:function(a){return this.K()},
C:function(a){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(a))
return C.a.q(r,"\n")},
K:function(){return this.C("")}}
F.hu.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.K()},
C:function(a){var u,t,s=H.b([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].C(a+(""+u+". ")))}return C.a.q(s,"\n")},
K:function(){return this.C("")}}
F.hv.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.K()},
C:function(a){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(a))
return C.a.q(r,"\n")},
K:function(){return this.C("")}}
F.bC.prototype={
bU:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iq(u.cx,r,o,t,s,q,p,a,n)},
hk:function(){return this.bU(null)},
sb4:function(a){var u
if(!J.E(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a0()}},
hB:function(a){var u,t,s=this
if(a.n(0,$.a2())){u=s.f
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aV())){u=s.r
t=[P.K]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aU())){u=s.x
t=[P.K]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.bk())){u=s.y
t=[P.K]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.aW())){u=s.z
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cA())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cB())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bN()))return H.b([s.ch],[P.K])
else if(a.n(0,$.aT())){u=s.cx
t=[P.K]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.K])},
bR:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dD()
t.d.J(0,new F.iy(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.au(0)}return!0},
bP:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dD()
t.d.J(0,new F.ix(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.au(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
C:function(a){var u,t,s=this,r="-",q=H.b([],[P.n])
q.push(C.d.ak(J.a4(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.B(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
K:function(){return this.C("")}}
F.iy.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.ix.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.ir.prototype={
Z:function(){},
k:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.p("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a0()
return!0},
be:function(a,b,c,d,e,f){var u=F.iq(a,null,b,c,null,d,e,f,0)
this.k(0,u)
return u},
gj:function(a){return this.c.length},
aC:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bR()
return!0},
bQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bP()
return!0},
hh:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.E(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
h:function(a){return this.K()},
C:function(a){var u,t,s,r
this.Z()
u=H.b([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].C(a))
return C.a.q(u,"\n")},
K:function(){return this.C("")}}
F.is.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
C.a.J(u.b,b)
C.a.J(u.c,new F.it(u,b))
C.a.J(u.d,new F.iu(u,b))},
h:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
return C.a.q(r,"\n")}}
F.it.prototype={
$1:function(a){if(!J.E(a.a,this.a))this.b.$1(a)}}
F.iu.prototype={
$1:function(a){var u=this.a
if(!J.E(a.a,u)&&!J.E(a.b,u))this.b.$1(a)}}
F.iv.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
return C.a.q(r,"\n")}}
F.iw.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
return C.a.q(r,"\n")}}
O.d5.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.z():u},
A:function(a){var u=this.fr
if(u!=null)u.v(a)},
aa:function(){return this.A(null)},
cX:function(a){this.a=null
this.A(a)},
fR:function(){return this.cX(null)},
eT:function(a,b){var u=new D.b3()
u.b=!0
this.A(u)},
eV:function(a,b){var u=new D.b4()
u.b=!0
this.A(u)},
cO:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.y,h=new H.M([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=h.i(0,0)
h.l(0,0,r==null?1:r)}q=H.b([],[A.cN])
h.J(0,new O.fN(j,q))
C.a.bt(q,new O.fO())
p=new H.M([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){o=u[s]
r=o.gb_()
n=p.i(0,o.gb_())
p.l(0,r,n==null?1:n)}m=H.b([],[A.dc])
p.J(0,new O.fP(j,m))
C.a.bt(m,new O.fQ())
l=new H.M([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.o)(i),++s){o=i[s]
t=o.gb_()
r=l.i(0,o.gb_())
l.l(0,t,r==null?1:r)}k=H.b([],[A.dk])
l.J(0,new O.fR(j,k))
C.a.bt(k,new O.fS())
i=C.c.a_(j.e.a.length+3,4)
j.dy.e
return A.lK(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
af:function(a,b){if(b!=null)if(!C.a.P(a,b)){b.a=a.length
a.push(b)}},
a3:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.Z(u,u.length);u.t();){t=u.d
t.toString
s=$.ip
if(s==null)s=$.ip=new V.A(0,0,1)
t.a=s
r=$.io
t.d=r==null?$.io=new V.A(0,1,0):r
r=$.im
t.e=r==null?$.im=new V.A(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bp(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bp(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bp(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
bn:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cO()
u=b1.fr.i(0,b0.b1)
if(u==null){u=A.lJ(b0,b1.a)
b1.bf(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.bi
b0=b2.e
if(!(b0 instanceof Z.aX))b0=b2.e=null
if(b0==null||!b0.d.n(0,s)){b0=t.k3
if(b0)b2.d.aC()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bQ()
q.a.bQ()
q=q.e
if(q!=null)q.au(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.hh()
p=p.e
if(p!=null)p.au(0)}n=b2.d.bg(new Z.bD(b1.a),s)
n.an($.a2()).e=a9.a.Q.c
if(b0)n.an($.aV()).e=a9.a.cx.c
if(r)n.an($.aU()).e=a9.a.ch.c
if(t.r1)n.an($.bk()).e=a9.a.cy.c
if(q)n.an($.aW()).e=a9.a.db.c
if(t.rx)n.an($.aT()).e=a9.a.dx.c
b2.e=n}m=H.b([],[T.cf])
a9.a.O(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.gU(r)
b0=b0.dy
b0.toString
b0.ae(r.a2(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.gU(r)
q=b1.dx
q=b1.cx=r.p(0,q.gU(q))
r=q}b0=b0.fr
b0.toString
b0.ae(r.a2(0,!0))}b0=a9.a
r=b1.gdH()
b0=b0.fy
b0.toString
b0.ae(r.a2(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.ae(C.k.a2(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.ae(C.k.a2(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.ae(C.k.a2(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.c(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.c(b0,k)
b0=b0[k]
j=new Float32Array(H.bE(r.a2(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.af(m,a9.f.e)
b0=a9.a
r=a9.f.e
b0.ag(b0.ry,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.af(m,a9.r.e)
b0=a9.a
r=a9.r.e
b0.ag(b0.y1,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.af(m,a9.x.e)
b0=a9.a
r=a9.x.e
b0.ag(b0.bi,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.dd
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.af(m,a9.y.e)
b0=a9.a
r=a9.y.e
b0.ag(b0.de,r)}b0=t.e
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.z.ch
q=q.dh
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.df
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.af(m,a9.z.e)
b0=a9.a
r=a9.z.e
b0.ag(b0.dg,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.gU(r)
r=P.y
h=new H.M([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.l(0,0,e+1)
d=J.eC(a9.a.c1.i(0,0),e)
p=i.bp(f.a)
o=p.a
c=p.b
b=p.c
b=p.u(0,Math.sqrt(o*o+c*c+b*b))
c=d.e
o=b.a
p=b.b
b=b.c
c.a.uniform3f(c.d,o,p,b)
b=f.c
p=d.f
p.a.uniform3f(p.d,b.a,b.b,b.c)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.c0.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.gU(r)
r=P.y
a=new H.M([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
a0=f.gb_()
e=a.i(0,a0)
if(e==null)e=0
a.l(0,a0,e+1)
d=J.eC(a9.a.c3.i(0,a0),e)
a1=i.p(0,f.gU(f))
p=f.gU(f)
o=$.c8
p=p.cm(o==null?$.c8=new V.a0(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.c8
p=a1.cm(p==null?$.c8=new V.a0(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaZ(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gal()
p=a1.c7(0)
o=p.a
c=p.b
b=p.c
a2=p.e
a3=p.f
a4=p.r
a5=p.y
a6=p.z
p=p.Q
a7=d.d
a7.toString
j=new Float32Array(H.bE(new V.d6(o,c,b,a2,a3,a4,a5,a6,p).a2(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gal()
p=f.gal()
if(!C.a.P(m,p)){p.a=m.length
m.push(p)}p=f.gal()
o=p.gcb(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaT()
p=f.gdR()
o=d.x
o.toString
c=p.ghr(p)
b=p.ghs(p)
a2=p.ght()
p=p.ghq()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaT()
if(!C.a.P(m,p)){p.a=m.length
m.push(p)}p=f.gaT()
o=p.gcb(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.ghv()){p=f.ghc()
o=d.y
o.a.uniform1f(o.d,p)
p=f.ghd()
o=d.z
o.a.uniform1f(o.d,p)
p=f.ghe()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.c2.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.gU(r)
r=P.y
a8=new H.M([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
a0=f.gb_()
e=a8.i(0,a0)
if(e==null)e=0
a8.l(0,a0,e+1)
d=J.eC(a9.a.c5.i(0,a0),e)
p=f.ghS(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gia(f).io()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.cm(f.ghS(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaZ(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gal()
p=f.gbq()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gck(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gip()
o=d.x
o.a.uniform1f(o.d,p)
p=f.giq()
o=d.y
o.a.uniform1f(o.d,p)
f.gal()
p=f.gal()
if(!C.a.P(m,p)){p.a=m.length
m.push(p)}p=f.gal()
o=p.gcb(p)
if(o){o=d.dx
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaT()
p=f.gdR()
o=d.z
o.toString
c=p.ghr(p)
b=p.ghs(p)
a2=p.ght()
p=p.ghq()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaT()
if(!C.a.P(m,p)){p.a=m.length
m.push(p)}p=f.gaT()
o=p.gcb(p)
if(o){o=d.dy
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gib()){p=f.gi9()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.gi8()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.ghv()){p=f.ghc()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.ghd()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.ghe()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.c4.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){a9.af(m,a9.Q.e)
b0=a9.a
r=a9.Q.e
b0.ag(b0.di,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gU(r).c7(0)}b0=b0.id
b0.toString
b0.ae(r.a2(0,!0))}if(t.cy){a9.af(m,a9.ch)
b0=a9.a
r=a9.ch
b0.ag(b0.dj,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.dk
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.af(m,a9.cx.e)
b0=a9.a
r=a9.cx.e
b0.ag(b0.dl,r)}b0=t.x
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.cy.ch
q=q.dm
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.dn
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.af(m,a9.cy.e)
b0=a9.a
r=a9.cy.e
b0.ag(b0.dq,r)}}b0=t.y
r=b0.a
q=!r
if(q)p=b0.c
else p=!0
if(p){if(r){r=a9.a
p=a9.db.f
r=r.dr
r.a.uniform1f(r.d,p)}if(b0.c){a9.af(m,a9.db.e)
r=a9.a
p=a9.db.e
r.ag(r.ds,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].O(b1)
r=b2.e
r.O(b1)
r.a1(b1)
r.a9(b1)
if(q)b0=b0.c
else b0=!0
if(b0)b1.a.disable(3042)
for(b0=b1.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b0.activeTexture(33984+r.a)
b0.bindTexture(34067,null)}}r=a9.a
r.toString
b0.useProgram(null)
r.x.bh()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cO().b1}}
O.fN.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.cN(a,C.c.a_(b+3,4)*4))}}
O.fO.prototype={
$2:function(a,b){return J.jt(a.a,b.a)}}
O.fP.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dc(a,C.c.a_(b+3,4)*4))}}
O.fQ.prototype={
$2:function(a,b){return J.jt(a.a,b.a)}}
O.fR.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dk(a,C.c.a_(b+3,4)*4))}}
O.fS.prototype={
$2:function(a,b){return J.jt(a.a,b.a)}}
O.fH.prototype={
az:function(){var u,t=this
t.cC()
u=t.f
if(!(Math.abs(u-1)<$.v().a)){t.f=1
u=new D.r(t.b,u,1)
u.b=!0
t.a.A(u)}}}
O.c1.prototype={
A:function(a){return this.a.A(a)},
aa:function(){return this.A(null)},
az:function(){},
bM:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.A(null)}},
sb4:function(a){var u,t=this,s=t.c
if(!s.c)t.bM(new A.W(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gm().M(0,t.ga5())
u=t.e
t.e=a
a.gm().k(0,t.ga5())
s=new D.r(t.b+".textureCube",u,t.e)
s.b=!0
t.a.A(s)}}}
O.fI.prototype={}
O.ao.prototype={
cZ:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.r(s.b+".color",u,a)
t.b=!0
s.a.A(t)}},
az:function(){this.cC()
this.cZ(new V.I(1,1,1))},
saZ:function(a,b){this.bM(new A.W(!0,!1,this.c.c))
this.cZ(b)}}
O.fK.prototype={}
O.fL.prototype={
az:function(){var u,t=this
t.cD()
u=t.ch
if(!(Math.abs(u-1)<$.v().a)){t.ch=1
u=new D.r(t.b+".refraction",u,1)
u.b=!0
t.a.A(u)}}}
O.fM.prototype={
d0:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.v().a)){u.ch=a
t=new D.r(u.b+".shininess",t,a)
t.b=!0
u.a.A(t)}},
az:function(){this.cD()
this.d0(100)}}
O.di.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
A:function(a){var u=this.e
if(u!=null)u.v(a)},
aa:function(){return this.A(null)},
a3:function(a,b){},
bn:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.hz(t,n)
u.b7(t,n)
u.bj(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.h(u.y.i(0,"fov"),"$iQ")
u.ch=H.h(u.y.i(0,"ratio"),"$iQ")
u.cx=H.h(u.y.i(0,"boxClr"),"$iH")
u.cy=H.h(u.y.i(0,"boxTxt"),"$iV")
u.db=H.h(u.y.i(0,"viewMat"),"$iY")
a.bf(u)}o.a=u}if(b.e==null){t=b.d.bg(new Z.bD(a.a),$.a2())
t.an($.a2()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.O(a)}t=a.d
s=a.c
r=o.a
r.O(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.ct(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gU(s).c7(0)
r=r.db
r.toString
r.ae(s.a2(0,!0))
t=b.e
if(t instanceof Z.aX){t.O(a)
t.a1(a)
t.a9(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.bh()
t=o.c
if(t!=null)t.a9(a)}}
O.hA.prototype={
gm:function(){var u=this.c
return u==null?this.c=D.z():u},
a3:function(a,b){},
bn:function(a,b){var u,t,s,r=this,q="SolidColor",p=r.a
if(p==null){u=a.fr.i(0,q)
if(u==null){p=a.a
u=new A.hB(p,q)
u.b7(p,q)
u.bj(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.h(u.y.i(0,"color"),"$ibg")
u.ch=H.h(u.y.i(0,"projViewObjMat"),"$iY")
a.bf(u)}r.a=u
p=u}t=b.e
if((!(t instanceof Z.aX)?b.e=null:t)==null){p=b.d.bg(new Z.bD(a.a),$.a2())
t=p.an($.a2())
s=r.a
t.e=s.z.c
b.e=p
p=s}p.O(a)
t=r.b
p.Q.cr(t)
t=a.gdH()
p=p.ch
p.toString
p.ae(t.a2(0,!0))
t=b.e
t.O(a)
t.a1(a)
t.a9(a)
t=r.a
t.toString
a.a.useProgram(null)
t.x.bh()}}
O.dq.prototype={}
O.dr.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
A:function(a){var u=this.e
if(u!=null)u.v(a)},
aa:function(){return this.A(null)},
f8:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga5(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.b0()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.aa()},
fa:function(a,b){var u,t
for(u=b.gR(b),t=this.ga5();u.t();)u.gG(u).gm().M(0,t)
this.aa()},
a3:function(a,b){},
eC:function(a){a=C.c.a_(a+3,4)*4
if(a<=0)return 4
return a},
bn:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.eC(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.c.h(u.a)
s=a.fr.i(0,t)
if(s==null){s=A.m4(i,u,a.a)
a.bf(s)}j.b=s
u=s}if(b.e==null){u=b.d.bg(new Z.bD(a.a),$.a2())
t=u.an($.a2())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.O(a)
q=H.b([],[T.cf])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.a.P(q,u)){u.a=q.length
q.push(u)}u=j.b
t=n.a
u=u.cx
if(p>=u.length)return H.c(u,p)
u=u[p]
r=t==null||!t.d
m=u.a
u=u.d
if(r)m.uniform1i(u,0)
else m.uniform1i(u,t.a)
u=j.b
t=n.b
u=u.cy
if(p>=u.length)return H.c(u,p)
u=u[p]
if(t==null){t=$.fT
if(t==null){t=new V.ac(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fT=t}}l=new Float32Array(H.bE(t.a2(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.cb
if(t==null){t=V.de(0,0,1,1)
$.cb=t
k=t}else k=t}t=u.db
if(p>=t.length)return H.c(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.dx
if(p>=u.length)return H.c(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
k=n.d
u.toString
if(k==null){t=$.cb
if(t==null){t=V.de(0,0,1,1)
$.cb=t
k=t}else k=t}t=u.dy
if(p>=t.length)return H.c(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.fr
if(p>=u.length)return H.c(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
t=n.e
u=u.fx
if(p>=u.length)return H.c(u,p)
u=u[p]
t=t?1:0
u.a.uniform1i(u.d,t);++p}}u=j.b.Q
u.a.uniform1i(u.d,p)
u=j.b
t=j.a
u.ch.cr(t)
for(u=a.a,o=0;o<q.length;++o){t=q[o]
if(!t.c&&t.d){t.c=!0
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}t=b.e
if(t instanceof Z.aX){t.O(a)
t.a1(a)
t.a9(a)}else b.e=null
t=j.b
t.toString
u.useProgram(null)
t.x.bh()
for(o=0;o<q.length;++o){t=q[o]
if(t.c){t.c=!1
u.activeTexture(33984+t.a)
u.bindTexture(3553,null)}}}}
O.bc.prototype={
A:function(a){var u=this.f
if(u!=null)u.v(a)},
aa:function(){return this.A(null)},
sal:function(a){var u,t=this,s=t.a
if(s!=a){if(s!=null)s.gm().M(0,t.ga5())
u=t.a
t.a=a
if(a!=null)a.gm().k(0,t.ga5())
s=new D.r("texture",u,t.a)
s.b=!0
t.A(s)}},
sda:function(a,b){var u,t,s=this
if(b==null)b=V.df()
if(!J.E(s.d,b)){u=s.d
s.d=b
t=new D.r("destination",u,b)
t.b=!0
s.A(t)}}}
T.cI.prototype={
b8:function(a){},
eg:function(){return this.b8(null)},
aB:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.gbZ().k(0,t.geI())
t.b.c.gaS().k(0,t.geK())
t.b.c.gbq().k(0,t.geM())
u=t.b.e
u.gcw(u).k(0,t.gh3())
t.b.e.gaS().k(0,t.gh1())
u=t.b.e
u.gdc(u).k(0,t.gh_())
return!0},
eJ:function(a){if(!H.h(a,"$iad").x.b.n(0,this.c))return
this.ch=this.Q=!0},
eL:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.h(a,"$iad")
u=a.d.H(0,a.y)
u=new V.C(u.a,u.b)
if(u.w(u)<t.z)return
t.ch=!1}},
eN:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.cW(a)},
h4:function(a){this.ch=this.Q=!0},
h2:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.h(a,"$icg")
u=a.d.H(0,a.y)
u=new V.C(u.a,u.b)
if(u.w(u)<t.z)return
t.ch=!1}},
h0:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.cW(a)},
cW:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
H.h(a,"$iad")
u=a.d
t=u.a
s=a.c
r=t/s.c
q=u.b/s.d
s=this.a
u=this.d
p=T.kA(s.a,u,!0,1,1,C.j.aQ(r*(u.r-1)),C.j.aQ(q*(u.x-1)))
u=p.b
o=C.c.bs(0,u)
n=C.c.bs(0,p.c)
m=(o+n*u)*4
u=p.a
t=u.length
if(m<0||m>=t)return H.c(u,m)
s=u[m]/255
l=m+1
if(l>=t)return H.c(u,l)
l=u[l]/255
k=m+2
if(k>=t)return H.c(u,k)
k=u[k]/255
j=m+3
if(j>=t)return H.c(u,j)
j=u[j]/255
if(s<0)u=0
else u=s>1?1:s
if(l<0)t=0
else t=l>1?1:l
if(k<0)s=0
else s=k>1?1:k
if(j<0)l=0
else l=j>1?1:j
l=new T.cJ(new V.C(r,q),new V.N(u,t,s,l))
l.b=!0
s=this.x
if(s!=null)s.v(l)}}
T.cJ.prototype={
h:function(a){return"ColorPicker: "+this.c.h(0)+" => "+this.d.h(0)}}
T.cf.prototype={}
T.hT.prototype={}
T.hU.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.z():u}}
T.hV.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
O:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a9:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hX.prototype={
dv:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.hV()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aK(u,k,r,34069,!1,!1)
t.aK(u,k,o,34070,!1,!1)
t.aK(u,k,q,34071,!1,!1)
t.aK(u,k,n,34072,!1,!1)
t.aK(u,k,p,34073,!1,!1)
t.aK(u,k,m,34074,!1,!1)
return u},
du:function(a){return this.dv(a,".png")},
aK:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.T(u,"load",new T.hY(this,u,!1,b,!1,d,a),!1)},
fS:function(a,b,c){var u,t,s,r
b=V.cz(b)
u=V.cz(a.width)
t=V.cz(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.eR()
s.width=u
s.height=t
r=C.f.co(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.kS(r.getImageData(0,0,s.width,s.height))}}}
T.hY.prototype={
$1:function(a){var u=this,t=u.a,s=t.fS(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.w.i1(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.c_()}++t.e}}
T.hZ.prototype={
eA:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(u=this.c,t=C.c.a_(u,2),s=this.b,r=this.a,q=r.length,p=s*4,--u;t>=0;--t){o=p*t
n=p*(u-t)
for(m=0;m<s;++m){l=4*m
k=o+l
j=n+l
for(i=0;i<4;++i){h=k+i
g=j+i
if(h<0||h>=q)return H.c(r,h)
f=r[h]
if(g<0||g>=q)return H.c(r,g)
r[h]=r[g]
r[g]=f}}}}}
X.eM.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.z():u},
Y:function(a){var u=this.fr
if(u!=null)u.v(a)},
sam:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.r("width",u,b)
u.b=!0
t.Y(u)}},
sai:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.r("height",u,b)
u.b=!0
t.Y(u)}},
O:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.p()
i.sam(0,C.b.V(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.p()
i.sai(0,C.b.V(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=u.getParameter(3379)
p=V.cz(s)
o=V.cz(r)
q=V.cz(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.w.dL(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.kz(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.c_()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.c_()
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
a.c=C.b.V(s*i.a)
r=t.d
a.d=C.b.V(r*i.b)
l=t.a
k=i.c
j=C.b.V(l*k)
t=t.b
l=i.d
u.viewport(j,C.b.V(t*l),C.b.V(s*k),C.b.V(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
a9:function(a){a.a.bindFramebuffer(36160,null)}}
X.jv.prototype={}
X.fm.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.z():u},
O:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.u(u)
q=C.b.V(r*u)
r=s.b
if(typeof t!=="number")return H.u(t)
p=C.b.V(r*t)
r=C.b.V(s.c*u)
a.c=r
s=C.b.V(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
a9:function(a){}}
X.fo.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
O:function(a){var u
a.cy.bm(V.b9())
u=V.b9()
a.db.bm(u)},
a9:function(a){a.cy.aD()
a.db.aD()}}
X.db.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.z():u},
Y:function(a){var u=this.f
if(u!=null)u.v(a)},
ek:function(){return this.Y(null)},
O:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ap(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bm(k)
r=$.kt
if(r==null){r=V.kv()
q=V.jP()
p=$.kG
r=V.km(r,q,p==null?$.kG=new V.A(0,0,-1):p)
$.kt=r
u=r}else u=r
r=s.b
if(r!=null){t=r.av(0,a,s)
if(t!=null)u=t.p(0,u)}a.db.bm(u)},
a9:function(a){a.cy.aD()
a.db.aD()}}
X.hP.prototype={}
V.eP.prototype={
h5:function(a,b,c){var u,t,s,r=this
if(r.b==null)return
u=document
t=u.createElement("button")
s=t.style
s.whiteSpace="nowrap"
C.A.dQ(t,b)
W.T(t,"click",new V.eQ(c),!1)
J.k2(r.b).k(0,t)
J.k2(r.b).k(0,u.createElement("br"))
r.c.push(t)}}
V.eQ.prototype={
$1:function(a){return this.a.$0()}}
V.jp.prototype={
$1:function(a){var u=C.b.dM(this.a.ghx(),2)
if(u!=="0.00")P.k_(u+" fps")}}
V.hw.prototype={
e2:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.T(q,"scroll",new V.hy(o),!1)},
d4:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fW()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.i5(C.a.hA(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
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
if(H.nh(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.mk(C.R,n,C.r,!1)
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
h6:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
n.id="shellTable"
u=n.style
u.width="100%"
u.padding="0px"
u.marginLeft=p
u.marginRight=p
this.a.appendChild(n)
t=n.insertRow(-1)
u=t.insertCell(-1).style
u.textAlign="center"
u.verticalAlign="top"
u.marginLeft=p
u.marginRight=p
for(s=0;s<1;++s){r=o.createElement("div")
r.id=a[s]
u=r.style
u.textAlign="left"
u=r.style
u.verticalAlign="top"
u=t.insertCell(-1)
q=u.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=p
q.marginRight=p
u.appendChild(r)}},
fW:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.i1()
t=P.n
u.a=new H.M([t,R.dm])
u.b=new H.M([t,R.dv])
u.c=u.L(0,q)
t=u.L(0,q).q(0,p)
s=T.X(new H.P("*"))
t.a.push(s)
t.c=!0
t=u.L(0,p).q(0,p)
s=new T.aF()
r=[T.d4]
s.a=H.b([],r)
t.a.push(s)
t=T.X(new H.P("*"))
s.a.push(t)
t=u.L(0,p).q(0,"BoldEnd")
s=T.X(new H.P("*"))
t.a.push(s)
t.c=!0
t=u.L(0,q).q(0,o)
s=T.X(new H.P("_"))
t.a.push(s)
t.c=!0
t=u.L(0,o).q(0,o)
s=new T.aF()
s.a=H.b([],r)
t.a.push(s)
t=T.X(new H.P("_"))
s.a.push(t)
t=u.L(0,o).q(0,n)
s=T.X(new H.P("_"))
t.a.push(s)
t.c=!0
t=u.L(0,q).q(0,m)
s=T.X(new H.P("`"))
t.a.push(s)
t.c=!0
t=u.L(0,m).q(0,m)
s=new T.aF()
s.a=H.b([],r)
t.a.push(s)
t=T.X(new H.P("`"))
s.a.push(t)
t=u.L(0,m).q(0,"CodeEnd")
s=T.X(new H.P("`"))
t.a.push(s)
t.c=!0
t=u.L(0,q).q(0,l)
s=T.X(new H.P("["))
t.a.push(s)
t.c=!0
t=u.L(0,l).q(0,k)
s=T.X(new H.P("|"))
t.a.push(s)
s=u.L(0,l).q(0,j)
t=T.X(new H.P("]"))
s.a.push(t)
s.c=!0
s=u.L(0,l).q(0,l)
t=new T.aF()
t.a=H.b([],r)
s.a.push(t)
s=T.X(new H.P("|]"))
t.a.push(s)
s=u.L(0,k).q(0,j)
t=T.X(new H.P("]"))
s.a.push(t)
s.c=!0
s=u.L(0,k).q(0,k)
t=new T.aF()
t.a=H.b([],r)
s.a.push(t)
s=T.X(new H.P("|]"))
t.a.push(s)
u.L(0,q).q(0,i).a.push(new T.eE())
s=u.L(0,i).q(0,i)
t=new T.aF()
t.a=H.b([],r)
s.a.push(t)
s=T.X(new H.P("*_`["))
t.a.push(s)
s=u.L(0,"BoldEnd")
s.d=s.a.b5(p)
s=u.L(0,n)
s.d=s.a.b5(o)
s=u.L(0,"CodeEnd")
s.d=s.a.b5(m)
s=u.L(0,j)
s.d=s.a.b5("Link")
s=u.L(0,i)
s.d=s.a.b5(i)
this.b=u}}
V.hy.prototype={
$1:function(a){P.kC(C.i,new V.hx(this.a))}}
V.hx.prototype={
$0:function(){var u=C.b.V(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
M.jl.prototype={
$1:function(a){var u,t,s
for(u=this.a,t=0;t<u.length;++t){s=u[t]
s.sbX(0.99*s.e)
s.sbY(0.99*s.f)}}}
M.jm.prototype={
$1:function(a){var u,t,s,r=H.h(a,"$icJ").d.i6()
for(u=this.a,t=0;t<u.length;++t)if(u[t].n(0,r)){u=this.b
if(t>=u.length)return H.c(u,t)
s=u[t]
s.sbX(1.21)
s.sbY(1.31)
break}}}
M.jn.prototype={
$0:function(){var u,t,s,r,q,p=null,o="image/png",n=T.kA(this.a.f.a,this.b.ch,!0,p,p,p,p),m=W.eR(),l=n.b
m.width=l
u=n.c
m.height=u
t=C.f.co(m,"2d")
s=(t&&C.t).hm(t,l,u)
C.S.dP(J.ll(s),0,n.a)
C.t.hU(t,s,0,0)
n=m.toDataURL(o,100)
n.length
r=H.nj(n,o,"image/octet-stream",0)
q=W.k4()
q.setAttribute("download","backBuffer.png")
q.setAttribute("href",r)
q.click()}};(function aliases(){var u=J.a.prototype
u.dV=u.h
u=J.cY.prototype
u.dX=u.h
u=P.q.prototype
u.cB=u.W
u=P.i.prototype
u.dW=u.br
u=W.O.prototype
u.bu=u.ah
u=W.e8.prototype
u.dY=u.at
u=T.cU.prototype
u.dU=u.aR
u.cA=u.h
u=O.c1.prototype
u.cC=u.az
u=O.ao.prototype
u.cD=u.az})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mQ","mb",6)
u(P,"mR","mc",6)
u(P,"mS","md",6)
t(P,"kQ","mO",9)
s(W,"n3",4,null,["$4"],["me"],17,0)
s(W,"n4",4,null,["$4"],["mf"],17,0)
var m
r(m=E.az.prototype,"gdC",0,0,null,["$1","$0"],["dD","hJ"],0,0)
r(m,"gdE",0,0,null,["$1","$0"],["dF","hK"],0,0)
r(m,"gdA",0,0,null,["$1","$0"],["dB","hI"],0,0)
r(m,"gdw",0,0,null,["$1","$0"],["dz","hF"],0,0)
q(m,"ghD","hE",3)
q(m,"ghG","hH",3)
r(m=E.ds.prototype,"gcE",0,0,null,["$1","$0"],["cG","cF"],0,0)
p(m,"ghY","dI",9)
o(m=X.dz.prototype,"gfb","fc",4)
o(m,"geW","eX",4)
o(m,"gf1","f2",2)
o(m,"gff","fg",10)
o(m,"gfd","fe",10)
o(m,"gfj","fk",2)
o(m,"gfn","fo",2)
o(m,"gf5","f6",2)
o(m,"gfl","fm",2)
o(m,"gf3","f4",2)
o(m,"gfp","fq",19)
o(m,"gfs","ft",4)
o(m,"gfK","fL",5)
o(m,"gfG","fH",5)
o(m,"gfI","fJ",5)
r(D.bs.prototype,"ge5",0,0,null,["$1","$0"],["ax","e6"],0,0)
r(m=D.d_.prototype,"gcU",0,0,null,["$1","$0"],["cV","fh"],0,0)
o(m,"gfu","fv",20)
q(m,"geQ","eR",11)
q(m,"gfA","fB",11)
n(V.C.prototype,"gj","c9",12)
n(V.A.prototype,"gj","c9",12)
r(m=U.bW.prototype,"gaL",0,0,null,["$1","$0"],["E","a6"],0,0)
q(m,"ge7","e8",13)
q(m,"gfw","fz",13)
r(m=U.dA.prototype,"gaL",0,0,null,["$1","$0"],["E","a6"],0,0)
o(m,"gbv","bw",1)
o(m,"gbx","by",1)
o(m,"gbz","bA",1)
r(m=U.dB.prototype,"gaL",0,0,null,["$1","$0"],["E","a6"],0,0)
o(m,"gbv","bw",1)
o(m,"gbx","by",1)
o(m,"gbz","bA",1)
o(m,"geD","eE",1)
o(m,"geF","eG",1)
o(m,"ged","ee",1)
o(m,"geb","ec",1)
o(m,"ge9","ea",1)
o(U.dC.prototype,"geO","eP",1)
r(m=M.cK.prototype,"gX",0,0,null,["$1","$0"],["T","aV"],0,0)
q(m,"gfC","fD",14)
q(m,"gfE","fF",14)
r(M.cL.prototype,"gX",0,0,null,["$1","$0"],["T","aV"],0,0)
r(m=M.cQ.prototype,"gX",0,0,null,["$1","$0"],["T","aV"],0,0)
q(m,"geY","eZ",3)
q(m,"gf_","f0",3)
r(m=O.d5.prototype,"ga5",0,0,null,["$1","$0"],["A","aa"],0,0)
r(m,"gfQ",0,0,null,["$1","$0"],["cX","fR"],0,0)
q(m,"geS","eT",15)
q(m,"geU","eV",15)
r(O.c1.prototype,"ga5",0,0,null,["$1","$0"],["A","aa"],0,0)
r(O.di.prototype,"ga5",0,0,null,["$1","$0"],["A","aa"],0,0)
r(m=O.dr.prototype,"ga5",0,0,null,["$1","$0"],["A","aa"],0,0)
q(m,"gf7","f8",16)
q(m,"gf9","fa",16)
r(O.bc.prototype,"ga5",0,0,null,["$1","$0"],["A","aa"],0,0)
r(m=T.cI.prototype,"gcH",0,0,null,["$1","$0"],["b8","eg"],0,0)
o(m,"geI","eJ",1)
o(m,"geK","eL",1)
o(m,"geM","eN",1)
o(m,"gh3","h4",1)
o(m,"gh1","h2",1)
o(m,"gh_","h0",1)
r(X.db.prototype,"gej",0,0,null,["$1","$0"],["Y","ek"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.jF,J.a,J.Z,P.dW,P.i,H.c0,P.fq,H.cR,H.ih,H.i6,P.bt,H.bQ,H.ed,P.aC,H.fw,H.fx,H.fs,H.hL,H.jS,P.ej,P.dF,P.dn,P.hJ,P.dt,P.j6,P.iV,P.iP,P.dV,P.q,P.eU,P.j4,P.av,P.ab,P.a9,P.b_,P.hb,P.dl,P.dN,P.fl,P.cT,P.m,P.S,P.aG,P.jH,P.n,P.bb,W.f_,W.cn,W.J,W.d9,W.e8,W.j_,W.cS,W.aE,W.iU,W.ep,P.eo,P.iQ,T.eE,T.cU,T.d4,T.hr,R.dm,R.du,R.dv,R.i1,O.am,O.c2,E.eN,E.az,E.hj,E.ds,Z.dE,Z.bD,Z.aX,Z.bu,Z.aR,D.eT,D.b0,D.R,X.cG,X.cZ,X.fu,X.fA,X.a6,X.h_,X.i2,X.dz,D.bs,D.a5,D.he,D.hE,V.I,V.N,V.fc,V.d6,V.ac,V.a_,V.a0,V.aJ,V.dd,V.C,V.A,U.dA,U.dB,U.dC,M.cL,M.cQ,M.ah,A.cD,A.eH,A.W,A.cN,A.dc,A.dk,A.fJ,A.ch,A.cj,A.ck,A.br,A.dx,A.ic,F.b1,F.c_,F.c7,F.hs,F.ht,F.hu,F.hv,F.bC,F.ir,F.is,F.iv,F.iw,O.dq,O.c1,O.fK,O.bc,T.cI,T.hX,T.hZ,X.hP,X.jv,X.fo,X.db,V.eP,V.hw])
s(J.a,[J.fr,J.cX,J.cY,J.b5,J.bZ,J.b6,H.c5,W.f,W.eD,W.cE,W.cH,W.an,W.F,W.dH,W.aa,W.f3,W.f4,W.dJ,W.cP,W.dL,W.f6,W.j,W.dO,W.aB,W.fn,W.dR,W.b2,W.fz,W.fU,W.dX,W.dY,W.aD,W.dZ,W.e1,W.aH,W.e5,W.e7,W.aL,W.e9,W.aM,W.ee,W.ar,W.eh,W.i0,W.aO,W.ek,W.i4,W.ij,W.eq,W.es,W.eu,W.ew,W.ey,P.b8,P.dT,P.ba,P.e3,P.hg,P.ef,P.bd,P.em,P.eI,P.dG,P.dg,P.eb])
s(J.cY,[J.hc,J.bB,J.b7])
t(J.jE,J.b5)
s(J.bZ,[J.cW,J.cV])
t(P.fy,P.dW)
s(P.fy,[H.dy,W.iG,W.a1,P.fh])
t(H.P,H.dy)
s(P.i,[H.f9,H.fD,H.cl])
s(H.f9,[H.d2,H.d0])
s(H.d2,[H.hM,H.fF])
s(P.fq,[H.fE,H.iA])
s(P.bt,[H.h8,H.ft,H.ig,H.eS,H.hp,P.da,P.ag,P.ii,P.ie,P.bz,P.eX,P.f2])
s(H.bQ,[H.jr,H.hQ,H.jh,H.ji,H.jj,P.iC,P.iB,P.iD,P.iE,P.j3,P.j2,P.jb,P.iS,P.iT,P.fC,P.f7,P.f8,W.fa,W.fW,W.fY,W.ho,W.hI,W.iK,W.h7,W.h6,W.iW,W.iX,W.j1,W.j5,P.jc,P.fi,P.fj,P.eK,E.hk,E.hl,E.hm,E.i_,D.fd,D.fe,F.j7,F.iy,F.ix,F.it,F.iu,O.fN,O.fO,O.fP,O.fQ,O.fR,O.fS,T.hY,V.eQ,V.jp,V.hy,V.hx,M.jl,M.jm,M.jn])
s(H.hQ,[H.hG,H.bO])
t(P.fB,P.aC)
s(P.fB,[H.M,W.iF])
t(H.d7,H.c5)
s(H.d7,[H.co,H.cq])
t(H.cp,H.co)
t(H.bw,H.cp)
t(H.cr,H.cq)
t(H.c4,H.cr)
s(H.c4,[H.h0,H.h1,H.h2,H.h3,H.h4,H.c6,H.h5])
t(P.iR,P.j6)
t(P.iO,P.iV)
t(P.eY,P.hJ)
t(P.fb,P.eU)
t(P.ik,P.fb)
t(P.il,P.eY)
s(P.a9,[P.K,P.y])
s(P.ag,[P.by,P.fp])
s(W.f,[W.D,W.fg,W.aK,W.cs,W.aN,W.as,W.cu,W.iz,W.cm,P.eL,P.bn])
s(W.D,[W.O,W.aY])
s(W.O,[W.l,P.k])
s(W.l,[W.eF,W.eG,W.bo,W.bp,W.bq,W.fk,W.bY,W.hq,W.dp,W.hN,W.hO,W.ce])
t(W.eZ,W.an)
t(W.bS,W.dH)
s(W.aa,[W.f0,W.f1])
t(W.dK,W.dJ)
t(W.cO,W.dK)
t(W.dM,W.dL)
t(W.f5,W.dM)
t(W.aA,W.cE)
t(W.dP,W.dO)
t(W.ff,W.dP)
t(W.dS,W.dR)
t(W.bX,W.dS)
t(W.be,W.j)
s(W.be,[W.bv,W.aq,W.bA])
t(W.fV,W.dX)
t(W.fX,W.dY)
t(W.e_,W.dZ)
t(W.fZ,W.e_)
t(W.e2,W.e1)
t(W.d8,W.e2)
t(W.e6,W.e5)
t(W.hd,W.e6)
t(W.hn,W.e7)
t(W.ct,W.cs)
t(W.hC,W.ct)
t(W.ea,W.e9)
t(W.hD,W.ea)
t(W.hH,W.ee)
t(W.ei,W.eh)
t(W.hR,W.ei)
t(W.cv,W.cu)
t(W.hS,W.cv)
t(W.el,W.ek)
t(W.i3,W.el)
t(W.bh,W.aq)
t(W.er,W.eq)
t(W.iH,W.er)
t(W.dI,W.cP)
t(W.et,W.es)
t(W.iL,W.et)
t(W.ev,W.eu)
t(W.e0,W.ev)
t(W.ex,W.ew)
t(W.iY,W.ex)
t(W.ez,W.ey)
t(W.iZ,W.ez)
t(W.iI,W.iF)
t(W.iJ,P.dn)
t(W.j0,W.e8)
t(P.a8,P.iQ)
t(P.dU,P.dT)
t(P.fv,P.dU)
t(P.e4,P.e3)
t(P.h9,P.e4)
t(P.cd,P.k)
t(P.eg,P.ef)
t(P.hK,P.eg)
t(P.en,P.em)
t(P.i5,P.en)
t(P.eJ,P.dG)
t(P.ha,P.bn)
t(P.ec,P.eb)
t(P.hF,P.ec)
s(T.cU,[T.aF,R.dw])
s(E.eN,[Z.cF,A.dh,T.cf])
s(D.R,[D.b3,D.b4,D.r,X.hf,T.cJ])
s(X.hf,[X.d3,X.ad,X.c3,X.cg])
s(O.am,[D.d_,U.bW,M.cK])
s(D.eT,[U.eW,U.a7])
s(U.a7,[U.bR,U.cc])
s(A.dh,[A.fG,A.hz,A.hB,A.hW])
s(A.dx,[A.bf,A.i9,A.ia,A.ib,A.i8,A.Q,A.aP,A.H,A.bg,A.id,A.ci,A.Y,A.aQ,A.V])
s(O.dq,[O.d5,O.di,O.hA,O.dr])
s(O.c1,[O.fH,O.fI,O.ao])
s(O.ao,[O.fL,O.fM])
s(T.cf,[T.hT,T.hV])
t(T.hU,T.hT)
s(X.hP,[X.eM,X.fm])
u(H.dy,H.ih)
u(H.co,P.q)
u(H.cp,H.cR)
u(H.cq,P.q)
u(H.cr,H.cR)
u(P.dW,P.q)
u(W.dH,W.f_)
u(W.dJ,P.q)
u(W.dK,W.J)
u(W.dL,P.q)
u(W.dM,W.J)
u(W.dO,P.q)
u(W.dP,W.J)
u(W.dR,P.q)
u(W.dS,W.J)
u(W.dX,P.aC)
u(W.dY,P.aC)
u(W.dZ,P.q)
u(W.e_,W.J)
u(W.e1,P.q)
u(W.e2,W.J)
u(W.e5,P.q)
u(W.e6,W.J)
u(W.e7,P.aC)
u(W.cs,P.q)
u(W.ct,W.J)
u(W.e9,P.q)
u(W.ea,W.J)
u(W.ee,P.aC)
u(W.eh,P.q)
u(W.ei,W.J)
u(W.cu,P.q)
u(W.cv,W.J)
u(W.ek,P.q)
u(W.el,W.J)
u(W.eq,P.q)
u(W.er,W.J)
u(W.es,P.q)
u(W.et,W.J)
u(W.eu,P.q)
u(W.ev,W.J)
u(W.ew,P.q)
u(W.ex,W.J)
u(W.ey,P.q)
u(W.ez,W.J)
u(P.dT,P.q)
u(P.dU,W.J)
u(P.e3,P.q)
u(P.e4,W.J)
u(P.ef,P.q)
u(P.eg,W.J)
u(P.em,P.q)
u(P.en,W.J)
u(P.dG,P.aC)
u(P.eb,P.q)
u(P.ec,W.J)})()
var v={mangledGlobalNames:{y:"int",K:"double",a9:"num",n:"String",av:"bool",aG:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.R]},{func:1,ret:-1,args:[D.R]},{func:1,ret:-1,args:[W.aq]},{func:1,ret:-1,args:[P.y,[P.i,E.az]]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aG,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bv]},{func:1,ret:-1,args:[P.y,[P.i,D.a5]]},{func:1,ret:P.K},{func:1,ret:-1,args:[P.y,[P.i,U.a7]]},{func:1,ret:-1,args:[P.y,[P.i,M.ah]]},{func:1,ret:-1,args:[P.y,[P.i,V.ac]]},{func:1,ret:-1,args:[P.y,[P.i,O.bc]]},{func:1,ret:P.av,args:[W.O,P.n,P.n,W.cn]},{func:1,ret:P.aG,args:[,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.av,args:[[P.i,D.a5]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.o=W.bo.prototype
C.A=W.bp.prototype
C.f=W.bq.prototype
C.t=W.cH.prototype
C.M=J.a.prototype
C.a=J.b5.prototype
C.j=J.cV.prototype
C.c=J.cW.prototype
C.k=J.cX.prototype
C.b=J.bZ.prototype
C.d=J.b6.prototype
C.N=J.b7.prototype
C.S=H.c6.prototype
C.v=J.hc.prototype
C.w=P.dg.prototype
C.x=W.dp.prototype
C.n=J.bB.prototype
C.y=W.bh.prototype
C.z=W.cm.prototype
C.p=function getTagFallback(o) {
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
C.q=function(hooks) { return hooks; }

C.H=new P.hb()
C.r=new P.ik()
C.I=new P.il()
C.e=new P.iR()
C.u=new A.br(0,"ColorBlendType.Overwrite")
C.J=new A.br(1,"ColorBlendType.Additive")
C.K=new A.br(2,"ColorBlendType.Average")
C.h=new A.br(3,"ColorBlendType.AlphaBlend")
C.i=new P.b_(0)
C.L=new P.b_(5e6)
C.O=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.P=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.n])
C.Q=H.b(u([]),[P.n])
C.R=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.l=H.b(u(["bind","if","ref","repeat","syntax"]),[P.n])
C.m=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])})();(function staticFields(){$.al=0
$.bP=null
$.k6=null
$.kU=null
$.kO=null
$.kX=null
$.jd=null
$.jk=null
$.jY=null
$.bF=null
$.cx=null
$.cy=null
$.jT=!1
$.ai=C.e
$.a3=[]
$.ay=null
$.jz=null
$.kd=null
$.kc=null
$.dQ=P.ki(P.n,P.cT)
$.fT=null
$.ku=null
$.c8=null
$.cb=null
$.kF=null
$.kH=null
$.im=null
$.io=null
$.ip=null
$.kG=null
$.kt=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nq","l1",function(){return H.kT("_$dart_dartClosure")})
u($,"nr","k0",function(){return H.kT("_$dart_js")})
u($,"ns","l2",function(){return H.at(H.i7({
toString:function(){return"$receiver$"}}))})
u($,"nt","l3",function(){return H.at(H.i7({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nu","l4",function(){return H.at(H.i7(null))})
u($,"nv","l5",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ny","l8",function(){return H.at(H.i7(void 0))})
u($,"nz","l9",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nx","l7",function(){return H.at(H.kE(null))})
u($,"nw","l6",function(){return H.at(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nB","lb",function(){return H.at(H.kE(void 0))})
u($,"nA","la",function(){return H.at(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nO","k1",function(){return P.ma()})
u($,"nQ","lg",function(){return P.lX("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nP","lf",function(){return P.kj(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)})
u($,"nI","le",function(){return Z.af(0)})
u($,"nC","lc",function(){return Z.af(511)})
u($,"nK","a2",function(){return Z.af(1)})
u($,"nJ","aV",function(){return Z.af(2)})
u($,"nE","aU",function(){return Z.af(4)})
u($,"nL","bk",function(){return Z.af(8)})
u($,"nM","aW",function(){return Z.af(16)})
u($,"nF","cA",function(){return Z.af(32)})
u($,"nG","cB",function(){return Z.af(64)})
u($,"nH","ld",function(){return Z.af(96)})
u($,"nN","bN",function(){return Z.af(128)})
u($,"nD","aT",function(){return Z.af(256)})
u($,"np","l0",function(){return new V.fc(1e-9)})
u($,"no","v",function(){return $.l0()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c5,ArrayBufferView:H.c5,Float32Array:H.bw,Float64Array:H.bw,Int16Array:H.h0,Int32Array:H.h1,Int8Array:H.h2,Uint16Array:H.h3,Uint32Array:H.h4,Uint8ClampedArray:H.c6,CanvasPixelArray:H.c6,Uint8Array:H.h5,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.eD,HTMLAnchorElement:W.eF,HTMLAreaElement:W.eG,Blob:W.cE,HTMLBodyElement:W.bo,HTMLButtonElement:W.bp,HTMLCanvasElement:W.bq,CanvasRenderingContext2D:W.cH,CDATASection:W.aY,CharacterData:W.aY,Comment:W.aY,ProcessingInstruction:W.aY,Text:W.aY,CSSPerspective:W.eZ,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bS,MSStyleCSSProperties:W.bS,CSS2Properties:W.bS,CSSImageValue:W.aa,CSSKeywordValue:W.aa,CSSNumericValue:W.aa,CSSPositionValue:W.aa,CSSResourceValue:W.aa,CSSUnitValue:W.aa,CSSURLImageValue:W.aa,CSSStyleValue:W.aa,CSSMatrixComponent:W.an,CSSRotation:W.an,CSSScale:W.an,CSSSkew:W.an,CSSTranslation:W.an,CSSTransformComponent:W.an,CSSTransformValue:W.f0,CSSUnparsedValue:W.f1,DataTransferItemList:W.f3,DOMException:W.f4,ClientRectList:W.cO,DOMRectList:W.cO,DOMRectReadOnly:W.cP,DOMStringList:W.f5,DOMTokenList:W.f6,Element:W.O,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aA,FileList:W.ff,FileWriter:W.fg,HTMLFormElement:W.fk,Gamepad:W.aB,History:W.fn,HTMLCollection:W.bX,HTMLFormControlsCollection:W.bX,HTMLOptionsCollection:W.bX,ImageData:W.b2,HTMLImageElement:W.bY,KeyboardEvent:W.bv,Location:W.fz,MediaList:W.fU,MIDIInputMap:W.fV,MIDIOutputMap:W.fX,MimeType:W.aD,MimeTypeArray:W.fZ,PointerEvent:W.aq,MouseEvent:W.aq,DragEvent:W.aq,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.d8,RadioNodeList:W.d8,Plugin:W.aH,PluginArray:W.hd,RTCStatsReport:W.hn,HTMLSelectElement:W.hq,SourceBuffer:W.aK,SourceBufferList:W.hC,SpeechGrammar:W.aL,SpeechGrammarList:W.hD,SpeechRecognitionResult:W.aM,Storage:W.hH,CSSStyleSheet:W.ar,StyleSheet:W.ar,HTMLTableElement:W.dp,HTMLTableRowElement:W.hN,HTMLTableSectionElement:W.hO,HTMLTemplateElement:W.ce,TextTrack:W.aN,TextTrackCue:W.as,VTTCue:W.as,TextTrackCueList:W.hR,TextTrackList:W.hS,TimeRanges:W.i0,Touch:W.aO,TouchEvent:W.bA,TouchList:W.i3,TrackDefaultList:W.i4,CompositionEvent:W.be,FocusEvent:W.be,TextEvent:W.be,UIEvent:W.be,URL:W.ij,VideoTrackList:W.iz,WheelEvent:W.bh,Window:W.cm,DOMWindow:W.cm,CSSRuleList:W.iH,ClientRect:W.dI,DOMRect:W.dI,GamepadList:W.iL,NamedNodeMap:W.e0,MozNamedAttrMap:W.e0,SpeechRecognitionResultList:W.iY,StyleSheetList:W.iZ,SVGLength:P.b8,SVGLengthList:P.fv,SVGNumber:P.ba,SVGNumberList:P.h9,SVGPointList:P.hg,SVGScriptElement:P.cd,SVGStringList:P.hK,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.bd,SVGTransformList:P.i5,AudioBuffer:P.eI,AudioParamMap:P.eJ,AudioTrackList:P.eL,AudioContext:P.bn,webkitAudioContext:P.bn,BaseAudioContext:P.bn,OfflineAudioContext:P.ha,WebGL2RenderingContext:P.dg,SQLResultSetRowList:P.hF})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
W.cs.$nativeSuperclassTag="EventTarget"
W.ct.$nativeSuperclassTag="EventTarget"
W.cu.$nativeSuperclassTag="EventTarget"
W.cv.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.kV,[])
else M.kV([])})})()
//# sourceMappingURL=test.dart.js.map
