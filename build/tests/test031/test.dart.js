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
a[c]=function(){a[c]=function(){H.mO(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jz(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jl:function jl(){},
lg:function(a,b,c,d){if(!!a.$ip)return new H.eV(a,b,[c,d])
return new H.bV(a,b,[c,d])},
jR:function(){return new P.ht("No element")},
lA:function(a,b){var u=J.bj(a)
if(typeof u!=="number")return u.L()
H.d8(a,0,u-1,b)},
d8:function(a,b,c,d){if(c-b<=32)H.lz(a,b,c,d)
else H.ly(a,b,c,d)},
lz:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bh(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a8()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
ly:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a4(a4+a5,2),f=g-j,e=g+j,d=J.bh(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a8()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a8()
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
if(typeof p!=="number")return p.ab()
if(p<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a8()
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
if(typeof l!=="number")return l.ab()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a8()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a8()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.ab()
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
H.d8(a3,a4,t-2,a6)
H.d8(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.z(a6.$2(d.h(a3,t),b),0);)++t
for(;J.z(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.ab()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.d8(a3,t,s,a6)}else H.d8(a3,t,s,a6)},
N:function N(a){this.a=a},
p:function p(){},
bT:function bT(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bV:function bV(a,b,c){this.a=a
this.b=b
this.$ti=c},
eV:function eV(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b){this.a=null
this.b=a
this.c=b},
im:function im(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b){this.a=a
this.b=b},
cI:function cI(){},
i0:function i0(){},
dm:function dm(){},
cq:function(a){var u,t=H.mQ(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mB:function(a){return v.types[a]},
mG:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$ix},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a7(a)
if(typeof u!=="string")throw H.c(H.aQ(a))
return u},
c1:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c2:function(a){return H.lj(a)+H.ko(H.co(a),0,null)},
lj:function(a){var u,t,s,r,q,p,o,n=J.X(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.K||!!n.$ic9){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cq(t.length>1&&C.d.bo(t,0)===36?C.d.aC(t,1):t)},
k4:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lt:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aQ(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.bb(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aQ(s))}return H.k4(r)},
ls:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aQ(s))
if(s<0)throw H.c(H.aQ(s))
if(s>65535)return H.lt(a)}return H.k4(a)},
lr:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.bb(u,10))>>>0,56320|u&1023)}throw H.c(P.as(a,0,1114111,null,null))},
bv:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lq:function(a){var u=H.bv(a).getFullYear()+0
return u},
lo:function(a){var u=H.bv(a).getMonth()+1
return u},
lk:function(a){var u=H.bv(a).getDate()+0
return u},
ll:function(a){var u=H.bv(a).getHours()+0
return u},
ln:function(a){var u=H.bv(a).getMinutes()+0
return u},
lp:function(a){var u=H.bv(a).getSeconds()+0
return u},
lm:function(a){var u=H.bv(a).getMilliseconds()+0
return u},
u:function(a){throw H.c(H.aQ(a))},
d:function(a,b){if(a==null)J.bj(a)
throw H.c(H.bE(a,b))},
bE:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ak(!0,b,s,null)
u=J.bj(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.I(b,a,s,null,u)
return P.d3(b,s)},
mv:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bw(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bw(a,c,!0,b,"end",u)
return new P.ak(!0,b,"end",null)},
aQ:function(a){return new P.ak(!0,a,null,null)},
mq:function(a){if(typeof a!=="number")throw H.c(H.aQ(a))
return a},
c:function(a){var u
if(a==null)a=new P.d0()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kE})
u.name=""}else u.toString=H.kE
return u},
kE:function(){return J.a7(this.dartException)},
o:function(a){throw H.c(a)},
n:function(a){throw H.c(P.bL(a))},
av:function(a){var u,t,s,r,q,p
a=H.kA(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hQ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kc:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k_:function(a,b){return new H.fY(a,b==null?null:b.method)},
jm:function(a,b){var u=b==null,t=u?null:b.method
return new H.fh(a,t,u?null:b.receiver)},
em:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.bb(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jm(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k_(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kH()
q=$.kI()
p=$.kJ()
o=$.kK()
n=$.kN()
m=$.kO()
l=$.kM()
$.kL()
k=$.kQ()
j=$.kP()
i=r.ae(u)
if(i!=null)return f.$1(H.jm(u,i))
else{i=q.ae(u)
if(i!=null){i.method="call"
return f.$1(H.jm(u,i))}else{i=p.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=n.ae(u)
if(i==null){i=m.ae(u)
if(i==null){i=l.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=k.ae(u)
if(i==null){i=j.ae(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k_(u,i))}}return f.$1(new H.i_(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.da()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ak(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.da()
return a},
jC:function(a){var u
if(a==null)return new H.e_(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e_(a)},
mz:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
mF:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.m("Unsupported number of arguments for wrapped closure"))},
bD:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mF)
a.$identity=u
return u},
l4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hu().constructor.prototype):Object.create(new H.bI(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.al
if(typeof t!=="number")return t.B()
$.al=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jM(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l0(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jM(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l0:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mB,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jL:H.j9
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
l1:function(a,b,c,d){var u=H.j9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jM:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l3(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l1(t,!r,u,b)
if(t===0){r=$.al
if(typeof r!=="number")return r.B()
$.al=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bJ
return new Function(r+H.f(q==null?$.bJ=H.ez("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.al
if(typeof r!=="number")return r.B()
$.al=r+1
o+=r
r="return function("+o+"){return this."
q=$.bJ
return new Function(r+H.f(q==null?$.bJ=H.ez("self"):q)+"."+H.f(u)+"("+o+");}")()},
l2:function(a,b,c,d){var u=H.j9,t=H.jL
switch(b?-1:a){case 0:throw H.c(H.lw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l3:function(a,b){var u,t,s,r,q,p,o,n=$.bJ
if(n==null)n=$.bJ=H.ez("self")
u=$.jK
if(u==null)u=$.jK=H.ez("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l2(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.al
if(typeof u!=="number")return u.B()
$.al=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.al
if(typeof u!=="number")return u.B()
$.al=u+1
return new Function(n+u+"}")()},
jz:function(a,b,c,d,e,f,g){return H.l4(a,b,c,d,!!e,!!f,g)},
j9:function(a){return a.a},
jL:function(a){return a.c},
ez:function(a){var u,t,s,r=new H.bI("self","target","receiver","name"),q=J.jj(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mK:function(a,b){throw H.c(H.l_(a,H.cq(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.mK(a,b)},
mx:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
l_:function(a,b){return new H.eA("CastError: "+P.jg(a)+": type '"+H.f(H.mm(a))+"' is not a subtype of type '"+b+"'")},
mm:function(a){var u,t=J.X(a)
if(!!t.$ibK){u=H.mx(t)
if(u!=null)return H.mL(u)
return"Closure"}return H.c2(a)},
mO:function(a){throw H.c(new P.eM(a))},
lw:function(a){return new H.hd(a)},
ku:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
co:function(a){if(a==null)return
return a.$ti},
nm:function(a,b,c){return H.j3(a["$a"+H.f(c)],H.co(b))},
mA:function(a,b,c,d){var u=H.j3(a["$a"+H.f(c)],H.co(b))
return u==null?null:u[d]},
kv:function(a,b,c){var u=H.j3(a["$a"+H.f(b)],H.co(a))
return u==null?null:u[c]},
aS:function(a,b){var u=H.co(a)
return u==null?null:u[b]},
mL:function(a){return H.bf(a,null)},
bf:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cq(a[0].name)+H.ko(a,1,b)
if(typeof a=="function")return H.cq(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.f(b[t])}if('func' in a)return H.lS(a,b)
if('futureOr' in a)return"FutureOr<"+H.bf("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lS:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.t])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.d.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a2)p+=" extends "+H.bf(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bf(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bf(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bf(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.my(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bf(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ko:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aM("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bf(p,c)}return"<"+u.i(0)+">"},
j3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nk:function(a,b,c){return a.apply(b,H.j3(J.X(b)["$a"+H.f(c)],H.co(b)))},
nl:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mH:function(a){var u,t,s,r,q=$.kw.$1(a),p=$.iW[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j0[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kr.$2(a,q)
if(q!=null){p=$.iW[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j0[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j1(u)
$.iW[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j0[q]=u
return u}if(s==="-"){r=H.j1(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ky(a,u)
if(s==="*")throw H.c(P.kd(q))
if(v.leafTags[q]===true){r=H.j1(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ky(a,u)},
ky:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jE(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j1:function(a){return J.jE(a,!1,null,!!a.$ix)},
mI:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j1(u)
else return J.jE(u,c,null,null)},
mD:function(){if(!0===$.jD)return
$.jD=!0
H.mE()},
mE:function(){var u,t,s,r,q,p,o,n
$.iW=Object.create(null)
$.j0=Object.create(null)
H.mC()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kz.$1(q)
if(p!=null){o=H.mI(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mC:function(){var u,t,s,r,q,p,o=C.z()
o=H.bC(C.A,H.bC(C.B,H.bC(C.p,H.bC(C.p,H.bC(C.C,H.bC(C.D,H.bC(C.E(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kw=new H.iY(r)
$.kr=new H.iZ(q)
$.kz=new H.j_(p)},
bC:function(a,b){return a(b)||b},
lb:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.f7("Illegal RegExp pattern ("+String(p)+")",a))},
kB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mw:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kA:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kC:function(a,b,c){var u=H.mN(a,b,c)
return u},
mN:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kA(b),'g'),H.mw(c))},
hQ:function hQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fY:function fY(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
i_:function i_(a){this.a=a},
j5:function j5(a){this.a=a},
e_:function e_(a){this.a=a
this.b=null},
bK:function bK(){},
hA:function hA(){},
hu:function hu(){},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(a){this.a=a},
hd:function hd(a){this.a=a},
G:function G(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fg:function fg(a){this.a=a},
fl:function fl(a,b){this.a=a
this.b=b
this.c=null},
bt:function bt(a,b){this.a=a
this.$ti=b},
fm:function fm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
ff:function ff(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bA:function(a){return a},
aw:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bE(b,a))},
lR:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mv(a,b,c))
return b},
c_:function c_(){},
cW:function cW(){},
bZ:function bZ(){},
cX:function cX(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
cY:function cY(){},
fU:function fU(){},
cc:function cc(){},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
my:function(a){return J.jS(a?Object.keys(a):[],null)},
mQ:function(a){return v.mangledGlobalNames[a]},
mJ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iX:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jD==null){H.mD()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.kd("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jG()]
if(r!=null)return r
r=H.mH(a)
if(r!=null)return r
if(typeof a=="function")return C.M
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.jG(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
l9:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.j8(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.as(a,0,4294967295,"length",null))
return J.jS(new Array(a),b)},
jS:function(a,b){return J.jj(H.b(a,[b]))},
jj:function(a){a.fixed$length=Array
return a},
la:function(a,b){return J.cu(a,b)},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cM.prototype
return J.cL.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.cN.prototype
if(typeof a=="boolean")return J.fe.prototype
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a2)return a
return J.iX(a)},
bh:function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a2)return a
return J.iX(a)},
jA:function(a){if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a2)return a
return J.iX(a)},
kt:function(a){if(typeof a=="number")return J.bR.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.c9.prototype
return a},
jB:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a2)return a
return J.iX(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).n(a,b)},
jI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kt(a).t(a,b)},
ct:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mG(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bh(a).h(a,b)},
kV:function(a,b,c){return J.jB(a).fk(a,b,c)},
kW:function(a,b,c,d){return J.jB(a).fD(a,b,c,d)},
cu:function(a,b){return J.kt(a).aK(a,b)},
j6:function(a,b){return J.bh(a).O(a,b)},
j7:function(a,b){return J.jA(a).G(a,b)},
kX:function(a,b){return J.jA(a).K(a,b)},
bH:function(a){return J.X(a).gJ(a)},
bi:function(a){return J.jA(a).gP(a)},
bj:function(a){return J.bh(a).gj(a)},
kY:function(a,b){return J.jB(a).hk(a,b)},
a7:function(a){return J.X(a).i(a)},
a:function a(){},
fe:function fe(){},
cN:function cN(){},
cO:function cO(){},
h1:function h1(){},
c9:function c9(){},
b1:function b1(){},
b0:function b0(a){this.$ti=a},
jk:function jk(a){this.$ti=a},
Z:function Z(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bR:function bR(){},
cM:function cM(){},
cL:function cL(){},
br:function br(){}},P={
lG:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mn()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bD(new P.iq(s),1)).observe(u,{childList:true})
return new P.ip(s,u,t)}else if(self.setImmediate!=null)return P.mo()
return P.mp()},
lH:function(a){self.scheduleImmediate(H.bD(new P.ir(a),0))},
lI:function(a){self.setImmediate(H.bD(new P.is(a),0))},
lJ:function(a){P.js(C.j,a)},
js:function(a,b){var u=C.c.a4(a.a,1000)
return P.lO(u<0?0:u,b)},
kb:function(a,b){var u=C.c.a4(a.a,1000)
return P.lP(u<0?0:u,b)},
lO:function(a,b){var u=new P.e5()
u.dU(a,b)
return u},
lP:function(a,b){var u=new P.e5()
u.dV(a,b)
return u},
ni:function(a){return new P.bz(a,1)},
lK:function(){return C.R},
lL:function(a){return new P.bz(a,3)},
lV:function(a,b){return new P.iK(a,[b])},
mg:function(){var u,t
for(;u=$.bB,u!=null;){$.cn=null
t=u.b
$.bB=t
if(t==null)$.cm=null
u.a.$0()}},
ml:function(){$.jx=!0
try{P.mg()}finally{$.cn=null
$.jx=!1
if($.bB!=null)$.jH().$1(P.ks())}},
mj:function(a){var u=new P.ds(a)
if($.bB==null){$.bB=$.cm=u
if(!$.jx)$.jH().$1(P.ks())}else $.cm=$.cm.b=u},
mk:function(a){var u,t,s=$.bB
if(s==null){P.mj(a)
$.cn=$.cm
return}u=new P.ds(a)
t=$.cn
if(t==null){u.b=s
$.bB=$.cn=u}else{u.b=t.b
$.cn=t.b=u
if(u.b==null)$.cm=u}},
ka:function(a,b){var u=$.ag
if(u===C.e)return P.js(a,b)
return P.js(a,u.fH(b))},
lE:function(a,b){var u=$.ag
if(u===C.e)return P.kb(a,b)
return P.kb(a,u.cP(b,P.dg))},
kp:function(a,b,c,d,e){var u={}
u.a=d
P.mk(new P.iT(u,e))},
mh:function(a,b,c,d){var u,t=$.ag
if(t===c)return d.$0()
$.ag=c
u=t
try{t=d.$0()
return t}finally{$.ag=u}},
mi:function(a,b,c,d,e){var u,t=$.ag
if(t===c)return d.$1(e)
$.ag=c
u=t
try{t=d.$1(e)
return t}finally{$.ag=u}},
iq:function iq(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
e5:function e5(){this.c=0},
iM:function iM(a,b){this.a=a
this.b=b},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b){this.a=a
this.b=b},
ci:function ci(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iK:function iK(a,b){this.a=a
this.$ti=b},
ds:function ds(a){this.a=a
this.b=null},
dc:function dc(){},
hx:function hx(){},
dg:function dg(){},
iO:function iO(){},
iT:function iT(a,b){this.a=a
this.b=b},
iE:function iE(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
ld:function(a,b){return new H.G([a,b])},
le:function(a){return H.mz(a,new H.G([null,null]))},
jT:function(a){return new P.iB([a])},
jw:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lN:function(a,b){var u=new P.dI(a,b)
u.c=a.e
return u},
l8:function(a,b,c){var u,t
if(P.jy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.t])
$.a3.push(a)
try{P.lU(a,u)}finally{if(0>=$.a3.length)return H.d($.a3,-1)
$.a3.pop()}t=P.k6(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
ji:function(a,b,c){var u,t
if(P.jy(a))return b+"..."+c
u=new P.aM(b)
$.a3.push(a)
try{t=u
t.a=P.k6(t.a,a,", ")}finally{if(0>=$.a3.length)return H.d($.a3,-1)
$.a3.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jy:function(a){var u,t
for(u=$.a3.length,t=0;t<u;++t)if(a===$.a3[t])return!0
return!1},
lU:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.f(n.gI(n))
b.push(u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.w()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.w();r=q,q=p){p=n.gI(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jU:function(a){var u,t={}
if(P.jy(a))return"{...}"
u=new P.aM("")
try{$.a3.push(a)
u.a+="{"
t.a=!0
J.kX(a,new P.fr(t,u))
u.a+="}"}finally{if(0>=$.a3.length)return H.d($.a3,-1)
$.a3.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iB:function iB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iC:function iC(a){this.a=a
this.c=this.b=null},
dI:function dI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fc:function fc(){},
fn:function fn(){},
q:function q(){},
fq:function fq(){},
fr:function fr(a,b){this.a=a
this.b=b},
a1:function a1(){},
iH:function iH(){},
dJ:function dJ(){},
eC:function eC(){},
eH:function eH(){},
eW:function eW(){},
i3:function i3(){},
i4:function i4(){},
iN:function iN(a){this.b=0
this.c=a},
l7:function(a){if(a instanceof H.bK)return a.i(0)
return"Instance of '"+H.f(H.c2(a))+"'"},
lf:function(a,b,c){var u,t,s=J.l9(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jn:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bi(a);u.w();)t.push(u.gI(u))
if(b)return t
return J.jj(t)},
jr:function(a){var u,t=a.length,s=P.jp(0,null,t)
if(typeof s!=="number")return s.ab()
u=s<t
return H.ls(u?C.a.dG(a,0,s):a)},
lu:function(a){return new H.ff(a,H.lb(a,!1,!0,!1,!1,!1))},
k6:function(a,b,c){var u=J.bi(b)
if(!u.w())return a
if(c.length===0){do a+=H.f(u.gI(u))
while(u.w())}else{a+=H.f(u.gI(u))
for(;u.w();)a=a+c+H.f(u.gI(u))}return a},
lQ:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.q){u=$.kU().b
u=u.test(b)}else u=!1
if(u)return b
t=C.G.fL(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lr(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l5:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cD:function(a){if(a>=10)return""+a
return"0"+a},
jO:function(a){return new P.aV(1000*a)},
jg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l7(a)},
kZ:function(a){return new P.ak(!1,null,null,a)},
j8:function(a,b,c){return new P.ak(!0,a,b,c)},
d3:function(a,b){return new P.bw(null,null,!0,a,b,"Value not in range")},
as:function(a,b,c,d,e){return new P.bw(b,c,!0,a,d,"Invalid value")},
jp:function(a,b,c){var u
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
u=a>c}else u=!0
if(u)throw H.c(P.as(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
u=b>c}else u=!0
if(u)throw H.c(P.as(b,a,c,"end",null))
return b}return c},
k5:function(a,b){if(typeof a!=="number")return a.ab()
if(a<0)throw H.c(P.as(a,0,null,b,null))},
I:function(a,b,c,d,e){var u=e==null?J.bj(b):e
return new P.fb(u,!0,a,c,"Index out of range")},
w:function(a){return new P.i1(a)},
kd:function(a){return new P.hZ(a)},
bL:function(a){return new P.eG(a)},
m:function(a){return new P.dB(a)},
jF:function(a){H.mJ(a)},
bg:function bg(){},
a9:function a9(a,b){this.a=a
this.b=b},
J:function J(){},
aV:function aV(a){this.a=a},
eT:function eT(){},
eU:function eU(){},
bp:function bp(){},
d0:function d0(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fb:function fb(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i1:function i1(a){this.a=a},
hZ:function hZ(a){this.a=a},
ht:function ht(a){this.a=a},
eG:function eG(a){this.a=a},
h0:function h0(){},
da:function da(){},
eM:function eM(a){this.a=a},
dB:function dB(a){this.a=a},
f7:function f7(a,b){this.a=a
this.b=b},
v:function v(){},
j:function j(){},
fd:function fd(){},
b3:function b3(){},
bU:function bU(){},
b5:function b5(){},
a6:function a6(){},
a2:function a2(){},
t:function t(){},
aM:function aM(a){this.a=a},
mt:function(a){var u,t=J.X(a)
if(!!t.$iaY){u=t.gcY(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ea(a.data,a.height,a.width)},
ms:function(a){if(a instanceof P.ea)return{data:a.a,height:a.b,width:a.c}
return a},
aR:function(a){var u,t,s,r,q
if(a==null)return
u=P.ld(P.t,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
mr:function(a){var u={}
a.K(0,new P.iU(u))
return u},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a){this.a=a},
f3:function f3(a,b){this.a=a
this.b=b},
f4:function f4(){},
f5:function f5(){},
iA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iD:function iD(){},
a4:function a4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b2:function b2(){},
fj:function fj(){},
b6:function b6(){},
fZ:function fZ(){},
h5:function h5(){},
hy:function hy(){},
k:function k(){},
b9:function b9(){},
hP:function hP(){},
dG:function dG(){},
dH:function dH(){},
dR:function dR(){},
dS:function dS(){},
e1:function e1(){},
e2:function e2(){},
e8:function e8(){},
e9:function e9(){},
es:function es(){},
et:function et(){},
eu:function eu(a){this.a=a},
ev:function ev(){},
bk:function bk(){},
h_:function h_(){},
dt:function dt(){},
d5:function d5(){},
hs:function hs(){},
dY:function dY(){},
dZ:function dZ(){}},W={
jb:function(){var u=document.createElement("canvas")
return u},
je:function(a){return"wheel"},
iz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kn:function(a,b,c,d){var u=W.iz(W.iz(W.iz(W.iz(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
T:function(a,b,c,d){var u=W.kq(new W.ix(c),W.i)
if(u!=null&&!0)J.kW(a,b,u,!1)
return new W.iw(a,b,u,!1)},
kq:function(a,b){var u=$.ag
if(u===C.e)return a
return u.cP(a,b)},
l:function l(){},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
cx:function cx(){},
bm:function bm(){},
aU:function aU(){},
eI:function eI(){},
F:function F(){},
bM:function bM(){},
eJ:function eJ(){},
a8:function a8(){},
am:function am(){},
eK:function eK(){},
eL:function eL(){},
eN:function eN(){},
eQ:function eQ(){},
cF:function cF(){},
cG:function cG(){},
eR:function eR(){},
eS:function eS(){},
iu:function iu(a,b){this.a=a
this.b=b},
V:function V(){},
i:function i(){},
e:function e(){},
aB:function aB(){},
f1:function f1(){},
f2:function f2(){},
f6:function f6(){},
aC:function aC(){},
f9:function f9(){},
bP:function bP(){},
aY:function aY(){},
bQ:function bQ(){},
bs:function bs(){},
fo:function fo(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(a){this.a=a},
fL:function fL(){},
fM:function fM(a){this.a=a},
aE:function aE(){},
fN:function fN(){},
aq:function aq(){},
it:function it(a){this.a=a},
D:function D(){},
cZ:function cZ(){},
aG:function aG(){},
h2:function h2(){},
hb:function hb(){},
hc:function hc(a){this.a=a},
he:function he(){},
aJ:function aJ(){},
hp:function hp(){},
aK:function aK(){},
hq:function hq(){},
aL:function aL(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
at:function at(){},
aN:function aN(){},
au:function au(){},
hB:function hB(){},
hC:function hC(){},
hK:function hK(){},
aO:function aO(){},
bx:function bx(){},
hN:function hN(){},
hO:function hO(){},
ba:function ba(){},
i2:function i2(){},
il:function il(){},
be:function be(){},
cb:function cb(){},
iv:function iv(){},
dv:function dv(){},
iy:function iy(){},
dO:function dO(){},
iI:function iI(){},
iJ:function iJ(){},
iw:function iw(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ix:function ix(a){this.a=a},
H:function H(){},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
du:function du(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dP:function dP(){},
dQ:function dQ(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
cg:function cg(){},
ch:function ch(){},
dW:function dW(){},
dX:function dX(){},
e0:function e0(){},
e3:function e3(){},
e4:function e4(){},
cj:function cj(){},
ck:function ck(){},
e6:function e6(){},
e7:function e7(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){}},K={
W:function(a){var u=new K.hf()
u.dN(a)
return u},
eo:function eo(){},
cK:function cK(){},
cT:function cT(){},
aF:function aF(){this.a=null},
hf:function hf(){this.a=null}},L={db:function db(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},di:function di(a){this.b=a
this.c=null},hL:function hL(){var _=this
_.d=_.c=_.b=_.a=null},dk:function dk(a){this.b=a
this.a=this.c=null}},O={
eD:function(a){var u=new O.az([a])
u.b7(a)
return u},
az:function az(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bX:function bX(){this.b=this.a=null},
k8:function(a,b,c){var u,t,s,r=new O.b8(),q=r.a
r.a=c
c.gm().l(0,r.gaa())
u=new D.r("texture",q,r.a)
u.b=!0
r.F(u)
t=V.ap()
if(!J.z(r.b,t)){q=r.b
r.b=t
u=new D.r("colorMatrix",q,t)
u.b=!0
r.F(u)}s=V.h6()
if(!J.z(r.c,s)){q=r.c
r.c=s
u=new D.r("source",q,s)
u.b=!0
r.F(u)}if(!J.z(r.d,a)){q=r.d
r.d=a
u=new D.r("destination",q,a)
u.b=!0
r.F(u)}if(r.e!==b){r.e=b
u=new D.r("flip",!b,b)
u.b=!0
r.F(u)}r.f=null
return r},
eO:function eO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(){},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(){},
ft:function ft(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cV:function cV(){},
fu:function fu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
an:function an(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fw:function fw(){var _=this
_.e=_.d=_.c=_.b=null},
fx:function fx(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fy:function fy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d_:function d_(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){},
de:function de(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
b8:function b8(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
jf:function(){var u,t=new E.aA()
t.a=""
t.b=!0
u=O.eD(E.aA)
t.y=u
u.aB(t.gh2(),t.gh5())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sb6(0,null)
t.sb0(null)
return t},
kl:function(){if(J.j6(window.navigator.vendor,"Google"))return C.x
if(J.j6(window.navigator.userAgent,"Firefox"))return C.m
var u=window.navigator.appVersion
if(J.bh(u).O(u,"Trident")||C.d.O(u,"Edge"))return C.n
if(J.j6(window.navigator.appName,"Microsoft"))return C.n
return C.y},
km:function(){var u=window.navigator.appVersion
if(J.bh(u).O(u,"Win"))return C.O
if(C.d.O(u,"Mac"))return C.r
if(C.d.O(u,"Linux"))return C.P
return C.Q},
lv:function(a,b){var u=new E.h7(a)
u.dM(a,b)
return u},
lD:function(a,b,c,d,e){var u,t,s=J.X(a)
if(!!s.$ibm)return E.k9(a,!0,!0,!0,!1)
u=W.jb()
t=u.style
t.width="100%"
t.height="100%"
s.gcU(a).l(0,u)
return E.k9(u,!0,!0,!0,!1)},
k9:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.df(),o=C.f.c7(a,"webgl2",P.le(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.o(P.m("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.lv(o,a)
u=new T.hH(o)
o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dn(a)
t=new X.fi()
t.c=new X.ac(!1,!1,!1)
t.d=P.jT(P.v)
u.b=t
t=new X.fO(u)
t.f=0
t.r=V.aH()
t.x=V.aH()
t.ch=t.Q=1
u.c=t
t=new X.fp(u)
t.r=0
t.x=V.aH()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hM(u)
t.f=V.aH()
t.r=V.aH()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dc,P.a2]])
t=$.eX
u.Q=(t==null?$.eX=new E.dA(E.kl(),E.km()):t).a===C.m?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.T(r,"contextmenu",u.geA(),!1))
u.z.push(W.T(a,"focus",u.geK(),!1))
u.z.push(W.T(a,"blur",u.geu(),!1))
u.z.push(W.T(r,"keyup",u.geO(),!1))
u.z.push(W.T(r,"keydown",u.geM(),!1))
u.z.push(W.T(a,"mousedown",u.geS(),!1))
u.z.push(W.T(a,"mouseup",u.geW(),!1))
u.z.push(W.T(a,q,u.geU(),!1))
s=u.z
W.je(a)
W.je(a)
s.push(W.T(a,W.je(a),u.geY(),!1))
u.z.push(W.T(r,q,u.geC(),!1))
u.z.push(W.T(r,"mouseup",u.geE(),!1))
u.z.push(W.T(r,"pointerlockchange",u.gf_(),!1))
u.z.push(W.T(a,"touchstart",u.gff(),!1))
u.z.push(W.T(a,"touchend",u.gfb(),!1))
u.z.push(W.T(a,"touchmove",u.gfd(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.a9(Date.now(),!1)
p.db=0
p.cA()
return p},
ey:function ey(){},
aA:function aA(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bl:function bl(a){this.b=a},
bu:function bu(a){this.b=a},
dA:function dA(a,b){this.a=a
this.b=b},
h7:function h7(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
df:function df(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hJ:function hJ(a){this.a=a}},Z={
jv:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bA(c)),35044)
a.bindBuffer(b,null)
return new Z.dr(b,u)},
ab:function(a){return new Z.a5(a)},
dr:function dr(a,b){this.a=a
this.b=b},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bd:function bd(a){this.a=a},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
a5:function a5(a){this.a=a}},D={
B:function(){var u=new D.aW()
u.d=0
return u},
eB:function eB(){},
aW:function aW(){var _=this
_.d=_.c=_.b=_.a=null},
eZ:function eZ(a){this.a=a},
f_:function f_(a){this.a=a},
Q:function Q(){this.b=null},
aZ:function aZ(){this.b=null},
b_:function b_(){this.b=null},
r:function r(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ex:function ex(){},
bo:function bo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a0:function a0(){},
cQ:function cQ(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h3:function h3(){},
hr:function hr(){}},X={cz:function cz(a,b){this.a=a
this.b=b},cP:function cP(a,b){this.a=a
this.b=b},fi:function fi(){var _=this
_.d=_.c=_.b=_.a=null},cR:function cR(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fp:function fp(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},b4:function b4(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fO:function fO(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bY:function bY(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h4:function h4(){},dj:function dj(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hM:function hM(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dn:function dn(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jJ:function(a,b,c){var u,t,s,r=new X.ew()
r.d=r.c=r.b=r.a=512
r.e=!0
r.f=!1
r.x=r.r=1
r.ch=T.k7(null)
r.cx=new V.a_(0,0,0,1)
r.cy=!0
r.db=2000
r.dx=!0
r.dy=V.h6()
r.sah(0,512)
r.sad(0,512)
if(c==null)c=new V.a_(0,0,0,1)
if(!r.cx.n(0,c)){u=r.cx
r.cx=c
t=new D.r("color",u,c)
t.b=!0
r.a_(t)}if(r.cy!==b){r.cy=b
t=new D.r("clearColor",!b,b)
t.b=!0
r.a_(t)}t=r.db
if(!(Math.abs(t-2000)<$.A().a)){r.db=2000
t=new D.r("depth",t,2000)
t.b=!0
r.a_(t)}if(!r.f){r.f=!0
t=new D.r("autoResize",!1,!0)
t.b=!0
r.a_(t)}t=r.r
if(!(Math.abs(t-1)<$.A().a)){r.r=1
t=new D.r("autoResizeScalarX",t,1)
t.b=!0
r.a_(t)}t=r.x
if(!(Math.abs(t-1)<$.A().a)){r.x=1
t=new D.r("autoResizeScalarY",t,1)
t.b=!0
r.a_(t)}s=V.h6()
if(!J.z(r.dy,s)){u=r.dy
r.dy=s
t=new D.r("region",u,s)
t.b=!0
r.a_(t)}return r},
jh:function(a,b){var u=new X.f8(),t=new V.a_(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.h6()
u.r=t
return u},
k0:function(a){var u,t=new X.d1()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.sb0(a)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.A().a)){t.c=1.0471975511965976
u=new D.r("fov",u,1.0471975511965976)
u.b=!0
t.a_(u)}u=t.d
if(!(Math.abs(u-0.1)<$.A().a)){t.d=0.1
u=new D.r("near",u,0.1)
u.b=!0
t.a_(u)}u=t.e
if(!(Math.abs(u-2000)<$.A().a)){t.e=2000
u=new D.r("far",u,2000)
u.b=!0
t.a_(u)}return t},
ew:function ew(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ja:function ja(){},
f8:function f8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fa:function fa(){this.b=this.a=null},
d1:function d1(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(){}},V={
eE:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a_(u,t,s,1)},
mR:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dA(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.d.af("null",c)
return C.d.af(C.b.dt(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bF:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.t])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.E(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.d.af(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
cp:function(a){return C.b.hr(Math.pow(2,C.L.bS(Math.log(H.mq(a))/Math.log(2))))},
jo:function(){var u=$.jV
return u==null?$.jV=new V.bW(1,0,0,0,1,0,0,0,1):u},
ap:function(){var u=$.fH
return u==null?$.fH=V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jY:function(a,b,c){return V.aD(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
jX:function(a,b,c){return V.aD(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
jW:function(a,b,c){var u=c.v(0,Math.sqrt(c.C(c))),t=b.au(u),s=t.v(0,Math.sqrt(t.C(t))),r=u.au(s),q=new V.y(a.a,a.b,a.c),p=s.R(0).C(q),o=r.R(0).C(q),n=u.R(0).C(q)
return V.aD(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aH:function(){var u=$.k2
return u==null?$.k2=new V.Y(0,0):u},
k3:function(){var u=$.ar
return u==null?$.ar=new V.O(0,0,0):u},
h6:function(){var u=$.c4
return u==null?$.c4=V.c3(0,0,1,1):u},
c3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d4(a,b,c,d)},
ca:function(){var u=$.kj
return u==null?$.kj=new V.y(0,0,0):u},
lF:function(){var u=$.i5
return u==null?$.i5=new V.y(-1,0,0):u},
ju:function(){var u=$.i6
return u==null?$.i6=new V.y(0,1,0):u},
kk:function(){var u=$.i7
return u==null?$.i7=new V.y(0,0,1):u},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(a){this.a=a},
bW:function bW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ao:function ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Y:function Y(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K:function K(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
mM:function(a){P.lE(C.J,new V.j2(a))},
lx:function(a){var u=new V.hk()
u.dO(a,!0)
return u},
j2:function j2(a){this.a=a},
hk:function hk(){this.b=this.a=null},
hm:function hm(a){this.a=a},
hl:function hl(a){this.a=a}},U={
jN:function(){var u=new U.eF()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jc:function(a){var u=new U.cB()
u.a=a
return u},
jQ:function(){var u=new U.bO()
u.b7(U.aa)
u.aB(u.gdS(),u.gf3())
u.e=null
u.f=V.ap()
u.r=0
return u},
ke:function(a,b){var u,t,s,r=new U.dp(),q=U.jN()
q.sdw(0,!0)
q.sdg(6.283185307179586)
q.sdi(0)
q.sa9(0,0)
q.sdh(100)
q.sZ(0)
q.scX(0.5)
r.b=q
u=r.gb8()
q.gm().l(0,u)
q=U.jN()
q.sdw(0,!0)
q.sdg(6.283185307179586)
q.sdi(0)
q.sa9(0,0)
q.sdh(100)
q.sZ(0)
q.scX(0.5)
r.c=q
q.gm().l(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.ac(a,!1,!1)
s=r.d
r.d=t
q=new D.r("modifiers",s,t)
q.b=!0
r.S(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.r("invertX",q,!1)
q.b=!0
r.S(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.r("invertY",q,!1)
q.b=!0
r.S(q)}r.bE(b)
return r},
kf:function(a,b){var u,t,s=new U.dq()
s.c=0.01
s.e=s.d=0
u=new X.ac(a,!1,!1)
s.b=u
t=new D.r("modifiers",null,u)
t.b=!0
s.S(t)
s.bE(b)
return s},
eF:function eF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){this.b=this.a=null},
bO:function bO(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
dp:function dp(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dq:function dq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jd:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.cC()
k.a=!0
u=E.jf()
t=F.jq()
s=t.a
r=new V.y(-1,-1,1)
r=r.v(0,Math.sqrt(r.C(r)))
q=s.be(new V.aI(1,2,4,6),V.eE(255,0,0),new V.O(-1,-1,0),new V.Y(0,1),r,l)
r=t.a
s=new V.y(1,-1,1)
s=s.v(0,Math.sqrt(s.C(s)))
p=r.be(new V.aI(0,3,4,6),V.eE(0,0,255),new V.O(1,-1,0),new V.Y(1,1),s,l)
s=t.a
r=new V.y(1,1,1)
r=r.v(0,Math.sqrt(r.C(r)))
o=s.be(new V.aI(0,2,5,6),V.eE(0,128,0),new V.O(1,1,0),new V.Y(1,0),r,l)
r=t.a
s=V.aH()
n=new V.y(-1,1,1)
n=n.v(0,Math.sqrt(n.C(n)))
m=r.be(new V.aI(0,2,4,7),V.eE(255,255,0),new V.O(-1,1,0),s,n,l)
t.d.fE(H.b([q,p,o,m],[F.bc]))
t.aj()
u.sb6(0,t)
k.e=u
k.saV(l)
k.saz(0,l)
k.sap(l)
return k},
jP:function(){var u,t,s=new M.cH()
s.a=!0
u=O.eD(E.aA)
s.e=u
u.aB(s.gew(),s.gey())
s.y=s.x=s.r=s.f=null
t=X.jh(!0,null)
s.saV(null)
s.saz(0,t)
s.sap(null)
return s},
cA:function cA(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cC:function cC(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cH:function cH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ad:function ad(){}},A={
lh:function(a,b){var u=a.av,t=new A.fs(b,u)
t.aP(b,u)
t.dL(a,b)
return t},
li:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gag(a3)+a4.gag(a4)+a5.gag(a5)+a6.gag(a6)+a7.gag(a7)+a8.gag(a8)+a9.gag(a9)+b0.gag(b0)+b1.gag(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.n)(b2),++t)c+="_"+H.f(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.n)(b3),++t)c+="_"+H.f(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.n)(b4),++t)c+="_"+H.f(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.n)(b5),++t)c+="_"+H.f(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
for(q=b3.length,t=0;t<q;++t,r=!0)s+=b3[t].b
for(q=b4.length,t=0;t<q;++t,r=!0)s+=b4[t].b
for(p=b5.length,t=0;t<p;++t,r=!0)s+=b5[t].b
if(!a9.a)p=a9.c
else p=!0
if(!p)if(!b0.a){p=b0.c
o=p}else o=!0
else o=!0
n=u>0
if(!a4.a)u=a4.c
else u=!0
if(!u){if(!a5.a)u=a5.c
else u=!0
if(!u){if(!a6.a)u=a6.c
else u=!0
if(!u)if(!a7.a)u=a7.c
else u=!0
else u=!0
m=u}else m=!0}else m=!0
u=!a7.a
if(u)p=a7.c
else p=!0
l=p||n||q>0||o
if(!a5.a)q=a5.c
else q=!0
if(!q){if(!a6.a)q=a6.c
else q=!0
if(!q){if(u)u=a7.c
else u=!0
k=u}else k=!0}else k=!0
if(!k){if(!a8.a)u=a8.c
else u=!0
j=u||o}else j=!0
if(!a8.a)i=a8.c
else i=!0
h=a3.c||a4.c||a5.c||a6.c||a7.c||a8.c||a9.c||b0.c||b1.c
g=a2>0
f=j||i||l||!1
e=n&&k
b=b&&h
d=$.U()
if(j){u=$.ai()
d=new Z.a5(d.a|u.a)}if(i){u=$.ah()
d=new Z.a5(d.a|u.a)}if(h){u=$.aj()
d=new Z.a5(d.a|u.a)}if(g){u=$.aT()
d=new Z.a5(d.a|u.a)}return new A.fv(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,!1,h,g,!1,b,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
iR:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
iS:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.iR(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.el(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
m_:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iR(b,t,"emission")
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
lW:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iS(b,t,"ambient")
b.a+="\n"},
lY:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iS(b,t,"diffuse")
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
m0:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iS(b,t,"invDiffuse")
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
m6:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iS(b,t,"specular")
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
m2:function(a,b){var u,t,s
if(!a.k4)return
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
m4:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iR(b,t,"reflect")
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
m5:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iR(b,t,"refract")
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
lX:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.f(u)
s=A.el(t)
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
if(typeof u!=="number")return u.ai()
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
c.a=r+"\n"}r=[P.t]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.a.p(q," * ")+";\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 "+t+"Value(vec3 norm, "+s+" lit)\n"
c.a=u
c.a=u+"{\n"
q=H.b([],r)
u=a.b
if(!u.a)u=u.c
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
p=H.b([],r)
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)p.push("diffuse(norm, normDir)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)p.push("specular(norm, normDir)")
u=c.a+="      highLight = intensity*("+C.a.p(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.p(q," + ")+");\n"
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
lZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.el(t)
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
r=[P.t]
o=H.b([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
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
c.a+="      highLight = intensity*("+C.a.p(m," + ")+");\n"}else c.a+="   highLight = "+C.a.p(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.p(o," + ")+");\n"
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
m3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.el(t)
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
c.a=r+"\n"}r=[P.t]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.p(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.b([],r)
o=a.b
if(!o.a)o=o.c
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
k=H.b([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)k.push("diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.p(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.p(l," + ")+");\n"
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
m7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.el(t)
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
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
if(o){u=$.eX
if(u==null)u=$.eX=new E.dA(E.kl(),E.km())
r=c.a
if(u.b===C.r){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=u+"\n"}u=[P.t]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.p(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.b([],u)
r=a.b
if(!r.a)r=r.c
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
i=H.b([],u)
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)i.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.p(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.p(j," + ")+");\n"
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
m1:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.t])
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)t.push("ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)t.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.p(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
m8:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.aM("")
i.a="precision mediump float;\n"
i.a=k
u=a.k4
if(u){i.a=j
t=j}else t=k
if(a.r1){t+="varying vec3 binormalVec;\n"
i.a=t}if(a.r2){t+="varying vec2 txt2D;\n"
i.a=t}if(a.rx){t+="varying vec3 txtCube;\n"
i.a=t}if(a.k2){t+="varying vec3 objPos;\n"
i.a=t}t=i.a=(a.k3?i.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.y1
if(s){t+="uniform mat4 colorMat;\n"
i.a=t}if(a.go){t+="uniform mat4 viewMat;\n"
i.a=t}if(a.dy)t=i.a=t+"uniform mat4 invViewMat;\n"
i.a=t+"\n"
A.m_(a,i)
A.lW(a,i)
A.lY(a,i)
A.m0(a,i)
A.m6(a,i)
t=a.db
if(t){r=i.a+="// === Environmental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.m4(a,i)
A.m5(a,i)}A.m2(a,i)
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
r=a.k1
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lX(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lZ(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.m3(a,q[n],i)
for(q=a.cx,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.m7(a,q[n],i)
A.m1(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.t])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
m.push("lightAccum")
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aC(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aC(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aC(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aC(r,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)m.push("emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)m.push("reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.p(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
m9:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bg+"];\n"
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
mb:function(a,b){var u
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
ma:function(a,b){var u
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
md:function(a,b){var u,t
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
me:function(a,b){var u,t
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
mc:function(a,b){var u
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
mf:function(a,b){var u
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
jZ:function(a){var u,t,s,r,q,p
if(!a.a)u=a.c
else u=!0
t=a.c
s="Normal_"+a.gag(a)
r=$.U()
q=$.ai()
q=r.a|q.a
p=new Z.a5(q)
if(u)p=new Z.a5(q|$.ah().a)
return new A.fX(a,u,!1,t,s,t?new Z.a5(p.a|$.aj().a):p)},
el:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.d.aC(a,1)},
lC:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.I
t=(s||b===C.h?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.H)t+="      clrAccum += color;\n"
else if(b===C.i)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.h
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
lB:function(a,b,c){var u="TextureLayout_"+a+"_"+C.c.i(b.a),t=new A.hG(c,u)
t.aP(c,u)
t.dP(a,b,c)
return t},
jt:function(a,b,c,d,e){var u=new A.hT(a,c,e)
u.f=d
P.lf(d,0,P.v)
return u},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a,b){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fs:function fs(a,b){var _=this
_.d_=_.hD=_.bh=_.av=_.bg=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hL=_.hK=_.hJ=_.bR=_.bQ=_.bP=_.bO=_.bN=_.bM=_.bL=_.bK=_.dc=_.hI=_.da=_.d9=_.hH=_.d8=_.d7=_.d6=_.hG=_.d5=_.d4=_.d3=_.hF=_.d2=_.d1=_.hE=_.d0=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cw:function cw(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bg=b3
_.av=b4
_.bh=b5},
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
c7:function c7(a,b,c,d,e,f,g,h,i,j){var _=this
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
c8:function c8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fV:function fV(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fX:function fX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d6:function d6(){},
bn:function bn(a,b){this.a=a
this.b=b},
ho:function ho(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hG:function hG(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dl:function dl(){},
hX:function hX(a){this.a=a},
ae:function ae(a,b,c){this.a=a
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
hT:function hT(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
aP:function aP(a,b,c){this.a=a
this.c=b
this.d=c},
C:function C(a,b,c){this.a=a
this.c=b
this.d=c},
by:function by(a,b,c){this.a=a
this.c=b
this.d=c},
hY:function hY(a,b,c){this.a=a
this.c=b
this.d=c},
bb:function bb(a,b,c){this.a=a
this.c=b
this.d=c},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
af:function af(a,b,c){this.a=a
this.c=b
this.d=c},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iQ:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cl:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
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
j.d=i}m=F.iQ(i)
l=F.iQ(h)
k=F.kD(d,a0,new F.iP(j,F.iQ(g),F.iQ(f),l,m,c),b)
if(k!=null)a.bZ(k)},
mP:function(){return F.mu(15,30,0.5,1,new F.j4())},
mu:function(a,b,c,d,e){var u=F.kD(a,b,new F.iV(e,d,b,c),null)
if(u==null)return
u.aj()
u.h1(new F.ie(),new F.fW())
return u},
kD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.jq()
t=H.b([],[F.bc])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.i8(g,g,new V.a_(p,0,0,1),g,g,new V.Y(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.bI(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.i8(g,g,new V.a_(j,i,h,1),g,g,new V.Y(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bI(d))}}u.d.fF(a+1,b+1,t)
return u},
bN:function(a,b,c){var u=new F.aX(),t=a.a
if(t==null)H.o(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.o(P.m("May not create a face with vertices attached to different shapes."))
u.bC(a)
u.bD(b)
u.fp(c)
u.a.a.d.b.push(u)
u.a.a.a2()
return u},
lc:function(a,b){var u=new F.bS(),t=a.a
if(t==null)H.o(P.m("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.o(P.m("May not create a line with vertices attached to different shapes."))
u.bC(a)
u.bD(b)
u.a.a.c.b.push(u)
u.a.a.a2()
return u},
jq:function(){var u=new F.hg(),t=new F.i9(u)
t.b=!1
t.c=H.b([],[F.bc])
u.a=t
t=new F.hj(u)
t.b=H.b([],[F.c0])
u.b=t
t=new F.hi(u)
t.b=H.b([],[F.bS])
u.c=t
t=new F.hh(u)
t.b=H.b([],[F.aX])
u.d=t
u.e=null
return u},
i8:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bc(),r=new F.ii()
r.b=H.b([],[F.c0])
s.b=r
r=new F.id()
u=[F.bS]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.ia()
u=[F.aX]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kR()
s.e=0
r=$.U()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.ai().a)!==0?e:t
s.x=(u&$.ah().a)!==0?b:t
s.y=(u&$.ax().a)!==0?f:t
s.z=(u&$.aj().a)!==0?g:t
s.Q=(u&$.kS().a)!==0?c:t
s.ch=(u&$.bG().a)!==0?i:0
s.cx=(u&$.aT().a)!==0?a:t
return s},
iP:function iP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j4:function j4(){},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aX:function aX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f0:function f0(){},
hn:function hn(){},
bS:function bS(){this.b=this.a=null},
fk:function fk(){},
hS:function hS(){},
c0:function c0(){this.a=null},
hg:function hg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hh:function hh(a){this.a=a
this.b=null},
hi:function hi(a){this.a=a
this.b=null},
hj:function hj(a){this.a=a
this.b=null},
bc:function bc(){var _=this
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
fW:function fW(){},
ii:function ii(){this.b=null}},T={
k7:function(a){var u=new T.hE()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
b7:function b7(){},
hD:function hD(){},
hE:function hE(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hF:function hF(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hI:function hI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},S={
kx:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=V.lx("Test 031"),a7=W.jb()
a7.className="pageLargeCanvas"
a7.id=a4
a6.a.appendChild(a7)
u=[P.t]
a6.cL(H.b(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."],u))
a6.cL(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.o(P.m("Failed to find an element with the identifier, testCanvas."))
s=E.lD(t,!0,!0,!0,!1)
r=E.jf()
q=F.jq()
F.cl(q,a5,a5,1,1,1,0,0,1)
F.cl(q,a5,a5,1,1,0,1,0,3)
F.cl(q,a5,a5,1,1,0,0,1,2)
F.cl(q,a5,a5,1,1,-1,0,0,0)
F.cl(q,a5,a5,1,1,0,-1,0,0)
F.cl(q,a5,a5,1,1,0,0,-1,3)
q.aj()
r.sb6(0,q)
a6=U.jQ()
a6.l(0,U.ke(!1,s.x))
a6.l(0,U.kf(!1,s.x))
r.sb0(a6)
p=new O.d_()
p.b=V.jo()
p.c=V.ap()
p.d=new A.S(!1,!1,!1)
p.cB(a5)
p.cC(a5)
p.W()
p.r=null
a6=s.f.h0("../resources/diceBumpMap")
u=p.d
if(!u.c){p.d=new A.S(u.a,!1,!0)
p.cB(a5)
p.a=null}p.cC(a6)
o=X.jJ(!0,!0,new V.a_(0.5,0.5,1,1))
n=M.jP()
n.sap(p)
n.saz(0,o)
n.e.l(0,r)
n.b.sb0(U.jc(V.jY(0,0,5)))
m=U.jQ()
m.l(0,U.ke(!0,s.x))
m.l(0,U.kf(!0,s.x))
m.l(0,U.jc(V.jY(0,0,5)))
l=X.k0(m)
k=X.jJ(!0,!1,a5)
j=E.jf()
j.sb6(0,F.mP())
i=new O.cU()
a6=O.eD(V.ao)
i.e=a6
a6.aB(i.gep(),i.ger())
a6=new O.an(i,"emission")
a6.c=new A.S(!1,!1,!1)
a6.f=new V.P(0,0,0)
i.f=a6
a6=new O.an(i,"ambient")
a6.c=new A.S(!1,!1,!1)
a6.f=new V.P(0,0,0)
i.r=a6
a6=new O.an(i,"diffuse")
a6.c=new A.S(!1,!1,!1)
a6.f=new V.P(0,0,0)
i.x=a6
a6=new O.an(i,"invDiffuse")
a6.c=new A.S(!1,!1,!1)
a6.f=new V.P(0,0,0)
i.y=a6
a6=new O.fy(i,"specular")
a6.c=new A.S(!1,!1,!1)
a6.f=new V.P(0,0,0)
a6.ch=100
i.z=a6
a6=new O.fu(i,"bump")
a6.c=new A.S(!1,!1,!1)
i.Q=a6
i.ch=null
a6=new O.an(i,"reflect")
a6.c=new A.S(!1,!1,!1)
a6.f=new V.P(0,0,0)
i.cx=a6
a6=new O.fx(i,"refract")
a6.c=new A.S(!1,!1,!1)
a6.f=new V.P(0,0,0)
a6.ch=1
i.cy=a6
a6=new O.ft(i,"alpha")
a6.c=new A.S(!1,!1,!1)
a6.f=1
i.db=a6
a6=new D.cQ()
a6.b7(D.a0)
a6.e=H.b([],[D.ex])
a6.f=H.b([],[D.bo])
a6.r=H.b([],[D.h3])
a6.x=H.b([],[D.hr])
a6.z=a6.y=null
a6.c8(a6.gen(),a6.gf1(),a6.gf5())
i.dx=a6
u=new O.fw()
u.b=new V.a_(0,0,0,0)
u.c=1
u.d=10
u.e=!1
i.dy=u
u=a6.y
a6=u==null?a6.y=D.B():u
a6.l(0,i.gfm())
a6=i.dx
u=a6.z
a6=u==null?a6.z=D.B():u
a6.l(0,i.gaa())
i.fr=null
a6=i.dx
h=V.ju()
u=U.jc(V.jW(V.k3(),h,new V.y(0,-1,-1)))
g=new V.P(1,1,1)
f=new D.bo()
f.c=new V.P(1,1,1)
f.a=V.kk()
f.d=V.ju()
f.e=V.lF()
e=f.b
f.b=u
u.gm().l(0,f.gdQ())
u=new D.r("mover",e,f.b)
u.b=!0
f.aq(u)
if(!f.c.n(0,g)){e=f.c
f.c=g
u=new D.r("color",e,g)
u.b=!0
f.aq(u)}a6.l(0,f)
a6=i.r
a6.saJ(0,new V.P(0,0,1))
a6=i.x
a6.saJ(0,new V.P(0,1,0))
a6=i.z
a6.saJ(0,new V.P(1,0,0))
a6=i.z
a6.cE(new A.S(!0,!1,a6.c.c))
a6.cF(10)
a6=s.f.df("../resources/maskonaive",".jpg")
d=M.jd()
u=new O.d7()
u.b=1.0471975511965976
u.d=new V.P(1,1,1)
e=u.c
u.c=a6
a6.gm().l(0,u.gaa())
a6=new D.r("boxTexture",e,u.c)
a6.b=!0
u.F(a6)
d.sap(u)
d.saz(0,k)
d.saV(l)
c=M.jP()
c.saV(l)
c.sap(i)
c.saz(0,k)
c.e.l(0,j)
b=new O.eO()
b.scW(a5)
b.scT(a5)
a=V.jo()
if(!J.z(b.d,a)){b.d=a
b.W()}a=V.jo()
if(!J.z(b.e,a)){b.e=a
b.W()}b.scS(a5)
b.scW(k.ch)
b.scT(o.ch)
b.scS(V.jX(0.05,0.05,0.05))
a0=M.jd()
a0.sap(b)
a1=new O.de()
a1.a=new V.a_(0,0,0,0)
a6=O.eD(O.b8)
a1.c=a6
a6.aB(a1.geG(),a1.geI())
a1.d=0
a1.e=null
a1.r=a1.f=C.i
a2=new V.a_(0,0,0,0)
if(!a1.a.n(0,a2)){e=a1.a
a1.a=a2
a6=new D.r("backColor",e,a2)
a6.b=!0
a1.F(a6)}a1.scQ(C.i)
a1.scQ(C.h)
a6=a1.c
u=o.ch
a6.l(0,O.k8(V.c3(0,0.8,0.2,0.2),!0,u))
u=a1.c
a6=k.ch
u.l(0,O.k8(V.c3(0,0.6,0.2,0.2),!1,a6))
a3=M.jd()
a3.saz(0,X.jh(!1,a5))
a3.sap(a1)
a6=M.ad
u=H.b([d,c,n,a0,a3],[a6])
f=new M.cA()
f.b7(a6)
f.e=!0
f.f=!1
f.r=null
f.aB(f.gf7(),f.gf9())
f.bd(0,u)
a6=s.d
if(a6!==f){if(a6!=null)a6.gm().E(0,s.gcf())
s.d=f
f.gm().l(0,s.gcf())
s.cg()}V.mM(s)}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jl.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gJ:function(a){return H.c1(a)},
i:function(a){return"Instance of '"+H.f(H.c2(a))+"'"}}
J.fe.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$ibg:1}
J.cN.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.cO.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.h1.prototype={}
J.c9.prototype={}
J.b1.prototype={
i:function(a){var u=a[$.kG()]
if(u==null)return this.dJ(a)
return"JavaScript function for "+H.f(J.a7(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b0.prototype={
c3:function(a,b){if(!!a.fixed$length)H.o(P.w("removeAt"))
if(b<0||b>=a.length)throw H.c(P.d3(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var u
if(!!a.fixed$length)H.o(P.w("remove"))
for(u=0;u<a.length;++u)if(J.z(a[u],b)){a.splice(u,1)
return!0}return!1},
bd:function(a,b){var u,t
if(!!a.fixed$length)H.o(P.w("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t)a.push(b[t])},
K:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bL(a))}},
p:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
fZ:function(a){return this.p(a,"")},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dG:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.as(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.as(c,b,u,"end",null))
if(b===c)return H.b([],[H.aS(a,0)])
return H.b(a.slice(b,c),[H.aS(a,0)])},
gfW:function(a){if(a.length>0)return a[0]
throw H.c(H.jR())},
gbV:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.jR())},
aO:function(a,b){if(!!a.immutable$list)H.o(P.w("sort"))
H.lA(a,b==null?J.lT():b)},
dF:function(a){return this.aO(a,null)},
O:function(a,b){var u
for(u=0;u<a.length;++u)if(J.z(a[u],b))return!0
return!1},
i:function(a){return P.ji(a,"[","]")},
gP:function(a){return new J.Z(a,a.length)},
gJ:function(a){return H.c1(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.o(P.w("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.j8(b,u,null))
if(b<0)throw H.c(P.as(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bE(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.o(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bE(a,b))
a[b]=c},
$ip:1,
$ij:1}
J.jk.prototype={}
J.Z.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bR.prototype={
aK:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aQ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbi(b)
if(this.gbi(a)===u)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi:function(a){return a===0?1/a<0:a<0},
hr:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.w(""+a+".toInt()"))},
bS:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.w(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
dt:function(a,b){var u
if(b>20)throw H.c(P.as(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+u
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
dA:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dK:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cH(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.cH(a,b)},
cH:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.w("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
bb:function(a,b){var u
if(a>0)u=this.fu(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fu:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia6:1}
J.cM.prototype={$iv:1}
J.cL.prototype={}
J.br.prototype={
bH:function(a,b){if(b<0)throw H.c(H.bE(a,b))
if(b>=a.length)H.o(H.bE(a,b))
return a.charCodeAt(b)},
bo:function(a,b){if(b>=a.length)throw H.c(H.bE(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.j8(b,null,null))
return a+b},
cb:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.d3(b,null))
if(b>c)throw H.c(P.d3(b,null))
if(c>a.length)throw H.c(P.d3(c,null))
return a.substring(b,c)},
aC:function(a,b){return this.cb(a,b,null)},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
fJ:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.as(c,0,u,null,null))
return H.kB(a,b,c)},
O:function(a,b){return this.fJ(a,b,0)},
aK:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aQ(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$it:1}
H.N.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.bH(this.a,b)},
$ap:function(){return[P.v]},
$aq:function(){return[P.v]},
$aj:function(){return[P.v]}}
H.p.prototype={}
H.bT.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.bh(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.bL(s))
u=t.c
if(typeof q!=="number")return H.u(q)
if(u>=q){t.d=null
return!1}t.d=r.G(s,u);++t.c
return!0}}
H.bV.prototype={
gP:function(a){return new H.cS(J.bi(this.a),this.b)},
gj:function(a){return J.bj(this.a)},
G:function(a,b){return this.b.$1(J.j7(this.a,b))},
$aj:function(a,b){return[b]}}
H.eV.prototype={$ip:1,
$ap:function(a,b){return[b]}}
H.cS.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.a=u.c.$1(t.gI(t))
return!0}u.a=null
return!1},
gI:function(a){return this.a}}
H.im.prototype={
gP:function(a){return new H.io(J.bi(this.a),this.b)}}
H.io.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.cI.prototype={}
H.i0.prototype={
k:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.dm.prototype={}
H.hQ.prototype={
ae:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fY.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fh.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.i_.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j5.prototype={
$1:function(a){if(!!J.X(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.e_.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bK.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cq(t==null?"unknown":t)+"'"},
ghw:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hA.prototype={}
H.hu.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cq(u)+"'"}}
H.bI.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bI))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.c1(this.a)
else u=typeof t!=="object"?J.bH(t):H.c1(t)
return(u^H.c1(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.c2(u))+"'")}}
H.eA.prototype={
i:function(a){return this.a}}
H.hd.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.G.prototype={
gj:function(a){return this.a},
gaw:function(a){return new H.bt(this,[H.aS(this,0)])},
ghv:function(a){var u=this,t=H.aS(u,0)
return H.lg(new H.bt(u,[t]),new H.fg(u),t,H.aS(u,1))},
fK:function(a,b){var u=this.b
if(u==null)return!1
return this.e4(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b9(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b9(r,b)
s=t==null?null:t.b
return s}else return q.fY(b)},
fY:function(a){var u,t,s=this.d
if(s==null)return
u=this.cr(s,J.bH(a)&0x3ffffff)
t=this.dd(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.ck(u==null?o.b=o.bv():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.ck(t==null?o.c=o.bv():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bv()
r=J.bH(b)&0x3ffffff
q=o.cr(s,r)
if(q==null)o.bA(s,r,[o.bw(b,c)])
else{p=o.dd(q,b)
if(p>=0)q[p].b=c
else q.push(o.bw(b,c))}}},
K:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bL(u))
t=t.c}},
ck:function(a,b,c){var u=this.b9(a,b)
if(u==null)this.bA(a,b,this.bw(b,c))
else u.b=c},
bw:function(a,b){var u=this,t=new H.fl(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
dd:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.z(a[t].a,b))return t
return-1},
i:function(a){return P.jU(this)},
b9:function(a,b){return a[b]},
cr:function(a,b){return a[b]},
bA:function(a,b,c){a[b]=c},
e7:function(a,b){delete a[b]},
e4:function(a,b){return this.b9(a,b)!=null},
bv:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bA(t,u,t)
this.e7(t,u)
return t}}
H.fg.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aS(u,1),args:[H.aS(u,0)]}}}
H.fl.prototype={}
H.bt.prototype={
gj:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fm(u,u.r)
t.c=u.e
return t}}
H.fm.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bL(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iY.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.iZ.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j_.prototype={
$1:function(a){return this.a(a)}}
H.ff.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c_.prototype={}
H.cW.prototype={
gj:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.bZ.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aw(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.J]},
$aq:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]}}
H.cX.prototype={
k:function(a,b,c){H.aw(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.v]},
$aq:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]}}
H.fP.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.fQ.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.fR.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.fS.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.fT.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.cY.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.fU.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.cc.prototype={}
H.cd.prototype={}
H.ce.prototype={}
H.cf.prototype={}
P.iq.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.ip.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ir.prototype={
$0:function(){this.a.$0()}}
P.is.prototype={
$0:function(){this.a.$0()}}
P.e5.prototype={
dU:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bD(new P.iM(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
dV:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bD(new P.iL(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$idg:1}
P.iM.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iL.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dK(u,q)}s.c=r
t.d.$1(s)}}
P.bz.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.ci.prototype={
gI:function(a){var u=this.c
if(u==null)return this.b
return u.gI(u)},
w:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.w())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bz){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.bi(u)
if(!!r.$ici){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iK.prototype={
gP:function(a){return new P.ci(this.a())}}
P.ds.prototype={}
P.dc.prototype={}
P.hx.prototype={}
P.dg.prototype={}
P.iO.prototype={}
P.iT.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d0():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iE.prototype={
hm:function(a){var u,t,s,r=null
try{if(C.e===$.ag){a.$0()
return}P.mh(r,r,this,a)}catch(s){u=H.em(s)
t=H.jC(s)
P.kp(r,r,this,u,t)}},
hn:function(a,b){var u,t,s,r=null
try{if(C.e===$.ag){a.$1(b)
return}P.mi(r,r,this,a,b)}catch(s){u=H.em(s)
t=H.jC(s)
P.kp(r,r,this,u,t)}},
ho:function(a,b){return this.hn(a,b,null)},
fH:function(a){return new P.iF(this,a)},
cP:function(a,b){return new P.iG(this,a,b)}}
P.iF.prototype={
$0:function(){return this.a.hm(this.b)}}
P.iG.prototype={
$1:function(a){return this.a.ho(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iB.prototype={
gP:function(a){var u=new P.dI(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
O:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.e2(b)
return t}},
e2:function(a){var u=this.d
if(u==null)return!1
return this.bs(this.cq(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cl(u==null?s.b=P.jw():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cl(t==null?s.c=P.jw():t,b)}else return s.dX(0,b)},
dX:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jw()
u=s.cm(b)
t=r[u]
if(t==null)r[u]=[s.bp(b)]
else{if(s.bs(t,b)>=0)return!1
t.push(s.bp(b))}return!0},
E:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fi(this.c,b)
else return this.fh(0,b)},
fh:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cq(r,b)
t=s.bs(u,b)
if(t<0)return!1
s.cJ(u.splice(t,1)[0])
return!0},
cl:function(a,b){if(a[b]!=null)return!1
a[b]=this.bp(b)
return!0},
fi:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cJ(u)
delete a[b]
return!0},
cs:function(){this.r=1073741823&this.r+1},
bp:function(a){var u,t=this,s=new P.iC(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cs()
return s},
cJ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cs()},
cm:function(a){return J.bH(a)&1073741823},
cq:function(a,b){return a[this.cm(b)]},
bs:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.z(a[t].a,b))return t
return-1}}
P.iC.prototype={}
P.dI.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bL(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fc.prototype={}
P.fn.prototype={$ip:1,$ij:1}
P.q.prototype={
gP:function(a){return new H.bT(a,this.gj(a))},
G:function(a,b){return this.h(a,b)},
ht:function(a,b){var u,t,s=this,r=H.b([],[H.mA(s,a,"q",0)])
C.a.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.u(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
hs:function(a){return this.ht(a,!0)},
i:function(a){return P.ji(a,"[","]")}}
P.fq.prototype={}
P.fr.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:8}
P.a1.prototype={
K:function(a,b){var u,t
for(u=J.bi(this.gaw(a));u.w();){t=u.gI(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.bj(this.gaw(a))},
i:function(a){return P.jU(a)}}
P.iH.prototype={
i:function(a){return P.ji(this,"{","}")},
G:function(a,b){var u,t,s
P.k5(b,"index")
for(u=P.lN(this,this.r),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.c(P.I(b,this,"index",null,t))},
$ip:1,
$ij:1}
P.dJ.prototype={}
P.eC.prototype={}
P.eH.prototype={}
P.eW.prototype={}
P.i3.prototype={}
P.i4.prototype={
fL:function(a){var u,t,s,r=P.jp(0,null,a.length)
if(typeof r!=="number")return r.L()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iN(t)
if(s.e9(a,0,r)!==r)s.cK(C.d.bH(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lR(0,s.b,t.length)))}}
P.iN.prototype={
cK:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
e9:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.bH(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.bo(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cK(r,C.d.bo(a,p)))s=p}else if(r<=2047){q=n.b
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
P.bg.prototype={}
P.a9.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a9&&this.a===b.a&&!0},
aK:function(a,b){return C.c.aK(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.c.bb(u,30))&1073741823},
i:function(a){var u=this,t=P.l5(H.lq(u)),s=P.cD(H.lo(u)),r=P.cD(H.lk(u)),q=P.cD(H.ll(u)),p=P.cD(H.ln(u)),o=P.cD(H.lp(u)),n=P.l6(H.lm(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aV.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
aK:function(a,b){return C.c.aK(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eU(),q=this.a
if(q<0)return"-"+new P.aV(0-q).i(0)
u=r.$1(C.c.a4(q,6e7)%60)
t=r.$1(C.c.a4(q,1e6)%60)
s=new P.eT().$1(q%1e6)
return""+C.c.a4(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.eT.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eU.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bp.prototype={}
P.d0.prototype={
i:function(a){return"Throw of null."}}
P.ak.prototype={
gbr:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbq:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbr()+o+u
if(!q.a)return t
s=q.gbq()
r=P.jg(q.b)
return t+s+": "+r}}
P.bw.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.fb.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t=this.b
if(typeof t!=="number")return t.ab()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gj:function(a){return this.f}}
P.i1.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hZ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ht.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eG.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jg(u)+"."}}
P.h0.prototype={
i:function(a){return"Out of Memory"},
$ibp:1}
P.da.prototype={
i:function(a){return"Stack Overflow"},
$ibp:1}
P.eM.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dB.prototype={
i:function(a){return"Exception: "+this.a}}
P.f7.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.cb(s,0,75)+"...":s
return t+"\n"+r}}
P.v.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gP(this)
for(u=0;t.w();)++u
return u},
G:function(a,b){var u,t,s
P.k5(b,"index")
for(u=this.gP(this),t=0;u.w();){s=u.gI(u)
if(b===t)return s;++t}throw H.c(P.I(b,this,"index",null,t))},
i:function(a){return P.l8(this,"(",")")}}
P.fd.prototype={}
P.b3.prototype={$ip:1,$ij:1}
P.bU.prototype={}
P.b5.prototype={
gJ:function(a){return P.a2.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
n:function(a,b){return this===b},
gJ:function(a){return H.c1(this)},
i:function(a){return"Instance of '"+H.f(H.c2(this))+"'"},
toString:function(){return this.i(this)}}
P.t.prototype={}
P.aM.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.en.prototype={
gj:function(a){return a.length}}
W.ep.prototype={
i:function(a){return String(a)}}
W.eq.prototype={
i:function(a){return String(a)}}
W.cx.prototype={}
W.bm.prototype={
c7:function(a,b,c){if(c!=null)return a.getContext(b,P.mr(c))
return a.getContext(b)},
dz:function(a,b){return this.c7(a,b,null)},
$ibm:1}
W.aU.prototype={
gj:function(a){return a.length}}
W.eI.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bM.prototype={
gj:function(a){return a.length}}
W.eJ.prototype={}
W.a8.prototype={}
W.am.prototype={}
W.eK.prototype={
gj:function(a){return a.length}}
W.eL.prototype={
gj:function(a){return a.length}}
W.eN.prototype={
gj:function(a){return a.length}}
W.eQ.prototype={
i:function(a){return String(a)}}
W.cF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[[P.a4,P.a6]]},
$ix:1,
$ax:function(){return[[P.a4,P.a6]]},
$aq:function(){return[[P.a4,P.a6]]},
$ij:1,
$aj:function(){return[[P.a4,P.a6]]}}
W.cG.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gah(a))+" x "+H.f(this.gad(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.X(b)
return!!u.$ia4&&a.left===u.gbj(b)&&a.top===u.gbl(b)&&this.gah(a)===u.gah(b)&&this.gad(a)===u.gad(b)},
gJ:function(a){return W.kn(C.b.gJ(a.left),C.b.gJ(a.top),C.b.gJ(this.gah(a)),C.b.gJ(this.gad(a)))},
gcR:function(a){return a.bottom},
gad:function(a){return a.height},
gbj:function(a){return a.left},
gc6:function(a){return a.right},
gbl:function(a){return a.top},
gah:function(a){return a.width},
$ia4:1,
$aa4:function(){return[P.a6]}}
W.eR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[P.t]},
$ix:1,
$ax:function(){return[P.t]},
$aq:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
W.eS.prototype={
gj:function(a){return a.length}}
W.iu.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.hs(this)
return new J.Z(u,u.length)},
$ap:function(){return[W.V]},
$aq:function(){return[W.V]},
$aj:function(){return[W.V]}}
W.V.prototype={
gcU:function(a){return new W.iu(a,a.children)},
gcV:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ab()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ab()
if(r<0)r=-r*0
return new P.a4(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
$iV:1}
W.i.prototype={$ii:1}
W.e.prototype={
fD:function(a,b,c,d){if(c!=null)this.dY(a,b,c,!1)},
dY:function(a,b,c,d){return a.addEventListener(b,H.bD(c,1),!1)}}
W.aB.prototype={$iaB:1}
W.f1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aB]},
$ix:1,
$ax:function(){return[W.aB]},
$aq:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]}}
W.f2.prototype={
gj:function(a){return a.length}}
W.f6.prototype={
gj:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.f9.prototype={
gj:function(a){return a.length}}
W.bP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.D]},
$ix:1,
$ax:function(){return[W.D]},
$aq:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]}}
W.aY.prototype={$iaY:1,
gcY:function(a){return a.data}}
W.bQ.prototype={$ibQ:1}
W.bs.prototype={$ibs:1}
W.fo.prototype={
i:function(a){return String(a)}}
W.fI.prototype={
gj:function(a){return a.length}}
W.fJ.prototype={
h:function(a,b){return P.aR(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aR(u.value[1]))}},
gaw:function(a){var u=H.b([],[P.t])
this.K(a,new W.fK(u))
return u},
gj:function(a){return a.size},
$aa1:function(){return[P.t,null]}}
W.fK.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fL.prototype={
h:function(a,b){return P.aR(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aR(u.value[1]))}},
gaw:function(a){var u=H.b([],[P.t])
this.K(a,new W.fM(u))
return u},
gj:function(a){return a.size},
$aa1:function(){return[P.t,null]}}
W.fM.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aE.prototype={$iaE:1}
W.fN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aE]},
$ix:1,
$ax:function(){return[W.aE]},
$aq:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]}}
W.aq.prototype={$iaq:1}
W.it.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gP:function(a){var u=this.a.childNodes
return new W.cJ(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ap:function(){return[W.D]},
$aq:function(){return[W.D]},
$aj:function(){return[W.D]}}
W.D.prototype={
hk:function(a,b){var u,t
try{u=a.parentNode
J.kV(u,b,a)}catch(t){H.em(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dI(a):u},
fk:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.cZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.D]},
$ix:1,
$ax:function(){return[W.D]},
$aq:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]}}
W.aG.prototype={$iaG:1,
gj:function(a){return a.length}}
W.h2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aG]},
$ix:1,
$ax:function(){return[W.aG]},
$aq:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]}}
W.hb.prototype={
h:function(a,b){return P.aR(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aR(u.value[1]))}},
gaw:function(a){var u=H.b([],[P.t])
this.K(a,new W.hc(u))
return u},
gj:function(a){return a.size},
$aa1:function(){return[P.t,null]}}
W.hc.prototype={
$2:function(a,b){return this.a.push(a)}}
W.he.prototype={
gj:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.hp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aJ]},
$ix:1,
$ax:function(){return[W.aJ]},
$aq:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]}}
W.aK.prototype={$iaK:1}
W.hq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aK]},
$ix:1,
$ax:function(){return[W.aK]},
$aq:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]}}
W.aL.prototype={$iaL:1,
gj:function(a){return a.length}}
W.hv.prototype={
h:function(a,b){return a.getItem(b)},
K:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaw:function(a){var u=H.b([],[P.t])
this.K(a,new W.hw(u))
return u},
gj:function(a){return a.length},
$aa1:function(){return[P.t,P.t]}}
W.hw.prototype={
$2:function(a,b){return this.a.push(a)}}
W.at.prototype={$iat:1}
W.aN.prototype={$iaN:1}
W.au.prototype={$iau:1}
W.hB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.au]},
$ix:1,
$ax:function(){return[W.au]},
$aq:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]}}
W.hC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aN]},
$ix:1,
$ax:function(){return[W.aN]},
$aq:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]}}
W.hK.prototype={
gj:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.bx.prototype={$ibx:1}
W.hN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aO]},
$ix:1,
$ax:function(){return[W.aO]},
$aq:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]}}
W.hO.prototype={
gj:function(a){return a.length}}
W.ba.prototype={}
W.i2.prototype={
i:function(a){return String(a)}}
W.il.prototype={
gj:function(a){return a.length}}
W.be.prototype={
gfP:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
gfO:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.w("deltaX is not supported"))},
$ibe:1}
W.cb.prototype={
fl:function(a,b){return a.requestAnimationFrame(H.bD(b,1))},
e8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.F]},
$ix:1,
$ax:function(){return[W.F]},
$aq:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.dv.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.X(b)
return!!u.$ia4&&a.left===u.gbj(b)&&a.top===u.gbl(b)&&a.width===u.gah(b)&&a.height===u.gad(b)},
gJ:function(a){return W.kn(C.b.gJ(a.left),C.b.gJ(a.top),C.b.gJ(a.width),C.b.gJ(a.height))},
gad:function(a){return a.height},
gah:function(a){return a.width}}
W.iy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aC]},
$ix:1,
$ax:function(){return[W.aC]},
$aq:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]}}
W.dO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.D]},
$ix:1,
$ax:function(){return[W.D]},
$aq:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]}}
W.iI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aL]},
$ix:1,
$ax:function(){return[W.aL]},
$aq:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]}}
W.iJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.at]},
$ix:1,
$ax:function(){return[W.at]},
$aq:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]}}
W.iw.prototype={}
W.ix.prototype={
$1:function(a){return this.a.$1(a)}}
W.H.prototype={
gP:function(a){return new W.cJ(a,this.gj(a))}}
W.cJ.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ct(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gI:function(a){return this.d}}
W.du.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.cg.prototype={}
W.ch.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.e0.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.cj.prototype={}
W.ck.prototype={}
W.e6.prototype={}
W.e7.prototype={}
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
P.ea.prototype={$iaY:1,
gcY:function(a){return this.a}}
P.iU.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.f3.prototype={
gba:function(){var u=this.b,t=H.kv(u,"q",0)
return new H.bV(new H.im(u,new P.f4(),[t]),new P.f5(),[t,W.V])},
k:function(a,b,c){var u=this.gba()
J.kY(u.b.$1(J.j7(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bj(this.gba().a)},
h:function(a,b){var u=this.gba()
return u.b.$1(J.j7(u.a,b))},
gP:function(a){var u=P.jn(this.gba(),!1,W.V)
return new J.Z(u,u.length)},
$ap:function(){return[W.V]},
$aq:function(){return[W.V]},
$aj:function(){return[W.V]}}
P.f4.prototype={
$1:function(a){return!!J.X(a).$iV}}
P.f5.prototype={
$1:function(a){return H.h(a,"$iV")}}
P.iD.prototype={
gc6:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.u(t)
return u+t},
gcR:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.u(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.X(b)
if(!!u.$ia4){t=q.a
if(t==u.gbj(b)){s=q.b
if(s==u.gbl(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gc6(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gcR(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.bH(t),r=u.b,q=J.bH(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.u(p)
p=C.c.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.u(t)
t=C.c.gJ(r+t)
return P.lM(P.iA(P.iA(P.iA(P.iA(0,s),q),p),t))}}
P.a4.prototype={
gbj:function(a){return this.a},
gbl:function(a){return this.b},
gah:function(a){return this.c},
gad:function(a){return this.d}}
P.b2.prototype={$ib2:1}
P.fj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b2]},
$aq:function(){return[P.b2]},
$ij:1,
$aj:function(){return[P.b2]}}
P.b6.prototype={$ib6:1}
P.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b6]},
$aq:function(){return[P.b6]},
$ij:1,
$aj:function(){return[P.b6]}}
P.h5.prototype={
gj:function(a){return a.length}}
P.hy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.t]},
$aq:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
P.k.prototype={
gcU:function(a){return new P.f3(a,new W.it(a))}}
P.b9.prototype={$ib9:1}
P.hP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b9]},
$aq:function(){return[P.b9]},
$ij:1,
$aj:function(){return[P.b9]}}
P.dG.prototype={}
P.dH.prototype={}
P.dR.prototype={}
P.dS.prototype={}
P.e1.prototype={}
P.e2.prototype={}
P.e8.prototype={}
P.e9.prototype={}
P.es.prototype={
gj:function(a){return a.length}}
P.et.prototype={
h:function(a,b){return P.aR(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aR(u.value[1]))}},
gaw:function(a){var u=H.b([],[P.t])
this.K(a,new P.eu(u))
return u},
gj:function(a){return a.size},
$aa1:function(){return[P.t,null]}}
P.eu.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ev.prototype={
gj:function(a){return a.length}}
P.bk.prototype={}
P.h_.prototype={
gj:function(a){return a.length}}
P.dt.prototype={}
P.d5.prototype={
ds:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.X(g)
if(!!u.$iaY&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.ms(g))
return}if(!!u.$ibQ&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.kZ("Incorrect number or type of arguments"))},
hp:function(a,b,c,d,e,f,g){return this.ds(a,b,c,d,e,f,g,null,null,null)}}
P.hs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return P.aR(a.item(b))},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[[P.bU,,,]]},
$aq:function(){return[[P.bU,,,]]},
$ij:1,
$aj:function(){return[[P.bU,,,]]}}
P.dY.prototype={}
P.dZ.prototype={}
K.eo.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"}}
K.cK.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cT.prototype={}
K.aF.prototype={
aL:function(a,b){return!this.dH(0,b)},
i:function(a){return"!["+this.cc(0)+"]"}}
K.hf.prototype={
dN:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.m("May not create a Set with zero characters."))
u=P.v
t=new H.G([u,P.bg])
for(s=new H.bT(a,a.gj(a));s.w();)t.k(0,s.d,!0)
r=P.jn(new H.bt(t,[u]),!0,u)
C.a.dF(r)
this.a=r},
aL:function(a,b){return C.a.O(this.a,b)},
i:function(a){return P.jr(this.a)}}
L.db.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dk(this.a.N(0,b))
r.a=H.b([],[K.cT])
r.c=!1
this.c.push(r)
return r},
fV:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
cI:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.O(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bt(n,[H.aS(n,0)]),n=n.gP(n);n.w();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.f(t)+" => ["+H.f(s)+"]")
o=u.c.O(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.n)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dh.prototype={
i:function(a){var u=H.kC(this.b,"\n","\\n"),t=H.kC(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.di.prototype={
i:function(a){return this.b}}
L.hL.prototype={
N:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.db(this,b)
u.c=H.b([],[L.dk])
this.a.k(0,b,u)}return u},
b4:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.di(a)
u=P.t
t.c=new H.G([u,u])
this.b.k(0,a,t)}return t},
du:function(a){return this.hu(a)},
hu:function(a){var u=this
return P.lV(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$du(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.c3(c,0)
else{if(!t.w()){s=3
break}l=t.d}d.push(l);++o
k=g.fV(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jr(d)
throw H.c(P.m("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.o(P.w("removeRange"))
P.jp(0,m,d.length)
d.splice(0,m-0)
C.a.bd(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.O(0,p.a)?7:8
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
if(g.d!=null){j=P.jr(e)
i=g.d
h=i.c.h(0,j)
p=new L.dh(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.O(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.lK()
case 1:return P.lL(q)}}},L.dh)},
i:function(a){var u,t=new P.aM(""),s=this.d
if(s!=null)t.a=s.cI()+"\n"
for(s=this.a,s=s.ghv(s),s=new H.cS(J.bi(s.a),s.b);s.w();){u=s.a
if(u!=this.d)t.a+=u.cI()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dk.prototype={
i:function(a){return this.b.b+": "+this.cc(0)}}
O.az.prototype={
b7:function(a){this.a=H.b([],[a])
this.c=this.b=null},
c8:function(a,b,c){this.b=b
this.c=a},
aB:function(a,b){return this.c8(a,null,b)},
cw:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ct:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.Z(u,u.length)},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.kv(s,"az",0)]
if(s.cw(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ct(t,H.b([b],r))}},
bd:function(a,b){var u,t
if(this.cw(b)){u=this.a
t=u.length
C.a.bd(u,b)
this.ct(t,b)}},
$ij:1}
O.bX.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.B():u},
aD:function(){var u=this.b
if(u!=null)u.A(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gbV(u)
else return V.ap()},
bk:function(a){var u=this.a
if(a==null)u.push(V.ap())
else u.push(a)
this.aD()},
ay:function(){var u=this.a
if(u.length>0){u.pop()
this.aD()}}}
E.ey.prototype={}
E.aA.prototype={
sb6:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().E(0,s.gdn())
u=s.c
if(u!=null)u.gm().l(0,s.gdn())
t=new D.r("shape",r,s.c)
t.b=!0
s.ax(t)}},
sb0:function(a){var u,t,s=this
if(!J.z(s.r,a)){u=s.r
if(u!=null)u.gm().E(0,s.gdl())
if(a!=null)a.gm().l(0,s.gdl())
s.r=a
t=new D.r("mover",u,a)
t.b=!0
s.ax(t)}},
a7:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aM(0,b,s):null
if(!J.z(q,s.x)){u=s.x
s.x=q
t=new D.r("matrix",u,q)
t.b=!0
s.ax(t)}for(r=s.y.a,r=new J.Z(r,r.length);r.w();)r.d.a7(0,b)},
a6:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga0(s))
else s.a.push(r.t(0,s.ga0(s)))
s.aD()
a.c2(t.f)
s=a.dy
u=(s&&C.a).gbV(s)
if(u!=null&&t.d!=null)u.b3(a,t)
for(s=t.y.a,s=new J.Z(s,s.length);s.w();)s.d.a6(a)
a.c0()
a.dx.ay()},
ax:function(a){var u=this.z
if(u!=null)u.A(a)},
a2:function(){return this.ax(null)},
dq:function(a){this.e=null
this.ax(a)},
h8:function(){return this.dq(null)},
dm:function(a){this.ax(a)},
h7:function(){return this.dm(null)},
dk:function(a){this.ax(a)},
h4:function(){return this.dk(null)},
h3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdj(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aW()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a2()},
h6:function(a,b){var u,t
for(u=b.gP(b),t=this.gdj();u.w();)u.gI(u).gm().E(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bl.prototype={
i:function(a){return this.b}}
E.bu.prototype={
i:function(a){return this.b}}
E.dA.prototype={}
E.h7.prototype={
dM:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a9(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bX()
t=[V.ao]
u.a=H.b([],t)
u.gm().l(0,new E.h8(s))
s.cy=u
u=new O.bX()
u.a=H.b([],t)
u.gm().l(0,new E.h9(s))
s.db=u
u=new O.bX()
u.a=H.b([],t)
u.gm().l(0,new E.ha(s))
s.dx=u
u=H.b([],[O.dd])
s.dy=u
u.push(null)
s.fr=new H.G([P.t,A.d6])},
ghh:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.t(0,u.ga0(u))
s=u}return s},
gc1:function(){var u,t=this,s=t.ch
if(s==null){s=t.ghh()
u=t.dx
u=t.ch=s.t(0,u.ga0(u))
s=u}return s},
gdv:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga0(s)
u=t.dx
u=t.cx=s.t(0,u.ga0(u))
s=u}return s},
c2:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbV(u):a)},
c0:function(){var u=this.dy
if(u.length>1)u.pop()},
aT:function(a){var u=a.b
if(u.length===0)throw H.c(P.m("May not cache a shader with no name."))
if(this.fr.fK(0,u))throw H.c(P.m('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.h8.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h9.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.ha.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.df.prototype={
ci:function(a){this.dr()},
cg:function(){return this.ci(null)},
gfX:function(){var u,t=this,s=Date.now(),r=C.c.a4(P.jO(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a9(s,!1)
return u/r},
cA:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.u(r)
u=C.b.bS(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.b.bS(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ka(C.j,s.ghl())}},
dr:function(){if(!this.cx){this.cx=!0
var u=window
C.w.e8(u)
C.w.fl(u,W.kq(new E.hJ(this),P.a6))}},
hj:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cA()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a9(r,!1)
s.y=P.jO(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.aD()
r=s.db
C.a.sj(r.a,0)
r.aD()
r=s.dx
C.a.sj(r.a,0)
r.aD()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a6(p.e)}}catch(q){u=H.em(q)
t=H.jC(q)
P.jF("Error: "+H.f(u))
P.jF("Stack: "+H.f(t))
throw H.c(u)}}}
E.hJ.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hj()}}}
Z.dr.prototype={}
Z.cy.prototype={
H:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.em(s)
t=P.m('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.f(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.bd.prototype={}
Z.ay.prototype={
a5:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
H:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].H(a)},
a3:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a6:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.t],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a7(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(p,", ")+"\nAttrs:   "+C.a.p(r,", ")}}
Z.bq.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.c2(this.c))+"'")+"]"}}
Z.a5.prototype={
gca:function(a){var u=this.a,t=(u&$.U().a)!==0?3:0
if((u&$.ai().a)!==0)t+=3
if((u&$.ah().a)!==0)t+=3
if((u&$.ax().a)!==0)t+=2
if((u&$.aj().a)!==0)t+=3
if((u&$.cr().a)!==0)t+=3
if((u&$.cs().a)!==0)t+=4
if((u&$.bG().a)!==0)++t
return(u&$.aT().a)!==0?t+4:t},
fG:function(a){var u,t=$.U(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.ai()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ah()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ax()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cr()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aT()
if((s&t.a)!==0)if(u===a)return t
return $.kT()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.a5))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.t]),t=this.a
if((t&$.U().a)!==0)u.push("Pos")
if((t&$.ai().a)!==0)u.push("Norm")
if((t&$.ah().a)!==0)u.push("Binm")
if((t&$.ax().a)!==0)u.push("Txt2D")
if((t&$.aj().a)!==0)u.push("TxtCube")
if((t&$.cr().a)!==0)u.push("Clr3")
if((t&$.cs().a)!==0)u.push("Clr4")
if((t&$.bG().a)!==0)u.push("Weight")
if((t&$.aT().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.p(u,"|")}}
D.eB.prototype={}
D.aW.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Q]}]):u).push(b)},
E:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.O(s,b)
if(s===!0){s=t.a
u=(s&&C.a).E(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.O(s,b)
if(s===!0){s=t.b
u=(s&&C.a).E(s,b)||u}return u},
A:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.K(P.jn(u,!0,{func:1,ret:-1,args:[D.Q]}),new D.eZ(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Q]}])
C.a.K(u,new D.f_(q))}return!0},
bJ:function(){return this.A(null)},
ao:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.A(u)}}}}
D.eZ.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.f_.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Q.prototype={}
D.aZ.prototype={}
D.b_.prototype={}
D.r.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.cz.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cz))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.cP.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cP))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.fi.prototype={
hd:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
h9:function(a){this.c=a.b
this.d.E(0,a.a)
return!1}}
X.cR.prototype={}
X.fp.prototype={
aR:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.Y(o.a+n*m,o.b+u*t)
t=q.a.gaI()
r=new X.b4(a,V.aH(),q.x,t,s)
r.b=!0
q.z=new P.a9(p,!1)
q.x=s
return r},
c_:function(a,b){this.r=a.a
return!1},
b2:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dB()
if(typeof u!=="number")return u.ai()
this.r=(u&~t)>>>0
return!1},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.aR(a,b))
return!0},
he:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaI()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.bY(new V.K(s*r,q*p),u,t)
t.b=!0
n.A(t)
return!0},
eR:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cR(c,r.a.gaI(),b)
s.b=!0
t.A(s)
r.y=new P.a9(u,!1)
r.x=V.aH()}}
X.ac.prototype={
n:function(a,b){var u=this
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
X.b4.prototype={}
X.fO.prototype={
bt:function(a,b,c){var u=this,t=new P.a9(Date.now(),!1),s=u.a.gaI(),r=new X.b4(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c_:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.bt(a,b,!0))
return!0},
b2:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dB()
if(typeof t!=="number")return t.ai()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.A(u.bt(a,b,!0))
return!0},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.bt(a,b,!1))
return!0},
hf:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaI()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.bY(new V.K(t*s,r*q),u,b)
u.b=!0
o.A(u)
return!0}}
X.bY.prototype={}
X.h4.prototype={}
X.dj.prototype={}
X.hM.prototype={
aR:function(a,b){var u=this,t=new P.a9(Date.now(),!1),s=a.length>0?a[0]:V.aH(),r=u.a.gaI(),q=new X.dj(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hc:function(a){var u=this.b
if(u==null)return!1
u.A(this.aR(a,!0))
return!0},
ha:function(a){var u=this.c
if(u==null)return!1
u.A(this.aR(a,!0))
return!0},
hb:function(a){var u=this.d
if(u==null)return!1
u.A(this.aR(a,!1))
return!0}}
X.dn.prototype={
gaI:function(){var u=this.a,t=C.f.gcV(u).c
t.toString
u=C.f.gcV(u).d
u.toString
return V.c3(0,0,t,u)},
co:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cP(u,new X.ac(t,a.altKey,a.shiftKey))},
aG:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ac(t,a.altKey,a.shiftKey)},
bB:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ac(t,a.altKey,a.shiftKey)},
at:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.Y(s-q,r-u)},
aS:function(a){return new V.K(a.movementX,a.movementY)},
bx:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.Y])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.b.Y(r.pageX)
C.b.Y(r.pageY)
p=o.left
C.b.Y(r.pageX)
n.push(new V.Y(q-p,C.b.Y(r.pageY)-o.top))}return n},
ar:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cz(u,new X.ac(t,a.altKey,a.shiftKey))},
bu:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eL:function(a){this.f=!0},
ev:function(a){this.f=!1},
eB:function(a){if(this.f&&this.bu(a))a.preventDefault()},
eP:function(a){var u
if(!this.f)return
u=this.co(a)
this.b.hd(u)},
eN:function(a){var u
if(!this.f)return
u=this.co(a)
this.b.h9(u)},
eT:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aG(a)
if(r.x){u=r.ar(a)
t=r.aS(a)
if(r.d.c_(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ar(a)
s=r.at(a)
if(r.c.c_(u,s))a.preventDefault()},
eX:function(a){var u,t,s,r=this
r.aG(a)
u=r.ar(a)
if(r.x){t=r.aS(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.at(a)
if(r.c.b2(u,s))a.preventDefault()},
eF:function(a){var u,t,s,r=this
if(!r.bu(a)){r.aG(a)
u=r.ar(a)
if(r.x){t=r.aS(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.at(a)
if(r.c.b2(u,s))a.preventDefault()}},
eV:function(a){var u,t,s,r=this
r.aG(a)
u=r.ar(a)
if(r.x){t=r.aS(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.at(a)
if(r.c.b1(u,s))a.preventDefault()},
eD:function(a){var u,t,s,r=this
if(!r.bu(a)){r.aG(a)
u=r.ar(a)
if(r.x){t=r.aS(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.at(a)
if(r.c.b1(u,s))a.preventDefault()}},
eZ:function(a){var u,t,s=this
s.aG(a)
u=new V.K((a&&C.v).gfO(a),C.v.gfP(a)).t(0,s.Q)
if(s.x){if(s.d.he(u))a.preventDefault()
return}if(s.r)return
t=s.at(a)
if(s.c.hf(u,t))a.preventDefault()},
f0:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ar(s.y)
t=s.at(s.y)
s.d.eR(u,t,r)}},
fg:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bB(a)
u=t.bx(a)
if(t.e.hc(u))a.preventDefault()},
fc:function(a){var u
this.bB(a)
u=this.bx(a)
if(this.e.ha(u))a.preventDefault()},
fe:function(a){var u
this.bB(a)
u=this.bx(a)
if(this.e.hb(u))a.preventDefault()}}
D.ex.prototype={$ia0:1}
D.bo.prototype={
aq:function(a){var u=this.r
if(u!=null)u.A(a)},
dR:function(){return this.aq(null)},
$ia0:1}
D.a0.prototype={}
D.cQ.prototype={
aq:function(a){var u=this.y
if(u!=null)u.A(a)},
cv:function(a){var u=this.z
if(u!=null)u.A(a)},
eQ:function(){return this.cv(null)},
f2:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.e3(s))return!1}return!0},
eo:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcu(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.bo)this.f.push(q)
p=q.r
if(p==null){p=new D.aW()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.aZ()
u.b=!0
this.aq(u)},
f6:function(a,b){var u,t,s
for(u=b.gP(b),t=this.gcu();u.w();){s=u.gI(u)
C.a.E(this.e,s)
s.gm().E(0,t)}u=new D.b_()
u.b=!0
this.aq(u)},
e3:function(a){var u=C.a.O(this.f,a)
return u},
$aj:function(){return[D.a0]},
$aaz:function(){return[D.a0]}}
D.h3.prototype={$ia0:1}
D.hr.prototype={$ia0:1}
V.P.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.a_.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.eY.prototype={}
V.bW.prototype={
T:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bW))return!1
u=b.a
t=$.A().a
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bF(H.b([q.a,q.d,q.r],p),3,0),n=V.bF(H.b([q.b,q.e,q.x],p),3,0),m=V.bF(H.b([q.c,q.f,q.y],p),3,0)
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
V.ao.prototype={
T:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
bU:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.ap()
u=1/b1
t=-n
s=-a0
return V.aD((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aD(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bm:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b5:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.O(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.A().a
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
i:function(a){return this.M()},
D:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bF(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bF(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bF(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bF(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.D("")}}
V.Y.prototype={
L:function(a,b){return new V.Y(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.O.prototype={
B:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.O(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.aI.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aI))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.d4.prototype={
gan:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d4))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.K.prototype={
bW:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
if(typeof b!=="number")return H.u(b)
u=this.b
if(typeof u!=="number")return u.t()
return new V.K(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.kg
return u==null?$.kg=new V.K(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.K(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.y.prototype={
bW:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bX:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
au:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.y(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.A().a)return V.ca()
return new V.y(this.a/b,this.b/b,this.c/b)},
de:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.eF.prototype={
bn:function(a){var u=V.mR(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.B():u},
S:function(a){var u=this.y
if(u!=null)u.A(a)},
sdw:function(a,b){},
sdg:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bn(u)}s=new D.r("maximumLocation",s,t.b)
s.b=!0
t.S(s)}},
sdi:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bn(u)}s=new D.r("minimumLocation",s,t.c)
s.b=!0
t.S(s)}},
sa9:function(a,b){var u,t=this
b=t.bn(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.r("location",u,b)
u.b=!0
t.S(u)}},
sdh:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.r("maximumVelocity",r,a)
r.b=!0
s.S(r)}},
sZ:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.r("velocity",t,a)
t.b=!0
u.S(t)}},
scX:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.r("dampening",u,a)
u.b=!0
this.S(u)}},
a7:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa9(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sZ(u)}}}
U.cB.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.B():u},
aM:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cB))return!1
return J.z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bO.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.B():u},
S:function(a){var u=this.e
if(u!=null)u.A(a)},
ak:function(){return this.S(null)},
dT:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gb8(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aZ()
u.b=!0
this.S(u)},
f4:function(a,b){var u,t
for(u=b.gP(b),t=this.gb8();u.w();)u.gI(u).gm().E(0,t)
u=new D.b_()
u.b=!0
this.S(u)},
aM:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ab()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.Z(r,r.length),u=null;r.w();){q=r.d
if(q!=null){t=q.aM(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.ap():u
r=s.e
if(r!=null)r.ao(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bO))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.z(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.aa]},
$aaz:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.dp.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.B():u},
S:function(a){var u=this.fx
if(u!=null)u.A(a)},
ak:function(){return this.S(null)},
bE:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.B():t
u.l(0,s.gef())
u=s.a.c
t=u.d
u=t==null?u.d=D.B():t
u.l(0,s.geh())
u=s.a.c
t=u.c
u=t==null?u.c=D.B():t
u.l(0,s.gej())
u=s.a.d
t=u.f
u=t==null?u.f=D.B():t
u.l(0,s.geb())
u=s.a.d
t=u.d
u=t==null?u.d=D.B():t
u.l(0,s.ged())
u=s.a.e
t=u.b
u=t==null?u.b=D.B():t
u.l(0,s.gfB())
u=s.a.e
t=u.d
u=t==null?u.d=D.B():t
u.l(0,s.gfz())
u=s.a.e
t=u.c
u=t==null?u.c=D.B():t
u.l(0,s.gfv())
return!0},
al:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.R()
u=-u}if(this.r){if(typeof t!=="number")return t.R()
t=-t}return new V.K(u,t)},
eg:function(a){var u=this
H.h(a,"$ib4")
if(!J.z(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ei:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$ib4")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.K(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.al(new V.K(t.a,t.b).t(0,2).v(0,u.gan()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.al(new V.K(s.a,s.b).t(0,2).v(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa9(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa9(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.L(0,a.z)
n.dx=n.al(new V.K(t.a,t.b).t(0,2).v(0,u.gan()))}n.ak()},
ek:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sZ(-t*10*u)
r.ak()}},
ec:function(a){var u=this
if(H.h(a,"$icR").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ee:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$ib4")
if(!J.z(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.al(new V.K(s.a,s.b).t(0,2).v(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa9(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa9(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.L(0,a.z)
n.dx=n.al(new V.K(t.a,t.b).t(0,2).v(0,u.gan()))
n.ak()},
fC:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fA:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$idj")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.K(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.al(new V.K(t.a,t.b).t(0,2).v(0,u.gan()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.al(new V.K(s.a,s.b).t(0,2).v(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa9(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa9(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.L(0,a.z)
n.dx=n.al(new V.K(t.a,t.b).t(0,2).v(0,u.gan()))}n.ak()},
fw:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sZ(-t*10*u)
r.ak()}},
aM:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ab()
if(q<p){r.dy=p
u=b.y
r.c.a7(0,u)
r.b.a7(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aD(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.t(0,V.aD(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaa:1}
U.dq.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.B():u},
S:function(a){var u=this.r
if(u!=null)u.A(a)},
bE:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.B():t
t=r.gel()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.B():s).l(0,t)
return!0},
em:function(a){var u,t,s,r,q=this
if(!J.z(q.b,q.a.b.c))return
H.h(a,"$ibY")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.r("zoom",u,r)
u.b=!0
q.S(u)}},
aM:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.jX(u,u,u)}return t.f},
$iaa:1}
M.cA.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.B():u},
V:function(a){var u=this.r
if(u!=null)u.A(a)},
aQ:function(){return this.V(null)},
f8:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gU(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aZ()
u.b=!0
this.V(u)},
fa:function(a,b){var u,t
for(u=b.gP(b),t=this.gU();u.w();)u.gI(u).gm().E(0,t)
u=new D.b_()
u.b=!0
this.V(u)},
a6:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.Z(u,u.length);u.w();){t=u.d
if(t!=null)t.a6(a)}s.f=!1},
$aj:function(){return[M.ad]},
$aaz:function(){return[M.ad]},
$iad:1}
M.cC.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.B():u},
V:function(a){var u=this.r
if(u!=null)u.A(a)},
aQ:function(){return this.V(null)},
saV:function(a){var u,t,s=this
if(a==null)a=new X.fa()
u=s.b
if(u!==a){if(u!=null)u.gm().E(0,s.gU())
t=s.b
s.b=a
a.gm().l(0,s.gU())
u=new D.r("camera",t,s.b)
u.b=!0
s.V(u)}},
saz:function(a,b){var u,t,s=this
if(b==null)b=X.jh(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gm().E(0,s.gU())
t=s.c
s.c=b
b.gm().l(0,s.gU())
u=new D.r("target",t,s.c)
u.b=!0
s.V(u)}},
sap:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().E(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gU())
s=new D.r("technique",u,t.d)
s.b=!0
t.V(s)}},
a6:function(a){var u,t=this
a.c2(t.d)
t.c.H(a)
t.b.H(a)
u=t.d
if(u!=null)u.a7(0,a)
t.e.a7(0,a)
t.e.a6(a)
t.b.a3(a)
t.c.a3(a)
a.c0()},
$iad:1}
M.cH.prototype={
V:function(a){var u=this.y
if(u!=null)u.A(a)},
aQ:function(){return this.V(null)},
ex:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gU(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aW()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aZ()
u.b=!0
this.V(u)},
ez:function(a,b){var u,t
for(u=b.gP(b),t=this.gU();u.w();)u.gI(u).gm().E(0,t)
u=new D.b_()
u.b=!0
this.V(u)},
saV:function(a){var u,t,s=this
if(a==null)a=X.k0(null)
u=s.b
if(u!==a){if(u!=null)u.gm().E(0,s.gU())
t=s.b
s.b=a
a.gm().l(0,s.gU())
u=new D.r("camera",t,s.b)
u.b=!0
s.V(u)}},
saz:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().E(0,t.gU())
u=t.c
t.c=b
b.gm().l(0,t.gU())
s=new D.r("target",u,t.c)
s.b=!0
t.V(s)}},
sap:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().E(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gU())
s=new D.r("technique",u,t.d)
s.b=!0
t.V(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.B():u},
a6:function(a){var u,t=this
a.c2(t.d)
t.c.H(a)
t.b.H(a)
u=t.d
if(u!=null)u.a7(0,a)
for(u=t.e.a,u=new J.Z(u,u.length);u.w();)u.d.a7(0,a)
for(u=t.e.a,u=new J.Z(u,u.length);u.w();)u.d.a6(a)
t.b.toString
a.cy.ay()
a.db.ay()
t.c.a3(a)
a.c0()},
$iad:1}
M.ad.prototype={}
A.cv.prototype={}
A.er.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fU:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
aW:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.S.prototype={
gag:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.S))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.eP.prototype={
cG:function(a,b){if(b!=null&&b.d)a.dD(b)}}
A.fs.prototype={
dL:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aM("")
t=c0.fr
if(t){u.a=b9
s=b9}else s=""
r=c0.fx
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c0.k4
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c0.r1
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.m9(c0,u)
A.mb(c0,u)
A.ma(c0,u)
A.md(c0,u)
A.me(c0,u)
A.mc(c0,u)
A.mf(c0,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c0.ry
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
u.a=s}if(c0.r2){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c0.rx){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c0.k2){s+="   objPos = getObjPos();\n"
u.a=s}s=(c0.k3?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
b5.aZ(0,s.charCodeAt(0)==0?s:s,A.m8(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.h(b5.y.u(0,"invViewMat"),"$iM")
if(t)b5.dy=H.h(b5.y.u(0,"objMat"),"$iM")
if(r)b5.fr=H.h(b5.y.u(0,"viewObjMat"),"$iM")
b5.fy=H.h(b5.y.u(0,"projViewObjMat"),"$iM")
if(c0.go)b5.fx=H.h(b5.y.u(0,"viewMat"),"$iM")
if(c0.x1)b5.k1=H.h(b5.y.u(0,"txt2DMat"),"$ibb")
if(c0.x2)b5.k2=H.h(b5.y.u(0,"txtCubeMat"),"$iM")
if(c0.y1)b5.k3=H.h(b5.y.u(0,"colorMat"),"$iM")
b5.r1=H.b([],[A.M])
t=c0.bg
if(t>0){b5.k4=b5.y.u(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.o(P.m(b7+q+b8))
s.push(H.h(m,"$iM"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.u(0,"emissionClr"),"$iC")
if(t.c)b5.ry=H.h(b5.y.u(0,"emissionTxt"),"$iR")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.u(0,"ambientClr"),"$iC")
if(t.c)b5.y1=H.h(b5.y.u(0,"ambientTxt"),"$iR")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.u(0,"diffuseClr"),"$iC")
if(t.c)b5.av=H.h(b5.y.u(0,"diffuseTxt"),"$iR")
t=c0.d
if(t.a)b5.bh=H.h(b5.y.u(0,"invDiffuseClr"),"$iC")
if(t.c)b5.d_=H.h(b5.y.u(0,"invDiffuseTxt"),"$iR")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.d2=H.h(b5.y.u(0,"shininess"),"$iL")
if(s)b5.d0=H.h(b5.y.u(0,"specularClr"),"$iC")
if(t.c)b5.d1=H.h(b5.y.u(0,"specularTxt"),"$iR")}if(c0.f.c)b5.d3=H.h(b5.y.u(0,"bumpTxt"),"$iR")
if(c0.db){b5.d4=H.h(b5.y.u(0,"envSampler"),"$iR")
t=c0.r
if(t.a)b5.d5=H.h(b5.y.u(0,"reflectClr"),"$iC")
if(t.c)b5.d6=H.h(b5.y.u(0,"reflectTxt"),"$iR")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.d7=H.h(b5.y.u(0,"refraction"),"$iL")
if(s)b5.d8=H.h(b5.y.u(0,"refractClr"),"$iC")
if(t.c)b5.d9=H.h(b5.y.u(0,"refractTxt"),"$iR")}}t=c0.y
if(t.a)b5.da=H.h(b5.y.u(0,"alpha"),"$iL")
if(t.c)b5.dc=H.h(b5.y.u(0,"alphaTxt"),"$iR")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.v
b5.bK=new H.G([r,A.ae])
b5.bL=new H.G([r,[P.b3,A.c5]])
for(r=[A.c5],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="barLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.h(m,"$iC")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.h(g,"$iC")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.h(f,"$iC")
if(typeof j!=="number")return j.ai()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.h(d,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.h(c,"$iL")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c5(m,g,f,a0,a,b))}b5.bL.k(0,j,h)
q=b5.bK
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.k(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.v
b5.bM=new H.G([r,A.ae])
b5.bN=new H.G([r,[P.b3,A.c6]])
for(r=[A.c6],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ai()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.o(P.m(b7+a1+b8))
H.h(m,"$iC")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.o(P.m(b7+a1+b8))
H.h(g,"$iC")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.o(P.m(b7+a1+b8))
H.h(f,"$iC")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.o(P.m(b7+a1+b8))
H.h(m,"$iC")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.o(P.m(b7+a1+b8))
H.h(g,"$iC")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.h(f,"$iaf")
a5=f}else a5=b6
h.push(new A.c6(a4,a3,a2,m,g,a5))}b5.bN.k(0,j,h)
q=b5.bM
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.k(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.v
b5.bO=new H.G([r,A.ae])
b5.bP=new H.G([r,[P.b3,A.c7]])
for(r=[A.c7],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.h(m,"$iC")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.h(g,"$iC")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.h(f,"$iC")
if(typeof j!=="number")return j.ai()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$ibb")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$iR")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$iR")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.h(d,"$iby")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.h(d,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.h(c,"$iL")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c7(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.bP.k(0,j,h)
q=b5.bO
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.k(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.v
b5.bQ=new H.G([r,A.ae])
b5.bR=new H.G([r,[P.b3,A.c8]])
for(r=[A.c8],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.h(m,"$iC")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.h(g,"$iC")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.h(f,"$iC")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.h(e,"$iC")
if(typeof j!=="number")return j.ai()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.h(d,"$iC")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.h(c,"$iC")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.o(P.m(b7+o+b8))
H.h(a9,"$iL")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.o(P.m(b7+o+b8))
H.h(b0,"$iL")
b1=b0
b2=a9
a3=c
a4=d}else{b1=b6
b2=b1
a3=b2
a4=a3}p=(j&2)!==0
if(p){o=b5.y
a1=i+"s["+n+"].shadowAdj"
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.h(d,"$iby")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.h(d,"$iL")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.o(P.m(b7+a1+b8))
H.h(c,"$iL")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.h(d,"$iL")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.o(P.m(b7+a1+b8))
H.h(c,"$iL")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.o(P.m(b7+a1+b8))
H.h(a9,"$iL")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.h(d,"$iaf")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.h(d,"$iaf")
a7=d}else a7=b6
h.push(new A.c8(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.bR.k(0,j,h)
q=b5.bQ
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.k(0,j,m)}}}},
ac:function(a,b){}}
A.cw.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.cE.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.d2.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.d9.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.fv.prototype={
i:function(a){return this.av}}
A.c5.prototype={}
A.c6.prototype={}
A.c7.prototype={}
A.c8.prototype={}
A.fV.prototype={}
A.fX.prototype={
i:function(a){return this.e}}
A.d6.prototype={
aP:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
aZ:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cp(b,35633)
r.f=r.cp(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.o(P.m("Failed to link shader: "+H.f(s)))}r.fq()
r.ft()},
H:function(a){a.a.useProgram(this.r)
this.x.fU()},
cp:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.m("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
fq:function(){var u,t,s,r=this,q=H.b([],[A.cv]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cv(p,t.name,s))}r.x=new A.er(q)},
ft:function(){var u,t,s,r=this,q=H.b([],[A.dl]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fN(t.type,t.size,t.name,s))}r.y=new A.hX(q)},
aE:function(a,b,c){var u=this.a
if(a===1)return new A.ae(u,b,c)
else return A.jt(u,this.r,b,a,c)},
e5:function(a,b,c){var u=this.a
if(a===1)return new A.af(u,b,c)
else return A.jt(u,this.r,b,a,c)},
e6:function(a,b,c){var u=this.a
if(a===1)return new A.R(u,b,c)
else return A.jt(u,this.r,b,a,c)},
bc:function(a,b){return new P.dB(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
fN:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aE(b,c,d)
case 5121:return u.aE(b,c,d)
case 5122:return u.aE(b,c,d)
case 5123:return u.aE(b,c,d)
case 5124:return u.aE(b,c,d)
case 5125:return u.aE(b,c,d)
case 5126:return new A.L(u.a,c,d)
case 35664:return new A.aP(u.a,c,d)
case 35665:return new A.C(u.a,c,d)
case 35666:return new A.by(u.a,c,d)
case 35667:return new A.hU(u.a,c,d)
case 35668:return new A.hV(u.a,c,d)
case 35669:return new A.hW(u.a,c,d)
case 35674:return new A.hY(u.a,c,d)
case 35675:return new A.bb(u.a,c,d)
case 35676:return new A.M(u.a,c,d)
case 35678:return u.e5(b,c,d)
case 35680:return u.e6(b,c,d)
case 35670:throw H.c(u.bc("BOOL",c))
case 35671:throw H.c(u.bc("BOOL_VEC2",c))
case 35672:throw H.c(u.bc("BOOL_VEC3",c))
case 35673:throw H.c(u.bc("BOOL_VEC4",c))
default:throw H.c(P.m("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.bn.prototype={
i:function(a){return this.b}}
A.ho.prototype={}
A.hG.prototype={
dP:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.aZ(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.lC(a,b))
p.z=p.x.h(0,"posAttr")
p.Q=H.h(p.y.u(0,"txtCount"),"$iae")
p.ch=H.h(p.y.u(0,"backClr"),"$iby")
p.cx=H.b([],[A.af])
p.cy=H.b([],[A.M])
u=[A.aP]
p.db=H.b([],u)
p.dx=H.b([],u)
p.dy=H.b([],u)
p.fr=H.b([],u)
p.fx=H.b([],[A.ae])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iaf"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iM"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iaP"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iaP"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iaP"))
u=p.fr
s=p.y
r="destSize"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iaP"))
u=p.fx
s=p.y
r="flip"+t
q=s.h(0,r)
if(q==null)H.o(P.m(o+r+n))
u.push(H.h(q,"$iae"))}}}
A.dl.prototype={}
A.hX.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
u:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ae.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hV.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.L.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.aP.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.by.prototype={
dC:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hY.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.bb.prototype={
X:function(a){var u=new Float32Array(H.bA(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.M.prototype={
X:function(a){var u=new Float32Array(H.bA(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.af.prototype={
dD:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.R.prototype={
c9:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.iP.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bX(s.b,b).bX(s.d.bX(s.c,b),c)
a.sa9(0,new V.O(r.a,r.b,r.c))
a.shq(r.v(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
u=new V.aI(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.z(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a2()}}}
F.j4.prototype={
$1:function(a){return new V.O(Math.cos(a),Math.sin(a),0)}}
F.iV.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jI(n.$1(o),m)
m=J.jI(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.y(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.C(m)))
n=$.ki
if(n==null){n=new V.y(1,0,0)
$.ki=n
t=n}else t=n
n=u.au(!J.z(u,t)?V.kk():t)
s=n.v(0,Math.sqrt(n.C(n)))
n=s.au(u)
t=n.v(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.t(0,n*m)
m=s.t(0,q*m)
a.sa9(0,l.B(0,new V.O(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aX.prototype={
aX:function(){var u=this
if(!u.gaY()){C.a.E(u.a.a.d.b,u)
u.a.a.a2()}u.by()
u.bz()
u.fj()},
bC:function(a){this.a=a
a.d.b.push(this)},
bD:function(a){this.b=a
a.d.c.push(this)},
fp:function(a){this.c=a
a.d.d.push(this)},
by:function(){var u=this.a
if(u!=null){C.a.E(u.d.b,this)
this.a=null}},
bz:function(){var u=this.b
if(u!=null){C.a.E(u.d.c,this)
this.b=null}},
fj:function(){var u=this.c
if(u!=null){C.a.E(u.d.d,this)
this.c=null}},
gaY:function(){return this.a==null||this.b==null||this.c==null},
e_:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ca()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.de())return
return s.v(0,Math.sqrt(s.C(s)))},
e1:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.C(r)))
r=t.L(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.au(r.v(0,Math.sqrt(r.C(r))))
return r.v(0,Math.sqrt(r.C(r)))},
bG:function(){var u,t=this
if(t.d!=null)return!0
u=t.e_()
if(u==null){u=t.e1()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
dZ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ca()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.de())return
return s.v(0,Math.sqrt(s.C(s)))},
e0:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.L(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.L(0,g).t(0,p).B(0,g).L(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.C(l)))
l=o.au(q)
l=l.v(0,Math.sqrt(l.C(l))).au(o)
q=l.v(0,Math.sqrt(l.C(l)))}return q},
bF:function(){var u,t=this
if(t.e!=null)return!0
u=t.dZ()
if(u==null){u=t.e0()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
gfI:function(a){var u=this
if(J.z(u.a,u.b))return!0
if(J.z(u.b,u.c))return!0
if(J.z(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u,t,s=this
if(s.gaY())return a+"disposed"
u=a+C.d.af(J.a7(s.a.e),0)+", "+C.d.af(J.a7(s.b.e),0)+", "+C.d.af(J.a7(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.D("")}}
F.f0.prototype={}
F.hn.prototype={
b_:function(a,b,c){var u,t=b.a
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
F.bS.prototype={
aX:function(){var u=this
if(!u.gaY()){C.a.E(u.a.a.c.b,u)
u.a.a.a2()}u.by()
u.bz()},
bC:function(a){this.a=a
a.c.b.push(this)},
bD:function(a){this.b=a
a.c.c.push(this)},
by:function(){var u=this.a
if(u!=null){C.a.E(u.c.b,this)
this.a=null}},
bz:function(){var u=this.b
if(u!=null){C.a.E(u.c.c,this)
this.b=null}},
gaY:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){if(this.gaY())return a+"disposed"
return a+C.d.af(J.a7(this.a.e),0)+", "+C.d.af(J.a7(this.b.e),0)},
M:function(){return this.D("")}}
F.fk.prototype={}
F.hS.prototype={
b_:function(a,b,c){var u,t=b.a
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
F.c0.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.d.af(J.a7(u.e),0)},
M:function(){return this.D("")}}
F.hg.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.B():u},
bZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.q()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.l(0,r.fM())}h.a.q()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.c0()
if(n.a==null)H.o(P.m("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.A(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.lc(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bN(l,k,i)}g=h.e
if(g!=null)g.ao(0)},
aj:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aj()||!1
if(!t.a.aj())u=!1
s=t.e
if(s!=null)s.ao(0)
return u},
aH:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aH()||!1
if(!t.a.aH())u=!1
s=t.e
if(s!=null)s.ao(0)
return u},
bf:function(){var u=this.e
if(u!=null)++u.d
this.a.bf()
u=this.e
if(u!=null)u.ao(0)
return!0},
h1:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aS(o,0)])
for(o=[F.bc];u.length!==0;){t=C.a.gfW(u)
C.a.c3(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b_(0,t,q)){s.push(q)
C.a.c3(u,r)}}if(s.length>1)b.bZ(s)}}p.a.q()
p.c.c4()
p.d.c4()
p.b.hi()
p.c.c5(new F.hS())
p.d.c5(new F.hn())
o=p.e
if(o!=null)o.ao(0)},
aU:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.U()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.ai().a)!==0)++s
if((t&$.ah().a)!==0)++s
if((t&$.ax().a)!==0)++s
if((t&$.aj().a)!==0)++s
if((t&$.cr().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.bG().a)!==0)++s
if((t&$.aT().a)!==0)++s
r=a4.gca(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cy])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fG(m)
k=l.gca(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cy(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].h_(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bA(p)),35044)
u.bindBuffer(a1,null)
c=new Z.ay(new Z.dr(a1,d),o,a4)
c.b=H.b([],[Z.bq])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)}a=Z.jv(u,34963,b)
c.b.push(new Z.bq(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.q()
b.push(t.e)}a=Z.jv(u,34963,b)
c.b.push(new Z.bq(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.q()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.q()
b.push(t.e)}a=Z.jv(u,34963,b)
c.b.push(new Z.bq(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.t])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.D(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.D(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.D(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.D(t))}return C.a.p(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.A(null)}}
F.hh.prototype={
fE:function(a){var u,t,s,r,q=H.b([],[F.aX]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.bN(p,s,r))}return q},
fF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aX])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.d(c,s)
m=c[s];++s
if(s>=n)return H.d(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.d(c,k)
j=c[k]
if(t<0||t>=n)return H.d(c,t)
i=c[t]
n=u.a
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.bN(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bN(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bN(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bN(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
c5:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b_(0,p,n)){p.aX()
break}}}}},
c4:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gfI(s)
if(t)s.aX()}},
aj:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bG())s=!1
return s},
aH:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bF())s=!1
return s},
i:function(a){return this.M()},
D:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(a))
return C.a.p(r,"\n")},
M:function(){return this.D("")}}
F.hi.prototype={
gj:function(a){return this.b.length},
c5:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b_(0,p,n)){p.aX()
break}}}}},
c4:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.z(s.a,s.b)
if(t)s.aX()}},
i:function(a){return this.M()},
D:function(a){var u,t,s=H.b([],[P.t]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].D(a+(""+u+". ")))}return C.a.p(s,"\n")},
M:function(){return this.D("")}}
F.hj.prototype={
gj:function(a){return this.b.length},
hi:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.E(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.A(null)}s=t.a
if(s!=null){C.a.E(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
D:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(a))
return C.a.p(r,"\n")},
M:function(){return this.D("")}}
F.bc.prototype={
bI:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.i8(u.cx,r,o,t,s,q,p,a,n)},
fM:function(){return this.bI(null)},
sa9:function(a,b){var u
if(!J.z(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
shq:function(a){var u
if(!J.z(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
h_:function(a){var u,t,s=this
if(a.n(0,$.U())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.ai())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.ah())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.ax())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.aj())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cr())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cs())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bG()))return H.b([s.ch],[P.J])
else if(a.n(0,$.aT())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bG:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ca()
t.d.K(0,new F.ik(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
bF:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ca()
t.d.K(0,new F.ij(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u,t,s=this,r="-",q=H.b([],[P.t])
q.push(C.d.af(J.a7(s.e),0))
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
q.push(V.E(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.p(q,", ")
return a+"{"+t+"}"},
M:function(){return this.D("")}}
F.ik.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.ij.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.i9.prototype={
q:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.m("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a2()
return!0},
be:function(a,b,c,d,e,f){var u=F.i8(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
aj:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bG()
return!0},
aH:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bF()
return!0},
bf:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.M()},
D:function(a){var u,t,s,r
this.q()
u=H.b([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].D(a))
return C.a.p(u,"\n")},
M:function(){return this.D("")}}
F.ia.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
K:function(a,b){var u=this
C.a.K(u.b,b)
C.a.K(u.c,new F.ib(u,b))
C.a.K(u.d,new F.ic(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.p(r,"\n")}}
F.ib.prototype={
$1:function(a){if(!J.z(a.a,this.a))this.b.$1(a)}}
F.ic.prototype={
$1:function(a){var u=this.a
if(!J.z(a.a,u)&&!J.z(a.b,u))this.b.$1(a)}}
F.id.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.p(r,"\n")}}
F.ig.prototype={}
F.ie.prototype={
b_:function(a,b,c){return J.z(b.f,c.f)}}
F.ih.prototype={}
F.fW.prototype={
bZ:function(a){var u,t,s,r,q,p,o,n,m=V.ca()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.y(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.v(0,Math.sqrt(m.C(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.v(0,Math.sqrt(p*p+o*o+n*n))}if(!J.z(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.A(null)}}}return}}
F.ii.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.p(r,"\n")}}
O.eO.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.B():u},
W:function(){var u=this.r
if(u!=null)u.A(null)},
scW:function(a){if(this.b!=a){this.b=a
this.W()}},
scT:function(a){if(this.c!=a){this.c=a
this.W()}},
scS:function(a){var u=a==null?V.ap():a
this.f=u
if(!J.z(u,a)){this.f=a
this.W()}},
a7:function(a,b){},
a1:function(a,b){if(b!=null)if(!C.a.O(a,b)){b.a=a.length
a.push(b)}},
b3:function(a,b){var u,t,s,r,q,p,o=this,n="Distort"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.eP(t,n)
u.aP(t,n)
u.aZ(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
u.z=u.x.h(0,"posAttr")
u.Q=u.x.h(0,"txt2DAttr")
u.ch=H.h(u.y.u(0,"projViewObjMat"),"$iM")
u.cx=H.h(u.y.u(0,"colorTxt2DMat"),"$ibb")
u.cy=H.h(u.y.u(0,"bumpTxt2DMat"),"$ibb")
u.db=H.h(u.y.u(0,"colorTxt"),"$iaf")
u.dx=H.h(u.y.u(0,"bumpTxt"),"$iaf")
u.dy=H.h(u.y.u(0,"bumpMat"),"$iM")
a.aT(u)}o.a=u}if(b.e==null){t=b.d
s=$.U()
r=$.ax()
r=t.aU(new Z.bd(a.a),new Z.a5(s.a|r.a))
r.a5($.U()).e=o.a.z.c
r.a5($.ax()).e=o.a.Q.c
b.e=r}q=H.b([],[T.b7])
o.a1(q,o.b)
o.a1(q,o.c)
for(p=0;p<q.length;++p)q[p].H(a)
t=o.a
t.H(a)
s=o.b
t.cG(t.db,s)
s=o.c
t.cG(t.dx,s)
s=a.gc1()
r=t.ch
r.toString
r.X(s.T(0,!0))
s=o.d
r=t.cx
r.toString
r.X(s.T(0,!0))
s=o.e
r=t.cy
r.toString
r.X(s.T(0,!0))
s=o.f
t=t.dy
t.toString
t.X(s.T(0,!0))
t=b.e
if(t instanceof Z.ay){t.H(a)
t.a6(a)
t.a3(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.aW()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(3553,null)}}}}
O.cU.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.B():u},
F:function(a){var u=this.fr
if(u!=null)u.A(a)},
W:function(){return this.F(null)},
cz:function(a){this.a=null
this.F(a)},
fn:function(){return this.cz(null)},
eq:function(a,b){var u=new D.aZ()
u.b=!0
this.F(u)},
es:function(a,b){var u=new D.b_()
u.b=!0
this.F(u)},
cn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.G(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gam()
o=u.h(0,q.gam())
u.k(0,p,o==null?1:o)}n=H.b([],[A.cw])
u.K(0,new O.fz(g,n))
C.a.aO(n,new O.fA())
m=new H.G(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],[A.cE])
m.K(0,new O.fB(g,l))
C.a.aO(l,new O.fC())
k=new H.G(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gam()
o=k.h(0,q.gam())
k.k(0,p,o==null?1:o)}j=H.b([],[A.d2])
k.K(0,new O.fD(g,j))
C.a.aO(j,new O.fE())
i=new H.G(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.n)(f),++r){q=f[r]
s=q.gam()
p=i.h(0,q.gam())
i.k(0,s,p==null?1:p)}h=H.b([],[A.d9])
i.K(0,new O.fF(g,h))
C.a.aO(h,new O.fG())
f=C.c.a4(g.e.a.length+3,4)
g.dy.e
return A.li(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a1:function(a,b){},
a7:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.Z(u,u.length);u.w();){t=u.d
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
if(q!=null){s=q.bm(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bm(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bm(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
b3:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cn()
u=b2.fr.h(0,b1.av)
if(u==null){u=A.lh(b1,b2.a)
b2.aT(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bh
b1=b3.e
if(!(b1 instanceof Z.ay))b1=b3.e=null
if(b1==null||!b1.d.n(0,s)){b1=t.k4
if(b1)b3.d.aj()
r=t.r1
if(r)b3.d.aH()
q=t.rx
if(q)b3.d.bf()
p=b3.d.aU(new Z.bd(b2.a),s)
p.a5($.U()).e=b0.a.Q.c
if(b1)p.a5($.ai()).e=b0.a.cx.c
if(r)p.a5($.ah()).e=b0.a.ch.c
if(t.r2)p.a5($.ax()).e=b0.a.cy.c
if(q)p.a5($.aj()).e=b0.a.db.c
if(t.ry)p.a5($.aT()).e=b0.a.dx.c
b3.e=p}o=H.b([],[T.b7])
b0.a.H(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga0(r)
b1=b1.dy
b1.toString
b1.X(r.T(0,!0))}if(t.fx){b1=b0.a
r=b2.gdv()
b1=b1.fr
b1.toString
b1.X(r.T(0,!0))}b1=b0.a
r=b2.gc1()
b1=b1.fy
b1.toString
b1.X(r.T(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga0(r)
b1=b1.fx
b1.toString
b1.X(r.T(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.X(C.k.T(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.X(C.k.T(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.X(C.k.T(r,!0))}if(t.bg>0){n=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,n)
for(m=0;m<n;++m){b1=b0.a
r=b0.e.a
if(m>=r.length)return H.d(r,m)
r=r[m]
b1=b1.r1
if(m>=b1.length)return H.d(b1,m)
b1=b1[m]
l=new Float32Array(H.bA(r.T(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,l)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a1(o,b0.f.e)
b1=b0.a
r=b0.f.e
b1.ac(b1.ry,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a1(o,b0.r.e)
b1=b0.a
r=b0.r.e
b1.ac(b1.y1,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a1(o,b0.x.e)
b1=b0.a
r=b0.x.e
b1.ac(b1.av,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bh
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a1(o,b0.y.e)
b1=b0.a
r=b0.y.e
b1.ac(b1.d_,r)}b1=t.e
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
k=b0.z.ch
q=q.d2
q.a.uniform1f(q.d,k)}if(r){r=b0.a
q=b0.z.f
r=r.d0
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a1(o,b0.z.e)
b1=b0.a
r=b0.z.e
b1.ac(b1.d1,r)}b1=t.z
if(b1.length>0){r=P.v
j=new H.G([r,r])
for(r=b0.dx.e,q=r.length,i=0;i<r.length;r.length===q||(0,H.n)(r),++i){h=r[i]
g=h.gam()
f=j.h(0,g)
if(f==null)f=0
j.k(0,g,f+1)
e=J.ct(b0.a.bL.h(0,g),f)
k=h.ghx()
d=$.ar
k=k.b5(d==null?$.ar=new V.O(0,0,0):d)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.ghC()
d=$.ar
k=k.b5(d==null?$.ar=new V.O(0,0,0):d)
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gaJ(h)
d=e.d
d.a.uniform3f(d.d,k.a,k.b,k.c)
if(h.gcZ()){k=h.gcM()
d=e.e
d.a.uniform1f(d.d,k)
k=h.gcN()
d=e.f
d.a.uniform1f(d.d,k)
k=h.gcO()
d=e.r
d.a.uniform1f(d.d,k)}}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.n)(b1),++i){q=b1[i].a
n=j.h(0,q)
if(n==null)n=0
q=b0.a.bK.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga0(r)
r=P.v
b=new H.G([r,r])
for(r=b0.dx.f,q=r.length,i=0;i<r.length;r.length===q||(0,H.n)(r),++i){h=r[i]
f=b.h(0,0)
if(f==null)f=0
b.k(0,0,f+1)
e=J.ct(b0.a.bN.h(0,0),f)
k=c.bm(h.a)
d=k.a
a=k.b
a0=k.c
a0=k.v(0,Math.sqrt(d*d+a*a+a0*a0))
a=e.e
d=a0.a
k=a0.b
a0=a0.c
a.a.uniform3f(a.d,d,k,a0)
a0=h.c
k=e.f
k.a.uniform3f(k.d,a0.a,a0.b,a0.c)}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.n)(b1),++i){q=b1[i].a
n=b.h(0,q)
if(n==null)n=0
q=b0.a.bM.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga0(r)
r=P.v
a1=new H.G([r,r])
for(r=b0.dx.r,q=r.length,i=0;i<r.length;r.length===q||(0,H.n)(r),++i){h=r[i]
g=h.gam()
f=a1.h(0,g)
if(f==null)f=0
a1.k(0,g,f+1)
e=J.ct(b0.a.bP.h(0,g),f)
a2=c.t(0,h.ga0(h))
k=h.ga0(h)
d=$.ar
k=k.b5(d==null?$.ar=new V.O(0,0,0):d)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=$.ar
k=a2.b5(k==null?$.ar=new V.O(0,0,0):k)
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gaJ(h)
d=e.e
d.a.uniform3f(d.d,k.a,k.b,k.c)
h.gaA()
k=a2.bU(0)
d=k.a
a=k.b
a0=k.c
a3=k.e
a4=k.f
a5=k.r
a6=k.y
a7=k.z
k=k.Q
a8=e.d
a8.toString
l=new Float32Array(H.bA(new V.bW(d,a,a0,a3,a4,a5,a6,a7,k).T(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,l)
h.gaA()
k=h.gaA()
if(!C.a.O(o,k)){k.sbT(0,o.length)
o.push(k)}k=h.gaA()
d=k.gbY(k)
if(d){d=e.f
d.toString
a=k.d
if(a<6)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}h.gaN()
k=h.gdE()
d=e.x
d.toString
a=k.gfR(k)
a0=k.gfS(k)
a3=k.gfT()
k=k.gfQ()
d.a.uniform4f(d.d,a,a0,a3,k)
k=h.gaN()
if(!C.a.O(o,k)){k.sbT(0,o.length)
o.push(k)}k=h.gaN()
d=k.gbY(k)
if(d){d=e.r
d.toString
a=k.d
if(a<6)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}if(h.gcZ()){k=h.gcM()
d=e.y
d.a.uniform1f(d.d,k)
k=h.gcN()
d=e.z
d.a.uniform1f(d.d,k)
k=h.gcO()
d=e.Q
d.a.uniform1f(d.d,k)}}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.n)(b1),++i){q=b1[i].a
n=a1.h(0,q)
if(n==null)n=0
q=b0.a.bO.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga0(r)
r=P.v
a9=new H.G([r,r])
for(r=b0.dx.x,q=r.length,i=0;i<r.length;r.length===q||(0,H.n)(r),++i){h=r[i]
g=h.gam()
f=a9.h(0,g)
if(f==null)f=0
a9.k(0,g,f+1)
e=J.ct(b0.a.bR.h(0,g),f)
k=h.ghg(h)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.ghA(h).hM()
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=c.b5(h.ghg(h))
d=e.d
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gaJ(h)
d=e.e
d.a.uniform3f(d.d,k.a,k.b,k.c)
h.gaA()
k=h.ghP()
d=e.f
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gc6(h)
d=e.r
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.ghN()
d=e.x
d.a.uniform1f(d.d,k)
k=h.ghO()
d=e.y
d.a.uniform1f(d.d,k)
h.gaA()
k=h.gaA()
if(!C.a.O(o,k)){k.sbT(0,o.length)
o.push(k)}k=h.gaA()
d=k.gbY(k)
if(d){d=e.dx
d.toString
a=k.d
if(!a)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}h.gaN()
k=h.gdE()
d=e.z
d.toString
a=k.gfR(k)
a0=k.gfS(k)
a3=k.gfT()
k=k.gfQ()
d.a.uniform4f(d.d,a,a0,a3,k)
k=h.gaN()
if(!C.a.O(o,k)){k.sbT(0,o.length)
o.push(k)}k=h.gaN()
d=k.gbY(k)
if(d){d=e.dy
d.toString
a=k.d
if(!a)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}if(h.ghB()){k=h.ghz()
d=e.Q
d.a.uniform1f(d.d,k)
k=h.ghy()
d=e.ch
d.a.uniform1f(d.d,k)}if(h.gcZ()){k=h.gcM()
d=e.cx
d.a.uniform1f(d.d,k)
k=h.gcN()
d=e.cy
d.a.uniform1f(d.d,k)
k=h.gcO()
d=e.db
d.a.uniform1f(d.d,k)}}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.n)(b1),++i){q=b1[i].a
n=a9.h(0,q)
if(n==null)n=0
q=b0.a.bQ.h(0,q)
q.a.uniform1i(q.d,n)}}}if(t.f.c){b0.a1(o,b0.Q.e)
b1=b0.a
r=b0.Q.e
b1.ac(b1.d3,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga0(r).bU(0)}b1=b1.id
b1.toString
b1.X(r.T(0,!0))}if(t.db){b0.a1(o,b0.ch)
b1=b0.a
r=b0.ch
b1.ac(b1.d4,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.d5
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a1(o,b0.cx.e)
b1=b0.a
r=b0.cx.e
b1.ac(b1.d6,r)}b1=t.x
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
k=b0.cy.ch
q=q.d7
q.a.uniform1f(q.d,k)}if(r){r=b0.a
q=b0.cy.f
r=r.d8
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a1(o,b0.cy.e)
b1=b0.a
r=b0.cy.e
b1.ac(b1.d9,r)}}b1=t.y
r=b1.a
q=!r
if(q)k=b1.c
else k=!0
if(k){if(r){r=b0.a
k=b0.db.f
r=r.da
r.a.uniform1f(r.d,k)}if(b1.c){b0.a1(o,b0.db.e)
r=b0.a
k=b0.db.e
r.ac(r.dc,k)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(m=0;m<o.length;++m)o[m].H(b2)
r=b3.e
r.H(b2)
r.a6(b2)
r.a3(b2)
if(q)b1=b1.c
else b1=!0
if(b1)b2.a.disable(3042)
for(m=0;m<o.length;++m)o[m].a3(b2)
b1=b0.a
b1.toString
b2.a.useProgram(null)
b1.x.aW()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cn().av}}
O.fz.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cw(a,C.c.a4(b+3,4)*4))}}
O.fA.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fB.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cE(a,C.c.a4(b+3,4)*4))}}
O.fC.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fD.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d2(a,C.c.a4(b+3,4)*4))}}
O.fE.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d9(a,C.c.a4(b+3,4)*4))}}
O.fG.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.ft.prototype={
as:function(){var u,t=this
t.cd()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.r(t.b,u,1)
u.b=!0
t.a.F(u)}}}
O.cV.prototype={
as:function(){},
cE:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.as()
u=s.a
u.a=null
u.F(null)}}}
O.fu.prototype={}
O.an.prototype={
cD:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.r(s.b+".color",u,a)
t.b=!0
s.a.F(t)}},
as:function(){this.cd()
this.cD(new V.P(1,1,1))},
saJ:function(a,b){this.cE(new A.S(!0,!1,this.c.c))
this.cD(b)}}
O.fw.prototype={}
O.fx.prototype={
as:function(){var u,t=this
t.ce()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.r(t.b+".refraction",u,1)
u.b=!0
t.a.F(u)}}}
O.fy.prototype={
cF:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.r(u.b+".shininess",t,a)
t.b=!0
u.a.F(t)}},
as:function(){this.ce()
this.cF(100)}}
O.d_.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.B():u},
F:function(a){var u=this.r
if(u!=null)u.A(a)},
W:function(){return this.F(null)},
cB:function(a){},
cC:function(a){var u,t=this,s=t.f
if(s!=a){if(s!=null)s.gm().E(0,t.gaa())
u=t.f
t.f=a
if(a!=null)a.gm().l(0,t.gaa())
s=new D.r("bumpyTextureCube",u,t.f)
s.b=!0
t.F(s)}},
a1:function(a,b){if(b!=null)if(!C.a.O(a,b)){b.a=a.length
a.push(b)}},
a7:function(a,b){},
b3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="varying vec3 txtCube;\n",h=j.a
if(h==null){h=A.jZ(j.d)
u=h.e
t=a.fr.h(0,u)
if(t==null){s=a.a
t=new A.fV(s,u)
t.aP(s,u)
t.z=h
u=h.d
s=(u?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat4 txtCubeMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n")+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
r=h.b
if(r)s+="attribute vec3 binmAttr;\n"
s=(u?s+"attribute vec3 txtCubeAttr;\n":s)+"\nvarying vec3 normalVec;\n"
if(r)s+="varying vec3 binormalVec;\n"
s=(u?s+i:s)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(r)s+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
s=(u?s+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":s)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
r=r?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
r=(u?r+i:r)+"\n"
if(h.a.c)r+="uniform samplerCube bumpTxt;\n"
r+="\nvec3 normal()\n{\n"
h=h.a
q=h.a
if(!q)p=h.c
else p=!0
if(!p||q)r+="   return normalize(normalVec);\n"
else r+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"
r+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
t.aZ(0,s.charCodeAt(0)==0?s:s,r.charCodeAt(0)==0?r:r)
t.Q=t.x.h(0,"posAttr")
t.cx=t.x.h(0,"normAttr")
t.ch=t.x.h(0,"binmAttr")
t.cy=t.x.h(0,"txt2DAttr")
t.db=t.x.h(0,"txtCubeAttr")
t.dx=H.h(t.y.u(0,"viewObjMat"),"$iM")
t.dy=H.h(t.y.u(0,"projViewObjMat"),"$iM")
if(u)t.fx=H.h(t.y.u(0,"txtCubeMat"),"$iM")
if(h.c)t.go=H.h(t.y.u(0,"bumpTxt"),"$iR")
a.aT(t)}h=j.a=t
b.e=null}o=h.z
n=o.f
h=b.e
if(!(h instanceof Z.ay))h=b.e=null
if(h==null||!h.d.n(0,n)){b.d.aj()
h=o.b
if(h)b.d.aH()
u=o.d
if(u)b.d.bf()
m=b.d.aU(new Z.bd(a.a),n)
m.a5($.U()).e=j.a.Q.c
m.a5($.ai()).e=j.a.cx.c
if(h)m.a5($.ah()).e=j.a.ch.c
if(u)m.a5($.aj()).e=j.a.db.c
b.e=m}l=H.b([],[T.b7])
j.a.H(a)
h=j.a
u=a.gdv()
h=h.dx
h.toString
h.X(u.T(0,!0))
u=j.a
h=a.gc1()
u=u.dy
u.toString
u.X(h.T(0,!0))
if(o.d){h=j.a
u=j.c
h=h.fx
h.toString
h.X(u.T(0,!0))}if(o.a.c){j.a1(l,j.f)
h=j.a
u=j.f
h=h.go
if(u!=null&&u.d>=6)h.c9(u)}for(k=0;k<l.length;++k)l[k].H(a)
h=b.e
h.H(a)
h.a6(a)
h.a3(a)
for(h=a.a,k=0;k<l.length;++k){u=l[k]
if(u.c){u.c=!1
h.activeTexture(33984+u.a)
h.bindTexture(34067,null)}}u=j.a
u.toString
h.useProgram(null)
u.x.aW()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return A.jZ(this.d).e}}
O.d7.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.B():u},
F:function(a){var u=this.e
if(u!=null)u.A(a)},
W:function(){return this.F(null)},
a7:function(a,b){},
b3:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.ho(t,n)
u.aP(t,n)
u.aZ(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"fov"),"$iL")
u.ch=H.h(u.y.h(0,"ratio"),"$iL")
u.cx=H.h(u.y.h(0,"boxClr"),"$iC")
u.cy=H.h(u.y.h(0,"boxTxt"),"$iR")
u.db=H.h(u.y.h(0,"viewMat"),"$iM")
a.aT(u)}o.a=u}if(b.e==null){t=b.d.aU(new Z.bd(a.a),$.U())
t.a5($.U()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.H(a)}t=a.d
s=a.c
r=o.a
r.H(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.c9(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga0(s).bU(0)
r=r.db
r.toString
r.X(s.T(0,!0))
t=b.e
if(t instanceof Z.ay){t.H(a)
t.a6(a)
t.a3(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.aW()
t=o.c
if(t!=null)t.a3(a)}}
O.dd.prototype={}
O.de.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.B():u},
F:function(a){var u=this.e
if(u!=null)u.A(a)},
W:function(){return this.F(null)},
eH:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaa(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.aW()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.W()},
eJ:function(a,b){var u,t
for(u=b.gP(b),t=this.gaa();u.w();)u.gI(u).gm().E(0,t)
this.W()},
scQ:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.r("blend",u,a)
u.b=!0
this.F(u)}},
a7:function(a,b){},
ea:function(a){a=C.c.a4(a+3,4)*4
if(a<=0)return 4
return a},
b3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.ea(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.c.i(u.a)
s=a.fr.h(0,t)
if(s==null){s=A.lB(i,u,a.a)
a.aT(s)}j.b=s
u=s}if(b.e==null){u=b.d.aU(new Z.bd(a.a),$.U())
t=u.a5($.U())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.H(a)
q=H.b([],[T.b7])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.a.O(q,u)){u.a=q.length
q.push(u)}u=j.b
t=n.a
u=u.cx
if(p>=u.length)return H.d(u,p)
u=u[p]
r=t==null||!t.d
m=u.a
u=u.d
if(r)m.uniform1i(u,0)
else m.uniform1i(u,t.a)
u=j.b
t=n.b
u=u.cy
if(p>=u.length)return H.d(u,p)
u=u[p]
if(t==null){t=$.fH
if(t==null){t=new V.ao(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fH=t}}l=new Float32Array(H.bA(t.T(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.c4
if(t==null){t=V.c3(0,0,1,1)
$.c4=t
k=t}else k=t}t=u.db
if(p>=t.length)return H.d(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.dx
if(p>=u.length)return H.d(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
k=n.d
u.toString
if(k==null){t=$.c4
if(t==null){t=V.c3(0,0,1,1)
$.c4=t
k=t}else k=t}t=u.dy
if(p>=t.length)return H.d(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.fr
if(p>=u.length)return H.d(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
t=n.e
u=u.fx
if(p>=u.length)return H.d(u,p)
u=u[p]
t=t?1:0
u.a.uniform1i(u.d,t);++p}}u=j.b.Q
u.a.uniform1i(u.d,p)
u=j.b
t=j.a
u.ch.dC(t)
for(o=0;o<q.length;++o)q[o].H(a)
u=b.e
if(u instanceof Z.ay){u.H(a)
u.a6(a)
u.a3(a)}else b.e=null
u=j.b
u.toString
t=a.a
t.useProgram(null)
u.x.aW()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}}}
O.b8.prototype={
F:function(a){var u=this.f
if(u!=null)u.A(a)},
W:function(){return this.F(null)}}
T.b7.prototype={}
T.hD.prototype={}
T.hE.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.B():u},
H:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.hF.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.B():u},
H:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a3:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hH.prototype={
df:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.hF()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aF(u,k,r,34069,!1,!1)
t.aF(u,k,o,34070,!1,!1)
t.aF(u,k,q,34071,!1,!1)
t.aF(u,k,n,34072,!1,!1)
t.aF(u,k,p,34073,!1,!1)
t.aF(u,k,m,34074,!1,!1)
return u},
h0:function(a){return this.df(a,".png")},
aF:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.T(u,"load",new T.hI(this,u,!1,b,!1,d,a),!1)},
fo:function(a,b,c){var u,t,s,r
b=V.cp(b)
u=V.cp(a.width)
t=V.cp(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jb()
s.width=u
s.height=t
r=C.f.dz(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mt(r.getImageData(0,0,s.width,s.height))}}}
T.hI.prototype={
$1:function(a){var u=this,t=u.a,s=t.fo(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.u.hp(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.bJ()}++t.e}}
X.ew.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.B():u},
a_:function(a){var u=this.fr
if(u!=null)u.A(a)},
sah:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.r("width",u,b)
u.b=!0
t.a_(u)}},
sad:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.r("height",u,b)
u.b=!0
t.a_(u)}},
H:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.t()
h.sah(0,C.c.Y(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.t()
h.sad(0,C.c.Y(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.cp(s)
o=V.cp(r)
q=V.cp(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.u.ds(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.k7(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.bJ()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.bJ()
t=h.ch
s=t.b
h.z=s
h.c=t.r
h.d=t.x
u.bindTexture(f,s)
t=u.createRenderbuffer()
h.Q=t
u.bindRenderbuffer(e,t)
u.renderbufferStorage(e,33189,h.c,h.d)
t=u.createFramebuffer()
h.y=t
u.bindFramebuffer(d,t)
u.framebufferTexture2D(d,36064,f,h.z,0)
u.framebufferRenderbuffer(d,36096,e,h.Q)
u.bindTexture(f,g)
u.bindRenderbuffer(e,g)
u.bindFramebuffer(d,g)}u=a.a
u.bindFramebuffer(d,h.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=h.dy
s=t.c
a.c=C.b.Y(s*h.a)
r=t.d
a.d=C.b.Y(r*h.b)
l=t.a
k=h.c
j=C.b.Y(l*k)
t=t.b
l=h.d
u.viewport(j,C.b.Y(t*l),C.b.Y(s*k),C.b.Y(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
a3:function(a){a.a.bindFramebuffer(36160,null)}}
X.ja.prototype={}
X.f8.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.B():u},
H:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.u(u)
q=C.b.Y(r*u)
r=s.b
if(typeof t!=="number")return H.u(t)
p=C.b.Y(r*t)
r=C.b.Y(s.c*u)
a.c=r
s=C.b.Y(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
a3:function(a){}}
X.fa.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.B():u},
H:function(a){var u
a.cy.bk(V.ap())
u=V.ap()
a.db.bk(u)},
a3:function(a){a.cy.ay()
a.db.ay()}}
X.d1.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.B():u},
a_:function(a){var u=this.f
if(u!=null)u.A(a)},
dW:function(){return this.a_(null)},
sb0:function(a){var u,t,s=this
if(!J.z(s.b,a)){u=s.b
if(u!=null)u.gm().E(0,s.gcj())
t=s.b
s.b=a
if(a!=null)a.gm().l(0,s.gcj())
u=new D.r("mover",t,s.b)
u.b=!0
s.a_(u)}},
H:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aD(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bk(k)
r=$.k1
if(r==null){r=V.k3()
q=V.ju()
p=$.kh
r=V.jW(r,q,p==null?$.kh=new V.y(0,0,-1):p)
$.k1=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aM(0,a,s)
if(t!=null)u=t.t(0,u)}a.db.bk(u)},
a3:function(a){a.cy.ay()
a.db.ay()}}
X.hz.prototype={}
V.j2.prototype={
$1:function(a){var u=C.b.dt(this.a.gfX(),2)
if(u!=="0.00")P.jF(u+" fps")}}
V.hk.prototype={
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
W.T(q,"scroll",new V.hm(o),!1)},
cL:function(a){var u,t,s,r,q,p,o,n
this.fs()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fZ(a),s.toString,r=new H.N(r),r=new P.ci(s.du(new H.bT(r,r.gj(r))).a());r.w();){s=r.gI(r)
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
if(H.kB(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.lQ(C.N,s,C.q,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+n
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
fs:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hL()
t=P.t
u.a=new H.G([t,L.db])
u.b=new H.G([t,L.di])
u.c=P.jT(t)
u.d=u.N(0,q)
t=u.N(0,q).p(0,p)
s=K.W(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.N(0,p).p(0,p)
s=new K.aF()
r=[K.cT]
s.a=H.b([],r)
t.a.push(s)
t=K.W(new H.N("*"))
s.a.push(t)
t=u.N(0,p).p(0,"BoldEnd")
s=K.W(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.N(0,q).p(0,o)
s=K.W(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.N(0,o).p(0,o)
s=new K.aF()
s.a=H.b([],r)
t.a.push(s)
t=K.W(new H.N("_"))
s.a.push(t)
t=u.N(0,o).p(0,n)
s=K.W(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.N(0,q).p(0,m)
s=K.W(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.N(0,m).p(0,m)
s=new K.aF()
s.a=H.b([],r)
t.a.push(s)
t=K.W(new H.N("`"))
s.a.push(t)
t=u.N(0,m).p(0,"CodeEnd")
s=K.W(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.N(0,q).p(0,l)
s=K.W(new H.N("["))
t.a.push(s)
t.c=!0
t=u.N(0,l).p(0,k)
s=K.W(new H.N("|"))
t.a.push(s)
s=u.N(0,l).p(0,j)
t=K.W(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.N(0,l).p(0,l)
t=new K.aF()
t.a=H.b([],r)
s.a.push(t)
s=K.W(new H.N("|]"))
t.a.push(s)
s=u.N(0,k).p(0,j)
t=K.W(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.N(0,k).p(0,k)
t=new K.aF()
t.a=H.b([],r)
s.a.push(t)
s=K.W(new H.N("|]"))
t.a.push(s)
u.N(0,q).p(0,i).a.push(new K.eo())
s=u.N(0,i).p(0,i)
t=new K.aF()
t.a=H.b([],r)
s.a.push(t)
s=K.W(new H.N("*_`["))
t.a.push(s)
s=u.N(0,"BoldEnd")
s.d=s.a.b4(p)
s=u.N(0,n)
s.d=s.a.b4(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b4(m)
s=u.N(0,j)
s.d=s.a.b4("Link")
s=u.N(0,i)
s.d=s.a.b4(i)
this.b=u}}
V.hm.prototype={
$1:function(a){P.ka(C.j,new V.hl(this.a))}}
V.hl.prototype={
$0:function(){var u=C.b.Y(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.a.prototype
u.dI=u.i
u=J.cO.prototype
u.dJ=u.i
u=K.cK.prototype
u.dH=u.aL
u.cc=u.i
u=O.cV.prototype
u.cd=u.as
u=O.an.prototype
u.ce=u.as})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"lT","la",20)
t(P,"mn","lH",6)
t(P,"mo","lI",6)
t(P,"mp","lJ",6)
s(P,"ks","ml",9)
var m
r(m=E.aA.prototype,"gdn",0,0,null,["$1","$0"],["dq","h8"],0,0)
r(m,"gdl",0,0,null,["$1","$0"],["dm","h7"],0,0)
r(m,"gdj",0,0,null,["$1","$0"],["dk","h4"],0,0)
q(m,"gh2","h3",3)
q(m,"gh5","h6",3)
r(m=E.df.prototype,"gcf",0,0,null,["$1","$0"],["ci","cg"],0,0)
p(m,"ghl","dr",9)
o(m=X.dn.prototype,"geK","eL",4)
o(m,"geu","ev",4)
o(m,"geA","eB",2)
o(m,"geO","eP",10)
o(m,"geM","eN",10)
o(m,"geS","eT",2)
o(m,"geW","eX",2)
o(m,"geE","eF",2)
o(m,"geU","eV",2)
o(m,"geC","eD",2)
o(m,"geY","eZ",18)
o(m,"gf_","f0",4)
o(m,"gff","fg",5)
o(m,"gfb","fc",5)
o(m,"gfd","fe",5)
r(D.bo.prototype,"gdQ",0,0,null,["$1","$0"],["aq","dR"],0,0)
r(m=D.cQ.prototype,"gcu",0,0,null,["$1","$0"],["cv","eQ"],0,0)
o(m,"gf1","f2",19)
q(m,"gen","eo",11)
q(m,"gf5","f6",11)
n(V.K.prototype,"gj","bW",12)
n(V.y.prototype,"gj","bW",12)
r(m=U.bO.prototype,"gb8",0,0,null,["$1","$0"],["S","ak"],0,0)
q(m,"gdS","dT",13)
q(m,"gf3","f4",13)
r(m=U.dp.prototype,"gb8",0,0,null,["$1","$0"],["S","ak"],0,0)
o(m,"gef","eg",1)
o(m,"geh","ei",1)
o(m,"gej","ek",1)
o(m,"geb","ec",1)
o(m,"ged","ee",1)
o(m,"gfB","fC",1)
o(m,"gfz","fA",1)
o(m,"gfv","fw",1)
o(U.dq.prototype,"gel","em",1)
r(m=M.cA.prototype,"gU",0,0,null,["$1","$0"],["V","aQ"],0,0)
q(m,"gf7","f8",14)
q(m,"gf9","fa",14)
r(M.cC.prototype,"gU",0,0,null,["$1","$0"],["V","aQ"],0,0)
r(m=M.cH.prototype,"gU",0,0,null,["$1","$0"],["V","aQ"],0,0)
q(m,"gew","ex",3)
q(m,"gey","ez",3)
r(m=O.cU.prototype,"gaa",0,0,null,["$1","$0"],["F","W"],0,0)
r(m,"gfm",0,0,null,["$1","$0"],["cz","fn"],0,0)
q(m,"gep","eq",15)
q(m,"ger","es",15)
r(O.d_.prototype,"gaa",0,0,null,["$1","$0"],["F","W"],0,0)
r(O.d7.prototype,"gaa",0,0,null,["$1","$0"],["F","W"],0,0)
r(m=O.de.prototype,"gaa",0,0,null,["$1","$0"],["F","W"],0,0)
q(m,"geG","eH",16)
q(m,"geI","eJ",16)
r(O.b8.prototype,"gaa",0,0,null,["$1","$0"],["F","W"],0,0)
r(X.d1.prototype,"gcj",0,0,null,["$1","$0"],["a_","dW"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.jl,J.a,J.Z,P.dJ,P.j,H.bT,P.fd,H.cI,H.i0,H.hQ,P.bp,H.bK,H.e_,P.a1,H.fl,H.fm,H.ff,P.e5,P.bz,P.ci,P.ds,P.dc,P.hx,P.dg,P.iO,P.iH,P.iC,P.dI,P.q,P.eC,P.iN,P.bg,P.a9,P.a6,P.aV,P.h0,P.da,P.dB,P.f7,P.b3,P.bU,P.b5,P.t,P.aM,W.eJ,W.H,W.cJ,P.ea,P.iD,K.eo,K.cK,K.cT,K.hf,L.db,L.dh,L.di,L.hL,O.az,O.bX,E.ey,E.aA,E.bl,E.bu,E.dA,E.h7,E.df,Z.dr,Z.bd,Z.ay,Z.bq,Z.a5,D.eB,D.aW,D.Q,X.cz,X.cP,X.fi,X.fp,X.ac,X.fO,X.hM,X.dn,D.ex,D.bo,D.a0,D.h3,D.hr,V.P,V.a_,V.eY,V.bW,V.ao,V.Y,V.O,V.aI,V.d4,V.K,V.y,U.dp,U.dq,M.cC,M.cH,M.ad,A.cv,A.er,A.S,A.cw,A.cE,A.d2,A.d9,A.fv,A.c5,A.c6,A.c7,A.c8,A.fX,A.bn,A.dl,A.hX,F.aX,F.f0,F.bS,F.fk,F.c0,F.hg,F.hh,F.hi,F.hj,F.bc,F.i9,F.ia,F.id,F.ig,F.ih,F.ii,O.dd,O.cV,O.fw,O.b8,T.hH,X.hz,X.ja,X.fa,X.d1,V.hk])
s(J.a,[J.fe,J.cN,J.cO,J.b0,J.bR,J.br,H.c_,W.e,W.en,W.cx,W.am,W.F,W.du,W.a8,W.eN,W.eQ,W.dw,W.cG,W.dy,W.eS,W.i,W.dC,W.aC,W.f9,W.dE,W.aY,W.fo,W.fI,W.dK,W.dL,W.aE,W.dM,W.dP,W.aG,W.dT,W.dV,W.aK,W.dW,W.aL,W.e0,W.at,W.e3,W.hK,W.aO,W.e6,W.hO,W.i2,W.eb,W.ed,W.ef,W.eh,W.ej,P.b2,P.dG,P.b6,P.dR,P.h5,P.e1,P.b9,P.e8,P.es,P.dt,P.d5,P.dY])
s(J.cO,[J.h1,J.c9,J.b1])
t(J.jk,J.b0)
s(J.bR,[J.cM,J.cL])
t(P.fn,P.dJ)
s(P.fn,[H.dm,W.iu,W.it,P.f3])
t(H.N,H.dm)
s(P.j,[H.p,H.bV,H.im,P.fc])
t(H.eV,H.bV)
s(P.fd,[H.cS,H.io])
s(P.bp,[H.fY,H.fh,H.i_,H.eA,H.hd,P.d0,P.ak,P.i1,P.hZ,P.ht,P.eG,P.eM])
s(H.bK,[H.j5,H.hA,H.fg,H.iY,H.iZ,H.j_,P.iq,P.ip,P.ir,P.is,P.iM,P.iL,P.iT,P.iF,P.iG,P.fr,P.eT,P.eU,W.fK,W.fM,W.hc,W.hw,W.ix,P.iU,P.f4,P.f5,P.eu,E.h8,E.h9,E.ha,E.hJ,D.eZ,D.f_,F.iP,F.j4,F.iV,F.ik,F.ij,F.ib,F.ic,O.fz,O.fA,O.fB,O.fC,O.fD,O.fE,O.fF,O.fG,T.hI,V.j2,V.hm,V.hl])
s(H.hA,[H.hu,H.bI])
t(P.fq,P.a1)
t(H.G,P.fq)
t(H.bt,H.p)
t(H.cW,H.c_)
s(H.cW,[H.cc,H.ce])
t(H.cd,H.cc)
t(H.bZ,H.cd)
t(H.cf,H.ce)
t(H.cX,H.cf)
s(H.cX,[H.fP,H.fQ,H.fR,H.fS,H.fT,H.cY,H.fU])
t(P.iK,P.fc)
t(P.iE,P.iO)
t(P.iB,P.iH)
t(P.eH,P.hx)
t(P.eW,P.eC)
t(P.i3,P.eW)
t(P.i4,P.eH)
s(P.a6,[P.J,P.v])
s(P.ak,[P.bw,P.fb])
s(W.e,[W.D,W.f2,W.aJ,W.cg,W.aN,W.au,W.cj,W.il,W.cb,P.ev,P.bk])
s(W.D,[W.V,W.aU])
s(W.V,[W.l,P.k])
s(W.l,[W.ep,W.eq,W.bm,W.f6,W.bQ,W.he])
t(W.eI,W.am)
t(W.bM,W.du)
s(W.a8,[W.eK,W.eL])
t(W.dx,W.dw)
t(W.cF,W.dx)
t(W.dz,W.dy)
t(W.eR,W.dz)
t(W.aB,W.cx)
t(W.dD,W.dC)
t(W.f1,W.dD)
t(W.dF,W.dE)
t(W.bP,W.dF)
t(W.ba,W.i)
s(W.ba,[W.bs,W.aq,W.bx])
t(W.fJ,W.dK)
t(W.fL,W.dL)
t(W.dN,W.dM)
t(W.fN,W.dN)
t(W.dQ,W.dP)
t(W.cZ,W.dQ)
t(W.dU,W.dT)
t(W.h2,W.dU)
t(W.hb,W.dV)
t(W.ch,W.cg)
t(W.hp,W.ch)
t(W.dX,W.dW)
t(W.hq,W.dX)
t(W.hv,W.e0)
t(W.e4,W.e3)
t(W.hB,W.e4)
t(W.ck,W.cj)
t(W.hC,W.ck)
t(W.e7,W.e6)
t(W.hN,W.e7)
t(W.be,W.aq)
t(W.ec,W.eb)
t(W.iv,W.ec)
t(W.dv,W.cG)
t(W.ee,W.ed)
t(W.iy,W.ee)
t(W.eg,W.ef)
t(W.dO,W.eg)
t(W.ei,W.eh)
t(W.iI,W.ei)
t(W.ek,W.ej)
t(W.iJ,W.ek)
t(W.iw,P.dc)
t(P.a4,P.iD)
t(P.dH,P.dG)
t(P.fj,P.dH)
t(P.dS,P.dR)
t(P.fZ,P.dS)
t(P.e2,P.e1)
t(P.hy,P.e2)
t(P.e9,P.e8)
t(P.hP,P.e9)
t(P.et,P.dt)
t(P.h_,P.bk)
t(P.dZ,P.dY)
t(P.hs,P.dZ)
s(K.cK,[K.aF,L.dk])
s(E.ey,[Z.cy,A.d6,T.b7])
s(D.Q,[D.aZ,D.b_,D.r,X.h4])
s(X.h4,[X.cR,X.b4,X.bY,X.dj])
s(O.az,[D.cQ,U.bO,M.cA])
s(D.eB,[U.eF,U.aa])
t(U.cB,U.aa)
s(A.d6,[A.eP,A.fs,A.fV,A.ho,A.hG])
s(A.dl,[A.ae,A.hU,A.hV,A.hW,A.hT,A.L,A.aP,A.C,A.by,A.hY,A.bb,A.M,A.af,A.R])
t(F.hn,F.f0)
t(F.hS,F.fk)
t(F.ie,F.ig)
t(F.fW,F.ih)
s(O.dd,[O.eO,O.cU,O.d_,O.d7,O.de])
s(O.cV,[O.ft,O.fu,O.an])
s(O.an,[O.fx,O.fy])
s(T.b7,[T.hD,T.hF])
t(T.hE,T.hD)
s(X.hz,[X.ew,X.f8])
u(H.dm,H.i0)
u(H.cc,P.q)
u(H.cd,H.cI)
u(H.ce,P.q)
u(H.cf,H.cI)
u(P.dJ,P.q)
u(W.du,W.eJ)
u(W.dw,P.q)
u(W.dx,W.H)
u(W.dy,P.q)
u(W.dz,W.H)
u(W.dC,P.q)
u(W.dD,W.H)
u(W.dE,P.q)
u(W.dF,W.H)
u(W.dK,P.a1)
u(W.dL,P.a1)
u(W.dM,P.q)
u(W.dN,W.H)
u(W.dP,P.q)
u(W.dQ,W.H)
u(W.dT,P.q)
u(W.dU,W.H)
u(W.dV,P.a1)
u(W.cg,P.q)
u(W.ch,W.H)
u(W.dW,P.q)
u(W.dX,W.H)
u(W.e0,P.a1)
u(W.e3,P.q)
u(W.e4,W.H)
u(W.cj,P.q)
u(W.ck,W.H)
u(W.e6,P.q)
u(W.e7,W.H)
u(W.eb,P.q)
u(W.ec,W.H)
u(W.ed,P.q)
u(W.ee,W.H)
u(W.ef,P.q)
u(W.eg,W.H)
u(W.eh,P.q)
u(W.ei,W.H)
u(W.ej,P.q)
u(W.ek,W.H)
u(P.dG,P.q)
u(P.dH,W.H)
u(P.dR,P.q)
u(P.dS,W.H)
u(P.e1,P.q)
u(P.e2,W.H)
u(P.e8,P.q)
u(P.e9,W.H)
u(P.dt,P.a1)
u(P.dY,P.q)
u(P.dZ,W.H)})()
var v={mangledGlobalNames:{v:"int",J:"double",a6:"num",t:"String",bg:"bool",b5:"Null",b3:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Q]},{func:1,ret:-1,args:[D.Q]},{func:1,ret:-1,args:[W.aq]},{func:1,ret:-1,args:[P.v,[P.j,E.aA]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bx]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b5,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bs]},{func:1,ret:-1,args:[P.v,[P.j,D.a0]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.v,[P.j,U.aa]]},{func:1,ret:-1,args:[P.v,[P.j,M.ad]]},{func:1,ret:-1,args:[P.v,[P.j,V.ao]]},{func:1,ret:-1,args:[P.v,[P.j,O.b8]]},{func:1,ret:P.b5,args:[,]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.bg,args:[[P.j,D.a0]]},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bm.prototype
C.K=J.a.prototype
C.a=J.b0.prototype
C.L=J.cL.prototype
C.c=J.cM.prototype
C.k=J.cN.prototype
C.b=J.bR.prototype
C.d=J.br.prototype
C.M=J.b1.prototype
C.t=J.h1.prototype
C.u=P.d5.prototype
C.l=J.c9.prototype
C.v=W.be.prototype
C.w=W.cb.prototype
C.x=new E.bl("Browser.chrome")
C.m=new E.bl("Browser.firefox")
C.n=new E.bl("Browser.edge")
C.y=new E.bl("Browser.other")
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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

C.F=new P.h0()
C.q=new P.i3()
C.G=new P.i4()
C.e=new P.iE()
C.h=new A.bn(0,"ColorBlendType.Overwrite")
C.H=new A.bn(1,"ColorBlendType.Additive")
C.I=new A.bn(2,"ColorBlendType.Average")
C.i=new A.bn(3,"ColorBlendType.AlphaBlend")
C.j=new P.aV(0)
C.J=new P.aV(5e6)
C.N=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.O=new E.bu("OperatingSystem.windows")
C.r=new E.bu("OperatingSystem.mac")
C.P=new E.bu("OperatingSystem.linux")
C.Q=new E.bu("OperatingSystem.other")
C.R=new P.bz(null,2)})();(function staticFields(){$.al=0
$.bJ=null
$.jK=null
$.kw=null
$.kr=null
$.kz=null
$.iW=null
$.j0=null
$.jD=null
$.bB=null
$.cm=null
$.cn=null
$.jx=!1
$.ag=C.e
$.a3=[]
$.eX=null
$.jV=null
$.fH=null
$.k2=null
$.ar=null
$.c4=null
$.kg=null
$.kj=null
$.ki=null
$.i5=null
$.i6=null
$.i7=null
$.kh=null
$.k1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mU","kG",function(){return H.ku("_$dart_dartClosure")})
u($,"mV","jG",function(){return H.ku("_$dart_js")})
u($,"mW","kH",function(){return H.av(H.hR({
toString:function(){return"$receiver$"}}))})
u($,"mX","kI",function(){return H.av(H.hR({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mY","kJ",function(){return H.av(H.hR(null))})
u($,"mZ","kK",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n1","kN",function(){return H.av(H.hR(void 0))})
u($,"n2","kO",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n0","kM",function(){return H.av(H.kc(null))})
u($,"n_","kL",function(){return H.av(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n4","kQ",function(){return H.av(H.kc(void 0))})
u($,"n3","kP",function(){return H.av(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nh","jH",function(){return P.lG()})
u($,"nj","kU",function(){return P.lu("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nb","kT",function(){return Z.ab(0)})
u($,"n5","kR",function(){return Z.ab(511)})
u($,"nd","U",function(){return Z.ab(1)})
u($,"nc","ai",function(){return Z.ab(2)})
u($,"n7","ah",function(){return Z.ab(4)})
u($,"ne","ax",function(){return Z.ab(8)})
u($,"nf","aj",function(){return Z.ab(16)})
u($,"n8","cr",function(){return Z.ab(32)})
u($,"n9","cs",function(){return Z.ab(64)})
u($,"na","kS",function(){return Z.ab(96)})
u($,"ng","bG",function(){return Z.ab(128)})
u($,"n6","aT",function(){return Z.ab(256)})
u($,"mT","kF",function(){return new V.eY(1e-9)})
u($,"mS","A",function(){return $.kF()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c_,ArrayBufferView:H.c_,Float32Array:H.bZ,Float64Array:H.bZ,Int16Array:H.fP,Int32Array:H.fQ,Int8Array:H.fR,Uint16Array:H.fS,Uint32Array:H.fT,Uint8ClampedArray:H.cY,CanvasPixelArray:H.cY,Uint8Array:H.fU,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.en,HTMLAnchorElement:W.ep,HTMLAreaElement:W.eq,Blob:W.cx,HTMLCanvasElement:W.bm,CDATASection:W.aU,CharacterData:W.aU,Comment:W.aU,ProcessingInstruction:W.aU,Text:W.aU,CSSPerspective:W.eI,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bM,MSStyleCSSProperties:W.bM,CSS2Properties:W.bM,CSSImageValue:W.a8,CSSKeywordValue:W.a8,CSSNumericValue:W.a8,CSSPositionValue:W.a8,CSSResourceValue:W.a8,CSSUnitValue:W.a8,CSSURLImageValue:W.a8,CSSStyleValue:W.a8,CSSMatrixComponent:W.am,CSSRotation:W.am,CSSScale:W.am,CSSSkew:W.am,CSSTranslation:W.am,CSSTransformComponent:W.am,CSSTransformValue:W.eK,CSSUnparsedValue:W.eL,DataTransferItemList:W.eN,DOMException:W.eQ,ClientRectList:W.cF,DOMRectList:W.cF,DOMRectReadOnly:W.cG,DOMStringList:W.eR,DOMTokenList:W.eS,Element:W.V,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aB,FileList:W.f1,FileWriter:W.f2,HTMLFormElement:W.f6,Gamepad:W.aC,History:W.f9,HTMLCollection:W.bP,HTMLFormControlsCollection:W.bP,HTMLOptionsCollection:W.bP,ImageData:W.aY,HTMLImageElement:W.bQ,KeyboardEvent:W.bs,Location:W.fo,MediaList:W.fI,MIDIInputMap:W.fJ,MIDIOutputMap:W.fL,MimeType:W.aE,MimeTypeArray:W.fN,PointerEvent:W.aq,MouseEvent:W.aq,DragEvent:W.aq,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cZ,RadioNodeList:W.cZ,Plugin:W.aG,PluginArray:W.h2,RTCStatsReport:W.hb,HTMLSelectElement:W.he,SourceBuffer:W.aJ,SourceBufferList:W.hp,SpeechGrammar:W.aK,SpeechGrammarList:W.hq,SpeechRecognitionResult:W.aL,Storage:W.hv,CSSStyleSheet:W.at,StyleSheet:W.at,TextTrack:W.aN,TextTrackCue:W.au,VTTCue:W.au,TextTrackCueList:W.hB,TextTrackList:W.hC,TimeRanges:W.hK,Touch:W.aO,TouchEvent:W.bx,TouchList:W.hN,TrackDefaultList:W.hO,CompositionEvent:W.ba,FocusEvent:W.ba,TextEvent:W.ba,UIEvent:W.ba,URL:W.i2,VideoTrackList:W.il,WheelEvent:W.be,Window:W.cb,DOMWindow:W.cb,CSSRuleList:W.iv,ClientRect:W.dv,DOMRect:W.dv,GamepadList:W.iy,NamedNodeMap:W.dO,MozNamedAttrMap:W.dO,SpeechRecognitionResultList:W.iI,StyleSheetList:W.iJ,SVGLength:P.b2,SVGLengthList:P.fj,SVGNumber:P.b6,SVGNumberList:P.fZ,SVGPointList:P.h5,SVGStringList:P.hy,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.b9,SVGTransformList:P.hP,AudioBuffer:P.es,AudioParamMap:P.et,AudioTrackList:P.ev,AudioContext:P.bk,webkitAudioContext:P.bk,BaseAudioContext:P.bk,OfflineAudioContext:P.h_,WebGL2RenderingContext:P.d5,SQLResultSetRowList:P.hs})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.bZ.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(S.kx,[])
else S.kx([])})})()
//# sourceMappingURL=test.dart.js.map
