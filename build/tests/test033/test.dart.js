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
a[c]=function(){a[c]=function(){H.mT(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jK(this,a,b,c,true,false,e).prototype
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
lg:function(){return new P.hy("No element")},
dy:function(a,b,c,d,e){if(c-b<=32)H.lH(a,b,c,d,e)
else H.lG(a,b,c,d,e)},
lH:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a_()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
lG:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.a1(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.a1(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
r=p}C.a.l(a2,d,u)
C.a.l(a2,b,s)
C.a.l(a2,c,q)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.l(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.l(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.Q(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a6()
if(k<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a_()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.d(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.a6()
if(g<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a_()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a_()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a6()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.d(a2,a1)
C.a.l(a2,a3,a2[a1])
C.a.l(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.d(a2,a1)
C.a.l(a2,a4,a2[a1])
C.a.l(a2,a1,r)
H.dy(a2,a3,o-2,a5,a6)
H.dy(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.d(a2,o)
if(!J.Q(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.d(a2,n)
if(!J.Q(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a6()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)}n=j
break}}}H.dy(a2,o,n,a5,a6)}else H.dy(a2,o,n,a5,a6)},
Y:function Y(a){this.a=a},
fc:function fc(){},
dg:function dg(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fG:function fG(a,b,c){this.a=a
this.b=b
this.$ti=c},
fH:function fH(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
im:function im(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b,c){this.a=a
this.b=b
this.$ti=c},
bH:function bH(){},
dJ:function dJ(){},
dI:function dI(){},
c0:function(a){var u,t=H.mU(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mC:function(a){return v.types[H.ab(a)]},
mH:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iG},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aq(a)
if(typeof u!=="string")throw H.i(H.bz(a))
return u},
cq:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cr:function(a){return H.lr(a)+H.jH(H.bA(a),0,null)},
lr:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.B||!!n.$icC){r=C.l(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c0(t.length>1&&C.c.b4(t,0)===36?C.c.aK(t,1):t)},
kb:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lA:function(a){var u,t,s,r=H.c([],[P.r])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bz(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.b7(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.bz(s))}return H.kb(r)},
kc:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bz(s))
if(s<0)throw H.i(H.bz(s))
if(s>65535)return H.lA(a)}return H.kb(a)},
lz:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.b7(u,10))>>>0,56320|u&1023)}throw H.i(P.aU(a,0,1114111,null,null))},
bL:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ly:function(a){var u=H.bL(a).getFullYear()+0
return u},
lw:function(a){var u=H.bL(a).getMonth()+1
return u},
ls:function(a){var u=H.bL(a).getDate()+0
return u},
lt:function(a){var u=H.bL(a).getHours()+0
return u},
lv:function(a){var u=H.bL(a).getMinutes()+0
return u},
lx:function(a){var u=H.bL(a).getSeconds()+0
return u},
lu:function(a){var u=H.bL(a).getMilliseconds()+0
return u},
C:function(a){throw H.i(H.bz(a))},
d:function(a,b){if(a==null)J.c3(a)
throw H.i(H.bX(a,b))},
bX:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,s,null)
u=H.ab(J.c3(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.T(b,a,s,null,u)
return P.he(b,s)},
mw:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bM(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bM(a,c,!0,b,"end",u)
return new P.aG(!0,b,"end",null)},
bz:function(a){return new P.aG(!0,a,null,null)},
ms:function(a){if(typeof a!=="number")throw H.i(H.bz(a))
return a},
i:function(a){var u
if(a==null)a=new P.dq()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kN})
u.name=""}else u.toString=H.kN
return u},
kN:function(){return J.aq(this.dartException)},
y:function(a){throw H.i(a)},
t:function(a){throw H.i(P.ca(a))},
b0:function(a){var u,t,s,r,q,p
a=H.kL(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kl:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k6:function(a,b){return new H.h6(a,b==null?null:b.method)},
js:function(a,b){var u=b==null,t=u?null:b.method
return new H.fw(a,t,u?null:b.receiver)},
bB:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.b7(t,16)&8191)===10)switch(s){case 438:return f.$1(H.js(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k6(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kQ()
q=$.kR()
p=$.kS()
o=$.kT()
n=$.kW()
m=$.kX()
l=$.kV()
$.kU()
k=$.kZ()
j=$.kY()
i=r.a9(u)
if(i!=null)return f.$1(H.js(H.a8(u),i))
else{i=q.a9(u)
if(i!=null){i.method="call"
return f.$1(H.js(H.a8(u),i))}else{i=p.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=n.a9(u)
if(i==null){i=m.a9(u)
if(i==null){i=l.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=k.a9(u)
if(i==null){i=j.a9(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k6(H.a8(u),i))}}return f.$1(new H.i3(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dA()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aG(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dA()
return a},
bZ:function(a){var u
if(a==null)return new H.en(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.en(a)},
mz:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
mG:function(a,b,c,d,e,f){H.j(a,"$ijm")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.x("Unsupported number of arguments for wrapped closure"))},
bW:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mG)
a.$identity=u
return u},
lb:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hz().constructor.prototype):Object.create(new H.c4(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aH
if(typeof t!=="number")return t.B()
$.aH=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jX(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l7(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jX(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l7:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mC,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jW:H.jj
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.i("Error in functionType of tearoff")},
l8:function(a,b,c,d){var u=H.jj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jX:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.la(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l8(t,!r,u,b)
if(t===0){r=$.aH
if(typeof r!=="number")return r.B()
$.aH=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c5
return new Function(r+H.h(q==null?$.c5=H.eW("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aH
if(typeof r!=="number")return r.B()
$.aH=r+1
o+=r
r="return function("+o+"){return this."
q=$.c5
return new Function(r+H.h(q==null?$.c5=H.eW("self"):q)+"."+H.h(u)+"("+o+");}")()},
l9:function(a,b,c,d){var u=H.jj,t=H.jW
switch(b?-1:a){case 0:throw H.i(H.lE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
la:function(a,b){var u,t,s,r,q,p,o,n=$.c5
if(n==null)n=$.c5=H.eW("self")
u=$.jV
if(u==null)u=$.jV=H.eW("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l9(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.aH
if(typeof u!=="number")return u.B()
$.aH=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.aH
if(typeof u!=="number")return u.B()
$.aH=u+1
return new Function(n+u+"}")()},
jK:function(a,b,c,d,e,f,g){return H.lb(a,b,c,d,!!e,!!f,g)},
jj:function(a){return a.a},
jW:function(a){return a.c},
eW:function(a){var u,t,s,r=new H.c4("self","target","receiver","name"),q=J.jp(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
z:function(a){if(a==null)H.mo("boolean expression must not be null")
return a},
a8:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.b1(a,"String"))},
nx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.b1(a,"double"))},
kH:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.b1(a,"num"))},
kB:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.b1(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.b1(a,"int"))},
kJ:function(a,b){throw H.i(H.b1(a,H.c0(H.a8(b).substring(2))))},
mN:function(a,b){throw H.i(H.l6(a,H.c0(H.a8(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.kJ(a,b)},
p:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.mN(a,b)},
mI:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.kJ(a,b)},
kC:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ab(u)]
else return a.$S()}return},
eJ:function(a,b){var u
if(typeof a=="function")return!0
u=H.kC(J.V(a))
if(u==null)return!1
return H.ks(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.jE)return a
$.jE=!0
try{if(H.eJ(a,b))return a
u=H.jd(b)
t=H.b1(a,u)
throw H.i(t)}finally{$.jE=!1}},
jL:function(a,b){if(a!=null&&!H.jJ(a,b))H.y(H.b1(a,H.jd(b)))
return a},
b1:function(a,b){return new H.hV("TypeError: "+P.d7(a)+": type '"+H.h(H.kw(a))+"' is not a subtype of type '"+b+"'")},
l6:function(a,b){return new H.eX("CastError: "+P.d7(a)+": type '"+H.h(H.kw(a))+"' is not a subtype of type '"+b+"'")},
kw:function(a){var u,t=J.V(a)
if(!!t.$ic8){u=H.kC(t)
if(u!=null)return H.jd(u)
return"Closure"}return H.cr(a)},
mo:function(a){throw H.i(new H.ip(a))},
mT:function(a){throw H.i(new P.f5(a))},
lE:function(a){return new H.hm(a)},
kD:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bA:function(a){if(a==null)return
return a.$ti},
ny:function(a,b,c){return H.c_(a["$a"+H.h(c)],H.bA(b))},
cS:function(a,b,c,d){var u=H.c_(a["$a"+H.h(c)],H.bA(b))
return u==null?null:u[d]},
ap:function(a,b,c){var u=H.c_(a["$a"+H.h(b)],H.bA(a))
return u==null?null:u[c]},
w:function(a,b){var u=H.bA(a)
return u==null?null:u[b]},
jd:function(a){return H.by(a,null)},
by:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c0(a[0].name)+H.jH(a,1,b)
if(typeof a=="function")return H.c0(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.h(b[t])}if('func' in a)return H.lY(a,b)
if('futureOr' in a)return"FutureOr<"+H.by("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lY:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.l])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.c.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.M)p+=" extends "+H.by(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.by(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.by(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.by(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.my(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.a8(n[g])
i=i+h+H.by(d[c],a0)+(" "+H.h(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jH:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bu("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.by(p,c)}return"<"+u.i(0)+">"},
c_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jI:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bA(a)
t=J.V(a)
if(t[b]==null)return!1
return H.kz(H.c_(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.jI(a,b,c,d))return a
throw H.i(H.b1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c0(b.substring(2))+H.jH(c,0,null),v.mangledGlobalNames)))},
kz:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ax(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ax(a[t],b,c[t],d))return!1
return!0},
nv:function(a,b,c){return a.apply(b,H.c_(J.V(b)["$a"+H.h(c)],H.bA(b)))},
kF:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="M"||a.name==="J"||a===-1||a===-2||H.kF(u)}return!1},
jJ:function(a,b){var u,t
if(a==null)return b==null||b.name==="M"||b.name==="J"||b===-1||b===-2||H.kF(b)
if(b==null||b===-1||b.name==="M"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jJ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eJ(a,b)}u=J.V(a).constructor
t=H.bA(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ax(u,null,b,null)},
F:function(a,b){if(a!=null&&!H.jJ(a,b))throw H.i(H.b1(a,H.jd(b)))
return a},
ax:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="M"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="M"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ax("type" in a?a.type:l,b,s,d)
else if(H.ax(a,b,s,d))return!0
else{if(!('$i'+"cf" in t.prototype))return!1
r=t.prototype["$a"+"cf"]
q=H.c_(r,u?a.slice(1):l)
return H.ax(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.ks(a,b,c,d)
if('func' in a)return c.name==="jm"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kz(H.c_(m,u),b,p,d)},
ks:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
mJ:function(a){var u,t,s,r,q=H.a8($.kE.$1(a)),p=$.j6[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jb[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.a8($.ky.$2(a,q))
if(q!=null){p=$.j6[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jb[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jc(u)
$.j6[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jb[q]=u
return u}if(s==="-"){r=H.jc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kI(a,u)
if(s==="*")throw H.i(P.km(q))
if(v.leafTags[q]===true){r=H.jc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kI(a,u)},
kI:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jP(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jc:function(a){return J.jP(a,!1,null,!!a.$iG)},
mK:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jc(u)
else return J.jP(u,c,null,null)},
mE:function(){if(!0===$.jO)return
$.jO=!0
H.mF()},
mF:function(){var u,t,s,r,q,p,o,n
$.j6=Object.create(null)
$.jb=Object.create(null)
H.mD()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kK.$1(q)
if(p!=null){o=H.mK(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mD:function(){var u,t,s,r,q,p,o=C.r()
o=H.bV(C.t,H.bV(C.u,H.bV(C.m,H.bV(C.m,H.bV(C.v,H.bV(C.w,H.bV(C.x(C.l),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kE=new H.j8(r)
$.ky=new H.j9(q)
$.kK=new H.ja(p)},
bV:function(a,b){return a(b)||b},
li:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.i(new P.fo("Illegal RegExp pattern ("+String(p)+")",a))},
mQ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mx:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kL:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kM:function(a,b,c){var u=H.mR(a,b,c)
return u},
mR:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kL(b),'g'),H.mx(c))},
hT:function hT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h6:function h6(a,b){this.a=a
this.b=b},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a){this.a=a},
jg:function jg(a){this.a=a},
en:function en(a){this.a=a
this.b=null},
c8:function c8(){},
hH:function hH(){},
hz:function hz(){},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hV:function hV(a){this.a=a},
eX:function eX(a){this.a=a},
hm:function hm(a){this.a=a},
ip:function ip(a){this.a=a},
W:function W(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fz:function fz(a,b){this.a=a
this.b=b
this.c=null},
df:function df(a,b){this.a=a
this.$ti=b},
fA:function fA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
fv:function fv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cP:function(a){return a},
bx:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.bX(b,a))},
lX:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.mw(a,b,c))
return b},
cn:function cn(){},
dm:function dm(){},
cm:function cm(){},
dn:function dn(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
dp:function dp(){},
h5:function h5(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
my:function(a){return J.k0(a?Object.keys(a):[],null)},
mU:function(a){return v.mangledGlobalNames[a]},
mM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j7:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jO==null){H.mE()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.km("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jS()]
if(r!=null)return r
r=H.mJ(a)
if(r!=null)return r
if(typeof a=="function")return C.D
u=Object.getPrototypeOf(a)
if(u==null)return C.o
if(u===Object.prototype)return C.o
if(typeof s=="function"){Object.defineProperty(s,$.jS(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
lh:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.ji(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aU(a,0,4294967295,"length",null))
return J.k0(new Array(a),b)},
k0:function(a,b){return J.jp(H.c(a,[b]))},
jp:function(a){a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.d9.prototype}if(typeof a=="string")return J.bJ.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.fu.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.M)return a
return J.j7(a)},
jM:function(a){if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.M)return a
return J.j7(a)},
jN:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.M)return a
return J.j7(a)},
mA:function(a){if(typeof a=="number")return J.ci.prototype
if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.cC.prototype
return a},
mB:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.M)return a
return J.j7(a)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).n(a,b)},
eK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mH(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jM(a).j(a,b)},
l3:function(a,b,c,d){return J.mB(a).h1(a,b,c,d)},
jh:function(a,b){return J.mA(a).ha(a,b)},
jU:function(a,b){return J.jN(a).C(a,b)},
l4:function(a,b){return J.jN(a).G(a,b)},
bD:function(a){return J.V(a).gF(a)},
c2:function(a){return J.jN(a).gX(a)},
c3:function(a){return J.jM(a).gk(a)},
aq:function(a){return J.V(a).i(a)},
a:function a(){},
fu:function fu(){},
db:function db(){},
dc:function dc(){},
ha:function ha(){},
cC:function cC(){},
br:function br(){},
aO:function aO(a){this.$ti=a},
jq:function jq(a){this.$ti=a},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ci:function ci(){},
da:function da(){},
d9:function d9(){},
bJ:function bJ(){}},P={
lN:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mp()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bW(new P.ir(s),1)).observe(u,{childList:true})
return new P.iq(s,u,t)}else if(self.setImmediate!=null)return P.mq()
return P.mr()},
lO:function(a){self.scheduleImmediate(H.bW(new P.is(H.n(a,{func:1,ret:-1})),0))},
lP:function(a){self.setImmediate(H.bW(new P.it(H.n(a,{func:1,ret:-1})),0))},
lQ:function(a){P.jy(C.i,H.n(a,{func:1,ret:-1}))},
jy:function(a,b){var u=C.e.a1(a.a,1000)
return P.lU(u<0?0:u,b)},
kk:function(a,b){var u=C.e.a1(a.a,1000)
return P.lV(u<0?0:u,b)},
lU:function(a,b){var u=new P.et()
u.e0(a,b)
return u},
lV:function(a,b){var u=new P.et()
u.e1(a,b)
return u},
lR:function(a,b){var u,t,s
b.a=1
try{a.dC(new P.iB(b),new P.iC(b),null)}catch(s){u=H.bB(s)
t=H.bZ(s)
P.mO(new P.iD(b,u,t))}},
kq:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaw")
if(u>=4){t=b.bD()
b.a=a.a
b.c=a.c
P.cE(b,t)}else{t=H.j(b.c,"$ib3")
b.a=2
b.c=a
a.cL(t)}},
cE:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$iag")
P.j2(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cE(h.a,b)}g=h.a
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
if(m){H.j(q,"$iag")
P.j2(i,i,g.b,q.a,q.b)
return}l=$.U
if(l!==n)$.U=n
else l=i
g=b.c
if((g&15)===8)new P.iH(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.iG(u,b,q).$0()}else if((g&2)!==0)new P.iF(h,u,b).$0()
if(l!=null)$.U=l
g=u.b
if(!!J.V(g).$icf){if(g.a>=4){k=H.j(o.c,"$ib3")
o.c=null
b=o.b6(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.kq(g,o)
return}}j=b.b
k=H.j(j.c,"$ib3")
j.c=null
b=j.b6(k)
g=u.a
p=u.b
if(!g){H.F(p,H.w(j,0))
j.a=4
j.c=p}else{H.j(p,"$iag")
j.a=8
j.c=p}h.a=j
g=j}},
mk:function(a,b){if(H.eJ(a,{func:1,args:[P.M,P.ak]}))return H.n(a,{func:1,ret:null,args:[P.M,P.ak]})
if(H.eJ(a,{func:1,args:[P.M]}))return H.n(a,{func:1,ret:null,args:[P.M]})
throw H.i(P.ji(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mj:function(){var u,t
for(;u=$.bU,u!=null;){$.cR=null
t=u.b
$.bU=t
if(t==null)$.cQ=null
u.a.$0()}},
mn:function(){$.jF=!0
try{P.mj()}finally{$.cR=null
$.jF=!1
if($.bU!=null)$.jT().$1(P.kA())}},
kv:function(a){var u=new P.dR(a)
if($.bU==null){$.bU=$.cQ=u
if(!$.jF)$.jT().$1(P.kA())}else $.cQ=$.cQ.b=u},
mm:function(a){var u,t,s=$.bU
if(s==null){P.kv(a)
$.cR=$.cQ
return}u=new P.dR(a)
t=$.cR
if(t==null){u.b=s
$.bU=$.cR=u}else{u.b=t.b
$.cR=t.b=u
if(u.b==null)$.cQ=u}},
mO:function(a){var u=null,t=$.U
if(C.f===t){P.j4(u,u,C.f,a)
return}P.j4(u,u,t,H.n(t.bH(a),{func:1,ret:-1}))},
kj:function(a,b){var u=$.U
if(u===C.f)return P.jy(a,H.n(b,{func:1,ret:-1}))
return P.jy(a,H.n(u.bH(b),{func:1,ret:-1}))},
lK:function(a,b){var u=$.U
if(u===C.f)return P.kk(a,H.n(b,{func:1,ret:-1,args:[P.aZ]}))
return P.kk(a,H.n(u.cV(b,P.aZ),{func:1,ret:-1,args:[P.aZ]}))},
j2:function(a,b,c,d,e){var u={}
u.a=d
P.mm(new P.j3(u,e))},
kt:function(a,b,c,d,e){var u,t=$.U
if(t===c)return d.$0()
$.U=c
u=t
try{t=d.$0()
return t}finally{$.U=u}},
ku:function(a,b,c,d,e,f,g){var u,t=$.U
if(t===c)return d.$1(e)
$.U=c
u=t
try{t=d.$1(e)
return t}finally{$.U=u}},
ml:function(a,b,c,d,e,f,g,h,i){var u,t=$.U
if(t===c)return d.$2(e,f)
$.U=c
u=t
try{t=d.$2(e,f)
return t}finally{$.U=u}},
j4:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bH(d):c.h8(d,-1)
P.kv(d)},
ir:function ir(a){this.a=a},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
et:function et(){this.c=0},
iW:function iW(a,b){this.a=a
this.b=b},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b3:function b3(a,b,c,d,e){var _=this
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
iA:function iA(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(a){this.a=a},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a){this.a=a
this.b=null},
hC:function hC(){},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
cv:function cv(){},
hD:function hD(){},
aZ:function aZ(){},
ag:function ag(a,b){this.a=a
this.b=b},
iY:function iY(){},
j3:function j3(a,b){this.a=a
this.b=b},
iO:function iO(){},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a,b){this.a=a
this.b=b},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function(a,b){return new H.W([a,b])},
ll:function(a){return H.mz(a,new H.W([null,null]))},
lm:function(a){return new P.iM([a])},
jD:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lT:function(a,b,c){var u=new P.e5(a,b,[c])
u.c=a.e
return u},
lf:function(a,b,c){var u,t
if(P.jG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.l])
C.a.h($.an,a)
try{P.lZ(a,u)}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}t=P.kh(b,H.mI(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jo:function(a,b,c){var u,t
if(P.jG(a))return b+"..."+c
u=new P.bu(b)
C.a.h($.an,a)
try{t=u
t.a=P.kh(t.a,a,", ")}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jG:function(a){var u,t
for(u=$.an.length,t=0;t<u;++t)if(a===$.an[t])return!0
return!1},
lZ:function(a,b){var u,t,s,r,q,p,o,n=a.gX(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.h(n.gP(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gP(n);++l
if(!n.A()){if(l<=4){C.a.h(b,H.h(r))
return}t=H.h(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gP(n);++l
for(;n.A();r=q,q=p){p=n.gP(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.h(r)
t=H.h(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
k2:function(a){var u,t={}
if(P.jG(a))return"{...}"
u=new P.bu("")
try{C.a.h($.an,a)
u.a+="{"
t.a=!0
J.l4(a,new P.fF(t,u))
u.a+="}"}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iM:function iM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cF:function cF(a){this.a=a
this.c=this.b=null},
e5:function e5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fB:function fB(){},
u:function u(){},
fE:function fE(){},
fF:function fF(a,b){this.a=a
this.b=b},
ad:function ad(){},
iS:function iS(){},
e6:function e6(){},
c9:function c9(){},
d0:function d0(){},
fd:function fd(){},
i6:function i6(){},
i7:function i7(){},
iX:function iX(a){this.b=0
this.c=a},
le:function(a){if(a instanceof H.c8)return a.i(0)
return"Instance of '"+H.h(H.cr(a))+"'"},
ln:function(a,b,c){var u,t=J.lh(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.l(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
k1:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.c2(a);u.A();)C.a.h(s,H.F(u.gP(u),c))
if(b)return s
return H.m(J.jp(s),"$ib",t,"$ab")},
jx:function(a){var u,t
if(a.constructor===Array){H.m(a,"$iaO",[P.r],"$aaO")
u=a.length
t=P.ke(0,null,u)
return H.kc(t<u?C.a.dL(a,0,t):a)}return P.lI(a,0,null)},
lI:function(a,b,c){var u,t,s=J.c2(a)
for(u=0;u<b;++u)if(!s.A())throw H.i(P.aU(b,0,u,null,null))
t=[]
for(;s.A();)t.push(s.gP(s))
return H.kc(t)},
lB:function(a){return new H.fv(a,H.li(a,!1,!0,!1,!1,!1))},
kh:function(a,b,c){var u=J.c2(b)
if(!u.A())return a
if(c.length===0){do a+=H.h(u.gP(u))
while(u.A())}else{a+=H.h(u.gP(u))
for(;u.A();)a=a+c+H.h(u.gP(u))}return a},
lW:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.n){u=$.l2().b
u=u.test(b)}else u=!1
if(u)return b
t=C.z.hb(H.F(b,H.ap(c,"c9",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lz(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lc:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ld:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d2:function(a){if(a>=10)return""+a
return"0"+a},
jZ:function(a){return new P.bl(1000*a)},
d7:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.le(a)},
l5:function(a){return new P.aG(!1,null,null,a)},
ji:function(a,b,c){return new P.aG(!0,a,b,c)},
he:function(a,b){return new P.bM(null,null,!0,a,b,"Value not in range")},
aU:function(a,b,c,d,e){return new P.bM(b,c,!0,a,d,"Invalid value")},
ke:function(a,b,c){if(0>a||a>c)throw H.i(P.aU(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.aU(b,a,c,"end",null))
return b}return c},
kd:function(a,b){if(typeof a!=="number")return a.a6()
if(a<0)throw H.i(P.aU(a,0,null,b,null))},
T:function(a,b,c,d,e){var u=H.ab(e==null?J.c3(b):e)
return new P.ft(u,!0,a,c,"Index out of range")},
am:function(a){return new P.i4(a)},
km:function(a){return new P.i2(a)},
ca:function(a){return new P.f0(a)},
x:function(a){return new P.dZ(a)},
jR:function(a){H.mM(a)},
a3:function a3(){},
as:function as(a,b){this.a=a
this.b=b},
B:function B(){},
bl:function bl(a){this.a=a},
fa:function fa(){},
fb:function fb(){},
bm:function bm(){},
eP:function eP(){},
dq:function dq(){},
aG:function aG(a,b,c,d){var _=this
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
ft:function ft(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i4:function i4(a){this.a=a},
i2:function i2(a){this.a=a},
hy:function hy(a){this.a=a},
f0:function f0(a){this.a=a},
h9:function h9(){},
dA:function dA(){},
f5:function f5(a){this.a=a},
dZ:function dZ(a){this.a=a},
fo:function fo(a,b){this.a=a
this.b=b},
r:function r(){},
e:function e(){},
aN:function aN(){},
b:function b(){},
E:function E(){},
J:function J(){},
a7:function a7(){},
M:function M(){},
ak:function ak(){},
l:function l(){},
bu:function bu(a){this.a=a},
mv:function(a){var u,t=J.V(a)
if(!!t.$ibn){u=t.gd0(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ey(a.data,a.height,a.width)},
mu:function(a){if(a instanceof P.ey)return{data:a.a,height:a.b,width:a.c}
return a},
bf:function(a){var u,t,s,r,q
if(a==null)return
u=P.lk(P.l,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r){q=H.a8(t[r])
u.l(0,q,a[q])}return u},
mt:function(a){var u={}
a.G(0,new P.j5(u))
return u},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
fk:function fk(a,b){this.a=a
this.b=b},
fl:function fl(){},
fm:function fm(){},
iL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iN:function iN(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
fy:function fy(){},
ba:function ba(){},
h7:function h7(){},
hd:function hd(){},
hG:function hG(){},
o:function o(){},
bd:function bd(){},
hS:function hS(){},
e3:function e3(){},
e4:function e4(){},
ee:function ee(){},
ef:function ef(){},
ep:function ep(){},
eq:function eq(){},
ew:function ew(){},
ex:function ex(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(a){this.a=a},
eU:function eU(){},
bE:function bE(){},
h8:function h8(){},
dS:function dS(){},
cX:function cX(){},
dt:function dt(){},
bN:function bN(){},
du:function du(){},
dC:function dC(){},
dH:function dH(){},
hx:function hx(){},
el:function el(){},
em:function em(){}},W={
jk:function(){var u=document.createElement("canvas")
return u},
k_:function(a){H.j(a,"$if")
return"wheel"},
iK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kr:function(a,b,c,d){var u=W.iK(W.iK(W.iK(W.iK(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u=W.kx(new W.iz(c),W.k)
if(u!=null&&!0)J.l3(a,b,u,!1)
return new W.iy(a,b,u,!1,[e])},
kx:function(a,b){var u=$.U
if(u===C.f)return a
return u.cV(a,b)},
q:function q(){},
eL:function eL(){},
eN:function eN(){},
eO:function eO(){},
cW:function cW(){},
bG:function bG(){},
c7:function c7(){},
bk:function bk(){},
cc:function cc(){},
f1:function f1(){},
N:function N(){},
cd:function cd(){},
f2:function f2(){},
aI:function aI(){},
aJ:function aJ(){},
f3:function f3(){},
f4:function f4(){},
f6:function f6(){},
d3:function d3(){},
f7:function f7(){},
d4:function d4(){},
d5:function d5(){},
f8:function f8(){},
f9:function f9(){},
iv:function iv(a,b){this.a=a
this.b=b},
Z:function Z(){},
k:function k(){},
f:function f(){},
aL:function aL(){},
fi:function fi(){},
fj:function fj(){},
fn:function fn(){},
aM:function aM(){},
fr:function fr(){},
bI:function bI(){},
bn:function bn(){},
ch:function ch(){},
aP:function aP(){},
fC:function fC(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(a){this.a=a},
fX:function fX(){},
fY:function fY(a){this.a=a},
aS:function aS(){},
fZ:function fZ(){},
a9:function a9(){},
iu:function iu(a){this.a=a},
H:function H(){},
co:function co(){},
aT:function aT(){},
hb:function hb(){},
hk:function hk(){},
hl:function hl(a){this.a=a},
hn:function hn(){},
aV:function aV(){},
hv:function hv(){},
aW:function aW(){},
hw:function hw(){},
aX:function aX(){},
hA:function hA(){},
hB:function hB(a){this.a=a},
aC:function aC(){},
aY:function aY(){},
aD:function aD(){},
hI:function hI(){},
hJ:function hJ(){},
hN:function hN(){},
b_:function b_(){},
aE:function aE(){},
hQ:function hQ(){},
hR:function hR(){},
bw:function bw(){},
i5:function i5(){},
il:function il(){},
b2:function b2(){},
cD:function cD(){},
iw:function iw(){},
dU:function dU(){},
iJ:function iJ(){},
eb:function eb(){},
iT:function iT(){},
iU:function iU(){},
ix:function ix(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jC:function jC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iy:function iy(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iz:function iz(a){this.a=a},
A:function A(){},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
cK:function cK(){},
cL:function cL(){},
ej:function ej(){},
ek:function ek(){},
eo:function eo(){},
er:function er(){},
es:function es(){},
cM:function cM(){},
cN:function cN(){},
eu:function eu(){},
ev:function ev(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){}},O={
eZ:function(a){var u=new O.S([a])
u.bi(a)
return u},
S:function S(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ck:function ck(){this.b=this.a=null},
dj:function dj(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(a,b){this.a=a
this.b=b},
fP:function fP(){},
fQ:function fQ(a,b){this.a=a
this.b=b},
fR:function fR(){},
fS:function fS(a,b){this.a=a
this.b=b},
fT:function fT(){},
fI:function fI(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cj:function cj(){},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aQ:function aQ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fL:function fL(){var _=this
_.e=_.d=_.c=_.b=null},
fM:function fM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fN:function fN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dw:function dw(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bv:function bv(){}},E={
fe:function(a){var u=new E.ah()
u.a=""
u.b=!0
u.sdU(0,O.eZ(E.ah))
u.y.aI(u.ghx(),u.ghA())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scd(0,a)
u.sdn(null)
return u},
lD:function(a,b){var u=new E.hg(a)
u.dR(a,b)
return u},
lJ:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibG)return E.ki(a,!0,!0,!0,!1)
u=W.jk()
t=u.style
t.width="100%"
t.height="100%"
s.gcY(a).h(0,u)
return E.ki(u,!0,!0,!0,!1)},
ki:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dD(),j=H.j(C.h.ca(a,"webgl2",P.ll(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibN")
if(j==null)H.y(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lD(j,a)
u=new T.hK(j)
H.ab(j.getParameter(3379))
u.c=H.ab(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dK(a)
t=new X.fx()
t.c=new X.ao(!1,!1,!1)
t.sfz(P.lm(P.r))
u.b=t
t=new X.h_(u)
t.f=0
t.r=V.bb()
t.x=V.bb()
t.ch=t.Q=1
u.c=t
t=new X.fD(u)
t.r=0
t.x=V.bb()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hP(u)
t.f=V.bb()
t.r=V.bb()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sek(H.c([],[[P.cv,P.M]]))
t=u.z
s=document
r=W.a9
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a6(s,"contextmenu",H.n(u.geR(),q),!1,r))
t=u.z
p=W.k
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a6(a,"focus",H.n(u.geX(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a6(a,"blur",H.n(u.geL(),o),!1,p))
t=u.z
n=W.aP
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a6(s,"keyup",H.n(u.gf0(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a6(s,"keydown",H.n(u.geZ(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a6(a,"mousedown",H.n(u.gf4(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,"mouseup",H.n(u.gf8(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,l,H.n(u.gf6(),q),!1,r))
n=u.z
W.k_(a)
m=W.b2;(n&&C.a).h(n,W.a6(a,H.a8(W.k_(a)),H.n(u.gfa(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a6(s,l,H.n(u.geT(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a6(s,"mouseup",H.n(u.geV(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a6(s,"pointerlockchange",H.n(u.gfc(),o),!1,p))
p=u.z
o=W.aE
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a6(a,"touchstart",H.n(u.gfq(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchend",H.n(u.gfm(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchmove",H.n(u.gfo(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.as(Date.now(),!1)
k.cy=0
k.cN()
return k},
eV:function eV(){},
ah:function ah(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
dD:function dD(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hM:function hM(a){this.a=a}},Z={
jB:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cP(c)),35044)
a.bindBuffer(b,null)
return new Z.dP(b,u)},
av:function(a){return new Z.be(a)},
dP:function dP(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dQ:function dQ(a){this.a=a},
c6:function c6(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a){this.a=a}},D={
L:function(){var u=new D.aK()
u.sY(null)
u.sah(null)
u.c=null
u.d=0
return u},
eY:function eY(){},
aK:function aK(){var _=this
_.d=_.c=_.b=_.a=null},
fg:function fg(a){this.a=a},
fh:function fh(a){this.a=a},
v:function v(){this.b=null},
bp:function bp(a){this.b=null
this.$ti=a},
bq:function bq(a){this.b=null
this.$ti=a},
D:function D(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
jY:function(a,b){var u,t,s=new D.b4()
s.c=new V.X(1,1,1)
s.a=V.lM()
s.d=V.jA()
s.e=V.lL()
u=s.b
s.b=b
b.gm().h(0,s.gdV())
t=new D.D("mover",u,s.b,[U.a0])
t.b=!0
s.ak(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.D("color",u,a,[V.X])
t.b=!0
s.ak(t)}return s},
b4:function b4(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a4:function a4(){},
de:function de(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
ds:function ds(){},
dz:function dz(){}},X={cZ:function cZ(a,b){this.a=a
this.b=b},dd:function dd(a,b){this.a=a
this.b=b},fx:function fx(){var _=this
_.d=_.c=_.b=_.a=null},dh:function dh(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fD:function fD(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},b8:function b8(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h_:function h_(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cl:function cl(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hc:function hc(){},dF:function dF(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hP:function hP(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dK:function dK(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fq:function(a){var u=new X.fp(),t=new V.ar(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lC()
u.r=t
return u},
jv:function(a){var u,t,s=new X.dr()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().h(0,s.ge2())
t=new D.D("mover",u,s.b,[U.a0])
t.b=!0
s.ac(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.K().a)){s.c=1.0471975511965976
t=new D.D("fov",t,1.0471975511965976,[P.B])
t.b=!0
s.ac(t)}t=s.d
if(!(Math.abs(t-0.1)<$.K().a)){s.d=0.1
t=new D.D("near",t,0.1,[P.B])
t.b=!0
s.ac(t)}t=s.e
if(!(Math.abs(t-2000)<$.K().a)){s.e=2000
t=new D.D("far",t,2000,[P.B])
t.b=!0
s.ac(t)}return s},
bF:function bF(){},
fp:function fp(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fs:function fs(){this.b=this.a=null},
dr:function dr(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){}},V={
mV:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dI(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.c.aa("null",c)
return C.c.aa(C.d.dD(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
bY:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.l])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.t)(a),++s){r=V.P(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.d(p,q)
C.a.l(p,q,C.c.aa(p[q],t))}return p},
jQ:function(a){return C.d.hU(Math.pow(2,C.C.bU(Math.log(H.ms(a))/Math.log(2))))},
bs:function(){var u=$.k5
return u==null?$.k5=V.aR(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aR:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ju:function(a,b,c){return V.aR(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lq:function(a,b,c){return V.aR(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
jt:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aR(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
k4:function(a,b,c,d){d=V.jA()
return V.k3(V.ka(),d,new V.I(a,b,c))},
k3:function(a,b,c){var u=c.t(0,Math.sqrt(c.w(c))),t=b.aW(u),s=t.t(0,Math.sqrt(t.w(t))),r=u.aW(s),q=new V.I(a.a,a.b,a.c),p=s.K(0).w(q),o=r.K(0).w(q),n=u.K(0).w(q)
return V.aR(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bb:function(){var u=$.k9
return u==null?$.k9=new V.a1(0,0):u},
ka:function(){var u=$.cp
return u==null?$.cp=new V.ai(0,0,0):u},
lC:function(){var u=$.kf
return u==null?$.kf=V.hf(0,0,1,1):u},
hf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cs(a,b,c,d)},
dO:function(){var u=$.kp
return u==null?$.kp=new V.I(0,0,0):u},
lL:function(){var u=$.i8
return u==null?$.i8=new V.I(-1,0,0):u},
jA:function(){var u=$.i9
return u==null?$.i9=new V.I(0,1,0):u},
lM:function(){var u=$.ia
return u==null?$.ia=new V.I(0,0,1):u},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ff:function ff(a){this.a=a},
dl:function dl(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a5:function a5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
ae:function(a){var u=new V.ho()
u.dS(a)
return u},
eM:function eM(){},
b7:function b7(){},
di:function di(){},
b9:function b9(){this.a=null},
ho:function ho(){this.a=null},
cu:function cu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.b=a
this.c=null},
hO:function hO(){this.c=this.b=this.a=null},
cz:function cz(a){this.b=a
this.a=this.c=null},
mP:function(a){P.lK(C.A,new V.je(a))},
lF:function(a){var u=new V.hs()
u.dT(a,!0)
return u},
je:function je(a){this.a=a},
hs:function hs(){this.b=this.a=null},
hu:function hu(a){this.a=a},
ht:function ht(a){this.a=a}},U={
jl:function(){var u=new U.f_()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
d_:function(a){var u=new U.cb()
u.sR(0,a)
return u},
jn:function(a){var u=new U.cg()
u.bi(U.a0)
u.aI(u.gdX(),u.gfg())
if(a!=null)u.aR(0,a)
u.e=null
u.f=V.bs()
u.r=0
return u},
f_:function f_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cb:function cb(){this.b=this.a=null},
cg:function cg(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a0:function a0(){},
dL:function dL(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dN:function dN(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d1:function d1(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},d6:function d6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aA:function aA(){},bO:function bO(){},dB:function dB(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lo:function(a,b){var u=a.aX,t=new A.dk(b,u)
t.ck(b,u)
t.dQ(a,b)
return t},
lp:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gaf(a1)+a2.gaf(a2)+a3.gaf(a3)+a4.gaf(a4)+a5.gaf(a5)+a6.gaf(a6)+a7.gaf(a7)+a8.gaf(a8)+a9.gaf(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.t)(b0),++t)e+="_"+H.h(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.t)(b1),++t)e+="_"+H.h(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.t)(b2),++t)e+="_"+H.h(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.aF()
if(k){u=$.bi()
f=new Z.be(f.a|u.a)}if(j){u=$.bh()
f=new Z.be(f.a|u.a)}if(i){u=$.bj()
f=new Z.be(f.a|u.a)}if(h){u=$.bg()
f=new Z.be(f.a|u.a)}return new A.fK(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
j0:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
j1:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.j0(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jf(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
m2:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j0(b,t,"emission")
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
m_:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.j1(b,t,"ambient")
b.a+="\n"},
m0:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.j1(b,t,"diffuse")
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
m3:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.j1(b,t,"invDiffuse")
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
m9:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.j1(b,t,"specular")
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
m5:function(a,b){var u,t,s
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
m7:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j0(b,t,"reflect")
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
m8:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j0(b,t,"refract")
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
m1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.h(u)
s=A.jf(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aj()
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
m6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.h(u)
s=A.jf(t)
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
if(typeof u!=="number")return u.aj()
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
l=H.c([],r)
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
ma:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.h(u)
s=A.jf(t)
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
if(typeof u!=="number")return u.aj()
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
j=H.c([],u)
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
m4:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.l])
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
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mb:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bu("")
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
A.m2(a,i)
A.m_(a,i)
A.m0(a,i)
A.m3(a,i)
A.m9(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.m7(a,i)
A.m8(a,i)}A.m5(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.t)(q),++n)A.m1(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.t)(q),++n)A.m6(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.t)(q),++n)A.ma(a,q[n],i)
A.m4(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.l])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.t)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aK(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.t)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aK(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.t)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aK(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.q(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mc:function(a,b){var u,t,s
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
me:function(a,b){var u
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
md:function(a,b){var u
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
mg:function(a,b){var u,t
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
mh:function(a,b){var u,t
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
mf:function(a,b){var u
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
mi:function(a,b){var u
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
jf:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.aK(a,1)},
jz:function(a,b,c,d,e){var u=new A.hW(a,c,e)
u.f=d
u.sh_(P.ln(d,0,P.r))
return u},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a){this.a=a},
ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a,b){var _=this
_.d4=_.i2=_.d3=_.ba=_.aX=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ia=_.i9=_.i8=_.bT=_.bS=_.bR=_.bQ=_.bP=_.bO=_.dh=_.i7=_.dg=_.df=_.i6=_.de=_.dd=_.dc=_.i5=_.da=_.d9=_.d8=_.i4=_.d7=_.d6=_.i3=_.d5=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ay:function ay(a,b){this.a=a
this.b=b},
az:function az(a,b){this.a=a
this.b=b},
aB:function aB(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
bQ:function bQ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bR:function bR(a,b,c,d,e,f,g,h,i,j){var _=this
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
bT:function bT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ct:function ct(){},
dx:function dx(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dG:function dG(){},
i0:function i0(a){this.a=a},
at:function at(a,b,c){this.a=a
this.c=b
this.d=c},
hY:function hY(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){this.a=a
this.c=b
this.d=c},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c},
cA:function cA(a,b,c){this.a=a
this.c=b
this.d=c},
i1:function i1(a,b,c){this.a=a
this.c=b
this.d=c},
cB:function cB(a,b,c){this.a=a
this.c=b
this.d=c},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
bS:function bS(a,b,c){this.a=a
this.c=b
this.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c}},F={
j_:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cO:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.I(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.I(u+a3,t+a1,s+a2)
q=new V.I(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.I(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.j_(i)
l=F.j_(j.b)
k=F.mS(d,a0,new F.iZ(j,F.j_(j.c),F.j_(j.d),l,m,c),b)
if(k!=null)a.hw(k)},
mS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.jw()
t=H.c([],[F.au])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ib(g,g,new V.ar(p,0,0,1),g,g,new V.a1(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bM(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ib(g,g,new V.ar(j,i,h,1),g,g,new V.a1(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bM(d))}}u.d.h3(a+1,b+1,t)
return u},
ce:function(a,b,c){var u=new F.a_(),t=a.a
if(t==null)H.y(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.y(P.x("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
lj:function(a,b){var u=new F.b6(),t=a.a
if(t==null)H.y(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.y(P.x("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
jw:function(){var u=new F.dv(),t=new F.ic(u)
t.b=!1
t.sh0(H.c([],[F.au]))
u.a=t
t=new F.hr(u)
t.sbB(H.c([],[F.bt]))
u.b=t
t=new F.hq(u)
t.ses(H.c([],[F.b6]))
u.c=t
t=new F.hp(u)
t.sel(H.c([],[F.a_]))
u.d=t
u.e=null
return u},
ib:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.au(),r=new F.ii()
r.sbB(H.c([],[F.bt]))
s.b=r
r=new F.ih()
u=[F.b6]
r.seu(H.c([],u))
r.sev(H.c([],u))
s.c=r
r=new F.id()
u=[F.a_]
r.sem(H.c([],u))
r.sen(H.c([],u))
r.seo(H.c([],u))
s.d=r
h=$.l_()
s.e=0
r=$.aF()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bi().a)!==0?e:t
s.x=(u&$.bh().a)!==0?b:t
s.y=(u&$.bC().a)!==0?f:t
s.z=(u&$.bj().a)!==0?g:t
s.Q=(u&$.l0().a)!==0?c:t
s.ch=(u&$.c1().a)!==0?i:0
s.cx=(u&$.bg().a)!==0?a:t
return s},
iZ:function iZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a_:function a_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b6:function b6(){this.b=this.a=null},
bt:function bt(){this.a=null},
dv:function dv(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(a){this.a=a
this.b=null},
hq:function hq(a){this.a=a
this.b=null},
hr:function hr(a){this.a=a
this.b=null},
au:function au(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a},
ic:function ic(a){this.a=a
this.c=this.b=null},
id:function id(){this.d=this.c=this.b=null},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(){this.c=this.b=null},
ii:function ii(){this.b=null}},T={cw:function cw(){},cx:function cx(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hK:function hK(a){var _=this
_.a=a
_.e=_.d=_.c=null},hL:function hL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},K={
kG:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2="modifiers",b3=V.lF("Test 033"),b4=W.jk()
b4.className="pageLargeCanvas"
b4.id=b0
b3.a.appendChild(b4)
u=[P.l]
b3.cT(H.c(["Test of a sterioscopic scene."],u))
b3.cT(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b0)
if(t==null)H.y(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.lJ(t,!0,!0,!0,!1)
r=F.jw()
F.cO(r,b1,b1,1,1,1,0,0,1)
F.cO(r,b1,b1,1,1,0,1,0,3)
F.cO(r,b1,b1,1,1,0,0,1,2)
F.cO(r,b1,b1,1,1,-1,0,0,0)
F.cO(r,b1,b1,1,1,0,-1,0,0)
F.cO(r,b1,b1,1,1,0,0,-1,3)
r.ap()
q=E.fe(r)
p=E.fe(b1)
for(o=-1.6;o<=1.7;o+=0.8)for(n=-1.6;n<=1.7;n+=0.8)for(m=-1.6;m<=1.7;m+=0.8){l=new V.a5(1,0,0,o,0,1,0,n,0,0,1,m,0,0,0,1).p(0,new V.a5(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
k=E.fe(b1)
b3=new U.cb()
b3.sR(0,l)
k.sdn(b3)
b3=k.y
u=H.w(b3,0)
H.F(q,u)
j=[u]
if(H.z(b3.aP(H.c([q],j)))){i=b3.a
h=i.length
C.a.h(i,q)
u=H.m(H.c([q],j),"$ie",[u],"$ae")
b3=b3.c
if(b3!=null)b3.$2(h,u)}b3=p.y
u=H.w(b3,0)
H.F(k,u)
j=[u]
if(H.z(b3.aP(H.c([k],j)))){i=b3.a
h=i.length
C.a.h(i,k)
u=H.m(H.c([k],j),"$ie",[u],"$ae")
b3=b3.c
if(b3!=null)b3.$2(h,u)}}g=s.f.dk("../resources/diceColor")
f=new O.dj()
f.se9(O.eZ(V.a5))
f.e.aI(f.geH(),f.geJ())
b3=new O.aQ(f,"emission")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.X(0,0,0)
f.f=b3
b3=new O.aQ(f,"ambient")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.X(0,0,0)
f.r=b3
b3=new O.aQ(f,"diffuse")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.X(0,0,0)
f.x=b3
b3=new O.aQ(f,"invDiffuse")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.X(0,0,0)
f.y=b3
b3=new O.fN(f,"specular")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.X(0,0,0)
b3.ch=100
f.z=b3
b3=new O.fJ(f,"bump")
b3.c=new A.ac(!1,!1,!1)
f.Q=b3
f.ch=null
b3=new O.aQ(f,"reflect")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.X(0,0,0)
f.cx=b3
b3=new O.fM(f,"refract")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.X(0,0,0)
b3.ch=1
f.cy=b3
b3=new O.fI(f,"alpha")
b3.c=new A.ac(!1,!1,!1)
b3.f=1
f.db=b3
b3=new D.de()
b3.bi(D.a4)
b3.sei(H.c([],[D.b4]))
b3.sfu(H.c([],[D.ds]))
b3.sfO(H.c([],[D.dz]))
b3.y=b3.x=null
b3.cb(b3.geD(),b3.gfe(),b3.gfi())
f.dx=b3
u=new O.fL()
u.b=new V.ar(0,0,0,0)
u.c=1
u.d=10
u.e=!1
f.dy=u
u=b3.x
b3=u==null?b3.x=D.L():u
b3.h(0,f.gfE())
b3=f.dx
u=b3.y
b3=u==null?b3.y=D.L():u
b3.h(0,f.gaD())
f.fr=null
b3=f.dx
u=U.d_(V.k4(-1,-1,-1,b1))
b3.h(0,D.jY(new V.X(1,0.9,0.9),u))
b3=f.dx
u=U.d_(V.k4(1,1,2,b1))
b3.h(0,D.jY(new V.X(0.2,0.2,0.35),u))
b3=f.r
b3.saU(0,new V.X(0.2,0.2,0.2))
f.r.sb2(g)
b3=f.x
b3.saU(0,new V.X(0.8,0.8,0.8))
f.x.sb2(g)
b3=f.z
b3.saU(0,new V.X(0.7,0.7,0.7))
b3=f.z
b3.bE(new A.ac(!0,!1,b3.c.c))
b3.cP(10)
f.Q.sb2(s.f.dk("../resources/diceBumpMap"))
e=U.jn(b1)
b3=s.r
u=new U.dM()
j=U.jl()
j.sc9(0,!0)
j.sc_(6.283185307179586)
j.sc1(0)
j.sa3(0,0)
j.sc0(100)
j.sM(0)
j.sbN(0.5)
u.b=j
i=u.gaA()
j.gm().h(0,i)
j=U.jl()
j.sc9(0,!0)
j.sc_(6.283185307179586)
j.sc1(0)
j.sa3(0,0)
j.sc0(100)
j.sM(0)
j.sbN(0.5)
u.c=j
j.gm().h(0,i)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
d=new X.ao(!1,!1,!1)
c=u.d
u.d=d
j=[X.ao]
i=new D.D(b2,c,d,j)
i.b=!0
u.J(i)
i=u.f
if(i!==!1){u.f=!1
i=new D.D("invertX",i,!1,[P.a3])
i.b=!0
u.J(i)}i=u.r
if(i!==!1){u.r=!1
i=new D.D("invertY",i,!1,[P.a3])
i.b=!0
u.J(i)}u.aS(b3)
e.h(0,u)
b3=s.r
u=new U.dL()
i=U.jl()
i.sc9(0,!0)
i.sc_(6.283185307179586)
i.sc1(0)
i.sa3(0,0)
i.sc0(100)
i.sM(0)
i.sbN(0.2)
u.b=i
i.gm().h(0,u.gaA())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
d=new X.ao(!0,!1,!1)
c=u.c
u.c=d
i=new D.D(b2,c,d,j)
i.b=!0
u.J(i)
u.aS(b3)
e.h(0,u)
b3=s.r
u=new U.dN()
u.c=0.01
u.e=u.d=0
d=new X.ao(!1,!1,!1)
u.b=d
j=new D.D(b2,b1,d,j)
j.b=!0
u.J(j)
u.aS(b3)
e.h(0,u)
e.h(0,U.d_(V.ju(0,0,6)))
b=X.fq(b1)
if(b.b){b.b=!1
b3=new D.D("clearColor",!0,!1,[P.a3])
b3.b=!0
b.ac(b3)}b3=s.f.dl("../resources/maskonaive",".jpg")
a=new M.d1()
a.a=!0
u=E.fe(b1)
r=F.jw()
j=r.a
i=new V.I(-1,-1,1)
i=i.t(0,Math.sqrt(i.w(i)))
a0=j.b9(new V.bc(1,2,4,6),new V.ar(1,0,0,1),new V.ai(-1,-1,0),new V.a1(0,1),i,b1)
j=r.a
i=new V.I(1,-1,1)
i=i.t(0,Math.sqrt(i.w(i)))
a1=j.b9(new V.bc(0,3,4,6),new V.ar(0,0,1,1),new V.ai(1,-1,0),new V.a1(1,1),i,b1)
j=r.a
i=new V.I(1,1,1)
i=i.t(0,Math.sqrt(i.w(i)))
a2=j.b9(new V.bc(0,2,5,6),new V.ar(0,1,0,1),new V.ai(1,1,0),new V.a1(1,0),i,b1)
j=r.a
i=V.bb()
a3=new V.I(-1,1,1)
a3=a3.t(0,Math.sqrt(a3.w(a3)))
a4=j.b9(new V.bc(0,2,4,7),new V.ar(1,1,0,1),new V.ai(-1,1,0),i,a3,b1)
r.d.h2(H.c([a0,a1,a2,a4],[F.au]))
r.ap()
u.scd(0,r)
a.e=u
a.saT(b1)
a.sb0(0,b1)
a.sb1(b1)
u=new O.dw()
u.b=1.0471975511965976
u.d=new V.X(1,1,1)
c=u.c
u.c=b3
b3.gm().h(0,u.gaD())
b3=new D.D("boxTexture",c,u.c,[T.cx])
b3.b=!0
u.S(b3)
a.sb1(u)
a5=new M.d6()
a5.a=!0
a5.sec(0,O.eZ(E.ah))
a5.e.aI(a5.geN(),a5.geP())
a5.y=a5.x=a5.r=a5.f=null
a6=X.fq(b1)
a5.saT(b1)
a5.sb0(0,a6)
a5.sb1(b1)
a5.sb1(f)
a5.e.h(0,p)
b3=M.aA
u=H.c([a,a5],[b3])
j=new M.dB()
j.a=!0
i=U.d_(b1)
j.b=i
a3=U.d_(b1)
j.c=a3
a7=U.a0
a8=[a7]
i=U.jn(H.c([null,i],a8))
j.d=i
a8=U.jn(H.c([null,a3],a8))
j.e=a8
j.f=X.jv(i)
j.r=X.jv(a8)
j.x=V.hf(0,0,0.5,1)
j.y=V.hf(0.5,0,0.5,1)
j.sft(O.eZ(b3))
j.Q.aI(j.geF(),j.gfk())
j.Q.aR(0,u)
j.ch=0.1
j.cx=12
j.db=j.cy=null
b3=j.d.a
if(0>=b3.length)return H.d(b3,0)
if(!J.Q(b3[0],e)){b3=j.d
i=b3.a
if(0>=i.length)return H.d(i,0)
c=i[0]
b3.l(0,0,e)
j.e.l(0,0,e)
a7=new D.D("cameraMover",c,e,[a7])
a7.b=!0
j.O(a7)}b3=j.z
if(b3!==b){if(b3!=null)b3.gm().L(0,j.gN())
c=j.z
j.z=b
b.gm().h(0,j.gN())
b3=new D.D("target",c,j.z,[X.bP])
b3.b=!0
j.O(b3)}j.Q.aR(0,u)
j.ch=0.1
j.cx=12
a9=Math.atan2(0.1,12)
b3=j.b
u=j.ch
if(typeof u!=="number")return u.K()
b3.sR(0,V.ju(-u,0,0).p(0,V.jt(a9)))
j.c.sR(0,V.ju(j.ch,0,0).p(0,V.jt(-a9)))
b3=s.d
if(b3!==j){if(b3!=null)b3.gm().L(0,s.gcl())
s.d=j
j.gm().h(0,s.gcl())
s.cm()}V.mP(s)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jr.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gF:function(a){return H.cq(a)},
i:function(a){return"Instance of '"+H.h(H.cr(a))+"'"}}
J.fu.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ia3:1}
J.db.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.dc.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.ha.prototype={}
J.cC.prototype={}
J.br.prototype={
i:function(a){var u=a[$.kP()]
if(u==null)return this.dN(a)
return"JavaScript function for "+H.h(J.aq(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijm:1}
J.aO.prototype={
h:function(a,b){H.F(b,H.w(a,0))
if(!!a.fixed$length)H.y(P.am("add"))
a.push(b)},
L:function(a,b){var u
if(!!a.fixed$length)H.y(P.am("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
aR:function(a,b){var u,t
H.m(b,"$ie",[H.w(a,0)],"$ae")
if(!!a.fixed$length)H.y(P.am("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.t)(b),++t)a.push(b[t])},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.ca(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.h(a[u]))
return t.join(b)},
ht:function(a){return this.q(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dL:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aU(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aU(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
gbX:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.lg())},
bh:function(a,b){var u=H.w(a,0)
H.n(b,{func:1,ret:P.r,args:[u,u]})
if(!!a.immutable$list)H.y(P.am("sort"))
H.dy(a,0,a.length-1,b,u)},
ai:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.jo(a,"[","]")},
gX:function(a){return new J.af(a,a.length,[H.w(a,0)])},
gF:function(a){return H.cq(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.y(P.am("set length"))
if(b<0)throw H.i(P.aU(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.i(H.bX(a,b))
return a[b]},
l:function(a,b,c){H.F(c,H.w(a,0))
if(!!a.immutable$list)H.y(P.am("indexed set"))
if(b>=a.length||b<0)throw H.i(H.bX(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jq.prototype={}
J.af.prototype={
gP:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.t(s))
u=t.c
if(u>=r){t.scC(null)
return!1}t.scC(s[u]);++t.c
return!0},
scC:function(a){this.d=H.F(a,H.w(this,0))},
$iaN:1}
J.ci.prototype={
ha:function(a,b){var u
H.kH(b)
if(typeof b!=="number")throw H.i(H.bz(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbb(b)
if(this.gbb(a)===u)return 0
if(this.gbb(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbb:function(a){return a===0?1/a<0:a<0},
hU:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.am(""+a+".toInt()"))},
bU:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.am(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.am(""+a+".round()"))},
dD:function(a,b){var u
if(b>20)throw H.i(P.aU(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbb(a))return"-"+u
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
dI:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dP:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cQ(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.cQ(a,b)},
cQ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.am("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
b7:function(a,b){var u
if(a>0)u=this.fM(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fM:function(a,b){return b>31?0:a>>>b},
$iB:1,
$ia7:1}
J.da.prototype={$ir:1}
J.d9.prototype={}
J.bJ.prototype={
bL:function(a,b){if(b<0)throw H.i(H.bX(a,b))
if(b>=a.length)H.y(H.bX(a,b))
return a.charCodeAt(b)},
b4:function(a,b){if(b>=a.length)throw H.i(H.bX(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.i(P.ji(b,null,null))
return a+b},
cf:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.he(b,null))
if(b>c)throw H.i(P.he(b,null))
if(c>a.length)throw H.i(P.he(c,null))
return a.substring(b,c)},
aK:function(a,b){return this.cf(a,b,null)},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.y)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aa:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ik7:1,
$il:1}
H.Y.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.c.bL(this.a,b)},
$adJ:function(){return[P.r]},
$au:function(){return[P.r]},
$ae:function(){return[P.r]},
$ab:function(){return[P.r]}}
H.fc.prototype={}
H.dg.prototype={
gP:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.jM(s),q=r.gk(s)
if(t.b!==q)throw H.i(P.ca(s))
u=t.c
if(u>=q){t.saM(null)
return!1}t.saM(r.C(s,u));++t.c
return!0},
saM:function(a){this.d=H.F(a,H.w(this,0))},
$iaN:1}
H.fG.prototype={
gX:function(a){return new H.fH(J.c2(this.a),this.b,this.$ti)},
gk:function(a){return J.c3(this.a)},
C:function(a,b){return this.b.$1(J.jU(this.a,b))},
$ae:function(a,b){return[b]}}
H.fH.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saM(u.c.$1(t.gP(t)))
return!0}u.saM(null)
return!1},
gP:function(a){return this.a},
saM:function(a){this.a=H.F(a,H.w(this,1))},
$aaN:function(a,b){return[b]}}
H.im.prototype={
gX:function(a){return new H.io(J.c2(this.a),this.b,this.$ti)}}
H.io.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.z(t.$1(u.gP(u))))return!0
return!1},
gP:function(a){var u=this.a
return u.gP(u)}}
H.bH.prototype={}
H.dJ.prototype={}
H.dI.prototype={}
H.hT.prototype={
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
H.h6.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fw.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.i3.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jg.prototype={
$1:function(a){if(!!J.V(a).$ibm)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:23}
H.en.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iak:1}
H.c8.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ijm:1,
ghY:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hH.prototype={}
H.hz.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c0(u)+"'"}}
H.c4.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c4))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.cq(this.a)
else u=typeof t!=="object"?J.bD(t):H.cq(t)
return(u^H.cq(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.cr(u))+"'")}}
H.hV.prototype={
i:function(a){return this.a}}
H.eX.prototype={
i:function(a){return this.a}}
H.hm.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.ip.prototype={
i:function(a){return"Assertion failed: "+P.d7(this.a)}}
H.W.prototype={
gk:function(a){return this.a},
gas:function(a){return new H.df(this,[H.w(this,0)])},
d_:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cz(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cz(t,b)}else return s.hr(b)},
hr:function(a){var u=this.d
if(u==null)return!1
return this.bV(this.bo(u,J.bD(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b5(r,b)
s=t==null?null:t.b
return s}else return q.hs(b)},
hs:function(a){var u,t,s=this.d
if(s==null)return
u=this.bo(s,J.bD(a)&0x3ffffff)
t=this.bV(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
H.F(b,H.w(o,0))
H.F(c,H.w(o,1))
if(typeof b==="string"){u=o.b
o.cp(u==null?o.b=o.by():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cp(t==null?o.c=o.by():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.by()
r=J.bD(b)&0x3ffffff
q=o.bo(s,r)
if(q==null)o.bF(s,r,[o.bz(b,c)])
else{p=o.bV(q,b)
if(p>=0)q[p].b=c
else q.push(o.bz(b,c))}}},
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.ca(s))
u=u.c}},
cp:function(a,b,c){var u,t=this
H.F(b,H.w(t,0))
H.F(c,H.w(t,1))
u=t.b5(a,b)
if(u==null)t.bF(a,b,t.bz(b,c))
else u.b=c},
bz:function(a,b){var u=this,t=new H.fz(H.F(a,H.w(u,0)),H.F(b,H.w(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.k2(this)},
b5:function(a,b){return a[b]},
bo:function(a,b){return a[b]},
bF:function(a,b,c){a[b]=c},
eg:function(a,b){delete a[b]},
cz:function(a,b){return this.b5(a,b)!=null},
by:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bF(t,u,t)
this.eg(t,u)
return t}}
H.fz.prototype={}
H.df.prototype={
gk:function(a){return this.a.a},
gX:function(a){var u=this.a,t=new H.fA(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fA.prototype={
gP:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.ca(t))
else{t=u.c
if(t==null){u.sco(null)
return!1}else{u.sco(t.a)
u.c=u.c.c
return!0}}},
sco:function(a){this.d=H.F(a,H.w(this,0))},
$iaN:1}
H.j8.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.j9.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.ja.prototype={
$1:function(a){return this.a(H.a8(a))},
$S:29}
H.fv.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ik7:1}
H.cn.prototype={$ind:1}
H.dm.prototype={
gk:function(a){return a.length},
$iG:1,
$aG:function(){}}
H.cm.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]},
$abH:function(){return[P.B]},
$au:function(){return[P.B]},
$ie:1,
$ae:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.dn.prototype={
$abH:function(){return[P.r]},
$au:function(){return[P.r]},
$ie:1,
$ae:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.h0.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.h1.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.h2.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.h3.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.h4.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.dp.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bx(b,a,a.length)
return a[b]},
$ine:1}
H.h5.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bx(b,a,a.length)
return a[b]},
$inf:1}
H.cG.prototype={}
H.cH.prototype={}
H.cI.prototype={}
H.cJ.prototype={}
P.ir.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:21}
P.iq.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.is.prototype={
$0:function(){this.a.$0()},
$S:2}
P.it.prototype={
$0:function(){this.a.$0()},
$S:2}
P.et.prototype={
e0:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bW(new P.iW(this,b),0),a)
else throw H.i(P.am("`setTimeout()` not found."))},
e1:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bW(new P.iV(this,a,Date.now(),b),0),a)
else throw H.i(P.am("Periodic timer."))},
$iaZ:1}
P.iW.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.iV.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dP(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b3.prototype={
hv:function(a){if((this.c&15)!==6)return!0
return this.b.b.c6(H.n(this.d,{func:1,ret:P.a3,args:[P.M]}),a.a,P.a3,P.M)},
hp:function(a){var u=this.e,t=P.M,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.eJ(u,{func:1,args:[P.M,P.ak]}))return H.jL(r.hP(u,a.a,a.b,null,t,P.ak),s)
else return H.jL(r.c6(H.n(u,{func:1,args:[P.M]}),a.a,null,t),s)}}
P.aw.prototype={
dC:function(a,b,c){var u,t,s,r=H.w(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.U
if(u!==C.f){H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mk(b,u)}t=new P.aw($.U,[c])
s=b==null?1:3
this.cq(new P.b3(t,s,a,b,[r,c]))
return t},
hT:function(a,b){return this.dC(a,null,b)},
cq:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$ib3")
t.c=a}else{if(s===2){u=H.j(t.c,"$iaw")
s=u.a
if(s<4){u.cq(a)
return}t.a=s
t.c=u.c}P.j4(null,null,t.b,H.n(new P.iA(t,a),{func:1,ret:-1}))}},
cL:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$ib3")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iaw")
u=q.a
if(u<4){q.cL(a)
return}p.a=u
p.c=q.c}o.a=p.b6(a)
P.j4(null,null,p.b,H.n(new P.iE(o,p),{func:1,ret:-1}))}},
bD:function(){var u=H.j(this.c,"$ib3")
this.c=null
return this.b6(u)},
b6:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
ct:function(a){var u,t,s=this,r=H.w(s,0)
H.jL(a,{futureOr:1,type:r})
u=s.$ti
if(H.jI(a,"$icf",u,"$acf"))if(H.jI(a,"$iaw",u,null))P.kq(a,s)
else P.lR(a,s)
else{t=s.bD()
H.F(a,r)
s.a=4
s.c=a
P.cE(s,t)}},
cu:function(a,b){var u,t=this
H.j(b,"$iak")
u=t.bD()
t.a=8
t.c=new P.ag(a,b)
P.cE(t,u)},
$icf:1}
P.iA.prototype={
$0:function(){P.cE(this.a,this.b)},
$S:2}
P.iE.prototype={
$0:function(){P.cE(this.b,this.a.a)},
$S:2}
P.iB.prototype={
$1:function(a){var u=this.a
u.a=0
u.ct(a)},
$S:21}
P.iC.prototype={
$2:function(a,b){H.j(b,"$iak")
this.a.cu(a,b)},
$1:function(a){return this.$2(a,null)},
$S:41}
P.iD.prototype={
$0:function(){this.a.cu(this.b,this.c)},
$S:2}
P.iH.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dB(H.n(s.d,{func:1}),null)}catch(r){u=H.bB(r)
t=H.bZ(r)
if(o.d){s=H.j(o.a.a.c,"$iag").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$iag")
else q.b=new P.ag(u,t)
q.a=!0
return}if(!!J.V(n).$icf){if(n instanceof P.aw&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$iag")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.hT(new P.iI(p),null)
s.a=!1}},
$S:3}
P.iI.prototype={
$1:function(a){return this.a},
$S:31}
P.iG.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.F(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.c6(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bB(o)
t=H.bZ(o)
s=n.a
s.b=new P.ag(u,t)
s.a=!0}},
$S:3}
P.iF.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$iag")
r=m.c
if(H.z(r.hv(u))&&r.e!=null){q=m.b
q.b=r.hp(u)
q.a=!1}}catch(p){t=H.bB(p)
s=H.bZ(p)
r=H.j(m.a.a.c,"$iag")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ag(t,s)
n.a=!0}},
$S:3}
P.dR.prototype={}
P.hC.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aw($.U,[P.r])
r.a=0
u=H.w(s,0)
t=H.n(new P.hE(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hF(r,q),{func:1,ret:-1})
W.a6(s.a,s.b,t,!1,u)
return q}}
P.hE.prototype={
$1:function(a){H.F(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.w(this.b,0)]}}}
P.hF.prototype={
$0:function(){this.b.ct(this.a.a)},
$S:2}
P.cv.prototype={}
P.hD.prototype={}
P.aZ.prototype={}
P.ag.prototype={
i:function(a){return H.h(this.a)},
$ibm:1}
P.iY.prototype={$ins:1}
P.j3.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dq():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:2}
P.iO.prototype={
hQ:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.U){a.$0()
return}P.kt(r,r,this,a,-1)}catch(s){u=H.bB(s)
t=H.bZ(s)
P.j2(r,r,this,u,H.j(t,"$iak"))}},
hR:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.f===$.U){a.$1(b)
return}P.ku(r,r,this,a,b,-1,c)}catch(s){u=H.bB(s)
t=H.bZ(s)
P.j2(r,r,this,u,H.j(t,"$iak"))}},
h8:function(a,b){return new P.iQ(this,H.n(a,{func:1,ret:b}),b)},
bH:function(a){return new P.iP(this,H.n(a,{func:1,ret:-1}))},
cV:function(a,b){return new P.iR(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
dB:function(a,b){H.n(a,{func:1,ret:b})
if($.U===C.f)return a.$0()
return P.kt(null,null,this,a,b)},
c6:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.U===C.f)return a.$1(b)
return P.ku(null,null,this,a,b,c,d)},
hP:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.U===C.f)return a.$2(b,c)
return P.ml(null,null,this,a,b,c,d,e,f)}}
P.iQ.prototype={
$0:function(){return this.a.dB(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iP.prototype={
$0:function(){return this.a.hQ(this.b)},
$S:3}
P.iR.prototype={
$1:function(a){var u=this.c
return this.a.hR(this.b,H.F(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iM.prototype={
gX:function(a){var u=this,t=new P.e5(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.F(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cr(u==null?s.b=P.jD():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cr(t==null?s.c=P.jD():t,b)}else return s.e4(0,b)},
e4:function(a,b){var u,t,s,r=this
H.F(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.jD()
t=r.cv(b)
s=u[t]
if(s==null)u[t]=[r.bk(b)]
else{if(r.cD(s,b)>=0)return!1
s.push(r.bk(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fB(this.c,b)
else return this.fA(0,b)},
fA:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eq(r,b)
t=s.cD(u,b)
if(t<0)return!1
s.cR(u.splice(t,1)[0])
return!0},
cr:function(a,b){H.F(b,H.w(this,0))
if(H.j(a[b],"$icF")!=null)return!1
a[b]=this.bk(b)
return!0},
fB:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$icF")
if(u==null)return!1
this.cR(u)
delete a[b]
return!0},
cF:function(){this.r=1073741823&this.r+1},
bk:function(a){var u,t=this,s=new P.cF(H.F(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cF()
return s},
cR:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cF()},
cv:function(a){return J.bD(a)&1073741823},
eq:function(a,b){return a[this.cv(b)]},
cD:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.cF.prototype={}
P.e5.prototype={
gP:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.ca(t))
else{t=u.c
if(t==null){u.scs(null)
return!1}else{u.scs(H.F(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
scs:function(a){this.d=H.F(a,H.w(this,0))},
$iaN:1}
P.fB.prototype={$ie:1,$ib:1}
P.u.prototype={
gX:function(a){return new H.dg(a,this.gk(a),[H.cS(this,a,"u",0)])},
C:function(a,b){return this.j(a,b)},
hW:function(a,b){var u,t=this,s=H.c([],[H.cS(t,a,"u",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
hV:function(a){return this.hW(a,!0)},
i:function(a){return P.jo(a,"[","]")}}
P.fE.prototype={}
P.fF.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:17}
P.ad.prototype={
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.cS(s,a,"ad",0),H.cS(s,a,"ad",1)]})
for(u=J.c2(s.gas(a));u.A();){t=u.gP(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.c3(this.gas(a))},
i:function(a){return P.k2(a)},
$iE:1}
P.iS.prototype={
i:function(a){return P.jo(this,"{","}")},
C:function(a,b){var u,t,s,r=this
P.kd(b,"index")
for(u=P.lT(r,r.r,H.w(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.i(P.T(b,r,"index",null,t))},
$ie:1,
$ikg:1}
P.e6.prototype={}
P.c9.prototype={}
P.d0.prototype={}
P.fd.prototype={
$ac9:function(){return[P.l,[P.b,P.r]]}}
P.i6.prototype={}
P.i7.prototype={
hb:function(a){var u,t,s=P.ke(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iX(u)
if(t.ep(a,0,s)!==s)t.cS(C.c.bL(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lX(0,t.b,u.length)))},
$ad0:function(){return[P.l,[P.b,P.r]]}}
P.iX.prototype={
cS:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
ep:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bL(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.b4(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cS(r,C.c.b4(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a3.prototype={}
P.as.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.as&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.e.b7(u,30))&1073741823},
i:function(a){var u=this,t=P.lc(H.ly(u)),s=P.d2(H.lw(u)),r=P.d2(H.ls(u)),q=P.d2(H.lt(u)),p=P.d2(H.lv(u)),o=P.d2(H.lx(u)),n=P.ld(H.lu(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.B.prototype={}
P.bl.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bl&&this.a===b.a},
gF:function(a){return C.e.gF(this.a)},
i:function(a){var u,t,s,r=new P.fb(),q=this.a
if(q<0)return"-"+new P.bl(0-q).i(0)
u=r.$1(C.e.a1(q,6e7)%60)
t=r.$1(C.e.a1(q,1e6)%60)
s=new P.fa().$1(q%1e6)
return""+C.e.a1(q,36e8)+":"+H.h(u)+":"+H.h(t)+"."+H.h(s)}}
P.fa.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fb.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bm.prototype={}
P.eP.prototype={
i:function(a){return"Assertion failed"}}
P.dq.prototype={
i:function(a){return"Throw of null."}}
P.aG.prototype={
gbm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbl:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbm()+o+u
if(!q.a)return t
s=q.gbl()
r=P.d7(q.b)
return t+s+": "+r}}
P.bM.prototype={
gbm:function(){return"RangeError"},
gbl:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.ft.prototype={
gbm:function(){return"RangeError"},
gbl:function(){var u,t=H.ab(this.b)
if(typeof t!=="number")return t.a6()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gk:function(a){return this.f}}
P.i4.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i2.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hy.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f0.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.d7(u)+"."}}
P.h9.prototype={
i:function(a){return"Out of Memory"},
$ibm:1}
P.dA.prototype={
i:function(a){return"Stack Overflow"},
$ibm:1}
P.f5.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.fo.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.cf(s,0,75)+"...":s
return t+"\n"+r}}
P.r.prototype={}
P.e.prototype={
gk:function(a){var u,t=this.gX(this)
for(u=0;t.A();)++u
return u},
C:function(a,b){var u,t,s
P.kd(b,"index")
for(u=this.gX(this),t=0;u.A();){s=u.gP(u)
if(b===t)return s;++t}throw H.i(P.T(b,this,"index",null,t))},
i:function(a){return P.lf(this,"(",")")}}
P.aN.prototype={}
P.b.prototype={$ie:1}
P.E.prototype={}
P.J.prototype={
gF:function(a){return P.M.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
n:function(a,b){return this===b},
gF:function(a){return H.cq(this)},
i:function(a){return"Instance of '"+H.h(H.cr(this))+"'"},
toString:function(){return this.i(this)}}
P.ak.prototype={}
P.l.prototype={$ik7:1}
P.bu.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eL.prototype={
gk:function(a){return a.length}}
W.eN.prototype={
i:function(a){return String(a)}}
W.eO.prototype={
i:function(a){return String(a)}}
W.cW.prototype={}
W.bG.prototype={
ca:function(a,b,c){if(c!=null)return a.getContext(b,P.mt(c))
return a.getContext(b)},
dH:function(a,b){return this.ca(a,b,null)},
$ibG:1}
W.c7.prototype={$ic7:1}
W.bk.prototype={
gk:function(a){return a.length}}
W.cc.prototype={$icc:1}
W.f1.prototype={
gk:function(a){return a.length}}
W.N.prototype={$iN:1}
W.cd.prototype={
gk:function(a){return a.length}}
W.f2.prototype={}
W.aI.prototype={}
W.aJ.prototype={}
W.f3.prototype={
gk:function(a){return a.length}}
W.f4.prototype={
gk:function(a){return a.length}}
W.f6.prototype={
gk:function(a){return a.length}}
W.d3.prototype={$id3:1}
W.f7.prototype={
i:function(a){return String(a)}}
W.d4.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[[P.aj,P.a7]]},
$au:function(){return[[P.aj,P.a7]]},
$ie:1,
$ae:function(){return[[P.aj,P.a7]]},
$ib:1,
$ab:function(){return[[P.aj,P.a7]]},
$aA:function(){return[[P.aj,P.a7]]}}
W.d5.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gay(a))+" x "+H.h(this.gar(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iaj)return!1
return a.left===u.gbc(b)&&a.top===u.gbe(b)&&this.gay(a)===u.gay(b)&&this.gar(a)===u.gar(b)},
gF:function(a){return W.kr(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(this.gay(a)),C.d.gF(this.gar(a)))},
gcW:function(a){return a.bottom},
gar:function(a){return a.height},
gbc:function(a){return a.left},
gc5:function(a){return a.right},
gbe:function(a){return a.top},
gay:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.a7]}}
W.f8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[P.l]},
$au:function(){return[P.l]},
$ie:1,
$ae:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aA:function(){return[P.l]}}
W.f9.prototype={
gk:function(a){return a.length}}
W.iv.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.j(u[b],"$iZ")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var u=this.hV(this)
return new J.af(u,u.length,[H.w(u,0)])},
$au:function(){return[W.Z]},
$ae:function(){return[W.Z]},
$ab:function(){return[W.Z]}}
W.Z.prototype={
gcY:function(a){return new W.iv(a,a.children)},
gcZ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a6()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a6()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
$iZ:1}
W.k.prototype={$ik:1}
W.f.prototype={
h1:function(a,b,c,d){H.n(c,{func:1,args:[W.k]})
if(c!=null)this.e5(a,b,c,!1)},
e5:function(a,b,c,d){return a.addEventListener(b,H.bW(H.n(c,{func:1,args:[W.k]}),1),!1)},
$if:1}
W.aL.prototype={$iaL:1}
W.fi.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aL]},
$au:function(){return[W.aL]},
$ie:1,
$ae:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aA:function(){return[W.aL]}}
W.fj.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.fr.prototype={
gk:function(a){return a.length}}
W.bI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$au:function(){return[W.H]},
$ie:1,
$ae:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ibI:1,
$aA:function(){return[W.H]}}
W.bn.prototype={$ibn:1,
gd0:function(a){return a.data}}
W.ch.prototype={$ich:1}
W.aP.prototype={$iaP:1}
W.fC.prototype={
i:function(a){return String(a)}}
W.fU.prototype={
gk:function(a){return a.length}}
W.fV.prototype={
j:function(a,b){return P.bf(a.get(H.a8(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gas:function(a){var u=H.c([],[P.l])
this.G(a,new W.fW(u))
return u},
gk:function(a){return a.size},
$aad:function(){return[P.l,null]},
$iE:1,
$aE:function(){return[P.l,null]}}
W.fW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.fX.prototype={
j:function(a,b){return P.bf(a.get(H.a8(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gas:function(a){var u=H.c([],[P.l])
this.G(a,new W.fY(u))
return u},
gk:function(a){return a.size},
$aad:function(){return[P.l,null]},
$iE:1,
$aE:function(){return[P.l,null]}}
W.fY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aS.prototype={$iaS:1}
W.fZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aS]},
$au:function(){return[W.aS]},
$ie:1,
$ae:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aA:function(){return[W.aS]}}
W.a9.prototype={$ia9:1}
W.iu.prototype={
gX:function(a){var u=this.a.childNodes
return new W.d8(u,u.length,[H.cS(C.F,u,"A",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$au:function(){return[W.H]},
$ae:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.dM(a):u},
$iH:1}
W.co.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$au:function(){return[W.H]},
$ie:1,
$ae:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aA:function(){return[W.H]}}
W.aT.prototype={$iaT:1,
gk:function(a){return a.length}}
W.hb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aT]},
$au:function(){return[W.aT]},
$ie:1,
$ae:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aA:function(){return[W.aT]}}
W.hk.prototype={
j:function(a,b){return P.bf(a.get(H.a8(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gas:function(a){var u=H.c([],[P.l])
this.G(a,new W.hl(u))
return u},
gk:function(a){return a.size},
$aad:function(){return[P.l,null]},
$iE:1,
$aE:function(){return[P.l,null]}}
W.hl.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hn.prototype={
gk:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.hv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aV]},
$au:function(){return[W.aV]},
$ie:1,
$ae:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aA:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.hw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aW]},
$au:function(){return[W.aW]},
$ie:1,
$ae:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aA:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gk:function(a){return a.length}}
W.hA.prototype={
j:function(a,b){return a.getItem(H.a8(b))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gas:function(a){var u=H.c([],[P.l])
this.G(a,new W.hB(u))
return u},
gk:function(a){return a.length},
$aad:function(){return[P.l,P.l]},
$iE:1,
$aE:function(){return[P.l,P.l]}}
W.hB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:35}
W.aC.prototype={$iaC:1}
W.aY.prototype={$iaY:1}
W.aD.prototype={$iaD:1}
W.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aD]},
$au:function(){return[W.aD]},
$ie:1,
$ae:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aA:function(){return[W.aD]}}
W.hJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aY]},
$au:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aA:function(){return[W.aY]}}
W.hN.prototype={
gk:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.aE.prototype={$iaE:1}
W.hQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b_]},
$au:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aA:function(){return[W.b_]}}
W.hR.prototype={
gk:function(a){return a.length}}
W.bw.prototype={}
W.i5.prototype={
i:function(a){return String(a)}}
W.il.prototype={
gk:function(a){return a.length}}
W.b2.prototype={
ghf:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.am("deltaY is not supported"))},
ghe:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.am("deltaX is not supported"))},
$ib2:1}
W.cD.prototype={
fD:function(a,b){return a.requestAnimationFrame(H.bW(H.n(b,{func:1,ret:-1,args:[P.a7]}),1))},
ej:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.N]},
$au:function(){return[W.N]},
$ie:1,
$ae:function(){return[W.N]},
$ib:1,
$ab:function(){return[W.N]},
$aA:function(){return[W.N]}}
W.dU.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iaj)return!1
return a.left===u.gbc(b)&&a.top===u.gbe(b)&&a.width===u.gay(b)&&a.height===u.gar(b)},
gF:function(a){return W.kr(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(a.width),C.d.gF(a.height))},
gar:function(a){return a.height},
gay:function(a){return a.width}}
W.iJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aM]},
$au:function(){return[W.aM]},
$ie:1,
$ae:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aA:function(){return[W.aM]}}
W.eb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$au:function(){return[W.H]},
$ie:1,
$ae:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aA:function(){return[W.H]}}
W.iT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aX]},
$au:function(){return[W.aX]},
$ie:1,
$ae:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aA:function(){return[W.aX]}}
W.iU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aC]},
$au:function(){return[W.aC]},
$ie:1,
$ae:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$aA:function(){return[W.aC]}}
W.ix.prototype={}
W.jC.prototype={}
W.iy.prototype={}
W.iz.prototype={
$1:function(a){return this.a.$1(H.j(a,"$ik"))},
$S:36}
W.A.prototype={
gX:function(a){return new W.d8(a,this.gk(a),[H.cS(this,a,"A",0)])}}
W.d8.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scE(J.eK(u.a,t))
u.c=t
return!0}u.scE(null)
u.c=s
return!1},
gP:function(a){return this.d},
scE:function(a){this.d=H.F(a,H.w(this,0))},
$iaN:1}
W.dT.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.eo.prototype={}
W.er.prototype={}
W.es.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
P.ey.prototype={$ibn:1,
gd0:function(a){return this.a}}
P.j5.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.fk.prototype={
gbp:function(){var u=this.b,t=H.ap(u,"u",0),s=W.Z
return new H.fG(new H.im(u,H.n(new P.fl(),{func:1,ret:P.a3,args:[t]}),[t]),H.n(new P.fm(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.c3(this.gbp().a)},
j:function(a,b){var u=this.gbp()
return u.b.$1(J.jU(u.a,b))},
gX:function(a){var u=P.k1(this.gbp(),!1,W.Z)
return new J.af(u,u.length,[H.w(u,0)])},
$au:function(){return[W.Z]},
$ae:function(){return[W.Z]},
$ab:function(){return[W.Z]}}
P.fl.prototype={
$1:function(a){return!!J.V(H.j(a,"$iH")).$iZ},
$S:25}
P.fm.prototype={
$1:function(a){return H.p(H.j(a,"$iH"),"$iZ")},
$S:26}
P.iN.prototype={
gc5:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.C(t)
return H.F(u+t,H.w(this,0))},
gcW:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.C(t)
return H.F(u+t,H.w(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.h(u.a)+", "+H.h(u.b)+") "+H.h(u.c)+" x "+H.h(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$iaj){t=p.a
if(t==u.gbc(b)){s=p.b
if(s==u.gbe(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.C(r)
q=H.w(p,0)
if(H.F(t+r,q)===u.gc5(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.C(t)
u=H.F(s+t,q)===u.gcW(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u,t=this,s=t.a,r=J.bD(s),q=t.b,p=J.bD(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.C(o)
u=H.w(t,0)
o=C.e.gF(H.F(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.C(s)
u=C.e.gF(H.F(q+s,u))
return P.lS(P.iL(P.iL(P.iL(P.iL(0,r),p),o),u))}}
P.aj.prototype={
gbc:function(a){return this.a},
gbe:function(a){return this.b},
gay:function(a){return this.c},
gar:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.fy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.b5]},
$ie:1,
$ae:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aA:function(){return[P.b5]}}
P.ba.prototype={$iba:1}
P.h7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.ba]},
$ie:1,
$ae:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aA:function(){return[P.ba]}}
P.hd.prototype={
gk:function(a){return a.length}}
P.hG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.l]},
$ie:1,
$ae:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aA:function(){return[P.l]}}
P.o.prototype={
gcY:function(a){return new P.fk(a,new W.iu(a))}}
P.bd.prototype={$ibd:1}
P.hS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.bd]},
$ie:1,
$ae:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aA:function(){return[P.bd]}}
P.e3.prototype={}
P.e4.prototype={}
P.ee.prototype={}
P.ef.prototype={}
P.ep.prototype={}
P.eq.prototype={}
P.ew.prototype={}
P.ex.prototype={}
P.eR.prototype={
gk:function(a){return a.length}}
P.eS.prototype={
j:function(a,b){return P.bf(a.get(H.a8(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gas:function(a){var u=H.c([],[P.l])
this.G(a,new P.eT(u))
return u},
gk:function(a){return a.size},
$aad:function(){return[P.l,null]},
$iE:1,
$aE:function(){return[P.l,null]}}
P.eT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.eU.prototype={
gk:function(a){return a.length}}
P.bE.prototype={}
P.h8.prototype={
gk:function(a){return a.length}}
P.dS.prototype={}
P.cX.prototype={$icX:1}
P.dt.prototype={$idt:1}
P.bN.prototype={
hS:function(a,b,c,d,e,f,g){var u,t=J.V(g)
if(!!t.$ibn)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mu(g))
return}if(!!t.$ich)t=!0
else t=!1
if(t){this.fR(a,b,c,d,e,f,g)
return}throw H.i(P.l5("Incorrect number or type of arguments"))},
fR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
W:function(a,b,c){return a.uniform1f(b,c)},
bg:function(a,b,c){return a.uniform1i(b,c)},
T:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dE:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibN:1}
P.du.prototype={$idu:1}
P.dC.prototype={$idC:1}
P.dH.prototype={$idH:1}
P.hx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return P.bf(a.item(b))},
C:function(a,b){return this.j(a,b)},
$au:function(){return[[P.E,,,]]},
$ie:1,
$ae:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aA:function(){return[[P.E,,,]]}}
P.el.prototype={}
P.em.prototype={}
O.S.prototype={
bi:function(a){var u=this
u.sew(H.c([],[a]))
u.scJ(null)
u.scG(null)
u.scK(null)},
cb:function(a,b,c){var u=this,t=H.ap(u,"S",0)
H.n(b,{func:1,ret:P.a3,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.r,[P.e,t]]}
H.n(a,t)
H.n(c,t)
u.scJ(b)
u.scG(a)
u.scK(c)},
aI:function(a,b){return this.cb(a,null,b)},
aP:function(a){var u
H.m(a,"$ie",[H.ap(this,"S",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
bA:function(a,b){var u
H.m(b,"$ie",[H.ap(this,"S",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.af(u,u.length,[H.w(u,0)])},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ap(s,"S",0)
H.F(b,r)
r=[r]
if(H.z(s.aP(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.bA(t,H.c([b],r))}},
aR:function(a,b){var u,t,s=this
H.m(b,"$ie",[H.ap(s,"S",0)],"$ae")
if(H.z(s.aP(b))){u=s.a
t=u.length
C.a.aR(u,b)
s.bA(t,b)}},
l:function(a,b,c){var u,t,s,r=this,q=H.ap(r,"S",0)
H.F(c,q)
u=r.a
if(b>=u.length)return H.d(u,b)
t=u[b]
if(!J.Q(t,c)&&H.z(r.aP(H.c([c],[q])))){C.a.l(r.a,b,c)
u=[q]
q=H.m(H.c([t],u),"$ie",[q],"$ae")
s=r.d
if(s!=null)s.$2(b,q)
r.bA(b,H.c([c],u))}},
sew:function(a){this.a=H.m(a,"$ib",[H.ap(this,"S",0)],"$ab")},
scJ:function(a){this.b=H.n(a,{func:1,ret:P.a3,args:[[P.e,H.ap(this,"S",0)]]})},
scG:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.r,[P.e,H.ap(this,"S",0)]]})},
scK:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.r,[P.e,H.ap(this,"S",0)]]})},
$ie:1}
O.ck.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.L():u},
az:function(){var u=this.b
if(u!=null)u.u(null)},
gR:function(a){var u=this.a
if(u.length>0)return C.a.gbX(u)
else return V.bs()},
bd:function(a){var u=this.a
if(a==null)C.a.h(u,V.bs())
else C.a.h(u,a)
this.az()},
au:function(){var u=this.a
if(u.length>0){u.pop()
this.az()}},
sbq:function(a){this.a=H.m(a,"$ib",[V.a5],"$ab")}}
E.eV.prototype={}
E.ah.prototype={
scd:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().L(0,s.gdu())
u=s.c
if(u!=null)u.gm().h(0,s.gdu())
t=new D.D("shape",r,s.c,[F.dv])
t.b=!0
s.at(t)}},
sdn:function(a){var u,t,s=this
if(!J.Q(s.r,a)){u=s.r
if(u!=null)u.gm().L(0,s.gds())
if(a!=null)a.gm().h(0,s.gds())
s.r=a
t=new D.D("mover",u,a,[U.a0])
t.b=!0
s.at(t)}},
ae:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.Q(q,s.x)){u=s.x
s.x=q
t=new D.D("matrix",u,q,[V.a5])
t.b=!0
s.at(t)}for(r=s.y.a,r=new J.af(r,r.length,[H.w(r,0)]);r.A();)r.d.ae(0,b)},
a2:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gR(s))
else C.a.h(s.a,r.p(0,s.gR(s)))
s.az()
a.c4(t.f)
s=a.dy
u=(s&&C.a).gbX(s)
if(u!=null&&t.d!=null)u.dz(a,t)
for(s=t.y.a,s=new J.af(s,s.length,[H.w(s,0)]);s.A();)s.d.a2(a)
a.c3()
a.dx.au()},
at:function(a){var u=this.z
if(u!=null)u.u(a)},
Z:function(){return this.at(null)},
dv:function(a){H.j(a,"$iv")
this.e=null
this.at(a)},
hD:function(){return this.dv(null)},
dt:function(a){this.at(H.j(a,"$iv"))},
hC:function(){return this.dt(null)},
dr:function(a){this.at(H.j(a,"$iv"))},
hz:function(){return this.dr(null)},
hy:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ie",[E.ah],"$ae")
for(u=b.length,t=this.gdq(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aK()
o.sY(null)
o.sah(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sY(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
hB:function(a,b){var u,t,s,r,q
H.m(b,"$ie",[E.ah],"$ae")
for(u=b.length,t=this.gdq(),s=0;s<b.length;b.length===u||(0,H.t)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aK()
q.sY(null)
q.sah(null)
q.c=null
q.d=0
r.z=q}q.L(0,t)}}this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sdU:function(a,b){this.y=H.m(b,"$iS",[E.ah],"$aS")},
$ibK:1}
E.hg.prototype={
dR:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.as(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.ck()
t=[V.a5]
u.sbq(H.c([],t))
u.b=null
u.gm().h(0,new E.hh(s))
s.cy=u
u=new O.ck()
u.sbq(H.c([],t))
u.b=null
u.gm().h(0,new E.hi(s))
s.db=u
u=new O.ck()
u.sbq(H.c([],t))
u.b=null
u.gm().h(0,new E.hj(s))
s.dx=u
s.sfQ(H.c([],[O.bv]))
u=s.dy;(u&&C.a).h(u,null)
s.sfL(new H.W([P.l,A.ct]))},
ghM:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gR(s)
u=t.db
u=t.z=s.p(0,u.gR(u))
s=u}return s},
c4:function(a){var u=this.dy,t=a==null?(u&&C.a).gbX(u):a;(u&&C.a).h(u,t)},
c3:function(){var u=this.dy
if(u.length>1)u.pop()},
cU:function(a){var u=a.b
if(u.length===0)throw H.i(P.x("May not cache a shader with no name."))
if(this.fr.d_(0,u))throw H.i(P.x('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)},
sfQ:function(a){this.dy=H.m(a,"$ib",[O.bv],"$ab")},
sfL:function(a){this.fr=H.m(a,"$iE",[P.l,A.ct],"$aE")}}
E.hh.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:9}
E.hi.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.hj.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:9}
E.dD.prototype={
cn:function(a){H.j(a,"$iv")
this.dA()},
cm:function(){return this.cn(null)},
gho:function(){var u,t=this,s=Date.now(),r=C.e.a1(P.jZ(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.as(s,!1)
return u/r},
cN:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.C(r)
u=C.d.bU(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.d.bU(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kj(C.i,s.ghO())}},
dA:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.hM(this),{func:1,ret:-1,args:[P.a7]})
C.q.ej(u)
C.q.fD(u,W.kx(t,P.a7))}},
hN:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cN()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.as(r,!1)
s.y=P.jZ(r-s.r.a).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.az()
r=s.db
C.a.sk(r.a,0)
r.az()
r=s.dx
C.a.sk(r.a,0)
r.az()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a2(p.e)}}catch(q){u=H.bB(q)
t=H.bZ(q)
P.jR("Error: "+H.h(u))
P.jR("Stack: "+H.h(t))
throw H.i(u)}}}
E.hM.prototype={
$1:function(a){var u
H.kH(a)
u=this.a
if(u.ch){u.ch=!1
u.hN()}},
$S:30}
Z.dP.prototype={$imW:1}
Z.cY.prototype={
U:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bB(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.h(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.h(u.e)+"]"}}
Z.dQ.prototype={$imX:1}
Z.c6.prototype={
aq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
U:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].U(a)},
ax:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a2:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.l],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aq(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
ser:function(a){this.b=H.m(a,"$ib",[Z.bo],"$ab")},
$in2:1}
Z.bo.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.h(H.cr(this.c))+"'")+"]"}}
Z.be.prototype={
gce:function(a){var u=this.a,t=(u&$.aF().a)!==0?3:0
if((u&$.bi().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=3
if((u&$.bC().a)!==0)t+=2
if((u&$.bj().a)!==0)t+=3
if((u&$.cT().a)!==0)t+=3
if((u&$.cU().a)!==0)t+=4
if((u&$.c1().a)!==0)++t
return(u&$.bg().a)!==0?t+4:t},
h4:function(a){var u,t=$.aF(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bg()
if((s&t.a)!==0)if(u===a)return t
return $.l1()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.be))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.l]),t=this.a
if((t&$.aF().a)!==0)C.a.h(u,"Pos")
if((t&$.bi().a)!==0)C.a.h(u,"Norm")
if((t&$.bh().a)!==0)C.a.h(u,"Binm")
if((t&$.bC().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bj().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cT().a)!==0)C.a.h(u,"Clr3")
if((t&$.cU().a)!==0)C.a.h(u,"Clr4")
if((t&$.c1().a)!==0)C.a.h(u,"Weight")
if((t&$.bg().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.eY.prototype={}
D.aK.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.n(b,u)
if(this.a==null)this.sY(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.ai(u,b)
if(u===!0){u=s.a
t=(u&&C.a).L(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ai(u,b)
if(u===!0){u=s.b
t=(u&&C.a).L(u,b)||t}return t},
u:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.G(P.k1(u,!0,{func:1,ret:-1,args:[D.v]}),new D.fg(q))
u=r.b
if(u!=null){r.sah(H.c([],[{func:1,ret:-1,args:[D.v]}]))
C.a.G(u,new D.fh(q))}return!0},
hk:function(){return this.u(null)},
av:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.u(u)}}},
sY:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sah:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fg.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:15}
D.fh.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:15}
D.v.prototype={}
D.bp.prototype={}
D.bq.prototype={}
D.D.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.cZ.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cZ))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.dd.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.fx.prototype={
hI:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
hE:function(a){this.c=a.b
this.d.L(0,a.a)
return!1},
sfz:function(a){this.d=H.m(a,"$ikg",[P.r],"$akg")}}
X.dh.prototype={}
X.fD.prototype={
aN:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a1(o.a+n*m,o.b+u*t)
t=q.a.gaF()
r=new X.b8(a,V.bb(),q.x,t,s)
r.b=!0
q.z=new P.as(p,!1)
q.x=s
return r},
c2:function(a,b){this.r=a.a
return!1},
b_:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dJ()
if(typeof u!=="number")return u.aj()
this.r=(u&~t)>>>0
return!1},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.aN(a,b))
return!0},
hJ:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaF()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.cl(new V.O(s*r,q*p),u,t)
t.b=!0
n.u(t)
return!0},
f3:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dh(c,r.a.gaF(),b)
s.b=!0
t.u(s)
r.y=new P.as(u,!1)
r.x=V.bb()}}
X.ao.prototype={
n:function(a,b){var u=this
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
X.b8.prototype={}
X.h_.prototype={
bn:function(a,b,c){var u=this,t=new P.as(Date.now(),!1),s=u.a.gaF(),r=new X.b8(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c2:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.u(this.bn(a,b,!0))
return!0},
b_:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dJ()
if(typeof t!=="number")return t.aj()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.u(u.bn(a,b,!0))
return!0},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.bn(a,b,!1))
return!0},
hK:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaF()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.cl(new V.O(t*s,r*q),u,b)
u.b=!0
o.u(u)
return!0},
gd2:function(){var u=this.b
return u==null?this.b=D.L():u},
gc8:function(){var u=this.c
return u==null?this.c=D.L():u},
gdm:function(){var u=this.d
return u==null?this.d=D.L():u}}
X.cl.prototype={}
X.hc.prototype={}
X.dF.prototype={}
X.hP.prototype={
aN:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a1],"$ab")
u=new P.as(Date.now(),!1)
t=a.length>0?a[0]:V.bb()
s=q.a.gaF()
r=new X.dF(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
hH:function(a){var u
H.m(a,"$ib",[V.a1],"$ab")
u=this.b
if(u==null)return!1
u.u(this.aN(a,!0))
return!0},
hF:function(a){var u
H.m(a,"$ib",[V.a1],"$ab")
u=this.c
if(u==null)return!1
u.u(this.aN(a,!0))
return!0},
hG:function(a){var u
H.m(a,"$ib",[V.a1],"$ab")
u=this.d
if(u==null)return!1
u.u(this.aN(a,!1))
return!0}}
X.dK.prototype={
gaF:function(){var u=this.a,t=C.h.gcZ(u).c
t.toString
u=C.h.gcZ(u).d
u.toString
return V.hf(0,0,t,u)},
cA:function(a){var u=a.keyCode,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.dd(u,new X.ao(t,a.altKey,a.shiftKey))},
aE:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ao(t,a.altKey,a.shiftKey)},
bG:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ao(t,a.altKey,a.shiftKey)},
ao:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.E()
u=t.top
if(typeof r!=="number")return r.E()
return new V.a1(s-q,r-u)},
aQ:function(a){return new V.O(a.movementX,a.movementY)},
bC:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a1])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
q=C.d.ad(r.pageX)
C.d.ad(r.pageY)
p=o.left
C.d.ad(r.pageX)
C.a.h(n,new V.a1(q-p,C.d.ad(r.pageY)-o.top))}return n},
al:function(a){var u=a.buttons,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.cZ(u,new X.ao(t,a.altKey,a.shiftKey))},
br:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.E()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.E()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eY:function(a){this.f=!0},
eM:function(a){this.f=!1},
eS:function(a){H.j(a,"$ia9")
if(H.z(this.f)&&this.br(a))a.preventDefault()},
f1:function(a){var u
H.j(a,"$iaP")
if(!H.z(this.f))return
u=this.cA(a)
this.b.hI(u)},
f_:function(a){var u
H.j(a,"$iaP")
if(!H.z(this.f))return
u=this.cA(a)
this.b.hE(u)},
f5:function(a){var u,t,s,r,q=this
H.j(a,"$ia9")
u=q.a
u.focus()
q.f=!0
q.aE(a)
if(H.z(q.x)){t=q.al(a)
s=q.aQ(a)
if(q.d.c2(t,s))a.preventDefault()
return}if(H.z(q.r)){q.y=a
u.requestPointerLock()
return}t=q.al(a)
r=q.ao(a)
if(q.c.c2(t,r))a.preventDefault()},
f9:function(a){var u,t,s,r=this
H.j(a,"$ia9")
r.aE(a)
u=r.al(a)
if(H.z(r.x)){t=r.aQ(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ao(a)
if(r.c.b_(u,s))a.preventDefault()},
eW:function(a){var u,t,s,r=this
H.j(a,"$ia9")
if(!r.br(a)){r.aE(a)
u=r.al(a)
if(H.z(r.x)){t=r.aQ(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ao(a)
if(r.c.b_(u,s))a.preventDefault()}},
f7:function(a){var u,t,s,r=this
H.j(a,"$ia9")
r.aE(a)
u=r.al(a)
if(H.z(r.x)){t=r.aQ(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ao(a)
if(r.c.aZ(u,s))a.preventDefault()},
eU:function(a){var u,t,s,r=this
H.j(a,"$ia9")
if(!r.br(a)){r.aE(a)
u=r.al(a)
if(H.z(r.x)){t=r.aQ(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.ao(a)
if(r.c.aZ(u,s))a.preventDefault()}},
fb:function(a){var u,t,s=this
H.j(a,"$ib2")
s.aE(a)
u=new V.O((a&&C.p).ghe(a),C.p.ghf(a)).t(0,180)
if(H.z(s.x)){if(s.d.hJ(u))a.preventDefault()
return}if(H.z(s.r))return
t=s.ao(a)
if(s.c.hK(u,t))a.preventDefault()},
fd:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.al(s.y)
t=s.ao(s.y)
s.d.f3(u,t,r)}},
fs:function(a){var u,t=this
H.j(a,"$iaE")
t.a.focus()
t.f=!0
t.bG(a)
u=t.bC(a)
if(t.e.hH(u))a.preventDefault()},
fn:function(a){var u
H.j(a,"$iaE")
this.bG(a)
u=this.bC(a)
if(this.e.hF(u))a.preventDefault()},
fp:function(a){var u
H.j(a,"$iaE")
this.bG(a)
u=this.bC(a)
if(this.e.hG(u))a.preventDefault()},
sek:function(a){this.z=H.m(a,"$ib",[[P.cv,P.M]],"$ab")}}
D.b4.prototype={
ak:function(a){var u
H.j(a,"$iv")
u=this.r
if(u!=null)u.u(a)},
dW:function(){return this.ak(null)},
$ia4:1,
$ibK:1}
D.a4.prototype={$ibK:1}
D.de.prototype={
ak:function(a){var u=this.x
if(u!=null)u.u(a)},
cI:function(a){var u
H.j(a,"$iv")
u=this.y
if(u!=null)u.u(a)},
f2:function(){return this.cI(null)},
ff:function(a){var u,t,s
H.m(a,"$ie",[D.a4],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(s==null||this.ed(s))return!1}return!0},
eE:function(a,b){var u,t,s,r,q,p,o,n=D.a4
H.m(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gcH(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=H.j(b[q],"$ia4")
if(p instanceof D.b4)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.aK()
o.sY(null)
o.sah(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sY(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bp([n])
n.b=!0
this.ak(n)},
fj:function(a,b){var u,t,s,r,q,p=D.a4
H.m(b,"$ie",[p],"$ae")
for(u=b.length,t=this.gcH(),s=0;s<b.length;b.length===u||(0,H.t)(b),++s){r=H.j(b[s],"$ia4")
if(r instanceof D.b4)C.a.L(this.e,r)
q=r.r
if(q==null){q=new D.aK()
q.sY(null)
q.sah(null)
q.c=null
q.d=0
r.r=q}q.L(0,t)}p=new D.bq([p])
p.b=!0
this.ak(p)},
ed:function(a){var u=C.a.ai(this.e,a)
return u},
sei:function(a){this.e=H.m(a,"$ib",[D.b4],"$ab")},
sfu:function(a){this.f=H.m(a,"$ib",[D.ds],"$ab")},
sfO:function(a){this.r=H.m(a,"$ib",[D.dz],"$ab")},
$ae:function(){return[D.a4]},
$aS:function(){return[D.a4]}}
D.ds.prototype={$ia4:1,$ibK:1}
D.dz.prototype={$ia4:1,$ibK:1}
V.X.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.ar.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ar))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.ff.prototype={}
V.dl.prototype={
a5:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.B])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dl))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.B],o=V.bY(H.c([q.a,q.d,q.r],p),3,0),n=V.bY(H.c([q.b,q.e,q.x],p),3,0),m=V.bY(H.c([q.c,q.f,q.y],p),3,0)
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
V.a5.prototype={
a5:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.B])
return t},
bW:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a1.f,a4=a1.b,a5=a1.e,a6=a2*a3-a4*a5,a7=a1.r,a8=a1.c,a9=a2*a7-a8*a5,b0=a1.x,b1=a1.d
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
if(Math.abs(c-0)<$.K().a)return V.bs()
b=1/c
a=-a5
a0=-n
return V.aR((a3*d-a7*e+b0*f)*b,(-a4*d+a8*e-b1*f)*b,(p*r-l*s+i*t)*b,(-o*r+k*s-h*t)*b,(a*d+a7*g-b0*j)*b,(a2*d-a8*g+b1*j)*b,(a0*r+l*u-i*a9)*b,(q*r-k*u+h*a9)*b,(a5*e-a3*g+b0*m)*b,(-a2*e+a4*g-b1*m)*b,(n*s-p*u+i*a6)*b,(-q*s+o*u-h*a6)*b,(a*f+a3*j-a7*m)*b,(a2*f-a4*j+a8*m)*b,(a0*t+p*a9-l*a6)*b,(q*t-o*a9+k*a6)*b)},
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
if(typeof m!=="number")return H.C(m)
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
return V.aR(a4*a5+a6*a7+a8*a9+b0*b1,a4*u+a6*t+a8*s+b0*r,a4*q+a6*p+a8*o+b0*n,a4*m+a6*l+a8*k+b0*j,i*a5+h*a7+g*a9+f*b1,i*u+h*t+g*s+f*r,i*q+h*p+g*o+f*n,i*m+h*l+g*k+f*j,e*a5+d*a7+c*a9+b*b1,e*u+d*t+c*s+b*r,e*q+d*p+c*o+b*n,e*m+d*l+c*k+b*j,a*a5+a0*a7+a1*a9+a2*b1,a*u+a0*t+a1*s+a2*r,a*q+a0*p+a1*o+a2*n,a*m+a0*l+a1*k+a2*j)},
bf:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.I(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
c7:function(a){var u=this,t=a.a,s=a.b,r=a.c,q=u.d
if(typeof q!=="number")return H.C(q)
return new V.ai(u.a*t+u.b*s+u.c*r+q,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.K()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
u=b.d
r=q.d
t.toString
if(typeof u!=="number")return u.E()
if(typeof r!=="number")return H.C(r)
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
i:function(a){return this.H()},
v:function(a){var u,t,s,r,q,p=this,o=[P.B],n=V.bY(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bY(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bY(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bY(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
H:function(){return this.v("")}}
V.a1.prototype={
E:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.ai.prototype={
E:function(a,b){return new V.ai(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.bc.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bc))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.cs.prototype={
ga4:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cs))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.O.prototype={
bY:function(a){return Math.sqrt(this.w(this))},
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
return new V.O(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.kn
return u==null?$.kn=new V.O(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.O(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.I.prototype={
bY:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bZ:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.I(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aW:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.I(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.I(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.K().a)return V.dO()
return new V.I(this.a/b,this.b/b,this.c/b)},
dj:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
U.f_.prototype={
bj:function(a){var u=V.mV(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.L():u},
J:function(a){var u=this.y
if(u!=null)u.u(a)},
sc9:function(a,b){},
sc_:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bj(u)}s=new D.D("maximumLocation",s,t.b,[P.B])
s.b=!0
t.J(s)}},
sc1:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bj(u)}s=new D.D("minimumLocation",s,t.c,[P.B])
s.b=!0
t.J(s)}},
sa3:function(a,b){var u,t=this
b=t.bj(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.D("location",u,b,[P.B])
u.b=!0
t.J(u)}},
sc0:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.D("maximumVelocity",r,a,[P.B])
r.b=!0
s.J(r)}},
sM:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.D("velocity",t,a,[P.B])
t.b=!0
u.J(t)}},
sbN:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.D("dampening",u,a,[P.B])
u.b=!0
this.J(u)}},
ae:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa3(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sM(u)}}}
U.cb.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.L():u},
sR:function(a,b){var u,t,s,r=this
if(b==null)b=V.bs()
if(!J.Q(r.a,b)){u=r.a
r.a=b
t=new D.D("matrix",u,b,[V.a5])
t.b=!0
s=r.b
if(s!=null)s.u(t)}},
aH:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cb))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.cg.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.L():u},
J:function(a){var u
H.j(a,"$iv")
u=this.e
if(u!=null)u.u(a)},
a0:function(){return this.J(null)},
dY:function(a,b){var u,t,s,r,q,p,o,n=U.a0
H.m(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaA(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.n(t,s)
if(o.a==null)o.sY(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bp([n])
n.b=!0
this.J(n)},
fh:function(a,b){var u,t,s,r,q=U.a0
H.m(b,"$ie",[q],"$ae")
for(u=b.length,t=this.gaA(),s=0;s<b.length;b.length===u||(0,H.t)(b),++s){r=b[s]
if(r!=null)r.gm().L(0,t)}q=new D.bq([q])
q.b=!0
this.J(q)},
aH:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a6()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.af(r,r.length,[H.w(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aH(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.bs():u
r=s.e
if(r!=null)r.av(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cg))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.a0]},
$aS:function(){return[U.a0]},
$ia0:1}
U.a0.prototype={}
U.dL.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.L():u},
J:function(a){var u
H.j(a,"$iv")
u=this.cy
if(u!=null)u.u(a)},
a0:function(){return this.J(null)},
aS:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd2().h(0,u.gbs())
u.a.c.gdm().h(0,u.gbu())
u.a.c.gc8().h(0,u.gbw())
return!0},
bt:function(a){var u=this
H.j(a,"$iv")
if(!J.Q(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bv:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.j(a,"$iv"),"$ib8")
if(!H.z(n.y))return
if(H.z(n.x)){u=a.d.E(0,a.y)
u=new V.O(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.z(n.d)){u=a.c
t=a.d.E(0,a.y)
u=new V.O(t.a,t.b).p(0,2).t(0,u.ga4())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sM(u*10*s)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=new V.O(s.a,s.b).p(0,2).t(0,u.ga4())
s=n.b
q=r.a
if(typeof q!=="number")return q.K()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sa3(0,-q*p+o)
n.b.sM(0)
t=t.E(0,a.z)
n.Q=new V.O(t.a,t.b).p(0,2).t(0,u.ga4())}n.a0()},
bx:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.z(r.y))return
r.y=!1
if(H.z(r.x))return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sM(t*10*s)
r.a0()}},
aH:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a6()
if(q<p){r.ch=p
u=b.y
r.b.ae(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aR(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia0:1}
U.dM.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.L():u},
J:function(a){var u
H.j(a,"$iv")
u=this.fx
if(u!=null)u.u(a)},
a0:function(){return this.J(null)},
aS:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd2().h(0,s.gbs())
s.a.c.gdm().h(0,s.gbu())
s.a.c.gc8().h(0,s.gbw())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.h(0,s.gex())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.gez())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.gfX())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.gfV())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.gfT())
return!0},
ag:function(a){var u=a.a,t=a.b
if(H.z(this.f)){if(typeof u!=="number")return u.K()
u=-u}if(H.z(this.r)){if(typeof t!=="number")return t.K()
t=-t}return new V.O(u,t)},
bt:function(a){var u=this
a=H.p(H.j(a,"$iv"),"$ib8")
if(!J.Q(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bv:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.j(a,"$iv"),"$ib8")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.E(0,a.y)
u=new V.O(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.E(0,a.y)
u=n.ag(new V.O(t.a,t.b).p(0,2).t(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.K()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.K()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ag(new V.O(s.a,s.b).p(0,2).t(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa3(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.ag(new V.O(t.a,t.b).p(0,2).t(0,u.ga4()))}n.a0()},
bx:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.K()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.K()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sM(-t*10*u)
r.a0()}},
ey:function(a){var u=this
if(H.p(H.j(a,"$iv"),"$idh").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eA:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.j(a,"$iv"),"$ib8")
if(!J.Q(n.d,a.x.b))return
u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ag(new V.O(s.a,s.b).p(0,2).t(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa3(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.ag(new V.O(t.a,t.b).p(0,2).t(0,u.ga4()))
n.a0()},
fY:function(a){var u=this
H.j(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fW:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.j(a,"$iv"),"$idF")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.E(0,a.y)
u=new V.O(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.E(0,a.y)
u=n.ag(new V.O(t.a,t.b).p(0,2).t(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.K()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.K()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ag(new V.O(s.a,s.b).p(0,2).t(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa3(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.ag(new V.O(t.a,t.b).p(0,2).t(0,u.ga4()))}n.a0()},
fU:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.K()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.K()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sM(-t*10*u)
r.a0()}},
aH:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a6()
if(q<p){r.dy=p
u=b.y
r.c.ae(0,u)
r.b.ae(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.fr=V.aR(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1).p(0,V.jt(r.c.d))}return r.fr},
$ia0:1}
U.dN.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.L():u},
J:function(a){var u=this.r
if(u!=null)u.u(a)},
aS:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.geB()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).h(0,t)
return!0},
eC:function(a){var u,t,s,r,q=this
H.j(a,"$iv")
if(!J.Q(q.b,q.a.b.c))return
H.p(a,"$icl")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.D("zoom",u,r,[P.B])
u.b=!0
q.J(u)}},
aH:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lq(u,u,u)}return t.f},
$ia0:1}
M.d1.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.L():u},
O:function(a){var u
H.j(a,"$iv")
u=this.r
if(u!=null)u.u(a)},
aL:function(){return this.O(null)},
saT:function(a){var u,t,s=this
if(a==null)a=new X.fs()
u=s.b
if(u!==a){if(u!=null)u.gm().L(0,s.gN())
t=s.b
s.b=a
a.gm().h(0,s.gN())
u=new D.D("camera",t,s.b,[X.bF])
u.b=!0
s.O(u)}},
sb0:function(a,b){var u,t,s=this
if(b==null)b=X.fq(null)
u=s.c
if(u!==b){if(u!=null)u.gm().L(0,s.gN())
t=s.c
s.c=b
b.gm().h(0,s.gN())
u=new D.D("target",t,s.c,[X.bP])
u.b=!0
s.O(u)}},
sb1:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().L(0,t.gN())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gN())
s=new D.D("technique",u,t.d,[O.bv])
s.b=!0
t.O(s)}},
a2:function(a){var u=this
a.c4(u.d)
u.c.U(a)
u.b.U(a)
u.e.ae(0,a)
u.e.a2(a)
u.b.ax(a)
u.c.toString
a.c3()},
$iaA:1,
$ibO:1}
M.d6.prototype={
O:function(a){var u
H.j(a,"$iv")
u=this.y
if(u!=null)u.u(a)},
aL:function(){return this.O(null)},
eO:function(a,b){var u,t,s,r,q,p,o,n=E.ah
H.m(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gN(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aK()
o.sY(null)
o.sah(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sY(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bp([n])
n.b=!0
this.O(n)},
eQ:function(a,b){var u,t,s,r,q,p=E.ah
H.m(b,"$ie",[p],"$ae")
for(u=b.length,t=this.gN(),s=0;s<b.length;b.length===u||(0,H.t)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aK()
q.sY(null)
q.sah(null)
q.c=null
q.d=0
r.z=q}q.L(0,t)}}p=new D.bq([p])
p.b=!0
this.O(p)},
saT:function(a){var u,t,s=this
if(a==null)a=X.jv(null)
u=s.b
if(u!==a){if(u!=null)u.gm().L(0,s.gN())
t=s.b
s.b=a
a.gm().h(0,s.gN())
u=new D.D("camera",t,s.b,[X.bF])
u.b=!0
s.O(u)}},
sb0:function(a,b){var u,t,s=this
if(b==null)b=X.fq(null)
u=s.c
if(u!==b){if(u!=null)u.gm().L(0,s.gN())
t=s.c
s.c=b
b.gm().h(0,s.gN())
u=new D.D("target",t,s.c,[X.bP])
u.b=!0
s.O(u)}},
sb1:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().L(0,t.gN())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gN())
s=new D.D("technique",u,t.d,[O.bv])
s.b=!0
t.O(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.L():u},
a2:function(a){var u,t=this
a.c4(t.d)
t.c.U(a)
t.b.U(a)
u=t.d
if(u!=null)u.ae(0,a)
for(u=t.e.a,u=new J.af(u,u.length,[H.w(u,0)]);u.A();)u.d.ae(0,a)
for(u=t.e.a,u=new J.af(u,u.length,[H.w(u,0)]);u.A();)u.d.a2(a)
t.b.toString
a.cy.au()
a.db.au()
t.c.toString
a.c3()},
sec:function(a,b){this.e=H.m(b,"$iS",[E.ah],"$aS")},
$iaA:1,
$ibO:1}
M.aA.prototype={}
M.bO.prototype={}
M.dB.prototype={
gm:function(){var u=this.db
return u==null?this.db=D.L():u},
O:function(a){var u
H.j(a,"$iv")
u=this.db
if(u!=null)u.u(a)},
aL:function(){return this.O(null)},
eG:function(a,b){var u,t,s,r,q,p,o,n=M.aA
H.m(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gN(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.n(t,s)
if(o.a==null)o.sY(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bp([n])
n.b=!0
this.O(n)},
fl:function(a,b){var u,t,s,r,q=M.aA
H.m(b,"$ie",[q],"$ae")
for(u=b.length,t=this.gN(),s=0;s<b.length;b.length===u||(0,H.t)(b),++s){r=b[s]
if(r!=null)r.gm().L(0,t)}q=new D.bq([q])
q.b=!0
this.O(q)},
a2:function(a){var u,t,s=this
s.z.sdw(0,s.x)
for(u=s.Q.a,u=new J.af(u,u.length,[H.w(u,0)]);u.A();){t=u.d
t.sb0(0,s.z)
t.saT(s.f)
t.a2(a)}s.z.sdw(0,s.y)
for(u=s.Q.a,u=new J.af(u,u.length,[H.w(u,0)]);u.A();){t=u.d
t.sb0(0,s.z)
t.saT(s.r)
t.a2(a)}},
sft:function(a){this.Q=H.m(a,"$iS",[M.aA],"$aS")},
$ibO:1}
A.cV.prototype={}
A.eQ.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hl:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
d1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ac.prototype={
gaf:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ac))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.dk.prototype={
dQ:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bu("")
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
A.mc(c0,u)
A.me(c0,u)
A.md(c0,u)
A.mg(c0,u)
A.mh(c0,u)
A.mf(c0,u)
A.mi(c0,u)
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
b5.di(0,s.charCodeAt(0)==0?s:s,A.mb(b5.z))
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
if(c0.ry)b5.k1=H.p(b5.y.D(0,"txt2DMat"),"$icB")
if(c0.x1)b5.k2=H.p(b5.y.D(0,"txtCubeMat"),"$ial")
if(c0.x2)b5.k3=H.p(b5.y.D(0,"colorMat"),"$ial")
b5.se8(H.c([],[A.al]))
t=c0.y2
if(t>0){b5.k4=H.j(b5.y.D(0,"bendMatCount"),"$iat")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.y(P.x(b7+q+b8));(s&&C.a).h(s,H.p(m,"$ial"))}}t=c0.a
if(t.a)b5.r2=H.p(b5.y.D(0,"emissionClr"),"$iR")
if(t.c)b5.ry=H.p(b5.y.D(0,"emissionTxt"),"$iaa")
t=c0.b
if(t.a)b5.x1=H.p(b5.y.D(0,"ambientClr"),"$iR")
if(t.c)b5.y1=H.p(b5.y.D(0,"ambientTxt"),"$iaa")
t=c0.c
if(t.a)b5.y2=H.p(b5.y.D(0,"diffuseClr"),"$iR")
if(t.c)b5.ba=H.p(b5.y.D(0,"diffuseTxt"),"$iaa")
t=c0.d
if(t.a)b5.d3=H.p(b5.y.D(0,"invDiffuseClr"),"$iR")
if(t.c)b5.d4=H.p(b5.y.D(0,"invDiffuseTxt"),"$iaa")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.d7=H.p(b5.y.D(0,"shininess"),"$ia2")
if(s)b5.d5=H.p(b5.y.D(0,"specularClr"),"$iR")
if(t.c)b5.d6=H.p(b5.y.D(0,"specularTxt"),"$iaa")}if(c0.f.c)b5.d8=H.p(b5.y.D(0,"bumpTxt"),"$iaa")
if(c0.cy){b5.d9=H.p(b5.y.D(0,"envSampler"),"$iaa")
t=c0.r
if(t.a)b5.da=H.p(b5.y.D(0,"reflectClr"),"$iR")
if(t.c)b5.dc=H.p(b5.y.D(0,"reflectTxt"),"$iaa")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dd=H.p(b5.y.D(0,"refraction"),"$ia2")
if(s)b5.de=H.p(b5.y.D(0,"refractClr"),"$iR")
if(t.c)b5.df=H.p(b5.y.D(0,"refractTxt"),"$iaa")}}t=c0.y
if(t.a)b5.dg=H.p(b5.y.D(0,"alpha"),"$ia2")
if(t.c)b5.dh=H.p(b5.y.D(0,"alphaTxt"),"$iaa")
t=P.r
s=[t,A.at]
b5.seh(new H.W(s))
b5.sdZ(new H.W([t,[P.b,A.bQ]]))
b5.sfv(new H.W(s))
b5.sfw(new H.W([t,[P.b,A.bR]]))
b5.sfN(new H.W(s))
b5.se_(new H.W([t,[P.b,A.bT]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.bQ],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aj()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.y(P.x(b7+g+b8))
H.p(m,"$iR")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.y(P.x(b7+g+b8))
H.p(f,"$iR")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.y(P.x(b7+g+b8))
H.p(e,"$iR")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.y(P.x(b7+g+b8))
H.p(m,"$iR")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.y(P.x(b7+g+b8))
H.p(f,"$iR")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.y(P.x(b7+o+b8))
H.p(e,"$ibS")
a=e}else a=b6
C.a.h(h,new A.bQ(b,c,d,m,f,a))}b5.bP.l(0,j,h)
q=b5.bO
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.x(b7+o+b8))
q.l(0,j,H.j(m,"$iat"))}for(t=c0.Q,s=t.length,r=[A.bR],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.y(P.x(b7+o+b8))
H.p(m,"$iR")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.y(P.x(b7+o+b8))
H.p(f,"$iR")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.y(P.x(b7+o+b8))
H.p(e,"$iR")
if(typeof j!=="number")return j.aj()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.y(P.x(b7+o+b8))
H.p(a0,"$icB")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.x(b7+o+b8))
H.p(a0,"$iaa")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.x(b7+o+b8))
H.p(a0,"$iaa")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.y(P.x(b7+o+b8))
H.p(a2,"$icA")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.y(P.x(b7+o+b8))
H.p(a0,"$ia2")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.y(P.x(b7+o+b8))
H.p(a2,"$ia2")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.y(P.x(b7+o+b8))
H.p(a5,"$ia2")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.bR(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bR.l(0,j,h)
q=b5.bQ
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.x(b7+o+b8))
q.l(0,j,H.j(m,"$iat"))}for(t=c0.ch,s=t.length,r=[A.bT],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.y(P.x(b7+o+b8))
H.p(m,"$iR")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.y(P.x(b7+o+b8))
H.p(f,"$iR")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.y(P.x(b7+o+b8))
H.p(e,"$iR")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.y(P.x(b7+o+b8))
H.p(a0,"$iR")
if(typeof j!=="number")return j.aj()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.y(P.x(b7+o+b8))
H.p(a2,"$iR")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.y(P.x(b7+o+b8))
H.p(a5,"$iR")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.y(P.x(b7+o+b8))
H.p(a9,"$ia2")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.y(P.x(b7+o+b8))
H.p(b0,"$ia2")
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
if(a2==null)H.y(P.x(b7+g+b8))
H.p(a2,"$icA")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.y(P.x(b7+g+b8))
H.p(a2,"$ia2")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.y(P.x(b7+g+b8))
H.p(a5,"$ia2")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.y(P.x(b7+g+b8))
H.p(a2,"$ia2")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.y(P.x(b7+g+b8))
H.p(a5,"$ia2")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.y(P.x(b7+g+b8))
H.p(a9,"$ia2")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.y(P.x(b7+g+b8))
H.p(a2,"$ibS")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.y(P.x(b7+o+b8))
H.p(a2,"$ibS")
a3=a2}else a3=b6
C.a.h(h,new A.bT(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bT.l(0,j,h)
q=b5.bS
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.x(b7+o+b8))
q.l(0,j,H.j(m,"$iat"))}}},
a8:function(a,b){if(b!=null&&b.d>=6)a.cc(b)},
se8:function(a){this.r1=H.m(a,"$ib",[A.al],"$ab")},
seh:function(a){this.bO=H.m(a,"$iE",[P.r,A.at],"$aE")},
sdZ:function(a){this.bP=H.m(a,"$iE",[P.r,[P.b,A.bQ]],"$aE")},
sfv:function(a){this.bQ=H.m(a,"$iE",[P.r,A.at],"$aE")},
sfw:function(a){this.bR=H.m(a,"$iE",[P.r,[P.b,A.bR]],"$aE")},
sfN:function(a){this.bS=H.m(a,"$iE",[P.r,A.at],"$aE")},
se_:function(a){this.bT=H.m(a,"$iE",[P.r,[P.b,A.bT]],"$aE")}}
A.ay.prototype={
i:function(a){return"dirLight"+H.h(this.a)}}
A.az.prototype={
i:function(a){return"pointLight"+H.h(this.a)}}
A.aB.prototype={
i:function(a){return"spotLight"+H.h(this.a)}}
A.fK.prototype={
i:function(a){return this.aX}}
A.bQ.prototype={}
A.bR.prototype={}
A.bT.prototype={}
A.ct.prototype={
ck:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
di:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cB(b,35633)
r.f=r.cB(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.z(H.kB(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.y(P.x("Failed to link shader: "+H.h(s)))}r.fI()
r.fK()},
U:function(a){a.a.useProgram(this.r)
this.x.hl()},
cB:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.z(H.kB(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.x("Error compiling shader '"+H.h(s)+"': "+H.h(u)))}return s},
fI:function(){var u,t,s,r=this,q=H.c([],[A.cV]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cV(p,t.name,s))}r.x=new A.eQ(q)},
fK:function(){var u,t,s,r=this,q=H.c([],[A.dG]),p=r.a,o=H.ab(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hd(t.type,t.size,t.name,s))}r.y=new A.i0(q)},
aB:function(a,b,c){var u=this.a
if(a===1)return new A.at(u,b,c)
else return A.jz(u,this.r,b,a,c)},
ee:function(a,b,c){var u=this.a
if(a===1)return new A.bS(u,b,c)
else return A.jz(u,this.r,b,a,c)},
ef:function(a,b,c){var u=this.a
if(a===1)return new A.aa(u,b,c)
else return A.jz(u,this.r,b,a,c)},
b8:function(a,b){return new P.dZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
hd:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aB(b,c,d)
case 5121:return u.aB(b,c,d)
case 5122:return u.aB(b,c,d)
case 5123:return u.aB(b,c,d)
case 5124:return u.aB(b,c,d)
case 5125:return u.aB(b,c,d)
case 5126:return new A.a2(u.a,c,d)
case 35664:return new A.hX(u.a,c,d)
case 35665:return new A.R(u.a,c,d)
case 35666:return new A.cA(u.a,c,d)
case 35667:return new A.hY(u.a,c,d)
case 35668:return new A.hZ(u.a,c,d)
case 35669:return new A.i_(u.a,c,d)
case 35674:return new A.i1(u.a,c,d)
case 35675:return new A.cB(u.a,c,d)
case 35676:return new A.al(u.a,c,d)
case 35678:return u.ee(b,c,d)
case 35680:return u.ef(b,c,d)
case 35670:throw H.i(u.b8("BOOL",c))
case 35671:throw H.i(u.b8("BOOL_VEC2",c))
case 35672:throw H.i(u.b8("BOOL_VEC3",c))
case 35673:throw H.i(u.b8("BOOL_VEC4",c))
default:throw H.i(P.x("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.dx.prototype={}
A.dG.prototype={}
A.i0.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.H()},
H:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.at.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.hY.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
sh_:function(a){H.m(a,"$ib",[P.r],"$ab")}}
A.a2.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.R.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.cA.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.cB.prototype={
ab:function(a){var u=new Float32Array(H.cP(H.m(a,"$ib",[P.B],"$ab")))
C.b.dF(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.al.prototype={
ab:function(a){var u=new Float32Array(H.cP(H.m(a,"$ib",[P.B],"$ab")))
C.b.dG(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.bS.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.aa.prototype={
cc:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.iZ.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bZ(s.b,b).bZ(s.d.bZ(s.c,b),c)
s=new V.ai(r.a,r.b,r.c)
if(!J.Q(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Z()}a.sb2(r.t(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
u=new V.bc(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.Q(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Z()}},
$S:34}
F.a_.prototype={
e7:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dO()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dj())return
return s.t(0,Math.sqrt(s.w(s)))},
eb:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.E(0,q)
r=new V.I(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.w(r)))
r=t.E(0,q)
r=new V.I(r.a,r.b,r.c)
r=s.aW(r.t(0,Math.sqrt(r.w(r))))
return r.t(0,Math.sqrt(r.w(r)))},
bK:function(){var u,t=this
if(t.d!=null)return!0
u=t.e7()
if(u==null){u=t.eb()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
e6:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dO()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dj())return
return s.t(0,Math.sqrt(s.w(s)))},
ea:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.E(0,g)
l=new V.I(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.K(0)}else{p=(l-u.b)/r
l=d.E(0,g)
l=new V.ai(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).E(0,j)
l=new V.I(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.K(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.w(l)))
l=o.aW(q)
l=l.t(0,Math.sqrt(l.w(l))).aW(o)
q=l.t(0,Math.sqrt(l.w(l)))}return q},
bI:function(){var u,t=this
if(t.e!=null)return!0
u=t.e6()
if(u==null){u=t.ea()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.aa(J.aq(s.e),0)+", "+C.c.aa(J.aq(t.b.e),0)+", "+C.c.aa(J.aq(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
H:function(){return this.v("")}}
F.b6.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.aa(J.aq(u.e),0)+", "+C.c.aa(J.aq(this.b.e),0)},
H:function(){return this.v("")}}
F.bt.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.aa(J.aq(u.e),0)},
H:function(){return this.v("")}}
F.dv.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.L():u},
hw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.V()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){r=g[s]
h.a.h(0,r.hc())}h.a.V()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bt()
if(n.a==null)H.y(P.x("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.u(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.V()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.lj(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.V()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.ce(l,k,i)}g=h.e
if(g!=null)g.av(0)},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.av(0)
return u},
cX:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aF()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bi().a)!==0)++s
if((t&$.bh().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.cT().a)!==0)++s
if((t&$.cU().a)!==0)++s
if((t&$.c1().a)!==0)++s
if((t&$.bg().a)!==0)++s
r=a3.gce(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.B
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cY])
for(n=0,m=0;m<s;++m){l=a3.h4(m)
k=l.gce(l)
C.a.l(o,m,new Z.cY(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].hu(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cP(p)),35044)
u.bindBuffer(a0,null)
e=new Z.c6(new Z.dP(a0,f),o,a3)
e.ser(H.c([],[Z.bo]))
if(a.b.b.length!==0){t=P.r
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.V()
C.a.h(d,c.e)}b=Z.jB(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bo(0,d.length,b))}if(a.c.b.length!==0){t=P.r
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.V()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.V()
C.a.h(d,c.e)}b=Z.jB(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bo(1,d.length,b))}if(a.d.b.length!==0){t=P.r
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
C.a.h(d,c.e)}b=Z.jB(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bo(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.l])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.v(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.v(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.v(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.v(t))}return C.a.q(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.u(null)},
$in1:1}
F.hp.prototype={
h2:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.au],"$ab")
u=H.c([],[F.a_])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.ce(t,q,p))}return u},
h3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.au],"$ab")
u=H.c([],[F.a_])
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
C.a.h(u,F.ce(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ce(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ce(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ce(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].bK())s=!1
return s},
bJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].bI())s=!1
return s},
i:function(a){return this.H()},
v:function(a){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(a))
return C.a.q(r,"\n")},
H:function(){return this.v("")},
sel:function(a){this.b=H.m(a,"$ib",[F.a_],"$ab")}}
F.hq.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
v:function(a){var u,t,s=H.c([],[P.l]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].v(a+(""+u+". ")))}return C.a.q(s,"\n")},
H:function(){return this.v("")},
ses:function(a){this.b=H.m(a,"$ib",[F.b6],"$ab")}}
F.hr.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
v:function(a){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(a))
return C.a.q(r,"\n")},
H:function(){return this.v("")},
sbB:function(a){this.b=H.m(a,"$ib",[F.bt],"$ab")}}
F.au.prototype={
bM:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ib(u.cx,r,o,t,s,q,p,a,n)},
hc:function(){return this.bM(null)},
sb2:function(a){var u
if(!J.Q(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
hu:function(a){var u,t,s=this
if(a.n(0,$.aF())){u=s.f
t=[P.B]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bi())){u=s.r
t=[P.B]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bh())){u=s.x
t=[P.B]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bC())){u=s.y
t=[P.B]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bj())){u=s.z
t=[P.B]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cT())){u=s.Q
t=[P.B]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cU())){u=s.Q
t=[P.B]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.c1()))return H.c([s.ch],[P.B])
else if(a.n(0,$.bg())){u=s.cx
t=[P.B]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.B])},
bK:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dO()
t.d.G(0,new F.ik(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.av(0)}return!0},
bI:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dO()
t.d.G(0,new F.ij(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.av(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var u,t,s=this,r="-",q=H.c([],[P.l])
C.a.h(q,C.c.aa(J.aq(s.e),0))
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
H:function(){return this.v("")}}
F.ik.prototype={
$1:function(a){var u,t
H.j(a,"$ia_")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:7}
F.ij.prototype={
$1:function(a){var u,t
H.j(a,"$ia_")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:7}
F.ic.prototype={
V:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
b9:function(a,b,c,d,e,f){var u=F.ib(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].bK()
return!0},
bJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].bI()
return!0},
h9:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.u(null)}}}}return!0},
i:function(a){return this.H()},
v:function(a){var u,t,s,r
this.V()
u=H.c([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r)C.a.h(u,t[r].v(a))
return C.a.q(u,"\n")},
H:function(){return this.v("")},
sh0:function(a){this.c=H.m(a,"$ib",[F.au],"$ab")}}
F.id.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
G:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a_]})
C.a.G(u.b,b)
C.a.G(u.c,new F.ie(u,b))
C.a.G(u.d,new F.ig(u,b))},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
sem:function(a){this.b=H.m(a,"$ib",[F.a_],"$ab")},
sen:function(a){this.c=H.m(a,"$ib",[F.a_],"$ab")},
seo:function(a){this.d=H.m(a,"$ib",[F.a_],"$ab")}}
F.ie.prototype={
$1:function(a){H.j(a,"$ia_")
if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:7}
F.ig.prototype={
$1:function(a){var u
H.j(a,"$ia_")
u=this.a
if(!J.Q(a.a,u)&&!J.Q(a.b,u))this.b.$1(a)},
$S:7}
F.ih.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
seu:function(a){this.b=H.m(a,"$ib",[F.b6],"$ab")},
sev:function(a){this.c=H.m(a,"$ib",[F.b6],"$ab")}}
F.ii.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
sbB:function(a){this.b=H.m(a,"$ib",[F.bt],"$ab")}}
O.dj.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.L():u},
S:function(a){var u
H.j(a,"$iv")
u=this.fr
if(u!=null)u.u(a)},
aO:function(){return this.S(null)},
cM:function(a){H.j(a,"$iv")
this.a=null
this.S(a)},
fF:function(){return this.cM(null)},
eI:function(a,b){var u=V.a5
H.m(b,"$ie",[u],"$ae")
u=new D.bp([u])
u.b=!0
this.S(u)},
eK:function(a,b){var u=V.a5
H.m(b,"$ie",[u],"$ae")
u=new D.bq([u])
u.b=!0
this.S(u)},
cw:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.r,h=new H.W([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=h.j(0,0)
h.l(0,0,r==null?1:r)}q=H.c([],[A.ay])
h.G(0,new O.fO(j,q))
C.a.bh(q,new O.fP())
p=new H.W([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){o=u[s]
r=o.gaV()
n=p.j(0,o.gaV())
p.l(0,r,n==null?1:n)}m=H.c([],[A.az])
p.G(0,new O.fQ(j,m))
C.a.bh(m,new O.fR())
l=new H.W([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.t)(i),++s){o=i[s]
t=o.gaV()
r=l.j(0,o.gaV())
l.l(0,t,r==null?1:r)}k=H.c([],[A.aB])
l.G(0,new O.fS(j,k))
C.a.bh(k,new O.fT())
i=C.e.a1(j.e.a.length+3,4)
j.dy.e
return A.lp(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a7:function(a,b){H.m(a,"$ib",[T.cw],"$ab")
if(b!=null)if(!C.a.ai(a,b)){b.a=a.length
C.a.h(a,b)}},
ae:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.af(u,u.length,[H.w(u,0)]);u.A();){t=u.d
t.toString
s=$.ia
if(s==null)s=$.ia=new V.I(0,0,1)
t.a=s
r=$.i9
t.d=r==null?$.i9=new V.I(0,1,0):r
r=$.i8
t.e=r==null?$.i8=new V.I(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bf(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bf(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bf(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
dz:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cw()
u=H.j(b4.fr.j(0,b3.aX),"$idk")
if(u==null){u=A.lo(b3,b4.a)
b4.cU(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.ba
b3=b5.e
if(!(b3 instanceof Z.c6))b3=b5.e=null
if(b3==null||!b3.d.n(0,s)){b3=t.k3
if(b3)b5.d.ap()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.bJ()
q.a.bJ()
q=q.e
if(q!=null)q.av(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.h9()
p=p.e
if(p!=null)p.av(0)}n=b5.d.cX(new Z.dQ(b4.a),s)
n.aq($.aF()).e=b2.a.Q.c
if(b3)n.aq($.bi()).e=b2.a.cx.c
if(r)n.aq($.bh()).e=b2.a.ch.c
if(t.r1)n.aq($.bC()).e=b2.a.cy.c
if(q)n.aq($.bj()).e=b2.a.db.c
if(t.rx)n.aq($.bg()).e=b2.a.dx.c
b5.e=n}b3=T.cw
m=H.c([],[b3])
b2.a.U(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.gR(q)
r=r.dy
r.toString
r.ab(q.a5(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.gR(q)
p=b4.dx
p=b4.cx=q.p(0,p.gR(p))
q=p}r=r.fr
r.toString
r.ab(q.a5(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.ghM()
p=b4.dx
p=b4.ch=q.p(0,p.gR(p))
q=p}r=r.fy
r.toString
r.ab(q.a5(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ab(C.j.a5(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ab(C.j.a5(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ab(C.j.a5(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.bg(r.a,r.d,l)
for(r=[P.B],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.j(p,"$ia5")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.cP(H.m(p.a5(0,!0),"$ib",r,"$ab")))
C.b.dG(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a7(m,b2.f.e)
r=b2.a
q=b2.f.e
r.a8(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a7(m,b2.r.e)
r=b2.a
q=b2.r.e
r.a8(r.y1,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a7(m,b2.x.e)
r=b2.a
q=b2.x.e
r.a8(r.ba,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.d3
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a7(m,b2.y.e)
r=b2.a
q=b2.y.e
r.a8(r.d4,q)}r=t.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.d7
C.b.W(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.d5
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a7(m,b2.z.e)
r=b2.a
q=b2.z.e
r.a8(r.d6,q)}r=t.z
if(r.length>0){q=b4.db
i=q.gR(q)
q=P.r
h=new H.W([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.l(0,0,e+1)
d=J.eK(b2.a.bP.j(0,0),e)
o=i.bf(f.a)
c=o.a
b=o.b
a=o.c
a=o.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.b.T(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.b.T(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.t)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.bO.j(0,p)
C.b.bg(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.gR(q)
q=P.r
a0=new H.W([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.B],g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
a1=f.gaV()
e=a0.j(0,a1)
if(e==null)e=0
a0.l(0,a1,e+1)
d=J.eK(b2.a.bR.j(0,a1),e)
a2=i.p(0,f.gR(f))
b=f.gR(f)
a=$.cp
b=b.c7(a==null?$.cp=new V.ai(0,0,0):a)
a=d.b
C.b.T(a.a,a.d,b.a,b.b,b.c)
b=$.cp
b=a2.c7(b==null?$.cp=new V.ai(0,0,0):b)
a=d.c
C.b.T(a.a,a.d,b.a,b.b,b.c)
b=f.gaU(f)
a=d.e
C.b.T(a.a,a.d,b.a,b.b,b.c)
f.gaw()
b=a2.bW(0)
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
j=new Float32Array(H.cP(H.m(new V.dl(a,a3,a4,a5,a6,a7,a8,a9,b).a5(0,!0),"$ib",c,"$ab")))
C.b.dF(b0.a,b0.d,!1,j)
f.gaw()
b=f.gaw()
H.m(m,"$ib",o,"$ab")
if(!C.a.ai(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaw()
a=b.gaY(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaJ()
b=f.gdK()
a=d.x
a.toString
a3=b.ghh(b)
a4=b.ghi(b)
a5=b.ghj()
b=b.ghg()
C.b.dE(a.a,a.d,a3,a4,a5,b)
b=f.gaJ()
if(!C.a.ai(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaJ()
a=b.gaY(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.ghm()){b=f.gh5()
a=d.y
C.b.W(a.a,a.d,b)
b=f.gh6()
a=d.z
C.b.W(a.a,a.d,b)
b=f.gh7()
a=d.Q
C.b.W(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.t)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.bQ.j(0,p)
C.b.bg(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.gR(q)
q=P.r
b1=new H.W([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
a1=f.gaV()
e=b1.j(0,a1)
if(e==null)e=0
b1.l(0,a1,e+1)
d=J.eK(b2.a.bT.j(0,a1),e)
o=f.ghL(f)
c=d.b
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gi0(f).ib()
c=d.c
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=i.c7(f.ghL(f))
c=d.d
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gaU(f)
c=d.e
C.b.T(c.a,c.d,o.a,o.b,o.c)
f.gaw()
o=f.gc8()
c=d.f
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gc5(f)
c=d.r
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gic()
c=d.x
C.b.W(c.a,c.d,o)
o=f.gie()
c=d.y
C.b.W(c.a,c.d,o)
f.gaw()
o=f.gaw()
H.m(m,"$ib",b3,"$ab")
if(!C.a.ai(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaw()
c=o.gaY(o)
if(c){c=d.dx
c.toString
b=o.gaY(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.ghq(o)
c.a.uniform1i(c.d,o)}}f.gaJ()
o=f.gdK()
c=d.z
c.toString
b=o.ghh(o)
a=o.ghi(o)
a3=o.ghj()
o=o.ghg()
C.b.dE(c.a,c.d,b,a,a3,o)
o=f.gaJ()
if(!C.a.ai(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaJ()
c=o.gaY(o)
if(c){c=d.dy
c.toString
b=o.gaY(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.ghq(o)
c.a.uniform1i(c.d,o)}}if(f.gi1()){o=f.gi_()
c=d.Q
C.b.W(c.a,c.d,o)
o=f.ghZ()
c=d.ch
C.b.W(c.a,c.d,o)}if(f.ghm()){o=f.gh5()
c=d.cx
C.b.W(c.a,c.d,o)
o=f.gh6()
c=d.cy
C.b.W(c.a,c.d,o)
o=f.gh7()
c=d.db
C.b.W(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.t)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.bS.j(0,q)
C.b.bg(q.a,q.d,l)}}}if(t.f.c){b2.a7(m,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.a8(b3.d8,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.gR(r).bW(0)}b3=b3.id
b3.toString
b3.ab(r.a5(0,!0))}if(t.cy){b2.a7(m,b2.ch)
b3=b2.a
r=b2.ch
b3.a8(b3.d9,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.da
C.b.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a7(m,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.a8(b3.dc,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
p=b2.cy.ch
q=q.dd
C.b.W(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.de
C.b.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a7(m,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.a8(b3.df,r)}}b3=t.y
r=b3.a
q=!r
if(q)p=b3.c
else p=!0
if(p){if(r){r=b2.a
p=b2.db.f
r=r.dg
C.b.W(r.a,r.d,p)}if(b3.c){b2.a7(m,b2.db.e)
r=b2.a
p=b2.db.e
r.a8(r.dh,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].U(b4)
r=b5.e
r.U(b4)
r.a2(b4)
r.ax(b4)
if(q)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(34067,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.d1()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cw().aX},
se9:function(a){this.e=H.m(a,"$iS",[V.a5],"$aS")}}
O.fO.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.ay(a,C.e.a1(b+3,4)*4))},
$S:8}
O.fP.prototype={
$2:function(a,b){H.j(a,"$iay")
H.j(b,"$iay")
return J.jh(a.a,b.a)},
$S:37}
O.fQ.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.az(a,C.e.a1(b+3,4)*4))},
$S:8}
O.fR.prototype={
$2:function(a,b){H.j(a,"$iaz")
H.j(b,"$iaz")
return J.jh(a.a,b.a)},
$S:38}
O.fS.prototype={
$2:function(a,b){H.ab(a)
H.ab(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aB(a,C.e.a1(b+3,4)*4))},
$S:8}
O.fT.prototype={
$2:function(a,b){H.j(a,"$iaB")
H.j(b,"$iaB")
return J.jh(a.a,b.a)},
$S:39}
O.fI.prototype={
an:function(){var u,t=this
t.ci()
u=t.f
if(!(Math.abs(u-1)<$.K().a)){t.f=1
u=new D.D(t.b,u,1,[P.B])
u.b=!0
t.a.S(u)}}}
O.cj.prototype={
S:function(a){return this.a.S(H.j(a,"$iv"))},
aO:function(){return this.S(null)},
an:function(){},
bE:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.an()
u=s.a
u.a=null
u.S(null)}},
sb2:function(a){var u,t=this,s=t.c
if(!s.c)t.bE(new A.ac(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gm().L(0,t.gaD())
u=t.e
t.e=a
a.gm().h(0,t.gaD())
s=new D.D(t.b+".textureCube",u,t.e,[T.cx])
s.b=!0
t.a.S(s)}}}
O.fJ.prototype={}
O.aQ.prototype={
cO:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.D(s.b+".color",u,a,[V.X])
t.b=!0
s.a.S(t)}},
an:function(){this.ci()
this.cO(new V.X(1,1,1))},
saU:function(a,b){this.bE(new A.ac(!0,!1,this.c.c))
this.cO(b)}}
O.fL.prototype={}
O.fM.prototype={
an:function(){var u,t=this
t.cj()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.D(t.b+".refraction",u,1,[P.B])
u.b=!0
t.a.S(u)}}}
O.fN.prototype={
cP:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.D(u.b+".shininess",t,a,[P.B])
t.b=!0
u.a.S(t)}},
an:function(){this.cj()
this.cP(100)}}
O.dw.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.L():u},
S:function(a){var u
H.j(a,"$iv")
u=this.e
if(u!=null)u.u(a)},
aO:function(){return this.S(null)},
dz:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.j(a.fr.j(0,n),"$idx")
if(u==null){t=a.a
u=new A.dx(t,n)
u.ck(t,n)
u.di(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.p(u.y.j(0,"fov"),"$ia2")
u.ch=H.p(u.y.j(0,"ratio"),"$ia2")
u.cx=H.p(u.y.j(0,"boxClr"),"$iR")
u.cy=H.p(u.y.j(0,"boxTxt"),"$iaa")
u.db=H.p(u.y.j(0,"viewMat"),"$ial")
a.cU(u)}o.a=u}if(b.e==null){t=b.d.cX(new Z.dQ(a.a),$.aF())
t.aq($.aF()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.U(a)}t=a.d
s=a.c
r=o.a
r.U(a)
q=o.b
p=r.Q
C.b.W(p.a,p.d,q)
q=r.ch
C.b.W(q.a,q.d,t/s)
s=o.c
r.cy.cc(s)
s=o.d
t=r.cx
C.b.T(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gR(s).bW(0)
r=r.db
r.toString
r.ab(s.a5(0,!0))
t=b.e
if(t instanceof Z.c6){t.U(a)
t.a2(a)
t.ax(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.d1()
t=o.c
if(t!=null)t.ax(a)}}
O.bv.prototype={}
T.cw.prototype={}
T.cx.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.L():u},
U:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ax:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hK.prototype={
dl:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cx()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aC(u,k,r,34069,!1,!1)
t.aC(u,k,o,34070,!1,!1)
t.aC(u,k,q,34071,!1,!1)
t.aC(u,k,n,34072,!1,!1)
t.aC(u,k,p,34073,!1,!1)
t.aC(u,k,m,34074,!1,!1)
return u},
dk:function(a){return this.dl(a,".png")},
aC:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.k
W.a6(t,"load",H.n(new T.hL(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
fG:function(a,b,c){var u,t,s,r
b=V.jQ(b)
u=V.jQ(a.width)
t=V.jQ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jk()
s.width=u
s.height=t
r=H.j(C.h.dH(s,"2d"),"$ic7")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mv(r.getImageData(0,0,s.width,s.height))}}}
T.hL.prototype={
$1:function(a){var u=this,t=u.a,s=t.fG(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.hS(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hk()}++t.e},
$S:24}
V.eM.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"},
$ib7:1}
V.b7.prototype={}
V.di.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sam:function(a){this.a=H.m(a,"$ib",[V.b7],"$ab")},
$ib7:1}
V.b9.prototype={
aG:function(a,b){return!this.dO(0,b)},
i:function(a){return"!["+this.cg(0)+"]"}}
V.ho.prototype={
dS:function(a){var u,t
if(a.a.length<=0)throw H.i(P.x("May not create a SetMatcher with zero characters."))
u=new H.W([P.r,P.a3])
for(t=new H.dg(a,a.gk(a),[H.ap(a,"u",0)]);t.A();)u.l(0,t.d,!0)
this.sfH(u)},
aG:function(a,b){return this.a.d_(0,b)},
i:function(a){var u=this.a
return P.jx(new H.df(u,[H.w(u,0)]))},
sfH:function(a){this.a=H.m(a,"$iE",[P.r,P.a3],"$aE")},
$ib7:1}
V.cu.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cz(this.a.I(0,b))
r.sam(H.c([],[V.b7]))
r.c=!1
C.a.h(this.c,r)
return r},
hn:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b},
sfZ:function(a){this.c=H.m(a,"$ib",[V.cz],"$ab")}}
V.dE.prototype={
i:function(a){var u=H.kM(this.b,"\n","\\n"),t=H.kM(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cy.prototype={
i:function(a){return this.b},
sfC:function(a){var u=P.l
this.c=H.m(a,"$iE",[u,u],"$aE")}}
V.hO.prototype={
I:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cu(this,b)
u.sfZ(H.c([],[V.cz]))
u.d=null
this.a.l(0,b,u)}return u},
b3:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cy(a)
u=P.l
t.sfC(new H.W([u,u]))
this.b.l(0,a,t)}return t},
hX:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dE]),l=this.c,k=[P.r],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.b4(a,s)
q=l.hn(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jx(j)
throw H.i(P.x("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jx(j)
o=l.d
n=o.c.j(0,p)
t=new V.dE(n==null?o.b:n,p,s)}++s}}},
sfP:function(a){this.a=H.m(a,"$iE",[P.l,V.cu],"$aE")},
sfS:function(a){this.b=H.m(a,"$iE",[P.l,V.cy],"$aE")}}
V.cz.prototype={
i:function(a){return this.b.b+": "+this.cg(0)}}
X.bF.prototype={$ibK:1}
X.fp.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.L():u},
ac:function(a){var u=this.x
if(u!=null)u.u(a)},
sdw:function(a,b){var u,t,s=this
if(!J.Q(s.r,b)){u=s.r
s.r=b
t=new D.D("region",u,b,[V.cs])
t.b=!0
s.ac(t)}},
U:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.C(u)
q=C.d.ad(r*u)
r=s.b
if(typeof t!=="number")return H.C(t)
p=C.d.ad(r*t)
r=C.d.ad(s.c*u)
a.c=r
s=C.d.ad(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fs.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.L():u},
U:function(a){var u
a.cy.bd(V.bs())
u=V.bs()
a.db.bd(u)},
ax:function(a){a.cy.au()
a.db.au()},
$ibK:1,
$ibF:1}
X.dr.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.L():u},
ac:function(a){var u
H.j(a,"$iv")
u=this.f
if(u!=null)u.u(a)},
e3:function(){return this.ac(null)},
U:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aR(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bd(k)
r=$.k8
if(r==null){r=V.ka()
q=V.jA()
p=$.ko
r=V.k3(r,q,p==null?$.ko=new V.I(0,0,-1):p)
$.k8=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aH(0,a,s)
if(t!=null)u=t.p(0,u)}a.db.bd(u)},
ax:function(a){a.cy.au()
a.db.au()},
$ibK:1,
$ibF:1}
X.bP.prototype={}
V.je.prototype={
$1:function(a){var u
H.j(a,"$iaZ")
u=C.d.dD(this.a.gho(),2)
if(u!=="0.00")P.jR(u+" fps")},
$S:40}
V.hs.prototype={
dT:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a6(q,"scroll",H.n(new V.hu(o),{func:1,ret:-1,args:[r]}),!1,r)},
cT:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.l],"$ab")
this.fJ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hX(C.a.ht(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
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
if(H.mQ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.a8(m[1])
l.textContent=H.a8(m[0])
t.appendChild(l)}else{k=P.lW(C.E,n,C.n,!1)
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
fJ:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.hO()
t=P.l
u.sfP(new H.W([t,V.cu]))
u.sfS(new H.W([t,V.cy]))
u.c=null
u.c=u.I(0,q)
t=u.I(0,q).q(0,p)
s=V.ae(new H.Y("*"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,p).q(0,p)
s=new V.b9()
r=[V.b7]
s.sam(H.c([],r))
C.a.h(t.a,s)
t=V.ae(new H.Y("*"))
C.a.h(s.a,t)
t=u.I(0,p).q(0,"BoldEnd")
s=V.ae(new H.Y("*"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,q).q(0,o)
s=V.ae(new H.Y("_"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,o).q(0,o)
s=new V.b9()
s.sam(H.c([],r))
C.a.h(t.a,s)
t=V.ae(new H.Y("_"))
C.a.h(s.a,t)
t=u.I(0,o).q(0,n)
s=V.ae(new H.Y("_"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,q).q(0,m)
s=V.ae(new H.Y("`"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,m).q(0,m)
s=new V.b9()
s.sam(H.c([],r))
C.a.h(t.a,s)
t=V.ae(new H.Y("`"))
C.a.h(s.a,t)
t=u.I(0,m).q(0,"CodeEnd")
s=V.ae(new H.Y("`"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,q).q(0,l)
s=V.ae(new H.Y("["))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,l).q(0,k)
s=V.ae(new H.Y("|"))
C.a.h(t.a,s)
s=u.I(0,l).q(0,j)
t=V.ae(new H.Y("]"))
C.a.h(s.a,t)
s.c=!0
s=u.I(0,l).q(0,l)
t=new V.b9()
t.sam(H.c([],r))
C.a.h(s.a,t)
s=V.ae(new H.Y("|]"))
C.a.h(t.a,s)
s=u.I(0,k).q(0,j)
t=V.ae(new H.Y("]"))
C.a.h(s.a,t)
s.c=!0
s=u.I(0,k).q(0,k)
t=new V.b9()
t.sam(H.c([],r))
C.a.h(s.a,t)
s=V.ae(new H.Y("|]"))
C.a.h(t.a,s)
C.a.h(u.I(0,q).q(0,i).a,new V.eM())
s=u.I(0,i).q(0,i)
t=new V.b9()
t.sam(H.c([],r))
C.a.h(s.a,t)
s=V.ae(new H.Y("*_`["))
C.a.h(t.a,s)
s=u.I(0,"BoldEnd")
s.d=s.a.b3(p)
s=u.I(0,n)
s.d=s.a.b3(o)
s=u.I(0,"CodeEnd")
s.d=s.a.b3(m)
s=u.I(0,j)
s.d=s.a.b3("Link")
s=u.I(0,i)
s.d=s.a.b3(i)
this.b=u}}
V.hu.prototype={
$1:function(a){P.kj(C.i,new V.ht(this.a))},
$S:24}
V.ht.prototype={
$0:function(){var u=C.d.ad(document.documentElement.scrollTop),t=this.a.style,s=H.h(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.dM=u.i
u=J.dc.prototype
u.dN=u.i
u=O.cj.prototype
u.ci=u.an
u=O.aQ.prototype
u.cj=u.an
u=V.di.prototype
u.dO=u.aG
u.cg=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mp","lO",12)
u(P,"mq","lP",12)
u(P,"mr","lQ",12)
t(P,"kA","mn",3)
var n
s(n=E.ah.prototype,"gdu",0,0,null,["$1","$0"],["dv","hD"],0,0)
s(n,"gds",0,0,null,["$1","$0"],["dt","hC"],0,0)
s(n,"gdq",0,0,null,["$1","$0"],["dr","hz"],0,0)
r(n,"ghx","hy",6)
r(n,"ghA","hB",6)
s(n=E.dD.prototype,"gcl",0,0,null,["$1","$0"],["cn","cm"],0,0)
q(n,"ghO","dA",3)
p(n=X.dK.prototype,"geX","eY",10)
p(n,"geL","eM",10)
p(n,"geR","eS",4)
p(n,"gf0","f1",16)
p(n,"geZ","f_",16)
p(n,"gf4","f5",4)
p(n,"gf8","f9",4)
p(n,"geV","eW",4)
p(n,"gf6","f7",4)
p(n,"geT","eU",4)
p(n,"gfa","fb",32)
p(n,"gfc","fd",10)
p(n,"gfq","fs",11)
p(n,"gfm","fn",11)
p(n,"gfo","fp",11)
s(D.b4.prototype,"gdV",0,0,null,["$1","$0"],["ak","dW"],0,0)
s(n=D.de.prototype,"gcH",0,0,null,["$1","$0"],["cI","f2"],0,0)
p(n,"gfe","ff",33)
r(n,"geD","eE",14)
r(n,"gfi","fj",14)
o(V.O.prototype,"gk","bY",19)
o(V.I.prototype,"gk","bY",19)
s(n=U.cg.prototype,"gaA",0,0,null,["$1","$0"],["J","a0"],0,0)
r(n,"gdX","dY",20)
r(n,"gfg","fh",20)
s(n=U.dL.prototype,"gaA",0,0,null,["$1","$0"],["J","a0"],0,0)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
p(n,"gbw","bx",1)
s(n=U.dM.prototype,"gaA",0,0,null,["$1","$0"],["J","a0"],0,0)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
p(n,"gbw","bx",1)
p(n,"gex","ey",1)
p(n,"gez","eA",1)
p(n,"gfX","fY",1)
p(n,"gfV","fW",1)
p(n,"gfT","fU",1)
p(U.dN.prototype,"geB","eC",1)
s(M.d1.prototype,"gN",0,0,null,["$1","$0"],["O","aL"],0,0)
s(n=M.d6.prototype,"gN",0,0,null,["$1","$0"],["O","aL"],0,0)
r(n,"geN","eO",6)
r(n,"geP","eQ",6)
s(n=M.dB.prototype,"gN",0,0,null,["$1","$0"],["O","aL"],0,0)
r(n,"geF","eG",22)
r(n,"gfk","fl",22)
s(n=O.dj.prototype,"gaD",0,0,null,["$1","$0"],["S","aO"],0,0)
s(n,"gfE",0,0,null,["$1","$0"],["cM","fF"],0,0)
r(n,"geH","eI",13)
r(n,"geJ","eK",13)
s(O.cj.prototype,"gaD",0,0,null,["$1","$0"],["S","aO"],0,0)
s(O.dw.prototype,"gaD",0,0,null,["$1","$0"],["S","aO"],0,0)
s(X.dr.prototype,"ge2",0,0,null,["$1","$0"],["ac","e3"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.jr,J.a,J.af,P.e6,P.e,H.dg,P.aN,H.bH,H.dJ,H.hT,P.bm,H.c8,H.en,P.ad,H.fz,H.fA,H.fv,P.et,P.b3,P.aw,P.dR,P.hC,P.cv,P.hD,P.aZ,P.ag,P.iY,P.iS,P.cF,P.e5,P.u,P.c9,P.iX,P.a3,P.as,P.a7,P.bl,P.h9,P.dA,P.dZ,P.fo,P.b,P.E,P.J,P.ak,P.l,P.bu,W.f2,W.A,W.d8,P.ey,P.iN,O.S,O.ck,E.eV,E.ah,E.hg,E.dD,Z.dP,Z.dQ,Z.c6,Z.bo,Z.be,D.eY,D.aK,D.v,X.cZ,X.dd,X.fx,X.fD,X.ao,X.h_,X.hP,X.dK,D.b4,D.a4,D.ds,D.dz,V.X,V.ar,V.ff,V.dl,V.a5,V.a1,V.ai,V.bc,V.cs,V.O,V.I,U.dL,U.dM,U.dN,M.d1,M.d6,M.bO,M.dB,A.cV,A.eQ,A.ac,A.ay,A.az,A.aB,A.fK,A.bQ,A.bR,A.bT,A.dG,A.i0,F.a_,F.b6,F.bt,F.dv,F.hp,F.hq,F.hr,F.au,F.ic,F.id,F.ih,F.ii,O.bv,O.cj,O.fL,T.hK,V.eM,V.b7,V.di,V.ho,V.cu,V.dE,V.cy,V.hO,X.bF,X.bP,X.fs,X.dr,V.hs])
s(J.a,[J.fu,J.db,J.dc,J.aO,J.ci,J.bJ,H.cn,W.f,W.eL,W.cW,W.c7,W.aI,W.aJ,W.N,W.dT,W.f6,W.f7,W.dV,W.d5,W.dX,W.f9,W.k,W.e_,W.aM,W.fr,W.e1,W.bn,W.fC,W.fU,W.e7,W.e8,W.aS,W.e9,W.ec,W.aT,W.eg,W.ei,W.aW,W.ej,W.aX,W.eo,W.aC,W.er,W.hN,W.b_,W.eu,W.hR,W.i5,W.ez,W.eB,W.eD,W.eF,W.eH,P.b5,P.e3,P.ba,P.ee,P.hd,P.ep,P.bd,P.ew,P.eR,P.dS,P.cX,P.dt,P.bN,P.du,P.dC,P.dH,P.el])
s(J.dc,[J.ha,J.cC,J.br])
t(J.jq,J.aO)
s(J.ci,[J.da,J.d9])
t(P.fB,P.e6)
s(P.fB,[H.dI,W.iv,W.iu,P.fk])
t(H.Y,H.dI)
s(P.e,[H.fc,H.fG,H.im])
s(P.aN,[H.fH,H.io])
s(P.bm,[H.h6,H.fw,H.i3,H.hV,H.eX,H.hm,P.eP,P.dq,P.aG,P.i4,P.i2,P.hy,P.f0,P.f5])
s(H.c8,[H.jg,H.hH,H.j8,H.j9,H.ja,P.ir,P.iq,P.is,P.it,P.iW,P.iV,P.iA,P.iE,P.iB,P.iC,P.iD,P.iH,P.iI,P.iG,P.iF,P.hE,P.hF,P.j3,P.iQ,P.iP,P.iR,P.fF,P.fa,P.fb,W.fW,W.fY,W.hl,W.hB,W.iz,P.j5,P.fl,P.fm,P.eT,E.hh,E.hi,E.hj,E.hM,D.fg,D.fh,F.iZ,F.ik,F.ij,F.ie,F.ig,O.fO,O.fP,O.fQ,O.fR,O.fS,O.fT,T.hL,V.je,V.hu,V.ht])
s(H.hH,[H.hz,H.c4])
t(H.ip,P.eP)
t(P.fE,P.ad)
t(H.W,P.fE)
t(H.df,H.fc)
t(H.dm,H.cn)
s(H.dm,[H.cG,H.cI])
t(H.cH,H.cG)
t(H.cm,H.cH)
t(H.cJ,H.cI)
t(H.dn,H.cJ)
s(H.dn,[H.h0,H.h1,H.h2,H.h3,H.h4,H.dp,H.h5])
t(P.iO,P.iY)
t(P.iM,P.iS)
t(P.d0,P.hD)
t(P.fd,P.c9)
t(P.i6,P.fd)
t(P.i7,P.d0)
s(P.a7,[P.B,P.r])
s(P.aG,[P.bM,P.ft])
s(W.f,[W.H,W.fj,W.aV,W.cK,W.aY,W.aD,W.cM,W.il,W.cD,P.eU,P.bE])
s(W.H,[W.Z,W.bk])
s(W.Z,[W.q,P.o])
s(W.q,[W.eN,W.eO,W.bG,W.d3,W.fn,W.ch,W.hn])
s(W.aI,[W.cc,W.f3,W.f4])
t(W.f1,W.aJ)
t(W.cd,W.dT)
t(W.dW,W.dV)
t(W.d4,W.dW)
t(W.dY,W.dX)
t(W.f8,W.dY)
t(W.aL,W.cW)
t(W.e0,W.e_)
t(W.fi,W.e0)
t(W.e2,W.e1)
t(W.bI,W.e2)
t(W.bw,W.k)
s(W.bw,[W.aP,W.a9,W.aE])
t(W.fV,W.e7)
t(W.fX,W.e8)
t(W.ea,W.e9)
t(W.fZ,W.ea)
t(W.ed,W.ec)
t(W.co,W.ed)
t(W.eh,W.eg)
t(W.hb,W.eh)
t(W.hk,W.ei)
t(W.cL,W.cK)
t(W.hv,W.cL)
t(W.ek,W.ej)
t(W.hw,W.ek)
t(W.hA,W.eo)
t(W.es,W.er)
t(W.hI,W.es)
t(W.cN,W.cM)
t(W.hJ,W.cN)
t(W.ev,W.eu)
t(W.hQ,W.ev)
t(W.b2,W.a9)
t(W.eA,W.ez)
t(W.iw,W.eA)
t(W.dU,W.d5)
t(W.eC,W.eB)
t(W.iJ,W.eC)
t(W.eE,W.eD)
t(W.eb,W.eE)
t(W.eG,W.eF)
t(W.iT,W.eG)
t(W.eI,W.eH)
t(W.iU,W.eI)
t(W.ix,P.hC)
t(W.jC,W.ix)
t(W.iy,P.cv)
t(P.aj,P.iN)
t(P.e4,P.e3)
t(P.fy,P.e4)
t(P.ef,P.ee)
t(P.h7,P.ef)
t(P.eq,P.ep)
t(P.hG,P.eq)
t(P.ex,P.ew)
t(P.hS,P.ex)
t(P.eS,P.dS)
t(P.h8,P.bE)
t(P.em,P.el)
t(P.hx,P.em)
s(E.eV,[Z.cY,A.ct,T.cw])
s(D.v,[D.bp,D.bq,D.D,X.hc])
s(X.hc,[X.dh,X.b8,X.cl,X.dF])
s(O.S,[D.de,U.cg])
s(D.eY,[U.f_,U.a0])
t(U.cb,U.a0)
t(M.aA,M.bO)
s(A.ct,[A.dk,A.dx])
s(A.dG,[A.at,A.hY,A.hZ,A.i_,A.hW,A.a2,A.hX,A.R,A.cA,A.i1,A.cB,A.al,A.bS,A.aa])
s(O.bv,[O.dj,O.dw])
s(O.cj,[O.fI,O.fJ,O.aQ])
s(O.aQ,[O.fM,O.fN])
t(T.cx,T.cw)
s(V.di,[V.b9,V.cz])
t(X.fp,X.bP)
u(H.dI,H.dJ)
u(H.cG,P.u)
u(H.cH,H.bH)
u(H.cI,P.u)
u(H.cJ,H.bH)
u(P.e6,P.u)
u(W.dT,W.f2)
u(W.dV,P.u)
u(W.dW,W.A)
u(W.dX,P.u)
u(W.dY,W.A)
u(W.e_,P.u)
u(W.e0,W.A)
u(W.e1,P.u)
u(W.e2,W.A)
u(W.e7,P.ad)
u(W.e8,P.ad)
u(W.e9,P.u)
u(W.ea,W.A)
u(W.ec,P.u)
u(W.ed,W.A)
u(W.eg,P.u)
u(W.eh,W.A)
u(W.ei,P.ad)
u(W.cK,P.u)
u(W.cL,W.A)
u(W.ej,P.u)
u(W.ek,W.A)
u(W.eo,P.ad)
u(W.er,P.u)
u(W.es,W.A)
u(W.cM,P.u)
u(W.cN,W.A)
u(W.eu,P.u)
u(W.ev,W.A)
u(W.ez,P.u)
u(W.eA,W.A)
u(W.eB,P.u)
u(W.eC,W.A)
u(W.eD,P.u)
u(W.eE,W.A)
u(W.eF,P.u)
u(W.eG,W.A)
u(W.eH,P.u)
u(W.eI,W.A)
u(P.e3,P.u)
u(P.e4,W.A)
u(P.ee,P.u)
u(P.ef,W.A)
u(P.ep,P.u)
u(P.eq,W.A)
u(P.ew,P.u)
u(P.ex,W.A)
u(P.dS,P.ad)
u(P.el,P.u)
u(P.em,W.A)})()
var v={mangledGlobalNames:{r:"int",B:"double",a7:"num",l:"String",a3:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a9]},{func:1,ret:-1,args:[P.l,,]},{func:1,ret:-1,args:[P.r,[P.e,E.ah]]},{func:1,ret:P.J,args:[F.a_]},{func:1,ret:-1,args:[P.r,P.r]},{func:1,ret:P.J,args:[D.v]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.aE]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.r,[P.e,V.a5]]},{func:1,ret:-1,args:[P.r,[P.e,D.a4]]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aP]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.l,args:[P.r]},{func:1,ret:P.B},{func:1,ret:-1,args:[P.r,[P.e,U.a0]]},{func:1,ret:P.J,args:[,]},{func:1,ret:-1,args:[P.r,[P.e,M.aA]]},{func:1,args:[,]},{func:1,ret:P.J,args:[W.k]},{func:1,ret:P.a3,args:[W.H]},{func:1,ret:W.Z,args:[W.H]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,ret:P.J,args:[P.a7]},{func:1,ret:[P.aw,,],args:[,]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:P.a3,args:[[P.e,D.a4]]},{func:1,ret:P.J,args:[F.au,P.B,P.B]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,args:[W.k]},{func:1,ret:P.r,args:[A.ay,A.ay]},{func:1,ret:P.r,args:[A.az,A.az]},{func:1,ret:P.r,args:[A.aB,A.aB]},{func:1,ret:P.J,args:[P.aZ]},{func:1,ret:P.J,args:[,],opt:[P.ak]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.h=W.bG.prototype
C.B=J.a.prototype
C.a=J.aO.prototype
C.C=J.d9.prototype
C.e=J.da.prototype
C.j=J.db.prototype
C.d=J.ci.prototype
C.c=J.bJ.prototype
C.D=J.br.prototype
C.F=W.co.prototype
C.o=J.ha.prototype
C.b=P.bN.prototype
C.k=J.cC.prototype
C.p=W.b2.prototype
C.q=W.cD.prototype
C.l=function getTagFallback(o) {
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
C.m=function(hooks) { return hooks; }

C.y=new P.h9()
C.n=new P.i6()
C.z=new P.i7()
C.f=new P.iO()
C.i=new P.bl(0)
C.A=new P.bl(5e6)
C.E=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.r])})();(function staticFields(){$.aH=0
$.c5=null
$.jV=null
$.jE=!1
$.kE=null
$.ky=null
$.kK=null
$.j6=null
$.jb=null
$.jO=null
$.bU=null
$.cQ=null
$.cR=null
$.jF=!1
$.U=C.f
$.an=[]
$.k5=null
$.k9=null
$.cp=null
$.kf=null
$.kn=null
$.kp=null
$.i8=null
$.i9=null
$.ia=null
$.ko=null
$.k8=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n_","kP",function(){return H.kD("_$dart_dartClosure")})
u($,"n0","jS",function(){return H.kD("_$dart_js")})
u($,"n3","kQ",function(){return H.b0(H.hU({
toString:function(){return"$receiver$"}}))})
u($,"n4","kR",function(){return H.b0(H.hU({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n5","kS",function(){return H.b0(H.hU(null))})
u($,"n6","kT",function(){return H.b0(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n9","kW",function(){return H.b0(H.hU(void 0))})
u($,"na","kX",function(){return H.b0(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n8","kV",function(){return H.b0(H.kl(null))})
u($,"n7","kU",function(){return H.b0(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nc","kZ",function(){return H.b0(H.kl(void 0))})
u($,"nb","kY",function(){return H.b0(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nt","jT",function(){return P.lN()})
u($,"nu","l2",function(){return P.lB("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nm","l1",function(){return Z.av(0)})
u($,"ng","l_",function(){return Z.av(511)})
u($,"no","aF",function(){return Z.av(1)})
u($,"nn","bi",function(){return Z.av(2)})
u($,"ni","bh",function(){return Z.av(4)})
u($,"np","bC",function(){return Z.av(8)})
u($,"nq","bj",function(){return Z.av(16)})
u($,"nj","cT",function(){return Z.av(32)})
u($,"nk","cU",function(){return Z.av(64)})
u($,"nl","l0",function(){return Z.av(96)})
u($,"nr","c1",function(){return Z.av(128)})
u($,"nh","bg",function(){return Z.av(256)})
u($,"mZ","kO",function(){return new V.ff(1e-9)})
u($,"mY","K",function(){return $.kO()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cn,ArrayBufferView:H.cn,Float32Array:H.cm,Float64Array:H.cm,Int16Array:H.h0,Int32Array:H.h1,Int8Array:H.h2,Uint16Array:H.h3,Uint32Array:H.h4,Uint8ClampedArray:H.dp,CanvasPixelArray:H.dp,Uint8Array:H.h5,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eL,HTMLAnchorElement:W.eN,HTMLAreaElement:W.eO,Blob:W.cW,HTMLCanvasElement:W.bG,CanvasRenderingContext2D:W.c7,CDATASection:W.bk,CharacterData:W.bk,Comment:W.bk,ProcessingInstruction:W.bk,Text:W.bk,CSSNumericValue:W.cc,CSSUnitValue:W.cc,CSSPerspective:W.f1,CSSCharsetRule:W.N,CSSConditionRule:W.N,CSSFontFaceRule:W.N,CSSGroupingRule:W.N,CSSImportRule:W.N,CSSKeyframeRule:W.N,MozCSSKeyframeRule:W.N,WebKitCSSKeyframeRule:W.N,CSSKeyframesRule:W.N,MozCSSKeyframesRule:W.N,WebKitCSSKeyframesRule:W.N,CSSMediaRule:W.N,CSSNamespaceRule:W.N,CSSPageRule:W.N,CSSRule:W.N,CSSStyleRule:W.N,CSSSupportsRule:W.N,CSSViewportRule:W.N,CSSStyleDeclaration:W.cd,MSStyleCSSProperties:W.cd,CSS2Properties:W.cd,CSSImageValue:W.aI,CSSKeywordValue:W.aI,CSSPositionValue:W.aI,CSSResourceValue:W.aI,CSSURLImageValue:W.aI,CSSStyleValue:W.aI,CSSMatrixComponent:W.aJ,CSSRotation:W.aJ,CSSScale:W.aJ,CSSSkew:W.aJ,CSSTranslation:W.aJ,CSSTransformComponent:W.aJ,CSSTransformValue:W.f3,CSSUnparsedValue:W.f4,DataTransferItemList:W.f6,HTMLDivElement:W.d3,DOMException:W.f7,ClientRectList:W.d4,DOMRectList:W.d4,DOMRectReadOnly:W.d5,DOMStringList:W.f8,DOMTokenList:W.f9,Element:W.Z,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aL,FileList:W.fi,FileWriter:W.fj,HTMLFormElement:W.fn,Gamepad:W.aM,History:W.fr,HTMLCollection:W.bI,HTMLFormControlsCollection:W.bI,HTMLOptionsCollection:W.bI,ImageData:W.bn,HTMLImageElement:W.ch,KeyboardEvent:W.aP,Location:W.fC,MediaList:W.fU,MIDIInputMap:W.fV,MIDIOutputMap:W.fX,MimeType:W.aS,MimeTypeArray:W.fZ,PointerEvent:W.a9,MouseEvent:W.a9,DragEvent:W.a9,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.co,RadioNodeList:W.co,Plugin:W.aT,PluginArray:W.hb,RTCStatsReport:W.hk,HTMLSelectElement:W.hn,SourceBuffer:W.aV,SourceBufferList:W.hv,SpeechGrammar:W.aW,SpeechGrammarList:W.hw,SpeechRecognitionResult:W.aX,Storage:W.hA,CSSStyleSheet:W.aC,StyleSheet:W.aC,TextTrack:W.aY,TextTrackCue:W.aD,VTTCue:W.aD,TextTrackCueList:W.hI,TextTrackList:W.hJ,TimeRanges:W.hN,Touch:W.b_,TouchEvent:W.aE,TouchList:W.hQ,TrackDefaultList:W.hR,CompositionEvent:W.bw,FocusEvent:W.bw,TextEvent:W.bw,UIEvent:W.bw,URL:W.i5,VideoTrackList:W.il,WheelEvent:W.b2,Window:W.cD,DOMWindow:W.cD,CSSRuleList:W.iw,ClientRect:W.dU,DOMRect:W.dU,GamepadList:W.iJ,NamedNodeMap:W.eb,MozNamedAttrMap:W.eb,SpeechRecognitionResultList:W.iT,StyleSheetList:W.iU,SVGLength:P.b5,SVGLengthList:P.fy,SVGNumber:P.ba,SVGNumberList:P.h7,SVGPointList:P.hd,SVGStringList:P.hG,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGScriptElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGTransform:P.bd,SVGTransformList:P.hS,AudioBuffer:P.eR,AudioParamMap:P.eS,AudioTrackList:P.eU,AudioContext:P.bE,webkitAudioContext:P.bE,BaseAudioContext:P.bE,OfflineAudioContext:P.h8,WebGLBuffer:P.cX,WebGLProgram:P.dt,WebGL2RenderingContext:P.bN,WebGLShader:P.du,WebGLTexture:P.dC,WebGLUniformLocation:P.dH,SQLResultSetRowList:P.hx})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.dn.$nativeSuperclassTag="ArrayBufferView"
W.cK.$nativeSuperclassTag="EventTarget"
W.cL.$nativeSuperclassTag="EventTarget"
W.cM.$nativeSuperclassTag="EventTarget"
W.cN.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.kG,[])
else K.kG([])})})()
//# sourceMappingURL=test.dart.js.map
