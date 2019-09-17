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
a[c]=function(){a[c]=function(){H.m5(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ja"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ja"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ja(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iZ:function iZ(){},
jq:function(){return new P.h9("No element")},
cW:function(a,b,c,d){if(c-b<=32)H.l_(a,b,c,d)
else H.kZ(a,b,c,d)},
l_:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a1()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
kZ:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a9(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a9(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.b(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.b(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.b(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.b(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.b(a2,c)
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
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.a.n(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.a.n(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.u(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a8()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a1()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.a8()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a1()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a1()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a8()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.a.n(a2,a3,a2[a1])
C.a.n(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.a.n(a2,a4,a2[a1])
C.a.n(a2,a1,r)
H.cW(a2,a3,o-2,a5)
H.cW(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.u(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.u(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a8()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}H.cW(a2,o,n,a5)}else H.cW(a2,o,n,a5)},
O:function O(a){this.a=a},
eD:function eD(){},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
ff:function ff(a,b,c){this.a=a
this.b=b
this.$ti=c},
fg:function fg(a,b){this.a=null
this.b=a
this.c=b},
hU:function hU(a,b,c){this.a=a
this.b=b
this.$ti=c},
hV:function hV(a,b){this.a=a
this.b=b},
cv:function cv(){},
hD:function hD(){},
d8:function d8(){},
e8:function(a){var u,t=H.m6(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lP:function(a){return v.types[a]},
lU:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a1(a).$iv},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a5(a)
if(typeof u!=="string")throw H.f(H.aI(a))
return u},
bW:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bX:function(a){return H.kL(a)+H.jS(H.cg(a),0,null)},
kL:function(a){var u,t,s,r,q,p,o,n=J.a1(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.A||!!n.$ic1){r=C.l(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.e8(t.length>1&&C.c.b6(t,0)===36?C.c.aP(t,1):t)},
jz:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kU:function(a){var u,t,s,r=H.c([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aI(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.b8(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.aI(s))}return H.jz(r)},
jA:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aI(s))
if(s<0)throw H.f(H.aI(s))
if(s>65535)return H.kU(a)}return H.jz(a)},
kT:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.b8(u,10))>>>0,56320|u&1023)}throw H.f(P.as(a,0,1114111,null,null))},
bp:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kS:function(a){var u=H.bp(a).getFullYear()+0
return u},
kQ:function(a){var u=H.bp(a).getMonth()+1
return u},
kM:function(a){var u=H.bp(a).getDate()+0
return u},
kN:function(a){var u=H.bp(a).getHours()+0
return u},
kP:function(a){var u=H.bp(a).getMinutes()+0
return u},
kR:function(a){var u=H.bp(a).getSeconds()+0
return u},
kO:function(a){var u=H.bp(a).getMilliseconds()+0
return u},
q:function(a){throw H.f(H.aI(a))},
b:function(a,b){if(a==null)J.bB(a)
throw H.f(H.b7(a,b))},
b7:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aw(!0,b,s,null)
u=J.bB(a)
if(!(b<0)){if(typeof u!=="number")return H.q(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.cT(b,s)},
lH:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bq(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bq(a,c,!0,b,"end",u)
return new P.aw(!0,b,"end",null)},
aI:function(a){return new P.aw(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.cQ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.k8})
u.name=""}else u.toString=H.k8
return u},
k8:function(){return J.a5(this.dartException)},
n:function(a){throw H.f(a)},
o:function(a){throw H.f(P.bF(a))},
at:function(a){var u,t,s,r,q,p
a=H.k6(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jI:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jv:function(a,b){return new H.fH(a,b==null?null:b.method)},
j_:function(a,b){var u=b==null,t=u?null:b.method
return new H.f4(a,t,u?null:b.receiver)},
iM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iN(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.b8(t,16)&8191)===10)switch(s){case 438:return f.$1(H.j_(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jv(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kb()
q=$.kc()
p=$.kd()
o=$.ke()
n=$.kh()
m=$.ki()
l=$.kg()
$.kf()
k=$.kk()
j=$.kj()
i=r.ab(u)
if(i!=null)return f.$1(H.j_(u,i))
else{i=q.ab(u)
if(i!=null){i.method="call"
return f.$1(H.j_(u,i))}else{i=p.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=n.ab(u)
if(i==null){i=m.ab(u)
if(i==null){i=l.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=k.ab(u)
if(i==null){i=j.ab(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jv(u,i))}}return f.$1(new H.hC(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cY()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aw(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cY()
return a},
jd:function(a){var u
if(a==null)return new H.dO(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dO(a)},
lL:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
lT:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.l("Unsupported number of arguments for wrapped closure"))},
cf:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lT)
a.$identity=u
return u},
kx:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ha().constructor.prototype):Object.create(new H.bC(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.al
if(typeof t!=="number")return t.A()
$.al=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jo(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kt(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jo(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kt:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lP,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jm:H.iP
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
ku:function(a,b,c,d){var u=H.iP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jo:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kw(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ku(t,!r,u,b)
if(t===0){r=$.al
if(typeof r!=="number")return r.A()
$.al=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bD
return new Function(r+H.e(q==null?$.bD=H.ek("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.al
if(typeof r!=="number")return r.A()
$.al=r+1
o+=r
r="return function("+o+"){return this."
q=$.bD
return new Function(r+H.e(q==null?$.bD=H.ek("self"):q)+"."+H.e(u)+"("+o+");}")()},
kv:function(a,b,c,d){var u=H.iP,t=H.jm
switch(b?-1:a){case 0:throw H.f(H.kX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kw:function(a,b){var u,t,s,r,q,p,o,n=$.bD
if(n==null)n=$.bD=H.ek("self")
u=$.jl
if(u==null)u=$.jl=H.ek("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kv(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.al
if(typeof u!=="number")return u.A()
$.al=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.al
if(typeof u!=="number")return u.A()
$.al=u+1
return new Function(n+u+"}")()},
ja:function(a,b,c,d,e,f,g){return H.kx(a,b,c,d,!!e,!!f,g)},
iP:function(a){return a.a},
jm:function(a){return a.c},
ek:function(a){var u,t,s,r=new H.bC("self","target","receiver","name"),q=J.iX(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
lY:function(a,b){throw H.f(H.ks(a,H.e8(b.substring(2))))},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a1(a)[b]
else u=!0
if(u)return a
H.lY(a,b)},
lJ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
ks:function(a,b){return new H.el("CastError: "+P.iV(a)+": type '"+H.e(H.lC(a))+"' is not a subtype of type '"+b+"'")},
lC:function(a){var u,t=J.a1(a)
if(!!t.$ibE){u=H.lJ(t)
if(u!=null)return H.lZ(u)
return"Closure"}return H.bX(a)},
m5:function(a){throw H.f(new P.ev(a))},
kX:function(a){return new H.fW(a)},
jZ:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cg:function(a){if(a==null)return
return a.$ti},
mC:function(a,b,c){return H.iK(a["$a"+H.e(c)],H.cg(b))},
lO:function(a,b,c,d){var u=H.iK(a["$a"+H.e(c)],H.cg(b))
return u==null?null:u[d]},
k_:function(a,b,c){var u=H.iK(a["$a"+H.e(b)],H.cg(a))
return u==null?null:u[c]},
e7:function(a,b){var u=H.cg(a)
return u==null?null:u[b]},
lZ:function(a){return H.b5(a,null)},
b5:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.e8(a[0].name)+H.jS(a,1,b)
if(typeof a=="function")return H.e8(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.la(a,b)
if('futureOr' in a)return"FutureOr<"+H.b5("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
la:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.t])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.c.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.b5(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b5(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b5(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b5(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lK(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b5(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jS:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aY("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b5(p,c)}return"<"+u.h(0)+">"},
iK:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mA:function(a,b,c){return a.apply(b,H.iK(J.a1(b)["$a"+H.e(c)],H.cg(b)))},
mB:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lV:function(a){var u,t,s,r,q=$.k0.$1(a),p=$.it[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iy[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jV.$2(a,q)
if(q!=null){p=$.it[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iy[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iz(u)
$.it[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iy[q]=u
return u}if(s==="-"){r=H.iz(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.k3(a,u)
if(s==="*")throw H.f(P.jJ(q))
if(v.leafTags[q]===true){r=H.iz(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.k3(a,u)},
k3:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jg(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iz:function(a){return J.jg(a,!1,null,!!a.$iv)},
lW:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iz(u)
else return J.jg(u,c,null,null)},
lR:function(){if(!0===$.je)return
$.je=!0
H.lS()},
lS:function(){var u,t,s,r,q,p,o,n
$.it=Object.create(null)
$.iy=Object.create(null)
H.lQ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.k5.$1(q)
if(p!=null){o=H.lW(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lQ:function(){var u,t,s,r,q,p,o=C.r()
o=H.bx(C.t,H.bx(C.u,H.bx(C.m,H.bx(C.m,H.bx(C.v,H.bx(C.w,H.bx(C.x(C.l),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.k0=new H.iv(r)
$.jV=new H.iw(q)
$.k5=new H.ix(p)},
bx:function(a,b){return a(b)||b},
kD:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eP("Illegal RegExp pattern ("+String(p)+")",a))},
m2:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lI:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
k6:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
k7:function(a,b,c){var u=H.m3(a,b,c)
return u},
m3:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.k6(b),'g'),H.lI(c))},
hr:function hr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fH:function fH(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
iN:function iN(a){this.a=a},
dO:function dO(a){this.a=a
this.b=null},
bE:function bE(){},
hg:function hg(){},
ha:function ha(){},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
el:function el(a){this.a=a},
fW:function fW(a){this.a=a},
L:function L(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f8:function f8(a,b){this.a=a
this.b=b
this.c=null},
cE:function cE(a,b){this.a=a
this.$ti=b},
f9:function f9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
f3:function f3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cc:function(a){return a},
b4:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.b7(b,a))},
l9:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lH(a,b,c))
return b},
bT:function bT(){},
cM:function cM(){},
bS:function bS(){},
cN:function cN(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
cO:function cO(){},
fG:function fG(){},
c3:function c3(){},
c4:function c4(){},
c5:function c5(){},
c6:function c6(){},
lK:function(a){return J.jr(a?Object.keys(a):[],null)},
m6:function(a){return v.mangledGlobalNames[a]},
lX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jg:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iu:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.je==null){H.lR()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jJ("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jh()]
if(r!=null)return r
r=H.lV(a)
if(r!=null)return r
if(typeof a=="function")return C.B
u=Object.getPrototypeOf(a)
if(u==null)return C.o
if(u===Object.prototype)return C.o
if(typeof s=="function"){Object.defineProperty(s,$.jh(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
kC:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jk(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.as(a,0,4294967295,"length",null))
return J.jr(new Array(a),b)},
jr:function(a,b){return J.iX(H.c(a,[b]))},
iX:function(a){a.fixed$length=Array
return a},
a1:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cz.prototype
return J.f2.prototype}if(typeof a=="string")return J.bh.prototype
if(a==null)return J.cA.prototype
if(typeof a=="boolean")return J.f1.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.a_)return a
return J.iu(a)},
jb:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.a_)return a
return J.iu(a)},
jc:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.a_)return a
return J.iu(a)},
lM:function(a){if(typeof a=="number")return J.bN.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.c1.prototype
return a},
lN:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.a_)return a
return J.iu(a)},
u:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a1(a).q(a,b)},
e9:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jb(a).i(a,b)},
kp:function(a,b,c,d){return J.lN(a).fw(a,b,c,d)},
iO:function(a,b){return J.lM(a).bc(a,b)},
jj:function(a,b){return J.jc(a).G(a,b)},
kq:function(a,b){return J.jc(a).E(a,b)},
bb:function(a){return J.a1(a).gH(a)},
bA:function(a){return J.jc(a).gR(a)},
bB:function(a){return J.jb(a).gk(a)},
a5:function(a){return J.a1(a).h(a)},
a:function a(){},
f1:function f1(){},
cA:function cA(){},
cB:function cB(){},
fL:function fL(){},
c1:function c1(){},
aR:function aR(){},
aQ:function aQ(a){this.$ti=a},
iY:function iY(a){this.$ti=a},
W:function W(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bN:function bN(){},
cz:function cz(){},
f2:function f2(){},
bh:function bh(){}},P={
l2:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lD()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cf(new P.hX(s),1)).observe(u,{childList:true})
return new P.hW(s,u,t)}else if(self.setImmediate!=null)return P.lE()
return P.lF()},
l3:function(a){self.scheduleImmediate(H.cf(new P.hY(a),0))},
l4:function(a){self.setImmediate(H.cf(new P.hZ(a),0))},
l5:function(a){P.j4(C.j,a)},
j4:function(a,b){var u=C.d.a9(a.a,1000)
return P.l8(u<0?0:u,b)},
l8:function(a,b){var u=new P.ih()
u.dV(a,b)
return u},
lw:function(){var u,t
for(;u=$.bw,u!=null;){$.ce=null
t=u.b
$.bw=t
if(t==null)$.cd=null
u.a.$0()}},
lB:function(){$.j8=!0
try{P.lw()}finally{$.ce=null
$.j8=!1
if($.bw!=null)$.ji().$1(P.jW())}},
lz:function(a){var u=new P.dg(a)
if($.bw==null){$.bw=$.cd=u
if(!$.j8)$.ji().$1(P.jW())}else $.cd=$.cd.b=u},
lA:function(a){var u,t,s=$.bw
if(s==null){P.lz(a)
$.ce=$.cd
return}u=new P.dg(a)
t=$.ce
if(t==null){u.b=s
$.bw=$.ce=u}else{u.b=t.b
$.ce=t.b=u
if(u.b==null)$.cd=u}},
jH:function(a,b){var u=$.av
if(u===C.e)return P.j4(a,b)
return P.j4(a,u.fH(b))},
jT:function(a,b,c,d,e){var u={}
u.a=d
P.lA(new P.iq(u,e))},
lx:function(a,b,c,d){var u,t=$.av
if(t===c)return d.$0()
$.av=c
u=t
try{t=d.$0()
return t}finally{$.av=u}},
ly:function(a,b,c,d,e){var u,t=$.av
if(t===c)return d.$1(e)
$.av=c
u=t
try{t=d.$1(e)
return t}finally{$.av=u}},
hX:function hX(a){this.a=a},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
ih:function ih(){},
ii:function ii(a,b){this.a=a
this.b=b},
dg:function dg(a){this.a=a
this.b=null},
d_:function d_(){},
hd:function hd(){},
ik:function ik(){},
iq:function iq(a,b){this.a=a
this.b=b},
ia:function ia(){},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function(a,b){return new H.L([a,b])},
kF:function(a){return H.lL(a,new H.L([null,null]))},
kG:function(a){return new P.i7([a])},
j7:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
l7:function(a,b){var u=new P.dw(a,b)
u.c=a.e
return u},
kB:function(a,b,c){var u,t
if(P.j9(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.t])
$.a0.push(a)
try{P.lb(a,u)}finally{if(0>=$.a0.length)return H.b($.a0,-1)
$.a0.pop()}t=P.jF(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iW:function(a,b,c){var u,t
if(P.j9(a))return b+"..."+c
u=new P.aY(b)
$.a0.push(a)
try{t=u
t.a=P.jF(t.a,a,", ")}finally{if(0>=$.a0.length)return H.b($.a0,-1)
$.a0.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
j9:function(a){var u,t
for(u=$.a0.length,t=0;t<u;++t)if(a===$.a0[t])return!0
return!1},
lb:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.B())return
u=H.e(n.gI(n))
b.push(u)
m+=u.length+2;++l}if(!n.B()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.B()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.B();r=q,q=p){p=n.gI(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jt:function(a){var u,t={}
if(P.j9(a))return"{...}"
u=new P.aY("")
try{$.a0.push(a)
u.a+="{"
t.a=!0
J.kq(a,new P.fe(t,u))
u.a+="}"}finally{if(0>=$.a0.length)return H.b($.a0,-1)
$.a0.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
i7:function i7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i8:function i8(a){this.a=a
this.c=this.b=null},
dw:function dw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fa:function fa(){},
p:function p(){},
fd:function fd(){},
fe:function fe(a,b){this.a=a
this.b=b},
aB:function aB(){},
id:function id(){},
dx:function dx(){},
en:function en(){},
eq:function eq(){},
eE:function eE(){},
hG:function hG(){},
hH:function hH(){},
ij:function ij(a){this.b=0
this.c=a},
kA:function(a){if(a instanceof H.bE)return a.h(0)
return"Instance of '"+H.e(H.bX(a))+"'"},
kH:function(a,b,c){var u,t,s=J.kC(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
js:function(a,b,c){var u,t=H.c([],[c])
for(u=J.bA(a);u.B();)t.push(u.gI(u))
if(b)return t
return J.iX(t)},
j2:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.jC(0,null,u)
return H.jA(t<u?C.a.dJ(a,0,t):a)}return P.l0(a,0,null)},
l0:function(a,b,c){var u,t,s=J.bA(a)
for(u=0;u<b;++u)if(!s.B())throw H.f(P.as(b,0,u,null,null))
t=[]
for(;s.B();)t.push(s.gI(s))
return H.jA(t)},
kV:function(a){return new H.f3(a,H.kD(a,!1,!0,!1,!1,!1))},
jF:function(a,b,c){var u=J.bA(b)
if(!u.B())return a
if(c.length===0){do a+=H.e(u.gI(u))
while(u.B())}else{a+=H.e(u.gI(u))
for(;u.B();)a=a+c+H.e(u.gI(u))}return a},
jR:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.ko().b
u=u.test(b)}else u=!1
if(u)return b
t=C.z.fL(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kT(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
ky:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cq:function(a){if(a>=10)return""+a
return"0"+a},
iV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kA(a)},
jk:function(a,b,c){return new P.aw(!0,a,b,c)},
cT:function(a,b){return new P.bq(null,null,!0,a,b,"Value not in range")},
as:function(a,b,c,d,e){return new P.bq(b,c,!0,a,d,"Invalid value")},
jC:function(a,b,c){if(0>a||a>c)throw H.f(P.as(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.as(b,a,c,"end",null))
return b}return c},
jB:function(a,b){if(typeof a!=="number")return a.a8()
if(a<0)throw H.f(P.as(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.bB(b):e
return new P.eT(u,!0,a,c,"Index out of range")},
ad:function(a){return new P.hE(a)},
jJ:function(a){return new P.hB(a)},
bF:function(a){return new P.ep(a)},
l:function(a){return new P.dp(a)},
k4:function(a){H.lX(a)},
b6:function b6(){},
an:function an(a,b){this.a=a
this.b=b},
I:function I(){},
bH:function bH(a){this.a=a},
eB:function eB(){},
eC:function eC(){},
bf:function bf(){},
cQ:function cQ(){},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bq:function bq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eT:function eT(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hE:function hE(a){this.a=a},
hB:function hB(a){this.a=a},
h9:function h9(a){this.a=a},
ep:function ep(a){this.a=a},
fK:function fK(){},
cY:function cY(){},
ev:function ev(a){this.a=a},
dp:function dp(a){this.a=a},
eP:function eP(a,b){this.a=a
this.b=b},
y:function y(){},
i:function i(){},
f0:function f0(){},
bk:function bk(){},
cH:function cH(){},
aT:function aT(){},
af:function af(){},
a_:function a_(){},
t:function t(){},
aY:function aY(a){this.a=a},
aJ:function(a){var u,t,s,r,q
if(a==null)return
u=P.kE(P.t,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.n(0,q,a[q])}return u},
lG:function(a){var u={}
a.E(0,new P.ir(u))
return u},
ir:function ir(a){this.a=a},
eL:function eL(a,b){this.a=a
this.b=b},
eM:function eM(){},
eN:function eN(){},
i6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l6:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
i9:function i9(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bj:function bj(){},
f6:function f6(){},
bn:function bn(){},
fI:function fI(){},
fP:function fP(){},
he:function he(){},
j:function j(){},
bs:function bs(){},
hq:function hq(){},
du:function du(){},
dv:function dv(){},
dF:function dF(){},
dG:function dG(){},
dQ:function dQ(){},
dR:function dR(){},
dW:function dW(){},
dX:function dX(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(a){this.a=a},
ei:function ei(){},
bc:function bc(){},
fJ:function fJ(){},
dh:function dh(){},
h8:function h8(){},
dM:function dM(){},
dN:function dN(){}},W={
kr:function(){var u=document.createElement("a")
return u},
jn:function(){var u=document.createElement("canvas")
return u},
iU:function(a){return"wheel"},
i5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jQ:function(a,b,c,d){var u=W.i5(W.i5(W.i5(W.i5(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
V:function(a,b,c,d){var u=W.jU(new W.i3(c),W.h)
if(u!=null&&!0)J.kp(a,b,u,!1)
return new W.i2(a,b,u,!1)},
jU:function(a,b){var u=$.av
if(u===C.e)return a
return u.fI(a,b)},
k:function k(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
cj:function cj(){},
be:function be(){},
aL:function aL(){},
er:function er(){},
F:function F(){},
bG:function bG(){},
es:function es(){},
a6:function a6(){},
am:function am(){},
et:function et(){},
eu:function eu(){},
ew:function ew(){},
ey:function ey(){},
cs:function cs(){},
ct:function ct(){},
ez:function ez(){},
eA:function eA(){},
i0:function i0(a,b){this.a=a
this.b=b},
Z:function Z(){},
h:function h(){},
d:function d(){},
aM:function aM(){},
eJ:function eJ(){},
eK:function eK(){},
eO:function eO(){},
aN:function aN(){},
eS:function eS(){},
bM:function bM(){},
bi:function bi(){},
fb:function fb(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(a){this.a=a},
fx:function fx(){},
fy:function fy(a){this.a=a},
aS:function aS(){},
fz:function fz(){},
ar:function ar(){},
i_:function i_(a){this.a=a},
J:function J(){},
cP:function cP(){},
aU:function aU(){},
fM:function fM(){},
fU:function fU(){},
fV:function fV(a){this.a=a},
fX:function fX(){},
aV:function aV(){},
h5:function h5(){},
aW:function aW(){},
h6:function h6(){},
aX:function aX(){},
hb:function hb(){},
hc:function hc(a){this.a=a},
aE:function aE(){},
aZ:function aZ(){},
aF:function aF(){},
hh:function hh(){},
hi:function hi(){},
hl:function hl(){},
b_:function b_(){},
br:function br(){},
ho:function ho(){},
hp:function hp(){},
b0:function b0(){},
hF:function hF(){},
hT:function hT(){},
b3:function b3(){},
c2:function c2(){},
i1:function i1(){},
dj:function dj(){},
i4:function i4(){},
dC:function dC(){},
ie:function ie(){},
ig:function ig(){},
i2:function i2(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
i3:function i3(a){this.a=a},
G:function G(){},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
di:function di(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dD:function dD(){},
dE:function dE(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
c7:function c7(){},
c8:function c8(){},
dK:function dK(){},
dL:function dL(){},
dP:function dP(){},
dS:function dS(){},
dT:function dT(){},
c9:function c9(){},
ca:function ca(){},
dU:function dU(){},
dV:function dV(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){}},T={
U:function(a){var u=new T.fY()
u.dP(a)
return u},
eb:function eb(){},
cx:function cx(){},
cI:function cI(){},
aD:function aD(){this.a=null},
fY:function fY(){this.a=null},
hj:function hj(){}},R={cZ:function cZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},d3:function d3(a){this.b=a
this.c=null},hm:function hm(){this.c=this.b=this.a=null},d5:function d5(a){this.b=a
this.a=this.c=null}},O={
iR:function(a){var u=new O.ax([a])
u.b4(a)
return u},
ax:function ax(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bO:function bO(){this.b=this.a=null},
jp:function(){var u=new O.cy()
u.b=V.jO()
u.c=new V.B(0.2,0.3,0.4,1)
u.d=new V.B(0.1,0.2,0.3,1)
u.e=V.cn(0.7)
u.f=V.cn(0.3)
u.r=V.cn(0.5)
u.x=V.cn(0.5)
u.y=new V.B(1,1,1,1)
u.z=V.cn(0.8)
u.r1=u.k4=u.k3=u.k2=u.k1=u.id=u.go=u.fy=u.fx=u.fr=u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=!1
u.r2=1
return u},
bl:function(){var u,t=new O.cJ(),s=O.iR(V.aC)
t.e=s
s.aN(t.gej(),t.gel())
s=new O.ap(t,"emission")
s.c=new A.R(!1,!1,!1)
s.f=new V.P(0,0,0)
t.f=s
s=new O.ap(t,"ambient")
s.c=new A.R(!1,!1,!1)
s.f=new V.P(0,0,0)
t.r=s
s=new O.ap(t,"diffuse")
s.c=new A.R(!1,!1,!1)
s.f=new V.P(0,0,0)
t.x=s
s=new O.ap(t,"invDiffuse")
s.c=new A.R(!1,!1,!1)
s.f=new V.P(0,0,0)
t.y=s
s=new O.fn(t,"specular")
s.c=new A.R(!1,!1,!1)
s.f=new V.P(0,0,0)
s.ch=100
t.z=s
s=new O.fj(t,"bump")
s.c=new A.R(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.ap(t,"reflect")
s.c=new A.R(!1,!1,!1)
s.f=new V.P(0,0,0)
t.cx=s
s=new O.fm(t,"refract")
s.c=new A.R(!1,!1,!1)
s.f=new V.P(0,0,0)
s.ch=1
t.cy=s
s=new O.fi(t,"alpha")
s.c=new A.R(!1,!1,!1)
s.f=1
t.db=s
s=new D.cD()
s.b4(D.a2)
s.e=H.c([],[D.ex])
s.f=H.c([],[D.fN])
s.r=H.c([],[D.h7])
s.y=s.x=null
s.ci(s.geh(),s.geS(),s.geW())
t.dx=s
u=new O.fl()
u.b=new V.B(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.D():u
s.j(0,t.gfc())
s=t.dx
u=s.y
s=u==null?s.y=D.D():u
s.j(0,t.gdT())
t.fr=null
return t},
cy:function cy(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eV:function eV(a,b){this.a=a
this.b=b},
eW:function eW(a){this.a=a},
eY:function eY(a,b){this.a=a
this.b=b},
eX:function eX(a){this.a=a},
eZ:function eZ(a,b){this.a=a
this.b=b},
f_:function f_(a,b){this.a=a
this.b=b},
cJ:function cJ(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(){},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(){},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(){},
fi:function fi(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cK:function cK(){},
fj:function fj(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ap:function ap(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fl:function fl(){var _=this
_.e=_.d=_.c=_.b=null},
fm:function fm(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fn:function fn(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d0:function d0(){}},E={
a7:function(){var u,t=new E.ay()
t.a=""
t.b=!0
u=O.iR(E.ay)
t.y=u
u.aN(t.gh0(),t.gh3())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa_(0,null)
t.sa4(null)
t.sS(null)
return t},
kW:function(a,b){var u=new E.fQ(a)
u.dO(a,b)
return u},
j3:function(a){var u=document.getElementById(a)
if(u==null)throw H.f(P.l("Failed to find an element with the identifier, "+a+"."))
return E.l1(u,!0,!0,!0,!1)},
l1:function(a,b,c,d,e){var u,t,s=J.a1(a)
if(!!s.$ibe)return E.jG(a,!0,!0,!0,!1)
u=W.jn()
t=u.style
t.width="100%"
t.height="100%"
s.gcZ(a).j(0,u)
return E.jG(u,!0,!0,!0,!1)},
jG:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d1(),p=C.i.dF(a,"webgl2",P.kF(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.n(P.l("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kW(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.d9(a)
t=new X.f5()
t.c=new X.a8(!1,!1,!1)
t.d=P.kG(P.y)
u.b=t
t=new X.fA(u)
t.f=0
t.r=V.ag()
t.x=V.ag()
t.ch=t.Q=1
u.c=t
t=new X.fc(u)
t.r=0
t.x=V.ag()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hn(u)
t.f=V.ag()
t.r=V.ag()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.d_,P.a_]])
u.z=t
s=document
t.push(W.V(s,"contextmenu",u.geu(),!1))
u.z.push(W.V(a,"focus",u.geA(),!1))
u.z.push(W.V(a,"blur",u.gen(),!1))
u.z.push(W.V(s,"keyup",u.geE(),!1))
u.z.push(W.V(s,"keydown",u.geC(),!1))
u.z.push(W.V(a,"mousedown",u.geI(),!1))
u.z.push(W.V(a,"mouseup",u.geM(),!1))
u.z.push(W.V(a,r,u.geK(),!1))
t=u.z
W.iU(a)
W.iU(a)
t.push(W.V(a,W.iU(a),u.geO(),!1))
u.z.push(W.V(s,r,u.gew(),!1))
u.z.push(W.V(s,"mouseup",u.gey(),!1))
u.z.push(W.V(s,"pointerlockchange",u.geQ(),!1))
u.z.push(W.V(a,"touchstart",u.gf5(),!1))
u.z.push(W.V(a,"touchend",u.gf1(),!1))
u.z.push(W.V(a,"touchmove",u.gf3(),!1))
q.r=u
q.Q=!0
q.ch=!1
Date.now()
q.cy=0
q.cN()
return q},
ej:function ej(){},
ay:function ay(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fQ:function fQ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fR:function fR(a){this.a=a},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
d1:function d1(){var _=this
_.cy=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
hk:function hk(a){this.a=a}},Z={
j6:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cc(c)),35044)
a.bindBuffer(b,null)
return new Z.de(b,u)},
ae:function(a){return new Z.aH(a)},
de:function de(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
df:function df(a){this.a=a},
bd:function bd(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cl:function cl(){this.a=null},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(a){this.a=a}},D={
D:function(){var u=new D.bJ()
u.d=0
return u},
em:function em(){},
bJ:function bJ(){var _=this
_.d=_.c=_.b=_.a=null},
eG:function eG(a){this.a=a},
eH:function eH(a){this.a=a},
S:function S(){this.b=null},
aO:function aO(){this.b=null},
aP:function aP(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ex:function ex(){},
a2:function a2(){},
cD:function cD(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fN:function fN(){},
h7:function h7(){}},X={cm:function cm(a,b){this.a=a
this.b=b},cC:function cC(a,b){this.a=a
this.b=b},f5:function f5(){var _=this
_.d=_.c=_.b=_.a=null},cG:function cG(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fc:function fc(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},a9:function a9(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fA:function fA(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bR:function bR(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fO:function fO(){},d4:function d4(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hn:function hn(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},d9:function d9(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
eR:function(a,b){var u=new X.eQ(),t=new V.B(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jE
if(t==null){t=V.jD(0,0,1,1)
$.jE=t}u.r=t
return u},
bo:function(){var u,t=new X.cR()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.saz(null)
t.sS(null)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.x().a)){t.c=1.0471975511965976
u=new D.w("fov",u,1.0471975511965976)
u.b=!0
t.ar(u)}u=t.d
if(!(Math.abs(u-0.1)<$.x().a)){t.d=0.1
u=new D.w("near",u,0.1)
u.b=!0
t.ar(u)}u=t.e
if(!(Math.abs(u-2000)<$.x().a)){t.e=2000
u=new D.w("far",u,2000)
u.b=!0
t.ar(u)}return t},
iQ:function iQ(){},
eQ:function eQ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cR:function cR(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(){}},V={
cn:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.B(a,a,a,1)},
m7:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dG(a-b,u)
return(a<0?a+u:a)+b},
z:function(a,b,c){if(a==null)return C.c.ac("null",c)
return C.c.ac(C.b.hp(Math.abs(a-0)<$.x().a?0:a,b),c+b+1)},
by:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.t])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.z(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.c.ac(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
bQ:function(){var u=$.ju
return u==null?$.ju=V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
T:function(a,b,c){return V.aq(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
bm:function(a,b,c,d){return V.aq(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
bP:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aq(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
j1:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aq(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
ag:function(){var u=$.jx
return u==null?$.jx=new V.N(0,0):u},
jy:function(){var u=$.bV
return u==null?$.bV=new V.M(0,0,0):u},
jD:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cU(a,b,c,d)},
bv:function(){var u=$.jN
return u==null?$.jN=new V.r(0,0,0):u},
jO:function(){var u=$.jL
return u==null?$.jL=new V.r(0,0,-1):u},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(a){this.a=a},
cL:function cL(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aC:function aC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
N:function N(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A:function A(a,b){this.a=a
this.b=b},
r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kY:function(a){var u=new V.h1()
u.dQ(a,!0)
return u},
h1:function h1(){this.b=this.a=null},
h3:function h3(a){this.a=a},
h2:function h2(a){this.a=a}},U={
iS:function(){var u=new U.eo()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
C:function(a){var u=new U.cp()
u.sN(0,a)
return u},
ao:function(){var u=new U.bL()
u.b4(U.a3)
u.aN(u.gdR(),u.geU())
u.e=null
u.f=V.bQ()
u.r=0
return u},
eo:function eo(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){this.b=this.a=null},
bL:function bL(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
da:function da(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
db:function db(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dc:function dc(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
iT:function(a){var u=new M.co()
u.b4(M.a4)
u.e=!0
u.f=!1
u.r=null
u.aN(u.geY(),u.gf_())
u.bM(0,a)
return u},
bI:function(){var u,t,s=new M.cu()
s.a=!0
u=O.iR(E.ay)
s.e=u
u.aN(s.gep(),s.ger())
s.y=s.x=s.r=s.f=null
t=X.eR(!0,null)
s.sav(null)
s.sbj(0,t)
s.sa4(null)
return s},
co:function co(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cu:function cu(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a4:function a4(){},
m_:function(a){var u,t,s,r,q,p,o,n,m,l,k={},j=E.j3(a),i=O.bl(),h=i.f
h.sV(0,new V.P(0.4,0.6,0.8))
u=O.bl()
h=u.f
h.sV(0,new V.P(0.8,0.6,0.4))
u.db.sZ(0,0.3)
t=O.bl()
h=t.f
h.sV(0,new V.P(0.4,0.6,0.8))
t.db.sZ(0,0.3)
s=U.C(null)
r=U.C(null)
q=E.a7()
q.sa4(i)
h=F.ah()
h.ay(F.iA(!0))
h.ay(F.jY(!0,36))
q.sa_(0,h)
p=E.a7()
p.sa4(u)
p.sa_(0,F.jf())
h=U.ao()
h.j(0,U.C(V.bm(1.3,1.3,1.3,1)))
h.j(0,U.C(V.bP(-1.5707963267948966)))
h.j(0,s)
p.sS(h)
o=E.a7()
o.sa_(0,F.jf())
h=U.ao()
h.j(0,U.C(V.T(0,0,0.1)))
o.sS(h)
n=E.a7()
n.sa_(0,F.jf())
h=U.ao()
h.j(0,r)
n.sS(h)
m=M.bI()
m.sbj(0,X.eR(!1,null))
h=X.bo()
h.saz(U.C(V.T(-0.5,0,0)))
h.sS(U.C(V.T(0,0,5)))
m.sav(h)
m.e.j(0,p)
m.e.j(0,q)
l=M.bI()
h=X.bo()
h.saz(U.C(V.T(0.5,0,0)))
h.sS(U.C(V.T(0,0,5)))
l.sav(h)
l.sa4(t)
l.e.j(0,n)
l.e.j(0,o)
k.a=0.5
k.b=!1
j.r.c.gaY().j(0,new M.iB(k))
j.r.c.gaA().j(0,new M.iC(k))
j.r.c.gb0().j(0,new M.iD(k,s,o,n,r))
j.sbl(M.iT(H.c([l,m],[M.a4])))},
m0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=E.j3(a),f=O.jp()
f.sck(!0)
f.scj(!0)
f.sd1(new V.B(0.2,0.3,0.4,0.2))
f.scW(new V.B(0.1,0.2,0.3,0.2))
u=O.bl()
t=u.f
t.sV(0,new V.P(0.8,0.6,0.4))
u.db.sZ(0,0.3)
s=O.bl()
t=s.f
t.sV(0,new V.P(0.4,0.6,0.8))
r=U.C(i)
q=U.C(i)
p=U.ao()
p.j(0,U.C(V.bP(0.4)))
p.j(0,U.C(V.j1(0.4)))
o=E.a7()
o.sa4(f)
t=F.ah()
t.ay(F.jX(1,i,1))
t.ay(F.k1(2))
o.sa_(0,t)
o.sS(p)
n=E.a7()
n.sa4(u)
n.sa_(0,F.iA(!1))
t=U.ao()
t.j(0,U.C(V.bm(1.3,1.3,1.3,1)))
t.j(0,U.C(V.bP(-1.5707963267948966)))
t.j(0,r)
t.j(0,p)
n.sS(t)
m=E.a7()
m.sa_(0,F.iA(!0))
l=E.a7()
l.sa_(0,F.jY(!0,36))
t=U.ao()
t.j(0,q)
l.sS(t)
k=M.bI()
k.sbj(0,X.eR(!1,i))
t=X.bo()
t.saz(U.C(V.T(-0.5,0,0)))
t.sS(U.C(V.T(0,0,5)))
k.sav(t)
k.e.j(0,n)
k.e.j(0,o)
j=M.bI()
t=X.bo()
t.saz(U.C(V.T(0.5,0,0)))
t.sS(U.C(V.T(0,0,5)))
j.sav(t)
j.sa4(s)
j.e.j(0,l)
j.e.j(0,m)
h.a=0.5
h.b=!1
g.r.c.gaY().j(0,new M.iE(h))
g.r.c.gaA().j(0,new M.iF(h))
g.r.c.gb0().j(0,new M.iG(h,r,m,l,q))
g.sbl(M.iT(H.c([j,k],[M.a4])))},
m1:function(b8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3="modifiers",b4={},b5=E.j3(b8),b6=O.bl(),b7=b6.f
b7.sV(0,new V.P(0.4,0.6,0.8))
u=O.bl()
b7=u.f
b7.sV(0,new V.P(0.8,0.6,0.4))
u.db.sZ(0,0.3)
t=O.jp()
t.sck(!0)
t.scj(!0)
t.sd1(new V.B(0.2,0.3,0.4,0.2))
t.scW(new V.B(0.1,0.2,0.3,0.2))
s=U.C(b2)
r=U.C(b2)
q=U.ao()
q.j(0,U.C(V.bP(0.4)))
q.j(0,U.C(V.j1(0.4)))
p=U.ao()
o=F.ah()
n=o.a.U(1,-1,1)
m=o.a.U(1,1,1)
l=o.a.U(1,1,-1)
k=o.a.U(1,-1,-1)
j=o.a.U(-1,-1,1)
i=o.a.U(-1,1,1)
h=o.a.U(-1,1,-1)
g=o.a.U(-1,-1,-1)
f=o.a.U(0.5,-0.5,0.5)
e=o.a.U(0.5,0.5,0.5)
d=o.a.U(0.5,0.5,-0.5)
c=o.a.U(0.5,-0.5,-0.5)
b=o.a.U(-0.5,-0.5,0.5)
a=o.a.U(-0.5,0.5,0.5)
a0=o.a.U(-0.5,0.5,-0.5)
a1=o.a.U(-0.5,-0.5,-0.5)
o.c.fB(H.c([n,m,m,l,l,k,k,n,j,i,i,h,h,g,g,j,f,e,e,d,d,c,c,f,b,a,a,a0,a0,a1,a1,b,n,j,m,i,l,h,k,g,f,b,e,a,d,a0,c,a1,n,f,m,e,l,d,k,c,j,b,i,a,h,a0,g,a1],[F.au]))
a2=E.a7()
a2.sa4(b6)
a2.sa_(0,o)
a2.sS(q)
a3=E.a7()
a3.sa4(u)
a3.sa_(0,F.iA(!1))
b7=U.ao()
b7.j(0,U.C(V.bm(1.1,1.1,1.1,1)))
b7.j(0,U.C(V.bP(-1.5707963267948966)))
b7.j(0,s)
b7.j(0,q)
a3.sS(b7)
a4=E.a7()
a4.sa_(0,F.jX(1,b2,1))
a4.sS(p)
a5=E.a7()
a5.sa_(0,F.k1(2))
b7=U.ao()
b7.j(0,r)
b7.j(0,p)
a5.sS(b7)
a6=M.bI()
a6.sbj(0,X.eR(!1,b2))
b7=X.bo()
b7.saz(U.C(V.T(-0.5,0,0)))
b7.sS(U.C(V.T(0,0,5)))
a6.sav(b7)
a6.e.j(0,a2)
a6.e.j(0,a3)
a7=M.bI()
b7=X.bo()
b7.saz(U.C(V.T(0.5,0,0)))
b7.sS(U.C(V.T(0,0,5)))
a7.sav(b7)
a7.sa4(t)
a7.e.j(0,a5)
a7.e.j(0,a4)
b4.a=0.5
b4.b=!1
b5.r.c.gaY().j(0,new M.iH(b4))
b5.r.c.gaA().j(0,new M.iI(b4))
b5.r.c.gb0().j(0,new M.iJ(b4,s,a4,a5,r))
b4=b5.r
b7=new U.db()
a8=U.iS()
a8.scf(0,!0)
a8.sc3(6.283185307179586)
a8.sc5(0)
a8.sX(0,0)
a8.sc4(100)
a8.sP(0)
a8.sbU(0.5)
b7.b=a8
a9=b7.gaF()
a8.gt().j(0,a9)
a8=U.iS()
a8.scf(0,!0)
a8.sc3(6.283185307179586)
a8.sc5(0)
a8.sX(0,0)
a8.sc4(100)
a8.sP(0)
a8.sbU(0.5)
b7.c=a8
a8.gt().j(0,a9)
b7.d=null
b7.r=b7.f=b7.e=!1
b7.y=b7.x=2.5
b7.Q=4
b7.ch=b7.cx=!1
b7.db=b7.cy=0
b7.dx=null
b7.dy=0
b7.fx=b7.fr=null
b0=new X.a8(!1,!1,!1)
b1=b7.d
b7.d=b0
a8=new D.w(b3,b1,b0)
a8.b=!0
b7.L(a8)
a8=b7.f
if(a8!==!1){b7.f=!1
a8=new D.w("invertX",a8,!1)
a8.b=!0
b7.L(a8)}a8=b7.r
if(a8!==!0){b7.r=!0
a8=new D.w("invertY",a8,!0)
a8.b=!0
b7.L(a8)}b7.aU(b4)
p.j(0,b7)
b4=b5.r
b7=new U.da()
a8=U.iS()
a8.scf(0,!0)
a8.sc3(6.283185307179586)
a8.sc5(0)
a8.sX(0,0)
a8.sc4(100)
a8.sP(0)
a8.sbU(0.2)
b7.b=a8
a8.gt().j(0,b7.gaF())
b7.c=null
b7.d=!1
b7.e=2.5
b7.r=4
b7.x=b7.y=!1
b7.z=0
b7.Q=null
b7.ch=0
b7.cy=b7.cx=null
b0=new X.a8(!0,!1,!1)
b1=b7.c
b7.c=b0
a8=new D.w(b3,b1,b0)
a8.b=!0
b7.L(a8)
b7.aU(b4)
p.j(0,b7)
b4=b5.r
b7=new U.dc()
b7.c=0.01
b7.e=b7.d=0
b0=new X.a8(!1,!1,!1)
b7.b=b0
a8=new D.w(b3,b2,b0)
a8.b=!0
b7.L(a8)
b7.aU(b4)
p.j(0,b7)
b5.sbl(M.iT(H.c([a7,a6],[M.a4])))},
k2:function(){var u="target2D",t="_Click and drag to move the location of the slice._",s="target3D",r="target4D",q=V.kY("Hypersphere"),p=[P.t]
q.ae(H.c(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."],p))
q.bN(3,"2D: circle and square")
q.ae(H.c(["Imagine taking slices out of a circle inscribed in a square. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top, the line caused by the circle is small compared to the square. ","The corners of the square aren't covered by the circle."],p))
q.bO(u)
q.ae(H.c([t],p))
q.bN(3,"3D: sphere and cube")
q.ae(H.c(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."],p))
q.bO(s)
q.ae(H.c([t],p))
q.bN(3,"4D: hypersphere and hypercube")
q.ae(H.c(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges, the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches all ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."],p))
q.bO(r)
q.ae(H.c(["_The shape on the left is an artistic representation of a 4D hypercube._ ","_Click and drag on the left to move the location of the slice._","_Click and drag on the right to rotate the resulting 3D slice._"],p))
q.ae(H.c(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."],p))
q.ae(H.c(["\xab[Back to Examples|../]"],p))
M.m_(u)
M.m0(s)
M.m1(r)},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
iG:function iG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
iJ:function iJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},A={
kI:function(a,b){var u=a.aZ,t=new A.fh(b,u)
t.cq(b,u)
t.dN(a,b)
return t},
kJ:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gZ(a0)+a1.gZ(a1)+a2.gZ(a2)+a3.gZ(a3)+a4.gZ(a4)+a5.gZ(a5)+a6.gZ(a6)+a7.gZ(a7)+a8.gZ(a8)+"_"
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
g=$.ak()
if(k){u=$.aj()
g=new Z.aH(g.a|u.a)}if(j){u=$.ai()
g=new Z.aH(g.a|u.a)}if(i){u=$.aK()
g=new Z.aH(g.a|u.a)}return new A.fk(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
io:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ip:function(a,b,c){var u
A.io(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.iL(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
lf:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.io(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
lc:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ip(b,t,"ambient")
b.a+="\n"},
ld:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ip(b,t,"diffuse")
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
lg:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ip(b,t,"invDiffuse")
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
lm:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ip(b,t,"specular")
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
li:function(a,b){var u,t,s
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
lk:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.io(b,t,"reflect")
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
ll:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.io(b,t,"refract")
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
le:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.iL(t)
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
r=[P.t]
o=H.c([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.a.u(m," + ")+");\n"}else c.a+="   highLight = "+C.a.u(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.u(o," + ")+");\n"
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
lj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.iL(t)
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
c.a=r+"\n"}r=[P.t]
l=H.c([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.u(l," * ")+";\n"
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
if(o)l.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.c([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.u(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.u(l," + ")+");\n"
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
ln:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.iL(t)
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
c.a=u+"\n"}u=[P.t]
j=H.c([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.u(j," * ")+";\n"
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
if(r)j.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.c([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.u(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.u(j," + ")+");\n"
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
lh:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.t])
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
u=b.a+="   return "+C.a.u(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lo:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aY("")
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
A.lf(a,j)
A.lc(a,j)
A.ld(a,j)
A.lg(a,j)
A.lm(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.lk(a,j)
A.ll(a,j)}A.li(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.le(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.lj(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.ln(a,q[o],j)
A.lh(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.t])
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
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aP(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aP(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aP(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.u(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lp:function(a,b){var u,t,s
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
lr:function(a,b){var u
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
lq:function(a,b){var u
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
lt:function(a,b){var u,t
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
lu:function(a,b){var u,t
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
ls:function(a,b){var u
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
lv:function(a,b){var u
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
iL:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.c.aP(a,1)},
j5:function(a,b,c,d,e){var u=new A.hu(a,c,e)
u.f=d
P.kH(d,0,P.y)
return u},
ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},
ee:function ee(a){this.a=a},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fh:function fh(a,b){var _=this
_.hw=_.hv=_.d5=_.d4=_.aZ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hJ=_.hI=_.hH=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.hG=_.hF=_.dd=_.hE=_.hD=_.dc=_.da=_.hC=_.hB=_.d9=_.d8=_.hA=_.hz=_.d7=_.hy=_.hx=_.d6=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cr:function cr(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aZ=b3
_.d4=b4},
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
cV:function cV(){},
d6:function d6(){},
hz:function hz(a){this.a=a},
d7:function d7(a,b,c){this.a=a
this.c=b
this.d=c},
hw:function hw(a,b,c){this.a=a
this.c=b
this.d=c},
hx:function hx(a,b,c){this.a=a
this.c=b
this.d=c},
hy:function hy(a,b,c){this.a=a
this.c=b
this.d=c},
hu:function hu(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
hv:function hv(a,b,c){this.a=a
this.c=b
this.d=c},
E:function E(a,b,c){this.a=a
this.c=b
this.d=c},
b1:function b1(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
bZ:function bZ(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
bt:function bt(a,b,c){this.a=a
this.c=b
this.d=c},
bu:function bu(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jf:function(){var u,t,s=F.ah(),r=s.a,q=V.ag(),p=new V.r(-1,-1,0)
p=p.l(0,Math.sqrt(p.v(p)))
u=r.aH(new V.aa(1,2,4,6),new V.B(1,0,0,1),new V.M(-1,0,0),q,p,null)
r=s.a
q=new V.r(1,-1,0)
q=q.l(0,Math.sqrt(q.v(q)))
t=r.aH(new V.aa(0,3,4,6),new V.B(0,0,1,1),new V.M(1,0,0),new V.N(1,0),q,null)
s.c.bL(0,u,t)
return s},
iA:function(a){var u,t,s,r,q,p=null,o=F.ah(),n=o.a,m=new V.r(-1,-1,1)
m=m.l(0,Math.sqrt(m.v(m)))
u=n.aH(new V.aa(1,2,4,6),new V.B(1,0,0,1),new V.M(-1,-1,0),new V.N(0,1),m,p)
n=o.a
m=new V.r(1,-1,1)
m=m.l(0,Math.sqrt(m.v(m)))
t=n.aH(new V.aa(0,3,4,6),new V.B(0,0,1,1),new V.M(1,-1,0),new V.N(1,1),m,p)
n=o.a
m=new V.r(1,1,1)
m=m.l(0,Math.sqrt(m.v(m)))
s=n.aH(new V.aa(0,2,5,6),new V.B(0,1,0,1),new V.M(1,1,0),new V.N(1,0),m,p)
n=o.a
m=V.ag()
r=new V.r(-1,1,1)
r=r.l(0,Math.sqrt(r.v(r)))
q=n.aH(new V.aa(0,2,4,7),new V.B(1,1,0,1),new V.M(-1,1,0),m,r,p)
n=[F.au]
if(a)o.c.cU(H.c([u,t,s,q],n))
else o.d.fz(H.c([u,t,s,q],n))
o.am()
return o},
jX:function(a,b,c){var u=null,t=F.ah()
F.cb(t,b,u,c,a,1,0,0,1)
F.cb(t,b,u,c,a,0,1,0,3)
F.cb(t,b,u,c,a,0,0,1,2)
F.cb(t,b,u,c,a,-1,0,0,0)
F.cb(t,b,u,c,a,0,-1,0,0)
F.cb(t,b,u,c,a,0,0,-1,3)
t.am()
return t},
im:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cb:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.r(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.r(u+a3,t+a1,s+a2)
q=new V.r(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.r(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.im(i)
l=F.im(j.b)
k=F.m4(d,a0,new F.il(j,F.im(j.c),F.im(j.d),l,m,c),b)
if(k!=null)a.ay(k)},
jY:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new F.is()
if(b<3)return
u=F.ah()
t=-6.283185307179586/b
s=H.c([],[F.au])
for(r=0;r<=b;++r){q=t*r
p=Math.sin(q)
o=Math.cos(q)
n=g.$1(r/b)
m=u.a
if(typeof n!=="number")return H.q(n)
l=new V.r(p,o,1).l(0,Math.sqrt(p*p+o*o+1))
if(p<0)k=0
else k=p>1?1:p
j=o<0
if(j)i=0
else i=o>1?1:o
if(j)j=0
else j=o>1?1:o
m.toString
h=F.b2(new V.aa(-1,-1,-1,-1),null,new V.B(k,i,j,1),new V.M(p*n,o*n,0),new V.r(0,0,1),new V.N(p*0.5+0.5,o*0.5+0.5),l,null,0)
m.j(0,h)
s.push(h)}u.c.cU(s)
return u},
k1:function(a){var u=F.ah(),t=Math.sqrt(5)/2+0.5,s=F.Y(u,new V.r(-1,t,0)),r=F.Y(u,new V.r(1,t,0)),q=-t,p=F.Y(u,new V.r(-1,q,0)),o=F.Y(u,new V.r(1,q,0)),n=F.Y(u,new V.r(0,-1,q)),m=F.Y(u,new V.r(0,1,q)),l=F.Y(u,new V.r(0,-1,t)),k=F.Y(u,new V.r(0,1,t)),j=F.Y(u,new V.r(t,0,1)),i=F.Y(u,new V.r(t,0,-1)),h=F.Y(u,new V.r(q,0,1)),g=F.Y(u,new V.r(q,0,-1))
F.K(u,s,g,m,a)
F.K(u,s,m,r,a)
F.K(u,s,r,k,a)
F.K(u,s,k,h,a)
F.K(u,s,h,g,a)
F.K(u,r,m,i,a)
F.K(u,m,g,n,a)
F.K(u,g,h,p,a)
F.K(u,h,k,l,a)
F.K(u,k,r,j,a)
F.K(u,o,i,n,a)
F.K(u,o,n,p,a)
F.K(u,o,p,l,a)
F.K(u,o,l,j,a)
F.K(u,o,j,i,a)
F.K(u,n,i,m,a)
F.K(u,p,n,g,a)
F.K(u,l,p,h,a)
F.K(u,j,l,k,a)
F.K(u,i,j,r,a)
u.h_(new F.dd(),new F.hM())
return u},
Y:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.l(0,Math.sqrt(b.v(b)))
u=b.a
t=b.b
s=b.c
r=F.b2(j,j,j,new V.M(u,t,s),b,j,j,j,0)
q=a.fS(r,new F.dd())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sV(0,new V.B(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sca(new V.N(l,k<0?-k:k))
a.a.j(0,r)
return r},
K:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.cT(0,b,d,c)
else{u=F.Y(a,b.r.A(0,c.r).m(0,0.5))
t=F.Y(a,c.r.A(0,d.r).m(0,0.5))
s=F.Y(a,d.r.A(0,b.r).m(0,0.5))
r=e-1
F.K(a,b,u,s,r)
F.K(a,u,c,t,r)
F.K(a,t,s,u,r)
F.K(a,s,t,d,r)}},
m4:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.ah()
t=H.c([],[F.au])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.b2(g,g,new V.B(p,0,0,1),g,g,new V.N(r,1),g,g,0)
q.j(0,o)
c.$3(o,r,0)
t.push(o.bT(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.b2(g,g,new V.B(j,i,h,1),g,g,new V.N(r,m),g,g,0)
k.j(0,o)
c.$3(o,r,n)
t.push(o.bT(d))}}u.d.fA(a+1,b+1,t)
return u},
bK:function(a,b,c){var u=new F.az(),t=a.a
if(t==null)H.n(P.l("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.n(P.l("May not create a face with vertices attached to different shapes."))
u.aS(a)
u.aT(b)
u.cP(c)
u.a.a.d.b.push(u)
u.a.a.M()
return u},
j0:function(a,b){var u,t=new F.aA()
if(a==null)H.n(P.l("May not create a line with a null start vertex."))
if(b==null)H.n(P.l("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.n(P.l("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.n(P.l("May not create a line with vertices attached to different shapes."))
t.aS(a)
t.aT(b)
t.a.a.c.b.push(t)
t.a.a.M()
return t},
kK:function(a){var u=new F.bU()
if(a.a==null)H.n(P.l("May not create a point with a vertex which is not attached to a shape."))
u.ff(a)
u.a.a.b.b.push(u)
u.a.a.M()
return u},
ah:function(){var u=new F.ac(),t=new F.hI(u)
t.b=!1
t.c=H.c([],[F.au])
u.a=t
t=new F.h0(u)
t.b=H.c([],[F.bU])
u.b=t
t=new F.h_(u)
t.b=H.c([],[F.aA])
u.c=t
t=new F.fZ(u)
t.b=H.c([],[F.az])
u.d=t
u.e=null
return u},
b2:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.au(),r=new F.hQ()
r.b=H.c([],[F.bU])
s.b=r
r=new F.hN()
u=[F.aA]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.hJ()
u=[F.az]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.kl()
s.e=0
r=$.ak()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aj().a)!==0?e:t
s.x=(u&$.ai().a)!==0?b:t
s.y=(u&$.b9().a)!==0?f:t
s.z=(u&$.ba().a)!==0?g:t
s.Q=(u&$.km().a)!==0?c:t
s.ch=(u&$.bz().a)!==0?i:0
s.cx=(u&$.aK().a)!==0?a:t
return s},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
is:function is(){},
az:function az(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eI:function eI(){},
h4:function h4(){},
aA:function aA(){this.b=this.a=null},
f7:function f7(){},
ht:function ht(){},
bU:function bU(){this.a=null},
ac:function ac(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(a){this.a=a
this.b=null},
h_:function h_(a){this.a=a
this.b=null},
h0:function h0(a){this.a=a
this.b=null},
au:function au(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(a){this.a=a},
hR:function hR(a){this.a=a},
hI:function hI(a){this.a=a
this.c=this.b=null},
hJ:function hJ(){this.d=this.c=this.b=null},
hK:function hK(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.b=b},
hN:function hN(){this.c=this.b=null},
hO:function hO(){},
dd:function dd(){},
hP:function hP(){},
hM:function hM(){},
hQ:function hQ(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iZ.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.bW(a)},
h:function(a){return"Instance of '"+H.e(H.bX(a))+"'"}}
J.f1.prototype={
h:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ib6:1}
J.cA.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gH:function(a){return 0}}
J.cB.prototype={
gH:function(a){return 0},
h:function(a){return String(a)}}
J.fL.prototype={}
J.c1.prototype={}
J.aR.prototype={
h:function(a){var u=a[$.ka()]
if(u==null)return this.dM(a)
return"JavaScript function for "+H.e(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aQ.prototype={
dA:function(a,b){if(!!a.fixed$length)H.n(P.ad("removeAt"))
if(b<0||b>=a.length)throw H.f(P.cT(b,null))
return a.splice(b,1)[0]},
w:function(a,b){var u
if(!!a.fixed$length)H.n(P.ad("remove"))
for(u=0;u<a.length;++u)if(J.u(a[u],b)){a.splice(u,1)
return!0}return!1},
bM:function(a,b){var u,t
if(!!a.fixed$length)H.n(P.ad("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t)a.push(b[t])},
E:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.bF(a))}},
u:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
fY:function(a){return this.u(a,"")},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dJ:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.as(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.as(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.e7(a,0)])
return H.c(a.slice(b,c),[H.e7(a,0)])},
gfU:function(a){if(a.length>0)return a[0]
throw H.f(H.jq())},
gc1:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.jq())},
bm:function(a,b){if(!!a.immutable$list)H.n(P.ad("sort"))
H.cW(a,0,a.length-1,b)},
ao:function(a,b){var u
for(u=0;u<a.length;++u)if(J.u(a[u],b))return!0
return!1},
h:function(a){return P.iW(a,"[","]")},
gR:function(a){return new J.W(a,a.length)},
gH:function(a){return H.bW(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.n(P.ad("set length"))
if(b<0)throw H.f(P.as(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.b7(a,b))
if(b>=a.length||b<0)throw H.f(H.b7(a,b))
return a[b]},
n:function(a,b,c){if(!!a.immutable$list)H.n(P.ad("indexed set"))
if(b>=a.length||b<0)throw H.f(H.b7(a,b))
a[b]=c},
$ii:1}
J.iY.prototype={}
J.W.prototype={
gI:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bN.prototype={
bc:function(a,b){var u
if(typeof b!=="number")throw H.f(H.aI(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbg(b)
if(this.gbg(a)===u)return 0
if(this.gbg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbg:function(a){return a===0?1/a<0:a<0},
df:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ad(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ad(""+a+".round()"))},
fJ:function(a,b,c){if(C.d.bc(b,c)>0)throw H.f(H.aI(b))
if(this.bc(a,b)<0)return b
if(this.bc(a,c)>0)return c
return a},
hp:function(a,b){var u
if(b>20)throw H.f(P.as(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbg(a))return"-"+u
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
m:function(a,b){if(typeof b!=="number")throw H.f(H.aI(b))
return a*b},
dG:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
a9:function(a,b){return(a|0)===a?a/b|0:this.fm(a,b)},
fm:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ad("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b8:function(a,b){var u
if(a>0)u=this.fl(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fl:function(a,b){return b>31?0:a>>>b},
$iI:1,
$iaf:1}
J.cz.prototype={$iy:1}
J.f2.prototype={}
J.bh.prototype={
bR:function(a,b){if(b<0)throw H.f(H.b7(a,b))
if(b>=a.length)H.n(H.b7(a,b))
return a.charCodeAt(b)},
b6:function(a,b){if(b>=a.length)throw H.f(H.b7(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.f(P.jk(b,null,null))
return a+b},
cm:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cT(b,null))
if(b>c)throw H.f(P.cT(b,null))
if(c>a.length)throw H.f(P.cT(c,null))
return a.substring(b,c)},
aP:function(a,b){return this.cm(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.y)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ac:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
h:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$it:1}
H.O.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.c.bR(this.a,b)},
$ap:function(){return[P.y]},
$ai:function(){return[P.y]}}
H.eD.prototype={}
H.cF.prototype={
gI:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.jb(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.bF(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.G(s,u);++t.c
return!0}}
H.ff.prototype={
gR:function(a){return new H.fg(J.bA(this.a),this.b)},
gk:function(a){return J.bB(this.a)},
G:function(a,b){return this.b.$1(J.jj(this.a,b))},
$ai:function(a,b){return[b]}}
H.fg.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.a=u.c.$1(t.gI(t))
return!0}u.a=null
return!1},
gI:function(a){return this.a}}
H.hU.prototype={
gR:function(a){return new H.hV(J.bA(this.a),this.b)}}
H.hV.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.cv.prototype={}
H.hD.prototype={}
H.d8.prototype={}
H.hr.prototype={
ab:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fH.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f4.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hC.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iN.prototype={
$1:function(a){if(!!J.a1(a).$ibf)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.dO.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bE.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghr:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hg.prototype={}
H.ha.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.e8(u)+"'"}}
H.bC.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bC))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.bW(this.a)
else u=typeof t!=="object"?J.bb(t):H.bW(t)
return(u^H.bW(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bX(u))+"'")}}
H.el.prototype={
h:function(a){return this.a}}
H.fW.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.L.prototype={
gk:function(a){return this.a},
gax:function(a){return new H.cE(this,[H.e7(this,0)])},
d0:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cC(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cC(t,b)}else return s.fW(b)},
fW:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.bt(u,J.bb(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b7(r,b)
s=t==null?null:t.b
return s}else return q.fX(b)},
fX:function(a){var u,t,s=this.d
if(s==null)return
u=this.bt(s,J.bb(a)&0x3ffffff)
t=this.c0(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cv(u==null?o.b=o.bC():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cv(t==null?o.c=o.bC():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bC()
r=J.bb(b)&0x3ffffff
q=o.bt(s,r)
if(q==null)o.bJ(s,r,[o.bD(b,c)])
else{p=o.c0(q,b)
if(p>=0)q[p].b=c
else q.push(o.bD(b,c))}}},
E:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.bF(u))
t=t.c}},
cv:function(a,b,c){var u=this.b7(a,b)
if(u==null)this.bJ(a,b,this.bD(b,c))
else u.b=c},
bD:function(a,b){var u=this,t=new H.f8(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.u(a[t].a,b))return t
return-1},
h:function(a){return P.jt(this)},
b7:function(a,b){return a[b]},
bt:function(a,b){return a[b]},
bJ:function(a,b,c){a[b]=c},
e7:function(a,b){delete a[b]},
cC:function(a,b){return this.b7(a,b)!=null},
bC:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bJ(t,u,t)
this.e7(t,u)
return t}}
H.f8.prototype={}
H.cE.prototype={
gk:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.f9(u,u.r)
t.c=u.e
return t}}
H.f9.prototype={
gI:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bF(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iv.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.iw.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ix.prototype={
$1:function(a){return this.a(a)}}
H.f3.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bT.prototype={}
H.cM.prototype={
gk:function(a){return a.length},
$iv:1,
$av:function(){}}
H.bS.prototype={
i:function(a,b){H.b4(b,a,a.length)
return a[b]},
$ap:function(){return[P.I]},
$ii:1,
$ai:function(){return[P.I]}}
H.cN.prototype={
$ap:function(){return[P.y]},
$ii:1,
$ai:function(){return[P.y]}}
H.fB.prototype={
i:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.fC.prototype={
i:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.fD.prototype={
i:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.fE.prototype={
i:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.fF.prototype={
i:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.cO.prototype={
gk:function(a){return a.length},
i:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.fG.prototype={
gk:function(a){return a.length},
i:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.c3.prototype={}
H.c4.prototype={}
H.c5.prototype={}
H.c6.prototype={}
P.hX.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.hW.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hY.prototype={
$0:function(){this.a.$0()}}
P.hZ.prototype={
$0:function(){this.a.$0()}}
P.ih.prototype={
dV:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cf(new P.ii(this,b),0),a)
else throw H.f(P.ad("`setTimeout()` not found."))}}
P.ii.prototype={
$0:function(){this.b.$0()}}
P.dg.prototype={}
P.d_.prototype={}
P.hd.prototype={}
P.ik.prototype={}
P.iq.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cQ():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.ia.prototype={
hl:function(a){var u,t,s,r=null
try{if(C.e===$.av){a.$0()
return}P.lx(r,r,this,a)}catch(s){u=H.iM(s)
t=H.jd(s)
P.jT(r,r,this,u,t)}},
hm:function(a,b){var u,t,s,r=null
try{if(C.e===$.av){a.$1(b)
return}P.ly(r,r,this,a,b)}catch(s){u=H.iM(s)
t=H.jd(s)
P.jT(r,r,this,u,t)}},
hn:function(a,b){return this.hm(a,b,null)},
fH:function(a){return new P.ib(this,a)},
fI:function(a,b){return new P.ic(this,a,b)}}
P.ib.prototype={
$0:function(){return this.a.hl(this.b)}}
P.ic.prototype={
$1:function(a){return this.a.hn(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.i7.prototype={
gR:function(a){var u=new P.dw(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
j:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cz(u==null?s.b=P.j7():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cz(t==null?s.c=P.j7():t,b)}else return s.dX(0,b)},
dX:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.j7()
u=s.cA(b)
t=r[u]
if(t==null)r[u]=[s.bp(b)]
else{if(s.cF(t,b)>=0)return!1
t.push(s.bp(b))}return!0},
w:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.f8(this.c,b)
else return this.f7(0,b)},
f7:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ea(r,b)
t=s.cF(u,b)
if(t<0)return!1
s.cQ(u.splice(t,1)[0])
return!0},
cz:function(a,b){if(a[b]!=null)return!1
a[b]=this.bp(b)
return!0},
f8:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cQ(u)
delete a[b]
return!0},
cG:function(){this.r=1073741823&this.r+1},
bp:function(a){var u,t=this,s=new P.i8(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cG()
return s},
cQ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cG()},
cA:function(a){return J.bb(a)&1073741823},
ea:function(a,b){return a[this.cA(b)]},
cF:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.u(a[t].a,b))return t
return-1}}
P.i8.prototype={}
P.dw.prototype={
gI:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bF(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fa.prototype={$ii:1}
P.p.prototype={
gR:function(a){return new H.cF(a,this.gk(a))},
G:function(a,b){return this.i(a,b)},
ho:function(a,b){var u,t,s=this,r=H.c([],[H.lO(s,a,"p",0)])
C.a.sk(r,s.gk(a))
for(u=0;u<s.gk(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
cc:function(a){return this.ho(a,!0)},
h:function(a){return P.iW(a,"[","]")}}
P.fd.prototype={}
P.fe.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:9}
P.aB.prototype={
E:function(a,b){var u,t
for(u=J.bA(this.gax(a));u.B();){t=u.gI(u)
b.$2(t,this.i(a,t))}},
gk:function(a){return J.bB(this.gax(a))},
h:function(a){return P.jt(a)}}
P.id.prototype={
h:function(a){return P.iW(this,"{","}")},
G:function(a,b){var u,t,s
P.jB(b,"index")
for(u=P.l7(this,this.r),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.f(P.H(b,this,"index",null,t))},
$ii:1}
P.dx.prototype={}
P.en.prototype={}
P.eq.prototype={}
P.eE.prototype={}
P.hG.prototype={}
P.hH.prototype={
fL:function(a){var u,t,s=P.jC(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ij(u)
if(t.e9(a,0,s)!==s)t.cS(C.c.bR(a,s-1),0)
return new Uint8Array(u.subarray(0,H.l9(0,t.b,u.length)))}}
P.ij.prototype={
cS:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.b(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.b(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|a&63
return!1}},
e9:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bR(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.b6(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cS(r,C.c.b6(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.b(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.b(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=128|r&63}}return s}}
P.b6.prototype={}
P.an.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.an&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.d.b8(u,30))&1073741823},
h:function(a){var u=this,t=P.ky(H.kS(u)),s=P.cq(H.kQ(u)),r=P.cq(H.kM(u)),q=P.cq(H.kN(u)),p=P.cq(H.kP(u)),o=P.cq(H.kR(u)),n=P.kz(H.kO(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.I.prototype={}
P.bH.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bH&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
h:function(a){var u,t,s,r=new P.eC(),q=this.a
if(q<0)return"-"+new P.bH(0-q).h(0)
u=r.$1(C.d.a9(q,6e7)%60)
t=r.$1(C.d.a9(q,1e6)%60)
s=new P.eB().$1(q%1e6)
return""+C.d.a9(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eB.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eC.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bf.prototype={}
P.cQ.prototype={
h:function(a){return"Throw of null."}}
P.aw.prototype={
gbr:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbq:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbr()+o+u
if(!q.a)return t
s=q.gbq()
r=P.iV(q.b)
return t+s+": "+r}}
P.bq.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eT.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t=this.b
if(typeof t!=="number")return t.a8()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gk:function(a){return this.f}}
P.hE.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hB.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.h9.prototype={
h:function(a){return"Bad state: "+this.a}}
P.ep.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iV(u)+"."}}
P.fK.prototype={
h:function(a){return"Out of Memory"},
$ibf:1}
P.cY.prototype={
h:function(a){return"Stack Overflow"},
$ibf:1}
P.ev.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dp.prototype={
h:function(a){return"Exception: "+this.a}}
P.eP.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.cm(s,0,75)+"...":s
return t+"\n"+r}}
P.y.prototype={}
P.i.prototype={
gk:function(a){var u,t=this.gR(this)
for(u=0;t.B();)++u
return u},
G:function(a,b){var u,t,s
P.jB(b,"index")
for(u=this.gR(this),t=0;u.B();){s=u.gI(u)
if(b===t)return s;++t}throw H.f(P.H(b,this,"index",null,t))},
h:function(a){return P.kB(this,"(",")")}}
P.f0.prototype={}
P.bk.prototype={$ii:1}
P.cH.prototype={}
P.aT.prototype={
gH:function(a){return P.a_.prototype.gH.call(this,this)},
h:function(a){return"null"}}
P.af.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
q:function(a,b){return this===b},
gH:function(a){return H.bW(this)},
h:function(a){return"Instance of '"+H.e(H.bX(this))+"'"},
toString:function(){return this.h(this)}}
P.t.prototype={}
P.aY.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.ea.prototype={
gk:function(a){return a.length}}
W.ec.prototype={
h:function(a){return String(a)}}
W.ed.prototype={
h:function(a){return String(a)}}
W.cj.prototype={}
W.be.prototype={
dF:function(a,b,c){var u=a.getContext(b,P.lG(c))
return u},
$ibe:1}
W.aL.prototype={
gk:function(a){return a.length}}
W.er.prototype={
gk:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bG.prototype={
gk:function(a){return a.length}}
W.es.prototype={}
W.a6.prototype={}
W.am.prototype={}
W.et.prototype={
gk:function(a){return a.length}}
W.eu.prototype={
gk:function(a){return a.length}}
W.ew.prototype={
gk:function(a){return a.length}}
W.ey.prototype={
h:function(a){return String(a)}}
W.cs.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[[P.ab,P.af]]},
$ap:function(){return[[P.ab,P.af]]},
$ii:1,
$ai:function(){return[[P.ab,P.af]]}}
W.ct.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaB(a))+" x "+H.e(this.gaw(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.a1(b)
if(!u.$iab)return!1
return a.left===u.gbh(b)&&a.top===u.gbk(b)&&this.gaB(a)===u.gaB(b)&&this.gaw(a)===u.gaw(b)},
gH:function(a){return W.jQ(C.b.gH(a.left),C.b.gH(a.top),C.b.gH(this.gaB(a)),C.b.gH(this.gaw(a)))},
gcX:function(a){return a.bottom},
gaw:function(a){return a.height},
gbh:function(a){return a.left},
gbi:function(a){return a.right},
gbk:function(a){return a.top},
gaB:function(a){return a.width},
$iab:1,
$aab:function(){return[P.af]}}
W.ez.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[P.t]},
$ap:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]}}
W.eA.prototype={
gk:function(a){return a.length}}
W.i0.prototype={
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
j:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.cc(this)
return new J.W(u,u.length)},
$ap:function(){return[W.Z]},
$ai:function(){return[W.Z]}}
W.Z.prototype={
gcZ:function(a){return new W.i0(a,a.children)},
gd_:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a8()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a8()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.af])},
h:function(a){return a.localName},
$iZ:1}
W.h.prototype={$ih:1}
W.d.prototype={
fw:function(a,b,c,d){if(c!=null)this.dY(a,b,c,!1)},
dY:function(a,b,c,d){return a.addEventListener(b,H.cf(c,1),!1)}}
W.aM.prototype={$iaM:1}
W.eJ.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aM]},
$ap:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]}}
W.eK.prototype={
gk:function(a){return a.length}}
W.eO.prototype={
gk:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.eS.prototype={
gk:function(a){return a.length}}
W.bM.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.J]},
$ap:function(){return[W.J]},
$ii:1,
$ai:function(){return[W.J]}}
W.bi.prototype={$ibi:1}
W.fb.prototype={
h:function(a){return String(a)}}
W.fu.prototype={
gk:function(a){return a.length}}
W.fv.prototype={
i:function(a,b){return P.aJ(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gax:function(a){var u=H.c([],[P.t])
this.E(a,new W.fw(u))
return u},
gk:function(a){return a.size}}
W.fw.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fx.prototype={
i:function(a,b){return P.aJ(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gax:function(a){var u=H.c([],[P.t])
this.E(a,new W.fy(u))
return u},
gk:function(a){return a.size}}
W.fy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aS.prototype={$iaS:1}
W.fz.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aS]},
$ap:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]}}
W.ar.prototype={$iar:1}
W.i_.prototype={
gR:function(a){var u=this.a.childNodes
return new W.cw(u,u.length)},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ap:function(){return[W.J]},
$ai:function(){return[W.J]}}
W.J.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.dL(a):u},
$iJ:1}
W.cP.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.J]},
$ap:function(){return[W.J]},
$ii:1,
$ai:function(){return[W.J]}}
W.aU.prototype={$iaU:1,
gk:function(a){return a.length}}
W.fM.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aU]},
$ap:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]}}
W.fU.prototype={
i:function(a,b){return P.aJ(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gax:function(a){var u=H.c([],[P.t])
this.E(a,new W.fV(u))
return u},
gk:function(a){return a.size}}
W.fV.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fX.prototype={
gk:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.h5.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aV]},
$ap:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.h6.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aW]},
$ap:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gk:function(a){return a.length}}
W.hb.prototype={
i:function(a,b){return a.getItem(b)},
E:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gax:function(a){var u=H.c([],[P.t])
this.E(a,new W.hc(u))
return u},
gk:function(a){return a.length}}
W.hc.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aE.prototype={$iaE:1}
W.aZ.prototype={$iaZ:1}
W.aF.prototype={$iaF:1}
W.hh.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aF]},
$ap:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]}}
W.hi.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aZ]},
$ap:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]}}
W.hl.prototype={
gk:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.br.prototype={$ibr:1}
W.ho.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.b_]},
$ap:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]}}
W.hp.prototype={
gk:function(a){return a.length}}
W.b0.prototype={}
W.hF.prototype={
h:function(a){return String(a)}}
W.hT.prototype={
gk:function(a){return a.length}}
W.b3.prototype={
gfO:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ad("deltaY is not supported"))},
gfN:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ad("deltaX is not supported"))},
$ib3:1}
W.c2.prototype={
fb:function(a,b){return a.requestAnimationFrame(H.cf(b,1))},
e8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.i1.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.F]},
$ap:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]}}
W.dj.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.a1(b)
if(!u.$iab)return!1
return a.left===u.gbh(b)&&a.top===u.gbk(b)&&a.width===u.gaB(b)&&a.height===u.gaw(b)},
gH:function(a){return W.jQ(C.b.gH(a.left),C.b.gH(a.top),C.b.gH(a.width),C.b.gH(a.height))},
gaw:function(a){return a.height},
gaB:function(a){return a.width}}
W.i4.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aN]},
$ap:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]}}
W.dC.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.J]},
$ap:function(){return[W.J]},
$ii:1,
$ai:function(){return[W.J]}}
W.ie.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aX]},
$ap:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]}}
W.ig.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aE]},
$ap:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]}}
W.i2.prototype={}
W.i3.prototype={
$1:function(a){return this.a.$1(a)}}
W.G.prototype={
gR:function(a){return new W.cw(a,this.gk(a))}}
W.cw.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.e9(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gI:function(a){return this.d}}
W.di.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.c7.prototype={}
W.c8.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dP.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.c9.prototype={}
W.ca.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
P.ir.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.eL.prototype={
gbu:function(){var u=this.b,t=H.k_(u,"p",0)
return new H.ff(new H.hU(u,new P.eM(),[t]),new P.eN(),[t,W.Z])},
j:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bB(this.gbu().a)},
i:function(a,b){var u=this.gbu()
return u.b.$1(J.jj(u.a,b))},
gR:function(a){var u=P.js(this.gbu(),!1,W.Z)
return new J.W(u,u.length)},
$ap:function(){return[W.Z]},
$ai:function(){return[W.Z]}}
P.eM.prototype={
$1:function(a){return!!J.a1(a).$iZ}}
P.eN.prototype={
$1:function(a){return H.m(a,"$iZ")}}
P.i9.prototype={
gbi:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.q(t)
return u+t},
gcX:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.q(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.a1(b)
if(!!u.$iab){t=q.a
if(t==u.gbh(b)){s=q.b
if(s==u.gbk(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.q(r)
if(t+r===u.gbi(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.q(t)
u=s+t===u.gcX(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.bb(t),r=u.b,q=J.bb(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.q(p)
p=C.d.gH(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.q(t)
t=C.d.gH(r+t)
return P.l6(P.i6(P.i6(P.i6(P.i6(0,s),q),p),t))}}
P.ab.prototype={
gbh:function(a){return this.a},
gbk:function(a){return this.b},
gaB:function(a){return this.c},
gaw:function(a){return this.d}}
P.bj.prototype={$ibj:1}
P.f6.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bj]},
$ii:1,
$ai:function(){return[P.bj]}}
P.bn.prototype={$ibn:1}
P.fI.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bn]},
$ii:1,
$ai:function(){return[P.bn]}}
P.fP.prototype={
gk:function(a){return a.length}}
P.he.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]}}
P.j.prototype={
gcZ:function(a){return new P.eL(a,new W.i_(a))}}
P.bs.prototype={$ibs:1}
P.hq.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bs]},
$ii:1,
$ai:function(){return[P.bs]}}
P.du.prototype={}
P.dv.prototype={}
P.dF.prototype={}
P.dG.prototype={}
P.dQ.prototype={}
P.dR.prototype={}
P.dW.prototype={}
P.dX.prototype={}
P.ef.prototype={
gk:function(a){return a.length}}
P.eg.prototype={
i:function(a,b){return P.aJ(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gax:function(a){var u=H.c([],[P.t])
this.E(a,new P.eh(u))
return u},
gk:function(a){return a.size}}
P.eh.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ei.prototype={
gk:function(a){return a.length}}
P.bc.prototype={}
P.fJ.prototype={
gk:function(a){return a.length}}
P.dh.prototype={}
P.h8.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.H(b,a,null,null,null))
return P.aJ(a.item(b))},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[[P.cH,,,]]},
$ii:1,
$ai:function(){return[[P.cH,,,]]}}
P.dM.prototype={}
P.dN.prototype={}
T.eb.prototype={
aK:function(a,b){return!0},
h:function(a){return"all"}}
T.cx.prototype={
aK:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].aK(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cI.prototype={}
T.aD.prototype={
aK:function(a,b){return!this.dK(0,b)},
h:function(a){return"!["+this.cn(0)+"]"}}
T.fY.prototype={
dP:function(a){var u,t
if(a.a.length<=0)throw H.f(P.l("May not create a Set with zero characters."))
u=new H.L([P.y,P.b6])
for(t=new H.cF(a,a.gk(a));t.B();)u.n(0,t.d,!0)
this.a=u},
aK:function(a,b){return this.a.d0(0,b)},
h:function(a){var u=this.a
return P.j2(new H.cE(u,[H.e7(u,0)]))}}
R.cZ.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.d5(this.a.K(0,b))
r.a=H.c([],[T.cI])
r.c=!1
this.c.push(r)
return r},
fT:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.aK(0,a))return r}return},
h:function(a){return this.b}}
R.d2.prototype={
h:function(a){var u=H.k7(this.b,"\n","\\n"),t=H.k7(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.d3.prototype={
h:function(a){return this.b}}
R.hm.prototype={
K:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.cZ(this,b)
u.c=H.c([],[R.d5])
this.a.n(0,b,u)}return u},
b3:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.d3(a)
u=P.t
t.c=new H.L([u,u])
this.b.n(0,a,t)}return t},
hq:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[R.d2]),l=this.c,k=[P.y],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.c.b6(a,s)
q=l.fT(r)
if(q==null){if(t==null){j.push(r)
p=P.j2(j)
throw H.f(P.l("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.j2(j)
o=l.d
n=o.c.i(0,p)
t=new R.d2(n==null?o.b:n,p,s)}++s}}}}
R.d5.prototype={
h:function(a){return this.b.b+": "+this.cn(0)}}
O.ax.prototype={
b4:function(a){this.a=H.c([],[a])
this.c=this.b=null},
ci:function(a,b,c){this.b=b
this.c=a},
aN:function(a,b){return this.ci(a,null,b)},
cK:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cH:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.W(u,u.length)},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
j:function(a,b){var u,t,s=this,r=[H.k_(s,"ax",0)]
if(s.cK(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.cH(t,H.c([b],r))}},
bM:function(a,b){var u,t
if(this.cK(b)){u=this.a
t=u.length
C.a.bM(u,b)
this.cH(t,b)}},
$ii:1}
O.bO.prototype={
gk:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.D():u},
aC:function(){var u=this.b
if(u!=null)u.C(null)},
gN:function(a){var u=this.a
if(u.length>0)return C.a.gc1(u)
else return V.bQ()},
dw:function(a){var u=this.a
if(a==null)u.push(V.bQ())
else u.push(a)
this.aC()},
c7:function(){var u=this.a
if(u.length>0){u.pop()
this.aC()}}}
E.ej.prototype={}
E.ay.prototype={
cw:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.W(u,u.length);u.B();){t=u.d
if(t.f==null)t.cw()}},
sa_:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().w(0,s.gdq())
u=s.c
if(u!=null)u.gt().j(0,s.gdq())
t=new D.w("shape",r,s.c)
t.b=!0
s.ah(t)}},
sa4:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().w(0,s.gds())
u=s.f
s.f=a
if(a!=null)a.gt().j(0,s.gds())
s.cw()
t=new D.w("technique",u,s.f)
t.b=!0
s.ah(t)}},
sS:function(a){var u,t,s=this
if(!J.u(s.r,a)){u=s.r
if(u!=null)u.gt().w(0,s.gdm())
if(a!=null)a.gt().j(0,s.gdm())
s.r=a
t=new D.w("mover",u,a)
t.b=!0
s.ah(t)}},
a7:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aM(0,b,s):null
if(!J.u(q,s.x)){u=s.x
s.x=q
t=new D.w("matrix",u,q)
t.b=!0
s.ah(t)}r=s.f
if(r!=null)r.a7(0,b)
for(r=s.y.a,r=new J.W(r,r.length);r.B();)r.d.a7(0,b)},
ai:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)u.a.push(u.gN(u))
else u.a.push(t.m(0,u.gN(u)))
u.aC()
a.dz(r.f)
u=a.dy
s=(u&&C.a).gc1(u)
if(s!=null&&r.d!=null)s.dB(a,r)
for(u=r.y.a,u=new J.W(u,u.length);u.B();)u.d.ai(a)
a.du()
a.dx.c7()},
ah:function(a){var u=this.z
if(u!=null)u.C(a)},
M:function(){return this.ah(null)},
dr:function(a){this.e=null
this.ah(a)},
h6:function(){return this.dr(null)},
dt:function(a){this.ah(a)},
h7:function(){return this.dt(null)},
dn:function(a){this.ah(a)},
h5:function(){return this.dn(null)},
dl:function(a){this.ah(a)},
h2:function(){return this.dl(null)},
h1:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdk(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bJ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.M()},
h4:function(a,b){var u,t
for(u=b.gR(b),t=this.gdk();u.B();)u.gI(u).gt().w(0,t)
this.M()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fQ.prototype={
dO:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.an(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bO()
t=[V.aC]
u.a=H.c([],t)
u.gt().j(0,new E.fR(s))
s.cy=u
u=new O.bO()
u.a=H.c([],t)
u.gt().j(0,new E.fS(s))
s.db=u
u=new O.bO()
u.a=H.c([],t)
u.gt().j(0,new E.fT(s))
s.dx=u
u=H.c([],[O.d0])
s.dy=u
u.push(null)
s.fr=new H.L([P.t,A.cV])},
ghh:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gN(s)
u=t.db
u=t.z=s.m(0,u.gN(u))
s=u}return s},
gdv:function(){var u,t=this,s=t.ch
if(s==null){s=t.ghh()
u=t.dx
u=t.ch=s.m(0,u.gN(u))
s=u}return s},
gdD:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.gN(s)
u=t.dx
u=t.cx=s.m(0,u.gN(u))
s=u}return s},
dz:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gc1(u):a)},
du:function(){var u=this.dy
if(u.length>1)u.pop()},
cV:function(a){var u=a.b
if(u.length===0)throw H.f(P.l("May not cache a shader with no name."))
if(this.fr.d0(0,u))throw H.f(P.l('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)}}
E.fR.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fS.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fT.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d1.prototype={
ct:function(a){this.dC()},
cs:function(){return this.ct(null)},
sbl:function(a){var u=this,t=u.d
if(t!==a){if(t!=null)t.gt().w(0,u.gcr())
u.d=a
a.gt().j(0,u.gcr())
u.cs()}},
cN:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.q(r)
u=C.b.df(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.b.df(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jH(C.j,s.ghk())}},
dC:function(){if(!this.ch){this.ch=!0
var u=window
C.q.e8(u)
C.q.fb(u,W.jU(new E.hk(this),P.af))}},
hj:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cN()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.an(r,!1)
s.y=1000*(r-s.r.a)*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aC()
r=s.db
C.a.sk(r.a,0)
r.aC()
r=s.dx
C.a.sk(r.a,0)
r.aC()
r=s.dy;(r&&C.a).sk(r,0)
s.dy.push(null)
o.ai(p.e)}}catch(q){u=H.iM(q)
t=H.jd(q)
P.k4("Error: "+H.e(u))
P.k4("Stack: "+H.e(t))
throw H.f(u)}}}
E.hk.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.hj()}}}
Z.de.prototype={}
Z.ck.prototype={
al:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.iM(s)
t=P.l('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.df.prototype={}
Z.bd.prototype={
aa:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
al:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].al(a)},
ce:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ai:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h8:function(a){this.al(a)
this.ai(a)
this.ce(a)},
h:function(a){var u,t,s,r,q=[P.t],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a5(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")}}
Z.cl.prototype={}
Z.bg.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bX(this.c))+"'")+"]"}}
Z.aH.prototype={
gcl:function(a){var u=this.a,t=(u&$.ak().a)!==0?3:0
if((u&$.aj().a)!==0)t+=3
if((u&$.ai().a)!==0)t+=3
if((u&$.b9().a)!==0)t+=2
if((u&$.ba().a)!==0)t+=3
if((u&$.b8().a)!==0)t+=3
if((u&$.ch().a)!==0)t+=4
if((u&$.bz().a)!==0)++t
return(u&$.aK().a)!==0?t+4:t},
fD:function(a){var u,t=$.ak(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ai()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ch()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aK()
if((s&t.a)!==0)if(u===a)return t
return $.kn()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aH))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.t]),t=this.a
if((t&$.ak().a)!==0)u.push("Pos")
if((t&$.aj().a)!==0)u.push("Norm")
if((t&$.ai().a)!==0)u.push("Binm")
if((t&$.b9().a)!==0)u.push("Txt2D")
if((t&$.ba().a)!==0)u.push("TxtCube")
if((t&$.b8().a)!==0)u.push("Clr3")
if((t&$.ch().a)!==0)u.push("Clr4")
if((t&$.bz().a)!==0)u.push("Weight")
if((t&$.aK().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.em.prototype={}
D.bJ.prototype={
j:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.S]}]):u).push(b)},
w:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.ao(s,b)
if(s===!0){s=t.a
u=(s&&C.a).w(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.ao(s,b)
if(s===!0){s=t.b
u=(s&&C.a).w(s,b)||u}return u},
C:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.S()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.E(P.js(u,!0,{func:1,ret:-1,args:[D.S]}),new D.eG(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.S]}])
C.a.E(u,new D.eH(q))}return!0},
ap:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}}}
D.eG.prototype={
$1:function(a){var u=this.a.a
if(u.b)a.$1(u)}}
D.eH.prototype={
$1:function(a){var u=this.a.a
if(u.b)a.$1(u)}}
D.S.prototype={}
D.aO.prototype={}
D.aP.prototype={}
D.w.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cm.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cm))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cC.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cC))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.f5.prototype={
hd:function(a){this.c=a.b
this.d.j(0,a.a)
return!1},
h9:function(a){this.c=a.b
this.d.w(0,a.a)
return!1}}
X.cG.prototype={}
X.fc.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=o.A(0,new V.N(n*m,u*t))
t=q.a.gaJ()
r=new X.a9(a,V.ag(),q.x,t,s)
r.b=!0
q.z=new P.an(p,!1)
q.x=s
return r},
c6:function(a,b){this.r=a.a
return!1},
b2:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dH()
if(typeof u!=="number")return u.aq()
this.r=(u&~t)>>>0
return!1},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aQ(a,b))
return!0},
he:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaJ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.bR(new V.A(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
eH:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cG(c,r.a.gaJ(),b)
s.b=!0
t.C(s)
r.y=new P.an(u,!1)
r.x=V.ag()}}
X.a8.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a8))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.a9.prototype={}
X.fA.prototype={
bs:function(a,b,c){var u=this,t=new P.an(Date.now(),!1),s=u.a.gaJ(),r=new X.a9(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c6:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bs(a,b,!0))
return!0},
b2:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dH()
if(typeof t!=="number")return t.aq()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bs(a,b,!0))
return!0},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bs(a,b,!1))
return!0},
hf:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaJ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.bR(new V.A(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0},
gaY:function(){var u=this.b
return u==null?this.b=D.D():u},
gaA:function(){var u=this.c
return u==null?this.c=D.D():u},
gb0:function(){var u=this.d
return u==null?this.d=D.D():u}}
X.bR.prototype={}
X.fO.prototype={}
X.d4.prototype={}
X.hn.prototype={
aQ:function(a,b){var u=this,t=new P.an(Date.now(),!1),s=a.length>0?a[0]:V.ag(),r=u.a.gaJ(),q=new X.d4(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hc:function(a){var u=this.b
if(u==null)return!1
u.C(this.aQ(a,!0))
return!0},
ha:function(a){var u=this.c
if(u==null)return!1
u.C(this.aQ(a,!0))
return!0},
hb:function(a){var u=this.d
if(u==null)return!1
u.C(this.aQ(a,!1))
return!0}}
X.d9.prototype={
gaJ:function(){var u=this.a,t=C.i.gd_(u).c
t.toString
u=C.i.gd_(u).d
u.toString
return V.jD(0,0,t,u)},
cD:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cC(u,new X.a8(t,a.altKey,a.shiftKey))},
aG:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
bK:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
au:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.N(s-q,r-u)},
aR:function(a){return new V.A(a.movementX,a.movementY)},
bE:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.N])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.b.aj(r.pageX)
C.b.aj(r.pageY)
p=o.left
C.b.aj(r.pageX)
n.push(new V.N(q-p,C.b.aj(r.pageY)-o.top))}return n},
as:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cm(u,new X.a8(t,a.altKey,a.shiftKey))},
bv:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eB:function(a){this.f=!0},
eo:function(a){this.f=!1},
ev:function(a){if(this.f&&this.bv(a))a.preventDefault()},
eF:function(a){var u
if(!this.f)return
u=this.cD(a)
this.b.hd(u)},
eD:function(a){var u
if(!this.f)return
u=this.cD(a)
this.b.h9(u)},
eJ:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aG(a)
if(r.x){u=r.as(a)
t=r.aR(a)
if(r.d.c6(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.as(a)
s=r.au(a)
if(r.c.c6(u,s))a.preventDefault()},
eN:function(a){var u,t,s,r=this
r.aG(a)
u=r.as(a)
if(r.x){t=r.aR(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b2(u,s))a.preventDefault()},
ez:function(a){var u,t,s,r=this
if(!r.bv(a)){r.aG(a)
u=r.as(a)
if(r.x){t=r.aR(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b2(u,s))a.preventDefault()}},
eL:function(a){var u,t,s,r=this
r.aG(a)
u=r.as(a)
if(r.x){t=r.aR(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b1(u,s))a.preventDefault()},
ex:function(a){var u,t,s,r=this
if(!r.bv(a)){r.aG(a)
u=r.as(a)
if(r.x){t=r.aR(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b1(u,s))a.preventDefault()}},
eP:function(a){var u,t,s=this
s.aG(a)
u=new V.A((a&&C.p).gfN(a),C.p.gfO(a)).l(0,180)
if(s.x){if(s.d.he(u))a.preventDefault()
return}if(s.r)return
t=s.au(a)
if(s.c.hf(u,t))a.preventDefault()},
eR:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.as(s.y)
t=s.au(s.y)
s.d.eH(u,t,r)}},
f6:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bK(a)
u=t.bE(a)
if(t.e.hc(u))a.preventDefault()},
f2:function(a){var u
this.bK(a)
u=this.bE(a)
if(this.e.ha(u))a.preventDefault()},
f4:function(a){var u
this.bK(a)
u=this.bE(a)
if(this.e.hb(u))a.preventDefault()}}
D.ex.prototype={$ia2:1}
D.a2.prototype={}
D.cD.prototype={
cu:function(a){var u=this.x
if(u!=null)u.C(a)},
cJ:function(a){var u=this.y
if(u!=null)u.C(a)},
eG:function(){return this.cJ(null)},
eT:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.e4(s))return!1}return!0},
ei:function(a,b){var u,t,s,r
for(u=b.length,t=this.gcI(),s=0;s<b.length;b.length===u||(0,H.o)(b),++s){r=b[s]
r.gt().j(0,t)}u=new D.aO()
u.b=!0
this.cu(u)},
eX:function(a,b){var u,t,s
for(u=b.gR(b),t=this.gcI();u.B();){s=u.gI(u)
C.a.w(this.e,s)
s.gt().w(0,t)}u=new D.aP()
u.b=!0
this.cu(u)},
e4:function(a){var u=C.a.ao(this.e,a)
return u},
$ai:function(){return[D.a2]},
$aax:function(){return[D.a2]}}
D.fN.prototype={$ia2:1}
D.h7.prototype={$ia2:1}
V.P.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.B.prototype={
cc:function(a){var u=this
return H.c([u.a,u.b,u.c,u.d],[P.I])},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.eF.prototype={}
V.cL.prototype={
a0:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.I])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cL))return!1
u=b.a
t=$.x().a
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
h:function(a){var u,t,s,r,q=this,p=[P.I],o=V.by(H.c([q.a,q.d,q.r],p),3,0),n=V.by(H.c([q.b,q.e,q.x],p),3,0),m=V.by(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.b(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.b(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.b(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.b(o,1)
r=" "+o[1]+", "
if(1>=t)return H.b(n,1)
r=r+n[1]+", "
if(1>=s)return H.b(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.b(o,2)
p=" "+o[2]+", "
if(2>=t)return H.b(n,2)
p=p+n[2]+", "
if(2>=s)return H.b(m,2)
return r+(p+m[2]+"]")}}
V.aC.prototype={
a0:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.I])
return t},
dh:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.x().a)return V.bQ()
u=1/b1
t=-n
s=-a0
return V.aq((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
m:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aq(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cd:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.M(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aC))return!1
u=b.a
t=$.x().a
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
h:function(a){return this.J()},
D:function(a){var u,t,s,r,q,p=this,o=[P.I],n=V.by(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.by(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.by(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.by(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.b(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.b(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.b(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.b(n,1)
q=q+n[1]+", "
if(1>=t)return H.b(m,1)
q=q+m[1]+", "
if(1>=s)return H.b(l,1)
q=q+l[1]+", "
if(1>=r)return H.b(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.b(n,2)
u=u+n[2]+", "
if(2>=t)return H.b(m,2)
u=u+m[2]+", "
if(2>=s)return H.b(l,2)
u=u+l[2]+", "
if(2>=r)return H.b(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.b(n,3)
q=q+n[3]+", "
if(3>=t)return H.b(m,3)
q=q+m[3]+", "
if(3>=s)return H.b(l,3)
q=q+l[3]+", "
if(3>=r)return H.b(k,3)
return u+(q+k[3]+"]")},
J:function(){return this.D("")}}
V.N.prototype={
A:function(a,b){return new V.N(this.a+b.a,this.b+b.b)},
F:function(a,b){return new V.N(this.a-b.a,this.b-b.b)},
l:function(a,b){if(Math.abs(b-0)<$.x().a)return V.ag()
return new V.N(this.a/b,this.b/b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.M.prototype={
A:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
F:function(a,b){return new V.M(this.a-b.a,this.b-b.b,this.c-b.c)},
l:function(a,b){if(Math.abs(b-0)<$.x().a)return V.jy()
return new V.M(this.a/b,this.b/b,this.c/b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.aa.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.cU.prototype={
gY:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cU))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.A.prototype={
b_:function(a){return Math.sqrt(this.v(this))},
v:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.q(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.q(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.A(t*b,u*b)},
l:function(a,b){var u,t
if(Math.abs(b-0)<$.x().a){u=$.jK
return u==null?$.jK=new V.A(0,0):u}u=this.a
if(typeof u!=="number")return u.l()
t=this.b
if(typeof t!=="number")return t.l()
return new V.A(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=this.a
s=$.x()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.q(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.r.prototype={
b_:function(a){return Math.sqrt(this.v(this))},
v:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c2:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.r(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aV:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.r(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.r(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.r(-this.a,-this.b,-this.c)},
m:function(a,b){return new V.r(this.a*b,this.b*b,this.c*b)},
l:function(a,b){if(Math.abs(b-0)<$.x().a)return V.bv()
return new V.r(this.a/b,this.b/b,this.c/b)},
di:function(){var u=$.x().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.r))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.aG.prototype={
b_:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
l:function(a,b){var u,t=this
if(Math.abs(b-0)<$.x().a){u=$.jP
return u==null?$.jP=new V.aG(0,0,0,0):u}return new V.aG(t.a/b,t.b/b,t.c/b,t.d/b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
U.eo.prototype={
bo:function(a){var u=V.m7(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.D():u},
L:function(a){var u=this.y
if(u!=null)u.C(a)},
scf:function(a,b){},
sc3:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.x().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bo(u)}s=new D.w("maximumLocation",s,t.b)
s.b=!0
t.L(s)}},
sc5:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.x().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bo(u)}s=new D.w("minimumLocation",s,t.c)
s.b=!0
t.L(s)}},
sX:function(a,b){var u,t=this
b=t.bo(b)
u=t.d
if(!(Math.abs(u-b)<$.x().a)){t.d=b
u=new D.w("location",u,b)
u.b=!0
t.L(u)}},
sc4:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.x().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.w("maximumVelocity",r,a)
r.b=!0
s.L(r)}},
sP:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.x().a)){u.f=a
t=new D.w("velocity",t,a)
t.b=!0
u.L(t)}},
sbU:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.x().a)){this.x=a
u=new D.w("dampening",u,a)
u.b=!0
this.L(u)}},
a7:function(a,b){var u,t,s,r=this,q=r.f,p=$.x().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sX(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.x().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sP(u)}}}
U.cp.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.D():u},
sN:function(a,b){var u,t,s,r=this
if(b==null)b=V.bQ()
if(!J.u(r.a,b)){u=r.a
r.a=b
t=new D.w("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.C(t)}},
aM:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
return J.u(this.a,b.a)},
h:function(a){return"Constant: "+this.a.D("          ")}}
U.bL.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.D():u},
L:function(a){var u=this.e
if(u!=null)u.C(a)},
a3:function(){return this.L(null)},
dS:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaF(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aO()
u.b=!0
this.L(u)},
eV:function(a,b){var u,t
for(u=b.gR(b),t=this.gaF();u.B();)u.gI(u).gt().w(0,t)
u=new D.aP()
u.b=!0
this.L(u)},
aM:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a8()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.W(r,r.length),u=null;r.B();){q=r.d
if(q!=null){t=q.aM(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.bQ():u
r=s.e
if(r!=null)r.ap(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bL))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.u(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.a3]},
$aax:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.da.prototype={
gt:function(){var u=this.cy
return u==null?this.cy=D.D():u},
L:function(a){var u=this.cy
if(u!=null)u.C(a)},
a3:function(){return this.L(null)},
aU:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gaY().j(0,u.gbw())
u.a.c.gb0().j(0,u.gby())
u.a.c.gaA().j(0,u.gbA())
return!0},
bx:function(a){var u=this
if(!J.u(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bz:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$ia9")
if(!n.y)return
if(n.x){u=a.d.F(0,a.y)
u=new V.A(u.a,u.b)
u=u.v(u)
t=n.r
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.F(0,a.y)
u=new V.A(t.a,t.b).m(0,2).l(0,u.gY())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.q(s)
t.sP(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.A(s.a,s.b).m(0,2).l(0,u.gY())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.q(p)
o=n.z
if(typeof o!=="number")return H.q(o)
s.sX(0,-q*p+o)
n.b.sP(0)
t=t.F(0,a.z)
n.Q=new V.A(t.a,t.b).m(0,2).l(0,u.gY())}n.a3()},
bB:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.v(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.q(s)
u.sP(t*10*s)
r.a3()}},
aM:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a8()
if(q<p){r.ch=p
u=b.y
r.b.a7(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aq(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia3:1}
U.db.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.D():u},
L:function(a){var u=this.fx
if(u!=null)u.C(a)},
a3:function(){return this.L(null)},
aU:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gaY().j(0,s.gbw())
s.a.c.gb0().j(0,s.gby())
s.a.c.gaA().j(0,s.gbA())
u=s.a.d
t=u.f
u=t==null?u.f=D.D():t
u.j(0,s.geb())
u=s.a.d
t=u.d
u=t==null?u.d=D.D():t
u.j(0,s.ged())
u=s.a.e
t=u.b
u=t==null?u.b=D.D():t
u.j(0,s.gfs())
u=s.a.e
t=u.d
u=t==null?u.d=D.D():t
u.j(0,s.gfp())
u=s.a.e
t=u.c
u=t==null?u.c=D.D():t
u.j(0,s.gfn())
return!0},
ak:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.A(u,t)},
bx:function(a){var u=this
H.m(a,"$ia9")
if(!J.u(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bz:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$ia9")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.A(u.a,u.b)
u=u.v(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.ak(new V.A(t.a,t.b).m(0,2).l(0,u.gY()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ak(new V.A(s.a,s.b).m(0,2).l(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sX(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.F(0,a.z)
n.dx=n.ak(new V.A(t.a,t.b).m(0,2).l(0,u.gY()))}n.a3()},
bB:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.v(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sP(-t*10*u)
r.a3()}},
ec:function(a){var u=this
if(H.m(a,"$icG").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ee:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$ia9")
if(!J.u(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ak(new V.A(s.a,s.b).m(0,2).l(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sX(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.F(0,a.z)
n.dx=n.ak(new V.A(t.a,t.b).m(0,2).l(0,u.gY()))
n.a3()},
ft:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fq:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$id4")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.A(u.a,u.b)
u=u.v(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.ak(new V.A(t.a,t.b).m(0,2).l(0,u.gY()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ak(new V.A(s.a,s.b).m(0,2).l(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sX(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.F(0,a.z)
n.dx=n.ak(new V.A(t.a,t.b).m(0,2).l(0,u.gY()))}n.a3()},
fo:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.v(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sP(-t*10*u)
r.a3()}},
aM:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.a8()
if(s<r){t.dy=r
u=b.y
t.c.a7(0,u)
t.b.a7(0,u)
t.fr=V.bP(t.b.d).m(0,V.j1(t.c.d))}return t.fr},
$ia3:1}
U.dc.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.D():u},
L:function(a){var u=this.r
if(u!=null)u.C(a)},
aU:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.D():t
t=r.gef()
u.j(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.D():s).j(0,t)
return!0},
eg:function(a){var u,t,s,r,q=this
if(!J.u(q.b,q.a.b.c))return
H.m(a,"$ibR")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.w("zoom",u,r)
u.b=!0
q.L(u)}},
aM:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bm(u,u,u,1)}return t.f},
$ia3:1}
M.co.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.D():u},
a2:function(a){var u=this.r
if(u!=null)u.C(a)},
bn:function(){return this.a2(null)},
eZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga6(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aO()
u.b=!0
this.a2(u)},
f0:function(a,b){var u,t
for(u=b.gR(b),t=this.ga6();u.B();)u.gI(u).gt().w(0,t)
u=new D.aP()
u.b=!0
this.a2(u)},
ai:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.W(u,u.length);u.B();){t=u.d
if(t!=null)t.ai(a)}s.f=!1},
$ai:function(){return[M.a4]},
$aax:function(){return[M.a4]},
$ia4:1}
M.cu.prototype={
a2:function(a){var u=this.y
if(u!=null)u.C(a)},
bn:function(){return this.a2(null)},
eq:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga6(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bJ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aO()
u.b=!0
this.a2(u)},
es:function(a,b){var u,t
for(u=b.gR(b),t=this.ga6();u.B();)u.gI(u).gt().w(0,t)
u=new D.aP()
u.b=!0
this.a2(u)},
sav:function(a){var u,t,s=this
if(a==null)a=X.bo()
u=s.b
if(u!==a){if(u!=null)u.gt().w(0,s.ga6())
t=s.b
s.b=a
a.gt().j(0,s.ga6())
u=new D.w("camera",t,s.b)
u.b=!0
s.a2(u)}},
sbj:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gt().w(0,t.ga6())
u=t.c
t.c=b
b.gt().j(0,t.ga6())
s=new D.w("target",u,t.c)
s.b=!0
t.a2(s)}},
sa4:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().w(0,t.ga6())
u=t.d
t.d=a
if(a!=null)a.gt().j(0,t.ga6())
s=new D.w("technique",u,t.d)
s.b=!0
t.a2(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.D():u},
ai:function(a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
a3.dz(a2.d)
u=a2.c
u.toString
t=a3.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.q(s)
o=C.b.aj(p*s)
p=q.b
if(typeof r!=="number")return H.q(r)
n=C.b.aj(p*r)
p=C.b.aj(q.c*s)
a3.c=p
q=C.b.aj(q.d*r)
a3.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
if(u.b){u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
m=16640}else m=256
t.clear(m)
u=a2.b
t=a3.c
q=a3.d
p=u.c
l=u.d
k=u.e
j=k-l
i=1/Math.tan(p*0.5)
h=V.aq(-i/(t/q),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t=u.a
if(t!=null){g=t.a
if(g!=null)h=g.m(0,h)}a3.cy.dw(h)
t=$.jw
if(t==null){t=V.jy()
q=$.jM
if(q==null)q=$.jM=new V.r(0,1,0)
p=V.jO()
f=p.l(0,Math.sqrt(p.v(p)))
q=q.aV(f)
e=q.l(0,Math.sqrt(q.v(q)))
d=f.aV(e)
c=new V.r(t.a,t.b,t.c)
b=e.O(0).v(c)
a=d.O(0).v(c)
a0=f.O(0).v(c)
t=V.aq(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.jw=t
a1=t}else a1=t
u=u.b
if(u!=null){g=u.a
if(g!=null)a1=g.m(0,a1)}a3.db.dw(a1)
u=a2.d
if(u!=null)u.a7(0,a3)
for(u=a2.e.a,u=new J.W(u,u.length);u.B();)u.d.a7(0,a3)
for(u=a2.e.a,u=new J.W(u,u.length);u.B();)u.d.ai(a3)
a2.b.toString
a3.cy.c7()
a3.db.c7()
a2.c.toString
a3.du()},
$ia4:1}
M.a4.prototype={}
A.ci.prototype={}
A.ee.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
d3:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.R.prototype={
gZ:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.R))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.eU.prototype={}
A.fh.prototype={
dN:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aY("")
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
A.lp(c0,u)
A.lr(c0,u)
A.lq(c0,u)
A.lt(c0,u)
A.lu(c0,u)
A.ls(c0,u)
A.lv(c0,u)
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
b5.dg(0,s.charCodeAt(0)==0?s:s,A.lo(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.m(b5.y.T(0,"invViewMat"),"$iX")
if(t)b5.dy=H.m(b5.y.T(0,"objMat"),"$iX")
if(r)b5.fr=H.m(b5.y.T(0,"viewObjMat"),"$iX")
b5.fy=H.m(b5.y.T(0,"projViewObjMat"),"$iX")
if(c0.ry)b5.k1=H.m(b5.y.T(0,"txt2DMat"),"$ibZ")
if(c0.x1)b5.k2=H.m(b5.y.T(0,"txtCubeMat"),"$iX")
if(c0.x2)b5.k3=H.m(b5.y.T(0,"colorMat"),"$iX")
b5.r1=H.c([],[A.X])
t=c0.y2
if(t>0){b5.k4=b5.y.T(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.n(P.l(b7+q+b8))
s.push(H.m(m,"$iX"))}}if(c0.a.a)b5.r2=H.m(b5.y.T(0,"emissionClr"),"$iE")
if(c0.b.a)b5.x1=H.m(b5.y.T(0,"ambientClr"),"$iE")
if(c0.c.a)b5.y2=H.m(b5.y.T(0,"diffuseClr"),"$iE")
if(c0.d.a)b5.d5=H.m(b5.y.T(0,"invDiffuseClr"),"$iE")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.d7=H.m(b5.y.T(0,"shininess"),"$iQ")
if(t)b5.d6=H.m(b5.y.T(0,"specularClr"),"$iE")}if(c0.cy){b5.d8=H.m(b5.y.T(0,"envSampler"),"$ibu")
if(c0.r.a)b5.d9=H.m(b5.y.T(0,"reflectClr"),"$iE")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.da=H.m(b5.y.T(0,"refraction"),"$iQ")
if(t)b5.dc=H.m(b5.y.T(0,"refractClr"),"$iE")}}if(c0.y.a)b5.dd=H.m(b5.y.T(0,"alpha"),"$iQ")
t=P.y
s=[t,A.d7]
b5.bV=new H.L(s)
b5.bW=new H.L([t,[P.bk,A.bY]])
b5.bX=new H.L(s)
b5.bY=new H.L([t,[P.bk,A.c_]])
b5.bZ=new H.L(s)
b5.c_=new H.L([t,[P.bk,A.c0]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.bY],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aq()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.n(P.l(b7+g+b8))
H.m(m,"$iE")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.n(P.l(b7+g+b8))
H.m(f,"$iE")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.n(P.l(b7+g+b8))
H.m(e,"$iE")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.n(P.l(b7+g+b8))
H.m(m,"$iE")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.n(P.l(b7+g+b8))
H.m(f,"$iE")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.n(P.l(b7+o+b8))
H.m(e,"$ibt")
a=e}else a=b6
h.push(new A.bY(b,c,d,m,f,a))}b5.bW.n(0,j,h)
q=b5.bV
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.n(P.l(b7+o+b8))
q.n(0,j,m)}for(t=c0.Q,s=t.length,r=[A.c_],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.n(P.l(b7+o+b8))
H.m(m,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.n(P.l(b7+o+b8))
H.m(f,"$iE")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.n(P.l(b7+o+b8))
H.m(e,"$iE")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.n(P.l(b7+o+b8))
H.m(a0,"$ibZ")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.n(P.l(b7+o+b8))
H.m(a0,"$ibu")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.n(P.l(b7+o+b8))
H.m(a0,"$ibu")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.n(P.l(b7+o+b8))
H.m(a2,"$ib1")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.n(P.l(b7+o+b8))
H.m(a0,"$iQ")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.n(P.l(b7+o+b8))
H.m(a2,"$iQ")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.n(P.l(b7+o+b8))
H.m(a5,"$iQ")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.c_(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bY.n(0,j,h)
q=b5.bX
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.n(P.l(b7+o+b8))
q.n(0,j,m)}for(t=c0.ch,s=t.length,r=[A.c0],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.n(P.l(b7+o+b8))
H.m(m,"$iE")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.n(P.l(b7+o+b8))
H.m(f,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.n(P.l(b7+o+b8))
H.m(e,"$iE")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.n(P.l(b7+o+b8))
H.m(a0,"$iE")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.n(P.l(b7+o+b8))
H.m(a2,"$iE")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.n(P.l(b7+o+b8))
H.m(a5,"$iE")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.n(P.l(b7+o+b8))
H.m(a9,"$iQ")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.n(P.l(b7+o+b8))
H.m(b0,"$iQ")
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
if(a2==null)H.n(P.l(b7+g+b8))
H.m(a2,"$ib1")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.n(P.l(b7+g+b8))
H.m(a2,"$iQ")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.n(P.l(b7+g+b8))
H.m(a5,"$iQ")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.n(P.l(b7+g+b8))
H.m(a2,"$iQ")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.n(P.l(b7+g+b8))
H.m(a5,"$iQ")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.n(P.l(b7+g+b8))
H.m(a9,"$iQ")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.n(P.l(b7+g+b8))
H.m(a2,"$ibt")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.n(P.l(b7+o+b8))
H.m(a2,"$ibt")
a3=a2}else a3=b6
h.push(new A.c0(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c_.n(0,j,h)
q=b5.bZ
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.n(P.l(b7+o+b8))
q.n(0,j,m)}}},
fe:function(a,b){}}
A.cr.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cS.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.cX.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fk.prototype={
h:function(a){return this.aZ}}
A.bY.prototype={}
A.c_.prototype={}
A.c0.prototype={}
A.cV.prototype={
cq:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dg:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cE(b,35633)
r.f=r.cE(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.n(P.l("Failed to link shader: "+H.e(s)))}r.fg()
r.fi()},
al:function(a){a.a.useProgram(this.r)
this.x.fQ()},
cE:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.l("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fg:function(){var u,t,s,r=this,q=H.c([],[A.ci]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.ci(p,t.name,s))}r.x=new A.ee(q)},
fi:function(){var u,t,s,r=this,q=H.c([],[A.d6]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fM(t.type,t.size,t.name,s))}r.y=new A.hz(q)},
aE:function(a,b,c){var u=this.a
if(a===1)return new A.d7(u,b,c)
else return A.j5(u,this.r,b,a,c)},
e5:function(a,b,c){var u=this.a
if(a===1)return new A.bt(u,b,c)
else return A.j5(u,this.r,b,a,c)},
e6:function(a,b,c){var u=this.a
if(a===1)return new A.bu(u,b,c)
else return A.j5(u,this.r,b,a,c)},
b9:function(a,b){return new P.dp(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fM:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aE(b,c,d)
case 5121:return u.aE(b,c,d)
case 5122:return u.aE(b,c,d)
case 5123:return u.aE(b,c,d)
case 5124:return u.aE(b,c,d)
case 5125:return u.aE(b,c,d)
case 5126:return new A.Q(u.a,c,d)
case 35664:return new A.hv(u.a,c,d)
case 35665:return new A.E(u.a,c,d)
case 35666:return new A.b1(u.a,c,d)
case 35667:return new A.hw(u.a,c,d)
case 35668:return new A.hx(u.a,c,d)
case 35669:return new A.hy(u.a,c,d)
case 35674:return new A.hA(u.a,c,d)
case 35675:return new A.bZ(u.a,c,d)
case 35676:return new A.X(u.a,c,d)
case 35678:return u.e5(b,c,d)
case 35680:return u.e6(b,c,d)
case 35670:throw H.f(u.b9("BOOL",c))
case 35671:throw H.f(u.b9("BOOL_VEC2",c))
case 35672:throw H.f(u.b9("BOOL_VEC3",c))
case 35673:throw H.f(u.b9("BOOL_VEC4",c))
default:throw H.f(P.l("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.d6.prototype={}
A.hz.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.l("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.J()},
J:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.d7.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hw.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hx.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hy.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hu.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.Q.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hv.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.E.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.b1.prototype={
cg:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hA.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bZ.prototype={
a5:function(a){var u=new Float32Array(H.cc(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.X.prototype={
a5:function(a){var u=new Float32Array(H.cc(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bt.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bu.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.il.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c2(s.b,b).c2(s.d.c2(s.c,b),c)
a.sX(0,new V.M(r.a,r.b,r.c))
a.scb(r.l(0,Math.sqrt(r.v(r))))
s=1-b
u=1-c
u=new V.aa(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.u(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.M()}}}
F.is.prototype={
$1:function(a){return 1}}
F.az.prototype={
aW:function(){var u=this
if(!u.gaX()){C.a.w(u.a.a.d.b,u)
u.a.a.M()}u.bF()
u.bG()
u.f9()},
aS:function(a){this.a=a
a.d.b.push(this)},
aT:function(a){this.b=a
a.d.c.push(this)},
cP:function(a){this.c=a
a.d.d.push(this)},
bF:function(){var u=this.a
if(u!=null){C.a.w(u.d.b,this)
this.a=null}},
bG:function(){var u=this.b
if(u!=null){C.a.w(u.d.c,this)
this.b=null}},
f9:function(){var u=this.c
if(u!=null){C.a.w(u.d.d,this)
this.c=null}},
gaX:function(){return this.a==null||this.b==null||this.c==null},
e0:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bv()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.di())return
return s.l(0,Math.sqrt(s.v(s)))},
e3:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.r(r.a,r.b,r.c)
s=r.l(0,Math.sqrt(r.v(r)))
r=t.F(0,q)
r=new V.r(r.a,r.b,r.c)
r=s.aV(r.l(0,Math.sqrt(r.v(r))))
return r.l(0,Math.sqrt(r.v(r)))},
bQ:function(){var u,t=this
if(t.d!=null)return!0
u=t.e0()
if(u==null){u=t.e3()
if(u==null)return!1}t.d=u
t.a.a.M()
return!0},
e_:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bv()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.di())return
return s.l(0,Math.sqrt(s.v(s)))},
e2:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.x().a){l=d.F(0,g)
l=new V.r(l.a,l.b,l.c)
q=l.l(0,Math.sqrt(l.v(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.F(0,g)
l=new V.M(l.a*p,l.b*p,l.c*p).A(0,g).F(0,j)
l=new V.r(l.a,l.b,l.c)
q=l.l(0,Math.sqrt(l.v(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.l(0,Math.sqrt(l.v(l)))
l=o.aV(q)
l=l.l(0,Math.sqrt(l.v(l))).aV(o)
q=l.l(0,Math.sqrt(l.v(l)))}return q},
bP:function(){var u,t=this
if(t.e!=null)return!0
u=t.e_()
if(u==null){u=t.e2()
if(u==null)return!1}t.e=u
t.a.a.M()
return!0},
aD:function(a,b){var u=b.a
if(u==null)throw H.f(P.l("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.f(P.l("May not replace a face's vertex with a vertex attached to a different shape."))},
gfK:function(a){var u=this
if(J.u(u.a,u.b))return!0
if(J.u(u.b,u.c))return!0
if(J.u(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
D:function(a){var u,t,s=this
if(s.gaX())return a+"disposed"
u=a+C.c.ac(J.a5(s.a.e),0)+", "+C.c.ac(J.a5(s.b.e),0)+", "+C.c.ac(J.a5(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
J:function(){return this.D("")}}
F.eI.prototype={}
F.h4.prototype={
aL:function(a,b,c){var u,t=b.a
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.aA.prototype={
aW:function(){var u=this
if(!u.gaX()){C.a.w(u.a.a.c.b,u)
u.a.a.M()}u.bF()
u.bG()},
aS:function(a){this.a=a
a.c.b.push(this)},
aT:function(a){this.b=a
a.c.c.push(this)},
bF:function(){var u=this.a
if(u!=null){C.a.w(u.c.b,this)
this.a=null}},
bG:function(){var u=this.b
if(u!=null){C.a.w(u.c.c,this)
this.b=null}},
gaX:function(){return this.a==null||this.b==null},
aD:function(a,b){var u=b.a
if(u==null)throw H.f(P.l("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.f(P.l("May not replace a line's vertex with a vertex attached to a different shape."))},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
D:function(a){if(this.gaX())return a+"disposed"
return a+C.c.ac(J.a5(this.a.e),0)+", "+C.c.ac(J.a5(this.b.e),0)},
J:function(){return this.D("")}}
F.f7.prototype={}
F.ht.prototype={
aL:function(a,b,c){var u,t=b.a
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
return t==u.e}else{t=b.a
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
return t==u.e}else return!1}}}
F.bU.prototype={
ff:function(a){this.a=a
a.b.b.push(this)},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ac(J.a5(u.e),0)},
J:function(){return this.D("")}}
F.ac.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.D():u},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.p()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.j(0,r.bS())}h.a.p()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.j(0,n)
F.kK(n)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.j(0,l)
p.a.j(0,k)
F.j0(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.j(0,l)
o.a.j(0,k)
o.a.j(0,i)
F.bK(l,k,i)}g=h.e
if(g!=null)g.ap(0)},
am:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.am()||!1
if(!t.a.am())u=!1
s=t.e
if(s!=null)s.ap(0)
return u},
aI:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aI()||!1
if(!t.a.aI())u=!1
s=t.e
if(s!=null)s.ap(0)
return u},
bb:function(){var u=this.e
if(u!=null)++u.d
this.a.bb()
u=this.e
if(u!=null)u.ap(0)
return!0},
fS:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.b(t,u)
s=t[u]
if(b.aL(0,a,s))return s}return},
fa:function(a,b){var u,t,s,r,q,p
this.a.j(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.i(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.n(P.l("May not replace a face's vertex when the point has been disposed."))
if(J.u(q,s)){r.aD(s,a)
q=r.a
if(q!=null){C.a.w(q.d.b,r)
r.a=null}r.a=a
a.d.b.push(r)
p=1}else p=0
if(J.u(r.b,s)){r.aD(s,a)
q=r.b
if(q!=null){C.a.w(q.d.c,r)
r.b=null}r.b=a
a.d.c.push(r);++p}if(J.u(r.c,s)){r.aD(s,a)
q=r.c
if(q!=null){C.a.w(q.d.d,r)
r.c=null}r.c=a
a.d.d.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.C(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.i(0,0)
q=r.a
if(q==null||r.b==null)H.n(P.l("May not replace a line's vertex when the point has been disposed."))
if(J.u(q,s)){r.aD(s,a)
q=r.a
if(q!=null){C.a.w(q.c.b,r)
r.a=null}r.a=a
a.c.b.push(r)
p=1}else p=0
if(J.u(r.b,s)){r.aD(s,a)
q=r.b
if(q!=null){C.a.w(q.c.c,r)
r.b=null}r.b=a
a.c.c.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.C(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.n(P.l("May not replace a point's vertex when the point has been disposed."))
if(J.u(q,s)){if(a.a==null)H.n(P.l("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.w(q.b.b,r)
r.a=null}r.a=a
a.b.b.push(r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.C(null)}}this.a.w(0,s)}},
h_:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.c(n.slice(0),[H.e7(n,0)])
for(n=[F.au];u.length!==0;){t=C.a.gfU(u)
C.a.dA(u,0)
if(t!=null){s=H.c([],n)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aL(0,t,q)){s.push(q)
C.a.dA(u,r)}}if(s.length>1){p=b.ay(s)
o.fa(p,s)
u.push(p)}}}o.a.p()
o.c.c8()
o.d.c8()
o.b.hi()
o.c.c9(new F.ht())
o.d.c9(new F.h4())
n=o.e
if(n!=null)n.ap(0)},
cY:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ak()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aj().a)!==0)++s
if((t&$.ai().a)!==0)++s
if((t&$.b9().a)!==0)++s
if((t&$.ba().a)!==0)++s
if((t&$.b8().a)!==0)++s
if((t&$.ch().a)!==0)++s
if((t&$.bz().a)!==0)++s
if((t&$.aK().a)!==0)++s
r=a4.gcl(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.I])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.ck])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fD(m)
k=l.gcl(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.ck(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].fZ(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cc(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bd(new Z.de(a1,d),o,a4)
c.b=H.c([],[Z.bg])
if(a0.b.b.length!==0){b=H.c([],[P.y])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)}a=Z.j6(u,34963,b)
c.b.push(new Z.bg(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.y])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.p()
b.push(t.e)}a=Z.j6(u,34963,b)
c.b.push(new Z.bg(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.y])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.p()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.p()
b.push(t.e)}a=Z.j6(u,34963,b)
c.b.push(new Z.bg(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.t])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.D(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.D(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.D(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.D(t))}return C.a.u(s,"\n")},
M:function(){var u=this.e
if(u!=null)u.C(null)}}
F.fZ.prototype={
cT:function(a,b,c,d){var u,t=this.a
t.a.j(0,b)
t.a.j(0,c)
t.a.j(0,d)
u=new F.az()
t=b.a
if(t==null)H.n(P.l("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.n(P.l("May not create a face with vertices attached to different shapes."))
u.aS(b)
u.aT(c)
u.cP(d)
u.a.a.d.b.push(u)
u.a.a.M()
return u},
fz:function(a){var u,t,s,r,q,p=H.c([],[F.az]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.j(0,u)
t.a.j(0,r)
t.a.j(0,q)
p.push(F.bK(u,r,q))}}return p},
fA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.az])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.b(c,s)
m=c[s];++s
if(s>=n)return H.b(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.b(c,k)
j=c[k]
if(t<0||t>=n)return H.b(c,t)
i=c[t]
n=u.a
if(p){n.j(0,m)
u.a.j(0,l)
u.a.j(0,j)
h.push(F.bK(m,l,j))
u.a.j(0,m)
u.a.j(0,j)
u.a.j(0,i)
h.push(F.bK(m,j,i))}else{n.j(0,l)
u.a.j(0,j)
u.a.j(0,i)
h.push(F.bK(l,j,i))
u.a.j(0,l)
u.a.j(0,i)
u.a.j(0,m)
h.push(F.bK(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
c9:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aL(0,p,n)){p.aW()
break}}}}},
c8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gfK(s)
if(t)s.aW()}},
am:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bQ())s=!1
return s},
aI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bP())s=!1
return s},
h:function(a){return this.J()},
D:function(a){var u,t,s,r=H.c([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(a))
return C.a.u(r,"\n")},
J:function(){return this.D("")}}
F.h_.prototype={
bL:function(a,b,c){var u,t=this.a
t.a.j(0,b)
t.a.j(0,c)
t=new F.aA()
if(b==null)H.n(P.l("May not create a line with a null start vertex."))
if(c==null)H.n(P.l("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.n(P.l("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.n(P.l("May not create a line with vertices attached to different shapes."))
t.aS(b)
t.aT(c)
t.a.a.c.b.push(t)
t.a.a.M()
return t},
cU:function(a){var u,t,s,r,q=H.c([],[F.aA]),p=a.length
if(p>0){for(u=this.a,t=1;t<p;++t){s=t-1
r=a.length
if(s>=r)return H.b(a,s)
s=a[s]
if(t>=r)return H.b(a,t)
r=a[t]
u.a.j(0,s)
u.a.j(0,r)
q.push(F.j0(s,r))}u=p-1
s=a.length
if(u>=s)return H.b(a,u)
u=a[u]
if(0>=s)return H.b(a,0)
q.push(this.bL(0,u,a[0]))}return q},
fB:function(a){var u,t,s,r,q=H.c([],[F.aA])
for(u=this.a,t=1;t<64;t+=2){s=a[t-1]
r=a[t]
u.a.j(0,s)
u.a.j(0,r)
q.push(F.j0(s,r))}return q},
gk:function(a){return this.b.length},
c9:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aL(0,p,n)){p.aW()
break}}}}},
c8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.u(s.a,s.b)
if(t)s.aW()}},
h:function(a){return this.J()},
D:function(a){var u,t,s=H.c([],[P.t]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].D(a+(""+u+". ")))}return C.a.u(s,"\n")},
J:function(){return this.D("")}}
F.h0.prototype={
gk:function(a){return this.b.length},
hi:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.w(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.C(null)}s=t.a
if(s!=null){C.a.w(s.b.b,t)
t.a=null}}}},
h:function(a){return this.J()},
D:function(a){var u,t,s,r=H.c([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(a))
return C.a.u(r,"\n")},
J:function(){return this.D("")}}
F.au.prototype={
bT:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.b2(u.cx,r,o,t,s,q,p,a,n)},
bS:function(){return this.bT(null)},
sX:function(a,b){var u
if(!J.u(this.f,b)){this.f=b
u=this.a
if(u!=null)u.M()}},
sdj:function(a){var u
a=a==null?null:a.l(0,Math.sqrt(a.v(a)))
if(!J.u(this.r,a)){this.r=a
u=this.a
if(u!=null)u.M()}},
sba:function(a){var u
a=a==null?null:a.l(0,Math.sqrt(a.v(a)))
if(!J.u(this.x,a)){this.x=a
u=this.a
if(u!=null)u.M()}},
sca:function(a){var u
if(!J.u(this.y,a)){this.y=a
u=this.a
if(u!=null)u.M()}},
scb:function(a){var u
if(!J.u(this.z,a)){this.z=a
u=this.a
if(u!=null)u.M()}},
sV:function(a,b){var u
if(!J.u(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.M()}},
sdE:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.M()}},
fZ:function(a){var u,t,s=this
if(a.q(0,$.ak())){u=s.f
t=[P.I]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.aj())){u=s.r
t=[P.I]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.ai())){u=s.x
t=[P.I]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.b9())){u=s.y
t=[P.I]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.ba())){u=s.z
t=[P.I]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.b8())){u=s.Q
t=[P.I]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.ch())){u=s.Q
if(u==null)return H.c([1,1,1,1],[P.I])
else return u.cc(0)}else if(a.q(0,$.bz()))return H.c([s.ch],[P.I])
else if(a.q(0,$.aK())){u=s.cx
t=[P.I]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.I])},
bQ:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bv()
t.d.E(0,new F.hS(s))
s=s.a
t.r=s.l(0,Math.sqrt(s.v(s)))
s=t.a
if(s!=null){s.M()
s=t.a.e
if(s!=null)s.ap(0)}return!0},
bP:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bv()
t.d.E(0,new F.hR(s))
s=s.a
t.x=s.l(0,Math.sqrt(s.v(s)))
s=t.a
if(s!=null){s.M()
s=t.a.e
if(s!=null)s.ap(0)}return!0},
de:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.b
t.a.a.p()
t=t.e
a.a.a.p()
if(t==a.e)return s}return},
fV:function(a){var u=this.de(a)
if(u!=null)return u
return a.de(this)},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
D:function(a){var u,t,s=this,r="-",q=H.c([],[P.t])
q.push(C.c.ac(J.a5(s.e),0))
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
q.push(V.z(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.u(q,", ")
return a+"{"+t+"}"},
J:function(){return this.D("")}}
F.hS.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.hR.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.hI.prototype={
p:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
j:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.l("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.M()
return!0},
fC:function(a,b,c,d,e,f,g){var u=F.b2(a,null,b,c,d,e,f,g,0)
this.j(0,u)
return u},
aH:function(a,b,c,d,e,f){return this.fC(a,b,c,null,d,e,f)},
U:function(a,b,c){var u=null,t=F.b2(u,u,u,new V.M(a,b,c),u,u,u,u,0)
this.j(0,t)
return t},
gk:function(a){return this.c.length},
w:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.f(P.l("May not remove a vertex without first making it empty."))
b.a=null
C.a.w(this.c,b)
u.M()
return this.b=!0},
am:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bQ()
return!0},
aI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bP()
return!0},
bb:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.l(0,Math.sqrt(p*p+o*o+n*n))
if(!J.u(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
h:function(a){return this.J()},
D:function(a){var u,t,s,r
this.p()
u=H.c([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].D(a))
return C.a.u(u,"\n")},
J:function(){return this.D("")}}
F.hJ.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
E:function(a,b){var u=this
C.a.E(u.b,b)
C.a.E(u.c,new F.hK(u,b))
C.a.E(u.d,new F.hL(u,b))},
h:function(a){return this.J()},
J:function(){var u,t,s,r=H.c([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
return C.a.u(r,"\n")}}
F.hK.prototype={
$1:function(a){if(!J.u(a.a,this.a))this.b.$1(a)}}
F.hL.prototype={
$1:function(a){var u=this.a
if(!J.u(a.a,u)&&!J.u(a.b,u))this.b.$1(a)}}
F.hN.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.J()},
J:function(){var u,t,s,r=H.c([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
return C.a.u(r,"\n")}}
F.hO.prototype={}
F.dd.prototype={
aL:function(a,b,c){return J.u(b.f,c.f)}}
F.hP.prototype={}
F.hM.prototype={
ay:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.M(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.r(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.r(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.N(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.r(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.aG(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.aG(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.q(a)
i+=a;++j}a3=F.b2(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sX(0,a4)
else a3.sX(0,o.l(0,n))
if(p==null)a3.sdj(a4)
else a3.sdj(p.l(0,Math.sqrt(p.v(p))))
if(q==null)a3.sba(a4)
else a3.sba(q.l(0,Math.sqrt(q.v(q))))
if(l<=0||s==null)a3.sca(a4)
else a3.sca(s.l(0,l))
if(k<=0||t==null)a3.scb(a4)
else a3.scb(t.l(0,k))
if(m<=0||r==null)a3.sV(0,a4)
else{u=r.l(0,m)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sV(0,new V.B(a,a0,a1,u))}if(j<=0)a3.sdE(0,0)
else a3.sdE(0,i/j)
return a3}}
F.hQ.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.J()},
J:function(){var u,t,s,r=H.c([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
return C.a.u(r,"\n")}}
O.cy.prototype={
gt:function(){var u=this.rx
return u==null?this.rx=D.D():u},
W:function(a){var u=this.rx
if(u!=null)u.C(a)},
scj:function(a){var u
if(!this.Q){this.Q=!0
u=new D.w("showFilled",!1,!0)
u.b=!0
this.W(u)}},
sck:function(a){var u
if(!this.ch){this.ch=!0
u=new D.w("showWireFrame",!1,!0)
u.b=!0
this.W(u)}},
sd1:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
s.c=a
t=new D.w("diffuse1",u,a)
t.b=!0
s.W(t)}},
scW:function(a){var u,t,s=this
if(!s.d.q(0,a)){u=s.d
s.d=a
t=new D.w("ambient1",u,a)
t.b=!0
s.W(t)}},
a7:function(a,b){},
dB:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.eU(t,n)
u.cq(t,n)
u.dg(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.i(0,"posAttr")
u.Q=u.x.i(0,"normAttr")
u.ch=u.x.i(0,"clrAttr")
u.cx=u.x.i(0,"binmAttr")
u.cy=H.m(u.y.i(0,"lightVec"),"$iE")
u.db=H.m(u.y.i(0,"ambientClr"),"$ib1")
u.dx=H.m(u.y.i(0,"diffuseClr"),"$ib1")
u.dy=H.m(u.y.i(0,"weightScalar"),"$iQ")
u.fr=H.m(u.y.i(0,"viewMat"),"$iX")
u.fx=H.m(u.y.i(0,"viewObjMatrix"),"$iX")
u.fy=H.m(u.y.i(0,"projViewObjMatrix"),"$iX")
a.cV(u)}o.a=u}if(b.e==null){b.d.am()
b.d.aI()
b.d.bb()
t=new Z.cl()
t.a=new H.L([P.t,Z.bd])
b.e=t}t=o.a
t.al(a)
s=o.r2
r=t.dy
r.a.uniform1f(r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
r.a.uniform3f(r.d,q,p,s)
s=a.db
s=s.gN(s)
p=t.fr
p.toString
p.a5(s.a0(0,!0))
s=a.gdD()
p=t.fx
p.toString
p.a5(s.a0(0,!0))
s=a.gdv()
t=t.fy
t.toString
t.a5(s.a0(0,!0))
t=b.e
if(t instanceof Z.cl){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
if(o.Q)o.cL(a,t,b.c,"shapeFill",o.gfj(),o.d,o.c)
s.disable(m)
s.blendFunc(1,1)
if(o.ch)o.cL(a,t,b.c,"wireFrame",o.gfu(),o.f,o.e)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.d3()},
cL:function(a,b,c,d,e,f,g){var u,t=b.a.i(0,d)
if(t==null){t=this.e1(a,e.$1(c))
b.a.n(0,d,t)}u=this.a
u.db.cg(f)
u.dx.cg(g)
t.h8(a)},
e1:function(a,b){var u=this,t=$.ak(),s=$.aj(),r=b.cY(new Z.df(a.a),new Z.aH(t.a|s.a|$.ai().a|$.b8().a))
r.aa($.ak()).e=u.a.z.c
r.aa($.aj()).e=u.a.Q.c
r.aa($.b8()).e=u.a.ch.c
r.aa($.ai()).e=u.a.cx.c
return r},
fk:function(a){var u=F.ah()
C.a.E(a.a.c,new O.eV(u,new V.B(1,1,1,1)))
C.a.E(a.d.b,new O.eW(u))
return u},
cR:function(a,b){var u,t={}
t.a=b
u=F.ah()
t.a=new V.B(0,0.7,1,1)
C.a.E(a.a.c,new O.eY(t,u))
t=new O.eX(u)
C.a.E(a.c.b,new O.eZ(u,t))
C.a.E(a.d.b,new O.f_(u,t))
return u},
fv:function(a){return this.cR(a,null)}}
O.eV.prototype={
$1:function(a){var u=this.a.a,t=a.bS()
t.sV(0,this.b)
t.sba(V.bv())
u.j(0,t)}}
O.eW.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.p()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.p()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.p()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.cT(0,u,t,s)}}
O.eY.prototype={
$1:function(a){var u=this.b.a,t=a.bS()
t.sV(0,this.a.a)
t.sba(V.bv())
u.j(0,t)}}
O.eX.prototype={
$2:function(a,b){if(a.fV(b)==null)this.a.c.bL(0,a,b)}}
O.eZ.prototype={
$1:function(a){var u,t=this.a,s=t.a,r=a.a
r.a.a.p()
r=r.e
s=s.c
if(r>>>0!==r||r>=s.length)return H.b(s,r)
u=s[r]
t=t.a
r=a.b
r.a.a.p()
r=r.e
t=t.c
if(r>>>0!==r||r>=t.length)return H.b(t,r)
this.b.$2(u,t[r])}}
O.f_.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.p()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.p()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
r=r.a
q=a.c
q.a.a.p()
q=q.e
r=r.c
if(q>>>0!==q||q>=r.length)return H.b(r,q)
s=r[q]
q=this.b
q.$2(u,t)
q.$2(t,s)
q.$2(s,u)}}
O.cJ.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.D():u},
W:function(a){var u=this.fr
if(u!=null)u.C(a)},
dU:function(){return this.W(null)},
cM:function(a){this.a=null
this.W(a)},
fd:function(){return this.cM(null)},
ek:function(a,b){var u=new D.aO()
u.b=!0
this.W(u)},
em:function(a,b){var u=new D.aP()
u.b=!0
this.W(u)},
cB:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.y,h=new H.L([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.gan()
p=h.i(0,r.gan())
h.n(0,q,p==null?1:p)}o=H.c([],[A.cr])
h.E(0,new O.fo(j,o))
C.a.bm(o,new O.fp())
n=new H.L([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.gan()
p=n.i(0,r.gan())
n.n(0,q,p==null?1:p)}m=H.c([],[A.cS])
n.E(0,new O.fq(j,m))
C.a.bm(m,new O.fr())
l=new H.L([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.o)(i),++s){r=i[s]
t=r.gan()
q=l.i(0,r.gan())
l.n(0,t,q==null?1:q)}k=H.c([],[A.cX])
l.E(0,new O.fs(j,k))
C.a.bm(k,new O.ft())
i=C.d.a9(j.e.a.length+3,4)
j.dy.e
return A.kJ(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
dZ:function(a,b){},
a7:function(a,b){var u
for(u=this.dx.a,u=new J.W(u,u.length);u.B();)C.f.a7(u.d,b)},
dB:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cB()
u=b1.fr.i(0,b0.aZ)
if(u==null){u=A.kI(b0,b1.a)
b1.cV(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.d4
b0=b2.e
if(!(b0 instanceof Z.bd))b0=b2.e=null
if(b0==null||!b0.d.q(0,s)){b0=t.k3
if(b0)b2.d.am()
r=t.k4
if(r)b2.d.aI()
q=t.r2
if(q)b2.d.bb()
p=b2.d.cY(new Z.df(b1.a),s)
p.aa($.ak()).e=a9.a.Q.c
if(b0)p.aa($.aj()).e=a9.a.cx.c
if(r)p.aa($.ai()).e=a9.a.ch.c
if(t.r1)p.aa($.b9()).e=a9.a.cy.c
if(q)p.aa($.ba()).e=a9.a.db.c
if(t.rx)p.aa($.aK()).e=a9.a.dx.c
b2.e=p}o=H.c([],[T.hj])
a9.a.al(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.gN(r)
b0=b0.dy
b0.toString
b0.a5(r.a0(0,!0))}if(t.fr){b0=a9.a
r=b1.gdD()
b0=b0.fr
b0.toString
b0.a5(r.a0(0,!0))}b0=a9.a
r=b1.gdv()
b0=b0.fy
b0.toString
b0.a5(r.a0(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.a5(C.f.a0(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.a5(C.f.a0(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.a5(C.f.a0(r,!0))}if(t.y2>0){n=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,n)
for(m=0;m<n;++m){b0=a9.a
r=a9.e.a
if(m>=r.length)return H.b(r,m)
r=r[m]
b0=b0.r1
if(m>=b0.length)return H.b(b0,m)
b0=b0[m]
l=new Float32Array(H.cc(r.a0(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,l)}}if(t.a.a){b0=a9.a
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
b0=b0.d5
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.e.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.z.ch
r=r.d7
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.z.f
b0=b0.d6
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.z
if(b0.length>0){r=b1.db
k=r.gN(r)
r=P.y
j=new H.L([r,r])
for(r=a9.dx.e,q=r.length,i=0;i<r.length;r.length===q||(0,H.o)(r),++i){h=r[i]
g=h.gan()
f=j.i(0,g)
if(f==null)f=0
j.n(0,g,f+1)
e=J.e9(a9.a.bW.i(0,g),f)
d=h.gd2(h)
c=C.b.m(k.a,d.gbd(d))+C.b.m(k.b,d.gbe(d))+C.b.m(k.c,d.gbf())
b=C.b.m(k.e,d.gbd(d))+C.b.m(k.f,d.gbe(d))+C.b.m(k.r,d.gbf())
d=C.b.m(k.y,d.gbd(d))+C.b.m(k.z,d.gbe(d))+C.b.m(k.Q,d.gbf())
d=new V.r(c,b,d).l(0,Math.sqrt(c*c+b*b+d*d))
b=e.e
c=d.a
a=d.b
d=d.c
b.a.uniform3f(b.d,c,a,d)
d=h.gV(h)
a=e.f
a.a.uniform3f(a.d,d.a,d.b,d.c)
h.gad()
d=h.gd2(h)
c=e.d
c.a.uniform3f(c.d,d.a,d.b,d.c)
d=h.gaA()
c=e.b
c.a.uniform3f(c.d,d.a,d.b,d.c)
d=h.gbi(h)
c=e.c
c.a.uniform3f(c.d,d.a,d.b,d.c)
d=h.gad()
if(!C.a.ao(o,d)){d.saf(0,o.length)
o.push(d)}d=h.gad()
c=d.gag(d)
if(c){c=e.r
c.toString
b=d.gag(d)
if(!b)c.a.uniform1i(c.d,0)
else{d=d.gaf(d)
c.a.uniform1i(c.d,d)}}}for(r=b0.length,i=0;i<b0.length;b0.length===r||(0,H.o)(b0),++i){q=b0[i].a
n=j.i(0,q)
if(n==null)n=0
q=a9.a.bV.i(0,q)
q.a.uniform1i(q.d,n)}}b0=t.Q
if(b0.length>0){r=b1.db
k=r.gN(r)
r=P.y
a0=new H.L([r,r])
for(r=a9.dx.f,q=r.length,i=0;i<r.length;r.length===q||(0,H.o)(r),++i){h=r[i]
g=h.gan()
f=a0.i(0,g)
if(f==null)f=0
a0.n(0,g,f+1)
e=J.e9(a9.a.bY.i(0,g),f)
a1=k.m(0,h.gN(h))
d=h.gN(h)
c=$.bV
d=d.cd(c==null?$.bV=new V.M(0,0,0):c)
c=e.b
c.a.uniform3f(c.d,d.a,d.b,d.c)
d=$.bV
d=a1.cd(d==null?$.bV=new V.M(0,0,0):d)
c=e.c
c.a.uniform3f(c.d,d.a,d.b,d.c)
d=h.gV(h)
c=e.e
c.a.uniform3f(c.d,d.a,d.b,d.c)
h.gad()
d=a1.dh(0)
c=d.a
b=d.b
a=d.c
a2=d.e
a3=d.f
a4=d.r
a5=d.y
a6=d.z
d=d.Q
a7=e.d
a7.toString
l=new Float32Array(H.cc(new V.cL(c,b,a,a2,a3,a4,a5,a6,d).a0(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,l)
h.gad()
d=h.gad()
if(!C.a.ao(o,d)){d.saf(0,o.length)
o.push(d)}d=h.gad()
c=d.gag(d)
if(c){c=e.f
c.toString
b=d.gag(d)
if(!b)c.a.uniform1i(c.d,0)
else{d=d.gaf(d)
c.a.uniform1i(c.d,d)}}h.gaO()
d=h.gdI()
c=e.x
c.toString
b=d.gbd(d)
a=d.gbe(d)
a2=d.gbf()
d=d.gfP()
c.a.uniform4f(c.d,b,a,a2,d)
d=h.gaO()
if(!C.a.ao(o,d)){d.saf(0,o.length)
o.push(d)}d=h.gaO()
c=d.gag(d)
if(c){c=e.r
c.toString
b=d.gag(d)
if(!b)c.a.uniform1i(c.d,0)
else{d=d.gaf(d)
c.a.uniform1i(c.d,d)}}if(h.gfR()){d=h.gfE()
c=e.y
c.a.uniform1f(c.d,d)
d=h.gfF()
c=e.z
c.a.uniform1f(c.d,d)
d=h.gfG()
c=e.Q
c.a.uniform1f(c.d,d)}}for(r=b0.length,i=0;i<b0.length;b0.length===r||(0,H.o)(b0),++i){q=b0[i].a
n=a0.i(0,q)
if(n==null)n=0
q=a9.a.bX.i(0,q)
q.a.uniform1i(q.d,n)}}b0=t.ch
if(b0.length>0){r=b1.db
k=r.gN(r)
r=P.y
a8=new H.L([r,r])
for(r=a9.dx.r,q=r.length,i=0;i<r.length;r.length===q||(0,H.o)(r),++i){h=r[i]
g=h.gan()
f=a8.i(0,g)
if(f==null)f=0
a8.n(0,g,f+1)
e=J.e9(a9.a.c_.i(0,g),f)
d=h.ghg(h)
c=e.b
c.a.uniform3f(c.d,d.a,d.b,d.c)
d=h.gd2(h).hK()
c=e.c
c.a.uniform3f(c.d,d.a,d.b,d.c)
d=k.cd(h.ghg(h))
c=e.d
c.a.uniform3f(c.d,d.a,d.b,d.c)
d=h.gV(h)
c=e.e
c.a.uniform3f(c.d,d.a,d.b,d.c)
h.gad()
d=h.gaA()
c=e.f
c.a.uniform3f(c.d,d.a,d.b,d.c)
d=h.gbi(h)
c=e.r
c.a.uniform3f(c.d,d.a,d.b,d.c)
d=h.ghL()
c=e.x
c.a.uniform1f(c.d,d)
d=h.ghM()
c=e.y
c.a.uniform1f(c.d,d)
h.gad()
d=h.gad()
if(!C.a.ao(o,d)){d.saf(0,o.length)
o.push(d)}d=h.gad()
c=d.gag(d)
if(c){c=e.dx
c.toString
b=d.gag(d)
if(!b)c.a.uniform1i(c.d,0)
else{d=d.gaf(d)
c.a.uniform1i(c.d,d)}}h.gaO()
d=h.gdI()
c=e.z
c.toString
b=d.gbd(d)
a=d.gbe(d)
a2=d.gbf()
d=d.gfP()
c.a.uniform4f(c.d,b,a,a2,d)
d=h.gaO()
if(!C.a.ao(o,d)){d.saf(0,o.length)
o.push(d)}d=h.gaO()
c=d.gag(d)
if(c){c=e.dy
c.toString
b=d.gag(d)
if(!b)c.a.uniform1i(c.d,0)
else{d=d.gaf(d)
c.a.uniform1i(c.d,d)}}if(h.ghu()){d=h.ght()
c=e.Q
c.a.uniform1f(c.d,d)
d=h.ghs()
c=e.ch
c.a.uniform1f(c.d,d)}if(h.gfR()){d=h.gfE()
c=e.cx
c.a.uniform1f(c.d,d)
d=h.gfF()
c=e.cy
c.a.uniform1f(c.d,d)
d=h.gfG()
c=e.db
c.a.uniform1f(c.d,d)}}for(r=b0.length,i=0;i<b0.length;b0.length===r||(0,H.o)(b0),++i){q=b0[i].a
n=a8.i(0,q)
if(n==null)n=0
q=a9.a.bZ.i(0,q)
q.a.uniform1i(q.d,n)}}}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gN(r).dh(0)}b0=b0.id
b0.toString
b0.a5(r.a0(0,!0))}if(t.cy){a9.dZ(o,a9.ch)
b0=a9.a
r=a9.ch
b0.fe(b0.d8,r)
if(t.r.a){b0=a9.a
r=a9.cx.f
b0=b0.d9
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.x.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.cy.ch
r=r.da
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.cy.f
b0=b0.dc
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}}b0=t.y.a
r=!b0
if(r)q=!1
else q=!0
if(q){if(b0){b0=a9.a
q=a9.db.f
b0=b0.dd
b0.a.uniform1f(b0.d,q)}b0=b1.a
b0.enable(3042)
b0.blendFunc(770,771)}for(m=0;m<o.length;++m)o[m].al(b1)
b0=H.m(b2.e,"$ibd")
b0.al(b1)
b0.ai(b1)
b0.ce(b1)
if(r)b0=!1
else b0=!0
if(b0)b1.a.disable(3042)
for(m=0;m<o.length;++m)o[m].ce(b1)
b0=a9.a
b0.toString
b1.a.useProgram(null)
b0.x.d3()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cB().aZ}}
O.fo.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cr(a,C.d.a9(b+3,4)*4))}}
O.fp.prototype={
$2:function(a,b){return J.iO(a.a,b.a)}}
O.fq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cS(a,C.d.a9(b+3,4)*4))}}
O.fr.prototype={
$2:function(a,b){return J.iO(a.a,b.a)}}
O.fs.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cX(a,C.d.a9(b+3,4)*4))}}
O.ft.prototype={
$2:function(a,b){return J.iO(a.a,b.a)}}
O.fi.prototype={
bH:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.x().a)){u.f=a
t=new D.w(u.b,t,a)
t.b=!0
u.a.W(t)}},
at:function(){this.co()
this.bH(1)},
sZ:function(a,b){var u=this
if(b<=0){u.bI(new A.R(!1,!1,!1))
u.bH(0)}else{u.bI(new A.R(!0,!1,!1))
u.bH(b>=1?1:b)}}}
O.cK.prototype={
at:function(){},
bI:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.at()
u=s.a
u.a=null
u.W(null)}}}
O.fj.prototype={}
O.ap.prototype={
cO:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.w(s.b+".color",u,a)
t.b=!0
s.a.W(t)}},
at:function(){this.co()
this.cO(new V.P(1,1,1))},
sV:function(a,b){this.bI(new A.R(!0,!1,!1))
this.cO(b)}}
O.fl.prototype={}
O.fm.prototype={
at:function(){var u,t=this
t.cp()
u=t.ch
if(!(Math.abs(u-1)<$.x().a)){t.ch=1
u=new D.w(t.b+".refraction",u,1)
u.b=!0
t.a.W(u)}}}
O.fn.prototype={
at:function(){var u,t=this
t.cp()
u=t.ch
if(!(Math.abs(u-100)<$.x().a)){t.ch=100
u=new D.w(t.b+".shininess",u,100)
u.b=!0
t.a.W(u)}}}
O.d0.prototype={}
T.hj.prototype={}
X.iQ.prototype={}
X.eQ.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.D():u}}
X.cR.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.D():u},
ar:function(a){var u=this.f
if(u!=null)u.C(a)},
dW:function(){return this.ar(null)},
sS:function(a){var u,t,s=this
if(!J.u(s.b,a)){u=s.b
if(u!=null)u.gt().w(0,s.gb5())
t=s.b
s.b=a
if(a!=null)a.gt().j(0,s.gb5())
u=new D.w("mover",t,s.b)
u.b=!0
s.ar(u)}},
saz:function(a){var u,t,s=this
if(!J.u(s.a,a)){u=s.a
if(u!=null)u.gt().w(0,s.gb5())
t=s.a
s.a=a
if(a!=null)a.gt().j(0,s.gb5())
u=new D.w("premover",t,s.a)
u.b=!0
s.ar(u)}}}
X.hf.prototype={}
V.h1.prototype={
dQ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.V(q,"scroll",new V.h3(o),!1)},
bN:function(a,b){var u,t,s,r,q
a=C.d.fJ(a,0,4)
u=P.jR(C.n,b,C.h,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.kr()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
ae:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fh()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hq(C.a.fY(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
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
if(H.m2(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.jR(C.n,n,C.h,!1)
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
bO:function(a){var u=W.jn()
u.className="pageLargeCanvas"
u.id=a
this.a.appendChild(u)},
fh:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.hm()
t=P.t
u.a=new H.L([t,R.cZ])
u.b=new H.L([t,R.d3])
u.c=u.K(0,q)
t=u.K(0,q).u(0,p)
s=T.U(new H.O("*"))
t.a.push(s)
t.c=!0
t=u.K(0,p).u(0,p)
s=new T.aD()
r=[T.cI]
s.a=H.c([],r)
t.a.push(s)
t=T.U(new H.O("*"))
s.a.push(t)
t=u.K(0,p).u(0,"BoldEnd")
s=T.U(new H.O("*"))
t.a.push(s)
t.c=!0
t=u.K(0,q).u(0,o)
s=T.U(new H.O("_"))
t.a.push(s)
t.c=!0
t=u.K(0,o).u(0,o)
s=new T.aD()
s.a=H.c([],r)
t.a.push(s)
t=T.U(new H.O("_"))
s.a.push(t)
t=u.K(0,o).u(0,n)
s=T.U(new H.O("_"))
t.a.push(s)
t.c=!0
t=u.K(0,q).u(0,m)
s=T.U(new H.O("`"))
t.a.push(s)
t.c=!0
t=u.K(0,m).u(0,m)
s=new T.aD()
s.a=H.c([],r)
t.a.push(s)
t=T.U(new H.O("`"))
s.a.push(t)
t=u.K(0,m).u(0,"CodeEnd")
s=T.U(new H.O("`"))
t.a.push(s)
t.c=!0
t=u.K(0,q).u(0,l)
s=T.U(new H.O("["))
t.a.push(s)
t.c=!0
t=u.K(0,l).u(0,k)
s=T.U(new H.O("|"))
t.a.push(s)
s=u.K(0,l).u(0,j)
t=T.U(new H.O("]"))
s.a.push(t)
s.c=!0
s=u.K(0,l).u(0,l)
t=new T.aD()
t.a=H.c([],r)
s.a.push(t)
s=T.U(new H.O("|]"))
t.a.push(s)
s=u.K(0,k).u(0,j)
t=T.U(new H.O("]"))
s.a.push(t)
s.c=!0
s=u.K(0,k).u(0,k)
t=new T.aD()
t.a=H.c([],r)
s.a.push(t)
s=T.U(new H.O("|]"))
t.a.push(s)
u.K(0,q).u(0,i).a.push(new T.eb())
s=u.K(0,i).u(0,i)
t=new T.aD()
t.a=H.c([],r)
s.a.push(t)
s=T.U(new H.O("*_`["))
t.a.push(s)
s=u.K(0,"BoldEnd")
s.d=s.a.b3(p)
s=u.K(0,n)
s.d=s.a.b3(o)
s=u.K(0,"CodeEnd")
s.d=s.a.b3(m)
s=u.K(0,j)
s.d=s.a.b3("Link")
s=u.K(0,i)
s.d=s.a.b3(i)
this.b=u}}
V.h3.prototype={
$1:function(a){P.jH(C.j,new V.h2(this.a))}}
V.h2.prototype={
$0:function(){var u=C.b.aj(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
M.iB.prototype={
$1:function(a){this.a.b=!0}}
M.iC.prototype={
$1:function(a){this.a.b=!1}}
M.iD.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
H.m(a,"$ia9")
u=o.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.F(0,a.z)
s=new V.A(r.a,r.b).m(0,2).l(0,s.gY()).b
if(typeof s!=="number")return H.q(s)
q=u.a=t+s
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sN(0,V.T(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sN(0,V.bm(p,p,p,1))
r.b=s.b=!0}}}
M.iE.prototype={
$1:function(a){this.a.b=!0}}
M.iF.prototype={
$1:function(a){this.a.b=!1}}
M.iG.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
H.m(a,"$ia9")
u=o.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.F(0,a.z)
s=new V.A(r.a,r.b).m(0,2).l(0,s.gY()).b
if(typeof s!=="number")return H.q(s)
q=u.a=t+s
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sN(0,V.T(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sN(0,V.bm(p,p,p,1))
r.b=s.b=!0}}}
M.iH.prototype={
$1:function(a){this.a.b=!0}}
M.iI.prototype={
$1:function(a){this.a.b=!1}}
M.iJ.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
H.m(a,"$ia9")
u=o.a
if(!u.b)return
t=a.c
s=a.d
if(new V.N((s.a-t.a-t.c*0.5)*2,(s.b-t.b-t.d*0.5)*2).l(0,t.gY()).a>0)return
r=u.a
s=s.F(0,a.z)
t=new V.A(s.a,s.b).m(0,2).l(0,t.gY()).b
if(typeof t!=="number")return H.q(t)
q=u.a=r+t
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sN(0,V.T(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sN(0,V.bm(p,p,p,1))
r.b=s.b=!0}a.b=!1}};(function aliases(){var u=J.a.prototype
u.dL=u.h
u=J.cB.prototype
u.dM=u.h
u=T.cx.prototype
u.dK=u.aK
u.cn=u.h
u=O.cK.prototype
u.co=u.at
u=O.ap.prototype
u.cp=u.at})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lD","l3",7)
u(P,"lE","l4",7)
u(P,"lF","l5",7)
t(P,"jW","lB",10)
var n
s(n=E.ay.prototype,"gdq",0,0,null,["$1","$0"],["dr","h6"],0,0)
s(n,"gds",0,0,null,["$1","$0"],["dt","h7"],0,0)
s(n,"gdm",0,0,null,["$1","$0"],["dn","h5"],0,0)
s(n,"gdk",0,0,null,["$1","$0"],["dl","h2"],0,0)
r(n,"gh0","h1",3)
r(n,"gh3","h4",3)
s(n=E.d1.prototype,"gcr",0,0,null,["$1","$0"],["ct","cs"],0,0)
q(n,"ghk","dC",10)
p(n=X.d9.prototype,"geA","eB",4)
p(n,"gen","eo",4)
p(n,"geu","ev",2)
p(n,"geE","eF",11)
p(n,"geC","eD",11)
p(n,"geI","eJ",2)
p(n,"geM","eN",2)
p(n,"gey","ez",2)
p(n,"geK","eL",2)
p(n,"gew","ex",2)
p(n,"geO","eP",17)
p(n,"geQ","eR",4)
p(n,"gf5","f6",5)
p(n,"gf1","f2",5)
p(n,"gf3","f4",5)
s(n=D.cD.prototype,"gcI",0,0,null,["$1","$0"],["cJ","eG"],0,0)
p(n,"geS","eT",18)
r(n,"geh","ei",12)
r(n,"geW","eX",12)
o(V.A.prototype,"gk","b_",6)
o(V.r.prototype,"gk","b_",6)
o(V.aG.prototype,"gk","b_",6)
s(n=U.bL.prototype,"gaF",0,0,null,["$1","$0"],["L","a3"],0,0)
r(n,"gdR","dS",13)
r(n,"geU","eV",13)
s(n=U.da.prototype,"gaF",0,0,null,["$1","$0"],["L","a3"],0,0)
p(n,"gbw","bx",1)
p(n,"gby","bz",1)
p(n,"gbA","bB",1)
s(n=U.db.prototype,"gaF",0,0,null,["$1","$0"],["L","a3"],0,0)
p(n,"gbw","bx",1)
p(n,"gby","bz",1)
p(n,"gbA","bB",1)
p(n,"geb","ec",1)
p(n,"ged","ee",1)
p(n,"gfs","ft",1)
p(n,"gfp","fq",1)
p(n,"gfn","fo",1)
p(U.dc.prototype,"gef","eg",1)
s(n=M.co.prototype,"ga6",0,0,null,["$1","$0"],["a2","bn"],0,0)
r(n,"geY","eZ",14)
r(n,"gf_","f0",14)
s(n=M.cu.prototype,"ga6",0,0,null,["$1","$0"],["a2","bn"],0,0)
r(n,"gep","eq",3)
r(n,"ger","es",3)
p(n=O.cy.prototype,"gfj","fk",19)
s(n,"gfu",0,1,null,["$2$color","$1"],["cR","fv"],20,0)
s(n=O.cJ.prototype,"gdT",0,0,null,["$1","$0"],["W","dU"],0,0)
s(n,"gfc",0,0,null,["$1","$0"],["cM","fd"],0,0)
r(n,"gej","ek",15)
r(n,"gel","em",15)
s(X.cR.prototype,"gb5",0,0,null,["$1","$0"],["ar","dW"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.iZ,J.a,J.W,P.dx,P.i,H.cF,P.f0,H.cv,H.hD,H.hr,P.bf,H.bE,H.dO,P.aB,H.f8,H.f9,H.f3,P.ih,P.dg,P.d_,P.hd,P.ik,P.id,P.i8,P.dw,P.p,P.en,P.ij,P.b6,P.an,P.af,P.bH,P.fK,P.cY,P.dp,P.eP,P.bk,P.cH,P.aT,P.t,P.aY,W.es,W.G,W.cw,P.i9,T.eb,T.cx,T.cI,T.fY,R.cZ,R.d2,R.d3,R.hm,O.ax,O.bO,E.ej,E.ay,E.fQ,E.d1,Z.de,Z.df,Z.bd,Z.cl,Z.bg,Z.aH,D.em,D.bJ,D.S,X.cm,X.cC,X.f5,X.fc,X.a8,X.fA,X.hn,X.d9,D.ex,D.a2,D.fN,D.h7,V.P,V.B,V.eF,V.cL,V.aC,V.N,V.M,V.aa,V.cU,V.A,V.r,V.aG,U.da,U.db,U.dc,M.cu,M.a4,A.ci,A.ee,A.R,A.cr,A.cS,A.cX,A.fk,A.bY,A.c_,A.c0,A.d6,A.hz,F.az,F.eI,F.aA,F.f7,F.bU,F.ac,F.fZ,F.h_,F.h0,F.au,F.hI,F.hJ,F.hN,F.hO,F.hP,F.hQ,O.d0,O.cK,O.fl,X.iQ,X.hf,X.cR,V.h1])
s(J.a,[J.f1,J.cA,J.cB,J.aQ,J.bN,J.bh,H.bT,W.d,W.ea,W.cj,W.am,W.F,W.di,W.a6,W.ew,W.ey,W.dk,W.ct,W.dm,W.eA,W.h,W.dq,W.aN,W.eS,W.ds,W.fb,W.fu,W.dy,W.dz,W.aS,W.dA,W.dD,W.aU,W.dH,W.dJ,W.aW,W.dK,W.aX,W.dP,W.aE,W.dS,W.hl,W.b_,W.dU,W.hp,W.hF,W.dY,W.e_,W.e1,W.e3,W.e5,P.bj,P.du,P.bn,P.dF,P.fP,P.dQ,P.bs,P.dW,P.ef,P.dh,P.dM])
s(J.cB,[J.fL,J.c1,J.aR])
t(J.iY,J.aQ)
s(J.bN,[J.cz,J.f2])
t(P.fa,P.dx)
s(P.fa,[H.d8,W.i0,W.i_,P.eL])
t(H.O,H.d8)
s(P.i,[H.eD,H.ff,H.hU])
s(P.f0,[H.fg,H.hV])
s(P.bf,[H.fH,H.f4,H.hC,H.el,H.fW,P.cQ,P.aw,P.hE,P.hB,P.h9,P.ep,P.ev])
s(H.bE,[H.iN,H.hg,H.iv,H.iw,H.ix,P.hX,P.hW,P.hY,P.hZ,P.ii,P.iq,P.ib,P.ic,P.fe,P.eB,P.eC,W.fw,W.fy,W.fV,W.hc,W.i3,P.ir,P.eM,P.eN,P.eh,E.fR,E.fS,E.fT,E.hk,D.eG,D.eH,F.il,F.is,F.hS,F.hR,F.hK,F.hL,O.eV,O.eW,O.eY,O.eX,O.eZ,O.f_,O.fo,O.fp,O.fq,O.fr,O.fs,O.ft,V.h3,V.h2,M.iB,M.iC,M.iD,M.iE,M.iF,M.iG,M.iH,M.iI,M.iJ])
s(H.hg,[H.ha,H.bC])
t(P.fd,P.aB)
t(H.L,P.fd)
t(H.cE,H.eD)
t(H.cM,H.bT)
s(H.cM,[H.c3,H.c5])
t(H.c4,H.c3)
t(H.bS,H.c4)
t(H.c6,H.c5)
t(H.cN,H.c6)
s(H.cN,[H.fB,H.fC,H.fD,H.fE,H.fF,H.cO,H.fG])
t(P.ia,P.ik)
t(P.i7,P.id)
t(P.eq,P.hd)
t(P.eE,P.en)
t(P.hG,P.eE)
t(P.hH,P.eq)
s(P.af,[P.I,P.y])
s(P.aw,[P.bq,P.eT])
s(W.d,[W.J,W.eK,W.aV,W.c7,W.aZ,W.aF,W.c9,W.hT,W.c2,P.ei,P.bc])
s(W.J,[W.Z,W.aL])
s(W.Z,[W.k,P.j])
s(W.k,[W.ec,W.ed,W.be,W.eO,W.fX])
t(W.er,W.am)
t(W.bG,W.di)
s(W.a6,[W.et,W.eu])
t(W.dl,W.dk)
t(W.cs,W.dl)
t(W.dn,W.dm)
t(W.ez,W.dn)
t(W.aM,W.cj)
t(W.dr,W.dq)
t(W.eJ,W.dr)
t(W.dt,W.ds)
t(W.bM,W.dt)
t(W.b0,W.h)
s(W.b0,[W.bi,W.ar,W.br])
t(W.fv,W.dy)
t(W.fx,W.dz)
t(W.dB,W.dA)
t(W.fz,W.dB)
t(W.dE,W.dD)
t(W.cP,W.dE)
t(W.dI,W.dH)
t(W.fM,W.dI)
t(W.fU,W.dJ)
t(W.c8,W.c7)
t(W.h5,W.c8)
t(W.dL,W.dK)
t(W.h6,W.dL)
t(W.hb,W.dP)
t(W.dT,W.dS)
t(W.hh,W.dT)
t(W.ca,W.c9)
t(W.hi,W.ca)
t(W.dV,W.dU)
t(W.ho,W.dV)
t(W.b3,W.ar)
t(W.dZ,W.dY)
t(W.i1,W.dZ)
t(W.dj,W.ct)
t(W.e0,W.e_)
t(W.i4,W.e0)
t(W.e2,W.e1)
t(W.dC,W.e2)
t(W.e4,W.e3)
t(W.ie,W.e4)
t(W.e6,W.e5)
t(W.ig,W.e6)
t(W.i2,P.d_)
t(P.ab,P.i9)
t(P.dv,P.du)
t(P.f6,P.dv)
t(P.dG,P.dF)
t(P.fI,P.dG)
t(P.dR,P.dQ)
t(P.he,P.dR)
t(P.dX,P.dW)
t(P.hq,P.dX)
t(P.eg,P.dh)
t(P.fJ,P.bc)
t(P.dN,P.dM)
t(P.h8,P.dN)
s(T.cx,[T.aD,R.d5])
s(E.ej,[Z.ck,A.cV,T.hj])
s(D.S,[D.aO,D.aP,D.w,X.fO])
s(X.fO,[X.cG,X.a9,X.bR,X.d4])
s(O.ax,[D.cD,U.bL,M.co])
s(D.em,[U.eo,U.a3])
t(U.cp,U.a3)
s(A.cV,[A.eU,A.fh])
s(A.d6,[A.d7,A.hw,A.hx,A.hy,A.hu,A.Q,A.hv,A.E,A.b1,A.hA,A.bZ,A.X,A.bt,A.bu])
t(F.h4,F.eI)
t(F.ht,F.f7)
t(F.dd,F.hO)
t(F.hM,F.hP)
s(O.d0,[O.cy,O.cJ])
s(O.cK,[O.fi,O.fj,O.ap])
s(O.ap,[O.fm,O.fn])
t(X.eQ,X.hf)
u(H.d8,H.hD)
u(H.c3,P.p)
u(H.c4,H.cv)
u(H.c5,P.p)
u(H.c6,H.cv)
u(P.dx,P.p)
u(W.di,W.es)
u(W.dk,P.p)
u(W.dl,W.G)
u(W.dm,P.p)
u(W.dn,W.G)
u(W.dq,P.p)
u(W.dr,W.G)
u(W.ds,P.p)
u(W.dt,W.G)
u(W.dy,P.aB)
u(W.dz,P.aB)
u(W.dA,P.p)
u(W.dB,W.G)
u(W.dD,P.p)
u(W.dE,W.G)
u(W.dH,P.p)
u(W.dI,W.G)
u(W.dJ,P.aB)
u(W.c7,P.p)
u(W.c8,W.G)
u(W.dK,P.p)
u(W.dL,W.G)
u(W.dP,P.aB)
u(W.dS,P.p)
u(W.dT,W.G)
u(W.c9,P.p)
u(W.ca,W.G)
u(W.dU,P.p)
u(W.dV,W.G)
u(W.dY,P.p)
u(W.dZ,W.G)
u(W.e_,P.p)
u(W.e0,W.G)
u(W.e1,P.p)
u(W.e2,W.G)
u(W.e3,P.p)
u(W.e4,W.G)
u(W.e5,P.p)
u(W.e6,W.G)
u(P.du,P.p)
u(P.dv,W.G)
u(P.dF,P.p)
u(P.dG,W.G)
u(P.dQ,P.p)
u(P.dR,W.G)
u(P.dW,P.p)
u(P.dX,W.G)
u(P.dh,P.aB)
u(P.dM,P.p)
u(P.dN,W.G)})()
var v={mangledGlobalNames:{y:"int",I:"double",af:"num",t:"String",b6:"bool",aT:"Null",bk:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.S]},{func:1,ret:-1,args:[D.S]},{func:1,ret:-1,args:[W.ar]},{func:1,ret:-1,args:[P.y,[P.i,E.ay]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.br]},{func:1,ret:P.I},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aT,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bi]},{func:1,ret:-1,args:[P.y,[P.i,D.a2]]},{func:1,ret:-1,args:[P.y,[P.i,U.a3]]},{func:1,ret:-1,args:[P.y,[P.i,M.a4]]},{func:1,ret:-1,args:[P.y,[P.i,V.aC]]},{func:1,ret:P.aT,args:[,]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.b6,args:[[P.i,D.a2]]},{func:1,ret:F.ac,args:[F.ac]},{func:1,ret:F.ac,args:[F.ac],named:{color:V.B}}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.i=W.be.prototype
C.A=J.a.prototype
C.a=J.aQ.prototype
C.d=J.cz.prototype
C.f=J.cA.prototype
C.b=J.bN.prototype
C.c=J.bh.prototype
C.B=J.aR.prototype
C.o=J.fL.prototype
C.k=J.c1.prototype
C.p=W.b3.prototype
C.q=W.c2.prototype
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

