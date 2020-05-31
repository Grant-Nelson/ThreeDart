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
a[c]=function(){a[c]=function(){H.p8(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l_(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kI:function kI(){},
kh:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
na:function(a,b,c,d){if(!!J.P(a).$ip)return new H.fv(a,b,[c,d])
return new H.c8(a,b,[c,d])},
fT:function(){return new P.cj("No element")},
n0:function(){return new P.cj("Too many elements")},
nx:function(a,b){var u=J.af(a)
if(typeof u!=="number")return u.J()
H.dz(a,0,u-1,b)},
dz:function(a,b,c,d){if(c-b<=32)H.nw(a,b,c,d)
else H.nv(a,b,c,d)},
nw:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.at(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a3()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nv:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a9(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a9(a4+a5,2),f=g-j,e=g+j,d=J.at(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a3()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a3()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a3()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a3()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a3()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a3()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a3()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a3()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a3()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.F(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.O()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a3()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
s=o
t=n
break}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.O()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a3()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a3()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.O()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.m(a3,a4,d.h(a3,a2))
d.m(a3,a2,b)
a2=s+1
d.m(a3,a5,d.h(a3,a2))
d.m(a3,a2,a0)
H.dz(a3,a4,t-2,a6)
H.dz(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.F(a6.$2(d.h(a3,t),b),0);)++t
for(;J.F(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.O()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dz(a3,t,s,a6)}else H.dz(a3,t,s,a6)},
m:function m(a){this.a=a},
p:function p(){},
dg:function dg(){},
bf:function bf(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c8:function c8(a,b,c){this.a=a
this.b=b
this.$ti=c},
fv:function fv(a,b,c){this.a=a
this.b=b
this.$ti=c},
hc:function hc(a,b){this.a=null
this.b=a
this.c=b},
hd:function hd(a,b,c){this.a=a
this.b=b
this.$ti=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.$ti=c},
jm:function jm(a,b){this.a=a
this.b=b},
d6:function d6(){},
iW:function iW(){},
dN:function dN(){},
mV:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cN:function(a){var u,t=H.pa(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oU:function(a){return v.types[a]},
mf:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iA},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ak(a)
if(typeof u!=="string")throw H.c(H.ad(a))
return u},
cg:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nn:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.Z(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.H(s,q)|32)>t)return}return parseInt(a,b)},
ch:function(a){return H.ne(a)+H.m5(H.cK(a),0,null)},
ne:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.W||!!n.$ibK){r=C.w(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cN(t.length>1&&C.a.H(t,0)===36?C.a.ac(t,1):t)},
nf:function(){if(!!self.location)return self.location.href
return},
lz:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
no:function(a){var u,t,s,r=H.b([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ad(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aO(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ad(s))}return H.lz(r)},
lA:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ad(s))
if(s<0)throw H.c(H.ad(s))
if(s>65535)return H.no(a)}return H.lz(a)},
np:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.iq()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bG:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aO(u,10))>>>0,56320|u&1023)}}throw H.c(P.Z(a,0,1114111,null,null))},
bF:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nm:function(a){var u=H.bF(a).getFullYear()+0
return u},
nk:function(a){var u=H.bF(a).getMonth()+1
return u},
ng:function(a){var u=H.bF(a).getDate()+0
return u},
nh:function(a){var u=H.bF(a).getHours()+0
return u},
nj:function(a){var u=H.bF(a).getMinutes()+0
return u},
nl:function(a){var u=H.bF(a).getSeconds()+0
return u},
ni:function(a){var u=H.bF(a).getMilliseconds()+0
return u},
q:function(a){throw H.c(H.ad(a))},
d:function(a,b){if(a==null)J.af(a)
throw H.c(H.bT(a,b))},
bT:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.q(u)
t=b>=u}else t=!0
if(t)return P.N(b,a,s,null,u)
return P.du(b,s)},
oO:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bH(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bH(a,c,!0,b,"end",u)
return new P.al(!0,b,"end",null)},
ad:function(a){return new P.al(!0,a,null,null)},
oJ:function(a){if(typeof a!=="number")throw H.c(H.ad(a))
return a},
c:function(a){var u
if(a==null)a=new P.dq()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ml})
u.name=""}else u.toString=H.ml
return u},
ml:function(){return J.ak(this.dartException)},
v:function(a){throw H.c(a)},
r:function(a){throw H.c(P.av(a))},
aJ:function(a){var u,t,s,r,q,p
a=H.mj(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iK:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lK:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lu:function(a,b){return new H.hI(a,b==null?null:b.method)},
kJ:function(a,b){var u=b==null,t=u?null:b.method
return new H.fY(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ks(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aO(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kJ(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lu(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mo()
q=$.mp()
p=$.mq()
o=$.mr()
n=$.mu()
m=$.mv()
l=$.mt()
$.ms()
k=$.mx()
j=$.mw()
i=r.an(u)
if(i!=null)return f.$1(H.kJ(u,i))
else{i=q.an(u)
if(i!=null){i.method="call"
return f.$1(H.kJ(u,i))}else{i=p.an(u)
if(i==null){i=o.an(u)
if(i==null){i=n.an(u)
if(i==null){i=m.an(u)
if(i==null){i=l.an(u)
if(i==null){i=o.an(u)
if(i==null){i=k.an(u)
if(i==null){i=j.an(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lu(u,i))}}return f.$1(new H.iV(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dB()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.al(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dB()
return a},
l1:function(a){var u
if(a==null)return new H.es(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.es(a)},
oS:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
p_:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
bS:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p_)
a.$identity=u
return u},
mU:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ig().constructor.prototype):Object.create(new H.bY(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.au
if(typeof t!=="number")return t.G()
$.au=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lf(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mQ(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lf(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mQ:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oU,a)
if(typeof a=="function")if(b)return a
else{u=c?H.le:H.kw
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mR:function(a,b,c,d){var u=H.kw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lf:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mT(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mR(t,!r,u,b)
if(t===0){r=$.au
if(typeof r!=="number")return r.G()
$.au=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bZ
return new Function(r+H.e(q==null?$.bZ=H.f7("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.au
if(typeof r!=="number")return r.G()
$.au=r+1
o+=r
r="return function("+o+"){return this."
q=$.bZ
return new Function(r+H.e(q==null?$.bZ=H.f7("self"):q)+"."+H.e(u)+"("+o+");}")()},
mS:function(a,b,c,d){var u=H.kw,t=H.le
switch(b?-1:a){case 0:throw H.c(H.nt("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mT:function(a,b){var u,t,s,r,q,p,o,n=$.bZ
if(n==null)n=$.bZ=H.f7("self")
u=$.ld
if(u==null)u=$.ld=H.f7("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mS(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.au
if(typeof u!=="number")return u.G()
$.au=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.au
if(typeof u!=="number")return u.G()
$.au=u+1
return new Function(n+u+"}")()},
l_:function(a,b,c,d,e,f,g){return H.mU(a,b,c,d,!!e,!!f,g)},
kw:function(a){return a.a},
le:function(a){return a.c},
f7:function(a){var u,t,s,r=new H.bY("self","target","receiver","name"),q=J.kG(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
p3:function(a,b){throw H.c(H.mP(a,H.cN(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.p3(a,b)},
oQ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mP:function(a,b){return new H.f8("CastError: "+P.kD(a)+": type '"+H.e(H.oF(a))+"' is not a subtype of type '"+b+"'")},
oF:function(a){var u,t=J.P(a)
if(!!t.$ic_){u=H.oQ(t)
if(u!=null)return H.p4(u)
return"Closure"}return H.ch(a)},
p8:function(a){throw H.c(new P.fl(a))},
nt:function(a){return new H.hZ(a)},
md:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cK:function(a){if(a==null)return
return a.$ti},
pL:function(a,b,c){return H.kq(a["$a"+H.e(c)],H.cK(b))},
oT:function(a,b,c,d){var u=H.kq(a["$a"+H.e(c)],H.cK(b))
return u==null?null:u[d]},
l0:function(a,b,c){var u=H.kq(a["$a"+H.e(b)],H.cK(a))
return u==null?null:u[c]},
aM:function(a,b){var u=H.cK(a)
return u==null?null:u[b]},
p4:function(a){return H.br(a,null)},
br:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cN(a[0].name)+H.m5(a,1,b)
if(typeof a=="function")return H.cN(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.oa(a,b)
if('futureOr' in a)return"FutureOr<"+H.br("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oa:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.G(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a2)p+=" extends "+H.br(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.br(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.br(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.br(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oR(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.br(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m5:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.S("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.br(p,c)}return"<"+u.i(0)+">"},
kq:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pJ:function(a,b,c){return a.apply(b,H.kq(J.P(b)["$a"+H.e(c)],H.cK(b)))},
pK:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p0:function(a){var u,t,s,r,q=$.me.$1(a),p=$.kf[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kl[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ma.$2(a,q)
if(q!=null){p=$.kf[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kl[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ko(u)
$.kf[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kl[q]=u
return u}if(s==="-"){r=H.ko(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mh(a,u)
if(s==="*")throw H.c(P.iU(q))
if(v.leafTags[q]===true){r=H.ko(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mh(a,u)},
mh:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l3(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ko:function(a){return J.l3(a,!1,null,!!a.$iA)},
p1:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ko(u)
else return J.l3(u,c,null,null)},
oY:function(){if(!0===$.l2)return
$.l2=!0
H.oZ()},
oZ:function(){var u,t,s,r,q,p,o,n
$.kf=Object.create(null)
$.kl=Object.create(null)
H.oX()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mi.$1(q)
if(p!=null){o=H.p1(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oX:function(){var u,t,s,r,q,p,o=C.L()
o=H.bR(C.M,H.bR(C.N,H.bR(C.x,H.bR(C.x,H.bR(C.O,H.bR(C.P,H.bR(C.Q(C.w),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.me=new H.ki(r)
$.ma=new H.kj(q)
$.mi=new H.kk(p)},
bR:function(a,b){return a(b)||b},
n4:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.U("Illegal RegExp pattern ("+String(p)+")",a,null))},
mk:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oP:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mj:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l5:function(a,b,c){var u=H.p6(a,b,c)
return u},
p6:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mj(b),'g'),H.oP(c))},
fe:function fe(){},
ff:function ff(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iJ:function iJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hI:function hI(a,b){this.a=a
this.b=b},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a){this.a=a},
ks:function ks(a){this.a=a},
es:function es(a){this.a=a
this.b=null},
c_:function c_(){},
ip:function ip(){},
ig:function ig(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a){this.a=a},
hZ:function hZ(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fX:function fX(a){this.a=a},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
h2:function h2(a,b){this.a=a
this.$ti=b},
h3:function h3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bP:function(a){return a},
nd:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bT(b,a))},
o8:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oO(a,b,c))
return b},
cd:function cd(){},
bi:function bi(){},
dk:function dk(){},
ce:function ce(){},
dl:function dl(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
dm:function dm(){},
cf:function cf(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
oR:function(a){return J.ln(a?Object.keys(a):[],null)},
pa:function(a){return v.mangledGlobalNames[a]},
p2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kg:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l2==null){H.oY()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iU("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l6()]
if(r!=null)return r
r=H.p0(a)
if(r!=null)return r
if(typeof a=="function")return C.Y
u=Object.getPrototypeOf(a)
if(u==null)return C.E
if(u===Object.prototype)return C.E
if(typeof s=="function"){Object.defineProperty(s,$.l6(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
n1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kv(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.Z(a,0,4294967295,"length",null))
return J.ln(new Array(a),b)},
ln:function(a,b){return J.kG(H.b(a,[b]))},
kG:function(a){a.fixed$length=Array
return a},
n2:function(a,b){return J.cQ(a,b)},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.d9.prototype}if(typeof a=="string")return J.bd.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.fV.prototype
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a2)return a
return J.kg(a)},
at:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a2)return a
return J.kg(a)},
eR:function(a){if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a2)return a
return J.kg(a)},
mc:function(a){if(typeof a=="number")return J.c6.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bK.prototype
return a},
cJ:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bK.prototype
return a},
bV:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a2)return a
return J.kg(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).v(a,b)},
l8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mc(a).u(a,b)},
bX:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mf(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.at(a).h(a,b)},
kt:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mf(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eR(a).m(a,b,c)},
mG:function(a,b){return J.cJ(a).H(a,b)},
mH:function(a,b,c){return J.bV(a).fW(a,b,c)},
mI:function(a,b,c,d){return J.bV(a).hg(a,b,c,d)},
mJ:function(a,b){return J.cJ(a).X(a,b)},
cQ:function(a,b){return J.mc(a).aS(a,b)},
ku:function(a,b){return J.at(a).F(a,b)},
eT:function(a,b){return J.eR(a).K(a,b)},
mK:function(a,b,c,d){return J.bV(a).hC(a,b,c,d)},
l9:function(a,b){return J.eR(a).B(a,b)},
mL:function(a){return J.bV(a).ghl(a)},
eU:function(a){return J.bV(a).gc_(a)},
cR:function(a){return J.P(a).gI(a)},
aO:function(a){return J.eR(a).gP(a)},
af:function(a){return J.at(a).gl(a)},
la:function(a){return J.eR(a).i7(a)},
mM:function(a,b){return J.bV(a).ia(a,b)},
mN:function(a,b,c){return J.cJ(a).q(a,b,c)},
mO:function(a){return J.cJ(a).ik(a)},
ak:function(a){return J.P(a).i(a)},
a:function a(){},
fV:function fV(){},
db:function db(){},
dc:function dc(){},
hM:function hM(){},
bK:function bK(){},
be:function be(){},
bc:function bc(a){this.$ti=a},
kH:function kH(a){this.$ti=a},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c6:function c6(){},
da:function da(){},
d9:function d9(){},
bd:function bd(){}},P={
nJ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oG()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bS(new P.jo(s),1)).observe(u,{childList:true})
return new P.jn(s,u,t)}else if(self.setImmediate!=null)return P.oH()
return P.oI()},
nK:function(a){self.scheduleImmediate(H.bS(new P.jp(a),0))},
nL:function(a){self.setImmediate(H.bS(new P.jq(a),0))},
nM:function(a){P.kO(C.n,a)},
kO:function(a,b){var u=C.c.a9(a.a,1000)
return P.nT(u<0?0:u,b)},
lJ:function(a,b){var u=C.c.a9(a.a,1000)
return P.nU(u<0?0:u,b)},
nT:function(a,b){var u=new P.ey()
u.ex(a,b)
return u},
nU:function(a,b){var u=new P.ey()
u.ey(a,b)
return u},
pG:function(a){return new P.bL(a,1)},
nP:function(){return C.a6},
nQ:function(a){return new P.bL(a,3)},
od:function(a,b){return new P.jT(a,[b])},
oz:function(){var u,t
for(;u=$.bQ,u!=null;){$.cI=null
t=u.b
$.bQ=t
if(t==null)$.cH=null
u.a.$0()}},
oE:function(){$.kY=!0
try{P.oz()}finally{$.cI=null
$.kY=!1
if($.bQ!=null)$.l7().$1(P.mb())}},
oC:function(a){var u=new P.dU(a)
if($.bQ==null){$.bQ=$.cH=u
if(!$.kY)$.l7().$1(P.mb())}else $.cH=$.cH.b=u},
oD:function(a){var u,t,s=$.bQ
if(s==null){P.oC(a)
$.cI=$.cH
return}u=new P.dU(a)
t=$.cI
if(t==null){u.b=s
$.bQ=$.cI=u}else{u.b=t.b
$.cI=t.b=u
if(u.b==null)$.cH=u}},
lI:function(a,b){var u=$.as
if(u===C.f)return P.kO(a,b)
return P.kO(a,u.hm(b))},
nA:function(a,b){var u=$.as
if(u===C.f)return P.lJ(a,b)
return P.lJ(a,u.dr(b,P.dH))},
m6:function(a,b,c,d,e){var u={}
u.a=d
P.oD(new P.kc(u,e))},
oA:function(a,b,c,d){var u,t=$.as
if(t===c)return d.$0()
$.as=c
u=t
try{t=d.$0()
return t}finally{$.as=u}},
oB:function(a,b,c,d,e){var u,t=$.as
if(t===c)return d.$1(e)
$.as=c
u=t
try{t=d.$1(e)
return t}finally{$.as=u}},
jo:function jo(a){this.a=a},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
ey:function ey(){this.c=0},
jX:function jX(a,b){this.a=a
this.b=b},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b){this.a=a
this.b=b},
bM:function bM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jT:function jT(a,b){this.a=a
this.$ti=b},
dU:function dU(a){this.a=a
this.b=null},
dD:function dD(){},
ij:function ij(){},
dH:function dH(){},
k5:function k5(){},
kc:function kc(a,b){this.a=a
this.b=b},
jE:function jE(){},
jF:function jF(a,b){this.a=a
this.b=b},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
n5:function(a,b){return new H.I([a,b])},
kK:function(a,b){return new H.I([a,b])},
n7:function(a){return H.oS(a,new H.I([null,null]))},
c7:function(a){return new P.jB([a])},
kT:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nS:function(a,b){var u=new P.e9(a,b)
u.c=a.e
return u},
n_:function(a,b,c){var u,t
if(P.kZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.a9.push(a)
try{P.oc(a,u)}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=P.lG(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kF:function(a,b,c){var u,t
if(P.kZ(a))return b+"..."+c
u=new P.S(b)
$.a9.push(a)
try{t=u
t.a=P.lG(t.a,a,", ")}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kZ:function(a){var u,t
for(u=$.a9.length,t=0;t<u;++t)if(a===$.a9[t])return!0
return!1},
oc:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.e(n.gA(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gA(n);++l
if(!n.t()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gA(n);++l
for(;n.t();r=q,q=p){p=n.gA(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
n6:function(a,b,c){var u=P.n5(b,c)
a.B(0,new P.h4(u))
return u},
lo:function(a,b){var u,t,s=P.c7(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.r)(a),++t)s.n(0,a[t])
return s},
kL:function(a){var u,t={}
if(P.kZ(a))return"{...}"
u=new P.S("")
try{$.a9.push(a)
u.a+="{"
t.a=!0
J.l9(a,new P.ha(t,u))
u.a+="}"}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jB:function jB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jC:function jC(a){this.a=a
this.c=this.b=null},
e9:function e9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fS:function fS(){},
h4:function h4(a){this.a=a},
h5:function h5(){},
x:function x(){},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
a1:function a1(){},
jY:function jY(){},
hb:function hb(){},
dO:function dO(a,b){this.a=a
this.$ti=b},
jI:function jI(){},
ea:function ea(){},
eE:function eE(){},
nD:function(a,b,c,d){if(b instanceof Uint8Array)return P.nE(!1,b,c,d)
return},
nE:function(a,b,c,d){var u,t,s=$.my()
if(s==null)return
u=0===c
if(u&&!0)return P.kR(s,b)
t=b.length
d=P.b_(c,d,t)
if(u&&d===t)return P.kR(s,b)
return P.kR(s,b.subarray(c,d))},
kR:function(a,b){if(P.nG(b))return
return P.nH(a,b)},
nH:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
nG:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nF:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
m8:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.q(c)
u=J.at(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.ag()
if((s&127)!==s)return t-b}return c-b},
lc:function(a,b,c,d,e,f){if(C.c.bd(f,4)!==0)throw H.c(P.U("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.U("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.U("Invalid base64 padding, more than two '=' characters",a,b))},
f4:function f4(){},
f5:function f5(){},
fa:function fa(){},
fg:function fg(){},
fx:function fx(){},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fO:function fO(a){this.a=a},
j3:function j3(){},
j5:function j5(){},
k3:function k3(a){this.b=0
this.c=a},
j4:function j4(a){this.a=a},
k2:function k2(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cL:function(a,b,c){var u=H.nn(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.U(a,null,null))},
mZ:function(a){if(a instanceof H.c_)return a.i(0)
return"Instance of '"+H.e(H.ch(a))+"'"},
n8:function(a,b,c){var u,t,s=J.n1(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
h6:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aO(a);u.t();)t.push(u.gA(u))
if(b)return t
return J.kG(t)},
ck:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b_(b,c,u)
if(b<=0){if(typeof c!=="number")return c.O()
t=c<u}else t=!0
return H.lA(t?C.b.eh(a,b,c):a)}if(!!J.P(a).$icf)return H.np(a,b,P.b_(b,c,a.length))
return P.ny(a,b,c)},
ny:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.Z(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.Z(c,b,J.af(a),q,q))
t=J.aO(a)
for(s=0;s<b;++s)if(!t.t())throw H.c(P.Z(b,0,s,q,q))
r=[]
if(u)for(;t.t();)r.push(t.gA(t))
else for(s=b;s<c;++s){if(!t.t())throw H.c(P.Z(c,b,s,q,q))
r.push(t.gA(t))}return H.lA(r)},
nr:function(a){return new H.fW(a,H.n4(a,!1,!0,!1,!1,!1))},
lG:function(a,b,c){var u=J.aO(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gA(u))
while(u.t())}else{a+=H.e(u.gA(u))
for(;u.t();)a=a+c+H.e(u.gA(u))}return a},
lM:function(){var u=H.nf()
if(u!=null)return P.nC(u)
throw H.c(P.y("'Uri.base' is not supported"))},
eF:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mE().b
if(typeof b!=="string")H.v(H.ad(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghB().c1(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bG(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mW:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d0:function(a){if(a>=10)return""+a
return"0"+a},
li:function(a){return new P.b8(1000*a)},
kD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ak(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mZ(a)},
cS:function(a){return new P.al(!1,null,null,a)},
kv:function(a,b,c){return new P.al(!0,a,b,c)},
du:function(a,b){return new P.bH(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.bH(b,c,!0,a,d,"Invalid value")},
b_:function(a,b,c){var u
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
u=a>c}else u=!0
if(u)throw H.c(P.Z(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
u=b>c}else u=!0
if(u)throw H.c(P.Z(b,a,c,"end",null))
return b}return c},
lB:function(a,b){if(typeof a!=="number")return a.O()
if(a<0)throw H.c(P.Z(a,0,null,b,null))},
N:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fR(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iX(a)},
iU:function(a){return new P.iT(a)},
lF:function(a){return new P.cj(a)},
av:function(a){return new P.fd(a)},
w:function(a){return new P.e2(a)},
U:function(a,b,c){return new P.fI(a,b,c)},
n9:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
l4:function(a){H.p2(a)},
nC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.H(a,4)^58)*3|C.a.H(a,0)^100|C.a.H(a,1)^97|C.a.H(a,2)^116|C.a.H(a,3)^97)>>>0
if(u===0)return P.lL(e<e?C.a.q(a,0,e):a,5,f).ge7()
else if(u===32)return P.lL(C.a.q(a,5,e),0,f).ge7()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.u])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.m7(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ip()
if(r>=0)if(P.m7(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.G()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.O()
if(typeof n!=="number")return H.q(n)
if(m<n)n=m
if(typeof o!=="number")return o.O()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.O()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.O()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.ab(a,"..",o)))j=n>o+2&&C.a.ab(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.ab(a,"file",0)){if(q<=0){if(!C.a.ab(a,"/",o)){i="file:///"
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
a=C.a.aT(a,o,n,"/");++e
n=h}k="file"}else if(C.a.ab(a,"http",0)){if(t&&p+3===o&&C.a.ab(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aT(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.ab(a,"https",0)){if(t&&p+4===o&&C.a.ab(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aT(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jL(a,r,q,p,o,n,m,k)}return P.nV(a,0,e,r,q,p,o,n,m,k)},
lO:function(a){var u=P.h
return C.b.hH(H.b(a.split("&"),[u]),P.kK(u,u),new P.j1(C.e))},
nB:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iZ(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cL(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a3()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cL(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a3()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.j_(a),d=new P.j0(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.u])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.X(a,t)
if(p===58){if(t===b){++t
if(C.a.X(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gav(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nB(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aO(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
nV:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o2(a,b,d)
else{if(d===b)P.bO(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o3(a,u,e-1):""
s=P.o_(a,e,f,!1)
if(typeof f!=="number")return f.G()
r=f+1
if(typeof g!=="number")return H.q(g)
q=r<g?P.o1(P.cL(C.a.q(a,r,g),new P.jZ(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o0(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.O()
o=h<i?P.kV(a,h+1,i,n):n
return new P.bN(j,t,s,q,p,o,i<c?P.nZ(a,i+1,c):n)},
m_:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bO:function(a,b,c){throw H.c(P.U(c,a,b))},
o1:function(a,b){if(a!=null&&a===P.m_(b))return
return a},
o_:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.X(a,b)===91){if(typeof c!=="number")return c.J()
u=c-1
if(C.a.X(a,u)!==93)P.bO(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nX(a,t,u)
if(typeof s!=="number")return s.O()
if(s<u){r=s+1
q=P.m4(a,C.a.ab(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lN(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.q(c)
p=b
for(;p<c;++p)if(C.a.X(a,p)===58){s=C.a.bn(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m4(a,C.a.ab(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lN(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.o5(a,b,c)},
nX:function(a,b,c){var u,t=C.a.bn(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.q(c)
u=t<c}else u=!1
return u?t:c},
m4:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.S(d):null
if(typeof c!=="number")return H.q(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.X(a,u)
if(r===37){q=P.kW(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.S("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bO(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.S("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.S("")
l.a+=C.a.q(a,t,u)
l.a+=P.kU(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.q(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.X(a,u)
if(q===37){p=P.kW(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.S("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.B,o)
o=(C.B[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.S("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bO(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.S("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kU(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o2:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m1(C.a.H(a,b)))P.bO(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bO(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nW(t?a.toLowerCase():a)},
nW:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o3:function(a,b,c){return P.cG(a,b,c,C.a0,!1)},
o0:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cG(a,b,c,C.C,!0):C.j.iM(d,new P.k_(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a8(u,"/"))u="/"+u
return P.o4(u,e,f)},
o4:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a8(a,"/"))return P.o6(a,!u||c)
return P.o7(a)},
kV:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cS("Both query and queryParameters specified"))
return P.cG(a,b,c,C.l,!0)}if(d==null)return
u=new P.S("")
t.a=""
d.B(0,new P.k0(new P.k1(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nZ:function(a,b,c){return P.cG(a,b,c,C.l,!0)},
kW:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.X(a,b+1)
t=C.a.X(a,p)
s=H.kh(u)
r=H.kh(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aO(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bG(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kU:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.u])
t[0]=37
t[1]=C.a.H(m,a>>>4)
t[2]=C.a.H(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.u])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h8(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.H(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.H(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.ck(t,0,null)},
cG:function(a,b,c,d,e){var u=P.m3(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
m3:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.O()
if(typeof c!=="number")return H.q(c)
if(!(o<c))break
c$0:{u=C.a.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kW(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bO(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kU(u)}}if(m==null)m=new P.S("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.q(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.O()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
m2:function(a){if(C.a.a8(a,"."))return!0
return C.a.dQ(a,"/.")!==-1},
o7:function(a){var u,t,s,r,q,p,o
if(!P.m2(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.F(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
o6:function(a,b){var u,t,s,r,q,p
if(!P.m2(a))return!b?P.m0(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gav(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gav(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.m0(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
m0:function(a){var u,t,s,r=a.length
if(r>=2&&P.m1(J.mG(a,0)))for(u=1;u<r;++u){t=C.a.H(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.ac(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nY:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cS("Invalid URL encoding"))}}return u},
kX:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.m(C.a.q(a,b,c))}else{r=H.b([],[P.u])
for(s=a.length,q=b;q<c;++q){t=C.a.H(a,q)
if(t>127)throw H.c(P.cS("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cS("Truncated URI"))
r.push(P.nY(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.j4(!1).c1(r)},
m1:function(a){var u=a|32
return 97<=u&&u<=122},
lL:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.u])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.U(m,a,t))}}if(s<0&&t>b)throw H.c(P.U(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gav(l)
if(r!==44||t!==p+7||!C.a.ab(a,"base64",p+1))throw H.c(P.U("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.K.hS(0,a,o,u)
else{n=P.m3(a,o,u,C.l,!0)
if(n!=null)a=C.a.aT(a,o,u,n)}return new P.iY(a,l,c)},
o9:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n9(22,new P.k7(),P.bJ),n=new P.k6(o),m=new P.k8(),l=new P.k9(),k=n.$2(0,225)
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
m7:function(a,b,c,d,e){var u,t,s,r,q,p=$.mF()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.H(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aL:function aL(){},
ab:function ab(a,b){this.a=a
this.b=b},
L:function L(){},
b8:function b8(a){this.a=a},
ft:function ft(){},
fu:function fu(){},
bA:function bA(){},
dq:function dq(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fR:function fR(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iX:function iX(a){this.a=a},
iT:function iT(a){this.a=a},
cj:function cj(a){this.a=a},
fd:function fd(a){this.a=a},
hL:function hL(){},
dB:function dB(){},
fl:function fl(a){this.a=a},
e2:function e2(a){this.a=a},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(){},
u:function u(){},
i:function i(){},
fU:function fU(){},
n:function n(){},
R:function R(){},
bj:function bj(){},
aa:function aa(){},
a2:function a2(){},
h:function h(){},
S:function S(a){this.a=a},
j1:function j1(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a,b){this.a=a
this.b=b},
bN:function bN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jZ:function jZ(a,b){this.a=a
this.b=b},
k_:function k_(){},
k1:function k1(a,b){this.a=a
this.b=b},
k0:function k0(a){this.a=a},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
k7:function k7(){},
k6:function k6(a){this.a=a},
k8:function k8(){},
k9:function k9(){},
jL:function jL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ju:function ju(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oM:function(a){var u,t=J.P(a)
if(!!t.$iaT){u=t.gdA(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eD(a.data,a.height,a.width)},
oL:function(a){if(a instanceof P.eD)return{data:a.a,height:a.b,width:a.c}
return a},
b3:function(a){var u,t,s,r,q
if(a==null)return
u=P.kK(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oK:function(a){var u={}
a.B(0,new P.kd(u))
return u},
jN:function jN(){},
jP:function jP(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.b=b},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
kd:function kd(a){this.a=a},
jO:function jO(a,b){this.a=a
this.b=b},
fE:function fE(a,b){this.a=a
this.b=b},
fF:function fF(){},
fG:function fG(){},
jA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nR:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jD:function jD(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aU:function aU(){},
h_:function h_(){},
aY:function aY(){},
hJ:function hJ(){},
hR:function hR(){},
ci:function ci(){},
ik:function ik(){},
k:function k(){},
b0:function b0(){},
iI:function iI(){},
e7:function e7(){},
e8:function e8(){},
ei:function ei(){},
ej:function ej(){},
eu:function eu(){},
ev:function ev(){},
eB:function eB(){},
eC:function eC(){},
bJ:function bJ(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(a){this.a=a},
f1:function f1(){},
bt:function bt(){},
hK:function hK(){},
dV:function dV(){},
dw:function dw(){},
ie:function ie(){},
eq:function eq(){},
er:function er(){}},W={
lb:function(){var u=document.createElement("a")
return u},
ky:function(){var u=document.createElement("canvas")
return u},
mY:function(a,b,c){var u=document.body,t=(u&&C.t).al(u,a,b,c)
t.toString
u=new H.cu(new W.a4(t),new W.fw(),[W.C])
return u.gaI(u)},
kB:function(a){return"wheel"},
c1:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bV(a)
t=u.ge3(a)
if(typeof t==="string")r=u.ge3(a)}catch(s){H.aj(s)}return r},
kE:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
jz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lY:function(a,b,c,d){var u=W.jz(W.jz(W.jz(W.jz(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
W:function(a,b,c,d){var u=W.m9(new W.jx(c),W.j)
if(u!=null&&!0)J.mI(a,b,u,!1)
return new W.jw(a,b,u,!1)},
lX:function(a){var u=W.lb(),t=window.location
u=new W.cw(new W.jH(u,t))
u.es(a)
return u},
nN:function(a,b,c,d){return!0},
nO:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lZ:function(){var u=P.h,t=P.lo(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jU(t,P.c7(u),P.c7(u),P.c7(u),null)
t.ew(null,new H.hd(C.o,new W.jV(),[H.aM(C.o,0),u]),s,null)
return t},
m9:function(a,b){var u=$.as
if(u===C.f)return a
return u.dr(a,b)},
o:function o(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
bu:function bu(){},
bv:function bv(){},
by:function by(){},
b7:function b7(){},
fh:function fh(){},
H:function H(){},
c0:function c0(){},
fi:function fi(){},
ag:function ag(){},
aw:function aw(){},
fj:function fj(){},
fk:function fk(){},
fn:function fn(){},
an:function an(){},
fq:function fq(){},
d2:function d2(){},
d3:function d3(){},
fr:function fr(){},
fs:function fs(){},
js:function js(a,b){this.a=a
this.b=b},
Q:function Q(){},
fw:function fw(){},
j:function j(){},
f:function f(){},
ao:function ao(){},
c2:function c2(){},
fD:function fD(){},
fH:function fH(){},
ax:function ax(){},
fN:function fN(){},
c4:function c4(){},
aT:function aT(){},
bC:function bC(){},
bD:function bD(){},
h7:function h7(){},
ht:function ht(){},
cb:function cb(){},
hu:function hu(){},
hv:function hv(a){this.a=a},
hw:function hw(){},
hx:function hx(a){this.a=a},
aA:function aA(){},
hy:function hy(){},
aB:function aB(){},
a4:function a4(a){this.a=a},
C:function C(){},
dn:function dn(){},
aC:function aC(){},
hO:function hO(){},
hX:function hX(){},
hY:function hY(a){this.a=a},
i_:function i_(){},
aE:function aE(){},
ib:function ib(){},
aF:function aF(){},
ic:function ic(){},
aG:function aG(){},
ih:function ih(){},
ii:function ii(a){this.a=a},
aq:function aq(){},
dE:function dE(){},
il:function il(){},
im:function im(){},
cl:function cl(){},
aH:function aH(){},
ar:function ar(){},
iq:function iq(){},
ir:function ir(){},
iC:function iC(){},
aI:function aI(){},
bI:function bI(){},
iG:function iG(){},
iH:function iH(){},
bl:function bl(){},
j2:function j2(){},
jl:function jl(){},
bq:function bq(){},
cv:function cv(){},
jt:function jt(){},
dX:function dX(){},
jy:function jy(){},
ef:function ef(){},
jM:function jM(){},
jR:function jR(){},
jr:function jr(){},
jv:function jv(a){this.a=a},
jw:function jw(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jx:function jx(a){this.a=a},
cw:function cw(a){this.a=a},
M:function M(){},
dp:function dp(a){this.a=a},
hG:function hG(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(){},
jJ:function jJ(){},
jK:function jK(){},
jU:function jU(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jV:function jV(){},
jS:function jS(){},
d7:function d7(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aX:function aX(){},
jH:function jH(a,b){this.a=a
this.b=b},
eG:function eG(a){this.a=a},
k4:function k4(a){this.a=a},
dW:function dW(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
eg:function eg(){},
eh:function eh(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
cC:function cC(){},
cD:function cD(){},
eo:function eo(){},
ep:function ep(){},
et:function et(){},
ew:function ew(){},
ex:function ex(){},
cE:function cE(){},
cF:function cF(){},
ez:function ez(){},
eA:function eA(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){}},K={
O:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.H(a,0)
t=C.a.H(b,0)
if(u>t){s=t
t=u
u=s}return new K.hS(u,t)},
t:function(a){var u=new K.i0()
u.eq(a)
return u},
aP:function aP(){},
d8:function d8(){},
bg:function bg(){},
a7:function a7(){this.a=null},
hS:function hS(a,b){this.a=a
this.b=b},
i0:function i0(){this.a=null}},L={
iE:function(){var u=new L.iD(),t=P.h
u.a=new H.I([t,L.dC])
u.b=new H.I([t,L.dJ])
u.c=P.c7(t)
return u},
dC:function dC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(a){this.b=a
this.c=null},
iD:function iD(){var _=this
_.d=_.c=_.b=_.a=null},
dL:function dL(a){this.b=a
this.a=this.c=null}},O={
kz:function(a){var u=new O.aQ([a])
u.bf(a)
return u},
aQ:function aQ(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
ca:function ca(){this.b=this.a=null},
fo:function fo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
di:function di(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(){},
hn:function hn(a,b){this.a=a
this.b=b},
ho:function ho(){},
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(){},
hr:function hr(a,b){this.a=a
this.b=b},
hs:function hs(){},
hf:function hf(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dj:function dj(){},
hg:function hg(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ay:function ay(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hi:function hi(){var _=this
_.e=_.d=_.c=_.b=null},
hj:function hj(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hk:function hk(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dy:function dy(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){}},E={
ll:function(){var u,t=new E.aS()
t.a=""
t.b=!0
u=O.kz(E.aS)
t.y=u
u.aW(t.ghT(),t.ghW())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbz(0,null)
return t},
lV:function(){if(J.ku(window.navigator.vendor,"Google"))return C.I
if(J.ku(window.navigator.userAgent,"Firefox"))return C.u
var u=window.navigator.appVersion
if(J.at(u).F(u,"Trident")||C.a.F(u,"Edge"))return C.v
if(J.ku(window.navigator.appName,"Microsoft"))return C.v
return C.J},
lW:function(){var u=window.navigator.appVersion
if(J.at(u).F(u,"Win"))return C.a3
if(C.a.F(u,"Mac"))return C.D
if(C.a.F(u,"Linux"))return C.a4
return C.a5},
ns:function(a,b){var u=new E.hT(a)
u.ep(a,b)
return u},
nz:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$iby)return E.lH(a,!0,!0,!0,!1)
u=W.ky()
t=u.style
t.width="100%"
t.height="100%"
s.gc_(a).n(0,u)
return E.lH(u,!0,!0,!0,!1)},
lH:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dG(),o=C.i.cE(a,"webgl2",P.n7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.v(P.w("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.ns(o,a)
u=new T.iy(o)
u.b=o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dP(a)
t=new X.fZ()
t.c=new X.ah(!1,!1,!1)
t.d=P.c7(P.u)
u.b=t
t=new X.hz(u)
t.f=0
t.r=V.aZ()
t.x=V.aZ()
t.ch=t.Q=1
u.c=t
t=new X.h8(u)
t.r=0
t.x=V.aZ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iF(u)
t.f=V.aZ()
t.r=V.aZ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dD,P.a2]])
t=$.fy
u.Q=(t==null?$.fy=new E.e1(E.lV(),E.lW()):t).a===C.u?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.W(r,"contextmenu",u.gfa(),!1))
u.z.push(W.W(a,"focus",u.gfg(),!1))
u.z.push(W.W(a,"blur",u.gf4(),!1))
u.z.push(W.W(r,"keyup",u.gfk(),!1))
u.z.push(W.W(r,"keydown",u.gfi(),!1))
u.z.push(W.W(a,"mousedown",u.gfo(),!1))
u.z.push(W.W(a,"mouseup",u.gft(),!1))
u.z.push(W.W(a,q,u.gfq(),!1))
s=u.z
W.kB(a)
W.kB(a)
s.push(W.W(a,W.kB(a),u.gfv(),!1))
u.z.push(W.W(r,q,u.gfc(),!1))
u.z.push(W.W(r,"mouseup",u.gfe(),!1))
u.z.push(W.W(r,"pointerlockchange",u.gfz(),!1))
u.z.push(W.W(a,"touchstart",u.gfP(),!1))
u.z.push(W.W(a,"touchend",u.gfL(),!1))
u.z.push(W.W(a,"touchmove",u.gfN(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ab(Date.now(),!1)
p.db=0
p.d4()
return p},
f6:function f6(){},
aS:function aS(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bw:function bw(a){this.b=a},
bE:function bE(a){this.b=a},
e1:function e1(a,b){this.a=a
this.b=b},
hT:function hT(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
dG:function dG(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iB:function iB(a){this.a=a}},Z={
lU:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bP(c)),35044)
a.bindBuffer(b,null)
return new Z.dT(b,u)},
ai:function(a){return new Z.b2(a)},
dT:function dT(a,b){this.a=a
this.b=b},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ct:function ct(a){this.a=a},
bx:function bx(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a}},D={
D:function(){var u=new D.bB()
u.d=0
return u},
f9:function f9(){},
bB:function bB(){var _=this
_.d=_.c=_.b=_.a=null},
fA:function fA(a){this.a=a},
fB:function fB(a){this.a=a},
Y:function Y(){this.b=null},
ba:function ba(){this.b=null},
bb:function bb(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f3:function f3(){},
bz:function bz(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a6:function a6(){},
de:function de(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hP:function hP(){},
id:function id(){}},X={cW:function cW(a,b){this.a=a
this.b=b},dd:function dd(a,b){this.a=a
this.b=b},fZ:function fZ(){var _=this
_.d=_.c=_.b=_.a=null},dh:function dh(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h8:function h8(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},aW:function aW(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hz:function hz(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cc:function cc(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hQ:function hQ(){},dK:function dK(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iF:function iF(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dP:function dP(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lm:function(a){var u=new X.fJ(),t=new V.am(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.kM()
u.r=t
return u},
lv:function(a){var u,t,s=new X.dr()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().n(0,s.gez())
t=new D.z("mover",u,s.b)
t.b=!0
s.a1(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.B().a)){s.c=1.0471975511965976
t=new D.z("fov",t,1.0471975511965976)
t.b=!0
s.a1(t)}t=s.d
if(!(Math.abs(t-0.1)<$.B().a)){s.d=0.1
t=new D.z("near",t,0.1)
t.b=!0
s.a1(t)}t=s.e
if(!(Math.abs(t-2000)<$.B().a)){s.e=2000
t=new D.z("far",t,2000)
t.b=!0
s.a1(t)}return s},
f2:function f2(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kx:function kx(){},
fJ:function fJ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fQ:function fQ(){this.b=this.a=null},
dr:function dr(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(){},
mg:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6="bumpMaps",a7="modifiers",a8=34067,a9=V.nu("Test 029"),b0=W.ky()
b0.className="pageLargeCanvas"
b0.id=a4
a9.a.appendChild(b0)
u=[P.h]
a9.dk(H.b(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],u))
a9.hf(H.b(["bumpMaps"],u))
a9.dk(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a4)
if(t==null)H.v(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.nz(t,!0,!0,!0,!1)
r=new U.c3()
r.bf(U.ac)
r.aW(r.geX(),r.gfD())
r.e=null
r.f=V.bh()
r.r=0
q=s.x
p=new U.dR()
o=U.kA()
o.scD(0,!0)
o.scm(6.283185307179586)
o.sco(0)
o.sah(0,0)
o.scn(100)
o.sW(0)
o.sc2(0.5)
p.b=o
n=p.gaM()
o.gp().n(0,n)
o=U.kA()
o.scD(0,!0)
o.scm(6.283185307179586)
o.sco(0)
o.sah(0,0)
o.scn(100)
o.sW(0)
o.sc2(0.5)
p.c=o
o.gp().n(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.ah(!1,!1,!1)
l=p.d
p.d=m
o=new D.z(a7,l,m)
o.b=!0
p.S(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.z("invertX",o,!1)
o.b=!0
p.S(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.z("invertY",o,!1)
o.b=!0
p.S(o)}p.b3(q)
r.n(0,p)
q=s.x
p=new U.dQ()
o=U.kA()
o.scD(0,!0)
o.scm(6.283185307179586)
o.sco(0)
o.sah(0,0)
o.scn(100)
o.sW(0)
o.sc2(0.2)
p.b=o
o.gp().n(0,p.gaM())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.ah(!0,!1,!1)
l=p.c
p.c=m
o=new D.z(a7,l,m)
o.b=!0
p.S(o)
p.b3(q)
r.n(0,p)
q=s.x
p=new U.dS()
p.c=0.01
p.e=p.d=0
m=new X.ah(!1,!1,!1)
p.b=m
o=new D.z(a7,a5,m)
o.b=!0
p.S(o)
p.b3(q)
r.n(0,p)
r.n(0,U.lg(V.az(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
k=X.lv(r)
j=new X.f2()
j.d=j.c=j.b=j.a=512
j.e=!0
j.f=!1
j.x=j.r=1
j.ch=T.kN(a5)
j.cx=new V.am(0,0,0,1)
j.cy=!0
j.db=2000
j.dx=!0
j.dy=V.kM()
j.sao(0,512)
j.sam(0,512)
i=new V.am(0,0,0,1)
if(!j.cx.v(0,i)){l=j.cx
j.cx=i
q=new D.z("color",l,i)
q.b=!0
j.a1(q)}if(j.cy){j.cy=!1
q=new D.z("clearColor",!0,!1)
q.b=!0
j.a1(q)}q=j.db
if(!(Math.abs(q-2000)<$.B().a)){j.db=2000
q=new D.z("depth",q,2000)
q.b=!0
j.a1(q)}if(!j.f){j.f=!0
q=new D.z("autoResize",!1,!0)
q.b=!0
j.a1(q)}q=j.r
if(!(Math.abs(q-1)<$.B().a)){j.r=1
q=new D.z("autoResizeScalarX",q,1)
q.b=!0
j.a1(q)}q=j.x
if(!(Math.abs(q-1)<$.B().a)){j.x=1
q=new D.z("autoResizeScalarY",q,1)
q.b=!0
j.a1(q)}h=V.kM()
if(!J.F(j.dy,h)){l=j.dy
j.dy=h
q=new D.z("region",l,h)
q.b=!0
j.a1(q)}g=E.ll()
g.sbz(0,F.p9())
f=new O.di()
q=O.kz(V.aV)
f.e=q
q.aW(f.gf0(),f.gf2())
q=new O.ay(f,"emission")
q.c=new A.a0(!1,!1,!1)
q.f=new V.X(0,0,0)
f.f=q
q=new O.ay(f,"ambient")
q.c=new A.a0(!1,!1,!1)
q.f=new V.X(0,0,0)
f.r=q
q=new O.ay(f,"diffuse")
q.c=new A.a0(!1,!1,!1)
q.f=new V.X(0,0,0)
f.x=q
q=new O.ay(f,"invDiffuse")
q.c=new A.a0(!1,!1,!1)
q.f=new V.X(0,0,0)
f.y=q
q=new O.hk(f,"specular")
q.c=new A.a0(!1,!1,!1)
q.f=new V.X(0,0,0)
q.ch=100
f.z=q
q=new O.hg(f,"bump")
q.c=new A.a0(!1,!1,!1)
f.Q=q
f.ch=null
q=new O.ay(f,"reflect")
q.c=new A.a0(!1,!1,!1)
q.f=new V.X(0,0,0)
f.cx=q
q=new O.hj(f,"refract")
q.c=new A.a0(!1,!1,!1)
q.f=new V.X(0,0,0)
q.ch=1
f.cy=q
q=new O.hf(f,"alpha")
q.c=new A.a0(!1,!1,!1)
q.f=1
f.db=q
q=new D.de()
q.bf(D.a6)
q.e=H.b([],[D.f3])
q.f=H.b([],[D.bz])
q.r=H.b([],[D.hP])
q.x=H.b([],[D.id])
q.z=q.y=null
q.cG(q.geZ(),q.gfB(),q.gfF())
f.dx=q
p=new O.hi()
p.b=new V.am(0,0,0,0)
p.c=1
p.d=10
p.e=!1
f.dy=p
p=q.y
q=p==null?q.y=D.D():p
q.n(0,f.gfY())
q=f.dx
p=q.z
q=p==null?q.z=D.D():p
q.n(0,f.gbC())
f.fr=null
q=f.dx
e=V.kS()
p=U.lg(V.lr(V.ly(),e,new V.E(0,-1,-1)))
i=new V.X(1,1,1)
o=new D.bz()
o.c=new V.X(1,1,1)
o.a=V.lT()
o.d=V.kS()
o.e=V.nI()
l=o.b
o.b=p
p.gp().n(0,o.geu())
p=new D.z("mover",l,o.b)
p.b=!0
o.aw(p)
if(!o.c.v(0,i)){l=o.c
o.c=i
p=new D.z("color",l,i)
p.b=!0
o.aw(p)}q.n(0,o)
q=f.r
q.saR(0,new V.X(0,0,1))
q=f.x
q.saR(0,new V.X(0,1,0))
q=f.z
q.saR(0,new V.X(1,0,0))
q=f.z
q.d8(new A.a0(!0,!1,!1))
q.d9(10)
q=s.f
p=q.a
d=p.createTexture()
p.bindTexture(a8,d)
p.texParameteri(a8,10242,10497)
p.texParameteri(a8,10243,10497)
p.texParameteri(a8,10241,9729)
p.texParameteri(a8,10240,9729)
p.bindTexture(a8,a5)
c=new T.ix()
c.a=0
c.b=d
c.c=!1
c.d=0
q.aL(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aL(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aL(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aL(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aL(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aL(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=M.lh()
q=new O.dy()
q.b=1.0471975511965976
q.d=new V.X(1,1,1)
l=q.c
q.c=c
c.gp().n(0,q.gbC())
p=new D.z("boxTexture",l,q.c)
p.b=!0
q.a7(p)
b.saU(q)
b.sba(0,j)
b.sb4(k)
a=new M.d4()
a.a=!0
q=O.kz(E.aS)
a.e=q
q.aW(a.gf6(),a.gf8())
a.y=a.x=a.r=a.f=null
a0=X.lm(a5)
a.sb4(a5)
a.sba(0,a0)
a.saU(a5)
a.sb4(k)
a.saU(f)
a.sba(0,j)
a.e.n(0,g)
a1=new O.fo()
a1.sdw(a5)
a1.sdu(a5)
a2=V.lq()
if(!J.F(a1.d,a2)){a1.d=a2
a1.ap()}a2=V.lq()
if(!J.F(a1.e,a2)){a1.e=a2
a1.ap()}a1.sdt(a5)
a1.sdw(j.ch)
a1.sdt(V.ls(0.05,0.05,0.05))
a3=M.lh()
a3.saU(a1)
q=M.ap
p=H.b([b,a,a3],[q])
o=new M.cY()
o.bf(q)
o.e=!0
o.f=!1
o.r=null
o.aW(o.gfH(),o.gfJ())
o.aa(0,p)
q=s.d
if(q!==o){if(q!=null)q.gp().T(0,s.gcM())
s.d=o
o.gp().n(0,s.gcM())
s.cN()}q=new V.it(a6,new X.km(a1,s))
u=u.getElementById(a6)
q.c=u
if(u==null)H.v("Failed to find bumpMaps for Texture2DGroup")
q.di(0,"../resources/BumpMap1.png",!0)
q.n(0,"../resources/BumpMap2.png")
q.n(0,"../resources/BumpMap3.png")
q.n(0,"../resources/BumpMap4.png")
q.n(0,"../resources/BumpMap5.png")
q.n(0,"../resources/ScrewBumpMap.png")
q.n(0,"../resources/CtrlPnlBumpMap.png")
u=s.Q
if(u==null)u=s.Q=D.D()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Y]}]):q
u.push(new X.kn(a9,a1))
V.p5(s)},
km:function km(a,b){this.a=a
this.b=b},
kn:function kn(a,b){this.a=a
this.b=b}},V={
fb:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.am(u,t,s,1)},
pb:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bd(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.a.aD("null",c)
return C.a.aD(C.d.e6(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
bU:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.r)(a),++s){r=V.K(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.aD(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
cM:function(a){return C.d.ih(Math.pow(2,C.X.ce(Math.log(H.oJ(a))/Math.log(2))))},
lq:function(){var u=$.lp
return u==null?$.lp=new V.c9(1,0,0,0,1,0,0,0,1):u},
bh:function(){var u=$.lt
return u==null?$.lt=V.az(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
az:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ls:function(a,b,c){return V.az(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
lr:function(a,b,c){var u=c.w(0,Math.sqrt(c.C(c))),t=b.aB(u),s=t.w(0,Math.sqrt(t.C(t))),r=u.aB(s),q=new V.E(a.a,a.b,a.c),p=s.U(0).C(q),o=r.U(0).C(q),n=u.U(0).C(q)
return V.az(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aZ:function(){var u=$.lx
return u==null?$.lx=new V.a3(0,0):u},
ly:function(){var u=$.aD
return u==null?$.aD=new V.V(0,0,0):u},
kM:function(){var u=$.lD
return u==null?$.lD=V.lC(0,0,1,1):u},
lC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dv(a,b,c,d)},
cs:function(){var u=$.lS
return u==null?$.lS=new V.E(0,0,0):u},
nI:function(){var u=$.j6
return u==null?$.j6=new V.E(-1,0,0):u},
kS:function(){var u=$.j7
return u==null?$.j7=new V.E(0,1,0):u},
lT:function(){var u=$.j8
return u==null?$.j8=new V.E(0,0,1):u},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fz:function fz(a){this.a=a},
c9:function c9(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aV:function aV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a3:function a3(a,b){this.a=a
this.b=b},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
p5:function(a){P.nA(C.U,new V.kp(a))},
nu:function(a){var u=new V.i5()
u.er(a,!0)
return u},
cX:function cX(){},
kp:function kp(a){this.a=a},
fm:function fm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fL:function fL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fM:function fM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hN:function hN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i5:function i5(){this.b=this.a=null},
i7:function i7(a){this.a=a},
i6:function i6(a){this.a=a},
i8:function i8(a){this.a=a},
it:function it(a,b){this.a=a
this.c=null
this.d=b},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(){}},U={
kA:function(){var u=new U.fc()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lg:function(a){var u=new U.cZ()
u.a=a
return u},
fc:function fc(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){this.b=this.a=null},
c3:function c3(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
dQ:function dQ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dS:function dS(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lh:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.d_()
k.a=!0
u=E.ll()
t=F.lE()
s=t.a
r=new V.E(-1,-1,1)
r=r.w(0,Math.sqrt(r.C(r)))
q=s.bj(new V.bk(1,2,4,6),V.fb(255,0,0),new V.V(-1,-1,0),new V.a3(0,1),r,l)
r=t.a
s=new V.E(1,-1,1)
s=s.w(0,Math.sqrt(s.C(s)))
p=r.bj(new V.bk(0,3,4,6),V.fb(0,0,255),new V.V(1,-1,0),new V.a3(1,1),s,l)
s=t.a
r=new V.E(1,1,1)
r=r.w(0,Math.sqrt(r.C(r)))
o=s.bj(new V.bk(0,2,5,6),V.fb(0,128,0),new V.V(1,1,0),new V.a3(1,0),r,l)
r=t.a
s=V.aZ()
n=new V.E(-1,1,1)
n=n.w(0,Math.sqrt(n.C(n)))
m=r.bj(new V.bk(0,2,4,7),V.fb(255,255,0),new V.V(-1,1,0),s,n,l)
t.d.hh(H.b([q,p,o,m],[F.bp]))
t.aA()
u.sbz(0,t)
k.e=u
k.sb4(l)
k.sba(0,l)
k.saU(l)
return k},
cY:function cY(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
d_:function d_(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d4:function d4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ap:function ap(){}},A={
nb:function(a,b){var u=a.b6,t=new A.he(b,u)
t.bB(b,u)
t.eo(a,b)
return t},
nc:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gar(a2)+a3.gar(a3)+a4.gar(a4)+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+a9.gar(a9)+b0.gar(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.r)(b1),++t)d+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.r)(b2),++t)d+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.r)(b3),++t)d+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.r)(b4),++t)d+="_"+H.e(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
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
e=$.ae()
if(j){u=$.b6()
e=new Z.b2(e.a|u.a)}if(i){u=$.b5()
e=new Z.b2(e.a|u.a)}if(h){u=$.b4()
e=new Z.b2(e.a|u.a)}return new A.hh(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
ka:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kb:function(a,b,c){var u
A.ka(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eS(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oi:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.ka(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oe:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kb(b,t,"ambient")
b.a+="\n"},
og:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kb(b,t,"diffuse")
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
oj:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kb(b,t,"invDiffuse")
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
op:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kb(b,t,"specular")
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
ol:function(a,b){var u,t,s
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
on:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.ka(b,t,"reflect")
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
oo:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.ka(b,t,"refract")
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
of:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eS(t)
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
c.a=r+"\n"}r=[P.h]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.b.j(q," * ")+";\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 "+t+"Value(vec3 norm, "+s+" lit)\n"
c.a=u
c.a=u+"{\n"
q=H.b([],r)
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
p=H.b([],r)
if(!a.c.a)u=!1
else u=!0
if(u)p.push("diffuse(norm, normDir)")
if(!a.d.a)u=!1
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
if(!a.e.a)u=!1
else u=!0
if(u)p.push("specular(norm, normDir)")
u=c.a+="      highLight = intensity*("+C.b.j(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.j(q," + ")+");\n"
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
oh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eS(t)
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
r=[P.h]
o=H.b([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
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
c.a+="      highLight = intensity*("+C.b.j(m," + ")+");\n"}else c.a+="   highLight = "+C.b.j(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.j(o," + ")+");\n"
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
om:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eS(t)
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
c.a=r+"\n"}r=[P.h]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.j(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.b([],r)
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
k=H.b([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.j(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.j(l," + ")+");\n"
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
oq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eS(t)
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
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
if(o){u=$.fy
if(u==null)u=$.fy=new E.e1(E.lV(),E.lW())
r=c.a
if(u.b===C.D){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=u+"\n"}u=[P.h]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.j(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.b([],u)
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
i=H.b([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.j(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.j(j," + ")+");\n"
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
ok:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.h])
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
u=b.a+="   return "+C.b.j(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
or:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.S("")
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
A.oi(a,j)
A.oe(a,j)
A.og(a,j)
A.oj(a,j)
A.op(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.on(a,j)
A.oo(a,j)}A.ol(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.of(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.oh(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.om(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.oq(a,q[o],j)
A.ok(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.h])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ac(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ac(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ac(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ac(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.j(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
os:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bl+"];\n"
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
ou:function(a,b){var u
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
ot:function(a,b){var u
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
ow:function(a,b){var u,t
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
ox:function(a,b){var u,t
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
ov:function(a,b){var u
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
oy:function(a,b){var u
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
eS:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ac(a,1)},
kP:function(a,b,c,d,e){var u=new A.iM(a,c,e)
u.f=d
P.n8(d,0,P.u)
return u},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(a){this.a=a},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a,b){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
he:function he(a,b){var _=this
_.iy=_.ix=_.bm=_.b6=_.bl=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iL=_.iK=_.iJ=_.cc=_.cb=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.iI=_.iH=_.dK=_.iG=_.iF=_.dJ=_.dI=_.iE=_.iD=_.dH=_.dG=_.iC=_.iB=_.dF=_.iA=_.iz=_.dE=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cU:function cU(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
hh:function hh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bl=b3
_.b6=b4
_.bm=b5},
co:function co(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cp:function cp(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cq:function cq(a,b,c,d,e,f,g,h,i,j){var _=this
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
cr:function cr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dx:function dx(){},
ia:function ia(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dM:function dM(){},
iR:function iR(a){this.a=a},
bm:function bm(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
T:function T(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cn:function cn(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){this.a=a
this.c=b
this.d=c},
bn:function bn(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
b1:function b1(a,b,c){this.a=a
this.c=b
this.d=c},
bo:function bo(a,b,c){this.a=a
this.c=b
this.d=c}},F={
p9:function(){return F.oN(15,30,0.5,1,new F.kr())},
oN:function(a,b,c,d,e){var u=F.p7(a,b,new F.ke(e,d,b,c))
if(u==null)return
u.aA()
u.hR(new F.jf(),new F.hH())
return u},
p7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.lE()
t=H.b([],[F.bp])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.j9(g,g,new V.am(p,0,0,1),g,g,new V.a3(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.dz(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.j9(g,g,new V.am(j,i,h,1),g,g,new V.a3(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.dz(g))}}u.d.hi(a+1,b+1,t)
return u},
d5:function(a,b,c){var u=new F.b9(),t=a.a
if(t==null)H.v(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.v(P.w("May not create a face with vertices attached to different shapes."))
u.h2(a)
u.h3(b)
u.h4(c)
u.a.a.d.b.push(u)
u.a.a.aj()
return u},
lE:function(){var u=new F.i1(),t=new F.ja(u)
t.b=!1
t.c=H.b([],[F.bp])
u.a=t
t=new F.i4()
t.b=H.b([],[F.ds])
u.b=t
t=new F.i3(u)
t.b=H.b([],[F.df])
u.c=t
t=new F.i2(u)
t.b=H.b([],[F.b9])
u.d=t
u.e=null
return u},
j9:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bp(),r=new F.ji()
r.b=H.b([],[F.ds])
s.b=r
r=new F.je()
u=[F.df]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.jb()
u=[F.b9]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mz()
s.e=0
r=$.ae()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b6().a)!==0?e:t
s.x=(u&$.b5().a)!==0?b:t
s.y=(u&$.aN().a)!==0?f:t
s.z=(u&$.bs().a)!==0?g:t
s.Q=(u&$.mA().a)!==0?c:t
s.ch=(u&$.bW().a)!==0?i:0
s.cx=(u&$.b4().a)!==0?a:t
return s},
kr:function kr(){},
ke:function ke(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fC:function fC(){},
i9:function i9(){},
df:function df(){},
h0:function h0(){},
iL:function iL(){},
ds:function ds(){},
i1:function i1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a){this.a=a
this.b=null},
i3:function i3(a){this.a=a
this.b=null},
i4:function i4(){this.b=null},
bp:function bp(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jk:function jk(a){this.a=a},
jj:function jj(a){this.a=a},
ja:function ja(a){this.a=a
this.c=this.b=null},
jb:function jb(){this.d=this.c=this.b=null},
jc:function jc(a,b){this.a=a
this.b=b},
jd:function jd(a,b){this.a=a
this.b=b},
je:function je(){this.c=this.b=null},
jg:function jg(){},
jf:function jf(){},
jh:function jh(){},
hH:function hH(){},
ji:function ji(){this.b=null}},T={
kN:function(a){var u=new T.iw()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
cm:function cm(){},
is:function is(){},
iw:function iw(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ix:function ix(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iy:function iy(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
iA:function iA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iz:function iz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kI.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gI:function(a){return H.cg(a)},
i:function(a){return"Instance of '"+H.e(H.ch(a))+"'"}}
J.fV.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaL:1}
J.db.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dc.prototype={
gI:function(a){return 0},
i:function(a){return String(a)},
$in3:1}
J.hM.prototype={}
J.bK.prototype={}
J.be.prototype={
i:function(a){var u=a[$.mn()]
if(u==null)return this.el(a)
return"JavaScript function for "+H.e(J.ak(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bc.prototype={
cu:function(a,b){if(!!a.fixed$length)H.v(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.du(b,null))
return a.splice(b,1)[0]},
T:function(a,b){var u
if(!!a.fixed$length)H.v(P.y("remove"))
for(u=0;u<a.length;++u)if(J.F(a[u],b)){a.splice(u,1)
return!0}return!1},
aa:function(a,b){var u,t
if(!!a.fixed$length)H.v(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.r)(b),++t)a.push(b[t])},
B:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.av(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hN:function(a){return this.j(a,"")},
hG:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.av(a))}return u},
hH:function(a,b,c){return this.hG(a,b,c,null)},
hF:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.av(a))}throw H.c(H.fT())},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
eh:function(a,b,c){if(b<0||b>a.length)throw H.c(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.Z(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aM(a,0)])
return H.b(a.slice(b,c),[H.aM(a,0)])},
ghE:function(a){if(a.length>0)return a[0]
throw H.c(H.fT())},
gav:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fT())},
dl:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.av(a))}return!1},
aY:function(a,b){if(!!a.immutable$list)H.v(P.y("sort"))
H.nx(a,b==null?J.ob():b)},
eg:function(a){return this.aY(a,null)},
F:function(a,b){var u
for(u=0;u<a.length;++u)if(J.F(a[u],b))return!0
return!1},
i:function(a){return P.kF(a,"[","]")},
gP:function(a){return new J.a5(a,a.length)},
gI:function(a){return H.cg(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.v(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kv(b,u,null))
if(b<0)throw H.c(P.Z(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bT(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.v(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bT(a,b))
a[b]=c},
$ip:1,
$ii:1,
$in:1}
J.kH.prototype={}
J.a5.prototype={
gA:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.r(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c6.prototype={
aS:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ad(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbo(b)
if(this.gbo(a)===u)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
ih:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.y(""+a+".toInt()"))},
ce:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
e6:function(a,b){var u
if(b>20)throw H.c(P.Z(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+u
return u},
bb:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.Z(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.v(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.u("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bd:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
en:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dd(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dd(a,b)},
dd:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aO:function(a,b){var u
if(a>0)u=this.dc(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h8:function(a,b){if(b<0)throw H.c(H.ad(b))
return this.dc(a,b)},
dc:function(a,b){return b>31?0:a>>>b},
$iL:1,
$iaa:1}
J.da.prototype={$iu:1}
J.d9.prototype={}
J.bd.prototype={
X:function(a,b){if(b<0)throw H.c(H.bT(a,b))
if(b>=a.length)H.v(H.bT(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.bT(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(typeof b!=="string")throw H.c(P.kv(b,null,null))
return a+b},
aT:function(a,b,c,d){var u,t
c=P.b_(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.v(H.ad(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ab:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.ab(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.v(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.c(P.du(b,null))
if(b>c)throw H.c(P.du(b,null))
if(c>a.length)throw H.c(P.du(c,null))
return a.substring(b,c)},
ac:function(a,b){return this.q(a,b,null)},
ik:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aD:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
bn:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dQ:function(a,b){return this.bn(a,b,0)},
hp:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.Z(c,0,u,null,null))
return H.mk(a,b,c)},
F:function(a,b){return this.hp(a,b,0)},
aS:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ad(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ih:1}
H.m.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.X(this.a,b)},
$ap:function(){return[P.u]},
$ax:function(){return[P.u]},
$ai:function(){return[P.u]},
$an:function(){return[P.u]}}
H.p.prototype={}
H.dg.prototype={
gP:function(a){return new H.bf(this,this.gl(this))},
bx:function(a,b){return this.ek(0,b)}}
H.bf.prototype={
gA:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.at(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.av(s))
u=t.c
if(typeof q!=="number")return H.q(q)
if(u>=q){t.d=null
return!1}t.d=r.K(s,u);++t.c
return!0}}
H.c8.prototype={
gP:function(a){return new H.hc(J.aO(this.a),this.b)},
gl:function(a){return J.af(this.a)},
K:function(a,b){return this.b.$1(J.eT(this.a,b))},
$ai:function(a,b){return[b]}}
H.fv.prototype={$ip:1,
$ap:function(a,b){return[b]}}
H.hc.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gA(t))
return!0}u.a=null
return!1},
gA:function(a){return this.a}}
H.hd.prototype={
gl:function(a){return J.af(this.a)},
K:function(a,b){return this.b.$1(J.eT(this.a,b))},
$ap:function(a,b){return[b]},
$adg:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cu.prototype={
gP:function(a){return new H.jm(J.aO(this.a),this.b)}}
H.jm.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gA(u)))return!0
return!1},
gA:function(a){var u=this.a
return u.gA(u)}}
H.d6.prototype={}
H.iW.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dN.prototype={}
H.fe.prototype={
i:function(a){return P.kL(this)},
m:function(a,b,c){return H.mV()},
$iR:1}
H.ff.prototype={
gl:function(a){return this.a},
c0:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c0(0,b))return
return this.cW(b)},
cW:function(a){return this.b[a]},
B:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cW(s))}}}
H.iJ.prototype={
an:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hI.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fY.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iV.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ks.prototype={
$1:function(a){if(!!J.P(a).$ibA)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.es.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.c_.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cN(t==null?"unknown":t)+"'"},
gio:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ip.prototype={}
H.ig.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cN(u)+"'"}}
H.bY.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bY))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cg(this.a)
else u=typeof t!=="object"?J.cR(t):H.cg(t)
return(u^H.cg(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ch(u))+"'")}}
H.f8.prototype={
i:function(a){return this.a}}
H.hZ.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ghM:function(a){return this.a===0},
ga4:function(a){return new H.h2(this,[H.aM(this,0)])},
gim:function(a){var u=this
return H.na(u.ga4(u),new H.fX(u),H.aM(u,0),H.aM(u,1))},
c0:function(a,b){var u=this.b
if(u==null)return!1
return this.eJ(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bh(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bh(r,b)
s=t==null?null:t.b
return s}else return q.hK(b)},
hK:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cY(r,s.dR(a))
t=s.dS(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cP(u==null?s.b=s.bQ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cP(t==null?s.c=s.bQ():t,b,c)}else s.hL(b,c)},
hL:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bQ()
u=r.dR(a)
t=r.cY(q,u)
if(t==null)r.bT(q,u,[r.bR(a,b)])
else{s=r.dS(t,a)
if(s>=0)t[s].b=b
else t.push(r.bR(a,b))}},
B:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.av(u))
t=t.c}},
cP:function(a,b,c){var u=this.bh(a,b)
if(u==null)this.bT(a,b,this.bR(b,c))
else u.b=c},
eU:function(){this.r=this.r+1&67108863},
bR:function(a,b){var u,t=this,s=new H.h1(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eU()
return s},
dR:function(a){return J.cR(a)&0x3ffffff},
dS:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1},
i:function(a){return P.kL(this)},
bh:function(a,b){return a[b]},
cY:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
eN:function(a,b){delete a[b]},
eJ:function(a,b){return this.bh(a,b)!=null},
bQ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bT(t,u,t)
this.eN(t,u)
return t}}
H.fX.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aM(u,1),args:[H.aM(u,0)]}}}
H.h1.prototype={}
H.h2.prototype={
gl:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.h3(u,u.r)
t.c=u.e
return t}}
H.h3.prototype={
gA:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.av(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.ki.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.kj.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kk.prototype={
$1:function(a){return this.a(a)}}
H.fW.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inq:1}
H.cd.prototype={$icd:1}
H.bi.prototype={$ibi:1}
H.dk.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.ce.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.L]},
$ax:function(){return[P.L]},
$ii:1,
$ai:function(){return[P.L]},
$in:1,
$an:function(){return[P.L]}}
H.dl.prototype={
m:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.u]},
$ax:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]},
$in:1,
$an:function(){return[P.u]}}
H.hA.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hB.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hC.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hD.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hE.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.dm.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.cf.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aK(b,a,a.length)
return a[b]},
$icf:1,
$ibJ:1}
H.cy.prototype={}
H.cz.prototype={}
H.cA.prototype={}
H.cB.prototype={}
P.jo.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jn.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jp.prototype={
$0:function(){this.a.$0()}}
P.jq.prototype={
$0:function(){this.a.$0()}}
P.ey.prototype={
ex:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bS(new P.jX(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
ey:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bS(new P.jW(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idH:1}
P.jX.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jW.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.en(u,q)}s.c=r
t.d.$1(s)}}
P.bL.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bM.prototype={
gA:function(a){var u=this.c
if(u==null)return this.b
return u.gA(u)},
t:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.t())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bL){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aO(u)
if(!!r.$ibM){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jT.prototype={
gP:function(a){return new P.bM(this.a())}}
P.dU.prototype={}
P.dD.prototype={}
P.ij.prototype={}
P.dH.prototype={}
P.k5.prototype={}
P.kc.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dq():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jE.prototype={
ic:function(a){var u,t,s,r=null
try{if(C.f===$.as){a.$0()
return}P.oA(r,r,this,a)}catch(s){u=H.aj(s)
t=H.l1(s)
P.m6(r,r,this,u,t)}},
ie:function(a,b){var u,t,s,r=null
try{if(C.f===$.as){a.$1(b)
return}P.oB(r,r,this,a,b)}catch(s){u=H.aj(s)
t=H.l1(s)
P.m6(r,r,this,u,t)}},
ig:function(a,b){return this.ie(a,b,null)},
hm:function(a){return new P.jF(this,a)},
dr:function(a,b){return new P.jG(this,a,b)}}
P.jF.prototype={
$0:function(){return this.a.ic(this.b)}}
P.jG.prototype={
$1:function(a){return this.a.ig(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jB.prototype={
gP:function(a){var u=new P.e9(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
F:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eH(b)
return t}},
eH:function(a){var u=this.d
if(u==null)return!1
return this.bH(this.cX(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cQ(u==null?s.b=P.kT():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cQ(t==null?s.c=P.kT():t,b)}else return s.eB(0,b)},
eB:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kT()
u=s.cS(b)
t=r[u]
if(t==null)r[u]=[s.bE(b)]
else{if(s.bH(t,b)>=0)return!1
t.push(s.bE(b))}return!0},
T:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fS(this.c,b)
else return this.fR(0,b)},
fR:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cX(r,b)
t=s.bH(u,b)
if(t<0)return!1
s.df(u.splice(t,1)[0])
return!0},
cQ:function(a,b){if(a[b]!=null)return!1
a[b]=this.bE(b)
return!0},
fS:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.df(u)
delete a[b]
return!0},
cR:function(){this.r=1073741823&this.r+1},
bE:function(a){var u,t=this,s=new P.jC(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cR()
return s},
df:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cR()},
cS:function(a){return J.cR(a)&1073741823},
cX:function(a,b){return a[this.cS(b)]},
bH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1}}
P.jC.prototype={}
P.e9.prototype={
gA:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.av(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fS.prototype={}
P.h4.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.h5.prototype={$ip:1,$ii:1,$in:1}
P.x.prototype={
gP:function(a){return new H.bf(a,this.gl(a))},
K:function(a,b){return this.h(a,b)},
B:function(a,b){var u,t=this.gl(a)
if(typeof t!=="number")return H.q(t)
u=0
for(;u<t;++u){b.$1(this.h(a,u))
if(t!==this.gl(a))throw H.c(P.av(a))}},
ij:function(a,b){var u,t,s=this,r=H.b([],[H.oT(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.q(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
ii:function(a){return this.ij(a,!0)},
hC:function(a,b,c,d){var u
P.b_(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kF(a,"[","]")}}
P.h9.prototype={}
P.ha.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a1.prototype={
B:function(a,b){var u,t
for(u=J.aO(this.ga4(a));u.t();){t=u.gA(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.af(this.ga4(a))},
i:function(a){return P.kL(a)},
$iR:1}
P.jY.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.hb.prototype={
h:function(a,b){return J.bX(this.a,b)},
m:function(a,b,c){J.kt(this.a,b,c)},
B:function(a,b){J.l9(this.a,b)},
gl:function(a){return J.af(this.a)},
i:function(a){return J.ak(this.a)},
$iR:1}
P.dO.prototype={}
P.jI.prototype={
aa:function(a,b){var u
for(u=J.aO(b);u.t();)this.n(0,u.gA(u))},
i:function(a){return P.kF(this,"{","}")},
K:function(a,b){var u,t,s
P.lB(b,"index")
for(u=P.nS(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
$ip:1,
$ii:1}
P.ea.prototype={}
P.eE.prototype={}
P.f4.prototype={
hS:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b_(a0,a1,b.length)
u=$.mC()
if(typeof a1!=="number")return H.q(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kh(C.a.H(b,n))
j=H.kh(C.a.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.S("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.bG(m)
s=n
continue}}throw H.c(P.U("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.lc(b,p,a1,q,o,f)
else{e=C.c.bd(f-1,4)+1
if(e===1)throw H.c(P.U(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aT(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lc(b,p,a1,q,o,d)
else{e=C.c.bd(d,4)
if(e===1)throw H.c(P.U(c,b,a1))
if(e>1)b=C.a.aT(b,a1,a1,e===2?"==":"=")}return b}}
P.f5.prototype={}
P.fa.prototype={}
P.fg.prototype={}
P.fx.prototype={}
P.fP.prototype={
i:function(a){return this.a}}
P.fO.prototype={
eK:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.S("")
if(r>b)q.a+=C.a.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mN(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.j3.prototype={
ghB:function(){return C.S}}
P.j5.prototype={
c1:function(a){var u,t,s,r=P.b_(0,null,a.length)
if(typeof r!=="number")return r.J()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.k3(t)
if(s.eP(a,0,r)!==r)s.dh(J.mJ(a,r-1),0)
return new Uint8Array(t.subarray(0,H.o8(0,s.b,t.length)))}}
P.k3.prototype={
dh:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eP:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dh(r,C.a.H(a,p)))s=p}else if(r<=2047){q=n.b
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
P.j4.prototype={
c1:function(a){var u,t,s,r,q,p,o,n,m=P.nD(!1,a,0,null)
if(m!=null)return m
u=P.b_(0,null,J.af(a))
t=P.m8(a,0,u)
if(t>0){s=P.ck(a,0,t)
if(t===u)return s
r=new P.S(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.S("")
o=new P.k2(!1,r)
o.c=p
o.hq(a,q,u)
if(o.e>0){H.v(P.U("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bG(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.k2.prototype={
hq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.at(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.ag()
if((r&192)!==128){q=P.U(k+C.c.bb(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.y,q)
if(j<=C.y[q]){q=P.U("Overlong encoding of 0x"+C.c.bb(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.U("Character outside valid Unicode range: 0x"+C.c.bb(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bG(j)
l.c=!1}if(typeof c!=="number")return H.q(c)
q=s<c
for(;q;){p=P.m8(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.ck(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.U("Negative UTF-8 code unit: -0x"+C.c.bb(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.U(k+C.c.bb(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aL.prototype={}
P.ab.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
aS:function(a,b){return C.c.aS(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.c.aO(u,30))&1073741823},
i:function(a){var u=this,t=P.mW(H.nm(u)),s=P.d0(H.nk(u)),r=P.d0(H.ng(u)),q=P.d0(H.nh(u)),p=P.d0(H.nj(u)),o=P.d0(H.nl(u)),n=P.mX(H.ni(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.L.prototype={}
P.b8.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.b8&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aS:function(a,b){return C.c.aS(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fu(),q=this.a
if(q<0)return"-"+new P.b8(0-q).i(0)
u=r.$1(C.c.a9(q,6e7)%60)
t=r.$1(C.c.a9(q,1e6)%60)
s=new P.ft().$1(q%1e6)
return""+C.c.a9(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.ft.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bA.prototype={}
P.dq.prototype={
i:function(a){return"Throw of null."}}
P.al.prototype={
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbG()+o+u
if(!q.a)return t
s=q.gbF()
r=P.kD(q.b)
return t+s+": "+r}}
P.bH.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fR.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t=this.b
if(typeof t!=="number")return t.O()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iX.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iT.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cj.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fd.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kD(u)+"."}}
P.hL.prototype={
i:function(a){return"Out of Memory"},
$ibA:1}
P.dB.prototype={
i:function(a){return"Stack Overflow"},
$ibA:1}
P.fl.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e2.prototype={
i:function(a){return"Exception: "+this.a}}
P.fI.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.H(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.X(f,q)
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
return h+l+j+k+"\n"+C.a.u(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fK.prototype={}
P.u.prototype={}
P.i.prototype={
bx:function(a,b){return new H.cu(this,b,[H.l0(this,"i",0)])},
gl:function(a){var u,t=this.gP(this)
for(u=0;t.t();)++u
return u},
gaI:function(a){var u,t=this.gP(this)
if(!t.t())throw H.c(H.fT())
u=t.gA(t)
if(t.t())throw H.c(H.n0())
return u},
K:function(a,b){var u,t,s
P.lB(b,"index")
for(u=this.gP(this),t=0;u.t();){s=u.gA(u)
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
i:function(a){return P.n_(this,"(",")")}}
P.fU.prototype={}
P.n.prototype={$ip:1,$ii:1}
P.R.prototype={}
P.bj.prototype={
gI:function(a){return P.a2.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
v:function(a,b){return this===b},
gI:function(a){return H.cg(this)},
i:function(a){return"Instance of '"+H.e(H.ch(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.j1.prototype={
$2:function(a,b){var u,t,s,r=J.cJ(b).dQ(b,"=")
if(r===-1){if(b!=="")J.kt(a,P.kX(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.ac(b,r+1)
s=this.a
J.kt(a,P.kX(u,0,u.length,s,!0),P.kX(t,0,t.length,s,!0))}return a}}
P.iZ.prototype={
$2:function(a,b){throw H.c(P.U("Illegal IPv4 address, "+a,this.a,b))}}
P.j_.prototype={
$2:function(a,b){throw H.c(P.U("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.j0.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cL(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.O()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bN.prototype={
ge8:function(){return this.b},
gcf:function(a){var u=this.c
if(u==null)return""
if(C.a.a8(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbr:function(a){var u=this.d
if(u==null)return P.m_(this.a)
return u},
gcs:function(a){var u=this.f
return u==null?"":u},
gdL:function(){var u=this.r
return u==null?"":u},
e1:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a8(u,"/"))u="/"+u
s=P.kV(null,0,0,b)
return new P.bN(q,o,m,n,u,s,r.r)},
gct:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dO(P.lO(t==null?"":t),[u,u])
t=u}return t},
gdM:function(){return this.c!=null},
gdP:function(){return this.f!=null},
gdN:function(){return this.r!=null},
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
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.P(b).$ikQ)if(s.a==b.gby())if(s.c!=null===b.gdM())if(s.b==b.ge8())if(s.gcf(s)==b.gcf(b))if(s.gbr(s)==b.gbr(b))if(s.e===b.ge_(b)){u=s.f
t=u==null
if(!t===b.gdP()){if(t)u=""
if(u===b.gcs(b)){u=s.r
t=u==null
if(!t===b.gdN()){if(t)u=""
u=u===b.gdL()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.i(0)):u},
$ikQ:1,
gby:function(){return this.a},
ge_:function(a){return this.e}}
P.jZ.prototype={
$1:function(a){throw H.c(P.U("Invalid port",this.a,this.b+1))}}
P.k_.prototype={
$1:function(a){return P.eF(C.a1,a,C.e,!1)}}
P.k1.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eF(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eF(C.h,b,C.e,!0))}}}
P.k0.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aO(b),t=this.a;u.t();)t.$2(a,u.gA(u))}}
P.iY.prototype={
ge7:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bn(u,"?",o)
s=u.length
if(t>=0){r=P.cG(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.ju("data",p,p,p,P.cG(u,o,s,C.C,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.k7.prototype={
$1:function(a){return new Uint8Array(96)}}
P.k6.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mK(u,0,96,b)
return u},
$S:18}
P.k8.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.H(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.k9.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.H(b,0),t=C.a.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jL.prototype={
gdM:function(){return this.c>0},
gdO:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.G()
t=this.e
if(typeof t!=="number")return H.q(t)
t=u+1<t
u=t}else u=!1
return u},
gdP:function(){var u=this.f
if(typeof u!=="number")return u.O()
return u<this.r},
gdN:function(){return this.r<this.a.length},
gcZ:function(){return this.b===4&&C.a.a8(this.a,"http")},
gd_:function(){return this.b===5&&C.a.a8(this.a,"https")},
gby:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcZ())q=t.x="http"
else if(t.gd_()){t.x="https"
q="https"}else if(q===4&&C.a.a8(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a8(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
ge8:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gcf:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbr:function(a){var u,t=this
if(t.gdO()){u=t.d
if(typeof u!=="number")return u.G()
return P.cL(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcZ())return 80
if(t.gd_())return 443
return 0},
ge_:function(a){return C.a.q(this.a,this.e,this.f)},
gcs:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.O()
return u<t?C.a.q(this.a,u+1,t):""},
gdL:function(){var u=this.r,t=this.a
return u<t.length?C.a.ac(t,u+1):""},
gct:function(){var u=this,t=u.f
if(typeof t!=="number")return t.O()
if(t>=u.r)return C.a2
t=P.h
return new P.dO(P.lO(u.gcs(u)),[t,t])},
e1:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gby(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdO()?p.gbr(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a8(t,"/"))t="/"+t
r=P.kV(o,0,0,b)
s=p.r
q=s<l.length?C.a.ac(l,s+1):o
return new P.bN(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ikQ&&this.a===b.i(0)},
i:function(a){return this.a},
$ikQ:1}
P.ju.prototype={}
W.o.prototype={}
W.eV.prototype={
gl:function(a){return a.length}}
W.eW.prototype={
i:function(a){return String(a)}}
W.eX.prototype={
i:function(a){return String(a)}}
W.bu.prototype={$ibu:1}
W.bv.prototype={$ibv:1}
W.by.prototype={
cE:function(a,b,c){if(c!=null)return a.getContext(b,P.oK(c))
return a.getContext(b)},
ea:function(a,b){return this.cE(a,b,null)},
$iby:1}
W.b7.prototype={
gl:function(a){return a.length}}
W.fh.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.c0.prototype={
gl:function(a){return a.length}}
W.fi.prototype={}
W.ag.prototype={}
W.aw.prototype={}
W.fj.prototype={
gl:function(a){return a.length}}
W.fk.prototype={
gl:function(a){return a.length}}
W.fn.prototype={
gl:function(a){return a.length}}
W.an.prototype={$ian:1}
W.fq.prototype={
i:function(a){return String(a)}}
W.d2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[[P.a8,P.aa]]},
$iA:1,
$aA:function(){return[[P.a8,P.aa]]},
$ax:function(){return[[P.a8,P.aa]]},
$ii:1,
$ai:function(){return[[P.a8,P.aa]]},
$in:1,
$an:function(){return[[P.a8,P.aa]]}}
W.d3.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gao(a))+" x "+H.e(this.gam(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia8&&a.left===u.gbp(b)&&a.top===u.gbu(b)&&this.gao(a)===u.gao(b)&&this.gam(a)===u.gam(b)},
gI:function(a){return W.lY(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gao(a)),C.d.gI(this.gam(a)))},
gds:function(a){return a.bottom},
gam:function(a){return a.height},
gbp:function(a){return a.left},
gcA:function(a){return a.right},
gbu:function(a){return a.top},
gao:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.aa]}}
W.fr.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[P.h]},
$iA:1,
$aA:function(){return[P.h]},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]}}
W.fs.prototype={
gl:function(a){return a.length}}
W.js.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.ii(this)
return new J.a5(u,u.length)},
$ap:function(){return[W.Q]},
$ax:function(){return[W.Q]},
$ai:function(){return[W.Q]},
$an:function(){return[W.Q]}}
W.Q.prototype={
ghl:function(a){return new W.jv(a)},
gc_:function(a){return new W.js(a,a.children)},
gdv:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.O()
if(s<0)s=-s*0
if(typeof r!=="number")return r.O()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
al:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lk
if(u==null){u=H.b([],[W.aX])
t=new W.dp(u)
u.push(W.lX(null))
u.push(W.lZ())
$.lk=t
d=t}else d=u
u=$.lj
if(u==null){u=new W.eG(d)
$.lj=u
c=u}else{u.a=d
c=u}}if($.aR==null){u=document
t=u.implementation.createHTMLDocument("")
$.aR=t
$.kC=t.createRange()
s=$.aR.createElement("base")
s.href=u.baseURI
$.aR.head.appendChild(s)}u=$.aR
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aR
if(!!this.$ibv)r=u.body
else{r=u.createElement(a.tagName)
$.aR.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.F(C.a_,a.tagName)){$.kC.selectNodeContents(r)
q=$.kC.createContextualFragment(b)}else{r.innerHTML=b
q=$.aR.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aR.body
if(r==null?u!=null:r!==u)J.la(r)
c.cF(q)
document.adoptNode(q)
return q},
hs:function(a,b,c){return this.al(a,b,c,null)},
ec:function(a,b){a.textContent=null
a.appendChild(this.al(a,b,null,null))},
$iQ:1,
ge3:function(a){return a.tagName}}
W.fw.prototype={
$1:function(a){return!!J.P(a).$iQ}}
W.j.prototype={$ij:1}
W.f.prototype={
hg:function(a,b,c,d){if(c!=null)this.eC(a,b,c,!1)},
eC:function(a,b,c,d){return a.addEventListener(b,H.bS(c,1),!1)}}
W.ao.prototype={$iao:1}
W.c2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ao]},
$iA:1,
$aA:function(){return[W.ao]},
$ax:function(){return[W.ao]},
$ii:1,
$ai:function(){return[W.ao]},
$in:1,
$an:function(){return[W.ao]},
$ic2:1}
W.fD.prototype={
gl:function(a){return a.length}}
W.fH.prototype={
gl:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.fN.prototype={
gl:function(a){return a.length}}
W.c4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.C]},
$iA:1,
$aA:function(){return[W.C]},
$ax:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$in:1,
$an:function(){return[W.C]}}
W.aT.prototype={$iaT:1,
gdA:function(a){return a.data}}
W.bC.prototype={$ibC:1}
W.bD.prototype={$ibD:1}
W.h7.prototype={
i:function(a){return String(a)}}
W.ht.prototype={
gl:function(a){return a.length}}
W.cb.prototype={$icb:1}
W.hu.prototype={
h:function(a,b){return P.b3(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga4:function(a){var u=H.b([],[P.h])
this.B(a,new W.hv(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hv.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hw.prototype={
h:function(a,b){return P.b3(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga4:function(a){var u=H.b([],[P.h])
this.B(a,new W.hx(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hx.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aA.prototype={$iaA:1}
W.hy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aA]},
$iA:1,
$aA:function(){return[W.aA]},
$ax:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$in:1,
$an:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.a4.prototype={
gaI:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lF("No elements"))
if(t>1)throw H.c(P.lF("More than one element"))
return u.firstChild},
aa:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gP:function(a){var u=this.a.childNodes
return new W.d7(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ap:function(){return[W.C]},
$ax:function(){return[W.C]},
$ai:function(){return[W.C]},
$an:function(){return[W.C]}}
W.C.prototype={
i7:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ia:function(a,b){var u,t
try{u=a.parentNode
J.mH(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ej(a):u},
fW:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.dn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.C]},
$iA:1,
$aA:function(){return[W.C]},
$ax:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$in:1,
$an:function(){return[W.C]}}
W.aC.prototype={$iaC:1,
gl:function(a){return a.length}}
W.hO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aC]},
$iA:1,
$aA:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$in:1,
$an:function(){return[W.aC]}}
W.hX.prototype={
h:function(a,b){return P.b3(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga4:function(a){var u=H.b([],[P.h])
this.B(a,new W.hY(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.i_.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.ib.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aE]},
$iA:1,
$aA:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$in:1,
$an:function(){return[W.aE]}}
W.aF.prototype={$iaF:1}
W.ic.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aF]},
$iA:1,
$aA:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$in:1,
$an:function(){return[W.aF]}}
W.aG.prototype={$iaG:1,
gl:function(a){return a.length}}
W.ih.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
B:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga4:function(a){var u=H.b([],[P.h])
this.B(a,new W.ii(u))
return u},
gl:function(a){return a.length},
$aa1:function(){return[P.h,P.h]},
$iR:1,
$aR:function(){return[P.h,P.h]}}
W.ii.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aq.prototype={$iaq:1}
W.dE.prototype={
al:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=W.mY("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a4(t).aa(0,new W.a4(u))
return t}}
W.il.prototype={
al:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.F.al(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gaI(u)
s.toString
u=new W.a4(s)
r=u.gaI(u)
t.toString
r.toString
new W.a4(t).aa(0,new W.a4(r))
return t}}
W.im.prototype={
al:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.F.al(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gaI(u)
t.toString
s.toString
new W.a4(t).aa(0,new W.a4(s))
return t}}
W.cl.prototype={$icl:1}
W.aH.prototype={$iaH:1}
W.ar.prototype={$iar:1}
W.iq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ar]},
$iA:1,
$aA:function(){return[W.ar]},
$ax:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$in:1,
$an:function(){return[W.ar]}}
W.ir.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aH]},
$iA:1,
$aA:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$in:1,
$an:function(){return[W.aH]}}
W.iC.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.bI.prototype={$ibI:1}
W.iG.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aI]},
$iA:1,
$aA:function(){return[W.aI]},
$ax:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]}}
W.iH.prototype={
gl:function(a){return a.length}}
W.bl.prototype={}
W.j2.prototype={
i:function(a){return String(a)}}
W.jl.prototype={
gl:function(a){return a.length}}
W.bq.prototype={
ghv:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ghu:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibq:1}
W.cv.prototype={
fX:function(a,b){return a.requestAnimationFrame(H.bS(b,1))},
eO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jt.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.H]},
$iA:1,
$aA:function(){return[W.H]},
$ax:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$in:1,
$an:function(){return[W.H]}}
W.dX.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia8&&a.left===u.gbp(b)&&a.top===u.gbu(b)&&a.width===u.gao(b)&&a.height===u.gam(b)},
gI:function(a){return W.lY(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gam:function(a){return a.height},
gao:function(a){return a.width}}
W.jy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ax]},
$iA:1,
$aA:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]},
$in:1,
$an:function(){return[W.ax]}}
W.ef.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.C]},
$iA:1,
$aA:function(){return[W.C]},
$ax:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$in:1,
$an:function(){return[W.C]}}
W.jM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aG]},
$iA:1,
$aA:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$in:1,
$an:function(){return[W.aG]}}
W.jR.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aq]},
$iA:1,
$aA:function(){return[W.aq]},
$ax:function(){return[W.aq]},
$ii:1,
$ai:function(){return[W.aq]},
$in:1,
$an:function(){return[W.aq]}}
W.jr.prototype={
B:function(a,b){var u,t,s,r,q
for(u=this.ga4(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.r)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga4:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa1:function(){return[P.h,P.h]},
$aR:function(){return[P.h,P.h]}}
W.jv.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga4(this).length}}
W.jw.prototype={}
W.jx.prototype={
$1:function(a){return this.a.$1(a)}}
W.cw.prototype={
es:function(a){var u
if($.cx.ghM($.cx)){for(u=0;u<262;++u)$.cx.m(0,C.Z[u],W.oV())
for(u=0;u<12;++u)$.cx.m(0,C.p[u],W.oW())}},
aP:function(a){return $.mD().F(0,W.c1(a))},
at:function(a,b,c){var u=$.cx.h(0,H.e(W.c1(a))+"::"+b)
if(u==null)u=$.cx.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaX:1}
W.M.prototype={
gP:function(a){return new W.d7(a,this.gl(a))}}
W.dp.prototype={
aP:function(a){return C.b.dl(this.a,new W.hG(a))},
at:function(a,b,c){return C.b.dl(this.a,new W.hF(a,b,c))},
$iaX:1}
W.hG.prototype={
$1:function(a){return a.aP(this.a)}}
W.hF.prototype={
$1:function(a){return a.at(this.a,this.b,this.c)}}
W.en.prototype={
ew:function(a,b,c,d){var u,t,s
this.a.aa(0,c)
u=b.bx(0,new W.jJ())
t=b.bx(0,new W.jK())
this.b.aa(0,u)
s=this.c
s.aa(0,C.z)
s.aa(0,t)},
aP:function(a){return this.a.F(0,W.c1(a))},
at:function(a,b,c){var u=this,t=W.c1(a),s=u.c
if(s.F(0,H.e(t)+"::"+b))return u.d.hj(c)
else if(s.F(0,"*::"+b))return u.d.hj(c)
else{s=u.b
if(s.F(0,H.e(t)+"::"+b))return!0
else if(s.F(0,"*::"+b))return!0
else if(s.F(0,H.e(t)+"::*"))return!0
else if(s.F(0,"*::*"))return!0}return!1},
$iaX:1}
W.jJ.prototype={
$1:function(a){return!C.b.F(C.p,a)}}
W.jK.prototype={
$1:function(a){return C.b.F(C.p,a)}}
W.jU.prototype={
at:function(a,b,c){if(this.em(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.F(0,b)
return!1}}
W.jV.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jS.prototype={
aP:function(a){var u=J.P(a)
if(!!u.$ici)return!1
u=!!u.$ik
if(u&&W.c1(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.a.a8(b,"on"))return!1
return this.aP(a)},
$iaX:1}
W.d7.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bX(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gA:function(a){return this.d}}
W.aX.prototype={}
W.jH.prototype={}
W.eG.prototype={
cF:function(a){new W.k4(this).$2(a,null)},
b2:function(a,b){if(b==null)J.la(a)
else b.removeChild(a)},
h0:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mL(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.ak(a)}catch(r){H.aj(r)}try{s=W.c1(a)
this.h_(a,b,p,t,s,o,n)}catch(r){if(H.aj(r) instanceof P.al)throw r
else{this.b2(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h_:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b2(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aP(a)){p.b2(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.at(a,"is",g)){p.b2(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga4(f)
t=H.b(u.slice(0),[H.aM(u,0)])
for(s=f.ga4(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.at(a,J.mO(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$icl)p.cF(a.content)}}
W.k4.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h0(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b2(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dW.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.cC.prototype={}
W.cD.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.et.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.cE.prototype={}
W.cF.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
P.jN.prototype={
cd:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bw:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.P(a)
if(!!u.$iab)return new Date(a.a)
if(!!u.$inq)throw H.c(P.iU("structured clone of RegExp"))
if(!!u.$iao)return a
if(!!u.$ibu)return a
if(!!u.$ic2)return a
if(!!u.$iaT)return a
if(!!u.$icd||!!u.$ibi||!!u.$icb)return a
if(!!u.$iR){t=p.cd(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.B(a,new P.jP(o,p))
return o.a}if(!!u.$in){t=p.cd(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hr(a,t)}if(!!u.$in3){t=p.cd(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hI(a,new P.jQ(o,p))
return o.b}throw H.c(P.iU("structured clone of other type"))},
hr:function(a,b){var u,t=J.at(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.q(s)
u=0
for(;u<s;++u){q=this.bw(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jP.prototype={
$2:function(a,b){this.a.a[a]=this.b.bw(b)},
$S:3}
P.jQ.prototype={
$2:function(a,b){this.a.b[a]=this.b.bw(b)},
$S:3}
P.eD.prototype={$iaT:1,
gdA:function(a){return this.a}}
P.kd.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jO.prototype={
hI:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fE.prototype={
gb0:function(){var u=this.b,t=H.l0(u,"x",0)
return new H.c8(new H.cu(u,new P.fF(),[t]),new P.fG(),[t,W.Q])},
B:function(a,b){C.b.B(P.h6(this.gb0(),!1,W.Q),b)},
m:function(a,b,c){var u=this.gb0()
J.mM(u.b.$1(J.eT(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.af(this.gb0().a)},
h:function(a,b){var u=this.gb0()
return u.b.$1(J.eT(u.a,b))},
gP:function(a){var u=P.h6(this.gb0(),!1,W.Q)
return new J.a5(u,u.length)},
$ap:function(){return[W.Q]},
$ax:function(){return[W.Q]},
$ai:function(){return[W.Q]},
$an:function(){return[W.Q]}}
P.fF.prototype={
$1:function(a){return!!J.P(a).$iQ}}
P.fG.prototype={
$1:function(a){return H.l(a,"$iQ")}}
P.jD.prototype={
gcA:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.q(t)
return u+t},
gds:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.q(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
v:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.P(b)
if(!!u.$ia8){t=q.a
if(t==u.gbp(b)){s=q.b
if(s==u.gbu(b)){r=q.c
if(typeof t!=="number")return t.G()
if(typeof r!=="number")return H.q(r)
if(t+r===u.gcA(b)){t=q.d
if(typeof s!=="number")return s.G()
if(typeof t!=="number")return H.q(t)
u=s+t===u.gds(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cR(t),r=u.b,q=J.cR(r),p=u.c
if(typeof t!=="number")return t.G()
if(typeof p!=="number")return H.q(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.G()
if(typeof t!=="number")return H.q(t)
t=C.c.gI(r+t)
return P.nR(P.jA(P.jA(P.jA(P.jA(0,s),q),p),t))}}
P.a8.prototype={
gbp:function(a){return this.a},
gbu:function(a){return this.b},
gao:function(a){return this.c},
gam:function(a){return this.d}}
P.aU.prototype={$iaU:1}
P.h_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.aU]},
$ax:function(){return[P.aU]},
$ii:1,
$ai:function(){return[P.aU]},
$in:1,
$an:function(){return[P.aU]}}
P.aY.prototype={$iaY:1}
P.hJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.aY]},
$ax:function(){return[P.aY]},
$ii:1,
$ai:function(){return[P.aY]},
$in:1,
$an:function(){return[P.aY]}}
P.hR.prototype={
gl:function(a){return a.length}}
P.ci.prototype={$ici:1}
P.ik.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.h]},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]}}
P.k.prototype={
gc_:function(a){return new P.fE(a,new W.a4(a))},
al:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aX])
p.push(W.lX(null))
p.push(W.lZ())
p.push(new W.jS())
c=new W.eG(new W.dp(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).hs(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a4(s)
q=p.gaI(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.b0.prototype={$ib0:1}
P.iI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b0]},
$ax:function(){return[P.b0]},
$ii:1,
$ai:function(){return[P.b0]},
$in:1,
$an:function(){return[P.b0]}}
P.e7.prototype={}
P.e8.prototype={}
P.ei.prototype={}
P.ej.prototype={}
P.eu.prototype={}
P.ev.prototype={}
P.eB.prototype={}
P.eC.prototype={}
P.bJ.prototype={$ip:1,
$ap:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]},
$in:1,
$an:function(){return[P.u]}}
P.eZ.prototype={
gl:function(a){return a.length}}
P.f_.prototype={
h:function(a,b){return P.b3(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga4:function(a){var u=H.b([],[P.h])
this.B(a,new P.f0(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
P.f0.prototype={
$2:function(a,b){return this.a.push(a)}}
P.f1.prototype={
gl:function(a){return a.length}}
P.bt.prototype={}
P.hK.prototype={
gl:function(a){return a.length}}
P.dV.prototype={}
P.dw.prototype={
e5:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.P(g)
if(!!u.$iaT&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oL(g))
return}if(!!u.$ibC&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cS("Incorrect number or type of arguments"))},
e4:function(a,b,c,d,e,f,g){return this.e5(a,b,c,d,e,f,g,null,null,null)}}
P.ie.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return P.b3(a.item(b))},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[[P.R,,,]]},
$ax:function(){return[[P.R,,,]]},
$ii:1,
$ai:function(){return[[P.R,,,]]},
$in:1,
$an:function(){return[[P.R,,,]]}}
P.eq.prototype={}
P.er.prototype={}
K.aP.prototype={
aC:function(a,b){return!0},
i:function(a){return"all"}}
K.d8.prototype={
aC:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)if(u[s].aC(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.r)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bg.prototype={}
K.a7.prototype={
aC:function(a,b){return!this.ei(0,b)},
i:function(a){return"!["+this.cI(0)+"]"}}
K.hS.prototype={
aC:function(a,b){if(typeof b!=="number")return H.q(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bG(this.a),t=H.bG(this.b)
return u+".."+t}}
K.i0.prototype={
eq:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.w("May not create a Set with zero characters."))
u=P.u
t=new H.I([u,P.aL])
for(s=new H.bf(a,a.gl(a));s.t();)t.m(0,s.d,!0)
r=P.h6(t.ga4(t),!0,u)
C.b.eg(r)
this.a=r},
aC:function(a,b){return C.b.F(this.a,b)},
i:function(a){return P.ck(this.a,0,null)}}
L.dC.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dL(this.a.k(0,b))
r.a=H.b([],[K.bg])
r.c=!1
this.c.push(r)
return r},
hD:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
if(r.aC(0,a))return r}return},
i:function(a){return this.b},
de:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.F(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga4(n),n=n.gP(n);n.t();){t=n.gA(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.F(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.r)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dI.prototype={
i:function(a){var u=H.l5(this.b,"\n","\\n"),t=H.l5(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dJ.prototype={
aF:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.r)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.iD.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dC(this,b)
u.c=H.b([],[L.dL])
this.a.m(0,b,u)}return u},
R:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dJ(a)
u=P.h
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
cB:function(a){return this.il(a)},
il:function(a){var u=this
return P.od(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cB(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.u]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.cu(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.hD(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.ck(d,0,null)
throw H.c(P.w("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.v(P.y("removeRange"))
P.b_(0,m,d.length)
d.splice(0,m-0)
C.b.aa(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.F(0,p.a)?7:8
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
if(g.d!=null){j=P.ck(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dI(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.F(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nP()
case 1:return P.nQ(q)}}},L.dI)},
i:function(a){var u,t=new P.S(""),s=this.d
if(s!=null)t.a=s.de()+"\n"
for(s=this.a,s=s.gim(s),s=s.gP(s);s.t();){u=s.gA(s)
if(u!=this.d)t.a+=u.de()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dL.prototype={
i:function(a){return this.b.b+": "+this.cI(0)}}
O.aQ.prototype={
bf:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cG:function(a,b,c){this.b=b
this.c=a},
aW:function(a,b){return this.cG(a,null,b)},
d2:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cL:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.a5(u,u.length)},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.l0(s,"aQ",0)]
if(s.d2(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cL(t,H.b([b],r))}},
aa:function(a,b){var u,t
if(this.d2(b)){u=this.a
t=u.length
C.b.aa(u,b)
this.cL(t,b)}},
$ii:1}
O.ca.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.D():u},
aJ:function(){var u=this.b
if(u!=null)u.D(null)},
ga5:function(a){var u=this.a
if(u.length>0)return C.b.gav(u)
else return V.bh()},
bt:function(a){var u=this.a
if(a==null)u.push(V.bh())
else u.push(a)
this.aJ()},
aE:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}}}
E.f6.prototype={}
E.aS.prototype={
sbz:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().T(0,s.gdX())
u=s.c
if(u!=null)u.gp().n(0,s.gdX())
t=new D.z("shape",r,s.c)
t.b=!0
s.bq(t)}},
af:function(a,b){var u
for(u=this.y.a,u=new J.a5(u,u.length);u.t();)u.d.af(0,b)},
ae:function(a){var u,t=this,s=a.dx
s.a.push(s.ga5(s))
s.aJ()
a.cr(t.f)
s=a.dy
u=(s&&C.b).gav(s)
if(u!=null&&t.d!=null)u.cz(a,t)
for(s=t.y.a,s=new J.a5(s,s.length);s.t();)s.d.ae(a)
a.cq()
a.dx.aE()},
bq:function(a){var u=this.z
if(u!=null)u.D(a)},
aj:function(){return this.bq(null)},
dY:function(a){this.e=null
this.bq(a)},
hY:function(){return this.dY(null)},
dW:function(a){this.bq(a)},
hV:function(){return this.dW(null)},
hU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdV(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bB()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.aj()},
hX:function(a,b){var u,t
for(u=b.gP(b),t=this.gdV();u.t();)u.gA(u).gp().T(0,t)
this.aj()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bw.prototype={
i:function(a){return this.b}}
E.bE.prototype={
i:function(a){return this.b}}
E.e1.prototype={}
E.hT.prototype={
ep:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ab(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.ca()
t=[V.aV]
u.a=H.b([],t)
u.gp().n(0,new E.hU(s))
s.cy=u
u=new O.ca()
u.a=H.b([],t)
u.gp().n(0,new E.hV(s))
s.db=u
u=new O.ca()
u.a=H.b([],t)
u.gp().n(0,new E.hW(s))
s.dx=u
u=H.b([],[O.dF])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.dx])},
gi6:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga5(s)
u=t.db
u=t.z=s.u(0,u.ga5(u))
s=u}return s},
ge0:function(){var u,t=this,s=t.ch
if(s==null){s=t.gi6()
u=t.dx
u=t.ch=s.u(0,u.ga5(u))
s=u}return s},
cr:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gav(u):a)},
cq:function(){var u=this.dy
if(u.length>1)u.pop()},
bV:function(a){var u=a.b
if(u.length===0)throw H.c(P.w("May not cache a shader with no name."))
if(this.fr.c0(0,u))throw H.c(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hU.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hV.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hW.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dG.prototype={
cO:function(a){this.e2()},
cN:function(){return this.cO(null)},
ghJ:function(){var u,t=this,s=Date.now(),r=C.c.a9(P.li(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ab(s,!1)
return u/r},
d4:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.q(r)
u=C.d.ce(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.d.ce(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lI(C.n,s.gib())}},
e2:function(){if(!this.cx){this.cx=!0
var u=window
C.H.eO(u)
C.H.fX(u,W.m9(new E.iB(this),P.aa))}},
i9:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.d4()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.li(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aJ()
r=s.db
C.b.sl(r.a,0)
r.aJ()
r=s.dx
C.b.sl(r.a,0)
r.aJ()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.ae(p.e)}s=p.Q
if(s!=null)s.D(null)}catch(q){u=H.aj(q)
t=H.l1(q)
P.l4("Error: "+H.e(u))
P.l4("Stack: "+H.e(t))
throw H.c(u)}}}
E.iB.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i9()}}}
Z.dT.prototype={}
Z.cV.prototype={
a_:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.ct.prototype={}
Z.bx.prototype={
aq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a_:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a_(a)},
ak:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ae:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.ak(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.c5.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ch(this.c))+"'")+"]"}}
Z.b2.prototype={
gcH:function(a){var u=this.a,t=(u&$.ae().a)!==0?3:0
if((u&$.b6().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=3
if((u&$.aN().a)!==0)t+=2
if((u&$.bs().a)!==0)t+=3
if((u&$.cO().a)!==0)t+=3
if((u&$.cP().a)!==0)t+=4
if((u&$.bW().a)!==0)++t
return(u&$.b4().a)!==0?t+4:t},
hk:function(a){var u,t=$.ae(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0)if(u===a)return t
return $.mB()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.ae().a)!==0)u.push("Pos")
if((t&$.b6().a)!==0)u.push("Norm")
if((t&$.b5().a)!==0)u.push("Binm")
if((t&$.aN().a)!==0)u.push("Txt2D")
if((t&$.bs().a)!==0)u.push("TxtCube")
if((t&$.cO().a)!==0)u.push("Clr3")
if((t&$.cP().a)!==0)u.push("Clr4")
if((t&$.bW().a)!==0)u.push("Weight")
if((t&$.b4().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f9.prototype={}
D.bB.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Y]}]):u).push(b)},
T:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.F(s,b)
if(s===!0){s=t.a
u=(s&&C.b).T(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.F(s,b)
if(s===!0){s=t.b
u=(s&&C.b).T(s,b)||u}return u},
D:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Y()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.B(P.h6(u,!0,{func:1,ret:-1,args:[D.Y]}),new D.fA(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Y]}])
C.b.B(u,new D.fB(q))}return!0},
c4:function(){return this.D(null)},
aG:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}}}
D.fA.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fB.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Y.prototype={}
D.ba.prototype={}
D.bb.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cW.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cW))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.dd.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fZ.prototype={
i2:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hZ:function(a){this.c=a.b
this.d.T(0,a.a)
return!1}}
X.dh.prototype={}
X.h8.prototype={
b_:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.a3(o.a+n*m,o.b+u*t)
t=q.a.gaQ()
r=new X.aW(a,V.aZ(),q.x,t,s)
r.b=!0
q.z=new P.ab(p,!1)
q.x=s
return r},
cp:function(a,b){this.r=a.a
return!1},
b9:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eb()
if(typeof u!=="number")return u.ag()
this.r=(u&~t)>>>0
return!1},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.b_(a,b))
return!0},
i3:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaQ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cc(new V.J(s*r,q*p),u,t)
t.b=!0
n.D(t)
return!0},
fn:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dh(c,r.a.gaQ(),b)
s.b=!0
t.D(s)
r.y=new P.ab(u,!1)
r.x=V.aZ()}}
X.ah.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ah))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aW.prototype={}
X.hz.prototype={
bI:function(a,b,c){var u=this,t=new P.ab(Date.now(),!1),s=u.a.gaQ(),r=new X.aW(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cp:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.bI(a,b,!0))
return!0},
b9:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eb()
if(typeof t!=="number")return t.ag()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.bI(a,b,!0))
return!0},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bI(a,b,!1))
return!0},
i4:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaQ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cc(new V.J(t*s,r*q),u,b)
u.b=!0
o.D(u)
return!0},
gdC:function(){var u=this.b
return u==null?this.b=D.D():u},
gcC:function(){var u=this.c
return u==null?this.c=D.D():u},
gdU:function(){var u=this.d
return u==null?this.d=D.D():u}}
X.cc.prototype={}
X.hQ.prototype={}
X.dK.prototype={}
X.iF.prototype={
b_:function(a,b){var u=this,t=new P.ab(Date.now(),!1),s=a.length>0?a[0]:V.aZ(),r=u.a.gaQ(),q=new X.dK(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
i1:function(a){var u=this.b
if(u==null)return!1
u.D(this.b_(a,!0))
return!0},
i_:function(a){var u=this.c
if(u==null)return!1
u.D(this.b_(a,!0))
return!0},
i0:function(a){var u=this.d
if(u==null)return!1
u.D(this.b_(a,!1))
return!0}}
X.dP.prototype={
gaQ:function(){var u=this.a,t=C.i.gdv(u).c
t.toString
u=C.i.gdv(u).d
u.toString
return V.lC(0,0,t,u)},
cU:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.dd(u,new X.ah(t,a.altKey,a.shiftKey))},
aN:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ah(t,a.altKey,a.shiftKey)},
bU:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ah(t,a.altKey,a.shiftKey)},
az:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.J()
u=t.top
if(typeof r!=="number")return r.J()
return new V.a3(s-q,r-u)},
b1:function(a){return new V.J(a.movementX,a.movementY)},
bS:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a3])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
q=C.d.a0(r.pageX)
C.d.a0(r.pageY)
p=o.left
C.d.a0(r.pageX)
n.push(new V.a3(q-p,C.d.a0(r.pageY)-o.top))}return n},
ax:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cW(u,new X.ah(t,a.altKey,a.shiftKey))},
bJ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.J()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.J()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fh:function(a){this.f=!0},
f5:function(a){this.f=!1},
fb:function(a){if(this.f&&this.bJ(a))a.preventDefault()},
fl:function(a){var u
if(!this.f)return
u=this.cU(a)
this.b.i2(u)},
fj:function(a){var u
if(!this.f)return
u=this.cU(a)
this.b.hZ(u)},
fp:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aN(a)
if(r.x){u=r.ax(a)
t=r.b1(a)
if(r.d.cp(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ax(a)
s=r.az(a)
if(r.c.cp(u,s))a.preventDefault()},
fu:function(a){var u,t,s,r=this
r.aN(a)
u=r.ax(a)
if(r.x){t=r.b1(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b9(u,s))a.preventDefault()},
ff:function(a){var u,t,s,r=this
if(!r.bJ(a)){r.aN(a)
u=r.ax(a)
if(r.x){t=r.b1(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b9(u,s))a.preventDefault()}},
fs:function(a){var u,t,s,r=this
r.aN(a)
u=r.ax(a)
if(r.x){t=r.b1(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b8(u,s))a.preventDefault()},
fd:function(a){var u,t,s,r=this
if(!r.bJ(a)){r.aN(a)
u=r.ax(a)
if(r.x){t=r.b1(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b8(u,s))a.preventDefault()}},
fw:function(a){var u,t,s=this
s.aN(a)
u=new V.J((a&&C.G).ghu(a),C.G.ghv(a)).u(0,s.Q)
if(s.x){if(s.d.i3(u))a.preventDefault()
return}if(s.r)return
t=s.az(a)
if(s.c.i4(u,t))a.preventDefault()},
fA:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ax(s.y)
t=s.az(s.y)
s.d.fn(u,t,r)}},
fQ:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bU(a)
u=t.bS(a)
if(t.e.i1(u))a.preventDefault()},
fM:function(a){var u
this.bU(a)
u=this.bS(a)
if(this.e.i_(u))a.preventDefault()},
fO:function(a){var u
this.bU(a)
u=this.bS(a)
if(this.e.i0(u))a.preventDefault()}}
D.f3.prototype={$ia6:1}
D.bz.prototype={
aw:function(a){var u=this.r
if(u!=null)u.D(a)},
ev:function(){return this.aw(null)},
$ia6:1}
D.a6.prototype={}
D.de.prototype={
aw:function(a){var u=this.y
if(u!=null)u.D(a)},
d1:function(a){var u=this.z
if(u!=null)u.D(a)},
fm:function(){return this.d1(null)},
fC:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){s=a[t]
if(s==null||this.eI(s))return!1}return!0},
f_:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd0(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q instanceof D.bz)this.f.push(q)
p=q.r
if(p==null){p=new D.bB()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.ba()
u.b=!0
this.aw(u)},
fG:function(a,b){var u,t,s
for(u=b.gP(b),t=this.gd0();u.t();){s=u.gA(u)
C.b.T(this.e,s)
s.gp().T(0,t)}u=new D.bb()
u.b=!0
this.aw(u)},
eI:function(a){var u=C.b.F(this.f,a)
return u},
$ai:function(){return[D.a6]},
$aaQ:function(){return[D.a6]}}
D.hP.prototype={$ia6:1}
D.id.prototype={$ia6:1}
V.X.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.am.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.fz.prototype={}
V.c9.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.L])
return t},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.c9))return!1
u=b.a
t=$.B().a
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
i:function(a){var u,t,s,r,q=this,p=[P.L],o=V.bU(H.b([q.a,q.d,q.r],p),3,0),n=V.bU(H.b([q.b,q.e,q.x],p),3,0),m=V.bU(H.b([q.c,q.f,q.y],p),3,0)
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
V.aV.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.L])
return t},
cj:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.B().a)return V.bh()
u=1/b1
t=-n
s=-a0
return V.az((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.az(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bv:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.E(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bc:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.V(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aV))return!1
u=b.a
t=$.B().a
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
i:function(a){return this.V()},
L:function(a){var u,t,s,r,q,p=this,o=[P.L],n=V.bU(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bU(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bU(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bU(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
V:function(){return this.L("")}}
V.a3.prototype={
J:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.V.prototype={
G:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.V(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.bk.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bk))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.dv.prototype={
gai:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dv))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.J.prototype={
ck:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.q(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.q(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
if(typeof b!=="number")return H.q(b)
u=this.b
if(typeof u!=="number")return u.u()
return new V.J(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.lP
return u==null?$.lP=new V.J(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.J(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.q(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.E.prototype={
ck:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aB:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.E(u*t-s*r,s*q-p*t,p*r-u*q)},
G:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.E(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.B().a)return V.cs()
return new V.E(this.a/b,this.b/b,this.c/b)},
dT:function(){var u=$.B().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.fc.prototype={
bD:function(a){var u=V.pb(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.D():u},
S:function(a){var u=this.y
if(u!=null)u.D(a)},
scD:function(a,b){},
scm:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.B().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bD(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.S(s)}},
sco:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.B().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bD(u)}s=new D.z("minimumLocation",s,t.c)
s.b=!0
t.S(s)}},
sah:function(a,b){var u,t=this
b=t.bD(b)
u=t.d
if(!(Math.abs(u-b)<$.B().a)){t.d=b
u=new D.z("location",u,b)
u.b=!0
t.S(u)}},
scn:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.B().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.z("maximumVelocity",r,a)
r.b=!0
s.S(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.B().a)){u.f=a
t=new D.z("velocity",t,a)
t.b=!0
u.S(t)}},
sc2:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.B().a)){this.x=a
u=new D.z("dampening",u,a)
u.b=!0
this.S(u)}},
af:function(a,b){var u,t,s,r=this,q=r.f,p=$.B().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sah(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.B().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.cZ.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.D():u},
aV:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cZ))return!1
return J.F(this.a,b.a)},
i:function(a){return"Constant: "+this.a.L("          ")}}
U.c3.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.D():u},
S:function(a){var u=this.e
if(u!=null)u.D(a)},
ad:function(){return this.S(null)},
eY:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaM(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.ba()
u.b=!0
this.S(u)},
fE:function(a,b){var u,t
for(u=b.gP(b),t=this.gaM();u.t();)u.gA(u).gp().T(0,t)
u=new D.bb()
u.b=!0
this.S(u)},
aV:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.O()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a5(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.aV(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bh():u
r=s.e
if(r!=null)r.aG(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c3))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.F(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ac]},
$aaQ:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.dQ.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.D():u},
S:function(a){var u=this.cy
if(u!=null)u.D(a)},
ad:function(){return this.S(null)},
b3:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdC().n(0,u.gbK())
u.a.c.gdU().n(0,u.gbM())
u.a.c.gcC().n(0,u.gbO())
return!0},
bL:function(a){var u=this
if(!J.F(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bN:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaW")
if(!n.y)return
if(n.x){u=a.d.J(0,a.y)
u=new V.J(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.J(0,a.y)
u=new V.J(t.a,t.b).u(0,2).w(0,u.gai())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.q(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=new V.J(s.a,s.b).u(0,2).w(0,u.gai())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.q(p)
o=n.z
if(typeof o!=="number")return H.q(o)
s.sah(0,-q*p+o)
n.b.sW(0)
t=t.J(0,a.z)
n.Q=new V.J(t.a,t.b).u(0,2).w(0,u.gai())}n.ad()},
bP:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.q(s)
u.sW(t*10*s)
r.ad()}},
aV:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.ch=p
u=b.y
r.b.af(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.az(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iac:1}
U.dR.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.D():u},
S:function(a){var u=this.fx
if(u!=null)u.D(a)},
ad:function(){return this.S(null)},
b3:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdC().n(0,s.gbK())
s.a.c.gdU().n(0,s.gbM())
s.a.c.gcC().n(0,s.gbO())
u=s.a.d
t=u.f
u=t==null?u.f=D.D():t
u.n(0,s.geQ())
u=s.a.d
t=u.d
u=t==null?u.d=D.D():t
u.n(0,s.geS())
u=s.a.e
t=u.b
u=t==null?u.b=D.D():t
u.n(0,s.ghd())
u=s.a.e
t=u.d
u=t==null?u.d=D.D():t
u.n(0,s.ghb())
u=s.a.e
t=u.c
u=t==null?u.c=D.D():t
u.n(0,s.gh9())
return!0},
as:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.J(u,t)},
bL:function(a){var u=this
H.l(a,"$iaW")
if(!J.F(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bN:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaW")
if(!n.cx)return
if(n.ch){u=a.d.J(0,a.y)
u=new V.J(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.J(0,a.y)
u=n.as(new V.J(t.a,t.b).u(0,2).w(0,u.gai()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.J(s.a,s.b).u(0,2).w(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sah(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sah(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.J(0,a.z)
n.dx=n.as(new V.J(t.a,t.b).u(0,2).w(0,u.gai()))}n.ad()},
bP:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sW(-t*10*u)
r.ad()}},
eR:function(a){var u=this
if(H.l(a,"$idh").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eT:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaW")
if(!J.F(n.d,a.x.b))return
u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.J(s.a,s.b).u(0,2).w(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sah(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sah(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.J(0,a.z)
n.dx=n.as(new V.J(t.a,t.b).u(0,2).w(0,u.gai()))
n.ad()},
he:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hc:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idK")
if(!n.cx)return
if(n.ch){u=a.d.J(0,a.y)
u=new V.J(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.J(0,a.y)
u=n.as(new V.J(t.a,t.b).u(0,2).w(0,u.gai()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.J(s.a,s.b).u(0,2).w(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sah(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sah(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.J(0,a.z)
n.dx=n.as(new V.J(t.a,t.b).u(0,2).w(0,u.gai()))}n.ad()},
ha:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sW(-t*10*u)
r.ad()}},
aV:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.dy=p
u=b.y
r.c.af(0,u)
r.b.af(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.az(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.az(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iac:1}
U.dS.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.D():u},
S:function(a){var u=this.r
if(u!=null)u.D(a)},
b3:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.D():t
t=r.geV()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.D():s).n(0,t)
return!0},
eW:function(a){var u,t,s,r,q=this
if(!J.F(q.b,q.a.b.c))return
H.l(a,"$icc")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.S(u)}},
aV:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ls(u,u,u)}return t.f},
$iac:1}
M.cY.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.D():u},
Z:function(a){var u=this.r
if(u!=null)u.D(a)},
aZ:function(){return this.Z(null)},
fI:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gY(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.ba()
u.b=!0
this.Z(u)},
fK:function(a,b){var u,t
for(u=b.gP(b),t=this.gY();u.t();)u.gA(u).gp().T(0,t)
u=new D.bb()
u.b=!0
this.Z(u)},
ae:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a5(u,u.length);u.t();){t=u.d
if(t!=null)t.ae(a)}s.f=!1},
$ai:function(){return[M.ap]},
$aaQ:function(){return[M.ap]},
$iap:1}
M.d_.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.D():u},
Z:function(a){var u=this.r
if(u!=null)u.D(a)},
aZ:function(){return this.Z(null)},
sb4:function(a){var u,t,s=this
if(a==null)a=new X.fQ()
u=s.b
if(u!==a){if(u!=null)u.gp().T(0,s.gY())
t=s.b
s.b=a
a.gp().n(0,s.gY())
u=new D.z("camera",t,s.b)
u.b=!0
s.Z(u)}},
sba:function(a,b){var u,t,s=this
if(b==null)b=X.lm(null)
u=s.c
if(u!==b){if(u!=null)u.gp().T(0,s.gY())
t=s.c
s.c=b
b.gp().n(0,s.gY())
u=new D.z("target",t,s.c)
u.b=!0
s.Z(u)}},
saU:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().T(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gY())
s=new D.z("technique",u,t.d)
s.b=!0
t.Z(s)}},
ae:function(a){var u,t=this
a.cr(t.d)
t.c.a_(a)
t.b.a_(a)
u=t.d
if(u!=null)u.af(0,a)
t.e.af(0,a)
t.e.ae(a)
t.b.ak(a)
t.c.ak(a)
a.cq()},
$iap:1}
M.d4.prototype={
Z:function(a){var u=this.y
if(u!=null)u.D(a)},
aZ:function(){return this.Z(null)},
f7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gY(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bB()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.ba()
u.b=!0
this.Z(u)},
f9:function(a,b){var u,t
for(u=b.gP(b),t=this.gY();u.t();)u.gA(u).gp().T(0,t)
u=new D.bb()
u.b=!0
this.Z(u)},
sb4:function(a){var u,t,s=this
if(a==null)a=X.lv(null)
u=s.b
if(u!==a){if(u!=null)u.gp().T(0,s.gY())
t=s.b
s.b=a
a.gp().n(0,s.gY())
u=new D.z("camera",t,s.b)
u.b=!0
s.Z(u)}},
sba:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().T(0,t.gY())
u=t.c
t.c=b
b.gp().n(0,t.gY())
s=new D.z("target",u,t.c)
s.b=!0
t.Z(s)}},
saU:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().T(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gY())
s=new D.z("technique",u,t.d)
s.b=!0
t.Z(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.D():u},
ae:function(a){var u,t=this
a.cr(t.d)
t.c.a_(a)
t.b.a_(a)
u=t.d
if(u!=null)u.af(0,a)
for(u=t.e.a,u=new J.a5(u,u.length);u.t();)u.d.af(0,a)
for(u=t.e.a,u=new J.a5(u,u.length);u.t();)u.d.ae(a)
t.b.toString
a.cy.aE()
a.db.aE()
t.c.ak(a)
a.cq()},
$iap:1}
M.ap.prototype={}
A.cT.prototype={}
A.eY.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hA:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
c3:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a0.prototype={
gar:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
v:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a0))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fp.prototype={
da:function(a,b){if(b!=null&&b.d)a.ed(b)}}
A.he.prototype={
eo:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.S("")
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
A.os(c0,u)
A.ou(c0,u)
A.ot(c0,u)
A.ow(c0,u)
A.ox(c0,u)
A.ov(c0,u)
A.oy(c0,u)
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
b5.ci(0,s.charCodeAt(0)==0?s:s,A.or(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.l(b5.y.N(0,"invViewMat"),"$ia_")
if(t)b5.dy=H.l(b5.y.N(0,"objMat"),"$ia_")
if(r)b5.fr=H.l(b5.y.N(0,"viewObjMat"),"$ia_")
b5.fy=H.l(b5.y.N(0,"projViewObjMat"),"$ia_")
if(c0.go)b5.fx=H.l(b5.y.N(0,"viewMat"),"$ia_")
if(c0.x1)b5.k1=H.l(b5.y.N(0,"txt2DMat"),"$ibn")
if(c0.x2)b5.k2=H.l(b5.y.N(0,"txtCubeMat"),"$ia_")
if(c0.y1)b5.k3=H.l(b5.y.N(0,"colorMat"),"$ia_")
b5.r1=H.b([],[A.a_])
t=c0.bl
if(t>0){b5.k4=b5.y.N(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.v(P.w(b7+q+b8))
s.push(H.l(m,"$ia_"))}}if(c0.a.a)b5.r2=H.l(b5.y.N(0,"emissionClr"),"$iG")
if(c0.b.a)b5.x1=H.l(b5.y.N(0,"ambientClr"),"$iG")
if(c0.c.a)b5.y2=H.l(b5.y.N(0,"diffuseClr"),"$iG")
if(c0.d.a)b5.bm=H.l(b5.y.N(0,"invDiffuseClr"),"$iG")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dF=H.l(b5.y.N(0,"shininess"),"$iT")
if(t)b5.dE=H.l(b5.y.N(0,"specularClr"),"$iG")}if(c0.db){b5.dG=H.l(b5.y.N(0,"envSampler"),"$ibo")
if(c0.r.a)b5.dH=H.l(b5.y.N(0,"reflectClr"),"$iG")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dI=H.l(b5.y.N(0,"refraction"),"$iT")
if(t)b5.dJ=H.l(b5.y.N(0,"refractClr"),"$iG")}}if(c0.y.a)b5.dK=H.l(b5.y.N(0,"alpha"),"$iT")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.u
b5.c5=new H.I([r,A.bm])
b5.c6=new H.I([r,[P.n,A.co]])
for(r=[A.co],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.v(P.w(b7+o+b8))
H.l(m,"$iG")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.v(P.w(b7+o+b8))
H.l(g,"$iG")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.v(P.w(b7+o+b8))
H.l(f,"$iG")
if(typeof j!=="number")return j.ag()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.v(P.w(b7+o+b8))
H.l(e,"$iT")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.v(P.w(b7+o+b8))
H.l(d,"$iT")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.v(P.w(b7+o+b8))
H.l(c,"$iT")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.co(m,g,f,a0,a,b))}b5.c6.m(0,j,h)
q=b5.c5
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.v(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.u
b5.c7=new H.I([r,A.bm])
b5.c8=new H.I([r,[P.n,A.cp]])
for(r=[A.cp],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ag()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.v(P.w(b7+a1+b8))
H.l(m,"$iG")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.v(P.w(b7+a1+b8))
H.l(g,"$iG")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.v(P.w(b7+a1+b8))
H.l(f,"$iG")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.v(P.w(b7+a1+b8))
H.l(m,"$iG")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.v(P.w(b7+a1+b8))
H.l(g,"$iG")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.v(P.w(b7+o+b8))
H.l(f,"$ib1")
a5=f}else a5=b6
h.push(new A.cp(a4,a3,a2,m,g,a5))}b5.c8.m(0,j,h)
q=b5.c7
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.v(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.u
b5.c9=new H.I([r,A.bm])
b5.ca=new H.I([r,[P.n,A.cq]])
for(r=[A.cq],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.v(P.w(b7+o+b8))
H.l(m,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.v(P.w(b7+o+b8))
H.l(g,"$iG")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.v(P.w(b7+o+b8))
H.l(f,"$iG")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.v(P.w(b7+o+b8))
H.l(e,"$ibn")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.v(P.w(b7+o+b8))
H.l(e,"$ibo")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.v(P.w(b7+o+b8))
H.l(e,"$ibo")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.v(P.w(b7+o+b8))
H.l(d,"$icn")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.v(P.w(b7+o+b8))
H.l(e,"$iT")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.v(P.w(b7+o+b8))
H.l(d,"$iT")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.v(P.w(b7+o+b8))
H.l(c,"$iT")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cq(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.ca.m(0,j,h)
q=b5.c9
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.v(P.w(b7+o+b8))
q.m(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.u
b5.cb=new H.I([r,A.bm])
b5.cc=new H.I([r,[P.n,A.cr]])
for(r=[A.cr],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.v(P.w(b7+o+b8))
H.l(m,"$iG")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.v(P.w(b7+o+b8))
H.l(g,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.v(P.w(b7+o+b8))
H.l(f,"$iG")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.v(P.w(b7+o+b8))
H.l(e,"$iG")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.v(P.w(b7+o+b8))
H.l(d,"$iG")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.v(P.w(b7+o+b8))
H.l(c,"$iG")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.v(P.w(b7+o+b8))
H.l(a9,"$iT")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.v(P.w(b7+o+b8))
H.l(b0,"$iT")
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
if(d==null)H.v(P.w(b7+a1+b8))
H.l(d,"$icn")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.v(P.w(b7+a1+b8))
H.l(d,"$iT")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.v(P.w(b7+a1+b8))
H.l(c,"$iT")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.v(P.w(b7+a1+b8))
H.l(d,"$iT")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.v(P.w(b7+a1+b8))
H.l(c,"$iT")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.v(P.w(b7+a1+b8))
H.l(a9,"$iT")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.v(P.w(b7+a1+b8))
H.l(d,"$ib1")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.v(P.w(b7+o+b8))
H.l(d,"$ib1")
a7=d}else a7=b6
h.push(new A.cr(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.cc.m(0,j,h)
q=b5.cb
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.v(P.w(b7+o+b8))
q.m(0,j,m)}}}},
h1:function(a,b){}}
A.cU.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.d1.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dt.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dA.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.hh.prototype={
i:function(a){return this.b6}}
A.co.prototype={}
A.cp.prototype={}
A.cq.prototype={}
A.cr.prototype={}
A.dx.prototype={
bB:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ci:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cV(b,35633)
r.f=r.cV(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.v(P.w("Failed to link shader: "+H.e(s)))}r.h5()
r.h7()},
a_:function(a){a.a.useProgram(this.r)
this.x.hA()},
cV:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
h5:function(){var u,t,s,r=this,q=H.b([],[A.cT]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cT(p,t.name,s))}r.x=new A.eY(q)},
h7:function(){var u,t,s,r=this,q=H.b([],[A.dM]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.ht(t.type,t.size,t.name,s))}r.y=new A.iR(q)},
aK:function(a,b,c){var u=this.a
if(a===1)return new A.bm(u,b,c)
else return A.kP(u,this.r,b,a,c)},
eL:function(a,b,c){var u=this.a
if(a===1)return new A.b1(u,b,c)
else return A.kP(u,this.r,b,a,c)},
eM:function(a,b,c){var u=this.a
if(a===1)return new A.bo(u,b,c)
else return A.kP(u,this.r,b,a,c)},
bi:function(a,b){return new P.e2(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
ht:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aK(b,c,d)
case 5121:return u.aK(b,c,d)
case 5122:return u.aK(b,c,d)
case 5123:return u.aK(b,c,d)
case 5124:return u.aK(b,c,d)
case 5125:return u.aK(b,c,d)
case 5126:return new A.T(u.a,c,d)
case 35664:return new A.iN(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cn(u.a,c,d)
case 35667:return new A.iO(u.a,c,d)
case 35668:return new A.iP(u.a,c,d)
case 35669:return new A.iQ(u.a,c,d)
case 35674:return new A.iS(u.a,c,d)
case 35675:return new A.bn(u.a,c,d)
case 35676:return new A.a_(u.a,c,d)
case 35678:return u.eL(b,c,d)
case 35680:return u.eM(b,c,d)
case 35670:throw H.c(u.bi("BOOL",c))
case 35671:throw H.c(u.bi("BOOL_VEC2",c))
case 35672:throw H.c(u.bi("BOOL_VEC3",c))
case 35673:throw H.c(u.bi("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.ia.prototype={}
A.dM.prototype={}
A.iR.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.V()},
V:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.r)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bm.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iO.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iM.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.T.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iN.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cn.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bn.prototype={
a6:function(a){var u=new Float32Array(H.bP(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a_.prototype={
a6:function(a){var u=new Float32Array(H.bP(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.b1.prototype={
ed:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bo.prototype={
ee:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.kr.prototype={
$1:function(a){return new V.V(Math.cos(a),Math.sin(a),0)}}
F.ke.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.l8(n.$1(o),m)
m=J.l8(n.$1(o+3.141592653589793/p.c),m).J(0,l)
m=new V.E(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.C(m)))
n=$.lR
if(n==null){n=new V.E(1,0,0)
$.lR=n
t=n}else t=n
n=u.aB(!J.F(u,t)?V.lT():t)
s=n.w(0,Math.sqrt(n.C(n)))
n=s.aB(u)
t=n.w(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
m=l.G(0,new V.V(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.F(a.f,m)){a.f=m
n=a.a
if(n!=null)n.aj()}}}
F.b9.prototype={
b5:function(){var u=this
if(!u.gdB()){C.b.T(u.a.a.d.b,u)
u.a.a.aj()}u.fT()
u.fU()
u.fV()},
h2:function(a){this.a=a
a.d.b.push(this)},
h3:function(a){this.b=a
a.d.c.push(this)},
h4:function(a){this.c=a
a.d.d.push(this)},
fT:function(){var u=this.a
if(u!=null){C.b.T(u.d.b,this)
this.a=null}},
fU:function(){var u=this.b
if(u!=null){C.b.T(u.d.c,this)
this.b=null}},
fV:function(){var u=this.c
if(u!=null){C.b.T(u.d.d,this)
this.c=null}},
gdB:function(){return this.a==null||this.b==null||this.c==null},
eE:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cs()
if(q!=null)s=s.G(0,q)
if(u!=null)s=s.G(0,u)
if(t!=null)s=s.G(0,t)
if(s.dT())return
return s.w(0,Math.sqrt(s.C(s)))},
eG:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.J(0,q)
r=new V.E(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.C(r)))
r=t.J(0,q)
r=new V.E(r.a,r.b,r.c)
r=s.aB(r.w(0,Math.sqrt(r.C(r))))
return r.w(0,Math.sqrt(r.C(r)))},
bZ:function(){var u,t=this
if(t.d!=null)return!0
u=t.eE()
if(u==null){u=t.eG()
if(u==null)return!1}t.d=u
t.a.a.aj()
return!0},
eD:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cs()
if(q!=null)s=s.G(0,q)
if(u!=null)s=s.G(0,u)
if(t!=null)s=s.G(0,t)
if(s.dT())return
return s.w(0,Math.sqrt(s.C(s)))},
eF:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.B().a){l=d.J(0,g)
l=new V.E(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.J(0,g).u(0,p).G(0,g).J(0,j)
l=new V.E(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.C(l)))
l=o.aB(q)
l=l.w(0,Math.sqrt(l.C(l))).aB(o)
q=l.w(0,Math.sqrt(l.C(l)))}return q},
bX:function(){var u,t=this
if(t.e!=null)return!0
u=t.eD()
if(u==null){u=t.eF()
if(u==null)return!1}t.e=u
t.a.a.aj()
return!0},
gho:function(a){var u=this
if(J.F(u.a,u.b))return!0
if(J.F(u.b,u.c))return!0
if(J.F(u.c,u.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.V()},
L:function(a){var u,t,s=this
if(s.gdB())return a+"disposed"
u=a+C.a.aD(J.ak(s.a.e),0)+", "+C.a.aD(J.ak(s.b.e),0)+", "+C.a.aD(J.ak(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
V:function(){return this.L("")}}
F.fC.prototype={}
F.i9.prototype={
b7:function(a,b,c){var u,t=b.a
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.df.prototype={}
F.h0.prototype={}
F.iL.prototype={
b7:function(a,b,c){var u,t=b.a
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
return t==u.e}else{t=b.a
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
return t==u.e}else return!1}}}
F.ds.prototype={}
F.i1.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.D():u},
aA:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aA()||!1
if(!t.a.aA())u=!1
s=t.e
if(s!=null)s.aG(0)
return u},
hR:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aM(o,0)])
for(o=[F.bp];u.length!==0;){t=C.b.ghE(u)
C.b.cu(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b7(0,t,q)){s.push(q)
C.b.cu(u,r)}}if(s.length>1)b.hQ(s)}}p.a.E()
p.c.cv()
p.d.cv()
p.b.i8()
p.c.cw(new F.iL())
p.d.cw(new F.i9())
o=p.e
if(o!=null)o.aG(0)},
bW:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ae()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b6().a)!==0)++s
if((t&$.b5().a)!==0)++s
if((t&$.aN().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.cO().a)!==0)++s
if((t&$.cP().a)!==0)++s
if((t&$.bW().a)!==0)++s
if((t&$.b4().a)!==0)++s
r=a4.gcH(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.L])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cV])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hk(m)
k=l.gcH(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cV(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hO(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bP(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bx(new Z.dT(a1,d),o,a4)
c.b=H.b([],[Z.c5])
a0.b.b
if(a0.c.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.E()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.E()
b.push(t.e)}a=Z.lU(u,34963,b)
c.b.push(new Z.c5(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.E()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.E()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.E()
b.push(t.e)}a=Z.lU(u,34963,b)
c.b.push(new Z.c5(4,b.length,a))}return c},
i:function(a){var u=this,t=H.b([],[P.h])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.L("   "))}u.b.b
if(u.c.b.length!==0){t.push("Lines:")
t.push(u.c.L("   "))}if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.L("   "))}return C.b.j(t,"\n")},
aj:function(){var u=this.e
if(u!=null)u.D(null)}}
F.i2.prototype={
hh:function(a){var u,t,s,r,q=H.b([],[F.b9]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.n(0,p)
u.a.n(0,s)
u.a.n(0,r)
q.push(F.d5(p,s,r))}return q},
hi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b9])
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
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.d5(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.d5(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.d5(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.d5(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cw:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b7(0,p,n)){p.b5()
break}}}}},
cv:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gho(s)
if(t)s.b5()}},
aA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.r)(u),++r)if(!u[r].bZ())s=!1
return s},
bY:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.r)(u),++r)if(!u[r].bX())s=!1
return s},
i:function(a){return this.V()},
L:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].L(a))
return C.b.j(r,"\n")},
V:function(){return this.L("")}}
F.i3.prototype={
gl:function(a){return this.b.length},
cw:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b7(0,p,n)){p.b5()
break}}}}},
cv:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.F(s.a,s.b)
if(t)s.b5()}},
i:function(a){return this.V()},
L:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].L(a+(""+u+". ")))}return C.b.j(s,"\n")},
V:function(){return this.L("")}}
F.i4.prototype={
gl:function(a){return 0},
i8:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
t=t[u].giR()
t=t.giO(t)
if(t.gl(t).a3(0,1)){t=this.b
return H.d(t,u)
t[u].b5()}}},
i:function(a){return this.V()},
L:function(a){var u,t,s=H.b([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].L(a))}return C.b.j(s,"\n")},
V:function(){return this.L("")}}
F.bp.prototype={
dz:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.j9(u.cx,r,o,t,s,q,p,a,n)},
hO:function(a){var u,t,s=this
if(a.v(0,$.ae())){u=s.f
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b6())){u=s.r
t=[P.L]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b5())){u=s.x
t=[P.L]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.aN())){u=s.y
t=[P.L]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.v(0,$.bs())){u=s.z
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cO())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cP())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.bW()))return H.b([s.ch],[P.L])
else if(a.v(0,$.b4())){u=s.cx
t=[P.L]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.L])},
bZ:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cs()
t.d.B(0,new F.jk(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.aj()
s=t.a.e
if(s!=null)s.aG(0)}return!0},
bX:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cs()
t.d.B(0,new F.jj(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.aj()
s=t.a.e
if(s!=null)s.aG(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.V()},
L:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.aD(J.ak(s.e),0))
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
q.push(V.K(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.j(q,", ")
return a+"{"+t+"}"},
V:function(){return this.L("")}}
F.jk.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.G(0,t)}}}
F.jj.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.G(0,t)}}}
F.ja.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.aj()
return!0},
bj:function(a,b,c,d,e,f){var u=F.j9(a,null,b,c,null,d,e,f,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
aA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)u[s].bZ()
return!0},
bY:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)u[s].bX()
return!0},
hn:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.F(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.V()},
L:function(a){var u,t,s,r
this.E()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)u.push(t[r].L(a))
return C.b.j(u,"\n")},
V:function(){return this.L("")}}
F.jb.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
B:function(a,b){var u=this
C.b.B(u.b,b)
C.b.B(u.c,new F.jc(u,b))
C.b.B(u.d,new F.jd(u,b))},
i:function(a){return this.V()},
V:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].L(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].L(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].L(""))
return C.b.j(r,"\n")}}
F.jc.prototype={
$1:function(a){if(!J.F(a.a,this.a))this.b.$1(a)}}
F.jd.prototype={
$1:function(a){var u=this.a
if(!J.F(a.a,u)&&!J.F(a.b,u))this.b.$1(a)}}
F.je.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.V()},
V:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].L(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].L(""))
return C.b.j(r,"\n")}}
F.jg.prototype={}
F.jf.prototype={
b7:function(a,b,c){return J.F(b.f,c.f)}}
F.jh.prototype={}
F.hH.prototype={
hQ:function(a){var u,t,s,r,q,p,o,n,m=V.cs()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.E(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.w(0,Math.sqrt(m.C(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.w(0,Math.sqrt(p*p+o*o+n*n))}if(!J.F(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.D(null)}}}return}}
F.ji.prototype={
gl:function(a){return 0},
i:function(a){return this.V()},
V:function(){var u,t,s=H.b([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].L(""))}return C.b.j(s,"\n")}}
O.fo.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.D():u},
ap:function(){var u=this.r
if(u!=null)u.D(null)},
sdw:function(a){if(this.b!=a){this.b=a
this.ap()}},
sdu:function(a){if(this.c!=a){this.c=a
this.ap()}},
sdt:function(a){var u=a==null?V.bh():a
this.f=u
if(!J.F(u,a)){this.f=a
this.ap()}},
af:function(a,b){},
bg:function(a,b){if(b!=null)if(!C.b.F(a,b)){b.a=a.length
a.push(b)}},
cz:function(a,b){var u,t,s,r,q,p,o,n=this,m="Distort"
if(n.a==null){u=a.fr.h(0,m)
if(u==null){t=a.a
u=new A.fp(t,m)
u.bB(t,m)
u.ci(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
u.z=u.x.h(0,"posAttr")
u.Q=u.x.h(0,"txt2DAttr")
u.ch=H.l(u.y.N(0,"projViewObjMat"),"$ia_")
u.cx=H.l(u.y.N(0,"colorTxt2DMat"),"$ibn")
u.cy=H.l(u.y.N(0,"bumpTxt2DMat"),"$ibn")
u.db=H.l(u.y.N(0,"colorTxt"),"$ib1")
u.dx=H.l(u.y.N(0,"bumpTxt"),"$ib1")
u.dy=H.l(u.y.N(0,"bumpMat"),"$ia_")
a.bV(u)}n.a=u}if(b.e==null){t=b.d
s=$.ae()
r=$.aN()
r=t.bW(new Z.ct(a.a),new Z.b2(s.a|r.a))
r.aq($.ae()).e=n.a.z.c
r.aq($.aN()).e=n.a.Q.c
b.e=r}q=H.b([],[T.cm])
n.bg(q,n.b)
n.bg(q,n.c)
for(t=a.a,p=0;p<q.length;++p){s=q[p]
if(!s.c&&s.d){s.c=!0
t.activeTexture(33984+s.a)
t.bindTexture(3553,s.b)}}s=n.a
s.a_(a)
r=n.b
s.da(s.db,r)
r=n.c
s.da(s.dx,r)
r=a.ge0()
o=s.ch
o.toString
o.a6(r.a2(0,!0))
r=n.d
o=s.cx
o.toString
o.a6(r.a2(0,!0))
r=n.e
o=s.cy
o.toString
o.a6(r.a2(0,!0))
r=n.f
s=s.dy
s.toString
s.a6(r.a2(0,!0))
s=b.e
if(s instanceof Z.bx){s.a_(a)
s.ae(a)
s.ak(a)}else b.e=null
s=n.a
s.toString
t.useProgram(null)
s.x.c3()
for(p=0;p<q.length;++p){s=q[p]
if(s.c){s.c=!1
t.activeTexture(33984+s.a)
t.bindTexture(3553,null)}}}}
O.di.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.D():u},
a7:function(a){var u=this.fr
if(u!=null)u.D(a)},
ap:function(){return this.a7(null)},
d3:function(a){this.a=null
this.a7(a)},
fZ:function(){return this.d3(null)},
f1:function(a,b){var u=new D.ba()
u.b=!0
this.a7(u)},
f3:function(a,b){var u=new D.bb()
u.b=!0
this.a7(u)},
cT:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.u
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
p=q.gau()
o=u.h(0,q.gau())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cU])
u.B(0,new O.hl(g,n))
C.b.aY(n,new O.hm())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.d1])
m.B(0,new O.hn(g,l))
C.b.aY(l,new O.ho())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
p=q.gau()
o=k.h(0,q.gau())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dt])
k.B(0,new O.hp(g,j))
C.b.aY(j,new O.hq())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.r)(f),++r){q=f[r]
s=q.gau()
p=i.h(0,q.gau())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dA])
i.B(0,new O.hr(g,h))
C.b.aY(h,new O.hs())
f=C.c.a9(g.e.a.length+3,4)
g.dy.e
return A.nc(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
bg:function(a,b){},
af:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a5(u,u.length);u.t();){t=u.d
t.toString
s=$.j8
if(s==null)s=$.j8=new V.E(0,0,1)
t.a=s
r=$.j7
t.d=r==null?$.j7=new V.E(0,1,0):r
r=$.j6
t.e=r==null?$.j6=new V.E(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bv(s)
r=s.a
p=s.b
o=s.c
t.a=s.w(0,Math.sqrt(r*r+p*p+o*o))
o=q.bv(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.w(0,Math.sqrt(p*p+r*r+s*s))
s=q.bv(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.w(0,Math.sqrt(r*r+p*p+o*o))}}}},
cz:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cT()
u=b2.fr.h(0,b1.b6)
if(u==null){u=A.nb(b1,b2.a)
b2.bV(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bm
b1=b3.e
if(!(b1 instanceof Z.bx))b1=b3.e=null
if(b1==null||!b1.d.v(0,s)){b1=t.k4
if(b1)b3.d.aA()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bY()
q.a.bY()
q=q.e
if(q!=null)q.aG(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.hn()
p=p.e
if(p!=null)p.aG(0)}n=b3.d.bW(new Z.ct(b2.a),s)
n.aq($.ae()).e=b0.a.Q.c
if(b1)n.aq($.b6()).e=b0.a.cx.c
if(r)n.aq($.b5()).e=b0.a.ch.c
if(t.r2)n.aq($.aN()).e=b0.a.cy.c
if(q)n.aq($.bs()).e=b0.a.db.c
if(t.ry)n.aq($.b4()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.cm])
b0.a.a_(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga5(r)
b1=b1.dy
b1.toString
b1.a6(r.a2(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.ga5(r)
q=b2.dx
q=b2.cx=r.u(0,q.ga5(q))
r=q}b1=b1.fr
b1.toString
b1.a6(r.a2(0,!0))}b1=b0.a
r=b2.ge0()
b1=b1.fy
b1.toString
b1.a6(r.a2(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga5(r)
b1=b1.fx
b1.toString
b1.a6(r.a2(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a6(C.j.a2(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a6(C.j.a2(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a6(C.j.a2(r,!0))}if(t.bl>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.d(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.d(b1,k)
b1=b1[k]
j=new Float32Array(H.bP(r.a2(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}if(t.a.a){b1=b0.a
r=b0.f.f
b1=b1.r2
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.k1){if(t.b.a){b1=b0.a
r=b0.r.f
b1=b1.x1
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.c.a){b1=b0.a
r=b0.x.f
b1=b1.y2
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.d.a){b1=b0.a
r=b0.y.f
b1=b1.bm
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.e.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.z.ch
r=r.dF
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.z.f
b1=b1.dE
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.z
if(b1.length>0){r=P.u
i=new H.I([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.r)(r),++h){g=r[h]
f=g.gau()
e=i.h(0,f)
if(e==null)e=0
i.m(0,f,e+1)
d=J.bX(b0.a.c6.h(0,f),e)
p=g.gir()
o=$.aD
p=p.bc(o==null?$.aD=new V.V(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giw()
o=$.aD
p=p.bc(o==null?$.aD=new V.V(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaR(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gdD()){p=g.gdm()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gdn()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gdq()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.r)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.c5.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga5(r)
r=P.u
b=new H.I([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.r)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.m(0,0,e+1)
d=J.bX(b0.a.c8.h(0,0),e)
p=c.bv(g.a)
o=p.a
a=p.b
a0=p.c
a0=p.w(0,Math.sqrt(o*o+a*a+a0*a0))
a=d.e
o=a0.a
p=a0.b
a0=a0.c
a.a.uniform3f(a.d,o,p,a0)
a0=g.c
p=d.f
p.a.uniform3f(p.d,a0.a,a0.b,a0.c)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.r)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.c7.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga5(r)
r=P.u
a1=new H.I([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.r)(r),++h){g=r[h]
f=g.gau()
e=a1.h(0,f)
if(e==null)e=0
a1.m(0,f,e+1)
d=J.bX(b0.a.ca.h(0,f),e)
a2=c.u(0,g.ga5(g))
p=g.ga5(g)
o=$.aD
p=p.bc(o==null?$.aD=new V.V(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aD
p=a2.bc(p==null?$.aD=new V.V(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaR(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaH()
p=a2.cj(0)
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
j=new Float32Array(H.bP(new V.c9(o,a,a0,a3,a4,a5,a6,a7,p).a2(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaH()
p=g.gaH()
if(!C.b.F(m,p)){p.scg(0,m.length)
m.push(p)}p=g.gaH()
o=p.gcl(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaX()
p=g.gef()
o=d.x
o.toString
a=p.ghx(p)
a0=p.ghy(p)
a3=p.ghz()
p=p.ghw()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaX()
if(!C.b.F(m,p)){p.scg(0,m.length)
m.push(p)}p=g.gaX()
o=p.gcl(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gdD()){p=g.gdm()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gdn()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gdq()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.r)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.c9.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga5(r)
r=P.u
a9=new H.I([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.r)(r),++h){g=r[h]
f=g.gau()
e=a9.h(0,f)
if(e==null)e=0
a9.m(0,f,e+1)
d=J.bX(b0.a.cc.h(0,f),e)
p=g.gi5(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giu(g).iN()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.bc(g.gi5(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaR(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaH()
p=g.gcC()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcA(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giP()
o=d.x
o.a.uniform1f(o.d,p)
p=g.giQ()
o=d.y
o.a.uniform1f(o.d,p)
g.gaH()
p=g.gaH()
if(!C.b.F(m,p)){p.scg(0,m.length)
m.push(p)}p=g.gaH()
o=p.gcl(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaX()
p=g.gef()
o=d.z
o.toString
a=p.ghx(p)
a0=p.ghy(p)
a3=p.ghz()
p=p.ghw()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaX()
if(!C.b.F(m,p)){p.scg(0,m.length)
m.push(p)}p=g.gaX()
o=p.gcl(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.giv()){p=g.git()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gis()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gdD()){p=g.gdm()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gdn()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gdq()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.r)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.cb.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga5(r).cj(0)}b1=b1.id
b1.toString
b1.a6(r.a2(0,!0))}if(t.db){b0.bg(m,b0.ch)
b1=b0.a
r=b0.ch
b1.h1(b1.dG,r)
if(t.r.a){b1=b0.a
r=b0.cx.f
b1=b1.dH
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.x.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.cy.ch
r=r.dI
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.cy.f
b1=b1.dJ
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}}b1=t.y.a
r=!b1
if(r)q=!1
else q=!0
if(q){if(b1){b1=b0.a
q=b0.db.f
b1=b1.dK
b1.a.uniform1f(b1.d,q)}b1=b2.a
b1.enable(3042)
b1.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a_(b2)
b1=b3.e
b1.a_(b2)
b1.ae(b2)
b1.ak(b2)
if(r)b1=!1
else b1=!0
if(b1)b2.a.disable(3042)
for(k=0;k<m.length;++k)m[k].ak(b2)
b1=b0.a
b1.toString
b2.a.useProgram(null)
b1.x.c3()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cT().b6}}
O.hl.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.cU(a,C.c.a9(b+3,4)*4))}}
O.hm.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.hn.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.d1(a,C.c.a9(b+3,4)*4))}}
O.ho.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.hp.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.dt(a,C.c.a9(b+3,4)*4))}}
O.hq.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.hr.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.dA(a,C.c.a9(b+3,4)*4))}}
O.hs.prototype={
$2:function(a,b){return J.cQ(a.a,b.a)}}
O.hf.prototype={
ay:function(){var u,t=this
t.cJ()
u=t.f
if(!(Math.abs(u-1)<$.B().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.a7(u)}}}
O.dj.prototype={
ay:function(){},
d8:function(a){var u,t,s=this
if(!s.c.v(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ay()
u=s.a
u.a=null
u.a7(null)}}}
O.hg.prototype={}
O.ay.prototype={
d6:function(a){var u,t,s=this
if(!s.f.v(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.a7(t)}},
ay:function(){this.cJ()
this.d6(new V.X(1,1,1))},
saR:function(a,b){this.d8(new A.a0(!0,!1,!1))
this.d6(b)}}
O.hi.prototype={}
O.hj.prototype={
ay:function(){var u,t=this
t.cK()
u=t.ch
if(!(Math.abs(u-1)<$.B().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.a7(u)}}}
O.hk.prototype={
d9:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.B().a)){u.ch=a
t=new D.z(u.b+".shininess",t,a)
t.b=!0
u.a.a7(t)}},
ay:function(){this.cK()
this.d9(100)}}
O.dy.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.D():u},
a7:function(a){var u=this.e
if(u!=null)u.D(a)},
ap:function(){return this.a7(null)},
af:function(a,b){},
cz:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.ia(t,n)
u.bB(t,n)
u.ci(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.l(u.y.h(0,"fov"),"$iT")
u.ch=H.l(u.y.h(0,"ratio"),"$iT")
u.cx=H.l(u.y.h(0,"boxClr"),"$iG")
u.cy=H.l(u.y.h(0,"boxTxt"),"$ibo")
u.db=H.l(u.y.h(0,"viewMat"),"$ia_")
a.bV(u)}o.a=u}if(b.e==null){t=b.d.bW(new Z.ct(a.a),$.ae())
t.aq($.ae()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a_(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.ee(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga5(s).cj(0)
r=r.db
r.toString
r.a6(s.a2(0,!0))
t=b.e
if(t instanceof Z.bx){t.a_(a)
t.ae(a)
t.ak(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.c3()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.dF.prototype={}
T.cm.prototype={}
T.is.prototype={}
T.iw.prototype={
d7:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.c4()}}}
T.ix.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.D():u}}
T.iy.prototype={
hP:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kE(a)
t=T.kN(q)
W.W(u,"load",new T.iA(this,t,u,!1,q,!1,!1),!1)
return t},
aL:function(a,b,c,d,e,f){var u=W.kE(c);++this.d
W.W(u,"load",new T.iz(this,u,!1,b,!1,d,a),!1)},
d5:function(a,b,c){var u,t,s,r
b=V.cM(b)
u=V.cM(a.width)
t=V.cM(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ky()
s.width=u
s.height=t
r=C.i.ea(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oM(r.getImageData(0,0,s.width,s.height))}}}
T.iA.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.d5(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.q.e4(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.d7();++u.e}}
T.iz.prototype={
$1:function(a){var u=this,t=u.a,s=t.d5(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.q.e4(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.c4()}++t.e}}
X.f2.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.D():u},
a1:function(a){var u=this.fr
if(u!=null)u.D(a)},
sao:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.z("width",u,b)
u.b=!0
t.a1(u)}},
sam:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.z("height",u,b)
u.b=!0
t.a1(u)}},
a_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.u()
h.sao(0,C.c.a0(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.u()
h.sam(0,C.c.a0(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.cM(s)
o=V.cM(r)
q=V.cM(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.q.e5(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kN(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.d7()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.c4()
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
a.c=C.d.a0(s*h.a)
r=t.d
a.d=C.d.a0(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.q(k)
j=C.d.a0(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.q(l)
u.viewport(j,C.d.a0(t*l),C.d.a0(s*k),C.d.a0(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
ak:function(a){a.a.bindFramebuffer(36160,null)}}
X.kx.prototype={}
X.fJ.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.D():u},
a_:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.q(u)
q=C.d.a0(r*u)
r=s.b
if(typeof t!=="number")return H.q(t)
p=C.d.a0(r*t)
r=C.d.a0(s.c*u)
a.c=r
s=C.d.a0(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
ak:function(a){}}
X.fQ.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.D():u},
a_:function(a){var u
a.cy.bt(V.bh())
u=V.bh()
a.db.bt(u)},
ak:function(a){a.cy.aE()
a.db.aE()}}
X.dr.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.D():u},
a1:function(a){var u=this.f
if(u!=null)u.D(a)},
eA:function(){return this.a1(null)},
a_:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.az(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bt(k)
r=$.lw
if(r==null){r=V.ly()
q=V.kS()
p=$.lQ
r=V.lr(r,q,p==null?$.lQ=new V.E(0,0,-1):p)
$.lw=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aV(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bt(u)},
ak:function(a){a.cy.aE()
a.db.aE()}}
X.io.prototype={}
V.cX.prototype={
be:function(a){this.b=new P.fO(C.V)
this.c=null
this.d=H.b([],[[P.n,W.an]])},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.an]))
u=a.split("\n")
for(l=u.length,t=[W.an],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eK(q,0,q.length)
n=o==null?q:o
C.T.ec(p,H.l5(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gav(m.d).push(p)}},
dZ:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.n,W.an]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bk()
for(t.toString,s=new H.m(u),s=new P.bM(t.cB(new H.bf(s,s.gl(s))).a());s.t();)r.bs(s.gA(s))}}
V.kp.prototype={
$1:function(a){var u=C.d.e6(this.a.ghJ(),2)
if(u!=="0.00")P.l4(u+" fps")}}
V.fm.prototype={
bs:function(a){var u=this
switch(a.a){case"Class":u.M(a.b,"#551")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break
case"Type":u.M(a.b,"#B11")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bk:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.iE()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.O("0","9")
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=a1.k(0,r).j(0,p)
t=K.O("0","9")
u.a.push(t)
t=a1.k(0,p).j(0,p)
u=K.O("0","9")
t.a.push(u)
u=a1.k(0,p).j(0,o)
t=K.t(new H.m("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.t(new H.m(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.t(new H.m(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.t(new H.m('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.t(new H.m('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.t(new H.m("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.t(new H.m('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aP())
t=a1.k(0,r).j(0,h)
u=K.t(new H.m("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.t(new H.m("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.t(new H.m("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.t(new H.m("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aP())
t=a1.k(0,r).j(0,e)
u=K.t(new H.m("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.t(new H.m("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.t(new H.m("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.a7()
s=[K.bg]
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.m("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.t(new H.m("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.t(new H.m("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.a7()
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.m("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.t(new H.m("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.t(new H.m(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.t(new H.m(" \n\t"))
u.a.push(t)
t=a1.k(0,p)
t.d=t.a.R("Num")
t=a1.k(0,n)
t.d=t.a.R("Num")
t=a1.k(0,m)
t.d=t.a.R("Symbol")
t=a1.k(0,j)
t.d=t.a.R("String")
t=a1.k(0,g)
t.d=t.a.R("String")
t=a1.k(0,c)
t.d=t.a.R(d)
t=a1.k(0,a0)
t.d=t.a.R(a0)
t=a1.k(0,q)
t=t.d=t.a.R(q)
u=[P.h]
t.aF(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aF(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aF(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fL.prototype={
bs:function(a){var u=this
switch(a.a){case"Builtin":u.M(a.b,"#411")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Preprocess":u.M(a.b,"#737")
break
case"Reserved":u.M(a.b,"#119")
break
case"Symbol":u.M(a.b,"#611")
break
case"Type":u.M(a.b,"#171")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bk:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.iE()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.O("0","9")
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=e.k(0,r).j(0,p)
t=K.O("0","9")
u.a.push(t)
t=e.k(0,p).j(0,p)
u=K.O("0","9")
t.a.push(u)
u=e.k(0,p).j(0,o)
t=K.t(new H.m("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.t(new H.m(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.t(new H.m(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.t(new H.m("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.t(new H.m("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aP())
t=e.k(0,j).j(0,i)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a7()
s=[K.bg]
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.t(new H.m("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a7()
u.a=H.b([],s)
t.a.push(u)
t=K.t(new H.m("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.t(new H.m(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.t(new H.m(" \n\t"))
t.a.push(u)
u=e.k(0,p)
u.d=u.a.R("Num")
u=e.k(0,n)
u.d=u.a.R("Num")
u=e.k(0,m)
u.d=u.a.R("Symbol")
u=e.k(0,i)
u.d=u.a.R(j)
u=e.k(0,g)
u.d=u.a.R(h)
u=e.k(0,f)
u.d=u.a.R(f)
u=e.k(0,q)
u=u.d=u.a.R(q)
t=[P.h]
u.aF(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aF(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aF(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fM.prototype={
bs:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.M(a.b,"#911")
u.M("=",t)
break
case"Id":u.M(a.b,t)
break
case"Other":u.M(a.b,t)
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break}},
bk:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.iE()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.O("0","9")
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.t(new H.m("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.t(new H.m("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.t(new H.m("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.t(new H.m('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.t(new H.m('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.t(new H.m("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.t(new H.m('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aP())
l.k(0,s).j(0,m).a.push(new K.aP())
u=l.k(0,m).j(0,m)
t=new K.a7()
t.a=H.b([],[K.bg])
u.a.push(t)
u=K.t(new H.m('</\\-!>=_"'))
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.R("Symbol")
u=l.k(0,n)
u.d=u.a.R("String")
u=l.k(0,r)
t=u.a.R(r)
u.d=t
t.aF(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.R(q)
t=l.k(0,m)
t.d=t.a.R(m)
return l}}
V.hN.prototype={
dZ:function(a,b){this.d=H.b([],[[P.n,W.an]])
this.M(C.b.j(b,"\n"),"#111")},
bs:function(a){},
bk:function(){return}}
V.i5.prototype={
er:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.W(q,"scroll",new V.i7(o),!1)},
dk:function(a){var u,t,s,r,q,p,o,n
this.h6()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hN(a),s.toString,r=new H.m(r),r=new P.bM(s.cB(new H.bf(r,r.gl(r))).a());r.t();){s=r.gA(r)
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
if(H.mk(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eF(C.A,s,C.e,!1)
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
e9:function(a){var u,t,s,r=new V.fm("dart")
r.be("dart")
u=new V.fL("glsl")
u.be("glsl")
t=new V.fM("html")
t.be("html")
s=C.b.hF(H.b([r,u,t],[V.cX]),new V.i8(a))
if(s!=null)return s
r=new V.hN("plain")
r.be("plain")
return r},
dj:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.u])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cJ(s).a8(s,"+")){b0[t]=C.a.ac(s,1)
a6.push(1)
u=!0}else if(C.a.a8(s,"-")){b0[t]=C.a.ac(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e9(a8)
r.dZ(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eF(C.A,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.lb()
j.href="#"+H.e(n)
j.textContent=a7
k.appendChild(j)
l.appendChild(k)
m.appendChild(l)
o.appendChild(m)
if(u)for(i=a9,h=i,t=0;g=r.d,t<g.length;++t){s=g[t]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className="codeLineNums codeLineLight"
d=q.createElement("td")
d.className=a4
if(t>=a6.length)return H.d(a6,t)
c=a6[t]
if(c===0){++h;++i
e.textContent=""+h
d.textContent=""+i}else if(c>0){f.className="codeTableRow codeLineLightGreen"
e.className="codeLineNums codeLineGreen codeLineCenter"
d.className="codeLineNums codeLineGreen";++i
e.textContent="+"
d.textContent=""+i}else if(c<0){f.className="codeTableRow codeLineLightRed"
e.className="codeLineNums codeLineRed"
d.className="codeLineNums codeLineRed codeLineCenter";++h
e.textContent=""+h
d.textContent="-"}b=q.createElement("td")
b.className=a5
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.r)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.r)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gP(s);a2.t();)d.appendChild(a2.gA(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
hf:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
for(s=0;s<1;++s){r=o.createElement("div")
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
h6:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.iE()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.t(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a7()
r=[K.bg]
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.m("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.t(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.t(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.a7()
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.m("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.t(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.t(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.a7()
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.m("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.t(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.t(new H.m("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.t(new H.m("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.t(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.a7()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.t(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a7()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aP())
s=u.k(0,i).j(0,i)
t=new K.a7()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.R(p)
s=u.k(0,n)
s.d=s.a.R(o)
s=u.k(0,"CodeEnd")
s.d=s.a.R(m)
s=u.k(0,j)
s.d=s.a.R("Link")
s=u.k(0,i)
s.d=s.a.R(i)
this.b=u}}
V.i7.prototype={
$1:function(a){P.lI(C.n,new V.i6(this.a))}}
V.i6.prototype={
$0:function(){var u=C.d.a0(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i8.prototype={
$1:function(a){return a.a===this.a}}
V.it.prototype={
di:function(a,b,c){var u,t,s,r,q=this,p=W.kE(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.eU(q.c)
t=u.gl(u)
W.W(p,"click",new V.iv(q,p,b,t),!1)
J.eU(q.c).n(0,p)
J.eU(q.c).n(0,document.createElement("br"))
s=P.lM().gct().h(0,H.e(q.a))
if(s==null){q.dg(t)
r=c}else r=P.cL(s,null,null)==t
if(r)p.click()},
n:function(a,b){return this.di(a,b,!1)},
dg:function(a){var u,t,s=P.lM(),r=P.h,q=P.n6(s.gct(),r,r)
q.m(0,this.a,H.e(a))
u=s.e1(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jO([],[]).bw(""),"",t)}}
V.iv.prototype={
$1:function(a){var u=this,t=u.a,s=J.eU(t.c)
s.B(s,new V.iu())
s=u.b.style
s.border="solid 2px black"
t.d.$1(u.c)
t.dg(u.d)}}
V.iu.prototype={
$1:function(a){var u
if(!!J.P(a).$ibC){u=a.style
u.border="solid 2px white"}}}
X.km.prototype={
$1:function(a){this.a.sdu(this.b.f.hP(a))}}
X.kn.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.dj("Vertex Shader for distort","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dj("Fragment Shader for distort","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.ej=u.i
u=J.dc.prototype
u.el=u.i
u=P.i.prototype
u.ek=u.bx
u=W.Q.prototype
u.bA=u.al
u=W.en.prototype
u.em=u.at
u=K.d8.prototype
u.ei=u.aC
u.cI=u.i
u=O.dj.prototype
u.cJ=u.ay
u=O.ay.prototype
u.cK=u.ay})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"ob","n2",21)
t(P,"oG","nK",7)
t(P,"oH","nL",7)
t(P,"oI","nM",7)
s(P,"mb","oE",9)
r(W,"oV",4,null,["$4"],["nN"],16,0)
r(W,"oW",4,null,["$4"],["nO"],16,0)
var l
q(l=E.aS.prototype,"gdX",0,0,null,["$1","$0"],["dY","hY"],0,0)
q(l,"gdV",0,0,null,["$1","$0"],["dW","hV"],0,0)
p(l,"ghT","hU",4)
p(l,"ghW","hX",4)
q(l=E.dG.prototype,"gcM",0,0,null,["$1","$0"],["cO","cN"],0,0)
o(l,"gib","e2",9)
n(l=X.dP.prototype,"gfg","fh",5)
n(l,"gf4","f5",5)
n(l,"gfa","fb",2)
n(l,"gfk","fl",10)
n(l,"gfi","fj",10)
n(l,"gfo","fp",2)
n(l,"gft","fu",2)
n(l,"gfe","ff",2)
n(l,"gfq","fs",2)
n(l,"gfc","fd",2)
n(l,"gfv","fw",19)
n(l,"gfz","fA",5)
n(l,"gfP","fQ",6)
n(l,"gfL","fM",6)
n(l,"gfN","fO",6)
q(D.bz.prototype,"geu",0,0,null,["$1","$0"],["aw","ev"],0,0)
q(l=D.de.prototype,"gd0",0,0,null,["$1","$0"],["d1","fm"],0,0)
n(l,"gfB","fC",20)
p(l,"geZ","f_",11)
p(l,"gfF","fG",11)
m(V.J.prototype,"gl","ck",12)
m(V.E.prototype,"gl","ck",12)
q(l=U.c3.prototype,"gaM",0,0,null,["$1","$0"],["S","ad"],0,0)
p(l,"geX","eY",13)
p(l,"gfD","fE",13)
q(l=U.dQ.prototype,"gaM",0,0,null,["$1","$0"],["S","ad"],0,0)
n(l,"gbK","bL",1)
n(l,"gbM","bN",1)
n(l,"gbO","bP",1)
q(l=U.dR.prototype,"gaM",0,0,null,["$1","$0"],["S","ad"],0,0)
n(l,"gbK","bL",1)
n(l,"gbM","bN",1)
n(l,"gbO","bP",1)
n(l,"geQ","eR",1)
n(l,"geS","eT",1)
n(l,"ghd","he",1)
n(l,"ghb","hc",1)
n(l,"gh9","ha",1)
n(U.dS.prototype,"geV","eW",1)
q(l=M.cY.prototype,"gY",0,0,null,["$1","$0"],["Z","aZ"],0,0)
p(l,"gfH","fI",14)
p(l,"gfJ","fK",14)
q(M.d_.prototype,"gY",0,0,null,["$1","$0"],["Z","aZ"],0,0)
q(l=M.d4.prototype,"gY",0,0,null,["$1","$0"],["Z","aZ"],0,0)
p(l,"gf6","f7",4)
p(l,"gf8","f9",4)
q(l=O.di.prototype,"gbC",0,0,null,["$1","$0"],["a7","ap"],0,0)
q(l,"gfY",0,0,null,["$1","$0"],["d3","fZ"],0,0)
p(l,"gf0","f1",15)
p(l,"gf2","f3",15)
q(O.dy.prototype,"gbC",0,0,null,["$1","$0"],["a7","ap"],0,0)
q(X.dr.prototype,"gez",0,0,null,["$1","$0"],["a1","eA"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.kI,J.a,J.a5,P.ea,P.i,H.bf,P.fU,H.d6,H.iW,H.fe,H.iJ,P.bA,H.c_,H.es,P.a1,H.h1,H.h3,H.fW,P.ey,P.bL,P.bM,P.dU,P.dD,P.ij,P.dH,P.k5,P.jI,P.jC,P.e9,P.x,P.jY,P.hb,P.fa,P.fP,P.k3,P.k2,P.aL,P.ab,P.aa,P.b8,P.hL,P.dB,P.e2,P.fI,P.fK,P.n,P.R,P.bj,P.h,P.S,P.bN,P.iY,P.jL,W.fi,W.cw,W.M,W.dp,W.en,W.jS,W.d7,W.aX,W.jH,W.eG,P.jN,P.eD,P.jD,P.bJ,K.aP,K.d8,K.bg,K.hS,K.i0,L.dC,L.dI,L.dJ,L.iD,O.aQ,O.ca,E.f6,E.aS,E.bw,E.bE,E.e1,E.hT,E.dG,Z.dT,Z.ct,Z.bx,Z.c5,Z.b2,D.f9,D.bB,D.Y,X.cW,X.dd,X.fZ,X.h8,X.ah,X.hz,X.iF,X.dP,D.f3,D.bz,D.a6,D.hP,D.id,V.X,V.am,V.fz,V.c9,V.aV,V.a3,V.V,V.bk,V.dv,V.J,V.E,U.dQ,U.dR,U.dS,M.d_,M.d4,M.ap,A.cT,A.eY,A.a0,A.cU,A.d1,A.dt,A.dA,A.hh,A.co,A.cp,A.cq,A.cr,A.dM,A.iR,F.b9,F.fC,F.df,F.h0,F.ds,F.i1,F.i2,F.i3,F.i4,F.bp,F.ja,F.jb,F.je,F.jg,F.jh,F.ji,O.dF,O.dj,O.hi,T.iy,X.io,X.kx,X.fQ,X.dr,V.cX,V.i5,V.it])
s(J.a,[J.fV,J.db,J.dc,J.bc,J.c6,J.bd,H.cd,H.bi,W.f,W.eV,W.bu,W.aw,W.H,W.dW,W.ag,W.fn,W.fq,W.dY,W.d3,W.e_,W.fs,W.j,W.e3,W.ax,W.fN,W.e5,W.aT,W.h7,W.ht,W.eb,W.ec,W.aA,W.ed,W.eg,W.aC,W.ek,W.em,W.aF,W.eo,W.aG,W.et,W.aq,W.ew,W.iC,W.aI,W.ez,W.iH,W.j2,W.eH,W.eJ,W.eL,W.eN,W.eP,P.aU,P.e7,P.aY,P.ei,P.hR,P.eu,P.b0,P.eB,P.eZ,P.dV,P.dw,P.eq])
s(J.dc,[J.hM,J.bK,J.be])
t(J.kH,J.bc)
s(J.c6,[J.da,J.d9])
t(P.h5,P.ea)
s(P.h5,[H.dN,W.js,W.a4,P.fE])
t(H.m,H.dN)
s(P.i,[H.p,H.c8,H.cu,P.fS])
s(H.p,[H.dg,H.h2])
t(H.fv,H.c8)
s(P.fU,[H.hc,H.jm])
t(H.hd,H.dg)
t(H.ff,H.fe)
s(P.bA,[H.hI,H.fY,H.iV,H.f8,H.hZ,P.dq,P.al,P.iX,P.iT,P.cj,P.fd,P.fl])
s(H.c_,[H.ks,H.ip,H.fX,H.ki,H.kj,H.kk,P.jo,P.jn,P.jp,P.jq,P.jX,P.jW,P.kc,P.jF,P.jG,P.h4,P.ha,P.ft,P.fu,P.j1,P.iZ,P.j_,P.j0,P.jZ,P.k_,P.k1,P.k0,P.k7,P.k6,P.k8,P.k9,W.fw,W.hv,W.hx,W.hY,W.ii,W.jx,W.hG,W.hF,W.jJ,W.jK,W.jV,W.k4,P.jP,P.jQ,P.kd,P.fF,P.fG,P.f0,E.hU,E.hV,E.hW,E.iB,D.fA,D.fB,F.kr,F.ke,F.jk,F.jj,F.jc,F.jd,O.hl,O.hm,O.hn,O.ho,O.hp,O.hq,O.hr,O.hs,T.iA,T.iz,V.kp,V.i7,V.i6,V.i8,V.iv,V.iu,X.km,X.kn])
s(H.ip,[H.ig,H.bY])
t(P.h9,P.a1)
s(P.h9,[H.I,W.jr])
t(H.dk,H.bi)
s(H.dk,[H.cy,H.cA])
t(H.cz,H.cy)
t(H.ce,H.cz)
t(H.cB,H.cA)
t(H.dl,H.cB)
s(H.dl,[H.hA,H.hB,H.hC,H.hD,H.hE,H.dm,H.cf])
t(P.jT,P.fS)
t(P.jE,P.k5)
t(P.jB,P.jI)
t(P.eE,P.hb)
t(P.dO,P.eE)
s(P.fa,[P.f4,P.fx])
t(P.fg,P.ij)
s(P.fg,[P.f5,P.fO,P.j5,P.j4])
t(P.j3,P.fx)
s(P.aa,[P.L,P.u])
s(P.al,[P.bH,P.fR])
t(P.ju,P.bN)
s(W.f,[W.C,W.fD,W.cb,W.aE,W.cC,W.aH,W.ar,W.cE,W.jl,W.cv,P.f1,P.bt])
s(W.C,[W.Q,W.b7])
s(W.Q,[W.o,P.k])
s(W.o,[W.eW,W.eX,W.bv,W.by,W.an,W.fH,W.bC,W.i_,W.dE,W.il,W.im,W.cl])
t(W.fh,W.aw)
t(W.c0,W.dW)
s(W.ag,[W.fj,W.fk])
t(W.dZ,W.dY)
t(W.d2,W.dZ)
t(W.e0,W.e_)
t(W.fr,W.e0)
t(W.ao,W.bu)
t(W.e4,W.e3)
t(W.c2,W.e4)
t(W.e6,W.e5)
t(W.c4,W.e6)
t(W.bl,W.j)
s(W.bl,[W.bD,W.aB,W.bI])
t(W.hu,W.eb)
t(W.hw,W.ec)
t(W.ee,W.ed)
t(W.hy,W.ee)
t(W.eh,W.eg)
t(W.dn,W.eh)
t(W.el,W.ek)
t(W.hO,W.el)
t(W.hX,W.em)
t(W.cD,W.cC)
t(W.ib,W.cD)
t(W.ep,W.eo)
t(W.ic,W.ep)
t(W.ih,W.et)
t(W.ex,W.ew)
t(W.iq,W.ex)
t(W.cF,W.cE)
t(W.ir,W.cF)
t(W.eA,W.ez)
t(W.iG,W.eA)
t(W.bq,W.aB)
t(W.eI,W.eH)
t(W.jt,W.eI)
t(W.dX,W.d3)
t(W.eK,W.eJ)
t(W.jy,W.eK)
t(W.eM,W.eL)
t(W.ef,W.eM)
t(W.eO,W.eN)
t(W.jM,W.eO)
t(W.eQ,W.eP)
t(W.jR,W.eQ)
t(W.jv,W.jr)
t(W.jw,P.dD)
t(W.jU,W.en)
t(P.jO,P.jN)
t(P.a8,P.jD)
t(P.e8,P.e7)
t(P.h_,P.e8)
t(P.ej,P.ei)
t(P.hJ,P.ej)
t(P.ci,P.k)
t(P.ev,P.eu)
t(P.ik,P.ev)
t(P.eC,P.eB)
t(P.iI,P.eC)
t(P.f_,P.dV)
t(P.hK,P.bt)
t(P.er,P.eq)
t(P.ie,P.er)
s(K.d8,[K.a7,L.dL])
s(E.f6,[Z.cV,A.dx,T.cm])
s(D.Y,[D.ba,D.bb,D.z,X.hQ])
s(X.hQ,[X.dh,X.aW,X.cc,X.dK])
s(O.aQ,[D.de,U.c3,M.cY])
s(D.f9,[U.fc,U.ac])
t(U.cZ,U.ac)
s(A.dx,[A.fp,A.he,A.ia])
s(A.dM,[A.bm,A.iO,A.iP,A.iQ,A.iM,A.T,A.iN,A.G,A.cn,A.iS,A.bn,A.a_,A.b1,A.bo])
t(F.i9,F.fC)
t(F.iL,F.h0)
t(F.jf,F.jg)
t(F.hH,F.jh)
s(O.dF,[O.fo,O.di,O.dy])
s(O.dj,[O.hf,O.hg,O.ay])
s(O.ay,[O.hj,O.hk])
s(T.cm,[T.is,T.ix])
t(T.iw,T.is)
s(X.io,[X.f2,X.fJ])
s(V.cX,[V.fm,V.fL,V.fM,V.hN])
u(H.dN,H.iW)
u(H.cy,P.x)
u(H.cz,H.d6)
u(H.cA,P.x)
u(H.cB,H.d6)
u(P.ea,P.x)
u(P.eE,P.jY)
u(W.dW,W.fi)
u(W.dY,P.x)
u(W.dZ,W.M)
u(W.e_,P.x)
u(W.e0,W.M)
u(W.e3,P.x)
u(W.e4,W.M)
u(W.e5,P.x)
u(W.e6,W.M)
u(W.eb,P.a1)
u(W.ec,P.a1)
u(W.ed,P.x)
u(W.ee,W.M)
u(W.eg,P.x)
u(W.eh,W.M)
u(W.ek,P.x)
u(W.el,W.M)
u(W.em,P.a1)
u(W.cC,P.x)
u(W.cD,W.M)
u(W.eo,P.x)
u(W.ep,W.M)
u(W.et,P.a1)
u(W.ew,P.x)
u(W.ex,W.M)
u(W.cE,P.x)
u(W.cF,W.M)
u(W.ez,P.x)
u(W.eA,W.M)
u(W.eH,P.x)
u(W.eI,W.M)
u(W.eJ,P.x)
u(W.eK,W.M)
u(W.eL,P.x)
u(W.eM,W.M)
u(W.eN,P.x)
u(W.eO,W.M)
u(W.eP,P.x)
u(W.eQ,W.M)
u(P.e7,P.x)
u(P.e8,W.M)
u(P.ei,P.x)
u(P.ej,W.M)
u(P.eu,P.x)
u(P.ev,W.M)
u(P.eB,P.x)
u(P.eC,W.M)
u(P.dV,P.a1)
u(P.eq,P.x)
u(P.er,W.M)})()
var v={mangledGlobalNames:{u:"int",L:"double",aa:"num",h:"String",aL:"bool",bj:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Y]},{func:1,ret:-1,args:[D.Y]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:P.bj,args:[,,]},{func:1,ret:-1,args:[P.u,[P.i,E.aS]]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.bI]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bD]},{func:1,ret:-1,args:[P.u,[P.i,D.a6]]},{func:1,ret:P.L},{func:1,ret:-1,args:[P.u,[P.i,U.ac]]},{func:1,ret:-1,args:[P.u,[P.i,M.ap]]},{func:1,ret:-1,args:[P.u,[P.i,V.aV]]},{func:1,ret:P.aL,args:[W.Q,P.h,P.h,W.cw]},{func:1,ret:P.bj,args:[,]},{func:1,ret:P.bJ,args:[,,]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:P.aL,args:[[P.i,D.a6]]},{func:1,ret:P.u,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bv.prototype
C.i=W.by.prototype
C.T=W.an.prototype
C.W=J.a.prototype
C.b=J.bc.prototype
C.X=J.d9.prototype
C.c=J.da.prototype
C.j=J.db.prototype
C.d=J.c6.prototype
C.a=J.bd.prototype
C.Y=J.be.prototype
C.E=J.hM.prototype
C.q=P.dw.prototype
C.F=W.dE.prototype
C.r=J.bK.prototype
C.G=W.bq.prototype
C.H=W.cv.prototype
C.I=new E.bw("Browser.chrome")
C.u=new E.bw("Browser.firefox")
C.v=new E.bw("Browser.edge")
C.J=new E.bw("Browser.other")
C.a7=new P.f5()
C.K=new P.f4()
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=function() {
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
C.Q=function(getTagFallback) {
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
C.M=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.N=function(hooks) {
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
C.P=function(hooks) {
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
C.O=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.R=new P.hL()
C.e=new P.j3()
C.S=new P.j5()
C.f=new P.jE()
C.n=new P.b8(0)
C.U=new P.b8(5e6)
C.V=new P.fP("element",!1,!1,!1)
C.y=H.b(u([127,2047,65535,1114111]),[P.u])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.u])
C.Z=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.u])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.u])
C.a_=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.z=H.b(u([]),[P.h])
C.a0=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.u])
C.A=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.u])
C.B=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.u])
C.a1=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.u])
C.C=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.u])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a2=new H.ff(0,{},C.z,[P.h,P.h])
C.a3=new E.bE("OperatingSystem.windows")
C.D=new E.bE("OperatingSystem.mac")
C.a4=new E.bE("OperatingSystem.linux")
C.a5=new E.bE("OperatingSystem.other")
C.a6=new P.bL(null,2)})();(function staticFields(){$.au=0
$.bZ=null
$.ld=null
$.me=null
$.ma=null
$.mi=null
$.kf=null
$.kl=null
$.l2=null
$.bQ=null
$.cH=null
$.cI=null
$.kY=!1
$.as=C.f
$.a9=[]
$.aR=null
$.kC=null
$.lk=null
$.lj=null
$.cx=P.kK(P.h,P.fK)
$.fy=null
$.lp=null
$.lt=null
$.lx=null
$.aD=null
$.lD=null
$.lP=null
$.lS=null
$.lR=null
$.j6=null
$.j7=null
$.j8=null
$.lQ=null
$.lw=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pe","mn",function(){return H.md("_$dart_dartClosure")})
u($,"pf","l6",function(){return H.md("_$dart_js")})
u($,"pg","mo",function(){return H.aJ(H.iK({
toString:function(){return"$receiver$"}}))})
u($,"ph","mp",function(){return H.aJ(H.iK({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pi","mq",function(){return H.aJ(H.iK(null))})
u($,"pj","mr",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pm","mu",function(){return H.aJ(H.iK(void 0))})
u($,"pn","mv",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pl","mt",function(){return H.aJ(H.lK(null))})
u($,"pk","ms",function(){return H.aJ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pp","mx",function(){return H.aJ(H.lK(void 0))})
u($,"po","mw",function(){return H.aJ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pD","l7",function(){return P.nJ()})
u($,"pq","my",function(){return P.nF()})
u($,"pE","mC",function(){return H.nd(H.bP(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.u])))})
u($,"pH","mE",function(){return P.nr("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pI","mF",function(){return P.o9()})
u($,"pF","mD",function(){return P.lo(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"px","mB",function(){return Z.ai(0)})
u($,"pr","mz",function(){return Z.ai(511)})
u($,"pz","ae",function(){return Z.ai(1)})
u($,"py","b6",function(){return Z.ai(2)})
u($,"pt","b5",function(){return Z.ai(4)})
u($,"pA","aN",function(){return Z.ai(8)})
u($,"pB","bs",function(){return Z.ai(16)})
u($,"pu","cO",function(){return Z.ai(32)})
u($,"pv","cP",function(){return Z.ai(64)})
u($,"pw","mA",function(){return Z.ai(96)})
u($,"pC","bW",function(){return Z.ai(128)})
u($,"ps","b4",function(){return Z.ai(256)})
u($,"pd","mm",function(){return new V.fz(1e-9)})
u($,"pc","B",function(){return $.mm()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cd,DataView:H.bi,ArrayBufferView:H.bi,Float32Array:H.ce,Float64Array:H.ce,Int16Array:H.hA,Int32Array:H.hB,Int8Array:H.hC,Uint16Array:H.hD,Uint32Array:H.hE,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.cf,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.eV,HTMLAnchorElement:W.eW,HTMLAreaElement:W.eX,Blob:W.bu,HTMLBodyElement:W.bv,HTMLCanvasElement:W.by,CDATASection:W.b7,CharacterData:W.b7,Comment:W.b7,ProcessingInstruction:W.b7,Text:W.b7,CSSPerspective:W.fh,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.c0,MSStyleCSSProperties:W.c0,CSS2Properties:W.c0,CSSImageValue:W.ag,CSSKeywordValue:W.ag,CSSNumericValue:W.ag,CSSPositionValue:W.ag,CSSResourceValue:W.ag,CSSUnitValue:W.ag,CSSURLImageValue:W.ag,CSSStyleValue:W.ag,CSSMatrixComponent:W.aw,CSSRotation:W.aw,CSSScale:W.aw,CSSSkew:W.aw,CSSTranslation:W.aw,CSSTransformComponent:W.aw,CSSTransformValue:W.fj,CSSUnparsedValue:W.fk,DataTransferItemList:W.fn,HTMLDivElement:W.an,DOMException:W.fq,ClientRectList:W.d2,DOMRectList:W.d2,DOMRectReadOnly:W.d3,DOMStringList:W.fr,DOMTokenList:W.fs,Element:W.Q,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ao,FileList:W.c2,FileWriter:W.fD,HTMLFormElement:W.fH,Gamepad:W.ax,History:W.fN,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,ImageData:W.aT,HTMLImageElement:W.bC,KeyboardEvent:W.bD,Location:W.h7,MediaList:W.ht,MessagePort:W.cb,MIDIInputMap:W.hu,MIDIOutputMap:W.hw,MimeType:W.aA,MimeTypeArray:W.hy,PointerEvent:W.aB,MouseEvent:W.aB,DragEvent:W.aB,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.dn,RadioNodeList:W.dn,Plugin:W.aC,PluginArray:W.hO,RTCStatsReport:W.hX,HTMLSelectElement:W.i_,SourceBuffer:W.aE,SourceBufferList:W.ib,SpeechGrammar:W.aF,SpeechGrammarList:W.ic,SpeechRecognitionResult:W.aG,Storage:W.ih,CSSStyleSheet:W.aq,StyleSheet:W.aq,HTMLTableElement:W.dE,HTMLTableRowElement:W.il,HTMLTableSectionElement:W.im,HTMLTemplateElement:W.cl,TextTrack:W.aH,TextTrackCue:W.ar,VTTCue:W.ar,TextTrackCueList:W.iq,TextTrackList:W.ir,TimeRanges:W.iC,Touch:W.aI,TouchEvent:W.bI,TouchList:W.iG,TrackDefaultList:W.iH,CompositionEvent:W.bl,FocusEvent:W.bl,TextEvent:W.bl,UIEvent:W.bl,URL:W.j2,VideoTrackList:W.jl,WheelEvent:W.bq,Window:W.cv,DOMWindow:W.cv,CSSRuleList:W.jt,ClientRect:W.dX,DOMRect:W.dX,GamepadList:W.jy,NamedNodeMap:W.ef,MozNamedAttrMap:W.ef,SpeechRecognitionResultList:W.jM,StyleSheetList:W.jR,SVGLength:P.aU,SVGLengthList:P.h_,SVGNumber:P.aY,SVGNumberList:P.hJ,SVGPointList:P.hR,SVGScriptElement:P.ci,SVGStringList:P.ik,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.b0,SVGTransformList:P.iI,AudioBuffer:P.eZ,AudioParamMap:P.f_,AudioTrackList:P.f1,AudioContext:P.bt,webkitAudioContext:P.bt,BaseAudioContext:P.bt,OfflineAudioContext:P.hK,WebGL2RenderingContext:P.dw,SQLResultSetRowList:P.ie})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
W.cC.$nativeSuperclassTag="EventTarget"
W.cD.$nativeSuperclassTag="EventTarget"
W.cE.$nativeSuperclassTag="EventTarget"
W.cF.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.mg,[])
else X.mg([])})})()
//# sourceMappingURL=test.dart.js.map
