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
a[c]=function(){a[c]=function(){H.nP(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ks"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ks"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ks(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ka:function ka(){},
k7:function(){return new P.cK("No element")},
mf:function(){return new P.cK("Too many elements")},
dS:function(a,b,c,d,e){if(c-b<=32)H.mB(a,b,c,d,e)
else H.mA(a,b,c,d,e)},
mB:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a1()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
mA:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.a4(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.a4(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a1()
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
if(J.a1(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ab()
if(k<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a1()
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
if(typeof g!=="number")return g.ab()
if(g<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a1()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a1()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ab()
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
H.dS(a2,a3,o-2,a5,a6)
H.dS(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.d(a2,o)
if(!J.a1(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.d(a2,n)
if(!J.a1(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ab()
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
break}}}H.dS(a2,o,n,a5,a6)}else H.dS(a2,o,n,a5,a6)},
r:function r(a){this.a=a},
fz:function fz(){},
bX:function bX(){},
cx:function cx(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h4:function h4(a,b,c){this.a=a
this.b=b
this.$ti=c},
h5:function h5(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h6:function h6(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.$ti=c},
iV:function iV(a,b,c){this.a=a
this.b=b
this.$ti=c},
bV:function bV(){},
e4:function e4(){},
e3:function e3(){},
cf:function(a){var u,t=H.nQ(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
nw:function(a){return v.types[H.ac(a)]},
nD:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iI},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.j(H.bL(a))
return u},
cF:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cG:function(a){return H.mn(a)+H.ko(H.bM(a),0,null)},
mn:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ic6){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cf(t.length>1&&C.c.aJ(t,0)===36?C.c.aq(t,1):t)},
l2:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mv:function(a){var u,t,s,r=H.c([],[P.q])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.j(H.bL(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.bc(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.j(H.bL(s))}return H.l2(r)},
l3:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.j(H.bL(s))
if(s<0)throw H.j(H.bL(s))
if(s>65535)return H.mv(a)}return H.l2(a)},
kc:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.bc(u,10))>>>0,56320|u&1023)}throw H.j(P.b_(a,0,1114111,null,null))},
c_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mu:function(a){var u=H.c_(a).getFullYear()+0
return u},
ms:function(a){var u=H.c_(a).getMonth()+1
return u},
mo:function(a){var u=H.c_(a).getDate()+0
return u},
mp:function(a){var u=H.c_(a).getHours()+0
return u},
mr:function(a){var u=H.c_(a).getMinutes()+0
return u},
mt:function(a){var u=H.c_(a).getSeconds()+0
return u},
mq:function(a){var u=H.c_(a).getMilliseconds()+0
return u},
F:function(a){throw H.j(H.bL(a))},
d:function(a,b){if(a==null)J.bQ(a)
throw H.j(H.cb(a,b))},
cb:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,s,null)
u=H.ac(J.bQ(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,s,null,u)
return P.hH(b,s)},
nr:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c0(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c0(a,c,!0,b,"end",u)
return new P.aG(!0,b,"end",null)},
bL:function(a){return new P.aG(!0,a,null,null)},
nn:function(a){if(typeof a!=="number")throw H.j(H.bL(a))
return a},
j:function(a){var u
if(a==null)a=new P.dJ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lH})
u.name=""}else u.toString=H.lH
return u},
lH:function(){return J.as(this.dartException)},
A:function(a){throw H.j(a)},
t:function(a){throw H.j(P.bt(a))},
b6:function(a){var u,t,s,r,q,p
a=H.lG(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.is(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
it:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
le:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kX:function(a,b){return new H.hy(a,b==null?null:b.method)},
kb:function(a,b){var u=b==null,t=u?null:b.method
return new H.fW(a,t,u?null:b.receiver)},
ax:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jX(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.bc(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kb(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kX(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lK()
q=$.lL()
p=$.lM()
o=$.lN()
n=$.lQ()
m=$.lR()
l=$.lP()
$.lO()
k=$.lT()
j=$.lS()
i=r.af(u)
if(i!=null)return f.$1(H.kb(H.Q(u),i))
else{i=q.af(u)
if(i!=null){i.method="call"
return f.$1(H.kb(H.Q(u),i))}else{i=p.af(u)
if(i==null){i=o.af(u)
if(i==null){i=n.af(u)
if(i==null){i=m.af(u)
if(i==null){i=l.af(u)
if(i==null){i=o.af(u)
if(i==null){i=k.af(u)
if(i==null){i=j.af(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kX(H.Q(u),i))}}return f.$1(new H.iD(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dU()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aG(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dU()
return a},
cd:function(a){var u
if(a==null)return new H.eL(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eL(a)},
nu:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
nC:function(a,b,c,d,e,f){H.k(a,"$ibx")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.z("Unsupported number of arguments for wrapped closure"))},
ca:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nC)
a.$identity=u
return u},
m9:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i1().constructor.prototype):Object.create(new H.ci(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aO
if(typeof t!=="number")return t.C()
$.aO=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kI(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.m5(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kI(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
m5:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nw,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kH:H.k0
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.j("Error in functionType of tearoff")},
m6:function(a,b,c,d){var u=H.k0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kI:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.m8(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.m6(t,!r,u,b)
if(t===0){r=$.aO
if(typeof r!=="number")return r.C()
$.aO=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cj
return new Function(r+H.h(q==null?$.cj=H.fi("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aO
if(typeof r!=="number")return r.C()
$.aO=r+1
o+=r
r="return function("+o+"){return this."
q=$.cj
return new Function(r+H.h(q==null?$.cj=H.fi("self"):q)+"."+H.h(u)+"("+o+");}")()},
m7:function(a,b,c,d){var u=H.k0,t=H.kH
switch(b?-1:a){case 0:throw H.j(H.my("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
m8:function(a,b){var u,t,s,r,q,p,o,n=$.cj
if(n==null)n=$.cj=H.fi("self")
u=$.kG
if(u==null)u=$.kG=H.fi("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.m7(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.aO
if(typeof u!=="number")return u.C()
$.aO=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.aO
if(typeof u!=="number")return u.C()
$.aO=u+1
return new Function(n+u+"}")()},
ks:function(a,b,c,d,e,f,g){return H.m9(a,b,c,d,!!e,!!f,g)},
k0:function(a){return a.a},
kH:function(a){return a.c},
fi:function(a){var u,t,s,r=new H.ci("self","target","receiver","name"),q=J.k8(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.nj("boolean expression must not be null")
return a},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.b7(a,"String"))},
ow:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.b7(a,"double"))},
lC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.b7(a,"num"))},
kp:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.b7(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.b7(a,"int"))},
lE:function(a,b){throw H.j(H.b7(a,H.cf(H.Q(b).substring(2))))},
nJ:function(a,b){throw H.j(H.m4(a,H.cf(H.Q(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.lE(a,b)},
p:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.nJ(a,b)},
nE:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.lE(a,b)},
lx:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
f7:function(a,b){var u
if(typeof a=="function")return!0
u=H.lx(J.W(a))
if(u==null)return!1
return H.lo(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.kl)return a
$.kl=!0
try{if(H.f7(a,b))return a
u=H.jU(b)
t=H.b7(a,u)
throw H.j(t)}finally{$.kl=!1}},
kt:function(a,b){if(a!=null&&!H.kr(a,b))H.A(H.b7(a,H.jU(b)))
return a},
b7:function(a,b){return new H.iu("TypeError: "+P.dp(a)+": type '"+H.h(H.ls(a))+"' is not a subtype of type '"+b+"'")},
m4:function(a,b){return new H.fj("CastError: "+P.dp(a)+": type '"+H.h(H.ls(a))+"' is not a subtype of type '"+b+"'")},
ls:function(a){var u,t=J.W(a)
if(!!t.$icm){u=H.lx(t)
if(u!=null)return H.jU(u)
return"Closure"}return H.cG(a)},
nj:function(a){throw H.j(new H.iW(a))},
nP:function(a){throw H.j(new P.fr(a))},
my:function(a){return new H.hP(a)},
ly:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bM:function(a){if(a==null)return
return a.$ti},
ox:function(a,b,c){return H.ce(a["$a"+H.h(c)],H.bM(b))},
d8:function(a,b,c,d){var u=H.ce(a["$a"+H.h(c)],H.bM(b))
return u==null?null:u[d]},
aj:function(a,b,c){var u=H.ce(a["$a"+H.h(b)],H.bM(a))
return u==null?null:u[c]},
y:function(a,b){var u=H.bM(a)
return u==null?null:u[b]},
jU:function(a){return H.bK(a,null)},
bK:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cf(a[0].name)+H.ko(a,1,b)
if(typeof a=="function")return H.cf(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.h(b[t])}if('func' in a)return H.mT(a,b)
if('futureOr' in a)return"FutureOr<"+H.bK("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mT:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.i])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.c.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.P)p+=" extends "+H.bK(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bK(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bK(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bK(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nt(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.Q(n[g])
i=i+h+H.bK(d[c],a0)+(" "+H.h(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ko:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bi("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bK(p,c)}return"<"+u.i(0)+">"},
ce:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kq:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bM(a)
t=J.W(a)
if(t[b]==null)return!1
return H.lv(H.ce(t[d],u),null,c,null)},
n:function(a,b,c,d){if(a==null)return a
if(H.kq(a,b,c,d))return a
throw H.j(H.b7(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cf(b.substring(2))+H.ko(c,0,null),v.mangledGlobalNames)))},
lv:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aF(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aF(a[t],b,c[t],d))return!1
return!0},
ou:function(a,b,c){return a.apply(b,H.ce(J.W(b)["$a"+H.h(c)],H.bM(b)))},
lA:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="L"||a===-1||a===-2||H.lA(u)}return!1},
kr:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="L"||b===-1||b===-2||H.lA(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kr(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f7(a,b)}u=J.W(a).constructor
t=H.bM(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aF(u,null,b,null)},
H:function(a,b){if(a!=null&&!H.kr(a,b))throw H.j(H.b7(a,H.jU(b)))
return a},
aF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aF(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aF("type" in a?a.type:l,b,s,d)
else if(H.aF(a,b,s,d))return!0
else{if(!('$i'+"ct" in t.prototype))return!1
r=t.prototype["$a"+"ct"]
q=H.ce(r,u?a.slice(1):l)
return H.aF(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.lo(a,b,c,d)
if('func' in a)return c.name==="bx"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lv(H.ce(m,u),b,p,d)},
lo:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aF(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aF(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aF(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aF(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nH(h,b,g,d)},
nH:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aF(c[s],d,a[s],b))return!1}return!0},
ov:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nF:function(a){var u,t,s,r,q=H.Q($.lz.$1(a)),p=$.jL[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.Q($.lu.$2(a,q))
if(q!=null){p=$.jL[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jT(u)
$.jL[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jR[q]=u
return u}if(s==="-"){r=H.jT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lD(a,u)
if(s==="*")throw H.j(P.lf(q))
if(v.leafTags[q]===true){r=H.jT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lD(a,u)},
lD:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ky(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jT:function(a){return J.ky(a,!1,null,!!a.$iI)},
nG:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jT(u)
else return J.ky(u,c,null,null)},
nA:function(){if(!0===$.kx)return
$.kx=!0
H.nB()},
nB:function(){var u,t,s,r,q,p,o,n
$.jL=Object.create(null)
$.jR=Object.create(null)
H.nz()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lF.$1(q)
if(p!=null){o=H.nG(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nz:function(){var u,t,s,r,q,p,o=C.x()
o=H.c9(C.y,H.c9(C.z,H.c9(C.p,H.c9(C.p,H.c9(C.A,H.c9(C.B,H.c9(C.C(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lz=new H.jO(r)
$.lu=new H.jP(q)
$.lF=new H.jQ(p)},
c9:function(a,b){return a(b)||b},
mh:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.j(new P.fL("Illegal RegExp pattern ("+String(p)+")",a))},
nM:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ns:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lG:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kB:function(a,b,c){var u=H.nN(a,b,c)
return u},
nN:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lG(b),'g'),H.ns(c))},
is:function is(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hy:function hy(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a){this.a=a},
jX:function jX(a){this.a=a},
eL:function eL(a){this.a=a
this.b=null},
cm:function cm(){},
ib:function ib(){},
i1:function i1(){},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(a){this.a=a},
fj:function fj(a){this.a=a},
hP:function hP(a){this.a=a},
iW:function iW(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dx:function dx(a,b){this.a=a
this.$ti=b},
h_:function h_(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
fV:function fV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d5:function(a){return a},
bJ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.cb(b,a))},
mS:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.j(H.nr(a,b,c))
return b},
cC:function cC(){},
dF:function dF(){},
cB:function cB(){},
dG:function dG(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
dH:function dH(){},
hv:function hv(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
nt:function(a){return J.kQ(a?Object.keys(a):[],null)},
nQ:function(a){return v.mangledGlobalNames[a]},
nI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ky:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jN:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kx==null){H.nA()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.j(P.lf("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kC()]
if(r!=null)return r
r=H.nF(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.kC(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
mg:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.k_(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.b_(a,0,4294967295,"length",null))
return J.kQ(new Array(a),b)},
kQ:function(a,b){return J.k8(H.c(a,[b]))},
k8:function(a){a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ds.prototype
return J.dr.prototype}if(typeof a=="string")return J.bC.prototype
if(a==null)return J.dt.prototype
if(typeof a=="boolean")return J.fU.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.P)return a
return J.jN(a)},
ku:function(a){if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.P)return a
return J.jN(a)},
jM:function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.P)return a
return J.jN(a)},
nv:function(a){if(typeof a=="number")return J.cw.prototype
if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c6.prototype
return a},
kv:function(a){if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c6.prototype
return a},
kw:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.P)return a
return J.jN(a)},
a1:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).q(a,b)},
f8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nD(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ku(a).j(a,b)},
lZ:function(a,b,c,d){return J.kw(a).hs(a,b,c,d)},
jY:function(a,b){return J.nv(a).hE(a,b)},
jZ:function(a,b){return J.jM(a).D(a,b)},
m_:function(a,b){return J.jM(a).J(a,b)},
m0:function(a){return J.kw(a).ghB(a)},
bO:function(a){return J.W(a).gG(a)},
bP:function(a){return J.jM(a).gO(a)},
bQ:function(a){return J.ku(a).gm(a)},
kE:function(a){return J.jM(a).ii(a)},
m1:function(a,b,c){return J.kv(a).b7(a,b,c)},
m2:function(a){return J.kv(a).iu(a)},
as:function(a){return J.W(a).i(a)},
a:function a(){},
fU:function fU(){},
dt:function dt(){},
du:function du(){},
hC:function hC(){},
c6:function c6(){},
bD:function bD(){},
aU:function aU(a){this.$ti=a},
k9:function k9(a){this.$ti=a},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cw:function cw(){},
ds:function ds(){},
dr:function dr(){},
bC:function bC(){}},P={
mH:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nk()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ca(new P.iY(s),1)).observe(u,{childList:true})
return new P.iX(s,u,t)}else if(self.setImmediate!=null)return P.nl()
return P.nm()},
mI:function(a){self.scheduleImmediate(H.ca(new P.iZ(H.m(a,{func:1,ret:-1})),0))},
mJ:function(a){self.setImmediate(H.ca(new P.j_(H.m(a,{func:1,ret:-1})),0))},
mK:function(a){P.kf(C.j,H.m(a,{func:1,ret:-1}))},
kf:function(a,b){var u=C.e.a4(a.a,1000)
return P.mQ(u<0?0:u,b)},
ld:function(a,b){var u=C.e.a4(a.a,1000)
return P.mR(u<0?0:u,b)},
mQ:function(a,b){var u=new P.eR()
u.em(a,b)
return u},
mR:function(a,b){var u=new P.eR()
u.en(a,b)
return u},
mL:function(a,b){var u,t,s
b.a=1
try{a.dR(new P.j8(b),new P.j9(b),null)}catch(s){u=H.ax(s)
t=H.cd(s)
P.nK(new P.ja(b,u,t))}},
lj:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaE")
if(u>=4){t=b.bQ()
b.a=a.a
b.c=a.c
P.cW(b,t)}else{t=H.k(b.c,"$ib9")
b.a=2
b.c=a
a.cY(t)}},
cW:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iae")
P.jH(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cW(h.a,b)}g=h.a
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
if(m){H.k(q,"$iae")
P.jH(i,i,g.b,q.a,q.b)
return}l=$.Z
if(l!==n)$.Z=n
else l=i
g=b.c
if((g&15)===8)new P.je(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jd(u,b,q).$0()}else if((g&2)!==0)new P.jc(h,u,b).$0()
if(l!=null)$.Z=l
g=u.b
if(!!J.W(g).$ict){if(g.a>=4){k=H.k(o.c,"$ib9")
o.c=null
b=o.bb(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.lj(g,o)
return}}j=b.b
k=H.k(j.c,"$ib9")
j.c=null
b=j.bb(k)
g=u.a
p=u.b
if(!g){H.H(p,H.y(j,0))
j.a=4
j.c=p}else{H.k(p,"$iae")
j.a=8
j.c=p}h.a=j
g=j}},
nf:function(a,b){if(H.f7(a,{func:1,args:[P.P,P.ao]}))return H.m(a,{func:1,ret:null,args:[P.P,P.ao]})
if(H.f7(a,{func:1,args:[P.P]}))return H.m(a,{func:1,ret:null,args:[P.P]})
throw H.j(P.k_(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ne:function(){var u,t
for(;u=$.c8,u!=null;){$.d7=null
t=u.b
$.c8=t
if(t==null)$.d6=null
u.a.$0()}},
ni:function(){$.km=!0
try{P.ne()}finally{$.d7=null
$.km=!1
if($.c8!=null)$.kD().$1(P.lw())}},
lr:function(a){var u=new P.ec(a)
if($.c8==null){$.c8=$.d6=u
if(!$.km)$.kD().$1(P.lw())}else $.d6=$.d6.b=u},
nh:function(a){var u,t,s=$.c8
if(s==null){P.lr(a)
$.d7=$.d6
return}u=new P.ec(a)
t=$.d7
if(t==null){u.b=s
$.c8=$.d7=u}else{u.b=t.b
$.d7=t.b=u
if(u.b==null)$.d6=u}},
nK:function(a){var u=null,t=$.Z
if(C.f===t){P.jJ(u,u,C.f,a)
return}P.jJ(u,u,t,H.m(t.bT(a),{func:1,ret:-1}))},
lc:function(a,b){var u=$.Z
if(u===C.f)return P.kf(a,H.m(b,{func:1,ret:-1}))
return P.kf(a,H.m(u.bT(b),{func:1,ret:-1}))},
mE:function(a,b){var u=$.Z
if(u===C.f)return P.ld(a,H.m(b,{func:1,ret:-1,args:[P.b4]}))
return P.ld(a,H.m(u.da(b,P.b4),{func:1,ret:-1,args:[P.b4]}))},
jH:function(a,b,c,d,e){var u={}
u.a=d
P.nh(new P.jI(u,e))},
lp:function(a,b,c,d,e){var u,t=$.Z
if(t===c)return d.$0()
$.Z=c
u=t
try{t=d.$0()
return t}finally{$.Z=u}},
lq:function(a,b,c,d,e,f,g){var u,t=$.Z
if(t===c)return d.$1(e)
$.Z=c
u=t
try{t=d.$1(e)
return t}finally{$.Z=u}},
ng:function(a,b,c,d,e,f,g,h,i){var u,t=$.Z
if(t===c)return d.$2(e,f)
$.Z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Z=u}},
jJ:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bT(d):c.hC(d,-1)
P.lr(d)},
iY:function iY(a){this.a=a},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
eR:function eR(){this.c=0},
jz:function jz(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aE:function aE(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
j7:function j7(a,b){this.a=a
this.b=b},
jb:function jb(a,b){this.a=a
this.b=b},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jf:function jf(a){this.a=a},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a
this.b=null},
i4:function i4(){},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
cL:function cL(){},
i5:function i5(){},
b4:function b4(){},
ae:function ae(a,b){this.a=a
this.b=b},
jC:function jC(){},
jI:function jI(a,b){this.a=a
this.b=b},
jl:function jl(){},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
jm:function jm(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function(a,b){return new H.a0([a,b])},
mj:function(a){return H.nu(a,new H.a0([null,null]))},
dy:function(a){return new P.jj([a])},
kk:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mP:function(a,b,c){var u=new P.es(a,b,[c])
u.c=a.e
return u},
me:function(a,b,c){var u,t
if(P.kn(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.i])
C.a.h($.ar,a)
try{P.mU(a,u)}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=P.la(b,H.nE(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
k6:function(a,b,c){var u,t
if(P.kn(a))return b+"..."+c
u=new P.bi(b)
C.a.h($.ar,a)
try{t=u
t.a=P.la(t.a,a,", ")}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kn:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
mU:function(a,b){var u,t,s,r,q,p,o,n=a.gO(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.h(n.gE(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gE(n);++l
if(!n.u()){if(l<=4){C.a.h(b,H.h(r))
return}t=H.h(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gE(n);++l
for(;n.u();r=q,q=p){p=n.gE(n);++l
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
kS:function(a,b){var u,t,s=P.dy(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t)s.h(0,H.H(a[t],b))
return s},
kU:function(a){var u,t={}
if(P.kn(a))return"{...}"
u=new P.bi("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.m_(a,new P.h3(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jj:function jj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c7:function c7(a){this.a=a
this.c=this.b=null},
es:function es(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h0:function h0(){},
w:function w(){},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
a9:function a9(){},
jq:function jq(){},
et:function et(){},
cn:function cn(){},
co:function co(){},
fB:function fB(){},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fQ:function fQ(a){this.a=a},
iG:function iG(){},
iH:function iH(){},
jA:function jA(a){this.b=0
this.c=a},
md:function(a){if(a instanceof H.cm)return a.i(0)
return"Instance of '"+H.h(H.cG(a))+"'"},
mk:function(a,b,c){var u,t=J.mg(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.n(t,u,b)
return H.n(t,"$ib",[c],"$ab")},
kT:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bP(a);u.u();)C.a.h(s,H.H(u.gE(u),c))
if(b)return s
return H.n(J.k8(s),"$ib",t,"$ab")},
ke:function(a){var u,t
if(a.constructor===Array){H.n(a,"$iaU",[P.q],"$aaU")
u=a.length
t=P.l5(0,null,u)
return H.l3(t<u?C.a.e4(a,0,t):a)}return P.mC(a,0,null)},
mC:function(a,b,c){var u,t,s=J.bP(a)
for(u=0;u<b;++u)if(!s.u())throw H.j(P.b_(b,0,u,null,null))
t=[]
for(;s.u();)t.push(s.gE(s))
return H.l3(t)},
mw:function(a){return new H.fV(a,H.mh(a,!1,!0,!1,!1,!1))},
la:function(a,b,c){var u=J.bP(b)
if(!u.u())return a
if(c.length===0){do a+=H.h(u.gE(u))
while(u.u())}else{a+=H.h(u.gE(u))
for(;u.u();)a=a+c+H.h(u.gE(u))}return a},
ln:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.i){u=$.lY().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.hF(H.H(b,H.aj(c,"cn",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kc(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
ma:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mb:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dk:function(a){if(a>=10)return""+a
return"0"+a},
kK:function(a){return new P.bv(1000*a)},
dp:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.md(a)},
m3:function(a){return new P.aG(!1,null,null,a)},
k_:function(a,b,c){return new P.aG(!0,a,b,c)},
hH:function(a,b){return new P.c0(null,null,!0,a,b,"Value not in range")},
b_:function(a,b,c,d,e){return new P.c0(b,c,!0,a,d,"Invalid value")},
l5:function(a,b,c){if(0>a||a>c)throw H.j(P.b_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.j(P.b_(b,a,c,"end",null))
return b}return c},
l4:function(a,b){if(typeof a!=="number")return a.ab()
if(a<0)throw H.j(P.b_(a,0,null,b,null))},
X:function(a,b,c,d,e){var u=H.ac(e==null?J.bQ(b):e)
return new P.fT(u,!0,a,c,"Index out of range")},
aq:function(a){return new P.iE(a)},
lf:function(a){return new P.iC(a)},
l9:function(a){return new P.cK(a)},
bt:function(a){return new P.fm(a)},
z:function(a){return new P.ek(a)},
kA:function(a){H.nI(a)},
M:function M(){},
az:function az(a,b){this.a=a
this.b=b},
D:function D(){},
bv:function bv(a){this.a=a},
fx:function fx(){},
fy:function fy(){},
bw:function bw(){},
fb:function fb(){},
dJ:function dJ(){},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fT:function fT(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iE:function iE(a){this.a=a},
iC:function iC(a){this.a=a},
cK:function cK(a){this.a=a},
fm:function fm(a){this.a=a},
hB:function hB(){},
dU:function dU(){},
fr:function fr(a){this.a=a},
ek:function ek(a){this.a=a},
fL:function fL(a,b){this.a=a
this.b=b},
bx:function bx(){},
q:function q(){},
e:function e(){},
aT:function aT(){},
b:function b(){},
G:function G(){},
L:function L(){},
a7:function a7(){},
P:function P(){},
ao:function ao(){},
i:function i(){},
bi:function bi(a){this.a=a},
nq:function(a){var u,t=J.W(a)
if(!!t.$iby){u=t.gdh(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eW(a.data,a.height,a.width)},
np:function(a){if(a instanceof P.eW)return{data:a.a,height:a.b,width:a.c}
return a},
bl:function(a){var u,t,s,r,q
if(a==null)return
u=P.kR(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r){q=H.Q(t[r])
u.n(0,q,a[q])}return u},
no:function(a){var u={}
a.J(0,new P.jK(u))
return u},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(a){this.a=a},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fJ:function fJ(){},
ji:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jk:function jk(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bc:function bc(){},
fY:function fY(){},
bf:function bf(){},
hz:function hz(){},
hG:function hG(){},
cH:function cH(){},
i8:function i8(){},
o:function o(){},
bj:function bj(){},
ir:function ir(){},
eq:function eq(){},
er:function er(){},
eB:function eB(){},
eC:function eC(){},
eN:function eN(){},
eO:function eO(){},
eU:function eU(){},
eV:function eV(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(a){this.a=a},
fg:function fg(){},
bR:function bR(){},
hA:function hA(){},
ed:function ed(){},
de:function de(){},
dM:function dM(){},
c1:function c1(){},
dO:function dO(){},
dW:function dW(){},
e2:function e2(){},
i0:function i0(){},
eJ:function eJ(){},
eK:function eK(){}},W={
kF:function(){var u=document.createElement("a")
return u},
k1:function(){var u=document.createElement("canvas")
return u},
mc:function(a,b,c){var u=document.body,t=(u&&C.o).ae(u,a,b,c)
t.toString
u=W.E
u=new H.cT(new W.ai(t),H.m(new W.fA(),{func:1,ret:P.M,args:[u]}),[u])
return H.k(u.gaF(u),"$iR")},
kN:function(a){H.k(a,"$if")
return"wheel"},
cr:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kw(a)
t=u.gdP(a)
if(typeof t==="string")r=u.gdP(a)}catch(s){H.ax(s)}return r},
kP:function(a){var u=document.createElement("img")
u.src=a
return u},
jh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ll:function(a,b,c,d){var u=W.jh(W.jh(W.jh(W.jh(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u=W.lt(new W.j6(c),W.l)
if(u!=null&&!0)J.lZ(a,b,u,!1)
return new W.j5(a,b,u,!1,[e])},
lk:function(a){var u=W.kF(),t=window.location
u=new W.bI(new W.jp(u,t))
u.eg(a)
return u},
mM:function(a,b,c,d){H.k(a,"$iR")
H.Q(b)
H.Q(c)
H.k(d,"$ibI")
return!0},
mN:function(a,b,c,d){var u,t,s
H.k(a,"$iR")
H.Q(b)
H.Q(c)
u=H.k(d,"$ibI").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lm:function(){var u=P.i,t=P.kS(C.l,u),s=H.y(C.l,0),r=H.m(new W.jx(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jw(t,P.dy(u),P.dy(u),P.dy(u),null)
t.el(null,new H.h6(C.l,r,[s,u]),q,null)
return t},
lt:function(a,b){var u=$.Z
if(u===C.f)return a
return u.da(a,b)},
u:function u(){},
f9:function f9(){},
db:function db(){},
fa:function fa(){},
ch:function ch(){},
dd:function dd(){},
bq:function bq(){},
bT:function bT(){},
cl:function cl(){},
br:function br(){},
cp:function cp(){},
fn:function fn(){},
S:function S(){},
cq:function cq(){},
fo:function fo(){},
aP:function aP(){},
aQ:function aQ(){},
fp:function fp(){},
fq:function fq(){},
ft:function ft(){},
aA:function aA(){},
fu:function fu(){},
dl:function dl(){},
dm:function dm(){},
fv:function fv(){},
fw:function fw(){},
j1:function j1(a,b){this.a=a
this.b=b},
R:function R(){},
fA:function fA(){},
l:function l(){},
f:function f(){},
aR:function aR(){},
fF:function fF(){},
fG:function fG(){},
fK:function fK(){},
aS:function aS(){},
fP:function fP(){},
bW:function bW(){},
by:function by(){},
cv:function cv(){},
aV:function aV(){},
dz:function dz(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(a){this.a=a},
hm:function hm(){},
hn:function hn(a){this.a=a},
aY:function aY(){},
ho:function ho(){},
aa:function aa(){},
ai:function ai(a){this.a=a},
E:function E(){},
cD:function cD(){},
aZ:function aZ(){},
hE:function hE(){},
hN:function hN(){},
hO:function hO(a){this.a=a},
hQ:function hQ(){},
b0:function b0(){},
hZ:function hZ(){},
b1:function b1(){},
i_:function i_(){},
b2:function b2(){},
i2:function i2(){},
i3:function i3(a){this.a=a},
aK:function aK(){},
c2:function c2(){},
dV:function dV(){},
i9:function i9(){},
ia:function ia(){},
cN:function cN(){},
b3:function b3(){},
aL:function aL(){},
ic:function ic(){},
id:function id(){},
ik:function ik(){},
b5:function b5(){},
aM:function aM(){},
ip:function ip(){},
iq:function iq(){},
bG:function bG(){},
iF:function iF(){},
iU:function iU(){},
b8:function b8(){},
cU:function cU(){},
cV:function cV(){},
j2:function j2(){},
ef:function ef(){},
jg:function jg(){},
ey:function ey(){},
jt:function jt(){},
ju:function ju(){},
j0:function j0(){},
j3:function j3(a){this.a=a},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kj:function kj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j5:function j5(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j6:function j6(a){this.a=a},
bI:function bI(a){this.a=a},
C:function C(){},
dI:function dI(a){this.a=a},
hx:function hx(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(){},
jr:function jr(){},
js:function js(){},
jw:function jw(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jx:function jx(){},
jv:function jv(){},
dq:function dq(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
av:function av(){},
jp:function jp(a,b){this.a=a
this.b=b},
eX:function eX(a){this.a=a},
jB:function jB(a){this.a=a},
ee:function ee(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
el:function el(){},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ez:function ez(){},
eA:function eA(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
d0:function d0(){},
d1:function d1(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
d2:function d2(){},
d3:function d3(){},
eS:function eS(){},
eT:function eT(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){}},O={
k2:function(a){var u=new O.a_([a])
u.b9(a)
return u},
a_:function a_(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cz:function cz(){this.b=this.a=null},
dC:function dC(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(){},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(){},
h7:function h7(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cy:function cy(){},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aW:function aW(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ha:function ha(){var _=this
_.e=_.d=_.c=_.b=null},
hb:function hb(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hc:function hc(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dQ:function dQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bF:function bF(){}},E={
kO:function(){var u=new E.ag()
u.a=""
u.b=!0
u.sef(0,O.k2(E.ag))
u.y.aR(u.gi1(),u.gi4())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbr(0,null)
return u},
mx:function(a,b){var u=new E.hJ(a)
u.ec(a,b)
return u},
mD:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibT)return E.lb(a,!0,!0,!0,!1)
u=W.k1()
t=u.style
t.width="100%"
t.height="100%"
s.gde(a).h(0,u)
return E.lb(u,!0,!0,!0,!1)},
lb:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dZ(),j=H.k(C.h.co(a,"webgl2",P.mj(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic1")
if(j==null)H.A(P.z("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mx(j,a)
u=new T.ig(j)
u.b=H.ac(j.getParameter(3379))
u.c=H.ac(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e5(a)
t=new X.fX()
t.c=new X.au(!1,!1,!1)
t.sfY(P.dy(P.q))
u.b=t
t=new X.hp(u)
t.f=0
t.r=V.bg()
t.x=V.bg()
t.ch=t.Q=1
u.c=t
t=new X.h1(u)
t.r=0
t.x=V.bg()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.io(u)
t.f=V.bg()
t.r=V.bg()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seH(H.c([],[[P.cL,P.P]]))
t=u.z
s=document
r=W.aa
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a6(s,"contextmenu",H.m(u.gfe(),q),!1,r))
t=u.z
p=W.l
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a6(a,"focus",H.m(u.gfk(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a6(a,"blur",H.m(u.gf6(),o),!1,p))
t=u.z
n=W.aV
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a6(s,"keyup",H.m(u.gfo(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a6(s,"keydown",H.m(u.gfm(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a6(a,"mousedown",H.m(u.gft(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,"mouseup",H.m(u.gfz(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,l,H.m(u.gfv(),q),!1,r))
n=u.z
W.kN(a)
m=W.b8;(n&&C.a).h(n,W.a6(a,H.Q(W.kN(a)),H.m(u.gfB(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a6(s,l,H.m(u.gfg(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a6(s,"mouseup",H.m(u.gfi(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a6(s,"pointerlockchange",H.m(u.gfD(),o),!1,p))
p=u.z
o=W.aM
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a6(a,"touchstart",H.m(u.gfT(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchend",H.m(u.gfP(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchmove",H.m(u.gfR(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.d_()
return k},
fh:function fh(){},
ag:function ag(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
dZ:function dZ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ij:function ij(a){this.a=a}},Z={
ki:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.d5(c)),35044)
a.bindBuffer(b,null)
return new Z.ea(b,u)},
aD:function(a){return new Z.bk(a)},
ea:function ea(a,b){this.a=a
this.b=b},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eb:function eb(a){this.a=a},
ck:function ck(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a){this.a=a}},D={
N:function(){var u=new D.bU()
u.sad(null)
u.saM(null)
u.c=null
u.d=0
return u},
fk:function fk(){},
bU:function bU(){var _=this
_.d=_.c=_.b=_.a=null},
fD:function fD(a){this.a=a},
fE:function fE(a){this.a=a},
x:function x(){this.b=null},
bA:function bA(a){this.b=null
this.$ti=a},
bB:function bB(a){this.b=null
this.$ti=a},
J:function J(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bu:function bu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a8:function a8(){},
dw:function dw(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dL:function dL(){},
dT:function dT(){}},X={dg:function dg(a,b){this.a=a
this.b=b},dv:function dv(a,b){this.a=a
this.b=b},fX:function fX(){var _=this
_.d=_.c=_.b=_.a=null},dA:function dA(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h1:function h1(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},au:function au(a,b,c){this.a=a
this.b=b
this.c=c},be:function be(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hp:function hp(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cA:function cA(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hF:function hF(){},e0:function e0(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},io:function io(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e5:function e5(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k5:function(a){var u=new X.fM(),t=new V.ay(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.l7
if(t==null){t=V.l6(0,0,1,1)
$.l7=t}u.r=t
return u},
kZ:function(a){var u,t,s=new X.dK()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().h(0,s.gf8())
t=new D.J("mover",u,s.b,[U.ab])
t.b=!0
s.an(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.O().a)){s.c=1.0471975511965976
t=new D.J("fov",t,1.0471975511965976,[P.D])
t.b=!0
s.an(t)}t=s.d
if(!(Math.abs(t-0.1)<$.O().a)){s.d=0.1
t=new D.J("near",t,0.1,[P.D])
t.b=!0
s.an(t)}t=s.e
if(!(Math.abs(t-2000)<$.O().a)){s.e=2000
t=new D.J("far",t,2000,[P.D])
t.b=!0
s.an(t)}return s},
bS:function bS(){},
fM:function fM(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(){this.b=this.a=null},
dK:function dK(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){}},V={
nR:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dZ(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.c.ag("null",c)
return C.c.ag(C.d.dS(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
cc:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.i])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.t)(a),++s){r=V.U(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.d(p,q)
C.a.n(p,q,C.c.ag(p[q],t))}return p},
kz:function(a){return C.d.ir(Math.pow(2,C.J.c5(Math.log(H.nn(a))/Math.log(2))))},
bY:function(){var u=$.kW
return u==null?$.kW=V.aX(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aX:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kV:function(a,b,c){var u=c.t(0,Math.sqrt(c.B(c))),t=b.b1(u),s=t.t(0,Math.sqrt(t.B(t))),r=u.b1(s),q=new V.K(a.a,a.b,a.c),p=s.N(0).B(q),o=r.N(0).B(q),n=u.N(0).B(q)
return V.aX(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bg:function(){var u=$.l0
return u==null?$.l0=new V.a4(0,0):u},
l1:function(){var u=$.cE
return u==null?$.cE=new V.ah(0,0,0):u},
l6:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dN(a,b,c,d)},
e9:function(){var u=$.li
return u==null?$.li=new V.K(0,0,0):u},
mF:function(){var u=$.iI
return u==null?$.iI=new V.K(-1,0,0):u},
kh:function(){var u=$.iJ
return u==null?$.iJ=new V.K(0,1,0):u},
mG:function(){var u=$.iK
return u==null?$.iK=new V.K(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fC:function fC(a){this.a=a},
dE:function dE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
al:function al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.j(P.z("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.aJ(a,0)
t=C.c.aJ(b,0)
s=new V.hI()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.hR()
u.ed(a)
return u},
im:function(){var u=new V.il(),t=P.i
u.shf(new H.a0([t,V.cJ]))
u.shi(new H.a0([t,V.cP]))
u.c=null
return u},
ba:function ba(){},
at:function at(){},
dB:function dB(){},
am:function am(){this.a=null},
hI:function hI(){this.b=this.a=null},
hR:function hR(){this.a=null},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a){this.b=a
this.c=null},
il:function il(){this.c=this.b=this.a=null},
cQ:function cQ(a){this.b=a
this.a=this.c=null},
nL:function(a){P.mE(C.G,new V.jV(a))},
mz:function(a){var u=new V.hV()
u.ee(a,!0)
return u},
bs:function bs(){},
jV:function jV(a){this.a=a},
fs:function fs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fO:function fO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hD:function hD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hV:function hV(){this.b=this.a=null},
hX:function hX(a){this.a=a},
hW:function hW(a){this.a=a},
hY:function hY(a){this.a=a}},U={
k3:function(){var u=new U.fl()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kJ:function(a){var u=new U.di()
u.a=a
return u},
fl:function fl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
di:function di(){this.b=this.a=null},
cu:function cu(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
e6:function e6(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dh:function dh(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dj:function dj(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dn:function dn(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aw:function aw(){}},A={
ml:function(a,b){var u=a.aw,t=new A.dD(b,u)
t.cv(b,u)
t.eb(a,b)
return t},
mm:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gal(a0)+a1.gal(a1)+a2.gal(a2)+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.t)(a9),++t)f+="_"+H.h(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.t)(b0),++t)f+="_"+H.h(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.t)(b1),++t)f+="_"+H.h(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.aN()
if(l){u=$.bo()
g=new Z.bk(g.a|u.a)}if(k){u=$.bn()
g=new Z.bk(g.a|u.a)}if(j){u=$.bp()
g=new Z.bk(g.a|u.a)}if(i){u=$.bm()
g=new Z.bk(g.a|u.a)}return new A.h9(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jF:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jG:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jF(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jW(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
mY:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jF(b,t,"emission")
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
mV:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jG(b,t,"ambient")
b.a+="\n"},
mW:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jG(b,t,"diffuse")
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
mZ:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jG(b,t,"invDiffuse")
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
n4:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jG(b,t,"specular")
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
n0:function(a,b){var u,t,s
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
n2:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jF(b,t,"reflect")
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
n3:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jF(b,t,"refract")
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
mX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.h(u)
s=A.jW(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ap()
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
n1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.h(u)
s=A.jW(t)
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
if(typeof u!=="number")return u.ap()
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
n5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.h(u)
s=A.jW(t)
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
if(typeof u!=="number")return u.ap()
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
n_:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.i])
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
n6:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bi("")
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
A.mY(a,j)
A.mV(a,j)
A.mW(a,j)
A.mZ(a,j)
A.n4(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.n2(a,j)
A.n3(a,j)}A.n0(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.mX(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.n1(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.n5(a,q[o],j)
A.n_(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.i])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aq(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aq(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aq(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
n7:function(a,b){var u,t,s
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
n9:function(a,b){var u
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
n8:function(a,b){var u
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
nb:function(a,b){var u,t
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
nc:function(a,b){var u,t
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
na:function(a,b){var u
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
nd:function(a,b){var u
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
jW:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.aq(a,1)},
kg:function(a,b,c,d,e){var u=new A.iv(a,c,e)
u.f=d
u.shq(P.mk(d,0,P.q))
return u},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a){this.a=a},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b){var _=this
_.iA=_.dn=_.dm=_.dl=_.aw=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iI=_.iH=_.iG=_.c4=_.c3=_.c2=_.c1=_.c0=_.c_=_.iF=_.dD=_.dC=_.iE=_.dB=_.dA=_.dz=_.iD=_.dw=_.dv=_.du=_.iC=_.dt=_.ds=_.iB=_.dr=_.dq=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aH:function aH(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aw=b3
_.dl=b4},
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
c5:function c5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cI:function cI(){},
dR:function dR(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e1:function e1(){},
iA:function iA(a){this.a=a},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a5:function a5(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
cR:function cR(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
cS:function cS(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
bH:function bH(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jE:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
d4:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.K(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.K(u+a3,t+a1,s+a2)
q=new V.K(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.K(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jE(i)
l=F.jE(j.b)
k=F.nO(d,a0,new F.jD(j,F.jE(j.c),F.jE(j.d),l,m,c),b)
if(k!=null)a.i0(k)},
nO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kd()
t=H.c([],[F.aC])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iL(g,g,new V.ay(p,0,0,1),g,g,new V.a4(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bY(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iL(g,g,new V.ay(j,i,h,1),g,g,new V.a4(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bY(d))}}u.d.hu(a+1,b+1,t)
return u},
cs:function(a,b,c){var u=new F.a3(),t=a.a
if(t==null)H.A(P.z("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.z("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a0()
return u},
mi:function(a,b){var u=new F.bd(),t=a.a
if(t==null)H.A(P.z("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.A(P.z("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a0()
return u},
kd:function(){var u=new F.dP(),t=new F.iM(u)
t.b=!1
t.shr(H.c([],[F.aC]))
u.a=t
t=new F.hU(u)
t.sbO(H.c([],[F.bE]))
u.b=t
t=new F.hT(u)
t.seO(H.c([],[F.bd]))
u.c=t
t=new F.hS(u)
t.seI(H.c([],[F.a3]))
u.d=t
u.e=null
return u},
iL:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aC(),r=new F.iR()
r.sbO(H.c([],[F.bE]))
s.b=r
r=new F.iQ()
u=[F.bd]
r.seP(H.c([],u))
r.seQ(H.c([],u))
s.c=r
r=new F.iN()
u=[F.a3]
r.seJ(H.c([],u))
r.seK(H.c([],u))
r.seL(H.c([],u))
s.d=r
h=$.lU()
s.e=0
r=$.aN()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bo().a)!==0?e:t
s.x=(u&$.bn().a)!==0?b:t
s.y=(u&$.bp().a)!==0?f:t
s.z=(u&$.bN().a)!==0?g:t
s.Q=(u&$.lV().a)!==0?c:t
s.ch=(u&$.cg().a)!==0?i:0
s.cx=(u&$.bm().a)!==0?a:t
return s},
jD:function jD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a3:function a3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bd:function bd(){this.b=this.a=null},
bE:function bE(){this.a=null},
dP:function dP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(a){this.a=a
this.b=null},
hT:function hT(a){this.a=a
this.b=null},
hU:function hU(a){this.a=a
this.b=null},
aC:function aC(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iT:function iT(a){this.a=a},
iS:function iS(a){this.a=a},
iM:function iM(a){this.a=a
this.c=this.b=null},
iN:function iN(){this.d=this.c=this.b=null},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(){this.c=this.b=null},
iR:function iR(){this.b=null}},T={cO:function cO(){},dX:function dX(){},ie:function ie(){var _=this
_.y=_.d=_.c=_.b=_.a=null},dY:function dY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},ig:function ig(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},ii:function ii(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},ih:function ih(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},Q={
lB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7=34067,a8="modifiers",a9=V.mz("Test 019"),b0=W.k1()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0)
u=[P.i]
a9.d7(H.c(["A test of the Material Lighting shader with an alpha texture. ","There are no mapped reflections, this is actually transparent."],u))
a9.d7(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a5)
if(t==null)H.A(P.z("Failed to find an element with the identifier, testCanvas."))
s=E.mD(t,!0,!0,!0,!1)
r=E.kO()
q=F.kd()
F.d4(q,a6,a6,1,1,1,0,0,1)
F.d4(q,a6,a6,1,1,0,1,0,3)
F.d4(q,a6,a6,1,1,0,0,1,2)
F.d4(q,a6,a6,1,1,-1,0,0,0)
F.d4(q,a6,a6,1,1,0,-1,0,0)
F.d4(q,a6,a6,1,1,0,0,-1,3)
q.av()
r.sbr(0,q)
p=X.k5(a6)
if(p.b){p.b=!1
u=new D.J("clearColor",!0,!1,[P.M])
u.b=!0
p.an(u)}u=s.f
o=u.a
n=o.createTexture()
o.bindTexture(a7,n)
o.texParameteri(a7,10242,10497)
o.texParameteri(a7,10243,10497)
o.texParameteri(a7,10241,9729)
o.texParameteri(a7,10240,9729)
o.bindTexture(a7,a6)
m=new T.dY()
m.a=0
m.b=n
m.c=!1
m.d=0
u.aL(m,n,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aL(m,n,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aL(m,n,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aL(m,n,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aL(m,n,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aL(m,n,"../resources/maskonaive/negz.jpg",34074,!1,!1)
l=s.f.hZ("../resources/AlphaWeave.png")
k=new O.dC()
k.seu(O.k2(V.al))
k.e.aR(k.gf2(),k.gf4())
u=new O.aW(k,"emission")
u.c=new A.af(!1,!1,!1)
u.f=new V.a2(0,0,0)
k.f=u
u=new O.aW(k,"ambient")
u.c=new A.af(!1,!1,!1)
u.f=new V.a2(0,0,0)
k.r=u
u=new O.aW(k,"diffuse")
u.c=new A.af(!1,!1,!1)
u.f=new V.a2(0,0,0)
k.x=u
u=new O.aW(k,"invDiffuse")
u.c=new A.af(!1,!1,!1)
u.f=new V.a2(0,0,0)
k.y=u
u=new O.hc(k,"specular")
u.c=new A.af(!1,!1,!1)
u.f=new V.a2(0,0,0)
u.ch=100
k.z=u
u=new O.h8(k,"bump")
u.c=new A.af(!1,!1,!1)
k.Q=u
k.ch=null
u=new O.aW(k,"reflect")
u.c=new A.af(!1,!1,!1)
u.f=new V.a2(0,0,0)
k.cx=u
u=new O.hb(k,"refract")
u.c=new A.af(!1,!1,!1)
u.f=new V.a2(0,0,0)
u.ch=1
k.cy=u
u=new O.h7(k,"alpha")
u.c=new A.af(!1,!1,!1)
u.f=1
k.db=u
u=new D.dw()
u.b9(D.a8)
u.seF(H.c([],[D.bu]))
u.sfV(H.c([],[D.dL]))
u.she(H.c([],[D.dT]))
u.y=u.x=null
u.cq(u.gf0(),u.gfF(),u.gfJ())
k.dx=u
o=new O.ha()
o.b=new V.ay(0,0,0,0)
o.c=1
o.d=10
o.e=!1
k.dy=o
o=u.x
u=o==null?u.x=D.N():o
u.h(0,k.gh2())
u=k.dx
o=u.y
u=o==null?u.y=D.N():o
u.h(0,k.gaI())
k.fr=null
u=k.dx
j=V.kh()
o=U.kJ(V.kV(V.l1(),j,new V.K(1,-2,-3)))
i=new V.a2(1,1,1)
h=new D.bu()
h.c=new V.a2(1,1,1)
h.a=V.mG()
h.d=V.kh()
h.e=V.mF()
g=h.b
h.b=o
o.gp().h(0,h.geh())
o=new D.J("mover",g,h.b,[U.ab])
o.b=!0
h.ar(o)
if(!h.c.q(0,i)){g=h.c
h.c=i
o=new D.J("color",g,i,[V.a2])
o.b=!0
h.ar(o)}u.h(0,h)
u=k.r
u.sbf(0,new V.a2(0.5,0.5,0.5))
u=k.x
u.sbf(0,new V.a2(0.6,0.6,0.6))
k.r.sck(l)
k.x.sck(l)
k.db.sck(l)
f=new U.cu()
f.b9(U.ab)
f.aR(f.geZ(),f.gfH())
f.e=null
f.f=V.bY()
f.r=0
u=s.r
o=new U.e7()
h=U.k3()
h.scn(0,!0)
h.scb(6.283185307179586)
h.scd(0)
h.sa7(0,0)
h.scc(100)
h.sR(0)
h.sbZ(0.5)
o.b=h
e=o.gaH()
h.gp().h(0,e)
h=U.k3()
h.scn(0,!0)
h.scb(6.283185307179586)
h.scd(0)
h.sa7(0,0)
h.scc(100)
h.sR(0)
h.sbZ(0.5)
o.c=h
h.gp().h(0,e)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
d=new X.au(!1,!1,!1)
g=o.d
o.d=d
h=[X.au]
e=new D.J(a8,g,d,h)
e.b=!0
o.M(e)
e=o.f
if(e!==!1){o.f=!1
e=new D.J("invertX",e,!1,[P.M])
e.b=!0
o.M(e)}e=o.r
if(e!==!1){o.r=!1
e=new D.J("invertY",e,!1,[P.M])
e.b=!0
o.M(e)}o.aZ(u)
f.h(0,o)
u=s.r
o=new U.e6()
e=U.k3()
e.scn(0,!0)
e.scb(6.283185307179586)
e.scd(0)
e.sa7(0,0)
e.scc(100)
e.sR(0)
e.sbZ(0.2)
o.b=e
e.gp().h(0,o.gaH())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
d=new X.au(!0,!1,!1)
g=o.c
o.c=d
e=new D.J(a8,g,d,h)
e.b=!0
o.M(e)
o.aZ(u)
f.h(0,o)
u=s.r
o=new U.e8()
o.c=0.01
o.e=o.d=0
d=new X.au(!1,!1,!1)
o.b=d
h=new D.J(a8,a6,d,h)
h.b=!0
o.M(h)
o.aZ(u)
f.h(0,o)
f.h(0,U.kJ(V.aX(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.kZ(f)
b=new M.dj()
b.a=!0
u=E.kO()
q=F.kd()
o=q.a
h=new V.K(-1,-1,1)
h=h.t(0,Math.sqrt(h.B(h)))
a=o.be(new V.bh(1,2,4,6),new V.ay(1,0,0,1),new V.ah(-1,-1,0),new V.a4(0,1),h,a6)
o=q.a
h=new V.K(1,-1,1)
h=h.t(0,Math.sqrt(h.B(h)))
a0=o.be(new V.bh(0,3,4,6),new V.ay(0,0,1,1),new V.ah(1,-1,0),new V.a4(1,1),h,a6)
o=q.a
h=new V.K(1,1,1)
h=h.t(0,Math.sqrt(h.B(h)))
a1=o.be(new V.bh(0,2,5,6),new V.ay(0,1,0,1),new V.ah(1,1,0),new V.a4(1,0),h,a6)
o=q.a
h=V.bg()
e=new V.K(-1,1,1)
e=e.t(0,Math.sqrt(e.B(e)))
a2=o.be(new V.bh(0,2,4,7),new V.ay(1,1,0,1),new V.ah(-1,1,0),h,e,a6)
q.d.ht(H.c([a,a0,a1,a2],[F.aC]))
q.av()
u.sbr(0,q)
b.e=u
b.sb_(a6)
b.sb4(0,a6)
b.sb5(a6)
u=new O.dQ()
u.b=1.0471975511965976
u.d=new V.a2(1,1,1)
g=u.c
u.c=m
m.gp().h(0,u.gaI())
o=new D.J("boxTexture",g,u.c,[T.dY])
o.b=!0
u.T(o)
b.sb5(u)
b.sb4(0,p)
b.sb_(c)
a3=new M.dn()
a3.a=!0
a3.sex(0,O.k2(E.ag))
a3.e.aR(a3.gfa(),a3.gfc())
a3.y=a3.x=a3.r=a3.f=null
a4=X.k5(a6)
a3.sb_(a6)
a3.sb4(0,a4)
a3.sb5(a6)
a3.sb_(c)
a3.sb5(k)
a3.sb4(0,p)
a3.e.h(0,r)
u=M.aw
o=H.c([b,a3],[u])
h=new M.dh()
h.b9(u)
h.e=!0
h.f=!1
h.r=null
h.aR(h.gfL(),h.gfN())
h.a5(0,o)
u=s.d
if(u!==h){if(u!=null)u.gp().S(0,s.gcz())
s.d=h
h.gp().h(0,s.gcz())
s.cA()}u=s.z
if(u==null)u=s.z=D.N()
o={func:1,ret:-1,args:[D.x]}
h=H.m(new Q.jS(a9,k),o)
if(u.b==null)u.saM(H.c([],[o]))
u=u.b;(u&&C.a).h(u,h)
V.nL(s)},
jS:function jS(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ka.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.cF(a)},
i:function(a){return"Instance of '"+H.h(H.cG(a))+"'"}}
J.fU.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iM:1}
J.dt.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.du.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hC.prototype={}
J.c6.prototype={}
J.bD.prototype={
i:function(a){var u=a[$.lJ()]
if(u==null)return this.e7(a)
return"JavaScript function for "+H.h(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibx:1}
J.aU.prototype={
h:function(a,b){H.H(b,H.y(a,0))
if(!!a.fixed$length)H.A(P.aq("add"))
a.push(b)},
S:function(a,b){var u
if(!!a.fixed$length)H.A(P.aq("remove"))
for(u=0;u<a.length;++u)if(J.a1(a[u],b)){a.splice(u,1)
return!0}return!1},
a5:function(a,b){var u,t
H.n(b,"$ie",[H.y(a,0)],"$ae")
if(!!a.fixed$length)H.A(P.aq("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.t)(b),++t)a.push(b[t])},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.j(P.bt(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.h(a[u]))
return t.join(b)},
hX:function(a){return this.l(a,"")},
hS:function(a,b){var u,t,s
H.m(b,{func:1,ret:P.M,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.B(b.$1(s)))return s
if(a.length!==u)throw H.j(P.bt(a))}throw H.j(H.k7())},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
e4:function(a,b,c){var u=a.length
if(b>u)throw H.j(P.b_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.j(P.b_(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gbi:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.j(H.k7())},
d9:function(a,b){var u,t
H.m(b,{func:1,ret:P.M,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.B(b.$1(a[t])))return!0
if(a.length!==u)throw H.j(P.bt(a))}return!1},
bs:function(a,b){var u=H.y(a,0)
H.m(b,{func:1,ret:P.q,args:[u,u]})
if(!!a.immutable$list)H.A(P.aq("sort"))
H.dS(a,0,a.length-1,b,u)},
P:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a1(a[u],b))return!0
return!1},
i:function(a){return P.k6(a,"[","]")},
gO:function(a){return new J.ak(a,a.length,[H.y(a,0)])},
gG:function(a){return H.cF(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.A(P.aq("set length"))
if(b<0)throw H.j(P.b_(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.j(H.cb(a,b))
return a[b]},
n:function(a,b,c){H.H(c,H.y(a,0))
if(!!a.immutable$list)H.A(P.aq("indexed set"))
if(b>=a.length||b<0)throw H.j(H.cb(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.k9.prototype={}
J.ak.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.j(H.t(s))
u=t.c
if(u>=r){t.scC(null)
return!1}t.scC(s[u]);++t.c
return!0},
scC:function(a){this.d=H.H(a,H.y(this,0))},
$iaT:1}
J.cw.prototype={
hE:function(a,b){var u
H.lC(b)
if(typeof b!=="number")throw H.j(H.bL(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbh(b)
if(this.gbh(a)===u)return 0
if(this.gbh(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbh:function(a){return a===0?1/a<0:a<0},
ir:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.j(P.aq(""+a+".toInt()"))},
c5:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.j(P.aq(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.aq(""+a+".round()"))},
dS:function(a,b){var u
if(b>20)throw H.j(P.b_(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbh(a))return"-"+u
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
dZ:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ea:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d3(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.d3(a,b)},
d3:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.j(P.aq("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
bc:function(a,b){var u
if(a>0)u=this.hc(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hc:function(a,b){return b>31?0:a>>>b},
$iD:1,
$ia7:1}
J.ds.prototype={$iq:1}
J.dr.prototype={}
J.bC.prototype={
bX:function(a,b){if(b<0)throw H.j(H.cb(a,b))
if(b>=a.length)H.A(H.cb(a,b))
return a.charCodeAt(b)},
aJ:function(a,b){if(b>=a.length)throw H.j(H.cb(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.j(P.k_(b,null,null))
return a+b},
bt:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b7:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.j(P.hH(b,null))
if(b>c)throw H.j(P.hH(b,null))
if(c>a.length)throw H.j(P.hH(c,null))
return a.substring(b,c)},
aq:function(a,b){return this.b7(a,b,null)},
iu:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ag:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikY:1,
$ii:1}
H.r.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.bX(this.a,b)},
$ae4:function(){return[P.q]},
$aw:function(){return[P.q]},
$ae:function(){return[P.q]},
$ab:function(){return[P.q]}}
H.fz.prototype={}
H.bX.prototype={
gO:function(a){var u=this
return new H.cx(u,u.gm(u),[H.aj(u,"bX",0)])},
bq:function(a,b){return this.e6(0,H.m(b,{func:1,ret:P.M,args:[H.aj(this,"bX",0)]}))}}
H.cx.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.ku(s),q=r.gm(s)
if(t.b!==q)throw H.j(P.bt(s))
u=t.c
if(u>=q){t.saV(null)
return!1}t.saV(r.D(s,u));++t.c
return!0},
saV:function(a){this.d=H.H(a,H.y(this,0))},
$iaT:1}
H.h4.prototype={
gO:function(a){return new H.h5(J.bP(this.a),this.b,this.$ti)},
gm:function(a){return J.bQ(this.a)},
D:function(a,b){return this.b.$1(J.jZ(this.a,b))},
$ae:function(a,b){return[b]}}
H.h5.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saV(u.c.$1(t.gE(t)))
return!0}u.saV(null)
return!1},
gE:function(a){return this.a},
saV:function(a){this.a=H.H(a,H.y(this,1))},
$aaT:function(a,b){return[b]}}
H.h6.prototype={
gm:function(a){return J.bQ(this.a)},
D:function(a,b){return this.b.$1(J.jZ(this.a,b))},
$abX:function(a,b){return[b]},
$ae:function(a,b){return[b]}}
H.cT.prototype={
gO:function(a){return new H.iV(J.bP(this.a),this.b,this.$ti)}}
H.iV.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.B(t.$1(u.gE(u))))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.bV.prototype={}
H.e4.prototype={}
H.e3.prototype={}
H.is.prototype={
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
H.hy.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fW.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.iD.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jX.prototype={
$1:function(a){if(!!J.W(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eL.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iao:1}
H.cm.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibx:1,
giv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ib.prototype={}
H.i1.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cf(u)+"'"}}
H.ci.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ci))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cF(this.a)
else u=typeof t!=="object"?J.bO(t):H.cF(t)
return(u^H.cF(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.cG(u))+"'")}}
H.iu.prototype={
i:function(a){return this.a}}
H.fj.prototype={
i:function(a){return this.a}}
H.hP.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.iW.prototype={
i:function(a){return"Assertion failed: "+P.dp(this.a)}}
H.a0.prototype={
gm:function(a){return this.a},
ga6:function(a){return new H.dx(this,[H.y(this,0)])},
dg:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cM(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cM(t,b)}else return s.hV(b)},
hV:function(a){var u=this.d
if(u==null)return!1
return this.c6(this.bB(u,J.bO(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.ba(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.ba(r,b)
s=t==null?null:t.b
return s}else return q.hW(b)},
hW:function(a){var u,t,s=this.d
if(s==null)return
u=this.bB(s,J.bO(a)&0x3ffffff)
t=this.c6(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.H(b,H.y(o,0))
H.H(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.cD(u==null?o.b=o.bM():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cD(t==null?o.c=o.bM():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bM()
r=J.bO(b)&0x3ffffff
q=o.bB(s,r)
if(q==null)o.bR(s,r,[o.bN(b,c)])
else{p=o.c6(q,b)
if(p>=0)q[p].b=c
else q.push(o.bN(b,c))}}},
J:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.j(P.bt(s))
u=u.c}},
cD:function(a,b,c){var u,t=this
H.H(b,H.y(t,0))
H.H(c,H.y(t,1))
u=t.ba(a,b)
if(u==null)t.bR(a,b,t.bN(b,c))
else u.b=c},
eW:function(){this.r=this.r+1&67108863},
bN:function(a,b){var u,t=this,s=new H.fZ(H.H(a,H.y(t,0)),H.H(b,H.y(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eW()
return s},
c6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a1(a[t].a,b))return t
return-1},
i:function(a){return P.kU(this)},
ba:function(a,b){return a[b]},
bB:function(a,b){return a[b]},
bR:function(a,b,c){a[b]=c},
eD:function(a,b){delete a[b]},
cM:function(a,b){return this.ba(a,b)!=null},
bM:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bR(t,u,t)
this.eD(t,u)
return t}}
H.fZ.prototype={}
H.dx.prototype={
gm:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.h_(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h_.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.j(P.bt(t))
else{t=u.c
if(t==null){u.scP(null)
return!1}else{u.scP(t.a)
u.c=u.c.c
return!0}}},
scP:function(a){this.d=H.H(a,H.y(this,0))},
$iaT:1}
H.jO.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.jQ.prototype={
$1:function(a){return this.a(H.Q(a))},
$S:33}
H.fV.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ikY:1}
H.cC.prototype={$ioa:1}
H.dF.prototype={
gm:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cB.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]},
$abV:function(){return[P.D]},
$aw:function(){return[P.D]},
$ie:1,
$ae:function(){return[P.D]},
$ib:1,
$ab:function(){return[P.D]}}
H.dG.prototype={
$abV:function(){return[P.q]},
$aw:function(){return[P.q]},
$ie:1,
$ae:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.hq.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.hr.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.hs.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.ht.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.hu.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.dH.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bJ(b,a,a.length)
return a[b]},
$iob:1}
H.hv.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bJ(b,a,a.length)
return a[b]},
$ioc:1}
H.cX.prototype={}
H.cY.prototype={}
H.cZ.prototype={}
H.d_.prototype={}
P.iY.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:19}
P.iX.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.iZ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.j_.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eR.prototype={
em:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ca(new P.jz(this,b),0),a)
else throw H.j(P.aq("`setTimeout()` not found."))},
en:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ca(new P.jy(this,a,Date.now(),b),0),a)
else throw H.j(P.aq("Periodic timer."))},
$ib4:1}
P.jz.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jy.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.ea(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b9.prototype={
i_:function(a){if((this.c&15)!==6)return!0
return this.b.b.cj(H.m(this.d,{func:1,ret:P.M,args:[P.P]}),a.a,P.M,P.P)},
hU:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.f7(u,{func:1,args:[P.P,P.ao]}))return H.kt(r.il(u,a.a,a.b,null,t,P.ao),s)
else return H.kt(r.cj(H.m(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aE.prototype={
dR:function(a,b,c){var u,t,s,r=H.y(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Z
if(u!==C.f){H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.nf(b,u)}t=new P.aE($.Z,[c])
s=b==null?1:3
this.cE(new P.b9(t,s,a,b,[r,c]))
return t},
iq:function(a,b){return this.dR(a,null,b)},
cE:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib9")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaE")
s=u.a
if(s<4){u.cE(a)
return}t.a=s
t.c=u.c}P.jJ(null,null,t.b,H.m(new P.j7(t,a),{func:1,ret:-1}))}},
cY:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib9")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaE")
u=q.a
if(u<4){q.cY(a)
return}p.a=u
p.c=q.c}o.a=p.bb(a)
P.jJ(null,null,p.b,H.m(new P.jb(o,p),{func:1,ret:-1}))}},
bQ:function(){var u=H.k(this.c,"$ib9")
this.c=null
return this.bb(u)},
bb:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cI:function(a){var u,t,s=this,r=H.y(s,0)
H.kt(a,{futureOr:1,type:r})
u=s.$ti
if(H.kq(a,"$ict",u,"$act"))if(H.kq(a,"$iaE",u,null))P.lj(a,s)
else P.mL(a,s)
else{t=s.bQ()
H.H(a,r)
s.a=4
s.c=a
P.cW(s,t)}},
cJ:function(a,b){var u,t=this
H.k(b,"$iao")
u=t.bQ()
t.a=8
t.c=new P.ae(a,b)
P.cW(t,u)},
$ict:1}
P.j7.prototype={
$0:function(){P.cW(this.a,this.b)},
$S:2}
P.jb.prototype={
$0:function(){P.cW(this.b,this.a.a)},
$S:2}
P.j8.prototype={
$1:function(a){var u=this.a
u.a=0
u.cI(a)},
$S:19}
P.j9.prototype={
$2:function(a,b){H.k(b,"$iao")
this.a.cJ(a,b)},
$1:function(a){return this.$2(a,null)},
$S:34}
P.ja.prototype={
$0:function(){this.a.cJ(this.b,this.c)},
$S:2}
P.je.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dO(H.m(s.d,{func:1}),null)}catch(r){u=H.ax(r)
t=H.cd(r)
if(o.d){s=H.k(o.a.a.c,"$iae").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iae")
else q.b=new P.ae(u,t)
q.a=!0
return}if(!!J.W(n).$ict){if(n instanceof P.aE&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iae")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iq(new P.jf(p),null)
s.a=!1}},
$S:3}
P.jf.prototype={
$1:function(a){return this.a},
$S:39}
P.jd.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.H(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.cj(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ax(o)
t=H.cd(o)
s=n.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:3}
P.jc.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iae")
r=m.c
if(H.B(r.i_(u))&&r.e!=null){q=m.b
q.b=r.hU(u)
q.a=!1}}catch(p){t=H.ax(p)
s=H.cd(p)
r=H.k(m.a.a.c,"$iae")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:3}
P.ec.prototype={}
P.i4.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.aE($.Z,[P.q])
r.a=0
u=H.y(s,0)
t=H.m(new P.i6(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.i7(r,q),{func:1,ret:-1})
W.a6(s.a,s.b,t,!1,u)
return q}}
P.i6.prototype={
$1:function(a){H.H(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.y(this.b,0)]}}}
P.i7.prototype={
$0:function(){this.b.cI(this.a.a)},
$S:2}
P.cL.prototype={}
P.i5.prototype={}
P.b4.prototype={}
P.ae.prototype={
i:function(a){return H.h(this.a)},
$ibw:1}
P.jC.prototype={$ioq:1}
P.jI.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dJ():s
s=this.b
if(s==null)throw H.j(t)
u=H.j(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jl.prototype={
im:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.f===$.Z){a.$0()
return}P.lp(r,r,this,a,-1)}catch(s){u=H.ax(s)
t=H.cd(s)
P.jH(r,r,this,u,H.k(t,"$iao"))}},
io:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.f===$.Z){a.$1(b)
return}P.lq(r,r,this,a,b,-1,c)}catch(s){u=H.ax(s)
t=H.cd(s)
P.jH(r,r,this,u,H.k(t,"$iao"))}},
hC:function(a,b){return new P.jn(this,H.m(a,{func:1,ret:b}),b)},
bT:function(a){return new P.jm(this,H.m(a,{func:1,ret:-1}))},
da:function(a,b){return new P.jo(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
dO:function(a,b){H.m(a,{func:1,ret:b})
if($.Z===C.f)return a.$0()
return P.lp(null,null,this,a,b)},
cj:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.Z===C.f)return a.$1(b)
return P.lq(null,null,this,a,b,c,d)},
il:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.Z===C.f)return a.$2(b,c)
return P.ng(null,null,this,a,b,c,d,e,f)}}
P.jn.prototype={
$0:function(){return this.a.dO(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jm.prototype={
$0:function(){return this.a.im(this.b)},
$S:3}
P.jo.prototype={
$1:function(a){var u=this.c
return this.a.io(this.b,H.H(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jj.prototype={
gO:function(a){var u=this,t=new P.es(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
P:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ic7")!=null}else{t=this.ey(b)
return t}},
ey:function(a){var u=this.d
if(u==null)return!1
return this.bz(this.cQ(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.H(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cF(u==null?s.b=P.kk():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cF(t==null?s.c=P.kk():t,b)}else return s.eo(0,b)},
eo:function(a,b){var u,t,s,r=this
H.H(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.kk()
t=r.cK(b)
s=u[t]
if(s==null)u[t]=[r.bw(b)]
else{if(r.bz(s,b)>=0)return!1
s.push(r.bw(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h_(this.c,b)
else return this.fZ(0,b)},
fZ:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cQ(r,b)
t=s.bz(u,b)
if(t<0)return!1
s.d4(u.splice(t,1)[0])
return!0},
cF:function(a,b){H.H(b,H.y(this,0))
if(H.k(a[b],"$ic7")!=null)return!1
a[b]=this.bw(b)
return!0},
h_:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ic7")
if(u==null)return!1
this.d4(u)
delete a[b]
return!0},
cH:function(){this.r=1073741823&this.r+1},
bw:function(a){var u,t=this,s=new P.c7(H.H(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cH()
return s},
d4:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cH()},
cK:function(a){return J.bO(a)&1073741823},
cQ:function(a,b){return a[this.cK(b)]},
bz:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a1(a[t].a,b))return t
return-1}}
P.c7.prototype={}
P.es.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.j(P.bt(t))
else{t=u.c
if(t==null){u.scG(null)
return!1}else{u.scG(H.H(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
scG:function(a){this.d=H.H(a,H.y(this,0))},
$iaT:1}
P.h0.prototype={$ie:1,$ib:1}
P.w.prototype={
gO:function(a){return new H.cx(a,this.gm(a),[H.d8(this,a,"w",0)])},
D:function(a,b){return this.j(a,b)},
it:function(a,b){var u,t=this,s=H.c([],[H.d8(t,a,"w",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.n(s,u,t.j(a,u))
return s},
is:function(a){return this.it(a,!0)},
i:function(a){return P.k6(a,"[","]")}}
P.h2.prototype={}
P.h3.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:20}
P.a9.prototype={
J:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.d8(s,a,"a9",0),H.d8(s,a,"a9",1)]})
for(u=J.bP(s.ga6(a));u.u();){t=u.gE(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bQ(this.ga6(a))},
i:function(a){return P.kU(a)},
$iG:1}
P.jq.prototype={
a5:function(a,b){var u
for(u=J.bP(H.n(b,"$ie",this.$ti,"$ae"));u.u();)this.h(0,u.gE(u))},
i:function(a){return P.k6(this,"{","}")},
D:function(a,b){var u,t,s,r=this
P.l4(b,"index")
for(u=P.mP(r,r.r,H.y(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.j(P.X(b,r,"index",null,t))},
$ie:1,
$il8:1}
P.et.prototype={}
P.cn.prototype={}
P.co.prototype={}
P.fB.prototype={
$acn:function(){return[P.i,[P.b,P.q]]}}
P.fR.prototype={
i:function(a){return this.a}}
P.fQ.prototype={
eA:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.bi("")
if(r>b)q.a+=C.c.b7(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.m1(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$aco:function(){return[P.i,P.i]}}
P.iG.prototype={}
P.iH.prototype={
hF:function(a){var u,t,s=P.l5(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jA(u)
if(t.eM(a,0,s)!==s)t.d5(C.c.bX(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mS(0,t.b,u.length)))},
$aco:function(){return[P.i,[P.b,P.q]]}}
P.jA.prototype={
d5:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eM:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bX(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.aJ(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d5(r,C.c.aJ(a,p)))s=p}else if(r<=2047){q=n.b
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
P.M.prototype={}
P.az.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.e.bc(u,30))&1073741823},
i:function(a){var u=this,t=P.ma(H.mu(u)),s=P.dk(H.ms(u)),r=P.dk(H.mo(u)),q=P.dk(H.mp(u)),p=P.dk(H.mr(u)),o=P.dk(H.mt(u)),n=P.mb(H.mq(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.D.prototype={}
P.bv.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bv&&this.a===b.a},
gG:function(a){return C.e.gG(this.a)},
i:function(a){var u,t,s,r=new P.fy(),q=this.a
if(q<0)return"-"+new P.bv(0-q).i(0)
u=r.$1(C.e.a4(q,6e7)%60)
t=r.$1(C.e.a4(q,1e6)%60)
s=new P.fx().$1(q%1e6)
return""+C.e.a4(q,36e8)+":"+H.h(u)+":"+H.h(t)+"."+H.h(s)}}
P.fx.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:22}
P.fy.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:22}
P.bw.prototype={}
P.fb.prototype={
i:function(a){return"Assertion failed"}}
P.dJ.prototype={
i:function(a){return"Throw of null."}}
P.aG.prototype={
gby:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbx:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gby()+o+u
if(!q.a)return t
s=q.gbx()
r=P.dp(q.b)
return t+s+": "+r}}
P.c0.prototype={
gby:function(){return"RangeError"},
gbx:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.fT.prototype={
gby:function(){return"RangeError"},
gbx:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.ab()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gm:function(a){return this.f}}
P.iE.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iC.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cK.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fm.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dp(u)+"."}}
P.hB.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.dU.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.fr.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ek.prototype={
i:function(a){return"Exception: "+this.a}}
P.fL.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.b7(s,0,75)+"...":s
return t+"\n"+r}}
P.bx.prototype={}
P.q.prototype={}
P.e.prototype={
bq:function(a,b){var u=H.aj(this,"e",0)
return new H.cT(this,H.m(b,{func:1,ret:P.M,args:[u]}),[u])},
gm:function(a){var u,t=this.gO(this)
for(u=0;t.u();)++u
return u},
gaF:function(a){var u,t=this.gO(this)
if(!t.u())throw H.j(H.k7())
u=t.gE(t)
if(t.u())throw H.j(H.mf())
return u},
D:function(a,b){var u,t,s
P.l4(b,"index")
for(u=this.gO(this),t=0;u.u();){s=u.gE(u)
if(b===t)return s;++t}throw H.j(P.X(b,this,"index",null,t))},
i:function(a){return P.me(this,"(",")")}}
P.aT.prototype={}
P.b.prototype={$ie:1}
P.G.prototype={}
P.L.prototype={
gG:function(a){return P.P.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
q:function(a,b){return this===b},
gG:function(a){return H.cF(this)},
i:function(a){return"Instance of '"+H.h(H.cG(this))+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.i.prototype={$ikY:1}
P.bi.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.u.prototype={}
W.f9.prototype={
gm:function(a){return a.length}}
W.db.prototype={
i:function(a){return String(a)},
$idb:1}
W.fa.prototype={
i:function(a){return String(a)}}
W.ch.prototype={$ich:1}
W.dd.prototype={}
W.bq.prototype={$ibq:1}
W.bT.prototype={
co:function(a,b,c){if(c!=null)return a.getContext(b,P.no(c))
return a.getContext(b)},
dY:function(a,b){return this.co(a,b,null)},
$ibT:1}
W.cl.prototype={$icl:1}
W.br.prototype={
gm:function(a){return a.length}}
W.cp.prototype={$icp:1}
W.fn.prototype={
gm:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cq.prototype={
gm:function(a){return a.length}}
W.fo.prototype={}
W.aP.prototype={}
W.aQ.prototype={}
W.fp.prototype={
gm:function(a){return a.length}}
W.fq.prototype={
gm:function(a){return a.length}}
W.ft.prototype={
gm:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.fu.prototype={
i:function(a){return String(a)}}
W.dl.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.an,P.a7]]},
$aw:function(){return[[P.an,P.a7]]},
$ie:1,
$ae:function(){return[[P.an,P.a7]]},
$ib:1,
$ab:function(){return[[P.an,P.a7]]},
$aC:function(){return[[P.an,P.a7]]}}
W.dm.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gaE(a))+" x "+H.h(this.gay(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$ian)return!1
return a.left===u.gbj(b)&&a.top===u.gbn(b)&&this.gaE(a)===u.gaE(b)&&this.gay(a)===u.gay(b)},
gG:function(a){return W.ll(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gaE(a)),C.d.gG(this.gay(a)))},
gdc:function(a){return a.bottom},
gay:function(a){return a.height},
gbj:function(a){return a.left},
gci:function(a){return a.right},
gbn:function(a){return a.top},
gaE:function(a){return a.width},
$ian:1,
$aan:function(){return[P.a7]}}
W.fv.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.i]},
$aw:function(){return[P.i]},
$ie:1,
$ae:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aC:function(){return[P.i]}}
W.fw.prototype={
gm:function(a){return a.length}}
W.j1.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$iR")},
h:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.is(this)
return new J.ak(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.R]},
$ae:function(){return[W.R]},
$ab:function(){return[W.R]}}
W.R.prototype={
ghB:function(a){return new W.j3(a)},
gde:function(a){return new W.j1(a,a.children)},
gdf:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ab()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ab()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kM
if(u==null){u=H.c([],[W.av])
t=new W.dI(u)
C.a.h(u,W.lk(null))
C.a.h(u,W.lm())
$.kM=t
d=t}else d=u
u=$.kL
if(u==null){u=new W.eX(d)
$.kL=u
c=u}else{u.a=d
c=u}}if($.bb==null){u=document
t=u.implementation.createHTMLDocument("")
$.bb=t
$.k4=t.createRange()
t=$.bb.createElement("base")
H.k(t,"$ich")
t.href=u.baseURI
$.bb.head.appendChild(t)}u=$.bb
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ibq")}u=$.bb
if(!!this.$ibq)s=u.body
else{s=u.createElement(a.tagName)
$.bb.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.P(C.M,a.tagName)){$.k4.selectNodeContents(s)
r=$.k4.createContextualFragment(b)}else{s.innerHTML=b
r=$.bb.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bb.body
if(s==null?u!=null:s!==u)J.kE(s)
c.cp(r)
document.adoptNode(r)
return r},
hH:function(a,b,c){return this.ae(a,b,c,null)},
e0:function(a,b){a.textContent=null
a.appendChild(this.ae(a,b,null,null))},
$iR:1,
gdP:function(a){return a.tagName}}
W.fA.prototype={
$1:function(a){return!!J.W(H.k(a,"$iE")).$iR},
$S:26}
W.l.prototype={$il:1}
W.f.prototype={
hs:function(a,b,c,d){H.m(c,{func:1,args:[W.l]})
if(c!=null)this.ep(a,b,c,!1)},
ep:function(a,b,c,d){return a.addEventListener(b,H.ca(H.m(c,{func:1,args:[W.l]}),1),!1)},
$if:1}
W.aR.prototype={$iaR:1}
W.fF.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aR]},
$aw:function(){return[W.aR]},
$ie:1,
$ae:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aC:function(){return[W.aR]}}
W.fG.prototype={
gm:function(a){return a.length}}
W.fK.prototype={
gm:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.fP.prototype={
gm:function(a){return a.length}}
W.bW.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibW:1,
$aC:function(){return[W.E]}}
W.by.prototype={$iby:1,
gdh:function(a){return a.data}}
W.cv.prototype={$icv:1}
W.aV.prototype={$iaV:1}
W.dz.prototype={
i:function(a){return String(a)},
$idz:1}
W.hj.prototype={
gm:function(a){return a.length}}
W.hk.prototype={
j:function(a,b){return P.bl(a.get(H.Q(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga6:function(a){var u=H.c([],[P.i])
this.J(a,new W.hl(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.i,null]},
$iG:1,
$aG:function(){return[P.i,null]}}
W.hl.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hm.prototype={
j:function(a,b){return P.bl(a.get(H.Q(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga6:function(a){var u=H.c([],[P.i])
this.J(a,new W.hn(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.i,null]},
$iG:1,
$aG:function(){return[P.i,null]}}
W.hn.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aY.prototype={$iaY:1}
W.ho.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aC:function(){return[W.aY]}}
W.aa.prototype={$iaa:1}
W.ai.prototype={
gaF:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.j(P.l9("No elements"))
if(t>1)throw H.j(P.l9("More than one element"))
return u.firstChild},
a5:function(a,b){var u,t,s,r
H.n(b,"$ie",[W.E],"$ae")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.dq(u,u.length,[H.d8(C.O,u,"C",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aw:function(){return[W.E]},
$ae:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
ii:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.e5(a):u},
hw:function(a,b){return a.appendChild(b)},
$iE:1}
W.cD.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.aZ.prototype={$iaZ:1,
gm:function(a){return a.length}}
W.hE.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aZ]},
$aw:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aC:function(){return[W.aZ]}}
W.hN.prototype={
j:function(a,b){return P.bl(a.get(H.Q(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga6:function(a){var u=H.c([],[P.i])
this.J(a,new W.hO(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.i,null]},
$iG:1,
$aG:function(){return[P.i,null]}}
W.hO.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hQ.prototype={
gm:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.hZ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b0]},
$aw:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aC:function(){return[W.b0]}}
W.b1.prototype={$ib1:1}
W.i_.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b1]},
$aw:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aC:function(){return[W.b1]}}
W.b2.prototype={$ib2:1,
gm:function(a){return a.length}}
W.i2.prototype={
j:function(a,b){return a.getItem(H.Q(b))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga6:function(a){var u=H.c([],[P.i])
this.J(a,new W.i3(u))
return u},
gm:function(a){return a.length},
$aa9:function(){return[P.i,P.i]},
$iG:1,
$aG:function(){return[P.i,P.i]}}
W.i3.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:43}
W.aK.prototype={$iaK:1}
W.c2.prototype={}
W.dV.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=W.mc("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ai(t).a5(0,new W.ai(u))
return t}}
W.i9.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaF(u)
s.toString
u=new W.ai(s)
r=u.gaF(u)
t.toString
r.toString
new W.ai(t).a5(0,new W.ai(r))
return t}}
W.ia.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaF(u)
t.toString
s.toString
new W.ai(t).a5(0,new W.ai(s))
return t}}
W.cN.prototype={$icN:1}
W.b3.prototype={$ib3:1}
W.aL.prototype={$iaL:1}
W.ic.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aL]},
$aw:function(){return[W.aL]},
$ie:1,
$ae:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aC:function(){return[W.aL]}}
W.id.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b3]},
$aw:function(){return[W.b3]},
$ie:1,
$ae:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aC:function(){return[W.b3]}}
W.ik.prototype={
gm:function(a){return a.length}}
W.b5.prototype={$ib5:1}
W.aM.prototype={$iaM:1}
W.ip.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b5]},
$aw:function(){return[W.b5]},
$ie:1,
$ae:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$aC:function(){return[W.b5]}}
W.iq.prototype={
gm:function(a){return a.length}}
W.bG.prototype={}
W.iF.prototype={
i:function(a){return String(a)}}
W.iU.prototype={
gm:function(a){return a.length}}
W.b8.prototype={
ghK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.aq("deltaY is not supported"))},
ghJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.aq("deltaX is not supported"))},
$ib8:1}
W.cU.prototype={
h1:function(a,b){return a.requestAnimationFrame(H.ca(H.m(b,{func:1,ret:-1,args:[P.a7]}),1))},
eG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cV.prototype={$icV:1}
W.j2.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.S]},
$aw:function(){return[W.S]},
$ie:1,
$ae:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aC:function(){return[W.S]}}
W.ef.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$ian)return!1
return a.left===u.gbj(b)&&a.top===u.gbn(b)&&a.width===u.gaE(b)&&a.height===u.gay(b)},
gG:function(a){return W.ll(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gay:function(a){return a.height},
gaE:function(a){return a.width}}
W.jg.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aS]},
$aw:function(){return[W.aS]},
$ie:1,
$ae:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aC:function(){return[W.aS]}}
W.ey.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.jt.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b2]},
$aw:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aC:function(){return[W.b2]}}
W.ju.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aK]},
$aw:function(){return[W.aK]},
$ie:1,
$ae:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aC:function(){return[W.aK]}}
W.j0.prototype={
J:function(a,b){var u,t,s,r,q
H.m(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=this.ga6(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga6:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.i])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.k(r[t],"$icV")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa9:function(){return[P.i,P.i]},
$aG:function(){return[P.i,P.i]}}
W.j3.prototype={
j:function(a,b){return this.a.getAttribute(H.Q(b))},
gm:function(a){return this.ga6(this).length}}
W.j4.prototype={}
W.kj.prototype={}
W.j5.prototype={}
W.j6.prototype={
$1:function(a){return this.a.$1(H.k(a,"$il"))},
$S:46}
W.bI.prototype={
eg:function(a){var u
if($.en.a===0){for(u=0;u<262;++u)$.en.n(0,C.L[u],W.nx())
for(u=0;u<12;++u)$.en.n(0,C.m[u],W.ny())}},
aO:function(a){return $.lX().P(0,W.cr(a))},
ao:function(a,b,c){var u=$.en.j(0,H.h(W.cr(a))+"::"+b)
if(u==null)u=$.en.j(0,"*::"+b)
if(u==null)return!1
return H.kp(u.$4(a,b,c,this))},
$iav:1}
W.C.prototype={
gO:function(a){return new W.dq(a,this.gm(a),[H.d8(this,a,"C",0)])}}
W.dI.prototype={
aO:function(a){return C.a.d9(this.a,new W.hx(a))},
ao:function(a,b,c){return C.a.d9(this.a,new W.hw(a,b,c))},
$iav:1}
W.hx.prototype={
$1:function(a){return H.k(a,"$iav").aO(this.a)},
$S:17}
W.hw.prototype={
$1:function(a){return H.k(a,"$iav").ao(this.a,this.b,this.c)},
$S:17}
W.eG.prototype={
el:function(a,b,c,d){var u,t,s
this.a.a5(0,c)
u=b.bq(0,new W.jr())
t=b.bq(0,new W.js())
this.b.a5(0,u)
s=this.c
s.a5(0,C.N)
s.a5(0,t)},
aO:function(a){return this.a.P(0,W.cr(a))},
ao:function(a,b,c){var u=this,t=W.cr(a),s=u.c
if(s.P(0,H.h(t)+"::"+b))return u.d.hv(c)
else if(s.P(0,"*::"+b))return u.d.hv(c)
else{s=u.b
if(s.P(0,H.h(t)+"::"+b))return!0
else if(s.P(0,"*::"+b))return!0
else if(s.P(0,H.h(t)+"::*"))return!0
else if(s.P(0,"*::*"))return!0}return!1},
$iav:1}
W.jr.prototype={
$1:function(a){return!C.a.P(C.m,H.Q(a))},
$S:16}
W.js.prototype={
$1:function(a){return C.a.P(C.m,H.Q(a))},
$S:16}
W.jw.prototype={
ao:function(a,b,c){if(this.e9(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.P(0,b)
return!1}}
W.jx.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.Q(a))},
$S:29}
W.jv.prototype={
aO:function(a){var u=J.W(a)
if(!!u.$icH)return!1
u=!!u.$io
if(u&&W.cr(a)==="foreignObject")return!1
if(u)return!0
return!1},
ao:function(a,b,c){if(b==="is"||C.c.bt(b,"on"))return!1
return this.aO(a)},
$iav:1}
W.dq.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scR(J.f8(u.a,t))
u.c=t
return!0}u.scR(null)
u.c=s
return!1},
gE:function(a){return this.d},
scR:function(a){this.d=H.H(a,H.y(this,0))},
$iaT:1}
W.av.prototype={}
W.jp.prototype={$iod:1}
W.eX.prototype={
cp:function(a){new W.jB(this).$2(a,null)},
aY:function(a,b){if(b==null)J.kE(a)
else b.removeChild(a)},
h5:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.m0(a)
n=o.a.getAttribute("is")
H.k(a,"$iR")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.B(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ax(r)}t="element unprintable"
try{t=J.as(a)}catch(r){H.ax(r)}try{s=W.cr(a)
this.h4(H.k(a,"$iR"),b,p,t,s,H.k(o,"$iG"),H.Q(n))}catch(r){if(H.ax(r) instanceof P.aG)throw r
else{this.aY(a,b)
window
q="Removing corrupted element "+H.h(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aY(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aO(a)){o.aY(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ao(a,"is",g)){o.aY(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga6(f)
t=H.c(u.slice(0),[H.y(u,0)])
for(s=f.ga6(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.m2(r)
H.Q(r)
if(!q.ao(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.h(e)+" "+r+'="'+H.h(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.W(a).$icN)o.cp(a.content)},
$inY:1}
W.jB.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h5(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aY(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ax(s)
r=H.k(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iE")}},
$S:30}
W.ee.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
P.eW.prototype={$iby:1,
gdh:function(a){return this.a}}
P.jK.prototype={
$2:function(a,b){this.a[a]=b},
$S:20}
P.fH.prototype={
gbC:function(){var u=this.b,t=H.aj(u,"w",0),s=W.R
return new H.h4(new H.cT(u,H.m(new P.fI(),{func:1,ret:P.M,args:[t]}),[t]),H.m(new P.fJ(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bQ(this.gbC().a)},
j:function(a,b){var u=this.gbC()
return u.b.$1(J.jZ(u.a,b))},
gO:function(a){var u=P.kT(this.gbC(),!1,W.R)
return new J.ak(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.R]},
$ae:function(){return[W.R]},
$ab:function(){return[W.R]}}
P.fI.prototype={
$1:function(a){return!!J.W(H.k(a,"$iE")).$iR},
$S:26}
P.fJ.prototype={
$1:function(a){return H.p(H.k(a,"$iE"),"$iR")},
$S:31}
P.jk.prototype={
gci:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.y(this,0))},
gdc:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.y(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.h(u.a)+", "+H.h(u.b)+") "+H.h(u.c)+" x "+H.h(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$ian){t=p.a
if(t==u.gbj(b)){s=p.b
if(s==u.gbn(b)){r=p.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.F(r)
q=H.y(p,0)
if(H.H(t+r,q)===u.gci(b)){t=p.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.F(t)
u=H.H(s+t,q)===u.gdc(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.bO(s),q=t.b,p=J.bO(q),o=t.c
if(typeof s!=="number")return s.C()
if(typeof o!=="number")return H.F(o)
u=H.y(t,0)
o=C.e.gG(H.H(s+o,u))
s=t.d
if(typeof q!=="number")return q.C()
if(typeof s!=="number")return H.F(s)
u=C.e.gG(H.H(q+s,u))
return P.mO(P.ji(P.ji(P.ji(P.ji(0,r),p),o),u))}}
P.an.prototype={
gbj:function(a){return this.a},
gbn:function(a){return this.b},
gaE:function(a){return this.c},
gay:function(a){return this.d}}
P.bc.prototype={$ibc:1}
P.fY.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bc]},
$ie:1,
$ae:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aC:function(){return[P.bc]}}
P.bf.prototype={$ibf:1}
P.hz.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bf]},
$ie:1,
$ae:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aC:function(){return[P.bf]}}
P.hG.prototype={
gm:function(a){return a.length}}
P.cH.prototype={$icH:1}
P.i8.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.i]},
$ie:1,
$ae:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aC:function(){return[P.i]}}
P.o.prototype={
gde:function(a){return new P.fH(a,new W.ai(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.av])
C.a.h(p,W.lk(null))
C.a.h(p,W.lm())
C.a.h(p,new W.jv())
c=new W.eX(new W.dI(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.o).hH(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ai(s)
q=p.gaF(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$io:1}
P.bj.prototype={$ibj:1}
P.ir.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bj]},
$ie:1,
$ae:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aC:function(){return[P.bj]}}
P.eq.prototype={}
P.er.prototype={}
P.eB.prototype={}
P.eC.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.fd.prototype={
gm:function(a){return a.length}}
P.fe.prototype={
j:function(a,b){return P.bl(a.get(H.Q(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga6:function(a){var u=H.c([],[P.i])
this.J(a,new P.ff(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.i,null]},
$iG:1,
$aG:function(){return[P.i,null]}}
P.ff.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.fg.prototype={
gm:function(a){return a.length}}
P.bR.prototype={}
P.hA.prototype={
gm:function(a){return a.length}}
P.ed.prototype={}
P.de.prototype={$ide:1}
P.dM.prototype={$idM:1}
P.c1.prototype={
dQ:function(a,b,c,d,e,f,g){var u,t=J.W(g)
if(!!t.$iby)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.np(g))
return}if(!!t.$icv)t=!0
else t=!1
if(t){this.hh(a,b,c,d,e,f,g)
return}throw H.j(P.m3("Incorrect number or type of arguments"))},
hh:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
Y:function(a,b,c){return a.uniform1f(b,c)},
bp:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dU:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dV:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dW:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic1:1}
P.dO.prototype={$idO:1}
P.dW.prototype={$idW:1}
P.e2.prototype={$ie2:1}
P.i0.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.X(b,a,null,null,null))
return P.bl(a.item(b))},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.G,,,]]},
$ie:1,
$ae:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aC:function(){return[[P.G,,,]]}}
P.eJ.prototype={}
P.eK.prototype={}
O.a_.prototype={
b9:function(a){var u=this
u.seR(H.c([],[a]))
u.scW(null)
u.scS(null)
u.scX(null)},
cq:function(a,b,c){var u=this,t=H.aj(u,"a_",0)
H.m(b,{func:1,ret:P.M,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.q,[P.e,t]]}
H.m(a,t)
H.m(c,t)
u.scW(b)
u.scS(a)
u.scX(c)},
aR:function(a,b){return this.cq(a,null,b)},
cV:function(a){var u
H.n(a,"$ie",[H.aj(this,"a_",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cw:function(a,b){var u
H.n(b,"$ie",[H.aj(this,"a_",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.ak(u,u.length,[H.y(u,0)])},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aj(s,"a_",0)
H.H(b,r)
r=[r]
if(H.B(s.cV(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cw(t,H.c([b],r))}},
a5:function(a,b){var u,t,s=this
H.n(b,"$ie",[H.aj(s,"a_",0)],"$ae")
if(H.B(s.cV(b))){u=s.a
t=u.length
C.a.a5(u,b)
s.cw(t,b)}},
seR:function(a){this.a=H.n(a,"$ib",[H.aj(this,"a_",0)],"$ab")},
scW:function(a){this.b=H.m(a,{func:1,ret:P.M,args:[[P.e,H.aj(this,"a_",0)]]})},
scS:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.q,[P.e,H.aj(this,"a_",0)]]})},
scX:function(a){H.m(a,{func:1,ret:-1,args:[P.q,[P.e,H.aj(this,"a_",0)]]})},
$ie:1}
O.cz.prototype={
gm:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.N():u},
aG:function(){var u=this.b
if(u!=null)u.w(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.a.gbi(u)
else return V.bY()},
bm:function(a){var u=this.a
if(a==null)C.a.h(u,V.bY())
else C.a.h(u,a)
this.aG()},
aA:function(){var u=this.a
if(u.length>0){u.pop()
this.aG()}},
sbE:function(a){this.a=H.n(a,"$ib",[V.al],"$ab")}}
E.fh.prototype={}
E.ag.prototype={
sbr:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().S(0,s.gdJ())
u=s.c
if(u!=null)u.gp().h(0,s.gdJ())
t=new D.J("shape",r,s.c,[F.dP])
t.b=!0
s.bk(t)}},
ak:function(a,b){var u
for(u=this.y.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.ak(0,b)},
a9:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga_(s))
s.aG()
a.cg(t.f)
s=a.dy
u=(s&&C.a).gbi(s)
if(u!=null&&t.d!=null)u.dM(a,t)
for(s=t.y.a,s=new J.ak(s,s.length,[H.y(s,0)]);s.u();)s.d.a9(a)
a.cf()
a.dx.aA()},
bk:function(a){var u=this.z
if(u!=null)u.w(a)},
a0:function(){return this.bk(null)},
dK:function(a){H.k(a,"$ix")
this.e=null
this.bk(a)},
i6:function(){return this.dK(null)},
dI:function(a){this.bk(H.k(a,"$ix"))},
i3:function(){return this.dI(null)},
i2:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ie",[E.ag],"$ae")
for(u=b.length,t=this.gdH(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bU()
o.sad(null)
o.saM(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sad(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a0()},
i5:function(a,b){var u,t
H.n(b,"$ie",[E.ag],"$ae")
for(u=b.gO(b),t=this.gdH();u.u();)u.gE(u).gp().S(0,t)
this.a0()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sef:function(a,b){this.y=H.n(b,"$ia_",[E.ag],"$aa_")},
$ibZ:1}
E.hJ.prototype={
ec:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cz()
t=[V.al]
u.sbE(H.c([],t))
u.b=null
u.gp().h(0,new E.hK(s))
s.cy=u
u=new O.cz()
u.sbE(H.c([],t))
u.b=null
u.gp().h(0,new E.hL(s))
s.db=u
u=new O.cz()
u.sbE(H.c([],t))
u.b=null
u.gp().h(0,new E.hM(s))
s.dx=u
s.shg(H.c([],[O.bF]))
u=s.dy;(u&&C.a).h(u,null)
s.shb(new H.a0([P.i,A.cI]))},
gih:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.v(0,u.ga_(u))
s=u}return s},
cg:function(a){var u=this.dy,t=a==null?(u&&C.a).gbi(u):a;(u&&C.a).h(u,t)},
cf:function(){var u=this.dy
if(u.length>1)u.pop()},
d8:function(a){var u=a.b
if(u.length===0)throw H.j(P.z("May not cache a shader with no name."))
if(this.fr.dg(0,u))throw H.j(P.z('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
shg:function(a){this.dy=H.n(a,"$ib",[O.bF],"$ab")},
shb:function(a){this.fr=H.n(a,"$iG",[P.i,A.cI],"$aG")}}
E.hK.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:7}
E.hL.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:7}
E.hM.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:7}
E.dZ.prototype={
cB:function(a){H.k(a,"$ix")
this.dN()},
cA:function(){return this.cB(null)},
ghT:function(){var u,t=this,s=Date.now(),r=C.e.a4(P.kK(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
d_:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.F(r)
u=C.d.c5(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.d.c5(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lc(C.j,s.gik())}},
dN:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.ij(this),{func:1,ret:-1,args:[P.a7]})
C.w.eG(u)
C.w.h1(u,W.lt(t,P.a7))}},
ij:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d_()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.kK(r-s.r.a).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aG()
r=s.db
C.a.sm(r.a,0)
r.aG()
r=s.dx
C.a.sm(r.a,0)
r.aG()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a9(p.e)}s=p.z
if(s!=null)s.w(null)}catch(q){u=H.ax(q)
t=H.cd(q)
P.kA("Error: "+H.h(u))
P.kA("Stack: "+H.h(t))
throw H.j(u)}}}
E.ij.prototype={
$1:function(a){var u
H.lC(a)
u=this.a
if(u.ch){u.ch=!1
u.ij()}},
$S:47}
Z.ea.prototype={$inS:1}
Z.df.prototype={
Z:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ax(s)
t=P.z('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.h(u))
throw H.j(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.h(u.e)+"]"}}
Z.eb.prototype={$inT:1}
Z.ck.prototype={
ax:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
Z:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].Z(a)},
b6:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a9:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.i],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
seN:function(a){this.b=H.n(a,"$ib",[Z.bz],"$ab")},
$io_:1}
Z.bz.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.h(H.cG(this.c))+"'")+"]"}}
Z.bk.prototype={
gcr:function(a){var u=this.a,t=(u&$.aN().a)!==0?3:0
if((u&$.bo().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=3
if((u&$.bp().a)!==0)t+=2
if((u&$.bN().a)!==0)t+=3
if((u&$.d9().a)!==0)t+=3
if((u&$.da().a)!==0)t+=4
if((u&$.cg().a)!==0)++t
return(u&$.bm().a)!==0?t+4:t},
hx:function(a){var u,t=$.aN(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.da()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0)if(u===a)return t
return $.lW()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bk))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.i]),t=this.a
if((t&$.aN().a)!==0)C.a.h(u,"Pos")
if((t&$.bo().a)!==0)C.a.h(u,"Norm")
if((t&$.bn().a)!==0)C.a.h(u,"Binm")
if((t&$.bp().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bN().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d9().a)!==0)C.a.h(u,"Clr3")
if((t&$.da().a)!==0)C.a.h(u,"Clr4")
if((t&$.cg().a)!==0)C.a.h(u,"Weight")
if((t&$.bm().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fk.prototype={}
D.bU.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.m(b,u)
if(this.a==null)this.sad(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.b
t=(u&&C.a).S(u,b)||t}return t},
w:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.J(P.kT(u,!0,{func:1,ret:-1,args:[D.x]}),new D.fD(q))
u=r.b
if(u!=null){r.saM(H.c([],[{func:1,ret:-1,args:[D.x]}]))
C.a.J(u,new D.fE(q))}return!0},
dk:function(){return this.w(null)},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}},
sad:function(a){this.a=H.n(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saM:function(a){this.b=H.n(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fD.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fE.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.x.prototype={}
D.bA.prototype={}
D.bB.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.dg.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dg))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.dv.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.fX.prototype={
ib:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
i7:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
sfY:function(a){this.d=H.n(a,"$il8",[P.q],"$al8")}}
X.dA.prototype={}
X.h1.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gaP()
r=new X.be(a,V.bg(),q.x,t,s)
r.b=!0
q.z=new P.az(p,!1)
q.x=s
return r},
ce:function(a,b){this.r=a.a
return!1},
b3:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e_()
if(typeof u!=="number")return u.ap()
this.r=(u&~t)>>>0
return!1},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aW(a,b))
return!0},
ic:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.cA(new V.T(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
fs:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dA(c,r.a.gaP(),b)
s.b=!0
t.w(s)
r.y=new P.az(u,!1)
r.x=V.bg()}}
X.au.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.au))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.B(this.b)?"Alt+":""
return u+(H.B(this.c)?"Shift+":"")}}
X.be.prototype={}
X.hp.prototype={
bA:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gaP(),r=new X.be(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ce:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.bA(a,b,!0))
return!0},
b3:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e_()
if(typeof t!=="number")return t.ap()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.bA(a,b,!0))
return!0},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.bA(a,b,!1))
return!0},
ie:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.cA(new V.T(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0},
gdj:function(){var u=this.b
return u==null?this.b=D.N():u},
gcm:function(){var u=this.c
return u==null?this.c=D.N():u},
gdG:function(){var u=this.d
return u==null?this.d=D.N():u}}
X.cA.prototype={}
X.hF.prototype={}
X.e0.prototype={}
X.io.prototype={
aW:function(a,b){var u,t,s,r,q=this
H.n(a,"$ib",[V.a4],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bg()
s=q.a.gaP()
r=new X.e0(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ia:function(a){var u
H.n(a,"$ib",[V.a4],"$ab")
u=this.b
if(u==null)return!1
u.w(this.aW(a,!0))
return!0},
i8:function(a){var u
H.n(a,"$ib",[V.a4],"$ab")
u=this.c
if(u==null)return!1
u.w(this.aW(a,!0))
return!0},
i9:function(a){var u
H.n(a,"$ib",[V.a4],"$ab")
u=this.d
if(u==null)return!1
u.w(this.aW(a,!1))
return!0}}
X.e5.prototype={
gaP:function(){var u=this.a,t=C.h.gdf(u).c
t.toString
u=C.h.gdf(u).d
u.toString
return V.l6(0,0,t,u)},
cN:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dv(u,new X.au(t,a.altKey,a.shiftKey))},
aN:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.au(t,a.altKey,a.shiftKey)},
bS:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.au(t,a.altKey,a.shiftKey)},
au:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.a4(s-q,r-u)},
aX:function(a){return new V.T(a.movementX,a.movementY)},
bP:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
q=C.d.aj(r.pageX)
C.d.aj(r.pageY)
p=o.left
C.d.aj(r.pageX)
C.a.h(n,new V.a4(q-p,C.d.aj(r.pageY)-o.top))}return n},
as:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dg(u,new X.au(t,a.altKey,a.shiftKey))},
bF:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fl:function(a){this.f=!0},
f7:function(a){this.f=!1},
ff:function(a){H.k(a,"$iaa")
if(H.B(this.f)&&this.bF(a))a.preventDefault()},
fp:function(a){var u
H.k(a,"$iaV")
if(!H.B(this.f))return
u=this.cN(a)
this.b.ib(u)},
fn:function(a){var u
H.k(a,"$iaV")
if(!H.B(this.f))return
u=this.cN(a)
this.b.i7(u)},
fu:function(a){var u,t,s,r,q=this
H.k(a,"$iaa")
u=q.a
u.focus()
q.f=!0
q.aN(a)
if(H.B(q.x)){t=q.as(a)
s=q.aX(a)
if(q.d.ce(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.as(a)
r=q.au(a)
if(q.c.ce(t,r))a.preventDefault()},
fA:function(a){var u,t,s,r=this
H.k(a,"$iaa")
r.aN(a)
u=r.as(a)
if(H.B(r.x)){t=r.aX(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.au(a)
if(r.c.b3(u,s))a.preventDefault()},
fj:function(a){var u,t,s,r=this
H.k(a,"$iaa")
if(!r.bF(a)){r.aN(a)
u=r.as(a)
if(H.B(r.x)){t=r.aX(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.au(a)
if(r.c.b3(u,s))a.preventDefault()}},
fw:function(a){var u,t,s,r=this
H.k(a,"$iaa")
r.aN(a)
u=r.as(a)
if(H.B(r.x)){t=r.aX(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.au(a)
if(r.c.b2(u,s))a.preventDefault()},
fh:function(a){var u,t,s,r=this
H.k(a,"$iaa")
if(!r.bF(a)){r.aN(a)
u=r.as(a)
if(H.B(r.x)){t=r.aX(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.au(a)
if(r.c.b2(u,s))a.preventDefault()}},
fC:function(a){var u,t,s=this
H.k(a,"$ib8")
s.aN(a)
u=new V.T((a&&C.v).ghJ(a),C.v.ghK(a)).t(0,180)
if(H.B(s.x)){if(s.d.ic(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.au(a)
if(s.c.ie(u,t))a.preventDefault()},
fE:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.as(s.y)
t=s.au(s.y)
s.d.fs(u,t,r)}},
fU:function(a){var u,t=this
H.k(a,"$iaM")
t.a.focus()
t.f=!0
t.bS(a)
u=t.bP(a)
if(t.e.ia(u))a.preventDefault()},
fQ:function(a){var u
H.k(a,"$iaM")
this.bS(a)
u=this.bP(a)
if(this.e.i8(u))a.preventDefault()},
fS:function(a){var u
H.k(a,"$iaM")
this.bS(a)
u=this.bP(a)
if(this.e.i9(u))a.preventDefault()},
seH:function(a){this.z=H.n(a,"$ib",[[P.cL,P.P]],"$ab")}}
D.bu.prototype={
ar:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.w(a)},
ei:function(){return this.ar(null)},
$ia8:1,
$ibZ:1}
D.a8.prototype={$ibZ:1}
D.dw.prototype={
ar:function(a){var u=this.x
if(u!=null)u.w(a)},
cU:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.w(a)},
fq:function(){return this.cU(null)},
fG:function(a){var u,t,s
H.n(a,"$ie",[D.a8],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(s==null||this.ez(s))return!1}return!0},
f1:function(a,b){var u,t,s,r,q,p,o,n=D.a8
H.n(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gcT(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=H.k(b[q],"$ia8")
if(p instanceof D.bu)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bU()
o.sad(null)
o.saM(null)
o.c=null
o.d=0
p.r=o}H.m(t,s)
if(o.a==null)o.sad(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bA([n])
n.b=!0
this.ar(n)},
fK:function(a,b){var u,t,s,r=D.a8
H.n(b,"$ie",[r],"$ae")
for(u=b.gO(b),t=this.gcT();u.u();){s=u.gE(u)
C.a.S(this.e,s)
s.gp().S(0,t)}r=new D.bB([r])
r.b=!0
this.ar(r)},
ez:function(a){var u=C.a.P(this.e,a)
return u},
seF:function(a){this.e=H.n(a,"$ib",[D.bu],"$ab")},
sfV:function(a){this.f=H.n(a,"$ib",[D.dL],"$ab")},
she:function(a){this.r=H.n(a,"$ib",[D.dT],"$ab")},
$ae:function(){return[D.a8]},
$aa_:function(){return[D.a8]}}
D.dL.prototype={$ia8:1,$ibZ:1}
D.dT.prototype={$ia8:1,$ibZ:1}
V.a2.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.ay.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.fC.prototype={}
V.dE.prototype={
aa:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.D])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dE))return!1
u=b.a
t=$.O().a
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
i:function(a){var u,t,s,r,q=this,p=[P.D],o=V.cc(H.c([q.a,q.d,q.r],p),3,0),n=V.cc(H.c([q.b,q.e,q.x],p),3,0),m=V.cc(H.c([q.c,q.f,q.y],p),3,0)
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
V.al.prototype={
aa:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.D])
return t},
c7:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.O().a)return V.bY()
u=1/b1
t=-n
s=-a0
return V.aX((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aX(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bo:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cl:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ah(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.O().a
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
A:function(a){var u,t,s,r,q,p=this,o=[P.D],n=V.cc(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cc(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cc(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cc(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.A("")}}
V.a4.prototype={
H:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.ah.prototype={
H:function(a,b){return new V.ah(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.bh.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bh))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.dN.prototype={
ga8:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dN))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.T.prototype={
c8:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
u=this.b
if(typeof u!=="number")return u.v()
return new V.T(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.lg
return u==null?$.lg=new V.T(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.T(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=this.a
s=$.O()
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
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.K.prototype={
c8:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c9:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b1:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.K(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.O().a)return V.e9()
return new V.K(this.a/b,this.b/b,this.c/b)},
dF:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.fl.prototype={
bv:function(a){var u=V.nR(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.N():u},
M:function(a){var u=this.y
if(u!=null)u.w(a)},
scn:function(a,b){},
scb:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.O().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bv(u)}s=new D.J("maximumLocation",s,t.b,[P.D])
s.b=!0
t.M(s)}},
scd:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.O().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bv(u)}s=new D.J("minimumLocation",s,t.c,[P.D])
s.b=!0
t.M(s)}},
sa7:function(a,b){var u,t=this
b=t.bv(b)
u=t.d
if(!(Math.abs(u-b)<$.O().a)){t.d=b
u=new D.J("location",u,b,[P.D])
u.b=!0
t.M(u)}},
scc:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.O().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.J("maximumVelocity",r,a,[P.D])
r.b=!0
s.M(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.J("velocity",t,a,[P.D])
t.b=!0
u.M(t)}},
sbZ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.J("dampening",u,a,[P.D])
u.b=!0
this.M(u)}},
ak:function(a,b){var u,t,s,r=this,q=r.f,p=$.O().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa7(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.O().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.di.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.N():u},
aQ:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.di))return!1
return J.a1(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.cu.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.N():u},
M:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.w(a)},
a2:function(){return this.M(null)},
f_:function(a,b){var u,t,s,r,q,p,o,n=U.ab
H.n(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaH(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.m(t,s)
if(o.a==null)o.sad(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.M(n)},
fI:function(a,b){var u,t,s=U.ab
H.n(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gaH();u.u();)u.gE(u).gp().S(0,t)
s=new D.bB([s])
s.b=!0
this.M(s)},
aQ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ab()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ak(r,r.length,[H.y(r,0)]),u=null;r.u();){q=r.d
if(q!=null){t=q.aQ(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.bY():u
r=s.e
if(r!=null)r.aC(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cu))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.a1(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.ab]},
$aa_:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.e6.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.N():u},
M:function(a){var u
H.k(a,"$ix")
u=this.cy
if(u!=null)u.w(a)},
a2:function(){return this.M(null)},
aZ:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdj().h(0,u.gbG())
u.a.c.gdG().h(0,u.gbI())
u.a.c.gcm().h(0,u.gbK())
return!0},
bH:function(a){var u=this
H.k(a,"$ix")
if(!J.a1(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bJ:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$ix"),"$ibe")
if(!H.B(n.y))return
if(H.B(n.x)){u=a.d.H(0,a.y)
u=new V.T(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.B(n.d)){u=a.c
t=a.d.H(0,a.y)
u=new V.T(t.a,t.b).v(0,2).t(0,u.ga8())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.v()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.T(s.a,s.b).v(0,2).t(0,u.ga8())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa7(0,-q*p+o)
n.b.sR(0)
t=t.H(0,a.z)
n.Q=new V.T(t.a,t.b).v(0,2).t(0,u.ga8())}n.a2()},
bL:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.y))return
r.y=!1
if(H.B(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.v()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sR(t*10*s)
r.a2()}},
aQ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ab()
if(q<p){r.ch=p
u=b.y
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aX(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iab:1}
U.e7.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.N():u},
M:function(a){var u
H.k(a,"$ix")
u=this.fx
if(u!=null)u.w(a)},
a2:function(){return this.M(null)},
aZ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdj().h(0,s.gbG())
s.a.c.gdG().h(0,s.gbI())
s.a.c.gcm().h(0,s.gbK())
u=s.a.d
t=u.f
u=t==null?u.f=D.N():t
u.h(0,s.geS())
u=s.a.d
t=u.d
u=t==null?u.d=D.N():t
u.h(0,s.geU())
u=s.a.e
t=u.b
u=t==null?u.b=D.N():t
u.h(0,s.ghn())
u=s.a.e
t=u.d
u=t==null?u.d=D.N():t
u.h(0,s.ghl())
u=s.a.e
t=u.c
u=t==null?u.c=D.N():t
u.h(0,s.ghj())
return!0},
am:function(a){var u=a.a,t=a.b
if(H.B(this.f)){if(typeof u!=="number")return u.N()
u=-u}if(H.B(this.r)){if(typeof t!=="number")return t.N()
t=-t}return new V.T(u,t)},
bH:function(a){var u=this
a=H.p(H.k(a,"$ix"),"$ibe")
if(!J.a1(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bJ:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$ix"),"$ibe")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.H(0,a.y)
u=new V.T(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.am(new V.T(t.a,t.b).v(0,2).t(0,u.ga8()))
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
r=n.am(new V.T(s.a,s.b).v(0,2).t(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa7(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.am(new V.T(t.a,t.b).v(0,2).t(0,u.ga8()))}n.a2()},
bL:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
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
r.a2()}},
eT:function(a){var u=this
if(H.p(H.k(a,"$ix"),"$idA").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eV:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$ix"),"$ibe")
if(!J.a1(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.am(new V.T(s.a,s.b).v(0,2).t(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa7(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.am(new V.T(t.a,t.b).v(0,2).t(0,u.ga8()))
n.a2()},
ho:function(a){var u=this
H.k(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hm:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$ix"),"$ie0")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.H(0,a.y)
u=new V.T(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.am(new V.T(t.a,t.b).v(0,2).t(0,u.ga8()))
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
r=n.am(new V.T(s.a,s.b).v(0,2).t(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa7(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.am(new V.T(t.a,t.b).v(0,2).t(0,u.ga8()))}n.a2()},
hk:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
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
r.a2()}},
aQ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ab()
if(q<p){r.dy=p
u=b.y
r.c.ak(0,u)
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aX(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.v(0,V.aX(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iab:1}
U.e8.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.N():u},
M:function(a){var u=this.r
if(u!=null)u.w(a)},
aZ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.N():t
t=r.geX()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.N():s).h(0,t)
return!0},
eY:function(a){var u,t,s,r,q=this
H.k(a,"$ix")
if(!J.a1(q.b,q.a.b.c))return
H.p(a,"$icA")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.J("zoom",u,r,[P.D])
u.b=!0
q.M(u)}},
aQ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aX(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iab:1}
M.dh.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.N():u},
W:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.w(a)},
aT:function(){return this.W(null)},
fM:function(a,b){var u,t,s,r,q,p,o,n=M.aw
H.n(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gV(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.m(t,s)
if(o.a==null)o.sad(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.W(n)},
fO:function(a,b){var u,t,s=M.aw
H.n(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gV();u.u();)u.gE(u).gp().S(0,t)
s=new D.bB([s])
s.b=!0
this.W(s)},
a9:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();){t=u.d
if(t!=null)t.a9(a)}s.f=!1},
$ae:function(){return[M.aw]},
$aa_:function(){return[M.aw]},
$iaw:1}
M.dj.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.N():u},
W:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.w(a)},
aT:function(){return this.W(null)},
sb_:function(a){var u,t,s=this
if(a==null)a=new X.fS()
u=s.b
if(u!==a){if(u!=null)u.gp().S(0,s.gV())
t=s.b
s.b=a
a.gp().h(0,s.gV())
u=new D.J("camera",t,s.b,[X.bS])
u.b=!0
s.W(u)}},
sb4:function(a,b){var u,t,s=this
if(b==null)b=X.k5(null)
u=s.c
if(u!==b){if(u!=null)u.gp().S(0,s.gV())
t=s.c
s.c=b
b.gp().h(0,s.gV())
u=new D.J("target",t,s.c,[X.cM])
u.b=!0
s.W(u)}},
sb5:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().S(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gV())
s=new D.J("technique",u,t.d,[O.bF])
s.b=!0
t.W(s)}},
a9:function(a){var u=this
a.cg(u.d)
u.c.Z(a)
u.b.Z(a)
u.e.ak(0,a)
u.e.a9(a)
u.b.b6(a)
u.c.toString
a.cf()},
$iaw:1}
M.dn.prototype={
W:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.w(a)},
aT:function(){return this.W(null)},
fb:function(a,b){var u,t,s,r,q,p,o,n=E.ag
H.n(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gV(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bU()
o.sad(null)
o.saM(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sad(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.W(n)},
fd:function(a,b){var u,t,s=E.ag
H.n(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gV();u.u();)u.gE(u).gp().S(0,t)
s=new D.bB([s])
s.b=!0
this.W(s)},
sb_:function(a){var u,t,s=this
if(a==null)a=X.kZ(null)
u=s.b
if(u!==a){if(u!=null)u.gp().S(0,s.gV())
t=s.b
s.b=a
a.gp().h(0,s.gV())
u=new D.J("camera",t,s.b,[X.bS])
u.b=!0
s.W(u)}},
sb4:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().S(0,t.gV())
u=t.c
t.c=b
b.gp().h(0,t.gV())
s=new D.J("target",u,t.c,[X.cM])
s.b=!0
t.W(s)}},
sb5:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().S(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gV())
s=new D.J("technique",u,t.d,[O.bF])
s.b=!0
t.W(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.N():u},
a9:function(a){var u,t=this
a.cg(t.d)
t.c.Z(a)
t.b.Z(a)
u=t.d
if(u!=null)u.ak(0,a)
for(u=t.e.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.ak(0,a)
for(u=t.e.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.a9(a)
t.b.toString
a.cy.aA()
a.db.aA()
t.c.toString
a.cf()},
sex:function(a,b){this.e=H.n(b,"$ia_",[E.ag],"$aa_")},
$iaw:1}
M.aw.prototype={}
A.dc.prototype={}
A.fc.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hP:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
di:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.af.prototype={
gal:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.af))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dD.prototype={
eb:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bi("")
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
A.n7(c0,u)
A.n9(c0,u)
A.n8(c0,u)
A.nb(c0,u)
A.nc(c0,u)
A.na(c0,u)
A.nd(c0,u)
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
b5.dE(0,s.charCodeAt(0)==0?s:s,A.n6(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.p(b5.y.F(0,"invViewMat"),"$iap")
if(t)b5.dy=H.p(b5.y.F(0,"objMat"),"$iap")
if(r)b5.fr=H.p(b5.y.F(0,"viewObjMat"),"$iap")
b5.fy=H.p(b5.y.F(0,"projViewObjMat"),"$iap")
if(c0.ry)b5.k1=H.p(b5.y.F(0,"txt2DMat"),"$icS")
if(c0.x1)b5.k2=H.p(b5.y.F(0,"txtCubeMat"),"$iap")
if(c0.x2)b5.k3=H.p(b5.y.F(0,"colorMat"),"$iap")
b5.ses(H.c([],[A.ap]))
t=c0.y2
if(t>0){b5.k4=H.k(b5.y.F(0,"bendMatCount"),"$iaB")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.A(P.z(b7+q+b8));(s&&C.a).h(s,H.p(m,"$iap"))}}t=c0.a
if(t.a)b5.r2=H.p(b5.y.F(0,"emissionClr"),"$iV")
if(t.b)b5.rx=H.p(b5.y.F(0,"emissionTxt"),"$iad")
t=c0.b
if(t.a)b5.x1=H.p(b5.y.F(0,"ambientClr"),"$iV")
if(t.b)b5.x2=H.p(b5.y.F(0,"ambientTxt"),"$iad")
t=c0.c
if(t.a)b5.y2=H.p(b5.y.F(0,"diffuseClr"),"$iV")
if(t.b)b5.aw=H.p(b5.y.F(0,"diffuseTxt"),"$iad")
t=c0.d
if(t.a)b5.dm=H.p(b5.y.F(0,"invDiffuseClr"),"$iV")
if(t.b)b5.dn=H.p(b5.y.F(0,"invDiffuseTxt"),"$iad")
t=c0.e
s=t.a
if(s||t.b||!1){b5.ds=H.p(b5.y.F(0,"shininess"),"$ia5")
if(s)b5.dq=H.p(b5.y.F(0,"specularClr"),"$iV")
if(t.b)b5.dr=H.p(b5.y.F(0,"specularTxt"),"$iad")}if(c0.f.b)b5.dt=H.p(b5.y.F(0,"bumpTxt"),"$iad")
if(c0.cy){b5.du=H.p(b5.y.F(0,"envSampler"),"$ibH")
t=c0.r
if(t.a)b5.dv=H.p(b5.y.F(0,"reflectClr"),"$iV")
if(t.b)b5.dw=H.p(b5.y.F(0,"reflectTxt"),"$iad")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dz=H.p(b5.y.F(0,"refraction"),"$ia5")
if(s)b5.dA=H.p(b5.y.F(0,"refractClr"),"$iV")
if(t.b)b5.dB=H.p(b5.y.F(0,"refractTxt"),"$iad")}}t=c0.y
if(t.a)b5.dC=H.p(b5.y.F(0,"alpha"),"$ia5")
if(t.b)b5.dD=H.p(b5.y.F(0,"alphaTxt"),"$iad")
t=P.q
s=[t,A.aB]
b5.seE(new H.a0(s))
b5.sej(new H.a0([t,[P.b,A.c3]]))
b5.sfW(new H.a0(s))
b5.sfX(new H.a0([t,[P.b,A.c4]]))
b5.shd(new H.a0(s))
b5.sek(new H.a0([t,[P.b,A.c5]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.c3],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ap()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.A(P.z(b7+g+b8))
H.p(m,"$iV")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.A(P.z(b7+g+b8))
H.p(f,"$iV")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.A(P.z(b7+g+b8))
H.p(e,"$iV")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.A(P.z(b7+g+b8))
H.p(m,"$iV")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.A(P.z(b7+g+b8))
H.p(f,"$iV")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.A(P.z(b7+o+b8))
H.p(e,"$iad")
a=e}else a=b6
C.a.h(h,new A.c3(b,c,d,m,f,a))}b5.c0.n(0,j,h)
q=b5.c_
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.z(b7+o+b8))
q.n(0,j,H.k(m,"$iaB"))}for(t=c0.Q,s=t.length,r=[A.c4],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.A(P.z(b7+o+b8))
H.p(m,"$iV")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.A(P.z(b7+o+b8))
H.p(f,"$iV")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.A(P.z(b7+o+b8))
H.p(e,"$iV")
if(typeof j!=="number")return j.ap()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.A(P.z(b7+o+b8))
H.p(a0,"$icS")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.A(P.z(b7+o+b8))
H.p(a0,"$ibH")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.A(P.z(b7+o+b8))
H.p(a0,"$ibH")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.A(P.z(b7+o+b8))
H.p(a2,"$icR")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.A(P.z(b7+o+b8))
H.p(a0,"$ia5")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.A(P.z(b7+o+b8))
H.p(a2,"$ia5")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.A(P.z(b7+o+b8))
H.p(a5,"$ia5")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.c4(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c2.n(0,j,h)
q=b5.c1
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.z(b7+o+b8))
q.n(0,j,H.k(m,"$iaB"))}for(t=c0.ch,s=t.length,r=[A.c5],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.A(P.z(b7+o+b8))
H.p(m,"$iV")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.A(P.z(b7+o+b8))
H.p(f,"$iV")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.A(P.z(b7+o+b8))
H.p(e,"$iV")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.A(P.z(b7+o+b8))
H.p(a0,"$iV")
if(typeof j!=="number")return j.ap()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.A(P.z(b7+o+b8))
H.p(a2,"$iV")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.A(P.z(b7+o+b8))
H.p(a5,"$iV")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.A(P.z(b7+o+b8))
H.p(a9,"$ia5")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.A(P.z(b7+o+b8))
H.p(b0,"$ia5")
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
if(a2==null)H.A(P.z(b7+g+b8))
H.p(a2,"$icR")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.A(P.z(b7+g+b8))
H.p(a2,"$ia5")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.A(P.z(b7+g+b8))
H.p(a5,"$ia5")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.A(P.z(b7+g+b8))
H.p(a2,"$ia5")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.A(P.z(b7+g+b8))
H.p(a5,"$ia5")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.A(P.z(b7+g+b8))
H.p(a9,"$ia5")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.A(P.z(b7+g+b8))
H.p(a2,"$iad")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.A(P.z(b7+o+b8))
H.p(a2,"$iad")
a3=a2}else a3=b6
C.a.h(h,new A.c5(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c4.n(0,j,h)
q=b5.c3
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.z(b7+o+b8))
q.n(0,j,H.k(m,"$iaB"))}}},
ai:function(a,b){if(b!=null&&b.d)a.e1(b)},
h7:function(a,b){},
ses:function(a){this.r1=H.n(a,"$ib",[A.ap],"$ab")},
seE:function(a){this.c_=H.n(a,"$iG",[P.q,A.aB],"$aG")},
sej:function(a){this.c0=H.n(a,"$iG",[P.q,[P.b,A.c3]],"$aG")},
sfW:function(a){this.c1=H.n(a,"$iG",[P.q,A.aB],"$aG")},
sfX:function(a){this.c2=H.n(a,"$iG",[P.q,[P.b,A.c4]],"$aG")},
shd:function(a){this.c3=H.n(a,"$iG",[P.q,A.aB],"$aG")},
sek:function(a){this.c4=H.n(a,"$iG",[P.q,[P.b,A.c5]],"$aG")}}
A.aH.prototype={
i:function(a){return"dirLight"+H.h(this.a)}}
A.aI.prototype={
i:function(a){return"pointLight"+H.h(this.a)}}
A.aJ.prototype={
i:function(a){return"spotLight"+H.h(this.a)}}
A.h9.prototype={
i:function(a){return this.aw}}
A.c3.prototype={}
A.c4.prototype={}
A.c5.prototype={}
A.cI.prototype={
cv:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dE:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cO(b,35633)
r.f=r.cO(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.B(H.kp(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.A(P.z("Failed to link shader: "+H.h(s)))}r.h8()
r.ha()},
Z:function(a){a.a.useProgram(this.r)
this.x.hP()},
cO:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.kp(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.j(P.z("Error compiling shader '"+H.h(s)+"': "+H.h(u)))}return s},
h8:function(){var u,t,s,r=this,q=H.c([],[A.dc]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dc(p,t.name,s))}r.x=new A.fc(q)},
ha:function(){var u,t,s,r=this,q=H.c([],[A.e1]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hI(t.type,t.size,t.name,s))}r.y=new A.iA(q)},
aK:function(a,b,c){var u=this.a
if(a===1)return new A.aB(u,b,c)
else return A.kg(u,this.r,b,a,c)},
eB:function(a,b,c){var u=this.a
if(a===1)return new A.ad(u,b,c)
else return A.kg(u,this.r,b,a,c)},
eC:function(a,b,c){var u=this.a
if(a===1)return new A.bH(u,b,c)
else return A.kg(u,this.r,b,a,c)},
bd:function(a,b){return new P.ek(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
hI:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aK(b,c,d)
case 5121:return u.aK(b,c,d)
case 5122:return u.aK(b,c,d)
case 5123:return u.aK(b,c,d)
case 5124:return u.aK(b,c,d)
case 5125:return u.aK(b,c,d)
case 5126:return new A.a5(u.a,c,d)
case 35664:return new A.iw(u.a,c,d)
case 35665:return new A.V(u.a,c,d)
case 35666:return new A.cR(u.a,c,d)
case 35667:return new A.ix(u.a,c,d)
case 35668:return new A.iy(u.a,c,d)
case 35669:return new A.iz(u.a,c,d)
case 35674:return new A.iB(u.a,c,d)
case 35675:return new A.cS(u.a,c,d)
case 35676:return new A.ap(u.a,c,d)
case 35678:return u.eB(b,c,d)
case 35680:return u.eC(b,c,d)
case 35670:throw H.j(u.bd("BOOL",c))
case 35671:throw H.j(u.bd("BOOL_VEC2",c))
case 35672:throw H.j(u.bd("BOOL_VEC3",c))
case 35673:throw H.j(u.bd("BOOL_VEC4",c))
default:throw H.j(P.z("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.dR.prototype={}
A.e1.prototype={}
A.iA.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
F:function(a,b){var u=this.j(0,b)
if(u==null)throw H.j(P.z("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aB.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
shq:function(a){H.n(a,"$ib",[P.q],"$ab")}}
A.a5.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.V.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.cR.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.cS.prototype={
ah:function(a){var u=new Float32Array(H.d5(H.n(a,"$ib",[P.D],"$ab")))
C.b.dV(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.ap.prototype={
ah:function(a){var u=new Float32Array(H.d5(H.n(a,"$ib",[P.D],"$ab")))
C.b.dW(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.ad.prototype={
e1:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.bH.prototype={
e2:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.jD.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c9(s.b,b).c9(s.d.c9(s.c,b),c)
s=new V.ah(r.a,r.b,r.c)
if(!J.a1(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a0()}a.sip(r.t(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
u=new V.bh(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a1(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a0()}},
$S:37}
F.a3.prototype={
er:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e9()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dF())return
return s.t(0,Math.sqrt(s.B(s)))},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.B(r)))
r=t.H(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.b1(r.t(0,Math.sqrt(r.B(r))))
return r.t(0,Math.sqrt(r.B(r)))},
bW:function(){var u,t=this
if(t.d!=null)return!0
u=t.er()
if(u==null){u=t.ew()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
eq:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e9()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dF())return
return s.t(0,Math.sqrt(s.B(s)))},
ev:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.O().a){l=d.H(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.H(0,g)
l=new V.ah(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).H(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.B(l)))
l=o.b1(q)
l=l.t(0,Math.sqrt(l.B(l))).b1(o)
q=l.t(0,Math.sqrt(l.B(l)))}return q},
bU:function(){var u,t=this
if(t.e!=null)return!0
u=t.eq()
if(u==null){u=t.ev()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.ag(J.as(s.e),0)+", "+C.c.ag(J.as(t.b.e),0)+", "+C.c.ag(J.as(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.A("")}}
F.bd.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.ag(J.as(u.e),0)+", "+C.c.ag(J.as(this.b.e),0)},
K:function(){return this.A("")}}
F.bE.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ag(J.as(u.e),0)},
K:function(){return this.A("")}}
F.dP.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.N():u},
i0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.X()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){r=g[s]
h.a.h(0,r.hG())}h.a.X()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bE()
if(n.a==null)H.A(P.z("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.mi(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cs(l,k,i)}g=h.e
if(g!=null)g.aC(0)},
av:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.av()||!1
if(!t.a.av())u=!1
s=t.e
if(s!=null)s.aC(0)
return u},
dd:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aN()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bo().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.bN().a)!==0)++s
if((t&$.d9().a)!==0)++s
if((t&$.da().a)!==0)++s
if((t&$.cg().a)!==0)++s
if((t&$.bm().a)!==0)++s
r=a3.gcr(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.D
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.df])
for(n=0,m=0;m<s;++m){l=a3.hx(m)
k=l.gcr(l)
C.a.n(o,m,new Z.df(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].hY(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.n(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.d5(p)),35044)
u.bindBuffer(a0,null)
e=new Z.ck(new Z.ea(a0,f),o,a3)
e.seN(H.c([],[Z.bz]))
if(a.b.b.length!==0){t=P.q
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.X()
C.a.h(d,c.e)}b=Z.ki(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(0,d.length,b))}if(a.c.b.length!==0){t=P.q
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.X()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.X()
C.a.h(d,c.e)}b=Z.ki(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(1,d.length,b))}if(a.d.b.length!==0){t=P.q
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.X()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.X()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.X()
C.a.h(d,c.e)}b=Z.ki(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.i])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.A(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.A(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.A(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.A(t))}return C.a.l(s,"\n")},
a0:function(){var u=this.e
if(u!=null)u.w(null)},
$inZ:1}
F.hS.prototype={
ht:function(a){var u,t,s,r,q,p
H.n(a,"$ib",[F.aC],"$ab")
u=H.c([],[F.a3])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cs(t,q,p))}return u},
hu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ib",[F.aC],"$ab")
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
C.a.h(u,F.cs(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cs(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cs(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cs(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
av:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].bW())s=!1
return s},
bV:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].bU())s=!1
return s},
i:function(a){return this.K()},
A:function(a){var u,t,s,r=H.c([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(a))
return C.a.l(r,"\n")},
K:function(){return this.A("")},
seI:function(a){this.b=H.n(a,"$ib",[F.a3],"$ab")}}
F.hT.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var u,t,s=H.c([],[P.i]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].A(a+(""+u+". ")))}return C.a.l(s,"\n")},
K:function(){return this.A("")},
seO:function(a){this.b=H.n(a,"$ib",[F.bd],"$ab")}}
F.hU.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var u,t,s,r=H.c([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(a))
return C.a.l(r,"\n")},
K:function(){return this.A("")},
sbO:function(a){this.b=H.n(a,"$ib",[F.bE],"$ab")}}
F.aC.prototype={
bY:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iL(u.cx,r,o,t,s,q,p,a,n)},
hG:function(){return this.bY(null)},
sip:function(a){var u
if(!J.a1(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a0()}},
hY:function(a){var u,t,s=this
if(a.q(0,$.aN())){u=s.f
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bo())){u=s.r
t=[P.D]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bn())){u=s.x
t=[P.D]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bp())){u=s.y
t=[P.D]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.bN())){u=s.z
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.d9())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.da())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.cg()))return H.c([s.ch],[P.D])
else if(a.q(0,$.bm())){u=s.cx
t=[P.D]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.D])},
bW:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e9()
t.d.J(0,new F.iT(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
bU:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e9()
t.d.J(0,new F.iS(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t,s=this,r="-",q=H.c([],[P.i])
C.a.h(q,C.c.ag(J.as(s.e),0))
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
C.a.h(q,V.U(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
K:function(){return this.A("")}}
F.iT.prototype={
$1:function(a){var u,t
H.k(a,"$ia3")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:8}
F.iS.prototype={
$1:function(a){var u,t
H.k(a,"$ia3")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:8}
F.iM.prototype={
X:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.j(P.z("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a0()
return!0},
be:function(a,b,c,d,e,f){var u=F.iL(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gm:function(a){return this.c.length},
av:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].bW()
return!0},
bV:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].bU()
return!0},
hD:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a1(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
this.X()
u=H.c([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r)C.a.h(u,t[r].A(a))
return C.a.l(u,"\n")},
K:function(){return this.A("")},
shr:function(a){this.c=H.n(a,"$ib",[F.aC],"$ab")}}
F.iN.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a3]})
C.a.J(u.b,b)
C.a.J(u.c,new F.iO(u,b))
C.a.J(u.d,new F.iP(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
return C.a.l(r,"\n")},
seJ:function(a){this.b=H.n(a,"$ib",[F.a3],"$ab")},
seK:function(a){this.c=H.n(a,"$ib",[F.a3],"$ab")},
seL:function(a){this.d=H.n(a,"$ib",[F.a3],"$ab")}}
F.iO.prototype={
$1:function(a){H.k(a,"$ia3")
if(!J.a1(a.a,this.a))this.b.$1(a)},
$S:8}
F.iP.prototype={
$1:function(a){var u
H.k(a,"$ia3")
u=this.a
if(!J.a1(a.a,u)&&!J.a1(a.b,u))this.b.$1(a)},
$S:8}
F.iQ.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
return C.a.l(r,"\n")},
seP:function(a){this.b=H.n(a,"$ib",[F.bd],"$ab")},
seQ:function(a){this.c=H.n(a,"$ib",[F.bd],"$ab")}}
F.iR.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
return C.a.l(r,"\n")},
sbO:function(a){this.b=H.n(a,"$ib",[F.bE],"$ab")}}
O.dC.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.N():u},
T:function(a){var u
H.k(a,"$ix")
u=this.fr
if(u!=null)u.w(a)},
aU:function(){return this.T(null)},
cZ:function(a){H.k(a,"$ix")
this.a=null
this.T(a)},
h3:function(){return this.cZ(null)},
f3:function(a,b){var u=V.al
H.n(b,"$ie",[u],"$ae")
u=new D.bA([u])
u.b=!0
this.T(u)},
f5:function(a,b){var u=V.al
H.n(b,"$ie",[u],"$ae")
u=new D.bB([u])
u.b=!0
this.T(u)},
cL:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.q,h=new H.a0([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.c([],[A.aH])
h.J(0,new O.hd(j,q))
C.a.bs(q,new O.he())
p=new H.a0([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){o=u[s]
r=o.gb0()
n=p.j(0,o.gb0())
p.n(0,r,n==null?1:n)}m=H.c([],[A.aI])
p.J(0,new O.hf(j,m))
C.a.bs(m,new O.hg())
l=new H.a0([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.t)(i),++s){o=i[s]
t=o.gb0()
r=l.j(0,o.gb0())
l.n(0,t,r==null?1:r)}k=H.c([],[A.aJ])
l.J(0,new O.hh(j,k))
C.a.bs(k,new O.hi())
i=C.e.a4(j.e.a.length+3,4)
j.dy.e
return A.mm(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ac:function(a,b){H.n(a,"$ib",[T.cO],"$ab")
if(b!=null)if(!C.a.P(a,b)){b.a=a.length
C.a.h(a,b)}},
ak:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();){t=u.d
t.toString
s=$.iK
if(s==null)s=$.iK=new V.K(0,0,1)
t.a=s
r=$.iJ
t.d=r==null?$.iJ=new V.K(0,1,0):r
r=$.iI
t.e=r==null?$.iI=new V.K(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bo(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bo(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bo(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
dM:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cL()
u=H.k(b4.fr.j(0,b3.aw),"$idD")
if(u==null){u=A.ml(b3,b4.a)
b4.d8(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dl
b3=b5.e
if(!(b3 instanceof Z.ck))b3=b5.e=null
if(b3==null||!b3.d.q(0,s)){b3=t.k3
if(b3)b5.d.av()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.bV()
q.a.bV()
q=q.e
if(q!=null)q.aC(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.hD()
p=p.e
if(p!=null)p.aC(0)}n=b5.d.dd(new Z.eb(b4.a),s)
n.ax($.aN()).e=b2.a.Q.c
if(b3)n.ax($.bo()).e=b2.a.cx.c
if(r)n.ax($.bn()).e=b2.a.ch.c
if(t.r1)n.ax($.bp()).e=b2.a.cy.c
if(q)n.ax($.bN()).e=b2.a.db.c
if(t.rx)n.ax($.bm()).e=b2.a.dx.c
b5.e=n}b3=T.cO
m=H.c([],[b3])
b2.a.Z(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga_(q)
r=r.dy
r.toString
r.ah(q.aa(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga_(q)
p=b4.dx
p=b4.cx=q.v(0,p.ga_(p))
q=p}r=r.fr
r.toString
r.ah(q.aa(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gih()
p=b4.dx
p=b4.ch=q.v(0,p.ga_(p))
q=p}r=r.fy
r.toString
r.ah(q.aa(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ah(C.k.aa(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ah(C.k.aa(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ah(C.k.aa(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.bp(r.a,r.d,l)
for(r=[P.D],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.k(p,"$ial")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.d5(H.n(p.aa(0,!0),"$ib",r,"$ab")))
C.b.dW(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.U(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ac(m,b2.f.d)
r=b2.a
q=b2.f.d
r.ai(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.U(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ac(m,b2.r.d)
r=b2.a
q=b2.r.d
r.ai(r.x2,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.U(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ac(m,b2.x.d)
r=b2.a
q=b2.x.d
r.ai(r.aw,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.dm
C.b.U(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ac(m,b2.y.d)
r=b2.a
q=b2.y.d
r.ai(r.dn,q)}r=t.e
q=r.a
if(q||r.b||!1){p=b2.a
o=b2.z.ch
p=p.ds
C.b.Y(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.dq
C.b.U(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ac(m,b2.z.d)
r=b2.a
q=b2.z.d
r.ai(r.dr,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.q
h=new H.a0([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.n(0,0,e+1)
d=J.f8(b2.a.c0.j(0,0),e)
o=i.bo(f.a)
c=o.a
b=o.b
a=o.c
a=o.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.b.U(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.b.U(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.t)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.c_.j(0,p)
C.b.bp(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.q
a0=new H.a0([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.D],g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
a1=f.gb0()
e=a0.j(0,a1)
if(e==null)e=0
a0.n(0,a1,e+1)
d=J.f8(b2.a.c2.j(0,a1),e)
a2=i.v(0,f.ga_(f))
b=f.ga_(f)
a=$.cE
b=b.cl(a==null?$.cE=new V.ah(0,0,0):a)
a=d.b
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=$.cE
b=a2.cl(b==null?$.cE=new V.ah(0,0,0):b)
a=d.c
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=f.gbf(f)
a=d.e
C.b.U(a.a,a.d,b.a,b.b,b.c)
f.gaD()
b=a2.c7(0)
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
j=new Float32Array(H.d5(H.n(new V.dE(a,a3,a4,a5,a6,a7,a8,a9,b).aa(0,!0),"$ib",c,"$ab")))
C.b.dV(b0.a,b0.d,!1,j)
f.gaD()
b=f.gaD()
H.n(m,"$ib",o,"$ab")
if(!C.a.P(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaD()
a=b.gca(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaS()
b=f.ge3()
a=d.x
a.toString
a3=b.ghM(b)
a4=b.ghN(b)
a5=b.ghO()
b=b.ghL()
C.b.dU(a.a,a.d,a3,a4,a5,b)
b=f.gaS()
if(!C.a.P(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaS()
a=b.gca(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.ghQ()){b=f.ghy()
a=d.y
C.b.Y(a.a,a.d,b)
b=f.ghz()
a=d.z
C.b.Y(a.a,a.d,b)
b=f.ghA()
a=d.Q
C.b.Y(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.t)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.c1.j(0,p)
C.b.bp(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.q
b1=new H.a0([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
a1=f.gb0()
e=b1.j(0,a1)
if(e==null)e=0
b1.n(0,a1,e+1)
d=J.f8(b2.a.c4.j(0,a1),e)
o=f.gig(f)
c=d.b
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.giy(f).iJ()
c=d.c
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=i.cl(f.gig(f))
c=d.d
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.gbf(f)
c=d.e
C.b.U(c.a,c.d,o.a,o.b,o.c)
f.gaD()
o=f.gcm()
c=d.f
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.gci(f)
c=d.r
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.giK()
c=d.x
C.b.Y(c.a,c.d,o)
o=f.giL()
c=d.y
C.b.Y(c.a,c.d,o)
f.gaD()
o=f.gaD()
H.n(m,"$ib",b3,"$ab")
if(!C.a.P(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaD()
c=o.gca(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gaS()
o=f.ge3()
c=d.z
c.toString
b=o.ghM(o)
a=o.ghN(o)
a3=o.ghO()
o=o.ghL()
C.b.dU(c.a,c.d,b,a,a3,o)
o=f.gaS()
if(!C.a.P(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaS()
c=o.gca(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.giz()){o=f.gix()
c=d.Q
C.b.Y(c.a,c.d,o)
o=f.giw()
c=d.ch
C.b.Y(c.a,c.d,o)}if(f.ghQ()){o=f.ghy()
c=d.cx
C.b.Y(c.a,c.d,o)
o=f.ghz()
c=d.cy
C.b.Y(c.a,c.d,o)
o=f.ghA()
c=d.db
C.b.Y(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.t)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.c3.j(0,q)
C.b.bp(q.a,q.d,l)}}}if(t.f.b){b2.ac(m,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.ai(b3.dt,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga_(r).c7(0)}b3=b3.id
b3.toString
b3.ah(r.aa(0,!0))}if(t.cy){b2.ac(m,b2.ch)
b3=b2.a
r=b2.ch
b3.h7(b3.du,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dv
C.b.U(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ac(m,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.ai(b3.dw,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
p=b2.cy.ch
q=q.dz
C.b.Y(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.dA
C.b.U(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ac(m,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.ai(b3.dB,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
p=b2.db.f
r=r.dC
C.b.Y(r.a,r.d,p)}if(b3.b){b2.ac(m,b2.db.d)
r=b2.a
p=b2.db.d
r.ai(r.dD,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b4.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b5.e
p.Z(b4)
p.a9(b4)
p.b6(b4)
if(!q||b3.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b3=m[k]
if(b3.c){b3.c=!1
r.activeTexture(33984+b3.a)
r.bindTexture(3553,null)}}b3=b2.a
b3.toString
r.useProgram(null)
b3.x.di()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cL().aw},
seu:function(a){this.e=H.n(a,"$ia_",[V.al],"$aa_")}}
O.hd.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aH(a,C.e.a4(b+3,4)*4))},
$S:10}
O.he.prototype={
$2:function(a,b){H.k(a,"$iaH")
H.k(b,"$iaH")
return J.jY(a.a,b.a)},
$S:40}
O.hf.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aI(a,C.e.a4(b+3,4)*4))},
$S:10}
O.hg.prototype={
$2:function(a,b){H.k(a,"$iaI")
H.k(b,"$iaI")
return J.jY(a.a,b.a)},
$S:41}
O.hh.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aJ(a,C.e.a4(b+3,4)*4))},
$S:10}
O.hi.prototype={
$2:function(a,b){H.k(a,"$iaJ")
H.k(b,"$iaJ")
return J.jY(a.a,b.a)},
$S:42}
O.h7.prototype={
at:function(){var u,t=this
t.ct()
u=t.f
if(!(Math.abs(u-1)<$.O().a)){t.f=1
u=new D.J(t.b,u,1,[P.D])
u.b=!0
t.a.T(u)}}}
O.cy.prototype={
T:function(a){return this.a.T(H.k(a,"$ix"))},
aU:function(){return this.T(null)},
at:function(){},
d2:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.at()
u=s.a
u.a=null
u.T(null)}},
sck:function(a){var u,t=this,s=t.c
if(!s.b)t.d2(new A.af(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gp().S(0,t.gaI())
u=t.d
t.d=a
a.gp().h(0,t.gaI())
s=new D.J(t.b+".texture2D",u,t.d,[T.dX])
s.b=!0
t.a.T(s)}}}
O.h8.prototype={}
O.aW.prototype={
d1:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.J(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.T(t)}},
at:function(){this.ct()
this.d1(new V.a2(1,1,1))},
sbf:function(a,b){this.d2(new A.af(!0,this.c.b,!1))
this.d1(b)}}
O.ha.prototype={}
O.hb.prototype={
at:function(){var u,t=this
t.cu()
u=t.ch
if(!(Math.abs(u-1)<$.O().a)){t.ch=1
u=new D.J(t.b+".refraction",u,1,[P.D])
u.b=!0
t.a.T(u)}}}
O.hc.prototype={
at:function(){var u,t=this
t.cu()
u=t.ch
if(!(Math.abs(u-100)<$.O().a)){t.ch=100
u=new D.J(t.b+".shininess",u,100,[P.D])
u.b=!0
t.a.T(u)}}}
O.dQ.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.N():u},
T:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.w(a)},
aU:function(){return this.T(null)},
dM:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idR")
if(u==null){t=a.a
u=new A.dR(t,n)
u.cv(t,n)
u.dE(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.p(u.y.j(0,"fov"),"$ia5")
u.ch=H.p(u.y.j(0,"ratio"),"$ia5")
u.cx=H.p(u.y.j(0,"boxClr"),"$iV")
u.cy=H.p(u.y.j(0,"boxTxt"),"$ibH")
u.db=H.p(u.y.j(0,"viewMat"),"$iap")
a.d8(u)}o.a=u}if(b.e==null){t=b.d.dd(new Z.eb(a.a),$.aN())
t.ax($.aN()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.Z(a)
q=o.b
p=r.Q
C.b.Y(p.a,p.d,q)
q=r.ch
C.b.Y(q.a,q.d,t/s)
s=o.c
r.cy.e2(s)
s=o.d
t=r.cx
C.b.U(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga_(s).c7(0)
r=r.db
r.toString
r.ah(s.aa(0,!0))
t=b.e
if(t instanceof Z.ck){t.Z(a)
t.a9(a)
t.b6(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.di()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bF.prototype={}
T.cO.prototype={}
T.dX.prototype={}
T.ie.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.N():u}}
T.dY.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.N():u}}
T.ig.prototype={
hZ:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kP(a)
t=new T.ie()
t.a=0
t.b=q
t.d=t.c=!1
r=W.l
W.a6(u,"load",H.m(new T.ii(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aL:function(a,b,c,d,e,f){var u,t=W.kP(c);++this.d
u=W.l
W.a6(t,"load",H.m(new T.ih(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
d0:function(a,b,c){var u,t,s,r
b=V.kz(b)
u=V.kz(a.width)
t=V.kz(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k1()
s.width=u
s.height=t
r=H.k(C.h.dY(s,"2d"),"$icl")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nq(r.getImageData(0,0,s.width,s.height))}}}
T.ii.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.d0(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.b.dQ(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.dk()}++s.e},
$S:13}
T.ih.prototype={
$1:function(a){var u=this,t=u.a,s=t.d0(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.dQ(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.dk()}++t.e},
$S:13}
V.ba.prototype={
az:function(a,b){return!0},
i:function(a){return"all"},
$iat:1}
V.at.prototype={}
V.dB.prototype={
az:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)if(u[s].az(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa3:function(a){this.a=H.n(a,"$ib",[V.at],"$ab")},
$iat:1}
V.am.prototype={
az:function(a,b){return!this.e8(0,b)},
i:function(a){return"!["+this.cs(0)+"]"}}
V.hI.prototype={
az:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.kc(this.a),t=H.kc(this.b)
return u+".."+t},
$iat:1}
V.hR.prototype={
ed:function(a){var u,t
if(a.a.length<=0)throw H.j(P.z("May not create a SetMatcher with zero characters."))
u=new H.a0([P.q,P.M])
for(t=new H.cx(a,a.gm(a),[H.aj(a,"w",0)]);t.u();)u.n(0,t.d,!0)
this.sh6(u)},
az:function(a,b){return this.a.dg(0,b)},
i:function(a){var u=this.a
return P.ke(new H.dx(u,[H.y(u,0)]))},
sh6:function(a){this.a=H.n(a,"$iG",[P.q,P.M],"$aG")},
$iat:1}
V.cJ.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cQ(this.a.k(0,b))
r.sa3(H.c([],[V.at]))
r.c=!1
C.a.h(this.c,r)
return r},
hR:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.az(0,a))return r}return},
i:function(a){return this.b},
shp:function(a){this.c=H.n(a,"$ib",[V.cQ],"$ab")}}
V.e_.prototype={
i:function(a){var u=H.kB(this.b,"\n","\\n"),t=H.kB(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cP.prototype={
aB:function(a,b,c){var u,t,s
H.n(c,"$ib",[P.i],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.t)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sh0:function(a){var u=P.i
this.c=H.n(a,"$iG",[u,u],"$aG")}}
V.il.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cJ(this,b)
u.shp(H.c([],[V.cQ]))
u.d=null
this.a.n(0,b,u)}return u},
L:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cP(a)
u=P.i
t.sh0(new H.a0([u,u]))
this.b.n(0,a,t)}return t},
dT:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.e_]),l=this.c,k=[P.q],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.aJ(a,s)
q=l.hR(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.ke(j)
throw H.j(P.z("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.ke(j)
o=l.d
n=o.c.j(0,p)
t=new V.e_(n==null?o.b:n,p,s)}++s}}},
shf:function(a){this.a=H.n(a,"$iG",[P.i,V.cJ],"$aG")},
shi:function(a){this.b=H.n(a,"$iG",[P.i,V.cP],"$aG")}}
V.cQ.prototype={
i:function(a){return this.b.b+": "+this.cs(0)}}
X.bS.prototype={$ibZ:1}
X.fM.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.N():u},
an:function(a){var u=this.x
if(u!=null)u.w(a)},
Z:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.d.aj(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.d.aj(r*t)
r=C.d.aj(s.c*u)
a.c=r
s=C.d.aj(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fS.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.N():u},
Z:function(a){var u
a.cy.bm(V.bY())
u=V.bY()
a.db.bm(u)},
b6:function(a){a.cy.aA()
a.db.aA()},
$ibZ:1,
$ibS:1}
X.dK.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.N():u},
an:function(a){var u
H.k(a,"$ix")
u=this.f
if(u!=null)u.w(a)},
f9:function(){return this.an(null)},
Z:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aX(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bm(k)
r=$.l_
if(r==null){r=V.l1()
q=V.kh()
p=$.lh
r=V.kV(r,q,p==null?$.lh=new V.K(0,0,-1):p)
$.l_=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aQ(0,a,s)
if(t!=null)u=t.v(0,u)}a.db.bm(u)},
b6:function(a){a.cy.aA()
a.db.aA()},
$ibZ:1,
$ibS:1}
X.cM.prototype={}
V.bs.prototype={
b8:function(a){this.b=new P.fQ(C.H)
this.c=null
this.sbD(H.c([],[[P.b,W.aA]]))},
I:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aA]))
u=a.split("\n")
for(l=u.length,t=[W.aA],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.Q(q)
o=m.b.eA(q,0,q.length)
n=o==null?q:o
C.F.e0(p,H.kB(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbi(m.d),p)}},
dL:function(a,b){var u,t,s,r,q=this
H.n(b,"$ib",[P.i],"$ab")
q.sbD(H.c([],[[P.b,W.aA]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bg():t).dT(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r)q.bl(t[r])},
sbD:function(a){this.d=H.n(a,"$ib",[[P.b,W.aA]],"$ab")}}
V.jV.prototype={
$1:function(a){var u
H.k(a,"$ib4")
u=C.d.dS(this.a.ghT(),2)
if(u!=="0.00")P.kA(u+" fps")},
$S:44}
V.fs.prototype={
bl:function(a){var u=this
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
bg:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.im()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.v(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.v(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.v(new H.r("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.v(new H.r(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.v(new H.r(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.v(new H.r('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.v(new H.r('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.v(new H.r("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.v(new H.r('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.ba())
t=a1.k(0,r).l(0,h)
u=V.v(new H.r("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.v(new H.r("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.v(new H.r("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.v(new H.r("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.ba())
t=a1.k(0,r).l(0,e)
u=V.v(new H.r("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.v(new H.r("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.am()
s=[V.at]
t.sa3(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.v(new H.r("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.v(new H.r("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.am()
t.sa3(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.r("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.v(new H.r("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.v(new H.r(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.v(new H.r(" \n\t"))
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
u=[P.i]
t.aB(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aB(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aB(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fN.prototype={
bl:function(a){var u=this
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
bg:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.im()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.v(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.v(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.v(new H.r("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.v(new H.r(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.v(new H.r(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.v(new H.r("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.v(new H.r("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.ba())
t=e.k(0,j).l(0,i)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.am()
s=[V.at]
t.sa3(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.v(new H.r("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.am()
u.sa3(H.c([],s))
C.a.h(t.a,u)
t=V.v(new H.r("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.v(new H.r(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.v(new H.r(" \n\t"))
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
t=[P.i]
u.aB(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aB(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aB(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fO.prototype={
bl:function(a){var u=this,t="#111"
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
bg:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.im()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.v(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.v(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.v(new H.r("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.v(new H.r("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.v(new H.r("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.v(new H.r('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.v(new H.r('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.v(new H.r("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.v(new H.r('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.ba())
C.a.h(l.k(0,s).l(0,m).a,new V.ba())
u=l.k(0,m).l(0,m)
t=new V.am()
t.sa3(H.c([],[V.at]))
C.a.h(u.a,t)
u=V.v(new H.r('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.L("Symbol")
u=l.k(0,n)
u.d=u.a.L("String")
u=l.k(0,r)
t=u.a.L(r)
u.d=t
t.aB(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.i]))
t=l.k(0,q)
t.d=t.a.L(q)
t=l.k(0,m)
t.d=t.a.L(m)
return l}}
V.hD.prototype={
dL:function(a,b){H.n(b,"$ib",[P.i],"$ab")
this.sbD(H.c([],[[P.b,W.aA]]))
this.I(C.a.l(b,"\n"),"#111")},
bl:function(a){},
bg:function(){return}}
V.hV.prototype={
ee:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a6(q,"scroll",H.m(new V.hX(o),{func:1,ret:-1,args:[r]}),!1,r)},
d7:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ib",[P.i],"$ab")
this.h9()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dT(C.a.hX(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
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
if(H.nM(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.Q(m[1])
l.textContent=H.Q(m[0])
t.appendChild(l)}else{k=P.ln(C.r,n,C.i,!1)
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
dX:function(a){var u,t,s,r=new V.fs("dart")
r.b8("dart")
u=new V.fN("glsl")
u.b8("glsl")
t=new V.fO("html")
t.b8("html")
s=C.a.hS(H.c([r,u,t],[V.bs]),new V.hY(a))
if(s!=null)return s
r=new V.hD("plain")
r.b8("plain")
return r},
d6:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.n(b0,"$ib",[P.i],"$ab")
u=H.c([],[P.q])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.kv(r).bt(r,"+")){C.a.n(b0,s,C.c.aq(r,1))
C.a.h(u,1)
t=!0}else if(C.c.bt(r,"-")){C.a.n(b0,s,C.c.aq(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dX(a8)
q.dL(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.ln(C.r,a7,C.i,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kF()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.t)(r),++a0)C.P.hw(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.t)(f),++a0){r=f[a0]
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
h9:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.im()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.v(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.am()
r=[V.at]
s.sa3(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.r("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.v(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.v(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.am()
s.sa3(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.r("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.v(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.v(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.am()
s.sa3(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.r("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.v(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.v(new H.r("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.v(new H.r("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.v(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.am()
t.sa3(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.r("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.v(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.am()
t.sa3(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.ba())
s=u.k(0,i).l(0,i)
t=new V.am()
t.sa3(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.r("*_`["))
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
V.hX.prototype={
$1:function(a){P.lc(C.j,new V.hW(this.a))},
$S:13}
V.hW.prototype={
$0:function(){var u=C.d.aj(document.documentElement.scrollTop),t=this.a.style,s=H.h(-0.01*u)+"px"
t.top=s},
$S:2}
V.hY.prototype={
$1:function(a){return H.k(a,"$ibs").a===this.a},
$S:45}
Q.jS.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$ix")
u=this.a
t=this.b
s=t.a
r=[P.i]
u.d6("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.d6("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.e5=u.i
u=J.du.prototype
u.e7=u.i
u=P.e.prototype
u.e6=u.bq
u=W.R.prototype
u.bu=u.ae
u=W.eG.prototype
u.e9=u.ao
u=O.cy.prototype
u.ct=u.at
u=O.aW.prototype
u.cu=u.at
u=V.dB.prototype
u.e8=u.az
u.cs=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nk","mI",9)
u(P,"nl","mJ",9)
u(P,"nm","mK",9)
t(P,"lw","ni",3)
s(W,"nx",4,null,["$4"],["mM"],23,0)
s(W,"ny",4,null,["$4"],["mN"],23,0)
var m
r(m=E.ag.prototype,"gdJ",0,0,null,["$1","$0"],["dK","i6"],0,0)
r(m,"gdH",0,0,null,["$1","$0"],["dI","i3"],0,0)
q(m,"gi1","i2",6)
q(m,"gi4","i5",6)
r(m=E.dZ.prototype,"gcz",0,0,null,["$1","$0"],["cB","cA"],0,0)
p(m,"gik","dN",3)
o(m=X.e5.prototype,"gfk","fl",11)
o(m,"gf6","f7",11)
o(m,"gfe","ff",4)
o(m,"gfo","fp",21)
o(m,"gfm","fn",21)
o(m,"gft","fu",4)
o(m,"gfz","fA",4)
o(m,"gfi","fj",4)
o(m,"gfv","fw",4)
o(m,"gfg","fh",4)
o(m,"gfB","fC",35)
o(m,"gfD","fE",11)
o(m,"gfT","fU",12)
o(m,"gfP","fQ",12)
o(m,"gfR","fS",12)
r(D.bu.prototype,"geh",0,0,null,["$1","$0"],["ar","ei"],0,0)
r(m=D.dw.prototype,"gcT",0,0,null,["$1","$0"],["cU","fq"],0,0)
o(m,"gfF","fG",36)
q(m,"gf0","f1",14)
q(m,"gfJ","fK",14)
n(V.T.prototype,"gm","c8",24)
n(V.K.prototype,"gm","c8",24)
r(m=U.cu.prototype,"gaH",0,0,null,["$1","$0"],["M","a2"],0,0)
q(m,"geZ","f_",25)
q(m,"gfH","fI",25)
r(m=U.e6.prototype,"gaH",0,0,null,["$1","$0"],["M","a2"],0,0)
o(m,"gbG","bH",1)
o(m,"gbI","bJ",1)
o(m,"gbK","bL",1)
r(m=U.e7.prototype,"gaH",0,0,null,["$1","$0"],["M","a2"],0,0)
o(m,"gbG","bH",1)
o(m,"gbI","bJ",1)
o(m,"gbK","bL",1)
o(m,"geS","eT",1)
o(m,"geU","eV",1)
o(m,"ghn","ho",1)
o(m,"ghl","hm",1)
o(m,"ghj","hk",1)
o(U.e8.prototype,"geX","eY",1)
r(m=M.dh.prototype,"gV",0,0,null,["$1","$0"],["W","aT"],0,0)
q(m,"gfL","fM",27)
q(m,"gfN","fO",27)
r(M.dj.prototype,"gV",0,0,null,["$1","$0"],["W","aT"],0,0)
r(m=M.dn.prototype,"gV",0,0,null,["$1","$0"],["W","aT"],0,0)
q(m,"gfa","fb",6)
q(m,"gfc","fd",6)
r(m=O.dC.prototype,"gaI",0,0,null,["$1","$0"],["T","aU"],0,0)
r(m,"gh2",0,0,null,["$1","$0"],["cZ","h3"],0,0)
q(m,"gf2","f3",28)
q(m,"gf4","f5",28)
r(O.cy.prototype,"gaI",0,0,null,["$1","$0"],["T","aU"],0,0)
r(O.dQ.prototype,"gaI",0,0,null,["$1","$0"],["T","aU"],0,0)
r(X.dK.prototype,"gf8",0,0,null,["$1","$0"],["an","f9"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.ka,J.a,J.ak,P.et,P.e,H.cx,P.aT,H.bV,H.e4,H.is,P.bw,H.cm,H.eL,P.a9,H.fZ,H.h_,H.fV,P.eR,P.b9,P.aE,P.ec,P.i4,P.cL,P.i5,P.b4,P.ae,P.jC,P.jq,P.c7,P.es,P.w,P.cn,P.fR,P.jA,P.M,P.az,P.a7,P.bv,P.hB,P.dU,P.ek,P.fL,P.bx,P.b,P.G,P.L,P.ao,P.i,P.bi,W.fo,W.bI,W.C,W.dI,W.eG,W.jv,W.dq,W.av,W.jp,W.eX,P.eW,P.jk,O.a_,O.cz,E.fh,E.ag,E.hJ,E.dZ,Z.ea,Z.eb,Z.ck,Z.bz,Z.bk,D.fk,D.bU,D.x,X.dg,X.dv,X.fX,X.h1,X.au,X.hp,X.io,X.e5,D.bu,D.a8,D.dL,D.dT,V.a2,V.ay,V.fC,V.dE,V.al,V.a4,V.ah,V.bh,V.dN,V.T,V.K,U.e6,U.e7,U.e8,M.dj,M.dn,M.aw,A.dc,A.fc,A.af,A.aH,A.aI,A.aJ,A.h9,A.c3,A.c4,A.c5,A.e1,A.iA,F.a3,F.bd,F.bE,F.dP,F.hS,F.hT,F.hU,F.aC,F.iM,F.iN,F.iQ,F.iR,O.bF,O.cy,O.ha,T.ig,V.ba,V.at,V.dB,V.hI,V.hR,V.cJ,V.e_,V.cP,V.il,X.bS,X.cM,X.fS,X.dK,V.bs,V.hV])
s(J.a,[J.fU,J.dt,J.du,J.aU,J.cw,J.bC,H.cC,W.f,W.f9,W.dd,W.cl,W.aP,W.aQ,W.S,W.ee,W.ft,W.fu,W.eg,W.dm,W.ei,W.fw,W.l,W.el,W.aS,W.fP,W.eo,W.by,W.dz,W.hj,W.eu,W.ev,W.aY,W.ew,W.ez,W.aZ,W.eD,W.eF,W.b1,W.eH,W.b2,W.eM,W.aK,W.eP,W.ik,W.b5,W.eS,W.iq,W.iF,W.eY,W.f_,W.f1,W.f3,W.f5,P.bc,P.eq,P.bf,P.eB,P.hG,P.eN,P.bj,P.eU,P.fd,P.ed,P.de,P.dM,P.c1,P.dO,P.dW,P.e2,P.eJ])
s(J.du,[J.hC,J.c6,J.bD])
t(J.k9,J.aU)
s(J.cw,[J.ds,J.dr])
t(P.h0,P.et)
s(P.h0,[H.e3,W.j1,W.ai,P.fH])
t(H.r,H.e3)
s(P.e,[H.fz,H.h4,H.cT])
s(H.fz,[H.bX,H.dx])
s(P.aT,[H.h5,H.iV])
t(H.h6,H.bX)
s(P.bw,[H.hy,H.fW,H.iD,H.iu,H.fj,H.hP,P.fb,P.dJ,P.aG,P.iE,P.iC,P.cK,P.fm,P.fr])
s(H.cm,[H.jX,H.ib,H.jO,H.jP,H.jQ,P.iY,P.iX,P.iZ,P.j_,P.jz,P.jy,P.j7,P.jb,P.j8,P.j9,P.ja,P.je,P.jf,P.jd,P.jc,P.i6,P.i7,P.jI,P.jn,P.jm,P.jo,P.h3,P.fx,P.fy,W.fA,W.hl,W.hn,W.hO,W.i3,W.j6,W.hx,W.hw,W.jr,W.js,W.jx,W.jB,P.jK,P.fI,P.fJ,P.ff,E.hK,E.hL,E.hM,E.ij,D.fD,D.fE,F.jD,F.iT,F.iS,F.iO,F.iP,O.hd,O.he,O.hf,O.hg,O.hh,O.hi,T.ii,T.ih,V.jV,V.hX,V.hW,V.hY,Q.jS])
s(H.ib,[H.i1,H.ci])
t(H.iW,P.fb)
t(P.h2,P.a9)
s(P.h2,[H.a0,W.j0])
t(H.dF,H.cC)
s(H.dF,[H.cX,H.cZ])
t(H.cY,H.cX)
t(H.cB,H.cY)
t(H.d_,H.cZ)
t(H.dG,H.d_)
s(H.dG,[H.hq,H.hr,H.hs,H.ht,H.hu,H.dH,H.hv])
t(P.jl,P.jC)
t(P.jj,P.jq)
t(P.co,P.i5)
t(P.fB,P.cn)
s(P.co,[P.fQ,P.iH])
t(P.iG,P.fB)
s(P.a7,[P.D,P.q])
s(P.aG,[P.c0,P.fT])
s(W.f,[W.E,W.fG,W.b0,W.d0,W.b3,W.aL,W.d2,W.iU,W.cU,P.fg,P.bR])
s(W.E,[W.R,W.br,W.cV])
s(W.R,[W.u,P.o])
s(W.u,[W.db,W.fa,W.ch,W.bq,W.bT,W.aA,W.fK,W.cv,W.hQ,W.c2,W.dV,W.i9,W.ia,W.cN])
s(W.aP,[W.cp,W.fp,W.fq])
t(W.fn,W.aQ)
t(W.cq,W.ee)
t(W.eh,W.eg)
t(W.dl,W.eh)
t(W.ej,W.ei)
t(W.fv,W.ej)
t(W.aR,W.dd)
t(W.em,W.el)
t(W.fF,W.em)
t(W.ep,W.eo)
t(W.bW,W.ep)
t(W.bG,W.l)
s(W.bG,[W.aV,W.aa,W.aM])
t(W.hk,W.eu)
t(W.hm,W.ev)
t(W.ex,W.ew)
t(W.ho,W.ex)
t(W.eA,W.ez)
t(W.cD,W.eA)
t(W.eE,W.eD)
t(W.hE,W.eE)
t(W.hN,W.eF)
t(W.d1,W.d0)
t(W.hZ,W.d1)
t(W.eI,W.eH)
t(W.i_,W.eI)
t(W.i2,W.eM)
t(W.eQ,W.eP)
t(W.ic,W.eQ)
t(W.d3,W.d2)
t(W.id,W.d3)
t(W.eT,W.eS)
t(W.ip,W.eT)
t(W.b8,W.aa)
t(W.eZ,W.eY)
t(W.j2,W.eZ)
t(W.ef,W.dm)
t(W.f0,W.f_)
t(W.jg,W.f0)
t(W.f2,W.f1)
t(W.ey,W.f2)
t(W.f4,W.f3)
t(W.jt,W.f4)
t(W.f6,W.f5)
t(W.ju,W.f6)
t(W.j3,W.j0)
t(W.j4,P.i4)
t(W.kj,W.j4)
t(W.j5,P.cL)
t(W.jw,W.eG)
t(P.an,P.jk)
t(P.er,P.eq)
t(P.fY,P.er)
t(P.eC,P.eB)
t(P.hz,P.eC)
t(P.cH,P.o)
t(P.eO,P.eN)
t(P.i8,P.eO)
t(P.eV,P.eU)
t(P.ir,P.eV)
t(P.fe,P.ed)
t(P.hA,P.bR)
t(P.eK,P.eJ)
t(P.i0,P.eK)
s(E.fh,[Z.df,A.cI,T.cO])
s(D.x,[D.bA,D.bB,D.J,X.hF])
s(X.hF,[X.dA,X.be,X.cA,X.e0])
s(O.a_,[D.dw,U.cu,M.dh])
s(D.fk,[U.fl,U.ab])
t(U.di,U.ab)
s(A.cI,[A.dD,A.dR])
s(A.e1,[A.aB,A.ix,A.iy,A.iz,A.iv,A.a5,A.iw,A.V,A.cR,A.iB,A.cS,A.ap,A.ad,A.bH])
s(O.bF,[O.dC,O.dQ])
s(O.cy,[O.h7,O.h8,O.aW])
s(O.aW,[O.hb,O.hc])
s(T.cO,[T.dX,T.dY])
t(T.ie,T.dX)
s(V.dB,[V.am,V.cQ])
t(X.fM,X.cM)
s(V.bs,[V.fs,V.fN,V.fO,V.hD])
u(H.e3,H.e4)
u(H.cX,P.w)
u(H.cY,H.bV)
u(H.cZ,P.w)
u(H.d_,H.bV)
u(P.et,P.w)
u(W.ee,W.fo)
u(W.eg,P.w)
u(W.eh,W.C)
u(W.ei,P.w)
u(W.ej,W.C)
u(W.el,P.w)
u(W.em,W.C)
u(W.eo,P.w)
u(W.ep,W.C)
u(W.eu,P.a9)
u(W.ev,P.a9)
u(W.ew,P.w)
u(W.ex,W.C)
u(W.ez,P.w)
u(W.eA,W.C)
u(W.eD,P.w)
u(W.eE,W.C)
u(W.eF,P.a9)
u(W.d0,P.w)
u(W.d1,W.C)
u(W.eH,P.w)
u(W.eI,W.C)
u(W.eM,P.a9)
u(W.eP,P.w)
u(W.eQ,W.C)
u(W.d2,P.w)
u(W.d3,W.C)
u(W.eS,P.w)
u(W.eT,W.C)
u(W.eY,P.w)
u(W.eZ,W.C)
u(W.f_,P.w)
u(W.f0,W.C)
u(W.f1,P.w)
u(W.f2,W.C)
u(W.f3,P.w)
u(W.f4,W.C)
u(W.f5,P.w)
u(W.f6,W.C)
u(P.eq,P.w)
u(P.er,W.C)
u(P.eB,P.w)
u(P.eC,W.C)
u(P.eN,P.w)
u(P.eO,W.C)
u(P.eU,P.w)
u(P.eV,W.C)
u(P.ed,P.a9)
u(P.eJ,P.w)
u(P.eK,W.C)})()
var v={mangledGlobalNames:{q:"int",D:"double",a7:"num",i:"String",M:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.q,[P.e,E.ag]]},{func:1,ret:P.L,args:[D.x]},{func:1,ret:P.L,args:[F.a3]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.q,P.q]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.aM]},{func:1,ret:P.L,args:[W.l]},{func:1,ret:-1,args:[P.q,[P.e,D.a8]]},{func:1,args:[,]},{func:1,ret:P.M,args:[P.i]},{func:1,ret:P.M,args:[W.av]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.L,args:[,,]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:P.i,args:[P.q]},{func:1,ret:P.M,args:[W.R,P.i,P.i,W.bI]},{func:1,ret:P.D},{func:1,ret:-1,args:[P.q,[P.e,U.ab]]},{func:1,ret:P.M,args:[W.E]},{func:1,ret:-1,args:[P.q,[P.e,M.aw]]},{func:1,ret:-1,args:[P.q,[P.e,V.al]]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:W.R,args:[W.E]},{func:1,args:[,P.i]},{func:1,args:[P.i]},{func:1,ret:P.L,args:[,],opt:[P.ao]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.M,args:[[P.e,D.a8]]},{func:1,ret:P.L,args:[F.aC,P.D,P.D]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:P.q,args:[A.aH,A.aH]},{func:1,ret:P.q,args:[A.aI,A.aI]},{func:1,ret:P.q,args:[A.aJ,A.aJ]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:P.L,args:[P.b4]},{func:1,ret:P.M,args:[V.bs]},{func:1,args:[W.l]},{func:1,ret:P.L,args:[P.a7]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.o=W.bq.prototype
C.h=W.bT.prototype
C.F=W.aA.prototype
C.I=J.a.prototype
C.a=J.aU.prototype
C.J=J.dr.prototype
C.e=J.ds.prototype
C.k=J.dt.prototype
C.d=J.cw.prototype
C.c=J.bC.prototype
C.K=J.bD.prototype
C.O=W.cD.prototype
C.t=J.hC.prototype
C.b=P.c1.prototype
C.P=W.c2.prototype
C.u=W.dV.prototype
C.n=J.c6.prototype
C.v=W.b8.prototype
C.w=W.cU.prototype
C.q=function getTagFallback(o) {
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

C.D=new P.hB()
C.i=new P.iG()
C.E=new P.iH()
C.f=new P.jl()
C.j=new P.bv(0)
C.G=new P.bv(5e6)
C.H=new P.fR("element",!1,!1,!1)
C.L=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.M=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.N=H.c(u([]),[P.i])
C.r=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.q])
C.l=H.c(u(["bind","if","ref","repeat","syntax"]),[P.i])
C.m=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])})();(function staticFields(){$.aO=0
$.cj=null
$.kG=null
$.kl=!1
$.lz=null
$.lu=null
$.lF=null
$.jL=null
$.jR=null
$.kx=null
$.c8=null
$.d6=null
$.d7=null
$.km=!1
$.Z=C.f
$.ar=[]
$.bb=null
$.k4=null
$.kM=null
$.kL=null
$.en=P.kR(P.i,P.bx)
$.kW=null
$.l0=null
$.cE=null
$.l7=null
$.lg=null
$.li=null
$.iI=null
$.iJ=null
$.iK=null
$.lh=null
$.l_=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nW","lJ",function(){return H.ly("_$dart_dartClosure")})
u($,"nX","kC",function(){return H.ly("_$dart_js")})
u($,"o0","lK",function(){return H.b6(H.it({
toString:function(){return"$receiver$"}}))})
u($,"o1","lL",function(){return H.b6(H.it({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o2","lM",function(){return H.b6(H.it(null))})
u($,"o3","lN",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o6","lQ",function(){return H.b6(H.it(void 0))})
u($,"o7","lR",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o5","lP",function(){return H.b6(H.le(null))})
u($,"o4","lO",function(){return H.b6(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"o9","lT",function(){return H.b6(H.le(void 0))})
u($,"o8","lS",function(){return H.b6(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"or","kD",function(){return P.mH()})
u($,"ot","lY",function(){return P.mw("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"os","lX",function(){return P.kS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)})
u($,"ok","lW",function(){return Z.aD(0)})
u($,"oe","lU",function(){return Z.aD(511)})
u($,"om","aN",function(){return Z.aD(1)})
u($,"ol","bo",function(){return Z.aD(2)})
u($,"og","bn",function(){return Z.aD(4)})
u($,"on","bp",function(){return Z.aD(8)})
u($,"oo","bN",function(){return Z.aD(16)})
u($,"oh","d9",function(){return Z.aD(32)})
u($,"oi","da",function(){return Z.aD(64)})
u($,"oj","lV",function(){return Z.aD(96)})
u($,"op","cg",function(){return Z.aD(128)})
u($,"of","bm",function(){return Z.aD(256)})
u($,"nV","lI",function(){return new V.fC(1e-9)})
u($,"nU","O",function(){return $.lI()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cC,ArrayBufferView:H.cC,Float32Array:H.cB,Float64Array:H.cB,Int16Array:H.hq,Int32Array:H.hr,Int8Array:H.hs,Uint16Array:H.ht,Uint32Array:H.hu,Uint8ClampedArray:H.dH,CanvasPixelArray:H.dH,Uint8Array:H.hv,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.f9,HTMLAnchorElement:W.db,HTMLAreaElement:W.fa,HTMLBaseElement:W.ch,Blob:W.dd,HTMLBodyElement:W.bq,HTMLCanvasElement:W.bT,CanvasRenderingContext2D:W.cl,CDATASection:W.br,CharacterData:W.br,Comment:W.br,ProcessingInstruction:W.br,Text:W.br,CSSNumericValue:W.cp,CSSUnitValue:W.cp,CSSPerspective:W.fn,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cq,MSStyleCSSProperties:W.cq,CSS2Properties:W.cq,CSSImageValue:W.aP,CSSKeywordValue:W.aP,CSSPositionValue:W.aP,CSSResourceValue:W.aP,CSSURLImageValue:W.aP,CSSStyleValue:W.aP,CSSMatrixComponent:W.aQ,CSSRotation:W.aQ,CSSScale:W.aQ,CSSSkew:W.aQ,CSSTranslation:W.aQ,CSSTransformComponent:W.aQ,CSSTransformValue:W.fp,CSSUnparsedValue:W.fq,DataTransferItemList:W.ft,HTMLDivElement:W.aA,DOMException:W.fu,ClientRectList:W.dl,DOMRectList:W.dl,DOMRectReadOnly:W.dm,DOMStringList:W.fv,DOMTokenList:W.fw,Element:W.R,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aR,FileList:W.fF,FileWriter:W.fG,HTMLFormElement:W.fK,Gamepad:W.aS,History:W.fP,HTMLCollection:W.bW,HTMLFormControlsCollection:W.bW,HTMLOptionsCollection:W.bW,ImageData:W.by,HTMLImageElement:W.cv,KeyboardEvent:W.aV,Location:W.dz,MediaList:W.hj,MIDIInputMap:W.hk,MIDIOutputMap:W.hm,MimeType:W.aY,MimeTypeArray:W.ho,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cD,RadioNodeList:W.cD,Plugin:W.aZ,PluginArray:W.hE,RTCStatsReport:W.hN,HTMLSelectElement:W.hQ,SourceBuffer:W.b0,SourceBufferList:W.hZ,SpeechGrammar:W.b1,SpeechGrammarList:W.i_,SpeechRecognitionResult:W.b2,Storage:W.i2,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.c2,HTMLTableDataCellElement:W.c2,HTMLTableHeaderCellElement:W.c2,HTMLTableElement:W.dV,HTMLTableRowElement:W.i9,HTMLTableSectionElement:W.ia,HTMLTemplateElement:W.cN,TextTrack:W.b3,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.ic,TextTrackList:W.id,TimeRanges:W.ik,Touch:W.b5,TouchEvent:W.aM,TouchList:W.ip,TrackDefaultList:W.iq,CompositionEvent:W.bG,FocusEvent:W.bG,TextEvent:W.bG,UIEvent:W.bG,URL:W.iF,VideoTrackList:W.iU,WheelEvent:W.b8,Window:W.cU,DOMWindow:W.cU,Attr:W.cV,CSSRuleList:W.j2,ClientRect:W.ef,DOMRect:W.ef,GamepadList:W.jg,NamedNodeMap:W.ey,MozNamedAttrMap:W.ey,SpeechRecognitionResultList:W.jt,StyleSheetList:W.ju,SVGLength:P.bc,SVGLengthList:P.fY,SVGNumber:P.bf,SVGNumberList:P.hz,SVGPointList:P.hG,SVGScriptElement:P.cH,SVGStringList:P.i8,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.bj,SVGTransformList:P.ir,AudioBuffer:P.fd,AudioParamMap:P.fe,AudioTrackList:P.fg,AudioContext:P.bR,webkitAudioContext:P.bR,BaseAudioContext:P.bR,OfflineAudioContext:P.hA,WebGLBuffer:P.de,WebGLProgram:P.dM,WebGL2RenderingContext:P.c1,WebGLShader:P.dO,WebGLTexture:P.dW,WebGLUniformLocation:P.e2,SQLResultSetRowList:P.i0})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dF.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.dG.$nativeSuperclassTag="ArrayBufferView"
W.d0.$nativeSuperclassTag="EventTarget"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"
W.d3.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.lB,[])
else Q.lB([])})})()
//# sourceMappingURL=test.dart.js.map
