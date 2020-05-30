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
a[c]=function(){a[c]=function(){H.p9(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kX(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kE:function kE(){},
k4:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
na:function(a,b,c,d){if(!!J.P(a).$ir)return new H.fn(a,b,[c,d])
return new H.c4(a,b,[c,d])},
fJ:function(){return new P.ch("No element")},
n_:function(){return new P.ch("Too many elements")},
ny:function(a,b){var u=J.ah(a)
if(typeof u!=="number")return u.K()
H.ds(a,0,u-1,b)},
ds:function(a,b,c,d){if(c-b<=32)H.nx(a,b,c,d)
else H.nw(a,b,c,d)},
nx:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bl(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a1()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nw:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a3(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a3(a4+a5,2),f=g-j,e=g+j,d=J.bl(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.E(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.R()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a1()
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
if(typeof l!=="number")return l.R()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a1()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a1()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.R()
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
H.ds(a3,a4,t-2,a6)
H.ds(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.E(a6.$2(d.h(a3,t),b),0);)++t
for(;J.E(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.R()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.ds(a3,t,s,a6)}else H.ds(a3,t,s,a6)},
n:function n(a){this.a=a},
r:function r(){},
da:function da(){},
ba:function ba(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
fn:function fn(a,b,c){this.a=a
this.b=b
this.$ti=c},
h1:function h1(a,b){this.a=null
this.b=a
this.c=b},
h2:function h2(a,b,c){this.a=a
this.b=b
this.$ti=c},
cs:function cs(a,b,c){this.a=a
this.b=b
this.$ti=c},
j3:function j3(a,b){this.a=a
this.b=b},
d1:function d1(){},
iG:function iG(){},
dH:function dH(){},
mS:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cK:function(a){var u,t=H.pa(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oU:function(a){return v.types[a]},
mb:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iC},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a4(a)
if(typeof u!=="string")throw H.c(H.ab(a))
return u},
ce:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
no:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.Z(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.F(s,q)|32)>t)return}return parseInt(a,b)},
cf:function(a){return H.nf(a)+H.lZ(H.cJ(a),0,null)},
nf:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibE){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cK(t.length>1&&C.a.F(t,0)===36?C.a.a6(t,1):t)},
ng:function(){if(!!self.location)return self.location.href
return},
lu:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
np:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ab(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ab(s))}return H.lu(r)},
lv:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ab(s))
if(s<0)throw H.c(H.ab(s))
if(s>65535)return H.np(a)}return H.lu(a)},
nq:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.iv()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bz:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aN(u,10))>>>0,56320|u&1023)}}throw H.c(P.Z(a,0,1114111,null,null))},
by:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nn:function(a){var u=H.by(a).getFullYear()+0
return u},
nl:function(a){var u=H.by(a).getMonth()+1
return u},
nh:function(a){var u=H.by(a).getDate()+0
return u},
ni:function(a){var u=H.by(a).getHours()+0
return u},
nk:function(a){var u=H.by(a).getMinutes()+0
return u},
nm:function(a){var u=H.by(a).getSeconds()+0
return u},
nj:function(a){var u=H.by(a).getMilliseconds()+0
return u},
t:function(a){throw H.c(H.ab(a))},
d:function(a,b){if(a==null)J.ah(a)
throw H.c(H.bN(a,b))},
bN:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,s,null)
u=J.ah(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.N(b,a,s,null,u)
return P.dm(b,s)},
oO:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bA(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bA(a,c,!0,b,"end",u)
return new P.al(!0,b,"end",null)},
ab:function(a){return new P.al(!0,a,null,null)},
oJ:function(a){if(typeof a!=="number")throw H.c(H.ab(a))
return a},
c:function(a){var u
if(a==null)a=new P.dj()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mh})
u.name=""}else u.toString=H.mh
return u},
mh:function(){return J.a4(this.dartException)},
q:function(a){throw H.c(a)},
m:function(a){throw H.c(P.aN(a))},
aH:function(a){var u,t,s,r,q,p
a=H.mf(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.it(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lE:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lr:function(a,b){return new H.hy(a,b==null?null:b.method)},
kF:function(a,b){var u=b==null,t=u?null:b.method
return new H.fO(a,t,u?null:b.receiver)},
ag:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kn(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kF(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lr(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ml()
q=$.mm()
p=$.mn()
o=$.mo()
n=$.mr()
m=$.ms()
l=$.mq()
$.mp()
k=$.mu()
j=$.mt()
i=r.ai(u)
if(i!=null)return f.$1(H.kF(u,i))
else{i=q.ai(u)
if(i!=null){i.method="call"
return f.$1(H.kF(u,i))}else{i=p.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=n.ai(u)
if(i==null){i=m.ai(u)
if(i==null){i=l.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=k.ai(u)
if(i==null){i=j.ai(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lr(u,i))}}return f.$1(new H.iF(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.du()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.al(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.du()
return a},
l_:function(a){var u
if(a==null)return new H.em(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.em(a)},
oS:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
p_:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p_)
a.$identity=u
return u},
mR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i5().constructor.prototype):Object.create(new H.bS(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ar
if(typeof t!=="number")return t.B()
$.ar=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lg(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mN(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lg(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mN:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oU,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lf:H.kr
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mO:function(a,b,c,d){var u=H.kr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lg:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mQ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mO(t,!r,u,b)
if(t===0){r=$.ar
if(typeof r!=="number")return r.B()
$.ar=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bT
return new Function(r+H.e(q==null?$.bT=H.f0("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ar
if(typeof r!=="number")return r.B()
$.ar=r+1
o+=r
r="return function("+o+"){return this."
q=$.bT
return new Function(r+H.e(q==null?$.bT=H.f0("self"):q)+"."+H.e(u)+"("+o+");}")()},
mP:function(a,b,c,d){var u=H.kr,t=H.lf
switch(b?-1:a){case 0:throw H.c(H.nu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mQ:function(a,b){var u,t,s,r,q,p,o,n=$.bT
if(n==null)n=$.bT=H.f0("self")
u=$.le
if(u==null)u=$.le=H.f0("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mP(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ar
if(typeof u!=="number")return u.B()
$.ar=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ar
if(typeof u!=="number")return u.B()
$.ar=u+1
return new Function(n+u+"}")()},
kX:function(a,b,c,d,e,f,g){return H.mR(a,b,c,d,!!e,!!f,g)},
kr:function(a){return a.a},
lf:function(a){return a.c},
f0:function(a){var u,t,s,r=new H.bS("self","target","receiver","name"),q=J.kC(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
p4:function(a,b){throw H.c(H.mM(a,H.cK(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.p4(a,b)},
oQ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mM:function(a,b){return new H.f1("CastError: "+P.kz(a)+": type '"+H.e(H.oF(a))+"' is not a subtype of type '"+b+"'")},
oF:function(a){var u,t=J.P(a)
if(!!t.$ibU){u=H.oQ(t)
if(u!=null)return H.p5(u)
return"Closure"}return H.cf(a)},
p9:function(a){throw H.c(new P.fe(a))},
nu:function(a){return new H.hQ(a)},
m9:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cJ:function(a){if(a==null)return
return a.$ti},
pK:function(a,b,c){return H.kl(a["$a"+H.e(c)],H.cJ(b))},
oT:function(a,b,c,d){var u=H.kl(a["$a"+H.e(c)],H.cJ(b))
return u==null?null:u[d]},
kZ:function(a,b,c){var u=H.kl(a["$a"+H.e(b)],H.cJ(a))
return u==null?null:u[c]},
aK:function(a,b){var u=H.cJ(a)
return u==null?null:u[b]},
p5:function(a){return H.bk(a,null)},
bk:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cK(a[0].name)+H.lZ(a,1,b)
if(typeof a=="function")return H.cK(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.oa(a,b)
if('futureOr' in a)return"FutureOr<"+H.bk("type" in a?a.type:null,b)+">"
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
p=C.a.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a2)p+=" extends "+H.bk(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bk(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bk(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bk(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oR(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bk(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lZ:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.S("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bk(p,c)}return"<"+u.i(0)+">"},
kl:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pI:function(a,b,c){return a.apply(b,H.kl(J.P(b)["$a"+H.e(c)],H.cJ(b)))},
pJ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p1:function(a){var u,t,s,r,q=$.ma.$1(a),p=$.k2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m3.$2(a,q)
if(q!=null){p=$.k2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kh(u)
$.k2[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k8[q]=u
return u}if(s==="-"){r=H.kh(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.md(a,u)
if(s==="*")throw H.c(P.iE(q))
if(v.leafTags[q]===true){r=H.kh(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.md(a,u)},
md:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l1(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kh:function(a){return J.l1(a,!1,null,!!a.$iC)},
p2:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kh(u)
else return J.l1(u,c,null,null)},
oY:function(){if(!0===$.l0)return
$.l0=!0
H.oZ()},
oZ:function(){var u,t,s,r,q,p,o,n
$.k2=Object.create(null)
$.k8=Object.create(null)
H.oX()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.me.$1(q)
if(p!=null){o=H.p2(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oX:function(){var u,t,s,r,q,p,o=C.F()
o=H.bL(C.G,H.bL(C.H,H.bL(C.u,H.bL(C.u,H.bL(C.I,H.bL(C.J,H.bL(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ma=new H.k5(r)
$.m3=new H.k6(q)
$.me=new H.k7(p)},
bL:function(a,b){return a(b)||b},
n3:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.T("Illegal RegExp pattern ("+String(p)+")",a,null))},
p7:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oP:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mf:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l4:function(a,b,c){var u=H.p8(a,b,c)
return u},
p8:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mf(b),'g'),H.oP(c))},
f7:function f7(){},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
it:function it(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hy:function hy(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a){this.a=a},
kn:function kn(a){this.a=a},
em:function em(a){this.a=a
this.b=null},
bU:function bU(){},
id:function id(){},
i5:function i5(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f1:function f1(a){this.a=a},
hQ:function hQ(a){this.a=a},
J:function J(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fN:function fN(a){this.a=a},
fS:function fS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fT:function fT(a,b){this.a=a
this.$ti=b},
fU:function fU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bJ:function(a){return a},
nd:function(a){return new Int8Array(a)},
aI:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bN(b,a))},
o8:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oO(a,b,c))
return b},
ca:function ca(){},
bc:function bc(){},
de:function de(){},
cb:function cb(){},
df:function df(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
dg:function dg(){},
cc:function cc(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
oR:function(a){return J.lk(a?Object.keys(a):[],null)},
pa:function(a){return v.mangledGlobalNames[a]},
p3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k3:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l0==null){H.oY()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iE("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l6()]
if(r!=null)return r
r=H.p1(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.l6(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
n0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kq(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.Z(a,0,4294967295,"length",null))
return J.lk(new Array(a),b)},
lk:function(a,b){return J.kC(H.b(a,[b]))},
kC:function(a){a.fixed$length=Array
return a},
n1:function(a,b){return J.cN(a,b)},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d5.prototype
return J.d4.prototype}if(typeof a=="string")return J.b8.prototype
if(a==null)return J.d6.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.a2)return a
return J.k3(a)},
bl:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.a2)return a
return J.k3(a)},
eL:function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.a2)return a
return J.k3(a)},
m8:function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bE.prototype
return a},
cI:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bE.prototype
return a},
bP:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.a2)return a
return J.k3(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).q(a,b)},
l8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m8(a).p(a,b)},
bR:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mb(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bl(a).h(a,b)},
kp:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mb(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eL(a).m(a,b,c)},
mD:function(a,b){return J.cI(a).F(a,b)},
mE:function(a,b,c){return J.bP(a).fW(a,b,c)},
mF:function(a,b,c,d){return J.bP(a).he(a,b,c,d)},
mG:function(a,b){return J.cI(a).X(a,b)},
cN:function(a,b){return J.m8(a).aR(a,b)},
eO:function(a,b){return J.eL(a).L(a,b)},
mH:function(a,b,c,d){return J.bP(a).hE(a,b,c,d)},
l9:function(a,b){return J.eL(a).G(a,b)},
mI:function(a){return J.bP(a).ghn(a)},
la:function(a){return J.bP(a).gc3(a)},
cO:function(a){return J.P(a).gJ(a)},
aL:function(a){return J.eL(a).gU(a)},
ah:function(a){return J.bl(a).gl(a)},
lb:function(a){return J.eL(a).i9(a)},
mJ:function(a,b){return J.bP(a).ie(a,b)},
mK:function(a,b,c){return J.cI(a).t(a,b,c)},
mL:function(a){return J.cI(a).ip(a)},
a4:function(a){return J.P(a).i(a)},
a:function a(){},
fL:function fL(){},
d6:function d6(){},
d7:function d7(){},
hC:function hC(){},
bE:function bE(){},
b9:function b9(){},
b7:function b7(a){this.$ti=a},
kD:function kD(a){this.$ti=a},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c1:function c1(){},
d5:function d5(){},
d4:function d4(){},
b8:function b8(){}},P={
nJ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oG()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bM(new P.j5(s),1)).observe(u,{childList:true})
return new P.j4(s,u,t)}else if(self.setImmediate!=null)return P.oH()
return P.oI()},
nK:function(a){self.scheduleImmediate(H.bM(new P.j6(a),0))},
nL:function(a){self.setImmediate(H.bM(new P.j7(a),0))},
nM:function(a){P.kL(C.n,a)},
kL:function(a,b){var u=C.c.a3(a.a,1000)
return P.nT(u<0?0:u,b)},
lD:function(a,b){var u=C.c.a3(a.a,1000)
return P.nU(u<0?0:u,b)},
nT:function(a,b){var u=new P.es()
u.eF(a,b)
return u},
nU:function(a,b){var u=new P.es()
u.eG(a,b)
return u},
pF:function(a){return new P.bF(a,1)},
nP:function(){return C.Z},
nQ:function(a){return new P.bF(a,3)},
od:function(a,b){return new P.jA(a,[b])},
oz:function(){var u,t
for(;u=$.bK,u!=null;){$.cH=null
t=u.b
$.bK=t
if(t==null)$.cG=null
u.a.$0()}},
oE:function(){$.kV=!0
try{P.oz()}finally{$.cH=null
$.kV=!1
if($.bK!=null)$.l7().$1(P.m4())}},
oC:function(a){var u=new P.dP(a)
if($.bK==null){$.bK=$.cG=u
if(!$.kV)$.l7().$1(P.m4())}else $.cG=$.cG.b=u},
oD:function(a){var u,t,s=$.bK
if(s==null){P.oC(a)
$.cH=$.cG
return}u=new P.dP(a)
t=$.cH
if(t==null){u.b=s
$.bK=$.cH=u}else{u.b=t.b
$.cH=t.b=u
if(u.b==null)$.cG=u}},
lC:function(a,b){var u=$.aq
if(u===C.f)return P.kL(a,b)
return P.kL(a,u.ho(b))},
nB:function(a,b){var u=$.aq
if(u===C.f)return P.lD(a,b)
return P.lD(a,u.dg(b,P.dB))},
m_:function(a,b,c,d,e){var u={}
u.a=d
P.oD(new P.jW(u,e))},
oA:function(a,b,c,d){var u,t=$.aq
if(t===c)return d.$0()
$.aq=c
u=t
try{t=d.$0()
return t}finally{$.aq=u}},
oB:function(a,b,c,d,e){var u,t=$.aq
if(t===c)return d.$1(e)
$.aq=c
u=t
try{t=d.$1(e)
return t}finally{$.aq=u}},
j5:function j5(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
es:function es(){this.c=0},
jE:function jE(a,b){this.a=a
this.b=b},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b){this.a=a
this.b=b},
bG:function bG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jA:function jA(a,b){this.a=a
this.$ti=b},
dP:function dP(a){this.a=a
this.b=null},
dw:function dw(){},
i8:function i8(){},
dB:function dB(){},
jN:function jN(){},
jW:function jW(a,b){this.a=a
this.b=b},
jl:function jl(){},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
n5:function(a,b){return new H.J([a,b])},
kG:function(a,b){return new H.J([a,b])},
n7:function(a){return H.oS(a,new H.J([null,null]))},
c3:function(a){return new P.ji([a])},
kQ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nS:function(a,b){var u=new P.e3(a,b)
u.c=a.e
return u},
mZ:function(a,b,c){var u,t
if(P.kW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.aa.push(a)
try{P.oc(a,u)}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}t=P.lA(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kB:function(a,b,c){var u,t
if(P.kW(a))return b+"..."+c
u=new P.S(b)
$.aa.push(a)
try{t=u
t.a=P.lA(t.a,a,", ")}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kW:function(a){var u,t
for(u=$.aa.length,t=0;t<u;++t)if(a===$.aa[t])return!0
return!1},
oc:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gC(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gC(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gC(n);++l
for(;n.u();r=q,q=p){p=n.gC(n);++l
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
a.G(0,new P.fV(u))
return u},
ll:function(a,b){var u,t,s=P.c3(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t)s.n(0,a[t])
return s},
kI:function(a){var u,t={}
if(P.kW(a))return"{...}"
u=new P.S("")
try{$.aa.push(a)
u.a+="{"
t.a=!0
J.l9(a,new P.h_(t,u))
u.a+="}"}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ji:function ji(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jj:function jj(a){this.a=a
this.c=this.b=null},
e3:function e3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fI:function fI(){},
fV:function fV(a){this.a=a},
fW:function fW(){},
x:function x(){},
fZ:function fZ(){},
h_:function h_(a,b){this.a=a
this.b=b},
a1:function a1(){},
jF:function jF(){},
h0:function h0(){},
dI:function dI(a,b){this.a=a
this.$ti=b},
jp:function jp(){},
e4:function e4(){},
ey:function ey(){},
nE:function(a,b,c,d){if(b instanceof Uint8Array)return P.nF(!1,b,c,d)
return},
nF:function(a,b,c,d){var u,t,s=$.mv()
if(s==null)return
u=0===c
if(u&&!0)return P.kO(s,b)
t=b.length
d=P.aV(c,d,t)
if(u&&d===t)return P.kO(s,b)
return P.kO(s,b.subarray(c,d))},
kO:function(a,b){if(P.nH(b))return
return P.nI(a,b)},
nI:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ag(t)}return},
nH:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nG:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ag(t)}return},
m1:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.t(c)
u=J.bl(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.aa()
if((s&127)!==s)return t-b}return c-b},
ld:function(a,b,c,d,e,f){if(C.c.bd(f,4)!==0)throw H.c(P.T("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.T("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.T("Invalid base64 padding, more than two '=' characters",a,b))},
eY:function eY(){},
eZ:function eZ(){},
f3:function f3(){},
f9:function f9(){},
fp:function fp(){},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fF:function fF(a){this.a=a},
iO:function iO(){},
iQ:function iQ(){},
jL:function jL(a){this.b=0
this.c=a},
iP:function iP(a){this.a=a},
jK:function jK(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eM:function(a,b,c){var u=H.no(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.T(a,null,null))},
mW:function(a){if(a instanceof H.bU)return a.i(0)
return"Instance of '"+H.e(H.cf(a))+"'"},
n8:function(a,b,c){var u,t,s=J.n0(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kH:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aL(a);u.u();)t.push(u.gC(u))
if(b)return t
return J.kC(t)},
ci:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aV(b,c,u)
if(b<=0){if(typeof c!=="number")return c.R()
t=c<u}else t=!0
return H.lv(t?C.b.el(a,b,c):a)}if(!!J.P(a).$icc)return H.nq(a,b,P.aV(b,c,a.length))
return P.nz(a,b,c)},
nz:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.Z(b,0,J.ah(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.Z(c,b,J.ah(a),q,q))
t=J.aL(a)
for(s=0;s<b;++s)if(!t.u())throw H.c(P.Z(b,0,s,q,q))
r=[]
if(u)for(;t.u();)r.push(t.gC(t))
else for(s=b;s<c;++s){if(!t.u())throw H.c(P.Z(c,b,s,q,q))
r.push(t.gC(t))}return H.lv(r)},
ns:function(a){return new H.fM(a,H.n3(a,!1,!0,!1,!1,!1))},
lA:function(a,b,c){var u=J.aL(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gC(u))
while(u.u())}else{a+=H.e(u.gC(u))
for(;u.u();)a=a+c+H.e(u.gC(u))}return a},
lG:function(){var u=H.ng()
if(u!=null)return P.nD(u)
throw H.c(P.y("'Uri.base' is not supported"))},
ez:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mB().b
if(typeof b!=="string")H.q(H.ab(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghD().c5(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bz(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mT:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cX:function(a){if(a>=10)return""+a
return"0"+a},
lh:function(a){return new P.b5(1000*a)},
kz:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mW(a)},
cP:function(a){return new P.al(!1,null,null,a)},
kq:function(a,b,c){return new P.al(!0,a,b,c)},
dm:function(a,b){return new P.bA(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.bA(b,c,!0,a,d,"Invalid value")},
aV:function(a,b,c){var u
if(typeof a!=="number")return H.t(a)
if(0<=a){if(typeof c!=="number")return H.t(c)
u=a>c}else u=!0
if(u)throw H.c(P.Z(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.t(c)
u=b>c}else u=!0
if(u)throw H.c(P.Z(b,a,c,"end",null))
return b}return c},
lw:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.c(P.Z(a,0,null,b,null))},
N:function(a,b,c,d,e){var u=e==null?J.ah(b):e
return new P.fH(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iH(a)},
iE:function(a){return new P.iD(a)},
lz:function(a){return new P.ch(a)},
aN:function(a){return new P.f5(a)},
v:function(a){return new P.dX(a)},
T:function(a,b,c){return new P.fz(a,b,c)},
n9:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
l3:function(a){H.p3(a)},
nD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.F(a,4)^58)*3|C.a.F(a,0)^100|C.a.F(a,1)^97|C.a.F(a,2)^116|C.a.F(a,3)^97)>>>0
if(u===0)return P.lF(e<e?C.a.t(a,0,e):a,5,f).gec()
else if(u===32)return P.lF(C.a.t(a,5,e),0,f).gec()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.w])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.m0(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.iu()
if(r>=0)if(P.m0(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.t(n)
if(m<n)n=m
if(typeof o!=="number")return o.R()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.R()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.R()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a5(a,"..",o)))j=n>o+2&&C.a.a5(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a5(a,"file",0)){if(q<=0){if(!C.a.a5(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.t(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aV(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a5(a,"http",0)){if(t&&p+3===o&&C.a.a5(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aV(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a5(a,"https",0)){if(t&&p+4===o&&C.a.a5(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aV(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.js(a,r,q,p,o,n,m,k)}return P.nV(a,0,e,r,q,p,o,n,m,k)},
lI:function(a){var u=P.h
return C.b.hJ(H.b(a.split("&"),[u]),P.kG(u,u),new P.iM(C.e))},
nC:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iJ(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eM(C.a.t(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eM(C.a.t(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iK(a),d=new P.iL(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
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
else{m=P.nC(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aN(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
nV:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o2(a,b,d)
else{if(d===b)P.bI(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o3(a,u,e-1):""
s=P.o_(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.t(g)
q=r<g?P.o1(P.eM(C.a.t(a,r,g),new P.jG(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o0(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.kS(a,h+1,i,n):n
return new P.bH(j,t,s,q,p,o,i<c?P.nZ(a,i+1,c):n)},
lT:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bI:function(a,b,c){throw H.c(P.T(c,a,b))},
o1:function(a,b){if(a!=null&&a===P.lT(b))return
return a},
o_:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.X(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.a.X(a,u)!==93)P.bI(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nX(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.lY(a,C.a.a5(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lH(a,t,s)
return C.a.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.t(c)
p=b
for(;p<c;++p)if(C.a.X(a,p)===58){s=C.a.bn(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lY(a,C.a.a5(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lH(a,b,s)
return"["+C.a.t(a,b,s)+q+"]"}return P.o5(a,b,c)},
nX:function(a,b,c){var u,t=C.a.bn(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.t(c)
u=t<c}else u=!1
return u?t:c},
lY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.S(d):null
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.X(a,u)
if(r===37){q=P.kT(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.S("")
o=l.a+=C.a.t(a,t,u)
if(p)q=C.a.t(a,u,u+3)
else if(q==="%")P.bI(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.S("")
if(t<u){l.a+=C.a.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.S("")
l.a+=C.a.t(a,t,u)
l.a+=P.kR(r)
u+=m
t=u}}}if(l==null)return C.a.t(a,b,c)
if(t<c)l.a+=C.a.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.X(a,u)
if(q===37){p=P.kT(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.S("")
n=C.a.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.S("")
if(t<u){s.a+=C.a.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bI(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.S("")
n=C.a.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kR(q)
u+=l
t=u}}}}if(s==null)return C.a.t(a,b,c)
if(t<c){n=C.a.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o2:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lV(C.a.F(a,b)))P.bI(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bI(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.t(a,b,c)
return P.nW(t?a.toLowerCase():a)},
nW:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o3:function(a,b,c){return P.cE(a,b,c,C.V,!1)},
o0:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cE(a,b,c,C.z,!0):C.j.iL(d,new P.jH(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a2(u,"/"))u="/"+u
return P.o4(u,e,f)},
o4:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a2(a,"/"))return P.o6(a,!u||c)
return P.o7(a)},
kS:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cP("Both query and queryParameters specified"))
return P.cE(a,b,c,C.l,!0)}if(d==null)return
u=new P.S("")
t.a=""
d.G(0,new P.jI(new P.jJ(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nZ:function(a,b,c){return P.cE(a,b,c,C.l,!0)},
kT:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.X(a,b+1)
t=C.a.X(a,p)
s=H.k4(u)
r=H.k4(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aN(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bz(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.t(a,b,b+3).toUpperCase()
return},
kR:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.w])
t[0]=37
t[1]=C.a.F(m,a>>>4)
t[2]=C.a.F(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h6(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.F(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.F(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.ci(t,0,null)},
cE:function(a,b,c,d,e){var u=P.lX(a,b,c,d,e)
return u==null?C.a.t(a,b,c):u},
lX:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.t(c)
if(!(o<c))break
c$0:{u=C.a.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kT(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bI(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kR(u)}}if(m==null)m=new P.S("")
m.a+=C.a.t(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.t(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.a.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lW:function(a){if(C.a.a2(a,"."))return!0
return C.a.dM(a,"/.")!==-1},
o7:function(a){var u,t,s,r,q,p,o
if(!P.lW(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.E(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
o6:function(a,b){var u,t,s,r,q,p
if(!P.lW(a))return!b?P.lU(a):a
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
t=P.lU(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
lU:function(a){var u,t,s,r=a.length
if(r>=2&&P.lV(J.mD(a,0)))for(u=1;u<r;++u){t=C.a.F(a,u)
if(t===58)return C.a.t(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nY:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cP("Invalid URL encoding"))}}return u},
kU:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.t(a,b,c)
else r=new H.n(C.a.t(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.F(a,q)
if(t>127)throw H.c(P.cP("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cP("Truncated URI"))
r.push(P.nY(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iP(!1).c5(r)},
lV:function(a){var u=a|32
return 97<=u&&u<=122},
lF:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.T(m,a,t))}}if(s<0&&t>b)throw H.c(P.T(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gav(l)
if(r!==44||t!==p+7||!C.a.a5(a,"base64",p+1))throw H.c(P.T("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hS(0,a,o,u)
else{n=P.lX(a,o,u,C.l,!0)
if(n!=null)a=C.a.aV(a,o,u,n)}return new P.iI(a,l,c)},
o9:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n9(22,new P.jR(),P.bC),n=new P.jQ(o),m=new P.jS(),l=new P.jT(),k=n.$2(0,225)
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
m0:function(a,b,c,d,e){var u,t,s,r,q,p=$.mC()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.F(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aJ:function aJ(){},
ad:function ad(a,b){this.a=a
this.b=b},
L:function L(){},
b5:function b5(a){this.a=a},
fl:function fl(){},
fm:function fm(){},
br:function br(){},
dj:function dj(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bA:function bA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fH:function fH(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iH:function iH(a){this.a=a},
iD:function iD(a){this.a=a},
ch:function ch(a){this.a=a},
f5:function f5(a){this.a=a},
hB:function hB(){},
du:function du(){},
fe:function fe(a){this.a=a},
dX:function dX(a){this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(){},
w:function w(){},
j:function j(){},
fK:function fK(){},
o:function o(){},
R:function R(){},
bd:function bd(){},
ac:function ac(){},
a2:function a2(){},
h:function h(){},
S:function S(a){this.a=a},
iM:function iM(a){this.a=a},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
iL:function iL(a,b){this.a=a
this.b=b},
bH:function bH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jG:function jG(a,b){this.a=a
this.b=b},
jH:function jH(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
jI:function jI(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
jR:function jR(){},
jQ:function jQ(a){this.a=a},
jS:function jS(){},
jT:function jT(){},
js:function js(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jb:function jb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oM:function(a){var u,t=J.P(a)
if(!!t.$iaQ){u=t.gdj(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ex(a.data,a.height,a.width)},
oL:function(a){if(a instanceof P.ex)return{data:a.a,height:a.b,width:a.c}
return a},
aY:function(a){var u,t,s,r,q
if(a==null)return
u=P.kG(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oK:function(a){var u={}
a.G(0,new P.jX(u))
return u},
ju:function ju(){},
jw:function jw(a,b){this.a=a
this.b=b},
jx:function jx(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a){this.a=a},
jv:function jv(a,b){this.a=a
this.b=b},
fv:function fv(a,b){this.a=a
this.b=b},
fw:function fw(){},
fx:function fx(){},
jh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nR:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jk:function jk(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aR:function aR(){},
fQ:function fQ(){},
aU:function aU(){},
hz:function hz(){},
hG:function hG(){},
cg:function cg(){},
i9:function i9(){},
k:function k(){},
aW:function aW(){},
is:function is(){},
e1:function e1(){},
e2:function e2(){},
ec:function ec(){},
ed:function ed(){},
eo:function eo(){},
ep:function ep(){},
ev:function ev(){},
ew:function ew(){},
bC:function bC(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(a){this.a=a},
eW:function eW(){},
bn:function bn(){},
hA:function hA(){},
dQ:function dQ(){},
dp:function dp(){},
i4:function i4(){},
ek:function ek(){},
el:function el(){}},W={
lc:function(){var u=document.createElement("a")
return u},
kt:function(){var u=document.createElement("canvas")
return u},
mV:function(a,b,c){var u=document.body,t=(u&&C.r).ah(u,a,b,c)
t.toString
u=new H.cs(new W.a3(t),new W.fo(),[W.F])
return u.gaG(u)},
kw:function(a){return"wheel"},
bW:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bP(a)
t=u.ge9(a)
if(typeof t==="string")r=u.ge9(a)}catch(s){H.ag(s)}return r},
mY:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ag(u)}return s},
jg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lR:function(a,b,c,d){var u=W.jg(W.jg(W.jg(W.jg(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
W:function(a,b,c,d){var u=W.m2(new W.je(c),W.i)
if(u!=null&&!0)J.mF(a,b,u,!1)
return new W.jd(a,b,u,!1)},
lQ:function(a){var u=W.lc(),t=window.location
u=new W.cu(new W.jo(u,t))
u.ey(a)
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
lS:function(){var u=P.h,t=P.ll(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jB(t,P.c3(u),P.c3(u),P.c3(u),null)
t.eE(null,new H.h2(C.o,new W.jC(),[H.aK(C.o,0),u]),s,null)
return t},
m2:function(a,b){var u=$.aq
if(u===C.f)return a
return u.dg(a,b)},
p:function p(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
b3:function b3(){},
fa:function fa(){},
H:function H(){},
bV:function bV(){},
fb:function fb(){},
ai:function ai(){},
at:function at(){},
fc:function fc(){},
fd:function fd(){},
fg:function fg(){},
am:function am(){},
fi:function fi(){},
cZ:function cZ(){},
d_:function d_(){},
fj:function fj(){},
fk:function fk(){},
j9:function j9(a,b){this.a=a
this.b=b},
Q:function Q(){},
fo:function fo(){},
i:function i(){},
f:function f(){},
an:function an(){},
bY:function bY(){},
fu:function fu(){},
fy:function fy(){},
au:function au(){},
fE:function fE(){},
c_:function c_(){},
aQ:function aQ(){},
c0:function c0(){},
bw:function bw(){},
fX:function fX(){},
hj:function hj(){},
c8:function c8(){},
hk:function hk(){},
hl:function hl(a){this.a=a},
hm:function hm(){},
hn:function hn(a){this.a=a},
ay:function ay(){},
ho:function ho(){},
az:function az(){},
a3:function a3(a){this.a=a},
F:function F(){},
dh:function dh(){},
aA:function aA(){},
hE:function hE(){},
hO:function hO(){},
hP:function hP(a){this.a=a},
hR:function hR(){},
aC:function aC(){},
i1:function i1(){},
aD:function aD(){},
i2:function i2(){},
aE:function aE(){},
i6:function i6(){},
i7:function i7(a){this.a=a},
ao:function ao(){},
dx:function dx(){},
ia:function ia(){},
ib:function ib(){},
cj:function cj(){},
aF:function aF(){},
ap:function ap(){},
ie:function ie(){},
ig:function ig(){},
il:function il(){},
aG:function aG(){},
bB:function bB(){},
iq:function iq(){},
ir:function ir(){},
bg:function bg(){},
iN:function iN(){},
j1:function j1(){},
bj:function bj(){},
ct:function ct(){},
ja:function ja(){},
dS:function dS(){},
jf:function jf(){},
e9:function e9(){},
jt:function jt(){},
jy:function jy(){},
j8:function j8(){},
jc:function jc(a){this.a=a},
jd:function jd(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
je:function je(a){this.a=a},
cu:function cu(a){this.a=a},
M:function M(){},
di:function di(a){this.a=a},
hw:function hw(a){this.a=a},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(){},
jq:function jq(){},
jr:function jr(){},
jB:function jB(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jC:function jC(){},
jz:function jz(){},
d2:function d2(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aT:function aT(){},
jo:function jo(a,b){this.a=a
this.b=b},
eA:function eA(a){this.a=a},
jM:function jM(a){this.a=a},
dR:function dR(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
ea:function ea(){},
eb:function eb(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
cA:function cA(){},
cB:function cB(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
cC:function cC(){},
cD:function cD(){},
et:function et(){},
eu:function eu(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){}},K={
O:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.v("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.F(a,0)
t=C.a.F(b,0)
if(u>t){s=t
t=u
u=s}return new K.hJ(u,t)},
u:function(a){var u=new K.hS()
u.ev(a)
return u},
aM:function aM(){},
d3:function d3(){},
bb:function bb(){},
a7:function a7(){this.a=null},
hJ:function hJ(a,b){this.a=a
this.b=b},
hS:function hS(){this.a=null}},L={
io:function(){var u=new L.im(),t=P.h
u.a=new H.J([t,L.dv])
u.b=new H.J([t,L.dD])
u.c=P.c3(t)
return u},
dv:function dv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a){this.b=a
this.c=null},
im:function im(){var _=this
_.d=_.c=_.b=_.a=null},
dF:function dF(a){this.b=a
this.a=this.c=null}},O={
ku:function(a){var u=new O.b4([a])
u.bz(a)
return u},
b4:function b4(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c6:function c6(){this.b=this.a=null},
lm:function(){var u,t=new O.dc(),s=O.ku(V.aw)
t.e=s
s.be(t.gf5(),t.gf7())
s=new O.av(t,"emission")
s.c=new A.a_(!1,!1,!1)
s.f=new V.X(0,0,0)
t.f=s
s=new O.av(t,"ambient")
s.c=new A.a_(!1,!1,!1)
s.f=new V.X(0,0,0)
t.r=s
s=new O.av(t,"diffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.X(0,0,0)
t.x=s
s=new O.av(t,"invDiffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.X(0,0,0)
t.y=s
s=new O.h9(t,"specular")
s.c=new A.a_(!1,!1,!1)
s.f=new V.X(0,0,0)
s.ch=100
t.z=s
s=new O.h5(t,"bump")
s.c=new A.a_(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.av(t,"reflect")
s.c=new A.a_(!1,!1,!1)
s.f=new V.X(0,0,0)
t.cx=s
s=new O.h8(t,"refract")
s.c=new A.a_(!1,!1,!1)
s.f=new V.X(0,0,0)
s.ch=1
t.cy=s
s=new O.h4(t,"alpha")
s.c=new A.a_(!1,!1,!1)
s.f=1
t.db=s
s=new D.d9()
s.bz(D.a6)
s.e=H.b([],[D.eX])
s.f=H.b([],[D.fh])
s.r=H.b([],[D.bx])
s.x=H.b([],[D.i3])
s.z=s.y=null
s.cC(s.gf3(),s.gfH(),s.gfL())
t.dx=s
u=new O.h7()
u.b=new V.as(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.I():u
s.n(0,t.gfY())
s=t.dx
u=s.z
s=u==null?s.z=D.I():u
s.n(0,t.gbg())
t.fr=null
return t},
dc:function dc(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(){},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(){},
h4:function h4(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c5:function c5(){},
h5:function h5(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
av:function av(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h7:function h7(){var _=this
_.e=_.d=_.c=_.b=null},
h8:function h8(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h9:function h9(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dy:function dy(){}},E={
ky:function(){var u,t=new E.aP()
t.a=""
t.b=!0
u=O.ku(E.aP)
t.y=u
u.be(t.ghT(),t.ghW())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sad(0,null)
t.sba(null)
t.saT(null)
return t},
nt:function(a,b){var u=new E.hK(a)
u.eu(a,b)
return u},
nA:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibq)return E.lB(a,!0,!0,!0,!1)
u=W.kt()
t=u.style
t.width="100%"
t.height="100%"
s.gc3(a).n(0,u)
return E.lB(u,!0,!0,!0,!1)},
lB:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dA(),p=C.i.cA(a,"webgl2",P.n7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.q(P.v("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nt(p,a)
u=new T.ii(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dJ(a)
t=new X.fP()
t.c=new X.aj(!1,!1,!1)
t.d=P.c3(P.w)
u.b=t
t=new X.hp(u)
t.f=0
t.r=V.be()
t.x=V.be()
t.ch=t.Q=1
u.c=t
t=new X.fY(u)
t.r=0
t.x=V.be()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ip(u)
t.f=V.be()
t.r=V.be()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dw,P.a2]])
u.z=t
s=document
t.push(W.W(s,"contextmenu",u.gff(),!1))
u.z.push(W.W(a,"focus",u.gfl(),!1))
u.z.push(W.W(a,"blur",u.gf9(),!1))
u.z.push(W.W(s,"keyup",u.gfp(),!1))
u.z.push(W.W(s,"keydown",u.gfn(),!1))
u.z.push(W.W(a,"mousedown",u.gfu(),!1))
u.z.push(W.W(a,"mouseup",u.gfA(),!1))
u.z.push(W.W(a,r,u.gfw(),!1))
t=u.z
W.kw(a)
W.kw(a)
t.push(W.W(a,W.kw(a),u.gfC(),!1))
u.z.push(W.W(s,r,u.gfh(),!1))
u.z.push(W.W(s,"mouseup",u.gfj(),!1))
u.z.push(W.W(s,"pointerlockchange",u.gfE(),!1))
u.z.push(W.W(a,"touchstart",u.gfR(),!1))
u.z.push(W.W(a,"touchend",u.gfN(),!1))
u.z.push(W.W(a,"touchmove",u.gfP(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ad(Date.now(),!1)
q.db=0
q.d1()
return q},
f_:function f_(){},
aP:function aP(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hK:function hK(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
dA:function dA(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ik:function ik(a){this.a=a}},Z={
kP:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bJ(c)),35044)
a.bindBuffer(b,null)
return new Z.dO(b,u)},
ak:function(a){return new Z.aX(a)},
dO:function dO(a,b){this.a=a
this.b=b},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j2:function j2(a){this.a=a},
cT:function cT(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a){this.a=a}},D={
I:function(){var u=new D.bs()
u.d=0
return u},
f2:function f2(){},
bs:function bs(){var _=this
_.d=_.c=_.b=_.a=null},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
Y:function Y(){this.b=null},
bu:function bu(){this.b=null},
bv:function bv(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eX:function eX(){},
fh:function fh(){},
a6:function a6(){},
d9:function d9(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
bx:function bx(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i3:function i3(){}},X={cU:function cU(a,b){this.a=a
this.b=b},d8:function d8(a,b){this.a=a
this.b=b},fP:function fP(){var _=this
_.d=_.c=_.b=_.a=null},db:function db(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fY:function fY(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},aS:function aS(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hp:function hp(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c9:function c9(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hF:function hF(){},dE:function dE(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ip:function ip(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dJ:function dJ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mX:function(a){var u=new X.fA(),t=new V.as(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ly
if(t==null){t=V.lx(0,0,1,1)
$.ly=t}u.r=t
return u},
ks:function ks(){},
fA:function fA(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(){}},V={
ko:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bd(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.a.aj("null",c)
return C.a.aj(C.d.eb(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bO:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.aj(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
l2:function(a){return C.d.il(Math.pow(2,C.R.cj(Math.log(H.oJ(a))/Math.log(2))))},
c7:function(){var u=$.hi
return u==null?$.hi=V.ax(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ax:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lq:function(a,b,c){return V.ax(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kJ:function(a,b,c,d){return V.ax(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
ln:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ax(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lo:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ax(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lp:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ax(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
be:function(){var u=$.lt
return u==null?$.lt=new V.a8(0,0):u},
ne:function(){var u=$.aB
return u==null?$.aB=new V.U(0,0,0):u},
lx:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dn(a,b,c,d)},
cq:function(){var u=$.lO
return u==null?$.lO=new V.B(0,0,0):u},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fq:function fq(a){this.a=a},
dd:function dd(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aw:function aw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a8:function a8(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dn:function dn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K:function K(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p6:function(a){P.nB(C.O,new V.ki(a))},
nv:function(a){var u=new V.hX()
u.ex(a,!0)
return u},
cV:function cV(){},
ki:function ki(a){this.a=a},
ff:function ff(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fC:function fC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fD:function fD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hD:function hD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hH:function hH(a){this.a=a
this.c=null},
hI:function hI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hX:function hX(){this.b=this.a=null},
hZ:function hZ(a){this.a=a},
hY:function hY(a){this.a=a},
i_:function i_(a){this.a=a}},U={
kv:function(){var u=new U.f4()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
f6:function(a){var u=new U.cW()
u.a=a
return u},
kA:function(){var u=new U.bZ()
u.bz(U.ae)
u.be(u.geB(),u.gfJ())
u.e=null
u.f=V.c7()
u.r=0
return u},
f4:function f4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cW:function cW(){this.b=this.a=null},
bZ:function bZ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ae:function ae(){},
dq:function dq(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dK:function dK(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d0:function d0(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nb:function(a,b){var u=a.aB,t=new A.h3(b,u)
t.ew(b,u)
t.es(a,b)
return t},
nc:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gaq(a3)+a4.gaq(a4)+a5.gaq(a5)+a6.gaq(a6)+a7.gaq(a7)+a8.gaq(a8)+a9.gaq(a9)+b0.gaq(b0)+b1.gaq(b1)+"_"
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
d=$.b1()
if(j){u=$.b0()
d=new Z.aX(d.a|u.a)}if(i){u=$.b_()
d=new Z.aX(d.a|u.a)}if(h){u=$.b2()
d=new Z.aX(d.a|u.a)}if(g){u=$.aZ()
d=new Z.aX(d.a|u.a)}return new A.h6(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,!1,h,g,!1,b,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
jU:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jV:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jU(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eN(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
oi:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jU(b,t,"emission")
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
oe:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jV(b,t,"ambient")
b.a+="\n"},
og:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jV(b,t,"diffuse")
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
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jV(b,t,"invDiffuse")
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
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jV(b,t,"specular")
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
on:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jU(b,t,"reflect")
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
oo:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jU(b,t,"refract")
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
of:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eN(t)
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
if(typeof u!=="number")return u.aa()
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
s=A.eN(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aa()
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
s=A.eN(t)
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
if(typeof u!=="number")return u.aa()
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
s=A.eN(t)
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
if(typeof u!=="number")return u.aa()
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
u=b.a+="   return "+C.b.j(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
or:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.S("")
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
A.oi(a,i)
A.oe(a,i)
A.og(a,i)
A.oj(a,i)
A.op(a,i)
t=a.db
if(t){r=i.a+="// === Environmental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.on(a,i)
A.oo(a,i)}A.ol(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.of(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.oh(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.om(a,q[n],i)
for(q=a.cx,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.oq(a,q[n],i)
A.ok(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.h])
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
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.b.j(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
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
eN:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
kM:function(a,b,c,d,e){var u=new A.iw(a,c,e)
u.f=d
P.n8(d,0,P.w)
return u},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b){var _=this
_.dr=_.iC=_.bm=_.aB=_.bl=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iK=_.iJ=_.iI=_.cf=_.ce=_.cd=_.cc=_.cb=_.ca=_.c9=_.c8=_.dF=_.iH=_.dE=_.dD=_.iG=_.dC=_.dB=_.dA=_.iF=_.dz=_.dw=_.dv=_.iE=_.du=_.dt=_.iD=_.ds=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cR:function cR(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
h6:function h6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aB=b4
_.bm=b5},
cl:function cl(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cm:function cm(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
co:function co(a,b,c,d,e,f,g,h,i,j){var _=this
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
cp:function cp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dr:function dr(){},
dG:function dG(){},
iB:function iB(a){this.a=a},
bh:function bh(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
ck:function ck(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
cn:function cn(a,b,c){this.a=a
this.c=b
this.d=c},
af:function af(a,b,c){this.a=a
this.c=b
this.d=c},
bD:function bD(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kY:function(a,b,c,d){var u=F.kK()
F.cF(u,b,c,d,a,1,0,0,1)
F.cF(u,b,c,d,a,0,1,0,3)
F.cF(u,b,c,d,a,0,0,1,2)
F.cF(u,b,c,d,a,-1,0,0,0)
F.cF(u,b,c,d,a,0,-1,0,0)
F.cF(u,b,c,d,a,0,0,-1,3)
u.au()
return u},
jP:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cF:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.B(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.B(u+a3,t+a1,s+a2)
q=new V.B(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.B(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jP(i)
l=F.jP(h)
k=F.l5(d,a0,new F.jO(j,F.jP(g),F.jP(f),l,m,c),b)
if(k!=null)a.b7(k)},
m7:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kK()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.bi])
q=u.a
p=new V.B(0,0,t)
p=p.w(0,Math.sqrt(p.D(p)))
r.push(q.hh(new V.bf(a,-1,-1,-1),new V.as(1,1,1,1),new V.U(0,0,c),new V.B(0,0,t),new V.a8(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.t(k)
j=new V.B(m,l,t).w(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dN(new V.bf(a,-1,-1,-1),null,new V.as(i,g,h,1),new V.U(m*k,l*k,c),new V.B(0,0,t),new V.a8(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.hf(r)
return u},
m5:function(a,b,c){return F.oN(!0,a,1,new F.jY(1,c),b)},
oN:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.l5(c,e,new F.k_(d),null)
if(u==null)return
u.au()
u.bZ()
if(b)u.b7(F.m7(3,!1,1,new F.k0(d),e))
u.b7(F.m7(1,!0,-1,new F.k1(d),e))
return u},
mg:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kj()
t=F.kY(a,null,new F.kk(s,1),b)
t.bZ()
return t},
mi:function(){return F.m6(15,30,0.5,1,new F.km())},
p0:function(){return F.m6(12,120,0.3,1,new F.k9(3,2))},
m6:function(a,b,c,d,e){var u=F.l5(a,b,new F.jZ(e,d,b,c),null)
if(u==null)return
u.au()
u.bZ()
return u},
l5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kK()
t=H.b([],[F.bi])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dN(g,g,new V.as(p,0,0,1),g,g,new V.a8(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.c6(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dN(g,g,new V.as(j,i,h,1),g,g,new V.a8(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c6(d))}}u.d.hg(a+1,b+1,t)
return u},
bX:function(a,b,c){var u=new F.b6(),t=a.a
if(t==null)H.q(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.v("May not create a face with vertices attached to different shapes."))
u.bX(a)
u.bY(b)
u.h2(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
n4:function(a,b){var u=new F.c2(),t=a.a
if(t==null)H.q(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.v("May not create a line with vertices attached to different shapes."))
u.bX(a)
u.bY(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
kK:function(){var u=new F.hT(),t=new F.iR(u)
t.b=!1
t.c=H.b([],[F.bi])
u.a=t
t=new F.hW(u)
t.b=H.b([],[F.cd])
u.b=t
t=new F.hV(u)
t.b=H.b([],[F.c2])
u.c=t
t=new F.hU(u)
t.b=H.b([],[F.b6])
u.d=t
u.e=null
return u},
dN:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bi(),r=new F.iZ()
r.b=H.b([],[F.cd])
s.b=r
r=new F.iV()
u=[F.c2]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iS()
u=[F.b6]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mw()
s.e=0
r=$.b1()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b0().a)!==0?e:t
s.x=(u&$.b_().a)!==0?b:t
s.y=(u&$.bm().a)!==0?f:t
s.z=(u&$.b2().a)!==0?g:t
s.Q=(u&$.mx().a)!==0?c:t
s.ch=(u&$.bQ().a)!==0?i:0
s.cx=(u&$.aZ().a)!==0?a:t
return s},
jO:function jO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jY:function jY(a,b){this.a=a
this.b=b},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
kj:function kj(){},
kk:function kk(a,b){this.a=a
this.b=b},
km:function km(){},
k9:function k9(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b6:function b6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ft:function ft(){},
i0:function i0(){},
c2:function c2(){this.b=this.a=null},
fR:function fR(){},
iv:function iv(){},
cd:function cd(){this.a=null},
hT:function hT(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(a){this.a=a
this.b=null},
hV:function hV(a){this.a=a
this.b=null},
hW:function hW(a){this.a=a
this.b=null},
bi:function bi(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j0:function j0(a){this.a=a},
j_:function j_(a){this.a=a},
iR:function iR(a){this.a=a
this.c=this.b=null},
iS:function iS(){this.d=this.c=this.b=null},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(){this.c=this.b=null},
iX:function iX(){},
iW:function iW(){},
iY:function iY(){},
hx:function hx(){},
iZ:function iZ(){this.b=null}},T={dz:function dz(){},ih:function ih(){var _=this
_.e=_.d=_.c=_.b=_.a=null},ii:function ii(a){var _=this
_.a=a
_.e=_.d=_.c=null},ij:function ij(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=null,a4=34067,a5="modifiers",a6=V.nv("Test 022"),a7=W.kt()
a7.className="pageLargeCanvas"
a7.id=a2
a6.a.appendChild(a7)
u=[P.h]
a6.dd(H.b(["Test of the Material Lighting shader with a textured point light."],u))
a6.hd(H.b(["shapes"],u))
a6.dd(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a2)
if(t==null)H.q(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.nA(t,!0,!0,!0,!1)
r=s.f
q=r.a
p=q.createTexture()
q.bindTexture(a4,p)
q.texParameteri(a4,10242,10497)
q.texParameteri(a4,10243,10497)
q.texParameteri(a4,10241,9729)
q.texParameteri(a4,10240,9729)
q.bindTexture(a4,a3)
o=new T.ih()
o.a=0
o.b=p
o.c=!1
o.d=0
r.aK(o,p,"../resources/earthColor/posx.png",34069,!1,!1)
r.aK(o,p,"../resources/earthColor/negx.png",34070,!1,!1)
r.aK(o,p,"../resources/earthColor/posy.png",34071,!1,!1)
r.aK(o,p,"../resources/earthColor/negy.png",34072,!1,!1)
r.aK(o,p,"../resources/earthColor/posz.png",34073,!1,!1)
r.aK(o,p,"../resources/earthColor/negz.png",34074,!1,!1)
n=U.kA()
n.n(0,U.f6(V.lq(0,0,2)))
r=new U.dq()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.see(0)
r.se2(0,0)
r.se8(0)
q=r.d
if(!(Math.abs(q-0.5)<$.A().a)){r.d=0.5
q=new D.z("deltaYaw",q,0.5)
q.b=!0
r.I(q)}q=r.e
if(!(Math.abs(q-0.5)<$.A().a)){r.e=0.5
q=new D.z("deltaPitch",q,0.5)
q.b=!0
r.I(q)}q=r.f
if(!(Math.abs(q-0)<$.A().a)){r.f=0
q=new D.z("deltaRoll",q,0)
q.b=!0
r.I(q)}n.n(0,r)
m=E.ky()
r=U.kA()
r.n(0,U.f6(V.kJ(0.2,0.2,0.2,1)))
r.n(0,n)
m.saT(r)
m.sad(0,F.mg(8,8))
r=O.lm()
q=r.f
l=q.c
if(!l.c)q.bU(new A.a_(l.a,!1,!0))
l=q.e
if(l!==o){if(l!=null)l.gv().M(0,q.gbg())
k=q.e
q.e=o
o.gv().n(0,q.gbg())
l=new D.z(q.b+".textureCube",k,q.e)
l.b=!0
q.a.a_(l)}m.sba(r)
j=new D.bx()
j.c=new V.X(1,1,1)
j.r=1
j.y=j.x=0
j.z=!0
j.a=V.c7()
k=j.b
j.b=n
n.gv().n(0,j.gbA())
r=new D.z("mover",k,j.b)
r.b=!0
j.a7(r)
i=new V.X(1,1,1)
if(!j.c.q(0,i)){k=j.c
j.c=i
r=new D.z("color",k,i)
r.b=!0
j.a7(r)}r=j.d
if(r!==o){if(r!=null)r.gv().M(0,j.gbA())
k=j.d
j.d=o
o.gv().n(0,j.gbA())
r=new D.z("texture",k,j.d)
r.b=!0
j.a7(r)}r=$.lP
if(r==null){r=new V.cr(1,0.00390625,0.0000152587890625,0)
$.lP=r
h=r}else h=r
if(!J.E(j.f,h)){k=j.f
j.f=h
r=new D.z("shadowAdjust",k,h)
r.b=!0
j.a7(r)}r=j.r
if(!(Math.abs(r-1)<$.A().a)){j.r=1
r=new D.z("attenuation0",r,1)
r.b=!0
j.a7(r)}r=j.x
if(!(Math.abs(r-0.15)<$.A().a)){j.x=0.15
r=new D.z("attenuation1",r,0.15)
r.b=!0
j.a7(r)}r=j.y
if(!(Math.abs(r-0.05)<$.A().a)){j.y=0.05
r=new D.z("attenuation2",r,0.05)
r.b=!0
j.a7(r)}g=O.lm()
g.dx.n(0,j)
r=g.r
r.saQ(0,new V.X(0.1,0.1,0.1))
r=g.x
r.saQ(0,new V.X(1,1,1))
r=g.z
r.saQ(0,new V.X(1,1,1))
r=g.z
r.bU(new A.a_(!0,!1,r.c.c))
r.d3(100)
f=E.ky()
f.saT(U.f6(V.kJ(3,3,3,1)))
r=F.kY(1,a3,a3,1)
r.ci()
f.sad(0,r)
e=E.ky()
e.sad(0,F.mi())
d=U.kA()
r=s.x
q=new U.dL()
l=U.kv()
l.scz(0,!0)
l.scm(6.283185307179586)
l.sco(0)
l.sY(0,0)
l.scn(100)
l.sW(0)
l.sc7(0.5)
q.b=l
c=q.gaL()
l.gv().n(0,c)
l=U.kv()
l.scz(0,!0)
l.scm(6.283185307179586)
l.sco(0)
l.sY(0,0)
l.scn(100)
l.sW(0)
l.sc7(0.5)
q.c=l
l.gv().n(0,c)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
b=new X.aj(!1,!1,!1)
k=q.d
q.d=b
l=new D.z(a5,k,b)
l.b=!0
q.I(l)
l=q.f
if(l!==!1){q.f=!1
l=new D.z("invertX",l,!1)
l.b=!0
q.I(l)}l=q.r
if(l!==!1){q.r=!1
l=new D.z("invertY",l,!1)
l.b=!0
q.I(l)}q.b1(r)
d.n(0,q)
r=s.x
q=new U.dK()
l=U.kv()
l.scz(0,!0)
l.scm(6.283185307179586)
l.sco(0)
l.sY(0,0)
l.scn(100)
l.sW(0)
l.sc7(0.2)
q.b=l
l.gv().n(0,q.gaL())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
b=new X.aj(!0,!1,!1)
k=q.c
q.c=b
l=new D.z(a5,k,b)
l.b=!0
q.I(l)
q.b1(r)
d.n(0,q)
r=s.x
q=new U.dM()
q.c=0.01
q.e=q.d=0
b=new X.aj(!1,!1,!1)
q.b=b
l=new D.z(a5,a3,b)
l.b=!0
q.I(l)
q.b1(r)
d.n(0,q)
d.n(0,U.f6(V.lq(0,0,5)))
a=new M.d0()
a.a=!0
r=O.ku(E.aP)
a.e=r
r.be(a.gfb(),a.gfd())
a.y=a.x=a.r=a.f=null
a0=X.mX(a3)
a1=new X.dk()
a1.c=1.0471975511965976
a1.d=0.1
a1.e=2000
a1.saT(a3)
r=a1.c
if(!(Math.abs(r-1.0471975511965976)<$.A().a)){a1.c=1.0471975511965976
r=new D.z("fov",r,1.0471975511965976)
r.b=!0
a1.aI(r)}r=a1.d
if(!(Math.abs(r-0.1)<$.A().a)){a1.d=0.1
r=new D.z("near",r,0.1)
r.b=!0
a1.aI(r)}r=a1.e
if(!(Math.abs(r-2000)<$.A().a)){a1.e=2000
r=new D.z("far",r,2000)
r.b=!0
a1.aI(r)}r=a.b
if(r!==a1){if(r!=null)r.gv().M(0,a.gar())
k=a.b
a.b=a1
a1.gv().n(0,a.gar())
r=new D.z("camera",k,a.b)
r.b=!0
a.aw(r)}r=a.c
if(r!==a0){if(r!=null)r.gv().M(0,a.gar())
k=a.c
a.c=a0
a0.gv().n(0,a.gar())
r=new D.z("target",k,a.c)
r.b=!0
a.aw(r)}a.sba(a3)
a.sba(g)
a.e.n(0,f)
a.e.n(0,e)
a.e.n(0,m)
a.b.saT(d)
r=s.d
if(r!==a){if(r!=null)r.gv().M(0,s.gcI())
s.d=a
a.gv().n(0,s.gcI())
s.cJ()}r=new V.hH("shapes")
u=u.getElementById("shapes")
r.c=u
if(u==null)H.q("Failed to find shapes for RadioGroup")
r.b0(0,"Cube",new T.ka(e))
r.b0(0,"Cylinder",new T.kb(e))
r.b0(0,"Cone",new T.kc(e))
r.b0(0,"Sphere",new T.kd(e))
r.da(0,"Toroid",new T.ke(e),!0)
r.b0(0,"Knot",new T.kf(e))
u=s.Q
if(u==null)u=s.Q=D.I()
r=u.b
u=r==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Y]}]):r
u.push(new T.kg(a6,g))
V.p6(s)},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kE.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gJ:function(a){return H.ce(a)},
i:function(a){return"Instance of '"+H.e(H.cf(a))+"'"}}
J.fL.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iaJ:1}
J.d6.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.d7.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)},
$in2:1}
J.hC.prototype={}
J.bE.prototype={}
J.b9.prototype={
i:function(a){var u=a[$.mk()]
if(u==null)return this.ep(a)
return"JavaScript function for "+H.e(J.a4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b7.prototype={
ct:function(a,b){if(!!a.fixed$length)H.q(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dm(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.q(P.y("remove"))
for(u=0;u<a.length;++u)if(J.E(a[u],b)){a.splice(u,1)
return!0}return!1},
ag:function(a,b){var u,t
if(!!a.fixed$length)H.q(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aN(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hP:function(a){return this.j(a,"")},
hI:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aN(a))}return u},
hJ:function(a,b,c){return this.hI(a,b,c,null)},
hH:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aN(a))}throw H.c(H.fJ())},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
el:function(a,b,c){if(b<0||b>a.length)throw H.c(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.Z(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aK(a,0)])
return H.b(a.slice(b,c),[H.aK(a,0)])},
ghG:function(a){if(a.length>0)return a[0]
throw H.c(H.fJ())},
gav:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fJ())},
de:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aN(a))}return!1},
aX:function(a,b){if(!!a.immutable$list)H.q(P.y("sort"))
H.ny(a,b==null?J.ob():b)},
ek:function(a){return this.aX(a,null)},
P:function(a,b){var u
for(u=0;u<a.length;++u)if(J.E(a[u],b))return!0
return!1},
i:function(a){return P.kB(a,"[","]")},
gU:function(a){return new J.a5(a,a.length)},
gJ:function(a){return H.ce(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.q(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kq(b,u,null))
if(b<0)throw H.c(P.Z(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bN(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.q(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bN(a,b))
a[b]=c},
$ir:1,
$ij:1,
$io:1}
J.kD.prototype={}
J.a5.prototype={
gC:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c1.prototype={
aR:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ab(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbo(b)
if(this.gbo(a)===u)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
il:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.y(""+a+".toInt()"))},
cj:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
eb:function(a,b){var u
if(b>20)throw H.c(P.Z(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+u
return u},
bb:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.Z(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.p("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.ab(b))
return a*b},
bd:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
er:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d5(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d5(a,b)},
d5:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.d4(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h6:function(a,b){if(b<0)throw H.c(H.ab(b))
return this.d4(a,b)},
d4:function(a,b){return b>31?0:a>>>b},
$iL:1,
$iac:1}
J.d5.prototype={$iw:1}
J.d4.prototype={}
J.b8.prototype={
X:function(a,b){if(b<0)throw H.c(H.bN(a,b))
if(b>=a.length)H.q(H.bN(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.bN(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.kq(b,null,null))
return a+b},
aV:function(a,b,c,d){var u,t
c=P.aV(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ab(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a5(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ab(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.c(P.dm(b,null))
if(b>c)throw H.c(P.dm(b,null))
if(c>a.length)throw H.c(P.dm(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.t(a,b,null)},
ip:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aj:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
bn:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dM:function(a,b){return this.bn(a,b,0)},
aR:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ab(b))
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
gl:function(a){return a.length},
$ih:1}
H.n.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.X(this.a,b)},
$ar:function(){return[P.w]},
$ax:function(){return[P.w]},
$aj:function(){return[P.w]},
$ao:function(){return[P.w]}}
H.r.prototype={}
H.da.prototype={
gU:function(a){return new H.ba(this,this.gl(this))},
bw:function(a,b){return this.eo(0,b)}}
H.ba.prototype={
gC:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.bl(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aN(s))
u=t.c
if(typeof q!=="number")return H.t(q)
if(u>=q){t.d=null
return!1}t.d=r.L(s,u);++t.c
return!0}}
H.c4.prototype={
gU:function(a){return new H.h1(J.aL(this.a),this.b)},
gl:function(a){return J.ah(this.a)},
L:function(a,b){return this.b.$1(J.eO(this.a,b))},
$aj:function(a,b){return[b]}}
H.fn.prototype={$ir:1,
$ar:function(a,b){return[b]}}
H.h1.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.h2.prototype={
gl:function(a){return J.ah(this.a)},
L:function(a,b){return this.b.$1(J.eO(this.a,b))},
$ar:function(a,b){return[b]},
$ada:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cs.prototype={
gU:function(a){return new H.j3(J.aL(this.a),this.b)}}
H.j3.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.d1.prototype={}
H.iG.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dH.prototype={}
H.f7.prototype={
i:function(a){return P.kI(this)},
m:function(a,b,c){return H.mS()},
$iR:1}
H.f8.prototype={
gl:function(a){return this.a},
c4:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c4(0,b))return
return this.cU(b)},
cU:function(a){return this.b[a]},
G:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cU(s))}}}
H.it.prototype={
ai:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fO.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iF.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kn.prototype={
$1:function(a){if(!!J.P(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.em.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bU.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cK(t==null?"unknown":t)+"'"},
git:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.id.prototype={}
H.i5.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cK(u)+"'"}}
H.bS.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bS))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.ce(this.a)
else u=typeof t!=="object"?J.cO(t):H.ce(t)
return(u^H.ce(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cf(u))+"'")}}
H.f1.prototype={
i:function(a){return this.a}}
H.hQ.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.J.prototype={
gl:function(a){return this.a},
ghO:function(a){return this.a===0},
ga0:function(a){return new H.fT(this,[H.aK(this,0)])},
gis:function(a){var u=this
return H.na(u.ga0(u),new H.fN(u),H.aK(u,0),H.aK(u,1))},
c4:function(a,b){var u=this.b
if(u==null)return!1
return this.eP(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bh(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bh(r,b)
s=t==null?null:t.b
return s}else return q.hM(b)},
hM:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cW(r,s.dN(a))
t=s.dO(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cM(u==null?s.b=s.bP():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cM(t==null?s.c=s.bP():t,b,c)}else s.hN(b,c)},
hN:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bP()
u=r.dN(a)
t=r.cW(q,u)
if(t==null)r.bV(q,u,[r.bQ(a,b)])
else{s=r.dO(t,a)
if(s>=0)t[s].b=b
else t.push(r.bQ(a,b))}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aN(u))
t=t.c}},
cM:function(a,b,c){var u=this.bh(a,b)
if(u==null)this.bV(a,b,this.bQ(b,c))
else u.b=c},
f_:function(){this.r=this.r+1&67108863},
bQ:function(a,b){var u,t=this,s=new H.fS(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.f_()
return s},
dN:function(a){return J.cO(a)&0x3ffffff},
dO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1},
i:function(a){return P.kI(this)},
bh:function(a,b){return a[b]},
cW:function(a,b){return a[b]},
bV:function(a,b,c){a[b]=c},
eT:function(a,b){delete a[b]},
eP:function(a,b){return this.bh(a,b)!=null},
bP:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bV(t,u,t)
this.eT(t,u)
return t}}
H.fN.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aK(u,1),args:[H.aK(u,0)]}}}
H.fS.prototype={}
H.fT.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fU(u,u.r)
t.c=u.e
return t}}
H.fU.prototype={
gC:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aN(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k5.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.k6.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k7.prototype={
$1:function(a){return this.a(a)}}
H.fM.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inr:1}
H.ca.prototype={$ica:1}
H.bc.prototype={$ibc:1}
H.de.prototype={
gl:function(a){return a.length},
$iC:1,
$aC:function(){}}
H.cb.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aI(b,a,a.length)
a[b]=c},
$ir:1,
$ar:function(){return[P.L]},
$ax:function(){return[P.L]},
$ij:1,
$aj:function(){return[P.L]},
$io:1,
$ao:function(){return[P.L]}}
H.df.prototype={
m:function(a,b,c){H.aI(b,a,a.length)
a[b]=c},
$ir:1,
$ar:function(){return[P.w]},
$ax:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
H.hq.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.hr.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.hs.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.ht.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.hu.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.dg.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.cc.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aI(b,a,a.length)
return a[b]},
$icc:1,
$ibC:1}
H.cw.prototype={}
H.cx.prototype={}
H.cy.prototype={}
H.cz.prototype={}
P.j5.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.j4.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j6.prototype={
$0:function(){this.a.$0()}}
P.j7.prototype={
$0:function(){this.a.$0()}}
P.es.prototype={
eF:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bM(new P.jE(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
eG:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bM(new P.jD(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idB:1}
P.jE.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jD.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.er(u,q)}s.c=r
t.d.$1(s)}}
P.bF.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bG.prototype={
gC:function(a){var u=this.c
if(u==null)return this.b
return u.gC(u)},
u:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.u())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bF){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aL(u)
if(!!r.$ibG){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jA.prototype={
gU:function(a){return new P.bG(this.a())}}
P.dP.prototype={}
P.dw.prototype={}
P.i8.prototype={}
P.dB.prototype={}
P.jN.prototype={}
P.jW.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dj():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jl.prototype={
ih:function(a){var u,t,s,r=null
try{if(C.f===$.aq){a.$0()
return}P.oA(r,r,this,a)}catch(s){u=H.ag(s)
t=H.l_(s)
P.m_(r,r,this,u,t)}},
ii:function(a,b){var u,t,s,r=null
try{if(C.f===$.aq){a.$1(b)
return}P.oB(r,r,this,a,b)}catch(s){u=H.ag(s)
t=H.l_(s)
P.m_(r,r,this,u,t)}},
ij:function(a,b){return this.ii(a,b,null)},
ho:function(a){return new P.jm(this,a)},
dg:function(a,b){return new P.jn(this,a,b)}}
P.jm.prototype={
$0:function(){return this.a.ih(this.b)}}
P.jn.prototype={
$1:function(a){return this.a.ij(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ji.prototype={
gU:function(a){var u=new P.e3(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
P:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eO(b)
return t}},
eO:function(a){var u=this.d
if(u==null)return!1
return this.bG(this.cV(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cO(u==null?s.b=P.kQ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cO(t==null?s.c=P.kQ():t,b)}else return s.eI(0,b)},
eI:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kQ()
u=s.cQ(b)
t=r[u]
if(t==null)r[u]=[s.bD(b)]
else{if(s.bG(t,b)>=0)return!1
t.push(s.bD(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fU(this.c,b)
else return this.fT(0,b)},
fT:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cV(r,b)
t=s.bG(u,b)
if(t<0)return!1
s.d7(u.splice(t,1)[0])
return!0},
cO:function(a,b){if(a[b]!=null)return!1
a[b]=this.bD(b)
return!0},
fU:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d7(u)
delete a[b]
return!0},
cP:function(){this.r=1073741823&this.r+1},
bD:function(a){var u,t=this,s=new P.jj(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cP()
return s},
d7:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cP()},
cQ:function(a){return J.cO(a)&1073741823},
cV:function(a,b){return a[this.cQ(b)]},
bG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1}}
P.jj.prototype={}
P.e3.prototype={
gC:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aN(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fI.prototype={}
P.fV.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fW.prototype={$ir:1,$ij:1,$io:1}
P.x.prototype={
gU:function(a){return new H.ba(a,this.gl(a))},
L:function(a,b){return this.h(a,b)},
io:function(a,b){var u,t,s=this,r=H.b([],[H.oT(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
im:function(a){return this.io(a,!0)},
hE:function(a,b,c,d){var u
P.aV(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kB(a,"[","]")}}
P.fZ.prototype={}
P.h_.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a1.prototype={
G:function(a,b){var u,t
for(u=J.aL(this.ga0(a));u.u();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.ah(this.ga0(a))},
i:function(a){return P.kI(a)},
$iR:1}
P.jF.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.h0.prototype={
h:function(a,b){return J.bR(this.a,b)},
m:function(a,b,c){J.kp(this.a,b,c)},
G:function(a,b){J.l9(this.a,b)},
gl:function(a){return J.ah(this.a)},
i:function(a){return J.a4(this.a)},
$iR:1}
P.dI.prototype={}
P.jp.prototype={
ag:function(a,b){var u
for(u=J.aL(b);u.u();)this.n(0,u.gC(u))},
i:function(a){return P.kB(this,"{","}")},
L:function(a,b){var u,t,s
P.lw(b,"index")
for(u=P.nS(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
$ir:1,
$ij:1}
P.e4.prototype={}
P.ey.prototype={}
P.eY.prototype={
hS:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aV(a0,a1,b.length)
u=$.mz()
if(typeof a1!=="number")return H.t(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k4(C.a.F(b,n))
j=H.k4(C.a.F(b,n+1))
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
g=r.a+=C.a.t(b,s,t)
r.a=g+H.bz(m)
s=n
continue}}throw H.c(P.T("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.t(b,s,a1)
f=g.length
if(q>=0)P.ld(b,p,a1,q,o,f)
else{e=C.c.bd(f-1,4)+1
if(e===1)throw H.c(P.T(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aV(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.ld(b,p,a1,q,o,d)
else{e=C.c.bd(d,4)
if(e===1)throw H.c(P.T(c,b,a1))
if(e>1)b=C.a.aV(b,a1,a1,e===2?"==":"=")}return b}}
P.eZ.prototype={}
P.f3.prototype={}
P.f9.prototype={}
P.fp.prototype={}
P.fG.prototype={
i:function(a){return this.a}}
P.fF.prototype={
eQ:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.a.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mK(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iO.prototype={
ghD:function(){return C.M}}
P.iQ.prototype={
c5:function(a){var u,t,s,r=P.aV(0,null,a.length)
if(typeof r!=="number")return r.K()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jL(t)
if(s.eV(a,0,r)!==r)s.d9(J.mG(a,r-1),0)
return new Uint8Array(t.subarray(0,H.o8(0,s.b,t.length)))}}
P.jL.prototype={
d9:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eV:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d9(r,C.a.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iP.prototype={
c5:function(a){var u,t,s,r,q,p,o,n,m=P.nE(!1,a,0,null)
if(m!=null)return m
u=P.aV(0,null,J.ah(a))
t=P.m1(a,0,u)
if(t>0){s=P.ci(a,0,t)
if(t===u)return s
r=new P.S(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.S("")
o=new P.jK(!1,r)
o.c=p
o.hs(a,q,u)
if(o.e>0){H.q(P.T("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bz(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jK.prototype={
hs:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bl(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.aa()
if((r&192)!==128){q=P.T(k+C.c.bb(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.T("Overlong encoding of 0x"+C.c.bb(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.T("Character outside valid Unicode range: 0x"+C.c.bb(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bz(j)
l.c=!1}if(typeof c!=="number")return H.t(c)
q=s<c
for(;q;){p=P.m1(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.ci(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.T("Negative UTF-8 code unit: -0x"+C.c.bb(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.T(k+C.c.bb(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aJ.prototype={}
P.ad.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ad&&this.a===b.a&&!0},
aR:function(a,b){return C.c.aR(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.c.aN(u,30))&1073741823},
i:function(a){var u=this,t=P.mT(H.nn(u)),s=P.cX(H.nl(u)),r=P.cX(H.nh(u)),q=P.cX(H.ni(u)),p=P.cX(H.nk(u)),o=P.cX(H.nm(u)),n=P.mU(H.nj(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.L.prototype={}
P.b5.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
aR:function(a,b){return C.c.aR(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fm(),q=this.a
if(q<0)return"-"+new P.b5(0-q).i(0)
u=r.$1(C.c.a3(q,6e7)%60)
t=r.$1(C.c.a3(q,1e6)%60)
s=new P.fl().$1(q%1e6)
return""+C.c.a3(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fl.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fm.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.br.prototype={}
P.dj.prototype={
i:function(a){return"Throw of null."}}
P.al.prototype={
gbF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbE:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbF()+o+u
if(!q.a)return t
s=q.gbE()
r=P.kz(q.b)
return t+s+": "+r}}
P.bA.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fH.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t=this.b
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iH.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iD.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ch.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f5.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kz(u)+"."}}
P.hB.prototype={
i:function(a){return"Out of Memory"},
$ibr:1}
P.du.prototype={
i:function(a){return"Stack Overflow"},
$ibr:1}
P.fe.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dX.prototype={
i:function(a){return"Exception: "+this.a}}
P.fz.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.t(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.F(f,q)
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
k=""}j=C.a.t(f,m,n)
return h+l+j+k+"\n"+C.a.p(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fB.prototype={}
P.w.prototype={}
P.j.prototype={
bw:function(a,b){return new H.cs(this,b,[H.kZ(this,"j",0)])},
gl:function(a){var u,t=this.gU(this)
for(u=0;t.u();)++u
return u},
gaG:function(a){var u,t=this.gU(this)
if(!t.u())throw H.c(H.fJ())
u=t.gC(t)
if(t.u())throw H.c(H.n_())
return u},
L:function(a,b){var u,t,s
P.lw(b,"index")
for(u=this.gU(this),t=0;u.u();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
i:function(a){return P.mZ(this,"(",")")}}
P.fK.prototype={}
P.o.prototype={$ir:1,$ij:1}
P.R.prototype={}
P.bd.prototype={
gJ:function(a){return P.a2.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
q:function(a,b){return this===b},
gJ:function(a){return H.ce(this)},
i:function(a){return"Instance of '"+H.e(H.cf(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iM.prototype={
$2:function(a,b){var u,t,s,r=J.cI(b).dM(b,"=")
if(r===-1){if(b!=="")J.kp(a,P.kU(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.t(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.kp(a,P.kU(u,0,u.length,s,!0),P.kU(t,0,t.length,s,!0))}return a}}
P.iJ.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv4 address, "+a,this.a,b))}}
P.iK.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iL.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eM(C.a.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bH.prototype={
ged:function(){return this.b},
gck:function(a){var u=this.c
if(u==null)return""
if(C.a.a2(u,"["))return C.a.t(u,1,u.length-1)
return u},
gbq:function(a){var u=this.d
if(u==null)return P.lT(this.a)
return u},
gcr:function(a){var u=this.f
return u==null?"":u},
gdG:function(){var u=this.r
return u==null?"":u},
e6:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a2(u,"/"))u="/"+u
s=P.kS(null,0,0,b)
return new P.bH(q,o,m,n,u,s,r.r)},
gcs:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dI(P.lI(t==null?"":t),[u,u])
t=u}return t},
gdH:function(){return this.c!=null},
gdK:function(){return this.f!=null},
gdI:function(){return this.r!=null},
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
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.P(b).$ikN)if(s.a==b.gbx())if(s.c!=null===b.gdH())if(s.b==b.ged())if(s.gck(s)==b.gck(b))if(s.gbq(s)==b.gbq(b))if(s.e===b.ge1(b)){u=s.f
t=u==null
if(!t===b.gdK()){if(t)u=""
if(u===b.gcr(b)){u=s.r
t=u==null
if(!t===b.gdI()){if(t)u=""
u=u===b.gdG()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.a.gJ(this.i(0)):u},
$ikN:1,
gbx:function(){return this.a},
ge1:function(a){return this.e}}
P.jG.prototype={
$1:function(a){throw H.c(P.T("Invalid port",this.a,this.b+1))}}
P.jH.prototype={
$1:function(a){return P.ez(C.W,a,C.e,!1)}}
P.jJ.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.ez(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.ez(C.h,b,C.e,!0))}}}
P.jI.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aL(b),t=this.a;u.u();)t.$2(a,u.gC(u))}}
P.iI.prototype={
gec:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bn(u,"?",o)
s=u.length
if(t>=0){r=P.cE(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jb("data",p,p,p,P.cE(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jR.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jQ.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mH(u,0,96,b)
return u},
$S:17}
P.jS.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.F(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jT.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.F(b,0),t=C.a.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.js.prototype={
gdH:function(){return this.c>0},
gdJ:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.t(t)
t=u+1<t
u=t}else u=!1
return u},
gdK:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdI:function(){return this.r<this.a.length},
gcX:function(){return this.b===4&&C.a.a2(this.a,"http")},
gcY:function(){return this.b===5&&C.a.a2(this.a,"https")},
gbx:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcX())q=t.x="http"
else if(t.gcY()){t.x="https"
q="https"}else if(q===4&&C.a.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a2(t.a,r)){t.x=r
q=r}else{q=C.a.t(t.a,0,q)
t.x=q}return q},
ged:function(){var u=this.c,t=this.b+3
return u>t?C.a.t(this.a,t,u-1):""},
gck:function(a){var u=this.c
return u>0?C.a.t(this.a,u,this.d):""},
gbq:function(a){var u,t=this
if(t.gdJ()){u=t.d
if(typeof u!=="number")return u.B()
return P.eM(C.a.t(t.a,u+1,t.e),null,null)}if(t.gcX())return 80
if(t.gcY())return 443
return 0},
ge1:function(a){return C.a.t(this.a,this.e,this.f)},
gcr:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.a.t(this.a,u+1,t):""},
gdG:function(){var u=this.r,t=this.a
return u<t.length?C.a.a6(t,u+1):""},
gcs:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.X
t=P.h
return new P.dI(P.lI(u.gcr(u)),[t,t])},
e6:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbx(),m=n==="file",l=p.c,k=l>0?C.a.t(p.a,p.b+3,l):"",j=p.gdJ()?p.gbq(p):o
l=p.c
if(l>0)u=C.a.t(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.t(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a2(t,"/"))t="/"+t
r=P.kS(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bH(n,k,u,j,t,r,q)},
gJ:function(a){var u=this.y
return u==null?this.y=C.a.gJ(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ikN&&this.a===b.i(0)},
i:function(a){return this.a},
$ikN:1}
P.jb.prototype={}
W.p.prototype={}
W.eP.prototype={
gl:function(a){return a.length}}
W.eQ.prototype={
i:function(a){return String(a)}}
W.eR.prototype={
i:function(a){return String(a)}}
W.bo.prototype={$ibo:1}
W.bp.prototype={$ibp:1}
W.bq.prototype={
cA:function(a,b,c){if(c!=null)return a.getContext(b,P.oK(c))
return a.getContext(b)},
eg:function(a,b){return this.cA(a,b,null)},
$ibq:1}
W.b3.prototype={
gl:function(a){return a.length}}
W.fa.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bV.prototype={
gl:function(a){return a.length}}
W.fb.prototype={}
W.ai.prototype={}
W.at.prototype={}
W.fc.prototype={
gl:function(a){return a.length}}
W.fd.prototype={
gl:function(a){return a.length}}
W.fg.prototype={
gl:function(a){return a.length}}
W.am.prototype={$iam:1}
W.fi.prototype={
i:function(a){return String(a)}}
W.cZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[[P.a9,P.ac]]},
$iC:1,
$aC:function(){return[[P.a9,P.ac]]},
$ax:function(){return[[P.a9,P.ac]]},
$ij:1,
$aj:function(){return[[P.a9,P.ac]]},
$io:1,
$ao:function(){return[[P.a9,P.ac]]}}
W.d_.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaF(a))+" x "+H.e(this.gaC(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia9&&a.left===u.gbp(b)&&a.top===u.gbt(b)&&this.gaF(a)===u.gaF(b)&&this.gaC(a)===u.gaC(b)},
gJ:function(a){return W.lR(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gaF(a)),C.d.gJ(this.gaC(a)))},
gdh:function(a){return a.bottom},
gaC:function(a){return a.height},
gbp:function(a){return a.left},
gbs:function(a){return a.right},
gbt:function(a){return a.top},
gaF:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.ac]}}
W.fj.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[P.h]},
$iC:1,
$aC:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
W.fk.prototype={
gl:function(a){return a.length}}
W.j9.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.im(this)
return new J.a5(u,u.length)},
$ar:function(){return[W.Q]},
$ax:function(){return[W.Q]},
$aj:function(){return[W.Q]},
$ao:function(){return[W.Q]}}
W.Q.prototype={
ghn:function(a){return new W.jc(a)},
gc3:function(a){return new W.j9(a,a.children)},
gdi:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
ah:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lj
if(u==null){u=H.b([],[W.aT])
t=new W.di(u)
u.push(W.lQ(null))
u.push(W.lS())
$.lj=t
d=t}else d=u
u=$.li
if(u==null){u=new W.eA(d)
$.li=u
c=u}else{u.a=d
c=u}}if($.aO==null){u=document
t=u.implementation.createHTMLDocument("")
$.aO=t
$.kx=t.createRange()
s=$.aO.createElement("base")
s.href=u.baseURI
$.aO.head.appendChild(s)}u=$.aO
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aO
if(!!this.$ibp)r=u.body
else{r=u.createElement(a.tagName)
$.aO.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.P(C.U,a.tagName)){$.kx.selectNodeContents(r)
q=$.kx.createContextualFragment(b)}else{r.innerHTML=b
q=$.aO.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aO.body
if(r==null?u!=null:r!==u)J.lb(r)
c.cB(q)
document.adoptNode(q)
return q},
hv:function(a,b,c){return this.ah(a,b,c,null)},
ei:function(a,b){a.textContent=null
a.appendChild(this.ah(a,b,null,null))},
$iQ:1,
ge9:function(a){return a.tagName}}
W.fo.prototype={
$1:function(a){return!!J.P(a).$iQ}}
W.i.prototype={$ii:1}
W.f.prototype={
he:function(a,b,c,d){if(c!=null)this.eJ(a,b,c,!1)},
eJ:function(a,b,c,d){return a.addEventListener(b,H.bM(c,1),!1)}}
W.an.prototype={$ian:1}
W.bY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.an]},
$iC:1,
$aC:function(){return[W.an]},
$ax:function(){return[W.an]},
$ij:1,
$aj:function(){return[W.an]},
$io:1,
$ao:function(){return[W.an]},
$ibY:1}
W.fu.prototype={
gl:function(a){return a.length}}
W.fy.prototype={
gl:function(a){return a.length}}
W.au.prototype={$iau:1}
W.fE.prototype={
gl:function(a){return a.length}}
W.c_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.F]},
$iC:1,
$aC:function(){return[W.F]},
$ax:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.aQ.prototype={$iaQ:1,
gdj:function(a){return a.data}}
W.c0.prototype={$ic0:1}
W.bw.prototype={$ibw:1}
W.fX.prototype={
i:function(a){return String(a)}}
W.hj.prototype={
gl:function(a){return a.length}}
W.c8.prototype={$ic8:1}
W.hk.prototype={
h:function(a,b){return P.aY(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aY(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.G(a,new W.hl(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hl.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hm.prototype={
h:function(a,b){return P.aY(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aY(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.G(a,new W.hn(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hn.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ay.prototype={$iay:1}
W.ho.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.ay]},
$iC:1,
$aC:function(){return[W.ay]},
$ax:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$io:1,
$ao:function(){return[W.ay]}}
W.az.prototype={$iaz:1}
W.a3.prototype={
gaG:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lz("No elements"))
if(t>1)throw H.c(P.lz("More than one element"))
return u.firstChild},
ag:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.d2(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ar:function(){return[W.F]},
$ax:function(){return[W.F]},
$aj:function(){return[W.F]},
$ao:function(){return[W.F]}}
W.F.prototype={
i9:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ie:function(a,b){var u,t
try{u=a.parentNode
J.mE(u,b,a)}catch(t){H.ag(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.en(a):u},
fW:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.dh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.F]},
$iC:1,
$aC:function(){return[W.F]},
$ax:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.aA.prototype={$iaA:1,
gl:function(a){return a.length}}
W.hE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aA]},
$iC:1,
$aC:function(){return[W.aA]},
$ax:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$io:1,
$ao:function(){return[W.aA]}}
W.hO.prototype={
h:function(a,b){return P.aY(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aY(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.G(a,new W.hP(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hR.prototype={
gl:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.i1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aC]},
$iC:1,
$aC:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$io:1,
$ao:function(){return[W.aC]}}
W.aD.prototype={$iaD:1}
W.i2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aD]},
$iC:1,
$aC:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$io:1,
$ao:function(){return[W.aD]}}
W.aE.prototype={$iaE:1,
gl:function(a){return a.length}}
W.i6.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga0:function(a){var u=H.b([],[P.h])
this.G(a,new W.i7(u))
return u},
gl:function(a){return a.length},
$aa1:function(){return[P.h,P.h]},
$iR:1,
$aR:function(){return[P.h,P.h]}}
W.i7.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ao.prototype={$iao:1}
W.dx.prototype={
ah:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=W.mV("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a3(t).ag(0,new W.a3(u))
return t}}
W.ia.prototype={
ah:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ah(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaG(u)
s.toString
u=new W.a3(s)
r=u.gaG(u)
t.toString
r.toString
new W.a3(t).ag(0,new W.a3(r))
return t}}
W.ib.prototype={
ah:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ah(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaG(u)
t.toString
s.toString
new W.a3(t).ag(0,new W.a3(s))
return t}}
W.cj.prototype={$icj:1}
W.aF.prototype={$iaF:1}
W.ap.prototype={$iap:1}
W.ie.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.ap]},
$iC:1,
$aC:function(){return[W.ap]},
$ax:function(){return[W.ap]},
$ij:1,
$aj:function(){return[W.ap]},
$io:1,
$ao:function(){return[W.ap]}}
W.ig.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aF]},
$iC:1,
$aC:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]},
$io:1,
$ao:function(){return[W.aF]}}
W.il.prototype={
gl:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.bB.prototype={$ibB:1}
W.iq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aG]},
$iC:1,
$aC:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$io:1,
$ao:function(){return[W.aG]}}
W.ir.prototype={
gl:function(a){return a.length}}
W.bg.prototype={}
W.iN.prototype={
i:function(a){return String(a)}}
W.j1.prototype={
gl:function(a){return a.length}}
W.bj.prototype={
ghy:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ghx:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibj:1}
W.ct.prototype={
fX:function(a,b){return a.requestAnimationFrame(H.bM(b,1))},
eU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ja.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.H]},
$iC:1,
$aC:function(){return[W.H]},
$ax:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.dS.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia9&&a.left===u.gbp(b)&&a.top===u.gbt(b)&&a.width===u.gaF(b)&&a.height===u.gaC(b)},
gJ:function(a){return W.lR(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaC:function(a){return a.height},
gaF:function(a){return a.width}}
W.jf.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.au]},
$iC:1,
$aC:function(){return[W.au]},
$ax:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]},
$io:1,
$ao:function(){return[W.au]}}
W.e9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.F]},
$iC:1,
$aC:function(){return[W.F]},
$ax:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.jt.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aE]},
$iC:1,
$aC:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$io:1,
$ao:function(){return[W.aE]}}
W.jy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.ao]},
$iC:1,
$aC:function(){return[W.ao]},
$ax:function(){return[W.ao]},
$ij:1,
$aj:function(){return[W.ao]},
$io:1,
$ao:function(){return[W.ao]}}
W.j8.prototype={
G:function(a,b){var u,t,s,r,q
for(u=this.ga0(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga0:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa1:function(){return[P.h,P.h]},
$aR:function(){return[P.h,P.h]}}
W.jc.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga0(this).length}}
W.jd.prototype={}
W.je.prototype={
$1:function(a){return this.a.$1(a)}}
W.cu.prototype={
ey:function(a){var u
if($.cv.ghO($.cv)){for(u=0;u<262;++u)$.cv.m(0,C.T[u],W.oV())
for(u=0;u<12;++u)$.cv.m(0,C.p[u],W.oW())}},
aO:function(a){return $.mA().P(0,W.bW(a))},
at:function(a,b,c){var u=$.cv.h(0,H.e(W.bW(a))+"::"+b)
if(u==null)u=$.cv.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaT:1}
W.M.prototype={
gU:function(a){return new W.d2(a,this.gl(a))}}
W.di.prototype={
aO:function(a){return C.b.de(this.a,new W.hw(a))},
at:function(a,b,c){return C.b.de(this.a,new W.hv(a,b,c))},
$iaT:1}
W.hw.prototype={
$1:function(a){return a.aO(this.a)}}
W.hv.prototype={
$1:function(a){return a.at(this.a,this.b,this.c)}}
W.eh.prototype={
eE:function(a,b,c,d){var u,t,s
this.a.ag(0,c)
u=b.bw(0,new W.jq())
t=b.bw(0,new W.jr())
this.b.ag(0,u)
s=this.c
s.ag(0,C.w)
s.ag(0,t)},
aO:function(a){return this.a.P(0,W.bW(a))},
at:function(a,b,c){var u=this,t=W.bW(a),s=u.c
if(s.P(0,H.e(t)+"::"+b))return u.d.hi(c)
else if(s.P(0,"*::"+b))return u.d.hi(c)
else{s=u.b
if(s.P(0,H.e(t)+"::"+b))return!0
else if(s.P(0,"*::"+b))return!0
else if(s.P(0,H.e(t)+"::*"))return!0
else if(s.P(0,"*::*"))return!0}return!1},
$iaT:1}
W.jq.prototype={
$1:function(a){return!C.b.P(C.p,a)}}
W.jr.prototype={
$1:function(a){return C.b.P(C.p,a)}}
W.jB.prototype={
at:function(a,b,c){if(this.eq(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.P(0,b)
return!1}}
W.jC.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jz.prototype={
aO:function(a){var u=J.P(a)
if(!!u.$icg)return!1
u=!!u.$ik
if(u&&W.bW(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.aO(a)},
$iaT:1}
W.d2.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bR(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aT.prototype={}
W.jo.prototype={}
W.eA.prototype={
cB:function(a){new W.jM(this).$2(a,null)},
b_:function(a,b){if(b==null)J.lb(a)
else b.removeChild(a)},
h1:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mI(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ag(r)}t="element unprintable"
try{t=J.a4(a)}catch(r){H.ag(r)}try{s=W.bW(a)
this.h0(a,b,p,t,s,o,n)}catch(r){if(H.ag(r) instanceof P.al)throw r
else{this.b_(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h0:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b_(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aO(a)){p.b_(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.at(a,"is",g)){p.b_(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga0(f)
t=H.b(u.slice(0),[H.aK(u,0)])
for(s=f.ga0(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.at(a,J.mL(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$icj)p.cB(a.content)}}
W.jM.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h1(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b_(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ag(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dR.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.cC.prototype={}
W.cD.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
P.ju.prototype={
cg:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bv:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.P(a)
if(!!u.$iad)return new Date(a.a)
if(!!u.$inr)throw H.c(P.iE("structured clone of RegExp"))
if(!!u.$ian)return a
if(!!u.$ibo)return a
if(!!u.$ibY)return a
if(!!u.$iaQ)return a
if(!!u.$ica||!!u.$ibc||!!u.$ic8)return a
if(!!u.$iR){t=p.cg(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.G(a,new P.jw(o,p))
return o.a}if(!!u.$io){t=p.cg(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hu(a,t)}if(!!u.$in2){t=p.cg(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hK(a,new P.jx(o,p))
return o.b}throw H.c(P.iE("structured clone of other type"))},
hu:function(a,b){var u,t=J.bl(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.t(s)
u=0
for(;u<s;++u){q=this.bv(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jw.prototype={
$2:function(a,b){this.a.a[a]=this.b.bv(b)},
$S:3}
P.jx.prototype={
$2:function(a,b){this.a.b[a]=this.b.bv(b)},
$S:3}
P.ex.prototype={$iaQ:1,
gdj:function(a){return this.a}}
P.jX.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jv.prototype={
hK:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fv.prototype={
gbi:function(){var u=this.b,t=H.kZ(u,"x",0)
return new H.c4(new H.cs(u,new P.fw(),[t]),new P.fx(),[t,W.Q])},
m:function(a,b,c){var u=this.gbi()
J.mJ(u.b.$1(J.eO(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ah(this.gbi().a)},
h:function(a,b){var u=this.gbi()
return u.b.$1(J.eO(u.a,b))},
gU:function(a){var u=P.kH(this.gbi(),!1,W.Q)
return new J.a5(u,u.length)},
$ar:function(){return[W.Q]},
$ax:function(){return[W.Q]},
$aj:function(){return[W.Q]},
$ao:function(){return[W.Q]}}
P.fw.prototype={
$1:function(a){return!!J.P(a).$iQ}}
P.fx.prototype={
$1:function(a){return H.l(a,"$iQ")}}
P.jk.prototype={
gbs:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.t(t)
return u+t},
gdh:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.t(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.P(b)
if(!!u.$ia9){t=q.a
if(t==u.gbp(b)){s=q.b
if(s==u.gbt(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gbs(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gdh(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.cO(t),r=u.b,q=J.cO(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.t(p)
p=C.c.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.t(t)
t=C.c.gJ(r+t)
return P.nR(P.jh(P.jh(P.jh(P.jh(0,s),q),p),t))}}
P.a9.prototype={
gbp:function(a){return this.a},
gbt:function(a){return this.b},
gaF:function(a){return this.c},
gaC:function(a){return this.d}}
P.aR.prototype={$iaR:1}
P.fQ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.aR]},
$ax:function(){return[P.aR]},
$ij:1,
$aj:function(){return[P.aR]},
$io:1,
$ao:function(){return[P.aR]}}
P.aU.prototype={$iaU:1}
P.hz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.aU]},
$ax:function(){return[P.aU]},
$ij:1,
$aj:function(){return[P.aU]},
$io:1,
$ao:function(){return[P.aU]}}
P.hG.prototype={
gl:function(a){return a.length}}
P.cg.prototype={$icg:1}
P.i9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.k.prototype={
gc3:function(a){return new P.fv(a,new W.a3(a))},
ah:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aT])
p.push(W.lQ(null))
p.push(W.lS())
p.push(new W.jz())
c=new W.eA(new W.di(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hv(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a3(s)
q=p.gaG(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aW.prototype={$iaW:1}
P.is.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.aW]},
$ax:function(){return[P.aW]},
$ij:1,
$aj:function(){return[P.aW]},
$io:1,
$ao:function(){return[P.aW]}}
P.e1.prototype={}
P.e2.prototype={}
P.ec.prototype={}
P.ed.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.bC.prototype={$ir:1,
$ar:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
P.eT.prototype={
gl:function(a){return a.length}}
P.eU.prototype={
h:function(a,b){return P.aY(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aY(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.G(a,new P.eV(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa1:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
P.eV.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eW.prototype={
gl:function(a){return a.length}}
P.bn.prototype={}
P.hA.prototype={
gl:function(a){return a.length}}
P.dQ.prototype={}
P.dp.prototype={
ik:function(a,b,c,d,e,f,g){var u,t=J.P(g)
if(!!t.$iaQ)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oL(g))
return}if(!!t.$ic0)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cP("Incorrect number or type of arguments"))}}
P.i4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return P.aY(a.item(b))},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[[P.R,,,]]},
$ax:function(){return[[P.R,,,]]},
$ij:1,
$aj:function(){return[[P.R,,,]]},
$io:1,
$ao:function(){return[[P.R,,,]]}}
P.ek.prototype={}
P.el.prototype={}
K.aM.prototype={
aD:function(a,b){return!0},
i:function(a){return"all"}}
K.d3.prototype={
aD:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aD(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bb.prototype={}
K.a7.prototype={
aD:function(a,b){return!this.em(0,b)},
i:function(a){return"!["+this.cF(0)+"]"}}
K.hJ.prototype={
aD:function(a,b){if(typeof b!=="number")return H.t(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bz(this.a),t=H.bz(this.b)
return u+".."+t}}
K.hS.prototype={
ev:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.v("May not create a Set with zero characters."))
u=P.w
t=new H.J([u,P.aJ])
for(s=new H.ba(a,a.gl(a));s.u();)t.m(0,s.d,!0)
r=P.kH(t.ga0(t),!0,u)
C.b.ek(r)
this.a=r},
aD:function(a,b){return C.b.P(this.a,b)},
i:function(a){return P.ci(this.a,0,null)}}
L.dv.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dF(this.a.k(0,b))
r.a=H.b([],[K.bb])
r.c=!1
this.c.push(r)
return r},
hF:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aD(0,a))return r}return},
i:function(a){return this.b},
d6:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.P(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga0(n),n=n.gU(n);n.u();){t=n.gC(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.P(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dC.prototype={
i:function(a){var u=H.l4(this.b,"\n","\\n"),t=H.l4(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dD.prototype={
aE:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.m)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.im.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dv(this,b)
u.c=H.b([],[L.dF])
this.a.m(0,b,u)}return u},
T:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dD(a)
u=P.h
t.c=new H.J([u,u])
this.b.m(0,a,t)}return t},
cw:function(a){return this.iq(a)},
iq:function(a){var u=this
return P.od(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cw(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.ct(c,0)
else{if(!t.u()){s=3
break}l=t.d}d.push(l);++o
k=g.hF(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.ci(d,0,null)
throw H.c(P.v("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.q(P.y("removeRange"))
P.aV(0,m,d.length)
d.splice(0,m-0)
C.b.ag(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.P(0,p.a)?7:8
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
if(g.d!=null){j=P.ci(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dC(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.P(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nP()
case 1:return P.nQ(q)}}},L.dC)},
i:function(a){var u,t=new P.S(""),s=this.d
if(s!=null)t.a=s.d6()+"\n"
for(s=this.a,s=s.gis(s),s=s.gU(s);s.u();){u=s.gC(s)
if(u!=this.d)t.a+=u.d6()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dF.prototype={
i:function(a){return this.b.b+": "+this.cF(0)}}
O.b4.prototype={
bz:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cC:function(a,b,c){this.b=b
this.c=a},
be:function(a,b){return this.cC(a,null,b)},
fG:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
f2:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.a5(u,u.length)},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kZ(s,"b4",0)]
if(s.fG(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.f2(t,H.b([b],r))}},
$ij:1}
O.c6.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.I():u},
aH:function(){var u=this.b
if(u!=null)u.E(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.b.gav(u)
else return V.c7()},
e4:function(a){var u=this.a
if(a==null)u.push(V.c7())
else u.push(a)
this.aH()},
cq:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}}}
E.f_.prototype={}
E.aP.prototype={
cN:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a5(u,u.length);u.u();){t=u.d
if(t.f==null)t.cN()}},
sad:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().M(0,s.gdX())
u=s.c
if(u!=null)u.gv().n(0,s.gdX())
t=new D.z("shape",r,s.c)
t.b=!0
s.am(t)}},
sba:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gv().M(0,s.gdZ())
u=s.f
s.f=a
if(a!=null)a.gv().n(0,s.gdZ())
s.cN()
t=new D.z("technique",u,s.f)
t.b=!0
s.am(t)}},
saT:function(a){var u,t,s=this
if(!J.E(s.r,a)){u=s.r
if(u!=null)u.gv().M(0,s.gdV())
if(a!=null)a.gv().n(0,s.gdV())
s.r=a
t=new D.z("mover",u,a)
t.b=!0
s.am(t)}},
ao:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ap(0,b,s):null
if(!J.E(q,s.x)){u=s.x
s.x=q
t=new D.z("matrix",u,q)
t.b=!0
s.am(t)}r=s.f
if(r!=null)r.ao(0,b)
for(r=s.y.a,r=new J.a5(r,r.length);r.u();)r.d.ao(0,b)},
aU:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga4(s))
else s.a.push(r.p(0,s.ga4(s)))
s.aH()
a.e5(t.f)
s=a.dy
u=(s&&C.b).gav(s)
if(u!=null&&t.d!=null)u.ic(a,t)
for(s=t.y.a,s=new J.a5(s,s.length);s.u();)s.d.aU(a)
a.e3()
a.dx.cq()},
am:function(a){var u=this.z
if(u!=null)u.E(a)},
Z:function(){return this.am(null)},
dY:function(a){this.e=null
this.am(a)},
hZ:function(){return this.dY(null)},
e_:function(a){this.am(a)},
i_:function(){return this.e_(null)},
dW:function(a){this.am(a)},
hY:function(){return this.dW(null)},
dU:function(a){this.am(a)},
hV:function(){return this.dU(null)},
hU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdT(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bs()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Z()},
hX:function(a,b){var u,t
for(u=b.gU(b),t=this.gdT();u.u();)u.gC(u).gv().M(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hK.prototype={
eu:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ad(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c6()
t=[V.aw]
u.a=H.b([],t)
u.gv().n(0,new E.hL(s))
s.cy=u
u=new O.c6()
u.a=H.b([],t)
u.gv().n(0,new E.hM(s))
s.db=u
u=new O.c6()
u.a=H.b([],t)
u.gv().n(0,new E.hN(s))
s.dx=u
u=H.b([],[O.dy])
s.dy=u
u.push(null)
s.fr=new H.J([P.h,A.dr])},
gi8:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.p(0,u.ga4(u))
s=u}return s},
e5:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gav(u):a)},
e3:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hL.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hM.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hN.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dA.prototype={
cK:function(a){this.e7()},
cJ:function(){return this.cK(null)},
ghL:function(){var u,t=this,s=Date.now(),r=C.c.a3(P.lh(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ad(s,!1)
return u/r},
d1:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.t(r)
u=C.d.cj(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.d.cj(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lC(C.n,s.gig())}},
e7:function(){if(!this.cx){this.cx=!0
var u=window
C.D.eU(u)
C.D.fX(u,W.m2(new E.ik(this),P.ac))}},
ib:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.d1()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ad(r,!1)
s.y=P.lh(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aH()
r=s.db
C.b.sl(r.a,0)
r.aH()
r=s.dx
C.b.sl(r.a,0)
r.aH()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aU(p.e)}s=p.Q
if(s!=null)s.E(null)}catch(q){u=H.ag(q)
t=H.l_(q)
P.l3("Error: "+H.e(u))
P.l3("Stack: "+H.e(t))
throw H.c(u)}}}
E.ik.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.ib()}}}
Z.dO.prototype={}
Z.cS.prototype={
c_:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ag(s)
t=P.v('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.j2.prototype={}
Z.cT.prototype={
aS:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
c_:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].c_(a)},
ir:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aU:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a4(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bt.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.cf(this.c))+"'")+"]"}}
Z.aX.prototype={
gcE:function(a){var u=this.a,t=(u&$.b1().a)!==0?3:0
if((u&$.b0().a)!==0)t+=3
if((u&$.b_().a)!==0)t+=3
if((u&$.bm().a)!==0)t+=2
if((u&$.b2().a)!==0)t+=3
if((u&$.cL().a)!==0)t+=3
if((u&$.cM().a)!==0)t+=4
if((u&$.bQ().a)!==0)++t
return(u&$.aZ().a)!==0?t+4:t},
hj:function(a){var u,t=$.b1(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aZ()
if((s&t.a)!==0)if(u===a)return t
return $.my()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aX))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.b1().a)!==0)u.push("Pos")
if((t&$.b0().a)!==0)u.push("Norm")
if((t&$.b_().a)!==0)u.push("Binm")
if((t&$.bm().a)!==0)u.push("Txt2D")
if((t&$.b2().a)!==0)u.push("TxtCube")
if((t&$.cL().a)!==0)u.push("Clr3")
if((t&$.cM().a)!==0)u.push("Clr4")
if((t&$.bQ().a)!==0)u.push("Weight")
if((t&$.aZ().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f2.prototype={}
D.bs.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Y]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.P(s,b)
if(s===!0){s=t.a
u=(s&&C.b).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.P(s,b)
if(s===!0){s=t.b
u=(s&&C.b).M(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.G(P.kH(u,!0,{func:1,ret:-1,args:[D.Y]}),new D.fr(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Y]}])
C.b.G(u,new D.fs(q))}return!0},
hA:function(){return this.E(null)},
ak:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fr.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fs.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Y.prototype={}
D.bu.prototype={}
D.bv.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cU.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cU))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d8.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fP.prototype={
i4:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i0:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.db.prototype={}
X.fY.prototype={
aY:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a8(o.a+n*m,o.b+u*t)
t=q.a.gaP()
r=new X.aS(a,V.be(),q.x,t,s)
r.b=!0
q.z=new P.ad(p,!1)
q.x=s
return r},
cp:function(a,b){this.r=a.a
return!1},
b9:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eh()
if(typeof u!=="number")return u.aa()
this.r=(u&~t)>>>0
return!1},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aY(a,b))
return!0},
i5:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.c9(new V.K(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
ft:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.db(c,r.a.gaP(),b)
s.b=!0
t.E(s)
r.y=new P.ad(u,!1)
r.x=V.be()}}
X.aj.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aj))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aS.prototype={}
X.hp.prototype={
bH:function(a,b,c){var u=this,t=new P.ad(Date.now(),!1),s=u.a.gaP(),r=new X.aS(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cp:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bH(a,b,!0))
return!0},
b9:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eh()
if(typeof t!=="number")return t.aa()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bH(a,b,!0))
return!0},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bH(a,b,!1))
return!0},
i6:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.c9(new V.K(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdl:function(){var u=this.b
return u==null?this.b=D.I():u},
gbu:function(){var u=this.c
return u==null?this.c=D.I():u},
gdR:function(){var u=this.d
return u==null?this.d=D.I():u}}
X.c9.prototype={}
X.hF.prototype={}
X.dE.prototype={}
X.ip.prototype={
aY:function(a,b){var u=this,t=new P.ad(Date.now(),!1),s=a.length>0?a[0]:V.be(),r=u.a.gaP(),q=new X.dE(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
i3:function(a){var u=this.b
if(u==null)return!1
u.E(this.aY(a,!0))
return!0},
i1:function(a){var u=this.c
if(u==null)return!1
u.E(this.aY(a,!0))
return!0},
i2:function(a){var u=this.d
if(u==null)return!1
u.E(this.aY(a,!1))
return!0}}
X.dJ.prototype={
gaP:function(){var u=this.a,t=C.i.gdi(u).c
t.toString
u=C.i.gdi(u).d
u.toString
return V.lx(0,0,t,u)},
cS:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d8(u,new X.aj(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
bW:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
az:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
return new V.a8(s-q,r-u)},
aZ:function(a){return new V.K(a.movementX,a.movementY)},
bR:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a8])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.d.an(r.pageX)
C.d.an(r.pageY)
p=o.left
C.d.an(r.pageX)
n.push(new V.a8(q-p,C.d.an(r.pageY)-o.top))}return n},
ax:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cU(u,new X.aj(t,a.altKey,a.shiftKey))},
bI:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.K()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.K()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fm:function(a){this.f=!0},
fa:function(a){this.f=!1},
fg:function(a){if(this.f&&this.bI(a))a.preventDefault()},
fq:function(a){var u
if(!this.f)return
u=this.cS(a)
this.b.i4(u)},
fo:function(a){var u
if(!this.f)return
u=this.cS(a)
this.b.i0(u)},
fv:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.ax(a)
t=r.aZ(a)
if(r.d.cp(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ax(a)
s=r.az(a)
if(r.c.cp(u,s))a.preventDefault()},
fB:function(a){var u,t,s,r=this
r.aM(a)
u=r.ax(a)
if(r.x){t=r.aZ(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b9(u,s))a.preventDefault()},
fk:function(a){var u,t,s,r=this
if(!r.bI(a)){r.aM(a)
u=r.ax(a)
if(r.x){t=r.aZ(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b9(u,s))a.preventDefault()}},
fz:function(a){var u,t,s,r=this
r.aM(a)
u=r.ax(a)
if(r.x){t=r.aZ(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b8(u,s))a.preventDefault()},
fi:function(a){var u,t,s,r=this
if(!r.bI(a)){r.aM(a)
u=r.ax(a)
if(r.x){t=r.aZ(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b8(u,s))a.preventDefault()}},
fD:function(a){var u,t,s=this
s.aM(a)
u=new V.K((a&&C.C).ghx(a),C.C.ghy(a)).w(0,180)
if(s.x){if(s.d.i5(u))a.preventDefault()
return}if(s.r)return
t=s.az(a)
if(s.c.i6(u,t))a.preventDefault()},
fF:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ax(s.y)
t=s.az(s.y)
s.d.ft(u,t,r)}},
fS:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bW(a)
u=t.bR(a)
if(t.e.i3(u))a.preventDefault()},
fO:function(a){var u
this.bW(a)
u=this.bR(a)
if(this.e.i1(u))a.preventDefault()},
fQ:function(a){var u
this.bW(a)
u=this.bR(a)
if(this.e.i2(u))a.preventDefault()}}
D.eX.prototype={$ia6:1}
D.fh.prototype={$ia6:1}
D.a6.prototype={}
D.d9.prototype={
a7:function(a){var u=this.y
if(u!=null)u.E(a)},
d_:function(a){var u=this.z
if(u!=null)u.E(a)},
fs:function(){return this.d_(null)},
fI:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.ez(s))return!1}return!0},
f4:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcZ(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.bx)this.r.push(q)
p=q.Q
if(p==null){p=new D.bs()
p.d=0
q.Q=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bu()
u.b=!0
this.a7(u)},
fM:function(a,b){var u,t,s
for(u=b.gU(b),t=this.gcZ();u.u();){s=u.gC(u)
C.b.M(this.e,s)
s.gv().M(0,t)}u=new D.bv()
u.b=!0
this.a7(u)},
ez:function(a){var u=C.b.P(this.r,a)
return u},
$aj:function(){return[D.a6]},
$ab4:function(){return[D.a6]}}
D.bx.prototype={
a7:function(a){var u=this.Q
if(u!=null)u.E(a)},
eA:function(){return this.a7(null)},
ga9:function(){var u=this.d!=null?1:0
return u+4},
$ia6:1}
D.i3.prototype={$ia6:1}
V.X.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.as.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.fq.prototype={}
V.dd.prototype={
ac:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.L])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dd))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.L],o=V.bO(H.b([q.a,q.d,q.r],p),3,0),n=V.bO(H.b([q.b,q.e,q.x],p),3,0),m=V.bO(H.b([q.c,q.f,q.y],p),3,0)
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
V.aw.prototype={
ac:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.L])
return t},
dP:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.c7()
u=1/b1
t=-n
s=-a0
return V.ax((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ax(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bc:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.U(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aw))return!1
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
i:function(a){return this.S()},
H:function(a){var u,t,s,r,q,p=this,o=[P.L],n=V.bO(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bO(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bO(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bO(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
S:function(){return this.H("")}}
V.a8.prototype={
K:function(a,b){return new V.a8(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.U.prototype={
B:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.bf.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bf))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.dn.prototype={
gab:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dn))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.K.prototype={
b4:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.K(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.lJ
return u==null?$.lJ=new V.K(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.K(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.B.prototype={
b4:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cl:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.B(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aA:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.B(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.A().a)return V.cq()
return new V.B(this.a/b,this.b/b,this.c/b)},
dQ:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.cr.prototype={
b4:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cr))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
U.f4.prototype={
bC:function(a){var u=V.ko(a,this.c,this.b)
return u},
gv:function(){var u=this.y
return u==null?this.y=D.I():u},
I:function(a){var u=this.y
if(u!=null)u.E(a)},
scz:function(a,b){},
scm:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bC(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.I(s)}},
sco:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bC(u)}s=new D.z("minimumLocation",s,t.c)
s.b=!0
t.I(s)}},
sY:function(a,b){var u,t=this
b=t.bC(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.z("location",u,b)
u.b=!0
t.I(u)}},
scn:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.z("maximumVelocity",r,a)
r.b=!0
s.I(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.z("velocity",t,a)
t.b=!0
u.I(t)}},
sc7:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.z("dampening",u,a)
u.b=!0
this.I(u)}},
ao:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.cW.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.I():u},
ap:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cW))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.bZ.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.I():u},
I:function(a){var u=this.e
if(u!=null)u.E(a)},
a8:function(){return this.I(null)},
eC:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaL(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gv()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bu()
u.b=!0
this.I(u)},
fK:function(a,b){var u,t
for(u=b.gU(b),t=this.gaL();u.u();)u.gC(u).gv().M(0,t)
u=new D.bv()
u.b=!0
this.I(u)},
ap:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a5(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.ap(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.c7():u
r=s.e
if(r!=null)r.ak(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bZ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.E(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ae]},
$ab4:function(){return[U.ae]},
$iae:1}
U.ae.prototype={}
U.dq.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.I():u},
I:function(a){var u=this.y
if(u!=null)u.E(a)},
see:function(a){var u
a=V.ko(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.A().a)){this.a=a
u=new D.z("yaw",u,a)
u.b=!0
this.I(u)}},
se2:function(a,b){var u
b=V.ko(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.A().a)){this.b=b
u=new D.z("pitch",u,b)
u.b=!0
this.I(u)}},
se8:function(a){var u
a=V.ko(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.A().a)){this.c=a
u=new D.z("roll",u,a)
u.b=!0
this.I(u)}},
ap:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.see(u.a+u.d*b.y)
u.se2(0,u.b+u.e*b.y)
u.se8(u.c+u.f*b.y)
u.x=V.lp(u.c).p(0,V.lo(u.b)).p(0,V.ln(u.a))
t=u.y
if(t!=null)t.ak(0)}return u.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dq))return!1
u=r.a
t=b.a
s=$.A().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotator: ["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+"], ["+V.D(u.d,3,0)+", "+V.D(u.e,3,0)+", "+V.D(u.f,3,0)+"]"}}
U.dK.prototype={
gv:function(){var u=this.cy
return u==null?this.cy=D.I():u},
I:function(a){var u=this.cy
if(u!=null)u.E(a)},
a8:function(){return this.I(null)},
b1:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdl().n(0,u.gbJ())
u.a.c.gdR().n(0,u.gbL())
u.a.c.gbu().n(0,u.gbN())
return!0},
bK:function(a){var u=this
if(!J.E(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bM:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaS")
if(!n.y)return
if(n.x){u=a.d.K(0,a.y)
u=new V.K(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.K(0,a.y)
u=new V.K(t.a,t.b).p(0,2).w(0,u.gab())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.K(s.a,s.b).p(0,2).w(0,u.gab())
s=n.b
q=r.a
if(typeof q!=="number")return q.V()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
n.b.sW(0)
t=t.K(0,a.z)
n.Q=new V.K(t.a,t.b).p(0,2).w(0,u.gab())}n.a8()},
bO:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sW(t*10*s)
r.a8()}},
ap:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.ch=r
u=b.y
t.b.ao(0,u)
t.cx=V.lp(t.b.d)}return t.cx},
$iae:1}
U.dL.prototype={
gv:function(){var u=this.fx
return u==null?this.fx=D.I():u},
I:function(a){var u=this.fx
if(u!=null)u.E(a)},
a8:function(){return this.I(null)},
b1:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdl().n(0,s.gbJ())
s.a.c.gdR().n(0,s.gbL())
s.a.c.gbu().n(0,s.gbN())
u=s.a.d
t=u.f
u=t==null?u.f=D.I():t
u.n(0,s.geW())
u=s.a.d
t=u.d
u=t==null?u.d=D.I():t
u.n(0,s.geY())
u=s.a.e
t=u.b
u=t==null?u.b=D.I():t
u.n(0,s.ghb())
u=s.a.e
t=u.d
u=t==null?u.d=D.I():t
u.n(0,s.gh9())
u=s.a.e
t=u.c
u=t==null?u.c=D.I():t
u.n(0,s.gh7())
return!0},
as:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.K(u,t)},
bK:function(a){var u=this
H.l(a,"$iaS")
if(!J.E(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bM:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaS")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.K(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.as(new V.K(t.a,t.b).p(0,2).w(0,u.gab()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.as(new V.K(s.a,s.b).p(0,2).w(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.as(new V.K(t.a,t.b).p(0,2).w(0,u.gab()))}n.a8()},
bO:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sW(-t*10*u)
r.a8()}},
eX:function(a){var u=this
if(H.l(a,"$idb").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eZ:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaS")
if(!J.E(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.as(new V.K(s.a,s.b).p(0,2).w(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.as(new V.K(t.a,t.b).p(0,2).w(0,u.gab()))
n.a8()},
hc:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ha:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idE")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.K(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.as(new V.K(t.a,t.b).p(0,2).w(0,u.gab()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.as(new V.K(s.a,s.b).p(0,2).w(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.as(new V.K(t.a,t.b).p(0,2).w(0,u.gab()))}n.a8()},
h8:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sW(-t*10*u)
r.a8()}},
ap:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.dy=r
u=b.y
t.c.ao(0,u)
t.b.ao(0,u)
t.fr=V.ln(t.b.d).p(0,V.lo(t.c.d))}return t.fr},
$iae:1}
U.dM.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.I():u},
I:function(a){var u=this.r
if(u!=null)u.E(a)},
b1:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.I():t
t=r.gf0()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.I():s).n(0,t)
return!0},
f1:function(a){var u,t,s,r,q=this
if(!J.E(q.b,q.a.b.c))return
H.l(a,"$ic9")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.I(u)}},
ap:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kJ(u,u,u,1)}return t.f},
$iae:1}
M.d0.prototype={
aw:function(a){var u=this.y
if(u!=null)u.E(a)},
eD:function(){return this.aw(null)},
fc:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gar(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bs()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bu()
u.b=!0
this.aw(u)},
fe:function(a,b){var u,t
for(u=b.gU(b),t=this.gar();u.u();)u.gC(u).gv().M(0,t)
u=new D.bv()
u.b=!0
this.aw(u)},
sba:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().M(0,t.gar())
u=t.d
t.d=a
if(a!=null)a.gv().n(0,t.gar())
s=new D.z("technique",u,t.d)
s.b=!0
t.aw(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.I():u},
aU:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.e5(a1.d)
u=a1.c
u.toString
t=a2.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.t(s)
o=C.d.an(p*s)
p=q.b
if(typeof r!=="number")return H.t(r)
n=C.d.an(p*r)
p=C.d.an(q.c*s)
a2.c=p
q=C.d.an(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.b
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.ax(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.e4(i)
t=$.ls
if(t==null){t=V.ne()
q=$.lM
if(q==null)q=$.lM=new V.B(0,1,0)
p=$.lK
if(p==null)p=$.lK=new V.B(0,0,-1)
h=p.w(0,Math.sqrt(p.D(p)))
q=q.aA(h)
g=q.w(0,Math.sqrt(q.D(q)))
f=h.aA(g)
e=new V.B(t.a,t.b,t.c)
d=g.V(0).D(e)
c=f.V(0).D(e)
b=h.V(0).D(e)
t=V.ax(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ls=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.ap(0,a2,u)
if(a0!=null)a=a0.p(0,a)}a2.db.e4(a)
u=a1.d
if(u!=null)u.ao(0,a2)
for(u=a1.e.a,u=new J.a5(u,u.length);u.u();)u.d.ao(0,a2)
for(u=a1.e.a,u=new J.a5(u,u.length);u.u();)u.d.aU(a2)
a1.b.toString
a2.cy.cq()
a2.db.cq()
a1.c.toString
a2.e3()}}
A.cQ.prototype={}
A.eS.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a_.prototype={
gaq:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a_))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.h3.prototype={
es:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.S("")
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
A.os(c3,u)
A.ou(c3,u)
A.ot(c3,u)
A.ow(c3,u)
A.ox(c3,u)
A.ov(c3,u)
A.oy(c3,u)
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
m=A.or(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cT(n,35633)
b8.f=b8.cT(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.q(P.v("Failed to link shader: "+H.e(l)))}b8.h3()
b8.h5()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.l(b8.y.N(0,"invViewMat"),"$iaf")
if(t)b8.dy=H.l(b8.y.N(0,"objMat"),"$iaf")
if(r)b8.fr=H.l(b8.y.N(0,"viewObjMat"),"$iaf")
b8.fy=H.l(b8.y.N(0,"projViewObjMat"),"$iaf")
if(c3.go)b8.fx=H.l(b8.y.N(0,"viewMat"),"$iaf")
if(c3.x1)b8.k1=H.l(b8.y.N(0,"txt2DMat"),"$icn")
if(c3.x2)b8.k2=H.l(b8.y.N(0,"txtCubeMat"),"$iaf")
if(c3.y1)b8.k3=H.l(b8.y.N(0,"colorMat"),"$iaf")
b8.r1=H.b([],[A.af])
t=c3.bl
if(t>0){b8.k4=b8.y.N(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.q(P.v(c0+q+c1))
s.push(H.l(j,"$iaf"))}}t=c3.a
if(t.a)b8.r2=H.l(b8.y.N(0,"emissionClr"),"$iG")
if(t.c)b8.ry=H.l(b8.y.N(0,"emissionTxt"),"$ia0")
t=c3.b
if(t.a)b8.x1=H.l(b8.y.N(0,"ambientClr"),"$iG")
if(t.c)b8.y1=H.l(b8.y.N(0,"ambientTxt"),"$ia0")
t=c3.c
if(t.a)b8.y2=H.l(b8.y.N(0,"diffuseClr"),"$iG")
if(t.c)b8.aB=H.l(b8.y.N(0,"diffuseTxt"),"$ia0")
t=c3.d
if(t.a)b8.bm=H.l(b8.y.N(0,"invDiffuseClr"),"$iG")
if(t.c)b8.dr=H.l(b8.y.N(0,"invDiffuseTxt"),"$ia0")
t=c3.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.du=H.l(b8.y.N(0,"shininess"),"$iV")
if(s)b8.ds=H.l(b8.y.N(0,"specularClr"),"$iG")
if(t.c)b8.dt=H.l(b8.y.N(0,"specularTxt"),"$ia0")}if(c3.f.c)b8.dv=H.l(b8.y.N(0,"bumpTxt"),"$ia0")
if(c3.db){b8.dw=H.l(b8.y.N(0,"envSampler"),"$ia0")
t=c3.r
if(t.a)b8.dz=H.l(b8.y.N(0,"reflectClr"),"$iG")
if(t.c)b8.dA=H.l(b8.y.N(0,"reflectTxt"),"$ia0")
t=c3.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dB=H.l(b8.y.N(0,"refraction"),"$iV")
if(s)b8.dC=H.l(b8.y.N(0,"refractClr"),"$iG")
if(t.c)b8.dD=H.l(b8.y.N(0,"refractTxt"),"$ia0")}}t=c3.y
if(t.a)b8.dE=H.l(b8.y.N(0,"alpha"),"$iV")
if(t.c)b8.dF=H.l(b8.y.N(0,"alphaTxt"),"$ia0")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.c8=new H.J([r,A.bh])
b8.c9=new H.J([r,[P.o,A.cl]])
for(r=[A.cl],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.q(P.v(c0+o+c1))
H.l(j,"$iG")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.q(P.v(c0+o+c1))
H.l(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.q(P.v(c0+o+c1))
H.l(c,"$iG")
if(typeof g!=="number")return g.aa()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.q(P.v(c0+o+c1))
H.l(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.q(P.v(c0+o+c1))
H.l(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.q(P.v(c0+o+c1))
H.l(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cl(j,d,c,a3,a2,a1))}b8.c9.m(0,g,e)
q=b8.c8
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.v(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.ca=new H.J([r,A.bh])
b8.cb=new H.J([r,[P.o,A.cm]])
for(r=[A.cm],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.aa()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.q(P.v(c0+a4+c1))
H.l(j,"$iG")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.q(P.v(c0+a4+c1))
H.l(d,"$iG")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.q(P.v(c0+a4+c1))
H.l(c,"$iG")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.q(P.v(c0+a4+c1))
H.l(j,"$iG")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.q(P.v(c0+a4+c1))
H.l(d,"$iG")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.q(P.v(c0+o+c1))
H.l(c,"$ibD")
a8=c}else a8=b9
e.push(new A.cm(a7,a6,a5,j,d,a8))}b8.cb.m(0,g,e)
q=b8.ca
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.v(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.cc=new H.J([r,A.bh])
b8.cd=new H.J([r,[P.o,A.co]])
for(r=[A.co],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.q(P.v(c0+o+c1))
H.l(j,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.q(P.v(c0+o+c1))
H.l(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.q(P.v(c0+o+c1))
H.l(c,"$iG")
if(typeof g!=="number")return g.aa()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.q(P.v(c0+o+c1))
H.l(b,"$icn")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.q(P.v(c0+o+c1))
H.l(b,"$ia0")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.q(P.v(c0+o+c1))
H.l(b,"$ia0")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.q(P.v(c0+o+c1))
H.l(a,"$ick")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.q(P.v(c0+o+c1))
H.l(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.q(P.v(c0+o+c1))
H.l(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.q(P.v(c0+o+c1))
H.l(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.co(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.cd.m(0,g,e)
q=b8.cc
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.v(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.ce=new H.J([r,A.bh])
b8.cf=new H.J([r,[P.o,A.cp]])
for(r=[A.cp],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.q(P.v(c0+o+c1))
H.l(j,"$iG")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.q(P.v(c0+o+c1))
H.l(d,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.q(P.v(c0+o+c1))
H.l(c,"$iG")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.q(P.v(c0+o+c1))
H.l(b,"$iG")
if(typeof g!=="number")return g.aa()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.q(P.v(c0+o+c1))
H.l(a,"$iG")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.q(P.v(c0+o+c1))
H.l(a0,"$iG")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.q(P.v(c0+o+c1))
H.l(b2,"$iV")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.q(P.v(c0+o+c1))
H.l(b3,"$iV")
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
if(a==null)H.q(P.v(c0+a4+c1))
H.l(a,"$ick")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.q(P.v(c0+a4+c1))
H.l(a,"$iV")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.q(P.v(c0+a4+c1))
H.l(a0,"$iV")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.q(P.v(c0+a4+c1))
H.l(a,"$iV")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.q(P.v(c0+a4+c1))
H.l(a0,"$iV")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.q(P.v(c0+a4+c1))
H.l(b2,"$iV")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.q(P.v(c0+a4+c1))
H.l(a,"$ibD")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.q(P.v(c0+o+c1))
H.l(a,"$ibD")
b0=a}else b0=b9
e.push(new A.cp(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.cf.m(0,g,e)
q=b8.ce
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.q(P.v(c0+o+c1))
q.m(0,g,j)}}}},
af:function(a,b){if(b!=null&&b.d>=6)a.ej(b)}}
A.cR.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cY.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dl.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dt.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h6.prototype={
i:function(a){return this.aB}}
A.cl.prototype={}
A.cm.prototype={}
A.co.prototype={}
A.cp.prototype={}
A.dr.prototype={
ew:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cT:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.v("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
h3:function(){var u,t,s,r=this,q=H.b([],[A.cQ]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cQ(p,t.name,s))}r.x=new A.eS(q)},
h5:function(){var u,t,s,r=this,q=H.b([],[A.dG]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hw(t.type,t.size,t.name,s))}r.y=new A.iB(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.bh(u,b,c)
else return A.kM(u,this.r,b,a,c)},
eR:function(a,b,c){var u=this.a
if(a===1)return new A.bD(u,b,c)
else return A.kM(u,this.r,b,a,c)},
eS:function(a,b,c){var u=this.a
if(a===1)return new A.a0(u,b,c)
else return A.kM(u,this.r,b,a,c)},
bj:function(a,b){return new P.dX(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hw:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.ix(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.ck(u.a,c,d)
case 35667:return new A.iy(u.a,c,d)
case 35668:return new A.iz(u.a,c,d)
case 35669:return new A.iA(u.a,c,d)
case 35674:return new A.iC(u.a,c,d)
case 35675:return new A.cn(u.a,c,d)
case 35676:return new A.af(u.a,c,d)
case 35678:return u.eR(b,c,d)
case 35680:return u.eS(b,c,d)
case 35670:throw H.c(u.bj("BOOL",c))
case 35671:throw H.c(u.bj("BOOL_VEC2",c))
case 35672:throw H.c(u.bj("BOOL_VEC3",c))
case 35673:throw H.c(u.bj("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dG.prototype={}
A.iB.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
S:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bh.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.ck.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cn.prototype={
al:function(a){var u=new Float32Array(H.bJ(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.af.prototype={
al:function(a){var u=new Float32Array(H.bJ(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bD.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.a0.prototype={
ej:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jO.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cl(s.b,b).cl(s.d.cl(s.c,b),c)
a.sY(0,new V.U(r.a,r.b,r.c))
a.sea(r.w(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sdf(new V.bf(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jY.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.k_.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.t(p)
s=-s*p
u=r*p
a.sY(0,new V.U(s,u,q))
u=new V.B(s,u,q)
a.sea(u.w(0,Math.sqrt(u.D(u))))
a.sdf(new V.bf(1-c,2+c,-1,-1))}}
F.k0.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.k1.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kj.prototype={
$2:function(a,b){return 0}}
F.kk.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.t(s)
u=a.f
t=new V.B(u.a,u.b,u.c)
s=t.w(0,Math.sqrt(t.D(t))).p(0,this.b+s)
a.sY(0,new V.U(s.a,s.b,s.c))}}
F.km.prototype={
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}}
F.k9.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.U(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jZ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.l8(n.$1(o),m)
m=J.l8(n.$1(o+3.141592653589793/p.c),m).K(0,l)
m=new V.B(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.D(m)))
n=$.lL
if(n==null){n=new V.B(1,0,0)
$.lL=n
t=n}else t=n
if(!J.E(u,t)){n=$.lN
if(n==null){n=new V.B(0,0,1)
$.lN=n
t=n}else t=n}n=u.aA(t)
s=n.w(0,Math.sqrt(n.D(n)))
n=s.aA(u)
t=n.w(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.p(0,n*m)
m=s.p(0,q*m)
a.sY(0,l.B(0,new V.U(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b6.prototype={
b2:function(){var u=this
if(!u.gb3()){C.b.M(u.a.a.d.b,u)
u.a.a.Z()}u.bS()
u.bT()
u.fV()},
bX:function(a){this.a=a
a.d.b.push(this)},
bY:function(a){this.b=a
a.d.c.push(this)},
h2:function(a){this.c=a
a.d.d.push(this)},
bS:function(){var u=this.a
if(u!=null){C.b.M(u.d.b,this)
this.a=null}},
bT:function(){var u=this.b
if(u!=null){C.b.M(u.d.c,this)
this.b=null}},
fV:function(){var u=this.c
if(u!=null){C.b.M(u.d.d,this)
this.c=null}},
gb3:function(){return this.a==null||this.b==null||this.c==null},
eL:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cq()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dQ())return
return s.w(0,Math.sqrt(s.D(s)))},
eN:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.B(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.D(r)))
r=t.K(0,q)
r=new V.B(r.a,r.b,r.c)
r=s.aA(r.w(0,Math.sqrt(r.D(r))))
return r.w(0,Math.sqrt(r.D(r)))},
c2:function(){var u,t=this
if(t.d!=null)return!0
u=t.eL()
if(u==null){u=t.eN()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
eK:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cq()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dQ())return
return s.w(0,Math.sqrt(s.D(s)))},
eM:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.K(0,g)
l=new V.B(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.V(0)}else{p=(l-u.b)/r
l=d.K(0,g).p(0,p).B(0,g).K(0,j)
l=new V.B(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.V(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.D(l)))
l=o.aA(q)
l=l.w(0,Math.sqrt(l.D(l))).aA(o)
q=l.w(0,Math.sqrt(l.D(l)))}return q},
c0:function(){var u,t=this
if(t.e!=null)return!0
u=t.eK()
if(u==null){u=t.eM()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
ghr:function(a){var u=this
if(J.E(u.a,u.b))return!0
if(J.E(u.b,u.c))return!0
if(J.E(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){var u,t,s=this
if(s.gb3())return a+"disposed"
u=a+C.a.aj(J.a4(s.a.e),0)+", "+C.a.aj(J.a4(s.b.e),0)+", "+C.a.aj(J.a4(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.H("")}}
F.ft.prototype={}
F.i0.prototype={
b6:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.c2.prototype={
b2:function(){var u=this
if(!u.gb3()){C.b.M(u.a.a.c.b,u)
u.a.a.Z()}u.bS()
u.bT()},
bX:function(a){this.a=a
a.c.b.push(this)},
bY:function(a){this.b=a
a.c.c.push(this)},
bS:function(){var u=this.a
if(u!=null){C.b.M(u.c.b,this)
this.a=null}},
bT:function(){var u=this.b
if(u!=null){C.b.M(u.c.c,this)
this.b=null}},
gb3:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){if(this.gb3())return a+"disposed"
return a+C.a.aj(J.a4(this.a.e),0)+", "+C.a.aj(J.a4(this.b.e),0)},
S:function(){return this.H("")}}
F.fR.prototype={}
F.iv.prototype={
b6:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
return t==u.e}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
return t==u.e}else return!1}}}
F.cd.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.aj(J.a4(u.e),0)},
S:function(){return this.H("")}}
F.hT.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.I():u},
b7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.A()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.n(0,r.ht())}h.a.A()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.cd()
if(n.a==null)H.q(P.v("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.n4(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bX(l,k,i)}g=h.e
if(g!=null)g.ak(0)},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.ak(0)
return u},
hR:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aK(o,0)])
for(o=[F.bi];u.length!==0;){t=C.b.ghG(u)
C.b.ct(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b6(0,t,q)){s.push(q)
C.b.ct(u,r)}}if(s.length>1)b.b7(s)}}p.a.A()
p.c.cu()
p.d.cu()
p.b.ia()
p.c.cv(new F.iv())
p.d.cv(new F.i0())
o=p.e
if(o!=null)o.ak(0)},
bZ:function(){this.hR(new F.iW(),new F.hx())},
ci:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.ci()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdS(new V.B(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.B(s,r,o).w(0,Math.sqrt(s*s+r*r+o*o))
if(!J.E(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}o=p.e
if(o!=null)o.ak(0)},
hp:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.b1()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b0().a)!==0)++s
if((t&$.b_().a)!==0)++s
if((t&$.bm().a)!==0)++s
if((t&$.b2().a)!==0)++s
if((t&$.cL().a)!==0)++s
if((t&$.cM().a)!==0)++s
if((t&$.bQ().a)!==0)++s
if((t&$.aZ().a)!==0)++s
r=a4.gcE(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.L])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cS])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hj(m)
k=l.gcE(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cS(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hQ(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bJ(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cT(new Z.dO(a1,d),o,a4)
c.b=H.b([],[Z.bt])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)}a=Z.kP(u,34963,b)
c.b.push(new Z.bt(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)}a=Z.kP(u,34963,b)
c.b.push(new Z.bt(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.A()
b.push(t.e)}a=Z.kP(u,34963,b)
c.b.push(new Z.bt(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.H(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.H(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.H(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.H(t))}return C.b.j(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.E(null)}}
F.hU.prototype={
hf:function(a){var u,t,s,r,q,p=H.b([],[F.b6]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.d(a,r)
r=a[r]
if(s>=q)return H.d(a,s)
q=a[s]
t.a.n(0,u)
t.a.n(0,r)
t.a.n(0,q)
p.push(F.bX(u,r,q))}}return p},
hg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b6])
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
h.push(F.bX(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bX(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bX(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bX(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cv:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b6(0,p,n)){p.b2()
break}}}}},
cu:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghr(s)
if(t)s.b2()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].c2())s=!1
return s},
c1:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].c0())s=!1
return s},
ci:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.B(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.B(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.E(null)}},
i:function(a){return this.S()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
S:function(){return this.H("")}}
F.hV.prototype={
gl:function(a){return this.b.length},
cv:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b6(0,p,n)){p.b2()
break}}}}},
cu:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.E(s.a,s.b)
if(t)s.b2()}},
i:function(a){return this.S()},
H:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].H(a+(""+u+". ")))}return C.b.j(s,"\n")},
S:function(){return this.H("")}}
F.hW.prototype={
gl:function(a){return this.b.length},
ia:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.b.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.S()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
S:function(){return this.H("")}}
F.bi.prototype={
c6:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dN(u.cx,r,o,t,s,q,p,a,n)},
ht:function(){return this.c6(null)},
sY:function(a,b){var u
if(!J.E(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdS:function(a){var u
a=a==null?null:a.w(0,Math.sqrt(a.D(a)))
if(!J.E(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
sea:function(a){var u
if(!J.E(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sdf:function(a){var u
if(!J.E(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
hQ:function(a){var u,t,s=this
if(a.q(0,$.b1())){u=s.f
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.b0())){u=s.r
t=[P.L]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.b_())){u=s.x
t=[P.L]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bm())){u=s.y
t=[P.L]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.b2())){u=s.z
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cL())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cM())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bQ()))return H.b([s.ch],[P.L])
else if(a.q(0,$.aZ())){u=s.cx
t=[P.L]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.L])},
c2:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cq()
t.d.G(0,new F.j0(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
c0:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cq()
t.d.G(0,new F.j_(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.aj(J.a4(s.e),0))
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
q.push(V.D(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.j(q,", ")
return a+"{"+t+"}"},
S:function(){return this.H("")}}
F.j0.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.j_.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iR.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.v("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Z()
return!0},
hh:function(a,b,c,d,e,f){var u=F.dN(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].c2()
return!0},
c1:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].c0()
return!0},
hq:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.E(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.S()},
H:function(a){var u,t,s,r
this.A()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].H(a))
return C.b.j(u,"\n")},
S:function(){return this.H("")}}
F.iS.prototype={
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
G:function(a,b){var u=this
C.b.G(u.b,b)
C.b.G(u.c,new F.iT(u,b))
C.b.G(u.d,new F.iU(u,b))},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.iT.prototype={
$1:function(a){if(!J.E(a.a,this.a))this.b.$1(a)}}
F.iU.prototype={
$1:function(a){var u=this.a
if(!J.E(a.a,u)&&!J.E(a.b,u))this.b.$1(a)}}
F.iV.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.iX.prototype={}
F.iW.prototype={
b6:function(a,b,c){return J.E(b.f,c.f)}}
F.iY.prototype={}
F.hx.prototype={
b7:function(a){var u,t,s,r=V.cq()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.B(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.w(0,Math.sqrt(r.D(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t)a[t].sdS(r)
return}}
F.iZ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
O.dc.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.I():u},
a_:function(a){var u=this.fr
if(u!=null)u.E(a)},
bB:function(){return this.a_(null)},
d0:function(a){this.a=null
this.a_(a)},
fZ:function(){return this.d0(null)},
f6:function(a,b){var u=new D.bu()
u.b=!0
this.a_(u)},
f8:function(a,b){var u=new D.bv()
u.b=!0
this.a_(u)},
cR:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.J(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.ga9()
o=u.h(0,q.ga9())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cR])
u.G(0,new O.ha(g,n))
C.b.aX(n,new O.hb())
m=new H.J(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.ga9()
o=m.h(0,q.ga9())
m.m(0,p,o==null?1:o)}l=H.b([],[A.cY])
m.G(0,new O.hc(g,l))
C.b.aX(l,new O.hd())
k=new H.J(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.ga9()
o=k.h(0,q.ga9())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dl])
k.G(0,new O.he(g,j))
C.b.aX(j,new O.hf())
i=new H.J(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.ga9()
p=i.h(0,q.ga9())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dt])
i.G(0,new O.hg(g,h))
C.b.aX(h,new O.hh())
f=C.c.a3(g.e.a.length+3,4)
g.dy.e
return A.nc(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
ae:function(a,b){if(b!=null)if(!C.b.P(a,b)){b.a=a.length
a.push(b)}},
ao:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.a5(u,u.length);u.u();){t=u.d
t.toString
s=$.hi
t.a=s==null?$.hi=new V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.ap(0,b,t)}},
ic:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cR()
u=b4.fr.h(0,b3.aB)
if(u==null){u=A.nb(b3,b4.a)
t=u.b
if(t.length===0)H.q(P.v("May not cache a shader with no name."))
if(b4.fr.c4(0,t))H.q(P.v('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bm
b3=b5.e
if(!(b3 instanceof Z.cT))b3=b5.e=null
if(b3==null||!b3.d.q(0,r)){b3=s.k4
if(b3)b5.d.au()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.c1()
p.a.c1()
p=p.e
if(p!=null)p.ak(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.hq()
o=o.e
if(o!=null)o.ak(0)}m=b5.d.hp(new Z.j2(b4.a),r)
m.aS($.b1()).e=b2.a.Q.c
if(b3)m.aS($.b0()).e=b2.a.cx.c
if(q)m.aS($.b_()).e=b2.a.ch.c
if(s.r2)m.aS($.bm()).e=b2.a.cy.c
if(p)m.aS($.b2()).e=b2.a.db.c
if(s.ry)m.aS($.aZ()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.dz])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.hB()
if(s.fr){b3=b2.a
p=b4.dx
p=p.ga4(p)
b3=b3.dy
b3.toString
b3.al(p.ac(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga4(p)
o=b4.dx
o=b4.cx=p.p(0,o.ga4(o))
p=o}b3=b3.fr
b3.toString
b3.al(p.ac(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gi8()
o=b4.dx
o=b4.ch=p.p(0,o.ga4(o))
p=o}b3=b3.fy
b3.toString
b3.al(p.ac(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.ga4(p)
b3=b3.fx
b3.toString
b3.al(p.ac(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.al(C.j.ac(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.al(C.j.ac(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.al(C.j.ac(p,!0))}if(s.bl>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.d(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.d(b3,j)
b3=b3[j]
i=new Float32Array(H.bJ(p.ac(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}b3=s.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ae(l,b2.f.e)
b3=b2.a
p=b2.f.e
b3.af(b3.ry,p)}if(s.k1){b3=s.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ae(l,b2.r.e)
b3=b2.a
p=b2.r.e
b3.af(b3.y1,p)}b3=s.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ae(l,b2.x.e)
b3=b2.a
p=b2.x.e
b3.af(b3.aB,p)}b3=s.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bm
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ae(l,b2.y.e)
b3=b2.a
p=b2.y.e
b3.af(b3.dr,p)}b3=s.e
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.z.ch
o=o.du
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.ds
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ae(l,b2.z.e)
b3=b2.a
p=b2.z.e
b3.af(b3.dt,p)}b3=s.z
if(b3.length>0){p=P.w
h=new H.J([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.ga9()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.bR(b2.a.c9.h(0,e),d)
n=f.gix()
b=$.aB
n=n.bc(b==null?$.aB=new V.U(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giB()
b=$.aB
n=n.bc(b==null?$.aB=new V.U(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaQ(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.ghC()){n=f.ghk()
b=c.e
b.a.uniform1f(b.d,n)
n=f.ghl()
b=c.f
b.a.uniform1f(b.d,n)
n=f.ghm()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.c8.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.ga4(p)
p=P.w
a0=new H.J([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.ga9()
d=a0.h(0,e)
if(d==null)d=0
a0.m(0,e,d+1)
c=J.bR(b2.a.cb.h(0,e),d)
n=f.gdk(f)
b=C.d.p(a.a,n.gdm(n))+C.d.p(a.b,n.gdn(n))+C.d.p(a.c,n.gdq())
a1=C.d.p(a.e,n.gdm(n))+C.d.p(a.f,n.gdn(n))+C.d.p(a.r,n.gdq())
n=C.d.p(a.y,n.gdm(n))+C.d.p(a.z,n.gdn(n))+C.d.p(a.Q,n.gdq())
n=new V.B(b,a1,n).w(0,Math.sqrt(b*b+a1*a1+n*n))
a1=c.e
b=n.a
a2=n.b
n=n.c
a1.a.uniform3f(a1.d,b,a2,n)
n=f.gaQ(f)
a2=c.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)
f.gaW()
n=f.gdk(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gbu()
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gbs(f)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaW()
if(!C.b.P(l,n)){n.a=l.length
l.push(n)}n=f.gaW()
b=n.gb5(n)
if(b){b=c.r
b.toString
a1=n.gb5(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gdL(n)
b.a.uniform1i(b.d,n)}}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.ca.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.ga4(p)
p=P.w
a3=new H.J([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.ga9()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.bR(b2.a.cd.h(0,e),d)
a4=a.p(0,f.a)
n=f.a
b=$.aB
n=n.bc(b==null?$.aB=new V.U(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.aB
n=a4.bc(n==null?$.aB=new V.U(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.c
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.d!=null||!1){n=a4.dP(0)
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
i=new Float32Array(H.bJ(new V.dd(b,a1,a2,a5,a6,a7,a8,a9,n).ac(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)}n=f.d
b=n!=null
if(b){if(b)if(!C.b.P(l,n)){n.a=l.length
l.push(n)}n=f.d
b=n!=null
if(b&&n.d>=6){a1=c.f
a1.toString
if(!b||n.d<6)a1.a.uniform1i(a1.d,0)
else{n=n.a
a1.a.uniform1i(a1.d,n)}}}n=f.r
b=c.y
b.a.uniform1f(b.d,n)
n=f.x
b=c.z
b.a.uniform1f(b.d,n)
n=f.y
b=c.Q
b.a.uniform1f(b.d,n)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.cc.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.ga4(p)
p=P.w
b1=new H.J([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.ga9()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.bR(b2.a.cf.h(0,e),d)
n=f.gi7(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gdk(f).iM()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.bc(f.gi7(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaQ(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaW()
n=f.gbu()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gbs(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giN()
b=c.x
b.a.uniform1f(b.d,n)
n=f.giO()
b=c.y
b.a.uniform1f(b.d,n)
f.gaW()
n=f.gaW()
if(!C.b.P(l,n)){n.a=l.length
l.push(n)}n=f.gaW()
b=n.gb5(n)
if(b){b=c.dx
b.toString
a1=n.gb5(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gdL(n)
b.a.uniform1i(b.d,n)}}f.gcD()
n=f.giw()
b=c.z
b.a.uniform4f(b.d,n.a,n.b,n.c,n.d)
n=f.gcD()
if(!C.b.P(l,n)){n.a=l.length
l.push(n)}n=f.gcD()
b=n.gb5(n)
if(b){b=c.dy
b.toString
a1=n.gb5(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gdL(n)
b.a.uniform1i(b.d,n)}}if(f.giA()){n=f.giz()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.giy()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.ghC()){n=f.ghk()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.ghl()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.ghm()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.ce.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.c){b2.ae(l,b2.Q.e)
b3=b2.a
p=b2.Q.e
b3.af(b3.dv,p)}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga4(p).dP(0)}b3=b3.id
b3.toString
b3.al(p.ac(0,!0))}if(s.db){b2.ae(l,b2.ch)
b3=b2.a
p=b2.ch
b3.af(b3.dw,p)
b3=s.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.dz
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ae(l,b2.cx.e)
b3=b2.a
p=b2.cx.e
b3.af(b3.dA,p)}b3=s.x
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.cy.ch
o=o.dB
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.dC
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ae(l,b2.cy.e)
b3=b2.a
p=b2.cy.e
b3.af(b3.dD,p)}}b3=s.y
p=b3.a
o=!p
if(o)n=b3.c
else n=!0
if(n){if(p){p=b2.a
n=b2.db.f
p=p.dE
p.a.uniform1f(p.d,n)}if(b3.c){b2.ae(l,b2.db.e)
p=b2.a
n=b2.db.e
p.af(p.dF,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d>=6){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(34067,p.b)}}p=b5.e
p.c_(b4)
p.aU(b4)
p.ir(b4)
if(o)b3=b3.c
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(34067,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.hz()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cR().aB}}
O.ha.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cR(a,C.c.a3(b+3,4)*4))}}
O.hb.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.hc.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cY(a,C.c.a3(b+3,4)*4))}}
O.hd.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.he.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dl(a,C.c.a3(b+3,4)*4))}}
O.hf.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.hg.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dt(a,C.c.a3(b+3,4)*4))}}
O.hh.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.h4.prototype={
ay:function(){var u,t=this
t.cG()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.a_(u)}}}
O.c5.prototype={
a_:function(a){return this.a.a_(a)},
bB:function(){return this.a_(null)},
ay:function(){},
bU:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ay()
u=s.a
u.a=null
u.a_(null)}}}
O.h5.prototype={}
O.av.prototype={
d2:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.a_(t)}},
ay:function(){this.cG()
this.d2(new V.X(1,1,1))},
saQ:function(a,b){this.bU(new A.a_(!0,!1,this.c.c))
this.d2(b)}}
O.h7.prototype={}
O.h8.prototype={
ay:function(){var u,t=this
t.cH()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.a_(u)}}}
O.h9.prototype={
d3:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.z(u.b+".shininess",t,a)
t.b=!0
u.a.a_(t)}},
ay:function(){this.cH()
this.d3(100)}}
O.dy.prototype={}
T.dz.prototype={}
T.ih.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.I():u}}
T.ii.prototype={
aK:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.W(u,"load",new T.ij(this,u,!1,b,!1,d,a),!1)},
h_:function(a,b,c){var u,t,s,r
b=V.l2(b)
u=V.l2(a.width)
t=V.l2(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kt()
s.width=u
s.height=t
r=C.i.eg(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oM(r.getImageData(0,0,s.width,s.height))}}}
T.ij.prototype={
$1:function(a){var u=this,t=u.a,s=t.h_(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.Y.ik(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hA()}++t.e}}
X.ks.prototype={}
X.fA.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.I():u}}
X.dk.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.I():u},
aI:function(a){var u=this.f
if(u!=null)u.E(a)},
eH:function(){return this.aI(null)},
saT:function(a){var u,t,s=this
if(!J.E(s.b,a)){u=s.b
if(u!=null)u.gv().M(0,s.gcL())
t=s.b
s.b=a
if(a!=null)a.gv().n(0,s.gcL())
u=new D.z("mover",t,s.b)
u.b=!0
s.aI(u)}}}
X.ic.prototype={}
V.cV.prototype={
bf:function(a){this.b=new P.fF(C.P)
this.c=null
this.d=H.b([],[[P.o,W.am]])},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.am]))
u=a.split("\n")
for(l=u.length,t=[W.am],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eQ(q,0,q.length)
n=o==null?q:o
C.N.ei(p,H.l4(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gav(m.d).push(p)}},
e0:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.am]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bk()
for(t.toString,s=new H.n(u),s=new P.bG(t.cw(new H.ba(s,s.gl(s))).a());s.u();)r.br(s.gC(s))}}
V.ki.prototype={
$1:function(a){var u=C.d.eb(this.a.ghL(),2)
if(u!=="0.00")P.l3(u+" fps")}}
V.ff.prototype={
br:function(a){var u=this
switch(a.a){case"Class":u.O(a.b,"#551")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break
case"Type":u.O(a.b,"#B11")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bk:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.io()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.u(new H.n("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.u(new H.n("_"))
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
t=K.u(new H.n("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.u(new H.n(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.u(new H.n(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.u(new H.n('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.u(new H.n('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.u(new H.n("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.u(new H.n('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aM())
t=a1.k(0,r).j(0,h)
u=K.u(new H.n("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.u(new H.n("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.u(new H.n("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.u(new H.n("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aM())
t=a1.k(0,r).j(0,e)
u=K.u(new H.n("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.u(new H.n("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.u(new H.n("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.a7()
s=[K.bb]
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.n("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.u(new H.n("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.u(new H.n("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.a7()
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.n("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.u(new H.n("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.u(new H.n(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.u(new H.n(" \n\t"))
u.a.push(t)
t=a1.k(0,p)
t.d=t.a.T("Num")
t=a1.k(0,n)
t.d=t.a.T("Num")
t=a1.k(0,m)
t.d=t.a.T("Symbol")
t=a1.k(0,j)
t.d=t.a.T("String")
t=a1.k(0,g)
t.d=t.a.T("String")
t=a1.k(0,c)
t.d=t.a.T(d)
t=a1.k(0,a0)
t.d=t.a.T(a0)
t=a1.k(0,q)
t=t.d=t.a.T(q)
u=[P.h]
t.aE(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aE(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aE(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fC.prototype={
br:function(a){var u=this
switch(a.a){case"Builtin":u.O(a.b,"#411")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Preprocess":u.O(a.b,"#737")
break
case"Reserved":u.O(a.b,"#119")
break
case"Symbol":u.O(a.b,"#611")
break
case"Type":u.O(a.b,"#171")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bk:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.io()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.u(new H.n("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.u(new H.n("_"))
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
t=K.u(new H.n("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.u(new H.n(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.u(new H.n(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.u(new H.n("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.u(new H.n("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aM())
t=e.k(0,j).j(0,i)
u=K.u(new H.n("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a7()
s=[K.bb]
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.n("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.u(new H.n("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a7()
u.a=H.b([],s)
t.a.push(u)
t=K.u(new H.n("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.u(new H.n("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.u(new H.n(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.u(new H.n(" \n\t"))
t.a.push(u)
u=e.k(0,p)
u.d=u.a.T("Num")
u=e.k(0,n)
u.d=u.a.T("Num")
u=e.k(0,m)
u.d=u.a.T("Symbol")
u=e.k(0,i)
u.d=u.a.T(j)
u=e.k(0,g)
u.d=u.a.T(h)
u=e.k(0,f)
u.d=u.a.T(f)
u=e.k(0,q)
u=u.d=u.a.T(q)
t=[P.h]
u.aE(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aE(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aE(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fD.prototype={
br:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.O(a.b,"#911")
u.O("=",t)
break
case"Id":u.O(a.b,t)
break
case"Other":u.O(a.b,t)
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break}},
bk:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.io()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.u(new H.n("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.u(new H.n("_"))
t.a.push(u)
u=K.O("0","9")
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.u(new H.n("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.u(new H.n("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.u(new H.n("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.u(new H.n('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.u(new H.n('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.u(new H.n("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.u(new H.n('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aM())
l.k(0,s).j(0,m).a.push(new K.aM())
u=l.k(0,m).j(0,m)
t=new K.a7()
t.a=H.b([],[K.bb])
u.a.push(t)
u=K.u(new H.n('</\\-!>=_"'))
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.T("Symbol")
u=l.k(0,n)
u.d=u.a.T("String")
u=l.k(0,r)
t=u.a.T(r)
u.d=t
t.aE(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.T(q)
t=l.k(0,m)
t.d=t.a.T(m)
return l}}
V.hD.prototype={
e0:function(a,b){this.d=H.b([],[[P.o,W.am]])
this.O(C.b.j(b,"\n"),"#111")},
br:function(a){},
bk:function(){return}}
V.hH.prototype={
da:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lG().gcs().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.d8(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.la(m.c).n(0,q)
o=W.mY("radio")
o.checked=s
o.name=u
W.W(o,"change",new V.hI(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.la(m.c).n(0,r.createElement("br"))},
b0:function(a,b,c){return this.da(a,b,c,!1)},
d8:function(a){var u,t,s=P.lG(),r=P.h,q=P.n6(s.gcs(),r,r)
q.m(0,this.a,a)
u=s.e6(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jv([],[]).bv(""),"",t)}}
V.hI.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.d8(u.d)}}}
V.hX.prototype={
ex:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.W(q,"scroll",new V.hZ(o),!1)},
dd:function(a){var u,t,s,r,q,p,o,n
this.h4()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hP(a),s.toString,r=new H.n(r),r=new P.bG(s.cw(new H.ba(r,r.gl(r))).a());r.u();){s=r.gC(r)
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
if(H.p7(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ez(C.x,s,C.e,!1)
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
ef:function(a){var u,t,s,r=new V.ff("dart")
r.bf("dart")
u=new V.fC("glsl")
u.bf("glsl")
t=new V.fD("html")
t.bf("html")
s=C.b.hH(H.b([r,u,t],[V.cV]),new V.i_(a))
if(s!=null)return s
r=new V.hD("plain")
r.bf("plain")
return r},
dc:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cI(s).a2(s,"+")){b0[t]=C.a.a6(s,1)
a6.push(1)
u=!0}else if(C.a.a2(s,"-")){b0[t]=C.a.a6(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.ef(a8)
r.e0(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ez(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.lc()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.m)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.m)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gU(s);a2.u();)d.appendChild(a2.gC(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
hd:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
h4:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.io()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.u(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a7()
r=[K.bb]
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.n("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.u(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.u(new H.n("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.a7()
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.n("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.u(new H.n("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.u(new H.n("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.a7()
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.n("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.u(new H.n("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.u(new H.n("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.u(new H.n("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.u(new H.n("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.a7()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.n("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.u(new H.n("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a7()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.n("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aM())
s=u.k(0,i).j(0,i)
t=new K.a7()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.n("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.T(p)
s=u.k(0,n)
s.d=s.a.T(o)
s=u.k(0,"CodeEnd")
s.d=s.a.T(m)
s=u.k(0,j)
s.d=s.a.T("Link")
s=u.k(0,i)
s.d=s.a.T(i)
this.b=u}}
V.hZ.prototype={
$1:function(a){P.lC(C.n,new V.hY(this.a))}}
V.hY.prototype={
$0:function(){var u=C.d.an(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i_.prototype={
$1:function(a){return a.a===this.a}}
T.ka.prototype={
$0:function(){this.a.sad(0,F.kY(1,null,null,1))}}
T.kb.prototype={
$0:function(){this.a.sad(0,F.m5(!0,40,1))}}
T.kc.prototype={
$0:function(){this.a.sad(0,F.m5(!1,40,0))}}
T.kd.prototype={
$0:function(){this.a.sad(0,F.mg(6,6))}}
T.ke.prototype={
$0:function(){this.a.sad(0,F.mi())}}
T.kf.prototype={
$0:function(){this.a.sad(0,F.p0())}}
T.kg.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.dc("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dc("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.en=u.i
u=J.d7.prototype
u.ep=u.i
u=P.j.prototype
u.eo=u.bw
u=W.Q.prototype
u.by=u.ah
u=W.eh.prototype
u.eq=u.at
u=K.d3.prototype
u.em=u.aD
u.cF=u.i
u=O.c5.prototype
u.cG=u.ay
u=O.av.prototype
u.cH=u.ay})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"ob","n1",20)
t(P,"oG","nK",8)
t(P,"oH","nL",8)
t(P,"oI","nM",8)
s(P,"m4","oE",10)
r(W,"oV",4,null,["$4"],["nN"],15,0)
r(W,"oW",4,null,["$4"],["nO"],15,0)
var l
q(l=E.aP.prototype,"gdX",0,0,null,["$1","$0"],["dY","hZ"],0,0)
q(l,"gdZ",0,0,null,["$1","$0"],["e_","i_"],0,0)
q(l,"gdV",0,0,null,["$1","$0"],["dW","hY"],0,0)
q(l,"gdT",0,0,null,["$1","$0"],["dU","hV"],0,0)
p(l,"ghT","hU",4)
p(l,"ghW","hX",4)
q(l=E.dA.prototype,"gcI",0,0,null,["$1","$0"],["cK","cJ"],0,0)
o(l,"gig","e7",10)
n(l=X.dJ.prototype,"gfl","fm",5)
n(l,"gf9","fa",5)
n(l,"gff","fg",2)
n(l,"gfp","fq",11)
n(l,"gfn","fo",11)
n(l,"gfu","fv",2)
n(l,"gfA","fB",2)
n(l,"gfj","fk",2)
n(l,"gfw","fz",2)
n(l,"gfh","fi",2)
n(l,"gfC","fD",18)
n(l,"gfE","fF",5)
n(l,"gfR","fS",6)
n(l,"gfN","fO",6)
n(l,"gfP","fQ",6)
q(l=D.d9.prototype,"gcZ",0,0,null,["$1","$0"],["d_","fs"],0,0)
n(l,"gfH","fI",19)
p(l,"gf3","f4",12)
p(l,"gfL","fM",12)
q(D.bx.prototype,"gbA",0,0,null,["$1","$0"],["a7","eA"],0,0)
m(V.K.prototype,"gl","b4",7)
m(V.B.prototype,"gl","b4",7)
m(V.cr.prototype,"gl","b4",7)
q(l=U.bZ.prototype,"gaL",0,0,null,["$1","$0"],["I","a8"],0,0)
p(l,"geB","eC",13)
p(l,"gfJ","fK",13)
q(l=U.dK.prototype,"gaL",0,0,null,["$1","$0"],["I","a8"],0,0)
n(l,"gbJ","bK",1)
n(l,"gbL","bM",1)
n(l,"gbN","bO",1)
q(l=U.dL.prototype,"gaL",0,0,null,["$1","$0"],["I","a8"],0,0)
n(l,"gbJ","bK",1)
n(l,"gbL","bM",1)
n(l,"gbN","bO",1)
n(l,"geW","eX",1)
n(l,"geY","eZ",1)
n(l,"ghb","hc",1)
n(l,"gh9","ha",1)
n(l,"gh7","h8",1)
n(U.dM.prototype,"gf0","f1",1)
q(l=M.d0.prototype,"gar",0,0,null,["$1","$0"],["aw","eD"],0,0)
p(l,"gfb","fc",4)
p(l,"gfd","fe",4)
q(l=O.dc.prototype,"gbg",0,0,null,["$1","$0"],["a_","bB"],0,0)
q(l,"gfY",0,0,null,["$1","$0"],["d0","fZ"],0,0)
p(l,"gf5","f6",14)
p(l,"gf7","f8",14)
q(O.c5.prototype,"gbg",0,0,null,["$1","$0"],["a_","bB"],0,0)
q(X.dk.prototype,"gcL",0,0,null,["$1","$0"],["aI","eH"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.kE,J.a,J.a5,P.e4,P.j,H.ba,P.fK,H.d1,H.iG,H.f7,H.it,P.br,H.bU,H.em,P.a1,H.fS,H.fU,H.fM,P.es,P.bF,P.bG,P.dP,P.dw,P.i8,P.dB,P.jN,P.jp,P.jj,P.e3,P.x,P.jF,P.h0,P.f3,P.fG,P.jL,P.jK,P.aJ,P.ad,P.ac,P.b5,P.hB,P.du,P.dX,P.fz,P.fB,P.o,P.R,P.bd,P.h,P.S,P.bH,P.iI,P.js,W.fb,W.cu,W.M,W.di,W.eh,W.jz,W.d2,W.aT,W.jo,W.eA,P.ju,P.ex,P.jk,P.bC,K.aM,K.d3,K.bb,K.hJ,K.hS,L.dv,L.dC,L.dD,L.im,O.b4,O.c6,E.f_,E.aP,E.hK,E.dA,Z.dO,Z.j2,Z.cT,Z.bt,Z.aX,D.f2,D.bs,D.Y,X.cU,X.d8,X.fP,X.fY,X.aj,X.hp,X.ip,X.dJ,D.eX,D.fh,D.a6,D.bx,D.i3,V.X,V.as,V.fq,V.dd,V.aw,V.a8,V.U,V.bf,V.dn,V.K,V.B,V.cr,U.dK,U.dL,U.dM,M.d0,A.cQ,A.eS,A.a_,A.cR,A.cY,A.dl,A.dt,A.h6,A.cl,A.cm,A.co,A.cp,A.dG,A.iB,F.b6,F.ft,F.c2,F.fR,F.cd,F.hT,F.hU,F.hV,F.hW,F.bi,F.iR,F.iS,F.iV,F.iX,F.iY,F.iZ,O.dy,O.c5,O.h7,T.ii,X.ks,X.ic,X.dk,V.cV,V.hH,V.hX])
s(J.a,[J.fL,J.d6,J.d7,J.b7,J.c1,J.b8,H.ca,H.bc,W.f,W.eP,W.bo,W.at,W.H,W.dR,W.ai,W.fg,W.fi,W.dT,W.d_,W.dV,W.fk,W.i,W.dY,W.au,W.fE,W.e_,W.aQ,W.fX,W.hj,W.e5,W.e6,W.ay,W.e7,W.ea,W.aA,W.ee,W.eg,W.aD,W.ei,W.aE,W.en,W.ao,W.eq,W.il,W.aG,W.et,W.ir,W.iN,W.eB,W.eD,W.eF,W.eH,W.eJ,P.aR,P.e1,P.aU,P.ec,P.hG,P.eo,P.aW,P.ev,P.eT,P.dQ,P.dp,P.ek])
s(J.d7,[J.hC,J.bE,J.b9])
t(J.kD,J.b7)
s(J.c1,[J.d5,J.d4])
t(P.fW,P.e4)
s(P.fW,[H.dH,W.j9,W.a3,P.fv])
t(H.n,H.dH)
s(P.j,[H.r,H.c4,H.cs,P.fI])
s(H.r,[H.da,H.fT])
t(H.fn,H.c4)
s(P.fK,[H.h1,H.j3])
t(H.h2,H.da)
t(H.f8,H.f7)
s(P.br,[H.hy,H.fO,H.iF,H.f1,H.hQ,P.dj,P.al,P.iH,P.iD,P.ch,P.f5,P.fe])
s(H.bU,[H.kn,H.id,H.fN,H.k5,H.k6,H.k7,P.j5,P.j4,P.j6,P.j7,P.jE,P.jD,P.jW,P.jm,P.jn,P.fV,P.h_,P.fl,P.fm,P.iM,P.iJ,P.iK,P.iL,P.jG,P.jH,P.jJ,P.jI,P.jR,P.jQ,P.jS,P.jT,W.fo,W.hl,W.hn,W.hP,W.i7,W.je,W.hw,W.hv,W.jq,W.jr,W.jC,W.jM,P.jw,P.jx,P.jX,P.fw,P.fx,P.eV,E.hL,E.hM,E.hN,E.ik,D.fr,D.fs,F.jO,F.jY,F.k_,F.k0,F.k1,F.kj,F.kk,F.km,F.k9,F.jZ,F.j0,F.j_,F.iT,F.iU,O.ha,O.hb,O.hc,O.hd,O.he,O.hf,O.hg,O.hh,T.ij,V.ki,V.hI,V.hZ,V.hY,V.i_,T.ka,T.kb,T.kc,T.kd,T.ke,T.kf,T.kg])
s(H.id,[H.i5,H.bS])
t(P.fZ,P.a1)
s(P.fZ,[H.J,W.j8])
t(H.de,H.bc)
s(H.de,[H.cw,H.cy])
t(H.cx,H.cw)
t(H.cb,H.cx)
t(H.cz,H.cy)
t(H.df,H.cz)
s(H.df,[H.hq,H.hr,H.hs,H.ht,H.hu,H.dg,H.cc])
t(P.jA,P.fI)
t(P.jl,P.jN)
t(P.ji,P.jp)
t(P.ey,P.h0)
t(P.dI,P.ey)
s(P.f3,[P.eY,P.fp])
t(P.f9,P.i8)
s(P.f9,[P.eZ,P.fF,P.iQ,P.iP])
t(P.iO,P.fp)
s(P.ac,[P.L,P.w])
s(P.al,[P.bA,P.fH])
t(P.jb,P.bH)
s(W.f,[W.F,W.fu,W.c8,W.aC,W.cA,W.aF,W.ap,W.cC,W.j1,W.ct,P.eW,P.bn])
s(W.F,[W.Q,W.b3])
s(W.Q,[W.p,P.k])
s(W.p,[W.eQ,W.eR,W.bp,W.bq,W.am,W.fy,W.c0,W.hR,W.dx,W.ia,W.ib,W.cj])
t(W.fa,W.at)
t(W.bV,W.dR)
s(W.ai,[W.fc,W.fd])
t(W.dU,W.dT)
t(W.cZ,W.dU)
t(W.dW,W.dV)
t(W.fj,W.dW)
t(W.an,W.bo)
t(W.dZ,W.dY)
t(W.bY,W.dZ)
t(W.e0,W.e_)
t(W.c_,W.e0)
t(W.bg,W.i)
s(W.bg,[W.bw,W.az,W.bB])
t(W.hk,W.e5)
t(W.hm,W.e6)
t(W.e8,W.e7)
t(W.ho,W.e8)
t(W.eb,W.ea)
t(W.dh,W.eb)
t(W.ef,W.ee)
t(W.hE,W.ef)
t(W.hO,W.eg)
t(W.cB,W.cA)
t(W.i1,W.cB)
t(W.ej,W.ei)
t(W.i2,W.ej)
t(W.i6,W.en)
t(W.er,W.eq)
t(W.ie,W.er)
t(W.cD,W.cC)
t(W.ig,W.cD)
t(W.eu,W.et)
t(W.iq,W.eu)
t(W.bj,W.az)
t(W.eC,W.eB)
t(W.ja,W.eC)
t(W.dS,W.d_)
t(W.eE,W.eD)
t(W.jf,W.eE)
t(W.eG,W.eF)
t(W.e9,W.eG)
t(W.eI,W.eH)
t(W.jt,W.eI)
t(W.eK,W.eJ)
t(W.jy,W.eK)
t(W.jc,W.j8)
t(W.jd,P.dw)
t(W.jB,W.eh)
t(P.jv,P.ju)
t(P.a9,P.jk)
t(P.e2,P.e1)
t(P.fQ,P.e2)
t(P.ed,P.ec)
t(P.hz,P.ed)
t(P.cg,P.k)
t(P.ep,P.eo)
t(P.i9,P.ep)
t(P.ew,P.ev)
t(P.is,P.ew)
t(P.eU,P.dQ)
t(P.hA,P.bn)
t(P.el,P.ek)
t(P.i4,P.el)
s(K.d3,[K.a7,L.dF])
s(E.f_,[Z.cS,A.dr,T.dz])
s(D.Y,[D.bu,D.bv,D.z,X.hF])
s(X.hF,[X.db,X.aS,X.c9,X.dE])
s(O.b4,[D.d9,U.bZ])
s(D.f2,[U.f4,U.ae])
s(U.ae,[U.cW,U.dq])
t(A.h3,A.dr)
s(A.dG,[A.bh,A.iy,A.iz,A.iA,A.iw,A.V,A.ix,A.G,A.ck,A.iC,A.cn,A.af,A.bD,A.a0])
t(F.i0,F.ft)
t(F.iv,F.fR)
t(F.iW,F.iX)
t(F.hx,F.iY)
t(O.dc,O.dy)
s(O.c5,[O.h4,O.h5,O.av])
s(O.av,[O.h8,O.h9])
t(T.ih,T.dz)
t(X.fA,X.ic)
s(V.cV,[V.ff,V.fC,V.fD,V.hD])
u(H.dH,H.iG)
u(H.cw,P.x)
u(H.cx,H.d1)
u(H.cy,P.x)
u(H.cz,H.d1)
u(P.e4,P.x)
u(P.ey,P.jF)
u(W.dR,W.fb)
u(W.dT,P.x)
u(W.dU,W.M)
u(W.dV,P.x)
u(W.dW,W.M)
u(W.dY,P.x)
u(W.dZ,W.M)
u(W.e_,P.x)
u(W.e0,W.M)
u(W.e5,P.a1)
u(W.e6,P.a1)
u(W.e7,P.x)
u(W.e8,W.M)
u(W.ea,P.x)
u(W.eb,W.M)
u(W.ee,P.x)
u(W.ef,W.M)
u(W.eg,P.a1)
u(W.cA,P.x)
u(W.cB,W.M)
u(W.ei,P.x)
u(W.ej,W.M)
u(W.en,P.a1)
u(W.eq,P.x)
u(W.er,W.M)
u(W.cC,P.x)
u(W.cD,W.M)
u(W.et,P.x)
u(W.eu,W.M)
u(W.eB,P.x)
u(W.eC,W.M)
u(W.eD,P.x)
u(W.eE,W.M)
u(W.eF,P.x)
u(W.eG,W.M)
u(W.eH,P.x)
u(W.eI,W.M)
u(W.eJ,P.x)
u(W.eK,W.M)
u(P.e1,P.x)
u(P.e2,W.M)
u(P.ec,P.x)
u(P.ed,W.M)
u(P.eo,P.x)
u(P.ep,W.M)
u(P.ev,P.x)
u(P.ew,W.M)
u(P.dQ,P.a1)
u(P.ek,P.x)
u(P.el,W.M)})()
var v={mangledGlobalNames:{w:"int",L:"double",ac:"num",h:"String",aJ:"bool",bd:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Y]},{func:1,ret:-1,args:[D.Y]},{func:1,ret:-1,args:[W.az]},{func:1,ret:P.bd,args:[,,]},{func:1,ret:-1,args:[P.w,[P.j,E.aP]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:P.L},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bw]},{func:1,ret:-1,args:[P.w,[P.j,D.a6]]},{func:1,ret:-1,args:[P.w,[P.j,U.ae]]},{func:1,ret:-1,args:[P.w,[P.j,V.aw]]},{func:1,ret:P.aJ,args:[W.Q,P.h,P.h,W.cu]},{func:1,ret:P.bd,args:[,]},{func:1,ret:P.bC,args:[,,]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:P.aJ,args:[[P.j,D.a6]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bp.prototype
C.i=W.bq.prototype
C.N=W.am.prototype
C.Q=J.a.prototype
C.b=J.b7.prototype
C.R=J.d4.prototype
C.c=J.d5.prototype
C.j=J.d6.prototype
C.d=J.c1.prototype
C.a=J.b8.prototype
C.S=J.b9.prototype
C.A=J.hC.prototype
C.Y=P.dp.prototype
C.B=W.dx.prototype
C.q=J.bE.prototype
C.C=W.bj.prototype
C.D=W.ct.prototype
C.a_=new P.eZ()
C.E=new P.eY()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.L=new P.hB()
C.e=new P.iO()
C.M=new P.iQ()
C.f=new P.jl()
C.n=new P.b5(0)
C.O=new P.b5(5e6)
C.P=new P.fG("element",!1,!1,!1)
C.v=H.b(u([127,2047,65535,1114111]),[P.w])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.T=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.U=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.w=H.b(u([]),[P.h])
C.V=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.x=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.y=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.W=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.z=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.X=new H.f8(0,{},C.w,[P.h,P.h])
C.Z=new P.bF(null,2)})();(function staticFields(){$.ar=0
$.bT=null
$.le=null
$.ma=null
$.m3=null
$.me=null
$.k2=null
$.k8=null
$.l0=null
$.bK=null
$.cG=null
$.cH=null
$.kV=!1
$.aq=C.f
$.aa=[]
$.aO=null
$.kx=null
$.lj=null
$.li=null
$.cv=P.kG(P.h,P.fB)
$.hi=null
$.lt=null
$.aB=null
$.ly=null
$.lJ=null
$.lO=null
$.lL=null
$.lM=null
$.lN=null
$.lK=null
$.lP=null
$.ls=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pd","mk",function(){return H.m9("_$dart_dartClosure")})
u($,"pe","l6",function(){return H.m9("_$dart_js")})
u($,"pf","ml",function(){return H.aH(H.iu({
toString:function(){return"$receiver$"}}))})
u($,"pg","mm",function(){return H.aH(H.iu({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ph","mn",function(){return H.aH(H.iu(null))})
u($,"pi","mo",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pl","mr",function(){return H.aH(H.iu(void 0))})
u($,"pm","ms",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pk","mq",function(){return H.aH(H.lE(null))})
u($,"pj","mp",function(){return H.aH(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"po","mu",function(){return H.aH(H.lE(void 0))})
u($,"pn","mt",function(){return H.aH(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pC","l7",function(){return P.nJ()})
u($,"pp","mv",function(){return P.nG()})
u($,"pD","mz",function(){return H.nd(H.bJ(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pG","mB",function(){return P.ns("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pH","mC",function(){return P.o9()})
u($,"pE","mA",function(){return P.ll(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pw","my",function(){return Z.ak(0)})
u($,"pq","mw",function(){return Z.ak(511)})
u($,"py","b1",function(){return Z.ak(1)})
u($,"px","b0",function(){return Z.ak(2)})
u($,"ps","b_",function(){return Z.ak(4)})
u($,"pz","bm",function(){return Z.ak(8)})
u($,"pA","b2",function(){return Z.ak(16)})
u($,"pt","cL",function(){return Z.ak(32)})
u($,"pu","cM",function(){return Z.ak(64)})
u($,"pv","mx",function(){return Z.ak(96)})
u($,"pB","bQ",function(){return Z.ak(128)})
u($,"pr","aZ",function(){return Z.ak(256)})
u($,"pc","mj",function(){return new V.fq(1e-9)})
u($,"pb","A",function(){return $.mj()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.ca,DataView:H.bc,ArrayBufferView:H.bc,Float32Array:H.cb,Float64Array:H.cb,Int16Array:H.hq,Int32Array:H.hr,Int8Array:H.hs,Uint16Array:H.ht,Uint32Array:H.hu,Uint8ClampedArray:H.dg,CanvasPixelArray:H.dg,Uint8Array:H.cc,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eP,HTMLAnchorElement:W.eQ,HTMLAreaElement:W.eR,Blob:W.bo,HTMLBodyElement:W.bp,HTMLCanvasElement:W.bq,CDATASection:W.b3,CharacterData:W.b3,Comment:W.b3,ProcessingInstruction:W.b3,Text:W.b3,CSSPerspective:W.fa,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bV,MSStyleCSSProperties:W.bV,CSS2Properties:W.bV,CSSImageValue:W.ai,CSSKeywordValue:W.ai,CSSNumericValue:W.ai,CSSPositionValue:W.ai,CSSResourceValue:W.ai,CSSUnitValue:W.ai,CSSURLImageValue:W.ai,CSSStyleValue:W.ai,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.fc,CSSUnparsedValue:W.fd,DataTransferItemList:W.fg,HTMLDivElement:W.am,DOMException:W.fi,ClientRectList:W.cZ,DOMRectList:W.cZ,DOMRectReadOnly:W.d_,DOMStringList:W.fj,DOMTokenList:W.fk,Element:W.Q,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.an,FileList:W.bY,FileWriter:W.fu,HTMLFormElement:W.fy,Gamepad:W.au,History:W.fE,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,ImageData:W.aQ,HTMLImageElement:W.c0,KeyboardEvent:W.bw,Location:W.fX,MediaList:W.hj,MessagePort:W.c8,MIDIInputMap:W.hk,MIDIOutputMap:W.hm,MimeType:W.ay,MimeTypeArray:W.ho,PointerEvent:W.az,MouseEvent:W.az,DragEvent:W.az,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.dh,RadioNodeList:W.dh,Plugin:W.aA,PluginArray:W.hE,RTCStatsReport:W.hO,HTMLSelectElement:W.hR,SourceBuffer:W.aC,SourceBufferList:W.i1,SpeechGrammar:W.aD,SpeechGrammarList:W.i2,SpeechRecognitionResult:W.aE,Storage:W.i6,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableElement:W.dx,HTMLTableRowElement:W.ia,HTMLTableSectionElement:W.ib,HTMLTemplateElement:W.cj,TextTrack:W.aF,TextTrackCue:W.ap,VTTCue:W.ap,TextTrackCueList:W.ie,TextTrackList:W.ig,TimeRanges:W.il,Touch:W.aG,TouchEvent:W.bB,TouchList:W.iq,TrackDefaultList:W.ir,CompositionEvent:W.bg,FocusEvent:W.bg,TextEvent:W.bg,UIEvent:W.bg,URL:W.iN,VideoTrackList:W.j1,WheelEvent:W.bj,Window:W.ct,DOMWindow:W.ct,CSSRuleList:W.ja,ClientRect:W.dS,DOMRect:W.dS,GamepadList:W.jf,NamedNodeMap:W.e9,MozNamedAttrMap:W.e9,SpeechRecognitionResultList:W.jt,StyleSheetList:W.jy,SVGLength:P.aR,SVGLengthList:P.fQ,SVGNumber:P.aU,SVGNumberList:P.hz,SVGPointList:P.hG,SVGScriptElement:P.cg,SVGStringList:P.i9,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aW,SVGTransformList:P.is,AudioBuffer:P.eT,AudioParamMap:P.eU,AudioTrackList:P.eW,AudioContext:P.bn,webkitAudioContext:P.bn,BaseAudioContext:P.bn,OfflineAudioContext:P.hA,WebGL2RenderingContext:P.dp,SQLResultSetRowList:P.i4})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.de.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
W.cA.$nativeSuperclassTag="EventTarget"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"
W.cD.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.mc,[])
else T.mc([])})})()
//# sourceMappingURL=test.dart.js.map
