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
a[c]=function(){a[c]=function(){H.mD(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jw(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jf:function jf(){},
jN:function(){return new P.hg("No element")},
dp:function(a,b,c,d,e){if(c-b<=32)H.lt(a,b,c,d,e)
else H.ls(a,b,c,d,e)},
lt:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.T()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
ls:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.U(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.U(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.T()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.T()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.T()
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
if(J.P(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.av()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.T()
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
if(typeof g!=="number")return g.av()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.T()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.T()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.av()
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
H.dp(a2,a3,o-2,a5,a6)
H.dp(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.P(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.P(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.av()
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
break}}}H.dp(a2,o,n,a5,a6)}else H.dp(a2,o,n,a5,a6)},
U:function U(a){this.a=a},
eW:function eW(){},
d6:function d6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fo:function fo(a,b,c){this.a=a
this.b=b
this.$ti=c},
fp:function fp(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
i9:function i9(a,b,c){this.a=a
this.b=b
this.$ti=c},
ia:function ia(a,b,c){this.a=a
this.b=b
this.$ti=c},
bw:function bw(){},
dz:function dz(){},
dy:function dy(){},
bQ:function(a){var u,t=H.mE(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mm:function(a){return v.types[H.a2(a)]},
mr:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iB},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ai(a)
if(typeof u!=="string")throw H.f(H.bo(a))
return u},
ce:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cf:function(a){return H.ld(a)+H.jt(H.bp(a),0,null)},
ld:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.B||!!n.$ico){r=C.k(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bQ(t.length>1&&C.c.aN(t,0)===36?C.c.ay(t,1):t)},
jX:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lm:function(a){var u,t,s,r=H.d([],[P.q])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bo(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aQ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bo(s))}return H.jX(r)},
jY:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bo(s))
if(s<0)throw H.f(H.bo(s))
if(s>65535)return H.lm(a)}return H.jX(a)},
ll:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aQ(u,10))>>>0,56320|u&1023)}throw H.f(P.aL(a,0,1114111,null,null))},
bA:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lk:function(a){var u=H.bA(a).getFullYear()+0
return u},
li:function(a){var u=H.bA(a).getMonth()+1
return u},
le:function(a){var u=H.bA(a).getDate()+0
return u},
lf:function(a){var u=H.bA(a).getHours()+0
return u},
lh:function(a){var u=H.bA(a).getMinutes()+0
return u},
lj:function(a){var u=H.bA(a).getSeconds()+0
return u},
lg:function(a){var u=H.bA(a).getMilliseconds()+0
return u},
bq:function(a){throw H.f(H.bo(a))},
c:function(a,b){if(a==null)J.bT(a)
throw H.f(H.bM(a,b))},
bM:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,s,null)
u=H.a2(J.bT(a))
if(!(b<0)){if(typeof u!=="number")return H.bq(u)
t=b>=u}else t=!0
if(t)return P.N(b,a,s,null,u)
return P.dj(b,s)},
mg:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bB(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bB(a,c,!0,b,"end",u)
return new P.az(!0,b,"end",null)},
bo:function(a){return new P.az(!0,a,null,null)},
mc:function(a){if(typeof a!=="number")throw H.f(H.bo(a))
return a},
f:function(a){var u
if(a==null)a=new P.dd()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kB})
u.name=""}else u.toString=H.kB
return u},
kB:function(){return J.ai(this.dartException)},
w:function(a){throw H.f(a)},
u:function(a){throw H.f(P.bZ(a))},
aR:function(a){var u,t,s,r,q,p
a=H.kz(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hD(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k8:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jS:function(a,b){return new H.fR(a,b==null?null:b.method)},
jg:function(a,b){var u=b==null,t=u?null:b.method
return new H.fd(a,t,u?null:b.receiver)},
br:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aQ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jg(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jS(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kE()
q=$.kF()
p=$.kG()
o=$.kH()
n=$.kK()
m=$.kL()
l=$.kJ()
$.kI()
k=$.kN()
j=$.kM()
i=r.X(u)
if(i!=null)return f.$1(H.jg(H.Z(u),i))
else{i=q.X(u)
if(i!=null){i.method="call"
return f.$1(H.jg(H.Z(u),i))}else{i=p.X(u)
if(i==null){i=o.X(u)
if(i==null){i=n.X(u)
if(i==null){i=m.X(u)
if(i==null){i=l.X(u)
if(i==null){i=o.X(u)
if(i==null){i=k.X(u)
if(i==null){i=j.X(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jS(H.Z(u),i))}}return f.$1(new H.hP(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dr()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.az(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dr()
return a},
bO:function(a){var u
if(a==null)return new H.e8(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e8(a)},
mj:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
mq:function(a,b,c,d,e,f){H.m(a,"$ijb")
switch(H.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.v("Unsupported number of arguments for wrapped closure"))},
bL:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mq)
a.$identity=u
return u},
l_:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hh().constructor.prototype):Object.create(new H.bU(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aA
if(typeof t!=="number")return t.E()
$.aA=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jK(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kW(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jK(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kW:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mm,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jJ:H.j7
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
kX:function(a,b,c,d){var u=H.j7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jK:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kZ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kX(t,!r,u,b)
if(t===0){r=$.aA
if(typeof r!=="number")return r.E()
$.aA=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bV
return new Function(r+H.h(q==null?$.bV=H.eH("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aA
if(typeof r!=="number")return r.E()
$.aA=r+1
o+=r
r="return function("+o+"){return this."
q=$.bV
return new Function(r+H.h(q==null?$.bV=H.eH("self"):q)+"."+H.h(u)+"("+o+");}")()},
kY:function(a,b,c,d){var u=H.j7,t=H.jJ
switch(b?-1:a){case 0:throw H.f(H.lq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kZ:function(a,b){var u,t,s,r,q,p,o,n=$.bV
if(n==null)n=$.bV=H.eH("self")
u=$.jI
if(u==null)u=$.jI=H.eH("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kY(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.aA
if(typeof u!=="number")return u.E()
$.aA=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.aA
if(typeof u!=="number")return u.E()
$.aA=u+1
return new Function(n+u+"}")()},
jw:function(a,b,c,d,e,f,g){return H.l_(a,b,c,d,!!e,!!f,g)},
j7:function(a){return a.a},
jJ:function(a){return a.c},
eH:function(a){var u,t,s,r=new H.bU("self","target","receiver","name"),q=J.jd(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
I:function(a){if(a==null)H.m8("boolean expression must not be null")
return a},
Z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aS(a,"String"))},
nh:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aS(a,"double"))},
kv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aS(a,"num"))},
kp:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aS(a,"bool"))},
a2:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aS(a,"int"))},
kx:function(a,b){throw H.f(H.aS(a,H.bQ(H.Z(b).substring(2))))},
mx:function(a,b){throw H.f(H.kV(a,H.bQ(H.Z(b).substring(2))))},
m:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.kx(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.mx(a,b)},
ms:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ib)return a
if(u[b])return a
H.kx(a,b)},
kq:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a2(u)]
else return a.$S()}return},
eu:function(a,b){var u
if(typeof a=="function")return!0
u=H.kq(J.S(a))
if(u==null)return!1
return H.kg(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jq)return a
$.jq=!0
try{if(H.eu(a,b))return a
u=H.j1(b)
t=H.aS(a,u)
throw H.f(t)}finally{$.jq=!1}},
jx:function(a,b){if(a!=null&&!H.jv(a,b))H.w(H.aS(a,H.j1(b)))
return a},
aS:function(a,b){return new H.hF("TypeError: "+P.cX(a)+": type '"+H.h(H.kk(a))+"' is not a subtype of type '"+b+"'")},
kV:function(a,b){return new H.eI("CastError: "+P.cX(a)+": type '"+H.h(H.kk(a))+"' is not a subtype of type '"+b+"'")},
kk:function(a){var u,t=J.S(a)
if(!!t.$ibX){u=H.kq(t)
if(u!=null)return H.j1(u)
return"Closure"}return H.cf(a)},
m8:function(a){throw H.f(new H.ib(a))},
mD:function(a){throw H.f(new P.eP(a))},
lq:function(a){return new H.h3(a)},
kr:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bp:function(a){if(a==null)return
return a.$ti},
ni:function(a,b,c){return H.bP(a["$a"+H.h(c)],H.bp(b))},
cF:function(a,b,c,d){var u=H.bP(a["$a"+H.h(c)],H.bp(b))
return u==null?null:u[d]},
ay:function(a,b,c){var u=H.bP(a["$a"+H.h(b)],H.bp(a))
return u==null?null:u[c]},
y:function(a,b){var u=H.bp(a)
return u==null?null:u[b]},
j1:function(a){return H.bn(a,null)},
bn:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bQ(a[0].name)+H.jt(a,1,b)
if(typeof a=="function")return H.bQ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a2(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.h(b[t])}if('func' in a)return H.lI(a,b)
if('futureOr' in a)return"FutureOr<"+H.bn("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lI:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.c.E(p,a0[m])
l=u[q]
if(l!=null&&l!==P.K)p+=" extends "+H.bn(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bn(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bn(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bn(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mi(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.Z(n[g])
i=i+h+H.bn(d[c],a0)+(" "+H.h(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jt:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bn(p,c)}return"<"+u.i(0)+">"},
bP:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ju:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bp(a)
t=J.S(a)
if(t[b]==null)return!1
return H.kn(H.bP(t[d],u),null,c,null)},
p:function(a,b,c,d){if(a==null)return a
if(H.ju(a,b,c,d))return a
throw H.f(H.aS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bQ(b.substring(2))+H.jt(c,0,null),v.mangledGlobalNames)))},
kn:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ap(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ap(a[t],b,c[t],d))return!1
return!0},
nf:function(a,b,c){return a.apply(b,H.bP(J.S(b)["$a"+H.h(c)],H.bp(b)))},
kt:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="F"||a===-1||a===-2||H.kt(u)}return!1},
jv:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="F"||b===-1||b===-2||H.kt(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eu(a,b)}u=J.S(a).constructor
t=H.bp(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ap(u,null,b,null)},
G:function(a,b){if(a!=null&&!H.jv(a,b))throw H.f(H.aS(a,H.j1(b)))
return a},
ap:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ap(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ap("type" in a?a.type:l,b,s,d)
else if(H.ap(a,b,s,d))return!0
else{if(!('$i'+"c1" in t.prototype))return!1
r=t.prototype["$a"+"c1"]
q=H.bP(r,u?a.slice(1):l)
return H.ap(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.kg(a,b,c,d)
if('func' in a)return c.name==="jb"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kn(H.bP(m,u),b,p,d)},
kg:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ap(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ap(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ap(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ap(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mv(h,b,g,d)},
mv:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ap(c[s],d,a[s],b))return!1}return!0},
ng:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mt:function(a){var u,t,s,r,q=H.Z($.ks.$1(a)),p=$.iU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iZ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.Z($.km.$2(a,q))
if(q!=null){p=$.iU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iZ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j0(u)
$.iU[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iZ[q]=u
return u}if(s==="-"){r=H.j0(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kw(a,u)
if(s==="*")throw H.f(P.k9(q))
if(v.leafTags[q]===true){r=H.j0(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kw(a,u)},
kw:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jB(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j0:function(a){return J.jB(a,!1,null,!!a.$iB)},
mu:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j0(u)
else return J.jB(u,c,null,null)},
mo:function(){if(!0===$.jA)return
$.jA=!0
H.mp()},
mp:function(){var u,t,s,r,q,p,o,n
$.iU=Object.create(null)
$.iZ=Object.create(null)
H.mn()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ky.$1(q)
if(p!=null){o=H.mu(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mn:function(){var u,t,s,r,q,p,o=C.r()
o=H.bJ(C.t,H.bJ(C.u,H.bJ(C.l,H.bJ(C.l,H.bJ(C.v,H.bJ(C.w,H.bJ(C.x(C.k),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ks=new H.iW(r)
$.km=new H.iX(q)
$.ky=new H.iY(p)},
bJ:function(a,b){return a(b)||b},
l6:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.f7("Illegal RegExp pattern ("+String(p)+")",a))},
mA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mh:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kz:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kA:function(a,b,c){var u=H.mB(a,b,c)
return u},
mB:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kz(b),'g'),H.mh(c))},
hD:function hD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fR:function fR(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a){this.a=a},
j4:function j4(a){this.a=a},
e8:function e8(a){this.a=a
this.b=null},
bX:function bX(){},
hp:function hp(){},
hh:function hh(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hF:function hF(a){this.a=a},
eI:function eI(a){this.a=a},
h3:function h3(a){this.a=a},
ib:function ib(a){this.a=a},
R:function R(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fh:function fh(a,b){this.a=a
this.b=b
this.c=null},
d5:function d5(a,b){this.a=a
this.$ti=b},
fi:function fi(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
fc:function fc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cC:function(a){return a},
bm:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bM(b,a))},
lH:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mg(a,b,c))
return b},
cb:function cb(){},
da:function da(){},
ca:function ca(){},
db:function db(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
dc:function dc(){},
fP:function fP(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
mi:function(a){return J.jO(a?Object.keys(a):[],null)},
mE:function(a){return v.mangledGlobalNames[a]},
mw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iV:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jA==null){H.mo()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.k9("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jF()]
if(r!=null)return r
r=H.mt(a)
if(r!=null)return r
if(typeof a=="function")return C.D
u=Object.getPrototypeOf(a)
if(u==null)return C.o
if(u===Object.prototype)return C.o
if(typeof s=="function"){Object.defineProperty(s,$.jF(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
l5:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.j6(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aL(a,0,4294967295,"length",null))
return J.jO(new Array(a),b)},
jO:function(a,b){return J.jd(H.d(a,[b]))},
jd:function(a){a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d0.prototype
return J.d_.prototype}if(typeof a=="string")return J.by.prototype
if(a==null)return J.d1.prototype
if(typeof a=="boolean")return J.fb.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.K)return a
return J.iV(a)},
jy:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.K)return a
return J.iV(a)},
jz:function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.K)return a
return J.iV(a)},
mk:function(a){if(typeof a=="number")return J.c5.prototype
if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.co.prototype
return a},
ml:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.K)return a
return J.iV(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).m(a,b)},
ev:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mr(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jy(a).j(a,b)},
kS:function(a,b,c,d){return J.ml(a).fi(a,b,c,d)},
j5:function(a,b){return J.mk(a).ft(a,b)},
jH:function(a,b){return J.jz(a).v(a,b)},
kT:function(a,b){return J.jz(a).C(a,b)},
cI:function(a){return J.S(a).gG(a)},
bS:function(a){return J.jz(a).gL(a)},
bT:function(a){return J.jy(a).gk(a)},
ai:function(a){return J.S(a).i(a)},
a:function a(){},
fb:function fb(){},
d1:function d1(){},
d2:function d2(){},
fV:function fV(){},
co:function co(){},
bh:function bh(){},
aG:function aG(a){this.$ti=a},
je:function je(a){this.$ti=a},
aj:function aj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c5:function c5(){},
d0:function d0(){},
d_:function d_(){},
by:function by(){}},P={
ly:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.m9()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bL(new P.id(s),1)).observe(u,{childList:true})
return new P.ic(s,u,t)}else if(self.setImmediate!=null)return P.ma()
return P.mb()},
lz:function(a){self.scheduleImmediate(H.bL(new P.ie(H.l(a,{func:1,ret:-1})),0))},
lA:function(a){self.setImmediate(H.bL(new P.ig(H.l(a,{func:1,ret:-1})),0))},
lB:function(a){P.jk(C.h,H.l(a,{func:1,ret:-1}))},
jk:function(a,b){var u=C.e.U(a.a,1000)
return P.lE(u<0?0:u,b)},
k7:function(a,b){var u=C.e.U(a.a,1000)
return P.lF(u<0?0:u,b)},
lE:function(a,b){var u=new P.ee()
u.du(a,b)
return u},
lF:function(a,b){var u=new P.ee()
u.dv(a,b)
return u},
lC:function(a,b){var u,t,s
b.a=1
try{a.d_(new P.ip(b),new P.iq(b),null)}catch(s){u=H.br(s)
t=H.bO(s)
P.my(new P.ir(b,u,t))}},
ke:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.m(a.c,"$iao")
if(u>=4){t=b.ba()
b.a=a.a
b.c=a.c
P.cr(b,t)}else{t=H.m(b.c,"$iaU")
b.a=2
b.c=a
a.ca(t)}},
cr:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.m(g.c,"$ia8")
P.iQ(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cr(h.a,b)}g=h.a
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
if(m){H.m(q,"$ia8")
P.iQ(i,i,g.b,q.a,q.b)
return}l=$.Q
if(l!==n)$.Q=n
else l=i
g=b.c
if((g&15)===8)new P.iv(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.iu(u,b,q).$0()}else if((g&2)!==0)new P.it(h,u,b).$0()
if(l!=null)$.Q=l
g=u.b
if(!!J.S(g).$ic1){if(g.a>=4){k=H.m(o.c,"$iaU")
o.c=null
b=o.aP(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.ke(g,o)
return}}j=b.b
k=H.m(j.c,"$iaU")
j.c=null
b=j.aP(k)
g=u.a
p=u.b
if(!g){H.G(p,H.y(j,0))
j.a=4
j.c=p}else{H.m(p,"$ia8")
j.a=8
j.c=p}h.a=j
g=j}},
m4:function(a,b){if(H.eu(a,{func:1,args:[P.K,P.ac]}))return H.l(a,{func:1,ret:null,args:[P.K,P.ac]})
if(H.eu(a,{func:1,args:[P.K]}))return H.l(a,{func:1,ret:null,args:[P.K]})
throw H.f(P.j6(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m3:function(){var u,t
for(;u=$.bI,u!=null;){$.cE=null
t=u.b
$.bI=t
if(t==null)$.cD=null
u.a.$0()}},
m7:function(){$.jr=!0
try{P.m3()}finally{$.cE=null
$.jr=!1
if($.bI!=null)$.jG().$1(P.ko())}},
kj:function(a){var u=new P.dC(a)
if($.bI==null){$.bI=$.cD=u
if(!$.jr)$.jG().$1(P.ko())}else $.cD=$.cD.b=u},
m6:function(a){var u,t,s=$.bI
if(s==null){P.kj(a)
$.cE=$.cD
return}u=new P.dC(a)
t=$.cE
if(t==null){u.b=s
$.bI=$.cE=u}else{u.b=t.b
$.cE=t.b=u
if(u.b==null)$.cD=u}},
my:function(a){var u=null,t=$.Q
if(C.f===t){P.iS(u,u,C.f,a)
return}P.iS(u,u,t,H.l(t.bf(a),{func:1,ret:-1}))},
k5:function(a,b){var u=$.Q
if(u===C.f)return P.jk(a,H.l(b,{func:1,ret:-1}))
return P.jk(a,H.l(u.bf(b),{func:1,ret:-1}))},
k6:function(a,b){var u=$.Q
if(u===C.f)return P.k7(a,H.l(b,{func:1,ret:-1,args:[P.ag]}))
return P.k7(a,H.l(u.cl(b,P.ag),{func:1,ret:-1,args:[P.ag]}))},
iQ:function(a,b,c,d,e){var u={}
u.a=d
P.m6(new P.iR(u,e))},
kh:function(a,b,c,d,e){var u,t=$.Q
if(t===c)return d.$0()
$.Q=c
u=t
try{t=d.$0()
return t}finally{$.Q=u}},
ki:function(a,b,c,d,e,f,g){var u,t=$.Q
if(t===c)return d.$1(e)
$.Q=c
u=t
try{t=d.$1(e)
return t}finally{$.Q=u}},
m5:function(a,b,c,d,e,f,g,h,i){var u,t=$.Q
if(t===c)return d.$2(e,f)
$.Q=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Q=u}},
iS:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bf(d):c.fo(d,-1)
P.kj(d)},
id:function id(a){this.a=a},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
ee:function ee(){this.c=0},
iJ:function iJ(a,b){this.a=a
this.b=b},
iI:function iI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aU:function aU(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ao:function ao(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
io:function io(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iw:function iw(a){this.a=a},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a){this.a=a
this.b=null},
hk:function hk(){},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
ci:function ci(){},
hl:function hl(){},
ag:function ag(){},
a8:function a8(a,b){this.a=a
this.b=b},
iL:function iL(){},
iR:function iR(a,b){this.a=a
this.b=b},
iB:function iB(){},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
iC:function iC(a,b){this.a=a
this.b=b},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
l7:function(a,b){return new H.R([a,b])},
l8:function(a){return H.mj(a,new H.R([null,null]))},
l9:function(a){return new P.iz([a])},
jp:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lD:function(a,b,c){var u=new P.dR(a,b,[c])
u.c=a.e
return u},
l4:function(a,b,c){var u,t
if(P.js(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.k])
C.a.h($.ae,a)
try{P.lJ(a,u)}finally{if(0>=$.ae.length)return H.c($.ae,-1)
$.ae.pop()}t=P.k3(b,H.ms(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
jc:function(a,b,c){var u,t
if(P.js(a))return b+"..."+c
u=new P.bj(b)
C.a.h($.ae,a)
try{t=u
t.a=P.k3(t.a,a,", ")}finally{if(0>=$.ae.length)return H.c($.ae,-1)
$.ae.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
js:function(a){var u,t
for(u=$.ae.length,t=0;t<u;++t)if(a===$.ae[t])return!0
return!1},
lJ:function(a,b){var u,t,s,r,q,p,o,n=a.gL(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.h(n.gH(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gH(n);++l
if(!n.u()){if(l<=4){C.a.h(b,H.h(r))
return}t=H.h(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gH(n);++l
for(;n.u();r=q,q=p){p=n.gH(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.h(r)
t=H.h(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
jP:function(a){var u,t={}
if(P.js(a))return"{...}"
u=new P.bj("")
try{C.a.h($.ae,a)
u.a+="{"
t.a=!0
J.kT(a,new P.fn(t,u))
u.a+="}"}finally{if(0>=$.ae.length)return H.c($.ae,-1)
$.ae.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iz:function iz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cs:function cs(a){this.a=a
this.c=this.b=null},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fj:function fj(){},
t:function t(){},
fm:function fm(){},
fn:function fn(a,b){this.a=a
this.b=b},
a4:function a4(){},
iF:function iF(){},
dS:function dS(){},
bY:function bY(){},
cR:function cR(){},
eX:function eX(){},
hS:function hS(){},
hT:function hT(){},
iK:function iK(a){this.b=0
this.c=a},
l2:function(a){if(a instanceof H.bX)return a.i(0)
return"Instance of '"+H.h(H.cf(a))+"'"},
la:function(a,b,c){var u,t=J.l5(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.l(t,u,b)
return H.p(t,"$ib",[c],"$ab")},
jh:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bS(a);u.u();)C.a.h(s,H.G(u.gH(u),c))
if(b)return s
return H.p(J.jd(s),"$ib",t,"$ab")},
jj:function(a){var u,t
if(a.constructor===Array){H.p(a,"$iaG",[P.q],"$aaG")
u=a.length
t=P.k_(0,null,u)
return H.jY(t<u?C.a.dc(a,0,t):a)}return P.lu(a,0,null)},
lu:function(a,b,c){var u,t,s=J.bS(a)
for(u=0;u<b;++u)if(!s.u())throw H.f(P.aL(b,0,u,null,null))
t=[]
for(;s.u();)t.push(s.gH(s))
return H.jY(t)},
ln:function(a){return new H.fc(a,H.l6(a,!1,!0,!1,!1,!1))},
k3:function(a,b,c){var u=J.bS(b)
if(!u.u())return a
if(c.length===0){do a+=H.h(u.gH(u))
while(u.u())}else{a+=H.h(u.gH(u))
for(;u.u();)a=a+c+H.h(u.gH(u))}return a},
lG:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.m){u=$.kR().b
u=u.test(b)}else u=!1
if(u)return b
t=C.z.fu(H.G(b,H.ay(c,"bY",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ll(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l0:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cS:function(a){if(a>=10)return""+a
return"0"+a},
ja:function(a){return new P.bd(1000*a)},
cX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ai(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l2(a)},
kU:function(a){return new P.az(!1,null,null,a)},
j6:function(a,b,c){return new P.az(!0,a,b,c)},
dj:function(a,b){return new P.bB(null,null,!0,a,b,"Value not in range")},
aL:function(a,b,c,d,e){return new P.bB(b,c,!0,a,d,"Invalid value")},
k_:function(a,b,c){if(0>a||a>c)throw H.f(P.aL(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aL(b,a,c,"end",null))
return b}return c},
jZ:function(a,b){if(typeof a!=="number")return a.av()
if(a<0)throw H.f(P.aL(a,0,null,b,null))},
N:function(a,b,c,d,e){var u=H.a2(e==null?J.bT(b):e)
return new P.fa(u,!0,a,c,"Index out of range")},
ad:function(a){return new P.hQ(a)},
k9:function(a){return new P.hO(a)},
bZ:function(a){return new P.eK(a)},
v:function(a){return new P.dK(a)},
jD:function(a){H.mw(a)},
a7:function a7(){},
bb:function bb(a,b){this.a=a
this.b=b},
z:function z(){},
bd:function bd(a){this.a=a},
eU:function eU(){},
eV:function eV(){},
be:function be(){},
eA:function eA(){},
dd:function dd(){},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fa:function fa(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hQ:function hQ(a){this.a=a},
hO:function hO(a){this.a=a},
hg:function hg(a){this.a=a},
eK:function eK(a){this.a=a},
fU:function fU(){},
dr:function dr(){},
eP:function eP(a){this.a=a},
dK:function dK(a){this.a=a},
f7:function f7(a,b){this.a=a
this.b=b},
q:function q(){},
i:function i(){},
aF:function aF(){},
b:function b(){},
A:function A(){},
F:function F(){},
a3:function a3(){},
K:function K(){},
ac:function ac(){},
k:function k(){},
bj:function bj(a){this.a=a},
mf:function(a){var u,t=J.S(a)
if(!!t.$ibf){u=t.gco(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ej(a.data,a.height,a.width)},
me:function(a){if(a instanceof P.ej)return{data:a.a,height:a.b,width:a.c}
return a},
b3:function(a){var u,t,s,r,q
if(a==null)return
u=P.l7(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.Z(t[r])
u.l(0,q,a[q])}return u},
md:function(a){var u={}
a.C(0,new P.iT(u))
return u},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
f3:function f3(a,b){this.a=a
this.b=b},
f4:function f4(){},
f5:function f5(){},
iA:function iA(){},
ak:function ak(){},
aV:function aV(){},
ff:function ff(){},
b_:function b_(){},
fS:function fS(){},
fX:function fX(){},
ho:function ho(){},
n:function n(){},
b0:function b0(){},
hC:function hC(){},
dP:function dP(){},
dQ:function dQ(){},
e_:function e_(){},
e0:function e0(){},
ea:function ea(){},
eb:function eb(){},
eh:function eh(){},
ei:function ei(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(a){this.a=a},
eF:function eF(){},
bt:function bt(){},
fT:function fT(){},
dD:function dD(){},
cL:function cL(){},
di:function di(){},
bC:function bC(){},
dm:function dm(){},
dt:function dt(){},
dx:function dx(){},
hf:function hf(){},
e6:function e6(){},
e7:function e7(){}},W={
j8:function(){var u=document.createElement("canvas")
return u},
jM:function(a){H.m(a,"$ie")
return"wheel"},
iy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kf:function(a,b,c,d){var u=W.iy(W.iy(W.iy(W.iy(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d,e){var u=W.kl(new W.im(c),W.j)
if(u!=null&&!0)J.kS(a,b,u,!1)
return new W.il(a,b,u,!1,[e])},
kl:function(a,b){var u=$.Q
if(u===C.f)return a
return u.cl(a,b)},
o:function o(){},
ew:function ew(){},
ey:function ey(){},
ez:function ez(){},
cK:function cK(){},
bu:function bu(){},
bW:function bW(){},
b9:function b9(){},
c_:function c_(){},
eL:function eL(){},
L:function L(){},
c0:function c0(){},
eM:function eM(){},
aB:function aB(){},
aC:function aC(){},
eN:function eN(){},
eO:function eO(){},
eQ:function eQ(){},
cT:function cT(){},
eR:function eR(){},
cU:function cU(){},
cV:function cV(){},
eS:function eS(){},
eT:function eT(){},
ii:function ii(a,b){this.a=a
this.b=b},
V:function V(){},
j:function j(){},
e:function e(){},
aD:function aD(){},
f1:function f1(){},
f2:function f2(){},
f6:function f6(){},
aE:function aE(){},
f9:function f9(){},
bx:function bx(){},
bf:function bf(){},
c2:function c2(){},
aH:function aH(){},
fk:function fk(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(a){this.a=a},
fG:function fG(){},
fH:function fH(a){this.a=a},
aJ:function aJ(){},
fI:function fI(){},
a0:function a0(){},
ih:function ih(a){this.a=a},
C:function C(){},
cc:function cc(){},
aK:function aK(){},
fW:function fW(){},
h1:function h1(){},
h2:function h2(a){this.a=a},
h4:function h4(){},
aM:function aM(){},
hd:function hd(){},
aN:function aN(){},
he:function he(){},
aO:function aO(){},
hi:function hi(){},
hj:function hj(a){this.a=a},
av:function av(){},
aP:function aP(){},
aw:function aw(){},
hq:function hq(){},
hr:function hr(){},
hx:function hx(){},
aQ:function aQ(){},
ax:function ax(){},
hA:function hA(){},
hB:function hB(){},
bl:function bl(){},
hR:function hR(){},
i7:function i7(){},
aT:function aT(){},
cq:function cq(){},
ij:function ij(){},
dF:function dF(){},
ix:function ix(){},
dX:function dX(){},
iG:function iG(){},
iH:function iH(){},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
il:function il(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
im:function im(a){this.a=a},
x:function x(){},
cZ:function cZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
dE:function dE(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dY:function dY(){},
dZ:function dZ(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
cx:function cx(){},
cy:function cy(){},
e4:function e4(){},
e5:function e5(){},
e9:function e9(){},
ec:function ec(){},
ed:function ed(){},
cz:function cz(){},
cA:function cA(){},
ef:function ef(){},
eg:function eg(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){}},O={
j9:function(a){var u=new O.T([a])
u.bL(a)
return u},
T:function T(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c7:function c7(){this.b=this.a=null},
d8:function d8(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fx:function fx(a,b){this.a=a
this.b=b},
fy:function fy(){},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(){},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fr:function fr(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c6:function c6(){},
fs:function fs(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aI:function aI(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fu:function fu(){var _=this
_.e=_.d=_.c=_.b=null},
fv:function fv(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fw:function fw(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bD:function bD(){}},E={
lp:function(a,b){var u=new E.fY(a)
u.di(a,b)
return u},
lv:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibu)return E.k4(a,!0,!0,!0,!1)
u=W.j8()
t=u.style
t.width="100%"
t.height="100%"
s.gcm(a).h(0,u)
return E.k4(u,!0,!0,!0,!1)},
k4:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.du(),j=H.m(C.n.bD(a,"webgl2",P.l8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibC")
if(j==null)H.w(P.v("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lp(j,a)
u=new T.hu(j)
u.b=H.a2(j.getParameter(3379))
H.a2(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dA(a)
t=new X.fe()
t.seQ(P.l9(P.q))
u.b=t
t=new X.fJ(u)
t.f=0
t.r=V.dg()
t.x=V.dg()
t.ch=t.Q=1
u.c=t
t=new X.fl(u)
t.r=0
t.x=V.dg()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hz(u)
t.f=V.dg()
t.r=V.dg()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sdP(H.d([],[[P.ci,P.K]]))
t=u.z
s=document
r=W.a0
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.Y(s,"contextmenu",H.l(u.ged(),q),!1,r))
t=u.z
p=W.j
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.Y(a,"focus",H.l(u.gej(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.Y(a,"blur",H.l(u.ge7(),o),!1,p))
t=u.z
n=W.aH
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.Y(s,"keyup",H.l(u.gen(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.Y(s,"keydown",H.l(u.gel(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.Y(a,"mousedown",H.l(u.ger(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.Y(a,"mouseup",H.l(u.gew(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.Y(a,l,H.l(u.geu(),q),!1,r))
n=u.z
W.jM(a)
m=W.aT;(n&&C.a).h(n,W.Y(a,H.Z(W.jM(a)),H.l(u.gey(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.Y(s,l,H.l(u.gef(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.Y(s,"mouseup",H.l(u.geh(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.Y(s,"pointerlockchange",H.l(u.geA(),o),!1,p))
p=u.z
o=W.ax
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.Y(a,"touchstart",H.l(u.geL(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.Y(a,"touchend",H.l(u.geH(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.Y(a,"touchmove",H.l(u.geJ(),s),!1,o))
k.Q=!0
k.ch=!1
k.cx=new P.bb(Date.now(),!1)
k.cy=0
k.cc()
return k},
eG:function eG(){},
ab:function ab(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fY:function fY(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fZ:function fZ(a){this.a=a},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
du:function du(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hw:function hw(a){this.a=a}},Z={
jn:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cC(c)),35044)
a.bindBuffer(b,null)
return new Z.dB(b,u)},
an:function(a){return new Z.b2(a)},
dB:function dB(a,b){this.a=a
this.b=b},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i8:function i8(a){this.a=a},
cN:function cN(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a}},D={
ar:function(){var u=new D.bv()
u.sa4(null)
u.saA(null)
u.c=null
u.d=0
return u},
eJ:function eJ(){},
bv:function bv(){var _=this
_.d=_.c=_.b=_.a=null},
eZ:function eZ(a){this.a=a},
f_:function f_(a){this.a=a},
D:function D(){this.b=null},
c3:function c3(a){this.b=null
this.$ti=a},
c4:function c4(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bc:function bc(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a_:function a_(){},
d4:function d4(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
df:function df(){},
dq:function dq(){}},X={cO:function cO(a,b){this.a=a
this.b=b},d3:function d3(a,b){this.a=a
this.b=b},fe:function fe(){this.d=this.b=this.a=null},fl:function fl(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},fJ:function fJ(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hz:function hz(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dA:function dA(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l3:function(a){var u=new X.f8(),t=V.bK(1)
u.a=new V.ba(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.k0
if(t==null){t=V.lo(0,0,1,1)
$.k0=t}u.r=t
return u},
cP:function cP(){},
f8:function f8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){}},V={
bK:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jE:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.d7(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.c.Y("null",c)
return C.c.Y(C.d.d0(Math.abs(a-0)<$.J().a?0:a,b),c+b+1)},
bN:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.E(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.l(p,q,C.c.Y(p[q],t))}return p},
jC:function(a){return C.d.hi(Math.pow(2,C.C.br(Math.log(H.mc(a))/Math.log(2))))},
ji:function(){var u=$.jR
return u==null?$.jR=V.aY(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aY:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jQ:function(a,b,c){var u=c.A(0,Math.sqrt(c.I(c))),t=b.aD(u),s=t.A(0,Math.sqrt(t.I(t))),r=u.aD(s),q=new V.H(a.a,a.b,a.c),p=s.aw(0).I(q),o=r.aw(0).I(q),n=u.aw(0).I(q)
return V.aY(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
dg:function(){var u=$.jV
return u==null?$.jV=new V.af(0,0):u},
jW:function(){var u=$.cd
return u==null?$.cd=new V.as(0,0,0):u},
lo:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dk(a,b,c,d)},
cp:function(){var u=$.kc
return u==null?$.kc=new V.H(0,0,0):u},
lw:function(){var u=$.hU
return u==null?$.hU=new V.H(-1,0,0):u},
jm:function(){var u=$.hV
return u==null?$.hV=new V.H(0,1,0):u},
lx:function(){var u=$.hW
return u==null?$.hW=new V.H(0,0,1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(a){this.a=a},
d9:function d9(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aa:function aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
af:function af(a,b){this.a=a
this.b=b},
as:function as(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
a5:function(a){var u=new V.h5()
u.dj(a)
return u},
ex:function ex(){},
aX:function aX(){},
d7:function d7(){},
aZ:function aZ(){this.a=null},
h5:function h5(){this.a=null},
ch:function ch(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
ck:function ck(a){this.b=a
this.c=null},
hy:function hy(){this.c=this.b=this.a=null},
cl:function cl(a){this.b=a
this.a=this.c=null},
mz:function(a){P.k6(C.A,new V.j2(a))},
lr:function(a){var u=new V.h9()
u.dl(a,!0)
return u},
j2:function j2(a){this.a=a},
h9:function h9(){this.b=this.a=null},
hb:function hb(a){this.a=a},
ha:function ha(a){this.a=a}},U={
jL:function(a){var u=new U.cQ()
u.a=a
return u},
cQ:function cQ(){this.b=this.a=null},
bz:function bz(){},
dl:function dl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cW:function cW(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lb:function(a,b){var u=a.af,t=new A.fq(b,u)
t.dk(b,u)
t.dh(a,b)
return t},
lc:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.ga1(a0)+a1.ga1(a1)+a2.ga1(a2)+a3.ga1(a3)+a4.ga1(a4)+a5.ga1(a5)+a6.ga1(a6)+a7.ga1(a7)+a8.ga1(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.u)(a9),++t)f+="_"+H.h(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.u)(b0),++t)f+="_"+H.h(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.u)(b1),++t)f+="_"+H.h(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.b7()
if(l){u=$.b6()
g=new Z.b2(g.a|u.a)}if(k){u=$.b5()
g=new Z.b2(g.a|u.a)}if(j){u=$.b8()
g=new Z.b2(g.a|u.a)}if(i){u=$.b4()
g=new Z.b2(g.a|u.a)}return new A.ft(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
iO:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
iP:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.iO(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.j3(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
lN:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iO(b,t,"emission")
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
lK:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iP(b,t,"ambient")
b.a+="\n"},
lL:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iP(b,t,"diffuse")
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
lO:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iP(b,t,"invDiffuse")
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
lU:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iP(b,t,"specular")
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
lQ:function(a,b){var u,t,s
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
lS:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iO(b,t,"reflect")
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
lT:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iO(b,t,"refract")
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
lM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.h(u)
s=A.j3(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a7()
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
r=[P.k]
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
c.a+="      highLight = intensity*("+C.a.p(m," + ")+");\n"}else c.a+="   highLight = "+C.a.p(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.p(o," + ")+");\n"
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
lR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.h(u)
s=A.j3(t)
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
if(typeof u!=="number")return u.a7()
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
c.a=r+"\n"}r=[P.k]
l=H.d([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.p(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.p(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.p(l," + ")+");\n"
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
lV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.h(u)
s=A.j3(t)
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
if(typeof u!=="number")return u.a7()
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
c.a=u+"\n"}u=[P.k]
j=H.d([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.p(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.p(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.p(j," + ")+");\n"
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
lP:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.k])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.p(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lW:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bj("")
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
A.lN(a,j)
A.lK(a,j)
A.lL(a,j)
A.lO(a,j)
A.lU(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.lS(a,j)
A.lT(a,j)}A.lQ(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.lM(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.lR(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.lV(a,q[o],j)
A.lP(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.k])
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
j.a+=m+(r[0].toUpperCase()+C.c.ay(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.ay(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.ay(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.p(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lX:function(a,b){var u,t,s
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
lZ:function(a,b){var u
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
lY:function(a,b){var u
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
m0:function(a,b){var u,t
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
m1:function(a,b){var u,t
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
m_:function(a,b){var u
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
m2:function(a,b){var u
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
j3:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.c.ay(a,1)},
jl:function(a,b,c,d,e){var u=new A.hH(a,c,e)
u.f=d
u.sfg(P.la(d,0,P.q))
return u},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a,b){var _=this
_.hr=_.cs=_.cr=_.cq=_.af=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hz=_.hy=_.hx=_.bq=_.bp=_.bo=_.bn=_.bm=_.bl=_.hw=_.cG=_.cF=_.hv=_.cE=_.cD=_.cC=_.hu=_.cB=_.cA=_.cz=_.ht=_.cw=_.cv=_.hs=_.cu=_.ct=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aq:function aq(a,b){this.a=a
this.b=b},
at:function at(a,b){this.a=a
this.b=b},
au:function au(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.af=b3
_.cq=b4},
bE:function bE(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bF:function bF(a,b,c,d,e,f,g,h,i,j){var _=this
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
bH:function bH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cg:function cg(){},
dw:function dw(){},
hM:function hM(a){this.a=a},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
hJ:function hJ(a,b,c){this.a=a
this.c=b
this.d=c},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c},
hL:function hL(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
hI:function hI(a,b,c){this.a=a
this.c=b
this.d=c},
O:function O(a,b,c){this.a=a
this.c=b
this.d=c},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
hN:function hN(a,b,c){this.a=a
this.c=b
this.d=c},
cn:function cn(a,b,c){this.a=a
this.c=b
this.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
a6:function a6(a,b,c){this.a=a
this.c=b
this.d=c},
bG:function bG(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iN:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cB:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.H(h,g+a1,f+a2)
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
j.d=i}m=F.iN(i)
l=F.iN(j.b)
k=F.mC(d,a0,new F.iM(j,F.iN(j.c),F.iN(j.d),l,m,c),b)
if(k!=null)a.bw(k)},
mC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.k2()
t=H.d([],[F.am])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cj(new V.ba(p,0,0,1),new V.af(r,1))
c.$3(o,r,0)
C.a.h(t,o.bk(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cj(new V.ba(j,i,h,1),new V.af(r,m))
c.$3(o,r,n)
C.a.h(t,o.bk(d))}}u.d.fj(a+1,b+1,t)
return u},
cY:function(a,b,c){var u=new F.X(),t=a.a
if(t==null)H.w(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.w(P.v("May not create a face with vertices attached to different shapes."))
u.f0(a)
u.f1(b)
u.f2(c)
C.a.h(u.a.a.d.b,u)
u.a.a.P()
return u},
k2:function(){var u=new F.dn(),t=new F.hX(u)
t.b=!1
t.sfh(H.d([],[F.am]))
u.a=t
t=new F.h8(u)
t.sb8(H.d([],[F.bi]))
u.b=t
t=new F.h7(u)
t.sdX(H.d([],[F.aW]))
u.c=t
t=new F.h6(u)
t.sdQ(H.d([],[F.X]))
u.d=t
u.e=null
return u},
kd:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.am(),r=new F.i4()
r.sb8(H.d([],[F.bi]))
s.b=r
r=new F.i0()
u=[F.aW]
r.sdY(H.d([],u))
r.sdZ(H.d([],u))
s.c=r
r=new F.hY()
u=[F.X]
r.sdR(H.d([],u))
r.sdS(H.d([],u))
r.sdT(H.d([],u))
s.d=r
h=$.kO()
s.e=0
r=$.b7()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b6().a)!==0?e:t
s.x=(u&$.b5().a)!==0?b:t
s.y=(u&$.b8().a)!==0?f:t
s.z=(u&$.bs().a)!==0?g:t
s.Q=(u&$.kP().a)!==0?c:t
s.ch=(u&$.bR().a)!==0?i:0
s.cx=(u&$.b4().a)!==0?a:t
return s},
iM:function iM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
X:function X(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f0:function f0(){},
hc:function hc(){},
aW:function aW(){this.b=this.a=null},
fg:function fg(){},
hG:function hG(){},
bi:function bi(){this.a=null},
dn:function dn(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a){this.a=a
this.b=null},
h7:function h7(a){this.a=a
this.b=null},
h8:function h8(a){this.a=a
this.b=null},
am:function am(){var _=this
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
i0:function i0(){this.c=this.b=null},
i2:function i2(){},
i1:function i1(){},
i3:function i3(){},
fQ:function fQ(){},
i4:function i4(){this.b=null}},T={cj:function cj(){},bk:function bk(){},hs:function hs(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},ht:function ht(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hu:function hu(a){var _=this
_.a=a
_.e=_.d=_.b=null},hv:function hv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
ku:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e=V.lr("Test 039"),d=W.j8()
d.className="pageLargeCanvas"
d.id=g
e.a.appendChild(d)
u=[P.k]
e.ck(H.d(["Test of an animated texture on a square."],u))
e.ck(H.d(["\xab[Back to Tests|../]"],u))
t=document.getElementById(g)
if(t==null)H.w(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.lv(t,!0,!0,!0,!1)
r=new E.ab()
r.a=""
r.b=!0
e=E.ab
r.sdH(0,O.j9(e))
r.y.aX(r.gfT(),r.gfW())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbF(0,f)
r.saH(f)
q=F.k2()
F.cB(q,f,f,1,1,1,0,0,1)
F.cB(q,f,f,1,1,0,1,0,3)
F.cB(q,f,f,1,1,0,0,1,2)
F.cB(q,f,f,1,1,-1,0,0,0)
F.cB(q,f,f,1,1,0,-1,0,0)
F.cB(q,f,f,1,1,0,0,-1,3)
q.ao()
q.fS(new F.i1(),new F.fQ())
r.sbF(0,q)
u=new U.dl()
u.r=u.f=u.e=u.d=u.c=u.b=u.a=0
u.sd5(0)
u.scQ(0,0)
u.scW(0)
p=u.d
if(!(Math.abs(p-0.1)<$.J().a)){u.d=0.1
p=new D.M("deltaYaw",p,0.1,[P.z])
p.b=!0
u.am(p)}p=u.e
if(!(Math.abs(p-0.21)<$.J().a)){u.e=0.21
p=new D.M("deltaPitch",p,0.21,[P.z])
p.b=!0
u.am(p)}p=u.f
if(!(Math.abs(p-0.32)<$.J().a)){u.f=0.32
p=new D.M("deltaRoll",p,0.32,[P.z])
p.b=!0
u.am(p)}r.saH(u)
u=T.bk
p=P.jh([s.f.ar("../resources/diceColor/posx.png"),s.f.ar("../resources/diceColor/posz.png"),s.f.ar("../resources/diceColor/negx.png"),s.f.ar("../resources/diceColor/negy.png"),s.f.ar("../resources/diceColor/posy.png"),s.f.ar("../resources/diceColor/negz.png")],!0,u)
o=new T.hs()
o.b=o.a=0
o.sfd(H.p(p,"$ib",[u],"$ab"))
o.f=null
P.k6(P.ja(500),new N.j_(o))
n=new O.d8()
n.sdE(O.j9(V.aa))
n.e.aX(n.ge3(),n.ge5())
u=new O.aI(n,"emission")
u.c=new A.a9(!1,!1,!1)
u.f=new V.W(0,0,0)
n.f=u
u=new O.aI(n,"ambient")
u.c=new A.a9(!1,!1,!1)
u.f=new V.W(0,0,0)
n.r=u
u=new O.aI(n,"diffuse")
u.c=new A.a9(!1,!1,!1)
u.f=new V.W(0,0,0)
n.x=u
u=new O.aI(n,"invDiffuse")
u.c=new A.a9(!1,!1,!1)
u.f=new V.W(0,0,0)
n.y=u
u=new O.fw(n,"specular")
u.c=new A.a9(!1,!1,!1)
u.f=new V.W(0,0,0)
u.ch=100
n.z=u
u=new O.fs(n,"bump")
u.c=new A.a9(!1,!1,!1)
n.Q=u
n.ch=null
u=new O.aI(n,"reflect")
u.c=new A.a9(!1,!1,!1)
u.f=new V.W(0,0,0)
n.cx=u
u=new O.fv(n,"refract")
u.c=new A.a9(!1,!1,!1)
u.f=new V.W(0,0,0)
u.ch=1
n.cy=u
u=new O.fr(n,"alpha")
u.c=new A.a9(!1,!1,!1)
u.f=1
n.db=u
u=new D.d4()
u.bL(D.a_)
u.sdN(H.d([],[D.bc]))
u.seN(H.d([],[D.df]))
u.sf9(H.d([],[D.dq]))
u.y=u.x=null
u.bE(u.ge1(),u.geD(),u.geF())
n.dx=u
p=new O.fu()
p.b=new V.ba(0,0,0,0)
p.c=1
p.d=10
p.e=!1
n.dy=p
p=u.x
u=p==null?u.x=D.ar():p
u.h(0,n.geW())
u=n.dx
p=u.y
u=p==null?u.y=D.ar():p
u.h(0,n.gaM())
n.fr=null
u=n.dx
m=V.jm()
p=U.jL(V.jQ(V.jW(),m,new V.H(1,-1,-3)))
l=new V.W(1,1,1)
k=new D.bc()
k.c=new V.W(1,1,1)
k.a=V.lx()
k.d=V.jm()
k.e=V.lw()
j=k.b
k.b=p
p.gt().h(0,k.gdm())
p=new D.M("mover",j,k.b,[U.bz])
p.b=!0
k.a8(p)
if(!k.c.m(0,l)){j=k.c
k.c=l
p=new D.M("color",j,l,[V.W])
p.b=!0
k.a8(p)}u.h(0,k)
n.r.saS(0,new V.W(V.bK(0.2),V.bK(0.2),V.bK(0.2)))
n.x.saS(0,new V.W(V.bK(0.8),V.bK(0.8),V.bK(0.8)))
n.r.scZ(o)
n.x.scZ(o)
u=new M.cW()
u.a=!0
u.sdq(0,O.j9(e))
u.e.aX(u.ge9(),u.geb())
u.y=u.x=u.r=u.f=null
i=X.l3(f)
h=new X.de()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.saH(f)
e=h.c
if(!(Math.abs(e-1.0471975511965976)<$.J().a)){h.c=1.0471975511965976
e=new D.M("fov",e,1.0471975511965976,[P.z])
e.b=!0
h.ak(e)}e=h.d
if(!(Math.abs(e-0.1)<$.J().a)){h.d=0.1
e=new D.M("near",e,0.1,[P.z])
e.b=!0
h.ak(e)}e=h.e
if(!(Math.abs(e-2000)<$.J().a)){h.e=2000
e=new D.M("far",e,2000,[P.z])
e.b=!0
h.ak(e)}e=u.b
if(e!==h){if(e!=null)e.gt().B(0,u.ga3())
j=u.b
u.b=h
h.gt().h(0,u.ga3())
e=new D.M("camera",j,u.b,[X.cP])
e.b=!0
u.a9(e)}e=u.c
if(e!==i){if(e!=null)e.gt().B(0,u.ga3())
j=u.c
u.c=i
i.gt().h(0,u.ga3())
e=new D.M("target",j,u.c,[X.ds])
e.b=!0
u.a9(e)}u.scY(f)
u.scY(n)
u.e.h(0,r)
u.b.saH(U.jL(V.aY(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=s.d
if(e!==u){if(e!=null)e.gt().B(0,s.gbM())
s.d=u
u.gt().h(0,s.gbM())
s.bN()}V.mz(s)},
j_:function j_(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jf.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gG:function(a){return H.ce(a)},
i:function(a){return"Instance of '"+H.h(H.cf(a))+"'"}}
J.fb.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ia7:1}
J.d1.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.d2.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.fV.prototype={}
J.co.prototype={}
J.bh.prototype={
i:function(a){var u=a[$.kD()]
if(u==null)return this.de(a)
return"JavaScript function for "+H.h(J.ai(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijb:1}
J.aG.prototype={
h:function(a,b){H.G(b,H.y(a,0))
if(!!a.fixed$length)H.w(P.ad("add"))
a.push(b)},
cU:function(a,b){if(!!a.fixed$length)H.w(P.ad("removeAt"))
if(b<0||b>=a.length)throw H.f(P.dj(b,null))
return a.splice(b,1)[0]},
B:function(a,b){var u
if(!!a.fixed$length)H.w(P.ad("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bZ(a))}},
p:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.h(a[u]))
return t.join(b)},
fP:function(a){return this.p(a,"")},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
dc:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aL(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aL(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.y(a,0)])
return H.d(a.slice(b,c),[H.y(a,0)])},
gfJ:function(a){if(a.length>0)return a[0]
throw H.f(H.jN())},
gbt:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.jN())},
aY:function(a,b){var u=H.y(a,0)
H.l(b,{func:1,ret:P.q,args:[u,u]})
if(!!a.immutable$list)H.w(P.ad("sort"))
H.dp(a,0,a.length-1,b,u)},
a5:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
i:function(a){return P.jc(a,"[","]")},
gL:function(a){return new J.aj(a,a.length,[H.y(a,0)])},
gG:function(a){return H.ce(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.w(P.ad("set length"))
if(b<0)throw H.f(P.aL(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.f(H.bM(a,b))
return a[b]},
l:function(a,b,c){H.G(c,H.y(a,0))
if(!!a.immutable$list)H.w(P.ad("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bM(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.je.prototype={}
J.aj.prototype={
gH:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.u(s))
u=t.c
if(u>=r){t.sbQ(null)
return!1}t.sbQ(s[u]);++t.c
return!0},
sbQ:function(a){this.d=H.G(a,H.y(this,0))},
$iaF:1}
J.c5.prototype={
ft:function(a,b){var u
H.kv(b)
if(typeof b!=="number")throw H.f(H.bo(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gaT(b)
if(this.gaT(a)===u)return 0
if(this.gaT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaT:function(a){return a===0?1/a<0:a<0},
hi:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.ad(""+a+".toInt()"))},
br:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ad(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ad(""+a+".round()"))},
d0:function(a,b){var u
if(b>20)throw H.f(P.aL(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaT(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
d7:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dg:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cf(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.cf(a,b)},
cf:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ad("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
aQ:function(a,b){var u
if(a>0)u=this.f7(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
f7:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia3:1}
J.d0.prototype={$iq:1}
J.d_.prototype={}
J.by.prototype={
bj:function(a,b){if(b<0)throw H.f(H.bM(a,b))
if(b>=a.length)H.w(H.bM(a,b))
return a.charCodeAt(b)},
aN:function(a,b){if(b>=a.length)throw H.f(H.bM(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.f(P.j6(b,null,null))
return a+b},
bH:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dj(b,null))
if(b>c)throw H.f(P.dj(b,null))
if(c>a.length)throw H.f(P.dj(c,null))
return a.substring(b,c)},
ay:function(a,b){return this.bH(a,b,null)},
N:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.y)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
Y:function(a,b){var u=b-a.length
if(u<=0)return a
return this.N(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ijT:1,
$ik:1}
H.U.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.c.bj(this.a,b)},
$adz:function(){return[P.q]},
$at:function(){return[P.q]},
$ai:function(){return[P.q]},
$ab:function(){return[P.q]}}
H.eW.prototype={}
H.d6.prototype={
gH:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.jy(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.bZ(s))
u=t.c
if(u>=q){t.saz(null)
return!1}t.saz(r.v(s,u));++t.c
return!0},
saz:function(a){this.d=H.G(a,H.y(this,0))},
$iaF:1}
H.fo.prototype={
gL:function(a){return new H.fp(J.bS(this.a),this.b,this.$ti)},
gk:function(a){return J.bT(this.a)},
v:function(a,b){return this.b.$1(J.jH(this.a,b))},
$ai:function(a,b){return[b]}}
H.fp.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saz(u.c.$1(t.gH(t)))
return!0}u.saz(null)
return!1},
gH:function(a){return this.a},
saz:function(a){this.a=H.G(a,H.y(this,1))},
$aaF:function(a,b){return[b]}}
H.i9.prototype={
gL:function(a){return new H.ia(J.bS(this.a),this.b,this.$ti)}}
H.ia.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.I(t.$1(u.gH(u))))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.bw.prototype={}
H.dz.prototype={}
H.dy.prototype={}
H.hD.prototype={
X:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fR.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fd.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.hP.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j4.prototype={
$1:function(a){if(!!J.S(a).$ibe)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.e8.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iac:1}
H.bX.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ijb:1,
ghm:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hp.prototype={}
H.hh.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bQ(u)+"'"}}
H.bU.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bU))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.ce(this.a)
else u=typeof t!=="object"?J.cI(t):H.ce(t)
return(u^H.ce(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.cf(u))+"'")}}
H.hF.prototype={
i:function(a){return this.a}}
H.eI.prototype={
i:function(a){return this.a}}
H.h3.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.ib.prototype={
i:function(a){return"Assertion failed: "+P.cX(this.a)}}
H.R.prototype={
gk:function(a){return this.a},
gag:function(a){return new H.d5(this,[H.y(this,0)])},
cn:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bZ(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bZ(t,b)}else return s.fN(b)},
fN:function(a){var u=this.d
if(u==null)return!1
return this.bs(this.b2(u,J.cI(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aO(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aO(r,b)
s=t==null?null:t.b
return s}else return q.fO(b)},
fO:function(a){var u,t,s=this.d
if(s==null)return
u=this.b2(s,J.cI(a)&0x3ffffff)
t=this.bs(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
H.G(b,H.y(o,0))
H.G(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.bR(u==null?o.b=o.b6():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bR(t==null?o.c=o.b6():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.b6()
r=J.cI(b)&0x3ffffff
q=o.b2(s,r)
if(q==null)o.bd(s,r,[o.b7(b,c)])
else{p=o.bs(q,b)
if(p>=0)q[p].b=c
else q.push(o.b7(b,c))}}},
C:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.bZ(s))
u=u.c}},
bR:function(a,b,c){var u,t=this
H.G(b,H.y(t,0))
H.G(c,H.y(t,1))
u=t.aO(a,b)
if(u==null)t.bd(a,b,t.b7(b,c))
else u.b=c},
b7:function(a,b){var u=this,t=new H.fh(H.G(a,H.y(u,0)),H.G(b,H.y(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bs:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
i:function(a){return P.jP(this)},
aO:function(a,b){return a[b]},
b2:function(a,b){return a[b]},
bd:function(a,b,c){a[b]=c},
dL:function(a,b){delete a[b]},
bZ:function(a,b){return this.aO(a,b)!=null},
b6:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bd(t,u,t)
this.dL(t,u)
return t}}
H.fh.prototype={}
H.d5.prototype={
gk:function(a){return this.a.a},
gL:function(a){var u=this.a,t=new H.fi(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fi.prototype={
gH:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bZ(t))
else{t=u.c
if(t==null){u.sc1(null)
return!1}else{u.sc1(t.a)
u.c=u.c.c
return!0}}},
sc1:function(a){this.d=H.G(a,H.y(this,0))},
$iaF:1}
H.iW.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.iX.prototype={
$2:function(a,b){return this.a(a,b)},
$S:27}
H.iY.prototype={
$1:function(a){return this.a(H.Z(a))},
$S:29}
H.fc.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ijT:1}
H.cb.prototype={$imY:1}
H.da.prototype={
gk:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.ca.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$abw:function(){return[P.z]},
$at:function(){return[P.z]},
$ii:1,
$ai:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.db.prototype={
$abw:function(){return[P.q]},
$at:function(){return[P.q]},
$ii:1,
$ai:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.fK.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.fL.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.fM.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.fN.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.fO.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.dc.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$imZ:1}
H.fP.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$in_:1}
H.ct.prototype={}
H.cu.prototype={}
H.cv.prototype={}
H.cw.prototype={}
P.id.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.ic.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:26}
P.ie.prototype={
$0:function(){this.a.$0()},
$S:1}
P.ig.prototype={
$0:function(){this.a.$0()},
$S:1}
P.ee.prototype={
du:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bL(new P.iJ(this,b),0),a)
else throw H.f(P.ad("`setTimeout()` not found."))},
dv:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bL(new P.iI(this,a,Date.now(),b),0),a)
else throw H.f(P.ad("Periodic timer."))},
$iag:1}
P.iJ.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.iI.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dg(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.aU.prototype={
fR:function(a){if((this.c&15)!==6)return!0
return this.b.b.bB(H.l(this.d,{func:1,ret:P.a7,args:[P.K]}),a.a,P.a7,P.K)},
fL:function(a){var u=this.e,t=P.K,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.eu(u,{func:1,args:[P.K,P.ac]}))return H.jx(r.hc(u,a.a,a.b,null,t,P.ac),s)
else return H.jx(r.bB(H.l(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.ao.prototype={
d_:function(a,b,c){var u,t,s,r=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Q
if(u!==C.f){H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.m4(b,u)}t=new P.ao($.Q,[c])
s=b==null?1:3
this.bS(new P.aU(t,s,a,b,[r,c]))
return t},
hh:function(a,b){return this.d_(a,null,b)},
bS:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.m(t.c,"$iaU")
t.c=a}else{if(s===2){u=H.m(t.c,"$iao")
s=u.a
if(s<4){u.bS(a)
return}t.a=s
t.c=u.c}P.iS(null,null,t.b,H.l(new P.io(t,a),{func:1,ret:-1}))}},
ca:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.m(p.c,"$iaU")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.m(p.c,"$iao")
u=q.a
if(u<4){q.ca(a)
return}p.a=u
p.c=q.c}o.a=p.aP(a)
P.iS(null,null,p.b,H.l(new P.is(o,p),{func:1,ret:-1}))}},
ba:function(){var u=H.m(this.c,"$iaU")
this.c=null
return this.aP(u)},
aP:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bV:function(a){var u,t,s=this,r=H.y(s,0)
H.jx(a,{futureOr:1,type:r})
u=s.$ti
if(H.ju(a,"$ic1",u,"$ac1"))if(H.ju(a,"$iao",u,null))P.ke(a,s)
else P.lC(a,s)
else{t=s.ba()
H.G(a,r)
s.a=4
s.c=a
P.cr(s,t)}},
bW:function(a,b){var u,t=this
H.m(b,"$iac")
u=t.ba()
t.a=8
t.c=new P.a8(a,b)
P.cr(t,u)},
$ic1:1}
P.io.prototype={
$0:function(){P.cr(this.a,this.b)},
$S:1}
P.is.prototype={
$0:function(){P.cr(this.b,this.a.a)},
$S:1}
P.ip.prototype={
$1:function(a){var u=this.a
u.a=0
u.bV(a)},
$S:14}
P.iq.prototype={
$2:function(a,b){H.m(b,"$iac")
this.a.bW(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.ir.prototype={
$0:function(){this.a.bW(this.b,this.c)},
$S:1}
P.iv.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cX(H.l(s.d,{func:1}),null)}catch(r){u=H.br(r)
t=H.bO(r)
if(o.d){s=H.m(o.a.a.c,"$ia8").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.m(o.a.a.c,"$ia8")
else q.b=new P.a8(u,t)
q.a=!0
return}if(!!J.S(n).$ic1){if(n instanceof P.ao&&n.a>=4){if(n.a===8){s=o.b
s.b=H.m(n.c,"$ia8")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.hh(new P.iw(p),null)
s.a=!1}},
$S:2}
P.iw.prototype={
$1:function(a){return this.a},
$S:22}
P.iu.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.G(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.bB(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.br(o)
t=H.bO(o)
s=n.a
s.b=new P.a8(u,t)
s.a=!0}},
$S:2}
P.it.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.m(m.a.a.c,"$ia8")
r=m.c
if(H.I(r.fR(u))&&r.e!=null){q=m.b
q.b=r.fL(u)
q.a=!1}}catch(p){t=H.br(p)
s=H.bO(p)
r=H.m(m.a.a.c,"$ia8")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a8(t,s)
n.a=!0}},
$S:2}
P.dC.prototype={}
P.hk.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.ao($.Q,[P.q])
r.a=0
u=H.y(s,0)
t=H.l(new P.hm(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.hn(r,q),{func:1,ret:-1})
W.Y(s.a,s.b,t,!1,u)
return q}}
P.hm.prototype={
$1:function(a){H.G(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.y(this.b,0)]}}}
P.hn.prototype={
$0:function(){this.b.bV(this.a.a)},
$S:1}
P.ci.prototype={}
P.hl.prototype={}
P.ag.prototype={}
P.a8.prototype={
i:function(a){return H.h(this.a)},
$ibe:1}
P.iL.prototype={$inc:1}
P.iR.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dd():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:1}
P.iB.prototype={
hd:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.f===$.Q){a.$0()
return}P.kh(r,r,this,a,-1)}catch(s){u=H.br(s)
t=H.bO(s)
P.iQ(r,r,this,u,H.m(t,"$iac"))}},
he:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.f===$.Q){a.$1(b)
return}P.ki(r,r,this,a,b,-1,c)}catch(s){u=H.br(s)
t=H.bO(s)
P.iQ(r,r,this,u,H.m(t,"$iac"))}},
fo:function(a,b){return new P.iD(this,H.l(a,{func:1,ret:b}),b)},
bf:function(a){return new P.iC(this,H.l(a,{func:1,ret:-1}))},
cl:function(a,b){return new P.iE(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
cX:function(a,b){H.l(a,{func:1,ret:b})
if($.Q===C.f)return a.$0()
return P.kh(null,null,this,a,b)},
bB:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.Q===C.f)return a.$1(b)
return P.ki(null,null,this,a,b,c,d)},
hc:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.Q===C.f)return a.$2(b,c)
return P.m5(null,null,this,a,b,c,d,e,f)}}
P.iD.prototype={
$0:function(){return this.a.cX(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iC.prototype={
$0:function(){return this.a.hd(this.b)},
$S:2}
P.iE.prototype={
$1:function(a){var u=this.c
return this.a.he(this.b,H.G(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iz.prototype={
gL:function(a){var u=this,t=new P.dR(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.G(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bT(u==null?s.b=P.jp():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bT(t==null?s.c=P.jp():t,b)}else return s.dz(0,b)},
dz:function(a,b){var u,t,s,r=this
H.G(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.jp()
t=r.bX(b)
s=u[t]
if(s==null)u[t]=[r.b_(b)]
else{if(r.c2(s,b)>=0)return!1
s.push(r.b_(b))}return!0},
B:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eS(this.c,b)
else return this.eR(0,b)},
eR:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dV(r,b)
t=s.c2(u,b)
if(t<0)return!1
s.cg(u.splice(t,1)[0])
return!0},
bT:function(a,b){H.G(b,H.y(this,0))
if(H.m(a[b],"$ics")!=null)return!1
a[b]=this.b_(b)
return!0},
eS:function(a,b){var u
if(a==null)return!1
u=H.m(a[b],"$ics")
if(u==null)return!1
this.cg(u)
delete a[b]
return!0},
c4:function(){this.r=1073741823&this.r+1},
b_:function(a){var u,t=this,s=new P.cs(H.G(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.c4()
return s},
cg:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.c4()},
bX:function(a){return J.cI(a)&1073741823},
dV:function(a,b){return a[this.bX(b)]},
c2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1}}
P.cs.prototype={}
P.dR.prototype={
gH:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bZ(t))
else{t=u.c
if(t==null){u.sbU(null)
return!1}else{u.sbU(H.G(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
sbU:function(a){this.d=H.G(a,H.y(this,0))},
$iaF:1}
P.fj.prototype={$ii:1,$ib:1}
P.t.prototype={
gL:function(a){return new H.d6(a,this.gk(a),[H.cF(this,a,"t",0)])},
v:function(a,b){return this.j(a,b)},
hk:function(a,b){var u,t=this,s=H.d([],[H.cF(t,a,"t",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
hj:function(a){return this.hk(a,!0)},
i:function(a){return P.jc(a,"[","]")}}
P.fm.prototype={}
P.fn.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:12}
P.a4.prototype={
C:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.cF(s,a,"a4",0),H.cF(s,a,"a4",1)]})
for(u=J.bS(s.gag(a));u.u();){t=u.gH(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.bT(this.gag(a))},
i:function(a){return P.jP(a)},
$iA:1}
P.iF.prototype={
i:function(a){return P.jc(this,"{","}")},
v:function(a,b){var u,t,s,r=this
P.jZ(b,"index")
for(u=P.lD(r,r.r,H.y(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.f(P.N(b,r,"index",null,t))},
$ii:1,
$ik1:1}
P.dS.prototype={}
P.bY.prototype={}
P.cR.prototype={}
P.eX.prototype={
$abY:function(){return[P.k,[P.b,P.q]]}}
P.hS.prototype={}
P.hT.prototype={
fu:function(a){var u,t,s=P.k_(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iK(u)
if(t.dU(a,0,s)!==s)t.ci(C.c.bj(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lH(0,t.b,u.length)))},
$acR:function(){return[P.k,[P.b,P.q]]}}
P.iK.prototype={
ci:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dU:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bj(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.aN(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.ci(r,C.c.aN(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a7.prototype={}
P.bb.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bb&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.e.aQ(u,30))&1073741823},
i:function(a){var u=this,t=P.l0(H.lk(u)),s=P.cS(H.li(u)),r=P.cS(H.le(u)),q=P.cS(H.lf(u)),p=P.cS(H.lh(u)),o=P.cS(H.lj(u)),n=P.l1(H.lg(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.bd.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bd&&this.a===b.a},
gG:function(a){return C.e.gG(this.a)},
i:function(a){var u,t,s,r=new P.eV(),q=this.a
if(q<0)return"-"+new P.bd(0-q).i(0)
u=r.$1(C.e.U(q,6e7)%60)
t=r.$1(C.e.U(q,1e6)%60)
s=new P.eU().$1(q%1e6)
return""+C.e.U(q,36e8)+":"+H.h(u)+":"+H.h(t)+"."+H.h(s)}}
P.eU.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.eV.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.be.prototype={}
P.eA.prototype={
i:function(a){return"Assertion failed"}}
P.dd.prototype={
i:function(a){return"Throw of null."}}
P.az.prototype={
gb1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb0:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gb1()+o+u
if(!q.a)return t
s=q.gb0()
r=P.cX(q.b)
return t+s+": "+r}}
P.bB.prototype={
gb1:function(){return"RangeError"},
gb0:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.fa.prototype={
gb1:function(){return"RangeError"},
gb0:function(){var u,t=H.a2(this.b)
if(typeof t!=="number")return t.av()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gk:function(a){return this.f}}
P.hQ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hO.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hg.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eK.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cX(u)+"."}}
P.fU.prototype={
i:function(a){return"Out of Memory"},
$ibe:1}
P.dr.prototype={
i:function(a){return"Stack Overflow"},
$ibe:1}
P.eP.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dK.prototype={
i:function(a){return"Exception: "+this.a}}
P.f7.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.bH(s,0,75)+"...":s
return t+"\n"+r}}
P.q.prototype={}
P.i.prototype={
gk:function(a){var u,t=this.gL(this)
for(u=0;t.u();)++u
return u},
v:function(a,b){var u,t,s
P.jZ(b,"index")
for(u=this.gL(this),t=0;u.u();){s=u.gH(u)
if(b===t)return s;++t}throw H.f(P.N(b,this,"index",null,t))},
i:function(a){return P.l4(this,"(",")")}}
P.aF.prototype={}
P.b.prototype={$ii:1}
P.A.prototype={}
P.F.prototype={
gG:function(a){return P.K.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a3.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
m:function(a,b){return this===b},
gG:function(a){return H.ce(this)},
i:function(a){return"Instance of '"+H.h(H.cf(this))+"'"},
toString:function(){return this.i(this)}}
P.ac.prototype={}
P.k.prototype={$ijT:1}
P.bj.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.o.prototype={}
W.ew.prototype={
gk:function(a){return a.length}}
W.ey.prototype={
i:function(a){return String(a)}}
W.ez.prototype={
i:function(a){return String(a)}}
W.cK.prototype={}
W.bu.prototype={
bD:function(a,b,c){if(c!=null)return a.getContext(b,P.md(c))
return a.getContext(b)},
d6:function(a,b){return this.bD(a,b,null)},
$ibu:1}
W.bW.prototype={$ibW:1}
W.b9.prototype={
gk:function(a){return a.length}}
W.c_.prototype={$ic_:1}
W.eL.prototype={
gk:function(a){return a.length}}
W.L.prototype={$iL:1}
W.c0.prototype={
gk:function(a){return a.length}}
W.eM.prototype={}
W.aB.prototype={}
W.aC.prototype={}
W.eN.prototype={
gk:function(a){return a.length}}
W.eO.prototype={
gk:function(a){return a.length}}
W.eQ.prototype={
gk:function(a){return a.length}}
W.cT.prototype={$icT:1}
W.eR.prototype={
i:function(a){return String(a)}}
W.cU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[[P.ak,P.a3]]},
$at:function(){return[[P.ak,P.a3]]},
$ii:1,
$ai:function(){return[[P.ak,P.a3]]},
$ib:1,
$ab:function(){return[[P.ak,P.a3]]},
$ax:function(){return[[P.ak,P.a3]]}}
W.cV.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gau(a))+" x "+H.h(this.gaq(a))},
m:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iak)return!1
return a.left===u.gcJ(b)&&a.top===u.gd1(b)&&this.gau(a)===u.gau(b)&&this.gaq(a)===u.gaq(b)},
gG:function(a){return W.kf(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gau(a)),C.d.gG(this.gaq(a)))},
gaq:function(a){return a.height},
gcJ:function(a){return a.left},
gd1:function(a){return a.top},
gau:function(a){return a.width},
$iak:1,
$aak:function(){return[P.a3]}}
W.eS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[P.k]},
$at:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]},
$ax:function(){return[P.k]}}
W.eT.prototype={
gk:function(a){return a.length}}
W.ii.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.m(u[b],"$iV")},
h:function(a,b){this.a.appendChild(b)
return b},
gL:function(a){var u=this.hj(this)
return new J.aj(u,u.length,[H.y(u,0)])},
$at:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gcm:function(a){return new W.ii(a,a.children)},
i:function(a){return a.localName},
$iV:1}
W.j.prototype={$ij:1}
W.e.prototype={
fi:function(a,b,c,d){H.l(c,{func:1,args:[W.j]})
if(c!=null)this.dA(a,b,c,!1)},
dA:function(a,b,c,d){return a.addEventListener(b,H.bL(H.l(c,{func:1,args:[W.j]}),1),!1)},
$ie:1}
W.aD.prototype={$iaD:1}
W.f1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$ax:function(){return[W.aD]}}
W.f2.prototype={
gk:function(a){return a.length}}
W.f6.prototype={
gk:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.f9.prototype={
gk:function(a){return a.length}}
W.bx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.C]},
$at:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ibx:1,
$ax:function(){return[W.C]}}
W.bf.prototype={$ibf:1,
gco:function(a){return a.data}}
W.c2.prototype={$ic2:1}
W.aH.prototype={$iaH:1}
W.fk.prototype={
i:function(a){return String(a)}}
W.fD.prototype={
gk:function(a){return a.length}}
W.fE.prototype={
j:function(a,b){return P.b3(a.get(H.Z(b)))},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b3(t.value[1]))}},
gag:function(a){var u=H.d([],[P.k])
this.C(a,new W.fF(u))
return u},
gk:function(a){return a.size},
$aa4:function(){return[P.k,null]},
$iA:1,
$aA:function(){return[P.k,null]}}
W.fF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.fG.prototype={
j:function(a,b){return P.b3(a.get(H.Z(b)))},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b3(t.value[1]))}},
gag:function(a){var u=H.d([],[P.k])
this.C(a,new W.fH(u))
return u},
gk:function(a){return a.size},
$aa4:function(){return[P.k,null]},
$iA:1,
$aA:function(){return[P.k,null]}}
W.fH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aJ.prototype={$iaJ:1}
W.fI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aJ]},
$at:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$ax:function(){return[W.aJ]}}
W.a0.prototype={$ia0:1}
W.ih.prototype={
gL:function(a){var u=this.a.childNodes
return new W.cZ(u,u.length,[H.cF(C.F,u,"x",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$at:function(){return[W.C]},
$ai:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.dd(a):u},
$iC:1}
W.cc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.C]},
$at:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ax:function(){return[W.C]}}
W.aK.prototype={$iaK:1,
gk:function(a){return a.length}}
W.fW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aK]},
$at:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$ax:function(){return[W.aK]}}
W.h1.prototype={
j:function(a,b){return P.b3(a.get(H.Z(b)))},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b3(t.value[1]))}},
gag:function(a){var u=H.d([],[P.k])
this.C(a,new W.h2(u))
return u},
gk:function(a){return a.size},
$aa4:function(){return[P.k,null]},
$iA:1,
$aA:function(){return[P.k,null]}}
W.h2.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.h4.prototype={
gk:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.hd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aM]},
$at:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$ax:function(){return[W.aM]}}
W.aN.prototype={$iaN:1}
W.he.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aN]},
$at:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$ax:function(){return[W.aN]}}
W.aO.prototype={$iaO:1,
gk:function(a){return a.length}}
W.hi.prototype={
j:function(a,b){return a.getItem(H.Z(b))},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.k,P.k]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gag:function(a){var u=H.d([],[P.k])
this.C(a,new W.hj(u))
return u},
gk:function(a){return a.length},
$aa4:function(){return[P.k,P.k]},
$iA:1,
$aA:function(){return[P.k,P.k]}}
W.hj.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:23}
W.av.prototype={$iav:1}
W.aP.prototype={$iaP:1}
W.aw.prototype={$iaw:1}
W.hq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aw]},
$at:function(){return[W.aw]},
$ii:1,
$ai:function(){return[W.aw]},
$ib:1,
$ab:function(){return[W.aw]},
$ax:function(){return[W.aw]}}
W.hr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aP]},
$at:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$ax:function(){return[W.aP]}}
W.hx.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.ax.prototype={$iax:1}
W.hA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aQ]},
$at:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$ax:function(){return[W.aQ]}}
W.hB.prototype={
gk:function(a){return a.length}}
W.bl.prototype={}
W.hR.prototype={
i:function(a){return String(a)}}
W.i7.prototype={
gk:function(a){return a.length}}
W.aT.prototype={
gfA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ad("deltaY is not supported"))},
gfz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ad("deltaX is not supported"))},
$iaT:1}
W.cq.prototype={
eV:function(a,b){return a.requestAnimationFrame(H.bL(H.l(b,{func:1,ret:-1,args:[P.a3]}),1))},
dO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ij.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.L]},
$at:function(){return[W.L]},
$ii:1,
$ai:function(){return[W.L]},
$ib:1,
$ab:function(){return[W.L]},
$ax:function(){return[W.L]}}
W.dF.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
m:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iak)return!1
return a.left===u.gcJ(b)&&a.top===u.gd1(b)&&a.width===u.gau(b)&&a.height===u.gaq(b)},
gG:function(a){return W.kf(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gaq:function(a){return a.height},
gau:function(a){return a.width}}
W.ix.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$ax:function(){return[W.aE]}}
W.dX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.C]},
$at:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ax:function(){return[W.C]}}
W.iG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aO]},
$at:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$ax:function(){return[W.aO]}}
W.iH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.av]},
$at:function(){return[W.av]},
$ii:1,
$ai:function(){return[W.av]},
$ib:1,
$ab:function(){return[W.av]},
$ax:function(){return[W.av]}}
W.ik.prototype={}
W.jo.prototype={}
W.il.prototype={}
W.im.prototype={
$1:function(a){return this.a.$1(H.m(a,"$ij"))},
$S:28}
W.x.prototype={
gL:function(a){return new W.cZ(a,this.gk(a),[H.cF(this,a,"x",0)])}}
W.cZ.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sc3(J.ev(u.a,t))
u.c=t
return!0}u.sc3(null)
u.c=s
return!1},
gH:function(a){return this.d},
sc3:function(a){this.d=H.G(a,H.y(this,0))},
$iaF:1}
W.dE.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.cx.prototype={}
W.cy.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e9.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
P.ej.prototype={$ibf:1,
gco:function(a){return this.a}}
P.iT.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.f3.prototype={
gb3:function(){var u=this.b,t=H.ay(u,"t",0),s=W.V
return new H.fo(new H.i9(u,H.l(new P.f4(),{func:1,ret:P.a7,args:[t]}),[t]),H.l(new P.f5(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bT(this.gb3().a)},
j:function(a,b){var u=this.gb3()
return u.b.$1(J.jH(u.a,b))},
gL:function(a){var u=P.jh(this.gb3(),!1,W.V)
return new J.aj(u,u.length,[H.y(u,0)])},
$at:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.f4.prototype={
$1:function(a){return!!J.S(H.m(a,"$iC")).$iV},
$S:24}
P.f5.prototype={
$1:function(a){return H.r(H.m(a,"$iC"),"$iV")},
$S:25}
P.iA.prototype={}
P.ak.prototype={}
P.aV.prototype={$iaV:1}
P.ff.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$at:function(){return[P.aV]},
$ii:1,
$ai:function(){return[P.aV]},
$ib:1,
$ab:function(){return[P.aV]},
$ax:function(){return[P.aV]}}
P.b_.prototype={$ib_:1}
P.fS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$at:function(){return[P.b_]},
$ii:1,
$ai:function(){return[P.b_]},
$ib:1,
$ab:function(){return[P.b_]},
$ax:function(){return[P.b_]}}
P.fX.prototype={
gk:function(a){return a.length}}
P.ho.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$at:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]},
$ax:function(){return[P.k]}}
P.n.prototype={
gcm:function(a){return new P.f3(a,new W.ih(a))}}
P.b0.prototype={$ib0:1}
P.hC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$at:function(){return[P.b0]},
$ii:1,
$ai:function(){return[P.b0]},
$ib:1,
$ab:function(){return[P.b0]},
$ax:function(){return[P.b0]}}
P.dP.prototype={}
P.dQ.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.ea.prototype={}
P.eb.prototype={}
P.eh.prototype={}
P.ei.prototype={}
P.eC.prototype={
gk:function(a){return a.length}}
P.eD.prototype={
j:function(a,b){return P.b3(a.get(H.Z(b)))},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b3(t.value[1]))}},
gag:function(a){var u=H.d([],[P.k])
this.C(a,new P.eE(u))
return u},
gk:function(a){return a.size},
$aa4:function(){return[P.k,null]},
$iA:1,
$aA:function(){return[P.k,null]}}
P.eE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.eF.prototype={
gk:function(a){return a.length}}
P.bt.prototype={}
P.fT.prototype={
gk:function(a){return a.length}}
P.dD.prototype={}
P.cL.prototype={$icL:1}
P.di.prototype={$idi:1}
P.bC.prototype={
hf:function(a,b,c,d,e,f,g){var u,t=J.S(g)
if(!!t.$ibf)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.me(g))
return}if(!!t.$ic2)t=!0
else t=!1
if(t){this.fc(a,b,c,d,e,f,g)
return}throw H.f(P.kU("Incorrect number or type of arguments"))},
fc:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
S:function(a,b,c){return a.uniform1f(b,c)},
aV:function(a,b,c){return a.uniform1i(b,c)},
J:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
d2:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
d3:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
d4:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibC:1}
P.dm.prototype={$idm:1}
P.dt.prototype={$idt:1}
P.dx.prototype={$idx:1}
P.hf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return P.b3(a.item(b))},
v:function(a,b){return this.j(a,b)},
$at:function(){return[[P.A,,,]]},
$ii:1,
$ai:function(){return[[P.A,,,]]},
$ib:1,
$ab:function(){return[[P.A,,,]]},
$ax:function(){return[[P.A,,,]]}}
P.e6.prototype={}
P.e7.prototype={}
O.T.prototype={
bL:function(a){var u=this
u.se_(H.d([],[a]))
u.sc8(null)
u.sc5(null)
u.sc9(null)},
bE:function(a,b,c){var u=this,t=H.ay(u,"T",0)
H.l(b,{func:1,ret:P.a7,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.q,[P.i,t]]}
H.l(a,t)
H.l(c,t)
u.sc8(b)
u.sc5(a)
u.sc9(c)},
aX:function(a,b){return this.bE(a,null,b)},
eC:function(a){var u
H.p(a,"$ii",[H.ay(this,"T",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
e0:function(a,b){var u
H.p(b,"$ii",[H.ay(this,"T",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gL:function(a){var u=this.a
return new J.aj(u,u.length,[H.y(u,0)])},
v:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ay(s,"T",0)
H.G(b,r)
r=[r]
if(H.I(s.eC(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.e0(t,H.d([b],r))}},
se_:function(a){this.a=H.p(a,"$ib",[H.ay(this,"T",0)],"$ab")},
sc8:function(a){this.b=H.l(a,{func:1,ret:P.a7,args:[[P.i,H.ay(this,"T",0)]]})},
sc5:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.q,[P.i,H.ay(this,"T",0)]]})},
sc9:function(a){H.l(a,{func:1,ret:-1,args:[P.q,[P.i,H.ay(this,"T",0)]]})},
$ii:1}
O.c7.prototype={
gk:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.ar():u},
aj:function(){var u=this.b
if(u!=null)u.K(null)},
gO:function(a){var u=this.a
if(u.length>0)return C.a.gbt(u)
else return V.ji()},
cS:function(a){var u=this.a
if(a==null)C.a.h(u,V.ji())
else C.a.h(u,a)
this.aj()},
by:function(){var u=this.a
if(u.length>0){u.pop()
this.aj()}},
sb4:function(a){this.a=H.p(a,"$ib",[V.aa],"$ab")}}
E.eG.prototype={}
E.ab.prototype={
sbF:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().B(0,s.gcO())
u=s.c
if(u!=null)u.gt().h(0,s.gcO())
t=new D.M("shape",r,s.c,[F.dn])
t.b=!0
s.ah(t)}},
saH:function(a){var u,t,s=this
if(!J.P(s.r,a)){u=s.r
if(u!=null)u.gt().B(0,s.gcM())
if(a!=null)a.gt().h(0,s.gcM())
s.r=a
t=new D.M("mover",u,a,[U.bz])
t.b=!0
s.ah(t)}},
aW:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sd5(m.a+m.d*b.y)
m.scQ(0,m.b+m.e*b.y)
m.scW(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.aY(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.N(0,V.aY(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.N(0,V.aY(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.a6(0)}q=m.x}else q=null
if(!J.P(q,n.x)){p=n.x
n.x=q
o=new D.M("matrix",p,q,[V.aa])
o.b=!0
n.ah(o)}for(m=n.y.a,m=new J.aj(m,m.length,[H.y(m,0)]);m.u();)m.d.aW(0,b)},
at:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gO(s))
else C.a.h(s.a,r.N(0,s.gO(s)))
s.aj()
a.cT(t.f)
s=a.dy
u=(s&&C.a).gbt(s)
if(u!=null&&t.d!=null)u.ha(a,t)
for(s=t.y.a,s=new J.aj(s,s.length,[H.y(s,0)]);s.u();)s.d.at(a)
a.cR()
a.dx.by()},
ah:function(a){var u=this.z
if(u!=null)u.K(a)},
P:function(){return this.ah(null)},
cP:function(a){H.m(a,"$iD")
this.e=null
this.ah(a)},
fZ:function(){return this.cP(null)},
cN:function(a){this.ah(H.m(a,"$iD"))},
fY:function(){return this.cN(null)},
cL:function(a){this.ah(H.m(a,"$iD"))},
fV:function(){return this.cL(null)},
fU:function(a,b){var u,t,s,r,q,p,o
H.p(b,"$ii",[E.ab],"$ai")
for(u=b.length,t=this.gcK(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bv()
o.sa4(null)
o.saA(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa4(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.P()},
fX:function(a,b){var u,t
H.p(b,"$ii",[E.ab],"$ai")
for(u=b.gL(b),t=this.gcK();u.u();)u.gH(u).gt().B(0,t)
this.P()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sdH:function(a,b){this.y=H.p(b,"$iT",[E.ab],"$aT")},
$ic9:1}
E.fY.prototype={
di:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.bb(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c7()
t=[V.aa]
u.sb4(H.d([],t))
u.b=null
u.gt().h(0,new E.fZ(s))
s.cy=u
u=new O.c7()
u.sb4(H.d([],t))
u.b=null
u.gt().h(0,new E.h_(s))
s.db=u
u=new O.c7()
u.sb4(H.d([],t))
u.b=null
u.gt().h(0,new E.h0(s))
s.dx=u
s.sfb(H.d([],[O.bD]))
u=s.dy;(u&&C.a).h(u,null)
s.sf6(new H.R([P.k,A.cg]))},
gh7:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gO(s)
u=t.db
u=t.z=s.N(0,u.gO(u))
s=u}return s},
cT:function(a){var u=this.dy,t=a==null?(u&&C.a).gbt(u):a;(u&&C.a).h(u,t)},
cR:function(){var u=this.dy
if(u.length>1)u.pop()},
sfb:function(a){this.dy=H.p(a,"$ib",[O.bD],"$ab")},
sf6:function(a){this.fr=H.p(a,"$iA",[P.k,A.cg],"$aA")}}
E.fZ.prototype={
$1:function(a){var u
H.m(a,"$iD")
u=this.a
u.ch=u.z=null},
$S:8}
E.h_.prototype={
$1:function(a){var u
H.m(a,"$iD")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.h0.prototype={
$1:function(a){var u
H.m(a,"$iD")
u=this.a
u.cx=u.ch=null},
$S:8}
E.du.prototype={
bO:function(a){H.m(a,"$iD")
this.cV()},
bN:function(){return this.bO(null)},
gfK:function(){var u,t=this,s=Date.now(),r=C.e.U(P.ja(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.bb(s,!1)
return u/r},
cc:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.N()
if(typeof r!=="number")return H.bq(r)
u=C.d.br(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.N()
t=C.d.br(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k5(C.h,s.ghb())}},
cV:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.hw(this),{func:1,ret:-1,args:[P.a3]})
C.q.dO(u)
C.q.eV(u,W.kl(t,P.a3))}},
h9:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cc()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bb(r,!1)
s.y=P.ja(r-s.r.a).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aj()
r=s.db
C.a.sk(r.a,0)
r.aj()
r=s.dx
C.a.sk(r.a,0)
r.aj()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.at(p.e)}}catch(q){u=H.br(q)
t=H.bO(q)
P.jD("Error: "+H.h(u))
P.jD("Stack: "+H.h(t))
throw H.f(u)}}}
E.hw.prototype={
$1:function(a){var u
H.kv(a)
u=this.a
if(u.ch){u.ch=!1
u.h9()}},
$S:39}
Z.dB.prototype={$imF:1}
Z.cM.prototype={
ae:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.br(s)
t=P.v('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.h(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.h(u.e)+"]"}}
Z.i8.prototype={$imG:1}
Z.cN.prototype={
ap:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ae:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].ae(a)},
aL:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
at:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.k],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ai(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(p,", ")+"\nAttrs:   "+C.a.p(r,", ")},
sdW:function(a){this.b=H.p(a,"$ib",[Z.bg],"$ab")},
$imN:1}
Z.bg.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.h(H.cf(this.c))+"'")+"]"}}
Z.b2.prototype={
gbG:function(a){var u=this.a,t=(u&$.b7().a)!==0?3:0
if((u&$.b6().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=3
if((u&$.b8().a)!==0)t+=2
if((u&$.bs().a)!==0)t+=3
if((u&$.cG().a)!==0)t+=3
if((u&$.cH().a)!==0)t+=4
if((u&$.bR().a)!==0)++t
return(u&$.b4().a)!==0?t+4:t},
fk:function(a){var u,t=$.b7(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0)if(u===a)return t
return $.kQ()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.k]),t=this.a
if((t&$.b7().a)!==0)C.a.h(u,"Pos")
if((t&$.b6().a)!==0)C.a.h(u,"Norm")
if((t&$.b5().a)!==0)C.a.h(u,"Binm")
if((t&$.b8().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bs().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cG().a)!==0)C.a.h(u,"Clr3")
if((t&$.cH().a)!==0)C.a.h(u,"Clr4")
if((t&$.bR().a)!==0)C.a.h(u,"Weight")
if((t&$.b4().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.p(u,"|")}}
D.eJ.prototype={}
D.bv.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.l(b,u)
if(this.a==null)this.sa4(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
B:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.D]})
u=s.a
u=u==null?null:C.a.a5(u,b)
if(u===!0){u=s.a
t=(u&&C.a).B(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.a5(u,b)
if(u===!0){u=s.b
t=(u&&C.a).B(u,b)||t}return t},
K:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.D()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.C(P.jh(u,!0,{func:1,ret:-1,args:[D.D]}),new D.eZ(q))
u=r.b
if(u!=null){r.saA(H.d([],[{func:1,ret:-1,args:[D.D]}]))
C.a.C(u,new D.f_(q))}return!0},
cp:function(){return this.K(null)},
a6:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}},
sa4:function(a){this.a=H.p(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
saA:function(a){this.b=H.p(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.eZ.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.f_.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.D.prototype={}
D.c3.prototype={}
D.c4.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.cO.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cO))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.d3.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d3))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.fe.prototype={
h3:function(a){this.d.h(0,a.a)
return!1},
h_:function(a){this.d.B(0,a.a)
return!1},
seQ:function(a){this.d=H.p(a,"$ik1",[P.q],"$ak1")}}
X.fl.prototype={
bx:function(a,b){this.r=a.a
return!1},
aJ:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.d8()
if(typeof u!=="number")return u.a7()
this.r=(u&~t)>>>0
return!1},
aI:function(a,b){return!1},
h4:function(a){return!1},
eq:function(a,b,c){return}}
X.c8.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.c8))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.I(this.b)?"Alt+":""
return u+(H.I(this.c)?"Shift+":"")}}
X.fJ.prototype={
bx:function(a,b){this.f=a.a
return!1},
aJ:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.d8()
if(typeof u!=="number")return u.a7()
this.f=(u&~t)>>>0
return!1},
aI:function(a,b){return!1},
h5:function(a,b){return!1}}
X.hz.prototype={
h2:function(a){H.p(a,"$ib",[V.af],"$ab")
return!1},
h0:function(a){H.p(a,"$ib",[V.af],"$ab")
return!1},
h1:function(a){H.p(a,"$ib",[V.af],"$ab")
return!1}}
X.dA.prototype={
c_:function(a){var u=a.keyCode,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.d3(u,new X.c8(t,a.altKey,a.shiftKey))},
an:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
be:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
ad:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.V()
u=t.top
if(typeof r!=="number")return r.V()
return new V.af(s-q,r-u)},
aB:function(a){return new V.b1(a.movementX,a.movementY)},
b9:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.af])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.d.a0(r.pageX)
C.d.a0(r.pageY)
p=o.left
C.d.a0(r.pageX)
C.a.h(n,new V.af(q-p,C.d.a0(r.pageY)-o.top))}return n},
aa:function(a){var u=a.buttons,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.cO(u,new X.c8(t,a.altKey,a.shiftKey))},
b5:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.V()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.V()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ek:function(a){this.f=!0},
e8:function(a){this.f=!1},
ee:function(a){H.m(a,"$ia0")
if(H.I(this.f)&&this.b5(a))a.preventDefault()},
eo:function(a){var u
H.m(a,"$iaH")
if(!H.I(this.f))return
u=this.c_(a)
this.b.h3(u)},
em:function(a){var u
H.m(a,"$iaH")
if(!H.I(this.f))return
u=this.c_(a)
this.b.h_(u)},
es:function(a){var u,t,s,r,q=this
H.m(a,"$ia0")
u=q.a
u.focus()
q.f=!0
q.an(a)
if(H.I(q.x)){t=q.aa(a)
s=q.aB(a)
if(q.d.bx(t,s))a.preventDefault()
return}if(H.I(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aa(a)
r=q.ad(a)
if(q.c.bx(t,r))a.preventDefault()},
ex:function(a){var u,t,s,r=this
H.m(a,"$ia0")
r.an(a)
u=r.aa(a)
if(H.I(r.x)){t=r.aB(a)
if(r.d.aJ(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ad(a)
if(r.c.aJ(u,s))a.preventDefault()},
ei:function(a){var u,t,s,r=this
H.m(a,"$ia0")
if(!r.b5(a)){r.an(a)
u=r.aa(a)
if(H.I(r.x)){t=r.aB(a)
if(r.d.aJ(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ad(a)
if(r.c.aJ(u,s))a.preventDefault()}},
ev:function(a){var u,t,s,r=this
H.m(a,"$ia0")
r.an(a)
u=r.aa(a)
if(H.I(r.x)){t=r.aB(a)
if(r.d.aI(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ad(a)
if(r.c.aI(u,s))a.preventDefault()},
eg:function(a){var u,t,s,r=this
H.m(a,"$ia0")
if(!r.b5(a)){r.an(a)
u=r.aa(a)
if(H.I(r.x)){t=r.aB(a)
if(r.d.aI(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ad(a)
if(r.c.aI(u,s))a.preventDefault()}},
ez:function(a){var u,t,s=this
H.m(a,"$iaT")
s.an(a)
u=new V.b1((a&&C.p).gfz(a),C.p.gfA(a)).A(0,180)
if(H.I(s.x)){if(s.d.h4(u))a.preventDefault()
return}if(H.I(s.r))return
t=s.ad(a)
if(s.c.h5(u,t))a.preventDefault()},
eB:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aa(s.y)
t=s.ad(s.y)
s.d.eq(u,t,r)}},
eM:function(a){var u,t=this
H.m(a,"$iax")
t.a.focus()
t.f=!0
t.be(a)
u=t.b9(a)
if(t.e.h2(u))a.preventDefault()},
eI:function(a){var u
H.m(a,"$iax")
this.be(a)
u=this.b9(a)
if(this.e.h0(u))a.preventDefault()},
eK:function(a){var u
H.m(a,"$iax")
this.be(a)
u=this.b9(a)
if(this.e.h1(u))a.preventDefault()},
sdP:function(a){this.z=H.p(a,"$ib",[[P.ci,P.K]],"$ab")}}
D.bc.prototype={
a8:function(a){var u
H.m(a,"$iD")
u=this.r
if(u!=null)u.K(a)},
dn:function(){return this.a8(null)},
$ia_:1,
$ic9:1}
D.a_.prototype={$ic9:1}
D.d4.prototype={
a8:function(a){var u=this.x
if(u!=null)u.K(a)},
c7:function(a){var u
H.m(a,"$iD")
u=this.y
if(u!=null)u.K(a)},
ep:function(){return this.c7(null)},
eE:function(a){var u,t,s
H.p(a,"$ii",[D.a_],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.dI(s))return!1}return!0},
e2:function(a,b){var u,t,s,r,q,p,o,n=D.a_
H.p(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gc6(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.m(b[q],"$ia_")
if(p instanceof D.bc)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bv()
o.sa4(null)
o.saA(null)
o.c=null
o.d=0
p.r=o}H.l(t,s)
if(o.a==null)o.sa4(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c3([n])
n.b=!0
this.a8(n)},
eG:function(a,b){var u,t,s,r=D.a_
H.p(b,"$ii",[r],"$ai")
for(u=b.gL(b),t=this.gc6();u.u();){s=u.gH(u)
C.a.B(this.e,s)
s.gt().B(0,t)}r=new D.c4([r])
r.b=!0
this.a8(r)},
dI:function(a){var u=C.a.a5(this.e,a)
return u},
sdN:function(a){this.e=H.p(a,"$ib",[D.bc],"$ab")},
seN:function(a){this.f=H.p(a,"$ib",[D.df],"$ab")},
sf9:function(a){this.r=H.p(a,"$ib",[D.dq],"$ab")},
$ai:function(){return[D.a_]},
$aT:function(){return[D.a_]}}
D.df.prototype={$ia_:1,$ic9:1}
D.dq.prototype={$ia_:1,$ic9:1}
V.W.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.ba.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ba))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.eY.prototype={}
V.d9.prototype={
Z:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d9))return!1
u=b.a
t=$.J().a
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.bN(H.d([q.a,q.d,q.r],p),3,0),n=V.bN(H.d([q.b,q.e,q.x],p),3,0),m=V.bN(H.d([q.c,q.f,q.y],p),3,0)
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
V.aa.prototype={
Z:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
cH:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.J().a)return V.ji()
u=1/b1
t=-n
s=-a0
return V.aY((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
N:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aY(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
aU:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.H(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bC:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.as(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.J().a
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
i:function(a){return this.D()},
q:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.bN(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.bN(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.bN(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.bN(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
D:function(){return this.q("")}}
V.af.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.as.prototype={
V:function(a,b){return new V.as(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.dh.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dh))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.dk.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dk))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.b1.prototype={
bu:function(a){var u,t=this.a
if(typeof t!=="number")return t.N()
u=this.b
if(typeof u!=="number")return u.N()
return Math.sqrt(t*t+u*u)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.J().a){u=$.ka
return u==null?$.ka=new V.b1(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.b1(u/b,t/b)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b1))return!1
u=b.a
t=this.a
s=$.J()
s.toString
if(typeof u!=="number")return u.V()
if(typeof t!=="number")return H.bq(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.V()
if(typeof t!=="number")return H.bq(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.H.prototype={
bu:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bv:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.H(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aD:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.H(u*t-s*r,s*q-p*t,p*r-u*q)},
E:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
aw:function(a){return new V.H(-this.a,-this.b,-this.c)},
A:function(a,b){if(Math.abs(b-0)<$.J().a)return V.cp()
return new V.H(this.a/b,this.b/b,this.c/b)},
cI:function(){var u=$.J().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.cQ.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.ar():u},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cQ))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}}
U.bz.prototype={}
U.dl.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.ar():u},
am:function(a){var u=this.y
if(u!=null)u.K(a)},
sd5:function(a){var u
a=V.jE(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.J().a)){this.a=a
u=new D.M("yaw",u,a,[P.z])
u.b=!0
this.am(u)}},
scQ:function(a,b){var u
b=V.jE(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.J().a)){this.b=b
u=new D.M("pitch",u,b,[P.z])
u.b=!0
this.am(u)}},
scW:function(a){var u
a=V.jE(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.J().a)){this.c=a
u=new D.M("roll",u,a,[P.z])
u.b=!0
this.am(u)}},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dl))return!1
u=r.a
t=b.a
s=$.J().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+"], ["+V.E(u.d,3,0)+", "+V.E(u.e,3,0)+", "+V.E(u.f,3,0)+"]"}}
M.cW.prototype={
a9:function(a){var u
H.m(a,"$iD")
u=this.y
if(u!=null)u.K(a)},
dr:function(){return this.a9(null)},
ea:function(a,b){var u,t,s,r,q,p,o,n=E.ab
H.p(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga3(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bv()
o.sa4(null)
o.saA(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa4(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c3([n])
n.b=!0
this.a9(n)},
ec:function(a,b){var u,t,s=E.ab
H.p(b,"$ii",[s],"$ai")
for(u=b.gL(b),t=this.ga3();u.u();)u.gH(u).gt().B(0,t)
s=new D.c4([s])
s.b=!0
this.a9(s)},
scY:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().B(0,t.ga3())
u=t.d
t.d=a
if(a!=null)a.gt().h(0,t.ga3())
s=new D.M("technique",u,t.d,[O.bD])
s.b=!0
t.a9(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.ar():u},
at:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.cT(f.d)
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
if(typeof s!=="number")return H.bq(s)
o=C.d.a0(p*s)
p=q.b
if(typeof r!=="number")return H.bq(r)
n=C.d.a0(p*r)
p=C.d.a0(q.c*s)
a.c=p
q=C.d.a0(q.d*r)
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
i=V.aY(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.cS(i)
t=$.jU
if(t==null){t=V.jW()
q=V.jm()
p=$.kb
t=V.jQ(t,q,p==null?$.kb=new V.H(0,0,-1):p)
$.jU=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.N(0,h)}a.db.cS(h)
u=f.d
if(u!=null)u.aW(0,a)
for(u=f.e.a,u=new J.aj(u,u.length,[H.y(u,0)]);u.u();)u.d.aW(0,a)
for(u=f.e.a,u=new J.aj(u,u.length,[H.y(u,0)]);u.u();)u.d.at(a)
f.b.toString
a.cy.by()
a.db.by()
f.c.toString
a.cR()},
sdq:function(a,b){this.e=H.p(b,"$iT",[E.ab],"$aT")},
$imL:1}
A.cJ.prototype={}
A.eB.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a9.prototype={
ga1:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
m:function(a,b){if(b==null)return!1
if(!(b instanceof A.a9))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fq.prototype={
dh:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.bj("")
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
A.lX(c3,u)
A.lZ(c3,u)
A.lY(c3,u)
A.m0(c3,u)
A.m1(c3,u)
A.m_(c3,u)
A.m2(c3,u)
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
m=A.lW(b8.z)
b8.c=n
b8.d=m
b8.e=b8.c0(n,35633)
b8.f=b8.c0(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.I(H.kp(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.w(P.v("Failed to link shader: "+H.h(l)))}b8.f3()
b8.f5()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.r(b8.y.w(0,"invViewMat"),"$iah")
if(t)b8.dy=H.r(b8.y.w(0,"objMat"),"$iah")
if(r)b8.fr=H.r(b8.y.w(0,"viewObjMat"),"$iah")
b8.fy=H.r(b8.y.w(0,"projViewObjMat"),"$iah")
if(c3.ry)b8.k1=H.r(b8.y.w(0,"txt2DMat"),"$icn")
if(c3.x1)b8.k2=H.r(b8.y.w(0,"txtCubeMat"),"$iah")
if(c3.x2)b8.k3=H.r(b8.y.w(0,"colorMat"),"$iah")
b8.sdD(H.d([],[A.ah]))
t=c3.y2
if(t>0){b8.k4=H.m(b8.y.w(0,"bendMatCount"),"$ial")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.w(P.v(c0+q+c1));(s&&C.a).h(s,H.r(j,"$iah"))}}t=c3.a
if(t.a)b8.r2=H.r(b8.y.w(0,"emissionClr"),"$iO")
if(t.b)b8.rx=H.r(b8.y.w(0,"emissionTxt"),"$ia6")
t=c3.b
if(t.a)b8.x1=H.r(b8.y.w(0,"ambientClr"),"$iO")
if(t.b)b8.x2=H.r(b8.y.w(0,"ambientTxt"),"$ia6")
t=c3.c
if(t.a)b8.y2=H.r(b8.y.w(0,"diffuseClr"),"$iO")
if(t.b)b8.af=H.r(b8.y.w(0,"diffuseTxt"),"$ia6")
t=c3.d
if(t.a)b8.cr=H.r(b8.y.w(0,"invDiffuseClr"),"$iO")
if(t.b)b8.cs=H.r(b8.y.w(0,"invDiffuseTxt"),"$ia6")
t=c3.e
s=t.a
if(s||t.b||!1){b8.cv=H.r(b8.y.w(0,"shininess"),"$ia1")
if(s)b8.ct=H.r(b8.y.w(0,"specularClr"),"$iO")
if(t.b)b8.cu=H.r(b8.y.w(0,"specularTxt"),"$ia6")}if(c3.f.b)b8.cw=H.r(b8.y.w(0,"bumpTxt"),"$ia6")
if(c3.cy){b8.cz=H.r(b8.y.w(0,"envSampler"),"$ibG")
t=c3.r
if(t.a)b8.cA=H.r(b8.y.w(0,"reflectClr"),"$iO")
if(t.b)b8.cB=H.r(b8.y.w(0,"reflectTxt"),"$ia6")
t=c3.x
s=t.a
if(s||t.b||!1){b8.cC=H.r(b8.y.w(0,"refraction"),"$ia1")
if(s)b8.cD=H.r(b8.y.w(0,"refractClr"),"$iO")
if(t.b)b8.cE=H.r(b8.y.w(0,"refractTxt"),"$ia6")}}t=c3.y
if(t.a)b8.cF=H.r(b8.y.w(0,"alpha"),"$ia1")
if(t.b)b8.cG=H.r(b8.y.w(0,"alphaTxt"),"$ia6")
t=P.q
s=[t,A.al]
b8.sdM(new H.R(s))
b8.sds(new H.R([t,[P.b,A.bE]]))
b8.seO(new H.R(s))
b8.seP(new H.R([t,[P.b,A.bF]]))
b8.sf8(new H.R(s))
b8.sdt(new H.R([t,[P.b,A.bH]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.bE],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.h(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a7()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.w(P.v(c0+d+c1))
H.r(j,"$iO")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.w(P.v(c0+d+c1))
H.r(c,"$iO")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.w(P.v(c0+d+c1))
H.r(b,"$iO")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.w(P.v(c0+d+c1))
H.r(j,"$iO")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.w(P.v(c0+d+c1))
H.r(c,"$iO")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.w(P.v(c0+o+c1))
H.r(b,"$ia6")
a2=b}else a2=b9
C.a.h(e,new A.bE(a1,a0,a,j,c,a2))}b8.bm.l(0,g,e)
q=b8.bl
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.v(c0+o+c1))
q.l(0,g,H.m(j,"$ial"))}for(t=c3.Q,s=t.length,r=[A.bF],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.h(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.w(P.v(c0+o+c1))
H.r(j,"$iO")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.w(P.v(c0+o+c1))
H.r(c,"$iO")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.w(P.v(c0+o+c1))
H.r(b,"$iO")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.w(P.v(c0+o+c1))
H.r(a3,"$icn")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.w(P.v(c0+o+c1))
H.r(a3,"$ibG")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.w(P.v(c0+o+c1))
H.r(a3,"$ibG")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.w(P.v(c0+o+c1))
H.r(a5,"$icm")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.w(P.v(c0+o+c1))
H.r(a3,"$ia1")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.w(P.v(c0+o+c1))
H.r(a5,"$ia1")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.w(P.v(c0+o+c1))
H.r(a8,"$ia1")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.bF(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bo.l(0,g,e)
q=b8.bn
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.v(c0+o+c1))
q.l(0,g,H.m(j,"$ial"))}for(t=c3.ch,s=t.length,r=[A.bH],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.h(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.w(P.v(c0+o+c1))
H.r(j,"$iO")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.w(P.v(c0+o+c1))
H.r(c,"$iO")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.w(P.v(c0+o+c1))
H.r(b,"$iO")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.w(P.v(c0+o+c1))
H.r(a3,"$iO")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.w(P.v(c0+o+c1))
H.r(a5,"$iO")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.w(P.v(c0+o+c1))
H.r(a8,"$iO")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.w(P.v(c0+o+c1))
H.r(b2,"$ia1")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.w(P.v(c0+o+c1))
H.r(b3,"$ia1")
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
if(a5==null)H.w(P.v(c0+d+c1))
H.r(a5,"$icm")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.w(P.v(c0+d+c1))
H.r(a5,"$ia1")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.w(P.v(c0+d+c1))
H.r(a8,"$ia1")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.w(P.v(c0+d+c1))
H.r(a5,"$ia1")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.w(P.v(c0+d+c1))
H.r(a8,"$ia1")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.w(P.v(c0+d+c1))
H.r(b2,"$ia1")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.w(P.v(c0+d+c1))
H.r(a5,"$ia6")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.w(P.v(c0+o+c1))
H.r(a5,"$ia6")
a6=a5}else a6=b9
C.a.h(e,new A.bH(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bq.l(0,g,e)
q=b8.bp
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.v(c0+o+c1))
q.l(0,g,H.m(j,"$ial"))}}},
a_:function(a,b){if(b!=null&&b.gR(b))a.d9(b)},
f_:function(a,b){},
sdD:function(a){this.r1=H.p(a,"$ib",[A.ah],"$ab")},
sdM:function(a){this.bl=H.p(a,"$iA",[P.q,A.al],"$aA")},
sds:function(a){this.bm=H.p(a,"$iA",[P.q,[P.b,A.bE]],"$aA")},
seO:function(a){this.bn=H.p(a,"$iA",[P.q,A.al],"$aA")},
seP:function(a){this.bo=H.p(a,"$iA",[P.q,[P.b,A.bF]],"$aA")},
sf8:function(a){this.bp=H.p(a,"$iA",[P.q,A.al],"$aA")},
sdt:function(a){this.bq=H.p(a,"$iA",[P.q,[P.b,A.bH]],"$aA")}}
A.aq.prototype={
i:function(a){return"dirLight"+H.h(this.a)}}
A.at.prototype={
i:function(a){return"pointLight"+H.h(this.a)}}
A.au.prototype={
i:function(a){return"spotLight"+H.h(this.a)}}
A.ft.prototype={
i:function(a){return this.af}}
A.bE.prototype={}
A.bF.prototype={}
A.bH.prototype={}
A.cg.prototype={
dk:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
c0:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.I(H.kp(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.v("Error compiling shader '"+H.h(s)+"': "+H.h(u)))}return s},
f3:function(){var u,t,s,r=this,q=H.d([],[A.cJ]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.bq(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cJ(p,t.name,s))}r.x=new A.eB(q)},
f5:function(){var u,t,s,r=this,q=H.d([],[A.dw]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.bq(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.fw(t.type,t.size,t.name,s))}r.y=new A.hM(q)},
al:function(a,b,c){var u=this.a
if(a===1)return new A.al(u,b,c)
else return A.jl(u,this.r,b,a,c)},
dJ:function(a,b,c){var u=this.a
if(a===1)return new A.a6(u,b,c)
else return A.jl(u,this.r,b,a,c)},
dK:function(a,b,c){var u=this.a
if(a===1)return new A.bG(u,b,c)
else return A.jl(u,this.r,b,a,c)},
aR:function(a,b){return new P.dK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
fw:function(a,b,c,d){var u=this
switch(a){case 5120:return u.al(b,c,d)
case 5121:return u.al(b,c,d)
case 5122:return u.al(b,c,d)
case 5123:return u.al(b,c,d)
case 5124:return u.al(b,c,d)
case 5125:return u.al(b,c,d)
case 5126:return new A.a1(u.a,c,d)
case 35664:return new A.hI(u.a,c,d)
case 35665:return new A.O(u.a,c,d)
case 35666:return new A.cm(u.a,c,d)
case 35667:return new A.hJ(u.a,c,d)
case 35668:return new A.hK(u.a,c,d)
case 35669:return new A.hL(u.a,c,d)
case 35674:return new A.hN(u.a,c,d)
case 35675:return new A.cn(u.a,c,d)
case 35676:return new A.ah(u.a,c,d)
case 35678:return u.dJ(b,c,d)
case 35680:return u.dK(b,c,d)
case 35670:throw H.f(u.aR("BOOL",c))
case 35671:throw H.f(u.aR("BOOL_VEC2",c))
case 35672:throw H.f(u.aR("BOOL_VEC3",c))
case 35673:throw H.f(u.aR("BOOL_VEC4",c))
default:throw H.f(P.v("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.dw.prototype={}
A.hM.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
w:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.D()},
D:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.al.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.hJ.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.hK.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.hL.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.hH.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
sfg:function(a){H.p(a,"$ib",[P.q],"$ab")}}
A.a1.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.hI.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.O.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.cm.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.hN.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.cn.prototype={
a2:function(a){var u=new Float32Array(H.cC(H.p(a,"$ib",[P.z],"$ab")))
C.b.d3(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.ah.prototype={
a2:function(a){var u=new Float32Array(H.cC(H.p(a,"$ib",[P.z],"$ab")))
C.b.d4(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.a6.prototype={
d9:function(a){var u=a.gR(a),t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.bG.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.iM.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bv(s.b,b).bv(s.d.bv(s.c,b),c)
s=new V.as(r.a,r.b,r.c)
if(!J.P(a.f,s)){a.f=s
s=a.a
if(s!=null)s.P()}a.shg(r.A(0,Math.sqrt(r.I(r))))
s=1-b
u=1-c
u=new V.dh(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.P(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.P()}},
$S:32}
F.X.prototype={
aE:function(){var u=this
if(!u.gaF()){C.a.B(u.a.a.d.b,u)
u.a.a.P()}u.bb()
u.bc()
u.eT()},
f0:function(a){this.a=a
C.a.h(a.d.b,this)},
f1:function(a){this.b=a
C.a.h(a.d.c,this)},
f2:function(a){this.c=a
C.a.h(a.d.d,this)},
bb:function(){var u=this.a
if(u!=null){C.a.B(u.d.b,this)
this.a=null}},
bc:function(){var u=this.b
if(u!=null){C.a.B(u.d.c,this)
this.b=null}},
eT:function(){var u=this.c
if(u!=null){C.a.B(u.d.d,this)
this.c=null}},
gaF:function(){return this.a==null||this.b==null||this.c==null},
dC:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cp()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.cI())return
return s.A(0,Math.sqrt(s.I(s)))},
dG:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.V(0,q)
r=new V.H(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.I(r)))
r=t.V(0,q)
r=new V.H(r.a,r.b,r.c)
r=s.aD(r.A(0,Math.sqrt(r.I(r))))
return r.A(0,Math.sqrt(r.I(r)))},
bi:function(){var u,t=this
if(t.d!=null)return!0
u=t.dC()
if(u==null){u=t.dG()
if(u==null)return!1}t.d=u
t.a.a.P()
return!0},
dB:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cp()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.cI())return
return s.A(0,Math.sqrt(s.I(s)))},
dF:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.J().a){l=d.V(0,g)
l=new V.H(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.I(l)))
if(s.a-t.a<0)q=q.aw(0)}else{p=(l-u.b)/r
l=d.V(0,g)
l=new V.as(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).V(0,j)
l=new V.H(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.I(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.aw(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.I(l)))
l=o.aD(q)
l=l.A(0,Math.sqrt(l.I(l))).aD(o)
q=l.A(0,Math.sqrt(l.I(l)))}return q},
bg:function(){var u,t=this
if(t.e!=null)return!0
u=t.dB()
if(u==null){u=t.dF()
if(u==null)return!1}t.e=u
t.a.a.P()
return!0},
gfs:function(a){var u=this
if(J.P(u.a,u.b))return!0
if(J.P(u.b,u.c))return!0
if(J.P(u.c,u.a))return!0
return!1},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
q:function(a){var u,t,s=this
if(s.gaF())return a+"disposed"
u=a+C.c.Y(J.ai(s.a.e),0)+", "+C.c.Y(J.ai(s.b.e),0)+", "+C.c.Y(J.ai(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
D:function(){return this.q("")}}
F.f0.prototype={}
F.hc.prototype={
aG:function(a,b,c){var u,t=b.a
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.aW.prototype={
aE:function(){var u=this
if(!u.gaF()){C.a.B(u.a.a.c.b,u)
u.a.a.P()}u.bb()
u.bc()},
bb:function(){var u=this.a
if(u!=null){C.a.B(u.c.b,this)
this.a=null}},
bc:function(){var u=this.b
if(u!=null){C.a.B(u.c.c,this)
this.b=null}},
gaF:function(){return this.a==null||this.b==null},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
q:function(a){if(this.gaF())return a+"disposed"
return a+C.c.Y(J.ai(this.a.e),0)+", "+C.c.Y(J.ai(this.b.e),0)},
D:function(){return this.q("")}}
F.fg.prototype={}
F.hG.prototype={
aG:function(a,b,c){var u,t=b.a
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
return t==u.e}else{t=b.a
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
return t==u.e}else return!1}}}
F.bi.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
q:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.Y(J.ai(u.e),0)},
D:function(){return this.q("")}}
F.dn.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.ar():u},
bw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.n()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.fv())}h.a.n()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bi()
if(n.a==null)H.w(P.v("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.K(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.n()
p=p.e
if(typeof p!=="number")return p.E()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.aW()
o=l.a
if(o==null)H.w(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.w(P.v("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.K(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.n()
p=p.e
if(typeof p!=="number")return p.E()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cY(l,k,i)}g=h.e
if(g!=null)g.a6(0)},
ao:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ao()||!1
if(!t.a.ao())u=!1
s=t.e
if(s!=null)s.a6(0)
return u},
fS:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.y(o,0)])
for(o=[F.am];u.length!==0;){t=C.a.gfJ(u)
C.a.cU(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.aG(0,t,q)){C.a.h(s,q)
C.a.cU(u,r)}}if(s.length>1)b.bw(s)}}p.a.n()
p.c.bz()
p.d.bz()
p.b.h8()
p.c.bA(new F.hG())
p.d.bA(new F.hc())
o=p.e
if(o!=null)o.a6(0)},
fp:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b7()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.b6().a)!==0)++s
if((t&$.b5().a)!==0)++s
if((t&$.b8().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.cG().a)!==0)++s
if((t&$.cH().a)!==0)++s
if((t&$.bR().a)!==0)++s
if((t&$.b4().a)!==0)++s
r=a3.gbG(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.cM])
for(n=0,m=0;m<s;++m){l=a3.fk(m)
k=l.gbG(l)
C.a.l(o,m,new Z.cM(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].fQ(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.p(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cC(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cN(new Z.dB(a0,f),o,a3)
e.sdW(H.d([],[Z.bg]))
if(a.b.b.length!==0){t=P.q
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.n()
C.a.h(d,c.e)}b=Z.jn(u,34963,H.p(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bg(0,d.length,b))}if(a.c.b.length!==0){t=P.q
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.n()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.n()
C.a.h(d,c.e)}b=Z.jn(u,34963,H.p(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bg(1,d.length,b))}if(a.d.b.length!==0){t=P.q
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.n()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.n()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.n()
C.a.h(d,c.e)}b=Z.jn(u,34963,H.p(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bg(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.k])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.q(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.q(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.q(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.q(t))}return C.a.p(s,"\n")},
P:function(){var u=this.e
if(u!=null)u.K(null)},
$imM:1}
F.h6.prototype={
fj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.p(c,"$ib",[F.am],"$ab")
u=H.d([],[F.X])
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
C.a.h(u,F.cY(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cY(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cY(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cY(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
bA:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aG(0,p,n)){p.aE()
break}}}}},
bz:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gfs(s)
if(t)s.aE()}},
ao:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bi())s=!1
return s},
bh:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bg())s=!1
return s},
i:function(a){return this.D()},
q:function(a){var u,t,s,r=H.d([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].q(a))
return C.a.p(r,"\n")},
D:function(){return this.q("")},
sdQ:function(a){this.b=H.p(a,"$ib",[F.X],"$ab")}}
F.h7.prototype={
gk:function(a){return this.b.length},
bA:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aG(0,p,n)){p.aE()
break}}}}},
bz:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.P(s.a,s.b)
if(t)s.aE()}},
i:function(a){return this.D()},
q:function(a){var u,t,s=H.d([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].q(a+(""+u+". ")))}return C.a.p(s,"\n")},
D:function(){return this.q("")},
sdX:function(a){this.b=H.p(a,"$ib",[F.aW],"$ab")}}
F.h8.prototype={
gk:function(a){return this.b.length},
h8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.B(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.a.B(s.b.b,t)
t.a=null}}}},
i:function(a){return this.D()},
q:function(a){var u,t,s,r=H.d([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].q(a))
return C.a.p(r,"\n")},
D:function(){return this.q("")},
sb8:function(a){this.b=H.p(a,"$ib",[F.bi],"$ab")}}
F.am.prototype={
bk:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kd(u.cx,r,o,t,s,q,p,a,n)},
fv:function(){return this.bk(null)},
shg:function(a){var u
if(!J.P(this.z,a)){this.z=a
u=this.a
if(u!=null)u.P()}},
fQ:function(a){var u,t,s=this
if(a.m(0,$.b7())){u=s.f
t=[P.z]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.m(0,$.b6())){u=s.r
t=[P.z]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.m(0,$.b5())){u=s.x
t=[P.z]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.m(0,$.b8())){u=s.y
t=[P.z]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.m(0,$.bs())){u=s.z
t=[P.z]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.m(0,$.cG())){u=s.Q
t=[P.z]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.m(0,$.cH())){u=s.Q
t=[P.z]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.m(0,$.bR()))return H.d([s.ch],[P.z])
else if(a.m(0,$.b4())){u=s.cx
t=[P.z]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.z])},
bi:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.C(0,new F.i6(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.P()
s=t.a.e
if(s!=null)s.a6(0)}return!0},
bg:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.C(0,new F.i5(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.P()
s=t.a.e
if(s!=null)s.a6(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
q:function(a){var u,t,s=this,r="-",q=H.d([],[P.k])
C.a.h(q,C.c.Y(J.ai(s.e),0))
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
C.a.h(q,V.E(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.p(q,", ")
return a+"{"+t+"}"},
D:function(){return this.q("")}}
F.i6.prototype={
$1:function(a){var u,t
H.m(a,"$iX")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.E(0,u)}},
$S:4}
F.i5.prototype={
$1:function(a){var u,t
H.m(a,"$iX")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.E(0,u)}},
$S:4}
F.hX.prototype={
n:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.v("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.P()
return!0},
cj:function(a,b){var u=null,t=F.kd(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gk:function(a){return this.c.length},
ao:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bi()
return!0},
bh:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bg()
return!0},
fq:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.D()},
q:function(a){var u,t,s,r
this.n()
u=H.d([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].q(a))
return C.a.p(u,"\n")},
D:function(){return this.q("")},
sfh:function(a){this.c=H.p(a,"$ib",[F.am],"$ab")}}
F.hY.prototype={
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
C:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.X]})
C.a.C(u.b,b)
C.a.C(u.c,new F.hZ(u,b))
C.a.C(u.d,new F.i_(u,b))},
i:function(a){return this.D()},
D:function(){var u,t,s,r=H.d([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].q(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].q(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].q(""))
return C.a.p(r,"\n")},
sdR:function(a){this.b=H.p(a,"$ib",[F.X],"$ab")},
sdS:function(a){this.c=H.p(a,"$ib",[F.X],"$ab")},
sdT:function(a){this.d=H.p(a,"$ib",[F.X],"$ab")}}
F.hZ.prototype={
$1:function(a){H.m(a,"$iX")
if(!J.P(a.a,this.a))this.b.$1(a)},
$S:4}
F.i_.prototype={
$1:function(a){var u
H.m(a,"$iX")
u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)},
$S:4}
F.i0.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.D()},
D:function(){var u,t,s,r=H.d([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].q(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].q(""))
return C.a.p(r,"\n")},
sdY:function(a){this.b=H.p(a,"$ib",[F.aW],"$ab")},
sdZ:function(a){this.c=H.p(a,"$ib",[F.aW],"$ab")}}
F.i2.prototype={}
F.i1.prototype={
aG:function(a,b,c){return J.P(b.f,c.f)}}
F.i3.prototype={}
F.fQ.prototype={
bw:function(a){var u,t,s,r,q,p,o,n,m
H.p(a,"$ib",[F.am],"$ab")
u=V.cp()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.H(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.A(0,Math.sqrt(u.I(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.u)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.A(0,Math.sqrt(o*o+n*n+m*m))}if(!J.P(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.K(null)}}}return}}
F.i4.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.D()},
D:function(){var u,t,s,r=H.d([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].q(""))
return C.a.p(r,"\n")},
sb8:function(a){this.b=H.p(a,"$ib",[F.bi],"$ab")}}
O.d8.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.ar():u},
M:function(a){var u
H.m(a,"$iD")
u=this.fr
if(u!=null)u.K(a)},
aZ:function(){return this.M(null)},
cb:function(a){H.m(a,"$iD")
this.a=null
this.M(a)},
eX:function(){return this.cb(null)},
e4:function(a,b){var u=V.aa
H.p(b,"$ii",[u],"$ai")
u=new D.c3([u])
u.b=!0
this.M(u)},
e6:function(a,b){var u=V.aa
H.p(b,"$ii",[u],"$ai")
u=new D.c4([u])
u.b=!0
this.M(u)},
bY:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.q,h=new H.R([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=h.j(0,0)
h.l(0,0,r==null?1:r)}q=H.d([],[A.aq])
h.C(0,new O.fx(j,q))
C.a.aY(q,new O.fy())
p=new H.R([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){o=u[s]
r=o.gaC()
n=p.j(0,o.gaC())
p.l(0,r,n==null?1:n)}m=H.d([],[A.at])
p.C(0,new O.fz(j,m))
C.a.aY(m,new O.fA())
l=new H.R([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){o=i[s]
t=o.gaC()
r=l.j(0,o.gaC())
l.l(0,t,r==null?1:r)}k=H.d([],[A.au])
l.C(0,new O.fB(j,k))
C.a.aY(k,new O.fC())
i=C.e.U(j.e.a.length+3,4)
j.dy.e
return A.lc(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
W:function(a,b){H.p(a,"$ib",[T.cj],"$ab")
if(b!=null)if(!C.a.a5(a,b)){b.a=a.length
C.a.h(a,b)}},
aW:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aj(u,u.length,[H.y(u,0)]);u.u();){t=u.d
t.toString
s=$.hW
if(s==null)s=$.hW=new V.H(0,0,1)
t.a=s
r=$.hV
t.d=r==null?$.hV=new V.H(0,1,0):r
r=$.hU
t.e=r==null?$.hU=new V.H(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.aU(s)
r=s.a
p=s.b
o=s.c
t.a=s.A(0,Math.sqrt(r*r+p*p+o*o))
o=q.aU(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.A(0,Math.sqrt(p*p+r*r+s*s))
s=q.aU(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.A(0,Math.sqrt(r*r+p*p+o*o))}}}},
ha:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.bY()
u=b6.fr.j(0,b5.af)
if(u==null){u=A.lb(b5,b6.a)
t=u.b
if(t.length===0)H.w(P.v("May not cache a shader with no name."))
if(b6.fr.cn(0,t))H.w(P.v('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.l(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.cq
b5=b7.e
if(!(b5 instanceof Z.cN))b5=b7.e=null
if(b5==null||!b5.d.m(0,r)){b5=s.k3
if(b5)b7.d.ao()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bh()
p.a.bh()
p=p.e
if(p!=null)p.a6(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.fq()
o=o.e
if(o!=null)o.a6(0)}m=b7.d.fp(new Z.i8(b6.a),r)
m.ap($.b7()).e=b4.a.Q.c
if(b5)m.ap($.b6()).e=b4.a.cx.c
if(q)m.ap($.b5()).e=b4.a.ch.c
if(s.r1)m.ap($.b8()).e=b4.a.cy.c
if(p)m.ap($.bs()).e=b4.a.db.c
if(s.rx)m.ap($.b4()).e=b4.a.dx.c
b7.e=m}b5=T.cj
l=H.d([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.fG()
if(s.dy){q=b4.a
o=b6.dx
o=o.gO(o)
q=q.dy
q.toString
q.a2(o.Z(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gO(o)
n=b6.dx
n=b6.cx=o.N(0,n.gO(n))
o=n}q=q.fr
q.toString
q.a2(o.Z(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gh7()
n=b6.dx
n=b6.ch=o.N(0,n.gO(n))
o=n}q=q.fy
q.toString
q.a2(o.Z(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.a2(C.i.Z(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.a2(C.i.Z(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.a2(C.i.Z(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.b.aV(q.a,q.d,k)
for(q=[P.z],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.c(n,j)
n=n[j]
o.toString
H.m(n,"$iaa")
o=o.r1
if(j>=o.length)return H.c(o,j)
o=o[j]
i=new Float32Array(H.cC(H.p(n.Z(0,!0),"$ib",q,"$ab")))
C.b.d4(o.a,o.d,!1,i)}}q=s.a
if(q.a){o=b4.a
n=b4.f.f
o=o.r2
C.b.J(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.W(l,b4.f.d)
q=b4.a
o=b4.f.d
q.a_(q.rx,o)}if(s.id){q=s.b
if(q.a){o=b4.a
n=b4.r.f
o=o.x1
C.b.J(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.W(l,b4.r.d)
q=b4.a
o=b4.r.d
q.a_(q.x2,o)}q=s.c
if(q.a){o=b4.a
n=b4.x.f
o=o.y2
C.b.J(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.W(l,b4.x.d)
q=b4.a
o=b4.x.d
q.a_(q.af,o)}q=s.d
if(q.a){o=b4.a
n=b4.y.f
o=o.cr
C.b.J(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.W(l,b4.y.d)
q=b4.a
o=b4.y.d
q.a_(q.cs,o)}q=s.e
o=q.a
if(o||q.b||!1){n=b4.a
h=b4.z.ch
n=n.cv
C.b.S(n.a,n.d,h)}if(o){o=b4.a
n=b4.z.f
o=o.ct
C.b.J(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.W(l,b4.z.d)
q=b4.a
o=b4.z.d
q.a_(q.cu,o)}q=s.z
if(q.length>0){o=b6.db
g=o.gO(o)
o=P.q
f=new H.R([o,o])
for(o=b4.dx.e,n=o.length,e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=f.j(0,0)
if(c==null)c=0
f.l(0,0,c+1)
b=J.ev(b4.a.bm.j(0,0),c)
h=g.aU(d.a)
a=h.a
a0=h.b
a1=h.c
a1=h.A(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
h=a1.b
a1=a1.c
C.b.J(a0.a,a0.d,a,h,a1)
a1=d.c
h=b.f
C.b.J(h.a,h.d,a1.a,a1.b,a1.c)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=f.j(0,n)
if(k==null)k=0
n=b4.a.bl.j(0,n)
C.b.aV(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
g=o.gO(o)
o=P.q
a2=new H.R([o,o])
for(o=b4.dx.f,n=o.length,h=[b5],a=[P.z],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
a3=d.gaC()
c=a2.j(0,a3)
if(c==null)c=0
a2.l(0,a3,c+1)
b=J.ev(b4.a.bo.j(0,a3),c)
a4=g.N(0,d.gO(d))
a0=d.gO(d)
a1=$.cd
a0=a0.bC(a1==null?$.cd=new V.as(0,0,0):a1)
a1=b.b
C.b.J(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cd
a0=a4.bC(a0==null?$.cd=new V.as(0,0,0):a0)
a1=b.c
C.b.J(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaS(d)
a1=b.e
C.b.J(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gai()
a0=a4.cH(0)
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
i=new Float32Array(H.cC(H.p(new V.d9(a1,a5,a6,a7,a8,a9,b0,b1,a0).Z(0,!0),"$ib",a,"$ab")))
C.b.d3(b2.a,b2.d,!1,i)
d.gai()
a0=d.gai()
H.p(l,"$ib",h,"$ab")
if(!C.a.a5(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gai()
a1=a0.gR(a0)
if(a1){a1=b.f
a1.toString
a5=a0.gR(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gfM(a0)
a1.a.uniform1i(a1.d,a0)}}d.gax()
a0=d.gda()
a1=b.x
a1.toString
a5=a0.gfD(a0)
a6=a0.gfE(a0)
a7=a0.gfF()
a0=a0.gfC()
C.b.d2(a1.a,a1.d,a5,a6,a7,a0)
a0=d.gax()
if(!C.a.a5(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gax()
a1=a0.gR(a0)
if(a1){a1=b.r
a1.toString
a5=a0.gR(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gfM(a0)
a1.a.uniform1i(a1.d,a0)}}if(d.gfH()){a0=d.gfl()
a1=b.y
C.b.S(a1.a,a1.d,a0)
a0=d.gfm()
a1=b.z
C.b.S(a1.a,a1.d,a0)
a0=d.gfn()
a1=b.Q
C.b.S(a1.a,a1.d,a0)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.bn.j(0,n)
C.b.aV(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
g=o.gO(o)
o=P.q
b3=new H.R([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
a3=d.gaC()
c=b3.j(0,a3)
if(c==null)c=0
b3.l(0,a3,c+1)
b=J.ev(b4.a.bq.j(0,a3),c)
h=d.gh6(d)
a=b.b
C.b.J(a.a,a.d,h.a,h.b,h.c)
h=d.ghp(d).hA()
a=b.c
C.b.J(a.a,a.d,h.a,h.b,h.c)
h=g.bC(d.gh6(d))
a=b.d
C.b.J(a.a,a.d,h.a,h.b,h.c)
h=d.gaS(d)
a=b.e
C.b.J(a.a,a.d,h.a,h.b,h.c)
d.gai()
h=d.ghE()
a=b.f
C.b.J(a.a,a.d,h.a,h.b,h.c)
h=d.ghB(d)
a=b.r
C.b.J(a.a,a.d,h.a,h.b,h.c)
h=d.ghC()
a=b.x
C.b.S(a.a,a.d,h)
h=d.ghD()
a=b.y
C.b.S(a.a,a.d,h)
d.gai()
h=d.gai()
H.p(l,"$ib",b5,"$ab")
if(!C.a.a5(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gai()
a=h.gR(h)
if(a){a=b.dx
a.toString
a0=h.gR(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}d.gax()
h=d.gda()
a=b.z
a.toString
a0=h.gfD(h)
a1=h.gfE(h)
a5=h.gfF()
h=h.gfC()
C.b.d2(a.a,a.d,a0,a1,a5,h)
h=d.gax()
if(!C.a.a5(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gax()
a=h.gR(h)
if(a){a=b.dy
a.toString
a0=h.gR(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}if(d.ghq()){h=d.gho()
a=b.Q
C.b.S(a.a,a.d,h)
h=d.ghn()
a=b.ch
C.b.S(a.a,a.d,h)}if(d.gfH()){h=d.gfl()
a=b.cx
C.b.S(a.a,a.d,h)
h=d.gfm()
a=b.cy
C.b.S(a.a,a.d,h)
h=d.gfn()
a=b.db
C.b.S(a.a,a.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.u)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.bp.j(0,o)
C.b.aV(o.a,o.d,k)}}}if(s.f.b){b4.W(l,b4.Q.d)
b5=b4.a
q=b4.Q.d
b5.a_(b5.cw,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gO(q).cH(0)}b5=b5.id
b5.toString
b5.a2(q.Z(0,!0))}if(s.cy){b4.W(l,b4.ch)
b5=b4.a
q=b4.ch
b5.f_(b5.cz,q)
b5=s.r
if(b5.a){q=b4.a
o=b4.cx.f
q=q.cA
C.b.J(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.W(l,b4.cx.d)
b5=b4.a
q=b4.cx.d
b5.a_(b5.cB,q)}b5=s.x
q=b5.a
if(q||b5.b||!1){o=b4.a
n=b4.cy.ch
o=o.cC
C.b.S(o.a,o.d,n)}if(q){q=b4.a
o=b4.cy.f
q=q.cD
C.b.J(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.W(l,b4.cy.d)
b5=b4.a
q=b4.cy.d
b5.a_(b5.cE,q)}}b5=s.y
q=b5.a
o=!q
if(!o||b5.b||!1){if(q){q=b4.a
n=b4.db.f
q=q.cF
C.b.S(q.a,q.d,n)}if(b5.b){b4.W(l,b4.db.d)
q=b4.a
n=b4.db.d
q.a_(q.cG,n)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(q.d==null){q=q.d=q.c
if(q!=null)q.ae(b6)}}q=b7.e
q.ae(b6)
q.at(b6)
q.aL(b6)
if(!o||b5.b||!1)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
q=b5.d
if(q!=null){q.aL(b6)
b5.d=null}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.fB()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.bY().af},
sdE:function(a){this.e=H.p(a,"$iT",[V.aa],"$aT")}}
O.fx.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.E()
return C.a.h(this.b,new A.aq(a,C.e.U(b+3,4)*4))},
$S:11}
O.fy.prototype={
$2:function(a,b){H.m(a,"$iaq")
H.m(b,"$iaq")
return J.j5(a.a,b.a)},
$S:34}
O.fz.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.E()
return C.a.h(this.b,new A.at(a,C.e.U(b+3,4)*4))},
$S:11}
O.fA.prototype={
$2:function(a,b){H.m(a,"$iat")
H.m(b,"$iat")
return J.j5(a.a,b.a)},
$S:35}
O.fB.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.E()
return C.a.h(this.b,new A.au(a,C.e.U(b+3,4)*4))},
$S:11}
O.fC.prototype={
$2:function(a,b){H.m(a,"$iau")
H.m(b,"$iau")
return J.j5(a.a,b.a)},
$S:36}
O.fr.prototype={
ac:function(){var u,t=this
t.bJ()
u=t.f
if(!(Math.abs(u-1)<$.J().a)){t.f=1
u=new D.M(t.b,u,1,[P.z])
u.b=!0
t.a.M(u)}}}
O.c6.prototype={
M:function(a){return this.a.M(H.m(a,"$iD"))},
aZ:function(){return this.M(null)},
ac:function(){},
ce:function(a){var u,t,s=this
if(!s.c.m(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.ac()
u=s.a
u.a=null
u.M(null)}},
scZ:function(a){var u,t=this,s=t.c
if(!s.b)t.ce(new A.a9(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gt().B(0,t.gaM())
u=t.d
t.d=a
a.gt().h(0,t.gaM())
s=new D.M(t.b+".texture2D",u,t.d,[T.bk])
s.b=!0
t.a.M(s)}}}
O.fs.prototype={}
O.aI.prototype={
cd:function(a){var u,t,s=this
if(!s.f.m(0,a)){u=s.f
s.f=a
t=new D.M(s.b+".color",u,a,[V.W])
t.b=!0
s.a.M(t)}},
ac:function(){this.bJ()
this.cd(new V.W(1,1,1))},
saS:function(a,b){this.ce(new A.a9(!0,this.c.b,!1))
this.cd(b)}}
O.fu.prototype={}
O.fv.prototype={
ac:function(){var u,t=this
t.bK()
u=t.ch
if(!(Math.abs(u-1)<$.J().a)){t.ch=1
u=new D.M(t.b+".refraction",u,1,[P.z])
u.b=!0
t.a.M(u)}}}
O.fw.prototype={
ac:function(){var u,t=this
t.bK()
u=t.ch
if(!(Math.abs(u-100)<$.J().a)){t.ch=100
u=new D.M(t.b+".shininess",u,100,[P.z])
u.b=!0
t.a.M(u)}}}
O.bD.prototype={}
T.cj.prototype={}
T.bk.prototype={}
T.hs.prototype={
gR:function(a){var u=this.d
u=u==null?null:u.gR(u)
if(u==null){u=this.c
u=u==null?null:u.gR(u)}return u===!0},
gt:function(){var u=this.f
return u==null?this.f=D.ar():u},
ae:function(a){var u
if(this.d==null){u=this.d=this.c
if(u!=null)u.ae(a)}},
aL:function(a){var u=this.d
if(u!=null){u.aL(a)
this.d=null}},
sfd:function(a){this.e=H.p(a,"$ib",[T.bk],"$ab")}}
T.ht.prototype={
gR:function(a){return this.d},
ae:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
aL:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.hu.prototype={
ar:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.ht()
t.a=0
t.b=q
t.d=t.c=!1
r=W.j
W.Y(u,"load",H.l(new T.hv(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
eY:function(a,b,c){var u,t,s,r
b=V.jC(b)
u=V.jC(a.width)
t=V.jC(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.j8()
s.width=u
s.height=t
r=H.m(C.n.d6(s,"2d"),"$ibW")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mf(r.getImageData(0,0,s.width,s.height))}}}
T.hv.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.eY(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.b.hf(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.cp()}++s.e},
$S:21}
V.ex.prototype={
as:function(a,b){return!0},
i:function(a){return"all"},
$iaX:1}
V.aX.prototype={}
V.d7.prototype={
as:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].as(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sab:function(a){this.a=H.p(a,"$ib",[V.aX],"$ab")},
$iaX:1}
V.aZ.prototype={
as:function(a,b){return!this.df(0,b)},
i:function(a){return"!["+this.bI(0)+"]"}}
V.h5.prototype={
dj:function(a){var u,t
if(a.a.length<=0)throw H.f(P.v("May not create a SetMatcher with zero characters."))
u=new H.R([P.q,P.a7])
for(t=new H.d6(a,a.gk(a),[H.ay(a,"t",0)]);t.u();)u.l(0,t.d,!0)
this.seZ(u)},
as:function(a,b){return this.a.cn(0,b)},
i:function(a){var u=this.a
return P.jj(new H.d5(u,[H.y(u,0)]))},
seZ:function(a){this.a=H.p(a,"$iA",[P.q,P.a7],"$aA")},
$iaX:1}
V.ch.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cl(this.a.F(0,b))
r.sab(H.d([],[V.aX]))
r.c=!1
C.a.h(this.c,r)
return r},
fI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.as(0,a))return r}return},
i:function(a){return this.b},
sff:function(a){this.c=H.p(a,"$ib",[V.cl],"$ab")}}
V.dv.prototype={
i:function(a){var u=H.kA(this.b,"\n","\\n"),t=H.kA(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ck.prototype={
i:function(a){return this.b},
seU:function(a){var u=P.k
this.c=H.p(a,"$iA",[u,u],"$aA")}}
V.hy.prototype={
F:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.ch(this,b)
u.sff(H.d([],[V.cl]))
u.d=null
this.a.l(0,b,u)}return u},
aK:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.ck(a)
u=P.k
t.seU(new H.R([u,u]))
this.b.l(0,a,t)}return t},
hl:function(a){var u,t,s,r,q,p,o,n,m=H.d([],[V.dv]),l=this.c,k=[P.q],j=H.d([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.aN(a,s)
q=l.fI(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jj(j)
throw H.f(P.v("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.d([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jj(j)
o=l.d
n=o.c.j(0,p)
t=new V.dv(n==null?o.b:n,p,s)}++s}}},
sfa:function(a){this.a=H.p(a,"$iA",[P.k,V.ch],"$aA")},
sfe:function(a){this.b=H.p(a,"$iA",[P.k,V.ck],"$aA")}}
V.cl.prototype={
i:function(a){return this.b.b+": "+this.bI(0)}}
X.cP.prototype={$ic9:1}
X.f8.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.ar():u}}
X.de.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.ar():u},
ak:function(a){var u
H.m(a,"$iD")
u=this.f
if(u!=null)u.K(a)},
dw:function(){return this.ak(null)},
saH:function(a){var u,t,s=this
if(!J.P(s.b,a)){u=s.b
if(u!=null)u.gt().B(0,s.gbP())
t=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gbP())
u=new D.M("mover",t,s.b,[U.bz])
u.b=!0
s.ak(u)}},
$ic9:1,
$icP:1}
X.ds.prototype={}
V.j2.prototype={
$1:function(a){var u
H.m(a,"$iag")
u=C.d.d0(this.a.gfK(),2)
if(u!=="0.00")P.jD(u+" fps")},
$S:37}
V.h9.prototype={
dl:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.j
W.Y(q,"scroll",H.l(new V.hb(o),{func:1,ret:-1,args:[r]}),!1,r)},
ck:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.p(a,"$ib",[P.k],"$ab")
this.f4()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hl(C.a.fP(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.mA(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.Z(m[1])
l.textContent=H.Z(m[0])
t.appendChild(l)}else{k=P.lG(C.E,n,C.m,!1)
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
f4:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.hy()
t=P.k
u.sfa(new H.R([t,V.ch]))
u.sfe(new H.R([t,V.ck]))
u.c=null
u.c=u.F(0,q)
t=u.F(0,q).p(0,p)
s=V.a5(new H.U("*"))
C.a.h(t.a,s)
t.c=!0
t=u.F(0,p).p(0,p)
s=new V.aZ()
r=[V.aX]
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.a5(new H.U("*"))
C.a.h(s.a,t)
t=u.F(0,p).p(0,"BoldEnd")
s=V.a5(new H.U("*"))
C.a.h(t.a,s)
t.c=!0
t=u.F(0,q).p(0,o)
s=V.a5(new H.U("_"))
C.a.h(t.a,s)
t.c=!0
t=u.F(0,o).p(0,o)
s=new V.aZ()
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.a5(new H.U("_"))
C.a.h(s.a,t)
t=u.F(0,o).p(0,n)
s=V.a5(new H.U("_"))
C.a.h(t.a,s)
t.c=!0
t=u.F(0,q).p(0,m)
s=V.a5(new H.U("`"))
C.a.h(t.a,s)
t.c=!0
t=u.F(0,m).p(0,m)
s=new V.aZ()
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.a5(new H.U("`"))
C.a.h(s.a,t)
t=u.F(0,m).p(0,"CodeEnd")
s=V.a5(new H.U("`"))
C.a.h(t.a,s)
t.c=!0
t=u.F(0,q).p(0,l)
s=V.a5(new H.U("["))
C.a.h(t.a,s)
t.c=!0
t=u.F(0,l).p(0,k)
s=V.a5(new H.U("|"))
C.a.h(t.a,s)
s=u.F(0,l).p(0,j)
t=V.a5(new H.U("]"))
C.a.h(s.a,t)
s.c=!0
s=u.F(0,l).p(0,l)
t=new V.aZ()
t.sab(H.d([],r))
C.a.h(s.a,t)
s=V.a5(new H.U("|]"))
C.a.h(t.a,s)
s=u.F(0,k).p(0,j)
t=V.a5(new H.U("]"))
C.a.h(s.a,t)
s.c=!0
s=u.F(0,k).p(0,k)
t=new V.aZ()
t.sab(H.d([],r))
C.a.h(s.a,t)
s=V.a5(new H.U("|]"))
C.a.h(t.a,s)
C.a.h(u.F(0,q).p(0,i).a,new V.ex())
s=u.F(0,i).p(0,i)
t=new V.aZ()
t.sab(H.d([],r))
C.a.h(s.a,t)
s=V.a5(new H.U("*_`["))
C.a.h(t.a,s)
s=u.F(0,"BoldEnd")
s.d=s.a.aK(p)
s=u.F(0,n)
s.d=s.a.aK(o)
s=u.F(0,"CodeEnd")
s.d=s.a.aK(m)
s=u.F(0,j)
s.d=s.a.aK("Link")
s=u.F(0,i)
s.d=s.a.aK(i)
this.b=u}}
V.hb.prototype={
$1:function(a){P.k5(C.h,new V.ha(this.a))},
$S:21}
V.ha.prototype={
$0:function(){var u=C.d.a0(document.documentElement.scrollTop),t=this.a.style,s=H.h(-0.01*u)+"px"
t.top=s},
$S:1}
N.j_.prototype={
$1:function(a){var u,t,s,r
H.m(a,"$iag")
u=this.a
t=u.b
s=u.e
r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=H.m(s[t],"$ibk")
u=u.f
if(u!=null)u.cp()}return},
$S:38};(function aliases(){var u=J.a.prototype
u.dd=u.i
u=J.d2.prototype
u.de=u.i
u=O.c6.prototype
u.bJ=u.ac
u=O.aI.prototype
u.bK=u.ac
u=V.d7.prototype
u.df=u.as
u.bI=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"m9","lz",10)
u(P,"ma","lA",10)
u(P,"mb","lB",10)
t(P,"ko","m7",2)
var n
s(n=E.ab.prototype,"gcO",0,0,null,["$1","$0"],["cP","fZ"],0,0)
s(n,"gcM",0,0,null,["$1","$0"],["cN","fY"],0,0)
s(n,"gcK",0,0,null,["$1","$0"],["cL","fV"],0,0)
r(n,"gfT","fU",6)
r(n,"gfW","fX",6)
s(n=E.du.prototype,"gbM",0,0,null,["$1","$0"],["bO","bN"],0,0)
q(n,"ghb","cV",2)
p(n=X.dA.prototype,"gej","ek",9)
p(n,"ge7","e8",9)
p(n,"ged","ee",3)
p(n,"gen","eo",17)
p(n,"gel","em",17)
p(n,"ger","es",3)
p(n,"gew","ex",3)
p(n,"geh","ei",3)
p(n,"geu","ev",3)
p(n,"gef","eg",3)
p(n,"gey","ez",30)
p(n,"geA","eB",9)
p(n,"geL","eM",7)
p(n,"geH","eI",7)
p(n,"geJ","eK",7)
s(D.bc.prototype,"gdm",0,0,null,["$1","$0"],["a8","dn"],0,0)
s(n=D.d4.prototype,"gc6",0,0,null,["$1","$0"],["c7","ep"],0,0)
p(n,"geD","eE",31)
r(n,"ge1","e2",18)
r(n,"geF","eG",18)
o(V.b1.prototype,"gk","bu",19)
o(V.H.prototype,"gk","bu",19)
s(n=M.cW.prototype,"ga3",0,0,null,["$1","$0"],["a9","dr"],0,0)
r(n,"ge9","ea",6)
r(n,"geb","ec",6)
s(n=O.d8.prototype,"gaM",0,0,null,["$1","$0"],["M","aZ"],0,0)
s(n,"geW",0,0,null,["$1","$0"],["cb","eX"],0,0)
r(n,"ge3","e4",20)
r(n,"ge5","e6",20)
s(O.c6.prototype,"gaM",0,0,null,["$1","$0"],["M","aZ"],0,0)
s(X.de.prototype,"gbP",0,0,null,["$1","$0"],["ak","dw"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.jf,J.a,J.aj,P.dS,P.i,H.d6,P.aF,H.bw,H.dz,H.hD,P.be,H.bX,H.e8,P.a4,H.fh,H.fi,H.fc,P.ee,P.aU,P.ao,P.dC,P.hk,P.ci,P.hl,P.ag,P.a8,P.iL,P.iF,P.cs,P.dR,P.t,P.bY,P.iK,P.a7,P.bb,P.a3,P.bd,P.fU,P.dr,P.dK,P.f7,P.b,P.A,P.F,P.ac,P.k,P.bj,W.eM,W.x,W.cZ,P.ej,P.iA,O.T,O.c7,E.eG,E.ab,E.fY,E.du,Z.dB,Z.i8,Z.cN,Z.bg,Z.b2,D.eJ,D.bv,D.D,X.cO,X.d3,X.fe,X.fl,X.c8,X.fJ,X.hz,X.dA,D.bc,D.a_,D.df,D.dq,V.W,V.ba,V.eY,V.d9,V.aa,V.af,V.as,V.dh,V.dk,V.b1,V.H,M.cW,A.cJ,A.eB,A.a9,A.aq,A.at,A.au,A.ft,A.bE,A.bF,A.bH,A.dw,A.hM,F.X,F.f0,F.aW,F.fg,F.bi,F.dn,F.h6,F.h7,F.h8,F.am,F.hX,F.hY,F.i0,F.i2,F.i3,F.i4,O.bD,O.c6,O.fu,T.hu,V.ex,V.aX,V.d7,V.h5,V.ch,V.dv,V.ck,V.hy,X.cP,X.ds,X.de,V.h9])
s(J.a,[J.fb,J.d1,J.d2,J.aG,J.c5,J.by,H.cb,W.e,W.ew,W.cK,W.bW,W.aB,W.aC,W.L,W.dE,W.eQ,W.eR,W.dG,W.cV,W.dI,W.eT,W.j,W.dL,W.aE,W.f9,W.dN,W.bf,W.fk,W.fD,W.dT,W.dU,W.aJ,W.dV,W.dY,W.aK,W.e1,W.e3,W.aN,W.e4,W.aO,W.e9,W.av,W.ec,W.hx,W.aQ,W.ef,W.hB,W.hR,W.ek,W.em,W.eo,W.eq,W.es,P.aV,P.dP,P.b_,P.e_,P.fX,P.ea,P.b0,P.eh,P.eC,P.dD,P.cL,P.di,P.bC,P.dm,P.dt,P.dx,P.e6])
s(J.d2,[J.fV,J.co,J.bh])
t(J.je,J.aG)
s(J.c5,[J.d0,J.d_])
t(P.fj,P.dS)
s(P.fj,[H.dy,W.ii,W.ih,P.f3])
t(H.U,H.dy)
s(P.i,[H.eW,H.fo,H.i9])
s(P.aF,[H.fp,H.ia])
s(P.be,[H.fR,H.fd,H.hP,H.hF,H.eI,H.h3,P.eA,P.dd,P.az,P.hQ,P.hO,P.hg,P.eK,P.eP])
s(H.bX,[H.j4,H.hp,H.iW,H.iX,H.iY,P.id,P.ic,P.ie,P.ig,P.iJ,P.iI,P.io,P.is,P.ip,P.iq,P.ir,P.iv,P.iw,P.iu,P.it,P.hm,P.hn,P.iR,P.iD,P.iC,P.iE,P.fn,P.eU,P.eV,W.fF,W.fH,W.h2,W.hj,W.im,P.iT,P.f4,P.f5,P.eE,E.fZ,E.h_,E.h0,E.hw,D.eZ,D.f_,F.iM,F.i6,F.i5,F.hZ,F.i_,O.fx,O.fy,O.fz,O.fA,O.fB,O.fC,T.hv,V.j2,V.hb,V.ha,N.j_])
s(H.hp,[H.hh,H.bU])
t(H.ib,P.eA)
t(P.fm,P.a4)
t(H.R,P.fm)
t(H.d5,H.eW)
t(H.da,H.cb)
s(H.da,[H.ct,H.cv])
t(H.cu,H.ct)
t(H.ca,H.cu)
t(H.cw,H.cv)
t(H.db,H.cw)
s(H.db,[H.fK,H.fL,H.fM,H.fN,H.fO,H.dc,H.fP])
t(P.iB,P.iL)
t(P.iz,P.iF)
t(P.cR,P.hl)
t(P.eX,P.bY)
t(P.hS,P.eX)
t(P.hT,P.cR)
s(P.a3,[P.z,P.q])
s(P.az,[P.bB,P.fa])
s(W.e,[W.C,W.f2,W.aM,W.cx,W.aP,W.aw,W.cz,W.i7,W.cq,P.eF,P.bt])
s(W.C,[W.V,W.b9])
s(W.V,[W.o,P.n])
s(W.o,[W.ey,W.ez,W.bu,W.cT,W.f6,W.c2,W.h4])
s(W.aB,[W.c_,W.eN,W.eO])
t(W.eL,W.aC)
t(W.c0,W.dE)
t(W.dH,W.dG)
t(W.cU,W.dH)
t(W.dJ,W.dI)
t(W.eS,W.dJ)
t(W.aD,W.cK)
t(W.dM,W.dL)
t(W.f1,W.dM)
t(W.dO,W.dN)
t(W.bx,W.dO)
t(W.bl,W.j)
s(W.bl,[W.aH,W.a0,W.ax])
t(W.fE,W.dT)
t(W.fG,W.dU)
t(W.dW,W.dV)
t(W.fI,W.dW)
t(W.dZ,W.dY)
t(W.cc,W.dZ)
t(W.e2,W.e1)
t(W.fW,W.e2)
t(W.h1,W.e3)
t(W.cy,W.cx)
t(W.hd,W.cy)
t(W.e5,W.e4)
t(W.he,W.e5)
t(W.hi,W.e9)
t(W.ed,W.ec)
t(W.hq,W.ed)
t(W.cA,W.cz)
t(W.hr,W.cA)
t(W.eg,W.ef)
t(W.hA,W.eg)
t(W.aT,W.a0)
t(W.el,W.ek)
t(W.ij,W.el)
t(W.dF,W.cV)
t(W.en,W.em)
t(W.ix,W.en)
t(W.ep,W.eo)
t(W.dX,W.ep)
t(W.er,W.eq)
t(W.iG,W.er)
t(W.et,W.es)
t(W.iH,W.et)
t(W.ik,P.hk)
t(W.jo,W.ik)
t(W.il,P.ci)
t(P.ak,P.iA)
t(P.dQ,P.dP)
t(P.ff,P.dQ)
t(P.e0,P.e_)
t(P.fS,P.e0)
t(P.eb,P.ea)
t(P.ho,P.eb)
t(P.ei,P.eh)
t(P.hC,P.ei)
t(P.eD,P.dD)
t(P.fT,P.bt)
t(P.e7,P.e6)
t(P.hf,P.e7)
s(E.eG,[Z.cM,A.cg,T.cj])
s(D.D,[D.c3,D.c4,D.M])
t(D.d4,O.T)
t(U.bz,D.eJ)
s(U.bz,[U.cQ,U.dl])
t(A.fq,A.cg)
s(A.dw,[A.al,A.hJ,A.hK,A.hL,A.hH,A.a1,A.hI,A.O,A.cm,A.hN,A.cn,A.ah,A.a6,A.bG])
t(F.hc,F.f0)
t(F.hG,F.fg)
t(F.i1,F.i2)
t(F.fQ,F.i3)
t(O.d8,O.bD)
s(O.c6,[O.fr,O.fs,O.aI])
s(O.aI,[O.fv,O.fw])
t(T.bk,T.cj)
s(T.bk,[T.hs,T.ht])
s(V.d7,[V.aZ,V.cl])
t(X.f8,X.ds)
u(H.dy,H.dz)
u(H.ct,P.t)
u(H.cu,H.bw)
u(H.cv,P.t)
u(H.cw,H.bw)
u(P.dS,P.t)
u(W.dE,W.eM)
u(W.dG,P.t)
u(W.dH,W.x)
u(W.dI,P.t)
u(W.dJ,W.x)
u(W.dL,P.t)
u(W.dM,W.x)
u(W.dN,P.t)
u(W.dO,W.x)
u(W.dT,P.a4)
u(W.dU,P.a4)
u(W.dV,P.t)
u(W.dW,W.x)
u(W.dY,P.t)
u(W.dZ,W.x)
u(W.e1,P.t)
u(W.e2,W.x)
u(W.e3,P.a4)
u(W.cx,P.t)
u(W.cy,W.x)
u(W.e4,P.t)
u(W.e5,W.x)
u(W.e9,P.a4)
u(W.ec,P.t)
u(W.ed,W.x)
u(W.cz,P.t)
u(W.cA,W.x)
u(W.ef,P.t)
u(W.eg,W.x)
u(W.ek,P.t)
u(W.el,W.x)
u(W.em,P.t)
u(W.en,W.x)
u(W.eo,P.t)
u(W.ep,W.x)
u(W.eq,P.t)
u(W.er,W.x)
u(W.es,P.t)
u(W.et,W.x)
u(P.dP,P.t)
u(P.dQ,W.x)
u(P.e_,P.t)
u(P.e0,W.x)
u(P.ea,P.t)
u(P.eb,W.x)
u(P.eh,P.t)
u(P.ei,W.x)
u(P.dD,P.a4)
u(P.e6,P.t)
u(P.e7,W.x)})()
var v={mangledGlobalNames:{q:"int",z:"double",a3:"num",k:"String",a7:"bool",F:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.D]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.a0]},{func:1,ret:P.F,args:[F.X]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:-1,args:[P.q,[P.i,E.ab]]},{func:1,ret:-1,args:[W.ax]},{func:1,ret:P.F,args:[D.D]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.q,P.q]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.k,args:[P.q]},{func:1,ret:P.F,args:[,]},{func:1,args:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:-1,args:[W.aH]},{func:1,ret:-1,args:[P.q,[P.i,D.a_]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.q,[P.i,V.aa]]},{func:1,ret:P.F,args:[W.j]},{func:1,ret:[P.ao,,],args:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.a7,args:[W.C]},{func:1,ret:W.V,args:[W.C]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[,P.k]},{func:1,args:[W.j]},{func:1,args:[P.k]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.a7,args:[[P.i,D.a_]]},{func:1,ret:P.F,args:[F.am,P.z,P.z]},{func:1,ret:P.F,args:[,],opt:[P.ac]},{func:1,ret:P.q,args:[A.aq,A.aq]},{func:1,ret:P.q,args:[A.at,A.at]},{func:1,ret:P.q,args:[A.au,A.au]},{func:1,ret:P.F,args:[P.ag]},{func:1,ret:-1,args:[P.ag]},{func:1,ret:P.F,args:[P.a3]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bu.prototype
C.B=J.a.prototype
C.a=J.aG.prototype
C.C=J.d_.prototype
C.e=J.d0.prototype
C.i=J.d1.prototype
C.d=J.c5.prototype
C.c=J.by.prototype
C.D=J.bh.prototype
C.F=W.cc.prototype
C.o=J.fV.prototype
C.b=P.bC.prototype
C.j=J.co.prototype
C.p=W.aT.prototype
C.q=W.cq.prototype
C.k=function getTagFallback(o) {
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
C.l=function(hooks) { return hooks; }

C.y=new P.fU()
C.m=new P.hS()
C.z=new P.hT()
C.f=new P.iB()
C.h=new P.bd(0)
C.A=new P.bd(5e6)
C.E=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.q])})();(function staticFields(){$.aA=0
$.bV=null
$.jI=null
$.jq=!1
$.ks=null
$.km=null
$.ky=null
$.iU=null
$.iZ=null
$.jA=null
$.bI=null
$.cD=null
$.cE=null
$.jr=!1
$.Q=C.f
$.ae=[]
$.jR=null
$.jV=null
$.cd=null
$.k0=null
$.ka=null
$.kc=null
$.hU=null
$.hV=null
$.hW=null
$.kb=null
$.jU=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mJ","kD",function(){return H.kr("_$dart_dartClosure")})
u($,"mK","jF",function(){return H.kr("_$dart_js")})
u($,"mO","kE",function(){return H.aR(H.hE({
toString:function(){return"$receiver$"}}))})
u($,"mP","kF",function(){return H.aR(H.hE({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mQ","kG",function(){return H.aR(H.hE(null))})
u($,"mR","kH",function(){return H.aR(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mU","kK",function(){return H.aR(H.hE(void 0))})
u($,"mV","kL",function(){return H.aR(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mT","kJ",function(){return H.aR(H.k8(null))})
u($,"mS","kI",function(){return H.aR(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mX","kN",function(){return H.aR(H.k8(void 0))})
u($,"mW","kM",function(){return H.aR(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nd","jG",function(){return P.ly()})
u($,"ne","kR",function(){return P.ln("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n6","kQ",function(){return Z.an(0)})
u($,"n0","kO",function(){return Z.an(511)})
u($,"n8","b7",function(){return Z.an(1)})
u($,"n7","b6",function(){return Z.an(2)})
u($,"n2","b5",function(){return Z.an(4)})
u($,"n9","b8",function(){return Z.an(8)})
u($,"na","bs",function(){return Z.an(16)})
u($,"n3","cG",function(){return Z.an(32)})
u($,"n4","cH",function(){return Z.an(64)})
u($,"n5","kP",function(){return Z.an(96)})
u($,"nb","bR",function(){return Z.an(128)})
u($,"n1","b4",function(){return Z.an(256)})
u($,"mI","kC",function(){return new V.eY(1e-9)})
u($,"mH","J",function(){return $.kC()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cb,ArrayBufferView:H.cb,Float32Array:H.ca,Float64Array:H.ca,Int16Array:H.fK,Int32Array:H.fL,Int8Array:H.fM,Uint16Array:H.fN,Uint32Array:H.fO,Uint8ClampedArray:H.dc,CanvasPixelArray:H.dc,Uint8Array:H.fP,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLBodyElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTableElement:W.o,HTMLTableRowElement:W.o,HTMLTableSectionElement:W.o,HTMLTemplateElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.ew,HTMLAnchorElement:W.ey,HTMLAreaElement:W.ez,Blob:W.cK,HTMLCanvasElement:W.bu,CanvasRenderingContext2D:W.bW,CDATASection:W.b9,CharacterData:W.b9,Comment:W.b9,ProcessingInstruction:W.b9,Text:W.b9,CSSNumericValue:W.c_,CSSUnitValue:W.c_,CSSPerspective:W.eL,CSSCharsetRule:W.L,CSSConditionRule:W.L,CSSFontFaceRule:W.L,CSSGroupingRule:W.L,CSSImportRule:W.L,CSSKeyframeRule:W.L,MozCSSKeyframeRule:W.L,WebKitCSSKeyframeRule:W.L,CSSKeyframesRule:W.L,MozCSSKeyframesRule:W.L,WebKitCSSKeyframesRule:W.L,CSSMediaRule:W.L,CSSNamespaceRule:W.L,CSSPageRule:W.L,CSSRule:W.L,CSSStyleRule:W.L,CSSSupportsRule:W.L,CSSViewportRule:W.L,CSSStyleDeclaration:W.c0,MSStyleCSSProperties:W.c0,CSS2Properties:W.c0,CSSImageValue:W.aB,CSSKeywordValue:W.aB,CSSPositionValue:W.aB,CSSResourceValue:W.aB,CSSURLImageValue:W.aB,CSSStyleValue:W.aB,CSSMatrixComponent:W.aC,CSSRotation:W.aC,CSSScale:W.aC,CSSSkew:W.aC,CSSTranslation:W.aC,CSSTransformComponent:W.aC,CSSTransformValue:W.eN,CSSUnparsedValue:W.eO,DataTransferItemList:W.eQ,HTMLDivElement:W.cT,DOMException:W.eR,ClientRectList:W.cU,DOMRectList:W.cU,DOMRectReadOnly:W.cV,DOMStringList:W.eS,DOMTokenList:W.eT,Element:W.V,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aD,FileList:W.f1,FileWriter:W.f2,HTMLFormElement:W.f6,Gamepad:W.aE,History:W.f9,HTMLCollection:W.bx,HTMLFormControlsCollection:W.bx,HTMLOptionsCollection:W.bx,ImageData:W.bf,HTMLImageElement:W.c2,KeyboardEvent:W.aH,Location:W.fk,MediaList:W.fD,MIDIInputMap:W.fE,MIDIOutputMap:W.fG,MimeType:W.aJ,MimeTypeArray:W.fI,PointerEvent:W.a0,MouseEvent:W.a0,DragEvent:W.a0,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cc,RadioNodeList:W.cc,Plugin:W.aK,PluginArray:W.fW,RTCStatsReport:W.h1,HTMLSelectElement:W.h4,SourceBuffer:W.aM,SourceBufferList:W.hd,SpeechGrammar:W.aN,SpeechGrammarList:W.he,SpeechRecognitionResult:W.aO,Storage:W.hi,CSSStyleSheet:W.av,StyleSheet:W.av,TextTrack:W.aP,TextTrackCue:W.aw,VTTCue:W.aw,TextTrackCueList:W.hq,TextTrackList:W.hr,TimeRanges:W.hx,Touch:W.aQ,TouchEvent:W.ax,TouchList:W.hA,TrackDefaultList:W.hB,CompositionEvent:W.bl,FocusEvent:W.bl,TextEvent:W.bl,UIEvent:W.bl,URL:W.hR,VideoTrackList:W.i7,WheelEvent:W.aT,Window:W.cq,DOMWindow:W.cq,CSSRuleList:W.ij,ClientRect:W.dF,DOMRect:W.dF,GamepadList:W.ix,NamedNodeMap:W.dX,MozNamedAttrMap:W.dX,SpeechRecognitionResultList:W.iG,StyleSheetList:W.iH,SVGLength:P.aV,SVGLengthList:P.ff,SVGNumber:P.b_,SVGNumberList:P.fS,SVGPointList:P.fX,SVGStringList:P.ho,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.b0,SVGTransformList:P.hC,AudioBuffer:P.eC,AudioParamMap:P.eD,AudioTrackList:P.eF,AudioContext:P.bt,webkitAudioContext:P.bt,BaseAudioContext:P.bt,OfflineAudioContext:P.fT,WebGLBuffer:P.cL,WebGLProgram:P.di,WebGL2RenderingContext:P.bC,WebGLShader:P.dm,WebGLTexture:P.dt,WebGLUniformLocation:P.dx,SQLResultSetRowList:P.hf})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.da.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
W.cx.$nativeSuperclassTag="EventTarget"
W.cy.$nativeSuperclassTag="EventTarget"
W.cz.$nativeSuperclassTag="EventTarget"
W.cA.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.ku,[])
else N.ku([])})})()
//# sourceMappingURL=test.dart.js.map
