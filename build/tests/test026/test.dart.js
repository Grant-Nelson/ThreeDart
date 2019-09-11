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
a[c]=function(){a[c]=function(){H.pY(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lC(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ld:function ld(){},
kH:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hc:function(){return new P.cU("No element")},
nT:function(){return new P.cU("Too many elements")},
e6:function(a,b,c,d,e){if(c-b<=32)H.on(a,b,c,d,e)
else H.om(a,b,c,d,e)},
on:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a0()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
om:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a8(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a8(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=r
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.P(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.S()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a0()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.S()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a0()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a0()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.S()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.k(a2,a3,a2[a1])
C.a.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.k(a2,a4,a2[a1])
C.a.k(a2,a1,r)
H.e6(a2,a3,o-2,a5,a6)
H.e6(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.P(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.P(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.S()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}H.e6(a2,o,n,a5,a6)}else H.e6(a2,o,n,a5,a6)},
r:function r(a){this.a=a},
fT:function fT(){},
c_:function c_(){},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.$ti=c},
ht:function ht(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hu:function hu(a,b,c){this.a=a
this.b=b
this.$ti=c},
d4:function d4(a,b,c){this.a=a
this.b=b
this.$ti=c},
jv:function jv(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(){},
d2:function d2(){},
ej:function ej(){},
nL:function(){throw H.e(P.I("Cannot modify unmodifiable Map"))},
co:function(a){var u,t=H.pZ(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pF:function(a){return v.types[H.ac(a)]},
pM:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iL},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.e(H.aZ(a))
return u},
cP:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oe:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=H.N(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.ag(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.C(s,q)|32)>t)return}return parseInt(a,b)},
cQ:function(a){return H.o5(a)+H.ly(H.bP(a),0,null)},
o5:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ica){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.co(t.length>1&&C.b.C(t,0)===36?C.b.a9(t,1):t)},
o6:function(){if(!!self.location)return self.location.href
return},
me:function(a){var u,t,s,r,q=J.aC(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
of:function(a){var u,t,s,r=H.d([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aZ(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aS(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.e(H.aZ(s))}return H.me(r)},
mf:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aZ(s))
if(s<0)throw H.e(H.aZ(s))
if(s>65535)return H.of(a)}return H.me(a)},
og:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c2:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aS(u,10))>>>0,56320|u&1023)}}throw H.e(P.ag(a,0,1114111,null,null))},
c1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
od:function(a){var u=H.c1(a).getFullYear()+0
return u},
ob:function(a){var u=H.c1(a).getMonth()+1
return u},
o7:function(a){var u=H.c1(a).getDate()+0
return u},
o8:function(a){var u=H.c1(a).getHours()+0
return u},
oa:function(a){var u=H.c1(a).getMinutes()+0
return u},
oc:function(a){var u=H.c1(a).getSeconds()+0
return u},
o9:function(a){var u=H.c1(a).getMilliseconds()+0
return u},
F:function(a){throw H.e(H.aZ(a))},
c:function(a,b){if(a==null)J.aC(a)
throw H.e(H.ci(a,b))},
ci:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,s,null)
u=H.ac(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,s,null,u)
return P.e1(b,s)},
pA:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c3(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c3(a,c,!0,b,"end",u)
return new P.aL(!0,b,"end",null)},
aZ:function(a){return new P.aL(!0,a,null,null)},
pv:function(a){if(typeof a!=="number")throw H.e(H.aZ(a))
return a},
e:function(a){var u
if(a==null)a=new P.dY()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.na})
u.name=""}else u.toString=H.na
return u},
na:function(){return J.as(this.dartException)},
A:function(a){throw H.e(a)},
u:function(a){throw H.e(P.bi(a))},
bd:function(a){var u,t,s,r,q,p
a=H.n9(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iS(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mq:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m9:function(a,b){return new H.hX(a,b==null?null:b.method)},
le:function(a,b){var u=b==null,t=u?null:b.method
return new H.hf(a,t,u?null:b.receiver)},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aS(t,16)&8191)===10)switch(s){case 438:return f.$1(H.le(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m9(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ne()
q=$.nf()
p=$.ng()
o=$.nh()
n=$.nk()
m=$.nl()
l=$.nj()
$.ni()
k=$.nn()
j=$.nm()
i=r.ac(u)
if(i!=null)return f.$1(H.le(H.N(u),i))
else{i=q.ac(u)
if(i!=null){i.method="call"
return f.$1(H.le(H.N(u),i))}else{i=p.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=n.ac(u)
if(i==null){i=m.ac(u)
if(i==null){i=l.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=k.ac(u)
if(i==null){i=j.ac(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m9(H.N(u),i))}}return f.$1(new H.j4(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e8()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aL(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e8()
return a},
cm:function(a){var u
if(a==null)return new H.eX(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eX(a)},
pE:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pL:function(a,b,c,d,e,f){H.h(a,"$ibB")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.B("Unsupported number of arguments for wrapped closure"))},
ch:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pL)
a.$identity=u
return u},
nK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iu().constructor.prototype):Object.create(new H.cr(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b_
if(typeof t!=="number")return t.B()
$.b_=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lV(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nG(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lV(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nG:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pF,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lU:H.l6
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
nH:function(a,b,c,d){var u=H.l6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lV:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nJ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nH(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.B()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cs
return new Function(r+H.i(q==null?$.cs=H.fA("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.B()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.cs
return new Function(r+H.i(q==null?$.cs=H.fA("self"):q)+"."+H.i(u)+"("+o+");}")()},
nI:function(a,b,c,d){var u=H.l6,t=H.lU
switch(b?-1:a){case 0:throw H.e(H.ok("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nJ:function(a,b){var u,t,s,r,q,p,o,n=$.cs
if(n==null)n=$.cs=H.fA("self")
u=$.lT
if(u==null)u=$.lT=H.fA("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nI(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b_
if(typeof u!=="number")return u.B()
$.b_=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b_
if(typeof u!=="number")return u.B()
$.b_=u+1
return new Function(n+u+"}")()},
lC:function(a,b,c,d,e,f,g){return H.nK(a,b,c,d,!!e,!!f,g)},
l6:function(a){return a.a},
lU:function(a){return a.c},
fA:function(a){var u,t,s,r=new H.cr("self","target","receiver","name"),q=J.lb(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
H:function(a){if(a==null)H.pr("boolean expression must not be null")
return a},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aY(a,"String"))},
pB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aY(a,"double"))},
n5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aY(a,"num"))},
lz:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aY(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aY(a,"int"))},
n7:function(a,b){throw H.e(H.aY(a,H.co(H.N(b).substring(2))))},
pS:function(a,b){throw H.e(H.nF(a,H.co(H.N(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.n7(a,b)},
t:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.pS(a,b)},
qI:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.e(H.aY(a,"List<dynamic>"))},
n3:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.n7(a,b)},
mZ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
fl:function(a,b){var u
if(typeof a=="function")return!0
u=H.mZ(J.T(a))
if(u==null)return!1
return H.mL(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.lv)return a
$.lv=!0
try{if(H.fl(a,b))return a
u=H.kW(b)
t=H.aY(a,u)
throw H.e(t)}finally{$.lv=!1}},
lE:function(a,b){if(a!=null&&!H.lB(a,b))H.A(H.aY(a,H.kW(b)))
return a},
aY:function(a,b){return new H.iU("TypeError: "+P.dG(a)+": type '"+H.i(H.mR(a))+"' is not a subtype of type '"+b+"'")},
nF:function(a,b){return new H.fB("CastError: "+P.dG(a)+": type '"+H.i(H.mR(a))+"' is not a subtype of type '"+b+"'")},
mR:function(a){var u,t=J.T(a)
if(!!t.$icu){u=H.mZ(t)
if(u!=null)return H.kW(u)
return"Closure"}return H.cQ(a)},
pr:function(a){throw H.e(new H.jw(a))},
pY:function(a){throw H.e(new P.fL(a))},
ok:function(a){return new H.ie(a)},
n0:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bP:function(a){if(a==null)return
return a.$ti},
qH:function(a,b,c){return H.cn(a["$a"+H.i(c)],H.bP(b))},
cl:function(a,b,c,d){var u=H.cn(a["$a"+H.i(c)],H.bP(b))
return u==null?null:u[d]},
ar:function(a,b,c){var u=H.cn(a["$a"+H.i(b)],H.bP(a))
return u==null?null:u[c]},
q:function(a,b){var u=H.bP(a)
return u==null?null:u[b]},
kW:function(a){return H.bO(a,null)},
bO:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.co(a[0].name)+H.ly(a,1,b)
if(typeof a=="function")return H.co(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.p0(a,b)
if('futureOr' in a)return"FutureOr<"+H.bO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p0:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.f])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.V)p+=" extends "+H.bO(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bO(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bO(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bO(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pD(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.N(n[g])
i=i+h+H.bO(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ly:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a6("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bO(p,c)}return"<"+u.i(0)+">"},
cn:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lA:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bP(a)
t=J.T(a)
if(t[b]==null)return!1
return H.mU(H.cn(t[d],u),null,c,null)},
n:function(a,b,c,d){if(a==null)return a
if(H.lA(a,b,c,d))return a
throw H.e(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.co(b.substring(2))+H.ly(c,0,null),v.mangledGlobalNames)))},
mU:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
qF:function(a,b,c){return a.apply(b,H.cn(J.T(b)["$a"+H.i(c)],H.bP(b)))},
n2:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="V"||a.name==="O"||a===-1||a===-2||H.n2(u)}return!1},
lB:function(a,b){var u,t
if(a==null)return b==null||b.name==="V"||b.name==="O"||b===-1||b===-2||H.n2(b)
if(b==null||b===-1||b.name==="V"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lB(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fl(a,b)}u=J.T(a).constructor
t=H.bP(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.lB(a,b))throw H.e(H.aY(a,H.kW(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="V"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="V"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aK("type" in a?a.type:l,b,s,d)
else if(H.aK(a,b,s,d))return!0
else{if(!('$i'+"cA" in t.prototype))return!1
r=t.prototype["$a"+"cA"]
q=H.cn(r,u?a.slice(1):l)
return H.aK(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mL(a,b,c,d)
if('func' in a)return c.name==="bB"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mU(H.cn(m,u),b,p,d)},
mL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aK(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aK(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aK(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aK(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pQ(h,b,g,d)},
pQ:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aK(c[s],d,a[s],b))return!1}return!0},
qG:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pO:function(a){var u,t,s,r,q=H.N($.n1.$1(a)),p=$.kF[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.N($.mT.$2(a,q))
if(q!=null){p=$.kF[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kV(u)
$.kF[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kL[q]=u
return u}if(s==="-"){r=H.kV(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n6(a,u)
if(s==="*")throw H.e(P.j3(q))
if(v.leafTags[q]===true){r=H.kV(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n6(a,u)},
n6:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lG(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kV:function(a){return J.lG(a,!1,null,!!a.$iL)},
pP:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kV(u)
else return J.lG(u,c,null,null)},
pJ:function(){if(!0===$.lF)return
$.lF=!0
H.pK()},
pK:function(){var u,t,s,r,q,p,o,n
$.kF=Object.create(null)
$.kL=Object.create(null)
H.pI()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n8.$1(q)
if(p!=null){o=H.pP(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pI:function(){var u,t,s,r,q,p,o=C.G()
o=H.cg(C.H,H.cg(C.I,H.cg(C.u,H.cg(C.u,H.cg(C.J,H.cg(C.K,H.cg(C.L(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.n1=new H.kI(r)
$.mT=new H.kJ(q)
$.n8=new H.kK(p)},
cg:function(a,b){return a(b)||b},
nV:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(P.a4("Illegal RegExp pattern ("+String(p)+")",a,null))},
pW:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pC:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n9:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lJ:function(a,b,c){var u=H.pX(a,b,c)
return u},
pX:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n9(b),'g'),H.pC(c))},
fF:function fF(){},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iS:function iS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hX:function hX(a,b){this.a=a
this.b=b},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a){this.a=a},
l1:function l1(a){this.a=a},
eX:function eX(a){this.a=a
this.b=null},
cu:function cu(){},
iE:function iE(){},
iu:function iu(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iU:function iU(a){this.a=a},
fB:function fB(a){this.a=a},
ie:function ie(a){this.a=a},
jw:function jw(a){this.a=a},
a1:function a1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hj:function hj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hk:function hk(a,b){this.a=a
this.$ti=b},
hl:function hl(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
he:function he(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ce:function(a){return a},
o4:function(a){return new Int8Array(a)},
bg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.ci(b,a))},
oZ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.pA(a,b,c))
return b},
cK:function cK(){},
bH:function bH(){},
dU:function dU(){},
cL:function cL(){},
dV:function dV(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
dW:function dW(){},
cM:function cM(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
pD:function(a){return J.m2(a?Object.keys(a):[],null)},
pZ:function(a){return v.mangledGlobalNames[a]},
pR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kG:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lF==null){H.pJ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.j3("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lL()]
if(r!=null)return r
r=H.pO(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lL(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
nU:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.l5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.ag(a,0,4294967295,"length",null))
return J.m2(new Array(a),b)},
m2:function(a,b){return J.lb(H.d(a,[b]))},
lb:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dJ.prototype
return J.dI.prototype}if(typeof a=="string")return J.bD.prototype
if(a==null)return J.dK.prototype
if(typeof a=="boolean")return J.hd.prototype
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.V)return a
return J.kG(a)},
dl:function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.V)return a
return J.kG(a)},
fm:function(a){if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.V)return a
return J.kG(a)},
n_:function(a){if(typeof a=="number")return J.cE.prototype
if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.ca.prototype
return a},
dm:function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.ca.prototype
return a},
ck:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.V)return a
return J.kG(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).p(a,b)},
lN:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n_(a).A(a,b)},
dq:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pM(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dl(a).j(a,b)},
l3:function(a,b,c){return J.fm(a).k(a,b,c)},
nw:function(a,b){return J.dm(a).C(a,b)},
nx:function(a,b,c){return J.ck(a).hv(a,b,c)},
ny:function(a,b,c,d){return J.ck(a).i_(a,b,c,d)},
nz:function(a,b){return J.dm(a).W(a,b)},
l4:function(a,b){return J.n_(a).ih(a,b)},
fo:function(a,b){return J.fm(a).H(a,b)},
nA:function(a,b,c,d){return J.ck(a).iz(a,b,c,d)},
lO:function(a,b){return J.fm(a).F(a,b)},
nB:function(a){return J.ck(a).gia(a)},
lP:function(a){return J.ck(a).gc2(a)},
dr:function(a){return J.T(a).gG(a)},
bt:function(a){return J.fm(a).gV(a)},
aC:function(a){return J.dl(a).gn(a)},
lQ:function(a){return J.fm(a).j6(a)},
nC:function(a,b){return J.ck(a).ja(a,b)},
nD:function(a,b,c){return J.dm(a).q(a,b,c)},
nE:function(a){return J.dm(a).jk(a)},
as:function(a){return J.T(a).i(a)},
a:function a(){},
hd:function hd(){},
dK:function dK(){},
dL:function dL(){},
i0:function i0(){},
ca:function ca(){},
bE:function bE(){},
b4:function b4(a){this.$ti=a},
lc:function lc(a){this.$ti=a},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cE:function cE(){},
dJ:function dJ(){},
dI:function dI(){},
bD:function bD(){}},P={
oA:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ps()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ch(new P.jy(s),1)).observe(u,{childList:true})
return new P.jx(s,u,t)}else if(self.setImmediate!=null)return P.pt()
return P.pu()},
oB:function(a){self.scheduleImmediate(H.ch(new P.jz(H.o(a,{func:1,ret:-1})),0))},
oC:function(a){self.setImmediate(H.ch(new P.jA(H.o(a,{func:1,ret:-1})),0))},
oD:function(a){P.lj(C.n,H.o(a,{func:1,ret:-1}))},
lj:function(a,b){var u=C.d.a8(a.a,1000)
return P.oJ(u<0?0:u,b)},
mp:function(a,b){var u=C.d.a8(a.a,1000)
return P.oK(u<0?0:u,b)},
oJ:function(a,b){var u=new P.f2()
u.eP(a,b)
return u},
oK:function(a,b){var u=new P.f2()
u.eQ(a,b)
return u},
oE:function(a,b){var u,t,s
b.a=1
try{a.ee(new P.jK(b),new P.jL(b),null)}catch(s){u=H.ai(s)
t=H.cm(s)
P.pT(new P.jM(b,u,t))}},
mB:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaJ")
if(u>=4){t=b.bP()
b.a=a.a
b.c=a.c
P.d7(b,t)}else{t=H.h(b.c,"$ibf")
b.a=2
b.c=a
a.d4(t)}},
d7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$iao")
P.kw(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.d7(h.a,b)}g=h.a
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
if(m){H.h(q,"$iao")
P.kw(i,i,g.b,q.a,q.b)
return}l=$.a0
if(l!==n)$.a0=n
else l=i
g=b.c
if((g&15)===8)new P.jQ(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jP(u,b,q).$0()}else if((g&2)!==0)new P.jO(h,u,b).$0()
if(l!=null)$.a0=l
g=u.b
if(!!J.T(g).$icA){if(g.a>=4){k=H.h(o.c,"$ibf")
o.c=null
b=o.bi(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mB(g,o)
return}}j=b.b
k=H.h(j.c,"$ibf")
j.c=null
b=j.bi(k)
g=u.a
p=u.b
if(!g){H.D(p,H.q(j,0))
j.a=4
j.c=p}else{H.h(p,"$iao")
j.a=8
j.c=p}h.a=j
g=j}},
pn:function(a,b){if(H.fl(a,{func:1,args:[P.V,P.au]}))return H.o(a,{func:1,ret:null,args:[P.V,P.au]})
if(H.fl(a,{func:1,args:[P.V]}))return H.o(a,{func:1,ret:null,args:[P.V]})
throw H.e(P.l5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pm:function(){var u,t
for(;u=$.cf,u!=null;){$.dk=null
t=u.b
$.cf=t
if(t==null)$.dj=null
u.a.$0()}},
pq:function(){$.lw=!0
try{P.pm()}finally{$.dk=null
$.lw=!1
if($.cf!=null)$.lM().$1(P.mV())}},
mQ:function(a){var u=new P.ep(a)
if($.cf==null){$.cf=$.dj=u
if(!$.lw)$.lM().$1(P.mV())}else $.dj=$.dj.b=u},
pp:function(a){var u,t,s=$.cf
if(s==null){P.mQ(a)
$.dk=$.dj
return}u=new P.ep(a)
t=$.dk
if(t==null){u.b=s
$.cf=$.dk=u}else{u.b=t.b
$.dk=t.b=u
if(u.b==null)$.dj=u}},
pT:function(a){var u=null,t=$.a0
if(C.f===t){P.ky(u,u,C.f,a)
return}P.ky(u,u,t,H.o(t.bZ(a),{func:1,ret:-1}))},
mo:function(a,b){var u=$.a0
if(u===C.f)return P.lj(a,H.o(b,{func:1,ret:-1}))
return P.lj(a,H.o(u.bZ(b),{func:1,ret:-1}))},
oq:function(a,b){var u=$.a0
if(u===C.f)return P.mp(a,H.o(b,{func:1,ret:-1,args:[P.bb]}))
return P.mp(a,H.o(u.dk(b,P.bb),{func:1,ret:-1,args:[P.bb]}))},
kw:function(a,b,c,d,e){var u={}
u.a=d
P.pp(new P.kx(u,e))},
mM:function(a,b,c,d,e){var u,t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
mN:function(a,b,c,d,e,f,g){var u,t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
po:function(a,b,c,d,e,f,g,h,i){var u,t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
ky:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bZ(d):c.ib(d,-1)
P.mQ(d)},
jy:function jy(a){this.a=a},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
f2:function f2(){this.c=0},
ke:function ke(a,b){this.a=a
this.b=b},
kd:function kd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aJ:function aJ(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jJ:function jJ(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jR:function jR(a){this.a=a},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a){this.a=a
this.b=null},
ix:function ix(){},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
cV:function cV(){},
iy:function iy(){},
bb:function bb(){},
ao:function ao(a,b){this.a=a
this.b=b},
kn:function kn(){},
kx:function kx(a,b){this.a=a
this.b=b},
jX:function jX(){},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b){this.a=a
this.b=b},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
nX:function(a,b){return new H.a1([a,b])},
lf:function(a,b){return new H.a1([a,b])},
nZ:function(a){return H.pE(a,new H.a1([null,null]))},
dO:function(a){return new P.jV([a])},
lq:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oI:function(a,b,c){var u=new P.eE(a,b,[c])
u.c=a.e
return u},
nS:function(a,b,c){var u,t
if(P.lx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.aw,a)
try{P.p1(a,u)}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}t=P.mm(b,H.n3(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
la:function(a,b,c){var u,t
if(P.lx(a))return b+"..."+c
u=new P.a6(b)
C.a.h($.aw,a)
try{t=u
t.a=P.mm(t.a,a,", ")}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lx:function(a){var u,t
for(u=$.aw.length,t=0;t<u;++t)if(a===$.aw[t])return!0
return!1},
p1:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.i(n.gJ(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.w()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.w();r=q,q=p){p=n.gJ(n);++l
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
nY:function(a,b,c){var u=P.nX(b,c)
a.F(0,new P.hm(u,b,c))
return u},
m3:function(a,b){var u,t,s=P.dO(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.D(a[t],b))
return s},
lg:function(a){var u,t={}
if(P.lx(a))return"{...}"
u=new P.a6("")
try{C.a.h($.aw,a)
u.a+="{"
t.a=!0
J.lO(a,new P.hq(t,u))
u.a+="}"}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jV:function jV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cb:function cb(a){this.a=a
this.c=this.b=null},
eE:function eE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(){},
y:function y(){},
hp:function hp(){},
hq:function hq(a,b){this.a=a
this.b=b},
ae:function ae(){},
kf:function kf(){},
hr:function hr(){},
ek:function ek(a,b){this.a=a
this.$ti=b},
k1:function k1(){},
eF:function eF(){},
f8:function f8(){},
ou:function(a,b,c,d){if(b instanceof Uint8Array)return P.ov(!1,b,c,d)
return},
ov:function(a,b,c,d){var u,t,s=$.no()
if(s==null)return
u=0===c
if(u&&!0)return P.lm(s,b)
t=b.length
d=P.bL(c,d,t)
if(u&&d===t)return P.lm(s,b)
return P.lm(s,b.subarray(c,d))},
lm:function(a,b){if(P.ox(b))return
return P.oy(a,b)},
oy:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ai(t)}return},
ox:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ow:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ai(t)}return},
mP:function(a,b,c){var u,t,s
for(u=J.dl(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ah()
if((s&127)!==s)return t-b}return c-b},
lS:function(a,b,c,d,e,f){if(C.d.bb(f,4)!==0)throw H.e(P.a4("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.a4("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.a4("Invalid base64 padding, more than two '=' characters",a,b))},
fx:function fx(){},
fy:function fy(){},
bU:function bU(){},
bx:function bx(){},
fV:function fV(){},
ha:function ha(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
h9:function h9(a){this.a=a},
jc:function jc(){},
je:function je(){},
kl:function kl(a){this.b=0
this.c=a},
jd:function jd(a){this.a=a},
kk:function kk(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fn:function(a,b,c){var u=H.oe(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.a4(a,null,null))},
nP:function(a){if(a instanceof H.cu)return a.i(0)
return"Instance of '"+H.i(H.cQ(a))+"'"},
o_:function(a,b,c){var u,t=J.nU(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.n(t,"$ib",[c],"$ab")},
m4:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bt(a);u.w();)C.a.h(s,H.D(u.gJ(u),c))
if(b)return s
return H.n(J.lb(s),"$ib",t,"$ab")},
cW:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.n(a,"$ib4",[P.l],"$ab4")
u=a.length
c=P.bL(b,c,u)
return H.mf(b>0||c<u?C.a.ev(a,b,c):a)}if(!!J.T(a).$icM)return H.og(a,b,P.bL(b,c,a.length))
return P.oo(a,b,c)},
oo:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.e(P.ag(b,0,J.aC(a),q,q))
u=c==null
if(!u&&c<b)throw H.e(P.ag(c,b,J.aC(a),q,q))
t=J.bt(a)
for(s=0;s<b;++s)if(!t.w())throw H.e(P.ag(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.w())throw H.e(P.ag(c,b,s,q,q))
r.push(t.gJ(t))}return H.mf(r)},
oi:function(a){return new H.he(a,H.nV(a,!1,!0,!1,!1,!1))},
mm:function(a,b,c){var u=J.bt(b)
if(!u.w())return a
if(c.length===0){do a+=H.i(u.gJ(u))
while(u.w())}else{a+=H.i(u.gJ(u))
for(;u.w();)a=a+c+H.i(u.gJ(u))}return a},
ms:function(){var u=H.o6()
if(u!=null)return P.ot(u)
throw H.e(P.I("'Uri.base' is not supported"))},
f9:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nu().b
if(typeof b!=="string")H.A(H.aZ(b))
u=u.test(b)}else u=!1
if(u)return b
H.D(b,H.ar(c,"bU",0))
t=c.giy().c3(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c2(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nM:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dC:function(a){if(a>=10)return""+a
return"0"+a},
lY:function(a){return new P.bz(1000*a)},
dG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nP(a)},
dt:function(a){return new P.aL(!1,null,null,a)},
l5:function(a,b,c){return new P.aL(!0,a,b,c)},
e1:function(a,b){return new P.c3(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c3(b,c,!0,a,d,"Invalid value")},
bL:function(a,b,c){if(0>a||a>c)throw H.e(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.ag(b,a,c,"end",null))
return b}return c},
mg:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.e(P.ag(a,0,null,b,null))},
X:function(a,b,c,d,e){var u=H.ac(e==null?J.aC(b):e)
return new P.hb(u,!0,a,c,"Index out of range")},
I:function(a){return new P.j5(a)},
j3:function(a){return new P.j2(a)},
ml:function(a){return new P.cU(a)},
bi:function(a){return new P.fE(a)},
B:function(a){return new P.ex(a)},
a4:function(a,b,c){return new P.h4(a,b,c)},
o0:function(a,b,c){var u,t=H.d([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lI:function(a){H.pR(a)},
ot:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.C(a,4)^58)*3|C.b.C(a,0)^100|C.b.C(a,1)^97|C.b.C(a,2)^116|C.b.C(a,3)^97)>>>0
if(u===0)return P.mr(e<e?C.b.q(a,0,e):a,5,f).gek()
else if(u===32)return P.mr(C.b.q(a,5,e),0,f).gek()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.l])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.mO(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jn()
if(r>=0)if(P.mO(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.S()
if(typeof n!=="number")return H.F(n)
if(m<n)n=m
if(typeof o!=="number")return o.S()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.S()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.S()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a6(a,"..",o)))j=n>o+2&&C.b.a6(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a6(a,"file",0)){if(q<=0){if(!C.b.a6(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.q(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aW(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a6(a,"http",0)){if(t&&p+3===o&&C.b.a6(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a6(a,"https",0)){if(t&&p+4===o&&C.b.a6(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k4(a,r,q,p,o,n,m,k)}return P.oL(a,0,e,r,q,p,o,n,m,k)},
mu:function(a){var u=P.f
return C.a.iD(H.d(a.split("&"),[u]),P.lf(u,u),new P.ja(C.h),[P.z,P.f,P.f])},
os:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j7(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fn(C.b.q(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fn(C.b.q(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
mt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.j8(a),d=new P.j9(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.W(a,t)
if(p===58){if(t===b){++t
if(C.b.W(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gav(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.os(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.c(l,i)
l[i]=0
f=i+1
if(f>=k)return H.c(l,f)
l[f]=0
i+=2}else{f=C.d.aS(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
oL:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oT(a,b,d)
else{if(d===b)P.cd(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oU(a,u,e-1):""
s=P.oQ(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.oS(P.fn(C.b.q(a,r,g),new P.kg(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oR(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.ls(a,h+1,i,n):n
return new P.cc(j,t,s,q,p,o,i<c?P.oP(a,i+1,c):n)},
mF:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cd:function(a,b,c){throw H.e(P.a4(c,a,b))},
oS:function(a,b){if(a!=null&&a===P.mF(b))return
return a},
oQ:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.P()
u=c-1
if(C.b.W(a,u)!==93)P.cd(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oN(a,t,u)
if(typeof s!=="number")return s.S()
if(s<u){r=s+1
q=P.mK(a,C.b.a6(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mt(a,t,s)
return C.b.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.F(c)
p=b
for(;p<c;++p)if(C.b.W(a,p)===58){s=C.b.bn(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mK(a,C.b.a6(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mt(a,b,s)
return"["+C.b.q(a,b,s)+q+"]"}return P.oW(a,b,c)},
oN:function(a,b,c){var u,t=C.b.bn(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.F(c)
u=t<c}else u=!1
return u?t:c},
mK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a6(d):null
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.W(a,u)
if(r===37){q=P.lt(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a6("")
o=l.a+=C.b.q(a,t,u)
if(p)q=C.b.q(a,u,u+3)
else if(q==="%")P.cd(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a6("")
if(t<u){l.a+=C.b.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.W(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a6("")
l.a+=C.b.q(a,t,u)
l.a+=P.lr(r)
u+=m
t=u}}}if(l==null)return C.b.q(a,b,c)
if(t<c)l.a+=C.b.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.W(a,u)
if(q===37){p=P.lt(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a6("")
n=C.b.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a6("")
if(t<u){s.a+=C.b.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.cd(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a6("")
n=C.b.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lr(q)
u+=l
t=u}}}}if(s==null)return C.b.q(a,b,c)
if(t<c){n=C.b.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oT:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mH(C.b.C(a,b)))P.cd(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cd(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.q(a,b,c)
return P.oM(t?a.toLowerCase():a)},
oM:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oU:function(a,b,c){return P.dh(a,b,c,C.W,!1)},
oR:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dh(a,b,c,C.A,!0):C.v.jB(d,new P.kh(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a3(u,"/"))u="/"+u
return P.oV(u,e,f)},
oV:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a3(a,"/"))return P.oX(a,!u||c)
return P.oY(a)},
ls:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.e(P.dt("Both query and queryParameters specified"))
return P.dh(a,b,c,C.l,!0)}if(d==null)return
u=new P.a6("")
t.a=""
d.F(0,new P.ki(new P.kj(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oP:function(a,b,c){return P.dh(a,b,c,C.l,!0)},
lt:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.W(a,b+1)
t=C.b.W(a,p)
s=H.kH(u)
r=H.kH(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aS(q,4)
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c2(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
lr:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.C(o,a>>>4))
C.a.k(t,2,C.b.C(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.hJ(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.C(o,p>>>4))
C.a.k(t,q+2,C.b.C(o,p&15))
q+=3}}return P.cW(t,0,null)},
dh:function(a,b,c,d,e){var u=P.mJ(a,b,c,d,e)
return u==null?C.b.q(a,b,c):u},
mJ:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.S()
if(typeof c!=="number")return H.F(c)
if(!(o<c))break
c$0:{u=C.b.W(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.c(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lt(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.c(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cd(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.W(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lr(u)}}if(m==null)m=new P.a6("")
m.a+=C.b.q(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.F(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.S()
if(n<c)m.a+=C.b.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mI:function(a){if(C.b.a3(a,"."))return!0
return C.b.dO(a,"/.")!==-1},
oY:function(a){var u,t,s,r,q,p,o
if(!P.mI(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.P(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oX:function(a,b){var u,t,s,r,q,p
if(!P.mI(a))return!b?P.mG(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gav(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gav(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.k(u,0,P.mG(u[0]))}return C.a.m(u,"/")},
mG:function(a){var u,t,s,r=a.length
if(r>=2&&P.mH(J.nw(a,0)))for(u=1;u<r;++u){t=C.b.C(a,u)
if(t===58)return C.b.q(a,0,u)+"%3A"+C.b.a9(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oO:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.dt("Invalid URL encoding"))}}return u},
lu:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.q(a,b,c)
else r=new H.r(C.b.q(a,b,c))}else{r=H.d([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.C(a,q)
if(t>127)throw H.e(P.dt("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.e(P.dt("Truncated URI"))
C.a.h(r,P.oO(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.n(r,"$ib",[P.l],"$ab")
return new P.jd(!1).c3(r)},
mH:function(a){var u=a|32
return 97<=u&&u<=122},
mr:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.e(P.a4(m,a,t))}}if(s<0&&t>b)throw H.e(P.a4(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gav(l)
if(r!==44||t!==p+7||!C.b.a6(a,"base64",p+1))throw H.e(P.a4("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iQ(0,a,o,u)
else{n=P.mJ(a,o,u,C.l,!0)
if(n!=null)a=C.b.aW(a,o,u,n)}return new P.j6(a,l,c)},
p_:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.o0(22,new P.kr(),P.R),n=new P.kq(o),m=new P.ks(),l=new P.kt(),k=H.h(n.$2(0,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(14,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(15,225),"$iR")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(1,225),"$iR")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(2,235),"$iR")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(3,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(4,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(5,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(6,231),"$iR")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(7,231),"$iR")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.h(n.$2(8,8),"$iR"),"]",5)
k=H.h(n.$2(9,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(16,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(17,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(10,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(18,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(19,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(11,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(12,236),"$iR")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.h(n.$2(13,237),"$iR")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.h(n.$2(20,245),"$iR"),"az",21)
k=H.h(n.$2(21,245),"$iR")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mO:function(a,b,c,d,e){var u,t,s,r,q=$.nv()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.c(q,d)
t=q[d]
s=C.b.C(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.c(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
S:function S(){},
ay:function ay(a,b){this.a=a
this.b=b},
v:function v(){},
bz:function bz(a){this.a=a},
fR:function fR(){},
fS:function fS(){},
bA:function bA(){},
fr:function fr(){},
dY:function dY(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b,c,d,e,f){var _=this
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
j5:function j5(a){this.a=a},
j2:function j2(a){this.a=a},
cU:function cU(a){this.a=a},
fE:function fE(a){this.a=a},
i_:function i_(){},
e8:function e8(){},
fL:function fL(a){this.a=a},
ex:function ex(a){this.a=a},
h4:function h4(a,b,c){this.a=a
this.b=b
this.c=c},
bB:function bB(){},
l:function l(){},
k:function k(){},
b3:function b3(){},
b:function b(){},
z:function z(){},
O:function O(){},
aa:function aa(){},
V:function V(){},
au:function au(){},
f:function f(){},
a6:function a6(a){this.a=a},
ja:function ja(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kg:function kg(a,b){this.a=a
this.b=b},
kh:function kh(){},
kj:function kj(a,b){this.a=a
this.b=b},
ki:function ki(a){this.a=a},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(){},
kq:function kq(a){this.a=a},
ks:function ks(){},
kt:function kt(){},
k4:function k4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jE:function jE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
py:function(a){var u,t=J.T(a)
if(!!t.$ibk){u=t.gdq(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.f7(a.data,a.height,a.width)},
px:function(a){if(a instanceof P.f7)return{data:a.a,height:a.b,width:a.c}
return a},
bn:function(a){var u,t,s,r,q
if(a==null)return
u=P.lf(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.N(t[r])
u.k(0,q,a[q])}return u},
pw:function(a){var u={}
a.F(0,new P.kz(u))
return u},
k6:function k6(){},
k8:function k8(a,b){this.a=a
this.b=b},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function kz(a){this.a=a},
k7:function k7(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(){},
h2:function h2(){},
jU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jW:function jW(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b6:function b6(){},
hh:function hh(){},
b9:function b9(){},
hY:function hY(){},
i4:function i4(){},
cR:function cR(){},
iB:function iB(){},
p:function p(){},
bc:function bc(){},
iR:function iR(){},
eC:function eC(){},
eD:function eD(){},
eN:function eN(){},
eO:function eO(){},
eZ:function eZ(){},
f_:function f_(){},
f5:function f5(){},
f6:function f6(){},
R:function R(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(a){this.a=a},
fw:function fw(){},
bR:function bR(){},
hZ:function hZ(){},
eq:function eq(){},
dv:function dv(){},
e0:function e0(){},
c4:function c4(){},
e4:function e4(){},
ec:function ec(){},
ei:function ei(){},
it:function it(){},
eV:function eV(){},
eW:function eW(){}},W={
lR:function(){var u=document.createElement("a")
return u},
l7:function(){var u=document.createElement("canvas")
return u},
nO:function(a,b,c){var u=document.body,t=(u&&C.r).ab(u,a,b,c)
t.toString
u=W.E
u=new H.d4(new W.aq(t),H.o(new W.fU(),{func:1,ret:P.S,args:[u]}),[u])
return H.h(u.gaM(u),"$iU")},
m0:function(a){H.h(a,"$ij")
return"wheel"},
cx:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ck(a)
t=u.geb(a)
if(typeof t==="string")r=u.geb(a)}catch(s){H.ai(s)}return r},
nR:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icD")
try{s.type=a}catch(u){H.ai(u)}return s},
jT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mD:function(a,b,c,d){var u=W.jT(W.jT(W.jT(W.jT(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.mS(new W.jI(c),W.m)
if(u!=null&&!0)J.ny(a,b,u,!1)
return new W.jH(a,b,u,!1,[e])},
mC:function(a){var u=W.lR(),t=window.location
u=new W.bN(new W.k0(u,t))
u.eJ(a)
return u},
oF:function(a,b,c,d){H.h(a,"$iU")
H.N(b)
H.N(c)
H.h(d,"$ibN")
return!0},
oG:function(a,b,c,d){var u,t,s
H.h(a,"$iU")
H.N(b)
H.N(c)
u=H.h(d,"$ibN").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mE:function(){var u=P.f,t=P.m3(C.o,u),s=H.q(C.o,0),r=H.o(new W.kc(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kb(t,P.dO(u),P.dO(u),P.dO(u),null)
t.eO(null,new H.hu(C.o,r,[s,u]),q,null)
return t},
mS:function(a,b){var u=$.a0
if(u===C.f)return a
return u.dk(a,b)},
x:function x(){},
fp:function fp(){},
ds:function ds(){},
fq:function fq(){},
cq:function cq(){},
bS:function bS(){},
bu:function bu(){},
bT:function bT(){},
ct:function ct(){},
bv:function bv(){},
cv:function cv(){},
fH:function fH(){},
W:function W(){},
cw:function cw(){},
fI:function fI(){},
b1:function b1(){},
b2:function b2(){},
fJ:function fJ(){},
fK:function fK(){},
fN:function fN(){},
aD:function aD(){},
fO:function fO(){},
dD:function dD(){},
dE:function dE(){},
fP:function fP(){},
fQ:function fQ(){},
jC:function jC(a,b){this.a=a
this.b=b},
U:function U(){},
fU:function fU(){},
m:function m(){},
j:function j(){},
aE:function aE(){},
cz:function cz(){},
h_:function h_(){},
h3:function h3(){},
aN:function aN(){},
h8:function h8(){},
bX:function bX(){},
bk:function bk(){},
cC:function cC(){},
cD:function cD(){},
b5:function b5(){},
dP:function dP(){},
hI:function hI(){},
cI:function cI(){},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
hL:function hL(){},
hM:function hM(a){this.a=a},
aO:function aO(){},
hN:function hN(){},
af:function af(){},
aq:function aq(a){this.a=a},
E:function E(){},
cN:function cN(){},
aP:function aP(){},
i2:function i2(){},
ic:function ic(){},
id:function id(a){this.a=a},
ig:function ig(){},
aR:function aR(){},
ir:function ir(){},
aS:function aS(){},
is:function is(){},
aT:function aT(){},
iv:function iv(){},
iw:function iw(a){this.a=a},
aF:function aF(){},
ba:function ba(){},
ea:function ea(){},
iC:function iC(){},
iD:function iD(){},
cX:function cX(){},
aV:function aV(){},
aG:function aG(){},
iF:function iF(){},
iG:function iG(){},
iL:function iL(){},
aW:function aW(){},
aX:function aX(){},
iP:function iP(){},
iQ:function iQ(){},
bM:function bM(){},
jb:function jb(){},
jt:function jt(){},
be:function be(){},
d5:function d5(){},
d6:function d6(){},
jD:function jD(){},
es:function es(){},
jS:function jS(){},
eK:function eK(){},
k5:function k5(){},
k9:function k9(){},
jB:function jB(){},
jF:function jF(a){this.a=a},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lp:function lp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jH:function jH(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jI:function jI(a){this.a=a},
bN:function bN(a){this.a=a},
G:function G(){},
dX:function dX(a){this.a=a},
hV:function hV(a){this.a=a},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(){},
k2:function k2(){},
k3:function k3(){},
kb:function kb(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kc:function kc(){},
ka:function ka(){},
dH:function dH(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aA:function aA(){},
k0:function k0(a,b){this.a=a
this.b=b},
fa:function fa(a){this.a=a},
km:function km(a){this.a=a},
er:function er(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eL:function eL(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
dd:function dd(){},
de:function de(){},
eT:function eT(){},
eU:function eU(){},
eY:function eY(){},
f0:function f0(){},
f1:function f1(){},
df:function df(){},
dg:function dg(){},
f3:function f3(){},
f4:function f4(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){}},O={
l8:function(a){var u=new O.a2([a])
u.bz(a)
return u},
a2:function a2(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cH:function cH(){this.b=this.a=null},
dS:function dS(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(){},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(){},
hw:function hw(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cG:function cG(){},
hx:function hx(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b7:function b7(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hz:function hz(){var _=this
_.e=_.d=_.c=_.b=null},
hA:function hA(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hB:function hB(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c5:function c5(){}},E={
m1:function(){var u=new E.ap()
u.a=""
u.b=!0
u.seI(0,O.l8(E.ap))
u.y.bc(u.giR(),u.giU())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sai(0,null)
u.sad(null)
return u},
oj:function(a,b){var u=new E.i8(a)
u.eD(a,b)
return u},
op:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibT)return E.mn(a,!0,!0,!0,!1)
u=W.l7()
t=u.style
t.width="100%"
t.height="100%"
s.gc2(a).h(0,u)
return E.mn(u,!0,!0,!0,!1)},
mn:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ee(),j=H.h(C.j.ct(a,"webgl2",P.nZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic4")
if(j==null)H.A(P.B("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oj(j,a)
u=new T.iI(j)
u.b=H.ac(j.getParameter(3379))
H.ac(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.el(a)
t=new X.hg()
t.shp(P.dO(P.l))
u.b=t
t=new X.hO(u)
t.f=0
t.r=V.bJ()
t.x=V.bJ()
t.ch=t.Q=1
u.c=t
t=new X.ho(u)
t.r=0
t.x=V.bJ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iO(u)
t.f=V.bJ()
t.r=V.bJ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf9(H.d([],[[P.cV,P.V]]))
t=u.z
s=document
r=W.af
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.o(u.gfM(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.o(u.gfS(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.o(u.gfG(),o),!1,p))
t=u.z
n=W.b5
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.o(u.gfW(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.o(u.gfU(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.o(u.gh_(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.o(u.gh3(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.o(u.gh1(),q),!1,r))
n=u.z
W.m0(a)
m=W.be;(n&&C.a).h(n,W.a9(a,H.N(W.m0(a)),H.o(u.gh5(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.o(u.gfO(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.o(u.gfQ(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.o(u.gh7(),o),!1,p))
p=u.z
o=W.aX
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.o(u.ghk(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.o(u.ghg(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.o(u.ghi(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.d6()
return k},
fz:function fz(){},
ap:function ap(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
e9:function e9(a){this.c=a
this.b=null},
ee:function ee(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iK:function iK(a){this.a=a}},Z={
lo:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ce(c)),35044)
a.bindBuffer(b,null)
return new Z.eo(b,u)},
aI:function(a){return new Z.bm(a)},
eo:function eo(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ju:function ju(a){this.a=a},
dx:function dx(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a){this.a=a}},D={
a_:function(){var u=new D.bV()
u.saj(null)
u.saQ(null)
u.c=null
u.d=0
return u},
fC:function fC(){},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=null},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
C:function C(){this.b=null},
bY:function bY(a){this.b=null
this.$ti=a},
bZ:function bZ(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
lX:function(){var u=new D.by()
u.c=new V.a3(1,1,1)
u.a=V.mA()
u.d=V.ln()
u.e=V.oz()
u.sad(null)
u.sal(0,null)
return u},
by:function by(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ad:function ad(){},
dN:function dN(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e_:function e_(){},
e7:function e7(){}},X={dy:function dy(a,b){this.a=a
this.b=b},dM:function dM(a,b){this.a=a
this.b=b},hg:function hg(){this.d=this.b=this.a=null},dQ:function dQ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ho:function ho(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},bG:function bG(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hO:function hO(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i3:function i3(){},eg:function eg(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iO:function iO(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},el:function el(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nQ:function(a){var u=new X.h5(),t=new V.b0(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mi
if(t==null){t=V.mh(0,0,1,1)
$.mi=t}u.r=t
return u},
dz:function dz(){},
h5:function h5(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dZ:function dZ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
eb:function eb(){}},V={
l2:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bb(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ae("null",c)
return C.b.ae(C.e.ef(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
cj:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.f])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.Q(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.k(p,q,C.b.ae(p[q],t))}return p},
lH:function(a){return C.e.jh(Math.pow(2,C.S.cc(Math.log(H.pv(a))/Math.log(2))))},
o3:function(a){return new V.c0(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)},
dT:function(){var u=$.m8
return u==null?$.m8=V.b8(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lh:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b8(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
m6:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b8(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
m7:function(a,b,c,d){d=V.ln()
return V.m5(V.md(),d,new V.J(a,b,c))},
m5:function(a,b,c){var u=c.t(0,Math.sqrt(c.D(c))),t=b.aD(u),s=t.t(0,Math.sqrt(t.D(t))),r=u.aD(s),q=new V.J(a.a,a.b,a.c),p=s.T(0).D(q),o=r.T(0).D(q),n=u.T(0).D(q)
return V.b8(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bJ:function(){var u=$.mc
return u==null?$.mc=new V.ab(0,0):u},
md:function(){var u=$.cO
return u==null?$.cO=new V.a5(0,0,0):u},
mh:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e2(a,b,c,d)},
d3:function(){var u=$.mz
return u==null?$.mz=new V.J(0,0,0):u},
oz:function(){var u=$.jf
return u==null?$.jf=new V.J(-1,0,0):u},
ln:function(){var u=$.jg
return u==null?$.jg=new V.J(0,1,0):u},
mA:function(){var u=$.jh
return u==null?$.jh=new V.J(0,0,1):u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a){this.a=a},
c0:function c0(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ak:function ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ab:function ab(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e2:function e2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.e(P.B("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.C(a,0)
t=C.b.C(b,0)
s=new V.i7()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.ih()
u.eE(a)
return u},
iN:function(){var u=new V.iM(),t=P.f
u.shM(new H.a1([t,V.cT]))
u.shP(new H.a1([t,V.cZ]))
u.c=null
return u},
bh:function bh(){},
az:function az(){},
dR:function dR(){},
at:function at(){this.a=null},
i7:function i7(){this.b=this.a=null},
ih:function ih(){this.a=null},
cT:function cT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a){this.b=a
this.c=null},
iM:function iM(){this.c=this.b=this.a=null},
d_:function d_(a){this.b=a
this.a=this.c=null},
pU:function(a){P.oq(C.P,new V.kX(a))},
ol:function(a){var u=new V.il()
u.eG(a,!0)
return u},
bw:function bw(){},
kX:function kX(a){this.a=a},
fM:function fM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h6:function h6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h7:function h7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i1:function i1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i5:function i5(a){this.a=a
this.c=null},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(){this.b=this.a=null},
io:function io(a){this.a=a},
im:function im(a){this.a=a},
ip:function ip(a){this.a=a}},U={
lW:function(){var u=new U.fD()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
dB:function(a){var u=new U.dA()
u.a=a
return u},
mj:function(a,b,c){var u,t=new U.e3()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.sen(0)
t.se2(0,0)
t.se9(0)
u=t.d
if(!(Math.abs(u-c)<$.K().a)){t.d=c
u=new D.M("deltaYaw",u,c,[P.v])
u.b=!0
t.R(u)}u=t.e
if(!(Math.abs(u-a)<$.K().a)){t.e=a
u=new D.M("deltaPitch",u,a,[P.v])
u.b=!0
t.R(u)}u=t.f
if(!(Math.abs(u-b)<$.K().a)){t.f=b
u=new D.M("deltaRoll",u,b,[P.v])
u.b=!0
t.R(u)}return t},
mv:function(a,b){var u,t,s,r=new U.em(),q=U.lW()
q.sem(0,!0)
q.sdR(6.283185307179586)
q.sdT(0)
q.sa1(0,0)
q.sdS(100)
q.sZ(0)
q.sdn(0.5)
r.b=q
u=r.gbe()
q.gv().h(0,u)
q=U.lW()
q.sem(0,!0)
q.sdR(6.283185307179586)
q.sdT(0)
q.sa1(0,0)
q.sdS(100)
q.sZ(0)
q.sdn(0.5)
r.c=q
q.gv().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bF(a,!1,!1)
s=r.d
r.d=t
q=new D.M("modifiers",s,t,[X.bF])
q.b=!0
r.R(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.M("invertX",q,!1,[P.S])
q.b=!0
r.R(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.M("invertY",q,!1,[P.S])
q.b=!0
r.R(q)}r.i6(b)
return r},
fD:function fD(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){this.b=this.a=null},
cB:function cB(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
al:function al(){},
e3:function e3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
em:function em(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dF:function dF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
o1:function(a,b){var u=a.aE,t=new A.hv(b,u)
t.eF(b,u)
t.eC(a,b)
return t},
o2:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gan(a0)+a1.gan(a1)+a2.gan(a2)+a3.gan(a3)+a4.gan(a4)+a5.gan(a5)+a6.gan(a6)+a7.gan(a7)+a8.gan(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.u)(a9),++t)f+="_"+H.i(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.u)(b0),++t)f+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.u)(b1),++t)f+="_"+H.i(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.br()
if(l){u=$.bq()
g=new Z.bm(g.a|u.a)}if(k){u=$.bp()
g=new Z.bm(g.a|u.a)}if(j){u=$.bs()
g=new Z.bm(g.a|u.a)}if(i){u=$.bo()
g=new Z.bm(g.a|u.a)}return new A.hy(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
ku:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kv:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.ku(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.l_(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
p5:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.ku(b,t,"emission")
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
p2:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kv(b,t,"ambient")
b.a+="\n"},
p3:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kv(b,t,"diffuse")
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
p6:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kv(b,t,"invDiffuse")
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
pc:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kv(b,t,"specular")
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
p8:function(a,b){var u,t,s
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
pa:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.ku(b,t,"reflect")
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
pb:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.ku(b,t,"refract")
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
p4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.l_(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ah()
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
r=[P.f]
o=H.d([],r)
n=a.b
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(m,"diffuse(norm, lit.viewDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(m,"specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.m(m," + ")+");\n"}else c.a+="   highLight = "+C.a.m(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.m(o," + ")+");\n"
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
p9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.l_(t)
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
if(typeof u!=="number")return u.ah()
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
c.a=r+"\n"}r=[P.f]
l=H.d([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.m(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.d([],r)
o=a.b
if(o.a||o.b||!1)C.a.h(l,"ambientColor")
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
if(r.a||r.b||!1)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.m(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.m(l," + ")+");\n"
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
pd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.l_(t)
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
if(typeof u!=="number")return u.ah()
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
c.a=u+"\n"}u=[P.f]
j=H.d([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.m(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.d([],u)
r=a.b
if(r.a||r.b||!1)C.a.h(j,"ambientColor")
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
if(u.a||u.b||!1)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.m(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.m(j," + ")+");\n"
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
p7:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.f])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
pe:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a6("")
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
A.p5(a,j)
A.p2(a,j)
A.p3(a,j)
A.p6(a,j)
A.pc(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.pa(a,j)
A.pb(a,j)}A.p8(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p4(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p9(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pd(a,q[o],j)
A.p7(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.f])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(n,"lightAccum")
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.m(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pf:function(a,b){var u,t,s
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
ph:function(a,b){var u
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
pg:function(a,b){var u
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
pj:function(a,b){var u,t
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
pk:function(a,b){var u,t
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
pi:function(a,b){var u
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
pl:function(a,b){var u
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
l_:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.a9(a,1)},
lk:function(a,b,c,d,e){var u=new A.iW(a,c,e)
u.f=d
u.shX(P.o_(d,0,P.l))
return u},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(a){this.a=a},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a,b){var _=this
_.js=_.dt=_.ds=_.dr=_.aE=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jA=_.jz=_.jy=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.jx=_.dH=_.dG=_.jw=_.dF=_.dE=_.dD=_.jv=_.dC=_.dB=_.dA=_.ju=_.dz=_.dw=_.jt=_.dv=_.du=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aM:function aM(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
hy:function hy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aE=b3
_.dr=b4},
c6:function c6(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c7:function c7(a,b,c,d,e,f,g,h,i,j){var _=this
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
c9:function c9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cS:function cS(){},
eh:function eh(){},
j0:function j0(a){this.a=a},
aH:function aH(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){this.a=a
this.c=b
this.d=c},
j_:function j_(a,b,c){this.a=a
this.c=b
this.d=c},
iW:function iW(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
d0:function d0(a,b,c){this.a=a
this.c=b
this.d=c},
j1:function j1(a,b,c){this.a=a
this.c=b
this.d=c},
d1:function d1(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lD:function(a,b,c,d){var u=F.li()
F.di(u,b,c,d,a,1,0,0,1)
F.di(u,b,c,d,a,0,1,0,3)
F.di(u,b,c,d,a,0,0,1,2)
F.di(u,b,c,d,a,-1,0,0,0)
F.di(u,b,c,d,a,0,-1,0,0)
F.di(u,b,c,d,a,0,0,-1,3)
u.au()
return u},
kp:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
di:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.J(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.J(u+a3,t+a1,s+a2)
q=new V.J(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.J(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.kp(i)
l=F.kp(j.b)
k=F.lK(d,a0,new F.ko(j,F.kp(j.c),F.kp(j.d),l,m,c),b)
if(k!=null)a.b7(k)},
mY:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.li()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.av])
q=u.a
p=new V.J(0,0,t)
p=p.t(0,Math.sqrt(p.D(p)))
C.a.h(r,q.i2(new V.bK(a,-1,-1,-1),new V.b0(1,1,1,1),new V.a5(0,0,c),new V.J(0,0,t),new V.ab(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.F(k)
j=new V.J(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.en(new V.bK(a,-1,-1,-1),null,new V.b0(i,g,h,1),new V.a5(m*k,l*k,c),new V.J(0,0,t),new V.ab(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.i0(r)
return u},
mW:function(a,b,c){return F.pz(!0,a,1,new F.kA(1,c),b)},
pz:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.lK(c,e,new F.kC(d),null)
if(u==null)return
u.au()
u.bX()
if(b)u.b7(F.mY(3,!1,1,new F.kD(d),e))
u.b7(F.mY(1,!0,-1,new F.kE(d),e))
return u},
pV:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kY()
t=F.lD(a,null,new F.kZ(s,1),b)
t.bX()
return t},
nb:function(){return F.mX(15,30,0.5,1,new F.l0())},
pN:function(){return F.mX(12,120,0.3,1,new F.kM(3,2))},
mX:function(a,b,c,d,e){var u=F.lK(a,b,new F.kB(e,d,b,c),null)
if(u==null)return
u.au()
u.bX()
return u},
lK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.li()
t=H.d([],[F.av])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.en(g,g,new V.b0(p,0,0,1),g,g,new V.ab(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c4(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.en(g,g,new V.b0(j,i,h,1),g,g,new V.ab(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c4(d))}}u.d.i1(a+1,b+1,t)
return u},
cy:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.A(P.B("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.B("May not create a face with vertices attached to different shapes."))
u.bV(a)
u.bW(b)
u.hE(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
nW:function(a,b){var u=new F.bl(),t=a.a
if(t==null)H.A(P.B("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.A(P.B("May not create a line with vertices attached to different shapes."))
u.bV(a)
u.bW(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a_()
return u},
li:function(){var u=new F.e5(),t=new F.ji(u)
t.b=!1
t.shY(H.d([],[F.av]))
u.a=t
t=new F.ik(u)
t.sbN(H.d([],[F.bI]))
u.b=t
t=new F.ij(u)
t.sfg(H.d([],[F.bl]))
u.c=t
t=new F.ii(u)
t.sfa(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
en:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.av(),r=new F.jq()
r.sbN(H.d([],[F.bI]))
s.b=r
r=new F.jm()
u=[F.bl]
r.sfh(H.d([],u))
r.sfi(H.d([],u))
s.c=r
r=new F.jj()
u=[F.a8]
r.sfb(H.d([],u))
r.sfc(H.d([],u))
r.sfd(H.d([],u))
s.d=r
h=$.np()
s.e=0
r=$.br()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bq().a)!==0?e:t
s.x=(u&$.bp().a)!==0?b:t
s.y=(u&$.bs().a)!==0?f:t
s.z=(u&$.bQ().a)!==0?g:t
s.Q=(u&$.nq().a)!==0?c:t
s.ch=(u&$.cp().a)!==0?i:0
s.cx=(u&$.bo().a)!==0?a:t
return s},
ko:function ko(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kA:function kA(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kY:function kY(){},
kZ:function kZ(a,b){this.a=a
this.b=b},
l0:function l0(){},
kM:function kM(a,b){this.a=a
this.b=b},
kB:function kB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(){},
iq:function iq(){},
bl:function bl(){this.b=this.a=null},
hi:function hi(){},
iV:function iV(){},
bI:function bI(){this.a=null},
e5:function e5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a){this.a=a
this.b=null},
ij:function ij(a){this.a=a
this.b=null},
ik:function ik(a){this.a=a
this.b=null},
av:function av(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
js:function js(a){this.a=a},
jr:function jr(a){this.a=a},
ji:function ji(a){this.a=a
this.c=this.b=null},
jj:function jj(){this.d=this.c=this.b=null},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(){this.c=this.b=null},
jo:function jo(){},
jn:function jn(){},
jp:function jp(){},
hW:function hW(){},
jq:function jq(){this.b=null}},T={cY:function cY(){},ed:function ed(){},iH:function iH(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iI:function iI(a){var _=this
_.a=a
_.e=_.d=_.b=null},iJ:function iJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},K={
n4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.ol("Test 026"),a=W.l7()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.f]
b.dh(H.d(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture metrix is updated using the pre-update mathods. ","Use Ctrl plus the mouse to move the center object."],u))
b.hZ(H.d(["shapes"],u))
b.dh(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.A(P.B("Failed to find an element with the identifier, testCanvas."))
s=E.op(t,!0,!0,!0,!1)
r=D.lX()
r.sad(U.dB(V.m7(0.3,0.4,1,c)))
q=D.lX()
q.sad(U.dB(V.m7(-0.3,-0.4,-1,c)))
q.sal(0,new V.a3(0.125,0.125,0.125))
p=new O.dS()
p.seX(O.l8(V.ak))
p.e.bc(p.gfC(),p.gfE())
o=new O.b7(p,"emission")
o.c=new A.aj(!1,!1,!1)
o.f=new V.a3(0,0,0)
p.f=o
o=new O.b7(p,"ambient")
o.c=new A.aj(!1,!1,!1)
o.f=new V.a3(0,0,0)
p.r=o
o=new O.b7(p,"diffuse")
o.c=new A.aj(!1,!1,!1)
o.f=new V.a3(0,0,0)
p.x=o
o=new O.b7(p,"invDiffuse")
o.c=new A.aj(!1,!1,!1)
o.f=new V.a3(0,0,0)
p.y=o
o=new O.hB(p,"specular")
o.c=new A.aj(!1,!1,!1)
o.f=new V.a3(0,0,0)
o.ch=100
p.z=o
o=new O.hx(p,"bump")
o.c=new A.aj(!1,!1,!1)
p.Q=o
p.ch=null
o=new O.b7(p,"reflect")
o.c=new A.aj(!1,!1,!1)
o.f=new V.a3(0,0,0)
p.cx=o
o=new O.hA(p,"refract")
o.c=new A.aj(!1,!1,!1)
o.f=new V.a3(0,0,0)
o.ch=1
p.cy=o
o=new O.hw(p,"alpha")
o.c=new A.aj(!1,!1,!1)
o.f=1
p.db=o
o=new D.dN()
o.bz(D.ad)
o.sf7(H.d([],[D.by]))
o.shm(H.d([],[D.e_]))
o.shL(H.d([],[D.e7]))
o.y=o.x=null
o.cv(o.gfA(),o.gha(),o.ghe())
p.dx=o
n=new O.hz()
n.b=new V.b0(0,0,0,0)
n.c=1
n.d=10
n.e=!1
p.dy=n
n=o.x
o=n==null?o.x=D.a_():n
o.h(0,p.ghx())
o=p.dx
n=o.y
o=n==null?o.y=D.a_():n
o.h(0,p.gbh())
p.fr=null
p.dx.h(0,r)
p.dx.h(0,q)
p.f.sal(0,new V.a3(0,0,0))
o=p.r
o.sal(0,new V.a3(0.1,0.1,0.1))
o=p.x
o.sal(0,new V.a3(0.8,0.8,0.8))
o=p.z
o.sal(0,new V.a3(0.2,0.2,0.2))
o=p.z
o.bS(new A.aj(!0,o.c.b,!1))
o.d8(100)
o=p.x
n=s.f.iN("../resources/Test.png",!0)
m=o.c
if(!m.b)o.bS(new A.aj(m.a,!0,!1))
m=o.d
if(m!==n){if(m!=null)m.gv().K(0,o.gbh())
l=o.d
o.d=n
n.gv().h(0,o.gbh())
n=new D.M(o.b+".texture2D",l,o.d,[T.ed])
n.b=!0
o.a.Y(n)}k=E.m1()
k.sad(U.mv(!0,s.r))
k.sai(0,F.nb())
j=E.m1()
j.sad(U.dB(V.b8(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
o=F.lD(1,c,c,1)
o.cb()
j.sai(0,o)
i=new U.cB()
i.bz(U.al)
i.bc(i.gfw(),i.ghc())
i.e=null
i.f=V.dT()
i.r=0
i.h(0,U.mv(!1,s.r))
i.h(0,U.dB(V.lh(3.141592653589793)))
i.h(0,U.dB(V.b8(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=U.mj(0.5,0.7,0.3)
g=U.mj(0,0.1,0)
o=new M.dF()
o.a=!0
o.sf_(0,O.l8(E.ap))
o.e.bc(o.gfI(),o.gfK())
o.y=o.x=o.r=o.f=null
f=X.nQ(c)
e=new X.dZ()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.sad(c)
n=e.c
if(!(Math.abs(n-1.0471975511965976)<$.K().a)){e.c=1.0471975511965976
n=new D.M("fov",n,1.0471975511965976,[P.v])
n.b=!0
e.aO(n)}n=e.d
if(!(Math.abs(n-0.1)<$.K().a)){e.d=0.1
n=new D.M("near",n,0.1,[P.v])
n.b=!0
e.aO(n)}n=e.e
if(!(Math.abs(n-2000)<$.K().a)){e.e=2000
n=new D.M("far",n,2000,[P.v])
n.b=!0
e.aO(n)}n=o.b
if(n!==e){if(n!=null)n.gv().K(0,o.gaq())
l=o.b
o.b=e
e.gv().h(0,o.gaq())
n=new D.M("camera",l,o.b,[X.dz])
n.b=!0
o.az(n)}n=o.c
if(n!==f){if(n!=null)n.gv().K(0,o.gaq())
l=o.c
o.c=f
f.gv().h(0,o.gaq())
n=new D.M("target",l,o.c,[X.eb])
n.b=!0
o.az(n)}o.sec(c)
o.sec(p)
o.e.h(0,k)
o.e.h(0,j)
o.b.sad(i)
n=o.f
if(n==null)n=o.f=D.a_()
n.h(0,new K.kN(p,h,g))
n=s.d
if(n!==o){if(n!=null)n.gv().K(0,s.gcC())
s.d=o
o.gv().h(0,s.gcC())
s.cD()}o=new V.i5("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.A("Failed to find shapes for RadioGroup")
o.b1(0,"Cube",new K.kO(k))
o.b1(0,"Cylinder",new K.kP(k))
o.b1(0,"Cone",new K.kQ(k))
o.b1(0,"Sphere",new K.kR(k))
o.df(0,"Toroid",new K.kS(k),!0)
o.b1(0,"Knot",new K.kT(k))
u=s.z
if(u==null)u=s.z=D.a_()
o={func:1,ret:-1,args:[D.C]}
n=H.o(new K.kU(b,p),o)
if(u.b==null)u.saQ(H.d([],[o]))
u=u.b;(u&&C.a).h(u,n)
V.pU(s)},
kN:function kN(a,b,c){this.a=a
this.b=b
this.c=c},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ld.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.cP(a)},
i:function(a){return"Instance of '"+H.i(H.cQ(a))+"'"}}
J.hd.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iS:1}
J.dK.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dL.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.i0.prototype={}
J.ca.prototype={}
J.bE.prototype={
i:function(a){var u=a[$.nd()]
if(u==null)return this.ey(a)
return"JavaScript function for "+H.i(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibB:1}
J.b4.prototype={
h:function(a,b){H.D(b,H.q(a,0))
if(!!a.fixed$length)H.A(P.I("add"))
a.push(b)},
e6:function(a,b){if(!!a.fixed$length)H.A(P.I("removeAt"))
if(b<0||b>=a.length)throw H.e(P.e1(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.A(P.I("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.bi(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iL:function(a){return this.m(a,"")},
iD:function(a,b,c,d){var u,t,s
H.D(b,d)
H.o(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.bi(a))}return t},
iC:function(a,b){var u,t,s
H.o(b,{func:1,ret:P.S,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.H(b.$1(s)))return s
if(a.length!==u)throw H.e(P.bi(a))}throw H.e(H.hc())},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ev:function(a,b,c){if(b<0||b>a.length)throw H.e(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.q(a,0)])
return H.d(a.slice(b,c),[H.q(a,0)])},
giB:function(a){if(a.length>0)return a[0]
throw H.e(H.hc())},
gav:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.hc())},
di:function(a,b){var u,t
H.o(b,{func:1,ret:P.S,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.H(b.$1(a[t])))return!0
if(a.length!==u)throw H.e(P.bi(a))}return!1},
bx:function(a,b){var u=H.q(a,0)
H.o(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.A(P.I("sort"))
H.e6(a,0,a.length-1,b,u)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
i:function(a){return P.la(a,"[","]")},
gV:function(a){return new J.ax(a,a.length,[H.q(a,0)])},
gG:function(a){return H.cP(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.A(P.I("set length"))
if(b<0)throw H.e(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.ci(a,b))
return a[b]},
k:function(a,b,c){H.D(c,H.q(a,0))
if(!!a.immutable$list)H.A(P.I("indexed set"))
if(b>=a.length||b<0)throw H.e(H.ci(a,b))
a[b]=c},
$ik:1,
$ib:1}
J.lc.prototype={}
J.ax.prototype={
gJ:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.u(s))
u=t.c
if(u>=r){t.scU(null)
return!1}t.scU(s[u]);++t.c
return!0},
scU:function(a){this.d=H.D(a,H.q(this,0))},
$ib3:1}
J.cE.prototype={
ih:function(a,b){var u
H.n5(b)
if(typeof b!=="number")throw H.e(H.aZ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbo(b)
if(this.gbo(a)===u)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
jh:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.I(""+a+".toInt()"))},
cc:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.I(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.I(""+a+".round()"))},
ef:function(a,b){var u
if(b>20)throw H.e(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+u
return u},
ba:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.A(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.A("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bb:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.da(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.da(a,b)},
da:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.I("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.d9(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hJ:function(a,b){if(b<0)throw H.e(H.aZ(b))
return this.d9(a,b)},
d9:function(a,b){return b>31?0:a>>>b},
$iv:1,
$iaa:1}
J.dJ.prototype={$il:1}
J.dI.prototype={}
J.bD.prototype={
W:function(a,b){if(b<0)throw H.e(H.ci(a,b))
if(b>=a.length)H.A(H.ci(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.e(H.ci(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.e(P.l5(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
c=P.bL(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a6:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a6(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.A(H.aZ(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.e(P.e1(b,null))
if(b>c)throw H.e(P.e1(b,null))
if(c>a.length)throw H.e(P.e1(c,null))
return a.substring(b,c)},
a9:function(a,b){return this.q(a,b,null)},
jk:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ae:function(a,b){var u=b-a.length
if(u<=0)return a
return this.A(" ",u)+a},
bn:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dO:function(a,b){return this.bn(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$ima:1,
$if:1}
H.r.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$ad2:function(){return[P.l]},
$ay:function(){return[P.l]},
$ak:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fT.prototype={}
H.c_.prototype={
gV:function(a){var u=this
return new H.cF(u,u.gn(u),[H.ar(u,"c_",0)])},
bv:function(a,b){return this.ex(0,H.o(b,{func:1,ret:P.S,args:[H.ar(this,"c_",0)]}))}}
H.cF.prototype={
gJ:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.dl(s),q=r.gn(s)
if(t.b!==q)throw H.e(P.bi(s))
u=t.c
if(u>=q){t.saY(null)
return!1}t.saY(r.H(s,u));++t.c
return!0},
saY:function(a){this.d=H.D(a,H.q(this,0))},
$ib3:1}
H.hs.prototype={
gV:function(a){return new H.ht(J.bt(this.a),this.b,this.$ti)},
gn:function(a){return J.aC(this.a)},
H:function(a,b){return this.b.$1(J.fo(this.a,b))},
$ak:function(a,b){return[b]}}
H.ht.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.saY(u.c.$1(t.gJ(t)))
return!0}u.saY(null)
return!1},
gJ:function(a){return this.a},
saY:function(a){this.a=H.D(a,H.q(this,1))},
$ab3:function(a,b){return[b]}}
H.hu.prototype={
gn:function(a){return J.aC(this.a)},
H:function(a,b){return this.b.$1(J.fo(this.a,b))},
$ac_:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.d4.prototype={
gV:function(a){return new H.jv(J.bt(this.a),this.b,this.$ti)}}
H.jv.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(H.H(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.bW.prototype={}
H.d2.prototype={
k:function(a,b,c){H.D(c,H.ar(this,"d2",0))
throw H.e(P.I("Cannot modify an unmodifiable list"))}}
H.ej.prototype={}
H.fF.prototype={
i:function(a){return P.lg(this)},
k:function(a,b,c){H.D(b,H.q(this,0))
H.D(c,H.q(this,1))
return H.nL()},
$iz:1}
H.fG.prototype={
gn:function(a){return this.a},
bl:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bl(0,b))return
return this.cV(b)},
cV:function(a){return this.b[H.N(a)]},
F:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.o(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.D(q.cV(r),p))}}}
H.iS.prototype={
ac:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hX.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hf.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.j4.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l1.prototype={
$1:function(a){if(!!J.T(a).$ibA)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eX.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iau:1}
H.cu.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibB:1,
gjm:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iE.prototype={}
H.iu.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.co(u)+"'"}}
H.cr.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cr))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cP(this.a)
else u=typeof t!=="object"?J.dr(t):H.cP(t)
return(u^H.cP(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cQ(u))+"'")}}
H.iU.prototype={
i:function(a){return this.a}}
H.fB.prototype={
i:function(a){return this.a}}
H.ie.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jw.prototype={
i:function(a){return"Assertion failed: "+P.dG(this.a)}}
H.a1.prototype={
gn:function(a){return this.a},
giK:function(a){return this.a===0},
ga4:function(a){return new H.hk(this,[H.q(this,0)])},
bl:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cR(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cR(t,b)}else return s.iH(b)},
iH:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cf(u.bG(t,u.ce(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bf(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bf(r,b)
s=t==null?null:t.b
return s}else return q.iI(b)},
iI:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bG(r,s.ce(a))
t=s.cf(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.D(b,H.q(s,0))
H.D(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.cI(u==null?s.b=s.bK():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cI(t==null?s.c=s.bK():t,b,c)}else s.iJ(b,c)},
iJ:function(a,b){var u,t,s,r,q=this
H.D(a,H.q(q,0))
H.D(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bK()
t=q.ce(a)
s=q.bG(u,t)
if(s==null)q.bT(u,t,[q.bL(a,b)])
else{r=q.cf(s,a)
if(r>=0)s[r].b=b
else s.push(q.bL(a,b))}},
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.bi(s))
u=u.c}},
cI:function(a,b,c){var u,t=this
H.D(b,H.q(t,0))
H.D(c,H.q(t,1))
u=t.bf(a,b)
if(u==null)t.bT(a,b,t.bL(b,c))
else u.b=c},
fo:function(){this.r=this.r+1&67108863},
bL:function(a,b){var u,t=this,s=new H.hj(H.D(a,H.q(t,0)),H.D(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fo()
return s},
ce:function(a){return J.dr(a)&0x3ffffff},
cf:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
i:function(a){return P.lg(this)},
bf:function(a,b){return a[b]},
bG:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
f5:function(a,b){delete a[b]},
cR:function(a,b){return this.bf(a,b)!=null},
bK:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bT(t,u,t)
this.f5(t,u)
return t}}
H.hj.prototype={}
H.hk.prototype={
gn:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hl(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hl.prototype={
gJ:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bi(t))
else{t=u.c
if(t==null){u.scH(null)
return!1}else{u.scH(t.a)
u.c=u.c.c
return!0}}},
scH:function(a){this.d=H.D(a,H.q(this,0))},
$ib3:1}
H.kI.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kJ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kK.prototype={
$1:function(a){return this.a(H.N(a))},
$S:53}
H.he.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ima:1,
$ioh:1}
H.cK.prototype={$icK:1}
H.bH.prototype={$ibH:1,$ior:1}
H.dU.prototype={
gn:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cL.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pB(c)
H.bg(b,a,a.length)
a[b]=c},
$abW:function(){return[P.v]},
$ay:function(){return[P.v]},
$ik:1,
$ak:function(){return[P.v]},
$ib:1,
$ab:function(){return[P.v]}}
H.dV.prototype={
k:function(a,b,c){H.ac(c)
H.bg(b,a,a.length)
a[b]=c},
$abW:function(){return[P.l]},
$ay:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hP.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hS.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hT.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.dW.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$iqk:1}
H.cM.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$icM:1,
$iR:1}
H.d9.prototype={}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
P.jy.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jx.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jz.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jA.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f2.prototype={
eP:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ch(new P.ke(this,b),0),a)
else throw H.e(P.I("`setTimeout()` not found."))},
eQ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ch(new P.kd(this,a,Date.now(),b),0),a)
else throw H.e(P.I("Periodic timer."))},
$ibb:1}
P.ke.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kd.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eB(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bf.prototype={
iO:function(a){if((this.c&15)!==6)return!0
return this.b.b.cq(H.o(this.d,{func:1,ret:P.S,args:[P.V]}),a.a,P.S,P.V)},
iF:function(a){var u=this.e,t=P.V,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.fl(u,{func:1,args:[P.V,P.au]}))return H.lE(r.jc(u,a.a,a.b,null,t,P.au),s)
else return H.lE(r.cq(H.o(u,{func:1,args:[P.V]}),a.a,null,t),s)}}
P.aJ.prototype={
ee:function(a,b,c){var u,t,s,r=H.q(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a0
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pn(b,u)}t=new P.aJ($.a0,[c])
s=b==null?1:3
this.cJ(new P.bf(t,s,a,b,[r,c]))
return t},
jg:function(a,b){return this.ee(a,null,b)},
cJ:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibf")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaJ")
s=u.a
if(s<4){u.cJ(a)
return}t.a=s
t.c=u.c}P.ky(null,null,t.b,H.o(new P.jJ(t,a),{func:1,ret:-1}))}},
d4:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibf")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaJ")
u=q.a
if(u<4){q.d4(a)
return}p.a=u
p.c=q.c}o.a=p.bi(a)
P.ky(null,null,p.b,H.o(new P.jN(o,p),{func:1,ret:-1}))}},
bP:function(){var u=H.h(this.c,"$ibf")
this.c=null
return this.bi(u)},
bi:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cN:function(a){var u,t,s=this,r=H.q(s,0)
H.lE(a,{futureOr:1,type:r})
u=s.$ti
if(H.lA(a,"$icA",u,"$acA"))if(H.lA(a,"$iaJ",u,null))P.mB(a,s)
else P.oE(a,s)
else{t=s.bP()
H.D(a,r)
s.a=4
s.c=a
P.d7(s,t)}},
cO:function(a,b){var u,t=this
H.h(b,"$iau")
u=t.bP()
t.a=8
t.c=new P.ao(a,b)
P.d7(t,u)},
$icA:1}
P.jJ.prototype={
$0:function(){P.d7(this.a,this.b)},
$S:0}
P.jN.prototype={
$0:function(){P.d7(this.b,this.a.a)},
$S:0}
P.jK.prototype={
$1:function(a){var u=this.a
u.a=0
u.cN(a)},
$S:17}
P.jL.prototype={
$2:function(a,b){H.h(b,"$iau")
this.a.cO(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jM.prototype={
$0:function(){this.a.cO(this.b,this.c)},
$S:0}
P.jQ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ea(H.o(s.d,{func:1}),null)}catch(r){u=H.ai(r)
t=H.cm(r)
if(o.d){s=H.h(o.a.a.c,"$iao").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$iao")
else q.b=new P.ao(u,t)
q.a=!0
return}if(!!J.T(n).$icA){if(n instanceof P.aJ&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$iao")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jg(new P.jR(p),null)
s.a=!1}},
$S:3}
P.jR.prototype={
$1:function(a){return this.a},
$S:46}
P.jP.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.D(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cq(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ai(o)
t=H.cm(o)
s=n.a
s.b=new P.ao(u,t)
s.a=!0}},
$S:3}
P.jO.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$iao")
r=m.c
if(H.H(r.iO(u))&&r.e!=null){q=m.b
q.b=r.iF(u)
q.a=!1}}catch(p){t=H.ai(p)
s=H.cm(p)
r=H.h(m.a.a.c,"$iao")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ao(t,s)
n.a=!0}},
$S:3}
P.ep.prototype={}
P.ix.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aJ($.a0,[P.l])
r.a=0
u=H.q(s,0)
t=H.o(new P.iz(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.iA(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.iz.prototype={
$1:function(a){H.D(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.q(this.b,0)]}}}
P.iA.prototype={
$0:function(){this.b.cN(this.a.a)},
$S:0}
P.cV.prototype={}
P.iy.prototype={}
P.bb.prototype={}
P.ao.prototype={
i:function(a){return H.i(this.a)},
$ibA:1}
P.kn.prototype={$iqz:1}
P.kx.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dY():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jX.prototype={
jd:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.a0){a.$0()
return}P.mM(r,r,this,a,-1)}catch(s){u=H.ai(s)
t=H.cm(s)
P.kw(r,r,this,u,H.h(t,"$iau"))}},
je:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.f===$.a0){a.$1(b)
return}P.mN(r,r,this,a,b,-1,c)}catch(s){u=H.ai(s)
t=H.cm(s)
P.kw(r,r,this,u,H.h(t,"$iau"))}},
ib:function(a,b){return new P.jZ(this,H.o(a,{func:1,ret:b}),b)},
bZ:function(a){return new P.jY(this,H.o(a,{func:1,ret:-1}))},
dk:function(a,b){return new P.k_(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
ea:function(a,b){H.o(a,{func:1,ret:b})
if($.a0===C.f)return a.$0()
return P.mM(null,null,this,a,b)},
cq:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.a0===C.f)return a.$1(b)
return P.mN(null,null,this,a,b,c,d)},
jc:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.a0===C.f)return a.$2(b,c)
return P.po(null,null,this,a,b,c,d,e,f)}}
P.jZ.prototype={
$0:function(){return this.a.ea(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jY.prototype={
$0:function(){return this.a.jd(this.b)},
$S:3}
P.k_.prototype={
$1:function(a){var u=this.c
return this.a.je(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jV.prototype={
gV:function(a){var u=this,t=new P.eE(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$icb")!=null}else{t=this.f0(b)
return t}},
f0:function(a){var u=this.d
if(u==null)return!1
return this.bE(this.cW(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.D(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cK(u==null?s.b=P.lq():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cK(t==null?s.c=P.lq():t,b)}else return s.eS(0,b)},
eS:function(a,b){var u,t,s,r=this
H.D(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.lq()
t=r.cP(b)
s=u[t]
if(s==null)u[t]=[r.bB(b)]
else{if(r.bE(s,b)>=0)return!1
s.push(r.bB(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hs(this.c,b)
else return this.hr(0,b)},
hr:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cW(r,b)
t=s.bE(u,b)
if(t<0)return!1
s.dc(u.splice(t,1)[0])
return!0},
cK:function(a,b){H.D(b,H.q(this,0))
if(H.h(a[b],"$icb")!=null)return!1
a[b]=this.bB(b)
return!0},
hs:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$icb")
if(u==null)return!1
this.dc(u)
delete a[b]
return!0},
cM:function(){this.r=1073741823&this.r+1},
bB:function(a){var u,t=this,s=new P.cb(H.D(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cM()
return s},
dc:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cM()},
cP:function(a){return J.dr(a)&1073741823},
cW:function(a,b){return a[this.cP(b)]},
bE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1}}
P.cb.prototype={}
P.eE.prototype={
gJ:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bi(t))
else{t=u.c
if(t==null){u.scL(null)
return!1}else{u.scL(H.D(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
scL:function(a){this.d=H.D(a,H.q(this,0))},
$ib3:1}
P.hm.prototype={
$2:function(a,b){this.a.k(0,H.D(a,this.b),H.D(b,this.c))},
$S:6}
P.hn.prototype={$ik:1,$ib:1}
P.y.prototype={
gV:function(a){return new H.cF(a,this.gn(a),[H.cl(this,a,"y",0)])},
H:function(a,b){return this.j(a,b)},
jj:function(a,b){var u,t=this,s=H.d([],[H.cl(t,a,"y",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
ji:function(a){return this.jj(a,!0)},
iz:function(a,b,c,d){var u
H.D(d,H.cl(this,a,"y",0))
P.bL(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.la(a,"[","]")}}
P.hp.prototype={}
P.hq.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:6}
P.ae.prototype={
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.cl(s,a,"ae",0),H.cl(s,a,"ae",1)]})
for(u=J.bt(s.ga4(a));u.w();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aC(this.ga4(a))},
i:function(a){return P.lg(a)},
$iz:1}
P.kf.prototype={
k:function(a,b,c){H.D(b,H.q(this,0))
H.D(c,H.q(this,1))
throw H.e(P.I("Cannot modify unmodifiable map"))}}
P.hr.prototype={
j:function(a,b){return J.dq(this.a,b)},
k:function(a,b,c){J.l3(this.a,H.D(b,H.q(this,0)),H.D(c,H.q(this,1)))},
F:function(a,b){J.lO(this.a,H.o(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){return J.aC(this.a)},
i:function(a){return J.as(this.a)},
$iz:1}
P.ek.prototype={}
P.k1.prototype={
as:function(a,b){var u
for(u=J.bt(H.n(b,"$ik",this.$ti,"$ak"));u.w();)this.h(0,u.gJ(u))},
i:function(a){return P.la(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.mg(b,"index")
for(u=P.oI(r,r.r,H.q(r,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.e(P.X(b,r,"index",null,t))},
$ik:1,
$imk:1}
P.eF.prototype={}
P.f8.prototype={}
P.fx.prototype={
iQ:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bL(a0,a1,b.length)
u=$.ns()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kH(C.b.C(b,n))
j=H.kH(C.b.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a6("")
g=r.a+=C.b.q(b,s,t)
r.a=g+H.c2(m)
s=n
continue}}throw H.e(P.a4("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.q(b,s,a1)
f=g.length
if(q>=0)P.lS(b,p,a1,q,o,f)
else{e=C.d.bb(f-1,4)+1
if(e===1)throw H.e(P.a4(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aW(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lS(b,p,a1,q,o,d)
else{e=C.d.bb(d,4)
if(e===1)throw H.e(P.a4(c,b,a1))
if(e>1)b=C.b.aW(b,a1,a1,e===2?"==":"=")}return b},
$abU:function(){return[[P.b,P.l],P.f]}}
P.fy.prototype={
$abx:function(){return[[P.b,P.l],P.f]}}
P.bU.prototype={}
P.bx.prototype={}
P.fV.prototype={
$abU:function(){return[P.f,[P.b,P.l]]}}
P.ha.prototype={
i:function(a){return this.a}}
P.h9.prototype={
f2:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.c(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":o
break
case"'":p=s?"&#39;":o
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":o
break
default:p=o}if(p!=null){if(q==null)q=new P.a6("")
if(r>b)q.a+=C.b.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nD(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abx:function(){return[P.f,P.f]}}
P.jc.prototype={
giy:function(){return C.N}}
P.je.prototype={
c3:function(a){var u,t,s=P.bL(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kl(u)
if(t.fe(a,0,s)!==s)t.de(J.nz(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oZ(0,t.b,u.length)))},
$abx:function(){return[P.f,[P.b,P.l]]}}
P.kl.prototype={
de:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fe:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.de(r,C.b.C(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jd.prototype={
c3:function(a){var u,t,s,r,q,p,o,n,m
H.n(a,"$ib",[P.l],"$ab")
u=P.ou(!1,a,0,null)
if(u!=null)return u
t=P.bL(0,null,J.aC(a))
s=P.mP(a,0,t)
if(s>0){r=P.cW(a,0,s)
if(s===t)return r
q=new P.a6(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a6("")
n=new P.kk(!1,q)
n.c=o
n.ii(a,p,t)
if(n.e>0){H.A(P.a4("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c2(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abx:function(){return[[P.b,P.l],P.f]}}
P.kk.prototype={
ii:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.n(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dl(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ah()
if((o&192)!==128){n=P.a4(h+C.d.ba(o,16),a,p)
throw H.e(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.c(C.w,n)
if(u<=C.w[n]){n=P.a4("Overlong encoding of 0x"+C.d.ba(u,16),a,p-s-1)
throw H.e(n)}if(u>1114111){n=P.a4("Character outside valid Unicode range: 0x"+C.d.ba(u,16),a,p-s-1)
throw H.e(n)}if(!i.c||u!==65279)q.a+=H.c2(u)
i.c=!1}for(n=p<c;n;){m=P.mP(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cW(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.S()
if(o<0){j=P.a4("Negative UTF-8 code unit: -0x"+C.d.ba(-o,16),a,k-1)
throw H.e(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a4(h+C.d.ba(o,16),a,k-1)
throw H.e(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.S.prototype={}
P.ay.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.aS(u,30))&1073741823},
i:function(a){var u=this,t=P.nM(H.od(u)),s=P.dC(H.ob(u)),r=P.dC(H.o7(u)),q=P.dC(H.o8(u)),p=P.dC(H.oa(u)),o=P.dC(H.oc(u)),n=P.nN(H.o9(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.v.prototype={}
P.bz.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bz&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
i:function(a){var u,t,s,r=new P.fS(),q=this.a
if(q<0)return"-"+new P.bz(0-q).i(0)
u=r.$1(C.d.a8(q,6e7)%60)
t=r.$1(C.d.a8(q,1e6)%60)
s=new P.fR().$1(q%1e6)
return""+C.d.a8(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fR.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fS.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bA.prototype={}
P.fr.prototype={
i:function(a){return"Assertion failed"}}
P.dY.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gbD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbC:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbD()+o+u
if(!q.a)return t
s=q.gbC()
r=P.dG(q.b)
return t+s+": "+r}}
P.c3.prototype={
gbD:function(){return"RangeError"},
gbC:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hb.prototype={
gbD:function(){return"RangeError"},
gbC:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.j5.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j2.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cU.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fE.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dG(u)+"."}}
P.i_.prototype={
i:function(a){return"Out of Memory"},
$ibA:1}
P.e8.prototype={
i:function(a){return"Stack Overflow"},
$ibA:1}
P.fL.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ex.prototype={
i:function(a){return"Exception: "+this.a}}
P.h4.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.C(f,q)
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
k=""}j=C.b.q(f,m,n)
return h+l+j+k+"\n"+C.b.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bB.prototype={}
P.l.prototype={}
P.k.prototype={
bv:function(a,b){var u=H.ar(this,"k",0)
return new H.d4(this,H.o(b,{func:1,ret:P.S,args:[u]}),[u])},
gn:function(a){var u,t=this.gV(this)
for(u=0;t.w();)++u
return u},
gaM:function(a){var u,t=this.gV(this)
if(!t.w())throw H.e(H.hc())
u=t.gJ(t)
if(t.w())throw H.e(H.nT())
return u},
H:function(a,b){var u,t,s
P.mg(b,"index")
for(u=this.gV(this),t=0;u.w();){s=u.gJ(u)
if(b===t)return s;++t}throw H.e(P.X(b,this,"index",null,t))},
i:function(a){return P.nS(this,"(",")")}}
P.b3.prototype={}
P.b.prototype={$ik:1}
P.z.prototype={}
P.O.prototype={
gG:function(a){return P.V.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
p:function(a,b){return this===b},
gG:function(a){return H.cP(this)},
i:function(a){return"Instance of '"+H.i(H.cQ(this))+"'"},
toString:function(){return this.i(this)}}
P.au.prototype={}
P.f.prototype={$ima:1}
P.a6.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq8:1}
P.ja.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.n(a,"$iz",[r,r],"$az")
H.N(b)
u=J.dm(b).dO(b,"=")
if(u===-1){if(b!=="")J.l3(a,P.lu(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.q(b,0,u)
s=C.b.a9(b,u+1)
r=this.a
J.l3(a,P.lu(t,0,t.length,r,!0),P.lu(s,0,s.length,r,!0))}return a},
$S:45}
P.j7.prototype={
$2:function(a,b){throw H.e(P.a4("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.j8.prototype={
$2:function(a,b){throw H.e(P.a4("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j9.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fn(C.b.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.cc.prototype={
gel:function(){return this.b},
gcd:function(a){var u=this.c
if(u==null)return""
if(C.b.a3(u,"["))return C.b.q(u,1,u.length-1)
return u},
gbq:function(a){var u=this.d
if(u==null)return P.mF(this.a)
return u},
gcl:function(a){var u=this.f
return u==null?"":u},
gdJ:function(){var u=this.r
return u==null?"":u},
e7:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.n(b,"$iz",[P.f,null],"$az")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a3(p,"/"))p="/"+p
n=P.ls(null,0,0,b)
return new P.cc(u,s,q,r,p,n,m.r)},
gcm:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shq(new P.ek(P.mu(u==null?"":u),[t,t]))}return s.Q},
gdK:function(){return this.c!=null},
gdN:function(){return this.f!=null},
gdL:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.i(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.i(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.i(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$ill)if(s.a==b.gbw())if(s.c!=null===b.gdK())if(s.b==b.gel())if(s.gcd(s)==b.gcd(b))if(s.gbq(s)==b.gbq(b))if(s.e===b.ge1(b)){u=s.f
t=u==null
if(!t===b.gdN()){if(t)u=""
if(u===b.gcl(b)){u=s.r
t=u==null
if(!t===b.gdL()){if(t)u=""
u=u===b.gdJ()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.b.gG(this.i(0)):u},
shq:function(a){var u=P.f
this.Q=H.n(a,"$iz",[u,u],"$az")},
$ill:1,
gbw:function(){return this.a},
ge1:function(a){return this.e}}
P.kg.prototype={
$1:function(a){throw H.e(P.a4("Invalid port",this.a,this.b+1))},
$S:41}
P.kh.prototype={
$1:function(a){return P.f9(C.X,a,C.h,!1)},
$S:22}
P.kj.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.f9(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.f9(C.i,b,C.h,!0))}},
$S:23}
P.ki.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.bt(H.n3(b,"$ik")),t=this.a;u.w();)t.$2(a,H.N(u.gJ(u)))},
$S:40}
P.j6.prototype={
gek:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.b.bn(u,"?",o)
s=u.length
if(t>=0){r=P.dh(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jE("data",p,p,p,P.dh(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kr.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.kq.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.nA(u,0,96,b)
return u},
$S:39}
P.ks.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.C(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.kt.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.C(b,0),t=C.b.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.k4.prototype={
gdK:function(){return this.c>0},
gdM:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
gdN:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
gdL:function(){return this.r<this.a.length},
gcY:function(){return this.b===4&&C.b.a3(this.a,"http")},
gcZ:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbw:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcY())q=t.x="http"
else if(t.gcZ()){t.x="https"
q="https"}else if(q===4&&C.b.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a3(t.a,r)){t.x=r
q=r}else{q=C.b.q(t.a,0,q)
t.x=q}return q},
gel:function(){var u=this.c,t=this.b+3
return u>t?C.b.q(this.a,t,u-1):""},
gcd:function(a){var u=this.c
return u>0?C.b.q(this.a,u,this.d):""},
gbq:function(a){var u,t=this
if(t.gdM()){u=t.d
if(typeof u!=="number")return u.B()
return P.fn(C.b.q(t.a,u+1,t.e),null,null)}if(t.gcY())return 80
if(t.gcZ())return 443
return 0},
ge1:function(a){return C.b.q(this.a,this.e,this.f)},
gcl:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.b.q(this.a,u+1,t):""},
gdJ:function(){var u=this.r,t=this.a
return u<t.length?C.b.a9(t,u+1):""},
gcm:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.Y
t=P.f
return new P.ek(P.mu(u.gcl(u)),[t,t])},
e7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.n(b,"$iz",[P.f,null],"$az")
u=k.gbw()
t=u==="file"
s=k.c
r=s>0?C.b.q(k.a,k.b+3,s):""
q=k.gdM()?k.gbq(k):j
s=k.c
if(s>0)p=C.b.q(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.q(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a3(o,"/"))o="/"+o
m=P.ls(j,0,0,b)
n=k.r
l=n<s.length?C.b.a9(s,n+1):j
return new P.cc(u,r,p,q,o,m,l)},
gG:function(a){var u=this.y
return u==null?this.y=C.b.gG(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ill&&this.a===b.i(0)},
i:function(a){return this.a},
$ill:1}
P.jE.prototype={}
W.x.prototype={}
W.fp.prototype={
gn:function(a){return a.length}}
W.ds.prototype={
i:function(a){return String(a)},
$ids:1}
W.fq.prototype={
i:function(a){return String(a)}}
W.cq.prototype={$icq:1}
W.bS.prototype={$ibS:1}
W.bu.prototype={$ibu:1}
W.bT.prototype={
ct:function(a,b,c){if(c!=null)return a.getContext(b,P.pw(c))
return a.getContext(b)},
ep:function(a,b){return this.ct(a,b,null)},
$ibT:1}
W.ct.prototype={$ict:1}
W.bv.prototype={
gn:function(a){return a.length}}
W.cv.prototype={$icv:1}
W.fH.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cw.prototype={
gn:function(a){return a.length}}
W.fI.prototype={}
W.b1.prototype={}
W.b2.prototype={}
W.fJ.prototype={
gn:function(a){return a.length}}
W.fK.prototype={
gn:function(a){return a.length}}
W.fN.prototype={
gn:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.fO.prototype={
i:function(a){return String(a)}}
W.dD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.n(c,"$iam",[P.aa],"$aam")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.am,P.aa]]},
$ay:function(){return[[P.am,P.aa]]},
$ik:1,
$ak:function(){return[[P.am,P.aa]]},
$ib:1,
$ab:function(){return[[P.am,P.aa]]},
$aG:function(){return[[P.am,P.aa]]}}
W.dE.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaL(a))+" x "+H.i(this.gaF(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iam)return!1
return a.left===u.gbp(b)&&a.top===u.gbs(b)&&this.gaL(a)===u.gaL(b)&&this.gaF(a)===u.gaF(b)},
gG:function(a){return W.mD(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(this.gaL(a)),C.e.gG(this.gaF(a)))},
gdl:function(a){return a.bottom},
gaF:function(a){return a.height},
gbp:function(a){return a.left},
gcp:function(a){return a.right},
gbs:function(a){return a.top},
gaL:function(a){return a.width},
$iam:1,
$aam:function(){return[P.aa]}}
W.fP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.N(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.f]},
$ay:function(){return[P.f]},
$ik:1,
$ak:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
W.fQ.prototype={
gn:function(a){return a.length}}
W.jC.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.h(u[b],"$iU")},
k:function(a,b,c){var u
H.h(c,"$iU")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.ji(this)
return new J.ax(u,u.length,[H.q(u,0)])},
$ay:function(){return[W.U]},
$ak:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
gia:function(a){return new W.jF(a)},
gc2:function(a){return new W.jC(a,a.children)},
gdm:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ab:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.m_
if(u==null){u=H.d([],[W.aA])
t=new W.dX(u)
C.a.h(u,W.mC(null))
C.a.h(u,W.mE())
$.m_=t
d=t}else d=u
u=$.lZ
if(u==null){u=new W.fa(d)
$.lZ=u
c=u}else{u.a=d
c=u}}if($.bj==null){u=document
t=u.implementation.createHTMLDocument("")
$.bj=t
$.l9=t.createRange()
t=$.bj.createElement("base")
H.h(t,"$icq")
t.href=u.baseURI
$.bj.head.appendChild(t)}u=$.bj
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$ibu")}u=$.bj
if(!!this.$ibu)s=u.body
else{s=u.createElement(a.tagName)
$.bj.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.V,a.tagName)){$.l9.selectNodeContents(s)
r=$.l9.createContextualFragment(b)}else{s.innerHTML=b
r=$.bj.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bj.body
if(s==null?u!=null:s!==u)J.lQ(s)
c.cu(r)
document.adoptNode(r)
return r},
il:function(a,b,c){return this.ab(a,b,c,null)},
er:function(a,b){a.textContent=null
a.appendChild(this.ab(a,b,null,null))},
$iU:1,
geb:function(a){return a.tagName}}
W.fU.prototype={
$1:function(a){return!!J.T(H.h(a,"$iE")).$iU},
$S:27}
W.m.prototype={$im:1}
W.j.prototype={
i_:function(a,b,c,d){H.o(c,{func:1,args:[W.m]})
if(c!=null)this.eT(a,b,c,!1)},
eT:function(a,b,c,d){return a.addEventListener(b,H.ch(H.o(c,{func:1,args:[W.m]}),1),!1)},
$ij:1}
W.aE.prototype={$iaE:1}
W.cz.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aE]},
$ay:function(){return[W.aE]},
$ik:1,
$ak:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$icz:1,
$aG:function(){return[W.aE]}}
W.h_.prototype={
gn:function(a){return a.length}}
W.h3.prototype={
gn:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.h8.prototype={
gn:function(a){return a.length}}
W.bX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ay:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibX:1,
$aG:function(){return[W.E]}}
W.bk.prototype={$ibk:1,
gdq:function(a){return a.data}}
W.cC.prototype={$icC:1}
W.cD.prototype={$icD:1}
W.b5.prototype={$ib5:1}
W.dP.prototype={
i:function(a){return String(a)},
$idP:1}
W.hI.prototype={
gn:function(a){return a.length}}
W.cI.prototype={$icI:1}
W.hJ.prototype={
j:function(a,b){return P.bn(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.hK(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iz:1,
$az:function(){return[P.f,null]}}
W.hK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hL.prototype={
j:function(a,b){return P.bn(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.hM(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iz:1,
$az:function(){return[P.f,null]}}
W.hM.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aO.prototype={$iaO:1}
W.hN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaO")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aO]},
$ay:function(){return[W.aO]},
$ik:1,
$ak:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aG:function(){return[W.aO]}}
W.af.prototype={$iaf:1}
W.aq.prototype={
gaM:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.e(P.ml("No elements"))
if(t>1)throw H.e(P.ml("More than one element"))
return u.firstChild},
as:function(a,b){var u,t,s,r
H.n(b,"$ik",[W.E],"$ak")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.h(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dH(u,u.length,[H.cl(C.Z,u,"G",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ay:function(){return[W.E]},
$ak:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
j6:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ja:function(a,b){var u,t
try{u=a.parentNode
J.nx(u,b,a)}catch(t){H.ai(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ew(a):u},
i4:function(a,b){return a.appendChild(H.h(b,"$iE"))},
hv:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ay:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.aP.prototype={$iaP:1,
gn:function(a){return a.length}}
W.i2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaP")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aP]},
$ay:function(){return[W.aP]},
$ik:1,
$ak:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aG:function(){return[W.aP]}}
W.ic.prototype={
j:function(a,b){return P.bn(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.id(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iz:1,
$az:function(){return[P.f,null]}}
W.id.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.ig.prototype={
gn:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.ir.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaR")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ik:1,
$ak:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aG:function(){return[W.aR]}}
W.aS.prototype={$iaS:1}
W.is.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaS")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ik:1,
$ak:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aG:function(){return[W.aS]}}
W.aT.prototype={$iaT:1,
gn:function(a){return a.length}}
W.iv.prototype={
j:function(a,b){return a.getItem(H.N(b))},
k:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.iw(u))
return u},
gn:function(a){return a.length},
$aae:function(){return[P.f,P.f]},
$iz:1,
$az:function(){return[P.f,P.f]}}
W.iw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:23}
W.aF.prototype={$iaF:1}
W.ba.prototype={$iba:1}
W.ea.prototype={
ab:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=W.nO("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aq(t).as(0,new W.aq(u))
return t}}
W.iC.prototype={
ab:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaM(u)
s.toString
u=new W.aq(s)
r=u.gaM(u)
t.toString
r.toString
new W.aq(t).as(0,new W.aq(r))
return t}}
W.iD.prototype={
ab:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaM(u)
t.toString
s.toString
new W.aq(t).as(0,new W.aq(s))
return t}}
W.cX.prototype={$icX:1}
W.aV.prototype={$iaV:1}
W.aG.prototype={$iaG:1}
W.iF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaG")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ik:1,
$ak:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aG:function(){return[W.aG]}}
W.iG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaV")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ik:1,
$ak:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aG:function(){return[W.aV]}}
W.iL.prototype={
gn:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaW")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ik:1,
$ak:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aG:function(){return[W.aW]}}
W.iQ.prototype={
gn:function(a){return a.length}}
W.bM.prototype={}
W.jb.prototype={
i:function(a){return String(a)}}
W.jt.prototype={
gn:function(a){return a.length}}
W.be.prototype={
gip:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.I("deltaY is not supported"))},
gio:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.I("deltaX is not supported"))},
$ibe:1}
W.d5.prototype={
hw:function(a,b){return a.requestAnimationFrame(H.ch(H.o(b,{func:1,ret:-1,args:[P.aa]}),1))},
f8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d6.prototype={$id6:1}
W.jD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iW")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.W]},
$ay:function(){return[W.W]},
$ik:1,
$ak:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aG:function(){return[W.W]}}
W.es.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iam)return!1
return a.left===u.gbp(b)&&a.top===u.gbs(b)&&a.width===u.gaL(b)&&a.height===u.gaF(b)},
gG:function(a){return W.mD(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(a.width),C.e.gG(a.height))},
gaF:function(a){return a.height},
gaL:function(a){return a.width}}
W.jS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaN")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ik:1,
$ak:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aG:function(){return[W.aN]}}
W.eK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ay:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.k5.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaT")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ik:1,
$ak:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aG:function(){return[W.aT]}}
W.k9.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaF")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aF]},
$ay:function(){return[W.aF]},
$ik:1,
$ak:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aG:function(){return[W.aF]}}
W.jB.prototype={
F:function(a,b){var u,t,s,r,q
H.o(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga4(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga4:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=H.h(r[t],"$id6")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aae:function(){return[P.f,P.f]},
$az:function(){return[P.f,P.f]}}
W.jF.prototype={
j:function(a,b){return this.a.getAttribute(H.N(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga4(this).length}}
W.jG.prototype={}
W.lp.prototype={}
W.jH.prototype={}
W.jI.prototype={
$1:function(a){return this.a.$1(H.h(a,"$im"))},
$S:37}
W.bN.prototype={
eJ:function(a){var u
if($.d8.giK($.d8)){for(u=0;u<262;++u)$.d8.k(0,C.U[u],W.pG())
for(u=0;u<12;++u)$.d8.k(0,C.p[u],W.pH())}},
aT:function(a){return $.nt().U(0,W.cx(a))},
at:function(a,b,c){var u=$.d8.j(0,H.i(W.cx(a))+"::"+b)
if(u==null)u=$.d8.j(0,"*::"+b)
if(u==null)return!1
return H.lz(u.$4(a,b,c,this))},
$iaA:1}
W.G.prototype={
gV:function(a){return new W.dH(a,this.gn(a),[H.cl(this,a,"G",0)])}}
W.dX.prototype={
aT:function(a){return C.a.di(this.a,new W.hV(a))},
at:function(a,b,c){return C.a.di(this.a,new W.hU(a,b,c))},
$iaA:1}
W.hV.prototype={
$1:function(a){return H.h(a,"$iaA").aT(this.a)},
$S:29}
W.hU.prototype={
$1:function(a){return H.h(a,"$iaA").at(this.a,this.b,this.c)},
$S:29}
W.eS.prototype={
eO:function(a,b,c,d){var u,t,s
this.a.as(0,c)
u=b.bv(0,new W.k2())
t=b.bv(0,new W.k3())
this.b.as(0,u)
s=this.c
s.as(0,C.x)
s.as(0,t)},
aT:function(a){return this.a.U(0,W.cx(a))},
at:function(a,b,c){var u=this,t=W.cx(a),s=u.c
if(s.U(0,H.i(t)+"::"+b))return u.d.i3(c)
else if(s.U(0,"*::"+b))return u.d.i3(c)
else{s=u.b
if(s.U(0,H.i(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.i(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaA:1}
W.k2.prototype={
$1:function(a){return!C.a.U(C.p,H.N(a))},
$S:30}
W.k3.prototype={
$1:function(a){return C.a.U(C.p,H.N(a))},
$S:30}
W.kb.prototype={
at:function(a,b,c){if(this.eA(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.kc.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.N(a))},
$S:22}
W.ka.prototype={
aT:function(a){var u=J.T(a)
if(!!u.$icR)return!1
u=!!u.$ip
if(u&&W.cx(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.b.a3(b,"on"))return!1
return this.aT(a)},
$iaA:1}
W.dH.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scX(J.dq(u.a,t))
u.c=t
return!0}u.scX(null)
u.c=s
return!1},
gJ:function(a){return this.d},
scX:function(a){this.d=H.D(a,H.q(this,0))},
$ib3:1}
W.aA.prototype={}
W.k0.prototype={$iql:1}
W.fa.prototype={
cu:function(a){new W.km(this).$2(a,null)},
b0:function(a,b){if(b==null)J.lQ(a)
else b.removeChild(a)},
hB:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nB(a)
n=o.a.getAttribute("is")
H.h(a,"$iU")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.H(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ai(r)}t="element unprintable"
try{t=J.as(a)}catch(r){H.ai(r)}try{s=W.cx(a)
this.hA(H.h(a,"$iU"),b,p,t,s,H.h(o,"$iz"),H.N(n))}catch(r){if(H.ai(r) instanceof P.aL)throw r
else{this.b0(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hA:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b0(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aT(a)){o.b0(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.at(a,"is",g)){o.b0(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga4(f)
t=H.d(u.slice(0),[H.q(u,0)])
for(s=f.ga4(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
q=o.a
p=J.nE(r)
H.N(r)
if(!q.at(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$icX)o.cu(a.content)},
$iq5:1}
W.km.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hB(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b0(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ai(s)
r=H.h(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iE")}},
$S:35}
W.er.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eY.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
P.k6.prototype={
dI:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cs:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$ioh)throw H.e(P.j3("structured clone of RegExp"))
if(!!u.$iaE)return a
if(!!u.$ibS)return a
if(!!u.$icz)return a
if(!!u.$ibk)return a
if(!!u.$icK||!!u.$ibH||!!u.$icI)return a
if(!!u.$iz){t=q.dI(a)
s=q.b
if(t>=s.length)return H.c(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.F(a,new P.k8(p,q))
return p.a}if(!!u.$ib){t=q.dI(a)
p=q.b
if(t>=p.length)return H.c(p,t)
r=p[t]
if(r!=null)return r
return q.ik(a,t)}throw H.e(P.j3("structured clone of other type"))},
ik:function(a,b){var u,t=J.dl(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cs(t.j(a,u)))
return r}}
P.k8.prototype={
$2:function(a,b){this.a.a[a]=this.b.cs(b)},
$S:6}
P.f7.prototype={$ibk:1,
gdq:function(a){return this.a}}
P.kz.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.k7.prototype={}
P.h0.prototype={
gbg:function(){var u=this.b,t=H.ar(u,"y",0),s=W.U
return new H.hs(new H.d4(u,H.o(new P.h1(),{func:1,ret:P.S,args:[t]}),[t]),H.o(new P.h2(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iU")
u=this.gbg()
J.nC(u.b.$1(J.fo(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aC(this.gbg().a)},
j:function(a,b){var u=this.gbg()
return u.b.$1(J.fo(u.a,b))},
gV:function(a){var u=P.m4(this.gbg(),!1,W.U)
return new J.ax(u,u.length,[H.q(u,0)])},
$ay:function(){return[W.U]},
$ak:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.h1.prototype={
$1:function(a){return!!J.T(H.h(a,"$iE")).$iU},
$S:27}
P.h2.prototype={
$1:function(a){return H.t(H.h(a,"$iE"),"$iU")},
$S:34}
P.jW.prototype={
gcp:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.F(t)
return H.D(u+t,H.q(this,0))},
gdl:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.F(t)
return H.D(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iam){t=p.a
if(t==u.gbp(b)){s=p.b
if(s==u.gbs(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.F(r)
q=H.q(p,0)
if(H.D(t+r,q)===u.gcp(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.F(t)
u=H.D(s+t,q)===u.gdl(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.dr(s),q=t.b,p=J.dr(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.F(o)
u=H.q(t,0)
o=C.d.gG(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.F(s)
u=C.d.gG(H.D(q+s,u))
return P.oH(P.jU(P.jU(P.jU(P.jU(0,r),p),o),u))}}
P.am.prototype={
gbp:function(a){return this.a},
gbs:function(a){return this.b},
gaL:function(a){return this.c},
gaF:function(a){return this.d}}
P.b6.prototype={$ib6:1}
P.hh.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib6")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b6]},
$ik:1,
$ak:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aG:function(){return[P.b6]}}
P.b9.prototype={$ib9:1}
P.hY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib9")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b9]},
$ik:1,
$ak:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aG:function(){return[P.b9]}}
P.i4.prototype={
gn:function(a){return a.length}}
P.cR.prototype={$icR:1}
P.iB.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.N(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.f]},
$ik:1,
$ak:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
P.p.prototype={
gc2:function(a){return new P.h0(a,new W.aq(a))},
ab:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aA])
C.a.h(p,W.mC(null))
C.a.h(p,W.mE())
C.a.h(p,new W.ka())
c=new W.fa(new W.dX(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).il(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aq(s)
q=p.gaM(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bc.prototype={$ibc:1}
P.iR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibc")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bc]},
$ik:1,
$ak:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aG:function(){return[P.bc]}}
P.eC.prototype={}
P.eD.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eZ.prototype={}
P.f_.prototype={}
P.f5.prototype={}
P.f6.prototype={}
P.R.prototype={$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$ior:1}
P.ft.prototype={
gn:function(a){return a.length}}
P.fu.prototype={
j:function(a,b){return P.bn(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new P.fv(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iz:1,
$az:function(){return[P.f,null]}}
P.fv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fw.prototype={
gn:function(a){return a.length}}
P.bR.prototype={}
P.hZ.prototype={
gn:function(a){return a.length}}
P.eq.prototype={}
P.dv.prototype={$idv:1}
P.e0.prototype={$ie0:1}
P.c4.prototype={
jf:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$ibk)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.px(g))
return}if(!!t.$icC)t=!0
else t=!1
if(t){this.hO(a,b,c,d,e,f,g)
return}throw H.e(P.dt("Incorrect number or type of arguments"))},
hO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a5:function(a,b,c){return a.uniform1f(b,c)},
bu:function(a,b,c){return a.uniform1i(b,c)},
X:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eh:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ei:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ej:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic4:1}
P.e4.prototype={$ie4:1}
P.ec.prototype={$iec:1}
P.ei.prototype={$iei:1}
P.it.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return P.bn(a.item(b))},
k:function(a,b,c){H.h(c,"$iz")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.z,,,]]},
$ik:1,
$ak:function(){return[[P.z,,,]]},
$ib:1,
$ab:function(){return[[P.z,,,]]},
$aG:function(){return[[P.z,,,]]}}
P.eV.prototype={}
P.eW.prototype={}
O.a2.prototype={
bz:function(a){var u=this
u.sfj(H.d([],[a]))
u.sd2(null)
u.sd_(null)
u.sd3(null)},
cv:function(a,b,c){var u=this,t=H.ar(u,"a2",0)
H.o(b,{func:1,ret:P.S,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.l,[P.k,t]]}
H.o(a,t)
H.o(c,t)
u.sd2(b)
u.sd_(a)
u.sd3(c)},
bc:function(a,b){return this.cv(a,null,b)},
h9:function(a){var u
H.n(a,"$ik",[H.ar(this,"a2",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eH:function(a,b){var u
H.n(b,"$ik",[H.ar(this,"a2",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.ax(u,u.length,[H.q(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ar(s,"a2",0)
H.D(b,r)
r=[r]
if(H.H(s.h9(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eH(t,H.d([b],r))}},
sfj:function(a){this.a=H.n(a,"$ib",[H.ar(this,"a2",0)],"$ab")},
sd2:function(a){this.b=H.o(a,{func:1,ret:P.S,args:[[P.k,H.ar(this,"a2",0)]]})},
sd_:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.ar(this,"a2",0)]]})},
sd3:function(a){H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.ar(this,"a2",0)]]})},
$ik:1}
O.cH.prototype={
gn:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.a_():u},
aN:function(){var u=this.b
if(u!=null)u.I(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gav(u)
else return V.dT()},
e4:function(a){var u=this.a
if(a==null)C.a.h(u,V.dT())
else C.a.h(u,a)
this.aN()},
ck:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}},
sbI:function(a){this.a=H.n(a,"$ib",[V.ak],"$ab")}}
E.fz.prototype={}
E.ap.prototype={
sai:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().K(0,s.gdZ())
u=s.c
if(u!=null)u.gv().h(0,s.gdZ())
t=new D.M("shape",r,s.c,[F.e5])
t.b=!0
s.aH(t)}},
sad:function(a){var u,t,s=this
if(!J.P(s.r,a)){u=s.r
if(u!=null)u.gv().K(0,s.gdX())
if(a!=null)a.gv().h(0,s.gdX())
s.r=a
t=new D.M("mover",u,a,[U.al])
t.b=!0
s.aH(t)}},
aK:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ax(0,b,s):null
if(!J.P(q,s.x)){u=s.x
s.x=q
t=new D.M("matrix",u,q,[V.ak])
t.b=!0
s.aH(t)}for(r=s.y.a,r=new J.ax(r,r.length,[H.q(r,0)]);r.w();)r.d.aK(0,b)},
aV:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga2(s))
else C.a.h(s.a,r.A(0,s.ga2(s)))
s.aN()
a.e5(t.f)
s=a.dy
u=(s&&C.a).gav(s)
if(u!=null&&t.d!=null)u.j9(a,t)
for(s=t.y.a,s=new J.ax(s,s.length,[H.q(s,0)]);s.w();)s.d.aV(a)
a.e3()
a.dx.ck()},
aH:function(a){var u=this.z
if(u!=null)u.I(a)},
a_:function(){return this.aH(null)},
e_:function(a){H.h(a,"$iC")
this.e=null
this.aH(a)},
iX:function(){return this.e_(null)},
dY:function(a){this.aH(H.h(a,"$iC"))},
iW:function(){return this.dY(null)},
dW:function(a){this.aH(H.h(a,"$iC"))},
iT:function(){return this.dW(null)},
iS:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ik",[E.ap],"$ak")
for(u=b.length,t=this.gdV(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.saj(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
iV:function(a,b){var u,t
H.n(b,"$ik",[E.ap],"$ak")
for(u=b.gV(b),t=this.gdV();u.w();)u.gJ(u).gv().K(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seI:function(a,b){this.y=H.n(b,"$ia2",[E.ap],"$aa2")},
$icJ:1}
E.i8.prototype={
eD:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cH()
t=[V.ak]
u.sbI(H.d([],t))
u.b=null
u.gv().h(0,new E.i9(s))
s.cy=u
u=new O.cH()
u.sbI(H.d([],t))
u.b=null
u.gv().h(0,new E.ia(s))
s.db=u
u=new O.cH()
u.sbI(H.d([],t))
u.b=null
u.gv().h(0,new E.ib(s))
s.dx=u
s.shN(H.d([],[O.c5]))
u=s.dy;(u&&C.a).h(u,null)
s.shI(new H.a1([P.f,A.cS]))},
gj5:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga2(s)
u=t.db
u=t.z=s.A(0,u.ga2(u))
s=u}return s},
e5:function(a){var u=this.dy,t=a==null?(u&&C.a).gav(u):a;(u&&C.a).h(u,t)},
e3:function(){var u=this.dy
if(u.length>1)u.pop()},
shN:function(a){this.dy=H.n(a,"$ib",[O.c5],"$ab")},
shI:function(a){this.fr=H.n(a,"$iz",[P.f,A.cS],"$az")}}
E.i9.prototype={
$1:function(a){var u
H.h(a,"$iC")
u=this.a
u.ch=u.z=null},
$S:5}
E.ia.prototype={
$1:function(a){var u
H.h(a,"$iC")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.ib.prototype={
$1:function(a){var u
H.h(a,"$iC")
u=this.a
u.cx=u.ch=null},
$S:5}
E.e9.prototype={}
E.ee.prototype={
cE:function(a){H.h(a,"$iC")
this.e8()},
cD:function(){return this.cE(null)},
giE:function(){var u,t=this,s=Date.now(),r=C.d.a8(P.lY(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
d6:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.F(r)
u=C.e.cc(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.e.cc(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mo(C.n,s.gjb())}},
e8:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.iK(this),{func:1,ret:-1,args:[P.aa]})
C.E.f8(u)
C.E.hw(u,W.mS(t,P.aa))}},
j8:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d6()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lY(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aN()
r=s.db
C.a.sn(r.a,0)
r.aN()
r=s.dx
C.a.sn(r.a,0)
r.aN()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aV(p.e)}s=p.z
if(s!=null)s.I(null)}catch(q){u=H.ai(q)
t=H.cm(q)
P.lI("Error: "+H.i(u))
P.lI("Stack: "+H.i(t))
throw H.e(u)}}}
E.iK.prototype={
$1:function(a){var u
H.n5(a)
u=this.a
if(u.ch){u.ch=!1
u.j8()}},
$S:57}
Z.eo.prototype={$iq_:1}
Z.dw.prototype={
bY:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ai(s)
t=P.B('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.ju.prototype={$iq0:1}
Z.dx.prototype={
aU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bY:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bY(a)},
jl:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aV:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sff:function(a){this.b=H.n(a,"$ib",[Z.bC],"$ab")},
$iq9:1}
Z.bC.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cQ(this.c))+"'")+"]"}}
Z.bm.prototype={
gcw:function(a){var u=this.a,t=(u&$.br().a)!==0?3:0
if((u&$.bq().a)!==0)t+=3
if((u&$.bp().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=2
if((u&$.bQ().a)!==0)t+=3
if((u&$.dn().a)!==0)t+=3
if((u&$.dp().a)!==0)t+=4
if((u&$.cp().a)!==0)++t
return(u&$.bo().a)!==0?t+4:t},
i5:function(a){var u,t=$.br(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0)if(u===a)return t
return $.nr()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bm))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.br().a)!==0)C.a.h(u,"Pos")
if((t&$.bq().a)!==0)C.a.h(u,"Norm")
if((t&$.bp().a)!==0)C.a.h(u,"Binm")
if((t&$.bs().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bQ().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dn().a)!==0)C.a.h(u,"Clr3")
if((t&$.dp().a)!==0)C.a.h(u,"Clr4")
if((t&$.cp().a)!==0)C.a.h(u,"Weight")
if((t&$.bo().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fC.prototype={}
D.bV.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.C]}
H.o(b,u)
if(this.a==null)this.saj(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.C]})
u=s.a
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.a
t=(u&&C.a).K(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.b
t=(u&&C.a).K(u,b)||t}return t},
I:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.C()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.F(P.m4(u,!0,{func:1,ret:-1,args:[D.C]}),new D.fX(q))
u=r.b
if(u!=null){r.saQ(H.d([],[{func:1,ret:-1,args:[D.C]}]))
C.a.F(u,new D.fY(q))}return!0},
iv:function(){return this.I(null)},
af:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.I(u)}}},
saj:function(a){this.a=H.n(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")},
saQ:function(a){this.b=H.n(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")}}
D.fX.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.fY.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.C.prototype={}
D.bY.prototype={}
D.bZ.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dy.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dy))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dM.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hg.prototype={
j1:function(a){this.d.h(0,a.a)
return!1},
iY:function(a){this.d.K(0,a.a)
return!1},
shp:function(a){this.d=H.n(a,"$imk",[P.l],"$amk")}}
X.dQ.prototype={}
X.ho.prototype={
aZ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.ab(o.a+n*m,o.b+u*t)
t=q.a.gbk()
r=new X.bG(a,V.bJ(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cj:function(a,b){this.r=a.a
return!1},
b9:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eq()
if(typeof u!=="number")return u.ah()
this.r=(u&~t)>>>0
return!1},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.aZ(a,b))
return!0},
j2:function(a){return!1},
fZ:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dQ(c,r.a.gbk(),b)
s.b=!0
t.I(s)
r.y=new P.ay(u,!1)
r.x=V.bJ()}}
X.bF.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bF))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.H(this.b)?"Alt+":""
return u+(H.H(this.c)?"Shift+":"")}}
X.bG.prototype={}
X.hO.prototype={
bF:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gbk(),r=new X.bG(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cj:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.I(this.bF(a,b,!0))
return!0},
b9:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eq()
if(typeof t!=="number")return t.ah()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.I(u.bF(a,b,!0))
return!0},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.bF(a,b,!1))
return!0},
j3:function(a,b){return!1}}
X.i3.prototype={}
X.eg.prototype={}
X.iO.prototype={
aZ:function(a,b){var u,t,s,r,q=this
H.n(a,"$ib",[V.ab],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bJ()
s=q.a.gbk()
r=new X.eg(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j0:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.b
if(u==null)return!1
u.I(this.aZ(a,!0))
return!0},
iZ:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.c
if(u==null)return!1
u.I(this.aZ(a,!0))
return!0},
j_:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.d
if(u==null)return!1
u.I(this.aZ(a,!1))
return!0}}
X.el.prototype={
gbk:function(){var u=this.a,t=C.j.gdm(u).c
t.toString
u=C.j.gdm(u).d
u.toString
return V.mh(0,0,t,u)},
cS:function(a){var u=a.keyCode,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dM(u,new X.bF(t,a.altKey,a.shiftKey))},
aR:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
bU:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
aC:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.P()
u=t.top
if(typeof r!=="number")return r.P()
return new V.ab(s-q,r-u)},
b_:function(a){return new V.a7(a.movementX,a.movementY)},
bO:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.e.am(r.pageX)
C.e.am(r.pageY)
p=o.left
C.e.am(r.pageX)
C.a.h(n,new V.ab(q-p,C.e.am(r.pageY)-o.top))}return n},
aA:function(a){var u=a.buttons,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dy(u,new X.bF(t,a.altKey,a.shiftKey))},
bJ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.P()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.P()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fT:function(a){this.f=!0},
fH:function(a){this.f=!1},
fN:function(a){H.h(a,"$iaf")
if(H.H(this.f)&&this.bJ(a))a.preventDefault()},
fX:function(a){var u
H.h(a,"$ib5")
if(!H.H(this.f))return
u=this.cS(a)
this.b.j1(u)},
fV:function(a){var u
H.h(a,"$ib5")
if(!H.H(this.f))return
u=this.cS(a)
this.b.iY(u)},
h0:function(a){var u,t,s,r,q=this
H.h(a,"$iaf")
u=q.a
u.focus()
q.f=!0
q.aR(a)
if(H.H(q.x)){t=q.aA(a)
s=q.b_(a)
if(q.d.cj(t,s))a.preventDefault()
return}if(H.H(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aA(a)
r=q.aC(a)
if(q.c.cj(t,r))a.preventDefault()},
h4:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aR(a)
u=r.aA(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aC(a)
if(r.c.b9(u,s))a.preventDefault()},
fR:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bJ(a)){r.aR(a)
u=r.aA(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aC(a)
if(r.c.b9(u,s))a.preventDefault()}},
h2:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aR(a)
u=r.aA(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aC(a)
if(r.c.b8(u,s))a.preventDefault()},
fP:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bJ(a)){r.aR(a)
u=r.aA(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aC(a)
if(r.c.b8(u,s))a.preventDefault()}},
h6:function(a){var u,t,s=this
H.h(a,"$ibe")
s.aR(a)
u=new V.a7((a&&C.D).gio(a),C.D.gip(a)).t(0,180)
if(H.H(s.x)){if(s.d.j2(u))a.preventDefault()
return}if(H.H(s.r))return
t=s.aC(a)
if(s.c.j3(u,t))a.preventDefault()},
h8:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aA(s.y)
t=s.aC(s.y)
s.d.fZ(u,t,r)}},
hl:function(a){var u,t=this
H.h(a,"$iaX")
t.a.focus()
t.f=!0
t.bU(a)
u=t.bO(a)
if(t.e.j0(u))a.preventDefault()},
hh:function(a){var u
H.h(a,"$iaX")
this.bU(a)
u=this.bO(a)
if(this.e.iZ(u))a.preventDefault()},
hj:function(a){var u
H.h(a,"$iaX")
this.bU(a)
u=this.bO(a)
if(this.e.j_(u))a.preventDefault()},
sf9:function(a){this.z=H.n(a,"$ib",[[P.cV,P.V]],"$ab")}}
D.by.prototype={
ay:function(a){var u
H.h(a,"$iC")
u=this.r
if(u!=null)u.I(a)},
eK:function(){return this.ay(null)},
sad:function(a){var u,t,s=this
if(!J.P(s.b,a)){u=s.b
if(u!=null)u.gv().K(0,s.gcF())
t=s.b
s.b=a
if(a!=null)a.gv().h(0,s.gcF())
u=new D.M("mover",t,s.b,[U.al])
u.b=!0
s.ay(u)}},
sal:function(a,b){var u,t,s=this
if(b==null)b=new V.a3(1,1,1)
if(!s.c.p(0,b)){u=s.c
s.c=b
t=new D.M("color",u,b,[V.a3])
t.b=!0
s.ay(t)}},
$iad:1,
$icJ:1}
D.ad.prototype={$icJ:1}
D.dN.prototype={
ay:function(a){var u=this.x
if(u!=null)u.I(a)},
d1:function(a){var u
H.h(a,"$iC")
u=this.y
if(u!=null)u.I(a)},
fY:function(){return this.d1(null)},
hb:function(a){var u,t,s
H.n(a,"$ik",[D.ad],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.f1(s))return!1}return!0},
fB:function(a,b){var u,t,s,r,q,p,o,n=D.ad
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gd0(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.h(b[q],"$iad")
if(p instanceof D.by)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bV()
o.saj(null)
o.saQ(null)
o.c=null
o.d=0
p.r=o}H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bY([n])
n.b=!0
this.ay(n)},
hf:function(a,b){var u,t,s,r=D.ad
H.n(b,"$ik",[r],"$ak")
for(u=b.gV(b),t=this.gd0();u.w();){s=u.gJ(u)
C.a.K(this.e,s)
s.gv().K(0,t)}r=new D.bZ([r])
r.b=!0
this.ay(r)},
f1:function(a){var u=C.a.U(this.e,a)
return u},
sf7:function(a){this.e=H.n(a,"$ib",[D.by],"$ab")},
shm:function(a){this.f=H.n(a,"$ib",[D.e_],"$ab")},
shL:function(a){this.r=H.n(a,"$ib",[D.e7],"$ab")},
$ak:function(){return[D.ad]},
$aa2:function(){return[D.ad]}}
D.e_.prototype={$iad:1,$icJ:1}
D.e7.prototype={$iad:1,$icJ:1}
V.a3.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.b0.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b0))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+", "+V.Q(u.d,3,0)+"]"}}
V.fW.prototype={}
V.c0.prototype={
ag:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.v])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.c0))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.v],o=V.cj(H.d([q.a,q.d,q.r],p),3,0),n=V.cj(H.d([q.b,q.e,q.x],p),3,0),m=V.cj(H.d([q.c,q.f,q.y],p),3,0)
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
V.ak.prototype={
ag:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.v])
return t},
dP:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.dT()
u=1/b1
t=-n
s=-a0
return V.b8((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b8(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bt:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.J(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cr:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a5(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
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
i:function(a){return this.N()},
E:function(a){var u,t,s,r,q,p=this,o=[P.v],n=V.cj(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cj(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cj(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cj(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.E("")}}
V.ab.prototype={
P:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.a5.prototype={
B:function(a,b){return new V.a5(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.a5(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.bK.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bK))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+", "+V.Q(u.d,3,0)+"]"}}
V.e2.prototype={
gaw:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e2))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+", "+V.Q(u.d,3,0)+"]"}}
V.a7.prototype={
cg:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
A:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.A()
u=this.b
if(typeof u!=="number")return u.A()
return new V.a7(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.mw
return u==null?$.mw=new V.a7(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.a7(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.J.prototype={
cg:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ci:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aD:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.J(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.J(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.J(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.K().a)return V.d3()
return new V.J(this.a/b,this.b/b,this.c/b)},
dQ:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
U.fD.prototype={
bA:function(a){var u=V.l2(a,this.c,this.b)
return u},
gv:function(){var u=this.y
return u==null?this.y=D.a_():u},
R:function(a){var u=this.y
if(u!=null)u.I(a)},
sem:function(a,b){},
sdR:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bA(u)}s=new D.M("maximumLocation",s,t.b,[P.v])
s.b=!0
t.R(s)}},
sdT:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bA(u)}s=new D.M("minimumLocation",s,t.c,[P.v])
s.b=!0
t.R(s)}},
sa1:function(a,b){var u,t=this
b=t.bA(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.M("location",u,b,[P.v])
u.b=!0
t.R(u)}},
sdS:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.M("maximumVelocity",r,a,[P.v])
r.b=!0
s.R(r)}},
sZ:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.M("velocity",t,a,[P.v])
t.b=!0
u.R(t)}},
sdn:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.M("dampening",u,a,[P.v])
u.b=!0
this.R(u)}},
aK:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sZ(u)}}}
U.dA.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.a_():u},
ax:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dA))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cB.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.a_():u},
R:function(a){var u
H.h(a,"$iC")
u=this.e
if(u!=null)u.I(a)},
ap:function(){return this.R(null)},
fz:function(a,b){var u,t,s,r,q,p,o,n=U.al
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gbe(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gv()
o.toString
H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bY([n])
n.b=!0
this.R(n)},
hd:function(a,b){var u,t,s=U.al
H.n(b,"$ik",[s],"$ak")
for(u=b.gV(b),t=this.gbe();u.w();)u.gJ(u).gv().K(0,t)
s=new D.bZ([s])
s.b=!0
this.R(s)},
ax:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ax(r,r.length,[H.q(r,0)]),u=null;r.w();){q=r.d
if(q!=null){t=q.ax(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.dT():u
r=s.e
if(r!=null)r.af(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cB))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.P(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.al]},
$aa2:function(){return[U.al]},
$ial:1}
U.al.prototype={}
U.e3.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.a_():u},
R:function(a){var u=this.y
if(u!=null)u.I(a)},
sen:function(a){var u
a=V.l2(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.K().a)){this.a=a
u=new D.M("yaw",u,a,[P.v])
u.b=!0
this.R(u)}},
se2:function(a,b){var u
b=V.l2(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.K().a)){this.b=b
u=new D.M("pitch",u,b,[P.v])
u.b=!0
this.R(u)}},
se9:function(a){var u
a=V.l2(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
u=new D.M("roll",u,a,[P.v])
u.b=!0
this.R(u)}},
ax:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sen(s.a+s.d*b.y)
s.se2(0,s.b+s.e*b.y)
s.se9(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.b8(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).A(0,V.m6(s.b)).A(0,V.lh(s.a))
r=s.y
if(r!=null)r.af(0)}return s.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e3))return!1
u=r.a
t=b.a
s=$.K().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+"], ["+V.Q(u.d,3,0)+", "+V.Q(u.e,3,0)+", "+V.Q(u.f,3,0)+"]"}}
U.em.prototype={
gv:function(){var u=this.fx
return u==null?this.fx=D.a_():u},
R:function(a){var u
H.h(a,"$iC")
u=this.fx
if(u!=null)u.I(a)},
ap:function(){return this.R(null)},
i6:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.a_():t
u.h(0,s.gfp())
u=s.a.c
t=u.d
u=t==null?u.d=D.a_():t
u.h(0,s.gfs())
u=s.a.c
t=u.c
u=t==null?u.c=D.a_():t
u.h(0,s.gfu())
u=s.a.d
t=u.f
u=t==null?u.f=D.a_():t
u.h(0,s.gfk())
u=s.a.d
t=u.d
u=t==null?u.d=D.a_():t
u.h(0,s.gfm())
u=s.a.e
t=u.b
u=t==null?u.b=D.a_():t
u.h(0,s.ghU())
u=s.a.e
t=u.d
u=t==null?u.d=D.a_():t
u.h(0,s.ghS())
u=s.a.e
t=u.c
u=t==null?u.c=D.a_():t
u.h(0,s.ghQ())
return!0},
ar:function(a){var u=a.a,t=a.b
if(H.H(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.H(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.a7(u,t)},
fq:function(a){var u=this
a=H.t(H.h(a,"$iC"),"$ibG")
if(!J.P(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ft:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.h(a,"$iC"),"$ibG")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.P(0,a.y)
u=new V.a7(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.P(0,a.y)
u=n.ar(new V.a7(t.a,t.b).A(0,2).t(0,u.gaw()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.P(0,a.y)
r=n.ar(new V.a7(s.a,s.b).A(0,2).t(0,u.gaw()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.P(0,a.z)
n.dx=n.ar(new V.a7(t.a,t.b).A(0,2).t(0,u.gaw()))}n.ap()},
fv:function(a){var u,t,s,r=this
H.h(a,"$iC")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sZ(-t*10*u)
r.ap()}},
fl:function(a){var u=this
if(H.t(H.h(a,"$iC"),"$idQ").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fn:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.h(a,"$iC"),"$ibG")
if(!J.P(n.d,a.x.b))return
u=a.c
t=a.d
s=t.P(0,a.y)
r=n.ar(new V.a7(s.a,s.b).A(0,2).t(0,u.gaw()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.P(0,a.z)
n.dx=n.ar(new V.a7(t.a,t.b).A(0,2).t(0,u.gaw()))
n.ap()},
hV:function(a){var u=this
H.h(a,"$iC")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hT:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.h(a,"$iC"),"$ieg")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.P(0,a.y)
u=new V.a7(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.P(0,a.y)
u=n.ar(new V.a7(t.a,t.b).A(0,2).t(0,u.gaw()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.P(0,a.y)
r=n.ar(new V.a7(s.a,s.b).A(0,2).t(0,u.gaw()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.P(0,a.z)
n.dx=n.ar(new V.a7(t.a,t.b).A(0,2).t(0,u.gaw()))}n.ap()},
hR:function(a){var u,t,s,r=this
H.h(a,"$iC")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sZ(-t*10*u)
r.ap()}},
ax:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.dy=r
u=b.y
t.c.aK(0,u)
t.b.aK(0,u)
t.fr=V.lh(t.b.d).A(0,V.m6(t.c.d))}return t.fr},
$ial:1}
M.dF.prototype={
az:function(a){var u
H.h(a,"$iC")
u=this.y
if(u!=null)u.I(a)},
eL:function(){return this.az(null)},
fJ:function(a,b){var u,t,s,r,q,p,o,n=E.ap
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gaq(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.saj(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bY([n])
n.b=!0
this.az(n)},
fL:function(a,b){var u,t,s=E.ap
H.n(b,"$ik",[s],"$ak")
for(u=b.gV(b),t=this.gaq();u.w();)u.gJ(u).gv().K(0,t)
s=new D.bZ([s])
s.b=!0
this.az(s)},
sec:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().K(0,t.gaq())
u=t.d
t.d=a
if(a!=null)a.gv().h(0,t.gaq())
s=new D.M("technique",u,t.d,[O.c5])
s.b=!0
t.az(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.a_():u},
aV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.e9(a)
e.b=!0
u=f.f
if(u!=null)u.I(e)
a.e5(f.d)
u=f.c
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
if(typeof s!=="number")return H.F(s)
o=C.e.am(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.e.am(p*r)
p=C.e.am(q.c*s)
a.c=p
q=C.e.am(q.d*r)
a.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=f.b
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b8(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.e4(i)
t=$.mb
if(t==null){t=V.md()
q=V.ln()
p=$.mx
t=V.m5(t,q,p==null?$.mx=new V.J(0,0,-1):p)
$.mb=t
h=t}else h=t
t=u.b
if(t!=null){g=t.ax(0,a,u)
if(g!=null)h=g.A(0,h)}a.db.e4(h)
u=f.d
if(u!=null)u.aK(0,a)
for(u=f.e.a,u=new J.ax(u,u.length,[H.q(u,0)]);u.w();)u.d.aK(0,a)
for(u=f.e.a,u=new J.ax(u,u.length,[H.q(u,0)]);u.w();)u.d.aV(a)
f.b.toString
a.cy.ck()
a.db.ck()
f.c.toString
a.e3()},
sf_:function(a,b){this.e=H.n(b,"$ia2",[E.ap],"$aa2")},
$iq6:1}
A.du.prototype={}
A.fs.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iw:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
iq:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.aj.prototype={
gan:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.aj))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.hv.prototype={
eC:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.a6("")
t=c3.dy
if(t){u.a=c2
s=c2}else s=""
r=c3.fr
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c3.k3
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c3.k4
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.pf(c3,u)
A.ph(c3,u)
A.pg(c3,u)
A.pj(c3,u)
A.pk(c3,u)
A.pi(c3,u)
A.pl(c3,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c3.rx
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
u.a=s}if(c3.r1){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c3.r2){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c3.k1){s+="   objPos = getObjPos();\n"
u.a=s}s=(c3.k2?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.pe(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cT(n,35633)
b8.f=b8.cT(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.H(H.lz(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.A(P.B("Failed to link shader: "+H.i(l)))}b8.hF()
b8.hH()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.t(b8.y.L(0,"invViewMat"),"$iaB")
if(t)b8.dy=H.t(b8.y.L(0,"objMat"),"$iaB")
if(r)b8.fr=H.t(b8.y.L(0,"viewObjMat"),"$iaB")
b8.fy=H.t(b8.y.L(0,"projViewObjMat"),"$iaB")
if(c3.ry)b8.k1=H.t(b8.y.L(0,"txt2DMat"),"$id1")
if(c3.x1)b8.k2=H.t(b8.y.L(0,"txtCubeMat"),"$iaB")
if(c3.x2)b8.k3=H.t(b8.y.L(0,"colorMat"),"$iaB")
b8.seW(H.d([],[A.aB]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.L(0,"bendMatCount"),"$iaH")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.A(P.B(c0+q+c1));(s&&C.a).h(s,H.t(j,"$iaB"))}}t=c3.a
if(t.a)b8.r2=H.t(b8.y.L(0,"emissionClr"),"$iZ")
if(t.b)b8.rx=H.t(b8.y.L(0,"emissionTxt"),"$ian")
t=c3.b
if(t.a)b8.x1=H.t(b8.y.L(0,"ambientClr"),"$iZ")
if(t.b)b8.x2=H.t(b8.y.L(0,"ambientTxt"),"$ian")
t=c3.c
if(t.a)b8.y2=H.t(b8.y.L(0,"diffuseClr"),"$iZ")
if(t.b)b8.aE=H.t(b8.y.L(0,"diffuseTxt"),"$ian")
t=c3.d
if(t.a)b8.ds=H.t(b8.y.L(0,"invDiffuseClr"),"$iZ")
if(t.b)b8.dt=H.t(b8.y.L(0,"invDiffuseTxt"),"$ian")
t=c3.e
s=t.a
if(s||t.b||!1){b8.dw=H.t(b8.y.L(0,"shininess"),"$iah")
if(s)b8.du=H.t(b8.y.L(0,"specularClr"),"$iZ")
if(t.b)b8.dv=H.t(b8.y.L(0,"specularTxt"),"$ian")}if(c3.f.b)b8.dz=H.t(b8.y.L(0,"bumpTxt"),"$ian")
if(c3.cy){b8.dA=H.t(b8.y.L(0,"envSampler"),"$ic8")
t=c3.r
if(t.a)b8.dB=H.t(b8.y.L(0,"reflectClr"),"$iZ")
if(t.b)b8.dC=H.t(b8.y.L(0,"reflectTxt"),"$ian")
t=c3.x
s=t.a
if(s||t.b||!1){b8.dD=H.t(b8.y.L(0,"refraction"),"$iah")
if(s)b8.dE=H.t(b8.y.L(0,"refractClr"),"$iZ")
if(t.b)b8.dF=H.t(b8.y.L(0,"refractTxt"),"$ian")}}t=c3.y
if(t.a)b8.dG=H.t(b8.y.L(0,"alpha"),"$iah")
if(t.b)b8.dH=H.t(b8.y.L(0,"alphaTxt"),"$ian")
t=P.l
s=[t,A.aH]
b8.sf6(new H.a1(s))
b8.seM(new H.a1([t,[P.b,A.c6]]))
b8.shn(new H.a1(s))
b8.sho(new H.a1([t,[P.b,A.c7]]))
b8.shK(new H.a1(s))
b8.seN(new H.a1([t,[P.b,A.c9]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c6],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ah()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.A(P.B(c0+d+c1))
H.t(j,"$iZ")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.A(P.B(c0+d+c1))
H.t(c,"$iZ")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.A(P.B(c0+d+c1))
H.t(b,"$iZ")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.A(P.B(c0+d+c1))
H.t(j,"$iZ")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.A(P.B(c0+d+c1))
H.t(c,"$iZ")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.A(P.B(c0+o+c1))
H.t(b,"$ian")
a2=b}else a2=b9
C.a.h(e,new A.c6(a1,a0,a,j,c,a2))}b8.c6.k(0,g,e)
q=b8.c5
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaH"))}for(t=c3.Q,s=t.length,r=[A.c7],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.A(P.B(c0+o+c1))
H.t(j,"$iZ")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.A(P.B(c0+o+c1))
H.t(c,"$iZ")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.A(P.B(c0+o+c1))
H.t(b,"$iZ")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.A(P.B(c0+o+c1))
H.t(a3,"$id1")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.B(c0+o+c1))
H.t(a3,"$ic8")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.B(c0+o+c1))
H.t(a3,"$ic8")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.A(P.B(c0+o+c1))
H.t(a5,"$id0")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.A(P.B(c0+o+c1))
H.t(a3,"$iah")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.A(P.B(c0+o+c1))
H.t(a5,"$iah")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.A(P.B(c0+o+c1))
H.t(a8,"$iah")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c7(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.c8.k(0,g,e)
q=b8.c7
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaH"))}for(t=c3.ch,s=t.length,r=[A.c9],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.A(P.B(c0+o+c1))
H.t(j,"$iZ")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.A(P.B(c0+o+c1))
H.t(c,"$iZ")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.A(P.B(c0+o+c1))
H.t(b,"$iZ")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.A(P.B(c0+o+c1))
H.t(a3,"$iZ")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.A(P.B(c0+o+c1))
H.t(a5,"$iZ")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.A(P.B(c0+o+c1))
H.t(a8,"$iZ")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.A(P.B(c0+o+c1))
H.t(b2,"$iah")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.A(P.B(c0+o+c1))
H.t(b3,"$iah")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.j(0,d)
if(a5==null)H.A(P.B(c0+d+c1))
H.t(a5,"$id0")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.A(P.B(c0+d+c1))
H.t(a5,"$iah")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.A(P.B(c0+d+c1))
H.t(a8,"$iah")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.A(P.B(c0+d+c1))
H.t(a5,"$iah")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.A(P.B(c0+d+c1))
H.t(a8,"$iah")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.A(P.B(c0+d+c1))
H.t(b2,"$iah")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.A(P.B(c0+d+c1))
H.t(a5,"$ian")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.A(P.B(c0+o+c1))
H.t(a5,"$ian")
a6=a5}else a6=b9
C.a.h(e,new A.c9(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.ca.k(0,g,e)
q=b8.c9
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaH"))}}},
ak:function(a,b){if(b!=null&&b.d)a.es(b)},
hD:function(a,b){},
seW:function(a){this.r1=H.n(a,"$ib",[A.aB],"$ab")},
sf6:function(a){this.c5=H.n(a,"$iz",[P.l,A.aH],"$az")},
seM:function(a){this.c6=H.n(a,"$iz",[P.l,[P.b,A.c6]],"$az")},
shn:function(a){this.c7=H.n(a,"$iz",[P.l,A.aH],"$az")},
sho:function(a){this.c8=H.n(a,"$iz",[P.l,[P.b,A.c7]],"$az")},
shK:function(a){this.c9=H.n(a,"$iz",[P.l,A.aH],"$az")},
seN:function(a){this.ca=H.n(a,"$iz",[P.l,[P.b,A.c9]],"$az")}}
A.aM.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aQ.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aU.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hy.prototype={
i:function(a){return this.aE}}
A.c6.prototype={}
A.c7.prototype={}
A.c9.prototype={}
A.cS.prototype={
eF:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cT:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.H(H.lz(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.B("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hF:function(){var u,t,s,r=this,q=H.d([],[A.du]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.du(p,t.name,s))}r.x=new A.fs(q)},
hH:function(){var u,t,s,r=this,q=H.d([],[A.eh]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.im(t.type,t.size,t.name,s))}r.y=new A.j0(q)},
aP:function(a,b,c){var u=this.a
if(a===1)return new A.aH(u,b,c)
else return A.lk(u,this.r,b,a,c)},
f3:function(a,b,c){var u=this.a
if(a===1)return new A.an(u,b,c)
else return A.lk(u,this.r,b,a,c)},
f4:function(a,b,c){var u=this.a
if(a===1)return new A.c8(u,b,c)
else return A.lk(u,this.r,b,a,c)},
bj:function(a,b){return new P.ex(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
im:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aP(b,c,d)
case 5121:return u.aP(b,c,d)
case 5122:return u.aP(b,c,d)
case 5123:return u.aP(b,c,d)
case 5124:return u.aP(b,c,d)
case 5125:return u.aP(b,c,d)
case 5126:return new A.ah(u.a,c,d)
case 35664:return new A.iX(u.a,c,d)
case 35665:return new A.Z(u.a,c,d)
case 35666:return new A.d0(u.a,c,d)
case 35667:return new A.iY(u.a,c,d)
case 35668:return new A.iZ(u.a,c,d)
case 35669:return new A.j_(u.a,c,d)
case 35674:return new A.j1(u.a,c,d)
case 35675:return new A.d1(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.f3(b,c,d)
case 35680:return u.f4(b,c,d)
case 35670:throw H.e(u.bj("BOOL",c))
case 35671:throw H.e(u.bj("BOOL_VEC2",c))
case 35672:throw H.e(u.bj("BOOL_VEC3",c))
case 35673:throw H.e(u.bj("BOOL_VEC4",c))
default:throw H.e(P.B("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.eh.prototype={}
A.j0.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
L:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.B("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aH.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shX:function(a){H.n(a,"$ib",[P.l],"$ab")}}
A.ah.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.Z.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d0.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d1.prototype={
ao:function(a){var u=new Float32Array(H.ce(H.n(a,"$ib",[P.v],"$ab")))
C.c.ei(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aB.prototype={
ao:function(a){var u=new Float32Array(H.ce(H.n(a,"$ib",[P.v],"$ab")))
C.c.ej(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.an.prototype={
es:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.c8.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.ko.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ci(s.b,b).ci(s.d.ci(s.c,b),c)
a.sa1(0,new V.a5(r.a,r.b,r.c))
a.sed(r.t(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sdj(new V.bK(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:8}
F.kA.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:20}
F.kC.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.F(p)
s=-s*p
u=r*p
a.sa1(0,new V.a5(s,u,q))
u=new V.J(s,u,q)
a.sed(u.t(0,Math.sqrt(u.D(u))))
a.sdj(new V.bK(1-c,2+c,-1,-1))},
$S:8}
F.kD.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kE.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.kY.prototype={
$2:function(a,b){return 0},
$S:20}
F.kZ.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.F(s)
u=a.f
t=new V.J(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.D(t))).A(0,this.b+s)
a.sa1(0,new V.a5(s.a,s.b,s.c))},
$S:8}
F.l0.prototype={
$1:function(a){return new V.a5(Math.cos(a),Math.sin(a),0)},
$S:16}
F.kM.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a5(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:16}
F.kB.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lN(n.$1(o),m)
m=J.lN(n.$1(o+3.141592653589793/p.c),m).P(0,l)
m=new V.J(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.D(m)))
n=$.my
if(n==null){n=new V.J(1,0,0)
$.my=n
t=n}else t=n
n=u.aD(!J.P(u,t)?V.mA():t)
s=n.t(0,Math.sqrt(n.D(n)))
n=s.aD(u)
t=n.t(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.A(0,n*m)
m=s.A(0,q*m)
a.sa1(0,l.B(0,new V.a5(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:8}
F.a8.prototype={
b3:function(){var u=this
if(!u.gb4()){C.a.K(u.a.a.d.b,u)
u.a.a.a_()}u.bQ()
u.bR()
u.ht()},
bV:function(a){this.a=a
C.a.h(a.d.b,this)},
bW:function(a){this.b=a
C.a.h(a.d.c,this)},
hE:function(a){this.c=a
C.a.h(a.d.d,this)},
bQ:function(){var u=this.a
if(u!=null){C.a.K(u.d.b,this)
this.a=null}},
bR:function(){var u=this.b
if(u!=null){C.a.K(u.d.c,this)
this.b=null}},
ht:function(){var u=this.c
if(u!=null){C.a.K(u.d.d,this)
this.c=null}},
gb4:function(){return this.a==null||this.b==null||this.c==null},
eV:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d3()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dQ())return
return s.t(0,Math.sqrt(s.D(s)))},
eZ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.P(0,q)
r=new V.J(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.D(r)))
r=t.P(0,q)
r=new V.J(r.a,r.b,r.c)
r=s.aD(r.t(0,Math.sqrt(r.D(r))))
return r.t(0,Math.sqrt(r.D(r)))},
c1:function(){var u,t=this
if(t.d!=null)return!0
u=t.eV()
if(u==null){u=t.eZ()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
eU:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d3()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dQ())return
return s.t(0,Math.sqrt(s.D(s)))},
eY:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.P(0,g)
l=new V.J(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.P(0,g).A(0,p).B(0,g).P(0,j)
l=new V.J(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.D(l)))
l=o.aD(q)
l=l.t(0,Math.sqrt(l.D(l))).aD(o)
q=l.t(0,Math.sqrt(l.D(l)))}return q},
c_:function(){var u,t=this
if(t.e!=null)return!0
u=t.eU()
if(u==null){u=t.eY()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
gig:function(a){var u=this
if(J.P(u.a,u.b))return!0
if(J.P(u.b,u.c))return!0
if(J.P(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var u,t,s=this
if(s.gb4())return a+"disposed"
u=a+C.b.ae(J.as(s.a.e),0)+", "+C.b.ae(J.as(s.b.e),0)+", "+C.b.ae(J.as(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.E("")}}
F.fZ.prototype={}
F.iq.prototype={
b6:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bl.prototype={
b3:function(){var u=this
if(!u.gb4()){C.a.K(u.a.a.c.b,u)
u.a.a.a_()}u.bQ()
u.bR()},
bV:function(a){this.a=a
C.a.h(a.c.b,this)},
bW:function(a){this.b=a
C.a.h(a.c.c,this)},
bQ:function(){var u=this.a
if(u!=null){C.a.K(u.c.b,this)
this.a=null}},
bR:function(){var u=this.b
if(u!=null){C.a.K(u.c.c,this)
this.b=null}},
gb4:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){if(this.gb4())return a+"disposed"
return a+C.b.ae(J.as(this.a.e),0)+", "+C.b.ae(J.as(this.b.e),0)},
N:function(){return this.E("")}}
F.hi.prototype={}
F.iV.prototype={
b6:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
return t==u.e}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
return t==u.e}else return!1}}}
F.bI.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ae(J.as(u.e),0)},
N:function(){return this.E("")}}
F.e5.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.a_():u},
b7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.ij())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bI()
if(n.a==null)H.A(P.B("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.I(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nW(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
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
F.cy(l,k,i)}g=h.e
if(g!=null)g.af(0)},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.af(0)
return u},
iP:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.q(o,0)])
for(o=[F.av];u.length!==0;){t=C.a.giB(u)
C.a.e6(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b6(0,t,q)){C.a.h(s,q)
C.a.e6(u,r)}}if(s.length>1)b.b7(s)}}p.a.u()
p.c.cn()
p.d.cn()
p.b.j7()
p.c.co(new F.iV())
p.d.co(new F.iq())
o=p.e
if(o!=null)o.af(0)},
bX:function(){this.iP(new F.jn(),new F.hW())},
cb:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cb()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.c(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdU(new V.J(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.J(s,r,o).t(0,Math.sqrt(s*s+r*r+o*o))
if(!J.P(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.I(null)}}}}o=p.e
if(o!=null)o.af(0)},
ic:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.br()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bq().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.bQ().a)!==0)++s
if((t&$.dn().a)!==0)++s
if((t&$.dp().a)!==0)++s
if((t&$.cp().a)!==0)++s
if((t&$.bo().a)!==0)++s
r=a3.gcw(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.v
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dw])
for(n=0,m=0;m<s;++m){l=a3.i5(m)
k=l.gcw(l)
C.a.k(o,m,new Z.dw(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].iM(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.n(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ce(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dx(new Z.eo(a0,f),o,a3)
e.sff(H.d([],[Z.bC]))
if(a.b.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)}b=Z.lo(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bC(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)}b=Z.lo(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bC(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.u()
C.a.h(d,c.e)}b=Z.lo(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bC(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.m(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.I(null)},
$iq7:1}
F.ii.prototype={
i0:function(a){var u,t,s,r,q,p,o
H.n(a,"$ib",[F.av],"$ab")
u=H.d([],[F.a8])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.c(a,p)
p=a[p]
if(q>=o)return H.c(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cy(s,p,o))}}return u},
i1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ib",[F.av],"$ab")
u=H.d([],[F.a8])
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
C.a.h(u,F.cy(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cy(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cy(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cy(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
co:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b6(0,p,n)){p.b3()
break}}}}},
cn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gig(s)
if(t)s.b3()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c1())s=!1
return s},
c0:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c_())s=!1
return s},
cb:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.J(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.J(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.I(null)}},
i:function(a){return this.N()},
E:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(a))
return C.a.m(r,"\n")},
N:function(){return this.E("")},
sfa:function(a){this.b=H.n(a,"$ib",[F.a8],"$ab")}}
F.ij.prototype={
gn:function(a){return this.b.length},
co:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b6(0,p,n)){p.b3()
break}}}}},
cn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.P(s.a,s.b)
if(t)s.b3()}},
i:function(a){return this.N()},
E:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.m(s,"\n")},
N:function(){return this.E("")},
sfg:function(a){this.b=H.n(a,"$ib",[F.bl],"$ab")}}
F.ik.prototype={
gn:function(a){return this.b.length},
j7:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.I(null)}s=t.a
if(s!=null){C.a.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
E:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(a))
return C.a.m(r,"\n")},
N:function(){return this.E("")},
sbN:function(a){this.b=H.n(a,"$ib",[F.bI],"$ab")}}
F.av.prototype={
c4:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.en(u.cx,r,o,t,s,q,p,a,n)},
ij:function(){return this.c4(null)},
sa1:function(a,b){var u
if(!J.P(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
sdU:function(a){var u
a=a==null?null:a.t(0,Math.sqrt(a.D(a)))
if(!J.P(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
sed:function(a){var u
if(!J.P(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sdj:function(a){var u
if(!J.P(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
iM:function(a){var u,t,s=this
if(a.p(0,$.br())){u=s.f
t=[P.v]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bq())){u=s.r
t=[P.v]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bp())){u=s.x
t=[P.v]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bs())){u=s.y
t=[P.v]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.bQ())){u=s.z
t=[P.v]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.dn())){u=s.Q
t=[P.v]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.dp())){u=s.Q
t=[P.v]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.cp()))return H.d([s.ch],[P.v])
else if(a.p(0,$.bo())){u=s.cx
t=[P.v]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.v])},
c1:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d3()
t.d.F(0,new F.js(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.af(0)}return!0},
c_:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d3()
t.d.F(0,new F.jr(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.af(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.ae(J.as(s.e),0))
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
C.a.h(q,V.Q(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
N:function(){return this.E("")}}
F.js.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:7}
F.jr.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:7}
F.ji.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.B("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a_()
return!0},
i2:function(a,b,c,d,e,f){var u=F.en(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c1()
return!0},
c0:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c_()
return!0},
ie:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.I(null)}}}}return!0},
i:function(a){return this.N()},
E:function(a){var u,t,s,r
this.u()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
N:function(){return this.E("")},
shY:function(a){this.c=H.n(a,"$ib",[F.av],"$ab")}}
F.jj.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
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
F:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a8]})
C.a.F(u.b,b)
C.a.F(u.c,new F.jk(u,b))
C.a.F(u.d,new F.jl(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sfb:function(a){this.b=H.n(a,"$ib",[F.a8],"$ab")},
sfc:function(a){this.c=H.n(a,"$ib",[F.a8],"$ab")},
sfd:function(a){this.d=H.n(a,"$ib",[F.a8],"$ab")}}
F.jk.prototype={
$1:function(a){H.h(a,"$ia8")
if(!J.P(a.a,this.a))this.b.$1(a)},
$S:7}
F.jl.prototype={
$1:function(a){var u
H.h(a,"$ia8")
u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)},
$S:7}
F.jm.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sfh:function(a){this.b=H.n(a,"$ib",[F.bl],"$ab")},
sfi:function(a){this.c=H.n(a,"$ib",[F.bl],"$ab")}}
F.jo.prototype={}
F.jn.prototype={
b6:function(a,b,c){return J.P(b.f,c.f)}}
F.jp.prototype={}
F.hW.prototype={
b7:function(a){var u,t,s,r
H.n(a,"$ib",[F.av],"$ab")
u=V.d3()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.J(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.t(0,Math.sqrt(u.D(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].sdU(u)
return}}
F.jq.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sbN:function(a){this.b=H.n(a,"$ib",[F.bI],"$ab")}}
O.dS.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.a_():u},
Y:function(a){var u
H.h(a,"$iC")
u=this.fr
if(u!=null)u.I(a)},
bM:function(){return this.Y(null)},
d5:function(a){H.h(a,"$iC")
this.a=null
this.Y(a)},
hy:function(){return this.d5(null)},
fD:function(a,b){var u=V.ak
H.n(b,"$ik",[u],"$ak")
u=new D.bY([u])
u.b=!0
this.Y(u)},
fF:function(a,b){var u=V.ak
H.n(b,"$ik",[u],"$ak")
u=new D.bZ([u])
u.b=!0
this.Y(u)},
cQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a1([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.aM])
h.F(0,new O.hC(j,q))
C.a.bx(q,new O.hD())
p=new H.a1([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){o=u[s]
r=o.gb2()
n=p.j(0,o.gb2())
p.k(0,r,n==null?1:n)}m=H.d([],[A.aQ])
p.F(0,new O.hE(j,m))
C.a.bx(m,new O.hF())
l=new H.a1([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){o=i[s]
t=o.gb2()
r=l.j(0,o.gb2())
l.k(0,t,r==null?1:r)}k=H.d([],[A.aU])
l.F(0,new O.hG(j,k))
C.a.bx(k,new O.hH())
i=C.d.a8(j.e.a.length+3,4)
u=j.b
t=j.d
j.dy.e
return A.o2(u!=null,!1,t!=null,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
aa:function(a,b){H.n(a,"$ib",[T.cY],"$ab")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
aK:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ax(u,u.length,[H.q(u,0)]);u.w();){t=u.d
t.toString
s=$.jh
if(s==null)s=$.jh=new V.J(0,0,1)
t.a=s
r=$.jg
t.d=r==null?$.jg=new V.J(0,1,0):r
r=$.jf
t.e=r==null?$.jf=new V.J(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bt(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bt(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bt(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
j9:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cQ()
u=b6.fr.j(0,b5.aE)
if(u==null){u=A.o1(b5,b6.a)
t=u.b
if(t.length===0)H.A(P.B("May not cache a shader with no name."))
if(b6.fr.bl(0,t))H.A(P.B('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dr
b5=b7.e
if(!(b5 instanceof Z.dx))b5=b7.e=null
if(b5==null||!b5.d.p(0,r)){b5=s.k3
if(b5)b7.d.au()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.c0()
p.a.c0()
p=p.e
if(p!=null)p.af(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.ie()
o=o.e
if(o!=null)o.af(0)}m=b7.d.ic(new Z.ju(b6.a),r)
m.aU($.br()).e=b4.a.Q.c
if(b5)m.aU($.bq()).e=b4.a.cx.c
if(q)m.aU($.bp()).e=b4.a.ch.c
if(s.r1)m.aU($.bs()).e=b4.a.cy.c
if(p)m.aU($.bQ()).e=b4.a.db.c
if(s.rx)m.aU($.bo()).e=b4.a.dx.c
b7.e=m}b5=T.cY
l=H.d([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.iw()
if(s.dy){q=b4.a
o=b6.dx
o=o.ga2(o)
q=q.dy
q.toString
q.ao(o.ag(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.ga2(o)
n=b6.dx
n=b6.cx=o.A(0,n.ga2(n))
o=n}q=q.fr
q.toString
q.ao(o.ag(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gj5()
n=b6.dx
n=b6.ch=o.A(0,n.ga2(n))
o=n}q=q.fy
q.toString
q.ao(o.ag(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.ao(o.ag(0,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.ao(C.v.ag(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.ao(o.ag(0,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.bu(q.a,q.d,k)
for(q=[P.v],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.c(n,j)
n=n[j]
o.toString
H.h(n,"$iak")
o=o.r1
if(j>=o.length)return H.c(o,j)
o=o[j]
i=new Float32Array(H.ce(H.n(n.ag(0,!0),"$ib",q,"$ab")))
C.c.ej(o.a,o.d,!1,i)}}q=s.a
if(q.a){o=b4.a
n=b4.f.f
o=o.r2
C.c.X(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.aa(l,b4.f.d)
q=b4.a
o=b4.f.d
q.ak(q.rx,o)}if(s.id){q=s.b
if(q.a){o=b4.a
n=b4.r.f
o=o.x1
C.c.X(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.aa(l,b4.r.d)
q=b4.a
o=b4.r.d
q.ak(q.x2,o)}q=s.c
if(q.a){o=b4.a
n=b4.x.f
o=o.y2
C.c.X(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.aa(l,b4.x.d)
q=b4.a
o=b4.x.d
q.ak(q.aE,o)}q=s.d
if(q.a){o=b4.a
n=b4.y.f
o=o.ds
C.c.X(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.aa(l,b4.y.d)
q=b4.a
o=b4.y.d
q.ak(q.dt,o)}q=s.e
o=q.a
if(o||q.b||!1){n=b4.a
h=b4.z.ch
n=n.dw
C.c.a5(n.a,n.d,h)}if(o){o=b4.a
n=b4.z.f
o=o.du
C.c.X(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.aa(l,b4.z.d)
q=b4.a
o=b4.z.d
q.ak(q.dv,o)}q=s.z
if(q.length>0){o=b6.db
g=o.ga2(o)
o=P.l
f=new H.a1([o,o])
for(o=b4.dx.e,n=o.length,e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=f.j(0,0)
if(c==null)c=0
f.k(0,0,c+1)
b=J.dq(b4.a.c6.j(0,0),c)
h=g.bt(d.a)
a=h.a
a0=h.b
a1=h.c
a1=h.t(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
h=a1.b
a1=a1.c
C.c.X(a0.a,a0.d,a,h,a1)
a1=d.c
h=b.f
C.c.X(h.a,h.d,a1.a,a1.b,a1.c)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=f.j(0,n)
if(k==null)k=0
n=b4.a.c5.j(0,n)
C.c.bu(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
g=o.ga2(o)
o=P.l
a2=new H.a1([o,o])
for(o=b4.dx.f,n=o.length,h=[b5],a=[P.v],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
a3=d.gb2()
c=a2.j(0,a3)
if(c==null)c=0
a2.k(0,a3,c+1)
b=J.dq(b4.a.c8.j(0,a3),c)
a4=g.A(0,d.ga2(d))
a0=d.ga2(d)
a1=$.cO
a0=a0.cr(a1==null?$.cO=new V.a5(0,0,0):a1)
a1=b.b
C.c.X(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cO
a0=a4.cr(a0==null?$.cO=new V.a5(0,0,0):a0)
a1=b.c
C.c.X(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gal(d)
a1=b.e
C.c.X(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gaJ()
a0=a4.dP(0)
a1=a0.a
a5=a0.b
a6=a0.c
a7=a0.e
a8=a0.f
a9=a0.r
b0=a0.y
b1=a0.z
a0=a0.Q
b2=b.d
b2.toString
i=new Float32Array(H.ce(H.n(new V.c0(a1,a5,a6,a7,a8,a9,b0,b1,a0).ag(0,!0),"$ib",a,"$ab")))
C.c.ei(b2.a,b2.d,!1,i)
d.gaJ()
a0=d.gaJ()
H.n(l,"$ib",h,"$ab")
if(!C.a.U(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaJ()
a1=a0.gb5(a0)
if(a1){a1=b.f
a1.toString
a5=a0.gb5(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.giG(a0)
a1.a.uniform1i(a1.d,a0)}}d.gaX()
a0=d.geu()
a1=b.x
a1.toString
a5=a0.gis(a0)
a6=a0.git(a0)
a7=a0.giu()
a0=a0.gir()
C.c.eh(a1.a,a1.d,a5,a6,a7,a0)
a0=d.gaX()
if(!C.a.U(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaX()
a1=a0.gb5(a0)
if(a1){a1=b.r
a1.toString
a5=a0.gb5(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.giG(a0)
a1.a.uniform1i(a1.d,a0)}}if(d.gix()){a0=d.gi7()
a1=b.y
C.c.a5(a1.a,a1.d,a0)
a0=d.gi8()
a1=b.z
C.c.a5(a1.a,a1.d,a0)
a0=d.gi9()
a1=b.Q
C.c.a5(a1.a,a1.d,a0)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.c7.j(0,n)
C.c.bu(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
g=o.ga2(o)
o=P.l
b3=new H.a1([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
a3=d.gb2()
c=b3.j(0,a3)
if(c==null)c=0
b3.k(0,a3,c+1)
b=J.dq(b4.a.ca.j(0,a3),c)
h=d.gj4(d)
a=b.b
C.c.X(a.a,a.d,h.a,h.b,h.c)
h=d.gjq(d).jC()
a=b.c
C.c.X(a.a,a.d,h.a,h.b,h.c)
h=g.cr(d.gj4(d))
a=b.d
C.c.X(a.a,a.d,h.a,h.b,h.c)
h=d.gal(d)
a=b.e
C.c.X(a.a,a.d,h.a,h.b,h.c)
d.gaJ()
h=d.gjF()
a=b.f
C.c.X(a.a,a.d,h.a,h.b,h.c)
h=d.gcp(d)
a=b.r
C.c.X(a.a,a.d,h.a,h.b,h.c)
h=d.gjD()
a=b.x
C.c.a5(a.a,a.d,h)
h=d.gjE()
a=b.y
C.c.a5(a.a,a.d,h)
d.gaJ()
h=d.gaJ()
H.n(l,"$ib",b5,"$ab")
if(!C.a.U(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaJ()
a=h.gb5(h)
if(a){a=b.dx
a.toString
a0=h.d
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}d.gaX()
h=d.geu()
a=b.z
a.toString
a0=h.gis(h)
a1=h.git(h)
a5=h.giu()
h=h.gir()
C.c.eh(a.a,a.d,a0,a1,a5,h)
h=d.gaX()
if(!C.a.U(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaX()
a=h.gb5(h)
if(a){a=b.dy
a.toString
a0=h.d
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}if(d.gjr()){h=d.gjp()
a=b.Q
C.c.a5(a.a,a.d,h)
h=d.gjo()
a=b.ch
C.c.a5(a.a,a.d,h)}if(d.gix()){h=d.gi7()
a=b.cx
C.c.a5(a.a,a.d,h)
h=d.gi8()
a=b.cy
C.c.a5(a.a,a.d,h)
h=d.gi9()
a=b.db
C.c.a5(a.a,a.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.u)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.c9.j(0,o)
C.c.bu(o.a,o.d,k)}}}if(s.f.b){b4.aa(l,b4.Q.d)
b5=b4.a
q=b4.Q.d
b5.ak(b5.dz,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga2(q).dP(0)}b5=b5.id
b5.toString
b5.ao(q.ag(0,!0))}if(s.cy){b4.aa(l,b4.ch)
b5=b4.a
q=b4.ch
b5.hD(b5.dA,q)
b5=s.r
if(b5.a){q=b4.a
o=b4.cx.f
q=q.dB
C.c.X(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.aa(l,b4.cx.d)
b5=b4.a
q=b4.cx.d
b5.ak(b5.dC,q)}b5=s.x
q=b5.a
if(q||b5.b||!1){o=b4.a
n=b4.cy.ch
o=o.dD
C.c.a5(o.a,o.d,n)}if(q){q=b4.a
o=b4.cy.f
q=q.dE
C.c.X(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.aa(l,b4.cy.d)
b5=b4.a
q=b4.cy.d
b5.ak(b5.dF,q)}}b5=s.y
q=b5.a
o=!q
if(!o||b5.b||!1){if(q){q=b4.a
n=b4.db.f
q=q.dG
C.c.a5(q.a,q.d,n)}if(b5.b){b4.aa(l,b4.db.d)
q=b4.a
n=b4.db.d
q.ak(q.dH,n)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(!q.c&&q.d){q.c=!0
p.activeTexture(33984+q.a)
p.bindTexture(3553,q.b)}}q=b7.e
q.bY(b6)
q.aV(b6)
q.jl(b6)
if(!o||b5.b||!1)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(3553,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.iq()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cQ().aE},
seX:function(a){this.e=H.n(a,"$ia2",[V.ak],"$aa2")}}
O.hC.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aM(a,C.d.a8(b+3,4)*4))},
$S:11}
O.hD.prototype={
$2:function(a,b){H.h(a,"$iaM")
H.h(b,"$iaM")
return J.l4(a.a,b.a)},
$S:50}
O.hE.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aQ(a,C.d.a8(b+3,4)*4))},
$S:11}
O.hF.prototype={
$2:function(a,b){H.h(a,"$iaQ")
H.h(b,"$iaQ")
return J.l4(a.a,b.a)},
$S:51}
O.hG.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aU(a,C.d.a8(b+3,4)*4))},
$S:11}
O.hH.prototype={
$2:function(a,b){H.h(a,"$iaU")
H.h(b,"$iaU")
return J.l4(a.a,b.a)},
$S:52}
O.hw.prototype={
aB:function(){var u,t=this
t.cA()
u=t.f
if(!(Math.abs(u-1)<$.K().a)){t.f=1
u=new D.M(t.b,u,1,[P.v])
u.b=!0
t.a.Y(u)}}}
O.cG.prototype={
Y:function(a){return this.a.Y(H.h(a,"$iC"))},
bM:function(){return this.Y(null)},
aB:function(){},
bS:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aB()
u=s.a
u.a=null
u.Y(null)}}}
O.hx.prototype={}
O.b7.prototype={
d7:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.M(s.b+".color",u,a,[V.a3])
t.b=!0
s.a.Y(t)}},
aB:function(){this.cA()
this.d7(new V.a3(1,1,1))},
sal:function(a,b){this.bS(new A.aj(!0,this.c.b,!1))
this.d7(b)}}
O.hz.prototype={}
O.hA.prototype={
aB:function(){var u,t=this
t.cB()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.M(t.b+".refraction",u,1,[P.v])
u.b=!0
t.a.Y(u)}}}
O.hB.prototype={
d8:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.M(u.b+".shininess",t,a,[P.v])
t.b=!0
u.a.Y(t)}},
aB:function(){this.cB()
this.d8(100)}}
O.c5.prototype={}
T.cY.prototype={}
T.ed.prototype={}
T.iH.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.a_():u}}
T.iI.prototype={
iN:function(a,b){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iH()
t.a=0
t.b=q
t.d=t.c=!1
r=W.m
W.a9(u,"load",H.o(new T.iJ(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hz:function(a,b,c){var u,t,s,r
b=V.lH(b)
u=V.lH(a.width)
t=V.lH(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l7()
s.width=u
s.height=t
r=H.h(C.j.ep(s,"2d"),"$ict")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.py(r.getImageData(0,0,s.width,s.height))}}}
T.iJ.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.hz(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.jf(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.iv()}++s.e},
$S:14}
V.bh.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dR.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa7:function(a){this.a=H.n(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.at.prototype={
aG:function(a,b){return!this.ez(0,b)},
i:function(a){return"!["+this.cz(0)+"]"}}
V.i7.prototype={
aG:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c2(this.a),t=H.c2(this.b)
return u+".."+t},
$iaz:1}
V.ih.prototype={
eE:function(a){var u,t
if(a.a.length<=0)throw H.e(P.B("May not create a SetMatcher with zero characters."))
u=new H.a1([P.l,P.S])
for(t=new H.cF(a,a.gn(a),[H.ar(a,"y",0)]);t.w();)u.k(0,t.d,!0)
this.shC(u)},
aG:function(a,b){return this.a.bl(0,b)},
i:function(a){var u=this.a
return P.cW(u.ga4(u),0,null)},
shC:function(a){this.a=H.n(a,"$iz",[P.l,P.S],"$az")},
$iaz:1}
V.cT.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d_(this.a.l(0,b))
r.sa7(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
iA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b},
shW:function(a){this.c=H.n(a,"$ib",[V.d_],"$ab")}}
V.ef.prototype={
i:function(a){var u=H.lJ(this.b,"\n","\\n"),t=H.lJ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cZ.prototype={
aI:function(a,b,c){var u,t,s
H.n(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shu:function(a){var u=P.f
this.c=H.n(a,"$iz",[u,u],"$az")}}
V.iM.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cT(this,b)
u.shW(H.d([],[V.d_]))
u.d=null
this.a.k(0,b,u)}return u},
O:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cZ(a)
u=P.f
t.shu(new H.a1([u,u]))
this.b.k(0,a,t)}return t},
eg:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ef]),k=this.c,j=[P.l],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.C(a,s)
q=k.iA(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cW(i,0,m)
throw H.e(P.B("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cW(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ef(n==null?o.b:n,p,s)}++s}}},
shM:function(a){this.a=H.n(a,"$iz",[P.f,V.cT],"$az")},
shP:function(a){this.b=H.n(a,"$iz",[P.f,V.cZ],"$az")}}
V.d_.prototype={
i:function(a){return this.b.b+": "+this.cz(0)}}
X.dz.prototype={$icJ:1}
X.h5.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.a_():u}}
X.dZ.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.a_():u},
aO:function(a){var u
H.h(a,"$iC")
u=this.f
if(u!=null)u.I(a)},
eR:function(){return this.aO(null)},
sad:function(a){var u,t,s=this
if(!J.P(s.b,a)){u=s.b
if(u!=null)u.gv().K(0,s.gcG())
t=s.b
s.b=a
if(a!=null)a.gv().h(0,s.gcG())
u=new D.M("mover",t,s.b,[U.al])
u.b=!0
s.aO(u)}},
$icJ:1,
$idz:1}
X.eb.prototype={}
V.bw.prototype={
bd:function(a){this.b=new P.h9(C.Q)
this.c=null
this.sbH(H.d([],[[P.b,W.aD]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aD]))
u=a.split("\n")
for(l=u.length,t=[W.aD],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.N(q)
o=m.b.f2(q,0,q.length)
n=o==null?q:o
C.O.er(p,H.lJ(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gav(m.d),p)}},
e0:function(a,b){var u,t,s,r,q=this
H.n(b,"$ib",[P.f],"$ab")
q.sbH(H.d([],[[P.b,W.aD]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bm():t).eg(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.br(t[r])},
sbH:function(a){this.d=H.n(a,"$ib",[[P.b,W.aD]],"$ab")}}
V.kX.prototype={
$1:function(a){var u
H.h(a,"$ibb")
u=C.e.ef(this.a.giE(),2)
if(u!=="0.00")P.lI(u+" fps")},
$S:54}
V.fM.prototype={
br:function(a){var u=this
switch(a.a){case"Class":u.M(a.b,"#551")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break
case"Type":u.M(a.b,"#B11")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bm:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iN()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.w(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.w(new H.r("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.w(new H.r(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.w(new H.r(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.w(new H.r('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.w(new H.r('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.w(new H.r("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.w(new H.r('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bh())
t=a1.l(0,r).m(0,h)
u=V.w(new H.r("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.w(new H.r("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.w(new H.r("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.w(new H.r("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bh())
t=a1.l(0,r).m(0,e)
u=V.w(new H.r("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.w(new H.r("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.at()
s=[V.az]
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.w(new H.r("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.w(new H.r("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.at()
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.r("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.w(new H.r("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.w(new H.r(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.w(new H.r(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.O("Num")
t=a1.l(0,n)
t.d=t.a.O("Num")
t=a1.l(0,m)
t.d=t.a.O("Symbol")
t=a1.l(0,j)
t.d=t.a.O("String")
t=a1.l(0,g)
t.d=t.a.O("String")
t=a1.l(0,c)
t.d=t.a.O(d)
t=a1.l(0,a0)
t.d=t.a.O(a0)
t=a1.l(0,q)
t=t.d=t.a.O(q)
u=[P.f]
t.aI(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aI(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aI(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h6.prototype={
br:function(a){var u=this
switch(a.a){case"Builtin":u.M(a.b,"#411")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Preprocess":u.M(a.b,"#737")
break
case"Reserved":u.M(a.b,"#119")
break
case"Symbol":u.M(a.b,"#611")
break
case"Type":u.M(a.b,"#171")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bm:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iN()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.w(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.w(new H.r("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.w(new H.r(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.w(new H.r(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.w(new H.r("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.w(new H.r("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bh())
t=e.l(0,j).m(0,i)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.at()
s=[V.az]
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.r("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.at()
u.sa7(H.d([],s))
C.a.h(t.a,u)
t=V.w(new H.r("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.w(new H.r(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.w(new H.r(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.O("Num")
u=e.l(0,n)
u.d=u.a.O("Num")
u=e.l(0,m)
u.d=u.a.O("Symbol")
u=e.l(0,i)
u.d=u.a.O(j)
u=e.l(0,g)
u.d=u.a.O(h)
u=e.l(0,f)
u.d=u.a.O(f)
u=e.l(0,q)
u=u.d=u.a.O(q)
t=[P.f]
u.aI(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aI(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aI(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h7.prototype={
br:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.M(a.b,"#911")
u.M("=",t)
break
case"Id":u.M(a.b,t)
break
case"Other":u.M(a.b,t)
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break}},
bm:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iN()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.w(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.w(new H.r("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.w(new H.r("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.w(new H.r("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.w(new H.r('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.w(new H.r('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.w(new H.r("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.w(new H.r('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bh())
C.a.h(l.l(0,s).m(0,m).a,new V.bh())
u=l.l(0,m).m(0,m)
t=new V.at()
t.sa7(H.d([],[V.az]))
C.a.h(u.a,t)
u=V.w(new H.r('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.O("Symbol")
u=l.l(0,n)
u.d=u.a.O("String")
u=l.l(0,r)
t=u.a.O(r)
u.d=t
t.aI(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.O(q)
t=l.l(0,m)
t.d=t.a.O(m)
return l}}
V.i1.prototype={
e0:function(a,b){H.n(b,"$ib",[P.f],"$ab")
this.sbH(H.d([],[[P.b,W.aD]]))
this.M(C.a.m(b,"\n"),"#111")},
br:function(a){},
bm:function(){return}}
V.i5.prototype={
df:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.o(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.ms().gcm().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.dd(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lP(m.c).h(0,q)
o=W.nR("radio")
o.checked=s
o.name=u
u=W.m
W.a9(o,"change",H.o(new V.i6(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lP(m.c).h(0,r.createElement("br"))},
b1:function(a,b,c){return this.df(a,b,c,!1)},
dd:function(a){var u,t,s=P.ms(),r=P.f,q=P.nY(s.gcm(),r,r)
q.k(0,this.a,a)
u=s.e7(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k7([],[]).cs(""),"",t)}}
V.i6.prototype={
$1:function(a){var u=this
if(H.H(u.b.checked)){u.c.$0()
u.a.dd(u.d)}},
$S:14}
V.il.prototype={
eG:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a9(q,"scroll",H.o(new V.io(o),{func:1,ret:-1,args:[r]}),!1,r)},
dh:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ib",[P.f],"$ab")
this.hG()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eg(C.a.iL(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.pW(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
t.appendChild(l)}else{k=P.f9(C.y,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
eo:function(a){var u,t,s,r=new V.fM("dart")
r.bd("dart")
u=new V.h6("glsl")
u.bd("glsl")
t=new V.h7("html")
t.bd("html")
s=C.a.iC(H.d([r,u,t],[V.bw]),new V.ip(a))
if(s!=null)return s
r=new V.i1("plain")
r.bd("plain")
return r},
dg:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.n(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dm(r).a3(r,"+")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a3(r,"-")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eo(a8)
q.e0(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f9(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lR()
i.href="#"+H.i(m)
i.textContent=a7
j.appendChild(i)
k.appendChild(j)
l.appendChild(k)
n.appendChild(l)
if(t)for(h=a9,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className=a5
if(s>=u.length)return H.c(u,s)
b=u[s]
if(b===0){++g;++h
d.textContent=""+g
c.textContent=""+h}else if(b>0){e.className="codeTableRow codeLineLightGreen"
d.className="codeLineNums codeLineGreen codeLineCenter"
c.className="codeLineNums codeLineGreen";++h
d.textContent="+"
c.textContent=""+h}else if(b<0){e.className="codeTableRow codeLineLightRed"
d.className="codeLineNums codeLineRed"
c.className="codeLineNums codeLineRed codeLineCenter";++g
d.textContent=""+g
c.textContent="-"}a=p.createElement("td")
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.a_.i4(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.u)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gV(r);a3.w();)c.appendChild(a3.gJ(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hZ:function(a){var u,t,s,r,q,p,o,n="auto"
H.n(a,"$ib",[P.f],"$ab")
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
s=H.h(r.insertCell(-1),"$iba").style
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
o=H.h(r.insertCell(-1),"$iba")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hG:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iN()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.at()
r=[V.az]
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.r("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.w(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.w(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.at()
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.r("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.w(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.w(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.at()
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.r("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.w(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.w(new H.r("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.w(new H.r("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.w(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.at()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.r("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.at()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bh())
s=u.l(0,i).m(0,i)
t=new V.at()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.r("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.O(p)
s=u.l(0,n)
s.d=s.a.O(o)
s=u.l(0,"CodeEnd")
s.d=s.a.O(m)
s=u.l(0,j)
s.d=s.a.O("Link")
s=u.l(0,i)
s.d=s.a.O(i)
this.b=u}}
V.io.prototype={
$1:function(a){P.mo(C.n,new V.im(this.a))},
$S:14}
V.im.prototype={
$0:function(){var u=C.e.am(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.ip.prototype={
$1:function(a){return H.h(a,"$ibw").a===this.a},
$S:55}
K.kN.prototype={
$1:function(a){var u,t,s,r,q=H.t(H.h(a,"$iC"),"$ie9").c,p=this.a,o=this.b.ax(0,q,null)
if(!J.P(p.d,o)){u=p.d
t=u==null
s=o==null
if(!(!t&&s))t=t&&!s
else t=!0
if(t)p.a=null
p.d=o
o=new D.M("colorMatrix",u,o,[V.ak])
o.b=!0
p.Y(o)}r=V.o3(this.c.ax(0,q,null))
if(!J.P(p.b,r)){o=p.b
u=o==null&&!0
if(u)p.a=null
p.b=r
o=new D.M("texture2DMatrix",o,r,[V.c0])
o.b=!0
p.Y(o)}},
$S:5}
K.kO.prototype={
$0:function(){this.a.sai(0,F.lD(1,null,null,1))},
$S:0}
K.kP.prototype={
$0:function(){this.a.sai(0,F.mW(!0,40,1))},
$S:0}
K.kQ.prototype={
$0:function(){this.a.sai(0,F.mW(!1,40,0))},
$S:0}
K.kR.prototype={
$0:function(){this.a.sai(0,F.pV(6,6))},
$S:0}
K.kS.prototype={
$0:function(){this.a.sai(0,F.nb())},
$S:0}
K.kT.prototype={
$0:function(){this.a.sai(0,F.pN())},
$S:0}
K.kU.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iC")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dg("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dg("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.ew=u.i
u=J.dL.prototype
u.ey=u.i
u=P.k.prototype
u.ex=u.bv
u=W.U.prototype
u.by=u.ab
u=W.eS.prototype
u.eA=u.at
u=O.cG.prototype
u.cA=u.aB
u=O.b7.prototype
u.cB=u.aB
u=V.dR.prototype
u.ez=u.aG
u.cz=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ps","oB",12)
u(P,"pt","oC",12)
u(P,"pu","oD",12)
t(P,"mV","pq",3)
s(W,"pG",4,null,["$4"],["oF"],28,0)
s(W,"pH",4,null,["$4"],["oG"],28,0)
var m
r(m=E.ap.prototype,"gdZ",0,0,null,["$1","$0"],["e_","iX"],1,0)
r(m,"gdX",0,0,null,["$1","$0"],["dY","iW"],1,0)
r(m,"gdV",0,0,null,["$1","$0"],["dW","iT"],1,0)
q(m,"giR","iS",10)
q(m,"giU","iV",10)
r(m=E.ee.prototype,"gcC",0,0,null,["$1","$0"],["cE","cD"],1,0)
p(m,"gjb","e8",3)
o(m=X.el.prototype,"gfS","fT",15)
o(m,"gfG","fH",15)
o(m,"gfM","fN",4)
o(m,"gfW","fX",31)
o(m,"gfU","fV",31)
o(m,"gh_","h0",4)
o(m,"gh3","h4",4)
o(m,"gfQ","fR",4)
o(m,"gh1","h2",4)
o(m,"gfO","fP",4)
o(m,"gh5","h6",36)
o(m,"gh7","h8",15)
o(m,"ghk","hl",13)
o(m,"ghg","hh",13)
o(m,"ghi","hj",13)
r(D.by.prototype,"gcF",0,0,null,["$1","$0"],["ay","eK"],1,0)
r(m=D.dN.prototype,"gd0",0,0,null,["$1","$0"],["d1","fY"],1,0)
o(m,"gha","hb",38)
q(m,"gfA","fB",26)
q(m,"ghe","hf",26)
n(V.a7.prototype,"gn","cg",24)
n(V.J.prototype,"gn","cg",24)
r(m=U.cB.prototype,"gbe",0,0,null,["$1","$0"],["R","ap"],1,0)
q(m,"gfw","fz",21)
q(m,"ghc","hd",21)
r(m=U.em.prototype,"gbe",0,0,null,["$1","$0"],["R","ap"],1,0)
o(m,"gfp","fq",2)
o(m,"gfs","ft",2)
o(m,"gfu","fv",2)
o(m,"gfk","fl",2)
o(m,"gfm","fn",2)
o(m,"ghU","hV",2)
o(m,"ghS","hT",2)
o(m,"ghQ","hR",2)
r(m=M.dF.prototype,"gaq",0,0,null,["$1","$0"],["az","eL"],1,0)
q(m,"gfI","fJ",10)
q(m,"gfK","fL",10)
r(m=O.dS.prototype,"gbh",0,0,null,["$1","$0"],["Y","bM"],1,0)
r(m,"ghx",0,0,null,["$1","$0"],["d5","hy"],1,0)
q(m,"gfC","fD",33)
q(m,"gfE","fF",33)
r(O.cG.prototype,"gbh",0,0,null,["$1","$0"],["Y","bM"],1,0)
r(X.dZ.prototype,"gcG",0,0,null,["$1","$0"],["aO","eR"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.ld,J.a,J.ax,P.eF,P.k,H.cF,P.b3,H.bW,H.d2,H.fF,H.iS,P.bA,H.cu,H.eX,P.ae,H.hj,H.hl,H.he,P.f2,P.bf,P.aJ,P.ep,P.ix,P.cV,P.iy,P.bb,P.ao,P.kn,P.k1,P.cb,P.eE,P.y,P.kf,P.hr,P.bU,P.ha,P.kl,P.kk,P.S,P.ay,P.aa,P.bz,P.i_,P.e8,P.ex,P.h4,P.bB,P.b,P.z,P.O,P.au,P.f,P.a6,P.cc,P.j6,P.k4,W.fI,W.bN,W.G,W.dX,W.eS,W.ka,W.dH,W.aA,W.k0,W.fa,P.k6,P.f7,P.jW,P.R,O.a2,O.cH,E.fz,E.ap,E.i8,D.C,E.ee,Z.eo,Z.ju,Z.dx,Z.bC,Z.bm,D.fC,D.bV,X.dy,X.dM,X.hg,X.ho,X.bF,X.hO,X.iO,X.el,D.by,D.ad,D.e_,D.e7,V.a3,V.b0,V.fW,V.c0,V.ak,V.ab,V.a5,V.bK,V.e2,V.a7,V.J,U.em,M.dF,A.du,A.fs,A.aj,A.aM,A.aQ,A.aU,A.hy,A.c6,A.c7,A.c9,A.eh,A.j0,F.a8,F.fZ,F.bl,F.hi,F.bI,F.e5,F.ii,F.ij,F.ik,F.av,F.ji,F.jj,F.jm,F.jo,F.jp,F.jq,O.c5,O.cG,O.hz,T.iI,V.bh,V.az,V.dR,V.i7,V.ih,V.cT,V.ef,V.cZ,V.iM,X.dz,X.eb,X.dZ,V.bw,V.i5,V.il])
s(J.a,[J.hd,J.dK,J.dL,J.b4,J.cE,J.bD,H.cK,H.bH,W.j,W.fp,W.bS,W.ct,W.b1,W.b2,W.W,W.er,W.fN,W.fO,W.et,W.dE,W.ev,W.fQ,W.m,W.ey,W.aN,W.h8,W.eA,W.bk,W.dP,W.hI,W.eG,W.eH,W.aO,W.eI,W.eL,W.aP,W.eP,W.eR,W.aS,W.eT,W.aT,W.eY,W.aF,W.f0,W.iL,W.aW,W.f3,W.iQ,W.jb,W.fb,W.fd,W.ff,W.fh,W.fj,P.b6,P.eC,P.b9,P.eN,P.i4,P.eZ,P.bc,P.f5,P.ft,P.eq,P.dv,P.e0,P.c4,P.e4,P.ec,P.ei,P.eV])
s(J.dL,[J.i0,J.ca,J.bE])
t(J.lc,J.b4)
s(J.cE,[J.dJ,J.dI])
t(P.hn,P.eF)
s(P.hn,[H.ej,W.jC,W.aq,P.h0])
t(H.r,H.ej)
s(P.k,[H.fT,H.hs,H.d4])
s(H.fT,[H.c_,H.hk])
s(P.b3,[H.ht,H.jv])
t(H.hu,H.c_)
t(H.fG,H.fF)
s(P.bA,[H.hX,H.hf,H.j4,H.iU,H.fB,H.ie,P.fr,P.dY,P.aL,P.j5,P.j2,P.cU,P.fE,P.fL])
s(H.cu,[H.l1,H.iE,H.kI,H.kJ,H.kK,P.jy,P.jx,P.jz,P.jA,P.ke,P.kd,P.jJ,P.jN,P.jK,P.jL,P.jM,P.jQ,P.jR,P.jP,P.jO,P.iz,P.iA,P.kx,P.jZ,P.jY,P.k_,P.hm,P.hq,P.fR,P.fS,P.ja,P.j7,P.j8,P.j9,P.kg,P.kh,P.kj,P.ki,P.kr,P.kq,P.ks,P.kt,W.fU,W.hK,W.hM,W.id,W.iw,W.jI,W.hV,W.hU,W.k2,W.k3,W.kc,W.km,P.k8,P.kz,P.h1,P.h2,P.fv,E.i9,E.ia,E.ib,E.iK,D.fX,D.fY,F.ko,F.kA,F.kC,F.kD,F.kE,F.kY,F.kZ,F.l0,F.kM,F.kB,F.js,F.jr,F.jk,F.jl,O.hC,O.hD,O.hE,O.hF,O.hG,O.hH,T.iJ,V.kX,V.i6,V.io,V.im,V.ip,K.kN,K.kO,K.kP,K.kQ,K.kR,K.kS,K.kT,K.kU])
s(H.iE,[H.iu,H.cr])
t(H.jw,P.fr)
t(P.hp,P.ae)
s(P.hp,[H.a1,W.jB])
t(H.dU,H.bH)
s(H.dU,[H.d9,H.db])
t(H.da,H.d9)
t(H.cL,H.da)
t(H.dc,H.db)
t(H.dV,H.dc)
s(H.dV,[H.hP,H.hQ,H.hR,H.hS,H.hT,H.dW,H.cM])
t(P.jX,P.kn)
t(P.jV,P.k1)
t(P.f8,P.hr)
t(P.ek,P.f8)
s(P.bU,[P.fx,P.fV])
t(P.bx,P.iy)
s(P.bx,[P.fy,P.h9,P.je,P.jd])
t(P.jc,P.fV)
s(P.aa,[P.v,P.l])
s(P.aL,[P.c3,P.hb])
t(P.jE,P.cc)
s(W.j,[W.E,W.h_,W.cI,W.aR,W.dd,W.aV,W.aG,W.df,W.jt,W.d5,P.fw,P.bR])
s(W.E,[W.U,W.bv,W.d6])
s(W.U,[W.x,P.p])
s(W.x,[W.ds,W.fq,W.cq,W.bu,W.bT,W.aD,W.h3,W.cC,W.cD,W.ig,W.ba,W.ea,W.iC,W.iD,W.cX])
s(W.b1,[W.cv,W.fJ,W.fK])
t(W.fH,W.b2)
t(W.cw,W.er)
t(W.eu,W.et)
t(W.dD,W.eu)
t(W.ew,W.ev)
t(W.fP,W.ew)
t(W.aE,W.bS)
t(W.ez,W.ey)
t(W.cz,W.ez)
t(W.eB,W.eA)
t(W.bX,W.eB)
t(W.bM,W.m)
s(W.bM,[W.b5,W.af,W.aX])
t(W.hJ,W.eG)
t(W.hL,W.eH)
t(W.eJ,W.eI)
t(W.hN,W.eJ)
t(W.eM,W.eL)
t(W.cN,W.eM)
t(W.eQ,W.eP)
t(W.i2,W.eQ)
t(W.ic,W.eR)
t(W.de,W.dd)
t(W.ir,W.de)
t(W.eU,W.eT)
t(W.is,W.eU)
t(W.iv,W.eY)
t(W.f1,W.f0)
t(W.iF,W.f1)
t(W.dg,W.df)
t(W.iG,W.dg)
t(W.f4,W.f3)
t(W.iP,W.f4)
t(W.be,W.af)
t(W.fc,W.fb)
t(W.jD,W.fc)
t(W.es,W.dE)
t(W.fe,W.fd)
t(W.jS,W.fe)
t(W.fg,W.ff)
t(W.eK,W.fg)
t(W.fi,W.fh)
t(W.k5,W.fi)
t(W.fk,W.fj)
t(W.k9,W.fk)
t(W.jF,W.jB)
t(W.jG,P.ix)
t(W.lp,W.jG)
t(W.jH,P.cV)
t(W.kb,W.eS)
t(P.k7,P.k6)
t(P.am,P.jW)
t(P.eD,P.eC)
t(P.hh,P.eD)
t(P.eO,P.eN)
t(P.hY,P.eO)
t(P.cR,P.p)
t(P.f_,P.eZ)
t(P.iB,P.f_)
t(P.f6,P.f5)
t(P.iR,P.f6)
t(P.fu,P.eq)
t(P.hZ,P.bR)
t(P.eW,P.eV)
t(P.it,P.eW)
s(D.C,[E.e9,D.bY,D.bZ,D.M,X.i3])
s(E.fz,[Z.dw,A.cS,T.cY])
s(X.i3,[X.dQ,X.bG,X.eg])
s(O.a2,[D.dN,U.cB])
s(D.fC,[U.fD,U.al])
s(U.al,[U.dA,U.e3])
t(A.hv,A.cS)
s(A.eh,[A.aH,A.iY,A.iZ,A.j_,A.iW,A.ah,A.iX,A.Z,A.d0,A.j1,A.d1,A.aB,A.an,A.c8])
t(F.iq,F.fZ)
t(F.iV,F.hi)
t(F.jn,F.jo)
t(F.hW,F.jp)
t(O.dS,O.c5)
s(O.cG,[O.hw,O.hx,O.b7])
s(O.b7,[O.hA,O.hB])
t(T.ed,T.cY)
t(T.iH,T.ed)
s(V.dR,[V.at,V.d_])
t(X.h5,X.eb)
s(V.bw,[V.fM,V.h6,V.h7,V.i1])
u(H.ej,H.d2)
u(H.d9,P.y)
u(H.da,H.bW)
u(H.db,P.y)
u(H.dc,H.bW)
u(P.eF,P.y)
u(P.f8,P.kf)
u(W.er,W.fI)
u(W.et,P.y)
u(W.eu,W.G)
u(W.ev,P.y)
u(W.ew,W.G)
u(W.ey,P.y)
u(W.ez,W.G)
u(W.eA,P.y)
u(W.eB,W.G)
u(W.eG,P.ae)
u(W.eH,P.ae)
u(W.eI,P.y)
u(W.eJ,W.G)
u(W.eL,P.y)
u(W.eM,W.G)
u(W.eP,P.y)
u(W.eQ,W.G)
u(W.eR,P.ae)
u(W.dd,P.y)
u(W.de,W.G)
u(W.eT,P.y)
u(W.eU,W.G)
u(W.eY,P.ae)
u(W.f0,P.y)
u(W.f1,W.G)
u(W.df,P.y)
u(W.dg,W.G)
u(W.f3,P.y)
u(W.f4,W.G)
u(W.fb,P.y)
u(W.fc,W.G)
u(W.fd,P.y)
u(W.fe,W.G)
u(W.ff,P.y)
u(W.fg,W.G)
u(W.fh,P.y)
u(W.fi,W.G)
u(W.fj,P.y)
u(W.fk,W.G)
u(P.eC,P.y)
u(P.eD,W.G)
u(P.eN,P.y)
u(P.eO,W.G)
u(P.eZ,P.y)
u(P.f_,W.G)
u(P.f5,P.y)
u(P.f6,W.G)
u(P.eq,P.ae)
u(P.eV,P.y)
u(P.eW,W.G)})()
var v={mangledGlobalNames:{l:"int",v:"double",aa:"num",f:"String",S:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.O,args:[D.C]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[F.a8]},{func:1,ret:P.O,args:[F.av,P.v,P.v]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.l,[P.k,E.ap]]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:P.O,args:[W.m]},{func:1,ret:-1,args:[W.m]},{func:1,ret:V.a5,args:[P.v]},{func:1,ret:P.O,args:[,]},{func:1,ret:P.f,args:[P.l]},{func:1,ret:P.v,args:[P.v]},{func:1,ret:P.v,args:[P.v,P.v]},{func:1,ret:-1,args:[P.l,[P.k,U.al]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.v},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.k,D.ad]]},{func:1,ret:P.S,args:[W.E]},{func:1,ret:P.S,args:[W.U,P.f,P.f,W.bN]},{func:1,ret:P.S,args:[W.aA]},{func:1,ret:P.S,args:[P.f]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:-1,args:[P.l,[P.k,V.ak]]},{func:1,ret:W.U,args:[W.E]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:-1,args:[W.be]},{func:1,args:[W.m]},{func:1,ret:P.S,args:[[P.k,D.ad]]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.O,args:[P.f,,]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.l]},{func:1,ret:[P.z,P.f,P.f],args:[[P.z,P.f,P.f],P.f]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.O,args:[,],opt:[P.au]},{func:1,ret:P.R,args:[P.l]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:P.l,args:[A.aM,A.aM]},{func:1,ret:P.l,args:[A.aQ,A.aQ]},{func:1,ret:P.l,args:[A.aU,A.aU]},{func:1,args:[P.f]},{func:1,ret:P.O,args:[P.bb]},{func:1,ret:P.S,args:[V.bw]},{func:1,args:[,P.f]},{func:1,ret:P.O,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bu.prototype
C.j=W.bT.prototype
C.O=W.aD.prototype
C.R=J.a.prototype
C.a=J.b4.prototype
C.S=J.dI.prototype
C.d=J.dJ.prototype
C.v=J.dK.prototype
C.e=J.cE.prototype
C.b=J.bD.prototype
C.T=J.bE.prototype
C.Z=W.cN.prototype
C.B=J.i0.prototype
C.c=P.c4.prototype
C.a_=W.ba.prototype
C.C=W.ea.prototype
C.q=J.ca.prototype
C.D=W.be.prototype
C.E=W.d5.prototype
C.a0=new P.fy()
C.F=new P.fx()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=function() {
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
C.L=function(getTagFallback) {
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
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.K=function(hooks) {
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
C.J=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.M=new P.i_()
C.h=new P.jc()
C.N=new P.je()
C.f=new P.jX()
C.n=new P.bz(0)
C.P=new P.bz(5e6)
C.Q=new P.ha("element",!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.l])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.U=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.V=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.x=H.d(u([]),[P.f])
C.W=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.X=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.o=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.p=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.Y=new H.fG(0,{},C.x,[P.f,P.f])})();(function staticFields(){$.b_=0
$.cs=null
$.lT=null
$.lv=!1
$.n1=null
$.mT=null
$.n8=null
$.kF=null
$.kL=null
$.lF=null
$.cf=null
$.dj=null
$.dk=null
$.lw=!1
$.a0=C.f
$.aw=[]
$.bj=null
$.l9=null
$.m_=null
$.lZ=null
$.d8=P.lf(P.f,P.bB)
$.m8=null
$.mc=null
$.cO=null
$.mi=null
$.mw=null
$.mz=null
$.my=null
$.jf=null
$.jg=null
$.jh=null
$.mx=null
$.mb=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q3","nd",function(){return H.n0("_$dart_dartClosure")})
u($,"q4","lL",function(){return H.n0("_$dart_js")})
u($,"qa","ne",function(){return H.bd(H.iT({
toString:function(){return"$receiver$"}}))})
u($,"qb","nf",function(){return H.bd(H.iT({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qc","ng",function(){return H.bd(H.iT(null))})
u($,"qd","nh",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qg","nk",function(){return H.bd(H.iT(void 0))})
u($,"qh","nl",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qf","nj",function(){return H.bd(H.mq(null))})
u($,"qe","ni",function(){return H.bd(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qj","nn",function(){return H.bd(H.mq(void 0))})
u($,"qi","nm",function(){return H.bd(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qA","lM",function(){return P.oA()})
u($,"qm","no",function(){return P.ow()})
u($,"qB","ns",function(){return H.o4(H.ce(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qD","nu",function(){return P.oi("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qE","nv",function(){return P.p_()})
u($,"qC","nt",function(){return P.m3(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qt","nr",function(){return Z.aI(0)})
u($,"qn","np",function(){return Z.aI(511)})
u($,"qv","br",function(){return Z.aI(1)})
u($,"qu","bq",function(){return Z.aI(2)})
u($,"qp","bp",function(){return Z.aI(4)})
u($,"qw","bs",function(){return Z.aI(8)})
u($,"qx","bQ",function(){return Z.aI(16)})
u($,"qq","dn",function(){return Z.aI(32)})
u($,"qr","dp",function(){return Z.aI(64)})
u($,"qs","nq",function(){return Z.aI(96)})
u($,"qy","cp",function(){return Z.aI(128)})
u($,"qo","bo",function(){return Z.aI(256)})
u($,"q2","nc",function(){return new V.fW(1e-9)})
u($,"q1","K",function(){return $.nc()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cK,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.cL,Float64Array:H.cL,Int16Array:H.hP,Int32Array:H.hQ,Int8Array:H.hR,Uint16Array:H.hS,Uint32Array:H.hT,Uint8ClampedArray:H.dW,CanvasPixelArray:H.dW,Uint8Array:H.cM,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fp,HTMLAnchorElement:W.ds,HTMLAreaElement:W.fq,HTMLBaseElement:W.cq,Blob:W.bS,HTMLBodyElement:W.bu,HTMLCanvasElement:W.bT,CanvasRenderingContext2D:W.ct,CDATASection:W.bv,CharacterData:W.bv,Comment:W.bv,ProcessingInstruction:W.bv,Text:W.bv,CSSNumericValue:W.cv,CSSUnitValue:W.cv,CSSPerspective:W.fH,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cw,MSStyleCSSProperties:W.cw,CSS2Properties:W.cw,CSSImageValue:W.b1,CSSKeywordValue:W.b1,CSSPositionValue:W.b1,CSSResourceValue:W.b1,CSSURLImageValue:W.b1,CSSStyleValue:W.b1,CSSMatrixComponent:W.b2,CSSRotation:W.b2,CSSScale:W.b2,CSSSkew:W.b2,CSSTranslation:W.b2,CSSTransformComponent:W.b2,CSSTransformValue:W.fJ,CSSUnparsedValue:W.fK,DataTransferItemList:W.fN,HTMLDivElement:W.aD,DOMException:W.fO,ClientRectList:W.dD,DOMRectList:W.dD,DOMRectReadOnly:W.dE,DOMStringList:W.fP,DOMTokenList:W.fQ,Element:W.U,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aE,FileList:W.cz,FileWriter:W.h_,HTMLFormElement:W.h3,Gamepad:W.aN,History:W.h8,HTMLCollection:W.bX,HTMLFormControlsCollection:W.bX,HTMLOptionsCollection:W.bX,ImageData:W.bk,HTMLImageElement:W.cC,HTMLInputElement:W.cD,KeyboardEvent:W.b5,Location:W.dP,MediaList:W.hI,MessagePort:W.cI,MIDIInputMap:W.hJ,MIDIOutputMap:W.hL,MimeType:W.aO,MimeTypeArray:W.hN,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.aP,PluginArray:W.i2,RTCStatsReport:W.ic,HTMLSelectElement:W.ig,SourceBuffer:W.aR,SourceBufferList:W.ir,SpeechGrammar:W.aS,SpeechGrammarList:W.is,SpeechRecognitionResult:W.aT,Storage:W.iv,CSSStyleSheet:W.aF,StyleSheet:W.aF,HTMLTableCellElement:W.ba,HTMLTableDataCellElement:W.ba,HTMLTableHeaderCellElement:W.ba,HTMLTableElement:W.ea,HTMLTableRowElement:W.iC,HTMLTableSectionElement:W.iD,HTMLTemplateElement:W.cX,TextTrack:W.aV,TextTrackCue:W.aG,VTTCue:W.aG,TextTrackCueList:W.iF,TextTrackList:W.iG,TimeRanges:W.iL,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iP,TrackDefaultList:W.iQ,CompositionEvent:W.bM,FocusEvent:W.bM,TextEvent:W.bM,UIEvent:W.bM,URL:W.jb,VideoTrackList:W.jt,WheelEvent:W.be,Window:W.d5,DOMWindow:W.d5,Attr:W.d6,CSSRuleList:W.jD,ClientRect:W.es,DOMRect:W.es,GamepadList:W.jS,NamedNodeMap:W.eK,MozNamedAttrMap:W.eK,SpeechRecognitionResultList:W.k5,StyleSheetList:W.k9,SVGLength:P.b6,SVGLengthList:P.hh,SVGNumber:P.b9,SVGNumberList:P.hY,SVGPointList:P.i4,SVGScriptElement:P.cR,SVGStringList:P.iB,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bc,SVGTransformList:P.iR,AudioBuffer:P.ft,AudioParamMap:P.fu,AudioTrackList:P.fw,AudioContext:P.bR,webkitAudioContext:P.bR,BaseAudioContext:P.bR,OfflineAudioContext:P.hZ,WebGLBuffer:P.dv,WebGLProgram:P.e0,WebGL2RenderingContext:P.c4,WebGLShader:P.e4,WebGLTexture:P.ec,WebGLUniformLocation:P.ei,SQLResultSetRowList:P.it})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dV.$nativeSuperclassTag="ArrayBufferView"
W.dd.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.n4,[])
else K.n4([])})})()
//# sourceMappingURL=test.dart.js.map
