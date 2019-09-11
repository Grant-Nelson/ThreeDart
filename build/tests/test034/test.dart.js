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
a[c]=function(){a[c]=function(){H.mS(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jD(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jo:function jo(){},
lk:function(){return new P.ht("No element")},
dw:function(a,b,c,d,e){if(c-b<=32)H.lK(a,b,c,d,e)
else H.lJ(a,b,c,d,e)},
lK:function(a,b,c,d,e){var u,t,s,r,q
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
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
lJ:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.a0(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.a0(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
r=p}C.a.l(a2,d,u)
C.a.l(a2,b,s)
C.a.l(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.l(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.l(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.W(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a5()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.Z()
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
if(typeof g!=="number")return g.a5()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.Z()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.Z()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a5()
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
H.dw(a2,a3,o-2,a5,a6)
H.dw(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.W(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.W(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a5()
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
break}}}H.dw(a2,o,n,a5,a6)}else H.dw(a2,o,n,a5,a6)},
X:function X(a){this.a=a},
fa:function fa(){},
dd:function dd(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fC:function fC(a,b,c){this.a=a
this.b=b
this.$ti=c},
fD:function fD(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ig:function ig(a,b,c){this.a=a
this.b=b
this.$ti=c},
ih:function ih(a,b,c){this.a=a
this.b=b
this.$ti=c},
bG:function bG(){},
dI:function dI(){},
dH:function dH(){},
bY:function(a){var u,t=H.mT(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mC:function(a){return v.types[H.a7(a)]},
mH:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iE},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aq(a)
if(typeof u!=="string")throw H.h(H.bd(a))
return u},
cm:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cn:function(a){return H.lv(a)+H.jA(H.bz(a),0,null)},
lv:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.C||!!n.$icx){r=C.l(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bY(t.length>1&&C.d.aZ(t,0)===36?C.d.aI(t,1):t)},
k8:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lE:function(a){var u,t,s,r=H.d([],[P.r])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bd(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.b2(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.bd(s))}return H.k8(r)},
k9:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bd(s))
if(s<0)throw H.h(H.bd(s))
if(s>65535)return H.lE(a)}return H.k8(a)},
lD:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.b2(u,10))>>>0,56320|u&1023)}throw H.h(P.aB(a,0,1114111,null,null))},
bL:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lC:function(a){var u=H.bL(a).getFullYear()+0
return u},
lA:function(a){var u=H.bL(a).getMonth()+1
return u},
lw:function(a){var u=H.bL(a).getDate()+0
return u},
lx:function(a){var u=H.bL(a).getHours()+0
return u},
lz:function(a){var u=H.bL(a).getMinutes()+0
return u},
lB:function(a){var u=H.bL(a).getSeconds()+0
return u},
ly:function(a){var u=H.bL(a).getMilliseconds()+0
return u},
C:function(a){throw H.h(H.bd(a))},
c:function(a,b){if(a==null)J.c0(a)
throw H.h(H.bU(a,b))},
bU:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,s,null)
u=H.a7(J.c0(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.R(b,a,s,null,u)
return P.ha(b,s)},
mx:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bM(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bM(a,c,!0,b,"end",u)
return new P.aH(!0,b,"end",null)},
bd:function(a){return new P.aH(!0,a,null,null)},
mt:function(a){if(typeof a!=="number")throw H.h(H.bd(a))
return a},
h:function(a){var u
if(a==null)a=new P.dm()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kN})
u.name=""}else u.toString=H.kN
return u},
kN:function(){return J.aq(this.dartException)},
y:function(a){throw H.h(a)},
u:function(a){throw H.h(P.c7(a))},
b_:function(a){var u,t,s,r,q,p
a=H.kK(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hQ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kj:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k3:function(a,b){return new H.h2(a,b==null?null:b.method)},
jp:function(a,b){var u=b==null,t=u?null:b.method
return new H.fs(a,t,u?null:b.receiver)},
bf:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.b2(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jp(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k3(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kR()
q=$.kS()
p=$.kT()
o=$.kU()
n=$.kX()
m=$.kY()
l=$.kW()
$.kV()
k=$.l_()
j=$.kZ()
i=r.a7(u)
if(i!=null)return f.$1(H.jp(H.a4(u),i))
else{i=q.a7(u)
if(i!=null){i.method="call"
return f.$1(H.jp(H.a4(u),i))}else{i=p.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=n.a7(u)
if(i==null){i=m.a7(u)
if(i==null){i=l.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=k.a7(u)
if(i==null){i=j.a7(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k3(H.a4(u),i))}}return f.$1(new H.i0(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dy()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aH(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dy()
return a},
bW:function(a){var u
if(a==null)return new H.em(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.em(a)},
mA:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
mG:function(a,b,c,d,e,f){H.j(a,"$ijk")
switch(H.a7(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.w("Unsupported number of arguments for wrapped closure"))},
bT:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mG)
a.$identity=u
return u},
le:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hu().constructor.prototype):Object.create(new H.c1(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aI
if(typeof t!=="number")return t.B()
$.aI=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jQ(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.la(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jQ(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
la:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mC,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jP:H.jf
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
lb:function(a,b,c,d){var u=H.jf
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jQ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ld(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lb(t,!r,u,b)
if(t===0){r=$.aI
if(typeof r!=="number")return r.B()
$.aI=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c2
return new Function(r+H.i(q==null?$.c2=H.eV("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aI
if(typeof r!=="number")return r.B()
$.aI=r+1
o+=r
r="return function("+o+"){return this."
q=$.c2
return new Function(r+H.i(q==null?$.c2=H.eV("self"):q)+"."+H.i(u)+"("+o+");}")()},
lc:function(a,b,c,d){var u=H.jf,t=H.jP
switch(b?-1:a){case 0:throw H.h(H.lH("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ld:function(a,b){var u,t,s,r,q,p,o,n=$.c2
if(n==null)n=$.c2=H.eV("self")
u=$.jO
if(u==null)u=$.jO=H.eV("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lc(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.aI
if(typeof u!=="number")return u.B()
$.aI=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.aI
if(typeof u!=="number")return u.B()
$.aI=u+1
return new Function(n+u+"}")()},
jD:function(a,b,c,d,e,f,g){return H.le(a,b,c,d,!!e,!!f,g)},
jf:function(a){return a.a},
jP:function(a){return a.c},
eV:function(a){var u,t,s,r=new H.c1("self","target","receiver","name"),q=J.jm(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
z:function(a){if(a==null)H.mp("boolean expression must not be null")
return a},
a4:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.b0(a,"String"))},
nx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.b0(a,"double"))},
kG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.b0(a,"num"))},
kA:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.b0(a,"bool"))},
a7:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.b0(a,"int"))},
kI:function(a,b){throw H.h(H.b0(a,H.bY(H.a4(b).substring(2))))},
mN:function(a,b){throw H.h(H.l9(a,H.bY(H.a4(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.kI(a,b)},
p:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.mN(a,b)},
mI:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.kI(a,b)},
kB:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a7(u)]
else return a.$S()}return},
eI:function(a,b){var u
if(typeof a=="function")return!0
u=H.kB(J.U(a))
if(u==null)return!1
return H.kr(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.jx)return a
$.jx=!0
try{if(H.eI(a,b))return a
u=H.j8(b)
t=H.b0(a,u)
throw H.h(t)}finally{$.jx=!1}},
jE:function(a,b){if(a!=null&&!H.jC(a,b))H.y(H.b0(a,H.j8(b)))
return a},
b0:function(a,b){return new H.hS("TypeError: "+P.d4(a)+": type '"+H.i(H.kv(a))+"' is not a subtype of type '"+b+"'")},
l9:function(a,b){return new H.eW("CastError: "+P.d4(a)+": type '"+H.i(H.kv(a))+"' is not a subtype of type '"+b+"'")},
kv:function(a){var u,t=J.U(a)
if(!!t.$ic5){u=H.kB(t)
if(u!=null)return H.j8(u)
return"Closure"}return H.cn(a)},
mp:function(a){throw H.h(new H.ii(a))},
mS:function(a){throw H.h(new P.f3(a))},
lH:function(a){return new H.hh(a)},
kC:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bz:function(a){if(a==null)return
return a.$ti},
ny:function(a,b,c){return H.bX(a["$a"+H.i(c)],H.bz(b))},
cN:function(a,b,c,d){var u=H.bX(a["$a"+H.i(c)],H.bz(b))
return u==null?null:u[d]},
ay:function(a,b,c){var u=H.bX(a["$a"+H.i(b)],H.bz(a))
return u==null?null:u[c]},
x:function(a,b){var u=H.bz(a)
return u==null?null:u[b]},
j8:function(a){return H.by(a,null)},
by:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bY(a[0].name)+H.jA(a,1,b)
if(typeof a=="function")return H.bY(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a7(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.lZ(a,b)
if('futureOr' in a)return"FutureOr<"+H.by("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lZ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.l])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.d.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.L)p+=" extends "+H.by(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.by(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.by(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.by(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mz(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.a4(n[g])
i=i+h+H.by(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jA:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bt("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.by(p,c)}return"<"+u.i(0)+">"},
bX:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jB:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bz(a)
t=J.U(a)
if(t[b]==null)return!1
return H.ky(H.bX(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.jB(a,b,c,d))return a
throw H.h(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bY(b.substring(2))+H.jA(c,0,null),v.mangledGlobalNames)))},
ky:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ax(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ax(a[t],b,c[t],d))return!1
return!0},
nv:function(a,b,c){return a.apply(b,H.bX(J.U(b)["$a"+H.i(c)],H.bz(b)))},
kE:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="I"||a===-1||a===-2||H.kE(u)}return!1},
jC:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="I"||b===-1||b===-2||H.kE(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jC(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eI(a,b)}u=J.U(a).constructor
t=H.bz(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ax(u,null,b,null)},
G:function(a,b){if(a!=null&&!H.jC(a,b))throw H.h(H.b0(a,H.j8(b)))
return a},
ax:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="I")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ax("type" in a?a.type:l,b,s,d)
else if(H.ax(a,b,s,d))return!0
else{if(!('$i'+"cb" in t.prototype))return!1
r=t.prototype["$a"+"cb"]
q=H.bX(r,u?a.slice(1):l)
return H.ax(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.kr(a,b,c,d)
if('func' in a)return c.name==="jk"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ky(H.bX(m,u),b,p,d)},
kr:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.mL(h,b,g,d)},
mL:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ax(c[s],d,a[s],b))return!1}return!0},
nw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mJ:function(a){var u,t,s,r,q=H.a4($.kD.$1(a)),p=$.j0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.a4($.kx.$2(a,q))
if(q!=null){p=$.j0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j7(u)
$.j0[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j6[q]=u
return u}if(s==="-"){r=H.j7(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kH(a,u)
if(s==="*")throw H.h(P.kk(q))
if(v.leafTags[q]===true){r=H.j7(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kH(a,u)},
kH:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jI(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j7:function(a){return J.jI(a,!1,null,!!a.$iE)},
mK:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j7(u)
else return J.jI(u,c,null,null)},
mE:function(){if(!0===$.jH)return
$.jH=!0
H.mF()},
mF:function(){var u,t,s,r,q,p,o,n
$.j0=Object.create(null)
$.j6=Object.create(null)
H.mD()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kJ.$1(q)
if(p!=null){o=H.mK(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mD:function(){var u,t,s,r,q,p,o=C.t()
o=H.bS(C.u,H.bS(C.v,H.bS(C.m,H.bS(C.m,H.bS(C.w,H.bS(C.x,H.bS(C.y(C.l),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kD=new H.j3(r)
$.kx=new H.j4(q)
$.kJ=new H.j5(p)},
bS:function(a,b){return a(b)||b},
lm:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(new P.fl("Illegal RegExp pattern ("+String(p)+")",a))},
kL:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
my:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kK:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kM:function(a,b,c){var u=H.mQ(a,b,c)
return u},
mQ:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kK(b),'g'),H.my(c))},
hQ:function hQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h2:function h2(a,b){this.a=a
this.b=b},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a){this.a=a},
jb:function jb(a){this.a=a},
em:function em(a){this.a=a
this.b=null},
c5:function c5(){},
hC:function hC(){},
hu:function hu(){},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hS:function hS(a){this.a=a},
eW:function eW(a){this.a=a},
hh:function hh(a){this.a=a},
ii:function ii(a){this.a=a},
V:function V(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fv:function fv(a,b){this.a=a
this.b=b
this.c=null},
dc:function dc(a,b){this.a=a
this.$ti=b},
fw:function fw(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
fr:function fr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cK:function(a){return a},
bx:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bU(b,a))},
lY:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.mx(a,b,c))
return b},
cj:function cj(){},
dj:function dj(){},
ci:function ci(){},
dk:function dk(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
dl:function dl(){},
h1:function h1(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
mz:function(a){return J.k_(a?Object.keys(a):[],null)},
mT:function(a){return v.mangledGlobalNames[a]},
mM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j2:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jH==null){H.mE()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.kk("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jL()]
if(r!=null)return r
r=H.mJ(a)
if(r!=null)return r
if(typeof a=="function")return C.E
u=Object.getPrototypeOf(a)
if(u==null)return C.p
if(u===Object.prototype)return C.p
if(typeof s=="function"){Object.defineProperty(s,$.jL(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
ll:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.je(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aB(a,0,4294967295,"length",null))
return J.k_(new Array(a),b)},
k_:function(a,b){return J.jm(H.d(a,[b]))},
jm:function(a){a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d7.prototype
return J.d6.prototype}if(typeof a=="string")return J.bI.prototype
if(a==null)return J.d8.prototype
if(typeof a=="boolean")return J.fq.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.L)return a
return J.j2(a)},
j1:function(a){if(typeof a=="string")return J.bI.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.L)return a
return J.j2(a)},
jF:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.L)return a
return J.j2(a)},
mB:function(a){if(typeof a=="number")return J.ce.prototype
if(typeof a=="string")return J.bI.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.cx.prototype
return a},
jG:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.L)return a
return J.j2(a)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).p(a,b)},
eJ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mH(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.j1(a).j(a,b)},
l4:function(a,b,c){return J.jG(a).fA(a,b,c)},
l5:function(a,b,c,d){return J.jG(a).h1(a,b,c,d)},
jc:function(a,b){return J.mB(a).ha(a,b)},
jd:function(a,b,c){return J.j1(a).hb(a,b,c)},
jN:function(a,b){return J.jF(a).C(a,b)},
l6:function(a,b){return J.jF(a).H(a,b)},
bB:function(a){return J.U(a).gE(a)},
c_:function(a){return J.jF(a).gR(a)},
c0:function(a){return J.j1(a).gk(a)},
l7:function(a,b){return J.jG(a).hK(a,b)},
aq:function(a){return J.U(a).i(a)},
a:function a(){},
fq:function fq(){},
d8:function d8(){},
d9:function d9(){},
h6:function h6(){},
cx:function cx(){},
br:function br(){},
aO:function aO(a){this.$ti=a},
jn:function jn(a){this.$ti=a},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ce:function ce(){},
d7:function d7(){},
d6:function d6(){},
bI:function bI(){}},P={
lO:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mq()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bT(new P.ik(s),1)).observe(u,{childList:true})
return new P.ij(s,u,t)}else if(self.setImmediate!=null)return P.mr()
return P.ms()},
lP:function(a){self.scheduleImmediate(H.bT(new P.il(H.n(a,{func:1,ret:-1})),0))},
lQ:function(a){self.setImmediate(H.bT(new P.im(H.n(a,{func:1,ret:-1})),0))},
lR:function(a){P.js(C.j,H.n(a,{func:1,ret:-1}))},
js:function(a,b){var u=C.e.a0(a.a,1000)
return P.lV(u<0?0:u,b)},
ki:function(a,b){var u=C.e.a0(a.a,1000)
return P.lW(u<0?0:u,b)},
lV:function(a,b){var u=new P.es()
u.dW(a,b)
return u},
lW:function(a,b){var u=new P.es()
u.dX(a,b)
return u},
lS:function(a,b){var u,t,s
b.a=1
try{a.dz(new P.iv(b),new P.iw(b),null)}catch(s){u=H.bf(s)
t=H.bW(s)
P.mO(new P.ix(b,u,t))}},
kp:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaw")
if(u>=4){t=b.bC()
b.a=a.a
b.c=a.c
P.cz(b,t)}else{t=H.j(b.c,"$ib2")
b.a=2
b.c=a
a.cJ(t)}},
cz:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$iad")
P.iX(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cz(h.a,b)}g=h.a
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
if(m){H.j(q,"$iad")
P.iX(i,i,g.b,q.a,q.b)
return}l=$.S
if(l!==n)$.S=n
else l=i
g=b.c
if((g&15)===8)new P.iB(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.iA(u,b,q).$0()}else if((g&2)!==0)new P.iz(h,u,b).$0()
if(l!=null)$.S=l
g=u.b
if(!!J.U(g).$icb){if(g.a>=4){k=H.j(o.c,"$ib2")
o.c=null
b=o.b1(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.kp(g,o)
return}}j=b.b
k=H.j(j.c,"$ib2")
j.c=null
b=j.b1(k)
g=u.a
p=u.b
if(!g){H.G(p,H.x(j,0))
j.a=4
j.c=p}else{H.j(p,"$iad")
j.a=8
j.c=p}h.a=j
g=j}},
ml:function(a,b){if(H.eI(a,{func:1,args:[P.L,P.ak]}))return H.n(a,{func:1,ret:null,args:[P.L,P.ak]})
if(H.eI(a,{func:1,args:[P.L]}))return H.n(a,{func:1,ret:null,args:[P.L]})
throw H.h(P.je(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mk:function(){var u,t
for(;u=$.bR,u!=null;){$.cM=null
t=u.b
$.bR=t
if(t==null)$.cL=null
u.a.$0()}},
mo:function(){$.jy=!0
try{P.mk()}finally{$.cM=null
$.jy=!1
if($.bR!=null)$.jM().$1(P.kz())}},
ku:function(a){var u=new P.dQ(a)
if($.bR==null){$.bR=$.cL=u
if(!$.jy)$.jM().$1(P.kz())}else $.cL=$.cL.b=u},
mn:function(a){var u,t,s=$.bR
if(s==null){P.ku(a)
$.cM=$.cL
return}u=new P.dQ(a)
t=$.cM
if(t==null){u.b=s
$.bR=$.cM=u}else{u.b=t.b
$.cM=t.b=u
if(u.b==null)$.cL=u}},
mO:function(a){var u=null,t=$.S
if(C.f===t){P.iZ(u,u,C.f,a)
return}P.iZ(u,u,t,H.n(t.bG(a),{func:1,ret:-1}))},
kh:function(a,b){var u=$.S
if(u===C.f)return P.js(a,H.n(b,{func:1,ret:-1}))
return P.js(a,H.n(u.bG(b),{func:1,ret:-1}))},
lN:function(a,b){var u=$.S
if(u===C.f)return P.ki(a,H.n(b,{func:1,ret:-1,args:[P.aY]}))
return P.ki(a,H.n(u.cU(b,P.aY),{func:1,ret:-1,args:[P.aY]}))},
iX:function(a,b,c,d,e){var u={}
u.a=d
P.mn(new P.iY(u,e))},
ks:function(a,b,c,d,e){var u,t=$.S
if(t===c)return d.$0()
$.S=c
u=t
try{t=d.$0()
return t}finally{$.S=u}},
kt:function(a,b,c,d,e,f,g){var u,t=$.S
if(t===c)return d.$1(e)
$.S=c
u=t
try{t=d.$1(e)
return t}finally{$.S=u}},
mm:function(a,b,c,d,e,f,g,h,i){var u,t=$.S
if(t===c)return d.$2(e,f)
$.S=c
u=t
try{t=d.$2(e,f)
return t}finally{$.S=u}},
iZ:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bG(d):c.h8(d,-1)
P.ku(d)},
ik:function ik(a){this.a=a},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
es:function es(){this.c=0},
iQ:function iQ(a,b){this.a=a
this.b=b},
iP:function iP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(a,b,c,d,e){var _=this
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
iu:function iu(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(a){this.a=a},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
dQ:function dQ(a){this.a=a
this.b=null},
hx:function hx(){},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
cq:function cq(){},
hy:function hy(){},
aY:function aY(){},
ad:function ad(a,b){this.a=a
this.b=b},
iS:function iS(){},
iY:function iY(a,b){this.a=a
this.b=b},
iI:function iI(){},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a,b){this.a=a
this.b=b},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
lo:function(a,b){return new H.V([a,b])},
lp:function(a){return H.mA(a,new H.V([null,null]))},
lq:function(a){return new P.iG([a])},
jw:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lU:function(a,b,c){var u=new P.e4(a,b,[c])
u.c=a.e
return u},
lj:function(a,b,c){var u,t
if(P.jz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.l])
C.a.h($.an,a)
try{P.m_(a,u)}finally{if(0>=$.an.length)return H.c($.an,-1)
$.an.pop()}t=P.kf(b,H.mI(u,"$if"),", ")+c
return t.charCodeAt(0)==0?t:t},
jl:function(a,b,c){var u,t
if(P.jz(a))return b+"..."+c
u=new P.bt(b)
C.a.h($.an,a)
try{t=u
t.a=P.kf(t.a,a,", ")}finally{if(0>=$.an.length)return H.c($.an,-1)
$.an.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jz:function(a){var u,t
for(u=$.an.length,t=0;t<u;++t)if(a===$.an[t])return!0
return!1},
m_:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.i(n.gG(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gG(n);++l
if(!n.u()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gG(n);++l
for(;n.u();r=q,q=p){p=n.gG(n);++l
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
k1:function(a){var u,t={}
if(P.jz(a))return"{...}"
u=new P.bt("")
try{C.a.h($.an,a)
u.a+="{"
t.a=!0
J.l6(a,new P.fB(t,u))
u.a+="}"}finally{if(0>=$.an.length)return H.c($.an,-1)
$.an.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iG:function iG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cA:function cA(a){this.a=a
this.c=this.b=null},
e4:function e4(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fx:function fx(){},
t:function t(){},
fA:function fA(){},
fB:function fB(a,b){this.a=a
this.b=b},
a9:function a9(){},
iM:function iM(){},
e5:function e5(){},
c6:function c6(){},
cX:function cX(){},
fb:function fb(){},
i3:function i3(){},
i4:function i4(){},
iR:function iR(a){this.b=0
this.c=a},
li:function(a){if(a instanceof H.c5)return a.i(0)
return"Instance of '"+H.i(H.cn(a))+"'"},
lr:function(a,b,c){var u,t=J.ll(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.l(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
k0:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.c_(a);u.u();)C.a.h(s,H.G(u.gG(u),c))
if(b)return s
return H.m(J.jm(s),"$ib",t,"$ab")},
jr:function(a){var u,t
if(a.constructor===Array){H.m(a,"$iaO",[P.r],"$aaO")
u=a.length
t=P.kb(0,null,u)
return H.k9(t<u?C.a.dK(a,0,t):a)}return P.lL(a,0,null)},
lL:function(a,b,c){var u,t,s=J.c_(a)
for(u=0;u<b;++u)if(!s.u())throw H.h(P.aB(b,0,u,null,null))
t=[]
for(;s.u();)t.push(s.gG(s))
return H.k9(t)},
lF:function(a){return new H.fr(a,H.lm(a,!1,!0,!1,!1,!1))},
kf:function(a,b,c){var u=J.c_(b)
if(!u.u())return a
if(c.length===0){do a+=H.i(u.gG(u))
while(u.u())}else{a+=H.i(u.gG(u))
for(;u.u();)a=a+c+H.i(u.gG(u))}return a},
lX:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.n){u=$.l3().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.hc(H.G(b,H.ay(c,"c6",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lD(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lf:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lg:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cZ:function(a){if(a>=10)return""+a
return"0"+a},
jW:function(a){return new P.bl(1000*a)},
d4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.li(a)},
l8:function(a){return new P.aH(!1,null,null,a)},
je:function(a,b,c){return new P.aH(!0,a,b,c)},
ha:function(a,b){return new P.bM(null,null,!0,a,b,"Value not in range")},
aB:function(a,b,c,d,e){return new P.bM(b,c,!0,a,d,"Invalid value")},
kb:function(a,b,c){if(0>a||a>c)throw H.h(P.aB(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.aB(b,a,c,"end",null))
return b}return c},
ka:function(a,b){if(typeof a!=="number")return a.a5()
if(a<0)throw H.h(P.aB(a,0,null,b,null))},
R:function(a,b,c,d,e){var u=H.a7(e==null?J.c0(b):e)
return new P.fp(u,!0,a,c,"Index out of range")},
am:function(a){return new P.i1(a)},
kk:function(a){return new P.i_(a)},
c7:function(a){return new P.eZ(a)},
w:function(a){return new P.dY(a)},
jK:function(a){H.mM(a)},
a2:function a2(){},
as:function as(a,b){this.a=a
this.b=b},
B:function B(){},
bl:function bl(a){this.a=a},
f8:function f8(){},
f9:function f9(){},
bm:function bm(){},
eO:function eO(){},
dm:function dm(){},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fp:function fp(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i1:function i1(a){this.a=a},
i_:function i_(a){this.a=a},
ht:function ht(a){this.a=a},
eZ:function eZ(a){this.a=a},
h5:function h5(){},
dy:function dy(){},
f3:function f3(a){this.a=a},
dY:function dY(a){this.a=a},
fl:function fl(a,b){this.a=a
this.b=b},
r:function r(){},
f:function f(){},
aN:function aN(){},
b:function b(){},
D:function D(){},
I:function I(){},
a3:function a3(){},
L:function L(){},
ak:function ak(){},
l:function l(){},
bt:function bt(a){this.a=a},
mw:function(a){var u,t=J.U(a)
if(!!t.$ibn){u=t.gd_(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ex(a.data,a.height,a.width)},
mv:function(a){if(a instanceof P.ex)return{data:a.a,height:a.b,width:a.c}
return a},
be:function(a){var u,t,s,r,q
if(a==null)return
u=P.lo(P.l,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.a4(t[r])
u.l(0,q,a[q])}return u},
mu:function(a){var u={}
a.H(0,new P.j_(u))
return u},
jV:function(){var u=$.jU
return u==null?$.jU=J.jd(window.navigator.userAgent,"Opera",0):u},
lh:function(){var u,t=$.jR
if(t!=null)return t
u=$.jS
if(u==null?$.jS=J.jd(window.navigator.userAgent,"Firefox",0):u)t="-moz-"
else{u=$.jT
if(u==null)u=$.jT=!H.z(P.jV())&&J.jd(window.navigator.userAgent,"Trident/",0)
if(u)t="-ms-"
else t=H.z(P.jV())?"-o-":"-webkit-"}return $.jR=t},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a){this.a=a},
fh:function fh(a,b){this.a=a
this.b=b},
fi:function fi(){},
fj:function fj(){},
iF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iH:function iH(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
fu:function fu(){},
b8:function b8(){},
h3:function h3(){},
h9:function h9(){},
hB:function hB(){},
o:function o(){},
bb:function bb(){},
hP:function hP(){},
e2:function e2(){},
e3:function e3(){},
ed:function ed(){},
ee:function ee(){},
eo:function eo(){},
ep:function ep(){},
ev:function ev(){},
ew:function ew(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(a){this.a=a},
eT:function eT(){},
bC:function bC(){},
h4:function h4(){},
dR:function dR(){},
cS:function cS(){},
dq:function dq(){},
bN:function bN(){},
ds:function ds(){},
dz:function dz(){},
dG:function dG(){},
hs:function hs(){},
ek:function ek(){},
el:function el(){}},W={
jg:function(){var u=document.createElement("canvas")
return u},
jX:function(a){H.j(a,"$ie")
return"wheel"},
jZ:function(a){var u=document.createElement("img")
u.src=a
return u},
iE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kq:function(a,b,c,d){var u=W.iE(W.iE(W.iE(W.iE(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a1:function(a,b,c,d,e){var u=W.kw(new W.it(c),W.k)
if(u!=null&&!0)J.l5(a,b,u,!1)
return new W.is(a,b,u,!1,[e])},
kw:function(a,b){var u=$.S
if(u===C.f)return a
return u.cU(a,b)},
q:function q(){},
eK:function eK(){},
eM:function eM(){},
eN:function eN(){},
cR:function cR(){},
bE:function bE(){},
c4:function c4(){},
bk:function bk(){},
c8:function c8(){},
f_:function f_(){},
M:function M(){},
bF:function bF(){},
f0:function f0(){},
aJ:function aJ(){},
aK:function aK(){},
f1:function f1(){},
f2:function f2(){},
f4:function f4(){},
d0:function d0(){},
f5:function f5(){},
d1:function d1(){},
d2:function d2(){},
f6:function f6(){},
f7:function f7(){},
ip:function ip(a,b){this.a=a
this.b=b},
Y:function Y(){},
k:function k(){},
e:function e(){},
aL:function aL(){},
ff:function ff(){},
fg:function fg(){},
fk:function fk(){},
aM:function aM(){},
fn:function fn(){},
bH:function bH(){},
bn:function bn(){},
cd:function cd(){},
aP:function aP(){},
fy:function fy(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(a){this.a=a},
fT:function fT(){},
fU:function fU(a){this.a=a},
aS:function aS(){},
fV:function fV(){},
a6:function a6(){},
io:function io(a){this.a=a},
F:function F(){},
ck:function ck(){},
aT:function aT(){},
h7:function h7(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hi:function hi(){},
aU:function aU(){},
hq:function hq(){},
aV:function aV(){},
hr:function hr(){},
aW:function aW(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
aD:function aD(){},
aX:function aX(){},
aE:function aE(){},
hD:function hD(){},
hE:function hE(){},
hK:function hK(){},
aZ:function aZ(){},
aF:function aF(){},
hN:function hN(){},
hO:function hO(){},
bv:function bv(){},
i2:function i2(){},
ie:function ie(){},
b1:function b1(){},
cy:function cy(){},
iq:function iq(){},
dT:function dT(){},
iD:function iD(){},
ea:function ea(){},
iN:function iN(){},
iO:function iO(){},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jv:function jv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
is:function is(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
it:function it(a){this.a=a},
A:function A(){},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
dS:function dS(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
cF:function cF(){},
cG:function cG(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
cH:function cH(){},
cI:function cI(){},
et:function et(){},
eu:function eu(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){}},O={
jh:function(a){var u=new O.T([a])
u.aY(a)
return u},
T:function T(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cg:function cg(){this.b=this.a=null},
dg:function dg(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fK:function fK(a,b){this.a=a
this.b=b},
fL:function fL(){},
fM:function fM(a,b){this.a=a
this.b=b},
fN:function fN(){},
fO:function fO(a,b){this.a=a
this.b=b},
fP:function fP(){},
fE:function fE(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cf:function cf(){},
fF:function fF(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aQ:function aQ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fH:function fH(){var _=this
_.e=_.d=_.c=_.b=null},
fI:function fI(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fJ:function fJ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
du:function du(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bu:function bu(){}},E={
jY:function(){var u=new E.af()
u.a=""
u.b=!0
u.sdT(0,O.jh(E.af))
u.y.aG(u.ghu(),u.ghx())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbh(0,null)
return u},
lG:function(a,b){var u=new E.hb(a)
u.dQ(a,b)
return u},
lM:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibE)return E.kg(a,!0,!0,!0,!1)
u=W.jg()
t=u.style
t.width="100%"
t.height="100%"
s.gcX(a).h(0,u)
return E.kg(u,!0,!0,!0,!1)},
kg:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dC(),j=H.j(C.h.c7(a,"webgl2",P.lp(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibN")
if(j==null)H.y(P.w("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lG(j,a)
u=new T.hG(j)
u.b=H.a7(j.getParameter(3379))
u.c=H.a7(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dJ(a)
t=new X.ft()
t.c=new X.ao(!1,!1,!1)
t.sfu(P.lq(P.r))
u.b=t
t=new X.fW(u)
t.f=0
t.r=V.b9()
t.x=V.b9()
t.ch=t.Q=1
u.c=t
t=new X.fz(u)
t.r=0
t.x=V.b9()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hM(u)
t.f=V.b9()
t.r=V.b9()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seg(H.d([],[[P.cq,P.L]]))
t=u.z
s=document
r=W.a6
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a1(s,"contextmenu",H.n(u.geN(),q),!1,r))
t=u.z
p=W.k
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a1(a,"focus",H.n(u.geT(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a1(a,"blur",H.n(u.geH(),o),!1,p))
t=u.z
n=W.aP
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a1(s,"keyup",H.n(u.geX(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a1(s,"keydown",H.n(u.geV(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a1(a,"mousedown",H.n(u.gf0(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a1(a,"mouseup",H.n(u.gf4(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a1(a,l,H.n(u.gf2(),q),!1,r))
n=u.z
W.jX(a)
m=W.b1;(n&&C.a).h(n,W.a1(a,H.a4(W.jX(a)),H.n(u.gf6(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a1(s,l,H.n(u.geP(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a1(s,"mouseup",H.n(u.geR(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a1(s,"pointerlockchange",H.n(u.gf8(),o),!1,p))
p=u.z
o=W.aF
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a1(a,"touchstart",H.n(u.gfo(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a1(a,"touchend",H.n(u.gfk(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a1(a,"touchmove",H.n(u.gfm(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.as(Date.now(),!1)
k.cy=0
k.cL()
return k},
eU:function eU(){},
af:function af(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hb:function hb(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
dC:function dC(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hJ:function hJ(a){this.a=a}},Z={
ju:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cK(c)),35044)
a.bindBuffer(b,null)
return new Z.dO(b,u)},
av:function(a){return new Z.bc(a)},
dO:function dO(a,b){this.a=a
this.b=b},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dP:function dP(a){this.a=a},
c3:function c3(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a){this.a=a}},D={
K:function(){var u=new D.c9()
u.sai(null)
u.sb0(null)
u.c=null
u.d=0
return u},
eX:function eX(){},
c9:function c9(){var _=this
_.d=_.c=_.b=_.a=null},
fd:function fd(a){this.a=a},
fe:function fe(a){this.a=a},
v:function v(){this.b=null},
bp:function bp(a){this.b=null
this.$ti=a},
bq:function bq(a){this.b=null
this.$ti=a},
H:function H(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
d_:function d_(){},
a5:function a5(){},
db:function db(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dp:function dp(){},
dx:function dx(){}},X={cU:function cU(a,b){this.a=a
this.b=b},da:function da(a,b){this.a=a
this.b=b},ft:function ft(){var _=this
_.d=_.c=_.b=_.a=null},de:function de(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fz:function fz(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},b6:function b6(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fW:function fW(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ch:function ch(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h8:function h8(){},dE:function dE(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hM:function hM(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dJ:function dJ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jj:function(a){var u=new X.fm(),t=new V.ar(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kd
if(t==null){t=V.kc(0,0,1,1)
$.kd=t}u.r=t
return u},
k5:function(a){var u,t,s=new X.dn()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().h(0,s.gdY())
t=new D.H("mover",u,s.b,[U.aa])
t.b=!0
s.ag(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.J().a)){s.c=1.0471975511965976
t=new D.H("fov",t,1.0471975511965976,[P.B])
t.b=!0
s.ag(t)}t=s.d
if(!(Math.abs(t-0.1)<$.J().a)){s.d=0.1
t=new D.H("near",t,0.1,[P.B])
t.b=!0
s.ag(t)}t=s.e
if(!(Math.abs(t-2000)<$.J().a)){s.e=2000
t=new D.H("far",t,2000,[P.B])
t.b=!0
s.ag(t)}return s},
bD:function bD(){},
fm:function fm(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(){this.b=this.a=null},
dn:function dn(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cr:function cr(){}},V={
mU:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.dF(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.d.a8("null",c)
return C.d.a8(C.c.dA(Math.abs(a-0)<$.J().a?0:a,b),c+b+1)},
bV:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.l])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.P(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.l(p,q,C.d.a8(p[q],t))}return p},
jJ:function(a){return C.c.hR(Math.pow(2,C.D.bT(Math.log(H.mt(a))/Math.log(2))))},
bJ:function(){var u=$.k2
return u==null?$.k2=V.aR(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aR:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b9:function(){var u=$.k7
return u==null?$.k7=new V.a_(0,0):u},
lu:function(){var u=$.cl
return u==null?$.cl=new V.ag(0,0,0):u},
kc:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dr(a,b,c,d)},
dN:function(){var u=$.ko
return u==null?$.ko=new V.O(0,0,0):u},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fc:function fc(a){this.a=a},
di:function di(a,b,c,d,e,f,g,h,i){var _=this
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
a_:function a_(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
ab:function(a){var u=new V.hj()
u.dR(a)
return u},
eL:function eL(){},
b5:function b5(){},
df:function df(){},
b7:function b7(){this.a=null},
hj:function hj(){this.a=null},
cp:function cp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a){this.b=a
this.c=null},
hL:function hL(){this.c=this.b=this.a=null},
cu:function cu(a){this.b=a
this.a=this.c=null},
mP:function(a){P.lN(C.B,new V.j9(a))},
lI:function(a){var u=new V.hn()
u.dS(a,!0)
return u},
j9:function j9(a){this.a=a},
hn:function hn(){this.b=this.a=null},
hp:function hp(a){this.a=a},
ho:function ho(a){this.a=a}},U={
ji:function(){var u=new U.eY()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
eY:function eY(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cW:function cW(){this.b=this.a=null},
cc:function cc(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
dK:function dK(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cV:function cV(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cY:function cY(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},d3:function d3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ap:function ap(){},
kF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="testCanvas",a4=null,a5="modifiers",a6=34067,a7=V.lI("Test 034"),a8=W.jg()
a8.className="pageLargeCanvas"
a8.id=a3
a7.a.appendChild(a8)
u=[P.l]
a7.cS(H.d(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."],u))
a7.cS(H.d(["\xab[Back to Tests|../]"],u))
u=document
a8=u.getElementById(a3)
a7=a8.style
a7.width="100%"
a7.height="100%"
a7.margin="-4px"
t=u.createElement("div")
a7=t.style
a7.border="2px solid"
a7.padding="10px"
C.o.fF(a7,(a7&&C.o).e5(a7,"resize"),"both","")
a7.overflow="auto"
J.l7(a8,t)
t.appendChild(a8)
s=u.getElementById(a3)
if(s==null)H.y(P.w("Failed to find an element with the identifier, testCanvas."))
r=E.lM(s,!0,!0,!0,!1)
q=new U.cc()
q.aY(U.aa)
q.aG(q.gez(),q.gfc())
q.e=null
q.f=V.bJ()
q.r=0
a7=r.r
u=new U.dL()
p=U.ji()
p.sc6(0,!0)
p.sbZ(6.283185307179586)
p.sc0(0)
p.sa1(0,0)
p.sc_(100)
p.sN(0)
p.sbM(0.5)
u.b=p
o=u.gaB()
p.gm().h(0,o)
p=U.ji()
p.sc6(0,!0)
p.sbZ(6.283185307179586)
p.sc0(0)
p.sa1(0,0)
p.sc_(100)
p.sN(0)
p.sbM(0.5)
u.c=p
p.gm().h(0,o)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
n=new X.ao(!1,!1,!1)
m=u.d
u.d=n
p=[X.ao]
o=new D.H(a5,m,n,p)
o.b=!0
u.K(o)
o=u.f
if(o!==!1){u.f=!1
o=new D.H("invertX",o,!1,[P.a2])
o.b=!0
u.K(o)}o=u.r
if(o!==!1){u.r=!1
o=new D.H("invertY",o,!1,[P.a2])
o.b=!0
u.K(o)}u.aO(a7)
q.h(0,u)
a7=r.r
u=new U.dK()
o=U.ji()
o.sc6(0,!0)
o.sbZ(6.283185307179586)
o.sc0(0)
o.sa1(0,0)
o.sc_(100)
o.sN(0)
o.sbM(0.2)
u.b=o
o.gm().h(0,u.gaB())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
n=new X.ao(!0,!1,!1)
m=u.c
u.c=n
o=new D.H(a5,m,n,p)
o.b=!0
u.K(o)
u.aO(a7)
q.h(0,u)
a7=r.r
u=new U.dM()
u.c=0.01
u.e=u.d=0
n=new X.ao(!1,!1,!1)
u.b=n
p=new D.H(a5,a4,n,p)
p.b=!0
u.K(p)
u.aO(a7)
q.h(0,u)
l=V.aR(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
a7=new U.cW()
a7.a=l
q.h(0,a7)
k=X.k5(q)
j=new O.dg()
j.se4(O.jh(V.ai))
j.e.aG(j.geD(),j.geF())
a7=new O.aQ(j,"emission")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
j.f=a7
a7=new O.aQ(j,"ambient")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
j.r=a7
a7=new O.aQ(j,"diffuse")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
j.x=a7
a7=new O.aQ(j,"invDiffuse")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
j.y=a7
a7=new O.fJ(j,"specular")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
a7.ch=100
j.z=a7
a7=new O.fF(j,"bump")
a7.c=new A.ae(!1,!1,!1)
j.Q=a7
j.ch=null
a7=new O.aQ(j,"reflect")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
j.cx=a7
a7=new O.fI(j,"refract")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
a7.ch=1
j.cy=a7
a7=new O.fE(j,"alpha")
a7.c=new A.ae(!1,!1,!1)
a7.f=1
j.db=a7
a7=new D.db()
a7.aY(D.a5)
a7.see(H.d([],[D.d_]))
a7.sfq(H.d([],[D.dp]))
a7.sfN(H.d([],[D.dx]))
a7.y=a7.x=null
a7.c8(a7.geB(),a7.gfa(),a7.gfe())
j.dx=a7
u=new O.fH()
u.b=new V.ar(0,0,0,0)
u.c=1
u.d=10
u.e=!1
j.dy=u
u=a7.x
a7=u==null?a7.x=D.K():u
a7.h(0,j.gfC())
a7=j.dx
u=a7.y
a7=u==null?a7.y=D.K():u
a7.h(0,j.gay())
j.fr=null
a7=j.r
a7.saQ(0,new V.a8(0.3,0.3,0.3))
a7=j.x
a7.saQ(0,new V.a8(0.8,0.8,0.8))
a7=j.x
u=r.f.hr("../resources/Test.png")
p=a7.c
if(!p.b)a7.cO(new A.ae(p.a,!0,!1))
p=a7.d
if(p!==u){if(p!=null)p.gm().O(0,a7.gay())
m=a7.d
a7.d=u
u.gm().h(0,a7.gay())
u=new D.H(a7.b+".texture2D",m,a7.d,[T.dA])
u.b=!0
a7.a.P(u)}i=X.jj(a4)
if(i.b){i.b=!1
a7=new D.H("clearColor",!0,!1,[P.a2])
a7.b=!0
i.ag(a7)}h=E.jY()
g=F.jq()
F.cJ(g,a4,a4,1,1,1,0,0,1)
F.cJ(g,a4,a4,1,1,0,1,0,3)
F.cJ(g,a4,a4,1,1,0,0,1,2)
F.cJ(g,a4,a4,1,1,-1,0,0,0)
F.cJ(g,a4,a4,1,1,0,-1,0,0)
F.cJ(g,a4,a4,1,1,0,0,-1,3)
g.ap()
h.sbh(0,g)
f=new M.d3()
f.a=!0
f.se8(0,O.jh(E.af))
f.e.aG(f.geJ(),f.geL())
f.y=f.x=f.r=f.f=null
e=X.jj(a4)
f.saP(a4)
f.saU(0,e)
f.saV(a4)
f.e.h(0,h)
f.saV(j)
f.saU(0,i)
f.saP(k)
a7=r.f
u=a7.a
d=u.createTexture()
u.bindTexture(a6,d)
u.texParameteri(a6,10242,10497)
u.texParameteri(a6,10243,10497)
u.texParameteri(a6,10241,9729)
u.texParameteri(a6,10240,9729)
u.bindTexture(a6,a4)
c=new T.dB()
c.a=0
c.b=d
c.c=!1
c.d=0
a7.aA(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
a7.aA(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
a7.aA(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
a7.aA(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
a7.aA(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
a7.aA(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=new M.cY()
b.a=!0
a7=E.jY()
g=F.jq()
u=g.a
p=new V.O(-1,-1,1)
p=p.t(0,Math.sqrt(p.w(p)))
a=u.b4(new V.ba(1,2,4,6),new V.ar(1,0,0,1),new V.ag(-1,-1,0),new V.a_(0,1),p,a4)
u=g.a
p=new V.O(1,-1,1)
p=p.t(0,Math.sqrt(p.w(p)))
a0=u.b4(new V.ba(0,3,4,6),new V.ar(0,0,1,1),new V.ag(1,-1,0),new V.a_(1,1),p,a4)
u=g.a
p=new V.O(1,1,1)
p=p.t(0,Math.sqrt(p.w(p)))
a1=u.b4(new V.ba(0,2,5,6),new V.ar(0,1,0,1),new V.ag(1,1,0),new V.a_(1,0),p,a4)
u=g.a
p=V.b9()
o=new V.O(-1,1,1)
o=o.t(0,Math.sqrt(o.w(o)))
a2=u.b4(new V.ba(0,2,4,7),new V.ar(1,1,0,1),new V.ag(-1,1,0),p,o,a4)
g.d.h2(H.d([a,a0,a1,a2],[F.au]))
g.ap()
a7.sbh(0,g)
b.e=a7
b.saP(a4)
b.saU(0,a4)
b.saV(a4)
a7=new O.du()
a7.b=1.0471975511965976
a7.d=new V.a8(1,1,1)
m=a7.c
a7.c=c
c.gm().h(0,a7.gay())
u=new D.H("boxTexture",m,a7.c,[T.dB])
u.b=!0
a7.P(u)
b.saV(a7)
b.saU(0,i)
b.saP(k)
a7=M.ap
u=H.d([b,f],[a7])
p=new M.cV()
p.aY(a7)
p.e=!0
p.f=!1
p.r=null
p.aG(p.gfg(),p.gfi())
p.bF(0,u)
a7=r.d
if(a7!==p){if(a7!=null)a7.gm().O(0,r.gcg())
r.d=p
p.gm().h(0,r.gcg())
r.ci()}V.mP(r)}},A={
ls:function(a,b){var u=a.aq,t=new A.dh(b,u)
t.ce(b,u)
t.dP(a,b)
return t},
lt:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gaf(a0)+a1.gaf(a1)+a2.gaf(a2)+a3.gaf(a3)+a4.gaf(a4)+a5.gaf(a5)+a6.gaf(a6)+a7.gaf(a7)+a8.gaf(a8)+"_"
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
g=$.aG()
if(l){u=$.bi()
g=new Z.bc(g.a|u.a)}if(k){u=$.bh()
g=new Z.bc(g.a|u.a)}if(j){u=$.bj()
g=new Z.bc(g.a|u.a)}if(i){u=$.bg()
g=new Z.bc(g.a|u.a)}return new A.fG(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
iV:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
iW:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.iV(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ja(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
m3:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iV(b,t,"emission")
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
m0:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iW(b,t,"ambient")
b.a+="\n"},
m1:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
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
m4:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
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
ma:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
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
m6:function(a,b){var u,t,s
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
m8:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iV(b,t,"reflect")
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
m9:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iV(b,t,"refract")
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
m2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.ja(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ak()
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
r=[P.l]
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
c.a+="      highLight = intensity*("+C.a.q(m," + ")+");\n"}else c.a+="   highLight = "+C.a.q(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.q(o," + ")+");\n"
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
m7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
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
if(typeof u!=="number")return u.ak()
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
c.a=r+"\n"}r=[P.l]
l=H.d([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.q(l," * ")+";\n"
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
mb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
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
if(typeof u!=="number")return u.ak()
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
c.a=u+"\n"}u=[P.l]
j=H.d([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.q(j," * ")+";\n"
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
m5:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.l])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mc:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bt("")
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
A.m3(a,j)
A.m0(a,j)
A.m1(a,j)
A.m4(a,j)
A.ma(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.m8(a,j)
A.m9(a,j)}A.m6(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.m2(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.m7(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.mb(a,q[o],j)
A.m5(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.l])
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
j.a+=m+(r[0].toUpperCase()+C.d.aI(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aI(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aI(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.q(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
md:function(a,b){var u,t,s
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
mf:function(a,b){var u
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
me:function(a,b){var u
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
mh:function(a,b){var u,t
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
mi:function(a,b){var u,t
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
mg:function(a,b){var u
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
mj:function(a,b){var u
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
return a[0].toUpperCase()+C.d.aI(a,1)},
jt:function(a,b,c,d,e){var u=new A.hT(a,c,e)
u.f=d
u.sh_(P.lr(d,0,P.r))
return u},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a,b){var _=this
_.hZ=_.d6=_.d5=_.d4=_.aq=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.i6=_.i5=_.i4=_.bS=_.bR=_.bQ=_.bP=_.bO=_.bN=_.i3=_.dj=_.di=_.i2=_.dh=_.dg=_.df=_.i1=_.de=_.dd=_.dc=_.i0=_.da=_.d9=_.i_=_.d8=_.d7=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
az:function az(a,b){this.a=a
this.b=b},
aA:function aA(a,b){this.a=a
this.b=b},
aC:function aC(a,b){this.a=a
this.b=b},
fG:function fG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aq=b3
_.d4=b4},
bO:function bO(a,b,c,d,e,f){var _=this
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
co:function co(){},
dv:function dv(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dF:function dF(){},
hY:function hY(a){this.a=a},
at:function at(a,b,c){this.a=a
this.c=b
this.d=c},
hV:function hV(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
cv:function cv(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){this.a=a
this.c=b
this.d=c},
cw:function cw(a,b,c){this.a=a
this.c=b
this.d=c},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
bw:function bw(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iU:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cJ:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.O(h,g+a1,f+a2)
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
j.d=i}m=F.iU(i)
l=F.iU(j.b)
k=F.mR(d,a0,new F.iT(j,F.iU(j.c),F.iU(j.d),l,m,c),b)
if(k!=null)a.ht(k)},
mR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.jq()
t=H.d([],[F.au])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.i5(g,g,new V.ar(p,0,0,1),g,g,new V.a_(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bL(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.i5(g,g,new V.ar(j,i,h,1),g,g,new V.a_(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bL(d))}}u.d.h3(a+1,b+1,t)
return u},
ca:function(a,b,c){var u=new F.Z(),t=a.a
if(t==null)H.y(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.y(P.w("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.Y()
return u},
ln:function(a,b){var u=new F.b4(),t=a.a
if(t==null)H.y(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.y(P.w("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.Y()
return u},
jq:function(){var u=new F.dt(),t=new F.i6(u)
t.b=!1
t.sh0(H.d([],[F.au]))
u.a=t
t=new F.hm(u)
t.sbA(H.d([],[F.bs]))
u.b=t
t=new F.hl(u)
t.seo(H.d([],[F.b4]))
u.c=t
t=new F.hk(u)
t.seh(H.d([],[F.Z]))
u.d=t
u.e=null
return u},
i5:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.au(),r=new F.ib()
r.sbA(H.d([],[F.bs]))
s.b=r
r=new F.ia()
u=[F.b4]
r.sep(H.d([],u))
r.seq(H.d([],u))
s.c=r
r=new F.i7()
u=[F.Z]
r.sei(H.d([],u))
r.sej(H.d([],u))
r.sek(H.d([],u))
s.d=r
h=$.l0()
s.e=0
r=$.aG()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bi().a)!==0?e:t
s.x=(u&$.bh().a)!==0?b:t
s.y=(u&$.bj().a)!==0?f:t
s.z=(u&$.bA().a)!==0?g:t
s.Q=(u&$.l1().a)!==0?c:t
s.ch=(u&$.bZ().a)!==0?i:0
s.cx=(u&$.bg().a)!==0?a:t
return s},
iT:function iT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Z:function Z(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b4:function b4(){this.b=this.a=null},
bs:function bs(){this.a=null},
dt:function dt(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(a){this.a=a
this.b=null},
hl:function hl(a){this.a=a
this.b=null},
hm:function hm(a){this.a=a
this.b=null},
au:function au(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
id:function id(a){this.a=a},
ic:function ic(a){this.a=a},
i6:function i6(a){this.a=a
this.c=this.b=null},
i7:function i7(){this.d=this.c=this.b=null},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(){this.c=this.b=null},
ib:function ib(){this.b=null}},T={cs:function cs(){},dA:function dA(){},hF:function hF(){var _=this
_.y=_.d=_.c=_.b=_.a=null},dB:function dB(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hG:function hG(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hI:function hI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},hH:function hH(a,b,c,d,e,f,g){var _=this
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
H.jo.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gE:function(a){return H.cm(a)},
i:function(a){return"Instance of '"+H.i(H.cn(a))+"'"}}
J.fq.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$ia2:1}
J.d8.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0}}
J.d9.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.h6.prototype={}
J.cx.prototype={}
J.br.prototype={
i:function(a){var u=a[$.kQ()]
if(u==null)return this.dM(a)
return"JavaScript function for "+H.i(J.aq(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijk:1}
J.aO.prototype={
h:function(a,b){H.G(b,H.x(a,0))
if(!!a.fixed$length)H.y(P.am("add"))
a.push(b)},
O:function(a,b){var u
if(!!a.fixed$length)H.y(P.am("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
bF:function(a,b){var u,t
H.m(b,"$if",[H.x(a,0)],"$af")
if(!!a.fixed$length)H.y(P.am("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.c7(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.i(a[u]))
return t.join(b)},
hp:function(a){return this.q(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
dK:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aB(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aB(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.x(a,0)])
return H.d(a.slice(b,c),[H.x(a,0)])},
gbW:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.lk())},
bi:function(a,b){var u=H.x(a,0)
H.n(b,{func:1,ret:P.r,args:[u,u]})
if(!!a.immutable$list)H.y(P.am("sort"))
H.dw(a,0,a.length-1,b,u)},
ad:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.jl(a,"[","]")},
gR:function(a){return new J.ah(a,a.length,[H.x(a,0)])},
gE:function(a){return H.cm(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.y(P.am("set length"))
if(b<0)throw H.h(P.aB(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.bU(a,b))
return a[b]},
l:function(a,b,c){H.G(c,H.x(a,0))
if(!!a.immutable$list)H.y(P.am("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bU(a,b))
a[b]=c},
$if:1,
$ib:1}
J.jn.prototype={}
J.ah.prototype={
gG:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.u(s))
u=t.c
if(u>=r){t.scl(null)
return!1}t.scl(s[u]);++t.c
return!0},
scl:function(a){this.d=H.G(a,H.x(this,0))},
$iaN:1}
J.ce.prototype={
ha:function(a,b){var u
H.kG(b)
if(typeof b!=="number")throw H.h(H.bd(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb8(b)
if(this.gb8(a)===u)return 0
if(this.gb8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb8:function(a){return a===0?1/a<0:a<0},
hR:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.am(""+a+".toInt()"))},
bT:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.am(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.am(""+a+".round()"))},
dA:function(a,b){var u
if(b>20)throw H.h(P.aB(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb8(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.h(H.bd(b))
return a*b},
dF:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dO:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cP(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cP(a,b)},
cP:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.am("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
b2:function(a,b){var u
if(a>0)u=this.fL(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fL:function(a,b){return b>31?0:a>>>b},
$iB:1,
$ia3:1}
J.d7.prototype={$ir:1}
J.d6.prototype={}
J.bI.prototype={
bK:function(a,b){if(b<0)throw H.h(H.bU(a,b))
if(b>=a.length)H.y(H.bU(a,b))
return a.charCodeAt(b)},
aZ:function(a,b){if(b>=a.length)throw H.h(H.bU(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.h(P.je(b,null,null))
return a+b},
ca:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.ha(b,null))
if(b>c)throw H.h(P.ha(b,null))
if(c>a.length)throw H.h(P.ha(c,null))
return a.substring(b,c)},
aI:function(a,b){return this.ca(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a8:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
hb:function(a,b,c){if(c>a.length)throw H.h(P.aB(c,0,a.length,null,null))
return H.kL(a,b,c)},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ik4:1,
$il:1}
H.X.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.d.bK(this.a,b)},
$adI:function(){return[P.r]},
$at:function(){return[P.r]},
$af:function(){return[P.r]},
$ab:function(){return[P.r]}}
H.fa.prototype={}
H.dd.prototype={
gG:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.j1(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.c7(s))
u=t.c
if(u>=q){t.saL(null)
return!1}t.saL(r.C(s,u));++t.c
return!0},
saL:function(a){this.d=H.G(a,H.x(this,0))},
$iaN:1}
H.fC.prototype={
gR:function(a){return new H.fD(J.c_(this.a),this.b,this.$ti)},
gk:function(a){return J.c0(this.a)},
C:function(a,b){return this.b.$1(J.jN(this.a,b))},
$af:function(a,b){return[b]}}
H.fD.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saL(u.c.$1(t.gG(t)))
return!0}u.saL(null)
return!1},
gG:function(a){return this.a},
saL:function(a){this.a=H.G(a,H.x(this,1))},
$aaN:function(a,b){return[b]}}
H.ig.prototype={
gR:function(a){return new H.ih(J.c_(this.a),this.b,this.$ti)}}
H.ih.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.z(t.$1(u.gG(u))))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.bG.prototype={}
H.dI.prototype={}
H.dH.prototype={}
H.hQ.prototype={
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
H.h2.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fs.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.i0.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jb.prototype={
$1:function(a){if(!!J.U(a).$ibm)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.em.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iak:1}
H.c5.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ijk:1,
ghV:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hC.prototype={}
H.hu.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bY(u)+"'"}}
H.c1.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c1))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.cm(this.a)
else u=typeof t!=="object"?J.bB(t):H.cm(t)
return(u^H.cm(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cn(u))+"'")}}
H.hS.prototype={
i:function(a){return this.a}}
H.eW.prototype={
i:function(a){return this.a}}
H.hh.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.ii.prototype={
i:function(a){return"Assertion failed: "+P.d4(this.a)}}
H.V.prototype={
gk:function(a){return this.a},
gat:function(a){return new H.dc(this,[H.x(this,0)])},
cZ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cu(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cu(t,b)}else return s.hn(b)},
hn:function(a){var u=this.d
if(u==null)return!1
return this.bU(this.bo(u,J.bB(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b_(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b_(r,b)
s=t==null?null:t.b
return s}else return q.ho(b)},
ho:function(a){var u,t,s=this.d
if(s==null)return
u=this.bo(s,J.bB(a)&0x3ffffff)
t=this.bU(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
H.G(b,H.x(o,0))
H.G(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.cm(u==null?o.b=o.by():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cm(t==null?o.c=o.by():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.by()
r=J.bB(b)&0x3ffffff
q=o.bo(s,r)
if(q==null)o.bD(s,r,[o.bz(b,c)])
else{p=o.bU(q,b)
if(p>=0)q[p].b=c
else q.push(o.bz(b,c))}}},
H:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.c7(s))
u=u.c}},
cm:function(a,b,c){var u,t=this
H.G(b,H.x(t,0))
H.G(c,H.x(t,1))
u=t.b_(a,b)
if(u==null)t.bD(a,b,t.bz(b,c))
else u.b=c},
bz:function(a,b){var u=this,t=new H.fv(H.G(a,H.x(u,0)),H.G(b,H.x(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bU:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.k1(this)},
b_:function(a,b){return a[b]},
bo:function(a,b){return a[b]},
bD:function(a,b,c){a[b]=c},
ec:function(a,b){delete a[b]},
cu:function(a,b){return this.b_(a,b)!=null},
by:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bD(t,u,t)
this.ec(t,u)
return t}}
H.fv.prototype={}
H.dc.prototype={
gk:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.fw(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fw.prototype={
gG:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.c7(t))
else{t=u.c
if(t==null){u.scz(null)
return!1}else{u.scz(t.a)
u.c=u.c.c
return!0}}},
scz:function(a){this.d=H.G(a,H.x(this,0))},
$iaN:1}
H.j3.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.j4.prototype={
$2:function(a,b){return this.a(a,b)},
$S:27}
H.j5.prototype={
$1:function(a){return this.a(H.a4(a))},
$S:28}
H.fr.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ik4:1}
H.cj.prototype={$ind:1}
H.dj.prototype={
gk:function(a){return a.length},
$iE:1,
$aE:function(){}}
H.ci.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]},
$abG:function(){return[P.B]},
$at:function(){return[P.B]},
$if:1,
$af:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.dk.prototype={
$abG:function(){return[P.r]},
$at:function(){return[P.r]},
$if:1,
$af:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.fX.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.fY.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.fZ.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.h_.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.h0.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.dl.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bx(b,a,a.length)
return a[b]},
$ine:1}
H.h1.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bx(b,a,a.length)
return a[b]},
$inf:1}
H.cB.prototype={}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
P.ik.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:22}
P.ij.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:26}
P.il.prototype={
$0:function(){this.a.$0()},
$S:2}
P.im.prototype={
$0:function(){this.a.$0()},
$S:2}
P.es.prototype={
dW:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bT(new P.iQ(this,b),0),a)
else throw H.h(P.am("`setTimeout()` not found."))},
dX:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bT(new P.iP(this,a,Date.now(),b),0),a)
else throw H.h(P.am("Periodic timer."))},
$iaY:1}
P.iQ.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.iP.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dO(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b2.prototype={
hs:function(a){if((this.c&15)!==6)return!0
return this.b.b.c4(H.n(this.d,{func:1,ret:P.a2,args:[P.L]}),a.a,P.a2,P.L)},
hm:function(a){var u=this.e,t=P.L,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.eI(u,{func:1,args:[P.L,P.ak]}))return H.jE(r.hM(u,a.a,a.b,null,t,P.ak),s)
else return H.jE(r.c4(H.n(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.aw.prototype={
dz:function(a,b,c){var u,t,s,r=H.x(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.S
if(u!==C.f){H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.ml(b,u)}t=new P.aw($.S,[c])
s=b==null?1:3
this.cn(new P.b2(t,s,a,b,[r,c]))
return t},
hQ:function(a,b){return this.dz(a,null,b)},
cn:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$ib2")
t.c=a}else{if(s===2){u=H.j(t.c,"$iaw")
s=u.a
if(s<4){u.cn(a)
return}t.a=s
t.c=u.c}P.iZ(null,null,t.b,H.n(new P.iu(t,a),{func:1,ret:-1}))}},
cJ:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$ib2")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iaw")
u=q.a
if(u<4){q.cJ(a)
return}p.a=u
p.c=q.c}o.a=p.b1(a)
P.iZ(null,null,p.b,H.n(new P.iy(o,p),{func:1,ret:-1}))}},
bC:function(){var u=H.j(this.c,"$ib2")
this.c=null
return this.b1(u)},
b1:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cq:function(a){var u,t,s=this,r=H.x(s,0)
H.jE(a,{futureOr:1,type:r})
u=s.$ti
if(H.jB(a,"$icb",u,"$acb"))if(H.jB(a,"$iaw",u,null))P.kp(a,s)
else P.lS(a,s)
else{t=s.bC()
H.G(a,r)
s.a=4
s.c=a
P.cz(s,t)}},
cr:function(a,b){var u,t=this
H.j(b,"$iak")
u=t.bC()
t.a=8
t.c=new P.ad(a,b)
P.cz(t,u)},
$icb:1}
P.iu.prototype={
$0:function(){P.cz(this.a,this.b)},
$S:2}
P.iy.prototype={
$0:function(){P.cz(this.b,this.a.a)},
$S:2}
P.iv.prototype={
$1:function(a){var u=this.a
u.a=0
u.cq(a)},
$S:22}
P.iw.prototype={
$2:function(a,b){H.j(b,"$iak")
this.a.cr(a,b)},
$1:function(a){return this.$2(a,null)},
$S:41}
P.ix.prototype={
$0:function(){this.a.cr(this.b,this.c)},
$S:2}
P.iB.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dv(H.n(s.d,{func:1}),null)}catch(r){u=H.bf(r)
t=H.bW(r)
if(o.d){s=H.j(o.a.a.c,"$iad").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$iad")
else q.b=new P.ad(u,t)
q.a=!0
return}if(!!J.U(n).$icb){if(n instanceof P.aw&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$iad")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.hQ(new P.iC(p),null)
s.a=!1}},
$S:3}
P.iC.prototype={
$1:function(a){return this.a},
$S:30}
P.iA.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.G(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.c4(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bf(o)
t=H.bW(o)
s=n.a
s.b=new P.ad(u,t)
s.a=!0}},
$S:3}
P.iz.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$iad")
r=m.c
if(H.z(r.hs(u))&&r.e!=null){q=m.b
q.b=r.hm(u)
q.a=!1}}catch(p){t=H.bf(p)
s=H.bW(p)
r=H.j(m.a.a.c,"$iad")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ad(t,s)
n.a=!0}},
$S:3}
P.dQ.prototype={}
P.hx.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aw($.S,[P.r])
r.a=0
u=H.x(s,0)
t=H.n(new P.hz(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hA(r,q),{func:1,ret:-1})
W.a1(s.a,s.b,t,!1,u)
return q}}
P.hz.prototype={
$1:function(a){H.G(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.x(this.b,0)]}}}
P.hA.prototype={
$0:function(){this.b.cq(this.a.a)},
$S:2}
P.cq.prototype={}
P.hy.prototype={}
P.aY.prototype={}
P.ad.prototype={
i:function(a){return H.i(this.a)},
$ibm:1}
P.iS.prototype={$ins:1}
P.iY.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dm():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:2}
P.iI.prototype={
hN:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.S){a.$0()
return}P.ks(r,r,this,a,-1)}catch(s){u=H.bf(s)
t=H.bW(s)
P.iX(r,r,this,u,H.j(t,"$iak"))}},
hO:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.f===$.S){a.$1(b)
return}P.kt(r,r,this,a,b,-1,c)}catch(s){u=H.bf(s)
t=H.bW(s)
P.iX(r,r,this,u,H.j(t,"$iak"))}},
h8:function(a,b){return new P.iK(this,H.n(a,{func:1,ret:b}),b)},
bG:function(a){return new P.iJ(this,H.n(a,{func:1,ret:-1}))},
cU:function(a,b){return new P.iL(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
dv:function(a,b){H.n(a,{func:1,ret:b})
if($.S===C.f)return a.$0()
return P.ks(null,null,this,a,b)},
c4:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.S===C.f)return a.$1(b)
return P.kt(null,null,this,a,b,c,d)},
hM:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.S===C.f)return a.$2(b,c)
return P.mm(null,null,this,a,b,c,d,e,f)}}
P.iK.prototype={
$0:function(){return this.a.dv(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iJ.prototype={
$0:function(){return this.a.hN(this.b)},
$S:3}
P.iL.prototype={
$1:function(a){var u=this.c
return this.a.hO(this.b,H.G(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iG.prototype={
gR:function(a){var u=this,t=new P.e4(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.G(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.co(u==null?s.b=P.jw():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.co(t==null?s.c=P.jw():t,b)}else return s.e_(0,b)},
e_:function(a,b){var u,t,s,r=this
H.G(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.jw()
t=r.cs(b)
s=u[t]
if(s==null)u[t]=[r.bk(b)]
else{if(r.cA(s,b)>=0)return!1
s.push(r.bk(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fw(this.c,b)
else return this.fv(0,b)},
fv:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.em(r,b)
t=s.cA(u,b)
if(t<0)return!1
s.cQ(u.splice(t,1)[0])
return!0},
co:function(a,b){H.G(b,H.x(this,0))
if(H.j(a[b],"$icA")!=null)return!1
a[b]=this.bk(b)
return!0},
fw:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$icA")
if(u==null)return!1
this.cQ(u)
delete a[b]
return!0},
cC:function(){this.r=1073741823&this.r+1},
bk:function(a){var u,t=this,s=new P.cA(H.G(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cC()
return s},
cQ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cC()},
cs:function(a){return J.bB(a)&1073741823},
em:function(a,b){return a[this.cs(b)]},
cA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.cA.prototype={}
P.e4.prototype={
gG:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.c7(t))
else{t=u.c
if(t==null){u.scp(null)
return!1}else{u.scp(H.G(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
scp:function(a){this.d=H.G(a,H.x(this,0))},
$iaN:1}
P.fx.prototype={$if:1,$ib:1}
P.t.prototype={
gR:function(a){return new H.dd(a,this.gk(a),[H.cN(this,a,"t",0)])},
C:function(a,b){return this.j(a,b)},
hT:function(a,b){var u,t=this,s=H.d([],[H.cN(t,a,"t",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
hS:function(a){return this.hT(a,!0)},
i:function(a){return P.jl(a,"[","]")}}
P.fA.prototype={}
P.fB.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:18}
P.a9.prototype={
H:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.cN(s,a,"a9",0),H.cN(s,a,"a9",1)]})
for(u=J.c_(s.gat(a));u.u();){t=u.gG(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.c0(this.gat(a))},
i:function(a){return P.k1(a)},
$iD:1}
P.iM.prototype={
i:function(a){return P.jl(this,"{","}")},
C:function(a,b){var u,t,s,r=this
P.ka(b,"index")
for(u=P.lU(r,r.r,H.x(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.h(P.R(b,r,"index",null,t))},
$if:1,
$ike:1}
P.e5.prototype={}
P.c6.prototype={}
P.cX.prototype={}
P.fb.prototype={
$ac6:function(){return[P.l,[P.b,P.r]]}}
P.i3.prototype={}
P.i4.prototype={
hc:function(a){var u,t,s=P.kb(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iR(u)
if(t.el(a,0,s)!==s)t.cR(C.d.bK(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lY(0,t.b,u.length)))},
$acX:function(){return[P.l,[P.b,P.r]]}}
P.iR.prototype={
cR:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
el:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.bK(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.aZ(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cR(r,C.d.aZ(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a2.prototype={}
P.as.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.as&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.e.b2(u,30))&1073741823},
i:function(a){var u=this,t=P.lf(H.lC(u)),s=P.cZ(H.lA(u)),r=P.cZ(H.lw(u)),q=P.cZ(H.lx(u)),p=P.cZ(H.lz(u)),o=P.cZ(H.lB(u)),n=P.lg(H.ly(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.B.prototype={}
P.bl.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bl&&this.a===b.a},
gE:function(a){return C.e.gE(this.a)},
i:function(a){var u,t,s,r=new P.f9(),q=this.a
if(q<0)return"-"+new P.bl(0-q).i(0)
u=r.$1(C.e.a0(q,6e7)%60)
t=r.$1(C.e.a0(q,1e6)%60)
s=new P.f8().$1(q%1e6)
return""+C.e.a0(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.f8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.f9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bm.prototype={}
P.eO.prototype={
i:function(a){return"Assertion failed"}}
P.dm.prototype={
i:function(a){return"Throw of null."}}
P.aH.prototype={
gbm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbl:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbm()+o+u
if(!q.a)return t
s=q.gbl()
r=P.d4(q.b)
return t+s+": "+r}}
P.bM.prototype={
gbm:function(){return"RangeError"},
gbl:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.fp.prototype={
gbm:function(){return"RangeError"},
gbl:function(){var u,t=H.a7(this.b)
if(typeof t!=="number")return t.a5()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gk:function(a){return this.f}}
P.i1.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i_.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ht.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eZ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.d4(u)+"."}}
P.h5.prototype={
i:function(a){return"Out of Memory"},
$ibm:1}
P.dy.prototype={
i:function(a){return"Stack Overflow"},
$ibm:1}
P.f3.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dY.prototype={
i:function(a){return"Exception: "+this.a}}
P.fl.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.ca(s,0,75)+"...":s
return t+"\n"+r}}
P.r.prototype={}
P.f.prototype={
gk:function(a){var u,t=this.gR(this)
for(u=0;t.u();)++u
return u},
C:function(a,b){var u,t,s
P.ka(b,"index")
for(u=this.gR(this),t=0;u.u();){s=u.gG(u)
if(b===t)return s;++t}throw H.h(P.R(b,this,"index",null,t))},
i:function(a){return P.lj(this,"(",")")}}
P.aN.prototype={}
P.b.prototype={$if:1}
P.D.prototype={}
P.I.prototype={
gE:function(a){return P.L.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.a3.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
p:function(a,b){return this===b},
gE:function(a){return H.cm(this)},
i:function(a){return"Instance of '"+H.i(H.cn(this))+"'"},
toString:function(){return this.i(this)}}
P.ak.prototype={}
P.l.prototype={$ik4:1}
P.bt.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eK.prototype={
gk:function(a){return a.length}}
W.eM.prototype={
i:function(a){return String(a)}}
W.eN.prototype={
i:function(a){return String(a)}}
W.cR.prototype={}
W.bE.prototype={
c7:function(a,b,c){if(c!=null)return a.getContext(b,P.mu(c))
return a.getContext(b)},
dE:function(a,b){return this.c7(a,b,null)},
$ibE:1}
W.c4.prototype={$ic4:1}
W.bk.prototype={
gk:function(a){return a.length}}
W.c8.prototype={$ic8:1}
W.f_.prototype={
gk:function(a){return a.length}}
W.M.prototype={$iM:1}
W.bF.prototype={
e5:function(a,b){var u=$.kP(),t=u[b]
if(typeof t==="string")return t
t=this.fP(a,b)
u[b]=t
return t},
fP:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.lh()+b
if(u in a)return u
return b},
fF:function(a,b,c,d){a.setProperty(b,c,d)},
gk:function(a){return a.length}}
W.f0.prototype={}
W.aJ.prototype={}
W.aK.prototype={}
W.f1.prototype={
gk:function(a){return a.length}}
W.f2.prototype={
gk:function(a){return a.length}}
W.f4.prototype={
gk:function(a){return a.length}}
W.d0.prototype={$id0:1}
W.f5.prototype={
i:function(a){return String(a)}}
W.d1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[[P.aj,P.a3]]},
$at:function(){return[[P.aj,P.a3]]},
$if:1,
$af:function(){return[[P.aj,P.a3]]},
$ib:1,
$ab:function(){return[[P.aj,P.a3]]},
$aA:function(){return[[P.aj,P.a3]]}}
W.d2.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaw(a))+" x "+H.i(this.gas(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iaj)return!1
return a.left===u.gb9(b)&&a.top===u.gbe(b)&&this.gaw(a)===u.gaw(b)&&this.gas(a)===u.gas(b)},
gE:function(a){return W.kq(C.c.gE(a.left),C.c.gE(a.top),C.c.gE(this.gaw(a)),C.c.gE(this.gas(a)))},
gcV:function(a){return a.bottom},
gas:function(a){return a.height},
gb9:function(a){return a.left},
gbd:function(a){return a.right},
gbe:function(a){return a.top},
gaw:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.a3]}}
W.f6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[P.l]},
$at:function(){return[P.l]},
$if:1,
$af:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aA:function(){return[P.l]}}
W.f7.prototype={
gk:function(a){return a.length}}
W.ip.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.j(u[b],"$iY")},
h:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.hS(this)
return new J.ah(u,u.length,[H.x(u,0)])},
$at:function(){return[W.Y]},
$af:function(){return[W.Y]},
$ab:function(){return[W.Y]}}
W.Y.prototype={
gcX:function(a){return new W.ip(a,a.children)},
gcY:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a5()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a5()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.a3])},
i:function(a){return a.localName},
$iY:1}
W.k.prototype={$ik:1}
W.e.prototype={
h1:function(a,b,c,d){H.n(c,{func:1,args:[W.k]})
if(c!=null)this.e0(a,b,c,!1)},
e0:function(a,b,c,d){return a.addEventListener(b,H.bT(H.n(c,{func:1,args:[W.k]}),1),!1)},
$ie:1}
W.aL.prototype={$iaL:1}
W.ff.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aL]},
$at:function(){return[W.aL]},
$if:1,
$af:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aA:function(){return[W.aL]}}
W.fg.prototype={
gk:function(a){return a.length}}
W.fk.prototype={
gk:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.fn.prototype={
gk:function(a){return a.length}}
W.bH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.F]},
$at:function(){return[W.F]},
$if:1,
$af:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ibH:1,
$aA:function(){return[W.F]}}
W.bn.prototype={$ibn:1,
gd_:function(a){return a.data}}
W.cd.prototype={$icd:1}
W.aP.prototype={$iaP:1}
W.fy.prototype={
i:function(a){return String(a)}}
W.fQ.prototype={
gk:function(a){return a.length}}
W.fR.prototype={
j:function(a,b){return P.be(a.get(H.a4(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gat:function(a){var u=H.d([],[P.l])
this.H(a,new W.fS(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.l,null]},
$iD:1,
$aD:function(){return[P.l,null]}}
W.fS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.fT.prototype={
j:function(a,b){return P.be(a.get(H.a4(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gat:function(a){var u=H.d([],[P.l])
this.H(a,new W.fU(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.l,null]},
$iD:1,
$aD:function(){return[P.l,null]}}
W.fU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aS.prototype={$iaS:1}
W.fV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aS]},
$at:function(){return[W.aS]},
$if:1,
$af:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aA:function(){return[W.aS]}}
W.a6.prototype={$ia6:1}
W.io.prototype={
gR:function(a){var u=this.a.childNodes
return new W.d5(u,u.length,[H.cN(C.G,u,"A",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$at:function(){return[W.F]},
$af:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
hK:function(a,b){var u,t
try{u=a.parentNode
J.l4(u,b,a)}catch(t){H.bf(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dL(a):u},
fA:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.ck.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.F]},
$at:function(){return[W.F]},
$if:1,
$af:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aA:function(){return[W.F]}}
W.aT.prototype={$iaT:1,
gk:function(a){return a.length}}
W.h7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aT]},
$at:function(){return[W.aT]},
$if:1,
$af:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aA:function(){return[W.aT]}}
W.hf.prototype={
j:function(a,b){return P.be(a.get(H.a4(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gat:function(a){var u=H.d([],[P.l])
this.H(a,new W.hg(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.l,null]},
$iD:1,
$aD:function(){return[P.l,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hi.prototype={
gk:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.hq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aU]},
$at:function(){return[W.aU]},
$if:1,
$af:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aA:function(){return[W.aU]}}
W.aV.prototype={$iaV:1}
W.hr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aV]},
$at:function(){return[W.aV]},
$if:1,
$af:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aA:function(){return[W.aV]}}
W.aW.prototype={$iaW:1,
gk:function(a){return a.length}}
W.hv.prototype={
j:function(a,b){return a.getItem(H.a4(b))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gat:function(a){var u=H.d([],[P.l])
this.H(a,new W.hw(u))
return u},
gk:function(a){return a.length},
$aa9:function(){return[P.l,P.l]},
$iD:1,
$aD:function(){return[P.l,P.l]}}
W.hw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:34}
W.aD.prototype={$iaD:1}
W.aX.prototype={$iaX:1}
W.aE.prototype={$iaE:1}
W.hD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aE]},
$at:function(){return[W.aE]},
$if:1,
$af:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aA:function(){return[W.aE]}}
W.hE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aX]},
$at:function(){return[W.aX]},
$if:1,
$af:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aA:function(){return[W.aX]}}
W.hK.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.aF.prototype={$iaF:1}
W.hN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aZ]},
$at:function(){return[W.aZ]},
$if:1,
$af:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aA:function(){return[W.aZ]}}
W.hO.prototype={
gk:function(a){return a.length}}
W.bv.prototype={}
W.i2.prototype={
i:function(a){return String(a)}}
W.ie.prototype={
gk:function(a){return a.length}}
W.b1.prototype={
ghg:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.am("deltaY is not supported"))},
ghf:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.am("deltaX is not supported"))},
$ib1:1}
W.cy.prototype={
fB:function(a,b){return a.requestAnimationFrame(H.bT(H.n(b,{func:1,ret:-1,args:[P.a3]}),1))},
ef:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.M]},
$at:function(){return[W.M]},
$if:1,
$af:function(){return[W.M]},
$ib:1,
$ab:function(){return[W.M]},
$aA:function(){return[W.M]}}
W.dT.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iaj)return!1
return a.left===u.gb9(b)&&a.top===u.gbe(b)&&a.width===u.gaw(b)&&a.height===u.gas(b)},
gE:function(a){return W.kq(C.c.gE(a.left),C.c.gE(a.top),C.c.gE(a.width),C.c.gE(a.height))},
gas:function(a){return a.height},
gaw:function(a){return a.width}}
W.iD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aM]},
$at:function(){return[W.aM]},
$if:1,
$af:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aA:function(){return[W.aM]}}
W.ea.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.F]},
$at:function(){return[W.F]},
$if:1,
$af:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aA:function(){return[W.F]}}
W.iN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aW]},
$at:function(){return[W.aW]},
$if:1,
$af:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aA:function(){return[W.aW]}}
W.iO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aD]},
$at:function(){return[W.aD]},
$if:1,
$af:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aA:function(){return[W.aD]}}
W.ir.prototype={}
W.jv.prototype={}
W.is.prototype={}
W.it.prototype={
$1:function(a){return this.a.$1(H.j(a,"$ik"))},
$S:35}
W.A.prototype={
gR:function(a){return new W.d5(a,this.gk(a),[H.cN(this,a,"A",0)])}}
W.d5.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scB(J.eJ(u.a,t))
u.c=t
return!0}u.scB(null)
u.c=s
return!1},
gG:function(a){return this.d},
scB:function(a){this.d=H.G(a,H.x(this,0))},
$iaN:1}
W.dS.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.cH.prototype={}
W.cI.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
P.ex.prototype={$ibn:1,
gd_:function(a){return this.a}}
P.j_.prototype={
$2:function(a,b){this.a[a]=b},
$S:18}
P.fh.prototype={
gbp:function(){var u=this.b,t=H.ay(u,"t",0),s=W.Y
return new H.fC(new H.ig(u,H.n(new P.fi(),{func:1,ret:P.a2,args:[t]}),[t]),H.n(new P.fj(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.c0(this.gbp().a)},
j:function(a,b){var u=this.gbp()
return u.b.$1(J.jN(u.a,b))},
gR:function(a){var u=P.k0(this.gbp(),!1,W.Y)
return new J.ah(u,u.length,[H.x(u,0)])},
$at:function(){return[W.Y]},
$af:function(){return[W.Y]},
$ab:function(){return[W.Y]}}
P.fi.prototype={
$1:function(a){return!!J.U(H.j(a,"$iF")).$iY},
$S:39}
P.fj.prototype={
$1:function(a){return H.p(H.j(a,"$iF"),"$iY")},
$S:25}
P.iH.prototype={
gbd:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.C(t)
return H.G(u+t,H.x(this,0))},
gcV:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.C(t)
return H.G(u+t,H.x(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$iaj){t=p.a
if(t==u.gb9(b)){s=p.b
if(s==u.gbe(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.C(r)
q=H.x(p,0)
if(H.G(t+r,q)===u.gbd(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.C(t)
u=H.G(s+t,q)===u.gcV(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u,t=this,s=t.a,r=J.bB(s),q=t.b,p=J.bB(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.C(o)
u=H.x(t,0)
o=C.e.gE(H.G(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.C(s)
u=C.e.gE(H.G(q+s,u))
return P.lT(P.iF(P.iF(P.iF(P.iF(0,r),p),o),u))}}
P.aj.prototype={
gb9:function(a){return this.a},
gbe:function(a){return this.b},
gaw:function(a){return this.c},
gas:function(a){return this.d}}
P.b3.prototype={$ib3:1}
P.fu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$at:function(){return[P.b3]},
$if:1,
$af:function(){return[P.b3]},
$ib:1,
$ab:function(){return[P.b3]},
$aA:function(){return[P.b3]}}
P.b8.prototype={$ib8:1}
P.h3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$at:function(){return[P.b8]},
$if:1,
$af:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aA:function(){return[P.b8]}}
P.h9.prototype={
gk:function(a){return a.length}}
P.hB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$at:function(){return[P.l]},
$if:1,
$af:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aA:function(){return[P.l]}}
P.o.prototype={
gcX:function(a){return new P.fh(a,new W.io(a))}}
P.bb.prototype={$ibb:1}
P.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$at:function(){return[P.bb]},
$if:1,
$af:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aA:function(){return[P.bb]}}
P.e2.prototype={}
P.e3.prototype={}
P.ed.prototype={}
P.ee.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.eQ.prototype={
gk:function(a){return a.length}}
P.eR.prototype={
j:function(a,b){return P.be(a.get(H.a4(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gat:function(a){var u=H.d([],[P.l])
this.H(a,new P.eS(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.l,null]},
$iD:1,
$aD:function(){return[P.l,null]}}
P.eS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.eT.prototype={
gk:function(a){return a.length}}
P.bC.prototype={}
P.h4.prototype={
gk:function(a){return a.length}}
P.dR.prototype={}
P.cS.prototype={$icS:1}
P.dq.prototype={$idq:1}
P.bN.prototype={
dw:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$ibn)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mv(g))
return}if(!!t.$icd)t=!0
else t=!1
if(t){this.fR(a,b,c,d,e,f,g)
return}throw H.h(P.l8("Incorrect number or type of arguments"))},
fR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
V:function(a,b,c){return a.uniform1f(b,c)},
bf:function(a,b,c){return a.uniform1i(b,c)},
M:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dB:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dC:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dD:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibN:1}
P.ds.prototype={$ids:1}
P.dz.prototype={$idz:1}
P.dG.prototype={$idG:1}
P.hs.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return P.be(a.item(b))},
C:function(a,b){return this.j(a,b)},
$at:function(){return[[P.D,,,]]},
$if:1,
$af:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aA:function(){return[[P.D,,,]]}}
P.ek.prototype={}
P.el.prototype={}
O.T.prototype={
aY:function(a){var u=this
u.ser(H.d([],[a]))
u.scH(null)
u.scD(null)
u.scI(null)},
c8:function(a,b,c){var u=this,t=H.ay(u,"T",0)
H.n(b,{func:1,ret:P.a2,args:[[P.f,t]]})
t={func:1,ret:-1,args:[P.r,[P.f,t]]}
H.n(a,t)
H.n(c,t)
u.scH(b)
u.scD(a)
u.scI(c)},
aG:function(a,b){return this.c8(a,null,b)},
cG:function(a){var u
H.m(a,"$if",[H.ay(this,"T",0)],"$af")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cf:function(a,b){var u
H.m(b,"$if",[H.ay(this,"T",0)],"$af")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.ah(u,u.length,[H.x(u,0)])},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ay(s,"T",0)
H.G(b,r)
r=[r]
if(H.z(s.cG(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cf(t,H.d([b],r))}},
bF:function(a,b){var u,t,s=this
H.m(b,"$if",[H.ay(s,"T",0)],"$af")
if(H.z(s.cG(b))){u=s.a
t=u.length
C.a.bF(u,b)
s.cf(t,b)}},
ser:function(a){this.a=H.m(a,"$ib",[H.ay(this,"T",0)],"$ab")},
scH:function(a){this.b=H.n(a,{func:1,ret:P.a2,args:[[P.f,H.ay(this,"T",0)]]})},
scD:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.r,[P.f,H.ay(this,"T",0)]]})},
scI:function(a){H.n(a,{func:1,ret:-1,args:[P.r,[P.f,H.ay(this,"T",0)]]})},
$if:1}
O.cg.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.K():u},
ax:function(){var u=this.b
if(u!=null)u.A(null)},
gX:function(a){var u=this.a
if(u.length>0)return C.a.gbW(u)
else return V.bJ()},
bc:function(a){var u=this.a
if(a==null)C.a.h(u,V.bJ())
else C.a.h(u,a)
this.ax()},
au:function(){var u=this.a
if(u.length>0){u.pop()
this.ax()}},
sbq:function(a){this.a=H.m(a,"$ib",[V.ai],"$ab")}}
E.eU.prototype={}
E.af.prototype={
sbh:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().O(0,s.gdr())
u=s.c
if(u!=null)u.gm().h(0,s.gdr())
t=new D.H("shape",r,s.c,[F.dt])
t.b=!0
s.bb(t)}},
aa:function(a,b){var u
for(u=this.y.a,u=new J.ah(u,u.length,[H.x(u,0)]);u.u();)u.d.aa(0,b)},
a3:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.gX(s))
s.ax()
a.c3(t.f)
s=a.dy
u=(s&&C.a).gbW(s)
if(u!=null&&t.d!=null)u.dt(a,t)
for(s=t.y.a,s=new J.ah(s,s.length,[H.x(s,0)]);s.u();)s.d.a3(a)
a.c2()
a.dx.au()},
bb:function(a){var u=this.z
if(u!=null)u.A(a)},
Y:function(){return this.bb(null)},
ds:function(a){H.j(a,"$iv")
this.e=null
this.bb(a)},
hz:function(){return this.ds(null)},
dq:function(a){this.bb(H.j(a,"$iv"))},
hw:function(){return this.dq(null)},
hv:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$if",[E.af],"$af")
for(u=b.length,t=this.gdn(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c9()
o.sai(null)
o.sb0(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Y()},
hy:function(a,b){var u,t
H.m(b,"$if",[E.af],"$af")
for(u=b.gR(b),t=this.gdn();u.u();)u.gG(u).gm().O(0,t)
this.Y()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sdT:function(a,b){this.y=H.m(b,"$iT",[E.af],"$aT")},
$ibK:1}
E.hb.prototype={
dQ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.as(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cg()
t=[V.ai]
u.sbq(H.d([],t))
u.b=null
u.gm().h(0,new E.hc(s))
s.cy=u
u=new O.cg()
u.sbq(H.d([],t))
u.b=null
u.gm().h(0,new E.hd(s))
s.db=u
u=new O.cg()
u.sbq(H.d([],t))
u.b=null
u.gm().h(0,new E.he(s))
s.dx=u
s.sfQ(H.d([],[O.bu]))
u=s.dy;(u&&C.a).h(u,null)
s.sfK(new H.V([P.l,A.co]))},
ghI:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gX(s)
u=t.db
u=t.z=s.n(0,u.gX(u))
s=u}return s},
c3:function(a){var u=this.dy,t=a==null?(u&&C.a).gbW(u):a;(u&&C.a).h(u,t)},
c2:function(){var u=this.dy
if(u.length>1)u.pop()},
cT:function(a){var u=a.b
if(u.length===0)throw H.h(P.w("May not cache a shader with no name."))
if(this.fr.cZ(0,u))throw H.h(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)},
sfQ:function(a){this.dy=H.m(a,"$ib",[O.bu],"$ab")},
sfK:function(a){this.fr=H.m(a,"$iD",[P.l,A.co],"$aD")}}
E.hc.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:9}
E.hd.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.he.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:9}
E.dC.prototype={
cj:function(a){H.j(a,"$iv")
this.du()},
ci:function(){return this.cj(null)},
ghl:function(){var u,t=this,s=Date.now(),r=C.e.a0(P.jW(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.as(s,!1)
return u/r},
cL:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.C(r)
u=C.c.bT(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.c.bT(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kh(C.j,s.ghL())}},
du:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.hJ(this),{func:1,ret:-1,args:[P.a3]})
C.r.ef(u)
C.r.fB(u,W.kw(t,P.a3))}},
hJ:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cL()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.as(r,!1)
s.y=P.jW(r-s.r.a).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.ax()
r=s.db
C.a.sk(r.a,0)
r.ax()
r=s.dx
C.a.sk(r.a,0)
r.ax()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a3(p.e)}}catch(q){u=H.bf(q)
t=H.bW(q)
P.jK("Error: "+H.i(u))
P.jK("Stack: "+H.i(t))
throw H.h(u)}}}
E.hJ.prototype={
$1:function(a){var u
H.kG(a)
u=this.a
if(u.ch){u.ch=!1
u.hJ()}},
$S:29}
Z.dO.prototype={$imV:1}
Z.cT.prototype={
W:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bf(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.dP.prototype={$imW:1}
Z.c3.prototype={
ar:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
W:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].W(a)},
aX:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a3:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.l],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aq(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
sen:function(a){this.b=H.m(a,"$ib",[Z.bo],"$ab")},
$in2:1}
Z.bo.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cn(this.c))+"'")+"]"}}
Z.bc.prototype={
gc9:function(a){var u=this.a,t=(u&$.aG().a)!==0?3:0
if((u&$.bi().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=2
if((u&$.bA().a)!==0)t+=3
if((u&$.cO().a)!==0)t+=3
if((u&$.cP().a)!==0)t+=4
if((u&$.bZ().a)!==0)++t
return(u&$.bg().a)!==0?t+4:t},
h4:function(a){var u,t=$.aG(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bg()
if((s&t.a)!==0)if(u===a)return t
return $.l2()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bc))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.l]),t=this.a
if((t&$.aG().a)!==0)C.a.h(u,"Pos")
if((t&$.bi().a)!==0)C.a.h(u,"Norm")
if((t&$.bh().a)!==0)C.a.h(u,"Binm")
if((t&$.bj().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bA().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cO().a)!==0)C.a.h(u,"Clr3")
if((t&$.cP().a)!==0)C.a.h(u,"Clr4")
if((t&$.bZ().a)!==0)C.a.h(u,"Weight")
if((t&$.bg().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.eX.prototype={}
D.c9.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.n(b,u)
if(this.a==null)this.sai(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.ad(u,b)
if(u===!0){u=s.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ad(u,b)
if(u===!0){u=s.b
t=(u&&C.a).O(u,b)||t}return t},
A:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.v()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.k0(u,!0,{func:1,ret:-1,args:[D.v]}),new D.fd(q))
u=r.b
if(u!=null){r.sb0(H.d([],[{func:1,ret:-1,args:[D.v]}]))
C.a.H(u,new D.fe(q))}return!0},
d3:function(){return this.A(null)},
av:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.A(u)}}},
sai:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sb0:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fd.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.fe.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.v.prototype={}
D.bp.prototype={}
D.bq.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cU.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cU))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.da.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.da))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.ft.prototype={
hE:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
hA:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
sfu:function(a){this.d=H.m(a,"$ike",[P.r],"$ake")}}
X.de.prototype={}
X.fz.prototype={
aM:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.a_(o.a+n*m,o.b+u*t)
t=q.a.gaD()
r=new X.b6(a,V.b9(),q.x,t,s)
r.b=!0
q.z=new P.as(p,!1)
q.x=s
return r},
c1:function(a,b){this.r=a.a
return!1},
aT:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dG()
if(typeof u!=="number")return u.ak()
this.r=(u&~t)>>>0
return!1},
aS:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.aM(a,b))
return!0},
hF:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaD()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.ch(new V.N(s*r,q*p),u,t)
t.b=!0
n.A(t)
return!0},
f_:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.de(c,r.a.gaD(),b)
s.b=!0
t.A(s)
r.y=new P.as(u,!1)
r.x=V.b9()}}
X.ao.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ao))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.z(this.b)?"Alt+":""
return u+(H.z(this.c)?"Shift+":"")}}
X.b6.prototype={}
X.fW.prototype={
bn:function(a,b,c){var u=this,t=new P.as(Date.now(),!1),s=u.a.gaD(),r=new X.b6(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c1:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.bn(a,b,!0))
return!0},
aT:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dG()
if(typeof t!=="number")return t.ak()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.A(u.bn(a,b,!0))
return!0},
aS:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.bn(a,b,!1))
return!0},
hG:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaD()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.ch(new V.N(t*s,r*q),u,b)
u.b=!0
o.A(u)
return!0},
gd2:function(){var u=this.b
return u==null?this.b=D.K():u},
gbg:function(){var u=this.c
return u==null?this.c=D.K():u},
gdm:function(){var u=this.d
return u==null?this.d=D.K():u}}
X.ch.prototype={}
X.h8.prototype={}
X.dE.prototype={}
X.hM.prototype={
aM:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a_],"$ab")
u=new P.as(Date.now(),!1)
t=a.length>0?a[0]:V.b9()
s=q.a.gaD()
r=new X.dE(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
hD:function(a){var u
H.m(a,"$ib",[V.a_],"$ab")
u=this.b
if(u==null)return!1
u.A(this.aM(a,!0))
return!0},
hB:function(a){var u
H.m(a,"$ib",[V.a_],"$ab")
u=this.c
if(u==null)return!1
u.A(this.aM(a,!0))
return!0},
hC:function(a){var u
H.m(a,"$ib",[V.a_],"$ab")
u=this.d
if(u==null)return!1
u.A(this.aM(a,!1))
return!0}}
X.dJ.prototype={
gaD:function(){var u=this.a,t=C.h.gcY(u).c
t.toString
u=C.h.gcY(u).d
u.toString
return V.kc(0,0,t,u)},
cv:function(a){var u=a.keyCode,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.da(u,new X.ao(t,a.altKey,a.shiftKey))},
aC:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ao(t,a.altKey,a.shiftKey)},
bE:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ao(t,a.altKey,a.shiftKey)},
ao:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.a_(s-q,r-u)},
aN:function(a){return new V.N(a.movementX,a.movementY)},
bB:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a_])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.ae(r.pageX)
C.c.ae(r.pageY)
p=o.left
C.c.ae(r.pageX)
C.a.h(n,new V.a_(q-p,C.c.ae(r.pageY)-o.top))}return n},
al:function(a){var u=a.buttons,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.cU(u,new X.ao(t,a.altKey,a.shiftKey))},
br:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eU:function(a){this.f=!0},
eI:function(a){this.f=!1},
eO:function(a){H.j(a,"$ia6")
if(H.z(this.f)&&this.br(a))a.preventDefault()},
eY:function(a){var u
H.j(a,"$iaP")
if(!H.z(this.f))return
u=this.cv(a)
this.b.hE(u)},
eW:function(a){var u
H.j(a,"$iaP")
if(!H.z(this.f))return
u=this.cv(a)
this.b.hA(u)},
f1:function(a){var u,t,s,r,q=this
H.j(a,"$ia6")
u=q.a
u.focus()
q.f=!0
q.aC(a)
if(H.z(q.x)){t=q.al(a)
s=q.aN(a)
if(q.d.c1(t,s))a.preventDefault()
return}if(H.z(q.r)){q.y=a
u.requestPointerLock()
return}t=q.al(a)
r=q.ao(a)
if(q.c.c1(t,r))a.preventDefault()},
f5:function(a){var u,t,s,r=this
H.j(a,"$ia6")
r.aC(a)
u=r.al(a)
if(H.z(r.x)){t=r.aN(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ao(a)
if(r.c.aT(u,s))a.preventDefault()},
eS:function(a){var u,t,s,r=this
H.j(a,"$ia6")
if(!r.br(a)){r.aC(a)
u=r.al(a)
if(H.z(r.x)){t=r.aN(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ao(a)
if(r.c.aT(u,s))a.preventDefault()}},
f3:function(a){var u,t,s,r=this
H.j(a,"$ia6")
r.aC(a)
u=r.al(a)
if(H.z(r.x)){t=r.aN(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ao(a)
if(r.c.aS(u,s))a.preventDefault()},
eQ:function(a){var u,t,s,r=this
H.j(a,"$ia6")
if(!r.br(a)){r.aC(a)
u=r.al(a)
if(H.z(r.x)){t=r.aN(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ao(a)
if(r.c.aS(u,s))a.preventDefault()}},
f7:function(a){var u,t,s=this
H.j(a,"$ib1")
s.aC(a)
u=new V.N((a&&C.q).ghf(a),C.q.ghg(a)).t(0,180)
if(H.z(s.x)){if(s.d.hF(u))a.preventDefault()
return}if(H.z(s.r))return
t=s.ao(a)
if(s.c.hG(u,t))a.preventDefault()},
f9:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.al(s.y)
t=s.ao(s.y)
s.d.f_(u,t,r)}},
fp:function(a){var u,t=this
H.j(a,"$iaF")
t.a.focus()
t.f=!0
t.bE(a)
u=t.bB(a)
if(t.e.hD(u))a.preventDefault()},
fl:function(a){var u
H.j(a,"$iaF")
this.bE(a)
u=this.bB(a)
if(this.e.hB(u))a.preventDefault()},
fn:function(a){var u
H.j(a,"$iaF")
this.bE(a)
u=this.bB(a)
if(this.e.hC(u))a.preventDefault()},
seg:function(a){this.z=H.m(a,"$ib",[[P.cq,P.L]],"$ab")}}
D.d_.prototype={$ia5:1,$ibK:1}
D.a5.prototype={$ibK:1}
D.db.prototype={
ck:function(a){var u=this.x
if(u!=null)u.A(a)},
cF:function(a){var u=this.y
if(u!=null)u.A(a)},
eZ:function(){return this.cF(null)},
fb:function(a){var u,t,s
H.m(a,"$if",[D.a5],"$af")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.e9(s))return!1}return!0},
eC:function(a,b){var u,t,s,r,q=D.a5
H.m(b,"$if",[q],"$af")
for(u=b.length,t=this.gcE(),s=0;s<b.length;b.length===u||(0,H.u)(b),++s){r=H.j(b[s],"$ia5")
r.gm().h(0,t)}q=new D.bp([q])
q.b=!0
this.ck(q)},
ff:function(a,b){var u,t,s,r=D.a5
H.m(b,"$if",[r],"$af")
for(u=b.gR(b),t=this.gcE();u.u();){s=u.gG(u)
C.a.O(this.e,s)
s.gm().O(0,t)}r=new D.bq([r])
r.b=!0
this.ck(r)},
e9:function(a){var u=C.a.ad(this.e,a)
return u},
see:function(a){this.e=H.m(a,"$ib",[D.d_],"$ab")},
sfq:function(a){this.f=H.m(a,"$ib",[D.dp],"$ab")},
sfN:function(a){this.r=H.m(a,"$ib",[D.dx],"$ab")},
$af:function(){return[D.a5]},
$aT:function(){return[D.a5]}}
D.dp.prototype={$ia5:1,$ibK:1}
D.dx.prototype={$ia5:1,$ibK:1}
V.a8.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.ar.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ar))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.fc.prototype={}
V.di.prototype={
a4:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.B])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.di))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.B],o=V.bV(H.d([q.a,q.d,q.r],p),3,0),n=V.bV(H.d([q.b,q.e,q.x],p),3,0),m=V.bV(H.d([q.c,q.f,q.y],p),3,0)
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
V.ai.prototype={
a4:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.B])
return t},
bV:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.J().a)return V.bJ()
u=1/b1
t=-n
s=-a0
return V.aR((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aR(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
c5:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ag(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ai))return!1
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
i:function(a){return this.I()},
v:function(a){var u,t,s,r,q,p=this,o=[P.B],n=V.bV(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.bV(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.bV(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.bV(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
I:function(){return this.v("")}}
V.a_.prototype={
F:function(a,b){return new V.a_(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.ag.prototype={
F:function(a,b){return new V.ag(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.ba.prototype={
p:function(a,b){var u,t,s=this
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
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.dr.prototype={
ga2:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dr))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.N.prototype={
bX:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.C(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.C(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.N(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.J().a){u=$.kl
return u==null?$.kl=new V.N(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.N(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=this.a
s=$.J()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.O.prototype={
bX:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bY:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.O(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aR:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.O(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.O(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.J().a)return V.dN()
return new V.O(this.a/b,this.b/b,this.c/b)},
dl:function(){var u=$.J().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
U.eY.prototype={
bj:function(a){var u=V.mU(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.K():u},
K:function(a){var u=this.y
if(u!=null)u.A(a)},
sc6:function(a,b){},
sbZ:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.J().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bj(u)}s=new D.H("maximumLocation",s,t.b,[P.B])
s.b=!0
t.K(s)}},
sc0:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.J().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bj(u)}s=new D.H("minimumLocation",s,t.c,[P.B])
s.b=!0
t.K(s)}},
sa1:function(a,b){var u,t=this
b=t.bj(b)
u=t.d
if(!(Math.abs(u-b)<$.J().a)){t.d=b
u=new D.H("location",u,b,[P.B])
u.b=!0
t.K(u)}},
sc_:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.J().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.H("maximumVelocity",r,a,[P.B])
r.b=!0
s.K(r)}},
sN:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.J().a)){u.f=a
t=new D.H("velocity",t,a,[P.B])
t.b=!0
u.K(t)}},
sbM:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.J().a)){this.x=a
u=new D.H("dampening",u,a,[P.B])
u.b=!0
this.K(u)}},
aa:function(a,b){var u,t,s,r=this,q=r.f,p=$.J().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.J().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sN(u)}}}
U.cW.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.K():u},
aF:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cW))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.cc.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.K():u},
K:function(a){var u
H.j(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
a_:function(){return this.K(null)},
eA:function(a,b){var u,t,s,r,q,p,o,n=U.aa
H.m(b,"$if",[n],"$af")
for(u=b.length,t=this.gaB(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bp([n])
n.b=!0
this.K(n)},
fd:function(a,b){var u,t,s=U.aa
H.m(b,"$if",[s],"$af")
for(u=b.gR(b),t=this.gaB();u.u();)u.gG(u).gm().O(0,t)
s=new D.bq([s])
s.b=!0
this.K(s)},
aF:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a5()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ah(r,r.length,[H.x(r,0)]),u=null;r.u();){q=r.d
if(q!=null){t=q.aF(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.bJ():u
r=s.e
if(r!=null)r.av(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cc))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$af:function(){return[U.aa]},
$aT:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.dK.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.K():u},
K:function(a){var u
H.j(a,"$iv")
u=this.cy
if(u!=null)u.A(a)},
a_:function(){return this.K(null)},
aO:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd2().h(0,u.gbs())
u.a.c.gdm().h(0,u.gbu())
u.a.c.gbg().h(0,u.gbw())
return!0},
bt:function(a){var u=this
H.j(a,"$iv")
if(!J.W(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bv:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.j(a,"$iv"),"$ib6")
if(!H.z(n.y))return
if(H.z(n.x)){u=a.d.F(0,a.y)
u=new V.N(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.z(n.d)){u=a.c
t=a.d.F(0,a.y)
u=new V.N(t.a,t.b).n(0,2).t(0,u.ga2())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sN(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.N(s.a,s.b).n(0,2).t(0,u.ga2())
s=n.b
q=r.a
if(typeof q!=="number")return q.L()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
n.b.sN(0)
t=t.F(0,a.z)
n.Q=new V.N(t.a,t.b).n(0,2).t(0,u.ga2())}n.a_()},
bx:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.z(r.y))return
r.y=!1
if(H.z(r.x))return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sN(t*10*s)
r.a_()}},
aF:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a5()
if(q<p){r.ch=p
u=b.y
r.b.aa(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aR(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaa:1}
U.dL.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.K():u},
K:function(a){var u
H.j(a,"$iv")
u=this.fx
if(u!=null)u.A(a)},
a_:function(){return this.K(null)},
aO:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd2().h(0,s.gbs())
s.a.c.gdm().h(0,s.gbu())
s.a.c.gbg().h(0,s.gbw())
u=s.a.d
t=u.f
u=t==null?u.f=D.K():t
u.h(0,s.ges())
u=s.a.d
t=u.d
u=t==null?u.d=D.K():t
u.h(0,s.gev())
u=s.a.e
t=u.b
u=t==null?u.b=D.K():t
u.h(0,s.gfX())
u=s.a.e
t=u.d
u=t==null?u.d=D.K():t
u.h(0,s.gfV())
u=s.a.e
t=u.c
u=t==null?u.c=D.K():t
u.h(0,s.gfT())
return!0},
ah:function(a){var u=a.a,t=a.b
if(H.z(this.f)){if(typeof u!=="number")return u.L()
u=-u}if(H.z(this.r)){if(typeof t!=="number")return t.L()
t=-t}return new V.N(u,t)},
bt:function(a){var u=this
a=H.p(H.j(a,"$iv"),"$ib6")
if(!J.W(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bv:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.j(a,"$iv"),"$ib6")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.F(0,a.y)
u=new V.N(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.ah(new V.N(t.a,t.b).n(0,2).t(0,u.ga2()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ah(new V.N(s.a,s.b).n(0,2).t(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa1(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.F(0,a.z)
n.dx=n.ah(new V.N(t.a,t.b).n(0,2).t(0,u.ga2()))}n.a_()},
bx:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sN(-t*10*u)
r.a_()}},
eu:function(a){var u=this
if(H.p(H.j(a,"$iv"),"$ide").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ew:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.j(a,"$iv"),"$ib6")
if(!J.W(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ah(new V.N(s.a,s.b).n(0,2).t(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa1(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.F(0,a.z)
n.dx=n.ah(new V.N(t.a,t.b).n(0,2).t(0,u.ga2()))
n.a_()},
fY:function(a){var u=this
H.j(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fW:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.j(a,"$iv"),"$idE")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.F(0,a.y)
u=new V.N(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.ah(new V.N(t.a,t.b).n(0,2).t(0,u.ga2()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ah(new V.N(s.a,s.b).n(0,2).t(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa1(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.F(0,a.z)
n.dx=n.ah(new V.N(t.a,t.b).n(0,2).t(0,u.ga2()))}n.a_()},
fU:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sN(-t*10*u)
r.a_()}},
aF:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a5()
if(q<p){r.dy=p
u=b.y
r.c.aa(0,u)
r.b.aa(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aR(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.n(0,V.aR(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaa:1}
U.dM.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.K():u},
K:function(a){var u=this.r
if(u!=null)u.A(a)},
aO:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.K():t
t=r.gex()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.K():s).h(0,t)
return!0},
ey:function(a){var u,t,s,r,q=this
H.j(a,"$iv")
if(!J.W(q.b,q.a.b.c))return
H.p(a,"$ich")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.H("zoom",u,r,[P.B])
u.b=!0
q.K(u)}},
aF:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aR(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaa:1}
M.cV.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.K():u},
T:function(a){var u
H.j(a,"$iv")
u=this.r
if(u!=null)u.A(a)},
aJ:function(){return this.T(null)},
fh:function(a,b){var u,t,s,r,q,p,o,n=M.ap
H.m(b,"$if",[n],"$af")
for(u=b.length,t=this.gS(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bp([n])
n.b=!0
this.T(n)},
fj:function(a,b){var u,t,s=M.ap
H.m(b,"$if",[s],"$af")
for(u=b.gR(b),t=this.gS();u.u();)u.gG(u).gm().O(0,t)
s=new D.bq([s])
s.b=!0
this.T(s)},
a3:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ah(u,u.length,[H.x(u,0)]);u.u();){t=u.d
if(t!=null)t.a3(a)}s.f=!1},
$af:function(){return[M.ap]},
$aT:function(){return[M.ap]},
$iap:1}
M.cY.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.K():u},
T:function(a){var u
H.j(a,"$iv")
u=this.r
if(u!=null)u.A(a)},
aJ:function(){return this.T(null)},
saP:function(a){var u,t,s=this
if(a==null)a=new X.fo()
u=s.b
if(u!==a){if(u!=null)u.gm().O(0,s.gS())
t=s.b
s.b=a
a.gm().h(0,s.gS())
u=new D.H("camera",t,s.b,[X.bD])
u.b=!0
s.T(u)}},
saU:function(a,b){var u,t,s=this
if(b==null)b=X.jj(null)
u=s.c
if(u!==b){if(u!=null)u.gm().O(0,s.gS())
t=s.c
s.c=b
b.gm().h(0,s.gS())
u=new D.H("target",t,s.c,[X.cr])
u.b=!0
s.T(u)}},
saV:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().O(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gS())
s=new D.H("technique",u,t.d,[O.bu])
s.b=!0
t.T(s)}},
a3:function(a){var u=this
a.c3(u.d)
u.c.W(a)
u.b.W(a)
u.e.aa(0,a)
u.e.a3(a)
u.b.aX(a)
u.c.toString
a.c2()},
$iap:1}
M.d3.prototype={
T:function(a){var u
H.j(a,"$iv")
u=this.y
if(u!=null)u.A(a)},
aJ:function(){return this.T(null)},
eK:function(a,b){var u,t,s,r,q,p,o,n=E.af
H.m(b,"$if",[n],"$af")
for(u=b.length,t=this.gS(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c9()
o.sai(null)
o.sb0(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bp([n])
n.b=!0
this.T(n)},
eM:function(a,b){var u,t,s=E.af
H.m(b,"$if",[s],"$af")
for(u=b.gR(b),t=this.gS();u.u();)u.gG(u).gm().O(0,t)
s=new D.bq([s])
s.b=!0
this.T(s)},
saP:function(a){var u,t,s=this
if(a==null)a=X.k5(null)
u=s.b
if(u!==a){if(u!=null)u.gm().O(0,s.gS())
t=s.b
s.b=a
a.gm().h(0,s.gS())
u=new D.H("camera",t,s.b,[X.bD])
u.b=!0
s.T(u)}},
saU:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().O(0,t.gS())
u=t.c
t.c=b
b.gm().h(0,t.gS())
s=new D.H("target",u,t.c,[X.cr])
s.b=!0
t.T(s)}},
saV:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().O(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gS())
s=new D.H("technique",u,t.d,[O.bu])
s.b=!0
t.T(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.K():u},
a3:function(a){var u,t=this
a.c3(t.d)
t.c.W(a)
t.b.W(a)
u=t.d
if(u!=null)u.aa(0,a)
for(u=t.e.a,u=new J.ah(u,u.length,[H.x(u,0)]);u.u();)u.d.aa(0,a)
for(u=t.e.a,u=new J.ah(u,u.length,[H.x(u,0)]);u.u();)u.d.a3(a)
t.b.toString
a.cy.au()
a.db.au()
t.c.toString
a.c2()},
se8:function(a,b){this.e=H.m(b,"$iT",[E.af],"$aT")},
$iap:1}
M.ap.prototype={}
A.cQ.prototype={}
A.eP.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hi:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
d1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ae.prototype={
gaf:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.ae))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dh.prototype={
dP:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bt("")
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
A.md(c0,u)
A.mf(c0,u)
A.me(c0,u)
A.mh(c0,u)
A.mi(c0,u)
A.mg(c0,u)
A.mj(c0,u)
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
b5.dk(0,s.charCodeAt(0)==0?s:s,A.mc(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.p(b5.y.D(0,"invViewMat"),"$ial")
if(t)b5.dy=H.p(b5.y.D(0,"objMat"),"$ial")
if(r)b5.fr=H.p(b5.y.D(0,"viewObjMat"),"$ial")
b5.fy=H.p(b5.y.D(0,"projViewObjMat"),"$ial")
if(c0.ry)b5.k1=H.p(b5.y.D(0,"txt2DMat"),"$icw")
if(c0.x1)b5.k2=H.p(b5.y.D(0,"txtCubeMat"),"$ial")
if(c0.x2)b5.k3=H.p(b5.y.D(0,"colorMat"),"$ial")
b5.se3(H.d([],[A.al]))
t=c0.y2
if(t>0){b5.k4=H.j(b5.y.D(0,"bendMatCount"),"$iat")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.y(P.w(b7+q+b8));(s&&C.a).h(s,H.p(m,"$ial"))}}t=c0.a
if(t.a)b5.r2=H.p(b5.y.D(0,"emissionClr"),"$iQ")
if(t.b)b5.rx=H.p(b5.y.D(0,"emissionTxt"),"$iac")
t=c0.b
if(t.a)b5.x1=H.p(b5.y.D(0,"ambientClr"),"$iQ")
if(t.b)b5.x2=H.p(b5.y.D(0,"ambientTxt"),"$iac")
t=c0.c
if(t.a)b5.y2=H.p(b5.y.D(0,"diffuseClr"),"$iQ")
if(t.b)b5.aq=H.p(b5.y.D(0,"diffuseTxt"),"$iac")
t=c0.d
if(t.a)b5.d5=H.p(b5.y.D(0,"invDiffuseClr"),"$iQ")
if(t.b)b5.d6=H.p(b5.y.D(0,"invDiffuseTxt"),"$iac")
t=c0.e
s=t.a
if(s||t.b||!1){b5.d9=H.p(b5.y.D(0,"shininess"),"$ia0")
if(s)b5.d7=H.p(b5.y.D(0,"specularClr"),"$iQ")
if(t.b)b5.d8=H.p(b5.y.D(0,"specularTxt"),"$iac")}if(c0.f.b)b5.da=H.p(b5.y.D(0,"bumpTxt"),"$iac")
if(c0.cy){b5.dc=H.p(b5.y.D(0,"envSampler"),"$ibw")
t=c0.r
if(t.a)b5.dd=H.p(b5.y.D(0,"reflectClr"),"$iQ")
if(t.b)b5.de=H.p(b5.y.D(0,"reflectTxt"),"$iac")
t=c0.x
s=t.a
if(s||t.b||!1){b5.df=H.p(b5.y.D(0,"refraction"),"$ia0")
if(s)b5.dg=H.p(b5.y.D(0,"refractClr"),"$iQ")
if(t.b)b5.dh=H.p(b5.y.D(0,"refractTxt"),"$iac")}}t=c0.y
if(t.a)b5.di=H.p(b5.y.D(0,"alpha"),"$ia0")
if(t.b)b5.dj=H.p(b5.y.D(0,"alphaTxt"),"$iac")
t=P.r
s=[t,A.at]
b5.sed(new H.V(s))
b5.sdU(new H.V([t,[P.b,A.bO]]))
b5.sfs(new H.V(s))
b5.sft(new H.V([t,[P.b,A.bP]]))
b5.sfM(new H.V(s))
b5.sdV(new H.V([t,[P.b,A.bQ]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.bO],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ak()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.y(P.w(b7+g+b8))
H.p(m,"$iQ")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.y(P.w(b7+g+b8))
H.p(f,"$iQ")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.y(P.w(b7+g+b8))
H.p(e,"$iQ")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.y(P.w(b7+g+b8))
H.p(m,"$iQ")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.y(P.w(b7+g+b8))
H.p(f,"$iQ")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.y(P.w(b7+o+b8))
H.p(e,"$iac")
a=e}else a=b6
C.a.h(h,new A.bO(b,c,d,m,f,a))}b5.bO.l(0,j,h)
q=b5.bN
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
q.l(0,j,H.j(m,"$iat"))}for(t=c0.Q,s=t.length,r=[A.bP],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
H.p(m,"$iQ")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.y(P.w(b7+o+b8))
H.p(f,"$iQ")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.y(P.w(b7+o+b8))
H.p(e,"$iQ")
if(typeof j!=="number")return j.ak()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.p(a0,"$icw")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.p(a0,"$ibw")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.p(a0,"$ibw")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.p(a2,"$icv")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.p(a0,"$ia0")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.p(a2,"$ia0")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.y(P.w(b7+o+b8))
H.p(a5,"$ia0")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.bP(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bQ.l(0,j,h)
q=b5.bP
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
q.l(0,j,H.j(m,"$iat"))}for(t=c0.ch,s=t.length,r=[A.bQ],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
H.p(m,"$iQ")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.y(P.w(b7+o+b8))
H.p(f,"$iQ")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.y(P.w(b7+o+b8))
H.p(e,"$iQ")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.p(a0,"$iQ")
if(typeof j!=="number")return j.ak()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.p(a2,"$iQ")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.y(P.w(b7+o+b8))
H.p(a5,"$iQ")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.y(P.w(b7+o+b8))
H.p(a9,"$ia0")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.y(P.w(b7+o+b8))
H.p(b0,"$ia0")
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
if(a2==null)H.y(P.w(b7+g+b8))
H.p(a2,"$icv")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.y(P.w(b7+g+b8))
H.p(a2,"$ia0")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.y(P.w(b7+g+b8))
H.p(a5,"$ia0")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.y(P.w(b7+g+b8))
H.p(a2,"$ia0")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.y(P.w(b7+g+b8))
H.p(a5,"$ia0")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.y(P.w(b7+g+b8))
H.p(a9,"$ia0")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.y(P.w(b7+g+b8))
H.p(a2,"$iac")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.p(a2,"$iac")
a3=a2}else a3=b6
C.a.h(h,new A.bQ(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bS.l(0,j,h)
q=b5.bR
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
q.l(0,j,H.j(m,"$iat"))}}},
ac:function(a,b){if(b!=null&&b.d)a.dH(b)},
fG:function(a,b){},
se3:function(a){this.r1=H.m(a,"$ib",[A.al],"$ab")},
sed:function(a){this.bN=H.m(a,"$iD",[P.r,A.at],"$aD")},
sdU:function(a){this.bO=H.m(a,"$iD",[P.r,[P.b,A.bO]],"$aD")},
sfs:function(a){this.bP=H.m(a,"$iD",[P.r,A.at],"$aD")},
sft:function(a){this.bQ=H.m(a,"$iD",[P.r,[P.b,A.bP]],"$aD")},
sfM:function(a){this.bR=H.m(a,"$iD",[P.r,A.at],"$aD")},
sdV:function(a){this.bS=H.m(a,"$iD",[P.r,[P.b,A.bQ]],"$aD")}}
A.az.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aA.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aC.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.fG.prototype={
i:function(a){return this.aq}}
A.bO.prototype={}
A.bP.prototype={}
A.bQ.prototype={}
A.co.prototype={
ce:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dk:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cw(b,35633)
r.f=r.cw(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.z(H.kA(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.y(P.w("Failed to link shader: "+H.i(s)))}r.fH()
r.fJ()},
W:function(a){a.a.useProgram(this.r)
this.x.hi()},
cw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.z(H.kA(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.w("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
fH:function(){var u,t,s,r=this,q=H.d([],[A.cQ]),p=r.a,o=H.a7(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cQ(p,t.name,s))}r.x=new A.eP(q)},
fJ:function(){var u,t,s,r=this,q=H.d([],[A.dF]),p=r.a,o=H.a7(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.he(t.type,t.size,t.name,s))}r.y=new A.hY(q)},
az:function(a,b,c){var u=this.a
if(a===1)return new A.at(u,b,c)
else return A.jt(u,this.r,b,a,c)},
ea:function(a,b,c){var u=this.a
if(a===1)return new A.ac(u,b,c)
else return A.jt(u,this.r,b,a,c)},
eb:function(a,b,c){var u=this.a
if(a===1)return new A.bw(u,b,c)
else return A.jt(u,this.r,b,a,c)},
b3:function(a,b){return new P.dY(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
he:function(a,b,c,d){var u=this
switch(a){case 5120:return u.az(b,c,d)
case 5121:return u.az(b,c,d)
case 5122:return u.az(b,c,d)
case 5123:return u.az(b,c,d)
case 5124:return u.az(b,c,d)
case 5125:return u.az(b,c,d)
case 5126:return new A.a0(u.a,c,d)
case 35664:return new A.hU(u.a,c,d)
case 35665:return new A.Q(u.a,c,d)
case 35666:return new A.cv(u.a,c,d)
case 35667:return new A.hV(u.a,c,d)
case 35668:return new A.hW(u.a,c,d)
case 35669:return new A.hX(u.a,c,d)
case 35674:return new A.hZ(u.a,c,d)
case 35675:return new A.cw(u.a,c,d)
case 35676:return new A.al(u.a,c,d)
case 35678:return u.ea(b,c,d)
case 35680:return u.eb(b,c,d)
case 35670:throw H.h(u.b3("BOOL",c))
case 35671:throw H.h(u.b3("BOOL_VEC2",c))
case 35672:throw H.h(u.b3("BOOL_VEC3",c))
case 35673:throw H.h(u.b3("BOOL_VEC4",c))
default:throw H.h(P.w("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.dv.prototype={}
A.dF.prototype={}
A.hY.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.I()},
I:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.at.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.hV.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sh_:function(a){H.m(a,"$ib",[P.r],"$ab")}}
A.a0.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.Q.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cv.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cw.prototype={
ab:function(a){var u=new Float32Array(H.cK(H.m(a,"$ib",[P.B],"$ab")))
C.b.dC(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.al.prototype={
ab:function(a){var u=new Float32Array(H.cK(H.m(a,"$ib",[P.B],"$ab")))
C.b.dD(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.ac.prototype={
dH:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.bw.prototype={
dI:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.iT.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bY(s.b,b).bY(s.d.bY(s.c,b),c)
s=new V.ag(r.a,r.b,r.c)
if(!J.W(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Y()}a.shP(r.t(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
u=new V.ba(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.W(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Y()}},
$S:33}
F.Z.prototype={
e2:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dN()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dl())return
return s.t(0,Math.sqrt(s.w(s)))},
e7:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.O(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.w(r)))
r=t.F(0,q)
r=new V.O(r.a,r.b,r.c)
r=s.aR(r.t(0,Math.sqrt(r.w(r))))
return r.t(0,Math.sqrt(r.w(r)))},
bJ:function(){var u,t=this
if(t.d!=null)return!0
u=t.e2()
if(u==null){u=t.e7()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
e1:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dN()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dl())return
return s.t(0,Math.sqrt(s.w(s)))},
e6:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.J().a){l=d.F(0,g)
l=new V.O(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.L(0)}else{p=(l-u.b)/r
l=d.F(0,g)
l=new V.ag(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).F(0,j)
l=new V.O(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.L(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.w(l)))
l=o.aR(q)
l=l.t(0,Math.sqrt(l.w(l))).aR(o)
q=l.t(0,Math.sqrt(l.w(l)))}return q},
bH:function(){var u,t=this
if(t.e!=null)return!0
u=t.e1()
if(u==null){u=t.e6()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.d.a8(J.aq(s.e),0)+", "+C.d.a8(J.aq(t.b.e),0)+", "+C.d.a8(J.aq(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
I:function(){return this.v("")}}
F.b4.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.d.a8(J.aq(u.e),0)+", "+C.d.a8(J.aq(this.b.e),0)},
I:function(){return this.v("")}}
F.bs.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.d.a8(J.aq(u.e),0)},
I:function(){return this.v("")}}
F.dt.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.K():u},
ht:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.U()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.hd())}h.a.U()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bs()
if(n.a==null)H.y(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.A(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.ln(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.U()
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
F.ca(l,k,i)}g=h.e
if(g!=null)g.av(0)},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.av(0)
return u},
cW:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aG()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bi().a)!==0)++s
if((t&$.bh().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.bA().a)!==0)++s
if((t&$.cO().a)!==0)++s
if((t&$.cP().a)!==0)++s
if((t&$.bZ().a)!==0)++s
if((t&$.bg().a)!==0)++s
r=a3.gc9(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.B
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.cT])
for(n=0,m=0;m<s;++m){l=a3.h4(m)
k=l.gc9(l)
C.a.l(o,m,new Z.cT(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].hq(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cK(p)),35044)
u.bindBuffer(a0,null)
e=new Z.c3(new Z.dO(a0,f),o,a3)
e.sen(H.d([],[Z.bo]))
if(a.b.b.length!==0){t=P.r
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.U()
C.a.h(d,c.e)}b=Z.ju(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bo(0,d.length,b))}if(a.c.b.length!==0){t=P.r
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.U()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.U()
C.a.h(d,c.e)}b=Z.ju(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bo(1,d.length,b))}if(a.d.b.length!==0){t=P.r
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.U()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.U()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.U()
C.a.h(d,c.e)}b=Z.ju(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bo(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.l])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.v(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.v(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.v(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.v(t))}return C.a.q(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.A(null)},
$in1:1}
F.hk.prototype={
h2:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.au],"$ab")
u=H.d([],[F.Z])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.ca(t,q,p))}return u},
h3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.au],"$ab")
u=H.d([],[F.Z])
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
C.a.h(u,F.ca(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ca(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ca(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ca(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bJ())s=!1
return s},
bI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bH())s=!1
return s},
i:function(a){return this.I()},
v:function(a){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(a))
return C.a.q(r,"\n")},
I:function(){return this.v("")},
seh:function(a){this.b=H.m(a,"$ib",[F.Z],"$ab")}}
F.hl.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
v:function(a){var u,t,s=H.d([],[P.l]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].v(a+(""+u+". ")))}return C.a.q(s,"\n")},
I:function(){return this.v("")},
seo:function(a){this.b=H.m(a,"$ib",[F.b4],"$ab")}}
F.hm.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
v:function(a){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(a))
return C.a.q(r,"\n")},
I:function(){return this.v("")},
sbA:function(a){this.b=H.m(a,"$ib",[F.bs],"$ab")}}
F.au.prototype={
bL:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.i5(u.cx,r,o,t,s,q,p,a,n)},
hd:function(){return this.bL(null)},
shP:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
hq:function(a){var u,t,s=this
if(a.p(0,$.aG())){u=s.f
t=[P.B]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bi())){u=s.r
t=[P.B]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bh())){u=s.x
t=[P.B]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bj())){u=s.y
t=[P.B]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.bA())){u=s.z
t=[P.B]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.cO())){u=s.Q
t=[P.B]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.cP())){u=s.Q
t=[P.B]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bZ()))return H.d([s.ch],[P.B])
else if(a.p(0,$.bg())){u=s.cx
t=[P.B]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.B])},
bJ:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dN()
t.d.H(0,new F.id(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.av(0)}return!0},
bH:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dN()
t.d.H(0,new F.ic(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.av(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u,t,s=this,r="-",q=H.d([],[P.l])
C.a.h(q,C.d.a8(J.aq(s.e),0))
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
C.a.h(q,V.P(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
I:function(){return this.v("")}}
F.id.prototype={
$1:function(a){var u,t
H.j(a,"$iZ")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:7}
F.ic.prototype={
$1:function(a){var u,t
H.j(a,"$iZ")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:7}
F.i6.prototype={
U:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Y()
return!0},
b4:function(a,b,c,d,e,f){var u=F.i5(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bJ()
return!0},
bI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bH()
return!0},
h9:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.I()},
v:function(a){var u,t,s,r
this.U()
u=H.d([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].v(a))
return C.a.q(u,"\n")},
I:function(){return this.v("")},
sh0:function(a){this.c=H.m(a,"$ib",[F.au],"$ab")}}
F.i7.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.Z]})
C.a.H(u.b,b)
C.a.H(u.c,new F.i8(u,b))
C.a.H(u.d,new F.i9(u,b))},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
sei:function(a){this.b=H.m(a,"$ib",[F.Z],"$ab")},
sej:function(a){this.c=H.m(a,"$ib",[F.Z],"$ab")},
sek:function(a){this.d=H.m(a,"$ib",[F.Z],"$ab")}}
F.i8.prototype={
$1:function(a){H.j(a,"$iZ")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:7}
F.i9.prototype={
$1:function(a){var u
H.j(a,"$iZ")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:7}
F.ia.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
sep:function(a){this.b=H.m(a,"$ib",[F.b4],"$ab")},
seq:function(a){this.c=H.m(a,"$ib",[F.b4],"$ab")}}
F.ib.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
sbA:function(a){this.b=H.m(a,"$ib",[F.bs],"$ab")}}
O.dg.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.K():u},
P:function(a){var u
H.j(a,"$iv")
u=this.fr
if(u!=null)u.A(a)},
aK:function(){return this.P(null)},
cK:function(a){H.j(a,"$iv")
this.a=null
this.P(a)},
fD:function(){return this.cK(null)},
eE:function(a,b){var u=V.ai
H.m(b,"$if",[u],"$af")
u=new D.bp([u])
u.b=!0
this.P(u)},
eG:function(a,b){var u=V.ai
H.m(b,"$if",[u],"$af")
u=new D.bq([u])
u.b=!0
this.P(u)},
ct:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.r,h=new H.V([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gaj()
p=h.j(0,r.gaj())
h.l(0,q,p==null?1:p)}o=H.d([],[A.az])
h.H(0,new O.fK(j,o))
C.a.bi(o,new O.fL())
n=new H.V([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gaj()
p=n.j(0,r.gaj())
n.l(0,q,p==null?1:p)}m=H.d([],[A.aA])
n.H(0,new O.fM(j,m))
C.a.bi(m,new O.fN())
l=new H.V([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){r=i[s]
t=r.gaj()
q=l.j(0,r.gaj())
l.l(0,t,q==null?1:q)}k=H.d([],[A.aC])
l.H(0,new O.fO(j,k))
C.a.bi(k,new O.fP())
i=C.e.a0(j.e.a.length+3,4)
j.dy.e
return A.lt(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
a6:function(a,b){H.m(a,"$ib",[T.cs],"$ab")
if(b!=null)if(!C.a.ad(a,b)){b.a=a.length
C.a.h(a,b)}},
aa:function(a,b){var u
for(u=this.dx.a,u=new J.ah(u,u.length,[H.x(u,0)]);u.u();)C.i.aa(u.d,b)},
dt:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.ct()
u=H.j(b4.fr.j(0,b3.aq),"$idh")
if(u==null){u=A.ls(b3,b4.a)
b4.cT(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.d4
b3=b5.e
if(!(b3 instanceof Z.c3))b3=b5.e=null
if(b3==null||!b3.d.p(0,s)){b3=t.k3
if(b3)b5.d.ap()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.bI()
q.a.bI()
q=q.e
if(q!=null)q.av(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.h9()
p=p.e
if(p!=null)p.av(0)}n=b5.d.cW(new Z.dP(b4.a),s)
n.ar($.aG()).e=b2.a.Q.c
if(b3)n.ar($.bi()).e=b2.a.cx.c
if(r)n.ar($.bh()).e=b2.a.ch.c
if(t.r1)n.ar($.bj()).e=b2.a.cy.c
if(q)n.ar($.bA()).e=b2.a.db.c
if(t.rx)n.ar($.bg()).e=b2.a.dx.c
b5.e=n}b3=T.cs
m=H.d([],[b3])
b2.a.W(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.gX(q)
r=r.dy
r.toString
r.ab(q.a4(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.gX(q)
p=b4.dx
p=b4.cx=q.n(0,p.gX(p))
q=p}r=r.fr
r.toString
r.ab(q.a4(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.ghI()
p=b4.dx
p=b4.ch=q.n(0,p.gX(p))
q=p}r=r.fy
r.toString
r.ab(q.a4(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ab(C.i.a4(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ab(C.i.a4(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ab(C.i.a4(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.bf(r.a,r.d,l)
for(r=[P.B],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.c(p,k)
p=p[k]
q.toString
H.j(p,"$iai")
q=q.r1
if(k>=q.length)return H.c(q,k)
q=q[k]
j=new Float32Array(H.cK(H.m(p.a4(0,!0),"$ib",r,"$ab")))
C.b.dD(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.M(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a6(m,b2.f.d)
r=b2.a
q=b2.f.d
r.ac(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.M(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a6(m,b2.r.d)
r=b2.a
q=b2.r.d
r.ac(r.x2,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.M(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a6(m,b2.x.d)
r=b2.a
q=b2.x.d
r.ac(r.aq,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.d5
C.b.M(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a6(m,b2.y.d)
r=b2.a
q=b2.y.d
r.ac(r.d6,q)}r=t.e
q=r.a
if(q||r.b||!1){p=b2.a
o=b2.z.ch
p=p.d9
C.b.V(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.d7
C.b.M(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a6(m,b2.z.d)
r=b2.a
q=b2.z.d
r.ac(r.d8,q)}r=t.z
if(r.length>0){q=b4.db
i=q.gX(q)
q=P.r
h=new H.V([q,q])
for(q=b2.dx.e,p=q.length,o=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gaj()
d=h.j(0,e)
if(d==null)d=0
h.l(0,e,d+1)
c=J.eJ(b2.a.bO.j(0,e),d)
b=f.gd0(f)
a=C.c.n(i.a,b.gb5(b))+C.c.n(i.b,b.gb6(b))+C.c.n(i.c,b.gb7())
a0=C.c.n(i.e,b.gb5(b))+C.c.n(i.f,b.gb6(b))+C.c.n(i.r,b.gb7())
b=C.c.n(i.y,b.gb5(b))+C.c.n(i.z,b.gb6(b))+C.c.n(i.Q,b.gb7())
b=new V.O(a,a0,b).t(0,Math.sqrt(a*a+a0*a0+b*b))
a0=c.e
a=b.a
a1=b.b
b=b.c
C.b.M(a0.a,a0.d,a,a1,b)
b=f.gaQ(f)
a1=c.f
C.b.M(a1.a,a1.d,b.a,b.b,b.c)
f.ga9()
b=f.gd0(f)
a=c.d
C.b.M(a.a,a.d,b.a,b.b,b.c)
b=f.gbg()
a=c.b
C.b.M(a.a,a.d,b.a,b.b,b.c)
b=f.gbd(f)
a=c.c
C.b.M(a.a,a.d,b.a,b.b,b.c)
b=f.ga9()
H.m(m,"$ib",o,"$ab")
if(!C.a.ad(m,b)){b.a=m.length
C.a.h(m,b)}b=f.ga9()
a=b.gba(b)
if(a){a=c.r
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.bN.j(0,p)
C.b.bf(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.gX(q)
q=P.r
a2=new H.V([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],b=[P.B],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gaj()
d=a2.j(0,e)
if(d==null)d=0
a2.l(0,e,d+1)
c=J.eJ(b2.a.bQ.j(0,e),d)
a3=i.n(0,f.gX(f))
a=f.gX(f)
a0=$.cl
a=a.c5(a0==null?$.cl=new V.ag(0,0,0):a0)
a0=c.b
C.b.M(a0.a,a0.d,a.a,a.b,a.c)
a=$.cl
a=a3.c5(a==null?$.cl=new V.ag(0,0,0):a)
a0=c.c
C.b.M(a0.a,a0.d,a.a,a.b,a.c)
a=f.gaQ(f)
a0=c.e
C.b.M(a0.a,a0.d,a.a,a.b,a.c)
f.ga9()
a=a3.bV(0)
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
j=new Float32Array(H.cK(H.m(new V.di(a0,a1,a4,a5,a6,a7,a8,a9,a).a4(0,!0),"$ib",b,"$ab")))
C.b.dC(b0.a,b0.d,!1,j)
f.ga9()
a=f.ga9()
H.m(m,"$ib",o,"$ab")
if(!C.a.ad(m,a)){a.a=m.length
C.a.h(m,a)}a=f.ga9()
a0=a.gba(a)
if(a0){a0=c.f
a0.toString
a1=a.d
if(a1<6)a0.a.uniform1i(a0.d,0)
else{a=a.a
a0.a.uniform1i(a0.d,a)}}f.gaH()
a=f.gdJ()
a0=c.x
a0.toString
a1=a.gb5(a)
a4=a.gb6(a)
a5=a.gb7()
a=a.ghh()
C.b.dB(a0.a,a0.d,a1,a4,a5,a)
a=f.gaH()
if(!C.a.ad(m,a)){a.a=m.length
C.a.h(m,a)}a=f.gaH()
a0=a.gba(a)
if(a0){a0=c.r
a0.toString
a1=a.d
if(a1<6)a0.a.uniform1i(a0.d,0)
else{a=a.a
a0.a.uniform1i(a0.d,a)}}if(f.ghj()){a=f.gh5()
a0=c.y
C.b.V(a0.a,a0.d,a)
a=f.gh6()
a0=c.z
C.b.V(a0.a,a0.d,a)
a=f.gh7()
a0=c.Q
C.b.V(a0.a,a0.d,a)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=a2.j(0,p)
if(l==null)l=0
p=b2.a.bP.j(0,p)
C.b.bf(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.gX(q)
q=P.r
b1=new H.V([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gaj()
d=b1.j(0,e)
if(d==null)d=0
b1.l(0,e,d+1)
c=J.eJ(b2.a.bS.j(0,e),d)
o=f.ghH(f)
b=c.b
C.b.M(b.a,b.d,o.a,o.b,o.c)
o=f.gd0(f).i7()
b=c.c
C.b.M(b.a,b.d,o.a,o.b,o.c)
o=i.c5(f.ghH(f))
b=c.d
C.b.M(b.a,b.d,o.a,o.b,o.c)
o=f.gaQ(f)
b=c.e
C.b.M(b.a,b.d,o.a,o.b,o.c)
f.ga9()
o=f.gbg()
b=c.f
C.b.M(b.a,b.d,o.a,o.b,o.c)
o=f.gbd(f)
b=c.r
C.b.M(b.a,b.d,o.a,o.b,o.c)
o=f.gi8()
b=c.x
C.b.V(b.a,b.d,o)
o=f.gi9()
b=c.y
C.b.V(b.a,b.d,o)
f.ga9()
o=f.ga9()
H.m(m,"$ib",b3,"$ab")
if(!C.a.ad(m,o)){o.a=m.length
C.a.h(m,o)}o=f.ga9()
b=o.gba(o)
if(b){b=c.dx
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}f.gaH()
o=f.gdJ()
b=c.z
b.toString
a=o.gb5(o)
a0=o.gb6(o)
a1=o.gb7()
o=o.ghh()
C.b.dB(b.a,b.d,a,a0,a1,o)
o=f.gaH()
if(!C.a.ad(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaH()
b=o.gba(o)
if(b){b=c.dy
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}if(f.ghY()){o=f.ghX()
b=c.Q
C.b.V(b.a,b.d,o)
o=f.ghW()
b=c.ch
C.b.V(b.a,b.d,o)}if(f.ghj()){o=f.gh5()
b=c.cx
C.b.V(b.a,b.d,o)
o=f.gh6()
b=c.cy
C.b.V(b.a,b.d,o)
o=f.gh7()
b=c.db
C.b.V(b.a,b.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.u)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.bR.j(0,q)
C.b.bf(q.a,q.d,l)}}}if(t.f.b){b2.a6(m,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.ac(b3.da,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.gX(r).bV(0)}b3=b3.id
b3.toString
b3.ab(r.a4(0,!0))}if(t.cy){b2.a6(m,b2.ch)
b3=b2.a
r=b2.ch
b3.fG(b3.dc,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dd
C.b.M(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.a6(m,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.ac(b3.de,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
p=b2.cy.ch
q=q.df
C.b.V(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.dg
C.b.M(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.a6(m,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.ac(b3.dh,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
p=b2.db.f
r=r.di
C.b.V(r.a,r.d,p)}if(b3.b){b2.a6(m,b2.db.d)
r=b2.a
p=b2.db.d
r.ac(r.dj,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b4.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b5.e
p.W(b4)
p.a3(b4)
p.aX(b4)
if(!q||b3.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b3=m[k]
if(b3.c){b3.c=!1
r.activeTexture(33984+b3.a)
r.bindTexture(3553,null)}}b3=b2.a
b3.toString
r.useProgram(null)
b3.x.d1()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ct().aq},
se4:function(a){this.e=H.m(a,"$iT",[V.ai],"$aT")}}
O.fK.prototype={
$2:function(a,b){H.a7(a)
H.a7(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.az(a,C.e.a0(b+3,4)*4))},
$S:13}
O.fL.prototype={
$2:function(a,b){H.j(a,"$iaz")
H.j(b,"$iaz")
return J.jc(a.a,b.a)},
$S:36}
O.fM.prototype={
$2:function(a,b){H.a7(a)
H.a7(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aA(a,C.e.a0(b+3,4)*4))},
$S:13}
O.fN.prototype={
$2:function(a,b){H.j(a,"$iaA")
H.j(b,"$iaA")
return J.jc(a.a,b.a)},
$S:37}
O.fO.prototype={
$2:function(a,b){H.a7(a)
H.a7(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aC(a,C.e.a0(b+3,4)*4))},
$S:13}
O.fP.prototype={
$2:function(a,b){H.j(a,"$iaC")
H.j(b,"$iaC")
return J.jc(a.a,b.a)},
$S:38}
O.fE.prototype={
an:function(){var u,t=this
t.cc()
u=t.f
if(!(Math.abs(u-1)<$.J().a)){t.f=1
u=new D.H(t.b,u,1,[P.B])
u.b=!0
t.a.P(u)}}}
O.cf.prototype={
P:function(a){return this.a.P(H.j(a,"$iv"))},
aK:function(){return this.P(null)},
an:function(){},
cO:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.an()
u=s.a
u.a=null
u.P(null)}}}
O.fF.prototype={}
O.aQ.prototype={
cN:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.H(s.b+".color",u,a,[V.a8])
t.b=!0
s.a.P(t)}},
an:function(){this.cc()
this.cN(new V.a8(1,1,1))},
saQ:function(a,b){this.cO(new A.ae(!0,this.c.b,!1))
this.cN(b)}}
O.fH.prototype={}
O.fI.prototype={
an:function(){var u,t=this
t.cd()
u=t.ch
if(!(Math.abs(u-1)<$.J().a)){t.ch=1
u=new D.H(t.b+".refraction",u,1,[P.B])
u.b=!0
t.a.P(u)}}}
O.fJ.prototype={
an:function(){var u,t=this
t.cd()
u=t.ch
if(!(Math.abs(u-100)<$.J().a)){t.ch=100
u=new D.H(t.b+".shininess",u,100,[P.B])
u.b=!0
t.a.P(u)}}}
O.du.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.K():u},
P:function(a){var u
H.j(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
aK:function(){return this.P(null)},
dt:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.j(a.fr.j(0,n),"$idv")
if(u==null){t=a.a
u=new A.dv(t,n)
u.ce(t,n)
u.dk(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.p(u.y.j(0,"fov"),"$ia0")
u.ch=H.p(u.y.j(0,"ratio"),"$ia0")
u.cx=H.p(u.y.j(0,"boxClr"),"$iQ")
u.cy=H.p(u.y.j(0,"boxTxt"),"$ibw")
u.db=H.p(u.y.j(0,"viewMat"),"$ial")
a.cT(u)}o.a=u}if(b.e==null){t=b.d.cW(new Z.dP(a.a),$.aG())
t.ar($.aG()).e=o.a.z.c
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
C.b.V(p.a,p.d,q)
q=r.ch
C.b.V(q.a,q.d,t/s)
s=o.c
r.cy.dI(s)
s=o.d
t=r.cx
C.b.M(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gX(s).bV(0)
r=r.db
r.toString
r.ab(s.a4(0,!0))
t=b.e
if(t instanceof Z.c3){t.W(a)
t.a3(a)
t.aX(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.d1()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bu.prototype={}
T.cs.prototype={}
T.dA.prototype={}
T.hF.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.K():u}}
T.dB.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.K():u}}
T.hG.prototype={
hr:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.jZ(a)
t=new T.hF()
t.a=0
t.b=q
t.d=t.c=!1
r=W.k
W.a1(u,"load",H.n(new T.hI(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aA:function(a,b,c,d,e,f){var u,t=W.jZ(c);++this.d
u=W.k
W.a1(t,"load",H.n(new T.hH(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
cM:function(a,b,c){var u,t,s,r
b=V.jJ(b)
u=V.jJ(a.width)
t=V.jJ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jg()
s.width=u
s.height=t
r=H.j(C.h.dE(s,"2d"),"$ic4")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mw(r.getImageData(0,0,s.width,s.height))}}}
T.hI.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.cM(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.b.dw(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.d3()}++s.e},
$S:8}
T.hH.prototype={
$1:function(a){var u=this,t=u.a,s=t.cM(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.dw(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.d3()}++t.e},
$S:8}
V.eL.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"},
$ib5:1}
V.b5.prototype={}
V.df.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sam:function(a){this.a=H.m(a,"$ib",[V.b5],"$ab")},
$ib5:1}
V.b7.prototype={
aE:function(a,b){return!this.dN(0,b)},
i:function(a){return"!["+this.cb(0)+"]"}}
V.hj.prototype={
dR:function(a){var u,t
if(a.a.length<=0)throw H.h(P.w("May not create a SetMatcher with zero characters."))
u=new H.V([P.r,P.a2])
for(t=new H.dd(a,a.gk(a),[H.ay(a,"t",0)]);t.u();)u.l(0,t.d,!0)
this.sfE(u)},
aE:function(a,b){return this.a.cZ(0,b)},
i:function(a){var u=this.a
return P.jr(new H.dc(u,[H.x(u,0)]))},
sfE:function(a){this.a=H.m(a,"$iD",[P.r,P.a2],"$aD")},
$ib5:1}
V.cp.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cu(this.a.J(0,b))
r.sam(H.d([],[V.b5]))
r.c=!1
C.a.h(this.c,r)
return r},
hk:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
sfZ:function(a){this.c=H.m(a,"$ib",[V.cu],"$ab")}}
V.dD.prototype={
i:function(a){var u=H.kM(this.b,"\n","\\n"),t=H.kM(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ct.prototype={
i:function(a){return this.b},
sfz:function(a){var u=P.l
this.c=H.m(a,"$iD",[u,u],"$aD")}}
V.hL.prototype={
J:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cp(this,b)
u.sfZ(H.d([],[V.cu]))
u.d=null
this.a.l(0,b,u)}return u},
aW:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.ct(a)
u=P.l
t.sfz(new H.V([u,u]))
this.b.l(0,a,t)}return t},
hU:function(a){var u,t,s,r,q,p,o,n,m=H.d([],[V.dD]),l=this.c,k=[P.r],j=H.d([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.d.aZ(a,s)
q=l.hk(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jr(j)
throw H.h(P.w("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.d([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jr(j)
o=l.d
n=o.c.j(0,p)
t=new V.dD(n==null?o.b:n,p,s)}++s}}},
sfO:function(a){this.a=H.m(a,"$iD",[P.l,V.cp],"$aD")},
sfS:function(a){this.b=H.m(a,"$iD",[P.l,V.ct],"$aD")}}
V.cu.prototype={
i:function(a){return this.b.b+": "+this.cb(0)}}
X.bD.prototype={$ibK:1}
X.fm.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.K():u},
ag:function(a){var u=this.x
if(u!=null)u.A(a)},
W:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.C(u)
q=C.c.ae(r*u)
r=s.b
if(typeof t!=="number")return H.C(t)
p=C.c.ae(r*t)
r=C.c.ae(s.c*u)
a.c=r
s=C.c.ae(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fo.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.K():u},
W:function(a){var u
a.cy.bc(V.bJ())
u=V.bJ()
a.db.bc(u)},
aX:function(a){a.cy.au()
a.db.au()},
$ibK:1,
$ibD:1}
X.dn.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.K():u},
ag:function(a){var u
H.j(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
dZ:function(){return this.ag(null)},
W:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=a.c,j=a.d,i=l.c,h=l.d,g=l.e,f=g-h,e=1/Math.tan(i*0.5),d=V.aR(-e/(k/j),0,0,0,0,e,0,0,0,0,g/f,-g*h/f,0,0,1,0)
a.cy.bc(d)
k=$.k6
if(k==null){k=V.lu()
j=$.kn
if(j==null)j=$.kn=new V.O(0,1,0)
i=$.km
if(i==null)i=$.km=new V.O(0,0,-1)
u=i.t(0,Math.sqrt(i.w(i)))
j=j.aR(u)
t=j.t(0,Math.sqrt(j.w(j)))
s=u.aR(t)
r=new V.O(k.a,k.b,k.c)
q=t.L(0).w(r)
p=s.L(0).w(r)
o=u.L(0).w(r)
k=V.aR(t.a,s.a,u.a,q,t.b,s.b,u.b,p,t.c,s.c,u.c,o,0,0,0,1)
$.k6=k
n=k}else n=k
k=l.b
if(k!=null){m=k.aF(0,a,l)
if(m!=null)n=m.n(0,n)}a.db.bc(n)},
aX:function(a){a.cy.au()
a.db.au()},
$ibK:1,
$ibD:1}
X.cr.prototype={}
V.j9.prototype={
$1:function(a){var u
H.j(a,"$iaY")
u=C.c.dA(this.a.ghl(),2)
if(u!=="0.00")P.jK(u+" fps")},
$S:40}
V.hn.prototype={
dS:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.k
W.a1(q,"scroll",H.n(new V.hp(o),{func:1,ret:-1,args:[r]}),!1,r)},
cS:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.l],"$ab")
this.fI()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hU(C.a.hp(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.kL(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.a4(m[1])
l.textContent=H.a4(m[0])
t.appendChild(l)}else{k=P.lX(C.F,n,C.n,!1)
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
fI:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.hL()
t=P.l
u.sfO(new H.V([t,V.cp]))
u.sfS(new H.V([t,V.ct]))
u.c=null
u.c=u.J(0,q)
t=u.J(0,q).q(0,p)
s=V.ab(new H.X("*"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,p).q(0,p)
s=new V.b7()
r=[V.b5]
s.sam(H.d([],r))
C.a.h(t.a,s)
t=V.ab(new H.X("*"))
C.a.h(s.a,t)
t=u.J(0,p).q(0,"BoldEnd")
s=V.ab(new H.X("*"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,q).q(0,o)
s=V.ab(new H.X("_"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,o).q(0,o)
s=new V.b7()
s.sam(H.d([],r))
C.a.h(t.a,s)
t=V.ab(new H.X("_"))
C.a.h(s.a,t)
t=u.J(0,o).q(0,n)
s=V.ab(new H.X("_"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,q).q(0,m)
s=V.ab(new H.X("`"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,m).q(0,m)
s=new V.b7()
s.sam(H.d([],r))
C.a.h(t.a,s)
t=V.ab(new H.X("`"))
C.a.h(s.a,t)
t=u.J(0,m).q(0,"CodeEnd")
s=V.ab(new H.X("`"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,q).q(0,l)
s=V.ab(new H.X("["))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,l).q(0,k)
s=V.ab(new H.X("|"))
C.a.h(t.a,s)
s=u.J(0,l).q(0,j)
t=V.ab(new H.X("]"))
C.a.h(s.a,t)
s.c=!0
s=u.J(0,l).q(0,l)
t=new V.b7()
t.sam(H.d([],r))
C.a.h(s.a,t)
s=V.ab(new H.X("|]"))
C.a.h(t.a,s)
s=u.J(0,k).q(0,j)
t=V.ab(new H.X("]"))
C.a.h(s.a,t)
s.c=!0
s=u.J(0,k).q(0,k)
t=new V.b7()
t.sam(H.d([],r))
C.a.h(s.a,t)
s=V.ab(new H.X("|]"))
C.a.h(t.a,s)
C.a.h(u.J(0,q).q(0,i).a,new V.eL())
s=u.J(0,i).q(0,i)
t=new V.b7()
t.sam(H.d([],r))
C.a.h(s.a,t)
s=V.ab(new H.X("*_`["))
C.a.h(t.a,s)
s=u.J(0,"BoldEnd")
s.d=s.a.aW(p)
s=u.J(0,n)
s.d=s.a.aW(o)
s=u.J(0,"CodeEnd")
s.d=s.a.aW(m)
s=u.J(0,j)
s.d=s.a.aW("Link")
s=u.J(0,i)
s.d=s.a.aW(i)
this.b=u}}
V.hp.prototype={
$1:function(a){P.kh(C.j,new V.ho(this.a))},
$S:8}
V.ho.prototype={
$0:function(){var u=C.c.ae(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.dL=u.i
u=J.d9.prototype
u.dM=u.i
u=O.cf.prototype
u.cc=u.an
u=O.aQ.prototype
u.cd=u.an
u=V.df.prototype
u.dN=u.aE
u.cb=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mq","lP",12)
u(P,"mr","lQ",12)
u(P,"ms","lR",12)
t(P,"kz","mo",3)
var n
s(n=E.af.prototype,"gdr",0,0,null,["$1","$0"],["ds","hz"],0,0)
s(n,"gdn",0,0,null,["$1","$0"],["dq","hw"],0,0)
r(n,"ghu","hv",6)
r(n,"ghx","hy",6)
s(n=E.dC.prototype,"gcg",0,0,null,["$1","$0"],["cj","ci"],0,0)
q(n,"ghL","du",3)
p(n=X.dJ.prototype,"geT","eU",10)
p(n,"geH","eI",10)
p(n,"geN","eO",4)
p(n,"geX","eY",17)
p(n,"geV","eW",17)
p(n,"gf0","f1",4)
p(n,"gf4","f5",4)
p(n,"geR","eS",4)
p(n,"gf2","f3",4)
p(n,"geP","eQ",4)
p(n,"gf6","f7",31)
p(n,"gf8","f9",10)
p(n,"gfo","fp",11)
p(n,"gfk","fl",11)
p(n,"gfm","fn",11)
s(n=D.db.prototype,"gcE",0,0,null,["$1","$0"],["cF","eZ"],0,0)
p(n,"gfa","fb",32)
r(n,"geB","eC",15)
r(n,"gfe","ff",15)
o(V.N.prototype,"gk","bX",20)
o(V.O.prototype,"gk","bX",20)
s(n=U.cc.prototype,"gaB",0,0,null,["$1","$0"],["K","a_"],0,0)
r(n,"gez","eA",21)
r(n,"gfc","fd",21)
s(n=U.dK.prototype,"gaB",0,0,null,["$1","$0"],["K","a_"],0,0)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
p(n,"gbw","bx",1)
s(n=U.dL.prototype,"gaB",0,0,null,["$1","$0"],["K","a_"],0,0)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
p(n,"gbw","bx",1)
p(n,"ges","eu",1)
p(n,"gev","ew",1)
p(n,"gfX","fY",1)
p(n,"gfV","fW",1)
p(n,"gfT","fU",1)
p(U.dM.prototype,"gex","ey",1)
s(n=M.cV.prototype,"gS",0,0,null,["$1","$0"],["T","aJ"],0,0)
r(n,"gfg","fh",23)
r(n,"gfi","fj",23)
s(M.cY.prototype,"gS",0,0,null,["$1","$0"],["T","aJ"],0,0)
s(n=M.d3.prototype,"gS",0,0,null,["$1","$0"],["T","aJ"],0,0)
r(n,"geJ","eK",6)
r(n,"geL","eM",6)
s(n=O.dg.prototype,"gay",0,0,null,["$1","$0"],["P","aK"],0,0)
s(n,"gfC",0,0,null,["$1","$0"],["cK","fD"],0,0)
r(n,"geD","eE",14)
r(n,"geF","eG",14)
s(O.cf.prototype,"gay",0,0,null,["$1","$0"],["P","aK"],0,0)
s(O.du.prototype,"gay",0,0,null,["$1","$0"],["P","aK"],0,0)
s(X.dn.prototype,"gdY",0,0,null,["$1","$0"],["ag","dZ"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jo,J.a,J.ah,P.e5,P.f,H.dd,P.aN,H.bG,H.dI,H.hQ,P.bm,H.c5,H.em,P.a9,H.fv,H.fw,H.fr,P.es,P.b2,P.aw,P.dQ,P.hx,P.cq,P.hy,P.aY,P.ad,P.iS,P.iM,P.cA,P.e4,P.t,P.c6,P.iR,P.a2,P.as,P.a3,P.bl,P.h5,P.dy,P.dY,P.fl,P.b,P.D,P.I,P.ak,P.l,P.bt,W.f0,W.A,W.d5,P.ex,P.iH,O.T,O.cg,E.eU,E.af,E.hb,E.dC,Z.dO,Z.dP,Z.c3,Z.bo,Z.bc,D.eX,D.c9,D.v,X.cU,X.da,X.ft,X.fz,X.ao,X.fW,X.hM,X.dJ,D.d_,D.a5,D.dp,D.dx,V.a8,V.ar,V.fc,V.di,V.ai,V.a_,V.ag,V.ba,V.dr,V.N,V.O,U.dK,U.dL,U.dM,M.cY,M.d3,M.ap,A.cQ,A.eP,A.ae,A.az,A.aA,A.aC,A.fG,A.bO,A.bP,A.bQ,A.dF,A.hY,F.Z,F.b4,F.bs,F.dt,F.hk,F.hl,F.hm,F.au,F.i6,F.i7,F.ia,F.ib,O.bu,O.cf,O.fH,T.hG,V.eL,V.b5,V.df,V.hj,V.cp,V.dD,V.ct,V.hL,X.bD,X.cr,X.fo,X.dn,V.hn])
s(J.a,[J.fq,J.d8,J.d9,J.aO,J.ce,J.bI,H.cj,W.e,W.eK,W.cR,W.c4,W.aJ,W.aK,W.M,W.dS,W.f4,W.f5,W.dU,W.d2,W.dW,W.f7,W.k,W.dZ,W.aM,W.fn,W.e0,W.bn,W.fy,W.fQ,W.e6,W.e7,W.aS,W.e8,W.eb,W.aT,W.ef,W.eh,W.aV,W.ei,W.aW,W.en,W.aD,W.eq,W.hK,W.aZ,W.et,W.hO,W.i2,W.ey,W.eA,W.eC,W.eE,W.eG,P.b3,P.e2,P.b8,P.ed,P.h9,P.eo,P.bb,P.ev,P.eQ,P.dR,P.cS,P.dq,P.bN,P.ds,P.dz,P.dG,P.ek])
s(J.d9,[J.h6,J.cx,J.br])
t(J.jn,J.aO)
s(J.ce,[J.d7,J.d6])
t(P.fx,P.e5)
s(P.fx,[H.dH,W.ip,W.io,P.fh])
t(H.X,H.dH)
s(P.f,[H.fa,H.fC,H.ig])
s(P.aN,[H.fD,H.ih])
s(P.bm,[H.h2,H.fs,H.i0,H.hS,H.eW,H.hh,P.eO,P.dm,P.aH,P.i1,P.i_,P.ht,P.eZ,P.f3])
s(H.c5,[H.jb,H.hC,H.j3,H.j4,H.j5,P.ik,P.ij,P.il,P.im,P.iQ,P.iP,P.iu,P.iy,P.iv,P.iw,P.ix,P.iB,P.iC,P.iA,P.iz,P.hz,P.hA,P.iY,P.iK,P.iJ,P.iL,P.fB,P.f8,P.f9,W.fS,W.fU,W.hg,W.hw,W.it,P.j_,P.fi,P.fj,P.eS,E.hc,E.hd,E.he,E.hJ,D.fd,D.fe,F.iT,F.id,F.ic,F.i8,F.i9,O.fK,O.fL,O.fM,O.fN,O.fO,O.fP,T.hI,T.hH,V.j9,V.hp,V.ho])
s(H.hC,[H.hu,H.c1])
t(H.ii,P.eO)
t(P.fA,P.a9)
t(H.V,P.fA)
t(H.dc,H.fa)
t(H.dj,H.cj)
s(H.dj,[H.cB,H.cD])
t(H.cC,H.cB)
t(H.ci,H.cC)
t(H.cE,H.cD)
t(H.dk,H.cE)
s(H.dk,[H.fX,H.fY,H.fZ,H.h_,H.h0,H.dl,H.h1])
t(P.iI,P.iS)
t(P.iG,P.iM)
t(P.cX,P.hy)
t(P.fb,P.c6)
t(P.i3,P.fb)
t(P.i4,P.cX)
s(P.a3,[P.B,P.r])
s(P.aH,[P.bM,P.fp])
s(W.e,[W.F,W.fg,W.aU,W.cF,W.aX,W.aE,W.cH,W.ie,W.cy,P.eT,P.bC])
s(W.F,[W.Y,W.bk])
s(W.Y,[W.q,P.o])
s(W.q,[W.eM,W.eN,W.bE,W.d0,W.fk,W.cd,W.hi])
s(W.aJ,[W.c8,W.f1,W.f2])
t(W.f_,W.aK)
t(W.bF,W.dS)
t(W.dV,W.dU)
t(W.d1,W.dV)
t(W.dX,W.dW)
t(W.f6,W.dX)
t(W.aL,W.cR)
t(W.e_,W.dZ)
t(W.ff,W.e_)
t(W.e1,W.e0)
t(W.bH,W.e1)
t(W.bv,W.k)
s(W.bv,[W.aP,W.a6,W.aF])
t(W.fR,W.e6)
t(W.fT,W.e7)
t(W.e9,W.e8)
t(W.fV,W.e9)
t(W.ec,W.eb)
t(W.ck,W.ec)
t(W.eg,W.ef)
t(W.h7,W.eg)
t(W.hf,W.eh)
t(W.cG,W.cF)
t(W.hq,W.cG)
t(W.ej,W.ei)
t(W.hr,W.ej)
t(W.hv,W.en)
t(W.er,W.eq)
t(W.hD,W.er)
t(W.cI,W.cH)
t(W.hE,W.cI)
t(W.eu,W.et)
t(W.hN,W.eu)
t(W.b1,W.a6)
t(W.ez,W.ey)
t(W.iq,W.ez)
t(W.dT,W.d2)
t(W.eB,W.eA)
t(W.iD,W.eB)
t(W.eD,W.eC)
t(W.ea,W.eD)
t(W.eF,W.eE)
t(W.iN,W.eF)
t(W.eH,W.eG)
t(W.iO,W.eH)
t(W.ir,P.hx)
t(W.jv,W.ir)
t(W.is,P.cq)
t(P.aj,P.iH)
t(P.e3,P.e2)
t(P.fu,P.e3)
t(P.ee,P.ed)
t(P.h3,P.ee)
t(P.ep,P.eo)
t(P.hB,P.ep)
t(P.ew,P.ev)
t(P.hP,P.ew)
t(P.eR,P.dR)
t(P.h4,P.bC)
t(P.el,P.ek)
t(P.hs,P.el)
s(E.eU,[Z.cT,A.co,T.cs])
s(D.v,[D.bp,D.bq,D.H,X.h8])
s(X.h8,[X.de,X.b6,X.ch,X.dE])
s(O.T,[D.db,U.cc,M.cV])
s(D.eX,[U.eY,U.aa])
t(U.cW,U.aa)
s(A.co,[A.dh,A.dv])
s(A.dF,[A.at,A.hV,A.hW,A.hX,A.hT,A.a0,A.hU,A.Q,A.cv,A.hZ,A.cw,A.al,A.ac,A.bw])
s(O.bu,[O.dg,O.du])
s(O.cf,[O.fE,O.fF,O.aQ])
s(O.aQ,[O.fI,O.fJ])
s(T.cs,[T.dA,T.dB])
t(T.hF,T.dA)
s(V.df,[V.b7,V.cu])
t(X.fm,X.cr)
u(H.dH,H.dI)
u(H.cB,P.t)
u(H.cC,H.bG)
u(H.cD,P.t)
u(H.cE,H.bG)
u(P.e5,P.t)
u(W.dS,W.f0)
u(W.dU,P.t)
u(W.dV,W.A)
u(W.dW,P.t)
u(W.dX,W.A)
u(W.dZ,P.t)
u(W.e_,W.A)
u(W.e0,P.t)
u(W.e1,W.A)
u(W.e6,P.a9)
u(W.e7,P.a9)
u(W.e8,P.t)
u(W.e9,W.A)
u(W.eb,P.t)
u(W.ec,W.A)
u(W.ef,P.t)
u(W.eg,W.A)
u(W.eh,P.a9)
u(W.cF,P.t)
u(W.cG,W.A)
u(W.ei,P.t)
u(W.ej,W.A)
u(W.en,P.a9)
u(W.eq,P.t)
u(W.er,W.A)
u(W.cH,P.t)
u(W.cI,W.A)
u(W.et,P.t)
u(W.eu,W.A)
u(W.ey,P.t)
u(W.ez,W.A)
u(W.eA,P.t)
u(W.eB,W.A)
u(W.eC,P.t)
u(W.eD,W.A)
u(W.eE,P.t)
u(W.eF,W.A)
u(W.eG,P.t)
u(W.eH,W.A)
u(P.e2,P.t)
u(P.e3,W.A)
u(P.ed,P.t)
u(P.ee,W.A)
u(P.eo,P.t)
u(P.ep,W.A)
u(P.ev,P.t)
u(P.ew,W.A)
u(P.dR,P.a9)
u(P.ek,P.t)
u(P.el,W.A)})()
var v={mangledGlobalNames:{r:"int",B:"double",a3:"num",l:"String",a2:"bool",I:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[P.l,,]},{func:1,ret:-1,args:[P.r,[P.f,E.af]]},{func:1,ret:P.I,args:[F.Z]},{func:1,ret:P.I,args:[W.k]},{func:1,ret:P.I,args:[D.v]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.r,P.r]},{func:1,ret:-1,args:[P.r,[P.f,V.ai]]},{func:1,ret:-1,args:[P.r,[P.f,D.a5]]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aP]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.l,args:[P.r]},{func:1,ret:P.B},{func:1,ret:-1,args:[P.r,[P.f,U.aa]]},{func:1,ret:P.I,args:[,]},{func:1,ret:-1,args:[P.r,[P.f,M.ap]]},{func:1,args:[,]},{func:1,ret:W.Y,args:[W.F]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,ret:P.I,args:[P.a3]},{func:1,ret:[P.aw,,],args:[,]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:P.a2,args:[[P.f,D.a5]]},{func:1,ret:P.I,args:[F.au,P.B,P.B]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,args:[W.k]},{func:1,ret:P.r,args:[A.az,A.az]},{func:1,ret:P.r,args:[A.aA,A.aA]},{func:1,ret:P.r,args:[A.aC,A.aC]},{func:1,ret:P.a2,args:[W.F]},{func:1,ret:P.I,args:[P.aY]},{func:1,ret:P.I,args:[,],opt:[P.ak]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.h=W.bE.prototype
C.o=W.bF.prototype
C.C=J.a.prototype
C.a=J.aO.prototype
C.D=J.d6.prototype
C.e=J.d7.prototype
C.i=J.d8.prototype
C.c=J.ce.prototype
C.d=J.bI.prototype
C.E=J.br.prototype
C.G=W.ck.prototype
C.p=J.h6.prototype
C.b=P.bN.prototype
C.k=J.cx.prototype
C.q=W.b1.prototype
C.r=W.cy.prototype
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.t=function() {
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
C.y=function(getTagFallback) {
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
C.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.v=function(hooks) {
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
C.x=function(hooks) {
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
C.w=function(hooks) {
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
C.m=function(hooks) { return hooks; }

C.z=new P.h5()
C.n=new P.i3()
C.A=new P.i4()
C.f=new P.iI()
C.j=new P.bl(0)
C.B=new P.bl(5e6)
C.F=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.r])})();(function staticFields(){$.aI=0
$.c2=null
$.jO=null
$.jx=!1
$.kD=null
$.kx=null
$.kJ=null
$.j0=null
$.j6=null
$.jH=null
$.bR=null
$.cL=null
$.cM=null
$.jy=!1
$.S=C.f
$.an=[]
$.jU=null
$.jT=null
$.jS=null
$.jR=null
$.k2=null
$.k7=null
$.cl=null
$.kd=null
$.kl=null
$.ko=null
$.kn=null
$.km=null
$.k6=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n_","kQ",function(){return H.kC("_$dart_dartClosure")})
u($,"n0","jL",function(){return H.kC("_$dart_js")})
u($,"n3","kR",function(){return H.b_(H.hR({
toString:function(){return"$receiver$"}}))})
u($,"n4","kS",function(){return H.b_(H.hR({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n5","kT",function(){return H.b_(H.hR(null))})
u($,"n6","kU",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n9","kX",function(){return H.b_(H.hR(void 0))})
u($,"na","kY",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n8","kW",function(){return H.b_(H.kj(null))})
u($,"n7","kV",function(){return H.b_(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nc","l_",function(){return H.b_(H.kj(void 0))})
u($,"nb","kZ",function(){return H.b_(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nt","jM",function(){return P.lO()})
u($,"nu","l3",function(){return P.lF("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mZ","kP",function(){return{}})
u($,"nm","l2",function(){return Z.av(0)})
u($,"ng","l0",function(){return Z.av(511)})
u($,"no","aG",function(){return Z.av(1)})
u($,"nn","bi",function(){return Z.av(2)})
u($,"ni","bh",function(){return Z.av(4)})
u($,"np","bj",function(){return Z.av(8)})
u($,"nq","bA",function(){return Z.av(16)})
u($,"nj","cO",function(){return Z.av(32)})
u($,"nk","cP",function(){return Z.av(64)})
u($,"nl","l1",function(){return Z.av(96)})
u($,"nr","bZ",function(){return Z.av(128)})
u($,"nh","bg",function(){return Z.av(256)})
u($,"mY","kO",function(){return new V.fc(1e-9)})
u($,"mX","J",function(){return $.kO()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cj,ArrayBufferView:H.cj,Float32Array:H.ci,Float64Array:H.ci,Int16Array:H.fX,Int32Array:H.fY,Int8Array:H.fZ,Uint16Array:H.h_,Uint32Array:H.h0,Uint8ClampedArray:H.dl,CanvasPixelArray:H.dl,Uint8Array:H.h1,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eK,HTMLAnchorElement:W.eM,HTMLAreaElement:W.eN,Blob:W.cR,HTMLCanvasElement:W.bE,CanvasRenderingContext2D:W.c4,CDATASection:W.bk,CharacterData:W.bk,Comment:W.bk,ProcessingInstruction:W.bk,Text:W.bk,CSSNumericValue:W.c8,CSSUnitValue:W.c8,CSSPerspective:W.f_,CSSCharsetRule:W.M,CSSConditionRule:W.M,CSSFontFaceRule:W.M,CSSGroupingRule:W.M,CSSImportRule:W.M,CSSKeyframeRule:W.M,MozCSSKeyframeRule:W.M,WebKitCSSKeyframeRule:W.M,CSSKeyframesRule:W.M,MozCSSKeyframesRule:W.M,WebKitCSSKeyframesRule:W.M,CSSMediaRule:W.M,CSSNamespaceRule:W.M,CSSPageRule:W.M,CSSRule:W.M,CSSStyleRule:W.M,CSSSupportsRule:W.M,CSSViewportRule:W.M,CSSStyleDeclaration:W.bF,MSStyleCSSProperties:W.bF,CSS2Properties:W.bF,CSSImageValue:W.aJ,CSSKeywordValue:W.aJ,CSSPositionValue:W.aJ,CSSResourceValue:W.aJ,CSSURLImageValue:W.aJ,CSSStyleValue:W.aJ,CSSMatrixComponent:W.aK,CSSRotation:W.aK,CSSScale:W.aK,CSSSkew:W.aK,CSSTranslation:W.aK,CSSTransformComponent:W.aK,CSSTransformValue:W.f1,CSSUnparsedValue:W.f2,DataTransferItemList:W.f4,HTMLDivElement:W.d0,DOMException:W.f5,ClientRectList:W.d1,DOMRectList:W.d1,DOMRectReadOnly:W.d2,DOMStringList:W.f6,DOMTokenList:W.f7,Element:W.Y,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aL,FileList:W.ff,FileWriter:W.fg,HTMLFormElement:W.fk,Gamepad:W.aM,History:W.fn,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,ImageData:W.bn,HTMLImageElement:W.cd,KeyboardEvent:W.aP,Location:W.fy,MediaList:W.fQ,MIDIInputMap:W.fR,MIDIOutputMap:W.fT,MimeType:W.aS,MimeTypeArray:W.fV,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.ck,RadioNodeList:W.ck,Plugin:W.aT,PluginArray:W.h7,RTCStatsReport:W.hf,HTMLSelectElement:W.hi,SourceBuffer:W.aU,SourceBufferList:W.hq,SpeechGrammar:W.aV,SpeechGrammarList:W.hr,SpeechRecognitionResult:W.aW,Storage:W.hv,CSSStyleSheet:W.aD,StyleSheet:W.aD,TextTrack:W.aX,TextTrackCue:W.aE,VTTCue:W.aE,TextTrackCueList:W.hD,TextTrackList:W.hE,TimeRanges:W.hK,Touch:W.aZ,TouchEvent:W.aF,TouchList:W.hN,TrackDefaultList:W.hO,CompositionEvent:W.bv,FocusEvent:W.bv,TextEvent:W.bv,UIEvent:W.bv,URL:W.i2,VideoTrackList:W.ie,WheelEvent:W.b1,Window:W.cy,DOMWindow:W.cy,CSSRuleList:W.iq,ClientRect:W.dT,DOMRect:W.dT,GamepadList:W.iD,NamedNodeMap:W.ea,MozNamedAttrMap:W.ea,SpeechRecognitionResultList:W.iN,StyleSheetList:W.iO,SVGLength:P.b3,SVGLengthList:P.fu,SVGNumber:P.b8,SVGNumberList:P.h3,SVGPointList:P.h9,SVGStringList:P.hB,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGScriptElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGTransform:P.bb,SVGTransformList:P.hP,AudioBuffer:P.eQ,AudioParamMap:P.eR,AudioTrackList:P.eT,AudioContext:P.bC,webkitAudioContext:P.bC,BaseAudioContext:P.bC,OfflineAudioContext:P.h4,WebGLBuffer:P.cS,WebGLProgram:P.dq,WebGL2RenderingContext:P.bN,WebGLShader:P.ds,WebGLTexture:P.dz,WebGLUniformLocation:P.dG,SQLResultSetRowList:P.hs})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
W.cF.$nativeSuperclassTag="EventTarget"
W.cG.$nativeSuperclassTag="EventTarget"
W.cH.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.kF,[])
else M.kF([])})})()
//# sourceMappingURL=test.dart.js.map
