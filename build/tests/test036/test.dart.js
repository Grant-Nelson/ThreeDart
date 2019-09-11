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
a[c]=function(){a[c]=function(){H.oI(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kL(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kr:function kr(){},
k1:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
l5:function(){return new P.i2("No element")},
dR:function(a,b,c,d,e){if(c-b<=32)H.nc(a,b,c,d,e)
else H.nb(a,b,c,d,e)},
nc:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a_()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
nb:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a1(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a1(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a_()
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
if(J.N(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.K()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a_()
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
if(typeof g!=="number")return g.K()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a_()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a_()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.K()
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
H.dR(a2,a3,o-2,a5,a6)
H.dR(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.N(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.N(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.K()
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
break}}}H.dR(a2,o,n,a5,a6)}else H.dR(a2,o,n,a5,a6)},
a1:function a1(a){this.a=a},
fD:function fD(){},
dw:function dw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h8:function h8(a,b,c){this.a=a
this.b=b
this.$ti=c},
h9:function h9(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
j0:function j0(a,b,c){this.a=a
this.b=b
this.$ti=c},
j1:function j1(a,b,c){this.a=a
this.b=b
this.$ti=c},
bU:function bU(){},
cP:function cP(){},
e2:function e2(){},
mE:function(){throw H.d(P.G("Cannot modify unmodifiable Map"))},
ci:function(a){var u,t=H.oK(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
os:function(a){return v.types[H.a9(a)]},
ox:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iI},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aY(a)
if(typeof u!=="string")throw H.d(H.aW(a))
return u},
cE:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n3:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=H.U(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.ae(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
cF:function(a){return H.mV(a)+H.kI(H.bJ(a),0,null)},
mV:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.N||!!n.$ic7){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ci(t.length>1&&C.b.D(t,0)===36?C.b.aj(t,1):t)},
mW:function(){if(!!self.location)return self.location.href
return},
lg:function(a){var u,t,s,r,q=J.aG(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
n4:function(a){var u,t,s,r=H.e([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aW(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aJ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.aW(s))}return H.lg(r)},
lh:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aW(s))
if(s<0)throw H.d(H.aW(s))
if(s>65535)return H.n4(a)}return H.lg(a)},
n5:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dJ:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aJ(u,10))>>>0,56320|u&1023)}}throw H.d(P.ae(a,0,1114111,null,null))},
bZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n2:function(a){var u=H.bZ(a).getFullYear()+0
return u},
n0:function(a){var u=H.bZ(a).getMonth()+1
return u},
mX:function(a){var u=H.bZ(a).getDate()+0
return u},
mY:function(a){var u=H.bZ(a).getHours()+0
return u},
n_:function(a){var u=H.bZ(a).getMinutes()+0
return u},
n1:function(a){var u=H.bZ(a).getSeconds()+0
return u},
mZ:function(a){var u=H.bZ(a).getMilliseconds()+0
return u},
C:function(a){throw H.d(H.aW(a))},
c:function(a,b){if(a==null)J.aG(a)
throw H.d(H.cd(a,b))},
cd:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aZ(!0,b,s,null)
u=H.a9(J.aG(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.dL(b,s)},
on:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c_(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c_(a,c,!0,b,"end",u)
return new P.aZ(!0,b,"end",null)},
aW:function(a){return new P.aZ(!0,a,null,null)},
ok:function(a){if(typeof a!=="number")throw H.d(H.aW(a))
return a},
d:function(a){var u
if(a==null)a=new P.dG()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m8})
u.name=""}else u.toString=H.m8
return u},
m8:function(){return J.aY(this.dartException)},
u:function(a){throw H.d(a)},
z:function(a){throw H.d(P.bS(a))},
ba:function(a){var u,t,s,r,q,p
a=H.m6(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.io(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ip:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lr:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
la:function(a,b){return new H.hA(a,b==null?null:b.method)},
ks:function(a,b){var u=b==null,t=u?null:b.method
return new H.fV(a,t,u?null:b.receiver)},
aF:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kf(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aJ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ks(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.la(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mb()
q=$.mc()
p=$.md()
o=$.me()
n=$.mh()
m=$.mi()
l=$.mg()
$.mf()
k=$.mk()
j=$.mj()
i=r.af(u)
if(i!=null)return f.$1(H.ks(H.U(u),i))
else{i=q.af(u)
if(i!=null){i.method="call"
return f.$1(H.ks(H.U(u),i))}else{i=p.af(u)
if(i==null){i=o.af(u)
if(i==null){i=n.af(u)
if(i==null){i=m.af(u)
if(i==null){i=l.af(u)
if(i==null){i=o.af(u)
if(i==null){i=k.af(u)
if(i==null){i=j.af(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.la(H.U(u),i))}}return f.$1(new H.iA(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dT()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aZ(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dT()
return a},
cg:function(a){var u
if(a==null)return new H.eH(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eH(a)},
or:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
ow:function(a,b,c,d,e,f){H.f(a,"$ikn")
switch(H.a9(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.x("Unsupported number of arguments for wrapped closure"))},
cc:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ow)
a.$identity=u
return u},
mD:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i3().constructor.prototype):Object.create(new H.ck(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b_
if(typeof t!=="number")return t.C()
$.b_=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l0(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mz(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l0(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mz:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.os,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kZ:H.kk
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mA:function(a,b,c,d){var u=H.kk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l0:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mC(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mA(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.C()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cl
return new Function(r+H.k(q==null?$.cl=H.fk("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.C()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.cl
return new Function(r+H.k(q==null?$.cl=H.fk("self"):q)+"."+H.k(u)+"("+o+");}")()},
mB:function(a,b,c,d){var u=H.kk,t=H.kZ
switch(b?-1:a){case 0:throw H.d(H.n9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mC:function(a,b){var u,t,s,r,q,p,o,n=$.cl
if(n==null)n=$.cl=H.fk("self")
u=$.kY
if(u==null)u=$.kY=H.fk("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mB(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.b_
if(typeof u!=="number")return u.C()
$.b_=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.b_
if(typeof u!=="number")return u.C()
$.b_=u+1
return new Function(n+u+"}")()},
kL:function(a,b,c,d,e,f,g){return H.mD(a,b,c,d,!!e,!!f,g)},
kk:function(a){return a.a},
kZ:function(a){return a.c},
fk:function(a){var u,t,s,r=new H.ck("self","target","receiver","name"),q=J.kp(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.og("boolean expression must not be null")
return a},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aV(a,"String"))},
oo:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aV(a,"double"))},
m2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aV(a,"num"))},
lV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aV(a,"bool"))},
a9:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aV(a,"int"))},
m4:function(a,b){throw H.d(H.aV(a,H.ci(H.U(b).substring(2))))},
oC:function(a,b){throw H.d(H.my(a,H.ci(H.U(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.m4(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.oC(a,b)},
pp:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.d(H.aV(a,"List<dynamic>"))},
m0:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.m4(a,b)},
lW:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a9(u)]
else return a.$S()}return},
f2:function(a,b){var u
if(typeof a=="function")return!0
u=H.lW(J.T(a))
if(u==null)return!1
return H.lK(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.kF)return a
$.kF=!0
try{if(H.f2(a,b))return a
u=H.kb(b)
t=H.aV(a,u)
throw H.d(t)}finally{$.kF=!1}},
kM:function(a,b){if(a!=null&&!H.kK(a,b))H.u(H.aV(a,H.kb(b)))
return a},
aV:function(a,b){return new H.iq("TypeError: "+P.dl(a)+": type '"+H.k(H.lQ(a))+"' is not a subtype of type '"+b+"'")},
my:function(a,b){return new H.fl("CastError: "+P.dl(a)+": type '"+H.k(H.lQ(a))+"' is not a subtype of type '"+b+"'")},
lQ:function(a){var u,t=J.T(a)
if(!!t.$icn){u=H.lW(t)
if(u!=null)return H.kb(u)
return"Closure"}return H.cF(a)},
og:function(a){throw H.d(new H.j2(a))},
oI:function(a){throw H.d(new P.fw(a))},
n9:function(a){return new H.hQ(a)},
lY:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bJ:function(a){if(a==null)return
return a.$ti},
po:function(a,b,c){return H.ch(a["$a"+H.k(c)],H.bJ(b))},
cf:function(a,b,c,d){var u=H.ch(a["$a"+H.k(c)],H.bJ(b))
return u==null?null:u[d]},
ay:function(a,b,c){var u=H.ch(a["$a"+H.k(b)],H.bJ(a))
return u==null?null:u[c]},
t:function(a,b){var u=H.bJ(a)
return u==null?null:u[b]},
kb:function(a){return H.bI(a,null)},
bI:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ci(a[0].name)+H.kI(a,1,b)
if(typeof a=="function")return H.ci(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a9(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.k(b[t])}if('func' in a)return H.nQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bI("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nQ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.e([],[P.i])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.P)p+=" extends "+H.bI(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bI(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bI(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bI(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oq(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.U(n[g])
i=i+h+H.bI(d[c],a0)+(" "+H.k(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kI:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a2("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bI(p,c)}return"<"+u.i(0)+">"},
ch:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kJ:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bJ(a)
t=J.T(a)
if(t[b]==null)return!1
return H.lT(H.ch(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.kJ(a,b,c,d))return a
throw H.d(H.aV(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ci(b.substring(2))+H.kI(c,0,null),v.mangledGlobalNames)))},
lT:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
pm:function(a,b,c){return a.apply(b,H.ch(J.T(b)["$a"+H.k(c)],H.bJ(b)))},
m_:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="J"||a===-1||a===-2||H.m_(u)}return!1},
kK:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="J"||b===-1||b===-2||H.m_(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kK(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f2(a,b)}u=J.T(a).constructor
t=H.bJ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.kK(a,b))throw H.d(H.aV(a,H.kb(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aE("type" in a?a.type:l,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"cr" in t.prototype))return!1
r=t.prototype["$a"+"cr"]
q=H.ch(r,u?a.slice(1):l)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.lK(a,b,c,d)
if('func' in a)return c.name==="kn"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lT(H.ch(m,u),b,p,d)},
lK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.oA(h,b,g,d)},
oA:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aE(c[s],d,a[s],b))return!1}return!0},
pn:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oy:function(a){var u,t,s,r,q=H.U($.lZ.$1(a)),p=$.jZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k5[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.U($.lS.$2(a,q))
if(q!=null){p=$.jZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k5[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ka(u)
$.jZ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k5[q]=u
return u}if(s==="-"){r=H.ka(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m3(a,u)
if(s==="*")throw H.d(P.iz(q))
if(v.leafTags[q]===true){r=H.ka(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m3(a,u)},
m3:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kP(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ka:function(a){return J.kP(a,!1,null,!!a.$iI)},
oz:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ka(u)
else return J.kP(u,c,null,null)},
ou:function(){if(!0===$.kO)return
$.kO=!0
H.ov()},
ov:function(){var u,t,s,r,q,p,o,n
$.jZ=Object.create(null)
$.k5=Object.create(null)
H.ot()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m5.$1(q)
if(p!=null){o=H.oz(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ot:function(){var u,t,s,r,q,p,o=C.E()
o=H.cb(C.F,H.cb(C.G,H.cb(C.u,H.cb(C.u,H.cb(C.H,H.cb(C.I,H.cb(C.J(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lZ=new H.k2(r)
$.lS=new H.k3(q)
$.m5=new H.k4(p)},
cb:function(a,b){return a(b)||b},
mL:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.a0("Illegal RegExp pattern ("+String(p)+")",a,null))},
oF:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
op:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m6:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m7:function(a,b,c){var u=H.oG(a,b,c)
return u},
oG:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m6(b),'g'),H.op(c))},
fq:function fq(){},
fr:function fr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
io:function io(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hA:function hA(a,b){this.a=a
this.b=b},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a){this.a=a},
kf:function kf(a){this.a=a},
eH:function eH(a){this.a=a
this.b=null},
cn:function cn(){},
ib:function ib(){},
i3:function i3(){},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(a){this.a=a},
fl:function fl(a){this.a=a},
hQ:function hQ(a){this.a=a},
j2:function j2(a){this.a=a},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fZ:function fZ(a,b){this.a=a
this.b=b
this.c=null},
h_:function h_(a,b){this.a=a
this.$ti=b},
h0:function h0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
fU:function fU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bH:function(a){return a},
mU:function(a){return new Int8Array(a)},
be:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.cd(b,a))},
nO:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.on(a,b,c))
return b},
cz:function cz(){},
bA:function bA(){},
dD:function dD(){},
cA:function cA(){},
dE:function dE(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
dF:function dF(){},
cB:function cB(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
oq:function(a){return J.l6(a?Object.keys(a):[],null)},
oK:function(a){return v.mangledGlobalNames[a]},
oB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k0:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kO==null){H.ou()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.iz("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kS()]
if(r!=null)return r
r=H.oy(a)
if(r!=null)return r
if(typeof a=="function")return C.P
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kS(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
mK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kj(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ae(a,0,4294967295,"length",null))
return J.l6(new Array(a),b)},
l6:function(a,b){return J.kp(H.e(a,[b]))},
kp:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dr.prototype
return J.dq.prototype}if(typeof a=="string")return J.bw.prototype
if(a==null)return J.ds.prototype
if(typeof a=="boolean")return J.fT.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.P)return a
return J.k0(a)},
d4:function(a){if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.P)return a
return J.k0(a)},
k_:function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.P)return a
return J.k0(a)},
lX:function(a){if(typeof a=="number")return J.cv.prototype
if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c7.prototype
return a},
kN:function(a){if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c7.prototype
return a},
f3:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.P)return a
return J.k0(a)},
N:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).n(a,b)},
kU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lX(a).p(a,b)},
d7:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ox(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.d4(a).j(a,b)},
kg:function(a,b,c){return J.k_(a).k(a,b,c)},
ms:function(a,b){return J.kN(a).D(a,b)},
mt:function(a,b,c){return J.f3(a).he(a,b,c)},
mu:function(a,b,c,d){return J.f3(a).hK(a,b,c,d)},
mv:function(a,b){return J.kN(a).U(a,b)},
kh:function(a,b){return J.lX(a).hU(a,b)},
ki:function(a,b){return J.k_(a).G(a,b)},
mw:function(a,b,c,d){return J.f3(a).i6(a,b,c,d)},
kV:function(a,b){return J.k_(a).F(a,b)},
kW:function(a){return J.f3(a).gbW(a)},
d8:function(a){return J.T(a).gE(a)},
bM:function(a){return J.k_(a).gV(a)},
aG:function(a){return J.d4(a).gl(a)},
mx:function(a,b){return J.f3(a).iF(a,b)},
aY:function(a){return J.T(a).i(a)},
a:function a(){},
fT:function fT(){},
ds:function ds(){},
dt:function dt(){},
hE:function hE(){},
c7:function c7(){},
bx:function bx(){},
b3:function b3(a){this.$ti=a},
kq:function kq(a){this.$ti=a},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cv:function cv(){},
dr:function dr(){},
dq:function dq(){},
bw:function bw(){}},P={
nr:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oh()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cc(new P.j4(s),1)).observe(u,{childList:true})
return new P.j3(s,u,t)}else if(self.setImmediate!=null)return P.oi()
return P.oj()},
ns:function(a){self.scheduleImmediate(H.cc(new P.j5(H.o(a,{func:1,ret:-1})),0))},
nt:function(a){self.setImmediate(H.cc(new P.j6(H.o(a,{func:1,ret:-1})),0))},
nu:function(a){P.ku(C.q,H.o(a,{func:1,ret:-1}))},
ku:function(a,b){var u=C.d.a1(a.a,1000)
return P.ny(u<0?0:u,b)},
lq:function(a,b){var u=C.d.a1(a.a,1000)
return P.nz(u<0?0:u,b)},
ny:function(a,b){var u=new P.eN()
u.em(a,b)
return u},
nz:function(a,b){var u=new P.eN()
u.en(a,b)
return u},
nv:function(a,b){var u,t,s
b.a=1
try{a.dZ(new P.jf(b),new P.jg(b),null)}catch(s){u=H.aF(s)
t=H.cg(s)
P.oD(new P.jh(b,u,t))}},
lC:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaD")
if(u>=4){t=b.bN()
b.a=a.a
b.c=a.c
P.cS(b,t)}else{t=H.f(b.c,"$ibd")
b.a=2
b.c=a
a.d1(t)}},
cS:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
P.jU(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cS(h.a,b)}g=h.a
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
P.jU(i,i,g.b,q.a,q.b)
return}l=$.Y
if(l!==n)$.Y=n
else l=i
g=b.c
if((g&15)===8)new P.jl(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jk(u,b,q).$0()}else if((g&2)!==0)new P.jj(h,u,b).$0()
if(l!=null)$.Y=l
g=u.b
if(!!J.T(g).$icr){if(g.a>=4){k=H.f(o.c,"$ibd")
o.c=null
b=o.be(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.lC(g,o)
return}}j=b.b
k=H.f(j.c,"$ibd")
j.c=null
b=j.be(k)
g=u.a
p=u.b
if(!g){H.B(p,H.t(j,0))
j.a=4
j.c=p}else{H.f(p,"$ian")
j.a=8
j.c=p}h.a=j
g=j}},
oc:function(a,b){if(H.f2(a,{func:1,args:[P.P,P.ar]}))return H.o(a,{func:1,ret:null,args:[P.P,P.ar]})
if(H.f2(a,{func:1,args:[P.P]}))return H.o(a,{func:1,ret:null,args:[P.P]})
throw H.d(P.kj(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ob:function(){var u,t
for(;u=$.ca,u!=null;){$.d3=null
t=u.b
$.ca=t
if(t==null)$.d2=null
u.a.$0()}},
of:function(){$.kG=!0
try{P.ob()}finally{$.d3=null
$.kG=!1
if($.ca!=null)$.kT().$1(P.lU())}},
lP:function(a){var u=new P.ea(a)
if($.ca==null){$.ca=$.d2=u
if(!$.kG)$.kT().$1(P.lU())}else $.d2=$.d2.b=u},
oe:function(a){var u,t,s=$.ca
if(s==null){P.lP(a)
$.d3=$.d2
return}u=new P.ea(a)
t=$.d3
if(t==null){u.b=s
$.ca=$.d3=u}else{u.b=t.b
$.d3=t.b=u
if(u.b==null)$.d2=u}},
oD:function(a){var u=null,t=$.Y
if(C.f===t){P.jW(u,u,C.f,a)
return}P.jW(u,u,t,H.o(t.bS(a),{func:1,ret:-1}))},
lp:function(a,b){var u=$.Y
if(u===C.f)return P.ku(a,H.o(b,{func:1,ret:-1}))
return P.ku(a,H.o(u.bS(b),{func:1,ret:-1}))},
nh:function(a,b){var u=$.Y
if(u===C.f)return P.lq(a,H.o(b,{func:1,ret:-1,args:[P.b8]}))
return P.lq(a,H.o(u.dg(b,P.b8),{func:1,ret:-1,args:[P.b8]}))},
jU:function(a,b,c,d,e){var u={}
u.a=d
P.oe(new P.jV(u,e))},
lL:function(a,b,c,d,e){var u,t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
lM:function(a,b,c,d,e,f,g){var u,t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
od:function(a,b,c,d,e,f,g,h,i){var u,t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
jW:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bS(d):c.hR(d,-1)
P.lP(d)},
j4:function j4(a){this.a=a},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
eN:function eN(){this.c=0},
jE:function jE(a,b){this.a=a
this.b=b},
jD:function jD(a,b,c,d){var _=this
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
aD:function aD(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
je:function je(a,b){this.a=a
this.b=b},
ji:function ji(a,b){this.a=a
this.b=b},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jm:function jm(a){this.a=a},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(a){this.a=a
this.b=null},
i6:function i6(){},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
i7:function i7(){},
b8:function b8(){},
an:function an(a,b){this.a=a
this.b=b},
jN:function jN(){},
jV:function jV(a,b){this.a=a
this.b=b},
js:function js(){},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
mM:function(a,b){return new H.Z([a,b])},
l7:function(a,b){return new H.Z([a,b])},
mO:function(a){return H.or(a,new H.Z([null,null]))},
mP:function(a){return new P.jq([a])},
kA:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nx:function(a,b,c){var u=new P.ep(a,b,[c])
u.c=a.e
return u},
mJ:function(a,b,c){var u,t
if(P.kH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.i])
C.a.h($.at,a)
try{P.nR(a,u)}finally{if(0>=$.at.length)return H.c($.at,-1)
$.at.pop()}t=P.ll(b,H.m0(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
ko:function(a,b,c){var u,t
if(P.kH(a))return b+"..."+c
u=new P.a2(b)
C.a.h($.at,a)
try{t=u
t.a=P.ll(t.a,a,", ")}finally{if(0>=$.at.length)return H.c($.at,-1)
$.at.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kH:function(a){var u,t
for(u=$.at.length,t=0;t<u;++t)if(a===$.at[t])return!0
return!1},
nR:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.k(n.gI(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.v()){if(l<=4){C.a.h(b,H.k(r))
return}t=H.k(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.v();r=q,q=p){p=n.gI(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.k(r)
t=H.k(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
mN:function(a,b,c){var u=P.mM(b,c)
a.F(0,new P.h1(u,b,c))
return u},
kt:function(a){var u,t={}
if(P.kH(a))return"{...}"
u=new P.a2("")
try{C.a.h($.at,a)
u.a+="{"
t.a=!0
J.kV(a,new P.h6(t,u))
u.a+="}"}finally{if(0>=$.at.length)return H.c($.at,-1)
$.at.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jq:function jq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cT:function cT(a){this.a=a
this.c=this.b=null},
ep:function ep(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(){},
v:function v(){},
h5:function h5(){},
h6:function h6(a,b){this.a=a
this.b=b},
ag:function ag(){},
jF:function jF(){},
h7:function h7(){},
e3:function e3(a,b){this.a=a
this.$ti=b},
jw:function jw(){},
eq:function eq(){},
eS:function eS(){},
nl:function(a,b,c,d){if(b instanceof Uint8Array)return P.nm(!1,b,c,d)
return},
nm:function(a,b,c,d){var u,t,s=$.ml()
if(s==null)return
u=0===c
if(u&&!0)return P.kx(s,b)
t=b.length
d=P.bC(c,d,t)
if(u&&d===t)return P.kx(s,b)
return P.kx(s,b.subarray(c,d))},
kx:function(a,b){if(P.no(b))return
return P.np(a,b)},
np:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aF(t)}return},
no:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nn:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aF(t)}return},
lO:function(a,b,c){var u,t,s
for(u=J.d4(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ai()
if((s&127)!==s)return t-b}return c-b},
kX:function(a,b,c,d,e,f){if(C.d.ba(f,4)!==0)throw H.d(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a0("Invalid base64 padding, more than two '=' characters",a,b))},
fh:function fh(){},
fi:function fi(){},
bR:function bR(){},
bT:function bT(){},
fE:function fE(){},
iI:function iI(){},
iK:function iK(){},
jM:function jM(a){this.b=0
this.c=a},
iJ:function iJ(a){this.a=a},
jL:function jL(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
f4:function(a,b,c){var u=H.n3(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a0(a,null,null))},
mH:function(a){if(a instanceof H.cn)return a.i(0)
return"Instance of '"+H.k(H.cF(a))+"'"},
mQ:function(a,b,c){var u,t=J.mK(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
l8:function(a,b,c){var u,t=[c],s=H.e([],t)
for(u=J.bM(a);u.v();)C.a.h(s,H.B(u.gI(u),c))
if(b)return s
return H.m(J.kp(s),"$ib",t,"$ab")},
cK:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib3",[P.l],"$ab3")
u=a.length
c=P.bC(b,c,u)
return H.lh(b>0||c<u?C.a.e7(a,b,c):a)}if(!!J.T(a).$icB)return H.n5(a,b,P.bC(b,c,a.length))
return P.nd(a,b,c)},
nd:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.ae(b,0,J.aG(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.ae(c,b,J.aG(a),q,q))
t=J.bM(a)
for(s=0;s<b;++s)if(!t.v())throw H.d(P.ae(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.v())throw H.d(P.ae(c,b,s,q,q))
r.push(t.gI(t))}return H.lh(r)},
n7:function(a){return new H.fU(a,H.mL(a,!1,!0,!1,!1,!1))},
ll:function(a,b,c){var u=J.bM(b)
if(!u.v())return a
if(c.length===0){do a+=H.k(u.gI(u))
while(u.v())}else{a+=H.k(u.gI(u))
for(;u.v();)a=a+c+H.k(u.gI(u))}return a},
lt:function(){var u=H.mW()
if(u!=null)return P.nk(u)
throw H.d(P.G("'Uri.base' is not supported"))},
jK:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.mq().b
if(typeof b!=="string")H.u(H.aW(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.ay(c,"bR",0))
t=c.gi5().bX(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dJ(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mF:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dg:function(a){if(a>=10)return""+a
return"0"+a},
l2:function(a){return new P.br(1000*a)},
dl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aY(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mH(a)},
f9:function(a){return new P.aZ(!1,null,null,a)},
kj:function(a,b,c){return new P.aZ(!0,a,b,c)},
dL:function(a,b){return new P.c_(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.c_(b,c,!0,a,d,"Invalid value")},
bC:function(a,b,c){if(0>a||a>c)throw H.d(P.ae(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.ae(b,a,c,"end",null))
return b}return c},
li:function(a,b){if(typeof a!=="number")return a.K()
if(a<0)throw H.d(P.ae(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.a9(e==null?J.aG(b):e)
return new P.fS(u,!0,a,c,"Index out of range")},
G:function(a){return new P.iB(a)},
iz:function(a){return new P.iy(a)},
bS:function(a){return new P.fp(a)},
x:function(a){return new P.ei(a)},
a0:function(a,b,c){return new P.fO(a,b,c)},
mR:function(a,b,c){var u,t=H.e([],[c])
C.a.sl(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
kR:function(a){H.oB(a)},
nk:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.ls(e<e?C.b.q(a,0,e):a,5,f).ge1()
else if(u===32)return P.ls(C.b.q(a,5,e),0,f).ge1()}t=new Array(8)
t.fixed$length=Array
s=H.e(t,[P.l])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.lN(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.iR()
if(r>=0)if(P.lN(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.C()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.K()
if(typeof n!=="number")return H.C(n)
if(m<n)n=m
if(typeof o!=="number")return o.K()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.K()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.K()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a4(a,"..",o)))j=n>o+2&&C.b.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a4(a,"file",0)){if(q<=0){if(!C.b.a4(a,"/",o)){i="file:///"
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
a=C.b.aM(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a4(a,"http",0)){if(t&&p+3===o&&C.b.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aM(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a4(a,"https",0)){if(t&&p+4===o&&C.b.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aM(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jx(a,r,q,p,o,n,m,k)}return P.nA(a,0,e,r,q,p,o,n,m,k)},
lv:function(a){var u=P.i
return C.a.i9(H.e(a.split("&"),[u]),P.l7(u,u),new P.iG(C.h),[P.y,P.i,P.i])},
nj:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iD(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.U(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.f4(C.b.q(a,s,t),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.f4(C.b.q(a,s,c),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
lu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iE(a),d=new P.iF(e,a)
if(a.length<2)e.$1("address is too short")
u=H.e([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.U(a,t)
if(p===58){if(t===b){++t
if(C.b.U(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gaA(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.nj(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.c(l,i)
l[i]=0
f=i+1
if(f>=k)return H.c(l,f)
l[f]=0
i+=2}else{f=C.d.aJ(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
nA:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nI(a,b,d)
else{if(d===b)P.c9(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nJ(a,u,e-1):""
s=P.nF(a,e,f,!1)
if(typeof f!=="number")return f.C()
r=f+1
if(typeof g!=="number")return H.C(g)
q=r<g?P.nH(P.f4(C.b.q(a,r,g),new P.jG(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nG(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.K()
o=h<i?P.kC(a,h+1,i,n):n
return new P.c8(j,t,s,q,p,o,i<c?P.nE(a,i+1,c):n)},
lE:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c9:function(a,b,c){throw H.d(P.a0(c,a,b))},
nH:function(a,b){if(a!=null&&a===P.lE(b))return
return a},
nF:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.U(a,b)===91){if(typeof c!=="number")return c.H()
u=c-1
if(C.b.U(a,u)!==93)P.c9(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nC(a,t,u)
if(typeof s!=="number")return s.K()
if(s<u){r=s+1
q=P.lJ(a,C.b.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lu(a,t,s)
return C.b.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.C(c)
p=b
for(;p<c;++p)if(C.b.U(a,p)===58){s=C.b.bi(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lJ(a,C.b.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lu(a,b,s)
return"["+C.b.q(a,b,s)+q+"]"}return P.nL(a,b,c)},
nC:function(a,b,c){var u,t=C.b.bi(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.C(c)
u=t<c}else u=!1
return u?t:c},
lJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a2(d):null
if(typeof c!=="number")return H.C(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.U(a,u)
if(r===37){q=P.kD(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a2("")
o=l.a+=C.b.q(a,t,u)
if(p)q=C.b.q(a,u,u+3)
else if(q==="%")P.c9(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a2("")
if(t<u){l.a+=C.b.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.U(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a2("")
l.a+=C.b.q(a,t,u)
l.a+=P.kB(r)
u+=m
t=u}}}if(l==null)return C.b.q(a,b,c)
if(t<c)l.a+=C.b.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.C(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.U(a,u)
if(q===37){p=P.kD(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a2("")
n=C.b.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a2("")
if(t<u){s.a+=C.b.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.c9(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.U(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a2("")
n=C.b.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kB(q)
u+=l
t=u}}}}if(s==null)return C.b.q(a,b,c)
if(t<c){n=C.b.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nI:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lG(C.b.D(a,b)))P.c9(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.c9(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.q(a,b,c)
return P.nB(t?a.toLowerCase():a)},
nB:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nJ:function(a,b,c){return P.d1(a,b,c,C.R,!1)},
nG:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.d1(a,b,c,C.z,!0):C.k.ja(d,new P.jH(),P.i).t(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.ad(u,"/"))u="/"+u
return P.nK(u,e,f)},
nK:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.ad(a,"/"))return P.nM(a,!u||c)
return P.nN(a)},
kC:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.f9("Both query and queryParameters specified"))
return P.d1(a,b,c,C.m,!0)}if(d==null)return
u=new P.a2("")
t.a=""
d.F(0,new P.jI(new P.jJ(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nE:function(a,b,c){return P.d1(a,b,c,C.m,!0)},
kD:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.U(a,b+1)
t=C.b.U(a,p)
s=H.k1(u)
r=H.k1(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aJ(q,4)
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dJ(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
kB:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.D(o,a>>>4))
C.a.k(t,2,C.b.D(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.hr(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.cK(t,0,null)},
d1:function(a,b,c,d,e){var u=P.lI(a,b,c,d,e)
return u==null?C.b.q(a,b,c):u},
lI:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.K()
if(typeof c!=="number")return H.C(c)
if(!(o<c))break
c$0:{u=C.b.U(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.c(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kD(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.c(C.l,t)
t=(C.l[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.c9(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.U(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kB(u)}}if(m==null)m=new P.a2("")
m.a+=C.b.q(a,n,o)
m.a+=H.k(s)
if(typeof r!=="number")return H.C(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.K()
if(n<c)m.a+=C.b.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lH:function(a){if(C.b.ad(a,"."))return!0
return C.b.dK(a,"/.")!==-1},
nN:function(a){var u,t,s,r,q,p,o
if(!P.lH(a))return a
u=H.e([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.N(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.t(u,"/")},
nM:function(a,b){var u,t,s,r,q,p
if(!P.lH(a))return!b?P.lF(a):a
u=H.e([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaA(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaA(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.k(u,0,P.lF(u[0]))}return C.a.t(u,"/")},
lF:function(a){var u,t,s,r=a.length
if(r>=2&&P.lG(J.ms(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.q(a,0,u)+"%3A"+C.b.aj(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nD:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.f9("Invalid URL encoding"))}}return u},
kE:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.q(a,b,c)
else r=new H.a1(C.b.q(a,b,c))}else{r=H.e([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.d(P.f9("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.f9("Truncated URI"))
C.a.h(r,P.nD(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.iJ(!1).bX(r)},
lG:function(a){var u=a|32
return 97<=u&&u<=122},
ls:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.e([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a0(m,a,t))}}if(s<0&&t>b)throw H.d(P.a0(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaA(l)
if(r!==44||t!==p+7||!C.b.a4(a,"base64",p+1))throw H.d(P.a0("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.D.im(0,a,o,u)
else{n=P.lI(a,o,u,C.m,!0)
if(n!=null)a=C.b.aM(a,o,u,n)}return new P.iC(a,l,c)},
nP:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mR(22,new P.jP(),P.M),n=new P.jO(o),m=new P.jQ(),l=new P.jR(),k=H.f(n.$2(0,225),"$iM")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iM")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iM")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iM")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iM")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iM")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iM")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iM")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iM")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iM")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iM"),"]",5)
k=H.f(n.$2(9,235),"$iM")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iM")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iM")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iM")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iM")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iM")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iM")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iM")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iM")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iM"),"az",21)
k=H.f(n.$2(21,245),"$iM")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
lN:function(a,b,c,d,e){var u,t,s,r,q=$.mr()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.c(q,d)
t=q[d]
s=C.b.D(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.c(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
a3:function a3(){},
au:function au(a,b){this.a=a
this.b=b},
A:function A(){},
br:function br(a){this.a=a},
fB:function fB(){},
fC:function fC(){},
bs:function bs(){},
fa:function fa(){},
dG:function dG(){},
aZ:function aZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fS:function fS(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iB:function iB(a){this.a=a},
iy:function iy(a){this.a=a},
i2:function i2(a){this.a=a},
fp:function fp(a){this.a=a},
hD:function hD(){},
dT:function dT(){},
fw:function fw(a){this.a=a},
ei:function ei(a){this.a=a},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
h:function h(){},
b2:function b2(){},
b:function b(){},
y:function y(){},
J:function J(){},
aa:function aa(){},
P:function P(){},
ar:function ar(){},
i:function i(){},
a2:function a2(a){this.a=a},
iG:function iG(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
c8:function c8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jG:function jG(a,b){this.a=a
this.b=b},
jH:function jH(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
jI:function jI(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(){},
jO:function jO(a){this.a=a},
jQ:function jQ(){},
jR:function jR(){},
jx:function jx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ja:function ja(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
bk:function(a){var u,t,s,r,q
if(a==null)return
u=P.l7(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r){q=H.U(t[r])
u.k(0,q,a[q])}return u},
ol:function(a){var u={}
a.F(0,new P.jX(u))
return u},
jz:function jz(){},
jB:function jB(a,b){this.a=a
this.b=b},
jX:function jX(a){this.a=a},
jA:function jA(a,b){this.a=a
this.b=b},
fK:function fK(a,b){this.a=a
this.b=b},
fL:function fL(){},
fM:function fM(){},
jp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nw:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jr:function jr(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
fX:function fX(){},
b7:function b7(){},
hB:function hB(){},
hH:function hH(){},
ia:function ia(){},
p:function p(){},
b9:function b9(){},
im:function im(){},
en:function en(){},
eo:function eo(){},
ey:function ey(){},
ez:function ez(){},
eJ:function eJ(){},
eK:function eK(){},
eQ:function eQ(){},
eR:function eR(){},
M:function M(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(a){this.a=a},
ff:function ff(){},
bN:function bN(){},
hC:function hC(){},
eb:function eb(){},
da:function da(){},
dp:function dp(){},
dK:function dK(){},
dO:function dO(){},
c0:function c0(){},
dP:function dP(){},
dU:function dU(){},
e1:function e1(){},
i1:function i1(){},
eF:function eF(){},
eG:function eG(){}},W={
l_:function(){var u=document.createElement("canvas")
return u},
l3:function(a){H.f(a,"$ij")
return"wheel"},
mI:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icu")
try{s.type=a}catch(u){H.aF(u)}return s},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lD:function(a,b,c,d){var u=W.jo(W.jo(W.jo(W.jo(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.lR(new W.jd(c),W.n)
if(u!=null&&!0)J.mu(a,b,u,!1)
return new W.jc(a,b,u,!1,[e])},
lR:function(a,b){var u=$.Y
if(u===C.f)return a
return u.dg(a,b)},
q:function q(){},
f5:function f5(){},
f7:function f7(){},
f8:function f8(){},
bO:function bO(){},
bQ:function bQ(){},
bo:function bo(){},
co:function co(){},
fs:function fs(){},
Q:function Q(){},
cp:function cp(){},
ft:function ft(){},
b0:function b0(){},
b1:function b1(){},
fu:function fu(){},
fv:function fv(){},
fx:function fx(){},
dh:function dh(){},
fy:function fy(){},
di:function di(){},
dj:function dj(){},
fz:function fz(){},
fA:function fA(){},
j8:function j8(a,b){this.a=a
this.b=b},
a_:function a_(){},
n:function n(){},
j:function j(){},
az:function az(){},
cq:function cq(){},
fJ:function fJ(){},
fN:function fN(){},
aI:function aI(){},
fQ:function fQ(){},
bV:function bV(){},
ct:function ct(){},
cu:function cu(){},
b4:function b4(){},
h3:function h3(){},
hn:function hn(){},
cx:function cx(){},
ho:function ho(){},
hp:function hp(a){this.a=a},
hq:function hq(){},
hr:function hr(a){this.a=a},
aK:function aK(){},
hs:function hs(){},
ad:function ad(){},
j7:function j7(a){this.a=a},
H:function H(){},
cC:function cC(){},
aL:function aL(){},
hF:function hF(){},
hO:function hO(){},
hP:function hP(a){this.a=a},
hR:function hR(){},
aN:function aN(){},
i_:function i_(){},
aO:function aO(){},
i0:function i0(){},
aP:function aP(){},
i4:function i4(){},
i5:function i5(a){this.a=a},
aA:function aA(){},
bj:function bj(){},
aR:function aR(){},
aB:function aB(){},
ic:function ic(){},
id:function id(){},
ih:function ih(){},
aT:function aT(){},
aU:function aU(){},
ik:function ik(){},
il:function il(){},
bF:function bF(){},
iH:function iH(){},
j_:function j_(){},
bc:function bc(){},
cR:function cR(){},
j9:function j9(){},
ed:function ed(){},
jn:function jn(){},
ev:function ev(){},
jy:function jy(){},
jC:function jC(){},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kz:function kz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jc:function jc(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jd:function jd(a){this.a=a},
E:function E(){},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ew:function ew(){},
ex:function ex(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
cY:function cY(){},
cZ:function cZ(){},
eD:function eD(){},
eE:function eE(){},
eI:function eI(){},
eL:function eL(){},
eM:function eM(){},
d_:function d_(){},
d0:function d0(){},
eO:function eO(){},
eP:function eP(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){}},O={
fn:function(a){var u=new O.V([a])
u.bb(a)
return u},
V:function V(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cw:function cw(){this.b=this.a=null},
ln:function(a,b){var u,t,s,r,q=new O.aS()
q.sag(b)
q.sdl(null)
u=V.dN()
if(!J.N(q.c,u)){t=q.c
q.c=u
s=new D.F("source",t,u,[V.bD])
s.b=!0
q.O(s)}r=a==null?V.dN():a
if(!J.N(q.d,r)){t=q.d
q.d=r
s=new D.F("destination",t,r,[V.bD])
s.b=!0
q.O(s)}if(q.e!==!1){q.e=!1
s=new D.F("flip",!0,!1,[P.a3])
s.b=!0
q.O(s)}q.f=null
return q},
dz:function dz(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(){},
hi:function hi(a,b){this.a=a
this.b=b},
hj:function hj(){},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(){},
ha:function ha(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dB:function dB(){},
hb:function hb(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hd:function hd(){var _=this
_.e=_.d=_.c=_.b=null},
he:function he(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hf:function hf(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bE:function bE(){},
dW:function dW(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aS:function aS(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
l4:function(){var u=new E.ap()
u.a=""
u.b=!0
u.seh(0,O.fn(E.ap))
u.y.aD(u.gio(),u.gir())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbs(0,null)
return u},
n8:function(a,b){var u=new E.hK(a)
u.ed(a,b)
return u},
ng:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibQ)return E.lo(a,!0,!0,!0,!1)
u=W.l_()
t=u.style
t.width="100%"
t.height="100%"
s.gbW(a).h(0,u)
return E.lo(u,!0,!0,!0,!1)},
lo:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dY(),j=H.f(C.o.e3(a,"webgl2",P.mO(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic0")
if(j==null)H.u(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.n8(j,a)
H.a9(j.getParameter(3379))
H.a9(j.getParameter(34076))
u=new X.e4(a)
t=new X.fW()
t.c=new X.av(!1,!1,!1)
t.sh6(P.mP(P.l))
u.b=t
t=new X.ht(u)
t.f=0
t.r=V.bi()
t.x=V.bi()
t.ch=t.Q=1
u.c=t
t=new X.h4(u)
t.r=0
t.x=V.bi()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ij(u)
t.f=V.bi()
t.r=V.bi()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seM(H.e([],[[P.cJ,P.P]]))
t=u.z
s=document
r=W.ad
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.o(u.gfj(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.o(u.gfu(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.o(u.gfd(),o),!1,p))
t=u.z
n=W.b4
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.o(u.gfA(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.o(u.gfw(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.o(u.gfE(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.o(u.gfI(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.o(u.gfG(),q),!1,r))
n=u.z
W.l3(a)
m=W.bc;(n&&C.a).h(n,W.ab(a,H.U(W.l3(a)),H.o(u.gfK(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.o(u.gfl(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.o(u.gfn(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.o(u.gfM(),o),!1,p))
p=u.z
o=W.aU
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.o(u.gh1(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.o(u.gfY(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.o(u.gh_(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.au(Date.now(),!1)
k.cy=0
k.d3()
return k},
fj:function fj(){},
ap:function ap(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hK:function hK(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
dY:function dY(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
ig:function ig(a){this.a=a}},Z={
lB:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bH(c)),35044)
a.bindBuffer(b,null)
return new Z.e8(b,u)},
aC:function(a){return new Z.bG(a)},
e8:function e8(a,b){this.a=a
this.b=b},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
e9:function e9(a){this.a=a},
cm:function cm(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a){this.a=a}},D={
O:function(){var u=new D.bt()
u.sa5(null)
u.saH(null)
u.c=null
u.d=0
return u},
fm:function fm(){},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
fG:function fG(a){this.a=a},
fH:function fH(a){this.a=a},
w:function w(){this.b=null},
bu:function bu(a){this.b=null
this.$ti=a},
bv:function bv(a){this.b=null
this.$ti=a},
F:function F(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ac:function ac(){},
dv:function dv(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dI:function dI(){},
dS:function dS(){}},X={dc:function dc(a,b){this.a=a
this.b=b},du:function du(a,b){this.a=a
this.b=b},fW:function fW(){var _=this
_.d=_.c=_.b=_.a=null},dx:function dx(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h4:function h4(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},av:function av(a,b,c){this.a=a
this.b=b
this.c=c},bg:function bg(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ht:function ht(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cy:function cy(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hG:function hG(){},e_:function e_(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ij:function ij(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e4:function e4(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
km:function(a){var u,t=new X.fP()
if(a==null)u=new V.a5(0,0,0,1)
else u=a
t.a=u
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
u=V.dN()
t.r=u
return t},
lc:function(a){var u,t,s=new X.dH()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().h(0,s.geo())
t=new D.F("mover",u,s.b,[U.ai])
t.b=!0
s.a0(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.K().a)){s.c=1.0471975511965976
t=new D.F("fov",t,1.0471975511965976,[P.A])
t.b=!0
s.a0(t)}t=s.d
if(!(Math.abs(t-0.1)<$.K().a)){s.d=0.1
t=new D.F("near",t,0.1,[P.A])
t.b=!0
s.a0(t)}t=s.e
if(!(Math.abs(t-2000)<$.K().a)){s.e=2000
t=new D.F("far",t,2000,[P.A])
t.b=!0
s.a0(t)}return s},
fg:function fg(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){},
fP:function fP(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fR:function fR(){this.b=this.a=null},
dH:function dH(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cL:function cL(){}},V={
oL:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.ba(a-b,u)
return(a<0?a+u:a)+b},
S:function(a,b,c){if(a==null)return C.b.aB("null",c)
return C.b.aB(C.e.e_(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
ce:function(a,b,c){var u,t,s,r,q,p=H.e([],[P.i])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.z)(a),++s){r=V.S(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.k(p,q,C.b.aB(p[q],t))}return p},
kQ:function(a){return C.e.iM(Math.pow(2,C.O.c4(Math.log(H.ok(a))/Math.log(2))))},
bz:function(){var u=$.hm
return u==null?$.hm=V.aJ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aJ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l9:function(a,b,c){var u=c.u(0,Math.sqrt(c.w(c))),t=b.ay(u),s=t.u(0,Math.sqrt(t.w(t))),r=u.ay(s),q=new V.L(a.a,a.b,a.c),p=s.P(0).w(q),o=r.P(0).w(q),n=u.P(0).w(q)
return V.aJ(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bi:function(){var u=$.le
return u==null?$.le=new V.a7(0,0):u},
lf:function(){var u=$.cD
return u==null?$.cD=new V.a8(0,0,0):u},
dN:function(){var u=$.cG
return u==null?$.cG=V.dM(0,0,1,1):u},
dM:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bD(a,b,c,d)},
cQ:function(){var u=$.lz
return u==null?$.lz=new V.L(0,0,0):u},
nq:function(){var u=$.iL
return u==null?$.iL=new V.L(-1,0,0):u},
ky:function(){var u=$.iM
return u==null?$.iM=new V.L(0,1,0):u},
lA:function(){var u=$.iN
return u==null?$.iN=new V.L(0,0,1):u},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF:function fF(a){this.a=a},
dC:function dC(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ah:function ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function(a){var u=new V.hS()
u.ee(a)
return u},
f6:function f6(){},
bf:function bf(){},
dy:function dy(){},
bh:function bh(){this.a=null},
hS:function hS(){this.a=null},
cI:function cI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a){this.b=a
this.c=null},
ii:function ii(){this.c=this.b=this.a=null},
cN:function cN(a){this.b=a
this.a=this.c=null},
oE:function(a){P.nh(C.M,new V.kc(a))},
na:function(a){var u=new V.hW()
u.ef(a,!0)
return u},
kc:function kc(a){this.a=a},
hI:function hI(a){this.a=a
this.c=null},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hW:function hW(){this.b=this.a=null},
hY:function hY(a){this.a=a},
hX:function hX(a){this.a=a}},U={
kl:function(){var u=new U.fo()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
l1:function(a){var u=new U.de()
u.a=a
return u},
fo:function fo(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){this.b=this.a=null},
cs:function cs(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
e5:function e5(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dd:function dd(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},df:function df(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dk:function dk(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aw:function aw(){}},A={
mS:function(a,b){var u=a.b_,t=new A.dA(b,u)
t.cz(b,u)
t.ec(a,b)
return t},
mT:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gal(a0)+a1.gal(a1)+a2.gal(a2)+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.z)(a9),++t)f+="_"+H.k(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.z)(b0),++t)f+="_"+H.k(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.z)(b1),++t)f+="_"+H.k(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.aX()
if(k){u=$.bn()
g=new Z.bG(g.a|u.a)}if(j){u=$.bm()
g=new Z.bG(g.a|u.a)}if(i){u=$.bl()
g=new Z.bG(g.a|u.a)}return new A.hc(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jS:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jT:function(a,b,c){var u
A.jS(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kd(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
nV:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jS(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
nS:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jT(b,t,"ambient")
b.a+="\n"},
nT:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jT(b,t,"diffuse")
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
nW:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jT(b,t,"invDiffuse")
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
o1:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jT(b,t,"specular")
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
nY:function(a,b){var u,t,s
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
o_:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jS(b,t,"reflect")
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
o0:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jS(b,t,"refract")
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
nU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.k(u)
s=A.kd(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ai()
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
r=[P.i]
o=H.e([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.e([],r)
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
c.a+="      highLight = intensity*("+C.a.t(m," + ")+");\n"}else c.a+="   highLight = "+C.a.t(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.t(o," + ")+");\n"
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
nZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.k(u)
s=A.kd(t)
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
if(typeof u!=="number")return u.ai()
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
c.a=r+"\n"}r=[P.i]
l=H.e([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.t(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.e([],r)
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
k=H.e([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
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
o2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.k(u)
s=A.kd(t)
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
if(typeof u!=="number")return u.ai()
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
c.a=u+"\n"}u=[P.i]
j=H.e([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.t(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.e([],u)
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
i=H.e([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
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
nX:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.e([],[P.i])
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
u=b.a+="   return "+C.a.t(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
o3:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a2("")
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
A.nV(a,j)
A.nS(a,j)
A.nT(a,j)
A.nW(a,j)
A.o1(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.o_(a,j)
A.o0(a,j)}A.nY(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.nU(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.nZ(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.o2(a,q[o],j)
A.nX(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.e([],[P.i])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.t(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
o4:function(a,b){var u,t,s
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
o6:function(a,b){var u
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
o5:function(a,b){var u
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
o8:function(a,b){var u,t
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
o9:function(a,b){var u,t
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
o7:function(a,b){var u
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
oa:function(a,b){var u
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
kd:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.aj(a,1)},
nf:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.w
t=(s||b===C.p?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.v)t+="      clrAccum += color;\n"
else if(b===C.j)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.p
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
ne:function(a,b,c){var u="TextureLayout_"+a+"_"+C.d.i(b.a),t=new A.dX(c,u)
t.cz(c,u)
t.eg(a,b,c)
return t},
kv:function(a,b,c,d,e){var u=new A.is(a,c,e)
u.f=d
u.shH(P.mQ(d,0,P.l))
return u},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a){this.a=a},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b){var _=this
_.iX=_.iW=_.du=_.dt=_.b_=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.j9=_.j8=_.j7=_.c3=_.c2=_.c1=_.c0=_.c_=_.bZ=_.j6=_.j5=_.dD=_.j4=_.j3=_.dC=_.dB=_.j2=_.j1=_.dA=_.dz=_.j0=_.j_=_.dw=_.iZ=_.iY=_.dv=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aH:function aH(a,b){this.a=a
this.b=b},
aM:function aM(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.a=a
this.b=b},
hc:function hc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b_=b3
_.dt=b4},
c3:function c3(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c4:function c4(a,b,c,d,e,f,g,h,i,j){var _=this
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
c6:function c6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cH:function cH(){},
bp:function bp(a,b){this.a=a
this.b=b},
dX:function dX(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e0:function e0(){},
iw:function iw(a){this.a=a},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
af:function af(a,b,c){this.a=a
this.c=b
this.d=c},
ax:function ax(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
cO:function cO(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
bb:function bb(a,b,c){this.a=a
this.c=b
this.d=c},
c5:function c5(a,b,c){this.a=a
this.c=b
this.d=c}},F={
oJ:function(){return F.om(15,30,0.5,1,new F.ke())},
om:function(a,b,c,d,e){var u=F.oH(a,b,new F.jY(e,d,b,c))
if(u==null)return
u.ax()
u.il(new F.iU(),new F.hz())
return u},
oH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.lk()
t=H.e([],[F.as])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iO(g,g,new V.a5(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.dm(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iO(g,g,new V.a5(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dm(g))}}u.d.hM(a+1,b+1,t)
return u},
dm:function(a,b,c){var u=new F.a6(),t=a.a
if(t==null)H.u(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.x("May not create a face with vertices attached to different shapes."))
u.hk(a)
u.hl(b)
u.hm(c)
C.a.h(u.a.a.d.b,u)
u.a.a.aa()
return u},
lk:function(){var u=new F.dQ(),t=new F.iP(u)
t.b=!1
t.shI(H.e([],[F.as]))
u.a=t
t=new F.hV()
t.sbL(H.e([],[F.bY]))
u.b=t
t=new F.hU(u)
t.seW(H.e([],[F.by]))
u.c=t
t=new F.hT(u)
t.seN(H.e([],[F.a6]))
u.d=t
u.e=null
return u},
iO:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.as(),r=new F.iX()
r.sbL(H.e([],[F.bY]))
s.b=r
r=new F.iT()
u=[F.by]
r.seX(H.e([],u))
r.seY(H.e([],u))
s.c=r
r=new F.iQ()
u=[F.a6]
r.seO(H.e([],u))
r.seP(H.e([],u))
r.seQ(H.e([],u))
s.d=r
h=$.mm()
s.e=0
r=$.aX()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bn().a)!==0?e:t
s.x=(u&$.bm().a)!==0?b:t
s.y=(u&$.bK().a)!==0?f:t
s.z=(u&$.bL().a)!==0?g:t
s.Q=(u&$.mn().a)!==0?c:t
s.ch=(u&$.cj().a)!==0?i:0
s.cx=(u&$.bl().a)!==0?a:t
return s},
ke:function ke(){},
jY:function jY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fI:function fI(){},
hZ:function hZ(){},
by:function by(){},
fY:function fY(){},
ir:function ir(){},
bY:function bY(){},
dQ:function dQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hT:function hT(a){this.a=a
this.b=null},
hU:function hU(a){this.a=a
this.b=null},
hV:function hV(){this.b=null},
as:function as(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iZ:function iZ(a){this.a=a},
iY:function iY(a){this.a=a},
iP:function iP(a){this.a=a
this.c=this.b=null},
iQ:function iQ(){this.d=this.c=this.b=null},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(){this.c=this.b=null},
iV:function iV(){},
iU:function iU(){},
iW:function iW(){},
hz:function hz(){},
iX:function iX(){this.b=null}},T={
lm:function(a){var u=new T.ie()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
c1:function c1(){},
dV:function dV(){},
ie:function ie(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},S={
m1:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2="testCanvas",b3=null,b4="modifiers",b5=V.na("Test 036"),b6=W.l_()
b6.className="pageLargeCanvas"
b6.id=b2
b5.a.appendChild(b6)
u=[P.i]
b5.de(H.e(["Test of the texture layout cover technique."],u))
b5.hJ(H.e(["blends"],u))
b5.de(H.e(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b2)
if(t==null)H.u(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.ng(t,!0,!0,!0,!1)
r=new U.cs()
b5=U.ai
r.bb(b5)
r.aD(r.gf5(),r.gfQ())
r.e=null
r.f=V.bz()
r.r=0
q=s.r
p=new U.e6()
o=U.kl()
o.scr(0,!0)
o.sc9(6.283185307179586)
o.scb(0)
o.sa8(0,0)
o.sca(100)
o.sT(0)
o.sbY(0.5)
p.b=o
n=p.gaG()
o.gm().h(0,n)
o=U.kl()
o.scr(0,!0)
o.sc9(6.283185307179586)
o.scb(0)
o.sa8(0,0)
o.sca(100)
o.sT(0)
o.sbY(0.5)
p.c=o
o.gm().h(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.av(!1,!1,!1)
l=p.d
p.d=m
o=[X.av]
n=new D.F(b4,l,m,o)
n.b=!0
p.M(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.F("invertX",n,!1,[P.a3])
n.b=!0
p.M(n)}n=p.r
if(n!==!1){p.r=!1
n=new D.F("invertY",n,!1,[P.a3])
n.b=!0
p.M(n)}p.aV(q)
r.h(0,p)
q=s.r
p=new U.e5()
n=U.kl()
n.scr(0,!0)
n.sc9(6.283185307179586)
n.scb(0)
n.sa8(0,0)
n.sca(100)
n.sT(0)
n.sbY(0.2)
p.b=n
n.gm().h(0,p.gaG())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.av(!0,!1,!1)
l=p.c
p.c=m
n=new D.F(b4,l,m,o)
n.b=!0
p.M(n)
p.aV(q)
r.h(0,p)
q=s.r
p=new U.e7()
p.c=0.01
p.e=p.d=0
m=new X.av(!1,!1,!1)
p.b=m
o=new D.F(b4,b3,m,o)
o.b=!0
p.M(o)
p.aV(q)
r.h(0,p)
r.h(0,U.l1(V.aJ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
k=X.lc(r)
j=new V.a5(0,0,0,0)
i=new X.fg()
i.d=i.c=i.b=i.a=512
i.e=!0
i.f=!1
i.x=i.r=1
i.ch=T.lm(b3)
i.cx=new V.a5(0,0,0,1)
i.cy=!0
i.db=2000
i.dx=!0
i.dy=V.dN()
i.sah(0,512)
i.sae(0,512)
if(!i.cx.n(0,j)){l=i.cx
i.cx=j
q=new D.F("color",l,j,[V.a5])
q.b=!0
i.a0(q)}q=i.db
if(!(Math.abs(q-2000)<$.K().a)){i.db=2000
q=new D.F("depth",q,2000,[P.A])
q.b=!0
i.a0(q)}if(!i.f){i.f=!0
q=new D.F("autoResize",!1,!0,[P.a3])
q.b=!0
i.a0(q)}q=i.r
if(!(Math.abs(q-1)<$.K().a)){i.r=1
q=new D.F("autoResizeScalarX",q,1,[P.A])
q.b=!0
i.a0(q)}q=i.x
if(!(Math.abs(q-1)<$.K().a)){i.x=1
q=new D.F("autoResizeScalarY",q,1,[P.A])
q.b=!0
i.a0(q)}h=V.dN()
if(!J.N(i.dy,h)){l=i.dy
i.dy=h
q=new D.F("region",l,h,[V.bD])
q.b=!0
i.a0(q)}g=E.l4()
g.sbs(0,F.oJ())
f=new O.dz()
f.sex(O.fn(V.ah))
f.e.aD(f.gf9(),f.gfb())
q=new O.b6(f,"emission")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a4(0,0,0)
f.f=q
q=new O.b6(f,"ambient")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a4(0,0,0)
f.r=q
q=new O.b6(f,"diffuse")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a4(0,0,0)
f.x=q
q=new O.b6(f,"invDiffuse")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a4(0,0,0)
f.y=q
q=new O.hf(f,"specular")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a4(0,0,0)
q.ch=100
f.z=q
q=new O.hb(f,"bump")
q.c=new A.ao(!1,!1,!1)
f.Q=q
f.ch=null
q=new O.b6(f,"reflect")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a4(0,0,0)
f.cx=q
q=new O.he(f,"refract")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a4(0,0,0)
q.ch=1
f.cy=q
q=new O.ha(f,"alpha")
q.c=new A.ao(!1,!1,!1)
q.f=1
f.db=q
q=new D.dv()
q.bb(D.ac)
q.seJ(H.e([],[D.bq]))
q.sh3(H.e([],[D.dI]))
q.sht(H.e([],[D.dS]))
q.y=q.x=null
q.cs(q.gf7(),q.gfO(),q.gfS())
f.dx=q
p=new O.hd()
p.b=new V.a5(0,0,0,0)
p.c=1
p.d=10
p.e=!1
f.dy=p
p=q.x
q=p==null?q.x=D.O():p
q.h(0,f.ghg())
q=f.dx
p=q.y
q=p==null?q.y=D.O():p
q.h(0,f.gar())
f.fr=null
q=f.dx
e=V.ky()
p=U.l1(V.l9(V.lf(),e,new V.L(0,-1,-1)))
j=new V.a4(1,1,1)
o=new D.bq()
o.c=new V.a4(1,1,1)
o.a=V.lA()
o.d=V.ky()
o.e=V.nq()
l=o.b
o.b=p
p.gm().h(0,o.gei())
b5=new D.F("mover",l,o.b,[b5])
b5.b=!0
o.aq(b5)
if(!o.c.n(0,j)){l=o.c
o.c=j
b5=new D.F("color",l,j,[V.a4])
b5.b=!0
o.aq(b5)}q.h(0,o)
b5=f.r
b5.saX(0,new V.a4(0,0,1))
b5=f.x
b5.saX(0,new V.a4(0,1,0))
b5=f.z
b5.saX(0,new V.a4(1,0,0))
b5=f.z
b5.d5(new A.ao(!0,!1,!1))
b5.d6(10)
d=new M.dk()
d.a=!0
d.seA(0,O.fn(E.ap))
d.e.aD(d.gff(),d.gfh())
d.y=d.x=d.r=d.f=null
c=X.km(b3)
d.sdj(b3)
d.sb6(0,c)
d.sb7(b3)
d.sdj(k)
d.sb7(f)
d.sb6(0,i)
d.e.h(0,g)
b=new V.a5(0,0,0,1)
a=new O.dW()
a.a=new V.a5(0,0,0,0)
a.seL(O.fn(O.aS))
a.c.aD(a.gfp(),a.gfs())
a.d=0
a.e=null
a.r=a.f=C.j
if(!a.a.n(0,b)){l=a.a
a.a=b
b5=new D.F("backColor",l,b,[V.a5])
b5.b=!0
a.O(b5)}a.saW(C.j)
for(a0=0;a0<3;++a0){a1=a0*0.3333333333333333
for(a2=0;a2<3;++a2){b5=a.c
q=i.ch
p=H.t(b5,0)
q=H.B(O.ln(V.dM(a1,a2*0.3333333333333333,0.3333333333333333,0.3333333333333333),q),p)
o=[p]
if(H.D(b5.bK(H.e([q],o)))){n=b5.a
a3=n.length
C.a.h(n,q)
p=H.m(H.e([q],o),"$ih",[p],"$ah")
b5=b5.c
if(b5!=null)b5.$2(a3,p)}}}b5=a.c
q=O.ln(b3,b3)
q.sag(i.ch)
q.sdl(V.aJ(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1))
b5.h(0,q)
a4=X.km(new V.a5(0,0,0,1))
a5=new M.df()
a5.a=!0
b5=E.l4()
a6=F.lk()
q=a6.a
p=new V.L(-1,-1,1)
p=p.u(0,Math.sqrt(p.w(p)))
a7=q.bg(new V.bB(1,2,4,6),new V.a5(1,0,0,1),new V.a8(-1,-1,0),new V.a7(0,1),p,b3)
q=a6.a
p=new V.L(1,-1,1)
p=p.u(0,Math.sqrt(p.w(p)))
a8=q.bg(new V.bB(0,3,4,6),new V.a5(0,0,1,1),new V.a8(1,-1,0),new V.a7(1,1),p,b3)
q=a6.a
p=new V.L(1,1,1)
p=p.u(0,Math.sqrt(p.w(p)))
a9=q.bg(new V.bB(0,2,5,6),new V.a5(0,1,0,1),new V.a8(1,1,0),new V.a7(1,0),p,b3)
q=a6.a
p=V.bi()
o=new V.L(-1,1,1)
o=o.u(0,Math.sqrt(o.w(o)))
b0=q.bg(new V.bB(0,2,4,7),new V.a5(1,1,0,1),new V.a8(-1,1,0),p,o,b3)
a6.d.hL(H.e([a7,a8,a9,b0],[F.as]))
a6.ax()
b5.sbs(0,a6)
a5.e=b5
b1=new X.fR()
l=a5.b
a5.b=b1
b1.gm().h(0,a5.gY())
b5=new D.F("camera",l,a5.b,[X.bP])
b5.b=!0
a5.W(b5)
a5.sb6(0,b3)
a5.sb7(b3)
a5.sb7(a)
a5.sb6(0,a4)
b5=M.aw
q=H.e([d,a5],[b5])
p=new M.dd()
p.bb(b5)
p.e=!0
p.f=!1
p.r=null
p.aD(p.gfU(),p.gfW())
p.bR(0,q)
b5=s.d
if(b5!==p){if(b5!=null)b5.gm().N(0,s.gcB())
s.d=p
p.gm().h(0,s.gcB())
s.cC()}b5=new V.hI("blends")
u=u.getElementById("blends")
b5.c=u
if(u==null)H.u("Failed to find blends for RadioGroup")
b5.bQ(0,"Additive",new S.k6(a))
b5.dd(0,"AlphaBlend",new S.k7(a),!0)
b5.bQ(0,"Average",new S.k8(a))
b5.bQ(0,"Overwrite",new S.k9(a))
V.oE(s)},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kr.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gE:function(a){return H.cE(a)},
i:function(a){return"Instance of '"+H.k(H.cF(a))+"'"}}
J.fT.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$ia3:1}
J.ds.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0}}
J.dt.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.hE.prototype={}
J.c7.prototype={}
J.bx.prototype={
i:function(a){var u=a[$.ma()]
if(u==null)return this.e9(a)
return"JavaScript function for "+H.k(J.aY(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikn:1}
J.b3.prototype={
h:function(a,b){H.B(b,H.t(a,0))
if(!!a.fixed$length)H.u(P.G("add"))
a.push(b)},
dU:function(a,b){if(!!a.fixed$length)H.u(P.G("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dL(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.u(P.G("remove"))
for(u=0;u<a.length;++u)if(J.N(a[u],b)){a.splice(u,1)
return!0}return!1},
bR:function(a,b){var u,t
H.m(b,"$ih",[H.t(a,0)],"$ah")
if(!!a.fixed$length)H.u(P.G("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.z)(b),++t)a.push(b[t])},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bS(a))}},
t:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.k(a[u]))
return t.join(b)},
ih:function(a){return this.t(a,"")},
i9:function(a,b,c,d){var u,t,s
H.B(b,d)
H.o(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bS(a))}return t},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
e7:function(a,b,c){if(b<0||b>a.length)throw H.d(P.ae(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.ae(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.t(a,0)])
return H.e(a.slice(b,c),[H.t(a,0)])},
gi8:function(a){if(a.length>0)return a[0]
throw H.d(H.l5())},
gaA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.l5())},
bt:function(a,b){var u=H.t(a,0)
H.o(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.u(P.G("sort"))
H.dR(a,0,a.length-1,b,u)},
ao:function(a,b){var u
for(u=0;u<a.length;++u)if(J.N(a[u],b))return!0
return!1},
i:function(a){return P.ko(a,"[","]")},
gV:function(a){return new J.aq(a,a.length,[H.t(a,0)])},
gE:function(a){return H.cE(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.G("set length"))
if(b<0)throw H.d(P.ae(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.cd(a,b))
return a[b]},
k:function(a,b,c){H.B(c,H.t(a,0))
if(!!a.immutable$list)H.u(P.G("indexed set"))
if(b>=a.length||b<0)throw H.d(H.cd(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.kq.prototype={}
J.aq.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.z(s))
u=t.c
if(u>=r){t.scQ(null)
return!1}t.scQ(s[u]);++t.c
return!0},
scQ:function(a){this.d=H.B(a,H.t(this,0))},
$ib2:1}
J.cv.prototype={
hU:function(a,b){var u
H.m2(b)
if(typeof b!=="number")throw H.d(H.aW(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbj(b)
if(this.gbj(a)===u)return 0
if(this.gbj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbj:function(a){return a===0?1/a<0:a<0},
iM:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.G(""+a+".toInt()"))},
c4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.G(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.G(""+a+".round()"))},
e_:function(a,b){var u
if(b>20)throw H.d(P.ae(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbj(a))return"-"+u
return u},
b8:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.ae(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.U(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.G("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.p("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
ba:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eb:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d8(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.d8(a,b)},
d8:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.G("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
aJ:function(a,b){var u
if(a>0)u=this.d7(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hr:function(a,b){if(b<0)throw H.d(H.aW(b))
return this.d7(a,b)},
d7:function(a,b){return b>31?0:a>>>b},
$iA:1,
$iaa:1}
J.dr.prototype={$il:1}
J.dq.prototype={}
J.bw.prototype={
U:function(a,b){if(b<0)throw H.d(H.cd(a,b))
if(b>=a.length)H.u(H.cd(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.d(H.cd(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.d(P.kj(b,null,null))
return a+b},
aM:function(a,b,c,d){var u,t
c=P.bC(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ae(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ad:function(a,b){return this.a4(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.aW(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.d(P.dL(b,null))
if(b>c)throw H.d(P.dL(b,null))
if(c>a.length)throw H.d(P.dL(c,null))
return a.substring(b,c)},
aj:function(a,b){return this.q(a,b,null)},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aB:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
bi:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ae(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dK:function(a,b){return this.bi(a,b,0)},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilb:1,
$ii:1}
H.a1.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.U(this.a,b)},
$acP:function(){return[P.l]},
$av:function(){return[P.l]},
$ah:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fD.prototype={}
H.dw.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.d4(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.bS(s))
u=t.c
if(u>=q){t.saS(null)
return!1}t.saS(r.G(s,u));++t.c
return!0},
saS:function(a){this.d=H.B(a,H.t(this,0))},
$ib2:1}
H.h8.prototype={
gV:function(a){return new H.h9(J.bM(this.a),this.b,this.$ti)},
gl:function(a){return J.aG(this.a)},
G:function(a,b){return this.b.$1(J.ki(this.a,b))},
$ah:function(a,b){return[b]}}
H.h9.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.saS(u.c.$1(t.gI(t)))
return!0}u.saS(null)
return!1},
gI:function(a){return this.a},
saS:function(a){this.a=H.B(a,H.t(this,1))},
$ab2:function(a,b){return[b]}}
H.j0.prototype={
gV:function(a){return new H.j1(J.bM(this.a),this.b,this.$ti)}}
H.j1.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.D(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bU.prototype={}
H.cP.prototype={
k:function(a,b,c){H.B(c,H.ay(this,"cP",0))
throw H.d(P.G("Cannot modify an unmodifiable list"))}}
H.e2.prototype={}
H.fq.prototype={
i:function(a){return P.kt(this)},
k:function(a,b,c){H.B(b,H.t(this,0))
H.B(c,H.t(this,1))
return H.mE()},
$iy:1}
H.fr.prototype={
gl:function(a){return this.a},
bh:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bh(0,b))return
return this.cR(b)},
cR:function(a){return this.b[H.U(a)]},
F:function(a,b){var u,t,s,r,q=this,p=H.t(q,1)
H.o(b,{func:1,ret:-1,args:[H.t(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.cR(r),p))}}}
H.io.prototype={
af:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hA.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fV.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.iA.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kf.prototype={
$1:function(a){if(!!J.T(a).$ibs)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eH.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iar:1}
H.cn.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ikn:1,
giQ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ib.prototype={}
H.i3.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ci(u)+"'"}}
H.ck.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ck))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.cE(this.a)
else u=typeof t!=="object"?J.d8(t):H.cE(t)
return(u^H.cE(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.k(H.cF(u))+"'")}}
H.iq.prototype={
i:function(a){return this.a}}
H.fl.prototype={
i:function(a){return this.a}}
H.hQ.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.j2.prototype={
i:function(a){return"Assertion failed: "+P.dl(this.a)}}
H.Z.prototype={
gl:function(a){return this.a},
gap:function(a){return new H.h_(this,[H.t(this,0)])},
bh:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cN(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cN(t,b)}else return s.ic(b)},
ic:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c7(u.bz(t,u.c6(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bc(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bc(r,b)
s=t==null?null:t.b
return s}else return q.ie(b)},
ie:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bz(r,s.c6(a))
t=s.c7(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.B(b,H.t(s,0))
H.B(c,H.t(s,1))
if(typeof b==="string"){u=s.b
s.cF(u==null?s.b=s.bI():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cF(t==null?s.c=s.bI():t,b,c)}else s.ig(b,c)},
ig:function(a,b){var u,t,s,r,q=this
H.B(a,H.t(q,0))
H.B(b,H.t(q,1))
u=q.d
if(u==null)u=q.d=q.bI()
t=q.c6(a)
s=q.bz(u,t)
if(s==null)q.bO(u,t,[q.bJ(a,b)])
else{r=q.c7(s,a)
if(r>=0)s[r].b=b
else s.push(q.bJ(a,b))}},
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.t(s,0),H.t(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.bS(s))
u=u.c}},
cF:function(a,b,c){var u,t=this
H.B(b,H.t(t,0))
H.B(c,H.t(t,1))
u=t.bc(a,b)
if(u==null)t.bO(a,b,t.bJ(b,c))
else u.b=c},
bJ:function(a,b){var u=this,t=new H.fZ(H.B(a,H.t(u,0)),H.B(b,H.t(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c6:function(a){return J.d8(a)&0x3ffffff},
c7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1},
i:function(a){return P.kt(this)},
bc:function(a,b){return a[b]},
bz:function(a,b){return a[b]},
bO:function(a,b,c){a[b]=c},
eF:function(a,b){delete a[b]},
cN:function(a,b){return this.bc(a,b)!=null},
bI:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bO(t,u,t)
this.eF(t,u)
return t}}
H.fZ.prototype={}
H.h_.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.h0(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h0.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bS(t))
else{t=u.c
if(t==null){u.scE(null)
return!1}else{u.scE(t.a)
u.c=u.c.c
return!0}}},
scE:function(a){this.d=H.B(a,H.t(this,0))},
$ib2:1}
H.k2.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.k3.prototype={
$2:function(a,b){return this.a(a,b)},
$S:36}
H.k4.prototype={
$1:function(a){return this.a(H.U(a))},
$S:29}
H.fU.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilb:1,
$in6:1}
H.cz.prototype={$icz:1}
H.bA.prototype={$ibA:1,$ini:1}
H.dD.prototype={
gl:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cA.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]},
k:function(a,b,c){H.oo(c)
H.be(b,a,a.length)
a[b]=c},
$abU:function(){return[P.A]},
$av:function(){return[P.A]},
$ih:1,
$ah:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.dE.prototype={
k:function(a,b,c){H.a9(c)
H.be(b,a,a.length)
a[b]=c},
$abU:function(){return[P.l]},
$av:function(){return[P.l]},
$ih:1,
$ah:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hu.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hv.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hw.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hx.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hy.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.dF.prototype={
gl:function(a){return a.length},
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.cB.prototype={
gl:function(a){return a.length},
j:function(a,b){H.be(b,a,a.length)
return a[b]},
$icB:1,
$iM:1}
H.cU.prototype={}
H.cV.prototype={}
H.cW.prototype={}
H.cX.prototype={}
P.j4.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:26}
P.j3.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:43}
P.j5.prototype={
$0:function(){this.a.$0()},
$S:1}
P.j6.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eN.prototype={
em:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cc(new P.jE(this,b),0),a)
else throw H.d(P.G("`setTimeout()` not found."))},
en:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cc(new P.jD(this,a,Date.now(),b),0),a)
else throw H.d(P.G("Periodic timer."))},
$ib8:1}
P.jE.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jD.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eb(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.bd.prototype={
ij:function(a){if((this.c&15)!==6)return!0
return this.b.b.cl(H.o(this.d,{func:1,ret:P.a3,args:[P.P]}),a.a,P.a3,P.P)},
ib:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.t(this,1)},r=this.b.b
if(H.f2(u,{func:1,args:[P.P,P.ar]}))return H.kM(r.iH(u,a.a,a.b,null,t,P.ar),s)
else return H.kM(r.cl(H.o(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aD.prototype={
dZ:function(a,b,c){var u,t,s,r=H.t(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Y
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oc(b,u)}t=new P.aD($.Y,[c])
s=b==null?1:3
this.cG(new P.bd(t,s,a,b,[r,c]))
return t},
iL:function(a,b){return this.dZ(a,null,b)},
cG:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibd")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaD")
s=u.a
if(s<4){u.cG(a)
return}t.a=s
t.c=u.c}P.jW(null,null,t.b,H.o(new P.je(t,a),{func:1,ret:-1}))}},
d1:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibd")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaD")
u=q.a
if(u<4){q.d1(a)
return}p.a=u
p.c=q.c}o.a=p.be(a)
P.jW(null,null,p.b,H.o(new P.ji(o,p),{func:1,ret:-1}))}},
bN:function(){var u=H.f(this.c,"$ibd")
this.c=null
return this.be(u)},
be:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cJ:function(a){var u,t,s=this,r=H.t(s,0)
H.kM(a,{futureOr:1,type:r})
u=s.$ti
if(H.kJ(a,"$icr",u,"$acr"))if(H.kJ(a,"$iaD",u,null))P.lC(a,s)
else P.nv(a,s)
else{t=s.bN()
H.B(a,r)
s.a=4
s.c=a
P.cS(s,t)}},
cK:function(a,b){var u,t=this
H.f(b,"$iar")
u=t.bN()
t.a=8
t.c=new P.an(a,b)
P.cS(t,u)},
$icr:1}
P.je.prototype={
$0:function(){P.cS(this.a,this.b)},
$S:1}
P.ji.prototype={
$0:function(){P.cS(this.b,this.a.a)},
$S:1}
P.jf.prototype={
$1:function(a){var u=this.a
u.a=0
u.cJ(a)},
$S:26}
P.jg.prototype={
$2:function(a,b){H.f(b,"$iar")
this.a.cK(a,b)},
$1:function(a){return this.$2(a,null)},
$S:31}
P.jh.prototype={
$0:function(){this.a.cK(this.b,this.c)},
$S:1}
P.jl.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dY(H.o(s.d,{func:1}),null)}catch(r){u=H.aF(r)
t=H.cg(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.T(n).$icr){if(n instanceof P.aD&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iL(new P.jm(p),null)
s.a=!1}},
$S:3}
P.jm.prototype={
$1:function(a){return this.a},
$S:52}
P.jk.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.t(s,0)
q=H.B(n.c,r)
p=H.t(s,1)
n.a.b=s.b.b.cl(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aF(o)
t=H.cg(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jj.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.D(r.ij(u))&&r.e!=null){q=m.b
q.b=r.ib(u)
q.a=!1}}catch(p){t=H.aF(p)
s=H.cg(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.ea.prototype={}
P.i6.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aD($.Y,[P.l])
r.a=0
u=H.t(s,0)
t=H.o(new P.i8(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.i9(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.i8.prototype={
$1:function(a){H.B(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.t(this.b,0)]}}}
P.i9.prototype={
$0:function(){this.b.cJ(this.a.a)},
$S:1}
P.cJ.prototype={}
P.i7.prototype={}
P.b8.prototype={}
P.an.prototype={
i:function(a){return H.k(this.a)},
$ibs:1}
P.jN.prototype={$iph:1}
P.jV.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dG():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u},
$S:1}
P.js.prototype={
iI:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.Y){a.$0()
return}P.lL(r,r,this,a,-1)}catch(s){u=H.aF(s)
t=H.cg(s)
P.jU(r,r,this,u,H.f(t,"$iar"))}},
iJ:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.Y){a.$1(b)
return}P.lM(r,r,this,a,b,-1,c)}catch(s){u=H.aF(s)
t=H.cg(s)
P.jU(r,r,this,u,H.f(t,"$iar"))}},
hR:function(a,b){return new P.ju(this,H.o(a,{func:1,ret:b}),b)},
bS:function(a){return new P.jt(this,H.o(a,{func:1,ret:-1}))},
dg:function(a,b){return new P.jv(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
dY:function(a,b){H.o(a,{func:1,ret:b})
if($.Y===C.f)return a.$0()
return P.lL(null,null,this,a,b)},
cl:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.Y===C.f)return a.$1(b)
return P.lM(null,null,this,a,b,c,d)},
iH:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.Y===C.f)return a.$2(b,c)
return P.od(null,null,this,a,b,c,d,e,f)}}
P.ju.prototype={
$0:function(){return this.a.dY(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jt.prototype={
$0:function(){return this.a.iI(this.b)},
$S:3}
P.jv.prototype={
$1:function(a){var u=this.c
return this.a.iJ(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jq.prototype={
gV:function(a){var u=this,t=new P.ep(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.B(b,H.t(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cH(u==null?s.b=P.kA():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cH(t==null?s.c=P.kA():t,b)}else return s.eq(0,b)},
eq:function(a,b){var u,t,s,r=this
H.B(b,H.t(r,0))
u=r.d
if(u==null)u=r.d=P.kA()
t=r.cL(b)
s=u[t]
if(s==null)u[t]=[r.bv(b)]
else{if(r.cS(s,b)>=0)return!1
s.push(r.bv(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h9(this.c,b)
else return this.h8(0,b)},
h8:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eT(r,b)
t=s.cS(u,b)
if(t<0)return!1
s.d9(u.splice(t,1)[0])
return!0},
cH:function(a,b){H.B(b,H.t(this,0))
if(H.f(a[b],"$icT")!=null)return!1
a[b]=this.bv(b)
return!0},
h9:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icT")
if(u==null)return!1
this.d9(u)
delete a[b]
return!0},
cW:function(){this.r=1073741823&this.r+1},
bv:function(a){var u,t=this,s=new P.cT(H.B(a,H.t(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cW()
return s},
d9:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cW()},
cL:function(a){return J.d8(a)&1073741823},
eT:function(a,b){return a[this.cL(b)]},
cS:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1}}
P.cT.prototype={}
P.ep.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bS(t))
else{t=u.c
if(t==null){u.scI(null)
return!1}else{u.scI(H.B(t.a,H.t(u,0)))
u.c=u.c.b
return!0}}},
scI:function(a){this.d=H.B(a,H.t(this,0))},
$ib2:1}
P.h1.prototype={
$2:function(a,b){this.a.k(0,H.B(a,this.b),H.B(b,this.c))},
$S:7}
P.h2.prototype={$ih:1,$ib:1}
P.v.prototype={
gV:function(a){return new H.dw(a,this.gl(a),[H.cf(this,a,"v",0)])},
G:function(a,b){return this.j(a,b)},
iO:function(a,b){var u,t=this,s=H.e([],[H.cf(t,a,"v",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.k(s,u,t.j(a,u))
return s},
iN:function(a){return this.iO(a,!0)},
i6:function(a,b,c,d){var u
H.B(d,H.cf(this,a,"v",0))
P.bC(b,c,this.gl(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.ko(a,"[","]")}}
P.h5.prototype={}
P.h6.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:7}
P.ag.prototype={
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.cf(s,a,"ag",0),H.cf(s,a,"ag",1)]})
for(u=J.bM(s.gap(a));u.v();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aG(this.gap(a))},
i:function(a){return P.kt(a)},
$iy:1}
P.jF.prototype={
k:function(a,b,c){H.B(b,H.t(this,0))
H.B(c,H.t(this,1))
throw H.d(P.G("Cannot modify unmodifiable map"))}}
P.h7.prototype={
j:function(a,b){return J.d7(this.a,b)},
k:function(a,b,c){J.kg(this.a,H.B(b,H.t(this,0)),H.B(c,H.t(this,1)))},
F:function(a,b){J.kV(this.a,H.o(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gl:function(a){return J.aG(this.a)},
i:function(a){return J.aY(this.a)},
$iy:1}
P.e3.prototype={}
P.jw.prototype={
i:function(a){return P.ko(this,"{","}")},
G:function(a,b){var u,t,s,r=this
P.li(b,"index")
for(u=P.nx(r,r.r,H.t(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.d(P.W(b,r,"index",null,t))},
$ih:1,
$ilj:1}
P.eq.prototype={}
P.eS.prototype={}
P.fh.prototype={
im:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bC(a0,a1,b.length)
u=$.mp()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k1(C.b.D(b,n))
j=H.k1(C.b.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.b.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a2("")
g=r.a+=C.b.q(b,s,t)
r.a=g+H.dJ(m)
s=n
continue}}throw H.d(P.a0("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.q(b,s,a1)
f=g.length
if(q>=0)P.kX(b,p,a1,q,o,f)
else{e=C.d.ba(f-1,4)+1
if(e===1)throw H.d(P.a0(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aM(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kX(b,p,a1,q,o,d)
else{e=C.d.ba(d,4)
if(e===1)throw H.d(P.a0(c,b,a1))
if(e>1)b=C.b.aM(b,a1,a1,e===2?"==":"=")}return b},
$abR:function(){return[[P.b,P.l],P.i]}}
P.fi.prototype={
$abT:function(){return[[P.b,P.l],P.i]}}
P.bR.prototype={}
P.bT.prototype={}
P.fE.prototype={
$abR:function(){return[P.i,[P.b,P.l]]}}
P.iI.prototype={
gi5:function(){return C.L}}
P.iK.prototype={
bX:function(a){var u,t,s=P.bC(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jM(u)
if(t.eR(a,0,s)!==s)t.dc(J.mv(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nO(0,t.b,u.length)))},
$abT:function(){return[P.i,[P.b,P.l]]}}
P.jM.prototype={
dc:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eR:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.U(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dc(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iJ.prototype={
bX:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.nl(!1,a,0,null)
if(u!=null)return u
t=P.bC(0,null,J.aG(a))
s=P.lO(a,0,t)
if(s>0){r=P.cK(a,0,s)
if(s===t)return r
q=new P.a2(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a2("")
n=new P.jL(!1,q)
n.c=o
n.hV(a,p,t)
if(n.e>0){H.u(P.a0("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dJ(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abT:function(){return[[P.b,P.l],P.i]}}
P.jL.prototype={
hV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.d4(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ai()
if((o&192)!==128){n=P.a0(h+C.d.b8(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.c(C.x,n)
if(u<=C.x[n]){n=P.a0("Overlong encoding of 0x"+C.d.b8(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a0("Character outside valid Unicode range: 0x"+C.d.b8(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.dJ(u)
i.c=!1}for(n=p<c;n;){m=P.lO(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cK(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.K()
if(o<0){j=P.a0("Negative UTF-8 code unit: -0x"+C.d.b8(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a0(h+C.d.b8(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.a3.prototype={}
P.au.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.au&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.d.aJ(u,30))&1073741823},
i:function(a){var u=this,t=P.mF(H.n2(u)),s=P.dg(H.n0(u)),r=P.dg(H.mX(u)),q=P.dg(H.mY(u)),p=P.dg(H.n_(u)),o=P.dg(H.n1(u)),n=P.mG(H.mZ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.br.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.br&&this.a===b.a},
gE:function(a){return C.d.gE(this.a)},
i:function(a){var u,t,s,r=new P.fC(),q=this.a
if(q<0)return"-"+new P.br(0-q).i(0)
u=r.$1(C.d.a1(q,6e7)%60)
t=r.$1(C.d.a1(q,1e6)%60)
s=new P.fB().$1(q%1e6)
return""+C.d.a1(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.fB.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.fC.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bs.prototype={}
P.fa.prototype={
i:function(a){return"Assertion failed"}}
P.dG.prototype={
i:function(a){return"Throw of null."}}
P.aZ.prototype={
gbx:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbw:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbx()+o+u
if(!q.a)return t
s=q.gbw()
r=P.dl(q.b)
return t+s+": "+r}}
P.c_.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.fS.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t=H.a9(this.b)
if(typeof t!=="number")return t.K()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gl:function(a){return this.f}}
P.iB.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iy.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.i2.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fp.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dl(u)+"."}}
P.hD.prototype={
i:function(a){return"Out of Memory"},
$ibs:1}
P.dT.prototype={
i:function(a){return"Stack Overflow"},
$ibs:1}
P.fw.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ei.prototype={
i:function(a){return"Exception: "+this.a}}
P.fO.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.D(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.U(f,q)
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
return h+l+j+k+"\n"+C.b.p(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.k(g)+")"):h}}
P.l.prototype={}
P.h.prototype={
gl:function(a){var u,t=this.gV(this)
for(u=0;t.v();)++u
return u},
G:function(a,b){var u,t,s
P.li(b,"index")
for(u=this.gV(this),t=0;u.v();){s=u.gI(u)
if(b===t)return s;++t}throw H.d(P.W(b,this,"index",null,t))},
i:function(a){return P.mJ(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ih:1}
P.y.prototype={}
P.J.prototype={
gE:function(a){return P.P.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
n:function(a,b){return this===b},
gE:function(a){return H.cE(this)},
i:function(a){return"Instance of '"+H.k(H.cF(this))+"'"},
toString:function(){return this.i(this)}}
P.ar.prototype={}
P.i.prototype={$ilb:1}
P.a2.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioT:1}
P.iG.prototype={
$2:function(a,b){var u,t,s,r=P.i
H.m(a,"$iy",[r,r],"$ay")
H.U(b)
u=J.kN(b).dK(b,"=")
if(u===-1){if(b!=="")J.kg(a,P.kE(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.q(b,0,u)
s=C.b.aj(b,u+1)
r=this.a
J.kg(a,P.kE(t,0,t.length,r,!0),P.kE(s,0,s.length,r,!0))}return a},
$S:39}
P.iD.prototype={
$2:function(a,b){throw H.d(P.a0("Illegal IPv4 address, "+a,this.a,b))},
$S:27}
P.iE.prototype={
$2:function(a,b){throw H.d(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:34}
P.iF.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.f4(C.b.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.K()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:45}
P.c8.prototype={
ge2:function(){return this.b},
gc5:function(a){var u=this.c
if(u==null)return""
if(C.b.ad(u,"["))return C.b.q(u,1,u.length-1)
return u},
gbm:function(a){var u=this.d
if(u==null)return P.lE(this.a)
return u},
gcf:function(a){var u=this.f
return u==null?"":u},
gdF:function(){var u=this.r
return u==null?"":u},
dW:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iy",[P.i,null],"$ay")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.ad(p,"/"))p="/"+p
n=P.kC(null,0,0,b)
return new P.c8(u,s,q,r,p,n,m.r)},
gcg:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.i
s.sh7(new P.e3(P.lv(u==null?"":u),[t,t]))}return s.Q},
gdG:function(){return this.c!=null},
gdJ:function(){return this.f!=null},
gdH:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.k(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.k(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.k(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$ikw)if(s.a==b.gbr())if(s.c!=null===b.gdG())if(s.b==b.ge2())if(s.gc5(s)==b.gc5(b))if(s.gbm(s)==b.gbm(b))if(s.e===b.gdT(b)){u=s.f
t=u==null
if(!t===b.gdJ()){if(t)u=""
if(u===b.gcf(b)){u=s.r
t=u==null
if(!t===b.gdH()){if(t)u=""
u=u===b.gdF()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gE:function(a){var u=this.z
return u==null?this.z=C.b.gE(this.i(0)):u},
sh7:function(a){var u=P.i
this.Q=H.m(a,"$iy",[u,u],"$ay")},
$ikw:1,
gbr:function(){return this.a},
gdT:function(a){return this.e}}
P.jG.prototype={
$1:function(a){throw H.d(P.a0("Invalid port",this.a,this.b+1))},
$S:49}
P.jH.prototype={
$1:function(a){return P.jK(C.T,a,C.h,!1)},
$S:40}
P.jJ.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.k(P.jK(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.k(P.jK(C.i,b,C.h,!0))}},
$S:14}
P.jI.prototype={
$2:function(a,b){var u,t
H.U(a)
if(b==null||typeof b==="string")this.a.$2(a,H.U(b))
else for(u=J.bM(H.m0(b,"$ih")),t=this.a;u.v();)t.$2(a,H.U(u.gI(u)))},
$S:44}
P.iC.prototype={
ge1:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.b.bi(u,"?",o)
s=u.length
if(t>=0){r=P.d1(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.ja("data",p,p,p,P.d1(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jP.prototype={
$1:function(a){return new Uint8Array(96)},
$S:38}
P.jO.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.mw(u,0,96,b)
return u},
$S:37}
P.jQ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.jR.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.jx.prototype={
gdG:function(){return this.c>0},
gdI:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.C()
t=this.e
if(typeof t!=="number")return H.C(t)
t=u+1<t
u=t}else u=!1
return u},
gdJ:function(){var u=this.f
if(typeof u!=="number")return u.K()
return u<this.r},
gdH:function(){return this.r<this.a.length},
gcU:function(){return this.b===4&&C.b.ad(this.a,"http")},
gcV:function(){return this.b===5&&C.b.ad(this.a,"https")},
gbr:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcU())q=t.x="http"
else if(t.gcV()){t.x="https"
q="https"}else if(q===4&&C.b.ad(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.ad(t.a,r)){t.x=r
q=r}else{q=C.b.q(t.a,0,q)
t.x=q}return q},
ge2:function(){var u=this.c,t=this.b+3
return u>t?C.b.q(this.a,t,u-1):""},
gc5:function(a){var u=this.c
return u>0?C.b.q(this.a,u,this.d):""},
gbm:function(a){var u,t=this
if(t.gdI()){u=t.d
if(typeof u!=="number")return u.C()
return P.f4(C.b.q(t.a,u+1,t.e),null,null)}if(t.gcU())return 80
if(t.gcV())return 443
return 0},
gdT:function(a){return C.b.q(this.a,this.e,this.f)},
gcf:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.K()
return u<t?C.b.q(this.a,u+1,t):""},
gdF:function(){var u=this.r,t=this.a
return u<t.length?C.b.aj(t,u+1):""},
gcg:function(){var u=this,t=u.f
if(typeof t!=="number")return t.K()
if(t>=u.r)return C.U
t=P.i
return new P.e3(P.lv(u.gcf(u)),[t,t])},
dW:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iy",[P.i,null],"$ay")
u=k.gbr()
t=u==="file"
s=k.c
r=s>0?C.b.q(k.a,k.b+3,s):""
q=k.gdI()?k.gbm(k):j
s=k.c
if(s>0)p=C.b.q(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.q(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.ad(o,"/"))o="/"+o
m=P.kC(j,0,0,b)
n=k.r
l=n<s.length?C.b.aj(s,n+1):j
return new P.c8(u,r,p,q,o,m,l)},
gE:function(a){var u=this.y
return u==null?this.y=C.b.gE(this.a):u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ikw&&this.a===b.i(0)},
i:function(a){return this.a},
$ikw:1}
P.ja.prototype={}
W.q.prototype={}
W.f5.prototype={
gl:function(a){return a.length}}
W.f7.prototype={
i:function(a){return String(a)}}
W.f8.prototype={
i:function(a){return String(a)}}
W.bO.prototype={$ibO:1}
W.bQ.prototype={
e3:function(a,b,c){var u=a.getContext(b,P.ol(c))
return u},
$ibQ:1}
W.bo.prototype={
gl:function(a){return a.length}}
W.co.prototype={$ico:1}
W.fs.prototype={
gl:function(a){return a.length}}
W.Q.prototype={$iQ:1}
W.cp.prototype={
gl:function(a){return a.length}}
W.ft.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fu.prototype={
gl:function(a){return a.length}}
W.fv.prototype={
gl:function(a){return a.length}}
W.fx.prototype={
gl:function(a){return a.length}}
W.dh.prototype={$idh:1}
W.fy.prototype={
i:function(a){return String(a)}}
W.di.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iaj",[P.aa],"$aaj")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.aj,P.aa]]},
$av:function(){return[[P.aj,P.aa]]},
$ih:1,
$ah:function(){return[[P.aj,P.aa]]},
$ib:1,
$ab:function(){return[[P.aj,P.aa]]},
$aE:function(){return[[P.aj,P.aa]]}}
W.dj.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gah(a))+" x "+H.k(this.gae(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iaj)return!1
return a.left===u.gbk(b)&&a.top===u.gbo(b)&&this.gah(a)===u.gah(b)&&this.gae(a)===u.gae(b)},
gE:function(a){return W.lD(C.e.gE(a.left),C.e.gE(a.top),C.e.gE(this.gah(a)),C.e.gE(this.gae(a)))},
gdh:function(a){return a.bottom},
gae:function(a){return a.height},
gbk:function(a){return a.left},
gck:function(a){return a.right},
gbo:function(a){return a.top},
gah:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.aa]}}
W.fz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.U(c)
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.i]},
$av:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aE:function(){return[P.i]}}
W.fA.prototype={
gl:function(a){return a.length}}
W.j8.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.f(u[b],"$ia_")},
k:function(a,b,c){var u
H.f(c,"$ia_")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.iN(this)
return new J.aq(u,u.length,[H.t(u,0)])},
$av:function(){return[W.a_]},
$ah:function(){return[W.a_]},
$ab:function(){return[W.a_]}}
W.a_.prototype={
gbW:function(a){return new W.j8(a,a.children)},
gdk:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.K()
if(s<0)s=-s*0
if(typeof r!=="number")return r.K()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$ia_:1}
W.n.prototype={$in:1}
W.j.prototype={
hK:function(a,b,c,d){H.o(c,{func:1,args:[W.n]})
if(c!=null)this.er(a,b,c,!1)},
er:function(a,b,c,d){return a.addEventListener(b,H.cc(H.o(c,{func:1,args:[W.n]}),1),!1)},
$ij:1}
W.az.prototype={$iaz:1}
W.cq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaz")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.az]},
$av:function(){return[W.az]},
$ih:1,
$ah:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$icq:1,
$aE:function(){return[W.az]}}
W.fJ.prototype={
gl:function(a){return a.length}}
W.fN.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.fQ.prototype={
gl:function(a){return a.length}}
W.bV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$av:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ibV:1,
$aE:function(){return[W.H]}}
W.ct.prototype={$ict:1}
W.cu.prototype={$icu:1}
W.b4.prototype={$ib4:1}
W.h3.prototype={
i:function(a){return String(a)}}
W.hn.prototype={
gl:function(a){return a.length}}
W.cx.prototype={$icx:1}
W.ho.prototype={
j:function(a,b){return P.bk(a.get(H.U(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
gap:function(a){var u=H.e([],[P.i])
this.F(a,new W.hp(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.G("Not supported"))},
$aag:function(){return[P.i,null]},
$iy:1,
$ay:function(){return[P.i,null]}}
W.hp.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hq.prototype={
j:function(a,b){return P.bk(a.get(H.U(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
gap:function(a){var u=H.e([],[P.i])
this.F(a,new W.hr(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.G("Not supported"))},
$aag:function(){return[P.i,null]},
$iy:1,
$ay:function(){return[P.i,null]}}
W.hr.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aK.prototype={$iaK:1}
W.hs.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaK")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aK]},
$av:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aE:function(){return[W.aK]}}
W.ad.prototype={$iad:1}
W.j7.prototype={
k:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dn(u,u.length,[H.cf(C.V,u,"E",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$av:function(){return[W.H]},
$ah:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
iF:function(a,b){var u,t
try{u=a.parentNode
J.mt(u,b,a)}catch(t){H.aF(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e8(a):u},
he:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$av:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aE:function(){return[W.H]}}
W.aL.prototype={$iaL:1,
gl:function(a){return a.length}}
W.hF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaL")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aL]},
$av:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aE:function(){return[W.aL]}}
W.hO.prototype={
j:function(a,b){return P.bk(a.get(H.U(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
gap:function(a){var u=H.e([],[P.i])
this.F(a,new W.hP(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.G("Not supported"))},
$aag:function(){return[P.i,null]},
$iy:1,
$ay:function(){return[P.i,null]}}
W.hP.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hR.prototype={
gl:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.i_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aN]},
$av:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aE:function(){return[W.aN]}}
W.aO.prototype={$iaO:1}
W.i0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaO")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aO]},
$av:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aE:function(){return[W.aO]}}
W.aP.prototype={$iaP:1,
gl:function(a){return a.length}}
W.i4.prototype={
j:function(a,b){return a.getItem(H.U(b))},
k:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gap:function(a){var u=H.e([],[P.i])
this.F(a,new W.i5(u))
return u},
gl:function(a){return a.length},
$aag:function(){return[P.i,P.i]},
$iy:1,
$ay:function(){return[P.i,P.i]}}
W.i5.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:14}
W.aA.prototype={$iaA:1}
W.bj.prototype={$ibj:1}
W.aR.prototype={$iaR:1}
W.aB.prototype={$iaB:1}
W.ic.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaB")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aB]},
$av:function(){return[W.aB]},
$ih:1,
$ah:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$aE:function(){return[W.aB]}}
W.id.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aR]},
$av:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aE:function(){return[W.aR]}}
W.ih.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.aU.prototype={$iaU:1}
W.ik.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aT]},
$av:function(){return[W.aT]},
$ih:1,
$ah:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aE:function(){return[W.aT]}}
W.il.prototype={
gl:function(a){return a.length}}
W.bF.prototype={}
W.iH.prototype={
i:function(a){return String(a)}}
W.j_.prototype={
gl:function(a){return a.length}}
W.bc.prototype={
ghZ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.G("deltaY is not supported"))},
ghY:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.G("deltaX is not supported"))},
$ibc:1}
W.cR.prototype={
hf:function(a,b){return a.requestAnimationFrame(H.cc(H.o(b,{func:1,ret:-1,args:[P.aa]}),1))},
eK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j9.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iQ")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.Q]},
$av:function(){return[W.Q]},
$ih:1,
$ah:function(){return[W.Q]},
$ib:1,
$ab:function(){return[W.Q]},
$aE:function(){return[W.Q]}}
W.ed.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iaj)return!1
return a.left===u.gbk(b)&&a.top===u.gbo(b)&&a.width===u.gah(b)&&a.height===u.gae(b)},
gE:function(a){return W.lD(C.e.gE(a.left),C.e.gE(a.top),C.e.gE(a.width),C.e.gE(a.height))},
gae:function(a){return a.height},
gah:function(a){return a.width}}
W.jn.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaI")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aI]},
$av:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aE:function(){return[W.aI]}}
W.ev.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$av:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aE:function(){return[W.H]}}
W.jy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aP]},
$av:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aE:function(){return[W.aP]}}
W.jC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaA")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aA]},
$av:function(){return[W.aA]},
$ih:1,
$ah:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$aE:function(){return[W.aA]}}
W.jb.prototype={}
W.kz.prototype={}
W.jc.prototype={}
W.jd.prototype={
$1:function(a){return this.a.$1(H.f(a,"$in"))},
$S:32}
W.E.prototype={
gV:function(a){return new W.dn(a,this.gl(a),[H.cf(this,a,"E",0)])}}
W.dn.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scT(J.d7(u.a,t))
u.c=t
return!0}u.scT(null)
u.c=s
return!1},
gI:function(a){return this.d},
scT:function(a){this.d=H.B(a,H.t(this,0))},
$ib2:1}
W.ec.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eI.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
P.jz.prototype={
dE:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cq:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iau)return new Date(a.a)
if(!!u.$in6)throw H.d(P.iz("structured clone of RegExp"))
if(!!u.$iaz)return a
if(!!u.$ibO)return a
if(!!u.$icq)return a
if(!!u.$ict)return a
if(!!u.$icz||!!u.$ibA||!!u.$icx)return a
if(!!u.$iy){t=q.dE(a)
s=q.b
if(t>=s.length)return H.c(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.F(a,new P.jB(p,q))
return p.a}if(!!u.$ib){t=q.dE(a)
p=q.b
if(t>=p.length)return H.c(p,t)
r=p[t]
if(r!=null)return r
return q.hW(a,t)}throw H.d(P.iz("structured clone of other type"))},
hW:function(a,b){var u,t=J.d4(a),s=t.gl(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cq(t.j(a,u)))
return r}}
P.jB.prototype={
$2:function(a,b){this.a.a[a]=this.b.cq(b)},
$S:7}
P.jX.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.jA.prototype={}
P.fK.prototype={
gbd:function(){var u=this.b,t=H.ay(u,"v",0),s=W.a_
return new H.h8(new H.j0(u,H.o(new P.fL(),{func:1,ret:P.a3,args:[t]}),[t]),H.o(new P.fM(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$ia_")
u=this.gbd()
J.mx(u.b.$1(J.ki(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aG(this.gbd().a)},
j:function(a,b){var u=this.gbd()
return u.b.$1(J.ki(u.a,b))},
gV:function(a){var u=P.l8(this.gbd(),!1,W.a_)
return new J.aq(u,u.length,[H.t(u,0)])},
$av:function(){return[W.a_]},
$ah:function(){return[W.a_]},
$ab:function(){return[W.a_]}}
P.fL.prototype={
$1:function(a){return!!J.T(H.f(a,"$iH")).$ia_},
$S:51}
P.fM.prototype={
$1:function(a){return H.r(H.f(a,"$iH"),"$ia_")},
$S:30}
P.jr.prototype={
gck:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.C(t)
return H.B(u+t,H.t(this,0))},
gdh:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.C(t)
return H.B(u+t,H.t(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.k(u.a)+", "+H.k(u.b)+") "+H.k(u.c)+" x "+H.k(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iaj){t=p.a
if(t==u.gbk(b)){s=p.b
if(s==u.gbo(b)){r=p.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.C(r)
q=H.t(p,0)
if(H.B(t+r,q)===u.gck(b)){t=p.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.C(t)
u=H.B(s+t,q)===u.gdh(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u,t=this,s=t.a,r=J.d8(s),q=t.b,p=J.d8(q),o=t.c
if(typeof s!=="number")return s.C()
if(typeof o!=="number")return H.C(o)
u=H.t(t,0)
o=C.d.gE(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.C()
if(typeof s!=="number")return H.C(s)
u=C.d.gE(H.B(q+s,u))
return P.nw(P.jp(P.jp(P.jp(P.jp(0,r),p),o),u))}}
P.aj.prototype={
gbk:function(a){return this.a},
gbo:function(a){return this.b},
gah:function(a){return this.c},
gae:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.fX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib5")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.b5]},
$ih:1,
$ah:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aE:function(){return[P.b5]}}
P.b7.prototype={$ib7:1}
P.hB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib7")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.b7]},
$ih:1,
$ah:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aE:function(){return[P.b7]}}
P.hH.prototype={
gl:function(a){return a.length}}
P.ia.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.U(c)
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aE:function(){return[P.i]}}
P.p.prototype={
gbW:function(a){return new P.fK(a,new W.j7(a))}}
P.b9.prototype={$ib9:1}
P.im.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib9")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.b9]},
$ih:1,
$ah:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aE:function(){return[P.b9]}}
P.en.prototype={}
P.eo.prototype={}
P.ey.prototype={}
P.ez.prototype={}
P.eJ.prototype={}
P.eK.prototype={}
P.eQ.prototype={}
P.eR.prototype={}
P.M.prototype={$ih:1,
$ah:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$ini:1}
P.fc.prototype={
gl:function(a){return a.length}}
P.fd.prototype={
j:function(a,b){return P.bk(a.get(H.U(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
gap:function(a){var u=H.e([],[P.i])
this.F(a,new P.fe(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.G("Not supported"))},
$aag:function(){return[P.i,null]},
$iy:1,
$ay:function(){return[P.i,null]}}
P.fe.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.ff.prototype={
gl:function(a){return a.length}}
P.bN.prototype={}
P.hC.prototype={
gl:function(a){return a.length}}
P.eb.prototype={}
P.da.prototype={$ida:1}
P.dp.prototype={$idp:1}
P.dK.prototype={$idK:1}
P.dO.prototype={$idO:1}
P.c0.prototype={
iK:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
a3:function(a,b,c){return a.uniform1f(b,c)},
aO:function(a,b,c){return a.uniform1i(b,c)},
bq:function(a,b,c,d){return a.uniform2f(b,c,d)},
X:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cn:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
e0:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
co:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic0:1}
P.dP.prototype={$idP:1}
P.dU.prototype={$idU:1}
P.e1.prototype={$ie1:1}
P.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return P.bk(a.item(b))},
k:function(a,b,c){H.f(c,"$iy")
throw H.d(P.G("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[[P.y,,,]]},
$ih:1,
$ah:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aE:function(){return[[P.y,,,]]}}
P.eF.prototype={}
P.eG.prototype={}
O.V.prototype={
bb:function(a){var u=this
u.seZ(H.e([],[a]))
u.sd_(null)
u.scX(null)
u.sd0(null)},
cs:function(a,b,c){var u=this,t=H.ay(u,"V",0)
H.o(b,{func:1,ret:P.a3,args:[[P.h,t]]})
t={func:1,ret:-1,args:[P.l,[P.h,t]]}
H.o(a,t)
H.o(c,t)
u.sd_(b)
u.scX(a)
u.sd0(c)},
aD:function(a,b){return this.cs(a,null,b)},
bK:function(a){var u
H.m(a,"$ih",[H.ay(this,"V",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cA:function(a,b){var u
H.m(b,"$ih",[H.ay(this,"V",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.aq(u,u.length,[H.t(u,0)])},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ay(s,"V",0)
H.B(b,r)
r=[r]
if(H.D(s.bK(H.e([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cA(t,H.e([b],r))}},
bR:function(a,b){var u,t,s=this
H.m(b,"$ih",[H.ay(s,"V",0)],"$ah")
if(H.D(s.bK(b))){u=s.a
t=u.length
C.a.bR(u,b)
s.cA(t,b)}},
seZ:function(a){this.a=H.m(a,"$ib",[H.ay(this,"V",0)],"$ab")},
sd_:function(a){this.b=H.o(a,{func:1,ret:P.a3,args:[[P.h,H.ay(this,"V",0)]]})},
scX:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.l,[P.h,H.ay(this,"V",0)]]})},
sd0:function(a){H.o(a,{func:1,ret:-1,args:[P.l,[P.h,H.ay(this,"V",0)]]})},
$ih:1}
O.cw.prototype={
gl:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.O():u},
aE:function(){var u=this.b
if(u!=null)u.B(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gaA(u)
else return V.bz()},
bn:function(a){var u=this.a
if(a==null)C.a.h(u,V.bz())
else C.a.h(u,a)
this.aE()},
b5:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}},
sbA:function(a){this.a=H.m(a,"$ib",[V.ah],"$ab")}}
E.fj.prototype={}
E.ap.prototype={
sbs:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().N(0,s.gdR())
u=s.c
if(u!=null)u.gm().h(0,s.gdR())
t=new D.F("shape",r,s.c,[F.dQ])
t.b=!0
s.bl(t)}},
ak:function(a,b){var u
for(u=this.y.a,u=new J.aq(u,u.length,[H.t(u,0)]);u.v();)u.d.ak(0,b)},
ab:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga2(s))
s.aE()
a.ce(t.f)
s=a.dy
u=(s&&C.a).gaA(s)
if(u!=null&&t.d!=null)u.dV(a,t)
for(s=t.y.a,s=new J.aq(s,s.length,[H.t(s,0)]);s.v();)s.d.ab(a)
a.cd()
a.dx.b5()},
bl:function(a){var u=this.z
if(u!=null)u.B(a)},
aa:function(){return this.bl(null)},
dS:function(a){H.f(a,"$iw")
this.e=null
this.bl(a)},
it:function(){return this.dS(null)},
dQ:function(a){this.bl(H.f(a,"$iw"))},
iq:function(){return this.dQ(null)},
ip:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ih",[E.ap],"$ah")
for(u=b.length,t=this.gdP(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.sa5(null)
o.saH(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sa5(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.aa()},
is:function(a,b){var u,t
H.m(b,"$ih",[E.ap],"$ah")
for(u=b.gV(b),t=this.gdP();u.v();)u.gI(u).gm().N(0,t)
this.aa()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seh:function(a,b){this.y=H.m(b,"$iV",[E.ap],"$aV")},
$ibX:1}
E.hK.prototype={
ed:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.au(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cw()
t=[V.ah]
u.sbA(H.e([],t))
u.b=null
u.gm().h(0,new E.hL(s))
s.cy=u
u=new O.cw()
u.sbA(H.e([],t))
u.b=null
u.gm().h(0,new E.hM(s))
s.db=u
u=new O.cw()
u.sbA(H.e([],t))
u.b=null
u.gm().h(0,new E.hN(s))
s.dx=u
s.shx(H.e([],[O.bE]))
u=s.dy;(u&&C.a).h(u,null)
s.shq(new H.Z([P.i,A.cH]))},
giC:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga2(s)
u=t.db
u=t.z=s.p(0,u.ga2(u))
s=u}return s},
ce:function(a){var u=this.dy,t=a==null?(u&&C.a).gaA(u):a;(u&&C.a).h(u,t)},
cd:function(){var u=this.dy
if(u.length>1)u.pop()},
df:function(a){var u=a.b
if(u.length===0)throw H.d(P.x("May not cache a shader with no name."))
if(this.fr.bh(0,u))throw H.d(P.x('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
shx:function(a){this.dy=H.m(a,"$ib",[O.bE],"$ab")},
shq:function(a){this.fr=H.m(a,"$iy",[P.i,A.cH],"$ay")}}
E.hL.prototype={
$1:function(a){var u
H.f(a,"$iw")
u=this.a
u.ch=u.z=null},
$S:12}
E.hM.prototype={
$1:function(a){var u
H.f(a,"$iw")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:12}
E.hN.prototype={
$1:function(a){var u
H.f(a,"$iw")
u=this.a
u.cx=u.ch=null},
$S:12}
E.dY.prototype={
cD:function(a){H.f(a,"$iw")
this.dX()},
cC:function(){return this.cD(null)},
gia:function(){var u,t=this,s=Date.now(),r=C.d.a1(P.l2(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.au(s,!1)
return u/r},
d3:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.C(r)
u=C.e.c4(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.e.c4(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lp(C.q,s.giG())}},
dX:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.ig(this),{func:1,ret:-1,args:[P.aa]})
C.C.eK(u)
C.C.hf(u,W.lR(t,P.aa))}},
iE:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d3()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.au(r,!1)
s.y=P.l2(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aE()
r=s.db
C.a.sl(r.a,0)
r.aE()
r=s.dx
C.a.sl(r.a,0)
r.aE()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ab(p.e)}}catch(q){u=H.aF(q)
t=H.cg(q)
P.kR("Error: "+H.k(u))
P.kR("Stack: "+H.k(t))
throw H.d(u)}}}
E.ig.prototype={
$1:function(a){var u
H.m2(a)
u=this.a
if(u.ch){u.ch=!1
u.iE()}},
$S:28}
Z.e8.prototype={$ioM:1}
Z.db.prototype={
a7:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aF(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.e9.prototype={$ioN:1}
Z.cm.prototype={
az:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a7:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a7(a)},
aN:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ab:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.i],p=H.e([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(p,u[s].i(0))
r=H.e([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aY(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.t(p,", ")+"\nAttrs:   "+C.a.t(r,", ")},
seU:function(a){this.b=H.m(a,"$ib",[Z.bW],"$ab")},
$ioU:1}
Z.bW.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.k(H.cF(this.c))+"'")+"]"}}
Z.bG.prototype={
gct:function(a){var u=this.a,t=(u&$.aX().a)!==0?3:0
if((u&$.bn().a)!==0)t+=3
if((u&$.bm().a)!==0)t+=3
if((u&$.bK().a)!==0)t+=2
if((u&$.bL().a)!==0)t+=3
if((u&$.d5().a)!==0)t+=3
if((u&$.d6().a)!==0)t+=4
if((u&$.cj().a)!==0)++t
return(u&$.bl().a)!==0?t+4:t},
hN:function(a){var u,t=$.aX(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0)if(u===a)return t
return $.mo()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bG))return!1
return this.a===b.a},
i:function(a){var u=H.e([],[P.i]),t=this.a
if((t&$.aX().a)!==0)C.a.h(u,"Pos")
if((t&$.bn().a)!==0)C.a.h(u,"Norm")
if((t&$.bm().a)!==0)C.a.h(u,"Binm")
if((t&$.bK().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bL().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d5().a)!==0)C.a.h(u,"Clr3")
if((t&$.d6().a)!==0)C.a.h(u,"Clr4")
if((t&$.cj().a)!==0)C.a.h(u,"Weight")
if((t&$.bl().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.t(u,"|")}}
D.fm.prototype={}
D.bt.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.o(b,u)
if(this.a==null)this.sa5(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.w]})
u=s.a
u=u==null?null:C.a.ao(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ao(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.w()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.F(P.l8(u,!0,{func:1,ret:-1,args:[D.w]}),new D.fG(q))
u=r.b
if(u!=null){r.saH(H.e([],[{func:1,ret:-1,args:[D.w]}]))
C.a.F(u,new D.fH(q))}return!0},
ds:function(){return this.B(null)},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}},
sa5:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.w]}],"$ab")},
saH:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.w]}],"$ab")}}
D.fG.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.fH.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.w.prototype={}
D.bu.prototype={}
D.bv.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.dc.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dc))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.du.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fW.prototype={
iy:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iu:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
sh6:function(a){this.d=H.m(a,"$ilj",[P.l],"$alj")}}
X.dx.prototype={}
X.h4.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gaK()
r=new X.bg(a,V.bi(),q.x,t,s)
r.b=!0
q.z=new P.au(p,!1)
q.x=s
return r},
cc:function(a,b){this.r=a.a
return!1},
b4:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e4()
if(typeof u!=="number")return u.ai()
this.r=(u&~t)>>>0
return!1},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aT(a,b))
return!0},
iz:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaK()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.cy(new V.R(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
fD:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dx(c,r.a.gaK(),b)
s.b=!0
t.B(s)
r.y=new P.au(u,!1)
r.x=V.bi()}}
X.av.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.av))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.bg.prototype={}
X.ht.prototype={
by:function(a,b,c){var u=this,t=new P.au(Date.now(),!1),s=u.a.gaK(),r=new X.bg(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cc:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.by(a,b,!0))
return!0},
b4:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e4()
if(typeof t!=="number")return t.ai()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.by(a,b,!0))
return!0},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.by(a,b,!1))
return!0},
iA:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaK()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.cy(new V.R(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gdr:function(){var u=this.b
return u==null?this.b=D.O():u},
gcp:function(){var u=this.c
return u==null?this.c=D.O():u},
gdO:function(){var u=this.d
return u==null?this.d=D.O():u}}
X.cy.prototype={}
X.hG.prototype={}
X.e_.prototype={}
X.ij.prototype={
aT:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a7],"$ab")
u=new P.au(Date.now(),!1)
t=a.length>0?a[0]:V.bi()
s=q.a.gaK()
r=new X.e_(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ix:function(a){var u
H.m(a,"$ib",[V.a7],"$ab")
u=this.b
if(u==null)return!1
u.B(this.aT(a,!0))
return!0},
iv:function(a){var u
H.m(a,"$ib",[V.a7],"$ab")
u=this.c
if(u==null)return!1
u.B(this.aT(a,!0))
return!0},
iw:function(a){var u
H.m(a,"$ib",[V.a7],"$ab")
u=this.d
if(u==null)return!1
u.B(this.aT(a,!1))
return!0}}
X.e4.prototype={
gaK:function(){var u=this.a,t=C.o.gdk(u).c
t.toString
u=C.o.gdk(u).d
u.toString
return V.dM(0,0,t,u)},
cO:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.du(u,new X.av(t,a.altKey,a.shiftKey))},
aI:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
bP:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
aw:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.a7(s-q,r-u)},
aU:function(a){return new V.R(a.movementX,a.movementY)},
bM:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.e([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=C.e.Z(r.pageX)
C.e.Z(r.pageY)
p=o.left
C.e.Z(r.pageX)
C.a.h(n,new V.a7(q-p,C.e.Z(r.pageY)-o.top))}return n},
at:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dc(u,new X.av(t,a.altKey,a.shiftKey))},
bB:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fv:function(a){this.f=!0},
fe:function(a){this.f=!1},
fk:function(a){H.f(a,"$iad")
if(H.D(this.f)&&this.bB(a))a.preventDefault()},
fB:function(a){var u
H.f(a,"$ib4")
if(!H.D(this.f))return
u=this.cO(a)
this.b.iy(u)},
fz:function(a){var u
H.f(a,"$ib4")
if(!H.D(this.f))return
u=this.cO(a)
this.b.iu(u)},
fF:function(a){var u,t,s,r,q=this
H.f(a,"$iad")
u=q.a
u.focus()
q.f=!0
q.aI(a)
if(H.D(q.x)){t=q.at(a)
s=q.aU(a)
if(q.d.cc(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.at(a)
r=q.aw(a)
if(q.c.cc(t,r))a.preventDefault()},
fJ:function(a){var u,t,s,r=this
H.f(a,"$iad")
r.aI(a)
u=r.at(a)
if(H.D(r.x)){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aw(a)
if(r.c.b4(u,s))a.preventDefault()},
fo:function(a){var u,t,s,r=this
H.f(a,"$iad")
if(!r.bB(a)){r.aI(a)
u=r.at(a)
if(H.D(r.x)){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aw(a)
if(r.c.b4(u,s))a.preventDefault()}},
fH:function(a){var u,t,s,r=this
H.f(a,"$iad")
r.aI(a)
u=r.at(a)
if(H.D(r.x)){t=r.aU(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aw(a)
if(r.c.b3(u,s))a.preventDefault()},
fm:function(a){var u,t,s,r=this
H.f(a,"$iad")
if(!r.bB(a)){r.aI(a)
u=r.at(a)
if(H.D(r.x)){t=r.aU(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aw(a)
if(r.c.b3(u,s))a.preventDefault()}},
fL:function(a){var u,t,s=this
H.f(a,"$ibc")
s.aI(a)
u=new V.R((a&&C.B).ghY(a),C.B.ghZ(a)).u(0,180)
if(H.D(s.x)){if(s.d.iz(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.aw(a)
if(s.c.iA(u,t))a.preventDefault()},
fN:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.at(s.y)
t=s.aw(s.y)
s.d.fD(u,t,r)}},
h2:function(a){var u,t=this
H.f(a,"$iaU")
t.a.focus()
t.f=!0
t.bP(a)
u=t.bM(a)
if(t.e.ix(u))a.preventDefault()},
fZ:function(a){var u
H.f(a,"$iaU")
this.bP(a)
u=this.bM(a)
if(this.e.iv(u))a.preventDefault()},
h0:function(a){var u
H.f(a,"$iaU")
this.bP(a)
u=this.bM(a)
if(this.e.iw(u))a.preventDefault()},
seM:function(a){this.z=H.m(a,"$ib",[[P.cJ,P.P]],"$ab")}}
D.bq.prototype={
aq:function(a){var u
H.f(a,"$iw")
u=this.r
if(u!=null)u.B(a)},
ej:function(){return this.aq(null)},
$iac:1,
$ibX:1}
D.ac.prototype={$ibX:1}
D.dv.prototype={
aq:function(a){var u=this.x
if(u!=null)u.B(a)},
cZ:function(a){var u
H.f(a,"$iw")
u=this.y
if(u!=null)u.B(a)},
fC:function(){return this.cZ(null)},
fP:function(a){var u,t,s
H.m(a,"$ih",[D.ac],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.eC(s))return!1}return!0},
f8:function(a,b){var u,t,s,r,q,p,o,n=D.ac
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gcY(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=H.f(b[q],"$iac")
if(p instanceof D.bq)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bt()
o.sa5(null)
o.saH(null)
o.c=null
o.d=0
p.r=o}H.o(t,s)
if(o.a==null)o.sa5(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bu([n])
n.b=!0
this.aq(n)},
fT:function(a,b){var u,t,s,r=D.ac
H.m(b,"$ih",[r],"$ah")
for(u=b.gV(b),t=this.gcY();u.v();){s=u.gI(u)
C.a.N(this.e,s)
s.gm().N(0,t)}r=new D.bv([r])
r.b=!0
this.aq(r)},
eC:function(a){var u=C.a.ao(this.e,a)
return u},
seJ:function(a){this.e=H.m(a,"$ib",[D.bq],"$ab")},
sh3:function(a){this.f=H.m(a,"$ib",[D.dI],"$ab")},
sht:function(a){this.r=H.m(a,"$ib",[D.dS],"$ab")},
$ah:function(){return[D.ac]},
$aV:function(){return[D.ac]}}
D.dI.prototype={$iac:1,$ibX:1}
D.dS.prototype={$iac:1,$ibX:1}
V.a4.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.a5.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.fF.prototype={}
V.dC.prototype={
ac:function(a,b){var u=this,t=H.e([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dC))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.ce(H.e([q.a,q.d,q.r],p),3,0),n=V.ce(H.e([q.b,q.e,q.x],p),3,0),m=V.ce(H.e([q.c,q.f,q.y],p),3,0)
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
V.ah.prototype={
ac:function(a,b){var u=this,t=H.e([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
dM:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.bz()
u=1/b1
t=-n
s=-a0
return V.aJ((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aJ(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bp:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cm:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a8(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ah))return!1
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
i:function(a){return this.R()},
J:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.ce(H.e([p.a,p.e,p.y,p.cx],o),3,0),m=V.ce(H.e([p.b,p.f,p.z,p.cy],o),3,0),l=V.ce(H.e([p.c,p.r,p.Q,p.db],o),3,0),k=V.ce(H.e([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.J("")}}
V.a7.prototype={
H:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.a8.prototype={
C:function(a,b){return new V.a8(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a,b){return new V.a8(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.a8(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.bB.prototype={
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
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.bD.prototype={
ga9:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bD))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.R.prototype={
c8:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.C(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.C(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.R(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.lw
return u==null?$.lw=new V.R(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.R(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.L.prototype={
c8:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ay:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.L(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.K().a)return V.cQ()
return new V.L(this.a/b,this.b/b,this.c/b)},
dN:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
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
U.fo.prototype={
bu:function(a){var u=V.oL(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.O():u},
M:function(a){var u=this.y
if(u!=null)u.B(a)},
scr:function(a,b){},
sc9:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bu(u)}s=new D.F("maximumLocation",s,t.b,[P.A])
s.b=!0
t.M(s)}},
scb:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bu(u)}s=new D.F("minimumLocation",s,t.c,[P.A])
s.b=!0
t.M(s)}},
sa8:function(a,b){var u,t=this
b=t.bu(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.F("location",u,b,[P.A])
u.b=!0
t.M(u)}},
sca:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.F("maximumVelocity",r,a,[P.A])
r.b=!0
s.M(r)}},
sT:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.F("velocity",t,a,[P.A])
t.b=!0
u.M(t)}},
sbY:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.F("dampening",u,a,[P.A])
u.b=!0
this.M(u)}},
ak:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa8(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sT(u)}}}
U.de.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.O():u},
aP:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.de))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.cs.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.O():u},
M:function(a){var u
H.f(a,"$iw")
u=this.e
if(u!=null)u.B(a)},
a6:function(){return this.M(null)},
f6:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gaG(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.o(t,s)
if(o.a==null)o.sa5(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bu([n])
n.b=!0
this.M(n)},
fR:function(a,b){var u,t,s=U.ai
H.m(b,"$ih",[s],"$ah")
for(u=b.gV(b),t=this.gaG();u.v();)u.gI(u).gm().N(0,t)
s=new D.bv([s])
s.b=!0
this.M(s)},
aP:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.K()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aq(r,r.length,[H.t(r,0)]),u=null;r.v();){q=r.d
if(q!=null){t=q.aP(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.bz():u
r=s.e
if(r!=null)r.aC(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cs))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.N(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.ai]},
$aV:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.e5.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.O():u},
M:function(a){var u
H.f(a,"$iw")
u=this.cy
if(u!=null)u.B(a)},
a6:function(){return this.M(null)},
aV:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdr().h(0,u.gbC())
u.a.c.gdO().h(0,u.gbE())
u.a.c.gcp().h(0,u.gbG())
return!0},
bD:function(a){var u=this
H.f(a,"$iw")
if(!J.N(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bF:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iw"),"$ibg")
if(!H.D(n.y))return
if(H.D(n.x)){u=a.d.H(0,a.y)
u=new V.R(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.D(n.d)){u=a.c
t=a.d.H(0,a.y)
u=new V.R(t.a,t.b).p(0,2).u(0,u.ga9())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.R(s.a,s.b).p(0,2).u(0,u.ga9())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sa8(0,-q*p+o)
n.b.sT(0)
t=t.H(0,a.z)
n.Q=new V.R(t.a,t.b).p(0,2).u(0,u.ga9())}n.a6()},
bH:function(a){var u,t,s,r=this
H.f(a,"$iw")
if(!H.D(r.y))return
r.y=!1
if(H.D(r.x))return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sT(t*10*s)
r.a6()}},
aP:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.K()
if(q<p){r.ch=p
u=b.y
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aJ(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iai:1}
U.e6.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.O():u},
M:function(a){var u
H.f(a,"$iw")
u=this.fx
if(u!=null)u.B(a)},
a6:function(){return this.M(null)},
aV:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdr().h(0,s.gbC())
s.a.c.gdO().h(0,s.gbE())
s.a.c.gcp().h(0,s.gbG())
u=s.a.d
t=u.f
u=t==null?u.f=D.O():t
u.h(0,s.gf_())
u=s.a.d
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.gf1())
u=s.a.e
t=u.b
u=t==null?u.b=D.O():t
u.h(0,s.ghD())
u=s.a.e
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.ghB())
u=s.a.e
t=u.c
u=t==null?u.c=D.O():t
u.h(0,s.ghz())
return!0},
an:function(a){var u=a.a,t=a.b
if(H.D(this.f)){if(typeof u!=="number")return u.P()
u=-u}if(H.D(this.r)){if(typeof t!=="number")return t.P()
t=-t}return new V.R(u,t)},
bD:function(a){var u=this
a=H.r(H.f(a,"$iw"),"$ibg")
if(!J.N(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bF:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iw"),"$ibg")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.H(0,a.y)
u=new V.R(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.an(new V.R(t.a,t.b).p(0,2).u(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.an(new V.R(s.a,s.b).p(0,2).u(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa8(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.H(0,a.z)
n.dx=n.an(new V.R(t.a,t.b).p(0,2).u(0,u.ga9()))}n.a6()},
bH:function(a){var u,t,s,r=this
H.f(a,"$iw")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sT(-t*10*u)
r.a6()}},
f0:function(a){var u=this
if(H.r(H.f(a,"$iw"),"$idx").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f2:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iw"),"$ibg")
if(!J.N(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.an(new V.R(s.a,s.b).p(0,2).u(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa8(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.H(0,a.z)
n.dx=n.an(new V.R(t.a,t.b).p(0,2).u(0,u.ga9()))
n.a6()},
hE:function(a){var u=this
H.f(a,"$iw")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hC:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iw"),"$ie_")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.H(0,a.y)
u=new V.R(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.an(new V.R(t.a,t.b).p(0,2).u(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.an(new V.R(s.a,s.b).p(0,2).u(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa8(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.H(0,a.z)
n.dx=n.an(new V.R(t.a,t.b).p(0,2).u(0,u.ga9()))}n.a6()},
hA:function(a){var u,t,s,r=this
H.f(a,"$iw")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sT(-t*10*u)
r.a6()}},
aP:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.K()
if(q<p){r.dy=p
u=b.y
r.c.ak(0,u)
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aJ(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.p(0,V.aJ(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iai:1}
U.e7.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.O():u},
M:function(a){var u=this.r
if(u!=null)u.B(a)},
aV:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.O():t
t=r.gf3()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.O():s).h(0,t)
return!0},
f4:function(a){var u,t,s,r,q=this
H.f(a,"$iw")
if(!J.N(q.b,q.a.b.c))return
H.r(a,"$icy")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.F("zoom",u,r,[P.A])
u.b=!0
q.M(u)}},
aP:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aJ(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iai:1}
M.dd.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.O():u},
W:function(a){var u
H.f(a,"$iw")
u=this.r
if(u!=null)u.B(a)},
aR:function(){return this.W(null)},
fV:function(a,b){var u,t,s,r,q,p,o,n=M.aw
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.o(t,s)
if(o.a==null)o.sa5(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bu([n])
n.b=!0
this.W(n)},
fX:function(a,b){var u,t,s=M.aw
H.m(b,"$ih",[s],"$ah")
for(u=b.gV(b),t=this.gY();u.v();)u.gI(u).gm().N(0,t)
s=new D.bv([s])
s.b=!0
this.W(s)},
ab:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.aq(u,u.length,[H.t(u,0)]);u.v();){t=u.d
if(t!=null)t.ab(a)}s.f=!1},
$ah:function(){return[M.aw]},
$aV:function(){return[M.aw]},
$iaw:1}
M.df.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.O():u},
W:function(a){var u
H.f(a,"$iw")
u=this.r
if(u!=null)u.B(a)},
aR:function(){return this.W(null)},
sb6:function(a,b){var u,t,s=this
if(b==null)b=X.km(null)
u=s.c
if(u!==b){if(u!=null)u.gm().N(0,s.gY())
t=s.c
s.c=b
b.gm().h(0,s.gY())
u=new D.F("target",t,s.c,[X.cL])
u.b=!0
s.W(u)}},
sb7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().N(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gY())
s=new D.F("technique",u,t.d,[O.bE])
s.b=!0
t.W(s)}},
ab:function(a){var u,t,s=this
a.ce(s.d)
s.c.a7(a)
u=s.b
u.toString
a.cy.bn(V.bz())
t=V.bz()
u.a
a.db.bn(t)
s.e.ak(0,a)
s.e.ab(a)
s.b.toString
a.cy.b5()
a.db.b5()
s.c.toString
a.cd()},
$iaw:1}
M.dk.prototype={
W:function(a){var u
H.f(a,"$iw")
u=this.y
if(u!=null)u.B(a)},
aR:function(){return this.W(null)},
fg:function(a,b){var u,t,s,r,q,p,o,n=E.ap
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.sa5(null)
o.saH(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sa5(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bu([n])
n.b=!0
this.W(n)},
fi:function(a,b){var u,t,s=E.ap
H.m(b,"$ih",[s],"$ah")
for(u=b.gV(b),t=this.gY();u.v();)u.gI(u).gm().N(0,t)
s=new D.bv([s])
s.b=!0
this.W(s)},
sdj:function(a){var u,t,s=this
if(a==null)a=X.lc(null)
u=s.b
if(u!==a){if(u!=null)u.gm().N(0,s.gY())
t=s.b
s.b=a
a.gm().h(0,s.gY())
u=new D.F("camera",t,s.b,[X.bP])
u.b=!0
s.W(u)}},
sb6:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().N(0,t.gY())
u=t.c
t.c=b
b.gm().h(0,t.gY())
s=new D.F("target",u,t.c,[X.cL])
s.b=!0
t.W(s)}},
sb7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().N(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gY())
s=new D.F("technique",u,t.d,[O.bE])
s.b=!0
t.W(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.O():u},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
a.ce(j.d)
j.c.a7(a)
u=j.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aJ(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bn(m)
t=$.ld
if(t==null){t=V.lf()
s=V.ky()
r=$.lx
t=V.l9(t,s,r==null?$.lx=new V.L(0,0,-1):r)
$.ld=t
l=t}else l=t
t=u.b
if(t!=null){k=t.aP(0,a,u)
if(k!=null)l=k.p(0,l)}a.db.bn(l)
u=j.d
if(u!=null)u.ak(0,a)
for(u=j.e.a,u=new J.aq(u,u.length,[H.t(u,0)]);u.v();)u.d.ak(0,a)
for(u=j.e.a,u=new J.aq(u,u.length,[H.t(u,0)]);u.v();)u.d.ab(a)
j.b.toString
a.cy.b5()
a.db.b5()
j.c.aN(a)
a.cd()},
seA:function(a,b){this.e=H.m(b,"$iV",[E.ap],"$aV")},
$iaw:1}
M.aw.prototype={}
A.d9.prototype={}
A.fb.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
i3:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dn:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ao.prototype={
gal:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ao))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.dA.prototype={
ec:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.a2("")
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
A.o4(c0,u)
A.o6(c0,u)
A.o5(c0,u)
A.o8(c0,u)
A.o9(c0,u)
A.o7(c0,u)
A.oa(c0,u)
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
b5.dL(0,s.charCodeAt(0)==0?s:s,A.o3(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.r(b5.y.S(0,"invViewMat"),"$iam")
if(t)b5.dy=H.r(b5.y.S(0,"objMat"),"$iam")
if(r)b5.fr=H.r(b5.y.S(0,"viewObjMat"),"$iam")
b5.fy=H.r(b5.y.S(0,"projViewObjMat"),"$iam")
if(c0.ry)b5.k1=H.r(b5.y.S(0,"txt2DMat"),"$icO")
if(c0.x1)b5.k2=H.r(b5.y.S(0,"txtCubeMat"),"$iam")
if(c0.x2)b5.k3=H.r(b5.y.S(0,"colorMat"),"$iam")
b5.sew(H.e([],[A.am]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.S(0,"bendMatCount"),"$ial")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.u(P.x(b7+q+b8));(s&&C.a).h(s,H.r(m,"$iam"))}}if(c0.a.a)b5.r2=H.r(b5.y.S(0,"emissionClr"),"$iX")
if(c0.b.a)b5.x1=H.r(b5.y.S(0,"ambientClr"),"$iX")
if(c0.c.a)b5.y2=H.r(b5.y.S(0,"diffuseClr"),"$iX")
if(c0.d.a)b5.du=H.r(b5.y.S(0,"invDiffuseClr"),"$iX")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dw=H.r(b5.y.S(0,"shininess"),"$iaf")
if(t)b5.dv=H.r(b5.y.S(0,"specularClr"),"$iX")}if(c0.cy){b5.dz=H.r(b5.y.S(0,"envSampler"),"$ic5")
if(c0.r.a)b5.dA=H.r(b5.y.S(0,"reflectClr"),"$iX")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dB=H.r(b5.y.S(0,"refraction"),"$iaf")
if(t)b5.dC=H.r(b5.y.S(0,"refractClr"),"$iX")}}if(c0.y.a)b5.dD=H.r(b5.y.S(0,"alpha"),"$iaf")
t=P.l
s=[t,A.al]
b5.seI(new H.Z(s))
b5.sek(new H.Z([t,[P.b,A.c3]]))
b5.sh4(new H.Z(s))
b5.sh5(new H.Z([t,[P.b,A.c4]]))
b5.shs(new H.Z(s))
b5.sel(new H.Z([t,[P.b,A.c6]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.c3],l=0;l<t.length;t.length===s||(0,H.z)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.k(j)
h=H.e([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ai()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.u(P.x(b7+g+b8))
H.r(m,"$iX")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.u(P.x(b7+g+b8))
H.r(f,"$iX")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.u(P.x(b7+g+b8))
H.r(e,"$iX")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.u(P.x(b7+g+b8))
H.r(m,"$iX")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.u(P.x(b7+g+b8))
H.r(f,"$iX")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.u(P.x(b7+o+b8))
H.r(e,"$ibb")
a=e}else a=b6
C.a.h(h,new A.c3(b,c,d,m,f,a))}b5.c_.k(0,j,h)
q=b5.bZ
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.u(P.x(b7+o+b8))
q.k(0,j,H.f(m,"$ial"))}for(t=c0.Q,s=t.length,r=[A.c4],l=0;l<t.length;t.length===s||(0,H.z)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.k(j)
h=H.e([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.u(P.x(b7+o+b8))
H.r(m,"$iX")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.u(P.x(b7+o+b8))
H.r(f,"$iX")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.u(P.x(b7+o+b8))
H.r(e,"$iX")
if(typeof j!=="number")return j.ai()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.u(P.x(b7+o+b8))
H.r(a0,"$icO")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.u(P.x(b7+o+b8))
H.r(a0,"$ic5")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.u(P.x(b7+o+b8))
H.r(a0,"$ic5")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.u(P.x(b7+o+b8))
H.r(a2,"$ic2")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.u(P.x(b7+o+b8))
H.r(a0,"$iaf")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.u(P.x(b7+o+b8))
H.r(a2,"$iaf")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.u(P.x(b7+o+b8))
H.r(a5,"$iaf")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.c4(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c1.k(0,j,h)
q=b5.c0
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.u(P.x(b7+o+b8))
q.k(0,j,H.f(m,"$ial"))}for(t=c0.ch,s=t.length,r=[A.c6],l=0;l<t.length;t.length===s||(0,H.z)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.k(j)
h=H.e([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.u(P.x(b7+o+b8))
H.r(m,"$iX")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.u(P.x(b7+o+b8))
H.r(f,"$iX")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.u(P.x(b7+o+b8))
H.r(e,"$iX")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.u(P.x(b7+o+b8))
H.r(a0,"$iX")
if(typeof j!=="number")return j.ai()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.u(P.x(b7+o+b8))
H.r(a2,"$iX")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.u(P.x(b7+o+b8))
H.r(a5,"$iX")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.u(P.x(b7+o+b8))
H.r(a9,"$iaf")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.u(P.x(b7+o+b8))
H.r(b0,"$iaf")
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
if(a2==null)H.u(P.x(b7+g+b8))
H.r(a2,"$ic2")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.u(P.x(b7+g+b8))
H.r(a2,"$iaf")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.u(P.x(b7+g+b8))
H.r(a5,"$iaf")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.u(P.x(b7+g+b8))
H.r(a2,"$iaf")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.u(P.x(b7+g+b8))
H.r(a5,"$iaf")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.u(P.x(b7+g+b8))
H.r(a9,"$iaf")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.u(P.x(b7+g+b8))
H.r(a2,"$ibb")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.u(P.x(b7+o+b8))
H.r(a2,"$ibb")
a3=a2}else a3=b6
C.a.h(h,new A.c6(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c3.k(0,j,h)
q=b5.c2
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.u(P.x(b7+o+b8))
q.k(0,j,H.f(m,"$ial"))}}},
hj:function(a,b){},
sew:function(a){this.r1=H.m(a,"$ib",[A.am],"$ab")},
seI:function(a){this.bZ=H.m(a,"$iy",[P.l,A.al],"$ay")},
sek:function(a){this.c_=H.m(a,"$iy",[P.l,[P.b,A.c3]],"$ay")},
sh4:function(a){this.c0=H.m(a,"$iy",[P.l,A.al],"$ay")},
sh5:function(a){this.c1=H.m(a,"$iy",[P.l,[P.b,A.c4]],"$ay")},
shs:function(a){this.c2=H.m(a,"$iy",[P.l,A.al],"$ay")},
sel:function(a){this.c3=H.m(a,"$iy",[P.l,[P.b,A.c6]],"$ay")}}
A.aH.prototype={
i:function(a){return"dirLight"+H.k(this.a)}}
A.aM.prototype={
i:function(a){return"pointLight"+H.k(this.a)}}
A.aQ.prototype={
i:function(a){return"spotLight"+H.k(this.a)}}
A.hc.prototype={
i:function(a){return this.b_}}
A.c3.prototype={}
A.c4.prototype={}
A.c6.prototype={}
A.cH.prototype={
cz:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dL:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cP(b,35633)
r.f=r.cP(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.D(H.lV(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.x("Failed to link shader: "+H.k(s)))}r.hn()
r.hp()},
a7:function(a){a.a.useProgram(this.r)
this.x.i3()},
cP:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.lV(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.x("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
hn:function(){var u,t,s,r=this,q=H.e([],[A.d9]),p=r.a,o=H.a9(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d9(p,t.name,s))}r.x=new A.fb(q)},
hp:function(){var u,t,s,r=this,q=H.e([],[A.e0]),p=r.a,o=H.a9(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hX(t.type,t.size,t.name,s))}r.y=new A.iw(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.al(u,b,c)
else return A.kv(u,this.r,b,a,c)},
eD:function(a,b,c){var u=this.a
if(a===1)return new A.bb(u,b,c)
else return A.kv(u,this.r,b,a,c)},
eE:function(a,b,c){var u=this.a
if(a===1)return new A.c5(u,b,c)
else return A.kv(u,this.r,b,a,c)},
bf:function(a,b){return new P.ei(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hX:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.af(u.a,c,d)
case 35664:return new A.ax(u.a,c,d)
case 35665:return new A.X(u.a,c,d)
case 35666:return new A.c2(u.a,c,d)
case 35667:return new A.it(u.a,c,d)
case 35668:return new A.iu(u.a,c,d)
case 35669:return new A.iv(u.a,c,d)
case 35674:return new A.ix(u.a,c,d)
case 35675:return new A.cO(u.a,c,d)
case 35676:return new A.am(u.a,c,d)
case 35678:return u.eD(b,c,d)
case 35680:return u.eE(b,c,d)
case 35670:throw H.d(u.bf("BOOL",c))
case 35671:throw H.d(u.bf("BOOL_VEC2",c))
case 35672:throw H.d(u.bf("BOOL_VEC3",c))
case 35673:throw H.d(u.bf("BOOL_VEC4",c))
default:throw H.d(P.x("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bp.prototype={
i:function(a){return this.b}}
A.dX.prototype={
eg:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.dL(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.nf(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.r(p.y.S(0,"txtCount"),"$ial")
p.ch=H.r(p.y.S(0,"backClr"),"$ic2")
p.shG(H.e([],[A.bb]))
p.seB(H.e([],[A.am]))
u=[A.ax]
p.shu(H.e([],u))
p.shv(H.e([],u))
p.seG(H.e([],u))
p.seH(H.e([],u))
p.seS(H.e([],[A.al]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.u(P.x(o+r+n));(u&&C.a).h(u,H.r(q,"$ibb"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.u(P.x(o+r+n));(u&&C.a).h(u,H.r(q,"$iam"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.u(P.x(o+r+n));(u&&C.a).h(u,H.r(q,"$iax"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.u(P.x(o+r+n));(u&&C.a).h(u,H.r(q,"$iax"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.u(P.x(o+r+n));(u&&C.a).h(u,H.r(q,"$iax"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.u(P.x(o+r+n));(u&&C.a).h(u,H.r(q,"$iax"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.u(P.x(o+r+n));(u&&C.a).h(u,H.r(q,"$ial"))}},
shG:function(a){this.cx=H.m(a,"$ib",[A.bb],"$ab")},
seB:function(a){this.cy=H.m(a,"$ib",[A.am],"$ab")},
shu:function(a){this.db=H.m(a,"$ib",[A.ax],"$ab")},
shv:function(a){this.dx=H.m(a,"$ib",[A.ax],"$ab")},
seG:function(a){this.dy=H.m(a,"$ib",[A.ax],"$ab")},
seH:function(a){this.fr=H.m(a,"$ib",[A.ax],"$ab")},
seS:function(a){this.fx=H.m(a,"$ib",[A.al],"$ab")}}
A.e0.prototype={}
A.iw.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
S:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.al.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.it.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.is.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
shH:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.af.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.ax.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.X.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.c2.prototype={
e5:function(a){return C.c.cn(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cO.prototype={
am:function(a){var u=new Float32Array(H.bH(H.m(a,"$ib",[P.A],"$ab")))
C.c.e0(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.am.prototype={
am:function(a){var u=new Float32Array(H.bH(H.m(a,"$ib",[P.A],"$ab")))
C.c.co(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.bb.prototype={
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.c5.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.ke.prototype={
$1:function(a){return new V.a8(Math.cos(a),Math.sin(a),0)},
$S:41}
F.jY.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kU(n.$1(o),m)
m=J.kU(n.$1(o+3.141592653589793/p.c),m).H(0,l)
m=new V.L(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.w(m)))
n=$.ly
if(n==null){n=new V.L(1,0,0)
$.ly=n
t=n}else t=n
n=u.ay(!J.N(u,t)?V.lA():t)
s=n.u(0,Math.sqrt(n.w(n)))
n=s.ay(u)
t=n.u(0,Math.sqrt(n.w(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.p(0,n*m)
m=s.p(0,q*m)
m=l.C(0,new V.a8(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.N(a.f,m)){a.f=m
n=a.a
if(n!=null)n.aa()}},
$S:42}
F.a6.prototype={
aZ:function(){var u=this
if(!u.gdq()){C.a.N(u.a.a.d.b,u)
u.a.a.aa()}u.ha()
u.hb()
u.hc()},
hk:function(a){this.a=a
C.a.h(a.d.b,this)},
hl:function(a){this.b=a
C.a.h(a.d.c,this)},
hm:function(a){this.c=a
C.a.h(a.d.d,this)},
ha:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
hb:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
hc:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gdq:function(){return this.a==null||this.b==null||this.c==null},
ev:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cQ()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dN())return
return s.u(0,Math.sqrt(s.w(s)))},
ez:function(){var u,t,s,r=this.a,q=r==null?null:r.f
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
r=s.ay(r.u(0,Math.sqrt(r.w(r))))
return r.u(0,Math.sqrt(r.w(r)))},
bV:function(){var u,t=this
if(t.d!=null)return!0
u=t.ev()
if(u==null){u=t.ez()
if(u==null)return!1}t.d=u
t.a.a.aa()
return!0},
eu:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cQ()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dN())return
return s.u(0,Math.sqrt(s.w(s)))},
ey:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.H(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.H(0,g).p(0,p).C(0,g).H(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.w(l)))
l=o.ay(q)
l=l.u(0,Math.sqrt(l.w(l))).ay(o)
q=l.u(0,Math.sqrt(l.w(l)))}return q},
bT:function(){var u,t=this
if(t.e!=null)return!0
u=t.eu()
if(u==null){u=t.ey()
if(u==null)return!1}t.e=u
t.a.a.aa()
return!0},
ghT:function(a){var u=this
if(J.N(u.a,u.b))return!0
if(J.N(u.b,u.c))return!0
if(J.N(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u,t,s=this
if(s.gdq())return a+"disposed"
u=a+C.b.aB(J.aY(s.a.e),0)+", "+C.b.aB(J.aY(s.b.e),0)+", "+C.b.aB(J.aY(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.J("")}}
F.fI.prototype={}
F.hZ.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.by.prototype={}
F.fY.prototype={}
F.ir.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
return t==u.e}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
return t==u.e}else return!1}}}
F.bY.prototype={}
F.dQ.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.O():u},
ax:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ax()||!1
if(!t.a.ax())u=!1
s=t.e
if(s!=null)s.aC(0)
return u},
il:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.e(o.slice(0),[H.t(o,0)])
for(o=[F.as];u.length!==0;){t=C.a.gi8(u)
C.a.dU(u,0)
if(t!=null){s=H.e([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b2(0,t,q)){C.a.h(s,q)
C.a.dU(u,r)}}if(s.length>1)b.ik(s)}}p.a.A()
p.c.ci()
p.d.ci()
p.b.iD()
p.c.cj(new F.ir())
p.d.cj(new F.hZ())
o=p.e
if(o!=null)o.aC(0)},
di:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aX()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bn().a)!==0)++s
if((t&$.bm().a)!==0)++s
if((t&$.bK().a)!==0)++s
if((t&$.bL().a)!==0)++s
if((t&$.d5().a)!==0)++s
if((t&$.d6().a)!==0)++s
if((t&$.cj().a)!==0)++s
if((t&$.bl().a)!==0)++s
r=a3.gct(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.A
p=H.e(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.e(u,[Z.db])
for(n=0,m=0;m<s;++m){l=a3.hN(m)
k=l.gct(l)
C.a.k(o,m,new Z.db(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].ii(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.bH(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cm(new Z.e8(a0,f),o,a3)
e.seU(H.e([],[Z.bW]))
a.b.b
if(a.c.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)}b=Z.lB(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bW(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.A()
C.a.h(d,c.e)}b=Z.lB(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bW(4,d.length,b))}return e},
i:function(a){var u=this,t=H.e([],[P.i])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.J("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.J("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.J("   "))}return C.a.t(t,"\n")},
aa:function(){var u=this.e
if(u!=null)u.B(null)},
$ioS:1}
F.hT.prototype={
hL:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.as],"$ab")
u=H.e([],[F.a6])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dm(t,q,p))}return u},
hM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.as],"$ab")
u=H.e([],[F.a6])
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
C.a.h(u,F.dm(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dm(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dm(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dm(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cj:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
ci:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.ghT(s)
if(t)s.aZ()}},
ax:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].bV())s=!1
return s},
bU:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].bT())s=!1
return s},
i:function(a){return this.R()},
J:function(a){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].J(a))
return C.a.t(r,"\n")},
R:function(){return this.J("")},
seN:function(a){this.b=H.m(a,"$ib",[F.a6],"$ab")}}
F.hU.prototype={
gl:function(a){return this.b.length},
cj:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
ci:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.N(s.a,s.b)
if(t)s.aZ()}},
i:function(a){return this.R()},
J:function(a){var u,t,s=H.e([],[P.i]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].J(a+(""+u+". ")))}return C.a.t(s,"\n")},
R:function(){return this.J("")},
seW:function(a){this.b=H.m(a,"$ib",[F.by],"$ab")}}
F.hV.prototype={
gl:function(a){return 0},
iD:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.c(t,u)
t=t[u].gjf()
t=t.gjc(t)
if(t.gl(t).a_(0,1)){t=this.b
return H.c(t,u)
t[u].aZ()}}},
i:function(a){return this.R()},
J:function(a){var u,t,s=H.e([],[P.i])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.c(u,t)
C.a.h(s,u[t].J(a))}return C.a.t(s,"\n")},
R:function(){return this.J("")},
sbL:function(a){this.b=H.m(a,"$ib",[F.bY],"$ab")}}
F.as.prototype={
dm:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iO(u.cx,r,o,t,s,q,p,a,n)},
ii:function(a){var u,t,s=this
if(a.n(0,$.aX())){u=s.f
t=[P.A]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bn())){u=s.r
t=[P.A]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bm())){u=s.x
t=[P.A]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bK())){u=s.y
t=[P.A]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.n(0,$.bL())){u=s.z
t=[P.A]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.d5())){u=s.Q
t=[P.A]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.d6())){u=s.Q
t=[P.A]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.cj()))return H.e([s.ch],[P.A])
else if(a.n(0,$.bl())){u=s.cx
t=[P.A]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.A])},
bV:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cQ()
t.d.F(0,new F.iZ(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.aa()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
bT:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cQ()
t.d.F(0,new F.iY(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.aa()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u,t,s=this,r="-",q=H.e([],[P.i])
C.a.h(q,C.b.aB(J.aY(s.e),0))
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
t=C.a.t(q,", ")
return a+"{"+t+"}"},
R:function(){return this.J("")}}
F.iZ.prototype={
$1:function(a){var u,t
H.f(a,"$ia6")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.iY.prototype={
$1:function(a){var u,t
H.f(a,"$ia6")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.iP.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.aa()
return!0},
bg:function(a,b,c,d,e,f){var u=F.iO(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
ax:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].bV()
return!0},
bU:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].bT()
return!0},
hS:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.N(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.R()},
J:function(a){var u,t,s,r
this.A()
u=H.e([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].J(a))
return C.a.t(u,"\n")},
R:function(){return this.J("")},
shI:function(a){this.c=H.m(a,"$ib",[F.as],"$ab")}}
F.iQ.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
H.o(b,{func:1,ret:-1,args:[F.a6]})
C.a.F(u.b,b)
C.a.F(u.c,new F.iR(u,b))
C.a.F(u.d,new F.iS(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].J(""))
return C.a.t(r,"\n")},
seO:function(a){this.b=H.m(a,"$ib",[F.a6],"$ab")},
seP:function(a){this.c=H.m(a,"$ib",[F.a6],"$ab")},
seQ:function(a){this.d=H.m(a,"$ib",[F.a6],"$ab")}}
F.iR.prototype={
$1:function(a){H.f(a,"$ia6")
if(!J.N(a.a,this.a))this.b.$1(a)},
$S:5}
F.iS.prototype={
$1:function(a){var u
H.f(a,"$ia6")
u=this.a
if(!J.N(a.a,u)&&!J.N(a.b,u))this.b.$1(a)},
$S:5}
F.iT.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].J(""))
return C.a.t(r,"\n")},
seX:function(a){this.b=H.m(a,"$ib",[F.by],"$ab")},
seY:function(a){this.c=H.m(a,"$ib",[F.by],"$ab")}}
F.iV.prototype={}
F.iU.prototype={
b2:function(a,b,c){return J.N(b.f,c.f)}}
F.iW.prototype={}
F.hz.prototype={
ik:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.as],"$ab")
u=V.cQ()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.w(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.u(0,Math.sqrt(o*o+n*n+m*m))}if(!J.N(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.B(null)}}}return}}
F.iX.prototype={
gl:function(a){return 0},
i:function(a){return this.R()},
R:function(){var u,t,s=H.e([],[P.i])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.c(u,t)
C.a.h(s,u[t].J(""))}return C.a.t(s,"\n")},
sbL:function(a){this.b=H.m(a,"$ib",[F.bY],"$ab")}}
O.dz.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.O():u},
O:function(a){var u
H.f(a,"$iw")
u=this.fr
if(u!=null)u.B(a)},
as:function(){return this.O(null)},
d2:function(a){H.f(a,"$iw")
this.a=null
this.O(a)},
hh:function(){return this.d2(null)},
fa:function(a,b){var u=V.ah
H.m(b,"$ih",[u],"$ah")
u=new D.bu([u])
u.b=!0
this.O(u)},
fc:function(a,b){var u=V.ah
H.m(b,"$ih",[u],"$ah")
u=new D.bv([u])
u.b=!0
this.O(u)},
cM:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.Z([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.e([],[A.aH])
h.F(0,new O.hg(j,q))
C.a.bt(q,new O.hh())
p=new H.Z([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){o=u[s]
r=o.gaY()
n=p.j(0,o.gaY())
p.k(0,r,n==null?1:n)}m=H.e([],[A.aM])
p.F(0,new O.hi(j,m))
C.a.bt(m,new O.hj())
l=new H.Z([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.z)(i),++s){o=i[s]
t=o.gaY()
r=l.j(0,o.gaY())
l.k(0,t,r==null?1:r)}k=H.e([],[A.aQ])
l.F(0,new O.hk(j,k))
C.a.bt(k,new O.hl())
i=C.d.a1(j.e.a.length+3,4)
j.dy.e
return A.mT(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
es:function(a,b){H.m(a,"$ib",[T.c1],"$ab")},
ak:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aq(u,u.length,[H.t(u,0)]);u.v();){t=u.d
t.toString
s=$.iN
if(s==null)s=$.iN=new V.L(0,0,1)
t.a=s
r=$.iM
t.d=r==null?$.iM=new V.L(0,1,0):r
r=$.iL
t.e=r==null?$.iL=new V.L(-1,0,0):r
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
dV:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cM()
u=H.f(b4.fr.j(0,b3.b_),"$idA")
if(u==null){u=A.mS(b3,b4.a)
b4.df(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dt
b3=b5.e
if(!(b3 instanceof Z.cm))b3=b5.e=null
if(b3==null||!b3.d.n(0,s)){b3=t.k3
if(b3)b5.d.ax()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.bU()
q.a.bU()
q=q.e
if(q!=null)q.aC(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.hS()
p=p.e
if(p!=null)p.aC(0)}n=b5.d.di(new Z.e9(b4.a),s)
n.az($.aX()).e=b2.a.Q.c
if(b3)n.az($.bn()).e=b2.a.cx.c
if(r)n.az($.bm()).e=b2.a.ch.c
if(t.r1)n.az($.bK()).e=b2.a.cy.c
if(q)n.az($.bL()).e=b2.a.db.c
if(t.rx)n.az($.bl()).e=b2.a.dx.c
b5.e=n}b3=T.c1
m=H.e([],[b3])
b2.a.a7(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga2(q)
r=r.dy
r.toString
r.am(q.ac(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga2(q)
p=b4.dx
p=b4.cx=q.p(0,p.ga2(p))
q=p}r=r.fr
r.toString
r.am(q.ac(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.giC()
p=b4.dx
p=b4.ch=q.p(0,p.ga2(p))
q=p}r=r.fy
r.toString
r.am(q.ac(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.am(C.k.ac(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.am(C.k.ac(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.am(C.k.ac(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.c.aO(r.a,r.d,l)
for(r=[P.A],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.c(p,k)
p=p[k]
q.toString
H.f(p,"$iah")
q=q.r1
if(k>=q.length)return H.c(q,k)
q=q[k]
j=new Float32Array(H.bH(H.m(p.ac(0,!0),"$ib",r,"$ab")))
C.c.co(q.a,q.d,!1,j)}}if(t.a.a){r=b2.a
q=b2.f.f
r=r.r2
C.c.X(r.a,r.d,q.a,q.b,q.c)}if(t.id){if(t.b.a){r=b2.a
q=b2.r.f
r=r.x1
C.c.X(r.a,r.d,q.a,q.b,q.c)}if(t.c.a){r=b2.a
q=b2.x.f
r=r.y2
C.c.X(r.a,r.d,q.a,q.b,q.c)}if(t.d.a){r=b2.a
q=b2.y.f
r=r.du
C.c.X(r.a,r.d,q.a,q.b,q.c)}r=t.e.a
if(!r)q=!1
else q=!0
if(q){q=b2.a
p=b2.z.ch
q=q.dw
C.c.a3(q.a,q.d,p)}if(r){r=b2.a
q=b2.z.f
r=r.dv
C.c.X(r.a,r.d,q.a,q.b,q.c)}r=t.z
if(r.length>0){q=b4.db
i=q.ga2(q)
q=P.l
h=new H.Z([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.z)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.d7(b2.a.c_.j(0,0),e)
o=i.bp(f.a)
c=o.a
b=o.b
a=o.c
a=o.u(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.c.X(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.c.X(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.z)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.bZ.j(0,p)
C.c.aO(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga2(q)
q=P.l
a0=new H.Z([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.A],g=0;g<q.length;q.length===p||(0,H.z)(q),++g){f=q[g]
a1=f.gaY()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.d7(b2.a.c1.j(0,a1),e)
a2=i.p(0,f.ga2(f))
b=f.ga2(f)
a=$.cD
b=b.cm(a==null?$.cD=new V.a8(0,0,0):a)
a=d.b
C.c.X(a.a,a.d,b.a,b.b,b.c)
b=$.cD
b=a2.cm(b==null?$.cD=new V.a8(0,0,0):b)
a=d.c
C.c.X(a.a,a.d,b.a,b.b,b.c)
b=f.gaX(f)
a=d.e
C.c.X(a.a,a.d,b.a,b.b,b.c)
f.gag()
b=a2.dM(0)
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
j=new Float32Array(H.bH(H.m(new V.dC(a,a3,a4,a5,a6,a7,a8,a9,b).ac(0,!0),"$ib",c,"$ab")))
C.c.e0(b0.a,b0.d,!1,j)
f.gag()
b=f.gag()
H.m(m,"$ib",o,"$ab")
if(!C.a.ao(m,b)){b.sb0(0,m.length)
C.a.h(m,b)}b=f.gag()
a=b.gb1(b)
if(a){a=d.f
a.toString
a3=b.gb1(b)
if(!a3)a.a.uniform1i(a.d,0)
else{b=b.gb0(b)
a.a.uniform1i(a.d,b)}}f.gaQ()
b=f.ge6()
a=d.x
a.toString
a3=b.gi0(b)
a4=b.gi1(b)
a5=b.gi2()
b=b.gi_()
C.c.cn(a.a,a.d,a3,a4,a5,b)
b=f.gaQ()
if(!C.a.ao(m,b)){b.sb0(0,m.length)
C.a.h(m,b)}b=f.gaQ()
a=b.gb1(b)
if(a){a=d.r
a.toString
a3=b.gb1(b)
if(!a3)a.a.uniform1i(a.d,0)
else{b=b.gb0(b)
a.a.uniform1i(a.d,b)}}if(f.gi4()){b=f.ghO()
a=d.y
C.c.a3(a.a,a.d,b)
b=f.ghP()
a=d.z
C.c.a3(a.a,a.d,b)
b=f.ghQ()
a=d.Q
C.c.a3(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.z)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.c0.j(0,p)
C.c.aO(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga2(q)
q=P.l
b1=new H.Z([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.z)(q),++g){f=q[g]
a1=f.gaY()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.d7(b2.a.c3.j(0,a1),e)
o=f.giB(f)
c=d.b
C.c.X(c.a,c.d,o.a,o.b,o.c)
o=f.giU(f).jb()
c=d.c
C.c.X(c.a,c.d,o.a,o.b,o.c)
o=i.cm(f.giB(f))
c=d.d
C.c.X(c.a,c.d,o.a,o.b,o.c)
o=f.gaX(f)
c=d.e
C.c.X(c.a,c.d,o.a,o.b,o.c)
f.gag()
o=f.gcp()
c=d.f
C.c.X(c.a,c.d,o.a,o.b,o.c)
o=f.gck(f)
c=d.r
C.c.X(c.a,c.d,o.a,o.b,o.c)
o=f.gjd()
c=d.x
C.c.a3(c.a,c.d,o)
o=f.gje()
c=d.y
C.c.a3(c.a,c.d,o)
f.gag()
o=f.gag()
H.m(m,"$ib",b3,"$ab")
if(!C.a.ao(m,o)){o.sb0(0,m.length)
C.a.h(m,o)}o=f.gag()
c=o.gb1(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gaQ()
o=f.ge6()
c=d.z
c.toString
b=o.gi0(o)
a=o.gi1(o)
a3=o.gi2()
o=o.gi_()
C.c.cn(c.a,c.d,b,a,a3,o)
o=f.gaQ()
if(!C.a.ao(m,o)){o.sb0(0,m.length)
C.a.h(m,o)}o=f.gaQ()
c=o.gb1(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.giV()){o=f.giT()
c=d.Q
C.c.a3(c.a,c.d,o)
o=f.giS()
c=d.ch
C.c.a3(c.a,c.d,o)}if(f.gi4()){o=f.ghO()
c=d.cx
C.c.a3(c.a,c.d,o)
o=f.ghP()
c=d.cy
C.c.a3(c.a,c.d,o)
o=f.ghQ()
c=d.db
C.c.a3(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.z)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.c2.j(0,q)
C.c.aO(q.a,q.d,l)}}}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga2(r).dM(0)}b3=b3.id
b3.toString
b3.am(r.ac(0,!0))}if(t.cy){b2.es(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hj(b3.dz,r)
if(t.r.a){b3=b2.a
r=b2.cx.f
b3=b3.dA
C.c.X(b3.a,b3.d,r.a,r.b,r.c)}b3=t.x.a
if(!b3)r=!1
else r=!0
if(r){r=b2.a
q=b2.cy.ch
r=r.dB
C.c.a3(r.a,r.d,q)}if(b3){b3=b2.a
r=b2.cy.f
b3=b3.dC
C.c.X(b3.a,b3.d,r.a,r.b,r.c)}}b3=t.y.a
r=!b3
if(r)q=!1
else q=!0
if(q){if(b3){b3=b2.a
q=b2.db.f
b3=b3.dD
C.c.a3(b3.a,b3.d,q)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a7(b4)
b3=b5.e
b3.a7(b4)
b3.ab(b4)
b3.aN(b4)
if(r)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aN(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.dn()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cM().b_},
sex:function(a){this.e=H.m(a,"$iV",[V.ah],"$aV")}}
O.hg.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aH(a,C.d.a1(b+3,4)*4))},
$S:10}
O.hh.prototype={
$2:function(a,b){H.f(a,"$iaH")
H.f(b,"$iaH")
return J.kh(a.a,b.a)},
$S:46}
O.hi.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aM(a,C.d.a1(b+3,4)*4))},
$S:10}
O.hj.prototype={
$2:function(a,b){H.f(a,"$iaM")
H.f(b,"$iaM")
return J.kh(a.a,b.a)},
$S:47}
O.hk.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aQ(a,C.d.a1(b+3,4)*4))},
$S:10}
O.hl.prototype={
$2:function(a,b){H.f(a,"$iaQ")
H.f(b,"$iaQ")
return J.kh(a.a,b.a)},
$S:48}
O.ha.prototype={
av:function(){var u,t=this
t.cv()
u=t.f
if(!(Math.abs(u-1)<$.K().a)){t.f=1
u=new D.F(t.b,u,1,[P.A])
u.b=!0
t.a.O(u)}}}
O.dB.prototype={
av:function(){},
d5:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.av()
u=s.a
u.a=null
u.O(null)}}}
O.hb.prototype={}
O.b6.prototype={
d4:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.F(s.b+".color",u,a,[V.a4])
t.b=!0
s.a.O(t)}},
av:function(){this.cv()
this.d4(new V.a4(1,1,1))},
saX:function(a,b){this.d5(new A.ao(!0,!1,!1))
this.d4(b)}}
O.hd.prototype={}
O.he.prototype={
av:function(){var u,t=this
t.cw()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.F(t.b+".refraction",u,1,[P.A])
u.b=!0
t.a.O(u)}}}
O.hf.prototype={
d6:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.F(u.b+".shininess",t,a,[P.A])
t.b=!0
u.a.O(t)}},
av:function(){this.cw()
this.d6(100)}}
O.bE.prototype={}
O.dW.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.O():u},
O:function(a){var u
H.f(a,"$iw")
u=this.e
if(u!=null)u.B(a)},
as:function(){return this.O(null)},
fq:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ih",[O.aS],"$ah")
for(u=b.length,t=this.gar(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bt()
o.sa5(null)
o.saH(null)
o.c=null
o.d=0
p.f=o}H.o(t,s)
if(o.a==null)o.sa5(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.as()},
ft:function(a,b){var u,t
H.m(b,"$ih",[O.aS],"$ah")
for(u=b.gV(b),t=this.gar();u.v();)u.gI(u).gm().N(0,t)
this.as()},
saW:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.F("blend",u,a,[A.bp])
u.b=!0
this.O(u)}},
eV:function(a){a=C.d.a1(a+3,4)*4
if(a<=0)return 4
return a},
dV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.eV(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.d.i(u.a)
s=H.f(a.fr.j(0,t),"$idX")
if(s==null){s=A.ne(g,u,a.a)
a.df(s)}h.b=s
u=s}if(b.e==null){u=b.d.di(new Z.e9(a.a),$.aX())
t=u.az($.aX())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.a7(a)
u=T.c1
q=H.e([],[u])
for(t=[P.A],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.m(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.ao(q,r)){r.a=q.length
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
if(m==null){m=$.hm
if(m==null){m=new V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hm=m}}j=new Float32Array(H.bH(H.m(m.ac(0,!0),"$ib",t,"$ab")))
C.c.co(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cG
if(m==null){m=V.dM(0,0,1,1)
$.cG=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.c(m,p)
m=m[p]
C.c.bq(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.c(r,p)
r=r[p]
C.c.bq(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cG
if(m==null){m=V.dM(0,0,1,1)
$.cG=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.c(m,p)
m=m[p]
C.c.bq(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.c(r,p)
r=r[p]
C.c.bq(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.c(r,p)
r=r[p]
m=H.D(m)?1:0
C.c.aO(r.a,r.d,m);++p}}u=h.b.Q
C.c.aO(u.a,u.d,p)
u=h.b
t=h.a
u.ch.e5(t)
for(u=a.a,o=0;o<q.length;++o){t=q[o]
if(!t.c&&t.d){t.c=!0
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}t=b.e
if(t instanceof Z.cm){t.a7(a)
t.ab(a)
t.aN(a)}else b.e=null
t=h.b
t.toString
u.useProgram(null)
t.x.dn()
for(o=0;o<q.length;++o){t=q[o]
if(t.c){t.c=!1
u.activeTexture(33984+t.a)
u.bindTexture(3553,null)}}},
seL:function(a){this.c=H.m(a,"$iV",[O.aS],"$aV")}}
O.aS.prototype={
O:function(a){var u
H.f(a,"$iw")
u=this.f
if(u!=null)u.B(a)},
as:function(){return this.O(null)},
sag:function(a){var u,t=this,s=t.a
if(s!=a){if(s!=null)s.gm().N(0,t.gar())
u=t.a
t.a=a
if(a!=null)a.gm().h(0,t.gar())
s=new D.F("texture",u,t.a,[T.dV])
s.b=!0
t.O(s)}},
sdl:function(a){var u,t,s=this
if(a==null)a=V.bz()
if(!J.N(s.b,a)){u=s.b
s.b=a
t=new D.F("colorMatrix",u,a,[V.ah])
t.b=!0
s.O(t)}}}
T.c1.prototype={}
T.dV.prototype={}
T.ie.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.O():u}}
V.f6.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$ibf:1}
V.bf.prototype={}
V.dy.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sau:function(a){this.a=H.m(a,"$ib",[V.bf],"$ab")},
$ibf:1}
V.bh.prototype={
aL:function(a,b){return!this.ea(0,b)},
i:function(a){return"!["+this.cu(0)+"]"}}
V.hS.prototype={
ee:function(a){var u,t
if(a.a.length<=0)throw H.d(P.x("May not create a SetMatcher with zero characters."))
u=new H.Z([P.l,P.a3])
for(t=new H.dw(a,a.gl(a),[H.ay(a,"v",0)]);t.v();)u.k(0,t.d,!0)
this.shi(u)},
aL:function(a,b){return this.a.bh(0,b)},
i:function(a){var u=this.a
return P.cK(u.gap(u),0,null)},
shi:function(a){this.a=H.m(a,"$iy",[P.l,P.a3],"$ay")},
$ibf:1}
V.cI.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cN(this.a.L(0,b))
r.sau(H.e([],[V.bf]))
r.c=!1
C.a.h(this.c,r)
return r},
i7:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
shF:function(a){this.c=H.m(a,"$ib",[V.cN],"$ab")}}
V.dZ.prototype={
i:function(a){var u=H.m7(this.b,"\n","\\n"),t=H.m7(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cM.prototype={
i:function(a){return this.b},
shd:function(a){var u=P.i
this.c=H.m(a,"$iy",[u,u],"$ay")}}
V.ii.prototype={
L:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cI(this,b)
u.shF(H.e([],[V.cN]))
u.d=null
this.a.k(0,b,u)}return u},
b9:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cM(a)
u=P.i
t.shd(new H.Z([u,u]))
this.b.k(0,a,t)}return t},
iP:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.e([],[V.dZ]),k=this.c,j=[P.l],i=H.e([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.i7(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cK(i,0,m)
throw H.d(P.x("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.e([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cK(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.dZ(n==null?o.b:n,p,s)}++s}}},
shw:function(a){this.a=H.m(a,"$iy",[P.i,V.cI],"$ay")},
shy:function(a){this.b=H.m(a,"$iy",[P.i,V.cM],"$ay")}}
V.cN.prototype={
i:function(a){return this.b.b+": "+this.cu(0)}}
X.fg.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.O():u},
a0:function(a){var u=this.fr
if(u!=null)u.B(a)},
sah:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.F("width",u,b,[P.l])
u.b=!0
t.a0(u)}},
sae:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.F("height",u,b,[P.l])
u.b=!0
t.a0(u)}},
a7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.p()
i.sah(0,C.d.Z(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.p()
i.sae(0,C.d.Z(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=H.a9(u.getParameter(3379))
p=V.kQ(s)
o=V.kQ(r)
q=V.kQ(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.c.iK(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.lm(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.ds()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.ds()
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
a.c=C.e.Z(s*i.a)
r=t.d
a.d=C.e.Z(r*i.b)
l=t.a
k=i.c
j=C.e.Z(l*k)
t=t.b
l=i.d
u.viewport(j,C.e.Z(t*l),C.e.Z(s*k),C.e.Z(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
aN:function(a){a.a.bindFramebuffer(36160,null)}}
X.bP.prototype={$ibX:1}
X.fP.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.O():u},
a7:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.C(u)
q=C.e.Z(r*u)
r=s.b
if(typeof t!=="number")return H.C(t)
p=C.e.Z(r*t)
r=C.e.Z(s.c*u)
a.c=r
s=C.e.Z(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aN:function(a){}}
X.fR.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.O():u},
$ibX:1,
$ibP:1}
X.dH.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.O():u},
a0:function(a){var u
H.f(a,"$iw")
u=this.f
if(u!=null)u.B(a)},
ep:function(){return this.a0(null)},
$ibX:1,
$ibP:1}
X.cL.prototype={}
V.kc.prototype={
$1:function(a){var u
H.f(a,"$ib8")
u=C.e.e_(this.a.gia(),2)
if(u!=="0.00")P.kR(u+" fps")},
$S:50}
V.hI.prototype={
dd:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.o(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.lt().gcg().j(0,H.k(u))
if(t==null)if(d){c.$0()
m.da(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kW(m.c).h(0,q)
o=W.mI("radio")
o.checked=s
o.name=u
u=W.n
W.ab(o,"change",H.o(new V.hJ(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kW(m.c).h(0,r.createElement("br"))},
bQ:function(a,b,c){return this.dd(a,b,c,!1)},
da:function(a){var u,t,s=P.lt(),r=P.i,q=P.mN(s.gcg(),r,r)
q.k(0,this.a,a)
u=s.dW(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jA([],[]).cq(""),"",t)}}
V.hJ.prototype={
$1:function(a){var u=this
if(H.D(u.b.checked)){u.c.$0()
u.a.da(u.d)}},
$S:20}
V.hW.prototype={
ef:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.n
W.ab(q,"scroll",H.o(new V.hY(o),{func:1,ret:-1,args:[r]}),!1,r)},
de:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.i],"$ab")
this.ho()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iP(C.a.ih(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
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
if(H.oF(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.U(m[1])
l.textContent=H.U(m[0])
t.appendChild(l)}else{k=P.jK(C.S,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.k(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
hJ:function(a){var u,t,s,r,q,p,o,n="auto"
H.m(a,"$ib",[P.i],"$ab")
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
s=H.f(r.insertCell(-1),"$ibj").style
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
o=H.f(r.insertCell(-1),"$ibj")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
ho:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.ii()
t=P.i
u.shw(new H.Z([t,V.cI]))
u.shy(new H.Z([t,V.cM]))
u.c=null
u.c=u.L(0,q)
t=u.L(0,q).t(0,p)
s=V.ak(new H.a1("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,p).t(0,p)
s=new V.bh()
r=[V.bf]
s.sau(H.e([],r))
C.a.h(t.a,s)
t=V.ak(new H.a1("*"))
C.a.h(s.a,t)
t=u.L(0,p).t(0,"BoldEnd")
s=V.ak(new H.a1("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).t(0,o)
s=V.ak(new H.a1("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,o).t(0,o)
s=new V.bh()
s.sau(H.e([],r))
C.a.h(t.a,s)
t=V.ak(new H.a1("_"))
C.a.h(s.a,t)
t=u.L(0,o).t(0,n)
s=V.ak(new H.a1("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).t(0,m)
s=V.ak(new H.a1("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,m).t(0,m)
s=new V.bh()
s.sau(H.e([],r))
C.a.h(t.a,s)
t=V.ak(new H.a1("`"))
C.a.h(s.a,t)
t=u.L(0,m).t(0,"CodeEnd")
s=V.ak(new H.a1("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).t(0,l)
s=V.ak(new H.a1("["))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,l).t(0,k)
s=V.ak(new H.a1("|"))
C.a.h(t.a,s)
s=u.L(0,l).t(0,j)
t=V.ak(new H.a1("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,l).t(0,l)
t=new V.bh()
t.sau(H.e([],r))
C.a.h(s.a,t)
s=V.ak(new H.a1("|]"))
C.a.h(t.a,s)
s=u.L(0,k).t(0,j)
t=V.ak(new H.a1("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,k).t(0,k)
t=new V.bh()
t.sau(H.e([],r))
C.a.h(s.a,t)
s=V.ak(new H.a1("|]"))
C.a.h(t.a,s)
C.a.h(u.L(0,q).t(0,i).a,new V.f6())
s=u.L(0,i).t(0,i)
t=new V.bh()
t.sau(H.e([],r))
C.a.h(s.a,t)
s=V.ak(new H.a1("*_`["))
C.a.h(t.a,s)
s=u.L(0,"BoldEnd")
s.d=s.a.b9(p)
s=u.L(0,n)
s.d=s.a.b9(o)
s=u.L(0,"CodeEnd")
s.d=s.a.b9(m)
s=u.L(0,j)
s.d=s.a.b9("Link")
s=u.L(0,i)
s.d=s.a.b9(i)
this.b=u}}
V.hY.prototype={
$1:function(a){P.lp(C.q,new V.hX(this.a))},
$S:20}
V.hX.prototype={
$0:function(){var u=C.e.Z(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:1}
S.k6.prototype={
$0:function(){this.a.saW(C.v)},
$S:1}
S.k7.prototype={
$0:function(){this.a.saW(C.j)},
$S:1}
S.k8.prototype={
$0:function(){this.a.saW(C.w)},
$S:1}
S.k9.prototype={
$0:function(){this.a.saW(C.p)},
$S:1};(function aliases(){var u=J.a.prototype
u.e8=u.i
u=J.dt.prototype
u.e9=u.i
u=O.dB.prototype
u.cv=u.av
u=O.b6.prototype
u.cw=u.av
u=V.dy.prototype
u.ea=u.aL
u.cu=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"oh","ns",13)
u(P,"oi","nt",13)
u(P,"oj","nu",13)
t(P,"lU","of",3)
var n
s(n=E.ap.prototype,"gdR",0,0,null,["$1","$0"],["dS","it"],0,0)
s(n,"gdP",0,0,null,["$1","$0"],["dQ","iq"],0,0)
r(n,"gio","ip",6)
r(n,"gir","is",6)
s(n=E.dY.prototype,"gcB",0,0,null,["$1","$0"],["cD","cC"],0,0)
q(n,"giG","dX",3)
p(n=X.e4.prototype,"gfu","fv",11)
p(n,"gfd","fe",11)
p(n,"gfj","fk",4)
p(n,"gfA","fB",22)
p(n,"gfw","fz",22)
p(n,"gfE","fF",4)
p(n,"gfI","fJ",4)
p(n,"gfn","fo",4)
p(n,"gfG","fH",4)
p(n,"gfl","fm",4)
p(n,"gfK","fL",33)
p(n,"gfM","fN",11)
p(n,"gh1","h2",9)
p(n,"gfY","fZ",9)
p(n,"gh_","h0",9)
s(D.bq.prototype,"gei",0,0,null,["$1","$0"],["aq","ej"],0,0)
s(n=D.dv.prototype,"gcY",0,0,null,["$1","$0"],["cZ","fC"],0,0)
p(n,"gfO","fP",35)
r(n,"gf7","f8",21)
r(n,"gfS","fT",21)
o(V.R.prototype,"gl","c8",24)
o(V.L.prototype,"gl","c8",24)
s(n=U.cs.prototype,"gaG",0,0,null,["$1","$0"],["M","a6"],0,0)
r(n,"gf5","f6",19)
r(n,"gfQ","fR",19)
s(n=U.e5.prototype,"gaG",0,0,null,["$1","$0"],["M","a6"],0,0)
p(n,"gbC","bD",2)
p(n,"gbE","bF",2)
p(n,"gbG","bH",2)
s(n=U.e6.prototype,"gaG",0,0,null,["$1","$0"],["M","a6"],0,0)
p(n,"gbC","bD",2)
p(n,"gbE","bF",2)
p(n,"gbG","bH",2)
p(n,"gf_","f0",2)
p(n,"gf1","f2",2)
p(n,"ghD","hE",2)
p(n,"ghB","hC",2)
p(n,"ghz","hA",2)
p(U.e7.prototype,"gf3","f4",2)
s(n=M.dd.prototype,"gY",0,0,null,["$1","$0"],["W","aR"],0,0)
r(n,"gfU","fV",23)
r(n,"gfW","fX",23)
s(M.df.prototype,"gY",0,0,null,["$1","$0"],["W","aR"],0,0)
s(n=M.dk.prototype,"gY",0,0,null,["$1","$0"],["W","aR"],0,0)
r(n,"gff","fg",6)
r(n,"gfh","fi",6)
s(n=O.dz.prototype,"gar",0,0,null,["$1","$0"],["O","as"],0,0)
s(n,"ghg",0,0,null,["$1","$0"],["d2","hh"],0,0)
r(n,"gf9","fa",17)
r(n,"gfb","fc",17)
s(n=O.dW.prototype,"gar",0,0,null,["$1","$0"],["O","as"],0,0)
r(n,"gfp","fq",18)
r(n,"gfs","ft",18)
s(O.aS.prototype,"gar",0,0,null,["$1","$0"],["O","as"],0,0)
s(X.dH.prototype,"geo",0,0,null,["$1","$0"],["a0","ep"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.kr,J.a,J.aq,P.eq,P.h,H.dw,P.b2,H.bU,H.cP,H.fq,H.io,P.bs,H.cn,H.eH,P.ag,H.fZ,H.h0,H.fU,P.eN,P.bd,P.aD,P.ea,P.i6,P.cJ,P.i7,P.b8,P.an,P.jN,P.jw,P.cT,P.ep,P.v,P.jF,P.h7,P.bR,P.jM,P.jL,P.a3,P.au,P.aa,P.br,P.hD,P.dT,P.ei,P.fO,P.b,P.y,P.J,P.ar,P.i,P.a2,P.c8,P.iC,P.jx,W.ft,W.E,W.dn,P.jz,P.jr,P.M,O.V,O.cw,E.fj,E.ap,E.hK,E.dY,Z.e8,Z.e9,Z.cm,Z.bW,Z.bG,D.fm,D.bt,D.w,X.dc,X.du,X.fW,X.h4,X.av,X.ht,X.ij,X.e4,D.bq,D.ac,D.dI,D.dS,V.a4,V.a5,V.fF,V.dC,V.ah,V.a7,V.a8,V.bB,V.bD,V.R,V.L,U.e5,U.e6,U.e7,M.df,M.dk,M.aw,A.d9,A.fb,A.ao,A.aH,A.aM,A.aQ,A.hc,A.c3,A.c4,A.c6,A.bp,A.e0,A.iw,F.a6,F.fI,F.by,F.fY,F.bY,F.dQ,F.hT,F.hU,F.hV,F.as,F.iP,F.iQ,F.iT,F.iV,F.iW,F.iX,O.bE,O.dB,O.hd,O.aS,V.f6,V.bf,V.dy,V.hS,V.cI,V.dZ,V.cM,V.ii,X.cL,X.bP,X.fR,X.dH,V.hI,V.hW])
s(J.a,[J.fT,J.ds,J.dt,J.b3,J.cv,J.bw,H.cz,H.bA,W.j,W.f5,W.bO,W.b0,W.b1,W.Q,W.ec,W.fx,W.fy,W.ee,W.dj,W.eg,W.fA,W.n,W.ej,W.aI,W.fQ,W.el,W.ct,W.h3,W.hn,W.er,W.es,W.aK,W.et,W.ew,W.aL,W.eA,W.eC,W.aO,W.eD,W.aP,W.eI,W.aA,W.eL,W.ih,W.aT,W.eO,W.il,W.iH,W.eT,W.eV,W.eX,W.eZ,W.f0,P.b5,P.en,P.b7,P.ey,P.hH,P.eJ,P.b9,P.eQ,P.fc,P.eb,P.da,P.dp,P.dK,P.dO,P.c0,P.dP,P.dU,P.e1,P.eF])
s(J.dt,[J.hE,J.c7,J.bx])
t(J.kq,J.b3)
s(J.cv,[J.dr,J.dq])
t(P.h2,P.eq)
s(P.h2,[H.e2,W.j8,W.j7,P.fK])
t(H.a1,H.e2)
s(P.h,[H.fD,H.h8,H.j0])
s(P.b2,[H.h9,H.j1])
t(H.fr,H.fq)
s(P.bs,[H.hA,H.fV,H.iA,H.iq,H.fl,H.hQ,P.fa,P.dG,P.aZ,P.iB,P.iy,P.i2,P.fp,P.fw])
s(H.cn,[H.kf,H.ib,H.k2,H.k3,H.k4,P.j4,P.j3,P.j5,P.j6,P.jE,P.jD,P.je,P.ji,P.jf,P.jg,P.jh,P.jl,P.jm,P.jk,P.jj,P.i8,P.i9,P.jV,P.ju,P.jt,P.jv,P.h1,P.h6,P.fB,P.fC,P.iG,P.iD,P.iE,P.iF,P.jG,P.jH,P.jJ,P.jI,P.jP,P.jO,P.jQ,P.jR,W.hp,W.hr,W.hP,W.i5,W.jd,P.jB,P.jX,P.fL,P.fM,P.fe,E.hL,E.hM,E.hN,E.ig,D.fG,D.fH,F.ke,F.jY,F.iZ,F.iY,F.iR,F.iS,O.hg,O.hh,O.hi,O.hj,O.hk,O.hl,V.kc,V.hJ,V.hY,V.hX,S.k6,S.k7,S.k8,S.k9])
s(H.ib,[H.i3,H.ck])
t(H.j2,P.fa)
t(P.h5,P.ag)
t(H.Z,P.h5)
t(H.h_,H.fD)
t(H.dD,H.bA)
s(H.dD,[H.cU,H.cW])
t(H.cV,H.cU)
t(H.cA,H.cV)
t(H.cX,H.cW)
t(H.dE,H.cX)
s(H.dE,[H.hu,H.hv,H.hw,H.hx,H.hy,H.dF,H.cB])
t(P.js,P.jN)
t(P.jq,P.jw)
t(P.eS,P.h7)
t(P.e3,P.eS)
s(P.bR,[P.fh,P.fE])
t(P.bT,P.i7)
s(P.bT,[P.fi,P.iK,P.iJ])
t(P.iI,P.fE)
s(P.aa,[P.A,P.l])
s(P.aZ,[P.c_,P.fS])
t(P.ja,P.c8)
s(W.j,[W.H,W.fJ,W.cx,W.aN,W.cY,W.aR,W.aB,W.d_,W.j_,W.cR,P.ff,P.bN])
s(W.H,[W.a_,W.bo])
s(W.a_,[W.q,P.p])
s(W.q,[W.f7,W.f8,W.bQ,W.dh,W.fN,W.cu,W.hR,W.bj])
s(W.b0,[W.co,W.fu,W.fv])
t(W.fs,W.b1)
t(W.cp,W.ec)
t(W.ef,W.ee)
t(W.di,W.ef)
t(W.eh,W.eg)
t(W.fz,W.eh)
t(W.az,W.bO)
t(W.ek,W.ej)
t(W.cq,W.ek)
t(W.em,W.el)
t(W.bV,W.em)
t(W.bF,W.n)
s(W.bF,[W.b4,W.ad,W.aU])
t(W.ho,W.er)
t(W.hq,W.es)
t(W.eu,W.et)
t(W.hs,W.eu)
t(W.ex,W.ew)
t(W.cC,W.ex)
t(W.eB,W.eA)
t(W.hF,W.eB)
t(W.hO,W.eC)
t(W.cZ,W.cY)
t(W.i_,W.cZ)
t(W.eE,W.eD)
t(W.i0,W.eE)
t(W.i4,W.eI)
t(W.eM,W.eL)
t(W.ic,W.eM)
t(W.d0,W.d_)
t(W.id,W.d0)
t(W.eP,W.eO)
t(W.ik,W.eP)
t(W.bc,W.ad)
t(W.eU,W.eT)
t(W.j9,W.eU)
t(W.ed,W.dj)
t(W.eW,W.eV)
t(W.jn,W.eW)
t(W.eY,W.eX)
t(W.ev,W.eY)
t(W.f_,W.eZ)
t(W.jy,W.f_)
t(W.f1,W.f0)
t(W.jC,W.f1)
t(W.jb,P.i6)
t(W.kz,W.jb)
t(W.jc,P.cJ)
t(P.jA,P.jz)
t(P.aj,P.jr)
t(P.eo,P.en)
t(P.fX,P.eo)
t(P.ez,P.ey)
t(P.hB,P.ez)
t(P.eK,P.eJ)
t(P.ia,P.eK)
t(P.eR,P.eQ)
t(P.im,P.eR)
t(P.fd,P.eb)
t(P.hC,P.bN)
t(P.eG,P.eF)
t(P.i1,P.eG)
s(E.fj,[Z.db,A.cH,T.c1])
s(D.w,[D.bu,D.bv,D.F,X.hG])
s(X.hG,[X.dx,X.bg,X.cy,X.e_])
s(O.V,[D.dv,U.cs,M.dd])
s(D.fm,[U.fo,U.ai])
t(U.de,U.ai)
s(A.cH,[A.dA,A.dX])
s(A.e0,[A.al,A.it,A.iu,A.iv,A.is,A.af,A.ax,A.X,A.c2,A.ix,A.cO,A.am,A.bb,A.c5])
t(F.hZ,F.fI)
t(F.ir,F.fY)
t(F.iU,F.iV)
t(F.hz,F.iW)
s(O.bE,[O.dz,O.dW])
s(O.dB,[O.ha,O.hb,O.b6])
s(O.b6,[O.he,O.hf])
t(T.dV,T.c1)
t(T.ie,T.dV)
s(V.dy,[V.bh,V.cN])
s(X.cL,[X.fg,X.fP])
u(H.e2,H.cP)
u(H.cU,P.v)
u(H.cV,H.bU)
u(H.cW,P.v)
u(H.cX,H.bU)
u(P.eq,P.v)
u(P.eS,P.jF)
u(W.ec,W.ft)
u(W.ee,P.v)
u(W.ef,W.E)
u(W.eg,P.v)
u(W.eh,W.E)
u(W.ej,P.v)
u(W.ek,W.E)
u(W.el,P.v)
u(W.em,W.E)
u(W.er,P.ag)
u(W.es,P.ag)
u(W.et,P.v)
u(W.eu,W.E)
u(W.ew,P.v)
u(W.ex,W.E)
u(W.eA,P.v)
u(W.eB,W.E)
u(W.eC,P.ag)
u(W.cY,P.v)
u(W.cZ,W.E)
u(W.eD,P.v)
u(W.eE,W.E)
u(W.eI,P.ag)
u(W.eL,P.v)
u(W.eM,W.E)
u(W.d_,P.v)
u(W.d0,W.E)
u(W.eO,P.v)
u(W.eP,W.E)
u(W.eT,P.v)
u(W.eU,W.E)
u(W.eV,P.v)
u(W.eW,W.E)
u(W.eX,P.v)
u(W.eY,W.E)
u(W.eZ,P.v)
u(W.f_,W.E)
u(W.f0,P.v)
u(W.f1,W.E)
u(P.en,P.v)
u(P.eo,W.E)
u(P.ey,P.v)
u(P.ez,W.E)
u(P.eJ,P.v)
u(P.eK,W.E)
u(P.eQ,P.v)
u(P.eR,W.E)
u(P.eb,P.ag)
u(P.eF,P.v)
u(P.eG,W.E)})()
var v={mangledGlobalNames:{l:"int",A:"double",aa:"num",i:"String",a3:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.J},{func:1,ret:-1,args:[D.w]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.J,args:[F.a6]},{func:1,ret:-1,args:[P.l,[P.h,E.ap]]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[W.n]},{func:1,ret:P.J,args:[D.w]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,args:[,]},{func:1,ret:P.i,args:[P.l]},{func:1,ret:-1,args:[P.l,[P.h,V.ah]]},{func:1,ret:-1,args:[P.l,[P.h,O.aS]]},{func:1,ret:-1,args:[P.l,[P.h,U.ai]]},{func:1,ret:P.J,args:[W.n]},{func:1,ret:-1,args:[P.l,[P.h,D.ac]]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:-1,args:[P.l,[P.h,M.aw]]},{func:1,ret:P.A},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.J,args:[,]},{func:1,ret:-1,args:[P.i,P.l]},{func:1,ret:P.J,args:[P.aa]},{func:1,args:[P.i]},{func:1,ret:W.a_,args:[W.H]},{func:1,ret:P.J,args:[,],opt:[P.ar]},{func:1,args:[W.n]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.a3,args:[[P.h,D.ac]]},{func:1,args:[,P.i]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[P.l]},{func:1,ret:[P.y,P.i,P.i],args:[[P.y,P.i,P.i],P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:V.a8,args:[P.A]},{func:1,ret:P.J,args:[F.as,P.A,P.A]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[P.i,,]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:P.l,args:[A.aH,A.aH]},{func:1,ret:P.l,args:[A.aM,A.aM]},{func:1,ret:P.l,args:[A.aQ,A.aQ]},{func:1,ret:P.J,args:[P.i]},{func:1,ret:P.J,args:[P.b8]},{func:1,ret:P.a3,args:[W.H]},{func:1,ret:[P.aD,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.o=W.bQ.prototype
C.N=J.a.prototype
C.a=J.b3.prototype
C.O=J.dq.prototype
C.d=J.dr.prototype
C.k=J.ds.prototype
C.e=J.cv.prototype
C.b=J.bw.prototype
C.P=J.bx.prototype
C.V=W.cC.prototype
C.A=J.hE.prototype
C.c=P.c0.prototype
C.r=J.c7.prototype
C.B=W.bc.prototype
C.C=W.cR.prototype
C.W=new P.fi()
C.D=new P.fh()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.E=function() {
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
C.J=function(getTagFallback) {
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
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.I=function(hooks) {
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
C.H=function(hooks) {
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

C.K=new P.hD()
C.h=new P.iI()
C.L=new P.iK()
C.f=new P.js()
C.p=new A.bp(0,"ColorBlendType.Overwrite")
C.v=new A.bp(1,"ColorBlendType.Additive")
C.w=new A.bp(2,"ColorBlendType.Average")
C.j=new A.bp(3,"ColorBlendType.AlphaBlend")
C.q=new P.br(0)
C.M=new P.br(5e6)
C.x=H.e(u([127,2047,65535,1114111]),[P.l])
C.l=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.m=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.n=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.R=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.S=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.y=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.T=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.z=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.Q=H.e(u([]),[P.i])
C.U=new H.fr(0,{},C.Q,[P.i,P.i])})();(function staticFields(){$.b_=0
$.cl=null
$.kY=null
$.kF=!1
$.lZ=null
$.lS=null
$.m5=null
$.jZ=null
$.k5=null
$.kO=null
$.ca=null
$.d2=null
$.d3=null
$.kG=!1
$.Y=C.f
$.at=[]
$.hm=null
$.le=null
$.cD=null
$.cG=null
$.lw=null
$.lz=null
$.ly=null
$.iL=null
$.iM=null
$.iN=null
$.lx=null
$.ld=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oQ","ma",function(){return H.lY("_$dart_dartClosure")})
u($,"oR","kS",function(){return H.lY("_$dart_js")})
u($,"oV","mb",function(){return H.ba(H.ip({
toString:function(){return"$receiver$"}}))})
u($,"oW","mc",function(){return H.ba(H.ip({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oX","md",function(){return H.ba(H.ip(null))})
u($,"oY","me",function(){return H.ba(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p0","mh",function(){return H.ba(H.ip(void 0))})
u($,"p1","mi",function(){return H.ba(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p_","mg",function(){return H.ba(H.lr(null))})
u($,"oZ","mf",function(){return H.ba(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"p3","mk",function(){return H.ba(H.lr(void 0))})
u($,"p2","mj",function(){return H.ba(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pi","kT",function(){return P.nr()})
u($,"p4","ml",function(){return P.nn()})
u($,"pj","mp",function(){return H.mU(H.bH(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"pk","mq",function(){return P.n7("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pl","mr",function(){return P.nP()})
u($,"pb","mo",function(){return Z.aC(0)})
u($,"p5","mm",function(){return Z.aC(511)})
u($,"pd","aX",function(){return Z.aC(1)})
u($,"pc","bn",function(){return Z.aC(2)})
u($,"p7","bm",function(){return Z.aC(4)})
u($,"pe","bK",function(){return Z.aC(8)})
u($,"pf","bL",function(){return Z.aC(16)})
u($,"p8","d5",function(){return Z.aC(32)})
u($,"p9","d6",function(){return Z.aC(64)})
u($,"pa","mn",function(){return Z.aC(96)})
u($,"pg","cj",function(){return Z.aC(128)})
u($,"p6","bl",function(){return Z.aC(256)})
u($,"oP","m9",function(){return new V.fF(1e-9)})
u($,"oO","K",function(){return $.m9()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cz,DataView:H.bA,ArrayBufferView:H.bA,Float32Array:H.cA,Float64Array:H.cA,Int16Array:H.hu,Int32Array:H.hv,Int8Array:H.hw,Uint16Array:H.hx,Uint32Array:H.hy,Uint8ClampedArray:H.dF,CanvasPixelArray:H.dF,Uint8Array:H.cB,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLImageElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.f5,HTMLAnchorElement:W.f7,HTMLAreaElement:W.f8,Blob:W.bO,HTMLCanvasElement:W.bQ,CDATASection:W.bo,CharacterData:W.bo,Comment:W.bo,ProcessingInstruction:W.bo,Text:W.bo,CSSNumericValue:W.co,CSSUnitValue:W.co,CSSPerspective:W.fs,CSSCharsetRule:W.Q,CSSConditionRule:W.Q,CSSFontFaceRule:W.Q,CSSGroupingRule:W.Q,CSSImportRule:W.Q,CSSKeyframeRule:W.Q,MozCSSKeyframeRule:W.Q,WebKitCSSKeyframeRule:W.Q,CSSKeyframesRule:W.Q,MozCSSKeyframesRule:W.Q,WebKitCSSKeyframesRule:W.Q,CSSMediaRule:W.Q,CSSNamespaceRule:W.Q,CSSPageRule:W.Q,CSSRule:W.Q,CSSStyleRule:W.Q,CSSSupportsRule:W.Q,CSSViewportRule:W.Q,CSSStyleDeclaration:W.cp,MSStyleCSSProperties:W.cp,CSS2Properties:W.cp,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fu,CSSUnparsedValue:W.fv,DataTransferItemList:W.fx,HTMLDivElement:W.dh,DOMException:W.fy,ClientRectList:W.di,DOMRectList:W.di,DOMRectReadOnly:W.dj,DOMStringList:W.fz,DOMTokenList:W.fA,Element:W.a_,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.az,FileList:W.cq,FileWriter:W.fJ,HTMLFormElement:W.fN,Gamepad:W.aI,History:W.fQ,HTMLCollection:W.bV,HTMLFormControlsCollection:W.bV,HTMLOptionsCollection:W.bV,ImageData:W.ct,HTMLInputElement:W.cu,KeyboardEvent:W.b4,Location:W.h3,MediaList:W.hn,MessagePort:W.cx,MIDIInputMap:W.ho,MIDIOutputMap:W.hq,MimeType:W.aK,MimeTypeArray:W.hs,PointerEvent:W.ad,MouseEvent:W.ad,DragEvent:W.ad,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cC,RadioNodeList:W.cC,Plugin:W.aL,PluginArray:W.hF,RTCStatsReport:W.hO,HTMLSelectElement:W.hR,SourceBuffer:W.aN,SourceBufferList:W.i_,SpeechGrammar:W.aO,SpeechGrammarList:W.i0,SpeechRecognitionResult:W.aP,Storage:W.i4,CSSStyleSheet:W.aA,StyleSheet:W.aA,HTMLTableCellElement:W.bj,HTMLTableDataCellElement:W.bj,HTMLTableHeaderCellElement:W.bj,TextTrack:W.aR,TextTrackCue:W.aB,VTTCue:W.aB,TextTrackCueList:W.ic,TextTrackList:W.id,TimeRanges:W.ih,Touch:W.aT,TouchEvent:W.aU,TouchList:W.ik,TrackDefaultList:W.il,CompositionEvent:W.bF,FocusEvent:W.bF,TextEvent:W.bF,UIEvent:W.bF,URL:W.iH,VideoTrackList:W.j_,WheelEvent:W.bc,Window:W.cR,DOMWindow:W.cR,CSSRuleList:W.j9,ClientRect:W.ed,DOMRect:W.ed,GamepadList:W.jn,NamedNodeMap:W.ev,MozNamedAttrMap:W.ev,SpeechRecognitionResultList:W.jy,StyleSheetList:W.jC,SVGLength:P.b5,SVGLengthList:P.fX,SVGNumber:P.b7,SVGNumberList:P.hB,SVGPointList:P.hH,SVGStringList:P.ia,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.b9,SVGTransformList:P.im,AudioBuffer:P.fc,AudioParamMap:P.fd,AudioTrackList:P.ff,AudioContext:P.bN,webkitAudioContext:P.bN,BaseAudioContext:P.bN,OfflineAudioContext:P.hC,WebGLBuffer:P.da,WebGLFramebuffer:P.dp,WebGLProgram:P.dK,WebGLRenderbuffer:P.dO,WebGL2RenderingContext:P.c0,WebGLShader:P.dP,WebGLTexture:P.dU,WebGLUniformLocation:P.e1,SQLResultSetRowList:P.i1})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dD.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.dE.$nativeSuperclassTag="ArrayBufferView"
W.cY.$nativeSuperclassTag="EventTarget"
W.cZ.$nativeSuperclassTag="EventTarget"
W.d_.$nativeSuperclassTag="EventTarget"
W.d0.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.m1,[])
else S.m1([])})})()
//# sourceMappingURL=test.dart.js.map
