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
a[c]=function(){a[c]=function(){H.nx(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kc(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jX:function jX(){},
fE:function(){return new P.cA("No element")},
m1:function(){return new P.cA("Too many elements")},
dF:function(a,b,c,d,e){if(c-b<=32)H.mm(a,b,c,d,e)
else H.ml(a,b,c,d,e)},
mm:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.V()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
ml:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.a_(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.a_(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.d(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.d(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.d(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.d(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.d(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=q
q=r
r=p}C.a.n(a2,d,u)
C.a.n(a2,b,s)
C.a.n(a2,c,q)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.n(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.n(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.T(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a4()
if(k<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.V()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.d(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.a4()
if(g<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.V()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.V()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a4()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.d(a2,a1)
C.a.n(a2,a3,a2[a1])
C.a.n(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.d(a2,a1)
C.a.n(a2,a4,a2[a1])
C.a.n(a2,a1,r)
H.dF(a2,a3,o-2,a5,a6)
H.dF(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.d(a2,o)
if(!J.T(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.d(a2,n)
if(!J.T(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a4()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}H.dF(a2,o,n,a5,a6)}else H.dF(a2,o,n,a5,a6)},
p:function p(a){this.a=a},
fi:function fi(){},
bN:function bN(){},
cn:function cn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fS:function fS(a,b,c){this.a=a
this.b=b
this.$ti=c},
fT:function fT(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fU:function fU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
iK:function iK(a,b,c){this.a=a
this.b=b
this.$ti=c},
bJ:function bJ(){},
dR:function dR(){},
dQ:function dQ(){},
c8:function(a){var u,t=H.nz(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
ne:function(a){return v.types[H.ab(a)]},
nl:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iI},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aI(a)
if(typeof u!=="string")throw H.j(H.c2(a))
return u},
cv:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cw:function(a){return H.m8(a)+H.k8(H.bA(a),0,null)},
m8:function(a){var u,t,s,r,q,p,o,n=J.Z(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibZ){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c8(t.length>1&&C.c.aD(t,0)===36?C.c.aj(t,1):t)},
kL:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mg:function(a){var u,t,s,r=H.c([],[P.t])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.j(H.c2(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.b2(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.j(H.c2(s))}return H.kL(r)},
kM:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.j(H.c2(s))
if(s<0)throw H.j(H.c2(s))
if(s>65535)return H.mg(a)}return H.kL(a)},
jZ:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.b2(u,10))>>>0,56320|u&1023)}throw H.j(P.aW(a,0,1114111,null,null))},
bP:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mf:function(a){var u=H.bP(a).getFullYear()+0
return u},
md:function(a){var u=H.bP(a).getMonth()+1
return u},
m9:function(a){var u=H.bP(a).getDate()+0
return u},
ma:function(a){var u=H.bP(a).getHours()+0
return u},
mc:function(a){var u=H.bP(a).getMinutes()+0
return u},
me:function(a){var u=H.bP(a).getSeconds()+0
return u},
mb:function(a){var u=H.bP(a).getMilliseconds()+0
return u},
F:function(a){throw H.j(H.c2(a))},
d:function(a,b){if(a==null)J.bF(a)
throw H.j(H.c4(a,b))},
c4:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,s,null)
u=H.ab(J.bF(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.V(b,a,s,null,u)
return P.dB(b,s)},
na:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bQ(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bQ(a,c,!0,b,"end",u)
return new P.aJ(!0,b,"end",null)},
c2:function(a){return new P.aJ(!0,a,null,null)},
j:function(a){var u
if(a==null)a=new P.dx()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lt})
u.name=""}else u.toString=H.lt
return u},
lt:function(){return J.aI(this.dartException)},
A:function(a){throw H.j(a)},
x:function(a){throw H.j(P.bm(a))},
b2:function(a){var u,t,s,r,q,p
a=H.ls(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ib(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ic:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kX:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kG:function(a,b){return new H.hn(a,b==null?null:b.method)},
jY:function(a,b){var u=b==null,t=u?null:b.method
return new H.fI(a,t,u?null:b.receiver)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jM(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.b2(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jY(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kG(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lw()
q=$.lx()
p=$.ly()
o=$.lz()
n=$.lC()
m=$.lD()
l=$.lB()
$.lA()
k=$.lF()
j=$.lE()
i=r.a7(u)
if(i!=null)return f.$1(H.jY(H.O(u),i))
else{i=q.a7(u)
if(i!=null){i.method="call"
return f.$1(H.jY(H.O(u),i))}else{i=p.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=n.a7(u)
if(i==null){i=m.a7(u)
if(i==null){i=l.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=k.a7(u)
if(i==null){i=j.a7(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kG(H.O(u),i))}}return f.$1(new H.ip(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dH()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aJ(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dH()
return a},
c6:function(a){var u
if(a==null)return new H.ev(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ev(a)},
nd:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
nk:function(a,b,c,d,e,f){H.k(a,"$ibq")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.z("Unsupported number of arguments for wrapped closure"))},
c3:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nk)
a.$identity=u
return u},
lV:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hR().constructor.prototype):Object.create(new H.cb(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aK
if(typeof t!=="number")return t.C()
$.aK=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kt(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lR(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kt(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lR:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ne,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kr:H.jQ
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.j("Error in functionType of tearoff")},
lS:function(a,b,c,d){var u=H.jQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kt:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lU(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lS(t,!r,u,b)
if(t===0){r=$.aK
if(typeof r!=="number")return r.C()
$.aK=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cc
return new Function(r+H.f(q==null?$.cc=H.f1("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aK
if(typeof r!=="number")return r.C()
$.aK=r+1
o+=r
r="return function("+o+"){return this."
q=$.cc
return new Function(r+H.f(q==null?$.cc=H.f1("self"):q)+"."+H.f(u)+"("+o+");}")()},
lT:function(a,b,c,d){var u=H.jQ,t=H.kr
switch(b?-1:a){case 0:throw H.j(H.mj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lU:function(a,b){var u,t,s,r,q,p,o,n=$.cc
if(n==null)n=$.cc=H.f1("self")
u=$.kq
if(u==null)u=$.kq=H.f1("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lT(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.aK
if(typeof u!=="number")return u.C()
$.aK=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.aK
if(typeof u!=="number")return u.C()
$.aK=u+1
return new Function(n+u+"}")()},
kc:function(a,b,c,d,e,f,g){return H.lV(a,b,c,d,!!e,!!f,g)},
jQ:function(a){return a.a},
kr:function(a){return a.c},
f1:function(a){var u,t,s,r=new H.cb("self","target","receiver","name"),q=J.jV(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.n4("boolean expression must not be null")
return a},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.b3(a,"String"))},
oe:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.b3(a,"double"))},
lo:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.b3(a,"num"))},
k9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.b3(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.b3(a,"int"))},
lq:function(a,b){throw H.j(H.b3(a,H.c8(H.O(b).substring(2))))},
nr:function(a,b){throw H.j(H.lQ(a,H.c8(H.O(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.lq(a,b)},
v:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Z(a)[b]
else u=!0
if(u)return a
H.nr(a,b)},
nm:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ib)return a
if(u[b])return a
H.lq(a,b)},
li:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ab(u)]
else return a.$S()}return},
eR:function(a,b){var u
if(typeof a=="function")return!0
u=H.li(J.Z(a))
if(u==null)return!1
return H.l9(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.k5)return a
$.k5=!0
try{if(H.eR(a,b))return a
u=H.jI(b)
t=H.b3(a,u)
throw H.j(t)}finally{$.k5=!1}},
kd:function(a,b){if(a!=null&&!H.kb(a,b))H.A(H.b3(a,H.jI(b)))
return a},
b3:function(a,b){return new H.id("TypeError: "+P.dc(a)+": type '"+H.f(H.ld(a))+"' is not a subtype of type '"+b+"'")},
lQ:function(a,b){return new H.f2("CastError: "+P.dc(a)+": type '"+H.f(H.ld(a))+"' is not a subtype of type '"+b+"'")},
ld:function(a){var u,t=J.Z(a)
if(!!t.$icd){u=H.li(t)
if(u!=null)return H.jI(u)
return"Closure"}return H.cw(a)},
n4:function(a){throw H.j(new H.iL(a))},
nx:function(a){throw H.j(new P.fa(a))},
mj:function(a){return new H.hD(a)},
lk:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bA:function(a){if(a==null)return
return a.$ti},
of:function(a,b,c){return H.c7(a["$a"+H.f(c)],H.bA(b))},
cX:function(a,b,c,d){var u=H.c7(a["$a"+H.f(c)],H.bA(b))
return u==null?null:u[d]},
an:function(a,b,c){var u=H.c7(a["$a"+H.f(b)],H.bA(a))
return u==null?null:u[c]},
w:function(a,b){var u=H.bA(a)
return u==null?null:u[b]},
jI:function(a){return H.bz(a,null)},
bz:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c8(a[0].name)+H.k8(a,1,b)
if(typeof a=="function")return H.c8(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.f(b[t])}if('func' in a)return H.mE(a,b)
if('futureOr' in a)return"FutureOr<"+H.bz("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mE:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.c.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.L)p+=" extends "+H.bz(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bz(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bz(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bz(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nc(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.O(n[g])
i=i+h+H.bz(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
k8:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bb("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bz(p,c)}return"<"+u.i(0)+">"},
c7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ka:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bA(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.lg(H.c7(t[d],u),null,c,null)},
n:function(a,b,c,d){if(a==null)return a
if(H.ka(a,b,c,d))return a
throw H.j(H.b3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c8(b.substring(2))+H.k8(c,0,null),v.mangledGlobalNames)))},
lg:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
oc:function(a,b,c){return a.apply(b,H.c7(J.Z(b)["$a"+H.f(c)],H.bA(b)))},
lm:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="J"||a===-1||a===-2||H.lm(u)}return!1},
kb:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="J"||b===-1||b===-2||H.lm(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kb(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eR(a,b)}u=J.Z(a).constructor
t=H.bA(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
H:function(a,b){if(a!=null&&!H.kb(a,b))throw H.j(H.b3(a,H.jI(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aA("type" in a?a.type:l,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"cj" in t.prototype))return!1
r=t.prototype["$a"+"cj"]
q=H.c7(r,u?a.slice(1):l)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.l9(a,b,c,d)
if('func' in a)return c.name==="bq"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lg(H.c7(m,u),b,p,d)},
l9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aA(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aA(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aA(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aA(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.np(h,b,g,d)},
np:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aA(c[s],d,a[s],b))return!1}return!0},
od:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nn:function(a){var u,t,s,r,q=H.O($.ll.$1(a)),p=$.jz[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jF[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.O($.lf.$2(a,q))
if(q!=null){p=$.jz[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jF[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jH(u)
$.jz[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jF[q]=u
return u}if(s==="-"){r=H.jH(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lp(a,u)
if(s==="*")throw H.j(P.kY(q))
if(v.leafTags[q]===true){r=H.jH(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lp(a,u)},
lp:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ki(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jH:function(a){return J.ki(a,!1,null,!!a.$iI)},
no:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jH(u)
else return J.ki(u,c,null,null)},
ni:function(){if(!0===$.kh)return
$.kh=!0
H.nj()},
nj:function(){var u,t,s,r,q,p,o,n
$.jz=Object.create(null)
$.jF=Object.create(null)
H.nh()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lr.$1(q)
if(p!=null){o=H.no(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nh:function(){var u,t,s,r,q,p,o=C.x()
o=H.c1(C.y,H.c1(C.z,H.c1(C.q,H.c1(C.q,H.c1(C.A,H.c1(C.B,H.c1(C.C(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ll=new H.jC(r)
$.lf=new H.jD(q)
$.lr=new H.jE(p)},
c1:function(a,b){return a(b)||b},
m3:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.j(new P.fw("Illegal RegExp pattern ("+String(p)+")",a))},
nu:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nb:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ls:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kk:function(a,b,c){var u=H.nv(a,b,c)
return u},
nv:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ls(b),'g'),H.nb(c))},
ib:function ib(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hn:function hn(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a){this.a=a},
jM:function jM(a){this.a=a},
ev:function ev(a){this.a=a
this.b=null},
cd:function cd(){},
i0:function i0(){},
hR:function hR(){},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a){this.a=a},
f2:function f2(a){this.a=a},
hD:function hD(a){this.a=a},
iL:function iL(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dj:function dj(a,b){this.a=a
this.$ti=b},
fN:function fN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function(a){return a},
by:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.c4(b,a))},
mD:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.j(H.na(a,b,c))
return b},
cs:function cs(){},
dt:function dt(){},
cr:function cr(){},
du:function du(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
dv:function dv(){},
hj:function hj(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
nc:function(a){return J.kz(a?Object.keys(a):[],null)},
nz:function(a){return v.mangledGlobalNames[a]},
nq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ki:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jB:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kh==null){H.ni()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.j(P.kY("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kl()]
if(r!=null)return r
r=H.nn(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.kl(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
m2:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.jP(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.aW(a,0,4294967295,"length",null))
return J.kz(new Array(a),b)},
kz:function(a,b){return J.jV(H.c(a,[b]))},
jV:function(a){a.fixed$length=Array
return a},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.fG.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.df.prototype
if(typeof a=="boolean")return J.fF.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.L)return a
return J.jB(a)},
ke:function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.L)return a
return J.jB(a)},
jA:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.L)return a
return J.jB(a)},
lj:function(a){if(typeof a=="number")return J.cm.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bZ.prototype
return a},
kf:function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bZ.prototype
return a},
kg:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.L)return a
return J.jB(a)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).p(a,b)},
kn:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lj(a).q(a,b)},
eS:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nl(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ke(a).j(a,b)},
lL:function(a,b,c,d){return J.kg(a).hf(a,b,c,d)},
jN:function(a,b){return J.lj(a).hr(a,b)},
jO:function(a,b){return J.jA(a).A(a,b)},
lM:function(a,b){return J.jA(a).H(a,b)},
lN:function(a){return J.kg(a).ghn(a)},
bD:function(a){return J.Z(a).gF(a)},
bE:function(a){return J.jA(a).gO(a)},
bF:function(a){return J.ke(a).gm(a)},
ko:function(a){return J.jA(a).i4(a)},
lO:function(a,b,c){return J.kf(a).aZ(a,b,c)},
lP:function(a){return J.kf(a).ih(a)},
aI:function(a){return J.Z(a).i(a)},
a:function a(){},
fF:function fF(){},
df:function df(){},
dg:function dg(){},
hr:function hr(){},
bZ:function bZ(){},
bs:function bs(){},
aQ:function aQ(a){this.$ti=a},
jW:function jW(a){this.$ti=a},
ao:function ao(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cm:function cm(){},
de:function de(){},
fG:function fG(){},
br:function br(){}},P={
ms:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.n5()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c3(new P.iN(s),1)).observe(u,{childList:true})
return new P.iM(s,u,t)}else if(self.setImmediate!=null)return P.n6()
return P.n7()},
mt:function(a){self.scheduleImmediate(H.c3(new P.iO(H.m(a,{func:1,ret:-1})),0))},
mu:function(a){self.setImmediate(H.c3(new P.iP(H.m(a,{func:1,ret:-1})),0))},
mv:function(a){P.k0(C.j,H.m(a,{func:1,ret:-1}))},
k0:function(a,b){var u=C.e.a_(a.a,1000)
return P.mB(u<0?0:u,b)},
kW:function(a,b){var u=C.e.a_(a.a,1000)
return P.mC(u<0?0:u,b)},
mB:function(a,b){var u=new P.eB()
u.e5(a,b)
return u},
mC:function(a,b){var u=new P.eB()
u.e6(a,b)
return u},
mw:function(a,b){var u,t,s
b.a=1
try{a.dw(new P.iY(b),new P.iZ(b),null)}catch(s){u=H.au(s)
t=H.c6(s)
P.ns(new P.j_(b,u,t))}},
l4:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaz")
if(u>=4){t=b.bF()
b.a=a.a
b.c=a.c
P.cL(b,t)}else{t=H.k(b.c,"$ib5")
b.a=2
b.c=a
a.cH(t)}},
cL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iad")
P.ju(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cL(h.a,b)}g=h.a
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
if(m){H.k(q,"$iad")
P.ju(i,i,g.b,q.a,q.b)
return}l=$.Y
if(l!==n)$.Y=n
else l=i
g=b.c
if((g&15)===8)new P.j3(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.j2(u,b,q).$0()}else if((g&2)!==0)new P.j1(h,u,b).$0()
if(l!=null)$.Y=l
g=u.b
if(!!J.Z(g).$icj){if(g.a>=4){k=H.k(o.c,"$ib5")
o.c=null
b=o.b1(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.l4(g,o)
return}}j=b.b
k=H.k(j.c,"$ib5")
j.c=null
b=j.b1(k)
g=u.a
p=u.b
if(!g){H.H(p,H.w(j,0))
j.a=4
j.c=p}else{H.k(p,"$iad")
j.a=8
j.c=p}h.a=j
g=j}},
n0:function(a,b){if(H.eR(a,{func:1,args:[P.L,P.al]}))return H.m(a,{func:1,ret:null,args:[P.L,P.al]})
if(H.eR(a,{func:1,args:[P.L]}))return H.m(a,{func:1,ret:null,args:[P.L]})
throw H.j(P.jP(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n_:function(){var u,t
for(;u=$.c0,u!=null;){$.cW=null
t=u.b
$.c0=t
if(t==null)$.cV=null
u.a.$0()}},
n3:function(){$.k6=!0
try{P.n_()}finally{$.cW=null
$.k6=!1
if($.c0!=null)$.km().$1(P.lh())}},
lc:function(a){var u=new P.dX(a)
if($.c0==null){$.c0=$.cV=u
if(!$.k6)$.km().$1(P.lh())}else $.cV=$.cV.b=u},
n2:function(a){var u,t,s=$.c0
if(s==null){P.lc(a)
$.cW=$.cV
return}u=new P.dX(a)
t=$.cW
if(t==null){u.b=s
$.c0=$.cW=u}else{u.b=t.b
$.cW=t.b=u
if(u.b==null)$.cV=u}},
ns:function(a){var u=null,t=$.Y
if(C.f===t){P.jw(u,u,C.f,a)
return}P.jw(u,u,t,H.m(t.bI(a),{func:1,ret:-1}))},
kV:function(a,b){var u=$.Y
if(u===C.f)return P.k0(a,H.m(b,{func:1,ret:-1}))
return P.k0(a,H.m(u.bI(b),{func:1,ret:-1}))},
mp:function(a,b){var u=$.Y
if(u===C.f)return P.kW(a,H.m(b,{func:1,ret:-1,args:[P.b0]}))
return P.kW(a,H.m(u.cU(b,P.b0),{func:1,ret:-1,args:[P.b0]}))},
ju:function(a,b,c,d,e){var u={}
u.a=d
P.n2(new P.jv(u,e))},
la:function(a,b,c,d,e){var u,t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
lb:function(a,b,c,d,e,f,g){var u,t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
n1:function(a,b,c,d,e,f,g,h,i){var u,t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
jw:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bI(d):c.ho(d,-1)
P.lc(d)},
iN:function iN(a){this.a=a},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
eB:function eB(){this.c=0},
jo:function jo(a,b){this.a=a
this.b=b},
jn:function jn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
az:function az(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iX:function iX(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a){this.a=a
this.b=null},
hU:function hU(){},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
cB:function cB(){},
hV:function hV(){},
b0:function b0(){},
ad:function ad(a,b){this.a=a
this.b=b},
jr:function jr(){},
jv:function jv(a,b){this.a=a
this.b=b},
ja:function ja(){},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function(a,b){return new H.a0([a,b])},
m4:function(a){return H.nd(a,new H.a0([null,null]))},
dk:function(a){return new P.j8([a])},
k4:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mA:function(a,b,c){var u=new P.ec(a,b,[c])
u.c=a.e
return u},
m0:function(a,b,c){var u,t
if(P.k7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
C.a.h($.am,a)
try{P.mF(a,u)}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}t=P.kT(b,H.nm(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
jU:function(a,b,c){var u,t
if(P.k7(a))return b+"..."+c
u=new P.bb(b)
C.a.h($.am,a)
try{t=u
t.a=P.kT(t.a,a,", ")}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k7:function(a){var u,t
for(u=$.am.length,t=0;t<u;++t)if(a===$.am[t])return!0
return!1},
mF:function(a,b){var u,t,s,r,q,p,o,n=a.gO(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.f(n.gE(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gE(n);++l
if(!n.u()){if(l<=4){C.a.h(b,H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gE(n);++l
for(;n.u();r=q,q=p){p=n.gE(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
kB:function(a,b){var u,t,s=P.dk(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t)s.h(0,H.H(a[t],b))
return s},
kD:function(a){var u,t={}
if(P.k7(a))return"{...}"
u=new P.bb("")
try{C.a.h($.am,a)
u.a+="{"
t.a=!0
J.lM(a,new P.fR(t,u))
u.a+="}"}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j8:function j8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c_:function c_(a){this.a=a
this.c=this.b=null},
ec:function ec(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fO:function fO(){},
u:function u(){},
fQ:function fQ(){},
fR:function fR(a,b){this.a=a
this.b=b},
a6:function a6(){},
jf:function jf(){},
ed:function ed(){},
ce:function ce(){},
cf:function cf(){},
fk:function fk(){},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fB:function fB(a){this.a=a},
is:function is(){},
it:function it(){},
jp:function jp(a){this.b=0
this.c=a},
lZ:function(a){if(a instanceof H.cd)return a.i(0)
return"Instance of '"+H.f(H.cw(a))+"'"},
m5:function(a,b,c){var u,t=J.m2(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.n(t,u,b)
return H.n(t,"$ib",[c],"$ab")},
kC:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bE(a);u.u();)C.a.h(s,H.H(u.gE(u),c))
if(b)return s
return H.n(J.jV(s),"$ib",t,"$ab")},
k_:function(a){var u,t
if(a.constructor===Array){H.n(a,"$iaQ",[P.t],"$aaQ")
u=a.length
t=P.kO(0,null,u)
return H.kM(t<u?C.a.dL(a,0,t):a)}return P.mn(a,0,null)},
mn:function(a,b,c){var u,t,s=J.bE(a)
for(u=0;u<b;++u)if(!s.u())throw H.j(P.aW(b,0,u,null,null))
t=[]
for(;s.u();)t.push(s.gE(s))
return H.kM(t)},
mh:function(a){return new H.fH(a,H.m3(a,!1,!0,!1,!1,!1))},
kT:function(a,b,c){var u=J.bE(b)
if(!u.u())return a
if(c.length===0){do a+=H.f(u.gE(u))
while(u.u())}else{a+=H.f(u.gE(u))
for(;u.u();)a=a+c+H.f(u.gE(u))}return a},
l8:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.lK().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.hs(H.H(b,H.an(c,"ce",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jZ(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lW:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d8:function(a){if(a>=10)return""+a
return"0"+a},
kv:function(a){return new P.bo(1000*a)},
dc:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aI(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lZ(a)},
jP:function(a,b,c){return new P.aJ(!0,a,b,c)},
dB:function(a,b){return new P.bQ(null,null,!0,a,b,"Value not in range")},
aW:function(a,b,c,d,e){return new P.bQ(b,c,!0,a,d,"Invalid value")},
kO:function(a,b,c){if(0>a||a>c)throw H.j(P.aW(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.j(P.aW(b,a,c,"end",null))
return b}return c},
kN:function(a,b){if(typeof a!=="number")return a.a4()
if(a<0)throw H.j(P.aW(a,0,null,b,null))},
V:function(a,b,c,d,e){var u=H.ab(e==null?J.bF(b):e)
return new P.fD(u,!0,a,c,"Index out of range")},
at:function(a){return new P.iq(a)},
kY:function(a){return new P.io(a)},
kS:function(a){return new P.cA(a)},
bm:function(a){return new P.f5(a)},
z:function(a){return new P.e4(a)},
kj:function(a){H.nq(a)},
K:function K(){},
av:function av(a,b){this.a=a
this.b=b},
D:function D(){},
bo:function bo(a){this.a=a},
fg:function fg(){},
fh:function fh(){},
bp:function bp(){},
eV:function eV(){},
dx:function dx(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fD:function fD(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iq:function iq(a){this.a=a},
io:function io(a){this.a=a},
cA:function cA(a){this.a=a},
f5:function f5(a){this.a=a},
hq:function hq(){},
dH:function dH(){},
fa:function fa(a){this.a=a},
e4:function e4(a){this.a=a},
fw:function fw(a,b){this.a=a
this.b=b},
bq:function bq(){},
t:function t(){},
i:function i(){},
aP:function aP(){},
b:function b(){},
G:function G(){},
J:function J(){},
a4:function a4(){},
L:function L(){},
al:function al(){},
h:function h(){},
bb:function bb(a){this.a=a},
bd:function(a){var u,t,s,r,q
if(a==null)return
u=P.kA(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r){q=H.O(t[r])
u.n(0,q,a[q])}return u},
n8:function(a){var u={}
a.H(0,new P.jx(u))
return u},
jx:function jx(a){this.a=a},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(){},
fu:function fu(){},
j7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j9:function j9(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
fK:function fK(){},
ba:function ba(){},
ho:function ho(){},
hv:function hv(){},
cx:function cx(){},
hY:function hY(){},
o:function o(){},
bc:function bc(){},
ia:function ia(){},
ea:function ea(){},
eb:function eb(){},
el:function el(){},
em:function em(){},
ex:function ex(){},
ey:function ey(){},
eE:function eE(){},
eF:function eF(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(a){this.a=a},
f_:function f_(){},
bG:function bG(){},
hp:function hp(){},
dY:function dY(){},
d2:function d2(){},
dA:function dA(){},
bR:function bR(){},
dD:function dD(){},
dP:function dP(){},
hQ:function hQ(){},
et:function et(){},
eu:function eu(){}},W={
kp:function(){var u=document.createElement("a")
return u},
ks:function(){var u=document.createElement("canvas")
return u},
lY:function(a,b,c){var u=document.body,t=(u&&C.o).a6(u,a,b,c)
t.toString
u=W.E
u=new H.cI(new W.ag(t),H.m(new W.fj(),{func:1,ret:P.K,args:[u]}),[u])
return H.k(u.gaz(u),"$iP")},
ky:function(a){H.k(a,"$ie")
return"wheel"},
ci:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kg(a)
t=u.gdu(a)
if(typeof t==="string")r=u.gdu(a)}catch(s){H.au(s)}return r},
j6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l6:function(a,b,c,d){var u=W.j6(W.j6(W.j6(W.j6(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.le(new W.iW(c),W.l)
if(u!=null&&!0)J.lL(a,b,u,!1)
return new W.iV(a,b,u,!1,[e])},
l5:function(a){var u=W.kp(),t=window.location
u=new W.bx(new W.je(u,t))
u.dY(a)
return u},
mx:function(a,b,c,d){H.k(a,"$iP")
H.O(b)
H.O(c)
H.k(d,"$ibx")
return!0},
my:function(a,b,c,d){var u,t,s
H.k(a,"$iP")
H.O(b)
H.O(c)
u=H.k(d,"$ibx").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
l7:function(){var u=P.h,t=P.kB(C.l,u),s=H.w(C.l,0),r=H.m(new W.jm(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jl(t,P.dk(u),P.dk(u),P.dk(u),null)
t.e4(null,new H.fU(C.l,r,[s,u]),q,null)
return t},
le:function(a,b){var u=$.Y
if(u===C.f)return a
return u.cU(a,b)},
q:function q(){},
eT:function eT(){},
d_:function d_(){},
eU:function eU(){},
ca:function ca(){},
d1:function d1(){},
bi:function bi(){},
bH:function bH(){},
bj:function bj(){},
cg:function cg(){},
f6:function f6(){},
R:function R(){},
ch:function ch(){},
f7:function f7(){},
aL:function aL(){},
aM:function aM(){},
f8:function f8(){},
f9:function f9(){},
fc:function fc(){},
aw:function aw(){},
fd:function fd(){},
d9:function d9(){},
da:function da(){},
fe:function fe(){},
ff:function ff(){},
iR:function iR(a,b){this.a=a
this.b=b},
P:function P(){},
fj:function fj(){},
l:function l(){},
e:function e(){},
aN:function aN(){},
fq:function fq(){},
fr:function fr(){},
fv:function fv(){},
aO:function aO(){},
fA:function fA(){},
bK:function bK(){},
aR:function aR(){},
dl:function dl(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
ha:function ha(){},
hb:function hb(a){this.a=a},
aU:function aU(){},
hc:function hc(){},
a7:function a7(){},
ag:function ag(a){this.a=a},
E:function E(){},
ct:function ct(){},
aV:function aV(){},
ht:function ht(){},
hB:function hB(){},
hC:function hC(a){this.a=a},
hE:function hE(){},
aX:function aX(){},
hO:function hO(){},
aY:function aY(){},
hP:function hP(){},
aZ:function aZ(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
aE:function aE(){},
bS:function bS(){},
dI:function dI(){},
hZ:function hZ(){},
i_:function i_(){},
cC:function cC(){},
b_:function b_(){},
aF:function aF(){},
i1:function i1(){},
i2:function i2(){},
i4:function i4(){},
b1:function b1(){},
aG:function aG(){},
i8:function i8(){},
i9:function i9(){},
bv:function bv(){},
ir:function ir(){},
iI:function iI(){},
b4:function b4(){},
cJ:function cJ(){},
cK:function cK(){},
iS:function iS(){},
e_:function e_(){},
j5:function j5(){},
ei:function ei(){},
ji:function ji(){},
jj:function jj(){},
iQ:function iQ(){},
iT:function iT(a){this.a=a},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iV:function iV(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iW:function iW(a){this.a=a},
bx:function bx(a){this.a=a},
C:function C(){},
dw:function dw(a){this.a=a},
hl:function hl(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(){},
jg:function jg(){},
jh:function jh(){},
jl:function jl(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jm:function jm(){},
jk:function jk(){},
dd:function dd(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ar:function ar(){},
je:function je(a,b){this.a=a
this.b=b},
eG:function eG(a){this.a=a},
jq:function jq(a){this.a=a},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e5:function e5(){},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ej:function ej(){},
ek:function ek(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
cQ:function cQ(){},
cR:function cR(){},
er:function er(){},
es:function es(){},
ew:function ew(){},
ez:function ez(){},
eA:function eA(){},
cS:function cS(){},
cT:function cT(){},
eC:function eC(){},
eD:function eD(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){}},O={
jR:function(a){var u=new O.a1([a])
u.bj(a)
return u},
a1:function a1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
co:function co(){this.b=this.a=null},
dp:function dp(){var _=this
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
dq:function dq(){},
fX:function fX(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
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
bT:function bT(){}},E={
mi:function(a,b){var u=new E.hx(a)
u.dT(a,b)
return u},
mo:function(a,b,c,d,e){var u,t,s=J.Z(a)
if(!!s.$ibH)return E.kU(a,!0,!0,!0,!1)
u=W.ks()
t=u.style
t.width="100%"
t.height="100%"
s.gcW(a).h(0,u)
return E.kU(u,!0,!0,!0,!1)},
kU:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dL(),j=H.k(C.i.dG(a,"webgl2",P.m4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibR")
if(j==null)H.A(P.z("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mi(j,a)
H.ab(j.getParameter(3379))
H.ab(j.getParameter(34076))
u=new X.dS(a)
t=new X.fJ()
t.c=new X.aq(!1,!1,!1)
t.sfG(P.dk(P.t))
u.b=t
t=new X.hd(u)
t.f=0
t.r=V.bu()
t.x=V.bu()
t.ch=t.Q=1
u.c=t
t=new X.fP(u)
t.r=0
t.x=V.bu()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i7(u)
t.f=V.bu()
t.r=V.bu()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.ser(H.c([],[[P.cB,P.L]]))
t=u.z
s=document
r=W.a7
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.m(u.gf_(),q),!1,r))
t=u.z
p=W.l
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.m(u.gf5(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.m(u.geS(),o),!1,p))
t=u.z
n=W.aR
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.m(u.gf9(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.m(u.gf7(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.m(u.gfd(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.m(u.gfh(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.m(u.gff(),q),!1,r))
n=u.z
W.ky(a)
m=W.b4;(n&&C.a).h(n,W.aa(a,H.O(W.ky(a)),H.m(u.gfj(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.m(u.gf1(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.m(u.gf3(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.m(u.gfl(),o),!1,p))
p=u.z
o=W.aG
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.m(u.gfB(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.m(u.gfv(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.m(u.gfz(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.av(Date.now(),!1)
k.cy=0
k.cJ()
return k},
f0:function f0(){},
ah:function ah(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hx:function hx(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
dL:function dL(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
i3:function i3(a){this.a=a}},Z={
mr:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cU(c)),35044)
a.bindBuffer(b,null)
return new Z.dW(b,u)},
ay:function(a){return new Z.bw(a)},
dW:function dW(a,b){this.a=a
this.b=b},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iJ:function iJ(a){this.a=a},
d4:function d4(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(a){this.a=a}},D={
U:function(){var u=new D.bI()
u.sa9(null)
u.saF(null)
u.c=null
u.d=0
return u},
f3:function f3(){},
bI:function bI(){var _=this
_.d=_.c=_.b=_.a=null},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
y:function y(){this.b=null},
bL:function bL(a){this.b=null
this.$ti=a},
bM:function bM(a){this.b=null
this.$ti=a},
N:function N(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bn:function bn(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a5:function a5(){},
di:function di(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dz:function dz(){},
dG:function dG(){}},X={d5:function d5(a,b){this.a=a
this.b=b},dh:function dh(a,b){this.a=a
this.b=b},fJ:function fJ(){var _=this
_.d=_.c=_.b=_.a=null},dm:function dm(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fP:function fP(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aq:function aq(a,b,c){this.a=a
this.b=b
this.c=c},b9:function b9(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hd:function hd(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cp:function cp(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hu:function hu(){},dN:function dN(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i7:function i7(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dS:function dS(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m_:function(a){var u=new X.fx(),t=new V.bl(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kQ
if(t==null){t=V.kP(0,0,1,1)
$.kQ=t}u.r=t
return u},
d6:function d6(){},
fx:function fx(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){}},V={
nA:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dH(a-b,u)
return(a<0?a+u:a)+b},
a_:function(a,b,c){if(a==null)return C.c.au("null",c)
return C.c.au(C.d.dz(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
c5:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.x)(a),++s){r=V.a_(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.d(p,q)
C.a.n(p,q,C.c.au(p[q],t))}return p},
ds:function(){var u=$.kF
return u==null?$.kF=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kE:function(a,b,c){var u=c.t(0,Math.sqrt(c.w(c))),t=b.ap(u),s=t.t(0,Math.sqrt(t.w(t))),r=u.ap(s),q=new V.Q(a.a,a.b,a.c),p=s.M(0).w(q),o=r.M(0).w(q),n=u.M(0).w(q)
return V.aT(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bu:function(){var u=$.kJ
return u==null?$.kJ=new V.ac(0,0):u},
kK:function(){var u=$.cu
return u==null?$.cu=new V.af(0,0,0):u},
kP:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dC(a,b,c,d)},
cH:function(){var u=$.l1
return u==null?$.l1=new V.Q(0,0,0):u},
mq:function(){var u=$.iu
return u==null?$.iu=new V.Q(-1,0,0):u},
k2:function(){var u=$.iv
return u==null?$.iv=new V.Q(0,1,0):u},
l2:function(){var u=$.iw
return u==null?$.iw=new V.Q(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a){this.a=a},
dr:function dr(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ai:function ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ac:function ac(a,b){this.a=a
this.b=b},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
W:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.j(P.z("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.aD(a,0)
t=C.c.aD(b,0)
s=new V.hw()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.hF()
u.dU(a)
return u},
i6:function(){var u=new V.i5(),t=P.h
u.sh3(new H.a0([t,V.cz]))
u.sh5(new H.a0([t,V.cD]))
u.c=null
return u},
b6:function b6(){},
ap:function ap(){},
dn:function dn(){},
aj:function aj(){this.a=null},
hw:function hw(){this.b=this.a=null},
hF:function hF(){this.a=null},
cz:function cz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dM:function dM(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a){this.b=a
this.c=null},
i5:function i5(){this.c=this.b=this.a=null},
cE:function cE(a){this.b=a
this.a=this.c=null},
nt:function(a){P.mp(C.G,new V.jJ(a))},
mk:function(a){var u=new V.hJ()
u.dW(a,!0)
return u},
bk:function bk(){},
jJ:function jJ(a){this.a=a},
fb:function fb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hs:function hs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hJ:function hJ(){this.b=this.a=null},
hL:function hL(a){this.a=a},
hK:function hK(a){this.a=a},
hM:function hM(a){this.a=a}},U={
jS:function(){var u=new U.f4()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ku:function(a){var u=new U.d7()
u.a=a
return u},
f4:function f4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){this.b=this.a=null},
ck:function ck(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a8:function a8(){},
dT:function dT(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={db:function db(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m6:function(a,b){var u=a.aV,t=new A.fV(b,u)
t.dV(b,u)
t.dS(a,b)
return t},
m7:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gab(a0)+a1.gab(a1)+a2.gab(a2)+a3.gab(a3)+a4.gab(a4)+a5.gab(a5)+a6.gab(a6)+a7.gab(a7)+a8.gab(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.x)(a9),++t)f+="_"+H.f(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.x)(b0),++t)f+="_"+H.f(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.x)(b1),++t)f+="_"+H.f(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.bh()
if(k){u=$.bg()
g=new Z.bw(g.a|u.a)}if(j){u=$.bf()
g=new Z.bw(g.a|u.a)}if(i){u=$.be()
g=new Z.bw(g.a|u.a)}return new A.fY(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
js:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jt:function(a,b,c){var u
A.js(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jK(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
mJ:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.js(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
mG:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jt(b,t,"ambient")
b.a+="\n"},
mH:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jt(b,t,"diffuse")
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
mK:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jt(b,t,"invDiffuse")
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
mQ:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jt(b,t,"specular")
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
mM:function(a,b){var u,t,s
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
mO:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.js(b,t,"reflect")
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
mP:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.js(b,t,"refract")
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
mI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.jK(t)
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
c.a+="      highLight = intensity*("+C.a.l(m," + ")+");\n"}else c.a+="   highLight = "+C.a.l(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.l(o," + ")+");\n"
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
mN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.jK(t)
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
c.a=r+"\n"}r=[P.h]
l=H.c([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.l(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.l(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.l(l," + ")+");\n"
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
mR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.jK(t)
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
c.a=u+"\n"}u=[P.h]
j=H.c([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.l(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.l(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.l(j," + ")+");\n"
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
mL:function(a,b){var u,t
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
u=b.a+="   return "+C.a.l(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mS:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bb("")
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
A.mJ(a,j)
A.mG(a,j)
A.mH(a,j)
A.mK(a,j)
A.mQ(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.mO(a,j)
A.mP(a,j)}A.mM(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.mI(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.mN(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.mR(a,q[o],j)
A.mL(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aj(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aj(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aj(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.l(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mT:function(a,b){var u,t,s
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
mV:function(a,b){var u
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
mU:function(a,b){var u
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
mX:function(a,b){var u,t
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
mY:function(a,b){var u,t
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
mW:function(a,b){var u
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
mZ:function(a,b){var u
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
jK:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.aj(a,1)},
k1:function(a,b,c,d,e){var u=new A.ig(a,c,e)
u.f=d
u.shd(P.m5(d,0,P.t))
return u},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(a,b){var _=this
_.ip=_.io=_.d3=_.d2=_.aV=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iC=_.iB=_.iA=_.bT=_.bS=_.bR=_.bQ=_.bP=_.bO=_.iz=_.iy=_.da=_.ix=_.iw=_.d9=_.d8=_.iv=_.iu=_.d7=_.d6=_.it=_.is=_.d5=_.ir=_.iq=_.d4=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aB:function aB(a,b){this.a=a
this.b=b},
aC:function aC(a,b){this.a=a
this.b=b},
aD:function aD(a,b){this.a=a
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
_.aV=b3
_.d2=b4},
bU:function bU(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bV:function bV(a,b,c,d,e,f,g,h,i,j){var _=this
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
bY:function bY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cy:function cy(){},
dO:function dO(){},
il:function il(a){this.a=a},
ax:function ax(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a9:function a9(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
cF:function cF(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
cG:function cG(a,b,c){this.a=a
this.c=b
this.d=c},
as:function as(a,b,c){this.a=a
this.c=b
this.d=c},
bW:function bW(a,b,c){this.a=a
this.c=b
this.d=c},
bX:function bX(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ny:function(){return F.n9(15,30,0.5,1,new F.jL())},
n9:function(a,b,c,d,e){var u=F.nw(a,b,new F.jy(e,d,b,c))
if(u==null)return
u.aI()
u.hP(new F.iC(),new F.hm())
return u},
nw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.dE()
t=new F.ix(u)
t.b=!1
s=[F.aH]
t.she(H.c([],s))
u.a=t
t=new F.hI()
t.sbD(H.c([],[F.bO]))
u.b=t
t=new F.hH(u)
t.sez(H.c([],[F.bt]))
u.c=t
t=new F.hG(u)
t.ses(H.c([],[F.a3]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.cR(new V.bl(s,0,0,1),new V.ac(p,1))
c.$3(o,p,0)
C.a.h(r,o.d_(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.cR(new V.bl(j,i,h,1),new V.ac(p,m))
c.$3(o,p,n)
C.a.h(r,o.d_(null))}}u.d.hg(a+1,b+1,r)
return u},
fo:function(a,b,c){var u=new F.a3(),t=a.a
if(t==null)H.A(P.z("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.z("May not create a face with vertices attached to different shapes."))
u.fU(a)
u.fV(b)
u.fW(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
l3:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aH(),r=new F.iF()
r.sbD(H.c([],[F.bO]))
s.b=r
r=new F.iB()
u=[F.bt]
r.seA(H.c([],u))
r.seB(H.c([],u))
s.c=r
r=new F.iy()
u=[F.a3]
r.seu(H.c([],u))
r.sev(H.c([],u))
r.sew(H.c([],u))
s.d=r
h=$.lG()
s.e=0
r=$.bh()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bg().a)!==0?e:t
s.x=(u&$.bf().a)!==0?b:t
s.y=(u&$.bB().a)!==0?f:t
s.z=(u&$.bC().a)!==0?g:t
s.Q=(u&$.lH().a)!==0?c:t
s.ch=(u&$.c9().a)!==0?i:0
s.cx=(u&$.be().a)!==0?a:t
return s},
jL:function jL(){},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fp:function fp(){},
hN:function hN(){},
bt:function bt(){},
fL:function fL(){},
ie:function ie(){},
bO:function bO(){},
dE:function dE(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a){this.a=a
this.b=null},
hH:function hH(a){this.a=a
this.b=null},
hI:function hI(){this.b=null},
aH:function aH(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iH:function iH(a){this.a=a},
iG:function iG(a){this.a=a},
ix:function ix(a){this.a=a
this.c=this.b=null},
iy:function iy(){this.d=this.c=this.b=null},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(){this.c=this.b=null},
iD:function iD(){},
iC:function iC(){},
iE:function iE(){},
hm:function hm(){},
iF:function iF(){this.b=null}},T={dK:function dK(){}},Q={
ln:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="modifiers",b=V.mk("Test 009"),a=W.ks()
a.className="pageLargeCanvas"
a.id=e
b.a.appendChild(a)
u=[P.h]
b.cS(H.c(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],u))
b.cS(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(e)
if(t==null)H.A(P.z("Failed to find an element with the identifier, testCanvas."))
s=E.mo(t,!0,!0,!0,!1)
r=new E.ah()
r.a=""
r.b=!0
u=E.ah
r.seh(0,O.jR(u))
r.y.aY(r.ghQ(),r.ghT())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sca(0,d)
r.sca(0,F.ny())
q=new O.dp()
q.see(O.jR(V.ai))
q.e.aY(q.geO(),q.geQ())
p=new O.aS(q,"emission")
p.c=new A.ae(!1,!1,!1)
p.f=new V.a2(0,0,0)
q.f=p
p=new O.aS(q,"ambient")
p.c=new A.ae(!1,!1,!1)
p.f=new V.a2(0,0,0)
q.r=p
p=new O.aS(q,"diffuse")
p.c=new A.ae(!1,!1,!1)
p.f=new V.a2(0,0,0)
q.x=p
p=new O.aS(q,"invDiffuse")
p.c=new A.ae(!1,!1,!1)
p.f=new V.a2(0,0,0)
q.y=p
p=new O.h0(q,"specular")
p.c=new A.ae(!1,!1,!1)
p.f=new V.a2(0,0,0)
p.ch=100
q.z=p
p=new O.fX(q,"bump")
p.c=new A.ae(!1,!1,!1)
q.Q=p
q.ch=null
p=new O.aS(q,"reflect")
p.c=new A.ae(!1,!1,!1)
p.f=new V.a2(0,0,0)
q.cx=p
p=new O.h_(q,"refract")
p.c=new A.ae(!1,!1,!1)
p.f=new V.a2(0,0,0)
p.ch=1
q.cy=p
p=new O.fW(q,"alpha")
p.c=new A.ae(!1,!1,!1)
p.f=1
q.db=p
p=new D.di()
p.bj(D.a5)
p.sep(H.c([],[D.bn]))
p.sfD(H.c([],[D.dz]))
p.sh2(H.c([],[D.dG]))
p.y=p.x=null
p.c9(p.geM(),p.gfo(),p.gft())
q.dx=p
o=new O.fZ()
o.b=new V.bl(0,0,0,0)
o.c=1
o.d=10
o.e=!1
q.dy=o
o=p.x
p=o==null?p.x=D.U():o
p.h(0,q.gfO())
p=q.dx
o=p.y
p=o==null?p.y=D.U():o
p.h(0,q.geU())
q.fr=null
p=q.dx
n=V.k2()
o=U.ku(V.kE(V.kK(),n,new V.Q(-1,-1,-1)))
m=new V.a2(1,1,1)
l=new D.bn()
l.c=new V.a2(1,1,1)
l.a=V.l2()
l.d=V.k2()
l.e=V.mq()
k=l.b
l.b=o
o.gv().h(0,l.gdZ())
o=new D.N("mover",k,l.b,[U.a8])
o.b=!0
l.ak(o)
if(!l.c.p(0,m)){k=l.c
l.c=m
o=new D.N("color",k,m,[V.a2])
o.b=!0
l.ak(o)}p.h(0,l)
q.f.saK(0,new V.a2(0,0,0))
p=q.r
p.saK(0,new V.a2(0,0,1))
p=q.x
p.saK(0,new V.a2(0,1,0))
p=q.z
p.saK(0,new V.a2(1,0,0))
p=q.z
p.cL(new A.ae(!0,!1,!1))
p.cM(10)
j=new U.ck()
j.bj(U.a8)
j.aY(j.geK(),j.gfq())
j.e=null
j.f=V.ds()
j.r=0
p=s.r
o=new U.dU()
l=U.jS()
l.sc7(0,!0)
l.sbX(6.283185307179586)
l.sbZ(0)
l.sa1(0,0)
l.sbY(100)
l.sP(0)
l.sbN(0.5)
o.b=l
i=o.gaB()
l.gv().h(0,i)
l=U.jS()
l.sc7(0,!0)
l.sbX(6.283185307179586)
l.sbZ(0)
l.sa1(0,0)
l.sbY(100)
l.sP(0)
l.sbN(0.5)
o.c=l
l.gv().h(0,i)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
h=new X.aq(!1,!1,!1)
k=o.d
o.d=h
l=[X.aq]
i=new D.N(c,k,h,l)
i.b=!0
o.K(i)
i=o.f
if(i!==!1){o.f=!1
i=new D.N("invertX",i,!1,[P.K])
i.b=!0
o.K(i)}i=o.r
if(i!==!0){o.r=!0
i=new D.N("invertY",i,!0,[P.K])
i.b=!0
o.K(i)}o.aT(p)
j.h(0,o)
p=s.r
o=new U.dT()
i=U.jS()
i.sc7(0,!0)
i.sbX(6.283185307179586)
i.sbZ(0)
i.sa1(0,0)
i.sbY(100)
i.sP(0)
i.sbN(0.2)
o.b=i
i.gv().h(0,o.gaB())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
h=new X.aq(!0,!1,!1)
k=o.c
o.c=h
i=new D.N(c,k,h,l)
i.b=!0
o.K(i)
o.aT(p)
j.h(0,o)
p=s.r
o=new U.dV()
o.c=0.01
o.e=o.d=0
h=new X.aq(!1,!1,!1)
o.b=h
l=new D.N(c,d,h,l)
l.b=!0
o.K(l)
o.aT(p)
j.h(0,o)
j.h(0,U.ku(V.aT(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
p=new M.db()
p.a=!0
p.se0(0,O.jR(u))
p.e.aY(p.geW(),p.geY())
p.y=p.x=p.r=p.f=null
g=X.m_(d)
f=new X.dy()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sdg(d)
u=f.c
if(!(Math.abs(u-1.0471975511965976)<$.M().a)){f.c=1.0471975511965976
u=new D.N("fov",u,1.0471975511965976,[P.D])
u.b=!0
f.aC(u)}u=f.d
if(!(Math.abs(u-0.1)<$.M().a)){f.d=0.1
u=new D.N("near",u,0.1,[P.D])
u.b=!0
f.aC(u)}u=f.e
if(!(Math.abs(u-2000)<$.M().a)){f.e=2000
u=new D.N("far",u,2000,[P.D])
u.b=!0
f.aC(u)}u=p.b
if(u!==f){if(u!=null)u.gv().S(0,p.gad())
k=p.b
p.b=f
f.gv().h(0,p.gad())
u=new D.N("camera",k,p.b,[X.d6])
u.b=!0
p.al(u)}u=p.c
if(u!==g){if(u!=null)u.gv().S(0,p.gad())
k=p.c
p.c=g
g.gv().h(0,p.gad())
u=new D.N("target",k,p.c,[X.dJ])
u.b=!0
p.al(u)}p.sdv(d)
p.sdv(q)
p.e.h(0,r)
p.b.sdg(j)
u=s.d
if(u!==p){if(u!=null)u.gv().S(0,s.gcf())
s.d=p
p.gv().h(0,s.gcf())
s.cg()}u=s.z
if(u==null)u=s.z=D.U()
p={func:1,ret:-1,args:[D.y]}
o=H.m(new Q.jG(b,q),p)
if(u.b==null)u.saF(H.c([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.nt(s)},
jG:function jG(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jX.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gF:function(a){return H.cv(a)},
i:function(a){return"Instance of '"+H.f(H.cw(a))+"'"}}
J.fF.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iK:1}
J.df.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.dg.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.hr.prototype={}
J.bZ.prototype={}
J.bs.prototype={
i:function(a){var u=a[$.lv()]
if(u==null)return this.dO(a)
return"JavaScript function for "+H.f(J.aI(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibq:1}
J.aQ.prototype={
h:function(a,b){H.H(b,H.w(a,0))
if(!!a.fixed$length)H.A(P.at("add"))
a.push(b)},
dr:function(a,b){if(!!a.fixed$length)H.A(P.at("removeAt"))
if(b<0||b>=a.length)throw H.j(P.dB(b,null))
return a.splice(b,1)[0]},
S:function(a,b){var u
if(!!a.fixed$length)H.A(P.at("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.j(P.bm(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.f(a[u]))
return t.join(b)},
hL:function(a){return this.l(a,"")},
hG:function(a,b){var u,t,s
H.m(b,{func:1,ret:P.K,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.B(b.$1(s)))return s
if(a.length!==u)throw H.j(P.bm(a))}throw H.j(H.fE())},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dL:function(a,b,c){var u=a.length
if(b>u)throw H.j(P.aW(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.j(P.aW(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
ghF:function(a){if(a.length>0)return a[0]
throw H.j(H.fE())},
gb8:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.j(H.fE())},
cT:function(a,b){var u,t
H.m(b,{func:1,ret:P.K,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.B(b.$1(a[t])))return!0
if(a.length!==u)throw H.j(P.bm(a))}return!1},
bg:function(a,b){var u=H.w(a,0)
H.m(b,{func:1,ret:P.t,args:[u,u]})
if(!!a.immutable$list)H.A(P.at("sort"))
H.dF(a,0,a.length-1,b,u)},
R:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.jU(a,"[","]")},
gO:function(a){return new J.ao(a,a.length,[H.w(a,0)])},
gF:function(a){return H.cv(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.A(P.at("set length"))
if(b<0)throw H.j(P.aW(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.j(H.c4(a,b))
return a[b]},
n:function(a,b,c){H.H(c,H.w(a,0))
if(!!a.immutable$list)H.A(P.at("indexed set"))
if(b>=a.length||b<0)throw H.j(H.c4(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.jW.prototype={}
J.ao.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.j(H.x(s))
u=t.c
if(u>=r){t.scz(null)
return!1}t.scz(s[u]);++t.c
return!0},
scz:function(a){this.d=H.H(a,H.w(this,0))},
$iaP:1}
J.cm.prototype={
hr:function(a,b){var u
H.lo(b)
if(typeof b!=="number")throw H.j(H.c2(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb7(b)
if(this.gb7(a)===u)return 0
if(this.gb7(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb7:function(a){return a===0?1/a<0:a<0},
dc:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.j(P.at(""+a+".floor()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.at(""+a+".round()"))},
dz:function(a,b){var u
if(b>20)throw H.j(P.aW(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb7(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dH:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dR:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cN(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cN(a,b)},
cN:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.j(P.at("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
b2:function(a,b){var u
if(a>0)u=this.h0(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h0:function(a,b){return b>31?0:a>>>b},
$iD:1,
$ia4:1}
J.de.prototype={$it:1}
J.fG.prototype={}
J.br.prototype={
bM:function(a,b){if(b<0)throw H.j(H.c4(a,b))
if(b>=a.length)H.A(H.c4(a,b))
return a.charCodeAt(b)},
aD:function(a,b){if(b>=a.length)throw H.j(H.c4(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.j(P.jP(b,null,null))
return a+b},
bh:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aZ:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.j(P.dB(b,null))
if(b>c)throw H.j(P.dB(b,null))
if(c>a.length)throw H.j(P.dB(c,null))
return a.substring(b,c)},
aj:function(a,b){return this.aZ(a,b,null)},
ih:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
au:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikH:1,
$ih:1}
H.p.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.bM(this.a,b)},
$adR:function(){return[P.t]},
$au:function(){return[P.t]},
$ai:function(){return[P.t]},
$ab:function(){return[P.t]}}
H.fi.prototype={}
H.bN.prototype={
gO:function(a){var u=this
return new H.cn(u,u.gm(u),[H.an(u,"bN",0)])},
bf:function(a,b){return this.dN(0,H.m(b,{func:1,ret:P.K,args:[H.an(this,"bN",0)]}))}}
H.cn.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.ke(s),q=r.gm(s)
if(t.b!==q)throw H.j(P.bm(s))
u=t.c
if(u>=q){t.saP(null)
return!1}t.saP(r.A(s,u));++t.c
return!0},
saP:function(a){this.d=H.H(a,H.w(this,0))},
$iaP:1}
H.fS.prototype={
gO:function(a){return new H.fT(J.bE(this.a),this.b,this.$ti)},
gm:function(a){return J.bF(this.a)},
A:function(a,b){return this.b.$1(J.jO(this.a,b))},
$ai:function(a,b){return[b]}}
H.fT.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saP(u.c.$1(t.gE(t)))
return!0}u.saP(null)
return!1},
gE:function(a){return this.a},
saP:function(a){this.a=H.H(a,H.w(this,1))},
$aaP:function(a,b){return[b]}}
H.fU.prototype={
gm:function(a){return J.bF(this.a)},
A:function(a,b){return this.b.$1(J.jO(this.a,b))},
$abN:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cI.prototype={
gO:function(a){return new H.iK(J.bE(this.a),this.b,this.$ti)}}
H.iK.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.B(t.$1(u.gE(u))))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.bJ.prototype={}
H.dR.prototype={}
H.dQ.prototype={}
H.ib.prototype={
a7:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fI.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.ip.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jM.prototype={
$1:function(a){if(!!J.Z(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.ev.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ial:1}
H.cd.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibq:1,
gii:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i0.prototype={}
H.hR.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c8(u)+"'"}}
H.cb.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cb))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.cv(this.a)
else u=typeof t!=="object"?J.bD(t):H.cv(t)
return(u^H.cv(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.cw(u))+"'")}}
H.id.prototype={
i:function(a){return this.a}}
H.f2.prototype={
i:function(a){return this.a}}
H.hD.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.iL.prototype={
i:function(a){return"Assertion failed: "+P.dc(this.a)}}
H.a0.prototype={
gm:function(a){return this.a},
ga0:function(a){return new H.dj(this,[H.w(this,0)])},
cZ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cu(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cu(t,b)}else return s.hJ(b)},
hJ:function(a){var u=this.d
if(u==null)return!1
return this.bU(this.bq(u,J.bD(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b0(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b0(r,b)
s=t==null?null:t.b
return s}else return q.hK(b)},
hK:function(a){var u,t,s=this.d
if(s==null)return
u=this.bq(s,J.bD(a)&0x3ffffff)
t=this.bU(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.H(b,H.w(o,0))
H.H(c,H.w(o,1))
if(typeof b==="string"){u=o.b
o.cl(u==null?o.b=o.bB():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cl(t==null?o.c=o.bB():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bB()
r=J.bD(b)&0x3ffffff
q=o.bq(s,r)
if(q==null)o.bG(s,r,[o.bC(b,c)])
else{p=o.bU(q,b)
if(p>=0)q[p].b=c
else q.push(o.bC(b,c))}}},
H:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.j(P.bm(s))
u=u.c}},
cl:function(a,b,c){var u,t=this
H.H(b,H.w(t,0))
H.H(c,H.w(t,1))
u=t.b0(a,b)
if(u==null)t.bG(a,b,t.bC(b,c))
else u.b=c},
eH:function(){this.r=this.r+1&67108863},
bC:function(a,b){var u,t=this,s=new H.fM(H.H(a,H.w(t,0)),H.H(b,H.w(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eH()
return s},
bU:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.kD(this)},
b0:function(a,b){return a[b]},
bq:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
en:function(a,b){delete a[b]},
cu:function(a,b){return this.b0(a,b)!=null},
bB:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bG(t,u,t)
this.en(t,u)
return t}}
H.fM.prototype={}
H.dj.prototype={
gm:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.fN(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fN.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.j(P.bm(t))
else{t=u.c
if(t==null){u.sck(null)
return!1}else{u.sck(t.a)
u.c=u.c.c
return!0}}},
sck:function(a){this.d=H.H(a,H.w(this,0))},
$iaP:1}
H.jC.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.jD.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.jE.prototype={
$1:function(a){return this.a(H.O(a))},
$S:32}
H.fH.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ikH:1}
H.cs.prototype={}
H.dt.prototype={
gm:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cr.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]},
$abJ:function(){return[P.D]},
$au:function(){return[P.D]},
$ii:1,
$ai:function(){return[P.D]},
$ib:1,
$ab:function(){return[P.D]}}
H.du.prototype={
$abJ:function(){return[P.t]},
$au:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.he.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.hf.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.hg.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.hh.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.hi.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.dv.prototype={
gm:function(a){return a.length},
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.hj.prototype={
gm:function(a){return a.length},
j:function(a,b){H.by(b,a,a.length)
return a[b]},
$inV:1}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
P.iN.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.iM.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.iO.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iP.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eB.prototype={
e5:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c3(new P.jo(this,b),0),a)
else throw H.j(P.at("`setTimeout()` not found."))},
e6:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c3(new P.jn(this,a,Date.now(),b),0),a)
else throw H.j(P.at("Periodic timer."))},
$ib0:1}
P.jo.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jn.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dR(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b5.prototype={
hN:function(a){if((this.c&15)!==6)return!0
return this.b.b.c4(H.m(this.d,{func:1,ret:P.K,args:[P.L]}),a.a,P.K,P.L)},
hI:function(a){var u=this.e,t=P.L,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.eR(u,{func:1,args:[P.L,P.al]}))return H.kd(r.i9(u,a.a,a.b,null,t,P.al),s)
else return H.kd(r.c4(H.m(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.az.prototype={
dw:function(a,b,c){var u,t,s,r=H.w(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Y
if(u!==C.f){H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.n0(b,u)}t=new P.az($.Y,[c])
s=b==null?1:3
this.cm(new P.b5(t,s,a,b,[r,c]))
return t},
ic:function(a,b){return this.dw(a,null,b)},
cm:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib5")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaz")
s=u.a
if(s<4){u.cm(a)
return}t.a=s
t.c=u.c}P.jw(null,null,t.b,H.m(new P.iX(t,a),{func:1,ret:-1}))}},
cH:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib5")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaz")
u=q.a
if(u<4){q.cH(a)
return}p.a=u
p.c=q.c}o.a=p.b1(a)
P.jw(null,null,p.b,H.m(new P.j0(o,p),{func:1,ret:-1}))}},
bF:function(){var u=H.k(this.c,"$ib5")
this.c=null
return this.b1(u)},
b1:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cq:function(a){var u,t,s=this,r=H.w(s,0)
H.kd(a,{futureOr:1,type:r})
u=s.$ti
if(H.ka(a,"$icj",u,"$acj"))if(H.ka(a,"$iaz",u,null))P.l4(a,s)
else P.mw(a,s)
else{t=s.bF()
H.H(a,r)
s.a=4
s.c=a
P.cL(s,t)}},
cr:function(a,b){var u,t=this
H.k(b,"$ial")
u=t.bF()
t.a=8
t.c=new P.ad(a,b)
P.cL(t,u)},
$icj:1}
P.iX.prototype={
$0:function(){P.cL(this.a,this.b)},
$S:2}
P.j0.prototype={
$0:function(){P.cL(this.b,this.a.a)},
$S:2}
P.iY.prototype={
$1:function(a){var u=this.a
u.a=0
u.cq(a)},
$S:18}
P.iZ.prototype={
$2:function(a,b){H.k(b,"$ial")
this.a.cr(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.j_.prototype={
$0:function(){this.a.cr(this.b,this.c)},
$S:2}
P.j3.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dt(H.m(s.d,{func:1}),null)}catch(r){u=H.au(r)
t=H.c6(r)
if(o.d){s=H.k(o.a.a.c,"$iad").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iad")
else q.b=new P.ad(u,t)
q.a=!0
return}if(!!J.Z(n).$icj){if(n instanceof P.az&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iad")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ic(new P.j4(p),null)
s.a=!1}},
$S:3}
P.j4.prototype={
$1:function(a){return this.a},
$S:39}
P.j2.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.H(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.c4(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.au(o)
t=H.c6(o)
s=n.a
s.b=new P.ad(u,t)
s.a=!0}},
$S:3}
P.j1.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iad")
r=m.c
if(H.B(r.hN(u))&&r.e!=null){q=m.b
q.b=r.hI(u)
q.a=!1}}catch(p){t=H.au(p)
s=H.c6(p)
r=H.k(m.a.a.c,"$iad")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ad(t,s)
n.a=!0}},
$S:3}
P.dX.prototype={}
P.hU.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.az($.Y,[P.t])
r.a=0
u=H.w(s,0)
t=H.m(new P.hW(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.hX(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.hW.prototype={
$1:function(a){H.H(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.w(this.b,0)]}}}
P.hX.prototype={
$0:function(){this.b.cq(this.a.a)},
$S:2}
P.cB.prototype={}
P.hV.prototype={}
P.b0.prototype={}
P.ad.prototype={
i:function(a){return H.f(this.a)},
$ibp:1}
P.jr.prototype={$io8:1}
P.jv.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dx():s
s=this.b
if(s==null)throw H.j(t)
u=H.j(t)
u.stack=s.i(0)
throw u},
$S:2}
P.ja.prototype={
ia:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.f===$.Y){a.$0()
return}P.la(r,r,this,a,-1)}catch(s){u=H.au(s)
t=H.c6(s)
P.ju(r,r,this,u,H.k(t,"$ial"))}},
ib:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.f===$.Y){a.$1(b)
return}P.lb(r,r,this,a,b,-1,c)}catch(s){u=H.au(s)
t=H.c6(s)
P.ju(r,r,this,u,H.k(t,"$ial"))}},
ho:function(a,b){return new P.jc(this,H.m(a,{func:1,ret:b}),b)},
bI:function(a){return new P.jb(this,H.m(a,{func:1,ret:-1}))},
cU:function(a,b){return new P.jd(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
dt:function(a,b){H.m(a,{func:1,ret:b})
if($.Y===C.f)return a.$0()
return P.la(null,null,this,a,b)},
c4:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.Y===C.f)return a.$1(b)
return P.lb(null,null,this,a,b,c,d)},
i9:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.Y===C.f)return a.$2(b,c)
return P.n1(null,null,this,a,b,c,d,e,f)}}
P.jc.prototype={
$0:function(){return this.a.dt(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jb.prototype={
$0:function(){return this.a.ia(this.b)},
$S:3}
P.jd.prototype={
$1:function(a){var u=this.c
return this.a.ib(this.b,H.H(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j8.prototype={
gO:function(a){var u=this,t=new P.ec(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
R:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ic_")!=null}else{t=this.ei(b)
return t}},
ei:function(a){var u=this.d
if(u==null)return!1
return this.bo(this.cA(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.H(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cn(u==null?s.b=P.k4():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cn(t==null?s.c=P.k4():t,b)}else return s.e8(0,b)},
e8:function(a,b){var u,t,s,r=this
H.H(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.k4()
t=r.cs(b)
s=u[t]
if(s==null)u[t]=[r.bl(b)]
else{if(r.bo(s,b)>=0)return!1
s.push(r.bl(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fI(this.c,b)
else return this.fH(0,b)},
fH:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cA(r,b)
t=s.bo(u,b)
if(t<0)return!1
s.cO(u.splice(t,1)[0])
return!0},
cn:function(a,b){H.H(b,H.w(this,0))
if(H.k(a[b],"$ic_")!=null)return!1
a[b]=this.bl(b)
return!0},
fI:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ic_")
if(u==null)return!1
this.cO(u)
delete a[b]
return!0},
cp:function(){this.r=1073741823&this.r+1},
bl:function(a){var u,t=this,s=new P.c_(H.H(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cp()
return s},
cO:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cp()},
cs:function(a){return J.bD(a)&1073741823},
cA:function(a,b){return a[this.cs(b)]},
bo:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1}}
P.c_.prototype={}
P.ec.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.j(P.bm(t))
else{t=u.c
if(t==null){u.sco(null)
return!1}else{u.sco(H.H(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
sco:function(a){this.d=H.H(a,H.w(this,0))},
$iaP:1}
P.fO.prototype={$ii:1,$ib:1}
P.u.prototype={
gO:function(a){return new H.cn(a,this.gm(a),[H.cX(this,a,"u",0)])},
A:function(a,b){return this.j(a,b)},
ig:function(a,b){var u,t=this,s=H.c([],[H.cX(t,a,"u",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.n(s,u,t.j(a,u))
return s},
ie:function(a){return this.ig(a,!0)},
i:function(a){return P.jU(a,"[","]")}}
P.fQ.prototype={}
P.fR.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:19}
P.a6.prototype={
H:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.cX(s,a,"a6",0),H.cX(s,a,"a6",1)]})
for(u=J.bE(s.ga0(a));u.u();){t=u.gE(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bF(this.ga0(a))},
i:function(a){return P.kD(a)},
$iG:1}
P.jf.prototype={
af:function(a,b){var u
for(u=J.bE(H.n(b,"$ii",this.$ti,"$ai"));u.u();)this.h(0,u.gE(u))},
i:function(a){return P.jU(this,"{","}")},
A:function(a,b){var u,t,s,r=this
P.kN(b,"index")
for(u=P.mA(r,r.r,H.w(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.j(P.V(b,r,"index",null,t))},
$ii:1,
$ikR:1}
P.ed.prototype={}
P.ce.prototype={}
P.cf.prototype={}
P.fk.prototype={
$ace:function(){return[P.h,[P.b,P.t]]}}
P.fC.prototype={
i:function(a){return this.a}}
P.fB.prototype={
ek:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.d(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.bb("")
if(r>b)q.a+=C.c.aZ(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lO(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acf:function(){return[P.h,P.h]}}
P.is.prototype={}
P.it.prototype={
hs:function(a){var u,t,s=P.kO(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jp(u)
if(t.ex(a,0,s)!==s)t.cP(C.c.bM(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mD(0,t.b,u.length)))},
$acf:function(){return[P.h,[P.b,P.t]]}}
P.jp.prototype={
cP:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.d(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.d(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|a&63
return!1}},
ex:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bM(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.aD(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cP(r,C.c.aD(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.d(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.d(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=128|r&63}}return s}}
P.K.prototype={}
P.av.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.av&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.e.b2(u,30))&1073741823},
i:function(a){var u=this,t=P.lW(H.mf(u)),s=P.d8(H.md(u)),r=P.d8(H.m9(u)),q=P.d8(H.ma(u)),p=P.d8(H.mc(u)),o=P.d8(H.me(u)),n=P.lX(H.mb(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.D.prototype={}
P.bo.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bo&&this.a===b.a},
gF:function(a){return C.e.gF(this.a)},
i:function(a){var u,t,s,r=new P.fh(),q=this.a
if(q<0)return"-"+new P.bo(0-q).i(0)
u=r.$1(C.e.a_(q,6e7)%60)
t=r.$1(C.e.a_(q,1e6)%60)
s=new P.fg().$1(q%1e6)
return""+C.e.a_(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.fg.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fh.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bp.prototype={}
P.eV.prototype={
i:function(a){return"Assertion failed"}}
P.dx.prototype={
i:function(a){return"Throw of null."}}
P.aJ.prototype={
gbn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbm:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbn()+o+u
if(!q.a)return t
s=q.gbm()
r=P.dc(q.b)
return t+s+": "+r}}
P.bQ.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.fD.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var u,t=H.ab(this.b)
if(typeof t!=="number")return t.a4()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gm:function(a){return this.f}}
P.iq.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.io.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cA.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f5.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dc(u)+"."}}
P.hq.prototype={
i:function(a){return"Out of Memory"},
$ibp:1}
P.dH.prototype={
i:function(a){return"Stack Overflow"},
$ibp:1}
P.fa.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e4.prototype={
i:function(a){return"Exception: "+this.a}}
P.fw.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.aZ(s,0,75)+"...":s
return t+"\n"+r}}
P.bq.prototype={}
P.t.prototype={}
P.i.prototype={
bf:function(a,b){var u=H.an(this,"i",0)
return new H.cI(this,H.m(b,{func:1,ret:P.K,args:[u]}),[u])},
gm:function(a){var u,t=this.gO(this)
for(u=0;t.u();)++u
return u},
gaz:function(a){var u,t=this.gO(this)
if(!t.u())throw H.j(H.fE())
u=t.gE(t)
if(t.u())throw H.j(H.m1())
return u},
A:function(a,b){var u,t,s
P.kN(b,"index")
for(u=this.gO(this),t=0;u.u();){s=u.gE(u)
if(b===t)return s;++t}throw H.j(P.V(b,this,"index",null,t))},
i:function(a){return P.m0(this,"(",")")}}
P.aP.prototype={}
P.b.prototype={$ii:1}
P.G.prototype={}
P.J.prototype={
gF:function(a){return P.L.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
p:function(a,b){return this===b},
gF:function(a){return H.cv(this)},
i:function(a){return"Instance of '"+H.f(H.cw(this))+"'"},
toString:function(){return this.i(this)}}
P.al.prototype={}
P.h.prototype={$ikH:1}
P.bb.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eT.prototype={
gm:function(a){return a.length}}
W.d_.prototype={
i:function(a){return String(a)},
$id_:1}
W.eU.prototype={
i:function(a){return String(a)}}
W.ca.prototype={$ica:1}
W.d1.prototype={}
W.bi.prototype={$ibi:1}
W.bH.prototype={
dG:function(a,b,c){var u=a.getContext(b,P.n8(c))
return u},
$ibH:1}
W.bj.prototype={
gm:function(a){return a.length}}
W.cg.prototype={$icg:1}
W.f6.prototype={
gm:function(a){return a.length}}
W.R.prototype={$iR:1}
W.ch.prototype={
gm:function(a){return a.length}}
W.f7.prototype={}
W.aL.prototype={}
W.aM.prototype={}
W.f8.prototype={
gm:function(a){return a.length}}
W.f9.prototype={
gm:function(a){return a.length}}
W.fc.prototype={
gm:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.fd.prototype={
i:function(a){return String(a)}}
W.d9.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.ak,P.a4]]},
$au:function(){return[[P.ak,P.a4]]},
$ii:1,
$ai:function(){return[[P.ak,P.a4]]},
$ib:1,
$ab:function(){return[[P.ak,P.a4]]},
$aC:function(){return[[P.ak,P.a4]]}}
W.da.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gay(a))+" x "+H.f(this.gaq(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$iak)return!1
return a.left===u.gb9(b)&&a.top===u.gbc(b)&&this.gay(a)===u.gay(b)&&this.gaq(a)===u.gaq(b)},
gF:function(a){return W.l6(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(this.gay(a)),C.d.gF(this.gaq(a)))},
gcV:function(a){return a.bottom},
gaq:function(a){return a.height},
gb9:function(a){return a.left},
gc3:function(a){return a.right},
gbc:function(a){return a.top},
gay:function(a){return a.width},
$iak:1,
$aak:function(){return[P.a4]}}
W.fe.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.h]},
$au:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aC:function(){return[P.h]}}
W.ff.prototype={
gm:function(a){return a.length}}
W.iR.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$iP")},
h:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.ie(this)
return new J.ao(u,u.length,[H.w(u,0)])},
$au:function(){return[W.P]},
$ai:function(){return[W.P]},
$ab:function(){return[W.P]}}
W.P.prototype={
ghn:function(a){return new W.iT(a)},
gcW:function(a){return new W.iR(a,a.children)},
gcX:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a4()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a4()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
a6:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kx
if(u==null){u=H.c([],[W.ar])
t=new W.dw(u)
C.a.h(u,W.l5(null))
C.a.h(u,W.l7())
$.kx=t
d=t}else d=u
u=$.kw
if(u==null){u=new W.eG(d)
$.kw=u
c=u}else{u.a=d
c=u}}if($.b7==null){u=document
t=u.implementation.createHTMLDocument("")
$.b7=t
$.jT=t.createRange()
t=$.b7.createElement("base")
H.k(t,"$ica")
t.href=u.baseURI
$.b7.head.appendChild(t)}u=$.b7
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ibi")}u=$.b7
if(!!this.$ibi)s=u.body
else{s=u.createElement(a.tagName)
$.b7.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.L,a.tagName)){$.jT.selectNodeContents(s)
r=$.jT.createContextualFragment(b)}else{s.innerHTML=b
r=$.b7.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.b7.body
if(s==null?u!=null:s!==u)J.ko(s)
c.c8(r)
document.adoptNode(r)
return r},
ht:function(a,b,c){return this.a6(a,b,c,null)},
dJ:function(a,b){a.textContent=null
a.appendChild(this.a6(a,b,null,null))},
$iP:1,
gdu:function(a){return a.tagName}}
W.fj.prototype={
$1:function(a){return!!J.Z(H.k(a,"$iE")).$iP},
$S:25}
W.l.prototype={$il:1}
W.e.prototype={
hf:function(a,b,c,d){H.m(c,{func:1,args:[W.l]})
if(c!=null)this.e9(a,b,c,!1)},
e9:function(a,b,c,d){return a.addEventListener(b,H.c3(H.m(c,{func:1,args:[W.l]}),1),!1)},
$ie:1}
W.aN.prototype={$iaN:1}
W.fq.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aN]},
$au:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aC:function(){return[W.aN]}}
W.fr.prototype={
gm:function(a){return a.length}}
W.fv.prototype={
gm:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.fA.prototype={
gm:function(a){return a.length}}
W.bK.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$au:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibK:1,
$aC:function(){return[W.E]}}
W.aR.prototype={$iaR:1}
W.dl.prototype={
i:function(a){return String(a)},
$idl:1}
W.h7.prototype={
gm:function(a){return a.length}}
W.h8.prototype={
j:function(a,b){return P.bd(a.get(H.O(b)))},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
ga0:function(a){var u=H.c([],[P.h])
this.H(a,new W.h9(u))
return u},
gm:function(a){return a.size},
$aa6:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.h9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.ha.prototype={
j:function(a,b){return P.bd(a.get(H.O(b)))},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
ga0:function(a){var u=H.c([],[P.h])
this.H(a,new W.hb(u))
return u},
gm:function(a){return a.size},
$aa6:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.hb.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aU.prototype={$iaU:1}
W.hc.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aU]},
$au:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aC:function(){return[W.aU]}}
W.a7.prototype={$ia7:1}
W.ag.prototype={
gaz:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.j(P.kS("No elements"))
if(t>1)throw H.j(P.kS("More than one element"))
return u.firstChild},
af:function(a,b){var u,t,s,r
H.n(b,"$ii",[W.E],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.dd(u,u.length,[H.cX(C.N,u,"C",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$au:function(){return[W.E]},
$ai:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
i4:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.dM(a):u},
hi:function(a,b){return a.appendChild(b)},
$iE:1}
W.ct.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$au:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.aV.prototype={$iaV:1,
gm:function(a){return a.length}}
W.ht.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aV]},
$au:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aC:function(){return[W.aV]}}
W.hB.prototype={
j:function(a,b){return P.bd(a.get(H.O(b)))},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
ga0:function(a){var u=H.c([],[P.h])
this.H(a,new W.hC(u))
return u},
gm:function(a){return a.size},
$aa6:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.hC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hE.prototype={
gm:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.hO.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aX]},
$au:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aC:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.hP.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aY]},
$au:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aC:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gm:function(a){return a.length}}
W.hS.prototype={
j:function(a,b){return a.getItem(H.O(b))},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga0:function(a){var u=H.c([],[P.h])
this.H(a,new W.hT(u))
return u},
gm:function(a){return a.length},
$aa6:function(){return[P.h,P.h]},
$iG:1,
$aG:function(){return[P.h,P.h]}}
W.hT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:46}
W.aE.prototype={$iaE:1}
W.bS.prototype={}
W.dI.prototype={
a6:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
u=W.lY("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ag(t).af(0,new W.ag(u))
return t}}
W.hZ.prototype={
a6:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a6(u.createElement("table"),b,c,d)
u.toString
u=new W.ag(u)
s=u.gaz(u)
s.toString
u=new W.ag(s)
r=u.gaz(u)
t.toString
r.toString
new W.ag(t).af(0,new W.ag(r))
return t}}
W.i_.prototype={
a6:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a6(u.createElement("table"),b,c,d)
u.toString
u=new W.ag(u)
s=u.gaz(u)
t.toString
s.toString
new W.ag(t).af(0,new W.ag(s))
return t}}
W.cC.prototype={$icC:1}
W.b_.prototype={$ib_:1}
W.aF.prototype={$iaF:1}
W.i1.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aF]},
$au:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aC:function(){return[W.aF]}}
W.i2.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b_]},
$au:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aC:function(){return[W.b_]}}
W.i4.prototype={
gm:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.aG.prototype={$iaG:1}
W.i8.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b1]},
$au:function(){return[W.b1]},
$ii:1,
$ai:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aC:function(){return[W.b1]}}
W.i9.prototype={
gm:function(a){return a.length}}
W.bv.prototype={}
W.ir.prototype={
i:function(a){return String(a)}}
W.iI.prototype={
gm:function(a){return a.length}}
W.b4.prototype={
ghw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.at("deltaY is not supported"))},
ghv:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.at("deltaX is not supported"))},
$ib4:1}
W.cJ.prototype={
fN:function(a,b){return a.requestAnimationFrame(H.c3(H.m(b,{func:1,ret:-1,args:[P.a4]}),1))},
eq:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cK.prototype={$icK:1}
W.iS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.R]},
$au:function(){return[W.R]},
$ii:1,
$ai:function(){return[W.R]},
$ib:1,
$ab:function(){return[W.R]},
$aC:function(){return[W.R]}}
W.e_.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$iak)return!1
return a.left===u.gb9(b)&&a.top===u.gbc(b)&&a.width===u.gay(b)&&a.height===u.gaq(b)},
gF:function(a){return W.l6(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(a.width),C.d.gF(a.height))},
gaq:function(a){return a.height},
gay:function(a){return a.width}}
W.j5.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aO]},
$au:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aC:function(){return[W.aO]}}
W.ei.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$au:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.ji.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aZ]},
$au:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aC:function(){return[W.aZ]}}
W.jj.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aE]},
$au:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aC:function(){return[W.aE]}}
W.iQ.prototype={
H:function(a,b){var u,t,s,r,q
H.m(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga0(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga0:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.k(r[t],"$icK")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa6:function(){return[P.h,P.h]},
$aG:function(){return[P.h,P.h]}}
W.iT.prototype={
j:function(a,b){return this.a.getAttribute(H.O(b))},
gm:function(a){return this.ga0(this).length}}
W.iU.prototype={}
W.k3.prototype={}
W.iV.prototype={}
W.iW.prototype={
$1:function(a){return this.a.$1(H.k(a,"$il"))},
$S:27}
W.bx.prototype={
dY:function(a){var u
if($.e7.a===0){for(u=0;u<262;++u)$.e7.n(0,C.K[u],W.nf())
for(u=0;u<12;++u)$.e7.n(0,C.m[u],W.ng())}},
aH:function(a){return $.lJ().R(0,W.ci(a))},
ag:function(a,b,c){var u=$.e7.j(0,H.f(W.ci(a))+"::"+b)
if(u==null)u=$.e7.j(0,"*::"+b)
if(u==null)return!1
return H.k9(u.$4(a,b,c,this))},
$iar:1}
W.C.prototype={
gO:function(a){return new W.dd(a,this.gm(a),[H.cX(this,a,"C",0)])}}
W.dw.prototype={
aH:function(a){return C.a.cT(this.a,new W.hl(a))},
ag:function(a,b,c){return C.a.cT(this.a,new W.hk(a,b,c))},
$iar:1}
W.hl.prototype={
$1:function(a){return H.k(a,"$iar").aH(this.a)},
$S:16}
W.hk.prototype={
$1:function(a){return H.k(a,"$iar").ag(this.a,this.b,this.c)},
$S:16}
W.eq.prototype={
e4:function(a,b,c,d){var u,t,s
this.a.af(0,c)
u=b.bf(0,new W.jg())
t=b.bf(0,new W.jh())
this.b.af(0,u)
s=this.c
s.af(0,C.M)
s.af(0,t)},
aH:function(a){return this.a.R(0,W.ci(a))},
ag:function(a,b,c){var u=this,t=W.ci(a),s=u.c
if(s.R(0,H.f(t)+"::"+b))return u.d.hh(c)
else if(s.R(0,"*::"+b))return u.d.hh(c)
else{s=u.b
if(s.R(0,H.f(t)+"::"+b))return!0
else if(s.R(0,"*::"+b))return!0
else if(s.R(0,H.f(t)+"::*"))return!0
else if(s.R(0,"*::*"))return!0}return!1},
$iar:1}
W.jg.prototype={
$1:function(a){return!C.a.R(C.m,H.O(a))},
$S:15}
W.jh.prototype={
$1:function(a){return C.a.R(C.m,H.O(a))},
$S:15}
W.jl.prototype={
ag:function(a,b,c){if(this.dQ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.R(0,b)
return!1}}
W.jm.prototype={
$1:function(a){return"TEMPLATE::"+H.f(H.O(a))},
$S:28}
W.jk.prototype={
aH:function(a){var u=J.Z(a)
if(!!u.$icx)return!1
u=!!u.$io
if(u&&W.ci(a)==="foreignObject")return!1
if(u)return!0
return!1},
ag:function(a,b,c){if(b==="is"||C.c.bh(b,"on"))return!1
return this.aH(a)},
$iar:1}
W.dd.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scB(J.eS(u.a,t))
u.c=t
return!0}u.scB(null)
u.c=s
return!1},
gE:function(a){return this.d},
scB:function(a){this.d=H.H(a,H.w(this,0))},
$iaP:1}
W.ar.prototype={}
W.je.prototype={$inW:1}
W.eG.prototype={
c8:function(a){new W.jq(this).$2(a,null)},
aS:function(a,b){if(b==null)J.ko(a)
else b.removeChild(a)},
fR:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lN(a)
n=o.a.getAttribute("is")
H.k(a,"$iP")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.B(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.au(r)}t="element unprintable"
try{t=J.aI(a)}catch(r){H.au(r)}try{s=W.ci(a)
this.fQ(H.k(a,"$iP"),b,p,t,s,H.k(o,"$iG"),H.O(n))}catch(r){if(H.au(r) instanceof P.aJ)throw r
else{this.aS(a,b)
window
q="Removing corrupted element "+H.f(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aS(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aH(a)){o.aS(a,b)
window
u="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ag(a,"is",g)){o.aS(a,b)
window
u="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga0(f)
t=H.c(u.slice(0),[H.w(u,0)])
for(s=f.ga0(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.lP(r)
H.O(r)
if(!q.ag(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.f(e)+" "+r+'="'+H.f(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Z(a).$icC)o.c8(a.content)},
$inH:1}
W.jq.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fR(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aS(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.au(s)
r=H.k(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iE")}},
$S:29}
W.dZ.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ew.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
P.jx.prototype={
$2:function(a,b){this.a[a]=b},
$S:19}
P.fs.prototype={
gbr:function(){var u=this.b,t=H.an(u,"u",0),s=W.P
return new H.fS(new H.cI(u,H.m(new P.ft(),{func:1,ret:P.K,args:[t]}),[t]),H.m(new P.fu(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bF(this.gbr().a)},
j:function(a,b){var u=this.gbr()
return u.b.$1(J.jO(u.a,b))},
gO:function(a){var u=P.kC(this.gbr(),!1,W.P)
return new J.ao(u,u.length,[H.w(u,0)])},
$au:function(){return[W.P]},
$ai:function(){return[W.P]},
$ab:function(){return[W.P]}}
P.ft.prototype={
$1:function(a){return!!J.Z(H.k(a,"$iE")).$iP},
$S:25}
P.fu.prototype={
$1:function(a){return H.v(H.k(a,"$iE"),"$iP")},
$S:30}
P.j9.prototype={
gc3:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.w(this,0))},
gcV:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.w(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Z(b)
if(!!u.$iak){t=p.a
if(t==u.gb9(b)){s=p.b
if(s==u.gbc(b)){r=p.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.F(r)
q=H.w(p,0)
if(H.H(t+r,q)===u.gc3(b)){t=p.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.F(t)
u=H.H(s+t,q)===u.gcV(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u,t=this,s=t.a,r=J.bD(s),q=t.b,p=J.bD(q),o=t.c
if(typeof s!=="number")return s.C()
if(typeof o!=="number")return H.F(o)
u=H.w(t,0)
o=C.e.gF(H.H(s+o,u))
s=t.d
if(typeof q!=="number")return q.C()
if(typeof s!=="number")return H.F(s)
u=C.e.gF(H.H(q+s,u))
return P.mz(P.j7(P.j7(P.j7(P.j7(0,r),p),o),u))}}
P.ak.prototype={
gb9:function(a){return this.a},
gbc:function(a){return this.b},
gay:function(a){return this.c},
gaq:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.fK.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$au:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aC:function(){return[P.b8]}}
P.ba.prototype={$iba:1}
P.ho.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$au:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aC:function(){return[P.ba]}}
P.hv.prototype={
gm:function(a){return a.length}}
P.cx.prototype={$icx:1}
P.hY.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$au:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aC:function(){return[P.h]}}
P.o.prototype={
gcW:function(a){return new P.fs(a,new W.ag(a))},
a6:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.ar])
C.a.h(p,W.l5(null))
C.a.h(p,W.l7())
C.a.h(p,new W.jk())
c=new W.eG(new W.dw(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.o).ht(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ag(s)
q=p.gaz(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$io:1}
P.bc.prototype={$ibc:1}
P.ia.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$au:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aC:function(){return[P.bc]}}
P.ea.prototype={}
P.eb.prototype={}
P.el.prototype={}
P.em.prototype={}
P.ex.prototype={}
P.ey.prototype={}
P.eE.prototype={}
P.eF.prototype={}
P.eX.prototype={
gm:function(a){return a.length}}
P.eY.prototype={
j:function(a,b){return P.bd(a.get(H.O(b)))},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
ga0:function(a){var u=H.c([],[P.h])
this.H(a,new P.eZ(u))
return u},
gm:function(a){return a.size},
$aa6:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
P.eZ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.f_.prototype={
gm:function(a){return a.length}}
P.bG.prototype={}
P.hp.prototype={
gm:function(a){return a.length}}
P.dY.prototype={}
P.d2.prototype={$id2:1}
P.dA.prototype={$idA:1}
P.bR.prototype={
X:function(a,b,c){return a.uniform1f(b,c)},
be:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dC:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dD:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibR:1}
P.dD.prototype={$idD:1}
P.dP.prototype={$idP:1}
P.hQ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.V(b,a,null,null,null))
return P.bd(a.item(b))},
A:function(a,b){return this.j(a,b)},
$au:function(){return[[P.G,,,]]},
$ii:1,
$ai:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aC:function(){return[[P.G,,,]]}}
P.et.prototype={}
P.eu.prototype={}
O.a1.prototype={
bj:function(a){var u=this
u.seC(H.c([],[a]))
u.scF(null)
u.scC(null)
u.scG(null)},
c9:function(a,b,c){var u=this,t=H.an(u,"a1",0)
H.m(b,{func:1,ret:P.K,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.t,[P.i,t]]}
H.m(a,t)
H.m(c,t)
u.scF(b)
u.scC(a)
u.scG(c)},
aY:function(a,b){return this.c9(a,null,b)},
fn:function(a){var u
H.n(a,"$ii",[H.an(this,"a1",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dX:function(a,b){var u
H.n(b,"$ii",[H.an(this,"a1",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.ao(u,u.length,[H.w(u,0)])},
A:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.an(s,"a1",0)
H.H(b,r)
r=[r]
if(H.B(s.fn(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dX(t,H.c([b],r))}},
seC:function(a){this.a=H.n(a,"$ib",[H.an(this,"a1",0)],"$ab")},
scF:function(a){this.b=H.m(a,{func:1,ret:P.K,args:[[P.i,H.an(this,"a1",0)]]})},
scC:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.t,[P.i,H.an(this,"a1",0)]]})},
scG:function(a){H.m(a,{func:1,ret:-1,args:[P.t,[P.i,H.an(this,"a1",0)]]})},
$ii:1}
O.co.prototype={
gm:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.U():u},
aA:function(){var u=this.b
if(u!=null)u.B(null)},
gW:function(a){var u=this.a
if(u.length>0)return C.a.gb8(u)
else return V.ds()},
dn:function(a){var u=this.a
if(a==null)C.a.h(u,V.ds())
else C.a.h(u,a)
this.aA()},
c0:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}},
sbt:function(a){this.a=H.n(a,"$ib",[V.ai],"$ab")}}
E.f0.prototype={}
E.ah.prototype={
sca:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().S(0,s.gdj())
u=s.c
if(u!=null)u.gv().h(0,s.gdj())
t=new D.N("shape",r,s.c,[F.dE])
t.b=!0
s.ba(t)}},
ah:function(a,b){var u
for(u=this.y.a,u=new J.ao(u,u.length,[H.w(u,0)]);u.u();)u.d.ah(0,b)},
aM:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.gW(s))
s.aA()
a.dq(t.f)
s=a.dy
u=(s&&C.a).gb8(s)
if(u!=null&&t.d!=null)u.i7(a,t)
for(s=t.y.a,s=new J.ao(s,s.length,[H.w(s,0)]);s.u();)s.d.aM(a)
a.dm()
a.dx.c0()},
ba:function(a){var u=this.z
if(u!=null)u.B(a)},
a3:function(){return this.ba(null)},
dk:function(a){H.k(a,"$iy")
this.e=null
this.ba(a)},
hV:function(){return this.dk(null)},
di:function(a){this.ba(H.k(a,"$iy"))},
hS:function(){return this.di(null)},
hR:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ii",[E.ah],"$ai")
for(u=b.length,t=this.gdh(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bI()
o.sa9(null)
o.saF(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
hU:function(a,b){var u,t
H.n(b,"$ii",[E.ah],"$ai")
for(u=b.gO(b),t=this.gdh();u.u();)u.gE(u).gv().S(0,t)
this.a3()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seh:function(a,b){this.y=H.n(b,"$ia1",[E.ah],"$aa1")},
$icq:1}
E.hx.prototype={
dT:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.av(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.co()
t=[V.ai]
u.sbt(H.c([],t))
u.b=null
u.gv().h(0,new E.hy(s))
s.cy=u
u=new O.co()
u.sbt(H.c([],t))
u.b=null
u.gv().h(0,new E.hz(s))
s.db=u
u=new O.co()
u.sbt(H.c([],t))
u.b=null
u.gv().h(0,new E.hA(s))
s.dx=u
s.sh4(H.c([],[O.bT]))
u=s.dy;(u&&C.a).h(u,null)
s.sh_(new H.a0([P.h,A.cy]))},
gi3:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gW(s)
u=t.db
u=t.z=s.q(0,u.gW(u))
s=u}return s},
dq:function(a){var u=this.dy,t=a==null?(u&&C.a).gb8(u):a;(u&&C.a).h(u,t)},
dm:function(){var u=this.dy
if(u.length>1)u.pop()},
sh4:function(a){this.dy=H.n(a,"$ib",[O.bT],"$ab")},
sh_:function(a){this.fr=H.n(a,"$iG",[P.h,A.cy],"$aG")}}
E.hy.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.ch=u.z=null},
$S:7}
E.hz.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:7}
E.hA.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.cx=u.ch=null},
$S:7}
E.dL.prototype={
ci:function(a){H.k(a,"$iy")
this.ds()},
cg:function(){return this.ci(null)},
ghH:function(){var u,t=this,s=Date.now(),r=C.e.a_(P.kv(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.av(s,!1)
return u/r},
cJ:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.F(r)
u=C.d.dc(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.d.dc(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kV(C.j,s.gi8())}},
ds:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.i3(this),{func:1,ret:-1,args:[P.a4]})
C.w.eq(u)
C.w.fN(u,W.le(t,P.a4))}},
i6:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cJ()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.av(r,!1)
s.y=P.kv(r-s.r.a).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aA()
r=s.db
C.a.sm(r.a,0)
r.aA()
r=s.dx
C.a.sm(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aM(p.e)}s=p.z
if(s!=null)s.B(null)}catch(q){u=H.au(q)
t=H.c6(q)
P.kj("Error: "+H.f(u))
P.kj("Stack: "+H.f(t))
throw H.j(u)}}}
E.i3.prototype={
$1:function(a){var u
H.lo(a)
u=this.a
if(u.ch){u.ch=!1
u.i6()}},
$S:47}
Z.dW.prototype={$inB:1}
Z.d3.prototype={
b4:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.au(s)
t=P.z('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.f(u))
throw H.j(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.iJ.prototype={$inC:1}
Z.d4.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b4:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].b4(a)},
dB:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aM:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aI(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
sey:function(a){this.b=H.n(a,"$ib",[Z.cl],"$ab")},
$inK:1}
Z.cl.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.cw(this.c))+"'")+"]"}}
Z.bw.prototype={
gcb:function(a){var u=this.a,t=(u&$.bh().a)!==0?3:0
if((u&$.bg().a)!==0)t+=3
if((u&$.bf().a)!==0)t+=3
if((u&$.bB().a)!==0)t+=2
if((u&$.bC().a)!==0)t+=3
if((u&$.cY().a)!==0)t+=3
if((u&$.cZ().a)!==0)t+=4
if((u&$.c9().a)!==0)++t
return(u&$.be().a)!==0?t+4:t},
hj:function(a){var u,t=$.bh(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0)if(u===a)return t
return $.lI()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bw))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.bh().a)!==0)C.a.h(u,"Pos")
if((t&$.bg().a)!==0)C.a.h(u,"Norm")
if((t&$.bf().a)!==0)C.a.h(u,"Binm")
if((t&$.bB().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bC().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cY().a)!==0)C.a.h(u,"Clr3")
if((t&$.cZ().a)!==0)C.a.h(u,"Clr4")
if((t&$.c9().a)!==0)C.a.h(u,"Weight")
if((t&$.be().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.f3.prototype={}
D.bI.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.m(b,u)
if(this.a==null)this.sa9(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.y]})
u=s.a
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.b
t=(u&&C.a).S(u,b)||t}return t},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.y()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.kC(u,!0,{func:1,ret:-1,args:[D.y]}),new D.fm(q))
u=r.b
if(u!=null){r.saF(H.c([],[{func:1,ret:-1,args:[D.y]}]))
C.a.H(u,new D.fn(q))}return!0},
aw:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}},
sa9:function(a){this.a=H.n(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")},
saF:function(a){this.b=H.n(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.fm.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.fn.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.y.prototype={}
D.bL.prototype={}
D.bM.prototype={}
D.N.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.d5.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.dh.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dh))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.fJ.prototype={
i_:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
hW:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
sfG:function(a){this.d=H.n(a,"$ikR",[P.t],"$akR")}}
X.dm.prototype={}
X.fP.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.ac(o.a+n*m,o.b+u*t)
t=q.a.gaJ()
r=new X.b9(a,V.bu(),q.x,t,s)
r.b=!0
q.z=new P.av(p,!1)
q.x=s
return r},
c_:function(a,b){this.r=a.a
return!1},
aX:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dI()
if(typeof u!=="number")return u.ai()
this.r=(u&~t)>>>0
return!1},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aQ(a,b))
return!0},
i0:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaJ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.cp(new V.S(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
fc:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dm(c,r.a.gaJ(),b)
s.b=!0
t.B(s)
r.y=new P.av(u,!1)
r.x=V.bu()}}
X.aq.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aq))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.B(this.b)?"Alt+":""
return u+(H.B(this.c)?"Shift+":"")}}
X.b9.prototype={}
X.hd.prototype={
bp:function(a,b,c){var u=this,t=new P.av(Date.now(),!1),s=u.a.gaJ(),r=new X.b9(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c_:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bp(a,b,!0))
return!0},
aX:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dI()
if(typeof t!=="number")return t.ai()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bp(a,b,!0))
return!0},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bp(a,b,!1))
return!0},
i1:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaJ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.cp(new V.S(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gd1:function(){var u=this.b
return u==null?this.b=D.U():u},
gc6:function(){var u=this.c
return u==null?this.c=D.U():u},
gdf:function(){var u=this.d
return u==null?this.d=D.U():u}}
X.cp.prototype={}
X.hu.prototype={}
X.dN.prototype={}
X.i7.prototype={
aQ:function(a,b){var u,t,s,r,q=this
H.n(a,"$ib",[V.ac],"$ab")
u=new P.av(Date.now(),!1)
t=a.length>0?a[0]:V.bu()
s=q.a.gaJ()
r=new X.dN(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
hZ:function(a){var u
H.n(a,"$ib",[V.ac],"$ab")
u=this.b
if(u==null)return!1
u.B(this.aQ(a,!0))
return!0},
hX:function(a){var u
H.n(a,"$ib",[V.ac],"$ab")
u=this.c
if(u==null)return!1
u.B(this.aQ(a,!0))
return!0},
hY:function(a){var u
H.n(a,"$ib",[V.ac],"$ab")
u=this.d
if(u==null)return!1
u.B(this.aQ(a,!1))
return!0}}
X.dS.prototype={
gaJ:function(){var u=this.a,t=C.i.gcX(u).c
t.toString
u=C.i.gcX(u).d
u.toString
return V.kP(0,0,t,u)},
cv:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dh(u,new X.aq(t,a.altKey,a.shiftKey))},
aG:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.aq(t,a.altKey,a.shiftKey)},
bH:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.aq(t,a.altKey,a.shiftKey)},
ao:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.D()
u=t.top
if(typeof r!=="number")return r.D()
return new V.ac(s-q,r-u)},
aR:function(a){return new V.S(a.movementX,a.movementY)},
bE:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.ac])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=C.d.aa(r.pageX)
C.d.aa(r.pageY)
p=o.left
C.d.aa(r.pageX)
C.a.h(n,new V.ac(q-p,C.d.aa(r.pageY)-o.top))}return n},
am:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.d5(u,new X.aq(t,a.altKey,a.shiftKey))},
bu:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.D()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.D()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f6:function(a){this.f=!0},
eT:function(a){this.f=!1},
f0:function(a){H.k(a,"$ia7")
if(H.B(this.f)&&this.bu(a))a.preventDefault()},
fa:function(a){var u
H.k(a,"$iaR")
if(!H.B(this.f))return
u=this.cv(a)
this.b.i_(u)},
f8:function(a){var u
H.k(a,"$iaR")
if(!H.B(this.f))return
u=this.cv(a)
this.b.hW(u)},
fe:function(a){var u,t,s,r,q=this
H.k(a,"$ia7")
u=q.a
u.focus()
q.f=!0
q.aG(a)
if(H.B(q.x)){t=q.am(a)
s=q.aR(a)
if(q.d.c_(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.am(a)
r=q.ao(a)
if(q.c.c_(t,r))a.preventDefault()},
fi:function(a){var u,t,s,r=this
H.k(a,"$ia7")
r.aG(a)
u=r.am(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ao(a)
if(r.c.aX(u,s))a.preventDefault()},
f4:function(a){var u,t,s,r=this
H.k(a,"$ia7")
if(!r.bu(a)){r.aG(a)
u=r.am(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ao(a)
if(r.c.aX(u,s))a.preventDefault()}},
fg:function(a){var u,t,s,r=this
H.k(a,"$ia7")
r.aG(a)
u=r.am(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ao(a)
if(r.c.aW(u,s))a.preventDefault()},
f2:function(a){var u,t,s,r=this
H.k(a,"$ia7")
if(!r.bu(a)){r.aG(a)
u=r.am(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ao(a)
if(r.c.aW(u,s))a.preventDefault()}},
fk:function(a){var u,t,s=this
H.k(a,"$ib4")
s.aG(a)
u=new V.S((a&&C.v).ghv(a),C.v.ghw(a)).t(0,180)
if(H.B(s.x)){if(s.d.i0(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.ao(a)
if(s.c.i1(u,t))a.preventDefault()},
fm:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.am(s.y)
t=s.ao(s.y)
s.d.fc(u,t,r)}},
fC:function(a){var u,t=this
H.k(a,"$iaG")
t.a.focus()
t.f=!0
t.bH(a)
u=t.bE(a)
if(t.e.hZ(u))a.preventDefault()},
fw:function(a){var u
H.k(a,"$iaG")
this.bH(a)
u=this.bE(a)
if(this.e.hX(u))a.preventDefault()},
fA:function(a){var u
H.k(a,"$iaG")
this.bH(a)
u=this.bE(a)
if(this.e.hY(u))a.preventDefault()},
ser:function(a){this.z=H.n(a,"$ib",[[P.cB,P.L]],"$ab")}}
D.bn.prototype={
ak:function(a){var u
H.k(a,"$iy")
u=this.r
if(u!=null)u.B(a)},
e_:function(){return this.ak(null)},
$ia5:1,
$icq:1}
D.a5.prototype={$icq:1}
D.di.prototype={
ak:function(a){var u=this.x
if(u!=null)u.B(a)},
cE:function(a){var u
H.k(a,"$iy")
u=this.y
if(u!=null)u.B(a)},
fb:function(){return this.cE(null)},
fp:function(a){var u,t,s
H.n(a,"$ii",[D.a5],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.ej(s))return!1}return!0},
eN:function(a,b){var u,t,s,r,q,p,o,n=D.a5
H.n(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gcD(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=H.k(b[q],"$ia5")
if(p instanceof D.bn)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bI()
o.sa9(null)
o.saF(null)
o.c=null
o.d=0
p.r=o}H.m(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bL([n])
n.b=!0
this.ak(n)},
fu:function(a,b){var u,t,s,r=D.a5
H.n(b,"$ii",[r],"$ai")
for(u=b.gO(b),t=this.gcD();u.u();){s=u.gE(u)
C.a.S(this.e,s)
s.gv().S(0,t)}r=new D.bM([r])
r.b=!0
this.ak(r)},
ej:function(a){var u=C.a.R(this.e,a)
return u},
sep:function(a){this.e=H.n(a,"$ib",[D.bn],"$ab")},
sfD:function(a){this.f=H.n(a,"$ib",[D.dz],"$ab")},
sh2:function(a){this.r=H.n(a,"$ib",[D.dG],"$ab")},
$ai:function(){return[D.a5]},
$aa1:function(){return[D.a5]}}
D.dz.prototype={$ia5:1,$icq:1}
D.dG.prototype={$ia5:1,$icq:1}
V.a2.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.bl.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bl))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.fl.prototype={}
V.dr.prototype={
a8:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.D])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dr))return!1
u=b.a
t=$.M().a
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
i:function(a){var u,t,s,r,q=this,p=[P.D],o=V.c5(H.c([q.a,q.d,q.r],p),3,0),n=V.c5(H.c([q.b,q.e,q.x],p),3,0),m=V.c5(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.d(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.d(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.d(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.d(o,1)
r=" "+o[1]+", "
if(1>=t)return H.d(n,1)
r=r+n[1]+", "
if(1>=s)return H.d(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.d(o,2)
p=" "+o[2]+", "
if(2>=t)return H.d(n,2)
p=p+n[2]+", "
if(2>=s)return H.d(m,2)
return r+(p+m[2]+"]")}}
V.ai.prototype={
a8:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.D])
return t},
dd:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.M().a)return V.ds()
u=1/b1
t=-n
s=-a0
return V.aT((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aT(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bd:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Q(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
c5:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.af(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.M().a
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
I:function(a){var u,t,s,r,q,p=this,o=[P.D],n=V.c5(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c5(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c5(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c5(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.d(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.d(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.d(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.d(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.d(n,1)
q=q+n[1]+", "
if(1>=t)return H.d(m,1)
q=q+m[1]+", "
if(1>=s)return H.d(l,1)
q=q+l[1]+", "
if(1>=r)return H.d(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.d(n,2)
u=u+n[2]+", "
if(2>=t)return H.d(m,2)
u=u+m[2]+", "
if(2>=s)return H.d(l,2)
u=u+l[2]+", "
if(2>=r)return H.d(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.d(n,3)
q=q+n[3]+", "
if(3>=t)return H.d(m,3)
q=q+m[3]+", "
if(3>=s)return H.d(l,3)
q=q+l[3]+", "
if(3>=r)return H.d(k,3)
return u+(q+k[3]+"]")},
N:function(){return this.I("")}}
V.ac.prototype={
D:function(a,b){return new V.ac(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.af.prototype={
C:function(a,b){return new V.af(this.a+b.a,this.b+b.b,this.c+b.c)},
D:function(a,b){return new V.af(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.af(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.dC.prototype={
ga2:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dC))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.S.prototype={
bV:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.S(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.kZ
return u==null?$.kZ=new V.S(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.S(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=this.a
s=$.M()
s.toString
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.Q.prototype={
bV:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ap:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.Q(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.Q(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.M().a)return V.cH()
return new V.Q(this.a/b,this.b/b,this.c/b)},
de:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
U.f4.prototype={
bk:function(a){var u=V.nA(a,this.c,this.b)
return u},
gv:function(){var u=this.y
return u==null?this.y=D.U():u},
K:function(a){var u=this.y
if(u!=null)u.B(a)},
sc7:function(a,b){},
sbX:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.M().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bk(u)}s=new D.N("maximumLocation",s,t.b,[P.D])
s.b=!0
t.K(s)}},
sbZ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.M().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bk(u)}s=new D.N("minimumLocation",s,t.c,[P.D])
s.b=!0
t.K(s)}},
sa1:function(a,b){var u,t=this
b=t.bk(b)
u=t.d
if(!(Math.abs(u-b)<$.M().a)){t.d=b
u=new D.N("location",u,b,[P.D])
u.b=!0
t.K(u)}},
sbY:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.M().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.N("maximumVelocity",r,a,[P.D])
r.b=!0
s.K(r)}},
sP:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.M().a)){u.f=a
t=new D.N("velocity",t,a,[P.D])
t.b=!0
u.K(t)}},
sbN:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.N("dampening",u,a,[P.D])
u.b=!0
this.K(u)}},
ah:function(a,b){var u,t,s,r=this,q=r.f,p=$.M().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.M().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sP(u)}}}
U.d7.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.U():u},
aN:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d7))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.ck.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.U():u},
K:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.B(a)},
Y:function(){return this.K(null)},
eL:function(a,b){var u,t,s,r,q,p,o,n=U.a8
H.n(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaB(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gv()
o.toString
H.m(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bL([n])
n.b=!0
this.K(n)},
fs:function(a,b){var u,t,s=U.a8
H.n(b,"$ii",[s],"$ai")
for(u=b.gO(b),t=this.gaB();u.u();)u.gE(u).gv().S(0,t)
s=new D.bM([s])
s.b=!0
this.K(s)},
aN:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a4()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ao(r,r.length,[H.w(r,0)]),u=null;r.u();){q=r.d
if(q!=null){t=q.aN(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.ds():u
r=s.e
if(r!=null)r.aw(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ck))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.T(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a8]},
$aa1:function(){return[U.a8]},
$ia8:1}
U.a8.prototype={}
U.dT.prototype={
gv:function(){var u=this.cy
return u==null?this.cy=D.U():u},
K:function(a){var u
H.k(a,"$iy")
u=this.cy
if(u!=null)u.B(a)},
Y:function(){return this.K(null)},
aT:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd1().h(0,u.gbv())
u.a.c.gdf().h(0,u.gbx())
u.a.c.gc6().h(0,u.gbz())
return!0},
bw:function(a){var u=this
H.k(a,"$iy")
if(!J.T(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
by:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.k(a,"$iy"),"$ib9")
if(!H.B(n.y))return
if(H.B(n.x)){u=a.d.D(0,a.y)
u=new V.S(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.B(n.d)){u=a.c
t=a.d.D(0,a.y)
u=new V.S(t.a,t.b).q(0,2).t(0,u.ga2())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sP(u*10*s)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=new V.S(s.a,s.b).q(0,2).t(0,u.ga2())
s=n.b
q=r.a
if(typeof q!=="number")return q.M()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
n.b.sP(0)
t=t.D(0,a.z)
n.Q=new V.S(t.a,t.b).q(0,2).t(0,u.ga2())}n.Y()},
bA:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.B(r.y))return
r.y=!1
if(H.B(r.x))return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sP(t*10*s)
r.Y()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a4()
if(q<p){r.ch=p
u=b.y
r.b.ah(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aT(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia8:1}
U.dU.prototype={
gv:function(){var u=this.fx
return u==null?this.fx=D.U():u},
K:function(a){var u
H.k(a,"$iy")
u=this.fx
if(u!=null)u.B(a)},
Y:function(){return this.K(null)},
aT:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd1().h(0,s.gbv())
s.a.c.gdf().h(0,s.gbx())
s.a.c.gc6().h(0,s.gbz())
u=s.a.d
t=u.f
u=t==null?u.f=D.U():t
u.h(0,s.geD())
u=s.a.d
t=u.d
u=t==null?u.d=D.U():t
u.h(0,s.geF())
u=s.a.e
t=u.b
u=t==null?u.b=D.U():t
u.h(0,s.gha())
u=s.a.e
t=u.d
u=t==null?u.d=D.U():t
u.h(0,s.gh8())
u=s.a.e
t=u.c
u=t==null?u.c=D.U():t
u.h(0,s.gh6())
return!0},
ae:function(a){var u=a.a,t=a.b
if(H.B(this.f)){if(typeof u!=="number")return u.M()
u=-u}if(H.B(this.r)){if(typeof t!=="number")return t.M()
t=-t}return new V.S(u,t)},
bw:function(a){var u=this
a=H.v(H.k(a,"$iy"),"$ib9")
if(!J.T(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
by:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.k(a,"$iy"),"$ib9")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.D(0,a.y)
u=new V.S(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.D(0,a.y)
u=n.ae(new V.S(t.a,t.b).q(0,2).t(0,u.ga2()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.ae(new V.S(s.a,s.b).q(0,2).t(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.D(0,a.z)
n.dx=n.ae(new V.S(t.a,t.b).q(0,2).t(0,u.ga2()))}n.Y()},
bA:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sP(-t*10*u)
r.Y()}},
eE:function(a){var u=this
if(H.v(H.k(a,"$iy"),"$idm").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eG:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.k(a,"$iy"),"$ib9")
if(!J.T(n.d,a.x.b))return
u=a.c
t=a.d
s=t.D(0,a.y)
r=n.ae(new V.S(s.a,s.b).q(0,2).t(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.D(0,a.z)
n.dx=n.ae(new V.S(t.a,t.b).q(0,2).t(0,u.ga2()))
n.Y()},
hb:function(a){var u=this
H.k(a,"$iy")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h9:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.k(a,"$iy"),"$idN")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.D(0,a.y)
u=new V.S(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.D(0,a.y)
u=n.ae(new V.S(t.a,t.b).q(0,2).t(0,u.ga2()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.ae(new V.S(s.a,s.b).q(0,2).t(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.D(0,a.z)
n.dx=n.ae(new V.S(t.a,t.b).q(0,2).t(0,u.ga2()))}n.Y()},
h7:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sP(-t*10*u)
r.Y()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a4()
if(q<p){r.dy=p
u=b.y
r.c.ah(0,u)
r.b.ah(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aT(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.aT(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia8:1}
U.dV.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.U():u},
K:function(a){var u=this.r
if(u!=null)u.B(a)},
aT:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.U():t
t=r.geI()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.U():s).h(0,t)
return!0},
eJ:function(a){var u,t,s,r,q=this
H.k(a,"$iy")
if(!J.T(q.b,q.a.b.c))return
H.v(a,"$icp")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.N("zoom",u,r,[P.D])
u.b=!0
q.K(u)}},
aN:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aT(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia8:1}
M.db.prototype={
al:function(a){var u
H.k(a,"$iy")
u=this.y
if(u!=null)u.B(a)},
e1:function(){return this.al(null)},
eX:function(a,b){var u,t,s,r,q,p,o,n=E.ah
H.n(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gad(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bI()
o.sa9(null)
o.saF(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bL([n])
n.b=!0
this.al(n)},
eZ:function(a,b){var u,t,s=E.ah
H.n(b,"$ii",[s],"$ai")
for(u=b.gO(b),t=this.gad();u.u();)u.gE(u).gv().S(0,t)
s=new D.bM([s])
s.b=!0
this.al(s)},
sdv:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().S(0,t.gad())
u=t.d
t.d=a
if(a!=null)a.gv().h(0,t.gad())
s=new D.N("technique",u,t.d,[O.bT])
s.b=!0
t.al(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.U():u},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dq(f.d)
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
o=C.d.aa(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.d.aa(p*r)
p=C.d.aa(q.c*s)
a.c=p
q=C.d.aa(q.d*r)
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
i=V.aT(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dn(i)
t=$.kI
if(t==null){t=V.kK()
q=V.k2()
p=$.l_
t=V.kE(t,q,p==null?$.l_=new V.Q(0,0,-1):p)
$.kI=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aN(0,a,u)
if(g!=null)h=g.q(0,h)}a.db.dn(h)
u=f.d
if(u!=null)u.ah(0,a)
for(u=f.e.a,u=new J.ao(u,u.length,[H.w(u,0)]);u.u();)u.d.ah(0,a)
for(u=f.e.a,u=new J.ao(u,u.length,[H.w(u,0)]);u.u();)u.d.aM(a)
f.b.toString
a.cy.c0()
a.db.c0()
f.c.toString
a.dm()},
se0:function(a,b){this.e=H.n(b,"$ia1",[E.ah],"$aa1")},
$inI:1}
A.d0.prototype={}
A.eW.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hC:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hx:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ae.prototype={
gab:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ae))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fV.prototype={
dS:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.bb("")
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
A.mT(c3,u)
A.mV(c3,u)
A.mU(c3,u)
A.mX(c3,u)
A.mY(c3,u)
A.mW(c3,u)
A.mZ(c3,u)
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
m=A.mS(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cw(n,35633)
b8.f=b8.cw(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.B(H.k9(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.A(P.z("Failed to link shader: "+H.f(l)))}b8.fX()
b8.fZ()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.v(b8.y.T(0,"invViewMat"),"$ias")
if(t)b8.dy=H.v(b8.y.T(0,"objMat"),"$ias")
if(r)b8.fr=H.v(b8.y.T(0,"viewObjMat"),"$ias")
b8.fy=H.v(b8.y.T(0,"projViewObjMat"),"$ias")
if(c3.ry)b8.k1=H.v(b8.y.T(0,"txt2DMat"),"$icG")
if(c3.x1)b8.k2=H.v(b8.y.T(0,"txtCubeMat"),"$ias")
if(c3.x2)b8.k3=H.v(b8.y.T(0,"colorMat"),"$ias")
b8.sed(H.c([],[A.as]))
t=c3.y2
if(t>0){b8.k4=H.k(b8.y.T(0,"bendMatCount"),"$iax")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.A(P.z(c0+q+c1));(s&&C.a).h(s,H.v(j,"$ias"))}}if(c3.a.a)b8.r2=H.v(b8.y.T(0,"emissionClr"),"$iX")
if(c3.b.a)b8.x1=H.v(b8.y.T(0,"ambientClr"),"$iX")
if(c3.c.a)b8.y2=H.v(b8.y.T(0,"diffuseClr"),"$iX")
if(c3.d.a)b8.d3=H.v(b8.y.T(0,"invDiffuseClr"),"$iX")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.d5=H.v(b8.y.T(0,"shininess"),"$ia9")
if(t)b8.d4=H.v(b8.y.T(0,"specularClr"),"$iX")}if(c3.cy){b8.d6=H.v(b8.y.T(0,"envSampler"),"$ibX")
if(c3.r.a)b8.d7=H.v(b8.y.T(0,"reflectClr"),"$iX")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.d8=H.v(b8.y.T(0,"refraction"),"$ia9")
if(t)b8.d9=H.v(b8.y.T(0,"refractClr"),"$iX")}}if(c3.y.a)b8.da=H.v(b8.y.T(0,"alpha"),"$ia9")
t=P.t
s=[t,A.ax]
b8.seo(new H.a0(s))
b8.se2(new H.a0([t,[P.b,A.bU]]))
b8.sfE(new H.a0(s))
b8.sfF(new H.a0([t,[P.b,A.bV]]))
b8.sh1(new H.a0(s))
b8.se3(new H.a0([t,[P.b,A.bY]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.bU],i=0;i<t.length;t.length===s||(0,H.x)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.f(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ai()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.A(P.z(c0+d+c1))
H.v(j,"$iX")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.A(P.z(c0+d+c1))
H.v(c,"$iX")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.A(P.z(c0+d+c1))
H.v(b,"$iX")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.A(P.z(c0+d+c1))
H.v(j,"$iX")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.A(P.z(c0+d+c1))
H.v(c,"$iX")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.A(P.z(c0+o+c1))
H.v(b,"$ibW")
a2=b}else a2=b9
C.a.h(e,new A.bU(a1,a0,a,j,c,a2))}b8.bP.n(0,g,e)
q=b8.bO
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.z(c0+o+c1))
q.n(0,g,H.k(j,"$iax"))}for(t=c3.Q,s=t.length,r=[A.bV],i=0;i<t.length;t.length===s||(0,H.x)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.f(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.A(P.z(c0+o+c1))
H.v(j,"$iX")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.A(P.z(c0+o+c1))
H.v(c,"$iX")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.A(P.z(c0+o+c1))
H.v(b,"$iX")
if(typeof g!=="number")return g.ai()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.A(P.z(c0+o+c1))
H.v(a3,"$icG")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.z(c0+o+c1))
H.v(a3,"$ibX")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.z(c0+o+c1))
H.v(a3,"$ibX")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.A(P.z(c0+o+c1))
H.v(a5,"$icF")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.A(P.z(c0+o+c1))
H.v(a3,"$ia9")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.A(P.z(c0+o+c1))
H.v(a5,"$ia9")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.A(P.z(c0+o+c1))
H.v(a8,"$ia9")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.bV(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bR.n(0,g,e)
q=b8.bQ
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.z(c0+o+c1))
q.n(0,g,H.k(j,"$iax"))}for(t=c3.ch,s=t.length,r=[A.bY],i=0;i<t.length;t.length===s||(0,H.x)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.f(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.A(P.z(c0+o+c1))
H.v(j,"$iX")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.A(P.z(c0+o+c1))
H.v(c,"$iX")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.A(P.z(c0+o+c1))
H.v(b,"$iX")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.A(P.z(c0+o+c1))
H.v(a3,"$iX")
if(typeof g!=="number")return g.ai()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.A(P.z(c0+o+c1))
H.v(a5,"$iX")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.A(P.z(c0+o+c1))
H.v(a8,"$iX")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.A(P.z(c0+o+c1))
H.v(b2,"$ia9")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.A(P.z(c0+o+c1))
H.v(b3,"$ia9")
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
if(a5==null)H.A(P.z(c0+d+c1))
H.v(a5,"$icF")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.A(P.z(c0+d+c1))
H.v(a5,"$ia9")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.A(P.z(c0+d+c1))
H.v(a8,"$ia9")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.A(P.z(c0+d+c1))
H.v(a5,"$ia9")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.A(P.z(c0+d+c1))
H.v(a8,"$ia9")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.A(P.z(c0+d+c1))
H.v(b2,"$ia9")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.A(P.z(c0+d+c1))
H.v(a5,"$ibW")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.A(P.z(c0+o+c1))
H.v(a5,"$ibW")
a6=a5}else a6=b9
C.a.h(e,new A.bY(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bT.n(0,g,e)
q=b8.bS
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.z(c0+o+c1))
q.n(0,g,H.k(j,"$iax"))}}},
fT:function(a,b){},
sed:function(a){this.r1=H.n(a,"$ib",[A.as],"$ab")},
seo:function(a){this.bO=H.n(a,"$iG",[P.t,A.ax],"$aG")},
se2:function(a){this.bP=H.n(a,"$iG",[P.t,[P.b,A.bU]],"$aG")},
sfE:function(a){this.bQ=H.n(a,"$iG",[P.t,A.ax],"$aG")},
sfF:function(a){this.bR=H.n(a,"$iG",[P.t,[P.b,A.bV]],"$aG")},
sh1:function(a){this.bS=H.n(a,"$iG",[P.t,A.ax],"$aG")},
se3:function(a){this.bT=H.n(a,"$iG",[P.t,[P.b,A.bY]],"$aG")}}
A.aB.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.aC.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.aD.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.fY.prototype={
i:function(a){return this.aV}}
A.bU.prototype={}
A.bV.prototype={}
A.bY.prototype={}
A.cy.prototype={
dV:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.k9(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.j(P.z("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
fX:function(){var u,t,s,r=this,q=H.c([],[A.d0]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d0(p,t.name,s))}r.x=new A.eW(q)},
fZ:function(){var u,t,s,r=this,q=H.c([],[A.dO]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hu(t.type,t.size,t.name,s))}r.y=new A.il(q)},
aE:function(a,b,c){var u=this.a
if(a===1)return new A.ax(u,b,c)
else return A.k1(u,this.r,b,a,c)},
el:function(a,b,c){var u=this.a
if(a===1)return new A.bW(u,b,c)
else return A.k1(u,this.r,b,a,c)},
em:function(a,b,c){var u=this.a
if(a===1)return new A.bX(u,b,c)
else return A.k1(u,this.r,b,a,c)},
b3:function(a,b){return new P.e4(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hu:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aE(b,c,d)
case 5121:return u.aE(b,c,d)
case 5122:return u.aE(b,c,d)
case 5123:return u.aE(b,c,d)
case 5124:return u.aE(b,c,d)
case 5125:return u.aE(b,c,d)
case 5126:return new A.a9(u.a,c,d)
case 35664:return new A.ih(u.a,c,d)
case 35665:return new A.X(u.a,c,d)
case 35666:return new A.cF(u.a,c,d)
case 35667:return new A.ii(u.a,c,d)
case 35668:return new A.ij(u.a,c,d)
case 35669:return new A.ik(u.a,c,d)
case 35674:return new A.im(u.a,c,d)
case 35675:return new A.cG(u.a,c,d)
case 35676:return new A.as(u.a,c,d)
case 35678:return u.el(b,c,d)
case 35680:return u.em(b,c,d)
case 35670:throw H.j(u.b3("BOOL",c))
case 35671:throw H.j(u.b3("BOOL_VEC2",c))
case 35672:throw H.j(u.b3("BOOL_VEC3",c))
case 35673:throw H.j(u.b3("BOOL_VEC4",c))
default:throw H.j(P.z("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.dO.prototype={}
A.il.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.j(0,b)
if(u==null)throw H.j(P.z("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ax.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)},
shd:function(a){H.n(a,"$ib",[P.t],"$ab")}}
A.a9.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.X.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.cF.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.im.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.cG.prototype={
ac:function(a){var u=new Float32Array(H.cU(H.n(a,"$ib",[P.D],"$ab")))
C.b.dD(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.as.prototype={
ac:function(a){var u=new Float32Array(H.cU(H.n(a,"$ib",[P.D],"$ab")))
C.b.dE(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.bW.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bX.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.jL.prototype={
$1:function(a){return new V.af(Math.cos(a),Math.sin(a),0)},
$S:36}
F.jy.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kn(n.$1(o),m)
m=J.kn(n.$1(o+3.141592653589793/p.c),m).D(0,l)
m=new V.Q(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.w(m)))
n=$.l0
if(n==null){n=new V.Q(1,0,0)
$.l0=n
t=n}else t=n
n=u.ap(!J.T(u,t)?V.l2():t)
s=n.t(0,Math.sqrt(n.w(n)))
n=s.ap(u)
t=n.t(0,Math.sqrt(n.w(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.q(0,n*m)
m=s.q(0,q*m)
m=l.C(0,new V.af(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.T(a.f,m)){a.f=m
n=a.a
if(n!=null)n.a3()}},
$S:37}
F.a3.prototype={
b6:function(){var u=this
if(!u.gd0()){C.a.S(u.a.a.d.b,u)
u.a.a.a3()}u.fJ()
u.fK()
u.fL()},
fU:function(a){this.a=a
C.a.h(a.d.b,this)},
fV:function(a){this.b=a
C.a.h(a.d.c,this)},
fW:function(a){this.c=a
C.a.h(a.d.d,this)},
fJ:function(){var u=this.a
if(u!=null){C.a.S(u.d.b,this)
this.a=null}},
fK:function(){var u=this.b
if(u!=null){C.a.S(u.d.c,this)
this.b=null}},
fL:function(){var u=this.c
if(u!=null){C.a.S(u.d.d,this)
this.c=null}},
gd0:function(){return this.a==null||this.b==null||this.c==null},
ec:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cH()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.de())return
return s.t(0,Math.sqrt(s.w(s)))},
eg:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.D(0,q)
r=new V.Q(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.w(r)))
r=t.D(0,q)
r=new V.Q(r.a,r.b,r.c)
r=s.ap(r.t(0,Math.sqrt(r.w(r))))
return r.t(0,Math.sqrt(r.w(r)))},
bL:function(){var u,t=this
if(t.d!=null)return!0
u=t.ec()
if(u==null){u=t.eg()
if(u==null)return!1}t.d=u
t.a.a.a3()
return!0},
eb:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cH()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.de())return
return s.t(0,Math.sqrt(s.w(s)))},
ef:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.M().a){l=d.D(0,g)
l=new V.Q(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.M(0)}else{p=(l-u.b)/r
l=d.D(0,g).q(0,p).C(0,g).D(0,j)
l=new V.Q(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.M(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.w(l)))
l=o.ap(q)
l=l.t(0,Math.sqrt(l.w(l))).ap(o)
q=l.t(0,Math.sqrt(l.w(l)))}return q},
bJ:function(){var u,t=this
if(t.e!=null)return!0
u=t.eb()
if(u==null){u=t.ef()
if(u==null)return!1}t.e=u
t.a.a.a3()
return!0},
gcY:function(a){var u=this
if(J.T(u.a,u.b))return!0
if(J.T(u.b,u.c))return!0
if(J.T(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
I:function(a){var u,t,s=this
if(s.gd0())return a+"disposed"
u=a+C.c.au(J.aI(s.a.e),0)+", "+C.c.au(J.aI(s.b.e),0)+", "+C.c.au(J.aI(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.I("")}}
F.fp.prototype={}
F.hN.prototype={
bW:function(a,b,c){var u,t=b.a
t.a.a.L()
t=t.e
u=c.a
u.a.a.L()
if(t==u.e){t=b.b
t.a.a.L()
t=t.e
u=c.b
u.a.a.L()
if(t==u.e){t=b.c
t.a.a.L()
t=t.e
u=c.c
u.a.a.L()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.L()
t=t.e
u=c.b
u.a.a.L()
if(t==u.e){t=b.b
t.a.a.L()
t=t.e
u=c.c
u.a.a.L()
if(t==u.e){t=b.c
t.a.a.L()
t=t.e
u=c.a
u.a.a.L()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.L()
t=t.e
u=c.c
u.a.a.L()
if(t==u.e){t=b.b
t.a.a.L()
t=t.e
u=c.a
u.a.a.L()
if(t==u.e){t=b.c
t.a.a.L()
t=t.e
u=c.b
u.a.a.L()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bt.prototype={}
F.fL.prototype={}
F.ie.prototype={}
F.bO.prototype={}
F.dE.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.U():u},
aI:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aI()||!1
if(!t.a.aI())u=!1
s=t.e
if(s!=null)s.aw(0)
return u},
hP:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.w(o,0)])
for(o=[F.aH];u.length!==0;){t=C.a.ghF(u)
C.a.dr(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.bW(0,t,q)){C.a.h(s,q)
C.a.dr(u,r)}}if(s.length>1)b.hO(s)}}p.a.L()
p.c.c1()
p.d.c1()
p.b.i5()
p.c.c2(new F.ie())
p.d.c2(new F.hN())
o=p.e
if(o!=null)o.aw(0)},
hp:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bh()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bg().a)!==0)++s
if((t&$.bf().a)!==0)++s
if((t&$.bB().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.cY().a)!==0)++s
if((t&$.cZ().a)!==0)++s
if((t&$.c9().a)!==0)++s
if((t&$.be().a)!==0)++s
r=a3.gcb(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.D
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d3])
for(n=0,m=0;m<s;++m){l=a3.hj(m)
k=l.gcb(l)
C.a.n(o,m,new Z.d3(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].hM(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.n(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cU(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d4(new Z.dW(a0,f),o,a3)
e.sey(H.c([],[Z.cl]))
a.b.b
a.c.b
if(a.d.b.length!==0){t=P.t
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.L()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.L()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.L()
C.a.h(d,c.e)}b=Z.mr(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.cl(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.h])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.I("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.I("   "))}return C.a.l(t,"\n")},
a3:function(){var u=this.e
if(u!=null)u.B(null)},
$inJ:1}
F.hG.prototype={
hg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ib",[F.aH],"$ab")
u=H.c([],[F.a3])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.d(c,r)
l=c[r];++r
if(r>=m)return H.d(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.d(c,j)
i=c[j]
if(s<0||s>=m)return H.d(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.fo(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fo(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fo(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.fo(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
c2:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bW(0,p,n)){p.b6()
break}}}}},
c1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gcY(s)
if(t)s.b6()}},
aI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].bL())s=!1
return s},
bK:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].bJ())s=!1
return s},
i:function(a){return this.N()},
I:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].I(a))
return C.a.l(r,"\n")},
N:function(){return this.I("")},
ses:function(a){this.b=H.n(a,"$ib",[F.a3],"$ab")}}
F.hH.prototype={
gm:function(a){return 0},
c2:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.j(0,q)}},
c1:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
s=t[u]
t=s.gcY(s)
if(t)s.b6()}},
i:function(a){return this.N()},
I:function(a){var u,t,s=H.c([],[P.h])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.d(t,u)
C.a.h(s,t[u].I(a+(""+u+". ")))}return C.a.l(s,"\n")},
N:function(){return this.I("")},
sez:function(a){this.b=H.n(a,"$ib",[F.bt],"$ab")}}
F.hI.prototype={
gm:function(a){return 0},
i5:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
t=t[u].giH()
t=t.giE(t)
if(t.gm(t).V(0,1)){t=this.b
return H.d(t,u)
t[u].b6()}}},
i:function(a){return this.N()},
I:function(a){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].I(a))}return C.a.l(s,"\n")},
N:function(){return this.I("")},
sbD:function(a){this.b=H.n(a,"$ib",[F.bO],"$ab")}}
F.aH.prototype={
d_:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.l3(u.cx,r,o,t,s,q,p,a,n)},
hM:function(a){var u,t,s=this
if(a.p(0,$.bh())){u=s.f
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bg())){u=s.r
t=[P.D]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bf())){u=s.x
t=[P.D]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bB())){u=s.y
t=[P.D]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bC())){u=s.z
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cY())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cZ())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.c9()))return H.c([s.ch],[P.D])
else if(a.p(0,$.be())){u=H.c([-1,-1,-1,-1],[P.D])
return u}else return H.c([],[P.D])},
bL:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cH()
t.d.H(0,new F.iH(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
bJ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cH()
t.d.H(0,new F.iG(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
I:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
C.a.h(q,C.c.au(J.aI(s.e),0))
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
C.a.h(q,V.a_(s.ch,3,0))
C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
N:function(){return this.I("")}}
F.iH.prototype={
$1:function(a){var u,t
H.k(a,"$ia3")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:8}
F.iG.prototype={
$1:function(a){var u,t
H.k(a,"$ia3")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:8}
F.ix.prototype={
L:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.j(P.z("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a3()
return!0},
cR:function(a,b){var u=null,t=F.l3(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gm:function(a){return this.c.length},
aI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].bL()
return!0},
bK:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].bJ()
return!0},
hq:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.T(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.N()},
I:function(a){var u,t,s,r
this.L()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].I(a))
return C.a.l(u,"\n")},
N:function(){return this.I("")},
she:function(a){this.c=H.n(a,"$ib",[F.aH],"$ab")}}
F.iy.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
H:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a3]})
C.a.H(u.b,b)
C.a.H(u.c,new F.iz(u,b))
C.a.H(u.d,new F.iA(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].I(""))
return C.a.l(r,"\n")},
seu:function(a){this.b=H.n(a,"$ib",[F.a3],"$ab")},
sev:function(a){this.c=H.n(a,"$ib",[F.a3],"$ab")},
sew:function(a){this.d=H.n(a,"$ib",[F.a3],"$ab")}}
F.iz.prototype={
$1:function(a){H.k(a,"$ia3")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:8}
F.iA.prototype={
$1:function(a){var u
H.k(a,"$ia3")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:8}
F.iB.prototype={
gm:function(a){return 0},
j:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.d(u,t)
return u[t]}else{u=this.b
return H.d(u,b)
return u[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].I(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].I(""))}return C.a.l(s,"\n")},
seA:function(a){this.b=H.n(a,"$ib",[F.bt],"$ab")},
seB:function(a){this.c=H.n(a,"$ib",[F.bt],"$ab")}}
F.iD.prototype={}
F.iC.prototype={
bW:function(a,b,c){return J.T(b.f,c.f)}}
F.iE.prototype={}
F.hm.prototype={
hO:function(a){var u,t,s,r,q,p,o,n,m
H.n(a,"$ib",[F.aH],"$ab")
u=V.cH()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.Q(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.t(0,Math.sqrt(u.w(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.x)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.t(0,Math.sqrt(o*o+n*n+m*m))}if(!J.T(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.B(null)}}}return}}
F.iF.prototype={
gm:function(a){return 0},
i:function(a){return this.N()},
N:function(){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].I(""))}return C.a.l(s,"\n")},
sbD:function(a){this.b=H.n(a,"$ib",[F.bO],"$ab")}}
O.dp.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.U():u},
a5:function(a){var u
H.k(a,"$iy")
u=this.fr
if(u!=null)u.B(a)},
eV:function(){return this.a5(null)},
cI:function(a){H.k(a,"$iy")
this.a=null
this.a5(a)},
fP:function(){return this.cI(null)},
eP:function(a,b){var u=V.ai
H.n(b,"$ii",[u],"$ai")
u=new D.bL([u])
u.b=!0
this.a5(u)},
eR:function(a,b){var u=V.ai
H.n(b,"$ii",[u],"$ai")
u=new D.bM([u])
u.b=!0
this.a5(u)},
ct:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.t,h=new H.a0([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.c([],[A.aB])
h.H(0,new O.h1(j,q))
C.a.bg(q,new O.h2())
p=new H.a0([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){o=u[s]
r=o.gaU()
n=p.j(0,o.gaU())
p.n(0,r,n==null?1:n)}m=H.c([],[A.aC])
p.H(0,new O.h3(j,m))
C.a.bg(m,new O.h4())
l=new H.a0([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.x)(i),++s){o=i[s]
t=o.gaU()
r=l.j(0,o.gaU())
l.n(0,t,r==null?1:r)}k=H.c([],[A.aD])
l.H(0,new O.h5(j,k))
C.a.bg(k,new O.h6())
i=C.e.a_(j.e.a.length+3,4)
j.dy.e
return A.m7(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ea:function(a,b){H.n(a,"$ib",[T.dK],"$ab")},
ah:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ao(u,u.length,[H.w(u,0)]);u.u();){t=u.d
t.toString
s=$.iw
if(s==null)s=$.iw=new V.Q(0,0,1)
t.a=s
r=$.iv
t.d=r==null?$.iv=new V.Q(0,1,0):r
r=$.iu
t.e=r==null?$.iu=new V.Q(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bd(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bd(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bd(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
i7:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.ct()
u=b6.fr.j(0,b5.aV)
if(u==null){u=A.m6(b5,b6.a)
t=u.b
if(t.length===0)H.A(P.z("May not cache a shader with no name."))
if(b6.fr.cZ(0,t))H.A(P.z('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.n(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.d2
b5=b7.e
if(!(b5 instanceof Z.d4))b5=b7.e=null
if(b5==null||!b5.d.p(0,r)){b5=s.k3
if(b5)b7.d.aI()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bK()
p.a.bK()
p=p.e
if(p!=null)p.aw(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.hq()
o=o.e
if(o!=null)o.aw(0)}m=b7.d.hp(new Z.iJ(b6.a),r)
m.aL($.bh()).e=b4.a.Q.c
if(b5)m.aL($.bg()).e=b4.a.cx.c
if(q)m.aL($.bf()).e=b4.a.ch.c
if(s.r1)m.aL($.bB()).e=b4.a.cy.c
if(p)m.aL($.bC()).e=b4.a.db.c
if(s.rx)m.aL($.be()).e=b4.a.dx.c
b7.e=m}b5=T.dK
l=H.c([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.hC()
if(s.dy){q=b4.a
o=b6.dx
o=o.gW(o)
q=q.dy
q.toString
q.ac(o.a8(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gW(o)
n=b6.dx
n=b6.cx=o.q(0,n.gW(n))
o=n}q=q.fr
q.toString
q.ac(o.a8(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gi3()
n=b6.dx
n=b6.ch=o.q(0,n.gW(n))
o=n}q=q.fy
q.toString
q.ac(o.a8(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.ac(C.k.a8(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.ac(C.k.a8(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.ac(C.k.a8(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.b.be(q.a,q.d,k)
for(q=[P.D],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.k(n,"$iai")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.cU(H.n(n.a8(0,!0),"$ib",q,"$ab")))
C.b.dE(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.b.U(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.b.U(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.b.U(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.d3
C.b.U(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.d5
C.b.X(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.d4
C.b.U(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.gW(o)
o=P.t
g=new H.a0([o,o])
for(o=b4.dx.e,n=o.length,f=0;f<o.length;o.length===n||(0,H.x)(o),++f){e=o[f]
d=g.j(0,0)
if(d==null)d=0
g.n(0,0,d+1)
c=J.eS(b4.a.bP.j(0,0),d)
b=h.bd(e.a)
a=b.a
a0=b.b
a1=b.c
a1=b.t(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.b.U(a0.a,a0.d,a,b,a1)
a1=e.c
b=c.f
C.b.U(b.a,b.d,a1.a,a1.b,a1.c)}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.x)(q),++f){n=q[f].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.bO.j(0,n)
C.b.be(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.gW(o)
o=P.t
a2=new H.a0([o,o])
for(o=b4.dx.f,n=o.length,b=[b5],a=[P.D],f=0;f<o.length;o.length===n||(0,H.x)(o),++f){e=o[f]
a3=e.gaU()
d=a2.j(0,a3)
if(d==null)d=0
a2.n(0,a3,d+1)
c=J.eS(b4.a.bR.j(0,a3),d)
a4=h.q(0,e.gW(e))
a0=e.gW(e)
a1=$.cu
a0=a0.c5(a1==null?$.cu=new V.af(0,0,0):a1)
a1=c.b
C.b.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cu
a0=a4.c5(a0==null?$.cu=new V.af(0,0,0):a0)
a1=c.c
C.b.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=e.gaK(e)
a1=c.e
C.b.U(a1.a,a1.d,a0.a,a0.b,a0.c)
e.gax()
a0=a4.dd(0)
a1=a0.a
a5=a0.b
a6=a0.c
a7=a0.e
a8=a0.f
a9=a0.r
b0=a0.y
b1=a0.z
a0=a0.Q
b2=c.d
b2.toString
i=new Float32Array(H.cU(H.n(new V.dr(a1,a5,a6,a7,a8,a9,b0,b1,a0).a8(0,!0),"$ib",a,"$ab")))
C.b.dD(b2.a,b2.d,!1,i)
e.gax()
a0=e.gax()
H.n(l,"$ib",b,"$ab")
if(!C.a.R(l,a0)){a0.sar(0,l.length)
C.a.h(l,a0)}a0=e.gax()
a1=a0.gas(a0)
if(a1){a1=c.f
a1.toString
a5=a0.gas(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gar(a0)
a1.a.uniform1i(a1.d,a0)}}e.gaO()
a0=e.gdK()
a1=c.x
a1.toString
a5=a0.ghz(a0)
a6=a0.ghA(a0)
a7=a0.ghB()
a0=a0.ghy()
C.b.dC(a1.a,a1.d,a5,a6,a7,a0)
a0=e.gaO()
if(!C.a.R(l,a0)){a0.sar(0,l.length)
C.a.h(l,a0)}a0=e.gaO()
a1=a0.gas(a0)
if(a1){a1=c.r
a1.toString
a5=a0.gas(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gar(a0)
a1.a.uniform1i(a1.d,a0)}}if(e.ghD()){a0=e.ghk()
a1=c.y
C.b.X(a1.a,a1.d,a0)
a0=e.ghl()
a1=c.z
C.b.X(a1.a,a1.d,a0)
a0=e.ghm()
a1=c.Q
C.b.X(a1.a,a1.d,a0)}}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.x)(q),++f){n=q[f].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.bQ.j(0,n)
C.b.be(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.gW(o)
o=P.t
b3=new H.a0([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],f=0;f<o.length;o.length===n||(0,H.x)(o),++f){e=o[f]
a3=e.gaU()
d=b3.j(0,a3)
if(d==null)d=0
b3.n(0,a3,d+1)
c=J.eS(b4.a.bT.j(0,a3),d)
b=e.gi2(e)
a=c.b
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=e.gil(e).iD()
a=c.c
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=h.c5(e.gi2(e))
a=c.d
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=e.gaK(e)
a=c.e
C.b.U(a.a,a.d,b.a,b.b,b.c)
e.gax()
b=e.gc6()
a=c.f
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=e.gc3(e)
a=c.r
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=e.giF()
a=c.x
C.b.X(a.a,a.d,b)
b=e.giG()
a=c.y
C.b.X(a.a,a.d,b)
e.gax()
b=e.gax()
H.n(l,"$ib",b5,"$ab")
if(!C.a.R(l,b)){b.sar(0,l.length)
C.a.h(l,b)}b=e.gax()
a=b.gas(b)
if(a){a=c.dx
a.toString
a0=b.gas(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gar(b)
a.a.uniform1i(a.d,b)}}e.gaO()
b=e.gdK()
a=c.z
a.toString
a0=b.ghz(b)
a1=b.ghA(b)
a5=b.ghB()
b=b.ghy()
C.b.dC(a.a,a.d,a0,a1,a5,b)
b=e.gaO()
if(!C.a.R(l,b)){b.sar(0,l.length)
C.a.h(l,b)}b=e.gaO()
a=b.gas(b)
if(a){a=c.dy
a.toString
a0=b.gas(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gar(b)
a.a.uniform1i(a.d,b)}}if(e.gim()){b=e.gik()
a=c.Q
C.b.X(a.a,a.d,b)
b=e.gij()
a=c.ch
C.b.X(a.a,a.d,b)}if(e.ghD()){b=e.ghk()
a=c.cx
C.b.X(a.a,a.d,b)
b=e.ghl()
a=c.cy
C.b.X(a.a,a.d,b)
b=e.ghm()
a=c.db
C.b.X(a.a,a.d,b)}}for(b5=q.length,f=0;f<q.length;q.length===b5||(0,H.x)(q),++f){o=q[f].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.bS.j(0,o)
C.b.be(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gW(q).dd(0)}b5=b5.id
b5.toString
b5.ac(q.a8(0,!0))}if(s.cy){b4.ea(l,b4.ch)
b5=b4.a
q=b4.ch
b5.fT(b5.d6,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.d7
C.b.U(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.d8
C.b.X(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.d9
C.b.U(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.da
C.b.X(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].b4(b6)
b5=b7.e
b5.b4(b6)
b5.aM(b6)
b5.dB(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j)l[j].dB(b6)
b5=b4.a
b5.toString
p.useProgram(null)
b5.x.hx()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ct().aV},
see:function(a){this.e=H.n(a,"$ia1",[V.ai],"$aa1")}}
O.h1.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aB(a,C.e.a_(b+3,4)*4))},
$S:10}
O.h2.prototype={
$2:function(a,b){H.k(a,"$iaB")
H.k(b,"$iaB")
return J.jN(a.a,b.a)},
$S:40}
O.h3.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aC(a,C.e.a_(b+3,4)*4))},
$S:10}
O.h4.prototype={
$2:function(a,b){H.k(a,"$iaC")
H.k(b,"$iaC")
return J.jN(a.a,b.a)},
$S:41}
O.h5.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aD(a,C.e.a_(b+3,4)*4))},
$S:10}
O.h6.prototype={
$2:function(a,b){H.k(a,"$iaD")
H.k(b,"$iaD")
return J.jN(a.a,b.a)},
$S:42}
O.fW.prototype={
an:function(){var u,t=this
t.cd()
u=t.f
if(!(Math.abs(u-1)<$.M().a)){t.f=1
u=new D.N(t.b,u,1,[P.D])
u.b=!0
t.a.a5(u)}}}
O.dq.prototype={
an:function(){},
cL:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.an()
u=s.a
u.a=null
u.a5(null)}}}
O.fX.prototype={}
O.aS.prototype={
cK:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.N(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.a5(t)}},
an:function(){this.cd()
this.cK(new V.a2(1,1,1))},
saK:function(a,b){this.cL(new A.ae(!0,!1,!1))
this.cK(b)}}
O.fZ.prototype={}
O.h_.prototype={
an:function(){var u,t=this
t.ce()
u=t.ch
if(!(Math.abs(u-1)<$.M().a)){t.ch=1
u=new D.N(t.b+".refraction",u,1,[P.D])
u.b=!0
t.a.a5(u)}}}
O.h0.prototype={
cM:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.N(u.b+".shininess",t,a,[P.D])
t.b=!0
u.a.a5(t)}},
an:function(){this.ce()
this.cM(100)}}
O.bT.prototype={}
T.dK.prototype={}
V.b6.prototype={
at:function(a,b){return!0},
i:function(a){return"all"},
$iap:1}
V.ap.prototype={}
V.dn.prototype={
at:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].at(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sZ:function(a){this.a=H.n(a,"$ib",[V.ap],"$ab")},
$iap:1}
V.aj.prototype={
at:function(a,b){return!this.dP(0,b)},
i:function(a){return"!["+this.cc(0)+"]"}}
V.hw.prototype={
at:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.jZ(this.a),t=H.jZ(this.b)
return u+".."+t},
$iap:1}
V.hF.prototype={
dU:function(a){var u,t
if(a.a.length<=0)throw H.j(P.z("May not create a SetMatcher with zero characters."))
u=new H.a0([P.t,P.K])
for(t=new H.cn(a,a.gm(a),[H.an(a,"u",0)]);t.u();)u.n(0,t.d,!0)
this.sfS(u)},
at:function(a,b){return this.a.cZ(0,b)},
i:function(a){var u=this.a
return P.k_(new H.dj(u,[H.w(u,0)]))},
sfS:function(a){this.a=H.n(a,"$iG",[P.t,P.K],"$aG")},
$iap:1}
V.cz.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cE(this.a.k(0,b))
r.sZ(H.c([],[V.ap]))
r.c=!1
C.a.h(this.c,r)
return r},
hE:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.at(0,a))return r}return},
i:function(a){return this.b},
shc:function(a){this.c=H.n(a,"$ib",[V.cE],"$ab")}}
V.dM.prototype={
i:function(a){var u=H.kk(this.b,"\n","\\n"),t=H.kk(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cD.prototype={
av:function(a,b,c){var u,t,s
H.n(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.x)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sfM:function(a){var u=P.h
this.c=H.n(a,"$iG",[u,u],"$aG")}}
V.i5.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cz(this,b)
u.shc(H.c([],[V.cE]))
u.d=null
this.a.n(0,b,u)}return u},
J:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cD(a)
u=P.h
t.sfM(new H.a0([u,u]))
this.b.n(0,a,t)}return t},
dA:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dM]),l=this.c,k=[P.t],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.aD(a,s)
q=l.hE(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.k_(j)
throw H.j(P.z("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.k_(j)
o=l.d
n=o.c.j(0,p)
t=new V.dM(n==null?o.b:n,p,s)}++s}}},
sh3:function(a){this.a=H.n(a,"$iG",[P.h,V.cz],"$aG")},
sh5:function(a){this.b=H.n(a,"$iG",[P.h,V.cD],"$aG")}}
V.cE.prototype={
i:function(a){return this.b.b+": "+this.cc(0)}}
X.d6.prototype={$icq:1}
X.fx.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.U():u}}
X.dy.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.U():u},
aC:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.B(a)},
e7:function(){return this.aC(null)},
sdg:function(a){var u,t,s=this
if(!J.T(s.b,a)){u=s.b
if(u!=null)u.gv().S(0,s.gcj())
t=s.b
s.b=a
if(a!=null)a.gv().h(0,s.gcj())
u=new D.N("mover",t,s.b,[U.a8])
u.b=!0
s.aC(u)}},
$icq:1,
$id6:1}
X.dJ.prototype={}
V.bk.prototype={
b_:function(a){this.b=new P.fB(C.H)
this.c=null
this.sbs(H.c([],[[P.b,W.aw]]))},
G:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aw]))
u=a.split("\n")
for(l=u.length,t=[W.aw],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.O(q)
o=m.b.ek(q,0,q.length)
n=o==null?q:o
C.F.dJ(p,H.kk(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gb8(m.d),p)}},
dl:function(a,b){var u,t,s,r,q=this
H.n(b,"$ib",[P.h],"$ab")
q.sbs(H.c([],[[P.b,W.aw]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.b5():t).dA(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)q.bb(t[r])},
sbs:function(a){this.d=H.n(a,"$ib",[[P.b,W.aw]],"$ab")}}
V.jJ.prototype={
$1:function(a){var u
H.k(a,"$ib0")
u=C.d.dz(this.a.ghH(),2)
if(u!=="0.00")P.kj(u+" fps")},
$S:43}
V.fb.prototype={
bb:function(a){var u=this
switch(a.a){case"Class":u.G(a.b,"#551")
break
case"Comment":u.G(a.b,"#777")
break
case"Id":u.G(a.b,"#111")
break
case"Num":u.G(a.b,"#191")
break
case"Reserved":u.G(a.b,"#119")
break
case"String":u.G(a.b,"#171")
break
case"Symbol":u.G(a.b,"#616")
break
case"Type":u.G(a.b,"#B11")
break
case"Whitespace":u.G(a.b,"#111")
break}},
b5:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.i6()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.W("a","z")
C.a.h(u.a,t)
t=V.W("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.W("0","9")
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.W("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.W("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.r(new H.p("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.W("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.W("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.r(new H.p(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.r(new H.p(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.r(new H.p('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.r(new H.p('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.r(new H.p("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.r(new H.p('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.b6())
t=a1.k(0,r).l(0,h)
u=V.r(new H.p("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.r(new H.p("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.r(new H.p("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.r(new H.p("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.b6())
t=a1.k(0,r).l(0,e)
u=V.r(new H.p("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.r(new H.p("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.aj()
s=[V.ap]
t.sZ(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.r(new H.p("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.r(new H.p("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.aj()
t.sZ(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.p("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.r(new H.p("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.r(new H.p(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.r(new H.p(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.J("Num")
t=a1.k(0,n)
t.d=t.a.J("Num")
t=a1.k(0,m)
t.d=t.a.J("Symbol")
t=a1.k(0,j)
t.d=t.a.J("String")
t=a1.k(0,g)
t.d=t.a.J("String")
t=a1.k(0,c)
t.d=t.a.J(d)
t=a1.k(0,a0)
t.d=t.a.J(a0)
t=a1.k(0,q)
t=t.d=t.a.J(q)
u=[P.h]
t.av(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.av(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.av(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fy.prototype={
bb:function(a){var u=this
switch(a.a){case"Builtin":u.G(a.b,"#411")
break
case"Comment":u.G(a.b,"#777")
break
case"Id":u.G(a.b,"#111")
break
case"Num":u.G(a.b,"#191")
break
case"Preprocess":u.G(a.b,"#737")
break
case"Reserved":u.G(a.b,"#119")
break
case"Symbol":u.G(a.b,"#611")
break
case"Type":u.G(a.b,"#171")
break
case"Whitespace":u.G(a.b,"#111")
break}},
b5:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.i6()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.W("a","z")
C.a.h(u.a,t)
t=V.W("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.W("0","9")
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.W("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.W("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.r(new H.p("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.W("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.W("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.r(new H.p(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.r(new H.p(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.r(new H.p("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.r(new H.p("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.b6())
t=e.k(0,j).l(0,i)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.aj()
s=[V.ap]
t.sZ(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.r(new H.p("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.aj()
u.sZ(H.c([],s))
C.a.h(t.a,u)
t=V.r(new H.p("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.r(new H.p(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.r(new H.p(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.J("Num")
u=e.k(0,n)
u.d=u.a.J("Num")
u=e.k(0,m)
u.d=u.a.J("Symbol")
u=e.k(0,i)
u.d=u.a.J(j)
u=e.k(0,g)
u.d=u.a.J(h)
u=e.k(0,f)
u.d=u.a.J(f)
u=e.k(0,q)
u=u.d=u.a.J(q)
t=[P.h]
u.av(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.av(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.av(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fz.prototype={
bb:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.G(a.b,"#911")
u.G("=",t)
break
case"Id":u.G(a.b,t)
break
case"Other":u.G(a.b,t)
break
case"Reserved":u.G(a.b,"#119")
break
case"String":u.G(a.b,"#171")
break
case"Symbol":u.G(a.b,"#616")
break}},
b5:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.i6()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.W("a","z")
C.a.h(u.a,t)
t=V.W("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.W("0","9")
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.r(new H.p("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.r(new H.p("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.r(new H.p("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.r(new H.p('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.r(new H.p('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.r(new H.p("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.r(new H.p('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.b6())
C.a.h(l.k(0,s).l(0,m).a,new V.b6())
u=l.k(0,m).l(0,m)
t=new V.aj()
t.sZ(H.c([],[V.ap]))
C.a.h(u.a,t)
u=V.r(new H.p('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.J("Symbol")
u=l.k(0,n)
u.d=u.a.J("String")
u=l.k(0,r)
t=u.a.J(r)
u.d=t
t.av(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.J(q)
t=l.k(0,m)
t.d=t.a.J(m)
return l}}
V.hs.prototype={
dl:function(a,b){H.n(b,"$ib",[P.h],"$ab")
this.sbs(H.c([],[[P.b,W.aw]]))
this.G(C.a.l(b,"\n"),"#111")},
bb:function(a){},
b5:function(){return}}
V.hJ.prototype={
dW:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.l
W.aa(q,"scroll",H.m(new V.hL(o),{func:1,ret:-1,args:[r]}),!1,r)},
cS:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ib",[P.h],"$ab")
this.fY()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dA(C.a.hL(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
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
if(H.nu(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.O(m[1])
l.textContent=H.O(m[0])
t.appendChild(l)}else{k=P.l8(C.r,n,C.h,!1)
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
dF:function(a){var u,t,s,r=new V.fb("dart")
r.b_("dart")
u=new V.fy("glsl")
u.b_("glsl")
t=new V.fz("html")
t.b_("html")
s=C.a.hG(H.c([r,u,t],[V.bk]),new V.hM(a))
if(s!=null)return s
r=new V.hs("plain")
r.b_("plain")
return r},
cQ:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.n(b0,"$ib",[P.h],"$ab")
u=H.c([],[P.t])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.kf(r).bh(r,"+")){C.a.n(b0,s,C.c.aj(r,1))
C.a.h(u,1)
t=!0}else if(C.c.bh(r,"-")){C.a.n(b0,s,C.c.aj(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dF(a8)
q.dl(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.l8(C.r,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kp()
i.href="#"+m
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
if(s>=u.length)return H.d(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.x)(r),++a0)C.O.hi(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.x)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gO(r);a3.u();)c.appendChild(a3.gE(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
fY:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.i6()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.r(new H.p("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.aj()
r=[V.ap]
s.sZ(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.p("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.r(new H.p("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.r(new H.p("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.aj()
s.sZ(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.p("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.r(new H.p("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.r(new H.p("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.aj()
s.sZ(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.p("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.r(new H.p("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.r(new H.p("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.r(new H.p("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.r(new H.p("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.aj()
t.sZ(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.r(new H.p("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.aj()
t.sZ(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.b6())
s=u.k(0,i).l(0,i)
t=new V.aj()
t.sZ(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.J(p)
s=u.k(0,n)
s.d=s.a.J(o)
s=u.k(0,"CodeEnd")
s.d=s.a.J(m)
s=u.k(0,j)
s.d=s.a.J("Link")
s=u.k(0,i)
s.d=s.a.J(i)
this.b=u}}
V.hL.prototype={
$1:function(a){P.kV(C.j,new V.hK(this.a))},
$S:44}
V.hK.prototype={
$0:function(){var u=C.d.aa(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s},
$S:2}
V.hM.prototype={
$1:function(a){return H.k(a,"$ibk").a===this.a},
$S:45}
Q.jG.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iy")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.cQ("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cQ("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.dM=u.i
u=J.dg.prototype
u.dO=u.i
u=P.i.prototype
u.dN=u.bf
u=W.P.prototype
u.bi=u.a6
u=W.eq.prototype
u.dQ=u.ag
u=O.dq.prototype
u.cd=u.an
u=O.aS.prototype
u.ce=u.an
u=V.dn.prototype
u.dP=u.at
u.cc=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n5","mt",9)
u(P,"n6","mu",9)
u(P,"n7","mv",9)
t(P,"lh","n3",3)
s(W,"nf",4,null,["$4"],["mx"],22,0)
s(W,"ng",4,null,["$4"],["my"],22,0)
var m
r(m=E.ah.prototype,"gdj",0,0,null,["$1","$0"],["dk","hV"],0,0)
r(m,"gdh",0,0,null,["$1","$0"],["di","hS"],0,0)
q(m,"ghQ","hR",6)
q(m,"ghT","hU",6)
r(m=E.dL.prototype,"gcf",0,0,null,["$1","$0"],["ci","cg"],0,0)
p(m,"gi8","ds",3)
o(m=X.dS.prototype,"gf5","f6",11)
o(m,"geS","eT",11)
o(m,"gf_","f0",4)
o(m,"gf9","fa",20)
o(m,"gf7","f8",20)
o(m,"gfd","fe",4)
o(m,"gfh","fi",4)
o(m,"gf3","f4",4)
o(m,"gff","fg",4)
o(m,"gf1","f2",4)
o(m,"gfj","fk",34)
o(m,"gfl","fm",11)
o(m,"gfB","fC",12)
o(m,"gfv","fw",12)
o(m,"gfz","fA",12)
r(D.bn.prototype,"gdZ",0,0,null,["$1","$0"],["ak","e_"],0,0)
r(m=D.di.prototype,"gcD",0,0,null,["$1","$0"],["cE","fb"],0,0)
o(m,"gfo","fp",35)
q(m,"geM","eN",13)
q(m,"gft","fu",13)
n(V.S.prototype,"gm","bV",23)
n(V.Q.prototype,"gm","bV",23)
r(m=U.ck.prototype,"gaB",0,0,null,["$1","$0"],["K","Y"],0,0)
q(m,"geK","eL",24)
q(m,"gfq","fs",24)
r(m=U.dT.prototype,"gaB",0,0,null,["$1","$0"],["K","Y"],0,0)
o(m,"gbv","bw",1)
o(m,"gbx","by",1)
o(m,"gbz","bA",1)
r(m=U.dU.prototype,"gaB",0,0,null,["$1","$0"],["K","Y"],0,0)
o(m,"gbv","bw",1)
o(m,"gbx","by",1)
o(m,"gbz","bA",1)
o(m,"geD","eE",1)
o(m,"geF","eG",1)
o(m,"gha","hb",1)
o(m,"gh8","h9",1)
o(m,"gh6","h7",1)
o(U.dV.prototype,"geI","eJ",1)
r(m=M.db.prototype,"gad",0,0,null,["$1","$0"],["al","e1"],0,0)
q(m,"geW","eX",6)
q(m,"geY","eZ",6)
r(m=O.dp.prototype,"geU",0,0,null,["$1","$0"],["a5","eV"],0,0)
r(m,"gfO",0,0,null,["$1","$0"],["cI","fP"],0,0)
q(m,"geO","eP",26)
q(m,"geQ","eR",26)
r(X.dy.prototype,"gcj",0,0,null,["$1","$0"],["aC","e7"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jX,J.a,J.ao,P.ed,P.i,H.cn,P.aP,H.bJ,H.dR,H.ib,P.bp,H.cd,H.ev,P.a6,H.fM,H.fN,H.fH,P.eB,P.b5,P.az,P.dX,P.hU,P.cB,P.hV,P.b0,P.ad,P.jr,P.jf,P.c_,P.ec,P.u,P.ce,P.fC,P.jp,P.K,P.av,P.a4,P.bo,P.hq,P.dH,P.e4,P.fw,P.bq,P.b,P.G,P.J,P.al,P.h,P.bb,W.f7,W.bx,W.C,W.dw,W.eq,W.jk,W.dd,W.ar,W.je,W.eG,P.j9,O.a1,O.co,E.f0,E.ah,E.hx,E.dL,Z.dW,Z.iJ,Z.d4,Z.cl,Z.bw,D.f3,D.bI,D.y,X.d5,X.dh,X.fJ,X.fP,X.aq,X.hd,X.i7,X.dS,D.bn,D.a5,D.dz,D.dG,V.a2,V.bl,V.fl,V.dr,V.ai,V.ac,V.af,V.dC,V.S,V.Q,U.dT,U.dU,U.dV,M.db,A.d0,A.eW,A.ae,A.aB,A.aC,A.aD,A.fY,A.bU,A.bV,A.bY,A.dO,A.il,F.a3,F.fp,F.bt,F.fL,F.bO,F.dE,F.hG,F.hH,F.hI,F.aH,F.ix,F.iy,F.iB,F.iD,F.iE,F.iF,O.bT,O.dq,O.fZ,V.b6,V.ap,V.dn,V.hw,V.hF,V.cz,V.dM,V.cD,V.i5,X.d6,X.dJ,X.dy,V.bk,V.hJ])
s(J.a,[J.fF,J.df,J.dg,J.aQ,J.cm,J.br,H.cs,W.e,W.eT,W.d1,W.aL,W.aM,W.R,W.dZ,W.fc,W.fd,W.e0,W.da,W.e2,W.ff,W.l,W.e5,W.aO,W.fA,W.e8,W.dl,W.h7,W.ee,W.ef,W.aU,W.eg,W.ej,W.aV,W.en,W.ep,W.aY,W.er,W.aZ,W.ew,W.aE,W.ez,W.i4,W.b1,W.eC,W.i9,W.ir,W.eH,W.eJ,W.eL,W.eN,W.eP,P.b8,P.ea,P.ba,P.el,P.hv,P.ex,P.bc,P.eE,P.eX,P.dY,P.d2,P.dA,P.bR,P.dD,P.dP,P.et])
s(J.dg,[J.hr,J.bZ,J.bs])
t(J.jW,J.aQ)
s(J.cm,[J.de,J.fG])
t(P.fO,P.ed)
s(P.fO,[H.dQ,W.iR,W.ag,P.fs])
t(H.p,H.dQ)
s(P.i,[H.fi,H.fS,H.cI])
s(H.fi,[H.bN,H.dj])
s(P.aP,[H.fT,H.iK])
t(H.fU,H.bN)
s(P.bp,[H.hn,H.fI,H.ip,H.id,H.f2,H.hD,P.eV,P.dx,P.aJ,P.iq,P.io,P.cA,P.f5,P.fa])
s(H.cd,[H.jM,H.i0,H.jC,H.jD,H.jE,P.iN,P.iM,P.iO,P.iP,P.jo,P.jn,P.iX,P.j0,P.iY,P.iZ,P.j_,P.j3,P.j4,P.j2,P.j1,P.hW,P.hX,P.jv,P.jc,P.jb,P.jd,P.fR,P.fg,P.fh,W.fj,W.h9,W.hb,W.hC,W.hT,W.iW,W.hl,W.hk,W.jg,W.jh,W.jm,W.jq,P.jx,P.ft,P.fu,P.eZ,E.hy,E.hz,E.hA,E.i3,D.fm,D.fn,F.jL,F.jy,F.iH,F.iG,F.iz,F.iA,O.h1,O.h2,O.h3,O.h4,O.h5,O.h6,V.jJ,V.hL,V.hK,V.hM,Q.jG])
s(H.i0,[H.hR,H.cb])
t(H.iL,P.eV)
t(P.fQ,P.a6)
s(P.fQ,[H.a0,W.iQ])
t(H.dt,H.cs)
s(H.dt,[H.cM,H.cO])
t(H.cN,H.cM)
t(H.cr,H.cN)
t(H.cP,H.cO)
t(H.du,H.cP)
s(H.du,[H.he,H.hf,H.hg,H.hh,H.hi,H.dv,H.hj])
t(P.ja,P.jr)
t(P.j8,P.jf)
t(P.cf,P.hV)
t(P.fk,P.ce)
s(P.cf,[P.fB,P.it])
t(P.is,P.fk)
s(P.a4,[P.D,P.t])
s(P.aJ,[P.bQ,P.fD])
s(W.e,[W.E,W.fr,W.aX,W.cQ,W.b_,W.aF,W.cS,W.iI,W.cJ,P.f_,P.bG])
s(W.E,[W.P,W.bj,W.cK])
s(W.P,[W.q,P.o])
s(W.q,[W.d_,W.eU,W.ca,W.bi,W.bH,W.aw,W.fv,W.hE,W.bS,W.dI,W.hZ,W.i_,W.cC])
s(W.aL,[W.cg,W.f8,W.f9])
t(W.f6,W.aM)
t(W.ch,W.dZ)
t(W.e1,W.e0)
t(W.d9,W.e1)
t(W.e3,W.e2)
t(W.fe,W.e3)
t(W.aN,W.d1)
t(W.e6,W.e5)
t(W.fq,W.e6)
t(W.e9,W.e8)
t(W.bK,W.e9)
t(W.bv,W.l)
s(W.bv,[W.aR,W.a7,W.aG])
t(W.h8,W.ee)
t(W.ha,W.ef)
t(W.eh,W.eg)
t(W.hc,W.eh)
t(W.ek,W.ej)
t(W.ct,W.ek)
t(W.eo,W.en)
t(W.ht,W.eo)
t(W.hB,W.ep)
t(W.cR,W.cQ)
t(W.hO,W.cR)
t(W.es,W.er)
t(W.hP,W.es)
t(W.hS,W.ew)
t(W.eA,W.ez)
t(W.i1,W.eA)
t(W.cT,W.cS)
t(W.i2,W.cT)
t(W.eD,W.eC)
t(W.i8,W.eD)
t(W.b4,W.a7)
t(W.eI,W.eH)
t(W.iS,W.eI)
t(W.e_,W.da)
t(W.eK,W.eJ)
t(W.j5,W.eK)
t(W.eM,W.eL)
t(W.ei,W.eM)
t(W.eO,W.eN)
t(W.ji,W.eO)
t(W.eQ,W.eP)
t(W.jj,W.eQ)
t(W.iT,W.iQ)
t(W.iU,P.hU)
t(W.k3,W.iU)
t(W.iV,P.cB)
t(W.jl,W.eq)
t(P.ak,P.j9)
t(P.eb,P.ea)
t(P.fK,P.eb)
t(P.em,P.el)
t(P.ho,P.em)
t(P.cx,P.o)
t(P.ey,P.ex)
t(P.hY,P.ey)
t(P.eF,P.eE)
t(P.ia,P.eF)
t(P.eY,P.dY)
t(P.hp,P.bG)
t(P.eu,P.et)
t(P.hQ,P.eu)
s(E.f0,[Z.d3,A.cy,T.dK])
s(D.y,[D.bL,D.bM,D.N,X.hu])
s(X.hu,[X.dm,X.b9,X.cp,X.dN])
s(O.a1,[D.di,U.ck])
s(D.f3,[U.f4,U.a8])
t(U.d7,U.a8)
t(A.fV,A.cy)
s(A.dO,[A.ax,A.ii,A.ij,A.ik,A.ig,A.a9,A.ih,A.X,A.cF,A.im,A.cG,A.as,A.bW,A.bX])
t(F.hN,F.fp)
t(F.ie,F.fL)
t(F.iC,F.iD)
t(F.hm,F.iE)
t(O.dp,O.bT)
s(O.dq,[O.fW,O.fX,O.aS])
s(O.aS,[O.h_,O.h0])
s(V.dn,[V.aj,V.cE])
t(X.fx,X.dJ)
s(V.bk,[V.fb,V.fy,V.fz,V.hs])
u(H.dQ,H.dR)
u(H.cM,P.u)
u(H.cN,H.bJ)
u(H.cO,P.u)
u(H.cP,H.bJ)
u(P.ed,P.u)
u(W.dZ,W.f7)
u(W.e0,P.u)
u(W.e1,W.C)
u(W.e2,P.u)
u(W.e3,W.C)
u(W.e5,P.u)
u(W.e6,W.C)
u(W.e8,P.u)
u(W.e9,W.C)
u(W.ee,P.a6)
u(W.ef,P.a6)
u(W.eg,P.u)
u(W.eh,W.C)
u(W.ej,P.u)
u(W.ek,W.C)
u(W.en,P.u)
u(W.eo,W.C)
u(W.ep,P.a6)
u(W.cQ,P.u)
u(W.cR,W.C)
u(W.er,P.u)
u(W.es,W.C)
u(W.ew,P.a6)
u(W.ez,P.u)
u(W.eA,W.C)
u(W.cS,P.u)
u(W.cT,W.C)
u(W.eC,P.u)
u(W.eD,W.C)
u(W.eH,P.u)
u(W.eI,W.C)
u(W.eJ,P.u)
u(W.eK,W.C)
u(W.eL,P.u)
u(W.eM,W.C)
u(W.eN,P.u)
u(W.eO,W.C)
u(W.eP,P.u)
u(W.eQ,W.C)
u(P.ea,P.u)
u(P.eb,W.C)
u(P.el,P.u)
u(P.em,W.C)
u(P.ex,P.u)
u(P.ey,W.C)
u(P.eE,P.u)
u(P.eF,W.C)
u(P.dY,P.a6)
u(P.et,P.u)
u(P.eu,W.C)})()
var v={mangledGlobalNames:{t:"int",D:"double",a4:"num",h:"String",K:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.t,[P.i,E.ah]]},{func:1,ret:P.J,args:[D.y]},{func:1,ret:P.J,args:[F.a3]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.t,P.t]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.aG]},{func:1,ret:-1,args:[P.t,[P.i,D.a5]]},{func:1,args:[,]},{func:1,ret:P.K,args:[P.h]},{func:1,ret:P.K,args:[W.ar]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.h,args:[P.t]},{func:1,ret:P.K,args:[W.P,P.h,P.h,W.bx]},{func:1,ret:P.D},{func:1,ret:-1,args:[P.t,[P.i,U.a8]]},{func:1,ret:P.K,args:[W.E]},{func:1,ret:-1,args:[P.t,[P.i,V.ai]]},{func:1,args:[W.l]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:W.P,args:[W.E]},{func:1,args:[,P.h]},{func:1,args:[P.h]},{func:1,ret:P.J,args:[,],opt:[P.al]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.K,args:[[P.i,D.a5]]},{func:1,ret:V.af,args:[P.D]},{func:1,ret:P.J,args:[F.aH,P.D,P.D]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:P.t,args:[A.aB,A.aB]},{func:1,ret:P.t,args:[A.aC,A.aC]},{func:1,ret:P.t,args:[A.aD,A.aD]},{func:1,ret:P.J,args:[P.b0]},{func:1,ret:P.J,args:[W.l]},{func:1,ret:P.K,args:[V.bk]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.J,args:[P.a4]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.o=W.bi.prototype
C.i=W.bH.prototype
C.F=W.aw.prototype
C.I=J.a.prototype
C.a=J.aQ.prototype
C.e=J.de.prototype
C.k=J.df.prototype
C.d=J.cm.prototype
C.c=J.br.prototype
C.J=J.bs.prototype
C.N=W.ct.prototype
C.t=J.hr.prototype
C.b=P.bR.prototype
C.O=W.bS.prototype
C.u=W.dI.prototype
C.n=J.bZ.prototype
C.v=W.b4.prototype
C.w=W.cJ.prototype
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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

C.D=new P.hq()
C.h=new P.is()
C.E=new P.it()
C.f=new P.ja()
C.j=new P.bo(0)
C.G=new P.bo(5e6)
C.H=new P.fC("element",!1,!1,!1)
C.K=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.L=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.M=H.c(u([]),[P.h])
C.r=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.t])
C.l=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.m=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])})();(function staticFields(){$.aK=0
$.cc=null
$.kq=null
$.k5=!1
$.ll=null
$.lf=null
$.lr=null
$.jz=null
$.jF=null
$.kh=null
$.c0=null
$.cV=null
$.cW=null
$.k6=!1
$.Y=C.f
$.am=[]
$.b7=null
$.jT=null
$.kx=null
$.kw=null
$.e7=P.kA(P.h,P.bq)
$.kF=null
$.kJ=null
$.cu=null
$.kQ=null
$.kZ=null
$.l1=null
$.l0=null
$.iu=null
$.iv=null
$.iw=null
$.l_=null
$.kI=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nF","lv",function(){return H.lk("_$dart_dartClosure")})
u($,"nG","kl",function(){return H.lk("_$dart_js")})
u($,"nL","lw",function(){return H.b2(H.ic({
toString:function(){return"$receiver$"}}))})
u($,"nM","lx",function(){return H.b2(H.ic({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nN","ly",function(){return H.b2(H.ic(null))})
u($,"nO","lz",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nR","lC",function(){return H.b2(H.ic(void 0))})
u($,"nS","lD",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nQ","lB",function(){return H.b2(H.kX(null))})
u($,"nP","lA",function(){return H.b2(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nU","lF",function(){return H.b2(H.kX(void 0))})
u($,"nT","lE",function(){return H.b2(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o9","km",function(){return P.ms()})
u($,"ob","lK",function(){return P.mh("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oa","lJ",function(){return P.kB(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"o2","lI",function(){return Z.ay(0)})
u($,"nX","lG",function(){return Z.ay(511)})
u($,"o4","bh",function(){return Z.ay(1)})
u($,"o3","bg",function(){return Z.ay(2)})
u($,"nZ","bf",function(){return Z.ay(4)})
u($,"o5","bB",function(){return Z.ay(8)})
u($,"o6","bC",function(){return Z.ay(16)})
u($,"o_","cY",function(){return Z.ay(32)})
u($,"o0","cZ",function(){return Z.ay(64)})
u($,"o1","lH",function(){return Z.ay(96)})
u($,"o7","c9",function(){return Z.ay(128)})
u($,"nY","be",function(){return Z.ay(256)})
u($,"nE","lu",function(){return new V.fl(1e-9)})
u($,"nD","M",function(){return $.lu()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cs,ArrayBufferView:H.cs,Float32Array:H.cr,Float64Array:H.cr,Int16Array:H.he,Int32Array:H.hf,Int8Array:H.hg,Uint16Array:H.hh,Uint32Array:H.hi,Uint8ClampedArray:H.dv,CanvasPixelArray:H.dv,Uint8Array:H.hj,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLImageElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableColElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eT,HTMLAnchorElement:W.d_,HTMLAreaElement:W.eU,HTMLBaseElement:W.ca,Blob:W.d1,HTMLBodyElement:W.bi,HTMLCanvasElement:W.bH,CDATASection:W.bj,CharacterData:W.bj,Comment:W.bj,ProcessingInstruction:W.bj,Text:W.bj,CSSNumericValue:W.cg,CSSUnitValue:W.cg,CSSPerspective:W.f6,CSSCharsetRule:W.R,CSSConditionRule:W.R,CSSFontFaceRule:W.R,CSSGroupingRule:W.R,CSSImportRule:W.R,CSSKeyframeRule:W.R,MozCSSKeyframeRule:W.R,WebKitCSSKeyframeRule:W.R,CSSKeyframesRule:W.R,MozCSSKeyframesRule:W.R,WebKitCSSKeyframesRule:W.R,CSSMediaRule:W.R,CSSNamespaceRule:W.R,CSSPageRule:W.R,CSSRule:W.R,CSSStyleRule:W.R,CSSSupportsRule:W.R,CSSViewportRule:W.R,CSSStyleDeclaration:W.ch,MSStyleCSSProperties:W.ch,CSS2Properties:W.ch,CSSImageValue:W.aL,CSSKeywordValue:W.aL,CSSPositionValue:W.aL,CSSResourceValue:W.aL,CSSURLImageValue:W.aL,CSSStyleValue:W.aL,CSSMatrixComponent:W.aM,CSSRotation:W.aM,CSSScale:W.aM,CSSSkew:W.aM,CSSTranslation:W.aM,CSSTransformComponent:W.aM,CSSTransformValue:W.f8,CSSUnparsedValue:W.f9,DataTransferItemList:W.fc,HTMLDivElement:W.aw,DOMException:W.fd,ClientRectList:W.d9,DOMRectList:W.d9,DOMRectReadOnly:W.da,DOMStringList:W.fe,DOMTokenList:W.ff,Element:W.P,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aN,FileList:W.fq,FileWriter:W.fr,HTMLFormElement:W.fv,Gamepad:W.aO,History:W.fA,HTMLCollection:W.bK,HTMLFormControlsCollection:W.bK,HTMLOptionsCollection:W.bK,KeyboardEvent:W.aR,Location:W.dl,MediaList:W.h7,MIDIInputMap:W.h8,MIDIOutputMap:W.ha,MimeType:W.aU,MimeTypeArray:W.hc,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.ct,RadioNodeList:W.ct,Plugin:W.aV,PluginArray:W.ht,RTCStatsReport:W.hB,HTMLSelectElement:W.hE,SourceBuffer:W.aX,SourceBufferList:W.hO,SpeechGrammar:W.aY,SpeechGrammarList:W.hP,SpeechRecognitionResult:W.aZ,Storage:W.hS,CSSStyleSheet:W.aE,StyleSheet:W.aE,HTMLTableCellElement:W.bS,HTMLTableDataCellElement:W.bS,HTMLTableHeaderCellElement:W.bS,HTMLTableElement:W.dI,HTMLTableRowElement:W.hZ,HTMLTableSectionElement:W.i_,HTMLTemplateElement:W.cC,TextTrack:W.b_,TextTrackCue:W.aF,VTTCue:W.aF,TextTrackCueList:W.i1,TextTrackList:W.i2,TimeRanges:W.i4,Touch:W.b1,TouchEvent:W.aG,TouchList:W.i8,TrackDefaultList:W.i9,CompositionEvent:W.bv,FocusEvent:W.bv,TextEvent:W.bv,UIEvent:W.bv,URL:W.ir,VideoTrackList:W.iI,WheelEvent:W.b4,Window:W.cJ,DOMWindow:W.cJ,Attr:W.cK,CSSRuleList:W.iS,ClientRect:W.e_,DOMRect:W.e_,GamepadList:W.j5,NamedNodeMap:W.ei,MozNamedAttrMap:W.ei,SpeechRecognitionResultList:W.ji,StyleSheetList:W.jj,SVGLength:P.b8,SVGLengthList:P.fK,SVGNumber:P.ba,SVGNumberList:P.ho,SVGPointList:P.hv,SVGScriptElement:P.cx,SVGStringList:P.hY,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.bc,SVGTransformList:P.ia,AudioBuffer:P.eX,AudioParamMap:P.eY,AudioTrackList:P.f_,AudioContext:P.bG,webkitAudioContext:P.bG,BaseAudioContext:P.bG,OfflineAudioContext:P.hp,WebGLBuffer:P.d2,WebGLProgram:P.dA,WebGL2RenderingContext:P.bR,WebGLShader:P.dD,WebGLUniformLocation:P.dP,SQLResultSetRowList:P.hQ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dt.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.du.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.ln,[])
else Q.ln([])})})()
//# sourceMappingURL=test.dart.js.map
