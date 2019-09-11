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
a[c]=function(){a[c]=function(){H.nC(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kg(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={k_:function k_(){},
jX:function(){return new P.cE("No element")},
m3:function(){return new P.cE("Too many elements")},
dL:function(a,b,c,d,e){if(c-b<=32)H.mo(a,b,c,d,e)
else H.mn(a,b,c,d,e)},
mo:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.Y()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
mn:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.a0(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.a0(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
r=p}C.a.n(a2,d,u)
C.a.n(a2,b,s)
C.a.n(a2,c,q)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.n(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.n(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.a_(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a5()
if(k<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.Y()
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
if(typeof g!=="number")return g.a5()
if(g<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.Y()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.Y()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a5()
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
H.dL(a2,a3,o-2,a5,a6)
H.dL(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.d(a2,o)
if(!J.a_(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.d(a2,n)
if(!J.a_(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a5()
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
break}}}H.dL(a2,o,n,a5,a6)}else H.dL(a2,o,n,a5,a6)},
q:function q(a){this.a=a},
fr:function fr(){},
bS:function bS(){},
cq:function cq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fW:function fW(a,b,c){this.a=a
this.b=b
this.$ti=c},
fX:function fX(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fY:function fY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cM:function cM(a,b,c){this.a=a
this.b=b
this.$ti=c},
iL:function iL(a,b,c){this.a=a
this.b=b
this.$ti=c},
bO:function bO(){},
dY:function dY(){},
dX:function dX(){},
ca:function(a){var u,t=H.nD(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
nj:function(a){return v.types[H.ab(a)]},
nq:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iI},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.i(H.bF(a))
return u},
cz:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cA:function(a){return H.ma(a)+H.kc(H.bG(a),0,null)},
ma:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ic1){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ca(t.length>1&&C.c.aC(t,0)===36?C.c.am(t,1):t)},
kO:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mi:function(a){var u,t,s,r=H.c([],[P.r])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bF(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.b7(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.bF(s))}return H.kO(r)},
kP:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bF(s))
if(s<0)throw H.i(H.bF(s))
if(s>65535)return H.mi(a)}return H.kO(a)},
k1:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.b7(u,10))>>>0,56320|u&1023)}throw H.i(P.aW(a,0,1114111,null,null))},
bT:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mh:function(a){var u=H.bT(a).getFullYear()+0
return u},
mf:function(a){var u=H.bT(a).getMonth()+1
return u},
mb:function(a){var u=H.bT(a).getDate()+0
return u},
mc:function(a){var u=H.bT(a).getHours()+0
return u},
me:function(a){var u=H.bT(a).getMinutes()+0
return u},
mg:function(a){var u=H.bT(a).getSeconds()+0
return u},
md:function(a){var u=H.bT(a).getMilliseconds()+0
return u},
F:function(a){throw H.i(H.bF(a))},
d:function(a,b){if(a==null)J.bK(a)
throw H.i(H.c6(a,b))},
c6:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,s,null)
u=H.ab(J.bK(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.hz(b,s)},
ne:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bU(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bU(a,c,!0,b,"end",u)
return new P.aC(!0,b,"end",null)},
bF:function(a){return new P.aC(!0,a,null,null)},
na:function(a){if(typeof a!=="number")throw H.i(H.bF(a))
return a},
i:function(a){var u
if(a==null)a=new P.dD()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lu})
u.name=""}else u.toString=H.lu
return u},
lu:function(){return J.ao(this.dartException)},
A:function(a){throw H.i(a)},
v:function(a){throw H.i(P.bq(a))},
b2:function(a){var u,t,s,r,q,p
a=H.lt(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ih(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ii:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
l0:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kJ:function(a,b){return new H.hq(a,b==null?null:b.method)},
k0:function(a,b){var u=b==null,t=u?null:b.method
return new H.fN(a,t,u?null:b.receiver)},
av:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jN(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.b7(t,16)&8191)===10)switch(s){case 438:return f.$1(H.k0(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kJ(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lx()
q=$.ly()
p=$.lz()
o=$.lA()
n=$.lD()
m=$.lE()
l=$.lC()
$.lB()
k=$.lG()
j=$.lF()
i=r.a9(u)
if(i!=null)return f.$1(H.k0(H.P(u),i))
else{i=q.a9(u)
if(i!=null){i.method="call"
return f.$1(H.k0(H.P(u),i))}else{i=p.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=n.a9(u)
if(i==null){i=m.a9(u)
if(i==null){i=l.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=k.a9(u)
if(i==null){i=j.a9(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kJ(H.P(u),i))}}return f.$1(new H.it(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dN()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aC(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dN()
return a},
c8:function(a){var u
if(a==null)return new H.eD(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eD(a)},
nh:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
np:function(a,b,c,d,e,f){H.k(a,"$ibu")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.y("Unsupported number of arguments for wrapped closure"))},
c5:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.np)
a.$identity=u
return u},
lX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hU().constructor.prototype):Object.create(new H.cd(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aK
if(typeof t!=="number")return t.A()
$.aK=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kw(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lT(d,e,f)
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
lT:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nj,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kv:H.jR
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.i("Error in functionType of tearoff")},
lU:function(a,b,c,d){var u=H.jR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kw:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lW(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lU(t,!r,u,b)
if(t===0){r=$.aK
if(typeof r!=="number")return r.A()
$.aK=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ce
return new Function(r+H.f(q==null?$.ce=H.fa("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aK
if(typeof r!=="number")return r.A()
$.aK=r+1
o+=r
r="return function("+o+"){return this."
q=$.ce
return new Function(r+H.f(q==null?$.ce=H.fa("self"):q)+"."+H.f(u)+"("+o+");}")()},
lV:function(a,b,c,d){var u=H.jR,t=H.kv
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
lW:function(a,b){var u,t,s,r,q,p,o,n=$.ce
if(n==null)n=$.ce=H.fa("self")
u=$.ku
if(u==null)u=$.ku=H.fa("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lV(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.aK
if(typeof u!=="number")return u.A()
$.aK=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.aK
if(typeof u!=="number")return u.A()
$.aK=u+1
return new Function(n+u+"}")()},
kg:function(a,b,c,d,e,f,g){return H.lX(a,b,c,d,!!e,!!f,g)},
jR:function(a){return a.a},
kv:function(a){return a.c},
fa:function(a){var u,t,s,r=new H.cd("self","target","receiver","name"),q=J.jY(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.n6("boolean expression must not be null")
return a},
P:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.b3(a,"String"))},
ok:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.b3(a,"double"))},
lp:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.b3(a,"num"))},
kd:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.b3(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.b3(a,"int"))},
lr:function(a,b){throw H.i(H.b3(a,H.ca(H.P(b).substring(2))))},
nw:function(a,b){throw H.i(H.lS(a,H.ca(H.P(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.lr(a,b)},
p:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.nw(a,b)},
nr:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.lr(a,b)},
lk:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ab(u)]
else return a.$S()}return},
f_:function(a,b){var u
if(typeof a=="function")return!0
u=H.lk(J.V(a))
if(u==null)return!1
return H.lb(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.k9)return a
$.k9=!0
try{if(H.f_(a,b))return a
u=H.jK(b)
t=H.b3(a,u)
throw H.i(t)}finally{$.k9=!1}},
kh:function(a,b){if(a!=null&&!H.kf(a,b))H.A(H.b3(a,H.jK(b)))
return a},
b3:function(a,b){return new H.ij("TypeError: "+P.dh(a)+": type '"+H.f(H.lf(a))+"' is not a subtype of type '"+b+"'")},
lS:function(a,b){return new H.fb("CastError: "+P.dh(a)+": type '"+H.f(H.lf(a))+"' is not a subtype of type '"+b+"'")},
lf:function(a){var u,t=J.V(a)
if(!!t.$icg){u=H.lk(t)
if(u!=null)return H.jK(u)
return"Closure"}return H.cA(a)},
n6:function(a){throw H.i(new H.iM(a))},
nC:function(a){throw H.i(new P.fj(a))},
ml:function(a){return new H.hH(a)},
ll:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bG:function(a){if(a==null)return
return a.$ti},
ol:function(a,b,c){return H.c9(a["$a"+H.f(c)],H.bG(b))},
d1:function(a,b,c,d){var u=H.c9(a["$a"+H.f(c)],H.bG(b))
return u==null?null:u[d]},
an:function(a,b,c){var u=H.c9(a["$a"+H.f(b)],H.bG(a))
return u==null?null:u[c]},
z:function(a,b){var u=H.bG(a)
return u==null?null:u[b]},
jK:function(a){return H.bE(a,null)},
bE:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ca(a[0].name)+H.kc(a,1,b)
if(typeof a=="function")return H.ca(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.f(b[t])}if('func' in a)return H.mG(a,b)
if('futureOr' in a)return"FutureOr<"+H.bE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mG:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.c.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.N)p+=" extends "+H.bE(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bE(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bE(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bE(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.ng(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.P(n[g])
i=i+h+H.bE(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kc:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bd("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bE(p,c)}return"<"+u.i(0)+">"},
c9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ke:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bG(a)
t=J.V(a)
if(t[b]==null)return!1
return H.li(H.c9(t[d],u),null,c,null)},
n:function(a,b,c,d){if(a==null)return a
if(H.ke(a,b,c,d))return a
throw H.i(H.b3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ca(b.substring(2))+H.kc(c,0,null),v.mangledGlobalNames)))},
li:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
oi:function(a,b,c){return a.apply(b,H.c9(J.V(b)["$a"+H.f(c)],H.bG(b)))},
ln:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="J"||a===-1||a===-2||H.ln(u)}return!1},
kf:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="J"||b===-1||b===-2||H.ln(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kf(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f_(a,b)}u=J.V(a).constructor
t=H.bG(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
H:function(a,b){if(a!=null&&!H.kf(a,b))throw H.i(H.b3(a,H.jK(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aB("type" in a?a.type:l,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"cm" in t.prototype))return!1
r=t.prototype["$a"+"cm"]
q=H.c9(r,u?a.slice(1):l)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.lb(a,b,c,d)
if('func' in a)return c.name==="bu"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.li(H.c9(m,u),b,p,d)},
lb:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nu(h,b,g,d)},
nu:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aB(c[s],d,a[s],b))return!1}return!0},
oj:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ns:function(a){var u,t,s,r,q=H.P($.lm.$1(a)),p=$.jB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jH[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.P($.lh.$2(a,q))
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
return r.i}if(s==="+")return H.lq(a,u)
if(s==="*")throw H.i(P.l1(q))
if(v.leafTags[q]===true){r=H.jJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lq(a,u)},
lq:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.km(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jJ:function(a){return J.km(a,!1,null,!!a.$iI)},
nt:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jJ(u)
else return J.km(u,c,null,null)},
nn:function(){if(!0===$.kl)return
$.kl=!0
H.no()},
no:function(){var u,t,s,r,q,p,o,n
$.jB=Object.create(null)
$.jH=Object.create(null)
H.nm()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ls.$1(q)
if(p!=null){o=H.nt(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nm:function(){var u,t,s,r,q,p,o=C.x()
o=H.c4(C.y,H.c4(C.z,H.c4(C.q,H.c4(C.q,H.c4(C.A,H.c4(C.B,H.c4(C.C(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lm=new H.jE(r)
$.lh=new H.jF(q)
$.ls=new H.jG(p)},
c4:function(a,b){return a(b)||b},
m5:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.i(new P.fD("Illegal RegExp pattern ("+String(p)+")",a))},
nz:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nf:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lt:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kp:function(a,b,c){var u=H.nA(a,b,c)
return u},
nA:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lt(b),'g'),H.nf(c))},
ih:function ih(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a){this.a=a},
jN:function jN(a){this.a=a},
eD:function eD(a){this.a=a
this.b=null},
cg:function cg(){},
i3:function i3(){},
hU:function hU(){},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a){this.a=a},
fb:function fb(a){this.a=a},
hH:function hH(a){this.a=a},
iM:function iM(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fQ:function fQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dr:function dr(a,b){this.a=a
this.$ti=b},
fR:function fR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cZ:function(a){return a},
bD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.c6(b,a))},
mF:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.ne(a,b,c))
return b},
cw:function cw(){},
dz:function dz(){},
cv:function cv(){},
dA:function dA(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
dB:function dB(){},
hn:function hn(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
ng:function(a){return J.kC(a?Object.keys(a):[],null)},
nD:function(a){return v.mangledGlobalNames[a]},
nv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
km:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jD:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kl==null){H.nn()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.l1("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kq()]
if(r!=null)return r
r=H.ns(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.kq(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
m4:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jQ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aW(a,0,4294967295,"length",null))
return J.kC(new Array(a),b)},
kC:function(a,b){return J.jY(H.c(a,[b]))},
jY:function(a){a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dl.prototype
return J.dk.prototype}if(typeof a=="string")return J.bx.prototype
if(a==null)return J.dm.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.N)return a
return J.jD(a)},
ki:function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.N)return a
return J.jD(a)},
jC:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.N)return a
return J.jD(a)},
ni:function(a){if(typeof a=="number")return J.cp.prototype
if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.c1.prototype
return a},
kj:function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.c1.prototype
return a},
kk:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.N)return a
return J.jD(a)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).p(a,b)},
f0:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nq(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ki(a).j(a,b)},
lM:function(a,b,c,d){return J.kk(a).hf(a,b,c,d)},
jO:function(a,b){return J.ni(a).hr(a,b)},
jP:function(a,b){return J.jC(a).B(a,b)},
lN:function(a,b){return J.jC(a).J(a,b)},
lO:function(a){return J.kk(a).ghn(a)},
bI:function(a){return J.V(a).gG(a)},
bJ:function(a){return J.jC(a).gP(a)},
bK:function(a){return J.ki(a).gm(a)},
ks:function(a){return J.jC(a).i6(a)},
lP:function(a,b,c){return J.kj(a).b2(a,b,c)},
lQ:function(a){return J.kj(a).il(a)},
ao:function(a){return J.V(a).i(a)},
a:function a(){},
fL:function fL(){},
dm:function dm(){},
dn:function dn(){},
hu:function hu(){},
c1:function c1(){},
by:function by(){},
aQ:function aQ(a){this.$ti=a},
jZ:function jZ(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cp:function cp(){},
dl:function dl(){},
dk:function dk(){},
bx:function bx(){}},P={
mu:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.n7()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c5(new P.iO(s),1)).observe(u,{childList:true})
return new P.iN(s,u,t)}else if(self.setImmediate!=null)return P.n8()
return P.n9()},
mv:function(a){self.scheduleImmediate(H.c5(new P.iP(H.m(a,{func:1,ret:-1})),0))},
mw:function(a){self.setImmediate(H.c5(new P.iQ(H.m(a,{func:1,ret:-1})),0))},
mx:function(a){P.k3(C.j,H.m(a,{func:1,ret:-1}))},
k3:function(a,b){var u=C.e.a0(a.a,1000)
return P.mD(u<0?0:u,b)},
l_:function(a,b){var u=C.e.a0(a.a,1000)
return P.mE(u<0?0:u,b)},
mD:function(a,b){var u=new P.eJ()
u.ed(a,b)
return u},
mE:function(a,b){var u=new P.eJ()
u.ee(a,b)
return u},
my:function(a,b){var u,t,s
b.a=1
try{a.dG(new P.iZ(b),new P.j_(b),null)}catch(s){u=H.av(s)
t=H.c8(s)
P.nx(new P.j0(b,u,t))}},
l6:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaA")
if(u>=4){t=b.bJ()
b.a=a.a
b.c=a.c
P.cP(b,t)}else{t=H.k(b.c,"$ib6")
b.a=2
b.c=a
a.cO(t)}},
cP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iaf")
P.jx(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cP(h.a,b)}g=h.a
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
if(m){H.k(q,"$iaf")
P.jx(i,i,g.b,q.a,q.b)
return}l=$.Z
if(l!==n)$.Z=n
else l=i
g=b.c
if((g&15)===8)new P.j4(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.j3(u,b,q).$0()}else if((g&2)!==0)new P.j2(h,u,b).$0()
if(l!=null)$.Z=l
g=u.b
if(!!J.V(g).$icm){if(g.a>=4){k=H.k(o.c,"$ib6")
o.c=null
b=o.b6(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.l6(g,o)
return}}j=b.b
k=H.k(j.c,"$ib6")
j.c=null
b=j.b6(k)
g=u.a
p=u.b
if(!g){H.H(p,H.z(j,0))
j.a=4
j.c=p}else{H.k(p,"$iaf")
j.a=8
j.c=p}h.a=j
g=j}},
n2:function(a,b){if(H.f_(a,{func:1,args:[P.N,P.al]}))return H.m(a,{func:1,ret:null,args:[P.N,P.al]})
if(H.f_(a,{func:1,args:[P.N]}))return H.m(a,{func:1,ret:null,args:[P.N]})
throw H.i(P.jQ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n1:function(){var u,t
for(;u=$.c3,u!=null;){$.d0=null
t=u.b
$.c3=t
if(t==null)$.d_=null
u.a.$0()}},
n5:function(){$.ka=!0
try{P.n1()}finally{$.d0=null
$.ka=!1
if($.c3!=null)$.kr().$1(P.lj())}},
le:function(a){var u=new P.e4(a)
if($.c3==null){$.c3=$.d_=u
if(!$.ka)$.kr().$1(P.lj())}else $.d_=$.d_.b=u},
n4:function(a){var u,t,s=$.c3
if(s==null){P.le(a)
$.d0=$.d_
return}u=new P.e4(a)
t=$.d0
if(t==null){u.b=s
$.c3=$.d0=u}else{u.b=t.b
$.d0=t.b=u
if(u.b==null)$.d_=u}},
nx:function(a){var u=null,t=$.Z
if(C.f===t){P.jz(u,u,C.f,a)
return}P.jz(u,u,t,H.m(t.bO(a),{func:1,ret:-1}))},
kZ:function(a,b){var u=$.Z
if(u===C.f)return P.k3(a,H.m(b,{func:1,ret:-1}))
return P.k3(a,H.m(u.bO(b),{func:1,ret:-1}))},
mr:function(a,b){var u=$.Z
if(u===C.f)return P.l_(a,H.m(b,{func:1,ret:-1,args:[P.b0]}))
return P.l_(a,H.m(u.d_(b,P.b0),{func:1,ret:-1,args:[P.b0]}))},
jx:function(a,b,c,d,e){var u={}
u.a=d
P.n4(new P.jy(u,e))},
lc:function(a,b,c,d,e){var u,t=$.Z
if(t===c)return d.$0()
$.Z=c
u=t
try{t=d.$0()
return t}finally{$.Z=u}},
ld:function(a,b,c,d,e,f,g){var u,t=$.Z
if(t===c)return d.$1(e)
$.Z=c
u=t
try{t=d.$1(e)
return t}finally{$.Z=u}},
n3:function(a,b,c,d,e,f,g,h,i){var u,t=$.Z
if(t===c)return d.$2(e,f)
$.Z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Z=u}},
jz:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bO(d):c.ho(d,-1)
P.le(d)},
iO:function iO(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
eJ:function eJ(){this.c=0},
jp:function jp(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b6:function b6(a,b,c,d,e){var _=this
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
iY:function iY(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a){this.a=a},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a){this.a=a
this.b=null},
hX:function hX(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
cF:function cF(){},
hY:function hY(){},
b0:function b0(){},
af:function af(a,b){this.a=a
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
kD:function(a,b){return new H.a0([a,b])},
m6:function(a){return H.nh(a,new H.a0([null,null]))},
ds:function(a){return new P.j9([a])},
k8:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mC:function(a,b,c){var u=new P.ek(a,b,[c])
u.c=a.e
return u},
m2:function(a,b,c){var u,t
if(P.kb(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
C.a.h($.am,a)
try{P.mH(a,u)}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}t=P.kX(b,H.nr(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
jW:function(a,b,c){var u,t
if(P.kb(a))return b+"..."+c
u=new P.bd(b)
C.a.h($.am,a)
try{t=u
t.a=P.kX(t.a,a,", ")}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kb:function(a){var u,t
for(u=$.am.length,t=0;t<u;++t)if(a===$.am[t])return!0
return!1},
mH:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
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
kE:function(a,b){var u,t,s=P.ds(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.h(0,H.H(a[t],b))
return s},
kG:function(a){var u,t={}
if(P.kb(a))return"{...}"
u=new P.bd("")
try{C.a.h($.am,a)
u.a+="{"
t.a=!0
J.lN(a,new P.fV(t,u))
u.a+="}"}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j9:function j9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c2:function c2(a){this.a=a
this.c=this.b=null},
ek:function ek(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fS:function fS(){},
w:function w(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
a7:function a7(){},
jg:function jg(){},
el:function el(){},
ch:function ch(){},
ci:function ci(){},
ft:function ft(){},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fI:function fI(a){this.a=a},
iw:function iw(){},
ix:function ix(){},
jq:function jq(a){this.b=0
this.c=a},
m0:function(a){if(a instanceof H.cg)return a.i(0)
return"Instance of '"+H.f(H.cA(a))+"'"},
m7:function(a,b,c){var u,t=J.m4(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.n(t,u,b)
return H.n(t,"$ib",[c],"$ab")},
kF:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bJ(a);u.u();)C.a.h(s,H.H(u.gE(u),c))
if(b)return s
return H.n(J.jY(s),"$ib",t,"$ab")},
k2:function(a){var u,t
if(a.constructor===Array){H.n(a,"$iaQ",[P.r],"$aaQ")
u=a.length
t=P.kR(0,null,u)
return H.kP(t<u?C.a.dT(a,0,t):a)}return P.mp(a,0,null)},
mp:function(a,b,c){var u,t,s=J.bJ(a)
for(u=0;u<b;++u)if(!s.u())throw H.i(P.aW(b,0,u,null,null))
t=[]
for(;s.u();)t.push(s.gE(s))
return H.kP(t)},
mj:function(a){return new H.fM(a,H.m5(a,!1,!0,!1,!1,!1))},
kX:function(a,b,c){var u=J.bJ(b)
if(!u.u())return a
if(c.length===0){do a+=H.f(u.gE(u))
while(u.u())}else{a+=H.f(u.gE(u))
for(;u.u();)a=a+c+H.f(u.gE(u))}return a},
la:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.i){u=$.lL().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.hs(H.H(b,H.an(c,"ch",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.k1(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lY:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dd:function(a){if(a>=10)return""+a
return"0"+a},
ky:function(a){return new P.bs(1000*a)},
dh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m0(a)},
lR:function(a){return new P.aC(!1,null,null,a)},
jQ:function(a,b,c){return new P.aC(!0,a,b,c)},
hz:function(a,b){return new P.bU(null,null,!0,a,b,"Value not in range")},
aW:function(a,b,c,d,e){return new P.bU(b,c,!0,a,d,"Invalid value")},
kR:function(a,b,c){if(0>a||a>c)throw H.i(P.aW(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.aW(b,a,c,"end",null))
return b}return c},
kQ:function(a,b){if(typeof a!=="number")return a.a5()
if(a<0)throw H.i(P.aW(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.ab(e==null?J.bK(b):e)
return new P.fK(u,!0,a,c,"Index out of range")},
au:function(a){return new P.iu(a)},
l1:function(a){return new P.is(a)},
kW:function(a){return new P.cE(a)},
bq:function(a){return new P.fe(a)},
y:function(a){return new P.ec(a)},
ko:function(a){H.nv(a)},
L:function L(){},
aw:function aw(a,b){this.a=a
this.b=b},
D:function D(){},
bs:function bs(a){this.a=a},
fp:function fp(){},
fq:function fq(){},
bt:function bt(){},
f3:function f3(){},
dD:function dD(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fK:function fK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iu:function iu(a){this.a=a},
is:function is(a){this.a=a},
cE:function cE(a){this.a=a},
fe:function fe(a){this.a=a},
ht:function ht(){},
dN:function dN(){},
fj:function fj(a){this.a=a},
ec:function ec(a){this.a=a},
fD:function fD(a,b){this.a=a
this.b=b},
bu:function bu(){},
r:function r(){},
j:function j(){},
aP:function aP(){},
b:function b(){},
G:function G(){},
J:function J(){},
a5:function a5(){},
N:function N(){},
al:function al(){},
h:function h(){},
bd:function bd(a){this.a=a},
nd:function(a){var u,t=J.V(a)
if(!!t.$ibv){u=t.gd4(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eO(a.data,a.height,a.width)},
nc:function(a){if(a instanceof P.eO)return{data:a.a,height:a.b,width:a.c}
return a},
bg:function(a){var u,t,s,r,q
if(a==null)return
u=P.kD(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.P(t[r])
u.n(0,q,a[q])}return u},
nb:function(a){var u={}
a.J(0,new P.jA(u))
return u},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a){this.a=a},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(){},
fB:function fB(){},
j8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ja:function ja(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
fP:function fP(){},
bc:function bc(){},
hr:function hr(){},
hy:function hy(){},
cB:function cB(){},
i0:function i0(){},
o:function o(){},
be:function be(){},
ig:function ig(){},
ei:function ei(){},
ej:function ej(){},
et:function et(){},
eu:function eu(){},
eF:function eF(){},
eG:function eG(){},
eM:function eM(){},
eN:function eN(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(a){this.a=a},
f8:function f8(){},
bL:function bL(){},
hs:function hs(){},
e5:function e5(){},
d7:function d7(){},
dH:function dH(){},
bV:function bV(){},
dJ:function dJ(){},
dQ:function dQ(){},
dW:function dW(){},
hT:function hT(){},
eB:function eB(){},
eC:function eC(){}},W={
kt:function(){var u=document.createElement("a")
return u},
jS:function(){var u=document.createElement("canvas")
return u},
m_:function(a,b,c){var u=document.body,t=(u&&C.o).a8(u,a,b,c)
t.toString
u=W.E
u=new H.cM(new W.ah(t),H.m(new W.fs(),{func:1,ret:P.L,args:[u]}),[u])
return H.k(u.gaz(u),"$iQ")},
kB:function(a){H.k(a,"$ie")
return"wheel"},
cl:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kk(a)
t=u.gdE(a)
if(typeof t==="string")r=u.gdE(a)}catch(s){H.av(s)}return r},
j7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l8:function(a,b,c,d){var u=W.j7(W.j7(W.j7(W.j7(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a4:function(a,b,c,d,e){var u=W.lg(new W.iX(c),W.l)
if(u!=null&&!0)J.lM(a,b,u,!1)
return new W.iW(a,b,u,!1,[e])},
l7:function(a){var u=W.kt(),t=window.location
u=new W.bC(new W.jf(u,t))
u.e5(a)
return u},
mz:function(a,b,c,d){H.k(a,"$iQ")
H.P(b)
H.P(c)
H.k(d,"$ibC")
return!0},
mA:function(a,b,c,d){var u,t,s
H.k(a,"$iQ")
H.P(b)
H.P(c)
u=H.k(d,"$ibC").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
l9:function(){var u=P.h,t=P.kE(C.l,u),s=H.z(C.l,0),r=H.m(new W.jn(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jm(t,P.ds(u),P.ds(u),P.ds(u),null)
t.ec(null,new H.fY(C.l,r,[s,u]),q,null)
return t},
lg:function(a,b){var u=$.Z
if(u===C.f)return a
return u.d_(a,b)},
t:function t(){},
f1:function f1(){},
d4:function d4(){},
f2:function f2(){},
cc:function cc(){},
d6:function d6(){},
bm:function bm(){},
bM:function bM(){},
cf:function cf(){},
bn:function bn(){},
cj:function cj(){},
ff:function ff(){},
R:function R(){},
ck:function ck(){},
fg:function fg(){},
aL:function aL(){},
aM:function aM(){},
fh:function fh(){},
fi:function fi(){},
fl:function fl(){},
ax:function ax(){},
fm:function fm(){},
de:function de(){},
df:function df(){},
fn:function fn(){},
fo:function fo(){},
iS:function iS(a,b){this.a=a
this.b=b},
Q:function Q(){},
fs:function fs(){},
l:function l(){},
e:function e(){},
aN:function aN(){},
fx:function fx(){},
fy:function fy(){},
fC:function fC(){},
aO:function aO(){},
fH:function fH(){},
bP:function bP(){},
bv:function bv(){},
co:function co(){},
aR:function aR(){},
dt:function dt(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(a){this.a=a},
he:function he(){},
hf:function hf(a){this.a=a},
aU:function aU(){},
hg:function hg(){},
a8:function a8(){},
ah:function ah(a){this.a=a},
E:function E(){},
cx:function cx(){},
aV:function aV(){},
hw:function hw(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hI:function hI(){},
aX:function aX(){},
hR:function hR(){},
aY:function aY(){},
hS:function hS(){},
aZ:function aZ(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
aH:function aH(){},
bW:function bW(){},
dO:function dO(){},
i1:function i1(){},
i2:function i2(){},
cG:function cG(){},
b_:function b_(){},
aI:function aI(){},
i4:function i4(){},
i5:function i5(){},
i9:function i9(){},
b1:function b1(){},
aJ:function aJ(){},
id:function id(){},
ie:function ie(){},
bB:function bB(){},
iv:function iv(){},
iJ:function iJ(){},
b5:function b5(){},
cN:function cN(){},
cO:function cO(){},
iT:function iT(){},
e7:function e7(){},
j6:function j6(){},
eq:function eq(){},
jj:function jj(){},
jk:function jk(){},
iR:function iR(){},
iU:function iU(a){this.a=a},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k7:function k7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iW:function iW(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iX:function iX(a){this.a=a},
bC:function bC(a){this.a=a},
C:function C(){},
dC:function dC(a){this.a=a},
hp:function hp(a){this.a=a},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(){},
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
dj:function dj(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
as:function as(){},
jf:function jf(a,b){this.a=a
this.b=b},
eP:function eP(a){this.a=a},
jr:function jr(a){this.a=a},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ed:function ed(){},
ee:function ee(){},
eg:function eg(){},
eh:function eh(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
er:function er(){},
es:function es(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
cU:function cU(){},
cV:function cV(){},
ez:function ez(){},
eA:function eA(){},
eE:function eE(){},
eH:function eH(){},
eI:function eI(){},
cW:function cW(){},
cX:function cX(){},
eK:function eK(){},
eL:function eL(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){}},O={
jT:function(a){var u=new O.a1([a])
u.bm(a)
return u},
a1:function a1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cs:function cs(){this.b=this.a=null},
dw:function dw(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
h_:function h_(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cr:function cr(){},
h0:function h0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(){var _=this
_.e=_.d=_.c=_.b=null},
h3:function h3(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bX:function bX(){}},E={
mk:function(a,b){var u=new E.hB(a)
u.e0(a,b)
return u},
mq:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibM)return E.kY(a,!0,!0,!0,!1)
u=W.jS()
t=u.style
t.width="100%"
t.height="100%"
s.gd1(a).h(0,u)
return E.kY(u,!0,!0,!0,!1)},
kY:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dS(),j=H.k(C.h.ce(a,"webgl2",P.m6(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibV")
if(j==null)H.A(P.y("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mk(j,a)
u=new T.i6(j)
H.ab(j.getParameter(3379))
u.c=H.ab(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dZ(a)
t=new X.fO()
t.c=new X.ar(!1,!1,!1)
t.sfL(P.ds(P.r))
u.b=t
t=new X.hh(u)
t.f=0
t.r=V.bA()
t.x=V.bA()
t.ch=t.Q=1
u.c=t
t=new X.fT(u)
t.r=0
t.x=V.bA()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ic(u)
t.f=V.bA()
t.r=V.bA()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sez(H.c([],[[P.cF,P.N]]))
t=u.z
s=document
r=W.a8
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a4(s,"contextmenu",H.m(u.gf4(),q),!1,r))
t=u.z
p=W.l
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a4(a,"focus",H.m(u.gfa(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a4(a,"blur",H.m(u.geZ(),o),!1,p))
t=u.z
n=W.aR
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a4(s,"keyup",H.m(u.gfe(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a4(s,"keydown",H.m(u.gfc(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a4(a,"mousedown",H.m(u.gfi(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a4(a,"mouseup",H.m(u.gfm(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a4(a,l,H.m(u.gfk(),q),!1,r))
n=u.z
W.kB(a)
m=W.b5;(n&&C.a).h(n,W.a4(a,H.P(W.kB(a)),H.m(u.gfo(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a4(s,l,H.m(u.gf6(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a4(s,"mouseup",H.m(u.gf8(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a4(s,"pointerlockchange",H.m(u.gfq(),o),!1,p))
p=u.z
o=W.aJ
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a4(a,"touchstart",H.m(u.gfG(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a4(a,"touchend",H.m(u.gfC(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a4(a,"touchmove",H.m(u.gfE(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aw(Date.now(),!1)
k.cy=0
k.cQ()
return k},
f9:function f9(){},
ai:function ai(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
dS:function dS(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i8:function i8(a){this.a=a}},Z={
k6:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cZ(c)),35044)
a.bindBuffer(b,null)
return new Z.e3(b,u)},
az:function(a){return new Z.bf(a)},
e3:function e3(a,b){this.a=a
this.b=b},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iK:function iK(a){this.a=a},
d9:function d9(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a}},D={
U:function(){var u=new D.bN()
u.sac(null)
u.saG(null)
u.c=null
u.d=0
return u},
fc:function fc(){},
bN:function bN(){var _=this
_.d=_.c=_.b=_.a=null},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
x:function x(){this.b=null},
bQ:function bQ(a){this.b=null
this.$ti=a},
bR:function bR(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
br:function br(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a6:function a6(){},
dq:function dq(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dF:function dF(){},
dM:function dM(){}},X={da:function da(a,b){this.a=a
this.b=b},dp:function dp(a,b){this.a=a
this.b=b},fO:function fO(){var _=this
_.d=_.c=_.b=_.a=null},du:function du(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},bb:function bb(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hh:function hh(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ct:function ct(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hx:function hx(){},dU:function dU(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ic:function ic(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dZ:function dZ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m1:function(a){var u=new X.fE(),t=new V.bp(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kT
if(t==null){t=V.kS(0,0,1,1)
$.kT=t}u.r=t
return u},
db:function db(){},
fE:function fE(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){}},V={
nE:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dO(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.c.aa("null",c)
return C.c.aa(C.d.dH(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
c7:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.v)(a),++s){r=V.T(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.d(p,q)
C.a.n(p,q,C.c.aa(p[q],t))}return p},
kn:function(a){return C.d.ii(Math.pow(2,C.J.c0(Math.log(H.na(a))/Math.log(2))))},
dy:function(){var u=$.kI
return u==null?$.kI=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kH:function(a,b,c){var u=c.v(0,Math.sqrt(c.F(c))),t=b.aW(u),s=t.v(0,Math.sqrt(t.F(t))),r=u.aW(s),q=new V.O(a.a,a.b,a.c),p=s.N(0).F(q),o=r.N(0).F(q),n=u.N(0).F(q)
return V.aT(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bA:function(){var u=$.kM
return u==null?$.kM=new V.ad(0,0):u},
kN:function(){var u=$.cy
return u==null?$.cy=new V.aE(0,0,0):u},
kS:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dI(a,b,c,d)},
e2:function(){var u=$.l4
return u==null?$.l4=new V.O(0,0,0):u},
ms:function(){var u=$.iy
return u==null?$.iy=new V.O(-1,0,0):u},
k5:function(){var u=$.iz
return u==null?$.iz=new V.O(0,1,0):u},
mt:function(){var u=$.iA
return u==null?$.iA=new V.O(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function fu(a){this.a=a},
dx:function dx(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ag:function ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ad:function ad(a,b){this.a=a
this.b=b},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
X:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.i(P.y("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.aC(a,0)
t=C.c.aC(b,0)
s=new V.hA()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hJ()
u.e1(a)
return u},
ib:function(){var u=new V.ia(),t=P.h
u.sh2(new H.a0([t,V.cD]))
u.sh5(new H.a0([t,V.cI]))
u.c=null
return u},
b7:function b7(){},
aq:function aq(){},
dv:function dv(){},
aj:function aj(){this.a=null},
hA:function hA(){this.b=this.a=null},
hJ:function hJ(){this.a=null},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a){this.b=a
this.c=null},
ia:function ia(){this.c=this.b=this.a=null},
cJ:function cJ(a){this.b=a
this.a=this.c=null},
ny:function(a){P.mr(C.G,new V.jL(a))},
mm:function(a){var u=new V.hN()
u.e3(a,!0)
return u},
bo:function bo(){},
jL:function jL(a){this.a=a},
fk:function fk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fF:function fF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fG:function fG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hv:function hv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hN:function hN(){this.b=this.a=null},
hP:function hP(a){this.a=a},
hO:function hO(a){this.a=a},
hQ:function hQ(a){this.a=a}},U={
jU:function(){var u=new U.fd()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kx:function(a){var u=new U.dc()
u.a=a
return u},
fd:function fd(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dc:function dc(){this.b=this.a=null},
cn:function cn(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
e_:function e_(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e0:function e0(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dg:function dg(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m8:function(a,b){var u=a.aX,t=new A.fZ(b,u)
t.e2(b,u)
t.e_(a,b)
return t},
m9:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gae(a1)+a2.gae(a2)+a3.gae(a3)+a4.gae(a4)+a5.gae(a5)+a6.gae(a6)+a7.gae(a7)+a8.gae(a8)+a9.gae(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.v)(b0),++t)e+="_"+H.f(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.v)(b1),++t)e+="_"+H.f(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.v)(b2),++t)e+="_"+H.f(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.bk()
if(k){u=$.bj()
f=new Z.bf(f.a|u.a)}if(j){u=$.bi()
f=new Z.bf(f.a|u.a)}if(i){u=$.bl()
f=new Z.bf(f.a|u.a)}if(h){u=$.bh()
f=new Z.bf(f.a|u.a)}return new A.h1(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
jv:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jw:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jv(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jM(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
mL:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jv(b,t,"emission")
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
mI:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jw(b,t,"ambient")
b.a+="\n"},
mJ:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
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
mM:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
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
mS:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
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
mO:function(a,b){var u,t,s
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
mQ:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jv(b,t,"reflect")
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
mR:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jv(b,t,"refract")
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
mK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.al()
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
if(!n.a)n=n.c
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
mP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
if(typeof u!=="number")return u.al()
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
k=H.c([],r)
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
mT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
if(typeof u!=="number")return u.al()
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
i=H.c([],u)
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
mN:function(a,b){var u,t
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
u=b.a+="   return "+C.a.l(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mU:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bd("")
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
A.mL(a,i)
A.mI(a,i)
A.mJ(a,i)
A.mM(a,i)
A.mS(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.mQ(a,i)
A.mR(a,i)}A.mO(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.mK(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.mP(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.mT(a,q[n],i)
A.mN(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.h])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.am(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.am(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.am(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.l(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mV:function(a,b){var u,t,s
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
mX:function(a,b){var u
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
mW:function(a,b){var u
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
mZ:function(a,b){var u,t
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
n_:function(a,b){var u,t
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
mY:function(a,b){var u
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
n0:function(a,b){var u
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
return a[0].toUpperCase()+C.c.am(a,1)},
k4:function(a,b,c,d,e){var u=new A.ik(a,c,e)
u.f=d
u.shd(P.m7(d,0,P.r))
return u},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a){this.a=a},
ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b){var _=this
_.d7=_.it=_.d6=_.ba=_.aX=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iB=_.iA=_.iz=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.dk=_.iy=_.dj=_.di=_.ix=_.dh=_.dg=_.df=_.iw=_.de=_.dd=_.dc=_.iv=_.da=_.d9=_.iu=_.d8=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aD:function aD(a,b){this.a=a
this.b=b},
aF:function aF(a,b){this.a=a
this.b=b},
aG:function aG(a,b){this.a=a
this.b=b},
h1:function h1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aX=b3
_.ba=b4},
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
cC:function cC(){},
dV:function dV(){},
iq:function iq(a){this.a=a},
ay:function ay(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
cK:function cK(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
cL:function cL(a,b,c){this.a=a
this.c=b
this.d=c},
at:function at(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ju:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cY:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.O(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.O(u+a3,t+a1,s+a2)
q=new V.O(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.O(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ju(i)
l=F.ju(j.b)
k=F.nB(d,a0,new F.jt(j,F.ju(j.c),F.ju(j.d),l,m,c),b)
if(k!=null)a.hQ(k)},
nB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.kV()
t=H.c([],[F.b4])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cX(new V.bp(p,0,0,1),new V.ad(r,1))
c.$3(o,r,0)
C.a.h(t,o.bT(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cX(new V.bp(j,i,h,1),new V.ad(r,m))
c.$3(o,r,n)
C.a.h(t,o.bT(d))}}u.d.hg(a+1,b+1,t)
return u},
di:function(a,b,c){var u=new F.a3(),t=a.a
if(t==null)H.A(P.y("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.y("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
kV:function(){var u=new F.dK(),t=new F.iB(u)
t.b=!1
t.she(H.c([],[F.b4]))
u.a=t
t=new F.hM(u)
t.sbH(H.c([],[F.bz]))
u.b=t
t=new F.hL(u)
t.seG(H.c([],[F.ba]))
u.c=t
t=new F.hK(u)
t.seA(H.c([],[F.a3]))
u.d=t
u.e=null
return u},
l5:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b4(),r=new F.iG()
r.sbH(H.c([],[F.bz]))
s.b=r
r=new F.iF()
u=[F.ba]
r.seH(H.c([],u))
r.seI(H.c([],u))
s.c=r
r=new F.iC()
u=[F.a3]
r.seB(H.c([],u))
r.seC(H.c([],u))
r.seD(H.c([],u))
s.d=r
h=$.lH()
s.e=0
r=$.bk()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bj().a)!==0?e:t
s.x=(u&$.bi().a)!==0?b:t
s.y=(u&$.bH().a)!==0?f:t
s.z=(u&$.bl().a)!==0?g:t
s.Q=(u&$.lI().a)!==0?c:t
s.ch=(u&$.cb().a)!==0?i:0
s.cx=(u&$.bh().a)!==0?a:t
return s},
jt:function jt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a3:function a3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ba:function ba(){this.b=this.a=null},
bz:function bz(){this.a=null},
dK:function dK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hK:function hK(a){this.a=a
this.b=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
b4:function b4(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iI:function iI(a){this.a=a},
iH:function iH(a){this.a=a},
iB:function iB(a){this.a=a
this.c=this.b=null},
iC:function iC(){this.d=this.c=this.b=null},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(){this.c=this.b=null},
iG:function iG(){this.b=null}},T={cH:function cH(){},dR:function dR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},i6:function i6(a){var _=this
_.a=a
_.e=_.d=_.c=null},i7:function i7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
lo:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="testCanvas",a0=null,a1="modifiers",a2=34067,a3=V.mm("Test 010"),a4=W.jS()
a4.className="pageLargeCanvas"
a4.id=a
a3.a.appendChild(a4)
u=[P.h]
a3.cY(H.c(["A test of the Material Lighting shader with solid color and ","a directional light= with a cube texture bump map."],u))
a3.cY(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a)
if(t==null)H.A(P.y("Failed to find an element with the identifier, testCanvas."))
s=E.mq(t,!0,!0,!0,!1)
r=new E.ai()
r.a=""
r.b=!0
u=E.ai
r.seo(0,O.jT(u))
r.y.b1(r.ghR(),r.ghU())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sci(0,a0)
r.saZ(a0)
q=F.kV()
F.cY(q,a0,a0,1,1,1,0,0,1)
F.cY(q,a0,a0,1,1,0,1,0,3)
F.cY(q,a0,a0,1,1,0,0,1,2)
F.cY(q,a0,a0,1,1,-1,0,0,0)
F.cY(q,a0,a0,1,1,0,-1,0,0)
F.cY(q,a0,a0,1,1,0,0,-1,3)
q.aJ()
r.sci(0,q)
p=new U.cn()
o=U.a9
p.bm(o)
p.b1(p.geR(),p.gfw())
p.e=null
p.f=V.dy()
p.r=0
n=s.r
m=new U.e0()
l=U.jU()
l.scd(0,!0)
l.sc4(6.283185307179586)
l.sc6(0)
l.sa3(0,0)
l.sc5(100)
l.sR(0)
l.sbU(0.5)
m.b=l
k=m.gaF()
l.gq().h(0,k)
l=U.jU()
l.scd(0,!0)
l.sc4(6.283185307179586)
l.sc6(0)
l.sa3(0,0)
l.sc5(100)
l.sR(0)
l.sbU(0.5)
m.c=l
l.gq().h(0,k)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
j=new X.ar(!1,!1,!1)
i=m.d
m.d=j
l=[X.ar]
k=new D.K(a1,i,j,l)
k.b=!0
m.M(k)
k=m.f
if(k!==!1){m.f=!1
k=new D.K("invertX",k,!1,[P.L])
k.b=!0
m.M(k)}k=m.r
if(k!==!0){m.r=!0
k=new D.K("invertY",k,!0,[P.L])
k.b=!0
m.M(k)}m.aT(n)
p.h(0,m)
n=s.r
m=new U.e_()
k=U.jU()
k.scd(0,!0)
k.sc4(6.283185307179586)
k.sc6(0)
k.sa3(0,0)
k.sc5(100)
k.sR(0)
k.sbU(0.2)
m.b=k
k.gq().h(0,m.gaF())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
j=new X.ar(!0,!1,!1)
i=m.c
m.c=j
k=new D.K(a1,i,j,l)
k.b=!0
m.M(k)
m.aT(n)
p.h(0,m)
n=s.r
m=new U.e1()
m.c=0.01
m.e=m.d=0
j=new X.ar(!1,!1,!1)
m.b=j
l=new D.K(a1,a0,j,l)
l.b=!0
m.M(l)
m.aT(n)
p.h(0,m)
r.saZ(p)
h=new O.dw()
h.sel(O.jT(V.ag))
h.e.b1(h.geV(),h.geX())
p=new O.aS(h,"emission")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a2(0,0,0)
h.f=p
p=new O.aS(h,"ambient")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a2(0,0,0)
h.r=p
p=new O.aS(h,"diffuse")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a2(0,0,0)
h.x=p
p=new O.aS(h,"invDiffuse")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a2(0,0,0)
h.y=p
p=new O.h4(h,"specular")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a2(0,0,0)
p.ch=100
h.z=p
p=new O.h0(h,"bump")
p.c=new A.ac(!1,!1,!1)
h.Q=p
h.ch=null
p=new O.aS(h,"reflect")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a2(0,0,0)
h.cx=p
p=new O.h3(h,"refract")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a2(0,0,0)
p.ch=1
h.cy=p
p=new O.h_(h,"alpha")
p.c=new A.ac(!1,!1,!1)
p.f=1
h.db=p
p=new D.dq()
p.bm(D.a6)
p.sex(H.c([],[D.br]))
p.sfI(H.c([],[D.dF]))
p.sh1(H.c([],[D.dM]))
p.y=p.x=null
p.cg(p.geT(),p.gfu(),p.gfA())
h.dx=p
n=new O.h2()
n.b=new V.bp(0,0,0,0)
n.c=1
n.d=10
n.e=!1
h.dy=n
n=p.x
p=n==null?p.x=D.U():n
p.h(0,h.gfQ())
p=h.dx
n=p.y
p=n==null?p.y=D.U():n
p.h(0,h.gb4())
h.fr=null
p=h.dx
g=V.k5()
n=U.kx(V.kH(V.kN(),g,new V.O(1,1,-3)))
f=new V.a2(1,1,1)
m=new D.br()
m.c=new V.a2(1,1,1)
m.a=V.mt()
m.d=V.k5()
m.e=V.ms()
i=m.b
m.b=n
n.gq().h(0,m.ge6())
o=new D.K("mover",i,m.b,[o])
o.b=!0
m.an(o)
if(!m.c.p(0,f)){i=m.c
m.c=f
o=new D.K("color",i,f,[V.a2])
o.b=!0
m.an(o)}p.h(0,m)
p=h.r
p.saU(0,new V.a2(0,0,1))
p=h.x
p.saU(0,new V.a2(0,1,0))
p=h.z
p.saU(0,new V.a2(1,0,0))
p=h.z
p.bK(new A.ac(!0,!1,p.c.c))
p.cS(10)
p=h.Q
o=s.f
n=o.a
e=n.createTexture()
n.bindTexture(a2,e)
n.texParameteri(a2,10242,10497)
n.texParameteri(a2,10243,10497)
n.texParameteri(a2,10241,9729)
n.texParameteri(a2,10240,9729)
n.bindTexture(a2,a0)
d=new T.dR()
d.a=0
d.b=e
d.c=!1
d.d=0
o.aE(d,e,"../resources/diceBumpMap/posx.png",34069,!1,!1)
o.aE(d,e,"../resources/diceBumpMap/negx.png",34070,!1,!1)
o.aE(d,e,"../resources/diceBumpMap/posy.png",34071,!1,!1)
o.aE(d,e,"../resources/diceBumpMap/negy.png",34072,!1,!1)
o.aE(d,e,"../resources/diceBumpMap/posz.png",34073,!1,!1)
o.aE(d,e,"../resources/diceBumpMap/negz.png",34074,!1,!1)
o=p.c
if(!o.c)p.bK(new A.ac(o.a,!1,!0))
o=p.e
if(o!==d){if(o!=null)o.gq().S(0,p.gb4())
i=p.e
p.e=d
d.gq().h(0,p.gb4())
o=new D.K(p.b+".textureCube",i,p.e,[T.dR])
o.b=!0
p.a.U(o)}p=new M.dg()
p.a=!0
p.se8(0,O.jT(u))
p.e.b1(p.gf0(),p.gf2())
p.y=p.x=p.r=p.f=null
c=X.m1(a0)
b=new X.dE()
b.c=1.0471975511965976
b.d=0.1
b.e=2000
b.saZ(a0)
u=b.c
if(!(Math.abs(u-1.0471975511965976)<$.M().a)){b.c=1.0471975511965976
u=new D.K("fov",u,1.0471975511965976,[P.D])
u.b=!0
b.aB(u)}u=b.d
if(!(Math.abs(u-0.1)<$.M().a)){b.d=0.1
u=new D.K("near",u,0.1,[P.D])
u.b=!0
b.aB(u)}u=b.e
if(!(Math.abs(u-2000)<$.M().a)){b.e=2000
u=new D.K("far",u,2000,[P.D])
u.b=!0
b.aB(u)}u=p.b
if(u!==b){if(u!=null)u.gq().S(0,p.gag())
i=p.b
p.b=b
b.gq().h(0,p.gag())
u=new D.K("camera",i,p.b,[X.db])
u.b=!0
p.ao(u)}u=p.c
if(u!==c){if(u!=null)u.gq().S(0,p.gag())
i=p.c
p.c=c
c.gq().h(0,p.gag())
u=new D.K("target",i,p.c,[X.dP])
u.b=!0
p.ao(u)}p.sdF(a0)
p.sdF(h)
p.e.h(0,r)
p.b.saZ(U.kx(V.aT(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==p){if(u!=null)u.gq().S(0,s.gcn())
s.d=p
p.gq().h(0,s.gcn())
s.co()}u=s.z
if(u==null)u=s.z=D.U()
p={func:1,ret:-1,args:[D.x]}
o=H.m(new B.jI(a3,h),p)
if(u.b==null)u.saG(H.c([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.ny(s)},
jI:function jI(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.k_.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.cz(a)},
i:function(a){return"Instance of '"+H.f(H.cA(a))+"'"}}
J.fL.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iL:1}
J.dm.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dn.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hu.prototype={}
J.c1.prototype={}
J.by.prototype={
i:function(a){var u=a[$.lw()]
if(u==null)return this.dW(a)
return"JavaScript function for "+H.f(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibu:1}
J.aQ.prototype={
h:function(a,b){H.H(b,H.z(a,0))
if(!!a.fixed$length)H.A(P.au("add"))
a.push(b)},
S:function(a,b){var u
if(!!a.fixed$length)H.A(P.au("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.bq(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.f(a[u]))
return t.join(b)},
hN:function(a){return this.l(a,"")},
hH:function(a,b){var u,t,s
H.m(b,{func:1,ret:P.L,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.B(b.$1(s)))return s
if(a.length!==u)throw H.i(P.bq(a))}throw H.i(H.jX())},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dT:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aW(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aW(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gbc:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.jX())},
cZ:function(a,b){var u,t
H.m(b,{func:1,ret:P.L,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.B(b.$1(a[t])))return!0
if(a.length!==u)throw H.i(P.bq(a))}return!1},
bj:function(a,b){var u=H.z(a,0)
H.m(b,{func:1,ret:P.r,args:[u,u]})
if(!!a.immutable$list)H.A(P.au("sort"))
H.dL(a,0,a.length-1,b,u)},
O:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
i:function(a){return P.jW(a,"[","]")},
gP:function(a){return new J.ap(a,a.length,[H.z(a,0)])},
gG:function(a){return H.cz(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.A(P.au("set length"))
if(b<0)throw H.i(P.aW(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.i(H.c6(a,b))
return a[b]},
n:function(a,b,c){H.H(c,H.z(a,0))
if(!!a.immutable$list)H.A(P.au("indexed set"))
if(b>=a.length||b<0)throw H.i(H.c6(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.jZ.prototype={}
J.ap.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.v(s))
u=t.c
if(u>=r){t.scr(null)
return!1}t.scr(s[u]);++t.c
return!0},
scr:function(a){this.d=H.H(a,H.z(this,0))},
$iaP:1}
J.cp.prototype={
hr:function(a,b){var u
H.lp(b)
if(typeof b!=="number")throw H.i(H.bF(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbb(b)
if(this.gbb(a)===u)return 0
if(this.gbb(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbb:function(a){return a===0?1/a<0:a<0},
ii:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.au(""+a+".toInt()"))},
c0:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.au(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.au(""+a+".round()"))},
dH:function(a,b){var u
if(b>20)throw H.i(P.aW(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbb(a))return"-"+u
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
dO:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cT(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cT(a,b)},
cT:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.au("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
b7:function(a,b){var u
if(a>0)u=this.h_(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h_:function(a,b){return b>31?0:a>>>b},
$iD:1,
$ia5:1}
J.dl.prototype={$ir:1}
J.dk.prototype={}
J.bx.prototype={
bS:function(a,b){if(b<0)throw H.i(H.c6(a,b))
if(b>=a.length)H.A(H.c6(a,b))
return a.charCodeAt(b)},
aC:function(a,b){if(b>=a.length)throw H.i(H.c6(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.i(P.jQ(b,null,null))
return a+b},
bk:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.hz(b,null))
if(b>c)throw H.i(P.hz(b,null))
if(c>a.length)throw H.i(P.hz(c,null))
return a.substring(b,c)},
am:function(a,b){return this.b2(a,b,null)},
il:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aa:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikK:1,
$ih:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.bS(this.a,b)},
$adY:function(){return[P.r]},
$aw:function(){return[P.r]},
$aj:function(){return[P.r]},
$ab:function(){return[P.r]}}
H.fr.prototype={}
H.bS.prototype={
gP:function(a){var u=this
return new H.cq(u,u.gm(u),[H.an(u,"bS",0)])},
bi:function(a,b){return this.dV(0,H.m(b,{func:1,ret:P.L,args:[H.an(this,"bS",0)]}))}}
H.cq.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.ki(s),q=r.gm(s)
if(t.b!==q)throw H.i(P.bq(s))
u=t.c
if(u>=q){t.saP(null)
return!1}t.saP(r.B(s,u));++t.c
return!0},
saP:function(a){this.d=H.H(a,H.z(this,0))},
$iaP:1}
H.fW.prototype={
gP:function(a){return new H.fX(J.bJ(this.a),this.b,this.$ti)},
gm:function(a){return J.bK(this.a)},
B:function(a,b){return this.b.$1(J.jP(this.a,b))},
$aj:function(a,b){return[b]}}
H.fX.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saP(u.c.$1(t.gE(t)))
return!0}u.saP(null)
return!1},
gE:function(a){return this.a},
saP:function(a){this.a=H.H(a,H.z(this,1))},
$aaP:function(a,b){return[b]}}
H.fY.prototype={
gm:function(a){return J.bK(this.a)},
B:function(a,b){return this.b.$1(J.jP(this.a,b))},
$abS:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cM.prototype={
gP:function(a){return new H.iL(J.bJ(this.a),this.b,this.$ti)}}
H.iL.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.B(t.$1(u.gE(u))))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.bO.prototype={}
H.dY.prototype={}
H.dX.prototype={}
H.ih.prototype={
a9:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hq.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fN.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.it.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jN.prototype={
$1:function(a){if(!!J.V(a).$ibt)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:19}
H.eD.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ial:1}
H.cg.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibu:1,
gio:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i3.prototype={}
H.hU.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ca(u)+"'"}}
H.cd.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cd))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cz(this.a)
else u=typeof t!=="object"?J.bI(t):H.cz(t)
return(u^H.cz(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.cA(u))+"'")}}
H.ij.prototype={
i:function(a){return this.a}}
H.fb.prototype={
i:function(a){return this.a}}
H.hH.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.iM.prototype={
i:function(a){return"Assertion failed: "+P.dh(this.a)}}
H.a0.prototype={
gm:function(a){return this.a},
ga1:function(a){return new H.dr(this,[H.z(this,0)])},
d3:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cD(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cD(t,b)}else return s.hL(b)},
hL:function(a){var u=this.d
if(u==null)return!1
return this.c1(this.bu(u,J.bI(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b5(r,b)
s=t==null?null:t.b
return s}else return q.hM(b)},
hM:function(a){var u,t,s=this.d
if(s==null)return
u=this.bu(s,J.bI(a)&0x3ffffff)
t=this.c1(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.H(b,H.z(o,0))
H.H(c,H.z(o,1))
if(typeof b==="string"){u=o.b
o.cs(u==null?o.b=o.bF():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cs(t==null?o.c=o.bF():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bF()
r=J.bI(b)&0x3ffffff
q=o.bu(s,r)
if(q==null)o.bL(s,r,[o.bG(b,c)])
else{p=o.c1(q,b)
if(p>=0)q[p].b=c
else q.push(o.bG(b,c))}}},
J:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.z(s,0),H.z(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.bq(s))
u=u.c}},
cs:function(a,b,c){var u,t=this
H.H(b,H.z(t,0))
H.H(c,H.z(t,1))
u=t.b5(a,b)
if(u==null)t.bL(a,b,t.bG(b,c))
else u.b=c},
eO:function(){this.r=this.r+1&67108863},
bG:function(a,b){var u,t=this,s=new H.fQ(H.H(a,H.z(t,0)),H.H(b,H.z(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eO()
return s},
c1:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
i:function(a){return P.kG(this)},
b5:function(a,b){return a[b]},
bu:function(a,b){return a[b]},
bL:function(a,b,c){a[b]=c},
ev:function(a,b){delete a[b]},
cD:function(a,b){return this.b5(a,b)!=null},
bF:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bL(t,u,t)
this.ev(t,u)
return t}}
H.fQ.prototype={}
H.dr.prototype={
gm:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fR(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fR.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bq(t))
else{t=u.c
if(t==null){u.scG(null)
return!1}else{u.scG(t.a)
u.c=u.c.c
return!0}}},
scG:function(a){this.d=H.H(a,H.z(this,0))},
$iaP:1}
H.jE.prototype={
$1:function(a){return this.a(a)},
$S:19}
H.jF.prototype={
$2:function(a,b){return this.a(a,b)},
$S:38}
H.jG.prototype={
$1:function(a){return this.a(H.P(a))},
$S:37}
H.fM.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ikK:1}
H.cw.prototype={$inZ:1}
H.dz.prototype={
gm:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cv.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]},
$abO:function(){return[P.D]},
$aw:function(){return[P.D]},
$ij:1,
$aj:function(){return[P.D]},
$ib:1,
$ab:function(){return[P.D]}}
H.dA.prototype={
$abO:function(){return[P.r]},
$aw:function(){return[P.r]},
$ij:1,
$aj:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.hi.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]}}
H.dB.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bD(b,a,a.length)
return a[b]},
$io_:1}
H.hn.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bD(b,a,a.length)
return a[b]},
$io0:1}
H.cQ.prototype={}
H.cR.prototype={}
H.cS.prototype={}
H.cT.prototype={}
P.iO.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:13}
P.iN.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.iP.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iQ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eJ.prototype={
ed:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c5(new P.jp(this,b),0),a)
else throw H.i(P.au("`setTimeout()` not found."))},
ee:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c5(new P.jo(this,a,Date.now(),b),0),a)
else throw H.i(P.au("Periodic timer."))},
$ib0:1}
P.jp.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jo.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dZ(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b6.prototype={
hP:function(a){if((this.c&15)!==6)return!0
return this.b.b.ca(H.m(this.d,{func:1,ret:P.L,args:[P.N]}),a.a,P.L,P.N)},
hJ:function(a){var u=this.e,t=P.N,s={futureOr:1,type:H.z(this,1)},r=this.b.b
if(H.f_(u,{func:1,args:[P.N,P.al]}))return H.kh(r.ia(u,a.a,a.b,null,t,P.al),s)
else return H.kh(r.ca(H.m(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.aA.prototype={
dG:function(a,b,c){var u,t,s,r=H.z(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Z
if(u!==C.f){H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.n2(b,u)}t=new P.aA($.Z,[c])
s=b==null?1:3
this.ct(new P.b6(t,s,a,b,[r,c]))
return t},
ih:function(a,b){return this.dG(a,null,b)},
ct:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib6")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaA")
s=u.a
if(s<4){u.ct(a)
return}t.a=s
t.c=u.c}P.jz(null,null,t.b,H.m(new P.iY(t,a),{func:1,ret:-1}))}},
cO:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib6")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaA")
u=q.a
if(u<4){q.cO(a)
return}p.a=u
p.c=q.c}o.a=p.b6(a)
P.jz(null,null,p.b,H.m(new P.j1(o,p),{func:1,ret:-1}))}},
bJ:function(){var u=H.k(this.c,"$ib6")
this.c=null
return this.b6(u)},
b6:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cz:function(a){var u,t,s=this,r=H.z(s,0)
H.kh(a,{futureOr:1,type:r})
u=s.$ti
if(H.ke(a,"$icm",u,"$acm"))if(H.ke(a,"$iaA",u,null))P.l6(a,s)
else P.my(a,s)
else{t=s.bJ()
H.H(a,r)
s.a=4
s.c=a
P.cP(s,t)}},
cA:function(a,b){var u,t=this
H.k(b,"$ial")
u=t.bJ()
t.a=8
t.c=new P.af(a,b)
P.cP(t,u)},
$icm:1}
P.iY.prototype={
$0:function(){P.cP(this.a,this.b)},
$S:2}
P.j1.prototype={
$0:function(){P.cP(this.b,this.a.a)},
$S:2}
P.iZ.prototype={
$1:function(a){var u=this.a
u.a=0
u.cz(a)},
$S:13}
P.j_.prototype={
$2:function(a,b){H.k(b,"$ial")
this.a.cA(a,b)},
$1:function(a){return this.$2(a,null)},
$S:28}
P.j0.prototype={
$0:function(){this.a.cA(this.b,this.c)},
$S:2}
P.j4.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dD(H.m(s.d,{func:1}),null)}catch(r){u=H.av(r)
t=H.c8(r)
if(o.d){s=H.k(o.a.a.c,"$iaf").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iaf")
else q.b=new P.af(u,t)
q.a=!0
return}if(!!J.V(n).$icm){if(n instanceof P.aA&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iaf")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ih(new P.j5(p),null)
s.a=!1}},
$S:3}
P.j5.prototype={
$1:function(a){return this.a},
$S:32}
P.j3.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.z(s,0)
q=H.H(n.c,r)
p=H.z(s,1)
n.a.b=s.b.b.ca(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.av(o)
t=H.c8(o)
s=n.a
s.b=new P.af(u,t)
s.a=!0}},
$S:3}
P.j2.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iaf")
r=m.c
if(H.B(r.hP(u))&&r.e!=null){q=m.b
q.b=r.hJ(u)
q.a=!1}}catch(p){t=H.av(p)
s=H.c8(p)
r=H.k(m.a.a.c,"$iaf")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.af(t,s)
n.a=!0}},
$S:3}
P.e4.prototype={}
P.hX.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.aA($.Z,[P.r])
r.a=0
u=H.z(s,0)
t=H.m(new P.hZ(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.i_(r,q),{func:1,ret:-1})
W.a4(s.a,s.b,t,!1,u)
return q}}
P.hZ.prototype={
$1:function(a){H.H(a,H.z(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.z(this.b,0)]}}}
P.i_.prototype={
$0:function(){this.b.cz(this.a.a)},
$S:2}
P.cF.prototype={}
P.hY.prototype={}
P.b0.prototype={}
P.af.prototype={
i:function(a){return H.f(this.a)},
$ibt:1}
P.js.prototype={$ioe:1}
P.jy.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dD():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jb.prototype={
ib:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.f===$.Z){a.$0()
return}P.lc(r,r,this,a,-1)}catch(s){u=H.av(s)
t=H.c8(s)
P.jx(r,r,this,u,H.k(t,"$ial"))}},
ic:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.f===$.Z){a.$1(b)
return}P.ld(r,r,this,a,b,-1,c)}catch(s){u=H.av(s)
t=H.c8(s)
P.jx(r,r,this,u,H.k(t,"$ial"))}},
ho:function(a,b){return new P.jd(this,H.m(a,{func:1,ret:b}),b)},
bO:function(a){return new P.jc(this,H.m(a,{func:1,ret:-1}))},
d_:function(a,b){return new P.je(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
dD:function(a,b){H.m(a,{func:1,ret:b})
if($.Z===C.f)return a.$0()
return P.lc(null,null,this,a,b)},
ca:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.Z===C.f)return a.$1(b)
return P.ld(null,null,this,a,b,c,d)},
ia:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.Z===C.f)return a.$2(b,c)
return P.n3(null,null,this,a,b,c,d,e,f)}}
P.jd.prototype={
$0:function(){return this.a.dD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jc.prototype={
$0:function(){return this.a.ib(this.b)},
$S:3}
P.je.prototype={
$1:function(a){var u=this.c
return this.a.ic(this.b,H.H(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j9.prototype={
gP:function(a){var u=this,t=new P.ek(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
O:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ic2")!=null}else{t=this.ep(b)
return t}},
ep:function(a){var u=this.d
if(u==null)return!1
return this.bs(this.cH(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.H(b,H.z(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cu(u==null?s.b=P.k8():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cu(t==null?s.c=P.k8():t,b)}else return s.eg(0,b)},
eg:function(a,b){var u,t,s,r=this
H.H(b,H.z(r,0))
u=r.d
if(u==null)u=r.d=P.k8()
t=r.cB(b)
s=u[t]
if(s==null)u[t]=[r.bp(b)]
else{if(r.bs(s,b)>=0)return!1
s.push(r.bp(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fN(this.c,b)
else return this.fM(0,b)},
fM:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cH(r,b)
t=s.bs(u,b)
if(t<0)return!1
s.cU(u.splice(t,1)[0])
return!0},
cu:function(a,b){H.H(b,H.z(this,0))
if(H.k(a[b],"$ic2")!=null)return!1
a[b]=this.bp(b)
return!0},
fN:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ic2")
if(u==null)return!1
this.cU(u)
delete a[b]
return!0},
cw:function(){this.r=1073741823&this.r+1},
bp:function(a){var u,t=this,s=new P.c2(H.H(a,H.z(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cw()
return s},
cU:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cw()},
cB:function(a){return J.bI(a)&1073741823},
cH:function(a,b){return a[this.cB(b)]},
bs:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1}}
P.c2.prototype={}
P.ek.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bq(t))
else{t=u.c
if(t==null){u.scv(null)
return!1}else{u.scv(H.H(t.a,H.z(u,0)))
u.c=u.c.b
return!0}}},
scv:function(a){this.d=H.H(a,H.z(this,0))},
$iaP:1}
P.fS.prototype={$ij:1,$ib:1}
P.w.prototype={
gP:function(a){return new H.cq(a,this.gm(a),[H.d1(this,a,"w",0)])},
B:function(a,b){return this.j(a,b)},
ik:function(a,b){var u,t=this,s=H.c([],[H.d1(t,a,"w",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.n(s,u,t.j(a,u))
return s},
ij:function(a){return this.ik(a,!0)},
i:function(a){return P.jW(a,"[","]")}}
P.fU.prototype={}
P.fV.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:15}
P.a7.prototype={
J:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.d1(s,a,"a7",0),H.d1(s,a,"a7",1)]})
for(u=J.bJ(s.ga1(a));u.u();){t=u.gE(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bK(this.ga1(a))},
i:function(a){return P.kG(a)},
$iG:1}
P.jg.prototype={
ai:function(a,b){var u
for(u=J.bJ(H.n(b,"$ij",this.$ti,"$aj"));u.u();)this.h(0,u.gE(u))},
i:function(a){return P.jW(this,"{","}")},
B:function(a,b){var u,t,s,r=this
P.kQ(b,"index")
for(u=P.mC(r,r.r,H.z(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.i(P.W(b,r,"index",null,t))},
$ij:1,
$ikU:1}
P.el.prototype={}
P.ch.prototype={}
P.ci.prototype={}
P.ft.prototype={
$ach:function(){return[P.h,[P.b,P.r]]}}
P.fJ.prototype={
i:function(a){return this.a}}
P.fI.prototype={
er:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.bd("")
if(r>b)q.a+=C.c.b2(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lP(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$aci:function(){return[P.h,P.h]}}
P.iw.prototype={}
P.ix.prototype={
hs:function(a){var u,t,s=P.kR(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jq(u)
if(t.eE(a,0,s)!==s)t.cV(C.c.bS(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mF(0,t.b,u.length)))},
$aci:function(){return[P.h,[P.b,P.r]]}}
P.jq.prototype={
cV:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eE:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bS(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.aC(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cV(r,C.c.aC(a,p)))s=p}else if(r<=2047){q=n.b
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
P.L.prototype={}
P.aw.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aw&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.e.b7(u,30))&1073741823},
i:function(a){var u=this,t=P.lY(H.mh(u)),s=P.dd(H.mf(u)),r=P.dd(H.mb(u)),q=P.dd(H.mc(u)),p=P.dd(H.me(u)),o=P.dd(H.mg(u)),n=P.lZ(H.md(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.D.prototype={}
P.bs.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bs&&this.a===b.a},
gG:function(a){return C.e.gG(this.a)},
i:function(a){var u,t,s,r=new P.fq(),q=this.a
if(q<0)return"-"+new P.bs(0-q).i(0)
u=r.$1(C.e.a0(q,6e7)%60)
t=r.$1(C.e.a0(q,1e6)%60)
s=new P.fp().$1(q%1e6)
return""+C.e.a0(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.fp.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.fq.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bt.prototype={}
P.f3.prototype={
i:function(a){return"Assertion failed"}}
P.dD.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gbr:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbq:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbr()+o+u
if(!q.a)return t
s=q.gbq()
r=P.dh(q.b)
return t+s+": "+r}}
P.bU.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.fK.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t=H.ab(this.b)
if(typeof t!=="number")return t.a5()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gm:function(a){return this.f}}
P.iu.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.is.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cE.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fe.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dh(u)+"."}}
P.ht.prototype={
i:function(a){return"Out of Memory"},
$ibt:1}
P.dN.prototype={
i:function(a){return"Stack Overflow"},
$ibt:1}
P.fj.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ec.prototype={
i:function(a){return"Exception: "+this.a}}
P.fD.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.b2(s,0,75)+"...":s
return t+"\n"+r}}
P.bu.prototype={}
P.r.prototype={}
P.j.prototype={
bi:function(a,b){var u=H.an(this,"j",0)
return new H.cM(this,H.m(b,{func:1,ret:P.L,args:[u]}),[u])},
gm:function(a){var u,t=this.gP(this)
for(u=0;t.u();)++u
return u},
gaz:function(a){var u,t=this.gP(this)
if(!t.u())throw H.i(H.jX())
u=t.gE(t)
if(t.u())throw H.i(H.m3())
return u},
B:function(a,b){var u,t,s
P.kQ(b,"index")
for(u=this.gP(this),t=0;u.u();){s=u.gE(u)
if(b===t)return s;++t}throw H.i(P.W(b,this,"index",null,t))},
i:function(a){return P.m2(this,"(",")")}}
P.aP.prototype={}
P.b.prototype={$ij:1}
P.G.prototype={}
P.J.prototype={
gG:function(a){return P.N.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
p:function(a,b){return this===b},
gG:function(a){return H.cz(this)},
i:function(a){return"Instance of '"+H.f(H.cA(this))+"'"},
toString:function(){return this.i(this)}}
P.al.prototype={}
P.h.prototype={$ikK:1}
P.bd.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.f1.prototype={
gm:function(a){return a.length}}
W.d4.prototype={
i:function(a){return String(a)},
$id4:1}
W.f2.prototype={
i:function(a){return String(a)}}
W.cc.prototype={$icc:1}
W.d6.prototype={}
W.bm.prototype={$ibm:1}
W.bM.prototype={
ce:function(a,b,c){if(c!=null)return a.getContext(b,P.nb(c))
return a.getContext(b)},
dN:function(a,b){return this.ce(a,b,null)},
$ibM:1}
W.cf.prototype={$icf:1}
W.bn.prototype={
gm:function(a){return a.length}}
W.cj.prototype={$icj:1}
W.ff.prototype={
gm:function(a){return a.length}}
W.R.prototype={$iR:1}
W.ck.prototype={
gm:function(a){return a.length}}
W.fg.prototype={}
W.aL.prototype={}
W.aM.prototype={}
W.fh.prototype={
gm:function(a){return a.length}}
W.fi.prototype={
gm:function(a){return a.length}}
W.fl.prototype={
gm:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.fm.prototype={
i:function(a){return String(a)}}
W.de.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.ak,P.a5]]},
$aw:function(){return[[P.ak,P.a5]]},
$ij:1,
$aj:function(){return[[P.ak,P.a5]]},
$ib:1,
$ab:function(){return[[P.ak,P.a5]]},
$aC:function(){return[[P.ak,P.a5]]}}
W.df.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gay(a))+" x "+H.f(this.gas(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iak)return!1
return a.left===u.gbd(b)&&a.top===u.gbf(b)&&this.gay(a)===u.gay(b)&&this.gas(a)===u.gas(b)},
gG:function(a){return W.l8(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gay(a)),C.d.gG(this.gas(a)))},
gd0:function(a){return a.bottom},
gas:function(a){return a.height},
gbd:function(a){return a.left},
gc9:function(a){return a.right},
gbf:function(a){return a.top},
gay:function(a){return a.width},
$iak:1,
$aak:function(){return[P.a5]}}
W.fn.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.h]},
$aw:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aC:function(){return[P.h]}}
W.fo.prototype={
gm:function(a){return a.length}}
W.iS.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$iQ")},
h:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.ij(this)
return new J.ap(u,u.length,[H.z(u,0)])},
$aw:function(){return[W.Q]},
$aj:function(){return[W.Q]},
$ab:function(){return[W.Q]}}
W.Q.prototype={
ghn:function(a){return new W.iU(a)},
gd1:function(a){return new W.iS(a,a.children)},
gd2:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a5()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a5()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
a8:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kA
if(u==null){u=H.c([],[W.as])
t=new W.dC(u)
C.a.h(u,W.l7(null))
C.a.h(u,W.l9())
$.kA=t
d=t}else d=u
u=$.kz
if(u==null){u=new W.eP(d)
$.kz=u
c=u}else{u.a=d
c=u}}if($.b8==null){u=document
t=u.implementation.createHTMLDocument("")
$.b8=t
$.jV=t.createRange()
t=$.b8.createElement("base")
H.k(t,"$icc")
t.href=u.baseURI
$.b8.head.appendChild(t)}u=$.b8
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ibm")}u=$.b8
if(!!this.$ibm)s=u.body
else{s=u.createElement(a.tagName)
$.b8.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.O(C.M,a.tagName)){$.jV.selectNodeContents(s)
r=$.jV.createContextualFragment(b)}else{s.innerHTML=b
r=$.b8.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.b8.body
if(s==null?u!=null:s!==u)J.ks(s)
c.cf(r)
document.adoptNode(r)
return r},
hu:function(a,b,c){return this.a8(a,b,c,null)},
dQ:function(a,b){a.textContent=null
a.appendChild(this.a8(a,b,null,null))},
$iQ:1,
gdE:function(a){return a.tagName}}
W.fs.prototype={
$1:function(a){return!!J.V(H.k(a,"$iE")).$iQ},
$S:17}
W.l.prototype={$il:1}
W.e.prototype={
hf:function(a,b,c,d){H.m(c,{func:1,args:[W.l]})
if(c!=null)this.eh(a,b,c,!1)},
eh:function(a,b,c,d){return a.addEventListener(b,H.c5(H.m(c,{func:1,args:[W.l]}),1),!1)},
$ie:1}
W.aN.prototype={$iaN:1}
W.fx.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aN]},
$aw:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aC:function(){return[W.aN]}}
W.fy.prototype={
gm:function(a){return a.length}}
W.fC.prototype={
gm:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.fH.prototype={
gm:function(a){return a.length}}
W.bP.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibP:1,
$aC:function(){return[W.E]}}
W.bv.prototype={$ibv:1,
gd4:function(a){return a.data}}
W.co.prototype={$ico:1}
W.aR.prototype={$iaR:1}
W.dt.prototype={
i:function(a){return String(a)},
$idt:1}
W.hb.prototype={
gm:function(a){return a.length}}
W.hc.prototype={
j:function(a,b){return P.bg(a.get(H.P(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bg(t.value[1]))}},
ga1:function(a){var u=H.c([],[P.h])
this.J(a,new W.hd(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.hd.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.he.prototype={
j:function(a,b){return P.bg(a.get(H.P(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bg(t.value[1]))}},
ga1:function(a){var u=H.c([],[P.h])
this.J(a,new W.hf(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.hf.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aU.prototype={$iaU:1}
W.hg.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aC:function(){return[W.aU]}}
W.a8.prototype={$ia8:1}
W.ah.prototype={
gaz:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.i(P.kW("No elements"))
if(t>1)throw H.i(P.kW("More than one element"))
return u.firstChild},
ai:function(a,b){var u,t,s,r
H.n(b,"$ij",[W.E],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gP:function(a){var u=this.a.childNodes
return new W.dj(u,u.length,[H.d1(C.O,u,"C",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aw:function(){return[W.E]},
$aj:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
i6:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.dU(a):u},
hi:function(a,b){return a.appendChild(b)},
$iE:1}
W.cx.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.aV.prototype={$iaV:1,
gm:function(a){return a.length}}
W.hw.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aC:function(){return[W.aV]}}
W.hF.prototype={
j:function(a,b){return P.bg(a.get(H.P(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bg(t.value[1]))}},
ga1:function(a){var u=H.c([],[P.h])
this.J(a,new W.hG(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hI.prototype={
gm:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.hR.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aC:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.hS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aC:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gm:function(a){return a.length}}
W.hV.prototype={
j:function(a,b){return a.getItem(H.P(b))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga1:function(a){var u=H.c([],[P.h])
this.J(a,new W.hW(u))
return u},
gm:function(a){return a.length},
$aa7:function(){return[P.h,P.h]},
$iG:1,
$aG:function(){return[P.h,P.h]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aH.prototype={$iaH:1}
W.bW.prototype={}
W.dO.prototype={
a8:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=W.m_("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ah(t).ai(0,new W.ah(u))
return t}}
W.i1.prototype={
a8:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a8(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaz(u)
s.toString
u=new W.ah(s)
r=u.gaz(u)
t.toString
r.toString
new W.ah(t).ai(0,new W.ah(r))
return t}}
W.i2.prototype={
a8:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a8(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaz(u)
t.toString
s.toString
new W.ah(t).ai(0,new W.ah(s))
return t}}
W.cG.prototype={$icG:1}
W.b_.prototype={$ib_:1}
W.aI.prototype={$iaI:1}
W.i4.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aI]},
$aw:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aC:function(){return[W.aI]}}
W.i5.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$ij:1,
$aj:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aC:function(){return[W.b_]}}
W.i9.prototype={
gm:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.aJ.prototype={$iaJ:1}
W.id.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b1]},
$aw:function(){return[W.b1]},
$ij:1,
$aj:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aC:function(){return[W.b1]}}
W.ie.prototype={
gm:function(a){return a.length}}
W.bB.prototype={}
W.iv.prototype={
i:function(a){return String(a)}}
W.iJ.prototype={
gm:function(a){return a.length}}
W.b5.prototype={
ghx:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.au("deltaY is not supported"))},
ghw:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.au("deltaX is not supported"))},
$ib5:1}
W.cN.prototype={
fP:function(a,b){return a.requestAnimationFrame(H.c5(H.m(b,{func:1,ret:-1,args:[P.a5]}),1))},
ey:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cO.prototype={$icO:1}
W.iT.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.R]},
$aw:function(){return[W.R]},
$ij:1,
$aj:function(){return[W.R]},
$ib:1,
$ab:function(){return[W.R]},
$aC:function(){return[W.R]}}
W.e7.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iak)return!1
return a.left===u.gbd(b)&&a.top===u.gbf(b)&&a.width===u.gay(b)&&a.height===u.gas(b)},
gG:function(a){return W.l8(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gas:function(a){return a.height},
gay:function(a){return a.width}}
W.j6.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aO]},
$aw:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aC:function(){return[W.aO]}}
W.eq.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.jj.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aZ]},
$aw:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aC:function(){return[W.aZ]}}
W.jk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aH]},
$aw:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aC:function(){return[W.aH]}}
W.iR.prototype={
J:function(a,b){var u,t,s,r,q
H.m(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga1(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga1:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.k(r[t],"$icO")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa7:function(){return[P.h,P.h]},
$aG:function(){return[P.h,P.h]}}
W.iU.prototype={
j:function(a,b){return this.a.getAttribute(H.P(b))},
gm:function(a){return this.ga1(this).length}}
W.iV.prototype={}
W.k7.prototype={}
W.iW.prototype={}
W.iX.prototype={
$1:function(a){return this.a.$1(H.k(a,"$il"))},
$S:36}
W.bC.prototype={
e5:function(a){var u
if($.ef.a===0){for(u=0;u<262;++u)$.ef.n(0,C.L[u],W.nk())
for(u=0;u<12;++u)$.ef.n(0,C.m[u],W.nl())}},
aI:function(a){return $.lK().O(0,W.cl(a))},
aj:function(a,b,c){var u=$.ef.j(0,H.f(W.cl(a))+"::"+b)
if(u==null)u=$.ef.j(0,"*::"+b)
if(u==null)return!1
return H.kd(u.$4(a,b,c,this))},
$ias:1}
W.C.prototype={
gP:function(a){return new W.dj(a,this.gm(a),[H.d1(this,a,"C",0)])}}
W.dC.prototype={
aI:function(a){return C.a.cZ(this.a,new W.hp(a))},
aj:function(a,b,c){return C.a.cZ(this.a,new W.ho(a,b,c))},
$ias:1}
W.hp.prototype={
$1:function(a){return H.k(a,"$ias").aI(this.a)},
$S:18}
W.ho.prototype={
$1:function(a){return H.k(a,"$ias").aj(this.a,this.b,this.c)},
$S:18}
W.ey.prototype={
ec:function(a,b,c,d){var u,t,s
this.a.ai(0,c)
u=b.bi(0,new W.jh())
t=b.bi(0,new W.ji())
this.b.ai(0,u)
s=this.c
s.ai(0,C.N)
s.ai(0,t)},
aI:function(a){return this.a.O(0,W.cl(a))},
aj:function(a,b,c){var u=this,t=W.cl(a),s=u.c
if(s.O(0,H.f(t)+"::"+b))return u.d.hh(c)
else if(s.O(0,"*::"+b))return u.d.hh(c)
else{s=u.b
if(s.O(0,H.f(t)+"::"+b))return!0
else if(s.O(0,"*::"+b))return!0
else if(s.O(0,H.f(t)+"::*"))return!0
else if(s.O(0,"*::*"))return!0}return!1},
$ias:1}
W.jh.prototype={
$1:function(a){return!C.a.O(C.m,H.P(a))},
$S:14}
W.ji.prototype={
$1:function(a){return C.a.O(C.m,H.P(a))},
$S:14}
W.jm.prototype={
aj:function(a,b,c){if(this.dY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.O(0,b)
return!1}}
W.jn.prototype={
$1:function(a){return"TEMPLATE::"+H.f(H.P(a))},
$S:42}
W.jl.prototype={
aI:function(a){var u=J.V(a)
if(!!u.$icB)return!1
u=!!u.$io
if(u&&W.cl(a)==="foreignObject")return!1
if(u)return!0
return!1},
aj:function(a,b,c){if(b==="is"||C.c.bk(b,"on"))return!1
return this.aI(a)},
$ias:1}
W.dj.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scI(J.f0(u.a,t))
u.c=t
return!0}u.scI(null)
u.c=s
return!1},
gE:function(a){return this.d},
scI:function(a){this.d=H.H(a,H.z(this,0))},
$iaP:1}
W.as.prototype={}
W.jf.prototype={$io1:1}
W.eP.prototype={
cf:function(a){new W.jr(this).$2(a,null)},
aS:function(a,b){if(b==null)J.ks(a)
else b.removeChild(a)},
fU:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lO(a)
n=o.a.getAttribute("is")
H.k(a,"$iQ")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.B(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.av(r)}t="element unprintable"
try{t=J.ao(a)}catch(r){H.av(r)}try{s=W.cl(a)
this.fT(H.k(a,"$iQ"),b,p,t,s,H.k(o,"$iG"),H.P(n))}catch(r){if(H.av(r) instanceof P.aC)throw r
else{this.aS(a,b)
window
q="Removing corrupted element "+H.f(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aS(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aI(a)){o.aS(a,b)
window
u="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aj(a,"is",g)){o.aS(a,b)
window
u="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga1(f)
t=H.c(u.slice(0),[H.z(u,0)])
for(s=f.ga1(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.lQ(r)
H.P(r)
if(!q.aj(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.f(e)+" "+r+'="'+H.f(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icG)o.cf(a.content)},
$inL:1}
W.jr.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fU(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aS(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.av(s)
r=H.k(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iE")}},
$S:29}
W.e6.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eE.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
P.eO.prototype={$ibv:1,
gd4:function(a){return this.a}}
P.jA.prototype={
$2:function(a,b){this.a[a]=b},
$S:15}
P.fz.prototype={
gbv:function(){var u=this.b,t=H.an(u,"w",0),s=W.Q
return new H.fW(new H.cM(u,H.m(new P.fA(),{func:1,ret:P.L,args:[t]}),[t]),H.m(new P.fB(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bK(this.gbv().a)},
j:function(a,b){var u=this.gbv()
return u.b.$1(J.jP(u.a,b))},
gP:function(a){var u=P.kF(this.gbv(),!1,W.Q)
return new J.ap(u,u.length,[H.z(u,0)])},
$aw:function(){return[W.Q]},
$aj:function(){return[W.Q]},
$ab:function(){return[W.Q]}}
P.fA.prototype={
$1:function(a){return!!J.V(H.k(a,"$iE")).$iQ},
$S:17}
P.fB.prototype={
$1:function(a){return H.p(H.k(a,"$iE"),"$iQ")},
$S:30}
P.ja.prototype={
gc9:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.z(this,0))},
gd0:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.z(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$iak){t=p.a
if(t==u.gbd(b)){s=p.b
if(s==u.gbf(b)){r=p.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.F(r)
q=H.z(p,0)
if(H.H(t+r,q)===u.gc9(b)){t=p.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.F(t)
u=H.H(s+t,q)===u.gd0(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.bI(s),q=t.b,p=J.bI(q),o=t.c
if(typeof s!=="number")return s.A()
if(typeof o!=="number")return H.F(o)
u=H.z(t,0)
o=C.e.gG(H.H(s+o,u))
s=t.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.F(s)
u=C.e.gG(H.H(q+s,u))
return P.mB(P.j8(P.j8(P.j8(P.j8(0,r),p),o),u))}}
P.ak.prototype={
gbd:function(a){return this.a},
gbf:function(a){return this.b},
gay:function(a){return this.c},
gas:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.fP.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b9]},
$ij:1,
$aj:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aC:function(){return[P.b9]}}
P.bc.prototype={$ibc:1}
P.hr.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bc]},
$ij:1,
$aj:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aC:function(){return[P.bc]}}
P.hy.prototype={
gm:function(a){return a.length}}
P.cB.prototype={$icB:1}
P.i0.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aC:function(){return[P.h]}}
P.o.prototype={
gd1:function(a){return new P.fz(a,new W.ah(a))},
a8:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.as])
C.a.h(p,W.l7(null))
C.a.h(p,W.l9())
C.a.h(p,new W.jl())
c=new W.eP(new W.dC(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.o).hu(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ah(s)
q=p.gaz(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$io:1}
P.be.prototype={$ibe:1}
P.ig.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.be]},
$ij:1,
$aj:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aC:function(){return[P.be]}}
P.ei.prototype={}
P.ej.prototype={}
P.et.prototype={}
P.eu.prototype={}
P.eF.prototype={}
P.eG.prototype={}
P.eM.prototype={}
P.eN.prototype={}
P.f5.prototype={
gm:function(a){return a.length}}
P.f6.prototype={
j:function(a,b){return P.bg(a.get(H.P(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bg(t.value[1]))}},
ga1:function(a){var u=H.c([],[P.h])
this.J(a,new P.f7(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
P.f7.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.f8.prototype={
gm:function(a){return a.length}}
P.bL.prototype={}
P.hs.prototype={
gm:function(a){return a.length}}
P.e5.prototype={}
P.d7.prototype={$id7:1}
P.dH.prototype={$idH:1}
P.bV.prototype={
ie:function(a,b,c,d,e,f,g){var u,t=J.V(g)
if(!!t.$ibv)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.nc(g))
return}if(!!t.$ico)t=!0
else t=!1
if(t){this.h4(a,b,c,d,e,f,g)
return}throw H.i(P.lR("Incorrect number or type of arguments"))},
h4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
X:function(a,b,c){return a.uniform1f(b,c)},
bh:function(a,b,c){return a.uniform1i(b,c)},
T:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dJ:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibV:1}
P.dJ.prototype={$idJ:1}
P.dQ.prototype={$idQ:1}
P.dW.prototype={$idW:1}
P.hT.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return P.bg(a.item(b))},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.G,,,]]},
$ij:1,
$aj:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aC:function(){return[[P.G,,,]]}}
P.eB.prototype={}
P.eC.prototype={}
O.a1.prototype={
bm:function(a){var u=this
u.seJ(H.c([],[a]))
u.scM(null)
u.scJ(null)
u.scN(null)},
cg:function(a,b,c){var u=this,t=H.an(u,"a1",0)
H.m(b,{func:1,ret:P.L,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.r,[P.j,t]]}
H.m(a,t)
H.m(c,t)
u.scM(b)
u.scJ(a)
u.scN(c)},
b1:function(a,b){return this.cg(a,null,b)},
ft:function(a){var u
H.n(a,"$ij",[H.an(this,"a1",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
e4:function(a,b){var u
H.n(b,"$ij",[H.an(this,"a1",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.ap(u,u.length,[H.z(u,0)])},
B:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.an(s,"a1",0)
H.H(b,r)
r=[r]
if(H.B(s.ft(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.e4(t,H.c([b],r))}},
seJ:function(a){this.a=H.n(a,"$ib",[H.an(this,"a1",0)],"$ab")},
scM:function(a){this.b=H.m(a,{func:1,ret:P.L,args:[[P.j,H.an(this,"a1",0)]]})},
scJ:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.r,[P.j,H.an(this,"a1",0)]]})},
scN:function(a){H.m(a,{func:1,ret:-1,args:[P.r,[P.j,H.an(this,"a1",0)]]})},
$ij:1}
O.cs.prototype={
gm:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.U():u},
aA:function(){var u=this.b
if(u!=null)u.C(null)},
gW:function(a){var u=this.a
if(u.length>0)return C.a.gbc(u)
else return V.dy()},
dA:function(a){var u=this.a
if(a==null)C.a.h(u,V.dy())
else C.a.h(u,a)
this.aA()},
c8:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}},
sbx:function(a){this.a=H.n(a,"$ib",[V.ag],"$ab")}}
E.f9.prototype={}
E.ai.prototype={
sci:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().S(0,s.gdu())
u=s.c
if(u!=null)u.gq().h(0,s.gdu())
t=new D.K("shape",r,s.c,[F.dK])
t.b=!0
s.au(t)}},
saZ:function(a){var u,t,s=this
if(!J.a_(s.r,a)){u=s.r
if(u!=null)u.gq().S(0,s.gds())
if(a!=null)a.gq().h(0,s.gds())
s.r=a
t=new D.K("mover",u,a,[U.a9])
t.b=!0
s.au(t)}},
ak:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aN(0,b,s):null
if(!J.a_(q,s.x)){u=s.x
s.x=q
t=new D.K("matrix",u,q,[V.ag])
t.b=!0
s.au(t)}for(r=s.y.a,r=new J.ap(r,r.length,[H.z(r,0)]);r.u();)r.d.ak(0,b)},
aM:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gW(s))
else C.a.h(s.a,r.t(0,s.gW(s)))
s.aA()
a.dB(t.f)
s=a.dy
u=(s&&C.a).gbc(s)
if(u!=null&&t.d!=null)u.i8(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.z(s,0)]);s.u();)s.d.aM(a)
a.dz()
a.dx.c8()},
au:function(a){var u=this.z
if(u!=null)u.C(a)},
a2:function(){return this.au(null)},
dv:function(a){H.k(a,"$ix")
this.e=null
this.au(a)},
hX:function(){return this.dv(null)},
dt:function(a){this.au(H.k(a,"$ix"))},
hW:function(){return this.dt(null)},
dr:function(a){this.au(H.k(a,"$ix"))},
hT:function(){return this.dr(null)},
hS:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ij",[E.ai],"$aj")
for(u=b.length,t=this.gdq(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bN()
o.sac(null)
o.saG(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
hV:function(a,b){var u,t
H.n(b,"$ij",[E.ai],"$aj")
for(u=b.gP(b),t=this.gdq();u.u();)u.gE(u).gq().S(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seo:function(a,b){this.y=H.n(b,"$ia1",[E.ai],"$aa1")},
$icu:1}
E.hB.prototype={
e0:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aw(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cs()
t=[V.ag]
u.sbx(H.c([],t))
u.b=null
u.gq().h(0,new E.hC(s))
s.cy=u
u=new O.cs()
u.sbx(H.c([],t))
u.b=null
u.gq().h(0,new E.hD(s))
s.db=u
u=new O.cs()
u.sbx(H.c([],t))
u.b=null
u.gq().h(0,new E.hE(s))
s.dx=u
s.sh3(H.c([],[O.bX]))
u=s.dy;(u&&C.a).h(u,null)
s.sfZ(new H.a0([P.h,A.cC]))},
gi5:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gW(s)
u=t.db
u=t.z=s.t(0,u.gW(u))
s=u}return s},
dB:function(a){var u=this.dy,t=a==null?(u&&C.a).gbc(u):a;(u&&C.a).h(u,t)},
dz:function(){var u=this.dy
if(u.length>1)u.pop()},
sh3:function(a){this.dy=H.n(a,"$ib",[O.bX],"$ab")},
sfZ:function(a){this.fr=H.n(a,"$iG",[P.h,A.cC],"$aG")}}
E.hC.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:7}
E.hD.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:7}
E.hE.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:7}
E.dS.prototype={
cp:function(a){H.k(a,"$ix")
this.dC()},
co:function(){return this.cp(null)},
ghI:function(){var u,t=this,s=Date.now(),r=C.e.a0(P.ky(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aw(s,!1)
return u/r},
cQ:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.F(r)
u=C.d.c0(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.d.c0(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kZ(C.j,s.gi9())}},
dC:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.i8(this),{func:1,ret:-1,args:[P.a5]})
C.w.ey(u)
C.w.fP(u,W.lg(t,P.a5))}},
i7:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cQ()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aw(r,!1)
s.y=P.ky(r-s.r.a).a*0.000001
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
if(s!=null)s.C(null)}catch(q){u=H.av(q)
t=H.c8(q)
P.ko("Error: "+H.f(u))
P.ko("Stack: "+H.f(t))
throw H.i(u)}}}
E.i8.prototype={
$1:function(a){var u
H.lp(a)
u=this.a
if(u.ch){u.ch=!1
u.i7()}},
$S:34}
Z.e3.prototype={$inF:1}
Z.d8.prototype={
bN:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.av(s)
t=P.y('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.f(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.iK.prototype={$inG:1}
Z.d9.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bN:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bN(a)},
im:function(a){var u,t,s
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
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ao(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
seF:function(a){this.b=H.n(a,"$ib",[Z.bw],"$ab")},
$inO:1}
Z.bw.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.cA(this.c))+"'")+"]"}}
Z.bf.prototype={
gcj:function(a){var u=this.a,t=(u&$.bk().a)!==0?3:0
if((u&$.bj().a)!==0)t+=3
if((u&$.bi().a)!==0)t+=3
if((u&$.bH().a)!==0)t+=2
if((u&$.bl().a)!==0)t+=3
if((u&$.d2().a)!==0)t+=3
if((u&$.d3().a)!==0)t+=4
if((u&$.cb().a)!==0)++t
return(u&$.bh().a)!==0?t+4:t},
hj:function(a){var u,t=$.bk(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0)if(u===a)return t
return $.lJ()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.bk().a)!==0)C.a.h(u,"Pos")
if((t&$.bj().a)!==0)C.a.h(u,"Norm")
if((t&$.bi().a)!==0)C.a.h(u,"Binm")
if((t&$.bH().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bl().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d2().a)!==0)C.a.h(u,"Clr3")
if((t&$.d3().a)!==0)C.a.h(u,"Clr4")
if((t&$.cb().a)!==0)C.a.h(u,"Weight")
if((t&$.bh().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fc.prototype={}
D.bN.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.m(b,u)
if(this.a==null)this.sac(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.O(u,b)
if(u===!0){u=s.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.O(u,b)
if(u===!0){u=s.b
t=(u&&C.a).S(u,b)||t}return t},
C:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.J(P.kF(u,!0,{func:1,ret:-1,args:[D.x]}),new D.fv(q))
u=r.b
if(u!=null){r.saG(H.c([],[{func:1,ret:-1,args:[D.x]}]))
C.a.J(u,new D.fw(q))}return!0},
hD:function(){return this.C(null)},
aw:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}},
sac:function(a){this.a=H.n(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saG:function(a){this.b=H.n(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fv.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.fw.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.x.prototype={}
D.bQ.prototype={}
D.bR.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.da.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.da))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.dp.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.fO.prototype={
i1:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
hY:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
sfL:function(a){this.d=H.n(a,"$ikU",[P.r],"$akU")}}
X.du.prototype={}
X.fT.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.ad(o.a+n*m,o.b+u*t)
t=q.a.gaK()
r=new X.bb(a,V.bA(),q.x,t,s)
r.b=!0
q.z=new P.aw(p,!1)
q.x=s
return r},
c7:function(a,b){this.r=a.a
return!1},
b0:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dP()
if(typeof u!=="number")return u.al()
this.r=(u&~t)>>>0
return!1},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aQ(a,b))
return!0},
i2:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaK()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.ct(new V.S(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
fh:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.du(c,r.a.gaK(),b)
s.b=!0
t.C(s)
r.y=new P.aw(u,!1)
r.x=V.bA()}}
X.ar.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ar))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.B(this.b)?"Alt+":""
return u+(H.B(this.c)?"Shift+":"")}}
X.bb.prototype={}
X.hh.prototype={
bt:function(a,b,c){var u=this,t=new P.aw(Date.now(),!1),s=u.a.gaK(),r=new X.bb(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c7:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bt(a,b,!0))
return!0},
b0:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dP()
if(typeof t!=="number")return t.al()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bt(a,b,!0))
return!0},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bt(a,b,!1))
return!0},
i3:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaK()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.ct(new V.S(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0},
gd5:function(){var u=this.b
return u==null?this.b=D.U():u},
gcc:function(){var u=this.c
return u==null?this.c=D.U():u},
gdn:function(){var u=this.d
return u==null?this.d=D.U():u}}
X.ct.prototype={}
X.hx.prototype={}
X.dU.prototype={}
X.ic.prototype={
aQ:function(a,b){var u,t,s,r,q=this
H.n(a,"$ib",[V.ad],"$ab")
u=new P.aw(Date.now(),!1)
t=a.length>0?a[0]:V.bA()
s=q.a.gaK()
r=new X.dU(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
i0:function(a){var u
H.n(a,"$ib",[V.ad],"$ab")
u=this.b
if(u==null)return!1
u.C(this.aQ(a,!0))
return!0},
hZ:function(a){var u
H.n(a,"$ib",[V.ad],"$ab")
u=this.c
if(u==null)return!1
u.C(this.aQ(a,!0))
return!0},
i_:function(a){var u
H.n(a,"$ib",[V.ad],"$ab")
u=this.d
if(u==null)return!1
u.C(this.aQ(a,!1))
return!0}}
X.dZ.prototype={
gaK:function(){var u=this.a,t=C.h.gd2(u).c
t.toString
u=C.h.gd2(u).d
u.toString
return V.kS(0,0,t,u)},
cE:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dp(u,new X.ar(t,a.altKey,a.shiftKey))},
aH:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
bM:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
ar:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.ad(s-q,r-u)},
aR:function(a){return new V.S(a.movementX,a.movementY)},
bI:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.ad])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.d.ad(r.pageX)
C.d.ad(r.pageY)
p=o.left
C.d.ad(r.pageX)
C.a.h(n,new V.ad(q-p,C.d.ad(r.pageY)-o.top))}return n},
ap:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.da(u,new X.ar(t,a.altKey,a.shiftKey))},
by:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fb:function(a){this.f=!0},
f_:function(a){this.f=!1},
f5:function(a){H.k(a,"$ia8")
if(H.B(this.f)&&this.by(a))a.preventDefault()},
ff:function(a){var u
H.k(a,"$iaR")
if(!H.B(this.f))return
u=this.cE(a)
this.b.i1(u)},
fd:function(a){var u
H.k(a,"$iaR")
if(!H.B(this.f))return
u=this.cE(a)
this.b.hY(u)},
fj:function(a){var u,t,s,r,q=this
H.k(a,"$ia8")
u=q.a
u.focus()
q.f=!0
q.aH(a)
if(H.B(q.x)){t=q.ap(a)
s=q.aR(a)
if(q.d.c7(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ap(a)
r=q.ar(a)
if(q.c.c7(t,r))a.preventDefault()},
fn:function(a){var u,t,s,r=this
H.k(a,"$ia8")
r.aH(a)
u=r.ap(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ar(a)
if(r.c.b0(u,s))a.preventDefault()},
f9:function(a){var u,t,s,r=this
H.k(a,"$ia8")
if(!r.by(a)){r.aH(a)
u=r.ap(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ar(a)
if(r.c.b0(u,s))a.preventDefault()}},
fl:function(a){var u,t,s,r=this
H.k(a,"$ia8")
r.aH(a)
u=r.ap(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ar(a)
if(r.c.b_(u,s))a.preventDefault()},
f7:function(a){var u,t,s,r=this
H.k(a,"$ia8")
if(!r.by(a)){r.aH(a)
u=r.ap(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ar(a)
if(r.c.b_(u,s))a.preventDefault()}},
fp:function(a){var u,t,s=this
H.k(a,"$ib5")
s.aH(a)
u=new V.S((a&&C.v).ghw(a),C.v.ghx(a)).v(0,180)
if(H.B(s.x)){if(s.d.i2(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.ar(a)
if(s.c.i3(u,t))a.preventDefault()},
fs:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ap(s.y)
t=s.ar(s.y)
s.d.fh(u,t,r)}},
fH:function(a){var u,t=this
H.k(a,"$iaJ")
t.a.focus()
t.f=!0
t.bM(a)
u=t.bI(a)
if(t.e.i0(u))a.preventDefault()},
fD:function(a){var u
H.k(a,"$iaJ")
this.bM(a)
u=this.bI(a)
if(this.e.hZ(u))a.preventDefault()},
fF:function(a){var u
H.k(a,"$iaJ")
this.bM(a)
u=this.bI(a)
if(this.e.i_(u))a.preventDefault()},
sez:function(a){this.z=H.n(a,"$ib",[[P.cF,P.N]],"$ab")}}
D.br.prototype={
an:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.C(a)},
e7:function(){return this.an(null)},
$ia6:1,
$icu:1}
D.a6.prototype={$icu:1}
D.dq.prototype={
an:function(a){var u=this.x
if(u!=null)u.C(a)},
cL:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.C(a)},
fg:function(){return this.cL(null)},
fv:function(a){var u,t,s
H.n(a,"$ij",[D.a6],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.eq(s))return!1}return!0},
eU:function(a,b){var u,t,s,r,q,p,o,n=D.a6
H.n(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gcK(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.k(b[q],"$ia6")
if(p instanceof D.br)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bN()
o.sac(null)
o.saG(null)
o.c=null
o.d=0
p.r=o}H.m(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bQ([n])
n.b=!0
this.an(n)},
fB:function(a,b){var u,t,s,r=D.a6
H.n(b,"$ij",[r],"$aj")
for(u=b.gP(b),t=this.gcK();u.u();){s=u.gE(u)
C.a.S(this.e,s)
s.gq().S(0,t)}r=new D.bR([r])
r.b=!0
this.an(r)},
eq:function(a){var u=C.a.O(this.e,a)
return u},
sex:function(a){this.e=H.n(a,"$ib",[D.br],"$ab")},
sfI:function(a){this.f=H.n(a,"$ib",[D.dF],"$ab")},
sh1:function(a){this.r=H.n(a,"$ib",[D.dM],"$ab")},
$aj:function(){return[D.a6]},
$aa1:function(){return[D.a6]}}
D.dF.prototype={$ia6:1,$icu:1}
D.dM.prototype={$ia6:1,$icu:1}
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
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.bp.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bp))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.fu.prototype={}
V.dx.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.D])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dx))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.D],o=V.c7(H.c([q.a,q.d,q.r],p),3,0),n=V.c7(H.c([q.b,q.e,q.x],p),3,0),m=V.c7(H.c([q.c,q.f,q.y],p),3,0)
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
V.ag.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.D])
return t},
dl:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.M().a)return V.dy()
u=1/b1
t=-n
s=-a0
return V.aT((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aT(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bg:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.O(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cb:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.aE(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ag))return!1
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
i:function(a){return this.K()},
w:function(a){var u,t,s,r,q,p=this,o=[P.D],n=V.c7(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c7(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c7(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c7(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.w("")}}
V.ad.prototype={
H:function(a,b){return new V.ad(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.aE.prototype={
H:function(a,b){return new V.aE(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
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
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.dI.prototype={
ga4:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dI))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.S.prototype={
c2:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
u=this.b
if(typeof u!=="number")return u.t()
return new V.S(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.l2
return u==null?$.l2=new V.S(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.S(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=this.a
s=$.M()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.O.prototype={
c2:function(a){return Math.sqrt(this.F(this))},
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c3:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.O(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aW:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.O(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.O(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.M().a)return V.e2()
return new V.O(this.a/b,this.b/b,this.c/b)},
dm:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
U.fd.prototype={
bo:function(a){var u=V.nE(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.U():u},
M:function(a){var u=this.y
if(u!=null)u.C(a)},
scd:function(a,b){},
sc4:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.M().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bo(u)}s=new D.K("maximumLocation",s,t.b,[P.D])
s.b=!0
t.M(s)}},
sc6:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.M().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bo(u)}s=new D.K("minimumLocation",s,t.c,[P.D])
s.b=!0
t.M(s)}},
sa3:function(a,b){var u,t=this
b=t.bo(b)
u=t.d
if(!(Math.abs(u-b)<$.M().a)){t.d=b
u=new D.K("location",u,b,[P.D])
u.b=!0
t.M(u)}},
sc5:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.M().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.D])
r.b=!0
s.M(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.M().a)){u.f=a
t=new D.K("velocity",t,a,[P.D])
t.b=!0
u.M(t)}},
sbU:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.K("dampening",u,a,[P.D])
u.b=!0
this.M(u)}},
ak:function(a,b){var u,t,s,r=this,q=r.f,p=$.M().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa3(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.M().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.dc.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.U():u},
aN:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dc))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.cn.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.U():u},
M:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.C(a)},
a_:function(){return this.M(null)},
eS:function(a,b){var u,t,s,r,q,p,o,n=U.a9
H.n(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaF(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.m(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bQ([n])
n.b=!0
this.M(n)},
fz:function(a,b){var u,t,s=U.a9
H.n(b,"$ij",[s],"$aj")
for(u=b.gP(b),t=this.gaF();u.u();)u.gE(u).gq().S(0,t)
s=new D.bR([s])
s.b=!0
this.M(s)},
aN:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a5()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ap(r,r.length,[H.z(r,0)]),u=null;r.u();){q=r.d
if(q!=null){t=q.aN(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.dy():u
r=s.e
if(r!=null)r.aw(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cn))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.a_(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a9]},
$aa1:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.e_.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.U():u},
M:function(a){var u
H.k(a,"$ix")
u=this.cy
if(u!=null)u.C(a)},
a_:function(){return this.M(null)},
aT:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd5().h(0,u.gbz())
u.a.c.gdn().h(0,u.gbB())
u.a.c.gcc().h(0,u.gbD())
return!0},
bA:function(a){var u=this
H.k(a,"$ix")
if(!J.a_(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bC:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$ix"),"$ibb")
if(!H.B(n.y))return
if(H.B(n.x)){u=a.d.H(0,a.y)
u=new V.S(u.a,u.b)
u=u.F(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.B(n.d)){u=a.c
t=a.d.H(0,a.y)
u=new V.S(t.a,t.b).t(0,2).v(0,u.ga4())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.S(s.a,s.b).t(0,2).v(0,u.ga4())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
n.b.sR(0)
t=t.H(0,a.z)
n.Q=new V.S(t.a,t.b).t(0,2).v(0,u.ga4())}n.a_()},
bE:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.y))return
r.y=!1
if(H.B(r.x))return
u=r.Q
if(u.F(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sR(t*10*s)
r.a_()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a5()
if(q<p){r.ch=p
u=b.y
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aT(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia9:1}
U.e0.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.U():u},
M:function(a){var u
H.k(a,"$ix")
u=this.fx
if(u!=null)u.C(a)},
a_:function(){return this.M(null)},
aT:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd5().h(0,s.gbz())
s.a.c.gdn().h(0,s.gbB())
s.a.c.gcc().h(0,s.gbD())
u=s.a.d
t=u.f
u=t==null?u.f=D.U():t
u.h(0,s.geK())
u=s.a.d
t=u.d
u=t==null?u.d=D.U():t
u.h(0,s.geM())
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
ah:function(a){var u=a.a,t=a.b
if(H.B(this.f)){if(typeof u!=="number")return u.N()
u=-u}if(H.B(this.r)){if(typeof t!=="number")return t.N()
t=-t}return new V.S(u,t)},
bA:function(a){var u=this
a=H.p(H.k(a,"$ix"),"$ibb")
if(!J.a_(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bC:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$ix"),"$ibb")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.H(0,a.y)
u=new V.S(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.ah(new V.S(t.a,t.b).t(0,2).v(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ah(new V.S(s.a,s.b).t(0,2).v(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ah(new V.S(t.a,t.b).t(0,2).v(0,u.ga4()))}n.a_()},
bE:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.a_()}},
eL:function(a){var u=this
if(H.p(H.k(a,"$ix"),"$idu").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eN:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$ix"),"$ibb")
if(!J.a_(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ah(new V.S(s.a,s.b).t(0,2).v(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ah(new V.S(t.a,t.b).t(0,2).v(0,u.ga4()))
n.a_()},
hb:function(a){var u=this
H.k(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h9:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$ix"),"$idU")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.H(0,a.y)
u=new V.S(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.ah(new V.S(t.a,t.b).t(0,2).v(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ah(new V.S(s.a,s.b).t(0,2).v(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa3(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ah(new V.S(t.a,t.b).t(0,2).v(0,u.ga4()))}n.a_()},
h7:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.a_()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a5()
if(q<p){r.dy=p
u=b.y
r.c.ak(0,u)
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aT(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.t(0,V.aT(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia9:1}
U.e1.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.U():u},
M:function(a){var u=this.r
if(u!=null)u.C(a)},
aT:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.U():t
t=r.geP()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.U():s).h(0,t)
return!0},
eQ:function(a){var u,t,s,r,q=this
H.k(a,"$ix")
if(!J.a_(q.b,q.a.b.c))return
H.p(a,"$ict")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.D])
u.b=!0
q.M(u)}},
aN:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aT(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.dg.prototype={
ao:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.C(a)},
e9:function(){return this.ao(null)},
f1:function(a,b){var u,t,s,r,q,p,o,n=E.ai
H.n(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gag(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bN()
o.sac(null)
o.saG(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bQ([n])
n.b=!0
this.ao(n)},
f3:function(a,b){var u,t,s=E.ai
H.n(b,"$ij",[s],"$aj")
for(u=b.gP(b),t=this.gag();u.u();)u.gE(u).gq().S(0,t)
s=new D.bR([s])
s.b=!0
this.ao(s)},
sdF:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().S(0,t.gag())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gag())
s=new D.K("technique",u,t.d,[O.bX])
s.b=!0
t.ao(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.U():u},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dB(f.d)
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
o=C.d.ad(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.d.ad(p*r)
p=C.d.ad(q.c*s)
a.c=p
q=C.d.ad(q.d*r)
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
a.cy.dA(i)
t=$.kL
if(t==null){t=V.kN()
q=V.k5()
p=$.l3
t=V.kH(t,q,p==null?$.l3=new V.O(0,0,-1):p)
$.kL=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.t(0,h)}a.db.dA(h)
u=f.d
if(u!=null)u.ak(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.z(u,0)]);u.u();)u.d.ak(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.z(u,0)]);u.u();)u.d.aM(a)
f.b.toString
a.cy.c8()
a.db.c8()
f.c.toString
a.dz()},
se8:function(a,b){this.e=H.n(b,"$ia1",[E.ai],"$aa1")},
$inM:1}
A.d5.prototype={}
A.f4.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hE:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hy:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ac.prototype={
gae:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ac))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.fZ.prototype={
e_:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.bd("")
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
A.mV(c3,u)
A.mX(c3,u)
A.mW(c3,u)
A.mZ(c3,u)
A.n_(c3,u)
A.mY(c3,u)
A.n0(c3,u)
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
m=A.mU(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cF(n,35633)
b8.f=b8.cF(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.B(H.kd(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.A(P.y("Failed to link shader: "+H.f(l)))}b8.fW()
b8.fY()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.p(b8.y.D(0,"invViewMat"),"$iat")
if(t)b8.dy=H.p(b8.y.D(0,"objMat"),"$iat")
if(r)b8.fr=H.p(b8.y.D(0,"viewObjMat"),"$iat")
b8.fy=H.p(b8.y.D(0,"projViewObjMat"),"$iat")
if(c3.ry)b8.k1=H.p(b8.y.D(0,"txt2DMat"),"$icL")
if(c3.x1)b8.k2=H.p(b8.y.D(0,"txtCubeMat"),"$iat")
if(c3.x2)b8.k3=H.p(b8.y.D(0,"colorMat"),"$iat")
b8.sek(H.c([],[A.at]))
t=c3.y2
if(t>0){b8.k4=H.k(b8.y.D(0,"bendMatCount"),"$iay")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.A(P.y(c0+q+c1));(s&&C.a).h(s,H.p(j,"$iat"))}}t=c3.a
if(t.a)b8.r2=H.p(b8.y.D(0,"emissionClr"),"$iY")
if(t.c)b8.ry=H.p(b8.y.D(0,"emissionTxt"),"$iae")
t=c3.b
if(t.a)b8.x1=H.p(b8.y.D(0,"ambientClr"),"$iY")
if(t.c)b8.y1=H.p(b8.y.D(0,"ambientTxt"),"$iae")
t=c3.c
if(t.a)b8.y2=H.p(b8.y.D(0,"diffuseClr"),"$iY")
if(t.c)b8.ba=H.p(b8.y.D(0,"diffuseTxt"),"$iae")
t=c3.d
if(t.a)b8.d6=H.p(b8.y.D(0,"invDiffuseClr"),"$iY")
if(t.c)b8.d7=H.p(b8.y.D(0,"invDiffuseTxt"),"$iae")
t=c3.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.da=H.p(b8.y.D(0,"shininess"),"$iaa")
if(s)b8.d8=H.p(b8.y.D(0,"specularClr"),"$iY")
if(t.c)b8.d9=H.p(b8.y.D(0,"specularTxt"),"$iae")}if(c3.f.c)b8.dc=H.p(b8.y.D(0,"bumpTxt"),"$iae")
if(c3.cy){b8.dd=H.p(b8.y.D(0,"envSampler"),"$iae")
t=c3.r
if(t.a)b8.de=H.p(b8.y.D(0,"reflectClr"),"$iY")
if(t.c)b8.df=H.p(b8.y.D(0,"reflectTxt"),"$iae")
t=c3.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dg=H.p(b8.y.D(0,"refraction"),"$iaa")
if(s)b8.dh=H.p(b8.y.D(0,"refractClr"),"$iY")
if(t.c)b8.di=H.p(b8.y.D(0,"refractTxt"),"$iae")}}t=c3.y
if(t.a)b8.dj=H.p(b8.y.D(0,"alpha"),"$iaa")
if(t.c)b8.dk=H.p(b8.y.D(0,"alphaTxt"),"$iae")
t=P.r
s=[t,A.ay]
b8.sew(new H.a0(s))
b8.sea(new H.a0([t,[P.b,A.bY]]))
b8.sfJ(new H.a0(s))
b8.sfK(new H.a0([t,[P.b,A.bZ]]))
b8.sh0(new H.a0(s))
b8.seb(new H.a0([t,[P.b,A.c0]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.bY],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.f(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.al()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.A(P.y(c0+d+c1))
H.p(j,"$iY")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.A(P.y(c0+d+c1))
H.p(c,"$iY")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.A(P.y(c0+d+c1))
H.p(b,"$iY")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.A(P.y(c0+d+c1))
H.p(j,"$iY")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.A(P.y(c0+d+c1))
H.p(c,"$iY")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.A(P.y(c0+o+c1))
H.p(b,"$ic_")
a2=b}else a2=b9
C.a.h(e,new A.bY(a1,a0,a,j,c,a2))}b8.bW.n(0,g,e)
q=b8.bV
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.y(c0+o+c1))
q.n(0,g,H.k(j,"$iay"))}for(t=c3.Q,s=t.length,r=[A.bZ],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.f(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.A(P.y(c0+o+c1))
H.p(j,"$iY")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.A(P.y(c0+o+c1))
H.p(c,"$iY")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.A(P.y(c0+o+c1))
H.p(b,"$iY")
if(typeof g!=="number")return g.al()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.A(P.y(c0+o+c1))
H.p(a3,"$icL")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.y(c0+o+c1))
H.p(a3,"$iae")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.y(c0+o+c1))
H.p(a3,"$iae")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.A(P.y(c0+o+c1))
H.p(a5,"$icK")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.A(P.y(c0+o+c1))
H.p(a3,"$iaa")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.A(P.y(c0+o+c1))
H.p(a5,"$iaa")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.A(P.y(c0+o+c1))
H.p(a8,"$iaa")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.bZ(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bY.n(0,g,e)
q=b8.bX
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.y(c0+o+c1))
q.n(0,g,H.k(j,"$iay"))}for(t=c3.ch,s=t.length,r=[A.c0],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.f(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.A(P.y(c0+o+c1))
H.p(j,"$iY")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.A(P.y(c0+o+c1))
H.p(c,"$iY")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.A(P.y(c0+o+c1))
H.p(b,"$iY")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.A(P.y(c0+o+c1))
H.p(a3,"$iY")
if(typeof g!=="number")return g.al()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.A(P.y(c0+o+c1))
H.p(a5,"$iY")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.A(P.y(c0+o+c1))
H.p(a8,"$iY")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.A(P.y(c0+o+c1))
H.p(b2,"$iaa")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.A(P.y(c0+o+c1))
H.p(b3,"$iaa")
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
if(a5==null)H.A(P.y(c0+d+c1))
H.p(a5,"$icK")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.A(P.y(c0+d+c1))
H.p(a5,"$iaa")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.A(P.y(c0+d+c1))
H.p(a8,"$iaa")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.A(P.y(c0+d+c1))
H.p(a5,"$iaa")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.A(P.y(c0+d+c1))
H.p(a8,"$iaa")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.A(P.y(c0+d+c1))
H.p(b2,"$iaa")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.A(P.y(c0+d+c1))
H.p(a5,"$ic_")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.A(P.y(c0+o+c1))
H.p(a5,"$ic_")
a6=a5}else a6=b9
C.a.h(e,new A.c0(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c_.n(0,g,e)
q=b8.bZ
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.y(c0+o+c1))
q.n(0,g,H.k(j,"$iay"))}}},
a7:function(a,b){if(b!=null&&b.d>=6)a.dR(b)},
sek:function(a){this.r1=H.n(a,"$ib",[A.at],"$ab")},
sew:function(a){this.bV=H.n(a,"$iG",[P.r,A.ay],"$aG")},
sea:function(a){this.bW=H.n(a,"$iG",[P.r,[P.b,A.bY]],"$aG")},
sfJ:function(a){this.bX=H.n(a,"$iG",[P.r,A.ay],"$aG")},
sfK:function(a){this.bY=H.n(a,"$iG",[P.r,[P.b,A.bZ]],"$aG")},
sh0:function(a){this.bZ=H.n(a,"$iG",[P.r,A.ay],"$aG")},
seb:function(a){this.c_=H.n(a,"$iG",[P.r,[P.b,A.c0]],"$aG")}}
A.aD.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.aF.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.aG.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.h1.prototype={
i:function(a){return this.aX}}
A.bY.prototype={}
A.bZ.prototype={}
A.c0.prototype={}
A.cC.prototype={
e2:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cF:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.kd(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.y("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
fW:function(){var u,t,s,r=this,q=H.c([],[A.d5]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d5(p,t.name,s))}r.x=new A.f4(q)},
fY:function(){var u,t,s,r=this,q=H.c([],[A.dV]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hv(t.type,t.size,t.name,s))}r.y=new A.iq(q)},
aD:function(a,b,c){var u=this.a
if(a===1)return new A.ay(u,b,c)
else return A.k4(u,this.r,b,a,c)},
es:function(a,b,c){var u=this.a
if(a===1)return new A.c_(u,b,c)
else return A.k4(u,this.r,b,a,c)},
eu:function(a,b,c){var u=this.a
if(a===1)return new A.ae(u,b,c)
else return A.k4(u,this.r,b,a,c)},
b8:function(a,b){return new P.ec(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hv:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aD(b,c,d)
case 5121:return u.aD(b,c,d)
case 5122:return u.aD(b,c,d)
case 5123:return u.aD(b,c,d)
case 5124:return u.aD(b,c,d)
case 5125:return u.aD(b,c,d)
case 5126:return new A.aa(u.a,c,d)
case 35664:return new A.il(u.a,c,d)
case 35665:return new A.Y(u.a,c,d)
case 35666:return new A.cK(u.a,c,d)
case 35667:return new A.im(u.a,c,d)
case 35668:return new A.io(u.a,c,d)
case 35669:return new A.ip(u.a,c,d)
case 35674:return new A.ir(u.a,c,d)
case 35675:return new A.cL(u.a,c,d)
case 35676:return new A.at(u.a,c,d)
case 35678:return u.es(b,c,d)
case 35680:return u.eu(b,c,d)
case 35670:throw H.i(u.b8("BOOL",c))
case 35671:throw H.i(u.b8("BOOL_VEC2",c))
case 35672:throw H.i(u.b8("BOOL_VEC3",c))
case 35673:throw H.i(u.b8("BOOL_VEC4",c))
default:throw H.i(P.y("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.dV.prototype={}
A.iq.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.y("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ay.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.im.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.io.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)},
shd:function(a){H.n(a,"$ib",[P.r],"$ab")}}
A.aa.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.il.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.Y.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.cK.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.cL.prototype={
af:function(a){var u=new Float32Array(H.cZ(H.n(a,"$ib",[P.D],"$ab")))
C.b.dK(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.at.prototype={
af:function(a){var u=new Float32Array(H.cZ(H.n(a,"$ib",[P.D],"$ab")))
C.b.dL(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.c_.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.ae.prototype={
dR:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.jt.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c3(s.b,b).c3(s.d.c3(s.c,b),c)
s=new V.aE(r.a,r.b,r.c)
if(!J.a_(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a2()}a.sig(r.v(0,Math.sqrt(r.F(r))))
s=1-b
u=1-c
u=new V.dG(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a_(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a2()}},
$S:35}
F.a3.prototype={
ej:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e2()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dm())return
return s.v(0,Math.sqrt(s.F(s)))},
en:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.O(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.F(r)))
r=t.H(0,q)
r=new V.O(r.a,r.b,r.c)
r=s.aW(r.v(0,Math.sqrt(r.F(r))))
return r.v(0,Math.sqrt(r.F(r)))},
bR:function(){var u,t=this
if(t.d!=null)return!0
u=t.ej()
if(u==null){u=t.en()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
ei:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e2()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dm())return
return s.v(0,Math.sqrt(s.F(s)))},
em:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.M().a){l=d.H(0,g)
l=new V.O(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.F(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.H(0,g)
l=new V.aE(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).H(0,j)
l=new V.O(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.F(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.F(l)))
l=o.aW(q)
l=l.v(0,Math.sqrt(l.F(l))).aW(o)
q=l.v(0,Math.sqrt(l.F(l)))}return q},
bP:function(){var u,t=this
if(t.e!=null)return!0
u=t.ei()
if(u==null){u=t.em()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.aa(J.ao(s.e),0)+", "+C.c.aa(J.ao(t.b.e),0)+", "+C.c.aa(J.ao(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.w("")}}
F.ba.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.aa(J.ao(u.e),0)+", "+C.c.aa(J.ao(this.b.e),0)},
K:function(){return this.w("")}}
F.bz.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.aa(J.ao(u.e),0)},
K:function(){return this.w("")}}
F.dK.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.U():u},
hQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.V()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.ht())}h.a.V()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bz()
if(n.a==null)H.A(P.y("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.C(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.V()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.ba()
o=l.a
if(o==null)H.A(P.y("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.A(P.y("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.C(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.V()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.di(l,k,i)}g=h.e
if(g!=null)g.aw(0)},
aJ:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aJ()||!1
if(!t.a.aJ())u=!1
s=t.e
if(s!=null)s.aw(0)
return u},
hp:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bk()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bj().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.d2().a)!==0)++s
if((t&$.d3().a)!==0)++s
if((t&$.cb().a)!==0)++s
if((t&$.bh().a)!==0)++s
r=a3.gcj(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.D
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d8])
for(n=0,m=0;m<s;++m){l=a3.hj(m)
k=l.gcj(l)
C.a.n(o,m,new Z.d8(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].hO(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.n(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cZ(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d9(new Z.e3(a0,f),o,a3)
e.seF(H.c([],[Z.bw]))
if(a.b.b.length!==0){t=P.r
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.V()
C.a.h(d,c.e)}b=Z.k6(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bw(0,d.length,b))}if(a.c.b.length!==0){t=P.r
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.V()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.V()
C.a.h(d,c.e)}b=Z.k6(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bw(1,d.length,b))}if(a.d.b.length!==0){t=P.r
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.V()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.V()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.V()
C.a.h(d,c.e)}b=Z.k6(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bw(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.w(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.w(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.w(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.w(t))}return C.a.l(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.C(null)},
$inN:1}
F.hK.prototype={
hg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ib",[F.b4],"$ab")
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
C.a.h(u,F.di(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.di(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.di(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.di(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
aJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bR())s=!1
return s},
bQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bP())s=!1
return s},
i:function(a){return this.K()},
w:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(a))
return C.a.l(r,"\n")},
K:function(){return this.w("")},
seA:function(a){this.b=H.n(a,"$ib",[F.a3],"$ab")}}
F.hL.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
w:function(a){var u,t,s=H.c([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].w(a+(""+u+". ")))}return C.a.l(s,"\n")},
K:function(){return this.w("")},
seG:function(a){this.b=H.n(a,"$ib",[F.ba],"$ab")}}
F.hM.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
w:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(a))
return C.a.l(r,"\n")},
K:function(){return this.w("")},
sbH:function(a){this.b=H.n(a,"$ib",[F.bz],"$ab")}}
F.b4.prototype={
bT:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.l5(u.cx,r,o,t,s,q,p,a,n)},
ht:function(){return this.bT(null)},
sig:function(a){var u
if(!J.a_(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
hO:function(a){var u,t,s=this
if(a.p(0,$.bk())){u=s.f
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bj())){u=s.r
t=[P.D]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bi())){u=s.x
t=[P.D]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bH())){u=s.y
t=[P.D]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bl())){u=s.z
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d2())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d3())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.cb()))return H.c([s.ch],[P.D])
else if(a.p(0,$.bh())){u=s.cx
t=[P.D]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.D])},
bR:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e2()
t.d.J(0,new F.iI(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
bP:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e2()
t.d.J(0,new F.iH(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
C.a.h(q,C.c.aa(J.ao(s.e),0))
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
C.a.h(q,V.T(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
K:function(){return this.w("")}}
F.iI.prototype={
$1:function(a){var u,t
H.k(a,"$ia3")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:8}
F.iH.prototype={
$1:function(a){var u,t
H.k(a,"$ia3")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:8}
F.iB.prototype={
V:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.y("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a2()
return!0},
cX:function(a,b){var u=null,t=F.l5(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gm:function(a){return this.c.length},
aJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bR()
return!0},
bQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bP()
return!0},
hq:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a_(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.K()},
w:function(a){var u,t,s,r
this.V()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
K:function(){return this.w("")},
she:function(a){this.c=H.n(a,"$ib",[F.b4],"$ab")}}
F.iC.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a3]})
C.a.J(u.b,b)
C.a.J(u.c,new F.iD(u,b))
C.a.J(u.d,new F.iE(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
return C.a.l(r,"\n")},
seB:function(a){this.b=H.n(a,"$ib",[F.a3],"$ab")},
seC:function(a){this.c=H.n(a,"$ib",[F.a3],"$ab")},
seD:function(a){this.d=H.n(a,"$ib",[F.a3],"$ab")}}
F.iD.prototype={
$1:function(a){H.k(a,"$ia3")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:8}
F.iE.prototype={
$1:function(a){var u
H.k(a,"$ia3")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:8}
F.iF.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
return C.a.l(r,"\n")},
seH:function(a){this.b=H.n(a,"$ib",[F.ba],"$ab")},
seI:function(a){this.c=H.n(a,"$ib",[F.ba],"$ab")}}
F.iG.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
return C.a.l(r,"\n")},
sbH:function(a){this.b=H.n(a,"$ib",[F.bz],"$ab")}}
O.dw.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.U():u},
U:function(a){var u
H.k(a,"$ix")
u=this.fr
if(u!=null)u.C(a)},
bn:function(){return this.U(null)},
cP:function(a){H.k(a,"$ix")
this.a=null
this.U(a)},
fR:function(){return this.cP(null)},
eW:function(a,b){var u=V.ag
H.n(b,"$ij",[u],"$aj")
u=new D.bQ([u])
u.b=!0
this.U(u)},
eY:function(a,b){var u=V.ag
H.n(b,"$ij",[u],"$aj")
u=new D.bR([u])
u.b=!0
this.U(u)},
cC:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.r,h=new H.a0([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.c([],[A.aD])
h.J(0,new O.h5(j,q))
C.a.bj(q,new O.h6())
p=new H.a0([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){o=u[s]
r=o.gaV()
n=p.j(0,o.gaV())
p.n(0,r,n==null?1:n)}m=H.c([],[A.aF])
p.J(0,new O.h7(j,m))
C.a.bj(m,new O.h8())
l=new H.a0([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){o=i[s]
t=o.gaV()
r=l.j(0,o.gaV())
l.n(0,t,r==null?1:r)}k=H.c([],[A.aG])
l.J(0,new O.h9(j,k))
C.a.bj(k,new O.ha())
i=C.e.a0(j.e.a.length+3,4)
j.dy.e
return A.m9(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a6:function(a,b){H.n(a,"$ib",[T.cH],"$ab")
if(b!=null)if(!C.a.O(a,b)){b.a=a.length
C.a.h(a,b)}},
ak:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ap(u,u.length,[H.z(u,0)]);u.u();){t=u.d
t.toString
s=$.iA
if(s==null)s=$.iA=new V.O(0,0,1)
t.a=s
r=$.iz
t.d=r==null?$.iz=new V.O(0,1,0):r
r=$.iy
t.e=r==null?$.iy=new V.O(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bg(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bg(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bg(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
i8:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cC()
u=b6.fr.j(0,b5.aX)
if(u==null){u=A.m8(b5,b6.a)
t=u.b
if(t.length===0)H.A(P.y("May not cache a shader with no name."))
if(b6.fr.d3(0,t))H.A(P.y('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.n(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.ba
b5=b7.e
if(!(b5 instanceof Z.d9))b5=b7.e=null
if(b5==null||!b5.d.p(0,r)){b5=s.k3
if(b5)b7.d.aJ()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bQ()
p.a.bQ()
p=p.e
if(p!=null)p.aw(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.hq()
o=o.e
if(o!=null)o.aw(0)}m=b7.d.hp(new Z.iK(b6.a),r)
m.aL($.bk()).e=b4.a.Q.c
if(b5)m.aL($.bj()).e=b4.a.cx.c
if(q)m.aL($.bi()).e=b4.a.ch.c
if(s.r1)m.aL($.bH()).e=b4.a.cy.c
if(p)m.aL($.bl()).e=b4.a.db.c
if(s.rx)m.aL($.bh()).e=b4.a.dx.c
b7.e=m}b5=T.cH
l=H.c([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.hE()
if(s.dy){q=b4.a
o=b6.dx
o=o.gW(o)
q=q.dy
q.toString
q.af(o.ab(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gW(o)
n=b6.dx
n=b6.cx=o.t(0,n.gW(n))
o=n}q=q.fr
q.toString
q.af(o.ab(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gi5()
n=b6.dx
n=b6.ch=o.t(0,n.gW(n))
o=n}q=q.fy
q.toString
q.af(o.ab(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.af(C.k.ab(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.af(C.k.ab(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.af(C.k.ab(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.b.bh(q.a,q.d,k)
for(q=[P.D],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.k(n,"$iag")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.cZ(H.n(n.ab(0,!0),"$ib",q,"$ab")))
C.b.dL(o.a,o.d,!1,i)}}q=s.a
if(q.a){o=b4.a
n=b4.f.f
o=o.r2
C.b.T(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.a6(l,b4.f.e)
q=b4.a
o=b4.f.e
q.a7(q.ry,o)}if(s.id){q=s.b
if(q.a){o=b4.a
n=b4.r.f
o=o.x1
C.b.T(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.a6(l,b4.r.e)
q=b4.a
o=b4.r.e
q.a7(q.y1,o)}q=s.c
if(q.a){o=b4.a
n=b4.x.f
o=o.y2
C.b.T(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.a6(l,b4.x.e)
q=b4.a
o=b4.x.e
q.a7(q.ba,o)}q=s.d
if(q.a){o=b4.a
n=b4.y.f
o=o.d6
C.b.T(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.a6(l,b4.y.e)
q=b4.a
o=b4.y.e
q.a7(q.d7,o)}q=s.e
o=q.a
if(!o)n=q.c
else n=!0
if(n){n=b4.a
h=b4.z.ch
n=n.da
C.b.X(n.a,n.d,h)}if(o){o=b4.a
n=b4.z.f
o=o.d8
C.b.T(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.a6(l,b4.z.e)
q=b4.a
o=b4.z.e
q.a7(q.d9,o)}q=s.z
if(q.length>0){o=b6.db
g=o.gW(o)
o=P.r
f=new H.a0([o,o])
for(o=b4.dx.e,n=o.length,e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
c=f.j(0,0)
if(c==null)c=0
f.n(0,0,c+1)
b=J.f0(b4.a.bW.j(0,0),c)
h=g.bg(d.a)
a=h.a
a0=h.b
a1=h.c
a1=h.v(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
h=a1.b
a1=a1.c
C.b.T(a0.a,a0.d,a,h,a1)
a1=d.c
h=b.f
C.b.T(h.a,h.d,a1.a,a1.b,a1.c)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.v)(q),++e){n=q[e].a
k=f.j(0,n)
if(k==null)k=0
n=b4.a.bV.j(0,n)
C.b.bh(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
g=o.gW(o)
o=P.r
a2=new H.a0([o,o])
for(o=b4.dx.f,n=o.length,h=[b5],a=[P.D],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
a3=d.gaV()
c=a2.j(0,a3)
if(c==null)c=0
a2.n(0,a3,c+1)
b=J.f0(b4.a.bY.j(0,a3),c)
a4=g.t(0,d.gW(d))
a0=d.gW(d)
a1=$.cy
a0=a0.cb(a1==null?$.cy=new V.aE(0,0,0):a1)
a1=b.b
C.b.T(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cy
a0=a4.cb(a0==null?$.cy=new V.aE(0,0,0):a0)
a1=b.c
C.b.T(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaU(d)
a1=b.e
C.b.T(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gax()
a0=a4.dl(0)
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
i=new Float32Array(H.cZ(H.n(new V.dx(a1,a5,a6,a7,a8,a9,b0,b1,a0).ab(0,!0),"$ib",a,"$ab")))
C.b.dK(b2.a,b2.d,!1,i)
d.gax()
a0=d.gax()
H.n(l,"$ib",h,"$ab")
if(!C.a.O(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gax()
a1=a0.gaY(a0)
if(a1){a1=b.f
a1.toString
a5=a0.d
if(a5<6)a1.a.uniform1i(a1.d,0)
else{a0=a0.a
a1.a.uniform1i(a1.d,a0)}}d.gaO()
a0=d.gdS()
a1=b.x
a1.toString
a5=a0.ghA(a0)
a6=a0.ghB(a0)
a7=a0.ghC()
a0=a0.ghz()
C.b.dJ(a1.a,a1.d,a5,a6,a7,a0)
a0=d.gaO()
if(!C.a.O(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaO()
a1=a0.gaY(a0)
if(a1){a1=b.r
a1.toString
a5=a0.d
if(a5<6)a1.a.uniform1i(a1.d,0)
else{a0=a0.a
a1.a.uniform1i(a1.d,a0)}}if(d.ghF()){a0=d.ghk()
a1=b.y
C.b.X(a1.a,a1.d,a0)
a0=d.ghl()
a1=b.z
C.b.X(a1.a,a1.d,a0)
a0=d.ghm()
a1=b.Q
C.b.X(a1.a,a1.d,a0)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.v)(q),++e){n=q[e].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.bX.j(0,n)
C.b.bh(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
g=o.gW(o)
o=P.r
b3=new H.a0([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
a3=d.gaV()
c=b3.j(0,a3)
if(c==null)c=0
b3.n(0,a3,c+1)
b=J.f0(b4.a.c_.j(0,a3),c)
h=d.gi4(d)
a=b.b
C.b.T(a.a,a.d,h.a,h.b,h.c)
h=d.gir(d).iC()
a=b.c
C.b.T(a.a,a.d,h.a,h.b,h.c)
h=g.cb(d.gi4(d))
a=b.d
C.b.T(a.a,a.d,h.a,h.b,h.c)
h=d.gaU(d)
a=b.e
C.b.T(a.a,a.d,h.a,h.b,h.c)
d.gax()
h=d.gcc()
a=b.f
C.b.T(a.a,a.d,h.a,h.b,h.c)
h=d.gc9(d)
a=b.r
C.b.T(a.a,a.d,h.a,h.b,h.c)
h=d.giD()
a=b.x
C.b.X(a.a,a.d,h)
h=d.giE()
a=b.y
C.b.X(a.a,a.d,h)
d.gax()
h=d.gax()
H.n(l,"$ib",b5,"$ab")
if(!C.a.O(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gax()
a=h.gaY(h)
if(a){a=b.dx
a.toString
a0=h.gaY(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.ghK(h)
a.a.uniform1i(a.d,h)}}d.gaO()
h=d.gdS()
a=b.z
a.toString
a0=h.ghA(h)
a1=h.ghB(h)
a5=h.ghC()
h=h.ghz()
C.b.dJ(a.a,a.d,a0,a1,a5,h)
h=d.gaO()
if(!C.a.O(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaO()
a=h.gaY(h)
if(a){a=b.dy
a.toString
a0=h.gaY(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.ghK(h)
a.a.uniform1i(a.d,h)}}if(d.gis()){h=d.giq()
a=b.Q
C.b.X(a.a,a.d,h)
h=d.gip()
a=b.ch
C.b.X(a.a,a.d,h)}if(d.ghF()){h=d.ghk()
a=b.cx
C.b.X(a.a,a.d,h)
h=d.ghl()
a=b.cy
C.b.X(a.a,a.d,h)
h=d.ghm()
a=b.db
C.b.X(a.a,a.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.v)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.bZ.j(0,o)
C.b.bh(o.a,o.d,k)}}}if(s.f.c){b4.a6(l,b4.Q.e)
b5=b4.a
q=b4.Q.e
b5.a7(b5.dc,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gW(q).dl(0)}b5=b5.id
b5.toString
b5.af(q.ab(0,!0))}if(s.cy){b4.a6(l,b4.ch)
b5=b4.a
q=b4.ch
b5.a7(b5.dd,q)
b5=s.r
if(b5.a){q=b4.a
o=b4.cx.f
q=q.de
C.b.T(q.a,q.d,o.a,o.b,o.c)}if(b5.c){b4.a6(l,b4.cx.e)
b5=b4.a
q=b4.cx.e
b5.a7(b5.df,q)}b5=s.x
q=b5.a
if(!q)o=b5.c
else o=!0
if(o){o=b4.a
n=b4.cy.ch
o=o.dg
C.b.X(o.a,o.d,n)}if(q){q=b4.a
o=b4.cy.f
q=q.dh
C.b.T(q.a,q.d,o.a,o.b,o.c)}if(b5.c){b4.a6(l,b4.cy.e)
b5=b4.a
q=b4.cy.e
b5.a7(b5.di,q)}}b5=s.y
q=b5.a
o=!q
if(o)n=b5.c
else n=!0
if(n){if(q){q=b4.a
n=b4.db.f
q=q.dj
C.b.X(q.a,q.d,n)}if(b5.c){b4.a6(l,b4.db.e)
q=b4.a
n=b4.db.e
q.a7(q.dk,n)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(!q.c&&q.d>=6){q.c=!0
p.activeTexture(33984+q.a)
p.bindTexture(34067,q.b)}}q=b7.e
q.bN(b6)
q.aM(b6)
q.im(b6)
if(o)b5=b5.c
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(34067,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.hy()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cC().aX},
sel:function(a){this.e=H.n(a,"$ia1",[V.ag],"$aa1")}}
O.h5.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aD(a,C.e.a0(b+3,4)*4))},
$S:12}
O.h6.prototype={
$2:function(a,b){H.k(a,"$iaD")
H.k(b,"$iaD")
return J.jO(a.a,b.a)},
$S:39}
O.h7.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aF(a,C.e.a0(b+3,4)*4))},
$S:12}
O.h8.prototype={
$2:function(a,b){H.k(a,"$iaF")
H.k(b,"$iaF")
return J.jO(a.a,b.a)},
$S:40}
O.h9.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aG(a,C.e.a0(b+3,4)*4))},
$S:12}
O.ha.prototype={
$2:function(a,b){H.k(a,"$iaG")
H.k(b,"$iaG")
return J.jO(a.a,b.a)},
$S:41}
O.h_.prototype={
aq:function(){var u,t=this
t.cl()
u=t.f
if(!(Math.abs(u-1)<$.M().a)){t.f=1
u=new D.K(t.b,u,1,[P.D])
u.b=!0
t.a.U(u)}}}
O.cr.prototype={
U:function(a){return this.a.U(H.k(a,"$ix"))},
bn:function(){return this.U(null)},
aq:function(){},
bK:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aq()
u=s.a
u.a=null
u.U(null)}}}
O.h0.prototype={}
O.aS.prototype={
cR:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.U(t)}},
aq:function(){this.cl()
this.cR(new V.a2(1,1,1))},
saU:function(a,b){this.bK(new A.ac(!0,!1,this.c.c))
this.cR(b)}}
O.h2.prototype={}
O.h3.prototype={
aq:function(){var u,t=this
t.cm()
u=t.ch
if(!(Math.abs(u-1)<$.M().a)){t.ch=1
u=new D.K(t.b+".refraction",u,1,[P.D])
u.b=!0
t.a.U(u)}}}
O.h4.prototype={
cS:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.D])
t.b=!0
u.a.U(t)}},
aq:function(){this.cm()
this.cS(100)}}
O.bX.prototype={}
T.cH.prototype={}
T.dR.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.U():u}}
T.i6.prototype={
aE:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.l
W.a4(t,"load",H.m(new T.i7(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
fS:function(a,b,c){var u,t,s,r
b=V.kn(b)
u=V.kn(a.width)
t=V.kn(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jS()
s.width=u
s.height=t
r=H.k(C.h.dN(s,"2d"),"$icf")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nd(r.getImageData(0,0,s.width,s.height))}}}
T.i7.prototype={
$1:function(a){var u=this,t=u.a,s=t.fS(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.ie(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hD()}++t.e},
$S:27}
V.b7.prototype={
at:function(a,b){return!0},
i:function(a){return"all"},
$iaq:1}
V.aq.prototype={}
V.dv.prototype={
at:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].at(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sZ:function(a){this.a=H.n(a,"$ib",[V.aq],"$ab")},
$iaq:1}
V.aj.prototype={
at:function(a,b){return!this.dX(0,b)},
i:function(a){return"!["+this.ck(0)+"]"}}
V.hA.prototype={
at:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.k1(this.a),t=H.k1(this.b)
return u+".."+t},
$iaq:1}
V.hJ.prototype={
e1:function(a){var u,t
if(a.a.length<=0)throw H.i(P.y("May not create a SetMatcher with zero characters."))
u=new H.a0([P.r,P.L])
for(t=new H.cq(a,a.gm(a),[H.an(a,"w",0)]);t.u();)u.n(0,t.d,!0)
this.sfV(u)},
at:function(a,b){return this.a.d3(0,b)},
i:function(a){var u=this.a
return P.k2(new H.dr(u,[H.z(u,0)]))},
sfV:function(a){this.a=H.n(a,"$iG",[P.r,P.L],"$aG")},
$iaq:1}
V.cD.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cJ(this.a.k(0,b))
r.sZ(H.c([],[V.aq]))
r.c=!1
C.a.h(this.c,r)
return r},
hG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.at(0,a))return r}return},
i:function(a){return this.b},
shc:function(a){this.c=H.n(a,"$ib",[V.cJ],"$ab")}}
V.dT.prototype={
i:function(a){var u=H.kp(this.b,"\n","\\n"),t=H.kp(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cI.prototype={
av:function(a,b,c){var u,t,s
H.n(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.v)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sfO:function(a){var u=P.h
this.c=H.n(a,"$iG",[u,u],"$aG")}}
V.ia.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cD(this,b)
u.shc(H.c([],[V.cJ]))
u.d=null
this.a.n(0,b,u)}return u},
L:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cI(a)
u=P.h
t.sfO(new H.a0([u,u]))
this.b.n(0,a,t)}return t},
dI:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dT]),l=this.c,k=[P.r],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.aC(a,s)
q=l.hG(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.k2(j)
throw H.i(P.y("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.k2(j)
o=l.d
n=o.c.j(0,p)
t=new V.dT(n==null?o.b:n,p,s)}++s}}},
sh2:function(a){this.a=H.n(a,"$iG",[P.h,V.cD],"$aG")},
sh5:function(a){this.b=H.n(a,"$iG",[P.h,V.cI],"$aG")}}
V.cJ.prototype={
i:function(a){return this.b.b+": "+this.ck(0)}}
X.db.prototype={$icu:1}
X.fE.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.U():u}}
X.dE.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.U():u},
aB:function(a){var u
H.k(a,"$ix")
u=this.f
if(u!=null)u.C(a)},
ef:function(){return this.aB(null)},
saZ:function(a){var u,t,s=this
if(!J.a_(s.b,a)){u=s.b
if(u!=null)u.gq().S(0,s.gcq())
t=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gcq())
u=new D.K("mover",t,s.b,[U.a9])
u.b=!0
s.aB(u)}},
$icu:1,
$idb:1}
X.dP.prototype={}
V.bo.prototype={
b3:function(a){this.b=new P.fI(C.H)
this.c=null
this.sbw(H.c([],[[P.b,W.ax]]))},
I:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.ax]))
u=a.split("\n")
for(l=u.length,t=[W.ax],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.P(q)
o=m.b.er(q,0,q.length)
n=o==null?q:o
C.F.dQ(p,H.kp(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbc(m.d),p)}},
dw:function(a,b){var u,t,s,r,q=this
H.n(b,"$ib",[P.h],"$ab")
q.sbw(H.c([],[[P.b,W.ax]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.b9():t).dI(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)q.be(t[r])},
sbw:function(a){this.d=H.n(a,"$ib",[[P.b,W.ax]],"$ab")}}
V.jL.prototype={
$1:function(a){var u
H.k(a,"$ib0")
u=C.d.dH(this.a.ghI(),2)
if(u!=="0.00")P.ko(u+" fps")},
$S:43}
V.fk.prototype={
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
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.ib()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.X("a","z")
C.a.h(u.a,t)
t=V.X("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.X("0","9")
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.X("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.X("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.X("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.X("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.b7())
t=a1.k(0,r).l(0,h)
u=V.u(new H.q("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.b7())
t=a1.k(0,r).l(0,e)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.aj()
s=[V.aq]
t.sZ(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.u(new H.q("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.aj()
t.sZ(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.u(new H.q(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.u(new H.q(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.L("Num")
t=a1.k(0,n)
t.d=t.a.L("Num")
t=a1.k(0,m)
t.d=t.a.L("Symbol")
t=a1.k(0,j)
t.d=t.a.L("String")
t=a1.k(0,g)
t.d=t.a.L("String")
t=a1.k(0,c)
t.d=t.a.L(d)
t=a1.k(0,a0)
t.d=t.a.L(a0)
t=a1.k(0,q)
t=t.d=t.a.L(q)
u=[P.h]
t.av(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.av(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.av(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fF.prototype={
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
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.ib()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.X("a","z")
C.a.h(u.a,t)
t=V.X("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.X("0","9")
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.X("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.X("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.X("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.X("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.b7())
t=e.k(0,j).l(0,i)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.aj()
s=[V.aq]
t.sZ(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.u(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.aj()
u.sZ(H.c([],s))
C.a.h(t.a,u)
t=V.u(new H.q("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.u(new H.q(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.u(new H.q(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.L("Num")
u=e.k(0,n)
u.d=u.a.L("Num")
u=e.k(0,m)
u.d=u.a.L("Symbol")
u=e.k(0,i)
u.d=u.a.L(j)
u=e.k(0,g)
u.d=u.a.L(h)
u=e.k(0,f)
u.d=u.a.L(f)
u=e.k(0,q)
u=u.d=u.a.L(q)
t=[P.h]
u.av(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.av(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.av(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fG.prototype={
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
b9:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.ib()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.X("a","z")
C.a.h(u.a,t)
t=V.X("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.X("0","9")
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.u(new H.q("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.u(new H.q("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.u(new H.q("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.u(new H.q("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.b7())
C.a.h(l.k(0,s).l(0,m).a,new V.b7())
u=l.k(0,m).l(0,m)
t=new V.aj()
t.sZ(H.c([],[V.aq]))
C.a.h(u.a,t)
u=V.u(new H.q('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.L("Symbol")
u=l.k(0,n)
u.d=u.a.L("String")
u=l.k(0,r)
t=u.a.L(r)
u.d=t
t.av(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.L(q)
t=l.k(0,m)
t.d=t.a.L(m)
return l}}
V.hv.prototype={
dw:function(a,b){H.n(b,"$ib",[P.h],"$ab")
this.sbw(H.c([],[[P.b,W.ax]]))
this.I(C.a.l(b,"\n"),"#111")},
be:function(a){},
b9:function(){return}}
V.hN.prototype={
e3:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a4(q,"scroll",H.m(new V.hP(o),{func:1,ret:-1,args:[r]}),!1,r)},
cY:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ib",[P.h],"$ab")
this.fX()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dI(C.a.hN(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.nz(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.P(m[1])
l.textContent=H.P(m[0])
t.appendChild(l)}else{k=P.la(C.r,n,C.i,!1)
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
dM:function(a){var u,t,s,r=new V.fk("dart")
r.b3("dart")
u=new V.fF("glsl")
u.b3("glsl")
t=new V.fG("html")
t.b3("html")
s=C.a.hH(H.c([r,u,t],[V.bo]),new V.hQ(a))
if(s!=null)return s
r=new V.hv("plain")
r.b3("plain")
return r},
cW:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.n(b0,"$ib",[P.h],"$ab")
u=H.c([],[P.r])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.kj(r).bk(r,"+")){C.a.n(b0,s,C.c.am(r,1))
C.a.h(u,1)
t=!0}else if(C.c.bk(r,"-")){C.a.n(b0,s,C.c.am(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dM(a8)
q.dw(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.la(C.r,a7,C.i,!1)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.v)(r),++a0)C.P.hi(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.v)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gP(r);a3.u();)c.appendChild(a3.gE(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
fX:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.ib()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.aj()
r=[V.aq]
s.sZ(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.aj()
s.sZ(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.aj()
s.sZ(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.u(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.u(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.aj()
t.sZ(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.aj()
t.sZ(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.b7())
s=u.k(0,i).l(0,i)
t=new V.aj()
t.sZ(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.L(p)
s=u.k(0,n)
s.d=s.a.L(o)
s=u.k(0,"CodeEnd")
s.d=s.a.L(m)
s=u.k(0,j)
s.d=s.a.L("Link")
s=u.k(0,i)
s.d=s.a.L(i)
this.b=u}}
V.hP.prototype={
$1:function(a){P.kZ(C.j,new V.hO(this.a))},
$S:27}
V.hO.prototype={
$0:function(){var u=C.d.ad(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s},
$S:2}
V.hQ.prototype={
$1:function(a){return H.k(a,"$ibo").a===this.a},
$S:44}
B.jI.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$ix")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.cW("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cW("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.dU=u.i
u=J.dn.prototype
u.dW=u.i
u=P.j.prototype
u.dV=u.bi
u=W.Q.prototype
u.bl=u.a8
u=W.ey.prototype
u.dY=u.aj
u=O.cr.prototype
u.cl=u.aq
u=O.aS.prototype
u.cm=u.aq
u=V.dv.prototype
u.dX=u.at
u.ck=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n7","mv",9)
u(P,"n8","mw",9)
u(P,"n9","mx",9)
t(P,"lj","n5",3)
s(W,"nk",4,null,["$4"],["mz"],22,0)
s(W,"nl",4,null,["$4"],["mA"],22,0)
var m
r(m=E.ai.prototype,"gdu",0,0,null,["$1","$0"],["dv","hX"],0,0)
r(m,"gds",0,0,null,["$1","$0"],["dt","hW"],0,0)
r(m,"gdq",0,0,null,["$1","$0"],["dr","hT"],0,0)
q(m,"ghR","hS",6)
q(m,"ghU","hV",6)
r(m=E.dS.prototype,"gcn",0,0,null,["$1","$0"],["cp","co"],0,0)
p(m,"gi9","dC",3)
o(m=X.dZ.prototype,"gfa","fb",10)
o(m,"geZ","f_",10)
o(m,"gf4","f5",4)
o(m,"gfe","ff",21)
o(m,"gfc","fd",21)
o(m,"gfi","fj",4)
o(m,"gfm","fn",4)
o(m,"gf8","f9",4)
o(m,"gfk","fl",4)
o(m,"gf6","f7",4)
o(m,"gfo","fp",45)
o(m,"gfq","fs",10)
o(m,"gfG","fH",11)
o(m,"gfC","fD",11)
o(m,"gfE","fF",11)
r(D.br.prototype,"ge6",0,0,null,["$1","$0"],["an","e7"],0,0)
r(m=D.dq.prototype,"gcK",0,0,null,["$1","$0"],["cL","fg"],0,0)
o(m,"gfu","fv",46)
q(m,"geT","eU",23)
q(m,"gfA","fB",23)
n(V.S.prototype,"gm","c2",24)
n(V.O.prototype,"gm","c2",24)
r(m=U.cn.prototype,"gaF",0,0,null,["$1","$0"],["M","a_"],0,0)
q(m,"geR","eS",25)
q(m,"gfw","fz",25)
r(m=U.e_.prototype,"gaF",0,0,null,["$1","$0"],["M","a_"],0,0)
o(m,"gbz","bA",1)
o(m,"gbB","bC",1)
o(m,"gbD","bE",1)
r(m=U.e0.prototype,"gaF",0,0,null,["$1","$0"],["M","a_"],0,0)
o(m,"gbz","bA",1)
o(m,"gbB","bC",1)
o(m,"gbD","bE",1)
o(m,"geK","eL",1)
o(m,"geM","eN",1)
o(m,"gha","hb",1)
o(m,"gh8","h9",1)
o(m,"gh6","h7",1)
o(U.e1.prototype,"geP","eQ",1)
r(m=M.dg.prototype,"gag",0,0,null,["$1","$0"],["ao","e9"],0,0)
q(m,"gf0","f1",6)
q(m,"gf2","f3",6)
r(m=O.dw.prototype,"gb4",0,0,null,["$1","$0"],["U","bn"],0,0)
r(m,"gfQ",0,0,null,["$1","$0"],["cP","fR"],0,0)
q(m,"geV","eW",26)
q(m,"geX","eY",26)
r(O.cr.prototype,"gb4",0,0,null,["$1","$0"],["U","bn"],0,0)
r(X.dE.prototype,"gcq",0,0,null,["$1","$0"],["aB","ef"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.k_,J.a,J.ap,P.el,P.j,H.cq,P.aP,H.bO,H.dY,H.ih,P.bt,H.cg,H.eD,P.a7,H.fQ,H.fR,H.fM,P.eJ,P.b6,P.aA,P.e4,P.hX,P.cF,P.hY,P.b0,P.af,P.js,P.jg,P.c2,P.ek,P.w,P.ch,P.fJ,P.jq,P.L,P.aw,P.a5,P.bs,P.ht,P.dN,P.ec,P.fD,P.bu,P.b,P.G,P.J,P.al,P.h,P.bd,W.fg,W.bC,W.C,W.dC,W.ey,W.jl,W.dj,W.as,W.jf,W.eP,P.eO,P.ja,O.a1,O.cs,E.f9,E.ai,E.hB,E.dS,Z.e3,Z.iK,Z.d9,Z.bw,Z.bf,D.fc,D.bN,D.x,X.da,X.dp,X.fO,X.fT,X.ar,X.hh,X.ic,X.dZ,D.br,D.a6,D.dF,D.dM,V.a2,V.bp,V.fu,V.dx,V.ag,V.ad,V.aE,V.dG,V.dI,V.S,V.O,U.e_,U.e0,U.e1,M.dg,A.d5,A.f4,A.ac,A.aD,A.aF,A.aG,A.h1,A.bY,A.bZ,A.c0,A.dV,A.iq,F.a3,F.ba,F.bz,F.dK,F.hK,F.hL,F.hM,F.b4,F.iB,F.iC,F.iF,F.iG,O.bX,O.cr,O.h2,T.i6,V.b7,V.aq,V.dv,V.hA,V.hJ,V.cD,V.dT,V.cI,V.ia,X.db,X.dP,X.dE,V.bo,V.hN])
s(J.a,[J.fL,J.dm,J.dn,J.aQ,J.cp,J.bx,H.cw,W.e,W.f1,W.d6,W.cf,W.aL,W.aM,W.R,W.e6,W.fl,W.fm,W.e8,W.df,W.ea,W.fo,W.l,W.ed,W.aO,W.fH,W.eg,W.bv,W.dt,W.hb,W.em,W.en,W.aU,W.eo,W.er,W.aV,W.ev,W.ex,W.aY,W.ez,W.aZ,W.eE,W.aH,W.eH,W.i9,W.b1,W.eK,W.ie,W.iv,W.eQ,W.eS,W.eU,W.eW,W.eY,P.b9,P.ei,P.bc,P.et,P.hy,P.eF,P.be,P.eM,P.f5,P.e5,P.d7,P.dH,P.bV,P.dJ,P.dQ,P.dW,P.eB])
s(J.dn,[J.hu,J.c1,J.by])
t(J.jZ,J.aQ)
s(J.cp,[J.dl,J.dk])
t(P.fS,P.el)
s(P.fS,[H.dX,W.iS,W.ah,P.fz])
t(H.q,H.dX)
s(P.j,[H.fr,H.fW,H.cM])
s(H.fr,[H.bS,H.dr])
s(P.aP,[H.fX,H.iL])
t(H.fY,H.bS)
s(P.bt,[H.hq,H.fN,H.it,H.ij,H.fb,H.hH,P.f3,P.dD,P.aC,P.iu,P.is,P.cE,P.fe,P.fj])
s(H.cg,[H.jN,H.i3,H.jE,H.jF,H.jG,P.iO,P.iN,P.iP,P.iQ,P.jp,P.jo,P.iY,P.j1,P.iZ,P.j_,P.j0,P.j4,P.j5,P.j3,P.j2,P.hZ,P.i_,P.jy,P.jd,P.jc,P.je,P.fV,P.fp,P.fq,W.fs,W.hd,W.hf,W.hG,W.hW,W.iX,W.hp,W.ho,W.jh,W.ji,W.jn,W.jr,P.jA,P.fA,P.fB,P.f7,E.hC,E.hD,E.hE,E.i8,D.fv,D.fw,F.jt,F.iI,F.iH,F.iD,F.iE,O.h5,O.h6,O.h7,O.h8,O.h9,O.ha,T.i7,V.jL,V.hP,V.hO,V.hQ,B.jI])
s(H.i3,[H.hU,H.cd])
t(H.iM,P.f3)
t(P.fU,P.a7)
s(P.fU,[H.a0,W.iR])
t(H.dz,H.cw)
s(H.dz,[H.cQ,H.cS])
t(H.cR,H.cQ)
t(H.cv,H.cR)
t(H.cT,H.cS)
t(H.dA,H.cT)
s(H.dA,[H.hi,H.hj,H.hk,H.hl,H.hm,H.dB,H.hn])
t(P.jb,P.js)
t(P.j9,P.jg)
t(P.ci,P.hY)
t(P.ft,P.ch)
s(P.ci,[P.fI,P.ix])
t(P.iw,P.ft)
s(P.a5,[P.D,P.r])
s(P.aC,[P.bU,P.fK])
s(W.e,[W.E,W.fy,W.aX,W.cU,W.b_,W.aI,W.cW,W.iJ,W.cN,P.f8,P.bL])
s(W.E,[W.Q,W.bn,W.cO])
s(W.Q,[W.t,P.o])
s(W.t,[W.d4,W.f2,W.cc,W.bm,W.bM,W.ax,W.fC,W.co,W.hI,W.bW,W.dO,W.i1,W.i2,W.cG])
s(W.aL,[W.cj,W.fh,W.fi])
t(W.ff,W.aM)
t(W.ck,W.e6)
t(W.e9,W.e8)
t(W.de,W.e9)
t(W.eb,W.ea)
t(W.fn,W.eb)
t(W.aN,W.d6)
t(W.ee,W.ed)
t(W.fx,W.ee)
t(W.eh,W.eg)
t(W.bP,W.eh)
t(W.bB,W.l)
s(W.bB,[W.aR,W.a8,W.aJ])
t(W.hc,W.em)
t(W.he,W.en)
t(W.ep,W.eo)
t(W.hg,W.ep)
t(W.es,W.er)
t(W.cx,W.es)
t(W.ew,W.ev)
t(W.hw,W.ew)
t(W.hF,W.ex)
t(W.cV,W.cU)
t(W.hR,W.cV)
t(W.eA,W.ez)
t(W.hS,W.eA)
t(W.hV,W.eE)
t(W.eI,W.eH)
t(W.i4,W.eI)
t(W.cX,W.cW)
t(W.i5,W.cX)
t(W.eL,W.eK)
t(W.id,W.eL)
t(W.b5,W.a8)
t(W.eR,W.eQ)
t(W.iT,W.eR)
t(W.e7,W.df)
t(W.eT,W.eS)
t(W.j6,W.eT)
t(W.eV,W.eU)
t(W.eq,W.eV)
t(W.eX,W.eW)
t(W.jj,W.eX)
t(W.eZ,W.eY)
t(W.jk,W.eZ)
t(W.iU,W.iR)
t(W.iV,P.hX)
t(W.k7,W.iV)
t(W.iW,P.cF)
t(W.jm,W.ey)
t(P.ak,P.ja)
t(P.ej,P.ei)
t(P.fP,P.ej)
t(P.eu,P.et)
t(P.hr,P.eu)
t(P.cB,P.o)
t(P.eG,P.eF)
t(P.i0,P.eG)
t(P.eN,P.eM)
t(P.ig,P.eN)
t(P.f6,P.e5)
t(P.hs,P.bL)
t(P.eC,P.eB)
t(P.hT,P.eC)
s(E.f9,[Z.d8,A.cC,T.cH])
s(D.x,[D.bQ,D.bR,D.K,X.hx])
s(X.hx,[X.du,X.bb,X.ct,X.dU])
s(O.a1,[D.dq,U.cn])
s(D.fc,[U.fd,U.a9])
t(U.dc,U.a9)
t(A.fZ,A.cC)
s(A.dV,[A.ay,A.im,A.io,A.ip,A.ik,A.aa,A.il,A.Y,A.cK,A.ir,A.cL,A.at,A.c_,A.ae])
t(O.dw,O.bX)
s(O.cr,[O.h_,O.h0,O.aS])
s(O.aS,[O.h3,O.h4])
t(T.dR,T.cH)
s(V.dv,[V.aj,V.cJ])
t(X.fE,X.dP)
s(V.bo,[V.fk,V.fF,V.fG,V.hv])
u(H.dX,H.dY)
u(H.cQ,P.w)
u(H.cR,H.bO)
u(H.cS,P.w)
u(H.cT,H.bO)
u(P.el,P.w)
u(W.e6,W.fg)
u(W.e8,P.w)
u(W.e9,W.C)
u(W.ea,P.w)
u(W.eb,W.C)
u(W.ed,P.w)
u(W.ee,W.C)
u(W.eg,P.w)
u(W.eh,W.C)
u(W.em,P.a7)
u(W.en,P.a7)
u(W.eo,P.w)
u(W.ep,W.C)
u(W.er,P.w)
u(W.es,W.C)
u(W.ev,P.w)
u(W.ew,W.C)
u(W.ex,P.a7)
u(W.cU,P.w)
u(W.cV,W.C)
u(W.ez,P.w)
u(W.eA,W.C)
u(W.eE,P.a7)
u(W.eH,P.w)
u(W.eI,W.C)
u(W.cW,P.w)
u(W.cX,W.C)
u(W.eK,P.w)
u(W.eL,W.C)
u(W.eQ,P.w)
u(W.eR,W.C)
u(W.eS,P.w)
u(W.eT,W.C)
u(W.eU,P.w)
u(W.eV,W.C)
u(W.eW,P.w)
u(W.eX,W.C)
u(W.eY,P.w)
u(W.eZ,W.C)
u(P.ei,P.w)
u(P.ej,W.C)
u(P.et,P.w)
u(P.eu,W.C)
u(P.eF,P.w)
u(P.eG,W.C)
u(P.eM,P.w)
u(P.eN,W.C)
u(P.e5,P.a7)
u(P.eB,P.w)
u(P.eC,W.C)})()
var v={mangledGlobalNames:{r:"int",D:"double",a5:"num",h:"String",L:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.r,[P.j,E.ai]]},{func:1,ret:P.J,args:[D.x]},{func:1,ret:P.J,args:[F.a3]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[P.r,P.r]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.L,args:[P.h]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.h,args:[P.r]},{func:1,ret:P.L,args:[W.E]},{func:1,ret:P.L,args:[W.as]},{func:1,args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.L,args:[W.Q,P.h,P.h,W.bC]},{func:1,ret:-1,args:[P.r,[P.j,D.a6]]},{func:1,ret:P.D},{func:1,ret:-1,args:[P.r,[P.j,U.a9]]},{func:1,ret:-1,args:[P.r,[P.j,V.ag]]},{func:1,ret:P.J,args:[W.l]},{func:1,ret:P.J,args:[,],opt:[P.al]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:W.Q,args:[W.E]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.J,args:[P.a5]},{func:1,ret:P.J,args:[F.b4,P.D,P.D]},{func:1,args:[W.l]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:P.r,args:[A.aD,A.aD]},{func:1,ret:P.r,args:[A.aF,A.aF]},{func:1,ret:P.r,args:[A.aG,A.aG]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.J,args:[P.b0]},{func:1,ret:P.L,args:[V.bo]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:P.L,args:[[P.j,D.a6]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.o=W.bm.prototype
C.h=W.bM.prototype
C.F=W.ax.prototype
C.I=J.a.prototype
C.a=J.aQ.prototype
C.J=J.dk.prototype
C.e=J.dl.prototype
C.k=J.dm.prototype
C.d=J.cp.prototype
C.c=J.bx.prototype
C.K=J.by.prototype
C.O=W.cx.prototype
C.t=J.hu.prototype
C.b=P.bV.prototype
C.P=W.bW.prototype
C.u=W.dO.prototype
C.n=J.c1.prototype
C.v=W.b5.prototype
C.w=W.cN.prototype
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

C.D=new P.ht()
C.i=new P.iw()
C.E=new P.ix()
C.f=new P.jb()
C.j=new P.bs(0)
C.G=new P.bs(5e6)
C.H=new P.fJ("element",!1,!1,!1)
C.L=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.M=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.N=H.c(u([]),[P.h])
C.r=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.r])
C.l=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.m=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])})();(function staticFields(){$.aK=0
$.ce=null
$.ku=null
$.k9=!1
$.lm=null
$.lh=null
$.ls=null
$.jB=null
$.jH=null
$.kl=null
$.c3=null
$.d_=null
$.d0=null
$.ka=!1
$.Z=C.f
$.am=[]
$.b8=null
$.jV=null
$.kA=null
$.kz=null
$.ef=P.kD(P.h,P.bu)
$.kI=null
$.kM=null
$.cy=null
$.kT=null
$.l2=null
$.l4=null
$.iy=null
$.iz=null
$.iA=null
$.l3=null
$.kL=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nJ","lw",function(){return H.ll("_$dart_dartClosure")})
u($,"nK","kq",function(){return H.ll("_$dart_js")})
u($,"nP","lx",function(){return H.b2(H.ii({
toString:function(){return"$receiver$"}}))})
u($,"nQ","ly",function(){return H.b2(H.ii({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nR","lz",function(){return H.b2(H.ii(null))})
u($,"nS","lA",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nV","lD",function(){return H.b2(H.ii(void 0))})
u($,"nW","lE",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nU","lC",function(){return H.b2(H.l0(null))})
u($,"nT","lB",function(){return H.b2(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nY","lG",function(){return H.b2(H.l0(void 0))})
u($,"nX","lF",function(){return H.b2(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"of","kr",function(){return P.mu()})
u($,"oh","lL",function(){return P.mj("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"og","lK",function(){return P.kE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"o8","lJ",function(){return Z.az(0)})
u($,"o2","lH",function(){return Z.az(511)})
u($,"oa","bk",function(){return Z.az(1)})
u($,"o9","bj",function(){return Z.az(2)})
u($,"o4","bi",function(){return Z.az(4)})
u($,"ob","bH",function(){return Z.az(8)})
u($,"oc","bl",function(){return Z.az(16)})
u($,"o5","d2",function(){return Z.az(32)})
u($,"o6","d3",function(){return Z.az(64)})
u($,"o7","lI",function(){return Z.az(96)})
u($,"od","cb",function(){return Z.az(128)})
u($,"o3","bh",function(){return Z.az(256)})
u($,"nI","lv",function(){return new V.fu(1e-9)})
u($,"nH","M",function(){return $.lv()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cw,ArrayBufferView:H.cw,Float32Array:H.cv,Float64Array:H.cv,Int16Array:H.hi,Int32Array:H.hj,Int8Array:H.hk,Uint16Array:H.hl,Uint32Array:H.hm,Uint8ClampedArray:H.dB,CanvasPixelArray:H.dB,Uint8Array:H.hn,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.f1,HTMLAnchorElement:W.d4,HTMLAreaElement:W.f2,HTMLBaseElement:W.cc,Blob:W.d6,HTMLBodyElement:W.bm,HTMLCanvasElement:W.bM,CanvasRenderingContext2D:W.cf,CDATASection:W.bn,CharacterData:W.bn,Comment:W.bn,ProcessingInstruction:W.bn,Text:W.bn,CSSNumericValue:W.cj,CSSUnitValue:W.cj,CSSPerspective:W.ff,CSSCharsetRule:W.R,CSSConditionRule:W.R,CSSFontFaceRule:W.R,CSSGroupingRule:W.R,CSSImportRule:W.R,CSSKeyframeRule:W.R,MozCSSKeyframeRule:W.R,WebKitCSSKeyframeRule:W.R,CSSKeyframesRule:W.R,MozCSSKeyframesRule:W.R,WebKitCSSKeyframesRule:W.R,CSSMediaRule:W.R,CSSNamespaceRule:W.R,CSSPageRule:W.R,CSSRule:W.R,CSSStyleRule:W.R,CSSSupportsRule:W.R,CSSViewportRule:W.R,CSSStyleDeclaration:W.ck,MSStyleCSSProperties:W.ck,CSS2Properties:W.ck,CSSImageValue:W.aL,CSSKeywordValue:W.aL,CSSPositionValue:W.aL,CSSResourceValue:W.aL,CSSURLImageValue:W.aL,CSSStyleValue:W.aL,CSSMatrixComponent:W.aM,CSSRotation:W.aM,CSSScale:W.aM,CSSSkew:W.aM,CSSTranslation:W.aM,CSSTransformComponent:W.aM,CSSTransformValue:W.fh,CSSUnparsedValue:W.fi,DataTransferItemList:W.fl,HTMLDivElement:W.ax,DOMException:W.fm,ClientRectList:W.de,DOMRectList:W.de,DOMRectReadOnly:W.df,DOMStringList:W.fn,DOMTokenList:W.fo,Element:W.Q,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aN,FileList:W.fx,FileWriter:W.fy,HTMLFormElement:W.fC,Gamepad:W.aO,History:W.fH,HTMLCollection:W.bP,HTMLFormControlsCollection:W.bP,HTMLOptionsCollection:W.bP,ImageData:W.bv,HTMLImageElement:W.co,KeyboardEvent:W.aR,Location:W.dt,MediaList:W.hb,MIDIInputMap:W.hc,MIDIOutputMap:W.he,MimeType:W.aU,MimeTypeArray:W.hg,PointerEvent:W.a8,MouseEvent:W.a8,DragEvent:W.a8,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cx,RadioNodeList:W.cx,Plugin:W.aV,PluginArray:W.hw,RTCStatsReport:W.hF,HTMLSelectElement:W.hI,SourceBuffer:W.aX,SourceBufferList:W.hR,SpeechGrammar:W.aY,SpeechGrammarList:W.hS,SpeechRecognitionResult:W.aZ,Storage:W.hV,CSSStyleSheet:W.aH,StyleSheet:W.aH,HTMLTableCellElement:W.bW,HTMLTableDataCellElement:W.bW,HTMLTableHeaderCellElement:W.bW,HTMLTableElement:W.dO,HTMLTableRowElement:W.i1,HTMLTableSectionElement:W.i2,HTMLTemplateElement:W.cG,TextTrack:W.b_,TextTrackCue:W.aI,VTTCue:W.aI,TextTrackCueList:W.i4,TextTrackList:W.i5,TimeRanges:W.i9,Touch:W.b1,TouchEvent:W.aJ,TouchList:W.id,TrackDefaultList:W.ie,CompositionEvent:W.bB,FocusEvent:W.bB,TextEvent:W.bB,UIEvent:W.bB,URL:W.iv,VideoTrackList:W.iJ,WheelEvent:W.b5,Window:W.cN,DOMWindow:W.cN,Attr:W.cO,CSSRuleList:W.iT,ClientRect:W.e7,DOMRect:W.e7,GamepadList:W.j6,NamedNodeMap:W.eq,MozNamedAttrMap:W.eq,SpeechRecognitionResultList:W.jj,StyleSheetList:W.jk,SVGLength:P.b9,SVGLengthList:P.fP,SVGNumber:P.bc,SVGNumberList:P.hr,SVGPointList:P.hy,SVGScriptElement:P.cB,SVGStringList:P.i0,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.be,SVGTransformList:P.ig,AudioBuffer:P.f5,AudioParamMap:P.f6,AudioTrackList:P.f8,AudioContext:P.bL,webkitAudioContext:P.bL,BaseAudioContext:P.bL,OfflineAudioContext:P.hs,WebGLBuffer:P.d7,WebGLProgram:P.dH,WebGL2RenderingContext:P.bV,WebGLShader:P.dJ,WebGLTexture:P.dQ,WebGLUniformLocation:P.dW,SQLResultSetRowList:P.hT})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dz.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.dA.$nativeSuperclassTag="ArrayBufferView"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"
W.cX.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.lo,[])
else B.lo([])})})()
//# sourceMappingURL=test.dart.js.map
