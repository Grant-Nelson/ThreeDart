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
a[c]=function(){a[c]=function(){H.nB(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kf(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jY:function jY(){},
fF:function(){return new P.cA("No element")},
m2:function(){return new P.cA("Too many elements")},
dK:function(a,b,c,d,e){if(c-b<=32)H.mo(a,b,c,d,e)
else H.mn(a,b,c,d,e)},
mo:function(a,b,c,d,e){var u,t,s,r,q
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
mn:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.X(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.X(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(J.W(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.aD()
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
if(typeof g!=="number")return g.aD()
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
if(typeof k!=="number")return k.aD()
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
H.dK(a2,a3,o-2,a5,a6)
H.dK(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.d(a2,o)
if(!J.W(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.d(a2,n)
if(!J.W(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.aD()
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
break}}}H.dK(a2,o,n,a5,a6)}else H.dK(a2,o,n,a5,a6)},
p:function p(a){this.a=a},
fk:function fk(){},
bL:function bL(){},
cm:function cm(a,b,c){var _=this
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
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
iM:function iM(a,b,c){this.a=a
this.b=b
this.$ti=c},
bJ:function bJ(){},
dW:function dW(){},
dV:function dV(){},
c5:function(a){var u,t=H.nC(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
ni:function(a){return v.types[H.a6(a)]},
np:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iF},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aj(a)
if(typeof u!=="string")throw H.i(H.bA(a))
return u},
cv:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cw:function(a){return H.m9(a)+H.kb(H.bB(a),0,null)},
m9:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibW){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c5(t.length>1&&C.c.as(t,0)===36?C.c.ae(t,1):t)},
kO:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mh:function(a){var u,t,s,r=H.c([],[P.t])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bA(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aX(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.bA(s))}return H.kO(r)},
kP:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bA(s))
if(s<0)throw H.i(H.bA(s))
if(s>65535)return H.mh(a)}return H.kO(a)},
k0:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aX(u,10))>>>0,56320|u&1023)}throw H.i(P.aR(a,0,1114111,null,null))},
bN:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mg:function(a){var u=H.bN(a).getFullYear()+0
return u},
me:function(a){var u=H.bN(a).getMonth()+1
return u},
ma:function(a){var u=H.bN(a).getDate()+0
return u},
mb:function(a){var u=H.bN(a).getHours()+0
return u},
md:function(a){var u=H.bN(a).getMinutes()+0
return u},
mf:function(a){var u=H.bN(a).getSeconds()+0
return u},
mc:function(a){var u=H.bN(a).getMilliseconds()+0
return u},
bC:function(a){throw H.i(H.bA(a))},
d:function(a,b){if(a==null)J.bF(a)
throw H.i(H.c1(a,b))},
c1:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ay(!0,b,s,null)
u=H.a6(J.bF(a))
if(!(b<0)){if(typeof u!=="number")return H.bC(u)
t=b>=u}else t=!0
if(t)return P.S(b,a,s,null,u)
return P.dF(b,s)},
nd:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bO(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bO(a,c,!0,b,"end",u)
return new P.ay(!0,b,"end",null)},
bA:function(a){return new P.ay(!0,a,null,null)},
n9:function(a){if(typeof a!=="number")throw H.i(H.bA(a))
return a},
i:function(a){var u
if(a==null)a=new P.dz()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lt})
u.name=""}else u.toString=H.lt
return u},
lt:function(){return J.aj(this.dartException)},
y:function(a){throw H.i(a)},
u:function(a){throw H.i(P.bl(a))},
aY:function(a){var u,t,s,r,q,p
a=H.ls(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.id(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ie:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
l_:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kJ:function(a,b){return new H.hn(a,b==null?null:b.method)},
jZ:function(a,b){var u=b==null,t=u?null:b.method
return new H.fI(a,t,u?null:b.receiver)},
ao:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jN(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aX(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jZ(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kJ(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lw()
q=$.lx()
p=$.ly()
o=$.lz()
n=$.lC()
m=$.lD()
l=$.lB()
$.lA()
k=$.lF()
j=$.lE()
i=r.a1(u)
if(i!=null)return f.$1(H.jZ(H.O(u),i))
else{i=q.a1(u)
if(i!=null){i.method="call"
return f.$1(H.jZ(H.O(u),i))}else{i=p.a1(u)
if(i==null){i=o.a1(u)
if(i==null){i=n.a1(u)
if(i==null){i=m.a1(u)
if(i==null){i=l.a1(u)
if(i==null){i=o.a1(u)
if(i==null){i=k.a1(u)
if(i==null){i=j.a1(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kJ(H.O(u),i))}}return f.$1(new H.ir(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dM()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ay(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dM()
return a},
c3:function(a){var u
if(a==null)return new H.ex(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ex(a)},
ng:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
no:function(a,b,c,d,e,f){H.k(a,"$ibq")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.x("Unsupported number of arguments for wrapped closure"))},
c0:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.no)
a.$identity=u
return u},
lW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hQ().constructor.prototype):Object.create(new H.c8(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aG
if(typeof t!=="number")return t.I()
$.aG=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kw(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lS(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kw(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lS:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ni,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kv:H.jR
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.i("Error in functionType of tearoff")},
lT:function(a,b,c,d){var u=H.jR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kw:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lV(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lT(t,!r,u,b)
if(t===0){r=$.aG
if(typeof r!=="number")return r.I()
$.aG=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c9
return new Function(r+H.f(q==null?$.c9=H.f4("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aG
if(typeof r!=="number")return r.I()
$.aG=r+1
o+=r
r="return function("+o+"){return this."
q=$.c9
return new Function(r+H.f(q==null?$.c9=H.f4("self"):q)+"."+H.f(u)+"("+o+");}")()},
lU:function(a,b,c,d){var u=H.jR,t=H.kv
switch(b?-1:a){case 0:throw H.i(H.ml("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lV:function(a,b){var u,t,s,r,q,p,o,n=$.c9
if(n==null)n=$.c9=H.f4("self")
u=$.ku
if(u==null)u=$.ku=H.f4("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lU(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.aG
if(typeof u!=="number")return u.I()
$.aG=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.aG
if(typeof u!=="number")return u.I()
$.aG=u+1
return new Function(n+u+"}")()},
kf:function(a,b,c,d,e,f,g){return H.lW(a,b,c,d,!!e,!!f,g)},
jR:function(a){return a.a},
kv:function(a){return a.c},
f4:function(a){var u,t,s,r=new H.c8("self","target","receiver","name"),q=J.jW(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
G:function(a){if(a==null)H.n5("boolean expression must not be null")
return a},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aZ(a,"String"))},
oi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aZ(a,"double"))},
lo:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aZ(a,"num"))},
kc:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aZ(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aZ(a,"int"))},
lq:function(a,b){throw H.i(H.aZ(a,H.c5(H.O(b).substring(2))))},
nv:function(a,b){throw H.i(H.lR(a,H.c5(H.O(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.lq(a,b)},
v:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.nv(a,b)},
nq:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.lq(a,b)},
lj:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a6(u)]
else return a.$S()}return},
eU:function(a,b){var u
if(typeof a=="function")return!0
u=H.lj(J.V(a))
if(u==null)return!1
return H.la(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.k8)return a
$.k8=!0
try{if(H.eU(a,b))return a
u=H.jK(b)
t=H.aZ(a,u)
throw H.i(t)}finally{$.k8=!1}},
kg:function(a,b){if(a!=null&&!H.ke(a,b))H.y(H.aZ(a,H.jK(b)))
return a},
aZ:function(a,b){return new H.ig("TypeError: "+P.df(a)+": type '"+H.f(H.le(a))+"' is not a subtype of type '"+b+"'")},
lR:function(a,b){return new H.f5("CastError: "+P.df(a)+": type '"+H.f(H.le(a))+"' is not a subtype of type '"+b+"'")},
le:function(a){var u,t=J.V(a)
if(!!t.$icb){u=H.lj(t)
if(u!=null)return H.jK(u)
return"Closure"}return H.cw(a)},
n5:function(a){throw H.i(new H.iN(a))},
nB:function(a){throw H.i(new P.fc(a))},
ml:function(a){return new H.hC(a)},
lk:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bB:function(a){if(a==null)return
return a.$ti},
oj:function(a,b,c){return H.c4(a["$a"+H.f(c)],H.bB(b))},
cZ:function(a,b,c,d){var u=H.c4(a["$a"+H.f(c)],H.bB(b))
return u==null?null:u[d]},
ai:function(a,b,c){var u=H.c4(a["$a"+H.f(b)],H.bB(a))
return u==null?null:u[c]},
z:function(a,b){var u=H.bB(a)
return u==null?null:u[b]},
jK:function(a){return H.bz(a,null)},
bz:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c5(a[0].name)+H.kb(a,1,b)
if(typeof a=="function")return H.c5(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.f(b[t])}if('func' in a)return H.mF(a,b)
if('futureOr' in a)return"FutureOr<"+H.bz("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mF:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.c.I(p,a0[m])
l=u[q]
if(l!=null&&l!==P.K)p+=" extends "+H.bz(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bz(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bz(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bz(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nf(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.O(n[g])
i=i+h+H.bz(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kb:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.b7("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bz(p,c)}return"<"+u.i(0)+">"},
c4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kd:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bB(a)
t=J.V(a)
if(t[b]==null)return!1
return H.lh(H.c4(t[d],u),null,c,null)},
o:function(a,b,c,d){if(a==null)return a
if(H.kd(a,b,c,d))return a
throw H.i(H.aZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c5(b.substring(2))+H.kb(c,0,null),v.mangledGlobalNames)))},
lh:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ax(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ax(a[t],b,c[t],d))return!1
return!0},
og:function(a,b,c){return a.apply(b,H.c4(J.V(b)["$a"+H.f(c)],H.bB(b)))},
lm:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="I"||a===-1||a===-2||H.lm(u)}return!1},
ke:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="I"||b===-1||b===-2||H.lm(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ke(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eU(a,b)}u=J.V(a).constructor
t=H.bB(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ax(u,null,b,null)},
J:function(a,b){if(a!=null&&!H.ke(a,b))throw H.i(H.aZ(a,H.jK(b)))
return a},
ax:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="I")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ax("type" in a?a.type:l,b,s,d)
else if(H.ax(a,b,s,d))return!0
else{if(!('$i'+"ch" in t.prototype))return!1
r=t.prototype["$a"+"ch"]
q=H.c4(r,u?a.slice(1):l)
return H.ax(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.la(a,b,c,d)
if('func' in a)return c.name==="bq"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lh(H.c4(m,u),b,p,d)},
la:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ax(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ax(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ax(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ax(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nt(h,b,g,d)},
nt:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ax(c[s],d,a[s],b))return!1}return!0},
oh:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nr:function(a){var u,t,s,r,q=H.O($.ll.$1(a)),p=$.jB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jH[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.O($.lg.$2(a,q))
if(q!=null){p=$.jB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jH[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jJ(u)
$.jB[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jH[q]=u
return u}if(s==="-"){r=H.jJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lp(a,u)
if(s==="*")throw H.i(P.l0(q))
if(v.leafTags[q]===true){r=H.jJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lp(a,u)},
lp:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kl(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jJ:function(a){return J.kl(a,!1,null,!!a.$iF)},
ns:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jJ(u)
else return J.kl(u,c,null,null)},
nm:function(){if(!0===$.kk)return
$.kk=!0
H.nn()},
nn:function(){var u,t,s,r,q,p,o,n
$.jB=Object.create(null)
$.jH=Object.create(null)
H.nl()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lr.$1(q)
if(p!=null){o=H.ns(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nl:function(){var u,t,s,r,q,p,o=C.x()
o=H.bZ(C.y,H.bZ(C.z,H.bZ(C.p,H.bZ(C.p,H.bZ(C.A,H.bZ(C.B,H.bZ(C.C(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ll=new H.jE(r)
$.lg=new H.jF(q)
$.lr=new H.jG(p)},
bZ:function(a,b){return a(b)||b},
m4:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.i(new P.fx("Illegal RegExp pattern ("+String(p)+")",a))},
ny:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ne:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ls:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ko:function(a,b,c){var u=H.nz(a,b,c)
return u},
nz:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ls(b),'g'),H.ne(c))},
id:function id(a,b,c,d,e,f){var _=this
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
ir:function ir(a){this.a=a},
jN:function jN(a){this.a=a},
ex:function ex(a){this.a=a
this.b=null},
cb:function cb(){},
i_:function i_(){},
hQ:function hQ(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ig:function ig(a){this.a=a},
f5:function f5(a){this.a=a},
hC:function hC(a){this.a=a},
iN:function iN(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dp:function dp(a,b){this.a=a
this.$ti=b},
fN:function fN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cW:function(a){return a},
by:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.c1(b,a))},
mE:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.nd(a,b,c))
return b},
cs:function cs(){},
dv:function dv(){},
cr:function cr(){},
dw:function dw(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
dx:function dx(){},
hj:function hj(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
nf:function(a){return J.kC(a?Object.keys(a):[],null)},
nC:function(a){return v.mangledGlobalNames[a]},
nu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kl:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jD:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kk==null){H.nm()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.l0("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kq()]
if(r!=null)return r
r=H.nr(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.kq(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
m3:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jQ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aR(a,0,4294967295,"length",null))
return J.kC(new Array(a),b)},
kC:function(a,b){return J.jW(H.c(a,[b]))},
jW:function(a){a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dj.prototype
return J.di.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.dk.prototype
if(typeof a=="boolean")return J.fG.prototype
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.K)return a
return J.jD(a)},
kh:function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.K)return a
return J.jD(a)},
jC:function(a){if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.K)return a
return J.jD(a)},
nh:function(a){if(typeof a=="number")return J.cl.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bW.prototype
return a},
ki:function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bW.prototype
return a},
kj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.K)return a
return J.jD(a)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).p(a,b)},
eV:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.np(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kh(a).j(a,b)},
lL:function(a,b,c,d){return J.kj(a).fP(a,b,c,d)},
jO:function(a,b){return J.nh(a).h1(a,b)},
jP:function(a,b){return J.jC(a).w(a,b)},
lM:function(a,b){return J.jC(a).E(a,b)},
lN:function(a){return J.kj(a).gfX(a)},
d1:function(a){return J.V(a).gJ(a)},
bE:function(a){return J.jC(a).gM(a)},
bF:function(a){return J.kh(a).gm(a)},
ks:function(a){return J.jC(a).hI(a)},
lO:function(a,b,c){return J.ki(a).aS(a,b,c)},
lP:function(a){return J.ki(a).hW(a)},
aj:function(a){return J.V(a).i(a)},
a:function a(){},
fG:function fG(){},
dk:function dk(){},
dl:function dl(){},
hr:function hr(){},
bW:function bW(){},
bu:function bu(){},
aM:function aM(a){this.$ti=a},
jX:function jX(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cl:function cl(){},
dj:function dj(){},
di:function di(){},
bt:function bt(){}},P={
mu:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.n6()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c0(new P.iP(s),1)).observe(u,{childList:true})
return new P.iO(s,u,t)}else if(self.setImmediate!=null)return P.n7()
return P.n8()},
mv:function(a){self.scheduleImmediate(H.c0(new P.iQ(H.m(a,{func:1,ret:-1})),0))},
mw:function(a){self.setImmediate(H.c0(new P.iR(H.m(a,{func:1,ret:-1})),0))},
mx:function(a){P.k2(C.i,H.m(a,{func:1,ret:-1}))},
k2:function(a,b){var u=C.e.X(a.a,1000)
return P.mC(u<0?0:u,b)},
kZ:function(a,b){var u=C.e.X(a.a,1000)
return P.mD(u<0?0:u,b)},
mC:function(a,b){var u=new P.eD()
u.dX(a,b)
return u},
mD:function(a,b){var u=new P.eD()
u.dY(a,b)
return u},
my:function(a,b){var u,t,s
b.a=1
try{a.dk(new P.j_(b),new P.j0(b),null)}catch(s){u=H.ao(s)
t=H.c3(s)
P.nw(new P.j1(b,u,t))}},
l5:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaw")
if(u>=4){t=b.bq()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.k(b.c,"$ib0")
b.a=2
b.c=a
a.ct(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iaa")
P.jx(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cM(h.a,b)}g=h.a
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
if(m){H.k(q,"$iaa")
P.jx(i,i,g.b,q.a,q.b)
return}l=$.X
if(l!==n)$.X=n
else l=i
g=b.c
if((g&15)===8)new P.j5(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.j4(u,b,q).$0()}else if((g&2)!==0)new P.j3(h,u,b).$0()
if(l!=null)$.X=l
g=u.b
if(!!J.V(g).$ich){if(g.a>=4){k=H.k(o.c,"$ib0")
o.c=null
b=o.aW(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.l5(g,o)
return}}j=b.b
k=H.k(j.c,"$ib0")
j.c=null
b=j.aW(k)
g=u.a
p=u.b
if(!g){H.J(p,H.z(j,0))
j.a=4
j.c=p}else{H.k(p,"$iaa")
j.a=8
j.c=p}h.a=j
g=j}},
n1:function(a,b){if(H.eU(a,{func:1,args:[P.K,P.af]}))return H.m(a,{func:1,ret:null,args:[P.K,P.af]})
if(H.eU(a,{func:1,args:[P.K]}))return H.m(a,{func:1,ret:null,args:[P.K]})
throw H.i(P.jQ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n0:function(){var u,t
for(;u=$.bY,u!=null;){$.cY=null
t=u.b
$.bY=t
if(t==null)$.cX=null
u.a.$0()}},
n4:function(){$.k9=!0
try{P.n0()}finally{$.cY=null
$.k9=!1
if($.bY!=null)$.kr().$1(P.li())}},
ld:function(a){var u=new P.dZ(a)
if($.bY==null){$.bY=$.cX=u
if(!$.k9)$.kr().$1(P.li())}else $.cX=$.cX.b=u},
n3:function(a){var u,t,s=$.bY
if(s==null){P.ld(a)
$.cY=$.cX
return}u=new P.dZ(a)
t=$.cY
if(t==null){u.b=s
$.bY=$.cY=u}else{u.b=t.b
$.cY=t.b=u
if(u.b==null)$.cX=u}},
nw:function(a){var u=null,t=$.X
if(C.f===t){P.jz(u,u,C.f,a)
return}P.jz(u,u,t,H.m(t.bx(a),{func:1,ret:-1}))},
kY:function(a,b){var u=$.X
if(u===C.f)return P.k2(a,H.m(b,{func:1,ret:-1}))
return P.k2(a,H.m(u.bx(b),{func:1,ret:-1}))},
mr:function(a,b){var u=$.X
if(u===C.f)return P.kZ(a,H.m(b,{func:1,ret:-1,args:[P.aW]}))
return P.kZ(a,H.m(u.cH(b,P.aW),{func:1,ret:-1,args:[P.aW]}))},
jx:function(a,b,c,d,e){var u={}
u.a=d
P.n3(new P.jy(u,e))},
lb:function(a,b,c,d,e){var u,t=$.X
if(t===c)return d.$0()
$.X=c
u=t
try{t=d.$0()
return t}finally{$.X=u}},
lc:function(a,b,c,d,e,f,g){var u,t=$.X
if(t===c)return d.$1(e)
$.X=c
u=t
try{t=d.$1(e)
return t}finally{$.X=u}},
n2:function(a,b,c,d,e,f,g,h,i){var u,t=$.X
if(t===c)return d.$2(e,f)
$.X=c
u=t
try{t=d.$2(e,f)
return t}finally{$.X=u}},
jz:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bx(d):c.fY(d,-1)
P.ld(d)},
iP:function iP(a){this.a=a},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
eD:function eD(){this.c=0},
jp:function jp(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b0:function b0(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aw:function aw(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a){this.a=a
this.b=null},
hT:function hT(){},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
cB:function cB(){},
hU:function hU(){},
aW:function aW(){},
aa:function aa(a,b){this.a=a
this.b=b},
js:function js(){},
jy:function jy(a,b){this.a=a
this.b=b},
jb:function jb(){},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a,b){this.a=a
this.b=b},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function(a,b){return new H.Y([a,b])},
m5:function(a){return H.ng(a,new H.Y([null,null]))},
dq:function(a){return new P.j9([a])},
k7:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mB:function(a,b,c){var u=new P.ee(a,b,[c])
u.c=a.e
return u},
m1:function(a,b,c){var u,t
if(P.ka(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
C.a.h($.ah,a)
try{P.mG(a,u)}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}t=P.kW(b,H.nq(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
jV:function(a,b,c){var u,t
if(P.ka(a))return b+"..."+c
u=new P.b7(b)
C.a.h($.ah,a)
try{t=u
t.a=P.kW(t.a,a,", ")}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ka:function(a){var u,t
for(u=$.ah.length,t=0;t<u;++t)if(a===$.ah[t])return!0
return!1},
mG:function(a,b){var u,t,s,r,q,p,o,n=a.gM(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.f(n.gD(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gD(n);++l
if(!n.t()){if(l<=4){C.a.h(b,H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gD(n);++l
for(;n.t();r=q,q=p){p=n.gD(n);++l
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
kE:function(a,b){var u,t,s=P.dq(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.J(a[t],b))
return s},
kG:function(a){var u,t={}
if(P.ka(a))return"{...}"
u=new P.b7("")
try{C.a.h($.ah,a)
u.a+="{"
t.a=!0
J.lM(a,new P.fR(t,u))
u.a+="}"}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j9:function j9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bX:function bX(a){this.a=a
this.c=this.b=null},
ee:function ee(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fO:function fO(){},
w:function w(){},
fQ:function fQ(){},
fR:function fR(a,b){this.a=a
this.b=b},
a3:function a3(){},
jg:function jg(){},
ef:function ef(){},
cc:function cc(){},
cd:function cd(){},
fm:function fm(){},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fC:function fC(a){this.a=a},
iu:function iu(){},
iv:function iv(){},
jq:function jq(a){this.b=0
this.c=a},
m_:function(a){if(a instanceof H.cb)return a.i(0)
return"Instance of '"+H.f(H.cw(a))+"'"},
m6:function(a,b,c){var u,t=J.m3(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.n(t,u,b)
return H.o(t,"$ib",[c],"$ab")},
kF:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bE(a);u.t();)C.a.h(s,H.J(u.gD(u),c))
if(b)return s
return H.o(J.jW(s),"$ib",t,"$ab")},
k1:function(a){var u,t
if(a.constructor===Array){H.o(a,"$iaM",[P.t],"$aaM")
u=a.length
t=P.kR(0,null,u)
return H.kP(t<u?C.a.dD(a,0,t):a)}return P.mp(a,0,null)},
mp:function(a,b,c){var u,t,s=J.bE(a)
for(u=0;u<b;++u)if(!s.t())throw H.i(P.aR(b,0,u,null,null))
t=[]
for(;s.t();)t.push(s.gD(s))
return H.kP(t)},
mi:function(a){return new H.fH(a,H.m4(a,!1,!0,!1,!1,!1))},
kW:function(a,b,c){var u=J.bE(b)
if(!u.t())return a
if(c.length===0){do a+=H.f(u.gD(u))
while(u.t())}else{a+=H.f(u.gD(u))
for(;u.t();)a=a+c+H.f(u.gD(u))}return a},
l9:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.lK().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.h2(H.J(b,H.ai(c,"cc",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.k0(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lX:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
db:function(a){if(a>=10)return""+a
return"0"+a},
ky:function(a){return new P.bo(1000*a)},
df:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m_(a)},
lQ:function(a){return new P.ay(!1,null,null,a)},
jQ:function(a,b,c){return new P.ay(!0,a,b,c)},
dF:function(a,b){return new P.bO(null,null,!0,a,b,"Value not in range")},
aR:function(a,b,c,d,e){return new P.bO(b,c,!0,a,d,"Invalid value")},
kR:function(a,b,c){if(0>a||a>c)throw H.i(P.aR(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.aR(b,a,c,"end",null))
return b}return c},
kQ:function(a,b){if(typeof a!=="number")return a.aD()
if(a<0)throw H.i(P.aR(a,0,null,b,null))},
S:function(a,b,c,d,e){var u=H.a6(e==null?J.bF(b):e)
return new P.fE(u,!0,a,c,"Index out of range")},
ag:function(a){return new P.is(a)},
l0:function(a){return new P.iq(a)},
kV:function(a){return new P.cA(a)},
bl:function(a){return new P.f7(a)},
x:function(a){return new P.e6(a)},
kn:function(a){H.nu(a)},
N:function N(){},
bm:function bm(a,b){this.a=a
this.b=b},
B:function B(){},
bo:function bo(a){this.a=a},
fi:function fi(){},
fj:function fj(){},
bp:function bp(){},
eY:function eY(){},
dz:function dz(){},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fE:function fE(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
is:function is(a){this.a=a},
iq:function iq(a){this.a=a},
cA:function cA(a){this.a=a},
f7:function f7(a){this.a=a},
hq:function hq(){},
dM:function dM(){},
fc:function fc(a){this.a=a},
e6:function e6(a){this.a=a},
fx:function fx(a,b){this.a=a
this.b=b},
bq:function bq(){},
t:function t(){},
j:function j(){},
aL:function aL(){},
b:function b(){},
D:function D(){},
I:function I(){},
a7:function a7(){},
K:function K(){},
af:function af(){},
h:function h(){},
b7:function b7(a){this.a=a},
nc:function(a){var u,t=J.V(a)
if(!!t.$ibr){u=t.gcK(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eI(a.data,a.height,a.width)},
nb:function(a){if(a instanceof P.eI)return{data:a.a,height:a.b,width:a.c}
return a},
bb:function(a){var u,t,s,r,q
if(a==null)return
u=P.kD(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.O(t[r])
u.n(0,q,a[q])}return u},
na:function(a){var u={}
a.E(0,new P.jA(u))
return u},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a){this.a=a},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(){},
fv:function fv(){},
ja:function ja(){},
as:function as(){},
b3:function b3(){},
fK:function fK(){},
b6:function b6(){},
ho:function ho(){},
hu:function hu(){},
cx:function cx(){},
hX:function hX(){},
n:function n(){},
b8:function b8(){},
ic:function ic(){},
ec:function ec(){},
ed:function ed(){},
en:function en(){},
eo:function eo(){},
ez:function ez(){},
eA:function eA(){},
eG:function eG(){},
eH:function eH(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(a){this.a=a},
f2:function f2(){},
bG:function bG(){},
hp:function hp(){},
e_:function e_(){},
d5:function d5(){},
dE:function dE(){},
bP:function bP(){},
dI:function dI(){},
dP:function dP(){},
dU:function dU(){},
hP:function hP(){},
ev:function ev(){},
ew:function ew(){}},W={
kt:function(){var u=document.createElement("a")
return u},
jS:function(){var u=document.createElement("canvas")
return u},
lZ:function(a,b,c){var u=document.body,t=(u&&C.n).a0(u,a,b,c)
t.toString
u=W.C
u=new H.cJ(new W.ac(t),H.m(new W.fl(),{func:1,ret:P.N,args:[u]}),[u])
return H.k(u.gap(u),"$iP")},
kB:function(a){H.k(a,"$ie")
return"wheel"},
cg:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kj(a)
t=u.gdi(a)
if(typeof t==="string")r=u.gdi(a)}catch(s){H.ao(s)}return r},
j8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l7:function(a,b,c,d){var u=W.j8(W.j8(W.j8(W.j8(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a1:function(a,b,c,d,e){var u=W.lf(new W.iY(c),W.l)
if(u!=null&&!0)J.lL(a,b,u,!1)
return new W.iX(a,b,u,!1,[e])},
l6:function(a){var u=W.kt(),t=window.location
u=new W.bx(new W.jf(u,t))
u.dP(a)
return u},
mz:function(a,b,c,d){H.k(a,"$iP")
H.O(b)
H.O(c)
H.k(d,"$ibx")
return!0},
mA:function(a,b,c,d){var u,t,s
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
l8:function(){var u=P.h,t=P.kE(C.k,u),s=H.z(C.k,0),r=H.m(new W.jn(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jm(t,P.dq(u),P.dq(u),P.dq(u),null)
t.dW(null,new H.fU(C.k,r,[s,u]),q,null)
return t},
lf:function(a,b){var u=$.X
if(u===C.f)return a
return u.cH(a,b)},
q:function q(){},
eW:function eW(){},
d2:function d2(){},
eX:function eX(){},
c7:function c7(){},
d4:function d4(){},
bh:function bh(){},
bH:function bH(){},
ca:function ca(){},
bi:function bi(){},
ce:function ce(){},
f8:function f8(){},
Q:function Q(){},
cf:function cf(){},
f9:function f9(){},
aH:function aH(){},
aI:function aI(){},
fa:function fa(){},
fb:function fb(){},
fe:function fe(){},
aq:function aq(){},
ff:function ff(){},
dc:function dc(){},
dd:function dd(){},
fg:function fg(){},
fh:function fh(){},
iT:function iT(a,b){this.a=a
this.b=b},
P:function P(){},
fl:function fl(){},
l:function l(){},
e:function e(){},
aJ:function aJ(){},
fr:function fr(){},
fs:function fs(){},
fw:function fw(){},
aK:function aK(){},
fB:function fB(){},
bK:function bK(){},
br:function br(){},
ci:function ci(){},
aN:function aN(){},
dr:function dr(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
ha:function ha(){},
hb:function hb(a){this.a=a},
aP:function aP(){},
hc:function hc(){},
a4:function a4(){},
ac:function ac(a){this.a=a},
C:function C(){},
ct:function ct(){},
aQ:function aQ(){},
ht:function ht(){},
hA:function hA(){},
hB:function hB(a){this.a=a},
hD:function hD(){},
aS:function aS(){},
hN:function hN(){},
aT:function aT(){},
hO:function hO(){},
aU:function aU(){},
hR:function hR(){},
hS:function hS(a){this.a=a},
aD:function aD(){},
bQ:function bQ(){},
dN:function dN(){},
hY:function hY(){},
hZ:function hZ(){},
cC:function cC(){},
aV:function aV(){},
aE:function aE(){},
i0:function i0(){},
i1:function i1(){},
i6:function i6(){},
aX:function aX(){},
aF:function aF(){},
ia:function ia(){},
ib:function ib(){},
bw:function bw(){},
it:function it(){},
iK:function iK(){},
b_:function b_(){},
cK:function cK(){},
cL:function cL(){},
iU:function iU(){},
e1:function e1(){},
j7:function j7(){},
ek:function ek(){},
jj:function jj(){},
jk:function jk(){},
iS:function iS(){},
iV:function iV(a){this.a=a},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iX:function iX(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iY:function iY(a){this.a=a},
bx:function bx(a){this.a=a},
A:function A(){},
dy:function dy(a){this.a=a},
hl:function hl(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(){},
jh:function jh(){},
ji:function ji(){},
jm:function jm(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jn:function jn(){},
jl:function jl(){},
dh:function dh(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
al:function al(){},
jf:function jf(a,b){this.a=a
this.b=b},
eJ:function eJ(a){this.a=a},
jr:function jr(a){this.a=a},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e7:function e7(){},
e8:function e8(){},
ea:function ea(){},
eb:function eb(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
el:function el(){},
em:function em(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
cR:function cR(){},
cS:function cS(){},
et:function et(){},
eu:function eu(){},
ey:function ey(){},
eB:function eB(){},
eC:function eC(){},
cT:function cT(){},
cU:function cU(){},
eE:function eE(){},
eF:function eF(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){}},O={
jT:function(a){var u=new O.Z([a])
u.c2(a)
return u},
Z:function Z(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
co:function co(){this.b=this.a=null},
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
cn:function cn(){},
fX:function fX(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aO:function aO(a,b){var _=this
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
bR:function bR(){}},E={
mk:function(a,b){var u=new E.hw(a)
u.dL(a,b)
return u},
mq:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibH)return E.kX(a,!0,!0,!0,!1)
u=W.jS()
t=u.style
t.width="100%"
t.height="100%"
s.gcI(a).h(0,u)
return E.kX(u,!0,!0,!0,!1)},
kX:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dR(),j=H.k(C.q.bV(a,"webgl2",P.m5(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibP")
if(j==null)H.y(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mk(j,a)
u=new T.i3(j)
u.b=H.a6(j.getParameter(3379))
H.a6(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dX(a)
t=new X.fJ()
t.sfi(P.dq(P.t))
u.b=t
t=new X.hd(u)
t.f=0
t.r=V.dC()
t.x=V.dC()
t.ch=t.Q=1
u.c=t
t=new X.fP(u)
t.r=0
t.x=V.dC()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i9(u)
t.f=V.dC()
t.r=V.dC()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seh(H.c([],[[P.cB,P.K]]))
t=u.z
s=document
r=W.a4
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a1(s,"contextmenu",H.m(u.geH(),q),!1,r))
t=u.z
p=W.l
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a1(a,"focus",H.m(u.geN(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a1(a,"blur",H.m(u.geB(),o),!1,p))
t=u.z
n=W.aN
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a1(s,"keyup",H.m(u.geR(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a1(s,"keydown",H.m(u.geP(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a1(a,"mousedown",H.m(u.geV(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a1(a,"mouseup",H.m(u.geZ(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a1(a,l,H.m(u.geX(),q),!1,r))
n=u.z
W.kB(a)
m=W.b_;(n&&C.a).h(n,W.a1(a,H.O(W.kB(a)),H.m(u.gf0(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a1(s,l,H.m(u.geJ(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a1(s,"mouseup",H.m(u.geL(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a1(s,"pointerlockchange",H.m(u.gf2(),o),!1,p))
p=u.z
o=W.aF
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a1(a,"touchstart",H.m(u.gfd(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a1(a,"touchend",H.m(u.gf9(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a1(a,"touchmove",H.m(u.gfb(),s),!1,o))
k.Q=!0
k.ch=!1
k.cx=new P.bm(Date.now(),!1)
k.cy=0
k.cv()
return k},
f3:function f3(){},
ad:function ad(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
dR:function dR(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
i5:function i5(a){this.a=a}},Z={
k5:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cW(c)),35044)
a.bindBuffer(b,null)
return new Z.dY(b,u)},
av:function(a){return new Z.ba(a)},
dY:function dY(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iL:function iL(a){this.a=a},
d7:function d7(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a){this.a=a}},D={
ar:function(){var u=new D.bI()
u.sa9(null)
u.sav(null)
u.c=null
u.d=0
return u},
f6:function f6(){},
bI:function bI(){var _=this
_.d=_.c=_.b=_.a=null},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
E:function E(){this.b=null},
cj:function cj(a){this.b=null
this.$ti=a},
ck:function ck(a){this.b=null
this.$ti=a},
R:function R(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bn:function bn(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a2:function a2(){},
dn:function dn(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dB:function dB(){},
dL:function dL(){}},X={d8:function d8(a,b){this.a=a
this.b=b},dm:function dm(a,b){this.a=a
this.b=b},fJ:function fJ(){this.d=this.b=this.a=null},fP:function fP(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},hd:function hd(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i9:function i9(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dX:function dX(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m0:function(a){var u=new X.fy(),t=V.c_(1)
u.a=new V.bk(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kS
if(t==null){t=V.mj(0,0,1,1)
$.kS=t}u.r=t
return u},
d9:function d9(){},
fy:function fy(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){}},V={
c_:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
kp:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dw(a-b,u)
return(a<0?a+u:a)+b},
H:function(a,b,c){if(a==null)return C.c.a2("null",c)
return C.c.a2(C.d.dl(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
c2:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.H(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.d(p,q)
C.a.n(p,q,C.c.a2(p[q],t))}return p},
km:function(a){return C.d.hT(Math.pow(2,C.J.bJ(Math.log(H.n9(a))/Math.log(2))))},
k_:function(){var u=$.kI
return u==null?$.kI=V.b5(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b5:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kH:function(a,b,c){var u=c.B(0,Math.sqrt(c.L(c))),t=b.aK(u),s=t.B(0,Math.sqrt(t.L(t))),r=u.aK(s),q=new V.L(a.a,a.b,a.c),p=s.aE(0).L(q),o=r.aE(0).L(q),n=u.aE(0).L(q)
return V.b5(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
dC:function(){var u=$.kM
return u==null?$.kM=new V.am(0,0):u},
kN:function(){var u=$.cu
return u==null?$.cu=new V.aA(0,0,0):u},
mj:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dG(a,b,c,d)},
cI:function(){var u=$.l3
return u==null?$.l3=new V.L(0,0,0):u},
ms:function(){var u=$.iw
return u==null?$.iw=new V.L(-1,0,0):u},
k4:function(){var u=$.ix
return u==null?$.ix=new V.L(0,1,0):u},
mt:function(){var u=$.iy
return u==null?$.iy=new V.L(0,0,1):u},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a){this.a=a},
du:function du(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ab:function ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
am:function am(a,b){this.a=a
this.b=b},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
T:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.i(P.x("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.as(a,0)
t=C.c.as(b,0)
s=new V.hv()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.hE()
u.dM(a)
return u},
i8:function(){var u=new V.i7(),t=P.h
u.sfI(new H.Y([t,V.cz]))
u.sfL(new H.Y([t,V.cE]))
u.c=null
return u},
b1:function b1(){},
ak:function ak(){},
ds:function ds(){},
ae:function ae(){this.a=null},
hv:function hv(){this.b=this.a=null},
hE:function hE(){this.a=null},
cz:function cz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a){this.b=a
this.c=null},
i7:function i7(){this.c=this.b=this.a=null},
cF:function cF(a){this.b=a
this.a=this.c=null},
nx:function(a){P.mr(C.G,new V.jL(a))},
mm:function(a){var u=new V.hI()
u.dO(a,!0)
return u},
bj:function bj(){},
jL:function jL(a){this.a=a},
fd:function fd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fA:function fA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hs:function hs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hI:function hI(){this.b=this.a=null},
hK:function hK(a){this.a=a},
hJ:function hJ(a){this.a=a},
hL:function hL(a){this.a=a}},U={
kx:function(a){var u=new U.da()
u.a=a
return u},
da:function da(){this.b=this.a=null},
bM:function bM(){},
dH:function dH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={de:function de(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m7:function(a,b){var u=a.ak,t=new A.fV(b,u)
t.dN(b,u)
t.dK(a,b)
return t},
m8:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.ga6(a0)+a1.ga6(a1)+a2.ga6(a2)+a3.ga6(a3)+a4.ga6(a4)+a5.ga6(a5)+a6.ga6(a6)+a7.ga6(a7)+a8.ga6(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.u)(a9),++t)f+="_"+H.f(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.u)(b0),++t)f+="_"+H.f(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.u)(b1),++t)f+="_"+H.f(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.bf()
if(l){u=$.be()
g=new Z.ba(g.a|u.a)}if(k){u=$.bd()
g=new Z.ba(g.a|u.a)}if(j){u=$.bg()
g=new Z.ba(g.a|u.a)}if(i){u=$.bc()
g=new Z.ba(g.a|u.a)}return new A.fY(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jv:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jw:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jv(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jM(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
mK:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jv(b,t,"emission")
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
mH:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jw(b,t,"ambient")
b.a+="\n"},
mI:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jw(b,t,"diffuse")
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
mL:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jw(b,t,"invDiffuse")
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
mR:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jw(b,t,"specular")
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
mN:function(a,b){var u,t,s
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
mP:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jv(b,t,"reflect")
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
mQ:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jv(b,t,"refract")
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
mJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.jM(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ad()
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
n=a.b
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
mO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.jM(t)
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
if(typeof u!=="number")return u.ad()
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
k=H.c([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(k,"specular(norm, normDir)")
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
mS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.jM(t)
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
if(typeof u!=="number")return u.ad()
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
i=H.c([],u)
u=a.c
if(u.a||u.b||!1)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(i,"specular(norm, litVec)")
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
mM:function(a,b){var u,t
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
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.l(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mT:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.b7("")
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
A.mK(a,j)
A.mH(a,j)
A.mI(a,j)
A.mL(a,j)
A.mR(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.mP(a,j)
A.mQ(a,j)}A.mN(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.mJ(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.mO(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.mS(a,q[o],j)
A.mM(a,j)}q=j.a+="// === Main ===\n"
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
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.ae(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.ae(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.ae(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.l(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mU:function(a,b){var u,t,s
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
mW:function(a,b){var u
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
mV:function(a,b){var u
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
mY:function(a,b){var u,t
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
mZ:function(a,b){var u,t
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
mX:function(a,b){var u
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
n_:function(a,b){var u
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
jM:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.ae(a,1)},
k3:function(a,b,c,d,e){var u=new A.ii(a,c,e)
u.f=d
u.sfN(P.m6(d,0,P.t))
return u},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.a=a},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(a,b){var _=this
_.i2=_.cN=_.cM=_.cL=_.ak=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ia=_.i9=_.i8=_.bI=_.bH=_.bG=_.bF=_.bE=_.bD=_.i7=_.cZ=_.cY=_.i6=_.cX=_.cW=_.cV=_.i5=_.cU=_.cT=_.cS=_.i4=_.cR=_.cQ=_.i3=_.cP=_.cO=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
az:function az(a,b){this.a=a
this.b=b},
aB:function aB(a,b){this.a=a
this.b=b},
aC:function aC(a,b){this.a=a
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
_.ak=b3
_.cL=b4},
bS:function bS(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bT:function bT(a,b,c,d,e,f,g,h,i,j){var _=this
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
bV:function bV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dT:function dT(){},
io:function io(a){this.a=a},
at:function at(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a5:function a5(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
U:function U(a,b,c){this.a=a
this.c=b
this.d=c},
cG:function cG(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
cH:function cH(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c},
a9:function a9(a,b,c){this.a=a
this.c=b
this.d=c},
bU:function bU(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ju:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cV:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.L(h,g+a1,f+a2)
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
j.d=i}m=F.ju(i)
l=F.ju(j.b)
k=F.nA(d,a0,new F.jt(j,F.ju(j.c),F.ju(j.d),l,m,c),b)
if(k!=null)a.bO(k)},
nA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.kU()
t=H.c([],[F.au])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cE(new V.bk(p,0,0,1),new V.am(r,1))
c.$3(o,r,0)
C.a.h(t,o.bC(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cE(new V.bk(j,i,h,1),new V.am(r,m))
c.$3(o,r,n)
C.a.h(t,o.bC(d))}}u.d.fQ(a+1,b+1,t)
return u},
dg:function(a,b,c){var u=new F.a0(),t=a.a
if(t==null)H.y(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.y(P.x("May not create a face with vertices attached to different shapes."))
u.fw(a)
u.fz(b)
u.fA(c)
C.a.h(u.a.a.d.b,u)
u.a.a.T()
return u},
kU:function(){var u=new F.dJ(),t=new F.iz(u)
t.b=!1
t.sfO(H.c([],[F.au]))
u.a=t
t=new F.hH(u)
t.sbo(H.c([],[F.bv]))
u.b=t
t=new F.hG(u)
t.seo(H.c([],[F.b4]))
u.c=t
t=new F.hF(u)
t.sei(H.c([],[F.a0]))
u.d=t
u.e=null
return u},
l4:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.au(),r=new F.iH()
r.sbo(H.c([],[F.bv]))
s.b=r
r=new F.iD()
u=[F.b4]
r.sep(H.c([],u))
r.seq(H.c([],u))
s.c=r
r=new F.iA()
u=[F.a0]
r.sej(H.c([],u))
r.sek(H.c([],u))
r.sel(H.c([],u))
s.d=r
h=$.lG()
s.e=0
r=$.bf()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.be().a)!==0?e:t
s.x=(u&$.bd().a)!==0?b:t
s.y=(u&$.bg().a)!==0?f:t
s.z=(u&$.bD().a)!==0?g:t
s.Q=(u&$.lH().a)!==0?c:t
s.ch=(u&$.c6().a)!==0?i:0
s.cx=(u&$.bc().a)!==0?a:t
return s},
jt:function jt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a0:function a0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fq:function fq(){},
hM:function hM(){},
b4:function b4(){this.b=this.a=null},
fL:function fL(){},
ih:function ih(){},
bv:function bv(){this.a=null},
dJ:function dJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hF:function hF(a){this.a=a
this.b=null},
hG:function hG(a){this.a=a
this.b=null},
hH:function hH(a){this.a=a
this.b=null},
au:function au(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iJ:function iJ(a){this.a=a},
iI:function iI(a){this.a=a},
iz:function iz(a){this.a=a
this.c=this.b=null},
iA:function iA(){this.d=this.c=this.b=null},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(){this.c=this.b=null},
iF:function iF(){},
iE:function iE(){},
iG:function iG(){},
hm:function hm(){},
iH:function iH(){this.b=null},
ln:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d=V.mm("Test 005"),c=W.jS()
c.className="pageLargeCanvas"
c.id=f
d.a.appendChild(c)
u=[P.h]
d.cF(H.c(["A test of the Material Lighting shader with 2D textures and directional ","lighting. This test has texturing for emission, ambient, diffuse, and ","specular. The same texture is used for ambient and diffuse. ","The emission texture makes the lights on the panel glow. ","The specular texture makes specific parts shiny and other parts not."],u))
d.cF(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(f)
if(t==null)H.y(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.mq(t,!0,!0,!0,!1)
r=new E.ad()
r.a=""
r.b=!0
u=E.ad
r.se7(0,O.jT(u))
r.y.b8(r.ghs(),r.ghv())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbY(0,e)
r.saP(e)
q=F.kU()
F.cV(q,e,e,1,1,1,0,0,1)
F.cV(q,e,e,1,1,0,1,0,3)
F.cV(q,e,e,1,1,0,0,1,2)
F.cV(q,e,e,1,1,-1,0,0,0)
F.cV(q,e,e,1,1,0,-1,0,0)
F.cV(q,e,e,1,1,0,0,-1,3)
q.ay()
q.hr(new F.iE(),new F.hm())
r.sbY(0,q)
p=new U.dH()
p.r=p.f=p.e=p.d=p.c=p.b=p.a=0
p.sdt(0)
p.sd9(0,0)
p.sdg(0)
o=p.d
if(!(Math.abs(o-0.1)<$.M().a)){p.d=0.1
o=new D.R("deltaYaw",o,0.1,[P.B])
o.b=!0
p.au(o)}o=p.e
if(!(Math.abs(o-0.21)<$.M().a)){p.e=0.21
o=new D.R("deltaPitch",o,0.21,[P.B])
o.b=!0
p.au(o)}o=p.f
if(!(Math.abs(o-0.32)<$.M().a)){p.f=0.32
o=new D.R("deltaRoll",o,0.32,[P.B])
o.b=!0
p.au(o)}r.saP(p)
n=s.f.bN("../resources/CtrlPnlColor.png")
m=new O.dt()
m.se4(O.jT(V.ab))
m.e.b8(m.gex(),m.gez())
p=new O.aO(m,"emission")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a_(0,0,0)
m.f=p
p=new O.aO(m,"ambient")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a_(0,0,0)
m.r=p
p=new O.aO(m,"diffuse")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a_(0,0,0)
m.x=p
p=new O.aO(m,"invDiffuse")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a_(0,0,0)
m.y=p
p=new O.h0(m,"specular")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a_(0,0,0)
p.ch=100
m.z=p
p=new O.fX(m,"bump")
p.c=new A.a8(!1,!1,!1)
m.Q=p
m.ch=null
p=new O.aO(m,"reflect")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a_(0,0,0)
m.cx=p
p=new O.h_(m,"refract")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a_(0,0,0)
p.ch=1
m.cy=p
p=new O.fW(m,"alpha")
p.c=new A.a8(!1,!1,!1)
p.f=1
m.db=p
p=new D.dn()
p.c2(D.a2)
p.sef(H.c([],[D.bn]))
p.sff(H.c([],[D.dB]))
p.sfH(H.c([],[D.dL]))
p.y=p.x=null
p.bX(p.gev(),p.gf5(),p.gf7())
m.dx=p
o=new O.fZ()
o.b=new V.bk(0,0,0,0)
o.c=1
o.d=10
o.e=!1
m.dy=o
o=p.x
p=o==null?p.x=D.ar():o
p.h(0,m.gfo())
p=m.dx
o=p.y
p=o==null?p.y=D.ar():o
p.h(0,m.gaU())
m.fr=null
p=m.dx
l=V.k4()
o=U.kx(V.kH(V.kN(),l,new V.L(1,-1,-3)))
k=new V.a_(1,1,1)
j=new D.bn()
j.c=new V.a_(1,1,1)
j.a=V.mt()
j.d=V.k4()
j.e=V.ms()
i=j.b
j.b=o
o.gv().h(0,j.gdQ())
o=new D.R("mover",i,j.b,[U.bM])
o.b=!0
j.af(o)
if(!j.c.p(0,k)){i=j.c
j.c=k
o=new D.R("color",i,k,[V.a_])
o.b=!0
j.af(o)}p.h(0,j)
m.f.sb3(s.f.bN("../resources/CtrlPnlEmission.png"))
m.r.saZ(0,new V.a_(V.c_(0.2),V.c_(0.2),V.c_(0.2)))
m.x.saZ(0,new V.a_(V.c_(0.8),V.c_(0.8),V.c_(0.8)))
m.r.sb3(n)
m.x.sb3(n)
m.z.sb3(s.f.bN("../resources/CtrlPnlSpecular.png"))
p=m.z
p.bt(new A.a8(!0,p.c.b,!1))
p.cz(10)
p=new M.de()
p.a=!0
p.sdS(0,O.jT(u))
p.e.b8(p.geD(),p.geF())
p.y=p.x=p.r=p.f=null
h=X.m0(e)
g=new X.dA()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saP(e)
u=g.c
if(!(Math.abs(u-1.0471975511965976)<$.M().a)){g.c=1.0471975511965976
u=new D.R("fov",u,1.0471975511965976,[P.B])
u.b=!0
g.ar(u)}u=g.d
if(!(Math.abs(u-0.1)<$.M().a)){g.d=0.1
u=new D.R("near",u,0.1,[P.B])
u.b=!0
g.ar(u)}u=g.e
if(!(Math.abs(u-2000)<$.M().a)){g.e=2000
u=new D.R("far",u,2000,[P.B])
u.b=!0
g.ar(u)}u=p.b
if(u!==g){if(u!=null)u.gv().F(0,p.ga8())
i=p.b
p.b=g
g.gv().h(0,p.ga8())
u=new D.R("camera",i,p.b,[X.d9])
u.b=!0
p.ag(u)}u=p.c
if(u!==h){if(u!=null)u.gv().F(0,p.ga8())
i=p.c
p.c=h
h.gv().h(0,p.ga8())
u=new D.R("target",i,p.c,[X.dO])
u.b=!0
p.ag(u)}p.sdj(e)
p.sdj(m)
p.e.h(0,r)
p.b.saP(U.kx(V.b5(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==p){if(u!=null)u.gv().F(0,s.gc3())
s.d=p
p.gv().h(0,s.gc3())
s.c4()}u=s.z
if(u==null)u=s.z=D.ar()
p={func:1,ret:-1,args:[D.E]}
o=H.m(new F.jI(d,m),p)
if(u.b==null)u.sav(H.c([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.nx(s)},
jI:function jI(a,b){this.a=a
this.b=b}},T={cD:function cD(){},dQ:function dQ(){},i2:function i2(){var _=this
_.y=_.d=_.c=_.b=_.a=null},i3:function i3(a){var _=this
_.a=a
_.e=_.d=_.b=null},i4:function i4(a,b,c,d,e,f,g){var _=this
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
H.jY.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gJ:function(a){return H.cv(a)},
i:function(a){return"Instance of '"+H.f(H.cw(a))+"'"}}
J.fG.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iN:1}
J.dk.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dl.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hr.prototype={}
J.bW.prototype={}
J.bu.prototype={
i:function(a){var u=a[$.lv()]
if(u==null)return this.dG(a)
return"JavaScript function for "+H.f(J.aj(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibq:1}
J.aM.prototype={
h:function(a,b){H.J(b,H.z(a,0))
if(!!a.fixed$length)H.y(P.ag("add"))
a.push(b)},
de:function(a,b){if(!!a.fixed$length)H.y(P.ag("removeAt"))
if(b<0||b>=a.length)throw H.i(P.dF(b,null))
return a.splice(b,1)[0]},
F:function(a,b){var u
if(!!a.fixed$length)H.y(P.ag("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
E:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.bl(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.f(a[u]))
return t.join(b)},
ho:function(a){return this.l(a,"")},
hi:function(a,b){var u,t,s
H.m(b,{func:1,ret:P.N,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.G(b.$1(s)))return s
if(a.length!==u)throw H.i(P.bl(a))}throw H.i(H.fF())},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dD:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aR(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aR(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
ghh:function(a){if(a.length>0)return a[0]
throw H.i(H.fF())},
gb1:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.fF())},
cG:function(a,b){var u,t
H.m(b,{func:1,ret:P.N,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.G(b.$1(a[t])))return!0
if(a.length!==u)throw H.i(P.bl(a))}return!1},
b9:function(a,b){var u=H.z(a,0)
H.m(b,{func:1,ret:P.t,args:[u,u]})
if(!!a.immutable$list)H.y(P.ag("sort"))
H.dK(a,0,a.length-1,b,u)},
K:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.jV(a,"[","]")},
gM:function(a){return new J.ap(a,a.length,[H.z(a,0)])},
gJ:function(a){return H.cv(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.y(P.ag("set length"))
if(b<0)throw H.i(P.aR(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.i(H.c1(a,b))
return a[b]},
n:function(a,b,c){H.J(c,H.z(a,0))
if(!!a.immutable$list)H.y(P.ag("indexed set"))
if(b>=a.length||b<0)throw H.i(H.c1(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.jX.prototype={}
J.ap.prototype={
gD:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.u(s))
u=t.c
if(u>=r){t.sc7(null)
return!1}t.sc7(s[u]);++t.c
return!0},
sc7:function(a){this.d=H.J(a,H.z(this,0))},
$iaL:1}
J.cl.prototype={
h1:function(a,b){var u
H.lo(b)
if(typeof b!=="number")throw H.i(H.bA(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb0(b)
if(this.gb0(a)===u)return 0
if(this.gb0(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb0:function(a){return a===0?1/a<0:a<0},
hT:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.ag(""+a+".toInt()"))},
bJ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.ag(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.ag(""+a+".round()"))},
dl:function(a,b){var u
if(b>20)throw H.i(P.aR(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb0(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dw:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dJ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cA(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.cA(a,b)},
cA:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.ag("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
aX:function(a,b){var u
if(a>0)u=this.fF(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fF:function(a,b){return b>31?0:a>>>b},
$iB:1,
$ia7:1}
J.dj.prototype={$it:1}
J.di.prototype={}
J.bt.prototype={
bB:function(a,b){if(b<0)throw H.i(H.c1(a,b))
if(b>=a.length)H.y(H.c1(a,b))
return a.charCodeAt(b)},
as:function(a,b){if(b>=a.length)throw H.i(H.c1(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(typeof b!=="string")throw H.i(P.jQ(b,null,null))
return a+b},
ba:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aS:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.dF(b,null))
if(b>c)throw H.i(P.dF(b,null))
if(c>a.length)throw H.i(P.dF(c,null))
return a.substring(b,c)},
ae:function(a,b){return this.aS(a,b,null)},
hW:function(a){return a.toLowerCase()},
R:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a2:function(a,b){var u=b-a.length
if(u<=0)return a
return this.R(" ",u)+a},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikK:1,
$ih:1}
H.p.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.bB(this.a,b)},
$adW:function(){return[P.t]},
$aw:function(){return[P.t]},
$aj:function(){return[P.t]},
$ab:function(){return[P.t]}}
H.fk.prototype={}
H.bL.prototype={
gM:function(a){var u=this
return new H.cm(u,u.gm(u),[H.ai(u,"bL",0)])},
b7:function(a,b){return this.dF(0,H.m(b,{func:1,ret:P.N,args:[H.ai(this,"bL",0)]}))}}
H.cm.prototype={
gD:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.kh(s),q=r.gm(s)
if(t.b!==q)throw H.i(P.bl(s))
u=t.c
if(u>=q){t.saG(null)
return!1}t.saG(r.w(s,u));++t.c
return!0},
saG:function(a){this.d=H.J(a,H.z(this,0))},
$iaL:1}
H.fS.prototype={
gM:function(a){return new H.fT(J.bE(this.a),this.b,this.$ti)},
gm:function(a){return J.bF(this.a)},
w:function(a,b){return this.b.$1(J.jP(this.a,b))},
$aj:function(a,b){return[b]}}
H.fT.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.saG(u.c.$1(t.gD(t)))
return!0}u.saG(null)
return!1},
gD:function(a){return this.a},
saG:function(a){this.a=H.J(a,H.z(this,1))},
$aaL:function(a,b){return[b]}}
H.fU.prototype={
gm:function(a){return J.bF(this.a)},
w:function(a,b){return this.b.$1(J.jP(this.a,b))},
$abL:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cJ.prototype={
gM:function(a){return new H.iM(J.bE(this.a),this.b,this.$ti)}}
H.iM.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(H.G(t.$1(u.gD(u))))return!0
return!1},
gD:function(a){var u=this.a
return u.gD(u)}}
H.bJ.prototype={}
H.dW.prototype={}
H.dV.prototype={}
H.id.prototype={
a1:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.ir.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jN.prototype={
$1:function(a){if(!!J.V(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.ex.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaf:1}
H.cb.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibq:1,
ghY:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i_.prototype={}
H.hQ.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c5(u)+"'"}}
H.c8.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c8))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cv(this.a)
else u=typeof t!=="object"?J.d1(t):H.cv(t)
return(u^H.cv(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.cw(u))+"'")}}
H.ig.prototype={
i:function(a){return this.a}}
H.f5.prototype={
i:function(a){return this.a}}
H.hC.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.iN.prototype={
i:function(a){return"Assertion failed: "+P.df(this.a)}}
H.Y.prototype={
gm:function(a){return this.a},
gY:function(a){return new H.dp(this,[H.z(this,0)])},
cJ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.ci(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.ci(t,b)}else return s.hm(b)},
hm:function(a){var u=this.d
if(u==null)return!1
return this.bK(this.bh(u,J.d1(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aV(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aV(r,b)
s=t==null?null:t.b
return s}else return q.hn(b)},
hn:function(a){var u,t,s=this.d
if(s==null)return
u=this.bh(s,J.d1(a)&0x3ffffff)
t=this.bK(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.J(b,H.z(o,0))
H.J(c,H.z(o,1))
if(typeof b==="string"){u=o.b
o.c8(u==null?o.b=o.bm():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.c8(t==null?o.c=o.bm():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bm()
r=J.d1(b)&0x3ffffff
q=o.bh(s,r)
if(q==null)o.bu(s,r,[o.bn(b,c)])
else{p=o.bK(q,b)
if(p>=0)q[p].b=c
else q.push(o.bn(b,c))}}},
E:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.z(s,0),H.z(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.bl(s))
u=u.c}},
c8:function(a,b,c){var u,t=this
H.J(b,H.z(t,0))
H.J(c,H.z(t,1))
u=t.aV(a,b)
if(u==null)t.bu(a,b,t.bn(b,c))
else u.b=c},
es:function(){this.r=this.r+1&67108863},
bn:function(a,b){var u,t=this,s=new H.fM(H.J(a,H.z(t,0)),H.J(b,H.z(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.es()
return s},
bK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.kG(this)},
aV:function(a,b){return a[b]},
bh:function(a,b){return a[b]},
bu:function(a,b,c){a[b]=c},
ed:function(a,b){delete a[b]},
ci:function(a,b){return this.aV(a,b)!=null},
bm:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bu(t,u,t)
this.ed(t,u)
return t}}
H.fM.prototype={}
H.dp.prototype={
gm:function(a){return this.a.a},
gM:function(a){var u=this.a,t=new H.fN(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fN.prototype={
gD:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bl(t))
else{t=u.c
if(t==null){u.scl(null)
return!1}else{u.scl(t.a)
u.c=u.c.c
return!0}}},
scl:function(a){this.d=H.J(a,H.z(this,0))},
$iaL:1}
H.jE.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.jF.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.jG.prototype={
$1:function(a){return this.a(H.O(a))},
$S:26}
H.fH.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ikK:1}
H.cs.prototype={$inX:1}
H.dv.prototype={
gm:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cr.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]},
$abJ:function(){return[P.B]},
$aw:function(){return[P.B]},
$ij:1,
$aj:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.dw.prototype={
$abJ:function(){return[P.t]},
$aw:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]},
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
H.dx.prototype={
gm:function(a){return a.length},
j:function(a,b){H.by(b,a,a.length)
return a[b]},
$inY:1}
H.hj.prototype={
gm:function(a){return a.length},
j:function(a,b){H.by(b,a,a.length)
return a[b]},
$inZ:1}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
P.iP.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:13}
P.iO.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:36}
P.iQ.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iR.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eD.prototype={
dX:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c0(new P.jp(this,b),0),a)
else throw H.i(P.ag("`setTimeout()` not found."))},
dY:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c0(new P.jo(this,a,Date.now(),b),0),a)
else throw H.i(P.ag("Periodic timer."))},
$iaW:1}
P.jp.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jo.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dJ(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.b0.prototype={
hq:function(a){if((this.c&15)!==6)return!0
return this.b.b.bT(H.m(this.d,{func:1,ret:P.N,args:[P.K]}),a.a,P.N,P.K)},
hk:function(a){var u=this.e,t=P.K,s={futureOr:1,type:H.z(this,1)},r=this.b.b
if(H.eU(u,{func:1,args:[P.K,P.af]}))return H.kg(r.hN(u,a.a,a.b,null,t,P.af),s)
else return H.kg(r.bT(H.m(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.aw.prototype={
dk:function(a,b,c){var u,t,s,r=H.z(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.X
if(u!==C.f){H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.n1(b,u)}t=new P.aw($.X,[c])
s=b==null?1:3
this.c9(new P.b0(t,s,a,b,[r,c]))
return t},
hS:function(a,b){return this.dk(a,null,b)},
c9:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib0")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaw")
s=u.a
if(s<4){u.c9(a)
return}t.a=s
t.c=u.c}P.jz(null,null,t.b,H.m(new P.iZ(t,a),{func:1,ret:-1}))}},
ct:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib0")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaw")
u=q.a
if(u<4){q.ct(a)
return}p.a=u
p.c=q.c}o.a=p.aW(a)
P.jz(null,null,p.b,H.m(new P.j2(o,p),{func:1,ret:-1}))}},
bq:function(){var u=H.k(this.c,"$ib0")
this.c=null
return this.aW(u)},
aW:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cd:function(a){var u,t,s=this,r=H.z(s,0)
H.kg(a,{futureOr:1,type:r})
u=s.$ti
if(H.kd(a,"$ich",u,"$ach"))if(H.kd(a,"$iaw",u,null))P.l5(a,s)
else P.my(a,s)
else{t=s.bq()
H.J(a,r)
s.a=4
s.c=a
P.cM(s,t)}},
ce:function(a,b){var u,t=this
H.k(b,"$iaf")
u=t.bq()
t.a=8
t.c=new P.aa(a,b)
P.cM(t,u)},
$ich:1}
P.iZ.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:1}
P.j2.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:1}
P.j_.prototype={
$1:function(a){var u=this.a
u.a=0
u.cd(a)},
$S:13}
P.j0.prototype={
$2:function(a,b){H.k(b,"$iaf")
this.a.ce(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.j1.prototype={
$0:function(){this.a.ce(this.b,this.c)},
$S:1}
P.j5.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dh(H.m(s.d,{func:1}),null)}catch(r){u=H.ao(r)
t=H.c3(r)
if(o.d){s=H.k(o.a.a.c,"$iaa").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iaa")
else q.b=new P.aa(u,t)
q.a=!0
return}if(!!J.V(n).$ich){if(n instanceof P.aw&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iaa")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.hS(new P.j6(p),null)
s.a=!1}},
$S:2}
P.j6.prototype={
$1:function(a){return this.a},
$S:34}
P.j4.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.z(s,0)
q=H.J(n.c,r)
p=H.z(s,1)
n.a.b=s.b.b.bT(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ao(o)
t=H.c3(o)
s=n.a
s.b=new P.aa(u,t)
s.a=!0}},
$S:2}
P.j3.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iaa")
r=m.c
if(H.G(r.hq(u))&&r.e!=null){q=m.b
q.b=r.hk(u)
q.a=!1}}catch(p){t=H.ao(p)
s=H.c3(p)
r=H.k(m.a.a.c,"$iaa")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aa(t,s)
n.a=!0}},
$S:2}
P.dZ.prototype={}
P.hT.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.aw($.X,[P.t])
r.a=0
u=H.z(s,0)
t=H.m(new P.hV(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.hW(r,q),{func:1,ret:-1})
W.a1(s.a,s.b,t,!1,u)
return q}}
P.hV.prototype={
$1:function(a){H.J(a,H.z(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.z(this.b,0)]}}}
P.hW.prototype={
$0:function(){this.b.cd(this.a.a)},
$S:1}
P.cB.prototype={}
P.hU.prototype={}
P.aW.prototype={}
P.aa.prototype={
i:function(a){return H.f(this.a)},
$ibp:1}
P.js.prototype={$ioc:1}
P.jy.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dz():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:1}
P.jb.prototype={
hO:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.f===$.X){a.$0()
return}P.lb(r,r,this,a,-1)}catch(s){u=H.ao(s)
t=H.c3(s)
P.jx(r,r,this,u,H.k(t,"$iaf"))}},
hP:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.J(b,c)
try{if(C.f===$.X){a.$1(b)
return}P.lc(r,r,this,a,b,-1,c)}catch(s){u=H.ao(s)
t=H.c3(s)
P.jx(r,r,this,u,H.k(t,"$iaf"))}},
fY:function(a,b){return new P.jd(this,H.m(a,{func:1,ret:b}),b)},
bx:function(a){return new P.jc(this,H.m(a,{func:1,ret:-1}))},
cH:function(a,b){return new P.je(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
dh:function(a,b){H.m(a,{func:1,ret:b})
if($.X===C.f)return a.$0()
return P.lb(null,null,this,a,b)},
bT:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.J(b,d)
if($.X===C.f)return a.$1(b)
return P.lc(null,null,this,a,b,c,d)},
hN:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.J(b,e)
H.J(c,f)
if($.X===C.f)return a.$2(b,c)
return P.n2(null,null,this,a,b,c,d,e,f)}}
P.jd.prototype={
$0:function(){return this.a.dh(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jc.prototype={
$0:function(){return this.a.hO(this.b)},
$S:2}
P.je.prototype={
$1:function(a){var u=this.c
return this.a.hP(this.b,H.J(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j9.prototype={
gM:function(a){var u=this,t=new P.ee(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
K:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ibX")!=null}else{t=this.e8(b)
return t}},
e8:function(a){var u=this.d
if(u==null)return!1
return this.bg(this.cm(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.J(b,H.z(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.ca(u==null?s.b=P.k7():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.ca(t==null?s.c=P.k7():t,b)}else return s.e_(0,b)},
e_:function(a,b){var u,t,s,r=this
H.J(b,H.z(r,0))
u=r.d
if(u==null)u=r.d=P.k7()
t=r.cf(b)
s=u[t]
if(s==null)u[t]=[r.bd(b)]
else{if(r.bg(s,b)>=0)return!1
s.push(r.bd(b))}return!0},
F:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fk(this.c,b)
else return this.fj(0,b)},
fj:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cm(r,b)
t=s.bg(u,b)
if(t<0)return!1
s.cB(u.splice(t,1)[0])
return!0},
ca:function(a,b){H.J(b,H.z(this,0))
if(H.k(a[b],"$ibX")!=null)return!1
a[b]=this.bd(b)
return!0},
fk:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ibX")
if(u==null)return!1
this.cB(u)
delete a[b]
return!0},
cc:function(){this.r=1073741823&this.r+1},
bd:function(a){var u,t=this,s=new P.bX(H.J(a,H.z(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cc()
return s},
cB:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cc()},
cf:function(a){return J.d1(a)&1073741823},
cm:function(a,b){return a[this.cf(b)]},
bg:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.bX.prototype={}
P.ee.prototype={
gD:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bl(t))
else{t=u.c
if(t==null){u.scb(null)
return!1}else{u.scb(H.J(t.a,H.z(u,0)))
u.c=u.c.b
return!0}}},
scb:function(a){this.d=H.J(a,H.z(this,0))},
$iaL:1}
P.fO.prototype={$ij:1,$ib:1}
P.w.prototype={
gM:function(a){return new H.cm(a,this.gm(a),[H.cZ(this,a,"w",0)])},
w:function(a,b){return this.j(a,b)},
hV:function(a,b){var u,t=this,s=H.c([],[H.cZ(t,a,"w",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.n(s,u,t.j(a,u))
return s},
hU:function(a){return this.hV(a,!0)},
i:function(a){return P.jV(a,"[","]")}}
P.fQ.prototype={}
P.fR.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:16}
P.a3.prototype={
E:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.cZ(s,a,"a3",0),H.cZ(s,a,"a3",1)]})
for(u=J.bE(s.gY(a));u.t();){t=u.gD(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bF(this.gY(a))},
i:function(a){return P.kG(a)},
$iD:1}
P.jg.prototype={
aa:function(a,b){var u
for(u=J.bE(H.o(b,"$ij",this.$ti,"$aj"));u.t();)this.h(0,u.gD(u))},
i:function(a){return P.jV(this,"{","}")},
w:function(a,b){var u,t,s,r=this
P.kQ(b,"index")
for(u=P.mB(r,r.r,H.z(r,0)),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.i(P.S(b,r,"index",null,t))},
$ij:1,
$ikT:1}
P.ef.prototype={}
P.cc.prototype={}
P.cd.prototype={}
P.fm.prototype={
$acc:function(){return[P.h,[P.b,P.t]]}}
P.fD.prototype={
i:function(a){return this.a}}
P.fC.prototype={
ea:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.b7("")
if(r>b)q.a+=C.c.aS(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lO(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acd:function(){return[P.h,P.h]}}
P.iu.prototype={}
P.iv.prototype={
h2:function(a){var u,t,s=P.kR(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jq(u)
if(t.em(a,0,s)!==s)t.cC(C.c.bB(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mE(0,t.b,u.length)))},
$acd:function(){return[P.h,[P.b,P.t]]}}
P.jq.prototype={
cC:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
em:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bB(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.as(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cC(r,C.c.as(a,p)))s=p}else if(r<=2047){q=n.b
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
P.N.prototype={}
P.bm.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bm&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aX(u,30))&1073741823},
i:function(a){var u=this,t=P.lX(H.mg(u)),s=P.db(H.me(u)),r=P.db(H.ma(u)),q=P.db(H.mb(u)),p=P.db(H.md(u)),o=P.db(H.mf(u)),n=P.lY(H.mc(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.B.prototype={}
P.bo.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bo&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r=new P.fj(),q=this.a
if(q<0)return"-"+new P.bo(0-q).i(0)
u=r.$1(C.e.X(q,6e7)%60)
t=r.$1(C.e.X(q,1e6)%60)
s=new P.fi().$1(q%1e6)
return""+C.e.X(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.fi.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fj.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bp.prototype={}
P.eY.prototype={
i:function(a){return"Assertion failed"}}
P.dz.prototype={
i:function(a){return"Throw of null."}}
P.ay.prototype={
gbf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbe:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbf()+o+u
if(!q.a)return t
s=q.gbe()
r=P.df(q.b)
return t+s+": "+r}}
P.bO.prototype={
gbf:function(){return"RangeError"},
gbe:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.fE.prototype={
gbf:function(){return"RangeError"},
gbe:function(){var u,t=H.a6(this.b)
if(typeof t!=="number")return t.aD()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gm:function(a){return this.f}}
P.is.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iq.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cA.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f7.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.df(u)+"."}}
P.hq.prototype={
i:function(a){return"Out of Memory"},
$ibp:1}
P.dM.prototype={
i:function(a){return"Stack Overflow"},
$ibp:1}
P.fc.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e6.prototype={
i:function(a){return"Exception: "+this.a}}
P.fx.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.aS(s,0,75)+"...":s
return t+"\n"+r}}
P.bq.prototype={}
P.t.prototype={}
P.j.prototype={
b7:function(a,b){var u=H.ai(this,"j",0)
return new H.cJ(this,H.m(b,{func:1,ret:P.N,args:[u]}),[u])},
gm:function(a){var u,t=this.gM(this)
for(u=0;t.t();)++u
return u},
gap:function(a){var u,t=this.gM(this)
if(!t.t())throw H.i(H.fF())
u=t.gD(t)
if(t.t())throw H.i(H.m2())
return u},
w:function(a,b){var u,t,s
P.kQ(b,"index")
for(u=this.gM(this),t=0;u.t();){s=u.gD(u)
if(b===t)return s;++t}throw H.i(P.S(b,this,"index",null,t))},
i:function(a){return P.m1(this,"(",")")}}
P.aL.prototype={}
P.b.prototype={$ij:1}
P.D.prototype={}
P.I.prototype={
gJ:function(a){return P.K.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
p:function(a,b){return this===b},
gJ:function(a){return H.cv(this)},
i:function(a){return"Instance of '"+H.f(H.cw(this))+"'"},
toString:function(){return this.i(this)}}
P.af.prototype={}
P.h.prototype={$ikK:1}
P.b7.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eW.prototype={
gm:function(a){return a.length}}
W.d2.prototype={
i:function(a){return String(a)},
$id2:1}
W.eX.prototype={
i:function(a){return String(a)}}
W.c7.prototype={$ic7:1}
W.d4.prototype={}
W.bh.prototype={$ibh:1}
W.bH.prototype={
bV:function(a,b,c){if(c!=null)return a.getContext(b,P.na(c))
return a.getContext(b)},
dv:function(a,b){return this.bV(a,b,null)},
$ibH:1}
W.ca.prototype={$ica:1}
W.bi.prototype={
gm:function(a){return a.length}}
W.ce.prototype={$ice:1}
W.f8.prototype={
gm:function(a){return a.length}}
W.Q.prototype={$iQ:1}
W.cf.prototype={
gm:function(a){return a.length}}
W.f9.prototype={}
W.aH.prototype={}
W.aI.prototype={}
W.fa.prototype={
gm:function(a){return a.length}}
W.fb.prototype={
gm:function(a){return a.length}}
W.fe.prototype={
gm:function(a){return a.length}}
W.aq.prototype={$iaq:1}
W.ff.prototype={
i:function(a){return String(a)}}
W.dc.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.as,P.a7]]},
$aw:function(){return[[P.as,P.a7]]},
$ij:1,
$aj:function(){return[[P.as,P.a7]]},
$ib:1,
$ab:function(){return[[P.as,P.a7]]},
$aA:function(){return[[P.as,P.a7]]}}
W.dd.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaC(a))+" x "+H.f(this.gaA(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ias)return!1
return a.left===u.gd1(b)&&a.top===u.gdn(b)&&this.gaC(a)===u.gaC(b)&&this.gaA(a)===u.gaA(b)},
gJ:function(a){return W.l7(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gaC(a)),C.d.gJ(this.gaA(a)))},
gaA:function(a){return a.height},
gd1:function(a){return a.left},
gdn:function(a){return a.top},
gaC:function(a){return a.width},
$ias:1,
$aas:function(){return[P.a7]}}
W.fg.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.h]},
$aw:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aA:function(){return[P.h]}}
W.fh.prototype={
gm:function(a){return a.length}}
W.iT.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$iP")},
h:function(a,b){this.a.appendChild(b)
return b},
gM:function(a){var u=this.hU(this)
return new J.ap(u,u.length,[H.z(u,0)])},
$aw:function(){return[W.P]},
$aj:function(){return[W.P]},
$ab:function(){return[W.P]}}
W.P.prototype={
gfX:function(a){return new W.iV(a)},
gcI:function(a){return new W.iT(a,a.children)},
i:function(a){return a.localName},
a0:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kA
if(u==null){u=H.c([],[W.al])
t=new W.dy(u)
C.a.h(u,W.l6(null))
C.a.h(u,W.l8())
$.kA=t
d=t}else d=u
u=$.kz
if(u==null){u=new W.eJ(d)
$.kz=u
c=u}else{u.a=d
c=u}}if($.b2==null){u=document
t=u.implementation.createHTMLDocument("")
$.b2=t
$.jU=t.createRange()
t=$.b2.createElement("base")
H.k(t,"$ic7")
t.href=u.baseURI
$.b2.head.appendChild(t)}u=$.b2
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ibh")}u=$.b2
if(!!this.$ibh)s=u.body
else{s=u.createElement(a.tagName)
$.b2.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.K(C.M,a.tagName)){$.jU.selectNodeContents(s)
r=$.jU.createContextualFragment(b)}else{s.innerHTML=b
r=$.b2.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.b2.body
if(s==null?u!=null:s!==u)J.ks(s)
c.bW(r)
document.adoptNode(r)
return r},
h4:function(a,b,c){return this.a0(a,b,c,null)},
dA:function(a,b){a.textContent=null
a.appendChild(this.a0(a,b,null,null))},
$iP:1,
gdi:function(a){return a.tagName}}
W.fl.prototype={
$1:function(a){return!!J.V(H.k(a,"$iC")).$iP},
$S:25}
W.l.prototype={$il:1}
W.e.prototype={
fP:function(a,b,c,d){H.m(c,{func:1,args:[W.l]})
if(c!=null)this.e0(a,b,c,!1)},
e0:function(a,b,c,d){return a.addEventListener(b,H.c0(H.m(c,{func:1,args:[W.l]}),1),!1)},
$ie:1}
W.aJ.prototype={$iaJ:1}
W.fr.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aJ]},
$aw:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aA:function(){return[W.aJ]}}
W.fs.prototype={
gm:function(a){return a.length}}
W.fw.prototype={
gm:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.fB.prototype={
gm:function(a){return a.length}}
W.bK.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.C]},
$aw:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ibK:1,
$aA:function(){return[W.C]}}
W.br.prototype={$ibr:1,
gcK:function(a){return a.data}}
W.ci.prototype={$ici:1}
W.aN.prototype={$iaN:1}
W.dr.prototype={
i:function(a){return String(a)},
$idr:1}
W.h7.prototype={
gm:function(a){return a.length}}
W.h8.prototype={
j:function(a,b){return P.bb(a.get(H.O(b)))},
E:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gY:function(a){var u=H.c([],[P.h])
this.E(a,new W.h9(u))
return u},
gm:function(a){return a.size},
$aa3:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.h9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.ha.prototype={
j:function(a,b){return P.bb(a.get(H.O(b)))},
E:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gY:function(a){var u=H.c([],[P.h])
this.E(a,new W.hb(u))
return u},
gm:function(a){return a.size},
$aa3:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.hb.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aP.prototype={$iaP:1}
W.hc.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aP]},
$aw:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aA:function(){return[W.aP]}}
W.a4.prototype={$ia4:1}
W.ac.prototype={
gap:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.i(P.kV("No elements"))
if(t>1)throw H.i(P.kV("More than one element"))
return u.firstChild},
aa:function(a,b){var u,t,s,r
H.o(b,"$ij",[W.C],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gM:function(a){var u=this.a.childNodes
return new W.dh(u,u.length,[H.cZ(C.O,u,"A",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aw:function(){return[W.C]},
$aj:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
hI:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.dE(a):u},
fS:function(a,b){return a.appendChild(b)},
$iC:1}
W.ct.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.C]},
$aw:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aA:function(){return[W.C]}}
W.aQ.prototype={$iaQ:1,
gm:function(a){return a.length}}
W.ht.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aA:function(){return[W.aQ]}}
W.hA.prototype={
j:function(a,b){return P.bb(a.get(H.O(b)))},
E:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gY:function(a){var u=H.c([],[P.h])
this.E(a,new W.hB(u))
return u},
gm:function(a){return a.size},
$aa3:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.hB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hD.prototype={
gm:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.hN.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aS]},
$aw:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aA:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.hO.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aA:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gm:function(a){return a.length}}
W.hR.prototype={
j:function(a,b){return a.getItem(H.O(b))},
E:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gY:function(a){var u=H.c([],[P.h])
this.E(a,new W.hS(u))
return u},
gm:function(a){return a.length},
$aa3:function(){return[P.h,P.h]},
$iD:1,
$aD:function(){return[P.h,P.h]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:40}
W.aD.prototype={$iaD:1}
W.bQ.prototype={}
W.dN.prototype={
a0:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bb(a,b,c,d)
u=W.lZ("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ac(t).aa(0,new W.ac(u))
return t}}
W.hY.prototype={
a0:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bb(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a0(u.createElement("table"),b,c,d)
u.toString
u=new W.ac(u)
s=u.gap(u)
s.toString
u=new W.ac(s)
r=u.gap(u)
t.toString
r.toString
new W.ac(t).aa(0,new W.ac(r))
return t}}
W.hZ.prototype={
a0:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bb(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a0(u.createElement("table"),b,c,d)
u.toString
u=new W.ac(u)
s=u.gap(u)
t.toString
s.toString
new W.ac(t).aa(0,new W.ac(s))
return t}}
W.cC.prototype={$icC:1}
W.aV.prototype={$iaV:1}
W.aE.prototype={$iaE:1}
W.i0.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aE]},
$aw:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aA:function(){return[W.aE]}}
W.i1.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aA:function(){return[W.aV]}}
W.i6.prototype={
gm:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.aF.prototype={$iaF:1}
W.ia.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aA:function(){return[W.aX]}}
W.ib.prototype={
gm:function(a){return a.length}}
W.bw.prototype={}
W.it.prototype={
i:function(a){return String(a)}}
W.iK.prototype={
gm:function(a){return a.length}}
W.b_.prototype={
gh7:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.ag("deltaY is not supported"))},
gh6:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.ag("deltaX is not supported"))},
$ib_:1}
W.cK.prototype={
fn:function(a,b){return a.requestAnimationFrame(H.c0(H.m(b,{func:1,ret:-1,args:[P.a7]}),1))},
eg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cL.prototype={$icL:1}
W.iU.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.Q]},
$aw:function(){return[W.Q]},
$ij:1,
$aj:function(){return[W.Q]},
$ib:1,
$ab:function(){return[W.Q]},
$aA:function(){return[W.Q]}}
W.e1.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ias)return!1
return a.left===u.gd1(b)&&a.top===u.gdn(b)&&a.width===u.gaC(b)&&a.height===u.gaA(b)},
gJ:function(a){return W.l7(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaA:function(a){return a.height},
gaC:function(a){return a.width}}
W.j7.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aK]},
$aw:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aA:function(){return[W.aK]}}
W.ek.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.C]},
$aw:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aA:function(){return[W.C]}}
W.jj.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aA:function(){return[W.aU]}}
W.jk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aD]},
$aw:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aA:function(){return[W.aD]}}
W.iS.prototype={
E:function(a,b){var u,t,s,r,q
H.m(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.gY(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gY:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.k(r[t],"$icL")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa3:function(){return[P.h,P.h]},
$aD:function(){return[P.h,P.h]}}
W.iV.prototype={
j:function(a,b){return this.a.getAttribute(H.O(b))},
gm:function(a){return this.gY(this).length}}
W.iW.prototype={}
W.k6.prototype={}
W.iX.prototype={}
W.iY.prototype={
$1:function(a){return this.a.$1(H.k(a,"$il"))},
$S:43}
W.bx.prototype={
dP:function(a){var u
if($.e9.a===0){for(u=0;u<262;++u)$.e9.n(0,C.L[u],W.nj())
for(u=0;u<12;++u)$.e9.n(0,C.l[u],W.nk())}},
ax:function(a){return $.lJ().K(0,W.cg(a))},
ab:function(a,b,c){var u=$.e9.j(0,H.f(W.cg(a))+"::"+b)
if(u==null)u=$.e9.j(0,"*::"+b)
if(u==null)return!1
return H.kc(u.$4(a,b,c,this))},
$ial:1}
W.A.prototype={
gM:function(a){return new W.dh(a,this.gm(a),[H.cZ(this,a,"A",0)])}}
W.dy.prototype={
ax:function(a){return C.a.cG(this.a,new W.hl(a))},
ab:function(a,b,c){return C.a.cG(this.a,new W.hk(a,b,c))},
$ial:1}
W.hl.prototype={
$1:function(a){return H.k(a,"$ial").ax(this.a)},
$S:17}
W.hk.prototype={
$1:function(a){return H.k(a,"$ial").ab(this.a,this.b,this.c)},
$S:17}
W.es.prototype={
dW:function(a,b,c,d){var u,t,s
this.a.aa(0,c)
u=b.b7(0,new W.jh())
t=b.b7(0,new W.ji())
this.b.aa(0,u)
s=this.c
s.aa(0,C.N)
s.aa(0,t)},
ax:function(a){return this.a.K(0,W.cg(a))},
ab:function(a,b,c){var u=this,t=W.cg(a),s=u.c
if(s.K(0,H.f(t)+"::"+b))return u.d.fR(c)
else if(s.K(0,"*::"+b))return u.d.fR(c)
else{s=u.b
if(s.K(0,H.f(t)+"::"+b))return!0
else if(s.K(0,"*::"+b))return!0
else if(s.K(0,H.f(t)+"::*"))return!0
else if(s.K(0,"*::*"))return!0}return!1},
$ial:1}
W.jh.prototype={
$1:function(a){return!C.a.K(C.l,H.O(a))},
$S:15}
W.ji.prototype={
$1:function(a){return C.a.K(C.l,H.O(a))},
$S:15}
W.jm.prototype={
ab:function(a,b,c){if(this.dI(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.K(0,b)
return!1}}
W.jn.prototype={
$1:function(a){return"TEMPLATE::"+H.f(H.O(a))},
$S:35}
W.jl.prototype={
ax:function(a){var u=J.V(a)
if(!!u.$icx)return!1
u=!!u.$in
if(u&&W.cg(a)==="foreignObject")return!1
if(u)return!0
return!1},
ab:function(a,b,c){if(b==="is"||C.c.ba(b,"on"))return!1
return this.ax(a)},
$ial:1}
W.dh.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scn(J.eV(u.a,t))
u.c=t
return!0}u.scn(null)
u.c=s
return!1},
gD:function(a){return this.d},
scn:function(a){this.d=H.J(a,H.z(this,0))},
$iaL:1}
W.al.prototype={}
W.jf.prototype={$io_:1}
W.eJ.prototype={
bW:function(a){new W.jr(this).$2(a,null)},
aI:function(a,b){if(b==null)J.ks(a)
else b.removeChild(a)},
ft:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
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
p=H.G(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ao(r)}t="element unprintable"
try{t=J.aj(a)}catch(r){H.ao(r)}try{s=W.cg(a)
this.fs(H.k(a,"$iP"),b,p,t,s,H.k(o,"$iD"),H.O(n))}catch(r){if(H.ao(r) instanceof P.ay)throw r
else{this.aI(a,b)
window
q="Removing corrupted element "+H.f(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fs:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aI(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ax(a)){o.aI(a,b)
window
u="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ab(a,"is",g)){o.aI(a,b)
window
u="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gY(f)
t=H.c(u.slice(0),[H.z(u,0)])
for(s=f.gY(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.lP(r)
H.O(r)
if(!q.ab(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.f(e)+" "+r+'="'+H.f(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icC)o.bW(a.content)},
$inJ:1}
W.jr.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ft(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aI(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ao(s)
r=H.k(u,"$iC")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iC")}},
$S:32}
W.e0.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ey.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
P.eI.prototype={$ibr:1,
gcK:function(a){return this.a}}
P.jA.prototype={
$2:function(a,b){this.a[a]=b},
$S:16}
P.ft.prototype={
gbi:function(){var u=this.b,t=H.ai(u,"w",0),s=W.P
return new H.fS(new H.cJ(u,H.m(new P.fu(),{func:1,ret:P.N,args:[t]}),[t]),H.m(new P.fv(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bF(this.gbi().a)},
j:function(a,b){var u=this.gbi()
return u.b.$1(J.jP(u.a,b))},
gM:function(a){var u=P.kF(this.gbi(),!1,W.P)
return new J.ap(u,u.length,[H.z(u,0)])},
$aw:function(){return[W.P]},
$aj:function(){return[W.P]},
$ab:function(){return[W.P]}}
P.fu.prototype={
$1:function(a){return!!J.V(H.k(a,"$iC")).$iP},
$S:25}
P.fv.prototype={
$1:function(a){return H.v(H.k(a,"$iC"),"$iP")},
$S:31}
P.ja.prototype={}
P.as.prototype={}
P.b3.prototype={$ib3:1}
P.fK.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b3]},
$ij:1,
$aj:function(){return[P.b3]},
$ib:1,
$ab:function(){return[P.b3]},
$aA:function(){return[P.b3]}}
P.b6.prototype={$ib6:1}
P.ho.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b6]},
$ij:1,
$aj:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aA:function(){return[P.b6]}}
P.hu.prototype={
gm:function(a){return a.length}}
P.cx.prototype={$icx:1}
P.hX.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$aw:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aA:function(){return[P.h]}}
P.n.prototype={
gcI:function(a){return new P.ft(a,new W.ac(a))},
a0:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.al])
C.a.h(p,W.l6(null))
C.a.h(p,W.l8())
C.a.h(p,new W.jl())
c=new W.eJ(new W.dy(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).h4(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ac(s)
q=p.gap(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$in:1}
P.b8.prototype={$ib8:1}
P.ic.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b8]},
$ij:1,
$aj:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aA:function(){return[P.b8]}}
P.ec.prototype={}
P.ed.prototype={}
P.en.prototype={}
P.eo.prototype={}
P.ez.prototype={}
P.eA.prototype={}
P.eG.prototype={}
P.eH.prototype={}
P.f_.prototype={
gm:function(a){return a.length}}
P.f0.prototype={
j:function(a,b){return P.bb(a.get(H.O(b)))},
E:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gY:function(a){var u=H.c([],[P.h])
this.E(a,new P.f1(u))
return u},
gm:function(a){return a.size},
$aa3:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
P.f1.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f2.prototype={
gm:function(a){return a.length}}
P.bG.prototype={}
P.hp.prototype={
gm:function(a){return a.length}}
P.e_.prototype={}
P.d5.prototype={$id5:1}
P.dE.prototype={$idE:1}
P.bP.prototype={
hQ:function(a,b,c,d,e,f,g){var u,t=J.V(g)
if(!!t.$ibr)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.nb(g))
return}if(!!t.$ici)t=!0
else t=!1
if(t){this.fK(a,b,c,d,e,f,g)
return}throw H.i(P.lQ("Incorrect number or type of arguments"))},
fK:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
U:function(a,b,c){return a.uniform1f(b,c)},
b5:function(a,b,c){return a.uniform1i(b,c)},
O:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dq:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dr:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ds:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibP:1}
P.dI.prototype={$idI:1}
P.dP.prototype={$idP:1}
P.dU.prototype={$idU:1}
P.hP.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return P.bb(a.item(b))},
w:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.D,,,]]},
$ij:1,
$aj:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aA:function(){return[[P.D,,,]]}}
P.ev.prototype={}
P.ew.prototype={}
O.Z.prototype={
c2:function(a){var u=this
u.ser(H.c([],[a]))
u.scr(null)
u.sco(null)
u.scs(null)},
bX:function(a,b,c){var u=this,t=H.ai(u,"Z",0)
H.m(b,{func:1,ret:P.N,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.t,[P.j,t]]}
H.m(a,t)
H.m(c,t)
u.scr(b)
u.sco(a)
u.scs(c)},
b8:function(a,b){return this.bX(a,null,b)},
f4:function(a){var u
H.o(a,"$ij",[H.ai(this,"Z",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eu:function(a,b){var u
H.o(b,"$ij",[H.ai(this,"Z",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gM:function(a){var u=this.a
return new J.ap(u,u.length,[H.z(u,0)])},
w:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ai(s,"Z",0)
H.J(b,r)
r=[r]
if(H.G(s.f4(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eu(t,H.c([b],r))}},
ser:function(a){this.a=H.o(a,"$ib",[H.ai(this,"Z",0)],"$ab")},
scr:function(a){this.b=H.m(a,{func:1,ret:P.N,args:[[P.j,H.ai(this,"Z",0)]]})},
sco:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.t,[P.j,H.ai(this,"Z",0)]]})},
scs:function(a){H.m(a,{func:1,ret:-1,args:[P.t,[P.j,H.ai(this,"Z",0)]]})},
$ij:1}
O.co.prototype={
gm:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.ar():u},
aq:function(){var u=this.b
if(u!=null)u.N(null)},
gS:function(a){var u=this.a
if(u.length>0)return C.a.gb1(u)
else return V.k_()},
dc:function(a){var u=this.a
if(a==null)C.a.h(u,V.k_())
else C.a.h(u,a)
this.aq()},
bQ:function(){var u=this.a
if(u.length>0){u.pop()
this.aq()}},
sbk:function(a){this.a=H.o(a,"$ib",[V.ab],"$ab")}}
E.f3.prototype={}
E.ad.prototype={
sbY:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().F(0,s.gd6())
u=s.c
if(u!=null)u.gv().h(0,s.gd6())
t=new D.R("shape",r,s.c,[F.dJ])
t.b=!0
s.am(t)}},
saP:function(a){var u,t,s=this
if(!J.W(s.r,a)){u=s.r
if(u!=null)u.gv().F(0,s.gd4())
if(a!=null)a.gv().h(0,s.gd4())
s.r=a
t=new D.R("mover",u,a,[U.bM])
t.b=!0
s.am(t)}},
b6:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sdt(m.a+m.d*b.y)
m.sd9(0,m.b+m.e*b.y)
m.sdg(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.b5(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.R(0,V.b5(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.R(0,V.b5(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.ac(0)}q=m.x}else q=null
if(!J.W(q,n.x)){p=n.x
n.x=q
o=new D.R("matrix",p,q,[V.ab])
o.b=!0
n.am(o)}for(m=n.y.a,m=new J.ap(m,m.length,[H.z(m,0)]);m.t();)m.d.b6(0,b)},
aB:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gS(s))
else C.a.h(s.a,r.R(0,s.gS(s)))
s.aq()
a.dd(t.f)
s=a.dy
u=(s&&C.a).gb1(s)
if(u!=null&&t.d!=null)u.hL(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.z(s,0)]);s.t();)s.d.aB(a)
a.da()
a.dx.bQ()},
am:function(a){var u=this.z
if(u!=null)u.N(a)},
T:function(){return this.am(null)},
d7:function(a){H.k(a,"$iE")
this.e=null
this.am(a)},
hy:function(){return this.d7(null)},
d5:function(a){this.am(H.k(a,"$iE"))},
hx:function(){return this.d5(null)},
d3:function(a){this.am(H.k(a,"$iE"))},
hu:function(){return this.d3(null)},
ht:function(a,b){var u,t,s,r,q,p,o
H.o(b,"$ij",[E.ad],"$aj")
for(u=b.length,t=this.gd2(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bI()
o.sa9(null)
o.sav(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.T()},
hw:function(a,b){var u,t
H.o(b,"$ij",[E.ad],"$aj")
for(u=b.gM(b),t=this.gd2();u.t();)u.gD(u).gv().F(0,t)
this.T()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
se7:function(a,b){this.y=H.o(b,"$iZ",[E.ad],"$aZ")},
$icq:1}
E.hw.prototype={
dL:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.bm(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.co()
t=[V.ab]
u.sbk(H.c([],t))
u.b=null
u.gv().h(0,new E.hx(s))
s.cy=u
u=new O.co()
u.sbk(H.c([],t))
u.b=null
u.gv().h(0,new E.hy(s))
s.db=u
u=new O.co()
u.sbk(H.c([],t))
u.b=null
u.gv().h(0,new E.hz(s))
s.dx=u
s.sfJ(H.c([],[O.bR]))
u=s.dy;(u&&C.a).h(u,null)
s.sfE(new H.Y([P.h,A.cy]))},
ghH:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gS(s)
u=t.db
u=t.z=s.R(0,u.gS(u))
s=u}return s},
dd:function(a){var u=this.dy,t=a==null?(u&&C.a).gb1(u):a;(u&&C.a).h(u,t)},
da:function(){var u=this.dy
if(u.length>1)u.pop()},
sfJ:function(a){this.dy=H.o(a,"$ib",[O.bR],"$ab")},
sfE:function(a){this.fr=H.o(a,"$iD",[P.h,A.cy],"$aD")}}
E.hx.prototype={
$1:function(a){var u
H.k(a,"$iE")
u=this.a
u.ch=u.z=null},
$S:5}
E.hy.prototype={
$1:function(a){var u
H.k(a,"$iE")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.hz.prototype={
$1:function(a){var u
H.k(a,"$iE")
u=this.a
u.cx=u.ch=null},
$S:5}
E.dR.prototype={
c5:function(a){H.k(a,"$iE")
this.df()},
c4:function(){return this.c5(null)},
ghj:function(){var u,t=this,s=Date.now(),r=C.e.X(P.ky(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.bm(s,!1)
return u/r},
cv:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.R()
if(typeof r!=="number")return H.bC(r)
u=C.d.bJ(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.R()
t=C.d.bJ(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kY(C.i,s.ghM())}},
df:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.i5(this),{func:1,ret:-1,args:[P.a7]})
C.w.eg(u)
C.w.fn(u,W.lf(t,P.a7))}},
hK:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cv()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bm(r,!1)
s.y=P.ky(r-s.r.a).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aq()
r=s.db
C.a.sm(r.a,0)
r.aq()
r=s.dx
C.a.sm(r.a,0)
r.aq()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aB(p.e)}s=p.z
if(s!=null)s.N(null)}catch(q){u=H.ao(q)
t=H.c3(q)
P.kn("Error: "+H.f(u))
P.kn("Stack: "+H.f(t))
throw H.i(u)}}}
E.i5.prototype={
$1:function(a){var u
H.lo(a)
u=this.a
if(u.ch){u.ch=!1
u.hK()}},
$S:27}
Z.dY.prototype={$inD:1}
Z.d6.prototype={
bw:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ao(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.f(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.iL.prototype={$inE:1}
Z.d7.prototype={
az:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bw:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bw(a)},
hX:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aB:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aj(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
sen:function(a){this.b=H.o(a,"$ib",[Z.bs],"$ab")},
$inM:1}
Z.bs.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.cw(this.c))+"'")+"]"}}
Z.ba.prototype={
gbZ:function(a){var u=this.a,t=(u&$.bf().a)!==0?3:0
if((u&$.be().a)!==0)t+=3
if((u&$.bd().a)!==0)t+=3
if((u&$.bg().a)!==0)t+=2
if((u&$.bD().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=4
if((u&$.c6().a)!==0)++t
return(u&$.bc().a)!==0?t+4:t},
fT:function(a){var u,t=$.bf(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bd()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bc()
if((s&t.a)!==0)if(u===a)return t
return $.lI()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ba))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.bf().a)!==0)C.a.h(u,"Pos")
if((t&$.be().a)!==0)C.a.h(u,"Norm")
if((t&$.bd().a)!==0)C.a.h(u,"Binm")
if((t&$.bg().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bD().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d_().a)!==0)C.a.h(u,"Clr3")
if((t&$.d0().a)!==0)C.a.h(u,"Clr4")
if((t&$.c6().a)!==0)C.a.h(u,"Weight")
if((t&$.bc().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.f6.prototype={}
D.bI.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.E]}
H.m(b,u)
if(this.a==null)this.sa9(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
F:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.E]})
u=s.a
u=u==null?null:C.a.K(u,b)
if(u===!0){u=s.a
t=(u&&C.a).F(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.K(u,b)
if(u===!0){u=s.b
t=(u&&C.a).F(u,b)||t}return t},
N:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.E()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.E(P.kF(u,!0,{func:1,ret:-1,args:[D.E]}),new D.fo(q))
u=r.b
if(u!=null){r.sav(H.c([],[{func:1,ret:-1,args:[D.E]}]))
C.a.E(u,new D.fp(q))}return!0},
hd:function(){return this.N(null)},
ac:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.N(u)}}},
sa9:function(a){this.a=H.o(a,"$ib",[{func:1,ret:-1,args:[D.E]}],"$ab")},
sav:function(a){this.b=H.o(a,"$ib",[{func:1,ret:-1,args:[D.E]}],"$ab")}}
D.fo.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.E]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fp.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.E]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.E.prototype={}
D.cj.prototype={}
D.ck.prototype={}
D.R.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.d8.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.dm.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dm))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.fJ.prototype={
hD:function(a){this.d.h(0,a.a)
return!1},
hz:function(a){this.d.F(0,a.a)
return!1},
sfi:function(a){this.d=H.o(a,"$ikT",[P.t],"$akT")}}
X.fP.prototype={
bP:function(a,b){this.r=a.a
return!1},
aR:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dz()
if(typeof u!=="number")return u.ad()
this.r=(u&~t)>>>0
return!1},
aQ:function(a,b){return!1},
hE:function(a){return!1},
eU:function(a,b,c){return}}
X.cp.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.cp))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.G(this.b)?"Alt+":""
return u+(H.G(this.c)?"Shift+":"")}}
X.hd.prototype={
bP:function(a,b){this.f=a.a
return!1},
aR:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.dz()
if(typeof u!=="number")return u.ad()
this.f=(u&~t)>>>0
return!1},
aQ:function(a,b){return!1},
hF:function(a,b){return!1}}
X.i9.prototype={
hC:function(a){H.o(a,"$ib",[V.am],"$ab")
return!1},
hA:function(a){H.o(a,"$ib",[V.am],"$ab")
return!1},
hB:function(a){H.o(a,"$ib",[V.am],"$ab")
return!1}}
X.dX.prototype={
cj:function(a){var u=a.keyCode,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dm(u,new X.cp(t,a.altKey,a.shiftKey))},
aw:function(a){if(!H.G(a.ctrlKey))H.G(a.metaKey)
a.shiftKey},
bv:function(a){if(!H.G(a.ctrlKey))H.G(a.metaKey)
a.shiftKey},
aj:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.Z()
u=t.top
if(typeof r!=="number")return r.Z()
return new V.am(s-q,r-u)},
aH:function(a){return new V.b9(a.movementX,a.movementY)},
bp:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.am])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.d.a5(r.pageX)
C.d.a5(r.pageY)
p=o.left
C.d.a5(r.pageX)
C.a.h(n,new V.am(q-p,C.d.a5(r.pageY)-o.top))}return n},
ah:function(a){var u=a.buttons,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.d8(u,new X.cp(t,a.altKey,a.shiftKey))},
bl:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.Z()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.Z()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eO:function(a){this.f=!0},
eC:function(a){this.f=!1},
eI:function(a){H.k(a,"$ia4")
if(H.G(this.f)&&this.bl(a))a.preventDefault()},
eS:function(a){var u
H.k(a,"$iaN")
if(!H.G(this.f))return
u=this.cj(a)
this.b.hD(u)},
eQ:function(a){var u
H.k(a,"$iaN")
if(!H.G(this.f))return
u=this.cj(a)
this.b.hz(u)},
eW:function(a){var u,t,s,r,q=this
H.k(a,"$ia4")
u=q.a
u.focus()
q.f=!0
q.aw(a)
if(H.G(q.x)){t=q.ah(a)
s=q.aH(a)
if(q.d.bP(t,s))a.preventDefault()
return}if(H.G(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ah(a)
r=q.aj(a)
if(q.c.bP(t,r))a.preventDefault()},
f_:function(a){var u,t,s,r=this
H.k(a,"$ia4")
r.aw(a)
u=r.ah(a)
if(H.G(r.x)){t=r.aH(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aj(a)
if(r.c.aR(u,s))a.preventDefault()},
eM:function(a){var u,t,s,r=this
H.k(a,"$ia4")
if(!r.bl(a)){r.aw(a)
u=r.ah(a)
if(H.G(r.x)){t=r.aH(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aj(a)
if(r.c.aR(u,s))a.preventDefault()}},
eY:function(a){var u,t,s,r=this
H.k(a,"$ia4")
r.aw(a)
u=r.ah(a)
if(H.G(r.x)){t=r.aH(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aj(a)
if(r.c.aQ(u,s))a.preventDefault()},
eK:function(a){var u,t,s,r=this
H.k(a,"$ia4")
if(!r.bl(a)){r.aw(a)
u=r.ah(a)
if(H.G(r.x)){t=r.aH(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aj(a)
if(r.c.aQ(u,s))a.preventDefault()}},
f1:function(a){var u,t,s=this
H.k(a,"$ib_")
s.aw(a)
u=new V.b9((a&&C.v).gh6(a),C.v.gh7(a)).B(0,180)
if(H.G(s.x)){if(s.d.hE(u))a.preventDefault()
return}if(H.G(s.r))return
t=s.aj(a)
if(s.c.hF(u,t))a.preventDefault()},
f3:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ah(s.y)
t=s.aj(s.y)
s.d.eU(u,t,r)}},
fe:function(a){var u,t=this
H.k(a,"$iaF")
t.a.focus()
t.f=!0
t.bv(a)
u=t.bp(a)
if(t.e.hC(u))a.preventDefault()},
fa:function(a){var u
H.k(a,"$iaF")
this.bv(a)
u=this.bp(a)
if(this.e.hA(u))a.preventDefault()},
fc:function(a){var u
H.k(a,"$iaF")
this.bv(a)
u=this.bp(a)
if(this.e.hB(u))a.preventDefault()},
seh:function(a){this.z=H.o(a,"$ib",[[P.cB,P.K]],"$ab")}}
D.bn.prototype={
af:function(a){var u
H.k(a,"$iE")
u=this.r
if(u!=null)u.N(a)},
dR:function(){return this.af(null)},
$ia2:1,
$icq:1}
D.a2.prototype={$icq:1}
D.dn.prototype={
af:function(a){var u=this.x
if(u!=null)u.N(a)},
cq:function(a){var u
H.k(a,"$iE")
u=this.y
if(u!=null)u.N(a)},
eT:function(){return this.cq(null)},
f6:function(a){var u,t,s
H.o(a,"$ij",[D.a2],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.e9(s))return!1}return!0},
ew:function(a,b){var u,t,s,r,q,p,o,n=D.a2
H.o(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gcp(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.k(b[q],"$ia2")
if(p instanceof D.bn)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bI()
o.sa9(null)
o.sav(null)
o.c=null
o.d=0
p.r=o}H.m(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.cj([n])
n.b=!0
this.af(n)},
f8:function(a,b){var u,t,s,r=D.a2
H.o(b,"$ij",[r],"$aj")
for(u=b.gM(b),t=this.gcp();u.t();){s=u.gD(u)
C.a.F(this.e,s)
s.gv().F(0,t)}r=new D.ck([r])
r.b=!0
this.af(r)},
e9:function(a){var u=C.a.K(this.e,a)
return u},
sef:function(a){this.e=H.o(a,"$ib",[D.bn],"$ab")},
sff:function(a){this.f=H.o(a,"$ib",[D.dB],"$ab")},
sfH:function(a){this.r=H.o(a,"$ib",[D.dL],"$ab")},
$aj:function(){return[D.a2]},
$aZ:function(){return[D.a2]}}
D.dB.prototype={$ia2:1,$icq:1}
D.dL.prototype={$ia2:1,$icq:1}
V.a_.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.bk.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bk))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.fn.prototype={}
V.du.prototype={
a3:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.B])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.du))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.B],o=V.c2(H.c([q.a,q.d,q.r],p),3,0),n=V.c2(H.c([q.b,q.e,q.x],p),3,0),m=V.c2(H.c([q.c,q.f,q.y],p),3,0)
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
V.ab.prototype={
a3:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.B])
return t},
d_:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.M().a)return V.k_()
u=1/b1
t=-n
s=-a0
return V.b5((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
R:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b5(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b4:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bU:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.aA(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ab))return!1
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
i:function(a){return this.G()},
u:function(a){var u,t,s,r,q,p=this,o=[P.B],n=V.c2(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c2(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c2(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c2(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
G:function(){return this.u("")}}
V.am.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.aA.prototype={
Z:function(a,b){return new V.aA(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aA))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.dD.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dD))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.dG.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dG))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.b9.prototype={
bL:function(a){var u,t=this.a
if(typeof t!=="number")return t.R()
u=this.b
if(typeof u!=="number")return u.R()
return Math.sqrt(t*t+u*u)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.l1
return u==null?$.l1=new V.b9(0,0):u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.b9(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b9))return!1
u=b.a
t=this.a
s=$.M()
s.toString
if(typeof u!=="number")return u.Z()
if(typeof t!=="number")return H.bC(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.Z()
if(typeof t!=="number")return H.bC(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.L.prototype={
bL:function(a){return Math.sqrt(this.L(this))},
L:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bM:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aK:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
I:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
aE:function(a){return new V.L(-this.a,-this.b,-this.c)},
B:function(a,b){if(Math.abs(b-0)<$.M().a)return V.cI()
return new V.L(this.a/b,this.b/b,this.c/b)},
d0:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.da.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.ar():u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.da))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}}
U.bM.prototype={}
U.dH.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.ar():u},
au:function(a){var u=this.y
if(u!=null)u.N(a)},
sdt:function(a){var u
a=V.kp(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.M().a)){this.a=a
u=new D.R("yaw",u,a,[P.B])
u.b=!0
this.au(u)}},
sd9:function(a,b){var u
b=V.kp(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.M().a)){this.b=b
u=new D.R("pitch",u,b,[P.B])
u.b=!0
this.au(u)}},
sdg:function(a){var u
a=V.kp(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
u=new D.R("roll",u,a,[P.B])
u.b=!0
this.au(u)}},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dH))return!1
u=r.a
t=b.a
s=$.M().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+"], ["+V.H(u.d,3,0)+", "+V.H(u.e,3,0)+", "+V.H(u.f,3,0)+"]"}}
M.de.prototype={
ag:function(a){var u
H.k(a,"$iE")
u=this.y
if(u!=null)u.N(a)},
dT:function(){return this.ag(null)},
eE:function(a,b){var u,t,s,r,q,p,o,n=E.ad
H.o(b,"$ij",[n],"$aj")
for(u=b.length,t=this.ga8(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bI()
o.sa9(null)
o.sav(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cj([n])
n.b=!0
this.ag(n)},
eG:function(a,b){var u,t,s=E.ad
H.o(b,"$ij",[s],"$aj")
for(u=b.gM(b),t=this.ga8();u.t();)u.gD(u).gv().F(0,t)
s=new D.ck([s])
s.b=!0
this.ag(s)},
sdj:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().F(0,t.ga8())
u=t.d
t.d=a
if(a!=null)a.gv().h(0,t.ga8())
s=new D.R("technique",u,t.d,[O.bR])
s.b=!0
t.ag(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.ar():u},
aB:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dd(f.d)
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
if(typeof s!=="number")return H.bC(s)
o=C.d.a5(p*s)
p=q.b
if(typeof r!=="number")return H.bC(r)
n=C.d.a5(p*r)
p=C.d.a5(q.c*s)
a.c=p
q=C.d.a5(q.d*r)
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
i=V.b5(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dc(i)
t=$.kL
if(t==null){t=V.kN()
q=V.k4()
p=$.l2
t=V.kH(t,q,p==null?$.l2=new V.L(0,0,-1):p)
$.kL=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.R(0,h)}a.db.dc(h)
u=f.d
if(u!=null)u.b6(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.z(u,0)]);u.t();)u.d.b6(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.z(u,0)]);u.t();)u.d.aB(a)
f.b.toString
a.cy.bQ()
a.db.bQ()
f.c.toString
a.da()},
sdS:function(a,b){this.e=H.o(b,"$iZ",[E.ad],"$aZ")},
$inK:1}
A.d3.prototype={}
A.eZ.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
he:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
h8:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a8.prototype={
ga6:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.a8))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fV.prototype={
dK:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.b7("")
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
A.mU(c3,u)
A.mW(c3,u)
A.mV(c3,u)
A.mY(c3,u)
A.mZ(c3,u)
A.mX(c3,u)
A.n_(c3,u)
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
m=A.mT(b8.z)
b8.c=n
b8.d=m
b8.e=b8.ck(n,35633)
b8.f=b8.ck(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.G(H.kc(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.y(P.x("Failed to link shader: "+H.f(l)))}b8.fB()
b8.fD()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.v(b8.y.A(0,"invViewMat"),"$ian")
if(t)b8.dy=H.v(b8.y.A(0,"objMat"),"$ian")
if(r)b8.fr=H.v(b8.y.A(0,"viewObjMat"),"$ian")
b8.fy=H.v(b8.y.A(0,"projViewObjMat"),"$ian")
if(c3.ry)b8.k1=H.v(b8.y.A(0,"txt2DMat"),"$icH")
if(c3.x1)b8.k2=H.v(b8.y.A(0,"txtCubeMat"),"$ian")
if(c3.x2)b8.k3=H.v(b8.y.A(0,"colorMat"),"$ian")
b8.se3(H.c([],[A.an]))
t=c3.y2
if(t>0){b8.k4=H.k(b8.y.A(0,"bendMatCount"),"$iat")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.y(P.x(c0+q+c1));(s&&C.a).h(s,H.v(j,"$ian"))}}t=c3.a
if(t.a)b8.r2=H.v(b8.y.A(0,"emissionClr"),"$iU")
if(t.b)b8.rx=H.v(b8.y.A(0,"emissionTxt"),"$ia9")
t=c3.b
if(t.a)b8.x1=H.v(b8.y.A(0,"ambientClr"),"$iU")
if(t.b)b8.x2=H.v(b8.y.A(0,"ambientTxt"),"$ia9")
t=c3.c
if(t.a)b8.y2=H.v(b8.y.A(0,"diffuseClr"),"$iU")
if(t.b)b8.ak=H.v(b8.y.A(0,"diffuseTxt"),"$ia9")
t=c3.d
if(t.a)b8.cM=H.v(b8.y.A(0,"invDiffuseClr"),"$iU")
if(t.b)b8.cN=H.v(b8.y.A(0,"invDiffuseTxt"),"$ia9")
t=c3.e
s=t.a
if(s||t.b||!1){b8.cQ=H.v(b8.y.A(0,"shininess"),"$ia5")
if(s)b8.cO=H.v(b8.y.A(0,"specularClr"),"$iU")
if(t.b)b8.cP=H.v(b8.y.A(0,"specularTxt"),"$ia9")}if(c3.f.b)b8.cR=H.v(b8.y.A(0,"bumpTxt"),"$ia9")
if(c3.cy){b8.cS=H.v(b8.y.A(0,"envSampler"),"$ibU")
t=c3.r
if(t.a)b8.cT=H.v(b8.y.A(0,"reflectClr"),"$iU")
if(t.b)b8.cU=H.v(b8.y.A(0,"reflectTxt"),"$ia9")
t=c3.x
s=t.a
if(s||t.b||!1){b8.cV=H.v(b8.y.A(0,"refraction"),"$ia5")
if(s)b8.cW=H.v(b8.y.A(0,"refractClr"),"$iU")
if(t.b)b8.cX=H.v(b8.y.A(0,"refractTxt"),"$ia9")}}t=c3.y
if(t.a)b8.cY=H.v(b8.y.A(0,"alpha"),"$ia5")
if(t.b)b8.cZ=H.v(b8.y.A(0,"alphaTxt"),"$ia9")
t=P.t
s=[t,A.at]
b8.see(new H.Y(s))
b8.sdU(new H.Y([t,[P.b,A.bS]]))
b8.sfg(new H.Y(s))
b8.sfh(new H.Y([t,[P.b,A.bT]]))
b8.sfG(new H.Y(s))
b8.sdV(new H.Y([t,[P.b,A.bV]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.bS],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.f(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ad()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.y(P.x(c0+d+c1))
H.v(j,"$iU")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.y(P.x(c0+d+c1))
H.v(c,"$iU")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.y(P.x(c0+d+c1))
H.v(b,"$iU")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.y(P.x(c0+d+c1))
H.v(j,"$iU")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.y(P.x(c0+d+c1))
H.v(c,"$iU")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.y(P.x(c0+o+c1))
H.v(b,"$ia9")
a2=b}else a2=b9
C.a.h(e,new A.bS(a1,a0,a,j,c,a2))}b8.bE.n(0,g,e)
q=b8.bD
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.x(c0+o+c1))
q.n(0,g,H.k(j,"$iat"))}for(t=c3.Q,s=t.length,r=[A.bT],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.f(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.y(P.x(c0+o+c1))
H.v(j,"$iU")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.y(P.x(c0+o+c1))
H.v(c,"$iU")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.y(P.x(c0+o+c1))
H.v(b,"$iU")
if(typeof g!=="number")return g.ad()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.y(P.x(c0+o+c1))
H.v(a3,"$icH")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.y(P.x(c0+o+c1))
H.v(a3,"$ibU")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.y(P.x(c0+o+c1))
H.v(a3,"$ibU")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.y(P.x(c0+o+c1))
H.v(a5,"$icG")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.y(P.x(c0+o+c1))
H.v(a3,"$ia5")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.y(P.x(c0+o+c1))
H.v(a5,"$ia5")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.y(P.x(c0+o+c1))
H.v(a8,"$ia5")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.bT(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bG.n(0,g,e)
q=b8.bF
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.x(c0+o+c1))
q.n(0,g,H.k(j,"$iat"))}for(t=c3.ch,s=t.length,r=[A.bV],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.f(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.y(P.x(c0+o+c1))
H.v(j,"$iU")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.y(P.x(c0+o+c1))
H.v(c,"$iU")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.y(P.x(c0+o+c1))
H.v(b,"$iU")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.y(P.x(c0+o+c1))
H.v(a3,"$iU")
if(typeof g!=="number")return g.ad()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.y(P.x(c0+o+c1))
H.v(a5,"$iU")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.y(P.x(c0+o+c1))
H.v(a8,"$iU")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.y(P.x(c0+o+c1))
H.v(b2,"$ia5")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.y(P.x(c0+o+c1))
H.v(b3,"$ia5")
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
if(a5==null)H.y(P.x(c0+d+c1))
H.v(a5,"$icG")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.y(P.x(c0+d+c1))
H.v(a5,"$ia5")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.y(P.x(c0+d+c1))
H.v(a8,"$ia5")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.y(P.x(c0+d+c1))
H.v(a5,"$ia5")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.y(P.x(c0+d+c1))
H.v(a8,"$ia5")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.y(P.x(c0+d+c1))
H.v(b2,"$ia5")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.y(P.x(c0+d+c1))
H.v(a5,"$ia9")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.y(P.x(c0+o+c1))
H.v(a5,"$ia9")
a6=a5}else a6=b9
C.a.h(e,new A.bV(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bI.n(0,g,e)
q=b8.bH
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.x(c0+o+c1))
q.n(0,g,H.k(j,"$iat"))}}},
a4:function(a,b){if(b!=null&&b.d)a.dB(b)},
fv:function(a,b){},
se3:function(a){this.r1=H.o(a,"$ib",[A.an],"$ab")},
see:function(a){this.bD=H.o(a,"$iD",[P.t,A.at],"$aD")},
sdU:function(a){this.bE=H.o(a,"$iD",[P.t,[P.b,A.bS]],"$aD")},
sfg:function(a){this.bF=H.o(a,"$iD",[P.t,A.at],"$aD")},
sfh:function(a){this.bG=H.o(a,"$iD",[P.t,[P.b,A.bT]],"$aD")},
sfG:function(a){this.bH=H.o(a,"$iD",[P.t,A.at],"$aD")},
sdV:function(a){this.bI=H.o(a,"$iD",[P.t,[P.b,A.bV]],"$aD")}}
A.az.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.aB.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.aC.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.fY.prototype={
i:function(a){return this.ak}}
A.bS.prototype={}
A.bT.prototype={}
A.bV.prototype={}
A.cy.prototype={
dN:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ck:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.G(H.kc(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.x("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
fB:function(){var u,t,s,r=this,q=H.c([],[A.d3]),p=r.a,o=H.a6(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.bC(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d3(p,t.name,s))}r.x=new A.eZ(q)},
fD:function(){var u,t,s,r=this,q=H.c([],[A.dT]),p=r.a,o=H.a6(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.bC(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.h5(t.type,t.size,t.name,s))}r.y=new A.io(q)},
at:function(a,b,c){var u=this.a
if(a===1)return new A.at(u,b,c)
else return A.k3(u,this.r,b,a,c)},
eb:function(a,b,c){var u=this.a
if(a===1)return new A.a9(u,b,c)
else return A.k3(u,this.r,b,a,c)},
ec:function(a,b,c){var u=this.a
if(a===1)return new A.bU(u,b,c)
else return A.k3(u,this.r,b,a,c)},
aY:function(a,b){return new P.e6(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
h5:function(a,b,c,d){var u=this
switch(a){case 5120:return u.at(b,c,d)
case 5121:return u.at(b,c,d)
case 5122:return u.at(b,c,d)
case 5123:return u.at(b,c,d)
case 5124:return u.at(b,c,d)
case 5125:return u.at(b,c,d)
case 5126:return new A.a5(u.a,c,d)
case 35664:return new A.ij(u.a,c,d)
case 35665:return new A.U(u.a,c,d)
case 35666:return new A.cG(u.a,c,d)
case 35667:return new A.ik(u.a,c,d)
case 35668:return new A.il(u.a,c,d)
case 35669:return new A.im(u.a,c,d)
case 35674:return new A.ip(u.a,c,d)
case 35675:return new A.cH(u.a,c,d)
case 35676:return new A.an(u.a,c,d)
case 35678:return u.eb(b,c,d)
case 35680:return u.ec(b,c,d)
case 35670:throw H.i(u.aY("BOOL",c))
case 35671:throw H.i(u.aY("BOOL_VEC2",c))
case 35672:throw H.i(u.aY("BOOL_VEC3",c))
case 35673:throw H.i(u.aY("BOOL_VEC4",c))
default:throw H.i(P.x("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.dT.prototype={}
A.io.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
A:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.G()},
G:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.at.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.il.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.im.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)},
sfN:function(a){H.o(a,"$ib",[P.t],"$ab")}}
A.a5.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.U.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.cG.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.cH.prototype={
a7:function(a){var u=new Float32Array(H.cW(H.o(a,"$ib",[P.B],"$ab")))
C.b.dr(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.an.prototype={
a7:function(a){var u=new Float32Array(H.cW(H.o(a,"$ib",[P.B],"$ab")))
C.b.ds(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.a9.prototype={
dB:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bU.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.jt.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bM(s.b,b).bM(s.d.bM(s.c,b),c)
s=new V.aA(r.a,r.b,r.c)
if(!J.W(a.f,s)){a.f=s
s=a.a
if(s!=null)s.T()}a.shR(r.B(0,Math.sqrt(r.L(r))))
s=1-b
u=1-c
u=new V.dD(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.W(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.T()}},
$S:33}
F.a0.prototype={
aL:function(){var u=this
if(!u.gaM()){C.a.F(u.a.a.d.b,u)
u.a.a.T()}u.br()
u.bs()
u.fl()},
fw:function(a){this.a=a
C.a.h(a.d.b,this)},
fz:function(a){this.b=a
C.a.h(a.d.c,this)},
fA:function(a){this.c=a
C.a.h(a.d.d,this)},
br:function(){var u=this.a
if(u!=null){C.a.F(u.d.b,this)
this.a=null}},
bs:function(){var u=this.b
if(u!=null){C.a.F(u.d.c,this)
this.b=null}},
fl:function(){var u=this.c
if(u!=null){C.a.F(u.d.d,this)
this.c=null}},
gaM:function(){return this.a==null||this.b==null||this.c==null},
e2:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cI()
if(q!=null)s=s.I(0,q)
if(u!=null)s=s.I(0,u)
if(t!=null)s=s.I(0,t)
if(s.d0())return
return s.B(0,Math.sqrt(s.L(s)))},
e6:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.Z(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.B(0,Math.sqrt(r.L(r)))
r=t.Z(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.aK(r.B(0,Math.sqrt(r.L(r))))
return r.B(0,Math.sqrt(r.L(r)))},
bA:function(){var u,t=this
if(t.d!=null)return!0
u=t.e2()
if(u==null){u=t.e6()
if(u==null)return!1}t.d=u
t.a.a.T()
return!0},
e1:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cI()
if(q!=null)s=s.I(0,q)
if(u!=null)s=s.I(0,u)
if(t!=null)s=s.I(0,t)
if(s.d0())return
return s.B(0,Math.sqrt(s.L(s)))},
e5:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.M().a){l=d.Z(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.L(l)))
if(s.a-t.a<0)q=q.aE(0)}else{p=(l-u.b)/r
l=d.Z(0,g)
l=new V.aA(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).Z(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.L(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.aE(0)}l=n.d
if(l!=null){o=l.B(0,Math.sqrt(l.L(l)))
l=o.aK(q)
l=l.B(0,Math.sqrt(l.L(l))).aK(o)
q=l.B(0,Math.sqrt(l.L(l)))}return q},
by:function(){var u,t=this
if(t.e!=null)return!0
u=t.e1()
if(u==null){u=t.e5()
if(u==null)return!1}t.e=u
t.a.a.T()
return!0},
gh0:function(a){var u=this
if(J.W(u.a,u.b))return!0
if(J.W(u.b,u.c))return!0
if(J.W(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var u,t,s=this
if(s.gaM())return a+"disposed"
u=a+C.c.a2(J.aj(s.a.e),0)+", "+C.c.a2(J.aj(s.b.e),0)+", "+C.c.a2(J.aj(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
G:function(){return this.u("")}}
F.fq.prototype={}
F.hM.prototype={
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
F.b4.prototype={
aL:function(){var u=this
if(!u.gaM()){C.a.F(u.a.a.c.b,u)
u.a.a.T()}u.br()
u.bs()},
br:function(){var u=this.a
if(u!=null){C.a.F(u.c.b,this)
this.a=null}},
bs:function(){var u=this.b
if(u!=null){C.a.F(u.c.c,this)
this.b=null}},
gaM:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){if(this.gaM())return a+"disposed"
return a+C.c.a2(J.aj(this.a.e),0)+", "+C.c.a2(J.aj(this.b.e),0)},
G:function(){return this.u("")}}
F.fL.prototype={}
F.ih.prototype={
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
F.bv.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.a2(J.aj(u.e),0)},
G:function(){return this.u("")}}
F.dJ.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.ar():u},
bO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.q()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.h3())}h.a.q()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bv()
if(n.a==null)H.y(P.x("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.N(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.I()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.b4()
o=l.a
if(o==null)H.y(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.y(P.x("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.N(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.I()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.dg(l,k,i)}g=h.e
if(g!=null)g.ac(0)},
ay:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ay()||!1
if(!t.a.ay())u=!1
s=t.e
if(s!=null)s.ac(0)
return u},
hr:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.z(o,0)])
for(o=[F.au];u.length!==0;){t=C.a.ghh(u)
C.a.de(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.aO(0,t,q)){C.a.h(s,q)
C.a.de(u,r)}}if(s.length>1)b.bO(s)}}p.a.q()
p.c.bR()
p.d.bR()
p.b.hJ()
p.c.bS(new F.ih())
p.d.bS(new F.hM())
o=p.e
if(o!=null)o.ac(0)},
fZ:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bf()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.be().a)!==0)++s
if((t&$.bd().a)!==0)++s
if((t&$.bg().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.d_().a)!==0)++s
if((t&$.d0().a)!==0)++s
if((t&$.c6().a)!==0)++s
if((t&$.bc().a)!==0)++s
r=a3.gbZ(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.B
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d6])
for(n=0,m=0;m<s;++m){l=a3.fT(m)
k=l.gbZ(l)
C.a.n(o,m,new Z.d6(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].hp(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.o(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cW(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d7(new Z.dY(a0,f),o,a3)
e.sen(H.c([],[Z.bs]))
if(a.b.b.length!==0){t=P.t
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.q()
C.a.h(d,c.e)}b=Z.k5(u,34963,H.o(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bs(0,d.length,b))}if(a.c.b.length!==0){t=P.t
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.q()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.q()
C.a.h(d,c.e)}b=Z.k5(u,34963,H.o(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bs(1,d.length,b))}if(a.d.b.length!==0){t=P.t
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.q()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.q()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.q()
C.a.h(d,c.e)}b=Z.k5(u,34963,H.o(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bs(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.u(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.u(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.u(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.u(t))}return C.a.l(s,"\n")},
T:function(){var u=this.e
if(u!=null)u.N(null)},
$inL:1}
F.hF.prototype={
fQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.o(c,"$ib",[F.au],"$ab")
u=H.c([],[F.a0])
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
C.a.h(u,F.dg(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dg(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dg(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dg(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
bS:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aO(0,p,n)){p.aL()
break}}}}},
bR:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gh0(s)
if(t)s.aL()}},
ay:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bA())s=!1
return s},
bz:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].by())s=!1
return s},
i:function(a){return this.G()},
u:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(a))
return C.a.l(r,"\n")},
G:function(){return this.u("")},
sei:function(a){this.b=H.o(a,"$ib",[F.a0],"$ab")}}
F.hG.prototype={
gm:function(a){return this.b.length},
bS:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aO(0,p,n)){p.aL()
break}}}}},
bR:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.W(s.a,s.b)
if(t)s.aL()}},
i:function(a){return this.G()},
u:function(a){var u,t,s=H.c([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].u(a+(""+u+". ")))}return C.a.l(s,"\n")},
G:function(){return this.u("")},
seo:function(a){this.b=H.o(a,"$ib",[F.b4],"$ab")}}
F.hH.prototype={
gm:function(a){return this.b.length},
hJ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.F(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.N(null)}s=t.a
if(s!=null){C.a.F(s.b.b,t)
t.a=null}}}},
i:function(a){return this.G()},
u:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(a))
return C.a.l(r,"\n")},
G:function(){return this.u("")},
sbo:function(a){this.b=H.o(a,"$ib",[F.bv],"$ab")}}
F.au.prototype={
bC:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.l4(u.cx,r,o,t,s,q,p,a,n)},
h3:function(){return this.bC(null)},
shR:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.T()}},
hp:function(a){var u,t,s=this
if(a.p(0,$.bf())){u=s.f
t=[P.B]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.be())){u=s.r
t=[P.B]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bd())){u=s.x
t=[P.B]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bg())){u=s.y
t=[P.B]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bD())){u=s.z
t=[P.B]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d_())){u=s.Q
t=[P.B]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d0())){u=s.Q
t=[P.B]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.c6()))return H.c([s.ch],[P.B])
else if(a.p(0,$.bc())){u=s.cx
t=[P.B]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.B])},
bA:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cI()
t.d.E(0,new F.iJ(s))
s=s.a
t.r=s.B(0,Math.sqrt(s.L(s)))
s=t.a
if(s!=null){s.T()
s=t.a.e
if(s!=null)s.ac(0)}return!0},
by:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cI()
t.d.E(0,new F.iI(s))
s=s.a
t.x=s.B(0,Math.sqrt(s.L(s)))
s=t.a
if(s!=null){s.T()
s=t.a.e
if(s!=null)s.ac(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
C.a.h(q,C.c.a2(J.aj(s.e),0))
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
C.a.h(q,V.H(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
G:function(){return this.u("")}}
F.iJ.prototype={
$1:function(a){var u,t
H.k(a,"$ia0")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.I(0,u)}},
$S:4}
F.iI.prototype={
$1:function(a){var u,t
H.k(a,"$ia0")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.I(0,u)}},
$S:4}
F.iz.prototype={
q:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.T()
return!0},
cE:function(a,b){var u=null,t=F.l4(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gm:function(a){return this.c.length},
ay:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bA()
return!0},
bz:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].by()
return!0},
h_:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.N(null)}}}}return!0},
i:function(a){return this.G()},
u:function(a){var u,t,s,r
this.q()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].u(a))
return C.a.l(u,"\n")},
G:function(){return this.u("")},
sfO:function(a){this.c=H.o(a,"$ib",[F.au],"$ab")}}
F.iA.prototype={
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
E:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a0]})
C.a.E(u.b,b)
C.a.E(u.c,new F.iB(u,b))
C.a.E(u.d,new F.iC(u,b))},
i:function(a){return this.G()},
G:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
return C.a.l(r,"\n")},
sej:function(a){this.b=H.o(a,"$ib",[F.a0],"$ab")},
sek:function(a){this.c=H.o(a,"$ib",[F.a0],"$ab")},
sel:function(a){this.d=H.o(a,"$ib",[F.a0],"$ab")}}
F.iB.prototype={
$1:function(a){H.k(a,"$ia0")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:4}
F.iC.prototype={
$1:function(a){var u
H.k(a,"$ia0")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:4}
F.iD.prototype={
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.G()},
G:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
return C.a.l(r,"\n")},
sep:function(a){this.b=H.o(a,"$ib",[F.b4],"$ab")},
seq:function(a){this.c=H.o(a,"$ib",[F.b4],"$ab")}}
F.iF.prototype={}
F.iE.prototype={
aO:function(a,b,c){return J.W(b.f,c.f)}}
F.iG.prototype={}
F.hm.prototype={
bO:function(a){var u,t,s,r,q,p,o,n,m
H.o(a,"$ib",[F.au],"$ab")
u=V.cI()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.L(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.u)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.B(0,Math.sqrt(o*o+n*n+m*m))}if(!J.W(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.N(null)}}}return}}
F.iH.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.G()},
G:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
return C.a.l(r,"\n")},
sbo:function(a){this.b=H.o(a,"$ib",[F.bv],"$ab")}}
O.dt.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.ar():u},
P:function(a){var u
H.k(a,"$iE")
u=this.fr
if(u!=null)u.N(a)},
bc:function(){return this.P(null)},
cu:function(a){H.k(a,"$iE")
this.a=null
this.P(a)},
fp:function(){return this.cu(null)},
ey:function(a,b){var u=V.ab
H.o(b,"$ij",[u],"$aj")
u=new D.cj([u])
u.b=!0
this.P(u)},
eA:function(a,b){var u=V.ab
H.o(b,"$ij",[u],"$aj")
u=new D.ck([u])
u.b=!0
this.P(u)},
cg:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.t,h=new H.Y([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.c([],[A.az])
h.E(0,new O.h1(j,q))
C.a.b9(q,new O.h2())
p=new H.Y([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){o=u[s]
r=o.gaJ()
n=p.j(0,o.gaJ())
p.n(0,r,n==null?1:n)}m=H.c([],[A.aB])
p.E(0,new O.h3(j,m))
C.a.b9(m,new O.h4())
l=new H.Y([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){o=i[s]
t=o.gaJ()
r=l.j(0,o.gaJ())
l.n(0,t,r==null?1:r)}k=H.c([],[A.aC])
l.E(0,new O.h5(j,k))
C.a.b9(k,new O.h6())
i=C.e.X(j.e.a.length+3,4)
j.dy.e
return A.m8(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a_:function(a,b){H.o(a,"$ib",[T.cD],"$ab")
if(b!=null)if(!C.a.K(a,b)){b.a=a.length
C.a.h(a,b)}},
b6:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ap(u,u.length,[H.z(u,0)]);u.t();){t=u.d
t.toString
s=$.iy
if(s==null)s=$.iy=new V.L(0,0,1)
t.a=s
r=$.ix
t.d=r==null?$.ix=new V.L(0,1,0):r
r=$.iw
t.e=r==null?$.iw=new V.L(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.b4(s)
r=s.a
p=s.b
o=s.c
t.a=s.B(0,Math.sqrt(r*r+p*p+o*o))
o=q.b4(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.B(0,Math.sqrt(p*p+r*r+s*s))
s=q.b4(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.B(0,Math.sqrt(r*r+p*p+o*o))}}}},
hL:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cg()
u=b6.fr.j(0,b5.ak)
if(u==null){u=A.m7(b5,b6.a)
t=u.b
if(t.length===0)H.y(P.x("May not cache a shader with no name."))
if(b6.fr.cJ(0,t))H.y(P.x('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.n(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.cL
b5=b7.e
if(!(b5 instanceof Z.d7))b5=b7.e=null
if(b5==null||!b5.d.p(0,r)){b5=s.k3
if(b5)b7.d.ay()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bz()
p.a.bz()
p=p.e
if(p!=null)p.ac(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.h_()
o=o.e
if(o!=null)o.ac(0)}m=b7.d.fZ(new Z.iL(b6.a),r)
m.az($.bf()).e=b4.a.Q.c
if(b5)m.az($.be()).e=b4.a.cx.c
if(q)m.az($.bd()).e=b4.a.ch.c
if(s.r1)m.az($.bg()).e=b4.a.cy.c
if(p)m.az($.bD()).e=b4.a.db.c
if(s.rx)m.az($.bc()).e=b4.a.dx.c
b7.e=m}b5=T.cD
l=H.c([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.he()
if(s.dy){q=b4.a
o=b6.dx
o=o.gS(o)
q=q.dy
q.toString
q.a7(o.a3(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gS(o)
n=b6.dx
n=b6.cx=o.R(0,n.gS(n))
o=n}q=q.fr
q.toString
q.a7(o.a3(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.ghH()
n=b6.dx
n=b6.ch=o.R(0,n.gS(n))
o=n}q=q.fy
q.toString
q.a7(o.a3(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.a7(C.j.a3(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.a7(C.j.a3(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.a7(C.j.a3(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.b.b5(q.a,q.d,k)
for(q=[P.B],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.k(n,"$iab")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.cW(H.o(n.a3(0,!0),"$ib",q,"$ab")))
C.b.ds(o.a,o.d,!1,i)}}q=s.a
if(q.a){o=b4.a
n=b4.f.f
o=o.r2
C.b.O(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a_(l,b4.f.d)
q=b4.a
o=b4.f.d
q.a4(q.rx,o)}if(s.id){q=s.b
if(q.a){o=b4.a
n=b4.r.f
o=o.x1
C.b.O(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a_(l,b4.r.d)
q=b4.a
o=b4.r.d
q.a4(q.x2,o)}q=s.c
if(q.a){o=b4.a
n=b4.x.f
o=o.y2
C.b.O(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a_(l,b4.x.d)
q=b4.a
o=b4.x.d
q.a4(q.ak,o)}q=s.d
if(q.a){o=b4.a
n=b4.y.f
o=o.cM
C.b.O(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a_(l,b4.y.d)
q=b4.a
o=b4.y.d
q.a4(q.cN,o)}q=s.e
o=q.a
if(o||q.b||!1){n=b4.a
h=b4.z.ch
n=n.cQ
C.b.U(n.a,n.d,h)}if(o){o=b4.a
n=b4.z.f
o=o.cO
C.b.O(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a_(l,b4.z.d)
q=b4.a
o=b4.z.d
q.a4(q.cP,o)}q=s.z
if(q.length>0){o=b6.db
g=o.gS(o)
o=P.t
f=new H.Y([o,o])
for(o=b4.dx.e,n=o.length,e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=f.j(0,0)
if(c==null)c=0
f.n(0,0,c+1)
b=J.eV(b4.a.bE.j(0,0),c)
h=g.b4(d.a)
a=h.a
a0=h.b
a1=h.c
a1=h.B(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
h=a1.b
a1=a1.c
C.b.O(a0.a,a0.d,a,h,a1)
a1=d.c
h=b.f
C.b.O(h.a,h.d,a1.a,a1.b,a1.c)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=f.j(0,n)
if(k==null)k=0
n=b4.a.bD.j(0,n)
C.b.b5(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
g=o.gS(o)
o=P.t
a2=new H.Y([o,o])
for(o=b4.dx.f,n=o.length,h=[b5],a=[P.B],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
a3=d.gaJ()
c=a2.j(0,a3)
if(c==null)c=0
a2.n(0,a3,c+1)
b=J.eV(b4.a.bG.j(0,a3),c)
a4=g.R(0,d.gS(d))
a0=d.gS(d)
a1=$.cu
a0=a0.bU(a1==null?$.cu=new V.aA(0,0,0):a1)
a1=b.b
C.b.O(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cu
a0=a4.bU(a0==null?$.cu=new V.aA(0,0,0):a0)
a1=b.c
C.b.O(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaZ(d)
a1=b.e
C.b.O(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gao()
a0=a4.d_(0)
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
i=new Float32Array(H.cW(H.o(new V.du(a1,a5,a6,a7,a8,a9,b0,b1,a0).a3(0,!0),"$ib",a,"$ab")))
C.b.dr(b2.a,b2.d,!1,i)
d.gao()
a0=d.gao()
H.o(l,"$ib",h,"$ab")
if(!C.a.K(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gao()
a1=a0.gaN(a0)
if(a1){a1=b.f
a1.toString
a5=a0.gaN(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.ghl(a0)
a1.a.uniform1i(a1.d,a0)}}d.gaF()
a0=d.gdC()
a1=b.x
a1.toString
a5=a0.gha(a0)
a6=a0.ghb(a0)
a7=a0.ghc()
a0=a0.gh9()
C.b.dq(a1.a,a1.d,a5,a6,a7,a0)
a0=d.gaF()
if(!C.a.K(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaF()
a1=a0.gaN(a0)
if(a1){a1=b.r
a1.toString
a5=a0.gaN(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.ghl(a0)
a1.a.uniform1i(a1.d,a0)}}if(d.ghf()){a0=d.gfU()
a1=b.y
C.b.U(a1.a,a1.d,a0)
a0=d.gfV()
a1=b.z
C.b.U(a1.a,a1.d,a0)
a0=d.gfW()
a1=b.Q
C.b.U(a1.a,a1.d,a0)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.bF.j(0,n)
C.b.b5(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
g=o.gS(o)
o=P.t
b3=new H.Y([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
a3=d.gaJ()
c=b3.j(0,a3)
if(c==null)c=0
b3.n(0,a3,c+1)
b=J.eV(b4.a.bI.j(0,a3),c)
h=d.ghG(d)
a=b.b
C.b.O(a.a,a.d,h.a,h.b,h.c)
h=d.gi0(d).ib()
a=b.c
C.b.O(a.a,a.d,h.a,h.b,h.c)
h=g.bU(d.ghG(d))
a=b.d
C.b.O(a.a,a.d,h.a,h.b,h.c)
h=d.gaZ(d)
a=b.e
C.b.O(a.a,a.d,h.a,h.b,h.c)
d.gao()
h=d.gih()
a=b.f
C.b.O(a.a,a.d,h.a,h.b,h.c)
h=d.gic(d)
a=b.r
C.b.O(a.a,a.d,h.a,h.b,h.c)
h=d.gie()
a=b.x
C.b.U(a.a,a.d,h)
h=d.gig()
a=b.y
C.b.U(a.a,a.d,h)
d.gao()
h=d.gao()
H.o(l,"$ib",b5,"$ab")
if(!C.a.K(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gao()
a=h.gaN(h)
if(a){a=b.dx
a.toString
a0=h.d
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}d.gaF()
h=d.gdC()
a=b.z
a.toString
a0=h.gha(h)
a1=h.ghb(h)
a5=h.ghc()
h=h.gh9()
C.b.dq(a.a,a.d,a0,a1,a5,h)
h=d.gaF()
if(!C.a.K(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaF()
a=h.gaN(h)
if(a){a=b.dy
a.toString
a0=h.d
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}if(d.gi1()){h=d.gi_()
a=b.Q
C.b.U(a.a,a.d,h)
h=d.ghZ()
a=b.ch
C.b.U(a.a,a.d,h)}if(d.ghf()){h=d.gfU()
a=b.cx
C.b.U(a.a,a.d,h)
h=d.gfV()
a=b.cy
C.b.U(a.a,a.d,h)
h=d.gfW()
a=b.db
C.b.U(a.a,a.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.u)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.bH.j(0,o)
C.b.b5(o.a,o.d,k)}}}if(s.f.b){b4.a_(l,b4.Q.d)
b5=b4.a
q=b4.Q.d
b5.a4(b5.cR,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gS(q).d_(0)}b5=b5.id
b5.toString
b5.a7(q.a3(0,!0))}if(s.cy){b4.a_(l,b4.ch)
b5=b4.a
q=b4.ch
b5.fv(b5.cS,q)
b5=s.r
if(b5.a){q=b4.a
o=b4.cx.f
q=q.cT
C.b.O(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.a_(l,b4.cx.d)
b5=b4.a
q=b4.cx.d
b5.a4(b5.cU,q)}b5=s.x
q=b5.a
if(q||b5.b||!1){o=b4.a
n=b4.cy.ch
o=o.cV
C.b.U(o.a,o.d,n)}if(q){q=b4.a
o=b4.cy.f
q=q.cW
C.b.O(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.a_(l,b4.cy.d)
b5=b4.a
q=b4.cy.d
b5.a4(b5.cX,q)}}b5=s.y
q=b5.a
o=!q
if(!o||b5.b||!1){if(q){q=b4.a
n=b4.db.f
q=q.cY
C.b.U(q.a,q.d,n)}if(b5.b){b4.a_(l,b4.db.d)
q=b4.a
n=b4.db.d
q.a4(q.cZ,n)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(!q.c&&q.d){q.c=!0
p.activeTexture(33984+q.a)
p.bindTexture(3553,q.b)}}q=b7.e
q.bw(b6)
q.aB(b6)
q.hX(b6)
if(!o||b5.b||!1)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(3553,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.h8()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cg().ak},
se4:function(a){this.e=H.o(a,"$iZ",[V.ab],"$aZ")}}
O.h1.prototype={
$2:function(a,b){H.a6(a)
H.a6(b)
if(typeof b!=="number")return b.I()
return C.a.h(this.b,new A.az(a,C.e.X(b+3,4)*4))},
$S:9}
O.h2.prototype={
$2:function(a,b){H.k(a,"$iaz")
H.k(b,"$iaz")
return J.jO(a.a,b.a)},
$S:37}
O.h3.prototype={
$2:function(a,b){H.a6(a)
H.a6(b)
if(typeof b!=="number")return b.I()
return C.a.h(this.b,new A.aB(a,C.e.X(b+3,4)*4))},
$S:9}
O.h4.prototype={
$2:function(a,b){H.k(a,"$iaB")
H.k(b,"$iaB")
return J.jO(a.a,b.a)},
$S:38}
O.h5.prototype={
$2:function(a,b){H.a6(a)
H.a6(b)
if(typeof b!=="number")return b.I()
return C.a.h(this.b,new A.aC(a,C.e.X(b+3,4)*4))},
$S:9}
O.h6.prototype={
$2:function(a,b){H.k(a,"$iaC")
H.k(b,"$iaC")
return J.jO(a.a,b.a)},
$S:39}
O.fW.prototype={
ai:function(){var u,t=this
t.c0()
u=t.f
if(!(Math.abs(u-1)<$.M().a)){t.f=1
u=new D.R(t.b,u,1,[P.B])
u.b=!0
t.a.P(u)}}}
O.cn.prototype={
P:function(a){return this.a.P(H.k(a,"$iE"))},
bc:function(){return this.P(null)},
ai:function(){},
bt:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.ai()
u=s.a
u.a=null
u.P(null)}},
sb3:function(a){var u,t=this,s=t.c
if(!s.b)t.bt(new A.a8(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gv().F(0,t.gaU())
u=t.d
t.d=a
a.gv().h(0,t.gaU())
s=new D.R(t.b+".texture2D",u,t.d,[T.dQ])
s.b=!0
t.a.P(s)}}}
O.fX.prototype={}
O.aO.prototype={
cw:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.R(s.b+".color",u,a,[V.a_])
t.b=!0
s.a.P(t)}},
ai:function(){this.c0()
this.cw(new V.a_(1,1,1))},
saZ:function(a,b){this.bt(new A.a8(!0,this.c.b,!1))
this.cw(b)}}
O.fZ.prototype={}
O.h_.prototype={
ai:function(){var u,t=this
t.c1()
u=t.ch
if(!(Math.abs(u-1)<$.M().a)){t.ch=1
u=new D.R(t.b+".refraction",u,1,[P.B])
u.b=!0
t.a.P(u)}}}
O.h0.prototype={
cz:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.R(u.b+".shininess",t,a,[P.B])
t.b=!0
u.a.P(t)}},
ai:function(){this.c1()
this.cz(100)}}
O.bR.prototype={}
T.cD.prototype={}
T.dQ.prototype={}
T.i2.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.ar():u}}
T.i3.prototype={
bN:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.i2()
t.a=0
t.b=q
t.d=t.c=!1
r=W.l
W.a1(u,"load",H.m(new T.i4(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
fq:function(a,b,c){var u,t,s,r
b=V.km(b)
u=V.km(a.width)
t=V.km(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jS()
s.width=u
s.height=t
r=H.k(C.q.dv(s,"2d"),"$ica")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nc(r.getImageData(0,0,s.width,s.height))}}}
T.i4.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fq(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.b.hQ(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hd()}++s.e},
$S:21}
V.b1.prototype={
al:function(a,b){return!0},
i:function(a){return"all"},
$iak:1}
V.ak.prototype={}
V.ds.prototype={
al:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].al(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sW:function(a){this.a=H.o(a,"$ib",[V.ak],"$ab")},
$iak:1}
V.ae.prototype={
al:function(a,b){return!this.dH(0,b)},
i:function(a){return"!["+this.c_(0)+"]"}}
V.hv.prototype={
al:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.k0(this.a),t=H.k0(this.b)
return u+".."+t},
$iak:1}
V.hE.prototype={
dM:function(a){var u,t
if(a.a.length<=0)throw H.i(P.x("May not create a SetMatcher with zero characters."))
u=new H.Y([P.t,P.N])
for(t=new H.cm(a,a.gm(a),[H.ai(a,"w",0)]);t.t();)u.n(0,t.d,!0)
this.sfu(u)},
al:function(a,b){return this.a.cJ(0,b)},
i:function(a){var u=this.a
return P.k1(new H.dp(u,[H.z(u,0)]))},
sfu:function(a){this.a=H.o(a,"$iD",[P.t,P.N],"$aD")},
$iak:1}
V.cz.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cF(this.a.k(0,b))
r.sW(H.c([],[V.ak]))
r.c=!1
C.a.h(this.c,r)
return r},
hg:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.al(0,a))return r}return},
i:function(a){return this.b},
sfM:function(a){this.c=H.o(a,"$ib",[V.cF],"$ab")}}
V.dS.prototype={
i:function(a){var u=H.ko(this.b,"\n","\\n"),t=H.ko(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cE.prototype={
an:function(a,b,c){var u,t,s
H.o(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sfm:function(a){var u=P.h
this.c=H.o(a,"$iD",[u,u],"$aD")}}
V.i7.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cz(this,b)
u.sfM(H.c([],[V.cF]))
u.d=null
this.a.n(0,b,u)}return u},
H:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cE(a)
u=P.h
t.sfm(new H.Y([u,u]))
this.b.n(0,a,t)}return t},
dm:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dS]),l=this.c,k=[P.t],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.as(a,s)
q=l.hg(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.k1(j)
throw H.i(P.x("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.k1(j)
o=l.d
n=o.c.j(0,p)
t=new V.dS(n==null?o.b:n,p,s)}++s}}},
sfI:function(a){this.a=H.o(a,"$iD",[P.h,V.cz],"$aD")},
sfL:function(a){this.b=H.o(a,"$iD",[P.h,V.cE],"$aD")}}
V.cF.prototype={
i:function(a){return this.b.b+": "+this.c_(0)}}
X.d9.prototype={$icq:1}
X.fy.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.ar():u}}
X.dA.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.ar():u},
ar:function(a){var u
H.k(a,"$iE")
u=this.f
if(u!=null)u.N(a)},
dZ:function(){return this.ar(null)},
saP:function(a){var u,t,s=this
if(!J.W(s.b,a)){u=s.b
if(u!=null)u.gv().F(0,s.gc6())
t=s.b
s.b=a
if(a!=null)a.gv().h(0,s.gc6())
u=new D.R("mover",t,s.b,[U.bM])
u.b=!0
s.ar(u)}},
$icq:1,
$id9:1}
X.dO.prototype={}
V.bj.prototype={
aT:function(a){this.b=new P.fC(C.H)
this.c=null
this.sbj(H.c([],[[P.b,W.aq]]))},
C:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aq]))
u=a.split("\n")
for(l=u.length,t=[W.aq],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.O(q)
o=m.b.ea(q,0,q.length)
n=o==null?q:o
C.F.dA(p,H.ko(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gb1(m.d),p)}},
d8:function(a,b){var u,t,s,r,q=this
H.o(b,"$ib",[P.h],"$ab")
q.sbj(H.c([],[[P.b,W.aq]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.b_():t).dm(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.b2(t[r])},
sbj:function(a){this.d=H.o(a,"$ib",[[P.b,W.aq]],"$ab")}}
V.jL.prototype={
$1:function(a){var u
H.k(a,"$iaW")
u=C.d.dl(this.a.ghj(),2)
if(u!=="0.00")P.kn(u+" fps")},
$S:41}
V.fd.prototype={
b2:function(a){var u=this
switch(a.a){case"Class":u.C(a.b,"#551")
break
case"Comment":u.C(a.b,"#777")
break
case"Id":u.C(a.b,"#111")
break
case"Num":u.C(a.b,"#191")
break
case"Reserved":u.C(a.b,"#119")
break
case"String":u.C(a.b,"#171")
break
case"Symbol":u.C(a.b,"#616")
break
case"Type":u.C(a.b,"#B11")
break
case"Whitespace":u.C(a.b,"#111")
break}},
b_:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.i8()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.T("a","z")
C.a.h(u.a,t)
t=V.T("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.T("0","9")
C.a.h(t.a,u)
u=V.T("a","z")
C.a.h(t.a,u)
u=V.T("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.T("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.T("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.r(new H.p("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.T("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.T("0","9")
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
C.a.h(a1.k(0,k).l(0,k).a,new V.b1())
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
C.a.h(a1.k(0,h).l(0,h).a,new V.b1())
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
t=new V.ae()
s=[V.ak]
t.sW(H.c([],s))
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
t=new V.ae()
t.sW(H.c([],s))
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
t.d=t.a.H("Num")
t=a1.k(0,n)
t.d=t.a.H("Num")
t=a1.k(0,m)
t.d=t.a.H("Symbol")
t=a1.k(0,j)
t.d=t.a.H("String")
t=a1.k(0,g)
t.d=t.a.H("String")
t=a1.k(0,c)
t.d=t.a.H(d)
t=a1.k(0,a0)
t.d=t.a.H(a0)
t=a1.k(0,q)
t=t.d=t.a.H(q)
u=[P.h]
t.an(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.an(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.an(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fz.prototype={
b2:function(a){var u=this
switch(a.a){case"Builtin":u.C(a.b,"#411")
break
case"Comment":u.C(a.b,"#777")
break
case"Id":u.C(a.b,"#111")
break
case"Num":u.C(a.b,"#191")
break
case"Preprocess":u.C(a.b,"#737")
break
case"Reserved":u.C(a.b,"#119")
break
case"Symbol":u.C(a.b,"#611")
break
case"Type":u.C(a.b,"#171")
break
case"Whitespace":u.C(a.b,"#111")
break}},
b_:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.i8()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.T("a","z")
C.a.h(u.a,t)
t=V.T("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.T("0","9")
C.a.h(t.a,u)
u=V.T("a","z")
C.a.h(t.a,u)
u=V.T("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.T("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.T("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.r(new H.p("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.T("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.T("0","9")
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
C.a.h(e.k(0,k).l(0,m).a,new V.b1())
t=e.k(0,j).l(0,i)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.ae()
s=[V.ak]
t.sW(H.c([],s))
C.a.h(u.a,t)
u=V.r(new H.p("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.r(new H.p("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.ae()
u.sW(H.c([],s))
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
u.d=u.a.H("Num")
u=e.k(0,n)
u.d=u.a.H("Num")
u=e.k(0,m)
u.d=u.a.H("Symbol")
u=e.k(0,i)
u.d=u.a.H(j)
u=e.k(0,g)
u.d=u.a.H(h)
u=e.k(0,f)
u.d=u.a.H(f)
u=e.k(0,q)
u=u.d=u.a.H(q)
t=[P.h]
u.an(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.an(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.an(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fA.prototype={
b2:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.C(a.b,"#911")
u.C("=",t)
break
case"Id":u.C(a.b,t)
break
case"Other":u.C(a.b,t)
break
case"Reserved":u.C(a.b,"#119")
break
case"String":u.C(a.b,"#171")
break
case"Symbol":u.C(a.b,"#616")
break}},
b_:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.i8()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.r(new H.p("_"))
C.a.h(u.a,t)
t=V.T("a","z")
C.a.h(u.a,t)
t=V.T("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.r(new H.p("_"))
C.a.h(t.a,u)
u=V.T("0","9")
C.a.h(t.a,u)
u=V.T("a","z")
C.a.h(t.a,u)
u=V.T("A","Z")
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
C.a.h(l.k(0,o).l(0,o).a,new V.b1())
C.a.h(l.k(0,s).l(0,m).a,new V.b1())
u=l.k(0,m).l(0,m)
t=new V.ae()
t.sW(H.c([],[V.ak]))
C.a.h(u.a,t)
u=V.r(new H.p('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.T("a","z")
C.a.h(t.a,u)
u=V.T("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.H("Symbol")
u=l.k(0,n)
u.d=u.a.H("String")
u=l.k(0,r)
t=u.a.H(r)
u.d=t
t.an(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.H(q)
t=l.k(0,m)
t.d=t.a.H(m)
return l}}
V.hs.prototype={
d8:function(a,b){H.o(b,"$ib",[P.h],"$ab")
this.sbj(H.c([],[[P.b,W.aq]]))
this.C(C.a.l(b,"\n"),"#111")},
b2:function(a){},
b_:function(){return}}
V.hI.prototype={
dO:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a1(q,"scroll",H.m(new V.hK(o),{func:1,ret:-1,args:[r]}),!1,r)},
cF:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.o(a,"$ib",[P.h],"$ab")
this.fC()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dm(C.a.ho(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.ny(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.O(m[1])
l.textContent=H.O(m[0])
t.appendChild(l)}else{k=P.l9(C.r,n,C.h,!1)
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
du:function(a){var u,t,s,r=new V.fd("dart")
r.aT("dart")
u=new V.fz("glsl")
u.aT("glsl")
t=new V.fA("html")
t.aT("html")
s=C.a.hi(H.c([r,u,t],[V.bj]),new V.hL(a))
if(s!=null)return s
r=new V.hs("plain")
r.aT("plain")
return r},
cD:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.o(b0,"$ib",[P.h],"$ab")
u=H.c([],[P.t])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.ki(r).ba(r,"+")){C.a.n(b0,s,C.c.ae(r,1))
C.a.h(u,1)
t=!0}else if(C.c.ba(r,"-")){C.a.n(b0,s,C.c.ae(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.du(a8)
q.d8(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.l9(C.r,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kt()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.P.fS(a,r[a0])
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
for(a3=C.a.gM(r);a3.t();)c.appendChild(a3.gD(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
fC:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.i8()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.r(new H.p("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.ae()
r=[V.ak]
s.sW(H.c([],r))
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
s=new V.ae()
s.sW(H.c([],r))
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
s=new V.ae()
s.sW(H.c([],r))
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
t=new V.ae()
t.sW(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.r(new H.p("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.ae()
t.sW(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.b1())
s=u.k(0,i).l(0,i)
t=new V.ae()
t.sW(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.p("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.H(p)
s=u.k(0,n)
s.d=s.a.H(o)
s=u.k(0,"CodeEnd")
s.d=s.a.H(m)
s=u.k(0,j)
s.d=s.a.H("Link")
s=u.k(0,i)
s.d=s.a.H(i)
this.b=u}}
V.hK.prototype={
$1:function(a){P.kY(C.i,new V.hJ(this.a))},
$S:21}
V.hJ.prototype={
$0:function(){var u=C.d.a5(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s},
$S:1}
V.hL.prototype={
$1:function(a){return H.k(a,"$ibj").a===this.a},
$S:42}
F.jI.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iE")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.cD("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cD("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.dE=u.i
u=J.dl.prototype
u.dG=u.i
u=P.j.prototype
u.dF=u.b7
u=W.P.prototype
u.bb=u.a0
u=W.es.prototype
u.dI=u.ab
u=O.cn.prototype
u.c0=u.ai
u=O.aO.prototype
u.c1=u.ai
u=V.ds.prototype
u.dH=u.al
u.c_=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n6","mv",11)
u(P,"n7","mw",11)
u(P,"n8","mx",11)
t(P,"li","n4",2)
s(W,"nj",4,null,["$4"],["mz"],20,0)
s(W,"nk",4,null,["$4"],["mA"],20,0)
var m
r(m=E.ad.prototype,"gd6",0,0,null,["$1","$0"],["d7","hy"],0,0)
r(m,"gd4",0,0,null,["$1","$0"],["d5","hx"],0,0)
r(m,"gd2",0,0,null,["$1","$0"],["d3","hu"],0,0)
q(m,"ghs","ht",7)
q(m,"ghv","hw",7)
r(m=E.dR.prototype,"gc3",0,0,null,["$1","$0"],["c5","c4"],0,0)
p(m,"ghM","df",2)
o(m=X.dX.prototype,"geN","eO",10)
o(m,"geB","eC",10)
o(m,"geH","eI",3)
o(m,"geR","eS",23)
o(m,"geP","eQ",23)
o(m,"geV","eW",3)
o(m,"geZ","f_",3)
o(m,"geL","eM",3)
o(m,"geX","eY",3)
o(m,"geJ","eK",3)
o(m,"gf0","f1",28)
o(m,"gf2","f3",10)
o(m,"gfd","fe",8)
o(m,"gf9","fa",8)
o(m,"gfb","fc",8)
r(D.bn.prototype,"gdQ",0,0,null,["$1","$0"],["af","dR"],0,0)
r(m=D.dn.prototype,"gcp",0,0,null,["$1","$0"],["cq","eT"],0,0)
o(m,"gf5","f6",30)
q(m,"gev","ew",12)
q(m,"gf7","f8",12)
n(V.b9.prototype,"gm","bL",24)
n(V.L.prototype,"gm","bL",24)
r(m=M.de.prototype,"ga8",0,0,null,["$1","$0"],["ag","dT"],0,0)
q(m,"geD","eE",7)
q(m,"geF","eG",7)
r(m=O.dt.prototype,"gaU",0,0,null,["$1","$0"],["P","bc"],0,0)
r(m,"gfo",0,0,null,["$1","$0"],["cu","fp"],0,0)
q(m,"gex","ey",22)
q(m,"gez","eA",22)
r(O.cn.prototype,"gaU",0,0,null,["$1","$0"],["P","bc"],0,0)
r(X.dA.prototype,"gc6",0,0,null,["$1","$0"],["ar","dZ"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.jY,J.a,J.ap,P.ef,P.j,H.cm,P.aL,H.bJ,H.dW,H.id,P.bp,H.cb,H.ex,P.a3,H.fM,H.fN,H.fH,P.eD,P.b0,P.aw,P.dZ,P.hT,P.cB,P.hU,P.aW,P.aa,P.js,P.jg,P.bX,P.ee,P.w,P.cc,P.fD,P.jq,P.N,P.bm,P.a7,P.bo,P.hq,P.dM,P.e6,P.fx,P.bq,P.b,P.D,P.I,P.af,P.h,P.b7,W.f9,W.bx,W.A,W.dy,W.es,W.jl,W.dh,W.al,W.jf,W.eJ,P.eI,P.ja,O.Z,O.co,E.f3,E.ad,E.hw,E.dR,Z.dY,Z.iL,Z.d7,Z.bs,Z.ba,D.f6,D.bI,D.E,X.d8,X.dm,X.fJ,X.fP,X.cp,X.hd,X.i9,X.dX,D.bn,D.a2,D.dB,D.dL,V.a_,V.bk,V.fn,V.du,V.ab,V.am,V.aA,V.dD,V.dG,V.b9,V.L,M.de,A.d3,A.eZ,A.a8,A.az,A.aB,A.aC,A.fY,A.bS,A.bT,A.bV,A.dT,A.io,F.a0,F.fq,F.b4,F.fL,F.bv,F.dJ,F.hF,F.hG,F.hH,F.au,F.iz,F.iA,F.iD,F.iF,F.iG,F.iH,O.bR,O.cn,O.fZ,T.i3,V.b1,V.ak,V.ds,V.hv,V.hE,V.cz,V.dS,V.cE,V.i7,X.d9,X.dO,X.dA,V.bj,V.hI])
s(J.a,[J.fG,J.dk,J.dl,J.aM,J.cl,J.bt,H.cs,W.e,W.eW,W.d4,W.ca,W.aH,W.aI,W.Q,W.e0,W.fe,W.ff,W.e2,W.dd,W.e4,W.fh,W.l,W.e7,W.aK,W.fB,W.ea,W.br,W.dr,W.h7,W.eg,W.eh,W.aP,W.ei,W.el,W.aQ,W.ep,W.er,W.aT,W.et,W.aU,W.ey,W.aD,W.eB,W.i6,W.aX,W.eE,W.ib,W.it,W.eK,W.eM,W.eO,W.eQ,W.eS,P.b3,P.ec,P.b6,P.en,P.hu,P.ez,P.b8,P.eG,P.f_,P.e_,P.d5,P.dE,P.bP,P.dI,P.dP,P.dU,P.ev])
s(J.dl,[J.hr,J.bW,J.bu])
t(J.jX,J.aM)
s(J.cl,[J.dj,J.di])
t(P.fO,P.ef)
s(P.fO,[H.dV,W.iT,W.ac,P.ft])
t(H.p,H.dV)
s(P.j,[H.fk,H.fS,H.cJ])
s(H.fk,[H.bL,H.dp])
s(P.aL,[H.fT,H.iM])
t(H.fU,H.bL)
s(P.bp,[H.hn,H.fI,H.ir,H.ig,H.f5,H.hC,P.eY,P.dz,P.ay,P.is,P.iq,P.cA,P.f7,P.fc])
s(H.cb,[H.jN,H.i_,H.jE,H.jF,H.jG,P.iP,P.iO,P.iQ,P.iR,P.jp,P.jo,P.iZ,P.j2,P.j_,P.j0,P.j1,P.j5,P.j6,P.j4,P.j3,P.hV,P.hW,P.jy,P.jd,P.jc,P.je,P.fR,P.fi,P.fj,W.fl,W.h9,W.hb,W.hB,W.hS,W.iY,W.hl,W.hk,W.jh,W.ji,W.jn,W.jr,P.jA,P.fu,P.fv,P.f1,E.hx,E.hy,E.hz,E.i5,D.fo,D.fp,F.jt,F.iJ,F.iI,F.iB,F.iC,O.h1,O.h2,O.h3,O.h4,O.h5,O.h6,T.i4,V.jL,V.hK,V.hJ,V.hL,F.jI])
s(H.i_,[H.hQ,H.c8])
t(H.iN,P.eY)
t(P.fQ,P.a3)
s(P.fQ,[H.Y,W.iS])
t(H.dv,H.cs)
s(H.dv,[H.cN,H.cP])
t(H.cO,H.cN)
t(H.cr,H.cO)
t(H.cQ,H.cP)
t(H.dw,H.cQ)
s(H.dw,[H.he,H.hf,H.hg,H.hh,H.hi,H.dx,H.hj])
t(P.jb,P.js)
t(P.j9,P.jg)
t(P.cd,P.hU)
t(P.fm,P.cc)
s(P.cd,[P.fC,P.iv])
t(P.iu,P.fm)
s(P.a7,[P.B,P.t])
s(P.ay,[P.bO,P.fE])
s(W.e,[W.C,W.fs,W.aS,W.cR,W.aV,W.aE,W.cT,W.iK,W.cK,P.f2,P.bG])
s(W.C,[W.P,W.bi,W.cL])
s(W.P,[W.q,P.n])
s(W.q,[W.d2,W.eX,W.c7,W.bh,W.bH,W.aq,W.fw,W.ci,W.hD,W.bQ,W.dN,W.hY,W.hZ,W.cC])
s(W.aH,[W.ce,W.fa,W.fb])
t(W.f8,W.aI)
t(W.cf,W.e0)
t(W.e3,W.e2)
t(W.dc,W.e3)
t(W.e5,W.e4)
t(W.fg,W.e5)
t(W.aJ,W.d4)
t(W.e8,W.e7)
t(W.fr,W.e8)
t(W.eb,W.ea)
t(W.bK,W.eb)
t(W.bw,W.l)
s(W.bw,[W.aN,W.a4,W.aF])
t(W.h8,W.eg)
t(W.ha,W.eh)
t(W.ej,W.ei)
t(W.hc,W.ej)
t(W.em,W.el)
t(W.ct,W.em)
t(W.eq,W.ep)
t(W.ht,W.eq)
t(W.hA,W.er)
t(W.cS,W.cR)
t(W.hN,W.cS)
t(W.eu,W.et)
t(W.hO,W.eu)
t(W.hR,W.ey)
t(W.eC,W.eB)
t(W.i0,W.eC)
t(W.cU,W.cT)
t(W.i1,W.cU)
t(W.eF,W.eE)
t(W.ia,W.eF)
t(W.b_,W.a4)
t(W.eL,W.eK)
t(W.iU,W.eL)
t(W.e1,W.dd)
t(W.eN,W.eM)
t(W.j7,W.eN)
t(W.eP,W.eO)
t(W.ek,W.eP)
t(W.eR,W.eQ)
t(W.jj,W.eR)
t(W.eT,W.eS)
t(W.jk,W.eT)
t(W.iV,W.iS)
t(W.iW,P.hT)
t(W.k6,W.iW)
t(W.iX,P.cB)
t(W.jm,W.es)
t(P.as,P.ja)
t(P.ed,P.ec)
t(P.fK,P.ed)
t(P.eo,P.en)
t(P.ho,P.eo)
t(P.cx,P.n)
t(P.eA,P.ez)
t(P.hX,P.eA)
t(P.eH,P.eG)
t(P.ic,P.eH)
t(P.f0,P.e_)
t(P.hp,P.bG)
t(P.ew,P.ev)
t(P.hP,P.ew)
s(E.f3,[Z.d6,A.cy,T.cD])
s(D.E,[D.cj,D.ck,D.R])
t(D.dn,O.Z)
t(U.bM,D.f6)
s(U.bM,[U.da,U.dH])
t(A.fV,A.cy)
s(A.dT,[A.at,A.ik,A.il,A.im,A.ii,A.a5,A.ij,A.U,A.cG,A.ip,A.cH,A.an,A.a9,A.bU])
t(F.hM,F.fq)
t(F.ih,F.fL)
t(F.iE,F.iF)
t(F.hm,F.iG)
t(O.dt,O.bR)
s(O.cn,[O.fW,O.fX,O.aO])
s(O.aO,[O.h_,O.h0])
t(T.dQ,T.cD)
t(T.i2,T.dQ)
s(V.ds,[V.ae,V.cF])
t(X.fy,X.dO)
s(V.bj,[V.fd,V.fz,V.fA,V.hs])
u(H.dV,H.dW)
u(H.cN,P.w)
u(H.cO,H.bJ)
u(H.cP,P.w)
u(H.cQ,H.bJ)
u(P.ef,P.w)
u(W.e0,W.f9)
u(W.e2,P.w)
u(W.e3,W.A)
u(W.e4,P.w)
u(W.e5,W.A)
u(W.e7,P.w)
u(W.e8,W.A)
u(W.ea,P.w)
u(W.eb,W.A)
u(W.eg,P.a3)
u(W.eh,P.a3)
u(W.ei,P.w)
u(W.ej,W.A)
u(W.el,P.w)
u(W.em,W.A)
u(W.ep,P.w)
u(W.eq,W.A)
u(W.er,P.a3)
u(W.cR,P.w)
u(W.cS,W.A)
u(W.et,P.w)
u(W.eu,W.A)
u(W.ey,P.a3)
u(W.eB,P.w)
u(W.eC,W.A)
u(W.cT,P.w)
u(W.cU,W.A)
u(W.eE,P.w)
u(W.eF,W.A)
u(W.eK,P.w)
u(W.eL,W.A)
u(W.eM,P.w)
u(W.eN,W.A)
u(W.eO,P.w)
u(W.eP,W.A)
u(W.eQ,P.w)
u(W.eR,W.A)
u(W.eS,P.w)
u(W.eT,W.A)
u(P.ec,P.w)
u(P.ed,W.A)
u(P.en,P.w)
u(P.eo,W.A)
u(P.ez,P.w)
u(P.eA,W.A)
u(P.eG,P.w)
u(P.eH,W.A)
u(P.e_,P.a3)
u(P.ev,P.w)
u(P.ew,W.A)})()
var v={mangledGlobalNames:{t:"int",B:"double",a7:"num",h:"String",N:"bool",I:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.E]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.a4]},{func:1,ret:P.I,args:[F.a0]},{func:1,ret:P.I,args:[D.E]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.t,[P.j,E.ad]]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:-1,args:[P.t,P.t]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.t,[P.j,D.a2]]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.N,args:[W.al]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.E]}]},{func:1,ret:P.h,args:[P.t]},{func:1,ret:P.N,args:[W.P,P.h,P.h,W.bx]},{func:1,ret:P.I,args:[W.l]},{func:1,ret:-1,args:[P.t,[P.j,V.ab]]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:P.B},{func:1,ret:P.N,args:[W.C]},{func:1,args:[P.h]},{func:1,ret:P.I,args:[P.a7]},{func:1,ret:-1,args:[W.b_]},{func:1,args:[,P.h]},{func:1,ret:P.N,args:[[P.j,D.a2]]},{func:1,ret:W.P,args:[W.C]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:P.I,args:[F.au,P.B,P.B]},{func:1,ret:[P.aw,,],args:[,]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.t,args:[A.az,A.az]},{func:1,ret:P.t,args:[A.aB,A.aB]},{func:1,ret:P.t,args:[A.aC,A.aC]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.I,args:[P.aW]},{func:1,ret:P.N,args:[V.bj]},{func:1,args:[W.l]},{func:1,ret:P.I,args:[,],opt:[P.af]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bh.prototype
C.q=W.bH.prototype
C.F=W.aq.prototype
C.I=J.a.prototype
C.a=J.aM.prototype
C.J=J.di.prototype
C.e=J.dj.prototype
C.j=J.dk.prototype
C.d=J.cl.prototype
C.c=J.bt.prototype
C.K=J.bu.prototype
C.O=W.ct.prototype
C.t=J.hr.prototype
C.b=P.bP.prototype
C.P=W.bQ.prototype
C.u=W.dN.prototype
C.m=J.bW.prototype
C.v=W.b_.prototype
C.w=W.cK.prototype
C.o=function getTagFallback(o) {
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
C.p=function(hooks) { return hooks; }

C.D=new P.hq()
C.h=new P.iu()
C.E=new P.iv()
C.f=new P.jb()
C.i=new P.bo(0)
C.G=new P.bo(5e6)
C.H=new P.fD("element",!1,!1,!1)
C.L=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.M=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.N=H.c(u([]),[P.h])
C.r=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.t])
C.k=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.l=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])})();(function staticFields(){$.aG=0
$.c9=null
$.ku=null
$.k8=!1
$.ll=null
$.lg=null
$.lr=null
$.jB=null
$.jH=null
$.kk=null
$.bY=null
$.cX=null
$.cY=null
$.k9=!1
$.X=C.f
$.ah=[]
$.b2=null
$.jU=null
$.kA=null
$.kz=null
$.e9=P.kD(P.h,P.bq)
$.kI=null
$.kM=null
$.cu=null
$.kS=null
$.l1=null
$.l3=null
$.iw=null
$.ix=null
$.iy=null
$.l2=null
$.kL=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nH","lv",function(){return H.lk("_$dart_dartClosure")})
u($,"nI","kq",function(){return H.lk("_$dart_js")})
u($,"nN","lw",function(){return H.aY(H.ie({
toString:function(){return"$receiver$"}}))})
u($,"nO","lx",function(){return H.aY(H.ie({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nP","ly",function(){return H.aY(H.ie(null))})
u($,"nQ","lz",function(){return H.aY(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nT","lC",function(){return H.aY(H.ie(void 0))})
u($,"nU","lD",function(){return H.aY(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nS","lB",function(){return H.aY(H.l_(null))})
u($,"nR","lA",function(){return H.aY(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nW","lF",function(){return H.aY(H.l_(void 0))})
u($,"nV","lE",function(){return H.aY(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"od","kr",function(){return P.mu()})
u($,"of","lK",function(){return P.mi("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oe","lJ",function(){return P.kE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"o6","lI",function(){return Z.av(0)})
u($,"o0","lG",function(){return Z.av(511)})
u($,"o8","bf",function(){return Z.av(1)})
u($,"o7","be",function(){return Z.av(2)})
u($,"o2","bd",function(){return Z.av(4)})
u($,"o9","bg",function(){return Z.av(8)})
u($,"oa","bD",function(){return Z.av(16)})
u($,"o3","d_",function(){return Z.av(32)})
u($,"o4","d0",function(){return Z.av(64)})
u($,"o5","lH",function(){return Z.av(96)})
u($,"ob","c6",function(){return Z.av(128)})
u($,"o1","bc",function(){return Z.av(256)})
u($,"nG","lu",function(){return new V.fn(1e-9)})
u($,"nF","M",function(){return $.lu()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cs,ArrayBufferView:H.cs,Float32Array:H.cr,Float64Array:H.cr,Int16Array:H.he,Int32Array:H.hf,Int8Array:H.hg,Uint16Array:H.hh,Uint32Array:H.hi,Uint8ClampedArray:H.dx,CanvasPixelArray:H.dx,Uint8Array:H.hj,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableColElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eW,HTMLAnchorElement:W.d2,HTMLAreaElement:W.eX,HTMLBaseElement:W.c7,Blob:W.d4,HTMLBodyElement:W.bh,HTMLCanvasElement:W.bH,CanvasRenderingContext2D:W.ca,CDATASection:W.bi,CharacterData:W.bi,Comment:W.bi,ProcessingInstruction:W.bi,Text:W.bi,CSSNumericValue:W.ce,CSSUnitValue:W.ce,CSSPerspective:W.f8,CSSCharsetRule:W.Q,CSSConditionRule:W.Q,CSSFontFaceRule:W.Q,CSSGroupingRule:W.Q,CSSImportRule:W.Q,CSSKeyframeRule:W.Q,MozCSSKeyframeRule:W.Q,WebKitCSSKeyframeRule:W.Q,CSSKeyframesRule:W.Q,MozCSSKeyframesRule:W.Q,WebKitCSSKeyframesRule:W.Q,CSSMediaRule:W.Q,CSSNamespaceRule:W.Q,CSSPageRule:W.Q,CSSRule:W.Q,CSSStyleRule:W.Q,CSSSupportsRule:W.Q,CSSViewportRule:W.Q,CSSStyleDeclaration:W.cf,MSStyleCSSProperties:W.cf,CSS2Properties:W.cf,CSSImageValue:W.aH,CSSKeywordValue:W.aH,CSSPositionValue:W.aH,CSSResourceValue:W.aH,CSSURLImageValue:W.aH,CSSStyleValue:W.aH,CSSMatrixComponent:W.aI,CSSRotation:W.aI,CSSScale:W.aI,CSSSkew:W.aI,CSSTranslation:W.aI,CSSTransformComponent:W.aI,CSSTransformValue:W.fa,CSSUnparsedValue:W.fb,DataTransferItemList:W.fe,HTMLDivElement:W.aq,DOMException:W.ff,ClientRectList:W.dc,DOMRectList:W.dc,DOMRectReadOnly:W.dd,DOMStringList:W.fg,DOMTokenList:W.fh,Element:W.P,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aJ,FileList:W.fr,FileWriter:W.fs,HTMLFormElement:W.fw,Gamepad:W.aK,History:W.fB,HTMLCollection:W.bK,HTMLFormControlsCollection:W.bK,HTMLOptionsCollection:W.bK,ImageData:W.br,HTMLImageElement:W.ci,KeyboardEvent:W.aN,Location:W.dr,MediaList:W.h7,MIDIInputMap:W.h8,MIDIOutputMap:W.ha,MimeType:W.aP,MimeTypeArray:W.hc,PointerEvent:W.a4,MouseEvent:W.a4,DragEvent:W.a4,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,DocumentType:W.C,Node:W.C,NodeList:W.ct,RadioNodeList:W.ct,Plugin:W.aQ,PluginArray:W.ht,RTCStatsReport:W.hA,HTMLSelectElement:W.hD,SourceBuffer:W.aS,SourceBufferList:W.hN,SpeechGrammar:W.aT,SpeechGrammarList:W.hO,SpeechRecognitionResult:W.aU,Storage:W.hR,CSSStyleSheet:W.aD,StyleSheet:W.aD,HTMLTableCellElement:W.bQ,HTMLTableDataCellElement:W.bQ,HTMLTableHeaderCellElement:W.bQ,HTMLTableElement:W.dN,HTMLTableRowElement:W.hY,HTMLTableSectionElement:W.hZ,HTMLTemplateElement:W.cC,TextTrack:W.aV,TextTrackCue:W.aE,VTTCue:W.aE,TextTrackCueList:W.i0,TextTrackList:W.i1,TimeRanges:W.i6,Touch:W.aX,TouchEvent:W.aF,TouchList:W.ia,TrackDefaultList:W.ib,CompositionEvent:W.bw,FocusEvent:W.bw,TextEvent:W.bw,UIEvent:W.bw,URL:W.it,VideoTrackList:W.iK,WheelEvent:W.b_,Window:W.cK,DOMWindow:W.cK,Attr:W.cL,CSSRuleList:W.iU,ClientRect:W.e1,DOMRect:W.e1,GamepadList:W.j7,NamedNodeMap:W.ek,MozNamedAttrMap:W.ek,SpeechRecognitionResultList:W.jj,StyleSheetList:W.jk,SVGLength:P.b3,SVGLengthList:P.fK,SVGNumber:P.b6,SVGNumberList:P.ho,SVGPointList:P.hu,SVGScriptElement:P.cx,SVGStringList:P.hX,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,SVGTransform:P.b8,SVGTransformList:P.ic,AudioBuffer:P.f_,AudioParamMap:P.f0,AudioTrackList:P.f2,AudioContext:P.bG,webkitAudioContext:P.bG,BaseAudioContext:P.bG,OfflineAudioContext:P.hp,WebGLBuffer:P.d5,WebGLProgram:P.dE,WebGL2RenderingContext:P.bP,WebGLShader:P.dI,WebGLTexture:P.dP,WebGLUniformLocation:P.dU,SQLResultSetRowList:P.hP})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dv.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dw.$nativeSuperclassTag="ArrayBufferView"
W.cR.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.ln,[])
else F.ln([])})})()
//# sourceMappingURL=test.dart.js.map
