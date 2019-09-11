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
a[c]=function(){a[c]=function(){H.nq(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k6(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jQ:function jQ(){},
kq:function(){return new P.hP("No element")},
dL:function(a,b,c,d,e){if(c-b<=32)H.me(a,b,c,d,e)
else H.md(a,b,c,d,e)},
me:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a9()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.m(a,s,a[q])
s=q}C.a.m(a,s,t)}},
md:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a7(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a7(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a9()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a9()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a9()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a9()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a9()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a9()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a9()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a9()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a9()
if(a1>0){p=q
q=r
r=p}C.a.m(a2,d,u)
C.a.m(a2,b,s)
C.a.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.J(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ak()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a9()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.ak()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a9()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a9()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ak()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.m(a2,a3,a2[a1])
C.a.m(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.m(a2,a4,a2[a1])
C.a.m(a2,a1,r)
H.dL(a2,a3,o-2,a5,a6)
H.dL(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.J(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.J(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ak()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}H.dL(a2,o,n,a5,a6)}else H.dL(a2,o,n,a5,a6)},
a0:function a0(a){this.a=a},
fq:function fq(){},
dq:function dq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fU:function fU(a,b,c){this.a=a
this.b=b
this.$ti=c},
fV:function fV(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iI:function iI(a,b,c){this.a=a
this.b=b
this.$ti=c},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(){},
dY:function dY(){},
dX:function dX(){},
c8:function(a){var u,t=H.ns(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
na:function(a){return v.types[H.a8(a)]},
nf:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iF},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.h(H.bJ(a))
return u},
cw:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cx:function(a){return H.m_(a)+H.k3(H.bK(a),0,null)},
m_:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$icH){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c8(t.length>1&&C.e.bd(t,0)===36?C.e.aP(t,1):t)},
kF:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
m8:function(a){var u,t,s,r=H.d([],[P.r])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bJ(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bg(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.bJ(s))}return H.kF(r)},
kG:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bJ(s))
if(s<0)throw H.h(H.bJ(s))
if(s>65535)return H.m8(a)}return H.kF(a)},
m7:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bg(u,10))>>>0,56320|u&1023)}throw H.h(P.b0(a,0,1114111,null,null))},
bU:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m6:function(a){var u=H.bU(a).getFullYear()+0
return u},
m4:function(a){var u=H.bU(a).getMonth()+1
return u},
m0:function(a){var u=H.bU(a).getDate()+0
return u},
m1:function(a){var u=H.bU(a).getHours()+0
return u},
m3:function(a){var u=H.bU(a).getMinutes()+0
return u},
m5:function(a){var u=H.bU(a).getSeconds()+0
return u},
m2:function(a){var u=H.bU(a).getMilliseconds()+0
return u},
E:function(a){throw H.h(H.bJ(a))},
c:function(a,b){if(a==null)J.cb(a)
throw H.h(H.c4(a,b))},
c4:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aO(!0,b,s,null)
u=H.a8(J.cb(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.S(b,a,s,null,u)
return P.dF(b,s)},
n5:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bV(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bV(a,c,!0,b,"end",u)
return new P.aO(!0,b,"end",null)},
bJ:function(a){return new P.aO(!0,a,null,null)},
n0:function(a){if(typeof a!=="number")throw H.h(H.bJ(a))
return a},
h:function(a){var u
if(a==null)a=new P.dB()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ln})
u.name=""}else u.toString=H.ln
return u},
ln:function(){return J.aw(this.dartException)},
w:function(a){throw H.h(a)},
u:function(a){throw H.h(P.ch(a))},
b7:function(a){var u,t,s,r,q,p
a=H.lk(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ia(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ib:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kQ:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kz:function(a,b){return new H.hn(a,b==null?null:b.method)},
jR:function(a,b){var u=b==null,t=u?null:b.method
return new H.fJ(a,t,u?null:b.receiver)},
bL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jD(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bg(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jR(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kz(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lq()
q=$.lr()
p=$.ls()
o=$.lt()
n=$.lw()
m=$.lx()
l=$.lv()
$.lu()
k=$.lz()
j=$.ly()
i=r.ag(u)
if(i!=null)return f.$1(H.jR(H.aa(u),i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.jR(H.aa(u),i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kz(H.aa(u),i))}}return f.$1(new H.im(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dN()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aO(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dN()
return a},
c6:function(a){var u
if(a==null)return new H.ez(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ez(a)},
n8:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
ne:function(a,b,c,d,e,f){H.j(a,"$ijM")
switch(H.a8(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.t("Unsupported number of arguments for wrapped closure"))},
c3:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ne)
a.$identity=u
return u},
lM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hQ().constructor.prototype):Object.create(new H.cc(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aP
if(typeof t!=="number")return t.B()
$.aP=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kk(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lI(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kk(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lI:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.na,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kj:H.jG
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
lJ:function(a,b,c,d){var u=H.jG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kk:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lL(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lJ(t,!r,u,b)
if(t===0){r=$.aP
if(typeof r!=="number")return r.B()
$.aP=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cd
return new Function(r+H.i(q==null?$.cd=H.f8("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aP
if(typeof r!=="number")return r.B()
$.aP=r+1
o+=r
r="return function("+o+"){return this."
q=$.cd
return new Function(r+H.i(q==null?$.cd=H.f8("self"):q)+"."+H.i(u)+"("+o+");}")()},
lK:function(a,b,c,d){var u=H.jG,t=H.kj
switch(b?-1:a){case 0:throw H.h(H.mb("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lL:function(a,b){var u,t,s,r,q,p,o,n=$.cd
if(n==null)n=$.cd=H.f8("self")
u=$.ki
if(u==null)u=$.ki=H.f8("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lK(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.aP
if(typeof u!=="number")return u.B()
$.aP=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.aP
if(typeof u!=="number")return u.B()
$.aP=u+1
return new Function(n+u+"}")()},
k6:function(a,b,c,d,e,f,g){return H.lM(a,b,c,d,!!e,!!f,g)},
jG:function(a){return a.a},
kj:function(a){return a.c},
f8:function(a){var u,t,s,r=new H.cc("self","target","receiver","name"),q=J.jO(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.mX("boolean expression must not be null")
return a},
aa:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.b8(a,"String"))},
o5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.b8(a,"double"))},
lg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.b8(a,"num"))},
l9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.b8(a,"bool"))},
a8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.b8(a,"int"))},
li:function(a,b){throw H.h(H.b8(a,H.c8(H.aa(b).substring(2))))},
nl:function(a,b){throw H.h(H.lH(a,H.c8(H.aa(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.li(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.nl(a,b)},
ng:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.li(a,b)},
la:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a8(u)]
else return a.$S()}return},
eV:function(a,b){var u
if(typeof a=="function")return!0
u=H.la(J.V(a))
if(u==null)return!1
return H.l0(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.k0)return a
$.k0=!0
try{if(H.eV(a,b))return a
u=H.jz(b)
t=H.b8(a,u)
throw H.h(t)}finally{$.k0=!1}},
k7:function(a,b){if(a!=null&&!H.k5(a,b))H.w(H.b8(a,H.jz(b)))
return a},
b8:function(a,b){return new H.ic("TypeError: "+P.df(a)+": type '"+H.i(H.l4(a))+"' is not a subtype of type '"+b+"'")},
lH:function(a,b){return new H.f9("CastError: "+P.df(a)+": type '"+H.i(H.l4(a))+"' is not a subtype of type '"+b+"'")},
l4:function(a){var u,t=J.V(a)
if(!!t.$icf){u=H.la(t)
if(u!=null)return H.jz(u)
return"Closure"}return H.cx(a)},
mX:function(a){throw H.h(new H.iK(a))},
nq:function(a){throw H.h(new P.fi(a))},
mb:function(a){return new H.hC(a)},
lc:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bK:function(a){if(a==null)return
return a.$ti},
o6:function(a,b,c){return H.c7(a["$a"+H.i(c)],H.bK(b))},
cX:function(a,b,c,d){var u=H.c7(a["$a"+H.i(c)],H.bK(b))
return u==null?null:u[d]},
aC:function(a,b,c){var u=H.c7(a["$a"+H.i(b)],H.bK(a))
return u==null?null:u[c]},
y:function(a,b){var u=H.bK(a)
return u==null?null:u[b]},
jz:function(a){return H.bI(a,null)},
bI:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c8(a[0].name)+H.k3(a,1,b)
if(typeof a=="function")return H.c8(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a8(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.mw(a,b)
if('futureOr' in a)return"FutureOr<"+H.bI("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mw:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.n])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.e.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.N)p+=" extends "+H.bI(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bI(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bI(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bI(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.n7(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.aa(n[g])
i=i+h+H.bI(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
k3:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bC("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bI(p,c)}return"<"+u.i(0)+">"},
c7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
k4:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bK(a)
t=J.V(a)
if(t[b]==null)return!1
return H.l7(H.c7(t[d],u),null,c,null)},
k:function(a,b,c,d){if(a==null)return a
if(H.k4(a,b,c,d))return a
throw H.h(H.b8(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c8(b.substring(2))+H.k3(c,0,null),v.mangledGlobalNames)))},
l7:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
o3:function(a,b,c){return a.apply(b,H.c7(J.V(b)["$a"+H.i(c)],H.bK(b)))},
le:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="M"||a===-1||a===-2||H.le(u)}return!1},
k5:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="M"||b===-1||b===-2||H.le(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k5(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eV(a,b)}u=J.V(a).constructor
t=H.bK(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
I:function(a,b){if(a!=null&&!H.k5(a,b))throw H.h(H.b8(a,H.jz(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="M")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aB("type" in a?a.type:l,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"cl" in t.prototype))return!1
r=t.prototype["$a"+"cl"]
q=H.c7(r,u?a.slice(1):l)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.l0(a,b,c,d)
if('func' in a)return c.name==="jM"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.l7(H.c7(m,u),b,p,d)},
l0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aB(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aB(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aB(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aB(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nj(h,b,g,d)},
nj:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aB(c[s],d,a[s],b))return!1}return!0},
o4:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nh:function(a){var u,t,s,r,q=H.aa($.ld.$1(a)),p=$.js[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jx[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.aa($.l6.$2(a,q))
if(q!=null){p=$.js[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jx[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jy(u)
$.js[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jx[q]=u
return u}if(s==="-"){r=H.jy(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lh(a,u)
if(s==="*")throw H.h(P.kR(q))
if(v.leafTags[q]===true){r=H.jy(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lh(a,u)},
lh:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kb(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jy:function(a){return J.kb(a,!1,null,!!a.$iF)},
ni:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jy(u)
else return J.kb(u,c,null,null)},
nc:function(){if(!0===$.ka)return
$.ka=!0
H.nd()},
nd:function(){var u,t,s,r,q,p,o,n
$.js=Object.create(null)
$.jx=Object.create(null)
H.nb()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lj.$1(q)
if(p!=null){o=H.ni(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nb:function(){var u,t,s,r,q,p,o=C.u()
o=H.c2(C.v,H.c2(C.w,H.c2(C.o,H.c2(C.o,H.c2(C.x,H.c2(C.y,H.c2(C.z(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ld=new H.ju(r)
$.l6=new H.jv(q)
$.lj=new H.jw(p)},
c2:function(a,b){return a(b)||b},
lS:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(new P.fC("Illegal RegExp pattern ("+String(p)+")",a))},
no:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
n6:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lk:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ll:function(a,b,c){var u=H.np(a,b,c)
return u},
np:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lk(b),'g'),H.n6(c))},
ia:function ia(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hn:function hn(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a){this.a=a},
jD:function jD(a){this.a=a},
ez:function ez(a){this.a=a
this.b=null},
cf:function cf(){},
hY:function hY(){},
hQ:function hQ(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(a){this.a=a},
f9:function f9(a){this.a=a},
hC:function hC(a){this.a=a},
iK:function iK(a){this.a=a},
W:function W(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fN:function fN(a,b){this.a=a
this.b=b
this.c=null},
dp:function dp(a,b){this.a=a
this.$ti=b},
fO:function fO(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
fI:function fI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c0:function(a){return a},
bH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.c4(b,a))},
mv:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.n5(a,b,c))
return b},
ct:function ct(){},
dw:function dw(){},
cs:function cs(){},
dx:function dx(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
dy:function dy(){},
hk:function hk(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
n7:function(a){return J.kr(a?Object.keys(a):[],null)},
ns:function(a){return v.mangledGlobalNames[a]},
nk:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kb:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jt:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ka==null){H.nc()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.kR("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kd()]
if(r!=null)return r
r=H.nh(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.kd(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
lR:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jF(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.b0(a,0,4294967295,"length",null))
return J.kr(new Array(a),b)},
kr:function(a,b){return J.jO(H.d(a,[b]))},
jO:function(a){a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dj.prototype
return J.di.prototype}if(typeof a=="string")return J.bS.prototype
if(a==null)return J.dk.prototype
if(typeof a=="boolean")return J.fH.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.N)return a
return J.jt(a)},
k8:function(a){if(typeof a=="string")return J.bS.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.N)return a
return J.jt(a)},
k9:function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.N)return a
return J.jt(a)},
lb:function(a){if(typeof a=="number")return J.co.prototype
if(typeof a=="string")return J.bS.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.cH.prototype
return a},
n9:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.N)return a
return J.jt(a)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).n(a,b)},
kf:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lb(a).u(a,b)},
eW:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nf(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.k8(a).j(a,b)},
lE:function(a,b,c,d){return J.n9(a).hB(a,b,c,d)},
jE:function(a,b){return J.lb(a).hK(a,b)},
kg:function(a,b){return J.k9(a).G(a,b)},
lF:function(a,b){return J.k9(a).K(a,b)},
bM:function(a){return J.V(a).gI(a)},
ca:function(a){return J.k9(a).gR(a)},
cb:function(a){return J.k8(a).gk(a)},
aw:function(a){return J.V(a).i(a)},
a:function a(){},
fH:function fH(){},
dk:function dk(){},
dl:function dl(){},
hr:function hr(){},
cH:function cH(){},
by:function by(){},
aV:function aV(a){this.$ti=a},
jP:function jP(a){this.$ti=a},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
co:function co(){},
dj:function dj(){},
di:function di(){},
bS:function bS(){}},P={
ml:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mY()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c3(new P.iM(s),1)).observe(u,{childList:true})
return new P.iL(s,u,t)}else if(self.setImmediate!=null)return P.mZ()
return P.n_()},
mm:function(a){self.scheduleImmediate(H.c3(new P.iN(H.o(a,{func:1,ret:-1})),0))},
mn:function(a){self.setImmediate(H.c3(new P.iO(H.o(a,{func:1,ret:-1})),0))},
mo:function(a){P.jV(C.k,H.o(a,{func:1,ret:-1}))},
jV:function(a,b){var u=C.d.a7(a.a,1000)
return P.ms(u<0?0:u,b)},
kP:function(a,b){var u=C.d.a7(a.a,1000)
return P.mt(u<0?0:u,b)},
ms:function(a,b){var u=new P.eF()
u.eh(a,b)
return u},
mt:function(a,b){var u=new P.eF()
u.ei(a,b)
return u},
mp:function(a,b){var u,t,s
b.a=1
try{a.dQ(new P.iW(b),new P.iX(b),null)}catch(s){u=H.bL(s)
t=H.c6(s)
P.nm(new P.iY(b,u,t))}},
kZ:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaA")
if(u>=4){t=b.bF()
b.a=a.a
b.c=a.c
P.cK(b,t)}else{t=H.j(b.c,"$iba")
b.a=2
b.c=a
a.cV(t)}},
cK:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$iak")
P.jn(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cK(h.a,b)}g=h.a
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
if(m){H.j(q,"$iak")
P.jn(i,i,g.b,q.a,q.b)
return}l=$.T
if(l!==n)$.T=n
else l=i
g=b.c
if((g&15)===8)new P.j1(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.j0(u,b,q).$0()}else if((g&2)!==0)new P.j_(h,u,b).$0()
if(l!=null)$.T=l
g=u.b
if(!!J.V(g).$icl){if(g.a>=4){k=H.j(o.c,"$iba")
o.c=null
b=o.bf(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.kZ(g,o)
return}}j=b.b
k=H.j(j.c,"$iba")
j.c=null
b=j.bf(k)
g=u.a
p=u.b
if(!g){H.I(p,H.y(j,0))
j.a=4
j.c=p}else{H.j(p,"$iak")
j.a=8
j.c=p}h.a=j
g=j}},
mT:function(a,b){if(H.eV(a,{func:1,args:[P.N,P.ap]}))return H.o(a,{func:1,ret:null,args:[P.N,P.ap]})
if(H.eV(a,{func:1,args:[P.N]}))return H.o(a,{func:1,ret:null,args:[P.N]})
throw H.h(P.jF(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mS:function(){var u,t
for(;u=$.c1,u!=null;){$.cW=null
t=u.b
$.c1=t
if(t==null)$.cV=null
u.a.$0()}},
mW:function(){$.k1=!0
try{P.mS()}finally{$.cW=null
$.k1=!1
if($.c1!=null)$.ke().$1(P.l8())}},
l3:function(a){var u=new P.e2(a)
if($.c1==null){$.c1=$.cV=u
if(!$.k1)$.ke().$1(P.l8())}else $.cV=$.cV.b=u},
mV:function(a){var u,t,s=$.c1
if(s==null){P.l3(a)
$.cW=$.cV
return}u=new P.e2(a)
t=$.cW
if(t==null){u.b=s
$.c1=$.cW=u}else{u.b=t.b
$.cW=t.b=u
if(u.b==null)$.cV=u}},
nm:function(a){var u=null,t=$.T
if(C.f===t){P.jp(u,u,C.f,a)
return}P.jp(u,u,t,H.o(t.bO(a),{func:1,ret:-1}))},
kO:function(a,b){var u=$.T
if(u===C.f)return P.jV(a,H.o(b,{func:1,ret:-1}))
return P.jV(a,H.o(u.bO(b),{func:1,ret:-1}))},
mj:function(a,b){var u=$.T
if(u===C.f)return P.kP(a,H.o(b,{func:1,ret:-1,args:[P.b5]}))
return P.kP(a,H.o(u.d7(b,P.b5),{func:1,ret:-1,args:[P.b5]}))},
jn:function(a,b,c,d,e){var u={}
u.a=d
P.mV(new P.jo(u,e))},
l1:function(a,b,c,d,e){var u,t=$.T
if(t===c)return d.$0()
$.T=c
u=t
try{t=d.$0()
return t}finally{$.T=u}},
l2:function(a,b,c,d,e,f,g){var u,t=$.T
if(t===c)return d.$1(e)
$.T=c
u=t
try{t=d.$1(e)
return t}finally{$.T=u}},
mU:function(a,b,c,d,e,f,g,h,i){var u,t=$.T
if(t===c)return d.$2(e,f)
$.T=c
u=t
try{t=d.$2(e,f)
return t}finally{$.T=u}},
jp:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bO(d):c.hI(d,-1)
P.l3(d)},
iM:function iM(a){this.a=a},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
eF:function eF(){this.c=0},
jg:function jg(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ba:function ba(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aA:function aA(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iV:function iV(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(a){this.a=a},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a){this.a=a
this.b=null},
hT:function hT(){},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
cC:function cC(){},
hU:function hU(){},
b5:function b5(){},
ak:function ak(a,b){this.a=a
this.b=b},
ji:function ji(){},
jo:function jo(a,b){this.a=a
this.b=b},
j8:function j8(){},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
lU:function(a,b){return new H.W([a,b])},
lV:function(a){return H.n8(a,new H.W([null,null]))},
lW:function(a){return new P.j6([a])},
k_:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mr:function(a,b,c){var u=new P.eh(a,b,[c])
u.c=a.e
return u},
lQ:function(a,b,c){var u,t
if(P.k2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.n])
C.a.h($.ar,a)
try{P.mx(a,u)}finally{if(0>=$.ar.length)return H.c($.ar,-1)
$.ar.pop()}t=P.kK(b,H.ng(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jN:function(a,b,c){var u,t
if(P.k2(a))return b+"..."+c
u=new P.bC(b)
C.a.h($.ar,a)
try{t=u
t.a=P.kK(t.a,a,", ")}finally{if(0>=$.ar.length)return H.c($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k2:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
mx:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.i(n.gJ(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.A()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.A();r=q,q=p){p=n.gJ(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.i(r)
t=H.i(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
kt:function(a){var u,t={}
if(P.k2(a))return"{...}"
u=new P.bC("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.lF(a,new P.fT(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.c($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j6:function j6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cL:function cL(a){this.a=a
this.c=this.b=null},
eh:function eh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fP:function fP(){},
v:function v(){},
fS:function fS(){},
fT:function fT(a,b){this.a=a
this.b=b},
ah:function ah(){},
jc:function jc(){},
ei:function ei(){},
cg:function cg(){},
d7:function d7(){},
fr:function fr(){},
iq:function iq(){},
ir:function ir(){},
jh:function jh(a){this.b=0
this.c=a},
lP:function(a){if(a instanceof H.cf)return a.i(0)
return"Instance of '"+H.i(H.cx(a))+"'"},
lX:function(a,b,c){var u,t=J.lR(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.m(t,u,b)
return H.k(t,"$ib",[c],"$ab")},
ks:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.ca(a);u.A();)C.a.h(s,H.I(u.gJ(u),c))
if(b)return s
return H.k(J.jO(s),"$ib",t,"$ab")},
jU:function(a){var u,t
if(a.constructor===Array){H.k(a,"$iaV",[P.r],"$aaV")
u=a.length
t=P.kI(0,null,u)
return H.kG(t<u?C.a.e0(a,0,t):a)}return P.mf(a,0,null)},
mf:function(a,b,c){var u,t,s=J.ca(a)
for(u=0;u<b;++u)if(!s.A())throw H.h(P.b0(b,0,u,null,null))
t=[]
for(;s.A();)t.push(s.gJ(s))
return H.kG(t)},
m9:function(a){return new H.fI(a,H.lS(a,!1,!0,!1,!1,!1))},
kK:function(a,b,c){var u=J.ca(b)
if(!u.A())return a
if(c.length===0){do a+=H.i(u.gJ(u))
while(u.A())}else{a+=H.i(u.gJ(u))
for(;u.A();)a=a+c+H.i(u.gJ(u))}return a},
mu:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.p){u=$.lD().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.hL(H.I(b,H.aC(c,"cg",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.m7(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lN:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d9:function(a){if(a>=10)return""+a
return"0"+a},
km:function(a){return new P.br(1000*a)},
df:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lP(a)},
lG:function(a){return new P.aO(!1,null,null,a)},
jF:function(a,b,c){return new P.aO(!0,a,b,c)},
dF:function(a,b){return new P.bV(null,null,!0,a,b,"Value not in range")},
b0:function(a,b,c,d,e){return new P.bV(b,c,!0,a,d,"Invalid value")},
kI:function(a,b,c){if(0>a||a>c)throw H.h(P.b0(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.b0(b,a,c,"end",null))
return b}return c},
kH:function(a,b){if(typeof a!=="number")return a.ak()
if(a<0)throw H.h(P.b0(a,0,null,b,null))},
S:function(a,b,c,d,e){var u=H.a8(e==null?J.cb(b):e)
return new P.fG(u,!0,a,c,"Index out of range")},
am:function(a){return new P.io(a)},
kR:function(a){return new P.il(a)},
ch:function(a){return new P.fd(a)},
t:function(a){return new P.ea(a)},
kc:function(a){H.nk(a)},
Y:function Y(){},
ax:function ax(a,b){this.a=a
this.b=b},
z:function z(){},
br:function br(a){this.a=a},
fo:function fo(){},
fp:function fp(){},
bs:function bs(){},
f0:function f0(){},
dB:function dB(){},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function bV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fG:function fG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
io:function io(a){this.a=a},
il:function il(a){this.a=a},
hP:function hP(a){this.a=a},
fd:function fd(a){this.a=a},
hq:function hq(){},
dN:function dN(){},
fi:function fi(a){this.a=a},
ea:function ea(a){this.a=a},
fC:function fC(a,b){this.a=a
this.b=b},
r:function r(){},
e:function e(){},
aU:function aU(){},
b:function b(){},
D:function D(){},
M:function M(){},
a9:function a9(){},
N:function N(){},
ap:function ap(){},
n:function n(){},
bC:function bC(a){this.a=a},
n3:function(a){var u,t=J.V(a)
if(!!t.$ibu){u=t.gdi(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eK(a.data,a.height,a.width)},
n2:function(a){if(a instanceof P.eK)return{data:a.a,height:a.b,width:a.c}
return a},
bm:function(a){var u,t,s,r,q
if(a==null)return
u=P.lU(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.aa(t[r])
u.m(0,q,a[q])}return u},
n1:function(a){var u={}
a.K(0,new P.jq(u))
return u},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a){this.a=a},
fy:function fy(a,b){this.a=a
this.b=b},
fz:function fz(){},
fA:function fA(){},
j5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mq:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j7:function j7(){},
ao:function ao(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
fL:function fL(){},
bi:function bi(){},
ho:function ho(){},
hu:function hu(){},
hX:function hX(){},
p:function p(){},
bl:function bl(){},
i9:function i9(){},
ef:function ef(){},
eg:function eg(){},
eq:function eq(){},
er:function er(){},
eB:function eB(){},
eC:function eC(){},
eI:function eI(){},
eJ:function eJ(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(a){this.a=a},
f5:function f5(){},
bN:function bN(){},
hp:function hp(){},
e3:function e3(){},
d2:function d2(){},
dh:function dh(){},
dE:function dE(){},
dG:function dG(){},
bW:function bW(){},
dH:function dH(){},
dO:function dO(){},
dW:function dW(){},
hO:function hO(){},
ex:function ex(){},
ey:function ey(){}},W={
jH:function(){var u=document.createElement("canvas")
return u},
kn:function(a){H.j(a,"$if")
return"wheel"},
j4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l_:function(a,b,c,d){var u=W.j4(W.j4(W.j4(W.j4(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.l5(new W.iU(c),W.m)
if(u!=null&&!0)J.lE(a,b,u,!1)
return new W.iT(a,b,u,!1,[e])},
l5:function(a,b){var u=$.T
if(u===C.f)return a
return u.d7(a,b)},
q:function q(){},
eX:function eX(){},
eZ:function eZ(){},
f_:function f_(){},
d1:function d1(){},
bP:function bP(){},
ce:function ce(){},
bo:function bo(){},
ci:function ci(){},
fe:function fe(){},
O:function O(){},
cj:function cj(){},
ff:function ff(){},
aQ:function aQ(){},
aR:function aR(){},
fg:function fg(){},
fh:function fh(){},
fj:function fj(){},
db:function db(){},
fl:function fl(){},
dc:function dc(){},
dd:function dd(){},
fm:function fm(){},
fn:function fn(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
a2:function a2(){},
m:function m(){},
f:function f(){},
aS:function aS(){},
fw:function fw(){},
fx:function fx(){},
fB:function fB(){},
aT:function aT(){},
fE:function fE(){},
bR:function bR(){},
bu:function bu(){},
cn:function cn(){},
aW:function aW(){},
fQ:function fQ(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(a){this.a=a},
hb:function hb(){},
hc:function hc(a){this.a=a},
aZ:function aZ(){},
hd:function hd(){},
ae:function ae(){},
iP:function iP(a){this.a=a},
G:function G(){},
cu:function cu(){},
b_:function b_(){},
hs:function hs(){},
hA:function hA(){},
hB:function hB(a){this.a=a},
hD:function hD(){},
b1:function b1(){},
hM:function hM(){},
b2:function b2(){},
hN:function hN(){},
b3:function b3(){},
hR:function hR(){},
hS:function hS(a){this.a=a},
aG:function aG(){},
b4:function b4(){},
aH:function aH(){},
hZ:function hZ(){},
i_:function i_(){},
i4:function i4(){},
b6:function b6(){},
aK:function aK(){},
i7:function i7(){},
i8:function i8(){},
bE:function bE(){},
ip:function ip(){},
iH:function iH(){},
b9:function b9(){},
cJ:function cJ(){},
iR:function iR(){},
e5:function e5(){},
j3:function j3(){},
en:function en(){},
jd:function jd(){},
je:function je(){},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jZ:function jZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iT:function iT(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iU:function iU(a){this.a=a},
B:function B(){},
dg:function dg(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
cQ:function cQ(){},
cR:function cR(){},
ev:function ev(){},
ew:function ew(){},
eA:function eA(){},
eD:function eD(){},
eE:function eE(){},
cS:function cS(){},
cT:function cT(){},
eG:function eG(){},
eH:function eH(){},
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
fb:function(a){var u=new O.R([a])
u.bb(a)
return u},
R:function R(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cq:function cq(){this.b=this.a=null},
kM:function(a,b,c){var u,t,s,r=new O.aJ(),q=r.a
r.a=c
c.gl().h(0,r.gac())
u=new D.A("texture",q,r.a,[T.dP])
u.b=!0
r.F(u)
t=V.aY()
if(!J.J(r.b,t)){q=r.b
r.b=t
u=new D.A("colorMatrix",q,t,[V.ad])
u.b=!0
r.F(u)}s=V.hv()
if(!J.J(r.c,s)){q=r.c
r.c=s
u=new D.A("source",q,s,[V.bB])
u.b=!0
r.F(u)}if(!J.J(r.d,a)){q=r.d
r.d=a
u=new D.A("destination",q,a,[V.bB])
u.b=!0
r.F(u)}if(r.e!==b){r.e=b
u=new D.A("flip",!b,b,[P.Y])
u.b=!0
r.F(u)}r.f=null
return r},
fk:function fk(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dt:function dt(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(){},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
fW:function fW(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dv:function dv(){},
fX:function fX(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aX:function aX(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fZ:function fZ(){var _=this
_.e=_.d=_.c=_.b=null},
h_:function h_(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h0:function h0(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dz:function dz(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bD:function bD(){},
dQ:function dQ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aJ:function aJ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
jK:function(){var u=new E.al()
u.a=""
u.b=!0
u.sea(0,O.fb(E.al))
u.y.aD(u.gi6(),u.gi9())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sba(0,null)
u.sb5(null)
return u},
ma:function(a,b){var u=new E.hw(a)
u.e6(a,b)
return u},
mi:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibP)return E.kN(a,!0,!0,!0,!1)
u=W.jH()
t=u.style
t.width="100%"
t.height="100%"
s.gdd(a).h(0,u)
return E.kN(u,!0,!0,!0,!1)},
kN:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dS(),j=H.j(C.h.ck(a,"webgl2",P.lV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibW")
if(j==null)H.w(P.t("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.ma(j,a)
u=new T.i1(j)
H.a8(j.getParameter(3379))
u.c=H.a8(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dZ(a)
t=new X.fK()
t.c=new X.as(!1,!1,!1)
t.sh3(P.lW(P.r))
u.b=t
t=new X.he(u)
t.f=0
t.r=V.bj()
t.x=V.bj()
t.ch=t.Q=1
u.c=t
t=new X.fR(u)
t.r=0
t.x=V.bj()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i6(u)
t.f=V.bj()
t.r=V.bj()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seF(H.d([],[[P.cC,P.N]]))
t=u.z
s=document
r=W.ae
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.o(u.gfg(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.o(u.gfq(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.o(u.gfa(),o),!1,p))
t=u.z
n=W.aW
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.o(u.gfv(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.o(u.gft(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.o(u.gfB(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.o(u.gfF(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.o(u.gfD(),q),!1,r))
n=u.z
W.kn(a)
m=W.b9;(n&&C.a).h(n,W.a7(a,H.aa(W.kn(a)),H.o(u.gfH(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.o(u.gfi(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.o(u.gfk(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.o(u.gfJ(),o),!1,p))
p=u.z
o=W.aK
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.o(u.gfZ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.o(u.gfV(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.o(u.gfX(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ax(Date.now(),!1)
k.cy=0
k.cX()
return k},
f7:function f7(){},
al:function al(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
dS:function dS(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i3:function i3(a){this.a=a}},Z={
jY:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c0(c)),35044)
a.bindBuffer(b,null)
return new Z.e1(b,u)},
az:function(a){return new Z.av(a)},
e1:function e1(a,b){this.a=a
this.b=b},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bG:function bG(a){this.a=a},
bc:function bc(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a){this.a=a}},D={
L:function(){var u=new D.bt()
u.saa(null)
u.saH(null)
u.c=null
u.d=0
return u},
fa:function fa(){},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
x:function x(){this.b=null},
bw:function bw(a){this.b=null
this.$ti=a},
bx:function bx(a){this.b=null
this.$ti=a},
A:function A(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ac:function ac(){},
dn:function dn(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dD:function dD(){},
dM:function dM(){}},X={d4:function d4(a,b){this.a=a
this.b=b},dm:function dm(a,b){this.a=a
this.b=b},fK:function fK(){var _=this
_.d=_.c=_.b=_.a=null},dr:function dr(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fR:function fR(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},as:function as(a,b,c){this.a=a
this.b=b
this.c=c},bz:function bz(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},he:function he(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cr:function cr(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ht:function ht(){},dU:function dU(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i6:function i6(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dZ:function dZ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kh:function(a,b,c){var u,t,s,r=new X.f6()
r.d=r.c=r.b=r.a=512
r.e=!0
r.f=!1
r.x=r.r=1
r.ch=T.kL(null)
r.cx=new V.a1(0,0,0,1)
r.cy=!0
r.db=2000
r.dx=!0
r.dy=V.hv()
r.saj(0,512)
r.saf(0,512)
if(c==null)c=new V.a1(0,0,0,1)
if(!r.cx.n(0,c)){u=r.cx
r.cx=c
t=new D.A("color",u,c,[V.a1])
t.b=!0
r.a_(t)}if(r.cy!==b){r.cy=b
t=new D.A("clearColor",!b,b,[P.Y])
t.b=!0
r.a_(t)}t=r.db
if(!(Math.abs(t-2000)<$.K().a)){r.db=2000
t=new D.A("depth",t,2000,[P.z])
t.b=!0
r.a_(t)}if(!r.f){r.f=!0
t=new D.A("autoResize",!1,!0,[P.Y])
t.b=!0
r.a_(t)}t=r.r
if(!(Math.abs(t-1)<$.K().a)){r.r=1
t=new D.A("autoResizeScalarX",t,1,[P.z])
t.b=!0
r.a_(t)}t=r.x
if(!(Math.abs(t-1)<$.K().a)){r.x=1
t=new D.A("autoResizeScalarY",t,1,[P.z])
t.b=!0
r.a_(t)}s=V.hv()
if(!J.J(r.dy,s)){u=r.dy
r.dy=s
t=new D.A("region",u,s,[V.bB])
t.b=!0
r.a_(t)}return r},
jL:function(a,b){var u=new X.fD(),t=new V.a1(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.hv()
u.r=t
return u},
kB:function(a){var u,t=new X.dC()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.sb5(a)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.K().a)){t.c=1.0471975511965976
u=new D.A("fov",u,1.0471975511965976,[P.z])
u.b=!0
t.a_(u)}u=t.d
if(!(Math.abs(u-0.1)<$.K().a)){t.d=0.1
u=new D.A("near",u,0.1,[P.z])
u.b=!0
t.a_(u)}u=t.e
if(!(Math.abs(u-2000)<$.K().a)){t.e=2000
u=new D.A("far",u,2000,[P.z])
u.b=!0
t.a_(u)}return t},
f6:function f6(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bO:function bO(){},
fD:function fD(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fF:function fF(){this.b=this.a=null},
dC:function dC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cD:function cD(){}},V={
nt:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.dW(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.e.ah("null",c)
return C.e.ah(C.c.dR(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
c5:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.n])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.P(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.m(p,q,C.e.ah(p[q],t))}return p},
cY:function(a){return C.c.iy(Math.pow(2,C.G.c_(Math.log(H.n0(a))/Math.log(2))))},
jS:function(){var u=$.ku
return u==null?$.ku=new V.cp(1,0,0,0,1,0,0,0,1):u},
aY:function(){var u=$.h7
return u==null?$.h7=V.bg(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bg:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kx:function(a,b,c){return V.bg(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kw:function(a,b,c){return V.bg(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
kv:function(a,b,c){var u=c.t(0,Math.sqrt(c.C(c))),t=b.ax(u),s=t.t(0,Math.sqrt(t.C(t))),r=u.ax(s),q=new V.H(a.a,a.b,a.c),p=s.O(0).C(q),o=r.O(0).C(q),n=u.O(0).C(q)
return V.bg(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bj:function(){var u=$.kD
return u==null?$.kD=new V.a4(0,0):u},
kE:function(){var u=$.cv
return u==null?$.cv=new V.a_(0,0,0):u},
hv:function(){var u=$.cz
return u==null?$.cz=V.cy(0,0,1,1):u},
cy:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bB(a,b,c,d)},
cI:function(){var u=$.kX
return u==null?$.kX=new V.H(0,0,0):u},
mk:function(){var u=$.is
return u==null?$.is=new V.H(-1,0,0):u},
jX:function(){var u=$.it
return u==null?$.it=new V.H(0,1,0):u},
kY:function(){var u=$.iu
return u==null?$.iu=new V.H(0,0,1):u},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function fs(a){this.a=a},
cp:function cp(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ad:function ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function(a){var u=new V.hE()
u.e7(a)
return u},
eY:function eY(){},
bf:function bf(){},
ds:function ds(){},
bh:function bh(){this.a=null},
hE:function hE(){this.a=null},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.b=a
this.c=null},
i5:function i5(){this.c=this.b=this.a=null},
cG:function cG(a){this.b=a
this.a=this.c=null},
nn:function(a){P.mj(C.E,new V.jA(a))},
mc:function(a){var u=new V.hI()
u.e8(a,!0)
return u},
jA:function jA(a){this.a=a},
hI:function hI(){this.b=this.a=null},
hK:function hK(a){this.a=a},
hJ:function hJ(a){this.a=a}},U={
kl:function(){var u=new U.fc()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jI:function(a){var u=new U.d6()
u.a=a
return u},
kp:function(){var u=new U.cm()
u.bb(U.af)
u.aD(u.ged(),u.gfN())
u.e=null
u.f=V.aY()
u.r=0
return u},
kS:function(a,b){var u,t,s,r=new U.e_(),q=U.kl()
q.sdU(0,!0)
q.sdD(6.283185307179586)
q.sdF(0)
q.sab(0,0)
q.sdE(100)
q.sY(0)
q.sdh(0.5)
r.b=q
u=r.gbc()
q.gl().h(0,u)
q=U.kl()
q.sdU(0,!0)
q.sdD(6.283185307179586)
q.sdF(0)
q.sab(0,0)
q.sdE(100)
q.sY(0)
q.sdh(0.5)
r.c=q
q.gl().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.as(a,!1,!1)
s=r.d
r.d=t
q=new D.A("modifiers",s,t,[X.as])
q.b=!0
r.P(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.A("invertX",q,!1,[P.Y])
q.b=!0
r.P(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.A("invertY",q,!1,[P.Y])
q.b=!0
r.P(q)}r.bN(b)
return r},
kT:function(a,b){var u,t,s=new U.e0()
s.c=0.01
s.e=s.d=0
u=new X.as(a,!1,!1)
s.b=u
t=new D.A("modifiers",null,u,[X.as])
t.b=!0
s.P(t)
s.bN(b)
return s},
fc:function fc(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){this.b=this.a=null},
cm:function cm(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
af:function af(){},
e_:function e_(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e0:function e0(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jJ:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.d8()
k.a=!0
u=E.jK()
t=F.jT()
s=t.a
r=new V.H(-1,-1,1)
r=r.t(0,Math.sqrt(r.C(r)))
q=s.bi(new V.bk(1,2,4,6),new V.a1(1,0,0,1),new V.a_(-1,-1,0),new V.a4(0,1),r,l)
s=t.a
r=new V.H(1,-1,1)
r=r.t(0,Math.sqrt(r.C(r)))
p=s.bi(new V.bk(0,3,4,6),new V.a1(0,0,1,1),new V.a_(1,-1,0),new V.a4(1,1),r,l)
s=t.a
r=new V.H(1,1,1)
r=r.t(0,Math.sqrt(r.C(r)))
o=s.bi(new V.bk(0,2,5,6),new V.a1(0,1,0,1),new V.a_(1,1,0),new V.a4(1,0),r,l)
s=t.a
r=V.bj()
n=new V.H(-1,1,1)
n=n.t(0,Math.sqrt(n.C(n)))
m=s.bi(new V.bk(0,2,4,7),new V.a1(1,1,0,1),new V.a_(-1,1,0),r,n,l)
t.d.hC(H.d([q,p,o,m],[F.aq]))
t.al()
u.sba(0,t)
k.e=u
k.saX(l)
k.saB(0,l)
k.saq(l)
return k},
ko:function(){var u,t=new M.de()
t.a=!0
t.ses(0,O.fb(E.al))
t.e.aD(t.gfc(),t.gfe())
t.y=t.x=t.r=t.f=null
u=X.jL(!0,null)
t.saX(null)
t.saB(0,u)
t.saq(null)
return t},
d5:function d5(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
d8:function d8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
at:function at(){}},A={
lY:function(a,b){var u=a.b2,t=new A.du(b,u)
t.aQ(b,u)
t.e5(a,b)
return t},
lZ:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gai(a1)+a2.gai(a2)+a3.gai(a3)+a4.gai(a4)+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+a9.gai(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.u)(b0),++t)e+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.u)(b1),++t)e+="_"+H.i(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.u)(b2),++t)e+="_"+H.i(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.ag()
if(k){u=$.aM()
f=new Z.av(f.a|u.a)}if(j){u=$.aL()
f=new Z.av(f.a|u.a)}if(i){u=$.aN()
f=new Z.av(f.a|u.a)}if(h){u=$.bn()
f=new Z.av(f.a|u.a)}return new A.fY(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
jl:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jm:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jl(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jB(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
mB:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jl(b,t,"emission")
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
my:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jm(b,t,"ambient")
b.a+="\n"},
mz:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jm(b,t,"diffuse")
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
mC:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jm(b,t,"invDiffuse")
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
mI:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jm(b,t,"specular")
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
mE:function(a,b){var u,t,s
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
mG:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jl(b,t,"reflect")
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
mH:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jl(b,t,"refract")
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
mA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.jB(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ar()
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
o=H.d([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
mF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.jB(t)
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
if(typeof u!=="number")return u.ar()
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
l=H.d([],r)
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
l=H.d([],r)
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
k=H.d([],r)
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
mJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.jB(t)
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
if(typeof u!=="number")return u.ar()
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
j=H.d([],u)
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
j=H.d([],u)
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
i=H.d([],u)
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
mD:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.n])
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
mK:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bC("")
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
A.mB(a,i)
A.my(a,i)
A.mz(a,i)
A.mC(a,i)
A.mI(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.mG(a,i)
A.mH(a,i)}A.mE(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.u)(q),++n)A.mA(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.u)(q),++n)A.mF(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.u)(q),++n)A.mJ(a,q[n],i)
A.mD(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.d([],[P.n])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.u)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aP(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.u)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aP(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.u)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aP(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
mL:function(a,b){var u,t,s
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
mN:function(a,b){var u
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
mM:function(a,b){var u
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
mP:function(a,b){var u,t
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
mQ:function(a,b){var u,t
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
mO:function(a,b){var u
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
mR:function(a,b){var u
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
ky:function(a){var u,t,s,r,q,p
if(!a.a)u=a.c
else u=!0
t=a.c
s="Normal_"+a.gai(a)
r=$.ag()
q=$.aM()
q=r.a|q.a
p=new Z.av(q)
if(u)p=new Z.av(q|$.aL().a)
return new A.hm(a,u,!1,t,s,t?new Z.av(p.a|$.aN().a):p)},
jB:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.e.aP(a,1)},
mh:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.D
t=(s||b===C.i?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.C)t+="      clrAccum += color;\n"
else if(b===C.j)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.i
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
mg:function(a,b,c){var u="TextureLayout_"+a+"_"+C.d.i(b.a),t=new A.dR(c,u)
t.aQ(c,u)
t.e9(a,b,c)
return t},
jW:function(a,b,c,d,e){var u=new A.ie(a,c,e)
u.f=d
u.shz(P.lX(d,0,P.r))
return u},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a){this.a=a},
ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
du:function du(a,b){var _=this
_.dk=_.iH=_.dj=_.bk=_.b2=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iP=_.iO=_.iN=_.bZ=_.bY=_.bX=_.bW=_.bV=_.bU=_.dA=_.iM=_.dz=_.dw=_.iL=_.dv=_.du=_.dt=_.iK=_.ds=_.dr=_.dq=_.iJ=_.dn=_.dm=_.iI=_.dl=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aD:function aD(a,b){this.a=a
this.b=b},
aE:function aE(a,b){this.a=a
this.b=b},
aF:function aF(a,b){this.a=a
this.b=b},
fY:function fY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b2=b3
_.bk=b4},
bY:function bY(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
c_:function c_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dA:function dA(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hm:function hm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cA:function cA(){},
bp:function bp(a,b){this.a=a
this.b=b},
dK:function dK(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dR:function dR(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dV:function dV(){},
ij:function ij(a){this.a=a},
aj:function aj(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a5:function a5(a,b,c){this.a=a
this.c=b
this.d=c},
au:function au(a,b,c){this.a=a
this.c=b
this.d=c},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
bX:function bX(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
bF:function bF(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
ay:function ay(a,b,c){this.a=a
this.c=b
this.d=c},
a6:function a6(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jk:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cU:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.H(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.H(u+a3,t+a1,s+a2)
q=new V.H(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.H(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jk(i)
l=F.jk(j.b)
k=F.lm(d,a0,new F.jj(j,F.jk(j.c),F.jk(j.d),l,m,c),b)
if(k!=null)a.c7(k)},
nr:function(){return F.n4(15,30,0.5,1,new F.jC())},
n4:function(a,b,c,d,e){var u=F.lm(a,b,new F.jr(e,d,b,c),null)
if(u==null)return
u.al()
u.i5(new F.iB(),new F.hl())
return u},
lm:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.jT()
t=H.d([],[F.aq])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iv(g,g,new V.a1(p,0,0,1),g,g,new V.a4(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bS(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iv(g,g,new V.a1(j,i,h,1),g,g,new V.a4(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bS(d))}}u.d.hD(a+1,b+1,t)
return u},
ck:function(a,b,c){var u=new F.a3(),t=a.a
if(t==null)H.w(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.w(P.t("May not create a face with vertices attached to different shapes."))
u.bK(a)
u.bL(b)
u.hd(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
lT:function(a,b){var u=new F.be(),t=a.a
if(t==null)H.w(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.w(P.t("May not create a line with vertices attached to different shapes."))
u.bK(a)
u.bL(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
jT:function(){var u=new F.dI(),t=new F.iw(u)
t.b=!1
t.shA(H.d([],[F.aq]))
u.a=t
t=new F.hH(u)
t.sbD(H.d([],[F.bA]))
u.b=t
t=new F.hG(u)
t.seP(H.d([],[F.be]))
u.c=t
t=new F.hF(u)
t.seG(H.d([],[F.a3]))
u.d=t
u.e=null
return u},
iv:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aq(),r=new F.iE()
r.sbD(H.d([],[F.bA]))
s.b=r
r=new F.iA()
u=[F.be]
r.seQ(H.d([],u))
r.seR(H.d([],u))
s.c=r
r=new F.ix()
u=[F.a3]
r.seH(H.d([],u))
r.seI(H.d([],u))
r.seJ(H.d([],u))
s.d=r
h=$.lA()
s.e=0
r=$.ag()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aM().a)!==0?e:t
s.x=(u&$.aL().a)!==0?b:t
s.y=(u&$.bb().a)!==0?f:t
s.z=(u&$.aN().a)!==0?g:t
s.Q=(u&$.lB().a)!==0?c:t
s.ch=(u&$.c9().a)!==0?i:0
s.cx=(u&$.bn().a)!==0?a:t
return s},
jj:function jj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jC:function jC(){},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fv:function fv(){},
hL:function hL(){},
be:function be(){this.b=this.a=null},
fM:function fM(){},
id:function id(){},
bA:function bA(){this.a=null},
dI:function dI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hF:function hF(a){this.a=a
this.b=null},
hG:function hG(a){this.a=a
this.b=null},
hH:function hH(a){this.a=a
this.b=null},
aq:function aq(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iG:function iG(a){this.a=a},
iF:function iF(a){this.a=a},
iw:function iw(a){this.a=a
this.c=this.b=null},
ix:function ix(){this.d=this.c=this.b=null},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(){this.c=this.b=null},
iC:function iC(){},
iB:function iB(){},
iD:function iD(){},
hl:function hl(){},
iE:function iE(){this.b=null}},T={
kL:function(a){var u=new T.i0()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
aI:function aI(){},
dP:function dP(){},
i0:function i0(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cE:function cE(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a){var _=this
_.a=a
_.e=_.d=_.c=null},
i2:function i2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},S={
lf:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=V.mc("Test 031"),a7=W.jH()
a7.className="pageLargeCanvas"
a7.id=a4
a6.a.appendChild(a7)
u=[P.n]
a6.d6(H.d(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."],u))
a6.d6(H.d(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.w(P.t("Failed to find an element with the identifier, testCanvas."))
s=E.mi(t,!0,!0,!0,!1)
r=E.jK()
q=F.jT()
F.cU(q,a5,a5,1,1,1,0,0,1)
F.cU(q,a5,a5,1,1,0,1,0,3)
F.cU(q,a5,a5,1,1,0,0,1,2)
F.cU(q,a5,a5,1,1,-1,0,0,0)
F.cU(q,a5,a5,1,1,0,-1,0,0)
F.cU(q,a5,a5,1,1,0,0,-1,3)
q.al()
r.sba(0,q)
a6=U.kp()
a6.h(0,U.kS(!1,s.r))
a6.h(0,U.kT(!1,s.r))
r.sb5(a6)
p=new O.dz()
p.b=V.jS()
p.c=V.aY()
p.d=new A.ab(!1,!1,!1)
p.cY(a5)
p.cZ(a5)
p.W()
p.r=null
a6=s.f.i3("../resources/diceBumpMap")
u=p.d
if(!u.c){p.d=new A.ab(u.a,!1,!0)
p.cY(a5)
p.a=null}p.cZ(a6)
o=X.kh(!0,!0,new V.a1(0.5,0.5,1,1))
n=M.ko()
n.saq(p)
n.saB(0,o)
n.e.h(0,r)
n.b.sb5(U.jI(V.kx(0,0,5)))
m=U.kp()
m.h(0,U.kS(!0,s.r))
m.h(0,U.kT(!0,s.r))
m.h(0,U.jI(V.kx(0,0,5)))
l=X.kB(m)
k=X.kh(!0,!1,a5)
j=E.jK()
j.sba(0,F.nr())
i=new O.dt()
i.sep(O.fb(V.ad))
i.e.aD(i.gf6(),i.gf8())
a6=new O.aX(i,"emission")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Z(0,0,0)
i.f=a6
a6=new O.aX(i,"ambient")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Z(0,0,0)
i.r=a6
a6=new O.aX(i,"diffuse")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Z(0,0,0)
i.x=a6
a6=new O.aX(i,"invDiffuse")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Z(0,0,0)
i.y=a6
a6=new O.h0(i,"specular")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Z(0,0,0)
a6.ch=100
i.z=a6
a6=new O.fX(i,"bump")
a6.c=new A.ab(!1,!1,!1)
i.Q=a6
i.ch=null
a6=new O.aX(i,"reflect")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Z(0,0,0)
i.cx=a6
a6=new O.h_(i,"refract")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Z(0,0,0)
a6.ch=1
i.cy=a6
a6=new O.fW(i,"alpha")
a6.c=new A.ab(!1,!1,!1)
a6.f=1
i.db=a6
a6=new D.dn()
a6.bb(D.ac)
a6.seC(H.d([],[D.bq]))
a6.sh0(H.d([],[D.dD]))
a6.shk(H.d([],[D.dM]))
a6.y=a6.x=null
a6.cl(a6.gf4(),a6.gfL(),a6.gfP())
i.dx=a6
u=new O.fZ()
u.b=new V.a1(0,0,0,0)
u.c=1
u.d=10
u.e=!1
i.dy=u
u=a6.x
a6=u==null?a6.x=D.L():u
a6.h(0,i.gh9())
a6=i.dx
u=a6.y
a6=u==null?a6.y=D.L():u
a6.h(0,i.gac())
i.fr=null
a6=i.dx
h=V.jX()
u=U.jI(V.kv(V.kE(),h,new V.H(0,-1,-1)))
g=new V.Z(1,1,1)
f=new D.bq()
f.c=new V.Z(1,1,1)
f.a=V.kY()
f.d=V.jX()
f.e=V.mk()
e=f.b
f.b=u
u.gl().h(0,f.geb())
u=new D.A("mover",e,f.b,[U.af])
u.b=!0
f.as(u)
if(!f.c.n(0,g)){e=f.c
f.c=g
u=new D.A("color",e,g,[V.Z])
u.b=!0
f.as(u)}a6.h(0,f)
a6=i.r
a6.saY(0,new V.Z(0,0,1))
a6=i.x
a6.saY(0,new V.Z(0,1,0))
a6=i.z
a6.saY(0,new V.Z(1,0,0))
a6=i.z
a6.d0(new A.ab(!0,!1,a6.c.c))
a6.d1(10)
a6=s.f.dC("../resources/maskonaive",".jpg")
d=M.jJ()
u=new O.dJ()
u.b=1.0471975511965976
u.d=new V.Z(1,1,1)
e=u.c
u.c=a6
a6.gl().h(0,u.gac())
a6=new D.A("boxTexture",e,u.c,[T.cE])
a6.b=!0
u.F(a6)
d.saq(u)
d.saB(0,k)
d.saX(l)
c=M.ko()
c.saX(l)
c.saq(i)
c.saB(0,k)
c.e.h(0,j)
b=new O.fk()
b.sdf(a5)
b.sdc(a5)
a=V.jS()
if(!J.J(b.d,a)){b.d=a
b.W()}a=V.jS()
if(!J.J(b.e,a)){b.e=a
b.W()}b.sda(a5)
b.sdf(k.ch)
b.sdc(o.ch)
b.sda(V.kw(0.05,0.05,0.05))
a0=M.jJ()
a0.saq(b)
a1=new O.dQ()
a1.a=new V.a1(0,0,0,0)
a1.seE(O.fb(O.aJ))
a1.c.aD(a1.gfm(),a1.gfo())
a1.d=0
a1.e=null
a1.r=a1.f=C.j
a2=new V.a1(0,0,0,0)
if(!a1.a.n(0,a2)){e=a1.a
a1.a=a2
a6=new D.A("backColor",e,a2,[V.a1])
a6.b=!0
a1.F(a6)}a1.sd8(C.j)
a1.sd8(C.i)
a6=a1.c
u=o.ch
a6.h(0,O.kM(V.cy(0,0.8,0.2,0.2),!0,u))
u=a1.c
a6=k.ch
u.h(0,O.kM(V.cy(0,0.6,0.2,0.2),!1,a6))
a3=M.jJ()
a3.saB(0,X.jL(!1,a5))
a3.saq(a1)
a6=M.at
u=H.d([d,c,n,a0,a3],[a6])
f=new M.d5()
f.bb(a6)
f.e=!0
f.f=!1
f.r=null
f.aD(f.gfR(),f.gfT())
f.bM(0,u)
a6=s.d
if(a6!==f){if(a6!=null)a6.gl().E(0,s.gcs())
s.d=f
f.gl().h(0,s.gcs())
s.ct()}V.nn(s)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jQ.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gI:function(a){return H.cw(a)},
i:function(a){return"Instance of '"+H.i(H.cx(a))+"'"}}
J.fH.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iY:1}
J.dk.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dl.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hr.prototype={}
J.cH.prototype={}
J.by.prototype={
i:function(a){var u=a[$.lp()]
if(u==null)return this.e2(a)
return"JavaScript function for "+H.i(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijM:1}
J.aV.prototype={
h:function(a,b){H.I(b,H.y(a,0))
if(!!a.fixed$length)H.w(P.am("add"))
a.push(b)},
dM:function(a,b){if(!!a.fixed$length)H.w(P.am("removeAt"))
if(b<0||b>=a.length)throw H.h(P.dF(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var u
if(!!a.fixed$length)H.w(P.am("remove"))
for(u=0;u<a.length;++u)if(J.J(a[u],b)){a.splice(u,1)
return!0}return!1},
bM:function(a,b){var u,t
H.k(b,"$ie",[H.y(a,0)],"$ae")
if(!!a.fixed$length)H.w(P.am("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.ch(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.m(t,u,H.i(a[u]))
return t.join(b)},
i1:function(a){return this.q(a,"")},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
e0:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.b0(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.b0(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.y(a,0)])
return H.d(a.slice(b,c),[H.y(a,0)])},
ghX:function(a){if(a.length>0)return a[0]
throw H.h(H.kq())},
gc3:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.kq())},
br:function(a,b){var u=H.y(a,0)
H.o(b,{func:1,ret:P.r,args:[u,u]})
if(!!a.immutable$list)H.w(P.am("sort"))
H.dL(a,0,a.length-1,b,u)},
ae:function(a,b){var u
for(u=0;u<a.length;++u)if(J.J(a[u],b))return!0
return!1},
i:function(a){return P.jN(a,"[","]")},
gR:function(a){return new J.an(a,a.length,[H.y(a,0)])},
gI:function(a){return H.cw(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.w(P.am("set length"))
if(b<0)throw H.h(P.b0(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.c4(a,b))
return a[b]},
m:function(a,b,c){H.I(c,H.y(a,0))
if(!!a.immutable$list)H.w(P.am("indexed set"))
if(b>=a.length||b<0)throw H.h(H.c4(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jP.prototype={}
J.an.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.u(s))
u=t.c
if(u>=r){t.scK(null)
return!1}t.scK(s[u]);++t.c
return!0},
scK:function(a){this.d=H.I(a,H.y(this,0))},
$iaU:1}
J.co.prototype={
hK:function(a,b){var u
H.lg(b)
if(typeof b!=="number")throw H.h(H.bJ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbl(b)
if(this.gbl(a)===u)return 0
if(this.gbl(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbl:function(a){return a===0?1/a<0:a<0},
iy:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.am(""+a+".toInt()"))},
c_:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.am(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.am(""+a+".round()"))},
dR:function(a,b){var u
if(b>20)throw H.h(P.b0(b,0,20,"fractionDigits",null))
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
dW:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e4:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d3(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.d3(a,b)},
d3:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.am("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
bg:function(a,b){var u
if(a>0)u=this.hi(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hi:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia9:1}
J.dj.prototype={$ir:1}
J.di.prototype={}
J.bS.prototype={
bR:function(a,b){if(b<0)throw H.h(H.c4(a,b))
if(b>=a.length)H.w(H.c4(a,b))
return a.charCodeAt(b)},
bd:function(a,b){if(b>=a.length)throw H.h(H.c4(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.h(P.jF(b,null,null))
return a+b},
co:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.dF(b,null))
if(b>c)throw H.h(P.dF(b,null))
if(c>a.length)throw H.h(P.dF(c,null))
return a.substring(b,c)},
aP:function(a,b){return this.co(a,b,null)},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikA:1,
$in:1}
H.a0.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.e.bR(this.a,b)},
$adY:function(){return[P.r]},
$av:function(){return[P.r]},
$ae:function(){return[P.r]},
$ab:function(){return[P.r]}}
H.fq.prototype={}
H.dq.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.k8(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.ch(s))
u=t.c
if(u>=q){t.saS(null)
return!1}t.saS(r.G(s,u));++t.c
return!0},
saS:function(a){this.d=H.I(a,H.y(this,0))},
$iaU:1}
H.fU.prototype={
gR:function(a){return new H.fV(J.ca(this.a),this.b,this.$ti)},
gk:function(a){return J.cb(this.a)},
G:function(a,b){return this.b.$1(J.kg(this.a,b))},
$ae:function(a,b){return[b]}}
H.fV.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saS(u.c.$1(t.gJ(t)))
return!0}u.saS(null)
return!1},
gJ:function(a){return this.a},
saS:function(a){this.a=H.I(a,H.y(this,1))},
$aaU:function(a,b){return[b]}}
H.iI.prototype={
gR:function(a){return new H.iJ(J.ca(this.a),this.b,this.$ti)}}
H.iJ.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.C(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.bQ.prototype={}
H.dY.prototype={}
H.dX.prototype={}
H.ia.prototype={
ag:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hn.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fJ.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.im.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jD.prototype={
$1:function(a){if(!!J.V(a).$ibs)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:26}
H.ez.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iap:1}
H.cf.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ijM:1,
giC:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hY.prototype={}
H.hQ.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c8(u)+"'"}}
H.cc.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cc))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cw(this.a)
else u=typeof t!=="object"?J.bM(t):H.cw(t)
return(u^H.cw(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cx(u))+"'")}}
H.ic.prototype={
i:function(a){return this.a}}
H.f9.prototype={
i:function(a){return this.a}}
H.hC.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.iK.prototype={
i:function(a){return"Assertion failed: "+P.df(this.a)}}
H.W.prototype={
gk:function(a){return this.a},
gay:function(a){return new H.dp(this,[H.y(this,0)])},
dg:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cH(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cH(t,b)}else return s.i_(b)},
i_:function(a){var u=this.d
if(u==null)return!1
return this.c1(this.bx(u,J.bM(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.be(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.be(r,b)
s=t==null?null:t.b
return s}else return q.i0(b)},
i0:function(a){var u,t,s=this.d
if(s==null)return
u=this.bx(s,J.bM(a)&0x3ffffff)
t=this.c1(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
H.I(b,H.y(o,0))
H.I(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.cz(u==null?o.b=o.bB():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cz(t==null?o.c=o.bB():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bB()
r=J.bM(b)&0x3ffffff
q=o.bx(s,r)
if(q==null)o.bI(s,r,[o.bC(b,c)])
else{p=o.c1(q,b)
if(p>=0)q[p].b=c
else q.push(o.bC(b,c))}}},
K:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.ch(s))
u=u.c}},
cz:function(a,b,c){var u,t=this
H.I(b,H.y(t,0))
H.I(c,H.y(t,1))
u=t.be(a,b)
if(u==null)t.bI(a,b,t.bC(b,c))
else u.b=c},
bC:function(a,b){var u=this,t=new H.fN(H.I(a,H.y(u,0)),H.I(b,H.y(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c1:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.J(a[t].a,b))return t
return-1},
i:function(a){return P.kt(this)},
be:function(a,b){return a[b]},
bx:function(a,b){return a[b]},
bI:function(a,b,c){a[b]=c},
ey:function(a,b){delete a[b]},
cH:function(a,b){return this.be(a,b)!=null},
bB:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bI(t,u,t)
this.ey(t,u)
return t}}
H.fN.prototype={}
H.dp.prototype={
gk:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.fO(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fO.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.ch(t))
else{t=u.c
if(t==null){u.scw(null)
return!1}else{u.scw(t.a)
u.c=u.c.c
return!0}}},
scw:function(a){this.d=H.I(a,H.y(this,0))},
$iaU:1}
H.ju.prototype={
$1:function(a){return this.a(a)},
$S:26}
H.jv.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.jw.prototype={
$1:function(a){return this.a(H.aa(a))},
$S:28}
H.fI.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ikA:1}
H.ct.prototype={$inM:1}
H.dw.prototype={
gk:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cs.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]},
$abQ:function(){return[P.z]},
$av:function(){return[P.z]},
$ie:1,
$ae:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dx.prototype={
$abQ:function(){return[P.r]},
$av:function(){return[P.r]},
$ie:1,
$ae:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.hf.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.hg.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.hh.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.hi.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.dy.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bH(b,a,a.length)
return a[b]},
$inN:1}
H.hk.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bH(b,a,a.length)
return a[b]},
$inO:1}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
P.iM.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.iL.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:32}
P.iN.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iO.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eF.prototype={
eh:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c3(new P.jg(this,b),0),a)
else throw H.h(P.am("`setTimeout()` not found."))},
ei:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c3(new P.jf(this,a,Date.now(),b),0),a)
else throw H.h(P.am("Periodic timer."))},
$ib5:1}
P.jg.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jf.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.e4(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.ba.prototype={
i4:function(a){if((this.c&15)!==6)return!0
return this.b.b.cf(H.o(this.d,{func:1,ret:P.Y,args:[P.N]}),a.a,P.Y,P.N)},
hZ:function(a){var u=this.e,t=P.N,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.eV(u,{func:1,args:[P.N,P.ap]}))return H.k7(r.is(u,a.a,a.b,null,t,P.ap),s)
else return H.k7(r.cf(H.o(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.aA.prototype={
dQ:function(a,b,c){var u,t,s,r=H.y(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.T
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mT(b,u)}t=new P.aA($.T,[c])
s=b==null?1:3
this.cA(new P.ba(t,s,a,b,[r,c]))
return t},
ix:function(a,b){return this.dQ(a,null,b)},
cA:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$iba")
t.c=a}else{if(s===2){u=H.j(t.c,"$iaA")
s=u.a
if(s<4){u.cA(a)
return}t.a=s
t.c=u.c}P.jp(null,null,t.b,H.o(new P.iV(t,a),{func:1,ret:-1}))}},
cV:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$iba")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iaA")
u=q.a
if(u<4){q.cV(a)
return}p.a=u
p.c=q.c}o.a=p.bf(a)
P.jp(null,null,p.b,H.o(new P.iZ(o,p),{func:1,ret:-1}))}},
bF:function(){var u=H.j(this.c,"$iba")
this.c=null
return this.bf(u)},
bf:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cD:function(a){var u,t,s=this,r=H.y(s,0)
H.k7(a,{futureOr:1,type:r})
u=s.$ti
if(H.k4(a,"$icl",u,"$acl"))if(H.k4(a,"$iaA",u,null))P.kZ(a,s)
else P.mp(a,s)
else{t=s.bF()
H.I(a,r)
s.a=4
s.c=a
P.cK(s,t)}},
cE:function(a,b){var u,t=this
H.j(b,"$iap")
u=t.bF()
t.a=8
t.c=new P.ak(a,b)
P.cK(t,u)},
$icl:1}
P.iV.prototype={
$0:function(){P.cK(this.a,this.b)},
$S:1}
P.iZ.prototype={
$0:function(){P.cK(this.b,this.a.a)},
$S:1}
P.iW.prototype={
$1:function(a){var u=this.a
u.a=0
u.cD(a)},
$S:14}
P.iX.prototype={
$2:function(a,b){H.j(b,"$iap")
this.a.cE(a,b)},
$1:function(a){return this.$2(a,null)},
$S:43}
P.iY.prototype={
$0:function(){this.a.cE(this.b,this.c)},
$S:1}
P.j1.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dO(H.o(s.d,{func:1}),null)}catch(r){u=H.bL(r)
t=H.c6(r)
if(o.d){s=H.j(o.a.a.c,"$iak").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$iak")
else q.b=new P.ak(u,t)
q.a=!0
return}if(!!J.V(n).$icl){if(n instanceof P.aA&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$iak")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ix(new P.j2(p),null)
s.a=!1}},
$S:3}
P.j2.prototype={
$1:function(a){return this.a},
$S:34}
P.j0.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.I(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.cf(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bL(o)
t=H.c6(o)
s=n.a
s.b=new P.ak(u,t)
s.a=!0}},
$S:3}
P.j_.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$iak")
r=m.c
if(H.C(r.i4(u))&&r.e!=null){q=m.b
q.b=r.hZ(u)
q.a=!1}}catch(p){t=H.bL(p)
s=H.c6(p)
r=H.j(m.a.a.c,"$iak")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ak(t,s)
n.a=!0}},
$S:3}
P.e2.prototype={}
P.hT.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aA($.T,[P.r])
r.a=0
u=H.y(s,0)
t=H.o(new P.hV(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.hW(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.hV.prototype={
$1:function(a){H.I(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.y(this.b,0)]}}}
P.hW.prototype={
$0:function(){this.b.cD(this.a.a)},
$S:1}
P.cC.prototype={}
P.hU.prototype={}
P.b5.prototype={}
P.ak.prototype={
i:function(a){return H.i(this.a)},
$ibs:1}
P.ji.prototype={$io0:1}
P.jo.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dB():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:1}
P.j8.prototype={
it:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.T){a.$0()
return}P.l1(r,r,this,a,-1)}catch(s){u=H.bL(s)
t=H.c6(s)
P.jn(r,r,this,u,H.j(t,"$iap"))}},
iu:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.I(b,c)
try{if(C.f===$.T){a.$1(b)
return}P.l2(r,r,this,a,b,-1,c)}catch(s){u=H.bL(s)
t=H.c6(s)
P.jn(r,r,this,u,H.j(t,"$iap"))}},
hI:function(a,b){return new P.ja(this,H.o(a,{func:1,ret:b}),b)},
bO:function(a){return new P.j9(this,H.o(a,{func:1,ret:-1}))},
d7:function(a,b){return new P.jb(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
dO:function(a,b){H.o(a,{func:1,ret:b})
if($.T===C.f)return a.$0()
return P.l1(null,null,this,a,b)},
cf:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.I(b,d)
if($.T===C.f)return a.$1(b)
return P.l2(null,null,this,a,b,c,d)},
is:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.I(b,e)
H.I(c,f)
if($.T===C.f)return a.$2(b,c)
return P.mU(null,null,this,a,b,c,d,e,f)}}
P.ja.prototype={
$0:function(){return this.a.dO(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j9.prototype={
$0:function(){return this.a.it(this.b)},
$S:3}
P.jb.prototype={
$1:function(a){var u=this.c
return this.a.iu(this.b,H.I(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j6.prototype={
gR:function(a){var u=this,t=new P.eh(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.I(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cB(u==null?s.b=P.k_():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cB(t==null?s.c=P.k_():t,b)}else return s.ek(0,b)},
ek:function(a,b){var u,t,s,r=this
H.I(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.k_()
t=r.cF(b)
s=u[t]
if(s==null)u[t]=[r.bt(b)]
else{if(r.cL(s,b)>=0)return!1
s.push(r.bt(b))}return!0},
E:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h5(this.c,b)
else return this.h4(0,b)},
h4:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eM(r,b)
t=s.cL(u,b)
if(t<0)return!1
s.d4(u.splice(t,1)[0])
return!0},
cB:function(a,b){H.I(b,H.y(this,0))
if(H.j(a[b],"$icL")!=null)return!1
a[b]=this.bt(b)
return!0},
h5:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$icL")
if(u==null)return!1
this.d4(u)
delete a[b]
return!0},
cN:function(){this.r=1073741823&this.r+1},
bt:function(a){var u,t=this,s=new P.cL(H.I(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cN()
return s},
d4:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cN()},
cF:function(a){return J.bM(a)&1073741823},
eM:function(a,b){return a[this.cF(b)]},
cL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.J(a[t].a,b))return t
return-1}}
P.cL.prototype={}
P.eh.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.ch(t))
else{t=u.c
if(t==null){u.scC(null)
return!1}else{u.scC(H.I(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
scC:function(a){this.d=H.I(a,H.y(this,0))},
$iaU:1}
P.fP.prototype={$ie:1,$ib:1}
P.v.prototype={
gR:function(a){return new H.dq(a,this.gk(a),[H.cX(this,a,"v",0)])},
G:function(a,b){return this.j(a,b)},
iA:function(a,b){var u,t=this,s=H.d([],[H.cX(t,a,"v",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.m(s,u,t.j(a,u))
return s},
iz:function(a){return this.iA(a,!0)},
i:function(a){return P.jN(a,"[","]")}}
P.fS.prototype={}
P.fT.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:21}
P.ah.prototype={
K:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.cX(s,a,"ah",0),H.cX(s,a,"ah",1)]})
for(u=J.ca(s.gay(a));u.A();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.cb(this.gay(a))},
i:function(a){return P.kt(a)},
$iD:1}
P.jc.prototype={
i:function(a){return P.jN(this,"{","}")},
G:function(a,b){var u,t,s,r=this
P.kH(b,"index")
for(u=P.mr(r,r.r,H.y(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.h(P.S(b,r,"index",null,t))},
$ie:1,
$ikJ:1}
P.ei.prototype={}
P.cg.prototype={}
P.d7.prototype={}
P.fr.prototype={
$acg:function(){return[P.n,[P.b,P.r]]}}
P.iq.prototype={}
P.ir.prototype={
hL:function(a){var u,t,s=P.kI(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jh(u)
if(t.eK(a,0,s)!==s)t.d5(C.e.bR(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mv(0,t.b,u.length)))},
$ad7:function(){return[P.n,[P.b,P.r]]}}
P.jh.prototype={
d5:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eK:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.e.bR(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.e.bd(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d5(r,C.e.bd(a,p)))s=p}else if(r<=2047){q=n.b
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
P.Y.prototype={}
P.ax.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.bg(u,30))&1073741823},
i:function(a){var u=this,t=P.lN(H.m6(u)),s=P.d9(H.m4(u)),r=P.d9(H.m0(u)),q=P.d9(H.m1(u)),p=P.d9(H.m3(u)),o=P.d9(H.m5(u)),n=P.lO(H.m2(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.br.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.br&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r=new P.fp(),q=this.a
if(q<0)return"-"+new P.br(0-q).i(0)
u=r.$1(C.d.a7(q,6e7)%60)
t=r.$1(C.d.a7(q,1e6)%60)
s=new P.fo().$1(q%1e6)
return""+C.d.a7(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fo.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.fp.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.bs.prototype={}
P.f0.prototype={
i:function(a){return"Assertion failed"}}
P.dB.prototype={
i:function(a){return"Throw of null."}}
P.aO.prototype={
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbv()+o+u
if(!q.a)return t
s=q.gbu()
r=P.df(q.b)
return t+s+": "+r}}
P.bV.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.fG.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t=H.a8(this.b)
if(typeof t!=="number")return t.ak()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gk:function(a){return this.f}}
P.io.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.il.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hP.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fd.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.df(u)+"."}}
P.hq.prototype={
i:function(a){return"Out of Memory"},
$ibs:1}
P.dN.prototype={
i:function(a){return"Stack Overflow"},
$ibs:1}
P.fi.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ea.prototype={
i:function(a){return"Exception: "+this.a}}
P.fC.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.e.co(s,0,75)+"...":s
return t+"\n"+r}}
P.r.prototype={}
P.e.prototype={
gk:function(a){var u,t=this.gR(this)
for(u=0;t.A();)++u
return u},
G:function(a,b){var u,t,s
P.kH(b,"index")
for(u=this.gR(this),t=0;u.A();){s=u.gJ(u)
if(b===t)return s;++t}throw H.h(P.S(b,this,"index",null,t))},
i:function(a){return P.lQ(this,"(",")")}}
P.aU.prototype={}
P.b.prototype={$ie:1}
P.D.prototype={}
P.M.prototype={
gI:function(a){return P.N.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
n:function(a,b){return this===b},
gI:function(a){return H.cw(this)},
i:function(a){return"Instance of '"+H.i(H.cx(this))+"'"},
toString:function(){return this.i(this)}}
P.ap.prototype={}
P.n.prototype={$ikA:1}
P.bC.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eX.prototype={
gk:function(a){return a.length}}
W.eZ.prototype={
i:function(a){return String(a)}}
W.f_.prototype={
i:function(a){return String(a)}}
W.d1.prototype={}
W.bP.prototype={
ck:function(a,b,c){if(c!=null)return a.getContext(b,P.n1(c))
return a.getContext(b)},
dV:function(a,b){return this.ck(a,b,null)},
$ibP:1}
W.ce.prototype={$ice:1}
W.bo.prototype={
gk:function(a){return a.length}}
W.ci.prototype={$ici:1}
W.fe.prototype={
gk:function(a){return a.length}}
W.O.prototype={$iO:1}
W.cj.prototype={
gk:function(a){return a.length}}
W.ff.prototype={}
W.aQ.prototype={}
W.aR.prototype={}
W.fg.prototype={
gk:function(a){return a.length}}
W.fh.prototype={
gk:function(a){return a.length}}
W.fj.prototype={
gk:function(a){return a.length}}
W.db.prototype={$idb:1}
W.fl.prototype={
i:function(a){return String(a)}}
W.dc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.ao,P.a9]]},
$av:function(){return[[P.ao,P.a9]]},
$ie:1,
$ae:function(){return[[P.ao,P.a9]]},
$ib:1,
$ab:function(){return[[P.ao,P.a9]]},
$aB:function(){return[[P.ao,P.a9]]}}
W.dd.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaj(a))+" x "+H.i(this.gaf(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iao)return!1
return a.left===u.gbm(b)&&a.top===u.gbo(b)&&this.gaj(a)===u.gaj(b)&&this.gaf(a)===u.gaf(b)},
gI:function(a){return W.l_(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(this.gaj(a)),C.c.gI(this.gaf(a)))},
gd9:function(a){return a.bottom},
gaf:function(a){return a.height},
gbm:function(a){return a.left},
gce:function(a){return a.right},
gbo:function(a){return a.top},
gaj:function(a){return a.width},
$iao:1,
$aao:function(){return[P.a9]}}
W.fm.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.n]},
$av:function(){return[P.n]},
$ie:1,
$ae:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aB:function(){return[P.n]}}
W.fn.prototype={
gk:function(a){return a.length}}
W.iQ.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.j(u[b],"$ia2")},
h:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.iz(this)
return new J.an(u,u.length,[H.y(u,0)])},
$av:function(){return[W.a2]},
$ae:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
W.a2.prototype={
gdd:function(a){return new W.iQ(a,a.children)},
gde:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ak()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ak()
if(r<0)r=-r*0
return new P.ao(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
$ia2:1}
W.m.prototype={$im:1}
W.f.prototype={
hB:function(a,b,c,d){H.o(c,{func:1,args:[W.m]})
if(c!=null)this.el(a,b,c,!1)},
el:function(a,b,c,d){return a.addEventListener(b,H.c3(H.o(c,{func:1,args:[W.m]}),1),!1)},
$if:1}
W.aS.prototype={$iaS:1}
W.fw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aS]},
$av:function(){return[W.aS]},
$ie:1,
$ae:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aB:function(){return[W.aS]}}
W.fx.prototype={
gk:function(a){return a.length}}
W.fB.prototype={
gk:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.fE.prototype={
gk:function(a){return a.length}}
W.bR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.G]},
$av:function(){return[W.G]},
$ie:1,
$ae:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibR:1,
$aB:function(){return[W.G]}}
W.bu.prototype={$ibu:1,
gdi:function(a){return a.data}}
W.cn.prototype={$icn:1}
W.aW.prototype={$iaW:1}
W.fQ.prototype={
i:function(a){return String(a)}}
W.h8.prototype={
gk:function(a){return a.length}}
W.h9.prototype={
j:function(a,b){return P.bm(a.get(H.aa(b)))},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gay:function(a){var u=H.d([],[P.n])
this.K(a,new W.ha(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.n,null]},
$iD:1,
$aD:function(){return[P.n,null]}}
W.ha.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hb.prototype={
j:function(a,b){return P.bm(a.get(H.aa(b)))},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gay:function(a){var u=H.d([],[P.n])
this.K(a,new W.hc(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.n,null]},
$iD:1,
$aD:function(){return[P.n,null]}}
W.hc.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aZ.prototype={$iaZ:1}
W.hd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aZ]},
$av:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.ae.prototype={$iae:1}
W.iP.prototype={
gR:function(a){var u=this.a.childNodes
return new W.dg(u,u.length,[H.cX(C.J,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$av:function(){return[W.G]},
$ae:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.e1(a):u},
$iG:1}
W.cu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.G]},
$av:function(){return[W.G]},
$ie:1,
$ae:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aB:function(){return[W.G]}}
W.b_.prototype={$ib_:1,
gk:function(a){return a.length}}
W.hs.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b_]},
$av:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aB:function(){return[W.b_]}}
W.hA.prototype={
j:function(a,b){return P.bm(a.get(H.aa(b)))},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gay:function(a){var u=H.d([],[P.n])
this.K(a,new W.hB(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.n,null]},
$iD:1,
$aD:function(){return[P.n,null]}}
W.hB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hD.prototype={
gk:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.hM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b1]},
$av:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aB:function(){return[W.b1]}}
W.b2.prototype={$ib2:1}
W.hN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b2]},
$av:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aB:function(){return[W.b2]}}
W.b3.prototype={$ib3:1,
gk:function(a){return a.length}}
W.hR.prototype={
j:function(a,b){return a.getItem(H.aa(b))},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,P.n]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gay:function(a){var u=H.d([],[P.n])
this.K(a,new W.hS(u))
return u},
gk:function(a){return a.length},
$aah:function(){return[P.n,P.n]},
$iD:1,
$aD:function(){return[P.n,P.n]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:41}
W.aG.prototype={$iaG:1}
W.b4.prototype={$ib4:1}
W.aH.prototype={$iaH:1}
W.hZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aH]},
$av:function(){return[W.aH]},
$ie:1,
$ae:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aB:function(){return[W.aH]}}
W.i_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b4]},
$av:function(){return[W.b4]},
$ie:1,
$ae:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aB:function(){return[W.b4]}}
W.i4.prototype={
gk:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.aK.prototype={$iaK:1}
W.i7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b6]},
$av:function(){return[W.b6]},
$ie:1,
$ae:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$aB:function(){return[W.b6]}}
W.i8.prototype={
gk:function(a){return a.length}}
W.bE.prototype={}
W.ip.prototype={
i:function(a){return String(a)}}
W.iH.prototype={
gk:function(a){return a.length}}
W.b9.prototype={
ghP:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.am("deltaY is not supported"))},
ghO:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.am("deltaX is not supported"))},
$ib9:1}
W.cJ.prototype={
h8:function(a,b){return a.requestAnimationFrame(H.c3(H.o(b,{func:1,ret:-1,args:[P.a9]}),1))},
eD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.O]},
$av:function(){return[W.O]},
$ie:1,
$ae:function(){return[W.O]},
$ib:1,
$ab:function(){return[W.O]},
$aB:function(){return[W.O]}}
W.e5.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iao)return!1
return a.left===u.gbm(b)&&a.top===u.gbo(b)&&a.width===u.gaj(b)&&a.height===u.gaf(b)},
gI:function(a){return W.l_(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(a.width),C.c.gI(a.height))},
gaf:function(a){return a.height},
gaj:function(a){return a.width}}
W.j3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aT]},
$av:function(){return[W.aT]},
$ie:1,
$ae:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aB:function(){return[W.aT]}}
W.en.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.G]},
$av:function(){return[W.G]},
$ie:1,
$ae:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aB:function(){return[W.G]}}
W.jd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b3]},
$av:function(){return[W.b3]},
$ie:1,
$ae:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aB:function(){return[W.b3]}}
W.je.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aG]},
$av:function(){return[W.aG]},
$ie:1,
$ae:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aB:function(){return[W.aG]}}
W.iS.prototype={}
W.jZ.prototype={}
W.iT.prototype={}
W.iU.prototype={
$1:function(a){return this.a.$1(H.j(a,"$im"))},
$S:40}
W.B.prototype={
gR:function(a){return new W.dg(a,this.gk(a),[H.cX(this,a,"B",0)])}}
W.dg.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scM(J.eW(u.a,t))
u.c=t
return!0}u.scM(null)
u.c=s
return!1},
gJ:function(a){return this.d},
scM:function(a){this.d=H.I(a,H.y(this,0))},
$iaU:1}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eA.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.eG.prototype={}
W.eH.prototype={}
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
P.eK.prototype={$ibu:1,
gdi:function(a){return this.a}}
P.jq.prototype={
$2:function(a,b){this.a[a]=b},
$S:21}
P.fy.prototype={
gby:function(){var u=this.b,t=H.aC(u,"v",0),s=W.a2
return new H.fU(new H.iI(u,H.o(new P.fz(),{func:1,ret:P.Y,args:[t]}),[t]),H.o(new P.fA(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.cb(this.gby().a)},
j:function(a,b){var u=this.gby()
return u.b.$1(J.kg(u.a,b))},
gR:function(a){var u=P.ks(this.gby(),!1,W.a2)
return new J.an(u,u.length,[H.y(u,0)])},
$av:function(){return[W.a2]},
$ae:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
P.fz.prototype={
$1:function(a){return!!J.V(H.j(a,"$iG")).$ia2},
$S:36}
P.fA.prototype={
$1:function(a){return H.l(H.j(a,"$iG"),"$ia2")},
$S:35}
P.j7.prototype={
gce:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.E(t)
return H.I(u+t,H.y(this,0))},
gd9:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.E(t)
return H.I(u+t,H.y(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$iao){t=p.a
if(t==u.gbm(b)){s=p.b
if(s==u.gbo(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.E(r)
q=H.y(p,0)
if(H.I(t+r,q)===u.gce(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.E(t)
u=H.I(s+t,q)===u.gd9(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.bM(s),q=t.b,p=J.bM(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.E(o)
u=H.y(t,0)
o=C.d.gI(H.I(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.E(s)
u=C.d.gI(H.I(q+s,u))
return P.mq(P.j5(P.j5(P.j5(P.j5(0,r),p),o),u))}}
P.ao.prototype={
gbm:function(a){return this.a},
gbo:function(a){return this.b},
gaj:function(a){return this.c},
gaf:function(a){return this.d}}
P.bd.prototype={$ibd:1}
P.fL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.bd]},
$ie:1,
$ae:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aB:function(){return[P.bd]}}
P.bi.prototype={$ibi:1}
P.ho.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.bi]},
$ie:1,
$ae:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aB:function(){return[P.bi]}}
P.hu.prototype={
gk:function(a){return a.length}}
P.hX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.n]},
$ie:1,
$ae:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aB:function(){return[P.n]}}
P.p.prototype={
gdd:function(a){return new P.fy(a,new W.iP(a))}}
P.bl.prototype={$ibl:1}
P.i9.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.bl]},
$ie:1,
$ae:function(){return[P.bl]},
$ib:1,
$ab:function(){return[P.bl]},
$aB:function(){return[P.bl]}}
P.ef.prototype={}
P.eg.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.eB.prototype={}
P.eC.prototype={}
P.eI.prototype={}
P.eJ.prototype={}
P.f2.prototype={
gk:function(a){return a.length}}
P.f3.prototype={
j:function(a,b){return P.bm(a.get(H.aa(b)))},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gay:function(a){var u=H.d([],[P.n])
this.K(a,new P.f4(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.n,null]},
$iD:1,
$aD:function(){return[P.n,null]}}
P.f4.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f5.prototype={
gk:function(a){return a.length}}
P.bN.prototype={}
P.hp.prototype={
gk:function(a){return a.length}}
P.e3.prototype={}
P.d2.prototype={$id2:1}
P.dh.prototype={$idh:1}
P.dE.prototype={$idE:1}
P.dG.prototype={$idG:1}
P.bW.prototype={
dP:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.V(g)
if(!!u.$ibu&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.n2(g))
return}if(!!u.$icn&&h==null&&t&&!0){this.hp(a,b,c,d,e,f,g)
return}throw H.h(P.lG("Incorrect number or type of arguments"))},
iv:function(a,b,c,d,e,f,g){return this.dP(a,b,c,d,e,f,g,null,null,null)},
hp:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a4:function(a,b,c){return a.uniform1f(b,c)},
aM:function(a,b,c){return a.uniform1i(b,c)},
bq:function(a,b,c,d){return a.uniform2f(b,c,d)},
T:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ci:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dS:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cj:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibW:1}
P.dH.prototype={$idH:1}
P.dO.prototype={$idO:1}
P.dW.prototype={$idW:1}
P.hO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return P.bm(a.item(b))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[[P.D,,,]]},
$ie:1,
$ae:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aB:function(){return[[P.D,,,]]}}
P.ex.prototype={}
P.ey.prototype={}
O.R.prototype={
bb:function(a){var u=this
u.seS(H.d([],[a]))
u.scT(null)
u.scP(null)
u.scU(null)},
cl:function(a,b,c){var u=this,t=H.aC(u,"R",0)
H.o(b,{func:1,ret:P.Y,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.r,[P.e,t]]}
H.o(a,t)
H.o(c,t)
u.scT(b)
u.scP(a)
u.scU(c)},
aD:function(a,b){return this.cl(a,null,b)},
cS:function(a){var u
H.k(a,"$ie",[H.aC(this,"R",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cO:function(a,b){var u
H.k(b,"$ie",[H.aC(this,"R",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.an(u,u.length,[H.y(u,0)])},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aC(s,"R",0)
H.I(b,r)
r=[r]
if(H.C(s.cS(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cO(t,H.d([b],r))}},
bM:function(a,b){var u,t,s=this
H.k(b,"$ie",[H.aC(s,"R",0)],"$ae")
if(H.C(s.cS(b))){u=s.a
t=u.length
C.a.bM(u,b)
s.cO(t,b)}},
seS:function(a){this.a=H.k(a,"$ib",[H.aC(this,"R",0)],"$ab")},
scT:function(a){this.b=H.o(a,{func:1,ret:P.Y,args:[[P.e,H.aC(this,"R",0)]]})},
scP:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.r,[P.e,H.aC(this,"R",0)]]})},
scU:function(a){H.o(a,{func:1,ret:-1,args:[P.r,[P.e,H.aC(this,"R",0)]]})},
$ie:1}
O.cq.prototype={
gk:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.L():u},
aE:function(){var u=this.b
if(u!=null)u.w(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gc3(u)
else return V.aY()},
bn:function(a){var u=this.a
if(a==null)C.a.h(u,V.aY())
else C.a.h(u,a)
this.aE()},
aA:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}},
sbz:function(a){this.a=H.k(a,"$ib",[V.ad],"$ab")}}
E.f7.prototype={}
E.al.prototype={
sba:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().E(0,s.gdK())
u=s.c
if(u!=null)u.gl().h(0,s.gdK())
t=new D.A("shape",r,s.c,[F.dI])
t.b=!0
s.az(t)}},
sb5:function(a){var u,t,s=this
if(!J.J(s.r,a)){u=s.r
if(u!=null)u.gl().E(0,s.gdI())
if(a!=null)a.gl().h(0,s.gdI())
s.r=a
t=new D.A("mover",u,a,[U.af])
t.b=!0
s.az(t)}},
a8:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aN(0,b,s):null
if(!J.J(q,s.x)){u=s.x
s.x=q
t=new D.A("matrix",u,q,[V.ad])
t.b=!0
s.az(t)}for(r=s.y.a,r=new J.an(r,r.length,[H.y(r,0)]);r.A();)r.d.a8(0,b)},
a6:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga1(s))
else C.a.h(s.a,r.u(0,s.ga1(s)))
s.aE()
a.cb(t.f)
s=a.dy
u=(s&&C.a).gc3(s)
if(u!=null&&t.d!=null)u.b8(a,t)
for(s=t.y.a,s=new J.an(s,s.length,[H.y(s,0)]);s.A();)s.d.a6(a)
a.c9()
a.dx.aA()},
az:function(a){var u=this.z
if(u!=null)u.w(a)},
a2:function(){return this.az(null)},
dL:function(a){H.j(a,"$ix")
this.e=null
this.az(a)},
ic:function(){return this.dL(null)},
dJ:function(a){this.az(H.j(a,"$ix"))},
ib:function(){return this.dJ(null)},
dH:function(a){this.az(H.j(a,"$ix"))},
i8:function(){return this.dH(null)},
i7:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ie",[E.al],"$ae")
for(u=b.length,t=this.gdG(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.saa(null)
o.saH(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
ia:function(a,b){var u,t
H.k(b,"$ie",[E.al],"$ae")
for(u=b.gR(b),t=this.gdG();u.A();)u.gJ(u).gl().E(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sea:function(a,b){this.y=H.k(b,"$iR",[E.al],"$aR")},
$ibT:1}
E.hw.prototype={
e6:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ax(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cq()
t=[V.ad]
u.sbz(H.d([],t))
u.b=null
u.gl().h(0,new E.hx(s))
s.cy=u
u=new O.cq()
u.sbz(H.d([],t))
u.b=null
u.gl().h(0,new E.hy(s))
s.db=u
u=new O.cq()
u.sbz(H.d([],t))
u.b=null
u.gl().h(0,new E.hz(s))
s.dx=u
s.sho(H.d([],[O.bD]))
u=s.dy;(u&&C.a).h(u,null)
s.shh(new H.W([P.n,A.cA]))},
gio:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.u(0,u.ga1(u))
s=u}return s},
gca:function(){var u,t=this,s=t.ch
if(s==null){s=t.gio()
u=t.dx
u=t.ch=s.u(0,u.ga1(u))
s=u}return s},
gdT:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga1(s)
u=t.dx
u=t.cx=s.u(0,u.ga1(u))
s=u}return s},
cb:function(a){var u=this.dy,t=a==null?(u&&C.a).gc3(u):a;(u&&C.a).h(u,t)},
c9:function(){var u=this.dy
if(u.length>1)u.pop()},
aV:function(a){var u=a.b
if(u.length===0)throw H.h(P.t("May not cache a shader with no name."))
if(this.fr.dg(0,u))throw H.h(P.t('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)},
sho:function(a){this.dy=H.k(a,"$ib",[O.bD],"$ab")},
shh:function(a){this.fr=H.k(a,"$iD",[P.n,A.cA],"$aD")}}
E.hx.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:11}
E.hy.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:11}
E.hz.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:11}
E.dS.prototype={
cu:function(a){H.j(a,"$ix")
this.dN()},
ct:function(){return this.cu(null)},
ghY:function(){var u,t=this,s=Date.now(),r=C.d.a7(P.km(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ax(s,!1)
return u/r},
cX:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.E(r)
u=C.c.c_(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.c.c_(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kO(C.k,s.gir())}},
dN:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.i3(this),{func:1,ret:-1,args:[P.a9]})
C.t.eD(u)
C.t.h8(u,W.l5(t,P.a9))}},
iq:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cX()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ax(r,!1)
s.y=P.km(r-s.r.a).a*0.000001
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
s=s.dy;(s&&C.a).h(s,null)
o.a6(p.e)}}catch(q){u=H.bL(q)
t=H.c6(q)
P.kc("Error: "+H.i(u))
P.kc("Stack: "+H.i(t))
throw H.h(u)}}}
E.i3.prototype={
$1:function(a){var u
H.lg(a)
u=this.a
if(u.ch){u.ch=!1
u.iq()}},
$S:29}
Z.e1.prototype={$inu:1}
Z.d3.prototype={
H:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bL(s)
t=P.t('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.bG.prototype={$inv:1}
Z.bc.prototype={
a5:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
H:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].H(a)},
a3:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a6:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.n],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aw(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
seN:function(a){this.b=H.k(a,"$ib",[Z.bv],"$ab")},
$inB:1}
Z.bv.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cx(this.c))+"'")+"]"}}
Z.av.prototype={
gcn:function(a){var u=this.a,t=(u&$.ag().a)!==0?3:0
if((u&$.aM().a)!==0)t+=3
if((u&$.aL().a)!==0)t+=3
if((u&$.bb().a)!==0)t+=2
if((u&$.aN().a)!==0)t+=3
if((u&$.cZ().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=4
if((u&$.c9().a)!==0)++t
return(u&$.bn().a)!==0?t+4:t},
hE:function(a){var u,t=$.ag(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0)if(u===a)return t
return $.lC()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.av))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.n]),t=this.a
if((t&$.ag().a)!==0)C.a.h(u,"Pos")
if((t&$.aM().a)!==0)C.a.h(u,"Norm")
if((t&$.aL().a)!==0)C.a.h(u,"Binm")
if((t&$.bb().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aN().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cZ().a)!==0)C.a.h(u,"Clr3")
if((t&$.d_().a)!==0)C.a.h(u,"Clr4")
if((t&$.c9().a)!==0)C.a.h(u,"Weight")
if((t&$.bn().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.fa.prototype={}
D.bt.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.o(b,u)
if(this.a==null)this.saa(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
E:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.ae(u,b)
if(u===!0){u=s.a
t=(u&&C.a).E(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ae(u,b)
if(u===!0){u=s.b
t=(u&&C.a).E(u,b)||t}return t},
w:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.K(P.ks(u,!0,{func:1,ret:-1,args:[D.x]}),new D.ft(q))
u=r.b
if(u!=null){r.saH(H.d([],[{func:1,ret:-1,args:[D.x]}]))
C.a.K(u,new D.fu(q))}return!0},
bT:function(){return this.w(null)},
ap:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}},
saa:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saH:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.ft.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.fu.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.x.prototype={}
D.bw.prototype={}
D.bx.prototype={}
D.A.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.d4.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d4))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dm.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dm))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.fK.prototype={
ij:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ie:function(a){this.c=a.b
this.d.E(0,a.a)
return!1},
sh3:function(a){this.d=H.k(a,"$ikJ",[P.r],"$akJ")}}
X.dr.prototype={}
X.fR.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gaK()
r=new X.bz(a,V.bj(),q.x,t,s)
r.b=!0
q.z=new P.ax(p,!1)
q.x=s
return r},
c8:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dX()
if(typeof u!=="number")return u.ar()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aT(a,b))
return!0},
ik:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaK()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cr(new V.U(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
fA:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dr(c,r.a.gaK(),b)
s.b=!0
t.w(s)
r.y=new P.ax(u,!1)
r.x=V.bj()}}
X.as.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.as))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.bz.prototype={}
X.he.prototype={
bw:function(a,b,c){var u=this,t=new P.ax(Date.now(),!1),s=u.a.gaK(),r=new X.bz(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c8:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.bw(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dX()
if(typeof t!=="number")return t.ar()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.bw(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.bw(a,b,!1))
return!0},
il:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaK()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cr(new V.U(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0}}
X.cr.prototype={}
X.ht.prototype={}
X.dU.prototype={}
X.i6.prototype={
aT:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.a4],"$ab")
u=new P.ax(Date.now(),!1)
t=a.length>0?a[0]:V.bj()
s=q.a.gaK()
r=new X.dU(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ii:function(a){var u
H.k(a,"$ib",[V.a4],"$ab")
u=this.b
if(u==null)return!1
u.w(this.aT(a,!0))
return!0},
ig:function(a){var u
H.k(a,"$ib",[V.a4],"$ab")
u=this.c
if(u==null)return!1
u.w(this.aT(a,!0))
return!0},
ih:function(a){var u
H.k(a,"$ib",[V.a4],"$ab")
u=this.d
if(u==null)return!1
u.w(this.aT(a,!1))
return!0}}
X.dZ.prototype={
gaK:function(){var u=this.a,t=C.h.gde(u).c
t.toString
u=C.h.gde(u).d
u.toString
return V.cy(0,0,t,u)},
cI:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dm(u,new X.as(t,a.altKey,a.shiftKey))},
aI:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.as(t,a.altKey,a.shiftKey)},
bJ:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.as(t,a.altKey,a.shiftKey)},
aw:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.N()
u=t.top
if(typeof r!=="number")return r.N()
return new V.a4(s-q,r-u)},
aU:function(a){return new V.U(a.movementX,a.movementY)},
bE:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.X(r.pageX)
C.c.X(r.pageY)
p=o.left
C.c.X(r.pageX)
C.a.h(n,new V.a4(q-p,C.c.X(r.pageY)-o.top))}return n},
at:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.d4(u,new X.as(t,a.altKey,a.shiftKey))},
bA:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.N()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.N()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fs:function(a){this.f=!0},
fb:function(a){this.f=!1},
fh:function(a){H.j(a,"$iae")
if(H.C(this.f)&&this.bA(a))a.preventDefault()},
fw:function(a){var u
H.j(a,"$iaW")
if(!H.C(this.f))return
u=this.cI(a)
this.b.ij(u)},
fu:function(a){var u
H.j(a,"$iaW")
if(!H.C(this.f))return
u=this.cI(a)
this.b.ie(u)},
fC:function(a){var u,t,s,r,q=this
H.j(a,"$iae")
u=q.a
u.focus()
q.f=!0
q.aI(a)
if(H.C(q.x)){t=q.at(a)
s=q.aU(a)
if(q.d.c8(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.at(a)
r=q.aw(a)
if(q.c.c8(t,r))a.preventDefault()},
fG:function(a){var u,t,s,r=this
H.j(a,"$iae")
r.aI(a)
u=r.at(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aw(a)
if(r.c.b7(u,s))a.preventDefault()},
fl:function(a){var u,t,s,r=this
H.j(a,"$iae")
if(!r.bA(a)){r.aI(a)
u=r.at(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aw(a)
if(r.c.b7(u,s))a.preventDefault()}},
fE:function(a){var u,t,s,r=this
H.j(a,"$iae")
r.aI(a)
u=r.at(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aw(a)
if(r.c.b6(u,s))a.preventDefault()},
fj:function(a){var u,t,s,r=this
H.j(a,"$iae")
if(!r.bA(a)){r.aI(a)
u=r.at(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aw(a)
if(r.c.b6(u,s))a.preventDefault()}},
fI:function(a){var u,t,s=this
H.j(a,"$ib9")
s.aI(a)
u=new V.U((a&&C.r).ghO(a),C.r.ghP(a)).t(0,180)
if(H.C(s.x)){if(s.d.ik(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.aw(a)
if(s.c.il(u,t))a.preventDefault()},
fK:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.at(s.y)
t=s.aw(s.y)
s.d.fA(u,t,r)}},
h_:function(a){var u,t=this
H.j(a,"$iaK")
t.a.focus()
t.f=!0
t.bJ(a)
u=t.bE(a)
if(t.e.ii(u))a.preventDefault()},
fW:function(a){var u
H.j(a,"$iaK")
this.bJ(a)
u=this.bE(a)
if(this.e.ig(u))a.preventDefault()},
fY:function(a){var u
H.j(a,"$iaK")
this.bJ(a)
u=this.bE(a)
if(this.e.ih(u))a.preventDefault()},
seF:function(a){this.z=H.k(a,"$ib",[[P.cC,P.N]],"$ab")}}
D.bq.prototype={
as:function(a){var u
H.j(a,"$ix")
u=this.r
if(u!=null)u.w(a)},
ec:function(){return this.as(null)},
$iac:1,
$ibT:1}
D.ac.prototype={$ibT:1}
D.dn.prototype={
as:function(a){var u=this.x
if(u!=null)u.w(a)},
cR:function(a){var u
H.j(a,"$ix")
u=this.y
if(u!=null)u.w(a)},
fz:function(){return this.cR(null)},
fM:function(a){var u,t,s
H.k(a,"$ie",[D.ac],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.ev(s))return!1}return!0},
f5:function(a,b){var u,t,s,r,q,p,o,n=D.ac
H.k(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gcQ(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.j(b[q],"$iac")
if(p instanceof D.bq)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bt()
o.saa(null)
o.saH(null)
o.c=null
o.d=0
p.r=o}H.o(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bw([n])
n.b=!0
this.as(n)},
fQ:function(a,b){var u,t,s,r=D.ac
H.k(b,"$ie",[r],"$ae")
for(u=b.gR(b),t=this.gcQ();u.A();){s=u.gJ(u)
C.a.E(this.e,s)
s.gl().E(0,t)}r=new D.bx([r])
r.b=!0
this.as(r)},
ev:function(a){var u=C.a.ae(this.e,a)
return u},
seC:function(a){this.e=H.k(a,"$ib",[D.bq],"$ab")},
sh0:function(a){this.f=H.k(a,"$ib",[D.dD],"$ab")},
shk:function(a){this.r=H.k(a,"$ib",[D.dM],"$ab")},
$ae:function(){return[D.ac]},
$aR:function(){return[D.ac]}}
D.dD.prototype={$iac:1,$ibT:1}
D.dM.prototype={$iac:1,$ibT:1}
V.Z.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.a1.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.fs.prototype={}
V.cp.prototype={
S:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cp))return!1
u=b.a
t=$.K().a
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.c5(H.d([q.a,q.d,q.r],p),3,0),n=V.c5(H.d([q.b,q.e,q.x],p),3,0),m=V.c5(H.d([q.c,q.f,q.y],p),3,0)
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
V.ad.prototype={
S:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
c2:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.aY()
u=1/b1
t=-n
s=-a0
return V.bg((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bg(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bp:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.H(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cg:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a_(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.K().a
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
D:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.c5(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.c5(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.c5(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.c5(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
L:function(){return this.D("")}}
V.a4.prototype={
N:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.a_.prototype={
B:function(a,b){return new V.a_(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.a_(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.bk.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bk))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.bB.prototype={
gao:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bB))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.U.prototype={
c4:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.U(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.kU
return u==null?$.kU=new V.U(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.U(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.N()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.N()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.H.prototype={
c4:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c5:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.H(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ax:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.H(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.H(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.H(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.K().a)return V.cI()
return new V.H(this.a/b,this.b/b,this.c/b)},
dB:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
U.fc.prototype={
bs:function(a){var u=V.nt(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.L():u},
P:function(a){var u=this.y
if(u!=null)u.w(a)},
sdU:function(a,b){},
sdD:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bs(u)}s=new D.A("maximumLocation",s,t.b,[P.z])
s.b=!0
t.P(s)}},
sdF:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bs(u)}s=new D.A("minimumLocation",s,t.c,[P.z])
s.b=!0
t.P(s)}},
sab:function(a,b){var u,t=this
b=t.bs(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.A("location",u,b,[P.z])
u.b=!0
t.P(u)}},
sdE:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.A("maximumVelocity",r,a,[P.z])
r.b=!0
s.P(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.A("velocity",t,a,[P.z])
t.b=!0
u.P(t)}},
sdh:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.A("dampening",u,a,[P.z])
u.b=!0
this.P(u)}},
a8:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sab(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.d6.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.L():u},
aN:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d6))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.cm.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.L():u},
P:function(a){var u
H.j(a,"$ix")
u=this.e
if(u!=null)u.w(a)},
am:function(){return this.P(null)},
ee:function(a,b){var u,t,s,r,q,p,o,n=U.af
H.k(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gbc(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.o(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bw([n])
n.b=!0
this.P(n)},
fO:function(a,b){var u,t,s=U.af
H.k(b,"$ie",[s],"$ae")
for(u=b.gR(b),t=this.gbc();u.A();)u.gJ(u).gl().E(0,t)
s=new D.bx([s])
s.b=!0
this.P(s)},
aN:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ak()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.an(r,r.length,[H.y(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aN(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.aY():u
r=s.e
if(r!=null)r.ap(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cm))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.J(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.af]},
$aR:function(){return[U.af]},
$iaf:1}
U.af.prototype={}
U.e_.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.L():u},
P:function(a){var u
H.j(a,"$ix")
u=this.fx
if(u!=null)u.w(a)},
am:function(){return this.P(null)},
bN:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.geX())
u=s.a.c
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.geZ())
u=s.a.c
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.gf0())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.h(0,s.geT())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.geV())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.ghv())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.ght())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.ghr())
return!0},
an:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.U(u,t)},
eY:function(a){var u=this
a=H.l(H.j(a,"$ix"),"$ibz")
if(!J.J(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f_:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.j(a,"$ix"),"$ibz")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.N(0,a.y)
u=new V.U(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.N(0,a.y)
u=n.an(new V.U(t.a,t.b).u(0,2).t(0,u.gao()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.N(0,a.y)
r=n.an(new V.U(s.a,s.b).u(0,2).t(0,u.gao()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sab(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.N(0,a.z)
n.dx=n.an(new V.U(t.a,t.b).u(0,2).t(0,u.gao()))}n.am()},
f1:function(a){var u,t,s,r=this
H.j(a,"$ix")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sY(-t*10*u)
r.am()}},
eU:function(a){var u=this
if(H.l(H.j(a,"$ix"),"$idr").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eW:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.j(a,"$ix"),"$ibz")
if(!J.J(n.d,a.x.b))return
u=a.c
t=a.d
s=t.N(0,a.y)
r=n.an(new V.U(s.a,s.b).u(0,2).t(0,u.gao()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sab(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.N(0,a.z)
n.dx=n.an(new V.U(t.a,t.b).u(0,2).t(0,u.gao()))
n.am()},
hw:function(a){var u=this
H.j(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hu:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.j(a,"$ix"),"$idU")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.N(0,a.y)
u=new V.U(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.N(0,a.y)
u=n.an(new V.U(t.a,t.b).u(0,2).t(0,u.gao()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.N(0,a.y)
r=n.an(new V.U(s.a,s.b).u(0,2).t(0,u.gao()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sab(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.N(0,a.z)
n.dx=n.an(new V.U(t.a,t.b).u(0,2).t(0,u.gao()))}n.am()},
hs:function(a){var u,t,s,r=this
H.j(a,"$ix")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sY(-t*10*u)
r.am()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ak()
if(q<p){r.dy=p
u=b.y
r.c.a8(0,u)
r.b.a8(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bg(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.bg(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaf:1}
U.e0.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.L():u},
P:function(a){var u=this.r
if(u!=null)u.w(a)},
bN:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.gf2()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).h(0,t)
return!0},
f3:function(a){var u,t,s,r,q=this
H.j(a,"$ix")
if(!J.J(q.b,q.a.b.c))return
H.l(a,"$icr")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.A("zoom",u,r,[P.z])
u.b=!0
q.P(u)}},
aN:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kw(u,u,u)}return t.f},
$iaf:1}
M.d5.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.L():u},
V:function(a){var u
H.j(a,"$ix")
u=this.r
if(u!=null)u.w(a)},
aR:function(){return this.V(null)},
fS:function(a,b){var u,t,s,r,q,p,o,n=M.at
H.k(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gU(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.o(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bw([n])
n.b=!0
this.V(n)},
fU:function(a,b){var u,t,s=M.at
H.k(b,"$ie",[s],"$ae")
for(u=b.gR(b),t=this.gU();u.A();)u.gJ(u).gl().E(0,t)
s=new D.bx([s])
s.b=!0
this.V(s)},
a6:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.an(u,u.length,[H.y(u,0)]);u.A();){t=u.d
if(t!=null)t.a6(a)}s.f=!1},
$ae:function(){return[M.at]},
$aR:function(){return[M.at]},
$iat:1}
M.d8.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.L():u},
V:function(a){var u
H.j(a,"$ix")
u=this.r
if(u!=null)u.w(a)},
aR:function(){return this.V(null)},
saX:function(a){var u,t,s=this
if(a==null)a=new X.fF()
u=s.b
if(u!==a){if(u!=null)u.gl().E(0,s.gU())
t=s.b
s.b=a
a.gl().h(0,s.gU())
u=new D.A("camera",t,s.b,[X.bO])
u.b=!0
s.V(u)}},
saB:function(a,b){var u,t,s=this
if(b==null)b=X.jL(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gl().E(0,s.gU())
t=s.c
s.c=b
b.gl().h(0,s.gU())
u=new D.A("target",t,s.c,[X.cD])
u.b=!0
s.V(u)}},
saq:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().E(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gU())
s=new D.A("technique",u,t.d,[O.bD])
s.b=!0
t.V(s)}},
a6:function(a){var u,t=this
a.cb(t.d)
t.c.H(a)
t.b.H(a)
u=t.d
if(u!=null)u.a8(0,a)
t.e.a8(0,a)
t.e.a6(a)
t.b.a3(a)
t.c.a3(a)
a.c9()},
$iat:1}
M.de.prototype={
V:function(a){var u
H.j(a,"$ix")
u=this.y
if(u!=null)u.w(a)},
aR:function(){return this.V(null)},
fd:function(a,b){var u,t,s,r,q,p,o,n=E.al
H.k(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gU(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.saa(null)
o.saH(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bw([n])
n.b=!0
this.V(n)},
ff:function(a,b){var u,t,s=E.al
H.k(b,"$ie",[s],"$ae")
for(u=b.gR(b),t=this.gU();u.A();)u.gJ(u).gl().E(0,t)
s=new D.bx([s])
s.b=!0
this.V(s)},
saX:function(a){var u,t,s=this
if(a==null)a=X.kB(null)
u=s.b
if(u!==a){if(u!=null)u.gl().E(0,s.gU())
t=s.b
s.b=a
a.gl().h(0,s.gU())
u=new D.A("camera",t,s.b,[X.bO])
u.b=!0
s.V(u)}},
saB:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gl().E(0,t.gU())
u=t.c
t.c=b
b.gl().h(0,t.gU())
s=new D.A("target",u,t.c,[X.cD])
s.b=!0
t.V(s)}},
saq:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().E(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gU())
s=new D.A("technique",u,t.d,[O.bD])
s.b=!0
t.V(s)}},
gl:function(){var u=this.y
return u==null?this.y=D.L():u},
a6:function(a){var u,t=this
a.cb(t.d)
t.c.H(a)
t.b.H(a)
u=t.d
if(u!=null)u.a8(0,a)
for(u=t.e.a,u=new J.an(u,u.length,[H.y(u,0)]);u.A();)u.d.a8(0,a)
for(u=t.e.a,u=new J.an(u,u.length,[H.y(u,0)]);u.A();)u.d.a6(a)
t.b.toString
a.cy.aA()
a.db.aA()
t.c.a3(a)
a.c9()},
ses:function(a,b){this.e=H.k(b,"$iR",[E.al],"$aR")},
$iat:1}
M.at.prototype={}
A.d0.prototype={}
A.f1.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hU:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
b_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ab.prototype={
gai:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ab))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.da.prototype={
d2:function(a,b){if(b!=null&&b.d)a.dZ(b)}}
A.du.prototype={
e5:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bC("")
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
A.mL(c0,u)
A.mN(c0,u)
A.mM(c0,u)
A.mP(c0,u)
A.mQ(c0,u)
A.mO(c0,u)
A.mR(c0,u)
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
b5.b3(0,s.charCodeAt(0)==0?s:s,A.mK(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.l(b5.y.v(0,"invViewMat"),"$iX")
if(t)b5.dy=H.l(b5.y.v(0,"objMat"),"$iX")
if(r)b5.fr=H.l(b5.y.v(0,"viewObjMat"),"$iX")
b5.fy=H.l(b5.y.v(0,"projViewObjMat"),"$iX")
if(c0.ry)b5.k1=H.l(b5.y.v(0,"txt2DMat"),"$ibF")
if(c0.x1)b5.k2=H.l(b5.y.v(0,"txtCubeMat"),"$iX")
if(c0.x2)b5.k3=H.l(b5.y.v(0,"colorMat"),"$iX")
b5.seo(H.d([],[A.X]))
t=c0.y2
if(t>0){b5.k4=H.j(b5.y.v(0,"bendMatCount"),"$iaj")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.w(P.t(b7+q+b8));(s&&C.a).h(s,H.l(m,"$iX"))}}t=c0.a
if(t.a)b5.r2=H.l(b5.y.v(0,"emissionClr"),"$iQ")
if(t.c)b5.ry=H.l(b5.y.v(0,"emissionTxt"),"$ia6")
t=c0.b
if(t.a)b5.x1=H.l(b5.y.v(0,"ambientClr"),"$iQ")
if(t.c)b5.y1=H.l(b5.y.v(0,"ambientTxt"),"$ia6")
t=c0.c
if(t.a)b5.y2=H.l(b5.y.v(0,"diffuseClr"),"$iQ")
if(t.c)b5.bk=H.l(b5.y.v(0,"diffuseTxt"),"$ia6")
t=c0.d
if(t.a)b5.dj=H.l(b5.y.v(0,"invDiffuseClr"),"$iQ")
if(t.c)b5.dk=H.l(b5.y.v(0,"invDiffuseTxt"),"$ia6")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dn=H.l(b5.y.v(0,"shininess"),"$ia5")
if(s)b5.dl=H.l(b5.y.v(0,"specularClr"),"$iQ")
if(t.c)b5.dm=H.l(b5.y.v(0,"specularTxt"),"$ia6")}if(c0.f.c)b5.dq=H.l(b5.y.v(0,"bumpTxt"),"$ia6")
if(c0.cy){b5.dr=H.l(b5.y.v(0,"envSampler"),"$ia6")
t=c0.r
if(t.a)b5.ds=H.l(b5.y.v(0,"reflectClr"),"$iQ")
if(t.c)b5.dt=H.l(b5.y.v(0,"reflectTxt"),"$ia6")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.du=H.l(b5.y.v(0,"refraction"),"$ia5")
if(s)b5.dv=H.l(b5.y.v(0,"refractClr"),"$iQ")
if(t.c)b5.dw=H.l(b5.y.v(0,"refractTxt"),"$ia6")}}t=c0.y
if(t.a)b5.dz=H.l(b5.y.v(0,"alpha"),"$ia5")
if(t.c)b5.dA=H.l(b5.y.v(0,"alphaTxt"),"$ia6")
t=P.r
s=[t,A.aj]
b5.seB(new H.W(s))
b5.sef(new H.W([t,[P.b,A.bY]]))
b5.sh1(new H.W(s))
b5.sh2(new H.W([t,[P.b,A.bZ]]))
b5.shj(new H.W(s))
b5.seg(new H.W([t,[P.b,A.c_]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.bY],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ar()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.w(P.t(b7+g+b8))
H.l(m,"$iQ")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.w(P.t(b7+g+b8))
H.l(f,"$iQ")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.w(P.t(b7+g+b8))
H.l(e,"$iQ")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.w(P.t(b7+g+b8))
H.l(m,"$iQ")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.w(P.t(b7+g+b8))
H.l(f,"$iQ")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.w(P.t(b7+o+b8))
H.l(e,"$iay")
a=e}else a=b6
C.a.h(h,new A.bY(b,c,d,m,f,a))}b5.bV.m(0,j,h)
q=b5.bU
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.w(P.t(b7+o+b8))
q.m(0,j,H.j(m,"$iaj"))}for(t=c0.Q,s=t.length,r=[A.bZ],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.w(P.t(b7+o+b8))
H.l(m,"$iQ")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.w(P.t(b7+o+b8))
H.l(f,"$iQ")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.w(P.t(b7+o+b8))
H.l(e,"$iQ")
if(typeof j!=="number")return j.ar()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.w(P.t(b7+o+b8))
H.l(a0,"$ibF")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.w(P.t(b7+o+b8))
H.l(a0,"$ia6")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.w(P.t(b7+o+b8))
H.l(a0,"$ia6")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.w(P.t(b7+o+b8))
H.l(a2,"$ibX")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.w(P.t(b7+o+b8))
H.l(a0,"$ia5")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.w(P.t(b7+o+b8))
H.l(a2,"$ia5")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.w(P.t(b7+o+b8))
H.l(a5,"$ia5")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.bZ(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bX.m(0,j,h)
q=b5.bW
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.w(P.t(b7+o+b8))
q.m(0,j,H.j(m,"$iaj"))}for(t=c0.ch,s=t.length,r=[A.c_],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.w(P.t(b7+o+b8))
H.l(m,"$iQ")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.w(P.t(b7+o+b8))
H.l(f,"$iQ")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.w(P.t(b7+o+b8))
H.l(e,"$iQ")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.w(P.t(b7+o+b8))
H.l(a0,"$iQ")
if(typeof j!=="number")return j.ar()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.w(P.t(b7+o+b8))
H.l(a2,"$iQ")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.w(P.t(b7+o+b8))
H.l(a5,"$iQ")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.w(P.t(b7+o+b8))
H.l(a9,"$ia5")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.w(P.t(b7+o+b8))
H.l(b0,"$ia5")
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
if(a2==null)H.w(P.t(b7+g+b8))
H.l(a2,"$ibX")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.w(P.t(b7+g+b8))
H.l(a2,"$ia5")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.w(P.t(b7+g+b8))
H.l(a5,"$ia5")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.w(P.t(b7+g+b8))
H.l(a2,"$ia5")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.w(P.t(b7+g+b8))
H.l(a5,"$ia5")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.w(P.t(b7+g+b8))
H.l(a9,"$ia5")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.w(P.t(b7+g+b8))
H.l(a2,"$iay")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.w(P.t(b7+o+b8))
H.l(a2,"$iay")
a3=a2}else a3=b6
C.a.h(h,new A.c_(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bZ.m(0,j,h)
q=b5.bY
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.w(P.t(b7+o+b8))
q.m(0,j,H.j(m,"$iaj"))}}},
ad:function(a,b){},
seo:function(a){this.r1=H.k(a,"$ib",[A.X],"$ab")},
seB:function(a){this.bU=H.k(a,"$iD",[P.r,A.aj],"$aD")},
sef:function(a){this.bV=H.k(a,"$iD",[P.r,[P.b,A.bY]],"$aD")},
sh1:function(a){this.bW=H.k(a,"$iD",[P.r,A.aj],"$aD")},
sh2:function(a){this.bX=H.k(a,"$iD",[P.r,[P.b,A.bZ]],"$aD")},
shj:function(a){this.bY=H.k(a,"$iD",[P.r,A.aj],"$aD")},
seg:function(a){this.bZ=H.k(a,"$iD",[P.r,[P.b,A.c_]],"$aD")}}
A.aD.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aE.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aF.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.fY.prototype={
i:function(a){return this.b2}}
A.bY.prototype={}
A.bZ.prototype={}
A.c_.prototype={}
A.dA.prototype={}
A.hm.prototype={
i:function(a){return this.e}}
A.cA.prototype={
aQ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
b3:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cJ(b,35633)
r.f=r.cJ(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.C(H.l9(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.w(P.t("Failed to link shader: "+H.i(s)))}r.he()
r.hg()},
H:function(a){a.a.useProgram(this.r)
this.x.hU()},
cJ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.l9(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.t("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
he:function(){var u,t,s,r=this,q=H.d([],[A.d0]),p=r.a,o=H.a8(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d0(p,t.name,s))}r.x=new A.f1(q)},
hg:function(){var u,t,s,r=this,q=H.d([],[A.dV]),p=r.a,o=H.a8(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hN(t.type,t.size,t.name,s))}r.y=new A.ij(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.aj(u,b,c)
else return A.jW(u,this.r,b,a,c)},
ew:function(a,b,c){var u=this.a
if(a===1)return new A.ay(u,b,c)
else return A.jW(u,this.r,b,a,c)},
ex:function(a,b,c){var u=this.a
if(a===1)return new A.a6(u,b,c)
else return A.jW(u,this.r,b,a,c)},
bh:function(a,b){return new P.ea(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
hN:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.a5(u.a,c,d)
case 35664:return new A.au(u.a,c,d)
case 35665:return new A.Q(u.a,c,d)
case 35666:return new A.bX(u.a,c,d)
case 35667:return new A.ig(u.a,c,d)
case 35668:return new A.ih(u.a,c,d)
case 35669:return new A.ii(u.a,c,d)
case 35674:return new A.ik(u.a,c,d)
case 35675:return new A.bF(u.a,c,d)
case 35676:return new A.X(u.a,c,d)
case 35678:return u.ew(b,c,d)
case 35680:return u.ex(b,c,d)
case 35670:throw H.h(u.bh("BOOL",c))
case 35671:throw H.h(u.bh("BOOL_VEC2",c))
case 35672:throw H.h(u.bh("BOOL_VEC3",c))
case 35673:throw H.h(u.bh("BOOL_VEC4",c))
default:throw H.h(P.t("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.bp.prototype={
i:function(a){return this.b}}
A.dK.prototype={}
A.dR.prototype={
e9:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.b3(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.mh(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.l(p.y.v(0,"txtCount"),"$iaj")
p.ch=H.l(p.y.v(0,"backClr"),"$ibX")
p.shy(H.d([],[A.ay]))
p.seu(H.d([],[A.X]))
u=[A.au]
p.shl(H.d([],u))
p.shm(H.d([],u))
p.sez(H.d([],u))
p.seA(H.d([],u))
p.seL(H.d([],[A.aj]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iay"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iX"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iau"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iau"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iau"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iau"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iaj"))}},
shy:function(a){this.cx=H.k(a,"$ib",[A.ay],"$ab")},
seu:function(a){this.cy=H.k(a,"$ib",[A.X],"$ab")},
shl:function(a){this.db=H.k(a,"$ib",[A.au],"$ab")},
shm:function(a){this.dx=H.k(a,"$ib",[A.au],"$ab")},
sez:function(a){this.dy=H.k(a,"$ib",[A.au],"$ab")},
seA:function(a){this.fr=H.k(a,"$ib",[A.au],"$ab")},
seL:function(a){this.fx=H.k(a,"$ib",[A.aj],"$ab")}}
A.dV.prototype={}
A.ij.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
v:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aj.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shz:function(a){H.k(a,"$ib",[P.r],"$ab")}}
A.a5.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.au.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.Q.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.bX.prototype={
dY:function(a){return C.b.ci(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.bF.prototype={
Z:function(a){var u=new Float32Array(H.c0(H.k(a,"$ib",[P.z],"$ab")))
C.b.dS(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.X.prototype={
Z:function(a){var u=new Float32Array(H.c0(H.k(a,"$ib",[P.z],"$ab")))
C.b.cj(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.ay.prototype={
dZ:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.a6.prototype={
cm:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.jj.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c5(s.b,b).c5(s.d.c5(s.c,b),c)
a.sab(0,new V.a_(r.a,r.b,r.c))
a.siw(r.t(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
u=new V.bk(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.J(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a2()}},
$S:18}
F.jC.prototype={
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)},
$S:33}
F.jr.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kf(n.$1(o),m)
m=J.kf(n.$1(o+3.141592653589793/p.c),m).N(0,l)
m=new V.H(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.C(m)))
n=$.kW
if(n==null){n=new V.H(1,0,0)
$.kW=n
t=n}else t=n
n=u.ax(!J.J(u,t)?V.kY():t)
s=n.t(0,Math.sqrt(n.C(n)))
n=s.ax(u)
t=n.t(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
a.sab(0,l.B(0,new V.a_(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:18}
F.a3.prototype={
b0:function(){var u=this
if(!u.gb1()){C.a.E(u.a.a.d.b,u)
u.a.a.a2()}u.bG()
u.bH()
u.h6()},
bK:function(a){this.a=a
C.a.h(a.d.b,this)},
bL:function(a){this.b=a
C.a.h(a.d.c,this)},
hd:function(a){this.c=a
C.a.h(a.d.d,this)},
bG:function(){var u=this.a
if(u!=null){C.a.E(u.d.b,this)
this.a=null}},
bH:function(){var u=this.b
if(u!=null){C.a.E(u.d.c,this)
this.b=null}},
h6:function(){var u=this.c
if(u!=null){C.a.E(u.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
en:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cI()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dB())return
return s.t(0,Math.sqrt(s.C(s)))},
er:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.N(0,q)
r=new V.H(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.C(r)))
r=t.N(0,q)
r=new V.H(r.a,r.b,r.c)
r=s.ax(r.t(0,Math.sqrt(r.C(r))))
return r.t(0,Math.sqrt(r.C(r)))},
bQ:function(){var u,t=this
if(t.d!=null)return!0
u=t.en()
if(u==null){u=t.er()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
em:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cI()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dB())return
return s.t(0,Math.sqrt(s.C(s)))},
eq:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.N(0,g)
l=new V.H(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.N(0,g).u(0,p).B(0,g).N(0,j)
l=new V.H(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.C(l)))
l=o.ax(q)
l=l.t(0,Math.sqrt(l.C(l))).ax(o)
q=l.t(0,Math.sqrt(l.C(l)))}return q},
bP:function(){var u,t=this
if(t.e!=null)return!0
u=t.em()
if(u==null){u=t.eq()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
ghJ:function(a){var u=this
if(J.J(u.a,u.b))return!0
if(J.J(u.b,u.c))return!0
if(J.J(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var u,t,s=this
if(s.gb1())return a+"disposed"
u=a+C.e.ah(J.aw(s.a.e),0)+", "+C.e.ah(J.aw(s.b.e),0)+", "+C.e.ah(J.aw(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
L:function(){return this.D("")}}
F.fv.prototype={}
F.hL.prototype={
b4:function(a,b,c){var u,t=b.a
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
F.be.prototype={
b0:function(){var u=this
if(!u.gb1()){C.a.E(u.a.a.c.b,u)
u.a.a.a2()}u.bG()
u.bH()},
bK:function(a){this.a=a
C.a.h(a.c.b,this)},
bL:function(a){this.b=a
C.a.h(a.c.c,this)},
bG:function(){var u=this.a
if(u!=null){C.a.E(u.c.b,this)
this.a=null}},
bH:function(){var u=this.b
if(u!=null){C.a.E(u.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){if(this.gb1())return a+"disposed"
return a+C.e.ah(J.aw(this.a.e),0)+", "+C.e.ah(J.aw(this.b.e),0)},
L:function(){return this.D("")}}
F.fM.prototype={}
F.id.prototype={
b4:function(a,b,c){var u,t=b.a
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
F.bA.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.e.ah(J.aw(u.e),0)},
L:function(){return this.D("")}}
F.dI.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.L():u},
c7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.p()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.hM())}h.a.p()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bA()
if(n.a==null)H.w(P.t("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.lT(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.ck(l,k,i)}g=h.e
if(g!=null)g.ap(0)},
al:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.al()||!1
if(!t.a.al())u=!1
s=t.e
if(s!=null)s.ap(0)
return u},
aJ:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aJ()||!1
if(!t.a.aJ())u=!1
s=t.e
if(s!=null)s.ap(0)
return u},
bj:function(){var u=this.e
if(u!=null)++u.d
this.a.bj()
u=this.e
if(u!=null)u.ap(0)
return!0},
i5:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.y(o,0)])
for(o=[F.aq];u.length!==0;){t=C.a.ghX(u)
C.a.dM(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b4(0,t,q)){C.a.h(s,q)
C.a.dM(u,r)}}if(s.length>1)b.c7(s)}}p.a.p()
p.c.cc()
p.d.cc()
p.b.ip()
p.c.cd(new F.id())
p.d.cd(new F.hL())
o=p.e
if(o!=null)o.ap(0)},
aW:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.ag()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.aM().a)!==0)++s
if((t&$.aL().a)!==0)++s
if((t&$.bb().a)!==0)++s
if((t&$.aN().a)!==0)++s
if((t&$.cZ().a)!==0)++s
if((t&$.d_().a)!==0)++s
if((t&$.c9().a)!==0)++s
if((t&$.bn().a)!==0)++s
r=a3.gcn(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.d3])
for(n=0,m=0;m<s;++m){l=a3.hE(m)
k=l.gcn(l)
C.a.m(o,m,new Z.d3(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].i2(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.m(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c0(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bc(new Z.e1(a0,f),o,a3)
e.seN(H.d([],[Z.bv]))
if(a.b.b.length!==0){t=P.r
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.p()
C.a.h(d,c.e)}b=Z.jY(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(0,d.length,b))}if(a.c.b.length!==0){t=P.r
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.p()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.p()
C.a.h(d,c.e)}b=Z.jY(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(1,d.length,b))}if(a.d.b.length!==0){t=P.r
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.p()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.p()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.p()
C.a.h(d,c.e)}b=Z.jY(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.n])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.D(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.D(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.D(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.D(t))}return C.a.q(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.w(null)},
$inA:1}
F.hF.prototype={
hC:function(a){var u,t,s,r,q,p
H.k(a,"$ib",[F.aq],"$ab")
u=H.d([],[F.a3])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.ck(t,q,p))}return u},
hD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.aq],"$ab")
u=H.d([],[F.a3])
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
C.a.h(u,F.ck(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ck(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ck(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ck(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cd:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b4(0,p,n)){p.b0()
break}}}}},
cc:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.ghJ(s)
if(t)s.b0()}},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bQ())s=!1
return s},
aJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bP())s=!1
return s},
i:function(a){return this.L()},
D:function(a){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(a))
return C.a.q(r,"\n")},
L:function(){return this.D("")},
seG:function(a){this.b=H.k(a,"$ib",[F.a3],"$ab")}}
F.hG.prototype={
gk:function(a){return this.b.length},
cd:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b4(0,p,n)){p.b0()
break}}}}},
cc:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.J(s.a,s.b)
if(t)s.b0()}},
i:function(a){return this.L()},
D:function(a){var u,t,s=H.d([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].D(a+(""+u+". ")))}return C.a.q(s,"\n")},
L:function(){return this.D("")},
seP:function(a){this.b=H.k(a,"$ib",[F.be],"$ab")}}
F.hH.prototype={
gk:function(a){return this.b.length},
ip:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.E(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.w(null)}s=t.a
if(s!=null){C.a.E(s.b.b,t)
t.a=null}}}},
i:function(a){return this.L()},
D:function(a){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(a))
return C.a.q(r,"\n")},
L:function(){return this.D("")},
sbD:function(a){this.b=H.k(a,"$ib",[F.bA],"$ab")}}
F.aq.prototype={
bS:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iv(u.cx,r,o,t,s,q,p,a,n)},
hM:function(){return this.bS(null)},
sab:function(a,b){var u
if(!J.J(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
siw:function(a){var u
if(!J.J(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
i2:function(a){var u,t,s=this
if(a.n(0,$.ag())){u=s.f
t=[P.z]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.aM())){u=s.r
t=[P.z]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.aL())){u=s.x
t=[P.z]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.bb())){u=s.y
t=[P.z]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.n(0,$.aN())){u=s.z
t=[P.z]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.cZ())){u=s.Q
t=[P.z]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.d_())){u=s.Q
t=[P.z]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.c9()))return H.d([s.ch],[P.z])
else if(a.n(0,$.bn())){u=s.cx
t=[P.z]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.z])},
bQ:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cI()
t.d.K(0,new F.iG(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ap(0)}return!0},
bP:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cI()
t.d.K(0,new F.iF(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ap(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var u,t,s=this,r="-",q=H.d([],[P.n])
C.a.h(q,C.e.ah(J.aw(s.e),0))
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
C.a.h(q,V.P(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
L:function(){return this.D("")}}
F.iG.prototype={
$1:function(a){var u,t
H.j(a,"$ia3")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.iF.prototype={
$1:function(a){var u,t
H.j(a,"$ia3")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.iw.prototype={
p:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a2()
return!0},
bi:function(a,b,c,d,e,f){var u=F.iv(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bQ()
return!0},
aJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bP()
return!0},
bj:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.J(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
i:function(a){return this.L()},
D:function(a){var u,t,s,r
this.p()
u=H.d([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].D(a))
return C.a.q(u,"\n")},
L:function(){return this.D("")},
shA:function(a){this.c=H.k(a,"$ib",[F.aq],"$ab")}}
F.ix.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.c(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.c(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.c(t,b)
return t[b]},
K:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a3]})
C.a.K(u.b,b)
C.a.K(u.c,new F.iy(u,b))
C.a.K(u.d,new F.iz(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
return C.a.q(r,"\n")},
seH:function(a){this.b=H.k(a,"$ib",[F.a3],"$ab")},
seI:function(a){this.c=H.k(a,"$ib",[F.a3],"$ab")},
seJ:function(a){this.d=H.k(a,"$ib",[F.a3],"$ab")}}
F.iy.prototype={
$1:function(a){H.j(a,"$ia3")
if(!J.J(a.a,this.a))this.b.$1(a)},
$S:5}
F.iz.prototype={
$1:function(a){var u
H.j(a,"$ia3")
u=this.a
if(!J.J(a.a,u)&&!J.J(a.b,u))this.b.$1(a)},
$S:5}
F.iA.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
return C.a.q(r,"\n")},
seQ:function(a){this.b=H.k(a,"$ib",[F.be],"$ab")},
seR:function(a){this.c=H.k(a,"$ib",[F.be],"$ab")}}
F.iC.prototype={}
F.iB.prototype={
b4:function(a,b,c){return J.J(b.f,c.f)}}
F.iD.prototype={}
F.hl.prototype={
c7:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[F.aq],"$ab")
u=V.cI()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.H(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.t(0,Math.sqrt(u.C(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.u)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.t(0,Math.sqrt(o*o+n*n+m*m))}if(!J.J(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.w(null)}}}return}}
F.iE.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
return C.a.q(r,"\n")},
sbD:function(a){this.b=H.k(a,"$ib",[F.bA],"$ab")}}
O.fk.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.L():u},
W:function(){var u=this.r
if(u!=null)u.w(null)},
sdf:function(a){if(this.b!=a){this.b=a
this.W()}},
sdc:function(a){if(this.c!=a){this.c=a
this.W()}},
sda:function(a){var u=a==null?V.aY():a
this.f=u
if(!J.J(u,a)){this.f=a
this.W()}},
a8:function(a,b){},
a0:function(a,b){H.k(a,"$ib",[T.aI],"$ab")
if(b!=null)if(!C.a.ae(a,b)){b.a=a.length
C.a.h(a,b)}},
b8:function(a,b){var u,t,s,r,q,p,o=this,n="Distort"
if(o.a==null){u=H.j(a.fr.j(0,n),"$ida")
if(u==null){t=a.a
u=new A.da(t,n)
u.aQ(t,n)
u.b3(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txt2DAttr")
u.ch=H.l(u.y.v(0,"projViewObjMat"),"$iX")
u.cx=H.l(u.y.v(0,"colorTxt2DMat"),"$ibF")
u.cy=H.l(u.y.v(0,"bumpTxt2DMat"),"$ibF")
u.db=H.l(u.y.v(0,"colorTxt"),"$iay")
u.dx=H.l(u.y.v(0,"bumpTxt"),"$iay")
u.dy=H.l(u.y.v(0,"bumpMat"),"$iX")
a.aV(u)}o.a=u}if(b.e==null){t=b.d
s=$.ag()
r=$.bb()
r=t.aW(new Z.bG(a.a),new Z.av(s.a|r.a))
r.a5($.ag()).e=o.a.z.c
r.a5($.bb()).e=o.a.Q.c
b.e=r}q=H.d([],[T.aI])
o.a0(q,o.b)
o.a0(q,o.c)
for(p=0;p<q.length;++p)q[p].H(a)
t=o.a
t.H(a)
s=o.b
t.d2(t.db,s)
s=o.c
t.d2(t.dx,s)
s=a.gca()
r=t.ch
r.toString
r.Z(s.S(0,!0))
s=o.d
r=t.cx
r.toString
r.Z(s.S(0,!0))
s=o.e
r=t.cy
r.toString
r.Z(s.S(0,!0))
s=o.f
t=t.dy
t.toString
t.Z(s.S(0,!0))
t=b.e
if(t instanceof Z.bc){t.H(a)
t.a6(a)
t.a3(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.b_()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(3553,null)}}}}
O.dt.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.L():u},
F:function(a){var u
H.j(a,"$ix")
u=this.fr
if(u!=null)u.w(a)},
W:function(){return this.F(null)},
cW:function(a){H.j(a,"$ix")
this.a=null
this.F(a)},
ha:function(){return this.cW(null)},
f7:function(a,b){var u=V.ad
H.k(b,"$ie",[u],"$ae")
u=new D.bw([u])
u.b=!0
this.F(u)},
f9:function(a,b){var u=V.ad
H.k(b,"$ie",[u],"$ae")
u=new D.bx([u])
u.b=!0
this.F(u)},
cG:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.r,h=new H.W([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=h.j(0,0)
h.m(0,0,r==null?1:r)}q=H.d([],[A.aD])
h.K(0,new O.h1(j,q))
C.a.br(q,new O.h2())
p=new H.W([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){o=u[s]
r=o.gaZ()
n=p.j(0,o.gaZ())
p.m(0,r,n==null?1:n)}m=H.d([],[A.aE])
p.K(0,new O.h3(j,m))
C.a.br(m,new O.h4())
l=new H.W([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){o=i[s]
t=o.gaZ()
r=l.j(0,o.gaZ())
l.m(0,t,r==null?1:r)}k=H.d([],[A.aF])
l.K(0,new O.h5(j,k))
C.a.br(k,new O.h6())
i=C.d.a7(j.e.a.length+3,4)
j.dy.e
return A.lZ(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a0:function(a,b){H.k(a,"$ib",[T.aI],"$ab")},
a8:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.an(u,u.length,[H.y(u,0)]);u.A();){t=u.d
t.toString
s=$.iu
if(s==null)s=$.iu=new V.H(0,0,1)
t.a=s
r=$.it
t.d=r==null?$.it=new V.H(0,1,0):r
r=$.is
t.e=r==null?$.is=new V.H(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bp(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bp(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bp(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
b8:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cG()
u=H.j(b4.fr.j(0,b3.b2),"$idu")
if(u==null){u=A.lY(b3,b4.a)
b4.aV(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.bk
b3=b5.e
if(!(b3 instanceof Z.bc))b3=b5.e=null
if(b3==null||!b3.d.n(0,s)){b3=t.k3
if(b3)b5.d.al()
r=t.k4
if(r)b5.d.aJ()
q=t.r2
if(q)b5.d.bj()
p=b5.d.aW(new Z.bG(b4.a),s)
p.a5($.ag()).e=b2.a.Q.c
if(b3)p.a5($.aM()).e=b2.a.cx.c
if(r)p.a5($.aL()).e=b2.a.ch.c
if(t.r1)p.a5($.bb()).e=b2.a.cy.c
if(q)p.a5($.aN()).e=b2.a.db.c
if(t.rx)p.a5($.bn()).e=b2.a.dx.c
b5.e=p}b3=T.aI
o=H.d([],[b3])
b2.a.H(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga1(q)
r=r.dy
r.toString
r.Z(q.S(0,!0))}if(t.fr){r=b2.a
q=b4.gdT()
r=r.fr
r.toString
r.Z(q.S(0,!0))}r=b2.a
q=b4.gca()
r=r.fy
r.toString
r.Z(q.S(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.Z(C.l.S(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.Z(C.l.S(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.Z(C.l.S(q,!0))}if(t.y2>0){n=b2.e.a.length
r=b2.a.k4
C.b.aM(r.a,r.d,n)
for(r=[P.z],m=0;m<n;++m){q=b2.a
l=b2.e.a
if(m>=l.length)return H.c(l,m)
l=l[m]
q.toString
H.j(l,"$iad")
q=q.r1
if(m>=q.length)return H.c(q,m)
q=q[m]
k=new Float32Array(H.c0(H.k(l.S(0,!0),"$ib",r,"$ab")))
C.b.cj(q.a,q.d,!1,k)}}r=t.a
if(r.a){q=b2.a
l=b2.f.f
q=q.r2
C.b.T(q.a,q.d,l.a,l.b,l.c)}if(r.c){b2.a0(o,b2.f.e)
r=b2.a
q=b2.f.e
r.ad(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
l=b2.r.f
q=q.x1
C.b.T(q.a,q.d,l.a,l.b,l.c)}if(r.c){b2.a0(o,b2.r.e)
r=b2.a
q=b2.r.e
r.ad(r.y1,q)}r=t.c
if(r.a){q=b2.a
l=b2.x.f
q=q.y2
C.b.T(q.a,q.d,l.a,l.b,l.c)}if(r.c){b2.a0(o,b2.x.e)
r=b2.a
q=b2.x.e
r.ad(r.bk,q)}r=t.d
if(r.a){q=b2.a
l=b2.y.f
q=q.dj
C.b.T(q.a,q.d,l.a,l.b,l.c)}if(r.c){b2.a0(o,b2.y.e)
r=b2.a
q=b2.y.e
r.ad(r.dk,q)}r=t.e
q=r.a
if(!q)l=r.c
else l=!0
if(l){l=b2.a
j=b2.z.ch
l=l.dn
C.b.a4(l.a,l.d,j)}if(q){q=b2.a
l=b2.z.f
q=q.dl
C.b.T(q.a,q.d,l.a,l.b,l.c)}if(r.c){b2.a0(o,b2.z.e)
r=b2.a
q=b2.z.e
r.ad(r.dm,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.r
h=new H.W([q,q])
for(q=b2.dx.e,l=q.length,g=0;g<q.length;q.length===l||(0,H.u)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.m(0,0,e+1)
d=J.eW(b2.a.bV.j(0,0),e)
j=i.bp(f.a)
c=j.a
b=j.b
a=j.c
a=j.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
j=a.b
a=a.c
C.b.T(b.a,b.d,c,j,a)
a=f.c
j=d.f
C.b.T(j.a,j.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){l=r[g].a
n=h.j(0,l)
if(n==null)n=0
l=b2.a.bU.j(0,l)
C.b.aM(l.a,l.d,n)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.r
a0=new H.W([q,q])
for(q=b2.dx.f,l=q.length,j=[b3],c=[P.z],g=0;g<q.length;q.length===l||(0,H.u)(q),++g){f=q[g]
a1=f.gaZ()
e=a0.j(0,a1)
if(e==null)e=0
a0.m(0,a1,e+1)
d=J.eW(b2.a.bX.j(0,a1),e)
a2=i.u(0,f.ga1(f))
b=f.ga1(f)
a=$.cv
b=b.cg(a==null?$.cv=new V.a_(0,0,0):a)
a=d.b
C.b.T(a.a,a.d,b.a,b.b,b.c)
b=$.cv
b=a2.cg(b==null?$.cv=new V.a_(0,0,0):b)
a=d.c
C.b.T(a.a,a.d,b.a,b.b,b.c)
b=f.gaY(f)
a=d.e
C.b.T(a.a,a.d,b.a,b.b,b.c)
f.gaC()
b=a2.c2(0)
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
k=new Float32Array(H.c0(H.k(new V.cp(a,a3,a4,a5,a6,a7,a8,a9,b).S(0,!0),"$ib",c,"$ab")))
C.b.dS(b0.a,b0.d,!1,k)
f.gaC()
b=f.gaC()
H.k(o,"$ib",j,"$ab")
if(!C.a.ae(o,b)){b.sc0(0,o.length)
C.a.h(o,b)}b=f.gaC()
a=b.gc6(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaO()
b=f.ge_()
a=d.x
a.toString
a3=b.ghR(b)
a4=b.ghS(b)
a5=b.ghT()
b=b.ghQ()
C.b.ci(a.a,a.d,a3,a4,a5,b)
b=f.gaO()
if(!C.a.ae(o,b)){b.sc0(0,o.length)
C.a.h(o,b)}b=f.gaO()
a=b.gc6(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.ghV()){b=f.ghF()
a=d.y
C.b.a4(a.a,a.d,b)
b=f.ghG()
a=d.z
C.b.a4(a.a,a.d,b)
b=f.ghH()
a=d.Q
C.b.a4(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){l=r[g].a
n=a0.j(0,l)
if(n==null)n=0
l=b2.a.bW.j(0,l)
C.b.aM(l.a,l.d,n)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.r
b1=new H.W([q,q])
for(q=b2.dx.r,l=q.length,b3=[b3],g=0;g<q.length;q.length===l||(0,H.u)(q),++g){f=q[g]
a1=f.gaZ()
e=b1.j(0,a1)
if(e==null)e=0
b1.m(0,a1,e+1)
d=J.eW(b2.a.bZ.j(0,a1),e)
j=f.gim(f)
c=d.b
C.b.T(c.a,c.d,j.a,j.b,j.c)
j=f.giF(f).iQ()
c=d.c
C.b.T(c.a,c.d,j.a,j.b,j.c)
j=i.cg(f.gim(f))
c=d.d
C.b.T(c.a,c.d,j.a,j.b,j.c)
j=f.gaY(f)
c=d.e
C.b.T(c.a,c.d,j.a,j.b,j.c)
f.gaC()
j=f.giT()
c=d.f
C.b.T(c.a,c.d,j.a,j.b,j.c)
j=f.gce(f)
c=d.r
C.b.T(c.a,c.d,j.a,j.b,j.c)
j=f.giR()
c=d.x
C.b.a4(c.a,c.d,j)
j=f.giS()
c=d.y
C.b.a4(c.a,c.d,j)
f.gaC()
j=f.gaC()
H.k(o,"$ib",b3,"$ab")
if(!C.a.ae(o,j)){j.sc0(0,o.length)
C.a.h(o,j)}j=f.gaC()
c=j.gc6(j)
if(c){c=d.dx
c.toString
b=j.d
if(!b)c.a.uniform1i(c.d,0)
else{j=j.a
c.a.uniform1i(c.d,j)}}f.gaO()
j=f.ge_()
c=d.z
c.toString
b=j.ghR(j)
a=j.ghS(j)
a3=j.ghT()
j=j.ghQ()
C.b.ci(c.a,c.d,b,a,a3,j)
j=f.gaO()
if(!C.a.ae(o,j)){j.sc0(0,o.length)
C.a.h(o,j)}j=f.gaO()
c=j.gc6(j)
if(c){c=d.dy
c.toString
b=j.d
if(!b)c.a.uniform1i(c.d,0)
else{j=j.a
c.a.uniform1i(c.d,j)}}if(f.giG()){j=f.giE()
c=d.Q
C.b.a4(c.a,c.d,j)
j=f.giD()
c=d.ch
C.b.a4(c.a,c.d,j)}if(f.ghV()){j=f.ghF()
c=d.cx
C.b.a4(c.a,c.d,j)
j=f.ghG()
c=d.cy
C.b.a4(c.a,c.d,j)
j=f.ghH()
c=d.db
C.b.a4(c.a,c.d,j)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.u)(r),++g){q=r[g].a
n=b1.j(0,q)
if(n==null)n=0
q=b2.a.bY.j(0,q)
C.b.aM(q.a,q.d,n)}}}if(t.f.c){b2.a0(o,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.ad(b3.dq,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga1(r).c2(0)}b3=b3.id
b3.toString
b3.Z(r.S(0,!0))}if(t.cy){b2.a0(o,b2.ch)
b3=b2.a
r=b2.ch
b3.ad(b3.dr,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.ds
C.b.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a0(o,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.ad(b3.dt,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
l=b2.cy.ch
q=q.du
C.b.a4(q.a,q.d,l)}if(r){r=b2.a
q=b2.cy.f
r=r.dv
C.b.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a0(o,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.ad(b3.dw,r)}}b3=t.y
r=b3.a
q=!r
if(q)l=b3.c
else l=!0
if(l){if(r){r=b2.a
l=b2.db.f
r=r.dz
C.b.a4(r.a,r.d,l)}if(b3.c){b2.a0(o,b2.db.e)
r=b2.a
l=b2.db.e
r.ad(r.dA,l)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(m=0;m<o.length;++m)o[m].H(b4)
r=b5.e
r.H(b4)
r.a6(b4)
r.a3(b4)
if(q)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(m=0;m<o.length;++m)o[m].a3(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.b_()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cG().b2},
sep:function(a){this.e=H.k(a,"$iR",[V.ad],"$aR")}}
O.h1.prototype={
$2:function(a,b){H.a8(a)
H.a8(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aD(a,C.d.a7(b+3,4)*4))},
$S:8}
O.h2.prototype={
$2:function(a,b){H.j(a,"$iaD")
H.j(b,"$iaD")
return J.jE(a.a,b.a)},
$S:37}
O.h3.prototype={
$2:function(a,b){H.a8(a)
H.a8(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aE(a,C.d.a7(b+3,4)*4))},
$S:8}
O.h4.prototype={
$2:function(a,b){H.j(a,"$iaE")
H.j(b,"$iaE")
return J.jE(a.a,b.a)},
$S:38}
O.h5.prototype={
$2:function(a,b){H.a8(a)
H.a8(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aF(a,C.d.a7(b+3,4)*4))},
$S:8}
O.h6.prototype={
$2:function(a,b){H.j(a,"$iaF")
H.j(b,"$iaF")
return J.jE(a.a,b.a)},
$S:39}
O.fW.prototype={
av:function(){var u,t=this
t.cq()
u=t.f
if(!(Math.abs(u-1)<$.K().a)){t.f=1
u=new D.A(t.b,u,1,[P.z])
u.b=!0
t.a.F(u)}}}
O.dv.prototype={
av:function(){},
d0:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.av()
u=s.a
u.a=null
u.F(null)}}}
O.fX.prototype={}
O.aX.prototype={
d_:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.A(s.b+".color",u,a,[V.Z])
t.b=!0
s.a.F(t)}},
av:function(){this.cq()
this.d_(new V.Z(1,1,1))},
saY:function(a,b){this.d0(new A.ab(!0,!1,this.c.c))
this.d_(b)}}
O.fZ.prototype={}
O.h_.prototype={
av:function(){var u,t=this
t.cr()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.A(t.b+".refraction",u,1,[P.z])
u.b=!0
t.a.F(u)}}}
O.h0.prototype={
d1:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.A(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.F(t)}},
av:function(){this.cr()
this.d1(100)}}
O.dz.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.L():u},
F:function(a){var u
H.j(a,"$ix")
u=this.r
if(u!=null)u.w(a)},
W:function(){return this.F(null)},
cY:function(a){},
cZ:function(a){var u,t=this,s=t.f
if(s!=a){if(s!=null)s.gl().E(0,t.gac())
u=t.f
t.f=a
if(a!=null)a.gl().h(0,t.gac())
s=new D.A("bumpyTextureCube",u,t.f,[T.cE])
s.b=!0
t.F(s)}},
a0:function(a,b){H.k(a,"$ib",[T.aI],"$ab")
if(b!=null)if(!C.a.ae(a,b)){b.a=a.length
C.a.h(a,b)}},
a8:function(a,b){},
b8:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="varying vec3 txtCube;\n",h=j.a
if(h==null){h=A.ky(j.d)
u=h.e
t=H.j(a.fr.j(0,u),"$idA")
if(t==null){s=a.a
t=new A.dA(s,u)
t.aQ(s,u)
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
t.b3(0,s.charCodeAt(0)==0?s:s,r.charCodeAt(0)==0?r:r)
t.Q=t.x.j(0,"posAttr")
t.cx=t.x.j(0,"normAttr")
t.ch=t.x.j(0,"binmAttr")
t.cy=t.x.j(0,"txt2DAttr")
t.db=t.x.j(0,"txtCubeAttr")
t.dx=H.l(t.y.v(0,"viewObjMat"),"$iX")
t.dy=H.l(t.y.v(0,"projViewObjMat"),"$iX")
if(u)t.fx=H.l(t.y.v(0,"txtCubeMat"),"$iX")
if(h.c)t.go=H.l(t.y.v(0,"bumpTxt"),"$ia6")
a.aV(t)}h=j.a=t
b.e=null}o=h.z
n=o.f
h=b.e
if(!(h instanceof Z.bc))h=b.e=null
if(h==null||!h.d.n(0,n)){b.d.al()
h=o.b
if(h)b.d.aJ()
u=o.d
if(u)b.d.bj()
m=b.d.aW(new Z.bG(a.a),n)
m.a5($.ag()).e=j.a.Q.c
m.a5($.aM()).e=j.a.cx.c
if(h)m.a5($.aL()).e=j.a.ch.c
if(u)m.a5($.aN()).e=j.a.db.c
b.e=m}l=H.d([],[T.aI])
j.a.H(a)
h=j.a
u=a.gdT()
h=h.dx
h.toString
h.Z(u.S(0,!0))
u=j.a
h=a.gca()
u=u.dy
u.toString
u.Z(h.S(0,!0))
if(o.d){h=j.a
u=j.c
h=h.fx
h.toString
h.Z(u.S(0,!0))}if(o.a.c){j.a0(l,j.f)
h=j.a
u=j.f
h=h.go
if(u!=null&&u.d>=6)h.cm(u)}for(k=0;k<l.length;++k)l[k].H(a)
h=b.e
h.H(a)
h.a6(a)
h.a3(a)
for(h=a.a,k=0;k<l.length;++k){u=l[k]
if(u.c){u.c=!1
h.activeTexture(33984+u.a)
h.bindTexture(34067,null)}}u=j.a
u.toString
h.useProgram(null)
u.x.b_()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return A.ky(this.d).e}}
O.dJ.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.L():u},
F:function(a){var u
H.j(a,"$ix")
u=this.e
if(u!=null)u.w(a)},
W:function(){return this.F(null)},
a8:function(a,b){},
b8:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.j(a.fr.j(0,n),"$idK")
if(u==null){t=a.a
u=new A.dK(t,n)
u.aQ(t,n)
u.b3(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.l(u.y.j(0,"fov"),"$ia5")
u.ch=H.l(u.y.j(0,"ratio"),"$ia5")
u.cx=H.l(u.y.j(0,"boxClr"),"$iQ")
u.cy=H.l(u.y.j(0,"boxTxt"),"$ia6")
u.db=H.l(u.y.j(0,"viewMat"),"$iX")
a.aV(u)}o.a=u}if(b.e==null){t=b.d.aW(new Z.bG(a.a),$.ag())
t.a5($.ag()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.H(a)}t=a.d
s=a.c
r=o.a
r.H(a)
q=o.b
p=r.Q
C.b.a4(p.a,p.d,q)
q=r.ch
C.b.a4(q.a,q.d,t/s)
s=o.c
r.cy.cm(s)
s=o.d
t=r.cx
C.b.T(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga1(s).c2(0)
r=r.db
r.toString
r.Z(s.S(0,!0))
t=b.e
if(t instanceof Z.bc){t.H(a)
t.a6(a)
t.a3(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.b_()
t=o.c
if(t!=null)t.a3(a)}}
O.bD.prototype={}
O.dQ.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.L():u},
F:function(a){var u
H.j(a,"$ix")
u=this.e
if(u!=null)u.w(a)},
W:function(){return this.F(null)},
fn:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ie",[O.aJ],"$ae")
for(u=b.length,t=this.gac(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bt()
o.saa(null)
o.saH(null)
o.c=null
o.d=0
p.f=o}H.o(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
fp:function(a,b){var u,t
H.k(b,"$ie",[O.aJ],"$ae")
for(u=b.gR(b),t=this.gac();u.A();)u.gJ(u).gl().E(0,t)
this.W()},
sd8:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.A("blend",u,a,[A.bp])
u.b=!0
this.F(u)}},
a8:function(a,b){},
eO:function(a){a=C.d.a7(a+3,4)*4
if(a<=0)return 4
return a},
b8:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.eO(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.d.i(u.a)
s=H.j(a.fr.j(0,t),"$idR")
if(s==null){s=A.mg(g,u,a.a)
a.aV(s)}h.b=s
u=s}if(b.e==null){u=b.d.aW(new Z.bG(a.a),$.ag())
t=u.a5($.ag())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.H(a)
u=T.aI
q=H.d([],[u])
for(t=[P.z],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.k(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.ae(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.c(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.c(r,p)
r=r[p]
if(m==null){m=$.h7
if(m==null){m=new V.ad(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.h7=m}}j=new Float32Array(H.c0(H.k(m.S(0,!0),"$ib",t,"$ab")))
C.b.cj(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cz
if(m==null){m=V.cy(0,0,1,1)
$.cz=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.c(m,p)
m=m[p]
C.b.bq(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.c(r,p)
r=r[p]
C.b.bq(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cz
if(m==null){m=V.cy(0,0,1,1)
$.cz=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.c(m,p)
m=m[p]
C.b.bq(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.c(r,p)
r=r[p]
C.b.bq(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.c(r,p)
r=r[p]
m=H.C(m)?1:0
C.b.aM(r.a,r.d,m);++p}}u=h.b.Q
C.b.aM(u.a,u.d,p)
u=h.b
t=h.a
u.ch.dY(t)
for(o=0;o<q.length;++o)q[o].H(a)
u=b.e
if(u instanceof Z.bc){u.H(a)
u.a6(a)
u.a3(a)}else b.e=null
u=h.b
u.toString
t=a.a
t.useProgram(null)
u.x.b_()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}},
seE:function(a){this.c=H.k(a,"$iR",[O.aJ],"$aR")}}
O.aJ.prototype={
F:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.w(a)},
W:function(){return this.F(null)}}
T.aI.prototype={}
T.dP.prototype={}
T.i0.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.L():u},
H:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.cE.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.L():u},
H:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a3:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.i1.prototype={
dC:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cE()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aG(u,k,r,34069,!1,!1)
t.aG(u,k,o,34070,!1,!1)
t.aG(u,k,q,34071,!1,!1)
t.aG(u,k,n,34072,!1,!1)
t.aG(u,k,p,34073,!1,!1)
t.aG(u,k,m,34074,!1,!1)
return u},
i3:function(a){return this.dC(a,".png")},
aG:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.m
W.a7(t,"load",H.o(new T.i2(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hb:function(a,b,c){var u,t,s,r
b=V.cY(b)
u=V.cY(a.width)
t=V.cY(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jH()
s.width=u
s.height=t
r=H.j(C.h.dV(s,"2d"),"$ice")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.n3(r.getImageData(0,0,s.width,s.height))}}}
T.i2.prototype={
$1:function(a){var u=this,t=u.a,s=t.hb(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.iv(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.bT()}++t.e},
$S:15}
V.eY.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$ibf:1}
V.bf.prototype={}
V.ds.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sau:function(a){this.a=H.k(a,"$ib",[V.bf],"$ab")},
$ibf:1}
V.bh.prototype={
aL:function(a,b){return!this.e3(0,b)},
i:function(a){return"!["+this.cp(0)+"]"}}
V.hE.prototype={
e7:function(a){var u,t
if(a.a.length<=0)throw H.h(P.t("May not create a SetMatcher with zero characters."))
u=new H.W([P.r,P.Y])
for(t=new H.dq(a,a.gk(a),[H.aC(a,"v",0)]);t.A();)u.m(0,t.d,!0)
this.shc(u)},
aL:function(a,b){return this.a.dg(0,b)},
i:function(a){var u=this.a
return P.jU(new H.dp(u,[H.y(u,0)]))},
shc:function(a){this.a=H.k(a,"$iD",[P.r,P.Y],"$aD")},
$ibf:1}
V.cB.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cG(this.a.M(0,b))
r.sau(H.d([],[V.bf]))
r.c=!1
C.a.h(this.c,r)
return r},
hW:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
shx:function(a){this.c=H.k(a,"$ib",[V.cG],"$ab")}}
V.dT.prototype={
i:function(a){var u=H.ll(this.b,"\n","\\n"),t=H.ll(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cF.prototype={
i:function(a){return this.b},
sh7:function(a){var u=P.n
this.c=H.k(a,"$iD",[u,u],"$aD")}}
V.i5.prototype={
M:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cB(this,b)
u.shx(H.d([],[V.cG]))
u.d=null
this.a.m(0,b,u)}return u},
b9:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cF(a)
u=P.n
t.sh7(new H.W([u,u]))
this.b.m(0,a,t)}return t},
iB:function(a){var u,t,s,r,q,p,o,n,m=H.d([],[V.dT]),l=this.c,k=[P.r],j=H.d([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.e.bd(a,s)
q=l.hW(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jU(j)
throw H.h(P.t("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.d([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jU(j)
o=l.d
n=o.c.j(0,p)
t=new V.dT(n==null?o.b:n,p,s)}++s}}},
shn:function(a){this.a=H.k(a,"$iD",[P.n,V.cB],"$aD")},
shq:function(a){this.b=H.k(a,"$iD",[P.n,V.cF],"$aD")}}
V.cG.prototype={
i:function(a){return this.b.b+": "+this.cp(0)}}
X.f6.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.L():u},
a_:function(a){var u=this.fr
if(u!=null)u.w(a)},
saj:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.A("width",u,b,[P.r])
u.b=!0
t.a_(u)}},
saf:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.A("height",u,b,[P.r])
u.b=!0
t.a_(u)}},
H:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.u()
h.saj(0,C.d.X(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.u()
h.saf(0,C.d.X(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.a8(u.getParameter(3379))
p=V.cY(s)
o=V.cY(r)
q=V.cY(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.b.dP(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kL(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.bT()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.bT()
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
a.c=C.c.X(s*h.a)
r=t.d
a.d=C.c.X(r*h.b)
l=t.a
k=h.c
j=C.c.X(l*k)
t=t.b
l=h.d
u.viewport(j,C.c.X(t*l),C.c.X(s*k),C.c.X(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
a3:function(a){a.a.bindFramebuffer(36160,null)}}
X.bO.prototype={$ibT:1}
X.fD.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.L():u},
H:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.E(u)
q=C.c.X(r*u)
r=s.b
if(typeof t!=="number")return H.E(t)
p=C.c.X(r*t)
r=C.c.X(s.c*u)
a.c=r
s=C.c.X(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
a3:function(a){}}
X.fF.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.L():u},
H:function(a){var u
a.cy.bn(V.aY())
u=V.aY()
a.db.bn(u)},
a3:function(a){a.cy.aA()
a.db.aA()},
$ibT:1,
$ibO:1}
X.dC.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.L():u},
a_:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.w(a)},
ej:function(){return this.a_(null)},
sb5:function(a){var u,t,s=this
if(!J.J(s.b,a)){u=s.b
if(u!=null)u.gl().E(0,s.gcv())
t=s.b
s.b=a
if(a!=null)a.gl().h(0,s.gcv())
u=new D.A("mover",t,s.b,[U.af])
u.b=!0
s.a_(u)}},
H:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bg(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bn(k)
r=$.kC
if(r==null){r=V.kE()
q=V.jX()
p=$.kV
r=V.kv(r,q,p==null?$.kV=new V.H(0,0,-1):p)
$.kC=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aN(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bn(u)},
a3:function(a){a.cy.aA()
a.db.aA()},
$ibT:1,
$ibO:1}
X.cD.prototype={}
V.jA.prototype={
$1:function(a){var u
H.j(a,"$ib5")
u=C.c.dR(this.a.ghY(),2)
if(u!=="0.00")P.kc(u+" fps")},
$S:30}
V.hI.prototype={
e8:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a7(q,"scroll",H.o(new V.hK(o),{func:1,ret:-1,args:[r]}),!1,r)},
d6:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.n],"$ab")
this.hf()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iB(C.a.i1(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.no(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.aa(m[1])
l.textContent=H.aa(m[0])
t.appendChild(l)}else{k=P.mu(C.I,n,C.p,!1)
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
hf:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i5()
t=P.n
u.shn(new H.W([t,V.cB]))
u.shq(new H.W([t,V.cF]))
u.c=null
u.c=u.M(0,q)
t=u.M(0,q).q(0,p)
s=V.ai(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,p).q(0,p)
s=new V.bh()
r=[V.bf]
s.sau(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a0("*"))
C.a.h(s.a,t)
t=u.M(0,p).q(0,"BoldEnd")
s=V.ai(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).q(0,o)
s=V.ai(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,o).q(0,o)
s=new V.bh()
s.sau(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a0("_"))
C.a.h(s.a,t)
t=u.M(0,o).q(0,n)
s=V.ai(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).q(0,m)
s=V.ai(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,m).q(0,m)
s=new V.bh()
s.sau(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a0("`"))
C.a.h(s.a,t)
t=u.M(0,m).q(0,"CodeEnd")
s=V.ai(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).q(0,l)
s=V.ai(new H.a0("["))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,l).q(0,k)
s=V.ai(new H.a0("|"))
C.a.h(t.a,s)
s=u.M(0,l).q(0,j)
t=V.ai(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,l).q(0,l)
t=new V.bh()
t.sau(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a0("|]"))
C.a.h(t.a,s)
s=u.M(0,k).q(0,j)
t=V.ai(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,k).q(0,k)
t=new V.bh()
t.sau(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a0("|]"))
C.a.h(t.a,s)
C.a.h(u.M(0,q).q(0,i).a,new V.eY())
s=u.M(0,i).q(0,i)
t=new V.bh()
t.sau(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a0("*_`["))
C.a.h(t.a,s)
s=u.M(0,"BoldEnd")
s.d=s.a.b9(p)
s=u.M(0,n)
s.d=s.a.b9(o)
s=u.M(0,"CodeEnd")
s.d=s.a.b9(m)
s=u.M(0,j)
s.d=s.a.b9("Link")
s=u.M(0,i)
s.d=s.a.b9(i)
this.b=u}}
V.hK.prototype={
$1:function(a){P.kO(C.k,new V.hJ(this.a))},
$S:15}
V.hJ.prototype={
$0:function(){var u=C.c.X(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:1};(function aliases(){var u=J.a.prototype
u.e1=u.i
u=J.dl.prototype
u.e2=u.i
u=O.dv.prototype
u.cq=u.av
u=O.aX.prototype
u.cr=u.av
u=V.ds.prototype
u.e3=u.aL
u.cp=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mY","mm",12)
u(P,"mZ","mn",12)
u(P,"n_","mo",12)
t(P,"l8","mW",3)
var n
s(n=E.al.prototype,"gdK",0,0,null,["$1","$0"],["dL","ic"],0,0)
s(n,"gdI",0,0,null,["$1","$0"],["dJ","ib"],0,0)
s(n,"gdG",0,0,null,["$1","$0"],["dH","i8"],0,0)
r(n,"gi6","i7",7)
r(n,"gi9","ia",7)
s(n=E.dS.prototype,"gcs",0,0,null,["$1","$0"],["cu","ct"],0,0)
q(n,"gir","dN",3)
p(n=X.dZ.prototype,"gfq","fs",9)
p(n,"gfa","fb",9)
p(n,"gfg","fh",4)
p(n,"gfv","fw",23)
p(n,"gft","fu",23)
p(n,"gfB","fC",4)
p(n,"gfF","fG",4)
p(n,"gfk","fl",4)
p(n,"gfD","fE",4)
p(n,"gfi","fj",4)
p(n,"gfH","fI",27)
p(n,"gfJ","fK",9)
p(n,"gfZ","h_",10)
p(n,"gfV","fW",10)
p(n,"gfX","fY",10)
s(D.bq.prototype,"geb",0,0,null,["$1","$0"],["as","ec"],0,0)
s(n=D.dn.prototype,"gcQ",0,0,null,["$1","$0"],["cR","fz"],0,0)
p(n,"gfL","fM",42)
r(n,"gf4","f5",24)
r(n,"gfP","fQ",24)
o(V.U.prototype,"gk","c4",22)
o(V.H.prototype,"gk","c4",22)
s(n=U.cm.prototype,"gbc",0,0,null,["$1","$0"],["P","am"],0,0)
r(n,"ged","ee",20)
r(n,"gfN","fO",20)
s(n=U.e_.prototype,"gbc",0,0,null,["$1","$0"],["P","am"],0,0)
p(n,"geX","eY",2)
p(n,"geZ","f_",2)
p(n,"gf0","f1",2)
p(n,"geT","eU",2)
p(n,"geV","eW",2)
p(n,"ghv","hw",2)
p(n,"ght","hu",2)
p(n,"ghr","hs",2)
p(U.e0.prototype,"gf2","f3",2)
s(n=M.d5.prototype,"gU",0,0,null,["$1","$0"],["V","aR"],0,0)
r(n,"gfR","fS",19)
r(n,"gfT","fU",19)
s(M.d8.prototype,"gU",0,0,null,["$1","$0"],["V","aR"],0,0)
s(n=M.de.prototype,"gU",0,0,null,["$1","$0"],["V","aR"],0,0)
r(n,"gfc","fd",7)
r(n,"gfe","ff",7)
s(n=O.dt.prototype,"gac",0,0,null,["$1","$0"],["F","W"],0,0)
s(n,"gh9",0,0,null,["$1","$0"],["cW","ha"],0,0)
r(n,"gf6","f7",17)
r(n,"gf8","f9",17)
s(O.dz.prototype,"gac",0,0,null,["$1","$0"],["F","W"],0,0)
s(O.dJ.prototype,"gac",0,0,null,["$1","$0"],["F","W"],0,0)
s(n=O.dQ.prototype,"gac",0,0,null,["$1","$0"],["F","W"],0,0)
r(n,"gfm","fn",16)
r(n,"gfo","fp",16)
s(O.aJ.prototype,"gac",0,0,null,["$1","$0"],["F","W"],0,0)
s(X.dC.prototype,"gcv",0,0,null,["$1","$0"],["a_","ej"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.jQ,J.a,J.an,P.ei,P.e,H.dq,P.aU,H.bQ,H.dY,H.ia,P.bs,H.cf,H.ez,P.ah,H.fN,H.fO,H.fI,P.eF,P.ba,P.aA,P.e2,P.hT,P.cC,P.hU,P.b5,P.ak,P.ji,P.jc,P.cL,P.eh,P.v,P.cg,P.jh,P.Y,P.ax,P.a9,P.br,P.hq,P.dN,P.ea,P.fC,P.b,P.D,P.M,P.ap,P.n,P.bC,W.ff,W.B,W.dg,P.eK,P.j7,O.R,O.cq,E.f7,E.al,E.hw,E.dS,Z.e1,Z.bG,Z.bc,Z.bv,Z.av,D.fa,D.bt,D.x,X.d4,X.dm,X.fK,X.fR,X.as,X.he,X.i6,X.dZ,D.bq,D.ac,D.dD,D.dM,V.Z,V.a1,V.fs,V.cp,V.ad,V.a4,V.a_,V.bk,V.bB,V.U,V.H,U.e_,U.e0,M.d8,M.de,M.at,A.d0,A.f1,A.ab,A.aD,A.aE,A.aF,A.fY,A.bY,A.bZ,A.c_,A.hm,A.bp,A.dV,A.ij,F.a3,F.fv,F.be,F.fM,F.bA,F.dI,F.hF,F.hG,F.hH,F.aq,F.iw,F.ix,F.iA,F.iC,F.iD,F.iE,O.bD,O.dv,O.fZ,O.aJ,T.i1,V.eY,V.bf,V.ds,V.hE,V.cB,V.dT,V.cF,V.i5,X.cD,X.bO,X.fF,X.dC,V.hI])
s(J.a,[J.fH,J.dk,J.dl,J.aV,J.co,J.bS,H.ct,W.f,W.eX,W.d1,W.ce,W.aQ,W.aR,W.O,W.e4,W.fj,W.fl,W.e6,W.dd,W.e8,W.fn,W.m,W.eb,W.aT,W.fE,W.ed,W.bu,W.fQ,W.h8,W.ej,W.ek,W.aZ,W.el,W.eo,W.b_,W.es,W.eu,W.b2,W.ev,W.b3,W.eA,W.aG,W.eD,W.i4,W.b6,W.eG,W.i8,W.ip,W.eL,W.eN,W.eP,W.eR,W.eT,P.bd,P.ef,P.bi,P.eq,P.hu,P.eB,P.bl,P.eI,P.f2,P.e3,P.d2,P.dh,P.dE,P.dG,P.bW,P.dH,P.dO,P.dW,P.ex])
s(J.dl,[J.hr,J.cH,J.by])
t(J.jP,J.aV)
s(J.co,[J.dj,J.di])
t(P.fP,P.ei)
s(P.fP,[H.dX,W.iQ,W.iP,P.fy])
t(H.a0,H.dX)
s(P.e,[H.fq,H.fU,H.iI])
s(P.aU,[H.fV,H.iJ])
s(P.bs,[H.hn,H.fJ,H.im,H.ic,H.f9,H.hC,P.f0,P.dB,P.aO,P.io,P.il,P.hP,P.fd,P.fi])
s(H.cf,[H.jD,H.hY,H.ju,H.jv,H.jw,P.iM,P.iL,P.iN,P.iO,P.jg,P.jf,P.iV,P.iZ,P.iW,P.iX,P.iY,P.j1,P.j2,P.j0,P.j_,P.hV,P.hW,P.jo,P.ja,P.j9,P.jb,P.fT,P.fo,P.fp,W.ha,W.hc,W.hB,W.hS,W.iU,P.jq,P.fz,P.fA,P.f4,E.hx,E.hy,E.hz,E.i3,D.ft,D.fu,F.jj,F.jC,F.jr,F.iG,F.iF,F.iy,F.iz,O.h1,O.h2,O.h3,O.h4,O.h5,O.h6,T.i2,V.jA,V.hK,V.hJ])
s(H.hY,[H.hQ,H.cc])
t(H.iK,P.f0)
t(P.fS,P.ah)
t(H.W,P.fS)
t(H.dp,H.fq)
t(H.dw,H.ct)
s(H.dw,[H.cM,H.cO])
t(H.cN,H.cM)
t(H.cs,H.cN)
t(H.cP,H.cO)
t(H.dx,H.cP)
s(H.dx,[H.hf,H.hg,H.hh,H.hi,H.hj,H.dy,H.hk])
t(P.j8,P.ji)
t(P.j6,P.jc)
t(P.d7,P.hU)
t(P.fr,P.cg)
t(P.iq,P.fr)
t(P.ir,P.d7)
s(P.a9,[P.z,P.r])
s(P.aO,[P.bV,P.fG])
s(W.f,[W.G,W.fx,W.b1,W.cQ,W.b4,W.aH,W.cS,W.iH,W.cJ,P.f5,P.bN])
s(W.G,[W.a2,W.bo])
s(W.a2,[W.q,P.p])
s(W.q,[W.eZ,W.f_,W.bP,W.db,W.fB,W.cn,W.hD])
s(W.aQ,[W.ci,W.fg,W.fh])
t(W.fe,W.aR)
t(W.cj,W.e4)
t(W.e7,W.e6)
t(W.dc,W.e7)
t(W.e9,W.e8)
t(W.fm,W.e9)
t(W.aS,W.d1)
t(W.ec,W.eb)
t(W.fw,W.ec)
t(W.ee,W.ed)
t(W.bR,W.ee)
t(W.bE,W.m)
s(W.bE,[W.aW,W.ae,W.aK])
t(W.h9,W.ej)
t(W.hb,W.ek)
t(W.em,W.el)
t(W.hd,W.em)
t(W.ep,W.eo)
t(W.cu,W.ep)
t(W.et,W.es)
t(W.hs,W.et)
t(W.hA,W.eu)
t(W.cR,W.cQ)
t(W.hM,W.cR)
t(W.ew,W.ev)
t(W.hN,W.ew)
t(W.hR,W.eA)
t(W.eE,W.eD)
t(W.hZ,W.eE)
t(W.cT,W.cS)
t(W.i_,W.cT)
t(W.eH,W.eG)
t(W.i7,W.eH)
t(W.b9,W.ae)
t(W.eM,W.eL)
t(W.iR,W.eM)
t(W.e5,W.dd)
t(W.eO,W.eN)
t(W.j3,W.eO)
t(W.eQ,W.eP)
t(W.en,W.eQ)
t(W.eS,W.eR)
t(W.jd,W.eS)
t(W.eU,W.eT)
t(W.je,W.eU)
t(W.iS,P.hT)
t(W.jZ,W.iS)
t(W.iT,P.cC)
t(P.ao,P.j7)
t(P.eg,P.ef)
t(P.fL,P.eg)
t(P.er,P.eq)
t(P.ho,P.er)
t(P.eC,P.eB)
t(P.hX,P.eC)
t(P.eJ,P.eI)
t(P.i9,P.eJ)
t(P.f3,P.e3)
t(P.hp,P.bN)
t(P.ey,P.ex)
t(P.hO,P.ey)
s(E.f7,[Z.d3,A.cA,T.aI])
s(D.x,[D.bw,D.bx,D.A,X.ht])
s(X.ht,[X.dr,X.bz,X.cr,X.dU])
s(O.R,[D.dn,U.cm,M.d5])
s(D.fa,[U.fc,U.af])
t(U.d6,U.af)
s(A.cA,[A.da,A.du,A.dA,A.dK,A.dR])
s(A.dV,[A.aj,A.ig,A.ih,A.ii,A.ie,A.a5,A.au,A.Q,A.bX,A.ik,A.bF,A.X,A.ay,A.a6])
t(F.hL,F.fv)
t(F.id,F.fM)
t(F.iB,F.iC)
t(F.hl,F.iD)
s(O.bD,[O.fk,O.dt,O.dz,O.dJ,O.dQ])
s(O.dv,[O.fW,O.fX,O.aX])
s(O.aX,[O.h_,O.h0])
s(T.aI,[T.dP,T.cE])
t(T.i0,T.dP)
s(V.ds,[V.bh,V.cG])
s(X.cD,[X.f6,X.fD])
u(H.dX,H.dY)
u(H.cM,P.v)
u(H.cN,H.bQ)
u(H.cO,P.v)
u(H.cP,H.bQ)
u(P.ei,P.v)
u(W.e4,W.ff)
u(W.e6,P.v)
u(W.e7,W.B)
u(W.e8,P.v)
u(W.e9,W.B)
u(W.eb,P.v)
u(W.ec,W.B)
u(W.ed,P.v)
u(W.ee,W.B)
u(W.ej,P.ah)
u(W.ek,P.ah)
u(W.el,P.v)
u(W.em,W.B)
u(W.eo,P.v)
u(W.ep,W.B)
u(W.es,P.v)
u(W.et,W.B)
u(W.eu,P.ah)
u(W.cQ,P.v)
u(W.cR,W.B)
u(W.ev,P.v)
u(W.ew,W.B)
u(W.eA,P.ah)
u(W.eD,P.v)
u(W.eE,W.B)
u(W.cS,P.v)
u(W.cT,W.B)
u(W.eG,P.v)
u(W.eH,W.B)
u(W.eL,P.v)
u(W.eM,W.B)
u(W.eN,P.v)
u(W.eO,W.B)
u(W.eP,P.v)
u(W.eQ,W.B)
u(W.eR,P.v)
u(W.eS,W.B)
u(W.eT,P.v)
u(W.eU,W.B)
u(P.ef,P.v)
u(P.eg,W.B)
u(P.eq,P.v)
u(P.er,W.B)
u(P.eB,P.v)
u(P.eC,W.B)
u(P.eI,P.v)
u(P.eJ,W.B)
u(P.e3,P.ah)
u(P.ex,P.v)
u(P.ey,W.B)})()
var v={mangledGlobalNames:{r:"int",z:"double",a9:"num",n:"String",Y:"bool",M:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:P.M},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.M,args:[F.a3]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.r,[P.e,E.al]]},{func:1,ret:-1,args:[P.r,P.r]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.aK]},{func:1,ret:P.M,args:[D.x]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.n,args:[P.r]},{func:1,ret:P.M,args:[,]},{func:1,ret:P.M,args:[W.m]},{func:1,ret:-1,args:[P.r,[P.e,O.aJ]]},{func:1,ret:-1,args:[P.r,[P.e,V.ad]]},{func:1,ret:P.M,args:[F.aq,P.z,P.z]},{func:1,ret:-1,args:[P.r,[P.e,M.at]]},{func:1,ret:-1,args:[P.r,[P.e,U.af]]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.z},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[P.r,[P.e,D.ac]]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,args:[,]},{func:1,ret:-1,args:[W.b9]},{func:1,args:[P.n]},{func:1,ret:P.M,args:[P.a9]},{func:1,ret:P.M,args:[P.b5]},{func:1,args:[,P.n]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:V.a_,args:[P.z]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:W.a2,args:[W.G]},{func:1,ret:P.Y,args:[W.G]},{func:1,ret:P.r,args:[A.aD,A.aD]},{func:1,ret:P.r,args:[A.aE,A.aE]},{func:1,ret:P.r,args:[A.aF,A.aF]},{func:1,args:[W.m]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.Y,args:[[P.e,D.ac]]},{func:1,ret:P.M,args:[,],opt:[P.ap]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.h=W.bP.prototype
C.F=J.a.prototype
C.a=J.aV.prototype
C.G=J.di.prototype
C.d=J.dj.prototype
C.l=J.dk.prototype
C.c=J.co.prototype
C.e=J.bS.prototype
C.H=J.by.prototype
C.J=W.cu.prototype
C.q=J.hr.prototype
C.b=P.bW.prototype
C.m=J.cH.prototype
C.r=W.b9.prototype
C.t=W.cJ.prototype
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

C.A=new P.hq()
C.p=new P.iq()
C.B=new P.ir()
C.f=new P.j8()
C.i=new A.bp(0,"ColorBlendType.Overwrite")
C.C=new A.bp(1,"ColorBlendType.Additive")
C.D=new A.bp(2,"ColorBlendType.Average")
C.j=new A.bp(3,"ColorBlendType.AlphaBlend")
C.k=new P.br(0)
C.E=new P.br(5e6)
C.I=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.r])})();(function staticFields(){$.aP=0
$.cd=null
$.ki=null
$.k0=!1
$.ld=null
$.l6=null
$.lj=null
$.js=null
$.jx=null
$.ka=null
$.c1=null
$.cV=null
$.cW=null
$.k1=!1
$.T=C.f
$.ar=[]
$.ku=null
$.h7=null
$.kD=null
$.cv=null
$.cz=null
$.kU=null
$.kX=null
$.kW=null
$.is=null
$.it=null
$.iu=null
$.kV=null
$.kC=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ny","lp",function(){return H.lc("_$dart_dartClosure")})
u($,"nz","kd",function(){return H.lc("_$dart_js")})
u($,"nC","lq",function(){return H.b7(H.ib({
toString:function(){return"$receiver$"}}))})
u($,"nD","lr",function(){return H.b7(H.ib({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nE","ls",function(){return H.b7(H.ib(null))})
u($,"nF","lt",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nI","lw",function(){return H.b7(H.ib(void 0))})
u($,"nJ","lx",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nH","lv",function(){return H.b7(H.kQ(null))})
u($,"nG","lu",function(){return H.b7(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nL","lz",function(){return H.b7(H.kQ(void 0))})
u($,"nK","ly",function(){return H.b7(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o1","ke",function(){return P.ml()})
u($,"o2","lD",function(){return P.m9("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nV","lC",function(){return Z.az(0)})
u($,"nP","lA",function(){return Z.az(511)})
u($,"nX","ag",function(){return Z.az(1)})
u($,"nW","aM",function(){return Z.az(2)})
u($,"nR","aL",function(){return Z.az(4)})
u($,"nY","bb",function(){return Z.az(8)})
u($,"nZ","aN",function(){return Z.az(16)})
u($,"nS","cZ",function(){return Z.az(32)})
u($,"nT","d_",function(){return Z.az(64)})
u($,"nU","lB",function(){return Z.az(96)})
u($,"o_","c9",function(){return Z.az(128)})
u($,"nQ","bn",function(){return Z.az(256)})
u($,"nx","lo",function(){return new V.fs(1e-9)})
u($,"nw","K",function(){return $.lo()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ct,ArrayBufferView:H.ct,Float32Array:H.cs,Float64Array:H.cs,Int16Array:H.hf,Int32Array:H.hg,Int8Array:H.hh,Uint16Array:H.hi,Uint32Array:H.hj,Uint8ClampedArray:H.dy,CanvasPixelArray:H.dy,Uint8Array:H.hk,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eX,HTMLAnchorElement:W.eZ,HTMLAreaElement:W.f_,Blob:W.d1,HTMLCanvasElement:W.bP,CanvasRenderingContext2D:W.ce,CDATASection:W.bo,CharacterData:W.bo,Comment:W.bo,ProcessingInstruction:W.bo,Text:W.bo,CSSNumericValue:W.ci,CSSUnitValue:W.ci,CSSPerspective:W.fe,CSSCharsetRule:W.O,CSSConditionRule:W.O,CSSFontFaceRule:W.O,CSSGroupingRule:W.O,CSSImportRule:W.O,CSSKeyframeRule:W.O,MozCSSKeyframeRule:W.O,WebKitCSSKeyframeRule:W.O,CSSKeyframesRule:W.O,MozCSSKeyframesRule:W.O,WebKitCSSKeyframesRule:W.O,CSSMediaRule:W.O,CSSNamespaceRule:W.O,CSSPageRule:W.O,CSSRule:W.O,CSSStyleRule:W.O,CSSSupportsRule:W.O,CSSViewportRule:W.O,CSSStyleDeclaration:W.cj,MSStyleCSSProperties:W.cj,CSS2Properties:W.cj,CSSImageValue:W.aQ,CSSKeywordValue:W.aQ,CSSPositionValue:W.aQ,CSSResourceValue:W.aQ,CSSURLImageValue:W.aQ,CSSStyleValue:W.aQ,CSSMatrixComponent:W.aR,CSSRotation:W.aR,CSSScale:W.aR,CSSSkew:W.aR,CSSTranslation:W.aR,CSSTransformComponent:W.aR,CSSTransformValue:W.fg,CSSUnparsedValue:W.fh,DataTransferItemList:W.fj,HTMLDivElement:W.db,DOMException:W.fl,ClientRectList:W.dc,DOMRectList:W.dc,DOMRectReadOnly:W.dd,DOMStringList:W.fm,DOMTokenList:W.fn,Element:W.a2,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aS,FileList:W.fw,FileWriter:W.fx,HTMLFormElement:W.fB,Gamepad:W.aT,History:W.fE,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,ImageData:W.bu,HTMLImageElement:W.cn,KeyboardEvent:W.aW,Location:W.fQ,MediaList:W.h8,MIDIInputMap:W.h9,MIDIOutputMap:W.hb,MimeType:W.aZ,MimeTypeArray:W.hd,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cu,RadioNodeList:W.cu,Plugin:W.b_,PluginArray:W.hs,RTCStatsReport:W.hA,HTMLSelectElement:W.hD,SourceBuffer:W.b1,SourceBufferList:W.hM,SpeechGrammar:W.b2,SpeechGrammarList:W.hN,SpeechRecognitionResult:W.b3,Storage:W.hR,CSSStyleSheet:W.aG,StyleSheet:W.aG,TextTrack:W.b4,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.hZ,TextTrackList:W.i_,TimeRanges:W.i4,Touch:W.b6,TouchEvent:W.aK,TouchList:W.i7,TrackDefaultList:W.i8,CompositionEvent:W.bE,FocusEvent:W.bE,TextEvent:W.bE,UIEvent:W.bE,URL:W.ip,VideoTrackList:W.iH,WheelEvent:W.b9,Window:W.cJ,DOMWindow:W.cJ,CSSRuleList:W.iR,ClientRect:W.e5,DOMRect:W.e5,GamepadList:W.j3,NamedNodeMap:W.en,MozNamedAttrMap:W.en,SpeechRecognitionResultList:W.jd,StyleSheetList:W.je,SVGLength:P.bd,SVGLengthList:P.fL,SVGNumber:P.bi,SVGNumberList:P.ho,SVGPointList:P.hu,SVGStringList:P.hX,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.bl,SVGTransformList:P.i9,AudioBuffer:P.f2,AudioParamMap:P.f3,AudioTrackList:P.f5,AudioContext:P.bN,webkitAudioContext:P.bN,BaseAudioContext:P.bN,OfflineAudioContext:P.hp,WebGLBuffer:P.d2,WebGLFramebuffer:P.dh,WebGLProgram:P.dE,WebGLRenderbuffer:P.dG,WebGL2RenderingContext:P.bW,WebGLShader:P.dH,WebGLTexture:P.dO,WebGLUniformLocation:P.dW,SQLResultSetRowList:P.hO})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dw.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dx.$nativeSuperclassTag="ArrayBufferView"
W.cQ.$nativeSuperclassTag="EventTarget"
W.cR.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.lf,[])
else S.lf([])})})()
//# sourceMappingURL=test.dart.js.map
