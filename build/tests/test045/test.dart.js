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
a[c]=function(){a[c]=function(){H.q6(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lO(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ln:function ln(){},
kR:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hn:function(){return new P.cZ("No element")},
o2:function(){return new P.cZ("Too many elements")},
eg:function(a,b,c,d,e){if(c-b<=32)H.ow(a,b,c,d,e)
else H.ov(a,b,c,d,e)},
ow:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a3()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
ov:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.ac(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.ac(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.e(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.e(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.e(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.e(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.e(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=q
q=r
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.e(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.e(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.P(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.P()
if(k<0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a3()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.e(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.P()
if(g<0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a3()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a3()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.e(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.e(a2,a1)
C.a.k(a2,a3,a2[a1])
C.a.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.e(a2,a1)
C.a.k(a2,a4,a2[a1])
C.a.k(a2,a1,r)
H.eg(a2,a3,o-2,a5,a6)
H.eg(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.e(a2,o)
if(!J.P(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.e(a2,n)
if(!J.P(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.e(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}H.eg(a2,o,n,a5,a6)}else H.eg(a2,o,n,a5,a6)},
t:function t(a){this.a=a},
h2:function h2(){},
c2:function c2(){},
cL:function cL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.$ti=c},
hE:function hE(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
jE:function jE(a,b,c){this.a=a
this.b=b
this.$ti=c},
c0:function c0(){},
d8:function d8(){},
eq:function eq(){},
nV:function(){throw H.d(P.J("Cannot modify unmodifiable Map"))},
cs:function(a){var u,t=H.q7(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pO:function(a){return v.types[H.ab(a)]},
pV:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iM},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.d(H.b_(a))
return u},
cT:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
on:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.N(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.ai(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.C(s,q)|32)>t)return}return parseInt(a,b)},
cU:function(a){return H.oe(a)+H.lK(H.bT(a),0,null)},
oe:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$icd){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cs(t.length>1&&C.b.C(t,0)===36?C.b.ag(t,1):t)},
of:function(){if(!!self.location)return self.location.href
return},
mo:function(a){var u,t,s,r,q=J.aC(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
oo:function(a){var u,t,s,r=H.c([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.b_(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aR(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.b_(s))}return H.mo(r)},
mp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.b_(s))
if(s<0)throw H.d(H.b_(s))
if(s>65535)return H.oo(a)}return H.mo(a)},
op:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c5:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aR(u,10))>>>0,56320|u&1023)}}throw H.d(P.ai(a,0,1114111,null,null))},
c4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
om:function(a){var u=H.c4(a).getFullYear()+0
return u},
ok:function(a){var u=H.c4(a).getMonth()+1
return u},
og:function(a){var u=H.c4(a).getDate()+0
return u},
oh:function(a){var u=H.c4(a).getHours()+0
return u},
oj:function(a){var u=H.c4(a).getMinutes()+0
return u},
ol:function(a){var u=H.c4(a).getSeconds()+0
return u},
oi:function(a){var u=H.c4(a).getMilliseconds()+0
return u},
E:function(a){throw H.d(H.b_(a))},
e:function(a,b){if(a==null)J.aC(a)
throw H.d(H.cm(a,b))},
cm:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,s,null)
u=H.ab(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.ec(b,s)},
pJ:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c6(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c6(a,c,!0,b,"end",u)
return new P.aM(!0,b,"end",null)},
b_:function(a){return new P.aM(!0,a,null,null)},
pE:function(a){if(typeof a!=="number")throw H.d(H.b_(a))
return a},
d:function(a){var u
if(a==null)a=new P.e8()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nk})
u.name=""}else u.toString=H.nk
return u},
nk:function(){return J.at(this.dartException)},
A:function(a){throw H.d(a)},
u:function(a){throw H.d(P.bj(a))},
be:function(a){var u,t,s,r,q,p
a=H.nj(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mz:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mi:function(a,b){return new H.i6(a,b==null?null:b.method)},
lo:function(a,b){var u=b==null,t=u?null:b.method
return new H.hq(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.lb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aR(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lo(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mi(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.no()
q=$.np()
p=$.nq()
o=$.nr()
n=$.nu()
m=$.nv()
l=$.nt()
$.ns()
k=$.nx()
j=$.nw()
i=r.an(u)
if(i!=null)return f.$1(H.lo(H.N(u),i))
else{i=q.an(u)
if(i!=null){i.method="call"
return f.$1(H.lo(H.N(u),i))}else{i=p.an(u)
if(i==null){i=o.an(u)
if(i==null){i=n.an(u)
if(i==null){i=m.an(u)
if(i==null){i=l.an(u)
if(i==null){i=o.an(u)
if(i==null){i=k.an(u)
if(i==null){i=j.an(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mi(H.N(u),i))}}return f.$1(new H.je(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.eh()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aM(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.eh()
return a},
cq:function(a){var u
if(a==null)return new H.f4(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f4(a)},
pN:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pU:function(a,b,c,d,e,f){H.f(a,"$ibz")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.B("Unsupported number of arguments for wrapped closure"))},
cl:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pU)
a.$identity=u
return u},
nU:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iE().constructor.prototype):Object.create(new H.cv(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b1
if(typeof t!=="number")return t.A()
$.b1=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.m5(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nQ(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.m5(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nQ:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pO,a)
if(typeof a=="function")if(b)return a
else{u=c?H.m4:H.lf
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
nR:function(a,b,c,d){var u=H.lf
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
m5:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nT(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nR(t,!r,u,b)
if(t===0){r=$.b1
if(typeof r!=="number")return r.A()
$.b1=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cw
return new Function(r+H.i(q==null?$.cw=H.fJ("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b1
if(typeof r!=="number")return r.A()
$.b1=r+1
o+=r
r="return function("+o+"){return this."
q=$.cw
return new Function(r+H.i(q==null?$.cw=H.fJ("self"):q)+"."+H.i(u)+"("+o+");}")()},
nS:function(a,b,c,d){var u=H.lf,t=H.m4
switch(b?-1:a){case 0:throw H.d(H.ot("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nT:function(a,b){var u,t,s,r,q,p,o,n=$.cw
if(n==null)n=$.cw=H.fJ("self")
u=$.m3
if(u==null)u=$.m3=H.fJ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nS(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b1
if(typeof u!=="number")return u.A()
$.b1=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b1
if(typeof u!=="number")return u.A()
$.b1=u+1
return new Function(n+u+"}")()},
lO:function(a,b,c,d,e,f,g){return H.nU(a,b,c,d,!!e,!!f,g)},
lf:function(a){return a.a},
m4:function(a){return a.c},
fJ:function(a){var u,t,s,r=new H.cv("self","target","receiver","name"),q=J.ll(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
I:function(a){if(a==null)H.pA("boolean expression must not be null")
return a},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aZ(a,"String"))},
pK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aZ(a,"double"))},
nf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aZ(a,"num"))},
lL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aZ(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aZ(a,"int"))},
nh:function(a,b){throw H.d(H.aZ(a,H.cs(H.N(b).substring(2))))},
q0:function(a,b){throw H.d(H.nP(a,H.cs(H.N(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.nh(a,b)},
y:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.q0(a,b)},
qR:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.d(H.aZ(a,"List<dynamic>"))},
nd:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.nh(a,b)},
n8:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ab(u)]
else return a.$S()}return},
ft:function(a,b){var u
if(typeof a=="function")return!0
u=H.n8(J.T(a))
if(u==null)return!1
return H.mW(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lH)return a
$.lH=!0
try{if(H.ft(a,b))return a
u=H.l5(b)
t=H.aZ(a,u)
throw H.d(t)}finally{$.lH=!1}},
lQ:function(a,b){if(a!=null&&!H.lN(a,b))H.A(H.aZ(a,H.l5(b)))
return a},
aZ:function(a,b){return new H.j3("TypeError: "+P.dO(a)+": type '"+H.i(H.n1(a))+"' is not a subtype of type '"+b+"'")},
nP:function(a,b){return new H.fK("CastError: "+P.dO(a)+": type '"+H.i(H.n1(a))+"' is not a subtype of type '"+b+"'")},
n1:function(a){var u,t=J.T(a)
if(!!t.$icz){u=H.n8(t)
if(u!=null)return H.l5(u)
return"Closure"}return H.cU(a)},
pA:function(a){throw H.d(new H.jF(a))},
q6:function(a){throw H.d(new P.fU(a))},
ot:function(a){return new H.iq(a)},
na:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bT:function(a){if(a==null)return
return a.$ti},
qQ:function(a,b,c){return H.cr(a["$a"+H.i(c)],H.bT(b))},
cp:function(a,b,c,d){var u=H.cr(a["$a"+H.i(c)],H.bT(b))
return u==null?null:u[d]},
al:function(a,b,c){var u=H.cr(a["$a"+H.i(b)],H.bT(a))
return u==null?null:u[c]},
q:function(a,b){var u=H.bT(a)
return u==null?null:u[b]},
l5:function(a){return H.bS(a,null)},
bS:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cs(a[0].name)+H.lK(a,1,b)
if(typeof a=="function")return H.cs(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.p9(a,b)
if('futureOr' in a)return"FutureOr<"+H.bS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p9:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.e(a0,m)
p=C.b.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.V)p+=" extends "+H.bS(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bS(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bS(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bS(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pM(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.N(n[g])
i=i+h+H.bS(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lK:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a5("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bS(p,c)}return"<"+u.i(0)+">"},
cr:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lM:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bT(a)
t=J.T(a)
if(t[b]==null)return!1
return H.n4(H.cr(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.lM(a,b,c,d))return a
throw H.d(H.aZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cs(b.substring(2))+H.lK(c,0,null),v.mangledGlobalNames)))},
n4:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aL(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aL(a[t],b,c[t],d))return!1
return!0},
qO:function(a,b,c){return a.apply(b,H.cr(J.T(b)["$a"+H.i(c)],H.bT(b)))},
nc:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="V"||a.name==="O"||a===-1||a===-2||H.nc(u)}return!1},
lN:function(a,b){var u,t
if(a==null)return b==null||b.name==="V"||b.name==="O"||b===-1||b===-2||H.nc(b)
if(b==null||b===-1||b.name==="V"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lN(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ft(a,b)}u=J.T(a).constructor
t=H.bT(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aL(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.lN(a,b))throw H.d(H.aZ(a,H.l5(b)))
return a},
aL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="V"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="V"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aL(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aL("type" in a?a.type:l,b,s,d)
else if(H.aL(a,b,s,d))return!0
else{if(!('$i'+"cF" in t.prototype))return!1
r=t.prototype["$a"+"cF"]
q=H.cr(r,u?a.slice(1):l)
return H.aL(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mW(a,b,c,d)
if('func' in a)return c.name==="bz"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.n4(H.cr(m,u),b,p,d)},
mW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aL(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aL(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aL(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aL(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pZ(h,b,g,d)},
pZ:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aL(c[s],d,a[s],b))return!1}return!0},
qP:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pX:function(a){var u,t,s,r,q=H.N($.nb.$1(a)),p=$.kP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.N($.n3.$2(a,q))
if(q!=null){p=$.kP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.l4(u)
$.kP[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kV[q]=u
return u}if(s==="-"){r=H.l4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ng(a,u)
if(s==="*")throw H.d(P.jd(q))
if(v.leafTags[q]===true){r=H.l4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ng(a,u)},
ng:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lS(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l4:function(a){return J.lS(a,!1,null,!!a.$iM)},
pY:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l4(u)
else return J.lS(u,c,null,null)},
pS:function(){if(!0===$.lR)return
$.lR=!0
H.pT()},
pT:function(){var u,t,s,r,q,p,o,n
$.kP=Object.create(null)
$.kV=Object.create(null)
H.pR()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ni.$1(q)
if(p!=null){o=H.pY(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pR:function(){var u,t,s,r,q,p,o=C.G()
o=H.ck(C.H,H.ck(C.I,H.ck(C.v,H.ck(C.v,H.ck(C.J,H.ck(C.K,H.ck(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.nb=new H.kS(r)
$.n3=new H.kT(q)
$.ni=new H.kU(p)},
ck:function(a,b){return a(b)||b},
o4:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.a4("Illegal RegExp pattern ("+String(p)+")",a,null))},
q4:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pL:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nj:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lU:function(a,b,c){var u=H.q5(a,b,c)
return u},
q5:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nj(b),'g'),H.pL(c))},
fO:function fO(){},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j1:function j1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i6:function i6(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a){this.a=a},
lb:function lb(a){this.a=a},
f4:function f4(a){this.a=a
this.b=null},
cz:function cz(){},
iO:function iO(){},
iE:function iE(){},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a){this.a=a},
fK:function fK(a){this.a=a},
iq:function iq(a){this.a=a},
jF:function jF(a){this.a=a},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hv:function hv(a,b){this.a=a
this.$ti=b},
hw:function hw(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ci:function(a){return a},
od:function(a){return new Int8Array(a)},
bh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.cm(b,a))},
p7:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.pJ(a,b,c))
return b},
cP:function cP(){},
bH:function bH(){},
e4:function e4(){},
cQ:function cQ(){},
e5:function e5(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
e6:function e6(){},
cR:function cR(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
pM:function(a){return J.mc(a?Object.keys(a):[],null)},
q7:function(a){return v.mangledGlobalNames[a]},
q_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lS:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kQ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lR==null){H.pS()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.jd("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lW()]
if(r!=null)return r
r=H.pX(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lW(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
o3:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.le(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ai(a,0,4294967295,"length",null))
return J.mc(new Array(a),b)},
mc:function(a,b){return J.ll(H.c(a,[b]))},
ll:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dS.prototype
return J.dR.prototype}if(typeof a=="string")return J.bD.prototype
if(a==null)return J.dT.prototype
if(typeof a=="boolean")return J.ho.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.V)return a
return J.kQ(a)},
ds:function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.V)return a
return J.kQ(a)},
fu:function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.V)return a
return J.kQ(a)},
n9:function(a){if(typeof a=="number")return J.cK.prototype
if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.cd.prototype
return a},
dt:function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.cd.prototype
return a},
co:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.V)return a
return J.kQ(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).p(a,b)},
lY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n9(a).B(a,b)},
dx:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pV(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ds(a).j(a,b)},
lc:function(a,b,c){return J.fu(a).k(a,b,c)},
nG:function(a,b){return J.dt(a).C(a,b)},
nH:function(a,b,c){return J.co(a).hC(a,b,c)},
nI:function(a,b,c,d){return J.co(a).i6(a,b,c,d)},
nJ:function(a,b){return J.dt(a).W(a,b)},
ld:function(a,b){return J.n9(a).ik(a,b)},
fw:function(a,b){return J.fu(a).J(a,b)},
nK:function(a,b,c,d){return J.co(a).iw(a,b,c,d)},
lZ:function(a,b){return J.fu(a).G(a,b)},
nL:function(a){return J.co(a).gig(a)},
m_:function(a){return J.co(a).gc2(a)},
dy:function(a){return J.T(a).gH(a)},
br:function(a){return J.fu(a).gS(a)},
aC:function(a){return J.ds(a).gn(a)},
m0:function(a){return J.fu(a).j3(a)},
nM:function(a,b){return J.co(a).j6(a,b)},
nN:function(a,b,c){return J.dt(a).q(a,b,c)},
nO:function(a){return J.dt(a).jg(a)},
at:function(a){return J.T(a).i(a)},
a:function a(){},
ho:function ho(){},
dT:function dT(){},
dU:function dU(){},
ia:function ia(){},
cd:function cd(){},
bE:function bE(){},
b5:function b5(a){this.$ti=a},
lm:function lm(a){this.$ti=a},
am:function am(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cK:function cK(){},
dS:function dS(){},
dR:function dR(){},
bD:function bD(){}},P={
oJ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pB()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cl(new P.jH(s),1)).observe(u,{childList:true})
return new P.jG(s,u,t)}else if(self.setImmediate!=null)return P.pC()
return P.pD()},
oK:function(a){self.scheduleImmediate(H.cl(new P.jI(H.n(a,{func:1,ret:-1})),0))},
oL:function(a){self.setImmediate(H.cl(new P.jJ(H.n(a,{func:1,ret:-1})),0))},
oM:function(a){P.lw(C.o,H.n(a,{func:1,ret:-1}))},
lw:function(a,b){var u=C.d.ac(a.a,1000)
return P.oS(u<0?0:u,b)},
my:function(a,b){var u=C.d.ac(a.a,1000)
return P.oT(u<0?0:u,b)},
oS:function(a,b){var u=new P.fa()
u.eV(a,b)
return u},
oT:function(a,b){var u=new P.fa()
u.eW(a,b)
return u},
oN:function(a,b){var u,t,s
b.a=1
try{a.ek(new P.jT(b),new P.jU(b),null)}catch(s){u=H.aj(s)
t=H.cq(s)
P.q1(new P.jV(b,u,t))}},
mM:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaK")
if(u>=4){t=b.bR()
b.a=a.a
b.c=a.c
P.dd(b,t)}else{t=H.f(b.c,"$ibg")
b.a=2
b.c=a
a.d7(t)}},
dd:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
P.kF(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.dd(h.a,b)}g=h.a
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
if(m){H.f(q,"$ian")
P.kF(i,i,g.b,q.a,q.b)
return}l=$.a0
if(l!==n)$.a0=n
else l=i
g=b.c
if((g&15)===8)new P.jZ(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jY(u,b,q).$0()}else if((g&2)!==0)new P.jX(h,u,b).$0()
if(l!=null)$.a0=l
g=u.b
if(!!J.T(g).$icF){if(g.a>=4){k=H.f(o.c,"$ibg")
o.c=null
b=o.bj(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mM(g,o)
return}}j=b.b
k=H.f(j.c,"$ibg")
j.c=null
b=j.bj(k)
g=u.a
p=u.b
if(!g){H.D(p,H.q(j,0))
j.a=4
j.c=p}else{H.f(p,"$ian")
j.a=8
j.c=p}h.a=j
g=j}},
pw:function(a,b){if(H.ft(a,{func:1,args:[P.V,P.av]}))return H.n(a,{func:1,ret:null,args:[P.V,P.av]})
if(H.ft(a,{func:1,args:[P.V]}))return H.n(a,{func:1,ret:null,args:[P.V]})
throw H.d(P.le(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pv:function(){var u,t
for(;u=$.cj,u!=null;){$.dr=null
t=u.b
$.cj=t
if(t==null)$.dq=null
u.a.$0()}},
pz:function(){$.lI=!0
try{P.pv()}finally{$.dr=null
$.lI=!1
if($.cj!=null)$.lX().$1(P.n5())}},
n0:function(a){var u=new P.ex(a)
if($.cj==null){$.cj=$.dq=u
if(!$.lI)$.lX().$1(P.n5())}else $.dq=$.dq.b=u},
py:function(a){var u,t,s=$.cj
if(s==null){P.n0(a)
$.dr=$.dq
return}u=new P.ex(a)
t=$.dr
if(t==null){u.b=s
$.cj=$.dr=u}else{u.b=t.b
$.dr=t.b=u
if(u.b==null)$.dq=u}},
q1:function(a){var u=null,t=$.a0
if(C.f===t){P.kH(u,u,C.f,a)
return}P.kH(u,u,t,H.n(t.bZ(a),{func:1,ret:-1}))},
mx:function(a,b){var u=$.a0
if(u===C.f)return P.lw(a,H.n(b,{func:1,ret:-1}))
return P.lw(a,H.n(u.bZ(b),{func:1,ret:-1}))},
oz:function(a,b){var u=$.a0
if(u===C.f)return P.my(a,H.n(b,{func:1,ret:-1,args:[P.bc]}))
return P.my(a,H.n(u.ds(b,P.bc),{func:1,ret:-1,args:[P.bc]}))},
kF:function(a,b,c,d,e){var u={}
u.a=d
P.py(new P.kG(u,e))},
mX:function(a,b,c,d,e){var u,t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
mY:function(a,b,c,d,e,f,g){var u,t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
px:function(a,b,c,d,e,f,g,h,i){var u,t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
kH:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bZ(d):c.ih(d,-1)
P.n0(d)},
jH:function jH(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(a){this.a=a},
jJ:function jJ(a){this.a=a},
fa:function fa(){this.c=0},
kn:function kn(a,b){this.a=a
this.b=b},
km:function km(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aK:function aK(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jS:function jS(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.b=b},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
jZ:function jZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k_:function k_(a){this.a=a},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a
this.b=null},
iH:function iH(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
d_:function d_(){},
iI:function iI(){},
bc:function bc(){},
an:function an(a,b){this.a=a
this.b=b},
kw:function kw(){},
kG:function kG(a,b){this.a=a
this.b=b},
k5:function k5(){},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
k6:function k6(a,b){this.a=a
this.b=b},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
o6:function(a,b){return new H.a2([a,b])},
lp:function(a,b){return new H.a2([a,b])},
o8:function(a){return H.pN(a,new H.a2([null,null]))},
dX:function(a){return new P.k3([a])},
lC:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oR:function(a,b,c){var u=new P.eM(a,b,[c])
u.c=a.e
return u},
o1:function(a,b,c){var u,t
if(P.lJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
C.a.h($.ax,a)
try{P.pa(a,u)}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=P.mv(b,H.nd(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
lk:function(a,b,c){var u,t
if(P.lJ(a))return b+"..."+c
u=new P.a5(b)
C.a.h($.ax,a)
try{t=u
t.a=P.mv(t.a,a,", ")}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lJ:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
pa:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.i(n.gI(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.e(b,-1)
t=b.pop()
if(0>=b.length)return H.e(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.w()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.e(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.w();r=q,q=p){p=n.gI(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.i(r)
t=H.i(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
o7:function(a,b,c){var u=P.o6(b,c)
a.G(0,new P.hx(u,b,c))
return u},
md:function(a,b){var u,t,s=P.dX(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.D(a[t],b))
return s},
lq:function(a){var u,t={}
if(P.lJ(a))return"{...}"
u=new P.a5("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lZ(a,new P.hB(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k3:function k3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cf:function cf(a){this.a=a
this.c=this.b=null},
eM:function eM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(){},
x:function x(){},
hA:function hA(){},
hB:function hB(a,b){this.a=a
this.b=b},
ag:function ag(){},
ko:function ko(){},
hC:function hC(){},
er:function er(a,b){this.a=a
this.$ti=b},
ka:function ka(){},
eN:function eN(){},
fg:function fg(){},
oD:function(a,b,c,d){if(b instanceof Uint8Array)return P.oE(!1,b,c,d)
return},
oE:function(a,b,c,d){var u,t,s=$.ny()
if(s==null)return
u=0===c
if(u&&!0)return P.lz(s,b)
t=b.length
d=P.bM(c,d,t)
if(u&&d===t)return P.lz(s,b)
return P.lz(s,b.subarray(c,d))},
lz:function(a,b){if(P.oG(b))return
return P.oH(a,b)},
oH:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
oG:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oF:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
n_:function(a,b,c){var u,t,s
for(u=J.ds(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.aq()
if((s&127)!==s)return t-b}return c-b},
m2:function(a,b,c,d,e,f){if(C.d.be(f,4)!==0)throw H.d(P.a4("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a4("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a4("Invalid base64 padding, more than two '=' characters",a,b))},
fG:function fG(){},
fH:function fH(){},
bZ:function bZ(){},
bw:function bw(){},
h4:function h4(){},
hl:function hl(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hk:function hk(a){this.a=a},
jm:function jm(){},
jo:function jo(){},
ku:function ku(a){this.b=0
this.c=a},
jn:function jn(a){this.a=a},
kt:function kt(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fv:function(a,b,c){var u=H.on(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a4(a,null,null))},
nZ:function(a){if(a instanceof H.cz)return a.i(0)
return"Instance of '"+H.i(H.cU(a))+"'"},
o9:function(a,b,c){var u,t=J.o3(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
me:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.br(a);u.w();)C.a.h(s,H.D(u.gI(u),c))
if(b)return s
return H.m(J.ll(s),"$ib",t,"$ab")},
d0:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib5",[P.l],"$ab5")
u=a.length
c=P.bM(b,c,u)
return H.mp(b>0||c<u?C.a.ez(a,b,c):a)}if(!!J.T(a).$icR)return H.op(a,b,P.bM(b,c,a.length))
return P.ox(a,b,c)},
ox:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.ai(b,0,J.aC(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.ai(c,b,J.aC(a),q,q))
t=J.br(a)
for(s=0;s<b;++s)if(!t.w())throw H.d(P.ai(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.w())throw H.d(P.ai(c,b,s,q,q))
r.push(t.gI(t))}return H.mp(r)},
or:function(a){return new H.hp(a,H.o4(a,!1,!0,!1,!1,!1))},
mv:function(a,b,c){var u=J.br(b)
if(!u.w())return a
if(c.length===0){do a+=H.i(u.gI(u))
while(u.w())}else{a+=H.i(u.gI(u))
for(;u.w();)a=a+c+H.i(u.gI(u))}return a},
mB:function(){var u=H.of()
if(u!=null)return P.oC(u)
throw H.d(P.J("'Uri.base' is not supported"))},
fh:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nE().b
if(typeof b!=="string")H.A(H.b_(b))
u=u.test(b)}else u=!1
if(u)return b
H.D(b,H.al(c,"bZ",0))
t=c.giv().c3(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c5(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nW:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dI:function(a){if(a>=10)return""+a
return"0"+a},
m7:function(a){return new P.bx(1000*a)},
dO:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nZ(a)},
dA:function(a){return new P.aM(!1,null,null,a)},
le:function(a,b,c){return new P.aM(!0,a,b,c)},
ec:function(a,b){return new P.c6(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
bM:function(a,b,c){if(0>a||a>c)throw H.d(P.ai(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.ai(b,a,c,"end",null))
return b}return c},
mq:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.d(P.ai(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.ab(e==null?J.aC(b):e)
return new P.hm(u,!0,a,c,"Index out of range")},
J:function(a){return new P.jf(a)},
jd:function(a){return new P.jc(a)},
mu:function(a){return new P.cZ(a)},
bj:function(a){return new P.fN(a)},
B:function(a){return new P.eF(a)},
a4:function(a,b,c){return new P.he(a,b,c)},
oa:function(a,b,c){var u,t=H.c([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lT:function(a){H.q_(a)},
oC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.C(a,4)^58)*3|C.b.C(a,0)^100|C.b.C(a,1)^97|C.b.C(a,2)^116|C.b.C(a,3)^97)>>>0
if(u===0)return P.mA(e<e?C.b.q(a,0,e):a,5,f).geq()
else if(u===32)return P.mA(C.b.q(a,5,e),0,f).geq()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.l])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.mZ(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.ji()
if(r>=0)if(P.mZ(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.E(n)
if(m<n)n=m
if(typeof o!=="number")return o.P()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.P()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.P()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a9(a,"..",o)))j=n>o+2&&C.b.a9(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a9(a,"file",0)){if(q<=0){if(!C.b.a9(a,"/",o)){i="file:///"
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
n=h}k="file"}else if(C.b.a9(a,"http",0)){if(t&&p+3===o&&C.b.a9(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a9(a,"https",0)){if(t&&p+4===o&&C.b.a9(a,"443",p+1)){g=o-4
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
m-=0}return new P.kd(a,r,q,p,o,n,m,k)}return P.oU(a,0,e,r,q,p,o,n,m,k)},
mD:function(a){var u=P.h
return C.a.iA(H.c(a.split("&"),[u]),P.lp(u,u),new P.jk(C.h),[P.z,P.h,P.h])},
oB:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jh(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fv(C.b.q(a,s,t),n,n)
if(typeof p!=="number")return p.a3()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fv(C.b.q(a,s,c),n,n)
if(typeof p!=="number")return p.a3()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.ji(a),d=new P.jj(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.W(a,t)
if(p===58){if(t===b){++t
if(C.b.W(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gaB(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.oB(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.e(l,i)
l[i]=0
f=i+1
if(f>=k)return H.e(l,f)
l[f]=0
i+=2}else{f=C.d.aR(h,8)
if(i<0||i>=k)return H.e(l,i)
l[i]=f
f=i+1
if(f>=k)return H.e(l,f)
l[f]=h&255
i+=2}}return l},
oU:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.p1(a,b,d)
else{if(d===b)P.ch(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.p2(a,u,e-1):""
s=P.oZ(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.E(g)
q=r<g?P.p0(P.fv(C.b.q(a,r,g),new P.kp(a,f),n),j):n}else{q=n
s=q
t=""}p=P.p_(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.lE(a,h+1,i,n):n
return new P.cg(j,t,s,q,p,o,i<c?P.oY(a,i+1,c):n)},
mQ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ch:function(a,b,c){throw H.d(P.a4(c,a,b))},
p0:function(a,b){if(a!=null&&a===P.mQ(b))return
return a},
oZ:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.O()
u=c-1
if(C.b.W(a,u)!==93)P.ch(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oW(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.mV(a,C.b.a9(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mC(a,t,s)
return C.b.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.E(c)
p=b
for(;p<c;++p)if(C.b.W(a,p)===58){s=C.b.bo(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mV(a,C.b.a9(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mC(a,b,s)
return"["+C.b.q(a,b,s)+q+"]"}return P.p4(a,b,c)},
oW:function(a,b,c){var u,t=C.b.bo(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.E(c)
u=t<c}else u=!1
return u?t:c},
mV:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a5(d):null
if(typeof c!=="number")return H.E(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.W(a,u)
if(r===37){q=P.lF(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a5("")
o=l.a+=C.b.q(a,t,u)
if(p)q=C.b.q(a,u,u+3)
else if(q==="%")P.ch(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a5("")
if(t<u){l.a+=C.b.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.W(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a5("")
l.a+=C.b.q(a,t,u)
l.a+=P.lD(r)
u+=m
t=u}}}if(l==null)return C.b.q(a,b,c)
if(t<c)l.a+=C.b.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
p4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.E(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.W(a,u)
if(q===37){p=P.lF(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a5("")
n=C.b.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a5("")
if(t<u){s.a+=C.b.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.ch(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a5("")
n=C.b.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lD(q)
u+=l
t=u}}}}if(s==null)return C.b.q(a,b,c)
if(t<c){n=C.b.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
p1:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mS(C.b.C(a,b)))P.ch(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.ch(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.q(a,b,c)
return P.oV(t?a.toLowerCase():a)},
oV:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p2:function(a,b,c){return P.dn(a,b,c,C.W,!1)},
p_:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dn(a,b,c,C.A,!0):C.k.jD(d,new P.kq(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a7(u,"/"))u="/"+u
return P.p3(u,e,f)},
p3:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a7(a,"/"))return P.p5(a,!u||c)
return P.p6(a)},
lE:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.dA("Both query and queryParameters specified"))
return P.dn(a,b,c,C.m,!0)}if(d==null)return
u=new P.a5("")
t.a=""
d.G(0,new P.kr(new P.ks(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oY:function(a,b,c){return P.dn(a,b,c,C.m,!0)},
lF:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.W(a,b+1)
t=C.b.W(a,p)
s=H.kR(u)
r=H.kR(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aR(q,4)
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c5(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
lD:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.C(o,a>>>4))
C.a.k(t,2,C.b.C(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.hQ(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.C(o,p>>>4))
C.a.k(t,q+2,C.b.C(o,p&15))
q+=3}}return P.d0(t,0,null)},
dn:function(a,b,c,d,e){var u=P.mU(a,b,c,d,e)
return u==null?C.b.q(a,b,c):u},
mU:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.E(c)
if(!(o<c))break
c$0:{u=C.b.W(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.e(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lF(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.e(C.l,t)
t=(C.l[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.ch(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.W(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lD(u)}}if(m==null)m=new P.a5("")
m.a+=C.b.q(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.E(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.b.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mT:function(a){if(C.b.a7(a,"."))return!0
return C.b.dS(a,"/.")!==-1},
p6:function(a){var u,t,s,r,q,p,o
if(!P.mT(a))return a
u=H.c([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.P(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
p5:function(a,b){var u,t,s,r,q,p
if(!P.mT(a))return!b?P.mR(a):a
u=H.c([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaB(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaB(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mR(u[0]))}return C.a.m(u,"/")},
mR:function(a){var u,t,s,r=a.length
if(r>=2&&P.mS(J.nG(a,0)))for(u=1;u<r;++u){t=C.b.C(a,u)
if(t===58)return C.b.q(a,0,u)+"%3A"+C.b.ag(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oX:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.dA("Invalid URL encoding"))}}return u},
lG:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.q(a,b,c)
else r=new H.t(C.b.q(a,b,c))}else{r=H.c([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.C(a,q)
if(t>127)throw H.d(P.dA("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.dA("Truncated URI"))
C.a.h(r,P.oX(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.jn(!1).c3(r)},
mS:function(a){var u=a|32
return 97<=u&&u<=122},
mA:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a4(m,a,t))}}if(s<0&&t>b)throw H.d(P.a4(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaB(l)
if(r!==44||t!==p+7||!C.b.a9(a,"base64",p+1))throw H.d(P.a4("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iN(0,a,o,u)
else{n=P.mU(a,o,u,C.m,!0)
if(n!=null)a=C.b.aW(a,o,u,n)}return new P.jg(a,l,c)},
p8:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.oa(22,new P.kA(),P.R),n=new P.kz(o),m=new P.kB(),l=new P.kC(),k=H.f(n.$2(0,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iR")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iR")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iR")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iR")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iR")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iR"),"]",5)
k=H.f(n.$2(9,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iR")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iR")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iR"),"az",21)
k=H.f(n.$2(21,245),"$iR")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mZ:function(a,b,c,d,e){var u,t,s,r,q=$.nF()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.e(q,d)
t=q[d]
s=C.b.C(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.e(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
Q:function Q(){},
az:function az(a,b){this.a=a
this.b=b},
r:function r(){},
bx:function bx(a){this.a=a},
h0:function h0(){},
h1:function h1(){},
by:function by(){},
fz:function fz(){},
e8:function e8(){},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hm:function hm(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jf:function jf(a){this.a=a},
jc:function jc(a){this.a=a},
cZ:function cZ(a){this.a=a},
fN:function fN(a){this.a=a},
i9:function i9(){},
eh:function eh(){},
fU:function fU(a){this.a=a},
eF:function eF(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(){},
l:function l(){},
j:function j(){},
b4:function b4(){},
b:function b(){},
z:function z(){},
O:function O(){},
ac:function ac(){},
V:function V(){},
av:function av(){},
h:function h(){},
a5:function a5(a){this.a=a},
jk:function jk(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a,b){this.a=a
this.b=b},
cg:function cg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kp:function kp(a,b){this.a=a
this.b=b},
kq:function kq(){},
ks:function ks(a,b){this.a=a
this.b=b},
kr:function kr(a){this.a=a},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function kA(){},
kz:function kz(a){this.a=a},
kB:function kB(){},
kC:function kC(){},
kd:function kd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jN:function jN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pH:function(a){var u,t=J.T(a)
if(!!t.$ibl){u=t.gdA(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ff(a.data,a.height,a.width)},
pG:function(a){if(a instanceof P.ff)return{data:a.a,height:a.b,width:a.c}
return a},
bn:function(a){var u,t,s,r,q
if(a==null)return
u=P.lp(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.N(t[r])
u.k(0,q,a[q])}return u},
pF:function(a){var u={}
a.G(0,new P.kI(u))
return u},
kf:function kf(){},
kh:function kh(a,b){this.a=a
this.b=b},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
kI:function kI(a){this.a=a},
kg:function kg(a,b){this.a=a
this.b=b},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
hc:function hc(){},
k2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oQ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k4:function k4(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
hs:function hs(){},
ba:function ba(){},
i7:function i7(){},
ie:function ie(){},
cW:function cW(){},
iL:function iL(){},
p:function p(){},
bd:function bd(){},
j0:function j0(){},
eK:function eK(){},
eL:function eL(){},
eV:function eV(){},
eW:function eW(){},
f6:function f6(){},
f7:function f7(){},
fd:function fd(){},
fe:function fe(){},
R:function R(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(a){this.a=a},
fE:function fE(){},
bW:function bW(){},
i8:function i8(){},
ey:function ey(){},
dC:function dC(){},
dQ:function dQ(){},
eb:function eb(){},
ed:function ed(){},
c7:function c7(){},
ee:function ee(){},
ek:function ek(){},
ep:function ep(){},
iD:function iD(){},
f2:function f2(){},
f3:function f3(){}},W={
m1:function(){var u=document.createElement("a")
return u},
lg:function(){var u=document.createElement("canvas")
return u},
nY:function(a,b,c){var u=document.body,t=(u&&C.t).am(u,a,b,c)
t.toString
u=W.G
u=new H.da(new W.as(t),H.n(new W.h3(),{func:1,ret:P.Q,args:[u]}),[u])
return H.f(u.gaL(u),"$iU")},
ma:function(a){H.f(a,"$ik")
return"wheel"},
cC:function(a){var u,t,s,r="element tag unavailable"
try{u=J.co(a)
t=u.geg(a)
if(typeof t==="string")r=u.geg(a)}catch(s){H.aj(s)}return r},
o0:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icI")
try{s.type=a}catch(u){H.aj(u)}return s},
k1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mO:function(a,b,c,d){var u=W.k1(W.k1(W.k1(W.k1(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.n2(new W.jR(c),W.o)
if(u!=null&&!0)J.nI(a,b,u,!1)
return new W.jQ(a,b,u,!1,[e])},
mN:function(a){var u=W.m1(),t=window.location
u=new W.bR(new W.k9(u,t))
u.eL(a)
return u},
oO:function(a,b,c,d){H.f(a,"$iU")
H.N(b)
H.N(c)
H.f(d,"$ibR")
return!0},
oP:function(a,b,c,d){var u,t,s
H.f(a,"$iU")
H.N(b)
H.N(c)
u=H.f(d,"$ibR").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mP:function(){var u=P.h,t=P.md(C.p,u),s=H.q(C.p,0),r=H.n(new W.kl(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.kk(t,P.dX(u),P.dX(u),P.dX(u),null)
t.eS(null,new H.hF(C.p,r,[s,u]),q,null)
return t},
n2:function(a,b){var u=$.a0
if(u===C.f)return a
return u.ds(a,b)},
w:function w(){},
fx:function fx(){},
dz:function dz(){},
fy:function fy(){},
cu:function cu(){},
bX:function bX(){},
bs:function bs(){},
bY:function bY(){},
cy:function cy(){},
bt:function bt(){},
cA:function cA(){},
fQ:function fQ(){},
W:function W(){},
cB:function cB(){},
fR:function fR(){},
b2:function b2(){},
b3:function b3(){},
fS:function fS(){},
fT:function fT(){},
fW:function fW(){},
aD:function aD(){},
fY:function fY(){},
dL:function dL(){},
dM:function dM(){},
fZ:function fZ(){},
h_:function h_(){},
jL:function jL(a,b){this.a=a
this.b=b},
U:function U(){},
h3:function h3(){},
o:function o(){},
k:function k(){},
aE:function aE(){},
cE:function cE(){},
h9:function h9(){},
hd:function hd(){},
aO:function aO(){},
hj:function hj(){},
c1:function c1(){},
bl:function bl(){},
cH:function cH(){},
cI:function cI(){},
b6:function b6(){},
dY:function dY(){},
hS:function hS(){},
cN:function cN(){},
hT:function hT(){},
hU:function hU(a){this.a=a},
hV:function hV(){},
hW:function hW(a){this.a=a},
aP:function aP(){},
hX:function hX(){},
ah:function ah(){},
as:function as(a){this.a=a},
G:function G(){},
cS:function cS(){},
aQ:function aQ(){},
ic:function ic(){},
io:function io(){},
ip:function ip(a){this.a=a},
ir:function ir(){},
aS:function aS(){},
iB:function iB(){},
aT:function aT(){},
iC:function iC(){},
aU:function aU(){},
iF:function iF(){},
iG:function iG(a){this.a=a},
aG:function aG(){},
bb:function bb(){},
ei:function ei(){},
iM:function iM(){},
iN:function iN(){},
d1:function d1(){},
aW:function aW(){},
aH:function aH(){},
iP:function iP(){},
iQ:function iQ(){},
iV:function iV(){},
aX:function aX(){},
aY:function aY(){},
iZ:function iZ(){},
j_:function j_(){},
bP:function bP(){},
jl:function jl(){},
jD:function jD(){},
bf:function bf(){},
db:function db(){},
dc:function dc(){},
jM:function jM(){},
eA:function eA(){},
k0:function k0(){},
eS:function eS(){},
ke:function ke(){},
ki:function ki(){},
jK:function jK(){},
jO:function jO(a){this.a=a},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lB:function lB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jQ:function jQ(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jR:function jR(a){this.a=a},
bR:function bR(a){this.a=a},
H:function H(){},
e7:function e7(a){this.a=a},
i4:function i4(a){this.a=a},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(){},
kb:function kb(){},
kc:function kc(){},
kk:function kk(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kl:function kl(){},
kj:function kj(){},
dP:function dP(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aB:function aB(){},
k9:function k9(a,b){this.a=a
this.b=b},
fi:function fi(a){this.a=a},
kv:function kv(a){this.a=a},
ez:function ez(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eT:function eT(){},
eU:function eU(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
dj:function dj(){},
dk:function dk(){},
f0:function f0(){},
f1:function f1(){},
f5:function f5(){},
f8:function f8(){},
f9:function f9(){},
dl:function dl(){},
dm:function dm(){},
fb:function fb(){},
fc:function fc(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){}},O={
lh:function(a){var u=new O.a1([a])
u.bg(a)
return u},
a1:function a1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cM:function cM(){this.b=this.a=null},
mf:function(){var u,t,s=new O.e1()
s.sf2(O.lh(V.aq))
s.e.aZ(s.gfF(),s.gfH())
u=new O.b8(s,"emission")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.f=u
u=new O.b8(s,"ambient")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.r=u
u=new O.b8(s,"diffuse")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.x=u
u=new O.b8(s,"invDiffuse")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.y=u
u=new O.hL(s,"specular")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a7(0,0,0)
u.ch=100
s.z=u
u=new O.hH(s,"bump")
u.c=new A.ao(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.b8(s,"reflect")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.cx=u
u=new O.hK(s,"refract")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a7(0,0,0)
u.ch=1
s.cy=u
u=new O.hG(s,"alpha")
u.c=new A.ao(!1,!1,!1)
u.f=1
s.db=u
u=new D.dW()
u.bg(D.af)
u.seN(H.c([],[D.dK]))
u.sht(H.c([],[D.ea]))
u.seP(H.c([],[D.bN]))
u.y=u.x=null
u.cu(u.gfD(),u.ghd(),u.ghh())
s.dx=u
t=new O.hJ()
t.b=new V.ay(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.X():t
u.h(0,s.ghE())
u=s.dx
t=u.y
u=t==null?u.y=D.X():t
u.h(0,s.geT())
s.fr=null
return s},
fX:function fX(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(){},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(){},
hG:function hG(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e2:function e2(){},
hH:function hH(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b8:function b8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hJ:function hJ(){var _=this
_.e=_.d=_.c=_.b=null},
hK:function hK(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hL:function hL(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bO:function bO(){}},E={
lj:function(){var u=new E.ap()
u.a=""
u.b=!0
u.seK(0,O.lh(E.ap))
u.y.aZ(u.giO(),u.giR())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.saf(0,null)
u.saX(null)
u.saV(null)
return u},
os:function(a,b){var u=new E.ij(a)
u.eH(a,b)
return u},
oy:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibY)return E.mw(a,!0,!0,!0,!1)
u=W.lg()
t=u.style
t.width="100%"
t.height="100%"
s.gc2(a).h(0,u)
return E.mw(u,!0,!0,!0,!1)},
mw:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.el(),j=H.f(C.j.cs(a,"webgl2",P.o8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic7")
if(j==null)H.A(P.B("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.os(j,a)
u=new T.iS(j)
u.b=H.ab(j.getParameter(3379))
H.ab(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.es(a)
t=new X.hr()
t.shw(P.dX(P.l))
u.b=t
t=new X.hY(u)
t.f=0
t.r=V.bJ()
t.x=V.bJ()
t.ch=t.Q=1
u.c=t
t=new X.hz(u)
t.r=0
t.x=V.bJ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iY(u)
t.f=V.bJ()
t.r=V.bJ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfe(H.c([],[[P.d_,P.V]]))
t=u.z
s=document
r=W.ah
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.n(u.gfQ(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.n(u.gfW(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.n(u.gfJ(),o),!1,p))
t=u.z
n=W.b6
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.n(u.gh_(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.n(u.gfY(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.n(u.gh3(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.n(u.gh7(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.n(u.gh5(),q),!1,r))
n=u.z
W.ma(a)
m=W.bf;(n&&C.a).h(n,W.aa(a,H.N(W.ma(a)),H.n(u.gh9(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.n(u.gfS(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.n(u.gfU(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.n(u.ghb(),o),!1,p))
p=u.z
o=W.aY
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.n(u.ghr(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.n(u.ghn(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.n(u.ghp(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.d9()
return k},
fI:function fI(){},
ap:function ap(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ij:function ij(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
el:function el(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iU:function iU(a){this.a=a}},Z={
lA:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ci(c)),35044)
a.bindBuffer(b,null)
return new Z.ev(b,u)},
aJ:function(a){return new Z.bQ(a)},
ev:function ev(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ew:function ew(a){this.a=a},
cx:function cx(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a){this.a=a}},D={
X:function(){var u=new D.c_()
u.sak(null)
u.saP(null)
u.c=null
u.d=0
return u},
fL:function fL(){},
c_:function c_(){var _=this
_.d=_.c=_.b=_.a=null},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
C:function C(){this.b=null},
bB:function bB(a){this.b=null
this.$ti=a},
bC:function bC(a){this.b=null
this.$ti=a},
F:function F(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dK:function dK(){},
af:function af(){},
dW:function dW(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
ea:function ea(){},
bN:function bN(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={dE:function dE(a,b){this.a=a
this.b=b},dV:function dV(a,b){this.a=a
this.b=b},hr:function hr(){this.d=this.b=this.a=null},dZ:function dZ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hz:function hz(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},bG:function bG(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hY:function hY(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},id:function id(){},en:function en(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iY:function iY(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},es:function es(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
o_:function(a){var u=new X.hf(),t=new V.ay(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lt()
u.r=t
return u},
mk:function(a,b){var u,t=new X.e9()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.saV(b)
u=t.c
if(!(Math.abs(u-a)<$.K().a)){t.c=a
u=new D.F("fov",u,a,[P.r])
u.b=!0
t.a5(u)}u=t.d
if(!(Math.abs(u-0.1)<$.K().a)){t.d=0.1
u=new D.F("near",u,0.1,[P.r])
u.b=!0
t.a5(u)}u=t.e
if(!(Math.abs(u-2000)<$.K().a)){t.e=2000
u=new D.F("far",u,2000,[P.r])
u.b=!0
t.a5(u)}return t},
fF:function fF(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){},
hf:function hf(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ej:function ej(){}},V={
q8:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.be(a-b,u)
return(a<0?a+u:a)+b},
S:function(a,b,c){if(a==null)return C.b.ao("null",c)
return C.b.ao(C.e.el(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
cn:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.S(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.e(p,q)
C.a.k(p,q,C.b.ao(p[q],t))}return p},
du:function(a){return C.e.jd(Math.pow(2,C.S.cc(Math.log(H.pE(a))/Math.log(2))))},
c3:function(){var u=$.mh
return u==null?$.mh=V.b9(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b9:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ls:function(a,b,c){return V.b9(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lr:function(a,b,c,d){return V.b9(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
mg:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b9(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bJ:function(){var u=$.mm
return u==null?$.mm=new V.ae(0,0):u},
mn:function(){var u=$.bK
return u==null?$.bK=new V.a3(0,0,0):u},
lt:function(){var u=$.ms
return u==null?$.ms=V.mr(0,0,1,1):u},
mr:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cV(a,b,c,d)},
d9:function(){var u=$.mI
return u==null?$.mI=new V.L(0,0,0):u},
oI:function(){var u=$.jp
return u==null?$.jp=new V.L(-1,0,0):u},
mJ:function(){var u=$.jq
return u==null?$.jq=new V.L(0,1,0):u},
mK:function(){var u=$.jr
return u==null?$.jr=new V.L(0,0,1):u},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h5:function h5(a){this.a=a},
e3:function e3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aq:function aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ae:function ae(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.B("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.C(a,0)
t=C.b.C(b,0)
s=new V.ii()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.is()
u.eI(a)
return u},
iX:function(){var u=new V.iW(),t=P.h
u.shT(new H.a2([t,V.cY]))
u.shW(new H.a2([t,V.d4]))
u.c=null
return u},
bi:function bi(){},
aA:function aA(){},
e_:function e_(){},
au:function au(){this.a=null},
ii:function ii(){this.b=this.a=null},
is:function is(){this.a=null},
cY:function cY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a){this.b=a
this.c=null},
iW:function iW(){this.c=this.b=this.a=null},
d5:function d5(a){this.b=a
this.a=this.c=null},
q2:function(a){P.oz(C.P,new V.l6(a))},
ou:function(a){var u=new V.iw()
u.eJ(a,!0)
return u},
bu:function bu(){},
l6:function l6(a){this.a=a},
fV:function fV(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hg:function hg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hi:function hi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ib:function ib(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ig:function ig(a){this.a=a
this.c=null},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iw:function iw(){this.b=this.a=null},
iy:function iy(a){this.a=a},
ix:function ix(a){this.a=a},
iz:function iz(a){this.a=a},
ne:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=null,a4=V.ou("Test 045"),a5=W.lg()
a5.className="pageLargeCanvas"
a5.id=a2
a4.a.appendChild(a5)
u=[P.h]
a4.dm(H.c(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],u))
a4.i5(H.c(["shapes"],u))
a4.dm(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a2)
if(t==null)H.A(P.B("Failed to find an element with the identifier, testCanvas."))
s=E.oy(t,!0,!0,!0,!1)
r=new X.fF()
r.d=r.c=r.b=r.a=512
r.e=!0
r.f=!1
r.x=r.r=1
r.ch=T.lv(a3)
r.cx=new V.ay(0,0,0,1)
r.cy=!0
r.db=2000
r.dx=!0
r.dy=V.lt()
r.sax(0,512)
r.sas(0,512)
q=new V.ay(0,0,0,1)
if(!r.cx.p(0,q)){p=r.cx
r.cx=q
o=new D.F("color",p,q,[V.ay])
o.b=!0
r.a5(o)}o=r.db
if(!(Math.abs(o-2000)<$.K().a)){r.db=2000
o=new D.F("depth",o,2000,[P.r])
o.b=!0
r.a5(o)}o=r.r
if(!(Math.abs(o-1)<$.K().a)){r.r=1
o=new D.F("autoResizeScalarX",o,1,[P.r])
o.b=!0
r.a5(o)}o=r.x
if(!(Math.abs(o-1)<$.K().a)){r.x=1
o=new D.F("autoResizeScalarY",o,1,[P.r])
o.b=!0
r.a5(o)}n=V.lt()
if(!J.P(r.dy,n)){p=r.dy
r.dy=n
o=new D.F("region",p,n,[V.cV])
o.b=!0
r.a5(o)}m=U.hh()
m.h(0,U.bv(V.ls(0,0,-4)))
m.h(0,U.mE(!0,s.r))
o=r.ch
l=s.f.iK("../resources/Test.png")
q=new V.a7(1,1,1)
k=new D.bN()
k.r=new V.a7(1,1,1)
k.ch=1.0471975511965976
k.cx=1
k.dx=k.cy=1.5707963267948966
k.db=!0
k.dy=1
k.fx=k.fr=0
k.fy=!0
k.a=V.mn()
k.b=V.mK()
k.c=V.mJ()
k.d=V.oI()
p=k.f
k.f=m
m.gt().h(0,k.gb_())
j=new D.F("mover",p,k.f,[U.ad])
j.b=!0
k.Y(j)
if(!k.r.p(0,q)){p=k.r
k.r=q
j=new D.F("color",p,q,[V.a7])
j.b=!0
k.Y(j)}j=k.x
if(j!==l){if(j!=null)j.gt().K(0,k.gb_())
p=k.x
k.x=l
l.gt().h(0,k.gb_())
l=new D.F("texture",p,k.x,[T.d3])
l.b=!0
k.Y(l)}l=k.y
if(l!==o){if(l!=null)l.gt().K(0,k.gb_())
p=k.y
k.y=o
o.gt().h(0,k.gb_())
o=new D.F("shadow",p,k.y,[T.d3])
o.b=!0
k.Y(o)}o=k.ch
if(!(Math.abs(o-0.5)<$.K().a)){k.ch=0.5
l=1/(Math.sqrt(2)*Math.tan(k.ch))
k.z=l
k.Q=l*k.cx
o=new D.F("fov",o,k.ch,[P.r])
o.b=!0
k.Y(o)}o=k.cx
if(!(Math.abs(o-1)<$.K().a)){k.cx=1
l=k.z
if(typeof l!=="number")return l.B()
k.Q=l
o=new D.F("ratio",o,1,[P.r])
o.b=!0
k.Y(o)}o=k.cy
if(!(Math.abs(o-1.5707963267948966)<$.K().a)){k.cy=1.5707963267948966
o=new D.F("cutoff",o,1.5707963267948966,[P.r])
o.b=!0
k.Y(o)}o=k.dx
if(!(Math.abs(o-1.5707963267948966)<$.K().a)){k.dx=1.5707963267948966
o=new D.F("coneAngle",o,1.5707963267948966,[P.r])
o.b=!0
k.Y(o)}o=$.mL
if(o==null){o=new V.ce(1,0.00390625,0.0000152587890625,0)
$.mL=o
i=o}else i=o
if(!J.P(k.e,i)){p=k.e
k.e=i
o=new D.F("shadowAdjust",p,i,[V.ce])
o.b=!0
k.Y(o)}o=k.dy
if(!(Math.abs(o-0)<$.K().a)){k.dy=0
o=new D.F("attenuation0",o,0,[P.r])
o.b=!0
k.Y(o)}o=k.fr
if(!(Math.abs(o-0.1)<$.K().a)){k.fr=0.1
o=new D.F("attenuation1",o,0.1,[P.r])
o.b=!0
k.Y(o)}o=k.fx
if(!(Math.abs(o-0)<$.K().a)){k.fx=0
o=new D.F("attenuation2",o,0,[P.r])
o.b=!0
k.Y(o)}if(k.db){k.db=!1
o=new D.F("enableCutOff",!0,!1,[P.Q])
o.b=!0
k.Y(o)}h=O.mf()
h.dx.h(0,k)
o=h.r
o.saU(0,new V.a7(0.1,0.1,0.1))
o=h.x
o.saU(0,new V.a7(0.7,0.7,0.7))
o=h.z
o.saU(0,new V.a7(0.3,0.3,0.3))
o=h.z
o.dd(new A.ao(!0,!1,!1))
o.de(100)
g=E.lj()
g.saf(0,F.nl())
f=E.lj()
f.saV(U.bv(V.lr(5,5,5,1)))
o=F.lP(1,a3,a3,1)
o.cb()
f.saf(0,o)
e=U.hh()
e.h(0,U.mE(!1,s.r))
e.h(0,U.bv(V.mg(3.141592653589793)))
e.h(0,U.bv(V.ls(0,0,5)))
d=E.lj()
o=U.hh()
o.h(0,U.bv(V.lr(0.1,0.1,0.1,1)))
o.h(0,m)
d.saV(o)
d.saf(0,F.kJ(0,!1,!0,40,1))
o=O.mf()
l=o.f
l.saU(0,new V.a7(1,1,1))
d.saX(o)
c=M.mb()
c.saX(h)
c.e.h(0,g)
c.e.h(0,f)
c.e.h(0,d)
c.b.saV(e)
o=U.hh()
o.h(0,U.bv(V.lr(-1,1,-1,1)))
l=new U.cJ()
l.c=V.c3()
l.d=0
l.a=m
m.gt().h(0,l.gaN())
j=new D.F("mover",a3,l.a,[U.ad])
j.b=!0
l.U(j)
o.h(0,l)
b=Math.cos(3.141592653589793)
a=Math.sin(3.141592653589793)
o.h(0,U.bv(V.b9(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1)))
o.h(0,U.bv(V.ls(0,0,2)))
a0=X.mk(0.5,o)
a1=M.mb()
a1.seh(0,r)
o=new O.fX()
o.b=1
o.c=10
o.f=o.e=o.d=!1
if(!(Math.abs(0)<$.K().a)){l=new D.F("start",1,1,[P.r])
l.b=!0
o.a4(l)}l=o.c
if(!(Math.abs(l-20)<$.K().a)){o.c=20
l=new D.F("stop",l,20,[P.r])
l.b=!0
o.a4(l)}if(!o.f){o.f=!0
l=new D.F("focus",!1,!0,[P.Q])
l.b=!0
o.a4(l)}a1.saX(o)
a1.e.h(0,g)
a1.e.h(0,f)
a1.sdv(a0)
o=M.aF
l=H.c([a1,c],[o])
j=new M.dG()
j.bg(o)
j.e=!0
j.f=!1
j.r=null
j.aZ(j.ghj(),j.ghl())
j.ad(0,l)
o=s.d
if(o!==j){if(o!=null)o.gt().K(0,s.gcD())
s.d=j
j.gt().h(0,s.gcD())
s.cE()}o=new V.ig("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.A("Failed to find shapes for RadioGroup")
o.aS(0,"Cube",new V.kX(g))
o.aS(0,"Cylinder",new V.kY(g))
o.aS(0,"Bar",new V.kZ(g))
o.aS(0,"Cone",new V.l_(g))
o.aS(0,"Sphere",new V.l0(g))
o.dk(0,"Toroid",new V.l1(g),!0)
o.aS(0,"Knot",new V.l2(g))
u=s.z
if(u==null)u=s.z=D.X()
o={func:1,ret:-1,args:[D.C]}
l=H.n(new V.l3(a4,h),o)
if(u.b==null)u.saP(H.c([],[o]))
u=u.b;(u&&C.a).h(u,l)
V.q2(s)},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a,b){this.a=a
this.b=b}},U={
m6:function(){var u=new U.fM()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bv:function(a){var u=new U.dH()
u.a=a
return u},
hh:function(){var u=new U.cG()
u.bg(U.ad)
u.aZ(u.geQ(),u.ghf())
u.e=null
u.f=V.c3()
u.r=0
return u},
mE:function(a,b){var u,t,s,r=new U.et(),q=U.m6()
q.seu(0,!0)
q.sdV(6.283185307179586)
q.sdX(0)
q.sa6(0,0)
q.sdW(100)
q.sZ(0)
q.sdz(0.5)
r.b=q
u=r.gaN()
q.gt().h(0,u)
q=U.m6()
q.seu(0,!0)
q.sdV(6.283185307179586)
q.sdX(0)
q.sa6(0,0)
q.sdW(100)
q.sZ(0)
q.sdz(0.5)
r.c=q
q.gt().h(0,u)
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
q=new D.F("modifiers",s,t,[X.bF])
q.b=!0
r.U(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.F("invertX",q,!1,[P.Q])
q.b=!0
r.U(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.F("invertY",q,!1,[P.Q])
q.b=!0
r.U(q)}r.ie(b)
return r},
fM:function fM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){this.b=this.a=null},
cG:function cG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cJ:function cJ(){var _=this
_.d=_.c=_.b=_.a=null},
ad:function ad(){},
et:function et(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
mb:function(){var u,t=new M.dN()
t.a=!0
t.sf5(0,O.lh(E.ap))
t.e.aZ(t.gfM(),t.gfO())
t.y=t.x=t.r=t.f=null
u=X.o_(null)
t.sdv(null)
t.seh(0,u)
t.saX(null)
return t},
dG:function dG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dN:function dN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aF:function aF(){}},A={
ob:function(a,b){var u=a.b6,t=new A.e0(b,u)
t.cC(b,u)
t.eG(a,b)
return t},
oc:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gaw(a0)+a1.gaw(a1)+a2.gaw(a2)+a3.gaw(a3)+a4.gaw(a4)+a5.gaw(a5)+a6.gaw(a6)+a7.gaw(a7)+a8.gaw(a8)+"_"
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
g=$.b0()
if(k){u=$.bq()
g=new Z.bQ(g.a|u.a)}if(j){u=$.bp()
g=new Z.bQ(g.a|u.a)}if(i){u=$.bo()
g=new Z.bQ(g.a|u.a)}return new A.hI(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
kD:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kE:function(a,b,c){var u
A.kD(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.l9(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
pe:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kD(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
pb:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kE(b,t,"ambient")
b.a+="\n"},
pc:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kE(b,t,"diffuse")
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
pf:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kE(b,t,"invDiffuse")
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
pl:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kE(b,t,"specular")
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
ph:function(a,b){var u,t,s
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
pj:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kD(b,t,"reflect")
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
pk:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kD(b,t,"refract")
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
pd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.l9(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aq()
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
r=[P.h]
o=H.c([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(m,"diffuse(norm, lit.viewDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
if(!a.e.a)r=!1
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
pi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.l9(t)
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
if(typeof u!=="number")return u.aq()
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
c.a=r+"\n"}r=[P.h]
l=H.c([],r)
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
l=H.c([],r)
if(!a.b.a)o=!1
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
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
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
pm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.l9(t)
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
if(typeof u!=="number")return u.aq()
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
c.a=u+"\n"}u=[P.h]
j=H.c([],u)
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
j=H.c([],u)
if(!a.b.a)r=!1
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
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
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
pg:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.h])
if(!a.b.a)u=!1
else u=!0
if(u)C.a.h(t,"ambientColor")
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(t,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(t,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
pn:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a5("")
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
A.pe(a,j)
A.pb(a,j)
A.pc(a,j)
A.pf(a,j)
A.pl(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.pj(a,j)
A.pk(a,j)}A.ph(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pd(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pi(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pm(a,q[o],j)
A.pg(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.h])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(n,"lightAccum")
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.m(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
po:function(a,b){var u,t,s
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
pq:function(a,b){var u
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
pp:function(a,b){var u
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
ps:function(a,b){var u,t
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
pt:function(a,b){var u,t
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
pr:function(a,b){var u
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
pu:function(a,b){var u
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
l9:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.ag(a,1)},
lx:function(a,b,c,d,e){var u=new A.j5(a,c,e)
u.f=d
u.si3(P.o9(d,0,P.l))
return u},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function fA(a){this.a=a},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e0:function e0(a,b){var _=this
_.jp=_.jo=_.dE=_.dD=_.b6=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jC=_.jB=_.jA=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.jz=_.jy=_.dL=_.jx=_.jw=_.dK=_.dJ=_.jv=_.ju=_.dI=_.dH=_.jt=_.js=_.dG=_.jr=_.jq=_.dF=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aN:function aN(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b6=b3
_.dD=b4},
c8:function c8(a,b,c,d,e,f){var _=this
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
cc:function cc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cX:function cX(){},
eo:function eo(){},
ja:function ja(a){this.a=a},
aI:function aI(a,b,c){this.a=a
this.c=b
this.d=c},
j7:function j7(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){this.a=a
this.c=b
this.d=c},
j9:function j9(a,b,c){this.a=a
this.c=b
this.d=c},
j5:function j5(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a9:function a9(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){this.a=a
this.c=b
this.d=c},
d7:function d7(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c},
ca:function ca(a,b,c){this.a=a
this.c=b
this.d=c},
cb:function cb(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lP:function(a,b,c,d){var u=F.lu()
F.dp(u,b,c,d,a,1,0,0,1)
F.dp(u,b,c,d,a,0,1,0,3)
F.dp(u,b,c,d,a,0,0,1,2)
F.dp(u,b,c,d,a,-1,0,0,0)
F.dp(u,b,c,d,a,0,-1,0,0)
F.dp(u,b,c,d,a,0,0,-1,3)
u.aA()
return u},
ky:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dp:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.L(h,g+a1,f+a2)
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
j.d=i}m=F.ky(i)
l=F.ky(j.b)
k=F.lV(d,a0,new F.kx(j,F.ky(j.c),F.ky(j.d),l,m,c),b)
if(k!=null)a.b9(k)},
n7:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.lu()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.aw])
q=u.a
p=new V.L(0,0,t)
p=p.u(0,Math.sqrt(p.D(p)))
C.a.h(r,q.i9(new V.bL(a,-1,-1,-1),new V.ay(1,1,1,1),new V.a3(0,0,c),new V.L(0,0,t),new V.ae(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.E(k)
j=new V.L(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.eu(new V.bL(a,-1,-1,-1),null,new V.ay(i,g,h,1),new V.a3(m*k,l*k,c),new V.L(0,0,t),new V.ae(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.i7(r)
return u},
kJ:function(a,b,c,d,e){return F.pI(b,c,1,new F.kK(a,e),d)},
pI:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.lV(c,e,new F.kM(d),null)
if(u==null)return
u.aA()
u.bY()
if(b)u.b9(F.n7(3,!1,1,new F.kN(d),e))
if(a)u.b9(F.n7(1,!0,-1,new F.kO(d),e))
return u},
q3:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.l7()
t=F.lP(a,null,new F.l8(s,1),b)
t.bY()
return t},
nl:function(){return F.n6(15,30,0.5,1,new F.la())},
pW:function(){return F.n6(12,120,0.3,1,new F.kW(3,2))},
n6:function(a,b,c,d,e){var u=F.lV(a,b,new F.kL(e,d,b,c),null)
if(u==null)return
u.aA()
u.bY()
return u},
lV:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.lu()
t=H.c([],[F.aw])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.eu(g,g,new V.ay(p,0,0,1),g,g,new V.ae(r,1),g,g,0)
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
o=F.eu(g,g,new V.ay(j,i,h,1),g,g,new V.ae(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c4(d))}}u.d.i8(a+1,b+1,t)
return u},
cD:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.A(P.B("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.B("May not create a face with vertices attached to different shapes."))
u.bW(a)
u.bX(b)
u.hL(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
o5:function(a,b){var u=new F.bm(),t=a.a
if(t==null)H.A(P.B("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.A(P.B("May not create a line with vertices attached to different shapes."))
u.bW(a)
u.bX(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a_()
return u},
lu:function(){var u=new F.ef(),t=new F.js(u)
t.b=!1
t.si4(H.c([],[F.aw]))
u.a=t
t=new F.iv(u)
t.sbP(H.c([],[F.bI]))
u.b=t
t=new F.iu(u)
t.sfl(H.c([],[F.bm]))
u.c=t
t=new F.it(u)
t.sff(H.c([],[F.a8]))
u.d=t
u.e=null
return u},
eu:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aw(),r=new F.jA()
r.sbP(H.c([],[F.bI]))
s.b=r
r=new F.jw()
u=[F.bm]
r.sfm(H.c([],u))
r.sfn(H.c([],u))
s.c=r
r=new F.jt()
u=[F.a8]
r.sfg(H.c([],u))
r.sfh(H.c([],u))
r.sfi(H.c([],u))
s.d=r
h=$.nz()
s.e=0
r=$.b0()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bq().a)!==0?e:t
s.x=(u&$.bp().a)!==0?b:t
s.y=(u&$.bU().a)!==0?f:t
s.z=(u&$.bV().a)!==0?g:t
s.Q=(u&$.nA().a)!==0?c:t
s.ch=(u&$.ct().a)!==0?i:0
s.cx=(u&$.bo().a)!==0?a:t
return s},
kx:function kx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kK:function kK(a,b){this.a=a
this.b=b},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
l7:function l7(){},
l8:function l8(a,b){this.a=a
this.b=b},
la:function la(){},
kW:function kW(a,b){this.a=a
this.b=b},
kL:function kL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(){},
iA:function iA(){},
bm:function bm(){this.b=this.a=null},
ht:function ht(){},
j4:function j4(){},
bI:function bI(){this.a=null},
ef:function ef(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
it:function it(a){this.a=a
this.b=null},
iu:function iu(a){this.a=a
this.b=null},
iv:function iv(a){this.a=a
this.b=null},
aw:function aw(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jC:function jC(a){this.a=a},
jB:function jB(a){this.a=a},
js:function js(a){this.a=a
this.c=this.b=null},
jt:function jt(){this.d=this.c=this.b=null},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(){this.c=this.b=null},
jy:function jy(){},
jx:function jx(){},
jz:function jz(){},
i5:function i5(){},
jA:function jA(){this.b=null}},T={
lv:function(a){var u=new T.iR()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
d2:function d2(){},
d3:function d3(){},
iR:function iR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iS:function iS(a){var _=this
_.a=a
_.e=_.d=_.b=null},
iT:function iT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ln.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gH:function(a){return H.cT(a)},
i:function(a){return"Instance of '"+H.i(H.cU(a))+"'"}}
J.ho.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iQ:1}
J.dT.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dU.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.ia.prototype={}
J.cd.prototype={}
J.bE.prototype={
i:function(a){var u=a[$.nn()]
if(u==null)return this.eC(a)
return"JavaScript function for "+H.i(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibz:1}
J.b5.prototype={
h:function(a,b){H.D(b,H.q(a,0))
if(!!a.fixed$length)H.A(P.J("add"))
a.push(b)},
eb:function(a,b){if(!!a.fixed$length)H.A(P.J("removeAt"))
if(b<0||b>=a.length)throw H.d(P.ec(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.A(P.J("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
ad:function(a,b){var u,t
H.m(b,"$ij",[H.q(a,0)],"$aj")
if(!!a.fixed$length)H.A(P.J("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bj(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iI:function(a){return this.m(a,"")},
iA:function(a,b,c,d){var u,t,s
H.D(b,d)
H.n(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bj(a))}return t},
iz:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.Q,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.I(b.$1(s)))return s
if(a.length!==u)throw H.d(P.bj(a))}throw H.d(H.hn())},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
ez:function(a,b,c){if(b<0||b>a.length)throw H.d(P.ai(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.ai(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.q(a,0)])
return H.c(a.slice(b,c),[H.q(a,0)])},
giy:function(a){if(a.length>0)return a[0]
throw H.d(H.hn())},
gaB:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.hn())},
dq:function(a,b){var u,t
H.n(b,{func:1,ret:P.Q,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.I(b.$1(a[t])))return!0
if(a.length!==u)throw H.d(P.bj(a))}return!1},
bA:function(a,b){var u=H.q(a,0)
H.n(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.A(P.J("sort"))
H.eg(a,0,a.length-1,b,u)},
R:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
i:function(a){return P.lk(a,"[","]")},
gS:function(a){return new J.am(a,a.length,[H.q(a,0)])},
gH:function(a){return H.cT(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.A(P.J("set length"))
if(b<0)throw H.d(P.ai(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.cm(a,b))
return a[b]},
k:function(a,b,c){H.D(c,H.q(a,0))
if(!!a.immutable$list)H.A(P.J("indexed set"))
if(b>=a.length||b<0)throw H.d(H.cm(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.lm.prototype={}
J.am.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.u(s))
u=t.c
if(u>=r){t.scU(null)
return!1}t.scU(s[u]);++t.c
return!0},
scU:function(a){this.d=H.D(a,H.q(this,0))},
$ib4:1}
J.cK.prototype={
ik:function(a,b){var u
H.nf(b)
if(typeof b!=="number")throw H.d(H.b_(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbp(b)
if(this.gbp(a)===u)return 0
if(this.gbp(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbp:function(a){return a===0?1/a<0:a<0},
jd:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.J(""+a+".toInt()"))},
cc:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.J(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.J(""+a+".round()"))},
el:function(a,b){var u
if(b>20)throw H.d(P.ai(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbp(a))return"-"+u
return u},
bc:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.ai(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.A(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.B("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
be:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eF:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dg(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.dg(a,b)},
dg:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.J("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aR:function(a,b){var u
if(a>0)u=this.df(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hQ:function(a,b){if(b<0)throw H.d(H.b_(b))
return this.df(a,b)},
df:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iac:1}
J.dS.prototype={$il:1}
J.dR.prototype={}
J.bD.prototype={
W:function(a,b){if(b<0)throw H.d(H.cm(a,b))
if(b>=a.length)H.A(H.cm(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.d(H.cm(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.d(P.le(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
c=P.bM(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a9:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ai(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a7:function(a,b){return this.a9(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.A(H.b_(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.d(P.ec(b,null))
if(b>c)throw H.d(P.ec(b,null))
if(c>a.length)throw H.d(P.ec(c,null))
return a.substring(b,c)},
ag:function(a,b){return this.q(a,b,null)},
jg:function(a){return a.toLowerCase()},
B:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ao:function(a,b){var u=b-a.length
if(u<=0)return a
return this.B(" ",u)+a},
bo:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ai(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dS:function(a,b){return this.bo(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$imj:1,
$ih:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$ad8:function(){return[P.l]},
$ax:function(){return[P.l]},
$aj:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.h2.prototype={}
H.c2.prototype={
gS:function(a){var u=this
return new H.cL(u,u.gn(u),[H.al(u,"c2",0)])},
by:function(a,b){return this.eB(0,H.n(b,{func:1,ret:P.Q,args:[H.al(this,"c2",0)]}))}}
H.cL.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.ds(s),q=r.gn(s)
if(t.b!==q)throw H.d(P.bj(s))
u=t.c
if(u>=q){t.sb0(null)
return!1}t.sb0(r.J(s,u));++t.c
return!0},
sb0:function(a){this.d=H.D(a,H.q(this,0))},
$ib4:1}
H.hD.prototype={
gS:function(a){return new H.hE(J.br(this.a),this.b,this.$ti)},
gn:function(a){return J.aC(this.a)},
J:function(a,b){return this.b.$1(J.fw(this.a,b))},
$aj:function(a,b){return[b]}}
H.hE.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.sb0(u.c.$1(t.gI(t)))
return!0}u.sb0(null)
return!1},
gI:function(a){return this.a},
sb0:function(a){this.a=H.D(a,H.q(this,1))},
$ab4:function(a,b){return[b]}}
H.hF.prototype={
gn:function(a){return J.aC(this.a)},
J:function(a,b){return this.b.$1(J.fw(this.a,b))},
$ac2:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.da.prototype={
gS:function(a){return new H.jE(J.br(this.a),this.b,this.$ti)}}
H.jE.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(H.I(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.c0.prototype={}
H.d8.prototype={
k:function(a,b,c){H.D(c,H.al(this,"d8",0))
throw H.d(P.J("Cannot modify an unmodifiable list"))}}
H.eq.prototype={}
H.fO.prototype={
i:function(a){return P.lq(this)},
k:function(a,b,c){H.D(b,H.q(this,0))
H.D(c,H.q(this,1))
return H.nV()},
$iz:1}
H.fP.prototype={
gn:function(a){return this.a},
bm:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bm(0,b))return
return this.cV(b)},
cV:function(a){return this.b[H.N(a)]},
G:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.n(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.D(q.cV(r),p))}}}
H.j1.prototype={
an:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i6.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hq.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.je.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.lb.prototype={
$1:function(a){if(!!J.T(a).$iby)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.f4.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iav:1}
H.cz.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibz:1,
gjh:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iO.prototype={}
H.iE.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cs(u)+"'"}}
H.cv.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cv))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cT(this.a)
else u=typeof t!=="object"?J.dy(t):H.cT(t)
return(u^H.cT(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cU(u))+"'")}}
H.j3.prototype={
i:function(a){return this.a}}
H.fK.prototype={
i:function(a){return this.a}}
H.iq.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jF.prototype={
i:function(a){return"Assertion failed: "+P.dO(this.a)}}
H.a2.prototype={
gn:function(a){return this.a},
giH:function(a){return this.a===0},
ga8:function(a){return new H.hv(this,[H.q(this,0)])},
bm:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cR(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cR(t,b)}else return s.iE(b)},
iE:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cf(u.bJ(t,u.ce(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bh(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bh(r,b)
s=t==null?null:t.b
return s}else return q.iF(b)},
iF:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bJ(r,s.ce(a))
t=s.cf(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.D(b,H.q(s,0))
H.D(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.cH(u==null?s.b=s.bN():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cH(t==null?s.c=s.bN():t,b,c)}else s.iG(b,c)},
iG:function(a,b){var u,t,s,r,q=this
H.D(a,H.q(q,0))
H.D(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bN()
t=q.ce(a)
s=q.bJ(u,t)
if(s==null)q.bU(u,t,[q.bO(a,b)])
else{r=q.cf(s,a)
if(r>=0)s[r].b=b
else s.push(q.bO(a,b))}},
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.bj(s))
u=u.c}},
cH:function(a,b,c){var u,t=this
H.D(b,H.q(t,0))
H.D(c,H.q(t,1))
u=t.bh(a,b)
if(u==null)t.bU(a,b,t.bO(b,c))
else u.b=c},
fu:function(){this.r=this.r+1&67108863},
bO:function(a,b){var u,t=this,s=new H.hu(H.D(a,H.q(t,0)),H.D(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fu()
return s},
ce:function(a){return J.dy(a)&0x3ffffff},
cf:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
i:function(a){return P.lq(this)},
bh:function(a,b){return a[b]},
bJ:function(a,b){return a[b]},
bU:function(a,b,c){a[b]=c},
fa:function(a,b){delete a[b]},
cR:function(a,b){return this.bh(a,b)!=null},
bN:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bU(t,u,t)
this.fa(t,u)
return t}}
H.hu.prototype={}
H.hv.prototype={
gn:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.hw(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hw.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bj(t))
else{t=u.c
if(t==null){u.scG(null)
return!1}else{u.scG(t.a)
u.c=u.c.c
return!0}}},
scG:function(a){this.d=H.D(a,H.q(this,0))},
$ib4:1}
H.kS.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kU.prototype={
$1:function(a){return this.a(H.N(a))},
$S:57}
H.hp.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imj:1,
$ioq:1}
H.cP.prototype={$icP:1}
H.bH.prototype={$ibH:1,$ioA:1}
H.e4.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cQ.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pK(c)
H.bh(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.r]},
$ax:function(){return[P.r]},
$ij:1,
$aj:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.e5.prototype={
k:function(a,b,c){H.ab(c)
H.bh(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.l]},
$ax:function(){return[P.l]},
$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hZ.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.i_.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.i0.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.i1.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.i2.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.e6.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$iqt:1}
H.cR.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$icR:1,
$iR:1}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
P.jH.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:31}
P.jG.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.jI.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jJ.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fa.prototype={
eV:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cl(new P.kn(this,b),0),a)
else throw H.d(P.J("`setTimeout()` not found."))},
eW:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cl(new P.km(this,a,Date.now(),b),0),a)
else throw H.d(P.J("Periodic timer."))},
$ibc:1}
P.kn.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.km.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eF(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bg.prototype={
iL:function(a){if((this.c&15)!==6)return!0
return this.b.b.cq(H.n(this.d,{func:1,ret:P.Q,args:[P.V]}),a.a,P.Q,P.V)},
iC:function(a){var u=this.e,t=P.V,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.ft(u,{func:1,args:[P.V,P.av]}))return H.lQ(r.j8(u,a.a,a.b,null,t,P.av),s)
else return H.lQ(r.cq(H.n(u,{func:1,args:[P.V]}),a.a,null,t),s)}}
P.aK.prototype={
ek:function(a,b,c){var u,t,s,r=H.q(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a0
if(u!==C.f){H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pw(b,u)}t=new P.aK($.a0,[c])
s=b==null?1:3
this.cI(new P.bg(t,s,a,b,[r,c]))
return t},
jc:function(a,b){return this.ek(a,null,b)},
cI:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibg")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaK")
s=u.a
if(s<4){u.cI(a)
return}t.a=s
t.c=u.c}P.kH(null,null,t.b,H.n(new P.jS(t,a),{func:1,ret:-1}))}},
d7:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibg")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaK")
u=q.a
if(u<4){q.d7(a)
return}p.a=u
p.c=q.c}o.a=p.bj(a)
P.kH(null,null,p.b,H.n(new P.jW(o,p),{func:1,ret:-1}))}},
bR:function(){var u=H.f(this.c,"$ibg")
this.c=null
return this.bj(u)},
bj:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cN:function(a){var u,t,s=this,r=H.q(s,0)
H.lQ(a,{futureOr:1,type:r})
u=s.$ti
if(H.lM(a,"$icF",u,"$acF"))if(H.lM(a,"$iaK",u,null))P.mM(a,s)
else P.oN(a,s)
else{t=s.bR()
H.D(a,r)
s.a=4
s.c=a
P.dd(s,t)}},
cO:function(a,b){var u,t=this
H.f(b,"$iav")
u=t.bR()
t.a=8
t.c=new P.an(a,b)
P.dd(t,u)},
$icF:1}
P.jS.prototype={
$0:function(){P.dd(this.a,this.b)},
$S:0}
P.jW.prototype={
$0:function(){P.dd(this.b,this.a.a)},
$S:0}
P.jT.prototype={
$1:function(a){var u=this.a
u.a=0
u.cN(a)},
$S:31}
P.jU.prototype={
$2:function(a,b){H.f(b,"$iav")
this.a.cO(a,b)},
$1:function(a){return this.$2(a,null)},
$S:54}
P.jV.prototype={
$0:function(){this.a.cO(this.b,this.c)},
$S:0}
P.jZ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ef(H.n(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.cq(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.T(n).$icF){if(n instanceof P.aK&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jc(new P.k_(p),null)
s.a=!1}},
$S:3}
P.k_.prototype={
$1:function(a){return this.a},
$S:50}
P.jY.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.D(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cq(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.cq(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jX.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.I(r.iL(u))&&r.e!=null){q=m.b
q.b=r.iC(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.cq(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.ex.prototype={}
P.iH.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aK($.a0,[P.l])
r.a=0
u=H.q(s,0)
t=H.n(new P.iJ(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iK(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.iJ.prototype={
$1:function(a){H.D(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.q(this.b,0)]}}}
P.iK.prototype={
$0:function(){this.b.cN(this.a.a)},
$S:0}
P.d_.prototype={}
P.iI.prototype={}
P.bc.prototype={}
P.an.prototype={
i:function(a){return H.i(this.a)},
$iby:1}
P.kw.prototype={$iqI:1}
P.kG.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e8():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k5.prototype={
j9:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a0){a.$0()
return}P.mX(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.cq(s)
P.kF(r,r,this,u,H.f(t,"$iav"))}},
ja:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.f===$.a0){a.$1(b)
return}P.mY(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.cq(s)
P.kF(r,r,this,u,H.f(t,"$iav"))}},
ih:function(a,b){return new P.k7(this,H.n(a,{func:1,ret:b}),b)},
bZ:function(a){return new P.k6(this,H.n(a,{func:1,ret:-1}))},
ds:function(a,b){return new P.k8(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ef:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.f)return a.$0()
return P.mX(null,null,this,a,b)},
cq:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.a0===C.f)return a.$1(b)
return P.mY(null,null,this,a,b,c,d)},
j8:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.a0===C.f)return a.$2(b,c)
return P.px(null,null,this,a,b,c,d,e,f)}}
P.k7.prototype={
$0:function(){return this.a.ef(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k6.prototype={
$0:function(){return this.a.j9(this.b)},
$S:3}
P.k8.prototype={
$1:function(a){var u=this.c
return this.a.ja(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k3.prototype={
gS:function(a){var u=this,t=new P.eM(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
R:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icf")!=null}else{t=this.f6(b)
return t}},
f6:function(a){var u=this.d
if(u==null)return!1
return this.bH(this.cW(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.D(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cK(u==null?s.b=P.lC():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cK(t==null?s.c=P.lC():t,b)}else return s.eX(0,b)},
eX:function(a,b){var u,t,s,r=this
H.D(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.lC()
t=r.cP(b)
s=u[t]
if(s==null)u[t]=[r.bE(b)]
else{if(r.bH(s,b)>=0)return!1
s.push(r.bE(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hz(this.c,b)
else return this.hy(0,b)},
hy:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cW(r,b)
t=s.bH(u,b)
if(t<0)return!1
s.dh(u.splice(t,1)[0])
return!0},
cK:function(a,b){H.D(b,H.q(this,0))
if(H.f(a[b],"$icf")!=null)return!1
a[b]=this.bE(b)
return!0},
hz:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icf")
if(u==null)return!1
this.dh(u)
delete a[b]
return!0},
cM:function(){this.r=1073741823&this.r+1},
bE:function(a){var u,t=this,s=new P.cf(H.D(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cM()
return s},
dh:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cM()},
cP:function(a){return J.dy(a)&1073741823},
cW:function(a,b){return a[this.cP(b)]},
bH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1}}
P.cf.prototype={}
P.eM.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bj(t))
else{t=u.c
if(t==null){u.scL(null)
return!1}else{u.scL(H.D(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
scL:function(a){this.d=H.D(a,H.q(this,0))},
$ib4:1}
P.hx.prototype={
$2:function(a,b){this.a.k(0,H.D(a,this.b),H.D(b,this.c))},
$S:6}
P.hy.prototype={$ij:1,$ib:1}
P.x.prototype={
gS:function(a){return new H.cL(a,this.gn(a),[H.cp(this,a,"x",0)])},
J:function(a,b){return this.j(a,b)},
jf:function(a,b){var u,t=this,s=H.c([],[H.cp(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
je:function(a){return this.jf(a,!0)},
iw:function(a,b,c,d){var u
H.D(d,H.cp(this,a,"x",0))
P.bM(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.lk(a,"[","]")}}
P.hA.prototype={}
P.hB.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:6}
P.ag.prototype={
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.cp(s,a,"ag",0),H.cp(s,a,"ag",1)]})
for(u=J.br(s.ga8(a));u.w();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aC(this.ga8(a))},
i:function(a){return P.lq(a)},
$iz:1}
P.ko.prototype={
k:function(a,b,c){H.D(b,H.q(this,0))
H.D(c,H.q(this,1))
throw H.d(P.J("Cannot modify unmodifiable map"))}}
P.hC.prototype={
j:function(a,b){return J.dx(this.a,b)},
k:function(a,b,c){J.lc(this.a,H.D(b,H.q(this,0)),H.D(c,H.q(this,1)))},
G:function(a,b){J.lZ(this.a,H.n(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){return J.aC(this.a)},
i:function(a){return J.at(this.a)},
$iz:1}
P.er.prototype={}
P.ka.prototype={
ad:function(a,b){var u
for(u=J.br(H.m(b,"$ij",this.$ti,"$aj"));u.w();)this.h(0,u.gI(u))},
i:function(a){return P.lk(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.mq(b,"index")
for(u=P.oR(r,r.r,H.q(r,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.d(P.Y(b,r,"index",null,t))},
$ij:1,
$imt:1}
P.eN.prototype={}
P.fg.prototype={}
P.fG.prototype={
iN:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bM(a0,a1,b.length)
u=$.nC()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kR(C.b.C(b,n))
j=H.kR(C.b.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a5("")
g=r.a+=C.b.q(b,s,t)
r.a=g+H.c5(m)
s=n
continue}}throw H.d(P.a4("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.q(b,s,a1)
f=g.length
if(q>=0)P.m2(b,p,a1,q,o,f)
else{e=C.d.be(f-1,4)+1
if(e===1)throw H.d(P.a4(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aW(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.m2(b,p,a1,q,o,d)
else{e=C.d.be(d,4)
if(e===1)throw H.d(P.a4(c,b,a1))
if(e>1)b=C.b.aW(b,a1,a1,e===2?"==":"=")}return b},
$abZ:function(){return[[P.b,P.l],P.h]}}
P.fH.prototype={
$abw:function(){return[[P.b,P.l],P.h]}}
P.bZ.prototype={}
P.bw.prototype={}
P.h4.prototype={
$abZ:function(){return[P.h,[P.b,P.l]]}}
P.hl.prototype={
i:function(a){return this.a}}
P.hk.prototype={
f7:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.e(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.a5("")
if(r>b)q.a+=C.b.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nN(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abw:function(){return[P.h,P.h]}}
P.jm.prototype={
giv:function(){return C.N}}
P.jo.prototype={
c3:function(a){var u,t,s=P.bM(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ku(u)
if(t.fj(a,0,s)!==s)t.dj(J.nJ(a,s-1),0)
return new Uint8Array(u.subarray(0,H.p7(0,t.b,u.length)))},
$abw:function(){return[P.h,[P.b,P.l]]}}
P.ku.prototype={
dj:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fj:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dj(r,C.b.C(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jn.prototype={
c3:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.oD(!1,a,0,null)
if(u!=null)return u
t=P.bM(0,null,J.aC(a))
s=P.n_(a,0,t)
if(s>0){r=P.d0(a,0,s)
if(s===t)return r
q=new P.a5(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a5("")
n=new P.kt(!1,q)
n.c=o
n.il(a,p,t)
if(n.e>0){H.A(P.a4("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c5(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abw:function(){return[[P.b,P.l],P.h]}}
P.kt.prototype={
il:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.ds(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.aq()
if((o&192)!==128){n=P.a4(h+C.d.bc(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a4("Overlong encoding of 0x"+C.d.bc(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a4("Character outside valid Unicode range: 0x"+C.d.bc(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.c5(u)
i.c=!1}for(n=p<c;n;){m=P.n_(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d0(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.P()
if(o<0){j=P.a4("Negative UTF-8 code unit: -0x"+C.d.bc(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a4(h+C.d.bc(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.Q.prototype={}
P.az.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.d.aR(u,30))&1073741823},
i:function(a){var u=this,t=P.nW(H.om(u)),s=P.dI(H.ok(u)),r=P.dI(H.og(u)),q=P.dI(H.oh(u)),p=P.dI(H.oj(u)),o=P.dI(H.ol(u)),n=P.nX(H.oi(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.r.prototype={}
P.bx.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
i:function(a){var u,t,s,r=new P.h1(),q=this.a
if(q<0)return"-"+new P.bx(0-q).i(0)
u=r.$1(C.d.ac(q,6e7)%60)
t=r.$1(C.d.ac(q,1e6)%60)
s=new P.h0().$1(q%1e6)
return""+C.d.ac(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.h0.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.h1.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.by.prototype={}
P.fz.prototype={
i:function(a){return"Assertion failed"}}
P.e8.prototype={
i:function(a){return"Throw of null."}}
P.aM.prototype={
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbG()+o+u
if(!q.a)return t
s=q.gbF()
r=P.dO(q.b)
return t+s+": "+r}}
P.c6.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hm.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t=H.ab(this.b)
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.jf.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jc.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cZ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fN.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dO(u)+"."}}
P.i9.prototype={
i:function(a){return"Out of Memory"},
$iby:1}
P.eh.prototype={
i:function(a){return"Stack Overflow"},
$iby:1}
P.fU.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eF.prototype={
i:function(a){return"Exception: "+this.a}}
P.he.prototype={
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
return h+l+j+k+"\n"+C.b.B(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bz.prototype={}
P.l.prototype={}
P.j.prototype={
by:function(a,b){var u=H.al(this,"j",0)
return new H.da(this,H.n(b,{func:1,ret:P.Q,args:[u]}),[u])},
gn:function(a){var u,t=this.gS(this)
for(u=0;t.w();)++u
return u},
gaL:function(a){var u,t=this.gS(this)
if(!t.w())throw H.d(H.hn())
u=t.gI(t)
if(t.w())throw H.d(H.o2())
return u},
J:function(a,b){var u,t,s
P.mq(b,"index")
for(u=this.gS(this),t=0;u.w();){s=u.gI(u)
if(b===t)return s;++t}throw H.d(P.Y(b,this,"index",null,t))},
i:function(a){return P.o1(this,"(",")")}}
P.b4.prototype={}
P.b.prototype={$ij:1}
P.z.prototype={}
P.O.prototype={
gH:function(a){return P.V.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
p:function(a,b){return this===b},
gH:function(a){return H.cT(this)},
i:function(a){return"Instance of '"+H.i(H.cU(this))+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.h.prototype={$imj:1}
P.a5.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqh:1}
P.jk.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.m(a,"$iz",[r,r],"$az")
H.N(b)
u=J.dt(b).dS(b,"=")
if(u===-1){if(b!=="")J.lc(a,P.lG(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.q(b,0,u)
s=C.b.ag(b,u+1)
r=this.a
J.lc(a,P.lG(t,0,t.length,r,!0),P.lG(s,0,s.length,r,!0))}return a},
$S:48}
P.jh.prototype={
$2:function(a,b){throw H.d(P.a4("Illegal IPv4 address, "+a,this.a,b))},
$S:47}
P.ji.prototype={
$2:function(a,b){throw H.d(P.a4("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:46}
P.jj.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fv(C.b.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:45}
P.cg.prototype={
ger:function(){return this.b},
gcd:function(a){var u=this.c
if(u==null)return""
if(C.b.a7(u,"["))return C.b.q(u,1,u.length-1)
return u},
gbs:function(a){var u=this.d
if(u==null)return P.mQ(this.a)
return u},
gcl:function(a){var u=this.f
return u==null?"":u},
gdN:function(){var u=this.r
return u==null?"":u},
ed:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iz",[P.h,null],"$az")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a7(p,"/"))p="/"+p
n=P.lE(null,0,0,b)
return new P.cg(u,s,q,r,p,n,m.r)},
gcm:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shx(new P.er(P.mD(u==null?"":u),[t,t]))}return s.Q},
gdO:function(){return this.c!=null},
gdR:function(){return this.f!=null},
gdP:function(){return this.r!=null},
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
if(!!J.T(b).$ily)if(s.a==b.gbz())if(s.c!=null===b.gdO())if(s.b==b.ger())if(s.gcd(s)==b.gcd(b))if(s.gbs(s)==b.gbs(b))if(s.e===b.ge7(b)){u=s.f
t=u==null
if(!t===b.gdR()){if(t)u=""
if(u===b.gcl(b)){u=s.r
t=u==null
if(!t===b.gdP()){if(t)u=""
u=u===b.gdN()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.i(0)):u},
shx:function(a){var u=P.h
this.Q=H.m(a,"$iz",[u,u],"$az")},
$ily:1,
gbz:function(){return this.a},
ge7:function(a){return this.e}}
P.kp.prototype={
$1:function(a){throw H.d(P.a4("Invalid port",this.a,this.b+1))},
$S:44}
P.kq.prototype={
$1:function(a){return P.fh(C.X,a,C.h,!1)},
$S:21}
P.ks.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.fh(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.fh(C.i,b,C.h,!0))}},
$S:22}
P.kr.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.br(H.nd(b,"$ij")),t=this.a;u.w();)t.$2(a,H.N(u.gI(u)))},
$S:43}
P.jg.prototype={
geq:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.bo(u,"?",o)
s=u.length
if(t>=0){r=P.dn(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.jN("data",p,p,p,P.dn(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kA.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.kz.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nK(u,0,96,b)
return u},
$S:58}
P.kB.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.C(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kC.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.C(b,0),t=C.b.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.kd.prototype={
gdO:function(){return this.c>0},
gdQ:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.E(t)
t=u+1<t
u=t}else u=!1
return u},
gdR:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdP:function(){return this.r<this.a.length},
gcY:function(){return this.b===4&&C.b.a7(this.a,"http")},
gcZ:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbz:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcY())q=t.x="http"
else if(t.gcZ()){t.x="https"
q="https"}else if(q===4&&C.b.a7(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a7(t.a,r)){t.x=r
q=r}else{q=C.b.q(t.a,0,q)
t.x=q}return q},
ger:function(){var u=this.c,t=this.b+3
return u>t?C.b.q(this.a,t,u-1):""},
gcd:function(a){var u=this.c
return u>0?C.b.q(this.a,u,this.d):""},
gbs:function(a){var u,t=this
if(t.gdQ()){u=t.d
if(typeof u!=="number")return u.A()
return P.fv(C.b.q(t.a,u+1,t.e),null,null)}if(t.gcY())return 80
if(t.gcZ())return 443
return 0},
ge7:function(a){return C.b.q(this.a,this.e,this.f)},
gcl:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.b.q(this.a,u+1,t):""},
gdN:function(){var u=this.r,t=this.a
return u<t.length?C.b.ag(t,u+1):""},
gcm:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.Y
t=P.h
return new P.er(P.mD(u.gcl(u)),[t,t])},
ed:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iz",[P.h,null],"$az")
u=k.gbz()
t=u==="file"
s=k.c
r=s>0?C.b.q(k.a,k.b+3,s):""
q=k.gdQ()?k.gbs(k):j
s=k.c
if(s>0)p=C.b.q(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.q(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a7(o,"/"))o="/"+o
m=P.lE(j,0,0,b)
n=k.r
l=n<s.length?C.b.ag(s,n+1):j
return new P.cg(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ily&&this.a===b.i(0)},
i:function(a){return this.a},
$ily:1}
P.jN.prototype={}
W.w.prototype={}
W.fx.prototype={
gn:function(a){return a.length}}
W.dz.prototype={
i:function(a){return String(a)},
$idz:1}
W.fy.prototype={
i:function(a){return String(a)}}
W.cu.prototype={$icu:1}
W.bX.prototype={$ibX:1}
W.bs.prototype={$ibs:1}
W.bY.prototype={
cs:function(a,b,c){if(c!=null)return a.getContext(b,P.pF(c))
return a.getContext(b)},
ew:function(a,b){return this.cs(a,b,null)},
$ibY:1}
W.cy.prototype={$icy:1}
W.bt.prototype={
gn:function(a){return a.length}}
W.cA.prototype={$icA:1}
W.fQ.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cB.prototype={
gn:function(a){return a.length}}
W.fR.prototype={}
W.b2.prototype={}
W.b3.prototype={}
W.fS.prototype={
gn:function(a){return a.length}}
W.fT.prototype={
gn:function(a){return a.length}}
W.fW.prototype={
gn:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.fY.prototype={
i:function(a){return String(a)}}
W.dL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iak",[P.ac],"$aak")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.ak,P.ac]]},
$ax:function(){return[[P.ak,P.ac]]},
$ij:1,
$aj:function(){return[[P.ak,P.ac]]},
$ib:1,
$ab:function(){return[[P.ak,P.ac]]},
$aH:function(){return[[P.ak,P.ac]]}}
W.dM.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gax(a))+" x "+H.i(this.gas(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iak)return!1
return a.left===u.gbq(b)&&a.top===u.gbu(b)&&this.gax(a)===u.gax(b)&&this.gas(a)===u.gas(b)},
gH:function(a){return W.mO(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(this.gax(a)),C.e.gH(this.gas(a)))},
gdt:function(a){return a.bottom},
gas:function(a){return a.height},
gbq:function(a){return a.left},
gcp:function(a){return a.right},
gbu:function(a){return a.top},
gax:function(a){return a.width},
$iak:1,
$aak:function(){return[P.ac]}}
W.fZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.N(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
W.h_.prototype={
gn:function(a){return a.length}}
W.jL.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$iU")},
k:function(a,b,c){var u
H.f(c,"$iU")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.je(this)
return new J.am(u,u.length,[H.q(u,0)])},
$ax:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
gig:function(a){return new W.jO(a)},
gc2:function(a){return new W.jL(a,a.children)},
gdw:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
am:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.m9
if(u==null){u=H.c([],[W.aB])
t=new W.e7(u)
C.a.h(u,W.mN(null))
C.a.h(u,W.mP())
$.m9=t
d=t}else d=u
u=$.m8
if(u==null){u=new W.fi(d)
$.m8=u
c=u}else{u.a=d
c=u}}if($.bk==null){u=document
t=u.implementation.createHTMLDocument("")
$.bk=t
$.li=t.createRange()
t=$.bk.createElement("base")
H.f(t,"$icu")
t.href=u.baseURI
$.bk.head.appendChild(t)}u=$.bk
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibs")}u=$.bk
if(!!this.$ibs)s=u.body
else{s=u.createElement(a.tagName)
$.bk.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.V,a.tagName)){$.li.selectNodeContents(s)
r=$.li.createContextualFragment(b)}else{s.innerHTML=b
r=$.bk.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bk.body
if(s==null?u!=null:s!==u)J.m0(s)
c.ct(r)
document.adoptNode(r)
return r},
ip:function(a,b,c){return this.am(a,b,c,null)},
ey:function(a,b){a.textContent=null
a.appendChild(this.am(a,b,null,null))},
$iU:1,
geg:function(a){return a.tagName}}
W.h3.prototype={
$1:function(a){return!!J.T(H.f(a,"$iG")).$iU},
$S:26}
W.o.prototype={$io:1}
W.k.prototype={
i6:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.eY(a,b,c,!1)},
eY:function(a,b,c,d){return a.addEventListener(b,H.cl(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aE.prototype={$iaE:1}
W.cE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaE")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$icE:1,
$aH:function(){return[W.aE]}}
W.h9.prototype={
gn:function(a){return a.length}}
W.hd.prototype={
gn:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.hj.prototype={
gn:function(a){return a.length}}
W.c1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic1:1,
$aH:function(){return[W.G]}}
W.bl.prototype={$ibl:1,
gdA:function(a){return a.data}}
W.cH.prototype={$icH:1}
W.cI.prototype={$icI:1}
W.b6.prototype={$ib6:1}
W.dY.prototype={
i:function(a){return String(a)},
$idY:1}
W.hS.prototype={
gn:function(a){return a.length}}
W.cN.prototype={$icN:1}
W.hT.prototype={
j:function(a,b){return P.bn(a.get(H.N(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga8:function(a){var u=H.c([],[P.h])
this.G(a,new W.hU(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.hU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hV.prototype={
j:function(a,b){return P.bn(a.get(H.N(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga8:function(a){var u=H.c([],[P.h])
this.G(a,new W.hW(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aP.prototype={$iaP:1}
W.hX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aP]},
$ax:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aH:function(){return[W.aP]}}
W.ah.prototype={$iah:1}
W.as.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.mu("No elements"))
if(t>1)throw H.d(P.mu("More than one element"))
return u.firstChild},
ad:function(a,b){var u,t,s,r
H.m(b,"$ij",[W.G],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.dP(u,u.length,[H.cp(C.Z,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ax:function(){return[W.G]},
$aj:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
j3:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
j6:function(a,b){var u,t
try{u=a.parentNode
J.nH(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eA(a):u},
ib:function(a,b){return a.appendChild(H.f(b,"$iG"))},
hC:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aQ.prototype={$iaQ:1,
gn:function(a){return a.length}}
W.ic.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$ax:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aH:function(){return[W.aQ]}}
W.io.prototype={
j:function(a,b){return P.bn(a.get(H.N(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga8:function(a){var u=H.c([],[P.h])
this.G(a,new W.ip(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.ip.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.ir.prototype={
gn:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.iB.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaS")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$ax:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aH:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.iC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aH:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gn:function(a){return a.length}}
W.iF.prototype={
j:function(a,b){return a.getItem(H.N(b))},
k:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga8:function(a){var u=H.c([],[P.h])
this.G(a,new W.iG(u))
return u},
gn:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$iz:1,
$az:function(){return[P.h,P.h]}}
W.iG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:22}
W.aG.prototype={$iaG:1}
W.bb.prototype={$ibb:1}
W.ei.prototype={
am:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
u=W.nY("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.as(t).ad(0,new W.as(u))
return t}}
W.iM.prototype={
am:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.am(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaL(u)
s.toString
u=new W.as(s)
r=u.gaL(u)
t.toString
r.toString
new W.as(t).ad(0,new W.as(r))
return t}}
W.iN.prototype={
am:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.am(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaL(u)
t.toString
s.toString
new W.as(t).ad(0,new W.as(s))
return t}}
W.d1.prototype={$id1:1}
W.aW.prototype={$iaW:1}
W.aH.prototype={$iaH:1}
W.iP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaH")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aH:function(){return[W.aH]}}
W.iQ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.iV.prototype={
gn:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.aY.prototype={$iaY:1}
W.iZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.j_.prototype={
gn:function(a){return a.length}}
W.bP.prototype={}
W.jl.prototype={
i:function(a){return String(a)}}
W.jD.prototype={
gn:function(a){return a.length}}
W.bf.prototype={
gis:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.J("deltaY is not supported"))},
gir:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.J("deltaX is not supported"))},
$ibf:1}
W.db.prototype={
hD:function(a,b){return a.requestAnimationFrame(H.cl(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
fd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dc.prototype={$idc:1}
W.jM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iW")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.W]},
$ax:function(){return[W.W]},
$ij:1,
$aj:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aH:function(){return[W.W]}}
W.eA.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iak)return!1
return a.left===u.gbq(b)&&a.top===u.gbu(b)&&a.width===u.gax(b)&&a.height===u.gas(b)},
gH:function(a){return W.mO(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(a.width),C.e.gH(a.height))},
gas:function(a){return a.height},
gax:function(a){return a.width}}
W.k0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaO")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aO]},
$ax:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aH:function(){return[W.aO]}}
W.eS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.ke.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaU")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.ki.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaG")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aH:function(){return[W.aG]}}
W.jK.prototype={
G:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga8(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga8:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$idc")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.h,P.h]},
$az:function(){return[P.h,P.h]}}
W.jO.prototype={
j:function(a,b){return this.a.getAttribute(H.N(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga8(this).length}}
W.jP.prototype={}
W.lB.prototype={}
W.jQ.prototype={}
W.jR.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:40}
W.bR.prototype={
eL:function(a){var u
if($.de.giH($.de)){for(u=0;u<262;++u)$.de.k(0,C.U[u],W.pP())
for(u=0;u<12;++u)$.de.k(0,C.q[u],W.pQ())}},
aT:function(a){return $.nD().R(0,W.cC(a))},
az:function(a,b,c){var u=$.de.j(0,H.i(W.cC(a))+"::"+b)
if(u==null)u=$.de.j(0,"*::"+b)
if(u==null)return!1
return H.lL(u.$4(a,b,c,this))},
$iaB:1}
W.H.prototype={
gS:function(a){return new W.dP(a,this.gn(a),[H.cp(this,a,"H",0)])}}
W.e7.prototype={
aT:function(a){return C.a.dq(this.a,new W.i4(a))},
az:function(a,b,c){return C.a.dq(this.a,new W.i3(a,b,c))},
$iaB:1}
W.i4.prototype={
$1:function(a){return H.f(a,"$iaB").aT(this.a)},
$S:27}
W.i3.prototype={
$1:function(a){return H.f(a,"$iaB").az(this.a,this.b,this.c)},
$S:27}
W.f_.prototype={
eS:function(a,b,c,d){var u,t,s
this.a.ad(0,c)
u=b.by(0,new W.kb())
t=b.by(0,new W.kc())
this.b.ad(0,u)
s=this.c
s.ad(0,C.x)
s.ad(0,t)},
aT:function(a){return this.a.R(0,W.cC(a))},
az:function(a,b,c){var u=this,t=W.cC(a),s=u.c
if(s.R(0,H.i(t)+"::"+b))return u.d.ia(c)
else if(s.R(0,"*::"+b))return u.d.ia(c)
else{s=u.b
if(s.R(0,H.i(t)+"::"+b))return!0
else if(s.R(0,"*::"+b))return!0
else if(s.R(0,H.i(t)+"::*"))return!0
else if(s.R(0,"*::*"))return!0}return!1},
$iaB:1}
W.kb.prototype={
$1:function(a){return!C.a.R(C.q,H.N(a))},
$S:28}
W.kc.prototype={
$1:function(a){return C.a.R(C.q,H.N(a))},
$S:28}
W.kk.prototype={
az:function(a,b,c){if(this.eE(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.R(0,b)
return!1}}
W.kl.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.N(a))},
$S:21}
W.kj.prototype={
aT:function(a){var u=J.T(a)
if(!!u.$icW)return!1
u=!!u.$ip
if(u&&W.cC(a)==="foreignObject")return!1
if(u)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.b.a7(b,"on"))return!1
return this.aT(a)},
$iaB:1}
W.dP.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scX(J.dx(u.a,t))
u.c=t
return!0}u.scX(null)
u.c=s
return!1},
gI:function(a){return this.d},
scX:function(a){this.d=H.D(a,H.q(this,0))},
$ib4:1}
W.aB.prototype={}
W.k9.prototype={$iqu:1}
W.fi.prototype={
ct:function(a){new W.kv(this).$2(a,null)},
b3:function(a,b){if(b==null)J.m0(a)
else b.removeChild(a)},
hI:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nL(a)
n=o.a.getAttribute("is")
H.f(a,"$iU")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.I(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.aj(r)}try{s=W.cC(a)
this.hH(H.f(a,"$iU"),b,p,t,s,H.f(o,"$iz"),H.N(n))}catch(r){if(H.aj(r) instanceof P.aM)throw r
else{this.b3(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hH:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b3(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aT(a)){o.b3(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.az(a,"is",g)){o.b3(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.c(u.slice(0),[H.q(u,0)])
for(s=f.ga8(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nO(r)
H.N(r)
if(!q.az(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$id1)o.ct(a.content)},
$iqf:1}
W.kv.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hI(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b3(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.f(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
$S:39}
W.ez.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f5.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
P.kf.prototype={
dM:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cr:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iaz)return new Date(a.a)
if(!!u.$ioq)throw H.d(P.jd("structured clone of RegExp"))
if(!!u.$iaE)return a
if(!!u.$ibX)return a
if(!!u.$icE)return a
if(!!u.$ibl)return a
if(!!u.$icP||!!u.$ibH||!!u.$icN)return a
if(!!u.$iz){t=q.dM(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.G(a,new P.kh(p,q))
return p.a}if(!!u.$ib){t=q.dM(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.io(a,t)}throw H.d(P.jd("structured clone of other type"))},
io:function(a,b){var u,t=J.ds(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cr(t.j(a,u)))
return r}}
P.kh.prototype={
$2:function(a,b){this.a.a[a]=this.b.cr(b)},
$S:6}
P.ff.prototype={$ibl:1,
gdA:function(a){return this.a}}
P.kI.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.kg.prototype={}
P.ha.prototype={
gbi:function(){var u=this.b,t=H.al(u,"x",0),s=W.U
return new H.hD(new H.da(u,H.n(new P.hb(),{func:1,ret:P.Q,args:[t]}),[t]),H.n(new P.hc(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iU")
u=this.gbi()
J.nM(u.b.$1(J.fw(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aC(this.gbi().a)},
j:function(a,b){var u=this.gbi()
return u.b.$1(J.fw(u.a,b))},
gS:function(a){var u=P.me(this.gbi(),!1,W.U)
return new J.am(u,u.length,[H.q(u,0)])},
$ax:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.hb.prototype={
$1:function(a){return!!J.T(H.f(a,"$iG")).$iU},
$S:26}
P.hc.prototype={
$1:function(a){return H.y(H.f(a,"$iG"),"$iU")},
$S:38}
P.k4.prototype={
gcp:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.E(t)
return H.D(u+t,H.q(this,0))},
gdt:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.E(t)
return H.D(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iak){t=p.a
if(t==u.gbq(b)){s=p.b
if(s==u.gbu(b)){r=p.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.E(r)
q=H.q(p,0)
if(H.D(t+r,q)===u.gcp(b)){t=p.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.E(t)
u=H.D(s+t,q)===u.gdt(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.dy(s),q=t.b,p=J.dy(q),o=t.c
if(typeof s!=="number")return s.A()
if(typeof o!=="number")return H.E(o)
u=H.q(t,0)
o=C.d.gH(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.E(s)
u=C.d.gH(H.D(q+s,u))
return P.oQ(P.k2(P.k2(P.k2(P.k2(0,r),p),o),u))}}
P.ak.prototype={
gbq:function(a){return this.a},
gbu:function(a){return this.b},
gax:function(a){return this.c},
gas:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.hs.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib7")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b7]},
$ij:1,
$aj:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aH:function(){return[P.b7]}}
P.ba.prototype={$iba:1}
P.i7.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$iba")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.ba]},
$ij:1,
$aj:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aH:function(){return[P.ba]}}
P.ie.prototype={
gn:function(a){return a.length}}
P.cW.prototype={$icW:1}
P.iL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.N(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
P.p.prototype={
gc2:function(a){return new P.ha(a,new W.as(a))},
am:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aB])
C.a.h(p,W.mN(null))
C.a.h(p,W.mP())
C.a.h(p,new W.kj())
c=new W.fi(new W.e7(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).ip(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.as(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bd.prototype={$ibd:1}
P.j0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibd")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bd]},
$ij:1,
$aj:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aH:function(){return[P.bd]}}
P.eK.prototype={}
P.eL.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.fd.prototype={}
P.fe.prototype={}
P.R.prototype={$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$ioA:1}
P.fB.prototype={
gn:function(a){return a.length}}
P.fC.prototype={
j:function(a,b){return P.bn(a.get(H.N(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga8:function(a){var u=H.c([],[P.h])
this.G(a,new P.fD(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
P.fD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fE.prototype={
gn:function(a){return a.length}}
P.bW.prototype={}
P.i8.prototype={
gn:function(a){return a.length}}
P.ey.prototype={}
P.dC.prototype={$idC:1}
P.dQ.prototype={$idQ:1}
P.eb.prototype={$ieb:1}
P.ed.prototype={$ied:1}
P.c7.prototype={
ei:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.T(g)
if(!!u.$ibl&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.pG(g))
return}if(!!u.$icH&&h==null&&t&&!0){this.hV(a,b,c,d,e,f,g)
return}throw H.d(P.dA("Incorrect number or type of arguments"))},
jb:function(a,b,c,d,e,f,g){return this.ei(a,b,c,d,e,f,g,null,null,null)},
hV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a2:function(a,b,c){return a.uniform1f(b,c)},
bx:function(a,b,c){return a.uniform1i(b,c)},
V:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
en:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eo:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ep:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic7:1}
P.ee.prototype={$iee:1}
P.ek.prototype={$iek:1}
P.ep.prototype={$iep:1}
P.iD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Y(b,a,null,null,null))
return P.bn(a.item(b))},
k:function(a,b,c){H.f(c,"$iz")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.z,,,]]},
$ij:1,
$aj:function(){return[[P.z,,,]]},
$ib:1,
$ab:function(){return[[P.z,,,]]},
$aH:function(){return[[P.z,,,]]}}
P.f2.prototype={}
P.f3.prototype={}
O.a1.prototype={
bg:function(a){var u=this
u.sfo(H.c([],[a]))
u.sd5(null)
u.sd0(null)
u.sd6(null)},
cu:function(a,b,c){var u=this,t=H.al(u,"a1",0)
H.n(b,{func:1,ret:P.Q,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.l,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sd5(b)
u.sd0(a)
u.sd6(c)},
aZ:function(a,b){return this.cu(a,null,b)},
d4:function(a){var u
H.m(a,"$ij",[H.al(this,"a1",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d_:function(a,b){var u
H.m(b,"$ij",[H.al(this,"a1",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.am(u,u.length,[H.q(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.al(s,"a1",0)
H.D(b,r)
r=[r]
if(H.I(s.d4(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d_(t,H.c([b],r))}},
ad:function(a,b){var u,t,s=this
H.m(b,"$ij",[H.al(s,"a1",0)],"$aj")
if(H.I(s.d4(b))){u=s.a
t=u.length
C.a.ad(u,b)
s.d_(t,b)}},
sfo:function(a){this.a=H.m(a,"$ib",[H.al(this,"a1",0)],"$ab")},
sd5:function(a){this.b=H.n(a,{func:1,ret:P.Q,args:[[P.j,H.al(this,"a1",0)]]})},
sd0:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.al(this,"a1",0)]]})},
sd6:function(a){H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.al(this,"a1",0)]]})},
$ij:1}
O.cM.prototype={
gn:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.X():u},
aM:function(){var u=this.b
if(u!=null)u.E(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gaB(u)
else return V.c3()},
e9:function(a){var u=this.a
if(a==null)C.a.h(u,V.c3())
else C.a.h(u,a)
this.aM()},
ck:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sbL:function(a){this.a=H.m(a,"$ib",[V.aq],"$ab")}}
E.fI.prototype={}
E.ap.prototype={
cJ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.am(u,u.length,[H.q(u,0)]);u.w();){t=u.d
if(t.f==null)t.cJ()}},
saf:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().K(0,s.ge2())
u=s.c
if(u!=null)u.gt().h(0,s.ge2())
t=new D.F("shape",r,s.c,[F.ef])
t.b=!0
s.at(t)}},
saX:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().K(0,s.ge4())
u=s.f
s.f=a
if(a!=null)a.gt().h(0,s.ge4())
s.cJ()
t=new D.F("technique",u,s.f,[O.bO])
t.b=!0
s.at(t)}},
saV:function(a){var u,t,s=this
if(!J.P(s.r,a)){u=s.r
if(u!=null)u.gt().K(0,s.ge0())
if(a!=null)a.gt().h(0,s.ge0())
s.r=a
t=new D.F("mover",u,a,[U.ad])
t.b=!0
s.at(t)}},
av:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aD(0,b,s):null
if(!J.P(q,s.x)){u=s.x
s.x=q
t=new D.F("matrix",u,q,[V.aq])
t.b=!0
s.at(t)}r=s.f
if(r!=null)r.av(0,b)
for(r=s.y.a,r=new J.am(r,r.length,[H.q(r,0)]);r.w();)r.d.av(0,b)},
au:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga0(s))
else C.a.h(s.a,r.B(0,s.ga0(s)))
s.aM()
a.ea(t.f)
s=a.dy
u=(s&&C.a).gaB(s)
if(u!=null&&t.d!=null)u.ec(a,t)
for(s=t.y.a,s=new J.am(s,s.length,[H.q(s,0)]);s.w();)s.d.au(a)
a.e8()
a.dx.ck()},
at:function(a){var u=this.z
if(u!=null)u.E(a)},
a_:function(){return this.at(null)},
e3:function(a){H.f(a,"$iC")
this.e=null
this.at(a)},
iU:function(){return this.e3(null)},
e5:function(a){this.at(H.f(a,"$iC"))},
iV:function(){return this.e5(null)},
e1:function(a){this.at(H.f(a,"$iC"))},
iT:function(){return this.e1(null)},
e_:function(a){this.at(H.f(a,"$iC"))},
iQ:function(){return this.e_(null)},
iP:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ij",[E.ap],"$aj")
for(u=b.length,t=this.gdZ(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.sak(null)
o.saP(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
iS:function(a,b){var u,t
H.m(b,"$ij",[E.ap],"$aj")
for(u=b.gS(b),t=this.gdZ();u.w();)u.gI(u).gt().K(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seK:function(a,b){this.y=H.m(b,"$ia1",[E.ap],"$aa1")},
$icO:1}
E.ij.prototype={
eH:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cM()
t=[V.aq]
u.sbL(H.c([],t))
u.b=null
u.gt().h(0,new E.ik(s))
s.cy=u
u=new O.cM()
u.sbL(H.c([],t))
u.b=null
u.gt().h(0,new E.il(s))
s.db=u
u=new O.cM()
u.sbL(H.c([],t))
u.b=null
u.gt().h(0,new E.im(s))
s.dx=u
s.shU(H.c([],[O.bO]))
u=s.dy;(u&&C.a).h(u,null)
s.shP(new H.a2([P.h,A.cX]))},
gj2:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.B(0,u.ga0(u))
s=u}return s},
ges:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga0(s)
u=t.dx
u=t.cx=s.B(0,u.ga0(u))
s=u}return s},
ea:function(a){var u=this.dy,t=a==null?(u&&C.a).gaB(u):a;(u&&C.a).h(u,t)},
e8:function(){var u=this.dy
if(u.length>1)u.pop()},
dn:function(a){var u=a.b
if(u.length===0)throw H.d(P.B("May not cache a shader with no name."))
if(this.fr.bm(0,u))throw H.d(P.B('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
shU:function(a){this.dy=H.m(a,"$ib",[O.bO],"$ab")},
shP:function(a){this.fr=H.m(a,"$iz",[P.h,A.cX],"$az")}}
E.ik.prototype={
$1:function(a){var u
H.f(a,"$iC")
u=this.a
u.ch=u.z=null},
$S:8}
E.il.prototype={
$1:function(a){var u
H.f(a,"$iC")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.im.prototype={
$1:function(a){var u
H.f(a,"$iC")
u=this.a
u.cx=u.ch=null},
$S:8}
E.el.prototype={
cF:function(a){H.f(a,"$iC")
this.ee()},
cE:function(){return this.cF(null)},
giB:function(){var u,t=this,s=Date.now(),r=C.d.ac(P.m7(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
d9:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.B()
if(typeof r!=="number")return H.E(r)
u=C.e.cc(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.B()
t=C.e.cc(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mx(C.o,s.gj7())}},
ee:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iU(this),{func:1,ret:-1,args:[P.ac]})
C.E.fd(u)
C.E.hD(u,W.n2(t,P.ac))}},
j5:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d9()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.m7(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aM()
r=s.db
C.a.sn(r.a,0)
r.aM()
r=s.dx
C.a.sn(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.au(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.aj(q)
t=H.cq(q)
P.lT("Error: "+H.i(u))
P.lT("Stack: "+H.i(t))
throw H.d(u)}}}
E.iU.prototype={
$1:function(a){var u
H.nf(a)
u=this.a
if(u.ch){u.ch=!1
u.j5()}},
$S:37}
Z.ev.prototype={$iq9:1}
Z.dD.prototype={
al:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.B('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.ew.prototype={$iqa:1}
Z.cx.prototype={
aI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
al:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].al(a)},
bd:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
au:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfk:function(a){this.b=H.m(a,"$ib",[Z.bA],"$ab")},
$iqi:1}
Z.bA.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cU(this.c))+"'")+"]"}}
Z.bQ.prototype={
gcw:function(a){var u=this.a,t=(u&$.b0().a)!==0?3:0
if((u&$.bq().a)!==0)t+=3
if((u&$.bp().a)!==0)t+=3
if((u&$.bU().a)!==0)t+=2
if((u&$.bV().a)!==0)t+=3
if((u&$.dv().a)!==0)t+=3
if((u&$.dw().a)!==0)t+=4
if((u&$.ct().a)!==0)++t
return(u&$.bo().a)!==0?t+4:t},
ic:function(a){var u,t=$.b0(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ct()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0)if(u===a)return t
return $.nB()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bQ))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.b0().a)!==0)C.a.h(u,"Pos")
if((t&$.bq().a)!==0)C.a.h(u,"Norm")
if((t&$.bp().a)!==0)C.a.h(u,"Binm")
if((t&$.bU().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bV().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dv().a)!==0)C.a.h(u,"Clr3")
if((t&$.dw().a)!==0)C.a.h(u,"Clr4")
if((t&$.ct().a)!==0)C.a.h(u,"Weight")
if((t&$.bo().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fL.prototype={}
D.c_.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.C]}
H.n(b,u)
if(this.a==null)this.sak(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.C]})
u=s.a
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.a
t=(u&&C.a).K(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.b
t=(u&&C.a).K(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.G(P.me(u,!0,{func:1,ret:-1,args:[D.C]}),new D.h6(q))
u=r.b
if(u!=null){r.saP(H.c([],[{func:1,ret:-1,args:[D.C]}]))
C.a.G(u,new D.h7(q))}return!0},
dC:function(){return this.E(null)},
ap:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
sak:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")},
saP:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")}}
D.h6.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.h7.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.C.prototype={}
D.bB.prototype={}
D.bC.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dE.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dE))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dV.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hr.prototype={
j_:function(a){this.d.h(0,a.a)
return!1},
iW:function(a){this.d.K(0,a.a)
return!1},
shw:function(a){this.d=H.m(a,"$imt",[P.l],"$amt")}}
X.dZ.prototype={}
X.hz.prototype={
b1:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.B()
u=b.b
t=q.ch
if(typeof u!=="number")return u.B()
s=new V.ae(o.a+n*m,o.b+u*t)
t=q.a.gbl()
r=new X.bG(a,V.bJ(),q.x,t,s)
r.b=!0
q.z=new P.az(p,!1)
q.x=s
return r},
cj:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ex()
if(typeof u!=="number")return u.aq()
this.r=(u&~t)>>>0
return!1},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b1(a,b))
return!0},
j0:function(a){return!1},
h2:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dZ(c,r.a.gbl(),b)
s.b=!0
t.E(s)
r.y=new P.az(u,!1)
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
u+=H.I(this.b)?"Alt+":""
return u+(H.I(this.c)?"Shift+":"")}}
X.bG.prototype={}
X.hY.prototype={
bI:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gbl(),r=new X.bG(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cj:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bI(a,b,!0))
return!0},
bb:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ex()
if(typeof t!=="number")return t.aq()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bI(a,b,!0))
return!0},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bI(a,b,!1))
return!0},
j1:function(a,b){return!1}}
X.id.prototype={}
X.en.prototype={}
X.iY.prototype={
b1:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.ae],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bJ()
s=q.a.gbl()
r=new X.en(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iZ:function(a){var u
H.m(a,"$ib",[V.ae],"$ab")
u=this.b
if(u==null)return!1
u.E(this.b1(a,!0))
return!0},
iX:function(a){var u
H.m(a,"$ib",[V.ae],"$ab")
u=this.c
if(u==null)return!1
u.E(this.b1(a,!0))
return!0},
iY:function(a){var u
H.m(a,"$ib",[V.ae],"$ab")
u=this.d
if(u==null)return!1
u.E(this.b1(a,!1))
return!0}}
X.es.prototype={
gbl:function(){var u=this.a,t=C.j.gdw(u).c
t.toString
u=C.j.gdw(u).d
u.toString
return V.mr(0,0,t,u)},
cS:function(a){var u=a.keyCode,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.dV(u,new X.bF(t,a.altKey,a.shiftKey))},
aQ:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
bV:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
aG:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.O()
u=t.top
if(typeof r!=="number")return r.O()
return new V.ae(s-q,r-u)},
b2:function(a){return new V.a6(a.movementX,a.movementY)},
bQ:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.ae])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.e.a1(r.pageX)
C.e.a1(r.pageY)
p=o.left
C.e.a1(r.pageX)
C.a.h(n,new V.ae(q-p,C.e.a1(r.pageY)-o.top))}return n},
aE:function(a){var u=a.buttons,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.dE(u,new X.bF(t,a.altKey,a.shiftKey))},
bM:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.O()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.O()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fX:function(a){this.f=!0},
fK:function(a){this.f=!1},
fR:function(a){H.f(a,"$iah")
if(H.I(this.f)&&this.bM(a))a.preventDefault()},
h0:function(a){var u
H.f(a,"$ib6")
if(!H.I(this.f))return
u=this.cS(a)
this.b.j_(u)},
fZ:function(a){var u
H.f(a,"$ib6")
if(!H.I(this.f))return
u=this.cS(a)
this.b.iW(u)},
h4:function(a){var u,t,s,r,q=this
H.f(a,"$iah")
u=q.a
u.focus()
q.f=!0
q.aQ(a)
if(H.I(q.x)){t=q.aE(a)
s=q.b2(a)
if(q.d.cj(t,s))a.preventDefault()
return}if(H.I(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aE(a)
r=q.aG(a)
if(q.c.cj(t,r))a.preventDefault()},
h8:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aQ(a)
u=r.aE(a)
if(H.I(r.x)){t=r.b2(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.aG(a)
if(r.c.bb(u,s))a.preventDefault()},
fV:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bM(a)){r.aQ(a)
u=r.aE(a)
if(H.I(r.x)){t=r.b2(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.aG(a)
if(r.c.bb(u,s))a.preventDefault()}},
h6:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aQ(a)
u=r.aE(a)
if(H.I(r.x)){t=r.b2(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.aG(a)
if(r.c.ba(u,s))a.preventDefault()},
fT:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bM(a)){r.aQ(a)
u=r.aE(a)
if(H.I(r.x)){t=r.b2(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.aG(a)
if(r.c.ba(u,s))a.preventDefault()}},
ha:function(a){var u,t,s=this
H.f(a,"$ibf")
s.aQ(a)
u=new V.a6((a&&C.D).gir(a),C.D.gis(a)).u(0,180)
if(H.I(s.x)){if(s.d.j0(u))a.preventDefault()
return}if(H.I(s.r))return
t=s.aG(a)
if(s.c.j1(u,t))a.preventDefault()},
hc:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aE(s.y)
t=s.aG(s.y)
s.d.h2(u,t,r)}},
hs:function(a){var u,t=this
H.f(a,"$iaY")
t.a.focus()
t.f=!0
t.bV(a)
u=t.bQ(a)
if(t.e.iZ(u))a.preventDefault()},
ho:function(a){var u
H.f(a,"$iaY")
this.bV(a)
u=this.bQ(a)
if(this.e.iX(u))a.preventDefault()},
hq:function(a){var u
H.f(a,"$iaY")
this.bV(a)
u=this.bQ(a)
if(this.e.iY(u))a.preventDefault()},
sfe:function(a){this.z=H.m(a,"$ib",[[P.d_,P.V]],"$ab")}}
D.dK.prototype={$iaf:1,$icO:1}
D.af.prototype={$icO:1}
D.dW.prototype={
Y:function(a){var u=this.x
if(u!=null)u.E(a)},
d3:function(a){var u
H.f(a,"$iC")
u=this.y
if(u!=null)u.E(a)},
h1:function(){return this.d3(null)},
he:function(a){var u,t,s
H.m(a,"$ij",[D.af],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eM(s))return!1}return!0},
fE:function(a,b){var u,t,s,r,q,p,o,n=D.af
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gd2(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.f(b[q],"$iaf")
if(p instanceof D.bN)C.a.h(this.r,p)
o=p.go
if(o==null){o=new D.c_()
o.sak(null)
o.saP(null)
o.c=null
o.d=0
p.go=o}H.n(t,s)
if(o.a==null)o.sak(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bB([n])
n.b=!0
this.Y(n)},
hi:function(a,b){var u,t,s,r=D.af
H.m(b,"$ij",[r],"$aj")
for(u=b.gS(b),t=this.gd2();u.w();){s=u.gI(u)
C.a.K(this.e,s)
s.gt().K(0,t)}r=new D.bC([r])
r.b=!0
this.Y(r)},
eM:function(a){var u=C.a.R(this.r,a)
return u},
seN:function(a){this.e=H.m(a,"$ib",[D.dK],"$ab")},
sht:function(a){this.f=H.m(a,"$ib",[D.ea],"$ab")},
seP:function(a){this.r=H.m(a,"$ib",[D.bN],"$ab")},
$aj:function(){return[D.af]},
$aa1:function(){return[D.af]}}
D.ea.prototype={$iaf:1,$icO:1}
D.bN.prototype={
Y:function(a){var u
H.f(a,"$iC")
u=this.go
if(u!=null)u.E(a)},
eO:function(){return this.Y(null)},
gar:function(){var u=this.x!=null?1:0,t=this.y!=null?2:0,s=this.db?8:0
return u+t+4+s},
$iaf:1,
$icO:1}
V.a7.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.ay.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.h5.prototype={}
V.e3.prototype={
ae:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.r])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e3))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.r],o=V.cn(H.c([q.a,q.d,q.r],p),3,0),n=V.cn(H.c([q.b,q.e,q.x],p),3,0),m=V.cn(H.c([q.c,q.f,q.y],p),3,0)
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
V.aq.prototype={
ae:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.r])
return t},
cg:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.c3()
u=1/b1
t=-n
s=-a0
return V.b9((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
B:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b9(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bw:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bv:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a3(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aq))return!1
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
i:function(a){return this.M()},
F:function(a){var u,t,s,r,q,p=this,o=[P.r],n=V.cn(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cn(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cn(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cn(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.F("")}}
V.ae.prototype={
O:function(a,b){return new V.ae(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.a3.prototype={
A:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
B:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
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
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.bL.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bL))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.cV.prototype={
gaC:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cV))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.a6.prototype={
b7:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
B:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.B()
u=this.b
if(typeof u!=="number")return u.B()
return new V.a6(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.mF
return u==null?$.mF=new V.a6(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.a6(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.L.prototype={
b7:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ci:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aH:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.L(-this.a,-this.b,-this.c)},
B:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.K().a)return V.d9()
return new V.L(this.a/b,this.b/b,this.c/b)},
dU:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.ce.prototype={
b7:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ce))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
U.fM.prototype={
bD:function(a){var u=V.q8(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.X():u},
U:function(a){var u=this.y
if(u!=null)u.E(a)},
seu:function(a,b){},
sdV:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bD(u)}s=new D.F("maximumLocation",s,t.b,[P.r])
s.b=!0
t.U(s)}},
sdX:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bD(u)}s=new D.F("minimumLocation",s,t.c,[P.r])
s.b=!0
t.U(s)}},
sa6:function(a,b){var u,t=this
b=t.bD(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.F("location",u,b,[P.r])
u.b=!0
t.U(u)}},
sdW:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.F("maximumVelocity",r,a,[P.r])
r.b=!0
s.U(r)}},
sZ:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.F("velocity",t,a,[P.r])
t.b=!0
u.U(t)}},
sdz:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.F("dampening",u,a,[P.r])
u.b=!0
this.U(u)}},
av:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa6(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sZ(u)}}}
U.dH.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.X():u},
aD:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dH))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.cG.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.X():u},
U:function(a){var u
H.f(a,"$iC")
u=this.e
if(u!=null)u.E(a)},
aj:function(){return this.U(null)},
eR:function(a,b){var u,t,s,r,q,p,o,n=U.ad
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaN(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bB([n])
n.b=!0
this.U(n)},
hg:function(a,b){var u,t,s=U.ad
H.m(b,"$ij",[s],"$aj")
for(u=b.gS(b),t=this.gaN();u.w();)u.gI(u).gt().K(0,t)
s=new D.bC([s])
s.b=!0
this.U(s)},
aD:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.am(r,r.length,[H.q(r,0)]),u=null;r.w();){q=r.d
if(q!=null){t=q.aD(0,b,c)
if(t!=null)u=u==null?t:t.B(0,u)}}s.f=u==null?V.c3():u
r=s.e
if(r!=null)r.ap(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cG))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.P(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ad]},
$aa1:function(){return[U.ad]},
$iad:1}
U.cJ.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.X():u},
U:function(a){var u
H.f(a,"$iC")
u=this.b
if(u!=null)u.E(a)},
aj:function(){return this.U(null)},
aD:function(a,b,c){var u,t=this,s=t.d,r=b.e
if(s<r){t.d=r
s=t.b
if(s!=null)++s.d
s=t.a
s=s==null?null:s.aD(0,b,c)
u=s==null?null:s.cg(0)
t.c=u==null?V.c3():u
s=t.b
if(s!=null)s.ap(0)}return t.c},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
if(!J.P(this.a,b.a))return!1
return!0},
i:function(a){return"Invert"},
$iad:1}
U.ad.prototype={}
U.et.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.X():u},
U:function(a){var u
H.f(a,"$iC")
u=this.fx
if(u!=null)u.E(a)},
aj:function(){return this.U(null)},
ie:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.X():t
u.h(0,s.gfv())
u=s.a.c
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gfz())
u=s.a.c
t=u.c
u=t==null?u.c=D.X():t
u.h(0,s.gfB())
u=s.a.d
t=u.f
u=t==null?u.f=D.X():t
u.h(0,s.gfp())
u=s.a.d
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gfs())
u=s.a.e
t=u.b
u=t==null?u.b=D.X():t
u.h(0,s.gi0())
u=s.a.e
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.ghZ())
u=s.a.e
t=u.c
u=t==null?u.c=D.X():t
u.h(0,s.ghX())
return!0},
ay:function(a){var u=a.a,t=a.b
if(H.I(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.I(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.a6(u,t)},
fw:function(a){var u=this
a=H.y(H.f(a,"$iC"),"$ibG")
if(!J.P(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fA:function(a){var u,t,s,r,q,p,o,n=this
a=H.y(H.f(a,"$iC"),"$ibG")
if(!H.I(n.cx))return
if(H.I(n.ch)){u=a.d.O(0,a.y)
u=new V.a6(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.I(n.e)){u=a.c
t=a.d.O(0,a.y)
u=n.ay(new V.a6(t.a,t.b).B(0,2).u(0,u.gaC()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.ay(new V.a6(s.a,s.b).B(0,2).u(0,u.gaC()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa6(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.O(0,a.z)
n.dx=n.ay(new V.a6(t.a,t.b).B(0,2).u(0,u.gaC()))}n.aj()},
fC:function(a){var u,t,s,r=this
H.f(a,"$iC")
if(!H.I(r.cx))return
r.cx=!1
if(H.I(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sZ(-t*10*u)
r.aj()}},
fq:function(a){var u=this
if(H.y(H.f(a,"$iC"),"$idZ").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ft:function(a){var u,t,s,r,q,p,o,n=this
a=H.y(H.f(a,"$iC"),"$ibG")
if(!J.P(n.d,a.x.b))return
u=a.c
t=a.d
s=t.O(0,a.y)
r=n.ay(new V.a6(s.a,s.b).B(0,2).u(0,u.gaC()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa6(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.O(0,a.z)
n.dx=n.ay(new V.a6(t.a,t.b).B(0,2).u(0,u.gaC()))
n.aj()},
i1:function(a){var u=this
H.f(a,"$iC")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i_:function(a){var u,t,s,r,q,p,o,n=this
a=H.y(H.f(a,"$iC"),"$ien")
if(!H.I(n.cx))return
if(H.I(n.ch)){u=a.d.O(0,a.y)
u=new V.a6(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.I(n.e)){u=a.c
t=a.d.O(0,a.y)
u=n.ay(new V.a6(t.a,t.b).B(0,2).u(0,u.gaC()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.ay(new V.a6(s.a,s.b).B(0,2).u(0,u.gaC()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa6(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.O(0,a.z)
n.dx=n.ay(new V.a6(t.a,t.b).B(0,2).u(0,u.gaC()))}n.aj()},
hY:function(a){var u,t,s,r=this
H.f(a,"$iC")
if(!H.I(r.cx))return
r.cx=!1
if(H.I(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sZ(-t*10*u)
r.aj()}},
aD:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.av(0,u)
r.b.av(0,u)
q=V.mg(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.B(0,V.b9(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iad:1}
M.dG.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.X():u},
aa:function(a){var u
H.f(a,"$iC")
u=this.r
if(u!=null)u.E(a)},
bC:function(){return this.aa(null)},
hk:function(a,b){var u,t,s,r,q,p,o,n=M.aF
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gah(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bB([n])
n.b=!0
this.aa(n)},
hm:function(a,b){var u,t,s=M.aF
H.m(b,"$ij",[s],"$aj")
for(u=b.gS(b),t=this.gah();u.w();)u.gI(u).gt().K(0,t)
s=new D.bC([s])
s.b=!0
this.aa(s)},
au:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.am(u,u.length,[H.q(u,0)]);u.w();){t=u.d
if(t!=null)t.au(a)}s.f=!1},
$aj:function(){return[M.aF]},
$aa1:function(){return[M.aF]},
$iaF:1}
M.dN.prototype={
aa:function(a){var u
H.f(a,"$iC")
u=this.y
if(u!=null)u.E(a)},
bC:function(){return this.aa(null)},
fN:function(a,b){var u,t,s,r,q,p,o,n=E.ap
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gah(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.sak(null)
o.saP(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bB([n])
n.b=!0
this.aa(n)},
fP:function(a,b){var u,t,s=E.ap
H.m(b,"$ij",[s],"$aj")
for(u=b.gS(b),t=this.gah();u.w();)u.gI(u).gt().K(0,t)
s=new D.bC([s])
s.b=!0
this.aa(s)},
sdv:function(a){var u,t,s=this
if(a==null)a=X.mk(1.0471975511965976,null)
u=s.b
if(u!==a){if(u!=null)u.gt().K(0,s.gah())
t=s.b
s.b=a
a.gt().h(0,s.gah())
u=new D.F("camera",t,s.b,[X.dF])
u.b=!0
s.aa(u)}},
seh:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gt().K(0,t.gah())
u=t.c
t.c=b
b.gt().h(0,t.gah())
s=new D.F("target",u,t.c,[X.ej])
s.b=!0
t.aa(s)}},
saX:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().K(0,t.gah())
u=t.d
t.d=a
if(a!=null)a.gt().h(0,t.gah())
s=new D.F("technique",u,t.d,[O.bO])
s.b=!0
t.aa(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.X():u},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.ea(c.d)
c.c.al(a)
u=c.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.b9(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.e9(m)
t=$.ml
if(t==null){t=V.mn()
s=V.mJ()
r=$.mG
if(r==null)r=$.mG=new V.L(0,0,-1)
l=r.u(0,Math.sqrt(r.D(r)))
s=s.aH(l)
k=s.u(0,Math.sqrt(s.D(s)))
j=l.aH(k)
i=new V.L(t.a,t.b,t.c)
h=k.T(0).D(i)
g=j.T(0).D(i)
f=l.T(0).D(i)
t=V.b9(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.ml=t
e=t}else e=t
t=u.b
if(t!=null){d=t.aD(0,a,u)
if(d!=null)e=d.B(0,e)}a.db.e9(e)
u=c.d
if(u!=null)u.av(0,a)
for(u=c.e.a,u=new J.am(u,u.length,[H.q(u,0)]);u.w();)u.d.av(0,a)
for(u=c.e.a,u=new J.am(u,u.length,[H.q(u,0)]);u.w();)u.d.au(a)
c.b.toString
a.cy.ck()
a.db.ck()
c.c.bd(a)
a.e8()},
sf5:function(a,b){this.e=H.m(b,"$ia1",[E.ap],"$aa1")},
$iaF:1}
M.aF.prototype={}
A.dB.prototype={}
A.fA.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iu:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ao.prototype={
gaw:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ao))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.dJ.prototype={}
A.e0.prototype={
eG:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.a5("")
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
A.po(c0,u)
A.pq(c0,u)
A.pp(c0,u)
A.ps(c0,u)
A.pt(c0,u)
A.pr(c0,u)
A.pu(c0,u)
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
b5.dT(0,s.charCodeAt(0)==0?s:s,A.pn(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.y(b5.y.X(0,"invViewMat"),"$iar")
if(t)b5.dy=H.y(b5.y.X(0,"objMat"),"$iar")
if(r)b5.fr=H.y(b5.y.X(0,"viewObjMat"),"$iar")
b5.fy=H.y(b5.y.X(0,"projViewObjMat"),"$iar")
if(c0.ry)b5.k1=H.y(b5.y.X(0,"txt2DMat"),"$id7")
if(c0.x1)b5.k2=H.y(b5.y.X(0,"txtCubeMat"),"$iar")
if(c0.x2)b5.k3=H.y(b5.y.X(0,"colorMat"),"$iar")
b5.sf1(H.c([],[A.ar]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.X(0,"bendMatCount"),"$iaI")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.A(P.B(b7+q+b8));(s&&C.a).h(s,H.y(m,"$iar"))}}if(c0.a.a)b5.r2=H.y(b5.y.X(0,"emissionClr"),"$ia_")
if(c0.b.a)b5.x1=H.y(b5.y.X(0,"ambientClr"),"$ia_")
if(c0.c.a)b5.y2=H.y(b5.y.X(0,"diffuseClr"),"$ia_")
if(c0.d.a)b5.dE=H.y(b5.y.X(0,"invDiffuseClr"),"$ia_")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dG=H.y(b5.y.X(0,"shininess"),"$ia9")
if(t)b5.dF=H.y(b5.y.X(0,"specularClr"),"$ia_")}if(c0.cy){b5.dH=H.y(b5.y.X(0,"envSampler"),"$icb")
if(c0.r.a)b5.dI=H.y(b5.y.X(0,"reflectClr"),"$ia_")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dJ=H.y(b5.y.X(0,"refraction"),"$ia9")
if(t)b5.dK=H.y(b5.y.X(0,"refractClr"),"$ia_")}}if(c0.y.a)b5.dL=H.y(b5.y.X(0,"alpha"),"$ia9")
t=P.l
s=[t,A.aI]
b5.sfb(new H.a2(s))
b5.sfc(new H.a2([t,[P.b,A.c8]]))
b5.shu(new H.a2(s))
b5.shv(new H.a2([t,[P.b,A.c9]]))
b5.shR(new H.a2(s))
b5.shS(new H.a2([t,[P.b,A.cc]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.c8],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aq()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.A(P.B(b7+g+b8))
H.y(m,"$ia_")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.A(P.B(b7+g+b8))
H.y(f,"$ia_")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.A(P.B(b7+g+b8))
H.y(e,"$ia_")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.A(P.B(b7+g+b8))
H.y(m,"$ia_")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.A(P.B(b7+g+b8))
H.y(f,"$ia_")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.A(P.B(b7+o+b8))
H.y(e,"$ica")
a=e}else a=b6
C.a.h(h,new A.c8(b,c,d,m,f,a))}b5.c6.k(0,j,h)
q=b5.c5
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.B(b7+o+b8))
q.k(0,j,H.f(m,"$iaI"))}for(t=c0.Q,s=t.length,r=[A.c9],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.A(P.B(b7+o+b8))
H.y(m,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.A(P.B(b7+o+b8))
H.y(f,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.A(P.B(b7+o+b8))
H.y(e,"$ia_")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.A(P.B(b7+o+b8))
H.y(a0,"$id7")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.A(P.B(b7+o+b8))
H.y(a0,"$icb")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.A(P.B(b7+o+b8))
H.y(a0,"$icb")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.A(P.B(b7+o+b8))
H.y(a2,"$id6")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.A(P.B(b7+o+b8))
H.y(a0,"$ia9")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.A(P.B(b7+o+b8))
H.y(a2,"$ia9")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.A(P.B(b7+o+b8))
H.y(a5,"$ia9")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.c9(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c8.k(0,j,h)
q=b5.c7
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.B(b7+o+b8))
q.k(0,j,H.f(m,"$iaI"))}for(t=c0.ch,s=t.length,r=[A.cc],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.A(P.B(b7+o+b8))
H.y(m,"$ia_")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.A(P.B(b7+o+b8))
H.y(f,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.A(P.B(b7+o+b8))
H.y(e,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.A(P.B(b7+o+b8))
H.y(a0,"$ia_")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.A(P.B(b7+o+b8))
H.y(a2,"$ia_")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.A(P.B(b7+o+b8))
H.y(a5,"$ia_")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.A(P.B(b7+o+b8))
H.y(a9,"$ia9")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.A(P.B(b7+o+b8))
H.y(b0,"$ia9")
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
if(a2==null)H.A(P.B(b7+g+b8))
H.y(a2,"$id6")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.A(P.B(b7+g+b8))
H.y(a2,"$ia9")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.A(P.B(b7+g+b8))
H.y(a5,"$ia9")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.A(P.B(b7+g+b8))
H.y(a2,"$ia9")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.A(P.B(b7+g+b8))
H.y(a5,"$ia9")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.A(P.B(b7+g+b8))
H.y(a9,"$ia9")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.A(P.B(b7+g+b8))
H.y(a2,"$ica")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.A(P.B(b7+o+b8))
H.y(a2,"$ica")
a3=a2}else a3=b6
C.a.h(h,new A.cc(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.ca.k(0,j,h)
q=b5.c9
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.B(b7+o+b8))
q.k(0,j,H.f(m,"$iaI"))}}},
hK:function(a,b){},
sf1:function(a){this.r1=H.m(a,"$ib",[A.ar],"$ab")},
sfb:function(a){this.c5=H.m(a,"$iz",[P.l,A.aI],"$az")},
sfc:function(a){this.c6=H.m(a,"$iz",[P.l,[P.b,A.c8]],"$az")},
shu:function(a){this.c7=H.m(a,"$iz",[P.l,A.aI],"$az")},
shv:function(a){this.c8=H.m(a,"$iz",[P.l,[P.b,A.c9]],"$az")},
shR:function(a){this.c9=H.m(a,"$iz",[P.l,A.aI],"$az")},
shS:function(a){this.ca=H.m(a,"$iz",[P.l,[P.b,A.cc]],"$az")}}
A.aN.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aR.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aV.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hI.prototype={
i:function(a){return this.b6}}
A.c8.prototype={}
A.c9.prototype={}
A.cc.prototype={}
A.cX.prototype={
cC:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dT:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cT(b,35633)
r.f=r.cT(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.I(H.lL(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.A(P.B("Failed to link shader: "+H.i(s)))}r.hM()
r.hO()},
al:function(a){a.a.useProgram(this.r)
this.x.iu()},
cT:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.I(H.lL(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.B("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hM:function(){var u,t,s,r=this,q=H.c([],[A.dB]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dB(p,t.name,s))}r.x=new A.fA(q)},
hO:function(){var u,t,s,r=this,q=H.c([],[A.eo]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iq(t.type,t.size,t.name,s))}r.y=new A.ja(q)},
aO:function(a,b,c){var u=this.a
if(a===1)return new A.aI(u,b,c)
else return A.lx(u,this.r,b,a,c)},
f8:function(a,b,c){var u=this.a
if(a===1)return new A.ca(u,b,c)
else return A.lx(u,this.r,b,a,c)},
f9:function(a,b,c){var u=this.a
if(a===1)return new A.cb(u,b,c)
else return A.lx(u,this.r,b,a,c)},
bk:function(a,b){return new P.eF(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iq:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aO(b,c,d)
case 5121:return u.aO(b,c,d)
case 5122:return u.aO(b,c,d)
case 5123:return u.aO(b,c,d)
case 5124:return u.aO(b,c,d)
case 5125:return u.aO(b,c,d)
case 5126:return new A.a9(u.a,c,d)
case 35664:return new A.j6(u.a,c,d)
case 35665:return new A.a_(u.a,c,d)
case 35666:return new A.d6(u.a,c,d)
case 35667:return new A.j7(u.a,c,d)
case 35668:return new A.j8(u.a,c,d)
case 35669:return new A.j9(u.a,c,d)
case 35674:return new A.jb(u.a,c,d)
case 35675:return new A.d7(u.a,c,d)
case 35676:return new A.ar(u.a,c,d)
case 35678:return u.f8(b,c,d)
case 35680:return u.f9(b,c,d)
case 35670:throw H.d(u.bk("BOOL",c))
case 35671:throw H.d(u.bk("BOOL_VEC2",c))
case 35672:throw H.d(u.bk("BOOL_VEC3",c))
case 35673:throw H.d(u.bk("BOOL_VEC4",c))
default:throw H.d(P.B("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.eo.prototype={}
A.ja.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
X:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.B("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aI.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
si3:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.a9.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a_.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d6.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d7.prototype={
ai:function(a){var u=new Float32Array(H.ci(H.m(a,"$ib",[P.r],"$ab")))
C.c.eo(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.ar.prototype={
ai:function(a){var u=new Float32Array(H.ci(H.m(a,"$ib",[P.r],"$ab")))
C.c.ep(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.ca.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.cb.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kx.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ci(s.b,b).ci(s.d.ci(s.c,b),c)
a.sa6(0,new V.a3(r.a,r.b,r.c))
a.sej(r.u(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sdr(new V.bL(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:10}
F.kK.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:20}
F.kM.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.E(p)
s=-s*p
u=r*p
a.sa6(0,new V.a3(s,u,q))
u=new V.L(s,u,q)
a.sej(u.u(0,Math.sqrt(u.D(u))))
a.sdr(new V.bL(1-c,2+c,-1,-1))},
$S:10}
F.kN.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kO.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.l7.prototype={
$2:function(a,b){return 0},
$S:20}
F.l8.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.E(s)
u=a.f
t=new V.L(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.D(t))).B(0,this.b+s)
a.sa6(0,new V.a3(s.a,s.b,s.c))},
$S:10}
F.la.prototype={
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)},
$S:18}
F.kW.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a3(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:18}
F.kL.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lY(n.$1(o),m)
m=J.lY(n.$1(o+3.141592653589793/p.c),m).O(0,l)
m=new V.L(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.D(m)))
n=$.mH
if(n==null){n=new V.L(1,0,0)
$.mH=n
t=n}else t=n
n=u.aH(!J.P(u,t)?V.mK():t)
s=n.u(0,Math.sqrt(n.D(n)))
n=s.aH(u)
t=n.u(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.B(0,n*m)
m=s.B(0,q*m)
a.sa6(0,l.A(0,new V.a3(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:10}
F.a8.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.K(u.a.a.d.b,u)
u.a.a.a_()}u.bS()
u.bT()
u.hA()},
bW:function(a){this.a=a
C.a.h(a.d.b,this)},
bX:function(a){this.b=a
C.a.h(a.d.c,this)},
hL:function(a){this.c=a
C.a.h(a.d.d,this)},
bS:function(){var u=this.a
if(u!=null){C.a.K(u.d.b,this)
this.a=null}},
bT:function(){var u=this.b
if(u!=null){C.a.K(u.d.c,this)
this.b=null}},
hA:function(){var u=this.c
if(u!=null){C.a.K(u.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
f0:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d9()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dU())return
return s.u(0,Math.sqrt(s.D(s)))},
f4:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.O(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.D(r)))
r=t.O(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.aH(r.u(0,Math.sqrt(r.D(r))))
return r.u(0,Math.sqrt(r.D(r)))},
c1:function(){var u,t=this
if(t.d!=null)return!0
u=t.f0()
if(u==null){u=t.f4()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
f_:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d9()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dU())return
return s.u(0,Math.sqrt(s.D(s)))},
f3:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.O(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.O(0,g).B(0,p).A(0,g).O(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.D(l)))
l=o.aH(q)
l=l.u(0,Math.sqrt(l.D(l))).aH(o)
q=l.u(0,Math.sqrt(l.D(l)))}return q},
c_:function(){var u,t=this
if(t.e!=null)return!0
u=t.f_()
if(u==null){u=t.f3()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
gij:function(a){var u=this
if(J.P(u.a,u.b))return!0
if(J.P(u.b,u.c))return!0
if(J.P(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){var u,t,s=this
if(s.gb5())return a+"disposed"
u=a+C.b.ao(J.at(s.a.e),0)+", "+C.b.ao(J.at(s.b.e),0)+", "+C.b.ao(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.F("")}}
F.h8.prototype={}
F.iA.prototype={
b8:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bm.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.K(u.a.a.c.b,u)
u.a.a.a_()}u.bS()
u.bT()},
bW:function(a){this.a=a
C.a.h(a.c.b,this)},
bX:function(a){this.b=a
C.a.h(a.c.c,this)},
bS:function(){var u=this.a
if(u!=null){C.a.K(u.c.b,this)
this.a=null}},
bT:function(){var u=this.b
if(u!=null){C.a.K(u.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){if(this.gb5())return a+"disposed"
return a+C.b.ao(J.at(this.a.e),0)+", "+C.b.ao(J.at(this.b.e),0)},
M:function(){return this.F("")}}
F.ht.prototype={}
F.j4.prototype={
b8:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
return t==u.e}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
return t==u.e}else return!1}}}
F.bI.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ao(J.at(u.e),0)},
M:function(){return this.F("")}}
F.ef.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.X():u},
b9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.im())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bI()
if(n.a==null)H.A(P.B("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.o5(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cD(l,k,i)}g=h.e
if(g!=null)g.ap(0)},
aA:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aA()||!1
if(!t.a.aA())u=!1
s=t.e
if(s!=null)s.ap(0)
return u},
iM:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.q(o,0)])
for(o=[F.aw];u.length!==0;){t=C.a.giy(u)
C.a.eb(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.b8(0,t,q)){C.a.h(s,q)
C.a.eb(u,r)}}if(s.length>1)b.b9(s)}}p.a.v()
p.c.cn()
p.d.cn()
p.b.j4()
p.c.co(new F.j4())
p.d.co(new F.iA())
o=p.e
if(o!=null)o.ap(0)},
bY:function(){this.iM(new F.jx(),new F.i5())},
cb:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cb()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.e(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdY(new V.L(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.L(s,r,o).u(0,Math.sqrt(s*s+r*r+o*o))
if(!J.P(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}o=p.e
if(o!=null)o.ap(0)},
du:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b0()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bq().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.bU().a)!==0)++s
if((t&$.bV().a)!==0)++s
if((t&$.dv().a)!==0)++s
if((t&$.dw().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.bo().a)!==0)++s
r=a3.gcw(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.r
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dD])
for(n=0,m=0;m<s;++m){l=a3.ic(m)
k=l.gcw(l)
C.a.k(o,m,new Z.dD(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iJ(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ci(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cx(new Z.ev(a0,f),o,a3)
e.sfk(H.c([],[Z.bA]))
if(a.b.b.length!==0){t=P.l
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)}b=Z.lA(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bA(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)}b=Z.lA(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bA(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.v()
C.a.h(d,c.e)}b=Z.lA(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bA(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.F(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.F(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.F(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.F(t))}return C.a.m(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.E(null)},
$iqg:1}
F.it.prototype={
i7:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.aw],"$ab")
u=H.c([],[F.a8])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.e(a,p)
p=a[p]
if(q>=o)return H.e(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cD(s,p,o))}}return u},
i8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.aw],"$ab")
u=H.c([],[F.a8])
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
gn:function(a){return this.b.length},
co:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b8(0,p,n)){p.b4()
break}}}}},
cn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gij(s)
if(t)s.b4()}},
aA:function(){var u,t,s,r
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
if(p!=null)r.d=new V.L(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.L(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.E(null)}},
i:function(a){return this.M()},
F:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
M:function(){return this.F("")},
sff:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")}}
F.iu.prototype={
gn:function(a){return this.b.length},
co:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b8(0,p,n)){p.b4()
break}}}}},
cn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.P(s.a,s.b)
if(t)s.b4()}},
i:function(a){return this.M()},
F:function(a){var u,t,s=H.c([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].F(a+(""+u+". ")))}return C.a.m(s,"\n")},
M:function(){return this.F("")},
sfl:function(a){this.b=H.m(a,"$ib",[F.bm],"$ab")}}
F.iv.prototype={
gn:function(a){return this.b.length},
j4:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.a.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
F:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
M:function(){return this.F("")},
sbP:function(a){this.b=H.m(a,"$ib",[F.bI],"$ab")}}
F.aw.prototype={
c4:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.eu(u.cx,r,o,t,s,q,p,a,n)},
im:function(){return this.c4(null)},
sa6:function(a,b){var u
if(!J.P(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
sdY:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.D(a)))
if(!J.P(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
sej:function(a){var u
if(!J.P(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sdr:function(a){var u
if(!J.P(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
iJ:function(a){var u,t,s=this
if(a.p(0,$.b0())){u=s.f
t=[P.r]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bq())){u=s.r
t=[P.r]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bp())){u=s.x
t=[P.r]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bU())){u=s.y
t=[P.r]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bV())){u=s.z
t=[P.r]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.dv())){u=s.Q
t=[P.r]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.dw())){u=s.Q
t=[P.r]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.ct()))return H.c([s.ch],[P.r])
else if(a.p(0,$.bo())){u=s.cx
t=[P.r]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.r])},
c1:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d9()
t.d.G(0,new F.jC(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ap(0)}return!0},
c_:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d9()
t.d.G(0,new F.jB(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ap(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
C.a.h(q,C.b.ao(J.at(s.e),0))
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
C.a.h(q,V.S(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
M:function(){return this.F("")}}
F.jC.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:9}
F.jB.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:9}
F.js.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.B("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a_()
return!0},
i9:function(a,b,c,d,e,f){var u=F.eu(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
aA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c1()
return!0},
c0:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c_()
return!0},
ii:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.M()},
F:function(a){var u,t,s,r
this.v()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].F(a))
return C.a.m(u,"\n")},
M:function(){return this.F("")},
si4:function(a){this.c=H.m(a,"$ib",[F.aw],"$ab")}}
F.jt.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
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
G:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.G(u.b,b)
C.a.G(u.c,new F.ju(u,b))
C.a.G(u.d,new F.jv(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfg:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")},
sfh:function(a){this.c=H.m(a,"$ib",[F.a8],"$ab")},
sfi:function(a){this.d=H.m(a,"$ib",[F.a8],"$ab")}}
F.ju.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.P(a.a,this.a))this.b.$1(a)},
$S:9}
F.jv.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)},
$S:9}
F.jw.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfm:function(a){this.b=H.m(a,"$ib",[F.bm],"$ab")},
sfn:function(a){this.c=H.m(a,"$ib",[F.bm],"$ab")}}
F.jy.prototype={}
F.jx.prototype={
b8:function(a,b,c){return J.P(b.f,c.f)}}
F.jz.prototype={}
F.i5.prototype={
b9:function(a){var u,t,s,r
H.m(a,"$ib",[F.aw],"$ab")
u=V.d9()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.D(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].sdY(u)
return}}
F.jA.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sbP:function(a){this.b=H.m(a,"$ib",[F.bI],"$ab")}}
O.fX.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.X():u},
a4:function(a){var u=this.r
if(u!=null)u.E(a)},
av:function(a,b){},
ec:function(a,b){var u,t,s,r,q=this,p=q.a
if(p==null){p=q.f
u="Grey"+(p?"Point":"View")+"Depth"
t=H.f(a.fr.j(0,u),"$idJ")
if(t==null){u=a.a
s="Grey"+(p?"Point":"View")+"Depth"
t=new A.dJ(u,s)
t.cC(u,s)
p=p?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = length(loc.xyz);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n"
p+="  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.dT(0,"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n",p.charCodeAt(0)==0?p:p)
t.z=t.x.j(0,"posAttr")
t.Q=H.y(t.y.j(0,"width"),"$ia9")
t.ch=H.y(t.y.j(0,"stop"),"$ia9")
t.cx=H.y(t.y.j(0,"viewObjMat"),"$iar")
t.cy=H.y(t.y.j(0,"projMat"),"$iar")
a.dn(t)}q.a=t
p=t}u=b.e
if((!(u instanceof Z.cx)?b.e=null:u)==null){p=b.d.du(new Z.ew(a.a),$.b0())
u=p.aI($.b0())
s=q.a
u.e=s.z.c
b.e=p
p=s}p.al(a)
u=q.b
s=q.c
r=p.Q
C.c.a2(r.a,r.d,u-s)
s=q.c
u=p.ch
C.c.a2(u.a,u.d,s)
s=a.cy
s=s.ga0(s)
u=p.cy
u.toString
u.ai(s.ae(0,!0))
s=a.ges()
p=p.cx
p.toString
p.ai(s.ae(0,!0))
p=b.e
p.al(a)
p.au(a)
p.bd(a)
p=q.a
p.toString
a.a.useProgram(null)
p.x.dB()}}
O.e1.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.X():u},
a4:function(a){var u
H.f(a,"$iC")
u=this.fr
if(u!=null)u.E(a)},
eU:function(){return this.a4(null)},
d8:function(a){H.f(a,"$iC")
this.a=null
this.a4(a)},
hF:function(){return this.d8(null)},
fG:function(a,b){var u=V.aq
H.m(b,"$ij",[u],"$aj")
u=new D.bB([u])
u.b=!0
this.a4(u)},
fI:function(a,b){var u=V.aq
H.m(b,"$ij",[u],"$aj")
u=new D.bC([u])
u.b=!0
this.a4(u)},
cQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a2([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gar()
p=h.j(0,r.gar())
h.k(0,q,p==null?1:p)}o=H.c([],[A.aN])
h.G(0,new O.hM(j,o))
C.a.bA(o,new O.hN())
n=new H.a2([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gar()
p=n.j(0,r.gar())
n.k(0,q,p==null?1:p)}m=H.c([],[A.aR])
n.G(0,new O.hO(j,m))
C.a.bA(m,new O.hP())
l=new H.a2([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){r=i[s]
t=r.gar()
q=l.j(0,r.gar())
l.k(0,t,q==null?1:q)}k=H.c([],[A.aV])
l.G(0,new O.hQ(j,k))
C.a.bA(k,new O.hR())
i=C.d.ac(j.e.a.length+3,4)
j.dy.e
return A.oc(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
eZ:function(a,b){H.m(a,"$ib",[T.d2],"$ab")
if(b!=null)if(!C.a.R(a,b)){b.a=a.length
C.a.h(a,b)}},
av:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.am(u,u.length,[H.q(u,0)]);u.w();){t=u.d
t.toString
s=$.bK
t.a=s==null?$.bK=new V.a3(0,0,0):s
s=$.jr
t.b=s==null?$.jr=new V.L(0,0,1):s
s=$.jq
t.c=s==null?$.jq=new V.L(0,1,0):s
s=$.jp
t.d=s==null?$.jp=new V.L(-1,0,0):s
s=t.f
if(s!=null){r=s.aD(0,b,t)
if(r!=null){t.a=r.bv(t.a)
s=r.bw(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.u(0,Math.sqrt(q*q+p*p+o*o))
o=r.bw(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.u(0,Math.sqrt(p*p+q*q+s*s))
s=r.bw(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.u(0,Math.sqrt(q*q+p*p+o*o))}}}},
ec:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cQ()
u=H.f(b4.fr.j(0,b3.b6),"$ie0")
if(u==null){u=A.ob(b3,b4.a)
b4.dn(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dD
b3=b5.e
if(!(b3 instanceof Z.cx))b3=b5.e=null
if(b3==null||!b3.d.p(0,s)){b3=t.k3
if(b3)b5.d.aA()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.c0()
q.a.c0()
q=q.e
if(q!=null)q.ap(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.ii()
p=p.e
if(p!=null)p.ap(0)}n=b5.d.du(new Z.ew(b4.a),s)
n.aI($.b0()).e=b2.a.Q.c
if(b3)n.aI($.bq()).e=b2.a.cx.c
if(r)n.aI($.bp()).e=b2.a.ch.c
if(t.r1)n.aI($.bU()).e=b2.a.cy.c
if(q)n.aI($.bV()).e=b2.a.db.c
if(t.rx)n.aI($.bo()).e=b2.a.dx.c
b5.e=n}b3=T.d2
m=H.c([],[b3])
b2.a.al(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga0(q)
r=r.dy
r.toString
r.ai(q.ae(0,!0))}if(t.fr){r=b2.a
q=b4.ges()
r=r.fr
r.toString
r.ai(q.ae(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gj2()
p=b4.dx
p=b4.ch=q.B(0,p.ga0(p))
q=p}r=r.fy
r.toString
r.ai(q.ae(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ai(C.k.ae(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ai(C.k.ae(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ai(C.k.ae(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.c.bx(r.a,r.d,l)
for(r=[P.r],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iaq")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.ci(H.m(p.ae(0,!0),"$ib",r,"$ab")))
C.c.ep(q.a,q.d,!1,j)}}if(t.a.a){r=b2.a
q=b2.f.f
r=r.r2
C.c.V(r.a,r.d,q.a,q.b,q.c)}if(t.id){if(t.b.a){r=b2.a
q=b2.r.f
r=r.x1
C.c.V(r.a,r.d,q.a,q.b,q.c)}if(t.c.a){r=b2.a
q=b2.x.f
r=r.y2
C.c.V(r.a,r.d,q.a,q.b,q.c)}if(t.d.a){r=b2.a
q=b2.y.f
r=r.dE
C.c.V(r.a,r.d,q.a,q.b,q.c)}r=t.e.a
if(!r)q=!1
else q=!0
if(q){q=b2.a
p=b2.z.ch
q=q.dG
C.c.a2(q.a,q.d,p)}if(r){r=b2.a
q=b2.z.f
r=r.dF
C.c.V(r.a,r.d,q.a,q.b,q.c)}r=t.z
if(r.length>0){q=b4.db
i=q.ga0(q)
q=P.l
h=new H.a2([q,q])
for(q=b2.dx.e,p=q.length,o=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gar()
d=h.j(0,e)
if(d==null)d=0
h.k(0,e,d+1)
c=J.dx(b2.a.c6.j(0,e),d)
b=i.bw(f.git(f))
a=b.a
a0=b.b
a1=b.c
a1=b.u(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.c.V(a0.a,a0.d,a,b,a1)
a1=f.gaU(f)
b=c.f
C.c.V(b.a,b.d,a1.a,a1.b,a1.c)
f.gaY()
b=f.git(f)
a=c.d
C.c.V(a.a,a.d,b.a,b.b,b.c)
b=f.gjE()
a=c.b
C.c.V(a.a,a.d,b.a,b.b,b.c)
b=f.gcp(f)
a=c.c
C.c.V(a.a,a.d,b.a,b.b,b.c)
b=f.gaY()
H.m(m,"$ib",o,"$ab")
if(!C.a.R(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaY()
a=b.gbr(b)
if(a){a=c.r
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.c5.j(0,p)
C.c.bx(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga0(q)
q=P.l
a2=new H.a2([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],b=[P.r],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gar()
d=a2.j(0,e)
if(d==null)d=0
a2.k(0,e,d+1)
c=J.dx(b2.a.c8.j(0,e),d)
a3=i.B(0,f.ga0(f))
a=f.ga0(f)
a0=$.bK
a=a.bv(a0==null?$.bK=new V.a3(0,0,0):a0)
a0=c.b
C.c.V(a0.a,a0.d,a.a,a.b,a.c)
a=$.bK
a=a3.bv(a==null?$.bK=new V.a3(0,0,0):a)
a0=c.c
C.c.V(a0.a,a0.d,a.a,a.b,a.c)
a=f.gaU(f)
a0=c.e
C.c.V(a0.a,a0.d,a.a,a.b,a.c)
f.gaY()
a=a3.cg(0)
a0=a.a
a1=a.b
a4=a.c
a5=a.e
a6=a.f
a7=a.r
a8=a.y
a9=a.z
a=a.Q
b0=c.d
b0.toString
j=new Float32Array(H.ci(H.m(new V.e3(a0,a1,a4,a5,a6,a7,a8,a9,a).ae(0,!0),"$ib",b,"$ab")))
C.c.eo(b0.a,b0.d,!1,j)
f.gaY()
a=f.gaY()
H.m(m,"$ib",o,"$ab")
if(!C.a.R(m,a)){a.a=m.length
C.a.h(m,a)}a=f.gaY()
a0=a.gbr(a)
if(a0){a0=c.f
a0.toString
a1=a.gbr(a)
if(!a1)a0.a.uniform1i(a0.d,0)
else{a=a.giD(a)
a0.a.uniform1i(a0.d,a)}}f.gcv()
a=f.gjj()
a0=c.x
C.c.en(a0.a,a0.d,a.a,a.b,a.c,a.d)
a=f.gcv()
if(!C.a.R(m,a)){a.a=m.length
C.a.h(m,a)}a=f.gcv()
a0=a.gbr(a)
if(a0){a0=c.r
a0.toString
a1=a.gbr(a)
if(!a1)a0.a.uniform1i(a0.d,0)
else{a=a.giD(a)
a0.a.uniform1i(a0.d,a)}}if(f.gjn()){a=f.gjk()
a0=c.y
C.c.a2(a0.a,a0.d,a)
a=f.gjl()
a0=c.z
C.c.a2(a0.a,a0.d,a)
a=f.gjm()
a0=c.Q
C.c.a2(a0.a,a0.d,a)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=a2.j(0,p)
if(l==null)l=0
p=b2.a.c7.j(0,p)
C.c.bx(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga0(q)
q=P.l
b1=new H.a2([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gar()
d=b1.j(0,e)
if(d==null)d=0
b1.k(0,e,d+1)
c=J.dx(b2.a.ca.j(0,e),d)
o=f.a
b=c.b
a=o.a
a0=o.b
o=o.c
C.c.V(b.a,b.d,a,a0,o)
o=f.b
a0=o.a
a=o.b
b=o.c
b=o.u(0,Math.sqrt(a0*a0+a*a+b*b))
a=c.c
a0=b.a
o=b.b
b=b.c
C.c.V(a.a,a.d,a0,o,b)
b=i.bv(f.a)
o=c.d
C.c.V(o.a,o.d,b.a,b.b,b.c)
b=f.r
o=c.e
C.c.V(o.a,o.d,b.a,b.b,b.c)
if(f.x!=null||f.y!=null){o=f.c
b=c.f
b.toString
a=o.a
a0=o.b
o=o.c
C.c.V(b.a,b.d,a,a0,o)
o=f.d
a0=c.r
a0.toString
a=o.a
b=o.b
o=o.c
C.c.V(a0.a,a0.d,a,b,o)
o=f.z
b=c.x
C.c.a2(b.a,b.d,o)
o=f.Q
b=c.y
C.c.a2(b.a,b.d,o)}o=f.x
b=o!=null
if(b){H.m(m,"$ib",b3,"$ab")
if(b)if(!C.a.R(m,o)){o.a=m.length
C.a.h(m,o)}o=f.x
b=o!=null
if(b&&o.d){a=c.dx
a.toString
if(!b||!o.d)a.a.uniform1i(a.d,0)
else{o=o.a
a.a.uniform1i(a.d,o)}}}if(f.y!=null){o=f.e
b=c.z
b.toString
a=o.a
a0=o.b
a1=o.c
o=o.d
C.c.en(b.a,b.d,a,a0,a1,o)
o=f.y
H.m(m,"$ib",b3,"$ab")
if(o!=null)if(!C.a.R(m,o)){o.a=m.length
C.a.h(m,o)}o=f.y
b=o!=null
if(b&&o.d){a=c.dy
a.toString
if(!b||!o.d)a.a.uniform1i(a.d,0)
else{o=o.a
a.a.uniform1i(a.d,o)}}}if(f.db){o=f.cy
b=c.Q
C.c.a2(b.a,b.d,o)
o=f.dx
b=c.ch
C.c.a2(b.a,b.d,o)}o=f.dy
b=c.cx
C.c.a2(b.a,b.d,o)
o=f.fr
b=c.cy
C.c.a2(b.a,b.d,o)
o=f.fx
b=c.db
C.c.a2(b.a,b.d,o)}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.u)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.c9.j(0,q)
C.c.bx(q.a,q.d,l)}}}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga0(r).cg(0)}b3=b3.id
b3.toString
b3.ai(r.ae(0,!0))}if(t.cy){b2.eZ(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hK(b3.dH,r)
if(t.r.a){b3=b2.a
r=b2.cx.f
b3=b3.dI
C.c.V(b3.a,b3.d,r.a,r.b,r.c)}b3=t.x.a
if(!b3)r=!1
else r=!0
if(r){r=b2.a
q=b2.cy.ch
r=r.dJ
C.c.a2(r.a,r.d,q)}if(b3){b3=b2.a
r=b2.cy.f
b3=b3.dK
C.c.V(b3.a,b3.d,r.a,r.b,r.c)}}b3=t.y.a
r=!b3
if(r)q=!1
else q=!0
if(q){if(b3){b3=b2.a
q=b2.db.f
b3=b3.dL
C.c.a2(b3.a,b3.d,q)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(b3=b4.a,k=0;k<m.length;++k){q=m[k]
if(!q.c&&q.d){q.c=!0
b3.activeTexture(33984+q.a)
b3.bindTexture(3553,q.b)}}q=b5.e
q.al(b4)
q.au(b4)
q.bd(b4)
if(r)r=!1
else r=!0
if(r)b3.disable(3042)
for(k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(3553,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.dB()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cQ().b6},
sf2:function(a){this.e=H.m(a,"$ia1",[V.aq],"$aa1")}}
O.hM.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aN(a,C.d.ac(b+3,4)*4))},
$S:14}
O.hN.prototype={
$2:function(a,b){H.f(a,"$iaN")
H.f(b,"$iaN")
return J.ld(a.a,b.a)},
$S:51}
O.hO.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aR(a,C.d.ac(b+3,4)*4))},
$S:14}
O.hP.prototype={
$2:function(a,b){H.f(a,"$iaR")
H.f(b,"$iaR")
return J.ld(a.a,b.a)},
$S:52}
O.hQ.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aV(a,C.d.ac(b+3,4)*4))},
$S:14}
O.hR.prototype={
$2:function(a,b){H.f(a,"$iaV")
H.f(b,"$iaV")
return J.ld(a.a,b.a)},
$S:53}
O.hG.prototype={
aF:function(){var u,t=this
t.cA()
u=t.f
if(!(Math.abs(u-1)<$.K().a)){t.f=1
u=new D.F(t.b,u,1,[P.r])
u.b=!0
t.a.a4(u)}}}
O.e2.prototype={
aF:function(){},
dd:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aF()
u=s.a
u.a=null
u.a4(null)}}}
O.hH.prototype={}
O.b8.prototype={
da:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.F(s.b+".color",u,a,[V.a7])
t.b=!0
s.a.a4(t)}},
aF:function(){this.cA()
this.da(new V.a7(1,1,1))},
saU:function(a,b){this.dd(new A.ao(!0,!1,!1))
this.da(b)}}
O.hJ.prototype={}
O.hK.prototype={
aF:function(){var u,t=this
t.cB()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.F(t.b+".refraction",u,1,[P.r])
u.b=!0
t.a.a4(u)}}}
O.hL.prototype={
de:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.F(u.b+".shininess",t,a,[P.r])
t.b=!0
u.a.a4(t)}},
aF:function(){this.cB()
this.de(100)}}
O.bO.prototype={}
T.d2.prototype={}
T.d3.prototype={}
T.iR.prototype={
dc:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.dC()}},
gt:function(){var u=this.y
return u==null?this.y=D.X():u}}
T.iS.prototype={
iK:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=T.lv(q)
r=W.o
W.aa(u,"load",H.n(new T.iT(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hG:function(a,b,c){var u,t,s,r
b=V.du(b)
u=V.du(a.width)
t=V.du(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lg()
s.width=u
s.height=t
r=H.f(C.j.ew(s,"2d"),"$icy")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pH(r.getImageData(0,0,s.width,s.height))}}}
T.iT.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.hG(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.c.jb(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dc();++u.e},
$S:12}
V.bi.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"},
$iaA:1}
V.aA.prototype={}
V.e_.prototype={
aJ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aJ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sab:function(a){this.a=H.m(a,"$ib",[V.aA],"$ab")},
$iaA:1}
V.au.prototype={
aJ:function(a,b){return!this.eD(0,b)},
i:function(a){return"!["+this.cz(0)+"]"}}
V.ii.prototype={
aJ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c5(this.a),t=H.c5(this.b)
return u+".."+t},
$iaA:1}
V.is.prototype={
eI:function(a){var u,t
if(a.a.length<=0)throw H.d(P.B("May not create a SetMatcher with zero characters."))
u=new H.a2([P.l,P.Q])
for(t=new H.cL(a,a.gn(a),[H.al(a,"x",0)]);t.w();)u.k(0,t.d,!0)
this.shJ(u)},
aJ:function(a,b){return this.a.bm(0,b)},
i:function(a){var u=this.a
return P.d0(u.ga8(u),0,null)},
shJ:function(a){this.a=H.m(a,"$iz",[P.l,P.Q],"$az")},
$iaA:1}
V.cY.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d5(this.a.l(0,b))
r.sab(H.c([],[V.aA]))
r.c=!1
C.a.h(this.c,r)
return r},
ix:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aJ(0,a))return r}return},
i:function(a){return this.b},
si2:function(a){this.c=H.m(a,"$ib",[V.d5],"$ab")}}
V.em.prototype={
i:function(a){var u=H.lU(this.b,"\n","\\n"),t=H.lU(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d4.prototype={
aK:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shB:function(a){var u=P.h
this.c=H.m(a,"$iz",[u,u],"$az")}}
V.iW.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cY(this,b)
u.si2(H.c([],[V.d5]))
u.d=null
this.a.k(0,b,u)}return u},
N:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d4(a)
u=P.h
t.shB(new H.a2([u,u]))
this.b.k(0,a,t)}return t},
em:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[V.em]),k=this.c,j=[P.l],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.C(a,s)
q=k.ix(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d0(i,0,m)
throw H.d(P.B("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d0(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.em(n==null?o.b:n,p,s)}++s}}},
shT:function(a){this.a=H.m(a,"$iz",[P.h,V.cY],"$az")},
shW:function(a){this.b=H.m(a,"$iz",[P.h,V.d4],"$az")}}
V.d5.prototype={
i:function(a){return this.b.b+": "+this.cz(0)}}
X.fF.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.X():u},
a5:function(a){var u=this.fr
if(u!=null)u.E(a)},
sax:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.F("width",u,b,[P.l])
u.b=!0
t.a5(u)}},
sas:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.F("height",u,b,[P.l])
u.b=!0
t.a5(u)}},
al:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=H.ab(u.getParameter(3379))
p=V.du(s)
o=V.du(r)
q=V.du(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.c.ei(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.lv(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dc()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.dC()
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
a.c=C.e.a1(s*i.a)
r=t.d
a.d=C.e.a1(r*i.b)
l=t.a
k=i.c
if(typeof k!=="number")return H.E(k)
j=C.e.a1(l*k)
t=t.b
l=i.d
if(typeof l!=="number")return H.E(l)
u.viewport(j,C.e.a1(t*l),C.e.a1(s*k),C.e.a1(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
bd:function(a){a.a.bindFramebuffer(36160,null)}}
X.dF.prototype={$icO:1}
X.hf.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.X():u},
al:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.E(u)
q=C.e.a1(r*u)
r=s.b
if(typeof t!=="number")return H.E(t)
p=C.e.a1(r*t)
r=C.e.a1(s.c*u)
a.c=r
s=C.e.a1(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
bd:function(a){}}
X.e9.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.X():u},
a5:function(a){var u
H.f(a,"$iC")
u=this.f
if(u!=null)u.E(a)},
fL:function(){return this.a5(null)},
saV:function(a){var u,t,s=this
if(!J.P(s.b,a)){u=s.b
if(u!=null)u.gt().K(0,s.gd1())
t=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gd1())
u=new D.F("mover",t,s.b,[U.ad])
u.b=!0
s.a5(u)}},
$icO:1,
$idF:1}
X.ej.prototype={}
V.bu.prototype={
bf:function(a){this.b=new P.hk(C.Q)
this.c=null
this.sbK(H.c([],[[P.b,W.aD]]))},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aD]))
u=a.split("\n")
for(l=u.length,t=[W.aD],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.N(q)
o=m.b.f7(q,0,q.length)
n=o==null?q:o
C.O.ey(p,H.lU(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaB(m.d),p)}},
e6:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sbK(H.c([],[[P.b,W.aD]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bn():t).em(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.bt(t[r])},
sbK:function(a){this.d=H.m(a,"$ib",[[P.b,W.aD]],"$ab")}}
V.l6.prototype={
$1:function(a){var u
H.f(a,"$ibc")
u=C.e.el(this.a.giB(),2)
if(u!=="0.00")P.lT(u+" fps")},
$S:55}
V.fV.prototype={
bt:function(a){var u=this
switch(a.a){case"Class":u.L(a.b,"#551")
break
case"Comment":u.L(a.b,"#777")
break
case"Id":u.L(a.b,"#111")
break
case"Num":u.L(a.b,"#191")
break
case"Reserved":u.L(a.b,"#119")
break
case"String":u.L(a.b,"#171")
break
case"Symbol":u.L(a.b,"#616")
break
case"Type":u.L(a.b,"#B11")
break
case"Whitespace":u.L(a.b,"#111")
break}},
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iX()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.v(new H.t(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.v(new H.t(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.v(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bi())
t=a1.l(0,r).m(0,h)
u=V.v(new H.t("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.v(new H.t("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.v(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.v(new H.t("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bi())
t=a1.l(0,r).m(0,e)
u=V.v(new H.t("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.au()
s=[V.aA]
t.sab(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.v(new H.t("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.v(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.au()
t.sab(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.v(new H.t(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.v(new H.t(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.N("Num")
t=a1.l(0,n)
t.d=t.a.N("Num")
t=a1.l(0,m)
t.d=t.a.N("Symbol")
t=a1.l(0,j)
t.d=t.a.N("String")
t=a1.l(0,g)
t.d=t.a.N("String")
t=a1.l(0,c)
t.d=t.a.N(d)
t=a1.l(0,a0)
t.d=t.a.N(a0)
t=a1.l(0,q)
t=t.d=t.a.N(q)
u=[P.h]
t.aK(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aK(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aK(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hg.prototype={
bt:function(a){var u=this
switch(a.a){case"Builtin":u.L(a.b,"#411")
break
case"Comment":u.L(a.b,"#777")
break
case"Id":u.L(a.b,"#111")
break
case"Num":u.L(a.b,"#191")
break
case"Preprocess":u.L(a.b,"#737")
break
case"Reserved":u.L(a.b,"#119")
break
case"Symbol":u.L(a.b,"#611")
break
case"Type":u.L(a.b,"#171")
break
case"Whitespace":u.L(a.b,"#111")
break}},
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iX()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.v(new H.t(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.v(new H.t(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.v(new H.t("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bi())
t=e.l(0,j).m(0,i)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.au()
s=[V.aA]
t.sab(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.v(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.au()
u.sab(H.c([],s))
C.a.h(t.a,u)
t=V.v(new H.t("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.v(new H.t(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.v(new H.t(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.N("Num")
u=e.l(0,n)
u.d=u.a.N("Num")
u=e.l(0,m)
u.d=u.a.N("Symbol")
u=e.l(0,i)
u.d=u.a.N(j)
u=e.l(0,g)
u.d=u.a.N(h)
u=e.l(0,f)
u.d=u.a.N(f)
u=e.l(0,q)
u=u.d=u.a.N(q)
t=[P.h]
u.aK(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aK(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aK(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.hi.prototype={
bt:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.L(a.b,"#911")
u.L("=",t)
break
case"Id":u.L(a.b,t)
break
case"Other":u.L(a.b,t)
break
case"Reserved":u.L(a.b,"#119")
break
case"String":u.L(a.b,"#171")
break
case"Symbol":u.L(a.b,"#616")
break}},
bn:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iX()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.v(new H.t("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.v(new H.t("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.v(new H.t("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.v(new H.t("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bi())
C.a.h(l.l(0,s).m(0,m).a,new V.bi())
u=l.l(0,m).m(0,m)
t=new V.au()
t.sab(H.c([],[V.aA]))
C.a.h(u.a,t)
u=V.v(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.N("Symbol")
u=l.l(0,n)
u.d=u.a.N("String")
u=l.l(0,r)
t=u.a.N(r)
u.d=t
t.aK(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.N(q)
t=l.l(0,m)
t.d=t.a.N(m)
return l}}
V.ib.prototype={
e6:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sbK(H.c([],[[P.b,W.aD]]))
this.L(C.a.m(b,"\n"),"#111")},
bt:function(a){},
bn:function(){return}}
V.ig.prototype={
dk:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mB().gcm().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.di(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.m_(m.c).h(0,q)
o=W.o0("radio")
o.checked=s
o.name=u
u=W.o
W.aa(o,"change",H.n(new V.ih(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.m_(m.c).h(0,r.createElement("br"))},
aS:function(a,b,c){return this.dk(a,b,c,!1)},
di:function(a){var u,t,s=P.mB(),r=P.h,q=P.o7(s.gcm(),r,r)
q.k(0,this.a,a)
u=s.ed(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kg([],[]).cr(""),"",t)}}
V.ih.prototype={
$1:function(a){var u=this
if(H.I(u.b.checked)){u.c.$0()
u.a.di(u.d)}},
$S:12}
V.iw.prototype={
eJ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.o
W.aa(q,"scroll",H.n(new V.iy(o),{func:1,ret:-1,args:[r]}),!1,r)},
dm:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.hN()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.em(C.a.iI(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.q4(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
t.appendChild(l)}else{k=P.fh(C.y,n,C.h,!1)
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
ev:function(a){var u,t,s,r=new V.fV("dart")
r.bf("dart")
u=new V.hg("glsl")
u.bf("glsl")
t=new V.hi("html")
t.bf("html")
s=C.a.iz(H.c([r,u,t],[V.bu]),new V.iz(a))
if(s!=null)return s
r=new V.ib("plain")
r.bf("plain")
return r},
dl:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.c([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dt(r).a7(r,"+")){C.a.k(b0,s,C.b.ag(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a7(r,"-")){C.a.k(b0,s,C.b.ag(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ev(a8)
q.e6(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fh(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.m1()
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
if(s>=u.length)return H.e(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.a_.ib(a,r[a0])
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
for(a3=C.a.gS(r);a3.w();)c.appendChild(a3.gI(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
i5:function(a){var u,t,s,r,q,p,o,n="auto"
H.m(a,"$ib",[P.h],"$ab")
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
s=H.f(r.insertCell(-1),"$ibb").style
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
o=H.f(r.insertCell(-1),"$ibb")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hN:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iX()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.au()
r=[V.aA]
s.sab(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.au()
s.sab(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.au()
s.sab(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.t("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.v(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.v(new H.t("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.au()
t.sab(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.au()
t.sab(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bi())
s=u.l(0,i).m(0,i)
t=new V.au()
t.sab(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.t("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.N(p)
s=u.l(0,n)
s.d=s.a.N(o)
s=u.l(0,"CodeEnd")
s.d=s.a.N(m)
s=u.l(0,j)
s.d=s.a.N("Link")
s=u.l(0,i)
s.d=s.a.N(i)
this.b=u}}
V.iy.prototype={
$1:function(a){P.mx(C.o,new V.ix(this.a))},
$S:12}
V.ix.prototype={
$0:function(){var u=C.e.a1(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.iz.prototype={
$1:function(a){return H.f(a,"$ibu").a===this.a},
$S:56}
V.kX.prototype={
$0:function(){this.a.saf(0,F.lP(1,null,null,1))},
$S:0}
V.kY.prototype={
$0:function(){this.a.saf(0,F.kJ(1,!0,!0,40,1))},
$S:0}
V.kZ.prototype={
$0:function(){this.a.saf(0,F.kJ(0.2,!0,!0,40,0.2))},
$S:0}
V.l_.prototype={
$0:function(){this.a.saf(0,F.kJ(1,!0,!1,40,0))},
$S:0}
V.l0.prototype={
$0:function(){this.a.saf(0,F.q3(6,6))},
$S:0}
V.l1.prototype={
$0:function(){this.a.saf(0,F.nl())},
$S:0}
V.l2.prototype={
$0:function(){this.a.saf(0,F.pW())},
$S:0}
V.l3.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iC")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dl("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dl("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.eA=u.i
u=J.dU.prototype
u.eC=u.i
u=P.j.prototype
u.eB=u.by
u=W.U.prototype
u.bB=u.am
u=W.f_.prototype
u.eE=u.az
u=O.e2.prototype
u.cA=u.aF
u=O.b8.prototype
u.cB=u.aF
u=V.e_.prototype
u.eD=u.aJ
u.cz=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pB","oK",11)
u(P,"pC","oL",11)
u(P,"pD","oM",11)
t(P,"n5","pz",3)
s(W,"pP",4,null,["$4"],["oO"],30,0)
s(W,"pQ",4,null,["$4"],["oP"],30,0)
var m
r(m=E.ap.prototype,"ge2",0,0,null,["$1","$0"],["e3","iU"],1,0)
r(m,"ge4",0,0,null,["$1","$0"],["e5","iV"],1,0)
r(m,"ge0",0,0,null,["$1","$0"],["e1","iT"],1,0)
r(m,"gdZ",0,0,null,["$1","$0"],["e_","iQ"],1,0)
q(m,"giO","iP",5)
q(m,"giR","iS",5)
r(m=E.el.prototype,"gcD",0,0,null,["$1","$0"],["cF","cE"],1,0)
p(m,"gj7","ee",3)
o(m=X.es.prototype,"gfW","fX",16)
o(m,"gfJ","fK",16)
o(m,"gfQ","fR",4)
o(m,"gh_","h0",34)
o(m,"gfY","fZ",34)
o(m,"gh3","h4",4)
o(m,"gh7","h8",4)
o(m,"gfU","fV",4)
o(m,"gh5","h6",4)
o(m,"gfS","fT",4)
o(m,"gh9","ha",36)
o(m,"ghb","hc",16)
o(m,"ghr","hs",15)
o(m,"ghn","ho",15)
o(m,"ghp","hq",15)
r(m=D.dW.prototype,"gd2",0,0,null,["$1","$0"],["d3","h1"],1,0)
o(m,"ghd","he",49)
q(m,"gfD","fE",29)
q(m,"ghh","hi",29)
r(D.bN.prototype,"gb_",0,0,null,["$1","$0"],["Y","eO"],1,0)
n(V.a6.prototype,"gn","b7",13)
n(V.L.prototype,"gn","b7",13)
n(V.ce.prototype,"gn","b7",13)
r(m=U.cG.prototype,"gaN",0,0,null,["$1","$0"],["U","aj"],1,0)
q(m,"geQ","eR",24)
q(m,"ghf","hg",24)
r(U.cJ.prototype,"gaN",0,0,null,["$1","$0"],["U","aj"],1,0)
r(m=U.et.prototype,"gaN",0,0,null,["$1","$0"],["U","aj"],1,0)
o(m,"gfv","fw",2)
o(m,"gfz","fA",2)
o(m,"gfB","fC",2)
o(m,"gfp","fq",2)
o(m,"gfs","ft",2)
o(m,"gi0","i1",2)
o(m,"ghZ","i_",2)
o(m,"ghX","hY",2)
r(m=M.dG.prototype,"gah",0,0,null,["$1","$0"],["aa","bC"],1,0)
q(m,"ghj","hk",23)
q(m,"ghl","hm",23)
r(m=M.dN.prototype,"gah",0,0,null,["$1","$0"],["aa","bC"],1,0)
q(m,"gfM","fN",5)
q(m,"gfO","fP",5)
r(m=O.e1.prototype,"geT",0,0,null,["$1","$0"],["a4","eU"],1,0)
r(m,"ghE",0,0,null,["$1","$0"],["d8","hF"],1,0)
q(m,"gfF","fG",32)
q(m,"gfH","fI",32)
r(X.e9.prototype,"gd1",0,0,null,["$1","$0"],["a5","fL"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.ln,J.a,J.am,P.eN,P.j,H.cL,P.b4,H.c0,H.d8,H.fO,H.j1,P.by,H.cz,H.f4,P.ag,H.hu,H.hw,H.hp,P.fa,P.bg,P.aK,P.ex,P.iH,P.d_,P.iI,P.bc,P.an,P.kw,P.ka,P.cf,P.eM,P.x,P.ko,P.hC,P.bZ,P.hl,P.ku,P.kt,P.Q,P.az,P.ac,P.bx,P.i9,P.eh,P.eF,P.he,P.bz,P.b,P.z,P.O,P.av,P.h,P.a5,P.cg,P.jg,P.kd,W.fR,W.bR,W.H,W.e7,W.f_,W.kj,W.dP,W.aB,W.k9,W.fi,P.kf,P.ff,P.k4,P.R,O.a1,O.cM,E.fI,E.ap,E.ij,E.el,Z.ev,Z.ew,Z.cx,Z.bA,Z.bQ,D.fL,D.c_,D.C,X.dE,X.dV,X.hr,X.hz,X.bF,X.hY,X.iY,X.es,D.dK,D.af,D.ea,D.bN,V.a7,V.ay,V.h5,V.e3,V.aq,V.ae,V.a3,V.bL,V.cV,V.a6,V.L,V.ce,U.cJ,U.et,M.dN,M.aF,A.dB,A.fA,A.ao,A.aN,A.aR,A.aV,A.hI,A.c8,A.c9,A.cc,A.eo,A.ja,F.a8,F.h8,F.bm,F.ht,F.bI,F.ef,F.it,F.iu,F.iv,F.aw,F.js,F.jt,F.jw,F.jy,F.jz,F.jA,O.bO,O.e2,O.hJ,T.iS,V.bi,V.aA,V.e_,V.ii,V.is,V.cY,V.em,V.d4,V.iW,X.ej,X.dF,X.e9,V.bu,V.ig,V.iw])
s(J.a,[J.ho,J.dT,J.dU,J.b5,J.cK,J.bD,H.cP,H.bH,W.k,W.fx,W.bX,W.cy,W.b2,W.b3,W.W,W.ez,W.fW,W.fY,W.eB,W.dM,W.eD,W.h_,W.o,W.eG,W.aO,W.hj,W.eI,W.bl,W.dY,W.hS,W.eO,W.eP,W.aP,W.eQ,W.eT,W.aQ,W.eX,W.eZ,W.aT,W.f0,W.aU,W.f5,W.aG,W.f8,W.iV,W.aX,W.fb,W.j_,W.jl,W.fj,W.fl,W.fn,W.fp,W.fr,P.b7,P.eK,P.ba,P.eV,P.ie,P.f6,P.bd,P.fd,P.fB,P.ey,P.dC,P.dQ,P.eb,P.ed,P.c7,P.ee,P.ek,P.ep,P.f2])
s(J.dU,[J.ia,J.cd,J.bE])
t(J.lm,J.b5)
s(J.cK,[J.dS,J.dR])
t(P.hy,P.eN)
s(P.hy,[H.eq,W.jL,W.as,P.ha])
t(H.t,H.eq)
s(P.j,[H.h2,H.hD,H.da])
s(H.h2,[H.c2,H.hv])
s(P.b4,[H.hE,H.jE])
t(H.hF,H.c2)
t(H.fP,H.fO)
s(P.by,[H.i6,H.hq,H.je,H.j3,H.fK,H.iq,P.fz,P.e8,P.aM,P.jf,P.jc,P.cZ,P.fN,P.fU])
s(H.cz,[H.lb,H.iO,H.kS,H.kT,H.kU,P.jH,P.jG,P.jI,P.jJ,P.kn,P.km,P.jS,P.jW,P.jT,P.jU,P.jV,P.jZ,P.k_,P.jY,P.jX,P.iJ,P.iK,P.kG,P.k7,P.k6,P.k8,P.hx,P.hB,P.h0,P.h1,P.jk,P.jh,P.ji,P.jj,P.kp,P.kq,P.ks,P.kr,P.kA,P.kz,P.kB,P.kC,W.h3,W.hU,W.hW,W.ip,W.iG,W.jR,W.i4,W.i3,W.kb,W.kc,W.kl,W.kv,P.kh,P.kI,P.hb,P.hc,P.fD,E.ik,E.il,E.im,E.iU,D.h6,D.h7,F.kx,F.kK,F.kM,F.kN,F.kO,F.l7,F.l8,F.la,F.kW,F.kL,F.jC,F.jB,F.ju,F.jv,O.hM,O.hN,O.hO,O.hP,O.hQ,O.hR,T.iT,V.l6,V.ih,V.iy,V.ix,V.iz,V.kX,V.kY,V.kZ,V.l_,V.l0,V.l1,V.l2,V.l3])
s(H.iO,[H.iE,H.cv])
t(H.jF,P.fz)
t(P.hA,P.ag)
s(P.hA,[H.a2,W.jK])
t(H.e4,H.bH)
s(H.e4,[H.df,H.dh])
t(H.dg,H.df)
t(H.cQ,H.dg)
t(H.di,H.dh)
t(H.e5,H.di)
s(H.e5,[H.hZ,H.i_,H.i0,H.i1,H.i2,H.e6,H.cR])
t(P.k5,P.kw)
t(P.k3,P.ka)
t(P.fg,P.hC)
t(P.er,P.fg)
s(P.bZ,[P.fG,P.h4])
t(P.bw,P.iI)
s(P.bw,[P.fH,P.hk,P.jo,P.jn])
t(P.jm,P.h4)
s(P.ac,[P.r,P.l])
s(P.aM,[P.c6,P.hm])
t(P.jN,P.cg)
s(W.k,[W.G,W.h9,W.cN,W.aS,W.dj,W.aW,W.aH,W.dl,W.jD,W.db,P.fE,P.bW])
s(W.G,[W.U,W.bt,W.dc])
s(W.U,[W.w,P.p])
s(W.w,[W.dz,W.fy,W.cu,W.bs,W.bY,W.aD,W.hd,W.cH,W.cI,W.ir,W.bb,W.ei,W.iM,W.iN,W.d1])
s(W.b2,[W.cA,W.fS,W.fT])
t(W.fQ,W.b3)
t(W.cB,W.ez)
t(W.eC,W.eB)
t(W.dL,W.eC)
t(W.eE,W.eD)
t(W.fZ,W.eE)
t(W.aE,W.bX)
t(W.eH,W.eG)
t(W.cE,W.eH)
t(W.eJ,W.eI)
t(W.c1,W.eJ)
t(W.bP,W.o)
s(W.bP,[W.b6,W.ah,W.aY])
t(W.hT,W.eO)
t(W.hV,W.eP)
t(W.eR,W.eQ)
t(W.hX,W.eR)
t(W.eU,W.eT)
t(W.cS,W.eU)
t(W.eY,W.eX)
t(W.ic,W.eY)
t(W.io,W.eZ)
t(W.dk,W.dj)
t(W.iB,W.dk)
t(W.f1,W.f0)
t(W.iC,W.f1)
t(W.iF,W.f5)
t(W.f9,W.f8)
t(W.iP,W.f9)
t(W.dm,W.dl)
t(W.iQ,W.dm)
t(W.fc,W.fb)
t(W.iZ,W.fc)
t(W.bf,W.ah)
t(W.fk,W.fj)
t(W.jM,W.fk)
t(W.eA,W.dM)
t(W.fm,W.fl)
t(W.k0,W.fm)
t(W.fo,W.fn)
t(W.eS,W.fo)
t(W.fq,W.fp)
t(W.ke,W.fq)
t(W.fs,W.fr)
t(W.ki,W.fs)
t(W.jO,W.jK)
t(W.jP,P.iH)
t(W.lB,W.jP)
t(W.jQ,P.d_)
t(W.kk,W.f_)
t(P.kg,P.kf)
t(P.ak,P.k4)
t(P.eL,P.eK)
t(P.hs,P.eL)
t(P.eW,P.eV)
t(P.i7,P.eW)
t(P.cW,P.p)
t(P.f7,P.f6)
t(P.iL,P.f7)
t(P.fe,P.fd)
t(P.j0,P.fe)
t(P.fC,P.ey)
t(P.i8,P.bW)
t(P.f3,P.f2)
t(P.iD,P.f3)
s(E.fI,[Z.dD,A.cX,T.d2])
s(D.C,[D.bB,D.bC,D.F,X.id])
s(X.id,[X.dZ,X.bG,X.en])
s(O.a1,[D.dW,U.cG,M.dG])
s(D.fL,[U.fM,U.ad])
t(U.dH,U.ad)
s(A.cX,[A.dJ,A.e0])
s(A.eo,[A.aI,A.j7,A.j8,A.j9,A.j5,A.a9,A.j6,A.a_,A.d6,A.jb,A.d7,A.ar,A.ca,A.cb])
t(F.iA,F.h8)
t(F.j4,F.ht)
t(F.jx,F.jy)
t(F.i5,F.jz)
s(O.bO,[O.fX,O.e1])
s(O.e2,[O.hG,O.hH,O.b8])
s(O.b8,[O.hK,O.hL])
t(T.d3,T.d2)
t(T.iR,T.d3)
s(V.e_,[V.au,V.d5])
s(X.ej,[X.fF,X.hf])
s(V.bu,[V.fV,V.hg,V.hi,V.ib])
u(H.eq,H.d8)
u(H.df,P.x)
u(H.dg,H.c0)
u(H.dh,P.x)
u(H.di,H.c0)
u(P.eN,P.x)
u(P.fg,P.ko)
u(W.ez,W.fR)
u(W.eB,P.x)
u(W.eC,W.H)
u(W.eD,P.x)
u(W.eE,W.H)
u(W.eG,P.x)
u(W.eH,W.H)
u(W.eI,P.x)
u(W.eJ,W.H)
u(W.eO,P.ag)
u(W.eP,P.ag)
u(W.eQ,P.x)
u(W.eR,W.H)
u(W.eT,P.x)
u(W.eU,W.H)
u(W.eX,P.x)
u(W.eY,W.H)
u(W.eZ,P.ag)
u(W.dj,P.x)
u(W.dk,W.H)
u(W.f0,P.x)
u(W.f1,W.H)
u(W.f5,P.ag)
u(W.f8,P.x)
u(W.f9,W.H)
u(W.dl,P.x)
u(W.dm,W.H)
u(W.fb,P.x)
u(W.fc,W.H)
u(W.fj,P.x)
u(W.fk,W.H)
u(W.fl,P.x)
u(W.fm,W.H)
u(W.fn,P.x)
u(W.fo,W.H)
u(W.fp,P.x)
u(W.fq,W.H)
u(W.fr,P.x)
u(W.fs,W.H)
u(P.eK,P.x)
u(P.eL,W.H)
u(P.eV,P.x)
u(P.eW,W.H)
u(P.f6,P.x)
u(P.f7,W.H)
u(P.fd,P.x)
u(P.fe,W.H)
u(P.ey,P.ag)
u(P.f2,P.x)
u(P.f3,W.H)})()
var v={mangledGlobalNames:{l:"int",r:"double",ac:"num",h:"String",Q:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.l,[P.j,E.ap]]},{func:1,ret:P.O,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.O,args:[D.C]},{func:1,ret:P.O,args:[F.a8]},{func:1,ret:P.O,args:[F.aw,P.r,P.r]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[W.o]},{func:1,ret:P.r},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:V.a3,args:[P.r]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.l,[P.j,M.aF]]},{func:1,ret:-1,args:[P.l,[P.j,U.ad]]},{func:1,args:[,]},{func:1,ret:P.Q,args:[W.G]},{func:1,ret:P.Q,args:[W.aB]},{func:1,ret:P.Q,args:[P.h]},{func:1,ret:-1,args:[P.l,[P.j,D.af]]},{func:1,ret:P.Q,args:[W.U,P.h,P.h,W.bR]},{func:1,ret:P.O,args:[,]},{func:1,ret:-1,args:[P.l,[P.j,V.aq]]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:P.O,args:[P.ac]},{func:1,ret:W.U,args:[W.G]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,args:[W.o]},{func:1,ret:P.R,args:[P.l]},{func:1,args:[,P.h]},{func:1,ret:P.O,args:[P.h,,]},{func:1,ret:P.O,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:[P.z,P.h,P.h],args:[[P.z,P.h,P.h],P.h]},{func:1,ret:P.Q,args:[[P.j,D.af]]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:P.l,args:[A.aN,A.aN]},{func:1,ret:P.l,args:[A.aR,A.aR]},{func:1,ret:P.l,args:[A.aV,A.aV]},{func:1,ret:P.O,args:[,],opt:[P.av]},{func:1,ret:P.O,args:[P.bc]},{func:1,ret:P.Q,args:[V.bu]},{func:1,args:[P.h]},{func:1,ret:P.R,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bs.prototype
C.j=W.bY.prototype
C.O=W.aD.prototype
C.R=J.a.prototype
C.a=J.b5.prototype
C.S=J.dR.prototype
C.d=J.dS.prototype
C.k=J.dT.prototype
C.e=J.cK.prototype
C.b=J.bD.prototype
C.T=J.bE.prototype
C.Z=W.cS.prototype
C.B=J.ia.prototype
C.c=P.c7.prototype
C.a_=W.bb.prototype
C.C=W.ei.prototype
C.r=J.cd.prototype
C.D=W.bf.prototype
C.E=W.db.prototype
C.a0=new P.fH()
C.F=new P.fG()
C.u=function getTagFallback(o) {
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
C.v=function(hooks) { return hooks; }

C.M=new P.i9()
C.h=new P.jm()
C.N=new P.jo()
C.f=new P.k5()
C.o=new P.bx(0)
C.P=new P.bx(5e6)
C.Q=new P.hl("element",!1,!1,!1)
C.w=H.c(u([127,2047,65535,1114111]),[P.l])
C.l=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.U=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.m=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.n=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.V=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.x=H.c(u([]),[P.h])
C.W=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.y=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.z=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.X=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.A=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.p=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fP(0,{},C.x,[P.h,P.h])})();(function staticFields(){$.b1=0
$.cw=null
$.m3=null
$.lH=!1
$.nb=null
$.n3=null
$.ni=null
$.kP=null
$.kV=null
$.lR=null
$.cj=null
$.dq=null
$.dr=null
$.lI=!1
$.a0=C.f
$.ax=[]
$.bk=null
$.li=null
$.m9=null
$.m8=null
$.de=P.lp(P.h,P.bz)
$.mh=null
$.mm=null
$.bK=null
$.ms=null
$.mF=null
$.mI=null
$.mH=null
$.jp=null
$.jq=null
$.jr=null
$.mG=null
$.mL=null
$.ml=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"qd","nn",function(){return H.na("_$dart_dartClosure")})
u($,"qe","lW",function(){return H.na("_$dart_js")})
u($,"qj","no",function(){return H.be(H.j2({
toString:function(){return"$receiver$"}}))})
u($,"qk","np",function(){return H.be(H.j2({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ql","nq",function(){return H.be(H.j2(null))})
u($,"qm","nr",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qp","nu",function(){return H.be(H.j2(void 0))})
u($,"qq","nv",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qo","nt",function(){return H.be(H.mz(null))})
u($,"qn","ns",function(){return H.be(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qs","nx",function(){return H.be(H.mz(void 0))})
u($,"qr","nw",function(){return H.be(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qJ","lX",function(){return P.oJ()})
u($,"qv","ny",function(){return P.oF()})
u($,"qK","nC",function(){return H.od(H.ci(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qM","nE",function(){return P.or("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qN","nF",function(){return P.p8()})
u($,"qL","nD",function(){return P.md(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qC","nB",function(){return Z.aJ(0)})
u($,"qw","nz",function(){return Z.aJ(511)})
u($,"qE","b0",function(){return Z.aJ(1)})
u($,"qD","bq",function(){return Z.aJ(2)})
u($,"qy","bp",function(){return Z.aJ(4)})
u($,"qF","bU",function(){return Z.aJ(8)})
u($,"qG","bV",function(){return Z.aJ(16)})
u($,"qz","dv",function(){return Z.aJ(32)})
u($,"qA","dw",function(){return Z.aJ(64)})
u($,"qB","nA",function(){return Z.aJ(96)})
u($,"qH","ct",function(){return Z.aJ(128)})
u($,"qx","bo",function(){return Z.aJ(256)})
u($,"qc","nm",function(){return new V.h5(1e-9)})
u($,"qb","K",function(){return $.nm()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cP,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.cQ,Float64Array:H.cQ,Int16Array:H.hZ,Int32Array:H.i_,Int8Array:H.i0,Uint16Array:H.i1,Uint32Array:H.i2,Uint8ClampedArray:H.e6,CanvasPixelArray:H.e6,Uint8Array:H.cR,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fx,HTMLAnchorElement:W.dz,HTMLAreaElement:W.fy,HTMLBaseElement:W.cu,Blob:W.bX,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bY,CanvasRenderingContext2D:W.cy,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.cA,CSSUnitValue:W.cA,CSSPerspective:W.fQ,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cB,MSStyleCSSProperties:W.cB,CSS2Properties:W.cB,CSSImageValue:W.b2,CSSKeywordValue:W.b2,CSSPositionValue:W.b2,CSSResourceValue:W.b2,CSSURLImageValue:W.b2,CSSStyleValue:W.b2,CSSMatrixComponent:W.b3,CSSRotation:W.b3,CSSScale:W.b3,CSSSkew:W.b3,CSSTranslation:W.b3,CSSTransformComponent:W.b3,CSSTransformValue:W.fS,CSSUnparsedValue:W.fT,DataTransferItemList:W.fW,HTMLDivElement:W.aD,DOMException:W.fY,ClientRectList:W.dL,DOMRectList:W.dL,DOMRectReadOnly:W.dM,DOMStringList:W.fZ,DOMTokenList:W.h_,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aE,FileList:W.cE,FileWriter:W.h9,HTMLFormElement:W.hd,Gamepad:W.aO,History:W.hj,HTMLCollection:W.c1,HTMLFormControlsCollection:W.c1,HTMLOptionsCollection:W.c1,ImageData:W.bl,HTMLImageElement:W.cH,HTMLInputElement:W.cI,KeyboardEvent:W.b6,Location:W.dY,MediaList:W.hS,MessagePort:W.cN,MIDIInputMap:W.hT,MIDIOutputMap:W.hV,MimeType:W.aP,MimeTypeArray:W.hX,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cS,RadioNodeList:W.cS,Plugin:W.aQ,PluginArray:W.ic,RTCStatsReport:W.io,HTMLSelectElement:W.ir,SourceBuffer:W.aS,SourceBufferList:W.iB,SpeechGrammar:W.aT,SpeechGrammarList:W.iC,SpeechRecognitionResult:W.aU,Storage:W.iF,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.bb,HTMLTableDataCellElement:W.bb,HTMLTableHeaderCellElement:W.bb,HTMLTableElement:W.ei,HTMLTableRowElement:W.iM,HTMLTableSectionElement:W.iN,HTMLTemplateElement:W.d1,TextTrack:W.aW,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.iP,TextTrackList:W.iQ,TimeRanges:W.iV,Touch:W.aX,TouchEvent:W.aY,TouchList:W.iZ,TrackDefaultList:W.j_,CompositionEvent:W.bP,FocusEvent:W.bP,TextEvent:W.bP,UIEvent:W.bP,URL:W.jl,VideoTrackList:W.jD,WheelEvent:W.bf,Window:W.db,DOMWindow:W.db,Attr:W.dc,CSSRuleList:W.jM,ClientRect:W.eA,DOMRect:W.eA,GamepadList:W.k0,NamedNodeMap:W.eS,MozNamedAttrMap:W.eS,SpeechRecognitionResultList:W.ke,StyleSheetList:W.ki,SVGLength:P.b7,SVGLengthList:P.hs,SVGNumber:P.ba,SVGNumberList:P.i7,SVGPointList:P.ie,SVGScriptElement:P.cW,SVGStringList:P.iL,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bd,SVGTransformList:P.j0,AudioBuffer:P.fB,AudioParamMap:P.fC,AudioTrackList:P.fE,AudioContext:P.bW,webkitAudioContext:P.bW,BaseAudioContext:P.bW,OfflineAudioContext:P.i8,WebGLBuffer:P.dC,WebGLFramebuffer:P.dQ,WebGLProgram:P.eb,WebGLRenderbuffer:P.ed,WebGL2RenderingContext:P.c7,WebGLShader:P.ee,WebGLTexture:P.ek,WebGLUniformLocation:P.ep,SQLResultSetRowList:P.iD})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e4.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.e5.$nativeSuperclassTag="ArrayBufferView"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.ne,[])
else V.ne([])})})()
//# sourceMappingURL=test.dart.js.map
