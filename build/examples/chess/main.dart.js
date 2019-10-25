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
a[c]=function(){a[c]=function(){H.oA(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l5(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kG:function kG(){},
mT:function(){return new P.dB("No element")},
dx:function(a,b,c,d){if(c-b<=32)H.nm(a,b,c,d)
else H.nl(a,b,c,d)},
nm:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.ae()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.t(a,s,a[q])
s=q}C.a.t(a,s,t)}},
nl:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a9(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a9(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.ae()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.ae()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.ae()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.ae()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.ae()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.ae()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.ae()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.ae()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.ae()
if(a1>0){p=q
q=r
r=p}C.a.t(a2,d,u)
C.a.t(a2,b,s)
C.a.t(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.t(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.t(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.B(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.Z()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.t(a2,m,a2[o])
C.a.t(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ae()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.t(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.t(a2,o,a2[n])
C.a.t(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.t(a2,m,a2[n])
C.a.t(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.Z()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.t(a2,m,a2[o])
C.a.t(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.ae()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.ae()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.Z()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.t(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.t(a2,o,a2[n])
C.a.t(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.t(a2,m,a2[n])
C.a.t(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.t(a2,a3,a2[a1])
C.a.t(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.t(a2,a4,a2[a1])
C.a.t(a2,a1,r)
H.dx(a2,a3,o-2,a5)
H.dx(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.B(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.B(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.t(a2,m,a2[o])
C.a.t(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.Z()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.t(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.t(a2,o,a2[n])
C.a.t(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.t(a2,m,a2[n])
C.a.t(a2,n,l)}n=j
break}}}H.dx(a2,o,n,a5)}else H.dx(a2,o,n,a5)},
U:function U(a){this.a=a},
fr:function fr(){},
df:function df(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
h4:function h4(a,b,c){this.a=a
this.b=b
this.$ti=c},
h5:function h5(a,b){this.a=null
this.b=a
this.c=b},
jd:function jd(a,b,c){this.a=a
this.b=b
this.$ti=c},
je:function je(a,b){this.a=a
this.b=b},
d5:function d5(){},
iW:function iW(){},
dN:function dN(){},
eQ:function(a){var u,t=H.oB(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oj:function(a){return v.types[a]},
oo:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$ix},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ak(a)
if(typeof u!=="string")throw H.h(H.av(a))
return u},
cs:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nf:function(a,b){var u,t
if(typeof a!=="string")H.r(H.av(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.c(u,3)
t=u[3]
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
ne:function(a){var u,t
if(typeof a!=="string")H.r(H.av(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.kq(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
ct:function(a){return H.n6(a)+H.m0(H.c4(a),0,null)},
n6:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.E||!!n.$ibX){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eQ(t.length>1&&C.b.aX(t,0)===36?C.b.aU(t,1):t)},
lG:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nh:function(a){var u,t,s,r=H.b([],[P.A])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.av(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.bw(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.h(H.av(s))}return H.lG(r)},
lH:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.av(s))
if(s<0)throw H.h(H.av(s))
if(s>65535)return H.nh(a)}return H.lG(a)},
ng:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bw(u,10))>>>0,56320|u&1023)}throw H.h(P.aN(a,0,1114111,null,null))},
bS:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nd:function(a){var u=H.bS(a).getFullYear()+0
return u},
nb:function(a){var u=H.bS(a).getMonth()+1
return u},
n7:function(a){var u=H.bS(a).getDate()+0
return u},
n8:function(a){var u=H.bS(a).getHours()+0
return u},
na:function(a){var u=H.bS(a).getMinutes()+0
return u},
nc:function(a){var u=H.bS(a).getSeconds()+0
return u},
n9:function(a){var u=H.bS(a).getMilliseconds()+0
return u},
d:function(a){throw H.h(H.av(a))},
c:function(a,b){if(a==null)J.aH(a)
throw H.h(H.c2(a,b))},
c2:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ax(!0,b,s,null)
u=J.aH(a)
if(!(b<0)){if(typeof u!=="number")return H.d(u)
t=b>=u}else t=!0
if(t)return P.J(b,a,s,null,u)
return P.hN(b,s)},
ob:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bT(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bT(a,c,!0,b,"end",u)
return new P.ax(!0,b,"end",null)},
av:function(a){return new P.ax(!0,a,null,null)},
o7:function(a){if(typeof a!=="number")throw H.h(H.av(a))
return a},
h:function(a){var u
if(a==null)a=new P.cq()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mk})
u.name=""}else u.toString=H.mk
return u},
mk:function(){return J.ak(this.dartException)},
r:function(a){throw H.h(a)},
q:function(a){throw H.h(P.cd(a))},
aO:function(a){var u,t,s,r,q,p
a=H.mi(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.v])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lS:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lB:function(a,b){return new H.hx(a,b==null?null:b.method)},
kH:function(a,b){var u=b==null,t=u?null:b.method
return new H.fO(a,t,u?null:b.receiver)},
a6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.km(a)
if(a==null)return
if(a instanceof H.cg)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bw(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kH(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lB(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mn()
q=$.mo()
p=$.mp()
o=$.mq()
n=$.mt()
m=$.mu()
l=$.ms()
$.mr()
k=$.mw()
j=$.mv()
i=r.aq(u)
if(i!=null)return f.$1(H.kH(u,i))
else{i=q.aq(u)
if(i!=null){i.method="call"
return f.$1(H.kH(u,i))}else{i=p.aq(u)
if(i==null){i=o.aq(u)
if(i==null){i=n.aq(u)
if(i==null){i=m.aq(u)
if(i==null){i=l.aq(u)
if(i==null){i=o.aq(u)
if(i==null){i=k.aq(u)
if(i==null){i=j.aq(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lB(u,i))}}return f.$1(new H.iV(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dz()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ax(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dz()
return a},
bz:function(a){var u
if(a instanceof H.cg)return a.b
if(a==null)return new H.er(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.er(a)},
og:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.t(0,a[u],a[t])}return b},
on:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.l("Unsupported number of arguments for wrapped closure"))},
c1:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.on)
a.$identity=u
return u},
mM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ik().constructor.prototype):Object.create(new H.ca(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aI
if(typeof t!=="number")return t.D()
$.aI=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ll(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mI(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ll(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mI:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oj,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lk:H.kt
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
mJ:function(a,b,c,d){var u=H.kt
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ll:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mL(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mJ(t,!r,u,b)
if(t===0){r=$.aI
if(typeof r!=="number")return r.D()
$.aI=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cb
return new Function(r+H.e(q==null?$.cb=H.f5("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aI
if(typeof r!=="number")return r.D()
$.aI=r+1
o+=r
r="return function("+o+"){return this."
q=$.cb
return new Function(r+H.e(q==null?$.cb=H.f5("self"):q)+"."+H.e(u)+"("+o+");}")()},
mK:function(a,b,c,d){var u=H.kt,t=H.lk
switch(b?-1:a){case 0:throw H.h(H.nj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mL:function(a,b){var u,t,s,r,q,p,o,n=$.cb
if(n==null)n=$.cb=H.f5("self")
u=$.lj
if(u==null)u=$.lj=H.f5("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mK(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.aI
if(typeof u!=="number")return u.D()
$.aI=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.aI
if(typeof u!=="number")return u.D()
$.aI=u+1
return new Function(n+u+"}")()},
l5:function(a,b,c,d,e,f,g){return H.mM(a,b,c,d,!!e,!!f,g)},
kt:function(a){return a.a},
lk:function(a){return a.c},
f5:function(a){var u,t,s,r=new H.ca("self","target","receiver","name"),q=J.kD(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ot:function(a,b){throw H.h(H.mH(a,H.eQ(b.substring(2))))},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.ot(a,b)},
ma:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
l6:function(a,b){var u
if(typeof a=="function")return!0
u=H.ma(J.S(a))
if(u==null)return!1
return H.m_(u,null,b,null)},
mH:function(a,b){return new H.f6("CastError: "+P.kz(a)+": type '"+H.e(H.o3(a))+"' is not a subtype of type '"+b+"'")},
o3:function(a){var u,t=J.S(a)
if(!!t.$icc){u=H.ma(t)
if(u!=null)return H.ou(u)
return"Closure"}return H.ct(a)},
oA:function(a){throw H.h(new P.fg(a))},
nj:function(a){return new H.hY(a)},
mc:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
c4:function(a){if(a==null)return
return a.$ti},
pn:function(a,b,c){return H.c5(a["$a"+H.e(c)],H.c4(b))},
oi:function(a,b,c,d){var u=H.c5(a["$a"+H.e(c)],H.c4(b))
return u==null?null:u[d]},
ka:function(a,b,c){var u=H.c5(a["$a"+H.e(b)],H.c4(a))
return u==null?null:u[c]},
b2:function(a,b){var u=H.c4(a)
return u==null?null:u[b]},
ou:function(a){return H.bx(a,null)},
bx:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eQ(a[0].name)+H.m0(a,1,b)
if(typeof a=="function")return H.eQ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.nD(a,b)
if('futureOr' in a)return"FutureOr<"+H.bx("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nD:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.v])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.D(p,a0[m])
l=u[q]
if(l!=null&&l!==P.O)p+=" extends "+H.bx(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bx(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bx(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bx(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.of(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bx(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m0:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bq("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bx(p,c)}return"<"+u.h(0)+">"},
c5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
eO:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.c4(a)
t=J.S(a)
if(t[b]==null)return!1
return H.m8(H.c5(t[d],u),null,c,null)},
m8:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
pl:function(a,b,c){return a.apply(b,H.c5(J.S(b)["$a"+H.e(c)],H.c4(b)))},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="a8")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aE("type" in a?a.type:l,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"az" in t.prototype))return!1
r=t.prototype["$a"+"az"]
q=H.c5(r,u?a.slice(1):l)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.m_(a,b,c,d)
if('func' in a)return c.name==="oG"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.m8(H.c5(m,u),b,p,d)},
m_:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.or(h,b,g,d)},
or:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aE(c[s],d,a[s],b))return!1}return!0},
pm:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
op:function(a){var u,t,s,r,q=$.me.$1(a),p=$.k7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ke[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m7.$2(a,q)
if(q!=null){p=$.k7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ke[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kg(u)
$.k7[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ke[q]=u
return u}if(s==="-"){r=H.kg(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mg(a,u)
if(s==="*")throw H.h(P.lT(q))
if(v.leafTags[q]===true){r=H.kg(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mg(a,u)},
mg:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lb(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kg:function(a){return J.lb(a,!1,null,!!a.$ix)},
oq:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kg(u)
else return J.lb(u,c,null,null)},
ol:function(){if(!0===$.l9)return
$.l9=!0
H.om()},
om:function(){var u,t,s,r,q,p,o,n
$.k7=Object.create(null)
$.ke=Object.create(null)
H.ok()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mh.$1(q)
if(p!=null){o=H.oq(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ok:function(){var u,t,s,r,q,p,o=C.u()
o=H.c0(C.v,H.c0(C.w,H.c0(C.o,H.c0(C.o,H.c0(C.x,H.c0(C.y,H.c0(C.z(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.me=new H.kb(r)
$.m7=new H.kc(q)
$.mh=new H.kd(p)},
c0:function(a,b){return a(b)||b},
lu:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(P.kA("Illegal RegExp pattern ("+String(p)+")",a))},
oy:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oe:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mi:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mj:function(a,b,c){var u=H.oz(a,b,c)
return u},
oz:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mi(b),'g'),H.oe(c))},
iL:function iL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hx:function hx(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a){this.a=a},
cg:function cg(a,b){this.a=a
this.b=b},
km:function km(a){this.a=a},
er:function er(a){this.a=a
this.b=null},
cc:function cc(){},
is:function is(){},
ik:function ik(){},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a){this.a=a},
hY:function hY(a){this.a=a},
M:function M(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fN:function fN(a){this.a=a},
fY:function fY(a,b){this.a=a
this.b=b
this.c=null},
de:function de(a,b){this.a=a
this.$ti=b},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ea:function ea(a){this.b=a},
jf:function jf(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cK:function(a){return a},
bw:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.c2(b,a))},
nC:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.ob(a,b,c))
return b},
cp:function cp(){},
dl:function dl(){},
co:function co(){},
dm:function dm(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
dn:function dn(){},
hw:function hw(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
of:function(a){return J.ls(a?Object.keys(a):[],null)},
oB:function(a){return v.mangledGlobalNames[a]},
os:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lb:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k9:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l9==null){H.ol()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.lT("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lc()]
if(r!=null)return r
r=H.op(a)
if(r!=null)return r
if(typeof a=="function")return C.F
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.lc(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
mU:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.kr(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aN(a,0,4294967295,"length",null))
return J.ls(new Array(a),b)},
ls:function(a,b){return J.kD(H.b(a,[b]))},
kD:function(a){a.fixed$length=Array
return a},
lt:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mV:function(a,b){var u,t
for(u=a.length;b<u;){t=C.b.aX(a,b)
if(t!==32&&t!==13&&!J.lt(t))break;++b}return b},
kE:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.b.aG(a,u)
if(t!==32&&t!==13&&!J.lt(t))break}return b},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d9.prototype
return J.d8.prototype}if(typeof a=="string")return J.bh.prototype
if(a==null)return J.da.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.O)return a
return J.k9(a)},
l7:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.O)return a
return J.k9(a)},
l8:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.O)return a
return J.k9(a)},
oh:function(a){if(typeof a=="number")return J.cl.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bX.prototype
return a},
k8:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bX.prototype
return a},
mb:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.O)return a
return J.k9(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).m(a,b)},
D:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oo(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.l7(a).i(a,b)},
mB:function(a,b,c,d){return J.mb(a).i1(a,b,c,d)},
kp:function(a,b){return J.oh(a).bB(a,b)},
lf:function(a,b){return J.l8(a).H(a,b)},
lg:function(a,b){return J.l8(a).M(a,b)},
mC:function(a){return J.mb(a).gcg(a)},
bD:function(a){return J.S(a).gJ(a)},
c9:function(a){return J.l8(a).gU(a)},
aH:function(a){return J.l7(a).gl(a)},
lh:function(a,b){return J.k8(a).iA(a,b)},
li:function(a,b,c){return J.k8(a).bl(a,b,c)},
ak:function(a){return J.S(a).h(a)},
kq:function(a){return J.k8(a).er(a)},
a:function a(){},
fL:function fL(){},
da:function da(){},
db:function db(){},
hE:function hE(){},
bX:function bX(){},
bi:function bi(){},
aR:function aR(a){this.$ti=a},
kF:function kF(a){this.$ti=a},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
cl:function cl(){},
d9:function d9(){},
d8:function d8(){},
bh:function bh(){}},P={
nt:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.o4()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c1(new P.jj(s),1)).observe(u,{childList:true})
return new P.ji(s,u,t)}else if(self.setImmediate!=null)return P.o5()
return P.o6()},
nu:function(a){self.scheduleImmediate(H.c1(new P.jk(a),0))},
nv:function(a){self.setImmediate(H.c1(new P.jl(a),0))},
nw:function(a){P.kZ(C.h,a)},
kZ:function(a,b){var u=C.d.a9(a.a,1000)
return P.nz(u<0?0:u,b)},
lR:function(a,b){var u=C.d.a9(a.a,1000)
return P.nA(u<0?0:u,b)},
nz:function(a,b){var u=new P.ex()
u.f6(a,b)
return u},
nA:function(a,b){var u=new P.ex()
u.f7(a,b)
return u},
ag:function(a){return new P.jg(new P.ac($.E,[a]),[a])},
af:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
a3:function(a,b){P.nB(a,b)},
ae:function(a,b){b.ci(0,a)},
ad:function(a,b){b.bC(H.a6(a),H.bz(a))},
nB:function(a,b){var u,t=null,s=new P.jW(b),r=new P.jX(b),q=J.S(a)
if(!!q.$iac)a.dz(s,r,t)
else if(!!q.$iaz)a.cK(s,r,t)
else{u=new P.ac($.E,[null])
u.a=4
u.c=a
u.dz(s,t,t)}},
ai:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.E.ek(new P.k4(u))},
lX:function(a,b){var u,t,s
b.a=1
try{a.cK(new P.jv(b),new P.jw(b),null)}catch(s){u=H.a6(s)
t=H.bz(s)
P.ov(new P.jx(b,u,t))}},
ju:function(a,b){var u,t
for(;u=a.a,u===2;)a=a.c
if(u>=4){t=b.bu()
b.a=a.a
b.c=a.c
P.bY(b,t)}else{t=b.c
b.a=2
b.c=a
a.dr(t)}},
bY:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null,i={},h=i.a=a
for(;!0;){u={}
t=h.a===8
if(b==null){if(t){s=h.c
P.k1(j,j,h.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.bY(i.a,b)}h=i.a
q=h.c
u.a=t
u.b=q
s=!t
if(s){p=b.c
p=(p&1)!==0||(p&15)===8}else p=!0
if(p){p=b.b
o=p.b
if(t){n=h.b===o
n=!(n||n)}else n=!1
if(n){P.k1(j,j,h.b,q.a,q.b)
return}m=$.E
if(m!==o)$.E=o
else m=j
h=b.c
if((h&15)===8)new P.jC(i,u,b,t).$0()
else if(s){if((h&1)!==0)new P.jB(u,b,q).$0()}else if((h&2)!==0)new P.jA(i,u,b).$0()
if(m!=null)$.E=m
h=u.b
if(!!J.S(h).$iaz){if(h.a>=4){l=p.c
p.c=null
b=p.bv(l)
p.a=h.a
p.c=h.c
i.a=h
continue}else P.ju(h,p)
return}}k=b.b
l=k.c
k.c=null
b=k.bv(l)
h=u.a
s=u.b
if(!h){k.a=4
k.c=s}else{k.a=8
k.c=s}i.a=k
h=k}},
o_:function(a,b){if(H.l6(a,{func:1,args:[P.O,P.at]}))return b.ek(a)
if(H.l6(a,{func:1,args:[P.O]}))return a
throw H.h(P.kr(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nZ:function(){var u,t
for(;u=$.bZ,u!=null;){$.cM=null
t=u.b
$.bZ=t
if(t==null)$.cL=null
u.a.$0()}},
o2:function(){$.l3=!0
try{P.nZ()}finally{$.cM=null
$.l3=!1
if($.bZ!=null)$.le().$1(P.m9())}},
m3:function(a){var u=new P.dS(a)
if($.bZ==null){$.bZ=$.cL=u
if(!$.l3)$.le().$1(P.m9())}else $.cL=$.cL.b=u},
o1:function(a){var u,t,s=$.bZ
if(s==null){P.m3(a)
$.cM=$.cL
return}u=new P.dS(a)
t=$.cM
if(t==null){u.b=s
$.bZ=$.cM=u}else{u.b=t.b
$.cM=t.b=u
if(u.b==null)$.cL=u}},
ov:function(a){var u=null,t=$.E
if(C.e===t){P.c_(u,u,C.e,a)
return}P.c_(u,u,t,t.cb(a))},
oI:function(a){if(a==null)H.r(P.mF("stream"))
return new P.jQ()},
kY:function(a,b){var u=$.E
if(u===C.e)return P.kZ(a,b)
return P.kZ(a,u.cb(b))},
nq:function(a,b){var u=$.E
if(u===C.e)return P.lR(a,b)
return P.lR(a,u.dG(b,P.dH))},
k1:function(a,b,c,d,e){var u={}
u.a=d
P.o1(new P.k2(u,e))},
m1:function(a,b,c,d){var u,t=$.E
if(t===c)return d.$0()
$.E=c
u=t
try{t=d.$0()
return t}finally{$.E=u}},
m2:function(a,b,c,d,e){var u,t=$.E
if(t===c)return d.$1(e)
$.E=c
u=t
try{t=d.$1(e)
return t}finally{$.E=u}},
o0:function(a,b,c,d,e,f){var u,t=$.E
if(t===c)return d.$2(e,f)
$.E=c
u=t
try{t=d.$2(e,f)
return t}finally{$.E=u}},
c_:function(a,b,c,d){var u=C.e!==c
if(u)d=!(!u||!1)?c.cb(d):c.i9(d)
P.m3(d)},
jj:function jj(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
ex:function ex(){this.c=0},
jT:function jT(a,b){this.a=a
this.b=b},
jS:function jS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jg:function jg(a,b){this.a=a
this.b=!1
this.$ti=b},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
k4:function k4(a){this.a=a},
dU:function dU(){},
jh:function jh(a,b){this.a=a
this.$ti=b},
e3:function e3(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
ac:function ac(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jr:function jr(a,b){this.a=a
this.b=b},
jz:function jz(a,b){this.a=a
this.b=b},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jD:function jD(a){this.a=a},
jB:function jB(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a){this.a=a
this.b=null},
dC:function dC(){},
io:function io(){},
jQ:function jQ(){},
dH:function dH(){},
bE:function bE(a,b){this.a=a
this.b=b},
jV:function jV(){},
k2:function k2(a,b){this.a=a
this.b=b},
jK:function jK(){},
jM:function jM(a,b){this.a=a
this.b=b},
jL:function jL(a,b){this.a=a
this.b=b},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
mX:function(a,b){return new H.M([a,b])},
mY:function(a){return H.og(a,new H.M([null,null]))},
mZ:function(a){return new P.jH([a])},
l2:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ny:function(a,b){var u=new P.e8(a,b)
u.c=a.e
return u},
mS:function(a,b,c){var u,t
if(P.l4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.v])
$.ah.push(a)
try{P.nE(a,u)}finally{if(0>=$.ah.length)return H.c($.ah,-1)
$.ah.pop()}t=P.lP(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kC:function(a,b,c){var u,t
if(P.l4(a))return b+"..."+c
u=new P.bq(b)
$.ah.push(a)
try{t=u
t.a=P.lP(t.a,a,", ")}finally{if(0>=$.ah.length)return H.c($.ah,-1)
$.ah.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l4:function(a){var u,t
for(u=$.ah.length,t=0;t<u;++t)if(a===$.ah[t])return!0
return!1},
nE:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.e(n.gL(n))
b.push(u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gL(n);++l
if(!n.A()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gL(n);++l
for(;n.A();r=q,q=p){p=n.gL(n);++l
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
ly:function(a){var u,t={}
if(P.l4(a))return"{...}"
u=new P.bq("")
try{$.ah.push(a)
u.a+="{"
t.a=!0
J.lg(a,new P.h3(t,u))
u.a+="}"}finally{if(0>=$.ah.length)return H.c($.ah,-1)
$.ah.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jH:function jH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jI:function jI(a){this.a=a
this.c=this.b=null},
e8:function e8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
h_:function h_(){},
u:function u(){},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
aS:function aS(){},
jO:function jO(){},
e9:function e9(){},
f8:function f8(){},
fb:function fb(){},
fs:function fs(){},
iZ:function iZ(){},
j_:function j_(){},
jU:function jU(a){this.b=0
this.c=a},
la:function(a){var u=H.nf(a,null)
if(u!=null)return u
throw H.h(P.kA(a,null))},
od:function(a){var u=H.ne(a)
if(u!=null)return u
throw H.h(P.kA("Invalid double",a))},
mQ:function(a){if(a instanceof H.cc)return a.h(0)
return"Instance of '"+H.e(H.ct(a))+"'"},
n_:function(a,b,c){var u,t,s=J.mU(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
lw:function(a,b,c){var u,t=H.b([],[c])
for(u=J.c9(a);u.A();)t.push(u.gL(u))
if(b)return t
return J.kD(t)},
kV:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.lK(0,null,u)
return H.lH(t<u?C.a.eB(a,0,t):a)}return P.nn(a,0,null)},
nn:function(a,b,c){var u,t,s=J.c9(a)
for(u=0;u<b;++u)if(!s.A())throw H.h(P.aN(b,0,u,null,null))
t=[]
for(;s.A();)t.push(s.gL(s))
return H.lH(t)},
kR:function(a){return new H.fM(a,H.lu(a,!1,!0,!1,!1,!1))},
lP:function(a,b,c){var u=J.c9(b)
if(!u.A())return a
if(c.length===0){do a+=H.e(u.gL(u))
while(u.A())}else{a+=H.e(u.gL(u))
for(;u.A();)a=a+c+H.e(u.gL(u))}return a},
lZ:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.i){u=$.mA().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.ii(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ng(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mO:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d0:function(a){if(a>=10)return""+a
return"0"+a},
lo:function(a){return new P.ba(1000*a)},
kz:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ak(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mQ(a)},
mE:function(a){return new P.ax(!1,null,null,a)},
kr:function(a,b,c){return new P.ax(!0,a,b,c)},
mF:function(a){return new P.ax(!1,null,a,"Must not be null")},
hN:function(a,b){return new P.bT(null,null,!0,a,b,"Value not in range")},
aN:function(a,b,c,d,e){return new P.bT(b,c,!0,a,d,"Invalid value")},
lK:function(a,b,c){if(0>a||a>c)throw H.h(P.aN(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.aN(b,a,c,"end",null))
return b}return c},
lJ:function(a,b){if(typeof a!=="number")return a.Z()
if(a<0)throw H.h(P.aN(a,0,null,b,null))},
J:function(a,b,c,d,e){var u=e==null?J.aH(b):e
return new P.fJ(u,!0,a,c,"Index out of range")},
ab:function(a){return new P.iX(a)},
lT:function(a){return new P.iU(a)},
lO:function(a){return new P.dB(a)},
cd:function(a){return new P.fa(a)},
l:function(a){return new P.e0(a)},
kA:function(a,b){return new P.fC(a,b)},
n0:function(a,b,c,d){var u,t,s=new Array(a)
s.fixed$length=Array
u=H.b(s,[d])
for(t=0;t<a;++t){s=b.$1(t)
if(t>=u.length)return H.c(u,t)
u[t]=s}return u},
eP:function(a){H.os(a)},
by:function by(){},
aq:function aq(a,b){this.a=a
this.b=b},
K:function K(){},
ba:function ba(a){this.a=a},
fl:function fl(){},
fm:function fm(){},
bb:function bb(){},
cq:function cq(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fJ:function fJ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iX:function iX(a){this.a=a},
iU:function iU(a){this.a=a},
dB:function dB(a){this.a=a},
fa:function fa(a){this.a=a},
hA:function hA(){},
dz:function dz(){},
fg:function fg(a){this.a=a},
e0:function e0(a){this.a=a},
fC:function fC(a,b){this.a=a
this.b=b},
A:function A(){},
m:function m(){},
fK:function fK(){},
bP:function bP(){},
Y:function Y(){},
a8:function a8(){},
aw:function aw(){},
O:function O(){},
kQ:function kQ(){},
at:function at(){},
v:function v(){},
bq:function bq(a){this.a=a},
oa:function(a){var u,t=J.S(a)
if(!!t.$ibe){u=t.gdP(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eC(a.data,a.height,a.width)},
o9:function(a){if(a instanceof P.eC)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var u,t,s,r,q
if(a==null)return
u=P.mX(P.v,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.t(0,q,a[q])}return u},
o8:function(a){var u={}
a.M(0,new P.k5(u))
return u},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(a){this.a=a},
fy:function fy(a,b){this.a=a
this.b=b},
fz:function fz(){},
fA:function fA(){},
jG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jJ:function jJ(){},
as:function as(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bN:function bN(){},
fX:function fX(){},
bQ:function bQ(){},
hy:function hy(){},
hI:function hI(){},
iq:function iq(){},
n:function n(){},
bV:function bV(){},
iK:function iK(){},
e6:function e6(){},
e7:function e7(){},
ei:function ei(){},
ej:function ej(){},
et:function et(){},
eu:function eu(){},
eA:function eA(){},
eB:function eB(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(a){this.a=a},
eZ:function eZ(){},
bF:function bF(){},
hz:function hz(){},
dT:function dT(){},
du:function du(){},
id:function id(){},
ep:function ep(){},
eq:function eq(){}},W={
mD:function(){var u=document.createElement("a")
return u},
kv:function(){var u=document.createElement("canvas")
return u},
ky:function(a){return"wheel"},
lq:function(a){return W.mR(a,null,null).as(new W.fG(),P.v)},
mR:function(a,b,c){var u=W.bK,t=new P.ac($.E,[u]),s=new P.jh(t,[u]),r=new XMLHttpRequest()
C.D.iR(r,"GET",a,!0)
W.R(r,"load",new W.fH(r,s),!1)
W.R(r,"error",s.gig(),!1)
r.send()
return t},
lr:function(a){var u=document.createElement("img")
u.src=a
return u},
jF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lY:function(a,b,c,d){var u=W.jF(W.jF(W.jF(W.jF(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
R:function(a,b,c,d){var u=W.m6(new W.jq(c),W.k)
if(u!=null&&!0)J.mB(a,b,u,!1)
return new W.jp(a,b,u,!1)},
m6:function(a,b){var u=$.E
if(u===C.e)return a
return u.dG(a,b)},
o:function o(){},
eR:function eR(){},
eT:function eT(){},
eU:function eU(){},
cR:function cR(){},
bH:function bH(){},
b8:function b8(){},
fc:function fc(){},
H:function H(){},
ce:function ce(){},
fd:function fd(){},
ap:function ap(){},
aJ:function aJ(){},
fe:function fe(){},
ff:function ff(){},
fh:function fh(){},
fi:function fi(){},
d2:function d2(){},
d3:function d3(){},
fj:function fj(){},
fk:function fk(){},
jn:function jn(a,b){this.a=a
this.b=b},
a7:function a7(){},
k:function k(){},
f:function f(){},
bc:function bc(){},
fw:function fw(){},
fx:function fx(){},
fB:function fB(){},
bd:function bd(){},
fF:function fF(){},
ci:function ci(){},
bK:function bK(){},
fG:function fG(){},
fH:function fH(a,b){this.a=a
this.b=b},
cj:function cj(){},
be:function be(){},
ck:function ck(){},
bM:function bM(){},
h0:function h0(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(a){this.a=a},
hn:function hn(){},
ho:function ho(a){this.a=a},
bk:function bk(){},
hp:function hp(){},
aL:function aL(){},
jm:function jm(a){this.a=a},
N:function N(){},
dp:function dp(){},
bm:function bm(){},
hF:function hF(){},
cu:function cu(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
hZ:function hZ(){},
bn:function bn(){},
ia:function ia(){},
bo:function bo(){},
ib:function ib(){},
bp:function bp(){},
il:function il(){},
im:function im(a){this.a=a},
aY:function aY(){},
br:function br(){},
aZ:function aZ(){},
it:function it(){},
iu:function iu(){},
iF:function iF(){},
bs:function bs(){},
bU:function bU(){},
iI:function iI(){},
iJ:function iJ(){},
bt:function bt(){},
iY:function iY(){},
jc:function jc(){},
bv:function bv(){},
cB:function cB(){},
jo:function jo(){},
dW:function dW(){},
jE:function jE(){},
ef:function ef(){},
jP:function jP(){},
jR:function jR(){},
jp:function jp(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jq:function jq(a){this.a=a},
I:function I(){},
d6:function d6(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dV:function dV(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e1:function e1(){},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
eg:function eg(){},
eh:function eh(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
cG:function cG(){},
cH:function cH(){},
en:function en(){},
eo:function eo(){},
es:function es(){},
ev:function ev(){},
ew:function ew(){},
cI:function cI(){},
cJ:function cJ(){},
ey:function ey(){},
ez:function ez(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){}},T={
a1:function(a){var u=new T.i_()
u.eQ(a)
return u},
eS:function eS(){},
d7:function d7(){},
dh:function dh(){},
aW:function aW(){this.a=null},
i_:function i_(){this.a=null},
kW:function(a){var u=new T.iw()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
cW:function cW(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cX:function cX(a,b){this.c=a
this.d=b
this.b=null},
dE:function dE(){},
iv:function iv(){},
iw:function iw(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ix:function ix(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iy:function iy(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
iA:function iA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iz:function iz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c}},R={dA:function dA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},dJ:function dJ(a){this.b=a
this.c=null},iG:function iG(){this.c=this.b=this.a=null},dK:function dK(a){this.b=a
this.a=this.c=null}},O={
kw:function(a){var u=new O.ay([a])
u.bm(a)
return u},
ay:function ay(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cn:function cn(){this.b=this.a=null},
md:function(a){var u=C.b.iF(a,"/")
if(u<=0)return a
return C.b.bl(a,0,u)},
m5:function(a){var u,t,s=P.kR("([^\\s]+)")
$.m4=s
u=s.iv(a)
if(u==null)return H.b([],[P.v])
s=u.b
if(1>=s.length)return H.c(s,1)
t=s[1]
return H.b([t,C.b.er(C.b.aU(a,t.length))],[P.v])},
k3:function(a){var u,t=H.b([],[P.v]),s=P.kR("([^\\s]+)")
$.m4=s
s=new H.jf(s,a,0)
for(;s.A();){u=s.d.b
if(1>=u.length)return H.c(u,1)
t.push(u[1])}return t},
b0:function(a){var u,t=O.k3(a),s=H.b([],[P.K]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.c(t,u)
s.push(P.od(t[u]))}return s},
dk:function(a,b,c){return O.n4(a,b,!1)},
n4:function(a,b,c){var u=0,t=P.ag([P.Y,P.v,O.aT]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$dk=P.ai(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.md(a)
k=new O.k_(b)
k.b=new H.M([P.v,O.aT])
n=k
u=7
return P.a3(W.lq(a),$async$dk)
case 7:m=e
u=8
return P.a3(n.aA(m,o,!1),$async$dk)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.a6(h)
P.eP(a+": "+H.e(l))
j=P.l(a+": "+H.e(l))
throw H.h(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ae(s,t)
case 2:return P.ad(q,t)}})
return P.af($async$dk,t)},
ar:function(a,b){var u=null,t=null,s=!1
return O.n5(a,b)},
n5:function(a,a0){var u=0,t=P.ag(E.am),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$ar=P.ai(function(a1,a2){if(a1===1){q=a2
u=r}while(true)switch(u){case 0:e=null
d=null
c=!1
r=4
o=O.md(a)
k=e
j=new O.k0(a0)
j.b=H.b([],[O.eN])
j.c=H.b([],[V.Z])
j.d=H.b([],[V.z])
i=new H.M([P.v,O.aT])
j.e=i
j.f=d
j.r=""
h=O.a0()
g=h.r
g.sp(0,new V.p(0.35,0.35,0.35))
g=h.x
g.sp(0,new V.p(0.65,0.65,0.65))
j.x=h
j.Q=E.L(null,!0,null,"",null,null)
if(k!=null)i.aF(0,k)
j.bx()
n=j
u=7
return P.a3(W.lq(a),$async$ar)
case 7:m=a2
u=8
return P.a3(n.aA(m,o,c),$async$ar)
case 8:k=d
if(k!=null){i=new O.hJ()
i.b=!0
k.C(i)}k=n.git()
s=k
u=1
break
r=2
u=6
break
case 4:r=3
b=q
l=H.a6(b)
P.eP(a+": "+H.e(l))
k=P.l(a+": "+H.e(l))
throw H.h(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ae(s,t)
case 2:return P.ad(q,t)}})
return P.af($async$ar,t)},
k_:function k_(a){this.a=a
this.c=this.b=null},
eN:function eN(a){this.a=a
this.b=null},
k0:function k0(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hJ:function hJ(){this.b=null},
a0:function(){var u,t=new O.aT(),s=O.kw(V.aU)
t.e=s
s.b9(t.gfL(),t.gfN())
s=new O.aK(t,"emission")
s.c=new A.Q(!1,!1,!1)
s.f=new V.p(0,0,0)
t.f=s
s=new O.aK(t,"ambient")
s.c=new A.Q(!1,!1,!1)
s.f=new V.p(0,0,0)
t.r=s
s=new O.aK(t,"diffuse")
s.c=new A.Q(!1,!1,!1)
s.f=new V.p(0,0,0)
t.x=s
s=new O.aK(t,"invDiffuse")
s.c=new A.Q(!1,!1,!1)
s.f=new V.p(0,0,0)
t.y=s
s=new O.hc(t,"specular")
s.c=new A.Q(!1,!1,!1)
s.f=new V.p(0,0,0)
s.ch=100
t.z=s
s=new O.h8(t,"bump")
s.c=new A.Q(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.aK(t,"reflect")
s.c=new A.Q(!1,!1,!1)
s.f=new V.p(0,0,0)
t.cx=s
s=new O.hb(t,"refract")
s.c=new A.Q(!1,!1,!1)
s.f=new V.p(0,0,0)
s.ch=1
t.cy=s
s=new O.h7(t,"alpha")
s.c=new A.Q(!1,!1,!1)
s.f=1
t.db=s
s=new D.dd()
s.bm(D.an)
s.e=H.b([],[D.cf])
s.f=H.b([],[D.hG])
s.r=H.b([],[D.ic])
s.y=s.x=null
s.cS(s.gfJ(),s.ghk(),s.gho())
t.dx=s
u=new O.ha()
u.b=new V.al(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.C():u
s.j(0,t.ghM())
s=t.dx
u=s.y
s=u==null?s.y=D.C():u
s.j(0,t.gaC())
t.fr=null
return t},
aT:function aT(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(){},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(){},
h7:function h7(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cm:function cm(){},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aK:function aK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ha:function ha(){var _=this
_.e=_.d=_.c=_.b=null},
hb:function hb(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hc:function hc(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dw:function dw(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(){this.c=this.b=this.a=null},
dD:function dD(){}},E={
L:function(a,b,c,d,e,f){var u=new E.am()
u.al(a,b,c,d,e,f)
return u},
ni:function(a,b){var u=new E.hO(a)
u.eO(a,b)
return u},
no:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibH)return E.lQ(a,!0,!0,!0,!1)
u=W.kv()
t=u.style
t.width="100%"
t.height="100%"
s.gcg(a).j(0,u)
return E.lQ(u,!0,!0,!0,!1)},
lQ:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dF(),p=C.f.cP(a,"webgl2",P.mY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.r(P.l("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.ni(p,a)
u=new T.iy(p)
u.b=p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dO(a)
t=new X.fP()
t.d=P.mZ(P.A)
u.b=t
t=new X.hq(u)
t.f=0
t.r=V.aX()
t.x=V.aX()
t.ch=t.Q=1
u.c=t
t=new X.h1(u)
t.r=0
t.x=V.aX()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iH(u)
t.f=V.aX()
t.r=V.aX()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dC,P.O]])
u.z=t
s=document
t.push(W.R(s,"contextmenu",u.gfV(),!1))
u.z.push(W.R(a,"focus",u.gh0(),!1))
u.z.push(W.R(a,"blur",u.gfP(),!1))
u.z.push(W.R(s,"keyup",u.gh6(),!1))
u.z.push(W.R(s,"keydown",u.gh4(),!1))
u.z.push(W.R(a,"mousedown",u.gha(),!1))
u.z.push(W.R(a,"mouseup",u.ghe(),!1))
u.z.push(W.R(a,r,u.ghc(),!1))
t=u.z
W.ky(a)
W.ky(a)
t.push(W.R(a,W.ky(a),u.ghg(),!1))
u.z.push(W.R(s,r,u.gfX(),!1))
u.z.push(W.R(s,"mouseup",u.gfZ(),!1))
u.z.push(W.R(s,"pointerlockchange",u.ghi(),!1))
u.z.push(W.R(a,"touchstart",u.ghy(),!1))
u.z.push(W.R(a,"touchend",u.ghu(),!1))
u.z.push(W.R(a,"touchmove",u.ghw(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.aq(Date.now(),!1)
q.db=0
q.dt()
return q},
f0:function f0(){},
am:function am(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
dF:function dF(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iC:function iC(a){this.a=a}},Z={
l1:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cK(c)),35044)
a.bindBuffer(b,null)
return new Z.dR(b,u)},
au:function(a){return new Z.b_(a)},
dR:function dR(a,b){this.a=a
this.b=b},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cA:function cA(a){this.a=a},
bG:function bG(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a){this.a=a}},D={
C:function(){var u=new D.bI()
u.d=0
return u},
f7:function f7(){},
bI:function bI(){var _=this
_.d=_.c=_.b=_.a=null},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
X:function X(){this.b=null},
bf:function bf(){this.b=null},
bg:function bg(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ln:function(){var u=new D.cf()
u.c=new V.p(1,1,1)
u.a=V.ns()
u.d=V.j3()
u.e=V.nr()
u.sp(0,null)
return u},
cf:function cf(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
an:function an(){},
dd:function dd(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hG:function hG(){},
ic:function ic(){}},X={cU:function cU(a,b){this.a=a
this.b=b},dc:function dc(a,b){this.a=a
this.b=b},fP:function fP(){this.d=this.b=this.a=null},dg:function dg(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h1:function h1(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},aA:function aA(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hq:function hq(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hH:function hH(){},cv:function cv(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iH:function iH(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dO:function dO(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kB:function(a){var u=new X.fD(),t=new V.al(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.kS()
u.r=t
return u},
lD:function(a){var u,t,s=new X.dq()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().j(0,s.gf8())
t=new D.w("mover",u,s.b)
t.b=!0
s.a1(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.y().a)){s.c=1.0471975511965976
t=new D.w("fov",t,1.0471975511965976)
t.b=!0
s.a1(t)}t=s.d
if(!(Math.abs(t-0.1)<$.y().a)){s.d=0.1
t=new D.w("near",t,0.1)
t.b=!0
s.a1(t)}t=s.e
if(!(Math.abs(t-2000)<$.y().a)){s.e=2000
t=new D.w("far",t,2000)
t.b=!0
s.a1(t)}return s},
f_:function f_(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ku:function ku(){},
fD:function fD(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fI:function fI(){this.b=this.a=null},
dq:function dq(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ir:function ir(){}},V={
kx:function(a){var u,t,s=a.length
if(0>=s)return H.c(a,0)
u=a[0]
if(1>=s)return H.c(a,1)
t=a[1]
if(2>=s)return H.c(a,2)
s=a[2]
if(typeof u!=="number")return u.Z()
if(u<0)u=0
else if(u>1)u=1
if(typeof t!=="number")return t.Z()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.Z()
if(s<0)s=0
else if(s>1)s=1
return new V.p(u,t,s)},
mN:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.c.b5(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.p(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.p(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.p(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.p(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.p(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.p(p,o,n)}},
cV:function(a,b,c,d){var u=a/255,t=b/255,s=c/255,r=d/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.al(u,t,s,r)},
oC:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cQ(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.b.ar("null",c)
return C.b.ar(C.c.eq(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
c3:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.v])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.q)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.b.ar(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
cN:function(a){return C.c.jj(Math.pow(2,C.j.b5(Math.log(H.o7(a))/Math.log(2))))},
bj:function(){var u=$.lA
return u==null?$.lA=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dj:function(a,b,c){return V.aV(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kM:function(a,b,c,d){return V.aV(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lz:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aV(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kL:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aV(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kK:function(a,b,c){var u=c.u(0,Math.sqrt(c.F(c))),t=b.bg(u),s=t.u(0,Math.sqrt(t.F(t))),r=u.bg(s),q=new V.z(a.a,a.b,a.c),p=s.O(0).F(q),o=r.O(0).F(q),n=u.O(0).F(q)
return V.aV(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aX:function(){var u=$.lF
return u==null?$.lF=new V.Z(0,0):u},
kO:function(){var u=$.cr
return u==null?$.cr=new V.a_(0,0,0):u},
kS:function(){var u=$.lM
return u==null?$.lM=V.lL(0,0,1,1):u},
lL:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dt(a,b,c,d)},
dQ:function(){var u=$.lW
return u==null?$.lW=new V.z(0,0,0):u},
nr:function(){var u=$.j0
return u==null?$.j0=new V.z(-1,0,0):u},
j3:function(){var u=$.j1
return u==null?$.j1=new V.z(0,1,0):u},
ns:function(){var u=$.j2
return u==null?$.j2=new V.z(0,0,1):u},
p:function p(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ft:function ft(a){this.a=a},
di:function di(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aU:function aU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Z:function Z(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
ow:function(a){P.nq(C.C,new V.kh(a))},
nk:function(a){var u=new V.i4()
u.eR(a,!0)
return u},
kh:function kh(a){this.a=a},
i4:function i4(){this.b=this.a=null},
i6:function i6(a){this.a=a},
i5:function i5(a){this.a=a}},U={
lm:function(){var u=new U.f9()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
b9:function(a){var u=new U.cZ()
u.sX(0,a)
return u},
f9:function f9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){this.b=this.a=null},
ch:function ch(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aB:function aB(){},
dP:function dP(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lp:function(){var u,t,s=new M.d4()
s.a=!0
u=O.kw(E.am)
s.e=u
u.b9(s.gfR(),s.gfT())
s.y=s.x=s.r=s.f=null
t=X.kB(null)
s.sb4(null)
s.sb8(0,t)
return s},
cY:function cY(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
d_:function d_(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d4:function d4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aC:function aC(){}},A={
n1:function(a,b){var u=a.aP,t=new A.h6(b,u)
t.bN(b,u)
t.eK(a,b)
return t},
n2:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gai(a0)+a1.gai(a1)+a2.gai(a2)+a3.gai(a3)+a4.gai(a4)+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.q)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.q)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.q)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
for(u=b0.length,t=0;t<u;++t,r=!0)s+=b0[t].b
for(q=b1.length,t=0;t<q;++t,r=!0)s+=b1[t].b
p=a6.a||a6.b||!1||a7.a||a7.b||!1
if(!(a1.a||a1.b||!1))if(!(a2.a||a2.b||!1)){q=a3.a||a3.b||!1||a4.a||a4.b||!1
o=q}else o=!0
else o=!0
q=!a4.a
n=!q||a4.b||!1||u>0||p
if(!(a2.a||a2.b||!1))m=a3.a||a3.b||!1||!q||a4.b||!1
else m=!0
if(!m)l=a5.a||a5.b||!1||p
else l=!0
k=a5.a||a5.b||!1
j=a0.b||a1.b||a2.b||a3.b||a4.b||a5.b||a6.b||a7.b||a8.b
i=e>0
h=l||k||n||!1
a=a&&j
g=$.ao()
if(l){u=$.b6()
g=new Z.b_(g.a|u.a)}if(k){u=$.b5()
g=new Z.b_(g.a|u.a)}if(j){u=$.b7()
g=new Z.b_(g.a|u.a)}if(i){u=$.b4()
g=new Z.b_(g.a|u.a)}return new A.h9(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jY:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jZ:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jY(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kl(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
nI:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jY(b,t,"emission")
u=b.a+="\n"
u+="vec3 emissionColor()\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.b){t=u+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
b.a=t}else{t=u+"   return emissionClr;\n"
b.a=t}else if(t.b){t=u+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=t}else t=u
t+="}\n"
b.a=t
b.a=t+"\n"},
nF:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jZ(b,t,"ambient")
b.a+="\n"},
nG:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
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
nJ:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
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
nP:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
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
nL:function(a,b){var u,t,s
if(!a.k3)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
t=a.f
s=t.b
if(s){u+="uniform sampler2D bumpTxt;\n"
b.a=u
u=b.a=u+"\n"}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=t.a
if(!(t||s||!1)||t)u=b.a=u+"   return normalize(normalVec);\n"
else{u=(s?b.a=u+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":b.a=u+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n"
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
nN:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jY(b,t,"reflect")
u=b.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.b){t=u+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = reflectClr;\n"
b.a=t}else if(t.b){t=u+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=t}else t=u
t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
nO:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jY(b,t,"refract")
u=b.a+="uniform float refraction;\n"
u+="\n"
b.a=u
u+="vec3 refract(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.b){t=u+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = refractClr;\n"
b.a=t}else if(t.b){t=u+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
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
nH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.kl(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.w()
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
r=[P.v]
o=H.b([],r)
n=a.b
if(n.a||n.b||!1)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
r=a.c
if(r.a||r.b||!1)m.push("diffuse(norm, lit.viewDir)")
r=a.d
if(r.a||r.b||!1)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e
if(r.a||r.b||!1)m.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.v(m," + ")+");\n"}else c.a+="   highLight = "+C.a.v(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.v(o," + ")+");\n"
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
nM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.kl(t)
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
if(typeof u!=="number")return u.w()
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
c.a=r+"\n"}r=[P.v]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.v(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.b([],r)
o=a.b
if(o.a||o.b||!1)l.push("ambientColor")
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
if(r.a||r.b||!1)k.push("diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)k.push("invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.v(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.v(l," + ")+");\n"
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
nQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.kl(t)
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
if(typeof u!=="number")return u.w()
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
c.a=u+"\n"}u=[P.v]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.v(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.b([],u)
r=a.b
if(r.a||r.b||!1)j.push("ambientColor")
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
if(u.a||u.b||!1)i.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)i.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.v(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.v(j," + ")+");\n"
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
nK:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.v])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.v(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nR:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bq("")
j.a="precision mediump float;\n"
j.a=l
u=a.k3
if(u){j.a=k
t=k}else t=l
if(a.k4){t+="varying vec3 binormalVec;\n"
j.a=t}if(a.r1){t+="varying vec2 txt2D;\n"
j.a=t}if(a.r2){t+="varying vec3 txtCube;\n"
j.a=t}if(a.k1){t+="varying vec3 objPos;\n"
j.a=t}t=j.a=(a.k2?j.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.x2
if(s){t+="uniform mat4 colorMat;\n"
j.a=t}if(a.dx)t=j.a=t+"uniform mat4 invViewMat;\n"
j.a=t+"\n"
A.nI(a,j)
A.nF(a,j)
A.nG(a,j)
A.nJ(a,j)
A.nP(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nN(a,j)
A.nO(a,j)}A.nL(a,j)
r=j.a+="// === Alpha ===\n"
r=j.a=r+"\n"
q=a.y
p=q.a
if(p){r+="uniform float alpha;\n"
j.a=r}q=q.b
if(q)r=j.a=r+"uniform sampler2D alphaTxt;\n"
r+="float alphaValue()\n"
j.a=r
r=j.a=r+"{\n"
if(!(p||q||!1))r=j.a=r+"   return 1.0;\n"
else if(q||!1){if(p){if(q){r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
j.a=r}}else if(q){r+="   float a = texture2D(alphaTxt, txt2D).a;\n"
j.a=r}r+="   if (a <= 0.000001) discard;\n"
j.a=r
r+="   return a;\n"
j.a=r}else if(p){r+="   return alpha;\n"
j.a=r}r+="}\n"
j.a=r
j.a=r+"\n"
r=a.id
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nH(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nM(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nQ(a,q[o],j)
A.nK(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.v])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
n.push("lightAccum")
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aU(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aU(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aU(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.v(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nS:function(a,b){var u,t,s
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
nU:function(a,b){var u
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
nT:function(a,b){var u
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
nW:function(a,b){var u,t
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
nX:function(a,b){var u,t
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
nV:function(a,b){var u
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
nY:function(a,b){var u
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
kl:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.aU(a,1)},
l_:function(a,b,c,d,e){var u=new A.iN(a,c,e)
u.f=d
P.n_(d,0,P.A)
return u},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a,b){var _=this
_.jt=_.dU=_.dT=_.dS=_.aP=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jB=_.jA=_.jz=_.cq=_.cp=_.co=_.cn=_.cm=_.cl=_.jy=_.e5=_.e4=_.jx=_.e3=_.e2=_.e1=_.jw=_.e0=_.e_=_.dZ=_.jv=_.dY=_.dX=_.ju=_.dW=_.dV=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
d1:function d1(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aP=b3
_.dS=b4},
cw:function cw(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cy:function cy(a,b,c,d,e,f,g,h,i,j){var _=this
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
cz:function cz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dv:function dv(){},
i7:function i7(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i9:function i9(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dL:function dL(){},
iS:function iS(a){this.a=a},
dM:function dM(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
bW:function bW(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
cx:function cx(a,b,c){this.a=a
this.c=b
this.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
bu:function bu(a,b,c){this.a=a
this.c=b
this.d=c}},F={
oc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new F.k6()
if(a<3)return
u=F.kU()
t=-6.283185307179586/a
s=H.b([],[F.aD])
r=u.a
q=new V.z(0,0,1)
q=q.u(0,Math.sqrt(q.F(q)))
s.push(r.i4(new V.aM(-1,-1,-1,-1),new V.al(1,1,1,1),new V.a_(0,0,0),new V.z(0,0,1),new V.Z(0.5,0.5),q))
for(p=0;p<=a;++p){o=t*p
n=Math.sin(o)
m=Math.cos(o)
l=g.$1(p/a)
r=u.a
if(typeof l!=="number")return H.d(l)
q=new V.z(n,m,1).u(0,Math.sqrt(n*n+m*m+1))
if(n<0)k=0
else k=n>1?1:n
j=m<0
if(j)i=0
else i=m>1?1:m
if(j)j=0
else j=m>1?1:m
r.toString
h=F.l0(new V.aM(-1,-1,-1,-1),null,new V.al(k,i,j,1),new V.a_(n*l,m*l,0),new V.z(0,0,1),new V.Z(n*0.5+0.5,m*0.5+0.5),q,null,0)
r.j(0,h)
s.push(h)}u.d.c8(s)
return u},
mW:function(a,b){var u=new F.bO(),t=a.a
if(t==null)H.r(P.l("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.l("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.af()
return u},
kU:function(){var u=new F.i0(),t=new F.j4(u)
t.b=!1
t.c=H.b([],[F.aD])
u.a=t
t=new F.i3(u)
t.b=H.b([],[F.bR])
u.b=t
t=new F.i2(u)
t.b=H.b([],[F.bO])
u.c=t
t=new F.i1(u)
t.b=H.b([],[F.bJ])
u.d=t
u.e=null
return u},
l0:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aD(),r=new F.j9()
r.b=H.b([],[F.bR])
s.b=r
r=new F.j8()
u=[F.bO]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.j5()
u=[F.bJ]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mx()
s.e=0
r=$.ao()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b6().a)!==0?e:t
s.x=(u&$.b5().a)!==0?b:t
s.y=(u&$.b7().a)!==0?f:t
s.z=(u&$.bC().a)!==0?g:t
s.Q=(u&$.my().a)!==0?c:t
s.ch=(u&$.c8().a)!==0?i:0
s.cx=(u&$.b4().a)!==0?a:t
return s},
k6:function k6(){},
bJ:function bJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bO:function bO(){this.b=this.a=null},
bR:function bR(){this.a=null},
i0:function i0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a){this.a=a
this.b=null},
i2:function i2(a){this.a=a
this.b=null},
i3:function i3(a){this.a=a
this.b=null},
aD:function aD(){var _=this
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
j9:function j9(){this.b=null}},Q={
lx:function(a){if(a>=64)return new Q.i(0,0)
return new Q.i(C.d.a9(a,8)+1,C.d.cQ(a,8)+1)},
lN:function(){var u=new Q.ie()
u.eS()
return u},
a9:function(a){return new Q.t(a)},
fE:function fE(){this.d=this.c=this.a=null},
i:function i(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ie:function ie(){this.c=this.a=null},
ig:function ig(a){this.a=a},
ii:function ii(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(){this.d=this.c=null},
t:function t(a){this.a=a}},S={
f2:function(a,b,c,d,e,f){var u=null,t=new S.f1(e,f,b,c)
t.al(u,!0,u,"",u,u)
t.aV(b,c,e,f)
t.eF(a,b,c,d,e,f)
return t},
mG:function(a,b){var u=null,t=new S.cS(b)
t.al(u,!0,u,"",u,u)
t.eG(a,b)
return t},
fo:function(a,b,c,d,e,f){var u=null,t=new S.fn()
t.al(u,!0,u,"",u,u)
t.eH(a,b,c,d,e,f)
return t},
ox:function(a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="modifiers",a4=document,a5=a4.getElementById("targetCanvas")
if(a5==null)H.r(P.l("Failed to find an element with the identifier, targetCanvas."))
u=E.no(a5,!0,!0,!0,!1)
t=u.x
s=new U.dP()
r=U.lm()
r.scN(0,!0)
r.scB(6.283185307179586)
r.scC(0)
r.sap(0,0)
r.se9(100)
r.sa4(0)
r.sdO(0.5)
s.b=r
q=s.gbr()
r.gq().j(0,q)
r=U.lm()
r.scN(0,!0)
r.scB(6.283185307179586)
r.scC(0)
r.sap(0,0)
r.se9(100)
r.sa4(0)
r.sdO(0.5)
s.c=r
r.gq().j(0,q)
s.d=null
s.r=s.f=s.e=!1
s.y=s.x=2.5
s.Q=4
s.ch=s.cx=!1
s.db=s.cy=0
s.dx=null
s.dy=0
s.fx=s.fr=null
p=new X.bl(!1,!1,!1)
o=s.d
s.d=p
r=new D.w(a3,o,p)
r.b=!0
s.W(r)
r=s.f
if(r!==!1){s.f=!1
r=new D.w("invertX",r,!1)
r.b=!0
s.W(r)}r=s.r
if(r!==!1){s.r=!1
r=new D.w("invertY",r,!1)
r.b=!0
s.W(r)}s.ca(t)
s.b.scC(-1.5707963267948966)
s.b.scB(0)
s.b.sap(0,-0.5)
s.b.scN(0,!1)
t=U.aB
s=H.b([s,U.b9(V.kM(1.75,1.75,1.75,1)),U.b9(V.dj(0,0,15))],[t])
r=new U.ch()
r.bm(t)
r.b9(r.gfH(),r.ghm())
r.aF(0,s)
r.e=null
r.f=V.bj()
r.r=0
n=X.lD(r)
m=X.kB(a2)
if(m.b){m.b=!1
t=new D.w("clearColor",!0,!1)
t.b=!0
m.a1(t)}l=S.mG(u,a6)
t=l.k4.a
k=new M.d_()
k.a=!0
s=E.L(a2,!0,a2,"",a2,a2)
j=F.kU()
r=j.a
q=new V.z(-1,-1,1)
q=q.u(0,Math.sqrt(q.F(q)))
i=r.bz(new V.aM(1,2,4,6),V.cV(255,0,0,255),new V.a_(-1,-1,0),new V.Z(0,1),q,a2)
q=j.a
r=new V.z(1,-1,1)
r=r.u(0,Math.sqrt(r.F(r)))
h=q.bz(new V.aM(0,3,4,6),V.cV(0,0,255,255),new V.a_(1,-1,0),new V.Z(1,1),r,a2)
r=j.a
q=new V.z(1,1,1)
q=q.u(0,Math.sqrt(q.F(q)))
g=r.bz(new V.aM(0,2,5,6),V.cV(0,128,0,255),new V.a_(1,1,0),new V.Z(1,0),q,a2)
q=j.a
r=V.aX()
f=new V.z(-1,1,1)
f=f.u(0,Math.sqrt(f.F(f)))
e=q.bz(new V.aM(0,2,4,7),V.cV(255,255,0,255),new V.a_(-1,1,0),r,f,a2)
j.d.c8(H.b([i,h,g,e],[F.aD]))
j.b3()
s.sa_(0,j)
k.e=s
k.sb4(a2)
k.sb8(0,a2)
k.sY(a2)
s=new O.dw()
s.b=1.0471975511965976
s.d=new V.p(1,1,1)
if(null!=t){o=s.c
s.c=t
t.gq().j(0,s.gaC())
t=new D.w("boxTexture",o,s.c)
t.b=!0
s.T(t)}k.sY(s)
k.sb8(0,m)
k.sb4(n)
d=M.lp()
d.sb8(0,m)
d.sb4(n)
d.e.j(0,l)
c=new X.f_()
c.d=c.c=c.b=c.a=512
c.e=!0
c.f=!1
c.x=c.r=1
c.ch=T.kW(a2)
c.cx=new V.al(0,0,0,1)
c.cy=!0
c.db=2000
c.dx=!0
c.dy=V.kS()
c.sat(0,512)
c.sao(0,512)
b=new V.al(0,0,0,1)
if(!c.cx.m(0,b)){o=c.cx
c.cx=b
t=new D.w("color",o,b)
t.b=!0
c.a1(t)}t=c.db
if(!(Math.abs(t-2000)<$.y().a)){c.db=2000
t=new D.w("depth",t,2000)
t.b=!0
c.a1(t)}if(!c.f){c.f=!0
t=new D.w("autoResize",!1,!0)
t.b=!0
c.a1(t)}t=c.r
if(!(Math.abs(t-0.5)<$.y().a)){c.r=0.5
t=new D.w("autoResizeScalarX",t,0.5)
t.b=!0
c.a1(t)}t=c.x
if(!(Math.abs(t-0.5)<$.y().a)){c.x=0.5
t=new D.w("autoResizeScalarY",t,0.5)
t.b=!0
c.a1(t)}a=V.kS()
if(!J.B(c.dy,a)){o=c.dy
c.dy=a
t=new D.w("region",o,a)
t.b=!0
c.a1(t)}a0=M.lp()
a0.sb8(0,c)
a0.sb4(n)
a0.e.j(0,l)
t=u.f
s=u.x
r=c.ch
q=new T.cW()
q.a=t
q.z=4
q.ch=q.Q=!1
p=new X.bl(!1,!1,!1)
q.c=p
t=new D.w(a3,a2,p)
t.b=!0
q.bo(t)
t=q.d
if(t!==r){if(t!=null)t.gq().R(0,q.gd5())
o=q.d
q.d=r
r.gq().j(0,q.gd5())
t=new D.w("texture",o,q.d)
t.b=!0
q.bo(t)}q.ca(s)
t=q.f
if(t==null)t=q.f=D.C()
t.j(0,new S.ki(l,u,a0))
t=q.x
if(t==null)t=q.x=D.C()
t.j(0,new S.kj(l))
t=M.aC
s=H.b([k,d],[t])
r=new M.cY()
r.bm(t)
r.e=!0
r.f=!1
r.r=null
r.b9(r.ghq(),r.ghs())
r.aF(0,s)
t=u.d
if(t!==r){if(t!=null)t.gq().R(0,u.gd2())
u.d=r
r.gq().j(0,u.gd2())
u.d3()}a5=a4.getElementById("buttons")
a1=a4.createElement("button")
a1.textContent="Fullscreen"
W.R(a1,"click",new S.kk(u),!1)
J.mC(a5).j(0,a1)
V.ow(u)},
lv:function(a,b,c,d,e){var u=null,t=new S.fQ(d,e,b,c)
t.al(u,!0,u,"",u,u)
t.aV(b,c,d,e)
t.eI(a,b,c,d,e)
return t},
fU:function(a,b,c,d,e,f){var u=null,t=new S.fT(e,f,b,c)
t.al(u,!0,u,"",u,u)
t.aV(b,c,e,f)
t.eJ(a,b,c,d,e,f)
return t},
n3:function(a){var u=new S.hj()
u.eL(a)
return u},
lC:function(a,b,c,d,e,f){var u=null,t=new S.hB(e,f,b,c)
t.al(u,!0,u,"",u,u)
t.aV(b,c,e,f)
t.eM(a,b,c,d,e,f)
return t},
lI:function(a,b,c,d,e,f){var u=null,t=new S.hK(e,f,b,c)
t.al(u,!0,u,"",u,u)
t.aV(b,c,e,f)
t.eN(a,b,c,d,e,f)
return t},
hT:function(a,b,c,d,e,f){var u=null,t=new S.hS(e,f,b,c)
t.al(u,!0,u,"",u,u)
t.aV(b,c,e,f)
t.eP(a,b,c,d,e,f)
return t},
np:function(a,b,c,d){var u=null,t=new S.dG(d,b,c)
t.al(u,!0,u,"",u,u)
t.eT(a,b,c,d)
return t},
f1:function f1(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
f4:function f4(){},
cS:function cS(a){var _=this
_.fy=a
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=null},
fn:function fn(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fq:function fq(){},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
fQ:function fQ(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
fS:function fS(){},
fT:function fT(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
fW:function fW(){},
hj:function hj(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
hD:function hD(){},
dr:function dr(){},
hK:function hK(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
hM:function hM(){},
hS:function hS(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
hV:function hV(){},
dG:function dG(a,b,c){var _=this
_.fy=a
_.id=b
_.k1=c
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=null},
iE:function iE(){}},L={
mf:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=V.nk("3Dart Chess"),d=[P.v]
e.b2(H.b(["This example is in development and may still have a few issues and glitches."],d))
u=W.kv()
u.className="pageLargeCanvas"
u.id="targetCanvas"
e.a.appendChild(u)
e.i0(H.b(["buttons"],d))
e.dD(1,"About")
e.b2(H.b(["Click and drag to see the board from different angles. ","Click without dragging to select a piece, unselect a piece, or pick which movement should be made. ","The game will start with white's turn."],d))
e.b2(H.b(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."],d))
e.b2(H.b(["\xab[Back to Examples List|../../]"],d))
e.dD(1,"Help wanted")
e.b2(H.b(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."],d))
e.b2(H.b(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],d))
t=new Q.fE()
t.a=!0
s=Q.lN()
d=$.aG()
e=$.aQ()
d=d.a
e=e.a
if(typeof d!=="number")return d.V()
if(typeof e!=="number")return H.d(e)
r=d|e
q=$.aF().a
if(typeof q!=="number")return H.d(q)
p=1&q
s.B(new Q.i(1,1),new Q.t((r|p)>>>0))
o=$.c6()
o=o.a
if(typeof o!=="number")return o.V()
n=o|e
s.B(new Q.i(1,2),new Q.t((n|p)>>>0))
m=$.aP()
m=m.a
if(typeof m!=="number")return m.V()
l=m|e
s.B(new Q.i(1,3),new Q.t((l|p)>>>0))
k=$.b3()
k=k.a
if(typeof k!=="number")return k.V()
s.B(new Q.i(1,4),new Q.t((k|e|p)>>>0))
j=$.aj()
j=j.a
if(typeof j!=="number")return j.V()
s.B(new Q.i(1,5),new Q.t((j|e|p)>>>0))
i=2&q
s.B(new Q.i(1,6),new Q.t((l|i)>>>0))
s.B(new Q.i(1,7),new Q.t((n|i)>>>0))
s.B(new Q.i(1,8),new Q.t((r|i)>>>0))
r=$.c7()
r=r.a
if(typeof r!=="number")return r.V()
e=r|e
s.B(new Q.i(2,1),new Q.t((e|p)>>>0))
s.B(new Q.i(2,2),new Q.t((e|i)>>>0))
n=3&q
s.B(new Q.i(2,3),new Q.t((e|n)>>>0))
l=4&q
s.B(new Q.i(2,4),new Q.t((e|l)>>>0))
h=5&q
s.B(new Q.i(2,5),new Q.t((e|h)>>>0))
g=6&q
s.B(new Q.i(2,6),new Q.t((e|g)>>>0))
f=7&q
s.B(new Q.i(2,7),new Q.t((e|f)>>>0))
q=8&q
s.B(new Q.i(2,8),new Q.t((e|q)>>>0))
e=$.W()
e=e.a
if(typeof e!=="number")return H.d(e)
r|=e
s.B(new Q.i(7,1),new Q.t((r|p)>>>0))
s.B(new Q.i(7,2),new Q.t((r|i)>>>0))
s.B(new Q.i(7,3),new Q.t((r|n)>>>0))
s.B(new Q.i(7,4),new Q.t((r|l)>>>0))
s.B(new Q.i(7,5),new Q.t((r|h)>>>0))
s.B(new Q.i(7,6),new Q.t((r|g)>>>0))
s.B(new Q.i(7,7),new Q.t((r|f)>>>0))
s.B(new Q.i(7,8),new Q.t((r|q)>>>0))
d|=e
s.B(new Q.i(8,1),new Q.t((d|p)>>>0))
r=o|e
s.B(new Q.i(8,2),new Q.t((r|p)>>>0))
q=m|e
s.B(new Q.i(8,3),new Q.t((q|p)>>>0))
s.B(new Q.i(8,4),new Q.t((k|e|p)>>>0))
s.B(new Q.i(8,5),new Q.t((j|e|p)>>>0))
s.B(new Q.i(8,6),new Q.t((q|i)>>>0))
s.B(new Q.i(8,7),new Q.t((r|i)>>>0))
s.B(new Q.i(8,8),new Q.t((d|i)>>>0))
t.c=s
P.kY(C.h,new L.kf(t))},
kf:function kf(a){this.a=a}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,Q,S,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kG.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gJ:function(a){return H.cs(a)},
h:function(a){return"Instance of '"+H.e(H.ct(a))+"'"}}
J.fL.prototype={
h:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iby:1}
J.da.prototype={
m:function(a,b){return null==b},
h:function(a){return"null"},
gJ:function(a){return 0}}
J.db.prototype={
gJ:function(a){return 0},
h:function(a){return String(a)}}
J.hE.prototype={}
J.bX.prototype={}
J.bi.prototype={
h:function(a){var u=a[$.mm()]
if(u==null)return this.eE(a)
return"JavaScript function for "+H.e(J.ak(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aR.prototype={
j:function(a,b){if(!!a.fixed$length)H.r(P.ab("add"))
a.push(b)},
R:function(a,b){var u
if(!!a.fixed$length)H.r(P.ab("remove"))
for(u=0;u<a.length;++u)if(J.B(a[u],b)){a.splice(u,1)
return!0}return!1},
aF:function(a,b){var u,t
if(!!a.fixed$length)H.r(P.ab("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.q)(b),++t)a.push(b[t])},
M:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.h(P.cd(a))}},
v:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
iE:function(a){return this.v(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
eB:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aN(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aN(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.b2(a,0)])
return H.b(a.slice(b,c),[H.b2(a,0)])},
gcw:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.mT())},
bM:function(a,b){if(!!a.immutable$list)H.r(P.ab("sort"))
H.dx(a,0,a.length-1,b)},
aH:function(a,b){var u
for(u=0;u<a.length;++u)if(J.B(a[u],b))return!0
return!1},
h:function(a){return P.kC(a,"[","]")},
gU:function(a){return new J.a4(a,a.length)},
gJ:function(a){return H.cs(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.ab("set length"))
if(b<0)throw H.h(P.aN(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.h(H.c2(a,b))
return a[b]},
t:function(a,b,c){if(!!a.immutable$list)H.r(P.ab("indexed set"))
if(b>=a.length||b<0)throw H.h(H.c2(a,b))
a[b]=c},
$im:1}
J.kF.prototype={}
J.a4.prototype={
gL:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.cl.prototype={
bB:function(a,b){var u
if(typeof b!=="number")throw H.h(H.av(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbD(b)
if(this.gbD(a)===u)return 0
if(this.gbD(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbD:function(a){return a===0?1/a<0:a<0},
jj:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ab(""+a+".toInt()"))},
b5:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ab(""+a+".floor()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ab(""+a+".round()"))},
ic:function(a,b,c){if(C.d.bB(b,c)>0)throw H.h(H.av(b))
if(this.bB(a,b)<0)return b
if(this.bB(a,c)>0)return c
return a},
eq:function(a,b){var u
if(b>20)throw H.h(P.aN(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbD(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
cQ:function(a,b){var u
if(typeof b!=="number")throw H.h(H.av(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
d0:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dw(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dw(a,b)},
dw:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ab("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
bw:function(a,b){var u
if(a>0)u=this.hT(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hT:function(a,b){return b>31?0:a>>>b},
$iK:1,
$iaw:1}
J.d9.prototype={$iA:1}
J.d8.prototype={}
J.bh.prototype={
aG:function(a,b){if(b<0)throw H.h(H.c2(a,b))
if(b>=a.length)H.r(H.c2(a,b))
return a.charCodeAt(b)},
aX:function(a,b){if(b>=a.length)throw H.h(H.c2(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.h(P.kr(b,null,null))
return a+b},
bl:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.hN(b,null))
if(b>c)throw H.h(P.hN(b,null))
if(c>a.length)throw H.h(P.hN(c,null))
return a.substring(b,c)},
aU:function(a,b){return this.bl(a,b,null)},
er:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.aX(r,0)===133){u=J.mV(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aG(r,t)===133?J.kE(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
jn:function(a){var u,t,s
if(typeof a.trimRight!="undefined"){u=a.trimRight()
t=u.length
if(t===0)return u
s=t-1
if(this.aG(u,s)===133)t=J.kE(u,s)}else{t=J.kE(a,a.length)
u=a}if(t===u.length)return u
if(t===0)return""
return u.substring(0,t)},
k:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ar:function(a,b){var u=b-a.length
if(u<=0)return a
return this.k(" ",u)+a},
bG:function(a,b){var u=b-a.length
if(u<=0)return a
return a+this.k(" ",u)},
iA:function(a,b){var u=a.indexOf(b,0)
return u},
iF:function(a,b){var u=a.length,t=b.length
if(u+t>u)u-=t
return a.lastIndexOf(b,u)},
h:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$iv:1}
H.U.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.aG(this.a,b)},
$au:function(){return[P.A]},
$am:function(){return[P.A]}}
H.fr.prototype={}
H.df.prototype={
gL:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.l7(s),q=r.gl(s)
if(t.b!==q)throw H.h(P.cd(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.H(s,u);++t.c
return!0}}
H.h4.prototype={
gU:function(a){return new H.h5(J.c9(this.a),this.b)},
gl:function(a){return J.aH(this.a)},
H:function(a,b){return this.b.$1(J.lf(this.a,b))},
$am:function(a,b){return[b]}}
H.h5.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.a=u.c.$1(t.gL(t))
return!0}u.a=null
return!1},
gL:function(a){return this.a}}
H.jd.prototype={
gU:function(a){return new H.je(J.c9(this.a),this.b)}}
H.je.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gL(u)))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.d5.prototype={}
H.iW.prototype={}
H.dN.prototype={}
H.iL.prototype={
aq:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hx.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fO.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iV.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cg.prototype={}
H.km.prototype={
$1:function(a){if(!!J.S(a).$ibb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.er.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iat:1}
H.cc.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gjo:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.is.prototype={}
H.ik.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eQ(u)+"'"}}
H.ca.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ca))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cs(this.a)
else u=typeof t!=="object"?J.bD(t):H.cs(t)
return(u^H.cs(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ct(u))+"'")}}
H.f6.prototype={
h:function(a){return this.a}}
H.hY.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.M.prototype={
gl:function(a){return this.a},
gaQ:function(a){return new H.de(this,[H.b2(this,0)])},
dM:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.df(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.df(t,b)}else return s.iB(b)},
iB:function(a){var u=this.d
if(u==null)return!1
return this.cu(this.bV(u,J.bD(a)&0x3ffffff),a)>=0},
aF:function(a,b){J.lg(b,new H.fN(this))},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bq(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bq(r,b)
s=t==null?null:t.b
return s}else return q.iC(b)},
iC:function(a){var u,t,s=this.d
if(s==null)return
u=this.bV(s,J.bD(a)&0x3ffffff)
t=this.cu(u,a)
if(t<0)return
return u[t].b},
t:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.d6(u==null?o.b=o.bY():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.d6(t==null?o.c=o.bY():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bY()
r=J.bD(b)&0x3ffffff
q=o.bV(s,r)
if(q==null)o.c6(s,r,[o.bZ(b,c)])
else{p=o.cu(q,b)
if(p>=0)q[p].b=c
else q.push(o.bZ(b,c))}}},
M:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.h(P.cd(u))
t=t.c}},
d6:function(a,b,c){var u=this.bq(a,b)
if(u==null)this.c6(a,b,this.bZ(b,c))
else u.b=c},
bZ:function(a,b){var u=this,t=new H.fY(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cu:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.B(a[t].a,b))return t
return-1},
h:function(a){return P.ly(this)},
bq:function(a,b){return a[b]},
bV:function(a,b){return a[b]},
c6:function(a,b,c){a[b]=c},
fl:function(a,b){delete a[b]},
df:function(a,b){return this.bq(a,b)!=null},
bY:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c6(t,u,t)
this.fl(t,u)
return t}}
H.fN.prototype={
$2:function(a,b){this.a.t(0,a,b)},
$S:function(){var u=this.a
return{func:1,ret:P.a8,args:[H.b2(u,0),H.b2(u,1)]}}}
H.fY.prototype={}
H.de.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fZ(u,u.r)
t.c=u.e
return t}}
H.fZ.prototype={
gL:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cd(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.kb.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.kc.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kd.prototype={
$1:function(a){return this.a(a)}}
H.fM.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gfG:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.lu(u.a,t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
iv:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.ea(u)},
fn:function(a,b){var u,t=this.gfG()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.ea(u)}}
H.ea.prototype={}
H.jf.prototype={
gL:function(a){return this.d},
A:function(){var u,t,s,r,q=this,p=q.b
if(p==null)return!1
u=q.c
if(u<=p.length){t=q.a
s=t.fn(p,u)
if(s!=null){q.d=s
p=s.b
u=p.index
r=u+p[0].length
if(u===r){if(t.b.unicode){p=q.c
u=p+1
t=q.b
if(u<t.length){p=J.k8(t).aG(t,p)
if(p>=55296&&p<=56319){p=C.b.aG(t,u)
p=p>=56320&&p<=57343}else p=!1}else p=!1}else p=!1
r=(p?r+1:r)+1}q.c=r
return!0}}q.b=q.d=null
return!1}}
H.cp.prototype={}
H.dl.prototype={
gl:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.co.prototype={
i:function(a,b){H.bw(b,a,a.length)
return a[b]},
$au:function(){return[P.K]},
$im:1,
$am:function(){return[P.K]}}
H.dm.prototype={
$au:function(){return[P.A]},
$im:1,
$am:function(){return[P.A]}}
H.hr.prototype={
i:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.hs.prototype={
i:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.ht.prototype={
i:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.hu.prototype={
i:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.hv.prototype={
i:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.dn.prototype={
gl:function(a){return a.length},
i:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.hw.prototype={
gl:function(a){return a.length},
i:function(a,b){H.bw(b,a,a.length)
return a[b]}}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
H.cF.prototype={}
P.jj.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:8}
P.ji.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jk.prototype={
$0:function(){this.a.$0()}}
P.jl.prototype={
$0:function(){this.a.$0()}}
P.ex.prototype={
f6:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c1(new P.jT(this,b),0),a)
else throw H.h(P.ab("`setTimeout()` not found."))},
f7:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c1(new P.jS(this,a,Date.now(),b),0),a)
else throw H.h(P.ab("Periodic timer."))},
$idH:1}
P.jT.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jS.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.d0(u,q)}s.c=r
t.d.$1(s)}}
P.jg.prototype={
ci:function(a,b){var u=!this.b||H.eO(b,"$iaz",this.$ti,"$aaz"),t=this.a
if(u)t.d7(b)
else t.dc(b)},
bC:function(a,b){var u=this.a
if(this.b)u.bp(a,b)
else u.d8(a,b)}}
P.jW.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:18}
P.jX.prototype={
$2:function(a,b){this.a.$2(1,new H.cg(a,b))},
$S:19}
P.k4.prototype={
$2:function(a,b){this.a(a,b)}}
P.dU.prototype={
bC:function(a,b){var u
if(a==null)a=new P.cq()
u=this.a
if(u.a!==0)throw H.h(P.lO("Future already completed"))
u.d8(a,b)},
dL:function(a){return this.bC(a,null)}}
P.jh.prototype={
ci:function(a,b){var u=this.a
if(u.a!==0)throw H.h(P.lO("Future already completed"))
u.d7(b)}}
P.e3.prototype={
iH:function(a){if((this.c&15)!==6)return!0
return this.b.b.cJ(this.d,a.a)},
ix:function(a){var u=this.e,t=this.b.b
if(H.l6(u,{func:1,args:[P.O,P.at]}))return t.jd(u,a.a,a.b)
else return t.cJ(u,a.a)}}
P.ac.prototype={
cK:function(a,b,c){var u,t=$.E
if(t!==C.e)b=b!=null?P.o_(b,t):b
u=new P.ac($.E,[c])
this.bO(new P.e3(u,b==null?1:3,a,b))
return u},
as:function(a,b){return this.cK(a,null,b)},
dz:function(a,b,c){var u=new P.ac($.E,[c])
this.bO(new P.e3(u,(b==null?1:3)|16,a,b))
return u},
bO:function(a){var u,t=this,s=t.a
if(s<=1){a.a=t.c
t.c=a}else{if(s===2){s=t.c
u=s.a
if(u<4){s.bO(a)
return}t.a=u
t.c=s.c}P.c_(null,null,t.b,new P.jr(t,a))}},
dr:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=p.c
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){u=p.c
q=u.a
if(q<4){u.dr(a)
return}p.a=q
p.c=u.c}o.a=p.bv(a)
P.c_(null,null,p.b,new P.jz(o,p))}},
bu:function(){var u=this.c
this.c=null
return this.bv(u)},
bv:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
fh:function(a){var u,t=this,s=t.$ti
if(H.eO(a,"$iaz",s,"$aaz"))if(H.eO(a,"$iac",s,null))P.ju(a,t)
else P.lX(a,t)
else{u=t.bu()
t.a=4
t.c=a
P.bY(t,u)}},
dc:function(a){var u=this,t=u.bu()
u.a=4
u.c=a
P.bY(u,t)},
bp:function(a,b){var u=this,t=u.bu()
u.a=8
u.c=new P.bE(a,b)
P.bY(u,t)},
d7:function(a){var u=this
if(H.eO(a,"$iaz",u.$ti,"$aaz")){u.ff(a)
return}u.a=1
P.c_(null,null,u.b,new P.jt(u,a))},
ff:function(a){var u=this
if(H.eO(a,"$iac",u.$ti,null)){if(a.a===8){u.a=1
P.c_(null,null,u.b,new P.jy(u,a))}else P.ju(a,u)
return}P.lX(a,u)},
d8:function(a,b){this.a=1
P.c_(null,null,this.b,new P.js(this,a,b))},
$iaz:1}
P.jr.prototype={
$0:function(){P.bY(this.a,this.b)}}
P.jz.prototype={
$0:function(){P.bY(this.b,this.a.a)}}
P.jv.prototype={
$1:function(a){var u=this.a
u.a=0
u.fh(a)},
$S:8}
P.jw.prototype={
$2:function(a,b){this.a.bp(a,b)},
$1:function(a){return this.$2(a,null)},
$S:21}
P.jx.prototype={
$0:function(){this.a.bp(this.b,this.c)}}
P.jt.prototype={
$0:function(){this.a.dc(this.b)}}
P.jy.prototype={
$0:function(){P.ju(this.b,this.a)}}
P.js.prototype={
$0:function(){this.a.bp(this.b,this.c)}}
P.jC.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.el(s.d)}catch(r){u=H.a6(r)
t=H.bz(r)
if(o.d){s=o.a.a.c.a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=o.a.a.c
else q.b=new P.bE(u,t)
q.a=!0
return}if(!!J.S(n).$iaz){if(n instanceof P.ac&&n.a>=4){if(n.a===8){s=o.b
s.b=n.c
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.as(new P.jD(p),null)
s.a=!1}}}
P.jD.prototype={
$1:function(a){return this.a},
$S:22}
P.jB.prototype={
$0:function(){var u,t,s,r,q=this
try{s=q.b
q.a.b=s.b.b.cJ(s.d,q.c)}catch(r){u=H.a6(r)
t=H.bz(r)
s=q.a
s.b=new P.bE(u,t)
s.a=!0}}}
P.jA.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=m.a.a.c
r=m.c
if(r.iH(u)&&r.e!=null){q=m.b
q.b=r.ix(u)
q.a=!1}}catch(p){t=H.a6(p)
s=H.bz(p)
r=m.a.a.c
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.bE(t,s)
n.a=!0}}}
P.dS.prototype={}
P.dC.prototype={}
P.io.prototype={}
P.jQ.prototype={}
P.dH.prototype={}
P.bE.prototype={
h:function(a){return H.e(this.a)},
$ibb:1}
P.jV.prototype={}
P.k2.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cq():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.h(0)
throw u}}
P.jK.prototype={
jf:function(a){var u,t,s,r=null
try{if(C.e===$.E){a.$0()
return}P.m1(r,r,this,a)}catch(s){u=H.a6(s)
t=H.bz(s)
P.k1(r,r,this,u,t)}},
jh:function(a,b){var u,t,s,r=null
try{if(C.e===$.E){a.$1(b)
return}P.m2(r,r,this,a,b)}catch(s){u=H.a6(s)
t=H.bz(s)
P.k1(r,r,this,u,t)}},
ji:function(a,b){return this.jh(a,b,null)},
ia:function(a){return new P.jM(this,a)},
i9:function(a){return this.ia(a,null)},
cb:function(a){return new P.jL(this,a)},
dG:function(a,b){return new P.jN(this,a,b)},
jc:function(a){if($.E===C.e)return a.$0()
return P.m1(null,null,this,a)},
el:function(a){return this.jc(a,null)},
jg:function(a,b){if($.E===C.e)return a.$1(b)
return P.m2(null,null,this,a,b)},
cJ:function(a,b){return this.jg(a,b,null,null)},
je:function(a,b,c){if($.E===C.e)return a.$2(b,c)
return P.o0(null,null,this,a,b,c)},
jd:function(a,b,c){return this.je(a,b,c,null,null,null)},
j9:function(a){return a},
ek:function(a){return this.j9(a,null,null,null)}}
P.jM.prototype={
$0:function(){return this.a.el(this.b)}}
P.jL.prototype={
$0:function(){return this.a.jf(this.b)}}
P.jN.prototype={
$1:function(a){return this.a.ji(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jH.prototype={
gU:function(a){var u=new P.e8(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
j:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.da(u==null?s.b=P.l2():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.da(t==null?s.c=P.l2():t,b)}else return s.fg(0,b)},
fg:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.l2()
u=s.dd(b)
t=r[u]
if(t==null)r[u]=[s.bR(b)]
else{if(s.di(t,b)>=0)return!1
t.push(s.bR(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hK(this.c,b)
else return this.hJ(0,b)},
hJ:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fq(r,b)
t=s.di(u,b)
if(t<0)return!1
s.dA(u.splice(t,1)[0])
return!0},
da:function(a,b){if(a[b]!=null)return!1
a[b]=this.bR(b)
return!0},
hK:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dA(u)
delete a[b]
return!0},
dk:function(){this.r=1073741823&this.r+1},
bR:function(a){var u,t=this,s=new P.jI(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dk()
return s},
dA:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dk()},
dd:function(a){return J.bD(a)&1073741823},
fq:function(a,b){return a[this.dd(b)]},
di:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.B(a[t].a,b))return t
return-1}}
P.jI.prototype={}
P.e8.prototype={
gL:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cd(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.h_.prototype={$im:1}
P.u.prototype={
gU:function(a){return new H.df(a,this.gl(a))},
H:function(a,b){return this.i(a,b)},
jl:function(a,b){var u,t,s=this,r=H.b([],[H.oi(s,a,"u",0)])
C.a.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
jk:function(a){return this.jl(a,!0)},
h:function(a){return P.kC(a,"[","]")}}
P.h2.prototype={}
P.h3.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:9}
P.aS.prototype={
M:function(a,b){var u,t
for(u=J.c9(this.gaQ(a));u.A();){t=u.gL(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.aH(this.gaQ(a))},
h:function(a){return P.ly(a)},
$iY:1}
P.jO.prototype={
h:function(a){return P.kC(this,"{","}")},
H:function(a,b){var u,t,s
P.lJ(b,"index")
for(u=P.ny(this,this.r),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.h(P.J(b,this,"index",null,t))},
$im:1}
P.e9.prototype={}
P.f8.prototype={}
P.fb.prototype={}
P.fs.prototype={}
P.iZ.prototype={}
P.j_.prototype={
ii:function(a){var u,t,s=P.lK(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jU(u)
if(t.fo(a,0,s)!==s)t.dC(C.b.aG(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nC(0,t.b,u.length)))}}
P.jU.prototype={
dC:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fo:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.aG(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aX(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dC(r,C.b.aX(a,p)))s=p}else if(r<=2047){q=n.b
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
P.by.prototype={}
P.aq.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aq&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.d.bw(u,30))&1073741823},
h:function(a){var u=this,t=P.mO(H.nd(u)),s=P.d0(H.nb(u)),r=P.d0(H.n7(u)),q=P.d0(H.n8(u)),p=P.d0(H.na(u)),o=P.d0(H.nc(u)),n=P.mP(H.n9(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.ba.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.ba&&this.a===b.a},
gJ:function(a){return C.d.gJ(this.a)},
h:function(a){var u,t,s,r=new P.fm(),q=this.a
if(q<0)return"-"+new P.ba(0-q).h(0)
u=r.$1(C.d.a9(q,6e7)%60)
t=r.$1(C.d.a9(q,1e6)%60)
s=new P.fl().$1(q%1e6)
return""+C.d.a9(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fl.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fm.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bb.prototype={}
P.cq.prototype={
h:function(a){return"Throw of null."}}
P.ax.prototype={
gbT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbS:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbT()+o+u
if(!q.a)return t
s=q.gbS()
r=P.kz(q.b)
return t+s+": "+r}}
P.bT.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fJ.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var u,t=this.b
if(typeof t!=="number")return t.Z()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iX.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.iU.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dB.prototype={
h:function(a){return"Bad state: "+this.a}}
P.fa.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kz(u)+"."}}
P.hA.prototype={
h:function(a){return"Out of Memory"},
$ibb:1}
P.dz.prototype={
h:function(a){return"Stack Overflow"},
$ibb:1}
P.fg.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e0.prototype={
h:function(a){return"Exception: "+this.a}}
P.fC.prototype={
h:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.e(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.b.bl(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.A.prototype={}
P.m.prototype={
gl:function(a){var u,t=this.gU(this)
for(u=0;t.A();)++u
return u},
H:function(a,b){var u,t,s
P.lJ(b,"index")
for(u=this.gU(this),t=0;u.A();){s=u.gL(u)
if(b===t)return s;++t}throw H.h(P.J(b,this,"index",null,t))},
h:function(a){return P.mS(this,"(",")")}}
P.fK.prototype={}
P.bP.prototype={$im:1}
P.Y.prototype={}
P.a8.prototype={
gJ:function(a){return P.O.prototype.gJ.call(this,this)},
h:function(a){return"null"}}
P.aw.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
m:function(a,b){return this===b},
gJ:function(a){return H.cs(this)},
h:function(a){return"Instance of '"+H.e(H.ct(this))+"'"},
toString:function(){return this.h(this)}}
P.kQ.prototype={}
P.at.prototype={}
P.v.prototype={}
P.bq.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.o.prototype={}
W.eR.prototype={
gl:function(a){return a.length}}
W.eT.prototype={
h:function(a){return String(a)}}
W.eU.prototype={
h:function(a){return String(a)}}
W.cR.prototype={}
W.bH.prototype={
cP:function(a,b,c){if(c!=null)return a.getContext(b,P.o8(c))
return a.getContext(b)},
eu:function(a,b){return this.cP(a,b,null)},
$ibH:1}
W.b8.prototype={
gl:function(a){return a.length}}
W.fc.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.ce.prototype={
gl:function(a){return a.length}}
W.fd.prototype={}
W.ap.prototype={}
W.aJ.prototype={}
W.fe.prototype={
gl:function(a){return a.length}}
W.ff.prototype={
gl:function(a){return a.length}}
W.fh.prototype={
gl:function(a){return a.length}}
W.fi.prototype={
h:function(a){return String(a)}}
W.d2.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[[P.as,P.aw]]},
$au:function(){return[[P.as,P.aw]]},
$im:1,
$am:function(){return[[P.as,P.aw]]}}
W.d3.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gat(a))+" x "+H.e(this.gao(a))},
m:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$ias)return!1
return a.left===u.gbE(b)&&a.top===u.gbI(b)&&this.gat(a)===u.gat(b)&&this.gao(a)===u.gao(b)},
gJ:function(a){return W.lY(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(this.gat(a)),C.c.gJ(this.gao(a)))},
gdH:function(a){return a.bottom},
gao:function(a){return a.height},
gbE:function(a){return a.left},
gcI:function(a){return a.right},
gbI:function(a){return a.top},
gat:function(a){return a.width},
$ias:1,
$aas:function(){return[P.aw]}}
W.fj.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[P.v]},
$au:function(){return[P.v]},
$im:1,
$am:function(){return[P.v]}}
W.fk.prototype={
gl:function(a){return a.length}}
W.jn.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
j:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.jk(this)
return new J.a4(u,u.length)},
$au:function(){return[W.a7]},
$am:function(){return[W.a7]}}
W.a7.prototype={
gcg:function(a){return new W.jn(a,a.children)},
gdK:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.as(u,t,s,r,[P.aw])},
h:function(a){return a.localName},
$ia7:1}
W.k.prototype={$ik:1}
W.f.prototype={
i1:function(a,b,c,d){if(c!=null)this.fa(a,b,c,!1)},
fa:function(a,b,c,d){return a.addEventListener(b,H.c1(c,1),!1)}}
W.bc.prototype={$ibc:1}
W.fw.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.bc]},
$au:function(){return[W.bc]},
$im:1,
$am:function(){return[W.bc]}}
W.fx.prototype={
gl:function(a){return a.length}}
W.fB.prototype={
gl:function(a){return a.length}}
W.bd.prototype={$ibd:1}
W.fF.prototype={
gl:function(a){return a.length}}
W.ci.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.N]},
$au:function(){return[W.N]},
$im:1,
$am:function(){return[W.N]}}
W.bK.prototype={
iR:function(a,b,c,d){return a.open(b,c,!0)},
$ibK:1}
W.fG.prototype={
$1:function(a){return a.responseText}}
W.fH.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.status
if(typeof q!=="number")return q.cO()
u=q>=200&&q<300
t=q>307&&q<400
q=u||q===0||q===304||t
s=this.b
if(q)s.ci(0,r)
else s.dL(a)}}
W.cj.prototype={}
W.be.prototype={$ibe:1,
gdP:function(a){return a.data}}
W.ck.prototype={$ick:1}
W.bM.prototype={$ibM:1}
W.h0.prototype={
h:function(a){return String(a)}}
W.hk.prototype={
gl:function(a){return a.length}}
W.hl.prototype={
i:function(a,b){return P.b1(a.get(b))},
M:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
gaQ:function(a){var u=H.b([],[P.v])
this.M(a,new W.hm(u))
return u},
gl:function(a){return a.size},
$iY:1,
$aY:function(){return[P.v,null]}}
W.hm.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hn.prototype={
i:function(a,b){return P.b1(a.get(b))},
M:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
gaQ:function(a){var u=H.b([],[P.v])
this.M(a,new W.ho(u))
return u},
gl:function(a){return a.size},
$iY:1,
$aY:function(){return[P.v,null]}}
W.ho.prototype={
$2:function(a,b){return this.a.push(a)}}
W.bk.prototype={$ibk:1}
W.hp.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.bk]},
$au:function(){return[W.bk]},
$im:1,
$am:function(){return[W.bk]}}
W.aL.prototype={$iaL:1}
W.jm.prototype={
gU:function(a){var u=this.a.childNodes
return new W.d6(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$au:function(){return[W.N]},
$am:function(){return[W.N]}}
W.N.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.eD(a):u},
$iN:1}
W.dp.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.N]},
$au:function(){return[W.N]},
$im:1,
$am:function(){return[W.N]}}
W.bm.prototype={$ibm:1,
gl:function(a){return a.length}}
W.hF.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.bm]},
$au:function(){return[W.bm]},
$im:1,
$am:function(){return[W.bm]}}
W.cu.prototype={$icu:1}
W.hW.prototype={
i:function(a,b){return P.b1(a.get(b))},
M:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
gaQ:function(a){var u=H.b([],[P.v])
this.M(a,new W.hX(u))
return u},
gl:function(a){return a.size},
$iY:1,
$aY:function(){return[P.v,null]}}
W.hX.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hZ.prototype={
gl:function(a){return a.length}}
W.bn.prototype={$ibn:1}
W.ia.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.bn]},
$au:function(){return[W.bn]},
$im:1,
$am:function(){return[W.bn]}}
W.bo.prototype={$ibo:1}
W.ib.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.bo]},
$au:function(){return[W.bo]},
$im:1,
$am:function(){return[W.bo]}}
W.bp.prototype={$ibp:1,
gl:function(a){return a.length}}
W.il.prototype={
i:function(a,b){return a.getItem(b)},
M:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaQ:function(a){var u=H.b([],[P.v])
this.M(a,new W.im(u))
return u},
gl:function(a){return a.length},
$iY:1,
$aY:function(){return[P.v,P.v]}}
W.im.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aY.prototype={$iaY:1}
W.br.prototype={$ibr:1}
W.aZ.prototype={$iaZ:1}
W.it.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aZ]},
$au:function(){return[W.aZ]},
$im:1,
$am:function(){return[W.aZ]}}
W.iu.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.br]},
$au:function(){return[W.br]},
$im:1,
$am:function(){return[W.br]}}
W.iF.prototype={
gl:function(a){return a.length}}
W.bs.prototype={$ibs:1}
W.bU.prototype={$ibU:1}
W.iI.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.bs]},
$au:function(){return[W.bs]},
$im:1,
$am:function(){return[W.bs]}}
W.iJ.prototype={
gl:function(a){return a.length}}
W.bt.prototype={}
W.iY.prototype={
h:function(a){return String(a)}}
W.jc.prototype={
gl:function(a){return a.length}}
W.bv.prototype={
gil:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ab("deltaY is not supported"))},
gik:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ab("deltaX is not supported"))},
$ibv:1}
W.cB.prototype={
hL:function(a,b){return a.requestAnimationFrame(H.c1(b,1))},
fm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jo.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.H]},
$au:function(){return[W.H]},
$im:1,
$am:function(){return[W.H]}}
W.dW.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
m:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$ias)return!1
return a.left===u.gbE(b)&&a.top===u.gbI(b)&&a.width===u.gat(b)&&a.height===u.gao(b)},
gJ:function(a){return W.lY(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(a.width),C.c.gJ(a.height))},
gao:function(a){return a.height},
gat:function(a){return a.width}}
W.jE.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.bd]},
$au:function(){return[W.bd]},
$im:1,
$am:function(){return[W.bd]}}
W.ef.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.N]},
$au:function(){return[W.N]},
$im:1,
$am:function(){return[W.N]}}
W.jP.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.bp]},
$au:function(){return[W.bp]},
$im:1,
$am:function(){return[W.bp]}}
W.jR.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aY]},
$au:function(){return[W.aY]},
$im:1,
$am:function(){return[W.aY]}}
W.jp.prototype={}
W.jq.prototype={
$1:function(a){return this.a.$1(a)}}
W.I.prototype={
gU:function(a){return new W.d6(a,this.gl(a))}}
W.d6.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.D(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gL:function(a){return this.d}}
W.dV.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.cG.prototype={}
W.cH.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.es.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
P.eC.prototype={$ibe:1,
gdP:function(a){return this.a}}
P.k5.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.fy.prototype={
gbW:function(){var u=this.b,t=H.ka(u,"u",0)
return new H.h4(new H.jd(u,new P.fz(),[t]),new P.fA(),[t,W.a7])},
j:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aH(this.gbW().a)},
i:function(a,b){var u=this.gbW()
return u.b.$1(J.lf(u.a,b))},
gU:function(a){var u=P.lw(this.gbW(),!1,W.a7)
return new J.a4(u,u.length)},
$au:function(){return[W.a7]},
$am:function(){return[W.a7]}}
P.fz.prototype={
$1:function(a){return!!J.S(a).$ia7}}
P.fA.prototype={
$1:function(a){return H.j(a,"$ia7")}}
P.jJ.prototype={
gcI:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.d(t)
return u+t},
gdH:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.d(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
m:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.S(b)
if(!!u.$ias){t=q.a
if(t==u.gbE(b)){s=q.b
if(s==u.gbI(b)){r=q.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.d(r)
if(t+r===u.gcI(b)){t=q.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.d(t)
u=s+t===u.gdH(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.bD(t),r=u.b,q=J.bD(r),p=u.c
if(typeof t!=="number")return t.D()
if(typeof p!=="number")return H.d(p)
p=C.d.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.D()
if(typeof t!=="number")return H.d(t)
t=C.d.gJ(r+t)
return P.nx(P.jG(P.jG(P.jG(P.jG(0,s),q),p),t))}}
P.as.prototype={
gbE:function(a){return this.a},
gbI:function(a){return this.b},
gat:function(a){return this.c},
gao:function(a){return this.d}}
P.bN.prototype={$ibN:1}
P.fX.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.i(a,b)},
$au:function(){return[P.bN]},
$im:1,
$am:function(){return[P.bN]}}
P.bQ.prototype={$ibQ:1}
P.hy.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.i(a,b)},
$au:function(){return[P.bQ]},
$im:1,
$am:function(){return[P.bQ]}}
P.hI.prototype={
gl:function(a){return a.length}}
P.iq.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.i(a,b)},
$au:function(){return[P.v]},
$im:1,
$am:function(){return[P.v]}}
P.n.prototype={
gcg:function(a){return new P.fy(a,new W.jm(a))}}
P.bV.prototype={$ibV:1}
P.iK.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.i(a,b)},
$au:function(){return[P.bV]},
$im:1,
$am:function(){return[P.bV]}}
P.e6.prototype={}
P.e7.prototype={}
P.ei.prototype={}
P.ej.prototype={}
P.et.prototype={}
P.eu.prototype={}
P.eA.prototype={}
P.eB.prototype={}
P.eW.prototype={
gl:function(a){return a.length}}
P.eX.prototype={
i:function(a,b){return P.b1(a.get(b))},
M:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
gaQ:function(a){var u=H.b([],[P.v])
this.M(a,new P.eY(u))
return u},
gl:function(a){return a.size},
$iY:1,
$aY:function(){return[P.v,null]}}
P.eY.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eZ.prototype={
gl:function(a){return a.length}}
P.bF.prototype={}
P.hz.prototype={
gl:function(a){return a.length}}
P.dT.prototype={}
P.du.prototype={
en:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.S(g)
if(!!u.$ibe&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.o9(g))
return}if(!!u.$ick&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.mE("Incorrect number or type of arguments"))},
em:function(a,b,c,d,e,f,g){return this.en(a,b,c,d,e,f,g,null,null,null)}}
P.id.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.J(b,a,null,null,null))
return P.b1(a.item(b))},
H:function(a,b){return this.i(a,b)},
$au:function(){return[[P.Y,,,]]},
$im:1,
$am:function(){return[[P.Y,,,]]}}
P.ep.prototype={}
P.eq.prototype={}
T.eS.prototype={
b6:function(a,b){return!0},
h:function(a){return"all"}}
T.d7.prototype={
b6:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].b6(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.dh.prototype={}
T.aW.prototype={
b6:function(a,b){return!this.eC(0,b)},
h:function(a){return"!["+this.cY(0)+"]"}}
T.i_.prototype={
eQ:function(a){var u,t
if(a.a.length<=0)throw H.h(P.l("May not create a Set with zero characters."))
u=new H.M([P.A,P.by])
for(t=new H.df(a,a.gl(a));t.A();)u.t(0,t.d,!0)
this.a=u},
b6:function(a,b){return this.a.dM(0,b)},
h:function(a){var u=this.a
return P.kV(new H.de(u,[H.b2(u,0)]))}}
R.dA.prototype={
v:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dK(this.a.P(0,b))
r.a=H.b([],[T.dh])
r.c=!1
this.c.push(r)
return r},
iu:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.b6(0,a))return r}return},
h:function(a){return this.b}}
R.dI.prototype={
h:function(a){var u=H.mj(this.b,"\n","\\n"),t=H.mj(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dJ.prototype={
h:function(a){return this.b}}
R.iG.prototype={
P:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dA(this,b)
u.c=H.b([],[R.dK])
this.a.t(0,b,u)}return u},
bk:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dJ(a)
u=P.v
t.c=new H.M([u,u])
this.b.t(0,a,t)}return t},
jm:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.dI]),l=this.c,k=[P.A],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.aX(a,s)
q=l.iu(r)
if(q==null){if(t==null){j.push(r)
p=P.kV(j)
throw H.h(P.l("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.kV(j)
o=l.d
n=o.c.i(0,p)
t=new R.dI(n==null?o.b:n,p,s)}++s}}}}
R.dK.prototype={
h:function(a){return this.b.b+": "+this.cY(0)}}
O.ay.prototype={
bm:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cS:function(a,b,c){this.b=b
this.c=a},
b9:function(a,b){return this.cS(a,null,b)},
aM:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
d1:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.a4(u,u.length)},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
j:function(a,b){var u,t,s=this,r=[H.ka(s,"ay",0)]
if(s.aM(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.d1(t,H.b([b],r))}},
aF:function(a,b){var u,t
if(this.aM(b)){u=this.a
t=u.length
C.a.aF(u,b)
this.d1(t,b)}},
$im:1}
O.cn.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.C():u},
aW:function(){var u=this.b
if(u!=null)u.C(null)},
gX:function(a){var u=this.a
if(u.length>0)return C.a.gcw(u)
else return V.bj()},
bH:function(a){var u=this.a
if(a==null)u.push(V.bj())
else u.push(a)
this.aW()},
aS:function(){var u=this.a
if(u.length>0){u.pop()
this.aW()}}}
E.f0.prototype={}
E.am.prototype={
al:function(a,b,c,d,e,f){var u,t=this
t.a=d
t.b=b
t.x=t.r=t.f=t.e=t.d=t.c=null
u=O.kw(E.am)
t.y=u
u.b9(t.giJ(),t.giM())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa_(0,e)
t.sY(f)
t.sbF(c)
if(a!=null)t.y.aF(0,a)},
d9:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a4(u,u.length);u.A();){t=u.d
if(t.f==null)t.d9()}},
sa_:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().R(0,s.gef())
u=s.c
if(u!=null)u.gq().j(0,s.gef())
t=new D.w("shape",r,s.c)
t.b=!0
s.ay(t)}},
sY:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gq().R(0,s.geh())
u=s.f
s.f=a
if(a!=null)a.gq().j(0,s.geh())
s.d9()
t=new D.w("technique",u,s.f)
t.b=!0
s.ay(t)}},
sbF:function(a){var u,t,s=this
if(!J.B(s.r,a)){u=s.r
if(u!=null)u.gq().R(0,s.ged())
if(a!=null)a.gq().j(0,s.ged())
s.r=a
t=new D.w("mover",u,a)
t.b=!0
s.ay(t)}},
aB:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.B(q,s.x)){u=s.x
s.x=q
t=new D.w("matrix",u,q)
t.b=!0
s.ay(t)}r=s.f
if(r!=null)r.aB(0,b)
for(r=s.y.a,r=new J.a4(r,r.length);r.A();)r.d.aB(0,b)},
aa:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)u.a.push(u.gX(u))
else u.a.push(t.k(0,u.gX(u)))
u.aW()
a.cF(r.f)
u=a.dy
s=(u&&C.a).gcw(u)
if(s!=null&&r.d!=null)s.cG(a,r)
for(u=r.y.a,u=new J.a4(u,u.length);u.A();)u.d.aa(a)
a.cE()
a.dx.aS()},
ay:function(a){var u=this.z
if(u!=null)u.C(a)},
af:function(){return this.ay(null)},
eg:function(a){this.e=null
this.ay(a)},
iP:function(){return this.eg(null)},
ei:function(a){this.ay(a)},
iQ:function(){return this.ei(null)},
ee:function(a){this.ay(a)},
iO:function(){return this.ee(null)},
ec:function(a){this.ay(a)},
iL:function(){return this.ec(null)},
iK:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.geb(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bI()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.af()},
iN:function(a,b){var u,t
for(u=b.gU(b),t=this.geb();u.A();)u.gL(u).gq().R(0,t)
this.af()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hO.prototype={
eO:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aq(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cn()
t=[V.aU]
u.a=H.b([],t)
u.gq().j(0,new E.hP(s))
s.cy=u
u=new O.cn()
u.a=H.b([],t)
u.gq().j(0,new E.hQ(s))
s.db=u
u=new O.cn()
u.a=H.b([],t)
u.gq().j(0,new E.hR(s))
s.dx=u
u=H.b([],[O.dD])
s.dy=u
u.push(null)
s.fr=new H.M([P.v,A.dv])},
gj8:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gX(s)
u=t.db
u=t.z=s.k(0,u.gX(u))
s=u}return s},
gej:function(){var u,t=this,s=t.ch
if(s==null){s=t.gj8()
u=t.dx
u=t.ch=s.k(0,u.gX(u))
s=u}return s},
cF:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gcw(u):a)},
cE:function(){var u=this.dy
if(u.length>1)u.pop()},
c9:function(a){var u=a.b
if(u.length===0)throw H.h(P.l("May not cache a shader with no name."))
if(this.fr.dM(0,u))throw H.h(P.l('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.t(0,u,a)}}
E.hP.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hQ.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hR.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dF.prototype={
d4:function(a){this.cH()},
d3:function(){return this.d4(null)},
giw:function(){var u,t=this,s=Date.now(),r=C.d.a9(P.lo(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aq(s,!1)
return u/r},
dt:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.k()
if(typeof r!=="number")return H.d(r)
u=C.c.b5(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.k()
t=C.c.b5(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kY(C.h,s.gjb())}},
cH:function(){if(!this.cx){this.cx=!0
var u=window
C.t.fm(u)
C.t.hL(u,W.m6(new E.iC(this),P.aw))}},
aa:function(a){var u,t,s,r,q,p=this
try{++p.db
p.cx=!1
p.dt()
if(a==null)a=p.d
if(a!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aq(r,!1)
s.y=P.lo(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aW()
r=s.db
C.a.sl(r.a,0)
r.aW()
r=s.dx
C.a.sl(r.a,0)
r.aW()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
a.aa(p.e)}}catch(q){u=H.a6(q)
t=H.bz(q)
P.eP("Error: "+H.e(u))
P.eP("Stack: "+H.e(t))
throw H.h(u)}},
ja:function(){return this.aa(null)}}
E.iC.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.ja()}}}
Z.dR.prototype={}
Z.cT.prototype={
S:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.a6(s)
t=P.l('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.h(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.cA.prototype={}
Z.bG.prototype={
aI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
S:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].S(a)},
ad:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aa:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.v],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.ak(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.v(p,", ")+"\nAttrs:   "+C.a.v(r,", ")}}
Z.bL.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ct(this.c))+"'")+"]"}}
Z.b_.prototype={
gcW:function(a){var u=this.a,t=(u&$.ao().a)!==0?3:0
if((u&$.b6().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=3
if((u&$.b7().a)!==0)t+=2
if((u&$.bC().a)!==0)t+=3
if((u&$.cO().a)!==0)t+=3
if((u&$.cP().a)!==0)t+=4
if((u&$.c8().a)!==0)++t
return(u&$.b4().a)!==0?t+4:t},
i5:function(a){var u,t=$.ao(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0)if(u===a)return t
return $.mz()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.v]),t=this.a
if((t&$.ao().a)!==0)u.push("Pos")
if((t&$.b6().a)!==0)u.push("Norm")
if((t&$.b5().a)!==0)u.push("Binm")
if((t&$.b7().a)!==0)u.push("Txt2D")
if((t&$.bC().a)!==0)u.push("TxtCube")
if((t&$.cO().a)!==0)u.push("Clr3")
if((t&$.cP().a)!==0)u.push("Clr4")
if((t&$.c8().a)!==0)u.push("Weight")
if((t&$.b4().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.v(u,"|")}}
D.f7.prototype={}
D.bI.prototype={
j:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
R:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.aH(s,b)
if(s===!0){s=t.a
u=(s&&C.a).R(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.aH(s,b)
if(s===!0){s=t.b
u=(s&&C.a).R(s,b)||u}return u},
C:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.X()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.M(P.lw(u,!0,{func:1,ret:-1,args:[D.X]}),new D.fu(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.X]}])
C.a.M(u,new D.fv(q))}return!0},
ck:function(){return this.C(null)},
b7:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}}}
D.fu.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fv.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.bf.prototype={}
D.bg.prototype={}
D.w.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
O.k_.prototype={
aA:function(a,b,c){return this.j6(a,b,!1)},
j6:function(a,b,c){var u=0,t=P.ag(null),s=this
var $async$aA=P.ai(function(d,e){if(d===1)return P.ad(e,t)
while(true)switch(u){case 0:u=2
return P.a3(s.az(H.b(a.split("\n"),[P.v]),b,!1),$async$aA)
case 2:return P.ae(null,t)}})
return P.af($async$aA,t)},
az:function(a,b,c){return this.j4(a,b,!1)},
j4:function(a,b,c){var u=0,t=P.ag(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$az=P.ai(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.Z()
u=1
break}if(!(m<l)){u=4
break}r=6
m=j
if(m>>>0!==m||m>=l){s=H.c(a,m)
u=1
break}u=9
return P.a3(o.ac(a[m],b,!1),$async$az)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.a6(i)
m=j
if(typeof m!=="number"){s=m.D()
u=1
break}throw H.h(P.l("Line "+H.e(m+1)+": "+H.e(n)))
u=8
break
case 5:u=2
break
case 8:m=j
if(typeof m!=="number"){s=m.D()
u=1
break}j=m+1
u=3
break
case 4:case 1:return P.ae(s,t)
case 2:return P.ad(q,t)}})
return P.af($async$az,t)},
ac:function(a,b,c){return this.j2(a,b,!1)},
j2:function(a,b,c){var u=0,t=P.ag(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g
var $async$ac=P.ai(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.lh(a,"#")
k=n
if(typeof k!=="number"){s=k.cO()
u=1
break}if(k>=0)a=J.li(a,0,n)
a=J.kq(a)
if(J.aH(a)<=0){u=1
break}m=O.m5(a)
if(J.aH(m)<1){u=1
break}case 7:switch(J.D(m,0)){case"newmtl":u=9
break
case"Ka":u=10
break
case"Kd":u=11
break
case"Ks":u=12
break
case"Ns":u=13
break
case"d":u=14
break
case"Tr":u=15
break
case"map_Ka":u=16
break
case"map_Kd":u=17
break
case"map_Ks":u=18
break
case"map_d":u=19
break
case"map_bump":u=20
break
case"bump":u=21
break
default:u=22
break}break
case 9:k=J.D(m,1)
j=O.a0()
o.c=j
o.b.t(0,k,j)
u=1
break
case 10:i=O.b0(J.D(m,1))
o.c.r.sp(0,V.kx(i))
u=1
break
case 11:i=O.b0(J.D(m,1))
o.c.x.sp(0,V.kx(i))
u=1
break
case 12:i=O.b0(J.D(m,1))
o.c.z.sp(0,V.kx(i))
u=1
break
case 13:i=O.b0(J.D(m,1))
k=i.length
if(k!==1)H.r(P.l("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.c(i,0)
u=1
break}j.sa8(i[0])
u=1
break
case 14:i=O.b0(J.D(m,1))
k=i.length
if(k!==1)H.r(P.l("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.c(i,0)
u=1
break}j.sai(0,i[0])
u=1
break
case 15:i=O.b0(J.D(m,1))
k=i.length
if(k!==1)H.r(P.l("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.c(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.d(k)
u=1
break}j.sai(0,1-k)
u=1
break
case 16:u=23
return P.a3(o.c0(J.D(m,1),b),$async$ac)
case 23:u=1
break
case 17:u=24
return P.a3(o.c1(J.D(m,1),b),$async$ac)
case 24:u=1
break
case 18:u=25
return P.a3(o.c2(J.D(m,1),b),$async$ac)
case 25:u=1
break
case 19:u=26
return P.a3(o.c_(J.D(m,1),b),$async$ac)
case 26:u=1
break
case 20:u=27
return P.a3(o.bs(J.D(m,1),b),$async$ac)
case 27:u=1
break
case 21:u=28
return P.a3(o.bs(J.D(m,1),b),$async$ac)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
g=q
l=H.a6(g)
k=P.l('Line: "'+H.e(a)+'": '+H.e(l))
throw H.h(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ae(s,t)
case 2:return P.ad(q,t)}})
return P.af($async$ac,t)},
c0:function(a,b){return this.hB(a,b)},
hB:function(a,b){var u=0,t=P.ag(null),s=this,r
var $async$c0=P.ai(function(c,d){if(c===1)return P.ad(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sag(s.a.aw(r))
return P.ae(null,t)}})
return P.af($async$c0,t)},
c1:function(a,b){return this.hD(a,b)},
hD:function(a,b){var u=0,t=P.ag(null),s=this,r
var $async$c1=P.ai(function(c,d){if(c===1)return P.ad(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sag(s.a.aw(r))
return P.ae(null,t)}})
return P.af($async$c1,t)},
c2:function(a,b){return this.hI(a,b)},
hI:function(a,b){var u=0,t=P.ag(null),s=this,r
var $async$c2=P.ai(function(c,d){if(c===1)return P.ad(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sag(s.a.aw(r))
return P.ae(null,t)}})
return P.af($async$c2,t)},
c_:function(a,b){return this.hA(a,b)},
hA:function(a,b){var u=0,t=P.ag(null),s=this,r
var $async$c_=P.ai(function(c,d){if(c===1)return P.ad(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sag(s.a.aw(r))
return P.ae(null,t)}})
return P.af($async$c_,t)},
bs:function(a,b){return this.hC(a,b)},
hC:function(a,b){var u=0,t=P.ag(null),s=this,r
var $async$bs=P.ai(function(c,d){if(c===1)return P.ad(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sag(s.a.aw(r))
return P.ae(null,t)}})
return P.af($async$bs,t)}}
O.eN.prototype={}
O.k0.prototype={
git:function(){var u=this.Q,t=u.y.a,s=t.length
if(s===1){if(0>=s)return H.c(t,0)
return t[0]}return u},
aA:function(a,b,c){return this.j7(a,b,!1)},
j7:function(a,b,c){var u=0,t=P.ag(null),s=this
var $async$aA=P.ai(function(d,e){if(d===1)return P.ad(e,t)
while(true)switch(u){case 0:u=2
return P.a3(s.az(H.b(a.split("\n"),[P.v]),b,!1),$async$aA)
case 2:return P.ae(null,t)}})
return P.af($async$aA,t)},
az:function(a,b,c){return this.j5(a,b,!1)},
j5:function(a,b,c){var u=0,t=P.ag(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$az=P.ai(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.Z()
u=1
break}if(!(m<l)){u=4
break}r=6
m=j
if(m>>>0!==m||m>=l){s=H.c(a,m)
u=1
break}u=9
return P.a3(o.ac(a[m],b,!1),$async$az)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.a6(i)
m=j
if(typeof m!=="number"){s=m.D()
u=1
break}throw H.h(P.l("Line "+H.e(m+1)+": "+H.e(n)))
u=8
break
case 5:u=2
break
case 8:m=j
if(typeof m!=="number"){s=m.D()
u=1
break}j=m+1
u=3
break
case 4:case 1:return P.ae(s,t)
case 2:return P.ad(q,t)}})
return P.af($async$az,t)},
ac:function(a,b,c){return this.j3(a,b,!1)},
j3:function(a,b,c){var u=0,t=P.ag(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$ac=P.ai(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.lh(a,"#")
k=n
if(typeof k!=="number"){s=k.cO()
u=1
break}if(k>=0)a=J.li(a,0,n)
a=J.kq(a)
if(J.aH(a)<=0){u=1
break}m=O.m5(a)
if(J.aH(m)<1){u=1
break}case 7:switch(J.D(m,0)){case"v":u=9
break
case"vt":u=10
break
case"vn":u=11
break
case"p":u=12
break
case"l":u=13
break
case"f":u=14
break
case"mtllib":u=15
break
case"usemtl":u=16
break
case"g":u=17
break
case"o":u=18
break
default:u=19
break}break
case 9:j=O.b0(J.D(m,1))
k=j.length
if(k<3)H.r(P.l("Positions must have at least 3 numbers."))
if(k>4)H.r(P.l("Positions must have at most than 4 numbers."))
if(k===4){if(3>=k){s=H.c(j,3)
u=1
break}i=j[3]
h=$.y()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-1)<h.a))H.r(P.l("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=k){s=H.c(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.c(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.c(j,2)
u=1
break}g=[h,g,j[2]]
g=new O.eN(new V.a_(g[0],g[1],g[2]))
g.b=H.b([],[F.aD])
i.push(g)
u=1
break
case 10:j=O.b0(J.D(m,1))
k=j.length
if(k<2)H.r(P.l("Textures must have at least 2 numbers."))
if(k>3)H.r(P.l("Textures must have at most than 3 numbers."))
if(k===3){if(2>=k){s=H.c(j,2)
u=1
break}i=j[2]
h=$.y()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-0)<h.a))H.r(P.l("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=k){s=H.c(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.c(j,1)
u=1
break}h=[h,j[1]]
i.push(new V.Z(h[0],h[1]))
u=1
break
case 11:j=O.b0(J.D(m,1))
k=j.length
if(k!==3)H.r(P.l("Normals must have exactly 3 numbers."))
i=o.d
if(0>=k){s=H.c(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.c(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.c(j,2)
u=1
break}i.push(new V.z(h,g,j[2]))
u=1
break
case 12:o.hH(J.D(m,1))
u=1
break
case 13:o.hF(J.D(m,1))
u=1
break
case 14:o.hE(J.D(m,1))
u=1
break
case 15:u=20
return P.a3(o.bt(J.D(m,1),b,!1),$async$ac)
case 20:u=1
break
case 16:k=J.D(m,1)
o.x=o.e.i(0,k)
o.bx()
u=1
break
case 17:o.r=J.D(m,1)
o.bx()
u=1
break
case 18:o.r=J.D(m,1)
o.bx()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.a6(e)
k=P.l('Line: "'+H.e(a)+'": '+H.e(l))
throw H.h(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ae(s,t)
case 2:return P.ad(q,t)}})
return P.af($async$ac,t)},
bx:function(){var u,t,s,r=this
if(r.z==null||r.y.a.c.length!==0){u=F.kU()
r.y=u
u=E.L(null,!0,null,"",u,null)
r.z=u
r.Q.y.j(0,u)
for(u=r.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)C.a.sl(u[s].b,0)}r.z.sY(r.x)
r.z.a=r.r},
bP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=", was out of range [-",g=null,f=a.split("/"),e=f.length
if(0>=e)return H.c(f,0)
u=P.la(f[0])
t=i.b.length
if(typeof u!=="number")return u.Z()
if(u<-t||u>t||u===0)throw H.h(P.l("The position index, "+u+h+t+".."+t+"] or 0."))
if(u<0)u=t+u+1;--u
if(e>1){s=f[1]
if(s!=null&&s.length>0){r=P.la(s)
q=i.c
t=q.length
if(typeof r!=="number")return r.Z()
if(r<-t||r>t||r===0)throw H.h(P.l("The texture index, "+r+h+t+".."+t+"] or 0."))
if(r<0)r=t+r+1
p=r-1
if(p<0||p>=t)return H.c(q,p)
o=q[p]}else o=g}else o=g
if(e>2){s=f[2]
if(s!=null&&s.length>0){n=P.la(s)
e=i.d
t=e.length
if(typeof n!=="number")return n.Z()
if(n<-t||n>t||n===0)throw H.h(P.l("The normal index, "+n+h+t+".."+t+"] or 0."))
if(n<0)n=t+n+1
q=n-1
if(q<0||q>=t)return H.c(e,q)
m=e[q]}else m=g}else m=g
e=i.b
if(u<0||u>=e.length)return H.c(e,u)
l=e[u]
for(e=l.b,q=e.length,k=0;k<e.length;e.length===q||(0,H.q)(e),++k){j=e[k]
if(J.B(j.y,o)&&J.B(j.r,m))return j}j=F.l0(g,g,g,g,g,g,g,g,0)
e=l.a
if(!J.B(j.f,e)){j.f=e
e=j.a
if(e!=null)e.af()}if(!J.B(j.y,o)){j.y=o
e=j.a
if(e!=null)e.af()}m=m==null?g:m.u(0,Math.sqrt(m.F(m)))
if(!J.B(j.r,m)){j.r=m
e=j.a
if(e!=null)e.af()}i.y.a.j(0,j)
l.b.push(j)
return j},
hH:function(a){var u,t=O.k3(a),s=H.b([],[F.aD]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.c(t,u)
s.push(this.bP(t[u]))}this.y.b.i3(s)},
hF:function(a){var u,t=O.k3(a),s=H.b([],[F.aD]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.c(t,u)
s.push(this.bP(t[u]))}this.y.c.i2(s)},
hE:function(a){var u,t=O.k3(a),s=H.b([],[F.aD]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.c(t,u)
s.push(this.bP(t[u]))}this.y.d.c8(s)},
bt:function(a,b,c){return this.hG(a,b,!1)},
hG:function(a,b,c){var u=0,t=P.ag(null),s=this,r
var $async$bt=P.ai(function(d,e){if(d===1)return P.ad(e,t)
while(true)switch(u){case 0:u=2
return P.a3(O.dk(b+"/"+a,s.a,!1),$async$bt)
case 2:r=e
s.e.aF(0,r)
return P.ae(null,t)}})
return P.af($async$bt,t)}}
O.hJ.prototype={}
X.cU.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cU))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.dc.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dc))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fP.prototype={
iW:function(a){this.d.j(0,a.a)
return!1},
iS:function(a){this.d.R(0,a.a)
return!1}}
X.dg.prototype={}
X.h1.prototype={
bd:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.k()
u=b.b
t=p.ch
if(typeof u!=="number")return u.k()
s=n.a
if(typeof s!=="number")return s.D()
n=n.b
if(typeof n!=="number")return n.D()
r=new V.Z(s+m*l,n+u*t)
t=p.a.gbA()
q=new X.aA(a,V.aX(),p.x,t,r)
q.b=!0
p.z=new P.aq(o,!1)
p.x=r
return q},
cD:function(a,b){this.r=a.a
return!1},
bj:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ev()
if(typeof u!=="number")return u.w()
this.r=(u&~t)>>>0
return!1},
bi:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bd(a,b))
return!0},
iX:function(a){return!1},
h9:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dg(c,r.a.gbA(),b)
s.b=!0
t.C(s)
r.y=new P.aq(u,!1)
r.x=V.aX()}}
X.bl.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bl))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aA.prototype={}
X.hq.prototype={
bU:function(a,b,c){var u=this,t=new P.aq(Date.now(),!1),s=u.a.gbA(),r=new X.aA(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cD:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bU(a,b,!0))
return!0},
bj:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ev()
if(typeof t!=="number")return t.w()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bU(a,b,!0))
return!0},
bi:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bU(a,b,!1))
return!0},
iY:function(a,b){return!1},
gdQ:function(){var u=this.b
return u==null?this.b=D.C():u},
gcM:function(){var u=this.c
return u==null?this.c=D.C():u},
gbh:function(){var u=this.d
return u==null?this.d=D.C():u}}
X.hH.prototype={}
X.cv.prototype={}
X.iH.prototype={
bd:function(a,b){var u=this,t=new P.aq(Date.now(),!1),s=a.length>0?a[0]:V.aX(),r=u.a.gbA(),q=new X.cv(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
iV:function(a){var u=this.b
if(u==null)return!1
u.C(this.bd(a,!0))
return!0},
iT:function(a){var u=this.c
if(u==null)return!1
u.C(this.bd(a,!0))
return!0},
iU:function(a){var u=this.d
if(u==null)return!1
u.C(this.bd(a,!1))
return!0},
gcX:function(a){var u=this.b
return u==null?this.b=D.C():u},
gdR:function(a){var u=this.c
return u==null?this.c=D.C():u},
gbh:function(){var u=this.d
return u==null?this.d=D.C():u}}
X.dO.prototype={
gbA:function(){var u=this.a,t=C.f.gdK(u).c
t.toString
u=C.f.gdK(u).d
u.toString
return V.lL(0,0,t,u)},
dg:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.dc(u,new X.bl(t,a.altKey,a.shiftKey))},
b1:function(a){a.shiftKey},
c7:function(a){a.shiftKey},
aN:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.n()
u=t.top
if(typeof r!=="number")return r.n()
return new V.Z(s-q,r-u)},
be:function(a){return new V.P(a.movementX,a.movementY)},
c3:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.Z])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.c.a3(r.pageX)
C.c.a3(r.pageY)
p=o.left
C.c.a3(r.pageX)
n.push(new V.Z(q-p,C.c.a3(r.pageY)-o.top))}return n},
aK:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cU(u,new X.bl(t,a.altKey,a.shiftKey))},
bX:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.n()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.n()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h1:function(a){this.f=!0},
fQ:function(a){this.f=!1},
fW:function(a){if(this.f&&this.bX(a))a.preventDefault()},
h7:function(a){var u
if(!this.f)return
u=this.dg(a)
this.b.iW(u)},
h5:function(a){var u
if(!this.f)return
u=this.dg(a)
this.b.iS(u)},
hb:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.b1(a)
if(r.x){u=r.aK(a)
t=r.be(a)
if(r.d.cD(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aK(a)
s=r.aN(a)
if(r.c.cD(u,s))a.preventDefault()},
hf:function(a){var u,t,s,r=this
r.b1(a)
u=r.aK(a)
if(r.x){t=r.be(a)
if(r.d.bj(u,t))a.preventDefault()
return}if(r.r)return
s=r.aN(a)
if(r.c.bj(u,s))a.preventDefault()},
h_:function(a){var u,t,s,r=this
if(!r.bX(a)){r.b1(a)
u=r.aK(a)
if(r.x){t=r.be(a)
if(r.d.bj(u,t))a.preventDefault()
return}if(r.r)return
s=r.aN(a)
if(r.c.bj(u,s))a.preventDefault()}},
hd:function(a){var u,t,s,r=this
r.b1(a)
u=r.aK(a)
if(r.x){t=r.be(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(r.r)return
s=r.aN(a)
if(r.c.bi(u,s))a.preventDefault()},
fY:function(a){var u,t,s,r=this
if(!r.bX(a)){r.b1(a)
u=r.aK(a)
if(r.x){t=r.be(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(r.r)return
s=r.aN(a)
if(r.c.bi(u,s))a.preventDefault()}},
hh:function(a){var u,t,s=this
s.b1(a)
u=new V.P((a&&C.r).gik(a),C.r.gil(a)).u(0,180)
if(s.x){if(s.d.iX(u))a.preventDefault()
return}if(s.r)return
t=s.aN(a)
if(s.c.iY(u,t))a.preventDefault()},
hj:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aK(s.y)
t=s.aN(s.y)
s.d.h9(u,t,r)}},
hz:function(a){var u,t=this
t.a.focus()
t.f=!0
t.c7(a)
u=t.c3(a)
if(t.e.iV(u))a.preventDefault()},
hv:function(a){var u
this.c7(a)
u=this.c3(a)
if(this.e.iT(u))a.preventDefault()},
hx:function(a){var u
this.c7(a)
u=this.c3(a)
if(this.e.iU(u))a.preventDefault()}}
D.cf.prototype={
bn:function(a){var u=this.r
if(u!=null)u.C(a)},
sp:function(a,b){var u,t,s=this
if(b==null)b=new V.p(1,1,1)
if(!s.c.m(0,b)){u=s.c
s.c=b
t=new D.w("color",u,b)
t.b=!0
s.bn(t)}},
$ian:1}
D.an.prototype={}
D.dd.prototype={
bn:function(a){var u=this.x
if(u!=null)u.C(a)},
dm:function(a){var u=this.y
if(u!=null)u.C(a)},
h8:function(){return this.dm(null)},
hl:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(s==null||this.fi(s))return!1}return!0},
fK:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdl(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q instanceof D.cf)this.e.push(q)
p=q.r
if(p==null){p=new D.bI()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bf()
u.b=!0
this.bn(u)},
hp:function(a,b){var u,t,s
for(u=b.gU(b),t=this.gdl();u.A();){s=u.gL(u)
C.a.R(this.e,s)
s.gq().R(0,t)}u=new D.bg()
u.b=!0
this.bn(u)},
fi:function(a){var u=C.a.aH(this.e,a)
return u},
$am:function(){return[D.an]},
$aay:function(){return[D.an]}}
D.hG.prototype={$ian:1}
D.ic.prototype={$ian:1}
V.p.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.p))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.al.prototype={
es:function(){var u=this
return new V.al(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.ft.prototype={}
V.di.prototype={
ah:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.di))return!1
u=b.a
t=r.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){var u,t,s,r,q=this,p=[P.K],o=V.c3(H.b([q.a,q.d,q.r],p),3,0),n=V.c3(H.b([q.b,q.e,q.x],p),3,0),m=V.c3(H.b([q.c,q.f,q.y],p),3,0)
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
V.aU.prototype={
ah:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
cv:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.k()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.d(r)
q=a9.c
if(typeof q!=="number")return q.k()
p=b0*r-q*t
o=a9.x
n=a9.d
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.k()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.k()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.k()
b=i*d-c*f
a=a9.dx
a0=a9.ch
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.y().a)return V.bj()
a6=1/a5
a7=-t
a8=-f
return V.aV((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
k:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.k()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=a9.d
p=b3.cx
o=b3.b
if(typeof o!=="number")return H.d(o)
n=b3.f
if(typeof n!=="number")return H.d(n)
m=b3.z
if(typeof m!=="number")return H.d(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.d(k)
j=b3.r
if(typeof j!=="number")return H.d(j)
i=b3.Q
if(typeof i!=="number")return H.d(i)
h=b3.db
g=b3.d
f=b3.x
e=b3.ch
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.k()
b=a9.f
if(typeof b!=="number")return b.k()
a=a9.r
if(typeof a!=="number")return a.k()
a0=a9.x
a1=a9.y
if(typeof a1!=="number")return a1.k()
a2=a9.z
if(typeof a2!=="number")return a2.k()
a3=a9.Q
if(typeof a3!=="number")return a3.k()
a4=a9.ch
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.aV(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
bJ:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.k()
p=k.f
if(typeof p!=="number")return p.k()
o=k.r
if(typeof o!=="number")return o.k()
n=k.y
if(typeof n!=="number")return n.k()
m=k.z
if(typeof m!=="number")return m.k()
l=k.Q
if(typeof l!=="number")return l.k()
return new V.z(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
cL:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.k()
p=k.f
if(typeof p!=="number")return p.k()
o=k.r
if(typeof o!=="number")return o.k()
n=k.y
if(typeof n!=="number")return n.k()
m=k.z
if(typeof m!=="number")return m.k()
l=k.Q
if(typeof l!=="number")return l.k()
return new V.a_(j*i+u*t+s*r+k.d,q*i+p*t+o*r+k.x,n*i+m*t+l*r+k.ch)},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aU))return!1
u=b.a
t=r.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-r.x)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-r.ch)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
h:function(a){return this.N()},
G:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.c3(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.c3(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.c3(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.c3(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.G("")}}
V.Z.prototype={
n:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.d(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
return new V.Z(s-r,u-t)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.a_.prototype={
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.d(r)
return new V.a_(q-p,u-t,s-r)},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=r.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.aM.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aM))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.dt.prototype={
gaJ:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dt))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.P.prototype={
cz:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
return s*r+u*t},
k:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.k()
u=this.b
if(typeof u!=="number")return u.k()
return new V.P(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.lU
return u==null?$.lU=new V.P(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.P(u/b,t/b)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.z.prototype={
cz:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.d(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
return q*p+u*t+s*r},
bg:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.d(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=a.a
if(typeof s!=="number")return H.d(s)
r=this.a
if(typeof r!=="number")return r.k()
return new V.z(q*p-u*t,u*s-r*p,r*t-q*s)},
D:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.D()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.D()
if(typeof r!=="number")return H.d(r)
return new V.z(q+p,u+t,s+r)},
O:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.O()
u=this.b
if(typeof u!=="number")return u.O()
t=this.c
if(typeof t!=="number")return t.O()
return new V.z(-s,-u,-t)},
u:function(a,b){var u,t,s
if(Math.abs(b-0)<$.y().a)return V.dQ()
u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
s=this.c
if(typeof s!=="number")return s.u()
return new V.z(u/b,t/b,s/b)},
e8:function(){var u=this.a,t=$.y()
t.toString
if(typeof u!=="number")return H.d(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=r.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
U.f9.prototype={
bQ:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.oC(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gq:function(){var u=this.y
return u==null?this.y=D.C():u},
W:function(a){var u=this.y
if(u!=null)u.C(a)},
scN:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.w("wrap",u,b)
u.b=!0
this.W(u)}},
scB:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.y().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bQ(u)}s=new D.w("maximumLocation",s,t.b)
s.b=!0
t.W(s)}},
scC:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.y().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bQ(u)}s=new D.w("minimumLocation",s,t.c)
s.b=!0
t.W(s)}},
sap:function(a,b){var u,t=this
b=t.bQ(b)
u=t.d
if(!(Math.abs(u-b)<$.y().a)){t.d=b
u=new D.w("location",u,b)
u.b=!0
t.W(u)}},
se9:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.y().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.w("maximumVelocity",r,a)
r.b=!0
s.W(r)}},
sa4:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.w("velocity",t,a)
t.b=!0
u.W(t)}},
sdO:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.y().a)){this.x=a
u=new D.w("dampening",u,a)
u.b=!0
this.W(u)}},
aB:function(a,b){var u,t,s,r=this,q=r.f,p=$.y().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sap(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.y().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sa4(u)}}}
U.cZ.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.C():u},
sX:function(a,b){var u,t,s,r=this
if(b==null)b=V.bj()
if(!J.B(r.a,b)){u=r.a
r.a=b
t=new D.w("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.C(t)}},
bK:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cZ))return!1
return J.B(this.a,b.a)},
h:function(a){return"Constant: "+this.a.G("          ")}}
U.ch.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.C():u},
W:function(a){var u=this.e
if(u!=null)u.C(a)},
aE:function(){return this.W(null)},
fI:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbr(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bf()
u.b=!0
this.W(u)},
hn:function(a,b){var u,t
for(u=b.gU(b),t=this.gbr();u.A();)u.gL(u).gq().R(0,t)
u=new D.bg()
u.b=!0
this.W(u)},
bK:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.Z()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a4(r,r.length),u=null;r.A();){q=r.d
if(q!=null){t=q.bK(0,b,c)
if(t!=null)u=u==null?t:t.k(0,u)}}s.f=u==null?V.bj():u
r=s.e
if(r!=null)r.b7(0)}return s.f},
m:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ch))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.B(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$am:function(){return[U.aB]},
$aay:function(){return[U.aB]},
$iaB:1}
U.aB.prototype={}
U.dP.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.C():u},
W:function(a){var u=this.fx
if(u!=null)u.C(a)},
aE:function(){return this.W(null)},
ca:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdQ().j(0,s.geU())
s.a.c.gbh().j(0,s.geW())
s.a.c.gcM().j(0,s.geY())
u=s.a.d
t=u.f
u=t==null?u.f=D.C():t
u.j(0,s.gft())
u=s.a.d
t=u.d
u=t==null?u.d=D.C():t
u.j(0,s.gfv())
u=s.a.e
u.gcX(u).j(0,s.gf3())
s.a.e.gbh().j(0,s.gf1())
u=s.a.e
u.gdR(u).j(0,s.gf_())
return!0},
aD:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.P(u,t)},
eV:function(a){var u=this
H.j(a,"$iaA")
if(!J.B(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eX:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaA")
if(!n.cx)return
if(n.ch){u=a.d.n(0,a.y)
u=new V.P(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.n(0,a.y)
u=n.aD(new V.P(t.a,t.b).k(0,2).u(0,u.gaJ()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sa4(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sa4(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aD(new V.P(s.a,s.b).k(0,2).u(0,u.gaJ()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sap(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sap(0,-p*q+s)
n.b.sa4(0)
n.c.sa4(0)
t=t.n(0,a.z)
n.dx=n.aD(new V.P(t.a,t.b).k(0,2).u(0,u.gaJ()))}n.aE()},
eZ:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sa4(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sa4(-t*10*u)
r.aE()}},
fu:function(a){var u=this
if(H.j(a,"$idg").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fw:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaA")
if(!J.B(n.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aD(new V.P(s.a,s.b).k(0,2).u(0,u.gaJ()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sap(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sap(0,-p*q+s)
n.b.sa4(0)
n.c.sa4(0)
t=t.n(0,a.z)
n.dx=n.aD(new V.P(t.a,t.b).k(0,2).u(0,u.gaJ()))
n.aE()},
f4:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f2:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$icv")
if(!n.cx)return
if(n.ch){u=a.d.n(0,a.y)
u=new V.P(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.n(0,a.y)
u=n.aD(new V.P(t.a,t.b).k(0,2).u(0,u.gaJ()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sa4(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sa4(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aD(new V.P(s.a,s.b).k(0,2).u(0,u.gaJ()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sap(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sap(0,-p*q+s)
n.b.sa4(0)
n.c.sa4(0)
t=t.n(0,a.z)
n.dx=n.aD(new V.P(t.a,t.b).k(0,2).u(0,u.gaJ()))}n.aE()},
f0:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sa4(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sa4(-t*10*u)
r.aE()}},
bK:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.Z()
if(s<r){t.dy=r
u=b.y
t.c.aB(0,u)
t.b.aB(0,u)
t.fr=V.lz(t.b.d).k(0,V.kL(t.c.d))}return t.fr},
$iaB:1}
M.cY.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.C():u},
a0:function(a){var u=this.r
if(u!=null)u.C(a)},
bb:function(){return this.a0(null)},
hr:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga5(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bf()
u.b=!0
this.a0(u)},
ht:function(a,b){var u,t
for(u=b.gU(b),t=this.ga5();u.A();)u.gL(u).gq().R(0,t)
u=new D.bg()
u.b=!0
this.a0(u)},
aa:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a4(u,u.length);u.A();){t=u.d
if(t!=null)t.aa(a)}s.f=!1},
$am:function(){return[M.aC]},
$aay:function(){return[M.aC]},
$iaC:1}
M.d_.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.C():u},
a0:function(a){var u=this.r
if(u!=null)u.C(a)},
bb:function(){return this.a0(null)},
sb4:function(a){var u,t,s=this
if(a==null)a=new X.fI()
u=s.b
if(u!==a){if(u!=null)u.gq().R(0,s.ga5())
t=s.b
s.b=a
a.gq().j(0,s.ga5())
u=new D.w("camera",t,s.b)
u.b=!0
s.a0(u)}},
sb8:function(a,b){var u,t,s=this
if(b==null)b=X.kB(null)
u=s.c
if(u!==b){if(u!=null)u.gq().R(0,s.ga5())
t=s.c
s.c=b
b.gq().j(0,s.ga5())
u=new D.w("target",t,s.c)
u.b=!0
s.a0(u)}},
sY:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().R(0,t.ga5())
u=t.d
t.d=a
if(a!=null)a.gq().j(0,t.ga5())
s=new D.w("technique",u,t.d)
s.b=!0
t.a0(s)}},
aa:function(a){var u=this
a.cF(u.d)
u.c.S(a)
u.b.S(a)
u.e.aB(0,a)
u.e.aa(a)
u.b.ad(a)
u.c.toString
a.cE()},
$iaC:1}
M.d4.prototype={
a0:function(a){var u=this.y
if(u!=null)u.C(a)},
bb:function(){return this.a0(null)},
fS:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga5(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bI()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bf()
u.b=!0
this.a0(u)},
fU:function(a,b){var u,t
for(u=b.gU(b),t=this.ga5();u.A();)u.gL(u).gq().R(0,t)
u=new D.bg()
u.b=!0
this.a0(u)},
sb4:function(a){var u,t,s=this
if(a==null)a=X.lD(null)
u=s.b
if(u!==a){if(u!=null)u.gq().R(0,s.ga5())
t=s.b
s.b=a
a.gq().j(0,s.ga5())
u=new D.w("camera",t,s.b)
u.b=!0
s.a0(u)}},
sb8:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().R(0,t.ga5())
u=t.c
t.c=b
b.gq().j(0,t.ga5())
s=new D.w("target",u,t.c)
s.b=!0
t.a0(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.C():u},
aa:function(a){var u,t=this
a.cF(t.d)
t.c.S(a)
t.b.S(a)
for(u=t.e.a,u=new J.a4(u,u.length);u.A();)u.d.aB(0,a)
for(u=t.e.a,u=new J.a4(u,u.length);u.A();)u.d.aa(a)
t.b.toString
a.cy.aS()
a.db.aS()
t.c.ad(a)
a.cE()},
$iaC:1}
M.aC.prototype={}
A.cQ.prototype={}
A.eV.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ir:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Q.prototype={
gai:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
m:function(a,b){if(b==null)return!1
if(!(b instanceof A.Q))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.h6.prototype={
eK:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bq("")
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
A.nS(c0,u)
A.nU(c0,u)
A.nT(c0,u)
A.nW(c0,u)
A.nX(c0,u)
A.nV(c0,u)
A.nY(c0,u)
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
b5.ct(0,s.charCodeAt(0)==0?s:s,A.nR(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.j(b5.y.I(0,"invViewMat"),"$iaa")
if(t)b5.dy=H.j(b5.y.I(0,"objMat"),"$iaa")
if(r)b5.fr=H.j(b5.y.I(0,"viewObjMat"),"$iaa")
b5.fy=H.j(b5.y.I(0,"projViewObjMat"),"$iaa")
if(c0.ry)b5.k1=H.j(b5.y.I(0,"txt2DMat"),"$icx")
if(c0.x1)b5.k2=H.j(b5.y.I(0,"txtCubeMat"),"$iaa")
if(c0.x2)b5.k3=H.j(b5.y.I(0,"colorMat"),"$iaa")
b5.r1=H.b([],[A.aa])
t=c0.y2
if(t>0){b5.k4=b5.y.I(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.r(P.l(b7+q+b8))
s.push(H.j(m,"$iaa"))}}t=c0.a
if(t.a)b5.r2=H.j(b5.y.I(0,"emissionClr"),"$iG")
if(t.b)b5.rx=H.j(b5.y.I(0,"emissionTxt"),"$ia2")
t=c0.b
if(t.a)b5.x1=H.j(b5.y.I(0,"ambientClr"),"$iG")
if(t.b)b5.x2=H.j(b5.y.I(0,"ambientTxt"),"$ia2")
t=c0.c
if(t.a)b5.y2=H.j(b5.y.I(0,"diffuseClr"),"$iG")
if(t.b)b5.aP=H.j(b5.y.I(0,"diffuseTxt"),"$ia2")
t=c0.d
if(t.a)b5.dT=H.j(b5.y.I(0,"invDiffuseClr"),"$iG")
if(t.b)b5.dU=H.j(b5.y.I(0,"invDiffuseTxt"),"$ia2")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dX=H.j(b5.y.I(0,"shininess"),"$iV")
if(s)b5.dV=H.j(b5.y.I(0,"specularClr"),"$iG")
if(t.b)b5.dW=H.j(b5.y.I(0,"specularTxt"),"$ia2")}if(c0.f.b)b5.dY=H.j(b5.y.I(0,"bumpTxt"),"$ia2")
if(c0.cy){b5.dZ=H.j(b5.y.I(0,"envSampler"),"$ibu")
t=c0.r
if(t.a)b5.e_=H.j(b5.y.I(0,"reflectClr"),"$iG")
if(t.b)b5.e0=H.j(b5.y.I(0,"reflectTxt"),"$ia2")
t=c0.x
s=t.a
if(s||t.b||!1){b5.e1=H.j(b5.y.I(0,"refraction"),"$iV")
if(s)b5.e2=H.j(b5.y.I(0,"refractClr"),"$iG")
if(t.b)b5.e3=H.j(b5.y.I(0,"refractTxt"),"$ia2")}}t=c0.y
if(t.a)b5.e4=H.j(b5.y.I(0,"alpha"),"$iV")
if(t.b)b5.e5=H.j(b5.y.I(0,"alphaTxt"),"$ia2")
t=P.A
s=[t,A.dM]
b5.cl=new H.M(s)
b5.cm=new H.M([t,[P.bP,A.cw]])
b5.cn=new H.M(s)
b5.co=new H.M([t,[P.bP,A.cy]])
b5.cp=new H.M(s)
b5.cq=new H.M([t,[P.bP,A.cz]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.cw],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.w()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.r(P.l(b7+g+b8))
H.j(m,"$iG")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.r(P.l(b7+g+b8))
H.j(f,"$iG")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.r(P.l(b7+g+b8))
H.j(e,"$iG")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.r(P.l(b7+g+b8))
H.j(m,"$iG")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.r(P.l(b7+g+b8))
H.j(f,"$iG")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.r(P.l(b7+o+b8))
H.j(e,"$ia2")
a=e}else a=b6
h.push(new A.cw(b,c,d,m,f,a))}b5.cm.t(0,j,h)
q=b5.cl
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.r(P.l(b7+o+b8))
q.t(0,j,m)}for(t=c0.Q,s=t.length,r=[A.cy],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.r(P.l(b7+o+b8))
H.j(m,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.r(P.l(b7+o+b8))
H.j(f,"$iG")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.r(P.l(b7+o+b8))
H.j(e,"$iG")
if(typeof j!=="number")return j.w()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.r(P.l(b7+o+b8))
H.j(a0,"$icx")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.r(P.l(b7+o+b8))
H.j(a0,"$ibu")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.r(P.l(b7+o+b8))
H.j(a0,"$ibu")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.r(P.l(b7+o+b8))
H.j(a2,"$ibW")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.r(P.l(b7+o+b8))
H.j(a0,"$iV")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.r(P.l(b7+o+b8))
H.j(a2,"$iV")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.r(P.l(b7+o+b8))
H.j(a5,"$iV")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.cy(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.co.t(0,j,h)
q=b5.cn
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.r(P.l(b7+o+b8))
q.t(0,j,m)}for(t=c0.ch,s=t.length,r=[A.cz],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.r(P.l(b7+o+b8))
H.j(m,"$iG")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.r(P.l(b7+o+b8))
H.j(f,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.r(P.l(b7+o+b8))
H.j(e,"$iG")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.r(P.l(b7+o+b8))
H.j(a0,"$iG")
if(typeof j!=="number")return j.w()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.r(P.l(b7+o+b8))
H.j(a2,"$iG")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.r(P.l(b7+o+b8))
H.j(a5,"$iG")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.r(P.l(b7+o+b8))
H.j(a9,"$iV")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.r(P.l(b7+o+b8))
H.j(b0,"$iV")
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
if(a2==null)H.r(P.l(b7+g+b8))
H.j(a2,"$ibW")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.r(P.l(b7+g+b8))
H.j(a2,"$iV")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.r(P.l(b7+g+b8))
H.j(a5,"$iV")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.r(P.l(b7+g+b8))
H.j(a2,"$iV")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.r(P.l(b7+g+b8))
H.j(a5,"$iV")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.r(P.l(b7+g+b8))
H.j(a9,"$iV")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.r(P.l(b7+g+b8))
H.j(a2,"$ia2")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.r(P.l(b7+o+b8))
H.j(a2,"$ia2")
a3=a2}else a3=b6
h.push(new A.cz(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cq.t(0,j,h)
q=b5.cp
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.r(P.l(b7+o+b8))
q.t(0,j,m)}}},
au:function(a,b){if(b!=null&&b.d)a.ez(b)},
hP:function(a,b){if(b!=null&&b.d>=6)a.cU(b)}}
A.d1.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.ds.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dy.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.h9.prototype={
h:function(a){return this.aP}}
A.cw.prototype={}
A.cy.prototype={}
A.cz.prototype={}
A.dv.prototype={
bN:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ct:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dh(b,35633)
r.f=r.dh(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.r(P.l("Failed to link shader: "+H.e(s)))}r.hQ()
r.hS()},
S:function(a){a.a.useProgram(this.r)
this.x.ir()},
dh:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.l("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
hQ:function(){var u,t,s,r=this,q=H.b([],[A.cQ]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cQ(p,t.name,s))}r.x=new A.eV(q)},
hS:function(){var u,t,s,r=this,q=H.b([],[A.dL]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.ij(t.type,t.size,t.name,s))}r.y=new A.iS(q)},
aY:function(a,b,c){var u=this.a
if(a===1)return new A.dM(u,b,c)
else return A.l_(u,this.r,b,a,c)},
fj:function(a,b,c){var u=this.a
if(a===1)return new A.a2(u,b,c)
else return A.l_(u,this.r,b,a,c)},
fk:function(a,b,c){var u=this.a
if(a===1)return new A.bu(u,b,c)
else return A.l_(u,this.r,b,a,c)},
by:function(a,b){return new P.e0(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
ij:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aY(b,c,d)
case 5121:return u.aY(b,c,d)
case 5122:return u.aY(b,c,d)
case 5123:return u.aY(b,c,d)
case 5124:return u.aY(b,c,d)
case 5125:return u.aY(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.iO(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.bW(u.a,c,d)
case 35667:return new A.iP(u.a,c,d)
case 35668:return new A.iQ(u.a,c,d)
case 35669:return new A.iR(u.a,c,d)
case 35674:return new A.iT(u.a,c,d)
case 35675:return new A.cx(u.a,c,d)
case 35676:return new A.aa(u.a,c,d)
case 35678:return u.fj(b,c,d)
case 35680:return u.fk(b,c,d)
case 35670:throw H.h(u.by("BOOL",c))
case 35671:throw H.h(u.by("BOOL_VEC2",c))
case 35672:throw H.h(u.by("BOOL_VEC3",c))
case 35673:throw H.h(u.by("BOOL_VEC4",c))
default:throw H.h(P.l("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.i7.prototype={}
A.i9.prototype={}
A.dL.prototype={}
A.iS.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
I:function(a,b){var u=this.i(0,b)
if(u==null)throw H.h(P.l("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dM.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iP.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iQ.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iR.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iN.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iO.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bW.prototype={
ex:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iT.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cx.prototype={
ak:function(a){var u=new Float32Array(H.cK(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.aa.prototype={
ak:function(a){var u=new Float32Array(H.cK(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a2.prototype={
ez:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bu.prototype={
cU:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.k6.prototype={
$1:function(a){return 1}}
F.bJ.prototype={
fc:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dQ()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.e8())return
return s.u(0,Math.sqrt(s.F(s)))},
fe:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.n(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.F(r)))
r=t.n(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.bg(r.u(0,Math.sqrt(r.F(r))))
return r.u(0,Math.sqrt(r.F(r)))},
cf:function(){var u,t=this
if(t.d!=null)return!0
u=t.fc()
if(u==null){u=t.fe()
if(u==null)return!1}t.d=u
t.a.a.af()
return!0},
fb:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dQ()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.e8())return
return s.u(0,Math.sqrt(s.F(s)))},
fd:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.n()
if(typeof k!=="number")return H.d(k)
r=l-k
if(Math.abs(r-0)<$.y().a){l=d.n(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.F(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.n()
if(typeof t!=="number")return H.d(t)
if(l-t<0)q=q.O(0)}else{k=u.b
if(typeof k!=="number")return H.d(k)
p=(l-k)/r
k=d.n(0,g)
l=k.a
if(typeof l!=="number")return l.k()
i=k.b
if(typeof i!=="number")return i.k()
k=k.c
if(typeof k!=="number")return k.k()
h=g.a
if(typeof h!=="number")return H.d(h)
f=g.b
if(typeof f!=="number")return H.d(f)
e=g.c
if(typeof e!=="number")return H.d(e)
e=new V.a_(l*p+h,i*p+f,k*p+e).n(0,j)
e=new V.z(e.a,e.b,e.c)
q=e.u(0,Math.sqrt(e.F(e)))
s=s.a
t=t.a
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.d(t)
u=u.a
if(typeof u!=="number")return H.d(u)
if((s-t)*p+t-u<0)q=q.O(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.F(l)))
l=o.bg(q)
l=l.u(0,Math.sqrt(l.F(l))).bg(o)
q=l.u(0,Math.sqrt(l.F(l)))}return q},
cd:function(){var u,t=this
if(t.e!=null)return!0
u=t.fb()
if(u==null){u=t.fd()
if(u==null)return!1}t.e=u
t.a.a.af()
return!0},
m:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.ar(J.ak(s.e),0)+", "+C.b.ar(J.ak(t.b.e),0)+", "+C.b.ar(J.ak(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
N:function(){return this.G("")}}
F.bO.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.ar(J.ak(u.e),0)+", "+C.b.ar(J.ak(this.b.e),0)},
N:function(){return this.G("")}}
F.bR.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ar(J.ak(u.e),0)},
N:function(){return this.G("")}}
F.i0.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.C():u},
b3:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.b3()||!1
if(!t.a.b3())u=!1
s=t.e
if(s!=null)s.b7(0)
return u},
cc:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ao()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b6().a)!==0)++s
if((t&$.b5().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.cO().a)!==0)++s
if((t&$.cP().a)!==0)++s
if((t&$.c8().a)!==0)++s
if((t&$.b4().a)!==0)++s
r=a4.gcW(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cT])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.i5(m)
k=l.gcW(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.cT(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].iG(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cK(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bG(new Z.dR(a1,d),o,a4)
c.b=H.b([],[Z.bL])
if(a0.b.b.length!==0){b=H.b([],[P.A])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.aO()
b.push(t.e)}a=Z.l1(u,34963,b)
c.b.push(new Z.bL(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.A])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.aO()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.aO()
b.push(t.e)}a=Z.l1(u,34963,b)
c.b.push(new Z.bL(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.A])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.aO()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.aO()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.aO()
b.push(t.e)}a=Z.l1(u,34963,b)
c.b.push(new Z.bL(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.b([],[P.v])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.a.v(s,"\n")},
af:function(){var u=this.e
if(u!=null)u.C(null)}}
F.i1.prototype={
c8:function(a){var u,t,s,r,q,p,o,n=H.b([],[F.bJ]),m=a.length
if(m>0){u=a[0]
for(t=this.a,s=2;s<m;++s){r=s-1
q=a.length
if(r>=q)return H.c(a,r)
r=a[r]
if(s>=q)return H.c(a,s)
q=a[s]
t.a.j(0,u)
t.a.j(0,r)
t.a.j(0,q)
p=new F.bJ()
o=u.a
if(o==null)H.r(P.l("May not create a face with a first vertex which is not attached to a shape."))
if(o!=r.a||o!=q.a)H.r(P.l("May not create a face with vertices attached to different shapes."))
p.a=u
u.d.b.push(p)
p.b=r
r.d.c.push(p)
p.c=q
q.d.d.push(p)
p.a.a.d.b.push(p)
r=p.a.a.e
if(r!=null)r.C(null)
n.push(p)}}return n},
gl:function(a){return this.b.length},
b3:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].cf())s=!1
return s},
ce:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].cd())s=!1
return s},
h:function(a){return this.N()},
G:function(a){var u,t,s,r=H.b([],[P.v])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(a))
return C.a.v(r,"\n")},
N:function(){return this.G("")}}
F.i2.prototype={
i2:function(a){var u,t,s,r,q=H.b([],[F.bO]),p=a.length
for(u=this.a,t=1;t<p;t+=2){s=t-1
r=a.length
if(s>=r)return H.c(a,s)
s=a[s]
if(t>=r)return H.c(a,t)
r=a[t]
u.a.j(0,s)
u.a.j(0,r)
q.push(F.mW(s,r))}return q},
gl:function(a){return this.b.length},
h:function(a){return this.N()},
G:function(a){var u,t,s=H.b([],[P.v]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.a.v(s,"\n")},
N:function(){return this.G("")}}
F.i3.prototype={
i3:function(a){var u,t,s,r,q=H.b([],[F.bR]),p=a.length
for(u=this.a,t=0;t<p;++t){if(t>=a.length)return H.c(a,t)
s=a[t]
u.a.j(0,s)
r=new F.bR()
if(s.a==null)H.r(P.l("May not create a point with a vertex which is not attached to a shape."))
r.a=s
s.b.b.push(r)
r.a.a.b.b.push(r)
s=r.a.a.e
if(s!=null)s.C(null)
q.push(r)}return q},
gl:function(a){return this.b.length},
h:function(a){return this.N()},
G:function(a){var u,t,s,r=H.b([],[P.v])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(a))
return C.a.v(r,"\n")},
N:function(){return this.G("")}}
F.aD.prototype={
iG:function(a){var u,t,s=this
if(a.m(0,$.ao())){u=s.f
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.b6())){u=s.r
t=[P.K]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.b5())){u=s.x
t=[P.K]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.b7())){u=s.y
t=[P.K]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.m(0,$.bC())){u=s.z
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.cO())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.cP())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.m(0,$.c8()))return H.b([s.ch],[P.K])
else if(a.m(0,$.b4())){u=s.cx
t=[P.K]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.K])},
cf:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dQ()
t.d.M(0,new F.jb(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.af()
s=t.a.e
if(s!=null)s.b7(0)}return!0},
cd:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dQ()
t.d.M(0,new F.ja(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.af()
s=t.a.e
if(s!=null)s.b7(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){var u,t,s=this,r="-",q=H.b([],[P.v])
q.push(C.b.ar(J.ak(s.e),0))
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
q.push(V.F(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.v(q,", ")
return a+"{"+t+"}"},
N:function(){return this.G("")}}
F.jb.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.ja.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.j4.prototype={
aO:function(){},
j:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.l("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.af()
return!0},
dE:function(a,b,c,d,e,f,g){var u=F.l0(a,null,b,c,d,e,f,g,0)
this.j(0,u)
return u},
bz:function(a,b,c,d,e,f){return this.dE(a,b,c,null,d,e,f)},
i4:function(a,b,c,d,e,f){return this.dE(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
b3:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].cf()
return!0},
ce:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].cd()
return!0},
ib:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.k()
o=q.b
if(typeof o!=="number")return o.k()
n=q.c
if(typeof n!=="number")return n.k()
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.B(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
h:function(a){return this.N()},
G:function(a){var u,t,s,r
this.aO()
u=H.b([],[P.v])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].G(a))
return C.a.v(u,"\n")},
N:function(){return this.G("")}}
F.j5.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
M:function(a,b){var u=this
C.a.M(u.b,b)
C.a.M(u.c,new F.j6(u,b))
C.a.M(u.d,new F.j7(u,b))},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.v])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
return C.a.v(r,"\n")}}
F.j6.prototype={
$1:function(a){if(!J.B(a.a,this.a))this.b.$1(a)}}
F.j7.prototype={
$1:function(a){var u=this.a
if(!J.B(a.a,u)&&!J.B(a.b,u))this.b.$1(a)}}
F.j8.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.v])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
return C.a.v(r,"\n")}}
F.j9.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.v])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
return C.a.v(r,"\n")}}
O.aT.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.C():u},
T:function(a){var u=this.fr
if(u!=null)u.C(a)},
bc:function(){return this.T(null)},
ds:function(a){this.a=null
this.T(a)},
hN:function(){return this.ds(null)},
fM:function(a,b){var u=new D.bf()
u.b=!0
this.T(u)},
fO:function(a,b){var u=new D.bg()
u.b=!0
this.T(u)},
sab:function(a){var u,t=this,s=t.ch
if(s!=a){if(s!=null)s.gq().R(0,t.gaC())
u=t.ch
t.ch=a
if(a!=null)a.gq().j(0,t.gaC())
s=new D.w("environment",u,t.ch)
s.b=!0
t.T(s)}},
de:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.A,h=new H.M([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=h.i(0,0)
h.t(0,0,r==null?1:r)}q=H.b([],[A.d1])
h.M(0,new O.hd(j,q))
C.a.bM(q,new O.he())
p=new H.M([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){o=u[s]
r=o.gbf()
n=p.i(0,o.gbf())
p.t(0,r,n==null?1:n)}m=H.b([],[A.ds])
p.M(0,new O.hf(j,m))
C.a.bM(m,new O.hg())
l=new H.M([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.q)(i),++s){o=i[s]
t=o.gbf()
r=l.i(0,o.gbf())
l.t(0,t,r==null?1:r)}k=H.b([],[A.dy])
l.M(0,new O.hh(j,k))
C.a.bM(k,new O.hi())
i=C.d.a9(j.e.a.length+3,4)
j.dy.e
return A.n2(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
am:function(a,b){if(b!=null)if(!C.a.aH(a,b)){b.sav(0,a.length)
a.push(b)}},
aB:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a4(u,u.length);u.A();){t=u.d
t.toString
s=$.j2
if(s==null)s=$.j2=new V.z(0,0,1)
t.a=s
r=$.j1
t.d=r==null?$.j1=new V.z(0,1,0):r
r=$.j0
t.e=r==null?$.j0=new V.z(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bJ(s)
r=s.a
if(typeof r!=="number")return r.k()
p=s.b
if(typeof p!=="number")return p.k()
o=s.c
if(typeof o!=="number")return o.k()
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bJ(t.d)
p=o.a
if(typeof p!=="number")return p.k()
r=o.b
if(typeof r!=="number")return r.k()
s=o.c
if(typeof s!=="number")return s.k()
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bJ(t.e)
r=s.a
if(typeof r!=="number")return r.k()
p=s.b
if(typeof p!=="number")return p.k()
o=s.c
if(typeof o!=="number")return o.k()
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
cG:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.de()
u=b1.fr.i(0,b0.aP)
if(u==null){u=A.n1(b0,b1.a)
b1.c9(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.dS
b0=b2.e
if(!(b0 instanceof Z.bG))b0=b2.e=null
if(b0==null||!b0.d.m(0,s)){b0=t.k3
if(b0)b2.d.b3()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.ce()
q.a.ce()
q=q.e
if(q!=null)q.b7(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.ib()
p=p.e
if(p!=null)p.b7(0)}n=b2.d.cc(new Z.cA(b1.a),s)
n.aI($.ao()).e=a9.a.Q.c
if(b0)n.aI($.b6()).e=a9.a.cx.c
if(r)n.aI($.b5()).e=a9.a.ch.c
if(t.r1)n.aI($.b7()).e=a9.a.cy.c
if(q)n.aI($.bC()).e=a9.a.db.c
if(t.rx)n.aI($.b4()).e=a9.a.dx.c
b2.e=n}m=H.b([],[T.dE])
a9.a.S(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.gX(r)
b0=b0.dy
b0.toString
b0.ak(r.ah(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.gX(r)
q=b1.dx
q=b1.cx=r.k(0,q.gX(q))
r=q}b0=b0.fr
b0.toString
b0.ak(r.ah(0,!0))}b0=a9.a
r=b1.gej()
b0=b0.fy
b0.toString
b0.ak(r.ah(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.ak(C.k.ah(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.ak(C.k.ah(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.ak(C.k.ah(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.c(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.c(b0,k)
b0=b0[k]
j=new Float32Array(H.cK(r.ah(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.am(m,a9.f.d)
b0=a9.a
r=a9.f.d
b0.au(b0.rx,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.am(m,a9.r.d)
b0=a9.a
r=a9.r.d
b0.au(b0.x2,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.am(m,a9.x.d)
b0=a9.a
r=a9.x.d
b0.au(b0.aP,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.dT
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.am(m,a9.y.d)
b0=a9.a
r=a9.y.d
b0.au(b0.dU,r)}b0=t.e
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.z.ch
q=q.dX
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.dV
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.am(m,a9.z.d)
b0=a9.a
r=a9.z.d
b0.au(b0.dW,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.gX(r)
r=P.A
h=new H.M([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.t(0,0,e+1)
d=J.D(a9.a.cm.i(0,0),e)
p=i.bJ(f.a)
o=p.a
if(typeof o!=="number")return o.k()
c=p.b
if(typeof c!=="number")return c.k()
b=p.c
if(typeof b!=="number")return b.k()
b=p.u(0,Math.sqrt(o*o+c*c+b*b))
c=d.e
o=b.a
p=b.b
b=b.c
c.a.uniform3f(c.d,o,p,b)
b=f.c
p=d.f
p.a.uniform3f(p.d,b.a,b.b,b.c)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.q)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.cl.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.gX(r)
r=P.A
a=new H.M([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
a0=f.gbf()
e=a.i(0,a0)
if(e==null)e=0
a.t(0,a0,e+1)
d=J.D(a9.a.co.i(0,a0),e)
a1=i.k(0,f.gX(f))
p=f.gX(f)
o=$.cr
p=p.cL(o==null?$.cr=new V.a_(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.cr
p=a1.cL(p==null?$.cr=new V.a_(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gp(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaT()
p=a1.cv(0)
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
j=new Float32Array(H.cK(new V.di(o,c,b,a2,a3,a4,a5,a6,p).ah(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gaT()
p=f.gaT()
if(!C.a.aH(m,p)){p.sav(0,m.length)
m.push(p)}p=f.gaT()
o=p.gcA(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gba()
p=f.geA()
o=d.x
o.toString
c=p.gio(p)
b=p.gip(p)
a2=p.giq()
p=p.gim()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gba()
if(!C.a.aH(m,p)){p.sav(0,m.length)
m.push(p)}p=f.gba()
o=p.gcA(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gis()){p=f.gi6()
o=d.y
o.a.uniform1f(o.d,p)
p=f.gi7()
o=d.z
o.a.uniform1f(o.d,p)
p=f.gi8()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.q)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.cn.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.gX(r)
r=P.A
a8=new H.M([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
a0=f.gbf()
e=a8.i(0,a0)
if(e==null)e=0
a8.t(0,a0,e+1)
d=J.D(a9.a.cq.i(0,a0),e)
p=f.gj1(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gjr(f).jC()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.cL(f.gj1(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gp(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaT()
p=f.gcM()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gcI(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gjD()
o=d.x
o.a.uniform1f(o.d,p)
p=f.gjE()
o=d.y
o.a.uniform1f(o.d,p)
f.gaT()
p=f.gaT()
if(!C.a.aH(m,p)){p.sav(0,m.length)
m.push(p)}p=f.gaT()
o=p.gcA(p)
if(o){o=d.dx
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gba()
p=f.geA()
o=d.z
o.toString
c=p.gio(p)
b=p.gip(p)
a2=p.giq()
p=p.gim()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gba()
if(!C.a.aH(m,p)){p.sav(0,m.length)
m.push(p)}p=f.gba()
o=p.gcA(p)
if(o){o=d.dy
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gjs()){p=f.gjq()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.gjp()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.gis()){p=f.gi6()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.gi7()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.gi8()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.q)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.cp.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){a9.am(m,a9.Q.d)
b0=a9.a
r=a9.Q.d
b0.au(b0.dY,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gX(r).cv(0)}b0=b0.id
b0.toString
b0.ak(r.ah(0,!0))}if(t.cy){a9.am(m,a9.ch)
b0=a9.a
r=a9.ch
b0.hP(b0.dZ,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.e_
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.am(m,a9.cx.d)
b0=a9.a
r=a9.cx.d
b0.au(b0.e0,r)}b0=t.x
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.cy.ch
q=q.e1
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.e2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.am(m,a9.cy.d)
b0=a9.a
r=a9.cy.d
b0.au(b0.e3,r)}}b0=t.y
r=b0.a
q=!r
if(!q||b0.b||!1){if(r){r=a9.a
p=a9.db.f
r=r.e4
r.a.uniform1f(r.d,p)}if(b0.b){a9.am(m,a9.db.d)
r=a9.a
p=a9.db.d
r.au(r.e5,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].S(b1)
r=b2.e
r.S(b1)
r.aa(b1)
r.ad(b1)
if(!q||b0.b||!1)b1.a.disable(3042)
for(k=0;k<m.length;++k)m[k].ad(b1)
b0=a9.a
b0.toString
b1.a.useProgram(null)
b0.x.cj()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.de().aP}}
O.hd.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.d1(a,C.d.a9(b+3,4)*4))}}
O.he.prototype={
$2:function(a,b){return J.kp(a.a,b.a)}}
O.hf.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.ds(a,C.d.a9(b+3,4)*4))}}
O.hg.prototype={
$2:function(a,b){return J.kp(a.a,b.a)}}
O.hh.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dy(a,C.d.a9(b+3,4)*4))}}
O.hi.prototype={
$2:function(a,b){return J.kp(a.a,b.a)}}
O.h7.prototype={
c4:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.w(u.b,t,a)
t.b=!0
u.a.T(t)}},
aL:function(){this.cZ()
this.c4(1)},
sai:function(a,b){var u,t=this
if(b==null)b=1
u=t.c.b
if(b<=0){t.an(new A.Q(!1,u,!1))
t.c4(0)}else{t.an(new A.Q(!0,u,!1))
t.c4(b>=1?1:b)}}}
O.cm.prototype={
T:function(a){return this.a.T(a)},
bc:function(){return this.T(null)},
aL:function(){},
an:function(a){var u,t,s=this
if(!s.c.m(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aL()
u=s.a
u.a=null
u.T(null)}},
sag:function(a){var u,t=this,s=t.c
if(!s.b)t.an(new A.Q(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gq().R(0,t.gaC())
u=t.d
t.d=a
a.gq().j(0,t.gaC())
s=new D.w(t.b+".texture2D",u,t.d)
s.b=!0
t.a.T(s)}}}
O.h8.prototype={}
O.aK.prototype={
b0:function(a){var u,t,s=this
if(!s.f.m(0,a)){u=s.f
s.f=a
t=new D.w(s.b+".color",u,a)
t.b=!0
s.a.T(t)}},
aL:function(){this.cZ()
this.b0(new V.p(1,1,1))},
sp:function(a,b){this.an(new A.Q(!0,this.c.b,!1))
this.b0(b)}}
O.ha.prototype={}
O.hb.prototype={
aL:function(){var u,t=this
t.d_()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.w(t.b+".refraction",u,1)
u.b=!0
t.a.T(u)}}}
O.hc.prototype={
c5:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.y().a)){u.ch=a
t=new D.w(u.b+".shininess",t,a)
t.b=!0
u.a.T(t)}},
aL:function(){this.d_()
this.c5(100)},
sa8:function(a){var u,t=this
if(a==null)a=100
u=t.c.b
if(a<=0){t.an(new A.Q(!1,u,!1))
t.c5(0)}else{t.an(new A.Q(!0,u,!1))
t.c5(a)}}}
O.dw.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.C():u},
T:function(a){var u=this.e
if(u!=null)u.C(a)},
bc:function(){return this.T(null)},
cG:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.i7(t,n)
u.bN(t,n)
u.ct(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.j(u.y.i(0,"fov"),"$iV")
u.ch=H.j(u.y.i(0,"ratio"),"$iV")
u.cx=H.j(u.y.i(0,"boxClr"),"$iG")
u.cy=H.j(u.y.i(0,"boxTxt"),"$ibu")
u.db=H.j(u.y.i(0,"viewMat"),"$iaa")
a.c9(u)}o.a=u}if(b.e==null){t=b.d.cc(new Z.cA(a.a),$.ao())
t.aI($.ao()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.S(a)}t=a.d
s=a.c
r=o.a
r.S(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.cU(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gX(s).cv(0)
r=r.db
r.toString
r.ak(s.ah(0,!0))
t=b.e
if(t instanceof Z.bG){t.S(a)
t.aa(a)
t.ad(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.cj()
t=o.c
if(t!=null)t.ad(a)}}
O.i8.prototype={
gq:function(){var u=this.c
return u==null?this.c=D.C():u},
aB:function(a,b){},
cG:function(a,b){var u,t,s,r=this,q="SolidColor",p=r.a
if(p==null){u=a.fr.i(0,q)
if(u==null){p=a.a
u=new A.i9(p,q)
u.bN(p,q)
u.ct(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.j(u.y.i(0,"color"),"$ibW")
u.ch=H.j(u.y.i(0,"projViewObjMat"),"$iaa")
a.c9(u)}r.a=u
p=u}t=b.e
if((!(t instanceof Z.bG)?b.e=null:t)==null){p=b.d.cc(new Z.cA(a.a),$.ao())
t=p.aI($.ao())
s=r.a
t.e=s.z.c
b.e=p
p=s}p.S(a)
t=r.b
p.Q.ex(t)
t=a.gej()
p=p.ch
p.toString
p.ak(t.ah(0,!0))
t=b.e
t.S(a)
t.aa(a)
t.ad(a)
t=r.a
t.toString
a.a.useProgram(null)
t.x.cj()}}
O.dD.prototype={}
T.cW.prototype={
bo:function(a){},
f5:function(){return this.bo(null)},
ca:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.gdQ().j(0,t.gfA())
t.b.c.gbh().j(0,t.gfC())
t.b.c.gcM().j(0,t.gfE())
u=t.b.e
u.gcX(u).j(0,t.ghY())
t.b.e.gbh().j(0,t.ghW())
u=t.b.e
u.gdR(u).j(0,t.ghU())
return!0},
fB:function(a){if(!H.j(a,"$iaA").x.b.m(0,this.c))return
this.ch=this.Q=!0},
fD:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.j(a,"$iaA")
u=a.d.n(0,a.y)
u=new V.P(u.a,u.b)
if(u.F(u)<t.z)return
t.ch=!1}},
fF:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dn(a)},
hZ:function(a){this.ch=this.Q=!0},
hX:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.j(a,"$icv")
u=a.d.n(0,a.y)
u=new V.P(u.a,u.b)
if(u.F(u)<t.z)return
t.ch=!1}},
hV:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dn(a)},
dn:function(a){var u,t,s,r,q,p,o,n,m,l,k=this
H.j(a,"$iaA")
u=new D.X()
u.b=!0
t=k.f
if(t!=null)t.C(u)
u=a.d
t=u.a
s=a.c
if(typeof t!=="number")return t.u()
r=t/s.c
u=u.b
if(typeof u!=="number")return u.u()
q=u/s.d
s=k.a
u=k.d
t=u.r
if(typeof t!=="number")return t.n()
p=C.j.b5(r*(t-1))
t=u.x
if(typeof t!=="number")return t.n()
o=C.j.b5(q*(t-1))
s=s.a
t=u.x
if(typeof t!=="number")return t.n()
n=t-1-o
s.bindFramebuffer(36160,s.createFramebuffer())
s.readBuffer(36064)
s.framebufferTexture2D(36160,36064,3553,u.b,0)
m=new Uint8Array(4)
s.readPixels(p,n,1,1,6408,5121,m)
s.bindFramebuffer(36160,null)
new T.iB(m,1,1).fp()
u=m.length
if(0>=u)return H.c(m,0)
t=m[0]
if(1>=u)return H.c(m,1)
s=m[1]
if(2>=u)return H.c(m,2)
l=m[2]
if(3>=u)return H.c(m,3)
l=new T.cX(new V.P(r,q),V.cV(t,s,l,m[3]))
l.b=!0
s=k.x
if(s!=null)s.C(l)}}
T.cX.prototype={
h:function(a){return"ColorPicker: "+this.c.h(0)+" => "+this.d.h(0)}}
T.dE.prototype={}
T.iv.prototype={}
T.iw.prototype={
dv:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.ck()}},
sav:function(a,b){this.a=b},
gq:function(){var u=this.y
return u==null?this.y=D.C():u},
S:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
ad:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.ix.prototype={
sav:function(a,b){this.a=b},
gq:function(){var u=this.e
return u==null?this.e=D.C():u},
S:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ad:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iy.prototype={
aw:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lr(a)
t=T.kW(q)
W.R(u,"load",new T.iA(this,t,u,!1,q,!1,!1),!1)
return t},
b_:function(a,b,c,d,e,f){var u=W.lr(c);++this.d
W.R(u,"load",new T.iz(this,u,!1,b,!1,d,a),!1)},
du:function(a,b,c){var u,t,s,r
b=V.cN(b)
u=V.cN(a.width)
t=V.cN(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kv()
s.width=u
s.height=t
r=C.f.eu(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oa(r.getImageData(0,0,s.width,s.height))}}}
T.iA.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.du(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.l.em(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dv();++u.e}}
T.iz.prototype={
$1:function(a){var u=this,t=u.a,s=t.du(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.l.em(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ck()}++t.e}}
T.iB.prototype={
fp:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.d0()
u=C.d.a9(f,2)
t=this.b
s=this.a
r=s.length
q=t*4
for(;u>=0;--u){p=q*u
o=q*(f-1-u)
for(n=0;n<t;++n){m=4*n
l=p+m
k=o+m
for(j=0;j<4;++j){i=l+j
h=k+j
if(i<0||i>=r)return H.c(s,i)
g=s[i]
if(h<0||h>=r)return H.c(s,h)
s[i]=s[h]
s[h]=g}}}}}
X.f_.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.C():u},
a1:function(a){var u=this.fr
if(u!=null)u.C(a)},
sat:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.w("width",u,b)
u.b=!0
t.a1(u)}},
sao:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.w("height",u,b)
u.b=!0
t.a1(u)}},
S:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.k()
i.sat(0,C.c.a3(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.k()
i.sao(0,C.c.a3(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=u.getParameter(3379)
p=V.cN(s)
o=V.cN(r)
q=V.cN(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.l.en(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.kW(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dv()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.ck()
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
a.c=C.c.a3(s*i.a)
r=t.d
a.d=C.c.a3(r*i.b)
l=t.a
k=i.c
if(typeof k!=="number")return H.d(k)
j=C.c.a3(l*k)
t=t.b
l=i.d
if(typeof l!=="number")return H.d(l)
u.viewport(j,C.c.a3(t*l),C.c.a3(s*k),C.c.a3(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
ad:function(a){a.a.bindFramebuffer(36160,null)}}
X.ku.prototype={}
X.fD.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.C():u},
a1:function(a){var u=this.x
if(u!=null)u.C(a)},
S:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.d(u)
q=C.c.a3(r*u)
r=s.b
if(typeof t!=="number")return H.d(t)
p=C.c.a3(r*t)
r=C.c.a3(s.c*u)
a.c=r
s=C.c.a3(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
ad:function(a){}}
X.fI.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.C():u},
S:function(a){var u
a.cy.bH(V.bj())
u=V.bj()
a.db.bH(u)},
ad:function(a){a.cy.aS()
a.db.aS()}}
X.dq.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.C():u},
a1:function(a){var u=this.f
if(u!=null)u.C(a)},
f9:function(){return this.a1(null)},
S:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aV(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bH(k)
r=$.lE
if(r==null){r=V.kO()
q=V.j3()
p=$.lV
r=V.kK(r,q,p==null?$.lV=new V.z(0,0,-1):p)
$.lE=r
u=r}else u=r
r=s.b
if(r!=null){t=r.bK(0,a,s)
if(t!=null)u=t.k(0,u)}a.db.bH(u)},
ad:function(a){a.cy.aS()
a.db.aS()}}
X.ir.prototype={}
V.kh.prototype={
$1:function(a){var u=C.c.eq(this.a.giw(),2)
if(u!=="0.00")P.eP(u+" fps")}}
V.i4.prototype={
eR:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.R(q,"scroll",new V.i6(o),!1)},
dD:function(a,b){var u,t,s,r,q
a=C.d.ic(a,0,4)
u=P.lZ(C.p,b,C.i,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.mD()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
b2:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.hR()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jm(C.a.iE(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
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
if(H.oy(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.lZ(C.p,n,C.i,!1)
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
i0:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
hR:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.iG()
t=P.v
u.a=new H.M([t,R.dA])
u.b=new H.M([t,R.dJ])
u.c=u.P(0,q)
t=u.P(0,q).v(0,p)
s=T.a1(new H.U("*"))
t.a.push(s)
t.c=!0
t=u.P(0,p).v(0,p)
s=new T.aW()
r=[T.dh]
s.a=H.b([],r)
t.a.push(s)
t=T.a1(new H.U("*"))
s.a.push(t)
t=u.P(0,p).v(0,"BoldEnd")
s=T.a1(new H.U("*"))
t.a.push(s)
t.c=!0
t=u.P(0,q).v(0,o)
s=T.a1(new H.U("_"))
t.a.push(s)
t.c=!0
t=u.P(0,o).v(0,o)
s=new T.aW()
s.a=H.b([],r)
t.a.push(s)
t=T.a1(new H.U("_"))
s.a.push(t)
t=u.P(0,o).v(0,n)
s=T.a1(new H.U("_"))
t.a.push(s)
t.c=!0
t=u.P(0,q).v(0,m)
s=T.a1(new H.U("`"))
t.a.push(s)
t.c=!0
t=u.P(0,m).v(0,m)
s=new T.aW()
s.a=H.b([],r)
t.a.push(s)
t=T.a1(new H.U("`"))
s.a.push(t)
t=u.P(0,m).v(0,"CodeEnd")
s=T.a1(new H.U("`"))
t.a.push(s)
t.c=!0
t=u.P(0,q).v(0,l)
s=T.a1(new H.U("["))
t.a.push(s)
t.c=!0
t=u.P(0,l).v(0,k)
s=T.a1(new H.U("|"))
t.a.push(s)
s=u.P(0,l).v(0,j)
t=T.a1(new H.U("]"))
s.a.push(t)
s.c=!0
s=u.P(0,l).v(0,l)
t=new T.aW()
t.a=H.b([],r)
s.a.push(t)
s=T.a1(new H.U("|]"))
t.a.push(s)
s=u.P(0,k).v(0,j)
t=T.a1(new H.U("]"))
s.a.push(t)
s.c=!0
s=u.P(0,k).v(0,k)
t=new T.aW()
t.a=H.b([],r)
s.a.push(t)
s=T.a1(new H.U("|]"))
t.a.push(s)
u.P(0,q).v(0,i).a.push(new T.eS())
s=u.P(0,i).v(0,i)
t=new T.aW()
t.a=H.b([],r)
s.a.push(t)
s=T.a1(new H.U("*_`["))
t.a.push(s)
s=u.P(0,"BoldEnd")
s.d=s.a.bk(p)
s=u.P(0,n)
s.d=s.a.bk(o)
s=u.P(0,"CodeEnd")
s.d=s.a.bk(m)
s=u.P(0,j)
s.d=s.a.bk("Link")
s=u.P(0,i)
s.d=s.a.bk(i)
this.b=u}}
V.i6.prototype={
$1:function(a){P.kY(C.h,new V.i5(this.a))}}
V.i5.prototype={
$0:function(){var u=C.c.a3(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
Q.fE.prototype={}
Q.i.prototype={
gax:function(){var u=this.a
if(u>=1)if(u<=8){u=this.b
u=u>=1&&u<=8}else u=!1
else u=!1
return u},
gav:function(a){return this.gax()?(this.a-1)*8+(this.b-1):-1},
h:function(a){return""+this.a+" "+this.b},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof Q.i))return!1
if(b.a!==this.a)return!1
if(b.b!==this.b)return!1
return!0}}
Q.a5.prototype={
h:function(a){var u=this,t=u.d,s=t!=null?", "+t.h(0)+" => "+H.e(u.e):""
return u.a+", "+u.b.h(0)+" => "+u.c.h(0)+s}}
Q.ie.prototype={
eS:function(){this.a=P.n0(64,new Q.ig($.T().a),!1,P.A)
this.c=null},
dN:function(){var u,t,s,r,q=Q.lN()
for(u=q.a,t=this.a,s=0;s<64;++s){if(s>=t.length)return H.c(t,s)
r=t[s]
if(s>=u.length)return H.c(u,s)
u[s]=r}return q},
E:function(a){var u,t
if(!a.gax())return $.ko()
u=a.gav(a)
t=this.a
if(u<0||u>=t.length)return H.c(t,u)
return new Q.t(t[u])},
B:function(a,b){var u,t,s
if(!a.gax())return!1
u=this.a
t=a.gav(a)
s=b.a
if(t<0||t>=u.length)return H.c(u,t)
u[t]=s
return!0},
cr:function(a){var u,t,s=a.a,r=$.kn(),q=r.a
if(typeof s!=="number")return s.w()
if(typeof q!=="number")return H.d(q)
u=new Q.t((s&q)>>>0)
for(t=0;s=this.a,t<s.length;++t){s=s[t]
q=r.a
if(typeof s!=="number")return s.w()
if(typeof q!=="number")return H.d(q)
if(new Q.t((s&q)>>>0).m(0,u))return Q.lx(t)}return new Q.i(0,0)},
dF:function(a){var u=this,t=a.b,s=u.E(t),r=a.d,q=r!=null?u.E(r):null,p=$.T()
u.B(t,p)
t=q!=null
if(t)u.B(r,p)
r=$.bA()
p=s.a
r=r.a
if(typeof p!=="number")return p.V()
if(typeof r!=="number")return H.d(r)
u.B(a.c,new Q.t((p|r)>>>0))
if(t&&a.e!=null){t=q.a
if(typeof t!=="number")return t.V()
u.B(a.e,new Q.t((t|r)>>>0))}},
ih:function(a){if(this.e7(a)){if(!this.iy(a))return 2
return 1}return 0},
e7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.b3(),f=a?$.W():$.aQ()
g=g.a
f=f.a
if(typeof g!=="number")return g.V()
if(typeof f!=="number")return H.d(f)
u=$.aF().a
if(typeof u!=="number")return H.d(u)
t=h.cr(new Q.t((g|f|1&u)>>>0))
if(!t.gax())return!1
s=a?-1:1
g=t.a
f=g+s
u=t.b
r=u+1
q=!a
p=$.c7()
o=[Q.t]
if(h.K(new Q.i(f,r),q,H.b([p],o)))return!0
n=u+-1
if(h.K(new Q.i(f,n),q,H.b([p],o)))return!0
f=g+2
p=$.c6()
if(h.K(new Q.i(f,r),q,H.b([p],o)))return!0
if(h.K(new Q.i(f,n),q,H.b([p],o)))return!0
f=g+1
m=u+2
if(h.K(new Q.i(f,m),q,H.b([p],o)))return!0
l=g+-1
if(h.K(new Q.i(l,m),q,H.b([p],o)))return!0
m=g+-2
if(h.K(new Q.i(m,r),q,H.b([p],o)))return!0
if(h.K(new Q.i(m,n),q,H.b([p],o)))return!0
m=u+-2
if(h.K(new Q.i(f,m),q,H.b([p],o)))return!0
if(h.K(new Q.i(l,m),q,H.b([p],o)))return!0
for(p=g>=1,m=g<=8,k=1;k<8;++k){j=u+k
i=new Q.i(g,j)
if(h.K(i,q,H.b([$.aG(),$.aj()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.E(i).a==$.T().a))break}for(k=1;k<8;++k){j=u+-k
i=new Q.i(g,j)
if(h.K(i,q,H.b([$.aG(),$.aj()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.E(i).a==$.T().a))break}for(p=u>=1,m=u<=8,k=1;k<8;++k){j=g+k
i=new Q.i(j,u)
if(h.K(i,q,H.b([$.aG(),$.aj()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.E(i).a==$.T().a))break}for(k=1;k<8;++k){j=g+-k
i=new Q.i(j,u)
if(h.K(i,q,H.b([$.aG(),$.aj()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.E(i).a==$.T().a))break}for(k=1;k<8;++k){p=g+k
m=u+k
i=new Q.i(p,m)
if(h.K(i,q,H.b([$.aP(),$.aj()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.T().a))break}for(k=1;k<8;++k){p=g+k
m=u+-k
i=new Q.i(p,m)
if(h.K(i,q,H.b([$.aP(),$.aj()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.T().a))break}for(k=1;k<8;++k){p=g+-k
m=u+k
i=new Q.i(p,m)
if(h.K(i,q,H.b([$.aP(),$.aj()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.T().a))break}for(k=1;k<8;++k){p=-k
m=g+p
p=u+p
i=new Q.i(m,p)
if(h.K(i,q,H.b([$.aP(),$.aj()],o)))return!0
if(!(m>=1&&m<=8&&p>=1&&p<=8&&h.E(i).a==$.T().a))break}p=$.b3()
if(h.K(new Q.i(f,r),q,H.b([p],o)))return!0
if(h.K(new Q.i(f,u),q,H.b([p],o)))return!0
if(h.K(new Q.i(f,n),q,H.b([p],o)))return!0
if(h.K(new Q.i(g,n),q,H.b([p],o)))return!0
if(h.K(new Q.i(l,n),q,H.b([p],o)))return!0
if(h.K(new Q.i(l,u),q,H.b([p],o)))return!0
if(h.K(new Q.i(l,r),q,H.b([p],o)))return!0
if(h.K(new Q.i(g,r),q,H.b([p],o)))return!0
return!1},
K:function(a,b,c){var u,t,s,r,q,p
if(a.gax()){u=this.E(a)
u.toString
t=$.W()
s=u.a
t=t.a
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.d(t)
if((s&t)>>>0===t===b){t=$.bB()
r=t.a
if(typeof r!=="number")return H.d(r)
q=new Q.t((s&r)>>>0)
for(p=c.length-1;p>=0;--p){if(p>=c.length)return H.c(c,p)
s=c[p].a
r=t.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.d(r)
if(q.m(0,new Q.t((s&r)>>>0)))return!0}}}return!1},
iy:function(a){var u,t,s
for(u=0;u<64;++u){t=this.a
if(u>=t.length)return H.c(t,u)
t=t[u]
if(t!=$.T().a){s=$.W().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.d(s)
s=(t&s)>>>0===s===a
t=s}else t=!1
if(t)if(this.iz(Q.lx(u)))return!0}return!1},
iz:function(a){var u={}
u.a=!1
this.cs(new Q.ii(u),a)
return u.a},
iD:function(a){var u={}
u.a=!1
this.cs(new Q.ij(u,a),a.b)
return u.a},
cs:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a="Pawn en passent "
if(!a1.gax())return
u=c.E(a1)
t=new Q.ih(c,u,a0)
s=u.a
r=$.bB().a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.d(r)
q=new Q.t((s&r)>>>0)
if(q.m(0,$.c7())){u=c.E(a1)
u.toString
s=$.W()
r=u.a
s=s.a
if(typeof r!=="number")return r.w()
if(typeof s!=="number")return H.d(s)
p=(r&s)>>>0===s
o=$.bA().a
if(typeof o!=="number")return H.d(o)
n=p?-1:1
m=a1.a
l=m+n
k=a1.b
j=new Q.i(l,k)
i=c.E(j).a
h=$.T().a
if(i==h){t.$1(new Q.a5("Pawn move to "+j.h(0),a1,j,b,b))
if((r&o)>>>0!==o){j=new Q.i(m+(n+n),k)
if(c.E(j).a==h)t.$1(new Q.a5("Pawn move to "+j.h(0),a1,j,b,b))}}r=k+-1
j=new Q.i(l,r)
g=c.E(j)
i=g.a
f=$.ko().a
if(i!=f)if(i!=h){if(typeof i!=="number")return i.w()
i=(i&s)>>>0===s!==p}else i=!1
else i=!1
if(i)t.$1(new Q.a5("Pawn take "+g.gaR()+" at "+j.h(0),a1,j,j,b));++k
j=new Q.i(l,k)
g=c.E(j)
i=g.a
if(i!=f)if(i!=h){if(typeof i!=="number")return i.w()
i=(i&s)>>>0===s!==p}else i=!1
else i=!1
if(i)t.$1(new Q.a5("Pawn take "+g.gaR()+" at "+j.h(0),a1,j,j,b))
if(c.c!=null)i=m===(p?4:5)
else i=!1
if(i){j=new Q.i(l,r)
if(j.gax()&&c.E(j).a==h){e=new Q.i(m,r)
g=c.E(e)
i=g.a
if(i!=h){if(typeof i!=="number")return i.w()
i=(i&s)>>>0===s!==p}else i=!1
if(i){d=c.c.E(new Q.i(m+(n+n),r))
r=d.a
if(typeof r!=="number")return r.w()
if((r&o)>>>0!==o&&d.cR(g))t.$1(new Q.a5(a+g.gaR()+" at "+j.h(0),a1,j,e,b))}}j=new Q.i(l,k)
if(j.gax()&&c.E(j).a==h){e=new Q.i(m,k)
g=c.E(e)
r=g.a
if(r!=h){if(typeof r!=="number")return r.w()
s=(r&s)>>>0===s!==p}else s=!1
if(s){d=c.c.E(new Q.i(m+(n+n),k))
s=d.a
if(typeof s!=="number")return s.w()
if((s&o)>>>0!==o&&d.cR(g))t.$1(new Q.a5(a+g.gaR()+" at "+j.h(0),a1,j,e,b))}}}}else if(q.m(0,$.aG()))c.hO(t,a1)
else if(q.m(0,$.c6())){c.a2(t,a1,2,1)
c.a2(t,a1,2,-1)
c.a2(t,a1,1,2)
c.a2(t,a1,-1,2)
c.a2(t,a1,-2,1)
c.a2(t,a1,-2,-1)
c.a2(t,a1,1,-2)
c.a2(t,a1,-1,-2)}else if(q.m(0,$.aP())){c.a7(t,a1,1,1)
c.a7(t,a1,1,-1)
c.a7(t,a1,-1,-1)
c.a7(t,a1,-1,1)}else if(q.m(0,$.aj())){c.a7(t,a1,1,1)
c.a7(t,a1,1,0)
c.a7(t,a1,1,-1)
c.a7(t,a1,0,-1)
c.a7(t,a1,-1,-1)
c.a7(t,a1,-1,0)
c.a7(t,a1,-1,1)
c.a7(t,a1,0,1)}else if(q.m(0,$.b3()))c.fs(t,a1)},
a2:function(a,b,c,d){var u,t,s,r,q,p=new Q.i(b.a+c,b.b+d)
if(!p.gax())return!0
u=this.E(b)
t=this.E(p)
s=t.a
if(s==$.T().a){a.$1(new Q.a5(u.gaR()+" move to "+p.h(0),b,p,null,null))
return!1}u.toString
r=$.W()
q=u.a
r=r.a
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.d(r)
if(typeof s!=="number")return s.w()
s=(s&r)>>>0===r!==((q&r)>>>0===r)
if(s)a.$1(new Q.a5(u.gaR()+" take "+t.gaR()+" at "+p.h(0),b,p,p,null))
return!0},
a7:function(a,b,c,d){var u
for(u=1;u<8;++u)if(this.a2(a,b,c*u,d*u))return},
hO:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.E(b)
m.toString
u=$.W()
t=m.a
u=u.a
if(typeof t!=="number")return t.w()
if(typeof u!=="number")return H.d(u)
s=$.bA().a
if(typeof s!=="number")return H.d(s)
n.a7(a,b,0,1)
n.a7(a,b,0,-1)
n.a7(a,b,1,0)
n.a7(a,b,-1,0)
if((t&s)>>>0!==s){r=new Q.i((t&u)>>>0===u?8:1,4)
u=n.E(r).a
t=$.bB().a
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.d(t)
if(new Q.t((u&t)>>>0).m(0,$.b3())&&(u&s)>>>0!==s){u=b.b
q=u>4?-1:1
o=u+q
u=b.a
while(!0){if(!(o!==4)){p=!0
break}if(n.E(new Q.i(u,o)).a!=$.T().a){p=!1
break}o+=q}if(p){u=r.a
t=4-q-q
a.$1(new Q.a5("Rook castles with King",b,new Q.i(u,t+q),r,new Q.i(u,t)))}}}},
fs:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.E(b)
j.toString
u=$.bA()
t=j.a
u=u.a
if(typeof t!=="number")return t.w()
if(typeof u!=="number")return H.d(u)
k.a2(a,b,1,1)
k.a2(a,b,1,0)
k.a2(a,b,1,-1)
k.a2(a,b,0,-1)
k.a2(a,b,-1,-1)
k.a2(a,b,-1,0)
k.a2(a,b,-1,1)
k.a2(a,b,0,1)
if((t&u)>>>0!==u)for(u=b.a,t=b.b,s=1;s<=8;s+=7){r=new Q.i(u,s)
q=k.E(r).a
p=$.bB().a
if(typeof q!=="number")return q.w()
if(typeof p!=="number")return H.d(p)
if(new Q.t((q&p)>>>0).m(0,$.aG())){p=$.bA().a
if(typeof p!=="number")return H.d(p)
p=(q&p)>>>0!==p
q=p}else q=!1
if(q){o=t>s?-1:1
m=t+o
l=m
while(!0){if(!(l!==s)){n=!0
break}if(k.E(new Q.i(u,l)).a!=$.T().a){n=!1
break}l+=o}if(n){q=m+o
a.$1(new Q.a5("King castles with Rook",b,new Q.i(u,q),r,new Q.i(u,q-o)))}}}},
h:function(a){var u,t,s,r,q,p,o,n,m=0
while(!0){if(!(m<64)){u=!1
break}t=this.a
if(m>=t.length)return H.c(t,m)
t=t[m]
s=$.bA().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.d(s)
if((t&s)>>>0===s){u=!0
break}++m}r=new Q.ip()
r.d=!1
t=new Array(64)
t.fixed$length=Array
r.c=H.b(t,[P.v])
r.d=!0
for(q=0;q<8;q=p)for(p=q+1,t=(p-1)*8,o=0;o<8;o=n){n=o+1
m=t+(n-1)
s=this.a
if(m<0||m>=s.length)return H.c(s,m)
r.ew(q,o,new Q.t(s[m]).ep(0,!1,u))}return r.h(0)}}
Q.ig.prototype={
$1:function(a){return this.a}}
Q.ii.prototype={
$1:function(a){this.a.a=!0}}
Q.ij.prototype={
$1:function(a){var u,t=this.a
if(t.a)return
u=this.b
if(a.b.m(0,u.b)&&a.c.m(0,u.c)&&J.B(a.d,u.d)&&J.B(a.e,u.e))t.a=!0}}
Q.ih.prototype={
$1:function(a){var u,t,s=this.a.dN()
s.dF(a)
u=this.b
u.toString
t=$.W()
u=u.a
t=t.a
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.d(t)
if(!s.e7((u&t)>>>0===t))this.c.$1(a)}}
Q.ip.prototype={
dj:function(a,b){var u=a*8+b
if(u>=64)return-1
return u},
ew:function(a,b,c){var u,t=this.dj(a,b)
if(t<0)return
u=this.c
if(t>=u.length)return H.c(u,t)
u[t]=c},
fz:function(){var u,t,s,r,q=this.c,p=q.length
if(p<=0)return 0
u=q[0]
t=(u==null?"":u).length
for(s=1;s<p;++s){u=q[s]
r=(u==null?"":u).length
if(r>t)t=r}return t},
h:function(a){var u,t,s,r,q,p,o,n=this,m=H.b([],[P.v]),l=n.fz()
if(n.d){u=C.b.bG("",2+C.d.a9(l-1,2))
for(t=l+1,s=0;s<8;){++s
u+=C.b.bG(" "+s,t)}m.push(C.b.jn(u))
r=2}else r=0
for(q=0;q<8;++q){u=n.d?C.b.bG(""+(q+1),r):""
for(s=0;s<8;++s){if(n.d||s!==0)u+="|"
p=n.dj(q,s)
t=n.c
if(p<0||p>=t.length)return H.c(t,p)
o=t[p]
u+=C.b.bG(o==null?"":o,l)}m.push(n.d?u+"|":u)}return C.a.v(m,"\n")}}
Q.t.prototype={
V:function(a,b){var u=this.a,t=b.a
if(typeof u!=="number")return u.V()
if(typeof t!=="number")return H.d(t)
return new Q.t((u|t)>>>0)},
cR:function(a){var u,t=this.a,s=$.kn().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.d(s)
u=a.a
if(typeof u!=="number")return u.w()
return(t&s)>>>0===(u&s)>>>0},
m:function(a,b){var u
if(b==null)return!1
if(!(b instanceof Q.t))return!1
u=b.a
return this.a==u},
gie:function(){var u,t=this.a,s=$.ld().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.d(s)
u=new Q.t((t&s)>>>0)
if(u.m(0,$.aQ()))return"B"
if(u.m(0,$.W()))return"W"
return" "},
gj0:function(){var u,t=this.a,s=$.bB().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.d(s)
u=new Q.t((t&s)>>>0)
if(u.m(0,$.c7()))return"P"
if(u.m(0,$.aG()))return"R"
if(u.m(0,$.c6()))return"H"
if(u.m(0,$.aP()))return"B"
if(u.m(0,$.aj()))return"Q"
if(u.m(0,$.b3()))return"K"
return" "},
giI:function(){var u=this.a,t=$.aF().a
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.d(t)
t=(u&t)>>>0
if(t===$.T().a)return" "
return""+t},
gaR:function(){var u,t=this.a,s=$.bB().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.d(s)
u=new Q.t((t&s)>>>0)
if(u.m(0,$.c7()))return"Pawn"
if(u.m(0,$.aG()))return"Rook"
if(u.m(0,$.c6()))return"Knight"
if(u.m(0,$.aP()))return"Bishop"
if(u.m(0,$.aj()))return"Queen"
if(u.m(0,$.b3()))return"King"
return"Empty"},
ep:function(a,b,c){var u,t,s=this,r=s.a
if(r==$.T().a)return""
if(c){u=$.bA().a
if(typeof r!=="number")return r.w()
if(typeof u!=="number")return H.d(u)
t=(r&u)>>>0===u?"+":" "}else t=""
t=t+s.gie()+s.gj0()
return b?t+s.giI():t},
h:function(a){return this.ep(a,!0,!0)}}
S.f1.prototype={
eF:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.f3==null){$.f3=E.L(q,!0,q,"color bishop shape",q,q)
$.ks=E.L(q,!0,q,"pick bishop shape",q,q)
O.ar("./resources/bishop.obj",a.f).as(new S.f4(),q)}u=this.k3
t=u?"white":"black"
s=t+(" bishop "+d)
t=$.aP()
u=u?$.W():$.aQ()
t=t.a
u=u.a
if(typeof t!=="number")return t.V()
if(typeof u!=="number")return H.d(u)
r=$.aF().a
if(typeof r!=="number")return H.d(r)
this.aZ(s,new Q.t((t|u|d&r)>>>0),$.f3,$.ks)}}
S.f4.prototype={
$1:function(a){$.f3.sa_(0,a.c)
$.ks.sa_(0,a.c)}}
S.cS.prototype={
eG:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=null
m.go=H.b([],[S.dr])
m.id=H.b([],[S.dG])
m.k1=H.b([],[Q.a5])
m.k4=S.n3(a)
m.a="board"
m.r1=!1
for(u=1;u<=8;++u)for(t=1;t<=8;++t){s=S.np(a,m,(u+t)%2===0,new Q.i(u,t))
m.id.push(s)
r=m.y
q=[H.b2(r,0)]
if(r.aM(H.b([s],q))){p=r.a
o=p.length
p.push(s)
q=H.b([s],q)
r=r.c
if(r!=null)r.$2(o,q)}}for(u=1;u<=8;++u){r=S.lC(a,m,!0,u,0,0.7)
m.go.push(r)
q=m.y
p=[H.b2(q,0)]
if(q.aM(H.b([r],p))){n=q.a
o=n.length
n.push(r)
p=H.b([r],p)
r=q.c
if(r!=null)r.$2(o,p)}r=S.lC(a,m,!1,u,0,0.7)
m.go.push(r)
q=m.y
p=[H.b2(q,0)]
if(q.aM(H.b([r],p))){n=q.a
o=n.length
n.push(r)
p=H.b([r],p)
r=q.c
if(r!=null)r.$2(o,p)}}m.a6(0,S.hT(a,m,!0,1,0,0.7))
m.a6(0,S.hT(a,m,!0,2,0,0.7))
m.a6(0,S.hT(a,m,!1,1,0,0.7))
m.a6(0,S.hT(a,m,!1,2,0,0.7))
m.a6(0,S.fU(a,m,!0,1,0,0.7))
m.a6(0,S.fU(a,m,!0,2,3.141592653589793,0.7))
m.a6(0,S.fU(a,m,!1,1,0,0.7))
m.a6(0,S.fU(a,m,!1,2,3.141592653589793,0.7))
m.a6(0,S.f2(a,m,!0,1,-1.5707963267948966,0.8))
m.a6(0,S.f2(a,m,!0,2,1.5707963267948966,0.8))
m.a6(0,S.f2(a,m,!1,1,-1.5707963267948966,0.8))
m.a6(0,S.f2(a,m,!1,2,1.5707963267948966,0.8))
m.a6(0,S.lI(a,m,!0,1,0,1))
m.a6(0,S.lI(a,m,!1,1,0,1))
m.a6(0,S.lv(a,m,!0,1.5707963267948966,0.9))
m.a6(0,S.lv(a,m,!1,1.5707963267948966,0.9))
r=E.L(l,!0,l,"",l,l)
m.k3=r
m.y.j(0,r)
m.k3.y.j(0,S.fo(a,m,0,0,0,0))
m.k3.y.j(0,S.fo(a,m,8,0,1.5707963267948966,1))
m.k3.y.j(0,S.fo(a,m,8,8,3.141592653589793,2))
m.k3.y.j(0,S.fo(a,m,0,8,4.71238898038469,3))
r=F.oc(30)
q=m.k4.db
q=E.L(l,!0,U.b9(V.dj(0,-0.5,0).k(0,V.lz(-1.5707963267948966)).k(0,V.kM(12,12,12,1))),"",r,q)
m.k2=q
m.y.j(0,q)
q=m.fy
r=q.d
if(r==null)r=q.d=D.C()
r.j(0,m.gh2())
m.cT(q.c)},
a6:function(a,b){this.go.push(b)
this.y.j(0,b)},
iZ:function(a){var u,t,s,r,q,p=this
for(u=p.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(J.B(r.ry.b,a)){p.dq(r.fy)
return}}for(u=p.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){q=u[s]
if(J.B(q.r1.b,a)){p.dq(q.fy)
return}}},
dq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
for(u=j.k1,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.c.m(0,a)||J.B(r.d,a)){u=j.fy
q=u.c.E(r.b)
q.toString
t=$.W()
p=q.a
t=t.a
if(typeof p!=="number")return p.w()
if(typeof t!=="number")return H.d(t)
if((p&t)>>>0===t!==u.a)H.r(P.l("may not make a move movement out-of-turn"))
if(!u.c.iD(r))H.r(P.l("not a valid move: "+J.ak(r)))
t=u.c
o=t.dN()
o.c=t
u.c=o
o.dF(r)
t=!u.a
u.a=t
u.c.ih(t)
u=u.d
if(u!=null)u.C(null)
u=j.k1;(u&&C.a).sl(u,0)
return}}u=j.fy
n=u.c.E(a)
t=n.a
if(t!=$.T().a){p=$.W().a
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.d(p)
p=(t&p)>>>0===p!==u.a}else p=!0
if(p)return
q=j.e6(n)
m=q!=null&&q.r1
j.dI()
j.dJ()
if(!m){q=j.e6(n)
if(q!=null){q.sbL(0,!0)
l=j.eo(q.fy)
if(l!=null)l.sbL(0,!0)}if(t==$.ko().a)H.r(P.l("may not get movements for an out-of-bounds piece"))
p=$.W().a
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.d(p)
if((t&p)>>>0===p!==u.a)H.r(P.l("may not get movements out-of-turn"))
u=u.c
t=u.cr(n)
k=H.b([],[Q.a5])
u.cs(C.a.gi_(k),t)
j.k1=k
j.ey(k)}},
h3:function(a){var u=this
u.dI()
u.dJ()
u.cT(u.fy.c)},
e6:function(a){var u,t,s,r,q,p=a.a,o=$.kn(),n=o.a
if(typeof p!=="number")return p.w()
if(typeof n!=="number")return H.d(n)
u=new Q.t((p&n)>>>0)
for(p=this.go,n=p.length,t=0;t<p.length;p.length===n||(0,H.q)(p),++t){s=p[t]
r=s.k4.a
q=o.a
if(typeof r!=="number")return r.w()
if(typeof q!=="number")return H.d(q)
if(new Q.t((r&q)>>>0).m(0,u))return s}return},
j_:function(a){var u,t,s,r
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(J.B(r.fy,a))return r}return},
eo:function(a){var u,t,s,r
for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.fy.m(0,a))return r}return},
dI:function(){var u,t,s,r,q
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(!1!==r.r2){r.r1=r.r2=!1
r.aj()}}for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){q=u[s]
if(!1!==q.k3){q.k2=q.k3=!1
q.aj()}}},
dJ:function(){var u,t,s,r,q
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(!1!==r.r1){r.r2=r.r1=!1
r.aj()}}for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){q=u[s]
if(!1!==q.k2){q.k3=q.k2=!1
q.aj()}}},
scV:function(a){var u,t,s,r,q,p,o=this
if(a!==o.r1){o.r1=a
u=o.k2.b=!a
o.k3.b=u
for(t=o.go,s=t.length,r=0;r<s;++r){q=t[r]
if(a!==q.rx){q.rx=a
q.x1.b=u
q.x2.b=a}}for(t=o.id,s=t.length,r=0;r<s;++r){p=t[r]
if(a!==p.k4){p.k4=a
p.r2.b=u
p.rx.b=a}}}},
cT:function(a){var u,t,s,r,q,p
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=a.cr(r.k4)
if(!J.B(r.fy,q)){r.fy=q
r.dB()}p=q.a
if(p>=1)if(p<=8){p=q.b
p=p>=1&&p<=8}else p=!1
else p=!1
r.b=p}},
ey:function(a){var u,t,s,r,q,p
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
r=this.eo(s.c)
if(!0!==r.k3){r.k3=!0
r.k2=!1
r.aj()}q=s.d
if(q!=null){p=this.j_(q)
if(!0!==p.r2){p.r2=!0
p.r1=!1
p.aj()}}}}}
S.fn.prototype={
eH:function(a,b,c,d,e,f){var u,t=this,s=null
if($.fp==null){$.fp=E.L(s,!0,s,"edge shape",s,s)
O.ar("./resources/edge.obj",a.f).as(new S.fq(),s)}t.sbF(U.b9(V.dj(c-4,0,d-4).k(0,V.kL(e))))
t.a="edge"
t.y.j(0,$.fp)
u=b.k4.cy
if(f>=u.length)return H.c(u,f)
t.sY(u[f])}}
S.fq.prototype={
$1:function(a){$.fp.sa_(0,a.c)}}
S.ki.prototype={
$1:function(a){var u,t=this.a
t.scV(!0)
u=this.b
u.aa(this.c)
t.scV(!1)
u.cH()}}
S.kj.prototype={
$1:function(a){this.a.iZ(H.j(a,"$icX").d.es())}}
S.kk.prototype={
$1:function(a){this.a.b.webkitRequestFullscreen()
return}}
S.fQ.prototype={
eI:function(a,b,c,d,e){var u,t,s,r,q=null
if($.fR==null){$.fR=E.L(q,!0,q,"color king shape",q,q)
$.kI=E.L(q,!0,q,"pick king shape",q,q)
O.ar("./resources/king.obj",a.f).as(new S.fS(),q)}u=this.k3
t=(u?"white":"black")+" king"
s=$.b3()
u=u?$.W():$.aQ()
s=s.a
u=u.a
if(typeof s!=="number")return s.V()
if(typeof u!=="number")return H.d(u)
r=$.aF().a
if(typeof r!=="number")return H.d(r)
this.aZ(t,new Q.t((s|u|1&r)>>>0),$.fR,$.kI)}}
S.fS.prototype={
$1:function(a){$.fR.sa_(0,a.c)
$.kI.sa_(0,a.c)}}
S.fT.prototype={
eJ:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.fV==null){$.fV=E.L(q,!0,q,"color knight shape",q,q)
$.kJ=E.L(q,!0,q,"pick knight shape",q,q)
O.ar("./resources/knight.obj",a.f).as(new S.fW(),q)}u=this.k3
t=u?"white":"black"
s=t+(" knight "+d)
t=$.c6()
u=u?$.W():$.aQ()
t=t.a
u=u.a
if(typeof t!=="number")return t.V()
if(typeof u!=="number")return H.d(u)
r=$.aF().a
if(typeof r!=="number")return H.d(r)
this.aZ(s,new Q.t((t|u|d&r)>>>0),$.fV,$.kJ)}}
S.fW.prototype={
$1:function(a){$.fV.sa_(0,a.c)
$.kJ.sa_(0,a.c)}}
S.hj.prototype={
eL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=34067,f=a.f,e=f.a,d=e.createTexture()
e.bindTexture(g,d)
e.texParameteri(g,10242,10497)
e.texParameteri(g,10243,10497)
e.texParameteri(g,10241,9729)
e.texParameteri(g,10240,9729)
e.bindTexture(g,null)
u=new T.ix()
u.a=0
u.b=d
u.c=!1
u.d=0
f.b_(u,d,"resources/posx.png",34069,!1,!1)
f.b_(u,d,"resources/negx.png",34070,!1,!1)
f.b_(u,d,"resources/posy.png",34071,!1,!1)
f.b_(u,d,"resources/negy.png",34072,!1,!1)
f.b_(u,d,"resources/posz.png",34073,!1,!1)
f.b_(u,d,"resources/negz.png",34074,!1,!1)
h.a=u
t=D.ln()
t.sp(0,new V.p(1,0.9,0.8))
t.b=U.b9(V.kK(V.kO(),V.j3(),new V.z(0,-1,-0.25)))
s=D.ln()
s.sp(0,new V.p(0,0.1,0.3))
s.b=U.b9(V.kK(V.kO(),V.j3(),new V.z(0,1,0.25)))
r=new V.p(0.15,0.15,0.15)
f=O.a0()
e=f.x
e.sp(0,new V.p(0.6,0.6,0.6))
e=f.r
e.sp(0,new V.p(0.4,0.4,0.4))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(60)
f.sab(h.a)
f.cx.sp(0,r)
f.dx.j(0,t)
f.dx.j(0,s)
h.b=f
f=O.a0()
e=f.x
e.sp(0,new V.p(0.2,0.2,0.2))
e=f.r
e.sp(0,new V.p(0.1,0.1,0.1))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(60)
f.sab(h.a)
f.cx.sp(0,r)
f.dx.j(0,t)
f.dx.j(0,s)
h.c=f
f=O.a0()
e=f.x
e.sp(0,new V.p(0.6,0,0))
e=f.r
e.sp(0,new V.p(0.8,0,0))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(100)
f.sab(h.a)
f.cx.sp(0,r)
f.dx.j(0,t)
f.dx.j(0,s)
h.d=f
f=O.a0()
e=f.x
e.sp(0,new V.p(0.2,0,0))
e=f.r
e.sp(0,new V.p(0.6,0,0))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(100)
f.sab(h.a)
f.cx.sp(0,r)
f.dx.j(0,t)
f.dx.j(0,s)
h.e=f
f=O.a0()
e=f.x
e.sp(0,new V.p(0.5,0.5,0))
e=f.r
e.sp(0,new V.p(0.7,0.7,0))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(100)
f.sab(h.a)
f.cx.sp(0,r)
f.dx.j(0,t)
f.dx.j(0,s)
h.f=f
f=O.a0()
e=f.x
e.sp(0,new V.p(0.1,0.1,0))
e=f.r
e.sp(0,new V.p(0.5,0.5,0))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(100)
f.sab(h.a)
f.cx.sp(0,r)
f.dx.j(0,t)
f.dx.j(0,s)
h.r=f
q=new V.p(0.075,0.075,0.075)
f=O.a0()
e=f.x
e.sp(0,new V.p(0.6,0.6,0.6))
e=f.r
e.sp(0,new V.p(0.4,0.4,0.4))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(60)
f.sab(h.a)
f.cx.sp(0,q)
f.dx.j(0,t)
f.dx.j(0,s)
h.x=f
f=O.a0()
e=f.x
e.sp(0,new V.p(0.2,0.2,0.2))
e=f.r
e.sp(0,new V.p(0.1,0.1,0.1))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(60)
f.sab(h.a)
f.cx.sp(0,q)
f.dx.j(0,t)
f.dx.j(0,s)
h.y=f
f=O.a0()
e=f.x
e.sp(0,new V.p(0.6,0,0))
e=f.r
e.sp(0,new V.p(0.8,0,0))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(100)
f.sab(h.a)
f.cx.sp(0,q)
f.dx.j(0,t)
f.dx.j(0,s)
h.z=f
f=O.a0()
e=f.x
e.sp(0,new V.p(0.2,0,0))
e=f.r
e.sp(0,new V.p(0.6,0,0))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(100)
f.sab(h.a)
f.cx.sp(0,q)
f.dx.j(0,t)
f.dx.j(0,s)
h.Q=f
f=O.a0()
e=f.x
e.sp(0,new V.p(0.5,0.5,0))
e=f.r
e.sp(0,new V.p(0.7,0.7,0))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(100)
f.sab(h.a)
f.cx.sp(0,q)
f.dx.j(0,t)
f.dx.j(0,s)
h.ch=f
f=O.a0()
e=f.x
e.sp(0,new V.p(0.1,0.1,0))
e=f.r
e.sp(0,new V.p(0.5,0.5,0))
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(100)
f.sab(h.a)
f.cx.sp(0,q)
f.dx.j(0,t)
f.dx.j(0,s)
h.cx=f
h.cy=H.b([],[O.aT])
for(p=0;p<4;++p){o=a.f.aw("resources/edge"+p+".png")
f=h.cy
e=O.a0()
n=e.x
n.an(new A.Q(!0,n.c.b,!1))
n.b0(new V.p(0.6,0.6,0.6))
e.x.sag(o)
n=e.r
n.an(new A.Q(!0,n.c.b,!1))
n.b0(new V.p(0.4,0.4,0.4))
e.r.sag(o)
n=e.z
n.an(new A.Q(!0,n.c.b,!1))
n.b0(new V.p(1,1,1))
e.z.sa8(80)
e.sab(h.a)
n=e.cx
n.an(new A.Q(!0,n.c.b,!1))
n.b0(new V.p(0.1,0.1,0.1))
n=e.dx
n.toString
m=[H.ka(n,"ay",0)]
if(n.aM(H.b([t],m))){l=n.a
k=l.length
l.push(t)
m=H.b([t],m)
n=n.c
if(n!=null)n.$2(k,m)}n=e.dx
n.toString
m=[H.ka(n,"ay",0)]
if(n.aM(H.b([s],m))){l=n.a
k=l.length
l.push(s)
m=H.b([s],m)
n=n.c
if(n!=null)n.$2(k,m)}f.push(e)}j=a.f.aw("resources/tableColor.png")
i=a.f.aw("resources/tableSpec.png")
f=O.a0()
e=f.x
e.sp(0,new V.p(0.6,0.6,0.6))
f.x.sag(j)
e=f.r
e.sp(0,new V.p(0.4,0.4,0.4))
f.r.sag(j)
f.z.sp(0,new V.p(1,1,1))
f.z.sa8(80)
f.z.sag(i)
f.sab(h.a)
f.cx.sag(i)
f.Q.sag(a.f.aw("resources/tableNormal.png"))
f.dx.j(0,t)
f.dx.j(0,s)
h.db=f},
ea:function(a){var u=V.mN(a/96,1,1),t=new V.al(u.a,u.b,u.c,1).es()
u=new O.i8()
u.b=t
return u}}
S.hB.prototype={
eM:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.hC==null){$.hC=E.L(q,!0,q,"color pawn shape",q,q)
$.kN=E.L(q,!0,q,"pick pawn shape",q,q)
O.ar("./resources/pawn.obj",a.f).as(new S.hD(),q)}u=this.k3
t=u?"white":"black"
s=t+(" pawn "+d)
t=$.c7()
u=u?$.W():$.aQ()
t=t.a
u=u.a
if(typeof t!=="number")return t.V()
if(typeof u!=="number")return H.d(u)
r=$.aF().a
if(typeof r!=="number")return H.d(r)
this.aZ(s,new Q.t((t|u|d&r)>>>0),$.hC,$.kN)}}
S.hD.prototype={
$1:function(a){$.hC.sa_(0,a.c)
$.kN.sa_(0,a.c)}}
S.dr.prototype={
aV:function(a,b,c,d){var u=this
u.fy=new Q.i(0,0)
u.k1=U.b9(null)
u.k4=$.T()
u.rx=u.r2=u.r1=!1},
aZ:function(a,b,c,d){var u=this,t=null,s=u.k2
u.ry=s.k4.ea(s.y.a.length)
u.k4=b
s=[E.am]
u.x1=E.L(H.b([c],s),!0,t,"color "+a,t,t)
u.x2=E.L(H.b([d],s),!1,t,"pick "+a,t,u.ry)
u.sbF(u.k1)
u.a=a
u.y.j(0,u.x1)
u.y.j(0,u.x2)
u.dB()
u.aj()},
sbL:function(a,b){var u=this
if(b!==u.r1){u.r1=b
u.r2=!1
u.aj()}},
dB:function(){var u=this,t=u.k1,s=u.fy,r=u.id
r=V.dj(s.a-4.5,0,s.b-4.5).k(0,V.kL(u.go)).k(0,V.kM(r,r,r,1))
t.sX(0,r)
return r},
aj:function(){var u,t,s=this
if(s.k3)if(s.r1)s.sY(s.k2.k4.d)
else{u=s.r2
t=s.k2.k4
if(u)s.sY(t.f)
else s.sY(t.b)}else if(s.r1)s.sY(s.k2.k4.e)
else{u=s.r2
t=s.k2.k4
if(u)s.sY(t.r)
else s.sY(t.c)}}}
S.hK.prototype={
eN:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.hL==null){$.hL=E.L(q,!0,q,"color queen shape",q,q)
$.kP=E.L(q,!0,q,"pick queen shape",q,q)
O.ar("./resources/queen.obj",a.f).as(new S.hM(),q)}u=this.k3
t=u?"white":"black"
s=t+(" queen "+d)
t=$.aj()
u=u?$.W():$.aQ()
t=t.a
u=u.a
if(typeof t!=="number")return t.V()
if(typeof u!=="number")return H.d(u)
r=$.aF().a
if(typeof r!=="number")return H.d(r)
this.aZ(s,new Q.t((t|u|d&r)>>>0),$.hL,$.kP)}}
S.hM.prototype={
$1:function(a){$.hL.sa_(0,a.c)
$.kP.sa_(0,a.c)}}
S.hS.prototype={
eP:function(a,b,c,d,e,f){var u,t,s,r,q=null,p="rook shape"
if($.hU==null){$.hU=E.L(q,!0,q,p,q,q)
$.kT=E.L(q,!0,q,p,q,q)
O.ar("./resources/rook.obj",a.f).as(new S.hV(),q)}u=this.k3
t=u?"white":"black"
s=t+(" rook "+d)
t=$.aG()
u=u?$.W():$.aQ()
t=t.a
u=u.a
if(typeof t!=="number")return t.V()
if(typeof u!=="number")return H.d(u)
r=$.aF().a
if(typeof r!=="number")return H.d(r)
this.aZ(s,new Q.t((t|u|d&r)>>>0),$.hU,$.kT)}}
S.hV.prototype={
$1:function(a){$.hU.sa_(0,a.c)
$.kT.sa_(0,a.c)}}
S.dG.prototype={
eT:function(a,b,c,d){var u,t,s,r,q=this,p=null
if($.iD==null){$.iD=E.L(p,!0,p,"color tile shape",p,p)
$.kX=E.L(p,!0,p,"pick tile shape",p,p)
O.ar("./resources/tile.obj",a.f).as(new S.iE(),p)}q.k4=q.k3=q.k2=!1
u=q.k1?"white":"black"
t=q.fy
s=t.a
t=t.b
r=u+(" tile "+s+" "+t)
u=q.id
q.r1=u.k4.ea(u.y.a.length)
u=[E.am]
q.r2=E.L(H.b([$.iD],u),!0,p,"color "+r,p,p)
q.rx=E.L(H.b([$.kX],u),!1,p,"pick "+r,p,q.r1)
q.sbF(U.b9(V.dj(s-4.5,0,t-4.5)))
q.a=r
q.y.j(0,q.r2)
q.y.j(0,q.rx)
q.aj()},
sbL:function(a,b){var u=this
if(b!==u.k2){u.k2=b
u.k3=!1
u.aj()}},
aj:function(){var u,t,s=this
if(s.k1)if(s.k2)s.sY(s.id.k4.z)
else{u=s.k3
t=s.id.k4
if(u)s.sY(t.ch)
else s.sY(t.x)}else if(s.k2)s.sY(s.id.k4.Q)
else{u=s.k3
t=s.id.k4
if(u)s.sY(t.cx)
else s.sY(t.y)}}}
S.iE.prototype={
$1:function(a){$.iD.sa_(0,a.c)
$.kX.sa_(0,a.c)}}
L.kf.prototype={
$0:function(){return S.ox(this.a)}};(function aliases(){var u=J.a.prototype
u.eD=u.h
u=J.db.prototype
u.eE=u.h
u=T.d7.prototype
u.eC=u.b6
u.cY=u.h
u=O.cm.prototype
u.cZ=u.aL
u=O.aK.prototype
u.d_=u.aL})();(function installTearOffs(){var u=hunkHelpers._instance_1i,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J.aR.prototype,"gi_","j",17)
t(P,"o4","nu",6)
t(P,"o5","nv",6)
t(P,"o6","nw",6)
s(P,"m9","o2",10)
r(P.dU.prototype,"gig",0,1,null,["$2","$1"],["bC","dL"],20,0)
var m
r(m=E.am.prototype,"gef",0,0,null,["$1","$0"],["eg","iP"],0,0)
r(m,"geh",0,0,null,["$1","$0"],["ei","iQ"],0,0)
r(m,"ged",0,0,null,["$1","$0"],["ee","iO"],0,0)
r(m,"geb",0,0,null,["$1","$0"],["ec","iL"],0,0)
q(m,"giJ","iK",3)
q(m,"giM","iN",3)
r(m=E.dF.prototype,"gd2",0,0,null,["$1","$0"],["d4","d3"],0,0)
p(m,"gjb","cH",10)
o(m=X.dO.prototype,"gh0","h1",4)
o(m,"gfP","fQ",4)
o(m,"gfV","fW",2)
o(m,"gh6","h7",11)
o(m,"gh4","h5",11)
o(m,"gha","hb",2)
o(m,"ghe","hf",2)
o(m,"gfZ","h_",2)
o(m,"ghc","hd",2)
o(m,"gfX","fY",2)
o(m,"ghg","hh",23)
o(m,"ghi","hj",4)
o(m,"ghy","hz",5)
o(m,"ghu","hv",5)
o(m,"ghw","hx",5)
r(m=D.dd.prototype,"gdl",0,0,null,["$1","$0"],["dm","h8"],0,0)
o(m,"ghk","hl",24)
q(m,"gfJ","fK",12)
q(m,"gho","hp",12)
n(V.P.prototype,"gl","cz",13)
n(V.z.prototype,"gl","cz",13)
r(m=U.ch.prototype,"gbr",0,0,null,["$1","$0"],["W","aE"],0,0)
q(m,"gfH","fI",14)
q(m,"ghm","hn",14)
r(m=U.dP.prototype,"gbr",0,0,null,["$1","$0"],["W","aE"],0,0)
o(m,"geU","eV",1)
o(m,"geW","eX",1)
o(m,"geY","eZ",1)
o(m,"gft","fu",1)
o(m,"gfv","fw",1)
o(m,"gf3","f4",1)
o(m,"gf1","f2",1)
o(m,"gf_","f0",1)
r(m=M.cY.prototype,"ga5",0,0,null,["$1","$0"],["a0","bb"],0,0)
q(m,"ghq","hr",15)
q(m,"ghs","ht",15)
r(M.d_.prototype,"ga5",0,0,null,["$1","$0"],["a0","bb"],0,0)
r(m=M.d4.prototype,"ga5",0,0,null,["$1","$0"],["a0","bb"],0,0)
q(m,"gfR","fS",3)
q(m,"gfT","fU",3)
r(m=O.aT.prototype,"gaC",0,0,null,["$1","$0"],["T","bc"],0,0)
r(m,"ghM",0,0,null,["$1","$0"],["ds","hN"],0,0)
q(m,"gfL","fM",16)
q(m,"gfN","fO",16)
r(O.cm.prototype,"gaC",0,0,null,["$1","$0"],["T","bc"],0,0)
r(O.dw.prototype,"gaC",0,0,null,["$1","$0"],["T","bc"],0,0)
r(m=T.cW.prototype,"gd5",0,0,null,["$1","$0"],["bo","f5"],0,0)
o(m,"gfA","fB",1)
o(m,"gfC","fD",1)
o(m,"gfE","fF",1)
o(m,"ghY","hZ",1)
o(m,"ghW","hX",1)
o(m,"ghU","hV",1)
r(X.dq.prototype,"gf8",0,0,null,["$1","$0"],["a1","f9"],0,0)
o(S.cS.prototype,"gh2","h3",1)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.kG,J.a,J.a4,P.e9,P.m,H.df,P.fK,H.d5,H.iW,H.iL,P.bb,H.cg,H.cc,H.er,P.aS,H.fY,H.fZ,H.fM,H.ea,H.jf,P.ex,P.jg,P.dU,P.e3,P.ac,P.dS,P.dC,P.io,P.jQ,P.dH,P.bE,P.jV,P.jO,P.jI,P.e8,P.u,P.f8,P.jU,P.by,P.aq,P.aw,P.ba,P.hA,P.dz,P.e0,P.fC,P.bP,P.Y,P.a8,P.kQ,P.at,P.v,P.bq,W.fd,W.I,W.d6,P.eC,P.jJ,T.eS,T.d7,T.dh,T.i_,R.dA,R.dI,R.dJ,R.iG,O.ay,O.cn,E.f0,E.am,E.hO,E.dF,Z.dR,Z.cA,Z.bG,Z.bL,Z.b_,D.f7,D.bI,D.X,O.k_,O.eN,O.k0,X.cU,X.dc,X.fP,X.h1,X.bl,X.hq,X.iH,X.dO,D.cf,D.an,D.hG,D.ic,V.p,V.al,V.ft,V.di,V.aU,V.Z,V.a_,V.aM,V.dt,V.P,V.z,U.dP,M.d_,M.d4,M.aC,A.cQ,A.eV,A.Q,A.d1,A.ds,A.dy,A.h9,A.cw,A.cy,A.cz,A.dL,A.iS,F.bJ,F.bO,F.bR,F.i0,F.i1,F.i2,F.i3,F.aD,F.j4,F.j5,F.j8,F.j9,O.dD,O.cm,O.ha,T.cW,T.iy,T.iB,X.ir,X.ku,X.fI,X.dq,V.i4,Q.fE,Q.i,Q.a5,Q.ie,Q.ip,Q.t,S.hj])
s(J.a,[J.fL,J.da,J.db,J.aR,J.cl,J.bh,H.cp,W.f,W.eR,W.cR,W.aJ,W.H,W.dV,W.ap,W.fh,W.fi,W.dX,W.d3,W.dZ,W.fk,W.k,W.e1,W.bd,W.fF,W.e4,W.be,W.h0,W.hk,W.eb,W.ec,W.bk,W.ed,W.eg,W.bm,W.ek,W.em,W.bo,W.en,W.bp,W.es,W.aY,W.ev,W.iF,W.bs,W.ey,W.iJ,W.iY,W.eD,W.eF,W.eH,W.eJ,W.eL,P.bN,P.e6,P.bQ,P.ei,P.hI,P.et,P.bV,P.eA,P.eW,P.dT,P.du,P.ep])
s(J.db,[J.hE,J.bX,J.bi])
t(J.kF,J.aR)
s(J.cl,[J.d9,J.d8])
t(P.h_,P.e9)
s(P.h_,[H.dN,W.jn,W.jm,P.fy])
t(H.U,H.dN)
s(P.m,[H.fr,H.h4,H.jd])
s(P.fK,[H.h5,H.je])
s(P.bb,[H.hx,H.fO,H.iV,H.f6,H.hY,P.cq,P.ax,P.iX,P.iU,P.dB,P.fa,P.fg])
s(H.cc,[H.km,H.is,H.fN,H.kb,H.kc,H.kd,P.jj,P.ji,P.jk,P.jl,P.jT,P.jS,P.jW,P.jX,P.k4,P.jr,P.jz,P.jv,P.jw,P.jx,P.jt,P.jy,P.js,P.jC,P.jD,P.jB,P.jA,P.k2,P.jM,P.jL,P.jN,P.h3,P.fl,P.fm,W.fG,W.fH,W.hm,W.ho,W.hX,W.im,W.jq,P.k5,P.fz,P.fA,P.eY,E.hP,E.hQ,E.hR,E.iC,D.fu,D.fv,F.k6,F.jb,F.ja,F.j6,F.j7,O.hd,O.he,O.hf,O.hg,O.hh,O.hi,T.iA,T.iz,V.kh,V.i6,V.i5,Q.ig,Q.ii,Q.ij,Q.ih,S.f4,S.fq,S.ki,S.kj,S.kk,S.fS,S.fW,S.hD,S.hM,S.hV,S.iE,L.kf])
s(H.is,[H.ik,H.ca])
t(P.h2,P.aS)
t(H.M,P.h2)
t(H.de,H.fr)
t(H.dl,H.cp)
s(H.dl,[H.cC,H.cE])
t(H.cD,H.cC)
t(H.co,H.cD)
t(H.cF,H.cE)
t(H.dm,H.cF)
s(H.dm,[H.hr,H.hs,H.ht,H.hu,H.hv,H.dn,H.hw])
t(P.jh,P.dU)
t(P.jK,P.jV)
t(P.jH,P.jO)
t(P.fb,P.io)
t(P.fs,P.f8)
t(P.iZ,P.fs)
t(P.j_,P.fb)
s(P.aw,[P.K,P.A])
s(P.ax,[P.bT,P.fJ])
s(W.f,[W.N,W.fx,W.cj,W.bn,W.cG,W.br,W.aZ,W.cI,W.jc,W.cB,P.eZ,P.bF])
s(W.N,[W.a7,W.b8])
s(W.a7,[W.o,P.n])
s(W.o,[W.eT,W.eU,W.bH,W.fB,W.ck,W.hZ])
t(W.fc,W.aJ)
t(W.ce,W.dV)
s(W.ap,[W.fe,W.ff])
t(W.dY,W.dX)
t(W.d2,W.dY)
t(W.e_,W.dZ)
t(W.fj,W.e_)
t(W.bc,W.cR)
t(W.e2,W.e1)
t(W.fw,W.e2)
t(W.e5,W.e4)
t(W.ci,W.e5)
t(W.bK,W.cj)
s(W.k,[W.bt,W.cu])
s(W.bt,[W.bM,W.aL,W.bU])
t(W.hl,W.eb)
t(W.hn,W.ec)
t(W.ee,W.ed)
t(W.hp,W.ee)
t(W.eh,W.eg)
t(W.dp,W.eh)
t(W.el,W.ek)
t(W.hF,W.el)
t(W.hW,W.em)
t(W.cH,W.cG)
t(W.ia,W.cH)
t(W.eo,W.en)
t(W.ib,W.eo)
t(W.il,W.es)
t(W.ew,W.ev)
t(W.it,W.ew)
t(W.cJ,W.cI)
t(W.iu,W.cJ)
t(W.ez,W.ey)
t(W.iI,W.ez)
t(W.bv,W.aL)
t(W.eE,W.eD)
t(W.jo,W.eE)
t(W.dW,W.d3)
t(W.eG,W.eF)
t(W.jE,W.eG)
t(W.eI,W.eH)
t(W.ef,W.eI)
t(W.eK,W.eJ)
t(W.jP,W.eK)
t(W.eM,W.eL)
t(W.jR,W.eM)
t(W.jp,P.dC)
t(P.as,P.jJ)
t(P.e7,P.e6)
t(P.fX,P.e7)
t(P.ej,P.ei)
t(P.hy,P.ej)
t(P.eu,P.et)
t(P.iq,P.eu)
t(P.eB,P.eA)
t(P.iK,P.eB)
t(P.eX,P.dT)
t(P.hz,P.bF)
t(P.eq,P.ep)
t(P.id,P.eq)
s(T.d7,[T.aW,R.dK])
s(E.f0,[Z.cT,A.dv,T.dE])
s(D.X,[D.bf,D.bg,D.w,O.hJ,X.hH,T.cX])
s(X.hH,[X.dg,X.aA,X.cv])
s(O.ay,[D.dd,U.ch,M.cY])
s(D.f7,[U.f9,U.aB])
t(U.cZ,U.aB)
s(A.dv,[A.h6,A.i7,A.i9])
s(A.dL,[A.dM,A.iP,A.iQ,A.iR,A.iN,A.V,A.iO,A.G,A.bW,A.iT,A.cx,A.aa,A.a2,A.bu])
s(O.dD,[O.aT,O.dw,O.i8])
s(O.cm,[O.h7,O.h8,O.aK])
s(O.aK,[O.hb,O.hc])
s(T.dE,[T.iv,T.ix])
t(T.iw,T.iv)
s(X.ir,[X.f_,X.fD])
s(E.am,[S.dr,S.cS,S.fn,S.dG])
s(S.dr,[S.f1,S.fQ,S.fT,S.hB,S.hK,S.hS])
u(H.dN,H.iW)
u(H.cC,P.u)
u(H.cD,H.d5)
u(H.cE,P.u)
u(H.cF,H.d5)
u(P.e9,P.u)
u(W.dV,W.fd)
u(W.dX,P.u)
u(W.dY,W.I)
u(W.dZ,P.u)
u(W.e_,W.I)
u(W.e1,P.u)
u(W.e2,W.I)
u(W.e4,P.u)
u(W.e5,W.I)
u(W.eb,P.aS)
u(W.ec,P.aS)
u(W.ed,P.u)
u(W.ee,W.I)
u(W.eg,P.u)
u(W.eh,W.I)
u(W.ek,P.u)
u(W.el,W.I)
u(W.em,P.aS)
u(W.cG,P.u)
u(W.cH,W.I)
u(W.en,P.u)
u(W.eo,W.I)
u(W.es,P.aS)
u(W.ev,P.u)
u(W.ew,W.I)
u(W.cI,P.u)
u(W.cJ,W.I)
u(W.ey,P.u)
u(W.ez,W.I)
u(W.eD,P.u)
u(W.eE,W.I)
u(W.eF,P.u)
u(W.eG,W.I)
u(W.eH,P.u)
u(W.eI,W.I)
u(W.eJ,P.u)
u(W.eK,W.I)
u(W.eL,P.u)
u(W.eM,W.I)
u(P.e6,P.u)
u(P.e7,W.I)
u(P.ei,P.u)
u(P.ej,W.I)
u(P.et,P.u)
u(P.eu,W.I)
u(P.eA,P.u)
u(P.eB,W.I)
u(P.dT,P.aS)
u(P.ep,P.u)
u(P.eq,W.I)})()
var v={mangledGlobalNames:{A:"int",K:"double",aw:"num",v:"String",by:"bool",a8:"Null",bP:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:-1,args:[P.A,[P.m,E.am]]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.bU]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.a8,args:[,]},{func:1,ret:P.a8,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bM]},{func:1,ret:-1,args:[P.A,[P.m,D.an]]},{func:1,ret:P.K},{func:1,ret:-1,args:[P.A,[P.m,U.aB]]},{func:1,ret:-1,args:[P.A,[P.m,M.aC]]},{func:1,ret:-1,args:[P.A,[P.m,V.aU]]},{func:1,ret:-1,args:[P.O]},{func:1,ret:-1,args:[,]},{func:1,ret:P.a8,args:[,P.at]},{func:1,ret:-1,args:[P.O],opt:[P.at]},{func:1,ret:P.a8,args:[,],opt:[P.at]},{func:1,ret:[P.ac,,],args:[,]},{func:1,ret:-1,args:[W.bv]},{func:1,ret:P.by,args:[[P.m,D.an]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bH.prototype
C.D=W.bK.prototype
C.E=J.a.prototype
C.a=J.aR.prototype
C.j=J.d8.prototype
C.d=J.d9.prototype
C.k=J.da.prototype
C.c=J.cl.prototype
C.b=J.bh.prototype
C.F=J.bi.prototype
C.q=J.hE.prototype
C.l=P.du.prototype
C.m=J.bX.prototype
C.r=W.bv.prototype
C.t=W.cB.prototype
C.n=function getTagFallback(o) {
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
C.o=function(hooks) { return hooks; }

C.A=new P.hA()
C.i=new P.iZ()
C.B=new P.j_()
C.e=new P.jK()
C.h=new P.ba(0)
C.C=new P.ba(5e6)
C.p=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.A])})();(function staticFields(){$.aI=0
$.cb=null
$.lj=null
$.me=null
$.m7=null
$.mh=null
$.k7=null
$.ke=null
$.l9=null
$.bZ=null
$.cL=null
$.cM=null
$.l3=!1
$.E=C.e
$.ah=[]
$.m4=null
$.lA=null
$.lF=null
$.cr=null
$.lM=null
$.lU=null
$.lW=null
$.j0=null
$.j1=null
$.j2=null
$.lV=null
$.lE=null
$.f3=null
$.ks=null
$.fp=null
$.fR=null
$.kI=null
$.fV=null
$.kJ=null
$.hC=null
$.kN=null
$.hL=null
$.kP=null
$.hU=null
$.kT=null
$.iD=null
$.kX=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oF","mm",function(){return H.mc("_$dart_dartClosure")})
u($,"oH","lc",function(){return H.mc("_$dart_js")})
u($,"oY","mn",function(){return H.aO(H.iM({
toString:function(){return"$receiver$"}}))})
u($,"oZ","mo",function(){return H.aO(H.iM({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p_","mp",function(){return H.aO(H.iM(null))})
u($,"p0","mq",function(){return H.aO(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p3","mt",function(){return H.aO(H.iM(void 0))})
u($,"p4","mu",function(){return H.aO(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p2","ms",function(){return H.aO(H.lS(null))})
u($,"p1","mr",function(){return H.aO(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"p6","mw",function(){return H.aO(H.lS(void 0))})
u($,"p5","mv",function(){return H.aO(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pj","le",function(){return P.nt()})
u($,"pk","mA",function(){return P.kR("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pd","mz",function(){return Z.au(0)})
u($,"p7","mx",function(){return Z.au(511)})
u($,"pf","ao",function(){return Z.au(1)})
u($,"pe","b6",function(){return Z.au(2)})
u($,"p9","b5",function(){return Z.au(4)})
u($,"pg","b7",function(){return Z.au(8)})
u($,"ph","bC",function(){return Z.au(16)})
u($,"pa","cO",function(){return Z.au(32)})
u($,"pb","cP",function(){return Z.au(64)})
u($,"pc","my",function(){return Z.au(96)})
u($,"pi","c8",function(){return Z.au(128)})
u($,"p8","b4",function(){return Z.au(256)})
u($,"oE","ml",function(){return new V.ft(1e-9)})
u($,"oD","y",function(){return $.ml()})
u($,"oS","ko",function(){return Q.a9(-1)})
u($,"oN","T",function(){return Q.a9(0)})
u($,"oR","bA",function(){return Q.a9(4096)})
u($,"oM","aF",function(){return Q.a9(15)})
u($,"oO","kn",function(){return $.ld().V(0,$.bB()).V(0,$.aF())})
u($,"oK","aQ",function(){return Q.a9(256)})
u($,"oX","W",function(){return Q.a9(512)})
u($,"oL","ld",function(){return Q.a9(768)})
u($,"oT","c7",function(){return Q.a9(16)})
u($,"oW","aG",function(){return Q.a9(32)})
u($,"oQ","c6",function(){return Q.a9(48)})
u($,"oJ","aP",function(){return Q.a9(64)})
u($,"oV","aj",function(){return Q.a9(80)})
u($,"oP","b3",function(){return Q.a9(96)})
u($,"oU","bB",function(){return Q.a9(240)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cp,ArrayBufferView:H.cp,Float32Array:H.co,Float64Array:H.co,Int16Array:H.hr,Int32Array:H.hs,Int8Array:H.ht,Uint16Array:H.hu,Uint32Array:H.hv,Uint8ClampedArray:H.dn,CanvasPixelArray:H.dn,Uint8Array:H.hw,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLBodyElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLDivElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTableElement:W.o,HTMLTableRowElement:W.o,HTMLTableSectionElement:W.o,HTMLTemplateElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.eR,HTMLAnchorElement:W.eT,HTMLAreaElement:W.eU,Blob:W.cR,HTMLCanvasElement:W.bH,CDATASection:W.b8,CharacterData:W.b8,Comment:W.b8,ProcessingInstruction:W.b8,Text:W.b8,CSSPerspective:W.fc,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.ce,MSStyleCSSProperties:W.ce,CSS2Properties:W.ce,CSSImageValue:W.ap,CSSKeywordValue:W.ap,CSSNumericValue:W.ap,CSSPositionValue:W.ap,CSSResourceValue:W.ap,CSSUnitValue:W.ap,CSSURLImageValue:W.ap,CSSStyleValue:W.ap,CSSMatrixComponent:W.aJ,CSSRotation:W.aJ,CSSScale:W.aJ,CSSSkew:W.aJ,CSSTranslation:W.aJ,CSSTransformComponent:W.aJ,CSSTransformValue:W.fe,CSSUnparsedValue:W.ff,DataTransferItemList:W.fh,DOMException:W.fi,ClientRectList:W.d2,DOMRectList:W.d2,DOMRectReadOnly:W.d3,DOMStringList:W.fj,DOMTokenList:W.fk,Element:W.a7,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.bc,FileList:W.fw,FileWriter:W.fx,HTMLFormElement:W.fB,Gamepad:W.bd,History:W.fF,HTMLCollection:W.ci,HTMLFormControlsCollection:W.ci,HTMLOptionsCollection:W.ci,XMLHttpRequest:W.bK,XMLHttpRequestUpload:W.cj,XMLHttpRequestEventTarget:W.cj,ImageData:W.be,HTMLImageElement:W.ck,KeyboardEvent:W.bM,Location:W.h0,MediaList:W.hk,MIDIInputMap:W.hl,MIDIOutputMap:W.hn,MimeType:W.bk,MimeTypeArray:W.hp,PointerEvent:W.aL,MouseEvent:W.aL,DragEvent:W.aL,Document:W.N,DocumentFragment:W.N,HTMLDocument:W.N,ShadowRoot:W.N,XMLDocument:W.N,Attr:W.N,DocumentType:W.N,Node:W.N,NodeList:W.dp,RadioNodeList:W.dp,Plugin:W.bm,PluginArray:W.hF,ProgressEvent:W.cu,ResourceProgressEvent:W.cu,RTCStatsReport:W.hW,HTMLSelectElement:W.hZ,SourceBuffer:W.bn,SourceBufferList:W.ia,SpeechGrammar:W.bo,SpeechGrammarList:W.ib,SpeechRecognitionResult:W.bp,Storage:W.il,CSSStyleSheet:W.aY,StyleSheet:W.aY,TextTrack:W.br,TextTrackCue:W.aZ,VTTCue:W.aZ,TextTrackCueList:W.it,TextTrackList:W.iu,TimeRanges:W.iF,Touch:W.bs,TouchEvent:W.bU,TouchList:W.iI,TrackDefaultList:W.iJ,CompositionEvent:W.bt,FocusEvent:W.bt,TextEvent:W.bt,UIEvent:W.bt,URL:W.iY,VideoTrackList:W.jc,WheelEvent:W.bv,Window:W.cB,DOMWindow:W.cB,CSSRuleList:W.jo,ClientRect:W.dW,DOMRect:W.dW,GamepadList:W.jE,NamedNodeMap:W.ef,MozNamedAttrMap:W.ef,SpeechRecognitionResultList:W.jP,StyleSheetList:W.jR,SVGLength:P.bN,SVGLengthList:P.fX,SVGNumber:P.bQ,SVGNumberList:P.hy,SVGPointList:P.hI,SVGStringList:P.iq,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.bV,SVGTransformList:P.iK,AudioBuffer:P.eW,AudioParamMap:P.eX,AudioTrackList:P.eZ,AudioContext:P.bF,webkitAudioContext:P.bF,BaseAudioContext:P.bF,OfflineAudioContext:P.hz,WebGL2RenderingContext:P.du,SQLResultSetRowList:P.id})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
W.cG.$nativeSuperclassTag="EventTarget"
W.cH.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.mf,[])
else L.mf([])})})()
//# sourceMappingURL=main.dart.js.map