C.y=new P.fK()
C.h=new P.hG()
C.z=new P.hH()
C.e=new P.ia()
C.j=new P.bH(0)
C.n=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])})();(function staticFields(){$.al=0
$.bD=null
$.jl=null
$.k0=null
$.jV=null
$.k5=null
$.it=null
$.iy=null
$.je=null
$.bw=null
$.cd=null
$.ce=null
$.j8=!1
$.av=C.e
$.a0=[]
$.ju=null
$.jx=null
$.bV=null
$.jE=null
$.jK=null
$.jN=null
$.jM=null
$.jL=null
$.jP=null
$.jw=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ma","ka",function(){return H.jZ("_$dart_dartClosure")})
u($,"mb","jh",function(){return H.jZ("_$dart_js")})
u($,"mc","kb",function(){return H.at(H.hs({
toString:function(){return"$receiver$"}}))})
u($,"md","kc",function(){return H.at(H.hs({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"me","kd",function(){return H.at(H.hs(null))})
u($,"mf","ke",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mi","kh",function(){return H.at(H.hs(void 0))})
u($,"mj","ki",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mh","kg",function(){return H.at(H.jI(null))})
u($,"mg","kf",function(){return H.at(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ml","kk",function(){return H.at(H.jI(void 0))})
u($,"mk","kj",function(){return H.at(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"my","ji",function(){return P.l2()})
u($,"mz","ko",function(){return P.kV("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"ms","kn",function(){return Z.ae(0)})
u($,"mm","kl",function(){return Z.ae(511)})
u($,"mu","ak",function(){return Z.ae(1)})
u($,"mt","aj",function(){return Z.ae(2)})
u($,"mo","ai",function(){return Z.ae(4)})
u($,"mv","b9",function(){return Z.ae(8)})
u($,"mw","ba",function(){return Z.ae(16)})
u($,"mp","b8",function(){return Z.ae(32)})
u($,"mq","ch",function(){return Z.ae(64)})
u($,"mr","km",function(){return Z.ae(96)})
u($,"mx","bz",function(){return Z.ae(128)})
u($,"mn","aK",function(){return Z.ae(256)})
u($,"m9","k9",function(){return new V.eF(1e-9)})
u($,"m8","x",function(){return $.k9()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bT,ArrayBufferView:H.bT,Float32Array:H.bS,Float64Array:H.bS,Int16Array:H.fB,Int32Array:H.fC,Int8Array:H.fD,Uint16Array:H.fE,Uint32Array:H.fF,Uint8ClampedArray:H.cO,CanvasPixelArray:H.cO,Uint8Array:H.fG,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.ea,HTMLAnchorElement:W.ec,HTMLAreaElement:W.ed,Blob:W.cj,HTMLCanvasElement:W.be,CDATASection:W.aL,CharacterData:W.aL,Comment:W.aL,ProcessingInstruction:W.aL,Text:W.aL,CSSPerspective:W.er,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bG,MSStyleCSSProperties:W.bG,CSS2Properties:W.bG,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.am,CSSRotation:W.am,CSSScale:W.am,CSSSkew:W.am,CSSTranslation:W.am,CSSTransformComponent:W.am,CSSTransformValue:W.et,CSSUnparsedValue:W.eu,DataTransferItemList:W.ew,DOMException:W.ey,ClientRectList:W.cs,DOMRectList:W.cs,DOMRectReadOnly:W.ct,DOMStringList:W.ez,DOMTokenList:W.eA,Element:W.Z,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aM,FileList:W.eJ,FileWriter:W.eK,HTMLFormElement:W.eO,Gamepad:W.aN,History:W.eS,HTMLCollection:W.bM,HTMLFormControlsCollection:W.bM,HTMLOptionsCollection:W.bM,KeyboardEvent:W.bi,Location:W.fb,MediaList:W.fu,MIDIInputMap:W.fv,MIDIOutputMap:W.fx,MimeType:W.aS,MimeTypeArray:W.fz,PointerEvent:W.ar,MouseEvent:W.ar,DragEvent:W.ar,Document:W.J,DocumentFragment:W.J,HTMLDocument:W.J,ShadowRoot:W.J,XMLDocument:W.J,Attr:W.J,DocumentType:W.J,Node:W.J,NodeList:W.cP,RadioNodeList:W.cP,Plugin:W.aU,PluginArray:W.fM,RTCStatsReport:W.fU,HTMLSelectElement:W.fX,SourceBuffer:W.aV,SourceBufferList:W.h5,SpeechGrammar:W.aW,SpeechGrammarList:W.h6,SpeechRecognitionResult:W.aX,Storage:W.hb,CSSStyleSheet:W.aE,StyleSheet:W.aE,TextTrack:W.aZ,TextTrackCue:W.aF,VTTCue:W.aF,TextTrackCueList:W.hh,TextTrackList:W.hi,TimeRanges:W.hl,Touch:W.b_,TouchEvent:W.br,TouchList:W.ho,TrackDefaultList:W.hp,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.hF,VideoTrackList:W.hT,WheelEvent:W.b3,Window:W.c2,DOMWindow:W.c2,CSSRuleList:W.i1,ClientRect:W.dj,DOMRect:W.dj,GamepadList:W.i4,NamedNodeMap:W.dC,MozNamedAttrMap:W.dC,SpeechRecognitionResultList:W.ie,StyleSheetList:W.ig,SVGLength:P.bj,SVGLengthList:P.f6,SVGNumber:P.bn,SVGNumberList:P.fI,SVGPointList:P.fP,SVGStringList:P.he,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bs,SVGTransformList:P.hq,AudioBuffer:P.ef,AudioParamMap:P.eg,AudioTrackList:P.ei,AudioContext:P.bc,webkitAudioContext:P.bc,BaseAudioContext:P.bc,OfflineAudioContext:P.fJ,SQLResultSetRowList:P.h8})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
W.c7.$nativeSuperclassTag="EventTarget"
W.c8.$nativeSuperclassTag="EventTarget"
W.c9.$nativeSuperclassTag="EventTarget"
W.ca.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.k2,[])
else M.k2([])})})()
//# sourceMappingURL=main.dart.js.map
