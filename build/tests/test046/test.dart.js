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
a[c]=function(){a[c]=function(){H.lX(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iX(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iM:function iM(){},
je:function(){return new P.fX("No element")},
cL:function(a,b,c,d){if(c-b<=32)H.kL(a,b,c,d)
else H.kK(a,b,c,d)},
kL:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.Y()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
kK:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a_(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a_(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.Y()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.Y()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.Y()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.Y()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.Y()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.Y()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.Y()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.Y()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.Y()
if(a1>0){p=q
q=r
r=p}C.a.l(a2,d,u)
C.a.l(a2,b,s)
C.a.l(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.a.l(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.a.l(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.B(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a3()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.Y()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.a3()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.Y()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.Y()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a3()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.a.l(a2,a3,a2[a1])
C.a.l(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.a.l(a2,a4,a2[a1])
C.a.l(a2,a1,r)
H.cL(a2,a3,o-2,a5)
H.cL(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.B(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.B(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a3()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)}n=j
break}}}H.cL(a2,o,n,a5)}else H.cL(a2,o,n,a5)},
K:function K(a){this.a=a},
ev:function ev(){},
cs:function cs(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
f_:function f_(a,b,c){this.a=a
this.b=b
this.$ti=c},
f0:function f0(a,b){this.a=null
this.b=a
this.c=b},
hN:function hN(a,b,c){this.a=a
this.b=b
this.$ti=c},
hO:function hO(a,b){this.a=a
this.b=b},
ci:function ci(){},
hs:function hs(){},
d_:function d_(){},
e0:function(a){var u,t=H.lY(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lH:function(a){return v.types[a]},
lM:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$it},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a0(a)
if(typeof u!=="string")throw H.f(H.aX(a))
return u},
bI:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bJ:function(a){return H.kw(a)+H.jF(H.c3(a),0,null)},
kw:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.A||!!n.$ibP){r=C.k(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.e0(t.length>1&&C.b.aV(t,0)===36?C.b.aC(t,1):t)},
jp:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kF:function(a){var u,t,s,r=H.c([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aX(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aX(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.aX(s))}return H.jp(r)},
jq:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aX(s))
if(s<0)throw H.f(H.aX(s))
if(s>65535)return H.kF(a)}return H.jp(a)},
kE:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aX(u,10))>>>0,56320|u&1023)}throw H.f(P.ag(a,0,1114111,null,null))},
bd:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kD:function(a){var u=H.bd(a).getFullYear()+0
return u},
kB:function(a){var u=H.bd(a).getMonth()+1
return u},
kx:function(a){var u=H.bd(a).getDate()+0
return u},
ky:function(a){var u=H.bd(a).getHours()+0
return u},
kA:function(a){var u=H.bd(a).getMinutes()+0
return u},
kC:function(a){var u=H.bd(a).getSeconds()+0
return u},
kz:function(a){var u=H.bd(a).getMilliseconds()+0
return u},
q:function(a){throw H.f(H.aX(a))},
b:function(a,b){if(a==null)J.bp(a)
throw H.f(H.bl(a,b))},
bl:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aa(!0,b,s,null)
u=J.bp(a)
if(!(b<0)){if(typeof u!=="number")return H.q(u)
t=b>=u}else t=!0
if(t)return P.F(b,a,s,null,u)
return P.cG(b,s)},
lA:function(a,b,c){var u="Invalid value"
if(a>c)return new P.be(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.be(a,c,!0,b,"end",u)
return new P.aa(!0,b,"end",null)},
aX:function(a){return new P.aa(!0,a,null,null)},
lw:function(a){if(typeof a!=="number")throw H.f(H.aX(a))
return a},
f:function(a){var u
if(a==null)a=new P.cD()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jT})
u.name=""}else u.toString=H.jT
return u},
jT:function(){return J.a0(this.dartException)},
p:function(a){throw H.f(a)},
m:function(a){throw H.f(P.bu(a))},
ah:function(a){var u,t,s,r,q,p
a=H.jR(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hg(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hh:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jz:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jk:function(a,b){return new H.fs(a,b==null?null:b.method)},
iN:function(a,b){var u=b==null,t=u?null:b.method
return new H.eP(a,t,u?null:b.receiver)},
iy:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aX(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iN(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jk(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jW()
q=$.jX()
p=$.jY()
o=$.jZ()
n=$.k1()
m=$.k2()
l=$.k0()
$.k_()
k=$.k4()
j=$.k3()
i=r.a4(u)
if(i!=null)return f.$1(H.iN(u,i))
else{i=q.a4(u)
if(i!=null){i.method="call"
return f.$1(H.iN(u,i))}else{i=p.a4(u)
if(i==null){i=o.a4(u)
if(i==null){i=n.a4(u)
if(i==null){i=m.a4(u)
if(i==null){i=l.a4(u)
if(i==null){i=o.a4(u)
if(i==null){i=k.a4(u)
if(i==null){i=j.a4(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jk(u,i))}}return f.$1(new H.hr(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cN()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aa(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cN()
return a},
j_:function(a){var u
if(a==null)return new H.dE(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dE(a)},
lE:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
lL:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.o("Unsupported number of arguments for wrapped closure"))},
bk:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lL)
a.$identity=u
return u},
ki:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.fY().constructor.prototype):Object.create(new H.bq(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ab
if(typeof t!=="number")return t.C()
$.ab=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ja(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ke(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ja(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ke:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lH,a)
if(typeof a=="function")if(b)return a
else{u=c?H.j9:H.iB
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
kf:function(a,b,c,d){var u=H.iB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ja:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kh(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kf(t,!r,u,b)
if(t===0){r=$.ab
if(typeof r!=="number")return r.C()
$.ab=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.br
return new Function(r+H.e(q==null?$.br=H.ec("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ab
if(typeof r!=="number")return r.C()
$.ab=r+1
o+=r
r="return function("+o+"){return this."
q=$.br
return new Function(r+H.e(q==null?$.br=H.ec("self"):q)+"."+H.e(u)+"("+o+");}")()},
kg:function(a,b,c,d){var u=H.iB,t=H.j9
switch(b?-1:a){case 0:throw H.f(H.kI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kh:function(a,b){var u,t,s,r,q,p,o,n=$.br
if(n==null)n=$.br=H.ec("self")
u=$.j8
if(u==null)u=$.j8=H.ec("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kg(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ab
if(typeof u!=="number")return u.C()
$.ab=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ab
if(typeof u!=="number")return u.C()
$.ab=u+1
return new Function(n+u+"}")()},
iX:function(a,b,c,d,e,f,g){return H.ki(a,b,c,d,!!e,!!f,g)},
iB:function(a){return a.a},
j9:function(a){return a.c},
ec:function(a){var u,t,s,r=new H.bq("self","target","receiver","name"),q=J.iK(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
lQ:function(a,b){throw H.f(H.kd(a,H.e0(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.lQ(a,b)},
lC:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kd:function(a,b){return new H.ed("CastError: "+P.iH(a)+": type '"+H.e(H.ls(a))+"' is not a subtype of type '"+b+"'")},
ls:function(a){var u,t=J.R(a)
if(!!t.$ibt){u=H.lC(t)
if(u!=null)return H.lR(u)
return"Closure"}return H.bJ(a)},
lX:function(a){throw H.f(new P.eo(a))},
kI:function(a){return new H.fH(a)},
jL:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
c3:function(a){if(a==null)return
return a.$ti},
mt:function(a,b,c){return H.iw(a["$a"+H.e(c)],H.c3(b))},
lG:function(a,b,c,d){var u=H.iw(a["$a"+H.e(c)],H.c3(b))
return u==null?null:u[d]},
jM:function(a,b,c){var u=H.iw(a["$a"+H.e(b)],H.c3(a))
return u==null?null:u[c]},
e_:function(a,b){var u=H.c3(a)
return u==null?null:u[b]},
lR:function(a){return H.aW(a,null)},
aW:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.e0(a[0].name)+H.jF(a,1,b)
if(typeof a=="function")return H.e0(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.l0(a,b)
if('futureOr' in a)return"FutureOr<"+H.aW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l0:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.b.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.V)p+=" extends "+H.aW(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aW(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aW(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aW(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lD(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aW(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jF:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aN("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aW(p,c)}return"<"+u.h(0)+">"},
iw:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mr:function(a,b,c){return a.apply(b,H.iw(J.R(b)["$a"+H.e(c)],H.c3(b)))},
ms:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lN:function(a){var u,t,s,r,q=$.jN.$1(a),p=$.ik[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iq[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jI.$2(a,q)
if(q!=null){p=$.ik[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iq[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.is(u)
$.ik[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iq[q]=u
return u}if(s==="-"){r=H.is(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jP(a,u)
if(s==="*")throw H.f(P.jA(q))
if(v.leafTags[q]===true){r=H.is(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jP(a,u)},
jP:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.j1(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
is:function(a){return J.j1(a,!1,null,!!a.$it)},
lO:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.is(u)
else return J.j1(u,c,null,null)},
lJ:function(){if(!0===$.j0)return
$.j0=!0
H.lK()},
lK:function(){var u,t,s,r,q,p,o,n
$.ik=Object.create(null)
$.iq=Object.create(null)
H.lI()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jQ.$1(q)
if(p!=null){o=H.lO(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lI:function(){var u,t,s,r,q,p,o=C.q()
o=H.bj(C.r,H.bj(C.t,H.bj(C.l,H.bj(C.l,H.bj(C.u,H.bj(C.v,H.bj(C.w(C.k),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jN=new H.im(r)
$.jI=new H.io(q)
$.jQ=new H.ip(p)},
bj:function(a,b){return a(b)||b},
ko:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eH("Illegal RegExp pattern ("+String(p)+")",a))},
lU:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lB:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jR:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jS:function(a,b,c){var u=H.lV(a,b,c)
return u},
lV:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jR(b),'g'),H.lB(c))},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fs:function fs(a,b){this.a=a
this.b=b},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){this.a=a},
iz:function iz(a){this.a=a},
dE:function dE(a){this.a=a
this.b=null},
bt:function bt(){},
h3:function h3(){},
fY:function fY(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ed:function ed(a){this.a=a},
fH:function fH(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eT:function eT(a,b){this.a=a
this.b=b
this.c=null},
cr:function cr(a,b){this.a=a
this.$ti=b},
eU:function eU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
eO:function eO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c0:function(a){return a},
aV:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bl(b,a))},
l_:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lA(a,b,c))
return b},
bF:function bF(){},
cz:function cz(){},
bE:function bE(){},
cA:function cA(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
cB:function cB(){},
fq:function fq(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
lD:function(a){return J.jf(a?Object.keys(a):[],null)},
lY:function(a){return v.mangledGlobalNames[a]},
lP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
j1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
il:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.j0==null){H.lJ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jA("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.j4()]
if(r!=null)return r
r=H.lN(a)
if(r!=null)return r
if(typeof a=="function")return C.C
u=Object.getPrototypeOf(a)
if(u==null)return C.n
if(u===Object.prototype)return C.n
if(typeof s=="function"){Object.defineProperty(s,$.j4(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
kn:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.j7(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ag(a,0,4294967295,"length",null))
return J.jf(new Array(a),b)},
jf:function(a,b){return J.iK(H.c(a,[b]))},
iK:function(a){a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cm.prototype
return J.cl.prototype}if(typeof a=="string")return J.b7.prototype
if(a==null)return J.cn.prototype
if(typeof a=="boolean")return J.eN.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.V)return a
return J.il(a)},
iY:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.V)return a
return J.il(a)},
iZ:function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.V)return a
return J.il(a)},
lF:function(a){if(typeof a=="number")return J.bA.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.bP.prototype
return a},
jK:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.V)return a
return J.il(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).n(a,b)},
e1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lM(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iY(a).i(a,b)},
k9:function(a,b,c,d){return J.jK(a).f0(a,b,c,d)},
iA:function(a,b){return J.lF(a).fa(a,b)},
j6:function(a,b){return J.iZ(a).D(a,b)},
ka:function(a,b){return J.iZ(a).I(a,b)},
kb:function(a){return J.jK(a).gbB(a)},
b0:function(a){return J.R(a).gF(a)},
bo:function(a){return J.iZ(a).gO(a)},
bp:function(a){return J.iY(a).gj(a)},
a0:function(a){return J.R(a).h(a)},
a:function a(){},
eN:function eN(){},
cn:function cn(){},
co:function co(){},
fw:function fw(){},
bP:function bP(){},
aG:function aG(){},
aF:function aF(a){this.$ti=a},
iL:function iL(a){this.$ti=a},
T:function T(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bA:function bA(){},
cm:function cm(){},
cl:function cl(){},
b7:function b7(){}},P={
kR:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lt()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bk(new P.hQ(s),1)).observe(u,{childList:true})
return new P.hP(s,u,t)}else if(self.setImmediate!=null)return P.lu()
return P.lv()},
kS:function(a){self.scheduleImmediate(H.bk(new P.hR(a),0))},
kT:function(a){self.setImmediate(H.bk(new P.hS(a),0))},
kU:function(a){P.iQ(C.h,a)},
iQ:function(a,b){var u=C.d.a_(a.a,1000)
return P.kX(u<0?0:u,b)},
jy:function(a,b){var u=C.d.a_(a.a,1000)
return P.kY(u<0?0:u,b)},
kX:function(a,b){var u=new P.dK()
u.dn(a,b)
return u},
kY:function(a,b){var u=new P.dK()
u.dq(a,b)
return u},
lm:function(){var u,t
for(;u=$.bi,u!=null;){$.c2=null
t=u.b
$.bi=t
if(t==null)$.c1=null
u.a.$0()}},
lr:function(){$.iV=!0
try{P.lm()}finally{$.c2=null
$.iV=!1
if($.bi!=null)$.j5().$1(P.jJ())}},
lp:function(a){var u=new P.d6(a)
if($.bi==null){$.bi=$.c1=u
if(!$.iV)$.j5().$1(P.jJ())}else $.c1=$.c1.b=u},
lq:function(a){var u,t,s=$.bi
if(s==null){P.lp(a)
$.c2=$.c1
return}u=new P.d6(a)
t=$.c2
if(t==null){u.b=s
$.bi=$.c2=u}else{u.b=t.b
$.c2=t.b=u
if(u.b==null)$.c1=u}},
jx:function(a,b){var u=$.a8
if(u===C.e)return P.iQ(a,b)
return P.iQ(a,u.f7(b))},
kO:function(a,b){var u=$.a8
if(u===C.e)return P.jy(a,b)
return P.jy(a,u.cF(b,P.cT))},
jG:function(a,b,c,d,e){var u={}
u.a=d
P.lq(new P.ii(u,e))},
ln:function(a,b,c,d){var u,t=$.a8
if(t===c)return d.$0()
$.a8=c
u=t
try{t=d.$0()
return t}finally{$.a8=u}},
lo:function(a,b,c,d,e){var u,t=$.a8
if(t===c)return d.$1(e)
$.a8=c
u=t
try{t=d.$1(e)
return t}finally{$.a8=u}},
hQ:function hQ(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
dK:function dK(){this.c=0},
ia:function ia(a,b){this.a=a
this.b=b},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d6:function d6(a){this.a=a
this.b=null},
cP:function cP(){},
h0:function h0(){},
cT:function cT(){},
ic:function ic(){},
ii:function ii(a,b){this.a=a
this.b=b},
i3:function i3(){},
i4:function i4(a,b){this.a=a
this.b=b},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function(a,b){return new H.I([a,b])},
kr:function(a){return H.lE(a,new H.I([null,null]))},
ks:function(a){return new P.i0([a])},
iU:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kW:function(a,b){var u=new P.dl(a,b)
u.c=a.e
return u},
km:function(a,b,c){var u,t
if(P.iW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.r])
$.X.push(a)
try{P.l1(a,u)}finally{if(0>=$.X.length)return H.b($.X,-1)
$.X.pop()}t=P.jv(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iJ:function(a,b,c){var u,t
if(P.iW(a))return b+"..."+c
u=new P.aN(b)
$.X.push(a)
try{t=u
t.a=P.jv(t.a,a,", ")}finally{if(0>=$.X.length)return H.b($.X,-1)
$.X.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iW:function(a){var u,t
for(u=$.X.length,t=0;t<u;++t)if(a===$.X[t])return!0
return!1},
l1:function(a,b){var u,t,s,r,q,p,o,n=a.gO(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.e(n.gH(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gH(n);++l
if(!n.v()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gH(n);++l
for(;n.v();r=q,q=p){p=n.gH(n);++l
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
jh:function(a){var u,t={}
if(P.iW(a))return"{...}"
u=new P.aN("")
try{$.X.push(a)
u.a+="{"
t.a=!0
J.ka(a,new P.eZ(t,u))
u.a+="}"}finally{if(0>=$.X.length)return H.b($.X,-1)
$.X.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
i0:function i0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i1:function i1(a){this.a=a
this.c=this.b=null},
dl:function dl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eV:function eV(){},
n:function n(){},
eY:function eY(){},
eZ:function eZ(a,b){this.a=a
this.b=b},
al:function al(){},
i6:function i6(){},
dm:function dm(){},
ef:function ef(){},
ej:function ej(){},
ew:function ew(){},
hv:function hv(){},
hw:function hw(){},
ib:function ib(a){this.b=0
this.c=a},
kl:function(a){if(a instanceof H.bt)return a.h(0)
return"Instance of '"+H.e(H.bJ(a))+"'"},
kt:function(a,b,c){var u,t,s=J.kn(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jg:function(a,b,c){var u,t=H.c([],[c])
for(u=J.bo(a);u.v();)t.push(u.gH(u))
if(b)return t
return J.iK(t)},
iP:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.js(0,null,u)
return H.jq(t<u?C.a.dc(a,0,t):a)}return P.kM(a,0,null)},
kM:function(a,b,c){var u,t,s=J.bo(a)
for(u=0;u<b;++u)if(!s.v())throw H.f(P.ag(b,0,u,null,null))
t=[]
for(;s.v();)t.push(s.gH(s))
return H.jq(t)},
kG:function(a){return new H.eO(a,H.ko(a,!1,!0,!1,!1,!1))},
jv:function(a,b,c){var u=J.bo(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gH(u))
while(u.v())}else{a+=H.e(u.gH(u))
for(;u.v();)a=a+c+H.e(u.gH(u))}return a},
kZ:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.m){u=$.k8().b
u=u.test(b)}else u=!1
if(u)return b
t=C.y.fb(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kE(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kj:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kk:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cd:function(a){if(a>=10)return""+a
return"0"+a},
jc:function(a){return new P.ay(1000*a)},
iH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a0(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kl(a)},
kc:function(a){return new P.aa(!1,null,null,a)},
j7:function(a,b,c){return new P.aa(!0,a,b,c)},
cG:function(a,b){return new P.be(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.be(b,c,!0,a,d,"Invalid value")},
js:function(a,b,c){if(0>a||a>c)throw H.f(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.ag(b,a,c,"end",null))
return b}return c},
jr:function(a,b){if(typeof a!=="number")return a.a3()
if(a<0)throw H.f(P.ag(a,0,null,b,null))},
F:function(a,b,c,d,e){var u=e==null?J.bp(b):e
return new P.eL(u,!0,a,c,"Index out of range")},
W:function(a){return new P.ht(a)},
jA:function(a){return new P.hq(a)},
bu:function(a){return new P.ei(a)},
o:function(a){return new P.de(a)},
j3:function(a){H.lP(a)},
aY:function aY(){},
a2:function a2(a,b){this.a=a
this.b=b},
H:function H(){},
ay:function ay(a){this.a=a},
et:function et(){},
eu:function eu(){},
b4:function b4(){},
cD:function cD(){},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
be:function be(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eL:function eL(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ht:function ht(a){this.a=a},
hq:function hq(a){this.a=a},
fX:function fX(a){this.a=a},
ei:function ei(a){this.a=a},
fv:function fv(){},
cN:function cN(){},
eo:function eo(a){this.a=a},
de:function de(a){this.a=a},
eH:function eH(a,b){this.a=a
this.b=b},
w:function w(){},
i:function i(){},
eM:function eM(){},
ba:function ba(){},
cu:function cu(){},
aI:function aI(){},
a6:function a6(){},
V:function V(){},
r:function r(){},
aN:function aN(a){this.a=a},
lz:function(a){var u,t=J.R(a)
if(!!t.$iaC){u=t.gcL(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.dP(a.data,a.height,a.width)},
ly:function(a){if(a instanceof P.dP)return{data:a.a,height:a.b,width:a.c}
return a},
at:function(a){var u,t,s,r,q
if(a==null)return
u=P.kq(P.r,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
lx:function(a){var u={}
a.I(0,new P.ij(u))
return u},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a){this.a=a},
eD:function eD(a,b){this.a=a
this.b=b},
eE:function eE(){},
eF:function eF(){},
i_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kV:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
i2:function i2(){},
a4:function a4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
eR:function eR(){},
bc:function bc(){},
ft:function ft(){},
fA:function fA(){},
h1:function h1(){},
j:function j(){},
bg:function bg(){},
hf:function hf(){},
dj:function dj(){},
dk:function dk(){},
dv:function dv(){},
dw:function dw(){},
dG:function dG(){},
dH:function dH(){},
dN:function dN(){},
dO:function dO(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(a){this.a=a},
ea:function ea(){},
b1:function b1(){},
fu:function fu(){},
d7:function d7(){},
cI:function cI(){},
fW:function fW(){},
dC:function dC(){},
dD:function dD(){}},W={
iD:function(){var u=document.createElement("canvas")
return u},
iG:function(a){return"wheel"},
hZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jE:function(a,b,c,d){var u=W.hZ(W.hZ(W.hZ(W.hZ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
M:function(a,b,c,d){var u=W.jH(new W.hX(c),W.h)
if(u!=null&&!0)J.k9(a,b,u,!1)
return new W.hW(a,b,u,!1)},
jH:function(a,b){var u=$.a8
if(u===C.e)return a
return u.cF(a,b)},
k:function k(){},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
c7:function c7(){},
b2:function b2(){},
ax:function ax(){},
ek:function ek(){},
D:function D(){},
bv:function bv(){},
el:function el(){},
a1:function a1(){},
ac:function ac(){},
em:function em(){},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
cf:function cf(){},
cg:function cg(){},
er:function er(){},
es:function es(){},
hU:function hU(a,b){this.a=a
this.b=b},
U:function U(){},
h:function h(){},
d:function d(){},
aA:function aA(){},
eB:function eB(){},
eC:function eC(){},
eG:function eG(){},
aB:function aB(){},
eJ:function eJ(){},
by:function by(){},
aC:function aC(){},
bz:function bz(){},
b8:function b8(){},
eW:function eW(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(a){this.a=a},
fh:function fh(){},
fi:function fi(a){this.a=a},
aH:function aH(){},
fj:function fj(){},
af:function af(){},
hT:function hT(a){this.a=a},
G:function G(){},
cC:function cC(){},
aJ:function aJ(){},
fx:function fx(){},
fF:function fF(){},
fG:function fG(a){this.a=a},
fI:function fI(){},
aK:function aK(){},
fT:function fT(){},
aL:function aL(){},
fU:function fU(){},
aM:function aM(){},
fZ:function fZ(){},
h_:function h_(a){this.a=a},
ar:function ar(){},
aO:function aO(){},
as:function as(){},
h4:function h4(){},
h5:function h5(){},
ha:function ha(){},
aP:function aP(){},
bf:function bf(){},
hd:function hd(){},
he:function he(){},
aQ:function aQ(){},
hu:function hu(){},
hM:function hM(){},
aU:function aU(){},
bR:function bR(){},
hV:function hV(){},
d9:function d9(){},
hY:function hY(){},
ds:function ds(){},
i7:function i7(){},
i8:function i8(){},
hW:function hW(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hX:function hX(a){this.a=a},
E:function E(){},
cj:function cj(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
d8:function d8(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
dt:function dt(){},
du:function du(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
bW:function bW(){},
bX:function bX(){},
dA:function dA(){},
dB:function dB(){},
dF:function dF(){},
dI:function dI(){},
dJ:function dJ(){},
bY:function bY(){},
bZ:function bZ(){},
dL:function dL(){},
dM:function dM(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){}},T={
Q:function(a){var u=new T.fJ()
u.dj(a)
return u},
e3:function e3(){},
ck:function ck(){},
cv:function cv(){},
ao:function ao(){this.a=null},
fJ:function fJ(){this.a=null},
cR:function cR(){},
h6:function h6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h7:function h7(a){var _=this
_.a=a
_.e=_.d=_.c=null},
h8:function h8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={cO:function cO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},cV:function cV(a){this.b=a
this.c=null},hb:function hb(){this.c=this.b=this.a=null},cX:function cX(a){this.b=a
this.a=this.c=null}},O={
iE:function(a){var u=new O.ai([a])
u.aU(a)
return u},
ai:function ai(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bC:function bC(){this.b=this.a=null},
cw:function cw(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f8:function f8(a,b){this.a=a
this.b=b},
f9:function f9(){},
fa:function fa(a,b){this.a=a
this.b=b},
fb:function fb(){},
fc:function fc(a,b){this.a=a
this.b=b},
fd:function fd(){},
f2:function f2(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cx:function cx(){},
f3:function f3(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ad:function ad(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f5:function f5(){var _=this
_.e=_.d=_.c=_.b=null},
f6:function f6(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f7:function f7(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cK:function cK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cQ:function cQ(){},
jO:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7=34067,a8="modifiers",a9=V.kJ("Test 046"),b0=W.iD()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0)
u=[P.r]
a9.f_(H.c(["buttons"],u))
a9.cD(H.c(["Test of the fullscreen function of the ThreeDart."],u))
a9.cD(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a5)
if(t==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.kN(t,!0,!0,!0,!1)
r=X.iI(a6)
r.scI(0,!1)
q=E.jd()
q.sb5(0,F.lT())
a9=s.f
p=a9.a
o=p.createTexture()
p.bindTexture(a7,o)
p.texParameteri(a7,10242,10497)
p.texParameteri(a7,10243,10497)
p.texParameteri(a7,10241,9729)
p.texParameteri(a7,10240,9729)
p.bindTexture(a7,a6)
n=new T.h6()
n.a=0
n.b=o
n.c=!1
n.d=0
a9.av(n,o,"../resources/maskonaive/posx.jpg",34069,!1,!1)
a9.av(n,o,"../resources/maskonaive/negx.jpg",34070,!1,!1)
a9.av(n,o,"../resources/maskonaive/posy.jpg",34071,!1,!1)
a9.av(n,o,"../resources/maskonaive/negy.jpg",34072,!1,!1)
a9.av(n,o,"../resources/maskonaive/posz.jpg",34073,!1,!1)
a9.av(n,o,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=new O.cw()
a9=O.iE(V.am)
m.e=a9
a9.aA(m.gdT(),m.gdV())
a9=new O.ad(m,"emission")
a9.c=new A.O(!1,!1,!1)
a9.f=new V.J(0,0,0)
m.f=a9
a9=new O.ad(m,"ambient")
a9.c=new A.O(!1,!1,!1)
a9.f=new V.J(0,0,0)
m.r=a9
a9=new O.ad(m,"diffuse")
a9.c=new A.O(!1,!1,!1)
a9.f=new V.J(0,0,0)
m.x=a9
a9=new O.ad(m,"invDiffuse")
a9.c=new A.O(!1,!1,!1)
a9.f=new V.J(0,0,0)
m.y=a9
a9=new O.f7(m,"specular")
a9.c=new A.O(!1,!1,!1)
a9.f=new V.J(0,0,0)
a9.ch=100
m.z=a9
a9=new O.f3(m,"bump")
a9.c=new A.O(!1,!1,!1)
m.Q=a9
m.ch=null
a9=new O.ad(m,"reflect")
a9.c=new A.O(!1,!1,!1)
a9.f=new V.J(0,0,0)
m.cx=a9
a9=new O.f6(m,"refract")
a9.c=new A.O(!1,!1,!1)
a9.f=new V.J(0,0,0)
a9.ch=1
m.cy=a9
a9=new O.f2(m,"alpha")
a9.c=new A.O(!1,!1,!1)
a9.f=1
m.db=a9
a9=new D.cq()
a9.aU(D.Y)
a9.e=H.c([],[D.b3])
a9.f=H.c([],[D.fy])
a9.r=H.c([],[D.fV])
a9.y=a9.x=null
a9.c4(a9.gdR(),a9.geq(),a9.gev())
m.dx=a9
p=new O.f5()
p.b=new V.aj(0,0,0,0)
p.c=1
p.d=10
p.e=!1
m.dy=p
p=a9.x
a9=p==null?a9.x=D.y():p
a9.k(0,m.geL())
a9=m.dx
p=a9.y
a9=p==null?a9.y=D.y():p
p=m.gbn()
a9.k(0,p)
m.fr=null
a9=m.dx
l=V.iS()
k=U.jb(V.ji(V.jo(),l,new V.v(-1,-1,-1)))
j=new V.J(1,1,1)
i=new D.b3()
i.c=new V.J(1,1,1)
i.a=V.kQ()
i.d=V.iS()
i.e=V.kP()
h=i.b
i.b=k
k.gm().k(0,i.gdl())
k=new D.u("mover",h,i.b)
k.b=!0
i.af(k)
if(!i.c.n(0,j)){h=i.c
i.c=j
k=new D.u("color",h,j)
k.b=!0
i.af(k)}a9.k(0,i)
a9=m.r
a9.sak(0,new V.J(0.1,0.1,0.1))
a9=m.x
a9.sak(0,new V.J(0.1,0.1,0.1))
a9=m.z
a9.sak(0,new V.J(1,1,1))
a9=m.z
a9.bs(new A.O(!0,!1,!1))
a9.cz(10)
a9=m.ch
if(a9!==n){if(a9!=null)a9.gm().E(0,p)
h=m.ch
m.ch=n
n.gm().k(0,p)
a9=new D.u("environment",h,m.ch)
a9.b=!0
m.U(a9)}a9=m.cy
a9.bs(new A.O(!0,!1,!1))
a9.cw(0.6)
a9=m.cy
a9.sak(0,new V.J(1,1,1))
a9=m.cx
a9.sak(0,new V.J(0.6,0.6,0.6))
g=new U.bx()
g.aU(U.Z)
g.aA(g.gdP(),g.ges())
g.e=null
g.f=V.bb()
g.r=0
a9=s.x
p=new U.d2()
k=U.iF()
k.sc2(0,!0)
k.sbR(6.283185307179586)
k.sbU(0)
k.sW(0,0)
k.sbS(100)
k.sN(0)
k.sbE(0.5)
p.b=k
i=p.gat()
k.gm().k(0,i)
k=U.iF()
k.sc2(0,!0)
k.sbR(6.283185307179586)
k.sbU(0)
k.sW(0,0)
k.sbS(100)
k.sN(0)
k.sbE(0.5)
p.c=k
k.gm().k(0,i)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
f=new X.a3(!1,!1,!1)
h=p.d
p.d=f
k=new D.u(a8,h,f)
k.b=!0
p.L(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.u("invertX",k,!1)
k.b=!0
p.L(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.u("invertY",k,!1)
k.b=!0
p.L(k)}p.aG(a9)
g.k(0,p)
a9=s.x
p=new U.d1()
k=U.iF()
k.sc2(0,!0)
k.sbR(6.283185307179586)
k.sbU(0)
k.sW(0,0)
k.sbS(100)
k.sN(0)
k.sbE(0.2)
p.b=k
k.gm().k(0,p.gat())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
f=new X.a3(!0,!1,!1)
h=p.c
p.c=f
k=new D.u(a8,h,f)
k.b=!0
p.L(k)
p.aG(a9)
g.k(0,p)
a9=s.x
p=new U.d3()
p.c=0.01
p.e=p.d=0
f=new X.a3(!1,!1,!1)
p.b=f
k=new D.u(a8,a6,f)
k.b=!0
p.L(k)
p.aG(a9)
g.k(0,p)
g.k(0,U.jb(V.ae(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=X.jl(g)
d=new M.cc()
d.a=!0
a9=E.jd()
c=F.iO()
p=c.a
k=new V.v(-1,-1,1)
k=k.p(0,Math.sqrt(k.A(k)))
b=p.aZ(new V.aq(1,2,4,6),V.eg(255,0,0),new V.P(-1,-1,0),new V.S(0,1),k,a6)
k=c.a
p=new V.v(1,-1,1)
p=p.p(0,Math.sqrt(p.A(p)))
a=k.aZ(new V.aq(0,3,4,6),V.eg(0,0,255),new V.P(1,-1,0),new V.S(1,1),p,a6)
p=c.a
k=new V.v(1,1,1)
k=k.p(0,Math.sqrt(k.A(k)))
a0=p.aZ(new V.aq(0,2,5,6),V.eg(0,128,0),new V.P(1,1,0),new V.S(1,0),k,a6)
k=c.a
p=V.ap()
i=new V.v(-1,1,1)
i=i.p(0,Math.sqrt(i.A(i)))
a1=k.aZ(new V.aq(0,2,4,7),V.eg(255,255,0),new V.P(-1,1,0),p,i,a6)
c.d.f1(H.c([b,a,a0,a1],[F.aS]))
c.aj()
a9.sb5(0,c)
d.e=a9
d.saH(a6)
d.saR(0,a6)
d.saS(a6)
a9=new O.cK()
a9.b=1.0471975511965976
a9.d=new V.J(1,1,1)
h=a9.c
a9.c=n
n.gm().k(0,a9.gbn())
p=new D.u("boxTexture",h,a9.c)
p.b=!0
a9.U(p)
d.saS(a9)
d.saR(0,r)
d.saH(e)
a2=new M.ch()
a2.a=!0
a9=O.iE(E.ak)
a2.e=a9
a9.aA(a2.gdZ(),a2.ge0())
a2.y=a2.x=a2.r=a2.f=null
a3=X.iI(a6)
a2.saH(a6)
a2.saR(0,a3)
a2.saS(a6)
a2.saH(e)
a2.saS(m)
a2.saR(0,r)
a2.e.k(0,q)
a2.c.scI(0,!1)
a9=M.a7
p=H.c([d,a2],[a9])
k=new M.ca()
k.aU(a9)
k.e=!0
k.f=!1
k.r=null
k.aA(k.gex(),k.gez())
k.bx(0,p)
a9=s.d
if(a9!==k){if(a9!=null)a9.gm().E(0,s.gcd())
s.d=k
k.gm().k(0,s.gcd())
s.ce()}t=u.getElementById("buttons")
a4=u.createElement("button")
a4.textContent="Fullscreen"
W.M(a4,"click",new O.ir(s),!1)
J.kb(t).k(0,a4)
V.lS(s)},
ir:function ir(a){this.a=a}},E={
jd:function(){var u,t=new E.ak()
t.a=""
t.b=!0
u=O.iE(E.ak)
t.y=u
u.aA(t.gfz(),t.gfC())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sb5(0,null)
return t},
kH:function(a,b){var u=new E.fB(a)
u.di(a,b)
return u},
kN:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ib2)return E.jw(a,!0,!0,!0,!1)
u=W.iD()
t=u.style
t.width="100%"
t.height="100%"
s.gbB(a).k(0,u)
return E.jw(u,!0,!0,!0,!1)},
jw:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cS(),p=C.f.c3(a,"webgl2",P.kr(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kH(p,a)
u=new T.h7(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.d0(a)
t=new X.eQ()
t.c=new X.a3(!1,!1,!1)
t.d=P.ks(P.w)
u.b=t
t=new X.fk(u)
t.f=0
t.r=V.ap()
t.x=V.ap()
t.ch=t.Q=1
u.c=t
t=new X.eX(u)
t.r=0
t.x=V.ap()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hc(u)
t.f=V.ap()
t.r=V.ap()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.cP,P.V]])
u.z=t
s=document
t.push(W.M(s,"contextmenu",u.ge2(),!1))
u.z.push(W.M(a,"focus",u.ge8(),!1))
u.z.push(W.M(a,"blur",u.gdX(),!1))
u.z.push(W.M(s,"keyup",u.gec(),!1))
u.z.push(W.M(s,"keydown",u.gea(),!1))
u.z.push(W.M(a,"mousedown",u.geg(),!1))
u.z.push(W.M(a,"mouseup",u.gek(),!1))
u.z.push(W.M(a,r,u.gei(),!1))
t=u.z
W.iG(a)
W.iG(a)
t.push(W.M(a,W.iG(a),u.gem(),!1))
u.z.push(W.M(s,r,u.ge4(),!1))
u.z.push(W.M(s,"mouseup",u.ge6(),!1))
u.z.push(W.M(s,"pointerlockchange",u.geo(),!1))
u.z.push(W.M(a,"touchstart",u.geF(),!1))
u.z.push(W.M(a,"touchend",u.geB(),!1))
u.z.push(W.M(a,"touchmove",u.geD(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a2(Date.now(),!1)
q.db=0
q.cu()
return q},
eb:function eb(){},
ak:function ak(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fB:function fB(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fC:function fC(a){this.a=a},
fD:function fD(a){this.a=a},
fE:function fE(a){this.a=a},
cS:function cS(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
h9:function h9(a){this.a=a}},Z={
iT:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c0(c)),35044)
a.bindBuffer(b,null)
return new Z.d4(b,u)},
a5:function(a){return new Z.aT(a)},
d4:function d4(a,b){this.a=a
this.b=b},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
d5:function d5(a){this.a=a},
bs:function bs(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
aT:function aT(a){this.a=a}},D={
y:function(){var u=new D.b5()
u.d=0
return u},
ee:function ee(){},
b5:function b5(){var _=this
_.d=_.c=_.b=_.a=null},
ey:function ey(a){this.a=a},
ez:function ez(a){this.a=a},
N:function N(){this.b=null},
aD:function aD(){this.b=null},
aE:function aE(){this.b=null},
u:function u(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
b3:function b3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
Y:function Y(){},
cq:function cq(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fy:function fy(){},
fV:function fV(){}},X={c9:function c9(a,b){this.a=a
this.b=b},cp:function cp(a,b){this.a=a
this.b=b},eQ:function eQ(){var _=this
_.d=_.c=_.b=_.a=null},ct:function ct(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eX:function eX(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},an:function an(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fk:function fk(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bD:function bD(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fz:function fz(){},cW:function cW(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hc:function hc(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},d0:function d0(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iI:function(a){var u=new X.eI(),t=new V.aj(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ju
if(t==null){t=V.jt(0,0,1,1)
$.ju=t}u.r=t
return u},
jl:function(a){var u,t,s=new X.cE()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().k(0,s.gdr())
t=new D.u("mover",u,s.b)
t.b=!0
s.aa(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.x().a)){s.c=1.0471975511965976
t=new D.u("fov",t,1.0471975511965976)
t.b=!0
s.aa(t)}t=s.d
if(!(Math.abs(t-0.1)<$.x().a)){s.d=0.1
t=new D.u("near",t,0.1)
t.b=!0
s.aa(t)}t=s.e
if(!(Math.abs(t-2000)<$.x().a)){s.e=2000
t=new D.u("far",t,2000)
t.b=!0
s.aa(t)}return s},
iC:function iC(){},
eI:function eI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eK:function eK(){this.b=this.a=null},
cE:function cE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(){}},V={
eg:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.aj(u,t,s,1)},
lZ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.d8(a-b,u)
return(a<0?a+u:a)+b},
A:function(a,b,c){if(a==null)return C.b.a5("null",c)
return C.b.a5(C.c.d6(Math.abs(a-0)<$.x().a?0:a,b),c+b+1)},
bm:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.r])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.A(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.b.a5(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
j2:function(a){return C.c.fW(Math.pow(2,C.B.bL(Math.log(H.lw(a))/Math.log(2))))},
bb:function(){var u=$.jj
return u==null?$.jj=V.ae(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ae:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ji:function(a,b,c){var u=c.p(0,Math.sqrt(c.A(c))),t=b.aJ(u),s=t.p(0,Math.sqrt(t.A(t))),r=u.aJ(s),q=new V.v(a.a,a.b,a.c),p=s.M(0).A(q),o=r.M(0).A(q),n=u.M(0).A(q)
return V.ae(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
ap:function(){var u=$.jn
return u==null?$.jn=new V.S(0,0):u},
jo:function(){var u=$.bH
return u==null?$.bH=new V.P(0,0,0):u},
jt:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cH(a,b,c,d)},
bQ:function(){var u=$.jD
return u==null?$.jD=new V.v(0,0,0):u},
kP:function(){var u=$.hx
return u==null?$.hx=new V.v(-1,0,0):u},
iS:function(){var u=$.hy
return u==null?$.hy=new V.v(0,1,0):u},
kQ:function(){var u=$.hz
return u==null?$.hz=new V.v(0,0,1):u},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ex:function ex(a){this.a=a},
cy:function cy(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
am:function am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
S:function S(a,b){this.a=a
this.b=b},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z:function z(a,b){this.a=a
this.b=b},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
lS:function(a){P.kO(C.z,new V.it(a))},
kJ:function(a){var u=new V.fO()
u.dk(a,!0)
return u},
it:function it(a){this.a=a},
fO:function fO(){this.b=this.a=null},
fQ:function fQ(a){this.a=a},
fP:function fP(a){this.a=a}},U={
iF:function(){var u=new U.eh()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jb:function(a){var u=new U.cb()
u.a=a
return u},
eh:function eh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cb:function cb(){this.b=this.a=null},
bx:function bx(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
Z:function Z(){},
d1:function d1(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d2:function d2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={ca:function ca(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cc:function cc(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ch:function ch(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},a7:function a7(){}},A={
ku:function(a,b){var u=a.aM,t=new A.f1(b,u)
t.cb(b,u)
t.dh(a,b)
return t},
kv:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.ga9(a0)+a1.ga9(a1)+a2.ga9(a2)+a3.ga9(a3)+a4.ga9(a4)+a5.ga9(a5)+a6.ga9(a6)+a7.ga9(a7)+a8.ga9(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.m)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.m)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.m)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
for(u=b0.length,t=0;t<u;++t,r=!0)s+=b0[t].b
for(q=b1.length,t=0;t<q;++t,r=!0)s+=b1[t].b
if(!a6.a)q=!1
else q=!0
if(!q)if(!a7.a)p=!1
else p=!0
else p=!0
if(!a1.a)q=!1
else q=!0
if(!q){if(!a2.a)q=!1
else q=!0
if(!q){if(!a3.a)q=!1
else q=!0
if(!q)if(!a4.a)q=!1
else q=!0
else q=!0
o=q}else o=!0}else o=!0
q=!a4.a
if(q)n=!1
else n=!0
m=n||u>0||p
if(!a2.a)u=!1
else u=!0
if(!u){if(!a3.a)u=!1
else u=!0
if(!u){if(q)u=!1
else u=!0
l=u}else l=!0}else l=!0
if(!l){if(!a5.a)u=!1
else u=!0
k=u||p}else k=!0
if(!a5.a)j=!1
else j=!0
i=e>0
h=k||j||m||!1
g=$.a9()
if(k){u=$.aw()
g=new Z.aT(g.a|u.a)}if(j){u=$.av()
g=new Z.aT(g.a|u.a)}if(i){u=$.au()
g=new Z.aT(g.a|u.a)}return new A.f4(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
ig:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ih:function(a,b,c){var u
A.ig(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ix(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
l5:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.ig(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
l2:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ih(b,t,"ambient")
b.a+="\n"},
l3:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ih(b,t,"diffuse")
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
l6:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ih(b,t,"invDiffuse")
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
lc:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ih(b,t,"specular")
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
l8:function(a,b){var u,t,s
if(!a.k3)return
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
la:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.ig(b,t,"reflect")
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
lb:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.ig(b,t,"refract")
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
l4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.ix(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ae()
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
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.a.t(m," + ")+");\n"}else c.a+="   highLight = "+C.a.t(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.t(o," + ")+");\n"
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
l9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.ix(t)
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
if(typeof u!=="number")return u.ae()
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
o=c.a+="   return "+C.a.t(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.c([],r)
if(!a.b.a)o=!1
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
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.t(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.t(l," + ")+");\n"
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
ld:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.ix(t)
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
if(typeof u!=="number")return u.ae()
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
r=c.a+="   return "+C.a.t(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.c([],u)
if(!a.b.a)r=!1
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
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.t(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.t(j," + ")+");\n"
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
l7:function(a,b){var u,t
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
u=b.a+="   return "+C.a.t(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
le:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aN("")
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
A.l5(a,j)
A.l2(a,j)
A.l3(a,j)
A.l6(a,j)
A.lc(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.la(a,j)
A.lb(a,j)}A.l8(a,j)
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
r=a.id
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.l4(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.l9(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.ld(a,q[o],j)
A.l7(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.r])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aC(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aC(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aC(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.t(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lf:function(a,b){var u,t,s
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
lh:function(a,b){var u
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
lg:function(a,b){var u
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
lj:function(a,b){var u,t
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
lk:function(a,b){var u,t
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
li:function(a,b){var u
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
ll:function(a,b){var u
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
ix:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.b.aC(a,1)},
iR:function(a,b,c,d,e){var u=new A.hj(a,c,e)
u.f=d
P.kt(d,0,P.w)
return u},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a){this.a=a},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a,b){var _=this
_.h5=_.h4=_.cP=_.cO=_.aM=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hi=_.hh=_.hg=_.bK=_.bJ=_.bI=_.bH=_.bG=_.bF=_.hf=_.he=_.cW=_.hd=_.hc=_.cV=_.cU=_.hb=_.ha=_.cT=_.cS=_.h9=_.h8=_.cR=_.h7=_.h6=_.cQ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ce:function ce(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
cM:function cM(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aM=b3
_.cO=b4},
bL:function bL(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bN:function bN(a,b,c,d,e,f,g,h,i,j){var _=this
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
bO:function bO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cJ:function cJ(){},
fS:function fS(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cY:function cY(){},
ho:function ho(a){this.a=a},
cZ:function cZ(a,b,c){this.a=a
this.c=b
this.d=c},
hl:function hl(a,b,c){this.a=a
this.c=b
this.d=c},
hm:function hm(a,b,c){this.a=a
this.c=b
this.d=c},
hn:function hn(a,b,c){this.a=a
this.c=b
this.d=c},
hj:function hj(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
hk:function hk(a,b,c){this.a=a
this.c=b
this.d=c},
C:function C(a,b,c){this.a=a
this.c=b
this.d=c},
bK:function bK(a,b,c){this.a=a
this.c=b
this.d=c},
hp:function hp(a,b,c){this.a=a
this.c=b
this.d=c},
bM:function bM(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
bh:function bh(a,b,c){this.a=a
this.c=b
this.d=c},
aR:function aR(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ie:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
c_:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.v(h,g+a1,f+a2)
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
j.d=i}m=F.ie(i)
l=F.ie(j.b)
k=F.lW(d,a0,new F.id(j,F.ie(j.c),F.ie(j.d),l,m,c),b)
if(k!=null)a.bT(k)},
lT:function(){var u,t,s=null,r={}
r.a=u
r.a=null
r.a=new F.iu()
r=new F.iv(r,1)
t=F.iO()
F.c_(t,s,r,8,8,1,0,0,1)
F.c_(t,s,r,8,8,0,1,0,3)
F.c_(t,s,r,8,8,0,0,1,2)
F.c_(t,s,r,8,8,-1,0,0,0)
F.c_(t,s,r,8,8,0,-1,0,0)
F.c_(t,s,r,8,8,0,0,-1,3)
t.aj()
t.fw(new F.hG(),new F.fr())
return t},
lW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.iO()
t=H.c([],[F.aS])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hA(g,g,new V.aj(p,0,0,1),g,g,new V.S(r,1),g,g,0)
q.k(0,o)
c.$3(o,r,0)
t.push(o.bD(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hA(g,g,new V.aj(j,i,h,1),g,g,new V.S(r,m),g,g,0)
k.k(0,o)
c.$3(o,r,n)
t.push(o.bD(d))}}u.d.f2(a+1,b+1,t)
return u},
bw:function(a,b,c){var u=new F.az(),t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.bv(a)
u.bw(b)
u.eP(c)
u.a.a.d.b.push(u)
u.a.a.V()
return u},
kp:function(a,b){var u=new F.bB(),t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.bv(a)
u.bw(b)
u.a.a.c.b.push(u)
u.a.a.V()
return u},
iO:function(){var u=new F.fK(),t=new F.hB(u)
t.b=!1
t.c=H.c([],[F.aS])
u.a=t
t=new F.fN(u)
t.b=H.c([],[F.bG])
u.b=t
t=new F.fM(u)
t.b=H.c([],[F.bB])
u.c=t
t=new F.fL(u)
t.b=H.c([],[F.az])
u.d=t
u.e=null
return u},
hA:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aS(),r=new F.hJ()
r.b=H.c([],[F.bG])
s.b=r
r=new F.hF()
u=[F.bB]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.hC()
u=[F.az]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.k5()
s.e=0
r=$.a9()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aw().a)!==0?e:t
s.x=(u&$.av().a)!==0?b:t
s.y=(u&$.aZ().a)!==0?f:t
s.z=(u&$.b_().a)!==0?g:t
s.Q=(u&$.k6().a)!==0?c:t
s.ch=(u&$.bn().a)!==0?i:0
s.cx=(u&$.au().a)!==0?a:t
return s},
id:function id(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iu:function iu(){},
iv:function iv(a,b){this.a=a
this.b=b},
az:function az(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eA:function eA(){},
fR:function fR(){},
bB:function bB(){this.b=this.a=null},
eS:function eS(){},
hi:function hi(){},
bG:function bG(){this.a=null},
fK:function fK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fL:function fL(a){this.a=a
this.b=null},
fM:function fM(a){this.a=a
this.b=null},
fN:function fN(a){this.a=a
this.b=null},
aS:function aS(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){this.a=a},
hK:function hK(a){this.a=a},
hB:function hB(a){this.a=a
this.c=this.b=null},
hC:function hC(){this.d=this.c=this.b=null},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(){this.c=this.b=null},
hH:function hH(){},
hG:function hG(){},
hI:function hI(){},
fr:function fr(){},
hJ:function hJ(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iM.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gF:function(a){return H.bI(a)},
h:function(a){return"Instance of '"+H.e(H.bJ(a))+"'"}}
J.eN.prototype={
h:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iaY:1}
J.cn.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gF:function(a){return 0}}
J.co.prototype={
gF:function(a){return 0},
h:function(a){return String(a)}}
J.fw.prototype={}
J.bP.prototype={}
J.aG.prototype={
h:function(a){var u=a[$.jV()]
if(u==null)return this.df(a)
return"JavaScript function for "+H.e(J.a0(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aF.prototype={
d3:function(a,b){if(!!a.fixed$length)H.p(P.W("removeAt"))
if(b<0||b>=a.length)throw H.f(P.cG(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var u
if(!!a.fixed$length)H.p(P.W("remove"))
for(u=0;u<a.length;++u)if(J.B(a[u],b)){a.splice(u,1)
return!0}return!1},
bx:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.W("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
I:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.bu(a))}},
t:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
fu:function(a){return this.t(a,"")},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dc:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.ag(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.e_(a,0)])
return H.c(a.slice(b,c),[H.e_(a,0)])},
gfo:function(a){if(a.length>0)return a[0]
throw H.f(H.je())},
gbO:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.je())},
b6:function(a,b){if(!!a.immutable$list)H.p(P.W("sort"))
H.cL(a,0,a.length-1,b)},
ac:function(a,b){var u
for(u=0;u<a.length;++u)if(J.B(a[u],b))return!0
return!1},
h:function(a){return P.iJ(a,"[","]")},
gO:function(a){return new J.T(a,a.length)},
gF:function(a){return H.bI(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.p(P.W("set length"))
if(b<0)throw H.f(P.ag(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.bl(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.p(P.W("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bl(a,b))
a[b]=c},
$ii:1}
J.iL.prototype={}
J.T.prototype={
gH:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bA.prototype={
fa:function(a,b){var u
if(typeof b!=="number")throw H.f(H.aX(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb_(b)
if(this.gb_(a)===u)return 0
if(this.gb_(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb_:function(a){return a===0?1/a<0:a<0},
fW:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.W(""+a+".toInt()"))},
bL:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.W(""+a+".floor()"))},
a7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.W(""+a+".round()"))},
d6:function(a,b){var u
if(b>20)throw H.f(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb_(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
d8:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dg:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cA(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cA(a,b)},
cA:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.W("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aX:function(a,b){var u
if(a>0)u=this.eT(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eT:function(a,b){return b>31?0:a>>>b},
$iH:1,
$ia6:1}
J.cm.prototype={$iw:1}
J.cl.prototype={}
J.b7.prototype={
bC:function(a,b){if(b<0)throw H.f(H.bl(a,b))
if(b>=a.length)H.p(H.bl(a,b))
return a.charCodeAt(b)},
aV:function(a,b){if(b>=a.length)throw H.f(H.bl(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.f(P.j7(b,null,null))
return a+b},
c7:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cG(b,null))
if(b>c)throw H.f(P.cG(b,null))
if(c>a.length)throw H.f(P.cG(c,null))
return a.substring(b,c)},
aC:function(a,b){return this.c7(a,b,null)},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.x)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a5:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
h:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$ir:1}
H.K.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return C.b.bC(this.a,b)},
$an:function(){return[P.w]},
$ai:function(){return[P.w]}}
H.ev.prototype={}
H.cs.prototype={
gH:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.iY(s),q=r.gj(s)
if(t.b!==q)throw H.f(P.bu(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.D(s,u);++t.c
return!0}}
H.f_.prototype={
gO:function(a){return new H.f0(J.bo(this.a),this.b)},
gj:function(a){return J.bp(this.a)},
D:function(a,b){return this.b.$1(J.j6(this.a,b))},
$ai:function(a,b){return[b]}}
H.f0.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gH(t))
return!0}u.a=null
return!1},
gH:function(a){return this.a}}
H.hN.prototype={
gO:function(a){return new H.hO(J.bo(this.a),this.b)}}
H.hO.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.ci.prototype={}
H.hs.prototype={}
H.d_.prototype={}
H.hg.prototype={
a4:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fs.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eP.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hr.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iz.prototype={
$1:function(a){if(!!J.R(a).$ib4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dE.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bt.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gh_:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h3.prototype={}
H.fY.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.e0(u)+"'"}}
H.bq.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bq))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.bI(this.a)
else u=typeof t!=="object"?J.b0(t):H.bI(t)
return(u^H.bI(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bJ(u))+"'")}}
H.ed.prototype={
h:function(a){return this.a}}
H.fH.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gj:function(a){return this.a},
gan:function(a){return new H.cr(this,[H.e_(this,0)])},
cK:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cl(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cl(t,b)}else return s.fs(b)},
fs:function(a){var u=this.d
if(u==null)return!1
return this.bM(this.bc(u,J.b0(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aW(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aW(r,b)
s=t==null?null:t.b
return s}else return q.ft(b)},
ft:function(a){var u,t,s=this.d
if(s==null)return
u=this.bc(s,J.b0(a)&0x3ffffff)
t=this.bM(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cg(u==null?o.b=o.bl():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cg(t==null?o.c=o.bl():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bl()
r=J.b0(b)&0x3ffffff
q=o.bc(s,r)
if(q==null)o.bt(s,r,[o.bm(b,c)])
else{p=o.bM(q,b)
if(p>=0)q[p].b=c
else q.push(o.bm(b,c))}}},
I:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.bu(u))
t=t.c}},
cg:function(a,b,c){var u=this.aW(a,b)
if(u==null)this.bt(a,b,this.bm(b,c))
else u.b=c},
bm:function(a,b){var u=this,t=new H.eT(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.B(a[t].a,b))return t
return-1},
h:function(a){return P.jh(this)},
aW:function(a,b){return a[b]},
bc:function(a,b){return a[b]},
bt:function(a,b,c){a[b]=c},
dF:function(a,b){delete a[b]},
cl:function(a,b){return this.aW(a,b)!=null},
bl:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bt(t,u,t)
this.dF(t,u)
return t}}
H.eT.prototype={}
H.cr.prototype={
gj:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.eU(u,u.r)
t.c=u.e
return t}}
H.eU.prototype={
gH:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bu(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.im.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.io.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ip.prototype={
$1:function(a){return this.a(a)}}
H.eO.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bF.prototype={}
H.cz.prototype={
gj:function(a){return a.length},
$it:1,
$at:function(){}}
H.bE.prototype={
i:function(a,b){H.aV(b,a,a.length)
return a[b]},
$an:function(){return[P.H]},
$ii:1,
$ai:function(){return[P.H]}}
H.cA.prototype={
$an:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]}}
H.fl.prototype={
i:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.fm.prototype={
i:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.fn.prototype={
i:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.fo.prototype={
i:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.fp.prototype={
i:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.cB.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.fq.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.bS.prototype={}
H.bT.prototype={}
H.bU.prototype={}
H.bV.prototype={}
P.hQ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.hP.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hR.prototype={
$0:function(){this.a.$0()}}
P.hS.prototype={
$0:function(){this.a.$0()}}
P.dK.prototype={
dn:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bk(new P.ia(this,b),0),a)
else throw H.f(P.W("`setTimeout()` not found."))},
dq:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bk(new P.i9(this,a,Date.now(),b),0),a)
else throw H.f(P.W("Periodic timer."))},
$icT:1}
P.ia.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.i9.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dg(u,q)}s.c=r
t.d.$1(s)}}
P.d6.prototype={}
P.cP.prototype={}
P.h0.prototype={}
P.cT.prototype={}
P.ic.prototype={}
P.ii.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cD():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.i3.prototype={
fR:function(a){var u,t,s,r=null
try{if(C.e===$.a8){a.$0()
return}P.ln(r,r,this,a)}catch(s){u=H.iy(s)
t=H.j_(s)
P.jG(r,r,this,u,t)}},
fS:function(a,b){var u,t,s,r=null
try{if(C.e===$.a8){a.$1(b)
return}P.lo(r,r,this,a,b)}catch(s){u=H.iy(s)
t=H.j_(s)
P.jG(r,r,this,u,t)}},
fT:function(a,b){return this.fS(a,b,null)},
f7:function(a){return new P.i4(this,a)},
cF:function(a,b){return new P.i5(this,a,b)}}
P.i4.prototype={
$0:function(){return this.a.fR(this.b)}}
P.i5.prototype={
$1:function(a){return this.a.fT(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.i0.prototype={
gO:function(a){var u=new P.dl(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
k:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.ci(u==null?s.b=P.iU():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.ci(t==null?s.c=P.iU():t,b)}else return s.dt(0,b)},
dt:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.iU()
u=s.cj(b)
t=r[u]
if(t==null)r[u]=[s.b8(b)]
else{if(s.co(t,b)>=0)return!1
t.push(s.b8(b))}return!0},
E:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eI(this.c,b)
else return this.eH(0,b)},
eH:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dI(r,b)
t=s.co(u,b)
if(t<0)return!1
s.cB(u.splice(t,1)[0])
return!0},
ci:function(a,b){if(a[b]!=null)return!1
a[b]=this.b8(b)
return!0},
eI:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cB(u)
delete a[b]
return!0},
cp:function(){this.r=1073741823&this.r+1},
b8:function(a){var u,t=this,s=new P.i1(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cp()
return s},
cB:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cp()},
cj:function(a){return J.b0(a)&1073741823},
dI:function(a,b){return a[this.cj(b)]},
co:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.B(a[t].a,b))return t
return-1}}
P.i1.prototype={}
P.dl.prototype={
gH:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bu(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eV.prototype={$ii:1}
P.n.prototype={
gO:function(a){return new H.cs(a,this.gj(a))},
D:function(a,b){return this.i(a,b)},
fY:function(a,b){var u,t,s=this,r=H.c([],[H.lG(s,a,"n",0)])
C.a.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
fX:function(a){return this.fY(a,!0)},
h:function(a){return P.iJ(a,"[","]")}}
P.eY.prototype={}
P.eZ.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.al.prototype={
I:function(a,b){var u,t
for(u=J.bo(this.gan(a));u.v();){t=u.gH(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.bp(this.gan(a))},
h:function(a){return P.jh(a)}}
P.i6.prototype={
h:function(a){return P.iJ(this,"{","}")},
D:function(a,b){var u,t,s
P.jr(b,"index")
for(u=P.kW(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
$ii:1}
P.dm.prototype={}
P.ef.prototype={}
P.ej.prototype={}
P.ew.prototype={}
P.hv.prototype={}
P.hw.prototype={
fb:function(a){var u,t,s=P.js(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ib(u)
if(t.dH(a,0,s)!==s)t.cC(C.b.bC(a,s-1),0)
return new Uint8Array(u.subarray(0,H.l_(0,t.b,u.length)))}}
P.ib.prototype={
cC:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dH:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bC(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aV(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cC(r,C.b.aV(a,p)))s=p}else if(r<=2047){q=n.b
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
P.aY.prototype={}
P.a2.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a2&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.d.aX(u,30))&1073741823},
h:function(a){var u=this,t=P.kj(H.kD(u)),s=P.cd(H.kB(u)),r=P.cd(H.kx(u)),q=P.cd(H.ky(u)),p=P.cd(H.kA(u)),o=P.cd(H.kC(u)),n=P.kk(H.kz(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.H.prototype={}
P.ay.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a},
gF:function(a){return C.d.gF(this.a)},
h:function(a){var u,t,s,r=new P.eu(),q=this.a
if(q<0)return"-"+new P.ay(0-q).h(0)
u=r.$1(C.d.a_(q,6e7)%60)
t=r.$1(C.d.a_(q,1e6)%60)
s=new P.et().$1(q%1e6)
return""+C.d.a_(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.et.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.b4.prototype={}
P.cD.prototype={
h:function(a){return"Throw of null."}}
P.aa.prototype={
gba:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb9:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gba()+o+u
if(!q.a)return t
s=q.gb9()
r=P.iH(q.b)
return t+s+": "+r}}
P.be.prototype={
gba:function(){return"RangeError"},
gb9:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eL.prototype={
gba:function(){return"RangeError"},
gb9:function(){var u,t=this.b
if(typeof t!=="number")return t.a3()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.ht.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hq.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.fX.prototype={
h:function(a){return"Bad state: "+this.a}}
P.ei.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iH(u)+"."}}
P.fv.prototype={
h:function(a){return"Out of Memory"},
$ib4:1}
P.cN.prototype={
h:function(a){return"Stack Overflow"},
$ib4:1}
P.eo.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.de.prototype={
h:function(a){return"Exception: "+this.a}}
P.eH.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.c7(s,0,75)+"...":s
return t+"\n"+r}}
P.w.prototype={}
P.i.prototype={
gj:function(a){var u,t=this.gO(this)
for(u=0;t.v();)++u
return u},
D:function(a,b){var u,t,s
P.jr(b,"index")
for(u=this.gO(this),t=0;u.v();){s=u.gH(u)
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
h:function(a){return P.km(this,"(",")")}}
P.eM.prototype={}
P.ba.prototype={$ii:1}
P.cu.prototype={}
P.aI.prototype={
gF:function(a){return P.V.prototype.gF.call(this,this)},
h:function(a){return"null"}}
P.a6.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
n:function(a,b){return this===b},
gF:function(a){return H.bI(this)},
h:function(a){return"Instance of '"+H.e(H.bJ(this))+"'"},
toString:function(){return this.h(this)}}
P.r.prototype={}
P.aN.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.e2.prototype={
gj:function(a){return a.length}}
W.e4.prototype={
h:function(a){return String(a)}}
W.e5.prototype={
h:function(a){return String(a)}}
W.c7.prototype={}
W.b2.prototype={
c3:function(a,b,c){if(c!=null)return a.getContext(b,P.lx(c))
return a.getContext(b)},
d7:function(a,b){return this.c3(a,b,null)},
$ib2:1}
W.ax.prototype={
gj:function(a){return a.length}}
W.ek.prototype={
gj:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bv.prototype={
gj:function(a){return a.length}}
W.el.prototype={}
W.a1.prototype={}
W.ac.prototype={}
W.em.prototype={
gj:function(a){return a.length}}
W.en.prototype={
gj:function(a){return a.length}}
W.ep.prototype={
gj:function(a){return a.length}}
W.eq.prototype={
h:function(a){return String(a)}}
W.cf.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[[P.a4,P.a6]]},
$an:function(){return[[P.a4,P.a6]]},
$ii:1,
$ai:function(){return[[P.a4,P.a6]]}}
W.cg.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gar(a))+" x "+H.e(this.gam(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ia4)return!1
return a.left===u.gb0(b)&&a.top===u.gb3(b)&&this.gar(a)===u.gar(b)&&this.gam(a)===u.gam(b)},
gF:function(a){return W.jE(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(this.gar(a)),C.c.gF(this.gam(a)))},
gcG:function(a){return a.bottom},
gam:function(a){return a.height},
gb0:function(a){return a.left},
gc_:function(a){return a.right},
gb3:function(a){return a.top},
gar:function(a){return a.width},
$ia4:1,
$aa4:function(){return[P.a6]}}
W.er.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[P.r]},
$an:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]}}
W.es.prototype={
gj:function(a){return a.length}}
W.hU.prototype={
gj:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.fX(this)
return new J.T(u,u.length)},
$an:function(){return[W.U]},
$ai:function(){return[W.U]}}
W.U.prototype={
gbB:function(a){return new W.hU(a,a.children)},
gcJ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a3()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a3()
if(r<0)r=-r*0
return new P.a4(u,t,s,r,[P.a6])},
h:function(a){return a.localName},
$iU:1}
W.h.prototype={$ih:1}
W.d.prototype={
f0:function(a,b,c,d){if(c!=null)this.du(a,b,c,!1)},
du:function(a,b,c,d){return a.addEventListener(b,H.bk(c,1),!1)}}
W.aA.prototype={$iaA:1}
W.eB.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aA]},
$an:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]}}
W.eC.prototype={
gj:function(a){return a.length}}
W.eG.prototype={
gj:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.eJ.prototype={
gj:function(a){return a.length}}
W.by.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.G]},
$an:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.aC.prototype={$iaC:1,
gcL:function(a){return a.data}}
W.bz.prototype={$ibz:1}
W.b8.prototype={$ib8:1}
W.eW.prototype={
h:function(a){return String(a)}}
W.fe.prototype={
gj:function(a){return a.length}}
W.ff.prototype={
i:function(a,b){return P.at(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.at(u.value[1]))}},
gan:function(a){var u=H.c([],[P.r])
this.I(a,new W.fg(u))
return u},
gj:function(a){return a.size}}
W.fg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fh.prototype={
i:function(a,b){return P.at(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.at(u.value[1]))}},
gan:function(a){var u=H.c([],[P.r])
this.I(a,new W.fi(u))
return u},
gj:function(a){return a.size}}
W.fi.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aH.prototype={$iaH:1}
W.fj.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aH]},
$an:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]}}
W.af.prototype={$iaf:1}
W.hT.prototype={
gO:function(a){var u=this.a.childNodes
return new W.cj(u,u.length)},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$an:function(){return[W.G]},
$ai:function(){return[W.G]}}
W.G.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.de(a):u},
$iG:1}
W.cC.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.G]},
$an:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.aJ.prototype={$iaJ:1,
gj:function(a){return a.length}}
W.fx.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aJ]},
$an:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]}}
W.fF.prototype={
i:function(a,b){return P.at(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.at(u.value[1]))}},
gan:function(a){var u=H.c([],[P.r])
this.I(a,new W.fG(u))
return u},
gj:function(a){return a.size}}
W.fG.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fI.prototype={
gj:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.fT.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aK]},
$an:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.fU.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aL]},
$an:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gj:function(a){return a.length}}
W.fZ.prototype={
i:function(a,b){return a.getItem(b)},
I:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gan:function(a){var u=H.c([],[P.r])
this.I(a,new W.h_(u))
return u},
gj:function(a){return a.length}}
W.h_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ar.prototype={$iar:1}
W.aO.prototype={$iaO:1}
W.as.prototype={$ias:1}
W.h4.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.as]},
$an:function(){return[W.as]},
$ii:1,
$ai:function(){return[W.as]}}
W.h5.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aO]},
$an:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]}}
W.ha.prototype={
gj:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.bf.prototype={$ibf:1}
W.hd.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aP]},
$an:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]}}
W.he.prototype={
gj:function(a){return a.length}}
W.aQ.prototype={}
W.hu.prototype={
h:function(a){return String(a)}}
W.hM.prototype={
gj:function(a){return a.length}}
W.aU.prototype={
gff:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.W("deltaY is not supported"))},
gfe:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.W("deltaX is not supported"))},
$iaU:1}
W.bR.prototype={
eK:function(a,b){return a.requestAnimationFrame(H.bk(b,1))},
dG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hV.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.D]},
$an:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]}}
W.d9.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ia4)return!1
return a.left===u.gb0(b)&&a.top===u.gb3(b)&&a.width===u.gar(b)&&a.height===u.gam(b)},
gF:function(a){return W.jE(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(a.width),C.c.gF(a.height))},
gam:function(a){return a.height},
gar:function(a){return a.width}}
W.hY.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aB]},
$an:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]}}
W.ds.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.G]},
$an:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.i7.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aM]},
$an:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]}}
W.i8.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.ar]},
$an:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]}}
W.hW.prototype={}
W.hX.prototype={
$1:function(a){return this.a.$1(a)}}
W.E.prototype={
gO:function(a){return new W.cj(a,this.gj(a))}}
W.cj.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.e1(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gH:function(a){return this.d}}
W.d8.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.bW.prototype={}
W.bX.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dF.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.bY.prototype={}
W.bZ.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
P.dP.prototype={$iaC:1,
gcL:function(a){return this.a}}
P.ij.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eD.prototype={
gbd:function(){var u=this.b,t=H.jM(u,"n",0)
return new H.f_(new H.hN(u,new P.eE(),[t]),new P.eF(),[t,W.U])},
k:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bp(this.gbd().a)},
i:function(a,b){var u=this.gbd()
return u.b.$1(J.j6(u.a,b))},
gO:function(a){var u=P.jg(this.gbd(),!1,W.U)
return new J.T(u,u.length)},
$an:function(){return[W.U]},
$ai:function(){return[W.U]}}
P.eE.prototype={
$1:function(a){return!!J.R(a).$iU}}
P.eF.prototype={
$1:function(a){return H.l(a,"$iU")}}
P.i2.prototype={
gc_:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.q(t)
return u+t},
gcG:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.q(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$ia4){t=q.a
if(t==u.gb0(b)){s=q.b
if(s==u.gb3(b)){r=q.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.q(r)
if(t+r===u.gc_(b)){t=q.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.q(t)
u=s+t===u.gcG(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u=this,t=u.a,s=J.b0(t),r=u.b,q=J.b0(r),p=u.c
if(typeof t!=="number")return t.C()
if(typeof p!=="number")return H.q(p)
p=C.d.gF(t+p)
t=u.d
if(typeof r!=="number")return r.C()
if(typeof t!=="number")return H.q(t)
t=C.d.gF(r+t)
return P.kV(P.i_(P.i_(P.i_(P.i_(0,s),q),p),t))}}
P.a4.prototype={
gb0:function(a){return this.a},
gb3:function(a){return this.b},
gar:function(a){return this.c},
gam:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.eR.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$an:function(){return[P.b9]},
$ii:1,
$ai:function(){return[P.b9]}}
P.bc.prototype={$ibc:1}
P.ft.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$an:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]}}
P.fA.prototype={
gj:function(a){return a.length}}
P.h1.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$an:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]}}
P.j.prototype={
gbB:function(a){return new P.eD(a,new W.hT(a))}}
P.bg.prototype={$ibg:1}
P.hf.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$an:function(){return[P.bg]},
$ii:1,
$ai:function(){return[P.bg]}}
P.dj.prototype={}
P.dk.prototype={}
P.dv.prototype={}
P.dw.prototype={}
P.dG.prototype={}
P.dH.prototype={}
P.dN.prototype={}
P.dO.prototype={}
P.e7.prototype={
gj:function(a){return a.length}}
P.e8.prototype={
i:function(a,b){return P.at(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.at(u.value[1]))}},
gan:function(a){var u=H.c([],[P.r])
this.I(a,new P.e9(u))
return u},
gj:function(a){return a.size}}
P.e9.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ea.prototype={
gj:function(a){return a.length}}
P.b1.prototype={}
P.fu.prototype={
gj:function(a){return a.length}}
P.d7.prototype={}
P.cI.prototype={
fU:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$iaC)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.ly(g))
return}if(!!t.$ibz)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.kc("Incorrect number or type of arguments"))}}
P.fW.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return P.at(a.item(b))},
D:function(a,b){return this.i(a,b)},
$an:function(){return[[P.cu,,,]]},
$ii:1,
$ai:function(){return[[P.cu,,,]]}}
P.dC.prototype={}
P.dD.prototype={}
T.e3.prototype={
ay:function(a,b){return!0},
h:function(a){return"all"}}
T.ck.prototype={
ay:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].ay(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cv.prototype={}
T.ao.prototype={
ay:function(a,b){return!this.dd(0,b)},
h:function(a){return"!["+this.c8(0)+"]"}}
T.fJ.prototype={
dj:function(a){var u,t
if(a.a.length<=0)throw H.f(P.o("May not create a Set with zero characters."))
u=new H.I([P.w,P.aY])
for(t=new H.cs(a,a.gj(a));t.v();)u.l(0,t.d,!0)
this.a=u},
ay:function(a,b){return this.a.cK(0,b)},
h:function(a){var u=this.a
return P.iP(new H.cr(u,[H.e_(u,0)]))}}
R.cO.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.cX(this.a.K(0,b))
r.a=H.c([],[T.cv])
r.c=!1
this.c.push(r)
return r},
fn:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.ay(0,a))return r}return},
h:function(a){return this.b}}
R.cU.prototype={
h:function(a){var u=H.jS(this.b,"\n","\\n"),t=H.jS(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.cV.prototype={
h:function(a){return this.b}}
R.hb.prototype={
K:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.cO(this,b)
u.c=H.c([],[R.cX])
this.a.l(0,b,u)}return u},
aT:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.cV(a)
u=P.r
t.c=new H.I([u,u])
this.b.l(0,a,t)}return t},
fZ:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[R.cU]),l=this.c,k=[P.w],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.aV(a,s)
q=l.fn(r)
if(q==null){if(t==null){j.push(r)
p=P.iP(j)
throw H.f(P.o("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.iP(j)
o=l.d
n=o.c.i(0,p)
t=new R.cU(n==null?o.b:n,p,s)}++s}}}}
R.cX.prototype={
h:function(a){return this.b.b+": "+this.c8(0)}}
O.ai.prototype={
aU:function(a){this.a=H.c([],[a])
this.c=this.b=null},
c4:function(a,b,c){this.b=b
this.c=a},
aA:function(a,b){return this.c4(a,null,b)},
cs:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cc:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.T(u,u.length)},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b){var u,t,s=this,r=[H.jM(s,"ai",0)]
if(s.cs(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.cc(t,H.c([b],r))}},
bx:function(a,b){var u,t
if(this.cs(b)){u=this.a
t=u.length
C.a.bx(u,b)
this.cc(t,b)}},
$ii:1}
O.bC.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.y():u},
as:function(){var u=this.b
if(u!=null)u.w(null)},
gX:function(a){var u=this.a
if(u.length>0)return C.a.gbO(u)
else return V.bb()},
b2:function(a){var u=this.a
if(a==null)u.push(V.bb())
else u.push(a)
this.as()},
ao:function(){var u=this.a
if(u.length>0){u.pop()
this.as()}}}
E.eb.prototype={}
E.ak.prototype={
sb5:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().E(0,s.gd1())
u=s.c
if(u!=null)u.gm().k(0,s.gd1())
t=new D.u("shape",r,s.c)
t.b=!0
s.b1(t)}},
a8:function(a,b){var u
for(u=this.y.a,u=new J.T(u,u.length);u.v();)u.d.a8(0,b)},
a1:function(a){var u,t=this,s=a.dx
s.a.push(s.gX(s))
s.as()
a.bX(t.f)
s=a.dy
u=(s&&C.a).gbO(s)
if(u!=null&&t.d!=null)u.d4(a,t)
for(s=t.y.a,s=new J.T(s,s.length);s.v();)s.d.a1(a)
a.bW()
a.dx.ao()},
b1:function(a){var u=this.z
if(u!=null)u.w(a)},
V:function(){return this.b1(null)},
d2:function(a){this.e=null
this.b1(a)},
fE:function(){return this.d2(null)},
d0:function(a){this.b1(a)},
fB:function(){return this.d0(null)},
fA:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd_(),s=[{func:1,ret:-1,args:[D.N]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b5()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.V()},
fD:function(a,b){var u,t
for(u=b.gO(b),t=this.gd_();u.v();)u.gH(u).gm().E(0,t)
this.V()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fB.prototype={
di:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a2(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bC()
t=[V.am]
u.a=H.c([],t)
u.gm().k(0,new E.fC(s))
s.cy=u
u=new O.bC()
u.a=H.c([],t)
u.gm().k(0,new E.fD(s))
s.db=u
u=new O.bC()
u.a=H.c([],t)
u.gm().k(0,new E.fE(s))
s.dx=u
u=H.c([],[O.cQ])
s.dy=u
u.push(null)
s.fr=new H.I([P.r,A.cJ])},
gfN:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gX(s)
u=t.db
u=t.z=s.u(0,u.gX(u))
s=u}return s},
bX:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbO(u):a)},
bW:function(){var u=this.dy
if(u.length>1)u.pop()},
cE:function(a){var u=a.b
if(u.length===0)throw H.f(P.o("May not cache a shader with no name."))
if(this.fr.cK(0,u))throw H.f(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)}}
E.fC.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fD.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fE.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.cS.prototype={
cf:function(a){this.d5()},
ce:function(){return this.cf(null)},
gfp:function(){var u,t=this,s=Date.now(),r=C.d.a_(P.jc(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a2(s,!1)
return u/r},
cu:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.q(r)
u=C.c.bL(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.c.bL(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jx(C.h,s.gfQ())}},
d5:function(){if(!this.cx){this.cx=!0
var u=window
C.p.dG(u)
C.p.eK(u,W.jH(new E.h9(this),P.a6))}},
fP:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cu()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a2(r,!1)
s.y=P.jc(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.as()
r=s.db
C.a.sj(r.a,0)
r.as()
r=s.dx
C.a.sj(r.a,0)
r.as()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a1(p.e)}}catch(q){u=H.iy(q)
t=H.j_(q)
P.j3("Error: "+H.e(u))
P.j3("Stack: "+H.e(t))
throw H.f(u)}}}
E.h9.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fP()}}}
Z.d4.prototype={}
Z.c8.prototype={
T:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.iy(s)
t=P.o('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.d5.prototype={}
Z.bs.prototype={
al:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
T:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].T(a)},
aq:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a1:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.r],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a0(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.t(p,", ")+"\nAttrs:   "+C.a.t(r,", ")}}
Z.b6.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bJ(this.c))+"'")+"]"}}
Z.aT.prototype={
gc6:function(a){var u=this.a,t=(u&$.a9().a)!==0?3:0
if((u&$.aw().a)!==0)t+=3
if((u&$.av().a)!==0)t+=3
if((u&$.aZ().a)!==0)t+=2
if((u&$.b_().a)!==0)t+=3
if((u&$.c4().a)!==0)t+=3
if((u&$.c5().a)!==0)t+=4
if((u&$.bn().a)!==0)++t
return(u&$.au().a)!==0?t+4:t},
f3:function(a){var u,t=$.a9(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.av()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.au()
if((s&t.a)!==0)if(u===a)return t
return $.k7()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aT))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.r]),t=this.a
if((t&$.a9().a)!==0)u.push("Pos")
if((t&$.aw().a)!==0)u.push("Norm")
if((t&$.av().a)!==0)u.push("Binm")
if((t&$.aZ().a)!==0)u.push("Txt2D")
if((t&$.b_().a)!==0)u.push("TxtCube")
if((t&$.c4().a)!==0)u.push("Clr3")
if((t&$.c5().a)!==0)u.push("Clr4")
if((t&$.bn().a)!==0)u.push("Weight")
if((t&$.au().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.t(u,"|")}}
D.ee.prototype={}
D.b5.prototype={
k:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.N]}]):u).push(b)},
E:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.ac(s,b)
if(s===!0){s=t.a
u=(s&&C.a).E(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.ac(s,b)
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
return!0}if(!t)C.a.I(P.jg(u,!0,{func:1,ret:-1,args:[D.N]}),new D.ey(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.N]}])
C.a.I(u,new D.ez(q))}return!0},
fk:function(){return this.w(null)},
ad:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}}}
D.ey.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.ez.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.N.prototype={}
D.aD.prototype={}
D.aE.prototype={}
D.u.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.c9.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c9))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cp.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cp))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.eQ.prototype={
fJ:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
fF:function(a){this.c=a.b
this.d.E(0,a.a)
return!1}}
X.ct.prototype={}
X.eX.prototype={
aE:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.S(o.a+n*m,o.b+u*t)
t=q.a.gax()
r=new X.an(a,V.ap(),q.x,t,s)
r.b=!0
q.z=new P.a2(p,!1)
q.x=s
return r},
bV:function(a,b){this.r=a.a
return!1},
aQ:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.d9()
if(typeof u!=="number")return u.ae()
this.r=(u&~t)>>>0
return!1},
aP:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aE(a,b))
return!0},
fK:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gax()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.bD(new V.z(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
ef:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.ct(c,r.a.gax(),b)
s.b=!0
t.w(s)
r.y=new P.a2(u,!1)
r.x=V.ap()}}
X.a3.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a3))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.an.prototype={}
X.fk.prototype={
bb:function(a,b,c){var u=this,t=new P.a2(Date.now(),!1),s=u.a.gax(),r=new X.an(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.bb(a,b,!0))
return!0},
aQ:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.d9()
if(typeof t!=="number")return t.ae()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.bb(a,b,!0))
return!0},
aP:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.bb(a,b,!1))
return!0},
fL:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gax()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.bD(new V.z(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0},
gcN:function(){var u=this.b
return u==null?this.b=D.y():u},
gc1:function(){var u=this.c
return u==null?this.c=D.y():u},
gcZ:function(){var u=this.d
return u==null?this.d=D.y():u}}
X.bD.prototype={}
X.fz.prototype={}
X.cW.prototype={}
X.hc.prototype={
aE:function(a,b){var u=this,t=new P.a2(Date.now(),!1),s=a.length>0?a[0]:V.ap(),r=u.a.gax(),q=new X.cW(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fI:function(a){var u=this.b
if(u==null)return!1
u.w(this.aE(a,!0))
return!0},
fG:function(a){var u=this.c
if(u==null)return!1
u.w(this.aE(a,!0))
return!0},
fH:function(a){var u=this.d
if(u==null)return!1
u.w(this.aE(a,!1))
return!0}}
X.d0.prototype={
gax:function(){var u=this.a,t=C.f.gcJ(u).c
t.toString
u=C.f.gcJ(u).d
u.toString
return V.jt(0,0,t,u)},
cm:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cp(u,new X.a3(t,a.altKey,a.shiftKey))},
aw:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a3(t,a.altKey,a.shiftKey)},
bu:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a3(t,a.altKey,a.shiftKey)},
ai:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.G()
u=t.top
if(typeof r!=="number")return r.G()
return new V.S(s-q,r-u)},
aF:function(a){return new V.z(a.movementX,a.movementY)},
bp:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.S])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.c.a7(r.pageX)
C.c.a7(r.pageY)
p=o.left
C.c.a7(r.pageX)
n.push(new V.S(q-p,C.c.a7(r.pageY)-o.top))}return n},
ag:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.c9(u,new X.a3(t,a.altKey,a.shiftKey))},
be:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.G()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.G()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
e9:function(a){this.f=!0},
dY:function(a){this.f=!1},
e3:function(a){if(this.f&&this.be(a))a.preventDefault()},
ed:function(a){var u
if(!this.f)return
u=this.cm(a)
this.b.fJ(u)},
eb:function(a){var u
if(!this.f)return
u=this.cm(a)
this.b.fF(u)},
eh:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aw(a)
if(r.x){u=r.ag(a)
t=r.aF(a)
if(r.d.bV(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ag(a)
s=r.ai(a)
if(r.c.bV(u,s))a.preventDefault()},
el:function(a){var u,t,s,r=this
r.aw(a)
u=r.ag(a)
if(r.x){t=r.aF(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ai(a)
if(r.c.aQ(u,s))a.preventDefault()},
e7:function(a){var u,t,s,r=this
if(!r.be(a)){r.aw(a)
u=r.ag(a)
if(r.x){t=r.aF(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ai(a)
if(r.c.aQ(u,s))a.preventDefault()}},
ej:function(a){var u,t,s,r=this
r.aw(a)
u=r.ag(a)
if(r.x){t=r.aF(a)
if(r.d.aP(u,t))a.preventDefault()
return}if(r.r)return
s=r.ai(a)
if(r.c.aP(u,s))a.preventDefault()},
e5:function(a){var u,t,s,r=this
if(!r.be(a)){r.aw(a)
u=r.ag(a)
if(r.x){t=r.aF(a)
if(r.d.aP(u,t))a.preventDefault()
return}if(r.r)return
s=r.ai(a)
if(r.c.aP(u,s))a.preventDefault()}},
en:function(a){var u,t,s=this
s.aw(a)
u=new V.z((a&&C.o).gfe(a),C.o.gff(a)).p(0,180)
if(s.x){if(s.d.fK(u))a.preventDefault()
return}if(s.r)return
t=s.ai(a)
if(s.c.fL(u,t))a.preventDefault()},
ep:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ag(s.y)
t=s.ai(s.y)
s.d.ef(u,t,r)}},
eG:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bu(a)
u=t.bp(a)
if(t.e.fI(u))a.preventDefault()},
eC:function(a){var u
this.bu(a)
u=this.bp(a)
if(this.e.fG(u))a.preventDefault()},
eE:function(a){var u
this.bu(a)
u=this.bp(a)
if(this.e.fH(u))a.preventDefault()}}
D.b3.prototype={
af:function(a){var u=this.r
if(u!=null)u.w(a)},
dm:function(){return this.af(null)},
$iY:1}
D.Y.prototype={}
D.cq.prototype={
af:function(a){var u=this.x
if(u!=null)u.w(a)},
cr:function(a){var u=this.y
if(u!=null)u.w(a)},
ee:function(){return this.cr(null)},
er:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.dC(s))return!1}return!0},
dS:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcq(),s=[{func:1,ret:-1,args:[D.N]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.b3)this.e.push(q)
p=q.r
if(p==null){p=new D.b5()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.aD()
u.b=!0
this.af(u)},
ew:function(a,b){var u,t,s
for(u=b.gO(b),t=this.gcq();u.v();){s=u.gH(u)
C.a.E(this.e,s)
s.gm().E(0,t)}u=new D.aE()
u.b=!0
this.af(u)},
dC:function(a){var u=C.a.ac(this.e,a)
return u},
$ai:function(){return[D.Y]},
$aai:function(){return[D.Y]}}
D.fy.prototype={$iY:1}
D.fV.prototype={$iY:1}
V.J.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aj.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.ex.prototype={}
V.cy.prototype={
a2:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.H])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cy))return!1
u=b.a
t=$.x().a
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
h:function(a){var u,t,s,r,q=this,p=[P.H],o=V.bm(H.c([q.a,q.d,q.r],p),3,0),n=V.bm(H.c([q.b,q.e,q.x],p),3,0),m=V.bm(H.c([q.c,q.f,q.y],p),3,0)
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
V.am.prototype={
a2:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.H])
return t},
bN:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.x().a)return V.bb()
u=1/b1
t=-n
s=-a0
return V.ae((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ae(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b4:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.v(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
c0:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.P(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.x().a
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
h:function(a){return this.J()},
B:function(a){var u,t,s,r,q,p=this,o=[P.H],n=V.bm(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bm(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bm(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bm(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
J:function(){return this.B("")}}
V.S.prototype={
G:function(a,b){return new V.S(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.P.prototype={
G:function(a,b){return new V.P(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aq.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aq))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.cH.prototype={
ga0:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cH))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.z.prototype={
bP:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.q(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.q(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.z(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.x().a){u=$.jB
return u==null?$.jB=new V.z(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.z(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=this.a
s=$.x()
s.toString
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.q(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.v.prototype={
bP:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bQ:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.v(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aJ:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.v(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.v(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.v(-this.a,-this.b,-this.c)},
p:function(a,b){if(Math.abs(b-0)<$.x().a)return V.bQ()
return new V.v(this.a/b,this.b/b,this.c/b)},
cY:function(){var u=$.x().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.v))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.eh.prototype={
b7:function(a){var u=V.lZ(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.y():u},
L:function(a){var u=this.y
if(u!=null)u.w(a)},
sc2:function(a,b){},
sbR:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.x().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.b7(u)}s=new D.u("maximumLocation",s,t.b)
s.b=!0
t.L(s)}},
sbU:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.x().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.b7(u)}s=new D.u("minimumLocation",s,t.c)
s.b=!0
t.L(s)}},
sW:function(a,b){var u,t=this
b=t.b7(b)
u=t.d
if(!(Math.abs(u-b)<$.x().a)){t.d=b
u=new D.u("location",u,b)
u.b=!0
t.L(u)}},
sbS:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.x().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.u("maximumVelocity",r,a)
r.b=!0
s.L(r)}},
sN:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.x().a)){u.f=a
t=new D.u("velocity",t,a)
t.b=!0
u.L(t)}},
sbE:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.x().a)){this.x=a
u=new D.u("dampening",u,a)
u.b=!0
this.L(u)}},
a8:function(a,b){var u,t,s,r=this,q=r.f,p=$.x().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sW(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.x().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sN(u)}}}
U.cb.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.y():u},
az:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cb))return!1
return J.B(this.a,b.a)},
h:function(a){return"Constant: "+this.a.B("          ")}}
U.bx.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.y():u},
L:function(a){var u=this.e
if(u!=null)u.w(a)},
Z:function(){return this.L(null)},
dQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gat(),s=[{func:1,ret:-1,args:[D.N]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aD()
u.b=!0
this.L(u)},
eu:function(a,b){var u,t
for(u=b.gO(b),t=this.gat();u.v();)u.gH(u).gm().E(0,t)
u=new D.aE()
u.b=!0
this.L(u)},
az:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a3()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.T(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.az(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bb():u
r=s.e
if(r!=null)r.ad(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bx))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.B(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.Z]},
$aai:function(){return[U.Z]},
$iZ:1}
U.Z.prototype={}
U.d1.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.y():u},
L:function(a){var u=this.cy
if(u!=null)u.w(a)},
Z:function(){return this.L(null)},
aG:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcN().k(0,u.gbf())
u.a.c.gcZ().k(0,u.gbh())
u.a.c.gc1().k(0,u.gbj())
return!0},
bg:function(a){var u=this
if(!J.B(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bi:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$ian")
if(!n.y)return
if(n.x){u=a.d.G(0,a.y)
u=new V.z(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.G(0,a.y)
u=new V.z(t.a,t.b).u(0,2).p(0,u.ga0())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.q(s)
t.sN(u*10*s)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=new V.z(s.a,s.b).u(0,2).p(0,u.ga0())
s=n.b
q=r.a
if(typeof q!=="number")return q.M()
p=n.e
if(typeof p!=="number")return H.q(p)
o=n.z
if(typeof o!=="number")return H.q(o)
s.sW(0,-q*p+o)
n.b.sN(0)
t=t.G(0,a.z)
n.Q=new V.z(t.a,t.b).u(0,2).p(0,u.ga0())}n.Z()},
bk:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.q(s)
u.sN(t*10*s)
r.Z()}},
az:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a3()
if(q<p){r.ch=p
u=b.y
r.b.a8(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ae(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iZ:1}
U.d2.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.y():u},
L:function(a){var u=this.fx
if(u!=null)u.w(a)},
Z:function(){return this.L(null)},
aG:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcN().k(0,s.gbf())
s.a.c.gcZ().k(0,s.gbh())
s.a.c.gc1().k(0,s.gbj())
u=s.a.d
t=u.f
u=t==null?u.f=D.y():t
u.k(0,s.gdJ())
u=s.a.d
t=u.d
u=t==null?u.d=D.y():t
u.k(0,s.gdL())
u=s.a.e
t=u.b
u=t==null?u.b=D.y():t
u.k(0,s.geY())
u=s.a.e
t=u.d
u=t==null?u.d=D.y():t
u.k(0,s.geW())
u=s.a.e
t=u.c
u=t==null?u.c=D.y():t
u.k(0,s.geU())
return!0},
ab:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.z(u,t)},
bg:function(a){var u=this
H.l(a,"$ian")
if(!J.B(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bi:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$ian")
if(!n.cx)return
if(n.ch){u=a.d.G(0,a.y)
u=new V.z(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.G(0,a.y)
u=n.ab(new V.z(t.a,t.b).u(0,2).p(0,u.ga0()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=n.ab(new V.z(s.a,s.b).u(0,2).p(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sW(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sW(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.G(0,a.z)
n.dx=n.ab(new V.z(t.a,t.b).u(0,2).p(0,u.ga0()))}n.Z()},
bk:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sN(-t*10*u)
r.Z()}},
dK:function(a){var u=this
if(H.l(a,"$ict").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dM:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$ian")
if(!J.B(n.d,a.x.b))return
u=a.c
t=a.d
s=t.G(0,a.y)
r=n.ab(new V.z(s.a,s.b).u(0,2).p(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sW(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sW(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.G(0,a.z)
n.dx=n.ab(new V.z(t.a,t.b).u(0,2).p(0,u.ga0()))
n.Z()},
eZ:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eX:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$icW")
if(!n.cx)return
if(n.ch){u=a.d.G(0,a.y)
u=new V.z(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.G(0,a.y)
u=n.ab(new V.z(t.a,t.b).u(0,2).p(0,u.ga0()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=n.ab(new V.z(s.a,s.b).u(0,2).p(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sW(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sW(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.G(0,a.z)
n.dx=n.ab(new V.z(t.a,t.b).u(0,2).p(0,u.ga0()))}n.Z()},
eV:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sN(-t*10*u)
r.Z()}},
az:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a3()
if(q<p){r.dy=p
u=b.y
r.c.a8(0,u)
r.b.a8(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ae(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.ae(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iZ:1}
U.d3.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.y():u},
L:function(a){var u=this.r
if(u!=null)u.w(a)},
aG:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.y():t
t=r.gdN()
u.k(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.y():s).k(0,t)
return!0},
dO:function(a){var u,t,s,r,q=this
if(!J.B(q.b,q.a.b.c))return
H.l(a,"$ibD")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.u("zoom",u,r)
u.b=!0
q.L(u)}},
az:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ae(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iZ:1}
M.ca.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.y():u},
S:function(a){var u=this.r
if(u!=null)u.w(a)},
aD:function(){return this.S(null)},
ey:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gR(),s=[{func:1,ret:-1,args:[D.N]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aD()
u.b=!0
this.S(u)},
eA:function(a,b){var u,t
for(u=b.gO(b),t=this.gR();u.v();)u.gH(u).gm().E(0,t)
u=new D.aE()
u.b=!0
this.S(u)},
a1:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.T(u,u.length);u.v();){t=u.d
if(t!=null)t.a1(a)}s.f=!1},
$ai:function(){return[M.a7]},
$aai:function(){return[M.a7]},
$ia7:1}
M.cc.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.y():u},
S:function(a){var u=this.r
if(u!=null)u.w(a)},
aD:function(){return this.S(null)},
saH:function(a){var u,t,s=this
if(a==null)a=new X.eK()
u=s.b
if(u!==a){if(u!=null)u.gm().E(0,s.gR())
t=s.b
s.b=a
a.gm().k(0,s.gR())
u=new D.u("camera",t,s.b)
u.b=!0
s.S(u)}},
saR:function(a,b){var u,t,s=this
if(b==null)b=X.iI(null)
u=s.c
if(u!==b){if(u!=null)u.gm().E(0,s.gR())
t=s.c
s.c=b
b.gm().k(0,s.gR())
u=new D.u("target",t,s.c)
u.b=!0
s.S(u)}},
saS:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().E(0,t.gR())
u=t.d
t.d=a
if(a!=null)a.gm().k(0,t.gR())
s=new D.u("technique",u,t.d)
s.b=!0
t.S(s)}},
a1:function(a){var u=this
a.bX(u.d)
u.c.T(a)
u.b.T(a)
u.e.a8(0,a)
u.e.a1(a)
u.b.aq(a)
u.c.toString
a.bW()},
$ia7:1}
M.ch.prototype={
S:function(a){var u=this.y
if(u!=null)u.w(a)},
aD:function(){return this.S(null)},
e_:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gR(),s=[{func:1,ret:-1,args:[D.N]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b5()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aD()
u.b=!0
this.S(u)},
e1:function(a,b){var u,t
for(u=b.gO(b),t=this.gR();u.v();)u.gH(u).gm().E(0,t)
u=new D.aE()
u.b=!0
this.S(u)},
saH:function(a){var u,t,s=this
if(a==null)a=X.jl(null)
u=s.b
if(u!==a){if(u!=null)u.gm().E(0,s.gR())
t=s.b
s.b=a
a.gm().k(0,s.gR())
u=new D.u("camera",t,s.b)
u.b=!0
s.S(u)}},
saR:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().E(0,t.gR())
u=t.c
t.c=b
b.gm().k(0,t.gR())
s=new D.u("target",u,t.c)
s.b=!0
t.S(s)}},
saS:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().E(0,t.gR())
u=t.d
t.d=a
if(a!=null)a.gm().k(0,t.gR())
s=new D.u("technique",u,t.d)
s.b=!0
t.S(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.y():u},
a1:function(a){var u,t=this
a.bX(t.d)
t.c.T(a)
t.b.T(a)
u=t.d
if(u!=null)u.a8(0,a)
for(u=t.e.a,u=new J.T(u,u.length);u.v();)u.d.a8(0,a)
for(u=t.e.a,u=new J.T(u,u.length);u.v();)u.d.a1(a)
t.b.toString
a.cy.ao()
a.db.ao()
t.c.toString
a.bW()},
$ia7:1}
M.a7.prototype={}
A.c6.prototype={}
A.e6.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fl:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cM:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.O.prototype={
ga9:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.O))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.f1.prototype={
dh:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aN("")
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
A.lf(c0,u)
A.lh(c0,u)
A.lg(c0,u)
A.lj(c0,u)
A.lk(c0,u)
A.li(c0,u)
A.ll(c0,u)
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
b5.cX(0,s.charCodeAt(0)==0?s:s,A.le(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.l(b5.y.P(0,"invViewMat"),"$ia_")
if(t)b5.dy=H.l(b5.y.P(0,"objMat"),"$ia_")
if(r)b5.fr=H.l(b5.y.P(0,"viewObjMat"),"$ia_")
b5.fy=H.l(b5.y.P(0,"projViewObjMat"),"$ia_")
if(c0.ry)b5.k1=H.l(b5.y.P(0,"txt2DMat"),"$ibM")
if(c0.x1)b5.k2=H.l(b5.y.P(0,"txtCubeMat"),"$ia_")
if(c0.x2)b5.k3=H.l(b5.y.P(0,"colorMat"),"$ia_")
b5.r1=H.c([],[A.a_])
t=c0.y2
if(t>0){b5.k4=b5.y.P(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.p(P.o(b7+q+b8))
s.push(H.l(m,"$ia_"))}}if(c0.a.a)b5.r2=H.l(b5.y.P(0,"emissionClr"),"$iC")
if(c0.b.a)b5.x1=H.l(b5.y.P(0,"ambientClr"),"$iC")
if(c0.c.a)b5.y2=H.l(b5.y.P(0,"diffuseClr"),"$iC")
if(c0.d.a)b5.cP=H.l(b5.y.P(0,"invDiffuseClr"),"$iC")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.cR=H.l(b5.y.P(0,"shininess"),"$iL")
if(t)b5.cQ=H.l(b5.y.P(0,"specularClr"),"$iC")}if(c0.cy){b5.cS=H.l(b5.y.P(0,"envSampler"),"$iaR")
if(c0.r.a)b5.cT=H.l(b5.y.P(0,"reflectClr"),"$iC")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.cU=H.l(b5.y.P(0,"refraction"),"$iL")
if(t)b5.cV=H.l(b5.y.P(0,"refractClr"),"$iC")}}if(c0.y.a)b5.cW=H.l(b5.y.P(0,"alpha"),"$iL")
t=P.w
s=[t,A.cZ]
b5.bF=new H.I(s)
b5.bG=new H.I([t,[P.ba,A.bL]])
b5.bH=new H.I(s)
b5.bI=new H.I([t,[P.ba,A.bN]])
b5.bJ=new H.I(s)
b5.bK=new H.I([t,[P.ba,A.bO]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.bL],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ae()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.p(P.o(b7+g+b8))
H.l(m,"$iC")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.p(P.o(b7+g+b8))
H.l(f,"$iC")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.p(P.o(b7+g+b8))
H.l(e,"$iC")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.p(P.o(b7+g+b8))
H.l(m,"$iC")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.p(P.o(b7+g+b8))
H.l(f,"$iC")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$ibh")
a=e}else a=b6
h.push(new A.bL(b,c,d,m,f,a))}b5.bG.l(0,j,h)
q=b5.bF
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}for(t=c0.Q,s=t.length,r=[A.bN],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.l(m,"$iC")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$iC")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$iC")
if(typeof j!=="number")return j.ae()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$ibM")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$iaR")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$iaR")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.p(P.o(b7+o+b8))
H.l(a2,"$ibK")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.p(P.o(b7+o+b8))
H.l(a2,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.p(P.o(b7+o+b8))
H.l(a5,"$iL")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.bN(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bI.l(0,j,h)
q=b5.bH
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}for(t=c0.ch,s=t.length,r=[A.bO],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.l(m,"$iC")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$iC")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$iC")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$iC")
if(typeof j!=="number")return j.ae()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.p(P.o(b7+o+b8))
H.l(a2,"$iC")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.p(P.o(b7+o+b8))
H.l(a5,"$iC")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.p(P.o(b7+o+b8))
H.l(a9,"$iL")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.p(P.o(b7+o+b8))
H.l(b0,"$iL")
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
if(a2==null)H.p(P.o(b7+g+b8))
H.l(a2,"$ibK")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.p(P.o(b7+g+b8))
H.l(a2,"$iL")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.p(P.o(b7+g+b8))
H.l(a5,"$iL")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.p(P.o(b7+g+b8))
H.l(a2,"$iL")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.p(P.o(b7+g+b8))
H.l(a5,"$iL")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.p(P.o(b7+g+b8))
H.l(a9,"$iL")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.p(P.o(b7+g+b8))
H.l(a2,"$ibh")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.p(P.o(b7+o+b8))
H.l(a2,"$ibh")
a3=a2}else a3=b6
h.push(new A.bO(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bK.l(0,j,h)
q=b5.bJ
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}}},
eO:function(a,b){if(b!=null&&b.d>=6)a.c5(b)}}
A.ce.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cF.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.cM.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.f4.prototype={
h:function(a){return this.aM}}
A.bL.prototype={}
A.bN.prototype={}
A.bO.prototype={}
A.cJ.prototype={
cb:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cX:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cn(b,35633)
r.f=r.cn(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.o("Failed to link shader: "+H.e(s)))}r.eQ()
r.eS()},
T:function(a){a.a.useProgram(this.r)
this.x.fl()},
cn:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
eQ:function(){var u,t,s,r=this,q=H.c([],[A.c6]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.c6(p,t.name,s))}r.x=new A.e6(q)},
eS:function(){var u,t,s,r=this,q=H.c([],[A.cY]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fd(t.type,t.size,t.name,s))}r.y=new A.ho(q)},
au:function(a,b,c){var u=this.a
if(a===1)return new A.cZ(u,b,c)
else return A.iR(u,this.r,b,a,c)},
dD:function(a,b,c){var u=this.a
if(a===1)return new A.bh(u,b,c)
else return A.iR(u,this.r,b,a,c)},
dE:function(a,b,c){var u=this.a
if(a===1)return new A.aR(u,b,c)
else return A.iR(u,this.r,b,a,c)},
aY:function(a,b){return new P.de(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fd:function(a,b,c,d){var u=this
switch(a){case 5120:return u.au(b,c,d)
case 5121:return u.au(b,c,d)
case 5122:return u.au(b,c,d)
case 5123:return u.au(b,c,d)
case 5124:return u.au(b,c,d)
case 5125:return u.au(b,c,d)
case 5126:return new A.L(u.a,c,d)
case 35664:return new A.hk(u.a,c,d)
case 35665:return new A.C(u.a,c,d)
case 35666:return new A.bK(u.a,c,d)
case 35667:return new A.hl(u.a,c,d)
case 35668:return new A.hm(u.a,c,d)
case 35669:return new A.hn(u.a,c,d)
case 35674:return new A.hp(u.a,c,d)
case 35675:return new A.bM(u.a,c,d)
case 35676:return new A.a_(u.a,c,d)
case 35678:return u.dD(b,c,d)
case 35680:return u.dE(b,c,d)
case 35670:throw H.f(u.aY("BOOL",c))
case 35671:throw H.f(u.aY("BOOL_VEC2",c))
case 35672:throw H.f(u.aY("BOOL_VEC3",c))
case 35673:throw H.f(u.aY("BOOL_VEC4",c))
default:throw H.f(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.fS.prototype={}
A.cY.prototype={}
A.ho.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
P:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.J()},
J:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.cZ.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hl.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hm.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hn.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hj.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.L.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hk.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.C.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bK.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hp.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bM.prototype={
a6:function(a){var u=new Float32Array(H.c0(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a_.prototype={
a6:function(a){var u=new Float32Array(H.c0(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bh.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.aR.prototype={
c5:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.id.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bQ(s.b,b).bQ(s.d.bQ(s.c,b),c)
a.sW(0,new V.P(r.a,r.b,r.c))
a.sfV(r.p(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
u=new V.aq(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.B(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.V()}t.f.$3(a,b,c)}}
F.iu.prototype={
$2:function(a,b){return 0}}
F.iv.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.q(s)
u=this.b+s
s=a.f
t=new V.v(s.a,s.b,s.c)
s=t.p(0,Math.sqrt(t.A(t)))
a.sW(0,new V.P(s.a*u,s.b*u,s.c*u))}}
F.az.prototype={
aK:function(){var u=this
if(!u.gaL()){C.a.E(u.a.a.d.b,u)
u.a.a.V()}u.bq()
u.br()
u.eJ()},
bv:function(a){this.a=a
a.d.b.push(this)},
bw:function(a){this.b=a
a.d.c.push(this)},
eP:function(a){this.c=a
a.d.d.push(this)},
bq:function(){var u=this.a
if(u!=null){C.a.E(u.d.b,this)
this.a=null}},
br:function(){var u=this.b
if(u!=null){C.a.E(u.d.c,this)
this.b=null}},
eJ:function(){var u=this.c
if(u!=null){C.a.E(u.d.d,this)
this.c=null}},
gaL:function(){return this.a==null||this.b==null||this.c==null},
dz:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bQ()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.cY())return
return s.p(0,Math.sqrt(s.A(s)))},
dB:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.G(0,q)
r=new V.v(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.A(r)))
r=t.G(0,q)
r=new V.v(r.a,r.b,r.c)
r=s.aJ(r.p(0,Math.sqrt(r.A(r))))
return r.p(0,Math.sqrt(r.A(r)))},
bA:function(){var u,t=this
if(t.d!=null)return!0
u=t.dz()
if(u==null){u=t.dB()
if(u==null)return!1}t.d=u
t.a.a.V()
return!0},
dw:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bQ()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.cY())return
return s.p(0,Math.sqrt(s.A(s)))},
dA:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.x().a){l=d.G(0,g)
l=new V.v(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.M(0)}else{p=(l-u.b)/r
l=d.G(0,g)
l=new V.P(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).G(0,j)
l=new V.v(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.M(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.A(l)))
l=o.aJ(q)
l=l.p(0,Math.sqrt(l.A(l))).aJ(o)
q=l.p(0,Math.sqrt(l.A(l)))}return q},
by:function(){var u,t=this
if(t.e!=null)return!0
u=t.dw()
if(u==null){u=t.dA()
if(u==null)return!1}t.e=u
t.a.a.V()
return!0},
gf9:function(a){var u=this
if(J.B(u.a,u.b))return!0
if(J.B(u.b,u.c))return!0
if(J.B(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
B:function(a){var u,t,s=this
if(s.gaL())return a+"disposed"
u=a+C.b.a5(J.a0(s.a.e),0)+", "+C.b.a5(J.a0(s.b.e),0)+", "+C.b.a5(J.a0(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
J:function(){return this.B("")}}
F.eA.prototype={}
F.fR.prototype={
aO:function(a,b,c){var u,t=b.a
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bB.prototype={
aK:function(){var u=this
if(!u.gaL()){C.a.E(u.a.a.c.b,u)
u.a.a.V()}u.bq()
u.br()},
bv:function(a){this.a=a
a.c.b.push(this)},
bw:function(a){this.b=a
a.c.c.push(this)},
bq:function(){var u=this.a
if(u!=null){C.a.E(u.c.b,this)
this.a=null}},
br:function(){var u=this.b
if(u!=null){C.a.E(u.c.c,this)
this.b=null}},
gaL:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
B:function(a){if(this.gaL())return a+"disposed"
return a+C.b.a5(J.a0(this.a.e),0)+", "+C.b.a5(J.a0(this.b.e),0)},
J:function(){return this.B("")}}
F.eS.prototype={}
F.hi.prototype={
aO:function(a,b,c){var u,t=b.a
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
return t==u.e}else{t=b.a
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
return t==u.e}else return!1}}}
F.bG.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
B:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a5(J.a0(u.e),0)},
J:function(){return this.B("")}}
F.fK.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.y():u},
bT:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.q()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.k(0,r.fc())}h.a.q()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.k(0,n)
o=new F.bG()
if(n.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.k(0,l)
p.a.k(0,k)
F.kp(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.k(0,l)
o.a.k(0,k)
o.a.k(0,i)
F.bw(l,k,i)}g=h.e
if(g!=null)g.ad(0)},
aj:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aj()||!1
if(!t.a.aj())u=!1
s=t.e
if(s!=null)s.ad(0)
return u},
fw:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.e_(o,0)])
for(o=[F.aS];u.length!==0;){t=C.a.gfo(u)
C.a.d3(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aO(0,t,q)){s.push(q)
C.a.d3(u,r)}}if(s.length>1)b.bT(s)}}p.a.q()
p.c.bY()
p.d.bY()
p.b.fO()
p.c.bZ(new F.hi())
p.d.bZ(new F.fR())
o=p.e
if(o!=null)o.ad(0)},
cH:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.a9()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aw().a)!==0)++s
if((t&$.av().a)!==0)++s
if((t&$.aZ().a)!==0)++s
if((t&$.b_().a)!==0)++s
if((t&$.c4().a)!==0)++s
if((t&$.c5().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.au().a)!==0)++s
r=a4.gc6(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.H])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.c8])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.f3(m)
k=l.gc6(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.c8(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].fv(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.c0(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bs(new Z.d4(a1,d),o,a4)
c.b=H.c([],[Z.b6])
if(a0.b.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)}a=Z.iT(u,34963,b)
c.b.push(new Z.b6(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.q()
b.push(t.e)}a=Z.iT(u,34963,b)
c.b.push(new Z.b6(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.q()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.q()
b.push(t.e)}a=Z.iT(u,34963,b)
c.b.push(new Z.b6(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.r])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.B(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.B(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.B(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.B(t))}return C.a.t(s,"\n")},
V:function(){var u=this.e
if(u!=null)u.w(null)}}
F.fL.prototype={
f1:function(a){var u,t,s,r,q=H.c([],[F.az]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.k(0,p)
u.a.k(0,s)
u.a.k(0,r)
q.push(F.bw(p,s,r))}return q},
f2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.az])
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
h.push(F.bw(m,l,j))
u.a.k(0,m)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bw(m,j,i))}else{n.k(0,l)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bw(l,j,i))
u.a.k(0,l)
u.a.k(0,i)
u.a.k(0,m)
h.push(F.bw(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
bZ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aO(0,p,n)){p.aK()
break}}}}},
bY:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gf9(s)
if(t)s.aK()}},
aj:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bA())s=!1
return s},
bz:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].by())s=!1
return s},
h:function(a){return this.J()},
B:function(a){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(a))
return C.a.t(r,"\n")},
J:function(){return this.B("")}}
F.fM.prototype={
gj:function(a){return this.b.length},
bZ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aO(0,p,n)){p.aK()
break}}}}},
bY:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.B(s.a,s.b)
if(t)s.aK()}},
h:function(a){return this.J()},
B:function(a){var u,t,s=H.c([],[P.r]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].B(a+(""+u+". ")))}return C.a.t(s,"\n")},
J:function(){return this.B("")}}
F.fN.prototype={
gj:function(a){return this.b.length},
fO:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.E(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.w(null)}s=t.a
if(s!=null){C.a.E(s.b.b,t)
t.a=null}}}},
h:function(a){return this.J()},
B:function(a){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(a))
return C.a.t(r,"\n")},
J:function(){return this.B("")}}
F.aS.prototype={
bD:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hA(u.cx,r,o,t,s,q,p,a,n)},
fc:function(){return this.bD(null)},
sW:function(a,b){var u
if(!J.B(this.f,b)){this.f=b
u=this.a
if(u!=null)u.V()}},
sfV:function(a){var u
if(!J.B(this.z,a)){this.z=a
u=this.a
if(u!=null)u.V()}},
fv:function(a){var u,t,s=this
if(a.n(0,$.a9())){u=s.f
t=[P.H]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.aw())){u=s.r
t=[P.H]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.av())){u=s.x
t=[P.H]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.aZ())){u=s.y
t=[P.H]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.b_())){u=s.z
t=[P.H]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.c4())){u=s.Q
t=[P.H]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.c5())){u=s.Q
t=[P.H]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bn()))return H.c([s.ch],[P.H])
else if(a.n(0,$.au())){u=s.cx
t=[P.H]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.H])},
bA:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bQ()
t.d.I(0,new F.hL(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.ad(0)}return!0},
by:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bQ()
t.d.I(0,new F.hK(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.ad(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
B:function(a){var u,t,s=this,r="-",q=H.c([],[P.r])
q.push(C.b.a5(J.a0(s.e),0))
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
q.push(V.A(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.t(q,", ")
return a+"{"+t+"}"},
J:function(){return this.B("")}}
F.hL.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.hK.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.hB.prototype={
q:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
k:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.V()
return!0},
aZ:function(a,b,c,d,e,f){var u=F.hA(a,null,b,c,null,d,e,f,0)
this.k(0,u)
return u},
gj:function(a){return this.c.length},
aj:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bA()
return!0},
bz:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].by()
return!0},
f8:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.B(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
h:function(a){return this.J()},
B:function(a){var u,t,s,r
this.q()
u=H.c([],[P.r])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].B(a))
return C.a.t(u,"\n")},
J:function(){return this.B("")}}
F.hC.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
I:function(a,b){var u=this
C.a.I(u.b,b)
C.a.I(u.c,new F.hD(u,b))
C.a.I(u.d,new F.hE(u,b))},
h:function(a){return this.J()},
J:function(){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.t(r,"\n")}}
F.hD.prototype={
$1:function(a){if(!J.B(a.a,this.a))this.b.$1(a)}}
F.hE.prototype={
$1:function(a){var u=this.a
if(!J.B(a.a,u)&&!J.B(a.b,u))this.b.$1(a)}}
F.hF.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.J()},
J:function(){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.t(r,"\n")}}
F.hH.prototype={}
F.hG.prototype={
aO:function(a,b,c){return J.B(b.f,c.f)}}
F.hI.prototype={}
F.fr.prototype={
bT:function(a){var u,t,s,r,q,p,o,n,m=V.bQ()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.v(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.p(0,Math.sqrt(m.A(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.p(0,Math.sqrt(p*p+o*o+n*n))}if(!J.B(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.w(null)}}}return}}
F.hJ.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.J()},
J:function(){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.t(r,"\n")}}
O.cw.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.y():u},
U:function(a){var u=this.fr
if(u!=null)u.w(a)},
bo:function(){return this.U(null)},
ct:function(a){this.a=null
this.U(a)},
eM:function(){return this.ct(null)},
dU:function(a,b){var u=new D.aD()
u.b=!0
this.U(u)},
dW:function(a,b){var u=new D.aE()
u.b=!0
this.U(u)},
ck:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.w,h=new H.I([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=h.i(0,0)
h.l(0,0,r==null?1:r)}q=H.c([],[A.ce])
h.I(0,new O.f8(j,q))
C.a.b6(q,new O.f9())
p=new H.I([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){o=u[s]
r=o.gaI()
n=p.i(0,o.gaI())
p.l(0,r,n==null?1:n)}m=H.c([],[A.cF])
p.I(0,new O.fa(j,m))
C.a.b6(m,new O.fb())
l=new H.I([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.m)(i),++s){o=i[s]
t=o.gaI()
r=l.i(0,o.gaI())
l.l(0,t,r==null?1:r)}k=H.c([],[A.cM])
l.I(0,new O.fc(j,k))
C.a.b6(k,new O.fd())
i=C.d.a_(j.e.a.length+3,4)
j.dy.e
return A.kv(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
dv:function(a,b){if(b!=null)if(!C.a.ac(a,b)){b.a=a.length
a.push(b)}},
a8:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.T(u,u.length);u.v();){t=u.d
t.toString
s=$.hz
if(s==null)s=$.hz=new V.v(0,0,1)
t.a=s
r=$.hy
t.d=r==null?$.hy=new V.v(0,1,0):r
r=$.hx
t.e=r==null?$.hx=new V.v(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.b4(s)
r=s.a
p=s.b
o=s.c
t.a=s.p(0,Math.sqrt(r*r+p*p+o*o))
o=q.b4(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.p(0,Math.sqrt(p*p+r*r+s*s))
s=q.b4(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.p(0,Math.sqrt(r*r+p*p+o*o))}}}},
d4:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.ck()
u=b1.fr.i(0,b0.aM)
if(u==null){u=A.ku(b0,b1.a)
b1.cE(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.cO
b0=b2.e
if(!(b0 instanceof Z.bs))b0=b2.e=null
if(b0==null||!b0.d.n(0,s)){b0=t.k3
if(b0)b2.d.aj()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bz()
q.a.bz()
q=q.e
if(q!=null)q.ad(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.f8()
p=p.e
if(p!=null)p.ad(0)}n=b2.d.cH(new Z.d5(b1.a),s)
n.al($.a9()).e=a9.a.Q.c
if(b0)n.al($.aw()).e=a9.a.cx.c
if(r)n.al($.av()).e=a9.a.ch.c
if(t.r1)n.al($.aZ()).e=a9.a.cy.c
if(q)n.al($.b_()).e=a9.a.db.c
if(t.rx)n.al($.au()).e=a9.a.dx.c
b2.e=n}m=H.c([],[T.cR])
a9.a.T(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.gX(r)
b0=b0.dy
b0.toString
b0.a6(r.a2(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.gX(r)
q=b1.dx
q=b1.cx=r.u(0,q.gX(q))
r=q}b0=b0.fr
b0.toString
b0.a6(r.a2(0,!0))}b0=a9.a
r=b1.ch
if(r==null){r=b1.gfN()
q=b1.dx
q=b1.ch=r.u(0,q.gX(q))
r=q}b0=b0.fy
b0.toString
b0.a6(r.a2(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.a6(C.i.a2(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.a6(C.i.a2(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.a6(C.i.a2(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.b(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.b(b0,k)
b0=b0[k]
j=new Float32Array(H.c0(r.a2(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}if(t.a.a){b0=a9.a
r=a9.f.f
b0=b0.r2
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}if(t.id){if(t.b.a){b0=a9.a
r=a9.r.f
b0=b0.x1
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}if(t.c.a){b0=a9.a
r=a9.x.f
b0=b0.y2
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}if(t.d.a){b0=a9.a
r=a9.y.f
b0=b0.cP
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.e.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.z.ch
r=r.cR
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.z.f
b0=b0.cQ
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.z
if(b0.length>0){r=b1.db
i=r.gX(r)
r=P.w
h=new H.I([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.l(0,0,e+1)
d=J.e1(a9.a.bG.i(0,0),e)
p=i.b4(f.a)
o=p.a
c=p.b
b=p.c
b=p.p(0,Math.sqrt(o*o+c*c+b*b))
c=d.e
o=b.a
p=b.b
b=b.c
c.a.uniform3f(c.d,o,p,b)
b=f.c
p=d.f
p.a.uniform3f(p.d,b.a,b.b,b.c)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.m)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.bF.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.gX(r)
r=P.w
a=new H.I([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
a0=f.gaI()
e=a.i(0,a0)
if(e==null)e=0
a.l(0,a0,e+1)
d=J.e1(a9.a.bI.i(0,a0),e)
a1=i.u(0,f.gX(f))
p=f.gX(f)
o=$.bH
p=p.c0(o==null?$.bH=new V.P(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.bH
p=a1.c0(p==null?$.bH=new V.P(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gak(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gap()
p=a1.bN(0)
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
j=new Float32Array(H.c0(new V.cy(o,c,b,a2,a3,a4,a5,a6,p).a2(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gap()
p=f.gap()
if(!C.a.ac(m,p)){p.a=m.length
m.push(p)}p=f.gap()
o=p.gaN(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaB()
p=f.gda()
o=d.x
o.toString
c=p.gfh(p)
b=p.gfi(p)
a2=p.gfj()
p=p.gfg()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaB()
if(!C.a.ac(m,p)){p.a=m.length
m.push(p)}p=f.gaB()
o=p.gaN(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gfm()){p=f.gf4()
o=d.y
o.a.uniform1f(o.d,p)
p=f.gf5()
o=d.z
o.a.uniform1f(o.d,p)
p=f.gf6()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.m)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.bH.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.gX(r)
r=P.w
a8=new H.I([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
a0=f.gaI()
e=a8.i(0,a0)
if(e==null)e=0
a8.l(0,a0,e+1)
d=J.e1(a9.a.bK.i(0,a0),e)
p=f.gfM(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gh2(f).hj()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.c0(f.gfM(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gak(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gap()
p=f.gc1()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gc_(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.ghk()
o=d.x
o.a.uniform1f(o.d,p)
p=f.ghl()
o=d.y
o.a.uniform1f(o.d,p)
f.gap()
p=f.gap()
if(!C.a.ac(m,p)){p.a=m.length
m.push(p)}p=f.gap()
o=p.gaN(p)
if(o){o=d.dx
o.toString
c=p.gaN(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.gfq(p)
o.a.uniform1i(o.d,p)}}f.gaB()
p=f.gda()
o=d.z
o.toString
c=p.gfh(p)
b=p.gfi(p)
a2=p.gfj()
p=p.gfg()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaB()
if(!C.a.ac(m,p)){p.a=m.length
m.push(p)}p=f.gaB()
o=p.gaN(p)
if(o){o=d.dy
o.toString
c=p.gaN(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.gfq(p)
o.a.uniform1i(o.d,p)}}if(f.gh3()){p=f.gh1()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.gh0()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.gfm()){p=f.gf4()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.gf5()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.gf6()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.m)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.bJ.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gX(r).bN(0)}b0=b0.id
b0.toString
b0.a6(r.a2(0,!0))}if(t.cy){a9.dv(m,a9.ch)
b0=a9.a
r=a9.ch
b0.eO(b0.cS,r)
if(t.r.a){b0=a9.a
r=a9.cx.f
b0=b0.cT
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.x.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.cy.ch
r=r.cU
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.cy.f
b0=b0.cV
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}}b0=t.y.a
r=!b0
if(r)q=!1
else q=!0
if(q){if(b0){b0=a9.a
q=a9.db.f
b0=b0.cW
b0.a.uniform1f(b0.d,q)}b0=b1.a
b0.enable(3042)
b0.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].T(b1)
b0=b2.e
b0.T(b1)
b0.a1(b1)
b0.aq(b1)
if(r)b0=!1
else b0=!0
if(b0)b1.a.disable(3042)
for(b0=b1.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b0.activeTexture(33984+r.a)
b0.bindTexture(34067,null)}}r=a9.a
r.toString
b0.useProgram(null)
r.x.cM()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.ck().aM}}
O.f8.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.ce(a,C.d.a_(b+3,4)*4))}}
O.f9.prototype={
$2:function(a,b){return J.iA(a.a,b.a)}}
O.fa.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cF(a,C.d.a_(b+3,4)*4))}}
O.fb.prototype={
$2:function(a,b){return J.iA(a.a,b.a)}}
O.fc.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cM(a,C.d.a_(b+3,4)*4))}}
O.fd.prototype={
$2:function(a,b){return J.iA(a.a,b.a)}}
O.f2.prototype={
ah:function(){var u,t=this
t.c9()
u=t.f
if(!(Math.abs(u-1)<$.x().a)){t.f=1
u=new D.u(t.b,u,1)
u.b=!0
t.a.U(u)}}}
O.cx.prototype={
ah:function(){},
bs:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ah()
u=s.a
u.a=null
u.U(null)}}}
O.f3.prototype={}
O.ad.prototype={
cv:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.u(s.b+".color",u,a)
t.b=!0
s.a.U(t)}},
ah:function(){this.c9()
this.cv(new V.J(1,1,1))},
sak:function(a,b){this.bs(new A.O(!0,!1,!1))
this.cv(b)}}
O.f5.prototype={}
O.f6.prototype={
cw:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.x().a)){u.ch=a
t=new D.u(u.b+".refraction",t,a)
t.b=!0
u.a.U(t)}},
ah:function(){this.ca()
this.cw(1)}}
O.f7.prototype={
cz:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.x().a)){u.ch=a
t=new D.u(u.b+".shininess",t,a)
t.b=!0
u.a.U(t)}},
ah:function(){this.ca()
this.cz(100)}}
O.cK.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.y():u},
U:function(a){var u=this.e
if(u!=null)u.w(a)},
bo:function(){return this.U(null)},
d4:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.fS(t,n)
u.cb(t,n)
u.cX(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.l(u.y.i(0,"fov"),"$iL")
u.ch=H.l(u.y.i(0,"ratio"),"$iL")
u.cx=H.l(u.y.i(0,"boxClr"),"$iC")
u.cy=H.l(u.y.i(0,"boxTxt"),"$iaR")
u.db=H.l(u.y.i(0,"viewMat"),"$ia_")
a.cE(u)}o.a=u}if(b.e==null){t=b.d.cH(new Z.d5(a.a),$.a9())
t.al($.a9()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.T(a)}t=a.d
s=a.c
r=o.a
r.T(a)
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
s=s.gX(s).bN(0)
r=r.db
r.toString
r.a6(s.a2(0,!0))
t=b.e
if(t instanceof Z.bs){t.T(a)
t.a1(a)
t.aq(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.cM()
t=o.c
if(t!=null)t.aq(a)}}
O.cQ.prototype={}
T.cR.prototype={}
T.h6.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.y():u},
T:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aq:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.h7.prototype={
av:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.M(u,"load",new T.h8(this,u,!1,b,!1,d,a),!1)},
eN:function(a,b,c){var u,t,s,r
b=V.j2(b)
u=V.j2(a.width)
t=V.j2(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iD()
s.width=u
s.height=t
r=C.f.d7(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lz(r.getImageData(0,0,s.width,s.height))}}}
T.h8.prototype={
$1:function(a){var u=this,t=u.a,s=t.eN(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.E.fU(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.fk()}++t.e}}
X.iC.prototype={}
X.eI.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.y():u},
aa:function(a){var u=this.x
if(u!=null)u.w(a)},
scI:function(a,b){var u
if(this.b){this.b=!1
u=new D.u("clearColor",!0,!1)
u.b=!0
this.aa(u)}},
T:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.q(u)
q=C.c.a7(r*u)
r=s.b
if(typeof t!=="number")return H.q(t)
p=C.c.a7(r*t)
r=C.c.a7(s.c*u)
a.c=r
s=C.c.a7(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.eK.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.y():u},
T:function(a){var u
a.cy.b2(V.bb())
u=V.bb()
a.db.b2(u)},
aq:function(a){a.cy.ao()
a.db.ao()}}
X.cE.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.y():u},
aa:function(a){var u=this.f
if(u!=null)u.w(a)},
ds:function(){return this.aa(null)},
T:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ae(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.b2(k)
r=$.jm
if(r==null){r=V.jo()
q=V.iS()
p=$.jC
r=V.ji(r,q,p==null?$.jC=new V.v(0,0,-1):p)
$.jm=r
u=r}else u=r
r=s.b
if(r!=null){t=r.az(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.b2(u)},
aq:function(a){a.cy.ao()
a.db.ao()}}
X.h2.prototype={}
V.it.prototype={
$1:function(a){var u=C.c.d6(this.a.gfp(),2)
if(u!=="0.00")P.j3(u+" fps")}}
V.fO.prototype={
dk:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.M(q,"scroll",new V.fQ(o),!1)},
cD:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.eR()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fZ(C.a.fu(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
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
if(H.lU(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.kZ(C.D,n,C.m,!1)
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
f_:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
eR:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.hb()
t=P.r
u.a=new H.I([t,R.cO])
u.b=new H.I([t,R.cV])
u.c=u.K(0,q)
t=u.K(0,q).t(0,p)
s=T.Q(new H.K("*"))
t.a.push(s)
t.c=!0
t=u.K(0,p).t(0,p)
s=new T.ao()
r=[T.cv]
s.a=H.c([],r)
t.a.push(s)
t=T.Q(new H.K("*"))
s.a.push(t)
t=u.K(0,p).t(0,"BoldEnd")
s=T.Q(new H.K("*"))
t.a.push(s)
t.c=!0
t=u.K(0,q).t(0,o)
s=T.Q(new H.K("_"))
t.a.push(s)
t.c=!0
t=u.K(0,o).t(0,o)
s=new T.ao()
s.a=H.c([],r)
t.a.push(s)
t=T.Q(new H.K("_"))
s.a.push(t)
t=u.K(0,o).t(0,n)
s=T.Q(new H.K("_"))
t.a.push(s)
t.c=!0
t=u.K(0,q).t(0,m)
s=T.Q(new H.K("`"))
t.a.push(s)
t.c=!0
t=u.K(0,m).t(0,m)
s=new T.ao()
s.a=H.c([],r)
t.a.push(s)
t=T.Q(new H.K("`"))
s.a.push(t)
t=u.K(0,m).t(0,"CodeEnd")
s=T.Q(new H.K("`"))
t.a.push(s)
t.c=!0
t=u.K(0,q).t(0,l)
s=T.Q(new H.K("["))
t.a.push(s)
t.c=!0
t=u.K(0,l).t(0,k)
s=T.Q(new H.K("|"))
t.a.push(s)
s=u.K(0,l).t(0,j)
t=T.Q(new H.K("]"))
s.a.push(t)
s.c=!0
s=u.K(0,l).t(0,l)
t=new T.ao()
t.a=H.c([],r)
s.a.push(t)
s=T.Q(new H.K("|]"))
t.a.push(s)
s=u.K(0,k).t(0,j)
t=T.Q(new H.K("]"))
s.a.push(t)
s.c=!0
s=u.K(0,k).t(0,k)
t=new T.ao()
t.a=H.c([],r)
s.a.push(t)
s=T.Q(new H.K("|]"))
t.a.push(s)
u.K(0,q).t(0,i).a.push(new T.e3())
s=u.K(0,i).t(0,i)
t=new T.ao()
t.a=H.c([],r)
s.a.push(t)
s=T.Q(new H.K("*_`["))
t.a.push(s)
s=u.K(0,"BoldEnd")
s.d=s.a.aT(p)
s=u.K(0,n)
s.d=s.a.aT(o)
s=u.K(0,"CodeEnd")
s.d=s.a.aT(m)
s=u.K(0,j)
s.d=s.a.aT("Link")
s=u.K(0,i)
s.d=s.a.aT(i)
this.b=u}}
V.fQ.prototype={
$1:function(a){P.jx(C.h,new V.fP(this.a))}}
V.fP.prototype={
$0:function(){var u=C.c.a7(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
O.ir.prototype={
$1:function(a){this.a.b.webkitRequestFullscreen()
return}};(function aliases(){var u=J.a.prototype
u.de=u.h
u=J.co.prototype
u.df=u.h
u=T.ck.prototype
u.dd=u.ay
u.c8=u.h
u=O.cx.prototype
u.c9=u.ah
u=O.ad.prototype
u.ca=u.ah})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lt","kS",6)
u(P,"lu","kT",6)
u(P,"lv","kU",6)
t(P,"jJ","lr",9)
var n
s(n=E.ak.prototype,"gd1",0,0,null,["$1","$0"],["d2","fE"],0,0)
s(n,"gd_",0,0,null,["$1","$0"],["d0","fB"],0,0)
r(n,"gfz","fA",3)
r(n,"gfC","fD",3)
s(n=E.cS.prototype,"gcd",0,0,null,["$1","$0"],["cf","ce"],0,0)
q(n,"gfQ","d5",9)
p(n=X.d0.prototype,"ge8","e9",4)
p(n,"gdX","dY",4)
p(n,"ge2","e3",2)
p(n,"gec","ed",10)
p(n,"gea","eb",10)
p(n,"geg","eh",2)
p(n,"gek","el",2)
p(n,"ge6","e7",2)
p(n,"gei","ej",2)
p(n,"ge4","e5",2)
p(n,"gem","en",17)
p(n,"geo","ep",4)
p(n,"geF","eG",5)
p(n,"geB","eC",5)
p(n,"geD","eE",5)
s(D.b3.prototype,"gdl",0,0,null,["$1","$0"],["af","dm"],0,0)
s(n=D.cq.prototype,"gcq",0,0,null,["$1","$0"],["cr","ee"],0,0)
p(n,"geq","er",18)
r(n,"gdR","dS",11)
r(n,"gev","ew",11)
o(V.z.prototype,"gj","bP",12)
o(V.v.prototype,"gj","bP",12)
s(n=U.bx.prototype,"gat",0,0,null,["$1","$0"],["L","Z"],0,0)
r(n,"gdP","dQ",13)
r(n,"ges","eu",13)
s(n=U.d1.prototype,"gat",0,0,null,["$1","$0"],["L","Z"],0,0)
p(n,"gbf","bg",1)
p(n,"gbh","bi",1)
p(n,"gbj","bk",1)
s(n=U.d2.prototype,"gat",0,0,null,["$1","$0"],["L","Z"],0,0)
p(n,"gbf","bg",1)
p(n,"gbh","bi",1)
p(n,"gbj","bk",1)
p(n,"gdJ","dK",1)
p(n,"gdL","dM",1)
p(n,"geY","eZ",1)
p(n,"geW","eX",1)
p(n,"geU","eV",1)
p(U.d3.prototype,"gdN","dO",1)
s(n=M.ca.prototype,"gR",0,0,null,["$1","$0"],["S","aD"],0,0)
r(n,"gex","ey",14)
r(n,"gez","eA",14)
s(M.cc.prototype,"gR",0,0,null,["$1","$0"],["S","aD"],0,0)
s(n=M.ch.prototype,"gR",0,0,null,["$1","$0"],["S","aD"],0,0)
r(n,"gdZ","e_",3)
r(n,"ge0","e1",3)
s(n=O.cw.prototype,"gbn",0,0,null,["$1","$0"],["U","bo"],0,0)
s(n,"geL",0,0,null,["$1","$0"],["ct","eM"],0,0)
r(n,"gdT","dU",15)
r(n,"gdV","dW",15)
s(O.cK.prototype,"gbn",0,0,null,["$1","$0"],["U","bo"],0,0)
s(X.cE.prototype,"gdr",0,0,null,["$1","$0"],["aa","ds"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.iM,J.a,J.T,P.dm,P.i,H.cs,P.eM,H.ci,H.hs,H.hg,P.b4,H.bt,H.dE,P.al,H.eT,H.eU,H.eO,P.dK,P.d6,P.cP,P.h0,P.cT,P.ic,P.i6,P.i1,P.dl,P.n,P.ef,P.ib,P.aY,P.a2,P.a6,P.ay,P.fv,P.cN,P.de,P.eH,P.ba,P.cu,P.aI,P.r,P.aN,W.el,W.E,W.cj,P.dP,P.i2,T.e3,T.ck,T.cv,T.fJ,R.cO,R.cU,R.cV,R.hb,O.ai,O.bC,E.eb,E.ak,E.fB,E.cS,Z.d4,Z.d5,Z.bs,Z.b6,Z.aT,D.ee,D.b5,D.N,X.c9,X.cp,X.eQ,X.eX,X.a3,X.fk,X.hc,X.d0,D.b3,D.Y,D.fy,D.fV,V.J,V.aj,V.ex,V.cy,V.am,V.S,V.P,V.aq,V.cH,V.z,V.v,U.d1,U.d2,U.d3,M.cc,M.ch,M.a7,A.c6,A.e6,A.O,A.ce,A.cF,A.cM,A.f4,A.bL,A.bN,A.bO,A.cY,A.ho,F.az,F.eA,F.bB,F.eS,F.bG,F.fK,F.fL,F.fM,F.fN,F.aS,F.hB,F.hC,F.hF,F.hH,F.hI,F.hJ,O.cQ,O.cx,O.f5,T.h7,X.iC,X.h2,X.eK,X.cE,V.fO])
s(J.a,[J.eN,J.cn,J.co,J.aF,J.bA,J.b7,H.bF,W.d,W.e2,W.c7,W.ac,W.D,W.d8,W.a1,W.ep,W.eq,W.da,W.cg,W.dc,W.es,W.h,W.df,W.aB,W.eJ,W.dh,W.aC,W.eW,W.fe,W.dn,W.dp,W.aH,W.dq,W.dt,W.aJ,W.dx,W.dz,W.aL,W.dA,W.aM,W.dF,W.ar,W.dI,W.ha,W.aP,W.dL,W.he,W.hu,W.dQ,W.dS,W.dU,W.dW,W.dY,P.b9,P.dj,P.bc,P.dv,P.fA,P.dG,P.bg,P.dN,P.e7,P.d7,P.cI,P.dC])
s(J.co,[J.fw,J.bP,J.aG])
t(J.iL,J.aF)
s(J.bA,[J.cm,J.cl])
t(P.eV,P.dm)
s(P.eV,[H.d_,W.hU,W.hT,P.eD])
t(H.K,H.d_)
s(P.i,[H.ev,H.f_,H.hN])
s(P.eM,[H.f0,H.hO])
s(P.b4,[H.fs,H.eP,H.hr,H.ed,H.fH,P.cD,P.aa,P.ht,P.hq,P.fX,P.ei,P.eo])
s(H.bt,[H.iz,H.h3,H.im,H.io,H.ip,P.hQ,P.hP,P.hR,P.hS,P.ia,P.i9,P.ii,P.i4,P.i5,P.eZ,P.et,P.eu,W.fg,W.fi,W.fG,W.h_,W.hX,P.ij,P.eE,P.eF,P.e9,E.fC,E.fD,E.fE,E.h9,D.ey,D.ez,F.id,F.iu,F.iv,F.hL,F.hK,F.hD,F.hE,O.f8,O.f9,O.fa,O.fb,O.fc,O.fd,T.h8,V.it,V.fQ,V.fP,O.ir])
s(H.h3,[H.fY,H.bq])
t(P.eY,P.al)
t(H.I,P.eY)
t(H.cr,H.ev)
t(H.cz,H.bF)
s(H.cz,[H.bS,H.bU])
t(H.bT,H.bS)
t(H.bE,H.bT)
t(H.bV,H.bU)
t(H.cA,H.bV)
s(H.cA,[H.fl,H.fm,H.fn,H.fo,H.fp,H.cB,H.fq])
t(P.i3,P.ic)
t(P.i0,P.i6)
t(P.ej,P.h0)
t(P.ew,P.ef)
t(P.hv,P.ew)
t(P.hw,P.ej)
s(P.a6,[P.H,P.w])
s(P.aa,[P.be,P.eL])
s(W.d,[W.G,W.eC,W.aK,W.bW,W.aO,W.as,W.bY,W.hM,W.bR,P.ea,P.b1])
s(W.G,[W.U,W.ax])
s(W.U,[W.k,P.j])
s(W.k,[W.e4,W.e5,W.b2,W.eG,W.bz,W.fI])
t(W.ek,W.ac)
t(W.bv,W.d8)
s(W.a1,[W.em,W.en])
t(W.db,W.da)
t(W.cf,W.db)
t(W.dd,W.dc)
t(W.er,W.dd)
t(W.aA,W.c7)
t(W.dg,W.df)
t(W.eB,W.dg)
t(W.di,W.dh)
t(W.by,W.di)
t(W.aQ,W.h)
s(W.aQ,[W.b8,W.af,W.bf])
t(W.ff,W.dn)
t(W.fh,W.dp)
t(W.dr,W.dq)
t(W.fj,W.dr)
t(W.du,W.dt)
t(W.cC,W.du)
t(W.dy,W.dx)
t(W.fx,W.dy)
t(W.fF,W.dz)
t(W.bX,W.bW)
t(W.fT,W.bX)
t(W.dB,W.dA)
t(W.fU,W.dB)
t(W.fZ,W.dF)
t(W.dJ,W.dI)
t(W.h4,W.dJ)
t(W.bZ,W.bY)
t(W.h5,W.bZ)
t(W.dM,W.dL)
t(W.hd,W.dM)
t(W.aU,W.af)
t(W.dR,W.dQ)
t(W.hV,W.dR)
t(W.d9,W.cg)
t(W.dT,W.dS)
t(W.hY,W.dT)
t(W.dV,W.dU)
t(W.ds,W.dV)
t(W.dX,W.dW)
t(W.i7,W.dX)
t(W.dZ,W.dY)
t(W.i8,W.dZ)
t(W.hW,P.cP)
t(P.a4,P.i2)
t(P.dk,P.dj)
t(P.eR,P.dk)
t(P.dw,P.dv)
t(P.ft,P.dw)
t(P.dH,P.dG)
t(P.h1,P.dH)
t(P.dO,P.dN)
t(P.hf,P.dO)
t(P.e8,P.d7)
t(P.fu,P.b1)
t(P.dD,P.dC)
t(P.fW,P.dD)
s(T.ck,[T.ao,R.cX])
s(E.eb,[Z.c8,A.cJ,T.cR])
s(D.N,[D.aD,D.aE,D.u,X.fz])
s(X.fz,[X.ct,X.an,X.bD,X.cW])
s(O.ai,[D.cq,U.bx,M.ca])
s(D.ee,[U.eh,U.Z])
t(U.cb,U.Z)
s(A.cJ,[A.f1,A.fS])
s(A.cY,[A.cZ,A.hl,A.hm,A.hn,A.hj,A.L,A.hk,A.C,A.bK,A.hp,A.bM,A.a_,A.bh,A.aR])
t(F.fR,F.eA)
t(F.hi,F.eS)
t(F.hG,F.hH)
t(F.fr,F.hI)
s(O.cQ,[O.cw,O.cK])
s(O.cx,[O.f2,O.f3,O.ad])
s(O.ad,[O.f6,O.f7])
t(T.h6,T.cR)
t(X.eI,X.h2)
u(H.d_,H.hs)
u(H.bS,P.n)
u(H.bT,H.ci)
u(H.bU,P.n)
u(H.bV,H.ci)
u(P.dm,P.n)
u(W.d8,W.el)
u(W.da,P.n)
u(W.db,W.E)
u(W.dc,P.n)
u(W.dd,W.E)
u(W.df,P.n)
u(W.dg,W.E)
u(W.dh,P.n)
u(W.di,W.E)
u(W.dn,P.al)
u(W.dp,P.al)
u(W.dq,P.n)
u(W.dr,W.E)
u(W.dt,P.n)
u(W.du,W.E)
u(W.dx,P.n)
u(W.dy,W.E)
u(W.dz,P.al)
u(W.bW,P.n)
u(W.bX,W.E)
u(W.dA,P.n)
u(W.dB,W.E)
u(W.dF,P.al)
u(W.dI,P.n)
u(W.dJ,W.E)
u(W.bY,P.n)
u(W.bZ,W.E)
u(W.dL,P.n)
u(W.dM,W.E)
u(W.dQ,P.n)
u(W.dR,W.E)
u(W.dS,P.n)
u(W.dT,W.E)
u(W.dU,P.n)
u(W.dV,W.E)
u(W.dW,P.n)
u(W.dX,W.E)
u(W.dY,P.n)
u(W.dZ,W.E)
u(P.dj,P.n)
u(P.dk,W.E)
u(P.dv,P.n)
u(P.dw,W.E)
u(P.dG,P.n)
u(P.dH,W.E)
u(P.dN,P.n)
u(P.dO,W.E)
u(P.d7,P.al)
u(P.dC,P.n)
u(P.dD,W.E)})()
var v={mangledGlobalNames:{w:"int",H:"double",a6:"num",r:"String",aY:"bool",aI:"Null",ba:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.N]},{func:1,ret:-1,args:[D.N]},{func:1,ret:-1,args:[W.af]},{func:1,ret:-1,args:[P.w,[P.i,E.ak]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aI,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.b8]},{func:1,ret:-1,args:[P.w,[P.i,D.Y]]},{func:1,ret:P.H},{func:1,ret:-1,args:[P.w,[P.i,U.Z]]},{func:1,ret:-1,args:[P.w,[P.i,M.a7]]},{func:1,ret:-1,args:[P.w,[P.i,V.am]]},{func:1,ret:P.aI,args:[,]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.aY,args:[[P.i,D.Y]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.b2.prototype
C.A=J.a.prototype
C.a=J.aF.prototype
C.B=J.cl.prototype
C.d=J.cm.prototype
C.i=J.cn.prototype
C.c=J.bA.prototype
C.b=J.b7.prototype
C.C=J.aG.prototype
C.n=J.fw.prototype
C.E=P.cI.prototype
C.j=J.bP.prototype
C.o=W.aU.prototype
C.p=W.bR.prototype
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.q=function() {
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
C.w=function(getTagFallback) {
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
C.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.t=function(hooks) {
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
C.v=function(hooks) {
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
C.u=function(hooks) {
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
C.l=function(hooks) { return hooks; }

C.x=new P.fv()
C.m=new P.hv()
C.y=new P.hw()
C.e=new P.i3()
C.h=new P.ay(0)
C.z=new P.ay(5e6)
C.D=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])})();(function staticFields(){$.ab=0
$.br=null
$.j8=null
$.jN=null
$.jI=null
$.jQ=null
$.ik=null
$.iq=null
$.j0=null
$.bi=null
$.c1=null
$.c2=null
$.iV=!1
$.a8=C.e
$.X=[]
$.jj=null
$.jn=null
$.bH=null
$.ju=null
$.jB=null
$.jD=null
$.hx=null
$.hy=null
$.hz=null
$.jC=null
$.jm=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"m1","jV",function(){return H.jL("_$dart_dartClosure")})
u($,"m2","j4",function(){return H.jL("_$dart_js")})
u($,"m3","jW",function(){return H.ah(H.hh({
toString:function(){return"$receiver$"}}))})
u($,"m4","jX",function(){return H.ah(H.hh({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"m5","jY",function(){return H.ah(H.hh(null))})
u($,"m6","jZ",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m9","k1",function(){return H.ah(H.hh(void 0))})
u($,"ma","k2",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m8","k0",function(){return H.ah(H.jz(null))})
u($,"m7","k_",function(){return H.ah(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mc","k4",function(){return H.ah(H.jz(void 0))})
u($,"mb","k3",function(){return H.ah(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mp","j5",function(){return P.kR()})
u($,"mq","k8",function(){return P.kG("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mj","k7",function(){return Z.a5(0)})
u($,"md","k5",function(){return Z.a5(511)})
u($,"ml","a9",function(){return Z.a5(1)})
u($,"mk","aw",function(){return Z.a5(2)})
u($,"mf","av",function(){return Z.a5(4)})
u($,"mm","aZ",function(){return Z.a5(8)})
u($,"mn","b_",function(){return Z.a5(16)})
u($,"mg","c4",function(){return Z.a5(32)})
u($,"mh","c5",function(){return Z.a5(64)})
u($,"mi","k6",function(){return Z.a5(96)})
u($,"mo","bn",function(){return Z.a5(128)})
u($,"me","au",function(){return Z.a5(256)})
u($,"m0","jU",function(){return new V.ex(1e-9)})
u($,"m_","x",function(){return $.jU()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bF,ArrayBufferView:H.bF,Float32Array:H.bE,Float64Array:H.bE,Int16Array:H.fl,Int32Array:H.fm,Int8Array:H.fn,Uint16Array:H.fo,Uint32Array:H.fp,Uint8ClampedArray:H.cB,CanvasPixelArray:H.cB,Uint8Array:H.fq,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.e2,HTMLAnchorElement:W.e4,HTMLAreaElement:W.e5,Blob:W.c7,HTMLCanvasElement:W.b2,CDATASection:W.ax,CharacterData:W.ax,Comment:W.ax,ProcessingInstruction:W.ax,Text:W.ax,CSSPerspective:W.ek,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bv,MSStyleCSSProperties:W.bv,CSS2Properties:W.bv,CSSImageValue:W.a1,CSSKeywordValue:W.a1,CSSNumericValue:W.a1,CSSPositionValue:W.a1,CSSResourceValue:W.a1,CSSUnitValue:W.a1,CSSURLImageValue:W.a1,CSSStyleValue:W.a1,CSSMatrixComponent:W.ac,CSSRotation:W.ac,CSSScale:W.ac,CSSSkew:W.ac,CSSTranslation:W.ac,CSSTransformComponent:W.ac,CSSTransformValue:W.em,CSSUnparsedValue:W.en,DataTransferItemList:W.ep,DOMException:W.eq,ClientRectList:W.cf,DOMRectList:W.cf,DOMRectReadOnly:W.cg,DOMStringList:W.er,DOMTokenList:W.es,Element:W.U,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aA,FileList:W.eB,FileWriter:W.eC,HTMLFormElement:W.eG,Gamepad:W.aB,History:W.eJ,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,ImageData:W.aC,HTMLImageElement:W.bz,KeyboardEvent:W.b8,Location:W.eW,MediaList:W.fe,MIDIInputMap:W.ff,MIDIOutputMap:W.fh,MimeType:W.aH,MimeTypeArray:W.fj,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cC,RadioNodeList:W.cC,Plugin:W.aJ,PluginArray:W.fx,RTCStatsReport:W.fF,HTMLSelectElement:W.fI,SourceBuffer:W.aK,SourceBufferList:W.fT,SpeechGrammar:W.aL,SpeechGrammarList:W.fU,SpeechRecognitionResult:W.aM,Storage:W.fZ,CSSStyleSheet:W.ar,StyleSheet:W.ar,TextTrack:W.aO,TextTrackCue:W.as,VTTCue:W.as,TextTrackCueList:W.h4,TextTrackList:W.h5,TimeRanges:W.ha,Touch:W.aP,TouchEvent:W.bf,TouchList:W.hd,TrackDefaultList:W.he,CompositionEvent:W.aQ,FocusEvent:W.aQ,TextEvent:W.aQ,UIEvent:W.aQ,URL:W.hu,VideoTrackList:W.hM,WheelEvent:W.aU,Window:W.bR,DOMWindow:W.bR,CSSRuleList:W.hV,ClientRect:W.d9,DOMRect:W.d9,GamepadList:W.hY,NamedNodeMap:W.ds,MozNamedAttrMap:W.ds,SpeechRecognitionResultList:W.i7,StyleSheetList:W.i8,SVGLength:P.b9,SVGLengthList:P.eR,SVGNumber:P.bc,SVGNumberList:P.ft,SVGPointList:P.fA,SVGStringList:P.h1,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bg,SVGTransformList:P.hf,AudioBuffer:P.e7,AudioParamMap:P.e8,AudioTrackList:P.ea,AudioContext:P.b1,webkitAudioContext:P.b1,BaseAudioContext:P.b1,OfflineAudioContext:P.fu,WebGL2RenderingContext:P.cI,SQLResultSetRowList:P.fW})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
W.bW.$nativeSuperclassTag="EventTarget"
W.bX.$nativeSuperclassTag="EventTarget"
W.bY.$nativeSuperclassTag="EventTarget"
W.bZ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(O.jO,[])
else O.jO([])})})()
//# sourceMappingURL=test.dart.js.map
