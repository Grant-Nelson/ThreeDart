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
a[c]=function(){a[c]=function(){H.mR(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jB(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jr:function jr(){},
fb:function(){return new P.bV("No element")},
lj:function(){return new P.bV("Too many elements")},
d2:function(a,b,c,d){if(c-b<=32)H.lE(a,b,c,d)
else H.lD(a,b,c,d)},
lE:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.Z()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
lD:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a0(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a0(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=q
q=r
r=p}C.a.n(a2,d,u)
C.a.n(a2,b,s)
C.a.n(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.n(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.n(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.E(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a8()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.Z()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.a8()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.Z()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.Z()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a8()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.n(a2,a3,a2[a1])
C.a.n(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.n(a2,a4,a2[a1])
C.a.n(a2,a1,r)
H.d2(a2,a3,o-2,a5)
H.d2(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.E(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.E(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a8()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}H.d2(a2,o,n,a5)}else H.d2(a2,o,n,a5)},
l:function l(a){this.a=a},
eP:function eP(){},
cJ:function cJ(){},
bM:function bM(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fq:function fq(a,b,c){this.a=a
this.b=b
this.$ti=c},
fr:function fr(a,b){this.a=null
this.b=a
this.c=b},
fs:function fs(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(a,b,c){this.a=a
this.b=b
this.$ti=c},
im:function im(a,b){this.a=a
this.b=b},
cx:function cx(){},
i0:function i0(){},
di:function di(){},
el:function(a){var u,t=H.mT(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mA:function(a){return v.types[a]},
mH:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iv},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.af(a)
if(typeof u!=="string")throw H.f(H.b8(a))
return u},
bS:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bT:function(a){return H.lq(a)+H.kz(H.cg(a),0,null)},
lq:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibt){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.el(t.length>1&&C.b.aB(t,0)===36?C.b.aj(t,1):t)},
kb:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ly:function(a){var u,t,s,r=H.b([],[P.x])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b8(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.b6(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.b8(s))}return H.kb(r)},
kc:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b8(s))
if(s<0)throw H.f(H.b8(s))
if(s>65535)return H.ly(a)}return H.kb(a)},
jt:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.b6(u,10))>>>0,56320|u&1023)}throw H.f(P.am(a,0,1114111,null,null))},
bo:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lx:function(a){var u=H.bo(a).getFullYear()+0
return u},
lv:function(a){var u=H.bo(a).getMonth()+1
return u},
lr:function(a){var u=H.bo(a).getDate()+0
return u},
ls:function(a){var u=H.bo(a).getHours()+0
return u},
lu:function(a){var u=H.bo(a).getMinutes()+0
return u},
lw:function(a){var u=H.bo(a).getSeconds()+0
return u},
lt:function(a){var u=H.bo(a).getMilliseconds()+0
return u},
u:function(a){throw H.f(H.b8(a))},
c:function(a,b){if(a==null)J.bd(a)
throw H.f(H.bx(a,b))},
bx:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aa(!0,b,s,null)
u=J.bd(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.cY(b,s)},
mu:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bp(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bp(a,c,!0,b,"end",u)
return new P.aa(!0,b,"end",null)},
b8:function(a){return new P.aa(!0,a,null,null)},
mp:function(a){if(typeof a!=="number")throw H.f(H.b8(a))
return a},
f:function(a){var u
if(a==null)a=new P.cU()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kL})
u.name=""}else u.toString=H.kL
return u},
kL:function(){return J.af(this.dartException)},
t:function(a){throw H.f(a)},
o:function(a){throw H.f(P.aH(a))},
an:function(a){var u,t,s,r,q,p
a=H.kK(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hP(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kn:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k6:function(a,b){return new H.fW(a,b==null?null:b.method)},
js:function(a,b){var u=b==null,t=u?null:b.method
return new H.ff(a,t,u?null:b.receiver)},
aC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.b6(t,16)&8191)===10)switch(s){case 438:return f.$1(H.js(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k6(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kO()
q=$.kP()
p=$.kQ()
o=$.kR()
n=$.kU()
m=$.kV()
l=$.kT()
$.kS()
k=$.kX()
j=$.kW()
i=r.aa(u)
if(i!=null)return f.$1(H.js(u,i))
else{i=q.aa(u)
if(i!=null){i.method="call"
return f.$1(H.js(u,i))}else{i=p.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=n.aa(u)
if(i==null){i=m.aa(u)
if(i==null){i=l.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=k.aa(u)
if(i==null){i=j.aa(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k6(u,i))}}return f.$1(new H.i_(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d4()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aa(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d4()
return a},
jG:function(a){var u
if(a==null)return new H.dZ(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dZ(a)},
my:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
mG:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.r("Unsupported number of arguments for wrapped closure"))},
bw:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mG)
a.$identity=u
return u},
ld:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ht().constructor.prototype):Object.create(new H.bB(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ag
if(typeof t!=="number")return t.E()
$.ag=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jU(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l9(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jU(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l9:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mA,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jT:H.jf
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
la:function(a,b,c,d){var u=H.jf
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jU:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lc(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.la(t,!r,u,b)
if(t===0){r=$.ag
if(typeof r!=="number")return r.E()
$.ag=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bC
return new Function(r+H.e(q==null?$.bC=H.ew("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ag
if(typeof r!=="number")return r.E()
$.ag=r+1
o+=r
r="return function("+o+"){return this."
q=$.bC
return new Function(r+H.e(q==null?$.bC=H.ew("self"):q)+"."+H.e(u)+"("+o+");}")()},
lb:function(a,b,c,d){var u=H.jf,t=H.jT
switch(b?-1:a){case 0:throw H.f(H.lB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lc:function(a,b){var u,t,s,r,q,p,o,n=$.bC
if(n==null)n=$.bC=H.ew("self")
u=$.jS
if(u==null)u=$.jS=H.ew("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lb(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ag
if(typeof u!=="number")return u.E()
$.ag=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ag
if(typeof u!=="number")return u.E()
$.ag=u+1
return new Function(n+u+"}")()},
jB:function(a,b,c,d,e,f,g){return H.ld(a,b,c,d,!!e,!!f,g)},
jf:function(a){return a.a},
jT:function(a){return a.c},
ew:function(a){var u,t,s,r=new H.bB("self","target","receiver","name"),q=J.jp(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mL:function(a,b){throw H.f(H.l8(a,H.el(b.substring(2))))},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.mL(a,b)},
mw:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
l8:function(a,b){return new H.ex("CastError: "+P.jm(a)+": type '"+H.e(H.ml(a))+"' is not a subtype of type '"+b+"'")},
ml:function(a){var u,t=J.N(a)
if(!!t.$ibE){u=H.mw(t)
if(u!=null)return H.mM(u)
return"Closure"}return H.bT(a)},
mR:function(a){throw H.f(new P.eH(a))},
lB:function(a){return new H.hc(a)},
kF:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cg:function(a){if(a==null)return
return a.$ti},
np:function(a,b,c){return H.j9(a["$a"+H.e(c)],H.cg(b))},
mz:function(a,b,c,d){var u=H.j9(a["$a"+H.e(c)],H.cg(b))
return u==null?null:u[d]},
jF:function(a,b,c){var u=H.j9(a["$a"+H.e(b)],H.cg(a))
return u==null?null:u[c]},
bz:function(a,b){var u=H.cg(a)
return u==null?null:u[b]},
mM:function(a){return H.b7(a,null)},
b7:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.el(a[0].name)+H.kz(a,1,b)
if(typeof a=="function")return H.el(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.lU(a,b)
if('futureOr' in a)return"FutureOr<"+H.b7("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lU:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.q])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.E(p,a0[m])
l=u[q]
if(l!=null&&l!==P.U)p+=" extends "+H.b7(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b7(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b7(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b7(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mx(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b7(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kz:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ay("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b7(p,c)}return"<"+u.h(0)+">"},
j9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nn:function(a,b,c){return a.apply(b,H.j9(J.N(b)["$a"+H.e(c)],H.cg(b)))},
no:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mI:function(a){var u,t,s,r,q=$.kG.$1(a),p=$.j_[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j5[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kC.$2(a,q)
if(q!=null){p=$.j_[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j5[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j7(u)
$.j_[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j5[q]=u
return u}if(s==="-"){r=H.j7(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kI(a,u)
if(s==="*")throw H.f(P.ko(q))
if(v.leafTags[q]===true){r=H.j7(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kI(a,u)},
kI:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jI(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j7:function(a){return J.jI(a,!1,null,!!a.$iv)},
mJ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j7(u)
else return J.jI(u,c,null,null)},
mE:function(){if(!0===$.jH)return
$.jH=!0
H.mF()},
mF:function(){var u,t,s,r,q,p,o,n
$.j_=Object.create(null)
$.j5=Object.create(null)
H.mD()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kJ.$1(q)
if(p!=null){o=H.mJ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mD:function(){var u,t,s,r,q,p,o=C.w()
o=H.bv(C.x,H.bv(C.y,H.bv(C.p,H.bv(C.p,H.bv(C.z,H.bv(C.A,H.bv(C.B(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kG=new H.j2(r)
$.kC=new H.j3(q)
$.kJ=new H.j4(p)},
bv:function(a,b){return a(b)||b},
ll:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.f1("Illegal RegExp pattern ("+String(p)+")",a))},
mO:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mv:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kK:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jL:function(a,b,c){var u=H.mP(a,b,c)
return u},
mP:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kK(b),'g'),H.mv(c))},
hP:function hP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fW:function fW(a,b){this.a=a
this.b=b},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
i_:function i_(a){this.a=a},
jc:function jc(a){this.a=a},
dZ:function dZ(a){this.a=a
this.b=null},
bE:function bE(){},
hB:function hB(){},
ht:function ht(){},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ex:function ex(a){this.a=a},
hc:function hc(a){this.a=a},
L:function L(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fj:function fj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cH:function cH(a,b){this.a=a
this.$ti=b},
fk:function fk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
fe:function fe(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function(a){return a},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bx(b,a))},
lT:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mu(a,b,c))
return b},
bQ:function bQ(){},
cP:function cP(){},
bP:function bP(){},
cQ:function cQ(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
cR:function cR(){},
fS:function fS(){},
c5:function c5(){},
c6:function c6(){},
c7:function c7(){},
c8:function c8(){},
mx:function(a){return J.k_(a?Object.keys(a):[],null)},
mT:function(a){return v.mangledGlobalNames[a]},
mK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j1:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jH==null){H.mE()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.ko("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jM()]
if(r!=null)return r
r=H.mI(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.jM(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
lk:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jR(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.am(a,0,4294967295,"length",null))
return J.k_(new Array(a),b)},
k_:function(a,b){return J.jp(H.b(a,[b]))},
jp:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cB.prototype
return J.cA.prototype}if(typeof a=="string")return J.aQ.prototype
if(a==null)return J.cC.prototype
if(typeof a=="boolean")return J.fd.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.U)return a
return J.j1(a)},
jC:function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.U)return a
return J.j1(a)},
j0:function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.U)return a
return J.j1(a)},
kE:function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.bt.prototype
return a},
jD:function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.bt.prototype
return a},
jE:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.U)return a
return J.j1(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).t(a,b)},
jO:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kE(a).u(a,b)},
em:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mH(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jC(a).i(a,b)},
l2:function(a,b,c,d){return J.jE(a).fq(a,b,c,d)},
jd:function(a,b){return J.kE(a).fF(a,b)},
je:function(a,b){return J.j0(a).C(a,b)},
l3:function(a,b){return J.j0(a).J(a,b)},
l4:function(a){return J.jE(a).gfB(a)},
bb:function(a){return J.N(a).gH(a)},
bc:function(a){return J.j0(a).gO(a)},
bd:function(a){return J.jC(a).gl(a)},
jP:function(a){return J.j0(a).hg(a)},
l5:function(a,b,c){return J.jD(a).b2(a,b,c)},
l6:function(a){return J.jD(a).hr(a)},
af:function(a){return J.N(a).h(a)},
a:function a(){},
fd:function fd(){},
cC:function cC(){},
cD:function cD(){},
h_:function h_(){},
bt:function bt(){},
aR:function aR(){},
aP:function aP(a){this.$ti=a},
jq:function jq(a){this.$ti=a},
X:function X(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bL:function bL(){},
cB:function cB(){},
cA:function cA(){},
aQ:function aQ(){}},P={
lJ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mm()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bw(new P.ip(s),1)).observe(u,{childList:true})
return new P.io(s,u,t)}else if(self.setImmediate!=null)return P.mn()
return P.mo()},
lK:function(a){self.scheduleImmediate(H.bw(new P.iq(a),0))},
lL:function(a){self.setImmediate(H.bw(new P.ir(a),0))},
lM:function(a){P.jv(C.i,a)},
jv:function(a,b){var u=C.d.a0(a.a,1000)
return P.lR(u<0?0:u,b)},
km:function(a,b){var u=C.d.a0(a.a,1000)
return P.lS(u<0?0:u,b)},
lR:function(a,b){var u=new P.e4()
u.dK(a,b)
return u},
lS:function(a,b){var u=new P.e4()
u.dL(a,b)
return u},
mf:function(){var u,t
for(;u=$.bu,u!=null;){$.cf=null
t=u.b
$.bu=t
if(t==null)$.ce=null
u.a.$0()}},
mk:function(){$.jz=!0
try{P.mf()}finally{$.cf=null
$.jz=!1
if($.bu!=null)$.jN().$1(P.kD())}},
mi:function(a){var u=new P.dq(a)
if($.bu==null){$.bu=$.ce=u
if(!$.jz)$.jN().$1(P.kD())}else $.ce=$.ce.b=u},
mj:function(a){var u,t,s=$.bu
if(s==null){P.mi(a)
$.cf=$.ce
return}u=new P.dq(a)
t=$.cf
if(t==null){u.b=s
$.bu=$.cf=u}else{u.b=t.b
$.cf=t.b=u
if(u.b==null)$.ce=u}},
kl:function(a,b){var u=$.ad
if(u===C.e)return P.jv(a,b)
return P.jv(a,u.fC(b))},
lH:function(a,b){var u=$.ad
if(u===C.e)return P.km(a,b)
return P.km(a,u.cM(b,P.db))},
kA:function(a,b,c,d,e){var u={}
u.a=d
P.mj(new P.iX(u,e))},
mg:function(a,b,c,d){var u,t=$.ad
if(t===c)return d.$0()
$.ad=c
u=t
try{t=d.$0()
return t}finally{$.ad=u}},
mh:function(a,b,c,d,e){var u,t=$.ad
if(t===c)return d.$1(e)
$.ad=c
u=t
try{t=d.$1(e)
return t}finally{$.ad=u}},
ip:function ip(a){this.a=a},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
e4:function e4(){this.c=0},
iR:function iR(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a){this.a=a
this.b=null},
d6:function d6(){},
hw:function hw(){},
db:function db(){},
iU:function iU(){},
iX:function iX(a,b){this.a=a
this.b=b},
iE:function iE(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function(a,b){return new H.L([a,b])},
lm:function(a){return H.my(a,new H.L([null,null]))},
cI:function(a){return new P.iB([a])},
jy:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lQ:function(a,b){var u=new P.dG(a,b)
u.c=a.e
return u},
li:function(a,b,c){var u,t
if(P.jA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.q])
$.a_.push(a)
try{P.lV(a,u)}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}t=P.kj(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jo:function(a,b,c){var u,t
if(P.jA(a))return b+"..."+c
u=new P.ay(b)
$.a_.push(a)
try{t=u
t.a=P.kj(t.a,a,", ")}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jA:function(a){var u,t
for(u=$.a_.length,t=0;t<u;++t)if(a===$.a_[t])return!0
return!1},
lV:function(a,b){var u,t,s,r,q,p,o,n=a.gO(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.e(n.gD(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gD(n);++l
if(!n.v()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gD(n);++l
for(;n.v();r=q,q=p){p=n.gD(n);++l
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
k1:function(a,b){var u,t,s=P.cI(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)s.m(0,a[t])
return s},
k3:function(a){var u,t={}
if(P.jA(a))return"{...}"
u=new P.ay("")
try{$.a_.push(a)
u.a+="{"
t.a=!0
J.l3(a,new P.fp(t,u))
u.a+="}"}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iB:function iB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iC:function iC(a){this.a=a
this.c=this.b=null},
dG:function dG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fl:function fl(){},
p:function p(){},
fo:function fo(){},
fp:function fp(a,b){this.a=a
this.b=b},
at:function at(){},
iI:function iI(){},
dH:function dH(){},
ez:function ez(){},
eC:function eC(){},
eR:function eR(){},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
f7:function f7(a){this.a=a},
i3:function i3(){},
i4:function i4(){},
iS:function iS(a){this.b=0
this.c=a},
lh:function(a){if(a instanceof H.bE)return a.h(0)
return"Instance of '"+H.e(H.bT(a))+"'"},
ln:function(a,b,c){var u,t,s=J.lk(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
k2:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bc(a);u.v();)t.push(u.gD(u))
if(b)return t
return J.jp(t)},
ju:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.ke(0,null,u)
return H.kc(t<u?C.a.dt(a,0,t):a)}return P.lF(a,0,null)},
lF:function(a,b,c){var u,t,s=J.bc(a)
for(u=0;u<b;++u)if(!s.v())throw H.f(P.am(b,0,u,null,null))
t=[]
for(;s.v();)t.push(s.gD(s))
return H.kc(t)},
lz:function(a){return new H.fe(a,H.ll(a,!1,!0,!1,!1,!1))},
kj:function(a,b,c){var u=J.bc(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gD(u))
while(u.v())}else{a+=H.e(u.gD(u))
for(;u.v();)a=a+c+H.e(u.gD(u))}return a},
ky:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.l1().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.fG(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jt(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
le:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lf:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cr:function(a){if(a>=10)return""+a
return"0"+a},
jW:function(a){return new P.aI(1000*a)},
jm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lh(a)},
l7:function(a){return new P.aa(!1,null,null,a)},
jR:function(a,b,c){return new P.aa(!0,a,b,c)},
cY:function(a,b){return new P.bp(null,null,!0,a,b,"Value not in range")},
am:function(a,b,c,d,e){return new P.bp(b,c,!0,a,d,"Invalid value")},
ke:function(a,b,c){if(0>a||a>c)throw H.f(P.am(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.am(b,a,c,"end",null))
return b}return c},
kd:function(a,b){if(typeof a!=="number")return a.a8()
if(a<0)throw H.f(P.am(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.bd(b):e
return new P.fa(u,!0,a,c,"Index out of range")},
Z:function(a){return new P.i1(a)},
ko:function(a){return new P.hZ(a)},
ki:function(a){return new P.bV(a)},
aH:function(a){return new P.eB(a)},
r:function(a){return new P.dy(a)},
jK:function(a){H.mK(a)},
ao:function ao(){},
a5:function a5(a,b){this.a=a
this.b=b},
K:function K(){},
aI:function aI(a){this.a=a},
eN:function eN(){},
eO:function eO(){},
bi:function bi(){},
cU:function cU(){},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bp:function bp(a,b,c,d,e,f){var _=this
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
i1:function i1(a){this.a=a},
hZ:function hZ(a){this.a=a},
bV:function bV(a){this.a=a},
eB:function eB(a){this.a=a},
fZ:function fZ(){},
d4:function d4(){},
eH:function eH(a){this.a=a},
dy:function dy(a){this.a=a},
f1:function f1(a,b){this.a=a
this.b=b},
f3:function f3(){},
x:function x(){},
h:function h(){},
fc:function fc(){},
ai:function ai(){},
cL:function cL(){},
aU:function aU(){},
a9:function a9(){},
U:function U(){},
q:function q(){},
ay:function ay(a){this.a=a},
ms:function(a){var u,t=J.N(a)
if(!!t.$iaM){u=t.gcT(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e9(a.data,a.height,a.width)},
mr:function(a){if(a instanceof P.e9)return{data:a.a,height:a.b,width:a.c}
return a},
aB:function(a){var u,t,s,r,q
if(a==null)return
u=P.k0(P.q,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.n(0,q,a[q])}return u},
mq:function(a){var u={}
a.J(0,new P.iY(u))
return u},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a){this.a=a},
eY:function eY(a,b){this.a=a
this.b=b},
eZ:function eZ(){},
f_:function f_(){},
iA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lP:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iD:function iD(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bl:function bl(){},
fh:function fh(){},
bn:function bn(){},
fX:function fX(){},
h4:function h4(){},
bU:function bU(){},
hx:function hx(){},
j:function j(){},
br:function br(){},
hO:function hO(){},
dE:function dE(){},
dF:function dF(){},
dP:function dP(){},
dQ:function dQ(){},
e0:function e0(){},
e1:function e1(){},
e7:function e7(){},
e8:function e8(){},
er:function er(){},
es:function es(){},
et:function et(a){this.a=a},
eu:function eu(){},
be:function be(){},
fY:function fY(){},
dr:function dr(){},
d_:function d_(){},
hs:function hs(){},
dX:function dX(){},
dY:function dY(){}},W={
jQ:function(){var u=document.createElement("a")
return u},
jh:function(){var u=document.createElement("canvas")
return u},
lg:function(a,b,c){var u=document.body,t=(u&&C.n).a9(u,a,b,c)
t.toString
u=new H.c2(new W.W(t),new W.eQ(),[W.I])
return u.gaz(u)},
jk:function(a){return"wheel"},
bG:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jE(a)
t=u.gdh(a)
if(typeof t==="string")r=u.gdh(a)}catch(s){H.aC(s)}return r},
iz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kw:function(a,b,c,d){var u=W.iz(W.iz(W.iz(W.iz(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
S:function(a,b,c,d){var u=W.kB(new W.ix(c),W.i)
if(u!=null&&!0)J.l2(a,b,u,!1)
return new W.iw(a,b,u,!1)},
kv:function(a){var u=W.jQ(),t=window.location
u=new W.c4(new W.iH(u,t))
u.dG(a)
return u},
lN:function(a,b,c,d){return!0},
lO:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kx:function(){var u=P.q,t=P.k1(C.k,u),s=H.b(["TEMPLATE"],[u])
t=new W.iO(t,P.cI(u),P.cI(u),P.cI(u),null)
t.dJ(null,new H.fs(C.k,new W.iP(),[H.bz(C.k,0),u]),s,null)
return t},
kB:function(a,b){var u=$.ad
if(u===C.e)return a
return u.cM(a,b)},
k:function k(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
ck:function ck(){},
bf:function bf(){},
bg:function bg(){},
aG:function aG(){},
eD:function eD(){},
F:function F(){},
bF:function bF(){},
eE:function eE(){},
a4:function a4(){},
ah:function ah(){},
eF:function eF(){},
eG:function eG(){},
eJ:function eJ(){},
ab:function ab(){},
eK:function eK(){},
ct:function ct(){},
cu:function cu(){},
eL:function eL(){},
eM:function eM(){},
it:function it(a,b){this.a=a
this.b=b},
P:function P(){},
eQ:function eQ(){},
i:function i(){},
d:function d(){},
aK:function aK(){},
eW:function eW(){},
eX:function eX(){},
f0:function f0(){},
aL:function aL(){},
f6:function f6(){},
bI:function bI(){},
aM:function aM(){},
bJ:function bJ(){},
bk:function bk(){},
fm:function fm(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(a){this.a=a},
fJ:function fJ(){},
fK:function fK(a){this.a=a},
aT:function aT(){},
fL:function fL(){},
al:function al(){},
W:function W(a){this.a=a},
I:function I(){},
cS:function cS(){},
aV:function aV(){},
h1:function h1(){},
ha:function ha(){},
hb:function hb(a){this.a=a},
hd:function hd(){},
aX:function aX(){},
hp:function hp(){},
aY:function aY(){},
hq:function hq(){},
aZ:function aZ(){},
hu:function hu(){},
hv:function hv(a){this.a=a},
az:function az(){},
d7:function d7(){},
hy:function hy(){},
hz:function hz(){},
bW:function bW(){},
b_:function b_(){},
aA:function aA(){},
hC:function hC(){},
hD:function hD(){},
hI:function hI(){},
b0:function b0(){},
bq:function bq(){},
hM:function hM(){},
hN:function hN(){},
b1:function b1(){},
i2:function i2(){},
il:function il(){},
b5:function b5(){},
c3:function c3(){},
iu:function iu(){},
dt:function dt(){},
iy:function iy(){},
dM:function dM(){},
iL:function iL(){},
iM:function iM(){},
is:function is(){},
iv:function iv(a){this.a=a},
iw:function iw(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ix:function ix(a){this.a=a},
c4:function c4(a){this.a=a},
G:function G(){},
cT:function cT(a){this.a=a},
fU:function fU(a){this.a=a},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(){},
iJ:function iJ(){},
iK:function iK(){},
iO:function iO(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iP:function iP(){},
iN:function iN(){},
cy:function cy(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aw:function aw(){},
iH:function iH(a,b){this.a=a
this.b=b},
ea:function ea(a){this.a=a},
iT:function iT(a){this.a=a},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dz:function dz(){},
dA:function dA(){},
dC:function dC(){},
dD:function dD(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dN:function dN(){},
dO:function dO(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
c9:function c9(){},
ca:function ca(){},
dV:function dV(){},
dW:function dW(){},
e_:function e_(){},
e2:function e2(){},
e3:function e3(){},
cb:function cb(){},
cc:function cc(){},
e5:function e5(){},
e6:function e6(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){}},T={
J:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aB(a,0)
t=C.b.aB(b,0)
s=new T.h5()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
n:function(a){var u=new T.he()
u.dE(a)
return u},
ap:function ap(){},
cz:function cz(){},
aS:function aS(){},
Y:function Y(){this.a=null},
h5:function h5(){this.b=this.a=null},
he:function he(){this.a=null},
d9:function d9(){},
hE:function hE(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hF:function hF(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hG:function hG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
hK:function(){var u=new R.hJ(),t=P.q
u.a=new H.L([t,R.d5])
u.b=new H.L([t,R.dd])
return u},
d5:function d5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(a){this.b=a
this.c=null},
hJ:function hJ(){this.c=this.b=this.a=null},
df:function df(a){this.b=a
this.a=this.c=null}},O={
ji:function(a){var u=new O.aq([a])
u.b4(a)
return u},
aq:function aq(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bN:function bN(){this.b=this.a=null},
cM:function cM(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(){},
fE:function fE(a,b){this.a=a
this.b=b},
fF:function fF(){},
fu:function fu(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cN:function cN(){},
fv:function fv(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aj:function aj(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fx:function fx(){var _=this
_.e=_.d=_.c=_.b=null},
fy:function fy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fz:function fz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d1:function d1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){}},E={
jZ:function(){var u,t=new E.as()
t.a=""
t.b=!0
u=O.ji(E.as)
t.y=u
u.aK(t.gh1(),t.gh4())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbj(0,null)
return t},
lA:function(a,b){var u=new E.h6(a)
u.dD(a,b)
return u},
lG:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibg)return E.kk(a,!0,!0,!0,!1)
u=W.jh()
t=u.style
t.width="100%"
t.height="100%"
s.gcP(a).m(0,u)
return E.kk(u,!0,!0,!0,!1)},
kk:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.da(),p=C.f.c9(a,"webgl2",P.lm(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.r("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lA(p,a)
u=new T.hF(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dj(a)
t=new X.fg()
t.c=new X.a6(!1,!1,!1)
t.d=P.cI(P.x)
u.b=t
t=new X.fM(u)
t.f=0
t.r=V.ax()
t.x=V.ax()
t.ch=t.Q=1
u.c=t
t=new X.fn(u)
t.r=0
t.x=V.ax()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hL(u)
t.f=V.ax()
t.r=V.ax()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.d6,P.U]])
u.z=t
s=document
t.push(W.S(s,"contextmenu",u.gen(),!1))
u.z.push(W.S(a,"focus",u.geu(),!1))
u.z.push(W.S(a,"blur",u.geh(),!1))
u.z.push(W.S(s,"keyup",u.gey(),!1))
u.z.push(W.S(s,"keydown",u.gew(),!1))
u.z.push(W.S(a,"mousedown",u.geC(),!1))
u.z.push(W.S(a,"mouseup",u.geG(),!1))
u.z.push(W.S(a,r,u.geE(),!1))
t=u.z
W.jk(a)
W.jk(a)
t.push(W.S(a,W.jk(a),u.geI(),!1))
u.z.push(W.S(s,r,u.gep(),!1))
u.z.push(W.S(s,"mouseup",u.ger(),!1))
u.z.push(W.S(s,"pointerlockchange",u.geK(),!1))
u.z.push(W.S(a,"touchstart",u.gf_(),!1))
u.z.push(W.S(a,"touchend",u.geW(),!1))
u.z.push(W.S(a,"touchmove",u.geY(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.a5(Date.now(),!1)
q.cy=0
q.cB()
return q},
ev:function ev(){},
as:function as(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
da:function da(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hH:function hH(a){this.a=a}},Z={
ku:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cd(c)),35044)
a.bindBuffer(b,null)
return new Z.dn(b,u)},
a8:function(a){return new Z.b4(a)},
dn:function dn(a,b){this.a=a
this.b=b},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dp:function dp(a){this.a=a},
bD:function bD(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a){this.a=a}},D={
A:function(){var u=new D.bj()
u.d=0
return u},
ey:function ey(){},
bj:function bj(){var _=this
_.d=_.c=_.b=_.a=null},
eT:function eT(a){this.a=a},
eU:function eU(a){this.a=a},
Q:function Q(){this.b=null},
aN:function aN(){this.b=null},
aO:function aO(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bh:function bh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a0:function a0(){},
cF:function cF(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
h2:function h2(){},
hr:function hr(){}},X={cm:function cm(a,b){this.a=a
this.b=b},cE:function cE(a,b){this.a=a
this.b=b},fg:function fg(){var _=this
_.d=_.c=_.b=_.a=null},cK:function cK(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fn:function fn(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},av:function av(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fM:function fM(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bO:function bO(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h3:function h3(){},de:function de(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hL:function hL(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dj:function dj(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jn:function(a){var u=new X.f2(),t=new V.a3(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kg
if(t==null){t=V.kf(0,0,1,1)
$.kg=t}u.r=t
return u},
k7:function(a){var u,t,s=new X.cV()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().m(0,s.gdM())
t=new D.w("mover",u,s.b)
t.b=!0
s.af(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.z().a)){s.c=1.0471975511965976
t=new D.w("fov",t,1.0471975511965976)
t.b=!0
s.af(t)}t=s.d
if(!(Math.abs(t-0.1)<$.z().a)){s.d=0.1
t=new D.w("near",t,0.1)
t.b=!0
s.af(t)}t=s.e
if(!(Math.abs(t-2000)<$.z().a)){s.e=2000
t=new D.w("far",t,2000)
t.b=!0
s.af(t)}return s},
jg:function jg(){},
f2:function f2(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f9:function f9(){this.b=this.a=null},
cV:function cV(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(){}},V={
mU:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.dm(a-b,u)
return(a<0?a+u:a)+b},
C:function(a,b,c){if(a==null)return C.b.at("null",c)
return C.b.at(C.c.di(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
by:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.q])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.C(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.b.at(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
jJ:function(a){return C.c.ho(Math.pow(2,C.I.bU(Math.log(H.mp(a))/Math.log(2))))},
bm:function(){var u=$.k5
return u==null?$.k5=V.ak(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ak:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
k4:function(a,b,c){var u=c.q(0,Math.sqrt(c.w(c))),t=b.ap(u),s=t.q(0,Math.sqrt(t.w(t))),r=u.ap(s),q=new V.y(a.a,a.b,a.c),p=s.N(0).w(q),o=r.N(0).w(q),n=u.N(0).w(q)
return V.ak(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
ax:function(){var u=$.k9
return u==null?$.k9=new V.V(0,0):u},
ka:function(){var u=$.bR
return u==null?$.bR=new V.R(0,0,0):u},
kf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cZ(a,b,c,d)},
c1:function(){var u=$.ks
return u==null?$.ks=new V.y(0,0,0):u},
lI:function(){var u=$.i5
return u==null?$.i5=new V.y(-1,0,0):u},
jx:function(){var u=$.i6
return u==null?$.i6=new V.y(0,1,0):u},
kt:function(){var u=$.i7
return u==null?$.i7=new V.y(0,0,1):u},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a){this.a=a},
cO:function cO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
au:function au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B:function B(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
mN:function(a){P.lH(C.F,new V.j8(a))},
lC:function(a){var u=new V.hj()
u.dF(a,!0)
return u},
cn:function cn(){},
j8:function j8(a){this.a=a},
eI:function eI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f4:function f4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f5:function f5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h0:function h0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hj:function hj(){this.b=this.a=null},
hl:function hl(a){this.a=a},
hk:function hk(a){this.a=a},
hm:function hm(a){this.a=a}},U={
jj:function(){var u=new U.eA()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jV:function(a){var u=new U.cp()
u.a=a
return u},
eA:function eA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){this.b=this.a=null},
bH:function bH(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a1:function a1(){},
dk:function dk(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dl:function dl(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dm:function dm(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={co:function co(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cq:function cq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cv:function cv(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ac:function ac(){}},A={
lo:function(a,b){var u=a.aV,t=new A.ft(b,u)
t.cg(b,u)
t.dC(a,b)
return t},
lp:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gae(a0)+a1.gae(a1)+a2.gae(a2)+a3.gae(a3)+a4.gae(a4)+a5.gae(a5)+a6.gae(a6)+a7.gae(a7)+a8.gae(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.o)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.o)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.o)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.ae()
if(k){u=$.aF()
g=new Z.b4(g.a|u.a)}if(j){u=$.aE()
g=new Z.b4(g.a|u.a)}if(i){u=$.aD()
g=new Z.b4(g.a|u.a)}return new A.fw(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
iV:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
iW:function(a,b,c){var u
A.iV(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ja(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
lZ:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iV(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
lW:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iW(b,t,"ambient")
b.a+="\n"},
lX:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iW(b,t,"diffuse")
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
m_:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iW(b,t,"invDiffuse")
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
m5:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iW(b,t,"specular")
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
m1:function(a,b){var u,t,s
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
m3:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iV(b,t,"reflect")
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
m4:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iV(b,t,"refract")
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
lY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.ja(t)
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
r=[P.q]
o=H.b([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
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
c.a+="      highLight = intensity*("+C.a.k(m," + ")+");\n"}else c.a+="   highLight = "+C.a.k(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.k(o," + ")+");\n"
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
m2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.ja(t)
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
c.a=r+"\n"}r=[P.q]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.k(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.b([],r)
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
k=H.b([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.k(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.k(l," + ")+");\n"
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
m6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.ja(t)
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
c.a=u+"\n"}u=[P.q]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.k(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.b([],u)
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
i=H.b([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.k(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.k(j," + ")+");\n"
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
m0:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.q])
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
u=b.a+="   return "+C.a.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
m7:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ay("")
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
A.lZ(a,j)
A.lW(a,j)
A.lX(a,j)
A.m_(a,j)
A.m5(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.m3(a,j)
A.m4(a,j)}A.m1(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.lY(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.m2(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.m6(a,q[o],j)
A.m0(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.q])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
m8:function(a,b){var u,t,s
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
ma:function(a,b){var u
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
m9:function(a,b){var u
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
mc:function(a,b){var u,t
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
md:function(a,b){var u,t
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
mb:function(a,b){var u
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
me:function(a,b){var u
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
ja:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.aj(a,1)},
jw:function(a,b,c,d,e){var u=new A.hS(a,c,e)
u.f=d
P.ln(d,0,P.x)
return u},
cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a,b){var _=this
_.hy=_.hx=_.cY=_.cX=_.aV=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hL=_.hK=_.hJ=_.bT=_.bS=_.bR=_.bQ=_.bP=_.bO=_.hI=_.hH=_.d4=_.hG=_.hF=_.d3=_.d2=_.hE=_.hD=_.d1=_.d0=_.hC=_.hB=_.d_=_.hA=_.hz=_.cZ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cs:function cs(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
fw:function fw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aV=b3
_.cX=b4},
bY:function bY(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c_:function c_(a,b,c,d,e,f,g,h,i,j){var _=this
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
c0:function c0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d0:function d0(){},
ho:function ho(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dg:function dg(){},
hX:function hX(a){this.a=a},
dh:function dh(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
hV:function hV(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){this.a=a
this.c=b
this.d=c},
D:function D(a,b,c){this.a=a
this.c=b
this.d=c},
bX:function bX(a,b,c){this.a=a
this.c=b
this.d=c},
hY:function hY(a,b,c){this.a=a
this.c=b
this.d=c},
bZ:function bZ(a,b,c){this.a=a
this.c=b
this.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
bs:function bs(a,b,c){this.a=a
this.c=b
this.d=c},
b2:function b2(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mS:function(){return F.mt(15,30,0.5,1,new F.jb())},
mt:function(a,b,c,d,e){var u=F.mQ(a,b,new F.iZ(e,d,b,c))
if(u==null)return
u.ao()
u.h0(new F.ie(),new F.fV())
return u},
mQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kh()
t=H.b([],[F.b3])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.i8(g,g,new V.a3(p,0,0,1),g,g,new V.V(r,1),g,g,0)
q.m(0,o)
c.$3(o,r,0)
t.push(o.cS(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.i8(g,g,new V.a3(j,i,h,1),g,g,new V.V(r,m),g,g,0)
k.m(0,o)
c.$3(o,r,n)
t.push(o.cS(g))}}u.d.ft(a+1,b+1,t)
return u},
cw:function(a,b,c){var u=new F.aJ(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.fd(a)
u.fe(b)
u.ff(c)
u.a.a.d.b.push(u)
u.a.a.a5()
return u},
kh:function(){var u=new F.hf(),t=new F.i9(u)
t.b=!1
t.c=H.b([],[F.b3])
u.a=t
t=new F.hi()
t.b=H.b([],[F.cW])
u.b=t
t=new F.hh(u)
t.b=H.b([],[F.cG])
u.c=t
t=new F.hg(u)
t.b=H.b([],[F.aJ])
u.d=t
u.e=null
return u},
i8:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b3(),r=new F.ii()
r.b=H.b([],[F.cW])
s.b=r
r=new F.id()
u=[F.cG]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.ia()
u=[F.aJ]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kY()
s.e=0
r=$.ae()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aF().a)!==0?e:t
s.x=(u&$.aE().a)!==0?b:t
s.y=(u&$.b9().a)!==0?f:t
s.z=(u&$.ba().a)!==0?g:t
s.Q=(u&$.kZ().a)!==0?c:t
s.ch=(u&$.bA().a)!==0?i:0
s.cx=(u&$.aD().a)!==0?a:t
return s},
jb:function jb(){},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aJ:function aJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eV:function eV(){},
hn:function hn(){},
cG:function cG(){},
fi:function fi(){},
hR:function hR(){},
cW:function cW(){},
hf:function hf(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(a){this.a=a
this.b=null},
hh:function hh(a){this.a=a
this.b=null},
hi:function hi(){this.b=null},
b3:function b3(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a},
i9:function i9(a){this.a=a
this.c=this.b=null},
ia:function ia(){this.d=this.c=this.b=null},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
id:function id(){this.c=this.b=null},
ig:function ig(){},
ie:function ie(){},
ih:function ih(){},
fV:function fV(){},
ii:function ii(){this.b=null}},B={
kH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6="modifiers",a7=34067,a8=V.lC("Test 013"),a9=W.jh()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9)
u=[P.q]
a8.cJ(H.b(["Test of sky box and cover pass."],u))
a8.cJ(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.lG(t,!0,!0,!0,!1)
r=new U.bH()
r.b4(U.a1)
r.aK(r.ge9(),r.geO())
r.e=null
r.f=V.bm()
r.r=0
u=s.r
q=new U.dl()
p=U.jj()
p.sc8(0,!0)
p.sbY(6.283185307179586)
p.sc_(0)
p.sa3(0,0)
p.sbZ(100)
p.sR(0)
p.sbN(0.5)
q.b=p
o=q.gaE()
p.gp().m(0,o)
p=U.jj()
p.sc8(0,!0)
p.sbY(6.283185307179586)
p.sc_(0)
p.sa3(0,0)
p.sbZ(100)
p.sR(0)
p.sbN(0.5)
q.c=p
p.gp().m(0,o)
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
p=new D.w(a6,m,n)
p.b=!0
q.L(p)
p=q.f
if(p!==!1){q.f=!1
p=new D.w("invertX",p,!1)
p.b=!0
q.L(p)}p=q.r
if(p!==!1){q.r=!1
p=new D.w("invertY",p,!1)
p.b=!0
q.L(p)}q.aQ(u)
r.m(0,q)
u=s.r
q=new U.dk()
p=U.jj()
p.sc8(0,!0)
p.sbY(6.283185307179586)
p.sc_(0)
p.sa3(0,0)
p.sbZ(100)
p.sR(0)
p.sbN(0.2)
q.b=p
p.gp().m(0,q.gaE())
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
p=new D.w(a6,m,n)
p.b=!0
q.L(p)
q.aQ(u)
r.m(0,q)
u=s.r
q=new U.dm()
q.c=0.01
q.e=q.d=0
n=new X.a6(!1,!1,!1)
q.b=n
p=new D.w(a6,a5,n)
p.b=!0
q.L(p)
q.aQ(u)
r.m(0,q)
r.m(0,U.jV(V.ak(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=X.k7(r)
k=X.jn(a5)
if(k.b){k.b=!1
u=new D.w("clearColor",!0,!1)
u.b=!0
k.af(u)}j=E.jZ()
j.sbj(0,F.mS())
i=new O.cM()
u=O.ji(V.au)
i.e=u
u.aK(i.ged(),i.gef())
u=new O.aj(i,"emission")
u.c=new A.T(!1,!1,!1)
u.f=new V.O(0,0,0)
i.f=u
u=new O.aj(i,"ambient")
u.c=new A.T(!1,!1,!1)
u.f=new V.O(0,0,0)
i.r=u
u=new O.aj(i,"diffuse")
u.c=new A.T(!1,!1,!1)
u.f=new V.O(0,0,0)
i.x=u
u=new O.aj(i,"invDiffuse")
u.c=new A.T(!1,!1,!1)
u.f=new V.O(0,0,0)
i.y=u
u=new O.fz(i,"specular")
u.c=new A.T(!1,!1,!1)
u.f=new V.O(0,0,0)
u.ch=100
i.z=u
u=new O.fv(i,"bump")
u.c=new A.T(!1,!1,!1)
i.Q=u
i.ch=null
u=new O.aj(i,"reflect")
u.c=new A.T(!1,!1,!1)
u.f=new V.O(0,0,0)
i.cx=u
u=new O.fy(i,"refract")
u.c=new A.T(!1,!1,!1)
u.f=new V.O(0,0,0)
u.ch=1
i.cy=u
u=new O.fu(i,"alpha")
u.c=new A.T(!1,!1,!1)
u.f=1
i.db=u
u=new D.cF()
u.b4(D.a0)
u.e=H.b([],[D.bh])
u.f=H.b([],[D.h2])
u.r=H.b([],[D.hr])
u.y=u.x=null
u.cb(u.geb(),u.geM(),u.geQ())
i.dx=u
q=new O.fx()
q.b=new V.a3(0,0,0,0)
q.c=1
q.d=10
q.e=!1
i.dy=q
q=u.x
u=q==null?u.x=D.A():q
u.m(0,i.gf7())
u=i.dx
q=u.y
u=q==null?u.y=D.A():q
u.m(0,i.gbn())
i.fr=null
u=i.dx
h=V.jx()
q=U.jV(V.k4(V.ka(),h,new V.y(0,-1,-1)))
g=new V.O(1,1,1)
p=new D.bh()
p.c=new V.O(1,1,1)
p.a=V.kt()
p.d=V.jx()
p.e=V.lI()
m=p.b
p.b=q
q.gp().m(0,p.gdH())
q=new D.w("mover",m,p.b)
q.b=!0
p.ak(q)
if(!p.c.t(0,g)){m=p.c
p.c=g
q=new D.w("color",m,g)
q.b=!0
p.ak(q)}u.m(0,p)
u=i.r
u.saS(0,new V.O(0,0,1))
u=i.x
u.saS(0,new V.O(0,1,0))
u=i.z
u.saS(0,new V.O(1,0,0))
u=i.z
u.cD(new A.T(!0,!1,!1))
u.cE(10)
u=s.f
q=u.a
f=q.createTexture()
q.bindTexture(a7,f)
q.texParameteri(a7,10242,10497)
q.texParameteri(a7,10243,10497)
q.texParameteri(a7,10241,9729)
q.texParameteri(a7,10240,9729)
q.bindTexture(a7,a5)
e=new T.hE()
e.a=0
e.b=f
e.c=!1
e.d=0
u.aD(e,f,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aD(e,f,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aD(e,f,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aD(e,f,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aD(e,f,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aD(e,f,"../resources/maskonaive/negz.jpg",34074,!1,!1)
d=new M.cq()
d.a=!0
u=E.jZ()
c=F.kh()
q=c.a
p=new V.y(-1,-1,1)
p=p.q(0,Math.sqrt(p.w(p)))
b=q.b8(new V.aW(1,2,4,6),new V.a3(1,0,0,1),new V.R(-1,-1,0),new V.V(0,1),p,a5)
q=c.a
p=new V.y(1,-1,1)
p=p.q(0,Math.sqrt(p.w(p)))
a=q.b8(new V.aW(0,3,4,6),new V.a3(0,0,1,1),new V.R(1,-1,0),new V.V(1,1),p,a5)
q=c.a
p=new V.y(1,1,1)
p=p.q(0,Math.sqrt(p.w(p)))
a0=q.b8(new V.aW(0,2,5,6),new V.a3(0,1,0,1),new V.R(1,1,0),new V.V(1,0),p,a5)
q=c.a
p=V.ax()
o=new V.y(-1,1,1)
o=o.q(0,Math.sqrt(o.w(o)))
a1=q.b8(new V.aW(0,2,4,7),new V.a3(1,1,0,1),new V.R(-1,1,0),p,o,a5)
c.d.fs(H.b([b,a,a0,a1],[F.b3]))
c.ao()
u.sbj(0,c)
d.e=u
d.saR(a5)
d.sb0(0,a5)
d.sb1(a5)
u=new O.d1()
u.b=1.0471975511965976
u.d=new V.O(1,1,1)
m=u.c
u.c=e
e.gp().m(0,u.gbn())
q=new D.w("boxTexture",m,u.c)
q.b=!0
u.X(q)
d.sb1(u)
d.sb0(0,k)
d.saR(l)
a2=new M.cv()
a2.a=!0
u=O.ji(E.as)
a2.e=u
u.aK(a2.gej(),a2.gel())
a2.y=a2.x=a2.r=a2.f=null
a3=X.jn(a5)
a2.saR(a5)
a2.sb0(0,a3)
a2.sb1(a5)
a2.saR(l)
a2.sb1(i)
a2.sb0(0,k)
a2.e.m(0,j)
u=M.ac
q=H.b([d,a2],[u])
p=new M.co()
p.b4(u)
p.e=!0
p.f=!1
p.r=null
p.aK(p.geS(),p.geU())
p.a1(0,q)
u=s.d
if(u!==p){if(u!=null)u.gp().M(0,s.gcj())
s.d=p
p.gp().m(0,s.gcj())
s.ck()}u=s.z
if(u==null)u=s.z=D.A()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Q]}]):q
u.push(new B.j6(d,a8))
V.mN(s)},
j6:function j6(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jr.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gH:function(a){return H.bS(a)},
h:function(a){return"Instance of '"+H.e(H.bT(a))+"'"}}
J.fd.prototype={
h:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iao:1}
J.cC.prototype={
t:function(a,b){return null==b},
h:function(a){return"null"},
gH:function(a){return 0}}
J.cD.prototype={
gH:function(a){return 0},
h:function(a){return String(a)}}
J.h_.prototype={}
J.bt.prototype={}
J.aR.prototype={
h:function(a){var u=a[$.kN()]
if(u==null)return this.dz(a)
return"JavaScript function for "+H.e(J.af(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aP.prototype={
de:function(a,b){if(!!a.fixed$length)H.t(P.Z("removeAt"))
if(b<0||b>=a.length)throw H.f(P.cY(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.t(P.Z("remove"))
for(u=0;u<a.length;++u)if(J.E(a[u],b)){a.splice(u,1)
return!0}return!1},
a1:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.Z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t)a.push(b[t])},
J:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.aH(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
fY:function(a){return this.k(a,"")},
fU:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.f(P.aH(a))}throw H.f(H.fb())},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
dt:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.am(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.am(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.bz(a,0)])
return H.b(a.slice(b,c),[H.bz(a,0)])},
gfT:function(a){if(a.length>0)return a[0]
throw H.f(H.fb())},
gbb:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.fb())},
cL:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.f(P.aH(a))}return!1},
bk:function(a,b){if(!!a.immutable$list)H.t(P.Z("sort"))
H.d2(a,0,a.length-1,b)},
S:function(a,b){var u
for(u=0;u<a.length;++u)if(J.E(a[u],b))return!0
return!1},
h:function(a){return P.jo(a,"[","]")},
gO:function(a){return new J.X(a,a.length)},
gH:function(a){return H.bS(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.Z("set length"))
if(b<0)throw H.f(P.am(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.bx(a,b))
return a[b]},
n:function(a,b,c){if(!!a.immutable$list)H.t(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bx(a,b))
a[b]=c},
$ih:1}
J.jq.prototype={}
J.X.prototype={
gD:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bL.prototype={
fF:function(a,b){var u
if(typeof b!=="number")throw H.f(H.b8(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gba(b)
if(this.gba(a)===u)return 0
if(this.gba(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gba:function(a){return a===0?1/a<0:a<0},
ho:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.Z(""+a+".toInt()"))},
bU:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.Z(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.Z(""+a+".round()"))},
di:function(a,b){var u
if(b>20)throw H.f(P.am(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gba(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dm:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cF(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cF(a,b)},
cF:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.Z("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b6:function(a,b){var u
if(a>0)u=this.fj(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fj:function(a,b){return b>31?0:a>>>b},
$iK:1,
$ia9:1}
J.cB.prototype={$ix:1}
J.cA.prototype={}
J.aQ.prototype={
bM:function(a,b){if(b<0)throw H.f(H.bx(a,b))
if(b>=a.length)H.t(H.bx(a,b))
return a.charCodeAt(b)},
aB:function(a,b){if(b>=a.length)throw H.f(H.bx(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.f(P.jR(b,null,null))
return a+b},
bl:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cY(b,null))
if(b>c)throw H.f(P.cY(b,null))
if(c>a.length)throw H.f(P.cY(c,null))
return a.substring(b,c)},
aj:function(a,b){return this.b2(a,b,null)},
hr:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
at:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
h:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$iq:1}
H.l.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.bM(this.a,b)},
$ap:function(){return[P.x]},
$ah:function(){return[P.x]}}
H.eP.prototype={}
H.cJ.prototype={
gO:function(a){return new H.bM(this,this.gl(this))},
bi:function(a,b){return this.dw(0,b)}}
H.bM.prototype={
gD:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.jC(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.aH(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.C(s,u);++t.c
return!0}}
H.fq.prototype={
gO:function(a){return new H.fr(J.bc(this.a),this.b)},
gl:function(a){return J.bd(this.a)},
C:function(a,b){return this.b.$1(J.je(this.a,b))},
$ah:function(a,b){return[b]}}
H.fr.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gD(t))
return!0}u.a=null
return!1},
gD:function(a){return this.a}}
H.fs.prototype={
gl:function(a){return J.bd(this.a)},
C:function(a,b){return this.b.$1(J.je(this.a,b))},
$acJ:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.c2.prototype={
gO:function(a){return new H.im(J.bc(this.a),this.b)}}
H.im.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gD(u)))return!0
return!1},
gD:function(a){var u=this.a
return u.gD(u)}}
H.cx.prototype={}
H.i0.prototype={}
H.di.prototype={}
H.hP.prototype={
aa:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fW.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ff.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.i_.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jc.prototype={
$1:function(a){if(!!J.N(a).$ibi)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dZ.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bE.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghs:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hB.prototype={}
H.ht.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.el(u)+"'"}}
H.bB.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bB))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.bS(this.a)
else u=typeof t!=="object"?J.bb(t):H.bS(t)
return(u^H.bS(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bT(u))+"'")}}
H.ex.prototype={
h:function(a){return this.a}}
H.hc.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.L.prototype={
gl:function(a){return this.a},
ga2:function(a){return new H.cH(this,[H.bz(this,0)])},
cR:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cr(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cr(t,b)}else return s.fW(b)},
fW:function(a){var u=this.d
if(u==null)return!1
return this.bV(this.bv(u,J.bb(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b5(r,b)
s=t==null?null:t.b
return s}else return q.fX(b)},
fX:function(a){var u,t,s=this.d
if(s==null)return
u=this.bv(s,J.bb(a)&0x3ffffff)
t=this.bV(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cm(u==null?o.b=o.bE():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cm(t==null?o.c=o.bE():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bE()
r=J.bb(b)&0x3ffffff
q=o.bv(s,r)
if(q==null)o.bH(s,r,[o.bF(b,c)])
else{p=o.bV(q,b)
if(p>=0)q[p].b=c
else q.push(o.bF(b,c))}}},
J:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.aH(u))
t=t.c}},
cm:function(a,b,c){var u=this.b5(a,b)
if(u==null)this.bH(a,b,this.bF(b,c))
else u.b=c},
e6:function(){this.r=this.r+1&67108863},
bF:function(a,b){var u,t=this,s=new H.fj(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.e6()
return s},
bV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1},
h:function(a){return P.k3(this)},
b5:function(a,b){return a[b]},
bv:function(a,b){return a[b]},
bH:function(a,b,c){a[b]=c},
e_:function(a,b){delete a[b]},
cr:function(a,b){return this.b5(a,b)!=null},
bE:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bH(t,u,t)
this.e_(t,u)
return t}}
H.fj.prototype={}
H.cH.prototype={
gl:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.fk(u,u.r)
t.c=u.e
return t}}
H.fk.prototype={
gD:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aH(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.j2.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.j3.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j4.prototype={
$1:function(a){return this.a(a)}}
H.fe.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bQ.prototype={}
H.cP.prototype={
gl:function(a){return a.length},
$iv:1,
$av:function(){}}
H.bP.prototype={
i:function(a,b){H.b6(b,a,a.length)
return a[b]},
$ap:function(){return[P.K]},
$ih:1,
$ah:function(){return[P.K]}}
H.cQ.prototype={
$ap:function(){return[P.x]},
$ih:1,
$ah:function(){return[P.x]}}
H.fN.prototype={
i:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fO.prototype={
i:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fP.prototype={
i:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fQ.prototype={
i:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fR.prototype={
i:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.cR.prototype={
gl:function(a){return a.length},
i:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fS.prototype={
gl:function(a){return a.length},
i:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.c5.prototype={}
H.c6.prototype={}
H.c7.prototype={}
H.c8.prototype={}
P.ip.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.io.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iq.prototype={
$0:function(){this.a.$0()}}
P.ir.prototype={
$0:function(){this.a.$0()}}
P.e4.prototype={
dK:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bw(new P.iR(this,b),0),a)
else throw H.f(P.Z("`setTimeout()` not found."))},
dL:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bw(new P.iQ(this,a,Date.now(),b),0),a)
else throw H.f(P.Z("Periodic timer."))},
$idb:1}
P.iR.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iQ.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dB(u,q)}s.c=r
t.d.$1(s)}}
P.dq.prototype={}
P.d6.prototype={}
P.hw.prototype={}
P.db.prototype={}
P.iU.prototype={}
P.iX.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cU():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.iE.prototype={
hk:function(a){var u,t,s,r=null
try{if(C.e===$.ad){a.$0()
return}P.mg(r,r,this,a)}catch(s){u=H.aC(s)
t=H.jG(s)
P.kA(r,r,this,u,t)}},
hl:function(a,b){var u,t,s,r=null
try{if(C.e===$.ad){a.$1(b)
return}P.mh(r,r,this,a,b)}catch(s){u=H.aC(s)
t=H.jG(s)
P.kA(r,r,this,u,t)}},
hm:function(a,b){return this.hl(a,b,null)},
fC:function(a){return new P.iF(this,a)},
cM:function(a,b){return new P.iG(this,a,b)}}
P.iF.prototype={
$0:function(){return this.a.hk(this.b)}}
P.iG.prototype={
$1:function(a){return this.a.hm(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iB.prototype={
gO:function(a){var u=new P.dG(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
S:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dV(b)
return t}},
dV:function(a){var u=this.d
if(u==null)return!1
return this.bt(this.cu(u,a),a)>=0},
m:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cn(u==null?s.b=P.jy():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cn(t==null?s.c=P.jy():t,b)}else return s.dO(0,b)},
dO:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jy()
u=s.cp(b)
t=r[u]
if(t==null)r[u]=[s.bq(b)]
else{if(s.bt(t,b)>=0)return!1
t.push(s.bq(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.f2(this.c,b)
else return this.f1(0,b)},
f1:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cu(r,b)
t=s.bt(u,b)
if(t<0)return!1
s.cG(u.splice(t,1)[0])
return!0},
cn:function(a,b){if(a[b]!=null)return!1
a[b]=this.bq(b)
return!0},
f2:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cG(u)
delete a[b]
return!0},
co:function(){this.r=1073741823&this.r+1},
bq:function(a){var u,t=this,s=new P.iC(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.co()
return s},
cG:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.co()},
cp:function(a){return J.bb(a)&1073741823},
cu:function(a,b){return a[this.cp(b)]},
bt:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1}}
P.iC.prototype={}
P.dG.prototype={
gD:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aH(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fl.prototype={$ih:1}
P.p.prototype={
gO:function(a){return new H.bM(a,this.gl(a))},
C:function(a,b){return this.i(a,b)},
hq:function(a,b){var u,t,s=this,r=H.b([],[H.mz(s,a,"p",0)])
C.a.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
hp:function(a){return this.hq(a,!0)},
h:function(a){return P.jo(a,"[","]")}}
P.fo.prototype={}
P.fp.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.at.prototype={
J:function(a,b){var u,t
for(u=J.bc(this.ga2(a));u.v();){t=u.gD(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.bd(this.ga2(a))},
h:function(a){return P.k3(a)}}
P.iI.prototype={
a1:function(a,b){var u
for(u=J.bc(b);u.v();)this.m(0,u.gD(u))},
h:function(a){return P.jo(this,"{","}")},
C:function(a,b){var u,t,s
P.kd(b,"index")
for(u=P.lQ(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.f(P.H(b,this,"index",null,t))},
$ih:1}
P.dH.prototype={}
P.ez.prototype={}
P.eC.prototype={}
P.eR.prototype={}
P.f8.prototype={
h:function(a){return this.a}}
P.f7.prototype={
dX:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ay("")
if(r>b)q.a+=C.b.b2(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.l5(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.i3.prototype={}
P.i4.prototype={
fG:function(a){var u,t,s=P.ke(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iS(u)
if(t.e1(a,0,s)!==s)t.cH(C.b.bM(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lT(0,t.b,u.length)))}}
P.iS.prototype={
cH:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
e1:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bM(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aB(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cH(r,C.b.aB(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ao.prototype={}
P.a5.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.a5&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.d.b6(u,30))&1073741823},
h:function(a){var u=this,t=P.le(H.lx(u)),s=P.cr(H.lv(u)),r=P.cr(H.lr(u)),q=P.cr(H.ls(u)),p=P.cr(H.lu(u)),o=P.cr(H.lw(u)),n=P.lf(H.lt(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.aI.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aI&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
h:function(a){var u,t,s,r=new P.eO(),q=this.a
if(q<0)return"-"+new P.aI(0-q).h(0)
u=r.$1(C.d.a0(q,6e7)%60)
t=r.$1(C.d.a0(q,1e6)%60)
s=new P.eN().$1(q%1e6)
return""+C.d.a0(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eN.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eO.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bi.prototype={}
P.cU.prototype={
h:function(a){return"Throw of null."}}
P.aa.prototype={
gbs:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbr:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbs()+o+u
if(!q.a)return t
s=q.gbr()
r=P.jm(q.b)
return t+s+": "+r}}
P.bp.prototype={
gbs:function(){return"RangeError"},
gbr:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fa.prototype={
gbs:function(){return"RangeError"},
gbr:function(){var u,t=this.b
if(typeof t!=="number")return t.a8()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.i1.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hZ.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bV.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eB.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jm(u)+"."}}
P.fZ.prototype={
h:function(a){return"Out of Memory"},
$ibi:1}
P.d4.prototype={
h:function(a){return"Stack Overflow"},
$ibi:1}
P.eH.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dy.prototype={
h:function(a){return"Exception: "+this.a}}
P.f1.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.b2(s,0,75)+"...":s
return t+"\n"+r}}
P.f3.prototype={}
P.x.prototype={}
P.h.prototype={
bi:function(a,b){return new H.c2(this,b,[H.jF(this,"h",0)])},
gl:function(a){var u,t=this.gO(this)
for(u=0;t.v();)++u
return u},
gaz:function(a){var u,t=this.gO(this)
if(!t.v())throw H.f(H.fb())
u=t.gD(t)
if(t.v())throw H.f(H.lj())
return u},
C:function(a,b){var u,t,s
P.kd(b,"index")
for(u=this.gO(this),t=0;u.v();){s=u.gD(u)
if(b===t)return s;++t}throw H.f(P.H(b,this,"index",null,t))},
h:function(a){return P.li(this,"(",")")}}
P.fc.prototype={}
P.ai.prototype={$ih:1}
P.cL.prototype={}
P.aU.prototype={
gH:function(a){return P.U.prototype.gH.call(this,this)},
h:function(a){return"null"}}
P.a9.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
t:function(a,b){return this===b},
gH:function(a){return H.bS(this)},
h:function(a){return"Instance of '"+H.e(H.bT(this))+"'"},
toString:function(){return this.h(this)}}
P.q.prototype={}
P.ay.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.en.prototype={
gl:function(a){return a.length}}
W.eo.prototype={
h:function(a){return String(a)}}
W.ep.prototype={
h:function(a){return String(a)}}
W.ck.prototype={}
W.bf.prototype={$ibf:1}
W.bg.prototype={
c9:function(a,b,c){if(c!=null)return a.getContext(b,P.mq(c))
return a.getContext(b)},
dl:function(a,b){return this.c9(a,b,null)},
$ibg:1}
W.aG.prototype={
gl:function(a){return a.length}}
W.eD.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bF.prototype={
gl:function(a){return a.length}}
W.eE.prototype={}
W.a4.prototype={}
W.ah.prototype={}
W.eF.prototype={
gl:function(a){return a.length}}
W.eG.prototype={
gl:function(a){return a.length}}
W.eJ.prototype={
gl:function(a){return a.length}}
W.ab.prototype={$iab:1}
W.eK.prototype={
h:function(a){return String(a)}}
W.ct.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[[P.a7,P.a9]]},
$ap:function(){return[[P.a7,P.a9]]},
$ih:1,
$ah:function(){return[[P.a7,P.a9]]}}
W.cu.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gay(a))+" x "+H.e(this.gar(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia7)return!1
return a.left===u.gbc(b)&&a.top===u.gbg(b)&&this.gay(a)===u.gay(b)&&this.gar(a)===u.gar(b)},
gH:function(a){return W.kw(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(this.gay(a)),C.c.gH(this.gar(a)))},
gcN:function(a){return a.bottom},
gar:function(a){return a.height},
gbc:function(a){return a.left},
gc5:function(a){return a.right},
gbg:function(a){return a.top},
gay:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a9]}}
W.eL.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[P.q]},
$ap:function(){return[P.q]},
$ih:1,
$ah:function(){return[P.q]}}
W.eM.prototype={
gl:function(a){return a.length}}
W.it.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
m:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.hp(this)
return new J.X(u,u.length)},
$ap:function(){return[W.P]},
$ah:function(){return[W.P]}}
W.P.prototype={
gfB:function(a){return new W.iv(a)},
gcP:function(a){return new W.it(a,a.children)},
gcQ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a8()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a8()
if(r<0)r=-r*0
return new P.a7(u,t,s,r,[P.a9])},
h:function(a){return a.localName},
a9:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jY
if(u==null){u=H.b([],[W.aw])
t=new W.cT(u)
u.push(W.kv(null))
u.push(W.kx())
$.jY=t
d=t}else d=u
u=$.jX
if(u==null){u=new W.ea(d)
$.jX=u
c=u}else{u.a=d
c=u}}if($.ar==null){u=document
t=u.implementation.createHTMLDocument("")
$.ar=t
$.jl=t.createRange()
s=$.ar.createElement("base")
s.href=u.baseURI
$.ar.head.appendChild(s)}u=$.ar
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ar
if(!!this.$ibf)r=u.body
else{r=u.createElement(a.tagName)
$.ar.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.L,a.tagName)){$.jl.selectNodeContents(r)
q=$.jl.createContextualFragment(b)}else{r.innerHTML=b
q=$.ar.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ar.body
if(r==null?u!=null:r!==u)J.jP(r)
c.ca(q)
document.adoptNode(q)
return q},
fH:function(a,b,c){return this.a9(a,b,c,null)},
dq:function(a,b){a.textContent=null
a.appendChild(this.a9(a,b,null,null))},
$iP:1,
gdh:function(a){return a.tagName}}
W.eQ.prototype={
$1:function(a){return!!J.N(a).$iP}}
W.i.prototype={$ii:1}
W.d.prototype={
fq:function(a,b,c,d){if(c!=null)this.dP(a,b,c,!1)},
dP:function(a,b,c,d){return a.addEventListener(b,H.bw(c,1),!1)}}
W.aK.prototype={$iaK:1}
W.eW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aK]},
$ap:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]}}
W.eX.prototype={
gl:function(a){return a.length}}
W.f0.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.f6.prototype={
gl:function(a){return a.length}}
W.bI.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.I]},
$ap:function(){return[W.I]},
$ih:1,
$ah:function(){return[W.I]}}
W.aM.prototype={$iaM:1,
gcT:function(a){return a.data}}
W.bJ.prototype={$ibJ:1}
W.bk.prototype={$ibk:1}
W.fm.prototype={
h:function(a){return String(a)}}
W.fG.prototype={
gl:function(a){return a.length}}
W.fH.prototype={
i:function(a,b){return P.aB(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aB(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.q])
this.J(a,new W.fI(u))
return u},
gl:function(a){return a.size}}
W.fI.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fJ.prototype={
i:function(a,b){return P.aB(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aB(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.q])
this.J(a,new W.fK(u))
return u},
gl:function(a){return a.size}}
W.fK.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aT.prototype={$iaT:1}
W.fL.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aT]},
$ap:function(){return[W.aT]},
$ih:1,
$ah:function(){return[W.aT]}}
W.al.prototype={$ial:1}
W.W.prototype={
gaz:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.ki("No elements"))
if(t>1)throw H.f(P.ki("More than one element"))
return u.firstChild},
a1:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.cy(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ap:function(){return[W.I]},
$ah:function(){return[W.I]}}
W.I.prototype={
hg:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.dv(a):u},
$iI:1}
W.cS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.I]},
$ap:function(){return[W.I]},
$ih:1,
$ah:function(){return[W.I]}}
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.h1.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aV]},
$ap:function(){return[W.aV]},
$ih:1,
$ah:function(){return[W.aV]}}
W.ha.prototype={
i:function(a,b){return P.aB(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aB(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.q])
this.J(a,new W.hb(u))
return u},
gl:function(a){return a.size}}
W.hb.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hd.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.hp.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aX]},
$ap:function(){return[W.aX]},
$ih:1,
$ah:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.hq.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aY]},
$ap:function(){return[W.aY]},
$ih:1,
$ah:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gl:function(a){return a.length}}
W.hu.prototype={
i:function(a,b){return a.getItem(b)},
J:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.b([],[P.q])
this.J(a,new W.hv(u))
return u},
gl:function(a){return a.length}}
W.hv.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.d7.prototype={
a9:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
u=W.lg("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.W(t).a1(0,new W.W(u))
return t}}
W.hy.prototype={
a9:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a9(u.createElement("table"),b,c,d)
u.toString
u=new W.W(u)
s=u.gaz(u)
s.toString
u=new W.W(s)
r=u.gaz(u)
t.toString
r.toString
new W.W(t).a1(0,new W.W(r))
return t}}
W.hz.prototype={
a9:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a9(u.createElement("table"),b,c,d)
u.toString
u=new W.W(u)
s=u.gaz(u)
t.toString
s.toString
new W.W(t).a1(0,new W.W(s))
return t}}
W.bW.prototype={$ibW:1}
W.b_.prototype={$ib_:1}
W.aA.prototype={$iaA:1}
W.hC.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aA]},
$ap:function(){return[W.aA]},
$ih:1,
$ah:function(){return[W.aA]}}
W.hD.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.b_]},
$ap:function(){return[W.b_]},
$ih:1,
$ah:function(){return[W.b_]}}
W.hI.prototype={
gl:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.bq.prototype={$ibq:1}
W.hM.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.b0]},
$ap:function(){return[W.b0]},
$ih:1,
$ah:function(){return[W.b0]}}
W.hN.prototype={
gl:function(a){return a.length}}
W.b1.prototype={}
W.i2.prototype={
h:function(a){return String(a)}}
W.il.prototype={
gl:function(a){return a.length}}
W.b5.prototype={
gfK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.Z("deltaY is not supported"))},
gfJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.Z("deltaX is not supported"))},
$ib5:1}
W.c3.prototype={
f6:function(a,b){return a.requestAnimationFrame(H.bw(b,1))},
e0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iu.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.F]},
$ap:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]}}
W.dt.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia7)return!1
return a.left===u.gbc(b)&&a.top===u.gbg(b)&&a.width===u.gay(b)&&a.height===u.gar(b)},
gH:function(a){return W.kw(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(a.width),C.c.gH(a.height))},
gar:function(a){return a.height},
gay:function(a){return a.width}}
W.iy.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aL]},
$ap:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]}}
W.dM.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.I]},
$ap:function(){return[W.I]},
$ih:1,
$ah:function(){return[W.I]}}
W.iL.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aZ]},
$ap:function(){return[W.aZ]},
$ih:1,
$ah:function(){return[W.aZ]}}
W.iM.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.az]},
$ap:function(){return[W.az]},
$ih:1,
$ah:function(){return[W.az]}}
W.is.prototype={
J:function(a,b){var u,t,s,r,q
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.q])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q}}
W.iv.prototype={
i:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.ga2(this).length}}
W.iw.prototype={}
W.ix.prototype={
$1:function(a){return this.a.$1(a)}}
W.c4.prototype={
dG:function(a){var u
if($.dB.a===0){for(u=0;u<262;++u)$.dB.n(0,C.K[u],W.mB())
for(u=0;u<12;++u)$.dB.n(0,C.l[u],W.mC())}},
aG:function(a){return $.l0().S(0,W.bG(a))},
ah:function(a,b,c){var u=$.dB.i(0,H.e(W.bG(a))+"::"+b)
if(u==null)u=$.dB.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaw:1}
W.G.prototype={
gO:function(a){return new W.cy(a,this.gl(a))}}
W.cT.prototype={
aG:function(a){return C.a.cL(this.a,new W.fU(a))},
ah:function(a,b,c){return C.a.cL(this.a,new W.fT(a,b,c))},
$iaw:1}
W.fU.prototype={
$1:function(a){return a.aG(this.a)}}
W.fT.prototype={
$1:function(a){return a.ah(this.a,this.b,this.c)}}
W.dU.prototype={
dJ:function(a,b,c,d){var u,t,s
this.a.a1(0,c)
u=b.bi(0,new W.iJ())
t=b.bi(0,new W.iK())
this.b.a1(0,u)
s=this.c
s.a1(0,C.M)
s.a1(0,t)},
aG:function(a){return this.a.S(0,W.bG(a))},
ah:function(a,b,c){var u=this,t=W.bG(a),s=u.c
if(s.S(0,H.e(t)+"::"+b))return u.d.fu(c)
else if(s.S(0,"*::"+b))return u.d.fu(c)
else{s=u.b
if(s.S(0,H.e(t)+"::"+b))return!0
else if(s.S(0,"*::"+b))return!0
else if(s.S(0,H.e(t)+"::*"))return!0
else if(s.S(0,"*::*"))return!0}return!1},
$iaw:1}
W.iJ.prototype={
$1:function(a){return!C.a.S(C.l,a)}}
W.iK.prototype={
$1:function(a){return C.a.S(C.l,a)}}
W.iO.prototype={
ah:function(a,b,c){if(this.dA(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1}}
W.iP.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.iN.prototype={
aG:function(a){var u=J.N(a)
if(!!u.$ibU)return!1
u=!!u.$ij
if(u&&W.bG(a)==="foreignObject")return!1
if(u)return!0
return!1},
ah:function(a,b,c){if(b==="is"||C.b.bl(b,"on"))return!1
return this.aG(a)},
$iaw:1}
W.cy.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.em(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gD:function(a){return this.d}}
W.aw.prototype={}
W.iH.prototype={}
W.ea.prototype={
ca:function(a){new W.iT(this).$2(a,null)},
aP:function(a,b){if(b==null)J.jP(a)
else b.removeChild(a)},
fb:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.l4(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aC(r)}t="element unprintable"
try{t=J.af(a)}catch(r){H.aC(r)}try{s=W.bG(a)
this.fa(a,b,p,t,s,o,n)}catch(r){if(H.aC(r) instanceof P.aa)throw r
else{this.aP(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fa:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aP(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aG(a)){p.aP(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ah(a,"is",g)){p.aP(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga2(f)
t=H.b(u.slice(0),[H.bz(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
if(!p.a.ah(a,J.l6(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$ibW)p.ca(a.content)}}
W.iT.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fb(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aP(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aC(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.c9.prototype={}
W.ca.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.e_.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.cb.prototype={}
W.cc.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
P.e9.prototype={$iaM:1,
gcT:function(a){return this.a}}
P.iY.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eY.prototype={
gbw:function(){var u=this.b,t=H.jF(u,"p",0)
return new H.fq(new H.c2(u,new P.eZ(),[t]),new P.f_(),[t,W.P])},
m:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bd(this.gbw().a)},
i:function(a,b){var u=this.gbw()
return u.b.$1(J.je(u.a,b))},
gO:function(a){var u=P.k2(this.gbw(),!1,W.P)
return new J.X(u,u.length)},
$ap:function(){return[W.P]},
$ah:function(){return[W.P]}}
P.eZ.prototype={
$1:function(a){return!!J.N(a).$iP}}
P.f_.prototype={
$1:function(a){return H.m(a,"$iP")}}
P.iD.prototype={
gc5:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.u(t)
return u+t},
gcN:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.u(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.N(b)
if(!!u.$ia7){t=q.a
if(t==u.gbc(b)){s=q.b
if(s==u.gbg(b)){r=q.c
if(typeof t!=="number")return t.E()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gc5(b)){t=q.d
if(typeof s!=="number")return s.E()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gcN(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.bb(t),r=u.b,q=J.bb(r),p=u.c
if(typeof t!=="number")return t.E()
if(typeof p!=="number")return H.u(p)
p=C.d.gH(t+p)
t=u.d
if(typeof r!=="number")return r.E()
if(typeof t!=="number")return H.u(t)
t=C.d.gH(r+t)
return P.lP(P.iA(P.iA(P.iA(P.iA(0,s),q),p),t))}}
P.a7.prototype={
gbc:function(a){return this.a},
gbg:function(a){return this.b},
gay:function(a){return this.c},
gar:function(a){return this.d}}
P.bl.prototype={$ibl:1}
P.fh.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bl]},
$ih:1,
$ah:function(){return[P.bl]}}
P.bn.prototype={$ibn:1}
P.fX.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bn]},
$ih:1,
$ah:function(){return[P.bn]}}
P.h4.prototype={
gl:function(a){return a.length}}
P.bU.prototype={$ibU:1}
P.hx.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$ap:function(){return[P.q]},
$ih:1,
$ah:function(){return[P.q]}}
P.j.prototype={
gcP:function(a){return new P.eY(a,new W.W(a))},
a9:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aw])
p.push(W.kv(null))
p.push(W.kx())
p.push(new W.iN())
c=new W.ea(new W.cT(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).fH(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.W(s)
q=p.gaz(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.br.prototype={$ibr:1}
P.hO.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$ap:function(){return[P.br]},
$ih:1,
$ah:function(){return[P.br]}}
P.dE.prototype={}
P.dF.prototype={}
P.dP.prototype={}
P.dQ.prototype={}
P.e0.prototype={}
P.e1.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.er.prototype={
gl:function(a){return a.length}}
P.es.prototype={
i:function(a,b){return P.aB(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aB(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.q])
this.J(a,new P.et(u))
return u},
gl:function(a){return a.size}}
P.et.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eu.prototype={
gl:function(a){return a.length}}
P.be.prototype={}
P.fY.prototype={
gl:function(a){return a.length}}
P.dr.prototype={}
P.d_.prototype={
hn:function(a,b,c,d,e,f,g){var u,t=J.N(g)
if(!!t.$iaM)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mr(g))
return}if(!!t.$ibJ)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.l7("Incorrect number or type of arguments"))}}
P.hs.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return P.aB(a.item(b))},
C:function(a,b){return this.i(a,b)},
$ap:function(){return[[P.cL,,,]]},
$ih:1,
$ah:function(){return[[P.cL,,,]]}}
P.dX.prototype={}
P.dY.prototype={}
T.ap.prototype={
as:function(a,b){return!0},
h:function(a){return"all"}}
T.cz.prototype={
as:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].as(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.aS.prototype={}
T.Y.prototype={
as:function(a,b){return!this.du(0,b)},
h:function(a){return"!["+this.cd(0)+"]"}}
T.h5.prototype={
as:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.jt(this.a),t=H.jt(this.b)
return u+".."+t}}
T.he.prototype={
dE:function(a){var u,t
if(a.a.length<=0)throw H.f(P.r("May not create a Set with zero characters."))
u=new H.L([P.x,P.ao])
for(t=new H.bM(a,a.gl(a));t.v();)u.n(0,t.d,!0)
this.a=u},
as:function(a,b){return this.a.cR(0,b)},
h:function(a){var u=this.a
return P.ju(new H.cH(u,[H.bz(u,0)]))}}
R.d5.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.df(this.a.j(0,b))
r.a=H.b([],[T.aS])
r.c=!1
this.c.push(r)
return r},
fS:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.as(0,a))return r}return},
h:function(a){return this.b}}
R.dc.prototype={
h:function(a){var u=H.jL(this.b,"\n","\\n"),t=H.jL(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dd.prototype={
av:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.o)(c),++t){s=c[t]
this.c.n(0,s,b)}},
h:function(a){return this.b}}
R.hJ.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.d5(this,b)
u.c=H.b([],[R.df])
this.a.n(0,b,u)}return u},
K:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dd(a)
u=P.q
t.c=new H.L([u,u])
this.b.n(0,a,t)}return t},
dj:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.dc]),l=this.c,k=[P.x],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.aB(a,s)
q=l.fS(r)
if(q==null){if(t==null){j.push(r)
p=P.ju(j)
throw H.f(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.ju(j)
o=l.d
n=o.c.i(0,p)
t=new R.dc(n==null?o.b:n,p,s)}++s}}}}
R.df.prototype={
h:function(a){return this.b.b+": "+this.cd(0)}}
O.aq.prototype={
b4:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cb:function(a,b,c){this.b=b
this.c=a},
aK:function(a,b){return this.cb(a,null,b)},
cz:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ci:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.X(u,u.length)},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
m:function(a,b){var u,t,s=this,r=[H.jF(s,"aq",0)]
if(s.cz(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ci(t,H.b([b],r))}},
a1:function(a,b){var u,t
if(this.cz(b)){u=this.a
t=u.length
C.a.a1(u,b)
this.ci(t,b)}},
$ih:1}
O.bN.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.A():u},
aA:function(){var u=this.b
if(u!=null)u.B(null)},
gY:function(a){var u=this.a
if(u.length>0)return C.a.gbb(u)
else return V.bm()},
bf:function(a){var u=this.a
if(a==null)u.push(V.bm())
else u.push(a)
this.aA()},
au:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}}}
E.ev.prototype={}
E.as.prototype={
sbj:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().M(0,s.gda())
u=s.c
if(u!=null)u.gp().m(0,s.gda())
t=new D.w("shape",r,s.c)
t.b=!0
s.bd(t)}},
ad:function(a,b){var u
for(u=this.y.a,u=new J.X(u,u.length);u.v();)u.d.ad(0,b)},
a6:function(a){var u,t=this,s=a.dx
s.a.push(s.gY(s))
s.aA()
a.c2(t.f)
s=a.dy
u=(s&&C.a).gbb(s)
if(u!=null&&t.d!=null)u.df(a,t)
for(s=t.y.a,s=new J.X(s,s.length);s.v();)s.d.a6(a)
a.c1()
a.dx.au()},
bd:function(a){var u=this.z
if(u!=null)u.B(a)},
a5:function(){return this.bd(null)},
dc:function(a){this.e=null
this.bd(a)},
h6:function(){return this.dc(null)},
d9:function(a){this.bd(a)},
h3:function(){return this.d9(null)},
h2:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd8(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bj()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a5()},
h5:function(a,b){var u,t
for(u=b.gO(b),t=this.gd8();u.v();)u.gD(u).gp().M(0,t)
this.a5()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.h6.prototype={
dD:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a5(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bN()
t=[V.au]
u.a=H.b([],t)
u.gp().m(0,new E.h7(s))
s.cy=u
u=new O.bN()
u.a=H.b([],t)
u.gp().m(0,new E.h8(s))
s.db=u
u=new O.bN()
u.a=H.b([],t)
u.gp().m(0,new E.h9(s))
s.dx=u
u=H.b([],[O.d8])
s.dy=u
u.push(null)
s.fr=new H.L([P.q,A.d0])},
ghf:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gY(s)
u=t.db
u=t.z=s.u(0,u.gY(u))
s=u}return s},
c2:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbb(u):a)},
c1:function(){var u=this.dy
if(u.length>1)u.pop()},
cK:function(a){var u=a.b
if(u.length===0)throw H.f(P.r("May not cache a shader with no name."))
if(this.fr.cR(0,u))throw H.f(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)}}
E.h7.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h8.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.h9.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.da.prototype={
cl:function(a){this.dg()},
ck:function(){return this.cl(null)},
gfV:function(){var u,t=this,s=Date.now(),r=C.d.a0(P.jW(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.a5(s,!1)
return u/r},
cB:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.u(r)
u=C.c.bU(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.c.bU(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kl(C.i,s.ghj())}},
dg:function(){if(!this.ch){this.ch=!0
var u=window
C.v.e0(u)
C.v.f6(u,W.kB(new E.hH(this),P.a9))}},
hi:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cB()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a5(r,!1)
s.y=P.jW(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aA()
r=s.db
C.a.sl(r.a,0)
r.aA()
r=s.dx
C.a.sl(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.a6(p.e)}s=p.z
if(s!=null)s.B(null)}catch(q){u=H.aC(q)
t=H.jG(q)
P.jK("Error: "+H.e(u))
P.jK("Stack: "+H.e(t))
throw H.f(u)}}}
E.hH.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.hi()}}}
Z.dn.prototype={}
Z.cl.prototype={
W:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aC(s)
t=P.r('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dp.prototype={}
Z.bD.prototype={
aq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
W:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].W(a)},
aI:function(a){var u,t,s
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
h:function(a){var u,t,s,r,q=[P.q],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.af(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.bK.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bT(this.c))+"'")+"]"}}
Z.b4.prototype={
gcc:function(a){var u=this.a,t=(u&$.ae().a)!==0?3:0
if((u&$.aF().a)!==0)t+=3
if((u&$.aE().a)!==0)t+=3
if((u&$.b9().a)!==0)t+=2
if((u&$.ba().a)!==0)t+=3
if((u&$.ch().a)!==0)t+=3
if((u&$.ci().a)!==0)t+=4
if((u&$.bA().a)!==0)++t
return(u&$.aD().a)!==0?t+4:t},
fv:function(a){var u,t=$.ae(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ch()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ci()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aD()
if((s&t.a)!==0)if(u===a)return t
return $.l_()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b4))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.q]),t=this.a
if((t&$.ae().a)!==0)u.push("Pos")
if((t&$.aF().a)!==0)u.push("Norm")
if((t&$.aE().a)!==0)u.push("Binm")
if((t&$.b9().a)!==0)u.push("Txt2D")
if((t&$.ba().a)!==0)u.push("TxtCube")
if((t&$.ch().a)!==0)u.push("Clr3")
if((t&$.ci().a)!==0)u.push("Clr4")
if((t&$.bA().a)!==0)u.push("Weight")
if((t&$.aD().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.ey.prototype={}
D.bj.prototype={
m:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Q]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.S(s,b)
if(s===!0){s=t.a
u=(s&&C.a).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.S(s,b)
if(s===!0){s=t.b
u=(s&&C.a).M(s,b)||u}return u},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Q()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.k2(u,!0,{func:1,ret:-1,args:[D.Q]}),new D.eT(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Q]}])
C.a.J(u,new D.eU(q))}return!0},
fP:function(){return this.B(null)},
aw:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}}}
D.eT.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eU.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Q.prototype={}
D.aN.prototype={}
D.aO.prototype={}
D.w.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cm.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cm))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cE.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cE))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fg.prototype={
hb:function(a){this.c=a.b
this.d.m(0,a.a)
return!1},
h7:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.cK.prototype={}
X.fn.prototype={
aN:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.V(o.a+n*m,o.b+u*t)
t=q.a.gaH()
r=new X.av(a,V.ax(),q.x,t,s)
r.b=!0
q.z=new P.a5(p,!1)
q.x=s
return r},
c0:function(a,b){this.r=a.a
return!1},
b_:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dn()
if(typeof u!=="number")return u.ai()
this.r=(u&~t)>>>0
return!1},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aN(a,b))
return!0},
hc:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaH()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.bO(new V.B(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
eB:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cK(c,r.a.gaH(),b)
s.b=!0
t.B(s)
r.y=new P.a5(u,!1)
r.x=V.ax()}}
X.a6.prototype={
t:function(a,b){var u=this
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
X.av.prototype={}
X.fM.prototype={
bu:function(a,b,c){var u=this,t=new P.a5(Date.now(),!1),s=u.a.gaH(),r=new X.av(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c0:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bu(a,b,!0))
return!0},
b_:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dn()
if(typeof t!=="number")return t.ai()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bu(a,b,!0))
return!0},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bu(a,b,!1))
return!0},
hd:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaH()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.bO(new V.B(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gcW:function(){var u=this.b
return u==null?this.b=D.A():u},
gc7:function(){var u=this.c
return u==null?this.c=D.A():u},
gd7:function(){var u=this.d
return u==null?this.d=D.A():u}}
X.bO.prototype={}
X.h3.prototype={}
X.de.prototype={}
X.hL.prototype={
aN:function(a,b){var u=this,t=new P.a5(Date.now(),!1),s=a.length>0?a[0]:V.ax(),r=u.a.gaH(),q=new X.de(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
ha:function(a){var u=this.b
if(u==null)return!1
u.B(this.aN(a,!0))
return!0},
h8:function(a){var u=this.c
if(u==null)return!1
u.B(this.aN(a,!0))
return!0},
h9:function(a){var u=this.d
if(u==null)return!1
u.B(this.aN(a,!1))
return!0}}
X.dj.prototype={
gaH:function(){var u=this.a,t=C.f.gcQ(u).c
t.toString
u=C.f.gcQ(u).d
u.toString
return V.kf(0,0,t,u)},
cs:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cE(u,new X.a6(t,a.altKey,a.shiftKey))},
aF:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a6(t,a.altKey,a.shiftKey)},
bI:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a6(t,a.altKey,a.shiftKey)},
an:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.V(s-q,r-u)},
aO:function(a){return new V.B(a.movementX,a.movementY)},
bG:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.V])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.c.ac(r.pageX)
C.c.ac(r.pageY)
p=o.left
C.c.ac(r.pageX)
n.push(new V.V(q-p,C.c.ac(r.pageY)-o.top))}return n},
al:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cm(u,new X.a6(t,a.altKey,a.shiftKey))},
bx:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ev:function(a){this.f=!0},
ei:function(a){this.f=!1},
eo:function(a){if(this.f&&this.bx(a))a.preventDefault()},
ez:function(a){var u
if(!this.f)return
u=this.cs(a)
this.b.hb(u)},
ex:function(a){var u
if(!this.f)return
u=this.cs(a)
this.b.h7(u)},
eD:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aF(a)
if(r.x){u=r.al(a)
t=r.aO(a)
if(r.d.c0(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.al(a)
s=r.an(a)
if(r.c.c0(u,s))a.preventDefault()},
eH:function(a){var u,t,s,r=this
r.aF(a)
u=r.al(a)
if(r.x){t=r.aO(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.b_(u,s))a.preventDefault()},
es:function(a){var u,t,s,r=this
if(!r.bx(a)){r.aF(a)
u=r.al(a)
if(r.x){t=r.aO(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.b_(u,s))a.preventDefault()}},
eF:function(a){var u,t,s,r=this
r.aF(a)
u=r.al(a)
if(r.x){t=r.aO(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aZ(u,s))a.preventDefault()},
eq:function(a){var u,t,s,r=this
if(!r.bx(a)){r.aF(a)
u=r.al(a)
if(r.x){t=r.aO(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aZ(u,s))a.preventDefault()}},
eJ:function(a){var u,t,s=this
s.aF(a)
u=new V.B((a&&C.u).gfJ(a),C.u.gfK(a)).q(0,180)
if(s.x){if(s.d.hc(u))a.preventDefault()
return}if(s.r)return
t=s.an(a)
if(s.c.hd(u,t))a.preventDefault()},
eL:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.al(s.y)
t=s.an(s.y)
s.d.eB(u,t,r)}},
f0:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bI(a)
u=t.bG(a)
if(t.e.ha(u))a.preventDefault()},
eX:function(a){var u
this.bI(a)
u=this.bG(a)
if(this.e.h8(u))a.preventDefault()},
eZ:function(a){var u
this.bI(a)
u=this.bG(a)
if(this.e.h9(u))a.preventDefault()}}
D.bh.prototype={
ak:function(a){var u=this.r
if(u!=null)u.B(a)},
dI:function(){return this.ak(null)},
$ia0:1}
D.a0.prototype={}
D.cF.prototype={
ak:function(a){var u=this.x
if(u!=null)u.B(a)},
cw:function(a){var u=this.y
if(u!=null)u.B(a)},
eA:function(){return this.cw(null)},
eN:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.dW(s))return!1}return!0},
ec:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcv(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.bh)this.e.push(q)
p=q.r
if(p==null){p=new D.bj()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.aN()
u.b=!0
this.ak(u)},
eR:function(a,b){var u,t,s
for(u=b.gO(b),t=this.gcv();u.v();){s=u.gD(u)
C.a.M(this.e,s)
s.gp().M(0,t)}u=new D.aO()
u.b=!0
this.ak(u)},
dW:function(a){var u=C.a.S(this.e,a)
return u},
$ah:function(){return[D.a0]},
$aaq:function(){return[D.a0]}}
D.h2.prototype={$ia0:1}
D.hr.prototype={$ia0:1}
V.O.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.a3.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.eS.prototype={}
V.cO.prototype={
a7:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cO))return!1
u=b.a
t=$.z().a
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
h:function(a){var u,t,s,r,q=this,p=[P.K],o=V.by(H.b([q.a,q.d,q.r],p),3,0),n=V.by(H.b([q.b,q.e,q.x],p),3,0),m=V.by(H.b([q.c,q.f,q.y],p),3,0)
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
V.au.prototype={
a7:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
bW:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.bm()
u=1/b1
t=-n
s=-a0
return V.ak((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ak(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bh:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
c6:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.R(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=$.z().a
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
h:function(a){return this.P()},
G:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.by(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.by(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.by(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.by(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.G("")}}
V.V.prototype={
F:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.R.prototype={
E:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
F:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.aW.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aW))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.cZ.prototype={
ga4:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cZ))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.B.prototype={
bX:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.B(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.kp
return u==null?$.kp=new V.B(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.B(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.y.prototype={
bX:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ap:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
E:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.y(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if(Math.abs(b-0)<$.z().a)return V.c1()
return new V.y(this.a/b,this.b/b,this.c/b)},
d6:function(){var u=$.z().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
U.eA.prototype={
bp:function(a){var u=V.mU(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.A():u},
L:function(a){var u=this.y
if(u!=null)u.B(a)},
sc8:function(a,b){},
sbY:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bp(u)}s=new D.w("maximumLocation",s,t.b)
s.b=!0
t.L(s)}},
sc_:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bp(u)}s=new D.w("minimumLocation",s,t.c)
s.b=!0
t.L(s)}},
sa3:function(a,b){var u,t=this
b=t.bp(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.w("location",u,b)
u.b=!0
t.L(u)}},
sbZ:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.w("maximumVelocity",r,a)
r.b=!0
s.L(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.w("velocity",t,a)
t.b=!0
u.L(t)}},
sbN:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.w("dampening",u,a)
u.b=!0
this.L(u)}},
ad:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa3(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.z().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cp.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.A():u},
aJ:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
return J.E(this.a,b.a)},
h:function(a){return"Constant: "+this.a.G("          ")}}
U.bH.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.A():u},
L:function(a){var u=this.e
if(u!=null)u.B(a)},
a_:function(){return this.L(null)},
ea:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaE(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aN()
u.b=!0
this.L(u)},
eP:function(a,b){var u,t
for(u=b.gO(b),t=this.gaE();u.v();)u.gD(u).gp().M(0,t)
u=new D.aO()
u.b=!0
this.L(u)},
aJ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a8()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.X(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aJ(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bm():u
r=s.e
if(r!=null)r.aw(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bH))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.E(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ah:function(){return[U.a1]},
$aaq:function(){return[U.a1]},
$ia1:1}
U.a1.prototype={}
U.dk.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.A():u},
L:function(a){var u=this.cy
if(u!=null)u.B(a)},
a_:function(){return this.L(null)},
aQ:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcW().m(0,u.gby())
u.a.c.gd7().m(0,u.gbA())
u.a.c.gc7().m(0,u.gbC())
return!0},
bz:function(a){var u=this
if(!J.E(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bB:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$iav")
if(!n.y)return
if(n.x){u=a.d.F(0,a.y)
u=new V.B(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.F(0,a.y)
u=new V.B(t.a,t.b).u(0,2).q(0,u.ga4())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.B(s.a,s.b).u(0,2).q(0,u.ga4())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sa3(0,-q*p+o)
n.b.sR(0)
t=t.F(0,a.z)
n.Q=new V.B(t.a,t.b).u(0,2).q(0,u.ga4())}n.a_()},
bD:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sR(t*10*s)
r.a_()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a8()
if(q<p){r.ch=p
u=b.y
r.b.ad(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ak(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia1:1}
U.dl.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.A():u},
L:function(a){var u=this.fx
if(u!=null)u.B(a)},
a_:function(){return this.L(null)},
aQ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcW().m(0,s.gby())
s.a.c.gd7().m(0,s.gbA())
s.a.c.gc7().m(0,s.gbC())
u=s.a.d
t=u.f
u=t==null?u.f=D.A():t
u.m(0,s.ge2())
u=s.a.d
t=u.d
u=t==null?u.d=D.A():t
u.m(0,s.ge4())
u=s.a.e
t=u.b
u=t==null?u.b=D.A():t
u.m(0,s.gfo())
u=s.a.e
t=u.d
u=t==null?u.d=D.A():t
u.m(0,s.gfm())
u=s.a.e
t=u.c
u=t==null?u.c=D.A():t
u.m(0,s.gfk())
return!0},
ag:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.B(u,t)},
bz:function(a){var u=this
H.m(a,"$iav")
if(!J.E(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bB:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$iav")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.B(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.ag(new V.B(t.a,t.b).u(0,2).q(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ag(new V.B(s.a,s.b).u(0,2).q(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa3(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.F(0,a.z)
n.dx=n.ag(new V.B(t.a,t.b).u(0,2).q(0,u.ga4()))}n.a_()},
bD:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sR(-t*10*u)
r.a_()}},
e3:function(a){var u=this
if(H.m(a,"$icK").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
e5:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$iav")
if(!J.E(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ag(new V.B(s.a,s.b).u(0,2).q(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa3(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.F(0,a.z)
n.dx=n.ag(new V.B(t.a,t.b).u(0,2).q(0,u.ga4()))
n.a_()},
fp:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fn:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$ide")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.B(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.ag(new V.B(t.a,t.b).u(0,2).q(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ag(new V.B(s.a,s.b).u(0,2).q(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa3(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.F(0,a.z)
n.dx=n.ag(new V.B(t.a,t.b).u(0,2).q(0,u.ga4()))}n.a_()},
fl:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sR(-t*10*u)
r.a_()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a8()
if(q<p){r.dy=p
u=b.y
r.c.ad(0,u)
r.b.ad(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ak(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.ak(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia1:1}
U.dm.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.A():u},
L:function(a){var u=this.r
if(u!=null)u.B(a)},
aQ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.A():t
t=r.ge7()
u.m(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.A():s).m(0,t)
return!0},
e8:function(a){var u,t,s,r,q=this
if(!J.E(q.b,q.a.b.c))return
H.m(a,"$ibO")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.w("zoom",u,r)
u.b=!0
q.L(u)}},
aJ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ak(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia1:1}
M.co.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.A():u},
V:function(a){var u=this.r
if(u!=null)u.B(a)},
aM:function(){return this.V(null)},
eT:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gU(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aN()
u.b=!0
this.V(u)},
eV:function(a,b){var u,t
for(u=b.gO(b),t=this.gU();u.v();)u.gD(u).gp().M(0,t)
u=new D.aO()
u.b=!0
this.V(u)},
a6:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.X(u,u.length);u.v();){t=u.d
if(t!=null)t.a6(a)}s.f=!1},
$ah:function(){return[M.ac]},
$aaq:function(){return[M.ac]},
$iac:1}
M.cq.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.A():u},
V:function(a){var u=this.r
if(u!=null)u.B(a)},
aM:function(){return this.V(null)},
saR:function(a){var u,t,s=this
if(a==null)a=new X.f9()
u=s.b
if(u!==a){if(u!=null)u.gp().M(0,s.gU())
t=s.b
s.b=a
a.gp().m(0,s.gU())
u=new D.w("camera",t,s.b)
u.b=!0
s.V(u)}},
sb0:function(a,b){var u,t,s=this
if(b==null)b=X.jn(null)
u=s.c
if(u!==b){if(u!=null)u.gp().M(0,s.gU())
t=s.c
s.c=b
b.gp().m(0,s.gU())
u=new D.w("target",t,s.c)
u.b=!0
s.V(u)}},
sb1:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().M(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gp().m(0,t.gU())
s=new D.w("technique",u,t.d)
s.b=!0
t.V(s)}},
a6:function(a){var u=this
a.c2(u.d)
u.c.W(a)
u.b.W(a)
u.e.ad(0,a)
u.e.a6(a)
u.b.aI(a)
u.c.toString
a.c1()},
$iac:1}
M.cv.prototype={
V:function(a){var u=this.y
if(u!=null)u.B(a)},
aM:function(){return this.V(null)},
ek:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gU(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bj()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aN()
u.b=!0
this.V(u)},
em:function(a,b){var u,t
for(u=b.gO(b),t=this.gU();u.v();)u.gD(u).gp().M(0,t)
u=new D.aO()
u.b=!0
this.V(u)},
saR:function(a){var u,t,s=this
if(a==null)a=X.k7(null)
u=s.b
if(u!==a){if(u!=null)u.gp().M(0,s.gU())
t=s.b
s.b=a
a.gp().m(0,s.gU())
u=new D.w("camera",t,s.b)
u.b=!0
s.V(u)}},
sb0:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().M(0,t.gU())
u=t.c
t.c=b
b.gp().m(0,t.gU())
s=new D.w("target",u,t.c)
s.b=!0
t.V(s)}},
sb1:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().M(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gp().m(0,t.gU())
s=new D.w("technique",u,t.d)
s.b=!0
t.V(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.A():u},
a6:function(a){var u,t=this
a.c2(t.d)
t.c.W(a)
t.b.W(a)
u=t.d
if(u!=null)u.ad(0,a)
for(u=t.e.a,u=new J.X(u,u.length);u.v();)u.d.ad(0,a)
for(u=t.e.a,u=new J.X(u,u.length);u.v();)u.d.a6(a)
t.b.toString
a.cy.au()
a.db.au()
t.c.toString
a.c1()},
$iac:1}
M.ac.prototype={}
A.cj.prototype={}
A.eq.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cU:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.T.prototype={
gae:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.T))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.ft.prototype={
dC:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ay("")
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
A.m8(c0,u)
A.ma(c0,u)
A.m9(c0,u)
A.mc(c0,u)
A.md(c0,u)
A.mb(c0,u)
A.me(c0,u)
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
b5.d5(0,s.charCodeAt(0)==0?s:s,A.m7(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.m(b5.y.T(0,"invViewMat"),"$ia2")
if(t)b5.dy=H.m(b5.y.T(0,"objMat"),"$ia2")
if(r)b5.fr=H.m(b5.y.T(0,"viewObjMat"),"$ia2")
b5.fy=H.m(b5.y.T(0,"projViewObjMat"),"$ia2")
if(c0.ry)b5.k1=H.m(b5.y.T(0,"txt2DMat"),"$ibZ")
if(c0.x1)b5.k2=H.m(b5.y.T(0,"txtCubeMat"),"$ia2")
if(c0.x2)b5.k3=H.m(b5.y.T(0,"colorMat"),"$ia2")
b5.r1=H.b([],[A.a2])
t=c0.y2
if(t>0){b5.k4=b5.y.T(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.t(P.r(b7+q+b8))
s.push(H.m(m,"$ia2"))}}if(c0.a.a)b5.r2=H.m(b5.y.T(0,"emissionClr"),"$iD")
if(c0.b.a)b5.x1=H.m(b5.y.T(0,"ambientClr"),"$iD")
if(c0.c.a)b5.y2=H.m(b5.y.T(0,"diffuseClr"),"$iD")
if(c0.d.a)b5.cY=H.m(b5.y.T(0,"invDiffuseClr"),"$iD")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.d_=H.m(b5.y.T(0,"shininess"),"$iM")
if(t)b5.cZ=H.m(b5.y.T(0,"specularClr"),"$iD")}if(c0.cy){b5.d0=H.m(b5.y.T(0,"envSampler"),"$ib2")
if(c0.r.a)b5.d1=H.m(b5.y.T(0,"reflectClr"),"$iD")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.d2=H.m(b5.y.T(0,"refraction"),"$iM")
if(t)b5.d3=H.m(b5.y.T(0,"refractClr"),"$iD")}}if(c0.y.a)b5.d4=H.m(b5.y.T(0,"alpha"),"$iM")
t=P.x
s=[t,A.dh]
b5.bO=new H.L(s)
b5.bP=new H.L([t,[P.ai,A.bY]])
b5.bQ=new H.L(s)
b5.bR=new H.L([t,[P.ai,A.c_]])
b5.bS=new H.L(s)
b5.bT=new H.L([t,[P.ai,A.c0]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.bY],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ai()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.t(P.r(b7+g+b8))
H.m(m,"$iD")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.t(P.r(b7+g+b8))
H.m(f,"$iD")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.t(P.r(b7+g+b8))
H.m(e,"$iD")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.t(P.r(b7+g+b8))
H.m(m,"$iD")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.t(P.r(b7+g+b8))
H.m(f,"$iD")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.m(e,"$ibs")
a=e}else a=b6
h.push(new A.bY(b,c,d,m,f,a))}b5.bP.n(0,j,h)
q=b5.bO
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.n(0,j,m)}for(t=c0.Q,s=t.length,r=[A.c_],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
H.m(m,"$iD")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.t(P.r(b7+o+b8))
H.m(f,"$iD")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.m(e,"$iD")
if(typeof j!=="number")return j.ai()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.m(a0,"$ibZ")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.m(a0,"$ib2")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.m(a0,"$ib2")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.m(a2,"$ibX")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.m(a0,"$iM")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.m(a2,"$iM")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.t(P.r(b7+o+b8))
H.m(a5,"$iM")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.c_(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bR.n(0,j,h)
q=b5.bQ
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.n(0,j,m)}for(t=c0.ch,s=t.length,r=[A.c0],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
H.m(m,"$iD")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.t(P.r(b7+o+b8))
H.m(f,"$iD")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.m(e,"$iD")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.m(a0,"$iD")
if(typeof j!=="number")return j.ai()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.m(a2,"$iD")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.t(P.r(b7+o+b8))
H.m(a5,"$iD")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.t(P.r(b7+o+b8))
H.m(a9,"$iM")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.t(P.r(b7+o+b8))
H.m(b0,"$iM")
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
if(a2==null)H.t(P.r(b7+g+b8))
H.m(a2,"$ibX")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.t(P.r(b7+g+b8))
H.m(a2,"$iM")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.t(P.r(b7+g+b8))
H.m(a5,"$iM")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.t(P.r(b7+g+b8))
H.m(a2,"$iM")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.t(P.r(b7+g+b8))
H.m(a5,"$iM")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.t(P.r(b7+g+b8))
H.m(a9,"$iM")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.t(P.r(b7+g+b8))
H.m(a2,"$ibs")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.m(a2,"$ibs")
a3=a2}else a3=b6
h.push(new A.c0(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bT.n(0,j,h)
q=b5.bS
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.n(0,j,m)}}},
fc:function(a,b){}}
A.cs.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cX.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.d3.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fw.prototype={
h:function(a){return this.aV}}
A.bY.prototype={}
A.c_.prototype={}
A.c0.prototype={}
A.d0.prototype={
cg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d5:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.ct(b,35633)
r.f=r.ct(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.r("Failed to link shader: "+H.e(s)))}r.fg()
r.fi()},
W:function(a){a.a.useProgram(this.r)
this.x.fQ()},
ct:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.r("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fg:function(){var u,t,s,r=this,q=H.b([],[A.cj]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cj(p,t.name,s))}r.x=new A.eq(q)},
fi:function(){var u,t,s,r=this,q=H.b([],[A.dg]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fI(t.type,t.size,t.name,s))}r.y=new A.hX(q)},
aC:function(a,b,c){var u=this.a
if(a===1)return new A.dh(u,b,c)
else return A.jw(u,this.r,b,a,c)},
dY:function(a,b,c){var u=this.a
if(a===1)return new A.bs(u,b,c)
else return A.jw(u,this.r,b,a,c)},
dZ:function(a,b,c){var u=this.a
if(a===1)return new A.b2(u,b,c)
else return A.jw(u,this.r,b,a,c)},
b7:function(a,b){return new P.dy(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fI:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aC(b,c,d)
case 5121:return u.aC(b,c,d)
case 5122:return u.aC(b,c,d)
case 5123:return u.aC(b,c,d)
case 5124:return u.aC(b,c,d)
case 5125:return u.aC(b,c,d)
case 5126:return new A.M(u.a,c,d)
case 35664:return new A.hT(u.a,c,d)
case 35665:return new A.D(u.a,c,d)
case 35666:return new A.bX(u.a,c,d)
case 35667:return new A.hU(u.a,c,d)
case 35668:return new A.hV(u.a,c,d)
case 35669:return new A.hW(u.a,c,d)
case 35674:return new A.hY(u.a,c,d)
case 35675:return new A.bZ(u.a,c,d)
case 35676:return new A.a2(u.a,c,d)
case 35678:return u.dY(b,c,d)
case 35680:return u.dZ(b,c,d)
case 35670:throw H.f(u.b7("BOOL",c))
case 35671:throw H.f(u.b7("BOOL_VEC2",c))
case 35672:throw H.f(u.b7("BOOL_VEC3",c))
case 35673:throw H.f(u.b7("BOOL_VEC4",c))
default:throw H.f(P.r("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.ho.prototype={}
A.dg.prototype={}
A.hX.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dh.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hU.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hV.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hW.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hS.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.M.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hT.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.D.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bX.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hY.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bZ.prototype={
ab:function(a){var u=new Float32Array(H.cd(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a2.prototype={
ab:function(a){var u=new Float32Array(H.cd(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bs.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.b2.prototype={
dr:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jb.prototype={
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)}}
F.iZ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jO(n.$1(o),m)
m=J.jO(n.$1(o+3.141592653589793/p.c),m).F(0,l)
m=new V.y(m.a,m.b,m.c)
u=m.q(0,Math.sqrt(m.w(m)))
n=$.kr
if(n==null){n=new V.y(1,0,0)
$.kr=n
t=n}else t=n
n=u.ap(!J.E(u,t)?V.kt():t)
s=n.q(0,Math.sqrt(n.w(n)))
n=s.ap(u)
t=n.q(0,Math.sqrt(n.w(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
m=l.E(0,new V.R(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.E(a.f,m)){a.f=m
n=a.a
if(n!=null)n.a5()}}}
F.aJ.prototype={
aU:function(){var u=this
if(!u.gcV()){C.a.M(u.a.a.d.b,u)
u.a.a.a5()}u.f3()
u.f4()
u.f5()},
fd:function(a){this.a=a
a.d.b.push(this)},
fe:function(a){this.b=a
a.d.c.push(this)},
ff:function(a){this.c=a
a.d.d.push(this)},
f3:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
f4:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
f5:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gcV:function(){return this.a==null||this.b==null||this.c==null},
dS:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c1()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.d6())return
return s.q(0,Math.sqrt(s.w(s)))},
dU:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.w(r)))
r=t.F(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.ap(r.q(0,Math.sqrt(r.w(r))))
return r.q(0,Math.sqrt(r.w(r)))},
bL:function(){var u,t=this
if(t.d!=null)return!0
u=t.dS()
if(u==null){u=t.dU()
if(u==null)return!1}t.d=u
t.a.a.a5()
return!0},
dR:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c1()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.d6())return
return s.q(0,Math.sqrt(s.w(s)))},
dT:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.F(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.F(0,g).u(0,p).E(0,g).F(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.w(l)))
l=o.ap(q)
l=l.q(0,Math.sqrt(l.w(l))).ap(o)
q=l.q(0,Math.sqrt(l.w(l)))}return q},
bJ:function(){var u,t=this
if(t.e!=null)return!0
u=t.dR()
if(u==null){u=t.dT()
if(u==null)return!1}t.e=u
t.a.a.a5()
return!0},
gfE:function(a){var u=this
if(J.E(u.a,u.b))return!0
if(J.E(u.b,u.c))return!0
if(J.E(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.P()},
G:function(a){var u,t,s=this
if(s.gcV())return a+"disposed"
u=a+C.b.at(J.af(s.a.e),0)+", "+C.b.at(J.af(s.b.e),0)+", "+C.b.at(J.af(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.eV.prototype={}
F.hn.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.cG.prototype={}
F.fi.prototype={}
F.hR.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.cW.prototype={}
F.hf.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.A():u},
ao:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ao()||!1
if(!t.a.ao())u=!1
s=t.e
if(s!=null)s.aw(0)
return u},
h0:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.bz(o,0)])
for(o=[F.b3];u.length!==0;){t=C.a.gfT(u)
C.a.de(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){s.push(q)
C.a.de(u,r)}}if(s.length>1)b.h_(s)}}p.a.A()
p.c.c3()
p.d.c3()
p.b.hh()
p.c.c4(new F.hR())
p.d.c4(new F.hn())
o=p.e
if(o!=null)o.aw(0)},
cO:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ae()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aF().a)!==0)++s
if((t&$.aE().a)!==0)++s
if((t&$.b9().a)!==0)++s
if((t&$.ba().a)!==0)++s
if((t&$.ch().a)!==0)++s
if((t&$.ci().a)!==0)++s
if((t&$.bA().a)!==0)++s
if((t&$.aD().a)!==0)++s
r=a4.gcc(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cl])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fv(m)
k=l.gcc(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.cl(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].fZ(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cd(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bD(new Z.dn(a1,d),o,a4)
c.b=H.b([],[Z.bK])
a0.b.b
if(a0.c.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)}a=Z.ku(u,34963,b)
c.b.push(new Z.bK(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.A()
b.push(t.e)}a=Z.ku(u,34963,b)
c.b.push(new Z.bK(4,b.length,a))}return c},
h:function(a){var u=this,t=H.b([],[P.q])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.G("   "))}u.b.b
if(u.c.b.length!==0){t.push("Lines:")
t.push(u.c.G("   "))}if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.G("   "))}return C.a.k(t,"\n")},
a5:function(){var u=this.e
if(u!=null)u.B(null)}}
F.hg.prototype={
fs:function(a){var u,t,s,r,q=H.b([],[F.aJ]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.m(0,p)
u.a.m(0,s)
u.a.m(0,r)
q.push(F.cw(p,s,r))}return q},
ft:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aJ])
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
if(p){n.m(0,m)
u.a.m(0,l)
u.a.m(0,j)
h.push(F.cw(m,l,j))
u.a.m(0,m)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.cw(m,j,i))}else{n.m(0,l)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.cw(l,j,i))
u.a.m(0,l)
u.a.m(0,i)
u.a.m(0,m)
h.push(F.cw(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
c4:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
c3:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gfE(s)
if(t)s.aU()}},
ao:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bL())s=!1
return s},
bK:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bJ())s=!1
return s},
h:function(a){return this.P()},
G:function(a){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(a))
return C.a.k(r,"\n")},
P:function(){return this.G("")}}
F.hh.prototype={
gl:function(a){return this.b.length},
c4:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
c3:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.E(s.a,s.b)
if(t)s.aU()}},
h:function(a){return this.P()},
G:function(a){var u,t,s=H.b([],[P.q]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.a.k(s,"\n")},
P:function(){return this.G("")}}
F.hi.prototype={
gl:function(a){return 0},
hh:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.c(t,u)
t=t[u].ghQ()
t=t.ghN(t)
if(t.gl(t).Z(0,1)){t=this.b
return H.c(t,u)
t[u].aU()}}},
h:function(a){return this.P()},
G:function(a){var u,t,s=H.b([],[P.q])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.c(u,t)
s.push(u[t].G(a))}return C.a.k(s,"\n")},
P:function(){return this.G("")}}
F.b3.prototype={
cS:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.i8(u.cx,r,o,t,s,q,p,a,n)},
fZ:function(a){var u,t,s=this
if(a.t(0,$.ae())){u=s.f
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aF())){u=s.r
t=[P.K]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aE())){u=s.x
t=[P.K]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b9())){u=s.y
t=[P.K]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.ba())){u=s.z
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.ch())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.ci())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bA()))return H.b([s.ch],[P.K])
else if(a.t(0,$.aD())){u=s.cx
t=[P.K]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.K])},
bL:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c1()
t.d.J(0,new F.ik(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a5()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
bJ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c1()
t.d.J(0,new F.ij(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a5()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.P()},
G:function(a){var u,t,s=this,r="-",q=H.b([],[P.q])
q.push(C.b.at(J.af(s.e),0))
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
q.push(V.C(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
P:function(){return this.G("")}}
F.ik.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.E(0,t)}}}
F.ij.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.E(0,t)}}}
F.i9.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
m:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a5()
return!0},
b8:function(a,b,c,d,e,f){var u=F.i8(a,null,b,c,null,d,e,f,0)
this.m(0,u)
return u},
gl:function(a){return this.c.length},
ao:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bL()
return!0},
bK:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bJ()
return!0},
fD:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.E(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
h:function(a){return this.P()},
G:function(a){var u,t,s,r
this.A()
u=H.b([],[P.q])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].G(a))
return C.a.k(u,"\n")},
P:function(){return this.G("")}}
F.ia.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.c(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.c(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.c(t,b)
return t[b]},
J:function(a,b){var u=this
C.a.J(u.b,b)
C.a.J(u.c,new F.ib(u,b))
C.a.J(u.d,new F.ic(u,b))},
h:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
return C.a.k(r,"\n")}}
F.ib.prototype={
$1:function(a){if(!J.E(a.a,this.a))this.b.$1(a)}}
F.ic.prototype={
$1:function(a){var u=this.a
if(!J.E(a.a,u)&&!J.E(a.b,u))this.b.$1(a)}}
F.id.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
h:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
return C.a.k(r,"\n")}}
F.ig.prototype={}
F.ie.prototype={
aY:function(a,b,c){return J.E(b.f,c.f)}}
F.ih.prototype={}
F.fV.prototype={
h_:function(a){var u,t,s,r,q,p,o,n,m=V.c1()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.y(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.q(0,Math.sqrt(m.w(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.q(0,Math.sqrt(p*p+o*o+n*n))}if(!J.E(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.B(null)}}}return}}
F.ii.prototype={
gl:function(a){return 0},
h:function(a){return this.P()},
P:function(){var u,t,s=H.b([],[P.q])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.c(u,t)
s.push(u[t].G(""))}return C.a.k(s,"\n")}}
O.cM.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.A():u},
X:function(a){var u=this.fr
if(u!=null)u.B(a)},
bo:function(){return this.X(null)},
cA:function(a){this.a=null
this.X(a)},
f8:function(){return this.cA(null)},
ee:function(a,b){var u=new D.aN()
u.b=!0
this.X(u)},
eg:function(a,b){var u=new D.aO()
u.b=!0
this.X(u)},
cq:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.x,h=new H.L([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=h.i(0,0)
h.n(0,0,r==null?1:r)}q=H.b([],[A.cs])
h.J(0,new O.fA(j,q))
C.a.bk(q,new O.fB())
p=new H.L([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){o=u[s]
r=o.gaT()
n=p.i(0,o.gaT())
p.n(0,r,n==null?1:n)}m=H.b([],[A.cX])
p.J(0,new O.fC(j,m))
C.a.bk(m,new O.fD())
l=new H.L([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.o)(i),++s){o=i[s]
t=o.gaT()
r=l.i(0,o.gaT())
l.n(0,t,r==null?1:r)}k=H.b([],[A.d3])
l.J(0,new O.fE(j,k))
C.a.bk(k,new O.fF())
i=C.d.a0(j.e.a.length+3,4)
j.dy.e
return A.lp(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
dQ:function(a,b){},
ad:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.X(u,u.length);u.v();){t=u.d
t.toString
s=$.i7
if(s==null)s=$.i7=new V.y(0,0,1)
t.a=s
r=$.i6
t.d=r==null?$.i6=new V.y(0,1,0):r
r=$.i5
t.e=r==null?$.i5=new V.y(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bh(s)
r=s.a
p=s.b
o=s.c
t.a=s.q(0,Math.sqrt(r*r+p*p+o*o))
o=q.bh(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.q(0,Math.sqrt(p*p+r*r+s*s))
s=q.bh(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.q(0,Math.sqrt(r*r+p*p+o*o))}}}},
df:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cq()
u=b1.fr.i(0,b0.aV)
if(u==null){u=A.lo(b0,b1.a)
b1.cK(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.cX
b0=b2.e
if(!(b0 instanceof Z.bD))b0=b2.e=null
if(b0==null||!b0.d.t(0,s)){b0=t.k3
if(b0)b2.d.ao()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bK()
q.a.bK()
q=q.e
if(q!=null)q.aw(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.fD()
p=p.e
if(p!=null)p.aw(0)}n=b2.d.cO(new Z.dp(b1.a),s)
n.aq($.ae()).e=a9.a.Q.c
if(b0)n.aq($.aF()).e=a9.a.cx.c
if(r)n.aq($.aE()).e=a9.a.ch.c
if(t.r1)n.aq($.b9()).e=a9.a.cy.c
if(q)n.aq($.ba()).e=a9.a.db.c
if(t.rx)n.aq($.aD()).e=a9.a.dx.c
b2.e=n}m=H.b([],[T.d9])
a9.a.W(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.gY(r)
b0=b0.dy
b0.toString
b0.ab(r.a7(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.gY(r)
q=b1.dx
q=b1.cx=r.u(0,q.gY(q))
r=q}b0=b0.fr
b0.toString
b0.ab(r.a7(0,!0))}b0=a9.a
r=b1.ch
if(r==null){r=b1.ghf()
q=b1.dx
q=b1.ch=r.u(0,q.gY(q))
r=q}b0=b0.fy
b0.toString
b0.ab(r.a7(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.ab(C.j.a7(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.ab(C.j.a7(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.ab(C.j.a7(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.c(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.c(b0,k)
b0=b0[k]
j=new Float32Array(H.cd(r.a7(0,!0)))
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
b0=b0.cY
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.e.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.z.ch
r=r.d_
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.z.f
b0=b0.cZ
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.z
if(b0.length>0){r=b1.db
i=r.gY(r)
r=P.x
h=new H.L([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.n(0,0,e+1)
d=J.em(a9.a.bP.i(0,0),e)
p=i.bh(f.a)
o=p.a
c=p.b
b=p.c
b=p.q(0,Math.sqrt(o*o+c*c+b*b))
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
q=a9.a.bO.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.gY(r)
r=P.x
a=new H.L([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
a0=f.gaT()
e=a.i(0,a0)
if(e==null)e=0
a.n(0,a0,e+1)
d=J.em(a9.a.bR.i(0,a0),e)
a1=i.u(0,f.gY(f))
p=f.gY(f)
o=$.bR
p=p.c6(o==null?$.bR=new V.R(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.bR
p=a1.c6(p==null?$.bR=new V.R(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaS(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gax()
p=a1.bW(0)
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
j=new Float32Array(H.cd(new V.cO(o,c,b,a2,a3,a4,a5,a6,p).a7(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gax()
p=f.gax()
if(!C.a.S(m,p)){p.saW(0,m.length)
m.push(p)}p=f.gax()
o=p.gaX(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaL()
p=f.gds()
o=d.x
o.toString
c=p.gfM(p)
b=p.gfN(p)
a2=p.gfO()
p=p.gfL()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaL()
if(!C.a.S(m,p)){p.saW(0,m.length)
m.push(p)}p=f.gaL()
o=p.gaX(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gfR()){p=f.gfw()
o=d.y
o.a.uniform1f(o.d,p)
p=f.gfz()
o=d.z
o.a.uniform1f(o.d,p)
p=f.gfA()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.bQ.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.gY(r)
r=P.x
a8=new H.L([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
a0=f.gaT()
e=a8.i(0,a0)
if(e==null)e=0
a8.n(0,a0,e+1)
d=J.em(a9.a.bT.i(0,a0),e)
p=f.ghe(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.ghv(f).hM()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.c6(f.ghe(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaS(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gax()
p=f.gc7()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gc5(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.ghO()
o=d.x
o.a.uniform1f(o.d,p)
p=f.ghP()
o=d.y
o.a.uniform1f(o.d,p)
f.gax()
p=f.gax()
if(!C.a.S(m,p)){p.saW(0,m.length)
m.push(p)}p=f.gax()
o=p.gaX(p)
if(o){o=d.dx
o.toString
c=p.gaX(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.gaW(p)
o.a.uniform1i(o.d,p)}}f.gaL()
p=f.gds()
o=d.z
o.toString
c=p.gfM(p)
b=p.gfN(p)
a2=p.gfO()
p=p.gfL()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaL()
if(!C.a.S(m,p)){p.saW(0,m.length)
m.push(p)}p=f.gaL()
o=p.gaX(p)
if(o){o=d.dy
o.toString
c=p.gaX(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.gaW(p)
o.a.uniform1i(o.d,p)}}if(f.ghw()){p=f.ghu()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.ght()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.gfR()){p=f.gfw()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.gfz()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.gfA()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.bS.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gY(r).bW(0)}b0=b0.id
b0.toString
b0.ab(r.a7(0,!0))}if(t.cy){a9.dQ(m,a9.ch)
b0=a9.a
r=a9.ch
b0.fc(b0.d0,r)
if(t.r.a){b0=a9.a
r=a9.cx.f
b0=b0.d1
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.x.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.cy.ch
r=r.d2
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.cy.f
b0=b0.d3
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}}b0=t.y.a
r=!b0
if(r)q=!1
else q=!0
if(q){if(b0){b0=a9.a
q=a9.db.f
b0=b0.d4
b0.a.uniform1f(b0.d,q)}b0=b1.a
b0.enable(3042)
b0.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].W(b1)
b0=b2.e
b0.W(b1)
b0.a6(b1)
b0.aI(b1)
if(r)b0=!1
else b0=!0
if(b0)b1.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aI(b1)
b0=a9.a
b0.toString
b1.a.useProgram(null)
b0.x.cU()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cq().aV}}
O.fA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.cs(a,C.d.a0(b+3,4)*4))}}
O.fB.prototype={
$2:function(a,b){return J.jd(a.a,b.a)}}
O.fC.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.cX(a,C.d.a0(b+3,4)*4))}}
O.fD.prototype={
$2:function(a,b){return J.jd(a.a,b.a)}}
O.fE.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.d3(a,C.d.a0(b+3,4)*4))}}
O.fF.prototype={
$2:function(a,b){return J.jd(a.a,b.a)}}
O.fu.prototype={
am:function(){var u,t=this
t.ce()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.w(t.b,u,1)
u.b=!0
t.a.X(u)}}}
O.cN.prototype={
am:function(){},
cD:function(a){var u,t,s=this
if(!s.c.t(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.am()
u=s.a
u.a=null
u.X(null)}}}
O.fv.prototype={}
O.aj.prototype={
cC:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.w(s.b+".color",u,a)
t.b=!0
s.a.X(t)}},
am:function(){this.ce()
this.cC(new V.O(1,1,1))},
saS:function(a,b){this.cD(new A.T(!0,!1,!1))
this.cC(b)}}
O.fx.prototype={}
O.fy.prototype={
am:function(){var u,t=this
t.cf()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.w(t.b+".refraction",u,1)
u.b=!0
t.a.X(u)}}}
O.fz.prototype={
cE:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.w(u.b+".shininess",t,a)
t.b=!0
u.a.X(t)}},
am:function(){this.cf()
this.cE(100)}}
O.d1.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.A():u},
X:function(a){var u=this.e
if(u!=null)u.B(a)},
bo:function(){return this.X(null)},
df:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.ho(t,n)
u.cg(t,n)
u.d5(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.m(u.y.i(0,"fov"),"$iM")
u.ch=H.m(u.y.i(0,"ratio"),"$iM")
u.cx=H.m(u.y.i(0,"boxClr"),"$iD")
u.cy=H.m(u.y.i(0,"boxTxt"),"$ib2")
u.db=H.m(u.y.i(0,"viewMat"),"$ia2")
a.cK(u)}o.a=u}if(b.e==null){t=b.d.cO(new Z.dp(a.a),$.ae())
t.aq($.ae()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.W(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.dr(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gY(s).bW(0)
r=r.db
r.toString
r.ab(s.a7(0,!0))
t=b.e
if(t instanceof Z.bD){t.W(a)
t.a6(a)
t.aI(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.cU()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.d8.prototype={}
T.d9.prototype={}
T.hE.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.A():u}}
T.hF.prototype={
aD:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.S(u,"load",new T.hG(this,u,!1,b,!1,d,a),!1)},
f9:function(a,b,c){var u,t,s,r
b=V.jJ(b)
u=V.jJ(a.width)
t=V.jJ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jh()
s.width=u
s.height=t
r=C.f.dl(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ms(r.getImageData(0,0,s.width,s.height))}}}
T.hG.prototype={
$1:function(a){var u=this,t=u.a,s=t.f9(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.N.hn(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.fP()}++t.e}}
X.jg.prototype={}
X.f2.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.A():u},
af:function(a){var u=this.x
if(u!=null)u.B(a)},
W:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.u(u)
q=C.c.ac(r*u)
r=s.b
if(typeof t!=="number")return H.u(t)
p=C.c.ac(r*t)
r=C.c.ac(s.c*u)
a.c=r
s=C.c.ac(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.f9.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.A():u},
W:function(a){var u
a.cy.bf(V.bm())
u=V.bm()
a.db.bf(u)},
aI:function(a){a.cy.au()
a.db.au()}}
X.cV.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.A():u},
af:function(a){var u=this.f
if(u!=null)u.B(a)},
dN:function(){return this.af(null)},
W:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ak(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bf(k)
r=$.k8
if(r==null){r=V.ka()
q=V.jx()
p=$.kq
r=V.k4(r,q,p==null?$.kq=new V.y(0,0,-1):p)
$.k8=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aJ(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bf(u)},
aI:function(a){a.cy.au()
a.db.au()}}
X.hA.prototype={}
V.cn.prototype={
b3:function(a){this.b=new P.f7(C.G)
this.c=null
this.d=H.b([],[[P.ai,W.ab]])},
I:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ab]))
u=a.split("\n")
for(l=u.length,t=[W.ab],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.dX(q,0,q.length)
n=o==null?q:o
C.E.dq(p,H.jL(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gbb(m.d).push(p)}},
dd:function(a,b){var u,t,s,r,q=this
q.d=H.b([],[[P.ai,W.ab]])
u=C.a.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.b9():t).dj(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)q.be(t[r])}}
V.j8.prototype={
$1:function(a){var u=C.c.di(this.a.gfV(),2)
if(u!=="0.00")P.jK(u+" fps")}}
V.eI.prototype={
be:function(a){var u=this
switch(a.a){case"Class":u.I(a.b,"#551")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break
case"Type":u.I(a.b,"#B11")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.hK()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.n(new H.l("_"))
u.a.push(t)
t=T.J("a","z")
u.a.push(t)
t=T.J("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.n(new H.l("_"))
t.a.push(u)
u=T.J("0","9")
t.a.push(u)
u=T.J("a","z")
t.a.push(u)
u=T.J("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.J("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.J("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.n(new H.l("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.J("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.J("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.n(new H.l(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.n(new H.l(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.n(new H.l('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.n(new H.l('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.n(new H.l("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.n(new H.l('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.ap())
t=a1.j(0,r).k(0,h)
u=T.n(new H.l("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.n(new H.l("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.n(new H.l("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.n(new H.l("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.ap())
t=a1.j(0,r).k(0,e)
u=T.n(new H.l("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.n(new H.l("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.n(new H.l("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.Y()
s=[T.aS]
t.a=H.b([],s)
u.a.push(t)
u=T.n(new H.l("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.n(new H.l("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.n(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.Y()
t.a=H.b([],s)
u.a.push(t)
u=T.n(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.n(new H.l("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.n(new H.l(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.n(new H.l(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.K("Num")
t=a1.j(0,n)
t.d=t.a.K("Num")
t=a1.j(0,m)
t.d=t.a.K("Symbol")
t=a1.j(0,j)
t.d=t.a.K("String")
t=a1.j(0,g)
t.d=t.a.K("String")
t=a1.j(0,c)
t.d=t.a.K(d)
t=a1.j(0,a0)
t.d=t.a.K(a0)
t=a1.j(0,q)
t=t.d=t.a.K(q)
u=[P.q]
t.av(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.av(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.av(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.f4.prototype={
be:function(a){var u=this
switch(a.a){case"Builtin":u.I(a.b,"#411")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Preprocess":u.I(a.b,"#737")
break
case"Reserved":u.I(a.b,"#119")
break
case"Symbol":u.I(a.b,"#611")
break
case"Type":u.I(a.b,"#171")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.hK()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.n(new H.l("_"))
u.a.push(t)
t=T.J("a","z")
u.a.push(t)
t=T.J("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.n(new H.l("_"))
t.a.push(u)
u=T.J("0","9")
t.a.push(u)
u=T.J("a","z")
t.a.push(u)
u=T.J("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.J("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.J("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.n(new H.l("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.J("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.J("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.n(new H.l(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.n(new H.l(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.n(new H.l("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.n(new H.l("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.ap())
t=e.j(0,j).k(0,i)
u=T.n(new H.l("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.Y()
s=[T.aS]
t.a=H.b([],s)
u.a.push(t)
u=T.n(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.n(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.Y()
u.a=H.b([],s)
t.a.push(u)
t=T.n(new H.l("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.n(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.n(new H.l(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.n(new H.l(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.K("Num")
u=e.j(0,n)
u.d=u.a.K("Num")
u=e.j(0,m)
u.d=u.a.K("Symbol")
u=e.j(0,i)
u.d=u.a.K(j)
u=e.j(0,g)
u.d=u.a.K(h)
u=e.j(0,f)
u.d=u.a.K(f)
u=e.j(0,q)
u=u.d=u.a.K(q)
t=[P.q]
u.av(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.av(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.av(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.f5.prototype={
be:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.I(a.b,"#911")
u.I("=",t)
break
case"Id":u.I(a.b,t)
break
case"Other":u.I(a.b,t)
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break}},
b9:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.hK()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.n(new H.l("_"))
u.a.push(t)
t=T.J("a","z")
u.a.push(t)
t=T.J("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.n(new H.l("_"))
t.a.push(u)
u=T.J("0","9")
t.a.push(u)
u=T.J("a","z")
t.a.push(u)
u=T.J("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.n(new H.l("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.n(new H.l("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.n(new H.l("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.n(new H.l('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.n(new H.l('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.n(new H.l("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.n(new H.l('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.ap())
l.j(0,s).k(0,m).a.push(new T.ap())
u=l.j(0,m).k(0,m)
t=new T.Y()
t.a=H.b([],[T.aS])
u.a.push(t)
u=T.n(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.J("a","z")
t.a.push(u)
u=T.J("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.K("Symbol")
u=l.j(0,n)
u.d=u.a.K("String")
u=l.j(0,r)
t=u.a.K(r)
u.d=t
t.av(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.q]))
t=l.j(0,q)
t.d=t.a.K(q)
t=l.j(0,m)
t.d=t.a.K(m)
return l}}
V.h0.prototype={
dd:function(a,b){this.d=H.b([],[[P.ai,W.ab]])
this.I(C.a.k(b,"\n"),"#111")},
be:function(a){},
b9:function(){return}}
V.hj.prototype={
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
W.S(q,"scroll",new V.hl(o),!1)},
cJ:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fh()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dj(C.a.fY(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
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
if(H.mO(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.ky(C.q,n,C.h,!1)
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
dk:function(a){var u,t,s,r=new V.eI("dart")
r.b3("dart")
u=new V.f4("glsl")
u.b3("glsl")
t=new V.f5("html")
t.b3("html")
s=C.a.fU(H.b([r,u,t],[V.cn]),new V.hm(a))
if(s!=null)return s
r=new V.h0("plain")
r.b3("plain")
return r},
cI:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.x])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jD(s).bl(s,"+")){b0[t]=C.b.aj(s,1)
a6.push(1)
u=!0}else if(C.b.bl(s,"-")){b0[t]=C.b.aj(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dk(a8)
r.dd(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ky(C.q,a7,C.h,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jQ()
j.href="#"+n
j.textContent=a7
k.appendChild(j)
l.appendChild(k)
m.appendChild(l)
o.appendChild(m)
if(u)for(i=a9,h=i,t=0;g=r.d,t<g.length;++t){s=g[t]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className="codeLineNums codeLineLight"
d=q.createElement("td")
d.className=a4
if(t>=a6.length)return H.c(a6,t)
c=a6[t]
if(c===0){++h;++i
e.textContent=""+h
d.textContent=""+i}else if(c>0){f.className="codeTableRow codeLineLightGreen"
e.className="codeLineNums codeLineGreen codeLineCenter"
d.className="codeLineNums codeLineGreen";++i
e.textContent="+"
d.textContent=""+i}else if(c<0){f.className="codeTableRow codeLineLightRed"
e.className="codeLineNums codeLineRed"
d.className="codeLineNums codeLineRed codeLineCenter";++h
e.textContent=""+h
d.textContent="-"}b=q.createElement("td")
b.className=a5
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.o)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.o)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gO(s);a2.v();)d.appendChild(a2.gD(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fh:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.hK()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.n(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.Y()
r=[T.aS]
s.a=H.b([],r)
t.a.push(s)
t=T.n(new H.l("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.n(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.n(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.Y()
s.a=H.b([],r)
t.a.push(s)
t=T.n(new H.l("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.n(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.n(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.Y()
s.a=H.b([],r)
t.a.push(s)
t=T.n(new H.l("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.n(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.n(new H.l("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.n(new H.l("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.n(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.Y()
t.a=H.b([],r)
s.a.push(t)
s=T.n(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.n(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.Y()
t.a=H.b([],r)
s.a.push(t)
s=T.n(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.ap())
s=u.j(0,i).k(0,i)
t=new T.Y()
t.a=H.b([],r)
s.a.push(t)
s=T.n(new H.l("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.K(p)
s=u.j(0,n)
s.d=s.a.K(o)
s=u.j(0,"CodeEnd")
s.d=s.a.K(m)
s=u.j(0,j)
s.d=s.a.K("Link")
s=u.j(0,i)
s.d=s.a.K(i)
this.b=u}}
V.hl.prototype={
$1:function(a){P.kl(C.i,new V.hk(this.a))}}
V.hk.prototype={
$0:function(){var u=C.c.ac(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hm.prototype={
$1:function(a){return a.a===this.a}}
B.j6.prototype={
$1:function(a){var u=this.a.d,t=this.b,s=u.a,r=[P.q]
t.cI("Vertex Shader for Skybox","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
s=u.a
t.cI("Fragment Shader for Skybox","glsl",0,H.b((s==null?null:s.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dv=u.h
u=J.cD.prototype
u.dz=u.h
u=P.h.prototype
u.dw=u.bi
u=W.P.prototype
u.bm=u.a9
u=W.dU.prototype
u.dA=u.ah
u=T.cz.prototype
u.du=u.as
u.cd=u.h
u=O.cN.prototype
u.ce=u.am
u=O.aj.prototype
u.cf=u.am})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mm","lK",6)
u(P,"mn","lL",6)
u(P,"mo","lM",6)
t(P,"kD","mk",9)
s(W,"mB",4,null,["$4"],["lN"],16,0)
s(W,"mC",4,null,["$4"],["lO"],16,0)
var m
r(m=E.as.prototype,"gda",0,0,null,["$1","$0"],["dc","h6"],0,0)
r(m,"gd8",0,0,null,["$1","$0"],["d9","h3"],0,0)
q(m,"gh1","h2",3)
q(m,"gh4","h5",3)
r(m=E.da.prototype,"gcj",0,0,null,["$1","$0"],["cl","ck"],0,0)
p(m,"ghj","dg",9)
o(m=X.dj.prototype,"geu","ev",4)
o(m,"geh","ei",4)
o(m,"gen","eo",2)
o(m,"gey","ez",10)
o(m,"gew","ex",10)
o(m,"geC","eD",2)
o(m,"geG","eH",2)
o(m,"ger","es",2)
o(m,"geE","eF",2)
o(m,"gep","eq",2)
o(m,"geI","eJ",18)
o(m,"geK","eL",4)
o(m,"gf_","f0",5)
o(m,"geW","eX",5)
o(m,"geY","eZ",5)
r(D.bh.prototype,"gdH",0,0,null,["$1","$0"],["ak","dI"],0,0)
r(m=D.cF.prototype,"gcv",0,0,null,["$1","$0"],["cw","eA"],0,0)
o(m,"geM","eN",19)
q(m,"geb","ec",11)
q(m,"geQ","eR",11)
n(V.B.prototype,"gl","bX",12)
n(V.y.prototype,"gl","bX",12)
r(m=U.bH.prototype,"gaE",0,0,null,["$1","$0"],["L","a_"],0,0)
q(m,"ge9","ea",13)
q(m,"geO","eP",13)
r(m=U.dk.prototype,"gaE",0,0,null,["$1","$0"],["L","a_"],0,0)
o(m,"gby","bz",1)
o(m,"gbA","bB",1)
o(m,"gbC","bD",1)
r(m=U.dl.prototype,"gaE",0,0,null,["$1","$0"],["L","a_"],0,0)
o(m,"gby","bz",1)
o(m,"gbA","bB",1)
o(m,"gbC","bD",1)
o(m,"ge2","e3",1)
o(m,"ge4","e5",1)
o(m,"gfo","fp",1)
o(m,"gfm","fn",1)
o(m,"gfk","fl",1)
o(U.dm.prototype,"ge7","e8",1)
r(m=M.co.prototype,"gU",0,0,null,["$1","$0"],["V","aM"],0,0)
q(m,"geS","eT",14)
q(m,"geU","eV",14)
r(M.cq.prototype,"gU",0,0,null,["$1","$0"],["V","aM"],0,0)
r(m=M.cv.prototype,"gU",0,0,null,["$1","$0"],["V","aM"],0,0)
q(m,"gej","ek",3)
q(m,"gel","em",3)
r(m=O.cM.prototype,"gbn",0,0,null,["$1","$0"],["X","bo"],0,0)
r(m,"gf7",0,0,null,["$1","$0"],["cA","f8"],0,0)
q(m,"ged","ee",15)
q(m,"gef","eg",15)
r(O.d1.prototype,"gbn",0,0,null,["$1","$0"],["X","bo"],0,0)
r(X.cV.prototype,"gdM",0,0,null,["$1","$0"],["af","dN"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.jr,J.a,J.X,P.dH,P.h,H.bM,P.fc,H.cx,H.i0,H.hP,P.bi,H.bE,H.dZ,P.at,H.fj,H.fk,H.fe,P.e4,P.dq,P.d6,P.hw,P.db,P.iU,P.iI,P.iC,P.dG,P.p,P.ez,P.f8,P.iS,P.ao,P.a5,P.a9,P.aI,P.fZ,P.d4,P.dy,P.f1,P.f3,P.ai,P.cL,P.aU,P.q,P.ay,W.eE,W.c4,W.G,W.cT,W.dU,W.iN,W.cy,W.aw,W.iH,W.ea,P.e9,P.iD,T.ap,T.cz,T.aS,T.h5,T.he,R.d5,R.dc,R.dd,R.hJ,O.aq,O.bN,E.ev,E.as,E.h6,E.da,Z.dn,Z.dp,Z.bD,Z.bK,Z.b4,D.ey,D.bj,D.Q,X.cm,X.cE,X.fg,X.fn,X.a6,X.fM,X.hL,X.dj,D.bh,D.a0,D.h2,D.hr,V.O,V.a3,V.eS,V.cO,V.au,V.V,V.R,V.aW,V.cZ,V.B,V.y,U.dk,U.dl,U.dm,M.cq,M.cv,M.ac,A.cj,A.eq,A.T,A.cs,A.cX,A.d3,A.fw,A.bY,A.c_,A.c0,A.dg,A.hX,F.aJ,F.eV,F.cG,F.fi,F.cW,F.hf,F.hg,F.hh,F.hi,F.b3,F.i9,F.ia,F.id,F.ig,F.ih,F.ii,O.d8,O.cN,O.fx,T.hF,X.jg,X.hA,X.f9,X.cV,V.cn,V.hj])
s(J.a,[J.fd,J.cC,J.cD,J.aP,J.bL,J.aQ,H.bQ,W.d,W.en,W.ck,W.ah,W.F,W.ds,W.a4,W.eJ,W.eK,W.du,W.cu,W.dw,W.eM,W.i,W.dz,W.aL,W.f6,W.dC,W.aM,W.fm,W.fG,W.dI,W.dJ,W.aT,W.dK,W.dN,W.aV,W.dR,W.dT,W.aY,W.dV,W.aZ,W.e_,W.az,W.e2,W.hI,W.b0,W.e5,W.hN,W.i2,W.eb,W.ed,W.ef,W.eh,W.ej,P.bl,P.dE,P.bn,P.dP,P.h4,P.e0,P.br,P.e7,P.er,P.dr,P.d_,P.dX])
s(J.cD,[J.h_,J.bt,J.aR])
t(J.jq,J.aP)
s(J.bL,[J.cB,J.cA])
t(P.fl,P.dH)
s(P.fl,[H.di,W.it,W.W,P.eY])
t(H.l,H.di)
s(P.h,[H.eP,H.fq,H.c2])
s(H.eP,[H.cJ,H.cH])
s(P.fc,[H.fr,H.im])
t(H.fs,H.cJ)
s(P.bi,[H.fW,H.ff,H.i_,H.ex,H.hc,P.cU,P.aa,P.i1,P.hZ,P.bV,P.eB,P.eH])
s(H.bE,[H.jc,H.hB,H.j2,H.j3,H.j4,P.ip,P.io,P.iq,P.ir,P.iR,P.iQ,P.iX,P.iF,P.iG,P.fp,P.eN,P.eO,W.eQ,W.fI,W.fK,W.hb,W.hv,W.ix,W.fU,W.fT,W.iJ,W.iK,W.iP,W.iT,P.iY,P.eZ,P.f_,P.et,E.h7,E.h8,E.h9,E.hH,D.eT,D.eU,F.jb,F.iZ,F.ik,F.ij,F.ib,F.ic,O.fA,O.fB,O.fC,O.fD,O.fE,O.fF,T.hG,V.j8,V.hl,V.hk,V.hm,B.j6])
s(H.hB,[H.ht,H.bB])
t(P.fo,P.at)
s(P.fo,[H.L,W.is])
t(H.cP,H.bQ)
s(H.cP,[H.c5,H.c7])
t(H.c6,H.c5)
t(H.bP,H.c6)
t(H.c8,H.c7)
t(H.cQ,H.c8)
s(H.cQ,[H.fN,H.fO,H.fP,H.fQ,H.fR,H.cR,H.fS])
t(P.iE,P.iU)
t(P.iB,P.iI)
t(P.eC,P.hw)
t(P.eR,P.ez)
s(P.eC,[P.f7,P.i4])
t(P.i3,P.eR)
s(P.a9,[P.K,P.x])
s(P.aa,[P.bp,P.fa])
s(W.d,[W.I,W.eX,W.aX,W.c9,W.b_,W.aA,W.cb,W.il,W.c3,P.eu,P.be])
s(W.I,[W.P,W.aG])
s(W.P,[W.k,P.j])
s(W.k,[W.eo,W.ep,W.bf,W.bg,W.ab,W.f0,W.bJ,W.hd,W.d7,W.hy,W.hz,W.bW])
t(W.eD,W.ah)
t(W.bF,W.ds)
s(W.a4,[W.eF,W.eG])
t(W.dv,W.du)
t(W.ct,W.dv)
t(W.dx,W.dw)
t(W.eL,W.dx)
t(W.aK,W.ck)
t(W.dA,W.dz)
t(W.eW,W.dA)
t(W.dD,W.dC)
t(W.bI,W.dD)
t(W.b1,W.i)
s(W.b1,[W.bk,W.al,W.bq])
t(W.fH,W.dI)
t(W.fJ,W.dJ)
t(W.dL,W.dK)
t(W.fL,W.dL)
t(W.dO,W.dN)
t(W.cS,W.dO)
t(W.dS,W.dR)
t(W.h1,W.dS)
t(W.ha,W.dT)
t(W.ca,W.c9)
t(W.hp,W.ca)
t(W.dW,W.dV)
t(W.hq,W.dW)
t(W.hu,W.e_)
t(W.e3,W.e2)
t(W.hC,W.e3)
t(W.cc,W.cb)
t(W.hD,W.cc)
t(W.e6,W.e5)
t(W.hM,W.e6)
t(W.b5,W.al)
t(W.ec,W.eb)
t(W.iu,W.ec)
t(W.dt,W.cu)
t(W.ee,W.ed)
t(W.iy,W.ee)
t(W.eg,W.ef)
t(W.dM,W.eg)
t(W.ei,W.eh)
t(W.iL,W.ei)
t(W.ek,W.ej)
t(W.iM,W.ek)
t(W.iv,W.is)
t(W.iw,P.d6)
t(W.iO,W.dU)
t(P.a7,P.iD)
t(P.dF,P.dE)
t(P.fh,P.dF)
t(P.dQ,P.dP)
t(P.fX,P.dQ)
t(P.bU,P.j)
t(P.e1,P.e0)
t(P.hx,P.e1)
t(P.e8,P.e7)
t(P.hO,P.e8)
t(P.es,P.dr)
t(P.fY,P.be)
t(P.dY,P.dX)
t(P.hs,P.dY)
s(T.cz,[T.Y,R.df])
s(E.ev,[Z.cl,A.d0,T.d9])
s(D.Q,[D.aN,D.aO,D.w,X.h3])
s(X.h3,[X.cK,X.av,X.bO,X.de])
s(O.aq,[D.cF,U.bH,M.co])
s(D.ey,[U.eA,U.a1])
t(U.cp,U.a1)
s(A.d0,[A.ft,A.ho])
s(A.dg,[A.dh,A.hU,A.hV,A.hW,A.hS,A.M,A.hT,A.D,A.bX,A.hY,A.bZ,A.a2,A.bs,A.b2])
t(F.hn,F.eV)
t(F.hR,F.fi)
t(F.ie,F.ig)
t(F.fV,F.ih)
s(O.d8,[O.cM,O.d1])
s(O.cN,[O.fu,O.fv,O.aj])
s(O.aj,[O.fy,O.fz])
t(T.hE,T.d9)
t(X.f2,X.hA)
s(V.cn,[V.eI,V.f4,V.f5,V.h0])
u(H.di,H.i0)
u(H.c5,P.p)
u(H.c6,H.cx)
u(H.c7,P.p)
u(H.c8,H.cx)
u(P.dH,P.p)
u(W.ds,W.eE)
u(W.du,P.p)
u(W.dv,W.G)
u(W.dw,P.p)
u(W.dx,W.G)
u(W.dz,P.p)
u(W.dA,W.G)
u(W.dC,P.p)
u(W.dD,W.G)
u(W.dI,P.at)
u(W.dJ,P.at)
u(W.dK,P.p)
u(W.dL,W.G)
u(W.dN,P.p)
u(W.dO,W.G)
u(W.dR,P.p)
u(W.dS,W.G)
u(W.dT,P.at)
u(W.c9,P.p)
u(W.ca,W.G)
u(W.dV,P.p)
u(W.dW,W.G)
u(W.e_,P.at)
u(W.e2,P.p)
u(W.e3,W.G)
u(W.cb,P.p)
u(W.cc,W.G)
u(W.e5,P.p)
u(W.e6,W.G)
u(W.eb,P.p)
u(W.ec,W.G)
u(W.ed,P.p)
u(W.ee,W.G)
u(W.ef,P.p)
u(W.eg,W.G)
u(W.eh,P.p)
u(W.ei,W.G)
u(W.ej,P.p)
u(W.ek,W.G)
u(P.dE,P.p)
u(P.dF,W.G)
u(P.dP,P.p)
u(P.dQ,W.G)
u(P.e0,P.p)
u(P.e1,W.G)
u(P.e7,P.p)
u(P.e8,W.G)
u(P.dr,P.at)
u(P.dX,P.p)
u(P.dY,W.G)})()
var v={mangledGlobalNames:{x:"int",K:"double",a9:"num",q:"String",ao:"bool",aU:"Null",ai:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Q]},{func:1,ret:-1,args:[D.Q]},{func:1,ret:-1,args:[W.al]},{func:1,ret:-1,args:[P.x,[P.h,E.as]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aU,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[P.x,[P.h,D.a0]]},{func:1,ret:P.K},{func:1,ret:-1,args:[P.x,[P.h,U.a1]]},{func:1,ret:-1,args:[P.x,[P.h,M.ac]]},{func:1,ret:-1,args:[P.x,[P.h,V.au]]},{func:1,ret:P.ao,args:[W.P,P.q,P.q,W.c4]},{func:1,ret:P.aU,args:[,]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:P.ao,args:[[P.h,D.a0]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bf.prototype
C.f=W.bg.prototype
C.E=W.ab.prototype
C.H=J.a.prototype
C.a=J.aP.prototype
C.I=J.cA.prototype
C.d=J.cB.prototype
C.j=J.cC.prototype
C.c=J.bL.prototype
C.b=J.aQ.prototype
C.J=J.aR.prototype
C.r=J.h_.prototype
C.N=P.d_.prototype
C.t=W.d7.prototype
C.m=J.bt.prototype
C.u=W.b5.prototype
C.v=W.c3.prototype
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=function() {
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.C=new P.fZ()
C.h=new P.i3()
C.D=new P.i4()
C.e=new P.iE()
C.i=new P.aI(0)
C.F=new P.aI(5e6)
C.G=new P.f8("element",!1,!1,!1)
C.K=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.L=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.q])
C.M=H.b(u([]),[P.q])
C.q=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.k=H.b(u(["bind","if","ref","repeat","syntax"]),[P.q])
C.l=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])})();(function staticFields(){$.ag=0
$.bC=null
$.jS=null
$.kG=null
$.kC=null
$.kJ=null
$.j_=null
$.j5=null
$.jH=null
$.bu=null
$.ce=null
$.cf=null
$.jz=!1
$.ad=C.e
$.a_=[]
$.ar=null
$.jl=null
$.jY=null
$.jX=null
$.dB=P.k0(P.q,P.f3)
$.k5=null
$.k9=null
$.bR=null
$.kg=null
$.kp=null
$.ks=null
$.kr=null
$.i5=null
$.i6=null
$.i7=null
$.kq=null
$.k8=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mX","kN",function(){return H.kF("_$dart_dartClosure")})
u($,"mY","jM",function(){return H.kF("_$dart_js")})
u($,"mZ","kO",function(){return H.an(H.hQ({
toString:function(){return"$receiver$"}}))})
u($,"n_","kP",function(){return H.an(H.hQ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n0","kQ",function(){return H.an(H.hQ(null))})
u($,"n1","kR",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n4","kU",function(){return H.an(H.hQ(void 0))})
u($,"n5","kV",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n3","kT",function(){return H.an(H.kn(null))})
u($,"n2","kS",function(){return H.an(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n7","kX",function(){return H.an(H.kn(void 0))})
u($,"n6","kW",function(){return H.an(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nk","jN",function(){return P.lJ()})
u($,"nm","l1",function(){return P.lz("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nl","l0",function(){return P.k1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.q)})
u($,"ne","l_",function(){return Z.a8(0)})
u($,"n8","kY",function(){return Z.a8(511)})
u($,"ng","ae",function(){return Z.a8(1)})
u($,"nf","aF",function(){return Z.a8(2)})
u($,"na","aE",function(){return Z.a8(4)})
u($,"nh","b9",function(){return Z.a8(8)})
u($,"ni","ba",function(){return Z.a8(16)})
u($,"nb","ch",function(){return Z.a8(32)})
u($,"nc","ci",function(){return Z.a8(64)})
u($,"nd","kZ",function(){return Z.a8(96)})
u($,"nj","bA",function(){return Z.a8(128)})
u($,"n9","aD",function(){return Z.a8(256)})
u($,"mW","kM",function(){return new V.eS(1e-9)})
u($,"mV","z",function(){return $.kM()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bQ,ArrayBufferView:H.bQ,Float32Array:H.bP,Float64Array:H.bP,Int16Array:H.fN,Int32Array:H.fO,Int8Array:H.fP,Uint16Array:H.fQ,Uint32Array:H.fR,Uint8ClampedArray:H.cR,CanvasPixelArray:H.cR,Uint8Array:H.fS,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.en,HTMLAnchorElement:W.eo,HTMLAreaElement:W.ep,Blob:W.ck,HTMLBodyElement:W.bf,HTMLCanvasElement:W.bg,CDATASection:W.aG,CharacterData:W.aG,Comment:W.aG,ProcessingInstruction:W.aG,Text:W.aG,CSSPerspective:W.eD,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bF,MSStyleCSSProperties:W.bF,CSS2Properties:W.bF,CSSImageValue:W.a4,CSSKeywordValue:W.a4,CSSNumericValue:W.a4,CSSPositionValue:W.a4,CSSResourceValue:W.a4,CSSUnitValue:W.a4,CSSURLImageValue:W.a4,CSSStyleValue:W.a4,CSSMatrixComponent:W.ah,CSSRotation:W.ah,CSSScale:W.ah,CSSSkew:W.ah,CSSTranslation:W.ah,CSSTransformComponent:W.ah,CSSTransformValue:W.eF,CSSUnparsedValue:W.eG,DataTransferItemList:W.eJ,HTMLDivElement:W.ab,DOMException:W.eK,ClientRectList:W.ct,DOMRectList:W.ct,DOMRectReadOnly:W.cu,DOMStringList:W.eL,DOMTokenList:W.eM,Element:W.P,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aK,FileList:W.eW,FileWriter:W.eX,HTMLFormElement:W.f0,Gamepad:W.aL,History:W.f6,HTMLCollection:W.bI,HTMLFormControlsCollection:W.bI,HTMLOptionsCollection:W.bI,ImageData:W.aM,HTMLImageElement:W.bJ,KeyboardEvent:W.bk,Location:W.fm,MediaList:W.fG,MIDIInputMap:W.fH,MIDIOutputMap:W.fJ,MimeType:W.aT,MimeTypeArray:W.fL,PointerEvent:W.al,MouseEvent:W.al,DragEvent:W.al,Document:W.I,DocumentFragment:W.I,HTMLDocument:W.I,ShadowRoot:W.I,XMLDocument:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.cS,RadioNodeList:W.cS,Plugin:W.aV,PluginArray:W.h1,RTCStatsReport:W.ha,HTMLSelectElement:W.hd,SourceBuffer:W.aX,SourceBufferList:W.hp,SpeechGrammar:W.aY,SpeechGrammarList:W.hq,SpeechRecognitionResult:W.aZ,Storage:W.hu,CSSStyleSheet:W.az,StyleSheet:W.az,HTMLTableElement:W.d7,HTMLTableRowElement:W.hy,HTMLTableSectionElement:W.hz,HTMLTemplateElement:W.bW,TextTrack:W.b_,TextTrackCue:W.aA,VTTCue:W.aA,TextTrackCueList:W.hC,TextTrackList:W.hD,TimeRanges:W.hI,Touch:W.b0,TouchEvent:W.bq,TouchList:W.hM,TrackDefaultList:W.hN,CompositionEvent:W.b1,FocusEvent:W.b1,TextEvent:W.b1,UIEvent:W.b1,URL:W.i2,VideoTrackList:W.il,WheelEvent:W.b5,Window:W.c3,DOMWindow:W.c3,CSSRuleList:W.iu,ClientRect:W.dt,DOMRect:W.dt,GamepadList:W.iy,NamedNodeMap:W.dM,MozNamedAttrMap:W.dM,SpeechRecognitionResultList:W.iL,StyleSheetList:W.iM,SVGLength:P.bl,SVGLengthList:P.fh,SVGNumber:P.bn,SVGNumberList:P.fX,SVGPointList:P.h4,SVGScriptElement:P.bU,SVGStringList:P.hx,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.br,SVGTransformList:P.hO,AudioBuffer:P.er,AudioParamMap:P.es,AudioTrackList:P.eu,AudioContext:P.be,webkitAudioContext:P.be,BaseAudioContext:P.be,OfflineAudioContext:P.fY,WebGL2RenderingContext:P.d_,SQLResultSetRowList:P.hs})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
W.c9.$nativeSuperclassTag="EventTarget"
W.ca.$nativeSuperclassTag="EventTarget"
W.cb.$nativeSuperclassTag="EventTarget"
W.cc.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.kH,[])
else B.kH([])})})()
//# sourceMappingURL=test.dart.js.map
