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
a[c]=function(){a[c]=function(){H.n6(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jO(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jA:function jA(){},
lv:function(a,b,c,d){if(!!a.$in)return new H.f0(a,b,[c,d])
return new H.bY(a,b,[c,d])},
ln:function(){return new P.di("No element")},
lR:function(a,b){var u=J.bf(a)
if(typeof u!=="number")return u.A()
H.de(a,0,u-1,b)},
de:function(a,b,c,d){if(c-b<=32)H.lQ(a,b,c,d)
else H.lP(a,b,c,d)},
lQ:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.es(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a1()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
lP:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.Y(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.Y(a4+a5,2),f=g-j,e=g+j,d=J.es(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a1
a1=a0
a0=u}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.L(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a4()
if(p<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a1()
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
if(typeof l!=="number")return l.a4()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a1()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a1()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a4()
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
H.de(a3,a4,t-2,a6)
H.de(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.L(a6.$2(d.h(a3,t),b),0);)++t
for(;J.L(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a4()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.de(a3,t,s,a6)}else H.de(a3,t,s,a6)},
O:function O(a){this.a=a},
n:function n(){},
bW:function bW(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bY:function bY(a,b,c){this.a=a
this.b=b
this.$ti=c},
f0:function f0(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b){this.a=null
this.b=a
this.c=b},
ih:function ih(a,b,c){this.a=a
this.b=b
this.$ti=c},
ii:function ii(a,b){this.a=a
this.b=b},
cP:function cP(){},
hZ:function hZ(){},
dt:function dt(){},
cv:function(a){var u,t=H.n7(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mP:function(a){return v.types[a]},
mU:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iy},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aa(a)
if(typeof u!=="string")throw H.c(H.aM(a))
return u},
c5:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c6:function(a){return H.lA(a)+H.kA(H.bE(a),0,null)},
lA:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.D||!!n.$ice){r=C.l(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cv(t.length>1&&C.d.bs(t,0)===36?C.d.az(t,1):t)},
ki:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lK:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aM(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.b8(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aM(s))}return H.ki(r)},
lJ:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aM(s))
if(s<0)throw H.c(H.aM(s))
if(s>65535)return H.lK(a)}return H.ki(a)},
lI:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.b8(u,10))>>>0,56320|u&1023)}throw H.c(P.aE(a,0,1114111,null,null))},
br:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lH:function(a){var u=H.br(a).getFullYear()+0
return u},
lF:function(a){var u=H.br(a).getMonth()+1
return u},
lB:function(a){var u=H.br(a).getDate()+0
return u},
lC:function(a){var u=H.br(a).getHours()+0
return u},
lE:function(a){var u=H.br(a).getMinutes()+0
return u},
lG:function(a){var u=H.br(a).getSeconds()+0
return u},
lD:function(a){var u=H.br(a).getMilliseconds()+0
return u},
u:function(a){throw H.c(H.aM(a))},
f:function(a,b){if(a==null)J.bf(a)
throw H.c(H.bC(a,b))},
bC:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,s,null)
u=J.bf(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.J(b,a,s,null,u)
return P.d9(b,s)},
mJ:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bs(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bs(a,c,!0,b,"end",u)
return new P.aj(!0,b,"end",null)},
aM:function(a){return new P.aj(!0,a,null,null)},
mF:function(a){if(typeof a!=="number")throw H.c(H.aM(a))
return a},
c:function(a){var u
if(a==null)a=new P.c3()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kQ})
u.name=""}else u.toString=H.kQ
return u},
kQ:function(){return J.aa(this.dartException)},
p:function(a){throw H.c(a)},
m:function(a){throw H.c(P.bM(a))},
at:function(a){var u,t,s,r,q,p
a=H.kO(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hO(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hP:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ks:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kd:function(a,b){return new H.fX(a,b==null?null:b.method)},
jB:function(a,b){var u=b==null,t=u?null:b.method
return new H.fl(a,t,u?null:b.receiver)},
aP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jl(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.b8(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jB(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kd(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kT()
q=$.kU()
p=$.kV()
o=$.kW()
n=$.kZ()
m=$.l_()
l=$.kY()
$.kX()
k=$.l1()
j=$.l0()
i=r.ac(u)
if(i!=null)return f.$1(H.jB(u,i))
else{i=q.ac(u)
if(i!=null){i.method="call"
return f.$1(H.jB(u,i))}else{i=p.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=n.ac(u)
if(i==null){i=m.ac(u)
if(i==null){i=l.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=k.ac(u)
if(i==null){i=j.ac(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kd(u,i))}}return f.$1(new H.hY(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dg()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aj(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dg()
return a},
bF:function(a){var u
if(a==null)return new H.e6(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e6(a)},
mM:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
mT:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
aN:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mT)
a.$identity=u
return u},
lh:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hs().constructor.prototype):Object.create(new H.bJ(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ak
if(typeof t!=="number")return t.C()
$.ak=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.k_(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ld(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.k_(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ld:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mP,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jZ:H.jo
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
le:function(a,b,c,d){var u=H.jo
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k_:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lg(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.le(t,!r,u,b)
if(t===0){r=$.ak
if(typeof r!=="number")return r.C()
$.ak=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bK
return new Function(r+H.e(q==null?$.bK=H.eJ("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ak
if(typeof r!=="number")return r.C()
$.ak=r+1
o+=r
r="return function("+o+"){return this."
q=$.bK
return new Function(r+H.e(q==null?$.bK=H.eJ("self"):q)+"."+H.e(u)+"("+o+");}")()},
lf:function(a,b,c,d){var u=H.jo,t=H.jZ
switch(b?-1:a){case 0:throw H.c(H.lN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lg:function(a,b){var u,t,s,r,q,p,o,n=$.bK
if(n==null)n=$.bK=H.eJ("self")
u=$.jY
if(u==null)u=$.jY=H.eJ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lf(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ak
if(typeof u!=="number")return u.C()
$.ak=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ak
if(typeof u!=="number")return u.C()
$.ak=u+1
return new Function(n+u+"}")()},
jO:function(a,b,c,d,e,f,g){return H.lh(a,b,c,d,!!e,!!f,g)},
jo:function(a){return a.a},
jZ:function(a){return a.c},
eJ:function(a){var u,t,s,r=new H.bJ("self","target","receiver","name"),q=J.jy(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
n_:function(a,b){throw H.c(H.lc(a,H.cv(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.n_(a,b)},
kI:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
jP:function(a,b){var u
if(typeof a=="function")return!0
u=H.kI(J.Q(a))
if(u==null)return!1
return H.kz(u,null,b,null)},
lc:function(a,b){return new H.eK("CastError: "+P.jv(a)+": type '"+H.e(H.mB(a))+"' is not a subtype of type '"+b+"'")},
mB:function(a){var u,t=J.Q(a)
if(!!t.$ibL){u=H.kI(t)
if(u!=null)return H.n0(u)
return"Closure"}return H.c6(a)},
n6:function(a){throw H.c(new P.eU(a))},
lN:function(a){return new H.hb(a)},
kJ:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bE:function(a){if(a==null)return
return a.$ti},
nE:function(a,b,c){return H.bG(a["$a"+H.e(c)],H.bE(b))},
mO:function(a,b,c,d){var u=H.bG(a["$a"+H.e(c)],H.bE(b))
return u==null?null:u[d]},
jS:function(a,b,c){var u=H.bG(a["$a"+H.e(b)],H.bE(a))
return u==null?null:u[c]},
ag:function(a,b){var u=H.bE(a)
return u==null?null:u[b]},
n0:function(a){return H.bb(a,null)},
bb:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cv(a[0].name)+H.kA(a,1,b)
if(typeof a=="function")return H.cv(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.e(b[t])}if('func' in a)return H.m7(a,b)
if('futureOr' in a)return"FutureOr<"+H.bb("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m7:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.t])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.d.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.R)p+=" extends "+H.bb(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bb(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bb(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bb(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mL(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bb(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kA:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aI("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bb(p,c)}return"<"+u.i(0)+">"},
bG:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
j7:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bE(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.kG(H.bG(t[d],u),null,c,null)},
kG:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.af(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.af(a[t],b,c[t],d))return!1
return!0},
nC:function(a,b,c){return a.apply(b,H.bG(J.Q(b)["$a"+H.e(c)],H.bE(b)))},
af:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.af(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.af(b[a],b,c,d)
if(typeof c==="number")return!1
if(a.name==="a6")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.af("type" in a?a.type:l,b,s,d)
else if(H.af(a,b,s,d))return!0
else{if(!('$i'+"aY" in t.prototype))return!1
r=t.prototype["$a"+"aY"]
q=H.bG(r,u?a.slice(1):l)
return H.af(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.kz(a,b,c,d)
if('func' in a)return c.name==="nb"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kG(H.bG(m,u),b,p,d)},
kz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.af(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.af(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.af(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.af(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mX(h,b,g,d)},
mX:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.af(c[s],d,a[s],b))return!1}return!0},
nD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mV:function(a){var u,t,s,r,q=$.kK.$1(a),p=$.j9[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.je[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kF.$2(a,q)
if(q!=null){p=$.j9[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.je[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jh(u)
$.j9[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.je[q]=u
return u}if(s==="-"){r=H.jh(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kM(a,u)
if(s==="*")throw H.c(P.kt(q))
if(v.leafTags[q]===true){r=H.jh(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kM(a,u)},
kM:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jU(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jh:function(a){return J.jU(a,!1,null,!!a.$iy)},
mW:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jh(u)
else return J.jU(u,c,null,null)},
mR:function(){if(!0===$.jT)return
$.jT=!0
H.mS()},
mS:function(){var u,t,s,r,q,p,o,n
$.j9=Object.create(null)
$.je=Object.create(null)
H.mQ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kN.$1(q)
if(p!=null){o=H.mW(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mQ:function(){var u,t,s,r,q,p,o=C.u()
o=H.bB(C.v,H.bB(C.w,H.bB(C.m,H.bB(C.m,H.bB(C.x,H.bB(C.y,H.bB(C.z(C.l),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kK=new H.jb(r)
$.kF=new H.jc(q)
$.kN=new H.jd(p)},
bB:function(a,b){return a(b)||b},
lq:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.fb("Illegal RegExp pattern ("+String(p)+")",a))},
n3:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mK:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kO:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kP:function(a,b,c){var u=H.n4(a,b,c)
return u},
n4:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kO(b),'g'),H.mK(c))},
hO:function hO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fX:function fX(a,b){this.a=a
this.b=b},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a){this.a=a},
jl:function jl(a){this.a=a},
e6:function e6(a){this.a=a
this.b=null},
bL:function bL(){},
hy:function hy(){},
hs:function hs(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a){this.a=a},
hb:function hb(a){this.a=a},
G:function G(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fk:function fk(a){this.a=a},
fo:function fo(a,b){this.a=a
this.b=b
this.c=null},
bp:function bp(a,b){this.a=a
this.$ti=b},
fp:function fp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
fj:function fj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cr:function(a){return a},
av:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bC(b,a))},
m6:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mJ(a,b,c))
return b},
c2:function c2(){},
d2:function d2(){},
c1:function c1(){},
d3:function d3(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
d4:function d4(){},
fW:function fW(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
mL:function(a){return J.k4(a?Object.keys(a):[],null)},
n7:function(a){return v.mangledGlobalNames[a]},
mY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ja:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jT==null){H.mR()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.kt("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jW()]
if(r!=null)return r
r=H.mV(a)
if(r!=null)return r
if(typeof a=="function")return C.E
u=Object.getPrototypeOf(a)
if(u==null)return C.p
if(u===Object.prototype)return C.p
if(typeof s=="function"){Object.defineProperty(s,$.jW(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
lo:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ey(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aE(a,0,4294967295,"length",null))
return J.k4(new Array(a),b)},
k4:function(a,b){return J.jy(H.b(a,[b]))},
jy:function(a){a.fixed$length=Array
return a},
lp:function(a,b){return J.cz(a,b)},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cT.prototype
return J.cS.prototype}if(typeof a=="string")return J.bn.prototype
if(a==null)return J.cU.prototype
if(typeof a=="boolean")return J.fi.prototype
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.R)return a
return J.ja(a)},
es:function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.R)return a
return J.ja(a)},
jQ:function(a){if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.R)return a
return J.ja(a)},
mN:function(a){if(typeof a=="number")return J.bU.prototype
if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.ce.prototype
return a},
jR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.R)return a
return J.ja(a)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).n(a,b)},
cy:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.es(a).h(a,b)},
l6:function(a,b,c){return J.jR(a).fI(a,b,c)},
l7:function(a,b,c,d){return J.jR(a).fX(a,b,c,d)},
cz:function(a,b){return J.mN(a).aJ(a,b)},
jn:function(a,b){return J.jQ(a).E(a,b)},
l8:function(a,b){return J.jQ(a).I(a,b)},
bI:function(a){return J.Q(a).gH(a)},
be:function(a){return J.jQ(a).gN(a)},
bf:function(a){return J.es(a).gj(a)},
l9:function(a,b){return J.jR(a).hK(a,b)},
aa:function(a){return J.Q(a).i(a)},
a:function a(){},
fi:function fi(){},
cU:function cU(){},
cV:function cV(){},
h0:function h0(){},
ce:function ce(){},
b2:function b2(){},
b1:function b1(a){this.$ti=a},
jz:function jz(a){this.$ti=a},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bU:function bU(){},
cT:function cT(){},
cS:function cS(){},
bn:function bn(){}},P={
lW:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mC()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.aN(new P.il(s),1)).observe(u,{childList:true})
return new P.ik(s,u,t)}else if(self.setImmediate!=null)return P.mD()
return P.mE()},
lX:function(a){self.scheduleImmediate(H.aN(new P.im(a),0))},
lY:function(a){self.setImmediate(H.aN(new P.io(a),0))},
lZ:function(a){P.jH(C.h,a)},
jH:function(a,b){var u=C.c.Y(a.a,1000)
return P.m3(u<0?0:u,b)},
kr:function(a,b){var u=C.c.Y(a.a,1000)
return P.m4(u<0?0:u,b)},
m3:function(a,b){var u=new P.ec()
u.ea(a,b)
return u},
m4:function(a,b){var u=new P.ec()
u.eb(a,b)
return u},
nA:function(a){return new P.by(a,1)},
m_:function(){return C.G},
m0:function(a){return new P.by(a,3)},
ma:function(a,b){return new P.iX(a,[b])},
kx:function(a,b){var u,t,s
b.a=1
try{a.dH(new P.iA(b),new P.iB(b),P.a6)}catch(s){u=H.aP(s)
t=H.bF(s)
P.n1(new P.iC(b,u,t))}},
iz:function(a,b){var u,t
for(;u=a.a,u===2;)a=a.c
if(u>=4){t=b.b6()
b.a=a.a
b.c=a.c
P.bx(b,t)}else{t=b.c
b.a=2
b.c=a
a.cN(t)}},
bx:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null,i={},h=i.a=a
for(;!0;){u={}
t=h.a===8
if(b==null){if(t){s=h.c
P.j5(j,j,h.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.bx(i.a,b)}h=i.a
q=h.c
u.a=t
u.b=q
s=!t
if(s){p=b.c
p=(p&1)!==0||(p&15)===8}else p=!0
if(p){p=b.b
o=p.b
if(t){n=h.b===o
n=!(n||n)}else n=!1
if(n){P.j5(j,j,h.b,q.a,q.b)
return}m=$.M
if(m!==o)$.M=o
else m=j
h=b.c
if((h&15)===8)new P.iH(i,u,b,t).$0()
else if(s){if((h&1)!==0)new P.iG(u,b,q).$0()}else if((h&2)!==0)new P.iF(i,u,b).$0()
if(m!=null)$.M=m
h=u.b
if(!!J.Q(h).$iaY){if(h.a>=4){l=p.c
p.c=null
b=p.b7(l)
p.a=h.a
p.c=h.c
i.a=h
continue}else P.iz(h,p)
return}}k=b.b
l=k.c
k.c=null
b=k.b7(l)
h=u.a
s=u.b
if(!h){k.a=4
k.c=s}else{k.a=8
k.c=s}i.a=k
h=k}},
mx:function(a,b){if(H.jP(a,{func:1,args:[P.R,P.b6]}))return a
if(H.jP(a,{func:1,args:[P.R]}))return a
throw H.c(P.ey(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mw:function(){var u,t
for(;u=$.bz,u!=null;){$.ct=null
t=u.b
$.bz=t
if(t==null)$.cs=null
u.a.$0()}},
mA:function(){$.jM=!0
try{P.mw()}finally{$.ct=null
$.jM=!1
if($.bz!=null)$.jX().$1(P.kH())}},
kD:function(a){var u=new P.dA(a)
if($.bz==null){$.bz=$.cs=u
if(!$.jM)$.jX().$1(P.kH())}else $.cs=$.cs.b=u},
mz:function(a){var u,t,s=$.bz
if(s==null){P.kD(a)
$.ct=$.cs
return}u=new P.dA(a)
t=$.ct
if(t==null){u.b=s
$.bz=$.ct=u}else{u.b=t.b
$.ct=t.b=u
if(u.b==null)$.cs=u}},
n1:function(a){var u=null,t=$.M
if(C.e===t){P.bA(u,u,C.e,a)
return}P.bA(u,u,t,t.bH(a))},
kq:function(a,b){var u=$.M
if(u===C.e)return P.jH(a,b)
return P.jH(a,u.bH(b))},
lT:function(a,b){var u=$.M
if(u===C.e)return P.kr(a,b)
return P.kr(a,u.d_(b,P.dn))},
j5:function(a,b,c,d,e){var u={}
u.a=d
P.mz(new P.j6(u,e))},
kB:function(a,b,c,d){var u,t=$.M
if(t===c)return d.$0()
$.M=c
u=t
try{t=d.$0()
return t}finally{$.M=u}},
kC:function(a,b,c,d,e){var u,t=$.M
if(t===c)return d.$1(e)
$.M=c
u=t
try{t=d.$1(e)
return t}finally{$.M=u}},
my:function(a,b,c,d,e,f){var u,t=$.M
if(t===c)return d.$2(e,f)
$.M=c
u=t
try{t=d.$2(e,f)
return t}finally{$.M=u}},
bA:function(a,b,c,d){var u=C.e!==c
if(u)d=!(!u||!1)?c.bH(d):c.h0(d)
P.kD(d)},
il:function il(a){this.a=a},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ec:function ec(){this.c=0},
iZ:function iZ(a,b){this.a=a
this.b=b},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by:function by(a,b){this.a=a
this.b=b},
cn:function cn(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iX:function iX(a,b){this.a=a
this.$ti=b},
ir:function ir(){},
ij:function ij(a,b){this.a=a
this.$ti=b},
iv:function iv(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
au:function au(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iw:function iw(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c){this.a=a
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
dA:function dA(a){this.a=a
this.b=null},
dj:function dj(){},
hv:function hv(){},
dn:function dn(){},
bg:function bg(a,b){this.a=a
this.b=b},
j0:function j0(){},
j6:function j6(a,b){this.a=a
this.b=b},
iQ:function iQ(){},
iS:function iS(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
this.b=b},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
ls:function(a,b){return new H.G([a,b])},
lt:function(a){return H.mM(a,new H.G([null,null]))},
k5:function(a){return new P.iN([a])},
jL:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
m2:function(a,b){var u=new P.dP(a,b)
u.c=a.e
return u},
lm:function(a,b,c){var u,t
if(P.jN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.t])
$.a3.push(a)
try{P.m9(a,u)}finally{if(0>=$.a3.length)return H.f($.a3,-1)
$.a3.pop()}t=P.kn(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jx:function(a,b,c){var u,t
if(P.jN(a))return b+"..."+c
u=new P.aI(b)
$.a3.push(a)
try{t=u
t.a=P.kn(t.a,a,", ")}finally{if(0>=$.a3.length)return H.f($.a3,-1)
$.a3.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jN:function(a){var u,t
for(u=$.a3.length,t=0;t<u;++t)if(a===$.a3[t])return!0
return!1},
m9:function(a,b){var u,t,s,r,q,p,o,n=a.gN(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.e(n.gG(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gG(n);++l
if(!n.t()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gG(n);++l
for(;n.t();r=q,q=p){p=n.gG(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
k6:function(a){var u,t={}
if(P.jN(a))return"{...}"
u=new P.aI("")
try{$.a3.push(a)
u.a+="{"
t.a=!0
J.l8(a,new P.fu(t,u))
u.a+="}"}finally{if(0>=$.a3.length)return H.f($.a3,-1)
$.a3.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iN:function iN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iO:function iO(a){this.a=a
this.c=this.b=null},
dP:function dP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fg:function fg(){},
fq:function fq(){},
q:function q(){},
ft:function ft(){},
fu:function fu(a,b){this.a=a
this.b=b},
a2:function a2(){},
iU:function iU(){},
dQ:function dQ(){},
eM:function eM(){},
eP:function eP(){},
f1:function f1(){},
i1:function i1(){},
i2:function i2(){},
j_:function j_(a){this.b=0
this.c=a},
ll:function(a){if(a instanceof H.bL)return a.i(0)
return"Instance of '"+H.e(H.c6(a))+"'"},
lu:function(a,b,c){var u,t,s=J.lo(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jC:function(a,b,c){var u,t=H.b([],[c])
for(u=J.be(a);u.t();)t.push(u.gG(u))
if(b)return t
return J.jy(t)},
jG:function(a){var u,t=a.length,s=P.jD(0,null,t)
if(typeof s!=="number")return s.a4()
u=s<t
return H.lJ(u?C.a.dR(a,0,s):a)},
lL:function(a){return new H.fj(a,H.lq(a,!1,!0,!1,!1,!1))},
kn:function(a,b,c){var u=J.be(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gG(u))
while(u.t())}else{a+=H.e(u.gG(u))
for(;u.t();)a=a+c+H.e(u.gG(u))}return a},
m5:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.n){u=$.l5().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.h6(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lI(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lj:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lk:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cK:function(a){if(a>=10)return""+a
return"0"+a},
k1:function(a){return new P.aV(1000*a)},
jv:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ll(a)},
la:function(a){return new P.aj(!1,null,null,a)},
ey:function(a,b,c){return new P.aj(!0,a,b,c)},
d9:function(a,b){return new P.bs(null,null,!0,a,b,"Value not in range")},
aE:function(a,b,c,d,e){return new P.bs(b,c,!0,a,d,"Invalid value")},
jD:function(a,b,c){var u
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
u=a>c}else u=!0
if(u)throw H.c(P.aE(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
u=b>c}else u=!0
if(u)throw H.c(P.aE(b,a,c,"end",null))
return b}return c},
kj:function(a,b){if(typeof a!=="number")return a.a4()
if(a<0)throw H.c(P.aE(a,0,null,b,null))},
J:function(a,b,c,d,e){var u=e==null?J.bf(b):e
return new P.ff(u,!0,a,c,"Index out of range")},
x:function(a){return new P.i_(a)},
kt:function(a){return new P.hX(a)},
km:function(a){return new P.di(a)},
bM:function(a){return new P.eO(a)},
o:function(a){return new P.dI(a)},
jV:function(a){H.mY(a)},
bc:function bc(){},
ac:function ac(a,b){this.a=a
this.b=b},
K:function K(){},
aV:function aV(a){this.a=a},
eZ:function eZ(){},
f_:function f_(){},
aW:function aW(){},
c3:function c3(){},
aj:function aj(a,b,c,d){var _=this
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
ff:function ff(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i_:function i_(a){this.a=a},
hX:function hX(a){this.a=a},
di:function di(a){this.a=a},
eO:function eO(a){this.a=a},
h_:function h_(){},
dg:function dg(){},
eU:function eU(a){this.a=a},
dI:function dI(a){this.a=a},
fb:function fb(a,b){this.a=a
this.b=b},
w:function w(){},
j:function j(){},
fh:function fh(){},
b4:function b4(){},
bX:function bX(){},
a6:function a6(){},
a8:function a8(){},
R:function R(){},
b6:function b6(){},
t:function t(){},
aI:function aI(a){this.a=a},
mI:function(a){var u,t=J.Q(a)
if(!!t.$iaZ){u=t.gd3(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eh(a.data,a.height,a.width)},
mH:function(a){if(a instanceof P.eh)return{data:a.a,height:a.b,width:a.c}
return a},
aO:function(a){var u,t,s,r,q
if(a==null)return
u=P.ls(P.t,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
mG:function(a){var u={}
a.I(0,new P.j8(u))
return u},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a){this.a=a},
f7:function f7(a,b){this.a=a
this.b=b},
f8:function f8(){},
f9:function f9(){},
mZ:function(a,b){var u=new P.au($.M,[b]),t=new P.ij(u,[b])
a.then(H.aN(new P.ji(t),1),H.aN(new P.jj(t),1))
return u},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
iM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iK:function iK(){},
iP:function iP(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
fn:function fn(){},
b5:function b5(){},
fY:function fY(){},
h4:function h4(){},
hw:function hw(){},
k:function k(){},
b7:function b7(){},
hN:function hN(){},
dN:function dN(){},
dO:function dO(){},
dY:function dY(){},
dZ:function dZ(){},
e8:function e8(){},
e9:function e9(){},
ef:function ef(){},
eg:function eg(){},
eA:function eA(){},
eD:function eD(){},
eE:function eE(a){this.a=a},
eF:function eF(){},
bh:function bh(){},
fZ:function fZ(){},
dB:function dB(){},
db:function db(){},
hr:function hr(){},
e4:function e4(){},
e5:function e5(){}},W={
lb:function(a){var u=new Audio(a)
return u},
jq:function(){var u=document.createElement("canvas")
return u},
ju:function(a){return"wheel"},
iL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ky:function(a,b,c,d){var u=W.iL(W.iL(W.iL(W.iL(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
P:function(a,b,c,d){var u=W.kE(new W.iu(c),W.i)
if(u!=null&&!0)J.l7(a,b,u,!1)
return new W.it(a,b,u,!1)},
kE:function(a,b){var u=$.M
if(u===C.e)return a
return u.d_(a,b)},
l:function l(){},
eu:function eu(){},
ew:function ew(){},
ex:function ex(){},
cC:function cC(){},
bj:function bj(){},
aU:function aU(){},
eQ:function eQ(){},
F:function F(){},
bO:function bO(){},
eR:function eR(){},
ab:function ab(){},
am:function am(){},
eS:function eS(){},
eT:function eT(){},
eV:function eV(){},
eW:function eW(){},
cM:function cM(){},
cN:function cN(){},
eX:function eX(){},
eY:function eY(){},
iq:function iq(a,b){this.a=a
this.b=b},
W:function W(){},
i:function i(){},
d:function d(){},
ax:function ax(){},
f5:function f5(){},
f6:function f6(){},
fa:function fa(){},
ay:function ay(){},
fd:function fd(){},
bS:function bS(){},
aZ:function aZ(){},
bT:function bT(){},
bo:function bo(){},
fr:function fr(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(a){this.a=a},
fN:function fN(){},
fO:function fO(a){this.a=a},
az:function az(){},
fP:function fP(){},
ap:function ap(){},
ip:function ip(a){this.a=a},
E:function E(){},
d5:function d5(){},
aB:function aB(){},
h1:function h1(){},
h9:function h9(){},
ha:function ha(a){this.a=a},
hc:function hc(){},
aF:function aF(){},
ho:function ho(){},
aG:function aG(){},
hp:function hp(){},
aH:function aH(){},
ht:function ht(){},
hu:function hu(a){this.a=a},
ar:function ar(){},
aJ:function aJ(){},
as:function as(){},
hz:function hz(){},
hA:function hA(){},
hI:function hI(){},
aK:function aK(){},
bt:function bt(){},
hL:function hL(){},
hM:function hM(){},
b8:function b8(){},
i0:function i0(){},
ig:function ig(){},
ba:function ba(){},
cg:function cg(){},
is:function is(){},
dD:function dD(){},
iJ:function iJ(){},
dV:function dV(){},
iV:function iV(){},
iW:function iW(){},
it:function it(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iu:function iu(a){this.a=a},
I:function I(){},
cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dC:function dC(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dW:function dW(){},
dX:function dX(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
cl:function cl(){},
cm:function cm(){},
e2:function e2(){},
e3:function e3(){},
e7:function e7(){},
ea:function ea(){},
eb:function eb(){},
co:function co(){},
cp:function cp(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){}},K={
X:function(a){var u=new K.hd()
u.dY(a)
return u},
ev:function ev(){},
cR:function cR(){},
d_:function d_(){},
aA:function aA(){this.a=null},
hd:function hd(){this.a=null}},L={dh:function dh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},dq:function dq(a){this.b=a
this.c=null},hJ:function hJ(){var _=this
_.d=_.c=_.b=_.a=null},dr:function dr(a){this.b=a
this.a=this.c=null}},F={eB:function eB(){this.b=this.a=null},eC:function eC(a,b){this.a=a
this.b=b},d7:function d7(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
j2:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cq:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.A(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.A(u+a3,t+a1,s+a2)
q=new V.A(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.A(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.j2(i)
l=F.j2(h)
k=F.n5(d,a0,new F.j1(j,F.j2(g),F.j2(f),l,m,c),b)
if(k!=null)a.hp(k)},
n5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.jF()
t=H.b([],[F.bw])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.i6(g,g,new V.a0(p,0,0,1),g,g,new V.Z(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.bN(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.i6(g,g,new V.a0(j,i,h,1),g,g,new V.Z(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bN(d))}}u.d.fZ(a+1,b+1,t)
return u},
bQ:function(a,b,c){var u=new F.aX(),t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a_()
return u},
lr:function(a,b){var u=new F.bV(),t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.a_()
return u},
jF:function(){var u=new F.he(),t=new F.i7(u)
t.b=!1
t.c=H.b([],[F.bw])
u.a=t
t=new F.hh(u)
t.b=H.b([],[F.c4])
u.b=t
t=new F.hg(u)
t.b=H.b([],[F.bV])
u.c=t
t=new F.hf(u)
t.b=H.b([],[F.aX])
u.d=t
u.e=null
return u},
i6:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bw(),r=new F.ic()
r.b=H.b([],[F.c4])
s.b=r
r=new F.ib()
u=[F.bV]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.i8()
u=[F.aX]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.l2()
s.e=0
r=$.a9()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aS().a)!==0?e:t
s.x=(u&$.aR().a)!==0?b:t
s.y=(u&$.bd().a)!==0?f:t
s.z=(u&$.aT().a)!==0?g:t
s.Q=(u&$.l3().a)!==0?c:t
s.ch=(u&$.bH().a)!==0?i:0
s.cx=(u&$.aQ().a)!==0?a:t
return s},
j1:function j1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aX:function aX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bV:function bV(){this.b=this.a=null},
c4:function c4(){this.a=null},
he:function he(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(a){this.a=a
this.b=null},
hg:function hg(a){this.a=a
this.b=null},
hh:function hh(a){this.a=a
this.b=null},
bw:function bw(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){this.a=a},
id:function id(a){this.a=a},
i7:function i7(a){this.a=a
this.c=this.b=null},
i8:function i8(){this.d=this.c=this.b=null},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(){this.c=this.b=null},
ic:function ic(){this.b=null}},O={
jr:function(a){var u=new O.al([a])
u.b2(a)
return u},
al:function al(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c_:function c_(){this.b=this.a=null},
d0:function d0(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(){},
fE:function fE(a,b){this.a=a
this.b=b},
fF:function fF(){},
fG:function fG(a,b){this.a=a
this.b=b},
fH:function fH(){},
fI:function fI(a,b){this.a=a
this.b=b},
fJ:function fJ(){},
fw:function fw(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bZ:function bZ(){},
fx:function fx(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
an:function an(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fz:function fz(){var _=this
_.e=_.d=_.c=_.b=null},
fA:function fA(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fB:function fB(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dd:function dd(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(){this.c=this.b=this.a=null},
dk:function dk(){}},E={
bP:function(a){var u,t=new E.aw()
t.a=""
t.b=!0
u=O.jr(E.aw)
t.y=u
u.aP(t.ghq(),t.ght())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.scl(0,a)
t.saO(null)
t.sc9(null)
return t},
lM:function(a,b){var u=new E.h5(a)
u.dX(a,b)
return u},
lS:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibj)return E.kp(a,!0,!0,!0,!1)
u=W.jq()
t=u.style
t.width="100%"
t.height="100%"
s.gd1(a).l(0,u)
return E.kp(u,!0,!0,!0,!1)},
kp:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dm(),p=C.f.ci(a,"webgl2",P.lt(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lM(p,a)
u=new T.hE(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new F.eB()
u.b=u.a=0
q.r=u
u=new X.du(a)
t=new X.fm()
t.c=new X.a4(!1,!1,!1)
t.d=P.k5(P.w)
u.b=t
t=new X.fQ(u)
t.f=0
t.r=V.aC()
t.x=V.aC()
t.ch=t.Q=1
u.c=t
t=new X.fs(u)
t.r=0
t.x=V.aC()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hK(u)
t.f=V.aC()
t.r=V.aC()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dj,P.R]])
u.z=t
s=document
t.push(W.P(s,"contextmenu",u.geW(),!1))
u.z.push(W.P(a,"focus",u.gf5(),!1))
u.z.push(W.P(a,"blur",u.geQ(),!1))
u.z.push(W.P(s,"keyup",u.gf9(),!1))
u.z.push(W.P(s,"keydown",u.gf7(),!1))
u.z.push(W.P(a,"mousedown",u.gfd(),!1))
u.z.push(W.P(a,"mouseup",u.gfh(),!1))
u.z.push(W.P(a,r,u.gff(),!1))
t=u.z
W.ju(a)
W.ju(a)
t.push(W.P(a,W.ju(a),u.gfj(),!1))
u.z.push(W.P(s,r,u.geY(),!1))
u.z.push(W.P(s,"mouseup",u.gf_(),!1))
u.z.push(W.P(s,"pointerlockchange",u.gfl(),!1))
u.z.push(W.P(a,"touchstart",u.gfE(),!1))
u.z.push(W.P(a,"touchend",u.gfA(),!1))
u.z.push(W.P(a,"touchmove",u.gfC(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ac(Date.now(),!1)
q.db=0
q.cP()
return q},
eI:function eI(){},
aw:function aw(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
dm:function dm(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hH:function hH(a){this.a=a}},Z={
jK:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cr(c)),35044)
a.bindBuffer(b,null)
return new Z.dz(b,u)},
ae:function(a){return new Z.aL(a)},
dz:function dz(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cf:function cf(a){this.a=a},
bi:function bi(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a){this.a=a}},D={
z:function(){var u=new D.bl()
u.d=0
return u},
eL:function eL(){},
bl:function bl(){var _=this
_.d=_.c=_.b=_.a=null},
f3:function f3(a){this.a=a},
f4:function f4(a){this.a=a},
S:function S(){this.b=null},
b_:function b_(){this.b=null},
b0:function b0(){this.b=null},
r:function r(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
k0:function(a,b){var u,t,s=new D.bk()
s.c=new V.H(1,1,1)
s.a=V.lV()
s.d=V.jJ()
s.e=V.lU()
u=s.b
s.b=b
b.gm().l(0,s.ge_())
t=new D.r("mover",u,s.b)
t.b=!0
s.ap(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.r("color",u,a)
t.b=!0
s.ap(t)}return s},
eH:function eH(){},
bk:function bk(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a1:function a1(){},
cX:function cX(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h2:function h2(){},
hq:function hq(){}},X={cE:function cE(a,b){this.a=a
this.b=b},cW:function cW(a,b){this.a=a
this.b=b},fm:function fm(){var _=this
_.d=_.c=_.b=_.a=null},cY:function cY(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fs:function fs(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},ad:function ad(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fQ:function fQ(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c0:function c0(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h3:function h3(){},c8:function c8(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hK:function hK(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},du:function du(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jw:function(a,b){var u=new X.fc(),t=new V.a0(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.jE()
u.r=t
return u},
ke:function(a){var u,t,s=new X.d6()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().l(0,s.gec())
t=new D.r("mover",u,s.b)
t.b=!0
s.W(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.v().a)){s.c=1.0471975511965976
t=new D.r("fov",t,1.0471975511965976)
t.b=!0
s.W(t)}t=s.d
if(!(Math.abs(t-0.1)<$.v().a)){s.d=0.1
t=new D.r("near",t,0.1)
t.b=!0
s.W(t)}t=s.e
if(!(Math.abs(t-2000)<$.v().a)){s.e=2000
t=new D.r("far",t,2000)
t.b=!0
s.W(t)}return s},
eG:function eG(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jp:function jp(){},
fc:function fc(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fe:function fe(){this.b=this.a=null},
d6:function d6(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hx:function hx(){}},V={
li:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.b.aK(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.H(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.H(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.H(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.H(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.H(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.H(p,o,n)}},
cF:function(a,b,c,d){var u=a/255,t=b/255,s=c/255,r=d/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.a0(u,t,s,r)},
jm:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dM(a-b,u)
return(a<0?a+u:a)+b},
B:function(a,b,c){if(a==null)return C.d.ad("null",c)
return C.d.ad(C.b.dI(Math.abs(a-0)<$.v().a?0:a,b),c+b+1)},
bD:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.t])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.B(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.d.ad(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
cu:function(a){return C.b.hV(Math.pow(2,C.i.aK(Math.log(H.mF(a))/Math.log(2))))},
bq:function(){var u=$.kc
return u==null?$.kc=V.ao(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ao:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lz:function(a,b,c){return V.ao(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ly:function(a,b,c){return V.ao(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
k8:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ao(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
k9:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ao(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
ka:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ao(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
kb:function(a,b,c,d){d=V.jJ()
return V.k7(V.kh(),d,new V.A(a,b,c))},
k7:function(a,b,c){var u=c.u(0,Math.sqrt(c.w(c))),t=b.aW(u),s=t.u(0,Math.sqrt(t.w(t))),r=u.aW(s),q=new V.A(a.a,a.b,a.c),p=s.L(0).w(q),o=r.L(0).w(q),n=u.L(0).w(q)
return V.ao(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aC:function(){var u=$.kg
return u==null?$.kg=new V.Z(0,0):u},
kh:function(){var u=$.aq
return u==null?$.aq=new V.T(0,0,0):u},
jE:function(){var u=$.kl
return u==null?$.kl=V.kk(0,0,1,1):u},
kk:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.da(a,b,c,d)},
dy:function(){var u=$.kw
return u==null?$.kw=new V.A(0,0,0):u},
lU:function(){var u=$.i3
return u==null?$.i3=new V.A(-1,0,0):u},
jJ:function(){var u=$.i4
return u==null?$.i4=new V.A(0,1,0):u},
lV:function(){var u=$.i5
return u==null?$.i5=new V.A(0,0,1):u},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a){this.a=a},
d1:function d1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ah:function ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Z:function Z(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
da:function da(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
n2:function(a){P.lT(C.C,new V.jk(a))},
lO:function(a){var u=new V.hi()
u.dZ(a,!0)
return u},
jk:function jk(a){this.a=a},
hi:function hi(){this.b=this.a=null},
hk:function hk(a){this.a=a},
hj:function hj(a){this.a=a}},U={
js:function(){var u=new U.eN()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jt:function(a){var u=new U.bN()
u.a=a
return u},
k3:function(){var u=new U.bR()
u.b2(U.a5)
u.aP(u.ge1(),u.gfp())
u.e=null
u.f=V.bq()
u.r=0
return u},
eN:function eN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bN:function bN(){this.b=this.a=null},
bR:function bR(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a5:function a5(){},
c7:function c7(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dv:function dv(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dw:function dw(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dx:function dx(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
k2:function(){var u,t,s=new M.cO()
s.a=!0
u=O.jr(E.aw)
s.e=u
u.aP(s.geS(),s.geU())
s.y=s.x=s.r=s.f=null
t=X.jw(!0,null)
s.saG(null)
s.saN(0,t)
return s},
cI:function cI(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cJ:function cJ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cO:function cO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ai:function ai(){},
kL:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6="testCanvas",b7=null,b8="modifiers",b9=V.lO("Test 047"),c0=W.jq()
c0.className="pageLargeCanvas"
c0.id=b6
b9.a.appendChild(c0)
u=[P.t]
b9.cW(H.b(["Test of the audio player. When you click on a cube it will ","play the same audio at slightly different rate and volume."],u))
b9.cW(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b6)
if(t==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.lS(t,!0,!0,!0,!1)
r=U.k3()
b9=s.x
u=new U.dw()
q=U.js()
q.scg(0,!0)
q.sc6(6.283185307179586)
q.sc8(0)
q.sa6(0,0)
q.sc7(100)
q.sO(0)
q.sbO(0.5)
u.b=q
p=u.gaE()
q.gm().l(0,p)
q=U.js()
q.scg(0,!0)
q.sc6(6.283185307179586)
q.sc8(0)
q.sa6(0,0)
q.sc7(100)
q.sO(0)
q.sbO(0.5)
u.c=q
q.gm().l(0,p)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
o=new X.a4(!1,!1,!1)
n=u.d
u.d=o
q=new D.r(b8,n,o)
q.b=!0
u.D(q)
q=u.f
if(q!==!1){u.f=!1
q=new D.r("invertX",q,!1)
q.b=!0
u.D(q)}q=u.r
if(q!==!1){u.r=!1
q=new D.r("invertY",q,!1)
q.b=!0
u.D(q)}u.at(b9)
r.l(0,u)
b9=s.x
u=new U.dv()
q=U.js()
q.scg(0,!0)
q.sc6(6.283185307179586)
q.sc8(0)
q.sa6(0,0)
q.sc7(100)
q.sO(0)
q.sbO(0.2)
u.b=q
q.gm().l(0,u.gaE())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
o=new X.a4(!0,!1,!1)
n=u.c
u.c=o
q=new D.r(b8,n,o)
q.b=!0
u.D(q)
u.at(b9)
r.l(0,u)
b9=s.x
u=new U.dx()
u.c=0.01
u.e=u.d=0
o=new X.a4(!1,!1,!1)
u.b=o
q=new D.r(b8,b7,o)
q.b=!0
u.D(q)
u.at(b9)
r.l(0,u)
r.l(0,U.jt(V.lz(0,0,5)))
m=X.ke(r)
l=s.f.dm("../resources/diceColor")
k=new O.d0()
b9=O.jr(V.ah)
k.e=b9
b9.aP(k.geM(),k.geO())
b9=new O.an(k,"emission")
b9.c=new A.V(!1,!1,!1)
b9.f=new V.H(0,0,0)
k.f=b9
b9=new O.an(k,"ambient")
b9.c=new A.V(!1,!1,!1)
b9.f=new V.H(0,0,0)
k.r=b9
b9=new O.an(k,"diffuse")
b9.c=new A.V(!1,!1,!1)
b9.f=new V.H(0,0,0)
k.x=b9
b9=new O.an(k,"invDiffuse")
b9.c=new A.V(!1,!1,!1)
b9.f=new V.H(0,0,0)
k.y=b9
b9=new O.fB(k,"specular")
b9.c=new A.V(!1,!1,!1)
b9.f=new V.H(0,0,0)
b9.ch=100
k.z=b9
b9=new O.fx(k,"bump")
b9.c=new A.V(!1,!1,!1)
k.Q=b9
k.ch=null
b9=new O.an(k,"reflect")
b9.c=new A.V(!1,!1,!1)
b9.f=new V.H(0,0,0)
k.cx=b9
b9=new O.fA(k,"refract")
b9.c=new A.V(!1,!1,!1)
b9.f=new V.H(0,0,0)
b9.ch=1
k.cy=b9
b9=new O.fw(k,"alpha")
b9.c=new A.V(!1,!1,!1)
b9.f=1
k.db=b9
b9=new D.cX()
b9.b2(D.a1)
b9.e=H.b([],[D.eH])
b9.f=H.b([],[D.bk])
b9.r=H.b([],[D.h2])
b9.x=H.b([],[D.hq])
b9.z=b9.y=null
b9.cj(b9.geK(),b9.gfn(),b9.gfs())
k.dx=b9
u=new O.fz()
u.b=new V.a0(0,0,0,0)
u.c=1
u.d=10
u.e=!1
k.dy=u
u=b9.y
b9=u==null?b9.y=D.z():u
b9.l(0,k.gfK())
b9=k.dx
u=b9.z
b9=u==null?b9.z=D.z():u
b9.l(0,k.gaB())
k.fr=null
b9=k.dx
u=U.jt(V.kb(-1,-1,-1,b7))
b9.l(0,D.k0(new V.H(1,0.9,0.9),u))
b9=k.dx
u=U.jt(V.kb(1,1,2,b7))
b9.l(0,D.k0(new V.H(0.2,0.2,0.35),u))
b9=k.r
b9.saI(0,new V.H(0.2,0.2,0.2))
k.r.sb_(l)
b9=k.x
b9.saI(0,new V.H(0.8,0.8,0.8))
k.x.sb_(l)
b9=k.z
b9.saI(0,new V.H(0.7,0.7,0.7))
b9=k.z
b9.bD(new A.V(!0,!1,b9.c.c))
b9.cR(10)
k.Q.sb_(s.f.dm("../resources/diceBumpMap"))
j=s.r.hn("../resources/tink.mp3")
i=H.b([],[U.c7])
h=H.b([],[V.a0])
g=F.jF()
F.cq(g,b7,b7,1,1,1,0,0,1)
F.cq(g,b7,b7,1,1,0,1,0,3)
F.cq(g,b7,b7,1,1,0,0,1,2)
F.cq(g,b7,b7,1,1,-1,0,0,0)
F.cq(g,b7,b7,1,1,0,-1,0,0)
F.cq(g,b7,b7,1,1,0,0,-1,3)
g.au()
f=E.bP(g)
e=E.bP(b7)
d=E.bP(b7)
for(c=-1.6;c<=1.7;c+=0.8)for(b=-1.6;b<=1.7;b+=0.8)for(a=-1.6;a<=1.7;a+=0.8){a0=new V.ah(1,0,0,c,0,1,0,b,0,0,1,a,0,0,0,1).q(0,new V.ah(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
r=new U.c7()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.sdK(0)
r.sdB(0,0)
r.sdE(0)
b9=r.d
if(!(Math.abs(b9-0)<$.v().a)){r.d=0
b9=new D.r("deltaYaw",b9,0)
b9.b=!0
u=r.y
if(u!=null)u.v(b9)}r.sbP(0)
r.sbQ(0)
i.push(r)
a1=U.k3()
b9=[H.jS(a1,"al",0)]
if(a1.ak(H.b([r],b9))){u=a1.a
a2=u.length
u.push(r)
u=H.b([r],b9)
q=a1.c
if(q!=null)q.$2(a2,u)}u=new U.bN()
u.sS(0,a0)
if(a1.ak(H.b([u],b9))){q=a1.a
a2=q.length
q.push(u)
b9=H.b([u],b9)
u=a1.c
if(u!=null)u.$2(a2,b9)}a3=E.bP(b7)
a3.saO(k)
a3.sc9(a1)
b9=a3.y
u=[H.ag(b9,0)]
if(b9.ak(H.b([f],u))){q=b9.a
a2=q.length
q.push(f)
u=H.b([f],u)
b9=b9.c
if(b9!=null)b9.$2(a2,u)}b9=e.y
u=[H.ag(b9,0)]
if(b9.ak(H.b([a3],u))){q=b9.a
a2=q.length
q.push(a3)
u=H.b([a3],u)
b9=b9.c
if(b9!=null)b9.$2(a2,u)}b9=V.li(h.length/125,1,1)
l=new V.a0(Math.floor(b9.a*255)/255,Math.floor(b9.b*255)/255,Math.floor(b9.c*255)/255,Math.floor(255)/255)
h.push(l)
a4=E.bP(b7)
b9=new O.hm()
b9.b=l
a4.saO(b9)
a4.sc9(a1)
b9=a4.y
u=[H.ag(b9,0)]
if(b9.ak(H.b([f],u))){q=b9.a
a2=q.length
q.push(f)
u=H.b([f],u)
b9=b9.c
if(b9!=null)b9.$2(a2,u)}b9=d.y
u=[H.ag(b9,0)]
if(b9.ak(H.b([a4],u))){q=b9.a
a2=q.length
q.push(a4)
u=H.b([a4],u)
b9=b9.c
if(b9!=null)b9.$2(a2,u)}}a5=new X.eG()
a5.d=a5.c=a5.b=a5.a=512
a5.e=!0
a5.f=!1
a5.x=a5.r=1
a5.ch=T.ko(b7)
a5.cx=new V.a0(0,0,0,1)
a5.cy=!0
a5.db=2000
a5.dx=!0
a5.dy=V.jE()
a5.saf(0,512)
a5.sab(0,512)
l=new V.a0(0,0,0,1)
if(!a5.cx.n(0,l)){n=a5.cx
a5.cx=l
b9=new D.r("color",n,l)
b9.b=!0
a5.W(b9)}b9=a5.db
if(!(Math.abs(b9-2000)<$.v().a)){a5.db=2000
b9=new D.r("depth",b9,2000)
b9.b=!0
a5.W(b9)}if(!a5.f){a5.f=!0
b9=new D.r("autoResize",!1,!0)
b9.b=!0
a5.W(b9)}b9=a5.r
if(!(Math.abs(b9-0.5)<$.v().a)){a5.r=0.5
b9=new D.r("autoResizeScalarX",b9,0.5)
b9.b=!0
a5.W(b9)}b9=a5.x
if(!(Math.abs(b9-0.5)<$.v().a)){a5.x=0.5
b9=new D.r("autoResizeScalarY",b9,0.5)
b9.b=!0
a5.W(b9)}a6=V.jE()
if(!J.L(a5.dy,a6)){n=a5.dy
a5.dy=a6
b9=new D.r("region",n,a6)
b9.b=!0
a5.W(b9)}a7=M.k2()
a7.e.l(0,d)
a7.saN(0,a5)
a7.saG(m)
a8=X.jw(!1,b7)
a9=M.k2()
a9.e.l(0,e)
a9.saN(0,a8)
a9.saG(m)
b9=s.f.dn("../resources/maskonaive",".jpg")
b0=new M.cJ()
b0.a=!0
u=E.bP(b7)
g=F.jF()
q=g.a
p=new V.A(-1,-1,1)
p=p.u(0,Math.sqrt(p.w(p)))
b1=q.bb(new V.aD(1,2,4,6),V.cF(255,0,0,255),new V.T(-1,-1,0),new V.Z(0,1),p,b7)
p=g.a
q=new V.A(1,-1,1)
q=q.u(0,Math.sqrt(q.w(q)))
b2=p.bb(new V.aD(0,3,4,6),V.cF(0,0,255,255),new V.T(1,-1,0),new V.Z(1,1),q,b7)
q=g.a
p=new V.A(1,1,1)
p=p.u(0,Math.sqrt(p.w(p)))
b3=q.bb(new V.aD(0,2,5,6),V.cF(0,128,0,255),new V.T(1,1,0),new V.Z(1,0),p,b7)
p=g.a
q=V.aC()
b4=new V.A(-1,1,1)
b4=b4.u(0,Math.sqrt(b4.w(b4)))
b5=p.bb(new V.aD(0,2,4,7),V.cF(255,255,0,255),new V.T(-1,1,0),q,b4,b7)
g.d.fY(H.b([b1,b2,b3,b5],[F.bw]))
g.au()
u.scl(0,g)
b0.e=u
b0.saG(b7)
b0.saN(0,b7)
b0.saO(b7)
u=new O.dd()
u.b=1.0471975511965976
u.d=new V.H(1,1,1)
n=u.c
u.c=b9
b9.gm().l(0,u.gaB())
b9=new D.r("boxTexture",n,u.c)
b9.b=!0
u.R(b9)
b0.saO(u)
b0.saN(0,a8)
b0.saG(m)
b9=s.z
if(b9==null)b9=s.z=D.z()
b9.l(0,new M.jf(i))
b9=s.f
u=s.x
q=a5.ch
p=new T.cG()
p.a=b9
p.z=4
p.ch=p.Q=!1
o=new X.a4(!1,!1,!1)
p.c=o
b9=new D.r(b8,b7,o)
b9.b=!0
p.b3(b9)
b9=p.d
if(b9!==q){if(b9!=null)b9.gm().M(0,p.gcv())
n=p.d
p.d=q
q.gm().l(0,p.gcv())
b9=new D.r("texture",n,p.d)
b9.b=!0
p.b3(b9)}p.at(u)
b9=p.x
if(b9==null)b9=p.x=D.z()
b9.l(0,new M.jg(h,i,j))
b9=M.ai
u=H.b([a7,b0,a9],[b9])
q=new M.cI()
q.b2(b9)
q.e=!0
q.f=!1
q.r=null
q.aP(q.gfu(),q.gfw())
q.ba(0,u)
b9=s.d
if(b9!==q){if(b9!=null)b9.gm().M(0,s.gcs())
s.d=q
q.gm().l(0,s.gcs())
s.ct()}V.n2(s)},
jf:function jf(a){this.a=a},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c}},A={
lw:function(a,b){var u=a.av,t=new A.fv(b,u)
t.bk(b,u)
t.dW(a,b)
return t},
lx:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gai(a3)+a4.gai(a4)+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+a9.gai(a9)+b0.gai(b0)+b1.gai(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.m)(b2),++t)c+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.m)(b3),++t)c+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.m)(b4),++t)c+="_"+H.e(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.m)(b5),++t)c+="_"+H.e(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
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
d=$.a9()
if(j){u=$.aS()
d=new Z.aL(d.a|u.a)}if(i){u=$.aR()
d=new Z.aL(d.a|u.a)}if(h){u=$.aT()
d=new Z.aL(d.a|u.a)}if(g){u=$.aQ()
d=new Z.aL(d.a|u.a)}return new A.fy(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,!1,h,g,!1,b,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
j3:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
j4:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.j3(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.et(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
mf:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j3(b,t,"emission")
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
mb:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.j4(b,t,"ambient")
b.a+="\n"},
md:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.j4(b,t,"diffuse")
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
mg:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.j4(b,t,"invDiffuse")
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
mm:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.j4(b,t,"specular")
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
mi:function(a,b){var u,t,s
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
mk:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j3(b,t,"reflect")
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
ml:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j3(b,t,"refract")
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
mc:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.et(t)
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
if(typeof u!=="number")return u.ag()
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
me:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.et(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ag()
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
mj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.et(t)
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
if(typeof u!=="number")return u.ag()
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
mn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.et(t)
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
if(typeof u!=="number")return u.ag()
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
mh:function(a,b){var u,t
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
mo:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.aI("")
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
A.mf(a,i)
A.mb(a,i)
A.md(a,i)
A.mg(a,i)
A.mm(a,i)
t=a.db
if(t){r=i.a+="// === Environmental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.mk(a,i)
A.ml(a,i)}A.mi(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.mc(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.me(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.mj(a,q[n],i)
for(q=a.cx,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.mn(a,q[n],i)
A.mh(a,i)}q=i.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.az(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.az(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.az(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.az(r,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
mp:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bc+"];\n"
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
mr:function(a,b){var u
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
mq:function(a,b){var u
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
mt:function(a,b){var u,t
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
mu:function(a,b){var u,t
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
ms:function(a,b){var u
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
mv:function(a,b){var u
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
et:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.d.az(a,1)},
jI:function(a,b,c,d,e){var u=new A.hQ(a,c,e)
u.f=d
P.lu(d,0,P.w)
return u},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(a){this.a=a},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b){var _=this
_.d6=_.i8=_.bd=_.av=_.bc=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ii=_.ih=_.ig=_.c0=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.bU=_.dj=_.ie=_.di=_.dh=_.ic=_.dg=_.df=_.de=_.ib=_.dd=_.dc=_.da=_.ia=_.d9=_.d8=_.i9=_.d7=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cB:function cB(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
d8:function d8(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
fy:function fy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bc=b3
_.av=b4
_.bd=b5},
c9:function c9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ca:function ca(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cc:function cc(a,b,c,d,e,f,g,h,i,j){var _=this
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
cd:function cd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dc:function dc(){},
hl:function hl(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hn:function hn(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ds:function ds(){},
hV:function hV(a){this.a=a},
b9:function b9(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
hQ:function hQ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
N:function N(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
D:function D(a,b,c){this.a=a
this.c=b
this.d=c},
bu:function bu(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
cb:function cb(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
bv:function bv(a,b,c){this.a=a
this.c=b
this.d=c},
U:function U(a,b,c){this.a=a
this.c=b
this.d=c}},T={
ko:function(a){var u=new T.hC()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
cG:function cG(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cH:function cH(a,b){this.c=a
this.d=b
this.b=null},
dl:function dl(){},
hB:function hB(){},
hC:function hC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hF:function hF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,F,O,E,Z,D,X,V,U,M,A,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jA.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gH:function(a){return H.c5(a)},
i:function(a){return"Instance of '"+H.e(H.c6(a))+"'"}}
J.fi.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ibc:1}
J.cU.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0},
$ia6:1}
J.cV.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.h0.prototype={}
J.ce.prototype={}
J.b2.prototype={
i:function(a){var u=a[$.kS()]
if(u==null)return this.dU(a)
return"JavaScript function for "+H.e(J.aa(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b1.prototype={
hI:function(a,b){var u
if(!!a.fixed$length)H.p(P.x("removeAt"))
u=a.length
if(b>=u)throw H.c(P.d9(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.p(P.x("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
ba:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.x("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
I:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bM(a))}},
p:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
hl:function(a){return this.p(a,"")},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dR:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.aE(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.aE(c,b,u,"end",null))
if(b===c)return H.b([],[H.ag(a,0)])
return H.b(a.slice(b,c),[H.ag(a,0)])},
gc3:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ln())},
aR:function(a,b){if(!!a.immutable$list)H.p(P.x("sort"))
H.lR(a,b==null?J.m8():b)},
dQ:function(a){return this.aR(a,null)},
Z:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.jx(a,"[","]")},
gN:function(a){return new J.Y(a,a.length)},
gH:function(a){return H.c5(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.x("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ey(b,u,null))
if(b<0)throw H.c(P.aE(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bC(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.p(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bC(a,b))
a[b]=c},
$in:1,
$ij:1}
J.jz.prototype={}
J.Y.prototype={
gG:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bU.prototype={
aJ:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aM(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbe(b)
if(this.gbe(a)===u)return 0
if(this.gbe(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbe:function(a){return a===0?1/a<0:a<0},
hV:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.x(""+a+".toInt()"))},
aK:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.x(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
dI:function(a,b){var u
if(b>20)throw H.c(P.aE(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbe(a))return"-"+u
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
dM:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cS(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.cS(a,b)},
cS:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.x("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b8:function(a,b){var u
if(a>0)u=this.fQ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fQ:function(a,b){return b>31?0:a>>>b},
$iK:1,
$ia8:1}
J.cT.prototype={$iw:1}
J.cS.prototype={}
J.bn.prototype={
bM:function(a,b){if(b<0)throw H.c(H.bC(a,b))
if(b>=a.length)H.p(H.bC(a,b))
return a.charCodeAt(b)},
bs:function(a,b){if(b>=a.length)throw H.c(H.bC(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.c(P.ey(b,null,null))
return a+b},
co:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.d9(b,null))
if(b>c)throw H.c(P.d9(b,null))
if(c>a.length)throw H.c(P.d9(c,null))
return a.substring(b,c)},
az:function(a,b){return this.co(a,b,null)},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ad:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
aJ:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aM(b))
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
$it:1}
H.O.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.bM(this.a,b)},
$an:function(){return[P.w]},
$aq:function(){return[P.w]},
$aj:function(){return[P.w]}}
H.n.prototype={}
H.bW.prototype={
gG:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.es(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.bM(s))
u=t.c
if(typeof q!=="number")return H.u(q)
if(u>=q){t.d=null
return!1}t.d=r.E(s,u);++t.c
return!0}}
H.bY.prototype={
gN:function(a){return new H.cZ(J.be(this.a),this.b)},
gj:function(a){return J.bf(this.a)},
E:function(a,b){return this.b.$1(J.jn(this.a,b))},
$aj:function(a,b){return[b]}}
H.f0.prototype={$in:1,
$an:function(a,b){return[b]}}
H.cZ.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gG(t))
return!0}u.a=null
return!1},
gG:function(a){return this.a}}
H.ih.prototype={
gN:function(a){return new H.ii(J.be(this.a),this.b)}}
H.ii.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gG(u)))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.cP.prototype={}
H.hZ.prototype={
k:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.dt.prototype={}
H.hO.prototype={
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
H.fX.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fl.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hY.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jl.prototype={
$1:function(a){if(!!J.Q(a).$iaW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.e6.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ib6:1}
H.bL.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cv(t==null?"unknown":t)+"'"},
gi1:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hy.prototype={}
H.hs.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cv(u)+"'"}}
H.bJ.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bJ))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.c5(this.a)
else u=typeof t!=="object"?J.bI(t):H.c5(t)
return(u^H.c5(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c6(u))+"'")}}
H.eK.prototype={
i:function(a){return this.a}}
H.hb.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.G.prototype={
gj:function(a){return this.a},
gaw:function(a){return new H.bp(this,[H.ag(this,0)])},
gi_:function(a){var u=this,t=H.ag(u,0)
return H.lv(new H.bp(u,[t]),new H.fk(u),t,H.ag(u,1))},
h5:function(a,b){var u=this.b
if(u==null)return!1
return this.eq(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b4(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b4(r,b)
s=t==null?null:t.b
return s}else return q.hk(b)},
hk:function(a){var u,t,s=this.d
if(s==null)return
u=this.cH(s,J.bI(a)&0x3ffffff)
t=this.dk(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cw(u==null?o.b=o.bA():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cw(t==null?o.c=o.bA():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bA()
r=J.bI(b)&0x3ffffff
q=o.cH(s,r)
if(q==null)o.bE(s,r,[o.bB(b,c)])
else{p=o.dk(q,b)
if(p>=0)q[p].b=c
else q.push(o.bB(b,c))}}},
I:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bM(u))
t=t.c}},
cw:function(a,b,c){var u=this.b4(a,b)
if(u==null)this.bE(a,b,this.bB(b,c))
else u.b=c},
bB:function(a,b){var u=this,t=new H.fo(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
dk:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.k6(this)},
b4:function(a,b){return a[b]},
cH:function(a,b){return a[b]},
bE:function(a,b,c){a[b]=c},
eu:function(a,b){delete a[b]},
eq:function(a,b){return this.b4(a,b)!=null},
bA:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bE(t,u,t)
this.eu(t,u)
return t}}
H.fk.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.ag(u,1),args:[H.ag(u,0)]}}}
H.fo.prototype={}
H.bp.prototype={
gj:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.fp(u,u.r)
t.c=u.e
return t}}
H.fp.prototype={
gG:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bM(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jb.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.jc.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jd.prototype={
$1:function(a){return this.a(a)}}
H.fj.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c2.prototype={}
H.d2.prototype={
gj:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.c1.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]},
k:function(a,b,c){H.av(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.K]},
$aq:function(){return[P.K]},
$ij:1,
$aj:function(){return[P.K]}}
H.d3.prototype={
k:function(a,b,c){H.av(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.w]},
$aq:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]}}
H.fR.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.fS.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.fT.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.fU.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.fV.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.d4.prototype={
gj:function(a){return a.length},
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.fW.prototype={
gj:function(a){return a.length},
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.ch.prototype={}
H.ci.prototype={}
H.cj.prototype={}
H.ck.prototype={}
P.il.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:8}
P.ik.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.im.prototype={
$0:function(){this.a.$0()}}
P.io.prototype={
$0:function(){this.a.$0()}}
P.ec.prototype={
ea:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aN(new P.iZ(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
eb:function(a,b){if(self.setTimeout!=null)self.setInterval(H.aN(new P.iY(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$idn:1}
P.iZ.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iY.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dV(u,q)}s.c=r
t.d.$1(s)}}
P.by.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.cn.prototype={
gG:function(a){var u=this.c
if(u==null)return this.b
return u.gG(u)},
t:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.t())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.by){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.be(u)
if(!!r.$icn){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iX.prototype={
gN:function(a){return new P.cn(this.a())}}
P.ir.prototype={
h4:function(a){var u
if(a==null)a=new P.c3()
u=this.a
if(u.a!==0)throw H.c(P.km("Future already completed"))
u.eh(a,null)}}
P.ij.prototype={
h3:function(a,b){var u=this.a
if(u.a!==0)throw H.c(P.km("Future already completed"))
u.eg(b)}}
P.iv.prototype={
ho:function(a){if((this.c&15)!==6)return!0
return this.b.b.cf(this.d,a.a)},
hi:function(a){var u=this.e,t=this.b.b
if(H.jP(u,{func:1,args:[P.R,P.b6]}))return t.hN(u,a.a,a.b)
else return t.cf(u,a.a)}}
P.au.prototype={
dH:function(a,b,c){var u,t=$.M
if(t!==C.e)b=b!=null?P.mx(b,t):b
u=new P.au($.M,[c])
this.cz(new P.iv(u,b==null?1:3,a,b))
return u},
hU:function(a,b){return this.dH(a,null,b)},
cz:function(a){var u,t=this,s=t.a
if(s<=1){a.a=t.c
t.c=a}else{if(s===2){s=t.c
u=s.a
if(u<4){s.cz(a)
return}t.a=u
t.c=s.c}P.bA(null,null,t.b,new P.iw(t,a))}},
cN:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=p.c
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){u=p.c
q=u.a
if(q<4){u.cN(a)
return}p.a=q
p.c=u.c}o.a=p.b7(a)
P.bA(null,null,p.b,new P.iE(o,p))}},
b6:function(){var u=this.c
this.c=null
return this.b7(u)},
b7:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
eo:function(a){var u,t=this,s=t.$ti
if(H.j7(a,"$iaY",s,"$aaY"))if(H.j7(a,"$iau",s,null))P.iz(a,t)
else P.kx(a,t)
else{u=t.b6()
t.a=4
t.c=a
P.bx(t,u)}},
bu:function(a,b){var u=this,t=u.b6()
u.a=8
u.c=new P.bg(a,b)
P.bx(u,t)},
eg:function(a){var u=this
if(H.j7(a,"$iaY",u.$ti,"$aaY")){u.em(a)
return}u.a=1
P.bA(null,null,u.b,new P.iy(u,a))},
em:function(a){var u=this
if(H.j7(a,"$iau",u.$ti,null)){if(a.a===8){u.a=1
P.bA(null,null,u.b,new P.iD(u,a))}else P.iz(a,u)
return}P.kx(a,u)},
eh:function(a,b){this.a=1
P.bA(null,null,this.b,new P.ix(this,a,b))},
$iaY:1}
P.iw.prototype={
$0:function(){P.bx(this.a,this.b)}}
P.iE.prototype={
$0:function(){P.bx(this.b,this.a.a)}}
P.iA.prototype={
$1:function(a){var u=this.a
u.a=0
u.eo(a)},
$S:8}
P.iB.prototype={
$2:function(a,b){this.a.bu(a,b)},
$1:function(a){return this.$2(a,null)},
$S:18}
P.iC.prototype={
$0:function(){this.a.bu(this.b,this.c)}}
P.iy.prototype={
$0:function(){var u=this.a,t=u.b6()
u.a=4
u.c=this.b
P.bx(u,t)}}
P.iD.prototype={
$0:function(){P.iz(this.b,this.a)}}
P.ix.prototype={
$0:function(){this.a.bu(this.b,this.c)}}
P.iH.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dF(s.d)}catch(r){u=H.aP(r)
t=H.bF(r)
if(o.d){s=o.a.a.c.a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=o.a.a.c
else q.b=new P.bg(u,t)
q.a=!0
return}if(!!J.Q(n).$iaY){if(n instanceof P.au&&n.a>=4){if(n.a===8){s=o.b
s.b=n.c
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.hU(new P.iI(p),null)
s.a=!1}}}
P.iI.prototype={
$1:function(a){return this.a},
$S:19}
P.iG.prototype={
$0:function(){var u,t,s,r,q=this
try{s=q.b
q.a.b=s.b.b.cf(s.d,q.c)}catch(r){u=H.aP(r)
t=H.bF(r)
s=q.a
s.b=new P.bg(u,t)
s.a=!0}}}
P.iF.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=m.a.a.c
r=m.c
if(r.ho(u)&&r.e!=null){q=m.b
q.b=r.hi(u)
q.a=!1}}catch(p){t=H.aP(p)
s=H.bF(p)
r=m.a.a.c
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.bg(t,s)
n.a=!0}}}
P.dA.prototype={}
P.dj.prototype={}
P.hv.prototype={}
P.dn.prototype={}
P.bg.prototype={
i:function(a){return H.e(this.a)},
$iaW:1}
P.j0.prototype={}
P.j6.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.c3():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iQ.prototype={
hP:function(a){var u,t,s,r=null
try{if(C.e===$.M){a.$0()
return}P.kB(r,r,this,a)}catch(s){u=H.aP(s)
t=H.bF(s)
P.j5(r,r,this,u,t)}},
hR:function(a,b){var u,t,s,r=null
try{if(C.e===$.M){a.$1(b)
return}P.kC(r,r,this,a,b)}catch(s){u=H.aP(s)
t=H.bF(s)
P.j5(r,r,this,u,t)}},
hS:function(a,b){return this.hR(a,b,null)},
h1:function(a){return new P.iS(this,a)},
h0:function(a){return this.h1(a,null)},
bH:function(a){return new P.iR(this,a)},
d_:function(a,b){return new P.iT(this,a,b)},
hM:function(a){if($.M===C.e)return a.$0()
return P.kB(null,null,this,a)},
dF:function(a){return this.hM(a,null)},
hQ:function(a,b){if($.M===C.e)return a.$1(b)
return P.kC(null,null,this,a,b)},
cf:function(a,b){return this.hQ(a,b,null,null)},
hO:function(a,b,c){if($.M===C.e)return a.$2(b,c)
return P.my(null,null,this,a,b,c)},
hN:function(a,b,c){return this.hO(a,b,c,null,null,null)}}
P.iS.prototype={
$0:function(){return this.a.dF(this.b)}}
P.iR.prototype={
$0:function(){return this.a.hP(this.b)}}
P.iT.prototype={
$1:function(a){return this.a.hS(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iN.prototype={
gN:function(a){var u=new P.dP(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
Z:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.en(b)
return t}},
en:function(a){var u=this.d
if(u==null)return!1
return this.bx(this.cG(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cB(u==null?s.b=P.jL():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cB(t==null?s.c=P.jL():t,b)}else return s.ee(0,b)},
ee:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jL()
u=s.cC(b)
t=r[u]
if(t==null)r[u]=[s.bt(b)]
else{if(s.bx(t,b)>=0)return!1
t.push(s.bt(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fH(this.c,b)
else return this.fG(0,b)},
fG:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cG(r,b)
t=s.bx(u,b)
if(t<0)return!1
s.cU(u.splice(t,1)[0])
return!0},
cB:function(a,b){if(a[b]!=null)return!1
a[b]=this.bt(b)
return!0},
fH:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cU(u)
delete a[b]
return!0},
cI:function(){this.r=1073741823&this.r+1},
bt:function(a){var u,t=this,s=new P.iO(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cI()
return s},
cU:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cI()},
cC:function(a){return J.bI(a)&1073741823},
cG:function(a,b){return a[this.cC(b)]},
bx:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.iO.prototype={}
P.dP.prototype={
gG:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bM(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fg.prototype={}
P.fq.prototype={$in:1,$ij:1}
P.q.prototype={
gN:function(a){return new H.bW(a,this.gj(a))},
E:function(a,b){return this.h(a,b)},
hX:function(a,b){var u,t,s=this,r=H.b([],[H.mO(s,a,"q",0)])
C.a.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.u(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
hW:function(a){return this.hX(a,!0)},
i:function(a){return P.jx(a,"[","]")}}
P.ft.prototype={}
P.fu.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:9}
P.a2.prototype={
I:function(a,b){var u,t
for(u=J.be(this.gaw(a));u.t();){t=u.gG(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.bf(this.gaw(a))},
i:function(a){return P.k6(a)}}
P.iU.prototype={
i:function(a){return P.jx(this,"{","}")},
E:function(a,b){var u,t,s
P.kj(b,"index")
for(u=P.m2(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.J(b,this,"index",null,t))},
$in:1,
$ij:1}
P.dQ.prototype={}
P.eM.prototype={}
P.eP.prototype={}
P.f1.prototype={}
P.i1.prototype={}
P.i2.prototype={
h6:function(a){var u,t,s,r=P.jD(0,null,a.length)
if(typeof r!=="number")return r.A()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.j_(t)
if(s.ew(a,0,r)!==r)s.cV(C.d.bM(a,r-1),0)
return new Uint8Array(t.subarray(0,H.m6(0,s.b,t.length)))}}
P.j_.prototype={
cV:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.f(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.f(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|a&63
return!1}},
ew:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.bM(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.bs(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cV(r,C.d.bs(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.f(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.f(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=128|r&63}}return s}}
P.bc.prototype={}
P.ac.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.ac&&this.a===b.a&&!0},
aJ:function(a,b){return C.c.aJ(this.a,b.a)},
gH:function(a){var u=this.a
return(u^C.c.b8(u,30))&1073741823},
i:function(a){var u=this,t=P.lj(H.lH(u)),s=P.cK(H.lF(u)),r=P.cK(H.lB(u)),q=P.cK(H.lC(u)),p=P.cK(H.lE(u)),o=P.cK(H.lG(u)),n=P.lk(H.lD(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.aV.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
aJ:function(a,b){return C.c.aJ(this.a,b.a)},
i:function(a){var u,t,s,r=new P.f_(),q=this.a
if(q<0)return"-"+new P.aV(0-q).i(0)
u=r.$1(C.c.Y(q,6e7)%60)
t=r.$1(C.c.Y(q,1e6)%60)
s=new P.eZ().$1(q%1e6)
return""+C.c.Y(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eZ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f_.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.aW.prototype={}
P.c3.prototype={
i:function(a){return"Throw of null."}}
P.aj.prototype={
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbw()+o+u
if(!q.a)return t
s=q.gbv()
r=P.jv(q.b)
return t+s+": "+r}}
P.bs.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.ff.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t=this.b
if(typeof t!=="number")return t.a4()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.i_.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hX.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.di.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eO.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jv(u)+"."}}
P.h_.prototype={
i:function(a){return"Out of Memory"},
$iaW:1}
P.dg.prototype={
i:function(a){return"Stack Overflow"},
$iaW:1}
P.eU.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dI.prototype={
i:function(a){return"Exception: "+this.a}}
P.fb.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.co(s,0,75)+"...":s
return t+"\n"+r}}
P.w.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gN(this)
for(u=0;t.t();)++u
return u},
E:function(a,b){var u,t,s
P.kj(b,"index")
for(u=this.gN(this),t=0;u.t();){s=u.gG(u)
if(b===t)return s;++t}throw H.c(P.J(b,this,"index",null,t))},
i:function(a){return P.lm(this,"(",")")}}
P.fh.prototype={}
P.b4.prototype={$in:1,$ij:1}
P.bX.prototype={}
P.a6.prototype={
gH:function(a){return P.R.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
n:function(a,b){return this===b},
gH:function(a){return H.c5(this)},
i:function(a){return"Instance of '"+H.e(H.c6(this))+"'"},
toString:function(){return this.i(this)}}
P.b6.prototype={}
P.t.prototype={}
P.aI.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.eu.prototype={
gj:function(a){return a.length}}
W.ew.prototype={
i:function(a){return String(a)}}
W.ex.prototype={
i:function(a){return String(a)}}
W.cC.prototype={}
W.bj.prototype={
ci:function(a,b,c){if(c!=null)return a.getContext(b,P.mG(c))
return a.getContext(b)},
dL:function(a,b){return this.ci(a,b,null)},
$ibj:1}
W.aU.prototype={
gj:function(a){return a.length}}
W.eQ.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bO.prototype={
gj:function(a){return a.length}}
W.eR.prototype={}
W.ab.prototype={}
W.am.prototype={}
W.eS.prototype={
gj:function(a){return a.length}}
W.eT.prototype={
gj:function(a){return a.length}}
W.eV.prototype={
gj:function(a){return a.length}}
W.eW.prototype={
i:function(a){return String(a)}}
W.cM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[[P.a7,P.a8]]},
$iy:1,
$ay:function(){return[[P.a7,P.a8]]},
$aq:function(){return[[P.a7,P.a8]]},
$ij:1,
$aj:function(){return[[P.a7,P.a8]]}}
W.cN.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaf(a))+" x "+H.e(this.gab(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia7&&a.left===u.gbf(b)&&a.top===u.gbh(b)&&this.gaf(a)===u.gaf(b)&&this.gab(a)===u.gab(b)},
gH:function(a){return W.ky(C.b.gH(a.left),C.b.gH(a.top),C.b.gH(this.gaf(a)),C.b.gH(this.gab(a)))},
gd0:function(a){return a.bottom},
gab:function(a){return a.height},
gbf:function(a){return a.left},
gce:function(a){return a.right},
gbh:function(a){return a.top},
gaf:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a8]}}
W.eX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[P.t]},
$iy:1,
$ay:function(){return[P.t]},
$aq:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
W.eY.prototype={
gj:function(a){return a.length}}
W.iq.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.hW(this)
return new J.Y(u,u.length)},
$an:function(){return[W.W]},
$aq:function(){return[W.W]},
$aj:function(){return[W.W]}}
W.W.prototype={
gd1:function(a){return new W.iq(a,a.children)},
gd2:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a4()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a4()
if(r<0)r=-r*0
return new P.a7(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
$iW:1}
W.i.prototype={$ii:1}
W.d.prototype={
fX:function(a,b,c,d){if(c!=null)this.ef(a,b,c,!1)},
ef:function(a,b,c,d){return a.addEventListener(b,H.aN(c,1),!1)}}
W.ax.prototype={$iax:1}
W.f5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ax]},
$iy:1,
$ay:function(){return[W.ax]},
$aq:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]}}
W.f6.prototype={
gj:function(a){return a.length}}
W.fa.prototype={
gj:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.fd.prototype={
gj:function(a){return a.length}}
W.bS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.E]},
$iy:1,
$ay:function(){return[W.E]},
$aq:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]}}
W.aZ.prototype={$iaZ:1,
gd3:function(a){return a.data}}
W.bT.prototype={$ibT:1}
W.bo.prototype={$ibo:1}
W.fr.prototype={
i:function(a){return String(a)}}
W.fK.prototype={
gj:function(a){return a.length}}
W.fL.prototype={
h:function(a,b){return P.aO(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
gaw:function(a){var u=H.b([],[P.t])
this.I(a,new W.fM(u))
return u},
gj:function(a){return a.size},
$aa2:function(){return[P.t,null]}}
W.fM.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fN.prototype={
h:function(a,b){return P.aO(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
gaw:function(a){var u=H.b([],[P.t])
this.I(a,new W.fO(u))
return u},
gj:function(a){return a.size},
$aa2:function(){return[P.t,null]}}
W.fO.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.fP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.az]},
$iy:1,
$ay:function(){return[W.az]},
$aq:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]}}
W.ap.prototype={$iap:1}
W.ip.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gN:function(a){var u=this.a.childNodes
return new W.cQ(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$an:function(){return[W.E]},
$aq:function(){return[W.E]},
$aj:function(){return[W.E]}}
W.E.prototype={
hK:function(a,b){var u,t
try{u=a.parentNode
J.l6(u,b,a)}catch(t){H.aP(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dT(a):u},
fI:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.d5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.E]},
$iy:1,
$ay:function(){return[W.E]},
$aq:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]}}
W.aB.prototype={$iaB:1,
gj:function(a){return a.length}}
W.h1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aB]},
$iy:1,
$ay:function(){return[W.aB]},
$aq:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]}}
W.h9.prototype={
h:function(a,b){return P.aO(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
gaw:function(a){var u=H.b([],[P.t])
this.I(a,new W.ha(u))
return u},
gj:function(a){return a.size},
$aa2:function(){return[P.t,null]}}
W.ha.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hc.prototype={
gj:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.ho.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aF]},
$iy:1,
$ay:function(){return[W.aF]},
$aq:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]}}
W.aG.prototype={$iaG:1}
W.hp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aG]},
$iy:1,
$ay:function(){return[W.aG]},
$aq:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]}}
W.aH.prototype={$iaH:1,
gj:function(a){return a.length}}
W.ht.prototype={
h:function(a,b){return a.getItem(b)},
I:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaw:function(a){var u=H.b([],[P.t])
this.I(a,new W.hu(u))
return u},
gj:function(a){return a.length},
$aa2:function(){return[P.t,P.t]}}
W.hu.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ar.prototype={$iar:1}
W.aJ.prototype={$iaJ:1}
W.as.prototype={$ias:1}
W.hz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.as]},
$iy:1,
$ay:function(){return[W.as]},
$aq:function(){return[W.as]},
$ij:1,
$aj:function(){return[W.as]}}
W.hA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aJ]},
$iy:1,
$ay:function(){return[W.aJ]},
$aq:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]}}
W.hI.prototype={
gj:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.bt.prototype={$ibt:1}
W.hL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aK]},
$iy:1,
$ay:function(){return[W.aK]},
$aq:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]}}
W.hM.prototype={
gj:function(a){return a.length}}
W.b8.prototype={}
W.i0.prototype={
i:function(a){return String(a)}}
W.ig.prototype={
gj:function(a){return a.length}}
W.ba.prototype={
gha:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
gh9:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$iba:1}
W.cg.prototype={
fJ:function(a,b){return a.requestAnimationFrame(H.aN(b,1))},
ev:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.is.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.F]},
$iy:1,
$ay:function(){return[W.F]},
$aq:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.dD.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia7&&a.left===u.gbf(b)&&a.top===u.gbh(b)&&a.width===u.gaf(b)&&a.height===u.gab(b)},
gH:function(a){return W.ky(C.b.gH(a.left),C.b.gH(a.top),C.b.gH(a.width),C.b.gH(a.height))},
gab:function(a){return a.height},
gaf:function(a){return a.width}}
W.iJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ay]},
$iy:1,
$ay:function(){return[W.ay]},
$aq:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]}}
W.dV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.E]},
$iy:1,
$ay:function(){return[W.E]},
$aq:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]}}
W.iV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aH]},
$iy:1,
$ay:function(){return[W.aH]},
$aq:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]}}
W.iW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ar]},
$iy:1,
$ay:function(){return[W.ar]},
$aq:function(){return[W.ar]},
$ij:1,
$aj:function(){return[W.ar]}}
W.it.prototype={}
W.iu.prototype={
$1:function(a){return this.a.$1(a)}}
W.I.prototype={
gN:function(a){return new W.cQ(a,this.gj(a))}}
W.cQ.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cy(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gG:function(a){return this.d}}
W.dC.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.cl.prototype={}
W.cm.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e7.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.co.prototype={}
W.cp.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
P.eh.prototype={$iaZ:1,
gd3:function(a){return this.a}}
P.j8.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.f7.prototype={
gb5:function(){var u=this.b,t=H.jS(u,"q",0)
return new H.bY(new H.ih(u,new P.f8(),[t]),new P.f9(),[t,W.W])},
k:function(a,b,c){var u=this.gb5()
J.l9(u.b.$1(J.jn(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bf(this.gb5().a)},
h:function(a,b){var u=this.gb5()
return u.b.$1(J.jn(u.a,b))},
gN:function(a){var u=P.jC(this.gb5(),!1,W.W)
return new J.Y(u,u.length)},
$an:function(){return[W.W]},
$aq:function(){return[W.W]},
$aj:function(){return[W.W]}}
P.f8.prototype={
$1:function(a){return!!J.Q(a).$iW}}
P.f9.prototype={
$1:function(a){return H.h(a,"$iW")}}
P.ji.prototype={
$1:function(a){return this.a.h3(0,a)},
$S:10}
P.jj.prototype={
$1:function(a){return this.a.h4(a)},
$S:10}
P.iK.prototype={
dq:function(){return Math.random()}}
P.iP.prototype={
gce:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return u+t},
gd0:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$ia7){t=q.a
if(t==u.gbf(b)){s=q.b
if(s==u.gbh(b)){r=q.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gce(b)){t=q.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gd0(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.bI(t),r=u.b,q=J.bI(r),p=u.c
if(typeof t!=="number")return t.C()
if(typeof p!=="number")return H.u(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.C()
if(typeof t!=="number")return H.u(t)
t=C.c.gH(r+t)
return P.m1(P.iM(P.iM(P.iM(P.iM(0,s),q),p),t))}}
P.a7.prototype={
gbf:function(a){return this.a},
gbh:function(a){return this.b},
gaf:function(a){return this.c},
gab:function(a){return this.d}}
P.b3.prototype={$ib3:1}
P.fn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.b3]},
$aq:function(){return[P.b3]},
$ij:1,
$aj:function(){return[P.b3]}}
P.b5.prototype={$ib5:1}
P.fY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.b5]},
$aq:function(){return[P.b5]},
$ij:1,
$aj:function(){return[P.b5]}}
P.h4.prototype={
gj:function(a){return a.length}}
P.hw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.t]},
$aq:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
P.k.prototype={
gd1:function(a){return new P.f7(a,new W.ip(a))}}
P.b7.prototype={$ib7:1}
P.hN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.b7]},
$aq:function(){return[P.b7]},
$ij:1,
$aj:function(){return[P.b7]}}
P.dN.prototype={}
P.dO.prototype={}
P.dY.prototype={}
P.dZ.prototype={}
P.e8.prototype={}
P.e9.prototype={}
P.ef.prototype={}
P.eg.prototype={}
P.eA.prototype={
gj:function(a){return a.length}}
P.eD.prototype={
h:function(a,b){return P.aO(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
gaw:function(a){var u=H.b([],[P.t])
this.I(a,new P.eE(u))
return u},
gj:function(a){return a.size},
$aa2:function(){return[P.t,null]}}
P.eE.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eF.prototype={
gj:function(a){return a.length}}
P.bh.prototype={}
P.fZ.prototype={
gj:function(a){return a.length}}
P.dB.prototype={}
P.db.prototype={
dG:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.Q(g)
if(!!u.$iaZ&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.mH(g))
return}if(!!u.$ibT&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.la("Incorrect number or type of arguments"))},
hT:function(a,b,c,d,e,f,g){return this.dG(a,b,c,d,e,f,g,null,null,null)}}
P.hr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return P.aO(a.item(b))},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[[P.bX,,,]]},
$aq:function(){return[[P.bX,,,]]},
$ij:1,
$aj:function(){return[[P.bX,,,]]}}
P.e4.prototype={}
P.e5.prototype={}
K.ev.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"}}
K.cR.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.d_.prototype={}
K.aA.prototype={
aL:function(a,b){return!this.dS(0,b)},
i:function(a){return"!["+this.cp(0)+"]"}}
K.hd.prototype={
dY:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
u=P.w
t=new H.G([u,P.bc])
for(s=new H.bW(a,a.gj(a));s.t();)t.k(0,s.d,!0)
r=P.jC(new H.bp(t,[u]),!0,u)
C.a.dQ(r)
this.a=r},
aL:function(a,b){return C.a.Z(this.a,b)},
i:function(a){return P.jG(this.a)}}
L.dh.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dr(this.a.K(0,b))
r.a=H.b([],[K.d_])
r.c=!1
this.c.push(r)
return r},
hg:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
cT:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.Z(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bp(n,[H.ag(n,0)]),n=n.gN(n);n.t();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.Z(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dp.prototype={
i:function(a){var u=H.kP(this.b,"\n","\\n"),t=H.kP(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dq.prototype={
i:function(a){return this.b}}
L.hJ.prototype={
K:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dh(this,b)
u.c=H.b([],[L.dr])
this.a.k(0,b,u)}return u},
b0:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dq(a)
u=P.t
t.c=new H.G([u,u])
this.b.k(0,a,t)}return t},
dJ:function(a){return this.hY(a)},
hY:function(a){var u=this
return P.ma(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$dJ(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.hI(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.hg(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jG(d)
throw H.c(P.o("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.x("removeRange"))
P.jD(0,m,d.length)
d.splice(0,m-0)
C.a.ba(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.Z(0,p.a)?7:8
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
if(g.d!=null){j=P.jG(e)
i=g.d
h=i.c.h(0,j)
p=new L.dp(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.Z(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.m_()
case 1:return P.m0(q)}}},L.dp)},
i:function(a){var u,t=new P.aI(""),s=this.d
if(s!=null)t.a=s.cT()+"\n"
for(s=this.a,s=s.gi_(s),s=new H.cZ(J.be(s.a),s.b);s.t();){u=s.a
if(u!=this.d)t.a+=u.cT()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dr.prototype={
i:function(a){return this.b.b+": "+this.cp(0)}}
F.eB.prototype={
hn:function(a){var u,t=W.lb(a)
t.autoplay=!1
t.preload="auto";++this.a
u=new F.d7(t)
u.b=!1
W.P(t,"playing",u.gf3(),!1)
W.P(t,"pause",u.gf1(),!1)
W.P(t,"load",new F.eC(this,u),!1)
return u}}
F.eC.prototype={
$1:function(a){var u=this.b
if(!u.b)u.b=!0;++this.a.b}}
F.d7.prototype={
f4:function(a){return},
f2:function(a){return},
si0:function(a,b){var u,t,s
if(b<0)b=0
else if(b>1)b=1
u=this.a
t=u.volume
s=$.v()
s.toString
if(typeof t!=="number")return t.A()
if(!(Math.abs(t-b)<s.a))u.volume=b},
shH:function(a,b){var u,t,s
if(b<0.001)b=0.001
else if(b>100)b=100
u=this.a
t=u.playbackRate
s=$.v()
s.toString
if(typeof t!=="number")return t.A()
if(!(Math.abs(t-b)<s.a))u.playbackRate=b}}
O.al.prototype={
b2:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cj:function(a,b,c){this.b=b
this.c=a},
aP:function(a,b){return this.cj(a,null,b)},
ak:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cJ:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.Y(u,u.length)},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.jS(s,"al",0)]
if(s.ak(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cJ(t,H.b([b],r))}},
ba:function(a,b){var u,t
if(this.ak(b)){u=this.a
t=u.length
C.a.ba(u,b)
this.cJ(t,b)}},
$ij:1}
O.c_.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
aA:function(){var u=this.b
if(u!=null)u.v(null)},
gS:function(a){var u=this.a
if(u.length>0)return C.a.gc3(u)
else return V.bq()},
bg:function(a){var u=this.a
if(a==null)u.push(V.bq())
else u.push(a)
this.aA()},
ax:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}}}
E.eI.prototype={}
E.aw.prototype={
cA:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.Y(u,u.length);u.t();){t=u.d
if(t.f==null)t.cA()}},
scl:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().M(0,s.gdv())
u=s.c
if(u!=null)u.gm().l(0,s.gdv())
t=new D.r("shape",r,s.c)
t.b=!0
s.ah(t)}},
saO:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gm().M(0,s.gdz())
u=s.f
s.f=a
if(a!=null)a.gm().l(0,s.gdz())
s.cA()
t=new D.r("technique",u,s.f)
t.b=!0
s.ah(t)}},
sc9:function(a){var u,t,s=this
if(!J.L(s.r,a)){u=s.r
if(u!=null)u.gm().M(0,s.gdt())
if(a!=null)a.gm().l(0,s.gdt())
s.r=a
t=new D.r("mover",u,a)
t.b=!0
s.ah(t)}},
ae:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ao(0,b,s):null
if(!J.L(q,s.x)){u=s.x
s.x=q
t=new D.r("matrix",u,q)
t.b=!0
s.ah(t)}r=s.f
if(r!=null)r.ae(0,b)
for(r=s.y.a,r=new J.Y(r,r.length);r.t();)r.d.ae(0,b)},
a3:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gS(s))
else s.a.push(r.q(0,s.gS(s)))
s.aA()
a.cc(t.f)
s=a.dy
u=(s&&C.a).gc3(s)
if(u!=null&&t.d!=null)u.cd(a,t)
for(s=t.y.a,s=new J.Y(s,s.length);s.t();)s.d.a3(a)
a.cb()
a.dx.ax()},
ah:function(a){var u=this.z
if(u!=null)u.v(a)},
a_:function(){return this.ah(null)},
dw:function(a){this.e=null
this.ah(a)},
hw:function(){return this.dw(null)},
dA:function(a){this.ah(a)},
hx:function(){return this.dA(null)},
du:function(a){this.ah(a)},
hv:function(){return this.du(null)},
ds:function(a){this.ah(a)},
hs:function(){return this.ds(null)},
hr:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdr(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bl()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a_()},
hu:function(a,b){var u,t
for(u=b.gN(b),t=this.gdr();u.t();)u.gG(u).gm().M(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.h5.prototype={
dX:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ac(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c_()
t=[V.ah]
u.a=H.b([],t)
u.gm().l(0,new E.h6(s))
s.cy=u
u=new O.c_()
u.a=H.b([],t)
u.gm().l(0,new E.h7(s))
s.db=u
u=new O.c_()
u.a=H.b([],t)
u.gm().l(0,new E.h8(s))
s.dx=u
u=H.b([],[O.dk])
s.dy=u
u.push(null)
s.fr=new H.G([P.t,A.dc])},
ghG:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gS(s)
u=t.db
u=t.z=s.q(0,u.gS(u))
s=u}return s},
gdC:function(){var u,t=this,s=t.ch
if(s==null){s=t.ghG()
u=t.dx
u=t.ch=s.q(0,u.gS(u))
s=u}return s},
cc:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gc3(u):a)},
cb:function(){var u=this.dy
if(u.length>1)u.pop()},
bG:function(a){var u=a.b
if(u.length===0)throw H.c(P.o("May not cache a shader with no name."))
if(this.fr.h5(0,u))throw H.c(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.h6.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h7.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.h8.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dm.prototype={
cu:function(a){this.dD()},
ct:function(){return this.cu(null)},
ghh:function(){var u,t=this,s=Date.now(),r=C.c.Y(P.k1(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ac(s,!1)
return u/r},
cP:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.u(r)
u=C.b.aK(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.b.aK(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kq(C.h,s.ghL())}},
dD:function(){if(!this.cx){this.cx=!0
var u=window
C.t.ev(u)
C.t.fJ(u,W.kE(new E.hH(this),P.a8))}},
hJ:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cP()
s=p.z
if(s!=null)s.v(null)
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ac(r,!1)
s.y=P.k1(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.aA()
r=s.db
C.a.sj(r.a,0)
r.aA()
r=s.dx
C.a.sj(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a3(p.e)}}catch(q){u=H.aP(q)
t=H.bF(q)
P.jV("Error: "+H.e(u))
P.jV("Stack: "+H.e(t))
throw H.c(u)}}}
E.hH.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hJ()}}}
Z.dz.prototype={}
Z.cD.prototype={
P:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aP(s)
t=P.o('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.cf.prototype={}
Z.bi.prototype={
am:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
P:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].P(a)},
a8:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a3:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.t],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.aa(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(p,", ")+"\nAttrs:   "+C.a.p(r,", ")}}
Z.bm.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c6(this.c))+"'")+"]"}}
Z.aL.prototype={
gcm:function(a){var u=this.a,t=(u&$.a9().a)!==0?3:0
if((u&$.aS().a)!==0)t+=3
if((u&$.aR().a)!==0)t+=3
if((u&$.bd().a)!==0)t+=2
if((u&$.aT().a)!==0)t+=3
if((u&$.cw().a)!==0)t+=3
if((u&$.cx().a)!==0)t+=4
if((u&$.bH().a)!==0)++t
return(u&$.aQ().a)!==0?t+4:t},
h_:function(a){var u,t=$.a9(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bd()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aQ()
if((s&t.a)!==0)if(u===a)return t
return $.l4()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aL))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.t]),t=this.a
if((t&$.a9().a)!==0)u.push("Pos")
if((t&$.aS().a)!==0)u.push("Norm")
if((t&$.aR().a)!==0)u.push("Binm")
if((t&$.bd().a)!==0)u.push("Txt2D")
if((t&$.aT().a)!==0)u.push("TxtCube")
if((t&$.cw().a)!==0)u.push("Clr3")
if((t&$.cx().a)!==0)u.push("Clr4")
if((t&$.bH().a)!==0)u.push("Weight")
if((t&$.aQ().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.p(u,"|")}}
D.eL.prototype={}
D.bl.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.S]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.Z(s,b)
if(s===!0){s=t.a
u=(s&&C.a).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.Z(s,b)
if(s===!0){s=t.b
u=(s&&C.a).M(s,b)||u}return u},
v:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.I(P.jC(u,!0,{func:1,ret:-1,args:[D.S]}),new D.f3(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.S]}])
C.a.I(u,new D.f4(q))}return!0},
bT:function(){return this.v(null)},
an:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}}}
D.f3.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.f4.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.S.prototype={}
D.b_.prototype={}
D.b0.prototype={}
D.r.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cE.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cE))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cW.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cW))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fm.prototype={
hC:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
hy:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.cY.prototype={}
X.fs.prototype={
aU:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.Z(o.a+n*m,o.b+u*t)
t=q.a.gaH()
r=new X.ad(a,V.aC(),q.x,t,s)
r.b=!0
q.z=new P.ac(p,!1)
q.x=s
return r},
ca:function(a,b){this.r=a.a
return!1},
aZ:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dN()
if(typeof u!=="number")return u.ag()
this.r=(u&~t)>>>0
return!1},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.aU(a,b))
return!0},
hD:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaH()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.c0(new V.C(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
fc:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cY(c,r.a.gaH(),b)
s.b=!0
t.v(s)
r.y=new P.ac(u,!1)
r.x=V.aC()}}
X.a4.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a4))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ad.prototype={}
X.fQ.prototype={
by:function(a,b,c){var u=this,t=new P.ac(Date.now(),!1),s=u.a.gaH(),r=new X.ad(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ca:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.by(a,b,!0))
return!0},
aZ:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dN()
if(typeof t!=="number")return t.ag()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.by(a,b,!0))
return!0},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.by(a,b,!1))
return!0},
hE:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaH()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.c0(new V.C(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gbS:function(){var u=this.b
return u==null?this.b=D.z():u},
gbj:function(){var u=this.c
return u==null?this.c=D.z():u},
gaM:function(){var u=this.d
return u==null?this.d=D.z():u}}
X.c0.prototype={}
X.h3.prototype={}
X.c8.prototype={}
X.hK.prototype={
aU:function(a,b){var u=this,t=new P.ac(Date.now(),!1),s=a.length>0?a[0]:V.aC(),r=u.a.gaH(),q=new X.c8(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hB:function(a){var u=this.b
if(u==null)return!1
u.v(this.aU(a,!0))
return!0},
hz:function(a){var u=this.c
if(u==null)return!1
u.v(this.aU(a,!0))
return!0},
hA:function(a){var u=this.d
if(u==null)return!1
u.v(this.aU(a,!1))
return!0},
gcn:function(a){var u=this.b
return u==null?this.b=D.z():u},
gd5:function(a){var u=this.c
return u==null?this.c=D.z():u},
gaM:function(){var u=this.d
return u==null?this.d=D.z():u}}
X.du.prototype={
gaH:function(){var u=this.a,t=C.f.gd2(u).c
t.toString
u=C.f.gd2(u).d
u.toString
return V.kk(0,0,t,u)},
cE:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cW(u,new X.a4(t,a.altKey,a.shiftKey))},
aF:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a4(t,a.altKey,a.shiftKey)},
bF:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a4(t,a.altKey,a.shiftKey)},
as:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.A()
u=t.top
if(typeof r!=="number")return r.A()
return new V.Z(s-q,r-u)},
aV:function(a){return new V.C(a.movementX,a.movementY)},
bC:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.Z])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.b.U(r.pageX)
C.b.U(r.pageY)
p=o.left
C.b.U(r.pageX)
n.push(new V.Z(q-p,C.b.U(r.pageY)-o.top))}return n},
aq:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cE(u,new X.a4(t,a.altKey,a.shiftKey))},
bz:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.A()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.A()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f6:function(a){this.f=!0},
eR:function(a){this.f=!1},
eX:function(a){if(this.f&&this.bz(a))a.preventDefault()},
fa:function(a){var u
if(!this.f)return
u=this.cE(a)
this.b.hC(u)},
f8:function(a){var u
if(!this.f)return
u=this.cE(a)
this.b.hy(u)},
fe:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aF(a)
if(r.x){u=r.aq(a)
t=r.aV(a)
if(r.d.ca(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aq(a)
s=r.as(a)
if(r.c.ca(u,s))a.preventDefault()},
fi:function(a){var u,t,s,r=this
r.aF(a)
u=r.aq(a)
if(r.x){t=r.aV(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.aZ(u,s))a.preventDefault()},
f0:function(a){var u,t,s,r=this
if(!r.bz(a)){r.aF(a)
u=r.aq(a)
if(r.x){t=r.aV(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.aZ(u,s))a.preventDefault()}},
fg:function(a){var u,t,s,r=this
r.aF(a)
u=r.aq(a)
if(r.x){t=r.aV(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.aY(u,s))a.preventDefault()},
eZ:function(a){var u,t,s,r=this
if(!r.bz(a)){r.aF(a)
u=r.aq(a)
if(r.x){t=r.aV(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.aY(u,s))a.preventDefault()}},
fk:function(a){var u,t,s=this
s.aF(a)
u=new V.C((a&&C.r).gh9(a),C.r.gha(a)).u(0,180)
if(s.x){if(s.d.hD(u))a.preventDefault()
return}if(s.r)return
t=s.as(a)
if(s.c.hE(u,t))a.preventDefault()},
fm:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aq(s.y)
t=s.as(s.y)
s.d.fc(u,t,r)}},
fF:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bF(a)
u=t.bC(a)
if(t.e.hB(u))a.preventDefault()},
fB:function(a){var u
this.bF(a)
u=this.bC(a)
if(this.e.hz(u))a.preventDefault()},
fD:function(a){var u
this.bF(a)
u=this.bC(a)
if(this.e.hA(u))a.preventDefault()}}
D.eH.prototype={$ia1:1}
D.bk.prototype={
ap:function(a){var u=this.r
if(u!=null)u.v(a)},
e0:function(){return this.ap(null)},
$ia1:1}
D.a1.prototype={}
D.cX.prototype={
ap:function(a){var u=this.y
if(u!=null)u.v(a)},
cL:function(a){var u=this.z
if(u!=null)u.v(a)},
fb:function(){return this.cL(null)},
fo:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.ep(s))return!1}return!0},
eL:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcK(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.bk)this.f.push(q)
p=q.r
if(p==null){p=new D.bl()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.b_()
u.b=!0
this.ap(u)},
ft:function(a,b){var u,t,s
for(u=b.gN(b),t=this.gcK();u.t();){s=u.gG(u)
C.a.M(this.e,s)
s.gm().M(0,t)}u=new D.b0()
u.b=!0
this.ap(u)},
ep:function(a){var u=C.a.Z(this.f,a)
return u},
$aj:function(){return[D.a1]},
$aal:function(){return[D.a1]}}
D.h2.prototype={$ia1:1}
D.hq.prototype={$ia1:1}
V.H.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.a0.prototype={
hZ:function(){var u=this
return new V.a0(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.f2.prototype={}
V.d1.prototype={
a0:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d1))return!1
u=b.a
t=$.v().a
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
i:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bD(H.b([q.a,q.d,q.r],p),3,0),n=V.bD(H.b([q.b,q.e,q.x],p),3,0),m=V.bD(H.b([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.f(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.f(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.f(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.f(o,1)
r=" "+o[1]+", "
if(1>=t)return H.f(n,1)
r=r+n[1]+", "
if(1>=s)return H.f(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.f(o,2)
p=" "+o[2]+", "
if(2>=t)return H.f(n,2)
p=p+n[2]+", "
if(2>=s)return H.f(m,2)
return r+(p+m[2]+"]")}}
V.ah.prototype={
a0:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
c2:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.v().a)return V.bq()
u=1/b1
t=-n
s=-a0
return V.ao((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ao(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bi:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.A(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b1:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.v().a
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
B:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bD(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bD(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bD(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bD(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.f(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.f(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.f(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.f(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.f(n,1)
q=q+n[1]+", "
if(1>=t)return H.f(m,1)
q=q+m[1]+", "
if(1>=s)return H.f(l,1)
q=q+l[1]+", "
if(1>=r)return H.f(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.f(n,2)
u=u+n[2]+", "
if(2>=t)return H.f(m,2)
u=u+m[2]+", "
if(2>=s)return H.f(l,2)
u=u+l[2]+", "
if(2>=r)return H.f(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.f(n,3)
q=q+n[3]+", "
if(3>=t)return H.f(m,3)
q=q+m[3]+", "
if(3>=s)return H.f(l,3)
q=q+l[3]+", "
if(3>=r)return H.f(k,3)
return u+(q+k[3]+"]")},
J:function(){return this.B("")}}
V.Z.prototype={
A:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.T.prototype={
A:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.aD.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.da.prototype={
ga7:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.da))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.C.prototype={
c4:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.C(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.v().a){u=$.ku
return u==null?$.ku=new V.C(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.C(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=this.a
s=$.v()
s.toString
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.A.prototype={
c4:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c5:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.A(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aW:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.A(-this.a,-this.b,-this.c)},
u:function(a,b){if(Math.abs(b-0)<$.v().a)return V.dy()
return new V.A(this.a/b,this.b/b,this.c/b)},
dl:function(){var u=$.v().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
U.eN.prototype={
br:function(a){var u=V.jm(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
D:function(a){var u=this.y
if(u!=null)u.v(a)},
scg:function(a,b){},
sc6:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.v().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.br(u)}s=new D.r("maximumLocation",s,t.b)
s.b=!0
t.D(s)}},
sc8:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.v().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.br(u)}s=new D.r("minimumLocation",s,t.c)
s.b=!0
t.D(s)}},
sa6:function(a,b){var u,t=this
b=t.br(b)
u=t.d
if(!(Math.abs(u-b)<$.v().a)){t.d=b
u=new D.r("location",u,b)
u.b=!0
t.D(u)}},
sc7:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.v().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.r("maximumVelocity",r,a)
r.b=!0
s.D(r)}},
sO:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.v().a)){u.f=a
t=new D.r("velocity",t,a)
t.b=!0
u.D(t)}},
sbO:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.v().a)){this.x=a
u=new D.r("dampening",u,a)
u.b=!0
this.D(u)}},
ae:function(a,b){var u,t,s,r=this,q=r.f,p=$.v().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa6(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.v().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sO(u)}}}
U.bN.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
sS:function(a,b){var u,t,s,r=this
if(!J.L(r.a,b)){u=r.a
r.a=b
t=new D.r("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.v(t)}},
ao:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bN))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bR.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
D:function(a){var u=this.e
if(u!=null)u.v(a)},
a2:function(){return this.D(null)},
e2:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaE(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b_()
u.b=!0
this.D(u)},
fq:function(a,b){var u,t
for(u=b.gN(b),t=this.gaE();u.t();)u.gG(u).gm().M(0,t)
u=new D.b0()
u.b=!0
this.D(u)},
ao:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a4()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.Y(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.ao(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.bq():u
r=s.e
if(r!=null)r.an(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bR))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.L(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a5]},
$aal:function(){return[U.a5]},
$ia5:1}
U.a5.prototype={}
U.c7.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
D:function(a){var u=this.y
if(u!=null)u.v(a)},
sdK:function(a){var u
a=V.jm(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.v().a)){this.a=a
u=new D.r("yaw",u,a)
u.b=!0
this.D(u)}},
sdB:function(a,b){var u
b=V.jm(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.v().a)){this.b=b
u=new D.r("pitch",u,b)
u.b=!0
this.D(u)}},
sdE:function(a){var u
a=V.jm(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.v().a)){this.c=a
u=new D.r("roll",u,a)
u.b=!0
this.D(u)}},
sbP:function(a){var u=this.e
if(!(Math.abs(u-a)<$.v().a)){this.e=a
u=new D.r("deltaPitch",u,a)
u.b=!0
this.D(u)}},
sbQ:function(a){var u=this.f
if(!(Math.abs(u-a)<$.v().a)){this.f=a
u=new D.r("deltaRoll",u,a)
u.b=!0
this.D(u)}},
ao:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdK(u.a+u.d*b.y)
u.sdB(0,u.b+u.e*b.y)
u.sdE(u.c+u.f*b.y)
u.x=V.ka(u.c).q(0,V.k9(u.b)).q(0,V.k8(u.a))
t=u.y
if(t!=null)t.an(0)}return u.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.c7))return!1
u=r.a
t=b.a
s=$.v().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotator: ["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+"], ["+V.B(u.d,3,0)+", "+V.B(u.e,3,0)+", "+V.B(u.f,3,0)+"]"}}
U.dv.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.z():u},
D:function(a){var u=this.cy
if(u!=null)u.v(a)},
a2:function(){return this.D(null)},
at:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gbS().l(0,u.gbl())
u.a.c.gaM().l(0,u.gbn())
u.a.c.gbj().l(0,u.gbp())
return!0},
bm:function(a){var u=this
if(!J.L(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bo:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iad")
if(!n.y)return
if(n.x){u=a.d.A(0,a.y)
u=new V.C(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.A(0,a.y)
u=new V.C(t.a,t.b).q(0,2).u(0,u.ga7())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sO(u*10*s)}else{u=a.c
t=a.d
s=t.A(0,a.y)
r=new V.C(s.a,s.b).q(0,2).u(0,u.ga7())
s=n.b
q=r.a
if(typeof q!=="number")return q.L()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sa6(0,-q*p+o)
n.b.sO(0)
t=t.A(0,a.z)
n.Q=new V.C(t.a,t.b).q(0,2).u(0,u.ga7())}n.a2()},
bq:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sO(t*10*s)
r.a2()}},
ao:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.a4()
if(s<r){t.ch=r
u=b.y
t.b.ae(0,u)
t.cx=V.ka(t.b.d)}return t.cx},
$ia5:1}
U.dw.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.z():u},
D:function(a){var u=this.fx
if(u!=null)u.v(a)},
a2:function(){return this.D(null)},
at:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gbS().l(0,s.gbl())
s.a.c.gaM().l(0,s.gbn())
s.a.c.gbj().l(0,s.gbp())
u=s.a.d
t=u.f
u=t==null?u.f=D.z():t
u.l(0,s.gey())
u=s.a.d
t=u.d
u=t==null?u.d=D.z():t
u.l(0,s.geA())
u=s.a.e
u.gcn(u).l(0,s.ge7())
s.a.e.gaM().l(0,s.ge5())
u=s.a.e
u.gd5(u).l(0,s.ge3())
return!0},
aj:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.L()
u=-u}if(this.r){if(typeof t!=="number")return t.L()
t=-t}return new V.C(u,t)},
bm:function(a){var u=this
H.h(a,"$iad")
if(!J.L(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bo:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iad")
if(!n.cx)return
if(n.ch){u=a.d.A(0,a.y)
u=new V.C(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.A(0,a.y)
u=n.aj(new V.C(t.a,t.b).q(0,2).u(0,u.ga7()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sO(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sO(-u*10*t)}else{u=a.c
t=a.d
s=t.A(0,a.y)
r=n.aj(new V.C(s.a,s.b).q(0,2).u(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa6(0,-p*q+s)
n.b.sO(0)
n.c.sO(0)
t=t.A(0,a.z)
n.dx=n.aj(new V.C(t.a,t.b).q(0,2).u(0,u.ga7()))}n.a2()},
bq:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sO(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sO(-t*10*u)
r.a2()}},
ez:function(a){var u=this
if(H.h(a,"$icY").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eB:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iad")
if(!J.L(n.d,a.x.b))return
u=a.c
t=a.d
s=t.A(0,a.y)
r=n.aj(new V.C(s.a,s.b).q(0,2).u(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa6(0,-p*q+s)
n.b.sO(0)
n.c.sO(0)
t=t.A(0,a.z)
n.dx=n.aj(new V.C(t.a,t.b).q(0,2).u(0,u.ga7()))
n.a2()},
e8:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
e6:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$ic8")
if(!n.cx)return
if(n.ch){u=a.d.A(0,a.y)
u=new V.C(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.A(0,a.y)
u=n.aj(new V.C(t.a,t.b).q(0,2).u(0,u.ga7()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sO(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sO(-u*10*t)}else{u=a.c
t=a.d
s=t.A(0,a.y)
r=n.aj(new V.C(s.a,s.b).q(0,2).u(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa6(0,-p*q+s)
n.b.sO(0)
n.c.sO(0)
t=t.A(0,a.z)
n.dx=n.aj(new V.C(t.a,t.b).q(0,2).u(0,u.ga7()))}n.a2()},
e4:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sO(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sO(-t*10*u)
r.a2()}},
ao:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.a4()
if(s<r){t.dy=r
u=b.y
t.c.ae(0,u)
t.b.ae(0,u)
t.fr=V.k8(t.b.d).q(0,V.k9(t.c.d))}return t.fr},
$ia5:1}
U.dx.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
D:function(a){var u=this.r
if(u!=null)u.v(a)},
at:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.z():t
t=r.geI()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.z():s).l(0,t)
return!0},
eJ:function(a){var u,t,s,r,q=this
if(!J.L(q.b,q.a.b.c))return
H.h(a,"$ic0")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.r("zoom",u,r)
u.b=!0
q.D(u)}},
ao:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ly(u,u,u)}return t.f},
$ia5:1}
M.cI.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
T:function(a){var u=this.r
if(u!=null)u.v(a)},
aS:function(){return this.T(null)},
fv:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gV(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b_()
u.b=!0
this.T(u)},
fz:function(a,b){var u,t
for(u=b.gN(b),t=this.gV();u.t();)u.gG(u).gm().M(0,t)
u=new D.b0()
u.b=!0
this.T(u)},
a3:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.Y(u,u.length);u.t();){t=u.d
if(t!=null)t.a3(a)}s.f=!1},
$aj:function(){return[M.ai]},
$aal:function(){return[M.ai]},
$iai:1}
M.cJ.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
T:function(a){var u=this.r
if(u!=null)u.v(a)},
aS:function(){return this.T(null)},
saG:function(a){var u,t,s=this
if(a==null)a=new X.fe()
u=s.b
if(u!==a){if(u!=null)u.gm().M(0,s.gV())
t=s.b
s.b=a
a.gm().l(0,s.gV())
u=new D.r("camera",t,s.b)
u.b=!0
s.T(u)}},
saN:function(a,b){var u,t,s=this
if(b==null)b=X.jw(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gm().M(0,s.gV())
t=s.c
s.c=b
b.gm().l(0,s.gV())
u=new D.r("target",t,s.c)
u.b=!0
s.T(u)}},
saO:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().M(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gV())
s=new D.r("technique",u,t.d)
s.b=!0
t.T(s)}},
a3:function(a){var u=this
a.cc(u.d)
u.c.P(a)
u.b.P(a)
u.e.ae(0,a)
u.e.a3(a)
u.b.a8(a)
u.c.toString
a.cb()},
$iai:1}
M.cO.prototype={
T:function(a){var u=this.y
if(u!=null)u.v(a)},
aS:function(){return this.T(null)},
eT:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gV(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bl()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b_()
u.b=!0
this.T(u)},
eV:function(a,b){var u,t
for(u=b.gN(b),t=this.gV();u.t();)u.gG(u).gm().M(0,t)
u=new D.b0()
u.b=!0
this.T(u)},
saG:function(a){var u,t,s=this
if(a==null)a=X.ke(null)
u=s.b
if(u!==a){if(u!=null)u.gm().M(0,s.gV())
t=s.b
s.b=a
a.gm().l(0,s.gV())
u=new D.r("camera",t,s.b)
u.b=!0
s.T(u)}},
saN:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().M(0,t.gV())
u=t.c
t.c=b
b.gm().l(0,t.gV())
s=new D.r("target",u,t.c)
s.b=!0
t.T(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
a3:function(a){var u,t=this
a.cc(t.d)
t.c.P(a)
t.b.P(a)
for(u=t.e.a,u=new J.Y(u,u.length);u.t();)u.d.ae(0,a)
for(u=t.e.a,u=new J.Y(u,u.length);u.t();)u.d.a3(a)
t.b.toString
a.cy.ax()
a.db.ax()
t.c.a8(a)
a.cb()},
$iai:1}
M.ai.prototype={}
A.cA.prototype={}
A.ez.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hf:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bR:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.V.prototype={
gai:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.V))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.fv.prototype={
dW:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aI("")
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
A.mp(c0,u)
A.mr(c0,u)
A.mq(c0,u)
A.mt(c0,u)
A.mu(c0,u)
A.ms(c0,u)
A.mv(c0,u)
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
b5.c1(0,s.charCodeAt(0)==0?s:s,A.mo(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.h(b5.y.F(0,"invViewMat"),"$ia_")
if(t)b5.dy=H.h(b5.y.F(0,"objMat"),"$ia_")
if(r)b5.fr=H.h(b5.y.F(0,"viewObjMat"),"$ia_")
b5.fy=H.h(b5.y.F(0,"projViewObjMat"),"$ia_")
if(c0.go)b5.fx=H.h(b5.y.F(0,"viewMat"),"$ia_")
if(c0.x1)b5.k1=H.h(b5.y.F(0,"txt2DMat"),"$icb")
if(c0.x2)b5.k2=H.h(b5.y.F(0,"txtCubeMat"),"$ia_")
if(c0.y1)b5.k3=H.h(b5.y.F(0,"colorMat"),"$ia_")
b5.r1=H.b([],[A.a_])
t=c0.bc
if(t>0){b5.k4=b5.y.F(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.p(P.o(b7+q+b8))
s.push(H.h(m,"$ia_"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.F(0,"emissionClr"),"$iD")
if(t.c)b5.ry=H.h(b5.y.F(0,"emissionTxt"),"$iU")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.F(0,"ambientClr"),"$iD")
if(t.c)b5.y1=H.h(b5.y.F(0,"ambientTxt"),"$iU")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.F(0,"diffuseClr"),"$iD")
if(t.c)b5.av=H.h(b5.y.F(0,"diffuseTxt"),"$iU")
t=c0.d
if(t.a)b5.bd=H.h(b5.y.F(0,"invDiffuseClr"),"$iD")
if(t.c)b5.d6=H.h(b5.y.F(0,"invDiffuseTxt"),"$iU")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.d9=H.h(b5.y.F(0,"shininess"),"$iN")
if(s)b5.d7=H.h(b5.y.F(0,"specularClr"),"$iD")
if(t.c)b5.d8=H.h(b5.y.F(0,"specularTxt"),"$iU")}if(c0.f.c)b5.da=H.h(b5.y.F(0,"bumpTxt"),"$iU")
if(c0.db){b5.dc=H.h(b5.y.F(0,"envSampler"),"$iU")
t=c0.r
if(t.a)b5.dd=H.h(b5.y.F(0,"reflectClr"),"$iD")
if(t.c)b5.de=H.h(b5.y.F(0,"reflectTxt"),"$iU")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.df=H.h(b5.y.F(0,"refraction"),"$iN")
if(s)b5.dg=H.h(b5.y.F(0,"refractClr"),"$iD")
if(t.c)b5.dh=H.h(b5.y.F(0,"refractTxt"),"$iU")}}t=c0.y
if(t.a)b5.di=H.h(b5.y.F(0,"alpha"),"$iN")
if(t.c)b5.dj=H.h(b5.y.F(0,"alphaTxt"),"$iU")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.w
b5.bU=new H.G([r,A.b9])
b5.bV=new H.G([r,[P.b4,A.c9]])
for(r=[A.c9],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iD")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iD")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iD")
if(typeof j!=="number")return j.ag()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iN")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iN")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iN")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c9(m,g,f,a0,a,b))}b5.bV.k(0,j,h)
q=b5.bU
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.w
b5.bW=new H.G([r,A.b9])
b5.bX=new H.G([r,[P.b4,A.ca]])
for(r=[A.ca],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ag()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.h(m,"$iD")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.h(g,"$iD")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.p(P.o(b7+a1+b8))
H.h(f,"$iD")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.h(m,"$iD")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.h(g,"$iD")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$ibv")
a5=f}else a5=b6
h.push(new A.ca(a4,a3,a2,m,g,a5))}b5.bX.k(0,j,h)
q=b5.bW
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.w
b5.bY=new H.G([r,A.b9])
b5.bZ=new H.G([r,[P.b4,A.cc]])
for(r=[A.cc],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iD")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iD")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iD")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$icb")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iU")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iU")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$ibu")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iN")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iN")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iN")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cc(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.bZ.k(0,j,h)
q=b5.bY
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.w
b5.c_=new H.G([r,A.b9])
b5.c0=new H.G([r,[P.b4,A.cd]])
for(r=[A.cd],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iD")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iD")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iD")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iD")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iD")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iD")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.p(P.o(b7+o+b8))
H.h(a9,"$iN")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.p(P.o(b7+o+b8))
H.h(b0,"$iN")
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
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$ibu")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iN")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.h(c,"$iN")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iN")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.h(c,"$iN")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.p(P.o(b7+a1+b8))
H.h(a9,"$iN")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$ibv")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$ibv")
a7=d}else a7=b6
h.push(new A.cd(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.c0.k(0,j,h)
q=b5.c_
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}}},
aa:function(a,b){if(b!=null&&b.d>=6)a.ck(b)}}
A.cB.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cL.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.d8.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.df.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fy.prototype={
i:function(a){return this.av}}
A.c9.prototype={}
A.ca.prototype={}
A.cc.prototype={}
A.cd.prototype={}
A.dc.prototype={
bk:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
c1:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cF(b,35633)
r.f=r.cF(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.o("Failed to link shader: "+H.e(s)))}r.fN()
r.fP()},
P:function(a){a.a.useProgram(this.r)
this.x.hf()},
cF:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fN:function(){var u,t,s,r=this,q=H.b([],[A.cA]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cA(p,t.name,s))}r.x=new A.ez(q)},
fP:function(){var u,t,s,r=this,q=H.b([],[A.ds]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.h8(t.type,t.size,t.name,s))}r.y=new A.hV(q)},
aC:function(a,b,c){var u=this.a
if(a===1)return new A.b9(u,b,c)
else return A.jI(u,this.r,b,a,c)},
er:function(a,b,c){var u=this.a
if(a===1)return new A.bv(u,b,c)
else return A.jI(u,this.r,b,a,c)},
es:function(a,b,c){var u=this.a
if(a===1)return new A.U(u,b,c)
else return A.jI(u,this.r,b,a,c)},
b9:function(a,b){return new P.dI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
h8:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aC(b,c,d)
case 5121:return u.aC(b,c,d)
case 5122:return u.aC(b,c,d)
case 5123:return u.aC(b,c,d)
case 5124:return u.aC(b,c,d)
case 5125:return u.aC(b,c,d)
case 5126:return new A.N(u.a,c,d)
case 35664:return new A.hR(u.a,c,d)
case 35665:return new A.D(u.a,c,d)
case 35666:return new A.bu(u.a,c,d)
case 35667:return new A.hS(u.a,c,d)
case 35668:return new A.hT(u.a,c,d)
case 35669:return new A.hU(u.a,c,d)
case 35674:return new A.hW(u.a,c,d)
case 35675:return new A.cb(u.a,c,d)
case 35676:return new A.a_(u.a,c,d)
case 35678:return u.er(b,c,d)
case 35680:return u.es(b,c,d)
case 35670:throw H.c(u.b9("BOOL",c))
case 35671:throw H.c(u.b9("BOOL_VEC2",c))
case 35672:throw H.c(u.b9("BOOL_VEC3",c))
case 35673:throw H.c(u.b9("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.hl.prototype={}
A.hn.prototype={}
A.ds.prototype={}
A.hV.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
F:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.J()},
J:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b9.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hS.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hQ.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.N.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hR.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.D.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bu.prototype={
dO:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cb.prototype={
a5:function(a){var u=new Float32Array(H.cr(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a_.prototype={
a5:function(a){var u=new Float32Array(H.cr(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bv.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.U.prototype={
ck:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.j1.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c5(s.b,b).c5(s.d.c5(s.c,b),c)
s=new V.T(r.a,r.b,r.c)
if(!J.L(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a_()}a.sb_(r.u(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
u=new V.aD(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.L(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a_()}}}
F.aX.prototype={
ej:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dy()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dl())return
return s.u(0,Math.sqrt(s.w(s)))},
el:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.A(0,q)
r=new V.A(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.w(r)))
r=t.A(0,q)
r=new V.A(r.a,r.b,r.c)
r=s.aW(r.u(0,Math.sqrt(r.w(r))))
return r.u(0,Math.sqrt(r.w(r)))},
bL:function(){var u,t=this
if(t.d!=null)return!0
u=t.ej()
if(u==null){u=t.el()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
ei:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dy()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dl())return
return s.u(0,Math.sqrt(s.w(s)))},
ek:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.v().a){l=d.A(0,g)
l=new V.A(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.L(0)}else{p=(l-u.b)/r
l=d.A(0,g)
l=new V.T(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).A(0,j)
l=new V.A(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.L(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.w(l)))
l=o.aW(q)
l=l.u(0,Math.sqrt(l.w(l))).aW(o)
q=l.u(0,Math.sqrt(l.w(l)))}return q},
bJ:function(){var u,t=this
if(t.e!=null)return!0
u=t.ei()
if(u==null){u=t.ek()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.d.ad(J.aa(s.e),0)+", "+C.d.ad(J.aa(t.b.e),0)+", "+C.d.ad(J.aa(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
J:function(){return this.B("")}}
F.bV.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.d.ad(J.aa(u.e),0)+", "+C.d.ad(J.aa(this.b.e),0)},
J:function(){return this.B("")}}
F.c4.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.d.ad(J.aa(u.e),0)},
J:function(){return this.B("")}}
F.he.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
hp:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.X()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.l(0,r.h7())}h.a.X()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.c4()
if(n.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.lr(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bQ(l,k,i)}g=h.e
if(g!=null)g.an(0)},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.an(0)
return u},
bI:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.a9()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aS().a)!==0)++s
if((t&$.aR().a)!==0)++s
if((t&$.bd().a)!==0)++s
if((t&$.aT().a)!==0)++s
if((t&$.cw().a)!==0)++s
if((t&$.cx().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.aQ().a)!==0)++s
r=a4.gcm(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cD])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.h_(m)
k=l.gcm(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cD(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].hm(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cr(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bi(new Z.dz(a1,d),o,a4)
c.b=H.b([],[Z.bm])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.X()
b.push(t.e)}a=Z.jK(u,34963,b)
c.b.push(new Z.bm(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.X()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.X()
b.push(t.e)}a=Z.jK(u,34963,b)
c.b.push(new Z.bm(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.X()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.X()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.X()
b.push(t.e)}a=Z.jK(u,34963,b)
c.b.push(new Z.bm(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.t])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.B(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.B(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.B(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.B(t))}return C.a.p(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.v(null)}}
F.hf.prototype={
fY:function(a){var u,t,s,r,q=H.b([],[F.aX]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.bQ(p,s,r))}return q},
fZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aX])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.f(c,s)
m=c[s];++s
if(s>=n)return H.f(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.f(c,k)
j=c[k]
if(t<0||t>=n)return H.f(c,t)
i=c[t]
n=u.a
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.bQ(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bQ(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bQ(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bQ(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bL())s=!1
return s},
bK:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bJ())s=!1
return s},
i:function(a){return this.J()},
B:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(a))
return C.a.p(r,"\n")},
J:function(){return this.B("")}}
F.hg.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.J()},
B:function(a){var u,t,s=H.b([],[P.t]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].B(a+(""+u+". ")))}return C.a.p(s,"\n")},
J:function(){return this.B("")}}
F.hh.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.J()},
B:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(a))
return C.a.p(r,"\n")},
J:function(){return this.B("")}}
F.bw.prototype={
bN:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.i6(u.cx,r,o,t,s,q,p,a,n)},
h7:function(){return this.bN(null)},
sb_:function(a){var u
if(!J.L(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
hm:function(a){var u,t,s=this
if(a.n(0,$.a9())){u=s.f
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aS())){u=s.r
t=[P.K]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aR())){u=s.x
t=[P.K]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.bd())){u=s.y
t=[P.K]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.aT())){u=s.z
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cw())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cx())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bH()))return H.b([s.ch],[P.K])
else if(a.n(0,$.aQ())){u=s.cx
t=[P.K]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.K])},
bL:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dy()
t.d.I(0,new F.ie(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.an(0)}return!0},
bJ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dy()
t.d.I(0,new F.id(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.an(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var u,t,s=this,r="-",q=H.b([],[P.t])
q.push(C.d.ad(J.aa(s.e),0))
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
q.push(V.B(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.p(q,", ")
return a+"{"+t+"}"},
J:function(){return this.B("")}}
F.ie.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.id.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.i7.prototype={
X:function(){},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a_()
return!0},
bb:function(a,b,c,d,e,f){var u=F.i6(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bL()
return!0},
bK:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bJ()
return!0},
h2:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.J()},
B:function(a){var u,t,s,r
this.X()
u=H.b([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].B(a))
return C.a.p(u,"\n")},
J:function(){return this.B("")}}
F.i8.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
I:function(a,b){var u=this
C.a.I(u.b,b)
C.a.I(u.c,new F.i9(u,b))
C.a.I(u.d,new F.ia(u,b))},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.p(r,"\n")}}
F.i9.prototype={
$1:function(a){if(!J.L(a.a,this.a))this.b.$1(a)}}
F.ia.prototype={
$1:function(a){var u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)}}
F.ib.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.p(r,"\n")}}
F.ic.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.p(r,"\n")}}
O.d0.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.z():u},
R:function(a){var u=this.fr
if(u!=null)u.v(a)},
aT:function(){return this.R(null)},
cO:function(a){this.a=null
this.R(a)},
fL:function(){return this.cO(null)},
eN:function(a,b){var u=new D.b_()
u.b=!0
this.R(u)},
eP:function(a,b){var u=new D.b0()
u.b=!0
this.R(u)},
cD:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.G(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gal()
o=u.h(0,q.gal())
u.k(0,p,o==null?1:o)}n=H.b([],[A.cB])
u.I(0,new O.fC(g,n))
C.a.aR(n,new O.fD())
m=new H.G(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],[A.cL])
m.I(0,new O.fE(g,l))
C.a.aR(l,new O.fF())
k=new H.G(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gal()
o=k.h(0,q.gal())
k.k(0,p,o==null?1:o)}j=H.b([],[A.d8])
k.I(0,new O.fG(g,j))
C.a.aR(j,new O.fH())
i=new H.G(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gal()
p=i.h(0,q.gal())
i.k(0,s,p==null?1:p)}h=H.b([],[A.df])
i.I(0,new O.fI(g,h))
C.a.aR(h,new O.fJ())
f=C.c.Y(g.e.a.length+3,4)
g.dy.e
return A.lx(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a9:function(a,b){if(b!=null)if(!C.a.Z(a,b)){b.a=a.length
a.push(b)}},
ae:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.Y(u,u.length);u.t();){t=u.d
t.toString
s=$.i5
if(s==null)s=$.i5=new V.A(0,0,1)
t.a=s
r=$.i4
t.d=r==null?$.i4=new V.A(0,1,0):r
r=$.i3
t.e=r==null?$.i3=new V.A(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bi(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bi(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bi(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
cd:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cD()
u=b2.fr.h(0,b1.av)
if(u==null){u=A.lw(b1,b2.a)
b2.bG(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bd
b1=b3.e
if(!(b1 instanceof Z.bi))b1=b3.e=null
if(b1==null||!b1.d.n(0,s)){b1=t.k4
if(b1)b3.d.au()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bK()
q.a.bK()
q=q.e
if(q!=null)q.an(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.h2()
p=p.e
if(p!=null)p.an(0)}n=b3.d.bI(new Z.cf(b2.a),s)
n.am($.a9()).e=b0.a.Q.c
if(b1)n.am($.aS()).e=b0.a.cx.c
if(r)n.am($.aR()).e=b0.a.ch.c
if(t.r2)n.am($.bd()).e=b0.a.cy.c
if(q)n.am($.aT()).e=b0.a.db.c
if(t.ry)n.am($.aQ()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.dl])
b0.a.P(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gS(r)
b1=b1.dy
b1.toString
b1.a5(r.a0(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.gS(r)
q=b2.dx
q=b2.cx=r.q(0,q.gS(q))
r=q}b1=b1.fr
b1.toString
b1.a5(r.a0(0,!0))}b1=b0.a
r=b2.gdC()
b1=b1.fy
b1.toString
b1.a5(r.a0(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gS(r)
b1=b1.fx
b1.toString
b1.a5(r.a0(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a5(C.j.a0(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a5(C.j.a0(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a5(C.j.a0(r,!0))}if(t.bc>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.f(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.f(b1,k)
b1=b1[k]
j=new Float32Array(H.cr(r.a0(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a9(m,b0.f.e)
b1=b0.a
r=b0.f.e
b1.aa(b1.ry,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a9(m,b0.r.e)
b1=b0.a
r=b0.r.e
b1.aa(b1.y1,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a9(m,b0.x.e)
b1=b0.a
r=b0.x.e
b1.aa(b1.av,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bd
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a9(m,b0.y.e)
b1=b0.a
r=b0.y.e
b1.aa(b1.d6,r)}b1=t.e
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.z.ch
q=q.d9
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.d7
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a9(m,b0.z.e)
b1=b0.a
r=b0.z.e
b1.aa(b1.d8,r)}b1=t.z
if(b1.length>0){r=P.w
i=new H.G([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gal()
e=i.h(0,f)
if(e==null)e=0
i.k(0,f,e+1)
d=J.cy(b0.a.bV.h(0,f),e)
p=g.gi2()
o=$.aq
p=p.b1(o==null?$.aq=new V.T(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gi7()
o=$.aq
p=p.b1(o==null?$.aq=new V.T(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaI(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gd4()){p=g.gcX()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gcY()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gcZ()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.bU.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gS(r)
r=P.w
b=new H.G([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.k(0,0,e+1)
d=J.cy(b0.a.bX.h(0,0),e)
p=c.bi(g.a)
o=p.a
a=p.b
a0=p.c
a0=p.u(0,Math.sqrt(o*o+a*a+a0*a0))
a=d.e
o=a0.a
p=a0.b
a0=a0.c
a.a.uniform3f(a.d,o,p,a0)
a0=g.c
p=d.f
p.a.uniform3f(p.d,a0.a,a0.b,a0.c)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.bW.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gS(r)
r=P.w
a1=new H.G([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gal()
e=a1.h(0,f)
if(e==null)e=0
a1.k(0,f,e+1)
d=J.cy(b0.a.bZ.h(0,f),e)
a2=c.q(0,g.gS(g))
p=g.gS(g)
o=$.aq
p=p.b1(o==null?$.aq=new V.T(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aq
p=a2.b1(p==null?$.aq=new V.T(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaI(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gay()
p=a2.c2(0)
o=p.a
a=p.b
a0=p.c
a3=p.e
a4=p.f
a5=p.r
a6=p.y
a7=p.z
p=p.Q
a8=d.d
a8.toString
j=new Float32Array(H.cr(new V.d1(o,a,a0,a3,a4,a5,a6,a7,p).a0(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gay()
p=g.gay()
if(!C.a.Z(m,p)){p.a=m.length
m.push(p)}p=g.gay()
o=p.gaX(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaQ()
p=g.gdP()
o=d.x
o.toString
a=p.ghc(p)
a0=p.ghd(p)
a3=p.ghe()
p=p.ghb()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaQ()
if(!C.a.Z(m,p)){p.a=m.length
m.push(p)}p=g.gaQ()
o=p.gaX(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gd4()){p=g.gcX()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gcY()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gcZ()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.bY.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gS(r)
r=P.w
a9=new H.G([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gal()
e=a9.h(0,f)
if(e==null)e=0
a9.k(0,f,e+1)
d=J.cy(b0.a.c0.h(0,f),e)
p=g.ghF(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gi5(g).ij()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.b1(g.ghF(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaI(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gay()
p=g.gbj()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gce(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gik()
o=d.x
o.a.uniform1f(o.d,p)
p=g.gil()
o=d.y
o.a.uniform1f(o.d,p)
g.gay()
p=g.gay()
if(!C.a.Z(m,p)){p.a=m.length
m.push(p)}p=g.gay()
o=p.gaX(p)
if(o){o=d.dx
o.toString
a=p.gaX(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.ghj(p)
o.a.uniform1i(o.d,p)}}g.gaQ()
p=g.gdP()
o=d.z
o.toString
a=p.ghc(p)
a0=p.ghd(p)
a3=p.ghe()
p=p.ghb()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaQ()
if(!C.a.Z(m,p)){p.a=m.length
m.push(p)}p=g.gaQ()
o=p.gaX(p)
if(o){o=d.dy
o.toString
a=p.gaX(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.ghj(p)
o.a.uniform1i(o.d,p)}}if(g.gi6()){p=g.gi4()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gi3()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gd4()){p=g.gcX()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gcY()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gcZ()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.c_.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){b0.a9(m,b0.Q.e)
b1=b0.a
r=b0.Q.e
b1.aa(b1.da,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gS(r).c2(0)}b1=b1.id
b1.toString
b1.a5(r.a0(0,!0))}if(t.db){b0.a9(m,b0.ch)
b1=b0.a
r=b0.ch
b1.aa(b1.dc,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.dd
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a9(m,b0.cx.e)
b1=b0.a
r=b0.cx.e
b1.aa(b1.de,r)}b1=t.x
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.cy.ch
q=q.df
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.dg
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a9(m,b0.cy.e)
b1=b0.a
r=b0.cy.e
b1.aa(b1.dh,r)}}b1=t.y
r=b1.a
q=!r
if(q)p=b1.c
else p=!0
if(p){if(r){r=b0.a
p=b0.db.f
r=r.di
r.a.uniform1f(r.d,p)}if(b1.c){b0.a9(m,b0.db.e)
r=b0.a
p=b0.db.e
r.aa(r.dj,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].P(b2)
r=b3.e
r.P(b2)
r.a3(b2)
r.a8(b2)
if(q)b1=b1.c
else b1=!0
if(b1)b2.a.disable(3042)
for(b1=b2.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b1.activeTexture(33984+r.a)
b1.bindTexture(34067,null)}}r=b0.a
r.toString
b1.useProgram(null)
r.x.bR()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cD().av}}
O.fC.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cB(a,C.c.Y(b+3,4)*4))}}
O.fD.prototype={
$2:function(a,b){return J.cz(a.a,b.a)}}
O.fE.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cL(a,C.c.Y(b+3,4)*4))}}
O.fF.prototype={
$2:function(a,b){return J.cz(a.a,b.a)}}
O.fG.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.d8(a,C.c.Y(b+3,4)*4))}}
O.fH.prototype={
$2:function(a,b){return J.cz(a.a,b.a)}}
O.fI.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.df(a,C.c.Y(b+3,4)*4))}}
O.fJ.prototype={
$2:function(a,b){return J.cz(a.a,b.a)}}
O.fw.prototype={
ar:function(){var u,t=this
t.cq()
u=t.f
if(!(Math.abs(u-1)<$.v().a)){t.f=1
u=new D.r(t.b,u,1)
u.b=!0
t.a.R(u)}}}
O.bZ.prototype={
R:function(a){return this.a.R(a)},
aT:function(){return this.R(null)},
ar:function(){},
bD:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ar()
u=s.a
u.a=null
u.R(null)}},
sb_:function(a){var u,t=this,s=t.c
if(!s.c)t.bD(new A.V(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gm().M(0,t.gaB())
u=t.e
t.e=a
a.gm().l(0,t.gaB())
s=new D.r(t.b+".textureCube",u,t.e)
s.b=!0
t.a.R(s)}}}
O.fx.prototype={}
O.an.prototype={
cQ:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.r(s.b+".color",u,a)
t.b=!0
s.a.R(t)}},
ar:function(){this.cq()
this.cQ(new V.H(1,1,1))},
saI:function(a,b){this.bD(new A.V(!0,!1,this.c.c))
this.cQ(b)}}
O.fz.prototype={}
O.fA.prototype={
ar:function(){var u,t=this
t.cr()
u=t.ch
if(!(Math.abs(u-1)<$.v().a)){t.ch=1
u=new D.r(t.b+".refraction",u,1)
u.b=!0
t.a.R(u)}}}
O.fB.prototype={
cR:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.v().a)){u.ch=a
t=new D.r(u.b+".shininess",t,a)
t.b=!0
u.a.R(t)}},
ar:function(){this.cr()
this.cR(100)}}
O.dd.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
R:function(a){var u=this.e
if(u!=null)u.v(a)},
aT:function(){return this.R(null)},
cd:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.hl(t,n)
u.bk(t,n)
u.c1(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"fov"),"$iN")
u.ch=H.h(u.y.h(0,"ratio"),"$iN")
u.cx=H.h(u.y.h(0,"boxClr"),"$iD")
u.cy=H.h(u.y.h(0,"boxTxt"),"$iU")
u.db=H.h(u.y.h(0,"viewMat"),"$ia_")
a.bG(u)}o.a=u}if(b.e==null){t=b.d.bI(new Z.cf(a.a),$.a9())
t.am($.a9()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.P(a)}t=a.d
s=a.c
r=o.a
r.P(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.ck(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gS(s).c2(0)
r=r.db
r.toString
r.a5(s.a0(0,!0))
t=b.e
if(t instanceof Z.bi){t.P(a)
t.a3(a)
t.a8(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.bR()
t=o.c
if(t!=null)t.a8(a)}}
O.hm.prototype={
gm:function(){var u=this.c
return u==null?this.c=D.z():u},
ae:function(a,b){},
cd:function(a,b){var u,t,s,r=this,q="SolidColor",p=r.a
if(p==null){u=a.fr.h(0,q)
if(u==null){p=a.a
u=new A.hn(p,q)
u.bk(p,q)
u.c1(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"color"),"$ibu")
u.ch=H.h(u.y.h(0,"projViewObjMat"),"$ia_")
a.bG(u)}r.a=u
p=u}t=b.e
if((!(t instanceof Z.bi)?b.e=null:t)==null){p=b.d.bI(new Z.cf(a.a),$.a9())
t=p.am($.a9())
s=r.a
t.e=s.z.c
b.e=p
p=s}p.P(a)
t=r.b
p.Q.dO(t)
t=a.gdC()
p=p.ch
p.toString
p.a5(t.a0(0,!0))
t=b.e
t.P(a)
t.a3(a)
t.a8(a)
t=r.a
t.toString
a.a.useProgram(null)
t.x.bR()}}
O.dk.prototype={}
T.cG.prototype={
b3:function(a){},
e9:function(){return this.b3(null)},
at:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.gbS().l(0,t.geC())
t.b.c.gaM().l(0,t.geE())
t.b.c.gbj().l(0,t.geG())
u=t.b.e
u.gcn(u).l(0,t.gfV())
t.b.e.gaM().l(0,t.gfT())
u=t.b.e
u.gd5(u).l(0,t.gfR())
return!0},
eD:function(a){if(!H.h(a,"$iad").x.b.n(0,this.c))return
this.ch=this.Q=!0},
eF:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.h(a,"$iad")
u=a.d.A(0,a.y)
u=new V.C(u.a,u.b)
if(u.w(u)<t.z)return
t.ch=!1}},
eH:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.cM(a)},
fW:function(a){this.ch=this.Q=!0},
fU:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.h(a,"$ic8")
u=a.d.A(0,a.y)
u=new V.C(u.a,u.b)
if(u.w(u)<t.z)return
t.ch=!1}},
fS:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.cM(a)},
cM:function(a){var u,t,s,r,q,p,o,n,m
H.h(a,"$iad")
u=a.d
t=u.a
s=a.c
r=t/s.c
q=u.b/s.d
s=this.a
u=this.d
p=C.i.aK(r*(u.r-1))
o=C.i.aK(q*(u.x-1))
s=s.a
t=u.x
s.bindFramebuffer(36160,s.createFramebuffer())
s.readBuffer(36064)
s.framebufferTexture2D(36160,36064,3553,u.b,0)
n=new Uint8Array(4)
s.readPixels(p,t-1-o,1,1,6408,5121,n)
s.bindFramebuffer(36160,null)
new T.hG(n,1,1).ex()
u=n.length
if(0>=u)return H.f(n,0)
t=n[0]
if(1>=u)return H.f(n,1)
s=n[1]
if(2>=u)return H.f(n,2)
m=n[2]
if(3>=u)return H.f(n,3)
m=new T.cH(new V.C(r,q),V.cF(t,s,m,n[3]))
m.b=!0
s=this.x
if(s!=null)s.v(m)}}
T.cH.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.dl.prototype={}
T.hB.prototype={}
T.hC.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.z():u}}
T.hD.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
P:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a8:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hE.prototype={
dn:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.hD()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aD(u,k,r,34069,!1,!1)
t.aD(u,k,o,34070,!1,!1)
t.aD(u,k,q,34071,!1,!1)
t.aD(u,k,n,34072,!1,!1)
t.aD(u,k,p,34073,!1,!1)
t.aD(u,k,m,34074,!1,!1)
return u},
dm:function(a){return this.dn(a,".png")},
aD:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.P(u,"load",new T.hF(this,u,!1,b,!1,d,a),!1)},
fM:function(a,b,c){var u,t,s,r
b=V.cu(b)
u=V.cu(a.width)
t=V.cu(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jq()
s.width=u
s.height=t
r=C.f.dL(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mI(r.getImageData(0,0,s.width,s.height))}}}
T.hF.prototype={
$1:function(a){var u=this,t=u.a,s=t.fM(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.q.hT(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.bT()}++t.e}}
T.hG.prototype={
ex:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(u=this.c,t=C.c.Y(u,2),s=this.b,r=this.a,q=r.length,p=s*4,--u;t>=0;--t){o=p*t
n=p*(u-t)
for(m=0;m<s;++m){l=4*m
k=o+l
j=n+l
for(i=0;i<4;++i){h=k+i
g=j+i
if(h<0||h>=q)return H.f(r,h)
f=r[h]
if(g<0||g>=q)return H.f(r,g)
r[h]=r[g]
r[g]=f}}}}}
X.eG.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.z():u},
W:function(a){var u=this.fr
if(u!=null)u.v(a)},
saf:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.r("width",u,b)
u.b=!0
t.W(u)}},
sab:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.r("height",u,b)
u.b=!0
t.W(u)}},
P:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.q()
i.saf(0,C.b.U(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.q()
i.sab(0,C.b.U(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=u.getParameter(3379)
p=V.cu(s)
o=V.cu(r)
q=V.cu(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.q.dG(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.ko(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.bT()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.bT()
t=i.ch
s=t.b
i.z=s
i.c=t.r
i.d=t.x
u.bindTexture(g,s)
t=u.createRenderbuffer()
i.Q=t
u.bindRenderbuffer(f,t)
u.renderbufferStorage(f,33189,i.c,i.d)
t=u.createFramebuffer()
i.y=t
u.bindFramebuffer(e,t)
u.framebufferTexture2D(e,36064,g,i.z,0)
u.framebufferRenderbuffer(e,36096,f,i.Q)
u.bindTexture(g,h)
u.bindRenderbuffer(f,h)
u.bindFramebuffer(e,h)}u=a.a
u.bindFramebuffer(e,i.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=i.dy
s=t.c
a.c=C.b.U(s*i.a)
r=t.d
a.d=C.b.U(r*i.b)
l=t.a
k=i.c
j=C.b.U(l*k)
t=t.b
l=i.d
u.viewport(j,C.b.U(t*l),C.b.U(s*k),C.b.U(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
a8:function(a){a.a.bindFramebuffer(36160,null)}}
X.jp.prototype={}
X.fc.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.z():u},
P:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.u(u)
q=C.b.U(r*u)
r=s.b
if(typeof t!=="number")return H.u(t)
p=C.b.U(r*t)
r=C.b.U(s.c*u)
a.c=r
s=C.b.U(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
a8:function(a){}}
X.fe.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
P:function(a){var u
a.cy.bg(V.bq())
u=V.bq()
a.db.bg(u)},
a8:function(a){a.cy.ax()
a.db.ax()}}
X.d6.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.z():u},
W:function(a){var u=this.f
if(u!=null)u.v(a)},
ed:function(){return this.W(null)},
P:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ao(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bg(k)
r=$.kf
if(r==null){r=V.kh()
q=V.jJ()
p=$.kv
r=V.k7(r,q,p==null?$.kv=new V.A(0,0,-1):p)
$.kf=r
u=r}else u=r
r=s.b
if(r!=null){t=r.ao(0,a,s)
if(t!=null)u=t.q(0,u)}a.db.bg(u)},
a8:function(a){a.cy.ax()
a.db.ax()}}
X.hx.prototype={}
V.jk.prototype={
$1:function(a){var u=C.b.dI(this.a.ghh(),2)
if(u!=="0.00")P.jV(u+" fps")}}
V.hi.prototype={
dZ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.P(q,"scroll",new V.hk(o),!1)},
cW:function(a){var u,t,s,r,q,p,o,n
this.fO()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.hl(a),s.toString,r=new H.O(r),r=new P.cn(s.dJ(new H.bW(r,r.gj(r))).a());r.t();){s=r.gG(r)
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
if(H.n3(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.m5(C.F,s,C.n,!1)
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
fO:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hJ()
t=P.t
u.a=new H.G([t,L.dh])
u.b=new H.G([t,L.dq])
u.c=P.k5(t)
u.d=u.K(0,q)
t=u.K(0,q).p(0,p)
s=K.X(new H.O("*"))
t.a.push(s)
t.c=!0
t=u.K(0,p).p(0,p)
s=new K.aA()
r=[K.d_]
s.a=H.b([],r)
t.a.push(s)
t=K.X(new H.O("*"))
s.a.push(t)
t=u.K(0,p).p(0,"BoldEnd")
s=K.X(new H.O("*"))
t.a.push(s)
t.c=!0
t=u.K(0,q).p(0,o)
s=K.X(new H.O("_"))
t.a.push(s)
t.c=!0
t=u.K(0,o).p(0,o)
s=new K.aA()
s.a=H.b([],r)
t.a.push(s)
t=K.X(new H.O("_"))
s.a.push(t)
t=u.K(0,o).p(0,n)
s=K.X(new H.O("_"))
t.a.push(s)
t.c=!0
t=u.K(0,q).p(0,m)
s=K.X(new H.O("`"))
t.a.push(s)
t.c=!0
t=u.K(0,m).p(0,m)
s=new K.aA()
s.a=H.b([],r)
t.a.push(s)
t=K.X(new H.O("`"))
s.a.push(t)
t=u.K(0,m).p(0,"CodeEnd")
s=K.X(new H.O("`"))
t.a.push(s)
t.c=!0
t=u.K(0,q).p(0,l)
s=K.X(new H.O("["))
t.a.push(s)
t.c=!0
t=u.K(0,l).p(0,k)
s=K.X(new H.O("|"))
t.a.push(s)
s=u.K(0,l).p(0,j)
t=K.X(new H.O("]"))
s.a.push(t)
s.c=!0
s=u.K(0,l).p(0,l)
t=new K.aA()
t.a=H.b([],r)
s.a.push(t)
s=K.X(new H.O("|]"))
t.a.push(s)
s=u.K(0,k).p(0,j)
t=K.X(new H.O("]"))
s.a.push(t)
s.c=!0
s=u.K(0,k).p(0,k)
t=new K.aA()
t.a=H.b([],r)
s.a.push(t)
s=K.X(new H.O("|]"))
t.a.push(s)
u.K(0,q).p(0,i).a.push(new K.ev())
s=u.K(0,i).p(0,i)
t=new K.aA()
t.a=H.b([],r)
s.a.push(t)
s=K.X(new H.O("*_`["))
t.a.push(s)
s=u.K(0,"BoldEnd")
s.d=s.a.b0(p)
s=u.K(0,n)
s.d=s.a.b0(o)
s=u.K(0,"CodeEnd")
s.d=s.a.b0(m)
s=u.K(0,j)
s.d=s.a.b0("Link")
s=u.K(0,i)
s.d=s.a.b0(i)
this.b=u}}
V.hk.prototype={
$1:function(a){P.kq(C.h,new V.hj(this.a))}}
V.hj.prototype={
$0:function(){var u=C.b.U(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
M.jf.prototype={
$1:function(a){var u,t,s
for(u=this.a,t=0;t<u.length;++t){s=u[t]
s.sbP(0.99*s.e)
s.sbQ(0.99*s.f)}}}
M.jg.prototype={
$1:function(a){var u,t,s,r=H.h(a,"$icH").d.hZ()
for(u=this.a,t=0;t<u.length;++t)if(u[t].n(0,r)){u=this.b
if(t>=u.length)return H.f(u,t)
s=u[t]
s.sbP(1.21)
s.sbQ(1.31)
u=this.c
u.shH(0,C.o.dq()*2.8+0.2)
u.si0(0,C.o.dq()*0.8+0.2)
P.mZ(u.a.play(),null)
break}}};(function aliases(){var u=J.a.prototype
u.dT=u.i
u=J.cV.prototype
u.dU=u.i
u=K.cR.prototype
u.dS=u.aL
u.cp=u.i
u=O.bZ.prototype
u.cq=u.ar
u=O.an.prototype
u.cr=u.ar})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_0i
u(J,"m8","lp",22)
t(P,"mC","lX",6)
t(P,"mD","lY",6)
t(P,"mE","lZ",6)
s(P,"kH","mA",11)
var m
r(m=F.d7.prototype,"gf3","f4",3)
r(m,"gf1","f2",3)
q(m=E.aw.prototype,"gdv",0,0,null,["$1","$0"],["dw","hw"],0,0)
q(m,"gdz",0,0,null,["$1","$0"],["dA","hx"],0,0)
q(m,"gdt",0,0,null,["$1","$0"],["du","hv"],0,0)
q(m,"gdr",0,0,null,["$1","$0"],["ds","hs"],0,0)
p(m,"ghq","hr",4)
p(m,"ght","hu",4)
q(m=E.dm.prototype,"gcs",0,0,null,["$1","$0"],["cu","ct"],0,0)
o(m,"ghL","dD",11)
r(m=X.du.prototype,"gf5","f6",3)
r(m,"geQ","eR",3)
r(m,"geW","eX",2)
r(m,"gf9","fa",12)
r(m,"gf7","f8",12)
r(m,"gfd","fe",2)
r(m,"gfh","fi",2)
r(m,"gf_","f0",2)
r(m,"gff","fg",2)
r(m,"geY","eZ",2)
r(m,"gfj","fk",20)
r(m,"gfl","fm",3)
r(m,"gfE","fF",5)
r(m,"gfA","fB",5)
r(m,"gfC","fD",5)
q(D.bk.prototype,"ge_",0,0,null,["$1","$0"],["ap","e0"],0,0)
q(m=D.cX.prototype,"gcK",0,0,null,["$1","$0"],["cL","fb"],0,0)
r(m,"gfn","fo",21)
p(m,"geK","eL",13)
p(m,"gfs","ft",13)
n(V.C.prototype,"gj","c4",14)
n(V.A.prototype,"gj","c4",14)
q(m=U.bR.prototype,"gaE",0,0,null,["$1","$0"],["D","a2"],0,0)
p(m,"ge1","e2",15)
p(m,"gfp","fq",15)
q(m=U.dv.prototype,"gaE",0,0,null,["$1","$0"],["D","a2"],0,0)
r(m,"gbl","bm",1)
r(m,"gbn","bo",1)
r(m,"gbp","bq",1)
q(m=U.dw.prototype,"gaE",0,0,null,["$1","$0"],["D","a2"],0,0)
r(m,"gbl","bm",1)
r(m,"gbn","bo",1)
r(m,"gbp","bq",1)
r(m,"gey","ez",1)
r(m,"geA","eB",1)
r(m,"ge7","e8",1)
r(m,"ge5","e6",1)
r(m,"ge3","e4",1)
r(U.dx.prototype,"geI","eJ",1)
q(m=M.cI.prototype,"gV",0,0,null,["$1","$0"],["T","aS"],0,0)
p(m,"gfu","fv",16)
p(m,"gfw","fz",16)
q(M.cJ.prototype,"gV",0,0,null,["$1","$0"],["T","aS"],0,0)
q(m=M.cO.prototype,"gV",0,0,null,["$1","$0"],["T","aS"],0,0)
p(m,"geS","eT",4)
p(m,"geU","eV",4)
q(m=O.d0.prototype,"gaB",0,0,null,["$1","$0"],["R","aT"],0,0)
q(m,"gfK",0,0,null,["$1","$0"],["cO","fL"],0,0)
p(m,"geM","eN",17)
p(m,"geO","eP",17)
q(O.bZ.prototype,"gaB",0,0,null,["$1","$0"],["R","aT"],0,0)
q(O.dd.prototype,"gaB",0,0,null,["$1","$0"],["R","aT"],0,0)
q(m=T.cG.prototype,"gcv",0,0,null,["$1","$0"],["b3","e9"],0,0)
r(m,"geC","eD",1)
r(m,"geE","eF",1)
r(m,"geG","eH",1)
r(m,"gfV","fW",1)
r(m,"gfT","fU",1)
r(m,"gfR","fS",1)
q(X.d6.prototype,"gec",0,0,null,["$1","$0"],["W","ed"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.jA,J.a,J.Y,P.dQ,P.j,H.bW,P.fh,H.cP,H.hZ,H.hO,P.aW,H.bL,H.e6,P.a2,H.fo,H.fp,H.fj,P.ec,P.by,P.cn,P.ir,P.iv,P.au,P.dA,P.dj,P.hv,P.dn,P.bg,P.j0,P.iU,P.iO,P.dP,P.q,P.eM,P.j_,P.bc,P.ac,P.a8,P.aV,P.h_,P.dg,P.dI,P.fb,P.b4,P.bX,P.a6,P.b6,P.t,P.aI,W.eR,W.I,W.cQ,P.eh,P.iK,P.iP,K.ev,K.cR,K.d_,K.hd,L.dh,L.dp,L.dq,L.hJ,F.eB,F.d7,O.al,O.c_,E.eI,E.aw,E.h5,E.dm,Z.dz,Z.cf,Z.bi,Z.bm,Z.aL,D.eL,D.bl,D.S,X.cE,X.cW,X.fm,X.fs,X.a4,X.fQ,X.hK,X.du,D.eH,D.bk,D.a1,D.h2,D.hq,V.H,V.a0,V.f2,V.d1,V.ah,V.Z,V.T,V.aD,V.da,V.C,V.A,U.dv,U.dw,U.dx,M.cJ,M.cO,M.ai,A.cA,A.ez,A.V,A.cB,A.cL,A.d8,A.df,A.fy,A.c9,A.ca,A.cc,A.cd,A.ds,A.hV,F.aX,F.bV,F.c4,F.he,F.hf,F.hg,F.hh,F.bw,F.i7,F.i8,F.ib,F.ic,O.dk,O.bZ,O.fz,T.cG,T.hE,T.hG,X.hx,X.jp,X.fe,X.d6,V.hi])
s(J.a,[J.fi,J.cU,J.cV,J.b1,J.bU,J.bn,H.c2,W.d,W.eu,W.cC,W.am,W.F,W.dC,W.ab,W.eV,W.eW,W.dE,W.cN,W.dG,W.eY,W.i,W.dJ,W.ay,W.fd,W.dL,W.aZ,W.fr,W.fK,W.dR,W.dS,W.az,W.dT,W.dW,W.aB,W.e_,W.e1,W.aG,W.e2,W.aH,W.e7,W.ar,W.ea,W.hI,W.aK,W.ed,W.hM,W.i0,W.ei,W.ek,W.em,W.eo,W.eq,P.b3,P.dN,P.b5,P.dY,P.h4,P.e8,P.b7,P.ef,P.eA,P.dB,P.db,P.e4])
s(J.cV,[J.h0,J.ce,J.b2])
t(J.jz,J.b1)
s(J.bU,[J.cT,J.cS])
t(P.fq,P.dQ)
s(P.fq,[H.dt,W.iq,W.ip,P.f7])
t(H.O,H.dt)
s(P.j,[H.n,H.bY,H.ih,P.fg])
t(H.f0,H.bY)
s(P.fh,[H.cZ,H.ii])
s(P.aW,[H.fX,H.fl,H.hY,H.eK,H.hb,P.c3,P.aj,P.i_,P.hX,P.di,P.eO,P.eU])
s(H.bL,[H.jl,H.hy,H.fk,H.jb,H.jc,H.jd,P.il,P.ik,P.im,P.io,P.iZ,P.iY,P.iw,P.iE,P.iA,P.iB,P.iC,P.iy,P.iD,P.ix,P.iH,P.iI,P.iG,P.iF,P.j6,P.iS,P.iR,P.iT,P.fu,P.eZ,P.f_,W.fM,W.fO,W.ha,W.hu,W.iu,P.j8,P.f8,P.f9,P.ji,P.jj,P.eE,F.eC,E.h6,E.h7,E.h8,E.hH,D.f3,D.f4,F.j1,F.ie,F.id,F.i9,F.ia,O.fC,O.fD,O.fE,O.fF,O.fG,O.fH,O.fI,O.fJ,T.hF,V.jk,V.hk,V.hj,M.jf,M.jg])
s(H.hy,[H.hs,H.bJ])
t(P.ft,P.a2)
t(H.G,P.ft)
t(H.bp,H.n)
t(H.d2,H.c2)
s(H.d2,[H.ch,H.cj])
t(H.ci,H.ch)
t(H.c1,H.ci)
t(H.ck,H.cj)
t(H.d3,H.ck)
s(H.d3,[H.fR,H.fS,H.fT,H.fU,H.fV,H.d4,H.fW])
t(P.iX,P.fg)
t(P.ij,P.ir)
t(P.iQ,P.j0)
t(P.iN,P.iU)
t(P.eP,P.hv)
t(P.f1,P.eM)
t(P.i1,P.f1)
t(P.i2,P.eP)
s(P.a8,[P.K,P.w])
s(P.aj,[P.bs,P.ff])
s(W.d,[W.E,W.f6,W.aF,W.cl,W.aJ,W.as,W.co,W.ig,W.cg,P.eF,P.bh])
s(W.E,[W.W,W.aU])
s(W.W,[W.l,P.k])
s(W.l,[W.ew,W.ex,W.bj,W.fa,W.bT,W.hc])
t(W.eQ,W.am)
t(W.bO,W.dC)
s(W.ab,[W.eS,W.eT])
t(W.dF,W.dE)
t(W.cM,W.dF)
t(W.dH,W.dG)
t(W.eX,W.dH)
t(W.ax,W.cC)
t(W.dK,W.dJ)
t(W.f5,W.dK)
t(W.dM,W.dL)
t(W.bS,W.dM)
t(W.b8,W.i)
s(W.b8,[W.bo,W.ap,W.bt])
t(W.fL,W.dR)
t(W.fN,W.dS)
t(W.dU,W.dT)
t(W.fP,W.dU)
t(W.dX,W.dW)
t(W.d5,W.dX)
t(W.e0,W.e_)
t(W.h1,W.e0)
t(W.h9,W.e1)
t(W.cm,W.cl)
t(W.ho,W.cm)
t(W.e3,W.e2)
t(W.hp,W.e3)
t(W.ht,W.e7)
t(W.eb,W.ea)
t(W.hz,W.eb)
t(W.cp,W.co)
t(W.hA,W.cp)
t(W.ee,W.ed)
t(W.hL,W.ee)
t(W.ba,W.ap)
t(W.ej,W.ei)
t(W.is,W.ej)
t(W.dD,W.cN)
t(W.el,W.ek)
t(W.iJ,W.el)
t(W.en,W.em)
t(W.dV,W.en)
t(W.ep,W.eo)
t(W.iV,W.ep)
t(W.er,W.eq)
t(W.iW,W.er)
t(W.it,P.dj)
t(P.a7,P.iP)
t(P.dO,P.dN)
t(P.fn,P.dO)
t(P.dZ,P.dY)
t(P.fY,P.dZ)
t(P.e9,P.e8)
t(P.hw,P.e9)
t(P.eg,P.ef)
t(P.hN,P.eg)
t(P.eD,P.dB)
t(P.fZ,P.bh)
t(P.e5,P.e4)
t(P.hr,P.e5)
s(K.cR,[K.aA,L.dr])
s(E.eI,[Z.cD,A.dc,T.dl])
s(D.S,[D.b_,D.b0,D.r,X.h3,T.cH])
s(X.h3,[X.cY,X.ad,X.c0,X.c8])
s(O.al,[D.cX,U.bR,M.cI])
s(D.eL,[U.eN,U.a5])
s(U.a5,[U.bN,U.c7])
s(A.dc,[A.fv,A.hl,A.hn])
s(A.ds,[A.b9,A.hS,A.hT,A.hU,A.hQ,A.N,A.hR,A.D,A.bu,A.hW,A.cb,A.a_,A.bv,A.U])
s(O.dk,[O.d0,O.dd,O.hm])
s(O.bZ,[O.fw,O.fx,O.an])
s(O.an,[O.fA,O.fB])
s(T.dl,[T.hB,T.hD])
t(T.hC,T.hB)
s(X.hx,[X.eG,X.fc])
u(H.dt,H.hZ)
u(H.ch,P.q)
u(H.ci,H.cP)
u(H.cj,P.q)
u(H.ck,H.cP)
u(P.dQ,P.q)
u(W.dC,W.eR)
u(W.dE,P.q)
u(W.dF,W.I)
u(W.dG,P.q)
u(W.dH,W.I)
u(W.dJ,P.q)
u(W.dK,W.I)
u(W.dL,P.q)
u(W.dM,W.I)
u(W.dR,P.a2)
u(W.dS,P.a2)
u(W.dT,P.q)
u(W.dU,W.I)
u(W.dW,P.q)
u(W.dX,W.I)
u(W.e_,P.q)
u(W.e0,W.I)
u(W.e1,P.a2)
u(W.cl,P.q)
u(W.cm,W.I)
u(W.e2,P.q)
u(W.e3,W.I)
u(W.e7,P.a2)
u(W.ea,P.q)
u(W.eb,W.I)
u(W.co,P.q)
u(W.cp,W.I)
u(W.ed,P.q)
u(W.ee,W.I)
u(W.ei,P.q)
u(W.ej,W.I)
u(W.ek,P.q)
u(W.el,W.I)
u(W.em,P.q)
u(W.en,W.I)
u(W.eo,P.q)
u(W.ep,W.I)
u(W.eq,P.q)
u(W.er,W.I)
u(P.dN,P.q)
u(P.dO,W.I)
u(P.dY,P.q)
u(P.dZ,W.I)
u(P.e8,P.q)
u(P.e9,W.I)
u(P.ef,P.q)
u(P.eg,W.I)
u(P.dB,P.a2)
u(P.e4,P.q)
u(P.e5,W.I)})()
var v={mangledGlobalNames:{w:"int",K:"double",a8:"num",t:"String",bc:"bool",a6:"Null",b4:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.S]},{func:1,ret:-1,args:[D.S]},{func:1,ret:-1,args:[W.ap]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[P.w,[P.j,E.aw]]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.a6,args:[,]},{func:1,ret:P.a6,args:[,,]},{func:1,ret:-1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[P.w,[P.j,D.a1]]},{func:1,ret:P.K},{func:1,ret:-1,args:[P.w,[P.j,U.a5]]},{func:1,ret:-1,args:[P.w,[P.j,M.ai]]},{func:1,ret:-1,args:[P.w,[P.j,V.ah]]},{func:1,ret:P.a6,args:[,],opt:[P.b6]},{func:1,ret:[P.au,,],args:[,]},{func:1,ret:-1,args:[W.ba]},{func:1,ret:P.bc,args:[[P.j,D.a1]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bj.prototype
C.D=J.a.prototype
C.a=J.b1.prototype
C.i=J.cS.prototype
C.c=J.cT.prototype
C.j=J.cU.prototype
C.b=J.bU.prototype
C.d=J.bn.prototype
C.E=J.b2.prototype
C.p=J.h0.prototype
C.q=P.db.prototype
C.k=J.ce.prototype
C.r=W.ba.prototype
C.t=W.cg.prototype
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
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
C.z=function(getTagFallback) {
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
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.y=function(hooks) {
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
C.x=function(hooks) {
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

C.A=new P.h_()
C.n=new P.i1()
C.B=new P.i2()
C.o=new P.iK()
C.e=new P.iQ()
C.h=new P.aV(0)
C.C=new P.aV(5e6)
C.F=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.G=new P.by(null,2)})();(function staticFields(){$.ak=0
$.bK=null
$.jY=null
$.kK=null
$.kF=null
$.kN=null
$.j9=null
$.je=null
$.jT=null
$.bz=null
$.cs=null
$.ct=null
$.jM=!1
$.M=C.e
$.a3=[]
$.kc=null
$.kg=null
$.aq=null
$.kl=null
$.ku=null
$.kw=null
$.i3=null
$.i4=null
$.i5=null
$.kv=null
$.kf=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"na","kS",function(){return H.kJ("_$dart_dartClosure")})
u($,"nc","jW",function(){return H.kJ("_$dart_js")})
u($,"nd","kT",function(){return H.at(H.hP({
toString:function(){return"$receiver$"}}))})
u($,"ne","kU",function(){return H.at(H.hP({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nf","kV",function(){return H.at(H.hP(null))})
u($,"ng","kW",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nj","kZ",function(){return H.at(H.hP(void 0))})
u($,"nk","l_",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ni","kY",function(){return H.at(H.ks(null))})
u($,"nh","kX",function(){return H.at(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nm","l1",function(){return H.at(H.ks(void 0))})
u($,"nl","l0",function(){return H.at(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nz","jX",function(){return P.lW()})
u($,"nB","l5",function(){return P.lL("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nt","l4",function(){return Z.ae(0)})
u($,"nn","l2",function(){return Z.ae(511)})
u($,"nv","a9",function(){return Z.ae(1)})
u($,"nu","aS",function(){return Z.ae(2)})
u($,"np","aR",function(){return Z.ae(4)})
u($,"nw","bd",function(){return Z.ae(8)})
u($,"nx","aT",function(){return Z.ae(16)})
u($,"nq","cw",function(){return Z.ae(32)})
u($,"nr","cx",function(){return Z.ae(64)})
u($,"ns","l3",function(){return Z.ae(96)})
u($,"ny","bH",function(){return Z.ae(128)})
u($,"no","aQ",function(){return Z.ae(256)})
u($,"n9","kR",function(){return new V.f2(1e-9)})
u($,"n8","v",function(){return $.kR()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c2,ArrayBufferView:H.c2,Float32Array:H.c1,Float64Array:H.c1,Int16Array:H.fR,Int32Array:H.fS,Int8Array:H.fT,Uint16Array:H.fU,Uint32Array:H.fV,Uint8ClampedArray:H.d4,CanvasPixelArray:H.d4,Uint8Array:H.fW,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.eu,HTMLAnchorElement:W.ew,HTMLAreaElement:W.ex,Blob:W.cC,HTMLCanvasElement:W.bj,CDATASection:W.aU,CharacterData:W.aU,Comment:W.aU,ProcessingInstruction:W.aU,Text:W.aU,CSSPerspective:W.eQ,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bO,MSStyleCSSProperties:W.bO,CSS2Properties:W.bO,CSSImageValue:W.ab,CSSKeywordValue:W.ab,CSSNumericValue:W.ab,CSSPositionValue:W.ab,CSSResourceValue:W.ab,CSSUnitValue:W.ab,CSSURLImageValue:W.ab,CSSStyleValue:W.ab,CSSMatrixComponent:W.am,CSSRotation:W.am,CSSScale:W.am,CSSSkew:W.am,CSSTranslation:W.am,CSSTransformComponent:W.am,CSSTransformValue:W.eS,CSSUnparsedValue:W.eT,DataTransferItemList:W.eV,DOMException:W.eW,ClientRectList:W.cM,DOMRectList:W.cM,DOMRectReadOnly:W.cN,DOMStringList:W.eX,DOMTokenList:W.eY,Element:W.W,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ax,FileList:W.f5,FileWriter:W.f6,HTMLFormElement:W.fa,Gamepad:W.ay,History:W.fd,HTMLCollection:W.bS,HTMLFormControlsCollection:W.bS,HTMLOptionsCollection:W.bS,ImageData:W.aZ,HTMLImageElement:W.bT,KeyboardEvent:W.bo,Location:W.fr,MediaList:W.fK,MIDIInputMap:W.fL,MIDIOutputMap:W.fN,MimeType:W.az,MimeTypeArray:W.fP,PointerEvent:W.ap,MouseEvent:W.ap,DragEvent:W.ap,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.d5,RadioNodeList:W.d5,Plugin:W.aB,PluginArray:W.h1,RTCStatsReport:W.h9,HTMLSelectElement:W.hc,SourceBuffer:W.aF,SourceBufferList:W.ho,SpeechGrammar:W.aG,SpeechGrammarList:W.hp,SpeechRecognitionResult:W.aH,Storage:W.ht,CSSStyleSheet:W.ar,StyleSheet:W.ar,TextTrack:W.aJ,TextTrackCue:W.as,VTTCue:W.as,TextTrackCueList:W.hz,TextTrackList:W.hA,TimeRanges:W.hI,Touch:W.aK,TouchEvent:W.bt,TouchList:W.hL,TrackDefaultList:W.hM,CompositionEvent:W.b8,FocusEvent:W.b8,TextEvent:W.b8,UIEvent:W.b8,URL:W.i0,VideoTrackList:W.ig,WheelEvent:W.ba,Window:W.cg,DOMWindow:W.cg,CSSRuleList:W.is,ClientRect:W.dD,DOMRect:W.dD,GamepadList:W.iJ,NamedNodeMap:W.dV,MozNamedAttrMap:W.dV,SpeechRecognitionResultList:W.iV,StyleSheetList:W.iW,SVGLength:P.b3,SVGLengthList:P.fn,SVGNumber:P.b5,SVGNumberList:P.fY,SVGPointList:P.h4,SVGStringList:P.hw,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.b7,SVGTransformList:P.hN,AudioBuffer:P.eA,AudioParamMap:P.eD,AudioTrackList:P.eF,AudioContext:P.bh,webkitAudioContext:P.bh,BaseAudioContext:P.bh,OfflineAudioContext:P.fZ,WebGL2RenderingContext:P.db,SQLResultSetRowList:P.hr})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
W.cl.$nativeSuperclassTag="EventTarget"
W.cm.$nativeSuperclassTag="EventTarget"
W.co.$nativeSuperclassTag="EventTarget"
W.cp.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.kL,[])
else M.kL([])})})()
//# sourceMappingURL=test.dart.js.map
