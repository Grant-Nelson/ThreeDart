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
a[c]=function(){a[c]=function(){H.n7(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k0(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jK:function jK(){},
kg:function(){return new P.hJ("No element")},
dG:function(a,b,c,d,e){if(c-b<=32)H.m0(a,b,c,d,e)
else H.m_(a,b,c,d,e)},
m0:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a3()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
m_:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.ab(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.ab(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a3()
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
if(J.F(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.aa()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a3()
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
if(typeof g!=="number")return g.aa()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a3()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a3()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.aa()
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
H.dG(a2,a3,o-2,a5,a6)
H.dG(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.F(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.F(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.aa()
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
break}}}H.dG(a2,o,n,a5,a6)}else H.dG(a2,o,n,a5,a6)},
a5:function a5(a){this.a=a},
fh:function fh(){},
dp:function dp(a,b,c){var _=this
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
iw:function iw(a,b,c){this.a=a
this.b=b
this.$ti=c},
ix:function ix(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(){},
dR:function dR(){},
dQ:function dQ(){},
c6:function(a){var u,t=H.n8(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mP:function(a){return v.types[H.a9(a)]},
mU:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a2(a).$iG},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ax(a)
if(typeof u!=="string")throw H.h(H.bm(a))
return u},
cx:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cy:function(a){return H.lM(a)+H.jY(H.bF(a),0,null)},
lM:function(a){var u,t,s,r,q,p,o,n=J.a2(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.B||!!n.$icF){r=C.m(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c6(t.length>1&&C.d.bb(t,0)===36?C.d.aT(t,1):t)},
kq:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lV:function(a){var u,t,s,r=H.d([],[P.t])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bm(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.bf(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.bm(s))}return H.kq(r)},
kr:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bm(s))
if(s<0)throw H.h(H.bm(s))
if(s>65535)return H.lV(a)}return H.kq(a)},
lU:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.bf(u,10))>>>0,56320|u&1023)}throw H.h(P.b4(a,0,1114111,null,null))},
bT:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lT:function(a){var u=H.bT(a).getFullYear()+0
return u},
lR:function(a){var u=H.bT(a).getMonth()+1
return u},
lN:function(a){var u=H.bT(a).getDate()+0
return u},
lO:function(a){var u=H.bT(a).getHours()+0
return u},
lQ:function(a){var u=H.bT(a).getMinutes()+0
return u},
lS:function(a){var u=H.bT(a).getSeconds()+0
return u},
lP:function(a){var u=H.bT(a).getMilliseconds()+0
return u},
C:function(a){throw H.h(H.bm(a))},
c:function(a,b){if(a==null)J.c9(a)
throw H.h(H.bE(a,b))},
bE:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.be(!0,b,s,null)
u=H.a9(J.c9(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.dD(b,s)},
mJ:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bU(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bU(a,c,!0,b,"end",u)
return new P.be(!0,b,"end",null)},
bm:function(a){return new P.be(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.dz()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l9})
u.name=""}else u.toString=H.l9
return u},
l9:function(){return J.ax(this.dartException)},
u:function(a){throw H.h(a)},
x:function(a){throw H.h(P.ce(a))},
ba:function(a){var u,t,s,r,q,p
a=H.l7(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kA:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kl:function(a,b){return new H.hi(a,b==null?null:b.method)},
jL:function(a,b){var u=b==null,t=u?null:b.method
return new H.fH(a,t,u?null:b.receiver)},
bG:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.bf(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jL(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kl(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lc()
q=$.ld()
p=$.le()
o=$.lf()
n=$.li()
m=$.lj()
l=$.lh()
$.lg()
k=$.ll()
j=$.lk()
i=r.ad(u)
if(i!=null)return f.$1(H.jL(H.ab(u),i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.jL(H.ab(u),i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kl(H.ab(u),i))}}return f.$1(new H.id(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dI()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.be(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dI()
return a},
c4:function(a){var u
if(a==null)return new H.ev(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ev(a)},
mM:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
mT:function(a,b,c,d,e,f){H.j(a,"$ijG")
switch(H.a9(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.q("Unsupported number of arguments for wrapped closure"))},
cV:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mT)
a.$identity=u
return u},
ly:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hK().constructor.prototype):Object.create(new H.ca(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aR
if(typeof t!=="number")return t.A()
$.aR=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kd(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lu(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kd(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lu:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mP,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kb:H.jC
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
lv:function(a,b,c,d){var u=H.jC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kd:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lx(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lv(t,!r,u,b)
if(t===0){r=$.aR
if(typeof r!=="number")return r.A()
$.aR=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cb
return new Function(r+H.i(q==null?$.cb=H.f1("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aR
if(typeof r!=="number")return r.A()
$.aR=r+1
o+=r
r="return function("+o+"){return this."
q=$.cb
return new Function(r+H.i(q==null?$.cb=H.f1("self"):q)+"."+H.i(u)+"("+o+");}")()},
lw:function(a,b,c,d){var u=H.jC,t=H.kb
switch(b?-1:a){case 0:throw H.h(H.lY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lx:function(a,b){var u,t,s,r,q,p,o,n=$.cb
if(n==null)n=$.cb=H.f1("self")
u=$.ka
if(u==null)u=$.ka=H.f1("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lw(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.aR
if(typeof u!=="number")return u.A()
$.aR=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.aR
if(typeof u!=="number")return u.A()
$.aR=u+1
return new Function(n+u+"}")()},
k0:function(a,b,c,d,e,f,g){return H.ly(a,b,c,d,!!e,!!f,g)},
jC:function(a){return a.a},
kb:function(a){return a.c},
f1:function(a){var u,t,s,r=new H.ca("self","target","receiver","name"),q=J.jI(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.mE("boolean expression must not be null")
return a},
ab:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.bb(a,"String"))},
nJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.bb(a,"double"))},
l2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.bb(a,"num"))},
kU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.bb(a,"bool"))},
a9:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.bb(a,"int"))},
l5:function(a,b){throw H.h(H.bb(a,H.c6(H.ab(b).substring(2))))},
n_:function(a,b){throw H.h(H.lt(a,H.c6(H.ab(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a2(a)[b])return a
H.l5(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a2(a)[b]
else u=!0
if(u)return a
H.n_(a,b)},
mV:function(a,b){var u
if(a==null)return a
u=J.a2(a)
if(!!u.$ib)return a
if(u[b])return a
H.l5(a,b)},
kX:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a9(u)]
else return a.$S()}return},
eP:function(a,b){var u
if(typeof a=="function")return!0
u=H.kX(J.a2(a))
if(u==null)return!1
return H.kL(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.jV)return a
$.jV=!0
try{if(H.eP(a,b))return a
u=H.jn(b)
t=H.bb(a,u)
throw H.h(t)}finally{$.jV=!1}},
k1:function(a,b){if(a!=null&&!H.k_(a,b))H.u(H.bb(a,H.jn(b)))
return a},
bb:function(a,b){return new H.i3("TypeError: "+P.de(a)+": type '"+H.i(H.kP(a))+"' is not a subtype of type '"+b+"'")},
lt:function(a,b){return new H.f2("CastError: "+P.de(a)+": type '"+H.i(H.kP(a))+"' is not a subtype of type '"+b+"'")},
kP:function(a){var u,t=J.a2(a)
if(!!t.$icc){u=H.kX(t)
if(u!=null)return H.jn(u)
return"Closure"}return H.cy(a)},
mE:function(a){throw H.h(new H.iy(a))},
n7:function(a){throw H.h(new P.fa(a))},
lY:function(a){return new H.hw(a)},
kY:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bF:function(a){if(a==null)return
return a.$ti},
nK:function(a,b,c){return H.c5(a["$a"+H.i(c)],H.bF(b))},
cW:function(a,b,c,d){var u=H.c5(a["$a"+H.i(c)],H.bF(b))
return u==null?null:u[d]},
aF:function(a,b,c){var u=H.c5(a["$a"+H.i(b)],H.bF(a))
return u==null?null:u[c]},
y:function(a,b){var u=H.bF(a)
return u==null?null:u[b]},
jn:function(a){return H.bD(a,null)},
bD:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c6(a[0].name)+H.jY(a,1,b)
if(typeof a=="function")return H.c6(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a9(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.md(a,b)
if('futureOr' in a)return"FutureOr<"+H.bD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
md:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.l])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.d.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Q)p+=" extends "+H.bD(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bD(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bD(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bD(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mL(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.ab(n[g])
i=i+h+H.bD(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jY:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bx("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bD(p,c)}return"<"+u.i(0)+">"},
c5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jZ:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bF(a)
t=J.a2(a)
if(t[b]==null)return!1
return H.kS(H.c5(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.jZ(a,b,c,d))return a
throw H.h(H.bb(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c6(b.substring(2))+H.jY(c,0,null),v.mangledGlobalNames)))},
kS:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
nH:function(a,b,c){return a.apply(b,H.c5(J.a2(b)["$a"+H.i(c)],H.bF(b)))},
l_:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="L"||a===-1||a===-2||H.l_(u)}return!1},
k_:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="L"||b===-1||b===-2||H.l_(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k_(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eP(a,b)}u=J.a2(a).constructor
t=H.bF(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
I:function(a,b){if(a!=null&&!H.k_(a,b))throw H.h(H.bb(a,H.jn(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aE("type" in a?a.type:l,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"cl" in t.prototype))return!1
r=t.prototype["$a"+"cl"]
q=H.c5(r,u?a.slice(1):l)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.kL(a,b,c,d)
if('func' in a)return c.name==="jG"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kS(H.c5(m,u),b,p,d)},
kL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.mY(h,b,g,d)},
mY:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aE(c[s],d,a[s],b))return!1}return!0},
nI:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mW:function(a){var u,t,s,r,q=H.ab($.kZ.$1(a)),p=$.jg[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jl[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.ab($.kR.$2(a,q))
if(q!=null){p=$.jg[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jl[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jm(u)
$.jg[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jl[q]=u
return u}if(s==="-"){r=H.jm(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.l3(a,u)
if(s==="*")throw H.h(P.kB(q))
if(v.leafTags[q]===true){r=H.jm(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.l3(a,u)},
l3:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k6(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jm:function(a){return J.k6(a,!1,null,!!a.$iG)},
mX:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jm(u)
else return J.k6(u,c,null,null)},
mR:function(){if(!0===$.k4)return
$.k4=!0
H.mS()},
mS:function(){var u,t,s,r,q,p,o,n
$.jg=Object.create(null)
$.jl=Object.create(null)
H.mQ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l6.$1(q)
if(p!=null){o=H.mX(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mQ:function(){var u,t,s,r,q,p,o=C.t()
o=H.c2(C.u,H.c2(C.v,H.c2(C.n,H.c2(C.n,H.c2(C.w,H.c2(C.x,H.c2(C.y(C.m),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kZ=new H.ji(r)
$.kR=new H.jj(q)
$.l6=new H.jk(p)},
c2:function(a,b){return a(b)||b},
lE:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(new P.ft("Illegal RegExp pattern ("+String(p)+")",a))},
n4:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mK:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l7:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l8:function(a,b,c){var u=H.n5(a,b,c)
return u},
n5:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l7(b),'g'),H.mK(c))},
i1:function i1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hi:function hi(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a){this.a=a},
jz:function jz(a){this.a=a},
ev:function ev(a){this.a=a
this.b=null},
cc:function cc(){},
hS:function hS(){},
hK:function hK(){},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i3:function i3(a){this.a=a},
f2:function f2(a){this.a=a},
hw:function hw(a){this.a=a},
iy:function iy(a){this.a=a},
a_:function a_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fL:function fL(a,b){this.a=a
this.b=b
this.c=null},
dn:function dn(a,b){this.a=a
this.$ti=b},
fM:function fM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
fG:function fG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cS:function(a){return a},
bC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bE(b,a))},
mc:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.mJ(a,b,c))
return b},
cu:function cu(){},
dw:function dw(){},
ct:function ct(){},
dx:function dx(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
dy:function dy(){},
hh:function hh(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
mL:function(a){return J.kh(a?Object.keys(a):[],null)},
n8:function(a){return v.mangledGlobalNames[a]},
mZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jh:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.k4==null){H.mR()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.kB("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.k7()]
if(r!=null)return r
r=H.mW(a)
if(r!=null)return r
if(typeof a=="function")return C.C
u=Object.getPrototypeOf(a)
if(u==null)return C.p
if(u===Object.prototype)return C.p
if(typeof s=="function"){Object.defineProperty(s,$.k7(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
lD:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jB(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.b4(a,0,4294967295,"length",null))
return J.kh(new Array(a),b)},
kh:function(a,b){return J.jI(H.d(a,[b]))},
jI:function(a){a.fixed$length=Array
return a},
a2:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.di.prototype
return J.fF.prototype}if(typeof a=="string")return J.bP.prototype
if(a==null)return J.dj.prototype
if(typeof a=="boolean")return J.fE.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.Q)return a
return J.jh(a)},
k2:function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.Q)return a
return J.jh(a)},
k3:function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.Q)return a
return J.jh(a)},
mN:function(a){if(typeof a=="number")return J.cn.prototype
if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.cF.prototype
return a},
mO:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.Q)return a
return J.jh(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a2(a).q(a,b)},
eQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.k2(a).j(a,b)},
lq:function(a,b,c,d){return J.mO(a).hy(a,b,c,d)},
jA:function(a,b){return J.mN(a).bj(a,b)},
k9:function(a,b){return J.k3(a).G(a,b)},
lr:function(a,b){return J.k3(a).E(a,b)},
bK:function(a){return J.a2(a).gH(a)},
c8:function(a){return J.k3(a).gS(a)},
c9:function(a){return J.k2(a).gk(a)},
ax:function(a){return J.a2(a).i(a)},
a:function a(){},
fE:function fE(){},
dj:function dj(){},
dk:function dk(){},
hm:function hm(){},
cF:function cF(){},
bv:function bv(){},
aZ:function aZ(a){this.$ti=a},
jJ:function jJ(a){this.$ti=a},
am:function am(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cn:function cn(){},
di:function di(){},
fF:function fF(){},
bP:function bP(){}},P={
m4:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mF()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cV(new P.iA(s),1)).observe(u,{childList:true})
return new P.iz(s,u,t)}else if(self.setImmediate!=null)return P.mG()
return P.mH()},
m5:function(a){self.scheduleImmediate(H.cV(new P.iB(H.n(a,{func:1,ret:-1})),0))},
m6:function(a){self.setImmediate(H.cV(new P.iC(H.n(a,{func:1,ret:-1})),0))},
m7:function(a){P.jQ(C.k,H.n(a,{func:1,ret:-1}))},
jQ:function(a,b){var u=C.e.ab(a.a,1000)
return P.mb(u<0?0:u,b)},
mb:function(a,b){var u=new P.j3()
u.eq(a,b)
return u},
m8:function(a,b){var u,t,s
b.a=1
try{a.e2(new P.iK(b),new P.iL(b),null)}catch(s){u=H.bG(s)
t=H.c4(s)
P.n0(new P.iM(b,u,t))}},
kI:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaD")
if(u>=4){t=b.bP()
b.a=a.a
b.c=a.c
P.cH(b,t)}else{t=H.j(b.c,"$ibd")
b.a=2
b.c=a
a.d8(t)}},
cH:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$ian")
P.jb(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cH(h.a,b)}g=h.a
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
if(m){H.j(q,"$ian")
P.jb(i,i,g.b,q.a,q.b)
return}l=$.a1
if(l!==n)$.a1=n
else l=i
g=b.c
if((g&15)===8)new P.iQ(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.iP(u,b,q).$0()}else if((g&2)!==0)new P.iO(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.a2(g).$icl){if(g.a>=4){k=H.j(o.c,"$ibd")
o.c=null
b=o.be(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.kI(g,o)
return}}j=b.b
k=H.j(j.c,"$ibd")
j.c=null
b=j.be(k)
g=u.a
p=u.b
if(!g){H.I(p,H.y(j,0))
j.a=4
j.c=p}else{H.j(p,"$ian")
j.a=8
j.c=p}h.a=j
g=j}},
mA:function(a,b){if(H.eP(a,{func:1,args:[P.Q,P.at]}))return H.n(a,{func:1,ret:null,args:[P.Q,P.at]})
if(H.eP(a,{func:1,args:[P.Q]}))return H.n(a,{func:1,ret:null,args:[P.Q]})
throw H.h(P.jB(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mz:function(){var u,t
for(;u=$.c1,u!=null;){$.cU=null
t=u.b
$.c1=t
if(t==null)$.cT=null
u.a.$0()}},
mD:function(){$.jW=!0
try{P.mz()}finally{$.cU=null
$.jW=!1
if($.c1!=null)$.k8().$1(P.kT())}},
kO:function(a){var u=new P.dZ(a)
if($.c1==null){$.c1=$.cT=u
if(!$.jW)$.k8().$1(P.kT())}else $.cT=$.cT.b=u},
mC:function(a){var u,t,s=$.c1
if(s==null){P.kO(a)
$.cU=$.cT
return}u=new P.dZ(a)
t=$.cU
if(t==null){u.b=s
$.c1=$.cU=u}else{u.b=t.b
$.cU=t.b=u
if(u.b==null)$.cT=u}},
n0:function(a){var u=null,t=$.a1
if(C.f===t){P.jd(u,u,C.f,a)
return}P.jd(u,u,t,H.n(t.c_(a),{func:1,ret:-1}))},
kz:function(a,b){var u=$.a1
if(u===C.f)return P.jQ(a,H.n(b,{func:1,ret:-1}))
return P.jQ(a,H.n(u.c_(b),{func:1,ret:-1}))},
jb:function(a,b,c,d,e){var u={}
u.a=d
P.mC(new P.jc(u,e))},
kM:function(a,b,c,d,e){var u,t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
kN:function(a,b,c,d,e,f,g){var u,t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
mB:function(a,b,c,d,e,f,g,h,i){var u,t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
jd:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c_(d):c.hH(d,-1)
P.kO(d)},
iA:function iA(a){this.a=a},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
j3:function j3(){},
j4:function j4(a,b){this.a=a
this.b=b},
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
iJ:function iJ(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iR:function iR(a){this.a=a},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a){this.a=a
this.b=null},
hN:function hN(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
cB:function cB(){},
hO:function hO(){},
an:function an(a,b){this.a=a
this.b=b},
j6:function j6(){},
jc:function jc(a,b){this.a=a
this.b=b},
iX:function iX(){},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a,b){this.a=a
this.b=b},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
lF:function(a,b){return new H.a_([a,b])},
lG:function(a){return H.mM(a,new H.a_([null,null]))},
lH:function(a){return new P.iV([a])},
jU:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ma:function(a,b,c){var u=new P.ed(a,b,[c])
u.c=a.e
return u},
lC:function(a,b,c){var u,t
if(P.jX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.l])
C.a.h($.au,a)
try{P.me(a,u)}finally{if(0>=$.au.length)return H.c($.au,-1)
$.au.pop()}t=P.kx(b,H.mV(u,"$if"),", ")+c
return t.charCodeAt(0)==0?t:t},
jH:function(a,b,c){var u,t
if(P.jX(a))return b+"..."+c
u=new P.bx(b)
C.a.h($.au,a)
try{t=u
t.a=P.kx(t.a,a,", ")}finally{if(0>=$.au.length)return H.c($.au,-1)
$.au.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jX:function(a){var u,t
for(u=$.au.length,t=0;t<u;++t)if(a===$.au[t])return!0
return!1},
me:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.B())return
u=H.i(n.gI(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.B()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.B()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.B();r=q,q=p){p=n.gI(n);++l
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
kj:function(a){var u,t={}
if(P.jX(a))return"{...}"
u=new P.bx("")
try{C.a.h($.au,a)
u.a+="{"
t.a=!0
J.lr(a,new P.fR(t,u))
u.a+="}"}finally{if(0>=$.au.length)return H.c($.au,-1)
$.au.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iV:function iV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cI:function cI(a){this.a=a
this.c=this.b=null},
ed:function ed(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fN:function fN(){},
w:function w(){},
fQ:function fQ(){},
fR:function fR(a,b){this.a=a
this.b=b},
ah:function ah(){},
j0:function j0(){},
ee:function ee(){},
cd:function cd(){},
d7:function d7(){},
fi:function fi(){},
ih:function ih(){},
ii:function ii(){},
j5:function j5(a){this.b=0
this.c=a},
lB:function(a){if(a instanceof H.cc)return a.i(0)
return"Instance of '"+H.i(H.cy(a))+"'"},
lI:function(a,b,c){var u,t=J.lD(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.l(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
ki:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.c8(a);u.B();)C.a.h(s,H.I(u.gI(u),c))
if(b)return s
return H.m(J.jI(s),"$ib",t,"$ab")},
jO:function(a){var u,t
if(a.constructor===Array){H.m(a,"$iaZ",[P.t],"$aaZ")
u=a.length
t=P.kt(0,null,u)
return H.kr(t<u?C.a.eb(a,0,t):a)}return P.m1(a,0,null)},
m1:function(a,b,c){var u,t,s=J.c8(a)
for(u=0;u<b;++u)if(!s.B())throw H.h(P.b4(b,0,u,null,null))
t=[]
for(;s.B();)t.push(s.gI(s))
return H.kr(t)},
lW:function(a){return new H.fG(a,H.lE(a,!1,!0,!1,!1,!1))},
kx:function(a,b,c){var u=J.c8(b)
if(!u.B())return a
if(c.length===0){do a+=H.i(u.gI(u))
while(u.B())}else{a+=H.i(u.gI(u))
for(;u.B();)a=a+c+H.i(u.gI(u))}return a},
kK:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.i){u=$.lp().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.hL(H.I(b,H.aF(c,"cd",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lU(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lz:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d8:function(a){if(a>=10)return""+a
return"0"+a},
de:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ax(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lB(a)},
jB:function(a,b,c){return new P.be(!0,a,b,c)},
dD:function(a,b){return new P.bU(null,null,!0,a,b,"Value not in range")},
b4:function(a,b,c,d,e){return new P.bU(b,c,!0,a,d,"Invalid value")},
kt:function(a,b,c){if(0>a||a>c)throw H.h(P.b4(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.b4(b,a,c,"end",null))
return b}return c},
ks:function(a,b){if(typeof a!=="number")return a.aa()
if(a<0)throw H.h(P.b4(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.a9(e==null?J.c9(b):e)
return new P.fx(u,!0,a,c,"Index out of range")},
aw:function(a){return new P.ie(a)},
kB:function(a){return new P.ic(a)},
ce:function(a){return new P.f5(a)},
q:function(a){return new P.e6(a)},
l4:function(a){H.mZ(a)},
a4:function a4(){},
aU:function aU(a,b){this.a=a
this.b=b},
z:function z(){},
ch:function ch(a){this.a=a},
ff:function ff(){},
fg:function fg(){},
br:function br(){},
eV:function eV(){},
dz:function dz(){},
be:function be(a,b,c,d){var _=this
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
fx:function fx(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ie:function ie(a){this.a=a},
ic:function ic(a){this.a=a},
hJ:function hJ(a){this.a=a},
f5:function f5(a){this.a=a},
hl:function hl(){},
dI:function dI(){},
fa:function fa(a){this.a=a},
e6:function e6(a){this.a=a},
ft:function ft(a,b){this.a=a
this.b=b},
t:function t(){},
f:function f(){},
aY:function aY(){},
b:function b(){},
E:function E(){},
L:function L(){},
aa:function aa(){},
Q:function Q(){},
at:function at(){},
l:function l(){},
bx:function bx(a){this.a=a},
bn:function(a){var u,t,s,r,q
if(a==null)return
u=P.lF(P.l,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r){q=H.ab(t[r])
u.l(0,q,a[q])}return u},
mI:function(a){var u={}
a.E(0,new P.je(u))
return u},
je:function je(a){this.a=a},
fp:function fp(a,b){this.a=a
this.b=b},
fq:function fq(){},
fr:function fr(){},
iU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iW:function iW(){},
as:function as(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bf:function bf(){},
fJ:function fJ(){},
bi:function bi(){},
hj:function hj(){},
hp:function hp(){},
hR:function hR(){},
o:function o(){},
bj:function bj(){},
i0:function i0(){},
eb:function eb(){},
ec:function ec(){},
em:function em(){},
en:function en(){},
ex:function ex(){},
ey:function ey(){},
eD:function eD(){},
eE:function eE(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(a){this.a=a},
f_:function f_(){},
bL:function bL(){},
hk:function hk(){},
e_:function e_(){},
d_:function d_(){},
dC:function dC(){},
bV:function bV(){},
dF:function dF(){},
dP:function dP(){},
hI:function hI(){},
et:function et(){},
eu:function eu(){}},W={
ls:function(){var u=document.createElement("a")
return u},
kc:function(){var u=document.createElement("canvas")
return u},
ke:function(a){H.j(a,"$ie")
return"wheel"},
iT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kJ:function(a,b,c,d){var u=W.iT(W.iT(W.iT(W.iT(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ae:function(a,b,c,d,e){var u=W.kQ(new W.iI(c),W.k)
if(u!=null&&!0)J.lq(a,b,u,!1)
return new W.iH(a,b,u,!1,[e])},
kQ:function(a,b){var u=$.a1
if(u===C.f)return a
return u.hI(a,b)},
p:function p(){},
eR:function eR(){},
eT:function eT(){},
eU:function eU(){},
cZ:function cZ(){},
bM:function bM(){},
bq:function bq(){},
cf:function cf(){},
f6:function f6(){},
S:function S(){},
cg:function cg(){},
f7:function f7(){},
aS:function aS(){},
aT:function aT(){},
f8:function f8(){},
f9:function f9(){},
fb:function fb(){},
da:function da(){},
fc:function fc(){},
db:function db(){},
dc:function dc(){},
fd:function fd(){},
fe:function fe(){},
iE:function iE(a,b){this.a=a
this.b=b},
a6:function a6(){},
k:function k(){},
e:function e(){},
aV:function aV(){},
fn:function fn(){},
fo:function fo(){},
fs:function fs(){},
aW:function aW(){},
fw:function fw(){},
bO:function bO(){},
b_:function b_(){},
fO:function fO(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(a){this.a=a},
h8:function h8(){},
h9:function h9(a){this.a=a},
b2:function b2(){},
ha:function ha(){},
ad:function ad(){},
iD:function iD(a){this.a=a},
H:function H(){},
cv:function cv(){},
b3:function b3(){},
hn:function hn(){},
hu:function hu(){},
hv:function hv(a){this.a=a},
hx:function hx(){},
b5:function b5(){},
hG:function hG(){},
b6:function b6(){},
hH:function hH(){},
b7:function b7(){},
hL:function hL(){},
hM:function hM(a){this.a=a},
aL:function aL(){},
b8:function b8(){},
aM:function aM(){},
hT:function hT(){},
hU:function hU(){},
hW:function hW(){},
b9:function b9(){},
aN:function aN(){},
hZ:function hZ(){},
i_:function i_(){},
bz:function bz(){},
ig:function ig(){},
iv:function iv(){},
bc:function bc(){},
cG:function cG(){},
iF:function iF(){},
e1:function e1(){},
iS:function iS(){},
ej:function ej(){},
j1:function j1(){},
j2:function j2(){},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iH:function iH(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iI:function iI(a){this.a=a},
A:function A(){},
df:function df(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ek:function ek(){},
el:function el(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
cN:function cN(){},
cO:function cO(){},
er:function er(){},
es:function es(){},
ew:function ew(){},
ez:function ez(){},
eA:function eA(){},
cP:function cP(){},
cQ:function cQ(){},
eB:function eB(){},
eC:function eC(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){}},O={
jD:function(a){var u=new O.Z([a])
u.b9(a)
return u},
Z:function Z(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
co:function co(){this.b=this.a=null},
kf:function(){var u=new O.dh()
u.b=V.kG()
u.c=new V.M(0.2,0.3,0.4,1)
u.d=new V.M(0.1,0.2,0.3,1)
u.e=V.d4(0.7)
u.f=V.d4(0.3)
u.r=V.d4(0.5)
u.x=V.d4(0.5)
u.y=new V.M(1,1,1,1)
u.z=V.d4(0.8)
u.r1=u.k4=u.k3=u.k2=u.k1=u.id=u.go=u.fy=u.fx=u.fr=u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=!1
u.r2=1
return u},
bQ:function(){var u,t,s=new O.dt()
s.sez(O.jD(V.ai))
s.e.aR(s.gf5(),s.gf7())
u=new O.b0(s,"emission")
u.c=new A.af(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.f=u
u=new O.b0(s,"ambient")
u.c=new A.af(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.r=u
u=new O.b0(s,"diffuse")
u.c=new A.af(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.x=u
u=new O.b0(s,"invDiffuse")
u.c=new A.af(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.y=u
u=new O.fZ(s,"specular")
u.c=new A.af(!1,!1,!1)
u.f=new V.a3(0,0,0)
u.ch=100
s.z=u
u=new O.fV(s,"bump")
u.c=new A.af(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.b0(s,"reflect")
u.c=new A.af(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.cx=u
u=new O.fY(s,"refract")
u.c=new A.af(!1,!1,!1)
u.f=new V.a3(0,0,0)
u.ch=1
s.cy=u
u=new O.fU(s,"alpha")
u.c=new A.af(!1,!1,!1)
u.f=1
s.db=u
u=new D.dm()
u.b9(D.ac)
u.sek(H.d([],[D.d9]))
u.sfW(H.d([],[D.dB]))
u.sel(H.d([],[D.dH]))
u.y=u.x=null
u.cw(u.gf3(),u.gfG(),u.gfK())
s.dx=u
t=new O.fX()
t.b=new V.M(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.T():t
u.h(0,s.gh5())
u=s.dx
t=u.y
u=t==null?u.y=D.T():t
u.h(0,s.geo())
s.fr=null
return s},
dh:function dh(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fy:function fy(a,b){this.a=a
this.b=b},
fz:function fz(a){this.a=a},
fB:function fB(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
dt:function dt(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(){},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(){},
fU:function fU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
du:function du(){},
fV:function fV(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b0:function b0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fX:function fX(){var _=this
_.e=_.d=_.c=_.b=null},
fY:function fY(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fZ:function fZ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
by:function by(){}},E={
ay:function(){var u=new E.ao()
u.a=""
u.b=!0
u.sej(0,O.jD(E.ao))
u.y.aR(u.gi2(),u.gi5())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa1(0,null)
u.sa6(null)
u.sT(null)
return u},
lX:function(a,b){var u=new E.hq(a)
u.eg(a,b)
return u},
jP:function(a){var u=document.getElementById(a)
if(u==null)throw H.h(P.q("Failed to find an element with the identifier, "+a+"."))
return E.m3(u,!0,!0,!0,!1)},
m3:function(a,b,c,d,e){var u,t,s=J.a2(a)
if(!!s.$ibM)return E.ky(a,!0,!0,!0,!1)
u=W.kc()
t=u.style
t.width="100%"
t.height="100%"
s.gdq(a).h(0,u)
return E.ky(u,!0,!0,!0,!1)},
ky:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dL(),j=H.j(C.j.e7(a,"webgl2",P.lG(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibV")
if(j==null)H.u(P.q("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lX(j,a)
H.a9(j.getParameter(3379))
H.a9(j.getParameter(34076))
u=new X.dS(a)
t=new X.fI()
t.c=new X.av(!1,!1,!1)
t.sfZ(P.lH(P.t))
u.b=t
t=new X.hb(u)
t.f=0
t.r=V.aH()
t.x=V.aH()
t.ch=t.Q=1
u.c=t
t=new X.fP(u)
t.r=0
t.x=V.aH()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hY(u)
t.f=V.aH()
t.r=V.aH()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seL(H.d([],[[P.cB,P.Q]]))
t=u.z
s=document
r=W.ad
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ae(s,"contextmenu",H.n(u.gff(),q),!1,r))
t=u.z
p=W.k
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ae(a,"focus",H.n(u.gfl(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ae(a,"blur",H.n(u.gf9(),o),!1,p))
t=u.z
n=W.b_
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ae(s,"keyup",H.n(u.gfp(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ae(s,"keydown",H.n(u.gfn(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ae(a,"mousedown",H.n(u.gfu(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ae(a,"mouseup",H.n(u.gfA(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ae(a,l,H.n(u.gfw(),q),!1,r))
n=u.z
W.ke(a)
m=W.bc;(n&&C.a).h(n,W.ae(a,H.ab(W.ke(a)),H.n(u.gfC(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ae(s,l,H.n(u.gfh(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ae(s,"mouseup",H.n(u.gfj(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ae(s,"pointerlockchange",H.n(u.gfE(),o),!1,p))
p=u.z
o=W.aN
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ae(a,"touchstart",H.n(u.gfU(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ae(a,"touchend",H.n(u.gfQ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ae(a,"touchmove",H.n(u.gfS(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
Date.now()
k.cy=0
k.dc()
return k},
f0:function f0(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
dL:function dL(){var _=this
_.cy=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
hV:function hV(a){this.a=a}},Z={
jS:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cS(c)),35044)
a.bindBuffer(b,null)
return new Z.dX(b,u)},
aC:function(a){return new Z.bl(a)},
dX:function dX(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dY:function dY(a){this.a=a},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
d1:function d1(){this.a=null},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a){this.a=a}},D={
T:function(){var u=new D.cj()
u.san(null)
u.sbd(null)
u.c=null
u.d=0
return u},
f3:function f3(){},
cj:function cj(){var _=this
_.d=_.c=_.b=_.a=null},
fk:function fk(a){this.a=a},
fl:function fl(a){this.a=a},
v:function v(){this.b=null},
bt:function bt(a){this.b=null
this.$ti=a},
bu:function bu(a){this.b=null
this.$ti=a},
J:function J(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
d9:function d9(){},
ac:function ac(){},
dm:function dm(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dB:function dB(){},
dH:function dH(){}},X={d2:function d2(a,b){this.a=a
this.b=b},dl:function dl(a,b){this.a=a
this.b=b},fI:function fI(){var _=this
_.d=_.c=_.b=_.a=null},dq:function dq(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fP:function fP(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},av:function av(a,b,c){this.a=a
this.b=b
this.c=c},az:function az(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hb:function hb(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cr:function cr(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ho:function ho(){},dN:function dN(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hY:function hY(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dS:function dS(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fv:function(a,b){var u=new X.fu(),t=new V.M(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kv
if(t==null){t=V.ku(0,0,1,1)
$.kv=t}u.r=t
return u},
bS:function(){var u,t=new X.dA()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.saD(null)
t.sT(null)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.K().a)){t.c=1.0471975511965976
u=new D.J("fov",u,1.0471975511965976,[P.z])
u.b=!0
t.au(u)}u=t.d
if(!(Math.abs(u-0.1)<$.K().a)){t.d=0.1
u=new D.J("near",u,0.1,[P.z])
u.b=!0
t.au(u)}u=t.e
if(!(Math.abs(u-2000)<$.K().a)){t.e=2000
u=new D.J("far",u,2000,[P.z])
u.b=!0
t.au(u)}return t},
d3:function d3(){},
fu:function fu(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){}},V={
d4:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.M(a,a,a,1)},
n9:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.e8(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.d.ae("null",c)
return C.d.ae(C.c.iv(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
c3:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.l])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.x)(a),++s){r=V.N(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.l(p,q,C.d.ae(p[q],t))}return p},
cq:function(){var u=$.kk
return u==null?$.kk=V.b1(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b1:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aj:function(a,b,c){return V.b1(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
bR:function(a,b,c,d){return V.b1(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cp:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b1(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
jN:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b1(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
aH:function(){var u=$.ko
return u==null?$.ko=new V.U(0,0):u},
kp:function(){var u=$.cw
return u==null?$.cw=new V.a0(0,0,0):u},
ku:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dE(a,b,c,d)},
c0:function(){var u=$.kF
return u==null?$.kF=new V.D(0,0,0):u},
kG:function(){var u=$.kD
return u==null?$.kD=new V.D(0,0,-1):u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a){this.a=a},
dv:function dv(a,b,c,d,e,f,g,h,i){var _=this
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
U:function U(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ak:function(a){var u=new V.hy()
u.eh(a)
return u},
eS:function eS(){},
bg:function bg(){},
dr:function dr(){},
bh:function bh(){this.a=null},
hy:function hy(){this.a=null},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dM:function dM(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a){this.b=a
this.c=null},
hX:function hX(){this.c=this.b=this.a=null},
cD:function cD(a){this.b=a
this.a=this.c=null},
lZ:function(a){var u=new V.hC()
u.ei(a,!0)
return u},
hC:function hC(){this.b=this.a=null},
hE:function hE(a){this.a=a},
hD:function hD(a){this.a=a}},U={
jE:function(){var u=new U.f4()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
P:function(a){var u=new U.d6()
u.sN(0,a)
return u},
aX:function(){var u=new U.cm()
u.b9(U.a7)
u.aR(u.gem(),u.gfI())
u.e=null
u.f=V.cq()
u.r=0
return u},
f4:function f4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){this.b=this.a=null},
cm:function cm(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a7:function a7(){},
dT:function dT(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jF:function(a){var u=new M.d5()
u.b9(M.ap)
u.e=!0
u.f=!1
u.r=null
u.aR(u.gfM(),u.gfO())
u.bX(0,a)
return u},
ci:function(){var u,t=new M.dd()
t.a=!0
t.seD(0,O.jD(E.ao))
t.e.aR(t.gfb(),t.gfd())
t.y=t.x=t.r=t.f=null
u=X.fv(!0,null)
t.saz(null)
t.sbq(0,u)
t.sa6(null)
return t},
d5:function d5(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dd:function dd(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ap:function ap(){},
n1:function(a){var u,t,s,r,q,p,o,n,m,l,k={},j=E.jP(a),i=O.bQ(),h=i.f
h.sW(0,new V.a3(0.4,0.6,0.8))
u=O.bQ()
h=u.f
h.sW(0,new V.a3(0.8,0.6,0.4))
u.db.sa0(0,0.3)
t=O.bQ()
h=t.f
h.sW(0,new V.a3(0.4,0.6,0.8))
t.db.sa0(0,0.3)
s=U.P(null)
r=U.P(null)
q=E.ay()
q.sa6(i)
h=F.aJ()
h.aC(F.jo(!0))
h.aC(F.kW(!0,36))
q.sa1(0,h)
p=E.ay()
p.sa6(u)
p.sa1(0,F.k5())
h=U.aX()
h.h(0,U.P(V.bR(1.3,1.3,1.3,1)))
h.h(0,U.P(V.cp(-1.5707963267948966)))
h.h(0,s)
p.sT(h)
o=E.ay()
o.sa1(0,F.k5())
h=U.aX()
h.h(0,U.P(V.aj(0,0,0.1)))
o.sT(h)
n=E.ay()
n.sa1(0,F.k5())
h=U.aX()
h.h(0,r)
n.sT(h)
m=M.ci()
m.sbq(0,X.fv(!1,null))
h=X.bS()
h.saD(U.P(V.aj(-0.5,0,0)))
h.sT(U.P(V.aj(0,0,5)))
m.saz(h)
m.e.h(0,p)
m.e.h(0,q)
l=M.ci()
h=X.bS()
h.saD(U.P(V.aj(0.5,0,0)))
h.sT(U.P(V.aj(0,0,5)))
l.saz(h)
l.sa6(t)
l.e.h(0,n)
l.e.h(0,o)
k.a=0.5
k.b=!1
j.r.c.gb2().h(0,new M.jp(k))
j.r.c.gaE().h(0,new M.jq(k))
j.r.c.gb5().h(0,new M.jr(k,s,o,n,r))
j.sbt(M.jF(H.d([l,m],[M.ap])))},
n2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=E.jP(a),f=O.kf()
f.scA(!0)
f.scz(!0)
f.sdt(new V.M(0.2,0.3,0.4,0.2))
f.sdl(new V.M(0.1,0.2,0.3,0.2))
u=O.bQ()
t=u.f
t.sW(0,new V.a3(0.8,0.6,0.4))
u.db.sa0(0,0.3)
s=O.bQ()
t=s.f
t.sW(0,new V.a3(0.4,0.6,0.8))
r=U.P(i)
q=U.P(i)
p=U.aX()
p.h(0,U.P(V.cp(0.4)))
p.h(0,U.P(V.jN(0.4)))
o=E.ay()
o.sa6(f)
t=F.aJ()
t.aC(F.kV(1,i,1))
t.aC(F.l0(2))
o.sa1(0,t)
o.sT(p)
n=E.ay()
n.sa6(u)
n.sa1(0,F.jo(!1))
t=U.aX()
t.h(0,U.P(V.bR(1.3,1.3,1.3,1)))
t.h(0,U.P(V.cp(-1.5707963267948966)))
t.h(0,r)
t.h(0,p)
n.sT(t)
m=E.ay()
m.sa1(0,F.jo(!0))
l=E.ay()
l.sa1(0,F.kW(!0,36))
t=U.aX()
t.h(0,q)
l.sT(t)
k=M.ci()
k.sbq(0,X.fv(!1,i))
t=X.bS()
t.saD(U.P(V.aj(-0.5,0,0)))
t.sT(U.P(V.aj(0,0,5)))
k.saz(t)
k.e.h(0,n)
k.e.h(0,o)
j=M.ci()
t=X.bS()
t.saD(U.P(V.aj(0.5,0,0)))
t.sT(U.P(V.aj(0,0,5)))
j.saz(t)
j.sa6(s)
j.e.h(0,l)
j.e.h(0,m)
h.a=0.5
h.b=!1
g.r.c.gb2().h(0,new M.js(h))
g.r.c.gaE().h(0,new M.jt(h))
g.r.c.gb5().h(0,new M.ju(h,r,m,l,q))
g.sbt(M.jF(H.d([j,k],[M.ap])))},
n3:function(b8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3="modifiers",b4={},b5=E.jP(b8),b6=O.bQ(),b7=b6.f
b7.sW(0,new V.a3(0.4,0.6,0.8))
u=O.bQ()
b7=u.f
b7.sW(0,new V.a3(0.8,0.6,0.4))
u.db.sa0(0,0.3)
t=O.kf()
t.scA(!0)
t.scz(!0)
t.sdt(new V.M(0.2,0.3,0.4,0.2))
t.sdl(new V.M(0.1,0.2,0.3,0.2))
s=U.P(b2)
r=U.P(b2)
q=U.aX()
q.h(0,U.P(V.cp(0.4)))
q.h(0,U.P(V.jN(0.4)))
p=U.aX()
o=F.aJ()
n=o.a.V(1,-1,1)
m=o.a.V(1,1,1)
l=o.a.V(1,1,-1)
k=o.a.V(1,-1,-1)
j=o.a.V(-1,-1,1)
i=o.a.V(-1,1,1)
h=o.a.V(-1,1,-1)
g=o.a.V(-1,-1,-1)
f=o.a.V(0.5,-0.5,0.5)
e=o.a.V(0.5,0.5,0.5)
d=o.a.V(0.5,0.5,-0.5)
c=o.a.V(0.5,-0.5,-0.5)
b=o.a.V(-0.5,-0.5,0.5)
a=o.a.V(-0.5,0.5,0.5)
a0=o.a.V(-0.5,0.5,-0.5)
a1=o.a.V(-0.5,-0.5,-0.5)
o.c.hB(H.d([n,m,m,l,l,k,k,n,j,i,i,h,h,g,g,j,f,e,e,d,d,c,c,f,b,a,a,a0,a0,a1,a1,b,n,j,m,i,l,h,k,g,f,b,e,a,d,a0,c,a1,n,f,m,e,l,d,k,c,j,b,i,a,h,a0,g,a1],[F.R]))
a2=E.ay()
a2.sa6(b6)
a2.sa1(0,o)
a2.sT(q)
a3=E.ay()
a3.sa6(u)
a3.sa1(0,F.jo(!1))
b7=U.aX()
b7.h(0,U.P(V.bR(1.1,1.1,1.1,1)))
b7.h(0,U.P(V.cp(-1.5707963267948966)))
b7.h(0,s)
b7.h(0,q)
a3.sT(b7)
a4=E.ay()
a4.sa1(0,F.kV(1,b2,1))
a4.sT(p)
a5=E.ay()
a5.sa1(0,F.l0(2))
b7=U.aX()
b7.h(0,r)
b7.h(0,p)
a5.sT(b7)
a6=M.ci()
a6.sbq(0,X.fv(!1,b2))
b7=X.bS()
b7.saD(U.P(V.aj(-0.5,0,0)))
b7.sT(U.P(V.aj(0,0,5)))
a6.saz(b7)
a6.e.h(0,a2)
a6.e.h(0,a3)
a7=M.ci()
b7=X.bS()
b7.saD(U.P(V.aj(0.5,0,0)))
b7.sT(U.P(V.aj(0,0,5)))
a7.saz(b7)
a7.sa6(t)
a7.e.h(0,a5)
a7.e.h(0,a4)
b4.a=0.5
b4.b=!1
b5.r.c.gb2().h(0,new M.jv(b4))
b5.r.c.gaE().h(0,new M.jw(b4))
b5.r.c.gb5().h(0,new M.jx(b4,s,a4,a5,r))
b4=b5.r
b7=new U.dU()
a8=U.jE()
a8.scu(0,!0)
a8.scf(6.283185307179586)
a8.sci(0)
a8.sY(0,0)
a8.scg(100)
a8.sR(0)
a8.sc5(0.5)
b7.b=a8
a9=b7.gaJ()
a8.gt().h(0,a9)
a8=U.jE()
a8.scu(0,!0)
a8.scf(6.283185307179586)
a8.sci(0)
a8.sY(0,0)
a8.scg(100)
a8.sR(0)
a8.sc5(0.5)
b7.c=a8
a8.gt().h(0,a9)
b7.d=null
b7.r=b7.f=b7.e=!1
b7.y=b7.x=2.5
b7.Q=4
b7.ch=b7.cx=!1
b7.db=b7.cy=0
b7.dx=null
b7.dy=0
b7.fx=b7.fr=null
b0=new X.av(!1,!1,!1)
b1=b7.d
b7.d=b0
a8=[X.av]
a9=new D.J(b3,b1,b0,a8)
a9.b=!0
b7.L(a9)
a9=b7.f
if(a9!==!1){b7.f=!1
a9=new D.J("invertX",a9,!1,[P.a4])
a9.b=!0
b7.L(a9)}a9=b7.r
if(a9!==!0){b7.r=!0
a9=new D.J("invertY",a9,!0,[P.a4])
a9.b=!0
b7.L(a9)}b7.aZ(b4)
p.h(0,b7)
b4=b5.r
b7=new U.dT()
a9=U.jE()
a9.scu(0,!0)
a9.scf(6.283185307179586)
a9.sci(0)
a9.sY(0,0)
a9.scg(100)
a9.sR(0)
a9.sc5(0.2)
b7.b=a9
a9.gt().h(0,b7.gaJ())
b7.c=null
b7.d=!1
b7.e=2.5
b7.r=4
b7.x=b7.y=!1
b7.z=0
b7.Q=null
b7.ch=0
b7.cy=b7.cx=null
b0=new X.av(!0,!1,!1)
b1=b7.c
b7.c=b0
a9=new D.J(b3,b1,b0,a8)
a9.b=!0
b7.L(a9)
b7.aZ(b4)
p.h(0,b7)
b4=b5.r
b7=new U.dV()
b7.c=0.01
b7.e=b7.d=0
b0=new X.av(!1,!1,!1)
b7.b=b0
a8=new D.J(b3,b2,b0,a8)
a8.b=!0
b7.L(a8)
b7.aZ(b4)
p.h(0,b7)
b5.sbt(M.jF(H.d([a7,a6],[M.ap])))},
l1:function(){var u="target2D",t="_Click and drag to move the location of the slice._",s="target3D",r="target4D",q=V.lZ("Hypersphere"),p=[P.l]
q.ag(H.d(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."],p))
q.bY(3,"2D: circle and square")
q.ag(H.d(["Imagine taking slices out of a circle inscribed in a square. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top, the line caused by the circle is small compared to the square. ","The corners of the square aren't covered by the circle."],p))
q.bZ(u)
q.ag(H.d([t],p))
q.bY(3,"3D: sphere and cube")
q.ag(H.d(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."],p))
q.bZ(s)
q.ag(H.d([t],p))
q.bY(3,"4D: hypersphere and hypercube")
q.ag(H.d(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges, the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches all ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."],p))
q.bZ(r)
q.ag(H.d(["_The shape on the left is an artistic representation of a 4D hypercube._ ","_Click and drag on the left to move the location of the slice._","_Click and drag on the right to rotate the resulting 3D slice._"],p))
q.ag(H.d(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."],p))
q.ag(H.d(["\xab[Back to Examples|../]"],p))
M.n1(u)
M.n2(s)
M.n3(r)},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
jx:function jx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},A={
lJ:function(a,b){var u=a.b3,t=new A.ds(b,u)
t.cG(b,u)
t.ef(a,b)
return t},
lK:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.ga0(a0)+a1.ga0(a1)+a2.ga0(a2)+a3.ga0(a3)+a4.ga0(a4)+a5.ga0(a5)+a6.ga0(a6)+a7.ga0(a7)+a8.ga0(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.x)(a9),++t)f+="_"+H.i(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.x)(b0),++t)f+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.x)(b1),++t)f+="_"+H.i(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.aQ()
if(k){u=$.aP()
g=new Z.bl(g.a|u.a)}if(j){u=$.aO()
g=new Z.bl(g.a|u.a)}if(i){u=$.bo()
g=new Z.bl(g.a|u.a)}return new A.fW(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
j9:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ja:function(a,b,c){var u
A.j9(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jy(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
mi:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j9(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
mf:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ja(b,t,"ambient")
b.a+="\n"},
mg:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ja(b,t,"diffuse")
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
mj:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ja(b,t,"invDiffuse")
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
mp:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ja(b,t,"specular")
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
ml:function(a,b){var u,t,s
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
mn:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j9(b,t,"reflect")
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
mo:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j9(b,t,"refract")
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
mh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.jy(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.at()
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
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
c.a+="      highLight = intensity*("+C.a.u(m," + ")+");\n"}else c.a+="   highLight = "+C.a.u(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.u(o," + ")+");\n"
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
mm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.jy(t)
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
if(typeof u!=="number")return u.at()
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
o=c.a+="   return "+C.a.u(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.d([],r)
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
k=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
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
mq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.jy(t)
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
if(typeof u!=="number")return u.at()
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
r=c.a+="   return "+C.a.u(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.d([],u)
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
i=H.d([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
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
mk:function(a,b){var u,t
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
u=b.a+="   return "+C.a.u(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mr:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bx("")
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
A.mi(a,j)
A.mf(a,j)
A.mg(a,j)
A.mj(a,j)
A.mp(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.mn(a,j)
A.mo(a,j)}A.ml(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.mh(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.mm(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.mq(a,q[o],j)
A.mk(a,j)}q=j.a+="// === Main ===\n"
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
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aT(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aT(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aT(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.u(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
ms:function(a,b){var u,t,s
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
mu:function(a,b){var u
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
mt:function(a,b){var u
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
mw:function(a,b){var u,t
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
mx:function(a,b){var u,t
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
mv:function(a,b){var u
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
my:function(a,b){var u
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
jy:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.d.aT(a,1)},
jR:function(a,b,c,d,e){var u=new A.i5(a,c,e)
u.f=d
u.shu(P.lI(d,0,P.t))
return u},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ds:function ds(a,b){var _=this
_.iC=_.iB=_.dz=_.dw=_.b3=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iP=_.iO=_.iN=_.cb=_.ca=_.c9=_.c8=_.c7=_.c6=_.iM=_.iL=_.dG=_.iK=_.iJ=_.dF=_.dE=_.iI=_.iH=_.dD=_.dC=_.iG=_.iF=_.dB=_.iE=_.iD=_.dA=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aG:function aG(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b3=b3
_.dw=b4},
bW:function bW(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bX:function bX(a,b,c,d,e,f,g,h,i,j){var _=this
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
c_:function c_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cz:function cz(){},
dO:function dO(){},
ia:function ia(a){this.a=a},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
i7:function i7(a,b,c){this.a=a
this.c=b
this.d=c},
i8:function i8(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
i5:function i5(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a8:function a8(a,b,c){this.a=a
this.c=b
this.d=c},
i6:function i6(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
bA:function bA(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){this.a=a
this.c=b
this.d=c},
cE:function cE(a,b,c){this.a=a
this.c=b
this.d=c},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c},
bZ:function bZ(a,b,c){this.a=a
this.c=b
this.d=c}},F={
k5:function(){var u,t,s=F.aJ(),r=s.a,q=V.aH(),p=new V.D(-1,-1,0)
p=p.m(0,Math.sqrt(p.v(p)))
u=r.aL(new V.aA(1,2,4,6),new V.M(1,0,0,1),new V.a0(-1,0,0),q,p,null)
r=s.a
q=new V.D(1,-1,0)
q=q.m(0,Math.sqrt(q.v(q)))
t=r.aL(new V.aA(0,3,4,6),new V.M(0,0,1,1),new V.a0(1,0,0),new V.U(1,0),q,null)
s.c.bW(0,u,t)
return s},
jo:function(a){var u,t,s,r,q,p=null,o=F.aJ(),n=o.a,m=new V.D(-1,-1,1)
m=m.m(0,Math.sqrt(m.v(m)))
u=n.aL(new V.aA(1,2,4,6),new V.M(1,0,0,1),new V.a0(-1,-1,0),new V.U(0,1),m,p)
n=o.a
m=new V.D(1,-1,1)
m=m.m(0,Math.sqrt(m.v(m)))
t=n.aL(new V.aA(0,3,4,6),new V.M(0,0,1,1),new V.a0(1,-1,0),new V.U(1,1),m,p)
n=o.a
m=new V.D(1,1,1)
m=m.m(0,Math.sqrt(m.v(m)))
s=n.aL(new V.aA(0,2,5,6),new V.M(0,1,0,1),new V.a0(1,1,0),new V.U(1,0),m,p)
n=o.a
m=V.aH()
r=new V.D(-1,1,1)
r=r.m(0,Math.sqrt(r.v(r)))
q=n.aL(new V.aA(0,2,4,7),new V.M(1,1,0,1),new V.a0(-1,1,0),m,r,p)
n=[F.R]
if(a)o.c.dj(H.d([u,t,s,q],n))
else o.d.hz(H.d([u,t,s,q],n))
o.ap()
return o},
kV:function(a,b,c){var u=null,t=F.aJ()
F.cR(t,b,u,c,a,1,0,0,1)
F.cR(t,b,u,c,a,0,1,0,3)
F.cR(t,b,u,c,a,0,0,1,2)
F.cR(t,b,u,c,a,-1,0,0,0)
F.cR(t,b,u,c,a,0,-1,0,0)
F.cR(t,b,u,c,a,0,0,-1,3)
t.ap()
return t},
j8:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cR:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.D(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.D(u+a3,t+a1,s+a2)
q=new V.D(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.D(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.j8(i)
l=F.j8(j.b)
k=F.n6(d,a0,new F.j7(j,F.j8(j.c),F.j8(j.d),l,m,c),b)
if(k!=null)a.aC(k)},
kW:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new F.jf()
if(b<3)return
u=F.aJ()
t=-6.283185307179586/b
s=H.d([],[F.R])
for(r=0;r<=b;++r){q=t*r
p=Math.sin(q)
o=Math.cos(q)
n=g.$1(r/b)
m=u.a
if(typeof n!=="number")return H.C(n)
l=new V.D(p,o,1).m(0,Math.sqrt(p*p+o*o+1))
if(p<0)k=0
else k=p>1?1:p
j=o<0
if(j)i=0
else i=o>1?1:o
if(j)j=0
else j=o>1?1:o
m.toString
h=F.bB(new V.aA(-1,-1,-1,-1),null,new V.M(k,i,j,1),new V.a0(p*n,o*n,0),new V.D(0,0,1),new V.U(p*0.5+0.5,o*0.5+0.5),l,null,0)
m.h(0,h)
C.a.h(s,h)}u.c.dj(s)
return u},
l0:function(a){var u=F.aJ(),t=Math.sqrt(5)/2+0.5,s=F.ar(u,new V.D(-1,t,0)),r=F.ar(u,new V.D(1,t,0)),q=-t,p=F.ar(u,new V.D(-1,q,0)),o=F.ar(u,new V.D(1,q,0)),n=F.ar(u,new V.D(0,-1,q)),m=F.ar(u,new V.D(0,1,q)),l=F.ar(u,new V.D(0,-1,t)),k=F.ar(u,new V.D(0,1,t)),j=F.ar(u,new V.D(t,0,1)),i=F.ar(u,new V.D(t,0,-1)),h=F.ar(u,new V.D(q,0,1)),g=F.ar(u,new V.D(q,0,-1))
F.Y(u,s,g,m,a)
F.Y(u,s,m,r,a)
F.Y(u,s,r,k,a)
F.Y(u,s,k,h,a)
F.Y(u,s,h,g,a)
F.Y(u,r,m,i,a)
F.Y(u,m,g,n,a)
F.Y(u,g,h,p,a)
F.Y(u,h,k,l,a)
F.Y(u,k,r,j,a)
F.Y(u,o,i,n,a)
F.Y(u,o,n,p,a)
F.Y(u,o,p,l,a)
F.Y(u,o,l,j,a)
F.Y(u,o,j,i,a)
F.Y(u,n,i,m,a)
F.Y(u,p,n,g,a)
F.Y(u,l,p,h,a)
F.Y(u,j,l,k,a)
F.Y(u,i,j,r,a)
u.i1(new F.dW(),new F.io())
return u},
ar:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.m(0,Math.sqrt(b.v(b)))
u=b.a
t=b.b
s=b.c
r=F.bB(j,j,j,new V.a0(u,t,s),b,j,j,j,0)
q=a.hS(r,new F.dW())
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
r.sW(0,new V.M(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sco(new V.U(l,k<0?-k:k))
a.a.h(0,r)
return r},
Y:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.di(0,b,d,c)
else{u=F.ar(a,b.r.A(0,c.r).n(0,0.5))
t=F.ar(a,c.r.A(0,d.r).n(0,0.5))
s=F.ar(a,d.r.A(0,b.r).n(0,0.5))
r=e-1
F.Y(a,b,u,s,r)
F.Y(a,u,c,t,r)
F.Y(a,t,s,u,r)
F.Y(a,s,t,d,r)}},
n6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.aJ()
t=H.d([],[F.R])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.bB(g,g,new V.M(p,0,0,1),g,g,new V.U(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c4(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.bB(g,g,new V.M(j,i,h,1),g,g,new V.U(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c4(d))}}u.d.hA(a+1,b+1,t)
return u},
ck:function(a,b,c){var u=new F.X(),t=a.a
if(t==null)H.u(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.q("May not create a face with vertices attached to different shapes."))
u.aX(a)
u.aY(b)
u.de(c)
C.a.h(u.a.a.d.b,u)
u.a.a.M()
return u},
jM:function(a,b){var u,t=new F.ag()
if(a==null)H.u(P.q("May not create a line with a null start vertex."))
if(b==null)H.u(P.q("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.u(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.u(P.q("May not create a line with vertices attached to different shapes."))
t.aX(a)
t.aY(b)
C.a.h(t.a.a.c.b,t)
t.a.a.M()
return t},
lL:function(a){var u=new F.bw()
if(a.a==null)H.u(P.q("May not create a point with a vertex which is not attached to a shape."))
u.h9(a)
C.a.h(u.a.a.b.b,u)
u.a.a.M()
return u},
aJ:function(){var u=new F.aq(),t=new F.ij(u)
t.b=!1
t.shv(H.d([],[F.R]))
u.a=t
t=new F.hB(u)
t.sbN(H.d([],[F.bw]))
u.b=t
t=new F.hA(u)
t.seT(H.d([],[F.ag]))
u.c=t
t=new F.hz(u)
t.seM(H.d([],[F.X]))
u.d=t
u.e=null
return u},
bB:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.R(),r=new F.is()
r.sbN(H.d([],[F.bw]))
s.b=r
r=new F.ip()
u=[F.ag]
r.seU(H.d([],u))
r.seV(H.d([],u))
s.c=r
r=new F.ik()
u=[F.X]
r.seN(H.d([],u))
r.seO(H.d([],u))
r.seP(H.d([],u))
s.d=r
h=$.lm()
s.e=0
r=$.aQ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aP().a)!==0?e:t
s.x=(u&$.aO().a)!==0?b:t
s.y=(u&$.bI().a)!==0?f:t
s.z=(u&$.bJ().a)!==0?g:t
s.Q=(u&$.ln().a)!==0?c:t
s.ch=(u&$.c7().a)!==0?i:0
s.cx=(u&$.bo().a)!==0?a:t
return s},
j7:function j7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jf:function jf(){},
X:function X(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fm:function fm(){},
hF:function hF(){},
ag:function ag(){this.b=this.a=null},
fK:function fK(){},
i4:function i4(){},
bw:function bw(){this.a=null},
aq:function aq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a){this.a=a
this.b=null},
hA:function hA(a){this.a=a
this.b=null},
hB:function hB(a){this.a=a
this.b=null},
R:function R(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iu:function iu(a){this.a=a},
it:function it(a){this.a=a},
ij:function ij(a){this.a=a
this.c=this.b=null},
ik:function ik(){this.d=this.c=this.b=null},
il:function il(a,b){this.a=a
this.b=b},
im:function im(a,b){this.a=a
this.b=b},
ip:function ip(){this.c=this.b=null},
iq:function iq(){},
dW:function dW(){},
ir:function ir(){},
io:function io(){},
is:function is(){this.b=null}},T={dK:function dK(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jK.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.cx(a)},
i:function(a){return"Instance of '"+H.i(H.cy(a))+"'"}}
J.fE.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ia4:1}
J.dj.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dk.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hm.prototype={}
J.cF.prototype={}
J.bv.prototype={
i:function(a){var u=a[$.lb()]
if(u==null)return this.ed(a)
return"JavaScript function for "+H.i(J.ax(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijG:1}
J.aZ.prototype={
h:function(a,b){H.I(b,H.y(a,0))
if(!!a.fixed$length)H.u(P.aw("add"))
a.push(b)},
dZ:function(a,b){if(!!a.fixed$length)H.u(P.aw("removeAt"))
if(b<0||b>=a.length)throw H.h(P.dD(b,null))
return a.splice(b,1)[0]},
w:function(a,b){var u
if(!!a.fixed$length)H.u(P.aw("remove"))
for(u=0;u<a.length;++u)if(J.F(a[u],b)){a.splice(u,1)
return!0}return!1},
bX:function(a,b){var u,t
H.m(b,"$if",[H.y(a,0)],"$af")
if(!!a.fixed$length)H.u(P.aw("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.x)(b),++t)a.push(b[t])},
E:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.ce(a))}},
u:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.i(a[u]))
return t.join(b)},
hZ:function(a){return this.u(a,"")},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
eb:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.b4(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.b4(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.y(a,0)])
return H.d(a.slice(b,c),[H.y(a,0)])},
ghU:function(a){if(a.length>0)return a[0]
throw H.h(H.kg())},
gcd:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.kg())},
bu:function(a,b){var u=H.y(a,0)
H.n(b,{func:1,ret:P.t,args:[u,u]})
if(!!a.immutable$list)H.u(P.aw("sort"))
H.dG(a,0,a.length-1,b,u)},
ar:function(a,b){var u
for(u=0;u<a.length;++u)if(J.F(a[u],b))return!0
return!1},
i:function(a){return P.jH(a,"[","]")},
gS:function(a){return new J.am(a,a.length,[H.y(a,0)])},
gH:function(a){return H.cx(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.u(P.aw("set length"))
if(b<0)throw H.h(P.b4(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.bE(a,b))
if(b>=a.length||b<0)throw H.h(H.bE(a,b))
return a[b]},
l:function(a,b,c){H.I(c,H.y(a,0))
if(!!a.immutable$list)H.u(P.aw("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bE(a,b))
a[b]=c},
$if:1,
$ib:1}
J.jJ.prototype={}
J.am.prototype={
gI:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.x(s))
u=t.c
if(u>=r){t.scL(null)
return!1}t.scL(s[u]);++t.c
return!0},
scL:function(a){this.d=H.I(a,H.y(this,0))},
$iaY:1}
J.cn.prototype={
bj:function(a,b){var u
H.l2(b)
if(typeof b!=="number")throw H.h(H.bm(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbn(b)
if(this.gbn(a)===u)return 0
if(this.gbn(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbn:function(a){return a===0?1/a<0:a<0},
dI:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.aw(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.aw(""+a+".round()"))},
hJ:function(a,b,c){if(C.e.bj(b,c)>0)throw H.h(H.bm(b))
if(this.bj(a,b)<0)return b
if(this.bj(a,c)>0)return c
return a},
iv:function(a,b){var u
if(b>20)throw H.h(P.b4(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbn(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.h(H.bm(b))
return a*b},
e8:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ab:function(a,b){return(a|0)===a?a/b|0:this.hk(a,b)},
hk:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.aw("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
bf:function(a,b){var u
if(a>0)u=this.hg(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hg:function(a,b){return b>31?0:a>>>b},
$iz:1,
$iaa:1}
J.di.prototype={$it:1}
J.fF.prototype={}
J.bP.prototype={
c2:function(a,b){if(b<0)throw H.h(H.bE(a,b))
if(b>=a.length)H.u(H.bE(a,b))
return a.charCodeAt(b)},
bb:function(a,b){if(b>=a.length)throw H.h(H.bE(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.h(P.jB(b,null,null))
return a+b},
cC:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.dD(b,null))
if(b>c)throw H.h(P.dD(b,null))
if(c>a.length)throw H.h(P.dD(c,null))
return a.substring(b,c)},
aT:function(a,b){return this.cC(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ae:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikm:1,
$il:1}
H.a5.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.d.c2(this.a,b)},
$adR:function(){return[P.t]},
$aw:function(){return[P.t]},
$af:function(){return[P.t]},
$ab:function(){return[P.t]}}
H.fh.prototype={}
H.dp.prototype={
gI:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.k2(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.ce(s))
u=t.c
if(u>=q){t.saU(null)
return!1}t.saU(r.G(s,u));++t.c
return!0},
saU:function(a){this.d=H.I(a,H.y(this,0))},
$iaY:1}
H.fS.prototype={
gS:function(a){return new H.fT(J.c8(this.a),this.b,this.$ti)},
gk:function(a){return J.c9(this.a)},
G:function(a,b){return this.b.$1(J.k9(this.a,b))},
$af:function(a,b){return[b]}}
H.fT.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.saU(u.c.$1(t.gI(t)))
return!0}u.saU(null)
return!1},
gI:function(a){return this.a},
saU:function(a){this.a=H.I(a,H.y(this,1))},
$aaY:function(a,b){return[b]}}
H.iw.prototype={
gS:function(a){return new H.ix(J.c8(this.a),this.b,this.$ti)}}
H.ix.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.B(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bN.prototype={}
H.dR.prototype={}
H.dQ.prototype={}
H.i1.prototype={
ad:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hi.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fH.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.id.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jz.prototype={
$1:function(a){if(!!J.a2(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:21}
H.ev.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iat:1}
H.cc.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ijG:1,
gix:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hS.prototype={}
H.hK.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c6(u)+"'"}}
H.ca.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ca))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cx(this.a)
else u=typeof t!=="object"?J.bK(t):H.cx(t)
return(u^H.cx(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cy(u))+"'")}}
H.i3.prototype={
i:function(a){return this.a}}
H.f2.prototype={
i:function(a){return this.a}}
H.hw.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.iy.prototype={
i:function(a){return"Assertion failed: "+P.de(this.a)}}
H.a_.prototype={
gk:function(a){return this.a},
gaB:function(a){return new H.dn(this,[H.y(this,0)])},
ds:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cV(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cV(t,b)}else return s.hX(b)},
hX:function(a){var u=this.d
if(u==null)return!1
return this.cc(this.bB(u,J.bK(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bc(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bc(r,b)
s=t==null?null:t.b
return s}else return q.hY(b)},
hY:function(a){var u,t,s=this.d
if(s==null)return
u=this.bB(s,J.bK(a)&0x3ffffff)
t=this.cc(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
H.I(b,H.y(o,0))
H.I(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.cM(u==null?o.b=o.bL():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cM(t==null?o.c=o.bL():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bL()
r=J.bK(b)&0x3ffffff
q=o.bB(s,r)
if(q==null)o.bU(s,r,[o.bM(b,c)])
else{p=o.cc(q,b)
if(p>=0)q[p].b=c
else q.push(o.bM(b,c))}}},
E:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.ce(s))
u=u.c}},
cM:function(a,b,c){var u,t=this
H.I(b,H.y(t,0))
H.I(c,H.y(t,1))
u=t.bc(a,b)
if(u==null)t.bU(a,b,t.bM(b,c))
else u.b=c},
bM:function(a,b){var u=this,t=new H.fL(H.I(a,H.y(u,0)),H.I(b,H.y(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cc:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1},
i:function(a){return P.kj(this)},
bc:function(a,b){return a[b]},
bB:function(a,b){return a[b]},
bU:function(a,b,c){a[b]=c},
eH:function(a,b){delete a[b]},
cV:function(a,b){return this.bc(a,b)!=null},
bL:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bU(t,u,t)
this.eH(t,u)
return t}}
H.fL.prototype={}
H.dn.prototype={
gk:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fM(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fM.prototype={
gI:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.ce(t))
else{t=u.c
if(t==null){u.scY(null)
return!1}else{u.scY(t.a)
u.c=u.c.c
return!0}}},
scY:function(a){this.d=H.I(a,H.y(this,0))},
$iaY:1}
H.ji.prototype={
$1:function(a){return this.a(a)},
$S:21}
H.jj.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.jk.prototype={
$1:function(a){return this.a(H.ab(a))},
$S:41}
H.fG.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ikm:1}
H.cu.prototype={}
H.dw.prototype={
gk:function(a){return a.length},
$iG:1,
$aG:function(){}}
H.ct.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]},
$abN:function(){return[P.z]},
$aw:function(){return[P.z]},
$if:1,
$af:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dx.prototype={
$abN:function(){return[P.t]},
$aw:function(){return[P.t]},
$if:1,
$af:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.hc.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hd.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.he.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hf.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hg.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.dy.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hh.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bC(b,a,a.length)
return a[b]},
$inr:1}
H.cJ.prototype={}
H.cK.prototype={}
H.cL.prototype={}
H.cM.prototype={}
P.iA.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.iz.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:40}
P.iB.prototype={
$0:function(){this.a.$0()},
$S:3}
P.iC.prototype={
$0:function(){this.a.$0()},
$S:3}
P.j3.prototype={
eq:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cV(new P.j4(this,b),0),a)
else throw H.h(P.aw("`setTimeout()` not found."))}}
P.j4.prototype={
$0:function(){this.b.$0()},
$S:4}
P.bd.prototype={
i0:function(a){if((this.c&15)!==6)return!0
return this.b.b.cn(H.n(this.d,{func:1,ret:P.a4,args:[P.Q]}),a.a,P.a4,P.Q)},
hW:function(a){var u=this.e,t=P.Q,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.eP(u,{func:1,args:[P.Q,P.at]}))return H.k1(r.iq(u,a.a,a.b,null,t,P.at),s)
else return H.k1(r.cn(H.n(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.aD.prototype={
e2:function(a,b,c){var u,t,s,r=H.y(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mA(b,u)}t=new P.aD($.a1,[c])
s=b==null?1:3
this.cN(new P.bd(t,s,a,b,[r,c]))
return t},
it:function(a,b){return this.e2(a,null,b)},
cN:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$ibd")
t.c=a}else{if(s===2){u=H.j(t.c,"$iaD")
s=u.a
if(s<4){u.cN(a)
return}t.a=s
t.c=u.c}P.jd(null,null,t.b,H.n(new P.iJ(t,a),{func:1,ret:-1}))}},
d8:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$ibd")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iaD")
u=q.a
if(u<4){q.d8(a)
return}p.a=u
p.c=q.c}o.a=p.be(a)
P.jd(null,null,p.b,H.n(new P.iN(o,p),{func:1,ret:-1}))}},
bP:function(){var u=H.j(this.c,"$ibd")
this.c=null
return this.be(u)},
be:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cR:function(a){var u,t,s=this,r=H.y(s,0)
H.k1(a,{futureOr:1,type:r})
u=s.$ti
if(H.jZ(a,"$icl",u,"$acl"))if(H.jZ(a,"$iaD",u,null))P.kI(a,s)
else P.m8(a,s)
else{t=s.bP()
H.I(a,r)
s.a=4
s.c=a
P.cH(s,t)}},
cS:function(a,b){var u,t=this
H.j(b,"$iat")
u=t.bP()
t.a=8
t.c=new P.an(a,b)
P.cH(t,u)},
$icl:1}
P.iJ.prototype={
$0:function(){P.cH(this.a,this.b)},
$S:3}
P.iN.prototype={
$0:function(){P.cH(this.b,this.a.a)},
$S:3}
P.iK.prototype={
$1:function(a){var u=this.a
u.a=0
u.cR(a)},
$S:14}
P.iL.prototype={
$2:function(a,b){H.j(b,"$iat")
this.a.cS(a,b)},
$1:function(a){return this.$2(a,null)},
$S:46}
P.iM.prototype={
$0:function(){this.a.cS(this.b,this.c)},
$S:3}
P.iQ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e1(H.n(s.d,{func:1}),null)}catch(r){u=H.bG(r)
t=H.c4(r)
if(o.d){s=H.j(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.a2(n).$icl){if(n instanceof P.aD&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.it(new P.iR(p),null)
s.a=!1}},
$S:4}
P.iR.prototype={
$1:function(a){return this.a},
$S:34}
P.iP.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.I(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.cn(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bG(o)
t=H.c4(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:4}
P.iO.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$ian")
r=m.c
if(H.B(r.i0(u))&&r.e!=null){q=m.b
q.b=r.hW(u)
q.a=!1}}catch(p){t=H.bG(p)
s=H.c4(p)
r=H.j(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:4}
P.dZ.prototype={}
P.hN.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aD($.a1,[P.t])
r.a=0
u=H.y(s,0)
t=H.n(new P.hP(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hQ(r,q),{func:1,ret:-1})
W.ae(s.a,s.b,t,!1,u)
return q}}
P.hP.prototype={
$1:function(a){H.I(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.y(this.b,0)]}}}
P.hQ.prototype={
$0:function(){this.b.cR(this.a.a)},
$S:3}
P.cB.prototype={}
P.hO.prototype={}
P.an.prototype={
i:function(a){return H.i(this.a)},
$ibr:1}
P.j6.prototype={$inE:1}
P.jc.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dz():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:3}
P.iX.prototype={
ir:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.kM(r,r,this,a,-1)}catch(s){u=H.bG(s)
t=H.c4(s)
P.jb(r,r,this,u,H.j(t,"$iat"))}},
is:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.I(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.kN(r,r,this,a,b,-1,c)}catch(s){u=H.bG(s)
t=H.c4(s)
P.jb(r,r,this,u,H.j(t,"$iat"))}},
hH:function(a,b){return new P.iZ(this,H.n(a,{func:1,ret:b}),b)},
c_:function(a){return new P.iY(this,H.n(a,{func:1,ret:-1}))},
hI:function(a,b){return new P.j_(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
e1:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.kM(null,null,this,a,b)},
cn:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.I(b,d)
if($.a1===C.f)return a.$1(b)
return P.kN(null,null,this,a,b,c,d)},
iq:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.I(b,e)
H.I(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.mB(null,null,this,a,b,c,d,e,f)}}
P.iZ.prototype={
$0:function(){return this.a.e1(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iY.prototype={
$0:function(){return this.a.ir(this.b)},
$S:4}
P.j_.prototype={
$1:function(a){var u=this.c
return this.a.is(this.b,H.I(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iV.prototype={
gS:function(a){var u=this,t=new P.ed(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.I(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cP(u==null?s.b=P.jU():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cP(t==null?s.c=P.jU():t,b)}else return s.es(0,b)},
es:function(a,b){var u,t,s,r=this
H.I(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.jU()
t=r.cT(b)
s=u[t]
if(s==null)u[t]=[r.bx(b)]
else{if(r.cZ(s,b)>=0)return!1
s.push(r.bx(b))}return!0},
w:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h0(this.c,b)
else return this.h_(0,b)},
h_:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eR(r,b)
t=s.cZ(u,b)
if(t<0)return!1
s.df(u.splice(t,1)[0])
return!0},
cP:function(a,b){H.I(b,H.y(this,0))
if(H.j(a[b],"$icI")!=null)return!1
a[b]=this.bx(b)
return!0},
h0:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$icI")
if(u==null)return!1
this.df(u)
delete a[b]
return!0},
d0:function(){this.r=1073741823&this.r+1},
bx:function(a){var u,t=this,s=new P.cI(H.I(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d0()
return s},
df:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d0()},
cT:function(a){return J.bK(a)&1073741823},
eR:function(a,b){return a[this.cT(b)]},
cZ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1}}
P.cI.prototype={}
P.ed.prototype={
gI:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.ce(t))
else{t=u.c
if(t==null){u.scQ(null)
return!1}else{u.scQ(H.I(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
scQ:function(a){this.d=H.I(a,H.y(this,0))},
$iaY:1}
P.fN.prototype={$if:1,$ib:1}
P.w.prototype={
gS:function(a){return new H.dp(a,this.gk(a),[H.cW(this,a,"w",0)])},
G:function(a,b){return this.j(a,b)},
iu:function(a,b){var u,t=this,s=H.d([],[H.cW(t,a,"w",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
cq:function(a){return this.iu(a,!0)},
i:function(a){return P.jH(a,"[","]")}}
P.fQ.prototype={}
P.fR.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:17}
P.ah.prototype={
E:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.cW(s,a,"ah",0),H.cW(s,a,"ah",1)]})
for(u=J.c8(s.gaB(a));u.B();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.c9(this.gaB(a))},
i:function(a){return P.kj(a)},
$iE:1}
P.j0.prototype={
i:function(a){return P.jH(this,"{","}")},
G:function(a,b){var u,t,s,r=this
P.ks(b,"index")
for(u=P.ma(r,r.r,H.y(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.h(P.W(b,r,"index",null,t))},
$if:1,
$ikw:1}
P.ee.prototype={}
P.cd.prototype={}
P.d7.prototype={}
P.fi.prototype={
$acd:function(){return[P.l,[P.b,P.t]]}}
P.ih.prototype={}
P.ii.prototype={
hL:function(a){var u,t,s=P.kt(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.j5(u)
if(t.eQ(a,0,s)!==s)t.dh(C.d.c2(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mc(0,t.b,u.length)))},
$ad7:function(){return[P.l,[P.b,P.t]]}}
P.j5.prototype={
dh:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eQ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.c2(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.bb(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dh(r,C.d.bb(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a4.prototype={}
P.aU.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.e.bf(u,30))&1073741823},
i:function(a){var u=this,t=P.lz(H.lT(u)),s=P.d8(H.lR(u)),r=P.d8(H.lN(u)),q=P.d8(H.lO(u)),p=P.d8(H.lQ(u)),o=P.d8(H.lS(u)),n=P.lA(H.lP(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.ch.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ch&&this.a===b.a},
gH:function(a){return C.e.gH(this.a)},
i:function(a){var u,t,s,r=new P.fg(),q=this.a
if(q<0)return"-"+new P.ch(0-q).i(0)
u=r.$1(C.e.ab(q,6e7)%60)
t=r.$1(C.e.ab(q,1e6)%60)
s=new P.ff().$1(q%1e6)
return""+C.e.ab(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.ff.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fg.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.br.prototype={}
P.eV.prototype={
i:function(a){return"Assertion failed"}}
P.dz.prototype={
i:function(a){return"Throw of null."}}
P.be.prototype={
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbz()+o+u
if(!q.a)return t
s=q.gby()
r=P.de(q.b)
return t+s+": "+r}}
P.bU.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.fx.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t=H.a9(this.b)
if(typeof t!=="number")return t.aa()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gk:function(a){return this.f}}
P.ie.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ic.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hJ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f5.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.de(u)+"."}}
P.hl.prototype={
i:function(a){return"Out of Memory"},
$ibr:1}
P.dI.prototype={
i:function(a){return"Stack Overflow"},
$ibr:1}
P.fa.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e6.prototype={
i:function(a){return"Exception: "+this.a}}
P.ft.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.cC(s,0,75)+"...":s
return t+"\n"+r}}
P.t.prototype={}
P.f.prototype={
gk:function(a){var u,t=this.gS(this)
for(u=0;t.B();)++u
return u},
G:function(a,b){var u,t,s
P.ks(b,"index")
for(u=this.gS(this),t=0;u.B();){s=u.gI(u)
if(b===t)return s;++t}throw H.h(P.W(b,this,"index",null,t))},
i:function(a){return P.lC(this,"(",")")}}
P.aY.prototype={}
P.b.prototype={$if:1}
P.E.prototype={}
P.L.prototype={
gH:function(a){return P.Q.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
q:function(a,b){return this===b},
gH:function(a){return H.cx(this)},
i:function(a){return"Instance of '"+H.i(H.cy(this))+"'"},
toString:function(){return this.i(this)}}
P.at.prototype={}
P.l.prototype={$ikm:1}
P.bx.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.eR.prototype={
gk:function(a){return a.length}}
W.eT.prototype={
i:function(a){return String(a)}}
W.eU.prototype={
i:function(a){return String(a)}}
W.cZ.prototype={}
W.bM.prototype={
e7:function(a,b,c){var u=a.getContext(b,P.mI(c))
return u},
$ibM:1}
W.bq.prototype={
gk:function(a){return a.length}}
W.cf.prototype={$icf:1}
W.f6.prototype={
gk:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cg.prototype={
gk:function(a){return a.length}}
W.f7.prototype={}
W.aS.prototype={}
W.aT.prototype={}
W.f8.prototype={
gk:function(a){return a.length}}
W.f9.prototype={
gk:function(a){return a.length}}
W.fb.prototype={
gk:function(a){return a.length}}
W.da.prototype={$ida:1}
W.fc.prototype={
i:function(a){return String(a)}}
W.db.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[[P.as,P.aa]]},
$aw:function(){return[[P.as,P.aa]]},
$if:1,
$af:function(){return[[P.as,P.aa]]},
$ib:1,
$ab:function(){return[[P.as,P.aa]]},
$aA:function(){return[[P.as,P.aa]]}}
W.dc.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaF(a))+" x "+H.i(this.gaA(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.a2(b)
if(!u.$ias)return!1
return a.left===u.gbo(b)&&a.top===u.gbr(b)&&this.gaF(a)===u.gaF(b)&&this.gaA(a)===u.gaA(b)},
gH:function(a){return W.kJ(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(this.gaF(a)),C.c.gH(this.gaA(a)))},
gdm:function(a){return a.bottom},
gaA:function(a){return a.height},
gbo:function(a){return a.left},
gbp:function(a){return a.right},
gbr:function(a){return a.top},
gaF:function(a){return a.width},
$ias:1,
$aas:function(){return[P.aa]}}
W.fd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[P.l]},
$aw:function(){return[P.l]},
$if:1,
$af:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aA:function(){return[P.l]}}
W.fe.prototype={
gk:function(a){return a.length}}
W.iE.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.j(u[b],"$ia6")},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.cq(this)
return new J.am(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.a6]},
$af:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
W.a6.prototype={
gdq:function(a){return new W.iE(a,a.children)},
gdr:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aa()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aa()
if(r<0)r=-r*0
return new P.as(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$ia6:1}
W.k.prototype={$ik:1}
W.e.prototype={
hy:function(a,b,c,d){H.n(c,{func:1,args:[W.k]})
if(c!=null)this.eu(a,b,c,!1)},
eu:function(a,b,c,d){return a.addEventListener(b,H.cV(H.n(c,{func:1,args:[W.k]}),1),!1)},
$ie:1}
W.aV.prototype={$iaV:1}
W.fn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$if:1,
$af:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aA:function(){return[W.aV]}}
W.fo.prototype={
gk:function(a){return a.length}}
W.fs.prototype={
gk:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.fw.prototype={
gk:function(a){return a.length}}
W.bO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$aw:function(){return[W.H]},
$if:1,
$af:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ibO:1,
$aA:function(){return[W.H]}}
W.b_.prototype={$ib_:1}
W.fO.prototype={
i:function(a){return String(a)}}
W.h5.prototype={
gk:function(a){return a.length}}
W.h6.prototype={
j:function(a,b){return P.bn(a.get(H.ab(b)))},
E:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaB:function(a){var u=H.d([],[P.l])
this.E(a,new W.h7(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.l,null]},
$iE:1,
$aE:function(){return[P.l,null]}}
W.h7.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.h8.prototype={
j:function(a,b){return P.bn(a.get(H.ab(b)))},
E:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaB:function(a){var u=H.d([],[P.l])
this.E(a,new W.h9(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.l,null]},
$iE:1,
$aE:function(){return[P.l,null]}}
W.h9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.b2.prototype={$ib2:1}
W.ha.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b2]},
$aw:function(){return[W.b2]},
$if:1,
$af:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aA:function(){return[W.b2]}}
W.ad.prototype={$iad:1}
W.iD.prototype={
gS:function(a){var u=this.a.childNodes
return new W.df(u,u.length,[H.cW(C.D,u,"A",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$aw:function(){return[W.H]},
$af:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.ec(a):u},
$iH:1}
W.cv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$aw:function(){return[W.H]},
$if:1,
$af:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aA:function(){return[W.H]}}
W.b3.prototype={$ib3:1,
gk:function(a){return a.length}}
W.hn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b3]},
$aw:function(){return[W.b3]},
$if:1,
$af:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aA:function(){return[W.b3]}}
W.hu.prototype={
j:function(a,b){return P.bn(a.get(H.ab(b)))},
E:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaB:function(a){var u=H.d([],[P.l])
this.E(a,new W.hv(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.l,null]},
$iE:1,
$aE:function(){return[P.l,null]}}
W.hv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hx.prototype={
gk:function(a){return a.length}}
W.b5.prototype={$ib5:1}
W.hG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b5]},
$aw:function(){return[W.b5]},
$if:1,
$af:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$aA:function(){return[W.b5]}}
W.b6.prototype={$ib6:1}
W.hH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b6]},
$aw:function(){return[W.b6]},
$if:1,
$af:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$aA:function(){return[W.b6]}}
W.b7.prototype={$ib7:1,
gk:function(a){return a.length}}
W.hL.prototype={
j:function(a,b){return a.getItem(H.ab(b))},
E:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaB:function(a){var u=H.d([],[P.l])
this.E(a,new W.hM(u))
return u},
gk:function(a){return a.length},
$aah:function(){return[P.l,P.l]},
$iE:1,
$aE:function(){return[P.l,P.l]}}
W.hM.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:31}
W.aL.prototype={$iaL:1}
W.b8.prototype={$ib8:1}
W.aM.prototype={$iaM:1}
W.hT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aM]},
$aw:function(){return[W.aM]},
$if:1,
$af:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aA:function(){return[W.aM]}}
W.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b8]},
$aw:function(){return[W.b8]},
$if:1,
$af:function(){return[W.b8]},
$ib:1,
$ab:function(){return[W.b8]},
$aA:function(){return[W.b8]}}
W.hW.prototype={
gk:function(a){return a.length}}
W.b9.prototype={$ib9:1}
W.aN.prototype={$iaN:1}
W.hZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b9]},
$aw:function(){return[W.b9]},
$if:1,
$af:function(){return[W.b9]},
$ib:1,
$ab:function(){return[W.b9]},
$aA:function(){return[W.b9]}}
W.i_.prototype={
gk:function(a){return a.length}}
W.bz.prototype={}
W.ig.prototype={
i:function(a){return String(a)}}
W.iv.prototype={
gk:function(a){return a.length}}
W.bc.prototype={
ghO:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.aw("deltaY is not supported"))},
ghN:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.aw("deltaX is not supported"))},
$ibc:1}
W.cG.prototype={
h4:function(a,b){return a.requestAnimationFrame(H.cV(H.n(b,{func:1,ret:-1,args:[P.aa]}),1))},
eK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.S]},
$aw:function(){return[W.S]},
$if:1,
$af:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aA:function(){return[W.S]}}
W.e1.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.a2(b)
if(!u.$ias)return!1
return a.left===u.gbo(b)&&a.top===u.gbr(b)&&a.width===u.gaF(b)&&a.height===u.gaA(b)},
gH:function(a){return W.kJ(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(a.width),C.c.gH(a.height))},
gaA:function(a){return a.height},
gaF:function(a){return a.width}}
W.iS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$if:1,
$af:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aA:function(){return[W.aW]}}
W.ej.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$aw:function(){return[W.H]},
$if:1,
$af:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aA:function(){return[W.H]}}
W.j1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b7]},
$aw:function(){return[W.b7]},
$if:1,
$af:function(){return[W.b7]},
$ib:1,
$ab:function(){return[W.b7]},
$aA:function(){return[W.b7]}}
W.j2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aL]},
$aw:function(){return[W.aL]},
$if:1,
$af:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aA:function(){return[W.aL]}}
W.iG.prototype={}
W.jT.prototype={}
W.iH.prototype={}
W.iI.prototype={
$1:function(a){return this.a.$1(H.j(a,"$ik"))},
$S:30}
W.A.prototype={
gS:function(a){return new W.df(a,this.gk(a),[H.cW(this,a,"A",0)])}}
W.df.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd_(J.eQ(u.a,t))
u.c=t
return!0}u.sd_(null)
u.c=s
return!1},
gI:function(a){return this.d},
sd_:function(a){this.d=H.I(a,H.y(this,0))},
$iaY:1}
W.e0.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ew.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
P.je.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.fp.prototype={
gbC:function(){var u=this.b,t=H.aF(u,"w",0),s=W.a6
return new H.fS(new H.iw(u,H.n(new P.fq(),{func:1,ret:P.a4,args:[t]}),[t]),H.n(new P.fr(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.c9(this.gbC().a)},
j:function(a,b){var u=this.gbC()
return u.b.$1(J.k9(u.a,b))},
gS:function(a){var u=P.ki(this.gbC(),!1,W.a6)
return new J.am(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.a6]},
$af:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
P.fq.prototype={
$1:function(a){return!!J.a2(H.j(a,"$iH")).$ia6},
$S:29}
P.fr.prototype={
$1:function(a){return H.r(H.j(a,"$iH"),"$ia6")},
$S:28}
P.iW.prototype={
gbp:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.C(t)
return H.I(u+t,H.y(this,0))},
gdm:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.C(t)
return H.I(u+t,H.y(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.a2(b)
if(!!u.$ias){t=p.a
if(t==u.gbo(b)){s=p.b
if(s==u.gbr(b)){r=p.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.C(r)
q=H.y(p,0)
if(H.I(t+r,q)===u.gbp(b)){t=p.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.C(t)
u=H.I(s+t,q)===u.gdm(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.bK(s),q=t.b,p=J.bK(q),o=t.c
if(typeof s!=="number")return s.A()
if(typeof o!=="number")return H.C(o)
u=H.y(t,0)
o=C.e.gH(H.I(s+o,u))
s=t.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.C(s)
u=C.e.gH(H.I(q+s,u))
return P.m9(P.iU(P.iU(P.iU(P.iU(0,r),p),o),u))}}
P.as.prototype={
gbo:function(a){return this.a},
gbr:function(a){return this.b},
gaF:function(a){return this.c},
gaA:function(a){return this.d}}
P.bf.prototype={$ibf:1}
P.fJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bf]},
$if:1,
$af:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aA:function(){return[P.bf]}}
P.bi.prototype={$ibi:1}
P.hj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bi]},
$if:1,
$af:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aA:function(){return[P.bi]}}
P.hp.prototype={
gk:function(a){return a.length}}
P.hR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$aw:function(){return[P.l]},
$if:1,
$af:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aA:function(){return[P.l]}}
P.o.prototype={
gdq:function(a){return new P.fp(a,new W.iD(a))}}
P.bj.prototype={$ibj:1}
P.i0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bj]},
$if:1,
$af:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aA:function(){return[P.bj]}}
P.eb.prototype={}
P.ec.prototype={}
P.em.prototype={}
P.en.prototype={}
P.ex.prototype={}
P.ey.prototype={}
P.eD.prototype={}
P.eE.prototype={}
P.eX.prototype={
gk:function(a){return a.length}}
P.eY.prototype={
j:function(a,b){return P.bn(a.get(H.ab(b)))},
E:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaB:function(a){var u=H.d([],[P.l])
this.E(a,new P.eZ(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.l,null]},
$iE:1,
$aE:function(){return[P.l,null]}}
P.eZ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.f_.prototype={
gk:function(a){return a.length}}
P.bL.prototype={}
P.hk.prototype={
gk:function(a){return a.length}}
P.e_.prototype={}
P.d_.prototype={$id_:1}
P.dC.prototype={$idC:1}
P.bV.prototype={
a_:function(a,b,c){return a.uniform1f(b,c)},
bs:function(a,b,c){return a.uniform1i(b,c)},
P:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ct:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
e3:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e4:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibV:1}
P.dF.prototype={$idF:1}
P.dP.prototype={$idP:1}
P.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return P.bn(a.item(b))},
G:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.E,,,]]},
$if:1,
$af:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aA:function(){return[[P.E,,,]]}}
P.et.prototype={}
P.eu.prototype={}
O.Z.prototype={
b9:function(a){var u=this
u.seW(H.d([],[a]))
u.sd6(null)
u.sd2(null)
u.sd7(null)},
cw:function(a,b,c){var u=this,t=H.aF(u,"Z",0)
H.n(b,{func:1,ret:P.a4,args:[[P.f,t]]})
t={func:1,ret:-1,args:[P.t,[P.f,t]]}
H.n(a,t)
H.n(c,t)
u.sd6(b)
u.sd2(a)
u.sd7(c)},
aR:function(a,b){return this.cw(a,null,b)},
d5:function(a){var u
H.m(a,"$if",[H.aF(this,"Z",0)],"$af")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d1:function(a,b){var u
H.m(b,"$if",[H.aF(this,"Z",0)],"$af")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.am(u,u.length,[H.y(u,0)])},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aF(s,"Z",0)
H.I(b,r)
r=[r]
if(H.B(s.d5(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d1(t,H.d([b],r))}},
bX:function(a,b){var u,t,s=this
H.m(b,"$if",[H.aF(s,"Z",0)],"$af")
if(H.B(s.d5(b))){u=s.a
t=u.length
C.a.bX(u,b)
s.d1(t,b)}},
seW:function(a){this.a=H.m(a,"$ib",[H.aF(this,"Z",0)],"$ab")},
sd6:function(a){this.b=H.n(a,{func:1,ret:P.a4,args:[[P.f,H.aF(this,"Z",0)]]})},
sd2:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.t,[P.f,H.aF(this,"Z",0)]]})},
sd7:function(a){H.n(a,{func:1,ret:-1,args:[P.t,[P.f,H.aF(this,"Z",0)]]})},
$if:1}
O.co.prototype={
gk:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.T():u},
aG:function(){var u=this.b
if(u!=null)u.C(null)},
gN:function(a){var u=this.a
if(u.length>0)return C.a.gcd(u)
else return V.cq()},
dX:function(a){var u=this.a
if(a==null)C.a.h(u,V.cq())
else C.a.h(u,a)
this.aG()},
ck:function(){var u=this.a
if(u.length>0){u.pop()
this.aG()}},
sbD:function(a){this.a=H.m(a,"$ib",[V.ai],"$ab")}}
E.f0.prototype={}
E.ao.prototype={
cO:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.am(u,u.length,[H.y(u,0)]);u.B();){t=u.d
if(t.f==null)t.cO()}},
sa1:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().w(0,s.gdR())
u=s.c
if(u!=null)u.gt().h(0,s.gdR())
t=new D.J("shape",r,s.c,[F.aq])
t.b=!0
s.aj(t)}},
sa6:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().w(0,s.gdT())
u=s.f
s.f=a
if(a!=null)a.gt().h(0,s.gdT())
s.cO()
t=new D.J("technique",u,s.f,[O.by])
t.b=!0
s.aj(t)}},
sT:function(a){var u,t,s=this
if(!J.F(s.r,a)){u=s.r
if(u!=null)u.gt().w(0,s.gdP())
if(a!=null)a.gt().h(0,s.gdP())
s.r=a
t=new D.J("mover",u,a,[U.a7])
t.b=!0
s.aj(t)}},
a9:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aQ(0,b,s):null
if(!J.F(q,s.x)){u=s.x
s.x=q
t=new D.J("matrix",u,q,[V.ai])
t.b=!0
s.aj(t)}r=s.f
if(r!=null)r.a9(0,b)
for(r=s.y.a,r=new J.am(r,r.length,[H.y(r,0)]);r.B();)r.d.a9(0,b)},
ak:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.h(u.a,u.gN(u))
else C.a.h(u.a,t.n(0,u.gN(u)))
u.aG()
a.dY(r.f)
u=a.dy
s=(u&&C.a).gcd(u)
if(s!=null&&r.d!=null)s.e_(a,r)
for(u=r.y.a,u=new J.am(u,u.length,[H.y(u,0)]);u.B();)u.d.ak(a)
a.dV()
a.dx.ck()},
aj:function(a){var u=this.z
if(u!=null)u.C(a)},
M:function(){return this.aj(null)},
dS:function(a){H.j(a,"$iv")
this.e=null
this.aj(a)},
i8:function(){return this.dS(null)},
dU:function(a){this.aj(H.j(a,"$iv"))},
i9:function(){return this.dU(null)},
dQ:function(a){this.aj(H.j(a,"$iv"))},
i7:function(){return this.dQ(null)},
dO:function(a){this.aj(H.j(a,"$iv"))},
i4:function(){return this.dO(null)},
i3:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$if",[E.ao],"$af")
for(u=b.length,t=this.gdN(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cj()
o.san(null)
o.sbd(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.san(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.M()},
i6:function(a,b){var u,t
H.m(b,"$if",[E.ao],"$af")
for(u=b.gS(b),t=this.gdN();u.B();)u.gI(u).gt().w(0,t)
this.M()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sej:function(a,b){this.y=H.m(b,"$iZ",[E.ao],"$aZ")},
$ics:1}
E.hq.prototype={
eg:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aU(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.co()
t=[V.ai]
u.sbD(H.d([],t))
u.b=null
u.gt().h(0,new E.hr(s))
s.cy=u
u=new O.co()
u.sbD(H.d([],t))
u.b=null
u.gt().h(0,new E.hs(s))
s.db=u
u=new O.co()
u.sbD(H.d([],t))
u.b=null
u.gt().h(0,new E.ht(s))
s.dx=u
s.shl(H.d([],[O.by]))
u=s.dy;(u&&C.a).h(u,null)
s.shd(new H.a_([P.l,A.cz]))},
gil:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gN(s)
u=t.db
u=t.z=s.n(0,u.gN(u))
s=u}return s},
gdW:function(){var u,t=this,s=t.ch
if(s==null){s=t.gil()
u=t.dx
u=t.ch=s.n(0,u.gN(u))
s=u}return s},
ge5:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.gN(s)
u=t.dx
u=t.cx=s.n(0,u.gN(u))
s=u}return s},
dY:function(a){var u=this.dy,t=a==null?(u&&C.a).gcd(u):a;(u&&C.a).h(u,t)},
dV:function(){var u=this.dy
if(u.length>1)u.pop()},
dk:function(a){var u=a.b
if(u.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.ds(0,u))throw H.h(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)},
shl:function(a){this.dy=H.m(a,"$ib",[O.by],"$ab")},
shd:function(a){this.fr=H.m(a,"$iE",[P.l,A.cz],"$aE")}}
E.hr.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:2}
E.hs.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:2}
E.ht.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:2}
E.dL.prototype={
cJ:function(a){H.j(a,"$iv")
this.e0()},
cI:function(){return this.cJ(null)},
sbt:function(a){var u=this,t=u.d
if(t!==a){if(t!=null)t.gt().w(0,u.gcH())
u.d=a
a.gt().h(0,u.gcH())
u.cI()}},
dc:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.C(r)
u=C.c.dI(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.c.dI(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kz(C.k,s.gip())}},
e0:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.hV(this),{func:1,ret:-1,args:[P.aa]})
C.r.eK(u)
C.r.h4(u,W.kQ(t,P.aa))}},
io:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dc()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aU(r,!1)
s.y=1000*(r-s.r.a)*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aG()
r=s.db
C.a.sk(r.a,0)
r.aG()
r=s.dx
C.a.sk(r.a,0)
r.aG()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ak(p.e)}}catch(q){u=H.bG(q)
t=H.c4(q)
P.l4("Error: "+H.i(u))
P.l4("Stack: "+H.i(t))
throw H.h(u)}}}
E.hV.prototype={
$1:function(a){var u
H.l2(a)
u=this.a
if(u.ch){u.ch=!1
u.io()}},
$S:27}
Z.dX.prototype={$ina:1}
Z.d0.prototype={
ao:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bG(s)
t=P.q('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.dY.prototype={$inb:1}
Z.bp.prototype={
ac:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ao:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].ao(a)},
cs:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ak:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
ia:function(a){this.ao(a)
this.ak(a)
this.cs(a)},
i:function(a){var u,t,s,r,q=[P.l],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ax(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")},
seS:function(a){this.b=H.m(a,"$ib",[Z.bs],"$ab")},
$im2:1}
Z.d1.prototype={
sf0:function(a){this.a=H.m(a,"$iE",[P.l,Z.bp],"$aE")},
$im2:1}
Z.bs.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cy(this.c))+"'")+"]"}}
Z.bl.prototype={
gcB:function(a){var u=this.a,t=(u&$.aQ().a)!==0?3:0
if((u&$.aP().a)!==0)t+=3
if((u&$.aO().a)!==0)t+=3
if((u&$.bI().a)!==0)t+=2
if((u&$.bJ().a)!==0)t+=3
if((u&$.bH().a)!==0)t+=3
if((u&$.cX().a)!==0)t+=4
if((u&$.c7().a)!==0)++t
return(u&$.bo().a)!==0?t+4:t},
hD:function(a){var u,t=$.aQ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0)if(u===a)return t
return $.lo()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.l]),t=this.a
if((t&$.aQ().a)!==0)C.a.h(u,"Pos")
if((t&$.aP().a)!==0)C.a.h(u,"Norm")
if((t&$.aO().a)!==0)C.a.h(u,"Binm")
if((t&$.bI().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bJ().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bH().a)!==0)C.a.h(u,"Clr3")
if((t&$.cX().a)!==0)C.a.h(u,"Clr4")
if((t&$.c7().a)!==0)C.a.h(u,"Weight")
if((t&$.bo().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.f3.prototype={}
D.cj.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.n(b,u)
if(this.a==null)this.san(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
w:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.ar(u,b)
if(u===!0){u=s.a
t=(u&&C.a).w(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ar(u,b)
if(u===!0){u=s.b
t=(u&&C.a).w(u,b)||t}return t},
C:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.E(P.ki(u,!0,{func:1,ret:-1,args:[D.v]}),new D.fk(q))
u=r.b
if(u!=null){r.sbd(H.d([],[{func:1,ret:-1,args:[D.v]}]))
C.a.E(u,new D.fl(q))}return!0},
as:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}},
san:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sbd:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fk.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
if(u.b)a.$1(u)},
$S:23}
D.fl.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
if(u.b)a.$1(u)},
$S:23}
D.v.prototype={}
D.bt.prototype={}
D.bu.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.d2.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d2))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dl.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dl))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.fI.prototype={
ih:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ib:function(a){this.c=a.b
this.d.w(0,a.a)
return!1},
sfZ:function(a){this.d=H.m(a,"$ikw",[P.t],"$akw")}}
X.dq.prototype={}
X.fP.prototype={
aV:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=o.A(0,new V.U(n*m,u*t))
t=q.a.gaN()
r=new X.az(a,V.aH(),q.x,t,s)
r.b=!0
q.z=new P.aU(p,!1)
q.x=s
return r},
cj:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e9()
if(typeof u!=="number")return u.at()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aV(a,b))
return!0},
ii:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaN()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.cr(new V.O(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
ft:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dq(c,r.a.gaN(),b)
s.b=!0
t.C(s)
r.y=new P.aU(u,!1)
r.x=V.aH()}}
X.av.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.av))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.B(this.b)?"Alt+":""
return u+(H.B(this.c)?"Shift+":"")}}
X.az.prototype={}
X.hb.prototype={
bA:function(a,b,c){var u=this,t=new P.aU(Date.now(),!1),s=u.a.gaN(),r=new X.az(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cj:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bA(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e9()
if(typeof t!=="number")return t.at()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bA(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bA(a,b,!1))
return!0},
ij:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaN()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.cr(new V.O(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0},
gb2:function(){var u=this.b
return u==null?this.b=D.T():u},
gaE:function(){var u=this.c
return u==null?this.c=D.T():u},
gb5:function(){var u=this.d
return u==null?this.d=D.T():u}}
X.cr.prototype={}
X.ho.prototype={}
X.dN.prototype={}
X.hY.prototype={
aV:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.U],"$ab")
u=new P.aU(Date.now(),!1)
t=a.length>0?a[0]:V.aH()
s=q.a.gaN()
r=new X.dN(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ig:function(a){var u
H.m(a,"$ib",[V.U],"$ab")
u=this.b
if(u==null)return!1
u.C(this.aV(a,!0))
return!0},
ic:function(a){var u
H.m(a,"$ib",[V.U],"$ab")
u=this.c
if(u==null)return!1
u.C(this.aV(a,!0))
return!0},
ie:function(a){var u
H.m(a,"$ib",[V.U],"$ab")
u=this.d
if(u==null)return!1
u.C(this.aV(a,!1))
return!0}}
X.dS.prototype={
gaN:function(){var u=this.a,t=C.j.gdr(u).c
t.toString
u=C.j.gdr(u).d
u.toString
return V.ku(0,0,t,u)},
cW:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dl(u,new X.av(t,a.altKey,a.shiftKey))},
aK:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
bV:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
ay:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.U(s-q,r-u)},
aW:function(a){return new V.O(a.movementX,a.movementY)},
bO:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.U])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=C.c.al(r.pageX)
C.c.al(r.pageY)
p=o.left
C.c.al(r.pageX)
C.a.h(n,new V.U(q-p,C.c.al(r.pageY)-o.top))}return n},
av:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.d2(u,new X.av(t,a.altKey,a.shiftKey))},
bE:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fm:function(a){this.f=!0},
fa:function(a){this.f=!1},
fg:function(a){H.j(a,"$iad")
if(H.B(this.f)&&this.bE(a))a.preventDefault()},
fq:function(a){var u
H.j(a,"$ib_")
if(!H.B(this.f))return
u=this.cW(a)
this.b.ih(u)},
fo:function(a){var u
H.j(a,"$ib_")
if(!H.B(this.f))return
u=this.cW(a)
this.b.ib(u)},
fv:function(a){var u,t,s,r,q=this
H.j(a,"$iad")
u=q.a
u.focus()
q.f=!0
q.aK(a)
if(H.B(q.x)){t=q.av(a)
s=q.aW(a)
if(q.d.cj(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.av(a)
r=q.ay(a)
if(q.c.cj(t,r))a.preventDefault()},
fB:function(a){var u,t,s,r=this
H.j(a,"$iad")
r.aK(a)
u=r.av(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ay(a)
if(r.c.b7(u,s))a.preventDefault()},
fk:function(a){var u,t,s,r=this
H.j(a,"$iad")
if(!r.bE(a)){r.aK(a)
u=r.av(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ay(a)
if(r.c.b7(u,s))a.preventDefault()}},
fz:function(a){var u,t,s,r=this
H.j(a,"$iad")
r.aK(a)
u=r.av(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ay(a)
if(r.c.b6(u,s))a.preventDefault()},
fi:function(a){var u,t,s,r=this
H.j(a,"$iad")
if(!r.bE(a)){r.aK(a)
u=r.av(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ay(a)
if(r.c.b6(u,s))a.preventDefault()}},
fD:function(a){var u,t,s=this
H.j(a,"$ibc")
s.aK(a)
u=new V.O((a&&C.q).ghN(a),C.q.ghO(a)).m(0,180)
if(H.B(s.x)){if(s.d.ii(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.ay(a)
if(s.c.ij(u,t))a.preventDefault()},
fF:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.av(s.y)
t=s.ay(s.y)
s.d.ft(u,t,r)}},
fV:function(a){var u,t=this
H.j(a,"$iaN")
t.a.focus()
t.f=!0
t.bV(a)
u=t.bO(a)
if(t.e.ig(u))a.preventDefault()},
fR:function(a){var u
H.j(a,"$iaN")
this.bV(a)
u=this.bO(a)
if(this.e.ic(u))a.preventDefault()},
fT:function(a){var u
H.j(a,"$iaN")
this.bV(a)
u=this.bO(a)
if(this.e.ie(u))a.preventDefault()},
seL:function(a){this.z=H.m(a,"$ib",[[P.cB,P.Q]],"$ab")}}
D.d9.prototype={$iac:1,$ics:1}
D.ac.prototype={$ics:1}
D.dm.prototype={
cK:function(a){var u=this.x
if(u!=null)u.C(a)},
d4:function(a){var u=this.y
if(u!=null)u.C(a)},
fs:function(){return this.d4(null)},
fH:function(a){var u,t,s
H.m(a,"$if",[D.ac],"$af")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.eE(s))return!1}return!0},
f4:function(a,b){var u,t,s,r,q=D.ac
H.m(b,"$if",[q],"$af")
for(u=b.length,t=this.gd3(),s=0;s<b.length;b.length===u||(0,H.x)(b),++s){r=H.j(b[s],"$iac")
r.gt().h(0,t)}q=new D.bt([q])
q.b=!0
this.cK(q)},
fL:function(a,b){var u,t,s,r=D.ac
H.m(b,"$if",[r],"$af")
for(u=b.gS(b),t=this.gd3();u.B();){s=u.gI(u)
C.a.w(this.e,s)
s.gt().w(0,t)}r=new D.bu([r])
r.b=!0
this.cK(r)},
eE:function(a){var u=C.a.ar(this.e,a)
return u},
sek:function(a){this.e=H.m(a,"$ib",[D.d9],"$ab")},
sfW:function(a){this.f=H.m(a,"$ib",[D.dB],"$ab")},
sel:function(a){this.r=H.m(a,"$ib",[D.dH],"$ab")},
$af:function(){return[D.ac]},
$aZ:function(){return[D.ac]}}
D.dB.prototype={$iac:1,$ics:1}
D.dH.prototype={$iac:1,$ics:1}
V.a3.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.M.prototype={
cq:function(a){var u=this
return H.d([u.a,u.b,u.c,u.d],[P.z])},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.fj.prototype={}
V.dv.prototype={
a2:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dv))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.c3(H.d([q.a,q.d,q.r],p),3,0),n=V.c3(H.d([q.b,q.e,q.x],p),3,0),m=V.c3(H.d([q.c,q.f,q.y],p),3,0)
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
a2:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
dK:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.cq()
u=1/b1
t=-n
s=-a0
return V.b1((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b1(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cr:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a0(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ai))return!1
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
i:function(a){return this.J()},
D:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.c3(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.c3(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.c3(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.c3(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
J:function(){return this.D("")}}
V.U.prototype={
A:function(a,b){return new V.U(this.a+b.a,this.b+b.b)},
F:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
m:function(a,b){if(Math.abs(b-0)<$.K().a)return V.aH()
return new V.U(this.a/b,this.b/b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.a0.prototype={
A:function(a,b){return new V.a0(this.a+b.a,this.b+b.b,this.c+b.c)},
F:function(a,b){return new V.a0(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){if(Math.abs(b-0)<$.K().a)return V.kp()
return new V.a0(this.a/b,this.b/b,this.c/b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.aA.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aA))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.dE.prototype={
gZ:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dE))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.O.prototype={
b4:function(a){return Math.sqrt(this.v(this))},
v:function(a){var u,t,s=this.a,r=a.a
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
return new V.O(t*b,u*b)},
m:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.kC
return u==null?$.kC=new V.O(0,0):u}u=this.a
if(typeof u!=="number")return u.m()
t=this.b
if(typeof t!=="number")return t.m()
return new V.O(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=this.a
s=$.K()
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
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.D.prototype={
b4:function(a){return Math.sqrt(this.v(this))},
v:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ce:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.D(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b_:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.D(-this.a,-this.b,-this.c)},
n:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
m:function(a,b){if(Math.abs(b-0)<$.K().a)return V.c0()
return new V.D(this.a/b,this.b/b,this.c/b)},
dL:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bk.prototype={
b4:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
m:function(a,b){var u,t=this
if(Math.abs(b-0)<$.K().a){u=$.kH
return u==null?$.kH=new V.bk(0,0,0,0):u}return new V.bk(t.a/b,t.b/b,t.c/b,t.d/b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bk))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
U.f4.prototype={
bw:function(a){var u=V.n9(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.T():u},
L:function(a){var u=this.y
if(u!=null)u.C(a)},
scu:function(a,b){},
scf:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bw(u)}s=new D.J("maximumLocation",s,t.b,[P.z])
s.b=!0
t.L(s)}},
sci:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bw(u)}s=new D.J("minimumLocation",s,t.c,[P.z])
s.b=!0
t.L(s)}},
sY:function(a,b){var u,t=this
b=t.bw(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.J("location",u,b,[P.z])
u.b=!0
t.L(u)}},
scg:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.J("maximumVelocity",r,a,[P.z])
r.b=!0
s.L(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.J("velocity",t,a,[P.z])
t.b=!0
u.L(t)}},
sc5:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.J("dampening",u,a,[P.z])
u.b=!0
this.L(u)}},
a9:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.d6.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.T():u},
sN:function(a,b){var u,t,s,r=this
if(b==null)b=V.cq()
if(!J.F(r.a,b)){u=r.a
r.a=b
t=new D.J("matrix",u,b,[V.ai])
t.b=!0
s=r.b
if(s!=null)s.C(t)}},
aQ:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d6))return!1
return J.F(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.cm.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.T():u},
L:function(a){var u
H.j(a,"$iv")
u=this.e
if(u!=null)u.C(a)},
a5:function(){return this.L(null)},
en:function(a,b){var u,t,s,r,q,p,o,n=U.a7
H.m(b,"$if",[n],"$af")
for(u=b.length,t=this.gaJ(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.san(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bt([n])
n.b=!0
this.L(n)},
fJ:function(a,b){var u,t,s=U.a7
H.m(b,"$if",[s],"$af")
for(u=b.gS(b),t=this.gaJ();u.B();)u.gI(u).gt().w(0,t)
s=new D.bu([s])
s.b=!0
this.L(s)},
aQ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aa()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.am(r,r.length,[H.y(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.aQ(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.cq():u
r=s.e
if(r!=null)r.as(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cm))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.F(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$af:function(){return[U.a7]},
$aZ:function(){return[U.a7]},
$ia7:1}
U.a7.prototype={}
U.dT.prototype={
gt:function(){var u=this.cy
return u==null?this.cy=D.T():u},
L:function(a){var u
H.j(a,"$iv")
u=this.cy
if(u!=null)u.C(a)},
a5:function(){return this.L(null)},
aZ:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gb2().h(0,u.gbF())
u.a.c.gb5().h(0,u.gbH())
u.a.c.gaE().h(0,u.gbJ())
return!0},
bG:function(a){var u=this
H.j(a,"$iv")
if(!J.F(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bI:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.j(a,"$iv"),"$iaz")
if(!H.B(n.y))return
if(H.B(n.x)){u=a.d.F(0,a.y)
u=new V.O(u.a,u.b)
u=u.v(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.B(n.d)){u=a.c
t=a.d.F(0,a.y)
u=new V.O(t.a,t.b).n(0,2).m(0,u.gZ())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.O(s.a,s.b).n(0,2).m(0,u.gZ())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sY(0,-q*p+o)
n.b.sR(0)
t=t.F(0,a.z)
n.Q=new V.O(t.a,t.b).n(0,2).m(0,u.gZ())}n.a5()},
bK:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.B(r.y))return
r.y=!1
if(H.B(r.x))return
u=r.Q
if(u.v(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sR(t*10*s)
r.a5()}},
aQ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.aa()
if(q<p){r.ch=p
u=b.y
r.b.a9(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.b1(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia7:1}
U.dU.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.T():u},
L:function(a){var u
H.j(a,"$iv")
u=this.fx
if(u!=null)u.C(a)},
a5:function(){return this.L(null)},
aZ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gb2().h(0,s.gbF())
s.a.c.gb5().h(0,s.gbH())
s.a.c.gaE().h(0,s.gbJ())
u=s.a.d
t=u.f
u=t==null?u.f=D.T():t
u.h(0,s.geX())
u=s.a.d
t=u.d
u=t==null?u.d=D.T():t
u.h(0,s.geZ())
u=s.a.e
t=u.b
u=t==null?u.b=D.T():t
u.h(0,s.ghr())
u=s.a.e
t=u.d
u=t==null?u.d=D.T():t
u.h(0,s.ghp())
u=s.a.e
t=u.c
u=t==null?u.c=D.T():t
u.h(0,s.ghn())
return!0},
am:function(a){var u=a.a,t=a.b
if(H.B(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.B(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.O(u,t)},
bG:function(a){var u=this
a=H.r(H.j(a,"$iv"),"$iaz")
if(!J.F(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bI:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.j(a,"$iv"),"$iaz")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.F(0,a.y)
u=new V.O(u.a,u.b)
u=u.v(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.am(new V.O(t.a,t.b).n(0,2).m(0,u.gZ()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.am(new V.O(s.a,s.b).n(0,2).m(0,u.gZ()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.F(0,a.z)
n.dx=n.am(new V.O(t.a,t.b).n(0,2).m(0,u.gZ()))}n.a5()},
bK:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.v(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sR(-t*10*u)
r.a5()}},
eY:function(a){var u=this
if(H.r(H.j(a,"$iv"),"$idq").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f_:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.j(a,"$iv"),"$iaz")
if(!J.F(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.am(new V.O(s.a,s.b).n(0,2).m(0,u.gZ()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.F(0,a.z)
n.dx=n.am(new V.O(t.a,t.b).n(0,2).m(0,u.gZ()))
n.a5()},
hs:function(a){var u=this
H.j(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hq:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.j(a,"$iv"),"$idN")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.F(0,a.y)
u=new V.O(u.a,u.b)
u=u.v(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.am(new V.O(t.a,t.b).n(0,2).m(0,u.gZ()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.am(new V.O(s.a,s.b).n(0,2).m(0,u.gZ()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.F(0,a.z)
n.dx=n.am(new V.O(t.a,t.b).n(0,2).m(0,u.gZ()))}n.a5()},
ho:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.v(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sR(-t*10*u)
r.a5()}},
aQ:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.aa()
if(s<r){t.dy=r
u=b.y
t.c.a9(0,u)
t.b.a9(0,u)
t.fr=V.cp(t.b.d).n(0,V.jN(t.c.d))}return t.fr},
$ia7:1}
U.dV.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.T():u},
L:function(a){var u=this.r
if(u!=null)u.C(a)},
aZ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.T():t
t=r.gf1()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.T():s).h(0,t)
return!0},
f2:function(a){var u,t,s,r,q=this
H.j(a,"$iv")
if(!J.F(q.b,q.a.b.c))return
H.r(a,"$icr")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.J("zoom",u,r,[P.z])
u.b=!0
q.L(u)}},
aQ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bR(u,u,u,1)}return t.f},
$ia7:1}
M.d5.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.T():u},
a4:function(a){var u
H.j(a,"$iv")
u=this.r
if(u!=null)u.C(a)},
bv:function(){return this.a4(null)},
fN:function(a,b){var u,t,s,r,q,p,o,n=M.ap
H.m(b,"$if",[n],"$af")
for(u=b.length,t=this.ga8(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.san(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bt([n])
n.b=!0
this.a4(n)},
fP:function(a,b){var u,t,s=M.ap
H.m(b,"$if",[s],"$af")
for(u=b.gS(b),t=this.ga8();u.B();)u.gI(u).gt().w(0,t)
s=new D.bu([s])
s.b=!0
this.a4(s)},
ak:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.am(u,u.length,[H.y(u,0)]);u.B();){t=u.d
if(t!=null)t.ak(a)}s.f=!1},
$af:function(){return[M.ap]},
$aZ:function(){return[M.ap]},
$iap:1}
M.dd.prototype={
a4:function(a){var u
H.j(a,"$iv")
u=this.y
if(u!=null)u.C(a)},
bv:function(){return this.a4(null)},
fc:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.m(b,"$if",[n],"$af")
for(u=b.length,t=this.ga8(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cj()
o.san(null)
o.sbd(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.san(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bt([n])
n.b=!0
this.a4(n)},
fe:function(a,b){var u,t,s=E.ao
H.m(b,"$if",[s],"$af")
for(u=b.gS(b),t=this.ga8();u.B();)u.gI(u).gt().w(0,t)
s=new D.bu([s])
s.b=!0
this.a4(s)},
saz:function(a){var u,t,s=this
if(a==null)a=X.bS()
u=s.b
if(u!==a){if(u!=null)u.gt().w(0,s.ga8())
t=s.b
s.b=a
a.gt().h(0,s.ga8())
u=new D.J("camera",t,s.b,[X.d3])
u.b=!0
s.a4(u)}},
sbq:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gt().w(0,t.ga8())
u=t.c
t.c=b
b.gt().h(0,t.ga8())
s=new D.J("target",u,t.c,[X.dJ])
s.b=!0
t.a4(s)}},
sa6:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().w(0,t.ga8())
u=t.d
t.d=a
if(a!=null)a.gt().h(0,t.ga8())
s=new D.J("technique",u,t.d,[O.by])
s.b=!0
t.a4(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.T():u},
ak:function(a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
a3.dY(a2.d)
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
if(typeof s!=="number")return H.C(s)
o=C.c.al(p*s)
p=q.b
if(typeof r!=="number")return H.C(r)
n=C.c.al(p*r)
p=C.c.al(q.c*s)
a3.c=p
q=C.c.al(q.d*r)
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
h=V.b1(-i/(t/q),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t=u.a
if(t!=null){g=t.a
if(g!=null)h=g.n(0,h)}a3.cy.dX(h)
t=$.kn
if(t==null){t=V.kp()
q=$.kE
if(q==null)q=$.kE=new V.D(0,1,0)
p=V.kG()
f=p.m(0,Math.sqrt(p.v(p)))
q=q.b_(f)
e=q.m(0,Math.sqrt(q.v(q)))
d=f.b_(e)
c=new V.D(t.a,t.b,t.c)
b=e.O(0).v(c)
a=d.O(0).v(c)
a0=f.O(0).v(c)
t=V.b1(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.kn=t
a1=t}else a1=t
u=u.b
if(u!=null){g=u.a
if(g!=null)a1=g.n(0,a1)}a3.db.dX(a1)
u=a2.d
if(u!=null)u.a9(0,a3)
for(u=a2.e.a,u=new J.am(u,u.length,[H.y(u,0)]);u.B();)u.d.a9(0,a3)
for(u=a2.e.a,u=new J.am(u,u.length,[H.y(u,0)]);u.B();)u.d.ak(a3)
a2.b.toString
a3.cy.ck()
a3.db.ck()
a2.c.toString
a3.dV()},
seD:function(a,b){this.e=H.m(b,"$iZ",[E.ao],"$aZ")},
$iap:1}
M.ap.prototype={}
A.cY.prototype={}
A.eW.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dv:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.af.prototype={
ga0:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.af))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.dg.prototype={}
A.ds.prototype={
ef:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bx("")
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
A.ms(c0,u)
A.mu(c0,u)
A.mt(c0,u)
A.mw(c0,u)
A.mx(c0,u)
A.mv(c0,u)
A.my(c0,u)
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
b5.dJ(0,s.charCodeAt(0)==0?s:s,A.mr(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.r(b5.y.U(0,"invViewMat"),"$ial")
if(t)b5.dy=H.r(b5.y.U(0,"objMat"),"$ial")
if(r)b5.fr=H.r(b5.y.U(0,"viewObjMat"),"$ial")
b5.fy=H.r(b5.y.U(0,"projViewObjMat"),"$ial")
if(c0.ry)b5.k1=H.r(b5.y.U(0,"txt2DMat"),"$icE")
if(c0.x1)b5.k2=H.r(b5.y.U(0,"txtCubeMat"),"$ial")
if(c0.x2)b5.k3=H.r(b5.y.U(0,"colorMat"),"$ial")
b5.sey(H.d([],[A.al]))
t=c0.y2
if(t>0){b5.k4=H.j(b5.y.U(0,"bendMatCount"),"$iaB")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.u(P.q(b7+q+b8));(s&&C.a).h(s,H.r(m,"$ial"))}}if(c0.a.a)b5.r2=H.r(b5.y.U(0,"emissionClr"),"$iV")
if(c0.b.a)b5.x1=H.r(b5.y.U(0,"ambientClr"),"$iV")
if(c0.c.a)b5.y2=H.r(b5.y.U(0,"diffuseClr"),"$iV")
if(c0.d.a)b5.dz=H.r(b5.y.U(0,"invDiffuseClr"),"$iV")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dB=H.r(b5.y.U(0,"shininess"),"$ia8")
if(t)b5.dA=H.r(b5.y.U(0,"specularClr"),"$iV")}if(c0.cy){b5.dC=H.r(b5.y.U(0,"envSampler"),"$ibZ")
if(c0.r.a)b5.dD=H.r(b5.y.U(0,"reflectClr"),"$iV")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dE=H.r(b5.y.U(0,"refraction"),"$ia8")
if(t)b5.dF=H.r(b5.y.U(0,"refractClr"),"$iV")}}if(c0.y.a)b5.dG=H.r(b5.y.U(0,"alpha"),"$ia8")
t=P.t
s=[t,A.aB]
b5.seI(new H.a_(s))
b5.seJ(new H.a_([t,[P.b,A.bW]]))
b5.sfX(new H.a_(s))
b5.sfY(new H.a_([t,[P.b,A.bX]]))
b5.shh(new H.a_(s))
b5.shi(new H.a_([t,[P.b,A.c_]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.bW],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.at()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.u(P.q(b7+g+b8))
H.r(m,"$iV")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.u(P.q(b7+g+b8))
H.r(f,"$iV")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.u(P.q(b7+g+b8))
H.r(e,"$iV")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.u(P.q(b7+g+b8))
H.r(m,"$iV")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.u(P.q(b7+g+b8))
H.r(f,"$iV")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.u(P.q(b7+o+b8))
H.r(e,"$ibY")
a=e}else a=b6
C.a.h(h,new A.bW(b,c,d,m,f,a))}b5.c7.l(0,j,h)
q=b5.c6
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.u(P.q(b7+o+b8))
q.l(0,j,H.j(m,"$iaB"))}for(t=c0.Q,s=t.length,r=[A.bX],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.u(P.q(b7+o+b8))
H.r(m,"$iV")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.u(P.q(b7+o+b8))
H.r(f,"$iV")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.u(P.q(b7+o+b8))
H.r(e,"$iV")
if(typeof j!=="number")return j.at()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.u(P.q(b7+o+b8))
H.r(a0,"$icE")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.u(P.q(b7+o+b8))
H.r(a0,"$ibZ")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.u(P.q(b7+o+b8))
H.r(a0,"$ibZ")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.u(P.q(b7+o+b8))
H.r(a2,"$ibA")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.u(P.q(b7+o+b8))
H.r(a0,"$ia8")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.u(P.q(b7+o+b8))
H.r(a2,"$ia8")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.u(P.q(b7+o+b8))
H.r(a5,"$ia8")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.bX(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c9.l(0,j,h)
q=b5.c8
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.u(P.q(b7+o+b8))
q.l(0,j,H.j(m,"$iaB"))}for(t=c0.ch,s=t.length,r=[A.c_],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.u(P.q(b7+o+b8))
H.r(m,"$iV")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.u(P.q(b7+o+b8))
H.r(f,"$iV")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.u(P.q(b7+o+b8))
H.r(e,"$iV")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.u(P.q(b7+o+b8))
H.r(a0,"$iV")
if(typeof j!=="number")return j.at()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.u(P.q(b7+o+b8))
H.r(a2,"$iV")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.u(P.q(b7+o+b8))
H.r(a5,"$iV")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.u(P.q(b7+o+b8))
H.r(a9,"$ia8")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.u(P.q(b7+o+b8))
H.r(b0,"$ia8")
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
if(a2==null)H.u(P.q(b7+g+b8))
H.r(a2,"$ibA")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.u(P.q(b7+g+b8))
H.r(a2,"$ia8")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.u(P.q(b7+g+b8))
H.r(a5,"$ia8")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.u(P.q(b7+g+b8))
H.r(a2,"$ia8")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.u(P.q(b7+g+b8))
H.r(a5,"$ia8")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.u(P.q(b7+g+b8))
H.r(a9,"$ia8")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.u(P.q(b7+g+b8))
H.r(a2,"$ibY")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.u(P.q(b7+o+b8))
H.r(a2,"$ibY")
a3=a2}else a3=b6
C.a.h(h,new A.c_(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cb.l(0,j,h)
q=b5.ca
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.u(P.q(b7+o+b8))
q.l(0,j,H.j(m,"$iaB"))}}},
h8:function(a,b){},
sey:function(a){this.r1=H.m(a,"$ib",[A.al],"$ab")},
seI:function(a){this.c6=H.m(a,"$iE",[P.t,A.aB],"$aE")},
seJ:function(a){this.c7=H.m(a,"$iE",[P.t,[P.b,A.bW]],"$aE")},
sfX:function(a){this.c8=H.m(a,"$iE",[P.t,A.aB],"$aE")},
sfY:function(a){this.c9=H.m(a,"$iE",[P.t,[P.b,A.bX]],"$aE")},
shh:function(a){this.ca=H.m(a,"$iE",[P.t,A.aB],"$aE")},
shi:function(a){this.cb=H.m(a,"$iE",[P.t,[P.b,A.c_]],"$aE")}}
A.aG.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aI.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aK.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.fW.prototype={
i:function(a){return this.b3}}
A.bW.prototype={}
A.bX.prototype={}
A.c_.prototype={}
A.cz.prototype={
cG:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dJ:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cX(b,35633)
r.f=r.cX(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.B(H.kU(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.q("Failed to link shader: "+H.i(s)))}r.ha()
r.hc()},
ao:function(a){a.a.useProgram(this.r)
this.x.hQ()},
cX:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.kU(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.q("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
ha:function(){var u,t,s,r=this,q=H.d([],[A.cY]),p=r.a,o=H.a9(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cY(p,t.name,s))}r.x=new A.eW(q)},
hc:function(){var u,t,s,r=this,q=H.d([],[A.dO]),p=r.a,o=H.a9(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hM(t.type,t.size,t.name,s))}r.y=new A.ia(q)},
aI:function(a,b,c){var u=this.a
if(a===1)return new A.aB(u,b,c)
else return A.jR(u,this.r,b,a,c)},
eF:function(a,b,c){var u=this.a
if(a===1)return new A.bY(u,b,c)
else return A.jR(u,this.r,b,a,c)},
eG:function(a,b,c){var u=this.a
if(a===1)return new A.bZ(u,b,c)
else return A.jR(u,this.r,b,a,c)},
bg:function(a,b){return new P.e6(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
hM:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aI(b,c,d)
case 5121:return u.aI(b,c,d)
case 5122:return u.aI(b,c,d)
case 5123:return u.aI(b,c,d)
case 5124:return u.aI(b,c,d)
case 5125:return u.aI(b,c,d)
case 5126:return new A.a8(u.a,c,d)
case 35664:return new A.i6(u.a,c,d)
case 35665:return new A.V(u.a,c,d)
case 35666:return new A.bA(u.a,c,d)
case 35667:return new A.i7(u.a,c,d)
case 35668:return new A.i8(u.a,c,d)
case 35669:return new A.i9(u.a,c,d)
case 35674:return new A.ib(u.a,c,d)
case 35675:return new A.cE(u.a,c,d)
case 35676:return new A.al(u.a,c,d)
case 35678:return u.eF(b,c,d)
case 35680:return u.eG(b,c,d)
case 35670:throw H.h(u.bg("BOOL",c))
case 35671:throw H.h(u.bg("BOOL_VEC2",c))
case 35672:throw H.h(u.bg("BOOL_VEC3",c))
case 35673:throw H.h(u.bg("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.dO.prototype={}
A.ia.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
U:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.J()},
J:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aB.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.i7.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.i8.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.i5.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shu:function(a){H.m(a,"$ib",[P.t],"$ab")}}
A.a8.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.i6.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.V.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.bA.prototype={
cv:function(a){return C.b.ct(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.ib.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cE.prototype={
a7:function(a){var u=new Float32Array(H.cS(H.m(a,"$ib",[P.z],"$ab")))
C.b.e3(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.al.prototype={
a7:function(a){var u=new Float32Array(H.cS(H.m(a,"$ib",[P.z],"$ab")))
C.b.e4(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.bY.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.bZ.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.j7.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ce(s.b,b).ce(s.d.ce(s.c,b),c)
a.sY(0,new V.a0(r.a,r.b,r.c))
a.scp(r.m(0,Math.sqrt(r.v(r))))
s=1-b
u=1-c
u=new V.aA(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.F(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.M()}},
$S:32}
F.jf.prototype={
$1:function(a){return 1},
$S:33}
F.X.prototype={
b0:function(){var u=this
if(!u.gb1()){C.a.w(u.a.a.d.b,u)
u.a.a.M()}u.bQ()
u.bR()
u.h1()},
aX:function(a){this.a=a
C.a.h(a.d.b,this)},
aY:function(a){this.b=a
C.a.h(a.d.c,this)},
de:function(a){this.c=a
C.a.h(a.d.d,this)},
bQ:function(){var u=this.a
if(u!=null){C.a.w(u.d.b,this)
this.a=null}},
bR:function(){var u=this.b
if(u!=null){C.a.w(u.d.c,this)
this.b=null}},
h1:function(){var u=this.c
if(u!=null){C.a.w(u.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
ex:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c0()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dL())return
return s.m(0,Math.sqrt(s.v(s)))},
eC:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.D(r.a,r.b,r.c)
s=r.m(0,Math.sqrt(r.v(r)))
r=t.F(0,q)
r=new V.D(r.a,r.b,r.c)
r=s.b_(r.m(0,Math.sqrt(r.v(r))))
return r.m(0,Math.sqrt(r.v(r)))},
c1:function(){var u,t=this
if(t.d!=null)return!0
u=t.ex()
if(u==null){u=t.eC()
if(u==null)return!1}t.d=u
t.a.a.M()
return!0},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c0()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dL())return
return s.m(0,Math.sqrt(s.v(s)))},
eB:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.F(0,g)
l=new V.D(l.a,l.b,l.c)
q=l.m(0,Math.sqrt(l.v(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.F(0,g)
l=new V.a0(l.a*p,l.b*p,l.c*p).A(0,g).F(0,j)
l=new V.D(l.a,l.b,l.c)
q=l.m(0,Math.sqrt(l.v(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.m(0,Math.sqrt(l.v(l)))
l=o.b_(q)
l=l.m(0,Math.sqrt(l.v(l))).b_(o)
q=l.m(0,Math.sqrt(l.v(l)))}return q},
c0:function(){var u,t=this
if(t.e!=null)return!0
u=t.ew()
if(u==null){u=t.eB()
if(u==null)return!1}t.e=u
t.a.a.M()
return!0},
aH:function(a,b){var u=b.a
if(u==null)throw H.h(P.q("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.h(P.q("May not replace a face's vertex with a vertex attached to a different shape."))},
ghK:function(a){var u=this
if(J.F(u.a,u.b))return!0
if(J.F(u.b,u.c))return!0
if(J.F(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
D:function(a){var u,t,s=this
if(s.gb1())return a+"disposed"
u=a+C.d.ae(J.ax(s.a.e),0)+", "+C.d.ae(J.ax(s.b.e),0)+", "+C.d.ae(J.ax(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
J:function(){return this.D("")}}
F.fm.prototype={}
F.hF.prototype={
aP:function(a,b,c){var u,t=b.a
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
F.ag.prototype={
b0:function(){var u=this
if(!u.gb1()){C.a.w(u.a.a.c.b,u)
u.a.a.M()}u.bQ()
u.bR()},
aX:function(a){this.a=a
C.a.h(a.c.b,this)},
aY:function(a){this.b=a
C.a.h(a.c.c,this)},
bQ:function(){var u=this.a
if(u!=null){C.a.w(u.c.b,this)
this.a=null}},
bR:function(){var u=this.b
if(u!=null){C.a.w(u.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
aH:function(a,b){var u=b.a
if(u==null)throw H.h(P.q("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.h(P.q("May not replace a line's vertex with a vertex attached to a different shape."))},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
D:function(a){if(this.gb1())return a+"disposed"
return a+C.d.ae(J.ax(this.a.e),0)+", "+C.d.ae(J.ax(this.b.e),0)},
J:function(){return this.D("")}}
F.fK.prototype={}
F.i4.prototype={
aP:function(a,b,c){var u,t=b.a
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
F.bw.prototype={
h9:function(a){this.a=a
C.a.h(a.b.b,this)},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.d.ae(J.ax(u.e),0)},
J:function(){return this.D("")}}
F.aq.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.T():u},
aC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.p()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){r=g[s]
h.a.h(0,r.c3())}h.a.p()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
F.lL(n)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.jM(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.ck(l,k,i)}g=h.e
if(g!=null)g.as(0)},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.as(0)
return u},
aM:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aM()||!1
if(!t.a.aM())u=!1
s=t.e
if(s!=null)s.as(0)
return u},
bi:function(){var u=this.e
if(u!=null)++u.d
this.a.bi()
u=this.e
if(u!=null)u.as(0)
return!0},
hS:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.c(t,u)
s=t[u]
if(b.aP(0,a,s))return s}return},
h3:function(a,b){var u,t,s,r,q,p
H.m(b,"$ib",[F.R],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.x)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.u(P.q("May not replace a face's vertex when the point has been disposed."))
if(J.F(q,s)){r.aH(s,a)
q=r.a
if(q!=null){C.a.w(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.F(r.b,s)){r.aH(s,a)
q=r.b
if(q!=null){C.a.w(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.F(r.c,s)){r.aH(s,a)
q=r.c
if(q!=null){C.a.w(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.C(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.u(P.q("May not replace a line's vertex when the point has been disposed."))
if(J.F(q,s)){r.aH(s,a)
q=r.a
if(q!=null){C.a.w(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.F(r.b,s)){r.aH(s,a)
q=r.b
if(q!=null){C.a.w(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.C(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.u(P.q("May not replace a point's vertex when the point has been disposed."))
if(J.F(q,s)){if(a.a==null)H.u(P.q("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.w(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.C(null)}}this.a.w(0,s)}},
i1:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.d(n.slice(0),[H.y(n,0)])
for(n=[F.R];u.length!==0;){t=C.a.ghU(u)
C.a.dZ(u,0)
if(t!=null){s=H.d([],n)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.aP(0,t,q)){C.a.h(s,q)
C.a.dZ(u,r)}}if(s.length>1){p=b.aC(s)
o.h3(p,s)
C.a.h(u,p)}}}o.a.p()
o.c.cl()
o.d.cl()
o.b.im()
o.c.cm(new F.i4())
o.d.cm(new F.hF())
n=o.e
if(n!=null)n.as(0)},
dn:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aQ()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.aP().a)!==0)++s
if((t&$.aO().a)!==0)++s
if((t&$.bI().a)!==0)++s
if((t&$.bJ().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.cX().a)!==0)++s
if((t&$.c7().a)!==0)++s
if((t&$.bo().a)!==0)++s
r=a3.gcB(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.d0])
for(n=0,m=0;m<s;++m){l=a3.hD(m)
k=l.gcB(l)
C.a.l(o,m,new Z.d0(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].i_(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cS(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bp(new Z.dX(a0,f),o,a3)
e.seS(H.d([],[Z.bs]))
if(a.b.b.length!==0){t=P.t
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.p()
C.a.h(d,c.e)}b=Z.jS(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bs(0,d.length,b))}if(a.c.b.length!==0){t=P.t
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.p()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.p()
C.a.h(d,c.e)}b=Z.jS(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bs(1,d.length,b))}if(a.d.b.length!==0){t=P.t
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.p()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.p()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.p()
C.a.h(d,c.e)}b=Z.jS(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bs(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.l])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.D(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.D(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.D(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.D(t))}return C.a.u(s,"\n")},
M:function(){var u=this.e
if(u!=null)u.C(null)},
$ing:1}
F.hz.prototype={
di:function(a,b,c,d){var u,t=this.a
t.a.h(0,b)
t.a.h(0,c)
t.a.h(0,d)
u=new F.X()
t=b.a
if(t==null)H.u(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.u(P.q("May not create a face with vertices attached to different shapes."))
u.aX(b)
u.aY(c)
u.de(d)
C.a.h(u.a.a.d.b,u)
u.a.a.M()
return u},
hz:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.R],"$ab")
u=H.d([],[F.X])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.c(a,p)
p=a[p]
if(q>=o)return H.c(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.ck(s,p,o))}}return u},
hA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.R],"$ab")
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
C.a.h(u,F.ck(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ck(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ck(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ck(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cm:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aP(0,p,n)){p.b0()
break}}}}},
cl:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.ghK(s)
if(t)s.b0()}},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].c1())s=!1
return s},
aM:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].c0())s=!1
return s},
i:function(a){return this.J()},
D:function(a){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(a))
return C.a.u(r,"\n")},
J:function(){return this.D("")},
seM:function(a){this.b=H.m(a,"$ib",[F.X],"$ab")}}
F.hA.prototype={
bW:function(a,b,c){var u,t=this.a
t.a.h(0,b)
t.a.h(0,c)
t=new F.ag()
if(b==null)H.u(P.q("May not create a line with a null start vertex."))
if(c==null)H.u(P.q("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.u(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.u(P.q("May not create a line with vertices attached to different shapes."))
t.aX(b)
t.aY(c)
C.a.h(t.a.a.c.b,t)
t.a.a.M()
return t},
dj:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.R],"$ab")
u=H.d([],[F.ag])
t=a.length
if(t>0){for(s=this.a,r=1;r<t;++r){q=r-1
p=a.length
if(q>=p)return H.c(a,q)
q=a[q]
if(r>=p)return H.c(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.jM(q,p))}s=t-1
q=a.length
if(s>=q)return H.c(a,s)
s=a[s]
if(0>=q)return H.c(a,0)
C.a.h(u,this.bW(0,s,a[0]))}return u},
hB:function(a){var u,t,s,r,q
H.m(a,"$ib",[F.R],"$ab")
u=H.d([],[F.ag])
for(t=this.a,s=1;s<64;s+=2){r=a[s-1]
q=a[s]
t.a.h(0,r)
t.a.h(0,q)
C.a.h(u,F.jM(r,q))}return u},
gk:function(a){return this.b.length},
cm:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aP(0,p,n)){p.b0()
break}}}}},
cl:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.F(s.a,s.b)
if(t)s.b0()}},
i:function(a){return this.J()},
D:function(a){var u,t,s=H.d([],[P.l]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].D(a+(""+u+". ")))}return C.a.u(s,"\n")},
J:function(){return this.D("")},
seT:function(a){this.b=H.m(a,"$ib",[F.ag],"$ab")}}
F.hB.prototype={
gk:function(a){return this.b.length},
im:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.w(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.C(null)}s=t.a
if(s!=null){C.a.w(s.b.b,t)
t.a=null}}}},
i:function(a){return this.J()},
D:function(a){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(a))
return C.a.u(r,"\n")},
J:function(){return this.D("")},
sbN:function(a){this.b=H.m(a,"$ib",[F.bw],"$ab")}}
F.R.prototype={
c4:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.bB(u.cx,r,o,t,s,q,p,a,n)},
c3:function(){return this.c4(null)},
sY:function(a,b){var u
if(!J.F(this.f,b)){this.f=b
u=this.a
if(u!=null)u.M()}},
sdM:function(a){var u
a=a==null?null:a.m(0,Math.sqrt(a.v(a)))
if(!J.F(this.r,a)){this.r=a
u=this.a
if(u!=null)u.M()}},
sbh:function(a){var u
a=a==null?null:a.m(0,Math.sqrt(a.v(a)))
if(!J.F(this.x,a)){this.x=a
u=this.a
if(u!=null)u.M()}},
sco:function(a){var u
if(!J.F(this.y,a)){this.y=a
u=this.a
if(u!=null)u.M()}},
scp:function(a){var u
if(!J.F(this.z,a)){this.z=a
u=this.a
if(u!=null)u.M()}},
sW:function(a,b){var u
if(!J.F(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.M()}},
se6:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.M()}},
i_:function(a){var u,t,s=this
if(a.q(0,$.aQ())){u=s.f
t=[P.z]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.aP())){u=s.r
t=[P.z]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.aO())){u=s.x
t=[P.z]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bI())){u=s.y
t=[P.z]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.q(0,$.bJ())){u=s.z
t=[P.z]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bH())){u=s.Q
t=[P.z]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.cX())){u=s.Q
if(u==null)return H.d([1,1,1,1],[P.z])
else return u.cq(0)}else if(a.q(0,$.c7()))return H.d([s.ch],[P.z])
else if(a.q(0,$.bo())){u=s.cx
t=[P.z]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.z])},
c1:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c0()
t.d.E(0,new F.iu(s))
s=s.a
t.r=s.m(0,Math.sqrt(s.v(s)))
s=t.a
if(s!=null){s.M()
s=t.a.e
if(s!=null)s.as(0)}return!0},
c0:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c0()
t.d.E(0,new F.it(s))
s=s.a
t.x=s.m(0,Math.sqrt(s.v(s)))
s=t.a
if(s!=null){s.M()
s=t.a.e
if(s!=null)s.as(0)}return!0},
dH:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.b
t.a.a.p()
t=t.e
a.a.a.p()
if(t==a.e)return s}return},
hV:function(a){var u=this.dH(a)
if(u!=null)return u
return a.dH(this)},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
D:function(a){var u,t,s=this,r="-",q=H.d([],[P.l])
C.a.h(q,C.d.ae(J.ax(s.e),0))
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
C.a.h(q,V.N(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.u(q,", ")
return a+"{"+t+"}"},
J:function(){return this.D("")}}
F.iu.prototype={
$1:function(a){var u,t
H.j(a,"$iX")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:5}
F.it.prototype={
$1:function(a){var u,t
H.j(a,"$iX")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:5}
F.ij.prototype={
p:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.M()
return!0},
hC:function(a,b,c,d,e,f,g){var u=F.bB(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
aL:function(a,b,c,d,e,f){return this.hC(a,b,c,null,d,e,f)},
V:function(a,b,c){var u=null,t=F.bB(u,u,u,new V.a0(a,b,c),u,u,u,u,0)
this.h(0,t)
return t},
gk:function(a){return this.c.length},
w:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.h(P.q("May not remove a vertex without first making it empty."))
b.a=null
C.a.w(this.c,b)
u.M()
return this.b=!0},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].c1()
return!0},
aM:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].c0()
return!0},
bi:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.m(0,Math.sqrt(p*p+o*o+n*n))
if(!J.F(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.J()},
D:function(a){var u,t,s,r
this.p()
u=H.d([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].D(a))
return C.a.u(u,"\n")},
J:function(){return this.D("")},
shv:function(a){this.c=H.m(a,"$ib",[F.R],"$ab")}}
F.ik.prototype={
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
E:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.X]})
C.a.E(u.b,b)
C.a.E(u.c,new F.il(u,b))
C.a.E(u.d,new F.im(u,b))},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
return C.a.u(r,"\n")},
seN:function(a){this.b=H.m(a,"$ib",[F.X],"$ab")},
seO:function(a){this.c=H.m(a,"$ib",[F.X],"$ab")},
seP:function(a){this.d=H.m(a,"$ib",[F.X],"$ab")}}
F.il.prototype={
$1:function(a){H.j(a,"$iX")
if(!J.F(a.a,this.a))this.b.$1(a)},
$S:5}
F.im.prototype={
$1:function(a){var u
H.j(a,"$iX")
u=this.a
if(!J.F(a.a,u)&&!J.F(a.b,u))this.b.$1(a)},
$S:5}
F.ip.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
return C.a.u(r,"\n")},
seU:function(a){this.b=H.m(a,"$ib",[F.ag],"$ab")},
seV:function(a){this.c=H.m(a,"$ib",[F.ag],"$ab")}}
F.iq.prototype={}
F.dW.prototype={
aP:function(a,b,c){return J.F(b.f,c.f)}}
F.ir.prototype={}
F.io.prototype={
aC:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
H.m(a5,"$ib",[F.R],"$ab")
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.a0(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.D(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.D(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.U(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.D(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.bk(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.bk(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.C(a)
i+=a;++j}a3=F.bB(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sY(0,a4)
else a3.sY(0,o.m(0,n))
if(p==null)a3.sdM(a4)
else a3.sdM(p.m(0,Math.sqrt(p.v(p))))
if(q==null)a3.sbh(a4)
else a3.sbh(q.m(0,Math.sqrt(q.v(q))))
if(l<=0||s==null)a3.sco(a4)
else a3.sco(s.m(0,l))
if(k<=0||t==null)a3.scp(a4)
else a3.scp(t.m(0,k))
if(m<=0||r==null)a3.sW(0,a4)
else{u=r.m(0,m)
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
a3.sW(0,new V.M(a,a0,a1,u))}if(j<=0)a3.se6(0,0)
else a3.se6(0,i/j)
return a3}}
F.is.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
return C.a.u(r,"\n")},
sbN:function(a){this.b=H.m(a,"$ib",[F.bw],"$ab")}}
O.dh.prototype={
gt:function(){var u=this.rx
return u==null?this.rx=D.T():u},
X:function(a){var u=this.rx
if(u!=null)u.C(a)},
scz:function(a){var u
if(!this.Q){this.Q=!0
u=new D.J("showFilled",!1,!0,[P.a4])
u.b=!0
this.X(u)}},
scA:function(a){var u
if(!this.ch){this.ch=!0
u=new D.J("showWireFrame",!1,!0,[P.a4])
u.b=!0
this.X(u)}},
sdt:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
s.c=a
t=new D.J("diffuse1",u,a,[V.M])
t.b=!0
s.X(t)}},
sdl:function(a){var u,t,s=this
if(!s.d.q(0,a)){u=s.d
s.d=a
t=new D.J("ambient1",u,a,[V.M])
t.b=!0
s.X(t)}},
a9:function(a,b){},
e_:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=H.j(a.fr.j(0,n),"$idg")
if(u==null){t=a.a
u=new A.dg(t,n)
u.cG(t,n)
u.dJ(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"normAttr")
u.ch=u.x.j(0,"clrAttr")
u.cx=u.x.j(0,"binmAttr")
u.cy=H.r(u.y.j(0,"lightVec"),"$iV")
u.db=H.r(u.y.j(0,"ambientClr"),"$ibA")
u.dx=H.r(u.y.j(0,"diffuseClr"),"$ibA")
u.dy=H.r(u.y.j(0,"weightScalar"),"$ia8")
u.fr=H.r(u.y.j(0,"viewMat"),"$ial")
u.fx=H.r(u.y.j(0,"viewObjMatrix"),"$ial")
u.fy=H.r(u.y.j(0,"projViewObjMatrix"),"$ial")
a.dk(u)}o.a=u}if(b.e==null){b.d.ap()
b.d.aM()
b.d.bi()
t=new Z.d1()
t.sf0(new H.a_([P.l,Z.bp]))
b.e=t}t=o.a
t.ao(a)
s=o.r2
r=t.dy
C.b.a_(r.a,r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.b.P(r.a,r.d,q,p,s)
s=a.db
s=s.gN(s)
p=t.fr
p.toString
p.a7(s.a2(0,!0))
s=a.ge5()
p=t.fx
p.toString
p.a7(s.a2(0,!0))
s=a.gdW()
t=t.fy
t.toString
t.a7(s.a2(0,!0))
t=b.e
if(t instanceof Z.d1){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
if(o.Q)o.d9(a,t,b.c,"shapeFill",o.ghe(),o.d,o.c)
s.disable(m)
s.blendFunc(1,1)
if(o.ch)o.d9(a,t,b.c,"wireFrame",o.ghw(),o.f,o.e)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dv()},
d9:function(a,b,c,d,e,f,g){var u,t
H.n(e,{func:1,ret:F.aq,args:[F.aq]})
u=b.a.j(0,d)
if(u==null){u=this.eA(a,e.$1(c))
b.a.l(0,d,u)}t=this.a
t.db.cv(f)
t.dx.cv(g)
u.ia(a)},
eA:function(a,b){var u=this,t=$.aQ(),s=$.aP(),r=b.dn(new Z.dY(a.a),new Z.bl(t.a|s.a|$.aO().a|$.bH().a))
r.ac($.aQ()).e=u.a.z.c
r.ac($.aP()).e=u.a.Q.c
r.ac($.bH()).e=u.a.ch.c
r.ac($.aO()).e=u.a.cx.c
return r},
hf:function(a){var u,t=F.aJ(),s=a.a
s.toString
u=H.n(new O.fy(t,new V.M(1,1,1,1)),{func:1,ret:-1,args:[F.R]})
C.a.E(s.c,u)
u=a.d
u.toString
s=H.n(new O.fz(t),{func:1,ret:-1,args:[F.X]})
C.a.E(u.b,s)
return t},
dg:function(a,b){var u,t,s,r={}
r.a=b
u=F.aJ()
r.a=new V.M(0,0.7,1,1)
t=a.a
t.toString
r=H.n(new O.fB(r,u),{func:1,ret:-1,args:[F.R]})
C.a.E(t.c,r)
r=new O.fA(u)
t=a.c
t.toString
s=H.n(new O.fC(u,r),{func:1,ret:-1,args:[F.ag]})
C.a.E(t.b,s)
s=a.d
s.toString
r=H.n(new O.fD(u,r),{func:1,ret:-1,args:[F.X]})
C.a.E(s.b,r)
return u},
hx:function(a){return this.dg(a,null)}}
O.fy.prototype={
$1:function(a){var u,t
H.j(a,"$iR")
u=this.a.a
t=a.c3()
t.sW(0,this.b)
t.sbh(V.c0())
u.h(0,t)},
$S:16}
O.fz.prototype={
$1:function(a){var u,t,s,r,q,p
H.j(a,"$iX")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.p()
s=s.e
p=C.a.j(t.c,s)
u.d.di(0,r,q,p)},
$S:5}
O.fB.prototype={
$1:function(a){var u,t
H.j(a,"$iR")
u=this.b.a
t=a.c3()
t.sW(0,this.a.a)
t.sbh(V.c0())
u.h(0,t)},
$S:16}
O.fA.prototype={
$2:function(a,b){if(a.hV(b)==null)this.a.c.bW(0,a,b)},
$S:38}
O.fC.prototype={
$1:function(a){var u,t,s,r
H.j(a,"$iag")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.j(t.c,s)
u=u.a
s=a.b
s.a.a.p()
s=s.e
this.b.$2(r,C.a.j(u.c,s))},
$S:39}
O.fD.prototype={
$1:function(a){var u,t,s,r,q,p
H.j(a,"$iX")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.j(s.c,t)
u=u.a
t=a.c
t.a.a.p()
t=t.e
p=C.a.j(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:5}
O.dt.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.T():u},
X:function(a){var u
H.j(a,"$iv")
u=this.fr
if(u!=null)u.C(a)},
ep:function(){return this.X(null)},
da:function(a){H.j(a,"$iv")
this.a=null
this.X(a)},
h6:function(){return this.da(null)},
f6:function(a,b){var u=V.ai
H.m(b,"$if",[u],"$af")
u=new D.bt([u])
u.b=!0
this.X(u)},
f8:function(a,b){var u=V.ai
H.m(b,"$if",[u],"$af")
u=new D.bu([u])
u.b=!0
this.X(u)},
cU:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.t,h=new H.a_([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=r.gaq()
p=h.j(0,r.gaq())
h.l(0,q,p==null?1:p)}o=H.d([],[A.aG])
h.E(0,new O.h_(j,o))
C.a.bu(o,new O.h0())
n=new H.a_([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=r.gaq()
p=n.j(0,r.gaq())
n.l(0,q,p==null?1:p)}m=H.d([],[A.aI])
n.E(0,new O.h1(j,m))
C.a.bu(m,new O.h2())
l=new H.a_([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.x)(i),++s){r=i[s]
t=r.gaq()
q=l.j(0,r.gaq())
l.l(0,t,q==null?1:q)}k=H.d([],[A.aK])
l.E(0,new O.h3(j,k))
C.a.bu(k,new O.h4())
i=C.e.ab(j.e.a.length+3,4)
j.dy.e
return A.lK(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
ev:function(a,b){H.m(a,"$ib",[T.dK],"$ab")},
a9:function(a,b){var u
for(u=this.dx.a,u=new J.am(u,u.length,[H.y(u,0)]);u.B();)C.h.a9(u.d,b)},
e_:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cU()
u=H.j(b4.fr.j(0,b3.b3),"$ids")
if(u==null){u=A.lJ(b3,b4.a)
b4.dk(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dw
b3=b5.e
if(!(b3 instanceof Z.bp))b3=b5.e=null
if(b3==null||!b3.d.q(0,s)){b3=t.k3
if(b3)b5.d.ap()
r=t.k4
if(r)b5.d.aM()
q=t.r2
if(q)b5.d.bi()
p=b5.d.dn(new Z.dY(b4.a),s)
p.ac($.aQ()).e=b2.a.Q.c
if(b3)p.ac($.aP()).e=b2.a.cx.c
if(r)p.ac($.aO()).e=b2.a.ch.c
if(t.r1)p.ac($.bI()).e=b2.a.cy.c
if(q)p.ac($.bJ()).e=b2.a.db.c
if(t.rx)p.ac($.bo()).e=b2.a.dx.c
b5.e=p}b3=T.dK
o=H.d([],[b3])
b2.a.ao(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.gN(q)
r=r.dy
r.toString
r.a7(q.a2(0,!0))}if(t.fr){r=b2.a
q=b4.ge5()
r=r.fr
r.toString
r.a7(q.a2(0,!0))}r=b2.a
q=b4.gdW()
r=r.fy
r.toString
r.a7(q.a2(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.a7(C.h.a2(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.a7(C.h.a2(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.a7(C.h.a2(q,!0))}if(t.y2>0){n=b2.e.a.length
r=b2.a.k4
C.b.bs(r.a,r.d,n)
for(r=[P.z],m=0;m<n;++m){q=b2.a
l=b2.e.a
if(m>=l.length)return H.c(l,m)
l=l[m]
q.toString
H.j(l,"$iai")
q=q.r1
if(m>=q.length)return H.c(q,m)
q=q[m]
k=new Float32Array(H.cS(H.m(l.a2(0,!0),"$ib",r,"$ab")))
C.b.e4(q.a,q.d,!1,k)}}if(t.a.a){r=b2.a
q=b2.f.f
r=r.r2
C.b.P(r.a,r.d,q.a,q.b,q.c)}if(t.id){if(t.b.a){r=b2.a
q=b2.r.f
r=r.x1
C.b.P(r.a,r.d,q.a,q.b,q.c)}if(t.c.a){r=b2.a
q=b2.x.f
r=r.y2
C.b.P(r.a,r.d,q.a,q.b,q.c)}if(t.d.a){r=b2.a
q=b2.y.f
r=r.dz
C.b.P(r.a,r.d,q.a,q.b,q.c)}r=t.e.a
if(!r)q=!1
else q=!0
if(q){q=b2.a
l=b2.z.ch
q=q.dB
C.b.a_(q.a,q.d,l)}if(r){r=b2.a
q=b2.z.f
r=r.dA
C.b.P(r.a,r.d,q.a,q.b,q.c)}r=t.z
if(r.length>0){q=b4.db
j=q.gN(q)
q=P.t
i=new H.a_([q,q])
for(q=b2.dx.e,l=q.length,h=[b3],g=0;g<q.length;q.length===l||(0,H.x)(q),++g){f=q[g]
e=f.gaq()
d=i.j(0,e)
if(d==null)d=0
i.l(0,e,d+1)
c=J.eQ(b2.a.c7.j(0,e),d)
b=f.gdu(f)
a=C.c.n(j.a,b.gbk(b))+C.c.n(j.b,b.gbl(b))+C.c.n(j.c,b.gbm())
a0=C.c.n(j.e,b.gbk(b))+C.c.n(j.f,b.gbl(b))+C.c.n(j.r,b.gbm())
b=C.c.n(j.y,b.gbk(b))+C.c.n(j.z,b.gbl(b))+C.c.n(j.Q,b.gbm())
b=new V.D(a,a0,b).m(0,Math.sqrt(a*a+a0*a0+b*b))
a0=c.e
a=b.a
a1=b.b
b=b.c
C.b.P(a0.a,a0.d,a,a1,b)
b=f.gW(f)
a1=c.f
C.b.P(a1.a,a1.d,b.a,b.b,b.c)
f.gaf()
b=f.gdu(f)
a=c.d
C.b.P(a.a,a.d,b.a,b.b,b.c)
b=f.gaE()
a=c.b
C.b.P(a.a,a.d,b.a,b.b,b.c)
b=f.gbp(f)
a=c.c
C.b.P(a.a,a.d,b.a,b.b,b.c)
b=f.gaf()
H.m(o,"$ib",h,"$ab")
if(!C.a.ar(o,b)){b.sah(0,o.length)
C.a.h(o,b)}b=f.gaf()
a=b.gai(b)
if(a){a=c.r
a.toString
a0=b.gai(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gah(b)
a.a.uniform1i(a.d,b)}}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){l=r[g].a
n=i.j(0,l)
if(n==null)n=0
l=b2.a.c6.j(0,l)
C.b.bs(l.a,l.d,n)}}r=t.Q
if(r.length>0){q=b4.db
j=q.gN(q)
q=P.t
a2=new H.a_([q,q])
for(q=b2.dx.f,l=q.length,h=[b3],b=[P.z],g=0;g<q.length;q.length===l||(0,H.x)(q),++g){f=q[g]
e=f.gaq()
d=a2.j(0,e)
if(d==null)d=0
a2.l(0,e,d+1)
c=J.eQ(b2.a.c9.j(0,e),d)
a3=j.n(0,f.gN(f))
a=f.gN(f)
a0=$.cw
a=a.cr(a0==null?$.cw=new V.a0(0,0,0):a0)
a0=c.b
C.b.P(a0.a,a0.d,a.a,a.b,a.c)
a=$.cw
a=a3.cr(a==null?$.cw=new V.a0(0,0,0):a)
a0=c.c
C.b.P(a0.a,a0.d,a.a,a.b,a.c)
a=f.gW(f)
a0=c.e
C.b.P(a0.a,a0.d,a.a,a.b,a.c)
f.gaf()
a=a3.dK(0)
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
k=new Float32Array(H.cS(H.m(new V.dv(a0,a1,a4,a5,a6,a7,a8,a9,a).a2(0,!0),"$ib",b,"$ab")))
C.b.e3(b0.a,b0.d,!1,k)
f.gaf()
a=f.gaf()
H.m(o,"$ib",h,"$ab")
if(!C.a.ar(o,a)){a.sah(0,o.length)
C.a.h(o,a)}a=f.gaf()
a0=a.gai(a)
if(a0){a0=c.f
a0.toString
a1=a.gai(a)
if(!a1)a0.a.uniform1i(a0.d,0)
else{a=a.gah(a)
a0.a.uniform1i(a0.d,a)}}f.gaS()
a=f.gea()
a0=c.x
a0.toString
a1=a.gbk(a)
a4=a.gbl(a)
a5=a.gbm()
a=a.ghP()
C.b.ct(a0.a,a0.d,a1,a4,a5,a)
a=f.gaS()
if(!C.a.ar(o,a)){a.sah(0,o.length)
C.a.h(o,a)}a=f.gaS()
a0=a.gai(a)
if(a0){a0=c.r
a0.toString
a1=a.gai(a)
if(!a1)a0.a.uniform1i(a0.d,0)
else{a=a.gah(a)
a0.a.uniform1i(a0.d,a)}}if(f.ghR()){a=f.ghE()
a0=c.y
C.b.a_(a0.a,a0.d,a)
a=f.ghF()
a0=c.z
C.b.a_(a0.a,a0.d,a)
a=f.ghG()
a0=c.Q
C.b.a_(a0.a,a0.d,a)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){l=r[g].a
n=a2.j(0,l)
if(n==null)n=0
l=b2.a.c8.j(0,l)
C.b.bs(l.a,l.d,n)}}r=t.ch
if(r.length>0){q=b4.db
j=q.gN(q)
q=P.t
b1=new H.a_([q,q])
for(q=b2.dx.r,l=q.length,b3=[b3],g=0;g<q.length;q.length===l||(0,H.x)(q),++g){f=q[g]
e=f.gaq()
d=b1.j(0,e)
if(d==null)d=0
b1.l(0,e,d+1)
c=J.eQ(b2.a.cb.j(0,e),d)
h=f.gik(f)
b=c.b
C.b.P(b.a,b.d,h.a,h.b,h.c)
h=f.gdu(f).iQ()
b=c.c
C.b.P(b.a,b.d,h.a,h.b,h.c)
h=j.cr(f.gik(f))
b=c.d
C.b.P(b.a,b.d,h.a,h.b,h.c)
h=f.gW(f)
b=c.e
C.b.P(b.a,b.d,h.a,h.b,h.c)
f.gaf()
h=f.gaE()
b=c.f
C.b.P(b.a,b.d,h.a,h.b,h.c)
h=f.gbp(f)
b=c.r
C.b.P(b.a,b.d,h.a,h.b,h.c)
h=f.giR()
b=c.x
C.b.a_(b.a,b.d,h)
h=f.giS()
b=c.y
C.b.a_(b.a,b.d,h)
f.gaf()
h=f.gaf()
H.m(o,"$ib",b3,"$ab")
if(!C.a.ar(o,h)){h.sah(0,o.length)
C.a.h(o,h)}h=f.gaf()
b=h.gai(h)
if(b){b=c.dx
b.toString
a=h.gai(h)
if(!a)b.a.uniform1i(b.d,0)
else{h=h.gah(h)
b.a.uniform1i(b.d,h)}}f.gaS()
h=f.gea()
b=c.z
b.toString
a=h.gbk(h)
a0=h.gbl(h)
a1=h.gbm()
h=h.ghP()
C.b.ct(b.a,b.d,a,a0,a1,h)
h=f.gaS()
if(!C.a.ar(o,h)){h.sah(0,o.length)
C.a.h(o,h)}h=f.gaS()
b=h.gai(h)
if(b){b=c.dy
b.toString
a=h.gai(h)
if(!a)b.a.uniform1i(b.d,0)
else{h=h.gah(h)
b.a.uniform1i(b.d,h)}}if(f.giA()){h=f.giz()
b=c.Q
C.b.a_(b.a,b.d,h)
h=f.giy()
b=c.ch
C.b.a_(b.a,b.d,h)}if(f.ghR()){h=f.ghE()
b=c.cx
C.b.a_(b.a,b.d,h)
h=f.ghF()
b=c.cy
C.b.a_(b.a,b.d,h)
h=f.ghG()
b=c.db
C.b.a_(b.a,b.d,h)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.x)(r),++g){q=r[g].a
n=b1.j(0,q)
if(n==null)n=0
q=b2.a.ca.j(0,q)
C.b.bs(q.a,q.d,n)}}}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.gN(r).dK(0)}b3=b3.id
b3.toString
b3.a7(r.a2(0,!0))}if(t.cy){b2.ev(o,b2.ch)
b3=b2.a
r=b2.ch
b3.h8(b3.dC,r)
if(t.r.a){b3=b2.a
r=b2.cx.f
b3=b3.dD
C.b.P(b3.a,b3.d,r.a,r.b,r.c)}b3=t.x.a
if(!b3)r=!1
else r=!0
if(r){r=b2.a
q=b2.cy.ch
r=r.dE
C.b.a_(r.a,r.d,q)}if(b3){b3=b2.a
r=b2.cy.f
b3=b3.dF
C.b.P(b3.a,b3.d,r.a,r.b,r.c)}}b3=t.y.a
r=!b3
if(r)q=!1
else q=!0
if(q){if(b3){b3=b2.a
q=b2.db.f
b3=b3.dG
C.b.a_(b3.a,b3.d,q)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(m=0;m<o.length;++m)o[m].ao(b4)
b3=H.r(b5.e,"$ibp")
b3.ao(b4)
b3.ak(b4)
b3.cs(b4)
if(r)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(m=0;m<o.length;++m)o[m].cs(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.dv()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cU().b3},
sez:function(a){this.e=H.m(a,"$iZ",[V.ai],"$aZ")}}
O.h_.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aG(a,C.e.ab(b+3,4)*4))},
$S:11}
O.h0.prototype={
$2:function(a,b){H.j(a,"$iaG")
H.j(b,"$iaG")
return J.jA(a.a,b.a)},
$S:42}
O.h1.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aI(a,C.e.ab(b+3,4)*4))},
$S:11}
O.h2.prototype={
$2:function(a,b){H.j(a,"$iaI")
H.j(b,"$iaI")
return J.jA(a.a,b.a)},
$S:43}
O.h3.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aK(a,C.e.ab(b+3,4)*4))},
$S:11}
O.h4.prototype={
$2:function(a,b){H.j(a,"$iaK")
H.j(b,"$iaK")
return J.jA(a.a,b.a)},
$S:44}
O.fU.prototype={
bS:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.J(u.b,t,a,[P.z])
t.b=!0
u.a.X(t)}},
ax:function(){this.cE()
this.bS(1)},
sa0:function(a,b){var u=this
if(b<=0){u.bT(new A.af(!1,!1,!1))
u.bS(0)}else{u.bT(new A.af(!0,!1,!1))
u.bS(b>=1?1:b)}}}
O.du.prototype={
ax:function(){},
bT:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ax()
u=s.a
u.a=null
u.X(null)}}}
O.fV.prototype={}
O.b0.prototype={
dd:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.J(s.b+".color",u,a,[V.a3])
t.b=!0
s.a.X(t)}},
ax:function(){this.cE()
this.dd(new V.a3(1,1,1))},
sW:function(a,b){this.bT(new A.af(!0,!1,!1))
this.dd(b)}}
O.fX.prototype={}
O.fY.prototype={
ax:function(){var u,t=this
t.cF()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.J(t.b+".refraction",u,1,[P.z])
u.b=!0
t.a.X(u)}}}
O.fZ.prototype={
ax:function(){var u,t=this
t.cF()
u=t.ch
if(!(Math.abs(u-100)<$.K().a)){t.ch=100
u=new D.J(t.b+".shininess",u,100,[P.z])
u.b=!0
t.a.X(u)}}}
O.by.prototype={}
T.dK.prototype={}
V.eS.prototype={
aO:function(a,b){return!0},
i:function(a){return"all"},
$ibg:1}
V.bg.prototype={}
V.dr.prototype={
aO:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].aO(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saw:function(a){this.a=H.m(a,"$ib",[V.bg],"$ab")},
$ibg:1}
V.bh.prototype={
aO:function(a,b){return!this.ee(0,b)},
i:function(a){return"!["+this.cD(0)+"]"}}
V.hy.prototype={
eh:function(a){var u,t
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
u=new H.a_([P.t,P.a4])
for(t=new H.dp(a,a.gk(a),[H.aF(a,"w",0)]);t.B();)u.l(0,t.d,!0)
this.sh7(u)},
aO:function(a,b){return this.a.ds(0,b)},
i:function(a){var u=this.a
return P.jO(new H.dn(u,[H.y(u,0)]))},
sh7:function(a){this.a=H.m(a,"$iE",[P.t,P.a4],"$aE")},
$ibg:1}
V.cA.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cD(this.a.K(0,b))
r.saw(H.d([],[V.bg]))
r.c=!1
C.a.h(this.c,r)
return r},
hT:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.aO(0,a))return r}return},
i:function(a){return this.b},
sht:function(a){this.c=H.m(a,"$ib",[V.cD],"$ab")}}
V.dM.prototype={
i:function(a){var u=H.l8(this.b,"\n","\\n"),t=H.l8(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cC.prototype={
i:function(a){return this.b},
sh2:function(a){var u=P.l
this.c=H.m(a,"$iE",[u,u],"$aE")}}
V.hX.prototype={
K:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cA(this,b)
u.sht(H.d([],[V.cD]))
u.d=null
this.a.l(0,b,u)}return u},
b8:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cC(a)
u=P.l
t.sh2(new H.a_([u,u]))
this.b.l(0,a,t)}return t},
iw:function(a){var u,t,s,r,q,p,o,n,m=H.d([],[V.dM]),l=this.c,k=[P.t],j=H.d([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.d.bb(a,s)
q=l.hT(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jO(j)
throw H.h(P.q("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.d([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jO(j)
o=l.d
n=o.c.j(0,p)
t=new V.dM(n==null?o.b:n,p,s)}++s}}},
shj:function(a){this.a=H.m(a,"$iE",[P.l,V.cA],"$aE")},
shm:function(a){this.b=H.m(a,"$iE",[P.l,V.cC],"$aE")}}
V.cD.prototype={
i:function(a){return this.b.b+": "+this.cD(0)}}
X.d3.prototype={$ics:1}
X.fu.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.T():u}}
X.dA.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.T():u},
au:function(a){var u
H.j(a,"$iv")
u=this.f
if(u!=null)u.C(a)},
er:function(){return this.au(null)},
sT:function(a){var u,t,s=this
if(!J.F(s.b,a)){u=s.b
if(u!=null)u.gt().w(0,s.gba())
t=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gba())
u=new D.J("mover",t,s.b,[U.a7])
u.b=!0
s.au(u)}},
saD:function(a){var u,t,s=this
if(!J.F(s.a,a)){u=s.a
if(u!=null)u.gt().w(0,s.gba())
t=s.a
s.a=a
if(a!=null)a.gt().h(0,s.gba())
u=new D.J("premover",t,s.a,[U.a7])
u.b=!0
s.au(u)}},
$ics:1,
$id3:1}
X.dJ.prototype={}
V.hC.prototype={
ei:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ae(q,"scroll",H.n(new V.hE(o),{func:1,ret:-1,args:[r]}),!1,r)},
bY:function(a,b){var u,t,s,r,q
a=H.a9(C.e.hJ(a,0,4))
u=P.kK(C.o,b,C.i,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.ls()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
ag:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.l],"$ab")
this.hb()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iw(C.a.hZ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
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
if(H.n4(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.ab(m[1])
l.textContent=H.ab(m[0])
t.appendChild(l)}else{k=P.kK(C.o,n,C.i,!1)
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
bZ:function(a){var u=W.kc()
u.className="pageLargeCanvas"
u.id=a
this.a.appendChild(u)},
hb:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.hX()
t=P.l
u.shj(new H.a_([t,V.cA]))
u.shm(new H.a_([t,V.cC]))
u.c=null
u.c=u.K(0,q)
t=u.K(0,q).u(0,p)
s=V.ak(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,p).u(0,p)
s=new V.bh()
r=[V.bg]
s.saw(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a5("*"))
C.a.h(s.a,t)
t=u.K(0,p).u(0,"BoldEnd")
s=V.ak(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,q).u(0,o)
s=V.ak(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,o).u(0,o)
s=new V.bh()
s.saw(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a5("_"))
C.a.h(s.a,t)
t=u.K(0,o).u(0,n)
s=V.ak(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,q).u(0,m)
s=V.ak(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,m).u(0,m)
s=new V.bh()
s.saw(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a5("`"))
C.a.h(s.a,t)
t=u.K(0,m).u(0,"CodeEnd")
s=V.ak(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,q).u(0,l)
s=V.ak(new H.a5("["))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,l).u(0,k)
s=V.ak(new H.a5("|"))
C.a.h(t.a,s)
s=u.K(0,l).u(0,j)
t=V.ak(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.K(0,l).u(0,l)
t=new V.bh()
t.saw(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a5("|]"))
C.a.h(t.a,s)
s=u.K(0,k).u(0,j)
t=V.ak(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.K(0,k).u(0,k)
t=new V.bh()
t.saw(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a5("|]"))
C.a.h(t.a,s)
C.a.h(u.K(0,q).u(0,i).a,new V.eS())
s=u.K(0,i).u(0,i)
t=new V.bh()
t.saw(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a5("*_`["))
C.a.h(t.a,s)
s=u.K(0,"BoldEnd")
s.d=s.a.b8(p)
s=u.K(0,n)
s.d=s.a.b8(o)
s=u.K(0,"CodeEnd")
s.d=s.a.b8(m)
s=u.K(0,j)
s.d=s.a.b8("Link")
s=u.K(0,i)
s.d=s.a.b8(i)
this.b=u}}
V.hE.prototype={
$1:function(a){P.kz(C.k,new V.hD(this.a))},
$S:45}
V.hD.prototype={
$0:function(){var u=C.c.al(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:3}
M.jp.prototype={
$1:function(a){H.j(a,"$iv")
this.a.b=!0},
$S:2}
M.jq.prototype={
$1:function(a){H.j(a,"$iv")
this.a.b=!1},
$S:2}
M.jr.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
a=H.r(H.j(a,"$iv"),"$iaz")
u=o.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.F(0,a.z)
s=new V.O(r.a,r.b).n(0,2).m(0,s.gZ()).b
if(typeof s!=="number")return H.C(s)
q=u.a=t+s
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sN(0,V.aj(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sN(0,V.bR(p,p,p,1))
r.b=s.b=!0}},
$S:2}
M.js.prototype={
$1:function(a){H.j(a,"$iv")
this.a.b=!0},
$S:2}
M.jt.prototype={
$1:function(a){H.j(a,"$iv")
this.a.b=!1},
$S:2}
M.ju.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
a=H.r(H.j(a,"$iv"),"$iaz")
u=o.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.F(0,a.z)
s=new V.O(r.a,r.b).n(0,2).m(0,s.gZ()).b
if(typeof s!=="number")return H.C(s)
q=u.a=t+s
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sN(0,V.aj(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sN(0,V.bR(p,p,p,1))
r.b=s.b=!0}},
$S:2}
M.jv.prototype={
$1:function(a){H.j(a,"$iv")
this.a.b=!0},
$S:2}
M.jw.prototype={
$1:function(a){H.j(a,"$iv")
this.a.b=!1},
$S:2}
M.jx.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
a=H.r(H.j(a,"$iv"),"$iaz")
u=o.a
if(!u.b)return
t=a.c
s=a.d
if(new V.U((s.a-t.a-t.c*0.5)*2,(s.b-t.b-t.d*0.5)*2).m(0,t.gZ()).a>0)return
r=u.a
s=s.F(0,a.z)
t=new V.O(s.a,s.b).n(0,2).m(0,t.gZ()).b
if(typeof t!=="number")return H.C(t)
q=u.a=r+t
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sN(0,V.aj(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sN(0,V.bR(p,p,p,1))
r.b=s.b=!0}a.b=!1},
$S:2};(function aliases(){var u=J.a.prototype
u.ec=u.i
u=J.dk.prototype
u.ed=u.i
u=O.du.prototype
u.cE=u.ax
u=O.b0.prototype
u.cF=u.ax
u=V.dr.prototype
u.ee=u.aO
u.cD=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mF","m5",9)
u(P,"mG","m6",9)
u(P,"mH","m7",9)
t(P,"kT","mD",4)
var n
s(n=E.ao.prototype,"gdR",0,0,null,["$1","$0"],["dS","i8"],0,0)
s(n,"gdT",0,0,null,["$1","$0"],["dU","i9"],0,0)
s(n,"gdP",0,0,null,["$1","$0"],["dQ","i7"],0,0)
s(n,"gdN",0,0,null,["$1","$0"],["dO","i4"],0,0)
r(n,"gi2","i3",8)
r(n,"gi5","i6",8)
s(n=E.dL.prototype,"gcH",0,0,null,["$1","$0"],["cJ","cI"],0,0)
q(n,"gip","e0",4)
p(n=X.dS.prototype,"gfl","fm",12)
p(n,"gf9","fa",12)
p(n,"gff","fg",6)
p(n,"gfp","fq",24)
p(n,"gfn","fo",24)
p(n,"gfu","fv",6)
p(n,"gfA","fB",6)
p(n,"gfj","fk",6)
p(n,"gfw","fz",6)
p(n,"gfh","fi",6)
p(n,"gfC","fD",25)
p(n,"gfE","fF",12)
p(n,"gfU","fV",13)
p(n,"gfQ","fR",13)
p(n,"gfS","fT",13)
s(n=D.dm.prototype,"gd3",0,0,null,["$1","$0"],["d4","fs"],0,0)
p(n,"gfG","fH",26)
r(n,"gf3","f4",22)
r(n,"gfK","fL",22)
o(V.O.prototype,"gk","b4",10)
o(V.D.prototype,"gk","b4",10)
o(V.bk.prototype,"gk","b4",10)
s(n=U.cm.prototype,"gaJ",0,0,null,["$1","$0"],["L","a5"],0,0)
r(n,"gem","en",20)
r(n,"gfI","fJ",20)
s(n=U.dT.prototype,"gaJ",0,0,null,["$1","$0"],["L","a5"],0,0)
p(n,"gbF","bG",1)
p(n,"gbH","bI",1)
p(n,"gbJ","bK",1)
s(n=U.dU.prototype,"gaJ",0,0,null,["$1","$0"],["L","a5"],0,0)
p(n,"gbF","bG",1)
p(n,"gbH","bI",1)
p(n,"gbJ","bK",1)
p(n,"geX","eY",1)
p(n,"geZ","f_",1)
p(n,"ghr","hs",1)
p(n,"ghp","hq",1)
p(n,"ghn","ho",1)
p(U.dV.prototype,"gf1","f2",1)
s(n=M.d5.prototype,"ga8",0,0,null,["$1","$0"],["a4","bv"],0,0)
r(n,"gfM","fN",19)
r(n,"gfO","fP",19)
s(n=M.dd.prototype,"ga8",0,0,null,["$1","$0"],["a4","bv"],0,0)
r(n,"gfb","fc",8)
r(n,"gfd","fe",8)
p(n=O.dh.prototype,"ghe","hf",35)
s(n,"ghw",0,1,null,["$2$color","$1"],["dg","hx"],36,0)
s(n=O.dt.prototype,"geo",0,0,null,["$1","$0"],["X","ep"],0,0)
s(n,"gh5",0,0,null,["$1","$0"],["da","h6"],0,0)
r(n,"gf5","f6",15)
r(n,"gf7","f8",15)
s(X.dA.prototype,"gba",0,0,null,["$1","$0"],["au","er"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.jK,J.a,J.am,P.ee,P.f,H.dp,P.aY,H.bN,H.dR,H.i1,P.br,H.cc,H.ev,P.ah,H.fL,H.fM,H.fG,P.j3,P.bd,P.aD,P.dZ,P.hN,P.cB,P.hO,P.an,P.j6,P.j0,P.cI,P.ed,P.w,P.cd,P.j5,P.a4,P.aU,P.aa,P.ch,P.hl,P.dI,P.e6,P.ft,P.b,P.E,P.L,P.at,P.l,P.bx,W.f7,W.A,W.df,P.iW,O.Z,O.co,E.f0,E.ao,E.hq,E.dL,Z.dX,Z.dY,Z.bp,Z.d1,Z.bs,Z.bl,D.f3,D.cj,D.v,X.d2,X.dl,X.fI,X.fP,X.av,X.hb,X.hY,X.dS,D.d9,D.ac,D.dB,D.dH,V.a3,V.M,V.fj,V.dv,V.ai,V.U,V.a0,V.aA,V.dE,V.O,V.D,V.bk,U.dT,U.dU,U.dV,M.dd,M.ap,A.cY,A.eW,A.af,A.aG,A.aI,A.aK,A.fW,A.bW,A.bX,A.c_,A.dO,A.ia,F.X,F.fm,F.ag,F.fK,F.bw,F.aq,F.hz,F.hA,F.hB,F.R,F.ij,F.ik,F.ip,F.iq,F.ir,F.is,O.by,O.du,O.fX,V.eS,V.bg,V.dr,V.hy,V.cA,V.dM,V.cC,V.hX,X.d3,X.dJ,X.dA,V.hC])
s(J.a,[J.fE,J.dj,J.dk,J.aZ,J.cn,J.bP,H.cu,W.e,W.eR,W.cZ,W.aS,W.aT,W.S,W.e0,W.fb,W.fc,W.e2,W.dc,W.e4,W.fe,W.k,W.e7,W.aW,W.fw,W.e9,W.fO,W.h5,W.ef,W.eg,W.b2,W.eh,W.ek,W.b3,W.eo,W.eq,W.b6,W.er,W.b7,W.ew,W.aL,W.ez,W.hW,W.b9,W.eB,W.i_,W.ig,W.eF,W.eH,W.eJ,W.eL,W.eN,P.bf,P.eb,P.bi,P.em,P.hp,P.ex,P.bj,P.eD,P.eX,P.e_,P.d_,P.dC,P.bV,P.dF,P.dP,P.et])
s(J.dk,[J.hm,J.cF,J.bv])
t(J.jJ,J.aZ)
s(J.cn,[J.di,J.fF])
t(P.fN,P.ee)
s(P.fN,[H.dQ,W.iE,W.iD,P.fp])
t(H.a5,H.dQ)
s(P.f,[H.fh,H.fS,H.iw])
s(P.aY,[H.fT,H.ix])
s(P.br,[H.hi,H.fH,H.id,H.i3,H.f2,H.hw,P.eV,P.dz,P.be,P.ie,P.ic,P.hJ,P.f5,P.fa])
s(H.cc,[H.jz,H.hS,H.ji,H.jj,H.jk,P.iA,P.iz,P.iB,P.iC,P.j4,P.iJ,P.iN,P.iK,P.iL,P.iM,P.iQ,P.iR,P.iP,P.iO,P.hP,P.hQ,P.jc,P.iZ,P.iY,P.j_,P.fR,P.ff,P.fg,W.h7,W.h9,W.hv,W.hM,W.iI,P.je,P.fq,P.fr,P.eZ,E.hr,E.hs,E.ht,E.hV,D.fk,D.fl,F.j7,F.jf,F.iu,F.it,F.il,F.im,O.fy,O.fz,O.fB,O.fA,O.fC,O.fD,O.h_,O.h0,O.h1,O.h2,O.h3,O.h4,V.hE,V.hD,M.jp,M.jq,M.jr,M.js,M.jt,M.ju,M.jv,M.jw,M.jx])
s(H.hS,[H.hK,H.ca])
t(H.iy,P.eV)
t(P.fQ,P.ah)
t(H.a_,P.fQ)
t(H.dn,H.fh)
t(H.dw,H.cu)
s(H.dw,[H.cJ,H.cL])
t(H.cK,H.cJ)
t(H.ct,H.cK)
t(H.cM,H.cL)
t(H.dx,H.cM)
s(H.dx,[H.hc,H.hd,H.he,H.hf,H.hg,H.dy,H.hh])
t(P.iX,P.j6)
t(P.iV,P.j0)
t(P.d7,P.hO)
t(P.fi,P.cd)
t(P.ih,P.fi)
t(P.ii,P.d7)
s(P.aa,[P.z,P.t])
s(P.be,[P.bU,P.fx])
s(W.e,[W.H,W.fo,W.b5,W.cN,W.b8,W.aM,W.cP,W.iv,W.cG,P.f_,P.bL])
s(W.H,[W.a6,W.bq])
s(W.a6,[W.p,P.o])
s(W.p,[W.eT,W.eU,W.bM,W.da,W.fs,W.hx])
s(W.aS,[W.cf,W.f8,W.f9])
t(W.f6,W.aT)
t(W.cg,W.e0)
t(W.e3,W.e2)
t(W.db,W.e3)
t(W.e5,W.e4)
t(W.fd,W.e5)
t(W.aV,W.cZ)
t(W.e8,W.e7)
t(W.fn,W.e8)
t(W.ea,W.e9)
t(W.bO,W.ea)
t(W.bz,W.k)
s(W.bz,[W.b_,W.ad,W.aN])
t(W.h6,W.ef)
t(W.h8,W.eg)
t(W.ei,W.eh)
t(W.ha,W.ei)
t(W.el,W.ek)
t(W.cv,W.el)
t(W.ep,W.eo)
t(W.hn,W.ep)
t(W.hu,W.eq)
t(W.cO,W.cN)
t(W.hG,W.cO)
t(W.es,W.er)
t(W.hH,W.es)
t(W.hL,W.ew)
t(W.eA,W.ez)
t(W.hT,W.eA)
t(W.cQ,W.cP)
t(W.hU,W.cQ)
t(W.eC,W.eB)
t(W.hZ,W.eC)
t(W.bc,W.ad)
t(W.eG,W.eF)
t(W.iF,W.eG)
t(W.e1,W.dc)
t(W.eI,W.eH)
t(W.iS,W.eI)
t(W.eK,W.eJ)
t(W.ej,W.eK)
t(W.eM,W.eL)
t(W.j1,W.eM)
t(W.eO,W.eN)
t(W.j2,W.eO)
t(W.iG,P.hN)
t(W.jT,W.iG)
t(W.iH,P.cB)
t(P.as,P.iW)
t(P.ec,P.eb)
t(P.fJ,P.ec)
t(P.en,P.em)
t(P.hj,P.en)
t(P.ey,P.ex)
t(P.hR,P.ey)
t(P.eE,P.eD)
t(P.i0,P.eE)
t(P.eY,P.e_)
t(P.hk,P.bL)
t(P.eu,P.et)
t(P.hI,P.eu)
s(E.f0,[Z.d0,A.cz,T.dK])
s(D.v,[D.bt,D.bu,D.J,X.ho])
s(X.ho,[X.dq,X.az,X.cr,X.dN])
s(O.Z,[D.dm,U.cm,M.d5])
s(D.f3,[U.f4,U.a7])
t(U.d6,U.a7)
s(A.cz,[A.dg,A.ds])
s(A.dO,[A.aB,A.i7,A.i8,A.i9,A.i5,A.a8,A.i6,A.V,A.bA,A.ib,A.cE,A.al,A.bY,A.bZ])
t(F.hF,F.fm)
t(F.i4,F.fK)
t(F.dW,F.iq)
t(F.io,F.ir)
s(O.by,[O.dh,O.dt])
s(O.du,[O.fU,O.fV,O.b0])
s(O.b0,[O.fY,O.fZ])
s(V.dr,[V.bh,V.cD])
t(X.fu,X.dJ)
u(H.dQ,H.dR)
u(H.cJ,P.w)
u(H.cK,H.bN)
u(H.cL,P.w)
u(H.cM,H.bN)
u(P.ee,P.w)
u(W.e0,W.f7)
u(W.e2,P.w)
u(W.e3,W.A)
u(W.e4,P.w)
u(W.e5,W.A)
u(W.e7,P.w)
u(W.e8,W.A)
u(W.e9,P.w)
u(W.ea,W.A)
u(W.ef,P.ah)
u(W.eg,P.ah)
u(W.eh,P.w)
u(W.ei,W.A)
u(W.ek,P.w)
u(W.el,W.A)
u(W.eo,P.w)
u(W.ep,W.A)
u(W.eq,P.ah)
u(W.cN,P.w)
u(W.cO,W.A)
u(W.er,P.w)
u(W.es,W.A)
u(W.ew,P.ah)
u(W.ez,P.w)
u(W.eA,W.A)
u(W.cP,P.w)
u(W.cQ,W.A)
u(W.eB,P.w)
u(W.eC,W.A)
u(W.eF,P.w)
u(W.eG,W.A)
u(W.eH,P.w)
u(W.eI,W.A)
u(W.eJ,P.w)
u(W.eK,W.A)
u(W.eL,P.w)
u(W.eM,W.A)
u(W.eN,P.w)
u(W.eO,W.A)
u(P.eb,P.w)
u(P.ec,W.A)
u(P.em,P.w)
u(P.en,W.A)
u(P.ex,P.w)
u(P.ey,W.A)
u(P.eD,P.w)
u(P.eE,W.A)
u(P.e_,P.ah)
u(P.et,P.w)
u(P.eu,W.A)})()
var v={mangledGlobalNames:{t:"int",z:"double",aa:"num",l:"String",a4:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.L,args:[D.v]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:P.L,args:[F.X]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[P.l,,]},{func:1,ret:-1,args:[P.t,[P.f,E.ao]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.t,P.t]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:P.L,args:[,]},{func:1,ret:-1,args:[P.t,[P.f,V.ai]]},{func:1,ret:P.L,args:[F.R]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.l,args:[P.t]},{func:1,ret:-1,args:[P.t,[P.f,M.ap]]},{func:1,ret:-1,args:[P.t,[P.f,U.a7]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.t,[P.f,D.ac]]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.a4,args:[[P.f,D.ac]]},{func:1,ret:P.L,args:[P.aa]},{func:1,ret:W.a6,args:[W.H]},{func:1,ret:P.a4,args:[W.H]},{func:1,args:[W.k]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.L,args:[F.R,P.z,P.z]},{func:1,ret:P.z,args:[P.z]},{func:1,ret:[P.aD,,],args:[,]},{func:1,ret:F.aq,args:[F.aq]},{func:1,ret:F.aq,args:[F.aq],named:{color:V.M}},{func:1,args:[,P.l]},{func:1,ret:-1,args:[F.R,F.R]},{func:1,ret:P.L,args:[F.ag]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,args:[P.l]},{func:1,ret:P.t,args:[A.aG,A.aG]},{func:1,ret:P.t,args:[A.aI,A.aI]},{func:1,ret:P.t,args:[A.aK,A.aK]},{func:1,ret:P.L,args:[W.k]},{func:1,ret:P.L,args:[,],opt:[P.at]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.j=W.bM.prototype
C.B=J.a.prototype
C.a=J.aZ.prototype
C.e=J.di.prototype
C.h=J.dj.prototype
C.c=J.cn.prototype
C.d=J.bP.prototype
C.C=J.bv.prototype
C.D=W.cv.prototype
C.p=J.hm.prototype
C.b=P.bV.prototype
C.l=J.cF.prototype
C.q=W.bc.prototype
C.r=W.cG.prototype
C.m=function getTagFallback(o) {
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
C.n=function(hooks) { return hooks; }

C.z=new P.hl()
C.i=new P.ih()
C.A=new P.ii()
C.f=new P.iX()
C.k=new P.ch(0)
C.o=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.t])})();(function staticFields(){$.aR=0
$.cb=null
$.ka=null
$.jV=!1
$.kZ=null
$.kR=null
$.l6=null
$.jg=null
$.jl=null
$.k4=null
$.c1=null
$.cT=null
$.cU=null
$.jW=!1
$.a1=C.f
$.au=[]
$.kk=null
$.ko=null
$.cw=null
$.kv=null
$.kC=null
$.kF=null
$.kE=null
$.kD=null
$.kH=null
$.kn=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ne","lb",function(){return H.kY("_$dart_dartClosure")})
u($,"nf","k7",function(){return H.kY("_$dart_js")})
u($,"nh","lc",function(){return H.ba(H.i2({
toString:function(){return"$receiver$"}}))})
u($,"ni","ld",function(){return H.ba(H.i2({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nj","le",function(){return H.ba(H.i2(null))})
u($,"nk","lf",function(){return H.ba(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nn","li",function(){return H.ba(H.i2(void 0))})
u($,"no","lj",function(){return H.ba(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nm","lh",function(){return H.ba(H.kA(null))})
u($,"nl","lg",function(){return H.ba(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nq","ll",function(){return H.ba(H.kA(void 0))})
u($,"np","lk",function(){return H.ba(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nF","k8",function(){return P.m4()})
u($,"nG","lp",function(){return P.lW("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"ny","lo",function(){return Z.aC(0)})
u($,"ns","lm",function(){return Z.aC(511)})
u($,"nA","aQ",function(){return Z.aC(1)})
u($,"nz","aP",function(){return Z.aC(2)})
u($,"nu","aO",function(){return Z.aC(4)})
u($,"nB","bI",function(){return Z.aC(8)})
u($,"nC","bJ",function(){return Z.aC(16)})
u($,"nv","bH",function(){return Z.aC(32)})
u($,"nw","cX",function(){return Z.aC(64)})
u($,"nx","ln",function(){return Z.aC(96)})
u($,"nD","c7",function(){return Z.aC(128)})
u($,"nt","bo",function(){return Z.aC(256)})
u($,"nd","la",function(){return new V.fj(1e-9)})
u($,"nc","K",function(){return $.la()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cu,ArrayBufferView:H.cu,Float32Array:H.ct,Float64Array:H.ct,Int16Array:H.hc,Int32Array:H.hd,Int8Array:H.he,Uint16Array:H.hf,Uint32Array:H.hg,Uint8ClampedArray:H.dy,CanvasPixelArray:H.dy,Uint8Array:H.hh,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLBodyElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTableElement:W.p,HTMLTableRowElement:W.p,HTMLTableSectionElement:W.p,HTMLTemplateElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eR,HTMLAnchorElement:W.eT,HTMLAreaElement:W.eU,Blob:W.cZ,HTMLCanvasElement:W.bM,CDATASection:W.bq,CharacterData:W.bq,Comment:W.bq,ProcessingInstruction:W.bq,Text:W.bq,CSSNumericValue:W.cf,CSSUnitValue:W.cf,CSSPerspective:W.f6,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cg,MSStyleCSSProperties:W.cg,CSS2Properties:W.cg,CSSImageValue:W.aS,CSSKeywordValue:W.aS,CSSPositionValue:W.aS,CSSResourceValue:W.aS,CSSURLImageValue:W.aS,CSSStyleValue:W.aS,CSSMatrixComponent:W.aT,CSSRotation:W.aT,CSSScale:W.aT,CSSSkew:W.aT,CSSTranslation:W.aT,CSSTransformComponent:W.aT,CSSTransformValue:W.f8,CSSUnparsedValue:W.f9,DataTransferItemList:W.fb,HTMLDivElement:W.da,DOMException:W.fc,ClientRectList:W.db,DOMRectList:W.db,DOMRectReadOnly:W.dc,DOMStringList:W.fd,DOMTokenList:W.fe,Element:W.a6,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aV,FileList:W.fn,FileWriter:W.fo,HTMLFormElement:W.fs,Gamepad:W.aW,History:W.fw,HTMLCollection:W.bO,HTMLFormControlsCollection:W.bO,HTMLOptionsCollection:W.bO,KeyboardEvent:W.b_,Location:W.fO,MediaList:W.h5,MIDIInputMap:W.h6,MIDIOutputMap:W.h8,MimeType:W.b2,MimeTypeArray:W.ha,PointerEvent:W.ad,MouseEvent:W.ad,DragEvent:W.ad,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cv,RadioNodeList:W.cv,Plugin:W.b3,PluginArray:W.hn,RTCStatsReport:W.hu,HTMLSelectElement:W.hx,SourceBuffer:W.b5,SourceBufferList:W.hG,SpeechGrammar:W.b6,SpeechGrammarList:W.hH,SpeechRecognitionResult:W.b7,Storage:W.hL,CSSStyleSheet:W.aL,StyleSheet:W.aL,TextTrack:W.b8,TextTrackCue:W.aM,VTTCue:W.aM,TextTrackCueList:W.hT,TextTrackList:W.hU,TimeRanges:W.hW,Touch:W.b9,TouchEvent:W.aN,TouchList:W.hZ,TrackDefaultList:W.i_,CompositionEvent:W.bz,FocusEvent:W.bz,TextEvent:W.bz,UIEvent:W.bz,URL:W.ig,VideoTrackList:W.iv,WheelEvent:W.bc,Window:W.cG,DOMWindow:W.cG,CSSRuleList:W.iF,ClientRect:W.e1,DOMRect:W.e1,GamepadList:W.iS,NamedNodeMap:W.ej,MozNamedAttrMap:W.ej,SpeechRecognitionResultList:W.j1,StyleSheetList:W.j2,SVGLength:P.bf,SVGLengthList:P.fJ,SVGNumber:P.bi,SVGNumberList:P.hj,SVGPointList:P.hp,SVGStringList:P.hR,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGScriptElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGTransform:P.bj,SVGTransformList:P.i0,AudioBuffer:P.eX,AudioParamMap:P.eY,AudioTrackList:P.f_,AudioContext:P.bL,webkitAudioContext:P.bL,BaseAudioContext:P.bL,OfflineAudioContext:P.hk,WebGLBuffer:P.d_,WebGLProgram:P.dC,WebGL2RenderingContext:P.bV,WebGLShader:P.dF,WebGLUniformLocation:P.dP,SQLResultSetRowList:P.hI})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dw.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.dx.$nativeSuperclassTag="ArrayBufferView"
W.cN.$nativeSuperclassTag="EventTarget"
W.cO.$nativeSuperclassTag="EventTarget"
W.cP.$nativeSuperclassTag="EventTarget"
W.cQ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.l1,[])
else M.l1([])})})()
//# sourceMappingURL=main.dart.js.map
