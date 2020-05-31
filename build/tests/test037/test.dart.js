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
a[c]=function(){a[c]=function(){H.ov(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ky"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ky"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ky(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kg:function kg(){},
jx:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
my:function(a,b,c,d){if(!!J.M(a).$iq)return new H.f_(a,b,[c,d])
return new H.bU(a,b,[c,d])},
kU:function(){return new P.hx("No element")},
mV:function(a,b){var u=J.af(a)
if(typeof u!=="number")return u.u()
H.d9(a,0,u-1,b)},
d9:function(a,b,c,d){if(c-b<=32)H.mU(a,b,c,d)
else H.mT(a,b,c,d)},
mU:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.ak(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.X()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
mT:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a0(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a0(a4+a5,2),f=g-j,e=g+j,d=J.ak(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a1
a1=a0
a0=u}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.z(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.L()
if(p<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.X()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
s=o
t=n
break}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.L()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.X()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.X()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.L()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.k(a3,a4,d.h(a3,a2))
d.k(a3,a2,b)
a2=s+1
d.k(a3,a5,d.h(a3,a2))
d.k(a3,a2,a0)
H.d9(a3,a4,t-2,a6)
H.d9(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.z(a6.$2(d.h(a3,t),b),0);)++t
for(;J.z(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.L()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.d9(a3,t,s,a6)}else H.d9(a3,t,s,a6)},
N:function N(a){this.a=a},
q:function q(){},
bT:function bT(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bU:function bU(a,b,c){this.a=a
this.b=b
this.$ti=c},
f_:function f_(a,b,c){this.a=a
this.b=b
this.$ti=c},
fz:function fz(a,b){this.a=null
this.b=a
this.c=b},
iC:function iC(a,b,c){this.a=a
this.b=b
this.$ti=c},
iD:function iD(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
i8:function i8(){},
dn:function dn(){},
mi:function(){throw H.c(P.w("Cannot modify unmodifiable Map"))},
cr:function(a){var u,t=H.ox(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oh:function(a){return v.types[a]},
lI:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.M(a).$ix},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a7(a)
if(typeof u!=="string")throw H.c(H.a5(a))
return u},
c1:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mL:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.V(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.I(s,q)|32)>t)return}return parseInt(a,b)},
c2:function(a){return H.mC(a)+H.lw(H.cp(a),0,null)},
mC:function(a){var u,t,s,r,q,p,o,n=J.M(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.N||!!n.$ibx){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cr(t.length>1&&C.a.I(t,0)===36?C.a.a9(t,1):t)},
mD:function(){if(!!self.location)return self.location.href
return},
l4:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mM:function(a){var u,t,s,r=H.d([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.a5(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aE(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.a5(s))}return H.l4(r)},
l5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.a5(s))
if(s<0)throw H.c(H.a5(s))
if(s>65535)return H.mM(a)}return H.l4(a)},
mN:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.hO()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
d4:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aE(u,10))>>>0,56320|u&1023)}}throw H.c(P.V(a,0,1114111,null,null))},
br:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mK:function(a){var u=H.br(a).getFullYear()+0
return u},
mI:function(a){var u=H.br(a).getMonth()+1
return u},
mE:function(a){var u=H.br(a).getDate()+0
return u},
mF:function(a){var u=H.br(a).getHours()+0
return u},
mH:function(a){var u=H.br(a).getMinutes()+0
return u},
mJ:function(a){var u=H.br(a).getSeconds()+0
return u},
mG:function(a){var u=H.br(a).getMilliseconds()+0
return u},
h:function(a){throw H.c(H.a5(a))},
b:function(a,b){if(a==null)J.af(a)
throw H.c(H.bG(a,b))},
bG:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.h(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.d5(b,s)},
ob:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bs(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bs(a,c,!0,b,"end",u)
return new P.am(!0,b,"end",null)},
a5:function(a){return new P.am(!0,a,null,null)},
o4:function(a){if(typeof a!=="number")throw H.c(H.a5(a))
return a},
c:function(a){var u
if(a==null)a=new P.d1()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lP})
u.name=""}else u.toString=H.lP
return u},
lP:function(){return J.a7(this.dartException)},
n:function(a){throw H.c(a)},
p:function(a){throw H.c(P.aX(a))},
aB:function(a){var u,t,s,r,q,p
a=H.lM(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hW(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
le:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l0:function(a,b){return new H.h1(a,b==null?null:b.method)},
kh:function(a,b){var u=b==null,t=u?null:b.method
return new H.fk(a,t,u?null:b.receiver)},
ba:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aE(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kh(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.l0(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lS()
q=$.lT()
p=$.lU()
o=$.lV()
n=$.lY()
m=$.lZ()
l=$.lX()
$.lW()
k=$.m0()
j=$.m_()
i=r.ac(u)
if(i!=null)return f.$1(H.kh(u,i))
else{i=q.ac(u)
if(i!=null){i.method="call"
return f.$1(H.kh(u,i))}else{i=p.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=n.ac(u)
if(i==null){i=m.ac(u)
if(i==null){i=l.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=k.ac(u)
if(i==null){i=j.ac(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.l0(u,i))}}return f.$1(new H.i7(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.db()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.am(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.db()
return a},
kA:function(a){var u
if(a==null)return new H.e2(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e2(a)},
of:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
ol:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
bF:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ol)
a.$identity=u
return u},
mh:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hy().constructor.prototype):Object.create(new H.bK(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.an
if(typeof t!=="number")return t.v()
$.an=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kP(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.md(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kP(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
md:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oh,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kO:H.k6
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
me:function(a,b,c,d){var u=H.k6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kP:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mg(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.me(t,!r,u,b)
if(t===0){r=$.an
if(typeof r!=="number")return r.v()
$.an=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bL
return new Function(r+H.e(q==null?$.bL=H.eG("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.an
if(typeof r!=="number")return r.v()
$.an=r+1
o+=r
r="return function("+o+"){return this."
q=$.bL
return new Function(r+H.e(q==null?$.bL=H.eG("self"):q)+"."+H.e(u)+"("+o+");}")()},
mf:function(a,b,c,d){var u=H.k6,t=H.kO
switch(b?-1:a){case 0:throw H.c(H.mR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mg:function(a,b){var u,t,s,r,q,p,o,n=$.bL
if(n==null)n=$.bL=H.eG("self")
u=$.kN
if(u==null)u=$.kN=H.eG("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mf(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.an
if(typeof u!=="number")return u.v()
$.an=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.an
if(typeof u!=="number")return u.v()
$.an=u+1
return new Function(n+u+"}")()},
ky:function(a,b,c,d,e,f,g){return H.mh(a,b,c,d,!!e,!!f,g)},
k6:function(a){return a.a},
kO:function(a){return a.c},
eG:function(a){var u,t,s,r=new H.bK("self","target","receiver","name"),q=J.ke(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oq:function(a,b){throw H.c(H.mc(a,H.cr(b.substring(2))))},
o:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else u=!0
if(u)return a
H.oq(a,b)},
od:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mc:function(a,b){return new H.eH("CastError: "+P.kc(a)+": type '"+H.e(H.o0(a))+"' is not a subtype of type '"+b+"'")},
o0:function(a){var u,t=J.M(a)
if(!!t.$ibM){u=H.od(t)
if(u!=null)return H.or(u)
return"Closure"}return H.c2(a)},
ov:function(a){throw H.c(new P.eT(a))},
mR:function(a){return new H.hi(a)},
lF:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
cp:function(a){if(a==null)return
return a.$ti},
p6:function(a,b,c){return H.k_(a["$a"+H.e(c)],H.cp(b))},
og:function(a,b,c,d){var u=H.k_(a["$a"+H.e(c)],H.cp(b))
return u==null?null:u[d]},
lG:function(a,b,c){var u=H.k_(a["$a"+H.e(b)],H.cp(a))
return u==null?null:u[c]},
b9:function(a,b){var u=H.cp(a)
return u==null?null:u[b]},
or:function(a){return H.b7(a,null)},
b7:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cr(a[0].name)+H.lw(a,1,b)
if(typeof a=="function")return H.cr(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.nw(a,b)
if('futureOr' in a)return"FutureOr<"+H.b7("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nw:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.m])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.v(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.b7(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b7(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b7(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b7(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oe(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b7(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lw:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.R("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b7(p,c)}return"<"+u.i(0)+">"},
k_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
p4:function(a,b,c){return a.apply(b,H.k_(J.M(b)["$a"+H.e(c)],H.cp(b)))},
p5:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
on:function(a){var u,t,s,r,q=$.lH.$1(a),p=$.js[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jB[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lB.$2(a,q)
if(q!=null){p=$.js[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jB[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jW(u)
$.js[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jB[q]=u
return u}if(s==="-"){r=H.jW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lK(a,u)
if(s==="*")throw H.c(P.i6(q))
if(v.leafTags[q]===true){r=H.jW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lK(a,u)},
lK:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kD(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jW:function(a){return J.kD(a,!1,null,!!a.$ix)},
oo:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jW(u)
else return J.kD(u,c,null,null)},
oj:function(){if(!0===$.kC)return
$.kC=!0
H.ok()},
ok:function(){var u,t,s,r,q,p,o,n
$.js=Object.create(null)
$.jB=Object.create(null)
H.oi()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lL.$1(q)
if(p!=null){o=H.oo(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oi:function(){var u,t,s,r,q,p,o=C.E()
o=H.bE(C.F,H.bE(C.G,H.bE(C.t,H.bE(C.t,H.bE(C.H,H.bE(C.I,H.bE(C.J(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lH=new H.jy(r)
$.lB=new H.jz(q)
$.lL=new H.jA(p)},
bE:function(a,b){return a(b)||b},
ms:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.O("Illegal RegExp pattern ("+String(p)+")",a,null))},
lN:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oc:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lM:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lO:function(a,b,c){var u=H.ou(a,b,c)
return u},
ou:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lM(b),'g'),H.oc(c))},
eM:function eM(){},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hW:function hW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h1:function h1(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a){this.a=a},
k1:function k1(a){this.a=a},
e2:function e2(a){this.a=a
this.b=null},
bM:function bM(){},
hE:function hE(){},
hy:function hy(){},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a){this.a=a},
hi:function hi(a){this.a=a},
F:function F(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fj:function fj(a){this.a=a},
fo:function fo(a,b){this.a=a
this.b=b
this.c=null},
fp:function fp(a,b){this.a=a
this.$ti=b},
fq:function fq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
fi:function fi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bC:function(a){return a},
mB:function(a){return new Int8Array(a)},
aC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bG(b,a))},
nu:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.ob(a,b,c))
return b},
bY:function bY(){},
b1:function b1(){},
cY:function cY(){},
bZ:function bZ(){},
cZ:function cZ(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
d_:function d_(){},
c_:function c_(){},
cc:function cc(){},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
oe:function(a){return J.kV(a?Object.keys(a):[],null)},
ox:function(a){return v.mangledGlobalNames[a]},
op:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ju:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kC==null){H.oj()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.i6("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kG()]
if(r!=null)return r
r=H.on(a)
if(r!=null)return r
if(typeof a=="function")return C.P
u=Object.getPrototypeOf(a)
if(u==null)return C.y
if(u===Object.prototype)return C.y
if(typeof s=="function"){Object.defineProperty(s,$.kG(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
mp:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.k5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.V(a,0,4294967295,"length",null))
return J.kV(new Array(a),b)},
kV:function(a,b){return J.ke(H.d(a,[b]))},
ke:function(a){a.fixed$length=Array
return a},
mq:function(a,b){return J.cu(a,b)},
M:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cN.prototype
return J.cM.prototype}if(typeof a=="string")return J.b_.prototype
if(a==null)return J.cO.prototype
if(typeof a=="boolean")return J.fh.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a_)return a
return J.ju(a)},
ak:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a_)return a
return J.ju(a)},
jt:function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a_)return a
return J.ju(a)},
lE:function(a){if(typeof a=="number")return J.bR.prototype
if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bx.prototype
return a},
kz:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bx.prototype
return a},
eq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a_)return a
return J.ju(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).p(a,b)},
kK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lE(a).m(a,b)},
bI:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ak(a).h(a,b)},
k2:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lI(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jt(a).k(a,b,c)},
m6:function(a,b){return J.kz(a).I(a,b)},
m7:function(a,b,c){return J.eq(a).fj(a,b,c)},
m8:function(a,b,c,d){return J.eq(a).fF(a,b,c,d)},
m9:function(a,b){return J.kz(a).T(a,b)},
cu:function(a,b){return J.lE(a).aH(a,b)},
k3:function(a,b){return J.ak(a).U(a,b)},
k4:function(a,b){return J.jt(a).J(a,b)},
ma:function(a,b,c,d){return J.eq(a).h1(a,b,c,d)},
kL:function(a,b){return J.jt(a).D(a,b)},
bJ:function(a){return J.eq(a).gbO(a)},
cv:function(a){return J.M(a).gH(a)},
aT:function(a){return J.jt(a).gR(a)},
af:function(a){return J.ak(a).gj(a)},
mb:function(a,b){return J.eq(a).hz(a,b)},
a7:function(a){return J.M(a).i(a)},
a:function a(){},
fh:function fh(){},
cO:function cO(){},
cP:function cP(){},
h5:function h5(){},
bx:function bx(){},
b0:function b0(){},
aZ:function aZ(a){this.$ti=a},
kf:function kf(a){this.$ti=a},
a0:function a0(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bR:function bR(){},
cN:function cN(){},
cM:function cM(){},
b_:function b_(){}},P={
n6:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.o1()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bF(new P.iF(s),1)).observe(u,{childList:true})
return new P.iE(s,u,t)}else if(self.setImmediate!=null)return P.o2()
return P.o3()},
n7:function(a){self.scheduleImmediate(H.bF(new P.iG(a),0))},
n8:function(a){self.setImmediate(H.bF(new P.iH(a),0))},
n9:function(a){P.kk(C.n,a)},
kk:function(a,b){var u=C.c.a0(a.a,1000)
return P.ne(u<0?0:u,b)},
ld:function(a,b){var u=C.c.a0(a.a,1000)
return P.nf(u<0?0:u,b)},
ne:function(a,b){var u=new P.e9()
u.e0(a,b)
return u},
nf:function(a,b){var u=new P.e9()
u.e1(a,b)
return u},
p1:function(a){return new P.bz(a,1)},
na:function(){return C.Z},
nb:function(a){return new P.bz(a,3)},
nz:function(a,b){return new P.j3(a,[b])},
nV:function(){var u,t
for(;u=$.bD,u!=null;){$.co=null
t=u.b
$.bD=t
if(t==null)$.cn=null
u.a.$0()}},
o_:function(){$.kw=!0
try{P.nV()}finally{$.co=null
$.kw=!1
if($.bD!=null)$.kJ().$1(P.lC())}},
nY:function(a){var u=new P.dv(a)
if($.bD==null){$.bD=$.cn=u
if(!$.kw)$.kJ().$1(P.lC())}else $.cn=$.cn.b=u},
nZ:function(a){var u,t,s=$.bD
if(s==null){P.nY(a)
$.co=$.cn
return}u=new P.dv(a)
t=$.co
if(t==null){u.b=s
$.bD=$.co=u}else{u.b=t.b
$.co=t.b=u
if(u.b==null)$.cn=u}},
lc:function(a,b){var u=$.aj
if(u===C.f)return P.kk(a,b)
return P.kk(a,u.fJ(b))},
mY:function(a,b){var u=$.aj
if(u===C.f)return P.ld(a,b)
return P.ld(a,u.cZ(b,P.dh))},
lx:function(a,b,c,d,e){var u={}
u.a=d
P.nZ(new P.jn(u,e))},
nW:function(a,b,c,d){var u,t=$.aj
if(t===c)return d.$0()
$.aj=c
u=t
try{t=d.$0()
return t}finally{$.aj=u}},
nX:function(a,b,c,d,e){var u,t=$.aj
if(t===c)return d.$1(e)
$.aj=c
u=t
try{t=d.$1(e)
return t}finally{$.aj=u}},
iF:function iF(a){this.a=a},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
e9:function e9(){this.c=0},
j5:function j5(a,b){this.a=a
this.b=b},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b){this.a=a
this.b=b},
ci:function ci(a){var _=this
_.a=a
_.d=_.c=_.b=null},
j3:function j3(a,b){this.a=a
this.$ti=b},
dv:function dv(a){this.a=a
this.b=null},
dd:function dd(){},
hB:function hB(){},
dh:function dh(){},
je:function je(){},
jn:function jn(a,b){this.a=a
this.b=b},
iU:function iU(){},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
mu:function(a,b){return new H.F([a,b])},
kW:function(a,b){return new H.F([a,b])},
mv:function(a){return H.of(a,new H.F([null,null]))},
kY:function(a){return new P.iR([a])},
kr:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nd:function(a,b){var u=new P.dL(a,b)
u.c=a.e
return u},
mo:function(a,b,c){var u,t
if(P.kx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.m])
$.a4.push(a)
try{P.ny(a,u)}finally{if(0>=$.a4.length)return H.b($.a4,-1)
$.a4.pop()}t=P.la(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kd:function(a,b,c){var u,t
if(P.kx(a))return b+"..."+c
u=new P.R(b)
$.a4.push(a)
try{t=u
t.a=P.la(t.a,a,", ")}finally{if(0>=$.a4.length)return H.b($.a4,-1)
$.a4.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kx:function(a){var u,t
for(u=$.a4.length,t=0;t<u;++t)if(a===$.a4[t])return!0
return!1},
ny:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.e(n.gF(n))
b.push(u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gF(n);++l
if(!n.A()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gF(n);++l
for(;n.A();r=q,q=p){p=n.gF(n);++l
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
kX:function(a,b,c){var u=P.mu(b,c)
a.D(0,new P.fr(u))
return u},
ki:function(a){var u,t={}
if(P.kx(a))return"{...}"
u=new P.R("")
try{$.a4.push(a)
u.a+="{"
t.a=!0
J.kL(a,new P.fx(t,u))
u.a+="}"}finally{if(0>=$.a4.length)return H.b($.a4,-1)
$.a4.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iR:function iR(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iS:function iS(a){this.a=a
this.c=this.b=null},
dL:function dL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ff:function ff(){},
fr:function fr(a){this.a=a},
fs:function fs(){},
v:function v(){},
fw:function fw(){},
fx:function fx(a,b){this.a=a
this.b=b},
a2:function a2(){},
j6:function j6(){},
fy:function fy(){},
dp:function dp(a,b){this.a=a
this.$ti=b},
iX:function iX(){},
dM:function dM(){},
ef:function ef(){},
n0:function(a,b,c,d){if(b instanceof Uint8Array)return P.n1(!1,b,c,d)
return},
n1:function(a,b,c,d){var u,t,s=$.m1()
if(s==null)return
u=0===c
if(u&&!0)return P.kn(s,b)
t=b.length
d=P.aN(c,d,t)
if(u&&d===t)return P.kn(s,b)
return P.kn(s,b.subarray(c,d))},
kn:function(a,b){if(P.n3(b))return
return P.n4(a,b)},
n4:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ba(t)}return},
n3:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
n2:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ba(t)}return},
lz:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.h(c)
u=J.ak(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a3()
if((s&127)!==s)return t-b}return c-b},
kM:function(a,b,c,d,e,f){if(C.c.ai(f,4)!==0)throw H.c(P.O("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.O("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.O("Invalid base64 padding, more than two '=' characters",a,b))},
eD:function eD(){},
eE:function eE(){},
eJ:function eJ(){},
eO:function eO(){},
f0:function f0(){},
ii:function ii(){},
ik:function ik(){},
jd:function jd(a){this.b=0
this.c=a},
ij:function ij(a){this.a=a},
jc:function jc(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cq:function(a,b,c){var u=H.mL(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.O(a,null,null))},
ml:function(a){if(a instanceof H.bM)return a.i(0)
return"Instance of '"+H.e(H.c2(a))+"'"},
mw:function(a,b,c){var u,t,s=J.mp(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
ft:function(a,b,c){var u,t=H.d([],[c])
for(u=J.aT(a);u.A();)t.push(u.gF(u))
if(b)return t
return J.ke(t)},
c3:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aN(b,c,u)
if(b<=0){if(typeof c!=="number")return c.L()
t=c<u}else t=!0
return H.l5(t?C.b.dO(a,b,c):a)}if(!!J.M(a).$ic_)return H.mN(a,b,P.aN(b,c,a.length))
return P.mW(a,b,c)},
mW:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.V(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.V(c,b,J.af(a),q,q))
t=J.aT(a)
for(s=0;s<b;++s)if(!t.A())throw H.c(P.V(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gF(t))
else for(s=b;s<c;++s){if(!t.A())throw H.c(P.V(c,b,s,q,q))
r.push(t.gF(t))}return H.l5(r)},
mP:function(a){return new H.fi(a,H.ms(a,!1,!0,!1,!1,!1))},
la:function(a,b,c){var u=J.aT(b)
if(!u.A())return a
if(c.length===0){do a+=H.e(u.gF(u))
while(u.A())}else{a+=H.e(u.gF(u))
for(;u.A();)a=a+c+H.e(u.gF(u))}return a},
ic:function(){var u=H.mD()
if(u!=null)return P.n_(u)
throw H.c(P.w("'Uri.base' is not supported"))},
jb:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.m4().b
if(typeof b!=="string")H.n(H.a5(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gh0().bQ(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.d4(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mj:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mk:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cD:function(a){if(a>=10)return""+a
return"0"+a},
kR:function(a){return new P.aY(1000*a)},
kc:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ml(a)},
cw:function(a){return new P.am(!1,null,null,a)},
k5:function(a,b,c){return new P.am(!0,a,b,c)},
d5:function(a,b){return new P.bs(null,null,!0,a,b,"Value not in range")},
V:function(a,b,c,d,e){return new P.bs(b,c,!0,a,d,"Invalid value")},
aN:function(a,b,c){var u
if(typeof a!=="number")return H.h(a)
if(0<=a){if(typeof c!=="number")return H.h(c)
u=a>c}else u=!0
if(u)throw H.c(P.V(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.h(c)
u=b>c}else u=!0
if(u)throw H.c(P.V(b,a,c,"end",null))
return b}return c},
l7:function(a,b){if(typeof a!=="number")return a.L()
if(a<0)throw H.c(P.V(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fe(u,!0,a,c,"Index out of range")},
w:function(a){return new P.i9(a)},
i6:function(a){return new P.i5(a)},
aX:function(a){return new P.eL(a)},
t:function(a){return new P.dE(a)},
O:function(a,b,c){return new P.fb(a,b,c)},
mx:function(a,b,c){var u,t,s=H.d([],[c])
C.b.sj(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kF:function(a){H.op(a)},
n_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.I(a,4)^58)*3|C.a.I(a,0)^100|C.a.I(a,1)^97|C.a.I(a,2)^116|C.a.I(a,3)^97)>>>0
if(u===0)return P.lf(e<e?C.a.q(a,0,e):a,5,f).gdI()
else if(u===32)return P.lf(C.a.q(a,5,e),0,f).gdI()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.u])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.ly(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.hN()
if(r>=0)if(P.ly(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.v()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.L()
if(typeof n!=="number")return H.h(n)
if(m<n)n=m
if(typeof o!=="number")return o.L()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.L()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.L()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a1(a,"..",o)))j=n>o+2&&C.a.a1(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a1(a,"file",0)){if(q<=0){if(!C.a.a1(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.q(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aL(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a1(a,"http",0)){if(t&&p+3===o&&C.a.a1(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aL(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a1(a,"https",0)){if(t&&p+4===o&&C.a.a1(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aL(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iY(a,r,q,p,o,n,m,k)}return P.ng(a,0,e,r,q,p,o,n,m,k)},
lh:function(a){var u=P.m
return C.b.h5(H.d(a.split("&"),[u]),P.kW(u,u),new P.ig(C.e))},
mZ:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.ib(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.T(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cq(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.X()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cq(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.X()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.id(a),d=new P.ie(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.u])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.T(a,t)
if(p===58){if(t===b){++t
if(C.a.T(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gat(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.mZ(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aE(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
ng:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.no(a,b,d)
else{if(d===b)P.bB(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.np(a,u,e-1):""
s=P.nl(a,e,f,!1)
if(typeof f!=="number")return f.v()
r=f+1
if(typeof g!=="number")return H.h(g)
q=r<g?P.nn(P.cq(C.a.q(a,r,g),new P.j7(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nm(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.L()
o=h<i?P.kt(a,h+1,i,n):n
return new P.bA(j,t,s,q,p,o,i<c?P.nk(a,i+1,c):n)},
lq:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bB:function(a,b,c){throw H.c(P.O(c,a,b))},
nn:function(a,b){if(a!=null&&a===P.lq(b))return
return a},
nl:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.T(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.a.T(a,u)!==93)P.bB(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.ni(a,t,u)
if(typeof s!=="number")return s.L()
if(s<u){r=s+1
q=P.lv(a,C.a.a1(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lg(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.h(c)
p=b
for(;p<c;++p)if(C.a.T(a,p)===58){s=C.a.bd(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lv(a,C.a.a1(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lg(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.nr(a,b,c)},
ni:function(a,b,c){var u,t=C.a.bd(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.h(c)
u=t<c}else u=!1
return u?t:c},
lv:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.R(d):null
if(typeof c!=="number")return H.h(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.T(a,u)
if(r===37){q=P.ku(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.R("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bB(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.R("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.T(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.R("")
l.a+=C.a.q(a,t,u)
l.a+=P.ks(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.h(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.T(a,u)
if(q===37){p=P.ku(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.R("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.v,o)
o=(C.v[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.R("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bB(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.T(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.R("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ks(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
no:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.ls(C.a.I(a,b)))P.bB(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bB(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nh(t?a.toLowerCase():a)},
nh:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
np:function(a,b,c){return P.cl(a,b,c,C.R,!1)},
nm:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cl(a,b,c,C.w,!0):C.j.i9(d,new P.j8(),P.m).n(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a8(u,"/"))u="/"+u
return P.nq(u,e,f)},
nq:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a8(a,"/"))return P.ns(a,!u||c)
return P.nt(a)},
kt:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cw("Both query and queryParameters specified"))
return P.cl(a,b,c,C.l,!0)}if(d==null)return
u=new P.R("")
t.a=""
d.D(0,new P.j9(new P.ja(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nk:function(a,b,c){return P.cl(a,b,c,C.l,!0)},
ku:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.T(a,b+1)
t=C.a.T(a,p)
s=H.jx(u)
r=H.jx(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aE(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.d4(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
ks:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.u])
t[0]=37
t[1]=C.a.I(m,a>>>4)
t[2]=C.a.I(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.u])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fu(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.I(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.I(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.c3(t,0,null)},
cl:function(a,b,c,d,e){var u=P.lu(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
lu:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.L()
if(typeof c!=="number")return H.h(c)
if(!(o<c))break
c$0:{u=C.a.T(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.ku(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bB(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.T(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.ks(u)}}if(m==null)m=new P.R("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.h(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.L()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lt:function(a){if(C.a.a8(a,"."))return!0
return C.a.dh(a,"/.")!==-1},
nt:function(a){var u,t,s,r,q,p,o
if(!P.lt(a))return a
u=H.d([],[P.m])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.z(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.n(u,"/")},
ns:function(a,b){var u,t,s,r,q,p
if(!P.lt(a))return!b?P.lr(a):a
u=H.d([],[P.m])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gat(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gat(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lr(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.n(u,"/")},
lr:function(a){var u,t,s,r=a.length
if(r>=2&&P.ls(J.m6(a,0)))for(u=1;u<r;++u){t=C.a.I(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.a9(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nj:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cw("Invalid URL encoding"))}}return u},
kv:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.I(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.N(C.a.q(a,b,c))}else{r=H.d([],[P.u])
for(s=a.length,q=b;q<c;++q){t=C.a.I(a,q)
if(t>127)throw H.c(P.cw("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cw("Truncated URI"))
r.push(P.nj(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.ij(!1).bQ(r)},
ls:function(a){var u=a|32
return 97<=u&&u<=122},
lf:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.u])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.I(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.O(m,a,t))}}if(s<0&&t>b)throw H.c(P.O(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.I(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gat(l)
if(r!==44||t!==p+7||!C.a.a1(a,"base64",p+1))throw H.c(P.O("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.D.he(0,a,o,u)
else{n=P.lu(a,o,u,C.l,!0)
if(n!=null)a=C.a.aL(a,o,u,n)}return new P.ia(a,l,c)},
nv:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mx(22,new P.ji(),P.bu),n=new P.jh(o),m=new P.jj(),l=new P.jk(),k=n.$2(0,225)
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(14,225)
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(15,225)
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(1,225)
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(2,235)
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(3,235)
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(4,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(5,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(6,231)
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(7,231)
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(n.$2(8,8),"]",5)
k=n.$2(9,235)
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(16,235)
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(17,235)
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(10,235)
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(18,235)
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(19,235)
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(11,235)
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(12,236)
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=n.$2(13,237)
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(n.$2(20,245),"az",21)
k=n.$2(21,245)
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
ly:function(a,b,c,d,e){var u,t,s,r,q,p=$.m5()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.I(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
b8:function b8(){},
a8:function a8(a,b){this.a=a
this.b=b},
I:function I(){},
aY:function aY(a){this.a=a},
eY:function eY(){},
eZ:function eZ(){},
bh:function bh(){},
d1:function d1(){},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fe:function fe(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i9:function i9(a){this.a=a},
i5:function i5(a){this.a=a},
hx:function hx(a){this.a=a},
eL:function eL(a){this.a=a},
h4:function h4(){},
db:function db(){},
eT:function eT(a){this.a=a},
dE:function dE(a){this.a=a},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
j:function j(){},
fg:function fg(){},
r:function r(){},
P:function P(){},
b2:function b2(){},
a6:function a6(){},
a_:function a_(){},
m:function m(){},
R:function R(a){this.a=a},
ig:function ig(a){this.a=a},
ib:function ib(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
j7:function j7(a,b){this.a=a
this.b=b},
j8:function j8(){},
ja:function ja(a,b){this.a=a
this.b=b},
j9:function j9(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(){},
jh:function jh(a){this.a=a},
jj:function jj(){},
jk:function jk(){},
iY:function iY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iL:function iL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
o7:function(a){var u,t=J.M(a)
if(!!t.$iaH){u=t.gd1(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ee(a.data,a.height,a.width)},
o6:function(a){if(a instanceof P.ee)return{data:a.a,height:a.b,width:a.c}
return a},
aQ:function(a){var u,t,s,r,q
if(a==null)return
u=P.kW(P.m,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
o5:function(a){var u={}
a.D(0,new P.jo(u))
return u},
j_:function j_(){},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
jo:function jo(a){this.a=a},
e6:function e6(a,b){this.a=a
this.b=b},
f7:function f7(a,b){this.a=a
this.b=b},
f8:function f8(){},
f9:function f9(){},
iQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nc:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iT:function iT(){},
a3:function a3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aI:function aI(){},
fm:function fm(){},
aM:function aM(){},
h2:function h2(){},
h9:function h9(){},
hC:function hC(){},
k:function k(){},
aO:function aO(){},
hV:function hV(){},
dJ:function dJ(){},
dK:function dK(){},
dU:function dU(){},
dV:function dV(){},
e4:function e4(){},
e5:function e5(){},
ec:function ec(){},
ed:function ed(){},
bu:function bu(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(a){this.a=a},
eB:function eB(){},
bc:function bc(){},
h3:function h3(){},
dw:function dw(){},
d7:function d7(){},
hw:function hw(){},
e0:function e0(){},
e1:function e1(){}},W={
k8:function(){var u=document.createElement("canvas")
return u},
kb:function(a){return"wheel"},
kT:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
mn:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ba(u)}return s},
iP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lp:function(a,b,c,d){var u=W.iP(W.iP(W.iP(W.iP(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
U:function(a,b,c,d){var u=W.lA(new W.iN(c),W.i)
if(u!=null&&!0)J.m8(a,b,u,!1)
return new W.iM(a,b,u,!1)},
lA:function(a,b){var u=$.aj
if(u===C.f)return a
return u.cZ(a,b)},
l:function l(){},
et:function et(){},
ev:function ev(){},
ew:function ew(){},
bd:function bd(){},
bf:function bf(){},
aU:function aU(){},
eP:function eP(){},
E:function E(){},
bN:function bN(){},
eQ:function eQ(){},
ab:function ab(){},
ao:function ao(){},
eR:function eR(){},
eS:function eS(){},
eU:function eU(){},
eV:function eV(){},
cF:function cF(){},
cG:function cG(){},
eW:function eW(){},
eX:function eX(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
T:function T(){},
i:function i(){},
f:function f(){},
ag:function ag(){},
bO:function bO(){},
f6:function f6(){},
fa:function fa(){},
ap:function ap(){},
fd:function fd(){},
bQ:function bQ(){},
aH:function aH(){},
bk:function bk(){},
bo:function bo(){},
fu:function fu(){},
fP:function fP(){},
bW:function bW(){},
fQ:function fQ(){},
fR:function fR(a){this.a=a},
fS:function fS(){},
fT:function fT(a){this.a=a},
as:function as(){},
fU:function fU(){},
at:function at(){},
iI:function iI(a){this.a=a},
A:function A(){},
d0:function d0(){},
au:function au(){},
h6:function h6(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
hj:function hj(){},
aw:function aw(){},
ht:function ht(){},
ax:function ax(){},
hu:function hu(){},
ay:function ay(){},
hz:function hz(){},
hA:function hA(a){this.a=a},
ah:function ah(){},
az:function az(){},
ai:function ai(){},
hF:function hF(){},
hG:function hG(){},
hQ:function hQ(){},
aA:function aA(){},
bt:function bt(){},
hT:function hT(){},
hU:function hU(){},
b4:function b4(){},
ih:function ih(){},
iA:function iA(){},
b6:function b6(){},
cb:function cb(){},
iK:function iK(){},
dy:function dy(){},
iO:function iO(){},
dR:function dR(){},
iZ:function iZ(){},
j2:function j2(){},
iM:function iM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iN:function iN(a){this.a=a},
K:function K(){},
cK:function cK(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dx:function dx(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dS:function dS(){},
dT:function dT(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
cg:function cg(){},
ch:function ch(){},
dZ:function dZ(){},
e_:function e_(){},
e3:function e3(){},
e7:function e7(){},
e8:function e8(){},
cj:function cj(){},
ck:function ck(){},
ea:function ea(){},
eb:function eb(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){}},K={
Y:function(a){var u=new K.hk()
u.dU(a)
return u},
eu:function eu(){},
cL:function cL(){},
cT:function cT(){},
aL:function aL(){this.a=null},
hk:function hk(){this.a=null},
lJ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a="heightMaps",a0="modifiers",a1={},a2=V.mS("Test 037"),a3=W.k8()
a3.className="pageLargeCanvas"
a3.id=b
a2.a.appendChild(a3)
u=[P.m]
a2.cV(H.d(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],u))
a2.fE(H.d(["heightMaps","shapes","scalars"],u))
a2.cV(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.n(P.t("Failed to find an element with the identifier, testCanvas."))
s=E.mX(t,!0,!0,!0,!1)
r=new O.cU()
a2=O.k9(V.aJ)
r.e=a2
a2.b6(r.geu(),r.gew())
a2=new O.aq(r,"emission")
a2.c=new A.Z(!1,!1,!1)
a2.f=new V.W(0,0,0)
r.f=a2
a2=new O.aq(r,"ambient")
a2.c=new A.Z(!1,!1,!1)
a2.f=new V.W(0,0,0)
r.r=a2
a2=new O.aq(r,"diffuse")
a2.c=new A.Z(!1,!1,!1)
a2.f=new V.W(0,0,0)
r.x=a2
a2=new O.aq(r,"invDiffuse")
a2.c=new A.Z(!1,!1,!1)
a2.f=new V.W(0,0,0)
r.y=a2
a2=new O.fG(r,"specular")
a2.c=new A.Z(!1,!1,!1)
a2.f=new V.W(0,0,0)
a2.ch=100
r.z=a2
a2=new O.fC(r,"bump")
a2.c=new A.Z(!1,!1,!1)
r.Q=a2
r.ch=null
a2=new O.aq(r,"reflect")
a2.c=new A.Z(!1,!1,!1)
a2.f=new V.W(0,0,0)
r.cx=a2
a2=new O.fF(r,"refract")
a2.c=new A.Z(!1,!1,!1)
a2.f=new V.W(0,0,0)
a2.ch=1
r.cy=a2
a2=new O.fB(r,"alpha")
a2.c=new A.Z(!1,!1,!1)
a2.f=1
r.db=a2
a2=new D.cR()
a2.bm(D.a1)
a2.e=H.d([],[D.eC])
a2.f=H.d([],[D.bg])
a2.r=H.d([],[D.h7])
a2.x=H.d([],[D.hv])
a2.z=a2.y=null
a2.cj(a2.ger(),a2.gf4(),a2.gf8())
r.dx=a2
q=new O.fE()
q.b=new V.aW(0,0,0,0)
q.c=1
q.d=10
q.e=!1
r.dy=q
q=a2.y
a2=q==null?a2.y=D.J():q
a2.l(0,r.gfl())
a2=r.dx
q=a2.z
a2=q==null?a2.z=D.J():q
a2.l(0,r.geA())
r.fr=null
a2=r.dx
p=V.ko()
q=U.kQ(V.kZ(V.l3(),p,new V.y(1,1,-3)))
o=new V.W(1,1,1)
n=new D.bg()
n.c=new V.W(1,1,1)
n.a=V.lm()
n.d=V.ko()
n.e=V.n5()
m=n.b
n.b=q
q.gB().l(0,n.gdY())
q=new D.B("mover",m,n.b)
q.b=!0
n.am(q)
if(!n.c.p(0,o)){m=n.c
n.c=o
q=new D.B("color",m,o)
q.b=!0
n.am(q)}a2.l(0,n)
a2=r.r
a2.saG(0,new V.W(0,0,1))
a2=r.x
a2.saG(0,new V.W(0,1,0))
a2=r.z
a2.saG(0,new V.W(1,0,0))
a2=r.z
a2.cO(new A.Z(!0,!1,!1))
a2.cP(10)
l=E.kS()
l.sdE(r)
k=E.kS()
k.y.l(0,l)
a2=new U.bP()
a2.bm(U.a9)
a2.b6(a2.gep(),a2.gf6())
a2.e=null
a2.f=V.cX()
a2.r=0
q=s.x
n=new U.ds()
j=U.ka()
j.scg(0,!0)
j.sc4(6.283185307179586)
j.sc6(0)
j.sW(0,0)
j.sc5(100)
j.sS(0)
j.sbS(0.5)
n.b=j
i=n.gay()
j.gB().l(0,i)
j=U.ka()
j.scg(0,!0)
j.sc4(6.283185307179586)
j.sc6(0)
j.sW(0,0)
j.sc5(100)
j.sS(0)
j.sbS(0.5)
n.c=j
j.gB().l(0,i)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
h=new X.ac(!1,!1,!1)
m=n.d
n.d=h
j=new D.B(a0,m,h)
j.b=!0
n.O(j)
j=n.f
if(j!==!1){n.f=!1
j=new D.B("invertX",j,!1)
j.b=!0
n.O(j)}j=n.r
if(j!==!1){n.r=!1
j=new D.B("invertY",j,!1)
j.b=!0
n.O(j)}n.aT(q)
a2.l(0,n)
q=s.x
n=new U.dr()
j=U.ka()
j.scg(0,!0)
j.sc4(6.283185307179586)
j.sc6(0)
j.sW(0,0)
j.sc5(100)
j.sS(0)
j.sbS(0.2)
n.b=j
j.gB().l(0,n.gay())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
h=new X.ac(!0,!1,!1)
m=n.c
n.c=h
j=new D.B(a0,m,h)
j.b=!0
n.O(j)
n.aT(q)
a2.l(0,n)
q=s.x
n=new U.dt()
n.c=0.01
n.e=n.d=0
h=new X.ac(!1,!1,!1)
n.b=h
j=new D.B(a0,null,h)
j.b=!0
n.O(j)
n.aT(q)
a2.l(0,n)
k.saZ(a2)
a2=new M.cH()
a2.a=!0
q=O.k9(E.aG)
a2.e=q
q.b6(a2.geC(),a2.geE())
a2.y=a2.x=a2.r=a2.f=null
g=X.mm(null)
f=new X.d2()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saZ(null)
q=f.c
if(!(Math.abs(q-1.0471975511965976)<$.C().a)){f.c=1.0471975511965976
q=new D.B("fov",q,1.0471975511965976)
q.b=!0
f.aB(q)}q=f.d
if(!(Math.abs(q-0.1)<$.C().a)){f.d=0.1
q=new D.B("near",q,0.1)
q.b=!0
f.aB(q)}q=f.e
if(!(Math.abs(q-2000)<$.C().a)){f.e=2000
q=new D.B("far",q,2000)
q.b=!0
f.aB(q)}q=a2.b
if(q!==f){if(q!=null)q.gB().K(0,a2.gaz())
m=a2.b
a2.b=f
f.gB().l(0,a2.gaz())
q=new D.B("camera",m,a2.b)
q.b=!0
a2.aA(q)}q=a2.c
if(q!==g){if(q!=null)q.gB().K(0,a2.gaz())
m=a2.c
a2.c=g
g.gB().l(0,a2.gaz())
q=new D.B("target",m,a2.c)
q.b=!0
a2.aA(q)}a2.e.l(0,k)
a2.b.saZ(U.kQ(V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
q=s.d
if(q!==a2){if(q!=null)q.gB().K(0,s.gcq())
s.d=a2
a2.gB().l(0,s.gcq())
s.cr()}a1.a=null
a1.b=""
a1.c=1
e=new K.jE(a1,s,l)
a2=new V.hI(a,new K.jF(a1,e))
u=u.getElementById(a)
a2.c=u
if(u==null)H.n("Failed to find heightMaps for Texture2DGroup")
a2.Y(0,"../resources/HeightMap1.png",!0)
a2.l(0,"../resources/HeightMap2.png")
a2.l(0,"../resources/HeightMap3.png")
a2.l(0,"../resources/HeightMap4.png")
a2.l(0,"../resources/ScrewHeightMap.png")
d=new K.jG(a1,e)
a2=V.l6("shapes")
a2.Y(0,"Cuboid",new K.jO(d))
a2.Y(0,"Cylinder",new K.jP(d))
a2.Y(0,"LatLonSphere",new K.jQ(d))
a2.Y(0,"Sphere",new K.jR(d))
a2.Y(0,"Toroid",new K.jS(d))
a2.Y(0,"Grid Small",new K.jT(d))
a2.bJ(0,"Grid Medium",new K.jU(d),!0)
a2.Y(0,"Grid Large",new K.jV(d))
c=new K.jH(a1,e)
a1=V.l6("scalars")
a1.Y(0,"0.1",new K.jI(c))
a1.Y(0,"0.2",new K.jJ(c))
a1.Y(0,"0.4",new K.jK(c))
a1.bJ(0,"0.6",new K.jL(c),!0)
a1.Y(0,"0.8",new K.jM(c))
a1.Y(0,"1.0",new K.jN(c))
V.os(s)},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jF:function jF(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jH:function jH(a,b){this.a=a
this.b=b},
jI:function jI(a){this.a=a},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a}},L={dc:function dc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},di:function di(a,b,c){this.a=a
this.b=b
this.c=c},dj:function dj(a){this.b=a
this.c=null},hR:function hR(){var _=this
_.d=_.c=_.b=_.a=null},dl:function dl(a){this.b=a
this.a=this.c=null}},O={
k9:function(a){var u=new O.aV([a])
u.bm(a)
return u},
aV:function aV(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bV:function bV(){this.b=this.a=null},
cU:function cU(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fJ:function fJ(a,b){this.a=a
this.b=b},
fK:function fK(){},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(){},
fN:function fN(a,b){this.a=a
this.b=b},
fO:function fO(){},
fB:function fB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cV:function cV(){},
fC:function fC(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aq:function aq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fE:function fE(){var _=this
_.e=_.d=_.c=_.b=null},
fF:function fF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fG:function fG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
de:function de(){}},E={
kS:function(){var u,t=new E.aG()
t.a=""
t.b=!0
u=O.k9(E.aG)
t.y=u
u.b6(t.ghf(),t.ghi())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sck(0,null)
t.sdE(null)
t.saZ(null)
return t},
ln:function(){if(J.k3(window.navigator.vendor,"Google"))return C.B
if(J.k3(window.navigator.userAgent,"Firefox"))return C.p
var u=window.navigator.appVersion
if(J.ak(u).U(u,"Trident")||C.a.U(u,"Edge"))return C.q
if(J.k3(window.navigator.appName,"Microsoft"))return C.q
return C.C},
lo:function(){var u=window.navigator.appVersion
if(J.ak(u).U(u,"Win"))return C.V
if(C.a.U(u,"Mac"))return C.x
if(C.a.U(u,"Linux"))return C.W
return C.X},
mQ:function(a,b){var u=new E.hc(a)
u.dT(a,b)
return u},
mX:function(a,b,c,d,e){var u,t,s=J.M(a)
if(!!s.$ibf)return E.lb(a,!0,!0,!0,!1)
u=W.k8()
t=u.style
t.width="100%"
t.height="100%"
s.gbO(a).l(0,u)
return E.lb(u,!0,!0,!0,!1)},
lb:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dg(),o=C.i.ci(a,"webgl2",P.mv(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.n(P.t("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.mQ(o,a)
u=new T.hM(o)
u.b=o.getParameter(3379)
o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dq(a)
t=new X.fl()
t.c=new X.ac(!1,!1,!1)
t.d=P.kY(P.u)
u.b=t
t=new X.fV(u)
t.f=0
t.r=V.b3()
t.x=V.b3()
t.ch=t.Q=1
u.c=t
t=new X.fv(u)
t.r=0
t.x=V.b3()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hS(u)
t.f=V.b3()
t.r=V.b3()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.d([],[[P.dd,P.a_]])
t=$.f1
u.Q=(t==null?$.f1=new E.dD(E.ln(),E.lo()):t).a===C.p?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.U(r,"contextmenu",u.geG(),!1))
u.z.push(W.U(a,"focus",u.geM(),!1))
u.z.push(W.U(a,"blur",u.gey(),!1))
u.z.push(W.U(r,"keyup",u.geQ(),!1))
u.z.push(W.U(r,"keydown",u.geO(),!1))
u.z.push(W.U(a,"mousedown",u.geU(),!1))
u.z.push(W.U(a,"mouseup",u.geY(),!1))
u.z.push(W.U(a,q,u.geW(),!1))
s=u.z
W.kb(a)
W.kb(a)
s.push(W.U(a,W.kb(a),u.gf_(),!1))
u.z.push(W.U(r,q,u.geI(),!1))
u.z.push(W.U(r,"mouseup",u.geK(),!1))
u.z.push(W.U(r,"pointerlockchange",u.gf1(),!1))
u.z.push(W.U(a,"touchstart",u.gfe(),!1))
u.z.push(W.U(a,"touchend",u.gfa(),!1))
u.z.push(W.U(a,"touchmove",u.gfc(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.a8(Date.now(),!1)
p.db=0
p.cM()
return p},
eF:function eF(){},
aG:function aG(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
be:function be(a){this.b=a},
bp:function bp(a){this.b=a},
dD:function dD(a,b){this.a=a
this.b=b},
hc:function hc(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
dg:function dg(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hP:function hP(a){this.a=a}},Z={
kq:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bC(c)),35044)
a.bindBuffer(b,null)
return new Z.du(b,u)},
ae:function(a){return new Z.aP(a)},
du:function du(a,b){this.a=a
this.b=b},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iB:function iB(a){this.a=a},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a){this.a=a}},D={
J:function(){var u=new D.bi()
u.d=0
return u},
eI:function eI(){},
bi:function bi(){var _=this
_.d=_.c=_.b=_.a=null},
f3:function f3(a){this.a=a},
f4:function f4(a){this.a=a},
X:function X(){this.b=null},
bm:function bm(){this.b=null},
bn:function bn(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eC:function eC(){},
bg:function bg(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a1:function a1(){},
cR:function cR(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h7:function h7(){},
hv:function hv(){}},X={cB:function cB(a,b){this.a=a
this.b=b},cQ:function cQ(a,b){this.a=a
this.b=b},fl:function fl(){var _=this
_.d=_.c=_.b=_.a=null},cS:function cS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fv:function fv(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},aK:function aK(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fV:function fV(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bX:function bX(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h8:function h8(){},dk:function dk(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hS:function hS(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dq:function dq(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mm:function(a){var u=new X.fc(),t=new V.aW(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.l9
if(t==null){t=V.l8(0,0,1,1)
$.l9=t}u.r=t
return u},
k7:function k7(){},
fc:function fc(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d2:function d2(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(){}},V={
oy:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.ai(a-b,u)
return(a<0?a+u:a)+b},
H:function(a,b,c){if(a==null)return C.a.ad("null",c)
return C.a.ad(C.d.dF(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
bH:function(a,b,c){var u,t,s,r,q,p,o=H.d([],[P.m])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.H(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.ad(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
kE:function(a){return C.d.hF(Math.pow(2,C.O.aX(Math.log(H.o4(a))/Math.log(2))))},
cX:function(){var u=$.l_
return u==null?$.l_=V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kZ:function(a,b,c){var u=c.t(0,Math.sqrt(c.C(c))),t=b.aq(u),s=t.t(0,Math.sqrt(t.C(t))),r=u.aq(s),q=new V.y(a.a,a.b,a.c),p=s.P(0).C(q),o=r.P(0).C(q),n=u.P(0).C(q)
return V.ar(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b3:function(){var u=$.l2
return u==null?$.l2=new V.ad(0,0):u},
l3:function(){var u=$.av
return u==null?$.av=new V.Q(0,0,0):u},
l8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d6(a,b,c,d)},
ca:function(){var u=$.ll
return u==null?$.ll=new V.y(0,0,0):u},
n5:function(){var u=$.il
return u==null?$.il=new V.y(-1,0,0):u},
ko:function(){var u=$.im
return u==null?$.im=new V.y(0,1,0):u},
lm:function(){var u=$.io
return u==null?$.io=new V.y(0,0,1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a){this.a=a},
cW:function cW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aJ:function aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
os:function(a){P.mY(C.M,new V.jX(a))},
l6:function(a){var u=new V.ha(a),t=document.getElementById(a)
u.c=t
if(t==null)H.n("Failed to find "+a+" for RadioGroup")
return u},
mS:function(a){var u=new V.hp()
u.dW(a,!0)
return u},
jX:function jX(a){this.a=a},
ha:function ha(a){this.a=a
this.c=null},
hb:function hb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(){this.b=this.a=null},
hr:function hr(a){this.a=a},
hq:function hq(a){this.a=a},
hI:function hI(a,b){this.a=a
this.c=null
this.d=b},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hJ:function hJ(){}},U={
ka:function(){var u=new U.eK()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kQ:function(a){var u=new U.cC()
u.a=a
return u},
eK:function eK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cC:function cC(){this.b=this.a=null},
bP:function bP(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dr:function dr(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dt:function dt(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cH:function cH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mz:function(a,b){var u=a.aW,t=new A.fA(b,u)
t.dV(b,u)
t.dS(a,b)
return t},
mA:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gah(a2)+a3.gah(a3)+a4.gah(a4)+a5.gah(a5)+a6.gah(a6)+a7.gah(a7)+a8.gah(a8)+a9.gah(a9)+b0.gah(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.p)(b1),++t)d+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.p)(b2),++t)d+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.p)(b3),++t)d+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.p)(b4),++t)d+="_"+H.e(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
for(q=b2.length,t=0;t<q;++t,r=!0)s+=b2[t].b
for(q=b3.length,t=0;t<q;++t,r=!0)s+=b3[t].b
for(p=b4.length,t=0;t<p;++t,r=!0)s+=b4[t].b
if(!a8.a)p=!1
else p=!0
if(!p)if(!a9.a)o=!1
else o=!0
else o=!0
n=u>0
if(!a3.a)u=!1
else u=!0
if(!u){if(!a4.a)u=!1
else u=!0
if(!u){if(!a5.a)u=!1
else u=!0
if(!u)if(!a6.a)u=!1
else u=!0
else u=!0
m=u}else m=!0}else m=!0
u=!a6.a
if(u)p=!1
else p=!0
l=p||n||q>0||o
if(!a4.a)q=!1
else q=!0
if(!q){if(!a5.a)q=!1
else q=!0
if(!q){if(u)u=!1
else u=!0
k=u}else k=!0}else k=!0
if(!k){if(!a7.a)u=!1
else u=!0
j=u||o}else j=!0
if(!a7.a)i=!1
else i=!0
h=a1>0
g=j||i||l||!1
f=n&&k
e=$.aF()
if(j){u=$.al()
e=new Z.aP(e.a|u.a)}if(i){u=$.aE()
e=new Z.aP(e.a|u.a)}if(h){u=$.aD()
e=new Z.aP(e.a|u.a)}return new A.fD(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
jl:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jm:function(a,b,c){var u
A.jl(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.es(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
nE:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jl(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
nA:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jm(b,t,"ambient")
b.a+="\n"},
nC:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jm(b,t,"diffuse")
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
nF:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jm(b,t,"invDiffuse")
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
nL:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jm(b,t,"specular")
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
nH:function(a,b){var u,t,s
if(!a.k4)return
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
nJ:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jl(b,t,"reflect")
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
nK:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jl(b,t,"refract")
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
nB:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.es(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 startPnt;\n"
c.a=r
r+="   vec3 endPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.a3()
u=(u&4)!==0
if(u){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+o+"];\n"
r+="\n"
c.a=r
r+="vec3 "+t+"ClosestPoint("+s+" lit)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lineVec = lit.endPnt - lit.startPnt;\n"
c.a=r
r+="   float lineLen2 = dot(lineVec, lineVec);\n"
c.a=r
r+="   if(lineLen2 <= 0.0001) return lit.startPnt;\n"
c.a=r
r+="   float t = dot(objPos - lit.startPnt, lineVec)/lineLen2;\n"
c.a=r
r+="   if(t <= 0.0) return lit.startPnt;\n"
c.a=r
r+="   if(t >= 1.0) return lit.endPnt;\n"
c.a=r
r+="   return lit.startPnt + t*lineVec;\n"
c.a=r
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Intensity(vec3 normDir, vec3 litPnt, "+s+" lit)\n"
c.a=r
r+="{\n"
c.a=r
if(u){r+="   float dist = length(objPos - litPnt);\n"
c.a=r
r+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=r
r+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
c.a=r+"\n"}r=[P.m]
q=H.d([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.b.n(q," * ")+";\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 "+t+"Value(vec3 norm, "+s+" lit)\n"
c.a=u
c.a=u+"{\n"
q=H.d([],r)
if(!a.b.a)u=!1
else u=!0
if(u)q.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
q.push("highLight")
u=c.a+="   vec3 litPnt  = "+t+"ClosestPoint(lit);\n"
u+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=u
u+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=u
u+="   vec3 intensity = "+t+"Intensity(normDir, litPnt, lit);\n"
c.a=u
c.a=u+"   if(length(intensity) > 0.0001) {\n"
p=H.d([],r)
if(!a.c.a)u=!1
else u=!0
if(u)p.push("diffuse(norm, normDir)")
if(!a.d.a)u=!1
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
if(!a.e.a)u=!1
else u=!0
if(u)p.push("specular(norm, normDir)")
u=c.a+="      highLight = intensity*("+C.b.n(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.n(q," + ")+");\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=u
u+="{\n"
c.a=u
c.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
o=c.a+="   for(int i = 0; i < "+o+"; ++i)\n"
o+="   {\n"
c.a=o
o+="      if(i >= "+t+"Count) break;\n"
c.a=o
o+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=o
o+="   }\n"
c.a=o
o+="   return lightAccum;\n"
c.a=o
o+="}\n"
c.a=o
c.a=o+"\n"},
nD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.es(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a3()
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
r=[P.m]
o=H.d([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
c.a+="      highLight = intensity*("+C.b.n(m," + ")+");\n"}else c.a+="   highLight = "+C.b.n(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.n(o," + ")+");\n"
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
nI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.es(t)
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
if(typeof u!=="number")return u.a3()
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
c.a=r+"\n"}r=[P.m]
l=H.d([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.n(l," * ")+";\n"
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
if(o)l.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.n(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.n(l," + ")+");\n"
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
nM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.es(t)
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
if(typeof u!=="number")return u.a3()
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
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
if(o){u=$.f1
if(u==null)u=$.f1=new E.dD(E.ln(),E.lo())
r=c.a
if(u.b===C.x){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
c.a=u
u=c.a=u+"   float angle = atan(crossMag, zScale);\n"}else u=c.a=r+"   float angle = acos(zScale);\n"
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
c.a=u+"\n"}u=[P.m]
j=H.d([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.n(j," * ")+";\n"
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
if(r)j.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.d([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.n(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.n(j," + ")+");\n"
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
nG:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.m])
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
u=b.a+="   return "+C.b.n(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nN:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.R("")
j.a="precision mediump float;\n"
j.a=l
u=a.k4
if(u){j.a=k
t=k}else t=l
if(a.r1){t+="varying vec3 binormalVec;\n"
j.a=t}if(a.r2){t+="varying vec2 txt2D;\n"
j.a=t}if(a.rx){t+="varying vec3 txtCube;\n"
j.a=t}if(a.k2){t+="varying vec3 objPos;\n"
j.a=t}t=j.a=(a.k3?j.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.y1
if(s){t+="uniform mat4 colorMat;\n"
j.a=t}if(a.go){t+="uniform mat4 viewMat;\n"
j.a=t}if(a.dy)t=j.a=t+"uniform mat4 invViewMat;\n"
j.a=t+"\n"
A.nE(a,j)
A.nA(a,j)
A.nC(a,j)
A.nF(a,j)
A.nL(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nJ(a,j)
A.nK(a,j)}A.nH(a,j)
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
r=a.k1
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nB(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nD(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nI(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nM(a,q[o],j)
A.nG(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.m])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a9(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a9(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a9(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a9(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.n(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nO:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bb+"];\n"
u+="attribute vec4 bendAttr;\n"
b.a=u
u+="\n"
b.a=u
u+="float weightSum;\n"
b.a=u
u=b.a=u+"vec3 bendPos;\n"
t=a.k4
if(t){u+="vec3 bendNorm;\n"
b.a=u}s=a.r1
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
nQ:function(a,b){var u
if(!a.k4)return
u=b.a+="varying vec3 normalVec;\n"
u+="\n"
b.a=u
u+="vec3 getNorm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.ry?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
nP:function(a,b){var u
if(!a.r1)return
u=b.a+="varying vec3 binormalVec;\n"
u+="\n"
b.a=u
u+="vec3 getBinm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.ry?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
nS:function(a,b){var u,t
if(!a.r2)return
u=a.x1
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
nT:function(a,b){var u,t
if(!a.rx)return
u=a.x2
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
nR:function(a,b){var u
if(!a.k2)return
u=b.a+="varying vec3 objPos;\n"
u+="\n"
b.a=u
u+="vec3 getObjPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (objMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
nU:function(a,b){var u
if(!a.k3)return
u=b.a+="varying vec3 viewPos;\n"
u+="\n"
b.a=u
u+="vec3 getViewPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (viewObjMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
es:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a9(a,1)},
kl:function(a,b,c,d,e){var u=new A.hZ(a,c,e)
u.f=d
P.mw(d,0,P.u)
return u},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function fA(a,b){var _=this
_.hW=_.hV=_.bc=_.aW=_.bb=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.i8=_.i7=_.i6=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.bU=_.bT=_.i5=_.i4=_.da=_.i3=_.i2=_.d9=_.d8=_.i1=_.i0=_.d7=_.d6=_.i_=_.hZ=_.d5=_.hY=_.hX=_.d4=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cy:function cy(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
fD:function fD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bb=b3
_.aW=b4
_.bc=b5},
c5:function c5(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c6:function c6(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c8:function c8(a,b,c,d,e,f,g,h,i,j){var _=this
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
c9:function c9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d8:function d8(){},
dm:function dm(){},
i3:function i3(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.c=b
this.d=c},
i0:function i0(a,b,c){this.a=a
this.c=b
this.d=c},
i1:function i1(a,b,c){this.a=a
this.c=b
this.d=c},
i2:function i2(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
S:function S(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){this.a=a
this.c=b
this.d=c},
D:function D(a,b,c){this.a=a
this.c=b
this.d=c},
c4:function c4(a,b,c){this.a=a
this.c=b
this.d=c},
i4:function i4(a,b,c){this.a=a
this.c=b
this.d=c},
c7:function c7(a,b,c){this.a=a
this.c=b
this.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
bv:function bv(a,b,c){this.a=a
this.c=b
this.d=c},
bw:function bw(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lD:function(a,b,c){var u=null,t=F.kj()
F.cm(t,u,b,c,a,1,0,0,1)
F.cm(t,u,b,c,a,0,1,0,3)
F.cm(t,u,b,c,a,0,0,1,2)
F.cm(t,u,b,c,a,-1,0,0,0)
F.cm(t,u,b,c,a,0,-1,0,0)
F.cm(t,u,b,c,a,0,0,-1,3)
t.a4()
return t},
jg:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.X()
return(u>0?t+4:t)*2},
cm:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.y(u+a3,t+a1,s+a2)
q=new V.y(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.y(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jg(i)
l=F.jg(h)
k=F.er(d,a0,new F.jf(j,F.jg(g),F.jg(f),l,m,c),b)
if(k!=null)a.bg(k)},
o8:function(a,b,c,d){return F.o9(!1,!1,c,new F.jp(1,1),d)},
o9:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.er(c,e,new F.jr(d),null)
if(u==null)return
u.a4()
u.b9()
return u},
om:function(a,b){var u=F.er(a,b,new F.jC(),null)
u.d.bi()
u.a4()
u.b9()
return u},
ot:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.jY()
t=F.lD(a,new F.jZ(s,1),b)
t.b9()
return t},
ow:function(a,b){return F.oa(b,a,0.5,1,new F.k0())},
oa:function(a,b,c,d,e){var u=F.er(a,b,new F.jq(e,d,b,c),null)
if(u==null)return
u.a4()
u.b9()
return u},
kB:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.jv()
return F.er(b,a,new F.jw(t),null)},
er:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kj()
t=H.d([],[F.by])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.kp(g,g,new V.aW(p,0,0,1),g,g,new V.ad(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.bR(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.kp(g,g,new V.aW(j,i,h,1),g,g,new V.ad(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bR(d))}}u.d.fG(a+1,b+1,t)
return u},
cI:function(a,b,c){var u=new F.bj(),t=a.a
if(t==null)H.n(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.n(P.t("May not create a face with vertices attached to different shapes."))
u.bH(a)
u.bI(b)
u.fp(c)
u.a.a.d.b.push(u)
u.a.a.a_()
return u},
mt:function(a,b){var u=new F.bS(),t=a.a
if(t==null)H.n(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.n(P.t("May not create a line with vertices attached to different shapes."))
u.bH(a)
u.bI(b)
u.a.a.c.b.push(u)
u.a.a.a_()
return u},
kj:function(){var u=new F.hl(),t=new F.ip(u)
t.b=!1
t.c=H.d([],[F.by])
u.a=t
t=new F.ho(u)
t.b=H.d([],[F.c0])
u.b=t
t=new F.hn(u)
t.b=H.d([],[F.bS])
u.c=t
t=new F.hm(u)
t.b=H.d([],[F.bj])
u.d=t
u.e=null
return u},
kp:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.by(),r=new F.ix()
r.b=H.d([],[F.c0])
s.b=r
r=new F.it()
u=[F.bS]
r.b=H.d([],u)
r.c=H.d([],u)
s.c=r
r=new F.iq()
u=[F.bj]
r.b=H.d([],u)
r.c=H.d([],u)
r.d=H.d([],u)
s.d=r
h=$.kH()
s.e=0
r=$.aF()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.al().a)!==0?e:t
s.x=(u&$.aE().a)!==0?b:t
s.y=(u&$.aR().a)!==0?f:t
s.z=(u&$.aS().a)!==0?g:t
s.Q=(u&$.kI().a)!==0?c:t
s.ch=(u&$.bb().a)!==0?i:0
s.cx=(u&$.aD().a)!==0?a:t
return s},
jf:function jf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jp:function jp(a,b){this.a=a
this.b=b},
jr:function jr(a){this.a=a},
jC:function jC(){},
jY:function jY(){},
jZ:function jZ(a,b){this.a=a
this.b=b},
k0:function k0(){},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jv:function jv(){},
jw:function jw(a){this.a=a},
bj:function bj(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f5:function f5(){},
hs:function hs(){},
bS:function bS(){this.b=this.a=null},
fn:function fn(){},
hY:function hY(){},
c0:function c0(){this.a=null},
hl:function hl(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(a){this.a=a
this.b=null},
hn:function hn(a){this.a=a
this.b=null},
ho:function ho(a){this.a=a
this.b=null},
by:function by(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iz:function iz(a){this.a=a},
iy:function iy(a){this.a=a},
ip:function ip(a){this.a=a
this.c=this.b=null},
iq:function iq(){this.d=this.c=this.b=null},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
it:function it(){this.c=this.b=null},
iv:function iv(){},
iu:function iu(){},
iw:function iw(){},
h0:function h0(){},
ix:function ix(){this.b=null}},T={df:function df(){},hH:function hH(){},hL:function hL(){var _=this
_.y=_.x=_.r=_.d=_.c=_.b=_.a=null},hM:function hM(a){var _=this
_.a=a
_.e=_.d=_.b=null},hN:function hN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kg.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gH:function(a){return H.c1(a)},
i:function(a){return"Instance of '"+H.e(H.c2(a))+"'"}}
J.fh.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ib8:1}
J.cO.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.cP.prototype={
gH:function(a){return 0},
i:function(a){return String(a)},
$imr:1}
J.h5.prototype={}
J.bx.prototype={}
J.b0.prototype={
i:function(a){var u=a[$.lR()]
if(u==null)return this.dR(a)
return"JavaScript function for "+H.e(J.a7(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aZ.prototype={
ca:function(a,b){if(!!a.fixed$length)H.n(P.w("removeAt"))
if(b<0||b>=a.length)throw H.c(P.d5(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.n(P.w("remove"))
for(u=0;u<a.length;++u)if(J.z(a[u],b)){a.splice(u,1)
return!0}return!1},
fD:function(a,b){var u,t
if(!!a.fixed$length)H.n(P.w("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.p)(b),++t)a.push(b[t])},
D:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aX(a))}},
n:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
ha:function(a){return this.n(a,"")},
h4:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aX(a))}return u},
h5:function(a,b,c){return this.h4(a,b,c,null)},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dO:function(a,b,c){if(b<0||b>a.length)throw H.c(P.V(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.V(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.b9(a,0)])
return H.d(a.slice(b,c),[H.b9(a,0)])},
gh3:function(a){if(a.length>0)return a[0]
throw H.c(H.kU())},
gat:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kU())},
aO:function(a,b){if(!!a.immutable$list)H.n(P.w("sort"))
H.mV(a,b==null?J.nx():b)},
dN:function(a){return this.aO(a,null)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.z(a[u],b))return!0
return!1},
i:function(a){return P.kd(a,"[","]")},
gR:function(a){return new J.a0(a,a.length)},
gH:function(a){return H.c1(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.n(P.w("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.k5(b,u,null))
if(b<0)throw H.c(P.V(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bG(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.n(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bG(a,b))
a[b]=c},
$iq:1,
$ij:1,
$ir:1}
J.kf.prototype={}
J.a0.prototype={
gF:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bR.prototype={
aH:function(a,b){var u
if(typeof b!=="number")throw H.c(H.a5(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbe(b)
if(this.gbe(a)===u)return 0
if(this.gbe(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbe:function(a){return a===0?1/a<0:a<0},
hF:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.w(""+a+".toInt()"))},
aX:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.w(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
dF:function(a,b){var u
if(b>20)throw H.c(P.V(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbe(a))return"-"+u
return u},
b2:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.V(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.T(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.n(P.w("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
ai:function(a,b){var u
if(typeof b!=="number")throw H.c(H.a5(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cp:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cR(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cR(a,b)},
cR:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.w("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aE:function(a,b){var u
if(a>0)u=this.cQ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fu:function(a,b){if(b<0)throw H.c(H.a5(b))
return this.cQ(a,b)},
cQ:function(a,b){return b>31?0:a>>>b},
$iI:1,
$ia6:1}
J.cN.prototype={$iu:1}
J.cM.prototype={}
J.b_.prototype={
T:function(a,b){if(b<0)throw H.c(H.bG(a,b))
if(b>=a.length)H.n(H.bG(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.c(H.bG(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.c(P.k5(b,null,null))
return a+b},
aL:function(a,b,c,d){var u,t
c=P.aN(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.n(H.a5(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a1:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.V(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.a1(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.n(H.a5(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.L()
if(b<0)throw H.c(P.d5(b,null))
if(b>c)throw H.c(P.d5(b,null))
if(c>a.length)throw H.c(P.d5(c,null))
return a.substring(b,c)},
a9:function(a,b){return this.q(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ad:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
bd:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.V(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dh:function(a,b){return this.bd(a,b,0)},
fN:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.V(c,0,u,null,null))
return H.lN(a,b,c)},
U:function(a,b){return this.fN(a,b,0)},
aH:function(a,b){var u
if(typeof b!=="string")throw H.c(H.a5(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$im:1}
H.N.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.a.T(this.a,b)},
$aq:function(){return[P.u]},
$av:function(){return[P.u]},
$aj:function(){return[P.u]},
$ar:function(){return[P.u]}}
H.q.prototype={}
H.bT.prototype={
gF:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.ak(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.aX(s))
u=t.c
if(typeof q!=="number")return H.h(q)
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.bU.prototype={
gR:function(a){return new H.fz(J.aT(this.a),this.b)},
gj:function(a){return J.af(this.a)},
J:function(a,b){return this.b.$1(J.k4(this.a,b))},
$aj:function(a,b){return[b]}}
H.f_.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.fz.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.a=u.c.$1(t.gF(t))
return!0}u.a=null
return!1},
gF:function(a){return this.a}}
H.iC.prototype={
gR:function(a){return new H.iD(J.aT(this.a),this.b)}}
H.iD.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gF(u)))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.cJ.prototype={}
H.i8.prototype={
k:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.dn.prototype={}
H.eM.prototype={
i:function(a){return P.ki(this)},
k:function(a,b,c){return H.mi()},
$iP:1}
H.eN.prototype={
gj:function(a){return this.a},
bP:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bP(0,b))return
return this.cD(b)},
cD:function(a){return this.b[a]},
D:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cD(s))}}}
H.hW.prototype={
ac:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.h1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fk.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.i7.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k1.prototype={
$1:function(a){if(!!J.M(a).$ibh)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.e2.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bM.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cr(t==null?"unknown":t)+"'"},
ghM:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hE.prototype={}
H.hy.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cr(u)+"'"}}
H.bK.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bK))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.c1(this.a)
else u=typeof t!=="object"?J.cv(t):H.c1(t)
return(u^H.c1(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c2(u))+"'")}}
H.eH.prototype={
i:function(a){return this.a}}
H.hi.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.F.prototype={
gj:function(a){return this.a},
gab:function(a){return new H.fp(this,[H.b9(this,0)])},
ghL:function(a){var u=this
return H.my(u.gab(u),new H.fj(u),H.b9(u,0),H.b9(u,1))},
bP:function(a,b){var u=this.b
if(u==null)return!1
return this.ec(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b7(r,b)
s=t==null?null:t.b
return s}else return q.h8(b)},
h8:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cF(r,s.di(a))
t=s.dj(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cu(u==null?s.b=s.bA():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cu(t==null?s.c=s.bA():t,b,c)}else s.h9(b,c)},
h9:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bA()
u=r.di(a)
t=r.cF(q,u)
if(t==null)r.bF(q,u,[r.bB(a,b)])
else{s=r.dj(t,a)
if(s>=0)t[s].b=b
else t.push(r.bB(a,b))}},
D:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aX(u))
t=t.c}},
cu:function(a,b,c){var u=this.b7(a,b)
if(u==null)this.bF(a,b,this.bB(b,c))
else u.b=c},
bB:function(a,b){var u=this,t=new H.fo(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
di:function(a){return J.cv(a)&0x3ffffff},
dj:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.z(a[t].a,b))return t
return-1},
i:function(a){return P.ki(this)},
b7:function(a,b){return a[b]},
cF:function(a,b){return a[b]},
bF:function(a,b,c){a[b]=c},
ef:function(a,b){delete a[b]},
ec:function(a,b){return this.b7(a,b)!=null},
bA:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bF(t,u,t)
this.ef(t,u)
return t}}
H.fj.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.b9(u,1),args:[H.b9(u,0)]}}}
H.fo.prototype={}
H.fp.prototype={
gj:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.fq(u,u.r)
t.c=u.e
return t}}
H.fq.prototype={
gF:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aX(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jy.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.jz.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jA.prototype={
$1:function(a){return this.a(a)}}
H.fi.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imO:1}
H.bY.prototype={$ibY:1}
H.b1.prototype={$ib1:1}
H.cY.prototype={
gj:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.bZ.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aC(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.I]},
$av:function(){return[P.I]},
$ij:1,
$aj:function(){return[P.I]},
$ir:1,
$ar:function(){return[P.I]}}
H.cZ.prototype={
k:function(a,b,c){H.aC(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.u]},
$av:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]},
$ir:1,
$ar:function(){return[P.u]}}
H.fW.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.fX.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.fY.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.fZ.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.h_.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.d_.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.c_.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aC(b,a,a.length)
return a[b]},
$ic_:1,
$ibu:1}
H.cc.prototype={}
H.cd.prototype={}
H.ce.prototype={}
H.cf.prototype={}
P.iF.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:15}
P.iE.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iG.prototype={
$0:function(){this.a.$0()}}
P.iH.prototype={
$0:function(){this.a.$0()}}
P.e9.prototype={
e0:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bF(new P.j5(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
e1:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bF(new P.j4(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$idh:1}
P.j5.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.j4.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.cp(u,q)}s.c=r
t.d.$1(s)}}
P.bz.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.ci.prototype={
gF:function(a){var u=this.c
if(u==null)return this.b
return u.gF(u)},
A:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.A())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bz){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.b(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aT(u)
if(!!r.$ici){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.j3.prototype={
gR:function(a){return new P.ci(this.a())}}
P.dv.prototype={}
P.dd.prototype={}
P.hB.prototype={}
P.dh.prototype={}
P.je.prototype={}
P.jn.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d1():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iU.prototype={
hB:function(a){var u,t,s,r=null
try{if(C.f===$.aj){a.$0()
return}P.nW(r,r,this,a)}catch(s){u=H.ba(s)
t=H.kA(s)
P.lx(r,r,this,u,t)}},
hC:function(a,b){var u,t,s,r=null
try{if(C.f===$.aj){a.$1(b)
return}P.nX(r,r,this,a,b)}catch(s){u=H.ba(s)
t=H.kA(s)
P.lx(r,r,this,u,t)}},
hD:function(a,b){return this.hC(a,b,null)},
fJ:function(a){return new P.iV(this,a)},
cZ:function(a,b){return new P.iW(this,a,b)}}
P.iV.prototype={
$0:function(){return this.a.hB(this.b)}}
P.iW.prototype={
$1:function(a){return this.a.hD(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iR.prototype={
gR:function(a){var u=new P.dL(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ea(b)
return t}},
ea:function(a){var u=this.d
if(u==null)return!1
return this.br(this.cE(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cw(u==null?s.b=P.kr():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cw(t==null?s.c=P.kr():t,b)}else return s.e3(0,b)},
e3:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kr()
u=s.cz(b)
t=r[u]
if(t==null)r[u]=[s.bo(b)]
else{if(s.br(t,b)>=0)return!1
t.push(s.bo(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fh(this.c,b)
else return this.fg(0,b)},
fg:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cE(r,b)
t=s.br(u,b)
if(t<0)return!1
s.cT(u.splice(t,1)[0])
return!0},
cw:function(a,b){if(a[b]!=null)return!1
a[b]=this.bo(b)
return!0},
fh:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cT(u)
delete a[b]
return!0},
cI:function(){this.r=1073741823&this.r+1},
bo:function(a){var u,t=this,s=new P.iS(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cI()
return s},
cT:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cI()},
cz:function(a){return J.cv(a)&1073741823},
cE:function(a,b){return a[this.cz(b)]},
br:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.z(a[t].a,b))return t
return-1}}
P.iS.prototype={}
P.dL.prototype={
gF:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aX(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.ff.prototype={}
P.fr.prototype={
$2:function(a,b){this.a.k(0,a,b)},
$S:3}
P.fs.prototype={$iq:1,$ij:1,$ir:1}
P.v.prototype={
gR:function(a){return new H.bT(a,this.gj(a))},
J:function(a,b){return this.h(a,b)},
D:function(a,b){var u,t=this.gj(a)
if(typeof t!=="number")return H.h(t)
u=0
for(;u<t;++u){b.$1(this.h(a,u))
if(t!==this.gj(a))throw H.c(P.aX(a))}},
hH:function(a,b){var u,t,s=this,r=H.d([],[H.og(s,a,"v",0)])
C.b.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.h(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t;++u}return r},
hG:function(a){return this.hH(a,!0)},
h1:function(a,b,c,d){var u
P.aN(b,c,this.gj(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.kd(a,"[","]")}}
P.fw.prototype={}
P.fx.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a2.prototype={
D:function(a,b){var u,t
for(u=J.aT(this.gab(a));u.A();){t=u.gF(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.af(this.gab(a))},
i:function(a){return P.ki(a)},
$iP:1}
P.j6.prototype={
k:function(a,b,c){throw H.c(P.w("Cannot modify unmodifiable map"))}}
P.fy.prototype={
h:function(a,b){return J.bI(this.a,b)},
k:function(a,b,c){J.k2(this.a,b,c)},
D:function(a,b){J.kL(this.a,b)},
gj:function(a){return J.af(this.a)},
i:function(a){return J.a7(this.a)},
$iP:1}
P.dp.prototype={}
P.iX.prototype={
i:function(a){return P.kd(this,"{","}")},
J:function(a,b){var u,t,s
P.l7(b,"index")
for(u=P.nd(this,this.r),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
$iq:1,
$ij:1}
P.dM.prototype={}
P.ef.prototype={}
P.eD.prototype={
he:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aN(a0,a1,b.length)
u=$.m3()
if(typeof a1!=="number")return H.h(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.I(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jx(C.a.I(b,n))
j=H.jx(C.a.I(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.R("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.d4(m)
s=n
continue}}throw H.c(P.O("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.kM(b,p,a1,q,o,f)
else{e=C.c.ai(f-1,4)+1
if(e===1)throw H.c(P.O(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aL(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kM(b,p,a1,q,o,d)
else{e=C.c.ai(d,4)
if(e===1)throw H.c(P.O(c,b,a1))
if(e>1)b=C.a.aL(b,a1,a1,e===2?"==":"=")}return b}}
P.eE.prototype={}
P.eJ.prototype={}
P.eO.prototype={}
P.f0.prototype={}
P.ii.prototype={
gh0:function(){return C.L}}
P.ik.prototype={
bQ:function(a){var u,t,s,r=P.aN(0,null,a.length)
if(typeof r!=="number")return r.u()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jd(t)
if(s.eh(a,0,r)!==r)s.cU(J.m9(a,r-1),0)
return new Uint8Array(t.subarray(0,H.nu(0,s.b,t.length)))}}
P.jd.prototype={
cU:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eh:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.T(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.I(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cU(r,C.a.I(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ij.prototype={
bQ:function(a){var u,t,s,r,q,p,o,n,m=P.n0(!1,a,0,null)
if(m!=null)return m
u=P.aN(0,null,J.af(a))
t=P.lz(a,0,u)
if(t>0){s=P.c3(a,0,t)
if(t===u)return s
r=new P.R(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.R("")
o=new P.jc(!1,r)
o.c=p
o.fO(a,q,u)
if(o.e>0){H.n(P.O("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.d4(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jc.prototype={
fO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.ak(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a3()
if((r&192)!==128){q=P.O(k+C.c.b2(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.u,q)
if(j<=C.u[q]){q=P.O("Overlong encoding of 0x"+C.c.b2(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.O("Character outside valid Unicode range: 0x"+C.c.b2(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.d4(j)
l.c=!1}if(typeof c!=="number")return H.h(c)
q=s<c
for(;q;){p=P.lz(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.c3(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.L()
if(r<0){m=P.O("Negative UTF-8 code unit: -0x"+C.c.b2(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.O(k+C.c.b2(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.b8.prototype={}
P.a8.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a8&&this.a===b.a&&!0},
aH:function(a,b){return C.c.aH(this.a,b.a)},
gH:function(a){var u=this.a
return(u^C.c.aE(u,30))&1073741823},
i:function(a){var u=this,t=P.mj(H.mK(u)),s=P.cD(H.mI(u)),r=P.cD(H.mE(u)),q=P.cD(H.mF(u)),p=P.cD(H.mH(u)),o=P.cD(H.mJ(u)),n=P.mk(H.mG(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.I.prototype={}
P.aY.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aY&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
aH:function(a,b){return C.c.aH(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eZ(),q=this.a
if(q<0)return"-"+new P.aY(0-q).i(0)
u=r.$1(C.c.a0(q,6e7)%60)
t=r.$1(C.c.a0(q,1e6)%60)
s=new P.eY().$1(q%1e6)
return""+C.c.a0(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eY.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eZ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bh.prototype={}
P.d1.prototype={
i:function(a){return"Throw of null."}}
P.am.prototype={
gbq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbp:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbq()+o+u
if(!q.a)return t
s=q.gbp()
r=P.kc(q.b)
return t+s+": "+r}}
P.bs.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fe.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t=this.b
if(typeof t!=="number")return t.L()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.i9.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i5.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hx.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eL.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kc(u)+"."}}
P.h4.prototype={
i:function(a){return"Out of Memory"},
$ibh:1}
P.db.prototype={
i:function(a){return"Stack Overflow"},
$ibh:1}
P.eT.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dE.prototype={
i:function(a){return"Exception: "+this.a}}
P.fb.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.I(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.T(f,q)
if(p===10||p===13){o=q
break}}if(o-s>78)if(g-s<75){n=s+75
m=s
l=""
k="..."}else{if(o-g<75){m=o-75
n=o
k=""}else{m=g-36
n=g+36
k="..."}l="..."}else{n=o
m=s
l=""
k=""}j=C.a.q(f,m,n)
return h+l+j+k+"\n"+C.a.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.u.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gR(this)
for(u=0;t.A();)++u
return u},
J:function(a,b){var u,t,s
P.l7(b,"index")
for(u=this.gR(this),t=0;u.A();){s=u.gF(u)
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
i:function(a){return P.mo(this,"(",")")}}
P.fg.prototype={}
P.r.prototype={$iq:1,$ij:1}
P.P.prototype={}
P.b2.prototype={
gH:function(a){return P.a_.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
p:function(a,b){return this===b},
gH:function(a){return H.c1(this)},
i:function(a){return"Instance of '"+H.e(H.c2(this))+"'"},
toString:function(){return this.i(this)}}
P.m.prototype={}
P.R.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.ig.prototype={
$2:function(a,b){var u,t,s,r=J.kz(b).dh(b,"=")
if(r===-1){if(b!=="")J.k2(a,P.kv(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.a9(b,r+1)
s=this.a
J.k2(a,P.kv(u,0,u.length,s,!0),P.kv(t,0,t.length,s,!0))}return a}}
P.ib.prototype={
$2:function(a,b){throw H.c(P.O("Illegal IPv4 address, "+a,this.a,b))}}
P.id.prototype={
$2:function(a,b){throw H.c(P.O("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.ie.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cq(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.L()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bA.prototype={
gdJ:function(){return this.b},
gc1:function(a){var u=this.c
if(u==null)return""
if(C.a.a8(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbh:function(a){var u=this.d
if(u==null)return P.lq(this.a)
return u},
gc9:function(a){var u=this.f
return u==null?"":u},
gdc:function(){var u=this.r
return u==null?"":u},
cc:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a8(u,"/"))u="/"+u
s=P.kt(null,0,0,b)
return new P.bA(q,o,m,n,u,s,r.r)},
gb1:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.m
u=this.Q=new P.dp(P.lh(t==null?"":t),[u,u])
t=u}return t},
gdd:function(){return this.c!=null},
gdg:function(){return this.f!=null},
gde:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.e(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.e(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.e(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.M(b).$ikm)if(s.a==b.gbl())if(s.c!=null===b.gdd())if(s.b==b.gdJ())if(s.gc1(s)==b.gc1(b))if(s.gbh(s)==b.gbh(b))if(s.e===b.gdz(b)){u=s.f
t=u==null
if(!t===b.gdg()){if(t)u=""
if(u===b.gc9(b)){u=s.r
t=u==null
if(!t===b.gde()){if(t)u=""
u=u===b.gdc()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.a.gH(this.i(0)):u},
$ikm:1,
gbl:function(){return this.a},
gdz:function(a){return this.e}}
P.j7.prototype={
$1:function(a){throw H.c(P.O("Invalid port",this.a,this.b+1))}}
P.j8.prototype={
$1:function(a){return P.jb(C.T,a,C.e,!1)}}
P.ja.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.jb(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.jb(C.h,b,C.e,!0))}}}
P.j9.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aT(b),t=this.a;u.A();)t.$2(a,u.gF(u))}}
P.ia.prototype={
gdI:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bd(u,"?",o)
s=u.length
if(t>=0){r=P.cl(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.iL("data",p,p,p,P.cl(u,o,s,C.w,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.ji.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jh.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.ma(u,0,96,b)
return u},
$S:16}
P.jj.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.I(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jk.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.I(b,0),t=C.a.I(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.iY.prototype={
gdd:function(){return this.c>0},
gdf:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.v()
t=this.e
if(typeof t!=="number")return H.h(t)
t=u+1<t
u=t}else u=!1
return u},
gdg:function(){var u=this.f
if(typeof u!=="number")return u.L()
return u<this.r},
gde:function(){return this.r<this.a.length},
gcG:function(){return this.b===4&&C.a.a8(this.a,"http")},
gcH:function(){return this.b===5&&C.a.a8(this.a,"https")},
gbl:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcG())q=t.x="http"
else if(t.gcH()){t.x="https"
q="https"}else if(q===4&&C.a.a8(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a8(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdJ:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gc1:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbh:function(a){var u,t=this
if(t.gdf()){u=t.d
if(typeof u!=="number")return u.v()
return P.cq(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcG())return 80
if(t.gcH())return 443
return 0},
gdz:function(a){return C.a.q(this.a,this.e,this.f)},
gc9:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.L()
return u<t?C.a.q(this.a,u+1,t):""},
gdc:function(){var u=this.r,t=this.a
return u<t.length?C.a.a9(t,u+1):""},
gb1:function(){var u=this,t=u.f
if(typeof t!=="number")return t.L()
if(t>=u.r)return C.U
t=P.m
return new P.dp(P.lh(u.gc9(u)),[t,t])},
cc:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbl(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdf()?p.gbh(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a8(t,"/"))t="/"+t
r=P.kt(o,0,0,b)
s=p.r
q=s<l.length?C.a.a9(l,s+1):o
return new P.bA(n,k,u,j,t,r,q)},
gH:function(a){var u=this.y
return u==null?this.y=C.a.gH(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.M(b).$ikm&&this.a===b.i(0)},
i:function(a){return this.a},
$ikm:1}
P.iL.prototype={}
W.l.prototype={}
W.et.prototype={
gj:function(a){return a.length}}
W.ev.prototype={
i:function(a){return String(a)}}
W.ew.prototype={
i:function(a){return String(a)}}
W.bd.prototype={$ibd:1}
W.bf.prototype={
ci:function(a,b,c){if(c!=null)return a.getContext(b,P.o5(c))
return a.getContext(b)},
dK:function(a,b){return this.ci(a,b,null)},
$ibf:1}
W.aU.prototype={
gj:function(a){return a.length}}
W.eP.prototype={
gj:function(a){return a.length}}
W.E.prototype={$iE:1}
W.bN.prototype={
gj:function(a){return a.length}}
W.eQ.prototype={}
W.ab.prototype={}
W.ao.prototype={}
W.eR.prototype={
gj:function(a){return a.length}}
W.eS.prototype={
gj:function(a){return a.length}}
W.eU.prototype={
gj:function(a){return a.length}}
W.eV.prototype={
i:function(a){return String(a)}}
W.cF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a3,P.a6]]},
$ix:1,
$ax:function(){return[[P.a3,P.a6]]},
$av:function(){return[[P.a3,P.a6]]},
$ij:1,
$aj:function(){return[[P.a3,P.a6]]},
$ir:1,
$ar:function(){return[[P.a3,P.a6]]}}
W.cG.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaw(a))+" x "+H.e(this.gar(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.M(b)
return!!u.$ia3&&a.left===u.gbf(b)&&a.top===u.gbj(b)&&this.gaw(a)===u.gaw(b)&&this.gar(a)===u.gar(b)},
gH:function(a){return W.lp(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gaw(a)),C.d.gH(this.gar(a)))},
gd_:function(a){return a.bottom},
gar:function(a){return a.height},
gbf:function(a){return a.left},
gcd:function(a){return a.right},
gbj:function(a){return a.top},
gaw:function(a){return a.width},
$ia3:1,
$aa3:function(){return[P.a6]}}
W.eW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.m]},
$ix:1,
$ax:function(){return[P.m]},
$av:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]},
$ir:1,
$ar:function(){return[P.m]}}
W.eX.prototype={
gj:function(a){return a.length}}
W.iJ.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.hG(this)
return new J.a0(u,u.length)},
$aq:function(){return[W.T]},
$av:function(){return[W.T]},
$aj:function(){return[W.T]},
$ar:function(){return[W.T]}}
W.T.prototype={
gbO:function(a){return new W.iJ(a,a.children)},
gd0:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.L()
if(s<0)s=-s*0
if(typeof r!=="number")return r.L()
if(r<0)r=-r*0
return new P.a3(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
$iT:1}
W.i.prototype={$ii:1}
W.f.prototype={
fF:function(a,b,c,d){if(c!=null)this.e4(a,b,c,!1)},
e4:function(a,b,c,d){return a.addEventListener(b,H.bF(c,1),!1)}}
W.ag.prototype={$iag:1}
W.bO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ag]},
$ix:1,
$ax:function(){return[W.ag]},
$av:function(){return[W.ag]},
$ij:1,
$aj:function(){return[W.ag]},
$ir:1,
$ar:function(){return[W.ag]},
$ibO:1}
W.f6.prototype={
gj:function(a){return a.length}}
W.fa.prototype={
gj:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.fd.prototype={
gj:function(a){return a.length}}
W.bQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$av:function(){return[W.A]},
$ij:1,
$aj:function(){return[W.A]},
$ir:1,
$ar:function(){return[W.A]}}
W.aH.prototype={$iaH:1,
gd1:function(a){return a.data}}
W.bk.prototype={$ibk:1}
W.bo.prototype={$ibo:1}
W.fu.prototype={
i:function(a){return String(a)}}
W.fP.prototype={
gj:function(a){return a.length}}
W.bW.prototype={$ibW:1}
W.fQ.prototype={
h:function(a,b){return P.aQ(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
gab:function(a){var u=H.d([],[P.m])
this.D(a,new W.fR(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.w("Not supported"))},
$aa2:function(){return[P.m,null]},
$iP:1,
$aP:function(){return[P.m,null]}}
W.fR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fS.prototype={
h:function(a,b){return P.aQ(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
gab:function(a){var u=H.d([],[P.m])
this.D(a,new W.fT(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.w("Not supported"))},
$aa2:function(){return[P.m,null]},
$iP:1,
$aP:function(){return[P.m,null]}}
W.fT.prototype={
$2:function(a,b){return this.a.push(a)}}
W.as.prototype={$ias:1}
W.fU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.as]},
$ix:1,
$ax:function(){return[W.as]},
$av:function(){return[W.as]},
$ij:1,
$aj:function(){return[W.as]},
$ir:1,
$ar:function(){return[W.as]}}
W.at.prototype={$iat:1}
W.iI.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gR:function(a){var u=this.a.childNodes
return new W.cK(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$aq:function(){return[W.A]},
$av:function(){return[W.A]},
$aj:function(){return[W.A]},
$ar:function(){return[W.A]}}
W.A.prototype={
hz:function(a,b){var u,t
try{u=a.parentNode
J.m7(u,b,a)}catch(t){H.ba(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dQ(a):u},
fj:function(a,b,c){return a.replaceChild(b,c)},
$iA:1}
W.d0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$av:function(){return[W.A]},
$ij:1,
$aj:function(){return[W.A]},
$ir:1,
$ar:function(){return[W.A]}}
W.au.prototype={$iau:1,
gj:function(a){return a.length}}
W.h6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.au]},
$ix:1,
$ax:function(){return[W.au]},
$av:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]},
$ir:1,
$ar:function(){return[W.au]}}
W.hg.prototype={
h:function(a,b){return P.aQ(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
gab:function(a){var u=H.d([],[P.m])
this.D(a,new W.hh(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.w("Not supported"))},
$aa2:function(){return[P.m,null]},
$iP:1,
$aP:function(){return[P.m,null]}}
W.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hj.prototype={
gj:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.ht.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aw]},
$ix:1,
$ax:function(){return[W.aw]},
$av:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]},
$ir:1,
$ar:function(){return[W.aw]}}
W.ax.prototype={$iax:1}
W.hu.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ax]},
$ix:1,
$ax:function(){return[W.ax]},
$av:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$ir:1,
$ar:function(){return[W.ax]}}
W.ay.prototype={$iay:1,
gj:function(a){return a.length}}
W.hz.prototype={
h:function(a,b){return a.getItem(b)},
k:function(a,b,c){a.setItem(b,c)},
D:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gab:function(a){var u=H.d([],[P.m])
this.D(a,new W.hA(u))
return u},
gj:function(a){return a.length},
$aa2:function(){return[P.m,P.m]},
$iP:1,
$aP:function(){return[P.m,P.m]}}
W.hA.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ah.prototype={$iah:1}
W.az.prototype={$iaz:1}
W.ai.prototype={$iai:1}
W.hF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ai]},
$ix:1,
$ax:function(){return[W.ai]},
$av:function(){return[W.ai]},
$ij:1,
$aj:function(){return[W.ai]},
$ir:1,
$ar:function(){return[W.ai]}}
W.hG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.az]},
$ix:1,
$ax:function(){return[W.az]},
$av:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$ir:1,
$ar:function(){return[W.az]}}
W.hQ.prototype={
gj:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.bt.prototype={$ibt:1}
W.hT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aA]},
$ix:1,
$ax:function(){return[W.aA]},
$av:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$ir:1,
$ar:function(){return[W.aA]}}
W.hU.prototype={
gj:function(a){return a.length}}
W.b4.prototype={}
W.ih.prototype={
i:function(a){return String(a)}}
W.iA.prototype={
gj:function(a){return a.length}}
W.b6.prototype={
gfT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
gfS:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.w("deltaX is not supported"))},
$ib6:1}
W.cb.prototype={
fk:function(a,b){return a.requestAnimationFrame(H.bF(b,1))},
eg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$ix:1,
$ax:function(){return[W.E]},
$av:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ir:1,
$ar:function(){return[W.E]}}
W.dy.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.M(b)
return!!u.$ia3&&a.left===u.gbf(b)&&a.top===u.gbj(b)&&a.width===u.gaw(b)&&a.height===u.gar(b)},
gH:function(a){return W.lp(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gar:function(a){return a.height},
gaw:function(a){return a.width}}
W.iO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ap]},
$ix:1,
$ax:function(){return[W.ap]},
$av:function(){return[W.ap]},
$ij:1,
$aj:function(){return[W.ap]},
$ir:1,
$ar:function(){return[W.ap]}}
W.dR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$av:function(){return[W.A]},
$ij:1,
$aj:function(){return[W.A]},
$ir:1,
$ar:function(){return[W.A]}}
W.iZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ay]},
$ix:1,
$ax:function(){return[W.ay]},
$av:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$ir:1,
$ar:function(){return[W.ay]}}
W.j2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ah]},
$ix:1,
$ax:function(){return[W.ah]},
$av:function(){return[W.ah]},
$ij:1,
$aj:function(){return[W.ah]},
$ir:1,
$ar:function(){return[W.ah]}}
W.iM.prototype={}
W.iN.prototype={
$1:function(a){return this.a.$1(a)}}
W.K.prototype={
gR:function(a){return new W.cK(a,this.gj(a))}}
W.cK.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bI(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gF:function(a){return this.d}}
W.dx.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.cg.prototype={}
W.ch.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e3.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.cj.prototype={}
W.ck.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
P.j_.prototype={
c0:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
b5:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.M(a)
if(!!u.$ia8)return new Date(a.a)
if(!!u.$imO)throw H.c(P.i6("structured clone of RegExp"))
if(!!u.$iag)return a
if(!!u.$ibd)return a
if(!!u.$ibO)return a
if(!!u.$iaH)return a
if(!!u.$ibY||!!u.$ib1||!!u.$ibW)return a
if(!!u.$iP){t=p.c0(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.D(a,new P.j0(o,p))
return o.a}if(!!u.$ir){t=p.c0(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.fQ(a,t)}if(!!u.$imr){t=p.c0(a)
u=p.b
s=u.length
if(t>=s)return H.b(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.b(u,t)
u[t]=q
p.h6(a,new P.j1(o,p))
return o.b}throw H.c(P.i6("structured clone of other type"))},
fQ:function(a,b){var u,t=J.ak(a),s=t.gj(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
if(typeof s!=="number")return H.h(s)
u=0
for(;u<s;++u){q=this.b5(t.h(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.j0.prototype={
$2:function(a,b){this.a.a[a]=this.b.b5(b)},
$S:3}
P.j1.prototype={
$2:function(a,b){this.a.b[a]=this.b.b5(b)},
$S:3}
P.ee.prototype={$iaH:1,
gd1:function(a){return this.a}}
P.jo.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.e6.prototype={
h6:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.f7.prototype={
gaQ:function(){var u=this.b,t=H.lG(u,"v",0)
return new H.bU(new H.iC(u,new P.f8(),[t]),new P.f9(),[t,W.T])},
D:function(a,b){C.b.D(P.ft(this.gaQ(),!1,W.T),b)},
k:function(a,b,c){var u=this.gaQ()
J.mb(u.b.$1(J.k4(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.af(this.gaQ().a)},
h:function(a,b){var u=this.gaQ()
return u.b.$1(J.k4(u.a,b))},
gR:function(a){var u=P.ft(this.gaQ(),!1,W.T)
return new J.a0(u,u.length)},
$aq:function(){return[W.T]},
$av:function(){return[W.T]},
$aj:function(){return[W.T]},
$ar:function(){return[W.T]}}
P.f8.prototype={
$1:function(a){return!!J.M(a).$iT}}
P.f9.prototype={
$1:function(a){return H.o(a,"$iT")}}
P.iT.prototype={
gcd:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.h(t)
return u+t},
gd_:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.h(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.M(b)
if(!!u.$ia3){t=q.a
if(t==u.gbf(b)){s=q.b
if(s==u.gbj(b)){r=q.c
if(typeof t!=="number")return t.v()
if(typeof r!=="number")return H.h(r)
if(t+r===u.gcd(b)){t=q.d
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.h(t)
u=s+t===u.gd_(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.cv(t),r=u.b,q=J.cv(r),p=u.c
if(typeof t!=="number")return t.v()
if(typeof p!=="number")return H.h(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.v()
if(typeof t!=="number")return H.h(t)
t=C.c.gH(r+t)
return P.nc(P.iQ(P.iQ(P.iQ(P.iQ(0,s),q),p),t))}}
P.a3.prototype={
gbf:function(a){return this.a},
gbj:function(a){return this.b},
gaw:function(a){return this.c},
gar:function(a){return this.d}}
P.aI.prototype={$iaI:1}
P.fm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aI]},
$av:function(){return[P.aI]},
$ij:1,
$aj:function(){return[P.aI]},
$ir:1,
$ar:function(){return[P.aI]}}
P.aM.prototype={$iaM:1}
P.h2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aM]},
$av:function(){return[P.aM]},
$ij:1,
$aj:function(){return[P.aM]},
$ir:1,
$ar:function(){return[P.aM]}}
P.h9.prototype={
gj:function(a){return a.length}}
P.hC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.m]},
$av:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]},
$ir:1,
$ar:function(){return[P.m]}}
P.k.prototype={
gbO:function(a){return new P.f7(a,new W.iI(a))}}
P.aO.prototype={$iaO:1}
P.hV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aO]},
$av:function(){return[P.aO]},
$ij:1,
$aj:function(){return[P.aO]},
$ir:1,
$ar:function(){return[P.aO]}}
P.dJ.prototype={}
P.dK.prototype={}
P.dU.prototype={}
P.dV.prototype={}
P.e4.prototype={}
P.e5.prototype={}
P.ec.prototype={}
P.ed.prototype={}
P.bu.prototype={$iq:1,
$aq:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]},
$ir:1,
$ar:function(){return[P.u]}}
P.ey.prototype={
gj:function(a){return a.length}}
P.ez.prototype={
h:function(a,b){return P.aQ(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
gab:function(a){var u=H.d([],[P.m])
this.D(a,new P.eA(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.w("Not supported"))},
$aa2:function(){return[P.m,null]},
$iP:1,
$aP:function(){return[P.m,null]}}
P.eA.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eB.prototype={
gj:function(a){return a.length}}
P.bc.prototype={}
P.h3.prototype={
gj:function(a){return a.length}}
P.dw.prototype={}
P.d7.prototype={
hE:function(a,b,c,d,e,f,g){var u,t=J.M(g)
if(!!t.$iaH)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.o6(g))
return}if(!!t.$ibk)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cw("Incorrect number or type of arguments"))}}
P.hw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return P.aQ(a.item(b))},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.P,,,]]},
$av:function(){return[[P.P,,,]]},
$ij:1,
$aj:function(){return[[P.P,,,]]},
$ir:1,
$ar:function(){return[[P.P,,,]]}}
P.e0.prototype={}
P.e1.prototype={}
K.eu.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"}}
K.cL.prototype={
aJ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].aJ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cT.prototype={}
K.aL.prototype={
aJ:function(a,b){return!this.dP(0,b)},
i:function(a){return"!["+this.cm(0)+"]"}}
K.hk.prototype={
dU:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.t("May not create a Set with zero characters."))
u=P.u
t=new H.F([u,P.b8])
for(s=new H.bT(a,a.gj(a));s.A();)t.k(0,s.d,!0)
r=P.ft(t.gab(t),!0,u)
C.b.dN(r)
this.a=r},
aJ:function(a,b){return C.b.U(this.a,b)},
i:function(a){return P.c3(this.a,0,null)}}
L.dc.prototype={
n:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dl(this.a.N(0,b))
r.a=H.d([],[K.cT])
r.c=!1
this.c.push(r)
return r},
h2:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.aJ(0,a))return r}return},
i:function(a){return this.b},
cS:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.U(0,n))o+=" (consume)"
for(n=p.d.c,n=n.gab(n),n=n.gR(n);n.A();){t=n.gF(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.U(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.p)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.di.prototype={
i:function(a){var u=H.lO(this.b,"\n","\\n"),t=H.lO(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dj.prototype={
i:function(a){return this.b}}
L.hR.prototype={
N:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dc(this,b)
u.c=H.d([],[L.dl])
this.a.k(0,b,u)}return u},
b3:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dj(a)
u=P.m
t.c=new H.F([u,u])
this.b.k(0,a,t)}return t},
dG:function(a){return this.hI(a)},
hI:function(a){var u=this
return P.nz(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$dG(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.u]
e=H.d([],f)
d=H.d([],f)
c=H.d([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.ca(c,0)
else{if(!t.A()){s=3
break}l=t.d}d.push(l);++o
k=g.h2(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.c3(d,0,null)
throw H.c(P.t("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.n(P.w("removeRange"))
P.aN(0,m,d.length)
d.splice(0,m-0)
C.b.fD(c,d)
d=H.d([],f)
e=H.d([],f)
g=u.d
s=!u.c.U(0,p.a)?7:8
break
case 7:s=9
return p
case 9:case 8:o=n
p=null
m=0
s=5
break
case 6:if(!k.c)e.push(l)
g=k.b
if(g.d!=null){j=P.c3(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.di(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.U(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.na()
case 1:return P.nb(q)}}},L.di)},
i:function(a){var u,t=new P.R(""),s=this.d
if(s!=null)t.a=s.cS()+"\n"
for(s=this.a,s=s.ghL(s),s=s.gR(s);s.A();){u=s.gF(s)
if(u!=this.d)t.a+=u.cS()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dl.prototype={
i:function(a){return this.b.b+": "+this.cm(0)}}
O.aV.prototype={
bm:function(a){this.a=H.d([],[a])
this.c=this.b=null},
cj:function(a,b,c){this.b=b
this.c=a},
b6:function(a,b){return this.cj(a,null,b)},
f3:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dX:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.a0(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.lG(s,"aV",0)]
if(s.f3(H.d([b],r))){u=s.a
t=u.length
u.push(b)
s.dX(t,H.d([b],r))}},
$ij:1}
O.bV.prototype={
gj:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.J():u},
ax:function(){var u=this.b
if(u!=null)u.G(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.b.gat(u)
else return V.cX()},
dB:function(a){var u=this.a
if(a==null)u.push(V.cX())
else u.push(a)
this.ax()},
c8:function(){var u=this.a
if(u.length>0){u.pop()
this.ax()}}}
E.eF.prototype={}
E.aG.prototype={
cv:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a0(u,u.length);u.A();){t=u.d
if(t.f==null)t.cv()}},
sck:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().K(0,s.gdt())
u=s.c
if(u!=null)u.gB().l(0,s.gdt())
t=new D.B("shape",r,s.c)
t.b=!0
s.af(t)}},
sdE:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gB().K(0,s.gdv())
u=s.f
s.f=a
if(a!=null)a.gB().l(0,s.gdv())
s.cv()
t=new D.B("technique",u,s.f)
t.b=!0
s.af(t)}},
saZ:function(a){var u,t,s=this
if(!J.z(s.r,a)){u=s.r
if(u!=null)u.gB().K(0,s.gdr())
if(a!=null)a.gB().l(0,s.gdr())
s.r=a
t=new D.B("mover",u,a)
t.b=!0
s.af(t)}},
al:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aM(0,b,s):null
if(!J.z(q,s.x)){u=s.x
s.x=q
t=new D.B("matrix",u,q)
t.b=!0
s.af(t)}r=s.f
if(r!=null)r.al(0,b)
for(r=s.y.a,r=new J.a0(r,r.length);r.A();)r.d.al(0,b)},
aK:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gZ(s))
else s.a.push(r.m(0,s.gZ(s)))
s.ax()
a.dC(t.f)
s=a.dy
u=(s&&C.b).gat(s)
if(u!=null&&t.d!=null)u.hy(a,t)
for(s=t.y.a,s=new J.a0(s,s.length);s.A();)s.d.aK(a)
a.dA()
a.dx.c8()},
af:function(a){var u=this.z
if(u!=null)u.G(a)},
a_:function(){return this.af(null)},
du:function(a){this.e=null
this.af(a)},
hl:function(){return this.du(null)},
dw:function(a){this.af(a)},
hm:function(){return this.dw(null)},
ds:function(a){this.af(a)},
hk:function(){return this.ds(null)},
dq:function(a){this.af(a)},
hh:function(){return this.dq(null)},
hg:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdn(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bi()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}this.a_()},
hj:function(a,b){var u,t
for(u=b.gR(b),t=this.gdn();u.A();)u.gF(u).gB().K(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.be.prototype={
i:function(a){return this.b}}
E.bp.prototype={
i:function(a){return this.b}}
E.dD.prototype={}
E.hc.prototype={
dT:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a8(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bV()
t=[V.aJ]
u.a=H.d([],t)
u.gB().l(0,new E.hd(s))
s.cy=u
u=new O.bV()
u.a=H.d([],t)
u.gB().l(0,new E.he(s))
s.db=u
u=new O.bV()
u.a=H.d([],t)
u.gB().l(0,new E.hf(s))
s.dx=u
u=H.d([],[O.de])
s.dy=u
u.push(null)
s.fr=new H.F([P.m,A.d8])},
ghv:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gZ(s)
u=t.db
u=t.z=s.m(0,u.gZ(u))
s=u}return s},
dC:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gat(u):a)},
dA:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hd.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.he.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hf.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dg.prototype={
cs:function(a){this.dD()},
cr:function(){return this.cs(null)},
gh7:function(){var u,t=this,s=Date.now(),r=C.c.a0(P.kR(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a8(s,!1)
return u/r},
cM:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.h(r)
u=C.d.aX(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.d.aX(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lc(C.n,s.ghA())}},
dD:function(){if(!this.cx){this.cx=!0
var u=window
C.A.eg(u)
C.A.fk(u,W.lA(new E.hP(this),P.a6))}},
hx:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cM()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a8(r,!1)
s.y=P.kR(r-s.r.a).a*0.000001
r=s.cy
C.b.sj(r.a,0)
r.ax()
r=s.db
C.b.sj(r.a,0)
r.ax()
r=s.dx
C.b.sj(r.a,0)
r.ax()
r=s.dy;(r&&C.b).sj(r,0)
s.dy.push(null)
o.aK(p.e)}}catch(q){u=H.ba(q)
t=H.kA(q)
P.kF("Error: "+H.e(u))
P.kF("Stack: "+H.e(t))
throw H.c(u)}}}
E.hP.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hx()}}}
Z.du.prototype={}
Z.cz.prototype={
ba:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ba(s)
t=P.t('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.iB.prototype={}
Z.cA.prototype={
aI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ba:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].ba(a)},
dH:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aK:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.m],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)p.push(u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a7(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.n(p,", ")+"\nAttrs:   "+C.b.n(r,", ")}}
Z.bl.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c2(this.c))+"'")+"]"}}
Z.aP.prototype={
gcl:function(a){var u=this.a,t=(u&$.aF().a)!==0?3:0
if((u&$.al().a)!==0)t+=3
if((u&$.aE().a)!==0)t+=3
if((u&$.aR().a)!==0)t+=2
if((u&$.aS().a)!==0)t+=3
if((u&$.cs().a)!==0)t+=3
if((u&$.ct().a)!==0)t+=4
if((u&$.bb().a)!==0)++t
return(u&$.aD().a)!==0?t+4:t},
fI:function(a){var u,t=$.aF(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.al()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ct()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aD()
if((s&t.a)!==0)if(u===a)return t
return $.m2()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aP))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.m]),t=this.a
if((t&$.aF().a)!==0)u.push("Pos")
if((t&$.al().a)!==0)u.push("Norm")
if((t&$.aE().a)!==0)u.push("Binm")
if((t&$.aR().a)!==0)u.push("Txt2D")
if((t&$.aS().a)!==0)u.push("TxtCube")
if((t&$.cs().a)!==0)u.push("Clr3")
if((t&$.ct().a)!==0)u.push("Clr4")
if((t&$.bb().a)!==0)u.push("Weight")
if((t&$.aD().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.n(u,"|")}}
D.eI.prototype={}
D.bi.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.d([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
K:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.a
u=(s&&C.b).K(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.b
u=(s&&C.b).K(s,b)||u}return u},
G:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.X()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.D(P.ft(u,!0,{func:1,ret:-1,args:[D.X]}),new D.f3(q))
u=r.b
if(u!=null){r.b=H.d([],[{func:1,ret:-1,args:[D.X]}])
C.b.D(u,new D.f4(q))}return!0},
fZ:function(){return this.G(null)},
a6:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.G(u)}}}}
D.f3.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.f4.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.bm.prototype={}
D.bn.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cB.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cB))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cQ.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cQ))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fl.prototype={
hr:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
hn:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}}
X.cS.prototype={}
X.fv.prototype={
aP:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.ad(o.a+n*m,o.b+u*t)
t=q.a.gaF()
r=new X.aK(a,V.b3(),q.x,t,s)
r.b=!0
q.z=new P.a8(p,!1)
q.x=s
return r},
c7:function(a,b){this.r=a.a
return!1},
b0:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dL()
if(typeof u!=="number")return u.a3()
this.r=(u&~t)>>>0
return!1},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.aP(a,b))
return!0},
hs:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaF()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.bX(new V.G(s*r,q*p),u,t)
t.b=!0
n.G(t)
return!0},
eT:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cS(c,r.a.gaF(),b)
s.b=!0
t.G(s)
r.y=new P.a8(u,!1)
r.x=V.b3()}}
X.ac.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ac))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aK.prototype={}
X.fV.prototype={
bs:function(a,b,c){var u=this,t=new P.a8(Date.now(),!1),s=u.a.gaF(),r=new X.aK(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c7:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.bs(a,b,!0))
return!0},
b0:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dL()
if(typeof t!=="number")return t.a3()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.G(u.bs(a,b,!0))
return!0},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.bs(a,b,!1))
return!0},
ht:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaF()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.bX(new V.G(t*s,r*q),u,b)
u.b=!0
o.G(u)
return!0},
gd2:function(){var u=this.b
return u==null?this.b=D.J():u},
gcf:function(){var u=this.c
return u==null?this.c=D.J():u},
gdm:function(){var u=this.d
return u==null?this.d=D.J():u}}
X.bX.prototype={}
X.h8.prototype={}
X.dk.prototype={}
X.hS.prototype={
aP:function(a,b){var u=this,t=new P.a8(Date.now(),!1),s=a.length>0?a[0]:V.b3(),r=u.a.gaF(),q=new X.dk(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hq:function(a){var u=this.b
if(u==null)return!1
u.G(this.aP(a,!0))
return!0},
ho:function(a){var u=this.c
if(u==null)return!1
u.G(this.aP(a,!0))
return!0},
hp:function(a){var u=this.d
if(u==null)return!1
u.G(this.aP(a,!1))
return!0}}
X.dq.prototype={
gaF:function(){var u=this.a,t=C.i.gd0(u).c
t.toString
u=C.i.gd0(u).d
u.toString
return V.l8(0,0,t,u)},
cB:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cQ(u,new X.ac(t,a.altKey,a.shiftKey))},
aD:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ac(t,a.altKey,a.shiftKey)},
bG:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ac(t,a.altKey,a.shiftKey)},
ap:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.u()
u=t.top
if(typeof r!=="number")return r.u()
return new V.ad(s-q,r-u)},
aR:function(a){return new V.G(a.movementX,a.movementY)},
bC:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.ad])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.d.ag(r.pageX)
C.d.ag(r.pageY)
p=o.left
C.d.ag(r.pageX)
n.push(new V.ad(q-p,C.d.ag(r.pageY)-o.top))}return n},
an:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cB(u,new X.ac(t,a.altKey,a.shiftKey))},
bt:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.u()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.u()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eN:function(a){this.f=!0},
ez:function(a){this.f=!1},
eH:function(a){if(this.f&&this.bt(a))a.preventDefault()},
eR:function(a){var u
if(!this.f)return
u=this.cB(a)
this.b.hr(u)},
eP:function(a){var u
if(!this.f)return
u=this.cB(a)
this.b.hn(u)},
eV:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aD(a)
if(r.x){u=r.an(a)
t=r.aR(a)
if(r.d.c7(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.an(a)
s=r.ap(a)
if(r.c.c7(u,s))a.preventDefault()},
eZ:function(a){var u,t,s,r=this
r.aD(a)
u=r.an(a)
if(r.x){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.b0(u,s))a.preventDefault()},
eL:function(a){var u,t,s,r=this
if(!r.bt(a)){r.aD(a)
u=r.an(a)
if(r.x){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.b0(u,s))a.preventDefault()}},
eX:function(a){var u,t,s,r=this
r.aD(a)
u=r.an(a)
if(r.x){t=r.aR(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.b_(u,s))a.preventDefault()},
eJ:function(a){var u,t,s,r=this
if(!r.bt(a)){r.aD(a)
u=r.an(a)
if(r.x){t=r.aR(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.b_(u,s))a.preventDefault()}},
f0:function(a){var u,t,s=this
s.aD(a)
u=new V.G((a&&C.z).gfS(a),C.z.gfT(a)).m(0,s.Q)
if(s.x){if(s.d.hs(u))a.preventDefault()
return}if(s.r)return
t=s.ap(a)
if(s.c.ht(u,t))a.preventDefault()},
f2:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.an(s.y)
t=s.ap(s.y)
s.d.eT(u,t,r)}},
ff:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bG(a)
u=t.bC(a)
if(t.e.hq(u))a.preventDefault()},
fb:function(a){var u
this.bG(a)
u=this.bC(a)
if(this.e.ho(u))a.preventDefault()},
fd:function(a){var u
this.bG(a)
u=this.bC(a)
if(this.e.hp(u))a.preventDefault()}}
D.eC.prototype={$ia1:1}
D.bg.prototype={
am:function(a){var u=this.r
if(u!=null)u.G(a)},
dZ:function(){return this.am(null)},
$ia1:1}
D.a1.prototype={}
D.cR.prototype={
am:function(a){var u=this.y
if(u!=null)u.G(a)},
cK:function(a){var u=this.z
if(u!=null)u.G(a)},
eS:function(){return this.cK(null)},
f5:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.eb(s))return!1}return!0},
es:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcJ(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q instanceof D.bg)this.f.push(q)
p=q.r
if(p==null){p=new D.bi()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}u=new D.bm()
u.b=!0
this.am(u)},
f9:function(a,b){var u,t,s
for(u=b.gR(b),t=this.gcJ();u.A();){s=u.gF(u)
C.b.K(this.e,s)
s.gB().K(0,t)}u=new D.bn()
u.b=!0
this.am(u)},
eb:function(a){var u=C.b.U(this.f,a)
return u},
$aj:function(){return[D.a1]},
$aaV:function(){return[D.a1]}}
D.h7.prototype={$ia1:1}
D.hv.prototype={$ia1:1}
V.W.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.aW.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aW))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.f2.prototype={}
V.cW.prototype={
a7:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.I])
return t},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.cW))return!1
u=b.a
t=$.C()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
u=b.r
r=q.r
t.toString
if(typeof u!=="number")return u.u()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.I],o=V.bH(H.d([q.a,q.d,q.r],p),3,0),n=V.bH(H.d([q.b,q.e,q.x],p),3,0),m=V.bH(H.d([q.c,q.f,q.y],p),3,0)
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
V.aJ.prototype={
a7:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.I])
return t},
dk:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
if(typeof b0!=="number")return b0.m()
u=e.z
t=e.cx
if(typeof u!=="number")return u.m()
s=b0*b1-u*t
r=e.db
q=e.Q
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=e.dx
n=e.ch
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a0*j-a3*k+a6*l+a7*m-a8*p+a9*s
if(Math.abs(i-0)<$.C().a)return V.cX()
h=1/i
g=-a
f=-t
return V.ar((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.h(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.h(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.h(m)
l=b3.db
k=b3.d
j=b3.x
i=b3.ch
h=b3.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
if(typeof c!=="number")return c.m()
b=a5.z
if(typeof b!=="number")return b.m()
a=a5.Q
if(typeof a!=="number")return a.m()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.ar(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
bk:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.h(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.y(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
b4:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.h(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.Q(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aJ))return!1
u=b.a
t=$.C()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
u=b.y
r=q.y
t.toString
if(typeof u!=="number")return u.u()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r,q,p=this,o=[P.I],n=V.bH(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.bH(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.bH(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.bH(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.E("")}}
V.ad.prototype={
u:function(a,b){return new V.ad(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.Q.prototype={
v:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.h(t)
return new V.Q(this.a+b.a,this.b+b.b,u+t)},
u:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.h(t)
return new V.Q(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.Q(this.a*b,this.b*b,u*b)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.C()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.u()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.bq.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bq))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.d6.prototype={
ga5:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d6))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.G.prototype={
c2:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.h(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.h(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
if(typeof b!=="number")return H.h(b)
u=this.b
if(typeof u!=="number")return u.m()
return new V.G(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.li
return u==null?$.li=new V.G(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.G(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.h(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.y.prototype={
c2:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.h(t)
return this.a*a.a+this.b*a.b+u*t},
c3:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.u()
if(typeof s!=="number")return H.h(s)
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aq:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.h(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.y(q*p-u*t,u*s-r*p,r*t-q*s)},
v:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
return new V.y(this.a+u,this.b+t,s+r)},
P:function(a){var u=this.c
if(typeof u!=="number")return u.P()
return new V.y(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.y(this.a*b,this.b*b,u*b)},
t:function(a,b){var u
if(Math.abs(b-0)<$.C().a)return V.ca()
u=this.c
if(typeof u!=="number")return u.t()
return new V.y(this.a/b,this.b/b,u/b)},
dl:function(){var u,t=$.C(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.h(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.C()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.u()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.eK.prototype={
bn:function(a){var u=V.oy(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.J():u},
O:function(a){var u=this.y
if(u!=null)u.G(a)},
scg:function(a,b){},
sc4:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.C().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bn(u)}s=new D.B("maximumLocation",s,t.b)
s.b=!0
t.O(s)}},
sc6:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.C().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bn(u)}s=new D.B("minimumLocation",s,t.c)
s.b=!0
t.O(s)}},
sW:function(a,b){var u,t=this
b=t.bn(b)
u=t.d
if(!(Math.abs(u-b)<$.C().a)){t.d=b
u=new D.B("location",u,b)
u.b=!0
t.O(u)}},
sc5:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.C().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.B("maximumVelocity",r,a)
r.b=!0
s.O(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.C().a)){u.f=a
t=new D.B("velocity",t,a)
t.b=!0
u.O(t)}},
sbS:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.C().a)){this.x=a
u=new D.B("dampening",u,a)
u.b=!0
this.O(u)}},
al:function(a,b){var u,t,s,r=this,q=r.f,p=$.C().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sW(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.C().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.cC.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.J():u},
aM:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
return J.z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bP.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.J():u},
O:function(a){var u=this.e
if(u!=null)u.G(a)},
a2:function(){return this.O(null)},
eq:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gay(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gB()
o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.bm()
u.b=!0
this.O(u)},
f7:function(a,b){var u,t
for(u=b.gR(b),t=this.gay();u.A();)u.gF(u).gB().K(0,t)
u=new D.bn()
u.b=!0
this.O(u)},
aM:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.L()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a0(r,r.length),u=null;r.A();){q=r.d
if(q!=null){t=q.aM(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.cX():u
r=s.e
if(r!=null)r.a6(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bP))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.z(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a9]},
$aaV:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dr.prototype={
gB:function(){var u=this.cy
return u==null?this.cy=D.J():u},
O:function(a){var u=this.cy
if(u!=null)u.G(a)},
a2:function(){return this.O(null)},
aT:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd2().l(0,u.gbu())
u.a.c.gdm().l(0,u.gbw())
u.a.c.gcf().l(0,u.gby())
return!0},
bv:function(a){var u=this
if(!J.z(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bx:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iaK")
if(!n.y)return
if(n.x){u=a.d.u(0,a.y)
u=new V.G(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.u(0,a.y)
u=new V.G(t.a,t.b).m(0,2).t(0,u.ga5())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.h(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.G(s.a,s.b).m(0,2).t(0,u.ga5())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.h(p)
o=n.z
if(typeof o!=="number")return H.h(o)
s.sW(0,-q*p+o)
n.b.sS(0)
t=t.u(0,a.z)
n.Q=new V.G(t.a,t.b).m(0,2).t(0,u.ga5())}n.a2()},
bz:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.h(s)
u.sS(t*10*s)
r.a2()}},
aM:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.L()
if(q<p){r.ch=p
u=b.y
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ar(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia9:1}
U.ds.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.J():u},
O:function(a){var u=this.fx
if(u!=null)u.G(a)},
a2:function(){return this.O(null)},
aT:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd2().l(0,s.gbu())
s.a.c.gdm().l(0,s.gbw())
s.a.c.gcf().l(0,s.gby())
u=s.a.d
t=u.f
u=t==null?u.f=D.J():t
u.l(0,s.gej())
u=s.a.d
t=u.d
u=t==null?u.d=D.J():t
u.l(0,s.gel())
u=s.a.e
t=u.b
u=t==null?u.b=D.J():t
u.l(0,s.gfB())
u=s.a.e
t=u.d
u=t==null?u.d=D.J():t
u.l(0,s.gfz())
u=s.a.e
t=u.c
u=t==null?u.c=D.J():t
u.l(0,s.gfv())
return!0},
aj:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.G(u,t)},
bv:function(a){var u=this
H.o(a,"$iaK")
if(!J.z(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bx:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iaK")
if(!n.cx)return
if(n.ch){u=a.d.u(0,a.y)
u=new V.G(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.u(0,a.y)
u=n.aj(new V.G(t.a,t.b).m(0,2).t(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.h(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.h(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=n.aj(new V.G(s.a,s.b).m(0,2).t(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sW(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sW(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.u(0,a.z)
n.dx=n.aj(new V.G(t.a,t.b).m(0,2).t(0,u.ga5()))}n.a2()},
bz:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.h(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.h(u)
s.sS(-t*10*u)
r.a2()}},
ek:function(a){var u=this
if(H.o(a,"$icS").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
em:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iaK")
if(!J.z(n.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=n.aj(new V.G(s.a,s.b).m(0,2).t(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sW(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sW(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.u(0,a.z)
n.dx=n.aj(new V.G(t.a,t.b).m(0,2).t(0,u.ga5()))
n.a2()},
fC:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fA:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$idk")
if(!n.cx)return
if(n.ch){u=a.d.u(0,a.y)
u=new V.G(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.u(0,a.y)
u=n.aj(new V.G(t.a,t.b).m(0,2).t(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.h(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.h(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=n.aj(new V.G(s.a,s.b).m(0,2).t(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sW(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sW(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.u(0,a.z)
n.dx=n.aj(new V.G(t.a,t.b).m(0,2).t(0,u.ga5()))}n.a2()},
fw:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.h(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.h(u)
s.sS(-t*10*u)
r.a2()}},
aM:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.L()
if(q<p){r.dy=p
u=b.y
r.c.al(0,u)
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ar(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.m(0,V.ar(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia9:1}
U.dt.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.J():u},
O:function(a){var u=this.r
if(u!=null)u.G(a)},
aT:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.J():t
t=r.gen()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.J():s).l(0,t)
return!0},
eo:function(a){var u,t,s,r,q=this
if(!J.z(q.b,q.a.b.c))return
H.o(a,"$ibX")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.B("zoom",u,r)
u.b=!0
q.O(u)}},
aM:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ar(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.cH.prototype={
aA:function(a){var u=this.y
if(u!=null)u.G(a)},
e_:function(){return this.aA(null)},
eD:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaz(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bi()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.bm()
u.b=!0
this.aA(u)},
eF:function(a,b){var u,t
for(u=b.gR(b),t=this.gaz();u.A();)u.gF(u).gB().K(0,t)
u=new D.bn()
u.b=!0
this.aA(u)},
gB:function(){var u=this.y
return u==null?this.y=D.J():u},
aK:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dC(f.d)
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
if(typeof s!=="number")return H.h(s)
o=C.d.ag(p*s)
p=q.b
if(typeof r!=="number")return H.h(r)
n=C.d.ag(p*r)
p=C.d.ag(q.c*s)
a.c=p
q=C.d.ag(q.d*r)
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
i=V.ar(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dB(i)
t=$.l1
if(t==null){t=V.l3()
q=V.ko()
p=$.lj
t=V.kZ(t,q,p==null?$.lj=new V.y(0,0,-1):p)
$.l1=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.m(0,h)}a.db.dB(h)
for(u=f.e.a,u=new J.a0(u,u.length);u.A();)u.d.al(0,a)
for(u=f.e.a,u=new J.a0(u,u.length);u.A();)u.d.aK(a)
f.b.toString
a.cy.c8()
a.db.c8()
f.c.toString
a.dA()}}
A.cx.prototype={}
A.ex.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
h_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fU:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gah:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fA.prototype={
dS:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.R("")
t=c3.fr
if(t){u.a=c2
s=c2}else s=""
r=c3.fx
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c3.k4
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c3.r1
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.nO(c3,u)
A.nQ(c3,u)
A.nP(c3,u)
A.nS(c3,u)
A.nT(c3,u)
A.nR(c3,u)
A.nU(c3,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c3.ry
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
u.a=s}if(c3.r2){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c3.rx){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c3.k2){s+="   objPos = getObjPos();\n"
u.a=s}s=(c3.k3?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.nN(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cC(n,35633)
b8.f=b8.cC(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.n(P.t("Failed to link shader: "+H.e(l)))}b8.fq()
b8.ft()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.o(b8.y.V(0,"invViewMat"),"$iaa")
if(t)b8.dy=H.o(b8.y.V(0,"objMat"),"$iaa")
if(r)b8.fr=H.o(b8.y.V(0,"viewObjMat"),"$iaa")
b8.fy=H.o(b8.y.V(0,"projViewObjMat"),"$iaa")
if(c3.go)b8.fx=H.o(b8.y.V(0,"viewMat"),"$iaa")
if(c3.x1)b8.k1=H.o(b8.y.V(0,"txt2DMat"),"$ic7")
if(c3.x2)b8.k2=H.o(b8.y.V(0,"txtCubeMat"),"$iaa")
if(c3.y1)b8.k3=H.o(b8.y.V(0,"colorMat"),"$iaa")
b8.r1=H.d([],[A.aa])
t=c3.bb
if(t>0){b8.k4=b8.y.V(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.n(P.t(c0+q+c1))
s.push(H.o(j,"$iaa"))}}if(c3.a.a)b8.r2=H.o(b8.y.V(0,"emissionClr"),"$iD")
if(c3.b.a)b8.x1=H.o(b8.y.V(0,"ambientClr"),"$iD")
if(c3.c.a)b8.y2=H.o(b8.y.V(0,"diffuseClr"),"$iD")
if(c3.d.a)b8.bc=H.o(b8.y.V(0,"invDiffuseClr"),"$iD")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.d5=H.o(b8.y.V(0,"shininess"),"$iS")
if(t)b8.d4=H.o(b8.y.V(0,"specularClr"),"$iD")}if(c3.db){b8.d6=H.o(b8.y.V(0,"envSampler"),"$ibw")
if(c3.r.a)b8.d7=H.o(b8.y.V(0,"reflectClr"),"$iD")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.d8=H.o(b8.y.V(0,"refraction"),"$iS")
if(t)b8.d9=H.o(b8.y.V(0,"refractClr"),"$iD")}}if(c3.y.a)b8.da=H.o(b8.y.V(0,"alpha"),"$iS")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.u
b8.bT=new H.F([r,A.b5])
b8.bU=new H.F([r,[P.r,A.c5]])
for(r=[A.c5],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.n(P.t(c0+o+c1))
H.o(j,"$iD")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.n(P.t(c0+o+c1))
H.o(d,"$iD")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.n(P.t(c0+o+c1))
H.o(c,"$iD")
if(typeof g!=="number")return g.a3()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.n(P.t(c0+o+c1))
H.o(b,"$iS")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.n(P.t(c0+o+c1))
H.o(a,"$iS")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.n(P.t(c0+o+c1))
H.o(a0,"$iS")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c5(j,d,c,a3,a2,a1))}b8.bU.k(0,g,e)
q=b8.bT
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.n(P.t(c0+o+c1))
q.k(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.u
b8.bV=new H.F([r,A.b5])
b8.bW=new H.F([r,[P.r,A.c6]])
for(r=[A.c6],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a3()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.n(P.t(c0+a4+c1))
H.o(j,"$iD")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.n(P.t(c0+a4+c1))
H.o(d,"$iD")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.n(P.t(c0+a4+c1))
H.o(c,"$iD")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.n(P.t(c0+a4+c1))
H.o(j,"$iD")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.n(P.t(c0+a4+c1))
H.o(d,"$iD")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.n(P.t(c0+o+c1))
H.o(c,"$ibv")
a8=c}else a8=b9
e.push(new A.c6(a7,a6,a5,j,d,a8))}b8.bW.k(0,g,e)
q=b8.bV
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.n(P.t(c0+o+c1))
q.k(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.u
b8.bX=new H.F([r,A.b5])
b8.bY=new H.F([r,[P.r,A.c8]])
for(r=[A.c8],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.n(P.t(c0+o+c1))
H.o(j,"$iD")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.n(P.t(c0+o+c1))
H.o(d,"$iD")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.n(P.t(c0+o+c1))
H.o(c,"$iD")
if(typeof g!=="number")return g.a3()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.n(P.t(c0+o+c1))
H.o(b,"$ic7")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.n(P.t(c0+o+c1))
H.o(b,"$ibw")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.n(P.t(c0+o+c1))
H.o(b,"$ibw")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.n(P.t(c0+o+c1))
H.o(a,"$ic4")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.n(P.t(c0+o+c1))
H.o(b,"$iS")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.n(P.t(c0+o+c1))
H.o(a,"$iS")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.n(P.t(c0+o+c1))
H.o(a0,"$iS")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c8(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bY.k(0,g,e)
q=b8.bX
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.n(P.t(c0+o+c1))
q.k(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.u
b8.bZ=new H.F([r,A.b5])
b8.c_=new H.F([r,[P.r,A.c9]])
for(r=[A.c9],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.n(P.t(c0+o+c1))
H.o(j,"$iD")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.n(P.t(c0+o+c1))
H.o(d,"$iD")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.n(P.t(c0+o+c1))
H.o(c,"$iD")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.n(P.t(c0+o+c1))
H.o(b,"$iD")
if(typeof g!=="number")return g.a3()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.n(P.t(c0+o+c1))
H.o(a,"$iD")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.n(P.t(c0+o+c1))
H.o(a0,"$iD")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.n(P.t(c0+o+c1))
H.o(b2,"$iS")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.n(P.t(c0+o+c1))
H.o(b3,"$iS")
b4=b3
b5=b2
a6=a0
a7=a}else{b4=b9
b5=b4
a6=b5
a7=a6}p=(g&2)!==0
if(p){o=b8.y
a4=f+"s["+k+"].shadowAdj"
a=o.h(0,a4)
if(a==null)H.n(P.t(c0+a4+c1))
H.o(a,"$ic4")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.n(P.t(c0+a4+c1))
H.o(a,"$iS")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.n(P.t(c0+a4+c1))
H.o(a0,"$iS")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.n(P.t(c0+a4+c1))
H.o(a,"$iS")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.n(P.t(c0+a4+c1))
H.o(a0,"$iS")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.n(P.t(c0+a4+c1))
H.o(b2,"$iS")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.n(P.t(c0+a4+c1))
H.o(a,"$ibv")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.n(P.t(c0+o+c1))
H.o(a,"$ibv")
b0=a}else b0=b9
e.push(new A.c9(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.c_.k(0,g,e)
q=b8.bZ
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.n(P.t(c0+o+c1))
q.k(0,g,j)}}}},
fo:function(a,b){}}
A.cy.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cE.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.d3.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.da.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fD.prototype={
i:function(a){return this.aW}}
A.c5.prototype={}
A.c6.prototype={}
A.c8.prototype={}
A.c9.prototype={}
A.d8.prototype={
dV:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cC:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.t("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fq:function(){var u,t,s,r=this,q=H.d([],[A.cx]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.h(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cx(p,t.name,s))}r.x=new A.ex(q)},
ft:function(){var u,t,s,r=this,q=H.d([],[A.dm]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.h(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fR(t.type,t.size,t.name,s))}r.y=new A.i3(q)},
aC:function(a,b,c){var u=this.a
if(a===1)return new A.b5(u,b,c)
else return A.kl(u,this.r,b,a,c)},
ed:function(a,b,c){var u=this.a
if(a===1)return new A.bv(u,b,c)
else return A.kl(u,this.r,b,a,c)},
ee:function(a,b,c){var u=this.a
if(a===1)return new A.bw(u,b,c)
else return A.kl(u,this.r,b,a,c)},
b8:function(a,b){return new P.dE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fR:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aC(b,c,d)
case 5121:return u.aC(b,c,d)
case 5122:return u.aC(b,c,d)
case 5123:return u.aC(b,c,d)
case 5124:return u.aC(b,c,d)
case 5125:return u.aC(b,c,d)
case 5126:return new A.S(u.a,c,d)
case 35664:return new A.i_(u.a,c,d)
case 35665:return new A.D(u.a,c,d)
case 35666:return new A.c4(u.a,c,d)
case 35667:return new A.i0(u.a,c,d)
case 35668:return new A.i1(u.a,c,d)
case 35669:return new A.i2(u.a,c,d)
case 35674:return new A.i4(u.a,c,d)
case 35675:return new A.c7(u.a,c,d)
case 35676:return new A.aa(u.a,c,d)
case 35678:return u.ed(b,c,d)
case 35680:return u.ee(b,c,d)
case 35670:throw H.c(u.b8("BOOL",c))
case 35671:throw H.c(u.b8("BOOL_VEC2",c))
case 35672:throw H.c(u.b8("BOOL_VEC3",c))
case 35673:throw H.c(u.b8("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dm.prototype={}
A.i3.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
V:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b5.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.i0.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.i2.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.S.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.D.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.c4.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.i4.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.c7.prototype={
ae:function(a){var u=new Float32Array(H.bC(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.aa.prototype={
ae:function(a){var u=new Float32Array(H.bC(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bv.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bw.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jf.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c3(s.b,b).c3(s.d.c3(s.c,b),c)
a.sW(0,new V.Q(r.a,r.b,r.c))
a.sce(r.t(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sbK(new V.bq(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jp.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jr.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.h(p)
s=-s*p
u=r*p
a.sW(0,new V.Q(s,u,q))
u=new V.y(s,u,q)
a.sce(u.t(0,Math.sqrt(u.C(u))))
a.sbK(new V.bq(1-c,2+c,-1,-1))}}
F.jC.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.y(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.t(0,Math.sqrt(r.C(r)))
a.sW(0,new V.Q(s.a,s.b,s.c))}}
F.jY.prototype={
$2:function(a,b){return 0}}
F.jZ.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.h(s)
u=a.f
t=new V.y(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.C(t))).m(0,this.b+s)
a.sW(0,new V.Q(s.a,s.b,s.c))}}
F.k0.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)}}
F.jq.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.kK(m.$1(n),l)
l=J.kK(m.$1(n+3.141592653589793/o.c),l).u(0,k)
l=new V.y(l.a,l.b,l.c)
u=l.t(0,Math.sqrt(l.C(l)))
m=$.lk
if(m==null){m=new V.y(1,0,0)
$.lk=m
t=m}else t=m
m=u.aq(!J.z(u,t)?V.lm():t)
s=m.t(0,Math.sqrt(m.C(m)))
m=s.aq(u)
t=m.t(0,Math.sqrt(m.C(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.m(0,m*l)
l=s.m(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.u()
if(typeof p!=="number")return H.h(p)
a.sW(0,k.v(0,new V.Q(m.a-l.a,m.b-l.b,q-p)))}}
F.jv.prototype={
$2:function(a,b){return 0}}
F.jw.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sW(0,new V.Q(s,r,this.a.a.$2(b,c)))
u=new V.y(s,r,1)
a.sce(u.t(0,Math.sqrt(u.C(u))))
u=1-b
t=1-c
a.sbK(new V.bq(b*c,2+u*c,4+b*t,6+u*t))}}
F.bj.prototype={
aU:function(){var u=this
if(!u.gaV()){C.b.K(u.a.a.d.b,u)
u.a.a.a_()}u.bD()
u.bE()
u.fi()},
bH:function(a){this.a=a
a.d.b.push(this)},
bI:function(a){this.b=a
a.d.c.push(this)},
fp:function(a){this.c=a
a.d.d.push(this)},
bD:function(){var u=this.a
if(u!=null){C.b.K(u.d.b,this)
this.a=null}},
bE:function(){var u=this.b
if(u!=null){C.b.K(u.d.c,this)
this.b=null}},
fi:function(){var u=this.c
if(u!=null){C.b.K(u.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
e7:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ca()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.dl())return
return s.t(0,Math.sqrt(s.C(s)))},
e9:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.u(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.C(r)))
r=t.u(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.aq(r.t(0,Math.sqrt(r.C(r))))
return r.t(0,Math.sqrt(r.C(r)))},
bN:function(){var u,t=this
if(t.d!=null)return!0
u=t.e7()
if(u==null){u=t.e9()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
e6:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ca()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.dl())return
return s.t(0,Math.sqrt(s.C(s)))},
e8:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.C().a){l=d.u(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.u(0,g).m(0,p).v(0,g).u(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.C(l)))
l=o.aq(q)
l=l.t(0,Math.sqrt(l.C(l))).aq(o)
q=l.t(0,Math.sqrt(l.C(l)))}return q},
bL:function(){var u,t=this
if(t.e!=null)return!0
u=t.e6()
if(u==null){u=t.e8()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
gfM:function(a){var u=this
if(J.z(u.a,u.b))return!0
if(J.z(u.b,u.c))return!0
if(J.z(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this
if(s.gaV())return a+"disposed"
u=a+C.a.ad(J.a7(s.a.e),0)+", "+C.a.ad(J.a7(s.b.e),0)+", "+C.a.ad(J.a7(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.E("")}}
F.f5.prototype={}
F.hs.prototype={
aY:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bS.prototype={
aU:function(){var u=this
if(!u.gaV()){C.b.K(u.a.a.c.b,u)
u.a.a.a_()}u.bD()
u.bE()},
bH:function(a){this.a=a
a.c.b.push(this)},
bI:function(a){this.b=a
a.c.c.push(this)},
bD:function(){var u=this.a
if(u!=null){C.b.K(u.c.b,this)
this.a=null}},
bE:function(){var u=this.b
if(u!=null){C.b.K(u.c.c,this)
this.b=null}},
gaV:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){if(this.gaV())return a+"disposed"
return a+C.a.ad(J.a7(this.a.e),0)+", "+C.a.ad(J.a7(this.b.e),0)},
M:function(){return this.E("")}}
F.fn.prototype={}
F.hY.prototype={
aY:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
return t==u.e}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
return t==u.e}else return!1}}}
F.c0.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ad(J.a7(u.e),0)},
M:function(){return this.E("")}}
F.hl.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.J():u},
bg:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){r=g[s]
h.a.l(0,r.fP())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.c0()
if(n.a==null)H.n(P.t("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.G(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.mt(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.cI(l,k,i)}g=h.e
if(g!=null)g.a6(0)},
a4:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.a4()||!1
if(!t.a.a4())u=!1
s=t.e
if(s!=null)s.a6(0)
return u},
fH:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.e
if(c!=null)++c.d
for(u=d.a.c.length-1,c=a.b,t=a.a,s=t.length,r=a.c,q=c-1;u>=0;--u){p=d.a.c
if(u>=p.length)return H.b(p,u)
o=p[u]
p=o.y
n=C.d.aX(p.a*q)
p=p.b
if(typeof r!=="number")return r.u()
m=C.d.aX(p*(r-1))
n=n>=0?C.c.ai(n,c):c+C.c.ai(n,c)
l=(n+(m>=0?C.c.ai(m,r):r+C.c.ai(m,r))*c)*4
if(l<0||l>=s)return H.b(t,l)
p=t[l]
k=l+1
if(k>=s)return H.b(t,k)
k=t[k]
j=l+2
if(j>=s)return H.b(t,j)
j=t[j]
i=l+3
if(i>=s)return H.b(t,i)
p/=255
k/=255
j/=255
i=t[i]/255
if(p<0)p=0
else if(p>1)p=1
if(k<0)k=0
else if(k>1)k=1
if(j<0)j=0
else if(j>1)j=1
if(!(i<0))if(i>1)i=1
h=(p+k+j)*b/3
p=o.f
k=o.r
j=k.a
i=k.b
k=k.c
if(typeof k!=="number")return k.m()
g=p.a
f=p.b
e=p.c
if(typeof e!=="number")return e.v()
k=new V.Q(g+j*h,f+i*h,e+k*h)
if(!J.z(p,k)){o.f=k
p=o.a
if(p!=null){p=p.e
if(p!=null)p.G(null)}}}c=d.e
if(c!=null)c.a6(0)},
hK:function(a){var u,t,s,r,q=this.e
if(q!=null)++q.d
for(q=this.a,u=q.c.length-1,t=a.a;u>=0;--u){s=q.c
if(u>=s.length)return H.b(s,u)
r=s[u]
if((t&$.aF().a)===0)r.f=null
if((t&$.al().a)===0)r.r=null
if((t&$.aE().a)===0)r.x=null
if((t&$.aR().a)===0)r.y=null
if((t&$.aS().a)===0)r.z=null
if((t&$.kI().a)===0)r.Q=null
if((t&$.bb().a)===0)r.ch=0
if((t&$.aD().a)===0)r.cx=null}q=this.e
if(q!=null)q.a6(0)},
hJ:function(a){var u,t,s,r=this.e
if(r!=null)++r.d
for(r=this.d,u=r.b.length-1;u>=0;--u){t=r.b
if(u>=t.length)return H.b(t,u)
s=t[u]
s.d=null}r=this.e
if(r!=null)r.a6(0)},
hd:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.b9(o,0)])
for(o=[F.by];u.length!==0;){t=C.b.gh3(u)
C.b.ca(u,0)
if(t!=null){s=H.d([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){s.push(q)
C.b.ca(u,r)}}if(s.length>1)b.bg(s)}}p.a.w()
p.c.bi()
p.d.bi()
p.b.hw()
p.c.cb(new F.hY())
p.d.cb(new F.hs())
o=p.e
if(o!=null)o.a6(0)},
b9:function(){this.hd(new F.iu(),new F.h0())},
fK:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aF()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.al().a)!==0)++s
if((t&$.aE().a)!==0)++s
if((t&$.aR().a)!==0)++s
if((t&$.aS().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.bb().a)!==0)++s
if((t&$.aD().a)!==0)++s
r=a4.gcl(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.d(u,[P.I])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.cz])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fI(m)
k=l.gcl(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cz(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hb(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bC(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cA(new Z.du(a1,d),o,a4)
c.b=H.d([],[Z.bl])
if(a0.b.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)}a=Z.kq(u,34963,b)
c.b.push(new Z.bl(0,b.length,a))}if(a0.c.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)}a=Z.kq(u,34963,b)
c.b.push(new Z.bl(1,b.length,a))}if(a0.d.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.w()
b.push(t.e)}a=Z.kq(u,34963,b)
c.b.push(new Z.bl(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.d([],[P.m])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.E(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.E(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.E(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.E(t))}return C.b.n(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.G(null)}}
F.hm.prototype={
fG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.d([],[F.bj])
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
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.cI(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cI(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cI(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.cI(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
cb:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
bi:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gfM(s)
if(t)s.aU()}},
a4:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bN())s=!1
return s},
bM:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bL())s=!1
return s},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(a))
return C.b.n(r,"\n")},
M:function(){return this.E("")}}
F.hn.prototype={
gj:function(a){return this.b.length},
cb:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
bi:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.z(s.a,s.b)
if(t)s.aU()}},
i:function(a){return this.M()},
E:function(a){var u,t,s=H.d([],[P.m]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].E(a+(""+u+". ")))}return C.b.n(s,"\n")},
M:function(){return this.E("")}}
F.ho.prototype={
gj:function(a){return this.b.length},
hw:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.G(null)}s=t.a
if(s!=null){C.b.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(a))
return C.b.n(r,"\n")},
M:function(){return this.E("")}}
F.by.prototype={
bR:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kp(u.cx,r,o,t,s,q,p,a,n)},
fP:function(){return this.bR(null)},
sW:function(a,b){var u
if(!J.z(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
sce:function(a){var u
if(!J.z(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sbK:function(a){var u
if(!J.z(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
hb:function(a){var u,t,s=this
if(a.p(0,$.aF())){u=s.f
t=[P.I]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.al())){u=s.r
t=[P.I]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.aE())){u=s.x
t=[P.I]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.aR())){u=s.y
t=[P.I]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.aS())){u=s.z
t=[P.I]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.cs())){u=s.Q
t=[P.I]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.ct())){u=s.Q
t=[P.I]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bb()))return H.d([s.ch],[P.I])
else if(a.p(0,$.aD())){u=s.cx
t=[P.I]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.I])},
bN:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ca()
t.d.D(0,new F.iz(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.a6(0)}return!0},
bL:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ca()
t.d.D(0,new F.iy(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.a6(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this,r="-",q=H.d([],[P.m])
q.push(C.a.ad(J.a7(s.e),0))
u=s.f
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.i(0))
else q.push(r)
q.push(V.H(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.n(q,", ")
return a+"{"+t+"}"},
M:function(){return this.E("")}}
F.iz.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.iy.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.ip.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a_()
return!0},
gj:function(a){return this.c.length},
a4:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bN()
return!0},
bM:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bL()
return!0},
fL:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r
this.w()
u=H.d([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].E(a))
return C.b.n(u,"\n")},
M:function(){return this.E("")}}
F.iq.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
D:function(a,b){var u=this
C.b.D(u.b,b)
C.b.D(u.c,new F.ir(u,b))
C.b.D(u.d,new F.is(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
return C.b.n(r,"\n")}}
F.ir.prototype={
$1:function(a){if(!J.z(a.a,this.a))this.b.$1(a)}}
F.is.prototype={
$1:function(a){var u=this.a
if(!J.z(a.a,u)&&!J.z(a.b,u))this.b.$1(a)}}
F.it.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
return C.b.n(r,"\n")}}
F.iv.prototype={}
F.iu.prototype={
aY:function(a,b,c){return J.z(b.f,c.f)}}
F.iw.prototype={}
F.h0.prototype={
bg:function(a){var u,t,s,r,q,p,o,n,m,l,k=V.ca()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null){r=k.a
q=s.a
p=k.b
o=s.b
n=k.c
s=s.c
if(typeof n!=="number")return n.v()
if(typeof s!=="number")return H.h(s)
k=new V.y(r+q,p+o,n+s)}}k=k.t(0,Math.sqrt(k.C(k)))
for(u=a.length,s=k==null,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){m=a[t]
if(s)l=null
else{r=k.a
q=k.b
p=k.c
if(typeof p!=="number")return p.m()
l=k.t(0,Math.sqrt(r*r+q*q+p*p))}if(!J.z(m.r,l)){m.r=l
r=m.a
if(r!=null){r=r.e
if(r!=null)r.G(null)}}}return}}
F.ix.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
return C.b.n(r,"\n")}}
O.cU.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.J():u},
aa:function(a){var u=this.fr
if(u!=null)u.G(a)},
eB:function(){return this.aa(null)},
cL:function(a){this.a=null
this.aa(a)},
fm:function(){return this.cL(null)},
ev:function(a,b){var u=new D.bm()
u.b=!0
this.aa(u)},
ex:function(a,b){var u=new D.bn()
u.b=!0
this.aa(u)},
cA:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.u
f=[f,f]
u=new H.F(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
p=q.gak()
o=u.h(0,q.gak())
u.k(0,p,o==null?1:o)}n=H.d([],[A.cy])
u.D(0,new O.fH(g,n))
C.b.aO(n,new O.fI())
m=new H.F(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.d([],[A.cE])
m.D(0,new O.fJ(g,l))
C.b.aO(l,new O.fK())
k=new H.F(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
p=q.gak()
o=k.h(0,q.gak())
k.k(0,p,o==null?1:o)}j=H.d([],[A.d3])
k.D(0,new O.fL(g,j))
C.b.aO(j,new O.fM())
i=new H.F(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.p)(f),++r){q=f[r]
s=q.gak()
p=i.h(0,q.gak())
i.k(0,s,p==null?1:p)}h=H.d([],[A.da])
i.D(0,new O.fN(g,h))
C.b.aO(h,new O.fO())
f=C.c.a0(g.e.a.length+3,4)
g.dy.e
return A.mA(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
e5:function(a,b){},
al:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a0(u,u.length);u.A();){t=u.d
t.toString
s=$.io
if(s==null)s=$.io=new V.y(0,0,1)
t.a=s
r=$.im
t.d=r==null?$.im=new V.y(0,1,0):r
r=$.il
t.e=r==null?$.il=new V.y(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bk(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bk(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bk(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
hy:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cA()
u=b4.fr.h(0,b3.aW)
if(u==null){u=A.mz(b3,b4.a)
t=u.b
if(t.length===0)H.n(P.t("May not cache a shader with no name."))
if(b4.fr.bP(0,t))H.n(P.t('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.k(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bc
b3=b5.e
if(!(b3 instanceof Z.cA))b3=b5.e=null
if(b3==null||!b3.d.p(0,r)){b3=s.k4
if(b3)b5.d.a4()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bM()
p.a.bM()
p=p.e
if(p!=null)p.a6(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.fL()
o=o.e
if(o!=null)o.a6(0)}m=b5.d.fK(new Z.iB(b4.a),r)
m.aI($.aF()).e=b2.a.Q.c
if(b3)m.aI($.al()).e=b2.a.cx.c
if(q)m.aI($.aE()).e=b2.a.ch.c
if(s.r2)m.aI($.aR()).e=b2.a.cy.c
if(p)m.aI($.aS()).e=b2.a.db.c
if(s.ry)m.aI($.aD()).e=b2.a.dx.c
b5.e=m}l=H.d([],[T.df])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.h_()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gZ(p)
b3=b3.dy
b3.toString
b3.ae(p.a7(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gZ(p)
o=b4.dx
o=b4.cx=p.m(0,o.gZ(o))
p=o}b3=b3.fr
b3.toString
b3.ae(p.a7(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.ghv()
o=b4.dx
o=b4.ch=p.m(0,o.gZ(o))
p=o}b3=b3.fy
b3.toString
b3.ae(p.a7(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gZ(p)
b3=b3.fx
b3.toString
b3.ae(p.a7(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ae(C.j.a7(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ae(C.j.a7(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ae(C.j.a7(p,!0))}if(s.bb>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.b(b3,j)
b3=b3[j]
i=new Float32Array(H.bC(p.a7(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}if(s.a.a){b3=b2.a
p=b2.f.f
b3=b3.r2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(s.k1){if(s.b.a){b3=b2.a
p=b2.r.f
b3=b3.x1
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(s.c.a){b3=b2.a
p=b2.x.f
b3=b3.y2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(s.d.a){b3=b2.a
p=b2.y.f
b3=b3.bc
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.d5
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.d4
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.z
if(b3.length>0){p=P.u
h=new H.F([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.gak()
d=h.h(0,e)
if(d==null)d=0
h.k(0,e,d+1)
c=J.bI(b2.a.bU.h(0,e),d)
n=f.ghP()
b=$.av
n=n.b4(b==null?$.av=new V.Q(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghU()
b=$.av
n=n.b4(b==null?$.av=new V.Q(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaG(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gd3()){n=f.gcW()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gcX()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gcY()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bT.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.gZ(p)
p=P.u
a0=new H.F([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.k(0,0,d+1)
c=J.bI(b2.a.bW.h(0,0),d)
n=a.bk(f.a)
b=n.a
a1=n.b
a2=n.c
if(typeof a2!=="number")return a2.m()
a2=n.t(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.c
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bV.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.gZ(p)
p=P.u
a3=new H.F([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.gak()
d=a3.h(0,e)
if(d==null)d=0
a3.k(0,e,d+1)
c=J.bI(b2.a.bY.h(0,e),d)
a4=a.m(0,f.gZ(f))
n=f.gZ(f)
b=$.av
n=n.b4(b==null?$.av=new V.Q(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.av
n=a4.b4(n==null?$.av=new V.Q(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaG(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gav()
n=a4.dk(0)
b=n.a
a1=n.b
a2=n.c
a5=n.e
a6=n.f
a7=n.r
a8=n.y
a9=n.z
n=n.Q
b0=c.d
b0.toString
i=new Float32Array(H.bC(new V.cW(b,a1,a2,a5,a6,a7,a8,a9,n).a7(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gav()
n=f.gav()
if(!C.b.U(l,n)){n.sas(0,l.length)
l.push(n)}n=f.gav()
b=n.gau(n)
if(b){b=c.f
b.toString
a1=n.gau(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gas(n)
b.a.uniform1i(b.d,n)}}f.gaN()
n=f.gdM()
b=c.x
b.toString
a1=n.gfW(n)
a2=n.gfX(n)
a5=n.gfY()
n=n.gfV()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaN()
if(!C.b.U(l,n)){n.sas(0,l.length)
l.push(n)}n=f.gaN()
b=n.gau(n)
if(b){b=c.r
b.toString
a1=n.gau(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gas(n)
b.a.uniform1i(b.d,n)}}if(f.gd3()){n=f.gcW()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gcX()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gcY()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bX.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.gZ(p)
p=P.u
b1=new H.F([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.gak()
d=b1.h(0,e)
if(d==null)d=0
b1.k(0,e,d+1)
c=J.bI(b2.a.c_.h(0,e),d)
n=f.ghu(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghS(f).ia()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.b4(f.ghu(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaG(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gav()
n=f.gcf()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gcd(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gib()
b=c.x
b.a.uniform1f(b.d,n)
n=f.gic()
b=c.y
b.a.uniform1f(b.d,n)
f.gav()
n=f.gav()
if(!C.b.U(l,n)){n.sas(0,l.length)
l.push(n)}n=f.gav()
b=n.gau(n)
if(b){b=c.dx
b.toString
a1=n.gau(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gas(n)
b.a.uniform1i(b.d,n)}}f.gaN()
n=f.gdM()
b=c.z
b.toString
a1=n.gfW(n)
a2=n.gfX(n)
a5=n.gfY()
n=n.gfV()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaN()
if(!C.b.U(l,n)){n.sas(0,l.length)
l.push(n)}n=f.gaN()
b=n.gau(n)
if(b){b=c.dy
b.toString
a1=n.gau(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gas(n)
b.a.uniform1i(b.d,n)}}if(f.ghT()){n=f.ghR()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.ghQ()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gd3()){n=f.gcW()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gcX()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gcY()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bZ.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gZ(p).dk(0)}b3=b3.id
b3.toString
b3.ae(p.a7(0,!0))}if(s.db){b2.e5(l,b2.ch)
b3=b2.a
p=b2.ch
b3.fo(b3.d6,p)
if(s.r.a){b3=b2.a
p=b2.cx.f
b3=b3.d7
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.d8
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.d9
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=s.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.da
b3.a.uniform1f(b3.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].ba(b4)
b3=b5.e
b3.ba(b4)
b3.aK(b4)
b3.dH(b4)
if(p)b3=!1
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j)l[j].dH(b4)
b3=b2.a
b3.toString
q.useProgram(null)
b3.x.fU()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cA().aW}}
O.fH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cy(a,C.c.a0(b+3,4)*4))}}
O.fI.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cE(a,C.c.a0(b+3,4)*4))}}
O.fK.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.d3(a,C.c.a0(b+3,4)*4))}}
O.fM.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fN.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.da(a,C.c.a0(b+3,4)*4))}}
O.fO.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fB.prototype={
ao:function(){var u,t=this
t.cn()
u=t.f
if(!(Math.abs(u-1)<$.C().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.aa(u)}}}
O.cV.prototype={
ao:function(){},
cO:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ao()
u=s.a
u.a=null
u.aa(null)}}}
O.fC.prototype={}
O.aq.prototype={
cN:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.B(s.b+".color",u,a)
t.b=!0
s.a.aa(t)}},
ao:function(){this.cn()
this.cN(new V.W(1,1,1))},
saG:function(a,b){this.cO(new A.Z(!0,!1,!1))
this.cN(b)}}
O.fE.prototype={}
O.fF.prototype={
ao:function(){var u,t=this
t.co()
u=t.ch
if(!(Math.abs(u-1)<$.C().a)){t.ch=1
u=new D.B(t.b+".refraction",u,1)
u.b=!0
t.a.aa(u)}}}
O.fG.prototype={
cP:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.C().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.aa(t)}},
ao:function(){this.co()
this.cP(100)}}
O.de.prototype={}
T.df.prototype={}
T.hH.prototype={}
T.hL.prototype={}
T.hM.prototype={
hc:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kT(a)
t=new T.hL()
t.a=0
t.b=q
t.d=t.c=!1
t.x=t.r=0
W.U(u,"load",new T.hN(this,t,u,!1,q,!1,!1),!1)
return t},
fn:function(a,b,c){var u,t,s,r
b=V.kE(b)
u=V.kE(a.width)
t=V.kE(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k8()
s.width=u
s.height=t
r=C.i.dK(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.o7(r.getImageData(0,0,s.width,s.height))}}}
T.hN.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=u.c,q=s.fn(r,s.b,u.d),p=u.b
p.r=r.width
p.x=r.height
r=s.a
r.bindTexture(t,u.e)
r.pixelStorei(37440,u.f?1:0)
C.Y.hE(r,t,0,6408,6408,5121,q)
if(u.r)r.generateMipmap(t)
r.bindTexture(t,null)
if(!p.d){p.d=!0
r=p.y
if(r!=null)r.fZ()}++s.e}}
T.hO.prototype={
ei:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.cp()
u=C.c.a0(f,2)
t=this.b
s=this.a
r=s.length
q=t*4
for(;u>=0;--u){p=q*u
o=q*(f-1-u)
for(n=0;n<t;++n){m=4*n
l=p+m
k=o+m
for(j=0;j<4;++j){i=l+j
h=k+j
if(i<0||i>=r)return H.b(s,i)
g=s[i]
if(h<0||h>=r)return H.b(s,h)
s[i]=s[h]
s[h]=g}}}}}
X.k7.prototype={}
X.fc.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.J():u}}
X.d2.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.J():u},
aB:function(a){var u=this.f
if(u!=null)u.G(a)},
e2:function(){return this.aB(null)},
saZ:function(a){var u,t,s=this
if(!J.z(s.b,a)){u=s.b
if(u!=null)u.gB().K(0,s.gct())
t=s.b
s.b=a
if(a!=null)a.gB().l(0,s.gct())
u=new D.B("mover",t,s.b)
u.b=!0
s.aB(u)}}}
X.hD.prototype={}
V.jX.prototype={
$1:function(a){var u=C.d.dF(this.a.gh7(),2)
if(u!=="0.00")P.kF(u+" fps")}}
V.ha.prototype={
bJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.ic().gb1().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.aS(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.bJ(m.c).l(0,q)
o=W.mn("radio")
o.checked=s
o.name=u
W.U(o,"change",new V.hb(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.bJ(m.c).l(0,r.createElement("br"))},
Y:function(a,b,c){return this.bJ(a,b,c,!1)},
aS:function(a){var u,t,s=P.ic(),r=P.m,q=P.kX(s.gb1(),r,r)
q.k(0,this.a,a)
u=s.cc(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.e6([],[]).b5(""),"",t)}}
V.hb.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.aS(u.d)}}}
V.hp.prototype={
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
W.U(q,"scroll",new V.hr(o),!1)},
cV:function(a){var u,t,s,r,q,p,o,n
this.fs()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.ha(a),s.toString,r=new H.N(r),r=new P.ci(s.dG(new H.bT(r,r.gj(r))).a());r.A();){s=r.gF(r)
switch(s.a){case"Bold":q=u.createElement("div")
q.className="boldPar"
q.textContent=s.b
t.appendChild(q)
break
case"Italic":q=u.createElement("div")
q.className="italicPar"
q.textContent=s.b
t.appendChild(q)
break
case"Code":q=u.createElement("div")
q.className="codePar"
q.textContent=s.b
t.appendChild(q)
break
case"Link":s=s.b
if(H.lN(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.b(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.jb(C.S,s,C.e,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+H.e(n)
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
fE:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
n.id="shellTable"
u=n.style
u.width="100%"
u.padding="0px"
u.marginLeft=p
u.marginRight=p
this.a.appendChild(n)
t=n.insertRow(-1)
u=t.insertCell(-1).style
u.textAlign="center"
u.verticalAlign="top"
u.marginLeft=p
u.marginRight=p
for(s=0;s<3;++s){r=o.createElement("div")
r.id=a[s]
u=r.style
u.textAlign="left"
u=r.style
u.verticalAlign="top"
u=t.insertCell(-1)
q=u.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=p
q.marginRight=p
u.appendChild(r)}},
fs:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hR()
t=P.m
u.a=new H.F([t,L.dc])
u.b=new H.F([t,L.dj])
u.c=P.kY(t)
u.d=u.N(0,q)
t=u.N(0,q).n(0,p)
s=K.Y(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.N(0,p).n(0,p)
s=new K.aL()
r=[K.cT]
s.a=H.d([],r)
t.a.push(s)
t=K.Y(new H.N("*"))
s.a.push(t)
t=u.N(0,p).n(0,"BoldEnd")
s=K.Y(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.N(0,q).n(0,o)
s=K.Y(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.N(0,o).n(0,o)
s=new K.aL()
s.a=H.d([],r)
t.a.push(s)
t=K.Y(new H.N("_"))
s.a.push(t)
t=u.N(0,o).n(0,n)
s=K.Y(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.N(0,q).n(0,m)
s=K.Y(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.N(0,m).n(0,m)
s=new K.aL()
s.a=H.d([],r)
t.a.push(s)
t=K.Y(new H.N("`"))
s.a.push(t)
t=u.N(0,m).n(0,"CodeEnd")
s=K.Y(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.N(0,q).n(0,l)
s=K.Y(new H.N("["))
t.a.push(s)
t.c=!0
t=u.N(0,l).n(0,k)
s=K.Y(new H.N("|"))
t.a.push(s)
s=u.N(0,l).n(0,j)
t=K.Y(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.N(0,l).n(0,l)
t=new K.aL()
t.a=H.d([],r)
s.a.push(t)
s=K.Y(new H.N("|]"))
t.a.push(s)
s=u.N(0,k).n(0,j)
t=K.Y(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.N(0,k).n(0,k)
t=new K.aL()
t.a=H.d([],r)
s.a.push(t)
s=K.Y(new H.N("|]"))
t.a.push(s)
u.N(0,q).n(0,i).a.push(new K.eu())
s=u.N(0,i).n(0,i)
t=new K.aL()
t.a=H.d([],r)
s.a.push(t)
s=K.Y(new H.N("*_`["))
t.a.push(s)
s=u.N(0,"BoldEnd")
s.d=s.a.b3(p)
s=u.N(0,n)
s.d=s.a.b3(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b3(m)
s=u.N(0,j)
s.d=s.a.b3("Link")
s=u.N(0,i)
s.d=s.a.b3(i)
this.b=u}}
V.hr.prototype={
$1:function(a){P.lc(C.n,new V.hq(this.a))}}
V.hq.prototype={
$0:function(){var u=C.d.ag(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hI.prototype={
Y:function(a,b,c){var u,t,s,r,q=this,p=W.kT(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.bJ(q.c)
t=u.gj(u)
W.U(p,"click",new V.hK(q,p,b,t),!1)
J.bJ(q.c).l(0,p)
J.bJ(q.c).l(0,document.createElement("br"))
s=P.ic().gb1().h(0,H.e(q.a))
if(s==null){q.aS(t)
r=c}else r=P.cq(s,null,null)==t
if(r)p.click()},
l:function(a,b){return this.Y(a,b,!1)},
aS:function(a){var u,t,s=P.ic(),r=P.m,q=P.kX(s.gb1(),r,r)
q.k(0,this.a,H.e(a))
u=s.cc(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.e6([],[]).b5(""),"",t)}}
V.hK.prototype={
$1:function(a){var u=this,t=u.a,s=J.bJ(t.c)
s.D(s,new V.hJ())
s=u.b.style
s.border="solid 2px black"
t.d.$1(u.c)
t.aS(u.d)}}
V.hJ.prototype={
$1:function(a){var u
if(!!J.M(a).$ibk){u=a.style
u.border="solid 2px white"}}}
K.jE.prototype={
$0:function(){var u,t,s,r=this.a
if(r.a!=null&&r.b.length!==0){u=this.b
t=u.f.hc(r.b)
s=t.y
if(s==null)s=t.y=D.J()
s.l(0,new K.jD(r,u,t,this.c))}}}
K.jD.prototype={
$1:function(a){var u,t,s,r,q=this,p=q.c,o=q.b.f.a,n=p.r,m=p.x
if(typeof m!=="number")return m.u()
u=m-m-0
o.bindFramebuffer(36160,o.createFramebuffer())
o.readBuffer(36064)
o.framebufferTexture2D(36160,36064,3553,p.b,0)
if(typeof n!=="number")return n.m()
if(typeof m!=="number")return H.h(m)
t=new Uint8Array(n*m*4)
o.readPixels(0,u,n,m,6408,5121,t)
o.bindFramebuffer(36160,null)
s=new T.hO(t,n,m)
s.ei()
p=q.a
o=p.a
r=F.kj()
r.bg(o)
r.a4()
r.fH(s,p.c)
p=$.al()
p.toString
r.hK(new Z.aP($.kH().a&~p.a))
r.hJ(!1)
r.a4()
q.d.sck(0,r)}}
K.jF.prototype={
$1:function(a){this.a.b=a
this.b.$0()}}
K.jG.prototype={
$1:function(a){this.a.a=a
this.b.$0()}}
K.jO.prototype={
$0:function(){this.a.$1(F.lD(50,null,50))}}
K.jP.prototype={
$0:function(){this.a.$1(F.o8(!1,!1,80,80))}}
K.jQ.prototype={
$0:function(){this.a.$1(F.om(80,80))}}
K.jR.prototype={
$0:function(){this.a.$1(F.ot(50,50))}}
K.jS.prototype={
$0:function(){this.a.$1(F.ow(50,50))}}
K.jT.prototype={
$0:function(){this.a.$1(F.kB(50,50))}}
K.jU.prototype={
$0:function(){this.a.$1(F.kB(100,100))}}
K.jV.prototype={
$0:function(){this.a.$1(F.kB(150,150))}}
K.jH.prototype={
$1:function(a){this.a.c=a
this.b.$0()}}
K.jI.prototype={
$0:function(){this.a.$1(0.1)}}
K.jJ.prototype={
$0:function(){this.a.$1(0.2)}}
K.jK.prototype={
$0:function(){this.a.$1(0.4)}}
K.jL.prototype={
$0:function(){this.a.$1(0.6)}}
K.jM.prototype={
$0:function(){this.a.$1(0.8)}}
K.jN.prototype={
$0:function(){this.a.$1(1)}};(function aliases(){var u=J.a.prototype
u.dQ=u.i
u=J.cP.prototype
u.dR=u.i
u=K.cL.prototype
u.dP=u.aJ
u.cm=u.i
u=O.cV.prototype
u.cn=u.ao
u=O.aq.prototype
u.co=u.ao})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"nx","mq",19)
t(P,"o1","n7",7)
t(P,"o2","n8",7)
t(P,"o3","n9",7)
s(P,"lC","o_",9)
var m
r(m=E.aG.prototype,"gdt",0,0,null,["$1","$0"],["du","hl"],0,0)
r(m,"gdv",0,0,null,["$1","$0"],["dw","hm"],0,0)
r(m,"gdr",0,0,null,["$1","$0"],["ds","hk"],0,0)
r(m,"gdn",0,0,null,["$1","$0"],["dq","hh"],0,0)
q(m,"ghf","hg",4)
q(m,"ghi","hj",4)
r(m=E.dg.prototype,"gcq",0,0,null,["$1","$0"],["cs","cr"],0,0)
p(m,"ghA","dD",9)
o(m=X.dq.prototype,"geM","eN",5)
o(m,"gey","ez",5)
o(m,"geG","eH",2)
o(m,"geQ","eR",10)
o(m,"geO","eP",10)
o(m,"geU","eV",2)
o(m,"geY","eZ",2)
o(m,"geK","eL",2)
o(m,"geW","eX",2)
o(m,"geI","eJ",2)
o(m,"gf_","f0",17)
o(m,"gf1","f2",5)
o(m,"gfe","ff",6)
o(m,"gfa","fb",6)
o(m,"gfc","fd",6)
r(D.bg.prototype,"gdY",0,0,null,["$1","$0"],["am","dZ"],0,0)
r(m=D.cR.prototype,"gcJ",0,0,null,["$1","$0"],["cK","eS"],0,0)
o(m,"gf4","f5",18)
q(m,"ger","es",11)
q(m,"gf8","f9",11)
n(V.G.prototype,"gj","c2",12)
n(V.y.prototype,"gj","c2",12)
r(m=U.bP.prototype,"gay",0,0,null,["$1","$0"],["O","a2"],0,0)
q(m,"gep","eq",13)
q(m,"gf6","f7",13)
r(m=U.dr.prototype,"gay",0,0,null,["$1","$0"],["O","a2"],0,0)
o(m,"gbu","bv",1)
o(m,"gbw","bx",1)
o(m,"gby","bz",1)
r(m=U.ds.prototype,"gay",0,0,null,["$1","$0"],["O","a2"],0,0)
o(m,"gbu","bv",1)
o(m,"gbw","bx",1)
o(m,"gby","bz",1)
o(m,"gej","ek",1)
o(m,"gel","em",1)
o(m,"gfB","fC",1)
o(m,"gfz","fA",1)
o(m,"gfv","fw",1)
o(U.dt.prototype,"gen","eo",1)
r(m=M.cH.prototype,"gaz",0,0,null,["$1","$0"],["aA","e_"],0,0)
q(m,"geC","eD",4)
q(m,"geE","eF",4)
r(m=O.cU.prototype,"geA",0,0,null,["$1","$0"],["aa","eB"],0,0)
r(m,"gfl",0,0,null,["$1","$0"],["cL","fm"],0,0)
q(m,"geu","ev",14)
q(m,"gew","ex",14)
r(X.d2.prototype,"gct",0,0,null,["$1","$0"],["aB","e2"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.kg,J.a,J.a0,P.dM,P.j,H.bT,P.fg,H.cJ,H.i8,H.eM,H.hW,P.bh,H.bM,H.e2,P.a2,H.fo,H.fq,H.fi,P.e9,P.bz,P.ci,P.dv,P.dd,P.hB,P.dh,P.je,P.iX,P.iS,P.dL,P.v,P.j6,P.fy,P.eJ,P.jd,P.jc,P.b8,P.a8,P.a6,P.aY,P.h4,P.db,P.dE,P.fb,P.r,P.P,P.b2,P.m,P.R,P.bA,P.ia,P.iY,W.eQ,W.K,W.cK,P.j_,P.ee,P.iT,P.bu,K.eu,K.cL,K.cT,K.hk,L.dc,L.di,L.dj,L.hR,O.aV,O.bV,E.eF,E.aG,E.be,E.bp,E.dD,E.hc,E.dg,Z.du,Z.iB,Z.cA,Z.bl,Z.aP,D.eI,D.bi,D.X,X.cB,X.cQ,X.fl,X.fv,X.ac,X.fV,X.hS,X.dq,D.eC,D.bg,D.a1,D.h7,D.hv,V.W,V.aW,V.f2,V.cW,V.aJ,V.ad,V.Q,V.bq,V.d6,V.G,V.y,U.dr,U.ds,U.dt,M.cH,A.cx,A.ex,A.Z,A.cy,A.cE,A.d3,A.da,A.fD,A.c5,A.c6,A.c8,A.c9,A.dm,A.i3,F.bj,F.f5,F.bS,F.fn,F.c0,F.hl,F.hm,F.hn,F.ho,F.by,F.ip,F.iq,F.it,F.iv,F.iw,F.ix,O.de,O.cV,O.fE,T.hM,T.hO,X.k7,X.hD,X.d2,V.ha,V.hp,V.hI])
s(J.a,[J.fh,J.cO,J.cP,J.aZ,J.bR,J.b_,H.bY,H.b1,W.f,W.et,W.bd,W.ao,W.E,W.dx,W.ab,W.eU,W.eV,W.dz,W.cG,W.dB,W.eX,W.i,W.dF,W.ap,W.fd,W.dH,W.aH,W.fu,W.fP,W.dN,W.dO,W.as,W.dP,W.dS,W.au,W.dW,W.dY,W.ax,W.dZ,W.ay,W.e3,W.ah,W.e7,W.hQ,W.aA,W.ea,W.hU,W.ih,W.eg,W.ei,W.ek,W.em,W.eo,P.aI,P.dJ,P.aM,P.dU,P.h9,P.e4,P.aO,P.ec,P.ey,P.dw,P.d7,P.e0])
s(J.cP,[J.h5,J.bx,J.b0])
t(J.kf,J.aZ)
s(J.bR,[J.cN,J.cM])
t(P.fs,P.dM)
s(P.fs,[H.dn,W.iJ,W.iI,P.f7])
t(H.N,H.dn)
s(P.j,[H.q,H.bU,H.iC,P.ff])
t(H.f_,H.bU)
s(P.fg,[H.fz,H.iD])
t(H.eN,H.eM)
s(P.bh,[H.h1,H.fk,H.i7,H.eH,H.hi,P.d1,P.am,P.i9,P.i5,P.hx,P.eL,P.eT])
s(H.bM,[H.k1,H.hE,H.fj,H.jy,H.jz,H.jA,P.iF,P.iE,P.iG,P.iH,P.j5,P.j4,P.jn,P.iV,P.iW,P.fr,P.fx,P.eY,P.eZ,P.ig,P.ib,P.id,P.ie,P.j7,P.j8,P.ja,P.j9,P.ji,P.jh,P.jj,P.jk,W.fR,W.fT,W.hh,W.hA,W.iN,P.j0,P.j1,P.jo,P.f8,P.f9,P.eA,E.hd,E.he,E.hf,E.hP,D.f3,D.f4,F.jf,F.jp,F.jr,F.jC,F.jY,F.jZ,F.k0,F.jq,F.jv,F.jw,F.iz,F.iy,F.ir,F.is,O.fH,O.fI,O.fJ,O.fK,O.fL,O.fM,O.fN,O.fO,T.hN,V.jX,V.hb,V.hr,V.hq,V.hK,V.hJ,K.jE,K.jD,K.jF,K.jG,K.jO,K.jP,K.jQ,K.jR,K.jS,K.jT,K.jU,K.jV,K.jH,K.jI,K.jJ,K.jK,K.jL,K.jM,K.jN])
s(H.hE,[H.hy,H.bK])
t(P.fw,P.a2)
t(H.F,P.fw)
t(H.fp,H.q)
t(H.cY,H.b1)
s(H.cY,[H.cc,H.ce])
t(H.cd,H.cc)
t(H.bZ,H.cd)
t(H.cf,H.ce)
t(H.cZ,H.cf)
s(H.cZ,[H.fW,H.fX,H.fY,H.fZ,H.h_,H.d_,H.c_])
t(P.j3,P.ff)
t(P.iU,P.je)
t(P.iR,P.iX)
t(P.ef,P.fy)
t(P.dp,P.ef)
s(P.eJ,[P.eD,P.f0])
t(P.eO,P.hB)
s(P.eO,[P.eE,P.ik,P.ij])
t(P.ii,P.f0)
s(P.a6,[P.I,P.u])
s(P.am,[P.bs,P.fe])
t(P.iL,P.bA)
s(W.f,[W.A,W.f6,W.bW,W.aw,W.cg,W.az,W.ai,W.cj,W.iA,W.cb,P.eB,P.bc])
s(W.A,[W.T,W.aU])
s(W.T,[W.l,P.k])
s(W.l,[W.ev,W.ew,W.bf,W.fa,W.bk,W.hj])
t(W.eP,W.ao)
t(W.bN,W.dx)
s(W.ab,[W.eR,W.eS])
t(W.dA,W.dz)
t(W.cF,W.dA)
t(W.dC,W.dB)
t(W.eW,W.dC)
t(W.ag,W.bd)
t(W.dG,W.dF)
t(W.bO,W.dG)
t(W.dI,W.dH)
t(W.bQ,W.dI)
t(W.b4,W.i)
s(W.b4,[W.bo,W.at,W.bt])
t(W.fQ,W.dN)
t(W.fS,W.dO)
t(W.dQ,W.dP)
t(W.fU,W.dQ)
t(W.dT,W.dS)
t(W.d0,W.dT)
t(W.dX,W.dW)
t(W.h6,W.dX)
t(W.hg,W.dY)
t(W.ch,W.cg)
t(W.ht,W.ch)
t(W.e_,W.dZ)
t(W.hu,W.e_)
t(W.hz,W.e3)
t(W.e8,W.e7)
t(W.hF,W.e8)
t(W.ck,W.cj)
t(W.hG,W.ck)
t(W.eb,W.ea)
t(W.hT,W.eb)
t(W.b6,W.at)
t(W.eh,W.eg)
t(W.iK,W.eh)
t(W.dy,W.cG)
t(W.ej,W.ei)
t(W.iO,W.ej)
t(W.el,W.ek)
t(W.dR,W.el)
t(W.en,W.em)
t(W.iZ,W.en)
t(W.ep,W.eo)
t(W.j2,W.ep)
t(W.iM,P.dd)
t(P.e6,P.j_)
t(P.a3,P.iT)
t(P.dK,P.dJ)
t(P.fm,P.dK)
t(P.dV,P.dU)
t(P.h2,P.dV)
t(P.e5,P.e4)
t(P.hC,P.e5)
t(P.ed,P.ec)
t(P.hV,P.ed)
t(P.ez,P.dw)
t(P.h3,P.bc)
t(P.e1,P.e0)
t(P.hw,P.e1)
s(K.cL,[K.aL,L.dl])
s(E.eF,[Z.cz,A.d8,T.df])
s(D.X,[D.bm,D.bn,D.B,X.h8])
s(X.h8,[X.cS,X.aK,X.bX,X.dk])
s(O.aV,[D.cR,U.bP])
s(D.eI,[U.eK,U.a9])
t(U.cC,U.a9)
t(A.fA,A.d8)
s(A.dm,[A.b5,A.i0,A.i1,A.i2,A.hZ,A.S,A.i_,A.D,A.c4,A.i4,A.c7,A.aa,A.bv,A.bw])
t(F.hs,F.f5)
t(F.hY,F.fn)
t(F.iu,F.iv)
t(F.h0,F.iw)
t(O.cU,O.de)
s(O.cV,[O.fB,O.fC,O.aq])
s(O.aq,[O.fF,O.fG])
t(T.hH,T.df)
t(T.hL,T.hH)
t(X.fc,X.hD)
u(H.dn,H.i8)
u(H.cc,P.v)
u(H.cd,H.cJ)
u(H.ce,P.v)
u(H.cf,H.cJ)
u(P.dM,P.v)
u(P.ef,P.j6)
u(W.dx,W.eQ)
u(W.dz,P.v)
u(W.dA,W.K)
u(W.dB,P.v)
u(W.dC,W.K)
u(W.dF,P.v)
u(W.dG,W.K)
u(W.dH,P.v)
u(W.dI,W.K)
u(W.dN,P.a2)
u(W.dO,P.a2)
u(W.dP,P.v)
u(W.dQ,W.K)
u(W.dS,P.v)
u(W.dT,W.K)
u(W.dW,P.v)
u(W.dX,W.K)
u(W.dY,P.a2)
u(W.cg,P.v)
u(W.ch,W.K)
u(W.dZ,P.v)
u(W.e_,W.K)
u(W.e3,P.a2)
u(W.e7,P.v)
u(W.e8,W.K)
u(W.cj,P.v)
u(W.ck,W.K)
u(W.ea,P.v)
u(W.eb,W.K)
u(W.eg,P.v)
u(W.eh,W.K)
u(W.ei,P.v)
u(W.ej,W.K)
u(W.ek,P.v)
u(W.el,W.K)
u(W.em,P.v)
u(W.en,W.K)
u(W.eo,P.v)
u(W.ep,W.K)
u(P.dJ,P.v)
u(P.dK,W.K)
u(P.dU,P.v)
u(P.dV,W.K)
u(P.e4,P.v)
u(P.e5,W.K)
u(P.ec,P.v)
u(P.ed,W.K)
u(P.dw,P.a2)
u(P.e0,P.v)
u(P.e1,W.K)})()
var v={mangledGlobalNames:{u:"int",I:"double",a6:"num",m:"String",b8:"bool",b2:"Null",r:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.at]},{func:1,ret:P.b2,args:[,,]},{func:1,ret:-1,args:[P.u,[P.j,E.aG]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[P.u,[P.j,D.a1]]},{func:1,ret:P.I},{func:1,ret:-1,args:[P.u,[P.j,U.a9]]},{func:1,ret:-1,args:[P.u,[P.j,V.aJ]]},{func:1,ret:P.b2,args:[,]},{func:1,ret:P.bu,args:[,,]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.b8,args:[[P.j,D.a1]]},{func:1,ret:P.u,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.i=W.bf.prototype
C.N=J.a.prototype
C.b=J.aZ.prototype
C.O=J.cM.prototype
C.c=J.cN.prototype
C.j=J.cO.prototype
C.d=J.bR.prototype
C.a=J.b_.prototype
C.P=J.b0.prototype
C.y=J.h5.prototype
C.Y=P.d7.prototype
C.o=J.bx.prototype
C.z=W.b6.prototype
C.A=W.cb.prototype
C.B=new E.be("Browser.chrome")
C.p=new E.be("Browser.firefox")
C.q=new E.be("Browser.edge")
C.C=new E.be("Browser.other")
C.a_=new P.eE()
C.D=new P.eD()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.E=function() {
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
C.J=function(getTagFallback) {
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
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.I=function(hooks) {
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
C.H=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.K=new P.h4()
C.e=new P.ii()
C.L=new P.ik()
C.f=new P.iU()
C.n=new P.aY(0)
C.M=new P.aY(5e6)
C.u=H.d(u([127,2047,65535,1114111]),[P.u])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.u])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.u])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.u])
C.R=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.u])
C.S=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.h=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.u])
C.v=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.u])
C.T=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.u])
C.w=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.u])
C.Q=H.d(u([]),[P.m])
C.U=new H.eN(0,{},C.Q,[P.m,P.m])
C.V=new E.bp("OperatingSystem.windows")
C.x=new E.bp("OperatingSystem.mac")
C.W=new E.bp("OperatingSystem.linux")
C.X=new E.bp("OperatingSystem.other")
C.Z=new P.bz(null,2)})();(function staticFields(){$.an=0
$.bL=null
$.kN=null
$.lH=null
$.lB=null
$.lL=null
$.js=null
$.jB=null
$.kC=null
$.bD=null
$.cn=null
$.co=null
$.kw=!1
$.aj=C.f
$.a4=[]
$.f1=null
$.l_=null
$.l2=null
$.av=null
$.l9=null
$.li=null
$.ll=null
$.lk=null
$.il=null
$.im=null
$.io=null
$.lj=null
$.l1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oB","lR",function(){return H.lF("_$dart_dartClosure")})
u($,"oC","kG",function(){return H.lF("_$dart_js")})
u($,"oD","lS",function(){return H.aB(H.hX({
toString:function(){return"$receiver$"}}))})
u($,"oE","lT",function(){return H.aB(H.hX({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oF","lU",function(){return H.aB(H.hX(null))})
u($,"oG","lV",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oJ","lY",function(){return H.aB(H.hX(void 0))})
u($,"oK","lZ",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oI","lX",function(){return H.aB(H.le(null))})
u($,"oH","lW",function(){return H.aB(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oM","m0",function(){return H.aB(H.le(void 0))})
u($,"oL","m_",function(){return H.aB(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"p_","kJ",function(){return P.n6()})
u($,"oN","m1",function(){return P.n2()})
u($,"p0","m3",function(){return H.mB(H.bC(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.u])))})
u($,"p2","m4",function(){return P.mP("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"p3","m5",function(){return P.nv()})
u($,"oU","m2",function(){return Z.ae(0)})
u($,"oO","kH",function(){return Z.ae(511)})
u($,"oW","aF",function(){return Z.ae(1)})
u($,"oV","al",function(){return Z.ae(2)})
u($,"oQ","aE",function(){return Z.ae(4)})
u($,"oX","aR",function(){return Z.ae(8)})
u($,"oY","aS",function(){return Z.ae(16)})
u($,"oR","cs",function(){return Z.ae(32)})
u($,"oS","ct",function(){return Z.ae(64)})
u($,"oT","kI",function(){return Z.ae(96)})
u($,"oZ","bb",function(){return Z.ae(128)})
u($,"oP","aD",function(){return Z.ae(256)})
u($,"oA","lQ",function(){return new V.f2(1e-9)})
u($,"oz","C",function(){return $.lQ()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bY,DataView:H.b1,ArrayBufferView:H.b1,Float32Array:H.bZ,Float64Array:H.bZ,Int16Array:H.fW,Int32Array:H.fX,Int8Array:H.fY,Uint16Array:H.fZ,Uint32Array:H.h_,Uint8ClampedArray:H.d_,CanvasPixelArray:H.d_,Uint8Array:H.c_,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.et,HTMLAnchorElement:W.ev,HTMLAreaElement:W.ew,Blob:W.bd,HTMLCanvasElement:W.bf,CDATASection:W.aU,CharacterData:W.aU,Comment:W.aU,ProcessingInstruction:W.aU,Text:W.aU,CSSPerspective:W.eP,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.bN,MSStyleCSSProperties:W.bN,CSS2Properties:W.bN,CSSImageValue:W.ab,CSSKeywordValue:W.ab,CSSNumericValue:W.ab,CSSPositionValue:W.ab,CSSResourceValue:W.ab,CSSUnitValue:W.ab,CSSURLImageValue:W.ab,CSSStyleValue:W.ab,CSSMatrixComponent:W.ao,CSSRotation:W.ao,CSSScale:W.ao,CSSSkew:W.ao,CSSTranslation:W.ao,CSSTransformComponent:W.ao,CSSTransformValue:W.eR,CSSUnparsedValue:W.eS,DataTransferItemList:W.eU,DOMException:W.eV,ClientRectList:W.cF,DOMRectList:W.cF,DOMRectReadOnly:W.cG,DOMStringList:W.eW,DOMTokenList:W.eX,Element:W.T,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ag,FileList:W.bO,FileWriter:W.f6,HTMLFormElement:W.fa,Gamepad:W.ap,History:W.fd,HTMLCollection:W.bQ,HTMLFormControlsCollection:W.bQ,HTMLOptionsCollection:W.bQ,ImageData:W.aH,HTMLImageElement:W.bk,KeyboardEvent:W.bo,Location:W.fu,MediaList:W.fP,MessagePort:W.bW,MIDIInputMap:W.fQ,MIDIOutputMap:W.fS,MimeType:W.as,MimeTypeArray:W.fU,PointerEvent:W.at,MouseEvent:W.at,DragEvent:W.at,Document:W.A,DocumentFragment:W.A,HTMLDocument:W.A,ShadowRoot:W.A,XMLDocument:W.A,Attr:W.A,DocumentType:W.A,Node:W.A,NodeList:W.d0,RadioNodeList:W.d0,Plugin:W.au,PluginArray:W.h6,RTCStatsReport:W.hg,HTMLSelectElement:W.hj,SourceBuffer:W.aw,SourceBufferList:W.ht,SpeechGrammar:W.ax,SpeechGrammarList:W.hu,SpeechRecognitionResult:W.ay,Storage:W.hz,CSSStyleSheet:W.ah,StyleSheet:W.ah,TextTrack:W.az,TextTrackCue:W.ai,VTTCue:W.ai,TextTrackCueList:W.hF,TextTrackList:W.hG,TimeRanges:W.hQ,Touch:W.aA,TouchEvent:W.bt,TouchList:W.hT,TrackDefaultList:W.hU,CompositionEvent:W.b4,FocusEvent:W.b4,TextEvent:W.b4,UIEvent:W.b4,URL:W.ih,VideoTrackList:W.iA,WheelEvent:W.b6,Window:W.cb,DOMWindow:W.cb,CSSRuleList:W.iK,ClientRect:W.dy,DOMRect:W.dy,GamepadList:W.iO,NamedNodeMap:W.dR,MozNamedAttrMap:W.dR,SpeechRecognitionResultList:W.iZ,StyleSheetList:W.j2,SVGLength:P.aI,SVGLengthList:P.fm,SVGNumber:P.aM,SVGNumberList:P.h2,SVGPointList:P.h9,SVGStringList:P.hC,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.aO,SVGTransformList:P.hV,AudioBuffer:P.ey,AudioParamMap:P.ez,AudioTrackList:P.eB,AudioContext:P.bc,webkitAudioContext:P.bc,BaseAudioContext:P.bc,OfflineAudioContext:P.h3,WebGL2RenderingContext:P.d7,SQLResultSetRowList:P.hw})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.bZ.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
W.cg.$nativeSuperclassTag="EventTarget"
W.ch.$nativeSuperclassTag="EventTarget"
W.cj.$nativeSuperclassTag="EventTarget"
W.ck.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.lJ,[])
else K.lJ([])})})()
//# sourceMappingURL=test.dart.js.map
