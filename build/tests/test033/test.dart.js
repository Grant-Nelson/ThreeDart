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
a[c]=function(){a[c]=function(){H.lS(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iV(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iH:function iH(){},
kf:function(){return new P.fZ("No element")},
cK:function(a,b,c,d){if(c-b<=32)H.kG(a,b,c,d)
else H.kF(a,b,c,d)},
kG:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.X()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
kF:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.Z(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.Z(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.X()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.X()
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
if(typeof k!=="number")return k.X()
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
if(typeof f!=="number")return f.X()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.X()
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
H.cK(a2,a3,o-2,a5)
H.cK(a2,n+2,a4,a5)
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
break}}}H.cK(a2,o,n,a5)}else H.cK(a2,o,n,a5)},
J:function J(a){this.a=a},
ew:function ew(){},
ct:function ct(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
f0:function f0(a,b,c){this.a=a
this.b=b
this.$ti=c},
f1:function f1(a,b){this.a=null
this.b=a
this.c=b},
hL:function hL(a,b,c){this.a=a
this.b=b
this.$ti=c},
hM:function hM(a,b){this.a=a
this.b=b},
cj:function cj(){},
ht:function ht(){},
d_:function d_(){},
e0:function(a){var u,t=H.lT(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lD:function(a){return v.types[a]},
lI:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iu},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a1(a)
if(typeof u!=="string")throw H.f(H.b_(a))
return u},
bK:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bL:function(a){return H.kq(a)+H.jA(H.c4(a),0,null)},
kq:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.A||!!n.$ibR){r=C.k(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.e0(t.length>1&&C.b.aZ(t,0)===36?C.b.aF(t,1):t)},
jl:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kz:function(a){var u,t,s,r=H.c([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b_(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.b0(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.b_(s))}return H.jl(r)},
jm:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b_(s))
if(s<0)throw H.f(H.b_(s))
if(s>65535)return H.kz(a)}return H.jl(a)},
ky:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.b0(u,10))>>>0,56320|u&1023)}throw H.f(P.aj(a,0,1114111,null,null))},
bc:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kx:function(a){var u=H.bc(a).getFullYear()+0
return u},
kv:function(a){var u=H.bc(a).getMonth()+1
return u},
kr:function(a){var u=H.bc(a).getDate()+0
return u},
ks:function(a){var u=H.bc(a).getHours()+0
return u},
ku:function(a){var u=H.bc(a).getMinutes()+0
return u},
kw:function(a){var u=H.bc(a).getSeconds()+0
return u},
kt:function(a){var u=H.bc(a).getMilliseconds()+0
return u},
q:function(a){throw H.f(H.b_(a))},
b:function(a,b){if(a==null)J.bp(a)
throw H.f(H.bl(a,b))},
bl:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ab(!0,b,s,null)
u=J.bp(a)
if(!(b<0)){if(typeof u!=="number")return H.q(u)
t=b>=u}else t=!0
if(t)return P.F(b,a,s,null,u)
return P.fB(b,s)},
lv:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bd(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bd(a,c,!0,b,"end",u)
return new P.ab(!0,b,"end",null)},
b_:function(a){return new P.ab(!0,a,null,null)},
lr:function(a){if(typeof a!=="number")throw H.f(H.b_(a))
return a},
f:function(a){var u
if(a==null)a=new P.cD()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jM})
u.name=""}else u.toString=H.jM
return u},
jM:function(){return J.a1(this.dartException)},
p:function(a){throw H.f(a)},
m:function(a){throw H.f(P.bu(a))},
ak:function(a){var u,t,s,r,q,p
a=H.jK(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hi(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hj:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ju:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jh:function(a,b){return new H.fs(a,b==null?null:b.method)},
iI:function(a,b){var u=b==null,t=u?null:b.method
return new H.eR(a,t,u?null:b.receiver)},
iu:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.b0(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iI(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jh(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jP()
q=$.jQ()
p=$.jR()
o=$.jS()
n=$.jV()
m=$.jW()
l=$.jU()
$.jT()
k=$.jY()
j=$.jX()
i=r.a6(u)
if(i!=null)return f.$1(H.iI(u,i))
else{i=q.a6(u)
if(i!=null){i.method="call"
return f.$1(H.iI(u,i))}else{i=p.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=n.a6(u)
if(i==null){i=m.a6(u)
if(i==null){i=l.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=k.a6(u)
if(i==null){i=j.a6(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jh(u,i))}}return f.$1(new H.hs(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cM()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ab(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cM()
return a},
iY:function(a){var u
if(a==null)return new H.dF(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dF(a)},
lz:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
lH:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.o("Unsupported number of arguments for wrapped closure"))},
bk:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lH)
a.$identity=u
return u},
ka:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.h_().constructor.prototype):Object.create(new H.bq(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ac
if(typeof t!=="number")return t.B()
$.ac=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.j8(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.k6(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.j8(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
k6:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lD,a)
if(typeof a=="function")if(b)return a
else{u=c?H.j7:H.ix
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
k7:function(a,b,c,d){var u=H.ix
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
j8:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.k9(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.k7(t,!r,u,b)
if(t===0){r=$.ac
if(typeof r!=="number")return r.B()
$.ac=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.br
return new Function(r+H.e(q==null?$.br=H.ec("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ac
if(typeof r!=="number")return r.B()
$.ac=r+1
o+=r
r="return function("+o+"){return this."
q=$.br
return new Function(r+H.e(q==null?$.br=H.ec("self"):q)+"."+H.e(u)+"("+o+");}")()},
k8:function(a,b,c,d){var u=H.ix,t=H.j7
switch(b?-1:a){case 0:throw H.f(H.kD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
k9:function(a,b){var u,t,s,r,q,p,o,n=$.br
if(n==null)n=$.br=H.ec("self")
u=$.j6
if(u==null)u=$.j6=H.ec("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.k8(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ac
if(typeof u!=="number")return u.B()
$.ac=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ac
if(typeof u!=="number")return u.B()
$.ac=u+1
return new Function(n+u+"}")()},
iV:function(a,b,c,d,e,f,g){return H.ka(a,b,c,d,!!e,!!f,g)},
ix:function(a){return a.a},
j7:function(a){return a.c},
ec:function(a){var u,t,s,r=new H.bq("self","target","receiver","name"),q=J.iF(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
lM:function(a,b){throw H.f(H.k5(a,H.e0(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.lM(a,b)},
lx:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
k5:function(a,b){return new H.ed("CastError: "+P.iC(a)+": type '"+H.e(H.ln(a))+"' is not a subtype of type '"+b+"'")},
ln:function(a){var u,t=J.R(a)
if(!!t.$ibt){u=H.lx(t)
if(u!=null)return H.lN(u)
return"Closure"}return H.bL(a)},
lS:function(a){throw H.f(new P.ep(a))},
kD:function(a){return new H.fJ(a)},
jF:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
c4:function(a){if(a==null)return
return a.$ti},
mo:function(a,b,c){return H.is(a["$a"+H.e(c)],H.c4(b))},
lC:function(a,b,c,d){var u=H.is(a["$a"+H.e(c)],H.c4(b))
return u==null?null:u[d]},
ik:function(a,b,c){var u=H.is(a["$a"+H.e(b)],H.c4(a))
return u==null?null:u[c]},
c5:function(a,b){var u=H.c4(a)
return u==null?null:u[b]},
lN:function(a){return H.aZ(a,null)},
aZ:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.e0(a[0].name)+H.jA(a,1,b)
if(typeof a=="function")return H.e0(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.kW(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kW:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.t])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.b.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.X)p+=" extends "+H.aZ(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aZ(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aZ(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aZ(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.ly(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aZ(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jA:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aT("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aZ(p,c)}return"<"+u.h(0)+">"},
is:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mm:function(a,b,c){return a.apply(b,H.is(J.R(b)["$a"+H.e(c)],H.c4(b)))},
mn:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lJ:function(a){var u,t,s,r,q=$.jG.$1(a),p=$.ii[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ip[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jD.$2(a,q)
if(q!=null){p=$.ii[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ip[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iq(u)
$.ii[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ip[q]=u
return u}if(s==="-"){r=H.iq(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jI(a,u)
if(s==="*")throw H.f(P.jv(q))
if(v.leafTags[q]===true){r=H.iq(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jI(a,u)},
jI:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.j_(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iq:function(a){return J.j_(a,!1,null,!!a.$iu)},
lK:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iq(u)
else return J.j_(u,c,null,null)},
lF:function(){if(!0===$.iZ)return
$.iZ=!0
H.lG()},
lG:function(){var u,t,s,r,q,p,o,n
$.ii=Object.create(null)
$.ip=Object.create(null)
H.lE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jJ.$1(q)
if(p!=null){o=H.lK(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lE:function(){var u,t,s,r,q,p,o=C.q()
o=H.bj(C.r,H.bj(C.t,H.bj(C.l,H.bj(C.l,H.bj(C.u,H.bj(C.v,H.bj(C.w(C.k),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jG=new H.il(r)
$.jD=new H.im(q)
$.jJ=new H.io(p)},
bj:function(a,b){return a(b)||b},
kh:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eI("Illegal RegExp pattern ("+String(p)+")",a))},
lP:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lw:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jK:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jL:function(a,b,c){var u=H.lQ(a,b,c)
return u},
lQ:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jK(b),'g'),H.lw(c))},
hi:function hi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fs:function fs(a,b){this.a=a
this.b=b},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a){this.a=a},
iv:function iv(a){this.a=a},
dF:function dF(a){this.a=a
this.b=null},
bt:function bt(){},
h5:function h5(){},
h_:function h_(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ed:function ed(a){this.a=a},
fJ:function fJ(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eU:function eU(a,b){this.a=a
this.b=b
this.c=null},
cs:function cs(a,b){this.a=a
this.$ti=b},
eV:function eV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
eQ:function eQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c1:function(a){return a},
aY:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bl(b,a))},
kV:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lv(a,b,c))
return b},
bH:function bH(){},
cz:function cz(){},
bG:function bG(){},
cA:function cA(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
cB:function cB(){},
fr:function fr(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
ly:function(a){return J.jb(a?Object.keys(a):[],null)},
lT:function(a){return v.mangledGlobalNames[a]},
lL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
j_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ij:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iZ==null){H.lF()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jv("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.j2()]
if(r!=null)return r
r=H.lJ(a)
if(r!=null)return r
if(typeof a=="function")return C.C
u=Object.getPrototypeOf(a)
if(u==null)return C.n
if(u===Object.prototype)return C.n
if(typeof s=="function"){Object.defineProperty(s,$.j2(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
kg:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.j5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aj(a,0,4294967295,"length",null))
return J.jb(new Array(a),b)},
jb:function(a,b){return J.iF(H.c(a,[b]))},
iF:function(a){a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cn.prototype
return J.cm.prototype}if(typeof a=="string")return J.b7.prototype
if(a==null)return J.co.prototype
if(typeof a=="boolean")return J.eP.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.X)return a
return J.ij(a)},
iW:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.X)return a
return J.ij(a)},
iX:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.X)return a
return J.ij(a)},
lA:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.X))return J.bR.prototype
return a},
lB:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.X)return a
return J.ij(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).n(a,b)},
e1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iW(a).i(a,b)},
k2:function(a,b,c,d){return J.lB(a).eY(a,b,c,d)},
iw:function(a,b){return J.lA(a).f6(a,b)},
j4:function(a,b){return J.iX(a).C(a,b)},
k3:function(a,b){return J.iX(a).G(a,b)},
b2:function(a){return J.R(a).gF(a)},
bo:function(a){return J.iX(a).gV(a)},
bp:function(a){return J.iW(a).gj(a)},
a1:function(a){return J.R(a).h(a)},
a:function a(){},
eP:function eP(){},
co:function co(){},
cp:function cp(){},
fw:function fw(){},
bR:function bR(){},
aK:function aK(){},
aJ:function aJ(a){this.$ti=a},
iG:function iG(a){this.$ti=a},
S:function S(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bB:function bB(){},
cn:function cn(){},
cm:function cm(){},
b7:function b7(){}},P={
kM:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lo()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bk(new P.hO(s),1)).observe(u,{childList:true})
return new P.hN(s,u,t)}else if(self.setImmediate!=null)return P.lp()
return P.lq()},
kN:function(a){self.scheduleImmediate(H.bk(new P.hP(a),0))},
kO:function(a){self.setImmediate(H.bk(new P.hQ(a),0))},
kP:function(a){P.iO(C.h,a)},
iO:function(a,b){var u=C.d.Z(a.a,1000)
return P.kS(u<0?0:u,b)},
jt:function(a,b){var u=C.d.Z(a.a,1000)
return P.kT(u<0?0:u,b)},
kS:function(a,b){var u=new P.dL()
u.dt(a,b)
return u},
kT:function(a,b){var u=new P.dL()
u.du(a,b)
return u},
lh:function(){var u,t
for(;u=$.bi,u!=null;){$.c3=null
t=u.b
$.bi=t
if(t==null)$.c2=null
u.a.$0()}},
lm:function(){$.iT=!0
try{P.lh()}finally{$.c3=null
$.iT=!1
if($.bi!=null)$.j3().$1(P.jE())}},
lk:function(a){var u=new P.d7(a)
if($.bi==null){$.bi=$.c2=u
if(!$.iT)$.j3().$1(P.jE())}else $.c2=$.c2.b=u},
ll:function(a){var u,t,s=$.bi
if(s==null){P.lk(a)
$.c3=$.c2
return}u=new P.d7(a)
t=$.c3
if(t==null){u.b=s
$.bi=$.c3=u}else{u.b=t.b
$.c3=t.b=u
if(u.b==null)$.c2=u}},
js:function(a,b){var u=$.a9
if(u===C.e)return P.iO(a,b)
return P.iO(a,u.f4(b))},
kJ:function(a,b){var u=$.a9
if(u===C.e)return P.jt(a,b)
return P.jt(a,u.cv(b,P.cT))},
jB:function(a,b,c,d,e){var u={}
u.a=d
P.ll(new P.ig(u,e))},
li:function(a,b,c,d){var u,t=$.a9
if(t===c)return d.$0()
$.a9=c
u=t
try{t=d.$0()
return t}finally{$.a9=u}},
lj:function(a,b,c,d,e){var u,t=$.a9
if(t===c)return d.$1(e)
$.a9=c
u=t
try{t=d.$1(e)
return t}finally{$.a9=u}},
hO:function hO(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
dL:function dL(){this.c=0},
i8:function i8(a,b){this.a=a
this.b=b},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d7:function d7(a){this.a=a
this.b=null},
cP:function cP(){},
h2:function h2(){},
cT:function cT(){},
ia:function ia(){},
ig:function ig(a,b){this.a=a
this.b=b},
i1:function i1(){},
i2:function i2(a,b){this.a=a
this.b=b},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function(a,b){return new H.I([a,b])},
kk:function(a){return H.lz(a,new H.I([null,null]))},
kl:function(a){return new P.hZ([a])},
iS:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kR:function(a,b){var u=new P.dm(a,b)
u.c=a.e
return u},
ke:function(a,b,c){var u,t
if(P.iU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.t])
$.Y.push(a)
try{P.kX(a,u)}finally{if(0>=$.Y.length)return H.b($.Y,-1)
$.Y.pop()}t=P.jq(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iE:function(a,b,c){var u,t
if(P.iU(a))return b+"..."+c
u=new P.aT(b)
$.Y.push(a)
try{t=u
t.a=P.jq(t.a,a,", ")}finally{if(0>=$.Y.length)return H.b($.Y,-1)
$.Y.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iU:function(a){var u,t
for(u=$.Y.length,t=0;t<u;++t)if(a===$.Y[t])return!0
return!1},
kX:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.e(n.gP(n))
b.push(u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gP(n);++l
if(!n.A()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gP(n);++l
for(;n.A();r=q,q=p){p=n.gP(n);++l
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
jd:function(a){var u,t={}
if(P.iU(a))return"{...}"
u=new P.aT("")
try{$.Y.push(a)
u.a+="{"
t.a=!0
J.k3(a,new P.f_(t,u))
u.a+="}"}finally{if(0>=$.Y.length)return H.b($.Y,-1)
$.Y.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
hZ:function hZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i_:function i_(a){this.a=a
this.c=this.b=null},
dm:function dm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eW:function eW(){},
n:function n(){},
eZ:function eZ(){},
f_:function f_(a,b){this.a=a
this.b=b},
an:function an(){},
i4:function i4(){},
dn:function dn(){},
ef:function ef(){},
ek:function ek(){},
ex:function ex(){},
hw:function hw(){},
hx:function hx(){},
i9:function i9(a){this.b=0
this.c=a},
kd:function(a){if(a instanceof H.bt)return a.h(0)
return"Instance of '"+H.e(H.bL(a))+"'"},
km:function(a,b,c){var u,t,s=J.kg(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jc:function(a,b,c){var u,t=H.c([],[c])
for(u=J.bo(a);u.A();)t.push(u.gP(u))
if(b)return t
return J.iF(t)},
iN:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.jo(0,null,u)
return H.jm(t<u?C.a.de(a,0,t):a)}return P.kH(a,0,null)},
kH:function(a,b,c){var u,t,s=J.bo(a)
for(u=0;u<b;++u)if(!s.A())throw H.f(P.aj(b,0,u,null,null))
t=[]
for(;s.A();)t.push(s.gP(s))
return H.jm(t)},
kA:function(a){return new H.eQ(a,H.kh(a,!1,!0,!1,!1,!1))},
jq:function(a,b,c){var u=J.bo(b)
if(!u.A())return a
if(c.length===0){do a+=H.e(u.gP(u))
while(u.A())}else{a+=H.e(u.gP(u))
for(;u.A();)a=a+c+H.e(u.gP(u))}return a},
kU:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.m){u=$.k1().b
u=u.test(b)}else u=!1
if(u)return b
t=C.y.f7(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ky(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kb:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kc:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ce:function(a){if(a>=10)return""+a
return"0"+a},
ja:function(a){return new P.aC(1000*a)},
iC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kd(a)},
k4:function(a){return new P.ab(!1,null,null,a)},
j5:function(a,b,c){return new P.ab(!0,a,b,c)},
fB:function(a,b){return new P.bd(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.bd(b,c,!0,a,d,"Invalid value")},
jo:function(a,b,c){if(0>a||a>c)throw H.f(P.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aj(b,a,c,"end",null))
return b}return c},
jn:function(a,b){if(typeof a!=="number")return a.a3()
if(a<0)throw H.f(P.aj(a,0,null,b,null))},
F:function(a,b,c,d,e){var u=e==null?J.bp(b):e
return new P.eN(u,!0,a,c,"Index out of range")},
a0:function(a){return new P.hu(a)},
jv:function(a){return new P.hr(a)},
bu:function(a){return new P.ej(a)},
o:function(a){return new P.df(a)},
j1:function(a){H.lL(a)},
b0:function b0(){},
a3:function a3(a,b){this.a=a
this.b=b},
H:function H(){},
aC:function aC(a){this.a=a},
eu:function eu(){},
ev:function ev(){},
b5:function b5(){},
cD:function cD(){},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eN:function eN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hu:function hu(a){this.a=a},
hr:function hr(a){this.a=a},
fZ:function fZ(a){this.a=a},
ej:function ej(a){this.a=a},
fv:function fv(){},
cM:function cM(){},
ep:function ep(a){this.a=a},
df:function df(a){this.a=a},
eI:function eI(a,b){this.a=a
this.b=b},
w:function w(){},
i:function i(){},
eO:function eO(){},
ba:function ba(){},
cv:function cv(){},
aN:function aN(){},
a7:function a7(){},
X:function X(){},
t:function t(){},
aT:function aT(a){this.a=a},
lu:function(a){var u,t=J.R(a)
if(!!t.$iaG){u=t.gcD(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.dQ(a.data,a.height,a.width)},
lt:function(a){if(a instanceof P.dQ)return{data:a.a,height:a.b,width:a.c}
return a},
av:function(a){var u,t,s,r,q
if(a==null)return
u=P.kj(P.t,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
ls:function(a){var u={}
a.G(0,new P.ih(u))
return u},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a){this.a=a},
eE:function eE(a,b){this.a=a
this.b=b},
eF:function eF(){},
eG:function eG(){},
hY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kQ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
i0:function i0(){},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
eT:function eT(){},
bb:function bb(){},
ft:function ft(){},
fA:function fA(){},
h3:function h3(){},
j:function j(){},
bf:function bf(){},
hh:function hh(){},
dk:function dk(){},
dl:function dl(){},
dw:function dw(){},
dx:function dx(){},
dH:function dH(){},
dI:function dI(){},
dO:function dO(){},
dP:function dP(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(a){this.a=a},
ea:function ea(){},
b3:function b3(){},
fu:function fu(){},
d8:function d8(){},
cH:function cH(){},
fY:function fY(){},
dD:function dD(){},
dE:function dE(){}},W={
iz:function(){var u=document.createElement("canvas")
return u},
iB:function(a){return"wheel"},
hX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jz:function(a,b,c,d){var u=W.hX(W.hX(W.hX(W.hX(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
O:function(a,b,c,d){var u=W.jC(new W.hV(c),W.h)
if(u!=null&&!0)J.k2(a,b,u,!1)
return new W.hU(a,b,u,!1)},
jC:function(a,b){var u=$.a9
if(u===C.e)return a
return u.cv(a,b)},
k:function k(){},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
c9:function c9(){},
b4:function b4(){},
aA:function aA(){},
el:function el(){},
D:function D(){},
bw:function bw(){},
em:function em(){},
a2:function a2(){},
ae:function ae(){},
en:function en(){},
eo:function eo(){},
eq:function eq(){},
er:function er(){},
cg:function cg(){},
ch:function ch(){},
es:function es(){},
et:function et(){},
hS:function hS(a,b){this.a=a
this.b=b},
V:function V(){},
h:function h(){},
d:function d(){},
aE:function aE(){},
eC:function eC(){},
eD:function eD(){},
eH:function eH(){},
aF:function aF(){},
eL:function eL(){},
bz:function bz(){},
aG:function aG(){},
bA:function bA(){},
b8:function b8(){},
eX:function eX(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(a){this.a=a},
fi:function fi(){},
fj:function fj(a){this.a=a},
aM:function aM(){},
fk:function fk(){},
ai:function ai(){},
hR:function hR(a){this.a=a},
G:function G(){},
cC:function cC(){},
aO:function aO(){},
fx:function fx(){},
fH:function fH(){},
fI:function fI(a){this.a=a},
fL:function fL(){},
aQ:function aQ(){},
fV:function fV(){},
aR:function aR(){},
fW:function fW(){},
aS:function aS(){},
h0:function h0(){},
h1:function h1(a){this.a=a},
as:function as(){},
aU:function aU(){},
at:function at(){},
h6:function h6(){},
h7:function h7(){},
hc:function hc(){},
aV:function aV(){},
be:function be(){},
hf:function hf(){},
hg:function hg(){},
aW:function aW(){},
hv:function hv(){},
hK:function hK(){},
aX:function aX(){},
bS:function bS(){},
hT:function hT(){},
da:function da(){},
hW:function hW(){},
dt:function dt(){},
i5:function i5(){},
i6:function i6(){},
hU:function hU(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hV:function hV(a){this.a=a},
E:function E(){},
ck:function ck(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
d9:function d9(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
bX:function bX(){},
bY:function bY(){},
dB:function dB(){},
dC:function dC(){},
dG:function dG(){},
dJ:function dJ(){},
dK:function dK(){},
bZ:function bZ(){},
c_:function c_(){},
dM:function dM(){},
dN:function dN(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){}},T={
Q:function(a){var u=new T.fM()
u.dl(a)
return u},
e3:function e3(){},
cl:function cl(){},
cw:function cw(){},
ap:function ap(){this.a=null},
fM:function fM(){this.a=null},
cR:function cR(){},
h8:function h8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h9:function h9(a){var _=this
_.a=a
_.e=_.d=_.c=null},
ha:function ha(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={cN:function cN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},cV:function cV(a){this.b=a
this.c=null},hd:function hd(){this.c=this.b=this.a=null},cX:function cX(a){this.b=a
this.a=this.c=null}},O={
eg:function(a){var u=new O.ad([a])
u.ba(a)
return u},
ad:function ad(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bE:function bE(){this.b=this.a=null},
cx:function cx(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f9:function f9(a,b){this.a=a
this.b=b},
fa:function fa(){},
fb:function fb(a,b){this.a=a
this.b=b},
fc:function fc(){},
fd:function fd(a,b){this.a=a
this.b=b},
fe:function fe(){},
f3:function f3(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bD:function bD(){},
f4:function f4(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ag:function ag(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f6:function f6(){var _=this
_.e=_.d=_.c=_.b=null},
f7:function f7(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f8:function f8(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cJ:function cJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cQ:function cQ(){}},E={
ey:function(a){var u,t=new E.am()
t.a=""
t.b=!0
u=O.eg(E.am)
t.y=u
u.aD(t.gfs(),t.gfv())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sc0(0,a)
t.scZ(null)
return t},
kC:function(a,b){var u=new E.fD(a)
u.dk(a,b)
return u},
kI:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ib4)return E.jr(a,!0,!0,!0,!1)
u=W.iz()
t=u.style
t.width="100%"
t.height="100%"
s.gcA(a).k(0,u)
return E.jr(u,!0,!0,!0,!1)},
jr:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cS(),p=C.f.bY(a,"webgl2",P.kk(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kC(p,a)
u=new T.h9(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.d0(a)
t=new X.eS()
t.c=new X.a4(!1,!1,!1)
t.d=P.kl(P.w)
u.b=t
t=new X.fl(u)
t.f=0
t.r=V.aq()
t.x=V.aq()
t.ch=t.Q=1
u.c=t
t=new X.eY(u)
t.r=0
t.x=V.aq()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.he(u)
t.f=V.aq()
t.r=V.aq()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.cP,P.X]])
u.z=t
s=document
t.push(W.O(s,"contextmenu",u.ge5(),!1))
u.z.push(W.O(a,"focus",u.geb(),!1))
u.z.push(W.O(a,"blur",u.ge_(),!1))
u.z.push(W.O(s,"keyup",u.gef(),!1))
u.z.push(W.O(s,"keydown",u.ged(),!1))
u.z.push(W.O(a,"mousedown",u.gej(),!1))
u.z.push(W.O(a,"mouseup",u.gen(),!1))
u.z.push(W.O(a,r,u.gel(),!1))
t=u.z
W.iB(a)
W.iB(a)
t.push(W.O(a,W.iB(a),u.gep(),!1))
u.z.push(W.O(s,r,u.ge7(),!1))
u.z.push(W.O(s,"mouseup",u.ge9(),!1))
u.z.push(W.O(s,"pointerlockchange",u.ger(),!1))
u.z.push(W.O(a,"touchstart",u.geG(),!1))
u.z.push(W.O(a,"touchend",u.geC(),!1))
u.z.push(W.O(a,"touchmove",u.geE(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a3(Date.now(),!1)
q.db=0
q.cn()
return q},
eb:function eb(){},
am:function am(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
fG:function fG(a){this.a=a},
cS:function cS(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hb:function hb(a){this.a=a}},Z={
iR:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c1(c)),35044)
a.bindBuffer(b,null)
return new Z.d5(b,u)},
a6:function(a){return new Z.au(a)},
d5:function d5(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
d6:function d6(a){this.a=a},
bs:function bs(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a){this.a=a}},D={
y:function(){var u=new D.af()
u.d=0
return u},
ee:function ee(){},
af:function af(){var _=this
_.d=_.c=_.b=_.a=null},
eA:function eA(a){this.a=a},
eB:function eB(a){this.a=a},
M:function M(){this.b=null},
aH:function aH(){this.b=null},
aI:function aI(){this.b=null},
r:function r(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
j9:function(a,b){var u,t,s=new D.aB()
s.c=new V.K(1,1,1)
s.a=V.kL()
s.d=V.iQ()
s.e=V.kK()
u=s.b
s.b=b
b.gm().k(0,s.gdn())
t=new D.r("mover",u,s.b)
t.b=!0
s.ag(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.r("color",u,a)
t.b=!0
s.ag(t)}return s},
aB:function aB(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
Z:function Z(){},
cr:function cr(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fy:function fy(){},
fX:function fX(){}},X={cb:function cb(a,b){this.a=a
this.b=b},cq:function cq(a,b){this.a=a
this.b=b},eS:function eS(){var _=this
_.d=_.c=_.b=_.a=null},cu:function cu(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eY:function eY(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},ao:function ao(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fl:function fl(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bF:function bF(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fz:function fz(){},cW:function cW(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},he:function he(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},d0:function d0(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
eK:function(a){var u=new X.eJ(),t=new V.al(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.kB()
u.r=t
return u},
iL:function(a){var u,t,s=new X.cE()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().k(0,s.gdv())
t=new D.r("mover",u,s.b)
t.b=!0
s.a9(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.x().a)){s.c=1.0471975511965976
t=new D.r("fov",t,1.0471975511965976)
t.b=!0
s.a9(t)}t=s.d
if(!(Math.abs(t-0.1)<$.x().a)){s.d=0.1
t=new D.r("near",t,0.1)
t.b=!0
s.a9(t)}t=s.e
if(!(Math.abs(t-2000)<$.x().a)){s.e=2000
t=new D.r("far",t,2000)
t.b=!0
s.a9(t)}return s},
iy:function iy(){},
eJ:function eJ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eM:function eM(){this.b=this.a=null},
cE:function cE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(){}},V={
eh:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.al(u,t,s,1)},
lU:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.da(a-b,u)
return(a<0?a+u:a)+b},
A:function(a,b,c){if(a==null)return C.b.a7("null",c)
return C.b.a7(C.c.d8(Math.abs(a-0)<$.x().a?0:a,b),c+b+1)},
bm:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.t])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.A(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.b.a7(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
j0:function(a){return C.c.fQ(Math.pow(2,C.B.bI(Math.log(H.lr(a))/Math.log(2))))},
aL:function(){var u=$.jg
return u==null?$.jg=V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ah:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
iK:function(a,b,c){return V.ah(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kp:function(a,b,c){return V.ah(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
iJ:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ah(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
jf:function(a,b,c,d){d=V.iQ()
return V.je(V.jk(),d,new V.v(a,b,c))},
je:function(a,b,c){var u=c.t(0,Math.sqrt(c.w(c))),t=b.aQ(u),s=t.t(0,Math.sqrt(t.w(t))),r=u.aQ(s),q=new V.v(a.a,a.b,a.c),p=s.K(0).w(q),o=r.K(0).w(q),n=u.K(0).w(q)
return V.ah(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aq:function(){var u=$.jj
return u==null?$.jj=new V.T(0,0):u},
jk:function(){var u=$.bJ
return u==null?$.bJ=new V.U(0,0,0):u},
kB:function(){var u=$.jp
return u==null?$.jp=V.fC(0,0,1,1):u},
fC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cG(a,b,c,d)},
d4:function(){var u=$.jy
return u==null?$.jy=new V.v(0,0,0):u},
kK:function(){var u=$.hy
return u==null?$.hy=new V.v(-1,0,0):u},
iQ:function(){var u=$.hz
return u==null?$.hz=new V.v(0,1,0):u},
kL:function(){var u=$.hA
return u==null?$.hA=new V.v(0,0,1):u},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ez:function ez(a){this.a=a},
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
a8:function a8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
T:function T(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z:function z(a,b){this.a=a
this.b=b},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
lO:function(a){P.kJ(C.z,new V.ir(a))},
kE:function(a){var u=new V.fR()
u.dm(a,!0)
return u},
ir:function ir(a){this.a=a},
fR:function fR(){this.b=this.a=null},
fT:function fT(a){this.a=a},
fS:function fS(a){this.a=a}},U={
iA:function(){var u=new U.ei()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cc:function(a){var u=new U.bv()
u.sR(0,a)
return u},
iD:function(a){var u=new U.by()
u.ba(U.W)
u.aD(u.gdr(),u.gew())
if(a!=null)u.aL(0,a)
u.e=null
u.f=V.aL()
u.r=0
return u},
ei:function ei(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bv:function bv(){this.b=this.a=null},
by:function by(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
W:function W(){},
d1:function d1(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d2:function d2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cd:function cd(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ci:function ci(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aP:function aP(){},fK:function fK(){},cO:function cO(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
kn:function(a,b){var u=a.aR,t=new A.f2(b,u)
t.c6(b,u)
t.dj(a,b)
return t},
ko:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gac(a1)+a2.gac(a2)+a3.gac(a3)+a4.gac(a4)+a5.gac(a5)+a6.gac(a6)+a7.gac(a7)+a8.gac(a8)+a9.gac(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.m)(b0),++t)e+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.m)(b1),++t)e+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.m)(b2),++t)e+="_"+H.e(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.aa()
if(k){u=$.ay()
f=new Z.au(f.a|u.a)}if(j){u=$.ax()
f=new Z.au(f.a|u.a)}if(i){u=$.az()
f=new Z.au(f.a|u.a)}if(h){u=$.aw()
f=new Z.au(f.a|u.a)}return new A.f5(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
id:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
ie:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.id(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.it(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
l0:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.id(b,t,"emission")
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
kY:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ie(b,t,"ambient")
b.a+="\n"},
kZ:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ie(b,t,"diffuse")
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
l1:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ie(b,t,"invDiffuse")
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
l7:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ie(b,t,"specular")
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
l3:function(a,b){var u,t,s
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
l5:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.id(b,t,"reflect")
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
l6:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.id(b,t,"refract")
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
l_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.it(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.af()
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
l4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.it(t)
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
if(typeof u!=="number")return u.af()
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
l8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.it(t)
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
if(typeof u!=="number")return u.af()
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
l2:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.t])
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
l9:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.aT("")
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
A.l0(a,i)
A.kY(a,i)
A.kZ(a,i)
A.l1(a,i)
A.l7(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.l5(a,i)
A.l6(a,i)}A.l3(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.l_(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.l4(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.l8(a,q[n],i)
A.l2(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.t])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.aF(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.aF(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.aF(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
la:function(a,b){var u,t,s
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
lc:function(a,b){var u
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
lb:function(a,b){var u
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
le:function(a,b){var u,t
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
lf:function(a,b){var u,t
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
ld:function(a,b){var u
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
lg:function(a,b){var u
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
it:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.b.aF(a,1)},
iP:function(a,b,c,d,e){var u=new A.hk(a,c,e)
u.f=d
P.km(d,0,P.w)
return u},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a){this.a=a},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(a,b){var _=this
_.cH=_.fZ=_.cG=_.b3=_.aR=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.h6=_.h5=_.h4=_.bH=_.bG=_.bF=_.bE=_.bD=_.bC=_.cT=_.h3=_.cS=_.cR=_.h2=_.cQ=_.cP=_.cO=_.h1=_.cN=_.cM=_.cL=_.h0=_.cK=_.cJ=_.h_=_.cI=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cf:function cf(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aR=b3
_.b3=b4},
bN:function bN(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bP:function bP(a,b,c,d,e,f,g,h,i,j){var _=this
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
bQ:function bQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cI:function cI(){},
fU:function fU(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cY:function cY(){},
hp:function hp(a){this.a=a},
cZ:function cZ(a,b,c){this.a=a
this.c=b
this.d=c},
hm:function hm(a,b,c){this.a=a
this.c=b
this.d=c},
hn:function hn(a,b,c){this.a=a
this.c=b
this.d=c},
ho:function ho(a,b,c){this.a=a
this.c=b
this.d=c},
hk:function hk(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
hl:function hl(a,b,c){this.a=a
this.c=b
this.d=c},
C:function C(a,b,c){this.a=a
this.c=b
this.d=c},
bM:function bM(a,b,c){this.a=a
this.c=b
this.d=c},
hq:function hq(a,b,c){this.a=a
this.c=b
this.d=c},
bO:function bO(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
bg:function bg(a,b,c){this.a=a
this.c=b
this.d=c},
N:function N(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ic:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
c0:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.v(h,g+a1,f+a2)
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
j.d=i}m=F.ic(i)
l=F.ic(j.b)
k=F.lR(d,a0,new F.ib(j,F.ic(j.c),F.ic(j.d),l,m,c),b)
if(k!=null)a.fq(k)},
lR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.iM()
t=H.c([],[F.bh])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hB(g,g,new V.al(p,0,0,1),g,g,new V.T(r,1),g,g,0)
q.k(0,o)
c.$3(o,r,0)
t.push(o.bA(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hB(g,g,new V.al(j,i,h,1),g,g,new V.T(r,m),g,g,0)
k.k(0,o)
c.$3(o,r,n)
t.push(o.bA(d))}}u.d.f_(a+1,b+1,t)
return u},
bx:function(a,b,c){var u=new F.aD(),t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
ki:function(a,b){var u=new F.bC(),t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.W()
return u},
iM:function(){var u=new F.fN(),t=new F.hC(u)
t.b=!1
t.c=H.c([],[F.bh])
u.a=t
t=new F.fQ(u)
t.b=H.c([],[F.bI])
u.b=t
t=new F.fP(u)
t.b=H.c([],[F.bC])
u.c=t
t=new F.fO(u)
t.b=H.c([],[F.aD])
u.d=t
u.e=null
return u},
hB:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bh(),r=new F.hH()
r.b=H.c([],[F.bI])
s.b=r
r=new F.hG()
u=[F.bC]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.hD()
u=[F.aD]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.jZ()
s.e=0
r=$.aa()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.ay().a)!==0?e:t
s.x=(u&$.ax().a)!==0?b:t
s.y=(u&$.b1().a)!==0?f:t
s.z=(u&$.az().a)!==0?g:t
s.Q=(u&$.k_().a)!==0?c:t
s.ch=(u&$.bn().a)!==0?i:0
s.cx=(u&$.aw().a)!==0?a:t
return s},
ib:function ib(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aD:function aD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bC:function bC(){this.b=this.a=null},
bI:function bI(){this.a=null},
fN:function fN(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(a){this.a=a
this.b=null},
fP:function fP(a){this.a=a
this.b=null},
fQ:function fQ(a){this.a=a
this.b=null},
bh:function bh(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a){this.a=a},
hI:function hI(a){this.a=a},
hC:function hC(a){this.a=a
this.c=this.b=null},
hD:function hD(){this.d=this.c=this.b=null},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(){this.c=this.b=null},
hH:function hH(){this.b=null}},K={
jH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9="testCanvas",b0=null,b1="modifiers",b2=V.kE("Test 033"),b3=W.iz()
b3.className="pageLargeCanvas"
b3.id=a9
b2.a.appendChild(b3)
u=[P.t]
b2.ct(H.c(["Test of a sterioscopic scene."],u))
b2.ct(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a9)
if(t==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.kI(t,!0,!0,!0,!1)
r=F.iM()
F.c0(r,b0,b0,1,1,1,0,0,1)
F.c0(r,b0,b0,1,1,0,1,0,3)
F.c0(r,b0,b0,1,1,0,0,1,2)
F.c0(r,b0,b0,1,1,-1,0,0,0)
F.c0(r,b0,b0,1,1,0,-1,0,0)
F.c0(r,b0,b0,1,1,0,0,-1,3)
r.ak()
q=E.ey(r)
p=E.ey(b0)
for(o=-1.6;o<=1.7;o+=0.8)for(n=-1.6;n<=1.7;n+=0.8)for(m=-1.6;m<=1.7;m+=0.8){l=new V.a8(1,0,0,o,0,1,0,n,0,0,1,m,0,0,0,1).p(0,new V.a8(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
k=E.ey(b0)
b2=new U.bv()
b2.sR(0,l)
k.scZ(b2)
b2=k.y
u=[H.c5(b2,0)]
if(b2.aJ(H.c([q],u))){j=b2.a
i=j.length
j.push(q)
u=H.c([q],u)
b2=b2.c
if(b2!=null)b2.$2(i,u)}b2=p.y
u=[H.c5(b2,0)]
if(b2.aJ(H.c([k],u))){j=b2.a
i=j.length
j.push(k)
u=H.c([k],u)
b2=b2.c
if(b2!=null)b2.$2(i,u)}}h=s.f.cW("../resources/diceColor")
g=new O.cx()
b2=O.eg(V.a8)
g.e=b2
b2.aD(g.gdW(),g.gdY())
b2=new O.ag(g,"emission")
b2.c=new A.P(!1,!1,!1)
b2.f=new V.K(0,0,0)
g.f=b2
b2=new O.ag(g,"ambient")
b2.c=new A.P(!1,!1,!1)
b2.f=new V.K(0,0,0)
g.r=b2
b2=new O.ag(g,"diffuse")
b2.c=new A.P(!1,!1,!1)
b2.f=new V.K(0,0,0)
g.x=b2
b2=new O.ag(g,"invDiffuse")
b2.c=new A.P(!1,!1,!1)
b2.f=new V.K(0,0,0)
g.y=b2
b2=new O.f8(g,"specular")
b2.c=new A.P(!1,!1,!1)
b2.f=new V.K(0,0,0)
b2.ch=100
g.z=b2
b2=new O.f4(g,"bump")
b2.c=new A.P(!1,!1,!1)
g.Q=b2
g.ch=null
b2=new O.ag(g,"reflect")
b2.c=new A.P(!1,!1,!1)
b2.f=new V.K(0,0,0)
g.cx=b2
b2=new O.f7(g,"refract")
b2.c=new A.P(!1,!1,!1)
b2.f=new V.K(0,0,0)
b2.ch=1
g.cy=b2
b2=new O.f3(g,"alpha")
b2.c=new A.P(!1,!1,!1)
b2.f=1
g.db=b2
b2=new D.cr()
b2.ba(D.Z)
b2.e=H.c([],[D.aB])
b2.f=H.c([],[D.fy])
b2.r=H.c([],[D.fX])
b2.y=b2.x=null
b2.bZ(b2.gdS(),b2.geu(),b2.gey())
g.dx=b2
u=new O.f6()
u.b=new V.al(0,0,0,0)
u.c=1
u.d=10
u.e=!1
g.dy=u
u=b2.x
b2=u==null?b2.x=D.y():u
b2.k(0,g.geL())
b2=g.dx
u=b2.y
b2=u==null?b2.y=D.y():u
b2.k(0,g.gay())
g.fr=null
b2=g.dx
u=U.cc(V.jf(-1,-1,-1,b0))
b2.k(0,D.j9(new V.K(1,0.9,0.9),u))
b2=g.dx
u=U.cc(V.jf(1,1,2,b0))
b2.k(0,D.j9(new V.K(0.2,0.2,0.35),u))
b2=g.r
b2.saO(0,new V.K(0.2,0.2,0.2))
g.r.saX(h)
b2=g.x
b2.saO(0,new V.K(0.8,0.8,0.8))
g.x.saX(h)
b2=g.z
b2.saO(0,new V.K(0.7,0.7,0.7))
b2=g.z
b2.bt(new A.P(!0,!1,b2.c.c))
b2.cp(10)
g.Q.saX(s.f.cW("../resources/diceBumpMap"))
f=U.iD(b0)
b2=s.x
u=new U.d2()
j=U.iA()
j.sbX(0,!0)
j.sbO(6.283185307179586)
j.sbQ(0)
j.sa0(0,0)
j.sbP(100)
j.sM(0)
j.sbB(0.5)
u.b=j
e=u.gav()
j.gm().k(0,e)
j=U.iA()
j.sbX(0,!0)
j.sbO(6.283185307179586)
j.sbQ(0)
j.sa0(0,0)
j.sbP(100)
j.sM(0)
j.sbB(0.5)
u.c=j
j.gm().k(0,e)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
d=new X.a4(!1,!1,!1)
c=u.d
u.d=d
j=new D.r(b1,c,d)
j.b=!0
u.J(j)
j=u.f
if(j!==!1){u.f=!1
j=new D.r("invertX",j,!1)
j.b=!0
u.J(j)}j=u.r
if(j!==!1){u.r=!1
j=new D.r("invertY",j,!1)
j.b=!0
u.J(j)}u.aM(b2)
f.k(0,u)
b2=s.x
u=new U.d1()
j=U.iA()
j.sbX(0,!0)
j.sbO(6.283185307179586)
j.sbQ(0)
j.sa0(0,0)
j.sbP(100)
j.sM(0)
j.sbB(0.2)
u.b=j
j.gm().k(0,u.gav())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
d=new X.a4(!0,!1,!1)
c=u.c
u.c=d
j=new D.r(b1,c,d)
j.b=!0
u.J(j)
u.aM(b2)
f.k(0,u)
b2=s.x
u=new U.d3()
u.c=0.01
u.e=u.d=0
d=new X.a4(!1,!1,!1)
u.b=d
j=new D.r(b1,b0,d)
j.b=!0
u.J(j)
u.aM(b2)
f.k(0,u)
f.k(0,U.cc(V.iK(0,0,6)))
b=X.eK(b0)
if(b.b){b.b=!1
b2=new D.r("clearColor",!0,!1)
b2.b=!0
b.a9(b2)}b2=s.f.cX("../resources/maskonaive",".jpg")
a=new M.cd()
a.a=!0
u=E.ey(b0)
r=F.iM()
j=r.a
e=new V.v(-1,-1,1)
e=e.t(0,Math.sqrt(e.w(e)))
a0=j.b2(new V.ar(1,2,4,6),V.eh(255,0,0),new V.U(-1,-1,0),new V.T(0,1),e,b0)
e=r.a
j=new V.v(1,-1,1)
j=j.t(0,Math.sqrt(j.w(j)))
a1=e.b2(new V.ar(0,3,4,6),V.eh(0,0,255),new V.U(1,-1,0),new V.T(1,1),j,b0)
j=r.a
e=new V.v(1,1,1)
e=e.t(0,Math.sqrt(e.w(e)))
a2=j.b2(new V.ar(0,2,5,6),V.eh(0,128,0),new V.U(1,1,0),new V.T(1,0),e,b0)
e=r.a
j=V.aq()
a3=new V.v(-1,1,1)
a3=a3.t(0,Math.sqrt(a3.w(a3)))
a4=e.b2(new V.ar(0,2,4,7),V.eh(255,255,0),new V.U(-1,1,0),j,a3,b0)
r.d.eZ(H.c([a0,a1,a2,a4],[F.bh]))
r.ak()
u.sc0(0,r)
a.e=u
a.saN(b0)
a.saV(0,b0)
a.saW(b0)
u=new O.cJ()
u.b=1.0471975511965976
u.d=new V.K(1,1,1)
c=u.c
u.c=b2
b2.gm().k(0,u.gay())
b2=new D.r("boxTexture",c,u.c)
b2.b=!0
u.S(b2)
a.saW(u)
a5=new M.ci()
a5.a=!0
b2=O.eg(E.am)
a5.e=b2
b2.aD(a5.ge1(),a5.ge3())
a5.y=a5.x=a5.r=a5.f=null
a6=X.eK(b0)
a5.saN(b0)
a5.saV(0,a6)
a5.saW(b0)
a5.saW(g)
a5.e.k(0,p)
b2=M.aP
u=H.c([a,a5],[b2])
j=new M.cO()
j.a=!0
e=U.cc(b0)
j.b=e
a3=U.cc(b0)
j.c=a3
a7=[U.W]
e=U.iD(H.c([null,e],a7))
j.d=e
a7=U.iD(H.c([null,a3],a7))
j.e=a7
j.f=X.iL(e)
j.r=X.iL(a7)
j.x=V.fC(0,0,0.5,1)
j.y=V.fC(0.5,0,0.5,1)
b2=O.eg(b2)
j.Q=b2
b2.aD(j.gdU(),j.geA())
j.Q.aL(0,u)
j.ch=0.1
j.cx=12
j.db=j.cy=null
b2=j.d.a
if(0>=b2.length)return H.b(b2,0)
if(!J.B(b2[0],f)){b2=j.d
e=b2.a
if(0>=e.length)return H.b(e,0)
c=e[0]
b2.l(0,0,f)
j.e.l(0,0,f)
b2=new D.r("cameraMover",c,f)
b2.b=!0
j.O(b2)}b2=j.z
if(b2!==b){if(b2!=null)b2.gm().L(0,j.gN())
c=j.z
j.z=b
b.gm().k(0,j.gN())
b2=new D.r("target",c,j.z)
b2.b=!0
j.O(b2)}j.Q.aL(0,u)
j.ch=0.1
j.cx=12
a8=Math.atan2(0.1,12)
b2=j.b
u=j.ch
if(typeof u!=="number")return u.K()
b2.sR(0,V.iK(-u,0,0).p(0,V.iJ(a8)))
j.c.sR(0,V.iK(j.ch,0,0).p(0,V.iJ(-a8)))
b2=s.d
if(b2!==j){if(b2!=null)b2.gm().L(0,s.gc7())
s.d=j
j.gm().k(0,s.gc7())
s.c8()}V.lO(s)}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iH.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gF:function(a){return H.bK(a)},
h:function(a){return"Instance of '"+H.e(H.bL(a))+"'"}}
J.eP.prototype={
h:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ib0:1}
J.co.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gF:function(a){return 0}}
J.cp.prototype={
gF:function(a){return 0},
h:function(a){return String(a)}}
J.fw.prototype={}
J.bR.prototype={}
J.aK.prototype={
h:function(a){var u=a[$.jO()]
if(u==null)return this.dh(a)
return"JavaScript function for "+H.e(J.a1(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aJ.prototype={
L:function(a,b){var u
if(!!a.fixed$length)H.p(P.a0("remove"))
for(u=0;u<a.length;++u)if(J.B(a[u],b)){a.splice(u,1)
return!0}return!1},
aL:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.a0("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.bu(a))}},
q:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
fo:function(a){return this.q(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
de:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aj(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.c5(a,0)])
return H.c(a.slice(b,c),[H.c5(a,0)])},
gbL:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.kf())},
b9:function(a,b){if(!!a.immutable$list)H.p(P.a0("sort"))
H.cK(a,0,a.length-1,b)},
ae:function(a,b){var u
for(u=0;u<a.length;++u)if(J.B(a[u],b))return!0
return!1},
h:function(a){return P.iE(a,"[","]")},
gV:function(a){return new J.S(a,a.length)},
gF:function(a){return H.bK(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.p(P.a0("set length"))
if(b<0)throw H.f(P.aj(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.bl(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.p(P.a0("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bl(a,b))
a[b]=c},
$ii:1}
J.iG.prototype={}
J.S.prototype={
gP:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bB.prototype={
f6:function(a,b){var u
if(typeof b!=="number")throw H.f(H.b_(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb4(b)
if(this.gb4(a)===u)return 0
if(this.gb4(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb4:function(a){return a===0?1/a<0:a<0},
fQ:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.a0(""+a+".toInt()"))},
bI:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a0(""+a+".floor()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a0(""+a+".round()"))},
d8:function(a,b){var u
if(b>20)throw H.f(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb4(a))return"-"+u
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
da:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
di:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cq(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cq(a,b)},
cq:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a0("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b0:function(a,b){var u
if(a>0)u=this.eR(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eR:function(a,b){return b>31?0:a>>>b},
$iH:1,
$ia7:1}
J.cn.prototype={$iw:1}
J.cm.prototype={}
J.b7.prototype={
bz:function(a,b){if(b<0)throw H.f(H.bl(a,b))
if(b>=a.length)H.p(H.bl(a,b))
return a.charCodeAt(b)},
aZ:function(a,b){if(b>=a.length)throw H.f(H.bl(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.f(P.j5(b,null,null))
return a+b},
c2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.fB(b,null))
if(b>c)throw H.f(P.fB(b,null))
if(c>a.length)throw H.f(P.fB(c,null))
return a.substring(b,c)},
aF:function(a,b){return this.c2(a,b,null)},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.x)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a7:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
h:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$it:1}
H.J.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return C.b.bz(this.a,b)},
$an:function(){return[P.w]},
$ai:function(){return[P.w]}}
H.ew.prototype={}
H.ct.prototype={
gP:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.iW(s),q=r.gj(s)
if(t.b!==q)throw H.f(P.bu(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.C(s,u);++t.c
return!0}}
H.f0.prototype={
gV:function(a){return new H.f1(J.bo(this.a),this.b)},
gj:function(a){return J.bp(this.a)},
C:function(a,b){return this.b.$1(J.j4(this.a,b))},
$ai:function(a,b){return[b]}}
H.f1.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.a=u.c.$1(t.gP(t))
return!0}u.a=null
return!1},
gP:function(a){return this.a}}
H.hL.prototype={
gV:function(a){return new H.hM(J.bo(this.a),this.b)}}
H.hM.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gP(u)))return!0
return!1},
gP:function(a){var u=this.a
return u.gP(u)}}
H.cj.prototype={}
H.ht.prototype={}
H.d_.prototype={}
H.hi.prototype={
a6:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.eR.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hs.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iv.prototype={
$1:function(a){if(!!J.R(a).$ib5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dF.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bt.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gfU:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h5.prototype={}
H.h_.prototype={
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
if(t==null)u=H.bK(this.a)
else u=typeof t!=="object"?J.b2(t):H.bK(t)
return(u^H.bK(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bL(u))+"'")}}
H.ed.prototype={
h:function(a){return this.a}}
H.fJ.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gj:function(a){return this.a},
gan:function(a){return new H.cs(this,[H.c5(this,0)])},
cC:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.ce(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.ce(t,b)}else return s.fm(b)},
fm:function(a){var u=this.d
if(u==null)return!1
return this.bJ(this.bg(u,J.b2(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b_(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b_(r,b)
s=t==null?null:t.b
return s}else return q.fn(b)},
fn:function(a){var u,t,s=this.d
if(s==null)return
u=this.bg(s,J.b2(a)&0x3ffffff)
t=this.bJ(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.ca(u==null?o.b=o.bp():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.ca(t==null?o.c=o.bp():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bp()
r=J.b2(b)&0x3ffffff
q=o.bg(s,r)
if(q==null)o.bu(s,r,[o.bq(b,c)])
else{p=o.bJ(q,b)
if(p>=0)q[p].b=c
else q.push(o.bq(b,c))}}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.bu(u))
t=t.c}},
ca:function(a,b,c){var u=this.b_(a,b)
if(u==null)this.bu(a,b,this.bq(b,c))
else u.b=c},
bq:function(a,b){var u=this,t=new H.eU(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bJ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.B(a[t].a,b))return t
return-1},
h:function(a){return P.jd(this)},
b_:function(a,b){return a[b]},
bg:function(a,b){return a[b]},
bu:function(a,b,c){a[b]=c},
dI:function(a,b){delete a[b]},
ce:function(a,b){return this.b_(a,b)!=null},
bp:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bu(t,u,t)
this.dI(t,u)
return t}}
H.eU.prototype={}
H.cs.prototype={
gj:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.eV(u,u.r)
t.c=u.e
return t}}
H.eV.prototype={
gP:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bu(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.il.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.im.prototype={
$2:function(a,b){return this.a(a,b)}}
H.io.prototype={
$1:function(a){return this.a(a)}}
H.eQ.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bH.prototype={}
H.cz.prototype={
gj:function(a){return a.length},
$iu:1,
$au:function(){}}
H.bG.prototype={
i:function(a,b){H.aY(b,a,a.length)
return a[b]},
$an:function(){return[P.H]},
$ii:1,
$ai:function(){return[P.H]}}
H.cA.prototype={
$an:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]}}
H.fm.prototype={
i:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.fn.prototype={
i:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.fo.prototype={
i:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.fp.prototype={
i:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.fq.prototype={
i:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.cB.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.fr.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.bT.prototype={}
H.bU.prototype={}
H.bV.prototype={}
H.bW.prototype={}
P.hO.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.hN.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hP.prototype={
$0:function(){this.a.$0()}}
P.hQ.prototype={
$0:function(){this.a.$0()}}
P.dL.prototype={
dt:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bk(new P.i8(this,b),0),a)
else throw H.f(P.a0("`setTimeout()` not found."))},
du:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bk(new P.i7(this,a,Date.now(),b),0),a)
else throw H.f(P.a0("Periodic timer."))},
$icT:1}
P.i8.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.i7.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.di(u,q)}s.c=r
t.d.$1(s)}}
P.d7.prototype={}
P.cP.prototype={}
P.h2.prototype={}
P.cT.prototype={}
P.ia.prototype={}
P.ig.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cD():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.i1.prototype={
fM:function(a){var u,t,s,r=null
try{if(C.e===$.a9){a.$0()
return}P.li(r,r,this,a)}catch(s){u=H.iu(s)
t=H.iY(s)
P.jB(r,r,this,u,t)}},
fN:function(a,b){var u,t,s,r=null
try{if(C.e===$.a9){a.$1(b)
return}P.lj(r,r,this,a,b)}catch(s){u=H.iu(s)
t=H.iY(s)
P.jB(r,r,this,u,t)}},
fO:function(a,b){return this.fN(a,b,null)},
f4:function(a){return new P.i2(this,a)},
cv:function(a,b){return new P.i3(this,a,b)}}
P.i2.prototype={
$0:function(){return this.a.fM(this.b)}}
P.i3.prototype={
$1:function(a){return this.a.fO(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hZ.prototype={
gV:function(a){var u=new P.dm(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
k:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cb(u==null?s.b=P.iS():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cb(t==null?s.c=P.iS():t,b)}else return s.dz(0,b)},
dz:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.iS()
u=s.cc(b)
t=r[u]
if(t==null)r[u]=[s.bc(b)]
else{if(s.ci(t,b)>=0)return!1
t.push(s.bc(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eJ(this.c,b)
else return this.eI(0,b)},
eI:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dL(r,b)
t=s.ci(u,b)
if(t<0)return!1
s.cr(u.splice(t,1)[0])
return!0},
cb:function(a,b){if(a[b]!=null)return!1
a[b]=this.bc(b)
return!0},
eJ:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cr(u)
delete a[b]
return!0},
cj:function(){this.r=1073741823&this.r+1},
bc:function(a){var u,t=this,s=new P.i_(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cj()
return s},
cr:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cj()},
cc:function(a){return J.b2(a)&1073741823},
dL:function(a,b){return a[this.cc(b)]},
ci:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.B(a[t].a,b))return t
return-1}}
P.i_.prototype={}
P.dm.prototype={
gP:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bu(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eW.prototype={$ii:1}
P.n.prototype={
gV:function(a){return new H.ct(a,this.gj(a))},
C:function(a,b){return this.i(a,b)},
fS:function(a,b){var u,t,s=this,r=H.c([],[H.lC(s,a,"n",0)])
C.a.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
fR:function(a){return this.fS(a,!0)},
h:function(a){return P.iE(a,"[","]")}}
P.eZ.prototype={}
P.f_.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.an.prototype={
G:function(a,b){var u,t
for(u=J.bo(this.gan(a));u.A();){t=u.gP(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.bp(this.gan(a))},
h:function(a){return P.jd(a)}}
P.i4.prototype={
h:function(a){return P.iE(this,"{","}")},
C:function(a,b){var u,t,s
P.jn(b,"index")
for(u=P.kR(this,this.r),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
$ii:1}
P.dn.prototype={}
P.ef.prototype={}
P.ek.prototype={}
P.ex.prototype={}
P.hw.prototype={}
P.hx.prototype={
f7:function(a){var u,t,s=P.jo(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.i9(u)
if(t.dK(a,0,s)!==s)t.cs(C.b.bz(a,s-1),0)
return new Uint8Array(u.subarray(0,H.kV(0,t.b,u.length)))}}
P.i9.prototype={
cs:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dK:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bz(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aZ(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cs(r,C.b.aZ(a,p)))s=p}else if(r<=2047){q=n.b
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
P.b0.prototype={}
P.a3.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a3&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.d.b0(u,30))&1073741823},
h:function(a){var u=this,t=P.kb(H.kx(u)),s=P.ce(H.kv(u)),r=P.ce(H.kr(u)),q=P.ce(H.ks(u)),p=P.ce(H.ku(u)),o=P.ce(H.kw(u)),n=P.kc(H.kt(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.H.prototype={}
P.aC.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aC&&this.a===b.a},
gF:function(a){return C.d.gF(this.a)},
h:function(a){var u,t,s,r=new P.ev(),q=this.a
if(q<0)return"-"+new P.aC(0-q).h(0)
u=r.$1(C.d.Z(q,6e7)%60)
t=r.$1(C.d.Z(q,1e6)%60)
s=new P.eu().$1(q%1e6)
return""+C.d.Z(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eu.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ev.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.b5.prototype={}
P.cD.prototype={
h:function(a){return"Throw of null."}}
P.ab.prototype={
gbe:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbd:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbe()+o+u
if(!q.a)return t
s=q.gbd()
r=P.iC(q.b)
return t+s+": "+r}}
P.bd.prototype={
gbe:function(){return"RangeError"},
gbd:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eN.prototype={
gbe:function(){return"RangeError"},
gbd:function(){var u,t=this.b
if(typeof t!=="number")return t.a3()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hu.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hr.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.fZ.prototype={
h:function(a){return"Bad state: "+this.a}}
P.ej.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iC(u)+"."}}
P.fv.prototype={
h:function(a){return"Out of Memory"},
$ib5:1}
P.cM.prototype={
h:function(a){return"Stack Overflow"},
$ib5:1}
P.ep.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.df.prototype={
h:function(a){return"Exception: "+this.a}}
P.eI.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.c2(s,0,75)+"...":s
return t+"\n"+r}}
P.w.prototype={}
P.i.prototype={
gj:function(a){var u,t=this.gV(this)
for(u=0;t.A();)++u
return u},
C:function(a,b){var u,t,s
P.jn(b,"index")
for(u=this.gV(this),t=0;u.A();){s=u.gP(u)
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
h:function(a){return P.ke(this,"(",")")}}
P.eO.prototype={}
P.ba.prototype={$ii:1}
P.cv.prototype={}
P.aN.prototype={
gF:function(a){return P.X.prototype.gF.call(this,this)},
h:function(a){return"null"}}
P.a7.prototype={}
P.X.prototype={constructor:P.X,$iX:1,
n:function(a,b){return this===b},
gF:function(a){return H.bK(this)},
h:function(a){return"Instance of '"+H.e(H.bL(this))+"'"},
toString:function(){return this.h(this)}}
P.t.prototype={}
P.aT.prototype={
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
W.c9.prototype={}
W.b4.prototype={
bY:function(a,b,c){if(c!=null)return a.getContext(b,P.ls(c))
return a.getContext(b)},
d9:function(a,b){return this.bY(a,b,null)},
$ib4:1}
W.aA.prototype={
gj:function(a){return a.length}}
W.el.prototype={
gj:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bw.prototype={
gj:function(a){return a.length}}
W.em.prototype={}
W.a2.prototype={}
W.ae.prototype={}
W.en.prototype={
gj:function(a){return a.length}}
W.eo.prototype={
gj:function(a){return a.length}}
W.eq.prototype={
gj:function(a){return a.length}}
W.er.prototype={
h:function(a){return String(a)}}
W.cg.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[[P.a5,P.a7]]},
$an:function(){return[[P.a5,P.a7]]},
$ii:1,
$ai:function(){return[[P.a5,P.a7]]}}
W.ch.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gat(a))+" x "+H.e(this.gam(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ia5)return!1
return a.left===u.gb5(b)&&a.top===u.gb7(b)&&this.gat(a)===u.gat(b)&&this.gam(a)===u.gam(b)},
gF:function(a){return W.jz(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(this.gat(a)),C.c.gF(this.gam(a)))},
gcw:function(a){return a.bottom},
gam:function(a){return a.height},
gb5:function(a){return a.left},
gbU:function(a){return a.right},
gb7:function(a){return a.top},
gat:function(a){return a.width},
$ia5:1,
$aa5:function(){return[P.a7]}}
W.es.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[P.t]},
$an:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]}}
W.et.prototype={
gj:function(a){return a.length}}
W.hS.prototype={
gj:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.fR(this)
return new J.S(u,u.length)},
$an:function(){return[W.V]},
$ai:function(){return[W.V]}}
W.V.prototype={
gcA:function(a){return new W.hS(a,a.children)},
gcB:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a3()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a3()
if(r<0)r=-r*0
return new P.a5(u,t,s,r,[P.a7])},
h:function(a){return a.localName},
$iV:1}
W.h.prototype={$ih:1}
W.d.prototype={
eY:function(a,b,c,d){if(c!=null)this.dA(a,b,c,!1)},
dA:function(a,b,c,d){return a.addEventListener(b,H.bk(c,1),!1)}}
W.aE.prototype={$iaE:1}
W.eC.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aE]},
$an:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]}}
W.eD.prototype={
gj:function(a){return a.length}}
W.eH.prototype={
gj:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.eL.prototype={
gj:function(a){return a.length}}
W.bz.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.G]},
$an:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.aG.prototype={$iaG:1,
gcD:function(a){return a.data}}
W.bA.prototype={$ibA:1}
W.b8.prototype={$ib8:1}
W.eX.prototype={
h:function(a){return String(a)}}
W.ff.prototype={
gj:function(a){return a.length}}
W.fg.prototype={
i:function(a,b){return P.av(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gan:function(a){var u=H.c([],[P.t])
this.G(a,new W.fh(u))
return u},
gj:function(a){return a.size}}
W.fh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fi.prototype={
i:function(a,b){return P.av(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gan:function(a){var u=H.c([],[P.t])
this.G(a,new W.fj(u))
return u},
gj:function(a){return a.size}}
W.fj.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aM.prototype={$iaM:1}
W.fk.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aM]},
$an:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]}}
W.ai.prototype={$iai:1}
W.hR.prototype={
gV:function(a){var u=this.a.childNodes
return new W.ck(u,u.length)},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$an:function(){return[W.G]},
$ai:function(){return[W.G]}}
W.G.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.dg(a):u},
$iG:1}
W.cC.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.G]},
$an:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.aO.prototype={$iaO:1,
gj:function(a){return a.length}}
W.fx.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aO]},
$an:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]}}
W.fH.prototype={
i:function(a,b){return P.av(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gan:function(a){var u=H.c([],[P.t])
this.G(a,new W.fI(u))
return u},
gj:function(a){return a.size}}
W.fI.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fL.prototype={
gj:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.fV.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aQ]},
$an:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.fW.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aR]},
$an:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gj:function(a){return a.length}}
W.h0.prototype={
i:function(a,b){return a.getItem(b)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gan:function(a){var u=H.c([],[P.t])
this.G(a,new W.h1(u))
return u},
gj:function(a){return a.length}}
W.h1.prototype={
$2:function(a,b){return this.a.push(a)}}
W.as.prototype={$ias:1}
W.aU.prototype={$iaU:1}
W.at.prototype={$iat:1}
W.h6.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.at]},
$an:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]}}
W.h7.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aU]},
$an:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]}}
W.hc.prototype={
gj:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.be.prototype={$ibe:1}
W.hf.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aV]},
$an:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]}}
W.hg.prototype={
gj:function(a){return a.length}}
W.aW.prototype={}
W.hv.prototype={
h:function(a){return String(a)}}
W.hK.prototype={
gj:function(a){return a.length}}
W.aX.prototype={
gfb:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a0("deltaY is not supported"))},
gfa:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a0("deltaX is not supported"))},
$iaX:1}
W.bS.prototype={
eK:function(a,b){return a.requestAnimationFrame(H.bk(b,1))},
dJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hT.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.D]},
$an:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]}}
W.da.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ia5)return!1
return a.left===u.gb5(b)&&a.top===u.gb7(b)&&a.width===u.gat(b)&&a.height===u.gam(b)},
gF:function(a){return W.jz(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(a.width),C.c.gF(a.height))},
gam:function(a){return a.height},
gat:function(a){return a.width}}
W.hW.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aF]},
$an:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]}}
W.dt.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.G]},
$an:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.i5.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aS]},
$an:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]}}
W.i6.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.as]},
$an:function(){return[W.as]},
$ii:1,
$ai:function(){return[W.as]}}
W.hU.prototype={}
W.hV.prototype={
$1:function(a){return this.a.$1(a)}}
W.E.prototype={
gV:function(a){return new W.ck(a,this.gj(a))}}
W.ck.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.e1(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gP:function(a){return this.d}}
W.d9.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.bX.prototype={}
W.bY.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dG.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.bZ.prototype={}
W.c_.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
P.dQ.prototype={$iaG:1,
gcD:function(a){return this.a}}
P.ih.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eE.prototype={
gbh:function(){var u=this.b,t=H.ik(u,"n",0)
return new H.f0(new H.hL(u,new P.eF(),[t]),new P.eG(),[t,W.V])},
k:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bp(this.gbh().a)},
i:function(a,b){var u=this.gbh()
return u.b.$1(J.j4(u.a,b))},
gV:function(a){var u=P.jc(this.gbh(),!1,W.V)
return new J.S(u,u.length)},
$an:function(){return[W.V]},
$ai:function(){return[W.V]}}
P.eF.prototype={
$1:function(a){return!!J.R(a).$iV}}
P.eG.prototype={
$1:function(a){return H.l(a,"$iV")}}
P.i0.prototype={
gbU:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.q(t)
return u+t},
gcw:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.q(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$ia5){t=q.a
if(t==u.gb5(b)){s=q.b
if(s==u.gb7(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.q(r)
if(t+r===u.gbU(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.q(t)
u=s+t===u.gcw(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u=this,t=u.a,s=J.b2(t),r=u.b,q=J.b2(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.q(p)
p=C.d.gF(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.q(t)
t=C.d.gF(r+t)
return P.kQ(P.hY(P.hY(P.hY(P.hY(0,s),q),p),t))}}
P.a5.prototype={
gb5:function(a){return this.a},
gb7:function(a){return this.b},
gat:function(a){return this.c},
gam:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.eT.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$an:function(){return[P.b9]},
$ii:1,
$ai:function(){return[P.b9]}}
P.bb.prototype={$ibb:1}
P.ft.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$an:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]}}
P.fA.prototype={
gj:function(a){return a.length}}
P.h3.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$an:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]}}
P.j.prototype={
gcA:function(a){return new P.eE(a,new W.hR(a))}}
P.bf.prototype={$ibf:1}
P.hh.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$an:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]}}
P.dk.prototype={}
P.dl.prototype={}
P.dw.prototype={}
P.dx.prototype={}
P.dH.prototype={}
P.dI.prototype={}
P.dO.prototype={}
P.dP.prototype={}
P.e7.prototype={
gj:function(a){return a.length}}
P.e8.prototype={
i:function(a,b){return P.av(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gan:function(a){var u=H.c([],[P.t])
this.G(a,new P.e9(u))
return u},
gj:function(a){return a.size}}
P.e9.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ea.prototype={
gj:function(a){return a.length}}
P.b3.prototype={}
P.fu.prototype={
gj:function(a){return a.length}}
P.d8.prototype={}
P.cH.prototype={
fP:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$iaG)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lt(g))
return}if(!!t.$ibA)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.k4("Incorrect number or type of arguments"))}}
P.fY.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return P.av(a.item(b))},
C:function(a,b){return this.i(a,b)},
$an:function(){return[[P.cv,,,]]},
$ii:1,
$ai:function(){return[[P.cv,,,]]}}
P.dD.prototype={}
P.dE.prototype={}
T.e3.prototype={
aB:function(a,b){return!0},
h:function(a){return"all"}}
T.cl.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aB(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cw.prototype={}
T.ap.prototype={
aB:function(a,b){return!this.df(0,b)},
h:function(a){return"!["+this.c3(0)+"]"}}
T.fM.prototype={
dl:function(a){var u,t
if(a.a.length<=0)throw H.f(P.o("May not create a Set with zero characters."))
u=new H.I([P.w,P.b0])
for(t=new H.ct(a,a.gj(a));t.A();)u.l(0,t.d,!0)
this.a=u},
aB:function(a,b){return this.a.cC(0,b)},
h:function(a){var u=this.a
return P.iN(new H.cs(u,[H.c5(u,0)]))}}
R.cN.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.cX(this.a.I(0,b))
r.a=H.c([],[T.cw])
r.c=!1
this.c.push(r)
return r},
fj:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
h:function(a){return this.b}}
R.cU.prototype={
h:function(a){var u=H.jL(this.b,"\n","\\n"),t=H.jL(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.cV.prototype={
h:function(a){return this.b}}
R.hd.prototype={
I:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.cN(this,b)
u.c=H.c([],[R.cX])
this.a.l(0,b,u)}return u},
aY:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.cV(a)
u=P.t
t.c=new H.I([u,u])
this.b.l(0,a,t)}return t},
fT:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[R.cU]),l=this.c,k=[P.w],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.aZ(a,s)
q=l.fj(r)
if(q==null){if(t==null){j.push(r)
p=P.iN(j)
throw H.f(P.o("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.iN(j)
o=l.d
n=o.c.i(0,p)
t=new R.cU(n==null?o.b:n,p,s)}++s}}}}
R.cX.prototype={
h:function(a){return this.b.b+": "+this.c3(0)}}
O.ad.prototype={
ba:function(a){var u=this
u.a=H.c([],[a])
u.d=u.c=u.b=null},
bZ:function(a,b,c){this.b=b
this.c=a
this.d=c},
aD:function(a,b){return this.bZ(a,null,b)},
aJ:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
br:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.S(u,u.length)},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b){var u,t,s=this,r=[H.ik(s,"ad",0)]
if(s.aJ(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.br(t,H.c([b],r))}},
aL:function(a,b){var u,t
if(this.aJ(b)){u=this.a
t=u.length
C.a.aL(u,b)
this.br(t,b)}},
l:function(a,b,c){var u,t,s,r=this,q=r.a
if(b>=q.length)return H.b(q,b)
u=q[b]
if(!J.B(u,c)&&r.aJ(H.c([c],[H.ik(r,"ad",0)]))){q=r.a
if(b>=q.length)return H.b(q,b)
q[b]=c
q=[H.ik(r,"ad",0)]
t=H.c([u],q)
s=r.d
if(s!=null)s.$2(b,t)
r.br(b,H.c([c],q))}},
$ii:1}
O.bE.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.y():u},
au:function(){var u=this.b
if(u!=null)u.u(null)},
gR:function(a){var u=this.a
if(u.length>0)return C.a.gbL(u)
else return V.aL()},
b6:function(a){var u=this.a
if(a==null)u.push(V.aL())
else u.push(a)
this.au()},
ap:function(){var u=this.a
if(u.length>0){u.pop()
this.au()}}}
E.eb.prototype={}
E.am.prototype={
sc0:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().L(0,s.gd3())
u=s.c
if(u!=null)u.gm().k(0,s.gd3())
t=new D.r("shape",r,s.c)
t.b=!0
s.ao(t)}},
scZ:function(a){var u,t,s=this
if(!J.B(s.r,a)){u=s.r
if(u!=null)u.gm().L(0,s.gd1())
if(a!=null)a.gm().k(0,s.gd1())
s.r=a
t=new D.r("mover",u,a)
t.b=!0
s.ao(t)}},
ab:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.B(q,s.x)){u=s.x
s.x=q
t=new D.r("matrix",u,q)
t.b=!0
s.ao(t)}for(r=s.y.a,r=new J.S(r,r.length);r.A();)r.d.ab(0,b)},
a_:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gR(s))
else s.a.push(r.p(0,s.gR(s)))
s.au()
a.bT(t.f)
s=a.dy
u=(s&&C.a).gbL(s)
if(u!=null&&t.d!=null)u.d6(a,t)
for(s=t.y.a,s=new J.S(s,s.length);s.A();)s.d.a_(a)
a.bS()
a.dx.ap()},
ao:function(a){var u=this.z
if(u!=null)u.u(a)},
W:function(){return this.ao(null)},
d4:function(a){this.e=null
this.ao(a)},
fA:function(){return this.d4(null)},
d2:function(a){this.ao(a)},
fz:function(){return this.d2(null)},
d0:function(a){this.ao(a)},
fu:function(){return this.d0(null)},
ft:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd_(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.af()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.W()},
fw:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gd_(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.af()
q.d=0
r.z=q}q.L(0,t)}}this.W()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fD.prototype={
dk:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a3(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bE()
t=[V.a8]
u.a=H.c([],t)
u.gm().k(0,new E.fE(s))
s.cy=u
u=new O.bE()
u.a=H.c([],t)
u.gm().k(0,new E.fF(s))
s.db=u
u=new O.bE()
u.a=H.c([],t)
u.gm().k(0,new E.fG(s))
s.dx=u
u=H.c([],[O.cQ])
s.dy=u
u.push(null)
s.fr=new H.I([P.t,A.cI])},
gfJ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gR(s)
u=t.db
u=t.z=s.p(0,u.gR(u))
s=u}return s},
bT:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbL(u):a)},
bS:function(){var u=this.dy
if(u.length>1)u.pop()},
cu:function(a){var u=a.b
if(u.length===0)throw H.f(P.o("May not cache a shader with no name."))
if(this.fr.cC(0,u))throw H.f(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)}}
E.fE.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fF.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fG.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.cS.prototype={
c9:function(a){this.d7()},
c8:function(){return this.c9(null)},
gfk:function(){var u,t=this,s=Date.now(),r=C.d.Z(P.ja(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a3(s,!1)
return u/r},
cn:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.q(r)
u=C.c.bI(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.c.bI(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.js(C.h,s.gfL())}},
d7:function(){if(!this.cx){this.cx=!0
var u=window
C.p.dJ(u)
C.p.eK(u,W.jC(new E.hb(this),P.a7))}},
fK:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cn()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a3(r,!1)
s.y=P.ja(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.au()
r=s.db
C.a.sj(r.a,0)
r.au()
r=s.dx
C.a.sj(r.a,0)
r.au()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a_(p.e)}}catch(q){u=H.iu(q)
t=H.iY(q)
P.j1("Error: "+H.e(u))
P.j1("Stack: "+H.e(t))
throw H.f(u)}}}
E.hb.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fK()}}}
Z.d5.prototype={}
Z.ca.prototype={
T:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.iu(s)
t=P.o('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.d6.prototype={}
Z.bs.prototype={
al:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
T:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].T(a)},
as:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a_:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.t],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a1(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")}}
Z.b6.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bL(this.c))+"'")+"]"}}
Z.au.prototype={
gc1:function(a){var u=this.a,t=(u&$.aa().a)!==0?3:0
if((u&$.ay().a)!==0)t+=3
if((u&$.ax().a)!==0)t+=3
if((u&$.b1().a)!==0)t+=2
if((u&$.az().a)!==0)t+=3
if((u&$.c6().a)!==0)t+=3
if((u&$.c7().a)!==0)t+=4
if((u&$.bn().a)!==0)++t
return(u&$.aw().a)!==0?t+4:t},
f0:function(a){var u,t=$.aa(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.ay()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ax()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.az()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aw()
if((s&t.a)!==0)if(u===a)return t
return $.k0()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.au))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.t]),t=this.a
if((t&$.aa().a)!==0)u.push("Pos")
if((t&$.ay().a)!==0)u.push("Norm")
if((t&$.ax().a)!==0)u.push("Binm")
if((t&$.b1().a)!==0)u.push("Txt2D")
if((t&$.az().a)!==0)u.push("TxtCube")
if((t&$.c6().a)!==0)u.push("Clr3")
if((t&$.c7().a)!==0)u.push("Clr4")
if((t&$.bn().a)!==0)u.push("Weight")
if((t&$.aw().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.ee.prototype={}
D.af.prototype={
k:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.M]}]):u).push(b)},
L:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.ae(s,b)
if(s===!0){s=t.a
u=(s&&C.a).L(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.ae(s,b)
if(s===!0){s=t.b
u=(s&&C.a).L(s,b)||u}return u},
u:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.M()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.G(P.jc(u,!0,{func:1,ret:-1,args:[D.M]}),new D.eA(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.M]}])
C.a.G(u,new D.eB(q))}return!0},
fg:function(){return this.u(null)},
aq:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.u(u)}}}}
D.eA.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eB.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.M.prototype={}
D.aH.prototype={}
D.aI.prototype={}
D.r.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cb.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cb))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cq.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cq))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.eS.prototype={
fF:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
fB:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}}
X.cu.prototype={}
X.eY.prototype={
aH:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.T(o.a+n*m,o.b+u*t)
t=q.a.gaA()
r=new X.ao(a,V.aq(),q.x,t,s)
r.b=!0
q.z=new P.a3(p,!1)
q.x=s
return r},
bR:function(a,b){this.r=a.a
return!1},
aU:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dc()
if(typeof u!=="number")return u.af()
this.r=(u&~t)>>>0
return!1},
aT:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.aH(a,b))
return!0},
fG:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaA()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.bF(new V.z(s*r,q*p),u,t)
t.b=!0
n.u(t)
return!0},
ei:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cu(c,r.a.gaA(),b)
s.b=!0
t.u(s)
r.y=new P.a3(u,!1)
r.x=V.aq()}}
X.a4.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a4))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ao.prototype={}
X.fl.prototype={
bf:function(a,b,c){var u=this,t=new P.a3(Date.now(),!1),s=u.a.gaA(),r=new X.ao(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bR:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.u(this.bf(a,b,!0))
return!0},
aU:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dc()
if(typeof t!=="number")return t.af()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.u(u.bf(a,b,!0))
return!0},
aT:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.bf(a,b,!1))
return!0},
fH:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaA()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.bF(new V.z(t*s,r*q),u,b)
u.b=!0
o.u(u)
return!0},
gcF:function(){var u=this.b
return u==null?this.b=D.y():u},
gbW:function(){var u=this.c
return u==null?this.c=D.y():u},
gcY:function(){var u=this.d
return u==null?this.d=D.y():u}}
X.bF.prototype={}
X.fz.prototype={}
X.cW.prototype={}
X.he.prototype={
aH:function(a,b){var u=this,t=new P.a3(Date.now(),!1),s=a.length>0?a[0]:V.aq(),r=u.a.gaA(),q=new X.cW(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fE:function(a){var u=this.b
if(u==null)return!1
u.u(this.aH(a,!0))
return!0},
fC:function(a){var u=this.c
if(u==null)return!1
u.u(this.aH(a,!0))
return!0},
fD:function(a){var u=this.d
if(u==null)return!1
u.u(this.aH(a,!1))
return!0}}
X.d0.prototype={
gaA:function(){var u=this.a,t=C.f.gcB(u).c
t.toString
u=C.f.gcB(u).d
u.toString
return V.fC(0,0,t,u)},
cf:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cq(u,new X.a4(t,a.altKey,a.shiftKey))},
az:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a4(t,a.altKey,a.shiftKey)},
bv:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a4(t,a.altKey,a.shiftKey)},
aj:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.E()
u=t.top
if(typeof r!=="number")return r.E()
return new V.T(s-q,r-u)},
aK:function(a){return new V.z(a.movementX,a.movementY)},
bs:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.T])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.c.aa(r.pageX)
C.c.aa(r.pageY)
p=o.left
C.c.aa(r.pageX)
n.push(new V.T(q-p,C.c.aa(r.pageY)-o.top))}return n},
ah:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cb(u,new X.a4(t,a.altKey,a.shiftKey))},
bi:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.E()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.E()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ec:function(a){this.f=!0},
e0:function(a){this.f=!1},
e6:function(a){if(this.f&&this.bi(a))a.preventDefault()},
eg:function(a){var u
if(!this.f)return
u=this.cf(a)
this.b.fF(u)},
ee:function(a){var u
if(!this.f)return
u=this.cf(a)
this.b.fB(u)},
ek:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.az(a)
if(r.x){u=r.ah(a)
t=r.aK(a)
if(r.d.bR(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ah(a)
s=r.aj(a)
if(r.c.bR(u,s))a.preventDefault()},
eo:function(a){var u,t,s,r=this
r.az(a)
u=r.ah(a)
if(r.x){t=r.aK(a)
if(r.d.aU(u,t))a.preventDefault()
return}if(r.r)return
s=r.aj(a)
if(r.c.aU(u,s))a.preventDefault()},
ea:function(a){var u,t,s,r=this
if(!r.bi(a)){r.az(a)
u=r.ah(a)
if(r.x){t=r.aK(a)
if(r.d.aU(u,t))a.preventDefault()
return}if(r.r)return
s=r.aj(a)
if(r.c.aU(u,s))a.preventDefault()}},
em:function(a){var u,t,s,r=this
r.az(a)
u=r.ah(a)
if(r.x){t=r.aK(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(r.r)return
s=r.aj(a)
if(r.c.aT(u,s))a.preventDefault()},
e8:function(a){var u,t,s,r=this
if(!r.bi(a)){r.az(a)
u=r.ah(a)
if(r.x){t=r.aK(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(r.r)return
s=r.aj(a)
if(r.c.aT(u,s))a.preventDefault()}},
eq:function(a){var u,t,s=this
s.az(a)
u=new V.z((a&&C.o).gfa(a),C.o.gfb(a)).t(0,180)
if(s.x){if(s.d.fG(u))a.preventDefault()
return}if(s.r)return
t=s.aj(a)
if(s.c.fH(u,t))a.preventDefault()},
es:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ah(s.y)
t=s.aj(s.y)
s.d.ei(u,t,r)}},
eH:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bv(a)
u=t.bs(a)
if(t.e.fE(u))a.preventDefault()},
eD:function(a){var u
this.bv(a)
u=this.bs(a)
if(this.e.fC(u))a.preventDefault()},
eF:function(a){var u
this.bv(a)
u=this.bs(a)
if(this.e.fD(u))a.preventDefault()}}
D.aB.prototype={
ag:function(a){var u=this.r
if(u!=null)u.u(a)},
dq:function(){return this.ag(null)},
$iZ:1}
D.Z.prototype={}
D.cr.prototype={
ag:function(a){var u=this.x
if(u!=null)u.u(a)},
cl:function(a){var u=this.y
if(u!=null)u.u(a)},
eh:function(){return this.cl(null)},
ev:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.dF(s))return!1}return!0},
dT:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gck(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.aB)this.e.push(q)
p=q.r
if(p==null){p=new D.af()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.aH()
u.b=!0
this.ag(u)},
ez:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gck(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r instanceof D.aB)C.a.L(this.e,r)
q=r.r
if(q==null){q=new D.af()
q.d=0
r.r=q}q.L(0,t)}u=new D.aI()
u.b=!0
this.ag(u)},
dF:function(a){var u=C.a.ae(this.e,a)
return u},
$ai:function(){return[D.Z]},
$aad:function(){return[D.Z]}}
D.fy.prototype={$iZ:1}
D.fX.prototype={$iZ:1}
V.K.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.al.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.ez.prototype={}
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
V.a8.prototype={
a2:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.H])
return t},
bK:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a1.f,a4=a1.b,a5=a1.e,a6=a2*a3-a4*a5,a7=a1.r,a8=a1.c,a9=a2*a7-a8*a5,b0=a1.x,b1=a1.d
if(typeof b1!=="number")return b1.p()
u=a2*b0-b1*a5
t=a4*a7-a8*a3
s=a4*b0-b1*a3
r=a8*b0-b1*a7
q=a1.y
p=a1.cy
o=a1.z
n=a1.cx
m=q*p-o*n
l=a1.db
k=a1.Q
j=q*l-k*n
i=a1.dx
h=a1.ch
g=q*i-h*n
f=o*l-k*p
e=o*i-h*p
d=k*i-h*l
c=a6*d-a9*e+u*f+t*g-s*j+r*m
if(Math.abs(c-0)<$.x().a)return V.aL()
b=1/c
a=-a5
a0=-n
return V.ah((a3*d-a7*e+b0*f)*b,(-a4*d+a8*e-b1*f)*b,(p*r-l*s+i*t)*b,(-o*r+k*s-h*t)*b,(a*d+a7*g-b0*j)*b,(a2*d-a8*g+b1*j)*b,(a0*r+l*u-i*a9)*b,(q*r-k*u+h*a9)*b,(a5*e-a3*g+b0*m)*b,(-a2*e+a4*g-b1*m)*b,(n*s-p*u+i*a6)*b,(-q*s+o*u-h*a6)*b,(a*f+a3*j-a7*m)*b,(a2*f-a4*j+a8*m)*b,(a0*t+p*a9-l*a6)*b,(q*t-o*a9+k*a6)*b)},
p:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a,a5=b3.a,a6=a3.b,a7=b3.e,a8=a3.c,a9=b3.y,b0=a3.d,b1=b3.cx
if(typeof b0!=="number")return b0.p()
u=b3.b
t=b3.f
s=b3.z
r=b3.cy
q=b3.c
p=b3.r
o=b3.Q
n=b3.db
m=b3.d
if(typeof m!=="number")return H.q(m)
l=b3.x
k=b3.ch
j=b3.dx
i=a3.e
h=a3.f
g=a3.r
f=a3.x
e=a3.y
d=a3.z
c=a3.Q
b=a3.ch
a=a3.cx
a0=a3.cy
a1=a3.db
a2=a3.dx
return V.ah(a4*a5+a6*a7+a8*a9+b0*b1,a4*u+a6*t+a8*s+b0*r,a4*q+a6*p+a8*o+b0*n,a4*m+a6*l+a8*k+b0*j,i*a5+h*a7+g*a9+f*b1,i*u+h*t+g*s+f*r,i*q+h*p+g*o+f*n,i*m+h*l+g*k+f*j,e*a5+d*a7+c*a9+b*b1,e*u+d*t+c*s+b*r,e*q+d*p+c*o+b*n,e*m+d*l+c*k+b*j,a*a5+a0*a7+a1*a9+a2*b1,a*u+a0*t+a1*s+a2*r,a*q+a0*p+a1*o+a2*n,a*m+a0*l+a1*k+a2*j)},
b8:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.v(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bV:function(a){var u=this,t=a.a,s=a.b,r=a.c,q=u.d
if(typeof q!=="number")return H.q(q)
return new V.U(u.a*t+u.b*s+u.c*r+q,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.x()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
u=b.d
r=q.d
t.toString
if(typeof u!=="number")return u.E()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
if(!(Math.abs(b.y-q.y)<s))return!1
if(!(Math.abs(b.z-q.z)<s))return!1
if(!(Math.abs(b.Q-q.Q)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
h:function(a){return this.H()},
v:function(a){var u,t,s,r,q,p=this,o=[P.H],n=V.bm(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bm(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bm(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bm(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
H:function(){return this.v("")}}
V.T.prototype={
E:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.U.prototype={
E:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.ar.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ar))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.cG.prototype={
ga1:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cG))return!1
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
bM:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.q(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.z(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.x().a){u=$.jw
return u==null?$.jw=new V.z(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.z(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=this.a
s=$.x()
s.toString
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.q(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.v.prototype={
bM:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bN:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.v(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aQ:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.v(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.v(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.v(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.x().a)return V.d4()
return new V.v(this.a/b,this.b/b,this.c/b)},
cV:function(){var u=$.x().a
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
U.ei.prototype={
bb:function(a){var u=V.lU(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.y():u},
J:function(a){var u=this.y
if(u!=null)u.u(a)},
sbX:function(a,b){},
sbO:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.x().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bb(u)}s=new D.r("maximumLocation",s,t.b)
s.b=!0
t.J(s)}},
sbQ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.x().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bb(u)}s=new D.r("minimumLocation",s,t.c)
s.b=!0
t.J(s)}},
sa0:function(a,b){var u,t=this
b=t.bb(b)
u=t.d
if(!(Math.abs(u-b)<$.x().a)){t.d=b
u=new D.r("location",u,b)
u.b=!0
t.J(u)}},
sbP:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.x().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.r("maximumVelocity",r,a)
r.b=!0
s.J(r)}},
sM:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.x().a)){u.f=a
t=new D.r("velocity",t,a)
t.b=!0
u.J(t)}},
sbB:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.x().a)){this.x=a
u=new D.r("dampening",u,a)
u.b=!0
this.J(u)}},
ab:function(a,b){var u,t,s,r=this,q=r.f,p=$.x().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.x().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sM(u)}}}
U.bv.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.y():u},
sR:function(a,b){var u,t,s,r=this
if(b==null)b=V.aL()
if(!J.B(r.a,b)){u=r.a
r.a=b
t=new D.r("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.u(t)}},
aC:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bv))return!1
return J.B(this.a,b.a)},
h:function(a){return"Constant: "+this.a.v("          ")}}
U.by.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.y():u},
J:function(a){var u=this.e
if(u!=null)u.u(a)},
Y:function(){return this.J(null)},
ds:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gav(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aH()
u.b=!0
this.J(u)},
ex:function(a,b){var u,t,s,r
for(u=b.length,t=this.gav(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r!=null)r.gm().L(0,t)}u=new D.aI()
u.b=!0
this.J(u)},
aC:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a3()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.S(r,r.length),u=null;r.A();){q=r.d
if(q!=null){t=q.aC(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.aL():u
r=s.e
if(r!=null)r.aq(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.by))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.B(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.W]},
$aad:function(){return[U.W]},
$iW:1}
U.W.prototype={}
U.d1.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.y():u},
J:function(a){var u=this.cy
if(u!=null)u.u(a)},
Y:function(){return this.J(null)},
aM:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcF().k(0,u.gbj())
u.a.c.gcY().k(0,u.gbl())
u.a.c.gbW().k(0,u.gbn())
return!0},
bk:function(a){var u=this
if(!J.B(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bm:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iao")
if(!n.y)return
if(n.x){u=a.d.E(0,a.y)
u=new V.z(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.E(0,a.y)
u=new V.z(t.a,t.b).p(0,2).t(0,u.ga1())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.q(s)
t.sM(u*10*s)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=new V.z(s.a,s.b).p(0,2).t(0,u.ga1())
s=n.b
q=r.a
if(typeof q!=="number")return q.K()
p=n.e
if(typeof p!=="number")return H.q(p)
o=n.z
if(typeof o!=="number")return H.q(o)
s.sa0(0,-q*p+o)
n.b.sM(0)
t=t.E(0,a.z)
n.Q=new V.z(t.a,t.b).p(0,2).t(0,u.ga1())}n.Y()},
bo:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.q(s)
u.sM(t*10*s)
r.Y()}},
aC:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a3()
if(q<p){r.ch=p
u=b.y
r.b.ab(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ah(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iW:1}
U.d2.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.y():u},
J:function(a){var u=this.fx
if(u!=null)u.u(a)},
Y:function(){return this.J(null)},
aM:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcF().k(0,s.gbj())
s.a.c.gcY().k(0,s.gbl())
s.a.c.gbW().k(0,s.gbn())
u=s.a.d
t=u.f
u=t==null?u.f=D.y():t
u.k(0,s.gdM())
u=s.a.d
t=u.d
u=t==null?u.d=D.y():t
u.k(0,s.gdO())
u=s.a.e
t=u.b
u=t==null?u.b=D.y():t
u.k(0,s.geW())
u=s.a.e
t=u.d
u=t==null?u.d=D.y():t
u.k(0,s.geU())
u=s.a.e
t=u.c
u=t==null?u.c=D.y():t
u.k(0,s.geS())
return!0},
ad:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.K()
u=-u}if(this.r){if(typeof t!=="number")return t.K()
t=-t}return new V.z(u,t)},
bk:function(a){var u=this
H.l(a,"$iao")
if(!J.B(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bm:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iao")
if(!n.cx)return
if(n.ch){u=a.d.E(0,a.y)
u=new V.z(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.E(0,a.y)
u=n.ad(new V.z(t.a,t.b).p(0,2).t(0,u.ga1()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.K()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.K()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ad(new V.z(s.a,s.b).p(0,2).t(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sa0(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.ad(new V.z(t.a,t.b).p(0,2).t(0,u.ga1()))}n.Y()},
bo:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.K()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.K()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sM(-t*10*u)
r.Y()}},
dN:function(a){var u=this
if(H.l(a,"$icu").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dP:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iao")
if(!J.B(n.d,a.x.b))return
u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ad(new V.z(s.a,s.b).p(0,2).t(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sa0(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.ad(new V.z(t.a,t.b).p(0,2).t(0,u.ga1()))
n.Y()},
eX:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eV:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$icW")
if(!n.cx)return
if(n.ch){u=a.d.E(0,a.y)
u=new V.z(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.E(0,a.y)
u=n.ad(new V.z(t.a,t.b).p(0,2).t(0,u.ga1()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.K()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.K()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ad(new V.z(s.a,s.b).p(0,2).t(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sa0(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.ad(new V.z(t.a,t.b).p(0,2).t(0,u.ga1()))}n.Y()},
eT:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.K()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.K()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sM(-t*10*u)
r.Y()}},
aC:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a3()
if(q<p){r.dy=p
u=b.y
r.c.ab(0,u)
r.b.ab(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.fr=V.ah(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1).p(0,V.iJ(r.c.d))}return r.fr},
$iW:1}
U.d3.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.y():u},
J:function(a){var u=this.r
if(u!=null)u.u(a)},
aM:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.y():t
t=r.gdQ()
u.k(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.y():s).k(0,t)
return!0},
dR:function(a){var u,t,s,r,q=this
if(!J.B(q.b,q.a.b.c))return
H.l(a,"$ibF")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.r("zoom",u,r)
u.b=!0
q.J(u)}},
aC:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kp(u,u,u)}return t.f},
$iW:1}
M.cd.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.y():u},
O:function(a){var u=this.r
if(u!=null)u.u(a)},
aG:function(){return this.O(null)},
saN:function(a){var u,t,s=this
if(a==null)a=new X.eM()
u=s.b
if(u!==a){if(u!=null)u.gm().L(0,s.gN())
t=s.b
s.b=a
a.gm().k(0,s.gN())
u=new D.r("camera",t,s.b)
u.b=!0
s.O(u)}},
saV:function(a,b){var u,t,s=this
if(b==null)b=X.eK(null)
u=s.c
if(u!==b){if(u!=null)u.gm().L(0,s.gN())
t=s.c
s.c=b
b.gm().k(0,s.gN())
u=new D.r("target",t,s.c)
u.b=!0
s.O(u)}},
saW:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().L(0,t.gN())
u=t.d
t.d=a
if(a!=null)a.gm().k(0,t.gN())
s=new D.r("technique",u,t.d)
s.b=!0
t.O(s)}},
a_:function(a){var u=this
a.bT(u.d)
u.c.T(a)
u.b.T(a)
u.e.ab(0,a)
u.e.a_(a)
u.b.as(a)
u.c.toString
a.bS()},
$iaP:1}
M.ci.prototype={
O:function(a){var u=this.y
if(u!=null)u.u(a)},
aG:function(){return this.O(null)},
e2:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gN(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.af()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aH()
u.b=!0
this.O(u)},
e4:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gN(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.af()
q.d=0
r.z=q}q.L(0,t)}}u=new D.aI()
u.b=!0
this.O(u)},
saN:function(a){var u,t,s=this
if(a==null)a=X.iL(null)
u=s.b
if(u!==a){if(u!=null)u.gm().L(0,s.gN())
t=s.b
s.b=a
a.gm().k(0,s.gN())
u=new D.r("camera",t,s.b)
u.b=!0
s.O(u)}},
saV:function(a,b){var u,t,s=this
if(b==null)b=X.eK(null)
u=s.c
if(u!==b){if(u!=null)u.gm().L(0,s.gN())
t=s.c
s.c=b
b.gm().k(0,s.gN())
u=new D.r("target",t,s.c)
u.b=!0
s.O(u)}},
saW:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().L(0,t.gN())
u=t.d
t.d=a
if(a!=null)a.gm().k(0,t.gN())
s=new D.r("technique",u,t.d)
s.b=!0
t.O(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.y():u},
a_:function(a){var u,t=this
a.bT(t.d)
t.c.T(a)
t.b.T(a)
u=t.d
if(u!=null)u.ab(0,a)
for(u=t.e.a,u=new J.S(u,u.length);u.A();)u.d.ab(0,a)
for(u=t.e.a,u=new J.S(u,u.length);u.A();)u.d.a_(a)
t.b.toString
a.cy.ap()
a.db.ap()
t.c.toString
a.bS()},
$iaP:1}
M.aP.prototype={}
M.fK.prototype={}
M.cO.prototype={
gm:function(){var u=this.db
return u==null?this.db=D.y():u},
O:function(a){var u=this.db
if(u!=null)u.u(a)},
aG:function(){return this.O(null)},
dV:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gN(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aH()
u.b=!0
this.O(u)},
eB:function(a,b){var u,t,s,r
for(u=b.length,t=this.gN(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r!=null)r.gm().L(0,t)}u=new D.aI()
u.b=!0
this.O(u)},
a_:function(a){var u,t,s=this
s.z.sd5(0,s.x)
for(u=s.Q.a,u=new J.S(u,u.length);u.A();){t=u.d
t.saV(0,s.z)
t.saN(s.f)
t.a_(a)}s.z.sd5(0,s.y)
for(u=s.Q.a,u=new J.S(u,u.length);u.A();){t=u.d
t.saV(0,s.z)
t.saN(s.r)
t.a_(a)}}}
A.c8.prototype={}
A.e6.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cE:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.P.prototype={
gac:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
h:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.P))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.f2.prototype={
dj:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aT("")
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
A.la(c0,u)
A.lc(c0,u)
A.lb(c0,u)
A.le(c0,u)
A.lf(c0,u)
A.ld(c0,u)
A.lg(c0,u)
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
b5.cU(0,s.charCodeAt(0)==0?s:s,A.l9(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.l(b5.y.D(0,"invViewMat"),"$ia_")
if(t)b5.dy=H.l(b5.y.D(0,"objMat"),"$ia_")
if(r)b5.fr=H.l(b5.y.D(0,"viewObjMat"),"$ia_")
b5.fy=H.l(b5.y.D(0,"projViewObjMat"),"$ia_")
if(c0.ry)b5.k1=H.l(b5.y.D(0,"txt2DMat"),"$ibO")
if(c0.x1)b5.k2=H.l(b5.y.D(0,"txtCubeMat"),"$ia_")
if(c0.x2)b5.k3=H.l(b5.y.D(0,"colorMat"),"$ia_")
b5.r1=H.c([],[A.a_])
t=c0.y2
if(t>0){b5.k4=b5.y.D(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.p(P.o(b7+q+b8))
s.push(H.l(m,"$ia_"))}}t=c0.a
if(t.a)b5.r2=H.l(b5.y.D(0,"emissionClr"),"$iC")
if(t.c)b5.ry=H.l(b5.y.D(0,"emissionTxt"),"$iN")
t=c0.b
if(t.a)b5.x1=H.l(b5.y.D(0,"ambientClr"),"$iC")
if(t.c)b5.y1=H.l(b5.y.D(0,"ambientTxt"),"$iN")
t=c0.c
if(t.a)b5.y2=H.l(b5.y.D(0,"diffuseClr"),"$iC")
if(t.c)b5.b3=H.l(b5.y.D(0,"diffuseTxt"),"$iN")
t=c0.d
if(t.a)b5.cG=H.l(b5.y.D(0,"invDiffuseClr"),"$iC")
if(t.c)b5.cH=H.l(b5.y.D(0,"invDiffuseTxt"),"$iN")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.cK=H.l(b5.y.D(0,"shininess"),"$iL")
if(s)b5.cI=H.l(b5.y.D(0,"specularClr"),"$iC")
if(t.c)b5.cJ=H.l(b5.y.D(0,"specularTxt"),"$iN")}if(c0.f.c)b5.cL=H.l(b5.y.D(0,"bumpTxt"),"$iN")
if(c0.cy){b5.cM=H.l(b5.y.D(0,"envSampler"),"$iN")
t=c0.r
if(t.a)b5.cN=H.l(b5.y.D(0,"reflectClr"),"$iC")
if(t.c)b5.cO=H.l(b5.y.D(0,"reflectTxt"),"$iN")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.cP=H.l(b5.y.D(0,"refraction"),"$iL")
if(s)b5.cQ=H.l(b5.y.D(0,"refractClr"),"$iC")
if(t.c)b5.cR=H.l(b5.y.D(0,"refractTxt"),"$iN")}}t=c0.y
if(t.a)b5.cS=H.l(b5.y.D(0,"alpha"),"$iL")
if(t.c)b5.cT=H.l(b5.y.D(0,"alphaTxt"),"$iN")
t=P.w
s=[t,A.cZ]
b5.bC=new H.I(s)
b5.bD=new H.I([t,[P.ba,A.bN]])
b5.bE=new H.I(s)
b5.bF=new H.I([t,[P.ba,A.bP]])
b5.bG=new H.I(s)
b5.bH=new H.I([t,[P.ba,A.bQ]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.bN],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.af()
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
H.l(e,"$ibg")
a=e}else a=b6
h.push(new A.bN(b,c,d,m,f,a))}b5.bD.l(0,j,h)
q=b5.bC
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}for(t=c0.Q,s=t.length,r=[A.bP],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
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
if(typeof j!=="number")return j.af()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$ibO")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$iN")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$iN")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.p(P.o(b7+o+b8))
H.l(a2,"$ibM")
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
a8=a7}h.push(new A.bP(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bF.l(0,j,h)
q=b5.bE
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}for(t=c0.ch,s=t.length,r=[A.bQ],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
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
if(typeof j!=="number")return j.af()
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
H.l(a2,"$ibM")
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
H.l(a2,"$ibg")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.p(P.o(b7+o+b8))
H.l(a2,"$ibg")
a3=a2}else a3=b6
h.push(new A.bQ(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bH.l(0,j,h)
q=b5.bG
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}}},
a5:function(a,b){if(b!=null&&b.d>=6)a.c_(b)}}
A.cf.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cF.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.cL.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.f5.prototype={
h:function(a){return this.aR}}
A.bN.prototype={}
A.bP.prototype={}
A.bQ.prototype={}
A.cI.prototype={
c6:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cU:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cg(b,35633)
r.f=r.cg(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.o("Failed to link shader: "+H.e(s)))}r.eO()
r.eQ()},
T:function(a){a.a.useProgram(this.r)
this.x.fh()},
cg:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
eO:function(){var u,t,s,r=this,q=H.c([],[A.c8]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.c8(p,t.name,s))}r.x=new A.e6(q)},
eQ:function(){var u,t,s,r=this,q=H.c([],[A.cY]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.f9(t.type,t.size,t.name,s))}r.y=new A.hp(q)},
aw:function(a,b,c){var u=this.a
if(a===1)return new A.cZ(u,b,c)
else return A.iP(u,this.r,b,a,c)},
dG:function(a,b,c){var u=this.a
if(a===1)return new A.bg(u,b,c)
else return A.iP(u,this.r,b,a,c)},
dH:function(a,b,c){var u=this.a
if(a===1)return new A.N(u,b,c)
else return A.iP(u,this.r,b,a,c)},
b1:function(a,b){return new P.df(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
f9:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aw(b,c,d)
case 5121:return u.aw(b,c,d)
case 5122:return u.aw(b,c,d)
case 5123:return u.aw(b,c,d)
case 5124:return u.aw(b,c,d)
case 5125:return u.aw(b,c,d)
case 5126:return new A.L(u.a,c,d)
case 35664:return new A.hl(u.a,c,d)
case 35665:return new A.C(u.a,c,d)
case 35666:return new A.bM(u.a,c,d)
case 35667:return new A.hm(u.a,c,d)
case 35668:return new A.hn(u.a,c,d)
case 35669:return new A.ho(u.a,c,d)
case 35674:return new A.hq(u.a,c,d)
case 35675:return new A.bO(u.a,c,d)
case 35676:return new A.a_(u.a,c,d)
case 35678:return u.dG(b,c,d)
case 35680:return u.dH(b,c,d)
case 35670:throw H.f(u.b1("BOOL",c))
case 35671:throw H.f(u.b1("BOOL_VEC2",c))
case 35672:throw H.f(u.b1("BOOL_VEC3",c))
case 35673:throw H.f(u.b1("BOOL_VEC4",c))
default:throw H.f(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.fU.prototype={}
A.cY.prototype={}
A.hp.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.H()},
H:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.cZ.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hm.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hn.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.ho.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hk.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.L.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hl.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.C.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bM.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hq.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bO.prototype={
a8:function(a){var u=new Float32Array(H.c1(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a_.prototype={
a8:function(a){var u=new Float32Array(H.c1(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bg.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.N.prototype={
c_:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.ib.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bN(s.b,b).bN(s.d.bN(s.c,b),c)
s=new V.U(r.a,r.b,r.c)
if(!J.B(a.f,s)){a.f=s
s=a.a
if(s!=null)s.W()}a.saX(r.t(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
u=new V.ar(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.B(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.W()}}}
F.aD.prototype={
dC:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d4()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.cV())return
return s.t(0,Math.sqrt(s.w(s)))},
dE:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.E(0,q)
r=new V.v(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.w(r)))
r=t.E(0,q)
r=new V.v(r.a,r.b,r.c)
r=s.aQ(r.t(0,Math.sqrt(r.w(r))))
return r.t(0,Math.sqrt(r.w(r)))},
by:function(){var u,t=this
if(t.d!=null)return!0
u=t.dC()
if(u==null){u=t.dE()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
dB:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d4()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.cV())return
return s.t(0,Math.sqrt(s.w(s)))},
dD:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.x().a){l=d.E(0,g)
l=new V.v(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.K(0)}else{p=(l-u.b)/r
l=d.E(0,g)
l=new V.U(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).E(0,j)
l=new V.v(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.K(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.w(l)))
l=o.aQ(q)
l=l.t(0,Math.sqrt(l.w(l))).aQ(o)
q=l.t(0,Math.sqrt(l.w(l)))}return q},
bw:function(){var u,t=this
if(t.e!=null)return!0
u=t.dB()
if(u==null){u=t.dD()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.H()},
v:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.a7(J.a1(s.e),0)+", "+C.b.a7(J.a1(t.b.e),0)+", "+C.b.a7(J.a1(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
H:function(){return this.v("")}}
F.bC.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.H()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.a7(J.a1(u.e),0)+", "+C.b.a7(J.a1(this.b.e),0)},
H:function(){return this.v("")}}
F.bI.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.H()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a7(J.a1(u.e),0)},
H:function(){return this.v("")}}
F.fN.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.y():u},
fq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.U()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.k(0,r.f8())}h.a.U()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.k(0,n)
o=new F.bI()
if(n.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.u(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.k(0,l)
p.a.k(0,k)
F.ki(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.U()
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
F.bx(l,k,i)}g=h.e
if(g!=null)g.aq(0)},
ak:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ak()||!1
if(!t.a.ak())u=!1
s=t.e
if(s!=null)s.aq(0)
return u},
cz:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aa()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.ay().a)!==0)++s
if((t&$.ax().a)!==0)++s
if((t&$.b1().a)!==0)++s
if((t&$.az().a)!==0)++s
if((t&$.c6().a)!==0)++s
if((t&$.c7().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.aw().a)!==0)++s
r=a4.gc1(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.H])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.ca])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.f0(m)
k=l.gc1(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.ca(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].fp(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.c1(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bs(new Z.d5(a1,d),o,a4)
c.b=H.c([],[Z.b6])
if(a0.b.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)}a=Z.iR(u,34963,b)
c.b.push(new Z.b6(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.U()
b.push(t.e)}a=Z.iR(u,34963,b)
c.b.push(new Z.b6(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.U()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.U()
b.push(t.e)}a=Z.iR(u,34963,b)
c.b.push(new Z.b6(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.t])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.v(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.v(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.v(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.v(t))}return C.a.q(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.u(null)}}
F.fO.prototype={
eZ:function(a){var u,t,s,r,q=H.c([],[F.aD]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.k(0,p)
u.a.k(0,s)
u.a.k(0,r)
q.push(F.bx(p,s,r))}return q},
f_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aD])
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
h.push(F.bx(m,l,j))
u.a.k(0,m)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bx(m,j,i))}else{n.k(0,l)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bx(l,j,i))
u.a.k(0,l)
u.a.k(0,i)
u.a.k(0,m)
h.push(F.bx(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
ak:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].by())s=!1
return s},
bx:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bw())s=!1
return s},
h:function(a){return this.H()},
v:function(a){var u,t,s,r=H.c([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(a))
return C.a.q(r,"\n")},
H:function(){return this.v("")}}
F.fP.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.H()},
v:function(a){var u,t,s=H.c([],[P.t]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].v(a+(""+u+". ")))}return C.a.q(s,"\n")},
H:function(){return this.v("")}}
F.fQ.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.H()},
v:function(a){var u,t,s,r=H.c([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(a))
return C.a.q(r,"\n")},
H:function(){return this.v("")}}
F.bh.prototype={
bA:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hB(u.cx,r,o,t,s,q,p,a,n)},
f8:function(){return this.bA(null)},
saX:function(a){var u
if(!J.B(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
fp:function(a){var u,t,s=this
if(a.n(0,$.aa())){u=s.f
t=[P.H]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.ay())){u=s.r
t=[P.H]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.ax())){u=s.x
t=[P.H]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.b1())){u=s.y
t=[P.H]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.az())){u=s.z
t=[P.H]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.c6())){u=s.Q
t=[P.H]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.c7())){u=s.Q
t=[P.H]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bn()))return H.c([s.ch],[P.H])
else if(a.n(0,$.aw())){u=s.cx
t=[P.H]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.H])},
by:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d4()
t.d.G(0,new F.hJ(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
bw:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d4()
t.d.G(0,new F.hI(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.H()},
v:function(a){var u,t,s=this,r="-",q=H.c([],[P.t])
q.push(C.b.a7(J.a1(s.e),0))
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
t=C.a.q(q,", ")
return a+"{"+t+"}"},
H:function(){return this.v("")}}
F.hJ.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.hI.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.hC.prototype={
U:function(){},
k:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.W()
return!0},
b2:function(a,b,c,d,e,f){var u=F.hB(a,null,b,c,null,d,e,f,0)
this.k(0,u)
return u},
gj:function(a){return this.c.length},
ak:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].by()
return!0},
bx:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bw()
return!0},
f5:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.B(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.u(null)}}}}return!0},
h:function(a){return this.H()},
v:function(a){var u,t,s,r
this.U()
u=H.c([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].v(a))
return C.a.q(u,"\n")},
H:function(){return this.v("")}}
F.hD.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
G:function(a,b){var u=this
C.a.G(u.b,b)
C.a.G(u.c,new F.hE(u,b))
C.a.G(u.d,new F.hF(u,b))},
h:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.q(r,"\n")}}
F.hE.prototype={
$1:function(a){if(!J.B(a.a,this.a))this.b.$1(a)}}
F.hF.prototype={
$1:function(a){var u=this.a
if(!J.B(a.a,u)&&!J.B(a.b,u))this.b.$1(a)}}
F.hG.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.q(r,"\n")}}
F.hH.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.q(r,"\n")}}
O.cx.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.y():u},
S:function(a){var u=this.fr
if(u!=null)u.u(a)},
aI:function(){return this.S(null)},
cm:function(a){this.a=null
this.S(a)},
eM:function(){return this.cm(null)},
dX:function(a,b){var u=new D.aH()
u.b=!0
this.S(u)},
dZ:function(a,b){var u=new D.aI()
u.b=!0
this.S(u)},
cd:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.w,h=new H.I([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=h.i(0,0)
h.l(0,0,r==null?1:r)}q=H.c([],[A.cf])
h.G(0,new O.f9(j,q))
C.a.b9(q,new O.fa())
p=new H.I([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){o=u[s]
r=o.gaP()
n=p.i(0,o.gaP())
p.l(0,r,n==null?1:n)}m=H.c([],[A.cF])
p.G(0,new O.fb(j,m))
C.a.b9(m,new O.fc())
l=new H.I([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.m)(i),++s){o=i[s]
t=o.gaP()
r=l.i(0,o.gaP())
l.l(0,t,r==null?1:r)}k=H.c([],[A.cL])
l.G(0,new O.fd(j,k))
C.a.b9(k,new O.fe())
i=C.d.Z(j.e.a.length+3,4)
j.dy.e
return A.ko(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a4:function(a,b){if(b!=null)if(!C.a.ae(a,b)){b.a=a.length
a.push(b)}},
ab:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.S(u,u.length);u.A();){t=u.d
t.toString
s=$.hA
if(s==null)s=$.hA=new V.v(0,0,1)
t.a=s
r=$.hz
t.d=r==null?$.hz=new V.v(0,1,0):r
r=$.hy
t.e=r==null?$.hy=new V.v(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.b8(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.b8(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.b8(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
d6:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cd()
u=b1.fr.i(0,b0.aR)
if(u==null){u=A.kn(b0,b1.a)
b1.cu(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.b3
b0=b2.e
if(!(b0 instanceof Z.bs))b0=b2.e=null
if(b0==null||!b0.d.n(0,s)){b0=t.k3
if(b0)b2.d.ak()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bx()
q.a.bx()
q=q.e
if(q!=null)q.aq(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.f5()
p=p.e
if(p!=null)p.aq(0)}n=b2.d.cz(new Z.d6(b1.a),s)
n.al($.aa()).e=a9.a.Q.c
if(b0)n.al($.ay()).e=a9.a.cx.c
if(r)n.al($.ax()).e=a9.a.ch.c
if(t.r1)n.al($.b1()).e=a9.a.cy.c
if(q)n.al($.az()).e=a9.a.db.c
if(t.rx)n.al($.aw()).e=a9.a.dx.c
b2.e=n}m=H.c([],[T.cR])
a9.a.T(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.gR(r)
b0=b0.dy
b0.toString
b0.a8(r.a2(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.gR(r)
q=b1.dx
q=b1.cx=r.p(0,q.gR(q))
r=q}b0=b0.fr
b0.toString
b0.a8(r.a2(0,!0))}b0=a9.a
r=b1.ch
if(r==null){r=b1.gfJ()
q=b1.dx
q=b1.ch=r.p(0,q.gR(q))
r=q}b0=b0.fy
b0.toString
b0.a8(r.a2(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.a8(C.i.a2(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.a8(C.i.a2(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.a8(C.i.a2(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.b(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.b(b0,k)
b0=b0[k]
j=new Float32Array(H.c1(r.a2(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.f.e)
b0=a9.a
r=a9.f.e
b0.a5(b0.ry,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.r.e)
b0=a9.a
r=a9.r.e
b0.a5(b0.y1,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.x.e)
b0=a9.a
r=a9.x.e
b0.a5(b0.b3,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.cG
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.y.e)
b0=a9.a
r=a9.y.e
b0.a5(b0.cH,r)}b0=t.e
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.z.ch
q=q.cK
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.cI
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.z.e)
b0=a9.a
r=a9.z.e
b0.a5(b0.cJ,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.gR(r)
r=P.w
h=new H.I([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.l(0,0,e+1)
d=J.e1(a9.a.bD.i(0,0),e)
p=i.b8(f.a)
o=p.a
c=p.b
b=p.c
b=p.t(0,Math.sqrt(o*o+c*c+b*b))
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
q=a9.a.bC.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.gR(r)
r=P.w
a=new H.I([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
a0=f.gaP()
e=a.i(0,a0)
if(e==null)e=0
a.l(0,a0,e+1)
d=J.e1(a9.a.bF.i(0,a0),e)
a1=i.p(0,f.gR(f))
p=f.gR(f)
o=$.bJ
p=p.bV(o==null?$.bJ=new V.U(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.bJ
p=a1.bV(p==null?$.bJ=new V.U(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaO(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gar()
p=a1.bK(0)
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
j=new Float32Array(H.c1(new V.cy(o,c,b,a2,a3,a4,a5,a6,p).a2(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gar()
p=f.gar()
if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.gar()
o=p.gaS(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaE()
p=f.gdd()
o=d.x
o.toString
c=p.gfd(p)
b=p.gfe(p)
a2=p.gff()
p=p.gfc()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaE()
if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.gaE()
o=p.gaS(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gfi()){p=f.gf1()
o=d.y
o.a.uniform1f(o.d,p)
p=f.gf2()
o=d.z
o.a.uniform1f(o.d,p)
p=f.gf3()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.m)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.bE.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.gR(r)
r=P.w
a8=new H.I([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
a0=f.gaP()
e=a8.i(0,a0)
if(e==null)e=0
a8.l(0,a0,e+1)
d=J.e1(a9.a.bH.i(0,a0),e)
p=f.gfI(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gfX(f).h7()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.bV(f.gfI(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaO(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gar()
p=f.gbW()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gbU(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gh8()
o=d.x
o.a.uniform1f(o.d,p)
p=f.gh9()
o=d.y
o.a.uniform1f(o.d,p)
f.gar()
p=f.gar()
if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.gar()
o=p.gaS(p)
if(o){o=d.dx
o.toString
c=p.gaS(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.gfl(p)
o.a.uniform1i(o.d,p)}}f.gaE()
p=f.gdd()
o=d.z
o.toString
c=p.gfd(p)
b=p.gfe(p)
a2=p.gff()
p=p.gfc()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaE()
if(!C.a.ae(m,p)){p.a=m.length
m.push(p)}p=f.gaE()
o=p.gaS(p)
if(o){o=d.dy
o.toString
c=p.gaS(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.gfl(p)
o.a.uniform1i(o.d,p)}}if(f.gfY()){p=f.gfW()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.gfV()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.gfi()){p=f.gf1()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.gf2()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.gf3()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.m)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.bG.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){a9.a4(m,a9.Q.e)
b0=a9.a
r=a9.Q.e
b0.a5(b0.cL,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gR(r).bK(0)}b0=b0.id
b0.toString
b0.a8(r.a2(0,!0))}if(t.cy){a9.a4(m,a9.ch)
b0=a9.a
r=a9.ch
b0.a5(b0.cM,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.cN
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.cx.e)
b0=a9.a
r=a9.cx.e
b0.a5(b0.cO,r)}b0=t.x
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.cy.ch
q=q.cP
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.cQ
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a4(m,a9.cy.e)
b0=a9.a
r=a9.cy.e
b0.a5(b0.cR,r)}}b0=t.y
r=b0.a
q=!r
if(q)p=b0.c
else p=!0
if(p){if(r){r=a9.a
p=a9.db.f
r=r.cS
r.a.uniform1f(r.d,p)}if(b0.c){a9.a4(m,a9.db.e)
r=a9.a
p=a9.db.e
r.a5(r.cT,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].T(b1)
r=b2.e
r.T(b1)
r.a_(b1)
r.as(b1)
if(q)b0=b0.c
else b0=!0
if(b0)b1.a.disable(3042)
for(b0=b1.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b0.activeTexture(33984+r.a)
b0.bindTexture(34067,null)}}r=a9.a
r.toString
b0.useProgram(null)
r.x.cE()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cd().aR}}
O.f9.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cf(a,C.d.Z(b+3,4)*4))}}
O.fa.prototype={
$2:function(a,b){return J.iw(a.a,b.a)}}
O.fb.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cF(a,C.d.Z(b+3,4)*4))}}
O.fc.prototype={
$2:function(a,b){return J.iw(a.a,b.a)}}
O.fd.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cL(a,C.d.Z(b+3,4)*4))}}
O.fe.prototype={
$2:function(a,b){return J.iw(a.a,b.a)}}
O.f3.prototype={
ai:function(){var u,t=this
t.c4()
u=t.f
if(!(Math.abs(u-1)<$.x().a)){t.f=1
u=new D.r(t.b,u,1)
u.b=!0
t.a.S(u)}}}
O.bD.prototype={
S:function(a){return this.a.S(a)},
aI:function(){return this.S(null)},
ai:function(){},
bt:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ai()
u=s.a
u.a=null
u.S(null)}},
saX:function(a){var u,t=this,s=t.c
if(!s.c)t.bt(new A.P(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gm().L(0,t.gay())
u=t.e
t.e=a
a.gm().k(0,t.gay())
s=new D.r(t.b+".textureCube",u,t.e)
s.b=!0
t.a.S(s)}}}
O.f4.prototype={}
O.ag.prototype={
co:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.r(s.b+".color",u,a)
t.b=!0
s.a.S(t)}},
ai:function(){this.c4()
this.co(new V.K(1,1,1))},
saO:function(a,b){this.bt(new A.P(!0,!1,this.c.c))
this.co(b)}}
O.f6.prototype={}
O.f7.prototype={
ai:function(){var u,t=this
t.c5()
u=t.ch
if(!(Math.abs(u-1)<$.x().a)){t.ch=1
u=new D.r(t.b+".refraction",u,1)
u.b=!0
t.a.S(u)}}}
O.f8.prototype={
cp:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.x().a)){u.ch=a
t=new D.r(u.b+".shininess",t,a)
t.b=!0
u.a.S(t)}},
ai:function(){this.c5()
this.cp(100)}}
O.cJ.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.y():u},
S:function(a){var u=this.e
if(u!=null)u.u(a)},
aI:function(){return this.S(null)},
d6:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.fU(t,n)
u.c6(t,n)
u.cU(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.l(u.y.i(0,"fov"),"$iL")
u.ch=H.l(u.y.i(0,"ratio"),"$iL")
u.cx=H.l(u.y.i(0,"boxClr"),"$iC")
u.cy=H.l(u.y.i(0,"boxTxt"),"$iN")
u.db=H.l(u.y.i(0,"viewMat"),"$ia_")
a.cu(u)}o.a=u}if(b.e==null){t=b.d.cz(new Z.d6(a.a),$.aa())
t.al($.aa()).e=o.a.z.c
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
r.cy.c_(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gR(s).bK(0)
r=r.db
r.toString
r.a8(s.a2(0,!0))
t=b.e
if(t instanceof Z.bs){t.T(a)
t.a_(a)
t.as(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.cE()
t=o.c
if(t!=null)t.as(a)}}
O.cQ.prototype={}
T.cR.prototype={}
T.h8.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.y():u},
T:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
as:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.h9.prototype={
cX:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.h8()
u.a=0
u.b=k
u.c=!1
u.d=0
t.ax(u,k,r,34069,!1,!1)
t.ax(u,k,o,34070,!1,!1)
t.ax(u,k,q,34071,!1,!1)
t.ax(u,k,n,34072,!1,!1)
t.ax(u,k,p,34073,!1,!1)
t.ax(u,k,m,34074,!1,!1)
return u},
cW:function(a){return this.cX(a,".png")},
ax:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.O(u,"load",new T.ha(this,u,!1,b,!1,d,a),!1)},
eN:function(a,b,c){var u,t,s,r
b=V.j0(b)
u=V.j0(a.width)
t=V.j0(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iz()
s.width=u
s.height=t
r=C.f.d9(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lu(r.getImageData(0,0,s.width,s.height))}}}
T.ha.prototype={
$1:function(a){var u=this,t=u.a,s=t.eN(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.E.fP(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.fg()}++t.e}}
X.iy.prototype={}
X.eJ.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.y():u},
a9:function(a){var u=this.x
if(u!=null)u.u(a)},
sd5:function(a,b){var u,t,s=this
if(!J.B(s.r,b)){u=s.r
s.r=b
t=new D.r("region",u,b)
t.b=!0
s.a9(t)}},
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
q=C.c.aa(r*u)
r=s.b
if(typeof t!=="number")return H.q(t)
p=C.c.aa(r*t)
r=C.c.aa(s.c*u)
a.c=r
s=C.c.aa(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.eM.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.y():u},
T:function(a){var u
a.cy.b6(V.aL())
u=V.aL()
a.db.b6(u)},
as:function(a){a.cy.ap()
a.db.ap()}}
X.cE.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.y():u},
a9:function(a){var u=this.f
if(u!=null)u.u(a)},
dw:function(){return this.a9(null)},
T:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ah(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.b6(k)
r=$.ji
if(r==null){r=V.jk()
q=V.iQ()
p=$.jx
r=V.je(r,q,p==null?$.jx=new V.v(0,0,-1):p)
$.ji=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aC(0,a,s)
if(t!=null)u=t.p(0,u)}a.db.b6(u)},
as:function(a){a.cy.ap()
a.db.ap()}}
X.h4.prototype={}
V.ir.prototype={
$1:function(a){var u=C.c.d8(this.a.gfk(),2)
if(u!=="0.00")P.j1(u+" fps")}}
V.fR.prototype={
dm:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.O(q,"scroll",new V.fT(o),!1)},
ct:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.eP()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fT(C.a.fo(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
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
if(H.lP(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.kU(C.D,n,C.m,!1)
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
eP:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.hd()
t=P.t
u.a=new H.I([t,R.cN])
u.b=new H.I([t,R.cV])
u.c=u.I(0,q)
t=u.I(0,q).q(0,p)
s=T.Q(new H.J("*"))
t.a.push(s)
t.c=!0
t=u.I(0,p).q(0,p)
s=new T.ap()
r=[T.cw]
s.a=H.c([],r)
t.a.push(s)
t=T.Q(new H.J("*"))
s.a.push(t)
t=u.I(0,p).q(0,"BoldEnd")
s=T.Q(new H.J("*"))
t.a.push(s)
t.c=!0
t=u.I(0,q).q(0,o)
s=T.Q(new H.J("_"))
t.a.push(s)
t.c=!0
t=u.I(0,o).q(0,o)
s=new T.ap()
s.a=H.c([],r)
t.a.push(s)
t=T.Q(new H.J("_"))
s.a.push(t)
t=u.I(0,o).q(0,n)
s=T.Q(new H.J("_"))
t.a.push(s)
t.c=!0
t=u.I(0,q).q(0,m)
s=T.Q(new H.J("`"))
t.a.push(s)
t.c=!0
t=u.I(0,m).q(0,m)
s=new T.ap()
s.a=H.c([],r)
t.a.push(s)
t=T.Q(new H.J("`"))
s.a.push(t)
t=u.I(0,m).q(0,"CodeEnd")
s=T.Q(new H.J("`"))
t.a.push(s)
t.c=!0
t=u.I(0,q).q(0,l)
s=T.Q(new H.J("["))
t.a.push(s)
t.c=!0
t=u.I(0,l).q(0,k)
s=T.Q(new H.J("|"))
t.a.push(s)
s=u.I(0,l).q(0,j)
t=T.Q(new H.J("]"))
s.a.push(t)
s.c=!0
s=u.I(0,l).q(0,l)
t=new T.ap()
t.a=H.c([],r)
s.a.push(t)
s=T.Q(new H.J("|]"))
t.a.push(s)
s=u.I(0,k).q(0,j)
t=T.Q(new H.J("]"))
s.a.push(t)
s.c=!0
s=u.I(0,k).q(0,k)
t=new T.ap()
t.a=H.c([],r)
s.a.push(t)
s=T.Q(new H.J("|]"))
t.a.push(s)
u.I(0,q).q(0,i).a.push(new T.e3())
s=u.I(0,i).q(0,i)
t=new T.ap()
t.a=H.c([],r)
s.a.push(t)
s=T.Q(new H.J("*_`["))
t.a.push(s)
s=u.I(0,"BoldEnd")
s.d=s.a.aY(p)
s=u.I(0,n)
s.d=s.a.aY(o)
s=u.I(0,"CodeEnd")
s.d=s.a.aY(m)
s=u.I(0,j)
s.d=s.a.aY("Link")
s=u.I(0,i)
s.d=s.a.aY(i)
this.b=u}}
V.fT.prototype={
$1:function(a){P.js(C.h,new V.fS(this.a))}}
V.fS.prototype={
$0:function(){var u=C.c.aa(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.a.prototype
u.dg=u.h
u=J.cp.prototype
u.dh=u.h
u=T.cl.prototype
u.df=u.aB
u.c3=u.h
u=O.bD.prototype
u.c4=u.ai
u=O.ag.prototype
u.c5=u.ai})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lo","kN",6)
u(P,"lp","kO",6)
u(P,"lq","kP",6)
t(P,"jE","lm",9)
var n
s(n=E.am.prototype,"gd3",0,0,null,["$1","$0"],["d4","fA"],0,0)
s(n,"gd1",0,0,null,["$1","$0"],["d2","fz"],0,0)
s(n,"gd_",0,0,null,["$1","$0"],["d0","fu"],0,0)
r(n,"gfs","ft",3)
r(n,"gfv","fw",3)
s(n=E.cS.prototype,"gc7",0,0,null,["$1","$0"],["c9","c8"],0,0)
q(n,"gfL","d7",9)
p(n=X.d0.prototype,"geb","ec",4)
p(n,"ge_","e0",4)
p(n,"ge5","e6",2)
p(n,"gef","eg",10)
p(n,"ged","ee",10)
p(n,"gej","ek",2)
p(n,"gen","eo",2)
p(n,"ge9","ea",2)
p(n,"gel","em",2)
p(n,"ge7","e8",2)
p(n,"gep","eq",17)
p(n,"ger","es",4)
p(n,"geG","eH",5)
p(n,"geC","eD",5)
p(n,"geE","eF",5)
s(D.aB.prototype,"gdn",0,0,null,["$1","$0"],["ag","dq"],0,0)
s(n=D.cr.prototype,"gck",0,0,null,["$1","$0"],["cl","eh"],0,0)
p(n,"geu","ev",18)
r(n,"gdS","dT",11)
r(n,"gey","ez",11)
o(V.z.prototype,"gj","bM",12)
o(V.v.prototype,"gj","bM",12)
s(n=U.by.prototype,"gav",0,0,null,["$1","$0"],["J","Y"],0,0)
r(n,"gdr","ds",13)
r(n,"gew","ex",13)
s(n=U.d1.prototype,"gav",0,0,null,["$1","$0"],["J","Y"],0,0)
p(n,"gbj","bk",1)
p(n,"gbl","bm",1)
p(n,"gbn","bo",1)
s(n=U.d2.prototype,"gav",0,0,null,["$1","$0"],["J","Y"],0,0)
p(n,"gbj","bk",1)
p(n,"gbl","bm",1)
p(n,"gbn","bo",1)
p(n,"gdM","dN",1)
p(n,"gdO","dP",1)
p(n,"geW","eX",1)
p(n,"geU","eV",1)
p(n,"geS","eT",1)
p(U.d3.prototype,"gdQ","dR",1)
s(M.cd.prototype,"gN",0,0,null,["$1","$0"],["O","aG"],0,0)
s(n=M.ci.prototype,"gN",0,0,null,["$1","$0"],["O","aG"],0,0)
r(n,"ge1","e2",3)
r(n,"ge3","e4",3)
s(n=M.cO.prototype,"gN",0,0,null,["$1","$0"],["O","aG"],0,0)
r(n,"gdU","dV",14)
r(n,"geA","eB",14)
s(n=O.cx.prototype,"gay",0,0,null,["$1","$0"],["S","aI"],0,0)
s(n,"geL",0,0,null,["$1","$0"],["cm","eM"],0,0)
r(n,"gdW","dX",15)
r(n,"gdY","dZ",15)
s(O.bD.prototype,"gay",0,0,null,["$1","$0"],["S","aI"],0,0)
s(O.cJ.prototype,"gay",0,0,null,["$1","$0"],["S","aI"],0,0)
s(X.cE.prototype,"gdv",0,0,null,["$1","$0"],["a9","dw"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.X,null)
s(P.X,[H.iH,J.a,J.S,P.dn,P.i,H.ct,P.eO,H.cj,H.ht,H.hi,P.b5,H.bt,H.dF,P.an,H.eU,H.eV,H.eQ,P.dL,P.d7,P.cP,P.h2,P.cT,P.ia,P.i4,P.i_,P.dm,P.n,P.ef,P.i9,P.b0,P.a3,P.a7,P.aC,P.fv,P.cM,P.df,P.eI,P.ba,P.cv,P.aN,P.t,P.aT,W.em,W.E,W.ck,P.dQ,P.i0,T.e3,T.cl,T.cw,T.fM,R.cN,R.cU,R.cV,R.hd,O.ad,O.bE,E.eb,E.am,E.fD,E.cS,Z.d5,Z.d6,Z.bs,Z.b6,Z.au,D.ee,D.af,D.M,X.cb,X.cq,X.eS,X.eY,X.a4,X.fl,X.he,X.d0,D.aB,D.Z,D.fy,D.fX,V.K,V.al,V.ez,V.cy,V.a8,V.T,V.U,V.ar,V.cG,V.z,V.v,U.d1,U.d2,U.d3,M.cd,M.ci,M.fK,M.cO,A.c8,A.e6,A.P,A.cf,A.cF,A.cL,A.f5,A.bN,A.bP,A.bQ,A.cY,A.hp,F.aD,F.bC,F.bI,F.fN,F.fO,F.fP,F.fQ,F.bh,F.hC,F.hD,F.hG,F.hH,O.cQ,O.bD,O.f6,T.h9,X.iy,X.h4,X.eM,X.cE,V.fR])
s(J.a,[J.eP,J.co,J.cp,J.aJ,J.bB,J.b7,H.bH,W.d,W.e2,W.c9,W.ae,W.D,W.d9,W.a2,W.eq,W.er,W.db,W.ch,W.dd,W.et,W.h,W.dg,W.aF,W.eL,W.di,W.aG,W.eX,W.ff,W.dp,W.dq,W.aM,W.dr,W.du,W.aO,W.dy,W.dA,W.aR,W.dB,W.aS,W.dG,W.as,W.dJ,W.hc,W.aV,W.dM,W.hg,W.hv,W.dR,W.dT,W.dV,W.dX,W.dZ,P.b9,P.dk,P.bb,P.dw,P.fA,P.dH,P.bf,P.dO,P.e7,P.d8,P.cH,P.dD])
s(J.cp,[J.fw,J.bR,J.aK])
t(J.iG,J.aJ)
s(J.bB,[J.cn,J.cm])
t(P.eW,P.dn)
s(P.eW,[H.d_,W.hS,W.hR,P.eE])
t(H.J,H.d_)
s(P.i,[H.ew,H.f0,H.hL])
s(P.eO,[H.f1,H.hM])
s(P.b5,[H.fs,H.eR,H.hs,H.ed,H.fJ,P.cD,P.ab,P.hu,P.hr,P.fZ,P.ej,P.ep])
s(H.bt,[H.iv,H.h5,H.il,H.im,H.io,P.hO,P.hN,P.hP,P.hQ,P.i8,P.i7,P.ig,P.i2,P.i3,P.f_,P.eu,P.ev,W.fh,W.fj,W.fI,W.h1,W.hV,P.ih,P.eF,P.eG,P.e9,E.fE,E.fF,E.fG,E.hb,D.eA,D.eB,F.ib,F.hJ,F.hI,F.hE,F.hF,O.f9,O.fa,O.fb,O.fc,O.fd,O.fe,T.ha,V.ir,V.fT,V.fS])
s(H.h5,[H.h_,H.bq])
t(P.eZ,P.an)
t(H.I,P.eZ)
t(H.cs,H.ew)
t(H.cz,H.bH)
s(H.cz,[H.bT,H.bV])
t(H.bU,H.bT)
t(H.bG,H.bU)
t(H.bW,H.bV)
t(H.cA,H.bW)
s(H.cA,[H.fm,H.fn,H.fo,H.fp,H.fq,H.cB,H.fr])
t(P.i1,P.ia)
t(P.hZ,P.i4)
t(P.ek,P.h2)
t(P.ex,P.ef)
t(P.hw,P.ex)
t(P.hx,P.ek)
s(P.a7,[P.H,P.w])
s(P.ab,[P.bd,P.eN])
s(W.d,[W.G,W.eD,W.aQ,W.bX,W.aU,W.at,W.bZ,W.hK,W.bS,P.ea,P.b3])
s(W.G,[W.V,W.aA])
s(W.V,[W.k,P.j])
s(W.k,[W.e4,W.e5,W.b4,W.eH,W.bA,W.fL])
t(W.el,W.ae)
t(W.bw,W.d9)
s(W.a2,[W.en,W.eo])
t(W.dc,W.db)
t(W.cg,W.dc)
t(W.de,W.dd)
t(W.es,W.de)
t(W.aE,W.c9)
t(W.dh,W.dg)
t(W.eC,W.dh)
t(W.dj,W.di)
t(W.bz,W.dj)
t(W.aW,W.h)
s(W.aW,[W.b8,W.ai,W.be])
t(W.fg,W.dp)
t(W.fi,W.dq)
t(W.ds,W.dr)
t(W.fk,W.ds)
t(W.dv,W.du)
t(W.cC,W.dv)
t(W.dz,W.dy)
t(W.fx,W.dz)
t(W.fH,W.dA)
t(W.bY,W.bX)
t(W.fV,W.bY)
t(W.dC,W.dB)
t(W.fW,W.dC)
t(W.h0,W.dG)
t(W.dK,W.dJ)
t(W.h6,W.dK)
t(W.c_,W.bZ)
t(W.h7,W.c_)
t(W.dN,W.dM)
t(W.hf,W.dN)
t(W.aX,W.ai)
t(W.dS,W.dR)
t(W.hT,W.dS)
t(W.da,W.ch)
t(W.dU,W.dT)
t(W.hW,W.dU)
t(W.dW,W.dV)
t(W.dt,W.dW)
t(W.dY,W.dX)
t(W.i5,W.dY)
t(W.e_,W.dZ)
t(W.i6,W.e_)
t(W.hU,P.cP)
t(P.a5,P.i0)
t(P.dl,P.dk)
t(P.eT,P.dl)
t(P.dx,P.dw)
t(P.ft,P.dx)
t(P.dI,P.dH)
t(P.h3,P.dI)
t(P.dP,P.dO)
t(P.hh,P.dP)
t(P.e8,P.d8)
t(P.fu,P.b3)
t(P.dE,P.dD)
t(P.fY,P.dE)
s(T.cl,[T.ap,R.cX])
s(E.eb,[Z.ca,A.cI,T.cR])
s(D.M,[D.aH,D.aI,D.r,X.fz])
s(X.fz,[X.cu,X.ao,X.bF,X.cW])
s(O.ad,[D.cr,U.by])
s(D.ee,[U.ei,U.W])
t(U.bv,U.W)
t(M.aP,M.fK)
s(A.cI,[A.f2,A.fU])
s(A.cY,[A.cZ,A.hm,A.hn,A.ho,A.hk,A.L,A.hl,A.C,A.bM,A.hq,A.bO,A.a_,A.bg,A.N])
s(O.cQ,[O.cx,O.cJ])
s(O.bD,[O.f3,O.f4,O.ag])
s(O.ag,[O.f7,O.f8])
t(T.h8,T.cR)
t(X.eJ,X.h4)
u(H.d_,H.ht)
u(H.bT,P.n)
u(H.bU,H.cj)
u(H.bV,P.n)
u(H.bW,H.cj)
u(P.dn,P.n)
u(W.d9,W.em)
u(W.db,P.n)
u(W.dc,W.E)
u(W.dd,P.n)
u(W.de,W.E)
u(W.dg,P.n)
u(W.dh,W.E)
u(W.di,P.n)
u(W.dj,W.E)
u(W.dp,P.an)
u(W.dq,P.an)
u(W.dr,P.n)
u(W.ds,W.E)
u(W.du,P.n)
u(W.dv,W.E)
u(W.dy,P.n)
u(W.dz,W.E)
u(W.dA,P.an)
u(W.bX,P.n)
u(W.bY,W.E)
u(W.dB,P.n)
u(W.dC,W.E)
u(W.dG,P.an)
u(W.dJ,P.n)
u(W.dK,W.E)
u(W.bZ,P.n)
u(W.c_,W.E)
u(W.dM,P.n)
u(W.dN,W.E)
u(W.dR,P.n)
u(W.dS,W.E)
u(W.dT,P.n)
u(W.dU,W.E)
u(W.dV,P.n)
u(W.dW,W.E)
u(W.dX,P.n)
u(W.dY,W.E)
u(W.dZ,P.n)
u(W.e_,W.E)
u(P.dk,P.n)
u(P.dl,W.E)
u(P.dw,P.n)
u(P.dx,W.E)
u(P.dH,P.n)
u(P.dI,W.E)
u(P.dO,P.n)
u(P.dP,W.E)
u(P.d8,P.an)
u(P.dD,P.n)
u(P.dE,W.E)})()
var v={mangledGlobalNames:{w:"int",H:"double",a7:"num",t:"String",b0:"bool",aN:"Null",ba:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.M]},{func:1,ret:-1,args:[D.M]},{func:1,ret:-1,args:[W.ai]},{func:1,ret:-1,args:[P.w,[P.i,E.am]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aN,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.b8]},{func:1,ret:-1,args:[P.w,[P.i,D.Z]]},{func:1,ret:P.H},{func:1,ret:-1,args:[P.w,[P.i,U.W]]},{func:1,ret:-1,args:[P.w,[P.i,M.aP]]},{func:1,ret:-1,args:[P.w,[P.i,V.a8]]},{func:1,ret:P.aN,args:[,]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:P.b0,args:[[P.i,D.Z]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.b4.prototype
C.A=J.a.prototype
C.a=J.aJ.prototype
C.B=J.cm.prototype
C.d=J.cn.prototype
C.i=J.co.prototype
C.c=J.bB.prototype
C.b=J.b7.prototype
C.C=J.aK.prototype
C.n=J.fw.prototype
C.E=P.cH.prototype
C.j=J.bR.prototype
C.o=W.aX.prototype
C.p=W.bS.prototype
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
C.m=new P.hw()
C.y=new P.hx()
C.e=new P.i1()
C.h=new P.aC(0)
C.z=new P.aC(5e6)
C.D=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])})();(function staticFields(){$.ac=0
$.br=null
$.j6=null
$.jG=null
$.jD=null
$.jJ=null
$.ii=null
$.ip=null
$.iZ=null
$.bi=null
$.c2=null
$.c3=null
$.iT=!1
$.a9=C.e
$.Y=[]
$.jg=null
$.jj=null
$.bJ=null
$.jp=null
$.jw=null
$.jy=null
$.hy=null
$.hz=null
$.hA=null
$.jx=null
$.ji=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lX","jO",function(){return H.jF("_$dart_dartClosure")})
u($,"lY","j2",function(){return H.jF("_$dart_js")})
u($,"lZ","jP",function(){return H.ak(H.hj({
toString:function(){return"$receiver$"}}))})
u($,"m_","jQ",function(){return H.ak(H.hj({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"m0","jR",function(){return H.ak(H.hj(null))})
u($,"m1","jS",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m4","jV",function(){return H.ak(H.hj(void 0))})
u($,"m5","jW",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m3","jU",function(){return H.ak(H.ju(null))})
u($,"m2","jT",function(){return H.ak(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"m7","jY",function(){return H.ak(H.ju(void 0))})
u($,"m6","jX",function(){return H.ak(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mk","j3",function(){return P.kM()})
u($,"ml","k1",function(){return P.kA("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"me","k0",function(){return Z.a6(0)})
u($,"m8","jZ",function(){return Z.a6(511)})
u($,"mg","aa",function(){return Z.a6(1)})
u($,"mf","ay",function(){return Z.a6(2)})
u($,"ma","ax",function(){return Z.a6(4)})
u($,"mh","b1",function(){return Z.a6(8)})
u($,"mi","az",function(){return Z.a6(16)})
u($,"mb","c6",function(){return Z.a6(32)})
u($,"mc","c7",function(){return Z.a6(64)})
u($,"md","k_",function(){return Z.a6(96)})
u($,"mj","bn",function(){return Z.a6(128)})
u($,"m9","aw",function(){return Z.a6(256)})
u($,"lW","jN",function(){return new V.ez(1e-9)})
u($,"lV","x",function(){return $.jN()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.bG,Float64Array:H.bG,Int16Array:H.fm,Int32Array:H.fn,Int8Array:H.fo,Uint16Array:H.fp,Uint32Array:H.fq,Uint8ClampedArray:H.cB,CanvasPixelArray:H.cB,Uint8Array:H.fr,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.e2,HTMLAnchorElement:W.e4,HTMLAreaElement:W.e5,Blob:W.c9,HTMLCanvasElement:W.b4,CDATASection:W.aA,CharacterData:W.aA,Comment:W.aA,ProcessingInstruction:W.aA,Text:W.aA,CSSPerspective:W.el,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bw,MSStyleCSSProperties:W.bw,CSS2Properties:W.bw,CSSImageValue:W.a2,CSSKeywordValue:W.a2,CSSNumericValue:W.a2,CSSPositionValue:W.a2,CSSResourceValue:W.a2,CSSUnitValue:W.a2,CSSURLImageValue:W.a2,CSSStyleValue:W.a2,CSSMatrixComponent:W.ae,CSSRotation:W.ae,CSSScale:W.ae,CSSSkew:W.ae,CSSTranslation:W.ae,CSSTransformComponent:W.ae,CSSTransformValue:W.en,CSSUnparsedValue:W.eo,DataTransferItemList:W.eq,DOMException:W.er,ClientRectList:W.cg,DOMRectList:W.cg,DOMRectReadOnly:W.ch,DOMStringList:W.es,DOMTokenList:W.et,Element:W.V,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aE,FileList:W.eC,FileWriter:W.eD,HTMLFormElement:W.eH,Gamepad:W.aF,History:W.eL,HTMLCollection:W.bz,HTMLFormControlsCollection:W.bz,HTMLOptionsCollection:W.bz,ImageData:W.aG,HTMLImageElement:W.bA,KeyboardEvent:W.b8,Location:W.eX,MediaList:W.ff,MIDIInputMap:W.fg,MIDIOutputMap:W.fi,MimeType:W.aM,MimeTypeArray:W.fk,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cC,RadioNodeList:W.cC,Plugin:W.aO,PluginArray:W.fx,RTCStatsReport:W.fH,HTMLSelectElement:W.fL,SourceBuffer:W.aQ,SourceBufferList:W.fV,SpeechGrammar:W.aR,SpeechGrammarList:W.fW,SpeechRecognitionResult:W.aS,Storage:W.h0,CSSStyleSheet:W.as,StyleSheet:W.as,TextTrack:W.aU,TextTrackCue:W.at,VTTCue:W.at,TextTrackCueList:W.h6,TextTrackList:W.h7,TimeRanges:W.hc,Touch:W.aV,TouchEvent:W.be,TouchList:W.hf,TrackDefaultList:W.hg,CompositionEvent:W.aW,FocusEvent:W.aW,TextEvent:W.aW,UIEvent:W.aW,URL:W.hv,VideoTrackList:W.hK,WheelEvent:W.aX,Window:W.bS,DOMWindow:W.bS,CSSRuleList:W.hT,ClientRect:W.da,DOMRect:W.da,GamepadList:W.hW,NamedNodeMap:W.dt,MozNamedAttrMap:W.dt,SpeechRecognitionResultList:W.i5,StyleSheetList:W.i6,SVGLength:P.b9,SVGLengthList:P.eT,SVGNumber:P.bb,SVGNumberList:P.ft,SVGPointList:P.fA,SVGStringList:P.h3,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bf,SVGTransformList:P.hh,AudioBuffer:P.e7,AudioParamMap:P.e8,AudioTrackList:P.ea,AudioContext:P.b3,webkitAudioContext:P.b3,BaseAudioContext:P.b3,OfflineAudioContext:P.fu,WebGL2RenderingContext:P.cH,SQLResultSetRowList:P.fY})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
W.bX.$nativeSuperclassTag="EventTarget"
W.bY.$nativeSuperclassTag="EventTarget"
W.bZ.$nativeSuperclassTag="EventTarget"
W.c_.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.jH,[])
else K.jH([])})})()
//# sourceMappingURL=test.dart.js.map
